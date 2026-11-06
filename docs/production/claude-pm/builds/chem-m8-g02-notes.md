# chem-m8-g02 (calibration and water-analysis practice): new build, 7 Nov 2026

Sheet: `chem-m8-g02-sheet.jpg` (16 stills at (i + 0.5) / 16 over 14,419 frames; key notes held at 1,200 frames). Composition `Explainer-chem-m8-g02`; measured narration `docs/production/claude-pm/lessons/m8g02/measured/lesson.json` (key m8g02 confirmed against the design's build ids). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-g02/`: `common.ts`, `assets.ts`, `parts.tsx` (Graph with solid axes, Crosses, GLine, GBand, ALine, ReadOff, SlopeTri, CheckStrip, Q1/Q2/Q3 cards and columns, Givens, BarSplit, GuideBar, PipeStrip), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-g01/board` and `parts` (Rail), `bio-m8-b07/parts` (PreRing), `chem-m5-c06a/s4` (KeyNotesBoard).
- Registry: `import {config_m8g02} from './lessons/chem-m8-g02/config';` and `config_m8g02` appended.

## Plates
All design-named plates present and inspected: m8-aas, m8-river-sampling-bottle-v2, m5x-colourimeter-empty, m5x-cuvette-3, m8-school-bubbler (new, delivered). Added: m6-volumetric-pipette-filler and m6-volumetric-flask (1c dilution), m5x-cuvette-blank (water zero, reagent blank). None missing.

## Departures from the design
- Heading shortened to "Calibration and water-analysis practice"; the three twists are the hook card titles.
- Check strip sits at the bottom of the question column (two rows of pills), not a far-left strip.
- Bubbler row in 4c uses the bubbler plate five times (one solid, four faded with "?"), not coded outlines (owner rule against coded objects). Hook card 3 uses chips, not bottle outlines.
- 2b: the dot-to-dot zigzag is replaced by two grey tags ("one ruled line", "not dot to dot"); crosses show as 30% previews before their cue.
- 2e: a zoomed-out graph (0 to 8 mg/L) shows the extension to 6.2 and the bending response to 7.1.
- 3d: the "site L08" chip was dropped (meaningless to learners); the reagent blank is shown with its cuvette plate and the line shifting to the origin.
- 4d: the average chip is crossed on "trap" (not on "drinks") so the sheet frame never shows it uncrossed.
- Classic-slip scenes show the framed answer from their first frame.
- 4c answer box says "public health unit", matching the recorded narration (Revision 3).

## Cue check
Every cue and underline resolves (config loads; marksCheck passes). Holds use measured responseHold frames, PreRing from "Pause here to answer.".

## Grade per frame
1 hook A; 2 Q1 card A; 3 graph A (crosses still previews at this frame); 4 why dilute A; 5 read-off and dilution A; 6 slip A; 7 Q2 card A; 8 intercept A; 9 subtract then divide A; 10 slip A; 11 Q3 hold A; 12 guideline bar A (lightest: pipe strip waiting for its cue); 13 claim A; 14 trap A; 15 decision board A; 16 key notes A.

## Check at playback speed
- 2b crosses dropping in step with the underlines; ruled line; slope triangle.
- 2c marker dropping from 0.620 to 0.142; the bend curve.
- 2d read-off lines; × 5 arrow between pipette and flask.
- 3b grey reagent shares growing under each standard. 3c bar split.
- 4b lead dots gathering in the overnight pipe and moving in the running pipes.
- 4d grey average marker sliding to 0.007.
