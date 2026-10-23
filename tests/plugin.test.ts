// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import EasySymbolsPlugin from '../src/main';
import { Plugin, MarkdownRenderChild, editorLivePreviewField } from './obsidian';
import { analyze, sectionAnalysis } from '../src/syntax';
import { ReadingRender } from '../src/reading';
import { DEFAULT_SETTINGS } from '../src/rules';

// Only the host boundary is mocked; the real parser, DOM renderer and CodeMirror run here.
function pluginHost(plugin: EasySymbolsPlugin) { return plugin as unknown as Plugin; }
describe('plugin lifecycle and persistent settings',()=>{
  it('refreshes both modes, saves only plugin data, restores on unload',async()=>{
    const plugin=new EasySymbolsPlugin({} as never,{} as never), host=pluginHost(plugin);
    host.storedData={latex:false};await plugin.onload();
    const source='Header\n\n[TODO] x_i \\alpha ->';
    const element=document.createElement('div');element.innerHTML='<p>[TODO] x_i \\alpha -&gt;</p>';
    const original=element.innerHTML, children:MarkdownRenderChild[]=[];
    host.postProcessor!(element,{sourcePath:'test.md',getSectionInfo:()=>({text:source,lineStart:2,lineEnd:2}),addChild:(child:MarkdownRenderChild)=>children.push(child)});
    const view=new EditorView({state:EditorState.create({doc:source,extensions:[editorLivePreviewField,host.extension as never]}),parent:document.body});
    expect(element.querySelectorAll('.easy-symbols')).toHaveLength(2);
    await plugin.changeSetting('latex',true);
    expect(element.querySelectorAll('.easy-symbols')).toHaveLength(3);
    expect(host.storedData).toMatchObject({latex:true});
    expect(plugin.settings).not.toHaveProperty('status');
    expect(element.textContent).toContain('[TODO]');
    expect(view.state.doc.toString()).toBe(source);
    plugin.onunload();expect(element.innerHTML).toBe(original);
    expect(view.dom.querySelector('.easy-symbols')).toBeNull();
    expect(view.state.doc.toString()).toBe(source);
    children.forEach(child=>child.unload());view.destroy();
  });
  it('does not process host-rendered blocks inside Source Mode',async()=>{
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);await plugin.onload();
    const source=document.createElement('div');source.className='markdown-source-view';source.innerHTML='<p>x_i -&gt;</p>';
    const getSectionInfo=vi.fn();host.postProcessor!(source.firstElementChild as HTMLElement,{getSectionInfo});
    expect(getSectionInfo).not.toHaveBeenCalled();plugin.onunload();
  });
  it('retains reference definitions outside the current section',()=>{
    const source='Title\n\n[TODO][ref] and x_i ->\n\n[ref]: https://example.com';
    const element=document.createElement('div');element.innerHTML='<p><a href="https://example.com">TODO</a> and x_i -&gt;</p>';
    const render=new ReadingRender(element,sectionAnalysis(analyze(source),2,2));
    expect(render.render(DEFAULT_SETTINGS)).toBe(true);
    expect(element.querySelector('a .easy-symbols')).toBeNull();expect(element.querySelector('sub')?.textContent).toBe('i');
  });
  it('cleans up section ownership when Obsidian unloads the render child',async()=>{
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);await plugin.onload();
    const element=document.createElement('div');element.innerHTML='<p>x_i</p>';let child:MarkdownRenderChild|undefined;
    host.postProcessor!(element,{sourcePath:'test',getSectionInfo:()=>({text:'x_i',lineStart:0,lineEnd:0}),addChild:(value:MarkdownRenderChild)=>child=value});
    expect(element.querySelector('sub')).not.toBeNull();child!.unload();expect(element.textContent).toBe('x_i');
    await plugin.changeSetting('scripts',false);plugin.onunload();
  });
});


describe('settings documentation links',()=>{
  for(const mode of ['legacy','declarative'] as const) it(`links settings and refreshes both modes with the ${mode} UI`,async()=>{
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);
    await plugin.onload();
    const tab=host.settingTab!;
    const showSettings=()=>mode==='legacy'?tab.display():tab.renderDefinitions();
    showSettings();
    const source='Text x_i ->';
    const element=document.createElement('div');element.innerHTML='<p>Text x_i -&gt;</p>';
    host.postProcessor!(element,{sourcePath:'settings-test.md',getSectionInfo:()=>({text:source,lineStart:0,lineEnd:0}),addChild:()=>{}});
    const view=new EditorView({state:EditorState.create({doc:source,extensions:[editorLivePreviewField,host.extension as never]}),parent:document.body});
    expect(element.querySelector('.easy-symbols-symbol')?.textContent).toBe('→');
    expect(view.dom.querySelector('.easy-symbols-symbol')?.textContent).toBe('→');
    const links=[...tab.containerEl.querySelectorAll('a')];
    const names=[...tab.containerEl.querySelectorAll('.setting-item-name')].map(node=>node.textContent!);
    expect(names).toEqual(['Arrows','Subscripts & superscripts','Math operators','Symbols from commands']);
    expect(links).toHaveLength(4);
    const headings=readFileSync('README.md','utf8').split('\n').filter(line=>line.startsWith('## ')).map(line=>line.slice(3));
    for(const [index,link] of links.entries()){
      expect(link.textContent).toBe('View all supported shortcuts');
      expect(link.origin+link.pathname).toBe('https://github.com/chaovven/obsidian-easy-symbols');
      expect(headings).toContain(names[index]);
      const slug=names[index].toLowerCase().replace(/&/g,'').replace(/ /g,'-');
      expect(link.hash).toBe('#'+slug);
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
    }
    const toggles=[...tab.containerEl.querySelectorAll('input')];
    expect(toggles).toHaveLength(4);expect(toggles.every(toggle=>toggle.checked)).toBe(true);
    toggles[0].checked=false;toggles[0].dispatchEvent(new Event('change'));
    expect(plugin.settings).toEqual({...DEFAULT_SETTINGS,arrows:false});
    expect(host.storedData).toEqual({...DEFAULT_SETTINGS,arrows:false});
    expect(element.querySelector('.easy-symbols-symbol')).toBeNull();
    expect(view.dom.querySelector('.easy-symbols-symbol')).toBeNull();
    expect(element.querySelector('sub')?.textContent).toBe('i');
    expect(view.state.doc.toString()).toBe(source);
    showSettings();expect(tab.containerEl.querySelectorAll('a')).toHaveLength(4);
    plugin.onunload();view.destroy();
  });
});


describe('searchable settings registration',()=>{
  it('provides names and descriptions for search without rendering or saving',async()=>{
    const plugin=new EasySymbolsPlugin({} as never,{} as never),host=pluginHost(plugin);
    await plugin.onload();
    const tab=host.settingTab!;
    const fragmentSpy=vi.spyOn(document,'createDocumentFragment');
    const saveSpy=vi.spyOn(plugin,'saveData');
    const definitions=tab.getSettingDefinitions();
    expect(definitions).toHaveLength(4);
    expect(definitions.every(definition=>definition.name&&definition.desc&&typeof definition.render==='function')).toBe(true);
    expect(fragmentSpy).not.toHaveBeenCalled();expect(saveSpy).not.toHaveBeenCalled();
    expect(tab.containerEl.childNodes).toHaveLength(0);
    fragmentSpy.mockRestore();saveSpy.mockRestore();plugin.onunload();
  });
});
