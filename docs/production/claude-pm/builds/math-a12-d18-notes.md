# math-a12-d18 (optimisation with a constraint; a sheep pen against a stone wall): build notes, 11 Nov 2026

Status: typechecked (scoped tsconfig, clean for the lesson); every cue phrase resolves at load in `cuemap.ts`; no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d18-sheet.jpg`: the grade checker's 16 sheet stills, no stamps. `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 2 warnings). Builder's grade: **A−**. Not watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d18/`:
- `common.ts`, `cuemap.ts` (K1 to K13), `config.ts` (scene-13 `Math.max(1350, d)`; topic "OPTIMISATION"), `assets.ts` (pen, sheep, wall strip, card texture, yellow car);
- `parts.tsx`: the models with a load-time number check (150, 150, 1600/9, 200, 11.82 at 0.3 and 19.7; 1024, 264.5, 11.5; L(5) = 20; 144 and V(20/3) = −1600/27), role spans (x blue, y teal, fixed conditions amber), `PlanPen` (kit `StudioFencePen` on the painted wall strip), `PenStrip` (x, y, fence, area from `fencePenState`), `FlatCard` (textured card with dashed corners), `GardenPicture` (attempt 1), `CarTag` and `CarAxes` (d19's opening);
- `s1.tsx` (1 to 4), `s2.tsx` (5 to 7; exports `AID18`), `s3.tsx` (8 to 13; exports **`D18FinalFrame`** for d19); `scenes.tsx`.
- Read-only imports: `math-a12-d17/s5` (`D17FinalFrame`), `math-a12-d17/parts` (spans, cards, `Attempt`, `PenPlate`, `PEN`, `SHEEP`).
- Registry: one import and one array entry after d17.

## Joins
- Frame 0 is d17's `D17FinalFrame` exactly (checked on a still). On "above" it pushes in (uniform scale, never stretched) and cross-fades to the live plan view; the establishing plate stays at 810 px in the right column with the tally until "How do we find".
- Final frame (`D18FinalFrame`), also the notes' silent return: the yellow car (700 px) with a coded "$30,000" tag hung from its mirror; axes t (years) 0 to 14 and V (dollars) 0 to 32,000; the point (0, 30,000) "new: $30,000" with a violet stub of slope −4,500 and the grey readout "losing 15% of $30,000 = $4,500 per year"; chips "rate = 15% of the current value" and "worth after 8 years?"; heading "Next: when the rate depends on the amount"; memory line top right.

## Departures from the design (with reasons)
- Scene 1 "tilt": a uniform push-in and cross-fade, not a perspective squash (a non-uniform transform would stretch the plate). The plan view uses 25 px per metre (scenes 2: 30, 3: 15, 4: 15) instead of 10 so the pen reads at phone size; within a scene the scale is fixed and the pen is to scale.
- Side labels use the kit's one-decimal values ("13.3 m" for the square); the tally card gives "1600/9 ≈ 177.8 m²" exactly.
- Scene 2: rows in `WorkingRows`; "the constraint" and "can't differentiate yet: y changes too" as hand tags; the nudge 10 → 12 → 10 on "y changes".
- Scene 3: the area curve is drawn in full from the start (the point rides it) rather than drawing behind the point, so the graph carries the scene from frame 0.
- Scene 4: a "From the model" card holds the column until the candidate table; the pen rides 10 → 0.3 → 10 → 19.7 → 10 with the graph point; the square shows as a dashed outline on "So the best pen".
- Scene 5: the flat net (textured, dashed corners) appears beside the folded box after the fold; a live volume line follows the extremes (0.5 and 11.5).
- Scene 6: a "From the model" card holds the lower column until the table.
- Scene 7: custom framed card: the five verbs write in the main line on their cues; one row per verb with a coded icon (kit pen on the wall strip, the constraint, the domain line with open ends, the hump with open ends, the green answer).
- Scenes 9 and 11: a small fixed-area pen and a graph of L (scene 9); the 16 by 10 card folds at x = 2 on "cubic centimetres" (scene 11).
- Scene 12: the first 5 s show the pen and the box ("the constraint builds the function", "the real object sets the domain") before the car drives in on "Next".
- Key notes: decision 58 layout; the card lists the five verbs with short glosses.

## 238-D18-COLLAPSE-DIRECTION (for root)
The build shows the geometry the maths check confirms: at x = 0.3 the pen is a 39.4 m strip along the wall (tag "a thin strip along the wall"); at x = 19.7 the side along the wall is 0.6 m and the two x sides close up into a long narrow strip out from the wall (tag "y → 0: the two x sides close up"). The recorded narration still says "near twenty it's squashed flat against it" (measured scene 3, frames 732 to 789), so voice and picture disagree for about 2 s. No narration was changed; a re-voice of that sentence is root's call.

## Cue check
All phrases resolve. Repeats checked: scene 2 "y equals forty" **#2** (807; #1 is "plus y equals forty"); scene 4 "global maximum" **#2** (961; #1 is "found a global maximum"); scene 11 "minus two" **#3** (408; #1 and #2 are in "sixteen minus two x", "ten minus two x"); scene 1 "two hundred" #1 (886).

## Brief 238 findings
- 238-D18-COLLAPSE-DIRECTION: above.
- 238-D18-NOTES-FIT: decision 58.

## Grade checker report
`out/explainer/Explainer-math-a12-d18/grade/Explainer-math-a12-d18-grade.md`: PASS WITH WARNINGS, 0 failures. Warnings: frame 8 (scene 6 early, 52% bare: the rows arrive on cue), "Few pictures" (coded pen, box and graphs are not counted).

## Grade per frame (sheet)
1 plan view at x = 5, plate and first tally row A−; 2 pen at 10, givens A−; 3 constraint rows, one variable A; 4 collapse at 19.7 with domain A; 5 calculus with model card A; 6 table and answer A; 7 box folded with the net A−; 8 box solve early A−; 9 box table A; 10 memory card A; 11 attempt 1 A; 12 feedback 1 A; 13 attempt 2 A; 14 feedback 2 A−; 15 notes early A; 16 notes A.

## Kit issues
- `StudioFencePen` puts the x label left of the pen with `text-anchor: end`; near a frame edge it runs off (fixed by placing the pen further right).
- `StudioFencePen` side labels are one-decimal only (no exact "40/3 m"); its area label sits to the right of a narrow pen and can meet a neighbouring graph.
- `StudioBoxNetFold` places its x label on the right flap edge; at small cuts it sits on the box face. Its footprint is wide (oblique depth), so a 24 cm card at 30 px/cm needs about 1000 px.
- The checker counts neither SVG plates under 250 px nor coded diagrams as pictures.

## Check at playback speed
The push-in from d17's frame to the plan view on "above"; the slider stops on "metres", "again", "eight", "hundred" and the tally rows; the side pulses on "x, y and x"; the nudge on "y changes"; the collapses on "Near zero" and "near twenty" (and the narration mismatch above); the open circles pulsing on "reaches"; the ride over the top in scene 4 against "rises ... falls"; the box cut and fold on "up" and both extremes; the slider, box and graph point together in scene 6 and the strike on "reject it"; the verbs writing in scene 7; the rings from "Pause here to answer."; the fold at x = 2 in feedback 2; the car driving in on "Next"; the notes' return to the car frame.
