# C15 Claude science check (17 Oct)

Scope: every number, conclusion and claim in `lessons/chem-m5-c15.md` (Revision 1, re-checked against Revision 2). Arithmetic recomputed by `c14-c15-b9-b10-numbers.py` in this folder. U+2014 search: none.

## Data sheet (blocking item)

Source: the official NESA HSC Chemistry data sheet, "Solubility constants at 25°C" (HSC examinations 2019 onward; nsw.gov.au file `chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf`, page 1, read 17 Oct as a rendered image).

| Compound | Design value | NESA sheet | Result |
|---|---|---|---|
| CaSO4 | 4.93 x 10^-5 | 4.93 x 10^-5 | match |
| PbSO4 | 2.53 x 10^-8 | 2.53 x 10^-8 | match |
| AgCl | 1.77 x 10^-10 | 1.77 x 10^-10 | match |
| PbI2 | 9.8 x 10^-9 | 9.8 x 10^-9 | match |
| CaC2O4·H2O (author note only) | 2.32 x 10^-9 | not on the sheet | not shown; fine |

No dependent number changes. All three conclusions survive the sheet values.

## Numbers (all confirmed by script)

| Item | Recomputed | Design | Result |
|---|---|---|---|
| CaSO4, equal volumes of 0.010 mol/L | 0.0050 each; Qsp 2.5 x 10^-5 < 4.93 x 10^-5 | no precipitate | correct |
| CaSO4 undiluted | 1.0 x 10^-4 > Ksp; 4 x 2.5 x 10^-5 | "four times too big", wrong "precipitate" | correct |
| PbSO4 moles | n(Pb2+) 1.0 x 10^-4; n(SO4 2-) 1.5 x 10^-5; V 0.100 L | same | correct |
| PbSO4 concentrations; Qsp | 1.0 x 10^-3; 1.5 x 10^-4; 1.5 x 10^-7 | same | correct |
| Qsp / Ksp | 5.93 | "about six" | correct |
| AgCl in 0.10 mol/L Cl- | approx 1.77 x 10^-9; exact 1.7699999660 x 10^-9 | 1.77 x 10^-9 | correct |
| s / 0.10 | 1.77 x 10^-6 per cent | "0.000002%" | correct |
| s in water; ratio | 1.330 x 10^-5; 7,516 | "about seven and a half thousand" | correct |
| Attempt 1 moles | 2.0 x 10^-5 Pb2+, 6.0 x 10^-5 I-; V 0.0500 L | same | correct |
| Attempt 1 concentrations; Qsp | 4.0 x 10^-4; 1.2 x 10^-3; 5.76 x 10^-10 < 9.8 x 10^-9 | "5.8", no precipitate | correct |
| Attempt 1 unsquared | 4.8 x 10^-7 > Ksp | crossed "precipitate" | correct |
| Attempt 1 undiluted (author note g) | 4.0 x 10^-9, also below Ksp | same | correct |

## Claims

- Qsp uses the Ksp expression with current concentrations and the same powers; Qsp > Ksp precipitate until Qsp = Ksp; equal, saturated; below, no precipitate. Correct (HSC convention; author note b on supersaturation is accurate).
- Mixing: each ion spreads into the combined volume; moles are unchanged. Correct.
- Common ion: raises Qsp above Ksp, solid forms, equilibrium shifts left, less dissolved, Ksp unchanged (only temperature changes it). Correct.
- Kidney stones: mostly calcium oxalate; urine contains both ions and is often supersaturated, yet stones form only in some people (nucleation, inhibitors). "A stone can start to form when ... Qsp past Ksp" does not overclaim. Correct.
- PbSO4 is white; CaSO4 "slightly soluble" in the C13 rules. Correct.
- **Key note 3 (finding):** "Skipping this makes a 1 : 1 Qsp four times too big" holds only for equal volumes (each concentration halves). For 25.0 + 75.0 mL the factors are 4 and 4/3. Fixed in Revision 2 by tying it to equal volumes.
- **Scene 11 (finding, learning):** "In pure water, s was 1.33 x 10^-5" referred to a value not computed in C14. Science is right (√1.77 x 10^-10 = 1.33 x 10^-5); wording fixed.
- Owner rules: ICE letters, non-zero initial row; general moves; the approved quadratic line verbatim and only where a quadratic would arise (s(0.10 + s) = Ksp); Ksp and Qsp without units. Met.

## Count

0 numerical errors. 0 data sheet mismatches. 1 science wording finding (key note 3 scope), 1 recall wording finding (scene 11), both applied.

## Resolution

All findings are applied in Revision 2 of `lessons/chem-m5-c15.md`: key note 3 now limits "four times too big" to equal volumes; scene 11b says "s would be the square root of Ksp"; worked example 1 uses 0.010 and 0.0050 mol/L (values and conclusion unchanged); the reference-table decision cites the official data sheet. Science is cleared for voicing.
