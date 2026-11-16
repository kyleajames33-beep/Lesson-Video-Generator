# math-a12-s08 build notes (Revision 5 design, built on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s08-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,970 frames (499 s), 14 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s08/`: `common.ts`, `cuemap.ts` (131 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S08FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 14).
- `parts.tsx` re-exports s07's parts (read-only). Load-time number checks (Simpson's rule, tolerance 1e-6): x/8 (∫ f = 1, E = 8/3, E(X²) = 8, Var = 8/9 both ways, σ = 0.942809); midpoint strips 2.625, 2.65625, 2.6640625 with Σ f Δx = 1 and n = 4 bars 1/16, 3/16, 5/16, 7/16; train 3, 31/3, 4/3; song density (∫ = 1, E = 4, E(X²) = 20 − 32/π², Var ≈ 0.757722, σ ≈ 52.23 s); the 60 stored songs (Python `random.Random(808)` by the inverse CDF, stored to 4 dp; running means 3.650, 4.365, 4.011, 3.803, 4.064, 4.005; first ten 40.11 min); A1 2/3, 1/2, 1/18; A2 π/2 − 1, π − 3, crossed ≈ −0.07254; the bag histogram (Python `random.Random(909)`, `gauss(175, 4)`, class counts reproduced: 3, 3, 13, 37, 91, 157, 176, 190, 150, 115, 44, 16, 3, 2). Rigs: `BeamDensity` (a density on a violet beam over a fulcrum, tilting, with midpoint strips that narrow into bars and a μ label), `PlaylistRows`, `PlaylistStrip`.
- `toolpanel.tsx`: a lesson-local copy of the kit `StudioToolPanel` with a 30 px input line (the full typed set-ups do not fit the kit's 40 px line). Note for root: I first added an optional `inputSize` prop (default 40, behaviour unchanged) to the shared `StudioToolPanel` in `src/explainer/math/studio/integration-parts.tsx`; root has since committed it (0528a399); no lesson code uses it now, so it can stay or go. The local copy was swapped in after the final grade run (same appearance; typechecked and bundled).
- `src/explainer/registry.ts`: one import and one entry after math-a12-s07.

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-headphones-v1.png` (1341 × 1173, box [275, 162, 1053, 1008]), `maths/ma12-chip-bag-v1.png` (1086 × 1448, box [122, 189, 939, 1265], handoff), reused `maths/ma12-cookie-v1.png` (scene 3 badge, open decision 7). No fallback needed.

## Joins
- Frame 0 is `S07FinalFrame` (imported from `../math-a12-s07/s3`); s07's `BeamPlot` then slides the fulcrum from 2 to 3 and levels the beam on "at three" ("balance point: 3", dashed mirror line).
- Final frame `S08FinalFrame` (scene 13; scene 14 cross-fades back): the blue 1,000-bag histogram (2 g classes from 161 g), "simulated: 1,000 bags", dashed target line at 175 g with "target 175 g", "?" over the peak, the chip bag at the top right, chip "Next: when is a normal model useful?" and "Why a bell? When can we model it?". No curve, mean or σ. s09 opens on it.

## Departures from the design (with reasons)
- **Beam:** the beam is the density's own x axis (s07's `BeamPlot` look): the whole plot tilts about the fulcrum. The fulcrum sits under the axis, so it can cover a tick label at its position (scene 10's 0.5 tick is dropped for that reason).
- **Scene 1:** the train fades (no 280 px card); the playlist is twelve coded rows with play marks and m:ss lengths beside the 360 px headphones; x/8 arrives on "zero to four" with the beam tilting on "It's taller".
- **Scene 2:** strips narrow in place into bars at their midpoints (heights f(m), so the bars' heights are proportional to their probabilities); labels 1/16 to 7/16 sit inside the bars. The refinement log is three grey rows, not a kit `RefinementTable`.
- **Scene 3:** the cookie badge is s06's plate (220 px) with a small cm axis: violet mean 2.67, amber median 2.83, blue mode triangle at 4.
- **Scene 5:** s03's arms are drawn as violet dashed arms from μ to four midpoints with small pale violet bars below each (the full squares crowded the plot).
- **Scene 7:** in two stages. Stage 1: task, givens, the song density with the beam (levels at 4 on "curve"), density check, set-ups, two unbranded calculator panels typing the full inputs and returning 4 and 20 − 32/π² ≈ 16.758, the framed answer and the crossed "σ = 0.76". Stage 2 (on "Shuffle"): the 60 songs fill a 240-minute strip end to end (a dashed mark at 40.1 min reads "10 songs: 40.1 min") above kit `RunningMeanTrace` with live songs-played and m:ss average readouts.
- **Scene 9 and 11 cards:** empty axes and a "to do" card (scene 11: empty π axes and a blank calculator panel), no `QuestionCard` picture slot.
- **Scene 12:** a static calculator card shows the two outputs (not a typed round trip; the narration only reports them).

## Cue check
All 131 phrases resolve. Repeated phrases named: "at three" (1), "eight thirds" (1), "which is eight" (1), "eight ninths" (1), "minus mu squared" (2, scene 5: occurrence 1 is "x minus mu, squared"), "a half" (1, scene 10), "mu squared" (1, scene 12).

## Live readouts and simulations
- Scene 2: strips narrowing into bars, the fulcrum sliding to each balance point with a live "Σ x f(x)Δx" readout (2.625, 2.656, 2.664) and "bars add to 1".
- Scenes 3, 4, 7, 10: the beam levelling at 8/3, 3, 4 and 2/3.
- Scene 7: two calculator round trips; 60 songs on the playlist strip and the running-average trace settling on the app's 4 minutes.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s08` (final): **PASS WITH WARNINGS (0 failures, 3 warnings)**: scene 2 frame 2339 56% bare; scene 5 frame 6082 52% bare; few plates (7 of 15 teaching frames; a graph-heavy lesson). Earlier: 2 failures (scene 7 opening and the handoff had no 44 px line), fixed (a 44 px "is f a density?" row; the handoff question at 44 px).

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s08` (final): 7 runs. Five are the deliberate red strikes ("E(X) = 2, the middle of [0, 4]", "Var = 8 − 8/3", "σ = 0.76", "E(X) = ∫₀¹ 2x dx = 1", "∫ (x cos x)² dx − μ²"). Left, judged acceptable: the paper-coloured "?" chip by the fulcrum touching the tick labels "3" and "2" for one frame each while the fulcrum moves (scenes 1 and 2). Fixed across two runs (17 → 27 → 7): the strip probability labels 1/16 to 7/16 (the f line, then the bar outlines; now above the bars), "taller side pulls" crossing the y axis, the attempt-1 fulcrum over the 0.5 tick, the "?" over "target 175 g".

## Check at playback speed
- Frames 0 to 300: s07's frame, the fulcrum sliding to 3 and the beam levelling on "at three".
- Scene 2: the strips narrowing on "treat each strip", the fulcrum creeping on "five", "eight strips", "sixteen".
- Scene 7: the typed inputs and "working…" before each output; the 60 songs and the trace in about 3 s after "Shuffle" (fast; root may want it slower, but "near four" comes 2.8 s after "Shuffle").

## Honest grade
**A** by the brief's rules, with soft spots root may weigh: the beam tilts the whole plot (tick labels included), which reads well but differs from a separate beam; scene 5's arms are a light version of s03's squares; scene 7's song simulation is brisk; scenes 2 and 5 have a sparse sheet frame each.
