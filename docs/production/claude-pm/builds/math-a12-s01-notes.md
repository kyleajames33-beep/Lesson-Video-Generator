# math-a12-s01 build notes (Revision 4 build on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-s01-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,147 frames (472 s), 14 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · PROBABILITY". First video of the statistics and probability strand.

## Files
- `src/explainer/lessons/math-a12-s01/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S01FinalFrame`);
  - `parts.tsx`: re-exports f09's board parts (read-only). Load-time checks: the stored roll order (Python `random.Random(5).shuffle` of the site counts, stored as a 200-character string) ends on 28, 35, 31, 38, 34, 34 and reproduces the checkpoints 10 rolls [1, 2, 0, 4, 2, 1] (0.4), 50 rolls [7, 9, 8, 10, 8, 8] (0.2), 150 rolls (0.207); the estimates add to 1; runs A, B, C sum to 200 and each has a face further from 33⅓ than 38; coins 1, 3, 3, 1; A1 and A2. Rigs shared with s02 and s03: plates, `barGeom` and `YAxis` (bar charts without grid lines, so no line runs through a value label), `PairBars`, `Table`, `RelFreqTrace`, `TokenDrop`, `TumblingDie`, `Spinner`, `CounterBag`, `DeskCalendar`, `DateAxes`;
  - `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 14; `S01FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry after math-a12-f15.

## Plates used (all exist; never stretched; alpha > 32 boxes measured 16 Nov)
- `maths/ma12-die-red-v1.png` (our die; f15's handoff die), `maths/ma12-die-top-1..6-v1.png` (the simulated fair die, cut between top views), `maths/ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png`, `maths/ma12-spinner-base-v1.png` with `ma12-spinner-pointer-v1.png` (pointer drawn on the base's box: same canvas, so it sits on the pin; coded sectors on the measured disc), `maths/ma12-desk-calendar-v1.png` (coded "15" in its measured blank page), `physics/y12p-counter-red-v1.png`, `y12p-counter-yellow-v1.png`.

## Joins
- **Frame 0 is `F15FinalFrame`** (imported from `../math-a12-f15/s3`). Scene 1's own chart sits exactly where f15's die chart was (axis x 380 to 1400, counts 0 to 50 over y 810 to 250, red die at 1480, 620, 280 px), and cross-fades in over frames 12 to 30 (the scene's own layer is held at 0 opacity until then, so frame 0 is f15's frame exactly).
- **Final frame `S01FinalFrame`** (scene 13's end; scene 14 cross-fades back to it in its last 40 frames): chip "Next: when are all values equally likely?", the red die and "one fair die", six teal bars at 1/6 (P(x) axis 0 to 0.25), the desk calendar with "15" and "a page torn at random", empty date axes 1 to 31 (y 0 to 0.04) with "?". s02 opens on it.

## Departures from the design
- **The die is red, not white.** f15 built its handoff with `ma12-die-red-v1.png`, and the opening frame must match it, so the red die is "our board-game die" throughout. The six white top views are used for the **simulated** fair die in scene 6 (a different die), so both sets of plates carry meaning. The tumble of our die is the kit RollSimulator's turn-and-squash plus a large face chip.
- **Scene 1 layout:** the chart stays where f15 left it (die and readout on the right) rather than moving the die to the left; a true camera-continue.
- **Scene 2:** the arrow points at the red die's top face; no top-view plate of our die exists.
- **Scene 3:** the y-axis relabel (counts to relative frequency) is a cross-fade of axis labels and value labels over identical bars; the replay rebuilds the bars on the counts axis while the readout and trace show the relative frequency of a four (marks "10 rolls: 0.4", "50 rolls: 0.2").
- **Scene 4:** the tokens land above their bar's label; the bars tip with the kit `StackedTotalBar` into one bar "= 200", relabelled "= 1".
- **Scene 5:** the invalid list is one crossed slip with small bars (the third red, below the axis); the first check chip is ringed red on "minus".
- **Scene 6:** model bars sit beside the data bars (`PairBars`); runs A, B, C replace each other on the counts axis with our die as dashed outlines; then four panels side by side (runs A to C and our die), extremes ringed amber, notes "A: 23, off by 10" and so on.
- **Scene 7:** the eight sequences appear on "Each sequence" (not "eight") so the right half is not empty; they sort on "head" and melt into bars on a 1/8 to 4/8 axis.
- **Scene 13:** before "Next", a recap of data bars (blue, ≈) beside model bars (teal, =).

## Cue check
Every phrase resolves (0 missing). Repeated phrases named: "P of x" 2 (scene 2), "A relative frequency" 2 and "estimate" 2 (scene 3), "three times" 2 (scene 7), "likely" 1 and 2 (scene 12).

## Live readouts and simulations
- Scene 1 and the scene 3 replay: kit `RollSimulator` on the stored order (rolls, fours, relative frequency of 4); the scene 3 trace reads the same pace formula.
- Scene 6: the simulated fair die tumbles through its top views while runs A, B, C replace each other.
- Scenes 7 and 12: `OutcomeSort` (sequences and pairs into bars).

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s01`: **PASS (0 failures, 0 warnings)**. Earlier run: one failure (scene 6 axis label "0.05" off the left edge) and one sparse warning (scene 7 before the sort); both fixed. Report: `out/explainer/Explainer-math-a12-s01/grade/Explainer-math-a12-s01-grade.md`.

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s01`: 8 runs left, all deliberate red marks: the crossed slips "P(X = 4) = 0.19" (scene 3), "0.7, 0.7, −0.4 / sum = 1" (5), "P(x) = 1/4 each" (7), "0.22 + 0.28 + 0.24 + 0.26 = 1" (10), "1/3, 1/3, 1/3" (12), and the red ring round "0 ≤ P(x) ≤ 1 for every x" when −0.4 fails it (5). Fixed after the first run: roll tokens flying through bar labels and the "count" label (scene 4; tokens now land above the labels on a low arc) and the 33.3 line through a run's value label (scene 6; value labels removed from the run bars).

## Check at playback speed
- Frames 0 to 30: f15's frame exactly, then the cross-fade to scene 1's own chart.
- Scene 1: the 200 rolls (about 4.5 s after six slow rolls) ending on "Four came up more"; the 4 bar filling its 38 ghost.
- Scene 3: the label cross-fade on "the bars"; the replay pace (10 rolls by "After ten", 50 by "After fifty").
- Scene 4: twelve tokens, then the tip into one bar (50 frames).
- Scene 6: three runs, each about 2 s, then the four panels.
- Scene 7: the sort and melt into bars.
- Scene 13: the cross-fade on "Next" and the date labels writing on "the thirty-first".

## Honest grade
**A** on the 16 frames: every teaching frame has the die (or coins, spinner, counters, calendar) or a live simulation; one current line at 44 to 52 px; framed answers and crossed slips in the worked boards and feedback; five short notes with the framed card; 45 s notes hold. Soft spots for root: scene 2's right column is a dense notation build (six chips and four rows); scene 5's table cells are tight ("0.175" in 130 px); the red die replaces the design's white die (forced by f15).
