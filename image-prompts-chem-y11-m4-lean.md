# Image Prompts — Chemistry Y11 Module 4 (LEAN pass)

This file supersedes the per-scene M4 image brief for production. After the lean
visual rework, **every M4 lesson now uses exactly ONE generated image — its hook**
— plus one coded Remotion diagram on the concept scene. All ~88 other per-scene
images (concept/formula/worked/misconception/quick-check/summary) were removed
from the lesson JSON and replaced by clean text slides or the coded diagram.

**So the only M4 images that need generating are the 16 hooks listed below.**
Ignore `image-prompts-chem-y11-m4.md` and `-polish.md` for generation — they
describe the old 104-image plan and are now historical.

---

## Universal Style Prefix

**Copy at the start of EVERY prompt below** (each prompt body already assumes it):

> Clean flat vector illustration, minimalist educational science style, smooth
> lines, no photorealism, no 3D renders, no shadows, subtle teal (#0d6b52) and
> amber (#f0a830) accent colors, simple geometric shapes, consistent 2px line
> weight, professional textbook diagram aesthetic, **no text and no readable
> labels anywhere in the image**, high resolution.
> **OUTPUT MUST BE A PNG WITH AN ALPHA CHANNEL AND A FULLY TRANSPARENT
> BACKGROUND — NOT WHITE, NOT CREAM, NOT ANY SOLID COLOR.**

**Verification before saving:**
- Open in a viewer that shows a transparent checkerboard. A solid rectangle
  behind the artwork means the PNG is wrong — regenerate.
- Programmatic check: byte 25 of the PNG must be **6** (RGBA) or **4**
  (grey + alpha). Color type 2 (RGB, no alpha) = reject.

## Workflow

1. Generate each PNG at **1920×1080** (16:9).
2. Save to the **exact path** listed under each prompt
   (`public/assets/hscscience/generated/chem-y11-m4/<lessonId>/<file>.png`).
3. Register in `src/assets/index.ts` so the asset name in the JSON maps to the
   file, e.g.
   `m4l1HookPacks: staticFile('assets/hscscience/generated/chem-y11-m4/l1/hook-packs.png'),`
4. Run `npm run validate:lessons` to confirm.

---

## The 16 hook images

### `m4l1HookPacks` — Lesson 1 (Enthalpy & energy profiles)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l1/hook-packs.png`
- **Prompt:** Two identical flexible plastic gel-packs side-by-side, the kind you
  snap to activate. Left pack: warm amber tones with small heat/warmth waves
  rising off its surface (the exothermic hand-warmer). Right pack: cool blue
  tones with small frost crystals forming on its surface (the endothermic cold
  pack). Same pack silhouette for both — only colour temperature and surface
  effect differ — so the eye reads "same idea, opposite result".

### `m4l2HookFuel` — Lesson 2 (Calorimetry: combustion)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l2/hook-fuel.png`
- **Prompt:** Three fuels lined up to suggest different energy content: a petrol
  jerry-can, an ethanol bottle, and a small hydrogen cylinder. A flame icon sits
  above each, the flames sized differently to hint at differing energy density.
  Even spacing, equal visual weight, clean flat vector.

### `m4l3HookCup` — Lesson 3 (Calorimetry: neutralisation)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l3/hook-cup.png`
- **Prompt:** A clear polystyrene coffee-cup calorimeter with two liquids being
  poured in from above — one stream from the upper-left, one from the upper-right
  (acid meeting base). The cup contents glow faintly amber to suggest warming. A
  thermometer stands beside the cup with its level visibly rising.

### `m4l4HookPacks` — Lesson 4 (Calorimetry: dissolution)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l4/hook-packs.png`
- **Prompt:** Two instant chemical packs side-by-side, distinguished by the salt
  dissolving inside (shown as small dissolving-crystal motifs, no formulae). Left
  pack: blue/cold tones with frost crystals — an endothermic dissolving salt.
  Right pack: amber/warm tones with warmth waves — an exothermic dissolving salt.
  Identical pack shapes, opposite thermal cues.

### `m4l5HookConverter` — Lesson 5 (Activation energy & catalysts)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l5/hook-converter.png`
- **Prompt:** A cutaway of a car catalytic converter: a cylindrical chamber with
  a ceramic honeycomb visible inside. Dirty exhaust molecules (red spheres) flow
  in from the left; clean harmless products (teal spheres) flow out the right. A
  subtle metallic speckle on the honeycomb hints at the precious-metal catalyst.

### `m4l6HookHaber` — Lesson 6 (Bond energy)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l6/hook-haber.png`
- **Prompt:** A large, prominent nitrogen molecule centre-frame — two N spheres
  joined by a strong triple bond drawn as three bold parallel lines (the bond
  that's hard to break). A faint industrial silhouette (chimney + pipes) sits in
  the background and a small fertiliser-bag motif floats above, hinting at the
  Haber process payoff.

### `m4l7HookApollo` — Lesson 7 (Enthalpy of formation)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l7/hook-apollo.png`
- **Prompt:** A simplified Apollo lunar-module silhouette in profile with a small
  fuel-tank cutaway showing rocket-propellant molecules inside, and a thrust
  flame leaving the engine nozzle. A reference data-card floats beside it showing
  rows of standard-formation-enthalpy values rendered as abstract data bars (no
  readable digits) — the "look-up table" idea.

### `m4l8HookIndirectPath` — Lesson 8 (Hess's law)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l8/hook-indirect-path.png`
- **Prompt:** A triangle route map. Reactants at the left vertex, products at the
  right vertex, joined by a direct arrow along the top edge. A two-leg detour
  drops down through an "intermediate" vertex at the bottom. Both routes are
  styled identically and tagged to read "same destination, same total change".

### `m4l9HookCycle` — Lesson 9 (Hess: photosynthesis & respiration)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l9/hook-cycle.png`
- **Prompt:** A closed circular loop. Top-left: a sun feeding energy into a green
  plant (photosynthesis). The plant's stored sugar feeds a cell at the bottom
  (respiration), which releases CO₂ and water back up to the plant. Arrows form a
  complete clockwise cycle — the forward and reverse of one reaction.

### `m4l10HookToolbox` — Lesson 10 (Hess combustion consolidation)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l10/hook-toolbox.png`
- **Prompt:** An open toolbox holding three clearly different tools, each standing
  for one enthalpy method: a marked ruler (bond energies), a rolled reference
  scroll (formation enthalpies), and a set of interlocking arrows (Hess-cycle
  manipulation). Three distinct tools, one shared box — "pick the right tool".

### `m4l11HookGlass` — Lesson 11 (Entropy)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l11/hook-glass.png`
- **Prompt:** A before-and-after pair. Left: one intact drinking glass standing
  upright (a single ordered state). Right: the same glass shattered into many
  scattered shards (many disordered states), with a small impact burst. A bold
  forward arrow points left-to-right; a faint reverse arrow is crossed out with a
  red ✗ — order doesn't come back on its own.

### `m4l12HookFromSign` — Lesson 12 (Calculating entropy)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l12/hook-from-sign.png`
- **Prompt:** A "qualitative → quantitative" progression. Left: a single large
  plus/minus sign tag (we used to only guess the sign). A rightward arrow passes
  through a small look-up-table card. Right: a precise numeric value card shown
  as crisp data bars (no readable digits) — moving from "which way?" to "exactly
  how much?".

### `m4l13HookGoNoGo` — Lesson 13 (Gibbs free energy)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/l13/hook-go-no-go.png`
- **Prompt:** A balance/decision gauge. On the left arm, an enthalpy tag with a
  downward arrow (ΔH). On the right arm, an entropy tag with an upward arrow
  (ΔS). A temperature dial sits beneath the pivot. The pivot feeds a central
  pointer that swings either down to a green "GO" zone (spontaneous) or up to a
  red "NO-GO" zone (non-spontaneous).

### `m4cp1ColdOpenScenarios` — Checkpoint 1 (Energy changes)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/cp1/cold-open-scenarios.png`
- **Prompt:** Three mini-scenario tiles in a row, each in a rounded
  teal-bordered square: (A) an enthalpy-change tag with a directional arrow,
  (B) a spirit-burner heating a beaker with a thermometer (calorimetry),
  (C) an energy-profile curve with its peak and net-change drop. A quick visual
  "everything you've learned, choose your move" board.

### `m4cp2ColdOpenScenarios` — Checkpoint 2 (Enthalpy & Hess)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/cp2/cold-open-scenarios.png`
- **Prompt:** Three method tiles in a row, each in a teal-bordered square:
  (A) bond-energy values shown as abstract data tags, (B) a formation-enthalpy
  reference-table card, (C) two stacked thermochemical equations being added
  (Hess). Three routes to the same ΔH — "which method fits?".

### `m4cp3ColdOpenScenarios` — Checkpoint 3 (Entropy & Gibbs)
- **Save:** `public/assets/hscscience/generated/chem-y11-m4/cp3/cold-open-scenarios.png`
- **Prompt:** Three tiles in a row, each in a teal-bordered square: (A) a
  gas-molecule count comparison (fewer vs more particles, entropy direction),
  (B) a standard-entropy reference-table card, (C) a Gibbs decision gauge with a
  temperature dial feeding a GO / NO-GO pointer.

---

## Coded diagrams now carrying the teaching visuals (no image needed)

For reference — these are rendered in-engine on each lesson's concept scene
(L12/L13 on the misconception scene), so no image generation is required:

| Lesson | Diagram scene | Coded diagram |
|---|---|---|
| L1 | concept | `energyProfile` (exothermic, Ea 50, ΔH −100) |
| L2 / L3 / L4 | concept | `calorimeter` |
| L5 | concept | `energyProfile` (exothermic, Ea 75, ΔH −100, showCatalyst) |
| L6 | concept | `bondEnergy` |
| L7 | concept | `energyProfile` (exothermic, Ea 40, ΔH −75) |
| L8 / L9 / L10 | concept | `hessCycle` |
| L11 | concept | `entropyDisorder` |
| L12 | misconception | `entropyDisorder` |
| L13 | misconception | `gibbsSpontaneity` |
| CP1 | decision-tree (concept) | `calorimeter` |
| CP2 | decision-tree (concept) | `hessCycle` |
| CP3 | decision-tree (concept) | `gibbsSpontaneity` |

> **Note on L12 / L13:** these two lessons have no `concept` scene, so the
> diagram sits on the `misconception` scene. Validation passes, but the current
> `MisconceptionSlide` only renders `beforeAfter` diagrams — it will **not**
> render `entropyDisorder` / `gibbsSpontaneity` until that slide is extended (or
> the diagram is moved to a `concept` scene). Flagged for the maintainer.
