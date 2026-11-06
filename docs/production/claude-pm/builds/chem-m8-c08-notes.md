# chem-m8-c08 (simple tests for organic groups): new build, 6 Nov 2026

Sheet: `chem-m8-c08-sheet.jpg` (16 evenly spaced stills over 15,161 frames, key notes held at 1,200 frames).
Builder's grade: A on all 16 frames (lightest: 8, two groups, and 14, feedback 2; see below). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-c08/`: `common.ts` (lesson lookups, plates, rack anchors), `parts.tsx` (the lesson's skeletal molecules and group rings, the candidate strip, rack plate pairs with a shake, plate thumbnails, the decision chart with no early exit, gas path, spatula outline, ticks; re-exports C04 and through it C03b to M5; imports the M7 molecule kit read-only), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 11), `s3.tsx` (12 to 17), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8c08} from './lessons/chem-m8-c08/config';` and `config_m8c08` appended to `explainers`.

## Plates
All design-named plates are in `public/assets/chemistry/` and were inspected: the dropper bottle, the carbonate pair, the dichromate pair, the limewater pair, the fume cupboard, the ester fruit and the bromine water pair. None missing; no coded stand-ins.
- Bromine water: the build uses `m8-bromine-water-orange-v2.png` / `-clear-v2.png` (asset brief item 2: edited from the dichromate plate, same rack, tube and bounds) instead of v1 (a wider, different rack). This keeps one rack system in the three-test row, as the design requires. Root to confirm.

## Departures from the design
- Candidate strip: five cards across the top band, each a coded skeletal structure (group ringed in its colour) and its name; results dock as small plate thumbnails (not coded tube icons), strikes and glow on cue.
- Scene 1: the bottles shrink a little on "out" rather than sliding to the lower edge; the three result icons are plate thumbnails.
- Scene 2: three plate pairs change on "goes", "changes", "fizzes"; the prediction card sits under a "the trick" line and reveals each group a beat after its question.
- Scene 3: no dropper over the tube (it would cross the strip); orange drops fall into the mouth. A molecular inset shows Br2 pairs reaching the C=C and vanishing ("used up"); no dibromo product is drawn or claimed.
- Scene 4: the proton hop runs in a panel beside the tube; the gas path is coded grey bubbles along a dashed arrow to the limewater plate's delivery tube.
- Scene 5: heat lines and a "water bath" chip under the rack (no flame). The H on ethanol's C-OH carbon is drawn explicitly and ringed; the tertiary carbon is ringed "no H".
- Scene 8: the report card writes at "own"; but-3-enoic acid sits in a panel with fizz and fade thumbnails.
- Scenes 9 and 16: the decision chart puts each question box above its yes and no pills, and both pills feed the next box (no early exit). Scene 9 builds one row per sentence with the observed tube beside each row.
- Scene 10: the limits are two panels (propan-1-ol and propan-2-ol with one green tube; but-1-ene and but-2-ene with one faded tube) and a small IR sketch.
- Key notes: five short bullets (the design's four split) and the framed card with both aids.

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/m8c08/measured/lesson.json` (stills rendered). Holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A; 2 reaction you can see A; 3 C=C fade A; 4 COOH fizz A; 5 OH green A; 6 green limits A; 7 order A; 8 two groups A (lightest: the report card writes later, so the lower right is clear); 9 excluding A; 10 limits A; 11 attempt 1 A; 12 feedback 1 A; 13 attempt 2 A; 14 feedback 2 A (lightest: the limit line and crossed chip arrive later); 15 handoff A; 16 key notes A.

## Check at playback speed
- Scene 3: drops, the tube shake, the fade inside a few seconds; Br2 pairs vanishing at the C=C.
- Scene 4: spatula tip, proton hops, the fizz, gas bubbles travelling to the limewater, clear to milky.
- Scene 5: orange to green on "ions"; the H appearing and ringed on "primary or secondary".
- Scene 9: strikes landing exactly on each "out", ethanol glowing on "Only ethanol", the chart's no/no/yes pills lighting.
- The candidate strip's docked thumbnails arriving on "cyclohexene fades it", "cyclohexane doesn't", "Ethanol is", "stays orange".
