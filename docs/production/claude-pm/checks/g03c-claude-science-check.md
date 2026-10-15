# G03c Claude science check (15 Oct)

Scope: `../lessons/chem-m5-g03c.md`, checked at Revision 1 and rechecked at Revision 2 (question order swapped: iron two oxide is Q1, methanol is Q2). Every number in the narration, the Visual paragraphs, the chips and the author notes was recomputed by script: `g03c-numbers.py` in this folder (Python, standard 298 K data from NIST and CRC tables, R = 8.314 J/(K mol), RT in L bar/mol for Kc). U+2014 search: none.

## Arithmetic (all confirmed)

| Question | Recomputed | In the design |
|---|---|---|
| Q1 FeO(s) + CO ⇌ Fe(s) + CO2, K = 0.50, 2.00 L, 0.600 mol CO | [CO]0 = 0.300; x / (0.300 - x) = 0.50 gives x = 0.100 mol/L; check 0.100 / 0.200 = 0.50; n(Fe) = 0.100 x 2.00 = 0.200 mol; m = 0.200 x 55.85 = 11.17 g; volume forgotten 5.585 g; dropping x gives 0.150, 50 per cent of the start | 11.2 g, 5.6 g, 50 per cent: correct |
| Q2 CO + 2H2 ⇌ CH3OH, 2.00 L | I 0.100, 0.200, 0.200; E(CH3OH) 0.160; C = -0.0400, +0.0400, +0.0800; E 0.140, 0.280, 0.160; bottom 0.010976; K = 14.577; 0.160 / 0.01098 = 14.57; 0.160 / 0.0110 = 14.55; atom balance C 0.300, H 1.20, O 0.300 before and after; start Q = 50.0 > K (runs backwards) | 14.6, aside 14.5, slips 19.84 (coefficient missed) and 3.644 (moles in K): correct |
| Q3 2NOCl ⇌ 2NO + Cl2 (given K = 6.25 x 10^4 for the reverse), 2.00 mol in 4.00 L | flipped K = 1.6 x 10^-5; [NOCl]0 = 0.500; shortcut 4x^3 / 0.250 = 1.6 x 10^-5, so 4x^3 = 4.0 x 10^-6, x^3 = 1.0 x 10^-6, x = 0.0100; 2x / start = 4.0 per cent; n(Cl2) = 0.0400 mol; exact x = 0.0097386, n = 0.03895 mol, shortcut 2.68 per cent high, exact values give K = 1.600 x 10^-5; not flipped: x^3 = 3906.25, x = 15.75 mol/L | 0.0400 mol, tag 0.0390 mol, "about 3% high", 15.7 and "about 16": correct |
| Q4a NO2 + SO2 ⇌ NO + SO3, 5.00 L | 0.0200, 0.0400, 0.180, 0.360; top 0.0648, bottom 0.000800, K = 81.0; moles give 81.0 too (equal gas count) | correct |
| Q4b same K, 0.500 mol each in 2.00 L | start 0.250; root 9.00; x = 2.25 / 10 = 0.225; [NO2] = 0.0250 mol/L; check 0.050625 / 0.000625 = 81.0; negative root 0.28125 > start; expanded 80x^2 - 40.5x + 5.0625 = 0 with roots 0.225 and 0.28125; dropping x gives 2.25 > start | correct |

## Realism of each K (all realistic or labelled)

