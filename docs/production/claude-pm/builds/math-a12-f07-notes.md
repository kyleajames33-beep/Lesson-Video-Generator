# math-a12-f07 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f07-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,710 frames (490 s), 16 scenes (scene 4a is the ball's whole journey); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f07/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check against the measured captions), `config.ts`, `assets.ts` (reused tennis ball and floor strip; the country town), `scenes.tsx` (includes `scene-04a`; re-exports `F07FinalFrame`);
  - `parts.tsx`: re-exports f06's parts and, through them, f01 to f05's (read-only imports); load-time checks of every value (bounce totals 64 to 127½, 127¾, 127⅞ and the gaps; (½)¹⁰ = 1/1024 ≈ 0.00098; Sₙ = 128 − 128(½)ⁿ; 64 ÷ ½ = 128; the journey 256, 320, 352, 368, 376, 380 and 128 + 2 × 128 = 384; totals for r = 2 and r = −1; 12 + 4 + 4/3 + … = 18 and the slip 9; 8 − 4 + 2 − … = 16/3 ≈ 5.33 with totals 8, 4, 6, 5, 5½; 0.2727… = 27/99 = 3/11; A1 r = ¾ and the slip −3; A2 at x = ¼; the town 20 000 × 1.05 = 21 000). Lesson rigs: `DotLine`, `RBand`, `DistanceBar`, `XLine`;
  - `s1.tsx` (scenes 1 to 5; `SINF`), `s2.tsx` (6 to 9; `AID7`, `AidBounce`), `s3.tsx` (10 to 15; `F08OpeningStandIn`, `F07FinalFrame`).
- `src/explainer/lessons/math-a12-f06/s3.tsx`: `BallScene` is exported with a `bare` option (no heading, no chips), so f07 can keep the ball and the columns while they change.
- `src/explainer/registry.ts`: one import and one array entry, after f06 (root left it uncommitted until grading).

## Joins
- **Frame 0 is `F06FinalFrame`** (the ball at its third bounce and the eight columns under the 128 line). It fades over frames 14 to 28 above the same scene drawn bare; the new heading writes from frame 34; the ball then drops again.
- **Final frame: `F07FinalFrame`, which is `F08OpeningStandIn`** (f08 is not built). It is a solid frame built from the f08 design's scene 1: the heading "A growing town"; the painted country town across the lower half; a timeline with a bar "20 000" at "t = 0", an amber "×1.05" arc to a bar "21 000" at "after 1 year", and dashed "?" tabs from "after 2 years" to "after 6 years"; the hand notes "people in the town" and "grows 5% each year"; the chips "Next: growth and decay models" and "?". The notes cross-fade back to it. When f08 is built, point `F07FinalFrame` at f08's exported opening frame, as f03 was pointed at f04.

## Plate fit
- **Country town (`ma12-country-town-v1.png`, 1920 × 819, alpha box [213, 175, 1723, 678])** at 1,290 px wide (430 px high) at its own aspect, under the timeline.
- **Tennis ball (reused)** at 90 px (scene 1), 84 px (scene 4a) and about 45 px in the small rigs. **Floor (reused)**: f06's clipped strip in scene 1; the kit's full-width tiled floor in scene 4a; the small rigs (scene 2, the memory aid, the recap, the notes) use the rig's ink ground line so nothing runs out of their cards.

## Departures from the design
- **Scene 1:** the readout strip "bounce, height, heights so far" runs 1, 2, 3, then 8, 9, 10; the gap note updates with it (½, ¼, ⅛ left).
- **Scene 2:** two number lines (r = ½ above, r = −½ below) with dots landing; the small bounce rig sits at the lower right until the ratio line arrives (the design kept it at the left for the whole scene); no arcs across 0 on the second line.
- **Scene 3:** fourteen total columns under the 128 line with a live "n, total, gap" strip (total and gap both rounded to three places: 127.992 and 0.008); a two-line plan card holds the right side until the "64 + 32 + …" row; rⁿ turns amber on its cue (no ring).
- **Scene 4a:** the distance readout stays live and ends on 382 cm after bounce 7, just short of the dashed 384 mark on the bar; the green box carries "384 cm". The scale has no "0" label.
- **Scene 5:** one plot of the first ten totals (a = 1) with a live r, dashed connectors between the points, and a caption that is true for the live r ("each new term is smaller in size than the last", "every term has the same size", "… bigger …"); the four case notes arrive on their cues.
- **Scenes 6 to 8:** a two-line plan card shows until the first working row; scene 6's totals plot stands in for the design's strip; scene 7 is a plot of the totals with the 16/3 line.
- **Attempt 1:** the picture is the totals plot holding only what the question gives (the first total, 10, and the dashed 40 line) in place of the design's empty column.
- **Feedback 2:** the x = 0 tag is kept as root decided (36 px, under the number line).
- **Handoff:** bars for 20 000 and 21 000 carry the two values; "people" is a hand note at the left because "20 000 people" does not fit over a 196 px tab beside "21 000".

