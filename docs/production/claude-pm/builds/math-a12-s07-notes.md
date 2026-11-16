# math-a12-s07 build notes (Revision 4 design, built on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s07-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,325 frames (478 s), 16 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s07/`: `common.ts`, `cuemap.ts` (137 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S07FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16).
- `parts.tsx` re-exports s06's parts (read-only). Load-time number checks: the 200 stored waits (Python `random.Random(707)`, wait = 10 × `random()`, stored to 3 dp, reproduced exactly): class counts 26, 14, 18, 17, 25, 23, 20, 16, 26, 15, first five waits 0.2, 6.3, 3.4, 7.5, 4.6 drawn as arrivals 9.8, 13.7, 26.6, 2.5, 15.4; ghost hump 3t(10 − t)/500 window areas 0.104, 0.296, 0.104; bus 0.4 and 0.4, F(4) = 0.4, F(7) = 0.7; drill 2 (3/8 on [2, 10]); height 2 on [0, 0.5]; train 1/4, F(3.5) = 5/8, 0.375, 1/2; A1 1/5, 1/2, crossed 5/16; A2 k = 8, 3/8, crossed k = 24. Rigs: `UniformPlot` (flat density with zero pieces, end dots, fill and sliding amber shadings), `ParkedCard` (s06's question as a small card), `BeamPlot` (the train's density on a violet beam over a fulcrum, tilting; also used by s08), `BusStop`.
- `src/explainer/registry.ts`: one import and one entry after math-a12-s06.

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-bus-stop-v1.png` (887 × 1774, box [247, 205, 637, 1556]), `maths/ma12-bus-side-v1.png` (1881 × 836, box [289, 209, 1610, 644]), reused `maths/ma12-die-red-v1.png` (scene 8). No fallback needed.

## Joins
- Frame 0 is `S06FinalFrame` (imported from `../math-a12-s06/s3`). On "soon" it shrinks into the top-right corner and becomes `ParkedCard` ("f(x) = ? for 1 ≤ x ≤ 5"); in scene 7 the card grows back into the train's density panel.
- Final frame `S07FinalFrame` (scene 15; scene 16 cross-fades back to it): the train's density 1/4 on [1, 5] resting on a violet beam, violet fulcrum at t = 2, beam tilted 3° towards 5, "?" at the fulcrum, chip "Next: where does a density balance?", hand tags "Where would it balance?", the spread question and "the train: f(t) = 1/4 on [1, 5]". No mean, midpoint or variance. s08 opens on it.

## Departures from the design (with reasons)
- **Parked card:** kept in scenes 1 to 3 only (fades at the end of scene 3), not to scene 7: scenes 4 to 6 use the top right for the givens and readouts. It reappears at scene 7's first frame and grows into the f panel.
- **Scene 1:** kit `ArrivalDots` (wait mode, painted buses 230 px at each ten-minute tick, a little under the design's 320 px so four buses fit the strip) feeding a kit `ClassHistogram` drop; bar counts are drawn inside the bars (above them they crossed the dashed model line at 20). The scene ends by cross-fading to scene 2's empty density axes with "?" (no shrinking band).
- **Scene 2:** my own window on the `UniformPlot` (not kit `SlidingWindow`) so the flat line's readout can say "2c" while the hump's reads its numeric area.
- **Scene 3:** no histogram band in the top area (no room beside the parked card); the ten "1/10" columns carry "a tenth per minute". The generic interval is a second plot cross-faded in (ticks a and b, "width b − a", "height ?" then "height 1/(b − a)").
- **Scene 6:** kit `CdfTracer`; the marker moves to 2 on "Back at the bus stop", then steps 3, 4, 5 on "never changes", then runs to 10 and on to 12.
- **Scene 8:** the die bars grow at the start of the scene (an early sheet frame was too bare otherwise).
- **Scene 9:** both columns are on screen from the start (the reaction-time histogram tagged "from s04"); the rounding-error plot and the timetable card arrive on their cues.
- **Scene 12:** the [3, 8] rectangle is drawn from the first frame (the given interval, height "?" until the cue) with a "the model" card (height = 1 ÷ (b − a), P = width covered ÷ (b − a)) that gives way to the framed f.
- **Scenes 11, 13:** each card has a large bare number line (no interval or rectangle) and a "to do" card listing the demands.

## Cue check
`cuemap.ts` resolves all 137 phrases. Repeated phrases named: "zero point four" (1 and 2, scene 4), "to a half" (1, scene 9), "whole width" (1, scene 10), "Six over k" (2, scene 14: occurrence 1 is "k minus six, over k"). "quarter a half" (scene 7) avoids the earlier "three and a half".

## Live readouts and simulations
- Scene 1: 200 arrival dots on the bus strip with the current wait bracket, each wait dropping into the histogram; live "arrivals: n of 200" and live class counts.
- Scene 2: a width-2 window sliding on the ghost hump (live area 0.104, 0.296, 0.104), then on the flat line (area "2c").
- Scene 3: height dial 0.05 → 0.08 → 0.1 with live height and area readouts reaching 1.
- Scene 5: width 1 → 0.5 with height 1/width, live width, height and area (always 1); the top rises through the dashed line at 1.
- Scene 6: kit `CdfTracer` with live t and F(t).

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s07` (final): **PASS WITH WARNINGS (0 failures, 2 warnings)**: scene 3 frame 2238 54% bare (the plot before the height dial); scene 12 frame 10296 56% bare (feedback 1 opening). Earlier runs: 4 failures (scene 7 no 44 px line; scenes 8, 9 and 12 mostly empty), then 1 failure (scene 12), all fixed (44 px rows in scene 7; die bars and tags from the start of 8; both columns from the start of 9; the rectangle and model card from the start of 12).

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s07` (final): 6 runs. Five are the deliberate red strikes ("P(3 < T < 7) = 7/10", "a density can't be more than 1", "P(T > 3.5) = F(3.5) = 5/8", "f(x) = 1/8", "6/k = 0.25 ⇒ k = 24"). Left, judged acceptable: a 7 px touch of the pale amber shading on "whole width 8" (a fill behind the label, one second). The only change after this sweep is scene 8's die bars growing at the scene start (no text moved). Fixed from the first run (11 runs): falling dots through the histogram's "arrivals" label and the "illustrative sample" tag (label and tag moved), the growing parked card over the train panel's label (panel fades in after the card), the notes card's tiny plot "x" against the card rule.

## Check at playback speed
- Frames 0 to 200: s06's frame shrinking into the corner card.
- Scene 1: the first five arrivals one at a time with their wait brackets, then the burst of 195 and the bars levelling.
- Scene 2: the window sliding on the hump (area changing) and on the flat line (area fixed).
- Scenes 3 and 5: the height dial against "c is one tenth" and against "must be two".
- Scene 4: the [3, 7] block sliding onto [0, 4] on "only its width".
- Scene 15: the fulcrum and beam tilt on "balance".

## Honest grade
**A** by the brief's rules, with soft spots root may weigh: the first sheet frame of scene 3 (plot and "total area = 1" only) and the opening seconds of scenes 8 and 12 are near the sparse limit; scene 1's buses are 230 px wide (design 320 px); the bus stop is small (250 to 330 px) after scene 1.
