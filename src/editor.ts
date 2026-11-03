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
    private needsBuild = false;
    private destroyed = false;
    constructor(readonly view: EditorView) {
      views.add(view);
      this.analysis = analyze(view.state.doc.toString());
      this.matches = matchesFor(this.analysis, getSettings());
      if (view.compositionStarted) this.needsBuild = true;
      else this.build();
    }
    update(update: ViewUpdate): void {
      const refresh = update.transactions.some(transaction => transaction.effects.some(effect => effect.is(refreshSymbols)));
      // Parse only on document changes; cursor moves and scrolling reuse this cache.
      if (update.docChanged) this.analysis = analyze(update.state.doc.toString());
      if (update.docChanged || refresh) this.matches = matchesFor(this.analysis, getSettings());
      this.needsBuild ||= this.view.compositionStarted || update.docChanged || refresh || update.selectionSet || update.viewportChanged || update.startState.field(editorLivePreviewField, false) !== update.state.field(editorLivePreviewField, false);
      if (!this.needsBuild) return;
      if (this.view.compositionStarted) {
        // Keep existing widgets stable while the IME owns the composing DOM.
        // Map their positions, remove invalid/selected matches, but add no widgets.
        if (!isEnabled() || !this.view.state.field(editorLivePreviewField, false)) {
          this.decorations = Decoration.none;
        } else {
          const matches = new Map(this.matches.map(match => [match.from, match]));
          this.decorations = this.decorations.map(update.changes).update({ filter: (from, to, decoration) => {
            const match = matches.get(from);
            const widget = decoration.spec.widget as SymbolWidget;
            return match?.to === to && match.source === widget.match.source && match.kind === widget.match.kind
              && !selectionTouches(match, update.state.selection.ranges);
          } });
        }
      } else {
        this.build();
        this.needsBuild = false;
      }
    }
    private build(): void {
      if (!isEnabled() || !this.view.state.field(editorLivePreviewField, false)) {
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
    compositionEnded(): void {
      // Wait for CodeMirror to finish handling the event and clear its IME state.
      queueMicrotask(() => { if (!this.destroyed) this.view.dispatch({ effects: refreshSymbols.of() }); });
    }
    destroy(): void { this.destroyed = true; this.decorations = Decoration.none; views.delete(this.view); }
  }, {
    decorations: plugin => plugin.decorations,
    eventObservers: {
      // Observers still run when another extension consumes the end event.
      compositionend() { this.compositionEnded(); },
    },
  });
}
