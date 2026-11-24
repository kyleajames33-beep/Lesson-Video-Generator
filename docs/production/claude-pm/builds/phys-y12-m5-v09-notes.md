# phys-y12-m5-v09 build notes (measured take)

Build agent (Claude), 23 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v09.md` (Revision 3 visuals win). Timing: the measured take `docs/production/claude-pm/lessons/p-y12-m5-v09/measured/lesson.json` (15 scenes, 13,565 frames, 7.5 min). Every change is keyed to a cue phrase with `cueFrame`. No MP4 rendered.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m5-v09/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 9, `s3.tsx` 10 to 15, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m5-v09`, export `config_phys_y12_m5_v09`, PHYSICS, topic TORQUE, accent `#9c5a00`. Registry: import and entry after v08.
- **New kit files (no existing kit file changed):**
  - `src/explainer/physics/projectile/turning.tsx`: spanner and nut plates at one scale (from their sidecars), tower crane and load plates (`craneGeom`: mast pivot, hook, counterweight centre, load's brick centre and bottom from an alpha profile), `TurnArrow` (curved turning arrow that draws on), `ArcAngle`, `RightMark`, `DashLine`, `PivotDot`, `PenRing`, role colours `TURN`.
  - `src/explainer/physics/projectile/balance.tsx` (used by v10): two-layer seesaw, `BalanceScale`, `TopSlew`, `TailToTail`.
- Every torque on screen is computed with the beam engine's `torque()` (`src/explainer/sims/beam.ts`), which the sims README lists; the design's "no engine" note was stale. The slider and sweep readouts are read from it every frame.
- `kfm` in `common.ts`: keyframes whose frames are forced to increase, so a later cue arriving early can only shorten a move, never reverse it.

## Opening and final frames

- **Opening:** imports `V08FinalFrame` from `phys-y12-m5-v08/s3` (read-only; v08's export exists) and cross-fades over frames 10 to 34 into v09's own stage at the identical geometry (nut (520, 600), handle end 400 px right, the same three 210 px pushes). Re-match only if v08's `HandoffBoard` changes.
- **Final frame, exported as `V09FinalFrame` in `s3.tsx`** (`<HandoffBoard />`): heading "Why does a force turn an object more effectively at some angles?"; coded ground line at y 900; the tower crane plate (scale 0.78, mast axis x 560; exported as `CRANE_STAGE`) with the crane-load plate hanging from the hook; amber weight arrows down from the load and from the counterweight with "load's weight" and "counterweight's weight"; an orange curved arrow "clockwise" over the jib side and a blue curved arrow "anticlockwise" over the counter-jib side, both about the mast top; a navy pivot dot labelled "pivot" at the mast top; a card "Torque depends on: its size, F / its distance, r / its angle, θ"; a chip "Real objects: several forces at once"; the chip "Next: how do clockwise and anticlockwise torques balance?". No masses or distances. v10 opens on it.

## Departures from the design

- Scene 1 heading "Same force, three directions: rank them" (the design keeps last time's projectile heading through scene 1); the main question writes on at "So why" in scene 2 rather than on "others" (0.7 s before the scene ends).
- Scene 2: the turning-tendency arrows are concentric arcs about the nut (A 120°, B 60°, 6° of arc per N m), labelled A and B; "just shoves" is an ink tag (R1, not red).
- Scene 3: the push slides 0.25 → 0.05 → 0.25 → 0.125 m (stops on "halfway"), returns to the end on "For a force"; a thin ink reference arc "full: 20 N m" sits outside the live arc. The 2,400 px per metre push is a uniform zoom (600 px arm).
- Scene 4: the two components are drawn from the point of application as a rectangle (with dashed completion lines) rather than tip to tail; a plan card fills the right column before the working.
- Scene 5: the syllabus tag is "two forms of one formula" (readiness check finding 2, no course label). A "second way" plan card and two definition chips fill the right column before the working.
- Scene 6: the navy r arrow is drawn just below the handle (with dashed drops) so it does not sit on the push; the tail-to-tail panel opens on "two arrows", with a "Push C" card (r⊥ = ?, τ = ?) before it. The 0° pull is a solid thin arrow (R2).
- Scene 7: the sweep uses keyframes 0° on "It's zero", 90° on "ninety degrees", 180° on "eighty"; the live teal F sin θ component is drawn on the stage.
- Scene 8: a "The case" card fills the right column until the second slip.
- Scenes 9 to 13: the memory card shows from the first frame and pulses on its cues; a second card states the line-through-the-pivot case. Feedback answers in dark-ink frames, slips slate (R1).

## Plates

Spanner, nut plate, tower crane, crane load (plus v08's plates for the opening). Uniform scale only; none missing. **Plate requests: none.**

## Cue check

All cue phrases resolve on the measured captions. Repeated phrases keyed to a later occurrence: none needed; first occurrences checked in context ("the nut" in the hook is the first because "stuck nut" does not match; "turning effect" in scene 3 is "half the turning effect"; "F" in scene 5 is not used, the boxed formula is keyed to "Either way" and "r perpendicular").

## Grade and sweep

- **Grade checker:** PASS WITH WARNINGS, 0 failures, 5 warnings (sparse frames 52 to 56% in reveal, moment-arm, along-handle, two-slips; attempt-2 question card 67%, question scene). Report: `out/explainer/Explainer-phys-y12-m5-v09/grade/Explainer-phys-y12-m5-v09-grade.md`. The first run failed on moment-arm (67%) and memory-aid (63%): fixed by enlarging both stages (540 px arm) and adding plan and condition cards.
- **Sheet:** `work/quality-audit/fixed/phys-y12-m5-v09-sheet.jpg` (the checker's 16 frames, no stamps).
- **Dense sweep:** one still every 90 frames plus every scene's first and last frame (181 stills, 0.4 scale), montaged and read. Fixed: card titles running past their card edges (scenes 2, 5, 6, handoff), empty cards waiting for cues (hook, reveal, along-handle: lines now show "?" until their cue), the scene 4 working running off the right edge and "F = 80 N" against the working, the "pushing in:" label on the θ = 180° label, "r⊥ = 0.125 m" on "full r" in slip 1, the J chip touching the unit chip, the C label on the nut plate, the feedback 1 and 2 pictures running off the frame, the scene 7 "anticlockwise" label clipped at the left edge, the sweep arrow touching the graph. Re-checked those frames after the fixes. Soft spots: the lower halves of the reveal, along-handle (panel before "Pulling outwards") and two-slips openings.
- **Grade: A-.** Motion (the slider, the sweep, the crane arrows) still needs judging at playback speed.
