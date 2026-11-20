# chem-y11-m1-v13 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m1-v13`, export `config_y11c_m1v13` (17 scenes, 13,444 frames, about 448 s; key notes 1,350 frames = 45 s, measured). Sheet: `work/quality-audit/fixed/chem-y11-m1-v13-sheet.jpg` (copy of the grade sheet; no frame stamps). No MP4 built. Narration unchanged.

## Files
`src/explainer/lessons/chem-y11-m1-v13/`:
- `common.ts`: measured lesson lookups, response holds, the six plates (alpha boxes as already measured in V12 and V01), and the radius data every ring and bar is drawn from (Cordero 2008 covalent radii: Na to Cl, Li, K, Rb, Cs; Shannon 1976 ionic radii: Na+, Cl-, O2-, F-, Mg2+, Al3+ shown as 54), core charge (Z minus inner electrons), `stepAt` for the stepper.
- `parts.tsx`: V12 parts re-exported; new: `RAtom` (nucleus with its charge, rings, electron dots; outer ring radius from the pm value; shielding band, outer glow, a leaving electron, arriving electrons, per-ring fade), `Pull` (amber arrow, optional thinned outer part), `Ruler` (teal nucleus-to-ring ruler), `HBar` and `VBar` (radius bars), `Readouts` (the stepper's four readouts), `DashRing`, `Repel`.
- `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 11), `s3.tsx` (12 to 17), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: import and entry added after V12 (one scripted edit, file re-read first).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (all cues resolve).

## Plates
All design-named plates exist and are drawn at uniform scale (never stretched): `y11c-sample-sodium-oil-v1.png`, `y11c-gas-jar-chlorine-v1.png`, `y11c-watch-glass-salt-v1.png`, `y11c-sample-magnesium-ribbon-v1.png`, `y11c-sample-sulfur-v1.png`, `y11c-gas-jar-v1.png`. None missing.

## Simulation
No engine in `src/explainer/sims/` covers atomic radius (README read). The design's "radius stepper" is coded from the data table: readouts and rings read the same `P3`, `G1` and `ISO` records, so a readout, ring and bar can never disagree. Scene 4 steps Na to Cl (protons 11 to 17, inner electrons 10, core charge +1 to +7, radius 166 to 102) from "So the core" to "plus seven"; scene 7 steps Li, Na, K on "Potassium", "one more occupied", "one above" (core charge holds +1); scene 10 steps the five ions on their names, again on "from eight", then on the contraction (radius readout 140, 133, 102, 72, 54).

## Opening-frame match (V12 v2)
Scene 1 shows V12's `SceneHandoff` itself, frozen on its last frame (`<Freeze frame={v12dur('conclusion-handoff') - 1}>`, imported read-only from `chem-y11-m1-v12/s3.tsx`), so frame 0 is V12's final frame as rendered in v2 (block tints at 65%, the "Next" chip under the heading). Under it, V13's own copy of that board (V12's `GF` grid, tint 0.65, the lit cells, the row and column outlines, the dashed "radius?" circles, labels and chip) is identical at the start; the frozen frame fades out over frames 4 to 30 with no visible change. The board then morphs (frames 34 to 76): the grid shrinks to a top-right locator (f rows fade; only Li, Na, K and Cl keep symbols, at 22 px), the dashed circles fade and the three V12 shell models grow into to-scale V13 atoms. Checked on still 0 against V12's final frame: match. V12 was not edited.

## Final frame (scene 16), for the chem-y11-m1-v14 builder
Exported read-only: `SceneHandoff`, `NA16`, `CL16`, `CL16B`, `RNA16`, `RCL16` from `src/explainer/lessons/chem-y11-m1-v13/s3.tsx`. The key notes cross-fade back to this frame (frozen at `dur('handoff') - 1`), so open V14 with `<Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze>` as V12 and V13 do.
- Heading "Atomic radius trends" (hand, 60 px, x 96, y 150). Chip under it (top y 178, x 96, 38 px, navy): "Next: How do first ionisation energy and electronegativity follow atomic structure?".
- Sodium: centre (560, 570), outer ring 210 px (166 pm at 1.265 px per pm), rings at 0.45, 0.72, 1.0 of that, red nucleus r 36 labelled "11+", shells 2, 8, 1. The outer electron sits at -135 degrees, nudged about 27 px outward; a thin amber pull arrow runs from it to the nucleus; an orange pen arrow runs up-left from it with the orange hand tag "energy?" above (about x 290, y 280). Teal "Na  166 pm" (44 px) centred at (560, 840).
- Chlorine: centre (1150, 570), outer ring 129 px (102 pm), nucleus "17+", shells 2, 8, 7, outer electrons from -0.13 rad, seven thick amber pull arrows (width 8). Teal "Cl  102 pm" centred at (1150, 759).
- Second chlorine: centre (1390, 570), same model, outer electrons from pi + 0.13, so one electron of each atom meets near (1270, 570): the shared pair, ringed by an amber pen ring (rx 30, ry 42). Amber hand tag "pull?" (44 px) at (1430, 407).
- Cleared before the chip: the two grip tags, the two summary lines and the sodium and chlorine thumbnails. Nothing below y 950.

## Departures from the design (with reasons)
- Series pattern kept: like V11 and V12 this lesson uses the Y11 M1 part chain (Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`, so it matches the series look.
- Scene 1: the samples arrive at frame 84, after the morph, not on "Sodium and chlorine sit in the same row" (the lower half was empty for 5 s; dense sweep). The periodic-cross arrows are drawn on the locator on "across a period" and "down a group" (the scene ends 22 frames after "group"), with "across: smaller" and "down: larger" under the locator. A "chlorine has: +6 protons, +6 electrons" block lands on its words. One scale (0.8 px per pm) for all four atoms, so Li, Na, K and Cl compare truly. No pen bracket between the Na and Cl widths: the teal rulers and tags carry the comparison.
- Scene 2: the ruler draws nucleus to nucleus on "measure the distance", the half and its bracket on "take half"; the unit box arrives on "A picometre".
- Scene 3: the sodium sample sits at the right, below the rule rows (it filled the lower right before the core-charge rows); "+1" is written next to the outer electron and framed in the working row.
- Scene 4: each strip atom contracts and its bar fills as the stepper reaches it (from "So the core" to "plus seven"), not all on "smaller" (the scene ends 24 frames after "smaller"); "radius falls" lands on "draws the". Empty bar slots are equal height so they do not show the answer early. Core charges are amber chips under each atom; the nucleus keeps its proton number. The transition-metal tag is left out (no room; not spoken).
- Scene 5: the misconception chip is struck on "doesn't mean" (the last word "atom" is 18 frames before the scene ends).
- Scene 7: the atoms sit in a row (Li, Na, K left to right) rather than down a column (vertical room); all three are on screen from the first frame and each glows and gains its "+1 shell" tag on its cue.
- Scene 8: both sentence frames are on screen from the first frame (a 22 s recap scene; the lower card was empty for 15 s otherwise); the amber underlines arrive on their spoken key words.
- Scene 9: the bars for Cl and Cl- land on "spread out" (the scene ends 21 frames after "larger"); the config lines "Na 2,8,1 → Na+ 2,8" and "Cl 2,8,7 → Cl- 2,8,8" sit above the salt.
- Scene 10: the readout "radius (pm)" shows "?" until the contraction; bar slots appear when the tags above them leave.
- Scene 11: size circles (radius proportional to pm) shrink along the row and grow beside the column instead of shell models (the cells are 64 px).
- Scene 13: a third framed row "stronger pull: outer shell closer" carries "closer"; row one arrives just after "Both are".
- Scene 15: the crossed chip is struck on "It doesn't"; its red tag writes on "Two comma six".
- Scene 16: two short summary lines (amber) sit above the atoms while the grip tags show, and the grip tags sit beside rather than above the atoms; all clear before the chip, so the final frame is as designed.
- Key notes trimmed to five two-line bullets; checker warns on 499 characters (same as V12's 498).

## Cue check
All cues resolve against the measured word timings (`cueFrame` throws on a missing phrase; config loaded in node). Repeated phrases: "six more" #2 (electrons) in the hook; "down a group" (not the earlier "down a column"); "A picometre" #1; "the number of protons" #1 in scene 3; "More electrons" #1 in scene 5; "so the outer" #1 in scene 8 (the earlier "so the stronger" does not match); "Two comma six" #1 in scene 15. Countdowns: 3 s ring from "think" (prediction); 10 s rings full from "Pause here" (attempts).

## Grade checker
See `out/explainer/Explainer-chem-y11-m1-v13/grade/Explainer-chem-y11-m1-v13-grade.md`. First run (02:47): PASS WITH WARNINGS (0 failures, 2 warnings: dense key notes 499 characters; a sparse handoff frame, now filled with the summary lines and larger thumbnails). Final run (02:58, after all sweep fixes): **PASS WITH WARNINGS (0 failures, 1 warning: dense key notes, 499 characters)**. The sheet copy is from this run.

## Dense 3 s sweep (scale 0.5, one still every 90 frames, montaged per 25)
Full sweep three times (151 stills each, four locked chunks), plus targeted re-sweeps. Defects found and fixed:
1. Hook: chlorine overlapped the locator table; lit-cell symbols collided ("NaMg") at the locator size; lower half empty before the samples.
2. Scene 2: "0.000 000 000 001 m" ran past its box; the box sat empty before its line.
3. Scene 3: right lower quarter empty for 20 s (sample moved there).
4. Scene 4: the axis label sat on the Na chip and bar value; the "radius falls" pen arrow crossed the bar values; dashed slots showed the answer heights.
5. Scene 7: lower half empty while only lithium was drawn.
6. Scene 8: lower card empty for 15 s.
7. Scene 10: Mg2+ and Al3+ labels touched the readout boxes; the "10 electrons each" and "more pull" tags sat on the bar slots.
8. Scene 15: the O2- label sat on the widened ring.
9. Scene 16: the upper band and the right side were empty in early frames; the "loose grip" tag would have collided with the new summary line.
No faint or ghosted main visual: the table, atoms, bars and plates are solid in full ink throughout (dashed slots and the expected-size ring are secondary).

## Builder's sheet grade
A. Every teaching frame holds its main board from the first frame: the to-scale shell atoms with their rulers or the live stepper readouts in scenes 1, 3, 4, 5, 7, 9, 10, 13, 15 and 16, painted samples in scenes 1, 2, 3, 5, 9, 12, 13, 14 and 16, a new board every 20 to 45 s, framed green answers with red crossed slips in both feedback scenes, five short notes with the framed memory card and a 45 s notes scene. Scenes 8 and 11 carry no plate; each is a full coded board (sentence frames beside their strip and bars; the periodic cross with the memory card).

## Things to check at playback speed
Scene 1 morph from V12's frozen frame (frames 4 to 76) and chlorine contracting on "much smaller"; scene 4 stepper (about 26 frames per element) with each strip ring and bar; scene 9 shell fading and the chloride ring widening on "spread out"; scene 10 contraction ripple from "tighter"; scene 16 electron tug and the second chlorine; key notes cross-fade to the final frame.
