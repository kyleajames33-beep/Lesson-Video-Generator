# phys-y12-m5-v08 build notes (measured take)

Build agent (Claude), 22 to 23 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v08.md` (Revision 3 visuals win). Timing: the measured take `docs/production/claude-pm/lessons/p-y12-m5-v08/measured/lesson.json` (17 scenes, 14,329 frames). Every change is keyed to a cue phrase with `cueFrame`. No MP4 rendered.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m5-v08/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m5-v08`, PHYSICS, accent `#9c5a00`. Registry: import and entry after v07.
- Lesson parts: the bench stage on the shared `LAB` geometry (exported by v07), a coded release gate (hinged stop that swings up; no hand), a uniform camera (zoom and shift of the whole stage, plates never stretched), `Dot` landing marks, `Strip` (the paper plate with a teal distance scale, marks, spread band and mean tick), `GraphFrame` with the h to √h morph, `SpannerNut` (spanner and nut-plate plates at one scale from their sidecars: ring on the nut centre, force point 0.25 m out).
- Uses the new kit file `src/explainer/physics/projectile/ramp.tsx` (see v07 notes). No existing kit file changed.
- Plates: launch ramp, retort stand, boss, steel ball, paper sheet, carbon paper, spirit level, plumb bob, metre rule, sand tray (catch tray), light gate, spanner, nut plate. Uniform scale only. No plate missing.

## Physics and data

Model u_x = 0.32 ÷ √(2 × 0.10 ÷ 9.8) = 2.24 m s⁻¹; fall times 0.143 s and 0.286 s; R 0.32 m and 0.64 m; the live height control reads t, R and R ÷ √h (1.01) from the model every frame. Sample data (labelled "sample data for processing practice, not primary data"): free least-squares fit m = 1.003 m^½, intercept 0.002 m, u_x = 2.22 m s⁻¹. Illustrative repeats (labelled) 0.53, 0.55, 0.57 m, then 0.545 and 0.556 m (mean of 5 0.550 m). "Imagine" set: five marks 0.572 to 0.628 m (6 cm spread), mean 0.600 m, 4 cm short of 0.64 m. Proportional error: every R × 0.97, gradient 0.97. A1 0.72 ± 0.02 m; A2 2.21 m s⁻¹. No light-gate value is invented (the bars show overlap only, with no number).

## Opening and final frames

- Opens on `V07FinalFrame` (imported), cross-fading over frames 10 to 34 into the same bench stage; on "ten centimetres" the ramp slides down to 0.10 m, the flight replays to 0.32 m on "thirty-two", and on "forty centimetres" it slides back up to 0.40 m.
- **Final frame, exported as `V08FinalFrame` in `s3.tsx`** (`<HandoffBoard />`): heading "How can primary measurements test the horizontal-launch model?" (fully written); top view: the nut-plate plate centred at (520, 600) and the spanner plate gripping the nut (ring on the nut centre, handle pointing right, force point 400 px out at (920, 600), so 1,600 px per metre); three amber arrows of equal length (210 px) from the handle end, each labelled "80 N": perpendicular (straight up), at 30° above the handle direction, and along the handle towards the nut; a curved ink arrow over the nut with a large "?"; the caption "top view: a spanner on a stuck nut"; a card at (1290, 200) "Same force, three directions: which turns the nut best? which does nothing?"; the chip "Next: why does a force turn an object more effectively at some angles?" at (1290, 440). v09 can open with `import {V08FinalFrame} from '../phys-y12-m5-v08/s3'`.

## Departures from the design

