# math-a12-s05 build notes (Revision 4 design, built on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s05-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,968 frames (532 s), 16 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s05/`: `common.ts`, `cuemap.ts` (155 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S05FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16; also exports `S05Handoff`, used by s06 to move the dashed line to x = 1).
- `parts.tsx` re-exports s04's parts (read-only). Load-time checks: derivative checks (kit `assertDerivative`) for x²/9, (8x − x²)/16, x²(3 − x)/4 and (4x − x²)/4; strips 11/900, 51/900, ratio 4.64, 0.3444 and 0.3344, f(1.5) = 1/3; arrivals 10/30/50; density histogram 1, 2.5, 3.5, 2, 1 (areas sum 1); ∫₁² 2x/9 = 1/3, total 1; courier 8k, f(0) = ½, 7/16, F(4) = 1; ∫₀² 3x(2 − x)/4 = 1; A1 4k, 5/8, f(2) = 3/4; A2 total 1. Rigs: `Van`, `Parcel`, `Pair` (violet F upper, teal f lower), `Int` and `Ev` (integral sign and evaluation bracket with limits), `RiseBracket`.
- `src/explainer/registry.ts`: one import and one entry after math-a12-s04.

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-delivery-van-v1.png` (box [236, 222, 1406, 790]), `physics/phys-y11-box-v1.png` (the parcel, box [108, 275, 1092, 725]), `maths/ma12-starting-blocks-v1.png` (scene 3's recalled histogram).

## Joins
- Frame 0 is `S04FinalFrame` (from `../math-a12-s04/s3`); on "A parcel tracker" it cross-fades to the tracker stage (same violet x²/9, now with hour labels and "F(x): chance it has arrived").
- Final frame `S05FinalFrame` (scene 15; scene 16 cross-fades back): teal f(x) = 3x(2 − x)/4 on [0, 2] (0 elsewhere), "?" chip over the hump, a dashed line with "?" at an unlabelled x, chip "Next: the most likely value and the middle", an f(x) card and the two questions. s06 opens on it.

## Departures from the design (with reasons)
- **Arrivals (author note j):** stored as 90 values x = 3√u with u from `random.Random(70)`, stratified so the hours hold exactly 10, 30 and 50 (an unstratified draw does not hit the model's counts). Kit `ArrivalDots` with live hour tallies.
- **Scenes 1, 2:** strips, rise brackets and the narrowing strip are drawn on s04's `F9Plot` (no grid) rather than kit `StripRiseRatio`, so the s04 graph continues unchanged; a `LiveReadoutBoard` reads width, rise and rise ÷ width from the same h. The tracker bar is kit `TrackerFill`.
- **Scene 3:** the y axis first rescales (0.4 → 4, bars shrink) on "Divide", then the bars grow to 1 to 3.5 on "The heights become"; area labels stay in the bars.
- **Scene 6:** the k dial is kit `ParameterSlider` plus an area readout (8k), stopping at k = 1/8 and area "1 ✓" on "one eighth".
- **Scene 8:** kit `CdfTracer` (f lower, F drawn to the marker) plus `TrackerFill`.
- **Scene 9:** a tangent sweeps F while the teal f draws below; the flat pieces and f = 0 outside glow on "And f is zero".
- **Scene 15:** a short recap stage (three framed results, paired x²/9 view, parcel) before "Next".

## Cue check
All 155 phrases resolve. Repeated phrases named: "per hour" (1 and 2, scene 2), "per second" (1, scene 3), "one third" (1, scene 4), "If X lives" (1), "which is one" (1, scenes 5 and 8), "Differentiate" (1 and 2, scene 9), "From zero point five" (1).

## Live readouts and simulations
- Scene 1: violet dot riding F with the tracker bar; strips with rise labels; 90 arrivals dropping with live hour tallies.
- Scene 2: strip narrowing 0.1 → 0.01 with live rise ÷ width approaching 1/3.
- Scene 3: bars growing past 1. Scene 6: k dial with live area. Scene 8: tracker fill building F. Scene 9: tangent sweep drawing f.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s05` (final): **PASS WITH WARNINGS (0 failures, 3 warnings)**: scene 7 early frame 56% bare; scene 15 handoff 56% bare; few plates ≥ 250 px (5 of 16; graph-heavy lesson). Earlier: 3 failures (no 44 px line in scenes 5, 6, 15), fixed (44 px framed properties, the task from the first frame, larger handoff tags).

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s05`: 11 runs on the final sweep. Three are deliberate red strikes ("k = −1/8", "P(X > 1) = f(2) = 3/4", "f(x) = 1 for x > 2"). Left, judged acceptable: arrival dots falling past a tally label (scene 1, one frame); the moving tracer marker crossing the "f(x) = (4 − x)/8" tag (scene 8, about 1 s); the slider track touching its badge for a frame while k sweeps (scene 6); near-paper fill behind "base 4" (the pale triangle fill, label has a halo); an 8 px touch on "high f" (scene 2); the small memory-card plot's "x". Fixed after the first run (16 runs): hand tags crossing the y axis in scenes 1 and 2 (moved right of it), "per hour" on the f line, "7/16" on the F curve, the notes tracker's "1.00" on the card's inner rule (gone on the final sweep).

## Check at playback speed
- Frames 0 to 230: s04's frame, then the cross-fade to the tracker.
- Scene 1: the ride (tracker bar filling with the dot), the strips on "Compare", the arrivals in the last 3 s (they finish on "packed closely").
- Scene 2: the strip narrowing on "thinner and thinner" and the readout settling; the split into the paired view on "Here".
- Scene 3: the axis rescale then the bars growing.
- Scene 6: the dial sweep stopping on "one eighth".
- Scene 9: the tangent sweep and the f pen.

## Honest grade
**A** by the brief's rules, with soft spots: scenes 7 and 15 are line-graph frames near the sparse limit; scene 2's left column has a gap between the f rows and the framed f = F′ until the chip arrives; scene 10's small F graph draws during the scene.
