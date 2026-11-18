# Maths S12 t05 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t05.md`, "How do bearings and right-angled triangles solve a navigation problem?" Source SHA256 `cf6e1aed89fa5e72a77a989d2a859cbdcdbeedc6755fd8be4cbfcbd7ca6a9472`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes, decisions and the two-route frame in section 3 of `checks/root-decisions-maths-s12-t01-t05.md`) by tracing it from its stated entry knowledge (t04 bearings; t01a and t01b ratios; t03 Pythagoras) as a Mathematics Standard student starting Year 12, and a second time as a Standard 1 student for whom this is the last trigonometry video. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

A good ending to right-angled trigonometry. "North line at every point" is earned: north lines are parallel, and north and east meet at 90°, so the ute's trip is a right-angled triangle. The 20 : 21 : 29 triangle gives exactly 2.9 km. The key idea, that the angle inside the triangle becomes a bearing only once you say where it starts and which way it turns, is shown in three contrasting cases (the ute, where it is the bearing; the yacht, where it is added to 040°; the ship, where it is 50° from south). The crossed 130° wedge that will not fit inside a right-angled triangle is a memorable picture. The Standard 1 path is complete (ruling 59): "If you're doing Standard 1, trigonometry is done, and next is bivariate data", with nothing assumed from t06. Recalculated with SymPy 1.14 (`work/brief-review-standard-t1/verify.py`, `python -I`, 0 failures): √8.41 = 2.9, tan⁻¹(2.1/2.0) = 46.3972°, + 180 = 226.3972; 040 + 180 = 220, 220 − 130 = 90, √(20² + 15²) = 25, tan⁻¹(15/20) = 36.8699°, 40 + 36.8699 = 76.8699, + 180 = 256.8699 (the site's component route, N 5.68 and E 24.35, gives the same 25 km and 76.87°); 85 cos 50° = 54.636947, 85 sin 50° = 65.113778; √74 = 8.602325, tan⁻¹(7/5) = 54.462322°, 360 − that = 305.537678; 12 cos 30° = 10.392305, 12 sin 30° = 6; the river: R = 35°, QR = 754.9346, PR = 868.4062, R at (434.20, 752.06) m, drawn at (260.5, 451.2) px; the memory-aid case 180 − tan⁻¹(4/3) = 126.87°. All correct.

## Findings

1. **Should fix, scenes 1 and 2 (the legs swap colours).** Scene 1 pulses the north leg amber and the east leg violet (t04's final frame), then scene 2 colours them north violet and east amber. Fix with t04 finding 1: north leg violet "2.0 km" and east leg amber "2.1 km" from t04 scene 11 onwards, and scene 1's pulses in the same colours. No time change.

2. **Should fix, scene 5 (two unexplained steps in the busiest scene).** "At P, inverse tangent of fifteen over twenty" does not say which side is opposite, and "The yacht turned clockwise, so add it to the first bearing" leaves "why add?" open. The scene is also the longest in the strand (1,007 characters, about 76 s), and it ends with the bearing from C back to P, which the task strip does not ask for. Fix. Narration: "At P, the fifteen kilometre leg is opposite and the twenty is adjacent, so tangent. Inverse tangent of fifteen over twenty is thirty-six point eight seven degrees. C is further round clockwise from P than the buoy is, so add that to forty degrees." Take the designer's named trim ("And the bearing from C back to P is two five seven degrees true.") and keep the "back: 257°T" row silent. Students should be able to explain when the angle inside is added to a bearing. About +3 s net.

3. **Optional, attempt 1 picture.** The slot shows the drone top-view plate and a north arrow, but no depot mark. Add a small coded dot labelled "depot" at the north arrow's foot, so the student's sketch starts from a point. Nothing answer-bearing is added.

## Joins

t04 to t05: matches apart from finding 1's colours. t05 to t06 and b01 (ruling 59): scene 12 and the decisions file's section 3 agree exactly, and neither panel works a value. t06's design is still provisional on this frame (ruling 61) and differs in three details: its plate name is `ms12-river-tree-top-v1.png` (t05 briefs `ms12-river-crossing-top-v1.png`), its sight lines are "dashed" (t05: dotted), and its label reads "Standard 2: next, the sine rule" (t05: "Standard 2 next: the sine rule"). The t06 author should adopt t05's three exactly. t11's final frame must repeat the right panel full width (the t06 to t11 reviewer's check).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; neither picture draws a path or an angle. A1 (north then west) makes the student turn an inside angle into a bearing on the west side, a new case after the ute; A2 practises the split leg from south. Feedbacks give each answer, the reason, short working and one crossed slip ("054°T"; sine and cosine swapped), at about 30 s and 25 s; feedback 1 is at the limit, so measure it on the voiced take. A farm ute, a delivery drone, a ferry and a yacht are fair anchors with no safety claim.

## Key notes and length

Five short notes, each usable on a new problem. About 494 s; finding 2 adds about 3 s.

No speech, design edits, builds or commits were made.
