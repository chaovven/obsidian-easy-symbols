# Easy Symbols

Easy Symbols is an Obsidian plugin that makes it easy to write symbols.

## Arrows

| What you type | What you see |
| --- | --- |
| `->` | → |
| `<-` | ← |
| `<->` | ↔ |
| `-->` | ⟶ |
| `<--` | ⟵ |
| `<-->` | ⟷ |
| `=>` | ⇒ |
| `<=>` | ⇔ |
| `^\|` or `\|^` | ↑ |
| `v\|` or `\|v` | ↓ |

## Subscripts & superscripts

- Support **one letter** before `^` (superscript) or `_` (subscript). 
- Support **one or more digits** before `^` (superscript).


| What you type | What you see |
| --- | --- |
| `x_i` | x<sub>i</sub> |
| `x^-1` | x<sup>-1</sup> |
| `x_i+1` | x<sub>i+1</sub> |
| `x_i + 1` | x<sub>i</sub> + 1 |
| `x_i^2` | x<sub>i</sub><sup>2</sup> |
| `2^32` | 2<sup>32</sup> |
| `10^n` | 10<sup>n</sup> |

Note: 
- A **space** ends the subscript or superscript mode.
- `{ }` is optional: `x_{i+1}` is the same as `x_i+1`. Use it to include spaces, e.g. `x_{i + 1}`.
- Multi-letter bases are unsupported: `AA_i` stays as plain text.
- Digits do not support subscripts: `101_2` and `2026_11_03` stay as plain text.

## Math operators

| What you type | What you see |
| --- | --- |
| `>=` | ≥ |
| `<=` | ≤ |
| `!=` | ≠ |
| `~=` | ≈ |
| `+-` | ± |
| `-+` | ∓ |

Note:
- `<=` means ≤. For ⇐, use `\Leftarrow`.

## Symbols from commands


| What you type | What you see |
| --- | --- |
| `\alpha` | α |
| `\beta` | β |
| `\gamma` | γ |
| `\delta` | δ |
| `\theta` | θ |
| `\lambda` | λ |
| `\mu` | μ |
| `\sigma` | σ |
| `\omega` | ω |
| `\Delta` | Δ |
| `\infty` | ∞ |
| `\emptyset` | ∅ |
| `\sum` | ∑ |
| `\partial` | ∂ |
| `\nabla` | ∇ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\in` | ∈ |
| `\subset` | ⊂ |
| `\land`, `\wedge` | ∧ |
| `\lor`, `\vee` | ∨ |
| `\rightarrow` | → |
| `\leftarrow` | ← |
| `\uparrow` | ↑ |
| `\downarrow` | ↓ |
| `\leftrightarrow` | ↔ |
| `\longrightarrow` | ⟶ |
| `\longleftarrow` | ⟵ |
| `\longleftrightarrow` | ⟷ |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\Leftrightarrow` | ⇔ |
| `\geq` | ≥ |
| `\leq` | ≤ |
| `\neq` | ≠ |
| `\approx` | ≈ |
| `\pm` | ± |
| `\mp` | ∓ |

## Install

1. Create `plugins/easy-symbols/` inside your vault’s configuration folder (`.obsidian` by default).
2. Copy `main.js`, `manifest.json`, and `styles.css` into it, then reload Obsidian.
3. Enable **Easy Symbols** in **Settings → Community plugins**.

Choose which conversions to enable in **Settings → Easy Symbols**. All four are on by default.

## Notes

- Code, existing math formulas, note properties, and link destinations stay unchanged.
- Nested braces are unsupported; use Obsidian’s built-in math for full equations.
- Live Preview’s table editor and some embedded views may show the original text.
- Mobile support, minimum-version compatibility, and performance on large notes still need testing.

## Build from source

Requires Node.js **22.12+ or 24+** and npm.

```sh
npm ci
npm run check
```

`npm run dev` watches for changes. `npm run build` generates `main.js`.
