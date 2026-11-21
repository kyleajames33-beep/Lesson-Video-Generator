# chem-y11-m2-v04 build notes (built on the measured narration)

Builder: Claude build agent, 21 to 22 November 2026. Explainer id `Explainer-chem-y11-m2-v04`, export `config_y11c_m2v04` (19 scenes, 14,481 frames, about 483 s; key notes 1,350 frames = 45 s, measured; `Math.max(1200, ...)` kept). Sheet: `work/quality-audit/fixed/chem-y11-m2-v04-sheet.jpg`. No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds for all 19 scenes: 13.5 to 17.6 characters per second (lowest: attempt-1 13.5). None under 10, so no run-on take.

## Files
`src/explainer/lessons/chem-y11-m2-v04/`:
- `common.ts`: lookups, plates (alpha boxes measured; burette bore, liquid levels and the bath flask read off the plates) and the one data table: molar volumes (24.79 L mol^-1 data sheet; 30.6 L mol^-1 at the bath), the element run (0.042 g; 48.50 to 6.30 mL; the escaped-gas run 38.0 mL; the 0.035 to 0.045 g window), the compound run (0.272 g; 140 mL), the candidates (molar masses computed from the data-sheet values), attempt 1 and the class notebook, word for word. Every value on screen is computed or formatted from it; every run is tagged "illustrative data".
- `parts.tsx`: V03's parts re-exported; new: `GasBox` (a particle-box run from `src/explainer/sims/particle-box.ts`, drawn as H2, O2 or CO2 molecules, with the run's piston as the right wall), `Burette` (the painted start plate with the painted end plate revealed from the tap end down to the live liquid level, rising bubbles, optional escaping bubbles), `Display`, `Notebook`.
- `s1.tsx` (1 to 5), `s2.tsx` (6 to 12), `s3.tsx` (13 to 19), `scenes.tsx`, `assets.ts` (adds V03's and V02's plates for the opening), `config.ts`.
- Registry: import and entry after `config_y11c_m2v03` (one scripted edit, re-read first, LF kept).
- Typecheck clean; config loads in node (every cue resolves).

## Plates
All design-named plates exist; uniform scale only: `y11c-burette-upturned-start-v1` and `-end-v1` (same registration), `y11c-flask-foil-cap-v1`, `y11c-flask-water-bath-liquid-v1` and `-vapour-v1`, `m6-zinc-acid-v1`, `y11c-top-pan-balance-v1`, `p01-mg-ribbon-v1`, `m6-measuring-cylinder-v1` (coded water fill). None missing.

## Simulations
- Scene 2: three particle-box runs (10 particles each; H2, O2 and CO2 radii and masses differ). The H2 box's temperature and volume timelines rise on "warm a gas" (it expands, tinted warm); the CO2 box's volume falls on "Squeeze it".
- Scene 4: the collection. Gas volume rises from 0 to 42.2 mL between "As the acid" and "millilitres"; the three readouts are computed from it every frame: volume, n = V ÷ 24.79 L mol^-1 and "MM if you stopped now = 0.042 ÷ n" (247.9 at 4.2 mL, falling to 24.7). The burette's end plate is revealed down to the matching liquid level; a slate bracket marks the "H2 gas" space.
- Scene 7 replays the collection with escaping bubbles; it stops at 38.0 mL, 1.533 × 10^-3 mol and 27.4 g mol^-1 (rose).

## Opening-frame match (M2 V03)
The hook redraws V03's final frame from V03's exported constants (`EQ17`, `BAL17`, `RIB17`, `FL17`, `TAGS17`, `NEXT17`) and covers its first 34 frames with V03's own `SceneHandoff`, frozen at V03's `dur('handoff') - 1` and fading out, so frame 0 is V03's final frame by construction (V03 was built here, so the two cannot drift: V04 reads the same constants). The chip and the small bridge fade on "Molar mass equals"; "easy: a balance" rings the m tag on "it to us"; a rose ring and "the hard part" mark n on "The hard part"; the "?" gives way to a gas box ("volume → moles?") on "If the substance"; the heading becomes "Measuring molar mass" on "But there's a trick".

