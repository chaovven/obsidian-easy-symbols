// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { EditorState, type Extension } from '@codemirror/state';
import { history } from '@codemirror/commands';
import { EditorView } from '@codemirror/view';
import EasySymbolsPlugin from '../src/main';
import { Plugin } from './obsidian';
import { DEFAULT_SETTINGS } from '../src/rules';

function pluginHost(plugin: EasySymbolsPlugin) { return plugin as unknown as Plugin; }
function space(view: EditorView) {
  const pos=view.state.selection.main.head;
  const insert=()=>view.state.update({changes:{from:pos,insert:' '},selection:{anchor:pos+1},userEvent:'input.type'});
  if(!view.state.facet(EditorView.inputHandler).some(handler=>handler(view,pos,pos,' ',insert))) view.dispatch(insert());
}
describe('plugin lifecycle', () => {
  it('does not rewrite notes on load, settings changes or unload, and never registers a renderer', async () => {
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);
    host.storedData={latex:false};await plugin.onload();
    const source='Existing x_i \\alpha ->';
    const view=new EditorView({state:EditorState.create({doc:source,extensions:[history(),host.extension as Extension]}),parent:document.body});
    expect(host.postProcessor).toBeUndefined();expect(view.state.doc.toString()).toBe(source);
    expect(view.dom.querySelector('.easy-symbols,sub,sup')).toBeNull();
    await plugin.changeSetting('latex',true);expect(host.storedData).toMatchObject({latex:true});
    expect(view.state.doc.toString()).toBe(source);
    plugin.onunload();expect(view.state.doc.toString()).toBe(source);view.destroy();
  });
  it('only writes note text through the active editor after a typed Space', async () => {
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);await plugin.onload();
    const view=new EditorView({state:EditorState.create({doc:'\\div',selection:{anchor:4},extensions:[history(),host.extension as Extension]}),parent:document.body});
    space(view);expect(view.state.doc.toString()).toBe('÷');
    view.dispatch({changes:{from:1,insert:' ->'},selection:{anchor:4}});
    plugin.onunload();space(view);expect(view.state.doc.toString()).toBe('÷ -> ');view.destroy();
  });
});

describe('settings UI and search', () => {
  for(const mode of ['legacy','declarative'] as const) it(`keeps independent persisted switches and links in ${mode} settings`,async()=>{
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);await plugin.onload();
    const tab=host.settingTab!;
    const showSettings=()=>mode==='legacy'?tab.display():tab.renderDefinitions();showSettings();
    const links=[...tab.containerEl.querySelectorAll('a')];
    const names=[...tab.containerEl.querySelectorAll('.setting-item-name')].map(node=>node.textContent!);
    expect(names).toEqual(['Arrows','Subscripts & superscripts','Math operators','Symbols from commands']);
    expect(links).toHaveLength(4);
    const headings=[...readFileSync('README.md','utf8').matchAll(/^#{2,3} (.+)$/gm)].map(match=>match[1]);
    for(const [index,link] of links.entries()){
      expect(link.textContent).toBe('View all supported shortcuts');
      expect(link.origin+link.pathname).toBe('https://github.com/chaovven/obsidian-easy-symbols');
      expect(headings).toContain(names[index]);
      expect(link.hash).toBe('#'+names[index].toLowerCase().replace(/&/g,'').replace(/ /g,'-'));
      expect(link.target).toBe('_blank');expect(link.rel).toContain('noopener');
    }
    const view=new EditorView({state:EditorState.create({doc:'->',selection:{anchor:2},extensions:[history(),host.extension as Extension]}),parent:document.body});
    const toggles=[...tab.containerEl.querySelectorAll('input')];
    expect(toggles).toHaveLength(4);expect(toggles.every(toggle=>toggle.checked)).toBe(true);
    toggles[0].checked=false;toggles[0].dispatchEvent(new Event('change'));
    expect(plugin.settings).toEqual({...DEFAULT_SETTINGS,arrows:false});
    expect(host.storedData).toEqual({...DEFAULT_SETTINGS,arrows:false});
    space(view);expect(view.state.doc.toString()).toBe('-> ');
    showSettings();expect(tab.containerEl.querySelectorAll('a')).toHaveLength(4);
    plugin.onunload();view.destroy();
  });
  it('provides searchable descriptions without rendering or saving',async()=>{
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);await plugin.onload();
    const tab=host.settingTab!,fragmentSpy=vi.spyOn(document,'createDocumentFragment'),saveSpy=vi.spyOn(plugin,'saveData');
    const definitions=tab.getSettingDefinitions();expect(definitions).toHaveLength(4);
    expect(definitions.every(item=>item.desc.includes('Space')&&typeof item.render==='function')).toBe(true);
    expect(fragmentSpy).not.toHaveBeenCalled();expect(saveSpy).not.toHaveBeenCalled();
    expect(tab.containerEl.childNodes).toHaveLength(0);fragmentSpy.mockRestore();saveSpy.mockRestore();plugin.onunload();
  });
});
