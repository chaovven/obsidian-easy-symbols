import type { Match } from './rules';

export function createSymbolDOM(doc: Document, match: Match): HTMLElement {
  const win = doc.win as typeof window;
  const span = win.createSpan({
    cls: `easy-symbols easy-symbols-${match.kind}`,
    attr: { 'aria-label': match.source },
    text: match.text,
  });
  if (match.sub) span.createEl('sub', { text: match.sub });
  if (match.sup) span.createEl('sup', { text: match.sup });
  return span;
}
