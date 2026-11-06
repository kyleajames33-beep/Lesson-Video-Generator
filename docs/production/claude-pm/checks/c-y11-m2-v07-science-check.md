# c-y11-m2-v07 science check

Revision 1, independent source review 6 November 2026. SHA-256 `89856c503a12316b79c471d02ef0a68f4abbbf88b0bd644f2290171f00858bc0`. No design edits, speech, render or listening check. This review traces the existing entry knowledge, previous handoff, route and official course version. It includes the missing starter-pack calculation/reference checks.

C2-IQ1-02 (local ledger ID), official 2017 wording:

> relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:
> - balancing chemical equations (ACSCH039)
> - solving problems regarding mass changes in chemical reactions (ACSCH046)

C2-IQ2-03 (local ledger ID), official 2017 wording:

> explore the concept of the mole and relate this to Avogadro’s constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)
> - moles of elements and compounds n = m/MM  (n = chemical amount in moles, m = mass in grams, MM = molar mass in gmol-1)
> - percentage composition calculations and empirical formulae
> - limiting reagent reactions

The official DOCX text matches. C2-IQ2-03’s fraction is Office Math and was inspected directly in XML; plain text extraction had omitted it (`work/brief180/mole-syllabus-office-math.xml`). The quote does not claim every sub-action is completed in this lesson.

10.0/24.31 mol Mg gives 16.58165 g MgO, hence 16.6. Oxygen contributes 6.58165 g, not a mass generated from nothing. The small-crucible gross readings are consistent with a 25.120 g crucible and 0.243 g Mg. The iron example gives 55.955 g (56.0); reverse magnesium gives 12.062 g (12.1); aluminium oxide gives 15.305 g (15.3); copper gives 3.1804 g (3.18). The next handoff’s 4.0 g O2 limits reaction with 10.0 g Mg and can give about 10.1 g MgO. These are theoretical quantities under the stated complete-reaction/excess conditions, not measured yields.

1. **Should fix (calculation display, scene 6):** 0.206 times 32.00 equals 6.592, which rounds to 6.59 g, not the printed 6.58. The unrounded 0.20568 mol gives the intended 6.582 g and conservation total 16.582 g. Keep the unrounded amount through the multiplication, with guard digits or a rounded-display tag. No speech change; the spoken 6.58 is correct.

Reference values: the [official Chemistry formula/data/periodic table sheet](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf), linked from the current 2017-course page, was downloaded and visually inspected, including NA, molar volumes, R and the atomic masses. Saved as `work/brief180/official-data-sheet.pdf`. Independent calculations: `work/brief180/calculations.json`. Public [NSW science safety](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) requires school risk assessment and does not establish the exact chemical-specific approval.

Site source identity checks:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson12.sa.html`: SHA-256 `6f935143648bfa77bb02577ce5881dbf61888b8ef11101a46a4728493aeb885c`, route match True.

Root decisions: Decisions 8 and 9: embedded prediction and the exact 10.0 g Mg/4.0 g O2 handoff retained.

Quoted event cues occur in spoken order (`work/brief180/cues.json`); any stale ordinal is reported above. All ten sources contain no U+2014. Australian spelling retained. Full attempt conditions stay visible, answers wait for feedback and the short feedback format is retained. Source joins agree in playlist order, including m1-v27 to m2-v01 and root’s ws-v04 to ws-v05 reconciliation. Exact built frames, phone fit, motion, pronunciation and listening remain pending. Scope and skill definitions agree with the route and previous course decisions; science findings below still need repair.

Count: 0 blockers, 1 should fix, 0 optional; 5,699 joined narration characters; about 517.0 s with the existing holds (speech-only 428.5 s). These are estimates, not measured timing.


Count-method correction, 6 November: the source uses 5,684 characters summed across its scene strings; 5,699 includes spaces between those strings. The count-only finding is withdrawn. The source estimate is restored to about 517 s. Both counting conventions are preserved in work/brief180/count-correction.json; earlier reports are saved in count-correction-before/.