## Final frame (scene 18 `handoff`), for the chem-y11-ws-v04 builder
Exported from `s3.tsx`: `SceneHandoff`, `NEXT18`, `NB18` ({x 96, y 190, w 1340, size 38}); the notebook lines are `NOTEBOOK` in `common.ts` (word for word as the design's final frame).
- Heading "One run is one number"; the "MM = m ÷ n" strip at the top centre (x 900 to 1200, y 26 to 100).
- The ruled notebook card (x 96, y 190, 1340 wide), head "Mg + HCl, gas in upturned burette (25 °C, 100 kPa)" and the five run lines in hand lettering (38 px); rose rings round "12 mg" (run 1) and "0.035," (run 4); a rose underline under "Ribbon floated, some bubbles escaped!" (run 3); rose hand tag "mixed units, missing labels, bubbles escaped" under the card.
- Right: the upturned burette end plate (h 500, centred x 1640, top y 190) and the teal chip "one run: 24.7 g mol^-1".
- Bottom: the navy "Next" box (x 96, y 820, 1728 by 100): "Next: How do raw chemistry readings become a usable table or graph?".

## Departures from the design (with reasons)
- Series pattern kept (Card, QTag, PauseHoldR, Givens, Framed, Chip); V02's text layer gives correct subscripts (N_A, H_2, m_1).
- No course labels: "worked out with the gas laws later in this module" is drawn as "from the gas laws: a later video".
- Scene 1: the coded gas syringe is a coded gas box (a particle-box run), not a syringe outline (no coded icons of real things).
- Scene 2: no magnifier; the "mostly empty space" idea is a pen ring round the O2 box with the tag (the boxes already show the spacing).
- Scene 3: an opening line "first, an element: magnesium" fills the right until the equation writes; the ribbon is on the balance from the first frame with the display "? g" until "then weighed".
- Scene 4: the clamp is not moved by code (burette and beaker are one plate); the tag reads "levels matched before reading" as a method note. The gas space is the painted end plate revealed to the live level, with a slate "H2 gas" bracket.
- Scene 6: the question is written under the readouts; the 3 s ring sits at the right.
- Scene 7: the oxide skin is a small cross-section model labelled "model, not to scale" (no magnifier on the ribbon).
- Scene 8: the windows are drawn on two number lines (mass and molar mass) rather than brackets; the 0.001 g window uses author note d (0.041 to 0.043 g, 24.1 to 25.3 g mol^-1); "this run: 24.7" is marked from the first frame.
- Scene 9: the method is a numbered step list written on cue; the bath plate slides in on "an unknown liquid" (the right half was bare for 12 s); the gloss on the pinhole sits at the bottom.
- Scene 10: the next steps (4 to 6) are written on cue above the rows; the bath stays at the right until the cylinder comes in.
- Scene 11: the candidate scale is on the board from the first frame; the marker slides to 59.5 on "Of the likely liquids".
- Scene 13: the compare table's cells are on the board from the first frame; pen rings mark the shared row, "n(Mg) = n(H2)" and "no equation needed" on their cues.
- Question cards: text 44 px (the design says 38 px; the cards had bare space).

## Cue check
All cues resolve. Repeated phrases: scene 4 "liquid down" (not "upside down", which fired the tag early in the first pass); scene 5 "seven grams per mole" (the first "twenty-four point seven" is "twenty-four point seven nine" and framed the answer early in the first pass); scene 13 "divide" #1 and #2 and "Weigh it" (not "Weigh the substance"). Countdowns: 3 s ring from "too low"; 10 s rings full from "Pause here".

## Dense 3 s sweeps
Two full sweeps (frames 0, 90, ... and 45, 135, ..., scale 0.5, 161 stills each) montaged and read, plus a first scene-sample pass. Defects found and fixed: the answer framed early in scene 5 and the tag early in scene 4 (wrong occurrences); the conditions ring over the MM strip; "cleaned with emery paper" over the ribbon tile; the balance label under the ribbon tile in scene 8; the 3 s ring label under the question text; "escaped gas" over the emery chip; the "volatile" chip under the enlarged flask; the bath label under the pinhole gloss; the "m too big" chain over the bath plate; the notebook underline running past the card; sparse openings and lower halves in scenes 2, 3, 6, 9, 10, 11, 13 and both feedback scenes (pictures enlarged, steps and scales added on screen from the first frame, rows spread). No faint or ghosted main visual: plates, gas boxes, number lines and the table are solid; partial opacities are fades on cue, the plate cross-fades and the moving bubbles.

## Grade checker
Final run on the final code: **PASS WITH WARNINGS: 0 failures, 1 warning** (dense key notes, 495 characters on the notes screen including the memory card; the five bullets are about 330). Report: `out/explainer/Explainer-chem-y11-m2-v04/grade/Explainer-chem-y11-m2-v04-grade.md`. Sheet copied to `work/quality-audit/fixed/chem-y11-m2-v04-sheet.jpg`.

## Builder's sheet grade
A, with softer frames root may want to look at: the weak-link frame before "The real mass" (number lines drawn, windows not yet), the compound-setup frame (two of three steps written) and the reweigh frame before "zero point two seven two". Each still carries a painted plate and on-screen steps; none is under the 60% bare line.

## Things to check at playback speed
The gas boxes (the warmed box expanding, the squeezed box shrinking); the collection (bubbles rising, the level dropping, the MM readout falling from about 1000 to 24.7); the escape replay; the windows narrowing in scene 8; vapour wisps and air dots leaving the pinhole; the candidate marker sliding to 59.5; key notes cross-fade to the final frame.
