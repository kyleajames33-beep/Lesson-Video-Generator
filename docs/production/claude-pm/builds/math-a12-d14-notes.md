# math-a12-d14 (tangents and normals; headlights on a curving road): build notes, 10 Nov 2026

Status: typechecked (scoped tsconfig, clean); 130 `cue()` phrases resolve, 0 missing; no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d14-sheet.jpg`: the grade checker's 16 sheet stills (466 1398 2330 3262 4194 5126 6058 6990 7921 8853 9785 10717 11649 12581 13513 14445 of 14,911 frames), no stamps. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 2 warnings). Builder's grade: **A−**. Not watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d14/`:
- `common.ts`, `config.ts` (scene-14 `Math.max(1350, d)`), `assets.ts` (the car plate only);
- `parts.tsx`: the HeadlightDrive rig, lesson-local (root decision 21): `RoadView` (FunctionSimulator plus a road band drawn as two `curves` entries, the painted car on the centre line with its heading from the on-screen tangent, a gold beam glow, the violet tangent, the teal normal, the dashed teal line across the road, a right-angle mark, night tint), `CloseUp` (the same picture magnified 2 to 2.4 times about the car; the car is about 300 to 330 px long), `DriveStrip` (x, road gradient f′(x), across −1/f′(x) or "none: upright"), `Legend`, `Results`, `AnswerStack`, `PlanCard`, `MiniRoad` (memory-card views), role spans `V`/`Tl`/`G`; families COS2, XEX, LNCOS, E2X, SPC; a load-time check of every exact value (meets again at x = 1.316613, flat at 1, 1/cos 1, 2e, √2). **Car plate measured (no sidecar): body centre (800, 399), headlamps (1342, 214) and (1341, 584), front bumper x 1455, in file px of the 1600 × 800 plate.** Heading = atan2(−m·sy, sx) in screen degrees (SVG y down), so the car at π/6 is rotated +60° and faces down-right (the 235-D14-1 sign issue does not arise).
- `s1.tsx` (1, 2), `s2.tsx` (3 to 5), `s3.tsx` (6 to 8; exports `AID_MAIN`, `CarBadge`, `MemoryViews`), `s4.tsx` (9 to 12), `s5.tsx` (13, 14; exports **`D14FinalFrame`** for d15);
- `scenes.tsx`. Registry: one import and one array entry (after d13).
Read-only imports: `math-a12-d13/s4` (`D13FinalFrame`, `D14_STAGE`, `MemoryLine`, `WIN_C`), `math-a12-d13/parts` (shared spans and cards), `math-a12-d08/parts` (`Givens`).

## Joins
- Frame 0 is `D13FinalFrame` exactly; my replica cross-fades in over frames 40 to 60 with identical geometry (verified: frames 0 and 70 match), then the camera reframes window C to the square equal-unit window over the first sentence; d13's heading, memory line and "Next" chip fade; the two rows move to the right column.
- Final frame = `D14FinalFrame`: heading "Next: a tangent at a join?", the memory line, the chip "a tangent at the join?", and two card panels (each x −1 to 2.2, y −1 to 2.2, 560 px box, equal units): left x² then 2x − 1, right x² then x, blue curves, ink rings at (1, 1), blue labels below the x-axis. No violet line, road or car. The key notes cross-fade back to it (verified identical). **d15 builder: import `D14FinalFrame` from `math-a12-d14/s5`.**

