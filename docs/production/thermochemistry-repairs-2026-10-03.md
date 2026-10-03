# Thermochemistry source corrections

Six complete isolated lesson proposals now cover 52 scenes and 58 planned
text takes. They address the remaining four Year 11 quantitative-model users
and two Year 12 neutralisation lessons. Original catalogue JSON, recorded text,
artwork references and registrations are preserved. No rendering, audio
generation, listening or decoding was performed.

## Findings and proposed treatment

| Register | Lesson | Source issue and proposed correction |
| --- | --- | --- |
| C24 | Year 11 Module 4 L1, enthalpy and profiles | Separate system enthalpy from heat transfer. State the constant-pressure/work conditions for q = ΔH. Distinguish energy for written stoichiometric quantities from a fixed value per mole of a named substance. Scope the single-peak profile. |
| C25 | Year 11 Module 4 L6, bond energy | Mean bond enthalpies support an approximate gas-phase accounting cycle. The separate-atom level is neither an observed transition state nor proof of a reaction mechanism or activation barrier. Keep the HCl and HBr product-mole basis explicit. |
| C26 | Year 11 Module 4 L7, formation enthalpy | Use standard pressure 1 bar, with temperature stated separately. Only an element in its reference state has assigned zero standard formation enthalpy, not every allotrope or phase. State the basis for coefficient-weighted calculations. |
| C27 | Year 11 Module 4 L9, Hess law and biology | Reversal changes the sign for matched overall states. Actual photosynthesis and respiration use distinct biochemical pathways. Hess law alone does not determine feasibility, sunlight input, usable ATP yield or a literal reverse mechanism. Remove the universal claim that the reverse reaction is impossible. |
| C28 | Year 12 Module 6 L3 and L10, neutralisation | Scope the dilute strong-acid/strong-base reference. Remove universal limits, assumed signs for all weak-acid ionisations, heat-based acid-strength rankings and unsupported historical measurement claims. Label synthetic data and supplied cycle terms. Separate model-estimate differences from an identified intrinsic ionisation enthalpy. |

These findings remain open against original production material. An isolated
proposal is ready for review, not a repaired or approved release. The
[correction register](correction-register.md) records their priority and closure
requirements.

## Scientific basis

Reviewed primary definitions support the following distinctions:

