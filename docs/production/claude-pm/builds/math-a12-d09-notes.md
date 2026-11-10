# math-a12-d09 (derivative signs, stationary and turning points; hike anchor): build notes, 10 Nov 2026

Status: typechecked (scoped tsconfig with d08, clean); 88 `cue()` phrases resolve, 0 missing; no em dashes in the lesson folder. Sheet `math-a12-d09-sheet.jpg`: 16 stills at (i + 0.5)/16 of 15,530 frames (485 1456 2427 3397 4368 5339 6309 7280 8251 9221 10192 11163 12133 13104 14075 15045), key notes 1,350 frames, rendered in batches of 4 under the stills lock. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 1 warning, "Few pictures": FunctionSimulator graphs are not counted as diagrams). Builder's grade: **A−** (see "Grade per frame"). Not yet watched at playback speed.

## Files
`src/explainer/lessons/math-a12-d09/`: `common.ts`, `assets.ts` (valley plate plus d08's trip plates, because d08's handoff frame opens scene 1), `config.ts` (scene-16 `Math.max(1350, d)`), `parts.tsx` (Valley: the plate at native aspect with a walker dot mapped onto the painted trail centreline from the manifest, and rings on the ledge, creek and ridge; HIKE family; Klass green framed label; EmptyChart question picture; CUBIC and D10_STAGE; NextChip), `s1.tsx` (1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 12), `s4.tsx` (13 to 16; exports `D09Final`, d10's opening frame). Registry: one import and one entry. Read-only imports: math-a12-d04/parts, math-a12-d05/parts (WholeRows), math-a12-d08/parts (HandoffBoard, HandoffTop, QUOT, Ring, Givens, Sup).

## Plates
`ma12-hiking-valley-v1.png` (manifest: native 2448 x 782, alpha box 147,47 to 2300,724; ledge 854,426; creek 1713,673; trail centreline polyline). The walker dot maps curve x to trail x piecewise (ridge −1.5 → 250, ledge 0 → 854, creek 3 → 1713, rim 4.5 → 2259) and follows the painted centreline; the plate is a place picture, not a scale plot (author note iii). Never stretched.

## Joins
- Frame 0 is d08's final frame (HandoffTop + HandoffBoard, imported from d08, so they cannot drift). On "come back to that" it shrinks towards the top right and its −1 mark turns grey (root decision 11), then fades as the valley arrives. **Departure:** it does not stay as a dim 360 px thumbnail until scene 9 (its text would be about 12 px, below the type floor); scene 9 rewrites the derivative full size in its right column instead.
- Final frame (scene 15) = `D09Final` in `s4.tsx`, at d10's stated geometry: window 1300 x 640 at (310, 190), x −2.5 to 3.5, y −4 to 20, ticks x −2 to 3 and y 5, 10, 15; x³ − 3x in blue on −2 ≤ x ≤ 3 (outside parts faded), filled endpoint dots, the band −2 ≤ x ≤ 3 lightly shaded, (−1, 2) ringed with the green label "local maximum (−1, 2)", (1, −2) dim; chips "largest value on −2 ≤ x ≤ 3?" and "Next: global maxima and minima". The memory line (42 px, ink) and a small valley badge sit at the top. **Root / d10 builder: import `D09Final` from `math-a12-d09/s4` (with its default `at` values) for d10's frame 0.**

## Departures from the design (with reasons)
- Scene 1: plate 1220 wide over a full-width trail graph (1790 x 410) so the plate, graph and readout board all fit; the board is inline (height, gradient, trail word). The walker rides to the ledge, on to the creek, up the far side, then back through the ledge ("level for an instant", then "level, then on down"); arrow pairs down-up at the creek and down-down at the ledge.
- Scene 2: the valley badge is top right (the heading is top left); "sign of f′(x)" is a hand tag over the strip. The kit SignStrip shows its "0" boundary labels from the start (it has no per-boundary reveal); cells fill as the walker passes.
- Scene 3: the graph eases narrower so the four definitions fit at 44/36 px in a right-hand card; labels "local minimum (the creek)" and "stationary, not turning (the ledge)" are green framed labels on the graph; the valley sits under the card with its creek and ledge ringed on cue.
- Scene 4: unseen panels are drawn in grey (solid) until their cue, then blue; strips reveal "+ 0 −", "− 0 +", "+ 0 +" on cue; the hike thumbnail shows "hike at 0: − 0 −".
- Scene 5: the paired panel runs full width; the walker stops at x = 3.4 so both points stay inside their windows (f′ leaves the −20 to 20 window just after 3.43). No sign strip under the lower panel (no room); its teal and amber tints carry the sign. The "Year 11: power rule" chip is dropped (no room beside the formula).
- Scenes 6 to 8: a four-step Method card at the top right highlights the current step and ticks finished ones (replaces the design's builder card that grows step by step); scene 6 adds a short recap card ("stationary points: where f′(x) = 0; nature: the sign of f′ on each side") until the working starts; scene 7 adds hand tags "only the sign matters" and "easy values: 0, 1.5 and 3"; the test values sit in the kit strip's test row (28 px) rather than 40 px.
- Scene 9: the derivative is rewritten in the right column (no moving thumbnail); the final green "decreasing: x < −1 and −1 < x < 0" is a label in the graph's empty upper left; the comparison is a line "−2 < −½ but y(−2) < y(−½)".
- Scene 10: own framed card (d05 pattern) with three coded mini charts whose arrows draw into joined sketches (a pen lift with a grey open circle in the third), and three valley icons (230 px, native aspect) ringed at the ridge, the creek and the ledge.
- Attempts: the questions are long, so the card sits on top at 46 px with a 38 to 40 px Given card and the empty sign-chart picture (820 x 290) underneath; full ring from "Pause here" (d02 to d05 pattern otherwise).
- Feedback 1 and 2: the sign chart (kit strip with tests) fills top right; a graph of the function fills lower right (feedback 2 shows one antiderivative, labelled "one such f (any + C)"); feedback 2 writes the three test values as rows.

## Cue check
All 88 phrases resolve (`build-d08/cuecheck.mjs d09`). Occurrences checked: scene 1 "three" #1 (544); scene 3 "turning point" #3 (974, "not a turning point"); scene 5 "axis" #1 (386); scene 6 "equals two" #2 (831, not "f of x equals two x cubed"); scene 7 "positive" #1 and #2; scene 14 "minimum" #1 (409).

## Grade per frame
1 hike plate, walker, board A; 2 graph and strip with the walker A; 3 definitions card and strip A; 4 three panels A− (two panels still grey and "?"); 5 f over f′ A− (wide white space in the two panels at this instant); 6 worked example 1 opening A− (checker 56% earlier, now with the recap card); 7 test values A− (strip just before the first test); 8 hike example A; 9 hike example classified A; 10 excluded value A; 11 memory card A; 12 feedback 1 A; 13 attempt 2 A− (lower area light, d05 pattern); 14 feedback 2 A; 15 handoff final A; 16 key notes A.

## Kit issues
- `SignStrip` always shows boundary labels and "0"s (no reveal per boundary), and with `showTests` its height is 230 px.
- `PairedDerivativePanel` draws the riding points even when they leave the window (two dots above the top panel at x = 4.4); avoided by stopping at 3.4. Its ring `label` texts collide with hand tags, so labels are not used.
- `FunctionSimulator` asymptotes are grey only (fine for d09) and its x label sits 82 px under the plot, where a strip below collides with it; x labels are blanked in the strip scenes.
- FnFamily functions need the params argument (`HIKE.df(x, {})`).
- Same as d08: kit Countdown appears late (lesson-local PreRing), the grade checker does not count graphs as diagrams.

## Check at playback speed
The d08 frame shrinking away and its −1 mark turning grey; the walker on the plate and the graph staying in step (and its fast return to the ledge on "But at zero"); the sign strip filling behind the walker; the scene 3 graph easing narrower; the panels brightening on cue; the f′ trace drawn by the tangent, tints and rings, the pen trace on "unbroken"; method highlights; sign cells and test values arriving one per cue; the excluded gap in scene 9; the mini-chart arrows joining (and the pen lift); the curve outside −2 ≤ x ≤ 3 fading in the handoff.

## Grade checker report
`out/explainer/Explainer-math-a12-d09/grade/Explainer-math-a12-d09-grade.md`: PASS WITH WARNINGS (0 failures; warning: "Few pictures").

## Root round 1 (10 Nov), applied
1. Scene 4: all three panels full size side by side (570 x 440 each), solid blue from the first frame with their sign strips filled; the current panel is tinted and its label and tag arrive on cue. No grey or "?" panels; the small hike thumbnail is gone.
2. Worked examples (scenes 6 to 8): graph 840 x 440 from the first frame (plot about 714 x 320); a new lesson-local `SignChart` runs full width under it (1728 px): solid paper cells, boundaries, signs with arrows and 34 px test values arriving on cue, and the classifications in a nature row under the boundaries. No grey "?" boxes. The same chart replaces the kit strip in scenes 2, 3 and 9 and in both feedback scenes, so no "?" cell appears anywhere.
3. Hike plate: kept only where it carries meaning at a large size: scene 1 (1220 x 384) and the memory card (1000 x 314, with summit, creek and ledge ringed and labelled on cue). The small badges in scenes 2, 3, 8, 15 and the key notes are removed.
4. Attempts 1 and 2: the full attempt layout, with a large answer-free axes picture (1084 x 310: blank axes, x ticks, the function or derivative named, a violet question tag) filling the lower right.
Checker: PASS WITH WARNINGS (0 failures; frames 4 and 15 at 52% bare paper; "Few pictures").
