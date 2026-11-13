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
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', zeta: 'ζ', eta: 'η', theta: 'θ', iota: 'ι', kappa: 'κ', lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', omicron: 'ο', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', upsilon: 'υ', phi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Xi: 'Ξ', Pi: 'Π', Sigma: 'Σ', Upsilon: 'Υ', Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω',
  // Preserve existing epsilon/phi output; their common variant spellings are aliases.
  varepsilon: 'ε', varphi: 'φ', vartheta: 'ϑ', varkappa: 'ϰ', varpi: 'ϖ', varrho: 'ϱ', varsigma: 'ς',
  infty: '∞', emptyset: '∅', varnothing: '∅', sum: '∑', prod: '∏', int: '∫', sqrt: '√', partial: '∂', nabla: '∇', forall: '∀', exists: '∃', in: '∈', ni: '∋', notin: '∉', subset: '⊂', supset: '⊃', subseteq: '⊆', supseteq: '⊇', cup: '∪', cap: '∩',
  land: '∧', wedge: '∧', lor: '∨', vee: '∨', neg: '¬',
  rightarrow: '→', to: '→', leftarrow: '←', leftrightarrow: '↔', mapsto: '↦', longrightarrow: '⟶', longleftarrow: '⟵', longleftrightarrow: '⟷',
  Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔', geq: '≥', ge: '≥', leq: '≤', le: '≤', neq: '≠', ne: '≠', ll: '≪', gg: '≫', approx: '≈', propto: '∝', equiv: '≡', sim: '∼', simeq: '≃', cong: '≅', perp: '⊥', parallel: '∥', pm: '±', mp: '∓', times: '×', cdot: '⋅', div: '÷', oplus: '⊕', otimes: '⊗',
  ldots: '…', cdots: '⋯', vdots: '⋮', ddots: '⋱',
};
export const ARROWS: Readonly<Record<string, string>> = { '->': '→', '<-': '←', '<->': '↔', '-->': '⟶', '<--': '⟵', '<-->': '⟷', '=>': '⇒', '<=>': '⇔' };
export const OPERATORS: Readonly<Record<string, string>> = { '>=': '≥', '<=': '≤', '!=': '≠', '~=': '≈', '+-': '±', '-+': '∓' };

function characterMap(source: string, target: string): Readonly<Record<string, string>> {
  const characters = Array.from(target);
  return Object.fromEntries(Array.from(source, (character, index) => [character, characters[index]]));
}

const lookup = (mapping: Readonly<Record<string, string>>, key: string) =>
  Object.prototype.hasOwnProperty.call(mapping, key) ? mapping[key] : undefined;

// Actual Unicode script/modifier characters, never visual approximations or HTML.
export const SUPERSCRIPTS = {
  ...characterMap('0123456789+-=()', '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾'),
  ...characterMap('abcdefghijklmnoprstuvwxyz', 'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ'),
  ...characterMap('ABDEGHIJKLMNOPRTUVW', 'ᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂ'),
  ...characterMap('βγδθφχ', 'ᵝᵞᵟᶿᵠᵡ'),
  '−': '⁻',
};
export const SUBSCRIPTS = {
  ...characterMap('0123456789+-=()', '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎'),
  ...characterMap('aehijklmnoprstuvx', 'ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ'),
  ...characterMap('βγρφχ', 'ᵦᵧᵨᵩᵪ'),
  '−': '₋',
};

export interface Conversion {
  from: number;
  to: number;
  source: string;
  text: string;
}

/** Complete a symbol or the nearest script ending at the caret, within the current token. */
export function conversionAt(source: string, position: number, settings: Settings): Conversion | undefined {
  const token = /\S+$/.exec(source.slice(0, position))?.[0];
  if (!token) return;
  let from = position - token.length;
  const symbol = (settings.arrows ? lookup(ARROWS, token) : undefined)
    ?? (settings.operators ? lookup(OPERATORS, token) : undefined)
    ?? (settings.latex && /^\\[A-Za-z]+$/.test(token) ? lookup(COMMANDS, token.slice(1)) : undefined);
  if (symbol) return { from, to: position, source: token, text: symbol };
  if (!settings.scripts) return;
  const marker = Math.max(token.lastIndexOf('_'), token.lastIndexOf('^'));
  if (marker < 0) return;
  const value = token.slice(marker + 1);
  if (!value) return;
  const mapping: Readonly<Record<string, string>> = token[marker] === '^' ? SUPERSCRIPTS : SUBSCRIPTS;
  const characters = Array.from(value, character => mapping[character]);
  // Convert the entire nearest script or nothing; never fall back to an earlier marker.
  if (characters.some(character => character === undefined)) return;
  from += marker;
  return { from, to: position, source: source.slice(from, position), text: characters.join('') };
}
