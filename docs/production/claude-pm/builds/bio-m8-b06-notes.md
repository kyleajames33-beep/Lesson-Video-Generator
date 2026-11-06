# bio-m8-b06 (what causes a non-infectious disease?): new build, 7 Nov 2026

Sheet: `bio-m8-b06-sheet.jpg` (16 evenly spaced stills, (i + 0.5) / 16, over 14,450 frames; key notes held at 1,200 frames). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-b06/`: `common.ts` (lesson lookups; plates with matched pairs on union boxes; CFTR channel, clump and red-cell anchors), `parts.tsx` (card, pill, group tab, the cause chain strip, ion flow, dust flow, O₂ dots, dividing ring, callout, letters-only Punnett square, live bars, LDL flow; re-exports chem-m8-c08 parts and p03's write-on text and glow, read-only), `s1.tsx` (hook to what goes wrong), `s2.tsx` (effect not cause to several causes), `s3.tsx` (attempts, feedback, decision rule, key notes), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8b06} from './lessons/bio-m8-b06/config';` and `config_m8b06` appended to `explainers`.

## Plates
Every design-named plate is in `public/assets/biology/` and was inspected, including the five new ones (CFTR pair, thick mucus, silicosis lungs, iron-deficient red cells). Pairs cross-fade on union boxes. None missing; no coded stand-ins.

## Departures from the design
- Group tab sits at the upper right (beside the scene title), not the upper left.
- Hook: no "no figures" change; the reasons are chips under the 1900 card; the heading writes on "causes" as the task line clears.
- Dividing line: the "Is it caused by a pathogen?" card with both outcomes, and the cystic fibrosis airway plate ("cystic fibrosis?"), are on screen from the start; outcomes and labels light on cue.
- Four groups: each column has its painted plate from the start; on "chain" the board shrinks up and the empty chain strip draws under it (the board stays rather than collapsing into the tab).
- CF normal job: the airway-lining plate is on screen from the start with zoom lines to the enlarged CFTR cell on "Cells lining".
- Effect, not cause: the lifted chain carries plates per slot; the Punnett square and its card are on screen from the start, the ff box rings on "child"; the "needs two altered copies" line is shown from the start (recalled from the previous scene).
- Iron: two live bars ("haemoglobin", "oxygen carried") fall from normal to low on cue, with no numbers.
- Melanoma: the chain fills in narration order (cells, body, then the UV cause).
- Attempt 2: the liver plate sits beside the question (named in the stem; not answer-bearing), contrary to "no plates on the card".
- Feedbacks: the question stays readable in a left column (29 to 31 px) with amber/colour underlines, the answer on the right.
- Key notes: five short bullets at 46 px; framed memory card with the aid split over two lines.

## Cue check
Every `cues()` phrase and question underline resolves against `docs/production/claude-pm/lessons/m8b06/measured/lesson.json` (config bundles and loads; stills rendered). Holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A (lightest: bottom band waits for the "longer lives" arrow); 2 dividing line A (lightest: lower left waits for the non-infectious gloss); 3 four groups A; 4 CF normal job A; 5 what goes wrong A; 6 effect not cause A; 7 silicosis A; 8 iron A; 9 melanoma A; 10 several causes A; 11 attempt 1 A; 12 feedback 1 A; 13 attempt 2 A; 14 feedback 2 A; 15 decision rule A; 16 key notes A.

## Check at playback speed
- Dividing line: the bacterium travelling host 1 to host 2, the path fading on "non-infectious".
- CF: chloride and water dots leaving through the channels, then trapped inside after the cross-fade on "folds"; the sweep arrow stalling on "can't clear".
- Silicosis: dust drifting down the trachea and settling, healthy to scarred on "scar".
- Iron: the bars falling and half the O₂ dots fading in step with "makes less" and "carries less oxygen".
- Melanoma: the dividing ring, then the cross-fade on "tumour".
- Feedback 2: LDL dots stopping at the liver on "removes less" and drifting to the heart on "Over years".
