import { describe, expect, it } from 'vitest';
import MarkdownIt from 'markdown-it';
import { completionAt } from '../src/syntax';
import { DEFAULT_SETTINGS } from '../src/rules';

// Reading Mode needs no plugin: saved Unicode is ordinary Markdown text.
describe('portable saved Unicode', () => {
  const markdown=new MarkdownIt();
  it('renders completed text without plugin DOM, HTML scripts, or italic markers', () => {
    let source='';
    for(const token of ['x_i','+','x_j','=','1']) {
      if(source) source+=' ';
      source+=token;
      const match=completionAt(source,source.length,DEFAULT_SETTINGS);
      if(match) source=source.slice(0,match.from)+match.text;
    }
    expect(source).toBe('xᵢ + xⱼ = 1');
    expect(markdown.render(source)).toBe('<p>xᵢ + xⱼ = 1</p>\n');
  });
  it('keeps converted superscripts when copied without the plugin', () => {
    expect(markdown.render('x²⁺¹y and ÷ and τᵢ and 𝑥ᵢ')).toBe('<p>x²⁺¹y and ÷ and τᵢ and 𝑥ᵢ</p>\n');
  });
  it('preserves the typed order of mixed Unicode scripts in ordinary Markdown', () => {
    const source='xᵢʲ and x²ᵢ';
    expect(markdown.render(source)).toBe('<p>xᵢʲ and x²ᵢ</p>\n');
  });
  it('renders completed multi-letter bases as plain Unicode text', () => {
    const source = ['filename_i', 'length^2', 'filename_i^2']
      .map(token => {
        const match = completionAt(token, token.length, DEFAULT_SETTINGS)!;
        return token.slice(0, match.from) + match.text;
      }).join(' and ');
    expect(markdown.render(source)).toBe('<p>filenameᵢ and length² and filename_i²</p>\n');
  });
  it('preserves earlier date separators after completing the nearest subscript', () => {
    const token='2026_11_03';
    const match=completionAt(token,token.length,DEFAULT_SETTINGS)!;
    const result=token.slice(0,match.from)+match.text;
    expect(markdown.render(result)).toBe('<p>2026_11₀₃</p>\n');
  });
});
