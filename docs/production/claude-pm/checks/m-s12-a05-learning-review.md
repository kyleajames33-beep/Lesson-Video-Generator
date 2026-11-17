# Maths S12 a05 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a05.md`, "How do tables, graphs and equations show exponential growth and decay?" Source SHA256 `cb44f4911ebfc804f842311ca03e39aa073d4ec08bc08306486b5314c52a6539`.

Written design reviewed by tracing it from its stated entry knowledge (a04b: adding the same amount each row gives a straight line; Year 11 Standard f01 and l02) as a Standard 2 student, and as a Standard 1 student who needs scenes 2, 3 and A1 and then goes to a07. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 4 should fix, 0 optional).

The two-video race is an excellent anchor: the steady video leads at day 3, the doubling one overtakes between days 5 and 6, and by day 10 it is ten times ahead. The ratio test is explained by doing it ("divide each number by the one before it, and you always get two"), the four-panel card lights one point in all four representations, and (½)ˣ landing on 2⁻ˣ is a real surprise with a one-line reason. Standard 1 gets a linear and an exponential graph from tables and predictions both ways (root ruling 9), and root ruling 10's letters are used. Recalculated with SymPy 1.14: both view sequences to day 10 (102,400 and 10,100); log₂ 500 ≈ 8.97 (just before day 9); 2ˣ at −4 to 3; 2⁻ˣ at −3 to 2; A1 320 and 35; A2 3ˣ and 3⁻ˣ at −2 to 2; (½)ˣ = 2⁻ˣ. All correct.

## Findings

1. **Should fix, scene 4 (zero and negative powers are asserted, and contradict the meaning just given).** The scene defines "two to the x" as "two, multiplied by itself x times", then says "Two to the zero is one. Two to the minus one is a half". Multiplying two by itself zero times, or minus one times, has no meaning from that definition, so a less confident student must simply memorise it. The design's cause chain (3) promises a reason, and the halving reason is already in the video's own story. Fix, replacing "Two to the zero is one. Two to the minus one is a half, and two to the minus two is a quarter.": "Walk the table to the left. Each step left divides by two: eight, four, two, then one, a half, a quarter. So two to the zero is one, two to the minus one is a half, and two to the minus two is a quarter." Visual: "÷2" arrows pointing left along the table, mirroring the "×2" arrows. Students should be able to work out 3⁻² = 1/9 in A2 by dividing, and scene 5's "the values halve" and a06's "a negative power means divide" then follow from what they saw.

2. **Should fix, scene 7 ("the bigger a is, the steeper it climbs").** The slider shows the full curves from x = −3 to 3. To the left of the y-axis 3ˣ is below 2ˣ (at x = −1, ⅓ against ½), so the picture contradicts "steeper" there. The same sentence was corrected in the Advanced e01 review (finding 1, accepted). Fix: "For any a bigger than one, the curve rises, and the bigger a is, the more steeply it climbs to the right of the y-axis, and the closer it hugs the x-axis on the left." Visual: on "on the left" ring the points at x = −1 on 2ˣ and 3ˣ (½ and ⅓). Students should see that every curve pivots through (0, 1).

3. **Should fix, scene 13 (the Standard 1 chip names a video that will not be found).** The chip says "Standard 1: your next video is 'When models stop matching reality'", but a07's YouTube title is "Limitations of Linear and Exponential Models". Quote a07's published title exactly on the chip, as for a01.

4. **Should fix, scene 3 (the day-7 point is off the graph).** The first window runs to 12,000 views, and the visual says A's day-7 point (12,800) draws "just under the top of the frame". It would be above it, so the prediction the student has just heard has no point to look at. Use views 0 to 14,000 (gridlines every 2,000) until the rescale on "read the graph".

## Joins

a04b to a05 matches exactly; the grey "?" arrows resolve into "×2" in scene 2, as planned. a05 to a06 matches: y = 2ˣ with (0, 1) "starts at 1", the apartment building with "$650 a week" and "rent: up 4% a year", the car chip and "real things don't start at 1" are a06's opening frame, and no model is written. Standard 1 viewers go to a07, whose first sentence states the city model in full.

## Practice and feedback

Both cards keep every demand visible through the 10 s countdown; A1's tables are plain ink with no arrows, and A2's table and axes are empty. A2 asks for four things (tables, sketch, intercepts, relationship), which is a lot for 10 s, but "Pause here to answer." covers it. Feedback is brief with one crossed slip each (about 28 s each). Video views are a fair, non-science anchor (root ruling 11 applied to the bacteria hook).

## Key notes and length

The five notes are useful; note 5 ("A negative power is a fraction") will read better after finding 1. About 555 s with holds, 15 s under the cap; findings 1 and 2 add about 10 s, so use the named reserve trims if the voiced take runs long.

No speech, design edits, builds or commits were made.
