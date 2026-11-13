# math-a12-f04 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 13 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f04-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,004 frames (467 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f04/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check against the measured captions), `config.ts`, `assets.ts` (hillside strip, tube seedling, young gum tree), `scenes.tsx` (re-exports `F04OpeningFrame` and `F04FinalFrame`);
  - `parts.tsx`: re-exports f03's, f02's and f01's parts (read-only imports); load-time checks of every value (the crew 50, 80, 110, a₁₂ = 380, Sₙ = 15n² + 35n for n = 1 to 12, S₁₂ = 2,580, S₇ = 980, S₈ = 1,240, ten of twelve days above 100; 3% steps 1.50 and 1.545; the park 3500n + 58 500, S₁₀ = 777 500, 83/7 ≈ 11.86, 97,000 and 100,500; the machine 915 − 15n, zero at 61, −60 at week 65, S₆₀ = 27 450; the tree 120 to 390, 345; A1 164 and 1830; A2 100 and 96; 2, 4, 8, 16). Lesson rigs: `Crew` (the planting hillside, see Joins and Plate fit), `PctStrip`, `GuessChip`, `CheckBars` (columns against a target on a broken scale), `MiniBars` (day strips for the question cards and feedback), `QStrip` (the worded question with underlined givens), `SlipLine`;
  - `s1.tsx` (scenes 1 to 4, `F04OpeningFrame`), `s2.tsx` (5 to 9, `AidIcons`), `s3.tsx` (10 to 15, `F04FinalFrame`).
- `src/explainer/lessons/math-a12-f03/s3.tsx`: `F03FinalFrame` now points at `F04OpeningFrame` (one import, one line). `F04OpeningStandIn` is kept and still exported; f03's scene 14 still builds the picture up with it.
- `src/explainer/registry.ts`: one import and one array entry, after f03.

## Joins
- **Frame 0 equals f03's ending.** `F04OpeningFrame` draws the same picture with the same geometry as `F04OpeningStandIn` (heading "A planting crew", the strip at 1,800 px, 66 px seedlings 5, 8 and 11, bars 50, 80, 110 at 2.6 px per seedling, "+30" arcs, "?" over days 4 to 12, the dashed "1,200 in total?" line and the dashed total column, "Next: more or less than 1,200?" and "?"). Checked by rendering f03's last frame (before the repoint) and f04's frame 0: the same layout, element for element (f03's very last frame carries the end-of-video fade, so the pixels are lighter there).
- **f03 repointed.** f03's final frame is now f04's real opening component, so the two cannot drift. Root: f03's `s3.tsx` is the only f03 file touched; f03 type-checks and renders.
- **First motion (frames 14 to 70).** The old heading and the two chips fade; the day tabs close up (148 px to 104 px apart), the bars drop onto one chart line (y = 585), and the total column moves from over day 12 to its own place beside the strip, with the 1,200 line at its true height on the column's scale. This had to happen because (a) in the stand-in the total column sits over day 12's "?" and (b) bars on a rolling hillside have different base heights, so the "100 a day" line of scene 3 could not be straight.
- **Final frame.** `F04FinalFrame` is the doubling board: cards 2, 4, 8, 16 (104 px, "n = 1" to "n = 4"), grey "+2", "+4", "+8" in the gaps with "differences: not the same step", amber "×2" arcs, "Next: the same ratio every time" and "?". The notes cross-fade back to it. f05 opens on it.

