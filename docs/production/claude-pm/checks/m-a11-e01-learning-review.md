# Maths A11 e01 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-e01.md`, "How do the graphs of y = k aˣ and y = k a⁻ˣ behave?" Source SHA256 `0b6136c7b4985258f85acd06d2610370d3319821f5003e83b0abc3b78778c13d`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (w01, w09, w21, c18's frame) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The table lands the reciprocal reading of negative powers before any graph, with the crossed ghost "−4" beside ¼. The two cards give negative x a meaning ("years ago"), and the matching $12.50 tags make the y-axis reflection caused rather than announced: each card is the other run backwards in time. The asymptote is defined for this curve only, from "halving never reaches zero". Root ruling 6 (keep "say it doubles every year") is applied. Recalculated: 2ˣ at −2 to 3 is ¼, ½, 1, 2, 4, 8; 100 × 2⁻² = 25; 100 × (½)³ = 12.5 = 100 × 2⁻³; 3 × 2ˣ through (0, 3); −2 × 3ˣ through (0, −2), range y < 0; `we-3` k = 3, a = 2; A1 (0, 3), y > 0, ends 0 and unbounded; A2 k = −2, a² = 9, a = 3, y < 0. All correct.

## Findings

1. **Should fix, scene 4 ("a bigger base rises faster").** Narration: "A base bigger than one gives a curve that rises to the right, and a bigger base rises faster." The slider sweep shows 1.5, 2, 3 and 5 all crossing at (0, 1), so on the left of the y-axis the bigger base is visibly lower and flatter. A student who hears "rises faster" and sees 5ˣ below 2ˣ at x = −1 has a contradiction to resolve, and the design's own memory aid check rejects this phrase ("true only for a > 1 and x > 0"). Fix. Narration: "A base bigger than one gives a curve that rises to the right. A bigger base climbs more steeply to the right of the y-axis, and hugs the x-axis more closely on the left." Visual: on "hugs" ring the points at x = −1 on 2ˣ and 5ˣ (½ and ⅕). Students should understand that all these curves pivot through (0, 1).

2. **Should fix, scene 5 (two things change at once before the flip).** Narration: "Now make k negative. y equals minus two times three to the x takes every point and flips it below the x-axis." The visual changes the base to 3 and sweeps k from 3 through 0 to −2 in the same beat, so "every point" has no clear referent: flipped from which curve? A student will ask why the base changed and what the flipped curve was before. Fix. Narration: "Now make k negative. Take y equals two times three to the x, then change the two to minus two. Every height is multiplied by a negative number, so every point flips below the x-axis." Visual: set a = 3 and k = 2 first and hold y = 2 × 3ˣ for a moment as a ghost; then sweep k to −2 so the ghost and its flip are both visible. Students should see a reflection in the x-axis, caused by multiplying by a negative.

3. **Optional, scene 4 (zero as a base).** "It can't be zero or negative, because a negative base has no value at powers like a half" gives a reason for negative bases only. Add "and zero to any positive power is just zero" or drop "zero" from the sentence (the grey chip "a > 0, a ≠ 1" stays). Consider "has no real value" for the negative case, since (−4)^½ = √−4.

4. **Optional, scene 7 and key notes ("Start at k").** "Start" can suggest the curve begins at the y-axis, which the "years ago" picture has just contradicted. "Cross at k" or "Through (0, k)" keeps the aid and removes the reading. Low priority; the cards in scene 2 already show the left half.

## Joins

c18 to e01 matches: c18 ends on "Here's y equals two to the x. What happens when x is zero, or negative?" with "y = 2ˣ", the empty table for −2 to 3, "x in the power" and "Next: exponential graphs", and e01 opens on exactly that frame and fills the table. e01 to e02: the mine cart plate, "gold: 1 kg", "doubles every hour: G = 2ᵗ", "growing how fast right now? ?", the small 2ᵗ graph through (0, 1) and "Next: the gradient at (0, 1)" are e02's opening frame, and e02's first line ("Here's the mine cart from last time") picks it up.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is empty axes; A2's shows only the two given points; nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 25 s, feedback 2 about 23 s.

## Year 12 handoff check

d01 assumes `ci98f43d14`: curves through (0, 1) above y = 0 and a stretch by k. Scenes 3 and 5 teach (0, k), the asymptote, the range for both signs of k and both end behaviours. Delivered.

## Site link

`exponential-and-logarithmic-functions/lesson01.sa.html` (with lesson02 for the features and `we-3`) matches the outline. Correct.

No speech, source edits or commits were made.
