# math-a12-s11 build notes (Revision 4 design, built on the measured narration)

Builder: Claude build agent, 17 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s11-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 13,727 frames (458 s), 15 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s11/`: `common.ts`, `cuemap.ts` (144 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S11FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 15; exports `S11FinalFrame` and `BottleHandoff`, which s12 opens on).
- `parts.tsx` re-exports s10's parts (read-only) and s10's `FishHandoff` geometry. Load-time number checks: z = 1.25, 1.6, −1.25, −3.25; table values 0.8944, 0.9452, 0.8413, 0.9525, 0.9994, 0.6915, 0.9332; slider tails 0.5000, 0.3085, 0.1587, 0.1056, 0.0548, 0.0228; bolts 0.905 and 0.9044; P(X < 474) = 0.000577; Alex 1.0, Blake 1.3, Priya 1.5 and 1.1; A2 σ = 3, z = 1.5, 0.0668, crossed 0.5. Rigs: `BottleFill` (PET bottle plate with a coded fill level and dashed red 490 line, using the kit's estimated interior anchor), `MirrorTail` (the design's TailMirror; not in the kit: a left tail lifted and flipped onto the right), `Pulse`.
- `src/explainer/registry.ts`: one import and one entry after math-a12-s10 (already in HEAD via root's commit 714cdd30; the folder is untracked).

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `biology/y11-fish-snapper-v1.png` (box [126, 150, 1565, 796]), `biology/y11-fish-golden-perch-v1.png` (box [128, 144, 1559, 798]), `chemistry/m7-pet-bottle-v1.png` (2000 × 2000, box [795, 402, 1205, 1598]), and s12's `maths/ma12-hex-bolt-v1.png` (box [348, 161, 1701, 617]) for the bolts in scene 7 (not named in the s11 design; added as the real object). No fallback needed.

## Joins
- Frame 0 is s10's final frame exactly (`FishHandoff`, same component). The old chip fades on "vary", the heading "z-scores" writes on, coded measuring boards under each fish read 45 cm and 40 cm, ±σ marks with "σ = 4 cm" and "σ = 2.5 cm", the mark labels pulse with "different spreads" on "compared", dashed ruler outlines "? σ" on "ruler", and the chip "Which is more unusual? How much area beyond?" on "catch".
- Final frame `S11FinalFrame` (scene 14; scene 15 cross-fades back): the bottles' bell (drawn at 508.64, ticks 470, 490, 530, 550 only, so μ is not given away), 490 marked, the left tail labelled "1%", "μ = ?" with a dashed violet arrow pointing right, chip "σ = 8", the PET bottle with its 490 line, "only 1% under 490 mL", chip "Next: finding μ or σ from a probability". s12 opens on it exactly.

## Departures from the design (with reasons)
- **Table label:** the table is captioned "this table: P(Z < z), z ≥ 0" only; the design's "HSC-style table (as in the NESA 2024 sample examination)" label is not used, following the maths check (the reference sheet has no z table).
- **Tables:** kit `ZTable` at 26 to 34 px (not 34 px with a 52 px lift): scene 5 shows rows 1.0 to 1.7 and columns .00 to .05 so entries fit; scene 7 rows 1.5 to 1.7, columns .00 to .07; scene 8 rows 3.1 to 3.3. The framed result rows carry the 40 to 52 px values.
- **Scene 2:** kit `SigmaRuler` readouts are "1.25 σ" and "1.6 σ" with the division ("5 cm ÷ 4 cm", "4 cm ÷ 2.5 cm") as a violet tag beside each ruler (the long label ran off the frame).
- **Scene 3:** one plot whose window and both curves morph together (slide: axis relabels x − μ; squeeze: axis relabels z), with live tail readouts that stay at 0.1056 and 0.0548; the small non-standard ghost is a bare dashed bell.
- **Scene 4:** two score cards (Alex, Blake) above kit `ScoreCompare`; Blake's row appears on his cue; a "count standard deviations: z = (x − μ)/σ" card fills the right column from the start.
- **Scenes 6 to 8:** the general formula row "z = (x − μ)/σ" is on screen from the scene start and extends with the numbers on cue (avoids empty openings); the scene 8 tail zoom is an inset under the bell.
- **Scene 9:** two coded icons (complement split, mirrored tail) and the perch badge with "z = 1.6".
- **Scene 10:** the picture slot is two blank BoxCards ("English", "Mathematics") over one empty axis with σ ticks, below the card, not inside it.

## Cue check
All 144 phrases resolve. Repeated phrases named: "standard deviation" (2), "sigmas" (1, 2), "two five" (2 in scene 2; 1 in scene 8), "zero" (1), "one" (1), "which is one" (1), "to the left" (1), "four four" (1), "zero five six" (1), "table gives" (2), "four eight" (1), "minus one point two five" (1), "zero six" (1), "one point five" (1), "Zed is" (1), "six eight" (1), "by sigma" (1).

## Live readouts and simulations
- Scene 2: σ rulers filling in violet steps with live counts.
- Scene 3: both bells sliding and squeezing onto N(0, 1) with live, unchanging tail areas.
- Scene 5: kit `ZSlider` 0 → 1.25 (snapper sprite) → 1.6 (perch sprite) with live z and P(Z > z), linked to table highlights.
- Scene 6: the mirrored tail lifting onto +1.25.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s11` (final): result below. Earlier runs: 6 failures (scenes 4 to 8 and 11 mostly empty at their openings), then 1 (scene 4), fixed by showing each scene's table, givens and formula row from the start, the score cards, and the feedback formula row.

Final result: **PASS WITH WARNINGS (0 failures, 4 warnings)**: sparse frames at 54 to 56% (scenes 3, 4 and 11); few pictures (3 of 15 teaching frames: the fish plates are under 250 px tall).

## Ink check (line through text)
Not run (stills lock held for root's renders). Fixed by eye from stills: colliding ticks (484/490, −2/−1.25, 49.5/49.7, 474/484), the gap labels under the axis label, the score-row labels, the fish over the curve in scene 3, the scene 7 tag over the table.

## Check at playback speed
- Scene 1: boards, σ marks, the pulse on "compared", the chip move on "catch".
- Scene 2: the rulers filling during "five over four" and "four over two point five".
- Scene 3: the slide on "Subtracting the mean" and the squeeze on "Dividing by sigma"; readouts must not move.
- Scene 5: the slider stops at 1.25 on "For one point two five" and moves to 1.6 on "At one point six"; table highlight timing.
- Scene 6: the mirror lift on "the snapper's tail".

## Honest grade
**A** by the brief's rules, with soft spots root may weigh: table cells are 26 to 30 px rather than 34 px; fish plates are under 250 px tall, so the checker counts few "pictures"; three sheet frames sit in the 54 to 56% sparse band.
