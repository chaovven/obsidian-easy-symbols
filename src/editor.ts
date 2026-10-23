import { StateEffect, type SelectionRange } from '@codemirror/state';
import { Decoration, EditorView, ViewPlugin, WidgetType, type DecorationSet, type ViewUpdate } from '@codemirror/view';
import { editorLivePreviewField } from 'obsidian';
import { createSymbolDOM } from './dom';
import { analyze, matchesFor, type Analysis } from './syntax';
import type { Match, Settings } from './rules';

export const refreshSymbols = StateEffect.define<void>();
export function selectionTouches(match: Match, ranges: readonly Pick<SelectionRange, 'from' | 'to'>[]): boolean {
  // Include both edges: clicking or arrowing onto a widget reveals its source immediately.
  return ranges.some(range => range.from <= match.to && range.to >= match.from);
}
class SymbolWidget extends WidgetType {
  constructor(readonly match: Match) { super(); }
  eq(other: SymbolWidget): boolean { return this.match.source === other.match.source && this.match.kind === other.match.kind; }
  toDOM(view: EditorView): HTMLElement { return createSymbolDOM(view.dom.ownerDocument, this.match); }
  ignoreEvent(): boolean { return false; }
}
export function editorExtension(getSettings: () => Settings, isEnabled: () => boolean, views: Set<EditorView>) {
  return ViewPlugin.fromClass(class {
    decorations: DecorationSet = Decoration.none;
    private analysis: Analysis;
    private matches: Match[];
    private composing = false;
    private destroyed = false;
    constructor(readonly view: EditorView) {
      views.add(view);
      this.analysis = analyze(view.state.doc.toString());
      this.matches = matchesFor(this.analysis, getSettings());
      this.build();
    }
    update(update: ViewUpdate): void {
      const refresh = update.transactions.some(transaction => transaction.effects.some(effect => effect.is(refreshSymbols)));
      // Parse only on document changes; cursor moves and scrolling reuse this cache.
      if (update.docChanged) this.analysis = analyze(update.state.doc.toString());
      if (update.docChanged || refresh) this.matches = matchesFor(this.analysis, getSettings());
      if (update.docChanged || refresh || update.selectionSet || update.viewportChanged || update.startState.field(editorLivePreviewField, false) !== update.state.field(editorLivePreviewField, false)) this.build();
    }
    private build(): void {
      if (!isEnabled() || !this.view.state.field(editorLivePreviewField, false) || this.composing || this.view.composing) {
        this.decorations = Decoration.none; return;
      }
      const decorations = [];
      for (const visible of this.view.visibleRanges) {
        // Lower-bound search keeps cursor/viewport work independent of total match count.
        let low = 0, high = this.matches.length;
        while (low < high) { const mid = (low + high) >>> 1; if (this.matches[mid].to <= visible.from) low = mid + 1; else high = mid; }
        for (let i = low; i < this.matches.length && this.matches[i].from < visible.to; i++) {
          const match = this.matches[i];
          if (match.from < visible.from || match.to > visible.to || selectionTouches(match, this.view.state.selection.ranges)) continue;
          decorations.push(Decoration.replace({ widget: new SymbolWidget(match), inclusive: false }).range(match.from, match.to));
        }
      }
      this.decorations = Decoration.set(decorations, true);
    }
    composition(start: boolean): void {
      this.composing = start;
      if (start) this.view.dispatch({ effects: refreshSymbols.of() });
      else queueMicrotask(() => { if (!this.destroyed) this.view.dispatch({ effects: refreshSymbols.of() }); });
    }
    destroy(): void { this.destroyed = true; this.decorations = Decoration.none; views.delete(this.view); }
  }, {
    decorations: plugin => plugin.decorations,
    eventHandlers: {
      compositionstart() { this.composition(true); },
      compositionend() { this.composition(false); },
    },
  });
}
