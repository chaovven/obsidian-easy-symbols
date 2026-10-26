export interface Settings {
  scripts: boolean;
  latex: boolean;
  arrows: boolean;
  operators: boolean;
}
export const DEFAULT_SETTINGS: Settings = { scripts: true, latex: true, arrows: true, operators: true };
export function loadSettings(value: unknown): Settings {
  const settings = { ...DEFAULT_SETTINGS };
  if (value && typeof value === 'object') for (const key of Object.keys(settings) as (keyof Settings)[]) {
    if (typeof (value as Record<string, unknown>)[key] === 'boolean') settings[key] = (value as Settings)[key];
  }
  return settings;
}
export const COMMANDS: Readonly<Record<string, string>> = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', theta: 'θ', lambda: 'λ', mu: 'μ', sigma: 'σ', omega: 'ω', Delta: 'Δ',
  infty: '∞', emptyset: '∅', sum: '∑', partial: '∂', nabla: '∇', forall: '∀', exists: '∃', in: '∈', subset: '⊂',
  land: '∧', wedge: '∧', lor: '∨', vee: '∨',
  rightarrow: '→', leftarrow: '←', uparrow: '↑', downarrow: '↓', leftrightarrow: '↔', longrightarrow: '⟶', longleftarrow: '⟵', longleftrightarrow: '⟷',
  Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔', geq: '≥', leq: '≤', neq: '≠', approx: '≈', pm: '±', mp: '∓',
};
export const ARROWS: Readonly<Record<string, string>> = { '->': '→', '<-': '←', '<->': '↔', '-->': '⟶', '<--': '⟵', '<-->': '⟷', '=>': '⇒', '<=>': '⇔', '^|': '↑', 'v|': '↓', '|^': '↑', '|v': '↓' };
export const OPERATORS: Readonly<Record<string, string>> = { '>=': '≥', '<=': '≤', '!=': '≠', '~=': '≈', '+-': '±', '-+': '∓' };
export interface Match {
  from: number;
  to: number;
  source: string;
  kind: 'symbol' | 'script';
  text: string;
  sub?: string;
  sup?: string;
}
const identifier = /[\p{L}\p{N}_\\^]/u;
/** Scan a complete source text leaf. Native Markdown protection is handled by syntax.ts. */
export function scan(text: string, settings: Settings, offset = 0): Match[] {
  const result: Match[] = [];
  let i = 0;
  const add = (length: number, data: Omit<Match, 'from' | 'to' | 'source'>) => {
    result.push({ from: offset + i, to: offset + i + length, source: text.slice(i, i + length), ...data });
    i += length;
  };
  while (i < text.length) {
    const tail = text.slice(i);
    // Escaped punctuation is consumed atomically; \\alpha must stay a literal command.
    if (text[i] === '\\') {
      const command = /^\\([A-Za-z]+)/.exec(tail);
      if (command) {
        const value = COMMANDS[command[1]];
        if (settings.latex && value) add(command[0].length, { kind: 'symbol', text: value });
        else i += command[0].length;
      } else i += Math.min(2, tail.length);
      continue;
    }
    // ^| v| |^ |v are vertical arrows; a v must not be part of a word.
    const vertical = /^(?:[\^v]\||\|[\^v])/.exec(tail);
    if (vertical && (vertical[0] !== 'v|' || i === 0 || !identifier.test(text[i - 1]))
      && (vertical[0] !== '|v' || !identifier.test(text[i + 2] ?? ''))) {
      if (settings.arrows) add(2, { kind: 'symbol', text: ARROWS[vertical[0]] }); else i += 2;
      continue;
    }
    if (settings.scripts && /[A-Za-z]/.test(text[i]) && /[_^]/.test(text[i + 1] ?? '') && (i === 0 || !identifier.test(text[i - 1]))) {
      const script = readScript(tail);
      if (script) { add(script.length, { kind: 'script', text: text[i], sub: script.sub, sup: script.sup }); continue; }
    }
    // Consume the entire operator run, even when unknown or its category is disabled.
    const op = /^[<>!=~+-]+/.exec(tail);
    if (op) {
      const value = (settings.arrows ? ARROWS[op[0]] : undefined) ?? (settings.operators ? OPERATORS[op[0]] : undefined);
      if (value) add(op[0].length, { kind: 'symbol', text: value });
      else i += op[0].length;
      continue;
    }
    i++;
  }
  return result;
}

/** One letter, then _ or ^. A script runs until whitespace; { } is an optional wrapper. The first opposite mark switches. */
function readScript(tail: string): { length: number; sub?: string; sup?: string } | undefined {
  const result: { length: number; sub?: string; sup?: string } = { length: 1 };
  let mark = tail[1];
  while (mark === '_' || mark === '^') {
    const key = mark === '_' ? 'sub' : 'sup';
    if (result[key] !== undefined) break;
    const start = result.length + 1;
    let end: number, value: string;
    if (tail[start] === '{') {
      end = tail.indexOf('}', start);
      if (end < 0 || /[{\r\n]/.test(tail.slice(start + 1, end))) break;
      value = tail.slice(start + 1, end); end++;
    } else {
      const other = mark === '_' ? '^' : '_';
      end = start;
      while (end < tail.length && !/\s/.test(tail[end]) && (tail[end] !== other || result.sub !== undefined || result.sup !== undefined)) end++;
      value = tail.slice(start, end);
    }
    // An empty or broken second part leaves the first one intact.
    if (!value) break;
    result[key] = value; result.length = end;
    mark = tail[end];
  }
  return result.sub ?? result.sup ? result : undefined;
}
