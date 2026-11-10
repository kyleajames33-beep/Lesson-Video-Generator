# math-a12-d15 (differentiability at a join; a skateboard on skate tracks): build notes, 11 Nov 2026

Status: typechecked (scoped tsconfig, clean); 165 `cue()` phrases resolve, 0 missing (repeats checked below); no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d15-sheet.jpg`: the grade checker's 16 sheet stills (498 1494 2490 3503 4500 5478 6474 7470 8467 9463 10456 11455 12451 13447 14443 15439 of 15,937 frames), no stamps. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 3 warnings). Builder's grade: **A−** (see per frame). Not watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d15/`:
- `common.ts`, `config.ts` (scene-15 `Math.max(1350, d)`), `assets.ts` (the skateboard plate only);
- `parts.tsx`: the SkateRide rig, lesson-local: piecewise families on the kit's `piecewiseFamily` (smooth, corner, jump, the scene 4 swing, the worked family, cube root, cusp, A1, A2), a load-time number check (1.5/1.9/1.99, 2, 1, 4/12/102, 4.64/21.5/100, ±2.15, 63.4°/45.0°/76.0°, worked and attempt values), `BoardSprite` (contact midpoint (1199.25, 601) from the brief 238 manifest, never stretched), `boardPose` (deck along the on-screen tangent of the owning piece, so the angle snaps at a corner; lifted only if a wheel would sink into its own piece's bend), the plywood `Band` (a strip under the curve, normal to it, with an optional step face), `TrackView`, `BandLayer`/`BoardLayer` (for use around `StudioOneSidedSecants`), `BoardCloseUp` (the same geometry re-drawn under one magnifying transform), `RideBoard` (track gradient, track angle), `JoltMarks`, `Legend`, `MiniTrack`, `BoxCard`, `ride`/`crossFrame`, `hAt`;
- `s1.tsx` (1, 2), `s2.tsx` (3 to 5), `s3.tsx` (6 to 8), `s4.tsx` (9 to 13; exports `AID_MAIN`, `BoardBadge`), `s5.tsx` (14, 15; exports **`D15FinalFrame`**, `HandoffPicture`, `HANDOFF_STUBS` for d16);
- `scenes.tsx`. Registry: one import and one array entry (after d14).
Read-only imports: `math-a12-d14/s5` (`D14FinalFrame`), `math-a12-d14/parts` (spans, `AnswerBox`, `AnswerStack`, `Chip`, `CurveLabel`, `Line`, `RecallChip`, `Ring`, `gmap`).

## Joins
- Frame 0 is `D14FinalFrame` exactly (checked on a still); a replica with identical panel geometry cross-fades in over frames 40 to 60, the heading becomes "Differentiable at a join", the formulas write in the panels, and the curves stay blue for the first three sentences. On "tracks" (frame 415) the curves turn ink, the plywood bands draw and the panels grow (decision 23).
- Final frame = `D15FinalFrame`: the smooth join in ink (window x −0.5 to 2.2, y −0.5 to 2.5, the scene 2 to 4 stage) with six violet stubs and value labels, a "Gradient along the join" table (x −½, 0, ½, 1, 1.25, 1.5; gradient −1, 0, 1, 2, 2, 2), grey "rising" and "fixed" arrows and tags, two lines "curved side: the gradient keeps changing / straight side: the gradient stays at 2", the chip "how is the gradient changing?", heading "Next: how the gradient changes" and the memory line. No band, no board. The key notes cross-fade back to it (checked: frames 14,586 and 15,930 match). **d16 builder: import `D15FinalFrame` from `math-a12-d15/s5`.**

