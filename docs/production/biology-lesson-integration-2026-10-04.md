# Complete Biology draft integration

Three complete isolated proposals now cover the enzyme practical, enzyme graphs
and DNA replication: 30 scenes and 33 planned text takes. The earlier C04, C06
and C05 science corrections are integrated with estimated pacing, motion/reuse
decisions, separate response planning, official-source curriculum records and
independent learner materials. Original catalogue JSON and recorded text remain
unchanged. No renderer, speech provider, audio player or decoder was invoked.

## Revised teaching and scientific scope

| Lesson | Additional integration decisions |
| --- | --- |
| Enzyme practical | Catalase is identified as a catalyst, rather than a reactant consumed in peroxide decomposition. Bubble/foam animation is explicitly illustrative, not calibrated gas-volume data. Gas-volume comparisons need stated common conditions or justified correction. Distinguish a 60-second average from an initial rate. The control scene now compares untreated, heated/cooled and blank preparations at the same assay temperature, rather than mixing treatment history with current temperature. |
| Enzyme graphs | Keep labelled assay context. A sampled peak does not locate an exact universal optimum. Separate a rate trend from a structural mechanism and recovery test. A simple fixed-enzyme substrate model approaches a limit; its finite range does not prove every site is always occupied. The quick-check no longer asks learners to diagnose an anonymous cause from shape alone. |
| DNA replication | Keep strand inheritance, fork synthesis and fidelity distinct. Judge the inheritance-only animation separately from the simplified fork. The fork depicts schematic primer replacement and sealing, while omitting detailed processing chemistry and error control. Model handling alone does not demonstrate improved memory or learning. Both new strands grow 5′ to 3′, with primer processing before remaining nick sealing. |

The changes build on the [earlier scientific review](science-audit-2026-10-03.md)
and [shared model repairs](scientific-model-repairs-2026-10-03.md). The shared
component versions were retained in this integration; new renderer capability
or catalogue restyling was not needed. Source-level correctness does not
establish what a viewer will see through a full animation or at phone size.

The primary evidence supports bounded explanations:

- [IUBMB kinetics recommendations](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html)
  distinguish limiting behaviour in specified models from other kinetics.
  A finite plotted plateau does not uniquely diagnose a mechanism.
