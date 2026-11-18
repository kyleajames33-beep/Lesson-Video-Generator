# Maths S12 t03 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t03.md`, "How do Pythagoras and trigonometry solve height and distance problems?" Source SHA256 `e7590dd46711f896c8cd3015b250a539ba99ded5f59d261047d88cd7babcbc90`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 Pythagoras; t01a, t01b and t02; Stage 4 parallel lines) as a Mathematics Standard student starting Year 12, including a Standard 1 student for whom this carries the Pythagoras point. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

A good video built on one picture. The drone gives Pythagoras ("two sides, no angle"), elevation and depression in turn, so the choice between Pythagoras and a ratio is a rule the student can apply. "Horizontal" and "line of sight" get plain meanings, and "never from the vertical" is shown as a crossed arc. The depression angle is drawn outside the triangle at the top, then moved down, with "the angle inside the triangle at the top is ninety degrees minus it" (MS-43), and the cliff's crossed slip is exactly the error that placement prevents. "The steeper you look down, the nearer the car" is a sound causal anchor. Recalculated with SymPy 1.14 (`work/brief-review-standard-t1/verify.py`, `python -I`, 0 failures): √(40² + 75²) = 85; tan⁻¹(40/75) = 28.072487° (4.349', so 28°4'); 80 ÷ tan 24° = 179.682942, 80 tan 24° = 35.618295; 32 ÷ tan 41° = 36.811789, 32 ÷ tan 23° = 75.387276, difference 38.575487 (75.39 − 36.81 = 38.58 as well); 25 tan 31° = 15.021515, 25 ÷ cos 31° = 29.165835 (Pythagoras agrees), 25 sin 31° = 12.875952; 6 ÷ tan 28° = 11.284359, 6 ÷ sin 28° = 12.780327, √(36 + 11.28²) = 12.776478, 6 tan 28° = 3.190257; the memory-aid case 50 ÷ tan 15° = 186.6. All correct.

## Findings

1. **Should fix, scene 4 (the rule behind "the two angles are equal" is not said).** "The two horizontals are parallel, and the line of sight crosses both, making a Z shape. So the two angles are equal, alternate angles." The general fact the conclusion rests on (angles in the corners of a Z between parallel lines are equal) is never stated; a Standard student who has forgotten Year 8 hears "Z shape, so equal" with no link. Fix: "The two horizontals are parallel, and the line of sight crosses both, making a Z shape. The angles in the corners of a Z between parallel lines are always equal. They're called alternate angles, from Year 8. So the depression at the drone equals the elevation at the pad, twenty-eight degrees four minutes." Visual unchanged (the hand Z and both arcs lighting together). Students should be able to explain why an angle of depression can be used at the bottom of the triangle. About 6 s.

2. **Should fix, scene 6 (the two-car picture cannot fit as described).** With the block plate about 560 px tall for 32 m (17.5 px per metre), the cars "at their scaled distances" sit 644 px and 1,319 px from the block, and 52 px rows such as "far: 32 ÷ tan 23° = 75.39… m" (about 800 px) are also placed "at the right". They will collide. Fix: block about 360 px tall (11.25 px per metre: near car 414 px, far car 848 px from the block, checked in `suggested.py`), the picture in the left 1,100 px, rows in the right 750 px at 44 to 52 px. Keep the shaded gap and both brackets.

3. **Optional, scene 5 ("far too short").** The student cannot yet tell why 35.62 m is too short. Add: "A shallow look down means the boat is a long way out." About 3 s.

## Joins

t02 to t03: scene 1 opens on t02's final frame exactly (the drone, "40 m", "75 m", the dotted sight line, both chips). t03 to t04: scene 12's farm frame (north arrow, three pins with "which way?", no bearing drawn) is t04's stated opening frame. The farm plate is briefed here (ruling 17).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's picture shows no height and A2's no distance. A1 is elevation with tangent then a hypotenuse (Pythagoras or cosine); A2 is depression with the angle moved down, then Pythagoras, so the Standard 1 Pythagoras point is practised twice. Feedbacks give the answers, the reason, short working and one crossed slip (sine without the hypotenuse; multiplying when the distance is underneath), at about 28 s each. A phone clinometer at the school flagpole and a security camera are fair everyday anchors with no safety claim. The antenna is left out, as ruling 62 accepts.

## Key notes and length

The five notes are short and cover the choice, the horizontal, both definitions and the equal angles. About 499 s; findings 1 and 3 add about 9 s.

No speech, design edits, builds or commits were made.
