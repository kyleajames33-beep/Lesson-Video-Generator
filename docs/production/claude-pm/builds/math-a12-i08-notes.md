# math-a12-i08 build notes (Revision 4, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i08-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,987 frames (533 s); the notes scene is 1,350 frames. Header topic label: "INTEGRAL CALCULUS".

## Files
- `src/explainer/lessons/math-a12-i08/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: the models with load-time checks (A by shapes, car counts, chord gradients 1.75, 1.95, 1.995, the 10 am start, the 400-strip midpoint sum for t², the payoff values, both attempts, the handoff value 3); `CarParkRig` (the painted car park, a coded counter on the measured sign face, the kit `NetFlowArrow` at the entry lane); `PairView` (A blue above, f teal below with the kit signed `AreaFillLayer` from the start to the amber marker); `Rows`; `Lims` and `Int` (bracket and integral limits stacked in HTML, no Unicode letter sub/superscripts); `Stub`, `Glow`. Re-exports i06's parts read-only;
  - `s1.tsx` (1 to 5 and `I07FinalFrameStandIn`), `s2.tsx` (6 to 9), `s3.tsx` (10 to 16 and `I08FinalFrame`, i09's opening).
- `src/explainer/registry.ts`: one import and one array entry, after i06.

## Joins
- Frames 0 to 183 are `I07FinalFrameStandIn` (exported from `s1.tsx`), built from the i07 design's scene 15: y = 3 − t in blue on 0 ≤ t ≤ 6, teal fill from 0 to the marker x = 2, "A(x) = ∫₀ˣ (3 − t) dt = ?" and the chip "Next: let the end move". It cross-fades on "Let's give it a meaning" (the curve turns teal; the plate slides in from the right). When i07 is built, replace the stand-in with i07's export (or make i07's final frame match it).
- The final frame (`I08FinalFrame`, also the end of the notes): heading "Next: evaluating without losing signs", the row "∫₋₂¹ x² dx = [x³/3]₋₂¹" and "= 1/3 − (−2)³/3 = ?" with "(−2)³" ringed, the chip and "?". **Departure:** a graph of y = x² shaded from −2 to 1 sits at the left (the one-row board alone failed the thin-frame rule). i09's own design draws this graph on "Before we work it out", so i09 can open on it directly.

## Departures from the design
- **The kit `StudioAccumulationTracer` and `StudioLowerLimitDial` are not used.** Both draw A and f in ink, and the tracer's readout puts x in blue and A in teal, against the design's fixed roles (A blue, f teal, x amber). The lesson-local `PairView` gives the same behaviour in the design's colours. `StudioLimitSubstitution` is used in feedback 2.
- **No clock slider.** The kit `ParameterSlider` badge overlapped its own symbol and its tick labels ran off the frame at that width; the clock is a "time" row on the readout board instead (scenes 1, 3, 5), and the 10 am start is a "start counting at" row (scene 7).
- **Scene 1:** the readouts are one board (time, net rate, extra cars). The 3 s think hold shows the kit countdown at the graph's top right.
- **Scene 2:** before "Up to one", the A panel shows a blue bar at x = 2 "11 am: A(2) = 4, so 400 cars" (from scene 1's counter), so the opener is not an empty panel. A shapes card ("trapezium: average height × width; triangle: ½ × base × height") sits under the plate.
- **Scene 4:** a zoomed paired view (t from −0.15 to 2.6); the readout is a small table at x = 1 (h 0.5, 0.1, 0.01 with chord gradients 1.75, 1.95, 1.995, then "→ 0: 2 = f(1)"). The magnifier is anisotropic (h = 0.01 stretched across, heights unscaled), so the strip's top is visibly almost flat.
- **Scene 5:** "rate the count grows" and "net rate cars come in" rows (both 1.5 at 10:30 am); the check row uses the kit `Tick`.
- **Scene 6:** the graphing application is a plain coded card with a title bar "graphing app: move x" (no brand). The first sweep runs from "Shade under" to "a graphing application"; the tracer sweep from "Watch".
- **Scene 8:** a small paired thumbnail on 3 − t with a = 0.5, b = 2.5 (the shading runs a to b, returns to "A(a) = 0" with no shading, then sweeps again on "So F of b"). A "the goal" card fills the lower right until the theorem name.
- **Scene 9:** three coded thumbnails (no plates; the gauge and bath plates would be under 380 px). Each shows its strips and "strips settled" note, then the bracket row and the values row with a green tick.
- **Scene 10:** two columns in the framed card, each with its picture (a small paired A/f view with a tangent; the teal area from a to b with "= F(b) − F(a)"), and a violet "why" arrow on "works".
- **Feedback cards** show a worded short form of the question (integral limits at 30 px would fall under 26 px). Feedback 1 and 2 keep a reminder card in the mistake slot until the mistake arrives.
- Memory aid icons: the car-counter icon is not used (a plate under 380 px); the paired thumbnail carries "the area grows at the height".

## Cue check
`cuecheck.sh` (scratchpad build-i08) bundles `cuemap.ts` and resolves every phrase: 0 missing. Occurrences checked by hand against the measured words: "half" (scene 2) 1 = A(1), 2 = A(3); "is about f of x" (4) occurrence 2 is the chord sentence (754); "of two is four" (2) starts at "of", so the A(2) row is keyed 26 frames later on "four"; "by two and a half" (7) is the slide, not the trapezium's "which is two and a half"; "thirty-two" (9) occurrence 2 is "is thirty-two"; "The rain gauge's" needed the apostrophe.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i08`: **PASS WITH WARNINGS (0 failures, 2 warnings)**: frame 12 (attempt 1) 52% bare (question scene); frame 14 (feedback 2, local frame 76) 54% bare. Earlier runs failed on slider labels off the frame and two 63% frames (scene 8 opener, feedback 2 opener); fixed. Report copy: scratchpad `build-i08/Explainer-math-a12-i08-grade.md` and `out/explainer/Explainer-math-a12-i08/grade/`.

