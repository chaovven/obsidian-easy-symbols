import { describe, expect, it } from 'vitest';
import { ARROWS, COMMANDS, DEFAULT_SETTINGS as all, OPERATORS, loadSettings, scan, type Settings } from '../src/rules';
import { analyze, matchesFor } from '../src/syntax';
const rendered = (source: string, settings: Settings = all) => matchesFor(analyze(source), settings);

describe('explicit mappings', () => {
  for (const [source, target] of Object.entries({ ...ARROWS, ...OPERATORS, ...Object.fromEntries(Object.entries(COMMANDS).map(([key, value]) => [`\\${key}`, value])) })) {
    it(`${source} → ${target}`, () => expect(rendered(`Test ${source}.`).map(x => x.text)).toEqual([target]));
  }
  it('leaves former status labels unchanged', () => expect(rendered('[TODO] [DOING] [DONE] [Todo] [todo]')).toEqual([]));
  for (const source of ['A_1','A_123','z_j','x_ij','x^2','x^23','x_i^2','x^2_i','x^2_3','x^Ab91_Za93','a_b','x_Za93^Ab91']) {
    it(`real scripts: ${source}`, () => expect(rendered(source)).toEqual([expect.objectContaining({ source, kind: 'script' })]));
  }
  for (const source of ['x_i^2', 'x^2_i']) {
    it(`combined scripts retain both fields: ${source}`, () => {
      expect(rendered(source)).toEqual([expect.objectContaining({source, text:'x', sub:'i', sup:'2', from:0, to:5})]);
    });
  }
  for (const source of ['file_name','user_id','AB_12','aa_1','12x_i','中文x_i','_x_i_','x_ i','x^','x_{}','x_{a{b}}']) {
    it(`does not take a name tail or unsupported syntax: ${source}`, () => expect(rendered(source)).toEqual([]));
  }
  const spaceRule: [string, string?, string?][] = [
    ['x_i+1', 'i+1'], ['x_{i+1}', 'i+1'], ['x^2+1', undefined, '2+1'], ['x^-1', undefined, '-1'], ['e^x-1', undefined, 'x-1'],
    ['x_i,', 'i,'], ['x_{i + 1}', 'i + 1'], ['x_{i*2}', 'i*2'], ['a_1+b_1', '1+b_1'], ['x_i_j', 'i_j'], ['x^2^3', undefined, '2^3'],
    ['x_i^2_j', 'i', '2_j'], ['x_{i+1}^{2}', 'i+1', '2'], ['x_{i+1}^2', 'i+1', '2'],
  ];
  for (const [source, sub, sup] of spaceRule) {
    it(`a space ends a script: ${source}`, () => expect(rendered(source)).toEqual([expect.objectContaining({ source, text: source[0], sub, sup })]));
  }
  it('an empty second part keeps the first', () => expect(rendered('x_i^ y').map(x => x.source)).toEqual(['x_i']));
  it('a space ends a script before later text', () => expect(rendered('x_i + 1 and x^2 ,').map(x => [x.source, x.sub ?? x.sup])).toEqual([['x_i', 'i'], ['x^2', '2']]));
  it('whole commands only', () => expect(rendered('\\infinity \\Alpha \\alphaBeta \\unknown')).toEqual([]));
  it('operator runs are atomic', () => expect(rendered('==> <==> ---> <----> >=> +-- !=!')).toEqual([]));
  it('v| and |v only as whole tokens', () => expect(rendered('lev| |value v| ^| |v |^').map(x => x.text)).toEqual(['↓','↑','↓','↑']));
  it('<= is always a comparison', () => expect(rendered('<= \\Leftarrow').map(x => x.text)).toEqual(['≤','⇐']));
  it('ordinary typography stays unchanged', () => expect(rendered('... -- ---- (c) (tm)')).toEqual([]));
});

