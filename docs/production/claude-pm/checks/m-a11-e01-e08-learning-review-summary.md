# Maths A11 e01 to e08 Revision 1: learning review summary

17 November 2026. Independent student learning review of the eight exponentials and logarithms designs (`lessons/math-a11-e01.md` to `e08.md`), following `docs/production/student-learning-review.md`. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Maths was spot-checked with Python where something looked off; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| e01 exponential graphs | should-fix | 0 | 2 | 2 | `m-a11-e01-learning-review.md` |
| e02 the number e | should-fix | 0 | 3 | 1 | `m-a11-e02-learning-review.md` |
| e03 what is a logarithm | should-fix | 0 | 3 | 0 | `m-a11-e03-learning-review.md` |
| e04 solving aˣ = b | should-fix | 0 | 2 | 1 | `m-a11-e04-learning-review.md` |
| e05 the log laws | should-fix | 0 | 2 | 1 | `m-a11-e05-learning-review.md` |
| e06 using the log laws | should-fix | 0 | 2 | 1 | `m-a11-e06-learning-review.md` |
| e07 change of base | should-fix | 0 | 1 | 2 | `m-a11-e07-learning-review.md` |
| e08 log graphs | should-fix | 0 | 1 | 2 | `m-a11-e08-learning-review.md` |

Totals: 0 pass, 8 should-fix, 0 blockers; 16 should-fix findings, 10 optional. Every should-fix is a wording or visual-detail repair inside an existing scene; none needs a new scene, a new plate or a split.

## Top findings

1. **e07: root ruling 4 is not applied.** The early-rounding warning is still in scene 4's narration and visual (1.7707 against 1.7712, "keep full values") and is key note 5. Cut it to an author note; replace key note 5 with "Check: raise a to your answer; you should get x back".
2. **e05 scene 3: n means two things on one screen.** "let m = aᵖ, n = a^q" stays on the linking strip while "mⁿ = (aᵖ)ⁿ" writes beneath it. Fade "n = a^q" and say the power n is a new number.
3. **e04 scene 6 and feedback 2: the irrationality reason fails for fraction powers.** "No power of two, even a fraction power, can make a hundred, because a hundred has a factor of five" does not apply to 2^(p/q). Raise to the qth power: 2ᵖ = 100^q is impossible.
4. **e04 attempt 1: the picture shows part of the answer.** The level line at 20 on y = 3ˣ shows the crossing between 2 and 3 during the countdown, which is the question's third demand.
5. **e01 scene 4: "a bigger base rises faster"** contradicts the slider picture on the left of the y-axis and the design's own memory aid check.
6. **e02 scene 3: "Like every exponential, e to the x ... grows to the right"** is false for the falling exponentials e01 just taught.
7. **e03 scene 5, strand-wide: "ln" is spoken aloud** in e03, e04, e06 and e07, although e03's open decision and author note say the narration avoids it. Decide one reading ("ell en" or "the natural log of"), teach it in e03 and respell it in every voicing request.
8. **e03 to e02 join: the x ≈ 1.61 callback.** e03 asks students to "remember" x ≈ 1.61 at height 5, which e02 never shows. Either add an x readout in e02 scene 6 or reword e03 as a discovery.
9. **e08 scene 1: axis labels.** e07's graph is labelled "x: years", "V: hundreds of $"; the swapped points need plain x and y axes, or (8, 3) reads as "8 years, $300".
10. **e06 scenes 5, 6 and feedback 2: unheard brackets.** "t times ln zero point seven minus ln zero point eight" and "ln three over two ln five minus ln three" lose the bracket by ear, in the lesson whose classic slip is a missing bracket. Also say why taking logs of both sides is allowed (both sides positive and equal).

Other should-fix items: e01 scene 5 (base and k change in one beat before the flip); e02 scene 4 (say "slid one step right" before "stretched up by two"; this answers open decision 1, keep the stretch); e02 scene 5 (say why k is the gradient at (0, 1) before A1 needs it); e03 scene 3 (model one fractional log before A1 (c) asks log₉ 3); e05 scene 1 ("underneath it is six" against an asset brief that puts the body scale above the groove).

