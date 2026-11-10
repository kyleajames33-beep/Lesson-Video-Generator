# math-a12-d17 (sketching from f, f′ and f″; a new video's total views on a laptop): build notes, 11 Nov 2026

Status: typechecked (scoped tsconfig, clean for the lesson); every cue phrase resolves at load in `cuemap.ts` (one table per scene, so a missing phrase throws before render); no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d17-sheet.jpg`: the grade checker's 16 sheet stills (502 1506 2499 3515 4519 5524 6528 7532 8537 9541 10545 11550 12554 13558 14563 15567 of 16,069 frames), no stamps. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 1 warning). Builder's grade: **A−**. Not watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d17/`:
- `common.ts`, `cuemap.ts` (all cue frames, K1 to K18), `config.ts` (scene-18 `Math.max(1350, d)`; topic "CURVE SKETCHING"), `assets.ts` (laptop, pen, sheep);
- `parts.tsx`: the functions with a load-time number check (cubic, wiggle and its rising interval by bisection, ruler join, x + 1/x, x − 4/x, the two hidden quartics, the views model V, V′, V″ with "94,671", "12,260" and "1,460" checked), `LaptopViews` (kit `ScreenChart` + `ScreenCounter` in `MATHS_KIT2_ANCHORS.laptopScreen`), `ViewsStrip`, the d16 attempt layout (`Attempt`, `QAxes`, copied because d16 does not export them), `GridGraph` (graph-only picture with integer gridlines), `PenPlate` (pen plate, sheep at the brief 238 ground point, tags at the fence and wall anchors);
- `geom.tsx` (plot paths, clip, write-on curve, the cubic's points, the wrong curves);
- `s1.tsx` (1, 2), `s2.tsx` (3 to 6), `s3.tsx` (7, 8), `s4.tsx` (9 to 12; exports `stackMaps`, `CrossIcon`), `s5.tsx` (13 to 18; exports **`D17FinalFrame`**, used by d18 scene 1); `scenes.tsx`.
- Registry: one import and one array entry after d16.

## Joins
- Frame 0 is d16's `D16FinalFrame` exactly; it cross-fades to the laptop stage on "Now let's put them to work" (the heading changes then).
- Final frame (`D17FinalFrame`): the painted pen and wall (1360 px wide), the sheep, tags x (blue), y (teal), x and "wall", chips "40 m of fencing", "three sides: x, y, x", "largest area?", the memory line at the top right, heading "Next: build the function yourself". The key notes cross-fade back to it. d18 frame 0 checked identical on a still.

## Departures from the design (with reasons)
- No stack or laptop thumbnails (scenes 1 to 9): a 360 to 380 px thumbnail of a whole frame or the laptop puts sub-24 px text on screen and was a root fault ("tiny anchor plate ... otherwise left out"). The laptop returns large in scene 10 and as a badge on the memory card.
- Scene 1: the d16 stack cross-fades out (no shrink); a right-hand card lists "launch: a slow start / then: fast / then: levelling off" on their cues beside the screen tags; the question is a chip from "From this graph alone".
- Scenes 3 to 5: graph heights change at scene cuts (620, 560, 800 px) so the sign and concavity strips fit above y = 950. Strip boundary numbers are hidden where the graph's own x ticks sit above them.
- Scene 5 opens with a "So far" recap card (max, min, f′ signs, cap/cup, inflection) until "f of minus x"; the half turn is a violet copy of the right half rotating 180° about the origin.
- Scene 6: checklist card at the right; items appear as spoken with ticks; the polynomial note for items 1 and 6 on "line".
- Scenes 7 and 8: scene 7's graph is taller (660 px) with the checklist chips in the right column; scene 8 returns to 530 px to fit the f″ strip (a cut at the scene boundary). Scene 7 shows the domain on the x-axis (amber line, open circle at 0, "left piece", "right piece") until f′ is written. Scene 8 carries a "From the first half" recap until the crossed slip; point labels sit where no piece passes.
- Scene 9 opens on the labelled cubic full size (formula struck on "no formula", labels removed), then forms the stack on "Line the graphs up"; the f″ phase uses a second rider instance so the f′ trace never retracts.
- Scene 10: the laptop chart is shown complete (no screen counter; the strip below carries day, total and daily views live); the "?" on screen becomes "day 3", and a green chip "busiest day: day 3".
- Scene 11: a readout board (x, gradient of f) runs through the scene; the f″ trace draws by a quick rider on "So f double prime" (the design's "points" is 28 frames from the end).
- Scene 12: custom framed card (main line 92 px, the crossing and touching keys with coded icons, the laptop badge with the daily-views hump, "smooth curves" on cue), mini stack at the left with feature columns glowing in turn.
- Feedback 2: the mistake caption is shortened to "f′ = 0 where f is flat" so it fits the 740 px card.
- Scene 17: the first 5 s recap the cubic ("a sketch = a set of constraints") before the pen arrives on "Next"; a third chip "three sides: x, y, x" is added.
- Key notes: decision 58 layout (bullets 38 px, left 1040 px; card right).

## Cue check
All phrases resolve. Repeats checked: scene 5 "on the left" **#2** (939; #1 is "on the left half"); scene 7 "At one" **#2** (1027; #1 is "zero at one"); scene 16 "At minus one" **#2** (186), "At two" **#2** (347), "at two" **#3** (620), "zero there" **#2** (756); scene 3 "after one" (450); scene 9 "f prime is zero" (343).

## Brief 238 findings
- 238-D17-SCENE-REFERENCES: built to the 18-scene script: scene 9 uses x³ − 3x (window x −2.5 to 2.5; f′ y −4 to 16; f″ y −16 to 16); scene 11 uses the hidden x⁴ − 4x³ (x −0.8 to 3.6; f −30 to 5, f′ −20 to 35, f″ −15 to 75); attempt 2 (scenes 15, 16) uses x⁴/4 − x³ + 4x (x −2.2 to 3.3, y −4 to 8).
- 238-D17-NOTES-FIT: decision 58.

## Grade checker report
`out/explainer/Explainer-math-a12-d17/grade/Explainer-math-a12-d17-grade.md`: PASS WITH WARNINGS, 0 failures; 1 warning "Few pictures" (the checker does not count coded graphs or stacks as diagrams).

## Grade per frame (sheet)
1 laptop with the live chart, readouts A; 2 wrong curves through three points A; 3 sign strip, wiggly curve out A; 4 scene 5 opening with recap card A−; 5 labelled sketch, half turn done A; 6 worked example domain picture and rows A−; 7 asymptote half, recap card A−; 8 scene 9 opening on the big graph A−; 9 three-panel stack A; 10 scene 11 trace and board A−; 11 memory card early A−; 12 attempt 1 with ring A; 13 attempt 2 A; 14 feedback 2 early A−; 15 painted pen A; 16 key notes A.

## Kit issues
- `ScreenChart` enforces 28 px ticks inside the screen, so a laptop under about 800 px wide cannot carry its chart text; the memory-card badge draws its own coded hump.
- `SignStrip` writes the boundary value above the strip, which duplicates the graph's own x tick when the strip sits under a plot; passed `label: ''`.
- `StudioStackedDerivativePanels` progressive traces follow the rider, so a second derivative pass needs a second instance (switch at the cue); an empty panel needs `fn: () => NaN`.
- The checker counts neither SVG plates nor coded graphs as pictures.

## Check at playback speed
The d16 cross-fade into the laptop; the chart drawing day by day against "launch", "fast", "level off"; the wiggly and ruler curves writing on; the red rising piece and cross; the ruler corners and the ink curve redrawing; the half turn landing on "half"; the checklist ticks; the domain picture and pieces; the riding points up and down the asymptote; the scene 9 hand-over from the big graph to the stack, both rider passes and the column glow; the views rider stopping at day 3; the quartic touch ring; the column glows on the memory card; the rings from "Pause here to answer."; the cross-fade to the pen and the notes return.

## Root review round (11 Nov)
1. Worked example (scenes 7, 8): the graph is larger (990 × 710 px) with its axes and a solid amber band at x = 0 from the first frame. In scene 7, the two pieces are tinted with "left piece" and "right piece" tags, and the domain line with its open circle at 0 stays until the points arrive; an "odd: a half turn about the origin" tag appears on "odd". The seven-step checklist is a solid card at 38 px (one column) while the domain, symmetry and intercept rows are worked. It switches to two columns at 34 px when the derivative rows start. The rows are 52 px current and 36 px earlier, in two stages: the first four rows clear on "f double prime". Scene 8 keeps the same card and graph, with cap and cup tints and a red open circle "x = 0: no point" in place of the strip. Its rows start at y 420, the crossed slip sits at y 680, and the slip clears when the x → ±∞ rows arrive.
2. Scene 11: a solid "cross vs touch" picture card sits under the readout board from the first frame. It has two paired f-over-f′ pictures, 296 px each, with captions at 40 px, and each glows on its cue. Three short rows sit below it, and the hand tag "f″ crosses zero at 0 and 2" is on the f″ panel.
3. Memory aid (scene 12): two solid 360 px paired pictures fill the middle of the card from the first frame, one for a crossing zero under a valley and one for a touching zero under a flat point that keeps rising. Their captions (44 px) write on their cues. The laptop badge and "smooth curves" move down.
4. Feedback 2: the rows are now 44 px, the "crosses" and "touches" graph labels are 44 px hand tags, and the mistake card is at 36 px with its 46 px caption.
d18 check: no d18 cue uses "squashed flat against it". The scene 3 cue `nearTwenty` keys to "near twenty", which the corrected sentence keeps; Codex's re-voice will change the measured frames, and the cue map re-resolves them at load.
Grade checker re-run: PASS WITH WARNINGS (0 failures, 1 warning, "Few pictures"; frame 6 measures 50% bare by the checker's cell count, without a warning). Sheet re-made.
