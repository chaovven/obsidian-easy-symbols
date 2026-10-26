import { describe, expect, it } from 'vitest';
import { JSDOM } from 'jsdom';
import { installDomHelpers } from './dom-helpers';
import MarkdownIt from 'markdown-it';
import { ReadingRender } from '../src/reading';
import { DEFAULT_SETTINGS as all } from '../src/rules';
import { analyze, matchesFor } from '../src/syntax';
const markdown = new MarkdownIt({ html:true, linkify:true });
function section(source:string, html = markdown.render(source)) {
  const document = new JSDOM('<main></main>').window.document;
  installDomHelpers(document);
  const element = document.querySelector('main')!;
  element.innerHTML = html;
  return { element, render: new ReadingRender(element,source) };
}
describe('source-aware DOM rendering', () => {
  it('renders all categories with real sub/sup DOM and preserves link behavior', () => {
    const source='[TODO] x_i^2 \\alpha -> <= [x_j](https://example.com/x_i)';
    const {element,render}=section(source);
    expect(render.render(all)).toBe(true);
    expect(element.querySelector('sub')?.textContent).toBe('i');
    expect(element.querySelector('sup')?.textContent).toBe('2');
    expect(element.querySelector('a')?.getAttribute('href')).toBe('https://example.com/x_i');
    expect(element.querySelector('a sub')?.textContent).toBe('j');
    expect([...element.querySelectorAll('.easy-symbols,sub,sup')].every(node=>node.ownerDocument===element.ownerDocument)).toBe(true);
    expect(element.textContent).toContain('[TODO] xi2 α → ≤ xj');
    expect(source).toBe('[TODO] x_i^2 \\alpha -> <= [x_j](https://example.com/x_i)');
  });
  it('renders either script order identically and restores the original source order', () => {
    const {element,render}=section('x_i^2 and x^2_i');
    const original=element.innerHTML;
    expect(render.render(all)).toBe(true);
    const scripts=[...element.querySelectorAll('.easy-symbols-script')];
    expect(scripts).toHaveLength(2);
    expect(scripts[0].innerHTML).toBe(scripts[1].innerHTML);
    expect(scripts[1].getAttribute('data-source')).toBe('x^2_i');
    render.restore(); expect(element.innerHTML).toBe(original);
  });
  it('repeat processing and toggle refresh are idempotent and restore parsed DOM', () => {
    const {element,render}=section('[DONE] x_i -> \\alpha');
    const original=element.innerHTML;
    render.render(all); const first=element.innerHTML;
    render.render(all); expect(element.innerHTML).toBe(first);
    expect(element.querySelectorAll('.easy-symbols .easy-symbols')).toHaveLength(0);
    render.render({...all,scripts:false}); expect(element.querySelector('sub')).toBeNull();
    render.restore(); expect(element.innerHTML).toBe(original);
    render.restore(); expect(element.innerHTML).toBe(original);
  });
  it('handles split text nodes without wrapping native elements', () => {
    const {element,render}=section('Test x_i -> \\alpha');
    const p=element.querySelector('p')!;p.textContent='';
    for(const value of ['Test x','_','i -','> \\al','pha'])p.append(element.ownerDocument.createTextNode(value));
    expect(render.render(all)).toBe(true);
    expect(element.querySelectorAll('.easy-symbols')).toHaveLength(3);
    render.restore();expect(p.textContent).toBe('Test x_i -> \\alpha');
  });
  it('does not reinterpret escaped commands, entities or escaped punctuation', () => {
    const source='\\\\alpha &bsol;alpha &#45;> x&#95;i \\[TODO] &amp; \\alpha ->';
    const {element,render}=section(source);
    expect(render.render(all)).toBe(true);
    expect([...element.querySelectorAll('.easy-symbols')].map(x=>x.textContent)).toEqual(['α','→']);
    expect(element.textContent).toContain('\\alpha \\alpha -> x_i [TODO] & α →');
  });
  it('keeps URL, autolink, code, HTML and native emphasis intact', () => {
    const source='https://example.com/x_i <https://example.com/x_i> `x_i` <span title="x_i">x_i</span> *word* **x_j** ->';
    const {element,render}=section(source);
    expect(render.render(all)).toBe(true);
    expect(element.querySelector('code')?.textContent).toBe('x_i');
    expect(element.querySelector('span[title]')?.outerHTML).toBe('<span title="x_i">x_i</span>');
    expect(element.querySelectorAll('a')).toHaveLength(2);
    expect(element.querySelector('strong sub')?.textContent).toBe('j');
  });
  it('handles Obsidian internal links without guessing their display text', () => {
    const source='[[x_i|alias]] and x_j ->';
    const {element,render}=section(source,'<p><a class="internal-link" data-href="x_i">alias</a> and x_j -&gt;</p>');
    expect(render.render(all)).toBe(true);expect(element.querySelector('a')?.textContent).toBe('alias');
    expect(element.querySelector('sub')?.textContent).toBe('j');
  });
  it('skips MathJax DOM while rendering surrounding text', () => {
    const {element,render}=section('$x_i$ and x_j ->','<p><span class="math"><mjx-container>xᵢ</mjx-container></span> and x_j -&gt;</p>');
    expect(render.render(all)).toBe(true);expect(element.querySelector('mjx-container')?.textContent).toBe('xᵢ');
    expect(element.querySelector('sub')?.textContent).toBe('j');
  });
  it('fails closed when native DOM and source differ', () => {
    const {element,render}=section('x_i ->','<p>unrelated x_i -&gt;</p>');
    expect(render.render(all)).toBe(false);expect(element.querySelector('.easy-symbols')).toBeNull();
  });
  it('does not replace native structural elements across a matching range', () => {
    const {element,render}=section('x_i','<p>x<span>_i</span></p>');
    expect(render.render(all)).toBe(true);expect(element.querySelector('span')?.textContent).toBe('_i');
    expect(element.querySelector('sub')).toBeNull();
  });
  it('DOM output and editor source rules have identical match sets', () => {
    const source='[TODO] A_123 + z_j ~= x^2 +- 1; P <=> Q; \\forall \\alpha -> \\infty';
    const {element,render}=section(source);expect(render.render(all)).toBe(true);
    expect([...element.querySelectorAll('.easy-symbols')].map(x=>x.getAttribute('data-source'))).toEqual(matchesFor(analyze(source),all).map(x=>x.source));
  });
});