## Brief 238 findings handled
- Learning review and maths check: 0 blockers, 0 should fix, 0 optional. Every value in the maths check (A = 5/2, 4, 9/2, 4, 0; 450 cars at noon; chords 1.75, 1.95, 1.995; 10:30 am rate 1.5; the 250-car shift, 400 → 150, slope 1; 400 midpoint strips; 8/3, 1, 32; A1 0 and 3, slip 2; A2 26, slip 27; handoff 3 not shown) is asserted at load.
- Root decision 34: scene 9 names the rain gauge and the bath (as voiced).

## Kit issues
- `StudioAccumulationTracer`: curves are ink, and the readout roles (x blue 'a', A teal 'b') clash with the i08 design's roles; a `colors` option (A, f, x) would let lessons use it.
- `StudioLowerLimitDial`: its readout board is placed at `x + width + 20`, which collides with a right-column plate; it also draws ink curves. An optional board position would help.
- `ParameterSlider` with a word symbol ("time", "start") and a 690 px width: the badge overlaps the symbol and the end tick labels run off the frame.
- I edited no kit files.

## Check at playback speed
- Scene 1: the clock run 9 → 11 am, then on to 1 pm and back; the arrow thinning, flipping to "out" after noon and the counter falling and recovering; the countdown in the 3 s think hold.
- Scene 3: the noon moment (arrow vanishes, counter 450 ringed, flat tangent) and the tracer sweep with violet dots landing on the teal line.
- Scene 4: the strip thinning at 0.5 → 0.1 → 0.01, the magnifier, and the chord snapping to the tangent on "exactly".
- Scene 6: the fine strips flicker while A draws; the x³/3 dashed overlay.
- Scene 7: the start sliding to 10 am, the trapezium flash, the counter 400 → 150, the curve sliding down 5/2 with the dashed ghost.
- Scene 15: the cross-fade to the handoff board and the ring on "(−2)³".
