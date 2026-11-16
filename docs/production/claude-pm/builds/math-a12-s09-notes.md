# math-a12-s09 build notes (Revision 5 design, built on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s09-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 13,744 frames (458 s), 15 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s09/`: `common.ts`, `cuemap.ts` (118 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S09FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 15).
- `parts.tsx` re-exports s08's parts (read-only) and `S08FinalFrame`. Load-time number checks: the 400 stored peg-board paths (Python `random.Random(4505)`, 12 × `randint(0, 1)` per dot, reproduced exactly: bins 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0); C(12, 0) = 1, C(12, 1) = 12, C(12, 6) = 924, 2¹² = 4,096; the five extra bags (Python `random.Random(919)`, 90 × `gauss(175/90, 0.42)`: 178.1, 181.9, 175.5, 175.6, 174.6, reproduced); the bag histogram counts (sum 1,000); √16, √36, √9; peaks 0.0997356 and 0.0664904 (ratio 2/3); A2 0.8904 and 0.9452; the handoff marks 163 to 187. Rigs: `Mark` (dashed violet σ marks with labels), `Q`, `PegPaths` (amber traced paths on the kit `PegBoard`'s geometry), `bellFill`.
- `src/explainer/registry.ts`: one import and one entry after math-a12-s08.

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-chip-bag-v1.png` (box [122, 189, 939, 1265]), `maths/ma12-potato-chip-v1.png` (1254 × 1254, box [184, 271, 1070, 990]), `physics/phys-y11-platform-scales-v1.png` (1400 × 500, box [127, 173, 1274, 327]), reused `maths/ma12-bus-stop-v1.png` (scene 6, the flat bus wait). No fallback needed.

## Joins
- Frame 0 is `S08FinalFrame`. The tallest classes glow, the end classes pulse, a violet mirror line and the mirrored left half (dashed) appear on "mirror images", and the Revision 5 grey line "drawn from a bell-shaped model" sits under "simulated: 1,000 bags"; on "fill" it cross-fades to the bag-filling stage.
- Final frame `S09FinalFrame` (scene 14; scene 15 cross-fades back): the bags' bell N(175, 16) (pale teal fill, violet μ triangle), violet dashed marks at 171 and 179 ("μ − σ", "μ + σ"), 167 and 183, 163 and 187, the region 171 to 179 tinted amber with "?", "?" by the 2σ and 3σ marks, the chip bag, the tag "the bags: X ∼ N(175, 16), σ = 4 g", "How much area between the marks?" and chip "Next: how much area lies within one, two and three σ?". No percentage. This matches s10's stated opening.

## Departures from the design (with reasons)
- **Scene 1:** kit `BagFill` with the painted bag on the painted scale and painted chips falling; the scale's numbers are a readout card beside the bag (bag, chips, mass), not inside the plate's display window. The five new bags land as dark blue blocks on top of their classes (one bag is too small to see at the histogram's scale), with the grey tag "these 5: built from 90 chip masses".
- **Scene 2:** kit `PegBoard` (stored Python paths, not the kit's seeded run) with amber traced paths of my own (`PegPaths`): the all-left path, the twelve one-right paths, five six-and-six paths; "924 of 4,096" is a readout. Three nudge chips ("+ one more chip", "+ a bigger chip", "− a few crumbs") fill the right column before the dots fall.
- **Scene 3:** the bell is drawn left to right over the density histogram, then the bars fade to ghosts; one class (173 to 175) and the matching strip under the curve shade together.
- **Scene 4:** the fold is a violet dashed copy of the left half swinging onto the right; the tail zoom is an inset plot of 184 to 191 g.
- **Scene 5:** kit `NormalCurve` with μ 175 → 180 → 175 and σ 4 → 6, two readout cards (μ, σ; area, peak height).
- **Scene 6:** the bag histogram with its bell is on screen from the start (it is the case being judged); the three sketches use the same mean and SD for each dashed bell, and the mismatch regions tint red on "For those".
- **Scenes 7, 8:** the μ tick is left off wherever the μ triangle would cover it (scenes 4, 8, 11, 13, 14).
- **Scene 9:** the three icons are coded (bell with a dashed fold line, violet triangle, infinity arrows), not plate thumbnails.

## Cue check
All 118 phrases resolve. Repeated phrases named: "path does that" and "paths do that" (1 each), "minus infinity" and "plus infinity" (1), "on forever" (1), "is sixty-four" (1), "zero five four eight" (1).

## Live readouts and simulations
- Scene 1: five bags filling chip by chip (chips, mass readouts) and dropping onto the histogram.
- Scene 2: 400 dots through 12 rows into 13 bins with live bin counts.
- Scene 5: the bell sliding and widening with live μ, σ, area (fixed at 1) and peak height.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s09` (final): **PASS WITH WARNINGS (0 failures, 8 warnings)**: sparse frames at 52 to 56% bare in scenes 1 (mid cross-fade, also flagged faint text there), 2, 4, 7, 8 and 11; few plates (6 of 15 teaching frames; a curve-heavy lesson). Earlier runs: 5 failures, then 4 (scenes 2, 4, 6, 8 and 11 mostly empty: one thin curve or empty peg board on a large plot), fixed with a pale fill under every bell, the three non-normal sketches shown faintly from the start of scene 6 with the bag histogram, the nudge chips and a live "dots dropped" readout in scene 2, early right-column lines in scenes 4 and 8, and the bell drawn from the start of feedback 1; one "length x (mm)" duplicate label removed.

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s09` (final): 5 runs. Four are the deliberate red strikes ("σ = 16", "P(170 < X < 180) = 1 − P(X < 170)", "σ = 36", "1 − 0.0548 = 0.9452"). Left, judged acceptable: a 6 px touch of the amber traced path on the "1 path" tag (one second). Fixed across three runs (19 → 10 → 5): the μ triangle covering the μ tick label (that tick is now left off), s08's tag under the incoming histogram during the cross-fade (the old frame now fades out first), the chip bag behind a scene 7 row, "to −∞" across the y axis, "5 below" and "5 above" on the curve, the duplicated axis label in feedback 1.

## Check at playback speed
- Frames 0 to 450: s08's frame, the glowing classes, the mirror, then the bag filling (first bag about 2 s, then four more).
- Scene 2: the first six dots slowly, the traced paths on "only one path", "twelve paths", "nine hundred and twenty-four", then the rest of the 400 piling into the bell.
- Scene 4: the fold on "Fold it", the halves tinting on "too", the zoom on "never touch it".
- Scene 5: the slide on "along the axis" and the widening on "stay one".

## Honest grade
**A** by the brief's rules, with soft spots root may weigh: six sheet frames sit in the 52 to 56% sparse band (bell-curve scenes with a single curve on a large plot); the memory card's icons are small coded drawings; the scale readout is a card beside the bag rather than in the plate's display window; s08's handoff tag "simulated: 1,000 bags" sits higher than before (y 690) to make room for the Revision 5 second line.
