# Chemistry Year 11 Module 4 — Video Production Plan

**Module:** Drivers of Reactions
**Site source of truth:** `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/` (13 lessons + 3 checkpoints)
**Status:** Draft — review before scripts

> **Why this doc exists.** Video lessons must mirror the site lesson list 1:1 (see memory: content-alignment-rule). Module 4 has **no audit doc** (M3 had `CHEMISTRY_MODULE3_AUDIT.md`), so real-world anchors / worked examples / misconceptions are extracted from each `lessonNN.html` at script-writing time. Anchors already confirmed are noted below; the rest are marked **[extract at script time]**.

---

## Module-level pedagogical arc

The site structures Module 4 around three inquiry questions (confirmed from the checkpoint titles):

| IQ | Lessons | Theme | Checkpoint |
|---|---|---|---|
| **IQ1** — Energy changes in chemical reactions | L1–L5 | Enthalpy, calorimetry, activation energy | cp1 |
| **IQ2** — Enthalpy & Hess's Law | L6–L10 | Bond energy, formation, Hess cycles | cp2 |
| **IQ3** — Entropy & Gibbs Free Energy | L11–L13 | Disorder, ΔS, spontaneity | cp3 |

This is a **calculation-heavy module** — unlike M3 (reaction recognition), M4 is dominated by `q = mcΔT`, Hess's law arithmetic, bond-energy sums, ΔS°, and ΔG = ΔH − TΔS. Implication: worked examples and `unitCancel` carry more weight here than in M3, and most lessons will lean on the `workedExample` + `formula` scene types.

---

## Lesson-by-lesson plan

### IQ1 — Energy changes in chemical reactions

#### L1. Enthalpy & Energy Profile Diagrams
- **Anchor:** Hand warmers vs cold packs (exothermic vs endothermic)
- **Core idea:** ΔH sign convention; reading energy profile diagrams (reactants, products, transition state, Ea, ΔH)
- **Likely worked example:** Given Ea forward = 95 kJ/mol and ΔH = −40 kJ/mol, find Ea reverse (= 135) — straight from the site question bank
- **Misconception target:** "Endothermic = surroundings warm up" → no, endothermic absorbs from surroundings, they cool
- **Diagram:** `energyProfile` (already built in M3)
- **Decision rule:** "ΔH negative → exothermic → products lower. ΔH positive → endothermic → products higher."

#### L2. Calorimetry — Combustion
- **Anchor:** Fuel energy density
- **Core idea:** `q = mcΔT`; molar heat of combustion; using a calorimeter
- **Likely worked example:** Burning a known mass of fuel heats water by ΔT — calculate molar heat of combustion
- **Misconception target:** "q is the enthalpy of the reaction" → q is the heat absorbed by water; ΔH per mole needs dividing by moles
- **Diagram:** `calorimeter` (**NEW — build needed**)
- **Decision rule:** "Find q with mcΔT, then divide by moles for molar ΔH."

#### L3. Calorimetry — Neutralisation
- **Anchor:** Why the nurse's cup gets warm
- **Core idea:** Molar heat of neutralisation; same `q = mcΔT` applied to acid+base
- **Likely worked example:** Mix known volumes/concentrations of acid + base, measure ΔT, find ΔH neutralisation
- **Misconception target:** "Use the mass of acid only" → use total solution mass
- **Diagram:** `calorimeter` (reuse)

#### L4. Calorimetry — Dissolution of Ionic Substances
- **Anchor:** [extract at script time — likely NH₄NO₃ cold pack / CaCl₂ hot pack]
- **Core idea:** Heat of solution can be + or −; lattice vs hydration energy balance
- **Likely worked example:** Dissolve a known mass of salt, measure ΔT, find molar heat of solution
- **Misconception target:** [extract] — likely "dissolving is always endothermic"
- **Diagram:** `calorimeter` (reuse) + possibly `beforeAfter` for lattice vs hydration

#### L5. Activation Energy, Catalysts & Energy Diagrams
- **Anchor:** Catalytic converters
- **Core idea:** Ea, catalysts lower Ea via alternative pathway, effect on forward + reverse equally
- **Likely worked example:** Read a two-curve energy profile (catalysed vs uncatalysed), identify Ea reduction
- **Misconception target:** "Catalysts change ΔH" → no, they only lower Ea; ΔH unchanged
- **Diagram:** `energyProfile` with `showCatalyst` flag (already built)
- **Note:** Overlaps conceptually with M3 L12; keep the calorimetry/enthalpy framing distinct.

