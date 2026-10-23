# Easy Symbols

**Easy Symbols** is an Obsidian plugin that makes it easy to write arrows, symbols, subscripts, and superscripts in your notes.

You're taking notes and want to add an arrow, a subscript, or a Greek letter. A whole math expression feels like extra work for one small symbol.

With **Easy Symbols**, just type `->`, `x_i`, or `\alpha` to see →, x<sub>i</sub>, or α. **No `$` signs needed. Your Markdown stays unchanged.**

Works offline in **Live Preview** and **Reading Mode**. Move your cursor away to see the symbols. Move it back to edit. Source Mode shows your original text.

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

## Subscripts & superscripts

Start with a single letter. Subscripts and superscripts can contain letters and numbers, in either order.

| What you type | What you see |
| --- | --- |
| `x_i` | x<sub>i</sub> |
| `A_123` | A<sub>123</sub> |
| `x_ij` | x<sub>ij</sub> |
| `x^2` | x<sup>2</sup> |
| `x^23` | x<sup>23</sup> |
| `x_i^2`, `x^2_i` | x<sub>i</sub><sup>2</sup> |

## Math operators

| What you type | What you see |
| --- | --- |
| `>=` | ≥ |
| `<=` | ≤ |
| `!=` | ≠ |
| `~=` | ≈ |
| `+-` | ± |
| `-+` | ∓ |

`<=` means ≤. For ⇐, use `\Leftarrow`.

## Symbols from commands

Backslash commands are case-sensitive. This setting includes arrow and operator commands.

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
- Braces and nested expressions are unsupported; use Obsidian’s built-in math for full equations.
- Live Preview’s table editor and some embedded views may show the original text.
- Mobile support, minimum-version compatibility, and performance on large notes still need testing.

## Build from source

Requires Node.js **22.12+ or 24+** and npm.

```sh
npm ci
npm run check
```

`npm run dev` watches for changes. `npm run build` generates `main.js`.
