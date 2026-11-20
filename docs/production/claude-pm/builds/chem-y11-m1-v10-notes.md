# chem-y11-m1-v10 build notes (built on the measured narration)

Builder: Claude build agent, 20 November 2026. Explainer id `Explainer-chem-y11-m1-v10` (17 scenes, 13,195 frames; key notes 1,350 frames = 45 s). Sheet: `work/quality-audit/fixed/chem-y11-m1-v10-sheet.jpg` (copy of the grade sheet; no frame stamps). No MP4 built.

## Files
`src/explainer/lessons/chem-y11-m1-v10/`: `common.ts` (lookups, holds, plates with measured alpha boxes, hydrogen, helium and sodium line data, `levelFrac` for the true -1/n² scale), `parts.tsx` (V08 parts re-exported; new: `Strip` spectrum strip (red 700 nm left to violet 400 nm right, lines at true wavelength positions or a continuous rainbow, white wavelength labels with "nm" at the left), `StripStrike`, `Photon` wavy arrow, `Levels` true-scale level diagram, `Electron`, `VArrow`, `Prism`, `Ray`, `Fan`, `Stairs` (morphs into the level diagram), `Ball`, `LineTally` (tally bars laid along a strip), `MiniNucleus`, `BohrAtom`, `Cloud` (seeded dot-density orbital)), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 11), `s3.tsx` (12 to 17), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_m1v10`). Registry import and entry added after V09 (one small edit).

## Plates
`y11c-hydrogen-discharge-tube-lit-v1.png`, `y11c-filament-lamp-lit-v1.png`, `m8-flame-na-yellow-v2.png`, `y11c-hand-spectroscope-v1.png`. All present; alpha boxes measured; uniform scale only. None missing.

## Simulation
Scenes 6 and 8 use the chance engine (`sims/chance.ts`, `weighted`). Scene 6: seed 35, 240 atoms, weights 0.40/0.25/0.20/0.15 (illustrative; strip labelled "model: brightness not to scale"); the seed was chosen so the first four atoms drop 3 → 2, 4 → 2, 5 → 2, 6 → 2 in turn, landing on "third, fourth, fifth, sixth". Scene 8: seed 49, 60 atoms, first three in spoken order. Every photon, tally, "atoms so far", "this drop" and "this photon" readout reads the same run; photons only ever land on the allowed lines. The tally is drawn by `LineTally` (bars at the line positions) rather than `ChanceHistogram`, because the design lays the tally along the strip.

## Departures from the design (with reasons)
- **Level diagram scale.** Drawn on hydrogen's true scale (level 1 at y 880, the limit at y 210). Levels 4, 5 and 6 sit close, so their labels are staggered to the right of the lines (no inset). This keeps the UV drops to level 1 visibly the longest arrows, which matches "bigger drop, more energy".
- **Plate sizes.** The tube plate is a 5 : 1 landscape object, so "about 460 px tall" cannot be met without stretching; it is sized by width (600 to 700 px wide on teaching boards).
- **Scene 1.** "not this" and "only four" are 46 px hand tags (design 42 px) so the frame has a line at working size before the heading writes on "atom". The small "?" atom and the route chip stay at the bottom until the lamp arrives ("electrons: how arranged?" added under the tube's row).
- **Scene 2.** The lamp thumbnail is not shown (the Upgrade gives the board to the strip). Strip labels "least energy (red)", "most energy (violet)" added to the orange arrow.
- **Scene 3.** The real hydrogen strip is on the board from the first frame (third row) and is ringed on "Hydrogen's lines"; the predicted rainbow is struck rather than covered.
- **Scene 4.** The stylised uneven staircase morphs into the true-scale diagram on "The lowest level"; the tube and the empty strip arrive at the right during the morph so scene 5 continues the board.
- **Scene 5.** A live readout "electron: level 1 / 3 / 2" added (reads the same state as the dot).
- **Scene 7.** The hand spectroscope plate (neutral, not answer-bearing) added under the chip to fill the board.
- **Scene 8.** Model-atom lines are placed by energy order on a strip labelled "model atom: energy increases →" (no wavelengths: with three levels all three drops cannot all be visible lines).
- **Scene 9.** The scribble ring became a pen bracket on the three strips (a ring large enough crossed the labels). The hydrogen tube stays small at the top right.
- **Scene 10.** Bohr's sums are shown as a hydrogen strip with the tube, "matched", until the cloud takes that panel.
- **Scene 16.** A small recap row (struck rainbow, hydrogen lines with a tick, s p d f chips) sits under the three atoms and clears before "new evidence forced a better model", so the final frame is exactly the design's.

## Opening-frame match (V09)
V09's code existed when the opening was built; scene 1 reproduces V09 `SceneHandoff`'s final frame from `src/explainer/lessons/chem-y11-m1-v09/s3.tsx` (heading, the two chlorine nuclei with labels and "nuclei: done", the "?" atom at (290, 660) r 150, the tube at x 460 y 470 width 1000, the strip at (1490, 470, 334 × 170), the struck rainbow at (1490, 330, 334 × 84), the chip at y 840). **Mismatch for root:** V09 draws its strip and rainbow with violet at the left (`lx = SX + (nm − 400)/300 × SW`); V10's design locks red at the left for every strip. V10 draws the lines red-left at V09's positions, so the line order differs at the cut. Fix in V09 (flip the strip and gradient) for an exact join. If V09's handoff code changes again, re-check the constants `O_TUBE`, `O_STRIP`, `O_RB` in `s1.tsx`.

Final frame (scene 16) is the design's, flagged for the `chem-y11-ws-v01` designer.

## Cue check
All cues resolve against the measured word timings (config loaded in node; `cueFrame` throws on a missing cue). Repeated phrases take stated occurrences (scene 9 "line." is the second occurrence). Countdown: 3 s ring from "think." (scene 7); 10 s ring full from "Pause here" (scenes 12, 14).

## Grade checker (final run, 20 Nov 2026, 22:13)
`npm run grade:explainer -- Explainer-chem-y11-m1-v10`: **PASS (0 failures, 0 warnings)**. Report: `out/explainer/Explainer-chem-y11-m1-v10/grade/Explainer-chem-y11-m1-v10-grade.md`. Earlier runs failed on frame 1 (largest line 42 px) and the handoff (71% bare); both fixed.

## Dense 3 s sweep (scale 0.5, one still every 90 frames, montaged per scene)
Three sweeps (146 frames, then the changed scenes). Defects found and fixed:
- scene 1: "electrons: how arranged?" sat on the route chip; the "410 nm" label ran off the strip edge (all strips now label numbers only, with "nm" at the left; close labels 434/410 are offset so they do not touch);
- scene 2: lower half sparse and the ring tag's arrow crossed "least energy"; strip enlarged, tag moved above the strip;
- scene 3: "energy" bar label collided with the atom caption; the ring crossed "hydrogen (real)";
- scene 4: "any height" sat on the slate cross; the right half was empty during the morph (tube and strip now arrive earlier);
- scene 5: "no jump, no light" sat across the orange arrow;
- scene 6: photons ran along the top of the strip over the lines and labels; tallies collided with the tag line; the UV label was crossed by photons. Strip lowered so photons descend onto it, tally and readouts re-spaced, UV label under its zone, UV photons fade before the closing tag;
- scene 7: sparse (spectroscope added);
- scene 8: brackets collided with the energy axis label (axis moved left), "3 gaps, 3 lines" and "biggest gap" re-placed, photons land on the strip's bottom edge;
- scene 9: the flame-to-line arrow drew before the flame (wrong cue occurrence); ring replaced by a bracket; flame label re-placed;
- scene 10: right panel empty between Bohr and the cloud (tube added; the cloud now fills from "replaced");
- scene 12: card half empty (tube larger, lower right);
- scene 16: sparse (atoms enlarged, recap row added).

## Builder's sheet grade
A. Painted plates or the live run in most teaching frames; the level diagram, strips and photons change on cue throughout; framed green answers with red crossed slips in both feedback scenes; notes five short bullets with the framed stairs card, 45 s hold. Frames 1 (hook mid-scene), 8 (Schrödinger, early) and 14 (handoff) measure 44 to 48% bare paper by the checker's coarse cells; each holds its full board with no empty box, so I judge them A, but root should look at them.

## Things to check at playback speed
Scene 1 board move from V09's frame (frames 60 to 106) and the lines drawing on "red, blue-green, blue and violet"; scene 4 staircase-to-diagram morph; scene 5 jump and drop timing against "jumps up" and "drops back"; scene 6 first four atoms on "third, fourth, fifth, sixth" (21 frames apart) and the speed-up; scene 8 run; scene 10 cloud fill.
