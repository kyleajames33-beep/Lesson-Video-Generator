# math-a12-f06 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f06-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,020 frames (501 s), 16 scenes (scene 5a is the whole chessboard); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f06/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check against the measured captions), `config.ts`, `assets.ts` (chessboard, rice grain, rice heap; reused tennis ball and floor strip), `scenes.tsx` (includes `scene-05a`; re-exports `F06FinalFrame`);
  - `parts.tsx`: re-exports f05's parts and, through them, f01 to f04's (read-only imports); load-time checks of every value (totals 1, 3, 7, … 1023 and 2ⁿ − 1; (2 − 1)(1 + 2 + 4 + 8) = 16 − 1 = 15; the identity for x = 2, 3, −2, ½ and n = 1 to 6; both forms of Sₙ agree, and na when r = 1; 2⁶⁴ − 1 = 18 446 744 073 709 551 615 ≈ 1.8 × 10¹⁹; ∑ 3 × 2ᵏ⁻¹ = 189; 1 − 3 + 9 − … six terms = −182 with running totals 1, −2, 7, −20, 61, −182; 64 + 32 + … eight terms = 127½; A1 242 and the slip 80; A2 r = 2, a = 3, 765 and the slip 1530). Lesson rigs: `GrainStrip`, `GrainBoard`, `Frac`, `ValueSlider`, `ReadStrip`, `HeightScale`, `FloorStrip`;
  - `s1.tsx` (scenes 1 to 5a; exports `IDENTITY`, `SN_A`, `SN_B`), `s2.tsx` (6 to 9; `AID6`, `AidStrip`), `s3.tsx` (10 to 15; `BallScene` with a `bare` option, `F06FinalFrame`).
- `src/explainer/lessons/math-a12-f05/s3.tsx`: unchanged in this build (f06 imports `RiceScene`, `F05FinalFrame`, `B`, `ST`, `ZS`, which f05 already exports).
- `src/explainer/registry.ts`: one import and one array entry, after f05 (root left it uncommitted until grading).

## Joins
- **Frame 0 is `F05FinalFrame`** (the rice board with its enlarged strip and the five total columns). It fades over frames 14 to 28 above the same board drawn bare; the new heading writes from frame 34.
- **Final frame: `F06FinalFrame`** (f07 opens on it): the heading "A ball that keeps bouncing"; the tennis ball at the top of its third bounce over the floor strip, with the dotted path from 128 cm, a height scale and the dashed "128 cm" line; at the right eight teal columns for the bounce heights added up (64, 96, 112, 120, 124, 126, 127, 127½) under a dashed 128 line, with the gap left above each (64, 32, … ½); the chips "What if it never stops bouncing?", "Next: an endless sum" and "?". The notes cross-fade back to it.

