# phys-y12-m5-v10 build notes (pre-build on provisional timing)

Build agent (Claude), 23 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v10.md` (Revision 3 visuals win; readiness-check optional finding 1 taken: both givens strips now include "horizontal"). No MP4 rendered.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m5-v10/common.ts` imports `work/physics-prebuild/p-y12-m5-v10/lesson.json` on one marked line (`// PROVISIONAL TIMING: switch to docs/production/claude-pm/lessons/p-y12-m5-v10/measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. Every change is keyed to a cue phrase with `cueFrame`; no fixed frames; moves use `kfm` (keyframes forced to increase, so an early cue only shortens a move). When the measured take lands, change that import, set or remove `PROVISIONAL`, re-run the grade check and the dense sweep.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m5-v10/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 9, `s3.tsx` 10 to 15, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m5-v10`, PHYSICS, topic BALANCING TORQUES, accent `#9c5a00`. Registry: import and entry added by script after the last phys-y12-m5 entry present (v13).
- Kit: `src/explainer/physics/projectile/balance.tsx` (new, see v09 notes): two-layer seesaw (`y12p-seesaw-plank-v1.png` and `-stand-v1.png`, hinge (1086, 319)), `BalanceScale`, `TopSlew`, `TailToTail`. Uses `turning.tsx` for the crane.
- Numbers: every torque from the beam engine `solveBeam` (`src/explainer/sims/beam.ts`): crane 1.176 × 10⁶ N m each way; seesaw slider 352.8 N m against 245r; equal-distance slip +58.8 N m. The plank tilt is illustrative and follows the sign of the net torque (`7° × tanh(net / 60)`): left side down while the 25 kg arrow is short of 1.44 m, level at 1.44 m.

## Opening and final frames

- **Opening:** imports `V09FinalFrame` from `phys-y12-m5-v09/s3` and cross-fades (frames 10 to 34) into v10's own crane stage at the same geometry (`CRANE_STAGE`: mast x 560, ground y 900, scale 0.78). The v09 turning arrows fade on "four tonnes" as the masses and brackets arrive.
- **Final frame, exported as `V10FinalFrame` in `s3.tsx`** (`<HandoffBoard />`): heading "How do clockwise and anticlockwise torques balance?"; a coded top view: dashed circle (centre (620, 560), radius 290) with the full teal tip trace, the jib as a thick ink line from the navy mast dot at 45°, a teal tip dot; four equal teal velocity arrows (130 px) tangent at the right, top, left and bottom points; label "mast"; chip "speed: constant" at the top left; at the side, the four arrows copied tail to tail from (1500, 540) with "same length, four directions"; a dashed ink line between the up and left copies with "Δv = ?"; the hand tag "is the velocity changing?"; the chip "Next: how can speed be constant while velocity keeps changing?". v11 opens on it.

## Departures from the design

- Scene 1 heading "Five times heavier: why doesn't it tip?" (the design keeps v09's heading); the main question writes on at "That's how" in scene 2.
- Scene 2: the crane shrinks (camera continue, scale 0.66) so the working and the balance scale fit at the right; a "About the top of the mast" card fills the right column before the working.
- Scene 3: the crane is a thumbnail at the top left; the steady-turning inset is a large top view with a dot at each second ("36° every second").
- Scene 4: the 25 kg arrow sits dashed at 1.0 m with "r = ?" (no position is implied).
- Scenes 6 to 9 use the two-layer seesaw (brief 222), so the plank tilts (illustrative, sign of the net torque) instead of the design's static fallback.
- Scene 7: the two-conditions stage uses two cards ("Forces", "Torques") that fill in on cue, then the framed "complete (static) equilibrium" card.
- Feedback 1: the lab version is the painted metre rule with two mass-hanger plates on coded strings and a coded pivot triangle (no retort stand or boss: their registration on the rule is not reported, and the triangle reads as the pivot); the 150 g hanger slides from 70 to 90 cm on "ninety centimetre".
- Scene 8's ghost 100 m ring (half the acceleration) is a chip only, because a 100 m ring does not fit at the track's scale.
- The scene 14 crane plate shows for about 8 s, then cross-fades to the top view on "Look down". The "change" cue is the second occurrence (the first "change" is "the rotation doesn't change").
- Mistakes slate, answers in dark-ink frames (R1).

## Plates

Tower crane, crane load, seesaw plank and stand, metre rule, mass hanger. Uniform scale only; none missing. **Plate requests: none.**

## Timing-sensitive scenes (re-check after the switch to measured timing)

- Hook: the counterweight arrow grows 150 → 350 px over 30 frames from "five times heavier"; the 3 s ring from "prediction".
- Crane-torques: the camera move (frames 0 to 34); the main heading writes on at "That's how", about 2 s before the scene ends.
- Equilibrium-signs: the jib starts turning at "turning at a steady rate"; the second dots appear once per second after it.
- Solve-check: the slider runs 1.0 → 0.6 m (24 frames from "metres"), → 1.5 m (by +100), → 1.44 m (by +130); "net torque = 0" is framed at +130; the check chip and "less force, more distance" come later ("Check", "fits", "less force"). If "Check" arrives within about 4 s of "metres", the slider will still be moving under the check chip.
- Torque-not-force: the couple tilt runs from 10 frames before "turn" to 50 after; the complete-equilibrium card on "Complete balance".
- Two-slips: the 25 kg arrow slides back to 1.2 m over 40 frames from "Seat the lighter".
- Feedback 1: the hanger slides over 30 frames from "ninety centimetre".
- Handoff: the top view fades in over 30 frames from "Look down"; the trace starts at "tip of its jib"; "change" is occurrence 2.
- Repeated phrases keyed to a later occurrence: handoff "change" (#2); memory-aid "pivot" (#2). Check both against the measured captions.

## Grade and sweep

- **Grade checker:** PASS WITH WARNINGS, 0 failures, 9 warnings: sparse frames 52 to 58% (crane-torques, equilibrium-signs, seesaw-pivot, signed-sum, torque-not-force, feedback 1 and 2) and the two question cards (63%, 67%; question scenes). Report: `out/explainer/Explainer-phys-y12-m5-v10/grade/Explainer-phys-y12-m5-v10-grade.md`. Earlier runs failed on signed-sum (79%) and torque-not-force (60 to 63%): fixed with a larger seesaw strip, a "that leaves the two weights" card, the balance scale from the first frame, a "So far" card and weight labels.
- **Sheet:** `work/quality-audit/fixed/phys-y12-m5-v10-sheet.jpg` (the checker's 16 frames, no stamps).
- **Dense sweep** (one still every 90 frames plus each scene's first and last frame, 187 stills at 0.4 scale, montaged and read; feedback, handoff and notes also checked on the earlier look pass). Fixed: the child labels clipped at the left edge and sitting on the seats (now above the seats), the "30g"/"25g" labels under the "So far" card, the equal-distance equation colliding with the bracket labels (moved down), "from the pivot" crowding the bracket, the "Σ clockwise τ = Σ anticlockwise τ" line running into the top-view panel, the lighter-child chip on top of "less force, more distance", the hook's empty crane card (now "?" until each cue), the forces card keeping blank space for faded lines (lines now leave the layout once faded), the handoff caption running off the right edge. Soft spots: lower halves of the seesaw-pivot and signed-sum openings; the question cards.
- **Grade: A- on provisional timing.** Motion (the slider with the tilting plank, the couple, the slew) still needs judging at playback speed once voiced.
