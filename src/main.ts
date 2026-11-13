import { Plugin, PluginSettingTab, Setting, type App } from 'obsidian';
import { DEFAULT_SETTINGS, loadSettings, type Settings } from './rules';
import { editorExtension } from './editor';

export default class EasySymbolsPlugin extends Plugin {
  settings: Settings = { ...DEFAULT_SETTINGS };
  private enabled = false;
  async onload(): Promise<void> {
    this.settings = loadSettings(await this.loadData());
    this.enabled = true;
    this.registerEditorExtension(editorExtension(() => this.settings, () => this.enabled));
    this.addSettingTab(new EasySymbolsSettings(this.app, this));
  }
  async changeSetting(key: keyof Settings, value: boolean): Promise<void> {
    this.settings = { ...this.settings, [key]: value };
    await this.saveData(this.settings);
  }
  onunload(): void {
    this.enabled = false;
  }
}
class EasySymbolsSettings extends PluginSettingTab {
  constructor(app: App, readonly plugin: EasySymbolsPlugin) { super(app, plugin); }
  getSettingDefinitions() {
    const options: [keyof Settings, string, string, string][] = [
      ['arrows', 'Arrows', 'Press Space after -> or <=> to insert → or ⇔. The conversion consumes that space.', 'arrows'],
      ['scripts', 'Subscripts & superscripts', 'Press Space to convert the text after the nearest _ or ^, such as 2026_11_03 → 2026_11₀₃. Earlier text stays unchanged. Every character in that part must have a Unicode equivalent.', 'subscripts--superscripts'],
      ['operators', 'Math operators', 'Press Space after >= or != to insert ≥ or ≠. The input <= always means ≤.', 'math-operators'],
      ['latex', 'Symbols from commands', 'Press Space to replace backslash commands with Unicode, such as \\alpha → α and \\infty → ∞. Includes arrow and math operator commands.', 'symbols-from-commands'],
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
