// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { EditorSelection, EditorState, Prec, StateEffect, StateField } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { editorLivePreviewField } from 'obsidian';
import { editorExtension, refreshSymbols, selectionTouches } from '../src/editor';
import { DEFAULT_SETTINGS, type Settings } from '../src/rules';

beforeEach(()=>{
  // jsdom has no layout; supply only the geometry CM's selection measurement needs.
  Range.prototype.getClientRects = () => [] as unknown as DOMRectList;
  Range.prototype.getBoundingClientRect = () => new DOMRect();
});
function create(doc='Test x_i -> \\alpha\nEnd', live=true) {
  let settings:Settings={...DEFAULT_SETTINGS}, enabled=true;
  const views=new Set<EditorView>();
  const extensions=[editorExtension(()=>settings,()=>enabled,views),EditorState.allowMultipleSelections.of(true)];
  if(live)extensions.push(editorLivePreviewField as never);
  const view=new EditorView({state:EditorState.create({doc,extensions}),parent:document.body});
  return {view,views,settings:(next:Settings)=>{settings=next;view.dispatch({effects:refreshSymbols.of()});},disable:()=>{enabled=false;view.dispatch({effects:refreshSymbols.of()});}};
}
describe('CodeMirror decorations never edit source',()=>{
  it('renders in Live Preview, with no document change or undo transaction',()=>{
    const {view,views}=create();const source=view.state.doc.toString();
    const transactions:{docChanged:boolean}[]=[];
    view.dispatch({effects:StateEffect.appendConfig.of(EditorView.updateListener.of(update=>transactions.push(...update.transactions)))});
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(3);
    view.dispatch({selection:{anchor:7}});
    expect(view.dom.querySelector('sub')).toBeNull();
    view.dispatch({selection:{anchor:0}});
    expect(view.dom.querySelector('sub')?.textContent).toBe('i');
    expect(view.state.doc.toString()).toBe(source);
    expect(transactions.every(t=>!t.docChanged)).toBe(true);
    view.destroy();expect(views.size).toBe(0);
  });
  it('renders superscript-first syntax and reveals its full original text when selected',()=>{
    const source='Test x^2_i End';
    const {view}=create(source);
    expect(view.dom.querySelector('sub')?.textContent).toBe('i');
    expect(view.dom.querySelector('sup')?.textContent).toBe('2');
    view.dispatch({selection:{anchor:5,head:10}});
    expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    expect(view.state.doc.toString()).toBe(source);
    view.destroy();
  });
  it('reveals matches touched by any cursor or selection',()=>{
    const {view}=create();
    view.dispatch({selection:EditorSelection.create([EditorSelection.cursor(7),EditorSelection.range(9,11)])});
    expect(view.dom.querySelector('sub')).toBeNull();
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(1);
    view.destroy();
  });
  it('shows only original source when not in Live Preview',()=>{
    const {view}=create(undefined,false);expect(view.dom.querySelector('.easy-symbols')).toBeNull();view.destroy();
  });
  it('refresh and unload remove decorations without text edits',()=>{
    const {view,settings,disable}=create();const source=view.state.doc.toString();
    settings({...DEFAULT_SETTINGS,scripts:false});expect(view.dom.querySelector('sub')).toBeNull();
    disable();expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    expect(view.state.doc.toString()).toBe(source);view.destroy();
  });
  it('keeps existing widgets through composition edits without replacing their DOM',async()=>{
    const {view}=create();
    const widgets=Array.from(view.dom.querySelectorAll('.easy-symbols'));
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    expect(Array.from(view.dom.querySelectorAll('.easy-symbols'))).toEqual(widgets);
    // Insert and replace provisional text before the symbols, moving their positions.
    view.dispatch({changes:{from:0,insert:'ni'},selection:{anchor:2},userEvent:'input.type.compose'});
    view.dispatch({changes:{from:0,to:2,insert:'你'},selection:{anchor:1},userEvent:'input.type.compose'});
    widgets.forEach((widget,index)=>expect(view.dom.querySelectorAll('.easy-symbols')[index]).toBe(widget));
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    await Promise.resolve();
    expect(view.state.doc.toString()).toBe('你Test x_i -> \\alpha\nEnd');
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(3);view.destroy();
  });
  it('defers new widgets until composition ends, even away from the caret',async()=>{
    const {view}=create('Test ');
    view.dispatch({selection:{anchor:5}});
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    view.dispatch({changes:{from:5,insert:'x_i 你好'},selection:{anchor:11},userEvent:'input.type.compose'});
    expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    await Promise.resolve();
    expect(view.dom.querySelector('sub')?.textContent).toBe('i');
    expect(view.state.doc.toString()).toBe('Test x_i 你好');view.destroy();
  });
  it('recovers when another extension handles compositionend before ordinary handlers',async()=>{
    const {view}=create('Test ');
    const handled=vi.fn(()=>true);
    view.dispatch({effects:StateEffect.appendConfig.of(Prec.high(EditorView.domEventHandlers({compositionend:handled})))});
    view.dispatch({selection:{anchor:5}});
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    view.dispatch({changes:{from:5,insert:'x_i '},selection:{anchor:9},userEvent:'input.type.compose'});
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true,cancelable:true}));
    await Promise.resolve();
    expect(handled).toHaveBeenCalledOnce();
    expect(view.compositionStarted).toBe(false);
    expect(view.dom.querySelector('sub')?.textContent).toBe('i');
    // Normal/visual-style cursor and range changes must keep revealing and restoring source.
    view.dispatch({selection:{anchor:8,head:5}});
    expect(view.dom.querySelector('sub')).toBeNull();
    view.dispatch({selection:{anchor:0}});
    expect(view.dom.querySelector('sub')?.textContent).toBe('i');view.destroy();
  });
  it('does not restore widgets into a new composition before its end',async()=>{
    const {view}=create('Test ');
    view.dispatch({selection:{anchor:5}});
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    view.dispatch({changes:{from:5,insert:'x_i '},selection:{anchor:9},userEvent:'input.type.compose'});
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    await Promise.resolve();
    expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    await Promise.resolve();
    expect(view.dom.querySelector('sub')?.textContent).toBe('i');view.destroy();
  });
  it('does not refresh a destroyed editor after compositionend',async()=>{
    const {view,views}=create();
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    const dispatch=vi.spyOn(view,'dispatch');
    view.destroy();
    await Promise.resolve();
    expect(dispatch).not.toHaveBeenCalled();expect(views.size).toBe(0);
  });
  it('preserves remote symbols while CodeMirror reads provisional text from the DOM',async()=>{
    const {view}=create();
    const errors=vi.fn();
    view.dispatch({effects:StateEffect.appendConfig.of(EditorView.exceptionSink.of(errors))});
    view.focus();
    view.dispatch({selection:{anchor:view.state.doc.length}});
    const widgets=Array.from(view.dom.querySelectorAll('.easy-symbols'));
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    for (const text of ['Endni','Endnihao','End你好']) {
      const node=view.contentDOM.querySelector('.cm-line:last-child')!.firstChild!;
      expect(node.nodeType).toBe(Node.TEXT_NODE);
      node.nodeValue=text;
      window.getSelection()!.collapse(node,text.length);
      view.contentDOM.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertCompositionText',isComposing:true}));
      // Allow the real CodeMirror DOM observer to read this composition edit.
      await new Promise(resolve=>setTimeout(resolve,30));
      expect(view.composing).toBe(true);
      expect(view.state.doc.toString()).toBe('Test x_i -> \\alpha\n'+text);
      widgets.forEach((widget,index)=>expect(view.dom.querySelectorAll('.easy-symbols')[index]).toBe(widget));
    }
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    await new Promise(resolve=>setTimeout(resolve,60));
    expect(view.compositionStarted).toBe(false);
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(3);
    expect(errors).not.toHaveBeenCalled();view.destroy();
  });
  it('restores a locally revealed symbol after cancelling composition and moving away',async()=>{
    const {view}=create();const source=view.state.doc.toString();
    view.dispatch({selection:{anchor:7}});
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    expect(view.dom.querySelector('sub')).toBeNull();
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(2);
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true,data:''}));
    await Promise.resolve();
    view.dispatch({selection:{anchor:0}});
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(3);
    expect(view.state.doc.toString()).toBe(source);view.destroy();
  });
  it('drops edited widgets before they can cover a new line during composition',async()=>{
    const {view}=create();
    const errors=vi.fn();
    view.dispatch({effects:StateEffect.appendConfig.of(EditorView.exceptionSink.of(errors))});
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    view.dispatch({changes:{from:7,insert:'\n'},selection:{anchor:8},userEvent:'input.type.compose'});
    expect(view.dom.querySelector('sub')).toBeNull();
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(2);
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    await Promise.resolve();
    expect(view.state.doc.toString()).toBe('Test x_\ni -> \\alpha\nEnd');
    expect(errors).not.toHaveBeenCalled();view.destroy();
  });
  it('honors setting changes and disable while composition is active',async()=>{
    const {view,settings,disable}=create();const source=view.state.doc.toString();
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    settings({...DEFAULT_SETTINGS,scripts:false});
    expect(view.dom.querySelector('sub')).toBeNull();
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(2);
    disable();
    expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    await Promise.resolve();
    expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    expect(view.state.doc.toString()).toBe(source);view.destroy();
  });
  it('includes edges and reversed selections',()=>{
    const match={from:5,to:8,source:'x_i',kind:'script' as const,text:'x',sub:'i'};
    expect(selectionTouches(match,[{from:8,to:8}])).toBe(true);
    expect(selectionTouches(match,[{from:0,to:4}])).toBe(false);
  });
});
