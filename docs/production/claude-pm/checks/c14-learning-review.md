# C14 learning review (independent, 17 Oct)

Scope and honesty: AI source review by a Claude reviewer who did not author the design, using `docs/production/student-learning-review.md` and the AGENTS.md rules. I read it as a student starting Year 12 who has watched C5, C6a, C6b, C10, C11 and C13 and knows Year 11 moles and molar mass. Inspected: the Revision 1 design text, the neighbouring designs C13, C11 and C6b (recall wording, approved lines), the official NESA HSC Chemistry data sheet (read 17 Oct) and the runtime counter `c14-c15-b9-b10-runtime.py`. No stills, preview, audio or learner evidence. U+2014 search on the revised design: none.

## Main question and useful outcome

*A salt that "barely dissolves" still dissolves a little. How do you calculate how much from its Ksp, and how do you get Ksp from a measured solubility?* Afterwards a student should be able to write the dissolving equation and Ksp expression for 1 : 1 and 1 : 2 salts, set each ion as its count times s, solve for s with a square or cube root, go backwards from a measured value (mol/L or g/L) with the E row first, and explain why Ksp ranks solubility only within one formula type.

## Trace from entry knowledge

- **Why a saturated solution has a K (1 to 3).** C11's equal rates and C5's "solids left out" are recalled in one clause each; "no bottom" follows directly. Followable.
- **Powers and s (4, 5).** Subscript to coefficient to power, then "what one formula unit gives". The cause comes before the term s. Good.
- **Worked examples (6 to 10).** One ICE row or algebra stage per beat, a spoken check in scene 7, the (2s)^2 bracket explained, the trap sized. The task, equation strip and grouped givens stay separate throughout (owner calculation rule).
- **Comparison (11).** The twist the hook promised is paid off with the two s values already computed. Good use of retained results.
- **Backwards (12).** Revision 1 packed the E row, the change, the doubling, the Ksp and the trap into one 622-character scene (about 47 s). Split (finding L2).
- **Attempts (14 to 17).** Both unseen, every condition on screen (Ksp with temperature and ion charges; mass concentration and molar mass), nothing answer-bearing, one crossed mistake each, feedback 22 s and 28 s.

## Findings

| # | sev | where | likely student question or problem | repair | applied |
|---|---|---|---|---|---|
| L1 | blocker | whole video | Owner limit 6 to 10 minutes. Revision 1 measured 6,179 characters, 10.0 minutes at 13.3 characters per second with holds. Splitting scene 12 adds another 2 s. | Scene 9's spoken check made silent (the screen line stays; scene 7 keeps the spoken check as the model), "By the end of this video" cut from the hook, scene 7's milligram link and scene 18's first sentence tightened; scene 4's unspoken line removed (hold 2 s to 1 s). Now 5,986 characters, about 9.8 minutes, two reserve cuts named. | yes |
| L2 | should-fix | 12 | One scene carried five steps. A student still placing the measured value in the E row hears "twice that" and "four times too small" before the first step lands. | Split into 12a (E row first, E minus I) and 12b (double, Ksp, trap), no word changes; the OH- column stays empty until 12b. | yes |
| L3 | should-fix | 1, hook strip | The strip tagged CaF2 "data table", but CaF2 is not on the NESA data sheet; a student checking the sheet would not find it. | Strip tag "Ksp at 25 C" only; only on-sheet values are spoken with "the data table gives". | yes |
| L4 | should-fix | 10 | "About one and a half times too big" while the screen says 1.59. | "About 1.6 times too big". | yes |
| L5 | should-fix | 4 | The unspoken Ag2CrO4 line competed with the CaF2 line during a new idea and used an off-sheet salt. | Removed; the 2 : 1 order is taught in 12b (and attempt 2). | yes |
| L6 | note | 12b | The measured 1.12 x 10^-4 gives 5.62 x 10^-12, while the data sheet prints 5.61. A student comparing might think they erred. | Unspoken grey tag "data sheet: 5.61 x 10^-12 (the measured value is rounded)". | yes |
| N1 | note | recall | C5, C6a, C10, C11 and C13 recalled in one clause each; Ksp re-introduced as a name, not re-derived. No re-teaching. | none | n/a |
| N2 | note | feedback | 15: about 22 s; 17: about 28 s. Answer, reason, one crossed mistake. Feedback 2 keeps "Keep the unrounded s", which prevents a real 1 per cent error. | none | n/a |
| N3 | note | 13 | Memory aid "Each ion is its count times s. Then raise it to that count." comes after the idea, holds for every salt used, and its "pure water" tag sets up C15. Scene 13's thumbnail no longer names Ag2CrO4 (and does not name PbI2, which would hint attempt 1). | done | yes |

## Designer's open questions, decided

- **TTS of "0.0354" (attempt 2 and feedback 2):** keep numerals. C6b's recorded take voiced "0.0099" and "0.00495" without a listening complaint. Check at preview; respell only if misread (author note f).
- **Data sheet (open decision 1):** resolved; see the science check.
- **CaF2 value against the site (open decision 2):** owner note: align the site worktree to 3.45 x 10^-11 (or the site keeps 3.9 and the video says 3.45; method and ranking are identical).
- **Feedback 1 plate (4):** not used. **Ag2CrO4 line (5):** removed.

## Retained successful moves

The ratio-true ion swarm (two fluorides per calcium); the coefficient chip flying into the Change cell; "(2s)^2 = 2s x 2s" with the 2s^2 chip crossed; the log line showing a 20-fold gap the Ksp values hide; the E-row-first arrow and "E - I" bracket recalled from C6a; the milligram payoff of the barium meal.

## Verdict

Pass for recording after Revision 2. Repeat on the exact voiced preview, with attention to scene 8 (the densest algebra), the number reading in attempt 2 and the 9.8-minute total.
