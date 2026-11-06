# c-y11-m2-v05 science check

Revision 1, independent source review 6 November 2026. SHA-256 `9b390c35ce7f660c44c878901b3f52cbf658d52c769c10041495fd561c25c5f1`. No design edits, speech, render or listening check. This review traces the existing entry knowledge, previous handoff, route and official course version. It includes the missing starter-pack calculation/reference checks.

C2-IQ2-03 (local ledger ID), official 2017 wording:

> explore the concept of the mole and relate this to Avogadro’s constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)
> - moles of elements and compounds n = m/MM  (n = chemical amount in moles, m = mass in grams, MM = molar mass in gmol-1)
> - percentage composition calculations and empirical formulae
> - limiting reagent reactions

The official DOCX text matches. C2-IQ2-03’s fraction is Office Math and was inspected directly in XML; plain text extraction had omitted it (`work/brief180/mole-syllabus-office-math.xml`). The quote does not claim every sub-action is completed in this lesson.

The old CuSO4/water amounts give x=4.9875. CHO amounts are 3.3306, 6.6667 and 3.3300; ratios give CH2O. Phosphorus/oxygen gives 1:2.4998, hence P2O5 as an empirical formula, not the asserted molecule. Glucose gives multiplier 6.0001. Iron/oxygen gives 1:1.5031, hence Fe2O3. The magnesium-sulfate hydrate gives x about 7.01. New cases use the HSC masses; the old copper-sulfate hook intentionally keeps Module 1 values. The 0.05 closeness guide is approximate, with uncertainty still governing a real empirical result.

1. **Should fix (calculation display, scene 3):** The printed 0.0500 divided by 0.0100 equals 5.00, not 4.99. The unrounded copper-sulfate amount 1.60/159.6 gives 4.9875, which correctly rounds to the spoken 4.99. Carry that value and show enough guard digits or explicitly mark the displayed amounts as rounded. No speech change.

Reference values: the [official Chemistry formula/data/periodic table sheet](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf), linked from the current 2017-course page, was downloaded and visually inspected, including NA, molar volumes, R and the atomic masses. Saved as `work/brief180/official-data-sheet.pdf`. Independent calculations: `work/brief180/calculations.json`. Public [NSW science safety](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) requires school risk assessment and does not establish the exact chemical-specific approval.

Site source identity checks:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson03.sa.html`: SHA-256 `7afce351414805bdd26c51ab5e48c065748e894242c569d70119e712d215b4b0`, route match True.

Root decisions: Decision 1: new examples use data-sheet masses, old copper-sulfate hook retains its established values.

Quoted event cues occur in spoken order (`work/brief180/cues.json`); any stale ordinal is reported above. All ten sources contain no U+2014. Australian spelling retained. Full attempt conditions stay visible, answers wait for feedback and the short feedback format is retained. Source joins agree in playlist order, including m1-v27 to m2-v01 and root’s ws-v04 to ws-v05 reconciliation. Exact built frames, phone fit, motion, pronunciation and listening remain pending. Scope and skill definitions agree with the route and previous course decisions; science findings below still need repair.

Count: 0 blockers, 1 should fix, 0 optional; 5,769 joined narration characters; about 523.0 s with the existing holds (speech-only 433.8 s). These are estimates, not measured timing.


Count-method correction, 6 November: the source uses 5,754 characters summed across its scene strings; 5,769 includes spaces between those strings. The count-only finding is withdrawn. The source estimate is restored to about 523 s. Both counting conventions are preserved in work/brief180/count-correction.json; earlier reports are saved in count-correction-before/.
