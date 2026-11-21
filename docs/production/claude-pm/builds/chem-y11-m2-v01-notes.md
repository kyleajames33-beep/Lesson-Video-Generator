# chem-y11-m2-v01 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m2-v01`, export `config_y11c_m2v01` (19 scenes, 14,652 frames, about 488 s; key notes 1,350 frames = 45 s, measured). Sheet: `work/quality-audit/fixed/chem-y11-m2-v01-sheet.jpg` (the final grade sheet; no frame stamps). No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds for all 19 scenes: 11.6 to 17.6 characters per second (lowest: attempt-1 11.6, copper-carbonate 12.3, balance-magnesium 12.4). None under 10, so no run-on take.

## Files
`src/explainer/lessons/chem-y11-m2-v01/`:
- `common.ts`: measured lookups, holds, plates (alpha boxes measured; the copper carbonate crucible set shares one canvas so its three plates align) and the one data table: `M` (every illustrative mass), `F` (formulae with the atoms in one particle), `EQ` (the four equations) and `tally` (atom counts on each side for any coefficients). Every display reading, mass row, tally and coefficient reads it.
- `parts.tsx`: M1 V07 parts re-exported read-only (and through them V06's top-pan balance with its coded display, V01's text, chips, framed answers, pen marks and plates). New: `Boundary` (dashed teal system boundary that draws on), `Wisps` (solid slate gas wisps crossing out or in, with arrowheads), `Ball`, `Mol`, `Tile` (atoms in element colours, molecules with stick bonds), `EqLine` and `termX` (equations with amber coefficient slots; compact when no slots show), `Tally` (live "left | right" rows, teal when equal, rose when not), `Lens` (magnifier filled with magnesium atoms), `cruPt` and `bowlBox` (crucible plate geometry).
- `opening.tsx`: m1-v27's final frame drawn here (`V27Final`), because m1-v27 is not built.
- `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 13), `s3.tsx` (14 to 19), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: import and entry added after `config_y11c_m1v21` (one scripted edit, re-read immediately before, LF kept).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (every cue resolves).

## Plates
All design-named plates exist; uniform scale only: `y11c-top-pan-balance-v1`, `m5x-unsaturated-beaker-v1` (opening), `y11c-cuco3-crucible-green-v1`, `-green-lit-v1`, `-black-lit-v1`, `p01-mg-ribbon-v1`, `m5-g02b-open-crucible-v1`, `y11c-beaker-colourless-solution-v1`, `y11c-beaker-white-precipitate-v1`, `m6-beaker-v1`, `y11c-sample-aluminium-v1`. Also used (not named in the design, an existing plate): `assets/biology/m8-water-glass-v1.png` in scenes 8 and 9, as water. None missing.

## Simulation: the coefficient stepper
Scene 9 (and the same parts in scenes 10 and 15): the amber dials step on cue and the tally recounts from `tally(EQ, coefficients)` on every frame, rose until both sides match, then teal; water tiles copy in as each coefficient rises. Scene 6's particle model keeps "atoms: 6" and "mass: unchanged" steady while the six numbered atoms move from 2H₂ + O₂ to 2H₂O and the bonds re-form.

## Opening frame (m1-v27 not built: re-match required)
m1-v27 is not built, so m2-v01 opens on `V27Final` (in `opening.tsx`), drawn from m1-v27's design (scene 15) and this design's Decisions: heading "Why some things dissolve"; "Module 1 complete" (34 px, top right); the navy chip "Next: why must mass be conserved when a chemical equation is balanced?" (x 96, y 190); the top-pan balance (`balGeo(96, 440, 460)`) with the salt-solution beaker on the pan and the display "110.0 g"; "beaker tared" under it; rows "water 100.0 g + salt 10.0 g" and "100.0 + 10.0 = 110.0 g" (44 px, x 860, y 440 and 520); a lens of water molecules with one Na⁺ and one Cl⁻ (centre 1580, 700, r 150) tagged "every particle still there". All parts solid (the design's "grey" tags drawn in ink). **When m1-v27 is built, re-match this opening to its exported final scene (ideally replace `V27Final` with m1-v27's frozen `SceneHandoff`).**

## Final frame (scene 18 `handoff`), for the chem-y11-m2-v02 builder
Exported read-only from `src/explainer/lessons/chem-y11-m2-v01/s3.tsx`: `SceneHandoff`, `G18` (`balGeo(96, 420, 440)`), `NEXT18` and `LENS18` ({cx 1300, cy 690, r 190}). Open v02 with `<Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze>`; the key notes cross-fade back to this frame.
- No heading (it fades on "Next time"); the navy chip at the top (x 96, y 110, 84 px tall, 44 px): "Next: How does a mole connect particle count with chemical amount?".
- "2Mg(s) + O₂(g) → 2MgO(s)" (68 px, coefficients amber) centred at x 1100, y 320, with "2 atoms : 1 molecule : 2 units of MgO" (38 px) under it.
- Left: the top-pan balance with the magnesium ribbon plate on the pan, display "0.24 g", label "magnesium ribbon".
- Right: dashed lines from the ribbon to the magnifier (centre 1300, 690, r 190) filled with a dense field of pale green magnesium atoms; hand tag "how many atoms?" (46 px) to its right.

## Departures from the design (with reasons)
- Scenes 1, 2, 4: the crucible plates show a crucible on a tripod over a burner, which cannot sit on the balance, so each crucible stands beside the balance with "reading: crucible + contents" and an arrow to the display; before and after readings sit at the right. The boundary is drawn round the crucible bowl.
- Scene 1: a chip "a chemical reaction: what happens to mass?" bridges "So what happens" to "Here's green copper carbonate" (the frame was empty for 3 s).
- Scene 5: the earlier crucibles sit as thumbnails at the top left (not top right) so the law banner and the balance fit side by side.
- Scene 6: the abstract balance outline on "mass" is replaced by a pen ring on one oxygen atom with "each atom keeps its mass" (no coded icons of real things); a dashed "after?" box holds the products' place until the atoms move.
- Scenes 8 and 9: a glass of water plate (existing biology plate) fills the empty side; tiles enlarged.
- Scene 10: the state-symbol line, key and (g) ring arrive on "The letter g" (the design's "crucible" is 27 frames from the end); the link line to the wisps was dropped (it crossed the framed equation).
- Scene 11: state symbols arrive on "Here, the g" (the design's "system" is 27 frames from the end).
- Scene 12: the two crucible thumbnails stand at the right; the first mass row arrives on "For magnesium"; older rows shrink to 40 px but stay solid.
- Scene 17: the boundary sketch uses the painted open crucible (Revision 3), large at the right.
- Key notes: the framed memory card sits at the right with 2H₂ + O₂ → 2H₂O as its example.
- Series pattern kept (Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`.

