# Easy Symbols

Easy Symbols is an Obsidian plugin that makes it easy to write symbols.

## How it works

Type a supported shortcut and press **Space** to convert it into its matching **Unicode symbol or text**, saved directly in your note. Press **Undo** or **Backspace** immediately after conversion to restore the original text.

For example, type `x^2` and press **Space** to get `x²`. Press **Undo** or **Backspace** immediately afterward to change it back to `x^2`.

## Supported Shortcuts

### Arrows

| What you type | What you get |
| --- | --- |
| `->` | → |
| `<-` | ← |
| `<->` | ↔ |
| `-->` | ⟶ |
| `<--` | ⟵ |
| `<-->` | ⟷ |
| `=>` | ⇒ |
| `<=>` | ⇔ |

### Subscripts & superscripts

Only the text after the last `_` or `^` converts. For example, `x_i^2` becomes `x_i²`.

| What you type | What you get |
| --- | --- |
| `^i` | ⁱ |
| `_i` | ᵢ |
| `x^i` | xⁱ |
| `x_i` | xᵢ |
| `x_i+1` | xᵢ₊₁ |
| `2^32` | 2³² |

### Math operators

| What you type | What you get |
| --- | --- |
| `>=` | ≥ |
| `<=` | ≤ |
| `!=` | ≠ |
| `~=` | ≈ |
| `+-` | ± |
| `-+` | ∓ |

For ⇐, use `\Leftarrow`.

### Symbols from commands

| What you type | What you get |
| --- | --- |
| `\alpha` | α |
| `\beta` | β |
| `\gamma` | γ |
| `\delta` | δ |
| `\epsilon`, `\varepsilon` | ε |
| `\zeta` | ζ |
| `\eta` | η |
| `\theta` | θ |
| `\iota` | ι |
| `\kappa` | κ |
| `\lambda` | λ |
| `\mu` | μ |
| `\nu` | ν |
| `\xi` | ξ |
| `\omicron` | ο |
| `\pi` | π |
| `\rho` | ρ |
| `\sigma` | σ |
| `\tau` | τ |
| `\upsilon` | υ |
| `\phi`, `\varphi` | φ |
| `\chi` | χ |
| `\psi` | ψ |
| `\omega` | ω |
| `\Gamma` | Γ |
| `\Delta` | Δ |
| `\Theta` | Θ |
| `\Lambda` | Λ |
| `\Xi` | Ξ |
| `\Pi` | Π |
| `\Sigma` | Σ |
| `\Upsilon` | Υ |
| `\Phi` | Φ |
| `\Psi` | Ψ |
| `\Omega` | Ω |
| `\vartheta` | ϑ |
| `\varkappa` | ϰ |
| `\varpi` | ϖ |
| `\varrho` | ϱ |
| `\varsigma` | ς |
| `\infty` | ∞ |
| `\emptyset`, `\varnothing` | ∅ |
| `\sum` | ∑ |
| `\prod` | ∏ |
| `\int` | ∫ |
| `\sqrt` | √ |
| `\partial` | ∂ |
| `\nabla` | ∇ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\in` | ∈ |
| `\ni` | ∋ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\subseteq` | ⊆ |
| `\supseteq` | ⊇ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\land`, `\wedge` | ∧ |
| `\lor`, `\vee` | ∨ |
| `\neg` | ¬ |
| `\rightarrow`, `\to` | → |
| `\leftarrow` | ← |
| `\leftrightarrow` | ↔ |
| `\mapsto` | ↦ |
| `\longrightarrow` | ⟶ |
| `\longleftarrow` | ⟵ |
| `\longleftrightarrow` | ⟷ |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\Leftrightarrow` | ⇔ |
| `\geq`, `\ge` | ≥ |
| `\leq`, `\le` | ≤ |
| `\neq`, `\ne` | ≠ |
| `\ll` | ≪ |
| `\gg` | ≫ |
| `\approx` | ≈ |
| `\propto` | ∝ |
| `\equiv` | ≡ |
| `\sim` | ∼ |
| `\simeq` | ≃ |
| `\cong` | ≅ |
| `\perp` | ⊥ |
| `\parallel` | ∥ |
| `\pm` | ± |
| `\mp` | ∓ |
| `\times` | × |
| `\cdot` | ⋅ |
| `\div` | ÷ |
| `\oplus` | ⊕ |
| `\otimes` | ⊗ |
| `\ldots` | … |
| `\cdots` | ⋯ |
| `\vdots` | ⋮ |
| `\ddots` | ⋱ |

## Notes

- This plugin only converts symbols in **regular note text**, i.e., it doesn't convert symbols in code, math formulas, note properties, HTML, comments, embeds, or link URLs.
- This plugin only converts characters with a **matching Unicode form**. For example, `x_i` becomes xᵢ, but it doesn't convert `x_q` or `x_AB` because Unicode has no subscript `q`, `A`, or `B`.
- Use `x_i` instead of `x_{i}`. Braces `{}` are not supported.
