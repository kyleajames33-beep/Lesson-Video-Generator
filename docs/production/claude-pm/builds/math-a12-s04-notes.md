# math-a12-s04 build notes (Revision 5 design, built on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s04-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,802 frames (493 s), 18 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s04/`: `common.ts`, `cuemap.ts` (175 cue phrases, all resolved at load; 0 missing), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S04FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18).
- `parts.tsx` re-exports s03's parts (read-only). Load-time number checks: data 20, 50, 70, 40, 20 (200, relative frequencies), the 200 stored times (tally per class, all distinct), 0.6, 0.225, 0.35, shrinking 0.35 / 0.035 / 0.0035 / 0.07, running total 0.1, 0.35, 0.7, 0.9, 1 and F(0.25) = 0.225, x²/9 (1/9, 4/9, 1/3, 5/9), die 4/6 against 2/6, A1 0.3 and 0.5, A2 21/32, 5/32, 1/2. Rigs: `Display` (coded LED digits on the measured face of the timing display), `Blocks`, `TimesHist` (kit `ClassHistogram`, counts or relative-frequency labels), `ZoomWindow` (the third class zoomed, amber slice narrowing to a line), `F9Plot` (x²/9 with flat pieces, pen sketch, tangent stubs, crossed chord, sketch guides; also used by s05 and s06), `AppPanel` (unbranded graphing app), `PredictRing`.
- `src/explainer/registry.ts`: one import and one entry after math-a12-s03.

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-starting-blocks-v1.png` (box [165, 192, 1439, 795]), `maths/ma12-timing-display-v1.png` (box [333, 159, 1286, 864]; face [382, 230, 1237, 467] from its JSON), `maths/ma12-die-red-v1.png` (scene 7; design call: the red die, not `biology/m5x-die-v1`).

## Joins
- Frame 0 is `S03FinalFrame` (imported from `../math-a12-s03/s3`) with a grey ghost of four separate bars ("counts: separate values"); on "measure it" the thin bars slide left, then cross-fade into the blocks and display on "At an athletics carnival".
- Final frame `S04FinalFrame` (scene 17; scene 18 cross-fades back to it): violet F(x) = x²/9 on −1 to 4 with flat pieces, amber tangent stubs at 0.5 and 2.5, hand tags "climbs slowly" and "steeply", chip "Next: how steeply F climbs", a "?" chip, an F(x) piece card and "what does the steepness tell us?". s05 opens on it.

## Departures from the design (with reasons)
- **Scene 1:** no separate scene heading while s03's chip is on screen; the heading writes on with the carnival stage. The display digits run "0.35 s" (on "One reads"), then "0.351", "0.3517" and a blinking "…" on the spoken digits.
- **Scene 2:** heats are my own dot rig (not kit `HeatsToHistogram`), because the design keys each class's drop to its spoken count; dots appear heat by heat (25 heats × 8) in a five-row band so none stack, then each class drops on its number. The display shows "heat n" then "200 times"; readout "times recorded". The 200 times are stored ms values (Python `random.Random(404)`, uniform and distinct within each class).
- **Scene 4:** the grey assumption tag sits left of the cut bar; the grey "= 0.10 + ½(0.25)" sits under the framed answer.
- **Scenes 5 to 7:** `ZoomWindow` (lesson rig, no grid lines) instead of the kit `ShrinkingWindow`, so blue class bars and the amber slice read cleanly; width and probability readouts come from the same width value. No probability bracket under the axis (it crossed the tick labels).
- **Scene 7:** before "discrete" the left side holds the s06 slice with its ends marked a and b; then the die bars (kit `ProbabilityBars`) with the red die plate.
- **Scenes 8, 9:** kit `CdfTracer` (F upper, histogram lower, the kit's order). Scene 8 opens with several amber intervals on the histogram ("infinitely many intervals"); class-end points 0.1 to 1 appear on their spoken values and stay through scene 9. The die staircase is a small grey card at the right.
- **Scene 10:** a checklist card (pieces join, never decreases, 0 to 1) holds the rows; grey sketch guides (y = 1, x = 3, plotted points) sit on the axes from the first frame. The app panel arrives on "one" (the point (3, 1)); the crossed chord on "It's not a straight".
- **Scene 17:** larger graph plus an F(x) card, to fill the frame (s05 opens on this exact frame).

## Cue check
`cuemap.ts` resolves every phrase at load (175). Repeated phrases named: "zero point three five seconds" (1), "two five" (2, scene 4), "zero point two two five" (1), "it's about" (1), "is zero" (1), "zero point one" / "zero point seven" (1, scene 8), "minus" (1, scene 8), "F of one point five" and "F of zero point five" (2, scene 16), "twenty" (2, scene 2).

## Live readouts and simulations
- Scene 2: dots falling into the class bars; "times recorded" readout and the display's heat count read the same store.
- Scene 5: the slice narrows 0.1 → 0.01 → 0.001 → 0 (log-eased) with width and probability readouts from that width.
- Scene 6: the line opens to a 0.02 slice.
- Scenes 8, 9: `CdfTracer` marker, F drawn only up to it, readout "F(x) = P(X ≤ x)" that only climbs.
- Scene 10: pen sketch of x²/9 and the app plot of the same function.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s04` (final): **PASS WITH WARNINGS (0 failures, 2 warnings)**: scene 10 early frame 52% bare (before the sketch); few plates ≥ 250 px (6 of 16; graph-heavy lesson by design). Earlier runs: 4 failures (scene 10 and 17 near-empty, scene 11 no 44 px line, scene 1 frame 231 blank between stages, scene 3 task at 40 px), all fixed (checklist card and guides, question rows shown from the start, larger handoff, overlapped stage fades, 44 px task). A 32-frame run also caught an `AppPanel` crash (plot below the minimum size), fixed.

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s04`: 14 runs on the final sweep. Four are deliberate red strikes ("(20 + 50) ÷ 200 = 0.35", "F(1) − F(2) = −1/3", "(160 + 40) ÷ 400 = 0.5", "5/32 − 21/32 = −1/2"). Left, judged acceptable: falling dots crossing the "1" and "12" count labels in scene 2 (under 1 s each, the dots are moving); the die bars' "1/6", "5" and "6" during scene 7's cross-fade from the slice (one frame); the moving CdfTracer marker crossing the small "histogram" label (one frame each in scenes 8 and 9) and the "X ≤ x" label (4 px); a 5 px touch on the memory card's tiny plot "x". The last sweep still showed the y axis touching the left edge of "F′(0) = 0: leaves flat" (15 px, scene 10); the tag was then moved 34 px right, clear of the axis (a geometry-only change after the last sweep, typechecked; not re-swept). Fixed across three runs (27 → 15 → 14 → this run): class boundary lines through the y label and the hand tags (lines now stop at the plot top and fade once the bars exist), the "= 0.10 + ½(0.25)" row under the answer frame, the slice bracket through the zoom ticks (removed), "the histogram" label under the tracer's marker (moved), "joins assume even spread" over the blocks plate, "not straight" and "F′(0) = 0" on the curve and chord (moved; the F′ tag now leaves before the chord arrives).

## Check at playback speed
- Frames 0 to 250: s03's frame, the ghost bars, the slide left, then the blocks and display.
- Scene 1: the display digits growing on the spoken digits; the prediction ring.
- Scene 2: heats arriving (about 15 s), then each class dropping on its number (the drops are about 0.7 s apart).
- Scene 5: the slice narrowing on "one hundredth", "one thousandth" and "width zero".
- Scenes 8, 9: the marker stepping class to class on the spoken running totals; the slow re-sweep in scene 9.
- Scene 10: the pen sketch timing against "flat at zero ... curves up ... stays flat at one"; the app's slide-in.

## Honest grade
**A** by the brief's rules and root's bar, with soft spots root may weigh: scene 10's first 20 s (task, givens, checklist and empty guided axes, about 52% bare by the checker); scene 2's plot is empty while the heats arrive (the dots carry the frame); scene 17 and the scene 8/9 opening seconds are line-graph frames.