## Plate fit
- **Hillside strip (`ma12-hillside-strip-v1.png`, alpha32 box [0, 450, 2172, 724], measured top profile):** one tile at 1,800 px wide in scenes 1 to 3; seedlings stand on the measured profile (linear between Codex's profile points). In scene 8 a 420 px copy is the ground under the tree, placed so the measured surface meets the tree's base point.
- **Tube seedling (`ma12-tube-seedling-v1.png`, alpha32 box [207, 221, 817, 1320]):** 66 px tall, one per 10 planted (258 by day 12), four to a row under each day tab, rows 16 px apart down the slope; drawn back row first. In the memory aid, 115 px tall.
- **Young gum (`ma12-young-gum-tree-v1.png`, alpha32 box [95, 135, 791, 1647], base point at the box's bottom centre):** drawn at 1.85 px per cm, so 120 cm is 222 px and 390 cm is 722 px tall (332 px wide); uniform scale from the base point through the kit's `GrowingPlate`; never stretched.

## Departures from the design
- **Scene 1:** a "the crew" card (day 1: 50, day 2: 80, day 3: 110, 30 more each day) and a "the question" card fill the middle as the narration lists them; the guess chip reads "12 × about 100 ≈ 1,200" in two lines beside the total column.
- **Scene 2:** two rows "80 − 50 = 30" and "110 − 80 = 30" come before the hand tag; the model card holds aₙ, a, d and n; the percentage strip (50, 51.50, 53.05 with "+3%" arcs and grey "+1.50", "+1.55") sits in the right panel above the 1,200 label; the hand tag reads "a fixed percentage: the steps grow, so not arithmetic".
- **Scene 3:** the bars rescale from 2.6 to 0.8 px per seedling at the start so day 12's bar fits; a "which formula?" card holds the middle until the slider runs; the day slider runs at an even pace from "the total over" to just before "It's six"; the readout board has two rows (today aₙ, total Sₙ) and the current day is marked on its tab; the 100 line starts after day 2 (days 1 and 2 are below it, and a line through their labels would cross text).
- **Scene 4:** two stacked graphs on one day axis (running total above, daily amount below) instead of one plot with two y-axes. Each jump in the total is drawn in blue (it is that day's planting), with "+80", "+110", "+140" and "+380". No small hillside beside the plot (at 420 px the seedlings would be 15 px tall); the readout board (day, planted today, total) replays days 1 to 12 instead.
- **Scene 5:** the timeline shows years 1 to 4 (no "…" tab); two grey check rows (n = 1 and n = 2) follow the expression; "year 1: no increase yet" points at the first bar.
- **Scene 6:** scene 5's timeline stays until "Check both sides", then gives way to two columns on a broken scale (from 90,000) against the dashed 100,000 line, with values under the year labels; year 12 on the number line gets a green tile; the year strip counts 11 arcs; the slip reads "12 increases" with the caption "year 1 has no increase".
- **Scene 7:** the plot window runs to week 70 and down to −220 so the impossible point has room: one grey point at week 65 ("week 65: −60 parts?"), crossed in red, instead of weeks 62 and 63 (those two points would sit on top of each other and on the axis at this scale). Weeks 1 to 60 are tinted teal under the points.
- **Scene 8:** the task card sits to the right of the tree so the tree can use the full height; the ladder of seven cards doubles as the time strip ("t = 0" to "t = 6", then "1st term" to "7th term"); the slip is one line ("6th term: 345 cm", "only 5 steps").
- **Scene 9:** the two icons are on the card from the first frame (half strength until their cues).
- **Attempt pictures:** A1 has 15 day slots with only day 1's bar and a dashed "total?" column; A2 has day 1's bar, "?" slots, "…" and the dashed 100 line. Feedback 2 shows days 20, 21 and 22 (104, 100, 96) against the 100 line on a broken scale.
- **Handoff:** the recap is one picture (four day bars with "+30" arcs and the total column S₄ = 380) with a three-line card, then the doubling board.

## Cue check
Every phrase resolves; repeated phrases named: scene 3 "three hundred and eighty" #1; scene 5 "sixty-two thousand" #1; scene 6 "year twelve" #1; scene 7 "After that" #2 (the first is "each week after that"); scene 8 "After six years" #2 (the first is in the question); scene 11 "one hundred and sixty-four" #1 and #3; scene 13 "twenty-one" #1.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f04`: see the last run below. Report: `out/explainer/Explainer-math-a12-f04/grade/Explainer-math-a12-f04-grade.md`.

**PASS WITH WARNINGS (0 failures, 1 warning)**: "few pictures" (5 of 15 teaching frames hold a plate of 250 px or more; the checker does not count the coded graphs, timelines and day strips of scenes 4 to 7 and 10 to 14 as pictures). An earlier run also warned on the scene 9 opener (faint and sparse); fixed by putting the icons on the card from the first frame and writing the first line as its sentence starts.

## 1 fps sweep
Four sweeps with the probe (467 frames each), every second frame inspected on contact sheets and the changed scenes at full size; the overlap check (`analyse.mjs`) and the line-through-text check (`sweep.mjs --ink` with `ink.py`) run on every frame. Found and fixed: y-axis numbers within 30 px of the frame edge (scene 4); "cm" on the scale's "400"; the "+380" label under the dashed curve; a "+30" label on the x-axis; the "weeks 1 to 60" row running into the plot; the dashed 100,000 line touching its label; the ground strip under the scale's "0" and under the slip; bar tops and the base line touching "180", "?" and "…" in attempt 2; a ring through the number line's "12"; cards that opened with empty lines (they now grow line by line); long empty stretches at the start of scenes 3, 6 and 13.

Line-through-text check, last run: 10 runs, none a defect. Six are the red strikes of the crossed guess, slips and mistake cards. Four are the kit timeline's value labels ("62,000" to "72,500") in scene 6: the label's box reaches 12 px below its baseline to the bar's top edge; the digits sit 14 px above the bar and nothing crosses them (the same timeline in scene 5 is not flagged).

## Root grading fix (13 November)
- **Scene 8 tree readout.** The card showed "t = 1.0" beside "height 163 cm" while the tree was still growing (the height came from the unrounded t = 0.96). The card now rounds t to one decimal place once and works the height out from that shown value (t = 1.0 gives 165 cm; t = 0.9 gives 160.5 cm). The painted tree still grows smoothly.
- The other live readouts were checked the same way. Scene 3 (today aₙ, running total), scene 4 (day, aₙ, Sₙ) and scene 7 (week, output) already work from one whole-number or shared value.

## Check at playback speed
- Scene 1: the tabs closing up and the bars settling onto the chart line (frames 30 to 70).
- Scene 3: the bars shrinking to the new scale; day 12's bar rising alone; the slider (about 5.5 s): bars, seedlings and the total column together, the column passing the 1,200 line during day 8.
- Scene 4: points arriving day by day on both graphs; the amber steps; the blue jumps.
- Scene 7: the ring sliding down the points to week 61 with the readout.
- Scene 8: the tree growing one year, then five more in step with the cards.
- Handoff: the "×2" arcs one after another.

## Kit notes (no kit file edited)
- `PeriodTimeline`: value labels sit 14 px above the bar; the ink check flags them in some frames. A 22 px gap would clear it.
- `LiveReadoutBoard`: the unit text is 28 px (below the 30 px floor).
- The display font has no subscript n, so "aₙ" and "Sₙ" fall back to a serif n, as in f01 to f03.

## Honest grade
A on the checker (0 failures). Root may call these B+: the scene 9 opener (the card holds the heading, the first line and two half-strength icons for about 5 s); scene 5 part (a) (the lower left holds only two grey check rows); scenes 1 to 3 leave a 170 px band of bare paper under the day labels, because the strip's position is fixed by f03's final frame.
