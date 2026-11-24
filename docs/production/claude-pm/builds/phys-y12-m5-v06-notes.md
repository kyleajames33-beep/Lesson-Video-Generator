# phys-y12-m5-v06 build notes (measured take)

Build agent (Claude), 22 to 23 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v06.md` (Revision 3 visuals win). Timing: the measured take `docs/production/claude-pm/lessons/p-y12-m5-v06/measured/lesson.json` (15 scenes, 14,448 frames). Every change is keyed to a cue phrase with `cueFrame`. No MP4 rendered.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m5-v06/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 9, `s3.tsx` 10 to 15, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m5-v06`, export `config_phys_y12_m5_v06`, PHYSICS, accent `#9c5a00`. Registry: import and entry after v05.
- Lesson parts: `WallStage` (v05's `CliffStage`, imported read-only, with a coded exam-style wall), `Wall`, `TermBars` (blue u_y t up, violet ½gt² down), `Strobes`, `Impact`, `Target` (plain exam-style marker: upright line and small triangle).
- Imports read-only: `V05FinalFrame` and `CliffStage` (v05), `Tri`, `Lbl`, `StandingLauncher`, `launcherAt` (v02), `Ring` (v03). No other lesson or kit file was edited.
- Plates: launcher base and barrel, steel ball. Uniform scale only. No plate missing.

## Physics

All numbers come from `flight.ts` with g = 9.8: u_x 14.745, u_y 10.324, t at wall 1.6955 s, u_y t 17.505 m, ½gt² 14.086 m, s_y 3.4187 m, height 18.4187 m, clearance 10.4187 m; sideways 1.3889 s, drop 9.4522 m, 5.548 m, 2.45 m below. The 35° and sideways flights in scene 2 are field-motion runs (`runFlight`); the scene 8 slider reads `atWall(θ)` every frame (clearance turns from slate to ink near 6°). A1 1.1547 s, 5.0137 m, 4.01 m; A2 9.4 m, 0.4 m.

## Opening and final frames

- Opens on `V05FinalFrame` (imported), cross-fading over frames 10 to 34 into this lesson's stage (20 px per metre, launch point (260, 560), sea at 860). The ledger and the "this time: x known, so find t first" tag stay; the wall rises at 25 m on "something in the way".
- **Final frame, exported as `V06FinalFrame` in `s3.tsx`** (`<HandoffBoard />`): heading "Will a projectile clear a wall at a known horizontal position?" (fully written); level ground at y 860, 12 px per metre; the painted launcher in its pit at 45° with the muzzle at (200, 860) (kit `FlightLane`, launcher width 170) and the ball at the muzzle; an orange launch arrow (150 px at 45°) with "u = 30 m s⁻¹" to its left and a "θ = ?" arc; the target marker 72 m out at x 1064 with "target" above; a teal "72 m" bracket under the ground; two dashed orange paths (25.81° and 64.19°) from the muzzle to the target, each labelled "θ = ?"; the small ledger at the top right (teal "s_x = 72 m", blue "s_y = 0 (level)", one clock "t"); a card "level ground | u = 30 m s⁻¹ | target 72 m away | aim at θ = ?" at (1290, 520); the chip "Next: why can two launch angles reach the same target?" at (1290, 790). v07 opens with `import {V06FinalFrame} from '../phys-y12-m5-v06/s3'`.

## Departures from the design

- Coded stage at 20 px per metre with the launch point at (260, 560), sea at 860 (design: (100, 600) and 900), to fit the painted launcher in its pit and keep the right column free. Cliff face 8 px right of the muzzle so the sideways launch clears it.
- Scene 1: the wall rises on "something in the way" (design: "Twenty-five metres out"), so the first 10 s are not empty; the 25 m bracket still arrives on "Twenty-five". The sideways launch is a dashed arrow; the barrel itself turns to 0° in scene 2 before the sideways flight.
- Scene 2: the 35° flight starts so the ball passes the wall on "over"; the sideways flight hits the wall on "wall". The impact chip and the outcomes card are ink and slate (R1), not red.
- Scene 3: the givens are shown from the first frame with "?" until each is spoken.
- Scene 4: a "Which column gives t?" card (vertical ✗, horizontal ✓) fills the right column; the clock reads "time at the wall t".
- Scene 5: the "camera push" is a real zoom (20 to 22 px per metre over 34 frames); the term bars stand just right of the wall; a vertical-column card (u_y, a_y, t carried from x) fills the lower right; "s_y = ?" stands on the bracket until "wall".
- Scene 6: pull back to 20 px per metre; the term bars are dropped here (they collided with the working rows); the working rows sit in the sky over the stage.
- Scene 7: the rounded block is a slate card (R1) with a "What if you round before you subtract?" line until the first rounding; result bars and term bars are drawn from the first frame.
- Scene 8: the 35° trace is drawn only to the wall (the right side holds the 2.45 m bracket); the slider panel replaces the sideways working card when the sweep starts.
- Scene 9: the method hold has the 3 s countdown ring the measured take asks for (design: a 2 s hold).
- Scene 14: a recap card (when, how high, compare) fills the right column until "take the wall away".
- Attempt pictures: attempt 1 is not to scale (stated on the picture) so the 2.0 m platform, launcher and 3.0 m wall read clearly.
- Mistakes are slate, answers in dark-ink frames throughout (R1).

## Repeated phrases keyed to a later occurrence

reveal "moment" (2nd); time-to-wall "clock" (2nd); datum-clearance "sea" (3rd); method "compare" (2nd); feedback-2 "ground" (2nd). All checked against the measured captions.

## Grade and sweep

`npm run grade:explainer -- Explainer-phys-y12-m5-v06` (23 November 2026, src build): PASS WITH WARNINGS: 0 failures, 4 warnings (sparse frames: hook 54%, datum-clearance 52%, attempt-1 56%, attempt-2 54% bare paper). Sheet: `work/quality-audit/fixed/phys-y12-m5-v06-sheet.jpg`; report `out/explainer/Explainer-phys-y12-m5-v06/grade/Explainer-phys-y12-m5-v06-grade.md`. Scoped typecheck clean. Dense 3 s sweeps (stills every 90 frames plus every scene's first and last frame) reviewed before the grade; fixes are listed above.

Dense sweep: one still every 90 frames plus every scene's first and last frame (191 stills, rendered from a build mirror in `work/m5v68/`), montages read per scene. Fixed after the sweep: the hook's empty first 10 s (wall rises earlier), a tag over the "15 m" label, empty givens boxes and working rows in the set-up, the clock value overflowing the ledger clock, the empty right column in the time-to-wall scene, the bare left half in the height scene, the datum scene's working rows running over the term bars and its 18.42 m label crowding the 15 m label, the answer frame running off the right edge, thin rounding bars and empty bottom half, the sideways row overflowing its card, the feedback 1 path running off the frame, a small attempt 2 picture, the empty sky in the handoff, and the final frame's heading missing its last letter (now written from frame −200).
