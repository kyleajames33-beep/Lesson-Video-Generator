# C4b science check (Claude, independent)

Checked `lessons/chem-m5-c04b.md`, Revision 3: all quoted narration, Visual text, key notes and memory aid, against `site-extracts/chem-m5-l06.md` and the NSW 2017 Stage 6 Chemistry syllabus (Module 5). No stills exist, so no screen checks. The rate model was integrated numerically (scipy, rtol 1e-10): forward = 0.05[H2][I2], reverse = (0.05/49)[HI]^2, start 9, 9, 0; the catalysed run multiplies both rates by 10.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | 4a: "At about twelve on the clock they meet at a fifth of a unit per tick, and the mixture settles at two units of hydrogen, two of iodine and fourteen"; stage table "A settled (2, 2, 14, 0.2, 0.2, about 12)"; author note (d) "within a few per cent" | At clock 12 the model gives H2 = I2 = 2.146 (7.3% above 2) and HI = 13.708 (2.1% below 14); forward rate 0.05 x 2.146^2 = 0.230, reverse (0.05/49) x 13.708^2 = 0.192. The rates have not met at 12 and I2 is not within 5%. Within 5% is reached at 13.4 (A) and 1.34 (B); within 2% at 17.0 and 1.70. | Say "about thirteen" and "13 / 10 = 1.3", or define settles as within 10%; say the rates are "nearly equal, close to a fifth" and keep the "near enough" chip on the table row. The tenfold scaling itself is exact (B(t) = A(10t), so B(1.2) = A(12)). |
| 2 | science | 8, 9a, 9b (attempt system): two rigid sealed vessels "at the same steady temperature", A without iron, "which vessel settles first" | Uncatalysed gas-phase N2 + H2 is negligibly slow at any temperature where ammonia is favoured (N-N bond 945 kJ/mol, [RSC Faraday Discussions](https://pubs.rsc.org/cs/content/getauthorversionpdf/D3FD00070B)), and vessel walls act as weak catalysts, so "A forms measurable ammonia and settles" cannot be said plainly. No source found giving an uncatalysed gas-phase rate (UNVERIFIED as a number). | Set the item in a system with measurable uncatalysed change (for example HI decomposition with and without a metal), or keep Haber but present it as an idealised comparison ("however long A takes") and avoid implying A settles in a practical time. |
| 3 | science | Hook, 2b and the whole worked example: H2 + I2 with platinum at the C4a temperature | Platinum catalysing HI decomposition is textbook (uncatalysed 183, gold 105, platinum 58 kJ/mol, [Doc Brown](https://www.docbrown.info/page03/ASA2rates1a.htm)) and microscopic reversibility makes it catalyse H2 + I2 forming HI. I found no source for H2 + I2 over Pt near 450 C, and adsorbed iodine is reported to block H2 adsorption on Pt/Al2O3 ([study](https://esac.jejunu.ac.kr/data/3b94b521-dfce-4931-9934-a19a217de179)). UNVERIFIED. | Acceptable as a teaching model if author note (a) stays and no measured factor is claimed. |

## Verified, no error

- K near 450 C: 14^2 / (2 x 2) = 196 / 4 = 49. Textbook Kc is 50.5 at 448 C ([thermodynamics tutorial](https://vsc.science.ru.nl/hugom/Thermo/werkcollege/tutorial_3.pdf)). Close.
- Rates: start 0.05 x 9 x 9 = 4.05 ("about four"); settled 0.05 x 2 x 2 = 0.2 and (0.05/49) x 14^2 = 0.2; ten times is 2 and 2. Correct.
- Early cut: at clock 3, HI = 10.129 (A) and 13.997 (B). "About ten" and "fourteen" correct. B(3) = A(30) exactly (13.997 both).
- Activation energies appear only in the author note ("roughly 184 and 59"). Sources give uncatalysed 183 ([Doc Brown](https://www.docbrown.info/page03/ASA2rates1a.htm)) to 186, Pt 58. UNVERIFIED that the exact pair 184/59 sits in one table (Atkins likely); harmless as "roughly", not in learner copy.
- "Same factor in both directions": scoped correctly. For one barrier, lowering it by the same height multiplies both rate constants by exp(dE/RT). Factor ten at 723 K needs dE = RT ln 10 = 8.314 x 723 x 2.303 = 13.8 kJ/mol; the real drop (about 125 kJ/mol) is far larger, and note (c) says "we use ten".
- Heat of reaction as the valley gap, and "the reaction that takes in heat has the higher ridge": Ea(forward) - Ea(reverse) = dH for a single barrier. Correct. Real H2 + I2 is only about -10 kJ/mol, so the "one fifth" gap is a drawing, not a value.
- Equal-count squeeze raising both rates four times: halving volume doubles each concentration, forward 2 x 2 = 4, reverse 2^2 = 4. Correct. Unequal counts give different factors. Correct.
- Catalyst at equilibrium: both rates scale together, no shift. Correct. Haber equation and iron as the catalyst correct.
- Memory aid, key notes, 9a and 9b models: no false statement.
- Copy: no U+2014; no "supplied", "production route" or filler "model" in learner text.

Count: 3 findings (1 numeric, 1 attempt-system, 1 UNVERIFIED). UNVERIFIED: Pt over H2 + I2 near 450 C as a strong catalyst; an uncatalysed Haber vessel that settles at a steady temperature; the exact 184/59 pair.

## Resolution (Claude science check)

Applied to `lessons/chem-m5-c04b.md`, now Revision 4 (Claude science check resolved; ready to voice). Claude decisions as given by the coordinator.

| # | Finding | Resolution |
| --- | --- | --- |
| 1 | "About twelve" is wrong: at clock 12 the rates have not met and I2 is 7.3% above 2 | Everywhere (4a and 4b narration, dial, graph lines, table rows, chips, Numbers, teaching checks): settles at "about thirteen" for tube A and "about 1.3" for tube B, with "13 / 10 = 1.3" under the B line. "Settles" keeps its meaning of within about 5 per cent of the way to the final values (clock 13.4 and 1.34). 4a now says the rates are "nearly equal, close to a fifth of a unit per tick"; the settled table rows read "about 2, about 2, about 14, close to 0.2 and 0.2" with the "near enough" chip. |
| 2 | Uncatalysed Haber vessel cannot be said to settle in a practical time | Haber kept as an idealised comparison. Scene 8 now says "Imagine both are left long enough to settle; without a catalyst that takes an extremely long time." The board carries the same tag, 9a adds "however long vessel A takes", and the Codex pending item is replaced by this resolution. |
| 3 | Platinum over H2 + I2 unverified | Learner narration and visuals say "a metal catalyst" (or "the catalyst", "the metal"); the asset brief is renamed `c4b-metal-catalyst-v1.png`. Platinum survives only in author note (a), which keeps the teaching-model explanation, mentions the adsorbed-iodine caveat, and gives 184 and 59 kJ/mol only as "roughly" values. |

Narration recounted by script after the edits: 1,229 words, about 6.6 minutes, about 9.2 minutes in total. No U+2014.


## Codex check resolution (13 Oct, Claude)

Codex `checks/c4b-check.md` (3 findings), resolved without re-recording:

1. "Both ridges lowered by the same height" and "both rates rise by the same factor". Kept. This is the standard Stage 6 statement for a catalyst (one catalysed pathway, unchanged heat of reaction, so the forward and reverse activation energies fall by the same amount). The video teaches it on the illustrated rate law, and the at-equilibrium claim (rates stay equal, nothing shifts) holds in general by microscopic reversibility. The surface-mechanism caveat stays in author notes; adding it to learner copy would not change any HSC answer and would add load.
2. Settle-time definition. Author note only, corrected in the design ("H2 and I2 within about 5 per cent of their final concentrations"). Nothing on screen or spoken uses the percentage.
3. Rate axis "H2 used per tick". The built scenes already label every shared rate axis "rate (units per tick)"; the design's visual line is now corrected to match. The narration's "hydrogen used per tick" describes only the forward rate, which is correct.
