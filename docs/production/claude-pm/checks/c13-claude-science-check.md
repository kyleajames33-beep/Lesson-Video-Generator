# C13 Claude science check (17 Oct)

Scope: every equation, rule and fact in `lessons/chem-m5-c13.md` (Revision 1, re-checked against Revision 2), including the reserve item. Atom and charge balances recomputed by `c11-c13-b7-b8-numbers.py` in this folder. Web checks on 17 Oct: barium hydroxide solubility (Wikipedia solubility table, octahydrate about 3.9 g per 100 mL at 20 C; supplier sheets about 72 g/L); Ksp values from the LibreTexts CK-12 table cited in the pre-design pack. U+2014 search: none.

## Equations (all confirmed by script)

| Equation | Atoms | Net ionic | Charge |
|---|---|---|---|
| KCl + AgNO3 → AgCl(s) + KNO3 | K 1, Cl 1, Ag 1, N 1, O 3 each side | Ag+ + Cl- → AgCl(s) | 0 = 0 |
| 2KI + Pb(NO3)2 → PbI2(s) + 2KNO3 | K 2, I 2, Pb 1, N 2, O 6 | Pb2+ + 2I- → PbI2(s) | 0 = 0 |
| Na2SO4 + Ba(NO3)2 → BaSO4(s) + 2NaNO3 | Na 2, S 1, O 10, Ba 1, N 2 | Ba2+ + SO4 2- → BaSO4(s) | 0 = 0 |
| CuSO4 + 2NaOH → Cu(OH)2(s) + Na2SO4 | Cu 1, S 1, O 6, Na 2, H 2 | Cu2+ + 2OH- → Cu(OH)2(s) | 0 = 0 |
| AgNO3 + NaCl → AgCl(s) + NaNO3 (attempt 2) | 1 : 1 | Ag+ + Cl- → AgCl(s) | 0 = 0 |
| KNO3 + NaCl (scene 12) | balanced; all products soluble | none | n/a |
| Reserve item: Mg(NO3)2 + 2NaOH → Mg(OH)2(s) + 2NaNO3 | Mg 1, N 2, O 8, Na 2, H 2 | Mg2+ + 2OH- → Mg(OH)2(s) | 0 = 0 |

## Rules and exceptions used

1. Nitrates, ammonium and Group 1 compounds: soluble. Correct (no common exceptions at this level).
2. Sulfates soluble except BaSO4, PbSO4 (insoluble), CaSO4 and Ag2SO4 (slightly). Correct (SrSO4 also low; not mentioned, fine).
3. Acetates soluble. Correct as a rule (silver acetate only moderately soluble; author note).
4. Chloride, bromide, iodide soluble except Ag+ and Pb2+; PbCl2 only slightly soluble (footnote). Correct: Ksp PbCl2 1.7 x 10^-5 against PbI2 7.1 x 10^-9; ideal molar solubility of PbCl2 0.016 mol/L (4.5 g/L; measured about 10 g/L because of non-ideal effects), and more soluble in hot water.
5. Carbonates, phosphates, hydroxides, sulfides mostly insoluble except with Group 1 and NH4+; Ba(OH)2 soluble, Ca(OH)2 slightly. Correct as an HSC rule set. "Ammonium hydroxide" is not shown on the card (author note a). The spoken "unless it's paired with a Group 1 ion or ammonium" is true for carbonates, phosphates and sulfides and is the usual school wording.
6. **Grid colours (finding):** Revision 1 drew only white or yellow dots. Real well-plate results: AgCl, BaSO4, PbSO4, CaCO3, BaCO3, PbCO3, Pb(OH)2, PbCl2 white; AgI pale yellow; PbI2 bright yellow; Ag2CO3 pale yellow; silver with hydroxide gives brown Ag2O; CaSO4, Ag2SO4 and Ca(OH)2 slight at about 0.05 mol/L each after mixing (PbCl2 Q about 1.3 x 10^-4 > Ksp, so a white solid can form). Applied in Revision 2 (author note i).

## Colours and facts

- AgCl white (curdy, darkens in light); PbI2 bright yellow; BaSO4 white (fine); Cu(OH)2 pale blue; Mg(OH)2 white. Correct.
- **Ba(OH)2 solubility:** about 3.9 g per 100 mL at 20 C (octahydrate, one table; supplier sheets give about 72 g/L). The design's "about 39 g/L, about 0.2 mol/L" is the low end, which is the cautious case. Mixing 0.10 mol/L solutions 1 : 1 gives [Ba2+] = [OH-] = 0.05, Q = 1.25 x 10^-4, far below the solubility (Ksp of Ba(OH)2 is of order 10^-3 to 10^-2), so no precipitate. Mg(OH)2 (Ksp 5.6 x 10^-12) precipitates under the same conditions. Both reserve-item answers are valid. A faint BaCO3 cloud from air CO2 is possible (author note e).
- **Excess chloride (attempt 2):** with [Cl-] = 0.10 mol/L, [Ag+] = 1.8 x 10^-10 / 0.10 = 1.8 x 10^-9 mol/L, so "essentially all in the solid" is correct; the trace is a C14/C15 question.
- **Barium meal:** barium sulfate suspension is swallowed as a contrast agent for X-ray imaging of the gut; soluble barium compounds are toxic; BaSO4 is used because so little dissolves and it is not absorbed. Correct. Finding: "passes straight through" was replaced by "passes through the gut without being absorbed" to state the reason. Applied.
- **"Same net equation wherever the ions came from":** correct for any soluble chloride and soluble silver salt.
- Scene 3 description ("attract each other more strongly than water can keep them apart") is a qualitative description consistent with C11's energy picture; no false prediction rule is stated.

## Count

0 balance or charge errors. 2 findings (grid colours; barium meal reason), both applied. 0 UNVERIFIED claims in learner copy. The runtime finding (185 words per minute against a measured 13.3 characters per second) is recorded in `c13-learning-review.md` L1.

## Resolution

All findings are applied in Revision 2 of `lessons/chem-m5-c13.md` (author note i, scene 11). The two-answer item is scientifically sound and kept as a reserve item; it is not voiced in this video. Codex error-only check welcome before voicing.
