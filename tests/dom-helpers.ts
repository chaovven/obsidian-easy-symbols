// Minimal stand-in for Obsidian's DOM helper, installed in each test window.
export function installDomHelpers(doc: Document): void {
  const win = doc.defaultView!;
  const nodePrototype = win.Node.prototype;
  Object.defineProperty(nodePrototype, 'win', { configurable: true, get() { return this.ownerDocument?.defaultView ?? win; } });
  win.createFragment = callback => {
    const fragment = doc.createDocumentFragment();
    callback?.(fragment);
    return fragment;
  };
  win.createSpan = (options, callback) => win.createFragment().createSpan(options, callback);
  nodePrototype.createSpan = function(options, callback) { return this.createEl('span', options, callback); };
  nodePrototype.createEl = function<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    options: DomElementInfo | string = {},
    callback?: (element: HTMLElementTagNameMap[K]) => void,
  ): HTMLElementTagNameMap[K] {
    const owner = this.ownerDocument ?? doc;
    const element = owner.createElement(tag);
    const info = typeof options === 'string' ? { cls: options } : options;
    if (info.cls) element.className = Array.isArray(info.cls) ? info.cls.join(' ') : info.cls;
    if (info.text !== undefined) element.textContent = String(info.text);
    for (const [key, value] of Object.entries(info.attr ?? {})) {
      if (value !== null) element.setAttribute(key, String(value));
    }
    callback?.(element);
    const parent = info.parent ?? this;
    if (info.prepend) parent.insertBefore(element, parent.firstChild);
    else parent.appendChild(element);
    return element;
  };
}
