# math-a12-d13 (the remaining composites a^□, log_a □ and tan □; drone camera anchor): build notes, 10 Nov 2026

Status: typechecked (scoped tsconfig, clean apart from the known kit.tsx useMemo); 81 `cue()` phrases resolve, 0 missing; no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d13-sheet.jpg`: the grade checker's 16 sheet stills (457 1370 2283 3197 4110 5024 5937 6850 7764 8677 9590 10504 11417 12331 13244 14157 of 14,614 frames), no stamps. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 1 warning: "Few pictures"). Builder's grade: **A−** (see "Grade per frame"). Not yet watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d13/`:
- `common.ts`, `config.ts` (scene-13 `Math.max(1350, d)`), `assets.ts` (drone, ground strip, plus d12's plates for frame 0);
- `parts.tsx`: role spans `T` (teal: the outside's part), `B` (blue: the inside's slope), `A` (amber: conditions), `S` (empty dashed inside slot), `P`, `Lb`, `Frac2`; plates DRONE and GROUND (reused Physics, native aspect; **lens centre measured at 1665, 630 and the grass surface at row 490 on the plates**); `DroneTilt` (the anchor rig: ground strip, hovering drone, dashed "straight down", sight line at tilt θ with angle arc, violet spot tan θ ahead with a dashed measure, edge arrow, "gone" state at π/2 with "horizon: spot gone"); `DroneBoard` (tilt, spot ahead, then sec²θ × tilt rate = spot speed in teal, blue and violet); families EXP3, LOG3, TANE, EXP5, LOG2, COS2; `slotRows` (d06's four rows and this video's three, with teal/blue/amber glows, plus split left/right sides) and `SlotRow`;
- `s1.tsx` (1 to 3), `s2.tsx` (4 to 6), `s3.tsx` (7 to 10), `s4.tsx` (11 to 13; exports `D13FinalFrame`, `C_Stage`, `D14_STAGE`, `WIN_C`, `MemoryLine`, `AID_MAIN` for d14);
- `scenes.tsx`. Registry: one import and one entry.
Read-only imports: math-a12-d04/parts, math-a12-d05/parts (WholeRows), math-a12-d08/parts (Ring, Givens), math-a12-d12/parts (AmberStrip, AnswerBox, Line, Panel, QRadAxis, tl) and math-a12-d12/s5 (`D12FinalFrame`, `D13_STAGE`, `EXP32`, `WIN_E`).
One shared-part change in d12's own `parts.tsx`: `QRadAxis` right-aligns its tag when the mark is right of centre (d13 attempt 1 marks x = 1; d12's mark at π/6 renders as before).

## Joins
- Frame 0 is `D12FinalFrame` (imported, identical to d12's last frame). Window E keeps its place; d12's heading, memory line, chips and "Next" chip fade over "Composites hide in everyday things".
- Final frame (scene 12) = `D13FinalFrame`: window C (x −0.5 to 3.5, y −1.5 to 1.5) at (20, 200, 1040 × 740) with y = cos 2x in ink, (π/6, ½) ringed and labelled, rows "dy/dx = −2 sin 2x" (2 blue, 2x in a dashed slot, grey "d06" chip) and "x = π/6: −2 sin(π/3) = −√3" (grey "≈ −1.732"), chips "tangent line?", "normal line?", "Next: tangents and normals", heading "Next: lines from derivatives" and the memory line. The key notes cross-fade back to it. **d14 builder: import `D13FinalFrame` from `math-a12-d13/s4`.**

## Departures from the design (with reasons)
- Scene 1: window E keeps d12's geometry (1040 × 740 at the left), so no reframe is needed. The three composite chips fade with d12's frame instead of moving to a dim row (no dim chips; they return as worked examples 1 and 2). The drone panel stays full size (760 × 520) through the scene rather than shrinking to a 300 px thumbnail (anchor rule); the tilt repeats as a 0 → 1.2 rad sweep at ½ rad/s until "Keep that picture", then holds. The two answer chips, their "predicts" tags and the secant readout use window E's empty upper left. No zoom inset (the held secant stops are visible at this scale).
- Scene 2: no drone thumbnail (anchor rule). A "Where 2.197 comes from" plan card fills the column until the rows; the two quick answers stay as a crossed card from the first frame and gain "lost ln 3" and "lost the 2" on "Each quick answer". The squash uses 3^x in solid ink (not dashed) so the transform reads as the same curve becoming 3^(2x).
- Scene 3: the slot rows show their left sides from the first frame and their right sides on cue; the drone strip shows "spot = tan(θ)" from the first frame and its speed half on "For the drone". The tilt-rate step ½ → 1 doubles the board's speed at θ = 0.5 (0.65 → 1.30); in the gone state the board reads "none" for sec²θ and the speed.
- Scene 4: the rider moves across window G and stops at x = 1 (readout "gradient 0.910"); the amber tag sits above the plot.
- Scene 5: the inside's graph y = eˣ is a strip above the main graph sharing its x scale (not a corner inset), so the dashed drop from eˣ = π/2 lands exactly on x = ln(π/2); the next wall is named at the strip's right ("3π/2 at x ≈ 1.550 →"). The curve shows from the first frame; the wall line and label arrive on "and so on". The answer frame arrives on "So d y by d x". No drone thumbnail. The silent slip starts just after "At x equals zero" so its caption completes.
- Scene 6: own framed card (d09 pattern); the slot table at 40 px on the left; no drone badge (anchor rule), its keyed line "drone: spot speed = sec²(tilt) × tilt rate" is a hand line.
- Attempts: d12's attempt layout (60 px card, 46 px Given card, 820 × 430 answer-free axis; attempt 2's line uses ticks −6 to 9 in threes, so it does not mark 4). No working box.
- Feedback: graphs from the first frame; slips start on "Five times the natural" and "Without the minus".
- Scene 11: two columns of the slot table ("from d06", "this video") with colour-key hand tags; no drone badge.
- Scene 12: memory line top, window C at the left, rows and chips in the right column.
- Key notes: decision 58 layout; text-only card (no badge).