## Plate fit
- **Chessboard (`ma12-chessboard-top-v1.png`)**: 640 px in scene 1 (f05's frame) and 760 px in scene 5a; grains and heaps sit on Codex's measured row and column lines. The strips in scenes 2, 3, 9 and the notes are the same file cropped to the first five squares of the bottom row at one uniform scale.
- **Rice grain and rice heap (`ma12-rice-grain-v1.png`, `ma12-rice-heap-v1.png`)**: counted grains up to 64 on a square, the heap plate above that, each at its own aspect.
- **Tennis ball (`b6a-tennis-ball-v1.png`, reused)** at 90 px. **Floor (`phys-y11-surface-floor-v1.png`, reused)** at 56 px high, tiled at its native aspect and cut off at x = 960 by a clip (not stretched), so it ends left of the totals chart.

## Departures from the design
- **Scene 1:** the sixth square joins the enlarged strip when "thirty-two" is said; the live strip "square, grains on it, total so far" runs from square 5 to 10 and ends on "1023 ?".
- **Scene 2:** the two rows are painted strips of the board (blue trays for the sum, amber for the doubled row, grey once the top row is taken away); the amber piles double in place, then slide one square along; the symbol rows at the right cancel in step with the piles.
- **Scene 3:** the numeric result stays in view at the top right as a chip and two small strips (the "−1" pile and the "16" pile that were left).
- **Scene 4:** "when r = 1" is a card with five "a" tiles and Sₙ = na.
- **Scene 5:** a table of the two brackets for n = 4 with a live r slider (r = 1 marked as not allowed); the row whose brackets are both positive is tinted green.
- **Scene 6:** all six terms land while the rule is read (the design had three, then three on "adding"); a hand line says in plain words what ∑ asks for.
- **Scene 7:** the running totals are plotted (1, −2, 7, −20, 61, −182); the labels of −2 and −20 sit under their points so they clear the zero line; "(−3)" is amber, with no ring.
- **Scene 8:** one wide stacked column against the dashed 128 line, and the eight terms as small cards.
- **Attempt 1:** as designed, the picture is five empty slots labelled k = 1 to k = 5 (nothing answer-bearing). Root may prefer a first card filled.
- **Feedback 1 and 2:** a two-line plan card shows until the first row arrives; feedback 1 keeps the sum formula at the right.
- **Handoff:** the scale has no "0" label and the chip "What if it never stops bouncing?" sits under the floor (see kit notes).

## Cue check
Every phrase resolves. Repeated phrases named (key: occurrence of total): eight 1 of 3; minus 2 of 2; sixteen 2 of 3; last 6 of 6; xn 3 of 5; sn 1 of 2; six 1 of 2; t64 2 of 2; t729 1 of 2; thats 1 of 2; t128 2 of 2; minus (scene 8) 3 of 3; close 3 of 3.

## Live readouts
- Scene 1: the square number is a whole number; "grains on it" and "total so far" are worked out from it.
- Scene 5: r is rounded to two decimal places once per frame; the slider badge and all four bracket values use that value (r = 0.99 shows −0.0394 and −0.01).
- Scene 5a: the square number is a whole number; the two powers are worked out from it.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f06`: **PASS WITH WARNINGS (0 failures, 4 warnings)**: three sparse frames (scene 2 at 54%, scene 3 at 56%, feedback 1 at 58% bare) and "few pictures" (7 of 15 teaching frames). Earlier runs failed scene 3, scene 8 and feedback 1 as mostly empty; fixed with the strips in scene 3, the wider column and term cards in scene 8, and the formula in feedback 1.

## 1 fps sweep
Four full sweeps with the probe (501 frames each) and one part sweep of scenes 8 and 14 after the last layout change; every second frame inspected on contact sheets; overlap and line-through-text checks on every frame. Found and fixed: the readout strip running off the right edge; cards with wrapped orphan lines; working rows touching the givens card; a label on the plot's zero line; the ring round "(−3)" touching its neighbours; the green ring touching "−182"; a block border through the "8" in the column; the floor plate under the chart's totals and its label; the scale's "0" on the floor; a chip touching "128 cm"; empty slots that waited 36 s for their terms.

Overlap check, last run: two reports, both the sigma's upper limit against the "∑" glyph box (f01's `Sig`, the boxes touch; the ink does not).

Line-through-text check, last run: 8 runs, all red strikes (the "−3⁶ = −729" slip, the two mistake cards and the "÷ (r − 1) when r = 1" slip).

Not re-swept: scene 2 after its plan card was shortened to "Expand and see what cancels." (text only; the checker re-ran and the sheet shows it).

## Kit notes for root (described, not edited)
- `BounceRig`: the scale prints "0" on top of the floor plate, and the floor tiles run 200 px plus up to one tile (652 px at h = 56) past the last bounce, so they pass under anything to the right. f06 draws its own `HeightScale` and `FloorStrip` in `parts.tsx`.
- `TermPlot`: point labels always sit above the point, so a small negative value's label lands on the zero line.
- `MarkSpan` circle: the scribble touches the glyphs on either side at any pad; the ink check reports it.

## Check at playback speed
- Scene 2: the amber piles doubling, then sliding one square along; the strikes in step.
- Scene 3: the two symbol rows lining up, then the staggered strikes.
- Scene 5: the slider from 2 to ½ and the green tint changing rows.
- Scene 5a: the board filling to 64 squares (about 8 s).
- Handoff: the ball's three bounces against the columns building.

## Honest grade
A on the checker (0 failures, 4 warnings). Root may call these B+: the first 10 s of scene 2 (one strip, the plan card and one row); scene 3 before the two rows arrive; attempt 1's empty slots; the handoff's first 8 s, where the totals chart is an empty frame with its label and the 128 line.
