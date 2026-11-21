# chem-y11-m2-v02 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m2-v02`, export `config_y11c_m2v02` (19 scenes, 13,430 frames, about 448 s; key notes 1,350 frames = 45 s, measured; `Math.max(1200, ...)` kept in `config.ts`). Sheet: `work/quality-audit/fixed/chem-y11-m2-v02-sheet.jpg`. No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds (voiceover startFrame to endFrame) for all 19 scenes: 11.7 to 17.6 characters per second (lowest: attempt-2 11.7, prediction 12.4, memory-line 12.5). None under 10, so no run-on take.

## Files
`src/explainer/lessons/chem-y11-m2-v02/`:
- `common.ts`: measured lookups, holds, plates (alpha boxes measured) and the one data table (`NA`, `D`, `R`, `YEARS`): N_A, the carbon atom's mass, the counting clock, the slider stops, both worked examples, the naming cases and both attempts. Every on-screen number is formatted from it (`sci`, `fix`).
- `text.tsx`: the M2 V06 text parts (Sx, Rich, Write, Chip, Framed, Readout, Givens, TaskStrip) with one markup addition: a letter after "_" is a subscript (N_A, A_r, M_r). The shared markup only subscripted digits, so "N_A" printed literally.
- `parts.tsx`: M1 V01, M1 V06 and M2 V06 parts re-exported read-only; new coded abstract parts: counting boxes, `MoleTile` (with part tiles), the N to n `Bridge` (and `SmallBridge` kept top right from scene 6), `NSlider`, `Dial`, `PowStrip`, `Beam`, ball models (CO2, NaCl lattice, CaCl2), `MemoryLine`, `Reveal`.
- `hook.tsx` (scene 1), `s1.tsx` (2 to 6), `s2.tsx` (7 to 13), `s3.tsx` (14 to 19), `scenes.tsx`, `assets.ts` (adds M2 V01's plates for the opening), `config.ts`.
- `src/explainer/registry.ts`: import and entry after `config_y11c_m2v01` (one scripted edit, file re-read first, LF kept).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (every cue resolves).

## Plates
All design-named plates exist; uniform scale only: `y11c-top-pan-balance-v1`, `p01-mg-ribbon-v1`, `m6-measuring-cylinder-v1` (coded water fill inside the glass), `y11c-dry-ice-v1`, `y11c-halite-crystal-v1`, `c4-icon-carbon-lump-v1`, `y11c-gas-jar-v1`, `y11c-calcium-chloride-v1`. Added (existing): `y11c-beaker-water-36ml-v1` as the water sample in worked example 2. None missing.

## Simulation and live readouts
- Scene 4: the counting dial with live "particles counted" and "time taken" readouts (one per second, then a log fast-forward to one mole; the years readout ends at "≈ 1.9 × 10^16 years", from N_A ÷ 3.156 × 10^7).
- Scene 6: the n slider sweeps 0, 1, 2, 2.5 mol while mole tiles drop and N = n × N_A ticks live; then runs back to 0.50 mol from N = 3.011 × 10^23. Both readouts are computed from the same n every frame, so they always agree.

## Opening-frame match (M2 V01)
Built last, as asked. M2 V01's notes appeared at 23:00 without the promised result line, but its grade report (`out/explainer/Explainer-chem-y11-m2-v01/grade/`, 23:05) reads PASS WITH WARNINGS and none of its source files changed after 23:02, so its final frame is settled. The hook (`hook.tsx`) redraws V01's final frame from V01's exported parts (read-only: `G18`, `LENS18`, `NEXT18`, `EQ`, `EqLine`, `terms`) and covers its first 34 frames with V01's own `SceneHandoff`, frozen at V01's `dur('handoff') - 1` and fading out. Stills at frames 0, 16 and 40 are identical to V01's final frame (chip, equation with amber coefficients, ratio row, balance and ribbon at 0.24 g, magnifier, "how many atoms?"), so there is no jump. Then: rings on the ratio row ("So two magnesium") and the display ("zero point two four"); the magnifier packs tighter and its atoms spill past the rim ("too many to count") on "magnesium atoms"; the equation fades and "1 carbon atom: ≈ 2 × 10^-23 g" writes on "a mass of about"; the ribbon lifts off and one carbon atom (drawn far too big to see) drops onto the pan as the display reads 0.00 g ("too small to weigh"); the heading writes on "see". If V01's final frame changes later, only `hook.tsx` needs a re-check (it reads V01's exports).

