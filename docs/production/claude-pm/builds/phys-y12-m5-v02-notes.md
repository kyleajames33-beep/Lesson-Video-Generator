# phys-y12-m5-v02 build notes (pre-build on provisional timing)

Build agent (Claude), 21 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v02.md` (Revision 3 visuals win). No MP4 rendered.

## Status

- **Timing is provisional.** The provisional file was stale (design hash changed today); regenerated with `python -I work/physics-prebuild/make-provisional.py phys-y12-m5-v02` (scene ids and narration identical to the old file; 16 scenes, about 507 s). `src/explainer/lessons/phys-y12-m5-v02/common.ts` imports it on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. Every change is keyed to a cue phrase with `cueFrame`.
- **Plates:** all present (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`, `phys-y11-steel-ball-v1.png`; the opening reuses v01's final frame with the drop-and-launch demonstrator). Uniform scale only.

## Files

`src/explainer/lessons/phys-y12-m5-v02/`: `common.ts`, `parts.tsx` (launch triangle with the angle from the horizontal or the vertical, a launcher standing on a ground line, strobe images), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts`. Registry: import and entry after phys-y12-m5-v01. Config `Explainer-phys-y12-m5-v02`, export `config_phys_y12_m5_v02`, PHYSICS, accent `#9c5a00`. Everything else comes from the shared kit in `src/explainer/physics/projectile/` (flight maths, field-motion runs, ledger, arrows, brackets, cards, launcher plates).

## Opening and final frames

- Opens on `V01FinalFrame` (imported from v01); on "tilt" it fades to the launcher on level ground and the barrel turns to 30°.
- Final frame exported as `V02FinalFrame` in `s3.tsx`: heading "How does launch angle set the two initial velocity components?"; the launcher in its pit at 50° on level ground (15 px per metre); the rising half of the 25 m s^-1, 50° path solid orange to the peak, the falling half dashed down to the launch level; the ball at the peak with one teal arrow "16.1 m s^-1" (no blue arrow); a vertical bracket from the ground to the peak "?", a bracket along the ground "t = ?", and a dashed orange arrow at the landing point "v = ?"; the ledger small at the top right (teal "u_x = 16.1", blue "u_y = 19.2", the clock between); the chip "Next: height, flight time and landing velocity". v03 should open with `import {V02FinalFrame} from '../phys-y12-m5-v02/s3'`.

## Physics

- Scene 5's flight (20 m s^-1 at 30°) and scene 15's (25 m s^-1 at 50°) are field-motion runs (`runFlight`); the ball, clock and live v_x, v_y readouts read `flightAt` of that run. Scene 8's case is 25 m s^-1 at 40° above the horizontal (u_y = 16.07, peak 1.64 s), as the coordinator specified. Scene 4's slider is exact trigonometry with the readout check u_x² + u_y² = 400.

## Departures from the design

- Scene 1's hook stage uses a larger arrow scale (28 px per m s^-1) than scene 4's sweep (25 px per m s^-1) so the launch arrow reads at a glance; the design's 14 px per m s^-1 made the triangle too small on screen.
- Scene 2: the boxed component equations stay beside the triangle in the right column; the ledger returns in scene 5 (no move animation between them).
- Scene 5 shows all strobe images of the rise from the first frame (solid rims) and replays the ball through them from the second "second" to "runs out"; the slow-motion factor is computed from those two cues, so it re-times itself to the voice.
- Scene 7: the camera is on the peak with the path either side; the ball moves 0.3 s on along the real path on "turns the ball", and the "if a = 0" line is a dashed ink line (not faint).
- Scene 9: trap 2's triangle appears on "The second", so the right half of the frame is empty for the first 15 s (trap 1 fills the left half).
- Feedback scenes use the kit's dark-ink frames and slate crossed chips (rule R1), not the shared `FeedbackScene`.

## Repeated phrases keyed to a later occurrence

Scene 1 "up" (2nd and 3rd); scene 3 "second" (2nd), "twenty" (5th); scene 4 "across" (2nd); scene 5 "second" (2nd); scene 7 "horizontal" (2nd); scene 8 "second" (2nd); scene 9 "forty" (2nd). Check these against the measured captions.

## Timing-sensitive scenes (re-check after voicing)

- Scene 1: the v01 frame fades on "tilt"; the barrel turns in 40 frames after it.
- Scene 4: the angle keyframes run "across" to 0°, "shrinks" to 45° by "forty-five", hold, then to 90° by the second "across", and back to 30° after "The angle only". Gaps under about 2 s would make the sweep jerky.
- Scene 5: the replay speed depends on the gap between the second "second" and "runs out".
- Scene 7: the ball's last move starts on "turns the ball"; the "if a = 0" line on "height".
- Scene 14: the crossed chip arrives on "Saying" and is crossed on "slip", near the end of the scene.
- Scene 15: the rising half flies from "The vertical part" and must reach the peak before "But that's only half"; the speed is computed from those cues.

## Grade and sweep

