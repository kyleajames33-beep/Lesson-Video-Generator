# Chemistry C4B catalyst candidate

One question: why can a catalyst accelerate the approach without increasing the fixed-temperature equilibrium amount?

C4B follows C4A under canonical `chem-m5-c04`. Entry knowledge is C2 reversible rates and C3 temperature/K. Activation energy is refreshed as a pathway energy hurdle. C5 equilibrium expressions is the next core handoff. Release depends on actual prerequisite availability. No industrial conditions, Q/K calculation or detailed catalytic cycle is added.

The eight selected scenes separate the profile, K, concentration-time graph and already-equilibrium reasoning. Useful accepted preparation language is retained with new axis and causal support. These exact spoken paragraphs await independent review. Historical L6 audio does not belong to them.

The response retains matching reacting amounts, initial composition, fixed volume/temperature, the product-forming initial state, the only-one-catalyst condition and both before/after questions. The estimated 12-second attempt follows the estimated prompt plus one settling second. A 24-frame tail protects it from the actual 24-frame overlap. Metadata does not assemble recorded silence; fresh audio must determine final timing.

Inspected `CatalystBothDiagram.tsx`, `EnergyProfileDiagram.tsx`, `CatalystPathDiagram.tsx`, `lcKit.tsx` and diorama primitives. The docs-owned consumer reuses `Axes`, `Gap`, `polyPath` and `STONE`. It preserves useful profile/graph vocabulary while removing inherited rate meters, universal multipliers, same-drop brackets, numerical barriers and dense insets from visible and accessible output. Both paths have identical endpoint energies. The graph shares a common asymptote and labels no finite point as exact equilibrium. Arbitrary schematic time constants are not measurements or a universal speed factor.

Quiet book notes retain full-size conditions. Native 480 samples caught a profile label crossing the curve; the corrected label is in a separate stable legend. Final profile evidence is named in `still-record.json`. Other samples are earlier diagnostics with unchanged prompt, graph and notes logic, rather than a whole-source review pass.

Build from repository root:

```powershell
node docs/production/overnight-module5-2026-10-10/chemistry-catalysts/build.mjs
node docs/production/overnight-module5-2026-10-10/chemistry-catalysts/build.mjs --stills --targeted
node scripts/check-production-brief.mjs docs/production/overnight-module5-2026-10-10/chemistry-catalysts/production-brief.json --stage=draft
```

Player: http://127.0.0.1:8778/overnight-chemistry-catalysts-2026-10-10/

All source is isolated here. The normal shared LessonVideo consumer does not activate these docs-owned visuals automatically. Root owns deliberate integration. Full Player assets and native evidence are under `out/prototypes/overnight-chemistry-catalysts-2026-10-10/`. `author-check.json` records lineage, model limits and timing.

Draft brief checks pass. Independent script/visual review, continuous playback, measured voiced cue/hold/caption review, human listening and all production/release gates remain pending. No shared source mutation, paid narration, video export or publication occurred.

[OpenStax Chemistry 2e](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle), accessed 10 October 2026, supports the alternative-pathway and unchanged-equilibrium distinction. No source artwork or verbatim passages are used. Official mapping retains the existing cached NESA evidence boundary; no full syllabus action is claimed.
