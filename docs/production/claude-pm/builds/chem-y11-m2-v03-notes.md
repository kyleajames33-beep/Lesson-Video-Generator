# chem-y11-m2-v03 build notes (built on the measured narration)

Builder: Claude build agent, 21 to 22 November 2026. Explainer id `Explainer-chem-y11-m2-v03`, export `config_y11c_m2v03` (18 scenes, 13,383 frames, about 446 s; key notes 1,350 frames = 45 s, measured; `Math.max(1200, ...)` kept). Sheet: `work/quality-audit/fixed/chem-y11-m2-v03-sheet.jpg`. No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds for all 18 scenes: 11.8 to 17.6 characters per second (lowest: attempt-2 11.8). None under 10, so no run-on take.

## Files
`src/explainer/lessons/chem-y11-m2-v03/`:
- `common.ts`: lookups, plates (alpha boxes measured) and the one data table: HSC data-sheet relative atomic masses `AR`, every molar mass `MM` computed from them, and every result `RES` (atom masses, water, prediction, NaCl, ribbon, both attempts and their slips). Screen strings are formatted from it.
- `parts.tsx`: V02's parts (and its text layer with letter subscripts) re-exported; new coded abstract parts: `Heap` (mole of atoms), `Cell` (periodic cell), `ATile` (atom tile with its data-sheet value), `LotsBar` (molar-mass lots laid along a mass bar), `Chain` (mass, ÷ MM, n, × N_A, N).
- `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `assets.ts` (adds V02's plates for the opening), `config.ts`.
- Registry: import and entry after `config_y11c_m2v02` (one scripted edit, re-read first, LF kept).
- Typecheck clean (scoped tsconfig); config loads in node (every cue resolves).

## Plates
All design-named plates exist; uniform scale only: `y11c-top-pan-balance-v1`, `p01-mg-ribbon-v1`, `m6-conical-flask-v1` (coded liquid layer), `y11c-gas-jar-v2`, `y11c-halite-crystal-v1`, `y11c-dry-ice-v1`, `y11c-watch-glass-salt-v1`. Added (existing): `y11c-sample-magnesium-ribbon-v1` (a larger coil on a watch glass, as the real mole of magnesium on the balance), `y11c-beaker-water-36ml-v1` (water), `y11c-copper-wire-bent-v1` (copper, prediction and scene 9). None missing.

## Simulation
Scene 3 is the atom-count sweep: atoms in each pile go from 1 to 6.022 × 10^23 (log scale) while the carbon and magnesium mass readouts climb together from 1.99 × 10^-23 g and 4.04 × 10^-23 g to 12.01 g and 24.31 g, and the ratio readout stays 2.02; heaps grow on the beam as the count rises. Scene 6's lots counter counts the 18.02 g lots as they land along the 54 g bar.

## Opening-frame match (M2 V02)
The hook redraws V02's final frame from V02's exported parts (`NA_CARD18`, `ASK18`, `NEXT18`, `BAL1`) and covers its first 34 frames with V02's own `SceneHandoff`, frozen at V02's `dur('handoff') - 1` and fading out, so frame 0 is V02's final frame by construction. The chip fades on "This ribbon"; the heap of magnesium atoms ("1 mol of Mg atoms: ? g") forms on "magnesium atoms"; the heading becomes "Molar mass: from grams to moles" on "molar mass".

## Final frame (scene 17 `handoff`), for the chem-y11-m2-v04 builder (built here)
Exported from `s3.tsx`: `SceneHandoff`, `NEXT17`, `EQ17` ({x 960, y 440, size 130}), `BAL17` ({x 600, y 640, h 280}), `RIB17` ({x 100, y 560, w 400}), `FL17` ({cx 1660, y 400, w 280}), `TAGS17` (m tag (600, 600), its tick (880, 582), n tag (1010, 600), "?" (1250, 860, 200 px)).
- Heading "When you don't know the formula"; small N to n bridge top right; the navy "Next" box (x 96, y 190, 1300 by 84): "Next: How can a practical determine molar mass?".
- "MM = m ÷ n" (130 px, MM teal, m navy, n amber) centred at (960, 440) with an amber pen ring round "n".
- "m: weigh it" (navy hand, 52 px) with a green tick and the balance below it (display "? g"); "n: find it another way?" (amber hand) with a large amber "?".
- Left: the ribbon plate, "an element", "MM = ?" (teal); right: the conical flask with a pale coded liquid layer, "an unknown liquid", "MM = ?".

## Departures from the design (with reasons)
- Series pattern kept (Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`, as in M1 V11 to V16 and M2 V02.
- Text: V02's text layer (letter subscripts, so N_A and A_r print correctly) is used throughout.
- Scene 2: the real mole of magnesium is the existing coil-on-watch-glass plate (`y11c-sample-magnesium-ribbon-v1`), not a scaled-up `p01` tile; it swaps in on "one mole of magnesium atoms" and the display ticks to 24.31 g by "grams". The "a real mole of Mg" tag sits under the balance (an arrow to the heap crossed the beam).
- Scene 4: "Module 1 used 1.0 and 16.0" is drawn as "an earlier video used 1.0 and 16.0" (no course labels on screen); the balance with a mole of magnesium stays at the left as the picture of "the mass of one mole".
- Scene 5: three columns (water, oxygen gas, calcium hydroxide) with tiles, rows and framed results, and existing plates under each (beaker of water, gas jar, watch glass of white solid); the formula names sit beside the formulae. The recalled rule "last time: count every atom" stands in the middle until the water tiles arrive.
- Scene 6: the beaker of water stands at the lower left; the lots counter shows from the first frame; the equation strip with glosses sits top right.
- Scene 8 and 9: painted magnesium coil and copper wire beside the 10 g bars; the question is written under the bars; molar-mass segments drawn to scale (copper's runs off the screen, marked so).
- Scene 10: the cue for the m row is "five zero times" (the first "zero point five zero" is in the question and fired early in the first pass).
- Scene 11: the chain strip's three boxes stand from the first frame; arrows and the "moles in the middle" ring arrive on cue.
- Scene 17 (final frame): enlarged equation, balance, ribbon and flask (the first build left large bare areas); positions exported as constants so V04's redraw matches.
- Attempt cards: question text 50 px (the design says 38 px; the cards had large bare areas).

## Cue check
All cues resolve against the measured word timings. Repeated phrases: scene 7 "molecules" #1 and #2; scene 10 "five zero times" (not the question's "zero point five zero"); feedback 1 "mole" #1 and #2; scene 2 "zero one grams" and "three one grams" (the two bold "grams", not the rule card's "in grams"). Countdowns: 3 s ring from "Which contains"; 10 s rings full from "Pause here".

## Dense 3 s sweeps
Two full sweeps (one still every 90 frames at frames 0, 90, ... and then 45, 135, ..., scale 0.5, 149 stills each), montaged and read, plus two earlier scene-sample passes. Defects found and fixed: the scene 10 row firing on the wrong "zero point five zero"; "of atoms" and "g mol^-1" pen rings off their words; the balance reading 0.00 g with the coil on the pan; the scene 4 relative-mass rows over the molar-mass rows; the "sodium chloride (rock salt)" label off the left edge (checker failure); the ribbon-chain rows over the balance and the "answer to the opening" tag off the right edge; empty teal cards at the openings of scenes 2 and 4 and an empty memory card at the start of scene 12; the gas-jar label under a framed result; sparse lower halves in scenes 5, 6, 7, 10, 11, both feedback scenes and the final frame (pictures enlarged, rows spread, scales shown from the first frame). No faint or ghosted main visual: plates, beams, heaps, bars and tiles are solid; partial opacities are fades on cue and the plate cross-fades.

## Grade checker
Final run on the final code: **PASS: 0 failures, 0 warnings** (`out/explainer/Explainer-chem-y11-m2-v03/grade/Explainer-chem-y11-m2-v03-grade.md`). Sheet copied to `work/quality-audit/fixed/chem-y11-m2-v03-sheet.jpg`.

## Builder's sheet grade
A, with two softer frames root may want to look at: the compounds frame (scene 5, early, before the oxygen and calcium hydroxide tiles arrive the middle of the right two columns is bare) and the ribbon-chain frame (scene 11 before "Times N A", the lower right is quiet). Every other frame carries a painted plate or the live sweep, the worked examples are in the calculation layout with framed answers and crossed slips, the memory card is framed and the notes are five short bullets with a 45 s hold.

## Things to check at playback speed
The atom-count sweep (scene 3: both mass readouts climbing together while the ratio holds); the lots landing one by one with the counter (scene 6); the coil swap and display tick (scene 2); the dot fields filling the bars (scene 9); the equation turning from n = m ÷ MM to MM = m ÷ n (scene 17); key notes cross-fade to the final frame.
