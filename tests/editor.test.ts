// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { EditorSelection, EditorState, type Transaction } from '@codemirror/state';
import { defaultKeymap, history, historyKeymap, redo, undo } from '@codemirror/commands';
import { EditorView, keymap } from '@codemirror/view';
import { editorExtension } from '../src/editor';
import { COMMANDS, DEFAULT_SETTINGS, type Settings } from '../src/rules';

const views: EditorView[] = [];
beforeEach(() => {
  Range.prototype.getClientRects = () => [] as unknown as DOMRectList;
  Range.prototype.getBoundingClientRect = () => new DOMRect();
});
afterEach(() => { for (const view of views.splice(0)) view.destroy(); });
function create(doc = '', cursor = doc.length) {
  let settings: Settings = {...DEFAULT_SETTINGS}, enabled = true;
  const view = new EditorView({
    state: EditorState.create({doc,selection:{anchor:cursor},extensions:[
      history(), keymap.of([...defaultKeymap,...historyKeymap]), EditorState.allowMultipleSelections.of(true),
      editorExtension(() => settings, () => enabled),
    ]}), parent:document.body,
  });
  views.push(view);
  return {view, settings:(value:Settings)=>{settings=value;}, disable:()=>{enabled=false;}};
}
/** Exercise the same input facet and default insertion transaction used by CodeMirror's DOM observer. */
function input(view: EditorView, text: string, event = 'input.type') {
  const {from,to}=view.state.selection.main;
  let normal: Transaction | undefined;
  const insert=()=>normal ??= view.state.update({changes:{from,to,insert:text},selection:{anchor:from+text.length},userEvent:event});
  if (!view.state.facet(EditorView.inputHandler).some(handler=>handler(view,from,to,text,insert))) view.dispatch(insert());
}
function key(view: EditorView, name: string, options: KeyboardEventInit = {}) {
  view.contentDOM.dispatchEvent(new KeyboardEvent('keydown',{key:name,bubbles:true,cancelable:true,...options}));
}
const text = (view: EditorView) => view.state.doc.toString();

describe('Space-triggered source conversion', () => {
  it('handles a typed space read by the real CodeMirror DOM observer', async () => {
    const {view}=create('x^2');view.focus();
    const node=view.contentDOM.querySelector('.cm-line')!.firstChild!;
    node.nodeValue='x^2 ';
    window.getSelection()!.collapse(node,4);
    view.contentDOM.dispatchEvent(new InputEvent('input',{data:' ',inputType:'insertText',bubbles:true}));
    await new Promise(resolve=>setTimeout(resolve,40));
    expect(text(view)).toBe('x²');
    expect(view.state.selection.main.head).toBe(2);
    key(view,'Backspace');expect(text(view)).toBe('x^2');
  });
  it('does nothing on load or typing, then consumes exactly one triggering space', () => {
    const {view}=create('Existing x^3\n\n');
    for (const char of 'x^2+1') input(view,char);
    expect(text(view)).toBe('Existing x^3\n\nx^2+1');
    input(view,' ');
    expect(text(view)).toBe('Existing x^3\n\nx²⁺¹');
    expect(view.state.selection.main.head).toBe(text(view).length);
    expect(view.dom.querySelector('sub,sup,.easy-symbols')).toBeNull();
    input(view,'y');expect(text(view)).toBe('Existing x^3\n\nx²⁺¹y');
  });
  it('inserts a normal second space and preserves following source', () => {
    const {view}=create('x^2 tail',3);
    input(view,' ');expect(text(view)).toBe('x² tail');
    expect(view.state.selection.main.head).toBe(2);
    input(view,' ');expect(text(view)).toBe('x²  tail');
  });
  it.each([['x_12','x₁₂'],['\\div','÷'],['\\tau','τ'],['->','→'],['x^(n+1)','x⁽ⁿ⁺¹⁾']])('converts %s to saved Unicode', (source,expected) => {
    const {view}=create(source);input(view,' ');expect(text(view)).toBe(expected);
  });
  it.each(Object.entries(COMMANDS).filter(([,symbol])=>/^\p{L}$/u.test(symbol)))(
    'completes \\%s first, then adds a Unicode subscript to %s', (command,symbol) => {
      const {view}=create();
      for(const character of '\\'+command) input(view,character);
      input(view,' ');expect(text(view)).toBe(symbol);
      input(view,'_');input(view,'i');expect(text(view)).toBe(symbol+'_i');
      input(view,' ');expect(text(view)).toBe(symbol+'ᵢ');
      expect(view.state.selection.main.head).toBe(text(view).length);
    },
  );
  it.each([['𝑥_i','𝑥ᵢ'],['e\u0301^2','e\u0301²'],['x\u20D7^2','x\u20D7²'],['τ_β','τᵦ'],
    ['filename_i','filenameᵢ'],['length^2','length²'],['file name_i','file nameᵢ'],['𝑥name_i','𝑥nameᵢ'],
    ['1_1','1₁'],['101_2','101₂']])(
    'preserves the exact base and caret for %s', (source,expected) => {
      const {view}=create(source);input(view,' ');expect(text(view)).toBe(expected);
      expect(view.state.selection.main.head).toBe(expected.length);
      key(view,'Backspace');expect(text(view)).toBe(source);
      expect(view.state.selection.main.head).toBe(source.length);
      input(view,' ');expect(text(view)).toBe(source+' ');
    },
  );
  it('consumes the confirmation space after a longer base, then inserts an ordinary space', () => {
    const {view}=create('filename_i');input(view,' ');
    expect(text(view)).toBe('filenameᵢ');
    input(view,' ');expect(text(view)).toBe('filenameᵢ ');
    key(view,'Backspace');expect(text(view)).toBe('filenameᵢ');
  });
  it('preserves an explicitly typed period after conversion', () => {
    const {view}=create('filename_i');input(view,' ');input(view,'.');input(view,' ');
    expect(text(view)).toBe('filenameᵢ. ');
  });
  it.each(['x_q','x_iq','x_{i}','x^2_q','x_i^','x_i^q','x_i^2q','x_i^2,','x^2,','hello'])('retains the space and full unsupported input %s', source => {
    const {view}=create(source);input(view,' ');expect(text(view)).toBe(source+' ');
  });
  it('does not interpret paste, drop, Enter, Tab or programmatic edits as conversion', () => {
    for (const event of ['input.paste','input.drop','input.type.compose','input']) {
      const {view}=create('x^2');input(view,' ',event);expect(text(view)).toBe('x^2 ');
    }
    for (const value of ['\n','\t','x^2 ',' ']) {
      const {view}=create('x^2');
      if (value===' ') view.dispatch({changes:{from:3,insert:' '}});
      else input(view,value);
      expect(text(view)).toBe('x^2'+value);
    }
  });
  it('does not convert while replacing a selection or with multiple cursors', () => {
    const {view}=create('x^2 end');
    view.dispatch({selection:{anchor:3,head:7}});input(view,' ');expect(text(view)).toBe('x^2 ');
    const other=create('x^2 x^3').view;
    other.dispatch({selection:EditorSelection.create([EditorSelection.cursor(3),EditorSelection.cursor(7)])});
    input(other,' ');expect(text(other)).toContain('x^2');expect(text(other)).toContain('x^3');
  });
  it('honors disabled settings and unloading without changing existing Unicode', () => {
    const {view,settings,disable}=create('x^2');settings({...DEFAULT_SETTINGS,scripts:false});
    input(view,' ');expect(text(view)).toBe('x^2 ');
    settings(DEFAULT_SETTINGS);input(view,'x_i');input(view,' ');expect(text(view)).toBe('x^2 xᵢ');
    input(view,' ');input(view,'\\tau');disable();input(view,' ');expect(text(view)).toBe('x^2 xᵢ \\tau ');
  });
});

