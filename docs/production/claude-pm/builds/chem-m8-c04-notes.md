# chem-m8-c04 (colourimetry, UV-visible and AAS): new build, 6 Nov 2026

Sheet: `chem-m8-c04-sheet.jpg` (16 evenly spaced stills over 15,705 frames, key notes held at 1,200 frames).
Builder's grade after root review (re-sheeted): A on all 16 frames, with frame 1 the lightest (see below). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-c04/`: `common.ts` (lesson lookups, plates, measured anchors), `parts.tsx` (coded lineGraph pieces, beam cutaway, colour wheel, grating fan, slit, wavelength strip, atomiser lens, absorption and gap ladders, beams, detector, chain pills, framed answer, row cards), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 13), `s3.tsx` (14 to 19), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8c04} from './lessons/chem-m8-c04/config';` and `config_m8c04` appended to `explainers`.

## Plates
All twelve design-named plates are in `public/assets/chemistry/` and were inspected: the four new ones (copper cuvette pair, hollow cathode lamp, graphite furnace) and the reused instruments and glassware. None missing; no coded stand-ins.

## Departures from the design
- p02's beam cutaway and calibration graph are not imported: p02's `CalGraph` is hard-wired to its FeSCN data and its cutaway labels a blue filter. Equivalent coded parts are written here (`BeamBox` with a filter that turns orange-red on cue; `CAxes`/`CPts`/`CSeg`/`CBand`/`CRead`) so P04 and G02 can import them.
- Scene 2: the readout grows (0.180 to 0.620) when the filter changes to the absorbed colour, to show why the absorbed colour is used.
- Scene 4: the spectrum scan runs in the first 5 s (not starting on the word "spectrum"), so the frame is not empty while the scan is described; "measure at each wavelength" and the spectrum gloss appear early.
- Scene 6 (root fix): a large live cuvette sits under the formula from the scene start, with the light beam through it, the bracket labelled l (path length) and a readout of A that rises as the concentration chip steps up (A = 120 x 1.00 x c), settling at 0.480 when the example is said. The dashed "c = ? mol/L" box sits beside it; the UV-visible plate ("the cuvette sits in the instrument's light") fills the right from the start; working lines moved to x 620.
- Scene 7: the AAS plate starts large and settles smaller when the spray starts; a five-pill cause chain (spray, free atoms, lamp, atoms absorb, light missing) runs along the bottom, lit on cue.
- Scene 8: before the flame-test comparison, two energy-gap ladders show why lead atoms absorb lead's line and other atoms do not (the narration's "other atoms need different energies").
- Scene 10: the crossed "extend the line past the last point" chip sits under the graph; the design's dilution strip is the pipette and flask plates with falling drops.
- Scene 11: a crossed slip ("0.698 mg/L in the discharge") added for the g01 layout.
- Scene 18: the handoff shows the pale copper cuvette tagged "unknown" with the five flasks, because the blank m5x cuvette's alpha box is suspect (design note).
- Key notes: six short bullets (the design's four dense notes split), the framed memory card with both aids.

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/m8c04/measured/lesson.json` (the config throws on a missing cue and the stills rendered). Response holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A (lightest frame: the centre fills when "c = ?" lands); 2 colourimetry A; 3 spectrum scan A; 4 complex A; 5 Beer-Lambert A (root fix: live cuvette and readout, instrument plate); 6 AAS A; 7 why specific A; 8 limits A; 9 calibration A; 10 worked read A; 11 which method A; 12 attempt 1 A; 13 feedback 1 A; 14 attempt 2 A; 15 handoff A; 16 key notes A.

## Check at playback speed
- The spectrum scan: slit and graph dot moving together; the half-concentration curve and the tall arrow.
- Scene 6: the concentration chip stepping and the readout and cuvette colour following it.
- Scene 7: lens droplets shrinking and splitting, photon squiggles stopping at lead atoms, the beam thinning as the readout counts to 0.113.
- Scene 8: the two gap ladders (photon absorbed against passing) and the phase changes (flame test, furnace, lamps).
- The pipette drops into the flask in scene 10, and the orange point sliding from above range to 0.113.
- Feedback 2: the question shrinking as the sample plates fade.