- [Peterson et al., 2007](https://pubmed.ncbi.nlm.nih.gov/17092210/) model and
  investigate reversible activity loss alongside irreversible thermal
  inactivation. The school-level inference is that a falling rate alone does
  not establish permanent unfolding.
- [NIST measurement terminology](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology)
  separates repeatability and systematic effects. The inference for these
  tasks is that averaging repeatable measurements cannot by itself remove
  a common proportional leak or confounded comparison.
- [Zhou et al., 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8815454/)
  experimentally examine selectivity, proofreading and mismatch repair in
  replication fidelity. The draft uses those broad distinctions without
  transferring its yeast-specific enzyme estimates to all organisms.
- [Human Okazaki-fragment maturation experiments](https://www.nature.com/articles/s41467-022-34751-2)
  distinguish processing from a nick substrate that ligase seals. The model
  represents that logical distinction without assigning a universal detailed
  processing enzyme system. Activities overlap in a real progressing fork.

The earlier fidelity citation's first-author/year label has also been corrected
to Zhou et al., 2021, matching the linked paper. Its scientific rationale and
source link are unchanged. Science-page links record reviewed sources; this
increment does not claim an offline cache of all those publications.

## Curriculum and observable learner evidence

All three sources already declare Biology 11–12 (2025), Year 11, “Cells as the
basis of life”. Their selected content wording and existing codes match the
reviewed official page data. The published point requires temperature, pH and
substrate-concentration experiments, not only a temperature-planning video.
The DNA points require conducting a modelling investigation and assessing
models. The graph point requires analysis, not a completed laboratory claim.

The [official course guidance](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview/course)
starts new Year 11 teaching in Term 1 2027 and Year 12 in Term 4 2027, with the
first new HSC in 2028. Keep that cohort distinct from the outgoing 2017 course.
The stored “Module 1” identifier remains catalogue organisation; the reviewed
new-course focus-area name is the curriculum mapping. No legacy crossover or
complete focus-area coverage is certified here.

The builder and validator pin three official response hashes independently of
the cache manifest. They verify published content membership, exact selected
wording, original outcomes and proposed Year 11 targets. Existing lesson
metadata is preserved. Additional task targets remain separate and unapplied;
their code existence does not establish achievement.

The [student sheets and separate teacher key](biology-learner-tasks/README.md)
provide unseen synthetic data, independent initial responses and local rubrics:

- Enzyme practical: repeat means/ranges, interval-average rates, common bias,
  matched controls and planning for all three specified factors.
- Enzyme graphs: plot three defined datasets, qualify optima, compare a trend
  with a mechanism and design a useful recovery/assay check.
- DNA: build and operate an antiparallel fork, show both synthesis directions,
  distinguish RNA replacement from nick sealing, then assess represented
  features and inference limits with an actual model record.

These are original formative tasks. Times and point totals are planning choices,
not official marking rules or validated assessments. Laboratory work needs a
teacher-reviewed procedure and actual records; the modelling task needs actual
learner construction, operation and evaluation. No task sheet or viewing record
is substituted for those practical verbs.

## Review package and dependencies

The [complete review](../../out/review/biology-lessons/review.md) contains new
scene narration and motion/reuse decisions. The
[manifest](../../out/review/biology-lessons/manifest.json) links original hashes
to five hashed exports per lesson: draft, copy changes, pacing, text takes and
curriculum. It also pins the student sheet and separate teacher key.

Every scene has a reviewed narration decision, including the title. The
quick-check has separate prompt and answer text with a 60-second thinking
target. Proposed durations include estimated speech and reading allowance;
they do not constitute measured silence, final cue timing or approved pacing.
Future assembly must prevent any solution text or caption from leaking into
the thinking gap. All old audio, alignment, caption wiring and explicit reveal
cues are removed from the isolated drafts. Component defaults remain unaligned
planning behaviour and require later measured review.

The [artwork inventory](../../out/review/selected-artwork/biology-inventory.json)
finds two unique retained images across three hooks. The shared enzyme image
is missing at its registered path. The DNA helix image is present and hashed;
provenance, permission and scientific visual review are unverified. This is
a top-level-reference inventory, not a review of component-internal art, fonts
or all storage locations. No replacement image was generated.

The selected-model inventory now includes these complete drafts as well as
earlier proposals. Catalogue impact stays at 15 selected lessons; 46 scene
references across catalogue/proposals are inventoried. Its quantitative cue
counts do not certify Biology default cue alignment or whole-scene semantics.

## Verification and next source work

```powershell
npm run prepare:biology-lessons
npm run validate:biology-package
npm run audit:selected-artwork -- --biology
npm run audit:selected-curriculum
npm run audit:scientific-models
npm run test:source
npm run archive:source
npm run check:source-restore
```

All 81 source tests and original-workspace TypeScript pass. The three complete Biology drafts validate with zero
schema errors or narration-budget warnings. Eight new tests cover original
structure/metadata, stale media/cue rejection, source/evidence drift, reordered
feedback, curriculum practical boundaries, independent arithmetic and strand
orientation/fidelity distinctions. A small checked-in curriculum fixture keeps
unit tests runnable without ignored caches; the real package validator and
restore checks use full pinned response bytes.

The archive now includes the three Biology packages and their learner materials
alongside the twelve Chemistry drafts. It runs all three package validators,
both selected curriculum audits and the 81-test suite from a fresh directory,
then checks every declared file again. The
[latest receipt](../../out/archives/quantitative-source/latest.json) and matching
[restore report](../../out/checks/source-restore-report.json) give the exact
capture status and counts. Public media, dependency installation, full media
recovery and off-machine storage remain outside this source check.

Next source priority is complete limiting-reagent draft integration and learner
transfer evidence, building on C03 rather than creating another competing pilot.
C04 to C06 remain open for teacher science/curriculum review, final speech/cues,
actual visual/device review and observed learner/practical evidence. Original
recorded lessons have not been silently changed.
