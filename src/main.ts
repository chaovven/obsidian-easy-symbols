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
  display(): void {
    this.containerEl.empty();
    const options: [keyof Settings, string, string, string][] = [
      ['arrows', 'Arrows', 'Show typed arrows as symbols, such as -> for → and <=> for ⇔.', 'arrows'],
      ['scripts', 'Subscripts & superscripts', 'Show x_i as xᵢ and x^2 as x². Use a single letter before the subscript or superscript.', 'subscripts--superscripts'],
      ['operators', 'Math operators', 'Show comparisons and other operators as symbols, such as >= → ≥ and != → ≠. The input <= always means ≤.', 'math-operators'],
      ['latex', 'Symbols from commands', 'Show backslash commands as symbols, such as \\alpha → α and \\infty → ∞. Includes arrow and math operator commands.', 'symbols-from-commands'],
    ];
    for (const [key, name, description, section] of options) {
      const doc = this.containerEl.ownerDocument;
      const details = doc.createDocumentFragment();
      details.append(description + ' ');
      const link = doc.createElement('a');
      link.textContent = 'View all supported shortcuts';
      link.href = `https://github.com/chaovven/obsidian-easy-symbols#${section}`;
      link.className = 'external-link';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `View all supported shortcuts: ${name}`);
      details.append(link);
      new Setting(this.containerEl).setName(name).setDesc(details).addToggle(toggle => {
        toggle.setValue(this.plugin.settings[key]).onChange(async value => { await this.plugin.changeSetting(key, value); });
      });
    }
  }
}
