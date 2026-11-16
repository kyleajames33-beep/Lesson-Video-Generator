# math-a12-s06 build notes (Revision 3 design, built on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s06-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,478 frames (516 s), 16 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s06/`: `common.ts`, `cuemap.ts` (133 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S06FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16).
- `parts.tsx` re-exports s05's parts (read-only). Load-time checks: hump f(1) = 3/4, F(1) = ½, window areas 0.1495 and 0.0535; cookie F(2√2) = ½, F(2) = ¼, F(2√3) = ¾, f(4) = ½, IQR ≈ 1.464; the 60 stored chips (Python `random.Random(708)` rejection sampling, reproduced exactly): quarter rings 15, 15, 15, 15, unit rings 4, 11, 21, 24, 30 inside 2√2; 3x²/8 (∛4, ∛2, f(2) = 3/2); lifetime (median 4 − ∛32 ≈ 0.8252, f(0) = 3/4); A1 f(2/3) = 16/9; A2 Q₁ = √3 − 1. Rigs: `Cookie` (painted cookie, chip sprites via kit `ChipScatter`, coded circles, equal-area ring tints, rim glow, ruler), `Tri` (blue mode triangle), `AcrossDown` (amber across-and-down quantile lines).
- `src/explainer/registry.ts`: one import and one entry after math-a12-s05.

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-cookie-v1.png` (box [86, 87, 1151, 1165]; circle centre (618.4, 627.4), radius 531.2 from its JSON), `maths/ma12-choc-chip-v1.png` (sprite, box [334, 301, 918, 947]).

## Joins
- Frame 0 is s05's final frame (rendered with `S05Handoff` from `../math-a12-s05/s3`); on "both answers" the dashed line slides to x = 1, the halves tint, "½ | ½" and a blue triangle "mode 1"; on "Now a cookie" it cross-fades to the cookie stage.
- Final frame `S06FinalFrame` (scene 15; scene 16 cross-fades back): a flat blue segment on [1, 5] at an unlabelled height (0 elsewhere), tag "f(x) = ? for 1 ≤ x ≤ 5", a "?" at the y axis, small empty F axes with a "?", chip "Next: a flat density" and the two questions. s07 should open on it.

## Design error found (please log)
- Author note (d2) and scene 9's visual give f(0) = 3/16 for the lifetime density 3(4 − l)²/64; it is 48/64 = **3/4** (the density integrates to 1 on [0, 4]). The build uses the correct value; f(0) is not shown on screen, and the lower panel's scale is 0 to 0.8 (not the design's 0 to 0.25). The narration is unaffected.

## Departures from the design (with reasons)
- **Scene 1:** the histogram of chip distances grows after the chips land (kit `ClassHistogram`, density mode, counts 4, 11, 21, 24 in the bars, teal x/8 model line); the half-cookie circle grows on "Yet half" with a live "chips inside: 30 of 60" readout.
- **Scene 2:** kit `SlidingWindow` (lower) under s04's `F9Plot` for F (upper); the window slides to 1.8, back to 1 on "Near one", to 0.2 on "near zero point two", and back to 1.
- **Scenes 5 to 7:** one kit `QuantileReader` (p = ½) with lesson `AcrossDown` lines for ¼ and ¾, rather than several readers. In scene 6 the cookie moves to the lower right at 500 px with the equal-area rings.
- **Scene 4:** the candidate table is a two-column table (x, f(x)); the flat inset is a small coded segment.
- **Scene 14:** the domain strip is a coded number line with −1 − √3 as an open red marker.

## Cue check
All 133 phrases resolve. Repeated phrases named: "of the centre" (1), "two thirds" (1 and 3, scene 12), "three hours" (1).

## Live readouts and simulations
- Scene 1: 60 chips landing on the cookie (about 3 s), the half-cookie circle with live chips-inside and fraction readouts.
- Scene 2: sliding window with a live captured-area readout. Scene 3: tangent sliding and flattening at x = 1.
- Scenes 5, 8, 9: the quantile reader running across and down while the area fills; the cookie circle grows with it in scene 5.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s06` (final): **PASS WITH WARNINGS (0 failures, 2 warnings)**: scene 12 (feedback 1) early frame 54% bare; scene 15 handoff 52% bare. Earlier: a load failure (my lifetime check used the design's 3/16), then 2 failures (scene 1 at 484 with the cookie alone, scene 12 empty axes), fixed (histogram axes from the cookie's arrival; feedback curve from the first frame); also moved the cookie readout and tags clear of the cookie and histogram.

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s06` (final): 8 runs. Five are the deliberate red strikes ("maximise F? always the right end", "m = ±2√2", "f(m) = ½ ⇒ m/8 = ½ ⇒ m = 4", "mode = 0", "Q₁ = −1 ± √3"). Left, judged acceptable: the "X cm" ruler label sits on the painted cookie (it has a paper halo; the checker reads the plate's paint as ink); a 4 px touch on s05's "?" while the dashed line slides to x = 1 (under 2 s); a 5 px near-paper touch on "Given" (one frame). Fixed after the first run (11 runs): the histogram counts under the dashed x/8 line (moved into the bars), "f = ½ only at the rim" crossing the median drop line, "half fail early" inside the tinted tail.

## Check at playback speed
- Frames 0 to 430: s05's frame, the line sliding to 1, the halves tinting, the cross-fade to the cookie.
- Scene 1: chips landing; the ruler on "distance"; the rings glowing on "outer rings"; the half circle growing on "Yet half".
- Scene 2: the window's sweep against "Near one" and "near zero point two".
- Scene 6: the rings tinting on "Circles at" and the outer ring pulsing on "width".
- Scene 8: the reader's run on "For the median".

## Honest grade
**A** by the brief's rules, with soft spots: scenes 12 and 15 near the sparse limit; scene 8's small labels "∛2" and "∛4" sit close to the x tick labels.
