# bio-m8-b07 (environmental exposure): new build, 7 Nov 2026

Sheet: `bio-m8-b07-sheet.jpg` (16 evenly spaced stills over 14,469 frames, (i + 0.5) / 16 spacing; key notes held at 1,200 frames). Composition `Explainer-bio-m8-b07`, measured narration `docs/production/claude-pm/lessons/m8b07/measured/lesson.json`. Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-b07/`: `common.ts` (lookups, the two worded questions and the illustrative graph data), `assets.ts` (15 plates, feature points), `parts.tsx` (PathwayStrip, RiskDial, Ticket, CellO, Wisps, Timeline, Bracket, Sparks, DropDots, Q1Graph, Q1Key), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10a to 12), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-g01/board.tsx`, `bio-m6-b02/parts` (SlimStrand, Damage, RepairBlob), `bio-m6-b01/parts`, `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: `import {config_m8b07} from './lessons/bio-m8-b07/config';` and `config_m8b07` appended to `explainers`.

## Plates
All 15 design-named plates exist in `public/assets/biology/` and were inspected (dark board contact sheet and gridded crops): fibro sheet, lungs healthy and smoker, airway cell, alveoli healthy and emphysema, heart, artery healthy and plaque, red blood cells, asbestos fibre and macrophage, sun, sun protection, UV skin, melanoma. None missing; no coded stand-ins for organs or objects.

## Departures from the design
- PathwayStrip, RiskDial and TicketRow live in `bio-m8-b07/parts.tsx`, not the shared Module 8 folder (the brief says to import shared files read-only). b08 imports them from b07.
- bio-m6-b02 has no exported `DimerKink` or `RepairRace`; scene 3's copy-before-repair recall is drawn with b02's SlimStrand, Damage and RepairBlob plus a local copying fork (label 30 px); 10d's kink uses SlimStrand's `kink` prop. The bio-m6-b05 patch icon is a small cluster of coded amber cell outlines.
- Scene 2: the three strip boxes carry plate thumbnails (fibro and sun; airway cell and alveoli; smoker lungs) so no box is empty before its cue; the b06 thumbnail is a coded two-branch chip tree.
- Scene 6: smoker lungs with smoke flowing in fill the lower right until the lottery starts; the lottery winners slide into the airway cell plate (the "one cell") instead of a coded outline. The tag reads "for cancer only: COPD and artery damage come from tissue injury and inflammation" (one line).
- Scene 7: the latency gloss and a row of five coded cells gaining amber dots sit beside the timeline; the pleura is a thin teal outline of the lungs plate (trachea masked).
- Scene 8: "adding up" is three bars (asbestos, smoking, together) with a dashed "sum of the two" line, rather than two bars stacking.
- Scene 9: the sun plates are on screen from the scene's first frame.
- Attempt graph: axis titles sit horizontally above each axis (the rotated right-axis title overlapped the stem).
- Scene titles added to each teaching scene, as in the A-grade builds.
- Key notes: five one- or two-line bullets at 42 px, trimmed from the design's longer text, with the framed memory card.

## Cue check
Every `cues()` phrase and every question underline resolves (both configs load in Node; `marksCheck` passes). Holds use the measured `responseHold` frames with the shared countdown and "Pause here to answer.".

## Grade per frame (final sheet)
1 hook A; 2 spine A- (boxes and thumbnails present; lower band waits for the spine sentence); 3 lung cancer A; 4 COPD A; 5 arteries A; 6 dose A- (lightest frame: only the "never" bar has grown at this instant; lungs, dial and working fill the rest); 7 latency A-; 8 latency A; 9 risk A; 10 verdict A; 11 question 1 A; 12 feedback 1 A; 13 question 2 A; 14 feedback 2 A; 15 decision A; 16 key notes A.

## Check at playback speed
- Scene 3: the fork reaching the damage before the repair blob; amber mutation dots arriving on "build up"; the cell cluster growing.
- Scene 4: white blood cells gathering, enzyme dots, the cross-fade to emphysema on "merge", the cilia flattening and mucus pooling.
- Scene 5: the heart beating faster on "nicotine"; O₂ to CO swap on "oxygen's place".
- Scene 6: the ticket deal, ticks, the second deal and three tickets sliding into the cell nucleus.
- Scene 7: the latency bracket stretching to 2025; sparks repeating from the macrophage; the pleura outline (check it reads as the lining).
- Scene 8: the dial needle nudging with each modifier.
- Strip thumbnails (smoke wisps) drift continuously; check they are not distracting.

## Root review round (7 Nov)
- Dose (frame 6): all three bars drawn as dashed outlines from the first frame and filled on their cues; formula at 54 px, working at 52 px; the dial sits beside the formula; smoker lungs moved to the upper right.
- Question 2 (frame 13): UV-skin plate at 320 px with a coded "30 years outdoors, no protection" year strip under it; stem 46 px and demands 44 px fill the card; "your answer" box kept.
- All attempt scenes: a full countdown ring ("10") shows from "Pause here to answer." until the measured countdown starts (PreRing in parts.tsx), so the ring is on screen through the pause line.
- Hook heading shows from the first frame; scene 2's spine sentence writes on "one spine".
- Final grade per frame: all 16 A.
