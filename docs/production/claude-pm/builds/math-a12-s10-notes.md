# math-a12-s10 build notes (Revision 5 design, built on the measured narration)

Builder: Claude build agent, 17 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s10-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,968 frames (499 s), 17 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s10/`: `common.ts`, `cuemap.ts` (183 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S10FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 11), `s3.tsx` (12 to 17; exports `S10FinalFrame`, `FishHandoff`, `FB`, `FISH_*` and `fishMap`, which s11 reuses for its opening).
- `parts.tsx` re-exports s09's parts (read-only) and `S09FinalFrame`. Load-time number checks: peaks 1/(15√(2π)) = 0.026596 and 1/(5√(2π)) = 0.079788; areas within 0.5, 1, 2, 3 σ (0.3829, 0.6827, 0.9545, 0.9973); chip bags 171 to 179 = 0.6827; F(130) = 0.0912, F(135) = 0.1587, F(165) = 0.8413, F(150) = 0.5; inflection 135, 165 and 2σ² = 450; heights 162, 178, 186, 194 and the tails above 194 and 196; A1 and A2 arithmetic. Rigs: `Calc` (the painted calculator with coded content clipped to the screen rectangle from `ma12-graphing-calculator-v1.json`), `ScreenGraph` (small bell, band, S-curve and readout for that screen), `PdfFormula` (typeset PDF whose parts glow on cue), `Frac`, `Sup`, `Lit`.
- `src/explainer/registry.ts`: one import and one entry after math-a12-s09 (already present in HEAD: root's commit 714cdd30 carried it; the lesson folder itself is untracked).

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-apple-v1.png` (1254 × 1254, box [184, 124, 1002, 1095]), `maths/ma12-apple-crate-v1.png` (1536 × 1024, box [131, 86, 1402, 944]), `maths/ma12-graphing-calculator-v1.png` (887 × 1774, box [112, 219, 769, 1573], screen [183, 337, 699, 662]), `physics/phys-y11-platform-scales-v1.png`, s09's `maths/ma12-chip-bag-v1.png`, `biology/y11-fish-snapper-v1.png` and `biology/y11-fish-golden-perch-v1.png`. No fallback needed.

## Joins
- Frame 0 is `S09FinalFrame`; the inner "?" pulses on "marks", "no area formula in this course" writes on, and on "apples" the bags' frame shrinks to a card at the top left while the crate, the apple on the scale ("152 g") and the calculator (screen "Y1 =") arrive.
- Final frame `S10FinalFrame` (scene 16; scene 17 cross-fades back): two bells, snapper N(40, 4²) cm and golden perch N(36, 2.5²) cm, painted fish above each, violet marks "45: 5 cm above" and "40: 4 cm above", right tails tinted amber with "?", chip "Next: which catch is more unusual?". No z-value or probability. s11 opens on it exactly.

## Departures from the design (with reasons)
- **Calculator screen:** the plate's measured screen is only about 236 × 149 px at 620 px tall, so it carries a small bell, band or S-curve and one 32 to 44 px readout; the typed formula (scene 2) and the area request (scene 5) sit in a coded "TYPED IN" / "ASKED FOR" card beside the calculator rather than on the screen.
- **Scene 3, 4:** kit `SignStrip` under the axis (gradient, then concavity cells); the cap and cup tints are full-height bands behind the curve; the μ tick is left off where the μ triangle covers it.
- **Scene 6 (morph direction):** the narration says sigma "stretches it sideways and squashes it down", so a dashed copy of the bags' bell slides from 175 to 150 and stretches onto the apples' bell (the design had the apples' bell squeezing onto the bags'). The ±σ band and the live area readout (0.6827) are carried through; then the window zooms to the apples' bell and the axis relabels μ − 3σ to μ + 3σ.
- **Scene 7:** the rule builds line by line on the cues inside a green frame (written with ≈ and the heading "approximately, for any normal distribution"); the tail split is "32% outside" lifting into two "16%" labels on the bell plus kit `TailLadder` rows (16%, 2.5%, 0.15%); a small calculator with 0.6827 fills the right column until the tails start.
- **Scene 8:** a coded grey door-frame height scale beside the plot (no figure); "P(H < 186) ≈ 97.5%" shows at the start of scene 9, not after the frame in scene 8 (scene 8 ends 19 frames after the last cue).
- **Scene 9:** the juice chute is coded with a small painted apple rolling down it.
- **Scene 10:** my own two-panel tracer (bell over S-curve, shared x axis) rather than the kit `StudioAccumulationTracer` (which puts the accumulated curve on top); the sweep runs to 199, then returns to 130 for F(130) ≈ 0.0912.
- **Scene 15:** the general and given formulas sit as two rows (general grey, given with underlined 5 and 40) in place of linking lines; no full question strip (the given formula and "find: global maximum, points of inflection" carry every demand).
- **Scene 16:** before "Next", the apples' bell recaps peak, inflection dots and 0.6827 beside the calculator, which then draws the S-curve.

## Cue check
All 183 phrases resolve. Repeated phrases named: "fifty" (1), "seven" (1), "five" (2), "three" (2), "same curve" (1), "sixty-eight" (1), "each side" (2), "one ninety-six" (1), "below" (2), "one two" (1), "points of inflection" (2), "not sigma squared" (1).

## Live readouts and simulations
- Scene 3: a point rides the bell with its tangent and a live gradient sign; the sign strip fills behind it.
- Scene 5: `BandSlider` k 0 → 1 → 2 → 3 with live k and area (0.3829 passing, 0.6827, 0.9545, 0.9973) on the stage and on the calculator's screen.
- Scene 6: the bags' bell copy slides and stretches onto the apples' bell with the live area between the marks fixed at 0.6827.
- Scene 10: the area sweep drawing F with live x and F(x).

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s10` (final): result below. Earlier runs: 6 failures (scene 1 phase A, 8 and 9 had no 44 px line; scenes 7 and 13 opened mostly empty; the handoff chip at 38 px), then 1 (scene 7 opening), fixed by larger task strips and tags, the feedback bell drawn from the start, the rule written line by line with a pale fill under the bell and a calculator showing 0.6827.

Final result: **PASS WITH WARNINGS (0 failures, 2 warnings)**: sparse frames at 52% (scene 9, the heights judgement) and 58% (scene 13 opening, feedback 1).

## Ink check (line through text)
Not run (the sweep needs three full 1 fps renders and the stills lock was held for root's renders). Overlaps fixed by eye from stills: the μ triangle over μ ticks (ticks left off), the CDF tick labels 130 and 135, the scene 2 tag under the calculator, the scene 10 answer under the calculator, the juice chute under a tag.

## Check at playback speed
- Scene 2: the formula parts glowing on "power of e", "further out" (minus sign), "The number in front", the zoom inset on "axis", the calculator drawing the bell on "For the apples".
- Scene 3: the rider from 110 to 190 against "Left of the mean ... falls".
- Scene 5: the band slider stops on "seven", "five", "three".
- Scene 6: the slide on "slides the bell" and the stretch through "stretches it ... doesn't change"; the zoom on "Measured in sigmas".
- Scene 7: the split labels on "sixteen percent", "two and a half", "zero point one five".
- Scene 10: the sweep from "S shape" to "levels off", then back to 130 by "one two".

## Honest grade
**A** by the brief's rules, with soft spots root may weigh: the calculator's real screen is small, so its readouts are short and the typed input sits in a card beside it; the scene 6 morph runs bags → apples to match the narration; a few bell scenes sit in the 50 to 54% sparse band.
