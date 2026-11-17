# Maths A11 t14a Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t14a.md`, "Where do the Pythagorean identities come from, and how do they give one ratio from another?" Source SHA256 `dfc91c3a5d90e1aee59aa6a6f44e59c59a2d3680182c2fc08b18fc57311a96f4`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t03, t04, t12, w02) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical scan (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 3 optional).

The pan readout that never moves while both meters swing makes "= 1" a surprise before the reason, and the review note's question is answered: the total is felt first. Dividing x² + y² = r² by r² is a clear cause, with "there's a point on the circle for every angle" giving "nothing excluded". Each further division states its condition aloud. The quadrant step is caused, not a rule: "Theta is in the fourth quadrant, where x is positive, so cosine and secant are positive", and the crossed "± left in" slip says the quadrant has already chosen. The simplification ends "wherever the original expression exists". Recalculated: 0.75 + 0.25 and 0.5 + 0.5; the three identities and both simplifications reduce to 0; sec θ = 5/4 acute gives tan θ = 3/4; tan θ = −4/3 in the fourth quadrant (θ = 306.87°) gives sec θ = 5/3, cos θ = 3/5, sin θ = −4/5; A1 cosec θ = −13/5 in the fourth quadrant (θ = 337.38°) gives cot θ = −12/5; A2 = 1. All correct.

## Findings

1. **Should fix, scene 12 and the join with t14b (root ruling 25 is not yet applied).** Ruling 25 keeps the graphing-app surprise for t14b but shows it on the existing phone plate, so a painted object is on screen from t14b's first frame. t14a's final frame is t14b's opening frame, so t14a's handoff must change with it: draw the app (both graphs, the input bar, "same graph?", "is that a proof?", "Next: proving identities", "?") inside or beside `ma12-phone-v1.png` instead of a free-standing `ScreenApp`. Root's layout question is in the summary. Students lose nothing; the change keeps the join exact.

2. **Should fix, scene 3 (three rescaled triangles at once, with sides that are never explained).** "In pictures, each identity is Pythagoras in one triangle, scaled so a different side is one" draws three triangles, each with a square on every side, during one sentence, beside two working columns already on screen. No sentence says why a side becomes tan θ or sec θ, so a student will ask "why is that side tan θ?" and stop following the algebra. This answers the review note: as written, the triangles crowd scene 3. Fix: show one triangle only, the one with the adjacent side 1, after the first division: "Shrink the triangle so the adjacent side is one. Then the opposite side is tangent theta and the hypotenuse is secant theta, so Pythagoras gives one plus tangent squared equals secant squared." Keep the other two triangles for the memory card's left slot, where they already appear, small and silent.

3. **Optional, "five on four" (scenes 4, 5, feedback 1).** t11 and t12 read fractions as "over" ("twenty-five over seven", "five over four"). Use one reading across the strand; "over" matches the neighbours.

4. **Optional, scene 5 ("Then sine theta is tangent theta times cosine theta").** Add "because tangent is sine over cosine", so the step recalls t12.

5. **Optional, attempt 2's spoken bracket.** "Simplify sine squared theta, times one plus cotangent squared theta" can be heard as sin² θ × 1 + cot² θ. Say "times, in brackets, one plus cotangent squared theta"; the card shows the brackets.

## Joins

t13 to t14a matches (see the t13 review): t14a opens on the circle and "divide every term by r²?", visits the pan knob, then answers the division in scene 2. t14a to t14b matches in content (the app with tan x + cot x and sec x cosec x lying on each other, gaps at multiples of π/2, "same graph?", "is that a proof?", "Next: proving identities", "?"), subject to finding 1.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is t04's quadrant badge, unlit (a method reminder); A2's slot is empty. Nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s, feedback 2 about 21 s.

## The t14 split

The pack's line put finding ratios here and simplifying in t14b. The design keeps one simplification here ((sec² θ − 1)/tan θ = tan θ) and the restriction-led simplification in t14b; they are different skills, so there is no double teaching. Root ruling 21 accepts the split.

## Year 12 handoff check

t16 uses sin² θ = 1 − cos² θ and cos² θ = 1 − sin² θ (key note 5); Year 12 calculus recalls sin² x + cos² x = 1. Delivered.

## Site link

`trigonometric-identities-and-equations/lesson02.sa.html` matches the design's source. Correct.

No speech, design edits or commits were made.
