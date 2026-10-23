// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { EditorSelection, EditorState, StateEffect, StateField } from '@codemirror/state';
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
  it('suspends decoration throughout composition and restores it afterwards',async()=>{
    const {view}=create();const source=view.state.doc.toString();
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));
    expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    view.contentDOM.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true}));
    // CM ends its composing flag after its event handler finishes.
    await new Promise(resolve=>setTimeout(resolve,30));
    expect(view.state.doc.toString()).toBe(source);
    expect(view.dom.querySelectorAll('.easy-symbols')).toHaveLength(3);view.destroy();
  });
  it('includes edges and reversed selections',()=>{
    const match={from:5,to:8,source:'x_i',kind:'script' as const,text:'x',sub:'i'};
    expect(selectionTouches(match,[{from:8,to:8}])).toBe(true);
    expect(selectionTouches(match,[{from:0,to:4}])).toBe(false);
  });
});