### IQ2 — Enthalpy & Hess's Law

#### L6. Bond Energy & Enthalpy Change
- **Anchor:** Nitrogen cycle & Haber process
- **Core idea:** ΔH = Σ(bonds broken) − Σ(bonds formed); breaking absorbs, forming releases
- **Likely worked example:** Calculate ΔH for a reaction (e.g. H₂ + Cl₂ → 2HCl) from bond energies
- **Misconception target:** "Bond breaking releases energy" → no, breaking absorbs, forming releases
- **Diagram:** `table` (bond energies) + possibly a bond-breaking/forming visual
- **Decision rule:** "Bonds broken minus bonds formed. Sign tells you exo or endo."

#### L7. Enthalpy of Formation
- **Anchor:** Rocket propellant & the Apollo programme
- **Core idea:** ΔH°f definition; elements in standard state = 0; ΔH = Σ ΔH°f(products) − Σ ΔH°f(reactants)
- **Likely worked example:** Calculate reaction ΔH from a table of formation enthalpies
- **Misconception target:** "ΔH°f of O₂ is some nonzero value" → elements in standard state = 0
- **Diagram:** `table` (formation enthalpies)

#### L8. Hess's Law
- **Anchor:** [extract at script time]
- **Core idea:** Enthalpy is a state function; total ΔH is path-independent; add/reverse/scale equations
- **Likely worked example:** Combine 2-3 given equations to find a target ΔH (reverse one, scale another, sum)
- **Misconception target:** "Reversing an equation keeps ΔH sign" → reversing flips the sign
- **Diagram:** `hessCycle` (**NEW — build needed:** the triangle/cycle showing alternate enthalpy paths)
- **Decision rule:** "Reverse flips sign. Double the equation doubles ΔH. Then sum."

