# c-y11-ws-v06 science check

Revision 1, independent source review 6 November 2026. SHA-256 `d228ffc3749627649a7a1c4d8fd4e8386347f0eacc1349f917123be6db13cb6d`. No design edits, speech, render or listening check. This review traces the existing entry knowledge, previous handoff, route and official course version. It includes the missing starter-pack calculation/reference checks.

C11-WS6-01 (local ledger ID), official 2017 wording:

> use modelling (including mathematical examples) to explain phenomena, make predictions and solve problems using evidence from primary and secondary sources (ACSCH006, ACSCH010)

C11-WS6-02 (local ledger ID), official 2017 wording:

> use scientific evidence and critical thinking skills to solve problems

The official DOCX text matches. C2-IQ2-03’s fraction is Office Math and was inspected directly in XML; plain text extraction had omitted it (`work/brief180/mole-syllabus-office-math.xml`). The quote does not claim every sub-action is completed in this lesson.

The old sample gives 0.755 g water, 1.745 g residue and x=3.8363; the fresh sample gives 0.8975 g, 1.6025 g and x=4.9659. The Na2CO3 case gives x about 5.54 and fresh decahydrate about 63.0% water. PubChem’s assessed HSDB records support slow CuSO4 pentahydrate efflorescence in dry air and ready sodium-carbonate-decahydrate efflorescence. The copper story therefore need not switch to the drying-cabinet fallback. The same source records a white monohydrate, so white plus constant mass is not proof of complete dehydration. [Copper sulfate hydrate record](https://pubchem.ncbi.nlm.nih.gov/compound/cupric%20sulfate%20pentahydrate), [Sodium carbonate hydrate records](https://pubchem.ncbi.nlm.nih.gov/compound/Sodium_carbonate).

1. **Should fix (learning/evidence, scene 6, 7 and 14):** Constant mass plus white colour supports dehydration under the chosen conditions; it does not prove that all water left or uniquely identify copper sulfate. White copper-sulfate monohydrate is also reported by the cited primary database. Replace ruled-out crosses and categorical identity/completion conclusions with evidence supporting or weakening each explanation. A non-integer average alone also does not prove a mixture. Keep the known hydrate/source evidence, crust and fresh-sample prediction as the support for the proposed mixture; do not teach a generic non-integer-means-mixture rule. Replace the existing assertions within their current length.

2. **Should fix (calculation display, scene 8):** The printed 0.0499 divided by 0.0100 equals 4.99, not 4.97. The correct fresh calculation carries 0.8975 g water and 1.6025 g residue, giving 4.96583. Show those guard digits or state that later rows use the unrounded amounts. Rounding both masses upward to 0.898 and 1.603 also makes the displayed total 2.501 g. The spoken 4.97 is correct and can stay.

3. **Should fix (data provenance, scene 1 and 8):** These class results are an illustrative story in the author notes, not a cited set of measurements by an identified class. Mark the old/fresh data as illustrative on screen so primary-versus-secondary evidence teaching does not pass invented results off as collected primary data. No speech addition.

Reference values: the [official Chemistry formula/data/periodic table sheet](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf), linked from the current 2017-course page, was downloaded and visually inspected, including NA, molar volumes, R and the atomic masses. Saved as `work/brief180/official-data-sheet.pdf`. Independent calculations: `work/brief180/calculations.json`. Public [NSW science safety](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) requires school risk assessment and does not establish the exact chemical-specific approval.

Site source identity checks:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html`: SHA-256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, route match True.

Root decisions: Decision 6: the weathering hypothesis is supported by a primary database; no fallback needed, but the evidence conclusion needs repair. Decision 8: embedded countdown remains a build item.

Quoted event cues occur in spoken order (`work/brief180/cues.json`); any stale ordinal is reported above. All ten sources contain no U+2014. Australian spelling retained. Full attempt conditions stay visible, answers wait for feedback and the short feedback format is retained. Source joins agree in playlist order, including m1-v27 to m2-v01 and root’s ws-v04 to ws-v05 reconciliation. Exact built frames, phone fit, motion, pronunciation and listening remain pending. Scope and skill definitions agree with the route and previous course decisions; science findings below still need repair.

Count: 0 blockers, 3 should fix, 0 optional; 5,640 joined narration characters; about 512.0 s with the existing holds (speech-only 424.1 s). These are estimates, not measured timing.


Count-method correction, 6 November: the source uses 5,625 characters summed across its scene strings; 5,640 includes spaces between those strings. The count-only finding is withdrawn. The source estimate is restored to about 512 s. Both counting conventions are preserved in work/brief180/count-correction.json; earlier reports are saved in count-correction-before/.