## Departures from the design (with reasons)
- Scene 1: the panels grow to 574 px boxes (design about 860 px) so that a column between them holds a 570 × 404 board close-up (board about 375 px, k 2.2) with the live "track gradient / track angle" readout. The design's separate tilt inset that replays both passes side by side is folded into this close-up: it follows the active ride live (first track, then the second with the snap, shake and jolt marks). The zoom insets (r 155, ×1 to ×40 via `zoomFactorKeys`) sit in the same column, the smooth join's below and the corner's above, so the leaders do not cross the formulas.
- Boards on the main tracks are 0.9 to 0.95 units (about 170 to 230 px); each board scene carries a close-up with the board at about 375 to 440 px (scenes 1, 3, 4, 5, 8) to meet the anchor-size rule.
- Scene 2: no numbers on screen (design); a "The question" card holds the column from the first frame until "from the right".
- Scenes 3 and 4: rows sit under the close-up; the grey "h = −0.5: 1.5" line is dropped (the readout shows 1.5, 1.9, 1.99 on cue). The green frame reads "both settle on 2: f′(1) = 2".
- Scene 5: the band under x² and a close-up of the board on it show from the first frame; the step, band and board's stop come on "step". The crossed slip "gradients match, so differentiable" arrives on "No derivative" (the design's "jump" cue is 24 frames from the scene end), with the caption "the pieces must meet first"; the chip "a jump: never differentiable" arrives on "jump".
- Scene 6: the three-shape strip under both graphs is dropped (no room beside the cusp panel; scene 7 and key note 4 carry it); a one-line hand tag "corner, cusp, vertical tangent: continuous, not differentiable" replaces it. A "ways to fail so far" strip (corner and step thumbnails) and the recalled definition fill the column until the secants start. The upright board is 230 px with its "track gradient none / 90°" readout.
- Scene 7: three 590 × 500 track panels with small boards (about 150 px, like d14's MiniRoad cars); verdict chips under each; the method strip at 42 px.
- Scene 8: the board's pass is shown in an equal-unit close-up over the graph's empty upper left (the main graph has unequal units, so no board rides it; review item 12). The trial line starts at gradient 1.5 through (2, 7), turns to gradient 4 on "four", slides down on "minus four", and lifts back (amber gap, open circle) on "The gradient alone". A fixed ×8 zoom inset at (2, 4) shows no bend between the answer and the board pass.
- Scene 9: full-width framed card (as d14) with a 440 px board badge on a plank and three mini tracks (step, kink, smooth).
- Scene 14: stubs at x = 1.25 and 1.5 stand in for the design's 1.5 and 2 (y = 3 at x = 2 is outside the fixed window); the readouts sit in a table in the right column, with value labels on the stubs.
- Attempts: d14 attempt layout (question card 44 px, Given card, answer-free axes with the join dashed in amber and the two demands as hand tags), full ring from "Pause here to answer." via the kit `ringFrom`. Feedback: d14 layout, rows 46 px, green frames, one crossed slip each.
- Key notes: decision 58 layout, five bullets at 38 px (bullets 1 and 4 run to two short lines), framed card with the board badge.

## Cue check
165 phrases resolve. Repeats checked: scene 1 "tracks" #1 (415; #2 is "Both tracks"); scene 2 "settle" #1 (737); scene 3 "one point nine" #1 (531, then "one point nine nine" 564); scene 4 "gradients" **#2** (797; #1 is "gradients still"); scene 5 "The rise" #1 (1098); scene 6 "both sides" #1 (494), "vertical." #1 (579), "that isn't vertical" (970); scene 8 "equals four" #1 (662), "At x equals two" **#2** (772), "minus four" #1 (1021); scene 11 "continuous." #1 (337); scene 14 "a curve" (680; "curve." #1 is "The curve bends").

## Brief 238 findings
- 238-D15-NOTES-FIT: settled by decision 58 (bullets left at 38 px, one or two short lines, card right; nothing crosses the card).
- Learning review (0 blockers) and maths check (0 findings): nothing else to resolve visually. Review item 12 (board only on equal units) is kept: the board never rides the unequal-unit graphs of scenes 5 and 8 at an angle claim (scene 5's board has no angle readout; scene 8 uses an equal-unit close-up).

## Grade checker report
`out/explainer/Explainer-math-a12-d15/grade/Explainer-math-a12-d15-grade.md`: PASS WITH WARNINGS, 0 failures. Warnings: frame 13 (attempt 2 before "Pause here", 63% bare: question layout), frame 14 (feedback 2 early, 52%: rows still to come), "Few pictures" (the board is an SVG image and graphs are not counted).

## Grade per frame (sheet)
1 two tracks, close-up and readouts A; 2 secant definition graph with the question card A−; 3 smooth join, readout, close-up A; 4 corner swing (column waits for the readout rows) A−; 5 x² track with the board close-up and the question A; 6 jump secant with its readout A; 7 cube root with recall card and fail strip A; 8 cube root secants, cusp, definition A; 9 three tracks with verdicts A; 10 worked example mid-way A; 11 memory card A; 12 feedback 1 early (one row) A−; 13 attempt 2 A− (question layout); 14 feedback 2 early A−; 15 handoff A; 16 key notes A.

## Kit issues
- `StudioOneSidedSecants` creates its own `FunctionSimulator`, so a band under the curve or a board over it has to be layered round it in the lesson; its readout cannot be faded separately from the graph, and its rows only exist for sides that are present.
- `FunctionSimulator` zoom leaders (two cone lines from the point) cross a neighbouring panel when the inset sits between two panels.
- The checker does not count the SVG board or coded graphs as pictures.

## Check at playback speed
The d14 cross-fade at frames 40 to 60 and the blue-to-ink turn with the panels growing on "tracks"; the two rides (the glide, then the snap with the 6-frame shake and jolt marks at frame 601) and the readout following them; the pen trace on "no gaps"; both zooms climbing to ×40 (the corner's kink is subtle in the inset); the secants' held stops in scenes 2 to 6 against the spoken values; the merge into the violet tangent on "heading to two"; the scene 4 swing; the board's stop at the step (4-frame bump); the scene 8 line turning and sliding, then lifting back; the countdown ring from "Pause here to answer."; the key-notes cross-fade back to the handoff frame.

## Root review round (11 Nov)
1. Scene 2: a 1000 × 430 close-up of the board on the track at the join ("one tangent here?", board about 395 px) fills the column under the question card from the first frame until "If those gradients"; the "h" bracket is thicker and its label is 56 px. Grade checker re-run: PASS WITH WARNINGS (0 failures, same 3 warnings). Sheet re-made.