## Cue check
Every phrase resolves. Repeated phrases named (key: occurrence of total): zero (scene 2) 1 of 2; t128 1 of 2; shrinks 1 of 2; sinf 1 of 2; cm 2 of 2; third1 1 of 3; third2 2 of 3; four 2 of 2; five 1 of 3; zero (scene 8) 1 of 2; is 1 of 2; rep 3 of 3.

## Live readouts
- Scene 1: the bounce number is a whole number; the height, the total and the gap note are worked out from it.
- Scene 3: n is a whole number; total and gap are worked out from it and add to 128 as shown.
- Scene 4a: the distance is the rig's own travelled value, rounded to a whole centimetre; the bar uses the same value.
- Scene 5: r is rounded to two decimal places once per frame; the plot, the "total of 10", the "settles on" value, the caption and the marker all use that value.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f07`: **PASS WITH WARNINGS (0 failures, 7 warnings)**: six sparse frames (scene 3 at 54%, scene 5 at 58%, scene 6 at 54%, scene 8 at 52%, attempt 1 at 56%, feedback 1 at 54% bare) and "few pictures" (5 of 16 teaching frames). An earlier run failed scenes 3 and 5 as mostly empty; fixed with the plan card in scene 3 and the live caption and connectors in scene 5.

## 1 fps sweep
Four full sweeps with the probe (491 frames each) and one part sweep of scene 3 after the last text change; every second frame inspected on contact sheets for the first two sweeps, and the changed scenes after that; overlap and line-through-text checks on every frame. Found and fixed: a hand tag on the "0" target label; a hand note on the ball's dotted path; the ring round rⁿ touching "×"; the ball over the heading at the start of scene 4a; the scale's "0" on the floor; a slip over the floor and the ball; a givens line running into the plot's axis; a hand note inside the plot; the memory aid's floor running out of its card and under the formula; the green answer box through a fraction's "2"; the "×1.05" label on the heading and "20 000 people" on "21 000" in the handoff.

Overlap check, last run: no reports.

Line-through-text check, last run: 3 runs, all red strikes (the "128 + 128 = 256 cm" slip and the two mistake cards).

Not looked at frame by frame after the last changes: scenes 9 to 13 (seen on the earlier contact sheets and in the final 16-frame sheet; both automatic checks ran on every frame of the last full sweep).

## Kit notes for root (described, not edited)
Same three as f06: the `BounceRig` scale's "0" on the floor plate and the floor's overrun; `TermPlot` labels always above the point; the `MarkSpan` circle touching neighbouring glyphs.

## Check at playback speed
- Scene 1: the ball dropping again and the readout stepping through bounces 1 to 10.
- Scene 2: the dots landing on both lines, crowding at 0.
- Scene 3: the columns growing from 8 to 14 while the gap readout falls.
- Scene 4a: the ball's run through seven bounces (smoothed over about 10 s) with the distance bar filling.
- Scene 5: r moving from ½ to 2, back to 1, then to −1; the points leave the top of the plot for r > 1.
- Handoff: the "×1.05" arc and the "?" tabs arriving.

## Honest grade
A on the checker (0 failures), with six sparse warnings; about level with f05. Root may call these B+: scene 5 while r is above 1 (few points stay in the window, so the plot is mostly grid); the first 8 s of scene 4a (ball, scale, floor and an empty distance bar); attempt 2 (a thin number line as its picture); the handoff's upper band before the bars arrive.
