# chem-m8-p04 (calibration practical: copper(II) standards, a blank and an unknown): new build, 6 Nov 2026

Sheet: `chem-m8-p04-sheet.jpg` (16 evenly spaced stills over 14,294 frames; risk scene +120 frames reading hold; key notes held at 1,200 frames).
Builder's grade: A on all 16 frames (lightest: 7, read and scale back at its start, where the right middle waits for the second and third stage lines; 12, feedback 1 before its first working line). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-p04/`: `common.ts` (lesson lookups, plates, measured anchors for the cuvette series, standards rack and spectrophotometer slot/screen), `parts.tsx` (example calibration graph with timed points, line, extension, bending fifth standard and linear-range band; cuvette states, ridged-side outlines, coded test tube with two-colour fill, liquid stream, mini beam cutaway, screen readout; re-exports P03 and through it C04), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8p04} from './lessons/chem-m8-p04/config';` and `config_m8p04` appended to `explainers` (same edit as P03).

## Plates
All design-named plates are in `public/assets/chemistry/` and were inspected, including the eight new ones (cuvette cu-1 to cu-5, unknown, diluted unknown, standards rack). The blank m5x cuvette's alpha box at > 20 is 791, 200, 1210, 1799 (no stray alpha). None missing; no coded stand-ins.

## Departures from the design
- C04's graph pieces are imported; the calibration graph itself is a new `CalGraph` with this lesson's example data (C04's and chem-m5-p02's are hard-wired to their data).
- Hook: the spectrophotometer, its beam cutaway and the rinse-water cuvette are on screen from the start (tags on cue) so the opening frame is full.
- Make the standards: the coded tube slides from under the stock burette to under the water burette; rack tags write on cue (staggered for legibility).
- Wavelength: the blank-beam cutaway is on screen from the start reading "A = ?", then 0.012 on "blank" and 0.000 on "away" with the glass and water slivers lifting out.
- Aim: the five painted cuvettes sit in the variables card until "stays the same".
- Read and scale back: "c(diluted) = 0.845 ÷ 11.9" writes on "Read across" and "= 0.0710 mol/L" on its number; a crossed slip ("0.0710 mol/L: that's the diluted solution") is added for the g01 layout.
- Risk: every hazard listed with a painted object from "Now the risks"; harm and control fill row by row on cue, current row glowing; rows in narration order (copper sulfate, waste, unknown sample, glassware, instrument, distilled water); +4 s quiet hold.
- Feedbacks: the reference question is scaled (0.86 and 0.70) in a narrower card so it stays readable; feedback 2's crossed slip reads "average three readings" with note "all have the fingerprint" (shortened to fit).
- Key notes (root fix, 7 Nov): five short one-line bullets at 44 px (on-screen only, trimmed to the core fact each), with the framed memory card; hold still at least 1,200 frames.

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/m8p04/measured/lesson.json` (config bundled and loaded in node; stills rendered). Holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A; 2 aim A; 3 standards A; 4 wavelength A; 5 measure A; 6 linear range A; 7 read and scale back A (lightest); 8 reliable/accurate A; 9 valid A; 10 risk A; 11 attempt 1 A; 12 feedback 1 A (light until 0.250 writes); 13 attempt 2 A; 14 feedback 2 A; 15 handoff A; 16 key notes A.

## Check at playback speed
- Scene 3: the stock and water streams, the tube sliding between burettes, the fill marks and the rocking mix.
- Scene 4: the scan curve drawing, the peak marker, the two compare arrows, the blank cuvette dropping into the slot.
- Scene 5: the wipe arc removing the smudge, the rinse swirl, the matching rim and slot arrows.
- Scene 7: the readout falling 1.52 to 0.845 as the cuvette cross-fades; the crossed "extend the line" chip.
- Feedback 2: the beam thinning, the readout stepping to 0.910, the two reads landing apart.
