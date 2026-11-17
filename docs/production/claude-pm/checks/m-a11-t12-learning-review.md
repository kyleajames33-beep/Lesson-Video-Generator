# Maths A11 t12 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t12.md`, "How do the reciprocal ratios extend to any angle, and where are they undefined?" Source SHA256 `c75250e851722e67c4335629e3621677a1d5bb3cdb3c23122bfd166112243f03`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t03, t04, t08, t11) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical scan (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 2 optional).

The floodlight's beam running parallel at 90°, the greyed readout and the hollow dot stamped on the circle give one excluded angle three pictures at once. Flipping t03's circle ratios is clearly the same move as t11's flip, and "for an acute angle, x is the adjacent side ... so these match the triangle" joins them. "The radius is never negative, so each flip takes its sign from x or y" is a real cause. The cot = 1/tan contrast at 90° is shown on three rows ("cot 90° = 0 ✓", "cos 90°/sin 90° = 0 ✓", "1/tan 90°: tan 90° doesn't exist ✗"), so "per identity, not per ratio" has evidence; scene 4 is not rushed (this answers the review note). Open decision 1: one video is right; no split needed. Recalculated: (−3, 4), r = 5: −5/3, 5/4, −3/4; sec(2π/3) = −2, cosec(3π/4) = √2, cot(11π/6) = −√3; 4 sec 80° = 23.035, 4 sec 89° = 229.19; A1 1 − 2√3/3 = −0.1547; A2 cos θ = 0 at 90°, 270° on [0°, 360°], sec 135° = −√2, sec 300° = 2. All correct.

## Findings

1. **Should fix, scene 3 ("identity" and "excluded" are used before their plain meanings).** The decisions list plain meanings for both, but the narration never says them. "Identity" first appears in scene 3 ("So this identity fails wherever x or y is zero"), "exclusions" in scene 4 and "excluded" in scene 6 and the key notes. The syllabus wording ("identifying the angles to be excluded in each identity") is the lesson's spine, so a student needs both words before the table fills. Fix: open scene 3 with "An identity is an equation that's true for every angle where both sides exist. The angles where it fails are excluded, left out." About 110 characters. Students should be able to say what "the exclusions of an identity" means.

2. **Should fix, scene 5 (two of the four exact values skip their steps aloud).** sec(2π/3) is converted to 120° and given its related angle aloud. cosec(3π/4) and cot(11π/6) then jump straight to "sine is root two over two" and "tangent is minus one over root three", with no degree form and no related angle spoken or written. A student starting from t08 has to do two conversions silently while the next value is already being read. Fix: "Three pi over four radians is a hundred and thirty-five degrees, with related angle forty-five degrees. Sine is root two over two there, and positive in the second quadrant, so ..." and "Eleven pi over six radians is three hundred and thirty degrees, with related angle thirty degrees ...", with rows "3π/4 = 135°: related angle 45°" and "11π/6 = 330°: related angle 30°". About 130 characters. This answers the review note: as written, the four values are too fast.

3. **Should fix, scene 5 (sec 120° = −2 is never tied back to the floodlight).** The hook's chip "sec 120° = ?" updates to "sec 120° = −2", and the beam's readout was "4 sec θ", so a student may read the answer as a beam of −8 m. Open decision 2 keeps the backward-beam idea out, which is right, but one sentence is needed so the anchor's question gets an honest answer. Fix: after "secant is minus two", say "The beam itself never reaches the ground at a hundred and twenty degrees. The circle still gives secant a value, minus two, negative because the point is left of the y-axis." Students should understand that the ratio exists where the physical picture stops.

4. **Optional, key note 5 mixes three ideas.** "Same sign as the partner: sec 120° = −2; sec 90° doesn't exist; cot 90° = 0." Split it: "Each reciprocal has its partner's sign (sec 120° = −2)." and move "sec 90° doesn't exist; cot 90° = 0" beside key note 3.

5. **Optional, "Numbers to verify".** "4/cos 80° = 23.03" should read 23.04 (23.035). The screen's "23.0 m" is unaffected.

## Joins

t11 to t12 matches (see the t11 review); t12 opens "Here's the floodlight again". t12 to t13 matches: t01's half-equilateral triangle with "sin 30° = ½" and "cos 60° = ½", the road sign with its coded brace, "30°" at the ground, "60°" at the post, "brace 2 m", "1 m" up the post, "coincidence?", "Next: complementary angles" and "?" are t13's opening frame, and t13 opens "Here's a road sign".

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. Both pictures are an empty circle with quadrants marked. Nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 29 s (named for measuring), feedback 2 about 26 s.

## Year 12 handoff check

t13 uses sec = 1/cos and cot = 1/tan with their exclusions; t14a divides by cos² θ and sin² θ with "cos θ ≠ 0" and "sin θ ≠ 0"; t14b reduces to sin and cos using the five identities. Scenes 3 and 4 deliver all five with their exclusions. Delivered.

## Site link

`trigonometric-identities-and-equations/lesson01.sa.html` matches the design's source. Correct.

No speech, design edits or commits were made.
