# math-a12-d12 (derivatives of sec x, cosec x and cot x; sun, tower and shadow anchor): build notes, 10 Nov 2026

Status: typechecked (scoped tsconfig, clean apart from the known kit.tsx useMemo); 116 `cue()` phrases resolve, 0 missing; no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d12-sheet.jpg`: the grade checker's 16 sheet stills (512 1535 2559 3582 4606 5630 6653 7677 8700 9708 10747 11771 12795 13818 14842 15865 of 16,377 frames), no stamps. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 2 warnings). Builder's grade: **A−** (see "Grade per frame"). Not yet watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d12/`:
- `common.ts`, `config.ts` (scene-14 `Math.max(1350, d)`), `assets.ts` (tower and sun);
- `parts.tsx`: plates (TOWER from the brief 235 manifest, roof's far corner 604,364, footing 1639; SUN, alpha box measured 75,90 to 1152,1165); SEC, COSEC, COT, TAN families; WindowT and WindowS (branch-safe riders, grey asymptotes); `SunShadow` (the lesson's anchor rig: tower and sun plates at native aspect, coded ground, dotted sky arc, sunbeam through the roof corner, shadow band of tan x in tower heights, angle arc x at the roof, optional height angle π/2 − x at the tip, edge arrow with a "shadow 3.60 →" tag); `SunStrip`/`sunCells` (52 px readouts); `PairBoard` (height and slope rows for a function and its reciprocal); `AmberStrip`, `AnswerBox`, `Line`, `Legend`, `Panel`, `DirArrow`, `QRadAxis` (answer-free radian axis for the attempts);
- `s1.tsx` (1 to 3), `s2.tsx` (4 to 6), `s3.tsx` (7, 8), `s4.tsx` (9 to 12), `s5.tsx` (13, 14; exports `D12FinalFrame`, `E_Stage`, `D13_STAGE`, `WIN_E`, `EXP32`, `COMPOSITES`, `MemoryLine`, `AID_MAIN` for d13's opening);
- `scenes.tsx`. Registry: one import and one entry.
Read-only imports: math-a12-d04/parts (Chip, CurveLabel, Dot, Frac, PreRing, RecallChip, TanLine, gmap), math-a12-d05/parts (WholeRows), math-a12-d08/parts (Sup, Ring, Givens), math-a12-d09/parts (Klass), **math-a12-d11/s3 (`D11FinalFrame`, for frame 0)**.

## Joins
- Frame 0 is d11's `D11FinalFrame` (imported, so it follows the d11 build). On "At x equals zero" it cross-fades (14 frames) into this lesson's copy at d11's geometry (window T at 96, 210, 1150 × 740; chips at x 1300), which then eases to the d12 layout. **Root: d11 is still being built; re-check frame 0 against d11's final build. If d11's geometry changes, update `G13` and the chip positions in `s1.tsx` S01 so the cross-fade stays invisible.**
- Final frame (scene 13) = `D12FinalFrame`: window E (x −1.5 to 1.2, y −1 to 10) at (20, 200, 1040 × 740), y = 3^(2x) in ink, ring at (0, 1), "gradient ?", the three composite chips with dashed grey inside slots (66 px, right column), "Next: the remaining composites", heading "Next: three more composites" and the memory line (40 px hand). No badge. The key notes cross-fade back to it in their last 40 frames. d13 imports it.

## Departures from the design (with reasons)
- Scene 1: the sun readouts are a three-cell strip under the panel (a sky board covered the sunbeam); d11's definition chips become a small "Recall" card in window T's empty upper right; the guess sits in a card under the strip. The sun nudges 0 → 0.15 → 0 only (no negative x: the far-corner shadow geometry needs 0 ≤ x < π/2, author note ii); beam readout 1.00 → 1.01. The question chip arrives just after "fails" so no frame shows the fading "gradient ?" chip under it.
- Scene 2: readouts in a two-row height/slope board under the panel; "cos x = height ÷ sunbeam" and "beam grows slowly, then fast" are hand lines in that board.
- Scenes 3 and 5 and 7: **no sun thumbnail** (root's anchor rule: a 300 px thumbnail is a small icon). Scene 3 labels the slope cell "slope: beam's rate"; scene 5 drops "higher sun, shorter shadow"; scene 7 drops "beam 1: shortest". The tower returns at 780 × 520 in scene 8.
- Scene 3: a short Plan card fills the board until the rows; the result is a framed answer box under the rows; check rows at 44 px.
- Scene 4: the rider starts at x = 0.45 (design 0.3) so the slope readout stays in its column (−4.76, not −10.94). A "Same plan as sec x" card fills the column until the rows.
- Scene 5: d11's grey result "(tan x)′ = sec²x" appears on "just as we did for tan" at the bottom of the column, then moves up beside the answer on "That's tan's proof"; the rider and tangent appear on "At pi over four" with "slope −2".
- Scene 6: both rows' graphs and derivative cards show from the first frame; row 2's strip and number line arrive on "zero". cot x is drawn olive (`MATH_CURVE_OLIVE`) in the shared cosec/cot window so the two reciprocal curves can be told apart; each card title names its curves.
- Scene 7: a Plan card fills the board until the rows; the rider shows from the first frame on the left branch (−1 → 1.15 → 0); the second flat point (π, −1) is a ring with a flat tangent (the rider never crosses π/2). The graph shrinks as the crossed slip arrives; the slip's caption is "tan π = 0 too: the upside-down U".
- Scene 8: own framed card (d09 pattern) in two phases: the three swaps full width with grey reason lines; then on "On the tower" the co-results slide left and the tower panel (both angles, two angle readouts, labels "shadow = tan x = cot(π/2 − x)" and "sunbeam = sec x = cosec(π/2 − x)") fills the right.
- Attempts: lesson-local copy of d08's `Attempt` (60 px card, 46 px Given card, 820 × 430 answer-free radian axis, full ring from "Pause here"). No working box.
- Feedback: the graph shows from the first frame; the crossed slips start on "Two over root three" and "A plus on" so their captions finish before the scene ends.
- Scene 13: summary card on the first sentence; chips stacked in the right column; "gradient ?" on "What's its slope" (not "keep"); no tower badge (anchor rule).
- Key notes: decision 58 layout (five bullets at 40 px in the left 60 %, framed card right, text only, no badge).

## Cue check
116 phrases resolve. Repeats checked: scene 1 "At x equals zero" #1 (198); scene 2 "cos x" #1 (110), "it rises" #1 (540); scene 5 "which is one" **#2** (750; #1 is "which is one over tan x"); scene 6 "is zero" #2 (288); scene 8 "minus sine" **#2** (537; #1 spans "add a minus. Sine"); scene 10 "root three" #1 (288) and #2 (380).

## Grade per frame
1 tower, sun sweep, window T, strip A; 2 crossed guess, flat tangent, question A; 3 paired sec/cos riders at π/4 with the sun A; 4 one-over-g board, Plan, graph, slope strip A− (lower right light, 35 %); 5 cosec board with Plan and pair board A− (40 %); 6 cosec riders with arrows and check row A; 7 cot quotient rows, tan ghost A; 8 two domain rows A; 9 worked example opening (givens, Plan, rider) A− (42 %); 10 worked answer and crossed slip A; 11 memory swaps A; 12 attempt 1 A; 13 attempt 2 A− (checker 65 %, same layout as the d08/d09 attempts); 14 feedback 2 A; 15 handoff A; 16 key notes A.

## Grade checker report
`out/explainer/Explainer-math-a12-d12/grade/Explainer-math-a12-d12-grade.md`: PASS WITH WARNINGS, 0 failures. Warnings: frame 13 question scene 65 % bare paper; whole lesson "Few pictures" (graphs are not counted).

## Kit issues
- `LinkedRiders` has no asymptotes, no dashed partner curve and no per-curve point colour, so the sec/cos and cosec/sin riders are a `FunctionSimulator` plus a lesson overlay (`Dot`, `TanLine`) from the same x.
- `NameSwapChips` exchanges two chips; the design's swap (names slide to their partners, a minus drops in) is lesson-local in scene 8.
- `FunctionSimulator` `curves` are sampled straight across asymptotes; the tan ghost and cot pieces are split per branch by hand.
- `FunctionSimulator` asymptotes are grey only (amber glows drawn in overlays, as d08).
- d05 `WholeRows` dims older rows unless `keep`; all working rows here use `keep` (full ink).
- Kit `QuestionCard` countdown starts 10 frames before the hold (lesson-local `PreRing`, as d02 to d09).
- Grade checker does not count `FunctionSimulator` graphs as pictures.
- After the sheet, `QRadAxis` (this lesson's `parts.tsx`) gained a right-aligned tag when its mark is right of centre, for d13's attempt 1; d12's marks are left of centre, so its frames are unchanged.

## Check at playback speed
The d11 cross-fade at "At x equals zero" (must be invisible) and window T easing left; the sun sweep against "shadow" and "sunbeam" and the label timing; the 1.00 → 1.01 nudge on "flat"; the paired riders and direction arrows (scenes 2 and 4) and the sun sinking to 1.3 with the edge tag; the cot draw and the branch arrows; the scene 7 rider and the graph shrinking for the slip; the swap ghosts, dropped minus and ring (scene 8), then the slide into phase B and the two angle readouts moving opposite ways; the attempt rings; the notes cross-fade back to the handoff frame.
