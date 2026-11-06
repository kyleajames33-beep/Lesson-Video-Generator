# chem-m8-c05 (why monitor water): new build, 6 Nov 2026

Sheet: `chem-m8-c05-sheet.jpg` (16 evenly spaced stills over 14,697 frames, key notes held at 1,200 frames).
Builder's grade after root review (re-sheeted): A on all 16 frames. Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-c05/`: `common.ts` (lesson lookups, plates, lake-set anchors), `parts.tsx` (water-column overlay, legend, oxygen gauge, brake, the 60-hour oxygen trace function, sun and moon glyphs, river strip, dot flows, bottle, soda bottle, tap, dam, treatment box, chromatography column and peaks, microscope field, parameter-board column; it re-exports C04's parts), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8c05} from './lessons/chem-m8-c05/config';` and `config_m8c05` appended to `explainers`.

## Plates
All fifteen design-named plates exist and were inspected (the aligned lake set, farm runoff, turbidity meter and DO meter, plus the reused bottle, outlet, fertiliser, thermometer, pH meter, field kit, colourimeter, culture plate and microscope). The lake set shares one alpha box, so the three states cross-fade in place. None missing.

## Departures from the design
- Parameter board: the active column is wide (about 1,000 px) and the other two narrow with short summaries, rather than three equal columns, so the current lines stay at 34 to 40 px. Scene 7 (root fix) uses three equal columns beside the bottle, each with its instrument plate at full strength and a grey label (measures temperature; measures pH and ions; counts living cells) from the scene start; the column border and heading light on its cue.
- Nutrient, algae, bacteria and oxygen tokens are plain coloured dots with a legend (labels on small dots would be under 26 px).
- The 48-hour trace runs to 60 h: day one and day two swings in scene 4, the fall after the bloom dies (48 to 60 h) in scene 5; the delay bracket sits along the top of the plot.
- Scene 6: the five chain words show faintly from the gloss and light on their cues.
- Scene 11 (root fix): a "read one column at a time" line, and a site schematic in the answer box from the start until the ranking. Root asked for a river with A upstream to C downstream; the narration says "three sites on a lake, measured on the same day" and the point is "a snapshot, not a history", so the schematic is a lake (with its inflow) carrying markers A, B and C, captioned "one lake, three sites, one day". Root to confirm.
- Scene 12: the drinking-water panel shows the tap and the nitrate bar with its 50 mg/L line from the scene start (root fix; the ADWG label still writes on "fifty"); the purpose panels shrink upward when the sampling idea starts; the dam glyph sits above the treatment box.
- Feedback 2 (root fix): the three answer boxes show their plates (thermometer, colourimeter, microscope) faintly from the start; each lights and gains its text on cue. The design names the colourimeter for phosphate, so that plate is kept rather than a DO probe or test kit.
- Feedback 1: the strip map gives way to the answer lines on the right; the table cells being compared are outlined.
- Key notes: five short bullets, the framed memory card with both aids.

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/m8c05/measured/lesson.json`; holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A; 2 nutrients A; 3 sources A; 4 feed and bloom A; 5 die, decay, suffocate A; 6 one look A (root fix); 7 physical A; 8 chemical A; 9 worked read A (root fix: site schematic); 10 why monitor, early A (root fix: bar and tap from the start); 11 why monitor, late A; 12 attempt 1 A; 13 feedback 1 A; 14 feedback 2 A (root fix: faint plates in all three boxes); 15 handoff A; 16 key notes A.

## Check at playback speed
- The water-column overlay through scenes 2, 4 and 5: algae multiplying, O2 glyphs rising by day and fading at night, algae sinking grey, bacteria clustering, the gauge falling into red.
- The brake release in scene 2 and the nutrient flows in scene 3 (paddock runoff, outlet, stormwater).
- The oxygen trace drawing on its cues and the noon and dawn markers.
- One column highlighted at a time in the data table, with the lake thumbnails arriving on "clear water", "scum" and "dead fish".
- One stills batch rendered the scene 5 crash plate blank once (a temporary bundle clean-up error in that run); the re-render showed it correctly. Confirm it at playback.
