# math-a12-g01 build notes (built on the measured narration)

Builder: Claude build agent, 19 November 2026. No stills, grade run, bundle or MP4 by the builder (machine limit: the Google voicing worker was running). Root runs the sheet and `npm run grade:explainer -- Explainer-math-a12-g01`. 14 scenes, 14,007 frames (key notes 1,350).

## Files
`src/explainer/lessons/math-a12-g01/` (assets, common, config, cuemap, parts, s1 to s3, scenes). Not registered (root adds the registry lines). `parts.tsx` holds `Desk` (question printed on the measured blank left page; calculator placed on the measured calculator rectangle), `Calc` (grey readouts on the measured display), `SkateGraph` (y = x² − 6 ln x for x > 0; the skateboard on the tangent at x = 3 via the kit's `TangentPlate`, angle from `screenAngle` on the plot's own unequal scales, never stretched), `MiniTree` (structure trees, the root lit last), `TreeChips` (compact decision-tree questions) and `MarkChip`. d10's `TrackPlate`, `CarOnRail`, `rideH` and `stageMap` are imported read-only for scene 7.

**Final frame:** `G01FinalFrame` in `src/explainer/lessons/math-a12-g01/s3.tsx` (also re-exported by `scenes.tsx`). It was written first and has not changed shape since: the rainwater tank at the left, y = 2t e^(t²) on 0 ≤ t ≤ 1 (t in s, rate in L/s, filled endpoints, grey "2e ≈ 5.44"), four grey chips "an amount?", "a function?", "an area?", "an estimate?", "Which integral?" and "Next: integral practice". No integral, value or shading.

## Plates
None missing; none stretched. Exam desk and calculator (anchors from their brief 240 sidecars), d15's skateboard (kit contact anchor), Physics torch (lens point measured at native (1862, 366)), d10's track and car, Biology rainwater tank.

## Joins
- **Opening (needs root's call).** The design (open decision 1, resolved) and root decision 63 say g01 opens on s12's final frame, and the narration ("This is a practice video ...") follows s12's "Later practice videos ...". The task brief said g01 opens on t04's final frame. I followed the design: frame 0 is `S12FinalFrame` (imported read-only), its "Later: mixed practice" chip slides to the top right as the frame clears to the desk. `T04FinalFrame` is exported for whichever video root chooses. To switch, replace `S12FinalFrame` with `T04FinalFrame` in `S01` (two places in `s1.tsx`) and drop the chip slide.
- Ends on `G01FinalFrame` (scene 13's frame; scene 14 cross-fades back to it).

## Departures (with reasons)
- Scene 1: the booklet question prints at 38 px (the measured page is 384 px wide at this desk size; 40 px overflows it, as the plate's provenance warns). From "A skateboard rests" the stage moves to the bowl graph and the question stays in a 30 px task card at the right.
- Decision tree: the kit `DecisionTree` is used at full size in scene 4 (where its branches light and drop results). Elsewhere a compact `TreeChips` row or column is used, because the kit tree's `scale` mode shrinks text below 26 px. Scenes 6 and 7 show the lit branch as one amber chip ("Demand? → ...").
- Scene 2: the structure tree is local (`MiniTree`); the calculator reads 8, 0.909, 7.27 as the nodes light. The 3 s thinking ring uses the kit `Countdown`.
- Scene 3: the three domain rows slide into the right column on "Why does this matter?" while the bowl returns at the left.
- Scene 4: the Demand branch lights near the end (the demand is not spoken in this scene); result chip "term by term" (shortened from "− : term by term" to fit the column).
- Scene 5: the board dims to 25% and settles onto the tangent as the violet rider reaches gradient 4 at x = 3 (about 1 s before "minus one").
- Scene 6: the torch is aimed along y = x from the slip and swings to y = ex on "a equals one"; the calculator reads "gap 1", then "e ≈ 2.718" on "So the beam". The live readout is "contact point a" and "height at x = 0" (e^a(1 − a)).
- Scene 7: d10's window and plate scale (`rideH`), so x³ − 3x lands exactly on the painted rail. The family is swept by b with a = −3 − b (four grey ghosts); the a, b, f(1), f′(1) readouts are a `LiveReadoutBoard` (no `NumericDial`). On "Its derivative" the derivation rows give way to the classification rows; the answer box stays.
- Scene 8: the memory card is built locally (icons: skateboard, torch, coaster car; mini tree for x e^(2x)).
- Scene 13: before "Next", the framed habit line and three large question pills light with "find the last step, write the domain, answer what's asked". The tank stage is solid on "Next"; the curve draws in under a second.

## Checks run
- Typecheck: `npx tsc --noEmit -p work/brief245/root/tsconfig.t04g01.json` clean (`tsconfig.g01final.json` checks `s3.tsx` alone).
- Cues: every cue phrase resolves at load against the measured word timings (cuemap evaluated in node). Two repeated phrases take their second occurrence ("The tangent is y", "The curve is").
- Server-side render of 13 evenly spaced frames per scene (node, React server renderer, no Remotion bundle): no throw, no NaN, undefined or Infinity in the markup.
- No em dashes in the lesson files.

## Look first on the sheet
Scene 1 (desk text fit on the page; then the bowl with the board's angle and the empty line at x = −1); scene 4 (decision-tree pill text inside its pills; result chips); scene 5 (rows against the calculator); scene 6 (torch at the origin, readout box clear of the curve); scene 7 (family curves under the readout box; the track and curve coincide); scene 10 and 12 insets; scene 13 final frame.

## Playback checks for root
Scene 2 node lighting order; scene 5 rider and board settle; scene 6 contact-point slide and beam swing; scene 7 family narrowing, track fade-up and car ride.
