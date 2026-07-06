# Image-prompt brief — Chem Y11 M4 polish pass

This file accompanies the Module 4 **quality-polish** pass (chemistry audit +
alignment), not a rebuild. Module 4 was already fully voiced and its 104
concept/worked-example/summary images are already specified with didactic
prompts in **`image-prompts-chem-y11-m4.md`** (the master M4 brief). The
asset registry and lesson JSONs are wired to those filenames.

## Outcome of the polish pass

- **No NEW image assets were introduced.** The polish changed numeric values,
  signs, and voiceover wording only — every scene reuses its existing image
  asset name, so all 104 prompts in the master M4 brief remain valid.
- **Coded diagrams are already optimal.** The two scenes that can host a coded
  Remotion diagram and benefit most from one already do:
  - L1 `definition` → `energyProfile` (exothermic, Ea 95, ΔH −40)
  - L5 `concept` → `energyProfile` (exothermic, Ea 100, ΔH −50, showCatalyst)
  The remaining energy-profile scenes (L1/L5 worked-example & quick-check,
  CP1 walkthrough-3) are `workedExample` / `quickCheck` scene types, which do
  **not** support a `diagram` field in `src/lesson/types.ts`. They correctly
  use didactic images instead. No shared code was changed, so no new diagram
  type was added.

## Master brief prompt corrected in this pass

One existing prompt baked in a now-stale number after the bond-energy worked
example was aligned to the site's data-table values (Cl–Cl 242→243,
H–Cl 431→432, ΔH −184→−185 kJ mol⁻¹). Corrected in `image-prompts-chem-y11-m4.md`:

### `m4l6WorkedHCl`
Calculation panel reference updated from `"678 − 862"` to `"679 − 864"`.
(The prompt renders these as abstract shape blocks with "no readable text",
so the visual is unchanged; the correction only keeps the source-of-truth
prompt consistent with the corrected lesson arithmetic.)

> No regeneration of any M4 image is required as a result of the polish pass.
> The didactic worked-example illustrations show shape-block calculation
> panels, not legible numerals, so the small data-table value changes
> (L6, L7, CP2) do not alter any rendered image.

## Desired coded-diagram types (for a future shared-code change, NOT done here)

If `WorkedExampleScene` / `QuickCheckScene` are ever extended to accept an
optional `diagram` field, these scenes would be ideal candidates to swap their
image for a coded `energyProfile` (with `showCatalyst` where noted):

- L1 `worked-example` (propane), L1 `quick-check` (Ea reverse = 135) →
  `energyProfile` exothermic, Ea 95, ΔH −40.
- L5 `worked-example` (catalysed, reverse Ea 110) and L5 `quick-check`
  (spot-the-error product level) → `energyProfile` Ea 100/60, ΔH −50,
  `showCatalyst: true`.
- CP1 `walkthrough-3` (catalysed profile, Ea reverse 110 → 75) →
  `energyProfile` Ea 80/45, ΔH −30, `showCatalyst: true`.

These are noted for the maintainer; no shared file was edited in this pass.
