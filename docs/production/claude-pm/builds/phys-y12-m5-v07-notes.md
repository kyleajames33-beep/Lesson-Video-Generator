# phys-y12-m5-v07 build notes (measured take)

Build agent (Claude), 22 to 23 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v07.md` (Revision 3 visuals win). Timing: the measured take `docs/production/claude-pm/lessons/p-y12-m5-v07/measured/lesson.json` (15 scenes, 13,397 frames). Every change is keyed to a cue phrase with `cueFrame`. No MP4 rendered.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m5-v07/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 9, `s3.tsx` 10 to 15, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m5-v07`, PHYSICS, accent `#9c5a00`. Registry: import and entry after v06.
- Lesson parts: `LaunchPits` (painted launchers with every muzzle at one launch point, each base in its own cut-away pit), `StrobesA`, `SideTri` (launch triangle with given sides), `SetupPicture` (answer-free attempt picture: ground, ball plate, target marker, bracket, "θ = ?"), `MiniSine` (small sin 2θ graph with a level line and dots).
- **Kit addition (new file):** `src/explainer/physics/projectile/ramp.tsx`: the launch-ramp rig at registered plate points (retort stand rod and base from its sidecar, boss ring on the rod and jaw on the ramp's clamp tab, ramp exit lip and tab from its sidecar, ball path along the track measured from the ramp plate's alpha edge and offset by the ball radius), `Sheet` (paper or carbon sheet lying on the bench), horizontal-launch helpers (`hFallT`, `hLaunchAt`, `HStrobes`) and `PlumbMark`. Course-neutral; no existing kit file changed. Used by v07's handoff and by v08.
- Imports read-only: `V06FinalFrame`, `Target` (v06), `Lbl` (v02), `Ring` (v03), `CliffStage` (v05).
- Plates: launcher base and barrel, steel ball; for the handoff the launch ramp, retort stand, boss and paper sheet. Uniform scale only. No plate missing.

## Physics

30 m s⁻¹, 72 m: sin 2θ = 0.784, θ = 25.81° and 64.19°, u_x and u_y 27.006 and 13.064 (swapped), product 352.8, flight times 2.666 s and 5.511 s, peaks 8.71 m and 37.21 m, R_max 91.84 m. Both scene 2 flights are field-motion runs on one clock (the low ball lands on "seconds", the high one 2.85 s later); the scene 8 slider solves sin 2θ = Rg ÷ u² every frame and draws both paths and the two barrels; at R = 100 m the readouts show "none" and the calculator chip shows "Error". WE1 45 m at 38°: 21.3 m s⁻¹. A1 15° and 75°; A2 14.0 m s⁻¹ at 45°. Cliff inset (scene 9, screen only, computed): 20 m s⁻¹ from 20 m to a target 50 m out needs 14.1° or 54.1° (not complementary).

## Opening and final frames

