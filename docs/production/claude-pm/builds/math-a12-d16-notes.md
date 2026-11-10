# math-a12-d16 (concavity and inflection; a barrel vase filling from a tap): build notes, 11 Nov 2026

Status: typechecked (scoped tsconfig, clean); 148 `cue()` phrases resolve, 0 missing (repeats checked below); no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d16-sheet.jpg`: the grade checker's 16 sheet stills (466 1398 2330 3262 4194 5126 6058 6990 7921 8853 9785 10717 11649 12581 13513 14445 of 14,910 frames), no stamps. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 3 warnings). Builder's grade: **A−**. Not watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d16/`:
- `common.ts`, `config.ts` (scene-14 `Math.max(1350, d)`), `assets.ts` (vase and tap);
- `parts.tsx`: the VaseFill rig, lesson-local: `VaseRig` (the painted tap placed so its measured spout mouth (1135, 526) sits over the vase axis, a coded aqua stream while pouring, the kit `ContainerFill` with the measured `vaseProfile`, and an amber band at the widest part), `LevelGraph` (h(t) = t³ − 6t² + 15t traced to the point, violet tangent, cap and cup tints), `VaseStrip` (flow 0.75 L/min fixed, level, rising at), `VaseThumb`, `Diamond`, `TurnArc`, `TintRect` (multiply-blend tints so curves stay dark), the cubic and other families, and a load-time number check;
- `s1.tsx` (1, 2), `s2.tsx` (3 to 5; exports `WX`, `TOP`, `MID`), `s3.tsx` (6 to 8; exports `AID_MAIN`, `AID_ZERO`, `FlatIcon`), `s4.tsx` (9 to 12), `s5.tsx` (13, 14; exports **`D16FinalFrame`** and `Stack` for d17);
- `scenes.tsx`. Registry: one import and one array entry (after d15).
Read-only imports: `math-a12-d15/s5` (`D15FinalFrame`, `HandoffPicture`, `HANDOFF_RX`), `math-a12-d15/parts` (spans, cards, `stubLine`, `gmap`), `math-a12-d14/parts` (`AnswerStack`).

## Plate fit (brief 238 finding 238-D16-PLATE-PROFILE, root decision 30)
The vase is drawn at native aspect (never warped). The water is clipped to the plate's measured inner profile (`MATHS_KIT2_ANCHORS.vaseProfile`: axis 699.5, inside base 1580, mouth 415, eleven radii). The level is h(t)/28 of the plate's inner height. The painted radii as fractions of the widest (0.45, 0.50, 0.57, 0.68, 0.86, 1, then 0.82, 0.65, 0.55, 0.49, 0.45) are close to the design's fractions (0.45, 0.49, 0.54, 0.63, 0.79, 1, symmetric), so the water visibly slows through the painted belly and speeds up in the neck, and the widest painted part is at level ½ (h = 14 cm), where the readout reads 3.0 cm/min. The plate is narrower than the profile table in absolute terms (352 px against 511 px widest radius), which changes nothing on screen because only the shape fractions and the level are shown. The tap is used at native aspect, about 310 px wide.

## Joins
- Frame 0 is `D15FinalFrame` exactly (checked on a still). A copy of d15's handoff picture cross-fades in over frames 40 to 60, the heading writes "Concavity: how the gradient changes the bend", the left readouts and curved piece glow on "rising", the right readouts and the line on "all".
- Final frame = `D16FinalFrame`: three stacked panels on one x scale (x −0.3 to 4.3, 1320 px wide): f in ink with max (1, 4), inflection (2, 2) as an ink diamond, min (3, 0), tinted olive (x < 2) and blue (x > 2); f′ violet tinted teal and amber, zeros at 1 and 3 ringed; f″ blue tinted olive and blue, zero at 2 ringed; grey dashed guides at 1, 2, 3; side notes "f: the curve", "f′: the gradient", "f″: the bend"; the chip "Next: sketch a curve from f, f′ and f″"; heading "Next: sketch a whole curve"; the memory line small at the top right. The key notes cross-fade back to it (checked: frames 13,550 and 14,905 match). **d17 builder: import `D16FinalFrame` from `math-a12-d16/s5`.**

