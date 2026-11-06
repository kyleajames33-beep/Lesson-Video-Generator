# bio-m8-g02 (disease prevention and technology evaluation practice): new build, 7 Nov 2026

Sheet: `bio-m8-g02-sheet.jpg` (16 stills at (i + 0.5) / 16 over 14,465 frames; key notes held at 1,200 frames). Composition `Explainer-bio-m8-g02`; measured narration `docs/production/claude-pm/lessons/m8g02b/measured/lesson.json` (key m8g02b confirmed against the design's build ids). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-g02/`: `common.ts`, `assets.ts`, `parts.tsx` (cards and columns, Givens, EvalStrip, Ladder, PairBars, Prevented, Dots, ScoreChart, Spread), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10 to 15), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-g01/board` (incl. Zoom, pbPt), `bio-m8-b07/parts` (PreRing), `bio-m5-g01/board` (NotesBoard).
- Registry: `import {config_m8g02b} from './lessons/bio-m8-g02/config';` and `config_m8g02b` appended.

## Plates
All design-named plates present and inspected: m8-bowel-screening-kit (new), m8-eye-cutaway, m8-aav-vector, m8-cochlear-implant, m8-sun-protection, m8-glasses, m8-kidney-nephron. None missing.

## Departures from the design
- b13's measure ladder, b14's PreventedStrip and b11's frame strip are rebuilt locally (b13 and b14 are not built yet); the frame strip uses the design's four slots.
- 3b: the retinal cell strip is a zoom on the painted eye plate's retina (protein dots and a grey "lost cells" patch on it), not coded cells.
- Hook: three cards with plates; earlier-video plates (sun protection, glasses, kidney) small with grey tags; empty frame strip under them.
- Mistake scenes show the framed answer from the first frame and the key reason shortly after.
- Q3 walkthrough column breaks the table's row labels over lines at 26 px; demand text 26 px.
- Decision board: course close shown as five module pills lighting on "to a close" (no dimming of the board).

## Cue check
All cues and underlines resolve (config loads; marksCheck passes). Holds use responseHold frames, PreRing from "Pause here to answer.".

## Grade per frame
1 hook A; 2 Q1 card A; 3 measure (bars as outlines before their cue) A; 4 limits A; 5 mistake A; 6 Q2 card A; 7 Q2 pre-countdown A (kit countdown shows "11" for its first frames, shared kit behaviour); 8 mechanism A; 9 evaluate A; 10 mistake A; 11 Q3 card A; 12 measure A; 13 evaluate A; 14 spread mistake A; 15 decision A; 16 key notes A.

## Check at playback speed
- 2b paired bars filling, +9/+2 brackets, difference bar.
- 3b AAV plate travelling into the retina zoom; protein dots; green and amber slots.
- 3c dot fields tinting 13 of 20.
- 4b/4c score bars filling; noise bar pulse.
- 4d dots spreading around the average.
- 5 module pills lighting in sequence.
