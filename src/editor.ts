import { Prec, StateEffect, StateField, Transaction, type Extension } from '@codemirror/state';
import { invertedEffects, isolateHistory, undo } from '@codemirror/commands';
import { EditorView, keymap } from '@codemirror/view';
import { completionAt } from './syntax';
import type { Settings } from './rules';

type Completion = { from: number; source: string; text: string };
const converted = StateEffect.define<Completion>({
  map: (value, changes) => ({ ...value, from: changes.mapPos(value.from, 1) }),
});
const rejected = StateEffect.define<Completion>({
  map: (value, changes) => ({ ...value, from: changes.mapPos(value.from, 1) }),
});
const clearCompletion = StateEffect.define<void>();
const completionState = StateField.define<{ recent?: Completion; rejected?: Completion }>({
  create: () => ({}),
  update(value, transaction) {
    if (transaction.docChanged) value = {};
    else if (transaction.selection && !transaction.selection.eq(transaction.startState.selection)) {
      value = { rejected: value.rejected };
    }
    for (const effect of transaction.effects) {
      if (effect.is(converted)) value = { recent: effect.value };
      if (effect.is(rejected)) value = { rejected: effect.value };
      if (effect.is(clearCompletion)) value = {};
    }
    return value;
  },
});

/** Space completion is an ordinary, isolated source edit; nothing runs on note load. */
export function editorExtension(getSettings: () => Settings, isEnabled: () => boolean): Extension {
  const rejectRecent = (view: EditorView): boolean => {
    if (!isEnabled() || view.compositionStarted || view.composing) return false;
    const recent = view.state.field(completionState).recent;
    const { ranges, main } = view.state.selection;
    if (!recent || ranges.length !== 1 || !main.empty || main.head !== recent.from + recent.text.length
      || view.state.sliceDoc(recent.from, main.head) !== recent.text) return false;
    // Reuse real history: Undo and Backspace restore exactly the same source and caret.
    return undo(view);
  };
  return [
    completionState,
    invertedEffects.of(transaction => transaction.effects.flatMap(effect => {
      if (effect.is(converted)) return [rejected.of(effect.value)];
      if (effect.is(rejected)) return [converted.of(effect.value)];
      return [];
    })),
    Prec.highest(keymap.of([{ key: 'Backspace', run: rejectRecent }])),
    EditorView.domEventHandlers({
      beforeinput(event, view) {
        if (event.inputType === 'deleteContentBackward' && !event.isComposing && rejectRecent(view)) {
          event.preventDefault(); return true;
        }
        return false;
      },
    }),
    EditorView.domEventObservers({
      compositionstart(_event, view) {
        if (view.state.field(completionState).recent || view.state.field(completionState).rejected) {
          view.dispatch({ effects: clearCompletion.of() });
        }
      },
      blur(_event, view) {
        if (view.state.field(completionState).recent || view.state.field(completionState).rejected) {
          view.dispatch({ effects: clearCompletion.of() });
        }
      },
    }),
    EditorView.inputHandler.of((view, from, to, text, insert) => {
      if (!isEnabled() || text !== ' ' || from !== to || view.compositionStarted || view.composing
        || view.state.selection.ranges.length !== 1 || !view.state.selection.main.empty
        || view.state.selection.main.head !== from) return false;
      // Pasted/dropped/programmatic text and IME commits must never trigger completion.
      const normal = insert();
      if (normal.annotation(Transaction.userEvent) !== 'input.type') return false;
      const previous = view.state.field(completionState).rejected;
      if (previous && from === previous.from + previous.source.length
        && view.state.sliceDoc(previous.from, from) === previous.source) return false;
      const candidate = completionAt(view.state.doc.toString(), from, getSettings());
      if (!candidate) return false;
      view.dispatch({
        changes: { from: candidate.from, to: candidate.to, insert: candidate.text },
        selection: { anchor: candidate.from + candidate.text.length },
        effects: converted.of(candidate),
        annotations: isolateHistory.of('full'),
        userEvent: 'input.complete',
        scrollIntoView: true,
      });
      return true;
    }),
  ];
}
