import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { math } from 'micromark-extension-math';
import { mathFromMarkdown } from 'mdast-util-math';
import { frontmatter } from 'micromark-extension-frontmatter';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { decodeString } from 'micromark-util-decode-string';
import type { Root, RootContent } from 'mdast';
import { scan, type Match, type Settings } from './rules';

export interface Interval { from: number; to: number }
export interface TextRun extends Interval {
  value: string;
  /** Absolute source boundary -> decoded text boundary. Only safe boundaries are stored. */
  boundaries: Map<number, number>;
}
export interface Analysis { source: string; runs: TextRun[]; protected: Interval[]; omitted: Interval[]; lineOffsets: number[] }
export const overlaps = (a: Interval, b: Interval): boolean => a.from < b.to && b.from < a.to;
const location = (node: { position?: RootContent['position'] }): Interval => ({ from: node.position?.start.offset ?? 0, to: node.position?.end.offset ?? 0 });

/** CommonMark owns code, links, escapes, HTML and emphasis before any symbol conversion runs. */
export function analyze(source: string): Analysis {
  const root = fromMarkdown(source, {
    extensions: [gfm(), math(), frontmatter(['yaml'])],
    mdastExtensions: [gfmFromMarkdown(), mathFromMarkdown(), frontmatterFromMarkdown(['yaml'])],
  });
  const protectedRanges: Interval[] = [];
  const omitted: Interval[] = [];
  const runs: TextRun[] = [];
  const html: { value: string; range: Interval }[] = [];
  // Obsidian comments are omitted by the host, including their source-looking contents.
  for (const match of source.matchAll(/%%[\s\S]*?(?:%%|$)/g)) {
    const range = { from: match.index!, to: match.index! + match[0].length };
    protectedRanges.push(range); omitted.push(range);
  }
  const wiki = /!?\[\[[^\]\r\n]*(?:\](?!\])[^\]\r\n]*)*\]\]/g;
  for (const match of source.matchAll(wiki)) {
    const range = { from: match.index!, to: match.index! + match[0].length };
    protectedRanges.push(range); omitted.push(range);
  }
  // URLs are native identifiers, even where the host has not yet linkified them.
  for (const match of source.matchAll(/(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|mailto:|www\.)[^\s<>\[\]]+/g)) {
    protectedRanges.push({ from: match.index!, to: match.index! + match[0].length });
  }
  function visit(node: Root | RootContent): void {
    const range = location(node);
    if (['code', 'inlineCode', 'math', 'inlineMath', 'yaml', 'definition', 'image', 'imageReference'].includes(node.type)) {
      protectedRanges.push(range); return;
    }
    if (node.type === 'html') {
      html.push({ value: node.value, range }); protectedRanges.push(range); return;
    }
    // GFM bare emails/www links are links too. Explicit Markdown labels may render;
    // native autolink identifiers must remain atomic, including their underscores.
    if (node.type === 'link' && source[range.from] !== '[') {
      protectedRanges.push(range);
    }
    if (node.type === 'text') {
      const raw = source.slice(range.from, range.to);
      let value = '';
      const boundaries = new Map<number, number>();
      const unit = /\\[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]|&(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]+);|\r\n|[\s\S]/g;
      for (const part of raw.matchAll(unit)) {
        const start = range.from + part.index!;
        boundaries.set(start, value.length);
        value += decodeString(part[0]).replace(/\r\n?/g, '\n');
        boundaries.set(start + part[0].length, value.length);
        if (part[0].startsWith('&') || (part[0].startsWith('\\') && part[0].length === 2)) {
          protectedRanges.push({ from: start, to: start + part[0].length });
        }
      }
      // Any parser normalization we cannot reproduce is left to the host.
      if (value === node.value) runs.push({ ...range, value, boundaries });
      return;
    }
    if ('children' in node) for (const child of node.children) visit(child as RootContent);
  }
  visit(root);
  // Native inline HTML can contain ordinary text AST nodes. Protect the whole element.
  const stack: { tag: string; from: number }[] = [];
  for (const token of html) {
    for (const match of token.value.matchAll(/<\/?([A-Za-z][\w:-]*)\b[^>]*>/g)) {
      const tag = match[1].toLowerCase();
      const from = token.range.from + match.index!;
      const to = from + match[0].length;
      if (match[0].startsWith('</')) {
        const index = stack.map(x => x.tag).lastIndexOf(tag);
        if (index >= 0) { protectedRanges.push({ from: stack[index].from, to }); stack.splice(index); }
      } else if (!match[0].endsWith('/>') && !/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(tag)) stack.push({ tag, from });
    }
  }
  for (const open of stack) protectedRanges.push({ from: open.from, to: source.length });
  const lineOffsets = [0];
  for (let i = 0; i < source.length; i++) if (source[i] === '\n') lineOffsets.push(i + 1);
  return { source, runs, protected: merge(protectedRanges), omitted: merge(omitted), lineOffsets };
}