1. **Q1 FeO + CO, K = 0.50 near 800 C: realistic.** Standard data (delta H -11.0 kJ/mol, delta S -17.4 J/(K mol)) give K = 0.43 at 1073 K; a published fit of the Fe/FeO equilibrium line (log K = 688 / T - 0.90) gives 0.55 at 1073 K and 0.44 at 1273 K, matching the textbook value of about 0.40 near 1000 C. 0.50 at "about 800 C" sits inside that range, and the card tag "K close to the real value near 800 C" is fair. Wüstite (FeO) is the stable oxide in contact with iron above about 570 C, so both solids at 800 C is right. Equal gas count, so Kc = Kp.
2. **Q2 methanol, K = 14.6 from the data near 230 C: realistic.** Standard data (delta H -90.5 kJ/mol, delta S -219.2 J/(K mol)) give Kc = 17.5 at 500 K, 15.5 at 503 K and 14.6 near 505 K (about 232 C), so "about 230 C" is right. The amounts are labelled illustrative. Total pressure at equilibrium is about 24 atm, plausible for methanol synthesis.
3. **Q3 nitrosyl chloride, K = 1.6 x 10^-5: labelled illustrative, and the 35 C issue is real.** Standard data (delta H +77.1 kJ/mol, delta G +41.0 kJ/mol at 298 K, Kc = Kp / RT because the gas count rises by one) give Kc = 2.6 x 10^-9 at 298 K and 7.0 x 10^-9 at 308 K (35 C), so the textbook "1.6 x 10^-5 at 35 C" is wrong by more than three powers of ten. Kc reaches 1.6 x 10^-5 near 420 K (about 150 C). The design's "at a certain temperature" with the chip "illustrative value" is the honest choice; do not add 35 C. The given reverse K, 6.25 x 10^4, is exactly 1 / 1.6 x 10^-5. At 150 C, 0.500 mol/L NOCl is about 17 atm, a gas at that temperature; illustrative either way.
4. **Q4 NO2 + SO2, K = 81.0 from the data at 460 C: realistic.** Standard data (delta H -41.9 kJ/mol, delta S -20.7 J/(K mol)) give K = 79.6 at 733 K; the common textbook value is 85.0 at 460 C. Equal gas count, so Kc = Kp.

## Method and wording findings

1. **Rearranging (owner rule): fixed in Revision 2.** Scene 12 said "Dividing by 0.250 is multiplying by four, so sixteen x cubed equals 1.6 times ten to the minus five." The arithmetic was right, but the owner rule bans number tricks. Now: multiply both sides by the bottom (0.250), 4x^3 = 4.0 x 10^-6, then divide by four, x^3 = 1.0 x 10^-6. Scenes 4 and 18 now say the same move. Values unchanged.
2. **Flipping K: wording fixed.** K belongs to the equation as written, not to the direction a mixture runs. Revision 1 linked the flip to the vessel "splitting". Now scene 11 rewrites the equation the way the vessel runs and flips K with it, and says that Q2, which also runs backwards, keeps its K because its equation is kept. Both routes give x = 0.0100 (checked: [NOCl]^2 / ([NO]^2 [Cl2]) = 6.25 x 10^4 with the same table is the same equation).
3. **Quadratic line: fixed.** Scene 17 now uses the owner wording, "You can use it if you like, but HSC questions are written so you shouldn't need it." No question needs it: Q1 is linear, Q2 and Q4a give equilibrium values, Q3 has a tiny K that passes the check, Q4b is a perfect square.
4. **5 per cent check on the right amount.** NOCl loses 2x, so the check is 2x / 0.500 = 4 per cent; the crossed chip "x / 0.500 = 2%" is correctly labelled the wrong amount.
5. **K without units.** Every K line carries "K: no unit written"; no unit appears in learner copy. (Strictly, Kc for Q2 and Q3 would carry a unit; HSC convention omits it, consistent with C5 and C6a.)
6. **Convert back.** The 1 : 1 Fe : CO2 ratio is stated before the moles are equated; the molar mass 55.85 g/mol matches the HSC data sheet.
7. **No marks, no rate-constant algebra.** None in learner copy (in the design, "mark" appears only in author notes and as "marker" or "tick mark" in Visual paragraphs). "Pause here to answer." after all five questions, each with a 10 s countdown.
8. **Author note (c) and (d) values updated** to the recomputed numbers (0.43 and 0.55 for FeO; about 10^-8 at 35 C confirmed as 7.0 x 10^-9).

## Count

0 arithmetic errors. 3 method or wording findings (1 to 3), all fixed. 0 UNVERIFIED in learner copy.

## Resolution

All findings are applied in Revision 2 of the design (scenes 4, 11, 12, 13, 17, 18 and the author notes). Every number in the learner copy is unchanged except the scene 12 working line (16x^3 removed; 4x^3 = 4.0 x 10^-6 added) and the scene 13 crossed chip (now 4x^3 = 6.25 x 10^4 x 0.250, x = 15.7). The question order swap changes no number. Codex error-only check welcome before render.

## Split note (16 Oct)

Revision 3 splits the set for length: G03c keeps questions 1 and 2 (numbers unchanged); questions 3, 4a and 4b move to G03d with this check carried into `g03d-claude-science-check.md`. The new G03c hook and decision board add no numbers. Details: `g03cd-split-notes.md`.
