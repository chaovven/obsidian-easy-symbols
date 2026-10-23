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
  rightarrow: '→', leftarrow: '←', leftrightarrow: '↔', longrightarrow: '⟶', longleftarrow: '⟵', longleftrightarrow: '⟷',
  Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔', geq: '≥', leq: '≤', neq: '≠', approx: '≈', pm: '±', mp: '∓',
};
export const ARROWS: Readonly<Record<string, string>> = { '->': '→', '<-': '←', '<->': '↔', '-->': '⟶', '<--': '⟵', '<-->': '⟷', '=>': '⇒', '<=>': '⇔' };
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
    if (settings.scripts && /[A-Za-z]/.test(text[i]) && (i === 0 || !identifier.test(text[i - 1]))) {
      const script = /^([A-Za-z])(?:_([A-Za-z0-9]+)(?:\^([A-Za-z0-9]+))?|\^([A-Za-z0-9]+)(?:_([A-Za-z0-9]+))?)/.exec(tail);
      if (script && !identifier.test(text[i + script[0].length] ?? '')) {
        add(script[0].length, { kind: 'script', text: script[1], sub: script[2] ?? script[5], sup: script[3] ?? script[4] }); continue;
      }
    }
    // Consume the entire operator run, even when unknown or its category is disabled.
    const op = /^[<>!=~+\-]+/.exec(tail);
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