describe('native Markdown protection', () => {
  const protectedCases = [
    '```text\n[TODO] x_i -> \\alpha\n```', '~~~\nx_i -> \\alpha\n~~~', '    x_i -> \\alpha', '`x_i -> \\alpha`',
    '---\nlabel: x_i -> \\alpha\n---', '$x_i -> \\alpha$', '$$\nx_i -> \\alpha\n$$',
    '![x_i -> \\alpha](image_x_i.png)', '[safe](https://example.com/x_i->alpha)',
    '<https://example.com/x_i>', 'https://example.com/x_i->alpha', 'www.example.com/x_i',
    '<span title="x_i ->">x_i -> \\alpha</span>', '<!-- x_i -> \\alpha -->',
    '<div>\nx_i -> \\alpha\n</div>', '[[x_i -> \\alpha|x_i -> \\beta]]', '![[x_i#x_i]]',
    '*x_i*', '__x_i__', '\\[TODO]', '\\\\alpha', 'x&#95;i', '&bsol;alpha', '&#45;>',
    '[TODO](target)', '[TODO][id]\n\n[id]: /x_i', '[id]: /x_i "\\alpha"',
  ];
  for (const source of protectedCases) it(`protects ${JSON.stringify(source)}`, () => {
    // Math inside emphasis is valid if the whole shorthand is in a single text leaf.
    if (source === '*x_i*') {
      expect(rendered(source).map(x => x.source)).toEqual(['x_i']);
    } else expect(rendered(source)).toEqual([]);
  });
  it('does not consume emphasis delimiters', () => {
    expect(rendered('_x_i_').map(x => x.source)).toEqual([]);
    expect(rendered('x_i_ and _x_').map(x => x.sub)).toEqual(['i_']);
  });
  it('converts a normal link label while keeping its target out of matches', () => expect(rendered('[x_i \\alpha ->](target_x_i)').map(x => x.source)).toEqual(['x_i','\\alpha','->']));
  it('keeps all source offsets exact across escapes/entities', () => {
    const source = '&amp; \\* Test \\alpha x_i ->';
    for (const match of rendered(source)) expect(source.slice(match.from, match.to)).toBe(match.source);
    expect(rendered(source).map(x => x.source)).toEqual(['\\alpha','x_i','->']);
  });
});

describe('settings', () => {
  const source = '[TODO] x_i \\alpha \\Rightarrow \\geq -> <=';
  for (const key of Object.keys(all) as (keyof Settings)[]) it(`independent ${key} switch`, () => {
    const only = {scripts:false,latex:false,arrows:false,operators:false,[key]:true};
    const expected = {scripts:['x_i'],latex:['\\alpha','\\Rightarrow','\\geq'],arrows:['->'],operators:['<=']}[key];
    expect(rendered(source,only).map(x => x.source)).toEqual(expected);
  });
  it('validates persistent data', () => expect(loadSettings({latex:false, scripts:'false',arrows:null,status:true})).toEqual({...all,latex:false}));
  it('all disabled yields no matches', () => expect(scan(source,{scripts:false,latex:false,arrows:false,operators:false})).toEqual([]));
});

describe('additional host boundaries', () => {
  it('protects Obsidian comments including multiline and unfinished comments',()=>{
    expect(rendered('%% x_i -> \\alpha %%')).toEqual([]);
    expect(rendered('%%\nx_i ->\n%%\n\nx_j').map(x=>x.source)).toEqual(['x_j']);
    expect(rendered('%% x_i ->')).toEqual([]);
  });
  it('protects native quote syntax at the start of a line',()=>{
    expect(rendered('>= 4').map(x=>x.source)).toEqual([]);
    expect(rendered('x >= 4').map(x=>x.source)).toEqual(['>=']);
  });
  it('supports prose in native tables',()=>expect(rendered('| Test | Other |\n| --- | --- |\n| x_i -> | \\alpha <= |').map(x=>x.source)).toEqual(['x_i','->','\\alpha','<=']));
  it('uses letter-only TeX command names, preserving subsequent digits',()=>expect(rendered('\\alpha1').map(x=>x.source)).toEqual(['\\alpha']));
  it('protects native autolink email identifiers',()=>expect(rendered('<x_i@example.com> x_i@example.com')).toEqual([]));
  it('allows explicit email link labels while protecting their destinations',()=>expect(rendered('[x_i](mailto:x_j@example.com)').map(x=>x.source)).toEqual(['x_i']));
});
