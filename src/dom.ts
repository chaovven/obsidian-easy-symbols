import type { Match } from './rules';

export function createSymbolDOM(doc: Document, match: Match): HTMLElement {
  const span = doc.createElement('span');
  span.className = `easy-symbols easy-symbols-${match.kind}`;
  span.setAttribute('aria-label', match.source);
  span.append(doc.createTextNode(match.text));
  if (match.sub) { const sub = doc.createElement('sub'); sub.textContent = match.sub; span.append(sub); }
  if (match.sup) { const sup = doc.createElement('sup'); sup.textContent = match.sup; span.append(sup); }
  return span;
}
