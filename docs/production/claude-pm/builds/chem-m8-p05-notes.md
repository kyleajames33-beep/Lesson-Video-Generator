# chem-m8-p05 (testing unknown organic liquids practical): new build, 7 Nov 2026

Sheet: `chem-m8-p05-sheet.jpg` (16 evenly spaced stills, (i + 0.5) / 16, over 15,640 frames; risk scene +120 frames reading hold; key notes held at 1,200 frames). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-p05/`: `common.ts` (lesson lookups; plates: the water-bath pair with tube anchors, the p02 bromine set, the white tile; the carbonate, dichromate, v2 bromine, limewater, dropper bottle and fume cupboard defs from chem-m8-c08, and glasses, gloves and waste bottle from chem-m8-p03, imported read-only), `parts.tsx` (lettered dropper bottle, role outlines, cards and pills, the water bath with name chips, leader lines and result chips, heat lines, a 5-minute dial, the coded bung and delivery tube, the four-column results table with the locked inference cell, the claims card, method card; re-exports c08 and p03 parts), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8p05} from './lessons/chem-m8-p05/config';` and `config_m8p05` appended to `explainers`.

## Plates
Every design-named plate is in `public/assets/chemistry/` and was inspected: dropper bottle, oxidation water-bath before/after, bromine layers colourless, bromine water control, bromine water orange, white tile, limewater clear/milky, dichromate orange/green, fume cupboard, waste bottle, glasses, gloves, carbonate before/fizz. None missing; no coded stand-ins.

## Departures from the design
- Hook: the three test results (fizz, fade, green) are rack-plate thumbnails from the start; the claims card shows its A to D rows with dashed "?" cells.
- Aim: the variables card frame and three small bottles are present from the start; the values write on cue. The fume cupboard sits beside the plan card from the start.
- Blank and known: the grid ("one row per test") is on screen from the start with a plate per test; blank, known and unknown columns fill on their cues rather than all at "unknown".
- Bromine water: the fume cupboard is beside the method card (not faint behind the plates) so the tags stay readable.
- Fizz test: result boxes under the three tubes ("?" until "no fizz", "fizzes straight away", "judge against both"); the method sits in a strip along the bottom; the gas path is a coded bung and delivery tube to the limewater plate's own tube.
- Dichromate: a coded dial sweeps "about 5 min"; chips spread above the bath with leader lines; results below.
- Batch two: batch 1 shrinks and slides left; "after 5 min: unchanged" sits by the "batch 2" label.
- Record: the table's Liquid and Test cells are pre-filled from the start ("drawn up beforehand"); the observed plates appear beside each row when the observation writes.
- Claims: the observed plates (fizz, fade, green) sit in each row; C's dichromate slot is a dashed "not run" box.
- Valid, reliable, accurate: three cards with their pictures from the start (p03 pattern) instead of one card at a time; earlier cards dim.
- Risk: the p03/p04 row-by-row table (every hazard listed with a painted object from "Now the risks"; harm and control fill on cue, current row glows; the five unspoken rows fill after the speech), then a 4 s quiet reading hold. Row text is trimmed to fit at 26 px.
- Feedback 1: a readable givens panel replaces the shrunk question card; a local Word/Feature/Fix rail at 36 px replaces the s07 FixRail (its example text renders at about 26 px hand).
- Feedback 2: E's claims row reuses the claims card; framed answer "–COOH and C=C supported; –OH: can't tell".
- Handoff: five rows (Plan, Control, Safety, Record, Claim) to match the spoken rule plus the design's Safety row.
- Key notes: five short bullets at 46 px with the framed memory card (both aids).

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/m8p05/measured/lesson.json` (the config bundles and loads; stills rendered). Holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A; 2 aim A (lightest: variables card values still writing); 3 blank/known A; 4 fizz A (lightest: result boxes still "?"); 5 dichromate A; 6 batch two A (claim card lower half waits for "Orange means"); 7 record A; 8 claims A; 9 valid/reliable/accurate A; 10 risk A; 11 memory aid A; 12 attempt 1 A; 13 feedback 1 A; 14 attempt 2 A; 15 handoff A; 16 key notes A.

## Check at playback speed
- Fizz: spatula tipping into each tube, the known cross-fading to fizz with bubbles, gas bubbles along the delivery tube, clear to milky.
- Dichromate: dropper and drops over each tube, chips docking, the dial sweep, orange to green on "green".
- Batch two: batch 1 sliding and shrinking at the cut; result chips on "stay orange".
- Record: the lock-and-tick unlocking per row; the "no visible change" cell glow on "negative".
- Risk: row glow following the narration and the quiet rows filling after it.
