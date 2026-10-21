# m6g04 science check (chem-m6-g04, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-g04.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; the curve solver `src/explainer/lessons/chem-m6-c13/curves.ts` (ported line for line to Python: the same charge balance, bisection on pH, Kw 1.0 × 10⁻¹⁴, Kb(NH₃) 1.8 × 10⁻⁵, and the same `volAt` search); site lessons 15, 17 and 18 (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/`, text extracted 21 Oct to check the quoted site claims); `site-corrections-m6.md` (registered corrections); `lessons/chem-m6-c13.md`, `c14.md` and `c15.md` (recalled values and conventions); `docs/production/module6-memory-aids-2026-10-11.md`. Every number was recomputed by script (scratch, 21 Oct): the Q1 and Q2 curves at every tabulated volume and every indicator crossing; Q2's phenolphthalein endpoint at pH 8.0, 8.2, 8.3 and 8.5; the Q3 ladder and the diluted-NaOH example; the Q4 conductivity points with the listed limiting molar conductivities, and least-squares lines for four choices of fit range. No audio, stills, site files or design files were changed.

## Syllabus dotpoints (checked word for word)

Ledger `C6-IQ3-01` (page 53): "conduct practical investigations to analyse the concentration of an unknown acid or base by titration". Ledger `C6-IQ3-02` (page 53): "investigate titration curves and conductivity graphs to analyse data to indicate characteristic reaction profiles, for example:" with examples "strong acid/strong base", "strong acid/weak base", "weak acid/strong base (ACSCH080, ACSCH102)". The design text and the YouTube description match exactly, including the inquiry question "How are solutions of acids and bases analysed?". "Practice rows, not first coverage" is right.

## Em dashes

None (U+2014 count 0). Four en dashes in the Q1 card table (allowed; see learning review M6).

## Reference values

| Claim | Looked up | Verdict | Source |
| --- | --- | --- | --- |
| Kb(NH₃) 1.8 × 10⁻⁵, pKa(NH₄⁺) 9.25 | CRC pKb 4.75 | Correct | CRC |
| Methyl orange 3.1–4.4, methyl red 4.4–6.2, bromothymol blue 6.0–7.6, phenolphthalein 8.3–10.0 | Standard school ranges (methyl red is sometimes 4.2–6.3, phenolphthalein 8.2–10.0) | Correct as the series convention (C13 author note f) | CRC indicator table; LibreTexts |
| Limiting molar conductivities (S cm² mol⁻¹, 25 °C): H⁺ 349.8, OH⁻ 198.6, NH₄⁺ 73.5, Cl⁻ 76.3 | CRC: 349.65, 198.0, 73.5, 76.31 | Correct (OH⁻ within 0.3 %; no effect on the crossing) | CRC "Equivalent conductivity of ions" |
| Eggshell about 94 to 97 % CaCO₃ | Literature about 91 to 97 % (white about 91 %, brown about 95 % in one 2021 study) | Plausible; widen the author range (M5) | Ogah et al. 2021 |
| M(CaCO₃) 100.1 g/mol | 100.09 | Correct | |

## Q1: ammonia titrated with HCl (curve, equivalence, indicator)

| Item | Design | Recomputed (ported solver) | Verdict |
| --- | --- | --- | --- |
| Curve points 0 to 40 mL (27 values, author note a) | 11.16 ... 1.57 | Identical at every volume to 0.01 | Correct |
| V(eq) from the graph | 24.0 mL | 2.40 × 10⁻³ mol NH₃ ÷ 0.100 = 24.0 mL | Correct |
| n(HCl) | 0.100 × 0.0240 = 2.40 × 10⁻³ mol | Same; 3 s.f. | Correct |
| c(NH₃) | 2.40 × 10⁻³ ÷ 0.02000 = 0.120 mol/L | Same; 3 s.f. (0.100 and a 0.1 mL graph reading) | Correct |
| Equivalence pH | 5.26, "about five" | [NH₄⁺] 0.05455 mol/L; 5.259 | Correct |
| One drop either side | 6.58 and 3.94 | 6.58 and 3.94 | Correct |
| "Steep part from about seven to three" (23.9 to 24.5 mL) | 6.88 and 2.95 | Correct values, but a lopsided window that differs from C13 and C14's "about 6.6 to 4" and lets methyl orange also qualify (S1) | Should fix |
| Phenolphthalein loses colour (8.3) | 21.60 mL | 21.604 | Correct |
| Bromothymol blue 7.6, 7.0, 6.0 | 23.48, 23.87, 23.99 mL | 23.481, 23.867, 23.987 | Correct; "starts about half a millilitre early" (0.52 mL) and "a little too small" (green 0.13 mL, 0.5 %) are both right |
| Methyl red 6.2 to 4.4 | 23.98 to 24.02 mL | 23.979 to 24.017 | Correct: entirely inside the steep drop |
| Methyl orange 4.4 to 3.1 | 24.02 to 24.35 mL | 24.017 to 24.352 | Correct: at the foot, its full change ends about 0.35 mL late |
| Methyl red as "most suitable" | | Correct, and consistent with C13 A2 and the registered L17 correction. Site lesson 15 names methyl orange for strong acid/weak base (its check question marks methyl orange correct); HSC markers commonly accept either with a justification, so methyl orange should be acknowledged as acceptable but slightly late (S1) | |