## Cue check
All cues resolve against the measured word timings. Repeated phrases checked: scene 12's two bold "gram" cues are the third and fourth "gram" spoken, so they are keyed to "one six of a gram" and "eight eight of a gram" (a cue on "gram." would have fired on the first "gram," at 0.24 g); scene 8 "substance is" (first); scene 9 "front of H two O" (not "front of H two as well"); scene 5 "Nothing crosses" is unused (it also matches "nothing crosses the line?" at the start). Countdowns: 3 s ring from "the same"; 10 s rings full from "Pause here".

## Grade checker
See the result line at the end of this file and `out/explainer/Explainer-chem-y11-m2-v01/grade/Explainer-chem-y11-m2-v01-grade.md`.

## Dense 3 s sweep
One still every 90 frames (scale 0.5, 163 stills), montaged per 41 and read in full, plus an earlier scene-sample pass (57 stills). Defects found and fixed: (1) opening beaker over the "Next" chip; (2) scene 2 word equation and "carbon dioxide gas" over the wisps and the readings panel, the system gloss off the right edge; (3) scene 4 card text over its edge and "gas in" over the oxide label; (4) scene 5 tags clipped at the right and labels crossing the boundary; (5) scene 6 readout text overflowing its box and the two tags overlapping; (6) scene 8 glosses over the tiles and "never the subscript" off the edge; (7) scene 10 link arrow through the framed equation and uneven spacing in equations without slots (compact layout); (8) scene 11 state line over the tally; (9) scenes 7 to 11 over 60% empty (checker failures; equations, tallies and plates enlarged); (10) feedback 2 label off the edge and the crucible too small; (11) notes leaving the right half empty (memory card moved right). No faint or ghosted main visual: plates, balance, tallies, equations and models are solid in full ink; partial opacities are only fades on cue and plate cross-fades.

## Things to check at playback speed
The display ticks (2.47 to 1.59 g; 0.24 to 0.40 g); the burner cross-fades; the pour in scene 5 (the left beaker tilts by rotation only, no hands) and the precipitate cross-fade; the atoms' paths in scene 6; the dial steps in scenes 9, 10 and 15; key notes cross-fade to the final frame.

## Builder's sheet grade
A−. Painted balance, crucibles, beakers, ribbon, glass and aluminium sample in most teaching frames; the coefficient stepper with live tallies; the particle model with steady readouts; framed green answers and red crossed slips; whole question cards; five notes with the framed memory card; 45 s notes scene. Softer: the equation scenes (8, 10, 11) sit at 54 to 56% bare paper on the sheet (checker warnings): equations, tiles and tallies are light on the page even at 84 px with plates beside them.

Final checker run on the final code (22 November 2026, 07:16 local): PASS WITH WARNINGS, 0 failures, 3 warnings (subscript-coefficient 56% bare, balance-magnesium 54%, copper-carbonate 54%). Sheet copied to `work/quality-audit/fixed/chem-y11-m2-v01-sheet.jpg`.