- Stage scale 850 px per metre with the exit at x 580 and the bench at y 880 (author note c: 1,000 px per metre, exit at x 220), so the painted ramp, stand, boss and the paper fit together and the 0.50 m flight lands on the paper.
- Scene 1 opens on last time's exit height (0.40 m) and moves to 0.10 m on "ten centimetres" before rising again on "forty centimetres".
- Scene 2: the height sweep (0.40 → 0.50 → 0.10 → 0.40 m) runs during "h equals ... twice the time"; the 0.40 m launch starts on "horizontal velocity" and lands before "sixty-four".
- Scenes 3 to 5 are one bench stage with a camera: push to the ramp (×1.35), push to the paper and plumb line (×1.3), pull back. The spirit level sits on the exit on "spirit level". The h brackets' tags ("h to the bottom: the actual fall", "h to the centre ✗") sit under the bench so they are not clipped.
- Scene 4: the carbon sheet slides away after the landing to show the dark mark (instead of a lifted corner); no inset of the two ball positions; a measurement card and the empty table fill the right column.
- Scene 5: the "without a tray" path is a slate dashed line with a slate tag (R1); the risk card lists all three checks from the first frame and ticks each on cue.
- Scene 6: a small bench shows the three illustrative launches landing at 0.53, 0.55 and 0.57 m on their cues before the rule inset replaces it.
- Scene 8: the light-gate inset (zoomed exit) is on screen from the first frame and the gate plate appears on "light gate"; a "from the sample data" card fills the right column until the working.
- Scene 9: a small bench at the lower right shows the predicted tick and the short cluster on the paper.
- Scene 11: the memory card arrives on "Repeats".
- Mistakes slate, answers in dark-ink frames (R1); the systematic shift uses the design's red-brown.

## Plate notes (no request)

The spirit level and plumb bob edge clean-up from the design's asset brief was not checked at render size; at their sizes here no fringe was visible in the sweep stills.

## Repeated phrases keyed to a later occurrence

hook "The same" (2nd), "four times" (2nd); prediction "twice" (2nd), "prediction" (2nd); feedback-1 "metres" (2nd), "accurate" (2nd). Checked against the measured captions.

## Grade and sweep

`npm run grade:explainer -- Explainer-phys-y12-m5-v08` (23 November 2026, src build): PASS WITH WARNINGS: 0 failures, 6 warnings (sparse frames 52% to 58%: linearise, gradient-test, attempt-1, feedback-1, attempt-2, feedback-2). After this grade the scene 2 ledger card was made taller (h 330) and the model readouts moved down to y 540 so the third vertical row (t = √(2h ÷ g)) is no longer covered. Sheet: `work/quality-audit/fixed/phys-y12-m5-v08-sheet.jpg`; report `out/explainer/Explainer-phys-y12-m5-v08/grade/Explainer-phys-y12-m5-v08-grade.md`. Scoped typecheck clean. Dense 3 s sweeps (stills every 90 frames plus every scene's first and last frame) reviewed before the grade; fixes are listed above.

Dense sweep: one still every 90 frames plus every scene's first and last frame (193 stills), montages read per scene. Fixed after the sweep: the h label over the ball's path at 0.10 m, the empty right column in the hook, the ledger text wrapping into the readouts, the fair-test zoom that left the lower half empty, clipped tags in the measuring scene, the empty risk card, the sparse repeats scene, the invisible light gate, the empty gradient and spread scenes, the late memory card, the small attempt picture, the small feedback strip, the key notes arriving too slowly, and 17 px subscripts in the readout title.

## Root 3 s playback fixes (24 November 2026, brief 245)

From root's 3 s sample of the v1 render (`work/root-playback-sample/phys-y12-m5-v08-v1/`).

- Scene 6 "Repeats and uncertainty": the caption "illustrative values, h = 0.30 m" moved up 50 px (y 300), so "spread 0.04 m" above the bracket no longer overlaps it. The hand note "the scatter limits us" moved from the end of the "1 mm divisions (to scale): reading ± 0.5 mm" line to the right of "the 40 mm scatter band" label (830, 895), inside the ruler card.
- Verified with stills at frames 4500, 4590, 4680 and 4770 (`work/brief245/`). Scoped typecheck clean.
- Grade after the fixes (`npm run grade:explainer -- Explainer-phys-y12-m5-v08`, 24 November 2026): PASS WITH WARNINGS, 0 failures, 6 warnings, the same sparse-frame warnings as on 23 November (52% to 58%).