#### L9. Hess's Law Applied — Photosynthesis & Respiration
- **Anchor:** Photosynthesis & respiration (they're the reverse of each other)
- **Core idea:** Apply Hess to the glucose ⇌ CO₂ + H₂O cycle; same magnitude, opposite sign
- **Likely worked example:** Given respiration ΔH, find photosynthesis ΔH (reverse)
- **Misconception target:** [extract]
- **Diagram:** `hessCycle` / `flow`

#### L10. Hess's Law Applied — Heat of Combustion & Consolidation
- **Anchor:** [extract at script time]
- **Core idea:** Consolidation lesson — combine formation enthalpies + Hess to find heats of combustion
- **Likely worked example:** Multi-step Hess problem (consolidation of L6-L9 skills)
- **Diagram:** `hessCycle` + `table`

### IQ3 — Entropy & Gibbs Free Energy

#### L11. Entropy — Definition, Modelling & Predicting ΔS
- **Anchor:** [extract — likely melting ice / gas expansion / messy room analogy]
- **Core idea:** Entropy = measure of disorder; predict sign of ΔS from state changes (s→l→g increases)
- **Likely worked example:** Predict ΔS sign for a list of reactions (more gas moles → +ΔS)
- **Misconception target:** "Entropy always increases in a reaction" → depends on Δ(gas moles)
- **Diagram:** `entropy` (**NEW — build needed:** ordered→disordered particle visual) or reuse `beforeAfter`
- **Decision rule:** "More gas molecules on the product side → ΔS positive."

#### L12. Calculating ΔS° & Standard Entropy
- **Anchor:** [extract at script time]
- **Core idea:** ΔS° = Σ S°(products) − Σ S°(reactants); units J K⁻¹ mol⁻¹
- **Likely worked example:** Calculate ΔS° from a table of standard entropies
- **Misconception target:** "S° of an element is 0" → unlike ΔH°f, standard entropy of an element is NOT zero
- **Diagram:** `table` (standard entropies)

#### L13. Gibbs Free Energy & Spontaneity
- **Anchor:** [extract at script time]
- **Core idea:** ΔG = ΔH − TΔS; sign of ΔG predicts spontaneity; temperature dependence
- **Likely worked example:** Calculate ΔG at a given T; find the temperature where a reaction becomes spontaneous (ΔG = 0)
- **Misconception target:** "Exothermic always means spontaneous" → no, ΔG (not ΔH) decides; entropy + temperature matter
- **Diagram:** `table` / a ΔG-vs-T line could use a custom visual
- **Decision rule:** "ΔG < 0 → spontaneous. Check ΔH, ΔS, and T together — not just ΔH."

---

## Cross-lesson scaffolding

| Thread | First introduced | Reused in | Note |
|---|---|---|---|
| Energy profile diagrams | L1 | L5 | L5 adds the catalysed second curve |
| `q = mcΔT` calorimetry | L2 | L3, L4 | Same equation, three contexts (combustion / neutralisation / dissolution) |
| ΔH sign convention | L1 | L6, L7, L8, L13 | Carried through the whole module |
| Hess's law | L8 | L9, L10 | L9-L10 are applications of L8's method |
| Formation enthalpies | L7 | L10 | L10 consolidates L6-L9 |
| ΔH → ΔG link | L1 (ΔH) | L13 (ΔG = ΔH − TΔS) | The module's climax ties enthalpy + entropy together |

**Forward references to plant:**
- L1: "This ΔH sign convention carries through the entire module — right up to Gibbs free energy in L13."
- L2: "This `q = mcΔT` calculation repeats in L3 and L4 — master it once, use it three times."
- L8: "Hess's law is the engine for L9 and L10."
- L11: "Entropy plus the enthalpy from IQ1 and IQ2 combine into Gibbs free energy — the final answer to 'will it react'."

---

## New diagram types needed

| Diagram | First needed | Status |
|---|---|---|
| `energyProfile` | L1 | ✅ Already built (M3) |
| `calorimeter` | L2 | ❌ **Build needed** — beaker/cup with thermometer, stirrer, fuel/solution |
| `hessCycle` | L8 | ❌ **Build needed** — triangle of enthalpy paths (direct vs indirect route) |
| `entropy` | L11 | ❌ **Build needed** — ordered lattice → disordered gas particle spread (or reuse `beforeAfter`) |
| `table` | L6, L7, L12 | ✅ Already built |

Recommend building each as its lesson comes up (lazy), same as M3.

---

## Production order

**Pilot: L1 (Enthalpy & Energy Profile Diagrams)** — reuses the existing `energyProfile` diagram, no new components, foundational concept. Same rationale as M3 L1.

- **Phase 1 (validate):** L1, L2, L3 — L1 reuses energyProfile; L2/L3 need the new `calorimeter` diagram (build once, reuse).
- **Phase 2 (Hess arc):** L6, L7, L8 — build `hessCycle` for L8.
- **Phase 3 (entropy arc):** L11, L12, L13 — build `entropy` visual for L11.
- **Phase 4 (fill IQ1/IQ2):** L4, L5, L9, L10.
- **Phase 5 (checkpoints):** cp1, cp2, cp3 — synthesis "boss fight" format (same as M3).

---

## Pre-flight before each script

- [ ] Read the corresponding `lessonNN.html` for the exact anchor + worked example + misconception
- [ ] Confirm the syllabus dot point wording
- [ ] Calculation lessons: every worked example needs `coachNote` + `unitCancel` + correct sig figs
- [ ] Run `npm run score:lesson` ≥85 before render
- [ ] Bullets timed to narration (`at:` seconds)

---

## Open questions before scripts

1. **Module 4 is more calc-heavy than M3.** Are you happy with the heavier `workedExample`/`formula` lean, or do you want me to keep forcing the full hook→concept→definition→worked→misconception→quickCheck→summary arc even on the pure-calculation lessons (L2, L3, L4, L12)?
2. **L5 overlaps M3 L12** (activation energy + catalysts). Want me to cross-reference M3 explicitly ("you saw this in Module 3…") or treat it standalone since they're different modules?
3. **Same voice (Ben, V5 settings)?** Assuming yes unless you say otherwise.
4. **Build the 3 new diagram types** (`calorimeter`, `hessCycle`, `entropy`) as I hit each lesson, or batch-build them upfront before scripting?