## Open decisions answered

- e01 (2) idealised doubling: keep (also root ruling 6).
- e02 (1) stretch argument: keep it, with e02 finding 2's wording.
- e04 (2) irrationality reason: keep it, corrected as e04 finding 1.
- e05 (1) the letter n: keep the syllabus letter, but clear "n = a^q" from the screen (e05 finding 2).
- e06 (1) pace: no cut; every step carries its spoken reason.
- e07 (1) bits: keep. e07 (2) early rounding: as ruled, to an author note.
- e08 (3) "floor" and "wall": keep; they always sit beside y = 0 and x = 0.
- e03 (1) reading "ln": see top finding 7.

## Joins

- **c18 to e01:** matches. c18 ends "Here's y equals two to the x. What happens when x is zero, or negative?" on "y = 2ˣ" and an empty table for −2 to 3; e01 opens on that frame and fills the table.
- **e01 to e02, e02 to e03, e03 to e04, e04 to e05, e05 to e06, e06 to e07, e07 to e08:** each final frame is the next design's stated opening frame, and each opening line picks up the previous question. Two wording caveats sit inside joins: e03's x ≈ 1.61 recall (top finding 8) and e05's "underneath" (e05 finding 1). The rare card's "hundreds of dollars" in e07 and e08 matches e01's 100 × 2ˣ dollars.
- **e08 to t01:** t01 has no design. The outline's t01 question is "How do two special triangles give exact values at 30, 45 and 60 degrees?" (`ci83df430f`). e08's final frame (unit square with diagonal, halved equilateral triangle of side 2, "sin 45° = 0.7071067811…", "30°, 45°, 60°: exact values?") poses exactly that question, states no exact value and chooses no anchor, so root ruling 3 holds.

## What Year 12 d01 to d06 assume, and where the strand delivers it

| Year 12 assumption | Where delivered |
| --- | --- |
| d01: graphs of exponentials through (0, 1), above y = 0, stretched by k (`ci98f43d14`) | e01 scenes 3 to 5 |
| d01: eˣ is its own derivative; "the gradient always equals the height" (`ciac4383bd`) | e02 scenes 6, 7 (same sentence) |
| d02: "gradient ÷ height" of 2ˣ is 0.693, then named ln 2 | e02 scene 4 (same readout; ln deferred) |
| d02, d03: e^(ln a) = a, e^(ln x) = x for x > 0 (`cic84a1659`); ln as logₑ (`ci7cd97f8c`) | e03 scenes 5, 6 |
| d02: the natural log curve | e08 scene 4 |
| d03: ln(ab) = ln a + ln b, ln(xⁿ) = n ln x | e05 scenes 2, 3; ln form used in e06 scene 5 |
| d03: ln x is eˣ reflected in y = x; (0, 1) ↔ (1, 0), (ln 2, 2) ↔ (2, ln 2) (`ci9eb0125c`) | e08 scene 4 (same words) |
| d04: change of base with b = e (`ciae7673fb`) | e07 scenes 2 to 4 |
| d04: logₐ 1 = 0; ln of a number between 0 and 1 is negative; ln(1/3) = −ln 3 | e05 scene 5 |
| d06: ln e = 1 | e03 scene 5, e05 scene 5 |
| d05 | assumes trig only; nothing from this strand |

No gap found. Every e-strand point the Year 12 d designs assume is taught in the form they recall.

## Practice and feedback

All 16 question cards keep the full worded question on screen through the 10 s countdown. Only e04 attempt 1's picture is answer-bearing (top finding 4). All 16 feedbacks give the answer, the key reason, short working and one crossed classic mistake, and all are under 30 s by speech estimate (21.6 s to 27.1 s); e08 feedback 2 is the longest at about 28 s with its hold, so measure it on the voiced take.

## Housekeeping

- Each design's "Review evidence paths" names `checks/m-a11e0N-learning-review.md` (no hyphen). These reviews are written as `m-a11-e0N-learning-review.md`, as briefed. Root should align one or the other before the release checker looks for them.
- No em dash (U+2014) was found in any of the eight designs.

No speech, design edits, builds or commits were made.