## Departures from the design (with reasons)
- Sizes: car 0.5 units long (about 140 px on the 283 px/unit plot) and road 0.24 units wide (design 110 px and 0.16) so the car reads; a `CloseUp` panel (about 330 px car) carries the plate in scenes 1, 2, 6 and 7 (anchor-size rule). Scene 5 instead pushes the camera into the car (window 2.4 → 1.1 units) on "On the road".
- Scene 1: the parallel copies carry no individual "gradient −√3" tags (no clear room beside each line); one hand tag "each dashed line: gradient −√3" names them, then "right gradient, wrong place". Grey crosses sit on each copy. The gradient board sits in the plot's upper right with a leader to the ring.
- Scene 2: the close-up shrinks below the ingredient card and leaves when the definition arrives; the definition is two lines at 46 px.
- Scenes 3 and 5: graph box 640 px (design 560); a "Plan" card fills the lower left from the first frame (point from f, gradient from f′, substitute) and ticks each step; it leaves before the tangent row (3) and on "On the road" (5). Scene 3's silent slip starts on "If the question asks" (the last "half" is 17 frames from the scene end); the grey expanded row writes on "it to y".
- Scene 4: the car dims to 40% and the road dims, so the triangle carries the scene; the window pushes in on "Draw a small" (1.8 units, 378 px/unit) so the run ½ leg is 189 px. The triangle turn is drawn in the lesson (the kit's `QuarterTurnNormal` turns only the line). A teal "normal: same point, gradient ?" panel holds the open question until "So the new gradient". "needs m ≠ 0" writes on "needs m" (spoken condition) rather than "exist".
- Scene 6: plot 840 × 336 at the lower right, close-up and vertical readout strip above it; the across readout appears on "up". The never-meets arrows start on "never does" (the last "it" is 12 frames from the end); the curve label moves away from the beam.
- Scene 7: the quotient chip shows from the first frame; a close-up of the car waiting on the new road fills the lower left until "The point is easy"; the two-step strip sits under the givens (not along the bottom, where it would hit the axis labels). Tangent and normal are each a green AnswerBox (no third combined frame, for space).
- Scene 8: full-width framed card (as d13), three `MiniRoad` views 490 × 350, car badge 250 px.
- Attempts: d13 attempt layout, question card 50 px (the 120-character questions wrap to three lines), answer-free 820 × 380 equal-unit axes with only the x-value marked and the hand tags "tangent?" / "normal?". No working box.
- Feedback 1: graph 760 × 620 (not equal units, so no normal is drawn there; the normal is in the answer frame). "so y = 2ex" sits grey inside the tangent answer box.
- Scene 13: graph box 700 px; a "Tangent at x = a" rule card and the task line show from the first frame; zoom inset on "invisible"; labels below the x-axis.
- Key notes: decision 58 layout, five one-line bullets at 38 px, card with the car badge.

## Cue check
130 phrases resolve. Repeats checked and fixed: scene 1 "root three" #1 + 9 (405, not the second at 846); "called the normal" + 17 (1478); scene 3 "That's minus two times" **#2** (832; #1 is "that's minus two times sin"), "equals minus root three" #1 (1093, the substitution), "x minus pi over six" + 34 (1194); scene 5 "root three over three" #1 + 20 (374); scene 6 "At x equals one" **#2** (619; #1 is in the task), "as x equals one" + 27 (1232); scene 7 "over cos one" **#2** + 20 (752), "times x minus one" + 39 (1051); scene 10 "x minus a half" #1 + 17 (548) and **#2** + 21 (839).

## Grade per frame (sheet)
1 car driving in, close-up, live readouts A; 2 parallel copies crossed, beam back on A; 3 two ingredients, height arrow, close-up A; 4 worked tangent with plan card A; 5 quarter-turn scene opening (column lower half waits for the triangle) A−; 6 turned triangle, −1/m with tags A; 7 normal board with plan A; 8 flat tangent at the bend, close-up (lower left waits for the answer) A−; 9 new road, close-up, givens A; 10 tangent and normal answered A; 11 attempt 1 A (question layout); 12 feedback 1 A; 13 attempt 2 A; 14 handoff opening, rule card and graph A−; 15 final join panels (checker: 52% bare, fixed d15 frame) A−; 16 key notes A.

## Grade checker report
`out/explainer/Explainer-math-a12-d14/grade/Explainer-math-a12-d14-grade.md`: PASS WITH WARNINGS, 0 failures. Warnings: frame 15 sparse (52% bare: the fixed handoff panels); whole lesson "Few pictures" (4 of 14; graphs are not counted).

## Kit issues
- `QuarterTurnNormal` turns the tangent line only, not the slope triangle; the triangle turn and label swap are lesson code.
- `FunctionSimulator` `curves` have no opacity or draw-along control; the road's draw-on is done by growing the domain, and dimming by mixing colours.
- `FunctionSimulator` asymptotes are grey only (amber asymptote drawn in the lesson); the `overlay` is not clipped to the plot (the rotating line uses the rig's clipped layer).
- `MarkSpan` underline on a multi-word span looked broken; a CSS underline is used.
- The checker does not count graphs or the rotated SVG car on the main plot as pictures.

## Check at playback speed
The d13 frame and the reframe on the first sentence; the road drawing and the car's 2 s drive with the readout and the close-up turning with it; the night tint and beam on "headlights"; the dashed line's three stops and the slide onto the point on "curve"; the across line and normal on "straight across"/"normal"; the height arrow and the beam running to the second meeting on "along"; the scene 3 to 5 graph moves (shrink right, grow back, shrink right); the scene 4 push-in, the 45-frame turn on "point" and the label swap on "way"; the scene 5 camera push into the car; the scene 6 drive to the top of the bend, the flat beam on "zero", the run leg standing up on "up", and the never-meets arrows (only about 2 s before the scene ends); the scene 7 drive to (1, 0); the scene 13 swap to y = x, the corner stubs and the split into d15's panels; the notes cross-fade.
