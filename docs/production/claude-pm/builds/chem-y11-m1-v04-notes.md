# Build notes: chem-y11-m1-v04 (simple and fractional distillation)

Builder: Claude build agent, 20 November 2026. Not committed. Explainer id `Explainer-chem-y11-m1-v04`.

## Files created

- `src/explainer/lessons/chem-y11-m1-v04/common.ts` (lookups, holds, plates with measured alpha boxes, the enrichment run `RUN` and `pctAt`)
- `src/explainer/lessons/chem-y11-m1-v04/parts.tsx` (ethanol glyph, rig geometry for both plates, vapour path, uniform-scale crop, staircase tile, 0 to 100% gauge, chromatography strip)
- `src/explainer/lessons/chem-y11-m1-v04/s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16)
- `src/explainer/lessons/chem-y11-m1-v04/scenes.tsx`, `assets.ts`, `config.ts`
- `src/explainer/registry.ts`: one import and one list entry after v03.

## Plates used (real files, uniform scale)

`y11c-simple-distillation-v1`, `y11c-fractional-distillation-v1`, `y11c-evaporating-basin-hotplate-v1` (opening), `c11-cuso4-beaker-dissolved-v1` (attempt 1), `y11c-sample-bottle-clear-v1` (twice, attempt 2), `m7-crude-oil-barrel-v1`, `m7-fractional-distillation-column-v1`. No plate missing.

## Departures from the design (with reasons)

- **The two rigs are not registered.** The fractional plate raises the condenser to fit the column, so the plates cannot cross-fade in register. Each is placed on its own (same left edge and height); scene 1 cross-fades between them in place.
- **Scene 3 detail board.** Two uniform-scale crops of the simple rig (bulb at the side arm at 2.4x; open receiver at 2.0x). The sealed case is the dashed inset "sealed: pressure builds, glass can burst", struck in red on "burst".
- **Scene 4.** Flask crop at the left; a live tally of molecules leaving the surface (pattern of 5 ethanol in 8, so the gauge settles near 62%) drives the vapour gauge; the "62%" readout lands on "sixty two". Ethanol drawn as a C, C, O chain with white H dots.
- **Scenes 5, 6, 8.** One enrichment run (17, 62, 80, 86, 89, then 90.4 ... 95.6, author note b) drives the staircase readouts, the values placed up the column and the azeotrope gauge (which stops at about 96%). Tiles are plain rounded tiles (no flask icons).
- **Scene 6.** The bead cutaway is coded (beads, rising vapour, drops that form, slide and reboil ethanol). Temperature scale "about 78 C" top and "about 89 C" bottom with a gradient bar.
- **Scene 7.** The receiver is painted, so it cannot slide out. The swap is shown with the chip "fraction 1: mostly ethanol" moving off and the chip "fraction 2: new receiver" with a pen arrow to the mouth. "Taller" is a dashed amber outline round the column plus the cycles readout counting 4 to 8, not an extended column.
- **Scene 9.** The barrel and industrial column replace the fractional thumbnail on "Oil refineries" (same card), with "petrol" and "diesel" tags beside the column.
- **Scene 10.** The memory card is on the board from the scene start with the scene 5 staircase tiles inside it (the staircase "returns"), so it is never an empty box; the three lines write on their cues, step 1 is ringed on "Simple", and "about 96%" writes on "azeotrope".
- **Scene 14.** The small staircase beside (b) is a plain rising bar ladder with no numbers (no invented % values for P).
- **Scene 15 (final frame).** Strip at x 640 (220 x 700) with a pencil baseline and black dot, a close view of the dot showing coloured dye particles ("black ink: several dyes", "(model colours)"), the chip "only a few drops" and the "Next" chip. The close view is an addition (fills the board and previews "several dyes"). V05 reuses `InkBoard` for its opening frame.
- **Key notes.** Five short bullets (trimmed wording), framed ladder card, terracotta safety strip shortened to "Never heat a sealed system. Heat ethanol without a flame."

## Cue check

All cue phrases checked against the measured captions (0 missing), including occurrence fixes ("below" #2 at 834 in the column scene; "degrees" #2 at 546 and "water" #3 at 938 in scene 4). Holds use `voiceover.endFrame`; the attempt rings show full from "Pause here".

## Checker result

`npm run grade:explainer -- Explainer-chem-y11-m1-v04`: **PASS WITH WARNINGS (0 failures, 1 warning)**: dense key notes (542 characters including the card and the safety strip). Final run 20 Nov after the scene 10 card change. Report: `out/explainer/Explainer-chem-y11-m1-v04/grade/Explainer-chem-y11-m1-v04-grade.md`; sheet alongside.

## Builder's sheet grade

A (round 2 sheet showed the scene 10 memory card as a near-empty box at its sample frame; reworked with the staircase tiles).

## Check at playback speed

- Scene 1: basin to simple rig to fractional rig and back; the tick on "catch the water?".
- Scene 2: vapour path speed, drops and receiver level against "condenses" and "distillate".
- Scene 4: the escaping molecules and the tally; the gauge should settle near 62% before "sixty two".
- Scene 6: bead cutaway motion (drops, reboil) and the percentages climbing the column on "over and over".
- Scene 7: side-arm reading climbing on "climbs towards a hundred"; the fraction chips.
- Scene 8: gauge steps stopping at about 96% on "ninety six".
