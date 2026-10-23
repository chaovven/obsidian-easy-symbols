import { StateField } from '@codemirror/state';
import { installDomHelpers } from './dom-helpers';
if (typeof document !== 'undefined') installDomHelpers(document);
export const editorLivePreviewField=StateField.define({create:()=>true,update:(value:boolean)=>value});
export class MarkdownRenderChild {
  disposers:(()=>void)[]=[];
  constructor(readonly containerEl:HTMLElement){}
  register(callback:()=>void){this.disposers.push(callback);}
  unload(){for(const callback of this.disposers.splice(0))callback();}
}
export class MarkdownView {previewMode={rerender:(_full?:boolean)=>{}};}
export class Plugin {
  app={workspace:{onLayoutReady:(callback:()=>void)=>callback(),iterateAllLeaves:(_callback:unknown)=>{}}};
  storedData:unknown=null;
  settingTab:PluginSettingTab|undefined;
  extension:unknown;
  postProcessor:((element:HTMLElement,context:any)=>void)|undefined;
  async loadData(){return this.storedData;}
  async saveData(data:unknown){this.storedData=JSON.parse(JSON.stringify(data));}
  registerEditorExtension(extension:unknown){this.extension=extension;}
  registerMarkdownPostProcessor(processor:(element:HTMLElement,context:any)=>void){this.postProcessor=processor;}
  addSettingTab(tab:PluginSettingTab){this.settingTab=tab;}
}
export class PluginSettingTab {
  containerEl=Object.assign(document.createElement('div'),{empty(this:HTMLElement){this.replaceChildren();}});
  constructor(_app:unknown,_plugin:unknown){}
  getSettingDefinitions(): {name:string;desc:string;render:(setting:Setting)=>void}[]{return [];}
  display(){}
  renderDefinitions(){
    this.containerEl.empty();
    for(const definition of this.getSettingDefinitions()){
      const setting=new Setting(this.containerEl).setName(definition.name).setDesc(definition.desc);
      definition.render(setting);
    }
  }
}
export class Setting {
  private name:HTMLElement;
  descEl:HTMLElement;
  private row:HTMLElement;
  constructor(container:HTMLElement){
    this.row=container.ownerDocument.createElement('div');
    this.name=container.ownerDocument.createElement('div');
    this.name.className='setting-item-name';
    this.descEl=container.ownerDocument.createElement('div');
    this.descEl.className='setting-item-description';
    this.row.append(this.name,this.descEl);container.append(this.row);
  }
  setName(value:string){this.name.textContent=value;return this;}
  setDesc(value:string|DocumentFragment){this.descEl.replaceChildren(value);return this;}
  addToggle(callback:(toggle:{setValue(value:boolean):any;onChange(handler:(value:boolean)=>unknown):any})=>void){
    const input=this.row.ownerDocument.createElement('input');input.type='checkbox';this.row.append(input);
    const toggle={
      setValue(value:boolean){input.checked=value;return toggle;},
      onChange(handler:(value:boolean)=>unknown){input.addEventListener('change',()=>{void handler(input.checked);});return toggle;},
    };
    callback(toggle);return this;
  }
}
