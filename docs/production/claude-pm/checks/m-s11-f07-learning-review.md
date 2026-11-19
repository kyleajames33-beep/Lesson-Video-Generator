# Maths S11 f07 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f07.md`, "How do Fried's, Young's and Clark's formulas scale a medicine dose for a child?" Source SHA256 `0e68cd2fba0cad9ecc4ad343cf6b794115e501f654d60bf4cd9d796b99802714`.

Written design reviewed by tracing it from its stated entry knowledge (f01's substitution into a fraction with brackets; f06's "a formula estimates"; Stage 5 mg, kg and months) as a Year 11 Mathematics Standard student. Checked against rulings 3, 4, 89 and 95 and the pack `pre-design/maths-standard/math-s11-f07.md`. The formula forms are those the pack gives; they are not yet confirmed against the 2024 reference sheet (ruling 89, Codex). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional), with narration held for Codex's reference-sheet check (ruling 95).

Ruling 4 is met throughout: "Medicine A" and every dose are invented and labelled, the footer "Invented example. Your doctor or pharmacist sets real doses." runs in every scene, the narration says it in scenes 1, 8 and 13, and no child or baby is drawn (label cards only). Teaching all three as "adult dose × a fraction under one" gives one shape and three fractions, and the part-of-adult bar makes each fraction a visible share. The months-into-Young's overshoot (214 mg against 30 mg) is a memorable reason to check the unit, and the 8-year-old worked both ways explains why two formulas disagree. Recalculated with SymPy 1.14 (18 checks for f07): Young's 8 years 200 mg (40%), slip 512; sweep 1/7 to 1/2; Clark's 25 kg ≈ 178.6 mg (≈ 36%); Fried's 9 months 30 mg (6%); months into Young's ≈ 214 mg, ≈ 7.1 times, ≈ 43% of the bar; adult 15 × 68 = 1,020 mg; A1 ≈ 83 mg and ≈ 64 mg, slip 262; A2 8 mg, slip ≈ 55 mg, note ≈ 7.8 mg; the memory-aid case 75 mg. All correct.

## Findings

1. **Should fix, title (ruling 95).** Use "Medication Dosage Formulas | Year 11 Maths Standard" (51 characters) and update "(Title length: ...)". The description's "Builds on: How Long Until BAC Reaches Zero?" becomes "Builds on: BAC: Time to Zero and Limitations." (f06's ruled title). f06's "Next: Medication Dosage Formulas." already matches.

2. **Optional, scene 7 (68 labelled ticks).** "A row of 68 small ticks fills, each '15 mg' (grouped in tens)" puts 68 labels on screen for a one-line multiplication. Simpler: a bar marked "68 kg" with one "15 mg per kg" tick under its first kilogram, then the bar fills to "1,020 mg". Same timing, much less to read.

## Gate before narration

Codex confirms the three formula forms, their wording and any age range on the current 2024 Mathematics Standard reference sheet (rulings 89 and 95). If the sheet differs, scenes 2 to 5, key notes 2 to 4 and A2 (b)'s "meant for babies" follow the sheet, and this review's numbers are rechecked with `work/brief-review-s11-f/verify.py`.

## Joins

f06 to f07: scene 1 opens on f06's final frame exactly. f07 to f08: scene 13's frame (the pancake plate about 620 px, the hand-font order card with four rows each "= ?", "Four orders. One rule?", the chips, no totals, the medicine footer gone) matches f08's Boundary.

## Practice and feedback

Both cards keep the full question, the needed formulas "as on the formula sheet" and the footer on screen through the countdown; picture slots are empty bars. Feedback 1 (about 26 s) and feedback 2 (about 20 s) each give the answer, the reason and one crossed slip.

## Key notes and length

Notes 2 to 4 each carry the unit in brackets (years, kg, months), which is the choosing rule; note 5 repeats the doctor or pharmacist line. Narration 4,811 characters by this reviewer's count, about 452 s with holds, 118 s under the cap; under 5,000 is accepted by ruling 95. No em dash.

No speech, design edits, builds or commits were made.
