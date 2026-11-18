# Maths S12 r06b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r06b.md`, "How much paint do the walls need, and which paint is better value?" Source SHA256 `51289f3637fdad14ca1263a2bace60b22a3e2bbf63a46262be609f050131276e`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r06a: scaled sides, plan symbols, rounding whole items up; Year 11 perimeter and rectangle areas) as a Mathematics Standard student starting Year 12, for both courses. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

A good design. The wall unfold is the right picture: four walls hinge down into one strip exactly as long as the perimeter, so "perimeter × height" is seen before it is said. The door and window lifting out of the strip with a live readout makes the subtraction concrete, coats and coverage are kept apart ("two coats means painting that area twice", then "covers twelve square metres per litre, for each coat"), and the worked example's slip changes the answer (a second tin), so the subtraction visibly matters. Prices and coverages are sourced and dated, brands stay out of learner copy, and "up to is a best case" is a valuable consumer lesson. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): P = 14, 33.6 m², door 1.6728, window 1.8, 30.1272, × 2 = 60.2544, ÷ 12 = 5.0212 L, 1.2553 tins, $177.80; Paint B 3.7659 L, two tins $189.90; study 11, 26.4, 23.5272, 47.0544, 3.9212 L, 4.4 L without openings; A1 15, 40.5, 2.16, 36.6672, 6.1112 L, one coat 3.0556 L; A2 9 L, 3 tins, $266.70, 7.2 L, 2 tins, $198, $68.70. All correct.

## Findings

1. **Should fix, scene 5 (the main question's "better value" is left unresolved).** The scene says the dearer tin is the cheaper job, then that "up to" is a best case and at 12 m² a litre Paint B would cost $189.90, more than Paint A's $177.80. It ends on "check whether the coverage is realistic", so a student does not know which paint to buy, or how to check. There is a clean threshold: one 4 L tin of B paints 60.25 m² only if it covers at least 60.25 ÷ 4 ≈ 15.06 m² a litre (checked). Fix, narration after "If Paint B really covered only twelve, it would need two tins too, and cost a hundred and eighty-nine dollars ninety.": "One tin of B only does the job if it really covers at least fifteen square metres a litre, because sixty point two five divided by four is about fifteen. So B is better value only if you trust it to cover close to its label." Visual: a grey row "one tin: 60.25 ÷ 4 ≈ 15.1 m²/L needed", with the B card's "up to 16" ringed against it. Students should understand how to decide, not only that the answer depends on coverage. About 9 s.

2. **Should fix, scenes 4, 5 and 6 (screen rows a student cannot reproduce).** Scene 4 shows "30.13 × 2 ≈ 60.25 m²", but 30.13 × 2 = 60.26, and the worked example shows "≈ 23.53 m²" then "× 2 ≈ 47.05 m²", but 23.53 × 2 = 47.06 (both checked). The designer carries the unrounded value, but the student only sees the rounded one, multiplies it and gets a different answer. Fix: write and say "about sixty point two six" and "about forty-seven point zero six". Nothing downstream changes: 60.26 ÷ 12 ≈ 5.02 L, 60.26 ÷ 16 ≈ 3.77 L, 47.06 ÷ 12 ≈ 3.92 L, and the tin counts and costs are the same. (A1's 36.67 × 2 ÷ 12 ≈ 6.11 already agrees.) Use 60.26 in finding 1's row too.

3. **Optional, scene 6 (a spoken task with ten numbers).** The task is read in full (plan 6 by 5 cm, 1 : 50, 2.4 m, 0.82 by 2.04, 1.2 by 1, two coats, 12 m² a litre, 4 L, $88.90) before any working, which is a heavy listening load while the givens card already shows every value. Say "There's one door and one window, with their sizes on the card" and let the tin size and price stay on screen (the design's named trim). About 8 s saved, which also covers finding 1.

## Joins

r06a to r06b: scene 1 opens on r06a's final frame exactly. r06b to r07 and r09 (two routes, ruling 50): the left panel (the creek-side site plan at 1 : 500, "what area?") and the right panel (two pay slips, "who is paid more?") are each self-explanatory; no value is worked out. The pay slips match r09's stated opening (`lessons/math-s12-r09.md` boundary), and ruling 50 has r08's final frame repeat them.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; A1's picture is the plan with its symbols, not an answer. A1 practises every step on a new room; A2 practises the whole-job comparison with given coverages. Each feedback gives the answer, short working and one crossed slip (about 29 s and 28 s). Painting a bedroom is a fair anchor; prices are dated examples from named listings; no gambling, no people drawn.

## Key notes and length

Five useful notes; note 5 carries the comparison. About 522 s with holds, 48 s under the cap; finding 1 adds about 9 s and finding 3, if taken, saves about 8 s.

No speech, design edits, builds or commits were made.
