# bio-m8-g01 (epidemiology practice): new build, 6 Nov 2026

Sheet: `bio-m8-g01-sheet.jpg` (16 evenly spaced stills over 14,997 frames, (i + 0.5) / 16 spacing, key notes held at 1,200 frames). Composition `Explainer-bio-m8-g01`; lesson key `m8g01b` (narration `docs/production/claude-pm/lessons/m8g01b/measured/lesson.json`). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-g01/`:
  - `board.tsx`: the Module 8 Biology practice board, shared read-only with bio-m8-g03 (title, HSC tag, type badge, question text with amber underlines, data table with cell underlines, chips, grey recall tags, crossed mistake, framed answer, answer box and answer rows, plates, arrows, fraction row with boxed denominator, calculation line, pause hold, decision board);
  - `common.ts` (lesson lookups, the three worded questions and tables), `assets.ts`, `parts.tsx` (question cards and columns, answer grid, rate bars, population blocks, age pyramids, the melanoma graph paper built stage by stage, reading guides, TAILS rail, dot fields, frame strip, confounder triangle), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10 to 15), `scenes.tsx`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8g01b} from './lessons/bio-m8-g01/config';` and `config_m8g01b` appended to `explainers`.

## Plates
All design-named plates are in `public/assets/biology/` and were inspected: `m8-pancreas-v1`, `m8-skin-melanoma-v1`, `m6-uv-skin-v1`, `m5x-clipboard-sheet-v1`, `m8-energy-drink-can-plain-v1` (no writing on the can). None missing; no coded stand-ins.

## Departures from the design
- Walkthrough layout: the question "strip" is a left column (the whole question at 27 px, with its table) rather than a top strip, so the working on the right keeps 44 px lines. Givens are underlined in the column on their cues.
- Hook: each type sits in a card with its painted case (pancreas; melanoma skin block; clipboard and can) above the coded outline (fraction, blank axes, four slots). Cards are present from the first frame and light on "Calculate", "draw", "judge".
- Attempt cards: one ruled answer area in the right column (no separate answer table), the case plate above it, the countdown below.
- 2b: the answer grid and rate bars stand from the start and fill on the four result cues; incidence rows give way to the mortality rows (one stage at a time; results kept in the grid).
- 2c and 3c: answer lines are condensed for 44 px ("Per 100 000, Q is higher: claim not supported." / "Compare age-standardised rates first."; "Most are found early, while thin, and cut out, so few die."). The model answers in the design are unchanged.
- 3b: short teacher chips for the x and y axis decisions and the 5-year gap (spoken content); the illustrative-data chip sits under the graph.
- 3d: the cut-off inset labels only its end years.
- 4c: answer (b) is b11's four-slot frame (design and strength from 4b; the limitation slot fills across "which came first", "confounders" and "self-reported"; judgement on "association"), not a separate answer box. The confounder node shows "?" until "diet".
- Decision board: thumbnails are the plates (pancreas; melanoma with a mini graph; clipboard and can).

## Cue check
Every `cues()` phrase and every question underline resolves (the configs load and `marksCheck` passes); holds use the measured `responseHold` frames with the shared countdown and "Pause here to answer.".

## Grade per frame (final sheet)
1 hook A; 2 question 1 A; 3 rates opening (at "For P") A, lightest: grid and bars are scaffolds until 550 lands; 4 rates end A; 5 counts against rates A; 6 question 2 A; 7 graph build A (root fix: the full empty graph frame, both axes, year positions 1985 to 2020 and 0 to 60, is drawn faintly from the first frame; each stage draws in full ink on its cue); 8 graph done A; 9 describe A; 10 mistake (insets) A; 11 question 3 A; 12 prevalence A; 13 limitations A; 14 mistake A; 15 decision board A; 16 key notes A (root fix: five short bullets at 46 px with the framed memory card; hold still 1,200 frames).

## Check at playback speed
- 2b: the boxed denominator, the numerator flash to "deaths", rows replacing rows, bars growing on each result.
- 2c: population blocks and the 100 000 rings; age pyramids building.
- 3b: axes, ticks, points dropping one by one, ruled lines, key and title in step with the voice; the TAILS rail lighting.
- 3c: reading guides, the callout to the thin lesion edge.
- 4b: the amber dots tinting in both fields.
- 4c: the confounder node cycling diet, weight, sleep, age; the limitation slot growing; the cohort arrow.
