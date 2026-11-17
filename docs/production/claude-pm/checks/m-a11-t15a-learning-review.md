# Maths A11 t15a Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t15a.md`, "How do we find every solution of sin θ = k, cos θ = k or tan θ = k in a domain?" Source SHA256 `134407f7424c7b187f708f44a79450b0d71756973a357403491ce4833b1b40a6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t02, t04, t08, t10) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical root scan of every stated domain (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

The opening makes "the calculator gives one angle" felt: the hand sweeps and stamps a second dot at ten to, after the calculator has given only ten past. The three-step method is shown on the graph, the circle and the board together, with the count seen before it is calculated. S11-18 is applied: cos⁻¹(−0.5) = 120° is shown as a correct single answer that hides 240°, and "it isn't the related angle" follows. Radian mode is tied to the domain's unit, the endpoint 2π is excluded aloud, "round last" is shown, and sin x = cos x checks cos x = 0 before dividing. Every solution set is complete in its stated domain (numerical scan): the clock, 0 ≤ m < 60: m = 10, 50; sin θ = 0.5 on [0°, 360°]: 30°, 150°; cos θ = −0.5: 120°, 240°; sin θ = −0.6 on [0, 2π): 3.785, 5.640 (α = 0.6435 = 36.87°); 2 sin x = 1 on [0, 2π]: π/6, 5π/6; sin x = cos x on [0, 2π]: π/4, 5π/4; A1 2 cos θ + √3 = 0 on [0°, 360°]: 150°, 210°; A2 5 sin x + 2 = 0 on [0, 2π]: 3.553, 5.872 (α = 0.4115; degree-mode slip 23.58°). All correct.

## Findings

1. **Should fix, scenes 1 and 4 (quadrant names on a clock measured from twelve; open decision 2).** Scene 4 says "cosine is positive in the first and fourth quadrants. So six m is sixty degrees, or three hundred and sixty minus sixty, which is three hundred degrees" while the clock is the stage and the two hands draw on it. The clock's angle runs clockwise from twelve, so the 300° hand points up and to the left. A student who learned quadrants on t04's version of this same plate (measured anticlockwise from the three o'clock line) sees that hand in the second quadrant, not the fourth, and the scene's own words contradict the picture. Fix, in two parts: (a) in scene 1, keep t14b's corrected sentence (t14b finding 3): "On this clock, measure the hand's angle from twelve, clockwise, the way it turns. Measured from the upright line, the height is the side next to the angle, so it's the hand's length times cosine of six m degrees." (b) In scene 4, do the quadrant step on a small standard circle beside the clock, not on the face: "On the circle, cosine is a half at sixty degrees and at three hundred degrees, in the first and fourth quadrants. So six m is sixty or three hundred. On the clock, that's the hand at ten past, and its mirror image at ten to." Then the two hands draw. This answers open decision 2: as written, the switch confuses, and saying the convention alone is not enough without moving the quadrant names off the clock.

2. **Should fix, scene 2 ("Take the inverse sine of the positive value" is a rule, not a cause).** The review note asks for the positive value to be caused; the cause chain has the reason ("it is the acute angle to the x-axis"), but the narration never says it. Fix: "The related angle is the acute angle between the ray and the x-axis, and an acute angle always has a positive sine. So we find it from the positive value." About 150 characters. Scene 3's "it isn't the related angle" then lands as a consequence.

3. **Should fix, scene 5 and feedback 2 (radian answers spoken without "radians").** "about three point seven nine, and ... about five point six four" and "about three point five five, and ... about five point eight seven" are angles in radians, and "about thirty-six point nine" is in degrees. In a lesson whose crossed slip is the wrong calculator mode, every answer should carry its unit. Fix: "about three point seven nine and five point six four radians", "about three point five five and five point eight seven radians", and "about thirty-six point nine degrees". Feedback 2 stays about 26 s.

4. **Optional, scene 6 ("which we've already solved").** That was solved in degrees; here the domain is 0 to 2π. Say "so x is pi over six or five pi over six radians, the radian forms of thirty and a hundred and fifty degrees".

## Joins

t14b to t15a matches (see the t14b review), and t15a's first sentence picks up the clock. t15a to t15b matches: the clock with its level line and the hand at twelve, "noon to 2 pm: 0 ≤ m ≤ 120", the double arc "6m: 0° to 720°", "two laps: how many times?", "sin 2θ = 0.5, 0° ≤ θ ≤ 360°", "2θ: two laps too?", "Next: multiple angles" and "?" are t15b's opening frame, and t15b opens "Here's the clock again". Across the split, t15b recalls t15a's method by a grey chip only, as it should. Root ruling 24 accepts the clock callback; finding 1 is about how it is labelled, not whether it returns.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. Each picture is the relevant curve on empty axes with no level line; the curve shape is entry knowledge, so nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 22 s, feedback 2 about 25 s.

## Year 12 handoff check

Year 12 t02 assumes solving sin x = k, cos x = k and tan x = k on [0, 2π] by quadrants and opens on "a calculator's inverse sine gives you only one angle"; t03 assumes inverse cos on a calculator in radians; d05 recalls solving cos x = k on [0, 2π] by quadrants. Scenes 1 to 3 and 5 deliver these in that form. Delivered.

## Site link

`trigonometric-identities-and-equations/lesson11.sa.html` matches the design's source (with lesson08 and the measure-of-angles lesson03 item). Correct.

No speech, design edits or commits were made.