describe('native render discrepancies are kept safe',()=>{
  it('keeps email autolinks intact while rendering adjacent prose',()=>{
    const {element,render}=section('<x_i@example.com> x_i@example.com and x_j');
    expect(render.render(all)).toBe(true);
    expect(element.querySelectorAll('a')).toHaveLength(2);
    expect(element.querySelector('a .easy-symbols')).toBeNull();
    expect(element.querySelector('sub')?.textContent).toBe('j');
  });
  it('omits host comments while rendering adjacent prose',()=>{
    const {element,render}=section('Before %% x_i -> %% and x_j','<p>Before  and x_j</p>');
    expect(render.render(all)).toBe(true);expect(element.querySelector('sub')?.textContent).toBe('j');
  });
  it('keeps an HTML block unchanged if its raw contents prevent exact alignment',()=>{
    const {element,render}=section('<div>\nx_i ->\n</div>');
    const original=element.innerHTML;render.render(all);expect(element.innerHTML).toBe(original);
  });
  it('renders tables without touching delimiters',()=>{
    const source='| Test | Other |\n| --- | --- |\n| x_i -> | \\alpha <= |';
    const {element,render}=section(source);expect(render.render(all)).toBe(true);
    expect(element.querySelector('td sub')?.textContent).toBe('i');expect(element.querySelectorAll('td .easy-symbols')).toHaveLength(4);
  });
});
