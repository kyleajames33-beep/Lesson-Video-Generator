# math-a12-s02 build notes (Revision 4 build on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-s02-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,098 frames (470 s), 14 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s02/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S02FinalFrame`);
  - `parts.tsx`: re-exports s01's parts (read-only). Load-time checks: the 2027-style non-leap year has 365 pages; pages per date 12 (1st to 28th), 11 (29th, 30th), 7 (31st); `monthsWithDay(31)` = 7; two-dice sums 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 (36); 20 − 5 + 1 = 16 and 4/16; 1/0.04 = 25 and 1/0.3 not whole; A1 3 of 10; A2 remainders 2, 3, 3. Rigs: the flip pace shared by the pad, the bars and the readout (`flipPace`, `pagesAt`), `WhiteDie`, `NumberLine` (dots, counting labels, amber dots), `BalanceTriangle`;
  - `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 14; `S02FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry after math-a12-s01.

## Plates used (all exist; never stretched)
- `maths/ma12-desk-calendar-v1.png` (anchor; the kit `CalendarFlip` writes month and date on its measured blank page, `ma12-desk-calendar-v1.json` rect [266, 391, 906, 974]), `maths/ma12-die-red-v1.png` and `biology/m5x-die-v1.png` (red and white dice of the grid; the red die in the handoff), `maths/ma12-spinner-base-v1.png` with `ma12-spinner-pointer-v1.png` (A2, eight coded sectors).

## Joins
- **Frame 0 is `S01FinalFrame`** (imported from `../math-a12-s01/s3`); scene 1's own layer is held at 0 opacity and cross-fades in over frames 12 to 30.
- **Final frame `S02FinalFrame`** (scene 13's end; scene 14 cross-fades back to it in its last 40 frames): chip "Next: where does a distribution balance?", the red die and "one fair die", six teal bars at 1/6 (face 1 to 6, P(x) 0 to 0.25), an amber balance triangle below the axis at 2.5 (no value shown) under a "?" chip, hand "bars as weights on a beam". s03 opens on it.

## Departures from the design
- **Scene 1:** the die panel does not shrink to a corner card; s01's frame cross-fades into the calendar flip layout (calendar left, readout under it, date bars right). The 3 s prediction is the hand tag "guess: is every date equally likely?" over a large "?" on the empty bars.
- **Scene 2:** the date bars stay as a solid thumbnail beside a small calendar (top right), not dimmed. Equal pieces: the six die bars tip (kit `StackedTotalBar`) into a bar of six 1/6 pieces, re-divided into ten 1/10 pieces on "tenth".
- **Scene 3:** the kit `YearStrip` lights the 1st (then the 31st) across the months; the bars below are aligned to the strip's day columns. The tiles do not fly into the bars, and the bars stay on the pages axis (the P rows give 12/365 and 7/365).
- **Scene 4:** cells show the sums; (3, 4) and (4, 3) are ringed; empty sum axes with "?" sit at the right until the grid slides into the eleven stacks.
- **Scene 6:** the size ghost is a grey dashed set (5/75 to 25/75) behind the teal bars, labelled "dashed: sizes over 75".
- **Scene 10:** ten teal 1/10 bars at the right with 16, 18, 20 turning amber (the number line counts below).
- **Scene 13:** the triangle slides 1 → 6 → about 1.8 and settles at 2.5 under "?"; no 3.5.

## Cue check
Every phrase resolves (0 missing). Repeated phrases named: "four", "six", "twenty", "sixteen" (first of each, scene 10).

## Live readouts and simulations
- Scene 1: `CalendarFlip` (365 pages, January slowly), the date bars and the readout (pages torn, month, pages for the 31st) all read `pagesAt`, so they cannot disagree.
- Scene 4: `OutcomeGrid` sliding into the sum stacks. Scene 12: `OutcomeSort` (sectors by remainder into 2, 3, 3).

## Grade checker
See the final run recorded below. Report: `out/explainer/Explainer-math-a12-s02/grade/Explainer-math-a12-s02-grade.md`.

`npm run grade:explainer -- Explainer-math-a12-s02` (final): **PASS WITH WARNINGS (0 failures, 3 warnings)**: sparse frames in scene 4 (52%: the grid at left, empty sum axes with "?" at right, before the slide) and scene 6 (54%), and scene 9 (a question scene; its picture is a bare number line so nothing answer-bearing shows). First run: 3 failures (scene 1 before the flip, scene 4 before the slip, scene 10), fixed by showing the readout and a large "?" before the flip, the empty sum axes in scene 4, and ten 1/10 bars in feedback 1.

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s02` (final run): 10 runs (12 on the first run). Deliberate red strikes: "21 unordered pairs, equally likely" (4), "20 − 5 = 15 values" (5), "P(15) = 15/75, out of a total of 75" and the red ring round "10/3" (6), "c = 0: total 0" and "c > 0: total passes 1" (7), "P(X > 15) = 3/20" (10), "uniform, because the spinner is fair" (12). Trivial: one second in scene 2 (frame 1560) where near-paper-coloured ink (236, 233, 222) touches the 0.05 and 0.15 axis labels as the total bar's pieces start to tip. Fixed after the first run (confirmed gone in the final run): the spinner pointer lay across the "5" sector label in scenes 11 and 12 (pointer now on a sector boundary, 225°); S02FinalFrame's bars now show from its first frame.

## Check at playback speed
- Frames 0 to 30: s01's last frame exactly, then the cross-fade.
- Scene 1: the year flip (January about 3 s, the rest about 4.5 s); the 29th to 31st bars pausing in February; "only 7".
- Scene 2: the six bars tipping into one bar of six pieces; the swap to ten pieces.
- Scene 4: the grid's spring slide into the sum stacks.
- Scene 7: the bars splitting 6 → 12 → 24 → 48 on the spoken numbers; the runaway total bar turning red past 1.
- Scene 13: the triangle's slide and stop under "?".

## Honest grade
**A** on the 16 frames (see the checker result above for warnings): the calendar, dice, spinner or a live simulation carries most teaching frames; current lines 44 to 52 px; worked board (scene 5) with a framed answer and crossed slip; five short notes with the framed card; 45 s hold. Soft spots: scene 4 between the slip and the slide is sparse on the right (empty axes with "?"); scene 9's picture is a bare number line by design (nothing answer-bearing).

## Root review round (16 November): fixes and final checks
- **Your turn (scene 9):** the givens card stays; the number line now shows hollow rings at the listed values ("values of X") and an amber bracket "X > 15" over 15 to 22. No count, no 1/10, no answer.
- **Two dice (scene 4):** after the slide a full copy of the grid (the 7 diagonal still lit) stays on the left beside the sum stacks; "the 36 outcomes, sorted by sum" and "outcomes: uniform" sit under the grid.
- **Final grade:** `npm run grade:explainer -- Explainer-math-a12-s02`: **PASS WITH WARNINGS (0 failures, 3 warnings)**, sparse frames at 52 to 54% (scene 4 before the slide; scene 6; scene 9, now down from 63%). Sheet remade.
- **Final ink check:** 10 runs: the 8 deliberate red strikes listed above, plus the one-second near-paper trace at the scene 2 axis labels (trivial). The new "outcomes: uniform" tag first sat over the kept grid's column labels; it was moved under the grid and the check re-run clean for it.
- s01's files were not touched (s02 still imports `S01FinalFrame`).
