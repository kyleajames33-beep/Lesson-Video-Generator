# math-a12-i06 build notes (Revision 3, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i06-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,851 frames (495 s), with the notes scene at 1,350 frames. Header topic label: "ACCUMULATION" (design header strip).

## Files
- `src/explainer/lessons/math-a12-i06/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: the models and load-time checks (cos sums for n = 4 to 32, the trolley sums, A1, A2, the bath sum); `RainRig` (the reused physics thundercloud with coded rain streaks whose density follows cos x, over the painted gauge with coded water drawn behind the plate's transparent cylinder on a 0 to 1.2 cm scale; an optional second "estimate" gauge; a bracket and a 1 cm line). It re-exports i05's parts read-only;
  - `s1.tsx` (1 to 5), `s2.tsx` (6 to 8), `s3.tsx` (9 to 15 and `I06FinalFrame`, i07's opening).
- `src/explainer/registry.ts`: one import and one array entry, after i05.

## Joins
- Frames 0 to about 235 are `I05FinalFrame` (imported); it cross-fades to the storm on "A storm".
- The final frame (`I06FinalFrame`, also the end of the notes): y = 12 − 2t in violet on 0 ≤ t ≤ 8, axis labels "net flow (L/min)" and "time t (min)", eight light-teal left-endpoint rectangles of width 1 (the seventh flat, the eighth below the axis, ringed amber with "?"), the chip "Next: a rate below zero", a "a bath, plug out: net flow = tap in − drain out" card and "What does a strip below the axis mean?". **The small painted bath is left out**: `ma12-bathtub-v1.png` is not in `public/assets/maths/` (the brief allowed leaving it out). When i07 is built, its opening should import `I06FinalFrame` and bring the bath in on "bath".

## Departures from the design
- **The gauge stays at full size** (500 px tall, about 190 px wide, beside a 540 px cloud) in scenes 1 to 5; it is not reduced to a 300 px column.
- **Scene 1**: the readouts are three one-row boards under the graph; "rain so far" shows "?" once the clock ends (the gauge itself shows the level). The "rate × time?" chip is struck through, not crossed.
- **Scene 2**: a live board (rate at the start and end of the strip: 0.92 and 0.83 cm/h) shows "the rate hardly changes"; a slice of water (0.18 cm, the strip's area) fills the gauge on "So each rectangle's area".
- **Scene 3**: all four strips show from the first frame; the estimate gauge fills strip by strip from "With four strips", rises above the true gauge (left, 1.18), then the sample point slides (rule "sample", 0 → 1) and the strips settle on right ends (0.79), with the amber bracket 0.79 to 1.18 on the true gauge on "between".
- **Scene 4**: the kit `RefinementTable` (left column, then left and right from "Meanwhile") with error bars, a strip stepper 4 | 8 | 16 | 32, and the estimate gauge following the current sum. The zoom inset on one strip is left out ("thinner: closer" tag carries it).
- **Scene 5**: the kit `StudioAreaFill` sweep with in-plot "x = a = 0" and "x = b = π/2" labels (the kit's bound labels collided with the tick labels); the pen dot retraces the curve on "paper"; the jump contrast is a small plot with open and filled circles and a red dashed lift.
- **Scene 6**: the zoom inset is left out; the "flat tops" card stays as the column's first card, and "chords sit just under the curve" is written on the plot.
- **Scene 7**: the four strips draw from "Speed times time" (so the graph is not bare); heights are violet ticks with labels on "The heights at".
- **Scene 8**: the trapezium strips refine 4 → 8 → 16 on the plot; the kit table carries all three methods with error bars; no dashed 2.667 line on the speed graph (it is a distance, not a speed).
- **Memory card (scene 9)**: two solid 840 × 480 pictures (four strips splitting to eight on "thinner"; two trapezia with one strip's left rectangle outlined). The gauge badge is a text chip.
- **Feedback cards** show a short form of the question in the shrunk card (the full worded question collided with the first row).
- **Attempt 2 picture**: the three readings as violet dots (MiniPlot), nothing joined.

## Cue check
`cuecheck6.cjs` (scratchpad build-i04) resolves every phrase, 0 missing. "a half" (7) uses occurrence 1 ("which is a half"); "and four." (7) is the heights sentence; "So each rectangle's" needed the apostrophe.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i06`: **PASS WITH WARNINGS (0 failures, 2 warnings)**: frame 13 (attempt 2) 54% bare (question scene); "Few pictures" (coded graphs not counted). Earlier runs warned on tick/bound-label and question-card collisions (fixed). Report copy: scratchpad `build-i04/Explainer-math-a12-i06-grade.md`.

## Brief 238 findings handled
- **238-I06-STALE-UNITS**: every label, readout and gauge uses cm per hour, hours and cm (the old L/min table is not used anywhere); the gauge scale is 0 to 1.2 cm with a "≈ 1 cm = 10 mm" note.
- **238-I06-NOTES-FIT**: bullets 4 and 5 are shortened to "Trapezium = average of left and right. Thinner is better." and "Continuous f ≥ 0: the sums approximate the area."; all five are one line at 38 px in the left 1040 px, with the framed card (and an 8-strip picture) on the right.
- The maths check had no findings; the sums are asserted at load against its values.

## Kit issues
- `StudioAreaFill` bound labels sit on the tick-label row and collide with π/2; I passed empty bound labels and drew my own in the plot.
- `StudioRiemannStrips` has no way to show strips as outlines before they "draw"; a `ghost` option would help openers.
- I edited no kit files.

## Check at playback speed
- Scene 1: the 3 s clock with the rain thinning and the gauge rising to 1 cm.
- Scene 3: the estimate gauge filling strip by strip, then the sample-point slide and the drop to the right sum.
- Scene 4: the strip splits at 8, 16, 32 and the estimate gauge stepping towards the true gauge.
- Scene 5: the area sweep and the pen trace.
- Scene 14: the eight rectangles rising and the ring on "What does".
- Scene 15: the fade to the bath frame in the last second.
- Frames 2, 7 and 8 have a lighter lower or right area early in their scenes; root may want them denser.

## Root review round (11 Nov)
3. Scene 6: a 720 × 390 zoom panel of one strip (left rectangle amber, right height dashed, the trapezium pale blue under the violet curve, all labels inside the plot) fills the lower right from the first frame until "With just four"; "average of two rectangles" is written in it. The formula card is 40 px below the flat-tops card.
4. Scene 7: a solid heights table (x 0, 0.5, 1, 1.5, 2; speeds fill on "The heights at") and a readout board "left rectangles / right rectangles" (values "?" until spoken, then 1.75 m and 3.75 m with their working) sit under the Given card from the first frame; the trapezium answer frame is below.
5. Feedback 2: the mistake card arrives 10 frames after the answer with the crossed working "4 × (0 + 10)/2 = 20 m" and the hand caption "one wide trapezium skips the 6 m/s reading" (46 px).
Grade checker re-run: PASS WITH WARNINGS (0 failures; attempt 2 sparse, few pictures). An intermediate run failed on a zoom label off the frame (fixed). Sheet re-made.