## Cue check
81 phrases resolve. Repeats checked: scene 1 "one zero" (1300, bold "zero" 1305); scene 2 "The natural log of nine" **#2** (513; #1 is "times the natural log of nine"), "three to the two x" #2 + 34 (766); scene 3 "inside's derivative" #1 (498); scene 4 "equals one" #1 + 11 (286), "natural log of three" #1 + 22 (815), "At x equals one" **#2** (849; #1 is "the gradient at x equals one"); scene 5 "and so on" #1 + 10 (954); scene 10 "less than four" #1 + 18 (220).

## Grade per frame
1 drone tilting with the two-factor board, window E A− (40 %, upper left of the graph waits for the answers); 2 answers, dashed predictions, secant 4.000 A; 3 index-law row, plan card, crossed answers A−; 4 squash done, rows and answer A; 5 slot table with fixed left sides, drone strip A; 6 horizon reached, glows A; 7 log₃(x² + 1) board with the rider A− (42 %); 8 tan(eˣ) board with the inside strip A− (42 %); 9 tan(eˣ) gradient, wall, slip A; 10 memory card A; 11 attempt 1 A (question layout); 12 feedback 1 A; 13 feedback 2 at the domain step A− (46 %, the answer arrives 25 frames later); 14 strand-close table A; 15 handoff A; 16 key notes A.

## Grade checker report
`out/explainer/Explainer-math-a12-d13/grade/Explainer-math-a12-d13-grade.md`: PASS WITH WARNINGS, 0 failures. Warning: whole lesson "Few pictures" (graphs are not counted).

## Kit issues
- No kit rig fits a side-view camera tilt, so `DroneTilt` is lesson-local (root decision 21 expects this).
- `FunctionSimulator` secant: the partner dot uses the kit's fixed orange, not a role colour.
- `InnerSlot` needs content; an empty slot is two en spaces.
- Superscripts inside the shrunk feedback question cards render about 19 px (three characters or fewer, so the checker allows them).
- Same as d12: `FunctionSimulator` asymptotes grey only; `QuestionCard` countdown late (lesson `PreRing`); graphs not counted as pictures.

## Check at playback speed
The d12 frame fading on "Composites hide"; the drone sweep timing against "how fast" and "how far" and the cell glows; the secant stops 4.000 → 2.457 → 2.222 then the tangent on "They settle"; the squash (run 1 → ½, readout 1.099 → 2.197) on "half"; the slot rows filling in; the rate step and the tilt racing to the horizon; the rider stopping at x = 1; the eˣ strip drawing, the amber drop to x = ln(π/2) and the pen trace to the left; the memory-card rings; the feedback slips; the notes cross-fade back to the handoff frame.
