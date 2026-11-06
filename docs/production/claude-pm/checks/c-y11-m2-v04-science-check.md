# c-y11-m2-v04 science check

Revision 1, independent source review 6 November 2026. SHA-256 `b3d96e06259f07548da4122393a9bc9cd486f83225077fdeab7e1b43eb506989`. No design edits, speech, render or listening check. This review traces the existing entry knowledge, previous handoff, route and official course version. It includes the missing starter-pack calculation/reference checks.

C2-IQ2-01 (local ledger ID), official 2017 wording:

> conduct a practical investigation to demonstrate and calculate the molar mass (mass of one mole) of:
> - an element
> - a compound (ACSCH046)

The official DOCX text matches. C2-IQ2-03’s fraction is Office Math and was inspected directly in XML; plain text extraction had omitted it (`work/brief180/mole-syllabus-office-math.xml`). The quote does not claim every sub-action is completed in this lesson.

The RSC resource confirms emery-paper cleaning, a 0.001 g balance, acid then water in a 50 mL burette, Mg held at its mouth, inversion into water, and start-minus-end readings. The current resource path is linked below; its download URLs returned 405, so the complete teacher PDF is not claimed as read. The resource’s nominal strip mass range is 0.020 to 0.040 g; the illustrative 0.042 g stays below its roughly 0.048 g capacity limit. It is an adapted example, not a verbatim method value. The two MM results are 24.67 and 59.4514 g/mol; Zn gives 65.35 (65.4). [RSC magnesium practical](https://edu.rsc.org/relative-mass/determining-the-relative-atomic-mass-of-magnesium/401.article). UK guidance does not itself establish NSW school clearance.

1. **Should fix (science/measurement, scene 4, 5 and magnesium calculation/notes):** The burette contains hydrogen plus water vapour, but 42.2 mL is presented as pure hydrogen at the room pressure. The author note knows the uncorrected wet gas biases MM low by about 3%. Make the approximation visible beside the result (uncorrected gas collected over water), or provide consistently corrected hydrogen data. Do not silently move measured wet-gas readings into a dry-H2 calculation. No partial-pressure derivation is needed here and an on-screen tag adds no speech. The liquid-column pressure also means room pressure alone is not automatically the collected gas pressure; equalise levels or identify that approximation in the method.

2. **Should fix (calculation display, scene 11):** 0.272 divided by the printed rounded 4.58e-3 is 59.39, which rounds to 59.4, while the unrounded n = 0.140/30.6 gives 59.4514, hence 59.5. Carry the unrounded value and make that explicit, as v03 already does, or retain sufficient guard digits in the divisor. No speech change.

3. **Should fix (source cue, scene 1):** On the third sentence pulses the n tag while sentence three still says the mass is easy. Pulse it on The hard part is the moles (sentence four), with no speech change.

Reference values: the [official Chemistry formula/data/periodic table sheet](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf), linked from the current 2017-course page, was downloaded and visually inspected, including NA, molar volumes, R and the atomic masses. Saved as `work/brief180/official-data-sheet.pdf`. Independent calculations: `work/brief180/calculations.json`. Public [NSW science safety](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) requires school risk assessment and does not establish the exact chemical-specific approval.

Site source identity checks:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson02.sa.html`: SHA-256 `751832bc580a28da97ddd7500268ddbbab24f8df0f90f241f76a0f10669d35b6`, route match True.

Root decisions: Decision 2: causal question and supplied gas volumes retained; RSC method checked at the resource page, teacher PDF access failed. No gas-law derivation added.

Quoted event cues occur in spoken order (`work/brief180/cues.json`); any stale ordinal is reported above. All ten sources contain no U+2014. Australian spelling retained. Full attempt conditions stay visible, answers wait for feedback and the short feedback format is retained. Source joins agree in playlist order, including m1-v27 to m2-v01 and root’s ws-v04 to ws-v05 reconciliation. Exact built frames, phone fit, motion, pronunciation and listening remain pending. Scope and skill definitions agree with the route and previous course decisions; science findings below still need repair.

Count: 0 blockers, 3 should fix, 0 optional; 6,349 joined narration characters; about 555.0 s with the existing holds (speech-only 477.4 s). These are estimates, not measured timing.
