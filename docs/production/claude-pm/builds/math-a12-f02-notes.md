# math-a12-f02 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 13 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f02-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,792 frames (493 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f02/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check against the measured captions), `config.ts`, `assets.ts` (chair, tin, display base), `scenes.tsx` (re-exports `F02FinalFrame`);
  - `parts.tsx`: re-exports f01's board parts (read-only import); load-time checks of every value (guess 200 against 194; 6n + 74 for n = 1 to 8 and 11 to 14; n = 38/3 = 12⅔; WE1 a₁₀ = 32 and n = 16; WE2 d = 4, a = 1; Problem 1 terms 7, 3, −1, −5, −9 and 11/4 = 2.75; A1 −83 and the crossed −88; A2 a = 2, d = 4, crossed 3.2; tins 120). Lesson rigs: `ChairRig` (the painted chair nested by the measured 6 cm offset, each new chair behind, on a coded cm scale; px per cm animates uniformly for the pull-back; door and reference lines, amber step brackets, a ringed bottom chair, and the ghost 21st chair drawn as a faint copy with its protruding 6 cm outlined and crossed), `Arcs` (step arcs with changeable labels, forward, back or below), `TinPyramid` (tins at 96 px, rows of 1 to 15 filled from the top, on the display base);
  - `s1.tsx` (scenes 1 to 4, `GuessMark`), `s2.tsx` (5 to 9, `ChairPosts`, `AID2`), `s3.tsx` (10 to 15, `F02FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, after f01.

## Joins
- Frame 0 is `F01FinalFrame` (imported from `../math-a12-f01/s3`), drawn over a replica rig at the same geometry (6 px per cm, floor y 920, chairs centred at x 470, scale at x 250, ladder 80, 86, 92 at x 980). It fades over frames 22 to 38; the chips fade by frame 42; the new heading writes from frame 40. On "One chair" the ladder moves up to the board position; on "stack of twenty" the rig pulls back from 6 to 3.2 px per cm and the scale extends to 220 cm.
- The final frame is `F02FinalFrame` (scene 14's tin board: the 15-row pyramid on its base, "1 + 2 + 3 + … + 15 = ?", "tins in rows 1 to 15", "Next: a shortcut for the total" and "?"). The notes cross-fade back to it over their last 40 frames. f03 opens on it.

## Plate fit
- **Stacking chair (`ma12-stacking-chair-side-v1.png`, alpha32 box [160, 194, 902, 1276], 13.5125 px per cm, 6 cm = 81.075 file px):** uniform scale only; 6 px per cm at the join, 3.2 px per cm for the 20-chair stack (620 px tall), 3.6 px per cm in scene 6, 2.6 px per cm beside the plot in scene 4; side by side at 190 px wide in the memory card and 100 px in the notes card.
- **Food tin (`ma12-food-tin-v1.png`, alpha32 box [163, 156, 1611, 731]):** the visible tin is 2.52 : 1, so at 96 px wide a row is 38.1 px (the design assumed 48 px, 2 : 1). The pyramid is 1,440 × 572 px, rows touching (the measured contact step equals the visible height), each row offset half a tin.
- **Display base (`ma12-display-base-v1.png`, alpha32 box [105, 306, 2066, 493], top contact line y 308):** 1,560 px wide, its top contact line on the pyramid's floor line.

## Departures from the design
- **Scene 1:** the board is regrouped for the 3.2 px per cm stack: the readout board (chairs n, height) at the top right, "How tall is a stack of 20 chairs?", the guess row, "only just fits under a 2 m door?" and a red chip "Is the guess right?" down the right column. The door label sits at the left end of the line.
- **Scene 2:** the ladders 20, 17, 14, 11 and 1, 4, 9, 16 fade on "So to test" and the two test chips take their place.
- **Scene 3:** step arcs relabel "+6" to "+d" as each card turns symbolic; the "position 2: 1 step · …" row sits under the positions; the ghost 21st chair is a faint copy at the next offset with only its top 6 cm outlined and crossed (the kit ghost outlined the whole chair, which covered the stack).
- **Scene 4:** a "the chairs: a = 80, d = 6" card holds the right column until "It would cross"; the replayed stack has no scale (the plot carries it).
- **Scene 5:** a plan card ((a) 9 steps of d after a; (b) set aₙ = 50 and solve, n whole) holds the right column until "Now, which term"; the silent slip "n = 15" lands just after "n is sixteen".
- **Scene 6:** the zoomed plot (n 10.4 to 14.6) and its 150 line are on screen from the start; the points arrive on "On the graph". The stack goes 11 → 12 chairs on "between" and 12 → 13 just before "fifty-two".
- **Scene 7:** slot 1 reads "a = ?" until "one"; the matching equations box sits below the rise label.
- **Scene 8:** the first term's point (1, 7) shows from the start (a = 7 is given); a framed aₙ = a + (n − 1)d and a plan card fill the right column until the rows; the gradient triangle is drawn at n = 3 without a label, with the hand tag "gradient −4 = d" beside it; the check strip 7, 3, −1 has a "−4 each step" tag instead of arcs (arcs would sit on the answer frame).
- **Memory aid:** the five chairs stand from the first frame with "Why n − 1?"; the d arcs draw on "four gaps".
- **Feedback 1:** the question card's slot row moves up; slot 20 shows "?" until "eighty-three".
- **Attempt 2 picture:** seven slots shifted left so the countdown ring never covers slot 7.
- **Handoff:** the recap (8 chairs, framed formula and the plot with its guide line) fades on "Next"; the tins fill row by row from "A supermarket" (top row first).

## Cue check
Every phrase resolves; repeated words named: scene 1 "centimetres" #3; scene 2 "minus" #1 and #2, "same" #1 and #2; scene 3 "along" #2, "lots of d" #1; scene 5 "fifteen" #1; scene 6 "thirds" #1; scene 7 "four" #1, "one" #1; scene 8 "five" #1, "whole number" #1, "one" #4 ("minus one", not "a decreasing one"); scene 9 "first" #1. One phrase was wrong in the first draft ("Plot each stack" does not match "stack's"); it is now "Plot each".

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f02`: **PASS WITH WARNINGS (0 failures, 3 warnings)** on the final run: sparse frames 5 (scene 4, 52%), 10 (scene 8, 54%) and 13 (attempt 2 card before its hold, 56%). Earlier runs failed frames 5, 6 and 10 as mostly empty (60 to 69%); fixed with the chairs card (4), the plan card (5) and the framed formula, plan card and larger rows (8). Report: `out/explainer/Explainer-math-a12-f02/grade/Explainer-math-a12-f02-grade.md`.

## 1 fps sweep
Four sweeps at every 30th frame with the probe, every frame inspected on contact sheets. Found and fixed: "n = 4" off the right edge at the join (the fourth label now waits for its card); "cm" on the heading; the arc labels on the long heading (the ladder moved down 40 px); "+6 cm each" on the ladder caption; the two scene 1 hand lines colliding; "door: 2 m" on the guess badge; "d = −3" and "not all equal" on the last cards; the "−3" arcs on the definition row; the scene 4 rig's hidden scale labels off frame; the feedback 1 "?" box over "−83"; slot 7 under the countdown; the triangle label on the task card and the gradient tag on the boundary label; the equations box on the rise label; the empty base before the tins and the empty memory card; the ghost chair outlining the whole stack. The final sweep's probe found no collisions.

## Check at playback speed
- Scene 1: the f01 frame dissolving into the replica, the fourth chair dropping behind the stack, and the pull-back (6 → 3.2 px per cm, scale 120 → 220 cm).
- Scene 2: the "+6" arcs relabelling to "86 − 80 = 6" and so on, in step with the brackets between the chair tops.
- Scene 3: the cards morphing to a, a + d, a + 2d, a + 3d; the stack running from 4 to 20 chairs (about 3 s) with the readouts; the ghost chair and its cross.
- Scene 4: each chair's height flying to the plot as the stack replays 1 to 8; the run 1, rise 6 steps.
- Scene 6: the 12th and 13th chairs straddling the 150 cm line.
- Handoff: the tins filling top row first.

## Honest grade
A on the checker (0 failures). Root may call frames 5 (scene 4: the plot with one row and the chairs card), 10 (scene 8 at frame 481: plot and plan card, rows not yet written) and 13 (attempt 2 card before "Pause") B+. The tin pyramid's first seconds in the handoff show the base with only the top rows (not a sheet frame).