export function matchesFor(analysis: Analysis, settings: Settings): Match[] {
  const result: Match[] = [];
  for (const run of analysis.runs) {
    for (const match of scan(analysis.source.slice(run.from, run.to), settings, run.from)) {
      if (intersects(analysis.protected, match)) continue;
      // Check the original source as well as the text leaf: never use a name's tail.
      if (match.kind === 'script' && /[\p{L}\p{N}_\\^]/u.test(analysis.source[match.from - 1] ?? '')) continue;
      result.push(match);
    }
  }
  return result;
}

export interface ProjectedMatch { match: Match; from: number; to: number }
/** Exact, whitespace-insensitive projection. Entities are decoded but never become syntax. */
export function project(analysis: Analysis, settings: Settings): { text: string; matches: ProjectedMatch[] } {
  let text = '';
  const matches = matchesFor(analysis, settings);
  const projected: ProjectedMatch[] = [];
  for (const run of analysis.runs) {
    const ignored = new Set<number>();
    for (const range of analysis.omitted) {
      if (!overlaps(run, range)) continue;
      const start = run.boundaries.get(Math.max(run.from, range.from));
      const end = run.boundaries.get(Math.min(run.to, range.to));
      if (start !== undefined && end !== undefined) for (let i = start; i < end; i++) ignored.add(i);
    }
    const positions = new Map<number, number>();
    for (let i = 0; i <= run.value.length; i++) {
      positions.set(i, text.length);
      if (i < run.value.length && !ignored.has(i) && !/\s/.test(run.value[i])) text += run.value[i];
    }
    for (const match of matches) {
      if (match.from < run.from || match.to > run.to) continue;
      const start = run.boundaries.get(match.from), end = run.boundaries.get(match.to);
      if (start === undefined || end === undefined) continue;
      projected.push({ match, from: positions.get(start)!, to: positions.get(end)! });
    }
  }
  return { text, matches: projected };
}

/** Restrict a whole-note parse without losing frontmatter or reference-link context. */
export function sectionAnalysis(analysis: Analysis, lineStart: number, lineEnd: number): Analysis {
  const from = analysis.lineOffsets[lineStart] ?? analysis.source.length;
  const to = analysis.lineOffsets[lineEnd + 1] ?? analysis.source.length;
  return { ...analysis, runs: analysis.runs.filter(run => run.from >= from && run.to <= to) };
}

function merge(ranges: Interval[]): Interval[] {
  const sorted = ranges.sort((a, b) => a.from - b.from || a.to - b.to);
  const result: Interval[] = [];
  for (const range of sorted) {
    const previous = result[result.length - 1];
    if (previous && range.from <= previous.to) previous.to = Math.max(previous.to, range.to);
    else result.push({ ...range });
  }
  return result;
}
function intersects(ranges: Interval[], range: Interval): boolean {
  let low = 0, high = ranges.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (ranges[mid].to <= range.from) low = mid + 1; else high = mid;
  }
  return low < ranges.length && overlaps(ranges[low], range);
}
