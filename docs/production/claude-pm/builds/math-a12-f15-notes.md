# math-a12-f15 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f15-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 13,030 frames (434 s), 14 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS". Last video of the financial mathematics strand.

## Files
- `src/explainer/lessons/math-a12-f15/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check), `config.ts`, `assets.ts` (the travel suitcase; the reused phone), `scenes.tsx` (re-exports `F15FinalFrame`);
  - `parts.tsx`: re-exports f09's parts (read-only). Load-time checks from the kit's money engine: the holiday deposit (factor 25.432; 235.92 reaches 5,999.91; 235.93 reaches 6,000.16; 5,662.32 put in), the $600,000 goal (597.30 reaches 599,996.83; 1,666.67), fortnights (720,885.32 exact r; 721,020.61 with r = 0.002462; 292,500), the time (28.02; 5,994.90 after 28; 6,224.88 after 29), payments that stop (6,357.99; 6,750.14; slip 9,834.03), A1 (1,099.07 falls short, 1,099.08 reaches; 1,250), A2 (24,012.21; 29,214.53; slip 40,047.18). Rigs: `Suitcase`, `GoalPhone` (the phone in goal mode; f14 draws its final frame with it), `FrequencyBars` (the die chart);
  - `s1.tsx` (scenes 1 to 4; `ValueSplit`, `CHECKS`), `s2.tsx` (5 to 8), `s3.tsx` (9 to 14; `QuarterStrip`, `TwoStage15`, `F15FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry (after f13; f14's entry belongs to the other agent).

## Joins
- **Frame 0 is `F14FinalFrame`** (imported from `../math-a12-f14/s2`; f14 draws it with this lesson's `GoalPhone` and `Suitcase` at the same places). It fades over frames 14 to 28; on "holiday" the phone slides left and shrinks, the suitcase moves right, and the goal meter appears.
- **Final frame: `F15FinalFrame`** (s01's opening, as the design asks): heading "A die, rolled 200 times", the coded face chart (faces 1 to 6, counts 0 to 50, "200 rolls"), one blue bar "38" at face 4, five dashed "?" outlines, the hand note "the four came up 38 times", chips "Next: is the die fair?" and "?". No expected count. s01 is not built; if its opening differs, point `F15FinalFrame` at it.

## Plate fit
- **Travel suitcase (`ma12-travel-suitcase-v1.png`, 1106 × 1422, alpha > 32 box [284, 226, 819, 1239])** at 200 to 600 px tall.
- **Phone (reused, d03 box and screen)** at 810 px (opening) sliding to 680 px, and 320 px in scene 2.

## Departures from the design
- **Checklist:** shown in scene 2 as a card (lines 0 to 4 on cue, three hand tags under line 4); it does not stay small in later scenes (no space beside the working).
- **Scene 3:** the meter runs 24 deposits of $235.92 to "9 cents short" (kit magnifier), then reruns at $235.93 to $6,000.16.
- **Scene 4:** the goal meter runs 360 deposits of $597.31 beside the working (the design asked for a split bar only); the split bar shows deposits ≈ $215,032 and interest ≈ $384,975 (from the engine at $597.31; the design's table said $384,975 too).
- **Scene 4 (root's A pass):** the goal meter, its readout and the givens strip (FV = $600,000, r = 0.005, n = 30 × 12 = 360) are on screen from the scene's first frame, with the plan card at the right until the working starts; the readout is 530 px wide so six-figure balances stay inside it, and the working, answer and split bar moved to x 850.
- **Phone text (root's A pass):** `GoalPhone` now uses f13's `PhoneApp` (screen text 34 px or more: rows 34 px, title 36 px, balance 38 px) instead of the kit `ScreenApp` (26 to 28 px). This also enlarges the phone text in f14's final frame, which imports `GoalPhone`.
- **Scene 5:** a one-year strip of 26 blue fortnight arrows; the rounding effect is a grey chip.
- **Scene 6:** the meter stops at 28 deposits ($5.10 to go) and the 29th lands on "twenty-nine deposits".
- **Scene 7:** a 36-month strip (24 blue ticks, 12 amber arcs, dashed empty slots on "never made"); the meter keeps rising with interest only after month 24.
- **Scene 8:** the three keyed lines are hand text beside the suitcase.
- **Handoff:** the painted red die (reused `ma12-die-red-v1.png`) stands beside the chart, in the final frame too; the "?" outlines arrive on "A die is rolled".

## Cue check
Every phrase resolves (0 missing). Repeated phrases named: "guess" 2 of 2 (scene 1); "zero two" 1 of 1 (scene 6); "Match", "model", "finish" 1 of 2 each (scene 8).

## Live readouts
- Scenes 1, 3, 4, 6 and 7: the kit's `GoalMeter` readouts (deposits, balance, to go) from its savings schedule.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f15` after root's A-pass fixes (14 November): **PASS (0 failures, 0 warnings)**; sheet remade (`math-a12-f15-sheet.jpg`). Earlier runs warned text collisions in scenes 4 and 6 (the meter's board over the working; the givens strip wrapping onto a row) and the check stills showed "goal $600,000" off the right edge. Report: `out/explainer/Explainer-math-a12-f15/grade/Explainer-math-a12-f15-grade.md`.

## 1 fps sweep
First build: full sweep with the grade script (`--frames 434`, one a second), every third frame inspected on 5 × 5 contact sheets, plus its automatic findings. Found and fixed then: scene 2 mostly empty for 5 s; scene 5 with no 44 px line for 13 s; feedback 1 mostly empty for 8 s; the handoff mostly empty for 6 s (the "?" outlines on "A die is rolled", the painted red die `ma12-die-red-v1.png`, box [264, 252, 1021, 1058]); the meter reading $5,999.97 and "3 cents short" (a stray partial month; the meter now stops at 24 deposits: $5,999.91, 9 cents short), and the same offset in scenes 6 and 7; the magnifier printing "4079… cents short" during the rerun; scenes 4 and 7's empty stretches.

A-pass re-sweep: every frame a second over scenes 1, 2 and 4 (84 stills) on 5 × 5 contact sheets, plus check stills of the f14 join. Found and fixed: the givens strip wrapping its third chip onto the meter's goal line (now one line, 36 px); the meter readout's "$600,000.00" and "$600,006.88" spilling past the card (readout widened, working moved right). Scenes 1 and 2 were clean.

Final ink-check round: in scene 7 the suitcase covered the meter's "2 years $6,358" goal label. The suitcase (now 180 px tall) and its "+1 year" chip moved below the meter's readout, at the lower left. The readout widened to 420 px so "$6,750.14" stays inside it. Scene 7 was re-swept at 1 fps (37 stills): clean. Grade rerun: 0 failures, 0 warnings. The sheet was remade because scene 7 is on it.

## Kit notes for root (described, not edited)
- `GoalMeter`'s goal label sits to the right of the meter and runs off the frame for six-figure goals near the right edge; f15 moved the meter left.
- `ScreenApp` text on the phone is 26 to 28 px at 680 to 810 px phone height; f13 and f15 now use the lesson-local `PhoneApp` instead.

## Check at playback speed
- Scene 1: the phone sliding left as the meter arrives.
- Scene 3: the 24-deposit run, the magnifier's "9 cents short", and the rerun crossing the line.
- Scene 4: the 360-deposit run (about 8 s).
- Scene 6: the run stopping at 28 deposits, then the 29th.
- Scene 7: the meter switching from deposits to interest only.
- Handoff: the "38" bar rising and the "?" outlines arriving.

## Honest grade
**A**: 0 failures, 0 warnings. Scene 4 is full from its first cue (meter, givens, plan, then the working and split bar), and the phone text is 34 px or more. Soft spots root may weigh: scene 7's statement of the slip is long (36 px in a 1,080 px card); the checklist in scene 2 does not stay on screen in later scenes.