describe('accept, reject and history', () => {
  it.each([['x_i^j','x_iʲ'],['x^2_i','x^2ᵢ'],['x_i+1^2','x_i+1²'],['filename_i^2','filename_i²'],
    ['10_i^2','10_i²'],['2026_11_03','2026_11₀₃'],['x_i_j','x_iⱼ'],['x_q^2','x_q²'],
    ['x^2+y^2','x^2+y²'],['∞_i','∞ᵢ'],['||^2','||²'],['_i','ᵢ']])(
    'converts only the nearest script in %s as one undoable edit', (source,expected) => {
      const {view}=create();for(const character of source) input(view,character);
      expect(text(view)).toBe(source);input(view,' ');expect(text(view)).toBe(expected);
      expect(view.state.selection.main.head).toBe(expected.length);
      undo(view);expect(text(view)).toBe(source);
      redo(view);expect(text(view)).toBe(expected);
      key(view,'Backspace');expect(text(view)).toBe(source);
      input(view,' ');expect(text(view)).toBe(source+' ');
    },
  );
  it.each([['x_i','^j','xᵢ','xᵢʲ'],['x^2','_i','x²','x²ᵢ'],['τ_i','^2','τᵢ','τᵢ²'],
    ['filename_i','^2','filenameᵢ','filenameᵢ²'],['length^2','_i','length²','length²ᵢ'],
    ['10_1','^2','10₁','10₁²'],['10^2','_i','10²','10²ᵢ'],
    ['x_i','_j','xᵢ','xᵢⱼ'],['x^2','^3','x²','x²³']])(
    'adds a script after completing %s', (first,second,intermediate,expected) => {
      const {view}=create(first);input(view,' ');expect(text(view)).toBe(intermediate);
      input(view,second);expect(text(view)).toBe(intermediate+second);
      input(view,' ');expect(text(view)).toBe(expected);
      expect(view.state.selection.main.head).toBe(expected.length);
      undo(view);expect(text(view)).toBe(intermediate+second);
      input(view,' ');expect(text(view)).toBe(intermediate+second+' ');
    },
  );
  it('inserts a real second space without converting earlier shorthand', () => {
    const {view}=create('2026_11_03');input(view,' ');
    expect(text(view)).toBe('2026_11₀₃');
    input(view,' ');expect(text(view)).toBe('2026_11₀₃ ');
    key(view,'Backspace');expect(text(view)).toBe('2026_11₀₃');
  });
  it('converts at the cursor without touching text on either side', () => {
    const {view}=create('𝑥_i^2 tail',6);input(view,' ');
    expect(text(view)).toBe('𝑥_i² tail');
    expect(view.state.selection.main.head).toBe(5);
    key(view,'Backspace');expect(text(view)).toBe('𝑥_i^2 tail');
    expect(view.state.selection.main.head).toBe(6);
  });
  it('adds a script to pasted Unicode only after a new typed Space', () => {
    const {view}=create();input(view,'𝑥ᵢ','input.paste');input(view,'^j');
    expect(text(view)).toBe('𝑥ᵢ^j');input(view,' ');expect(text(view)).toBe('𝑥ᵢʲ');
    key(view,'Backspace');expect(text(view)).toBe('𝑥ᵢ^j');
    expect(view.state.selection.main.head).toBe(5);
  });
  it('undoes only the script in a two-step Greek-letter completion', () => {
    const {view}=create('\\tau');input(view,' ');input(view,'_i');input(view,' ');
    expect(text(view)).toBe('τᵢ');
    undo(view);expect(text(view)).toBe('τ_i');
    redo(view);expect(text(view)).toBe('τᵢ');
    key(view,'Backspace');expect(text(view)).toBe('τ_i');
    input(view,' ');expect(text(view)).toBe('τ_i ');
  });
  it('isolates conversion from preceding typing and restores shorthand with Undo', () => {
    const {view}=create();for(const char of 'x^2') input(view,char);input(view,' ');
    expect(text(view)).toBe('x²');expect(undo(view)).toBe(true);expect(text(view)).toBe('x^2');
    expect(view.state.selection.main.head).toBe(3);
    input(view,' ');expect(text(view)).toBe('x^2 ');
    input(view,'x^2');input(view,' ');expect(text(view)).toBe('x^2 x²');
  });
  it('Backspace rejects immediately instead of deleting the last Unicode character', () => {
    const {view}=create('x^2+1');input(view,' ');key(view,'Backspace');
    expect(text(view)).toBe('x^2+1');input(view,' ');expect(text(view)).toBe('x^2+1 ');
  });
  it('mobile backward deletion also rejects the last conversion', () => {
    const {view}=create('\\div');input(view,' ');
    view.contentDOM.dispatchEvent(new InputEvent('beforeinput',{inputType:'deleteContentBackward',bubbles:true,cancelable:true}));
    expect(text(view)).toBe('\\div');input(view,' ');expect(text(view)).toBe('\\div ');
  });
  it('editing rejected shorthand makes it eligible again', () => {
    const {view}=create('x^2');input(view,' ');undo(view);input(view,'+1');input(view,' ');
    expect(text(view)).toBe('x²⁺¹');
  });
  it('keeps rejection when moving away and back without editing the shorthand', () => {
    const {view}=create('x^2');input(view,' ');undo(view);
    view.dispatch({selection:{anchor:0}});view.dispatch({selection:{anchor:3}});
    input(view,' ');expect(text(view)).toBe('x^2 ');
  });
  it('Backspace returns to ordinary deletion after typing or moving the cursor', () => {
    const {view}=create('x^2');input(view,' ');input(view,'y');key(view,'Backspace');expect(text(view)).toBe('x²');
    key(view,'Backspace');expect(text(view)).toBe('x');
    const other=create('x^2').view;input(other,' ');
    other.dispatch({selection:{anchor:0}});other.dispatch({selection:{anchor:2}});
    key(other,'Backspace');expect(text(other)).toBe('x');
  });
  it('redo re-applies the conversion and permits immediate rejection', () => {
    const {view}=create('x_12');input(view,' ');undo(view);expect(text(view)).toBe('x_12');
    redo(view);expect(text(view)).toBe('x₁₂');key(view,'Backspace');expect(text(view)).toBe('x_12');
    input(view,' ');expect(text(view)).toBe('x_12 ');
  });
  it('undoing later typing leaves the conversion as its own history step', () => {
    const {view}=create('x^2');input(view,' ');input(view,'y');undo(view);expect(text(view)).toBe('x²');
    undo(view);expect(text(view)).toBe('x^2');input(view,' ');expect(text(view)).toBe('x^2 ');
  });
});

describe('protected contexts and IME', () => {
  it.each(['`x^2','```\nx^2','$x^2','---\na: x^2','[link](x^2','[[x^2','%% x^2',
    '`2026_11_03','$2026_11_03','[[2026_11_03','[link](2026_11_03','x_i\\^2'])('leaves %s untouched', source => {
    const {view}=create(source);input(view,' ');expect(text(view)).toBe(source+' ');
  });
  it('never converts a space while composition has started', async () => {
    const {view}=create('x^2');view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    input(view,' ');expect(text(view)).toBe('x^2 ');
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    await Promise.resolve();expect(text(view)).toBe('x^2 ');
    input(view,'x_i');input(view,' ');expect(text(view)).toBe('x^2 xᵢ');
  });
});