## Departures from the design (with reasons)
- Scene 1: the join graph cross-fades to the vase stage on "So the bend comes from" instead of shrinking to a thumbnail first (a shrunk copy put 10 to 20 px text on screen and crowded the tap). The vase is 560 px tall (design about 620) so the tap clears the heading. The fill runs from "vase" to "neck" (about 9 s). The bracket and "?" arrive on "Where does".
- Scene 2: a vase thumbnail (painted vase plus a coded mini curve with its cap and cup tints, no small text) at the top left instead of the full shrunk stage; the cubic graph is 1040 × 520. Notation underlines on each spoken form.
- Scene 3: built on the kit `StudioStackedDerivativePanels` (two panels on one x scale) with the riding tangent; the violet point on f′ and the dashed guide, the turning arcs, the ghost tangents, the cap and cup tints (multiply blend) and the blue f′ stubs are drawn in the lesson. The summary strip arrives on "So f double prime" (the design's last "down" is 19 frames from the end). The definitions are one line each: "concave down: below its tangents ∩", "concave up: above its tangents ∪".
- Scene 4: the long tangent at (2, 2) is drawn on "crosses" (no separate pen trace). The vase returns at the widest part with the "rising at 3.0 cm/min" glow and the amber band; the diamond at (2, 14) arrives on "switches", 18 frames before "bend" (the scene ends 21 frames after "bend").
- Scene 5: the crossed slip "f″(0) = 0, so inflection" arrives on "no inflection" (the design's last "zero" is 27 frames from the end), replacing the candidate rows at the top of the column.
- Scene 6: a "From the tangents" recall card (cap below its tangents, cup above, "at a flat point, which way is nearby?") holds the column until "At x equals one"; the summary strip and green frame arrive on "a local minimum" and "three, zero" (the design's last cue is 22 frames from the end).
- Scene 7: panels 590 × 470 with kit `SignStrip`s under each (f′ gradient mode for x⁴ and −x⁴, f″ concavity mode for x³); the boundary notes carry "local minimum", "local maximum", "concavity changes"; "horizontal point of inflection" writes under the third panel.
- Scene 8: full-width framed card with cup and cap icons (flat violet tangent at the bottom or top) and the full vase plate (480 px) with "the vase: cap, then cup". The scene 7 panels do not return (room).
- Attempts and feedback: d14/d15 layout, question cards 46 px, full ring from "Pause here to answer." via `ringFrom`; feedback rows 44 px with green frames and one crossed slip each. Feedback 1 states the nature on the same row as each y″ value.
- Key notes: decision 58 layout, five bullets at 38 px, framed card with the cup and cap icons.

## Cue check
148 phrases resolve. Repeats checked: scene 2 "f double prime of" #1 (597), "minus twelve" **#2** (1066; #1 is "minus twelve x"); scene 3 "bends down" #1 (310), "concave up." #1 (967); scene 7 "x to the fourth" #1 (231), "minus x to the fourth" #1 (268), "x cubed" #1 (329); scene 10 "At minus three" **#2** (391; #1 is "are at minus three"), "At one," #1 (587); scene 12 "at three." #1 (207).

## Brief 238 findings
- 238-D16-NOTES-FIT: settled by decision 58 (bullets left at 38 px, one or two short lines, card right).
- 238-D16-PLATE-PROFILE: fitted as above (fill clipped to the measured profile; no warp).
- Learning review and maths check: 0 blockers, no other visual should-fix.

## Grade checker report
`out/explainer/Explainer-math-a12-d16/grade/Explainer-math-a12-d16-grade.md`: PASS WITH WARNINGS, 0 failures. Warnings: frame 9 (scene 7 opening, 52% bare: the f′ strips arrive on "fall back"), frame 11 (attempt 1 before "Pause here", 58%: question layout), "Few pictures" (the vase and tap are SVG images; graphs are not counted).

## Grade per frame (sheet)
1 vase stage before the fill, chip A−; 2 cubic with the vase thumbnail and notation A; 3 paired tracer, readouts A; 4 cap and cup, crossed slip, definitions A; 5 inflection setup (column waits for the definition) A−; 6 the vase at its widest part A; 7 concavity strip and candidate rows A; 8 second derivative test with the recall card A; 9 three flat points before the strips A−; 10 strips filled A; 11 attempt 1 A− (question layout); 12 feedback 1 early A−; 13 attempt 2 with ring A; 14 feedback 2 with strip and graph A; 15 stacked panels A; 16 key notes A.

## Kit issues
- `SignStrip`'s row label is drawn left of the plot box with `text-anchor: end`, so a long label ("sign of f″(x)", the concavity default) runs off the frame when the strip sits at x ≈ 30. Passed `rowLabel="f″"`.
- `StudioStackedDerivativePanels` draws the rider dot and guide only on progressive panels, and its panel tints take one cue for all cells; the lesson draws the f′ rider point and per-side tints itself.
- `ContainerFill` requires `interior` even when `profile` is given.
- The checker does not count SVG plates or coded graphs as pictures.

## Check at playback speed
The d15 cross-fade and the readout glows on "rising" and "all"; the cut to the vase on "So the bend comes from"; the fill against the narration (fast base, slow belly, fast neck) with the stream and the "rising at" readout falling to 3.0 and back to 15.0; the tints and glyphs on "bends down, then up"; the tangent ride in scene 3 (its pause at x = 2 from "down" to "On the right") and the turning arcs; the guide and ring on "here" and the diamond on "two, two"; the vase's return at 14 cm; the strip cells on their test values; the x⁴ panel's entry; the flat tangents and "nearby" arrows in scene 6; the strip fills in scene 7; the ring from "Pause here to answer."; the key-notes cross-fade to the stack.

## Root review round (11 Nov)
1. Scene 4: the vase (450 px tall, no tap) fills to its widest part beside the column from the first frame, the widest band glows on "here", and a violet label reads "rising at 3.0 cm/min: slowest"; the column text is narrowed to fit (definition card 450 px, the gradient row on two lines).
2. Scene 7: the three sign strips (f′ for x⁴ and −x⁴, f″ for x³) are on screen from the first frame with "?" cells; signs and labels arrive on their cues.
Grade checker re-run: PASS WITH WARNINGS (0 failures, 2 warnings: attempt 1 sparse, few pictures). Sheet re-made.
