# c-y11-ws-v04 science check

Revision 1, independent source review 6 November 2026. SHA-256 `65b52cd72cc9379c35f43066095bd13093a113590d69a42b595d70ac2cb15217`. No design edits, speech, render or listening check. This review traces the existing entry knowledge, previous handoff, route and official course version. It includes the missing starter-pack calculation/reference checks.

C11-WS4-01 (local ledger ID), official 2017 wording:

> select qualitative and quantitative data and information and represent them using a range of formats, digital technologies and appropriate media (ACSCH004, ACSCH007, ACSCH064, ACSCH101)

C11-WS4-02 (local ledger ID), official 2017 wording:

> apply quantitative processes where appropriate

C11-WS4-03 (local ledger ID), official 2017 wording:

> evaluate and improve the quality of data

The official DOCX text matches. C2-IQ2-03’s fraction is Office Math and was inspected directly in XML; plain text extraction had omitted it (`work/brief180/mole-syllabus-office-math.xml`). The quote does not claim every sub-action is completed in this lesson.

The five volumes are 12.10, 20.60, 22.40, 35.30 and 42.20 mL. Derived MM values are 24.59, 24.07, 30.99, 24.58 and 24.67; means are 24.48 for four good runs and 25.78 for all five. The constrained fit gives 1009.0858 mL/g and 24.567 g/mol. Copper-sulfate losses are 0, 0.52, 0.81, 0.89, 0.90 and 0.90 g. All processing arithmetic agrees; the printed spreadsheet map and rounded gradient triangle do not. The 0.05 mL reading convention is stated and the extra zero is explicitly an assumption about the incomplete raw note, not newly measured precision.

1. **Should fix (spreadsheet, scene 6):** The stated first three columns are mass, start and end. With A=mass, B=start, C=end, volume must be D=B2-C2, moles E=D2/24790 and molar mass F=A2/E2. The printed C2-D2, E2/24790 and A2/F2 use a different, unexplained column map and would reference the wrong cells (including a self-reference). Lock one explicit map and correct the three formula bars. No speech change.

2. **Should fix (evidence, scene 10 and author note b):** The origin is called a real point, but no zero-mass blank was measured in the five-run table. Call it the model-predicted origin, and state that the line is constrained through zero on that physical assumption. Do not invent an observed blank. No extra speech needed.

3. **Should fix (calculation display, scene 11):** 40.4 divided by 0.040 is 1010, not the displayed 1009. The spreadsheet gradient is 1009.1 from all four good runs; distinguish that fit from the rounded reading-off triangle, or show sufficient guard digits (40.364 at 0.040). Both give MM about 24.6, so no speech change.

Reference values: the [official Chemistry formula/data/periodic table sheet](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf), linked from the current 2017-course page, was downloaded and visually inspected, including NA, molar volumes, R and the atomic masses. Saved as `work/brief180/official-data-sheet.pdf`. Independent calculations: `work/brief180/calculations.json`. Public [NSW science safety](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) requires school risk assessment and does not establish the exact chemical-specific approval.

Site source identity checks:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html`: SHA-256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, route match True.

Root decisions: Decisions 4 and 9: final graph agrees with ws-v05’s reconciled opening; memory line is spoken in scene 11.

Quoted event cues occur in spoken order (`work/brief180/cues.json`); any stale ordinal is reported above. All ten sources contain no U+2014. Australian spelling retained. Full attempt conditions stay visible, answers wait for feedback and the short feedback format is retained. Source joins agree in playlist order, including m1-v27 to m2-v01 and root’s ws-v04 to ws-v05 reconciliation. Exact built frames, phone fit, motion, pronunciation and listening remain pending. Scope and skill definitions agree with the route and previous course decisions; science findings below still need repair.

Count: 0 blockers, 3 should fix, 0 optional; 5,863 joined narration characters; about 520.0 s with the existing holds (speech-only 440.8 s). These are estimates, not measured timing.
