# chem-y11-m1-v08 build notes (built on the measured narration)

Builder: Claude build agent, 20 November 2026. Explainer id `Explainer-chem-y11-m1-v08` (16 scenes, 13,803 frames; key notes 1,350 frames = 45 s). Sheet: `out/explainer/Explainer-chem-y11-m1-v08/grade/Explainer-chem-y11-m1-v08-grade-sheet.jpg`. No MP4 built.

## Files
`src/explainer/lessons/chem-y11-m1-v08/`: `common.ts` (lookups, holds, plates, `SYM` element symbols), `parts.tsx` (V06 parts re-exported; `Nuclide` label (A, Z, charge; each number can glow amber), `Atom` (packed nucleus of red protons and slate neutrons from a sunflower packing, blue electrons on 2, 8, 8 rings; counts come from props, so the label, the readouts and the model always agree), `Nucleus`, `Particle`, `ChargeMeter`, `PTStrip` (periodic table rows 1 to 3, groups 3 to 12 omitted)), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_m1v08`). Registry entry added after V07. The nuclide builder is coded in the lesson (no engine in `src/explainer/sims/` fits, as the design says).

## Plates
Gas jar of chlorine, magnesium ribbon, iron lump (V01), salt jar (V02); measured alpha boxes, uniform scale. None missing.

## Departures from the design (with reasons)
- Scene 1 opens on V07's final frame (salt jar, sodium tile, the lifted chlorine tile with 35, 17 and "?"s, the chip); the salt jar cross-fades to the chlorine jar on "we saw chlorine". To fill the frame, a small chlorine atom model ("inside: how many of each?") appears on "It's called"; the three "?" counters arrive on "describes".
- Scene 2: the reference table uses "rel. mass" and "outside" for the electron's place; "about 1/1836 of a proton" sits under it. The atom model is a small chlorine atom; its nucleus shrinks on "far smaller".
- Scene 3: the only readouts are "protons" and "element" (no "?" boxes for particles not yet taught). Adding the 18th proton shows ³⁶₁₈Ar (A rises by one with the proton), box 18 flashes, then back to ³⁵₁₇Cl.
- Scene 6: the crossed slip (26 + 2 = 28) sits at the right under the givens card so it never overlaps the working rows; the task strip reads "Fe²⁺ (A = 56, Z = 26)" because stacked nuclide numbers cannot sit inside a text line.
- Scene 8: the isotope bracket joins the two labels above the atoms (not across the rings).
- Scene 9: replays are three small panels (label + nucleus + readout) under the memory card.
- Scene 10: the carbon nuclei show "6 protons, 6/7/8 neutrons" under their tags; on "Why?" the row moves to a compact solid row at the top right (tags 30 px). The band curve draws from "Small nuclei" to "twenty-six" so the sketch is never an empty chart; lead-208 is marked on "twenty-six".
- Scene 13: the attempt card shows the periodic strip as a data sheet would (no sample pictured, as the design says).
- Key notes: five short bullets (note 1 and note 5 shortened to fit two short lines each).

## Cue check
All cues resolve against the measured word timings (bundled and loaded in node). Repeated phrases take a stated occurrence (for example the second "twenty-six" in scene 6). Countdown 3 s from "think" (scene 7); 10 s ring shown full from "Pause here" (scenes 11, 13).

## Things to check at playback speed
Scene 3 protons packing in (about 1.3 s) and the argon flicker; scene 4 neutrons packing in on "Thirty-five minus seventeen"; scene 5 electrons filling 2, 8, 7 and the extra electron's flight; scene 8 second nucleus filling and the two extra neutrons pulsing; scene 10 C-14 flicker and burst, then the staged mechanisms; scene 14 label building number by number.

## Grade checker (final run, 20 Nov 2026, 10:06 Sydney)
`npm run grade:explainer -- Explainer-chem-y11-m1-v08`: **PASS WITH WARNINGS (0 failures, 1 warning)**: frame 11 (`attempt-1` hold) sparse, 56% (a question card; question scenes only warn). Report: `out/explainer/Explainer-chem-y11-m1-v08/grade/Explainer-chem-y11-m1-v08-grade.md`.

## Builder's sheet grade
A. The nuclide builder (atom model plus live readouts) is on screen in every teaching frame from scene 2 to 8, painted plates carry scenes 1, 5, 6, the attempts and the notes; worked rows at 52 px with green frames and crossed slips. Note for root: scenes 2 to 4 and 7 to 10 have no painted plate (the design is coded there; the atom model is the live picture).
