# Maths A11 t16 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t16.md`, "How do trig equations that reduce to quadratics get solved?" Source SHA256 `d200d77400af9bd381a11d3f68140f8c063f3e67da2ef3cfe3858cfd2077b11b`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t10, t14a, t15a, t15b, w04) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical root scan of every stated domain (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A good design with one small repair. The battery reading carries the reason for rejection (a range), and the band picture repeats it for c = 2, so "reject, with a reason" is caused rather than announced. "Call sine theta s ... just a shorter name" keeps the substitution honest. "Those are values of sine, not angles" is heard straight after the stopping slip, before the attempts (this answers the review note). The mixed equation includes both closed ends, scene 6's dots vanishing on division shows what is lost, and A2 tests the tan exception. Root ruling 7 holds: the final frame states no direction and draws no shifted graph. Every solution set is complete in its stated domain (numerical scan): 2 sin² θ − sin θ − 1 = 0: 90°, 210°, 330°; cos² θ − cos θ − 2 = 0: 180° (c = 2 rejected); 2 sin² θ + 3 cos θ = 3: 0°, 60°, 300°, 360°; 2 cos² x + sin x = 1 on [0, 2π]: π/2, 7π/6, 11π/6; sin² θ = sin θ: 0°, 90°, 180°, 360°; A1: 30°, 150°, 270°; A2: π/4, π/3, 5π/4, 4π/3. Factorisations checked. All correct.

## Findings

1. **Should fix, scene 4 ("turn everything into cosine" has no reason).** "Cosine appears unsquared, so turn everything into cosine" states the rule; the reason (going the other way needs a square root and a ± sign) is in author note (g) only, and the review note asks for it to be explained. A student will ask "why not turn everything into sine?". Fix: "We can swap sine squared for one minus cosine squared, but swapping a plain cosine for sine would need a square root. So turn everything into cosine." Also say "Let c equal cosine theta" before "two c minus one, times c minus one", since scene 4 uses c without reintroducing it. About 140 characters. Students should be able to choose the direction in a new mixed equation and say why.

2. **Optional, feedback 2 (how the surd quadratic factorises).** "It factorises as tangent x minus one, times tangent x minus root three" is the step most students will not see in 10 s. Add a silent grey row "add to 1 + √3, multiply to √3: 1 and √3", so feedback 2 stays near 25 s.

3. **Optional, scene 5's units.** "So sine x is one, at pi over two" ends the list with "radians" only once; fine by ear, but "at pi over two radians" on the first value matches the strand's rule.

## Joins

t15b to t16 matches (see the t15b review). t16 to g01: the coded frame (y = x² with its vertex ringed, "y = x²" and "y = (x − 3)²" in matching boxes, the grey ghost arrow "minus means left?", "x → x − 3: left or right?", "Next: graph transformations", "?") states no direction, and root ruling 7 makes it g01's opening frame. g01 has no design yet; its designer must open on this frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is y = sin θ with no level lines; A2's is y = tan x with dashed asymptotes and no level lines. Nothing is answer-bearing. A2's spoken brackets ("minus, in brackets, one plus root three, times tangent x") match the card. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s, feedback 2 about 25 s.

## Year 12 handoff check

With t15a and t15b, this completes `ci24474f01`, the trig-equations entry knowledge Year 12 t02, t03 and d05 assume; reduced quadratics recur in Year 12 stationary-point work. Delivered.

## Site link

`trigonometric-identities-and-equations/lesson12.sa.html` matches the design's source. Correct.

No speech, design edits or commits were made.
