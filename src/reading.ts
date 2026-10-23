import { analyze, project, type Analysis } from './syntax';
import { createSymbolDOM } from './dom';
import type { Settings } from './rules';

// Skip host-generated content, not just tag names: MathJax and embeds have their own DOM.
const SKIP = 'pre,code,mjx-container,math,.math,.internal-link,.internal-embed,.frontmatter,.metadata-container,.footnotes,.easy-symbols,script,style,button,.heading-collapse-indicator,.list-collapse-indicator';
interface Replacement { rendered: HTMLElement; original: DocumentFragment }
/** Owns only nodes created by this renderer; restoring never rewrites a note or an entire section. */
export class ReadingRender {
  private replacements: Replacement[] = [];
  constructor(readonly element: HTMLElement, readonly source: string | Analysis) {}
  restore(): void {
    for (const { rendered, original } of this.replacements) if (rendered.parentNode) rendered.replaceWith(original);
    this.replacements = [];
  }
  render(settings: Settings): boolean {
    this.restore();
    const expected = project(typeof this.source === 'string' ? analyze(this.source) : this.source, settings);
    if (!expected.matches.length) return true;
    const doc = this.element.ownerDocument;
    const chars: { node: Text; offset: number }[] = [];
    let text = '';
    const walker = doc.createTreeWalker(this.element, 4 /* SHOW_TEXT */);
    for (let node = walker.nextNode() as Text | null; node; node = walker.nextNode() as Text | null) {
      if (node.parentElement?.closest(SKIP)) continue;
      for (let i = 0; i < node.data.length; i++) {
        if (/\s/.test(node.data[i])) continue;
        text += node.data[i]; chars.push({ node, offset: i });
      }
    }
    // Fail closed: never search for a similar-looking substring in another source location.
    if (text !== expected.text) return false;
    for (const item of expected.matches.reverse()) {
      const start = chars[item.from], end = chars[item.to - 1];
      if (!start || !end) continue;
      // A host-generated structural boundary must not be removed by a cross-node replacement.
      if (start.node.parentElement !== end.node.parentElement) continue;
      const range = doc.createRange();
      range.setStart(start.node, start.offset); range.setEnd(end.node, end.offset + 1);
      if (range.toString() !== item.match.source) continue;
      const original = range.extractContents();
      const rendered = createSymbolDOM(doc, item.match);
      range.insertNode(rendered);
      this.replacements.push({ rendered, original });
    }
    return true;
  }
}
