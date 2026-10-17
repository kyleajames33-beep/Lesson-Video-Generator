# C14 Claude science check (17 Oct)

Scope: every number, expression and claim in `lessons/chem-m5-c14.md` (Revision 1, re-checked against Revision 2). Arithmetic recomputed by `c14-c15-b9-b10-numbers.py` in this folder. U+2014 search: none.

## Data sheet (blocking item)

Source: the official NESA HSC Chemistry "Formulae sheet, data sheet and periodic table" (HSC examinations 2019 onward), downloaded 17 Oct from https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/chemistry-hsc-formula-sheet (file `chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf`). The table "Solubility constants at 25°C" is on page 1. The PDF text is outlined, so the page was rendered to an image and read directly.

| Compound | Design value | NESA sheet | Result |
|---|---|---|---|
| BaSO4 | 1.08 x 10^-10 | 1.08 x 10^-10 | match |
| Mg(OH)2 | 5.61 x 10^-12 | 5.61 x 10^-12 | match |
| PbI2 | 9.8 x 10^-9 | 9.8 x 10^-9 | match |
| Ag2CO3 | 8.46 x 10^-12 | 8.46 x 10^-12 | match |
| AgCl | 1.77 x 10^-10 | 1.77 x 10^-10 | match |
| CaF2 | 3.45 x 10^-11 | not on the sheet | CRC 84th ed. value (reputable); kept |
| Ag2CrO4 | 1.12 x 10^-12 (unspoken line) | not on the sheet | line removed in Revision 2 |

No dependent number needed recomputing. **CaF2 swap considered:** the on-sheet 1 : 2 salts that keep the scene 11 twist against BaSO4 (smaller Ksp, larger s) are only Mg(OH)2 (s = 1.12 x 10^-4) and Ag2CO3 (s = 1.28 x 10^-4); both already carry the reverse example and attempt 2. Ca(OH)2, PbBr2 and PbCl2 have larger Ksp than BaSO4, and Fe(OH)2, Cu(OH)2 and Pb(OH)2 are also less soluble than BaSO4, so none keeps the twist. A swap therefore does not "cost nothing" and would break site alignment (site lesson 17 uses CaF2). Kept.

## Numbers (all confirmed by script)

| Item | Recomputed | Design | Result |
|---|---|---|---|
| BaSO4 s = √(1.08 x 10^-10) | 1.039 x 10^-5 | 1.04 x 10^-5 | correct |
| check (1.04 x 10^-5)^2 | 1.082 x 10^-10 | "1.08" | correct |
| mass: M = 233.39; s x M | 2.425 x 10^-3 g/L (233 g/mol: 2.423) | "about 2.4 mg per litre" | correct |
| CaF2 s^3 = Ksp / 4 | 8.625 x 10^-12 | 8.63 | correct |
| CaF2 s; [F-] | 2.051 x 10^-4; 4.102 x 10^-4 | 2.05; 4.10 | correct |
| check 4(2.05 x 10^-4)^3 | 3.446 x 10^-11 | "3.45" (screen) | correct |
| s-for-2s trap ∛Ksp; ratio | 3.255 x 10^-4; 1.587 | 3.26; "about 1.6" (Rev 2), screen 1.59 | correct |
| (2s)^2 = 2s^2 trap (author only) | 2.584 x 10^-4 | 2.58 | correct |
| s(CaF2) / s(BaSO4) | 19.73 | "about twenty" | correct |
| AgCl vs BaSO4 (both 1 : 1) | 1.77 > 1.08, so AgCl more soluble (s 1.33 x 10^-5) | rule card | correct |
| Mg(OH)2 from 1.12 x 10^-4 | [OH-] 2.24 x 10^-4; Ksp 5.62 x 10^-12 (sheet 5.61; exact s for 5.61 is 1.1195 x 10^-4) | 5.62, unspoken sheet tag | correct; tag added |
| Mg(OH)2 forgot to double | 1.405 x 10^-12; ratio exactly 4 | 1.40; "four times too small" | correct |
| PbI2 s^3; s | 2.45 x 10^-9; 1.348 x 10^-3 | 2.45; 1.35 | correct |
| PbI2 trap ∛Ksp | 2.14 x 10^-3 | 2.14 | correct |
| Ag2CO3 M | 275.75 g/mol | 275.8 | correct |
| Ag2CO3 s = 0.0354 / 275.8 | 1.2835 x 10^-4 | 1.28 | correct |
| [Ag+] = 2s; Ksp = 4s^3 | 2.567 x 10^-4; 8.458 x 10^-12 | 2.57; 8.46 (= sheet) | correct |
| from rounded s 1.28 x 10^-4 | 8.389 x 10^-12 | author note g | correct |
| sheet Ksp back to g/L | 0.0354 g/L | 0.0354 | consistent |

## Claims

- Ksp has no denominator because the solid is left out; coefficients become powers; no unit written; changes only with temperature. Correct at HSC level.
- "A saturated solution holds as much as it can at that temperature" with solid present; dissolving and crystallising at equal rates. Correct.
- "Compare Ksp directly only for the same formula type." Correct (same temperature).
- Barium meal: so little BaSO4 dissolves that it is safe; recall of C13. Correct.
- Assumptions (pure water, full dissociation, no ion hydrolysis, activities as concentrations) are standard HSC assumptions and kept in author notes; the "pure water" tag is on screen. Correct handling under the AGENTS caveat rule.
- ICE letters: I for initial, C for change, E for equilibrium; the measured value goes into the E row first (12a, feedback 2). Owner rule met. General algebra moves only (square root of both sides; divide both sides by four, then cube root). No quadratic. Ksp without units.

## Count

0 numerical errors. 0 data sheet mismatches. 1 off-sheet value kept with reason (CaF2), 1 off-sheet unspoken line removed (Ag2CrO4). 2 wording findings (hook "data table" tag on an off-sheet value; "one and a half" for 1.59), 1 note (5.62 against the sheet's 5.61).

## Resolution

All findings are applied in Revision 2 of `lessons/chem-m5-c14.md`: hook strip tagged "Ksp at 25 C" only; scene 10 says "about 1.6 times"; scene 12b carries the unspoken "data sheet: 5.61 x 10^-12" tag; the Ag2CrO4 line is removed; the reference-table decision now cites the official data sheet. Owner note: the site's lesson 17 CaF2 value (3.9 x 10^-11) should be aligned to 3.45 x 10^-11 in the site worktree. Science is cleared for voicing.
