# chem-m8-c06 (dissolved oxygen and BOD): new build, 6 Nov 2026

Sheet: `chem-m8-c06-sheet.jpg` (16 evenly spaced stills over 16,377 frames, key notes held at 1,200 frames).
Builder's grade: A on all 16 frames (lightest: 6 and 7, the worked-example openings; see below). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-c06/`: `common.ts` (lesson lookups, plates, aligned-set anchors), `parts.tsx` (step pills, Winkler bottle states with a pale cloud, iodine flask tint states, species glyphs and electron hops, ratio ladder, BOD guide band, day strip, shutter, padlock, microbe lens, fill gauge, saturation bars; re-exports C05 and through it C04 to M5), `s1.tsx` (scenes 1 to 8), `s2.tsx` (9 to 14), `s3.tsx` (15 to 21), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8c06} from './lessons/chem-m8-c06/config';` and `config_m8c06` appended to `explainers`.

## Plates
All design-named plates are in `public/assets/chemistry/` and were inspected: the Winkler bottle set (clear, brown, iodine; one union box), the iodine flask set (yellow, blue, clear; one box, aligned with the Mohr set), the BOD incubator (solid door), the DO meter, the burette stand and tile, the river sampling bottle, the lake set (C05). None missing; no coded stand-ins. The handoff uses `m8-bromine-water-orange-v2.png` (the rack C08 uses), as the design asks ("confirm it is the plate chem-m8-c08 will use").

## Departures from the design
- Hook: the C05 river strip was dropped (at a readable size it crowded the frame; at the size that fitted, its labels were under 26 px). The lake-crash cutaway carries the scene, with the place, date and sources as text and chips.
- Scene 2: the gill inset is a round zoom of the painted lake plate on one fish (not a coded fish), with O2 glyphs moving in. The saturation bars stand from the scene start; their values write on cue.
- Scene 4: the "stopper seats" is an arrow and tag on the plate's stopper (the plate already shows it). An air-bubble glyph holding O2 marks "air contains oxygen".
- Scenes 5 and 6: the Winkler step strip is a three-pill row at the top right; the electron hop runs between labelled species glyphs.
- Scene 7: the burette rig is built from the M6/M8 parts with the iodine flask set; "pale straw" is a partial cross-fade to the clear plate.
- Scenes 9 to 11: a four-box calculation path (thiosulfate mol, O2 mol, O2 mg, DO mg/L; site card 3's path) under the givens; each box lights as its stage runs and shows its result once established, so the earlier results stay on screen. Scene 10 adds a 4-to-1 glyph (four thiosulfates per O2) until the mass line writes. The saturation comparison (scene 11) sits beside the framed answer.
- Scene 12: no coded jug; two bottles bracketed "same sample". A conditions card shows sealed, dark and 20 °C with small coded icons from the start; each reason writes on its cue. The bottle going into the incubator fades at the door (solid door).
- Scene 13: a live meter readout counts day 0 to day 5 (8.4 to 4.9 mg/L).
- Scene 14: the two-by-two cells carry a DO gauge and a trend arrow (coded) so no cell is empty; the meter and incubator plates show "DO: oxygen now" and "BOD: O2 used in 5 days" until the limits card replaces them.
- Feedback 2: DO bars for P and Q (start and day 5) with the decrease brackets; the guide band shows Q's marker only.
- Key notes: five short bullets (the design's four split) and the framed card with both aids.

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/m8c06/measured/lesson.json` (stills rendered). Holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A; 2 dissolved oxygen A; 3 sampling A; 4 step 2 iodine A; 5 step 3 titrate A; 6 worked moles (frame 30) A, lightest: the lower quarter is clear until the first stage line writes; 7 worked mass A (4-to-1 glyph fills the lower right); 8 BOD opening A; 9 BOD late A; 10 together A; 11 memory aid A; 12 attempt 1 A; 13 attempt 2 A; 14 feedback 2 A; 15 handoff A; 16 key notes A.

## Check at playback speed
- Scene 4: the fill tint rising, the bubble flashing and being crossed, the overflow drips.
- Scenes 5 and 6: the pale cloud then the brown cross-fade; the electron dots hopping; brown to yellow-brown.
- Scene 7: thiosulfate drops, yellow to pale straw, starch blue, then clear exactly on "disappears".
- Scene 12: bottle A sliding to the meter, bottle B into the incubator, the day strip ticking 1 to 5, bottle B returning; microbes gathering while O2 glyphs fade.
- Scene 13: the readout counting down with the days.
