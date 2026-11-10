# math-a12-i10 build notes (Revision 2, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i10-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,221 frames (474 s); the notes scene is 1,350 frames. Header topic label: "INTEGRAL CALCULUS".

## Files
- `src/explainer/lessons/math-a12-i10/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: load-time checks for every value (lift 2, 0, 4; 10; −16/3; 7/3, −3, 23/3; 4/3, −4/3, 4/3, area 4, single 4/3; ln 2, 1 − 2 ln 2, e − 4 + 2 ln 2, e − 5 + 4 ln 2 ≈ 0.491; car 32, 36, 40; A1 −4/3, 20/3, 8; A2 2 and 8); `LiftShaftSim`; `FlipFill`; `Road`; `Named` (the two named rows). Re-exports i09's parts read-only;
  - `s1.tsx` (1 to 4 and the blue-curve `BPlot`), `s2.tsx` (5 to 8), `s3.tsx` (9 to 14 and `I10FinalFrame`, i11's opening).
- `src/explainer/registry.ts`: one import and one array entry, after i09.

## Joins
- Frames 0 to about 303 are `I09FinalFrame` (imported); it cross-fades on "Picture sine t" (the axes relabel to t (s) and v (floors per second); the shaft slides in).
- The final frame (`I10FinalFrame`, also the end of the notes) follows the i11 design's opening: y = ln x for 0 < x ≤ 3.3, dashed lines y = 0 and y = 1, the region against the y-axis for 0 ≤ y ≤ 1 shaded, one horizontal ghost strip with "?", chips "Area = ?" and "Next: strips that lie sideways", plus a region card and two hand tags. i11 is not built.

## Plate fit (root decision 30, 238-I10-PLATE-LANDINGS)
- The shaft is never warped. The car's floor follows a piecewise-linear fit through the measured landing floor lines (2092, 1737, 1399, 1056 for G, 1, 2, 3), so the car stops exactly on each painted landing although the pitches differ (355, 338, 343). The car uses Codex's measured fit (scale 0.19, canvas left 470, canvas top = floor − 345.8). Landing tags G, 1, 2, 3 are coded in grey.

## Departures from the design
- **The kit `StudioAreaFlip` is not used:** it owns its own axes, and every flip here happens inside a graph that also carries other fills and the time marker. The lesson-local `FlipFill` does the same fold (amber outline, dashed ghost) inside any plot.
- **The kit `TripSim` is not used for the car:** it scrolls the road under a fixed car, so the car never visibly reverses along a fixed scale. The lesson-local `Road` keeps a 0 to 40 m scale and moves the reused blue car to s(t) = 12t − t² (out to 36 m, back to 32 m). The odometer and displacement are board rows from the same t. The car keeps facing right while it reverses.
- **Scene 1:** the lift board is 440 px wide beside the shaft; two cards ("the lift: v = sin t ..." and "two questions") fill the right column until the area chip. The named rows sit under the graph.
- **Scene 4:** the small lift inset (420 px, inside the graph's empty upper left) and its board are on screen from the start and replay on "That's the lift's".
- **Scene 5:** "think first" and "method" cards fill the stage until the factor row; the sign tests are teal/amber hand labels above a number line (no "?" marks), and the sketch draws after the third test.
- **Scenes 5 and 6:** the piece integrals are on one row (scene 5) and in two worded rows "first" and "second" (scene 6); "≈" values are grey.
- **Memory card:** four keyed words with coded icons, the two named rows, and the shaft with the car returning to G.
- **Feedback cards** show worded short forms; feedback 1 and 2 keep a "plan" or "the rule" card in the mistake slot until the mistake.

## Cue check
`cuecheck.sh` resolves every phrase, 0 missing. Repeats checked: "minus sixteen thirds" (3) occurrence 2 is "the integral is minus sixteen thirds" (744); "sixteen thirds" (3) occurrence 3 is "sign removed, sixteen thirds" (1104); "positive" (5) occurrence 2 is the f(4) test (1009); "Often there's" needed the apostrophe; "So how do signed" replaces the design's wording.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i10`: **PASS WITH WARNINGS (0 failures, 3 warnings)**: attempt 2's card text touches its own inline integral's limit box (a measurement of the stacked limits, not a visible overlap; checked at full size), and "Few pictures" (coded graphs are not counted). An earlier run failed scene 5's opener at 63% bare (fixed with the two cards). Report copy: scratchpad `build-i08/Explainer-math-a12-i10-grade.md`.

## Brief 238 findings handled
- Learning review and maths check: 0 findings. The plate landing miss (238-I10-PLATE-LANDINGS) is handled by the fit above.

## Kit issues
- `StudioAreaFlip` cannot be layered into an existing plot (it creates its own `StudioPlot`); a layer form like `AreaFillLayer` would let lessons flip a region inside a shared graph.
- `TripSim` (displacement mode) keeps the car fixed and scrolls the road; a fixed-road mode with the car moving along a distance scale would show reversing directly.
- I edited no kit files.

## Check at playback speed
- Scene 1: the car riding up two landings and back while "net change" returns to 0 and "floors travelled" climbs to 4; the lower arch flipping up.
- Scene 3: the flip on "sign removed"; scene 4: the reverse flip at the start and the flip on "But it's not the area".
- Scene 5: the three sign tests, the sketch drawing, the middle piece flipping.
- Scene 7: the car out to 36 m and back to 32 m against the v–t fill and marker.

## Root review round (11 Nov)
1. Scene 5 opener: the number line is bolder with 44 px labels ("x = 0" and "x = 4" marked), and a solid axes panel (900 × 450, dashed x = 0 and x = 4, "sketch comes second", "first: where is y above or below?") fills the lower left from the first frame until the sketch cross-fades in. The "think first" card is gone; the method card stays on the right.
2. Key-notes card: the middle now holds two solid pictures, the lift (380 px tall, "net 0, travelled 4") and a 420 × 330 graph of x² − 4 on [0, 3] with the below piece flipped positive ("every piece +").
Grade checker re-run: PASS WITH WARNINGS (0 failures, the same 3 warnings). Sheet re-made.
