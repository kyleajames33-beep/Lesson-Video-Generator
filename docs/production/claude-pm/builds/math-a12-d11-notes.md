# math-a12-d11 build notes (Revision 4, lighthouse beam)

Sheet: `work/quality-audit/fixed/math-a12-d11-sheet.jpg` (16 stills at (i − 0.5)/16 of 15,648 frames; key notes 1,350 frames). Stills rendered in batches of 4 under `out/explainer/.stills-lock`.
Builder's grade: A, with three frames for root to look at: 5 (scene 4 before the first proof row: Plan card, dashed "goal" card, the window T panel and the quotient-rule card), 11 (memory card: its last two lines are still to come, so its lower band is blank) and 13 (attempt 2, the accepted attempt layout; the checker calls it sparse).
Automatic check: `npm run grade:explainer -- Explainer-math-a12-d11`: PASS WITH WARNINGS (0 failures). Warnings: attempt 2 is 67% paper (attempt layout), and "few pictures" (7 of 16 frames hold a plate or diagram by the checker's measure; every teaching frame has window T, window W or the map). Report copied to `work/quality-audit/fixed/math-a12-d11-grade.md`. The first run failed on one em dash in a readout placeholder; fixed ("none").

## Files
- `src/explainer/lessons/math-a12-d11/`: `assets.ts`, `common.ts`, `config.ts` (key notes `Math.max(1350, …)`), `scenes.tsx`, `parts.tsx` (`BeamMap`, `WindowT`, plates, `beamRows`), `s1.tsx` (scenes 1 to 3), `s2.tsx` (4 to 7), `s3.tsx` (8 to 14, `D11FinalFrame` for d12).
- `src/explainer/registry.ts`: one import and one entry.

## Anchor rig (BeamMap)
- Top-view map: the beach strip turned 90° (sand to the right; waterline row 370 from the manifest's rows 369 to 371) along the panel's right edge, the islet with its lantern cap (canvas centre 750, 750) exactly 1 km from the waterline, a coded gold beam from the lantern and a lit spot at tan x km along the beach. Plates scale uniformly only. Off-panel spots show a violet edge arrow; at π/2 the beam runs parallel and no spot is drawn; the readout says "never lands". Scene 5 adds the lamp's back beam (it lands for angles past π/2).
- One frame-keyed angle drives the beam, the point and tangent on window T and the readout (beam angle, spot position, spot speed with a bar).
- The side-view lighthouse plate stands where window T will be from "Here's where tan turns up" until the graph draws.

## Joins
- Frame 0 is d10's `D10FinalFrame` (imported from `math-a12-d10/s3.tsx`): plan view, four chips, memory line. From "We'll" it shrinks towards the bottom right (tag "later: optimisation") and fades by "not tan x".
- Final frame, exported as `D11FinalFrame`: heading "Next: y = sec x", the memory line small at the top, window T (1150 × 740 at 96, 210) with y = sec x in ink, the asymptotes, the ring at (0, 1), "gradient ?", the three definition chips and "Next: derivatives of sec x, cosec x and cot x"; no badge (the beam badge fades before "exist"). The key notes cross-fade back to it over their last 40 frames.

## Departures (with reasons)
- Map scale 180 px per km in scenes 1 and 2 (panel 704 × 470), not 240 px in a 760 × 600 panel: the readout board must fit under the map in the right column; the spot stays on the panel to 2 km, as designed. Scenes 3 and 5 use a 420 to 444 px live map at the top right.
- Scene 1: window T is drawn 1000 × 860 (the full left half); scene 2 eases it to 1000 × 640 so the measured-slopes table fits under it. The measured table is a horizontal three-row table under the graph (height, slope, 1 + height²) rather than a right-column table; the third row glows on "squared". The design's chip "slope = 1 + (height)²?" is dropped (it covered the curve; the glowing row says it).
- Scene 3: the two turns are readout rows (top's turn teal at 1.000, bottom's turn blue = tan²x, slope = sum); the shrinking-cos side card is a blue hand tag; "height" in the table is ringed on "squared".
- Scene 4: the graph is a 704 × 420 panel at the top right (not a 420 px thumbnail; root asked for no small thumbnails), with a quotient-rule reference card under it. A Plan card and a dashed "goal" card fill the left until the first row.
- Scene 5: rising arrows are short violet segments beside each branch; the crossed "increasing on its whole domain" chip uses a red strike.
- Scenes 6 and 7: window W is x −1.2 to 2.2 (the design's −0.8 cut off the starting point at x = −π/3). The squash runs on the second "six" (36 frames), then the slide (36 frames); the readout reaches 8.000 at the end of the squash. Asymptotes are drawn from the same transform state, so they move with the curve. Plan cards fill the lower left until the working needs it. Scene 7's silent crossed slip starts on "The tangent" (1385; the scene ends at 1499).
- Scene 8: the memory card holds the measured line "at π/3: height √3, slope 1 + 3 = 4" (instead of a second table); a live window T panel with its readout and a map badge sit at the right.
- Scene 10: the branch graph (window x 1.3 to 4.9) is on screen from the start; the point arrives on "Check" and the tangent on "rising". The crossed slip starts on "Minus two" (685), not "negative" (836), so it completes.
- Attempt pictures: coded radian axis (π/2, 5π/6, π, 3π/2 with the violet "gradient here?" mark for attempt 1; an empty axis with "where does dy/dx exist?" for attempt 2), 720 × 380.

## Cue check
All cues come from the measured lesson.json through `cue()`, checked by script against the captions. Repeats set to the intended word: scene 2 "slope is four" (463); scene 3 "plus one two" (1128), "plus three four" (1222), "squared" #3 (1001); scene 6 "Two x minus pi over three is" (372), "six." #2 (702), "twelve." #2 (1183); scene 7 "times two" (476), "over two." #2 (990), "three agrees" (1455); scene 12 "squared three x" (195), "over three for" (568), "six." #2 (826).

## Kit issues
- `FunctionSimulator`'s `asymptotes` are fixed displayed X values, so they do not move with an `xScale`/`xShift` transform; scene 6 draws them from the state in an overlay. A `carried` option would help d12 to d14.
- `FunctionSimulator`'s `curves` sampler does not break at asymptotes; the ghost tan x is passed as two curves with split domains.
- Same `QuestionCard` / `GivensStrip` overlap as d10 (strip at x ≥ 1,160).

## Check at playback speed
- Scene 1: the shrink of d10's frame, the lighthouse giving way to window T, the beam sweep 0 to 0.8 and back, the beam swinging to parallel (spot runs off, "never lands"), then the fast swing back to −1.2 (16 frames) and the tangent ride with the pause at 0.
- Scene 2: the three held stops, the race to 1.3 rad and the return to π/3.
- Scene 3: the slide to 0 and back while the teal row stays at 1.000; the ride to 1.35 with the beam racing off in the small map.
- Scene 6: the squash and slide carrying the curve, point, tangent and walls together.

## Root review round (10 Nov)
1. Scene 4 opener: from the first frame the working area holds the quotient-rule card (52 px rule, 44 px f and g lines), "tan x = sin x / cos x" at 56 px and the dashed goal card; the window T panel is 704 × 450 at the top right with the Plan card under it. All of these leave on "Tan x is", when the first row writes and the quotient-rule card reappears at the right as a reference (the sec x chip and the final line moved down to clear it).
2. Attempt 2: the d05 `AttemptWide` layout with an answer-free 900 × 380 picture: three branches of y = tan 3x with dashed, unlabelled asymptotes, no x values, and the violet hand tag "where does dy/dx exist?". The checker still warns 63% bare paper on this frame (the same layout as d05).
3. Memory card (scene 8): every line is solid from the first frame.
Grade checker re-run: PASS WITH WARNINGS (0 failures; the attempt-2 sparse warning and the lesson-wide "few pictures" warning). Typecheck clean. Sheet re-made. d10 untouched.
