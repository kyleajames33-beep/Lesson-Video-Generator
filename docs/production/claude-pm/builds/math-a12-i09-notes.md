# math-a12-i09 build notes (Revision 2, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i09-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,572 frames (519 s); the notes scene is 1,350 frames. Header topic label: "INTEGRAL CALCULUS".

## Files
- `src/explainer/lessons/math-a12-i09/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: load-time checks for every value (3, −7/3, 8/3, 1/3, −3, 2, ½, e² + 1 ≈ 8.389, 1, k = ±3, 3/2, −4, 0); `ThermoRig` (the painted thermometer with the kit `ThermoColumn` mapped to the measured bulb (498, 1577) and tube top (498.5, 505), so y = 1017 − 97T holds; coded degree numbers −5 to 5 beside the backing; an amber start mark; a clock tag); `Graph`, `Task`, `Row`, `Hand`, `NumLine`. Re-exports i08's parts read-only;
  - `s1.tsx` (1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 14 and `I09FinalFrame`, i10's opening).
- `src/explainer/registry.ts`: one import and one array entry, after i08.

## Joins
- Frames 0 to about 440 are `I08FinalFrame` (imported from i08); it cross-fades to the thermometer on "frosty morning". i08's final frame already holds the graph of x² shaded from −2 to 1 (see the i08 notes), so i09's graph stays in place.
- The final frame (`I09FinalFrame`, also the end of the notes): y = sin x on [0, 2π] with the signed arches ("+" teal, "−" amber), "∫₀^2π sin x dx = [−cos x]₀^2π" and "= −1 − (−1) = 0", the chips "Area = ?" and "Next: signed integral or area?", a "?" and two short hand tags ("signed: + and − cancel", "area: every piece counts").

## Departures from the design
- **The thermometer** stays about 770 px tall (about 280 px wide) at the left in scenes 1 and 2; in scenes 3 and 4 it is a 520 px inset at the right (the plate is too narrow to read under about 380 px tall). The clock is a tag above the plate and a board row; there is no slider.
- **Scene 1:** the graph is on screen from the cross-fade (its fill sweeps on "Before we work it out"), so the stage is not empty while the thermometer warms. The board rows are "time", "reading now", "start reading (−2 °C)" and "change = now − (start)". The 3 s prediction hold is at the end of the scene (where the measured audio puts it), with the kit countdown from "losing signs".
- **Scene 2:** part 1 uses the kit `StudioLimitSubstitution` for "change = 1 − (−2)" collapsing to "1 + 2 = 3"; part 2 uses it for 1/3 − (−8/3). The two minus signs are labelled by hand tags ("the rule's minus: subtract" in ink, "the number's minus: inside −8/3" in violet) under the row, not by rings on the glyphs. A dim "thermometer: 1 − (−2) = 3 degrees" line stays at the bottom.
- **Scene 3:** the split readout board appears on "Split" (b = 0), and the slider run on "That always works". The rule row strikes nothing; "F(b) cancels" is a hand tag beside it.
- **Scene 4 (238-I09-REVERSE-SUM):** the six backwards strips have no running sum. They show direction (left-pointing width arrows, amber fill) and the tags "Δx < 0: strips run right to left" and "every strip flips its sign"; the exact −3 appears only in the evaluation rows.
- **Scenes 5 and 6:** a "method" card (1. a primitive F, 2. F(top) and F(bottom), 3. F(top) − (F(bottom))) fills the working area until the first value row. e⁰ is written with the i03 `Ex` superscript in the rows; the heading and hand tag spell it out ("e to the 0 is 1") to avoid a superscript glyph in the hand font.
- **Scene 7:** the k dial is the k marker on the axis plus a readout board (k, k² − 1); the backwards run draws reversed strips over [k, 1].
- **Scene 8:** the memory card holds the thermometer plate (760 px tall) with three keyed lines and coded icons (the bracket formula, swap arrows, two merging fills).
- **Feedback cards** show worded short forms (limits at 30 px would fall under 26 px); attempt 2's givens strip uses words ("0 to 5: 7").
- **Feedback 2:** a "plan" card fills the slot under the rows until the answer.

## Cue check
`cuecheck.sh` resolves every phrase, 0 missing. Repeats checked: "which is three" (2) occurrence 2 is "which is three. Positive" (1238), not "three degrees"; "minus eight thirds" (2) occurrence 2 is the bracket row (1061); "minus one" (5) occurrence 3 is "bracket, minus one" (772); "bracket" (5) occurrences 1 and 2 are the two worked examples; "or negative" (1) is the prediction question; "Next an exponential" ignores the comma.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i09`: **PASS WITH WARNINGS (0 failures, 1 warning)**: "Few pictures" (coded graphs are not counted). Earlier runs warned on the clock tag touching the heading (moved down) and a 56% feedback 2 frame (plan card added). Report copy: scratchpad `build-i08/Explainer-math-a12-i09-grade.md`.

## Brief 238 findings handled
- **238-I09-REVERSE-SUM (should fix):** resolved by omitting the finite-sum readout, as the design's author note intends (see scene 4 above).
- Every other value in the maths check is asserted at load.

## Kit issues
- `ThermoColumn` draws its bulb as a circle 1.2 × the tube width; this plate's bulb is wider (radius 22 file px), so the red bulb is slightly smaller than the painted glass. A `bulbRadius` option would fit it exactly.
- `ThermoColumn` tick labels sit just beside the tube, over the painted ticks; I passed none and drew the numbers beside the backing board.
- I edited no kit files.

## Check at playback speed
- Scene 1: the thermometer warming 6 → 9 am, the fill sweep, the slip crossed against the "+ expected" graph, the countdown.
- Scene 2: the "− (−" collapses into "+" (both parts).
- Scene 3: the split point running −2 → 1 → 0 with the sum fixed at 3; the inset stepping −2 → 0 → 1.
- Scene 4: the evening cooling and the strips building right to left.
- Scene 7: the k run to 3, then the backwards run to −3, both ending at 8.
- Scene 13: the arch pulses and the cross-fade to the board.
