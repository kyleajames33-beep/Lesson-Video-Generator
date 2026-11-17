# Maths A11 t09 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t09.md`, "How do radians simplify arc length, sector area and segment area?" Source SHA256 `dc5d99580ac9804c98738064a5144719a8535b25501c5f3c586cde3c741fc8b2`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t05, t08, Stage 5) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical scan (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 4 should fix, 2 optional).

The opening earns l = rθ: t08's two chips (whole crust, then an eighth of it) sit beside the one-step row 20 × π/4 = 5π, and "an angle in radians is arc length over radius" is the reason the shortcut works. The crust peeling off and lying along the radius as 0.785 radius-lengths makes "θ radius-lengths" something a student can see. The proof of ½r²θ is complete (θ/2π of πr², the π cancels) and is checked against t08's 50π. The drop-leaf table is a genuine segment: the triangle lifting out of the sector and leaving the amber region exactly over the painted leaf is the right picture for "sector minus triangle", and the fixed top as "the rest of the circle" sets up A2. A1's perimeter trap is well chosen. Recalculated: 5π = 15.71; 40 + 5π = 55.71; 50π = 157.08; 10π/3 = 10.47 and 600 ÷ 10.47 = 57.30 (180/π); r² = 108, r = 6√3 = 10.39; sector 2,617.99, triangle 1,082.53, leaf 1,535.46, circle 7,853.98, fixed top 6,318.52 (also ½ × 2500 × (4π/3 − sin 4π/3)), major arc 209.44; A1 θ = 4/3, area 150; A2 12π − 9√3 = 22.11, 24π + 9√3 = 90.99. All correct except the rounding in finding 1.

## Findings

1. **Should fix, scene 6 (a rounding the student can check on screen).** Narration: "so the fixed top is about six thousand three hundred and eighteen square centimetres"; row "major segment ≈ 7854 − 1535 ≈ 6318 cm²". But 7854 − 1535 = 6319, and the unrounded 6,318.52 also rounds to 6,319. A student who does the subtraction on the screen gets a different number from the frame and will doubt the method. Fix: narration "about six thousand three hundred and nineteen square centimetres"; row "major segment ≈ 7854 − 1535 ≈ 6319 cm²"; update author note (d), "Numbers used" and "Numbers to verify" to 6,318.5 ≈ 6,319. Students should be able to reproduce every number they are shown.

2. **Should fix, attempt 2 ("subtends" is first heard in the question).** The A2 card and narration say "subtends an angle of two pi over three radians at the centre". The design's plain-meanings decision avoids the word in teaching ("the hinge cuts off an angle of ... at the centre"), so a student meets it for the first time during the countdown and may stall on the wording rather than the maths. Fix: keep the HSC word on the card and teach it in scene 5: "the hinge cuts off, or subtends, an angle of two pi over three radians at the centre", with a grey tag "subtends: cuts off at the centre". Students should read an exam question with "subtends" without hesitation.

3. **Should fix, scene 5 and attempt 2 (the exact form is asked for but never heard).** Scene 5's narration gives only "about one thousand five hundred and thirty-five square centimetres"; sin(2π/3) = √3/2 and 2500π/3 − 625√3 are on screen silently. A2 asks for "the exact areas", which needs exactly that step. This answers open decision 2: the exact forms can stay mostly on screen, but one sentence must say the step once. Fix: after "a half r squared, times theta minus sine theta", say "For the leaf, sine of two pi over three radians is root three over two, from last time's exact values, so the exact area is two thousand five hundred pi over three, minus six hundred and twenty-five root three. That's about one thousand five hundred and thirty-five square centimetres." Add a grey chip "t08: sin(2π/3) = √3/2" on the substitution row. About 140 characters. Students should be able to write an exact segment area in A2.

4. **Should fix, scene 2 ("But this only works in radians" has no reason).** The cause chain (2) says the formula needs the angle as a ratio of lengths, but the narration only asserts it; the 57-times example shows that degrees fail, not why. A student asks "why not degrees, if it's just an angle?". Fix: "But this only works in radians, because l equals r theta came straight from the radian's definition, arc over radius." Then keep the sixty-degree example as the check. Students should be able to say why the degree slip happens.

5. **Optional, feedback 2 (a bracket and a unit lost by ear).** "a half times thirty-six, times two pi over three minus root three over two" can be heard as (½ × 36 × 2π/3) − √3/2, and "about ninety-one" has no unit. Say "times, in brackets, two pi over three minus root three over two" and "about ninety-one square centimetres". To stay under 30 s, cut "That's" and "is the rest" (the design already estimates 28 s; measure on the voiced take).

6. **Optional, scene 6 ("the reflex angle").** Add "the angle the long way round" after "the reflex angle". It is a Stage 4 term, but this is its first use in the strand and the blue 4π/3 arc carries it only if the student knows the word.

## Joins

t08 to t09 matches: t08's scene 13 frame (the pizza with one slice, its teal crust, "45° = π/4", "r = 20 cm", the three right-column chips, "one step instead of two?", "Next: arc length and sector area", "?") is t09's stated opening frame, and t09's first line ("Here's the pizza from last time") picks it up. No l = rθ is on t08's frame. t09 to t10: t09's final frame (phone with the pure-tone tuner, the tuning fork plate beside it, the radius-1 circle with "height = sin θ", the empty axes, "plot the height against the angle?", "Next: the graphs of sin, cos and tan", "?") is t10's opening, except that t10's boundary leaves out the fork and then brings it in on a cue (t10 finding 4).

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture labels both radii and leaves the arc blank; A2's shows the chord, both radii, "6 cm" and "2π/3" with no shading. Nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 26 s, feedback 2 about 28 s (finding 5 adds about 2 s before its trims).

## Year 12 handoff check

Year 12 integration and rates with circles recall l = rθ and A = ½r²θ in a chip each; scenes 2 and 3 teach both in that form, with θ in radians. t10 needs radians as an axis, and the handoff poses exactly that question. Delivered.

## Site link

`trigonometry-and-measure-of-angles/lesson02.sa.html` matches the design's source (card 05, card 06, `we-1`, `we-3`). Correct.

No speech, design edits or commits were made.
