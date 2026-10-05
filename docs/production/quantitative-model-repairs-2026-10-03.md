# Quantitative diagram source repairs

C22 now has implemented source repairs in the shared calorimetry,
conductometric and energy-ladder components. The original lesson JSON,
recordings, artwork and registrations are unchanged. No render, speech
generation, playback or audio decoding was performed. Existing apparatus,
colours, graph geometry and scene choices are preserved.

## Changes and their scope

The neutralisation default card now directs the learner to balanced reaction
ratios for water amount. It no longer presents concentration × volume of any
limiting reactant as a universal rule. Accessible descriptions identify the
illustrated exothermic cases and the heat-balance assumptions needed for a
negative molar estimate. The calorimetry account still requires scientific
review of the selected supplied data and assumptions. See
[OpenStax calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry).

The conductometric component is explicitly an HCl/NaOH illustration. Its graph
is labelled relative conductivity, since it normalises a conductivity-weighted
sum of equal amount units divided by total volume. It does not supply absolute
amount calibration or electrode cell geometry. Conductance and conductivity
are related by the cell constant, rather than being interchangeable physical
quantities. [Metrohm's conductometry monograph](https://www.metrohm.com/content/dam/metrohm/shared/documents/monographs/81095021EN.pdf)
defines those quantities and describes the measurement context.

The default bars retain the illustrative values H⁺ 350, OH⁻ 198, Cl⁻ 76 and
Na⁺ 50, now with a default caption identifying limiting ionic conductivity,
units and 25 °C. They are rounded teaching values rather than measured sample
conductivities. The monovalent-ion values agree with the rounded
[University of Massachusetts teaching table](https://www.ecs.umass.edu/cee/reckhow/courses/572/572bk18/572BK18.html).
Custom values receive a generic supplied-values caption unless a specific
`lambdaCaption` is provided; their units and conditions still require review.

Faster hydrogen-ion jitter no longer stands in for conductivity. Ions share
gentle schematic motion of the same speed and amplitude. No transport mechanism
or measured particle speed is claimed. Endpoint copy now identifies the major
Na⁺/Cl⁻ ions rather than claiming that no other ions exist. The accessible
description records omission of water equilibrium and transport mechanisms.

The model checks both curve slopes before annotating an equivalence minimum.
Positive conductivity values alone do not guarantee that minimum when dilution
or supplied coefficients change. Unsupported parameter regimes are rejected.
The diagram remains a bounded illustration, not an endpoint-fitting algorithm
or experimental accuracy claim. The [NPTEL laboratory account](https://archive.nptel.ac.in/content/storage2/courses/122101001/Slide/lect38/38_5.htm)
supports scoping the acid/base example, accounting for dilution and using
appropriate experimental curve branches.

A separate timing defect was repaired: added Na⁺/OH⁻ arrivals after equivalence
previously used the pre-equivalence time interval. Their arrival times now use
the same two independently timed phases as graph progress. Tests include
unequal phase durations. The graph uses continuous amount units; the beaker
markers show whole-unit snapshots and do not depict individual molecule counts.

## Model and reveal-cue contracts

[quantitative-models.mjs](../../src/slides/diagrams/quantitative-models.mjs)
contains pure checks and the scoped conductometric state. Runtime components
and release preflight share these checks. They reject nonfinite/negative cues,
unordered titration phases, premature minimum annotations, empty custom cards,
invalid qualitative energy levels and arrows to absent levels. The conductometric
marker budget supports 1 to 80 whole acid units; this is a drawing limit, not a
physical limit on titration.

Custom calorimetry cards/notes and ladder arrows/heat/reference lines/notes/steps
need their declared `at` values. Components now reject missing required cues
instead of interpolating undefined values or silently hiding essential content.
The ordinary lesson validator permits those omitted cues in unvoiced drafting,
while checking supplied parameters. The impact inventory records each missing
field. Release preflight and runtime component checks require the cues.

No final timings were guessed or inserted into the isolated drafts. Cue presence
and numeric validity do not establish narration alignment, sufficiently long
reading holds or scientific motion. Those need later selected media review.

## Affected-use inventory

[Usage evidence](../../out/review/scientific-models/usage.json) records component,
pure-model and lesson hashes, scene locations, declared narration wiring,
model errors, missing custom cues and the retained legacy water shortcut.
The [review queue](../../out/review/scientific-models/queue.md) combines these
with the earlier Biology and Physics component work.

Eight catalogue lessons have eight references to the quantitative components:

| Catalogue lesson | Component |
| --- | --- |
| Y11 M4 L1, enthalpy/energy profiles | Energy ladder |
| Y11 M4 L2, combustion | Calorimetry |
| Y11 M4 L3, neutralisation | Calorimetry |
| Y11 M4 L4, dissolution | Energy ladder |
| Y11 M4 L6, bond energy | Energy ladder |
| Y11 M4 L7, formation enthalpy | Energy ladder |
| Y11 M4 L9, Hess/photosynthesis/respiration | Energy ladder |
| Y12 M6 L18, back/conductometric titration | Conductometric |

All eight declare narration references. That does not verify that the files
exist or that their recorded speech is correct. No recordings were opened.
The original neutralisation lesson explicitly overrides the default card with
the old shortcut. It is flagged for copy/media integration rather than silently
edited. Its isolated complete draft already supplies revised card copy.

There are zero model errors under the selected source checks. Four isolated
draft scenes have 17 omitted custom cues: combustion 4, neutralisation 4,
dissolution 8 and conductometric 1. They intentionally remain unvoiced and
cannot pass the strict cue contract until later alignment integration. The
inventory checks selected kinds in catalogue/prototype/correction directories;
it is not an exhaustive audit of every diagram, font, image or curriculum map.

## Verification and next work

```powershell
npm run test:quantitative-models
npm run test:source
npm run check
npm run validate:quantitative-package
npm run audit:scientific-models
```

All nine new model tests pass, bringing the source suite to 56 passing tests.
They independently check ion conservation, conductivity sums/dilution, curve
direction, unsupported parameters, phase timing and missing/invalid reveal
cues. TypeScript passes. The six complete drafts still pass package hashes and
source schema with zero errors and zero narration-budget warnings. Source
checks do not certify actual pacing, visual fit or continuous playback.

C22 remains open for scientific approval, original-copy integration, final cue
alignment and visual/device review. Use the
[lesson-specific science checklist](quantitative-science-review-checklist.md)
with the updated usage evidence. Four selected scene images are still missing,
and C18 rights/archive/restore evidence remains incomplete.

The next non-media priority is to prepare a reproducible source package and
restoration check for the selected drafts and component dependencies. Such a
check must be labelled source-only; a full release restore still needs final
recordings, alignment, assets and export evidence later.

The subsequent [source archive and restore](source-archive-and-restore-2026-10-03.md)
now completes that source-only recovery check. Four archive tests bring the
source suite to 60 passing checks. This does not close full media restoration
or the remaining scientific/visual review.
