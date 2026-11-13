import { describe, expect, it } from 'vitest';
import { ARROWS, COMMANDS, DEFAULT_SETTINGS as all, OPERATORS, SUBSCRIPTS, SUPERSCRIPTS, conversionAt, loadSettings } from '../src/rules';
import { completionAt } from '../src/syntax';
const complete = (source: string) => completionAt(source, source.length, all);
function convertedText(source: string, position = source.length) {
  const match = completionAt(source, position, all);
  return match && source.slice(0, match.from) + match.text + source.slice(match.to);
}

describe('whole Unicode completions', () => {
  for (const [source, target] of Object.entries({ ...ARROWS, ...OPERATORS, ...Object.fromEntries(Object.entries(COMMANDS).map(([key, value]) => [`\\${key}`, value])) })) {
    it(`${source} → ${target}`, () => {
      const input = `Test ${source}`;
      expect(complete(input)).toEqual({from:5, to:input.length, source, text:target});
    });
  }
  const examples = [
    ['x^2', 'x²'], ['x^3', 'x³'], ['x^4', 'x⁴'], ['10^5', '10⁵'], ['a^n', 'aⁿ'], ['x^-2', 'x⁻²'], ['m^2', 'm²'], ['2^n', '2ⁿ'],
    ['x^2+1', 'x²⁺¹'], ['2^32', '2³²'], ['10^-3', '10⁻³'], ['x_i', 'xᵢ'], ['x_1', 'x₁'], ['x_12', 'x₁₂'], ['x_max', 'xₘₐₓ'],
    ['x_i+1', 'xᵢ₊₁'], ['x^(n+1)', 'x⁽ⁿ⁺¹⁾'], ['x_(i+1)', 'x₍ᵢ₊₁₎'], ['x^A', 'xᴬ'], ['x^−2', 'x⁻²'],
    ['τ_i','τᵢ'], ['α^2','α²'], ['Σ_1','Σ₁'], ['é^2','é²'], ['e\u0301^2','e\u0301²'],
    ['𝑥_i','𝑥ᵢ'], ['字^2','字²'], ['x\u20D7^2','x\u20D7²'], ['x_β','xᵦ'], ['x^β','xᵝ'], ['x^θ','xᶿ'],
    ['x_i^j','x_iʲ'], ['x_12^3','x_12³'], ['x^2_i','x^2ᵢ'], ['x_i+1^2','x_i+1²'], ['x^2+1_i','x^2+1ᵢ'],
    ['τ_i^j','τ_iʲ'], ['xᵢ^j','xᵢʲ'], ['x²_i','x²ᵢ'], ['τᵢ^2','τᵢ²'], ['x₁₂^3','x₁₂³'],
    ['𝑥ᵢ^2','𝑥ᵢ²'], ['e\u0301ᵢ^2','e\u0301ᵢ²'], ['x⃗ᵢ^2','x⃗ᵢ²'],
    ['filename_i','filenameᵢ'], ['length^2','length²'], ['version_2','version₂'], ['file_name','fileₙₐₘₑ'],
    ['AA_i','AAᵢ'], ['12x_i','12xᵢ'], ['file2_i','file2ᵢ'], ['中文x_i','中文xᵢ'],
    ['aτ_i','aτᵢ'], ['αβ_i','αβᵢ'], ['ae\u0301^2','ae\u0301²'], ['e\u0301x_i','e\u0301xᵢ'], ['𝑥x_i','𝑥xᵢ'],
    ['filename_i^2','filename_i²'], ['filename^2_i','filename^2ᵢ'], ['filenameᵢ^2','filenameᵢ²'],
    ['filename²_i','filename²ᵢ'], ['aaᵢ^2','aaᵢ²'], ['αβᵢ^2','αβᵢ²'],
    ['1_1','1₁'], ['101_2','101₂'], ['10_i^2','10_i²'], ['10^2_i','10^2ᵢ'],
    ['10²_i','10²ᵢ'], ['10₁^2','10₁²'],
    ['2026_11_03','2026_11₀₃'], ['x_i_j','x_iⱼ'], ['x^2^3','x^2³'], ['x^2+y^2','x^2+y²'],
    ['x_q^2','x_q²'], ['x_^2','x_²'], ['x^_i','x^ᵢ'], ['x_i^j_k','x_i^jₖ'], ['x^2_i^3','x^2_i³'],
    ['xᵢ_j','xᵢⱼ'], ['x²^3','x²³'], ['xᵢ^j_k','xᵢ^jₖ'], ['xᵢ²_j','xᵢ²ⱼ'], ['x²ᵢ^3','x²ᵢ³'],
    ['x²a_i','x²aᵢ'], ['filename_i_j','filename_iⱼ'], ['filename^2^3','filename^2³'],
    ['filenameᵢ_j','filenameᵢⱼ'], ['filename²^3','filename²³'], ['filenameᵢ²_j','filenameᵢ²ⱼ'],
    ['filename²a_i','filename²aᵢ'], ['filenameᵢa_i','filenameᵢaᵢ'], ['\\filename_i','\\filenameᵢ'],
    ['\\tau_i','\\tauᵢ'], ['\u0301x_i','\u0301xᵢ'], ['∞_i','∞ᵢ'], ['||^2','||²'], ['_i','ᵢ'], ['^2','²'],
  ];
  for (const [source, text] of examples) it(`completes ${source} atomically`, () => {
    expect(convertedText(source)).toBe(text);
  });
  it('treats parentheses as script characters, not mathematical grouping', () => {
    expect(complete('f(x^2)')).toEqual({from:3,to:6,source:'^2)',text:'²⁾'});
  });
  it('replaces only the nearest marker and its suffix, preserving exact cursor offsets', () => {
    expect(complete('x^3 and x_i')).toEqual({from:9,to:11,source:'_i',text:'ᵢ'});
    expect(completionAt('x^2 trailing', 3, all)).toEqual({from:1,to:3,source:'^2',text:'²'});
    expect(convertedText('x^2 trailing', 3)).toBe('x² trailing');
    expect(complete('Test 𝑥_i')).toEqual({from:7,to:9,source:'_i',text:'ᵢ'});
    expect(complete('Test 𝑥nameᵢ^2')).toEqual({from:12,to:14,source:'^2',text:'²'});
    expect(complete('2026_11_03')).toEqual({from:7,to:10,source:'_03',text:'₀₃'});
    expect(complete('x_i^2')).toEqual({from:3,to:5,source:'^2',text:'²'});
  });
  it('completes a comparison at the start of a line before Markdown can treat it as a quote', () => {
    expect(complete('>=')?.text).toBe('≥');
  });
  for (const source of [
    'x_q','x_AB','x_iq','x^{32}','x_{i}','x^2,','x^2.','x^','x_','x_ i','x^😀',
    'x^2 ', 'user_id','x^\\alpha',
    '\\infinity','\\unknown','\\uparrow','\\downarrow','^|','|^','v|','|v','==>','!=!',
    'constructor','toString','__proto__','\\constructor','\\toString','\\hasOwnProperty',
    'τ_q','τ_AB','τ_iq','x_α','x^α',
    'x^2_q','x_i^q','x_i^','x^2_','xᵢ^q',
    'filename_','filename^','filename_q','filename_iq','filename_AB','filename_{i}',
    'filename_i^q','x_i^2q','x_i^{2}','x_i^😀','x_i^2,','x_i^2 ','x_i\n2','x_i\t2',
  ]) it(`keeps unsupported input intact: ${source}`, () => expect(complete(source)).toBeUndefined());
  it('uses the same nearest-script rule regardless of the preceding text', () => {
    for (const prefix of ['', 'x', 'filename', '1', '101', '∞', '😀', '𝑥', '2026_11', 'x_q', 'xᵢ', 'x²']) {
      expect(convertedText(prefix + '_i')).toBe(prefix + 'ᵢ');
      expect(convertedText(prefix + '^2')).toBe(prefix + '²');
      for (const suffix of ['_', '_q', '_{i}', '^2q']) {
        expect(complete(prefix + suffix)).toBeUndefined();
      }
    }
  });
  it('maps every advertised script character to one real Unicode character', () => {
    for (const [marker, mapping] of [['^', SUPERSCRIPTS], ['_', SUBSCRIPTS]] as const) {
      for (const [source, value] of Object.entries(mapping)) {
        expect(Array.from(value)).toHaveLength(1);
        expect(value.normalize('NFKC')).toBe(source === '-' ? '−' : source);
        expect(conversionAt(`x${marker}${source}`, 2 + source.length, all)?.text).toBe(value);
      }
    }
  });
});