## Departures from the design (with reasons)
- Series pattern kept (Card, QTag, PauseHoldR, Givens, Framed, Chip), as in M1 V11 to V16; text goes through `text.tsx` so N_A prints with a subscript.
- Scene 1: the equation and its ratio row fade on "one carbon atom" so the carbon row can sit at the top centre (it collided with the equation).
- Scene 2: the balance fades to a top-right thumbnail (sliding it crossed the counting box); a "counting unit: a fixed number" chip fills the middle until the big-things box arrives; the five-dozen row writes on "sixty" and frames on "each one".
- Scene 3: a "a dozen: 12 things / a mole: 6.022 × 10^23 things" panel holds the lower right until the chemical-amount card arrives on "chemical amount" (the mole box then shrinks to make room); the N_A value writes with its name.
- Scene 4: the dial and readouts shrink to the upper left on "universe" (not "tablespoon") so the universe bars have room; the cylinder fill is drawn at a small level (no number spoken or shown).
- Scene 5: the counting-to-weighing link (dial and small balance) and "Why 6.022 × 10^23?" are on the board from the first frame (checker failure: 75% bare).
- Scene 6: both bridge boxes from the first frame, ringed on "Capital N" and "Small n" (checker failure: 60% bare); "two numbers to keep apart" holds the middle until the equation; a tile legend at the lower left; the unit line sits in the bridge gap; the n readout shows two decimals so N always agrees with it.
- Scene 8: the dozen boxes stay until "A mole is a count"; the boxes sit on the beam pans.
- Scenes 9 and 10: painted carbon lump and beaker of water at the top right; givens and rule on the board from the first frame; "N = ? carbon atoms" and "n = ? mol" hold the working column until the rows write; a "last time × N_A, now ÷ N_A" panel holds the lower left in scene 10 until the tiles arrive.
- Scene 11: "one particle can contain others" writes while it is spoken; dry ice and lens enlarged.
- Scene 12: the painted balance with the ribbon sits at the lower left from "in the lab"; the equation is larger.
- Scene 13: the memory card's first line writes on "Here's the line" (an empty card fails A).
- Feedback 1: a "particles → moles: divide" tag; the closing tag reads "multiplying: an impossible answer". Feedback 2: "2 chloride ions per unit" in words (the hand font shows no superscript minus); "N(Cl^-) = ?" holds the working column until the first row.
- Handoff: a "a count chemists can handle" mole tile holds the right side until "we don't count", then clears, so the final frame matches the design.

## Cue check
All cues resolve against the measured word timings. Repeated phrases: hook "magnesium atoms" #2 (the spoken "billions of magnesium atoms"); scene 2 "counting unit" #1; scene 3 "each mole" (the bold "mole" is the third spoken "mole"), "per mole" for the ring; scene 9 "carbon atoms" #2 for the framed answer; scene 10 "water molecules" #2; scene 11 "molecules" #1. Countdowns: 3 s ring from "Which contains"; 10 s rings full from "Pause here".

## Dense 3 s sweeps
Two full sweeps (frames 0, 90, ... and 45, 135, ..., scale 0.5, 150 and 149 stills) montaged and read, plus two scene-sample passes. Defects found and fixed: "N_A" printing literally; the carbon row over the equation; the balance sliding across the counting box; dots falling through the box label; the bracket striking the "1 dozen = 12" labels; empty amber and violet cards waiting for cues; "only this much!" over the strip label; the unit ring over the superscript; "start from N" over the slider's "mol"; a dashed empty tray; half-tile labels wider than the tile; a lone tick left after its chips faded; the "same number" bracket over a box label; band text overflowing its box; the CO2 framed result floating mid-board; the NaCl connector lines; the scene 12 bracket through "1 mol"; case-card labels wider than their cards; "magnesium ribbon" under the Next chip; the "? mol" ring over "="; the counting-unit chip under the count; the lab balance over "2 mol"; sparse openings or lower halves in scenes 2 to 7, 9 to 12 and both feedback scenes. No faint or ghosted main visual: plates, boxes, tiles, bridge, beam and dial are solid; partial opacities are fades on cue and the opening overlay.

## Grade checker
First run: FAIL (2 failures: scene 5 75% bare, scene 6 60% bare). Final run on the final code: **PASS WITH WARNINGS: 0 failures, 3 warnings** (scene 5 opening 58% bare; the lab balance display "0.24 g" at 21 px in scene 12, a picture detail; the attempt 1 card 56% bare). Report: `out/explainer/Explainer-chem-y11-m2-v02/grade/Explainer-chem-y11-m2-v02-grade.md`. Sheet copied to `work/quality-audit/fixed/chem-y11-m2-v02-sheet.jpg`.

## Builder's sheet grade
A, with two softer frames: the "Why this number?" opening (58% bare) and the attempt 1 card. Every teaching frame carries a painted plate or a live readout; worked examples have framed answers and crossed slips; the memory card is framed; five short notes and a 45 s hold.

## Things to check at playback speed
The opening (V01's frame holding, then the rings and the magnifier spill); dots dropping into the dozen box with the live count; the mole box opening; the counting dial fast-forward; the slider sweep with tiles dropping and N ticking, then running back; the beam tipping; the CO2 molecule opening; particles swelling into mole tiles in scene 12; key notes cross-fading to the final frame.

## Final frame (scene 18 `handoff`), for the chem-y11-m2-v03 builder
Exported from `src/explainer/lessons/chem-y11-m2-v02/s3.tsx`: `SceneHandoff`, `NEXT18`, `NA_CARD18` ({x 96, y 200, w 900, h 120}), `ASK18` ({x 1000, y 680}); `BAL1` and `BalRibbon` from `s1.tsx`. M2 V03 opens on it (built here, `chem-y11-m2-v03/s1.tsx`).
- Heading "The mole: counting particles" (hand, 60 px, x 96, y 150); the small N to n bridge at the top right (x 1010 to 1824, y 22 to 104).
- Violet card (x 96, y 200, 900 by 120): "1 mol = 6.022 × 10^23 particles (N_A)" (46 px).
- Left: the top-pan balance (`balGeo(96, 420, 440)`) with the ribbon plate on the pan, display "0.24 g".
- Right: hand lines "in the lab: we don't count particles," and "we weigh them" (48 px, x 1000, y 440 and 510) with a pen arrow to the ribbon; "n(Mg) = ? mol" (72 px, amber, x 1000, y 680) with an amber pen ring round "? mol".
- Bottom: the navy "Next" box (x 96, y 790, 1728 by 110): "Next: How does molar mass turn a measured mass into moles?" (48 px).
- The early "a count chemists can handle" tile on the right fades before "we don't count", so the final frame is as above.