## Q2: the same ammonia, swapped (phenolphthalein lateness)

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| Curve points 0 to 40 mL (author note b) | 1.00 ... 9.22 | Identical at every volume to 0.01 | Correct |
| n(HCl) | 0.100 × 0.02500 = 2.50 × 10⁻³ mol | Same | Correct |
| V(eq) | 2.50 × 10⁻³ ÷ 0.120 = 20.8 mL (20.83) | 20.833 mL; pH 5.259 | Correct |
| Faint pink (pH 8.3) | 23.14 mL; 2.31 mL extra | 23.144 mL; 2.310 mL extra | Correct; matches the buffer-ratio check (ratio 0.111, 0.277 mmol NH₃, 2.31 mL) |
| Calculated c | 2.50 × 10⁻³ ÷ 0.02314 = 0.108 mol/L, 10 % low | 0.10802 → 0.108; 3 s.f. | Correct |
| Sensitivity to where "faint pink" is judged | not stated | pH 8.0: 1.16 mL extra, c 0.114; pH 8.2: 1.84 mL, 0.110; pH 8.5: 3.66 mL, 0.102 | The direction is certain; the size depends strongly on the eye, because the buffer is flat. Keep "about two more millilitres" spoken; add an author note (M2) |
| Full pink (10.0) never reached | stated | 60 mL 9.53; 100 mL 9.83 | Correct; "first turns faint pink" on the card is needed |
| 3b "creeps up slowly instead of leaping" | | The curve leaps from about 3.1 (20.5 mL) to 7.2 (21.0 mL), then creeps (8.0 at 22 mL, 8.9 at 30 mL) | Wording conflicts with the drawn curve (learning review S3) |
| Error direction | titre too large, c(NH₃) too low | c = n(HCl) × 1 ÷ V(titre): opposite to the titre | Correct |

### The site error-direction table claim

Site lesson 15 card 3 (re-read 21 Oct), table row: "Ph for SA + WB (EP pH < 7) | Too large, endpoint only after excess base added (pH > 8.3) | Overestimated | n(base) too large → c(acid) too high"; summary: "Wrong indicator for SA+WB: titre too large → c(acid) overestimated". Quoted correctly in the design.

The design's correction is right. The row's own wording ("endpoint only after excess base added") implies the weak base is the titrant in the burette and the acid is the unknown in the flask; for that set-up the row is correct. It fails for the other three set-ups: base unknown in the burette (Q2: titre too large, c(base) too low); base in the flask with acid added (phenolphthalein goes colourless early: Q1 computes 21.60 mL against 24.00 mL, titre too small); acid unknown in the burette with standard base in the flask (titre too small, c(acid) = n(base) ÷ V too high). The overgeneralised item is the summary line, which states no set-up. The proposed correct wording ("The direction of the error depends on which solution is in the burette and which is the unknown: find which way the titre moves, then follow it through the calculation.") is accurate. Minor framing note (M6).

