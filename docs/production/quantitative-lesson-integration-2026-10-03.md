# Complete quantitative lesson proposals

The six C19 to C21 scene corrections are now integrated into complete isolated
lesson drafts: 50 scenes and 53 planned narration segments. The production JSON,
recordings, artwork, scene order and lesson registrations are unchanged. No
render, speech generation, audio playback or decoding was performed.

Start with the [complete copy review](../../out/review/quantitative-lessons/review.md).
The [manifest](../../out/review/quantitative-lessons/manifest.json) records exact
original-source and exported-file hashes. Each lesson has a complete draft,
field-level before/after record, narration/motion plan and separate text-take
plan. The preparation command refuses changed original sources before writing
any package. These remain proposals requiring subject review.

## Consistency across each lesson

Integration extends the [earlier scene proposals](provenance-curriculum-and-quantitative-2026-10-03.md)
to hooks, explanations, formula summaries, misconceptions and response tasks.
It also corrects additional examples and removes unsupported generalisations.

| Lesson | Additional integration work | Initial thinking target |
| --- | --- | --- |
| Y11 M2 L3, empirical/molecular formulas | Composition gives a ratio rather than a unique identity. The worked CH₂O calculation uses 30.026 g mol⁻¹ and an approximate multiplier of 6. C₆H₁₂O₆ alone does not uniquely identify glucose | 90 s |
| Y11 M2 L9, gravimetry | State recovery, purity and weighing-form requirements. Retain 233.386 g mol⁻¹ for BaSO₄ calculation. The 250.0 mL example gives 7.987 × 10⁻³ mol L⁻¹; the 2.330 g check gives 9.983 × 10⁻³ mol | 45 s |
| Y11 M4 L2, combustion | Distinguish water heat, reaction heat and a molar constant-pressure estimate. Explain that −412 is numerically higher but smaller in exothermic magnitude than −726. Their absolute percentage difference is 43.3%, without claiming a uniquely diagnosed cause | 40 s |
| Y11 M4 L3, neutralisation | Replace the universal concentration-volume shortcut with balanced water stoichiometry. HCl/NaOH is 1:1; complete H₂SO₄/NaOH is 1:2. The main example retains 2758.8 J and −55.176 kJ mol⁻¹ before reporting −55 to the specified two significant figures | 60 s |
| Y11 M4 L4, dissolution | Use total solution mass and signed temperature change throughout. The ammonium-nitrate example uses 104.0 g, giving −1478.048 J for solution heat and +29.57574 kJ mol⁻¹ before reporting +3.0 × 10¹. Bound the lattice/hydration model and separate enthalpy from spontaneity | 75 s |
| Y12 M6 L18, back/conductometric titration | State selective complete reaction, full-sample accounting and balanced ratios. Remove unsupported regulator and label-compliance conclusions. Scope the conductometric minimum to the HCl/NaOH example and explain curve-branch fitting and measurement conditions | 50 s |

These are our recalculations using the supplied values and explicit question
conventions. They do not establish experimental uncertainty or standard-state
reference values. [OpenStax's formula treatment](https://openstax.org/books/chemistry-2e/pages/3-2-determining-empirical-and-molecular-formulas)
supports distinguishing empirical ratios from molecular formulas. Its
[quantitative-analysis treatment](https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis)
grounds the precipitation and titration relationships. Its
[calorimetry treatment](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry)
supports mass, heat capacity and signed temperature change within stated
heat-balance assumptions. Question revisions specify equal initial material
temperatures where needed and identify neglected vessel, external-transfer,
dilution and mixing contributions.

Conductometric interpretation is bounded by ionic conductivity and the actual
reaction/measurement conditions. See the [IUPAC definition](https://goldbook.iupac.org/terms/view/I03175)
and [Metrohm's conductometric titration account](https://www.metrohm.com/en/discover/blog/2024/conductometric-titration.html).
Existing illustrative conductivity bars still need scientific visual review;
their presence is not validation of an experimental endpoint.

## Narration, response and motion planning

Every changed lesson is fully unvoiced. Old audio references, alignment-derived
captions, intro audio and speech-dependent custom cues are removed. New text
cannot be paired with an old recording. Proposed copy contains no U+2014.
Voice, model, settings and pronunciation dictionary remain unset.

Quick-check narration has separate prompt and answer text in the take plan.
The thinking targets above are planning judgments based on the calculation
steps. They are not verified silence or learner timing evidence. No fabricated
response-hold metadata is attached to a lesson. Later recording and assembly
must measure the gap to the earliest visible or audible answer.

Scene budgets use estimated speech at 145 words per minute, reading holds and
the response targets. Existing longer budgets are retained. The plans describe
which operation to reveal, which prior working to keep visible and where to
hold the result. No fixed lesson-length ceiling or scene quota is imposed.
The sum of scene budgets is not a final export duration with intro/transitions.

Preserved component kinds and artwork references maintain the existing visual
direction. Custom cues must be rebuilt from final alignment. Removed cue fields
can leave component defaults incomplete or unaligned, so a valid source draft
is not render-ready. Inspect hard-coded labels and scoped model assumptions
before preview, following the [visual handbook](../visual-design-handbook.md)
and [animation plan](../animation-planning.md).

## Selected artwork dependencies

The [selected inventory](../../out/review/selected-artwork/inventory.json) and
[review queue](../../out/review/selected-artwork/queue.md) cover four top-level
scene image references. All four registered files are missing from the expected
public paths. A repository filename search found no matching copies, including
ignored output directories. No replacement art was created.

| Asset key | Expected public path |
| --- | --- |
| l9GravimetricFlow | assets/hscscience/generated/lesson-9-gravimetric/gravimetric-flow.png |
| m4l2HookFuel | assets/hscscience/generated/chem-y11-m4/l2/hook-fuel.png |
| m4l3HookCup | assets/hscscience/generated/chem-y11-m4/l3/hook-cup.png |
| m4l4HookPacks | assets/hscscience/generated/chem-y11-m4/l4/hook-packs.png |

Locate existing approved assets and their source/licence evidence before
deciding whether new artwork is necessary. The inventory does not inspect
title heroes, component-internal assets, fonts, permissions elsewhere or media
restore evidence. C18 remains open; no rights or visual approval is inferred.

## Reproduce and verify

```powershell
npm run prepare:quantitative-lessons
npm run validate:quantitative-package
npm run audit:selected-artwork
npm run test:source
npm run check
```

Run preparation before the dependent package/artwork checks. These commands
read text, calculate, inventory selected image paths and validate source code.
The package validator verifies original-source/export hashes, required export
roles and absence of media wiring before invoking the lesson schema validator.
It does not open recordings or invoke a rendering or speech provider.

Three isolated CLI refusal checks also passed: an altered artifact, media wiring
with an updated file hash, and a missing export role all fail before any recording
could be opened. The existing production source directory has no diff.

All 47 source tests pass. Independent calculations, incompatible equalities,
whole-lesson shortcut removal, scene/artwork/geometry preservation, stale-source
refusal and media/cue invalidation are covered. TypeScript passes. All six final
drafts pass schema validation with zero errors and zero narration-budget
warnings. Estimated budgets explain the improvement over the earlier 11
warnings; actual pacing, legibility, continuous motion and listening remain
unreviewed. No correction is marked closed or lesson approved.

The [science-review checklist](quantitative-science-review-checklist.md) now
records the lesson-specific decisions and concrete component-source findings.
These include the default neutralisation shortcut, generic conductometric
endpoint/accessibility labels and required cue fields. The next source work is
to repair those shared defaults with affected-use checks. Final cue timing,
audio, visual/device review and restoration remain later production work.