- [IUPAC enthalpy](https://goldbook.iupac.org/terms/view/E02141) defines H as
  U + pV. The lesson's constant-pressure heat relation additionally states its
  work assumptions.
- [Standard pressure](https://goldbook.iupac.org/terms/view/S05921) is
  10⁵ Pa under the modern convention. [Standard thermodynamic quantities](https://goldbook.iupac.org/terms/view/S05927)
  do not impose a particular temperature. State 298.15 K separately when used.
- [Reference state of an element](https://goldbook.iupac.org/terms/view/R05233)
  and [standard state](https://goldbook.iupac.org/terms/view/S05925) prevent
  treating all elemental forms as the same zero reference.
- [Bond enthalpy](https://goldbook.iupac.org/terms/view/08147) is a gas-phase
  mean over specified bonds. An atomisation accounting cycle does not supply
  an actual kinetic pathway.
- [Gibbs energy](https://goldbook.iupac.org/terms/view/G02629) includes the
  entropy term; the [standard equilibrium constant](https://goldbook.iupac.org/terms/view/S05915)
  depends on standard reaction Gibbs energy. The inference used here is that
  ionisation enthalpy alone cannot determine Ka at a specified temperature.
  A test uses identical hypothetical enthalpies with different entropies to
  demonstrate that logical limitation. It does not estimate any real acid's Ka.
- Johnson's authored review, [Photosynthesis](https://eprints.whiterose.ac.uk/id/eprint/109843/),
  describes the light-driven electron/proton and carbon-fixation processes.
  Overall reaction bookkeeping must be separated from those biological pathways.

These links record reviewed source definitions, not a locally cached copy of
each science page. The official Chemistry curriculum evidence is cached and
hash-checked separately. No numerical value for a named weak acid is inferred
from an unread source or treated as a universal exception. The ledger's
57.3, 2.1 and 55.2 values are explicitly supplied hypothetical cycle data.

## Package and curriculum

The [human review](../../out/review/thermochemistry-lessons/review.md) contains
the complete revised narration and retained visual choices. Its
[manifest](../../out/review/thermochemistry-lessons/manifest.json) links every
original hash to five hashed exports: lesson, before/after copy, pacing plan,
unapproved text takes and unapplied curriculum mapping. The builder refuses
drift in any selected original or the reviewed syllabus/extraction evidence.

All six sources declare the 2017 syllabus. The four Year 11 lessons lack
outcome lists and use summary content wording. Proposals link the published
Module 4 energy-profile, bond-energy and Hess-law content, including the
photosynthesis/respiration children. Formation enthalpy is a supporting Hess-law
method, not a separately named point in this reviewed selection. Both Year 12
lessons support the published Module 6 neutralisation practical point.
Viewing and synthetic-data working do not establish practical completion.

Mapping proposals retain parent/child paragraph relationships, exact wording,
evidence hashes and target outcome codes. They are unapplied. Teacher science,
curriculum and practical-delivery review remains required. This increment does
not convert lessons to the 2025 course or claim complete module coverage.

The [student transfer tasks](thermochemistry-learner-tasks.md) and separate
[teacher key](thermochemistry-teacher-key.md) test molar basis, accounting
cycles, reference states, biological inference and neutralisation evidence.
They use unseen supplied data. Scores and timing are formative planning
choices, not official NESA marking guidance or measured learning evidence.

## Shared diagram and retained dependencies

The heat-ledger component now draws an optional comparison reference, without
a forbidden region or hard-coded universal maximum. Its pure model validates
release/cost balance, scale bounds, marker ranges and finite magnitudes.
The old `floor` property remains a compatibility alias for a reference.
Final runtime/preflight validation requires explicit custom reveal cues.

The waterfall supports nonnegative release depths for a supplied exothermic
cycle within its scale. It is not a general signed thermodynamic engine and
does not represent every possible weak-acid ionisation. Unsupported geometry
fails rather than silently misdrawing it. Marker mode compares supplied
negative enthalpies and permits values beyond its reference within the
declared axis range.

The current selected-model inventory covers ten quantitative catalogue lessons
with eleven references. One original water shortcut and one original ledger
limit label remain flagged because original recorded sources are unchanged.
The new seven draft diagram scenes deliberately omit 35 custom reveal cues;
the earlier four scenes omit 17. No selected numeric model errors were found.
All cues need later alignment to approved speech. The photosynthesis ladder
retains a generic transfer primitive labelled as light input; its interpretation
and phone-size labels need actual visual review later.

The [new artwork inventory](../../out/review/selected-artwork/thermochemistry-inventory.json)
records six top-level images, all registered but missing at their expected
paths. Keep their references while locating existing files and provenance.
This inventory neither searches all external storage nor covers title heroes,
component-internal artwork or fonts. No replacement art was created.

## Verification and continuation

```powershell
npm run prepare:thermochemistry-lessons
npm run validate:thermochemistry-package
npm run audit:selected-artwork -- --thermochemistry
npm run audit:scientific-models
npm run test:source
npm run check
npm run archive:source
npm run check:source-restore
```

All 73 source tests pass. The new six-lesson package has zero schema errors
or narration-budget warnings. Ten added tests cover preserved structure,
source-drift refusal, stale media/cue removal, arithmetic, inference boundaries
and heat-ledger behaviour. Duration and thinking holds remain estimates;
there is no measured pacing or visual fit claim. Fresh-restoration results are
recorded in the [restore report](../../out/checks/source-restore-report.json)
against the [latest archive receipt](../../out/archives/quantitative-source/latest.json).

Next source priority is the remaining Biology mechanism/investigation draft
integration and curriculum/task evidence, starting with the already identified
DNA and enzyme findings. Keep final voice, cue alignment, visual/device review,
learner testing and full media recovery deferred until their prerequisites
are satisfied. Do not apply these proposals to recorded catalogue copy.