## Q3: eggshell back titration

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| n(HCl added) | 0.2500 × 0.02500 = 6.250 × 10⁻³ mol | Same; 4 s.f. | Correct |
| n(HCl left) = n(NaOH) | 0.1000 × 0.02490 = 2.490 × 10⁻³ mol | Same; 4 s.f. | Correct |
| n(HCl used) | 3.760 × 10⁻³ mol | Same; 4 s.f. (subtraction to the 10⁻⁶ place) | Correct |
| n(CaCO₃) | 1.880 × 10⁻³ mol | Same | Correct |
| m(CaCO₃) | 1.880 × 10⁻³ × 100.1 = 0.1882 g | 0.18819 → 0.1882 | Correct |
| % CaCO₃ | 0.1882 ÷ 0.200 × 100 = 94.1 % | 94.09 → 94.1 %; 3 s.f. from 0.200 g | Correct |
| Water-rinsed burette direction | titre ↑ → n(left) ↑ → n(used) ↓ → % ↓ | Correct | Correct |
| Author example (NaOH diluted to 0.0950 mol/L) | 26.21 mL, 90.8 % | 26.21 mL, 90.81 % | Correct |
| Key note 4: CO₂ not boiled off → % too low | | Correct (C15; site lesson 18 Insight) | Correct |
| Key note 4: sample not fully reacted → % too low; water in the conical flask → no effect | | Both correct chemistry, but not taught in this video (learning review M2) | |
| Ca²⁺ and the phenolphthalein endpoint; MgCO₃ counted as CaCO₃ | author note c | Correct | Correct |

## Q4: ammonia conductivity

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| 17 points, 0 to 16 mL (author note d) | 0.33, 1.53, 3.01 ... 44.97 | 0.332, 1.534, 3.012 ... 44.967: identical to 0.01 | Correct |
| Best-fit lines and crossing | slopes 1.495 and 4.261; 8.398 mL | 2 to 7 with 10 to 16: 1.4952, 4.2610, 8.398 mL; 2 to 6 with 11 to 16: 8.397; 2 to 8 with 9 to 16: 8.399; 1 to 8 with 9 to 16: 8.397 | Correct; robust to the fit range |
| n(HCl), c(NH₃) | 0.500 × 0.00840 = 4.20 × 10⁻³ mol; ÷ 0.05000 = 0.0840 mol/L | Same | Correct arithmetic; see M1 on the precision of the crossing |
| Crossed answer | 9.00 mL → 0.0900 mol/L | Same | Correct |
| 0 mL point above the first line | 0.33 against 0.02 | Correct; the first acid removes the ammonia's own OH⁻ | Correct |
| Shape explanation (low, gentle, steep) | 5b | Correct. "After equivalence there's no ammonia left" is absolute; the ammonia is essentially all converted (M3) | |

## The new memory aid: "Move the titre, then follow it through the formula."

- **Correct?** Yes, for every error the video uses. With the unknown in the flask, c(unknown) = c(titrant) × V(titre) × ratio ÷ V(aliquot), so c follows the titre. With the unknown in the burette, c(unknown) = n(standard) × ratio ÷ V(titre), so c moves opposite to the titre. In a back titration the analyte follows (n added − n titre), so it moves opposite to the titre. Q2 and Q3 and key note 4's rows all fit.
- **Safe?** Yes, with its stated condition, because the aid makes the student locate the titre in the formula rather than memorise a direction. Its limit is an error that does not act through the titre: a wrong concentration of the standard, a weighing error, or a wrong excess volume in a back titration (an error in "n added"). There the student must follow that value instead. The design's author note says so; the learner condition tag ("check which solution is the unknown, and where it sits") does not.
- **Recommendation (M4):** keep the aid; extend the key-notes condition tag to: "check which solution is the unknown and where it sits; if the error changes another value, follow that value instead". Not in the bank: Codex to add it as a draft with this assumption.

## Exam style

Section II style throughout: "Use the graph to determine ...", "Select the most suitable indicator from the table, and justify your choice", "Explain the effect of her choice of indicator ...", "Calculate the percentage by mass ...", "Explain the shape of the graph". Every condition is on each card, and each card carries "HSC-style question, written for HSCScience". The data sets are original. A web search found no NESA HSC paper with an eggshell back titration, an ammonia pH curve with these data, or an ammonia conductometric titration; eggshell back titrations are a common textbook and IB/A-level item (for example WJEC 2018 Unit 5), so Codex's NESA paper check (request 4) should still be run. Learner copy never mentions marks.

## Absolute claims

- 2c: "The steep part drops from about seven to three" (S1).
- 3b: "instead of leaping" (learning review S3).
- 5b: "After equivalence there's no ammonia left" (M3).
- 5d: "Equivalence falls **between** readings, so use the lines." Usually true, not always (M3).
- 3d: "That's true when the unknown is in the flask": correct as a conditional.
- Decision board: "In a back titration, more left over means less sample": correct for a fixed amount of added reagent.