describe('Markdown source protection', () => {
  const protectedCases = [
    ['`x^2`',4], ['`x^2',4], ['``some ` text x^2',16], ['`some\ntext x^2',14],
    ['```text\nx^2',11], ['~~~\nx^2',7], ['    x^2',7],
    ['$x^2$',4], ['$x^2',4], ['$$\nx^2',6],
    ['---\nkey: x^2\n---',12], ['---\nkey: x^2',12],
    ['[label](x^2)',11], ['[label](x^2',11], ['[a](ok) [b](x^2',16], ['[a](path/(x^2',14],
    ['[[x^2]]',5], ['[[x^2',5], ['[[note|x^2',10], ['![[x^2',6],
    ['![x^2](image)',5], ['<span title="x^2">text</span>',16], ['<span>x^2</span>',9], ['<span>x^2',9],
    ['<!-- x^2 -->',8], ['%% x^2 %%',6], ['%% x^2',6],
    ['https://example.com/x^2',23], ['www.example.com/x^2',19], ['[ref]: https://example.com/x^2',30],
    ['[x^2]\n\n[x^2]: target',4], ['[x^2][ref]\n\n[ref]: target',4],
    ['x\\^2',4], ['\\\\alpha',7], ['x&#94;2',7],
    ['`x_i^j',6], ['$x_i^j',6], ['[label](x_i^j',13], ['[[xᵢ^j',6],
  ] as const;
  for (const [source, position] of protectedCases) it(`does not edit ${JSON.stringify(source)}`, () => {
    // Locate the shorthand rather than depending on the surrounding delimiter lengths.
    const end = source.includes('x^2') ? source.indexOf('x^2') + 3 : position;
    expect(completionAt(source,end,all)).toBeUndefined();
  });
  it('allows text after closed native syntax', () => {
    for (const source of ['`code` x^2','$x^3$ x^2','[link](target) x^2','%% comment %% x^2','<span>text</span> x^2','---\na: 1\n---\n\nx^2']) {
      expect(convertedText(source),source).toBe(source.slice(0,-3)+'x²');
    }
  });
  it('preserves emphasis and link labels around a completion', () => {
    for (const source of ['*x^2*','[x^2](target)']) {
      const pos=source.indexOf('x^2')+3;
      expect(completionAt(source,pos,all)?.text).toBe('²');
    }
  });
  it('applies the same Markdown protection to longer bases', () => {
    for (const source of ['`filename_i', '$filename_i', '[[filename_i', '[link](filename_i',
      'https://example.com/filename_i', '---\nkey: filename_i', '%% filename_i',
      'filename\\_i', '```\nfilename_i', '<span>filename_i']) {
      expect(complete(source), source).toBeUndefined();
    }
    for (const source of ['*filename_i*', '[filename_i](target)']) {
      const position = source.indexOf('filename_i') + 'filename_i'.length;
      expect(completionAt(source, position, all)?.text).toBe('ᵢ');
    }
  });
});

describe('settings', () => {
  for (const [key, input] of [['scripts','x^2'],['latex','\\tau'],['arrows','->'],['operators','>=']] as const) {
    it(`honors the ${key} switch independently`, () => {
      const source='Test '+input;
      expect(completionAt(source,source.length,{...all,[key]:false})).toBeUndefined();
      expect(completionAt(source,source.length,{scripts:false,latex:false,arrows:false,operators:false,[key]:true})).toBeDefined();
    });
  }
  it('loads existing settings without introducing a migration', () => {
    expect(loadSettings({latex:false,scripts:'false',arrows:null,status:true})).toEqual({...all,latex:false});
  });
});
