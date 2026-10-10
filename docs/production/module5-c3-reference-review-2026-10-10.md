# Chemistry C3 reference feedback: independent bounded review

10 October 2026. Reviewer: Sol 6.1. Result: pass for the exact source and implementation scope below. This is not a listening, visual playback or release approval.

Semantic comparison against voiced lesson-v2 found exactly two changes: the inquiry is corrected to `What factors affect equilibrium and how?`, and c3-hook opts into `barReferenceStyle: solidMarks`. Removing those two changes reproduces all prior lesson data exactly. Spoken words, audio paths, caption tokens/times, durations, cue/model data and both response holds are identical. All ten assembled audio files exist; their exact hashes are recorded in the companion JSON.

The selected addition hook uses four short solid side marks at y369 and y417, the exact original A=2 and B=1 heights under y=465-48v. The marks lie outside the bar bounds and do not cross either bar. The previous dashed reference path and previous reference copy remain the default branch. The only shared diagram diff is the optional prop, its hook-specific reference branch and matching label. Model calculations, motion, other modes and response copy are unchanged. This establishes source geometry and branch preservation; actual rendered appearance belongs to root's separate UI evidence.

The page says Part 1, names concentration and temperature, describes introductory temperature/K reasoning, and identifies later C4/C5/C6/C9 and practical routes. It does not claim whole-module or complete dotpoint coverage. It clearly retains pending listening, playback, caption fit and release checks. Review-caption source tokens remain unchanged; production caption quality is not certified here.

C3's primary syllabus contribution is the concentration/temperature subset of p1067 under Factors that Affect Equilibrium. Supporting contributions are p1071 collision explanations, partial p1072 heat/activation-energy treatment, and introductory p1079 qualitative temperature/Keq analysis. C4 retains gas volume/pressure and catalysts; C5 constructs expressions; C6 performs calculations; C9 develops temperature/K data. The hydrate-control explanation is not practical conduct. Named supervised investigations, observations/data and learner conduct remain unapproved. The existing route is sensible; stronger labels suffice for this bounded revision.

The [official NSW Chemistry Stage 6 syllabus DOCX](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx) was retrieved during this review session. Its SHA256 is `7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42`, matching the cached official source exactly. Paragraph IDs refer to the repository's extraction, not official syllabus numbering.

Exact reviewed inputs:

- `docs/production/module5-c3-voiced-preparation-2026-10-10/lesson-v2.json`: `4f9a8ae747692747d5e7d9b71fbe4eb44b6c7d050bb8b851ab401c63d784ee67`
- `docs/production/module5-c3-reference-feedback-2026-10-10/lesson.json`: `adbe2c5ba0dc160e44a13f27ad68555a87255d10a26dc76642dc7daf5b462856`
- `src/slides/diagrams/kinds/chem-y12-m5/Module5DisturbanceClearDiagram.tsx`: `1a15eb52c937b3e1fd8335c1ab6bb7b363561c1ef98efdaaa7cae6d1973c87b6`
- `src/prototypes/Module5C3FeedbackReview.tsx`: `76ba58ba53bab4f4fa493d8816af1f0d83657538e17d8eb28f779b77f38e5be9`
- `scripts/build-module5-c3-feedback-review.mjs`: `f42281aa8105389b91390caf989c6c16c8bcfc4ea83ad7c2b0e649a5edfe9d73`
- `docs/production/module5-c3-voiced-preparation-2026-10-10/measured-cue-report-v2.json`: `f856d88d785e34a9c8b42f9d661ef2729d9f10c7d584a36589d0c903473e170c`

No source edits, builder execution or media mutations were performed. Remaining gates: actual UI inspection, continuous voiced playback, caption fit, student readability, human listening, required-action/practical evidence, and current-brief export/public-release review.
