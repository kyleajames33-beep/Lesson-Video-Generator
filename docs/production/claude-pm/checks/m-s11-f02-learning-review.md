# Maths S11 f02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f02.md`, "How do we turn a word problem into an equation, solve it and check it makes sense?" Source SHA256 `aaa4ae27236fe984e76e0f3bebee65c652d93453211e2e70d7209b04fef09ebc`.

Written design reviewed by tracing it from its stated entry knowledge (f01's substitution and letters with units; Stage 5 inverse operations and two-step equations) as a Year 11 Mathematics Standard student. Checked against rulings 4 and 88 to 95 and the pack `pre-design/maths-standard/math-s11-f02.md`. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

Solving f01's own $41 bill first means only one new idea arrives at a time, and the balance gives "same to both sides" a picture. The swapped fee and price slip is a real one, and checking it "in the words" ($186, not $78) shows why a correct solve of a wrong equation still fails. The car wash makes rounding a decision (43 cars stop $10 short) rather than a rule. Ruling 95 (equations with brackets left out) is applied. Recalculated with SymPy 1.14 (22 checks for f02): k = 22; t = 4; the swap slip t = 10 costing $186; w = 8 by the gap 125 − 53 = 72; c = 131/3 ≈ 43.67, 43 cars $990, 44 cars $1,005; L = 12 (slip 309 ÷ 22 ≈ 14); w = 150/7 ≈ 21.43, $515 after 21 weeks, $480 after 22; the memory-aid case h = 3. All correct.

## Findings

1. **Should fix, scene 2 ("each pan splits into 1.5 parts").** A pan cannot be shown splitting into one and a half parts; the kit's split works for whole-number divisors. A student watching will see either a strange picture or nothing that matches "divide both sides by one point five". Fix (visual only): on "two", a "÷ 1.5" tag lands on both pans together and their labels change, "1.50k" to "k" and "33" to "22", while the beam stays level; row "k = 33 ÷ 1.5 = 22" as designed. Students should see that dividing both sides keeps the balance, without a fractional split.

2. **Should fix, scene 5 (the unknown is never named).** Scene 3 has just taught "Step one, name the unknown, with units", but scene 5 goes straight to "Three hundred and forty-five plus fifteen c equals a thousand" without saying what c is or what the question asks. Fix: after "a car wash charges fifteen dollars a car." add "How many cars does it need to wash? Let c be the number of cars." (about 5 s), with a givens chip "c = number of cars" (blue, 44 px) beside the rows. Students should see the four steps used again on a new problem, and know which question 44 answers.

3. **Optional, scene 2 (the reason for "outside step first").** The teaching check says "it was done last, so it comes off first", but the narration only shows the order. Replacement for "Undo the outside step first, the adding.": "The adding was done last, so undo it first." This is not MS-79's muddled summary; it states the order correctly. About 1 s.

4. **Optional, open decision 2 (the falling balance by the gap).** Keep as designed. The bar shows the spent part as the gap, and the grey row "(+ 9w and − 53 on both sides)" ties it back to the balance for students who want the algebra.

## Joins

f01 to f02: scene 1 opens on f01's final frame exactly (van, formula card, "Bill: $41", "k = ?", f01's chips) and its first line answers f01's question. f02 to f03a: scene 11's frame (van about 760 px, the formula card, four dockets with "$41 → k = 22" grey and three "?", the chips, no rearranged formula) matches f03a's Boundary. The $26 and $53 dockets are f01's own 12 km and 30 km trips, which f03a uses as a check.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; picture slots (an empty four-step column; a balance bar with a dashed $500 line and no weeks) give nothing away. Feedback 1 (about 24 s) and feedback 2 (about 29 s) each give the answer, the check and one crossed slip. Anchors are everyday (courier, tickets, pocket money, car wash, swim school, transport), labelled "example prices", and nobody is drawn.

## Key notes and length

The five notes are short; "a target rounds up" is the useful one-liner from scene 5. Narration 5,028 characters by this reviewer's count, about 462 s with holds, 108 s under the cap; finding 2 adds about 5 s. No em dash.

No speech, design edits, builds or commits were made.
