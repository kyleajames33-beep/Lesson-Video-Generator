# Maths S12 t07 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t07.md`, "How does the sine rule find a missing angle, including an obtuse one?" Source SHA256 `15d903a5e01192e5a3566f0dcd66a54ace8140fce5f91944ab55d5b389aa7a77`.

I reviewed the written design (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t06: the sine rule and the matched pair; t02: inverse sine, degrees and minutes; sine known only for acute angles in right-angled triangles) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

This is a good design. Flipping is justified in one sentence ("if those fractions are all equal, then flipped over, they're still equal"). "That's sine R, not R yet" stops the commonest misreading. The check "shorter side, smaller angle" is said on the sail. The ambiguous case is kept out as ruling 60 requires: the narration says the question will state acute or obtuse, no second triangle is drawn, and swapping the sail's edges (ruling 61) leaves the first example with one answer. The calculator arrow landing only on the left ray is a strong visual. I recalculated every value with SymPy 1.14 (`work/brief-review-standard-t2/verify.py`): sin R 0.580039, 35.4533° (35°27'), and 35.4505° from 0.58 exactly; sin 50° = sin 130° = 0.766044; sin C 0.768397, 50.2101°, 129.7899° (129°47'), slip 50°13', third angle 25.21°, AC 22.17 cm; sin P 0.760845, 49°32', slip 130°28' (72° + 130.46° > 180°, so P has one answer); sin Y 0.858397, 59.1370°, 120°52', slip 59°8'; and the memory case 117.89°. All correct. In both the hanger and A2, the acute alternative would also make a valid triangle (25° + 50.21° and 31° + 59.14° are both under 180°). That is exactly the syllabus's "given that the unknown angle is obtuse" case, and the cards state "obtuse".

## Findings

1. **Should fix, scene 4 (why is there a sine of 130°, and why is it the same as sine 50°?).** Students have only met sine as opposite ÷ hypotenuse in a right-angled triangle, where no angle reaches 90°. The narration says "Sine fifty degrees and sine a hundred and thirty degrees are exactly the same number. On this half circle, the two angles reach the same height." It never says why the height on the half circle is the sine, so the half circle is a picture with no stated link to the rule. A student will ask "what is the sine of an angle bigger than ninety?" Fix (about 10 s, of an 87 s margin). After "Here's the catch", say: "Put an arm one metre long at the angle. Its height is opposite over a hypotenuse of one, so the height is the sine. That works for any angle up to a hundred and eighty degrees. At fifty degrees and at a hundred and thirty degrees, the arm reaches the same height, so the sines are equal. Try it: sine a hundred and thirty degrees on your calculator is zero point seven six six." Visual: label the arm "1 m" and the dashed drop "height = sin θ" on "height is the sine". Avoid unit-circle words, as the design intends. Students should understand that the calculator is not wrong: two angles really share one sine. This picture also sets up t08's negative cosine (the arm's sideways reach).

2. **Should fix, scene 6 (the "keep the full value" demonstration shows no difference).** The grey row shows 0.58 giving 35°27' and the full value also giving 35°27'. The note "the minutes agree here; the habit protects harder cases" is not said aloud, so a student watching concludes that rounding does not matter. Fix: use the hanger from scene 5. Rounding sin C to 0.77 gives 129°39'; the full value gives 129°47' (checked in `work/brief-review-standard-t2/suggested.py`). Row: "sin C = 0.77 → 129°39′ ✗; full 0.768 40 → 129°47′ ✓". Students should see eight minutes lost by rounding early.

3. **Optional, scene 1 ("set at the right slope").** The angle at R on a top view is a corner angle, not a slope. Say "The fitting at corner R has to be made for the angle there, so we need the angle at R."

## Joins

- **t06 to t07:** scene 1 opens on t06's final frame exactly (the sail plate, the coded triangle with the same labels and colours, the same chips).
- **t07 to t08:** scene 12 matches the decisions file's t07 final frame and t08's Boundary (the paddock, 240 m amber, 180 m violet, 110° teal arc, "? m of wire", the grey card, the chips). The farm plate is `ms12-farm-top-v1.png` (briefed in t03 and used in t04 and t05); the design says "t04's, name per the t01 to t05 designs", so write the name in.

## Practice and feedback

Both cards keep the full worded question, including "acute" or "obtuse", on screen through the 10 s countdown, with a not-to-scale picture and nothing answer-bearing. A1's slip is subtracting from 180° when the angle is acute; A2's slip is keeping the acute angle when it is obtuse. That covers both errors of the topic. The feedbacks run about 25 s and 30 s. A shade sail, a coat hanger and a bike frame are fair, everyday and non-science.

## Key notes and length

The notes are good. Note 3 ("sin θ = sin (180° − θ)") will read better once finding 1 has given it a picture. About 483 s; finding 1 adds about 10 s.

No speech, design edits, builds or commits were made.
