# C15 learning review (independent, 17 Oct)

Scope and honesty: AI source review by a Claude reviewer who did not author the design, using `docs/production/student-learning-review.md` and the AGENTS.md rules. I read it as a student starting Year 12 who has watched C14, C8, G03a, C13, C6b, C3 and C4 and knows n = cV. Inspected: the Revision 1 design text, C14 (Revision 2), C6b (the approved quadratic line and recorded number forms), the official NESA data sheet (read 17 Oct) and the runtime counter. No stills, preview, audio or learner evidence. U+2014 search on the revised design: none.

## Main question and useful outcome

*When two solutions are mixed, how can you predict whether a precipitate will form, and why does adding an ion that's already there make a salt less soluble?* Afterwards a student should be able to find each ion's concentration after mixing (moles over total volume), write Qsp with the Ksp powers, compare with a data-sheet Ksp and state a justified prediction, explain the common ion effect with Ksp unchanged, and calculate a 1 : 1 salt's solubility in a common-ion solution with the 5 per cent check.

## Trace from entry knowledge

- **Why "insoluble" ions can coexist (1).** The kidney-stone hook sets a real question without overclaiming (author note a).
- **Qsp and the decision (2, 3).** Q against K is recalled in one clause; the same powers are shown with a crossed unpowered chip; "until Qsp falls back to Ksp" gives the cause of the precipitate. Good.
- **Dilution (4 to 8).** The ion-spreading lens explains why concentrations fall before any number; the CaSO4 example is chosen so that skipping dilution flips the answer, which makes the step matter. Unequal volumes go through moles one line per beat.
- **Common ion (10, 11).** Scene 10 explains the effect as Qsp exceeding Ksp before 11 calculates it; the non-zero initial row is the one new thing in the ICE table. The approved quadratic line appears where a quadratic would arise.
- **Attempts (12 to 15).** Unseen, every condition visible, nothing answer-bearing, one crossed mistake each.

## Findings

| # | sev | where | likely student question or problem | repair | applied |
|---|---|---|---|---|---|
| L1 | should-fix | 11 (now 11b) | "In pure water, s was 1.33 times ten to the minus five": C14 never calculated AgCl's solubility (AgCl appeared only on a rule card), so the student asks "when was it?" | "In pure water, s would be the square root of Ksp, 1.33 times ten to the minus five"; a side line shows √(1.77 x 10^-10). | yes |
| L2 | should-fix | 11 | 693 characters (about 52 s) in one scene: ICE with a non-zero start, the drop, the quadratic line, the solve, the check and the comparison. | Split into 11a (ICE, drop, quadratic line) and 11b (solve, check, compare), words unchanged except L1. | yes |
| L3 | should-fix | 5, 6 (TTS) | "0.0100" and "0.00500" with trailing zeros are likely to be read oddly, and the answer carries only two figures. | Screen and speech use 0.010 and 0.0050 (same values; C6b's recorded take already voiced "0.010" and "0.0050"). | yes |
| L4 | should-fix | 13, feedback 1 | 397 characters, about 30 s plus padding: at the top of the brief-feedback rule. | Dropped "The total volume is 50.0 millilitres." (screen shows "V total = 0.0500 L"); "over the total 0.0500 litres". About 28 s. | yes |
| L5 | should-fix | key note 3 | "Skipping this makes a 1 : 1 Qsp four times too big" is true only for equal volumes; a student would apply it to unequal mixes. | Folded into the equal-volumes bracket. | yes |
| N1 | note | 10 | Le Chatelier is recalled in one clause, after the Qsp cause; the Ksp lock chip and crossed "added Cl- changes Ksp" block the classic error. | none | n/a |
| N2 | note | attempts | A1 (unequal volumes, squared iodide) and A2 (common ion, two demands) test different halves of the video. Feedback 28 s and 18 s. | none | n/a |
| N3 | note | owner rules | ICE letters spoken once; non-zero initial row; general moves ("moles = concentration times volume, then divide by the total volume"; "divide both sides by 0.10"); Ksp and Qsp without units; approved quadratic line verbatim ("You can use it if you like, but HSC questions are written so you shouldn't need it."). | none | n/a |

## Designer's open questions, decided

- **TTS of "0.0100" and "0.00500":** decided as L3 (0.010 and 0.0050 on screen and in speech). Check at preview.
- **Common ion scope (open decision 2):** keep in this video. It is the site's lesson 18 content, it depends directly on the Qsp rule taught minutes earlier, and with the split it runs one stage per scene. Runtime about 9.3 minutes.
- **Data sheet (open decision 1):** resolved; all four values on the sheet and matching.
- **Kidney-stone wording (4):** keep "can start to form".

## Retained successful moves

The CaSO4 example where skipping dilution flips the conclusion; the log line with a fixed teal Ksp and a landing coral Qsp; the "4 x too big" ghost; the falling cluster sliding Qsp back to Ksp; the check ruler recalled from C6b; the kidney-stone payoff that does not overclaim.

## Verdict

Pass for recording after Revision 2. Repeat on the exact voiced preview, with attention to the scene 7 mixing card (most numbers on one card) and the number reading in scenes 5 and 6.