- Opens on `V06FinalFrame` (imported), cross-fading over frames 10 to 34 into the same stage; the single launcher gives way to the two launchers on "launcher".
- **Final frame, exported as `V07FinalFrame` in `s3.tsx`** (`<HandoffBoard />`): heading "Why can two launch angles reach the same target?" (fully written); a coded bench (wood band) with its top at y 880; the kit ramp rig with the exit 0.40 m above the bench at x 580, 850 px per metre, ramp 540 px wide (stand rod about x 327, boss on the rod holding the ramp's tab); the white sheet centred at x 900 (640 px wide) on the bench; a plumb cross under the exit; strobe images of the horizontal flight (u_x = 2.24 m s⁻¹, every 0.05 s, one quarter speed) and the ball resting just past the landing; a dashed orange "predicted" tick at x 1124 and an ink tick "measured: ?" 70 px further; a teal bracket "R" from the plumb point to the predicted tick; a "The model" card at (1290, 200) (no air resistance, constant g, predicts where it lands); the chip "Next: how can primary measurements test the horizontal-launch model?" at (1290, 470). v08 opens with `import {V07FinalFrame} from '../phys-y12-m5-v07/s3'`.

## Departures from the design

- Two launchers: one barrel cannot point two ways and two barrels on one base would put the muzzles 5 m apart, so each launcher sits in its own pit with its muzzle at the shared launch point (the steeper one behind). The launch point is at x 200 (design: 60) to match v06's real final frame.
- Scene 2: launched so the low ball lands on "seconds"; on one real-time clock the high ball lands about 2.8 s later.
- Scene 3: the conditions are a card listing all three from the first frame, ticked as each is said; the 72 m stage gives way to the 38° case on "Say a projectile".
- Scene 4: a "know / want" card fills the top right; the calculator chip (a plain readout chip) sits under the working.
- Scene 5: a "sine rises to 1 at 90°, then falls back" card fills the right column until the working starts; the backwards arrow is a slate arrow for 2 s.
- Scene 6: the swapped numbers fly from the low triangle to the high triangle on "swapped"; the triangles overlay on "Swapping".
- Scene 8: the stage zooms from 12 to 10 px per metre so the 100 m target fits.
- Scene 9: the memory card arrives on the first "product".
- Feedback scenes: small sine graphs (sin 2θ = 0.5 twice; sin 2θ = 1 once) fill the right column.
- The handoff stage is 850 px per metre with the exit at x 580 (v08's author note: 1,000 px per metre, exit at x 220), so the painted ramp, stand and paper fit; the exit is 0.40 m up as the design says (v08 then lowers it to 0.10 m on "ten centimetres").
- Mistakes slate, answers in dark-ink frames (R1).

## Repeated phrases keyed to a later occurrence

second-angle "eighty minus" (1st), memory-aid "product" (1st), memory-aid "complementary" (2nd), flight-times "metres" (2nd), handoff "model" (3rd). Checked against the measured captions.

## Grade and sweep

`npm run grade:explainer -- Explainer-phys-y12-m5-v07` (23 November 2026, src build): PASS WITH WARNINGS: 0 failures, 3 warnings (swap-product: the subscript "flight" renders at 24 px, at the 24 px floor; sparse frames memory-aid 58% and feedback-2 56%). Sheet: `work/quality-audit/fixed/phys-y12-m5-v07-sheet.jpg`; report `out/explainer/Explainer-phys-y12-m5-v07/grade/Explainer-phys-y12-m5-v07-grade.md`. Scoped typecheck clean. Dense 3 s sweeps (stills every 90 frames plus every scene's first and last frame) reviewed before the grade; fixes are listed above.

Dense sweep: one still every 90 frames plus every scene's first and last frame (178 stills), montages read per scene. Fixed after the sweep: the empty speed-backwards layout (conditions card, larger stage), the empty angle-backwards and second-angle right columns, the crossed chip over the mini stage's high path, small triangles and tags over labels in the swap scene, "out of reach" over the maximum-range card, the tag over the landing chips in the reveal, the small attempt pictures, the empty feedback right columns, the sparse lab stage (now 850 px per metre), and the final frame's heading.

## Root 3 s playback fixes (24 November 2026, brief 245)

From root's 3 s sample of the v1 render (`work/root-playback-sample/phys-y12-m5-v07-v1/`).

- Scene 6 "The physics: swap the parts": once the triangles stack on "Swapping", the "low: 30 m s^-1" label fades out of its old place (it sat on the high triangle's hypotenuse) and returns to the right of the low triangle's vertical side (x 519, y 470) after the slide. The hand notes "fast across, brief" and "slow across, long" moved from (150, 690) and (500, 215) to a stack beside the strobe stage at (560, 800) and (560, 860), so "slow across, long" no longer hits "high: 30 m s^-1" and the "13.1" side label no longer hits "fast across, brief". After the slide the "27.0" side label rises to y 300 (clear of the dashed 45° line), and the low triangle's angle arc uses radius 200 so "25.8°" sits clear of the high triangle's vertical side.
- Scene 9 "Swap the parts, keep the product": the "25.8°" arc uses radius 170 (new optional `arcR` prop on `SideTri` in `parts.tsx`; default unchanged), so the label sits inside the low triangle, right of the high triangle's vertical side, instead of being cut by it. The high triangle's "27.0" side label moved up to y 440, clear of the dashed mirror line.
- Verified with stills at frames 5130, 5310, 5490, 5560, 5620, 5670, 7700 and 8190 (`work/brief245/`). Scoped typecheck clean.
- Grade after the fixes (`npm run grade:explainer -- Explainer-phys-y12-m5-v07`, 24 November 2026): PASS WITH WARNINGS, 0 failures, 3 warnings, the same three as on 23 November (24 px "flight" subscript; sparse memory-aid 58% and feedback-2 56%).
