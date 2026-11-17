# Maths A11 t07 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t07.md`, "When can the sine rule give two triangles, and which rule fits a problem?" Source SHA256 `92a8cda7e90e5b8d193e483b0f87130eaa62e30bbc317ff37fd24fccd5fc8995`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t05, t06, t04) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

The ambiguous case is usually taught as a rule to memorise; here it has a picture with a meaning. The signal circle cuts the highway twice, the road turns teal while the car is in coverage, and the two triangles are where coverage starts and ends (about 2.95 km and 10.84 km from town). The graphing app shows why the calculator reports one angle: every height below the top comes up twice, at θ and 180° − θ. The angle-sum test is shown passing (164.3°) and failing (226.9°), so students see both outcomes. The construction slider counts 0, 1, 2, 1 triangles as a grows, which makes b sin A < a < b a description of a picture rather than a formula. Scene 6 reuses the corrected `we-3` (S11-15) and crosses the early-rounding slip. Recalculated: sin B = 0.826441, B = 55.7349° or 124.2651°; C = 84.265° and 15.735°, c = 10.8356 and 2.95324 km; b sin A = 5.78509; `we-2` 0.391540, 23.0503°, partner 156.95°; `we-3` a² = 77.6884, a = 8.81410, B = 48.312° (slip 48.415°); A1 5.2992, 62.031° or 117.969°, C = 85.97° or 30.03°; A2 12 sin 50° = 9.1925. All correct.

## Findings

1. **Should fix, scene 5 ("The shortest distance from C to the highway is the perpendicular, b sine A").** The perpendicular is drawn, but why its length is b sin A is not said, and A2 depends on that value alone. A student will ask "why b and why sine A?". Fix. Narration: "The shortest distance from C to the highway is the perpendicular. It makes a right-angled triangle with hypotenuse b, and the perpendicular is opposite A, so it's b sine A, here about five point seven nine kilometres." Visual: on "right-angled triangle" the small triangle from A, C and the foot of the perpendicular tints, b ink as the hypotenuse, the perpendicular amber, hand tag "opposite A: b sin A". Students should be able to find the lower bound in a new triangle without recalling a formula.

2. **Optional, scene 2 or 5 (link to t05's acute angle).** In t05, B "must be acute, because it faces the shorter side". Here B faces nine, the longer of the two known sides, which is exactly why the obtuse partner is possible. One sentence would join the two videos and explain a < b from what students already know: "Last time, B faced the shorter side, so it had to be acute. Here B faces nine, the longer side, so it can be obtuse too." It fits best at the end of scene 5, before "So when A is acute ...".

Open decisions: kilometres for the tower (1) are realistic and make the two answers mean something; keep. The case a = b (2) is fine unspoken, with the counter showing "1".

## Joins

t06 to t07 matches as a frame (town A, the tower at C, "AC = 9 km", the road at 40°, "signal reaches 7 km", "B ≈ 55.7°", "the only triangle?"). t06's review (finding 1) asks for B, its 7 km line and the 55.7° angle to be drawn on that frame; if applied, t07's boundary and scene 1 list them, and scene 1's B₁ is that point. t07 to t08: the cake tin, the blue centre angle with its teal arc, the string labelled "string = radius", "360° a turn: a choice", "measure with the radius?", "Next: radians" and "?" are t08's opening frame, and t08's first line picks them up.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. Both pictures show angle A, side b and the ray from A with no arc and no perpendicular, which keeps the decision with the student. Each feedback gives the answer, the key reason (the condition; the partner fits) and one crossed classic mistake. Feedback 1 about 28 s, feedback 2 about 28 s.

## Later-video check

t15 reuses "two angles share a height" for sin x = k; the strand's practice video uses the decision tree. Scenes 2 and 6 deliver them. Delivered.

## Site link

`trigonometry-and-measure-of-angles/lesson08.sa.html` (`we-1`, `we-2`) with lesson07 `we-3` (S11-15 applied) matches the outline. Correct. The syllabus's "graphing applications" is met by the coded app screen in scene 2.

No speech, source edits or commits were made.
