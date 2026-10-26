import { MarkdownRenderChild, MarkdownView, Plugin, PluginSettingTab, Setting, type App } from 'obsidian';
import type { EditorView } from '@codemirror/view';
import { DEFAULT_SETTINGS, loadSettings, type Settings } from './rules';
import { editorExtension, refreshSymbols } from './editor';
import { analyze, sectionAnalysis, type Analysis } from './syntax';
import { ReadingRender } from './reading';

export default class EasySymbolsPlugin extends Plugin {
  settings: Settings = { ...DEFAULT_SETTINGS };
  private enabled = false;
  private cache = new Map<string, Analysis>();
  private views = new Set<EditorView>();
  private reading = new Set<ReadingRender>();
  async onload(): Promise<void> {
    this.settings = loadSettings(await this.loadData());
    this.enabled = true;
    this.registerEditorExtension(editorExtension(() => this.settings, () => this.enabled, this.views));
    this.registerMarkdownPostProcessor((element, context) => {
      // Source mode must remain untouched, including host-rendered nested blocks.
      if (element.closest('.markdown-source-view')) return;
      const info = context.getSectionInfo(element);
      if (!info || !this.enabled) return;
      // getSectionInfo.text is the WHOLE note; lineStart/lineEnd identify this section.
      let analysis = this.cache.get(context.sourcePath);
      if (!analysis || analysis.source !== info.text) {
        analysis = analyze(info.text);
        if (this.cache.size >= 8) this.cache.delete(this.cache.keys().next().value!);
        this.cache.set(context.sourcePath, analysis);
      }
      const render = new ReadingRender(element, sectionAnalysis(analysis, info.lineStart, info.lineEnd));
      this.reading.add(render);
      const child = new MarkdownRenderChild(element);
      child.register(() => { render.restore(); this.reading.delete(render); });
      context.addChild(child);
      render.render(this.settings);
    });
    this.addSettingTab(new EasySymbolsSettings(this.app, this));
    this.app.workspace.onLayoutReady(() => { if (this.enabled) this.rerenderPreviews(); });
  }
  async changeSetting(key: keyof Settings, value: boolean): Promise<void> {
    this.settings = { ...this.settings, [key]: value };
    this.refresh();
    // Obsidian's plugin data.json is the only persistent write; notes are never written.
    await this.saveData(this.settings);
  }
  private refresh(): void {
    for (const view of this.views) view.dispatch({ effects: refreshSymbols.of() });
    for (const render of this.reading) render.render(this.settings);
  }
  private rerenderPreviews(): void {
    this.app.workspace.iterateAllLeaves(leaf => {
      if (leaf.view instanceof MarkdownView) leaf.view.previewMode.rerender(true);
    });
  }
  onunload(): void {
    this.enabled = false;
    for (const view of this.views) view.dispatch({ effects: refreshSymbols.of() });
    for (const render of this.reading) render.restore();
    this.reading.clear();
    this.cache.clear();
    this.views.clear();
  }
}
class EasySymbolsSettings extends PluginSettingTab {
  constructor(app: App, readonly plugin: EasySymbolsPlugin) { super(app, plugin); }
  getSettingDefinitions() {
    const options: [keyof Settings, string, string, string][] = [
      ['arrows', 'Arrows', 'Show typed arrows as symbols, such as -> for → and <=> for ⇔.', 'arrows'],
      ['scripts', 'Subscripts & superscripts', 'Show x_i as xᵢ and x^2 as x². Use a single letter before the subscript or superscript.', 'subscripts--superscripts'],
      ['operators', 'Math operators', 'Show comparisons and other operators as symbols, such as >= → ≥ and != → ≠. The input <= always means ≤.', 'math-operators'],
      ['latex', 'Symbols from commands', 'Show backslash commands as symbols, such as \\alpha → α and \\infty → ∞. Includes arrow and math operator commands.', 'symbols-from-commands'],
    ];
    return options.map(([key, name, description, section]) => ({
      name,
      desc: description,
      // Search indexing reads the text above without creating any DOM.
      render: (setting: Setting) => {
        // A fragment passed to setDesc can be stringified on newer Obsidian; build the link in place.
        setting.setDesc(description + ' ');
        setting.descEl.createEl('a', {
          text: 'View all supported shortcuts',
          cls: 'external-link',
          attr: {
            href: `https://github.com/chaovven/obsidian-easy-symbols#${section}`,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': `View all supported shortcuts: ${name}`,
          },
        });
        setting.addToggle(toggle => {
          toggle.setValue(this.plugin.settings[key]).onChange(async value => {
            await this.plugin.changeSetting(key, value);
          });
        });
      },
    }));
  }
  // Obsidian before 1.13.0 uses this fallback; both paths share the same controls.
  display(): void {
    this.containerEl.empty();
    for (const definition of this.getSettingDefinitions()) {
      const setting = new Setting(this.containerEl).setName(definition.name);
      definition.render(setting);
    }
  }
}