## Findings

No blockers.

### S1. Should fix: Q1's "seven to three" window and the methyl orange answer

- Exact text, 2c: "The steep part drops from about **seven to three**." Model answer (b): "The steep section runs from about pH 7 to 3. Methyl red (4.4 to 6.2) changes entirely within it, so it is the most suitable."
- Problem: the 23.9 to 24.5 mL window is lopsided; one drop either side (the series' usage) gives 6.58 to 3.94, matching C13 A2 ("about six point six to about four point zero") and C14 scene 7. Under "seven to three", methyl orange (3.1 to 4.4, crossing at 24.02 to 24.35 mL) is also "inside the steep part", so the stated rule does not single out methyl red, and the site's methyl orange answer is left unaddressed.
- Replacement narration: as the learning review's S1 ("One drop either side of equivalence, the pH falls from about **six and a half to four**. ... Methyl orange changes lower, at the foot of the drop, so it's a little late.").
- Replacement model answer (b): "At equivalence the solution contains NH₄Cl; NH₄⁺(aq) + H₂O(l) ⇌ NH₃(aq) + H₃O⁺(aq), so the equivalence pH is acidic (about 5). One drop either side of equivalence the pH falls from about 6.6 to 3.9. Methyl red (4.4 to 6.2) changes entirely within this drop, so it is the most suitable. Methyl orange (3.1 to 4.4) changes at the foot of the drop, slightly after equivalence, and is also acceptable."
- Visual: the 2c bracket spans 23.95 to 24.05 mL; the methyl orange tag reads "methyl orange: changes just after the drop, slightly late; also accepted".

### M1. Minor: the crossing "read to 0.01 mL"

- Exact text, 5c grey tag: "3 s.f.: 0.500 and a crossing read to 0.01 mL"; Precision decision: "8.40 mL from a crossing quoted to 0.01 mL as C15 does".
- Problem: on a 1 mL grid a crossing is read to about 0.1 mL by eye; claiming 0.01 mL conflicts with the owner's strict-precision rule. The series already quotes crossings to 0.01 mL (C15: 8.20 mL, ready to voice), so changing the number now would break consistency.
- Replacement (keeps the numbers): tag "3 s.f.: 0.500 mol/L; crossing read as 8.40 mL". Author note (d): "A crossing on a 1 mL grid is read to about ±0.1 mL by eye; 8.40 mL follows the series convention (C15). An answer of 8.4 mL and 0.084 mol/L is equally acceptable."

### M2. Minor: Q2's 2.3 mL depends on where "faint pink" is judged

- Add to author note (b): "Script check, 21 Oct: the endpoint volume is very sensitive to the pink threshold because the buffer is flat: pH 8.0 at 22.0 mL (1.2 mL extra, c 0.114), 8.2 at 22.7 mL (1.8 mL, 0.110), 8.3 at 23.1 mL (2.3 mL, 0.108), 8.5 at 24.5 mL (3.7 mL, 0.102). The direction is certain; the size is illustrative." Screen bracket: "about 2 mL of extra NH₃" (narration already says "about two more millilitres"); keep "about 0.108" in the grey line.

### M3. Minor: two absolute phrases in Q4

- 5b: "After equivalence there's no ammonia left" becomes "After equivalence there's almost no ammonia left".
- 5d: "Equivalence falls **between** readings, so use the lines." becomes "Equivalence usually falls **between** readings, so use the lines." (Key note 5 already says "usually".)

### M4. Minor: the new aid's condition tag

- Key notes condition tag: "check which solution is the unknown and where it sits; if the error changes another value, follow that value instead". Memory aid check: add "Learner tag carries the limit (standard concentration, mass or added-excess errors act on n, not the titre)."

### M5. Minor: eggshell composition (author note c)

- Replace "eggshell is about 94 to 97% calcium carbonate" with "eggshell is about 91 to 97% calcium carbonate by mass (one 2021 study: white about 91%, brown about 95%)". 94.1% stays plausible.

### M6. Minor: framing the site correction

- In Decisions, "are right only when the acid is the unknown in the flask and the weak base is the standard in the burette" is accurate; add: "The table row's own wording ('endpoint only after excess base added') implies that set-up; the summary line 'Wrong indicator for SA+WB: titre too large → c(acid) overestimated' states no set-up and is the overgeneralised item." Cross-reference C13 correction 3 as planned.

### M7. Minor: key note 2 formulas omit the mole ratio

- As the learning review's M2: "c = c(titrant) × V(titre) × ratio ÷ V(sample)" and "c = n(standard) × ratio ÷ V(titre)".

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ3-01 and C6-IQ3-02 (page 53)
- `src/explainer/lessons/chem-m6-c13/curves.ts` (solver ported and re-run, 21 Oct)
- CRC Handbook of Chemistry and Physics: dissociation constant of ammonia; equivalent (limiting molar) conductivities of ions at 25 °C; acid-base indicator transition ranges
- LibreTexts, Acid-base titrations and indicators (strong acid/weak base: methyl red; ranges): https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/17%3A_Additional_Aspects_of_Aqueous_Equilibria/17.03%3A_Acid-Base_Titrations
- OpenStax Chemistry: Atoms First 2e, 14.7 Acid-base titrations (as cited by the registered L17 correction): https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations
- Site lesson 15 card 3 (error table and summary) and site lesson 18 (carbon dioxide Insight), local files, re-read 21 Oct
- Ogah et al., "Analysis of brown and white chicken eggshells for content of calcium carbonate" (about 95 % and 91 %): https://jbspr.unilag.edu.ng//wp-content/uploads/2026/03/4-Ogah-et-al.-Analysis-of-Brown-and-White-Chicken-Eggshells-for-Content-of-Calcium-Carbonate.pdf
- WJEC A-level Chemistry Unit 5, June 2018 (an eggshell-type back titration in another syllabus, for the originality check): https://pmt.physicsandmathstutor.com/download/Chemistry/A-level/Past-Papers/WJEC-Wales/Unit-5/June%202018%20QP%20-%20Unit%205%20(Analysis)%20WJEC%20Chemistry%20A-Level.pdf

## Verdict

**Ready to voice after fixes.** Every number in the design reproduces with the ported solver and by hand. S1 changes narration and the model answer and must be applied before recording; M1 to M7 are author-note, screen or one-phrase changes and should be applied. The Codex error check is still required.

## Resolution

Resolved by the author in `lessons/chem-m6-g04.md` Revision 2 (21 Oct). Narration 5,792 characters (recounted by script), about 9.5 minutes.

- **S1 (Q1 window and methyl orange): fixed.** Narration as the learning review's S1, worded "about six point six to four" to match C13 and C14. Model answer (b) now reads: "... One drop either side of equivalence the pH falls from about 6.6 to 4 (6.58 to 3.94). Methyl red (4.4 to 6.2) changes entirely within this drop, so it is the most suitable. Methyl orange (3.1 to 4.4) changes at the foot of the drop, slightly after equivalence, and is also acceptable." The bracket spans 23.95 to 24.05 mL; the methyl orange tag is as proposed. Author note (a) and Numbers to verify record the one-drop definition and drop the 23.9 to 24.5 mL window.
- **M1 (crossing precision): applied.** 5c tag "3 s.f.: 0.500 mol/L; crossing read as 8.40 mL"; the Precision decision and author note (d) carry the ±0.1 mL note and accept 8.4 mL with 0.084 mol/L.
- **M2 (Q2 sensitivity): applied.** Author note (b) carries the threshold table; the bracket reads "about 2 mL of extra NH₃"; the grey line keeps "about 0.108". To save length, 3c no longer speaks "at about twenty three point one"; the volume stays on screen.
- **M3 (absolutes): applied.** 5b "almost no ammonia left"; 5d "Equivalence usually falls between readings".
- **M4 (aid limit tag): applied.** Condition tag: "check which solution is the unknown and where it sits; if the error changes another value, follow that value instead". Memory aid check records the limit and that the check confirmed the aid; Codex request (6) adds it to the bank as a draft.
- **M5 (eggshell): applied** (about 91 to 97 %, with the 2021 study) in author note (c) and Numbers to verify.
- **M6 (site correction framing): applied** in Decisions, cross-referenced to C13 correction 3.
- **M7 (key note 2 ratio): applied.**
- Also from the learning review: 3b now says the pH "jumps, but only to about seven" before the buffer, which matches the computed curve (3.1 at 20.5 mL to 7.2 at 21.0 mL). Q4 is now a blue-dyed ammonia solution; the data and answers are unchanged.

Nothing declined. The Codex error check is still required before voicing.
