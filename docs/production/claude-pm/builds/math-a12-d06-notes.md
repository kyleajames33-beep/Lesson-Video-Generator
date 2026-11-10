# math-a12-d06 (the chain rule with e, ln, sin and cos; bike crank anchor): Revision 3 build on the maths studio kit, 10 Nov 2026

Sheet: `math-a12-d06-sheet.jpg` (16 evenly spaced stills over 15,249 frames at (i − 0.5)/16; key notes held at 1,350 frames). Rendered at concurrency 1 under the stills lock.
Builder's grade: A against the d02 and d03 sheets, with two frames that root should look at for fill (frame 2, the squash board before its working rows; frame 6, the rule board's right side). Not yet watched at playback speed. Frame 0 matches d05's final frame as built, and the final frame is d07's frame 0 (both checked as stills).

## Files
Created in `src/explainer/lessons/math-a12-d06/`:
- `common.ts` (measured lesson lookups, `cue`, `hold`);
- `parts.tsx`: plate specs (reused `y11c-bike-frame-v1` and `y11c-bike-wheel-v1`; brief 235 `ma12-bike-crankset-v1` and `ma12-bike-pedal-v1` at manifest size, box and anchors), `CrankRig` (kit `RotatingPlate` about the measured crank bolt, two level pedals hung from the measured spindles), `Bike` (two wheels on the measured dropouts, the frame, and the crank at the measured bottom-bracket shell), `CrankIcon`, `Slot`/`Sq`/`SqP` (dashed inside slot, □′ in blue), colour spans, `Legend`, `gmap`, `TanLine`, `Dot`, `CurveLabel`, `RecallChip`, `Chip`, `HandNote`, `LabelledRow`, `PreRing`, `AttemptStage` (the d02/d03 attempt layout), `StructurePic` (outside around a dashed inside slot), `NumberLine`, the function families and the handoff window;
- `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 9), `s3.tsx` (10 to 15; exports `HandoffChrome` and `ROW4`, which d07 uses so its first frame is d06's last), `scenes.tsx`, `assets.ts`, `config.ts`.
- Registry: `config_math_a12_d06` added (one import, one list entry).

Kit imported read-only: `FunctionSimulator` (as the rider, with held stops, a comparison line, a carried tangent triangle under a sideways squash, callback readout rows), `RotatingPlate`, `MagnifierLeader`, `LiveReadoutBoard`, `GrowthBars`, `StudioRateChainStrips`, `GivensCard`, `EquationStrip`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `QuestionCard`, `GivensStrip`, `KeyNotesBullets`, `HandTag`, `MarkSpan`, `piTicks`.

## Plates
All four bike plates used at native aspect (root decision 56). The frame's anchors were measured from a gridded crop: bottom-bracket shell centre (654, 876), rear dropout (158, 868), front dropout (1318, 869). Wheel radius 395 frame px (road-bike proportions against the 496 px chainstay); crank length 150 frame px. The crankset only rotates about its bolt (750, 750); the pedals hang level from the spindles (552 px and 549 px from the bolt). The pedal plate is drawn at 0.66 of the crank length wide: it was not painted at the crankset's scale (its native width is about 2.2 crank lengths), so it is sized to look right, never stretched. No plate missing.

## Departures from the design (with reasons)
- Scene 1: frame 0 is d05's final frame as built (`math-a12-d05/s4.tsx` S15: same stage, window, labels, chips, navy sin 2x; root decision 55). sin 2x moves from navy to d06's ink curve role on d06's first bold cue, "fast" (a navy copy fades off the ink curve). The heading writes on at frame 66.
- Scene 1: the "level line" needs the pedal height and the graph's unit to share a scale, which a whole bike cannot give at this size. The bike stays whole at the top left, and a magnifier leader opens a large crank (the crankset and pedal plates, crank length = one graph unit, axle level with the graph's y = 0), so the level line from the pedal spindle to the curve is truly level. A live board shows "crank turns" and "pedal height" while the pedal is linked; then the gradient board.
- Scene 1: the tracked pedal starts at the rear horizontal and the cranks turn clockwise (forward pedalling seen from the drive side), so its height is sin x as the design requires.
- Scene 1: the bracket under the axis was dropped (it collided with the "y = sin x" label); the hand tag "one crank turn: one wave" / "two turns in the time of one" carries the comparison while the crank visibly turns twice as fast.
- Scene 2: the bike badge sits at the top right of the working column; the "d01" recall chip sits under the graph; the working column uses small labels above 52 px formulas.
- Scene 3: no level line from the small bike to the big graph (scale mismatch); the crank's speed is driven by 2x of the same x as the rider and also shown as a `GrowthBars` gauge ("crank speed: sin x 1.00, sin(x²) 2x"). The ratio readout is blank wherever |cos(x²)| < 0.07, between stops as well as at them (maths check).
- Scene 3: the relabel to "ratio = crank speed" and the tag "inside slope = how fast the crank turns" come on "That factor" (1302), not "fast" (1512, 22 frames before the end).
- Scene 4: the green result writes on "Rates along a chain" (1048), not the last "x" (1198, 13 frames before the end). A "Rates along the chain" card at the right fills the frame with the two rates and their product.
- Scene 5: every rule row's left side and its outside thumbnail are on screen from the first frame; the right sides arrive on cue. The bike badge is replaced by a turning crank icon beside "□′: how fast the inside turns" (the design's top-right badge collided with the recall chips).
- Scenes 6 and 11: a Plan card fills the working area until the first row (as in d03).
- Scene 7: the ln(cos x) graph is on screen from the first frame (fill rule), not drawn on "two".
- Scene 8: the worked rows use a label line over each 52 px formula; the crossed slip sits under the graph at the right.
- Scene 11: the number line is on screen from the first frame and shades on "three"; the crossed slip is beside it at the right.
- Scene 14: the final frame is exported as `HandoffChrome` plus the graph, and d07's scene 1 opens on exactly that frame.
- Key notes: five bullets at 42 px in the left 58%, framed card on the right with the crank icon.

## Cue check
Every `cue()` phrase resolves against `lessons/math-a12-d06/measured/lesson.json`; each resolved frame was listed with its context and checked against the intended repeat. Three wrong occurrences were found and fixed (scene 1 "two" for "sine two x" = 2nd, scene 7 "positive" = 2nd, scene 8 "The outside is"). Countdowns use the measured holds (attempt 1: 327 to 627; attempt 2: 438 to 738), with the full ring from "Pause here to answer." (285 and 373).

## Kit issues found (not edited)
- `QuestionCard` still shows its ring only from the hold start; the lesson-local `PreRing` covers "Pause here to answer." (same as d02 to d05).
- `FunctionSimulator` draws the axes even with `bare`, so an overlay copy of a curve redraws the axes (harmless when it sits exactly on the main plot).
- `StudioRateChainStrips` reserves 770 px of width for labels; with a full-width strip the change labels run to the frame edge, so `w` must be set below about 1,350 px when anything sits at the right.
- `AreaStrips` (used in d07) cannot reveal its side and top strips separately; d07 layers two instances.
- `Enter` puts its fade in `style.opacity`, so a caller's own `style.opacity` overrides it (the first build showed working rows before their cues; fixed by dimming an inner element).
- `FunctionSimulator` defaults to `at = 0`, so a graph fades in over the scene's first 14 frames unless `at` is negative; scene 1 sets `at = -30` so frame 0 is d05's frame.

## Typecheck
Scoped tsconfig in the scratchpad `build-d06`: clean (apart from the known unused `useMemo` in `src/explainer/kit.tsx`).

## Check at playback speed
- Scene 1: the graph easing right while the bike and the magnified crank enter; the level line staying level as the pedal turns once, then twice as fast; the navy sin 2x fading to ink on "fast".
- Scene 2: the squash carrying the triangle (run 1 → ½, rise 1) while the gradient ticks 1.00 → 2.00.
- Scene 3: the crank visibly speeding up with the gauge; the dashed outside-only line peeling away at x = 1; the ratio row blanking as the rider passes x ≈ 1.25.
- Scene 4: the strips growing in turn and the two arrow labels pulsing.
- Scene 6: the flat tangents at π/2 lining up on the two graphs.
- Scene 14 → d07: the hand-over frame.

## Root review round (10 Nov)
1. Scene 4: the kit strips are replaced by a lesson-local chain at stage size (labels 52 px, values and change labels 44 px, link labels 48 px hand) spread down the frame; the sin(x²) plot is 524 × 400 beside it with a 40 px gradient chip; the result line is 52 px.
2. Scene 5: rows at 56 px with 260 px thumbnails and their recall chips inline; the right half holds a large turning crank in a magnifier circle (crankset and pedal plates) with "□′: how fast the inside turns" at 44 px; the small crank icon is gone.
3. Scene 11: a full-width bold number line (44 px labels, shaded x < −3 and x > 3, open circles at ±3) with the framed answer beside it; the structure picture is shorter and the crossed slip sits under it.
4. Attempts: the structure picture's type is 1.25 times larger (main expression about 100 px) so it fills the 720 × 380 answer-free picture; attempt 2's number line is bold with 40 px labels.
Typecheck clean; sheet re-made.
