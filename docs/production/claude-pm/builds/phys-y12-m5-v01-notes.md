# phys-y12-m5-v01 build notes (pre-build on provisional timing)

Build agent (Claude), 21 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v01.md` (Revision 3 visuals win). No MP4 rendered.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m5-v01/common.ts` imports `work/physics-prebuild/p-y12-m5-v01/lesson.json` on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. Every change is keyed to a cue phrase with `cueFrame`; no fixed frames or estimated seconds are used. When the measured take lands at `docs/production/claude-pm/lessons/p-y12-m5-v01/measured/lesson.json`, change that import path and set `PROVISIONAL = false`; then re-run the grade check and the dense sweep.
- **Demonstrator plate (approved by root 21 November; fitted the same day).** `y12p-drop-launch-base-v1.png` and `y12p-drop-launch-slider-v1.png` (native 1568 x 1003, used unchanged at uniform scale 0.567, never stretched or cropped) are fitted in `src/explainer/physics/projectile/demonstrator.tsx` and switched on. The brief 222 registration findings are fixed only by translating the whole slider layer (left 30, up 29 native px) and placing the balls (60 native px, 34 px on screen):
  - start pose: A rests on the slider's pin just in from its tip, B rests on the ledge's right part (clear of the ledge's own stem), both ball bottoms at native y 449 (one height); B is about 4 native px clear of the striker face;
  - acceptance test (alpha pixel test over the slider's travel): at travel 0 to 3 px the pin is under A's centre and nothing overlaps either ball; at 4 px the pin has left A and the face reaches B (overlap starts by 5 px). The slide covers 20 native px per frame, so A's support leaves and the face meets B on the same (first) frame of the slide. Close stills at the release frames (757 to 762) confirmed it on screen: the balls sit in their seats in the cocked pose, and on the first slide frame A starts to drop while B leaves sideways.
  - consequences: the balls are 34 px (the plate's scale sets them), the launch point moved to x 640, A sits at x 435 on the pin, the coded bench now matches the plate's wood stub (top y 412, edge x 148), and the height scale stands beside the drop at x 375 from the ball bottoms (y 317) to the floor (y 917). The tag "one rod, one release" now points at the slider's upright.

## Files

Shared kit (new files in the existing `src/explainer/physics/projectile/` folder, beside the 25 October pilot files, which are unchanged):
- `flight.ts`: projectile maths with g = 9.8 (components, level-ground T, R, H, peak time, landing time from any drop, fall time, drop below the launch line, strobe instants, clocks with slow-motion factor, equal-scale world mapping, number formats) and `runFlight`, a field-motion run (`src/explainer/sims/field-motion.ts`, uniform field) from launch to landing.
- `board.tsx`: one visual system for v01 to v05: colour roles, symbols with axis-coloured subscripts, the steel-ball and launcher plates (uniform scale), bench, cliff and ground outlines, height scale, vector arrows, dimension brackets, carry arrow, readout cards, chips, dark-ink answer frame with tick, slate crossed chip (rule R1), working rows, hand notes, memory-aid frame, the two-column ledger with one clock (links, carry arrow, divider, glowing columns, boxed rows), launch triangle, angle arc and the v04-style flight lane.
- `demonstrator.tsx`: the drop-and-launch demonstrator slot (see above).
- Tests: three new tests in `scripts/explainer-sims.test.mjs` (fall time and strobe numbers, run against formulas for three launches, clocks and formats). 73 of 73 pass.

Lesson: `src/explainer/lessons/phys-y12-m5-v01/` (`common.ts`, `stage.tsx`, `s1.tsx`, `s2.tsx`, `s3.tsx`, `scenes.tsx`, `assets.ts`, `config.ts`). Registry: import and entry after `phys-y12-m5-v04`. Config `Explainer-phys-y12-m5-v01`, export `config_phys_y12_m5_v01`, PHYSICS, accent `#9c5a00` (as v04).

## Departures from the design

- Flights use the field-motion engine (`runFlight`, `stateAt`) for every ball position, shadow and readout, but are drawn by the lesson, not `FieldMotionView`, because the balls are the painted plate and two bodies share one clock.
- One stage geometry (500 px per metre, author note e; B's launch point at x = 560, so the bench edge sits at x = 480 rather than 300, to centre the stage) runs scenes 1 to 6, 9, 10 and 16, instead of camera push and pan moves. Each scene changes its overlay (force arrows and floor shadow; edge scale, growing gaps and v_y arrows; full ledger; velocity arrows and table) so no set-up repeats for long.
- Scene 3: the Moon inset stays to the end of the scene instead of shrinking away (it fills the right column under the model card).
- Scene 5: the joint replay of both shadows after "growing" has no time before the scene ends; the guide lines (B where the teal line meets the blue line) are shown in scene 6 at t = 0.30 s instead.
- Scene 6: the carry arrow starts on "Find it" (the design's "other" falls about 0.7 s before the scene ends).
- Scene 9: the drop brackets carry one label (0.784 m); all four drops (0.049, 0.196, 0.441, 0.784 m) are listed in a card in the right column, because the small first gaps cannot hold labels without covering the launch image.
- Scenes 13 and 15: feedback is built in the kit style (dark-ink answer frames, slate crossed chip) rather than the shared `FeedbackScene`, whose green answer and red mistake conflict with root rule R1. Attempt cards use the shared `QuestionScene`; notes use `KeyNotesScene` with `MemoryCard`.
- Scene 1: the question "Which lands first? A / B / together" is on screen from the first frame (the hook question), with the 3 s ring on "think"; scenes 4 and 5 add a live readout card under a shorter ledger (B's s_x and v_x, then its drop and v_y, read from the run).
- Scene 16 keeps the demonstrator (cocked) so B sits on its ledge instead of floating; ball A is removed.
- Scene 16: B's launch arrow is drawn large in a zoom panel beside the bench (a 2.0 m s^-1 arrow is only 80 px at the stage scale). The small ledger at the top right gains "u_x = ?" and "u_y = ?" rows on "two".

## Final frame (exported for v02)

`V01FinalFrame` in `s3.tsx` (`<HandoffBoard tilt={1} split={1} />`): heading "Why can one projectile be analysed as two motions with one clock?"; the demonstrator in its cocked pose on the coded bench (clamp at the left edge), the height scale and the floor; ball B (steel-ball plate, 34 px) on its ledge at the launch point (640, 300), no ball A, no strobe images; a short orange arrow at B tilted 35 degrees; dashed zoom lines from B to a framed zoom panel (770 to 1310, 330 to 800) holding the ball and an orange launch arrow "u" at 35 degrees above a dashed horizontal reference line with the arc "θ", a dashed teal horizontal outline "u_x = ?" and a dashed blue vertical outline "u_y = ?" completing the right triangle; the small two-column ledger at the top right (teal "horizontal (x)": s_x = u_x t, u_x = ?; blue "vertical (y)": a_y = −9.8, u_y = ?; the clock between them); the chip "Next: how does the launch angle set u_x and u_y?" under the panel. v02 should open with `import {V01FinalFrame} from '../phys-y12-m5-v01/s3'`.

## Timing-sensitive scenes (re-check after voicing)

- Scene 2 reveal: real-time release 8 frames after "release"; the one-eighth-speed replay (119 frames) starts on "slow motion" and must finish before "height"; the heading writes on at "clock", about 0.7 s before the scene ends.
- Scene 3 model: the feather-in-air beat runs only from "A feather" to "on the Moon" (about 2 s provisionally); the hammer and feather fall from "hammer" to the second "together".
- Scene 4 horizontal: the floor-shadow replay (119 frames) from "flight"; brackets land as the shadow passes each image (not before "centimetres" minus 1 s); "s_x = u_x t" is boxed on "time", about 0.7 s before the scene ends.
- Scene 5 vertical: the edge-shadow replay from "identical"; gaps from "Every tenth"; v_y arrows from "gains"; "gaps grow" on "growing", about 0.8 s before the end.
- Scene 8: the slider sweep runs between "surprise" and "instead" (about 3 s provisionally); the twin replay (119 frames) from "Its fall time" must finish before "out".
- Scene 9: the orange trajectory draws from "bends"; the parabola card arrives 1 s before "parabola", about 0.9 s before the scene ends.
- Scene 16: the component outlines and chip arrive on the second "two", about 2.6 s before the end (final-frame hold).
- Repeated phrases keyed to a later occurrence: scene 3 "together" (2nd), scene 7 "squared" (2nd), scene 8 "metres" (2nd), scene 13 "metres" (2nd), scene 16 "two" (2nd). Check these again against the measured captions.

## Grade and sweep

**Grade checker** (`npm run grade:explainer -- Explainer-phys-y12-m5-v01`, report `out/explainer/Explainer-phys-y12-m5-v01/grade/Explainer-phys-y12-m5-v01-grade.md`): PASS WITH WARNINGS, 0 failures, 1 warning (attempt 2 frame 60% bare paper; question scene, warning only). The first run's second warning (17 px superscript in the feedback 1 card) was fixed by raising the shrunk card text to 29 px.

**Sheet:** `work/quality-audit/fixed/phys-y12-m5-v01-sheet.jpg` (the checker's 16 sheet frames, no stamps).

**Honest grade (re-graded 21 November with the demonstrator on): A- on provisional timing.** The hook and reveal now show the painted demonstrator with A and B in their seats and the release on one frame. The remaining soft frames are the attempt cards (picture slots about one third of the width; 50 to 60% bare paper in the first seconds before "Pause here to answer.") and the openings of feedback 1 and the memory aid (about 48% bare). Every teaching scene has the plates and a live readout or table read from the field-motion run. Re-check after voicing (timing list above) before calling it A.

**Dense sweep** (one still every 3 s plus every scene's first and last frame, 203 stills, two passes). Third pass (demonstrator on, 203 stills): fixed tags over the plate ("same as A", the scene 5 axis key, the scene 10 launch and landing arrows and "direction turned"), the scene 4 "no horizontal force" tag against the ledger, and scene 6 ledger rows that wrapped. Fixed after pass 1:
- the whole stage was left-heavy with an empty middle: moved the launch point from x 380 to 560;
- the scene 4 and 5 ledgers were tall, mostly empty columns: shortened, with live readouts below;
- "0.20 m" labels touched each other: staggered;
- the gap labels 0.049 m and 0.147 m overlapped: separated;
- ledger "t" tabs sat on the column titles: moved onto the top edge; the carry arrow crossed row text: moved to the foot of the columns;
- crossed chips showed the strike before the cross cue (a dash-length strike that Chrome draws in full): replaced by a clip reveal in the kit;
- tags over the right column or over images (trajectory, level at every flash, only t crosses, g arrow, speed readout, v_y note, real ball note, direction turned, same gap): moved;
- scene 7's lower half was empty before the working: added a two-step plan that gives way to the working on "Using";
- scene 6's floor ended before B's landing; scene 13's picture was tiny: enlarged.
Checked in pass 2 and the final sheet: no text over text or plates, no clipped labels, no faint main visuals (strobe images keep a solid ink rim; paths are solid thin lines), handoff frame matches `V01FinalFrame`, cue occurrences as listed above. Motion still needs judging at playback speed once voiced.

## Measured timing switch (22 Nov 2026)

Build agent (Claude). Work done 22 to 23 November; no MP4 rendered, narration untouched.

- **Switch:** `common.ts` now imports `docs/production/claude-pm/lessons/p-y12-m5-v01/measured/lesson.json` (brief 259 take). The `PROVISIONAL` flag was removed (nothing else used it). Nothing under `src/` imports `work/physics-prebuild` any more (grep is empty).
- **Cue check:** all 109 cue calls resolve on the measured captions; the measured tokens are identical to the provisional ones scene by scene, so every repeated-phrase cue lands on the same occurrence as designed (scene 3 "together" #2, worked-time "squared" #2, worked-distance "metres" #2, feedback-1 "metres" #2, handoff "two" #2, all checked in context). No fallbacks, no literal frame ranges in the lesson code.
- **What moved:** scene durations now come from the measured file (17 scenes, 14,929 frames, 8.3 min; key notes measured at 1,350 frames, above the 1,200 floor). Timing-sensitive checks: reveal replay ends at frame 271, before "height" (341); feather beat 2.1 s; scene 4 shadow replay ends 799; scene 8 twin replay ends 636, before "out" (642, 6 frames spare); parabola card 1 s before "parabola" (857, scene ends 881); handoff chip on "two" #2 at 535 of 620.
- **Fixed:** (1) memory-aid opening: the motto was invisible until "two columns" (2.6 s), leaving a near-empty card and no 44 px line (checker failure); it now shows from the first frame and pulses on its cue. (2) feedback-1: the lower left was bare for the first 19 s (checker failure, 60% bare); added a short PLAN card ("(a) vertical column: s_y = −1.25 m, u_y = 0, find t; (b) carry t across: s_x = u_x t") that fades before the crossed slip arrives. (3) key notes: the five notes and the memory card now arrive in the first second (frames 4 to 24) instead of over 2.3 s, so the notes hold is never sparse.
- **Grade checker:** PASS WITH WARNINGS, 0 failures, 1 warning (attempt-2 question card 60% bare, question scene, warning only). Report: `out/explainer/Explainer-phys-y12-m5-v01/grade/Explainer-phys-y12-m5-v01-grade.md`.
- **Sheet:** `work/quality-audit/fixed/phys-y12-m5-v01-sheet.jpg` (the checker's 16 sheet frames, no stamps, regenerated on the measured timing).
- **Dense sweep:** 199 stills (one every 3 s plus each scene's first and last frame) on the measured timing, montaged per scene and read. No text over text or plates, no clipped labels, no faint main visuals; the handoff matches `V01FinalFrame`. Remaining soft spot: the model scene's right column is empty for its first 6 s (stage and strobe images fill the left).
- **Grade: A-.** Motion still needs judging at playback speed.
