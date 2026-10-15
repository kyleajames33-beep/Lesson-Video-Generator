# G03d Claude science check (carried over from G03c, 15 Oct; split note 16 Oct)

**Split note (16 Oct).** G03d is part 2 of the G03c practice set, split for length (`g03cd-split-notes.md`). Questions 3, 4a and 4b keep the G03c Revision 2 narration and on-screen numbers exactly, so the G03c science check applies; the parts covering those questions are copied below from `g03c-claude-science-check.md`. The two new scenes (hook and decision board) add no number except "5 per cent" and "two x", both checked below. Numbers were recomputed by `g03c-numbers.py` in this folder. U+2014 search: none.

## Arithmetic (all confirmed)

| Question | Recomputed | In the design |
|---|---|---|
| Q3 2NOCl ⇌ 2NO + Cl2 (given K = 6.25 x 10^4 for the reverse), 2.00 mol in 4.00 L | flipped K = 1.6 x 10^-5; [NOCl]0 = 0.500; shortcut 4x^3 / 0.250 = 1.6 x 10^-5, so 4x^3 = 4.0 x 10^-6, x^3 = 1.0 x 10^-6, x = 0.0100; 2x / start = 4.0 per cent; n(Cl2) = 0.0400 mol; exact x = 0.0097386, n = 0.03895 mol, shortcut 2.68 per cent high, exact values give K = 1.600 x 10^-5; not flipped: x^3 = 3906.25, x = 15.75 mol/L | 0.0400 mol, tag 0.0390 mol, "about 3% high", 15.7 and "about 16": correct |
| Q4a NO2 + SO2 ⇌ NO + SO3, 5.00 L | 0.0200, 0.0400, 0.180, 0.360; top 0.0648, bottom 0.000800, K = 81.0; moles give 81.0 too (equal gas count) | correct |
| Q4b same K, 0.500 mol each in 2.00 L | start 0.250; root 9.00; x = 2.25 / 10 = 0.225; [NO2] = 0.0250 mol/L; check 0.050625 / 0.000625 = 81.0; negative root 0.28125 > start; expanded 80x^2 - 40.5x + 5.0625 = 0 with roots 0.225 and 0.28125; dropping x gives 2.25 > start | correct |
| New hook and decision board | "the 5 per cent check goes on the amount actually taken off the start, which here is two x": NOCl changes by -2x (coefficient 2), so the amount taken off is 2x | correct |

## Realism of each K

1. **Q3 nitrosyl chloride, K = 1.6 x 10^-5: labelled illustrative.** Standard data (delta H +77.1 kJ/mol, delta G +41.0 kJ/mol at 298 K, Kc = Kp / RT because the gas count rises by one) give Kc = 2.6 x 10^-9 at 298 K and 7.0 x 10^-9 at 308 K (35 C), so the textbook "1.6 x 10^-5 at 35 C" is wrong by more than three powers of ten. Kc reaches 1.6 x 10^-5 near 420 K (about 150 C). The design's "at a certain temperature" with the chip "illustrative value" is the honest choice. The given reverse K, 6.25 x 10^4, is exactly 1 / 1.6 x 10^-5.
2. **Q4 NO2 + SO2, K = 81.0 from the data at 460 C: realistic.** Standard data (delta H -41.9 kJ/mol, delta S -20.7 J/(K mol)) give K = 79.6 at 733 K; the common textbook value is 85.0 at 460 C. Equal gas count, so Kc = Kp.

## Method and wording findings (applied in G03c Revision 2, kept)

1. **Rearranging (owner rule).** The Q3 working says multiply both sides by the bottom (0.250), 4x^3 = 4.0 x 10^-6, then divide by four, x^3 = 1.0 x 10^-6. Q4b says the same move.
2. **Flipping K.** K belongs to the equation as written, not to the direction a mixture runs. Scene 2b rewrites the equation the way the vessel runs and flips K with it, and says that Q2 (part 1), which also runs backwards, keeps its K because its equation is kept. Both routes give x = 0.0100.
3. **Quadratic line.** Scene 4b uses the owner wording, "You can use it if you like, but HSC questions are written so you shouldn't need it." No part 2 question needs it: Q3 has a tiny K that passes the check, Q4a gives equilibrium values, Q4b is a perfect square.
4. **5 per cent check on the right amount.** NOCl loses 2x, so the check is 2x / 0.500 = 4 per cent; the crossed chip "x / 0.500 = 2%" is correctly labelled the wrong amount. The new hook states the same rule.
5. **K without units.** Every K line carries "K: no unit written". (Strictly, Kc for Q3 would carry a unit; HSC convention omits it, consistent with C5 and C6a.)
6. **No marks, no rate-constant algebra.** None in learner copy. "Pause here to answer." after all three part 2 questions, each with a 10 s countdown.

## Count

0 arithmetic errors. Method and wording findings 1 to 4 were fixed in G03c Revision 2 and are unchanged here. 0 UNVERIFIED in learner copy.

## Resolution

All findings are applied (G03c Revision 2, carried into G03d Revision 3 verbatim). The split adds two scenes with no new numbers beyond the 2x check, confirmed above. Codex error-only check welcome before render.