**Grade checker** (`out/explainer/Explainer-phys-y12-m5-v02/grade/Explainer-phys-y12-m5-v02-grade.md`): PASS WITH WARNINGS, 0 failures, 10 warnings. The first two runs failed on mostly empty frames in scenes 3, 8 and 9; fixed by enlarging the triangles and the small launch stage, showing the scene 8 equation strip from the first frame, putting the scene 3 "⅓ of the speed" claim on screen from the first frame (crossed on "not a third"), and heading scene 9 with both traps from the first frame. Remaining warnings: sparse openings (hook, triangle, worked example 1, worked example 2, traps, feedback 1 at 52 to 60% bare), the question scenes, "few pictures" (drawn triangles are not counted as diagrams), and "countdown not detected" in the peak scene's 3 s response hold (the provisional file gives the peak scene a short hold after its last sentence; the design has no countdown there, so none is drawn).

**Sheet:** `work/quality-audit/fixed/phys-y12-m5-v02-sheet.jpg` (the checker's 16 frames, no stamps).

**Honest grade: B+ on provisional timing.** Every teaching scene has a painted launcher, a coded triangle or a live readout, the worked examples follow the task, givens, working, framed answer and crossed slip pattern, and the notes are five short bullets with the memory card. It is not A yet: several openings are still 52 to 58% bare paper, and the hook and feedback frames are light. Root may want a denser right column in scenes 2 and 3 before voicing.

**Dense sweep** (201 stills, one every 3 s, plus targeted re-checks): fixed the scene 7 path and ball running under the answer cards, the "if a = 0" label over a card, the scene 5 arrows running into the ledger (stage narrowed to 46 px per metre), the scene 3 chips and tags over the working and the triangle, the scene 9 label collision, the feedback 2 question text running into the givens strip, and the hand tags written with a subscript y glyph the font lacks (now set as real subscripts). Handoff frames: the opening matches `V01FinalFrame` exactly (it is that component); the final frame is `V02FinalFrame`.

## Measured timing switch (22 Nov 2026)

Build agent (Claude). Work done 22 to 23 November; no MP4 rendered, narration untouched.

- **Switch:** `common.ts` now imports `docs/production/claude-pm/lessons/p-y12-m5-v02/measured/lesson.json` (brief 259 take); the `PROVISIONAL` flag was removed. Nothing under `src/` imports `work/physics-prebuild` (grep is empty).
- **Cue check:** all 91 cue calls resolve; measured caption tokens match the provisional ones scene by scene, so the repeated-phrase cues ("up" #2 and #3, "second" #2, "twenty" #5, "across" #2, "horizontal" #2, "forty" #2) land on the intended words (checked in context). No fallbacks, no literal frame ranges.
- **What moved:** 16 scenes, 14,084 frames (7.8 min). Angle sweep keys stay in order (−30, 214, 406, 442, 561, 679, 777, 827 of 909); in-flight replay runs 634 to 828; two-traps' second trap now arrives at 331 (was 439), so the right half is empty for 11 s instead of 15 s; handoff rise runs 194 to 360.
- **Fixed:** (1) memory aid: motto shown from the first frame with a pulse on its cue (was a checker failure: empty card, no 44 px line). (2) key notes: notes and memory card arrive in the first second (was a checker failure: 81% bare in the first second). (3) launch triangle: a "Naming the sides from θ" card (hypotenuse, adjacent, opposite, each pulsing on its cue) fills the right column until the cos and sin chips arrive. (4) peak scene: a live readout "the ball at the top" (v_x 17.3, v_y read from the run, 0.00 then −2.94 after "turns the ball") fills the lower middle. (5) time to the peak: a PLAN card ("At the top, v_y = 0. Solve the vertical equation for t.") fills the right middle before the working. A missing `Readouts` import left `s2.tsx` failing to typecheck for a few seconds after one lock hold; it was fixed in the next hold before any bundle ran.
- **Grade checker:** PASS WITH WARNINGS, 0 failures, 6 warnings: hook question frame 60% bare (question scene), launch triangle 52%, worked components 54%, feedback 1 52%, "countdown not detected" in the peak scene's short response hold (the design draws none), and "few pictures" (drawn triangles are not counted). Report: `out/explainer/Explainer-phys-y12-m5-v02/grade/Explainer-phys-y12-m5-v02-grade.md`.
- **Sheet:** `work/quality-audit/fixed/phys-y12-m5-v02-sheet.jpg` (the checker's 16 frames, no stamps).
- **Dense sweep:** 188 stills, then 43 re-sweep stills of the three edited scenes. No text over text or plates, no clipped labels, no faint main visuals; the opening is `V01FinalFrame`. Soft spots: the handoff's first 7 s (launcher, ground and ledger only) and the feedback-1 opening.
- **Grade: A-** (up from B+): the sparse peak and time-to-peak openings are filled; the remaining 52 to 54% frames are short openings.

- **Root v1 playback fix (23 Nov):** time-to-the-peak horizontal card: "u_x = 25 cos 40°" and "= 19.2 m s^-1" now sit on two lines inside the card (was running into the vertical card). Verified with stills at frames 6721 and 7350.
