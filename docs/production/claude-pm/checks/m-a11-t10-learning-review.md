# Maths A11 t10 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t10.md`, "What do the graphs of sin, cos and tan show about their behaviour?" Source SHA256 `412b3cae984c2b1d1531102ae7d9b997a133a42ba84ee523b7dd2d8ae5b374b5`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t03, t04, t08, w21, w26) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical scan (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 4 should fix, 3 optional).

The tuner's trace sliding off the phone and landing on the circle's unrolled height answers "where does that shape come from?" with a cause, and S11-17 is applied (a pure tone, no piano). Sine's five key points come from where the point is on the circle, "the point retraces the same path" explains the repeat, and "the point can't leave the circle" explains the range. The radian relabel in scene 4 is followable: every label changes at once while the narration says the three conversions (this answers the review note). Even and odd come from t04's results, with a fold and a half-turn the student can watch. The torch makes "undefined at 90°" physical. Recalculated: sin and cos at 0°, 90°, 180°, 270°, 360°; cos x = 0 on [−2π, 2π] at ±π/2, ±3π/2; cos(−π/3) = ½; tan 60° = 1.7321, tan 80° = 5.6713, tan 89° = 57.290; tan(−π/3) = −√3; A1 x-intercepts −90°, 90°, 270°; A2 asymptotes −3π/2, −π/2, π/2 and intercepts −2π, −π, 0, π (endpoints included). All correct.

## Findings

1. **Should fix, scene 3 (the turned circle contradicts every position the narration names).** The visual turns the circle "a quarter turn on screen so its x-coordinate projects across". The narration then says "At zero degrees the point is furthest right ... At ninety degrees the point is straight above the centre ... At a hundred and eighty degrees it's furthest left". On a circle turned a quarter turn, the 0° point is drawn at the top and the 90° point at the side, so a student who looks where the narration points sees the wrong thing, and the circle no longer matches scene 2's. Fix: keep the circle upright, as in scene 2. Draw cos θ as a violet bar along the x-axis from the centre to below the point; a ghost copy of that bar swings up a quarter turn and stands as the graph's height at the current angle (the projector carries the bar, not the point). Narration unchanged. Students should see the x-coordinate as a horizontal length that becomes the cosine graph's height.

2. **Should fix, scene 6 (x means two things, and "tan x metres" is asserted).** "On the circle, tan is y over x, the height over the x-coordinate. ... Turn the beam through an angle x from straight on, and the spot slides along by tan x metres." Within two sentences x is the x-coordinate and the angle, and "the bottom of y over x shrinks towards zero" then uses x as the coordinate while the readout says "x = 80°". The torch result itself has no reason. Fix: "On the circle, tangent is the height over the x-coordinate." For the torch: "Turn the beam through an angle theta. The beam, the one metre line and the fence make a right-angled triangle. The one metre is the adjacent side, so the spot's distance, the opposite side, is tan theta metres." Readouts "θ = …°" and "spot = tan θ m". When the graph appears: "On the graph we call the angle x again, as in y equals sine x." Students should be able to say why the spot is tan θ metres and why it races off.

3. **Should fix, scene 6 (too much in one scene, and tan's x-intercepts are never said).** Scene 6 is 870 characters (about 65 s), the longest in the video. It carries the torch, the asymptote, the new branch, the period and its reason, the range, "no amplitude" and odd, while the site `we-1` rows (asymptotes ±π/2, x-intercepts −π, 0, π) write silently. A2 then asks for tan's x-intercepts, which the narration never names. Fix: split it into 6a (the torch, the asymptote at π/2 radians) and 6b (the graph's features), with one added sentence in 6b: "Tangent is zero wherever the height is zero: at zero, pi and minus pi radians." Also change "because the point opposite has the same y over x" to "because the point opposite has both coordinates negated, and the two minus signs cancel in y over x". This answers the review note: as written, scene 6 is too dense.

4. **Should fix, the join with t09 (the fork appears twice).** t09's scene 12 puts the tuning fork plate (300 px) beside the phone in its final frame, and the decisions file's join table lists it. t10's boundary leaves the fork out, and scene 1's visual makes the fork "appear beside the phone" on "tuning fork". As written, the fork pops in on a frame that already shows it. Fix: add the fork to t10's boundary and opening-frame text; on "tuning fork" the fork pulses once (or a small "pure tone" tag appears beside it) instead of appearing.

5. **Optional, scene 4 ("odd multiples of pi over two" against "x = π/2 + kπ").** The spoken form is hard by ear and differs from the screen. Say "at pi over two plus any multiple of pi: pi over two, three pi over two, and so on", or write "(odd multiples of π/2)" beside "x = π/2 + kπ".

6. **Optional, units and coordinates by ear.** Scene 6 "At zero, it's zero" becomes "At zero degrees, it's zero". Feedback 1 "meets the y-axis at zero, one" becomes "meets the y-axis at the point zero, one".

7. **Optional, key notes 3 and 5.** Add "(k an integer)"; the grey chip "k: any integer" appears only in scene 4.

Length: findings 2 and 3 add about 250 characters (about 6,080, near 554 s with holds). Take the named reserve trims (scene 2's "Turn the other way" sentence, scene 6's "Past it, a new branch climbs from far below") so the video stays clearly under 570 s.

## Joins

t09 to t10: matches except finding 4. t10 to t11 matches: the tan graph racing up beside its asymptote at 90°, the triangle with the shrinking adjacent side and "adjacent → 0", the cards "opp/hyp", "adj/hyp", "opp/adj", "flip them?", "Next: secant, cosecant and cotangent" and "?" are t11's opening frame, and t11 opens "Here's tangent racing up near ninety degrees".

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is empty degree axes; A2's is empty radian axes with no asymptotes drawn. Nothing is answer-bearing. A1 has many demands (sketch, both intercepts, range, period, amplitude, even or odd with a reason) for one countdown; acceptable because the pause is offered, but it is the heaviest card in this batch. Each feedback gives the answer, the key reason and one crossed classic mistake. Feedback 1 about 28 s (named trim), feedback 2 about 22 s.

## Year 12 handoff check

Year 12 t01, t02 and d05 cite `cid79268a8`: all three graphs on radian axes with intercepts, asymptotes, domains, ranges, period and amplitude, the symmetries, and "the same wave, just starting at the top" (d05's slide). Scenes 4 to 6 deliver these, subject to finding 3's spoken tan intercepts. Delivered.

## Site link

`trigonometric-identities-and-equations/lesson05.sa.html` (with lesson06 for tan) matches the design's source. Correct.

No speech, design edits or commits were made.
