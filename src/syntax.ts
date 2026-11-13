import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { math } from 'micromark-extension-math';
import { mathFromMarkdown } from 'mdast-util-math';
import { frontmatter } from 'micromark-extension-frontmatter';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import type { Root, RootContent } from 'mdast';
import { conversionAt, type Conversion, type Settings } from './rules';

type Interval = { from: number; to: number };
const overlaps = (a: Interval, b: Interval) => a.from < b.to && b.from < a.to;
const location = (node: Root | RootContent): Interval => ({
  from: node.position?.start.offset ?? 0, to: node.position?.end.offset ?? 0,
});

/** Markdown is only consulted to protect source, never to render or rewrite whole notes. */
export function completionAt(source: string, position: number, settings: Settings): Conversion | undefined {
  const candidate = conversionAt(source, position, settings);
  if (!candidate) return;
  const root = fromMarkdown(source, {
    extensions: [gfm(), math(), frontmatter(['yaml'])],
    mdastExtensions: [gfmFromMarkdown(), mathFromMarkdown(), frontmatterFromMarkdown(['yaml'])],
  });
  const protectedRanges: Interval[] = [];
  const html: { value: string; range: Interval }[] = [];
  function visit(node: Root | RootContent): void {
    const range = location(node);
    if (['code', 'inlineCode', 'math', 'inlineMath', 'yaml', 'definition', 'image', 'imageReference', 'linkReference'].includes(node.type)) {
      protectedRanges.push(range); return;
    }
    if (node.type === 'html') {
      html.push({ value: node.value, range }); protectedRanges.push(range); return;
    }
    if (node.type === 'link') {
      if (source[range.from] !== '[' || !node.children.length) {
        protectedRanges.push(range); return;
      }
      // Editing explicit label text is safe; the target and delimiters are not.
      protectedRanges.push({ from: range.from, to: location(node.children[0]).from });
      protectedRanges.push({ from: location(node.children[node.children.length - 1]).to, to: range.to });
    }
    if (node.type === 'text') {
      // An escaped marker or entity must never become plugin shorthand.
      const raw = source.slice(range.from, range.to);
      for (const match of raw.matchAll(/\\[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]|&(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]+);/g)) {
        protectedRanges.push({ from: range.from + match.index, to: range.from + match.index + match[0].length });
      }
    }
    if ('children' in node) for (const child of node.children) visit(child);
  }
  visit(root);
  for (const pattern of [
    /%%[\s\S]*?(?:%%|$)/g,
    /!?\[\[[^\r\n]*?(?:\]\]|$)/gm,
    /(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|mailto:|www\.)[^\s<>[\]]+/g,
  ]) for (const match of source.matchAll(pattern)) {
    protectedRanges.push({ from: match.index, to: match.index + match[0].length });
  }
  const stack: { tag: string; from: number }[] = [];
  for (const token of html) for (const match of token.value.matchAll(/<\/?([A-Za-z][\w:-]*)\b[^>]*>/g)) {
    const tag = match[1].toLowerCase();
    const from = token.range.from + match.index, to = from + match[0].length;
    if (match[0].startsWith('</')) {
      const index = stack.map(item => item.tag).lastIndexOf(tag);
      if (index >= 0) { protectedRanges.push({ from: stack[index].from, to }); stack.splice(index); }
    } else if (!match[0].endsWith('/>') && !/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(tag)) {
      stack.push({ tag, from });
    }
  }
  for (const open of stack) protectedRanges.push({ from: open.from, to: source.length });
  if (protectedRanges.some(range => overlaps(range, candidate))) return;

  // While typing, unfinished inline code/math/links are not yet AST nodes.
  const before = source.slice(0, position);
  const boundary = before.lastIndexOf('\n\n');
  const paragraph = before.slice(boundary < 0 ? 0 : boundary + 2);
  let code = '', dollars = '';
  for (const match of paragraph.matchAll(/\\[\s\S]|`+|\${1,2}/g)) {
    const token = match[0];
    if (token.startsWith('\\')) continue;
    if (token.startsWith('`') && !dollars) {
      if (!code) code = token; else if (code === token) code = '';
    } else if (token.startsWith('$') && !code) {
      if (!dollars) dollars = token; else if (dollars === token) dollars = '';
    }
  }
  const destination = paragraph.lastIndexOf('](');
  let depth = destination < 0 ? 0 : 1;
  if (destination >= 0) for (const token of paragraph.slice(destination + 2).matchAll(/\\[\s\S]|[()]/g)) {
    if (token[0] === '(') depth++;
    if (token[0] === ')' && --depth === 0) break;
  }
  if (code || dollars || depth > 0 || /<(?:\/?[A-Za-z]|!|\?)[^>\n]*$/.test(paragraph)) return;
  if (/^---(?:\r?\n|$)/.test(before) && !/\n(?:---|\.\.\.)(?:\r?\n|$)/.test(before.slice(3))) return;
  return candidate;
}
