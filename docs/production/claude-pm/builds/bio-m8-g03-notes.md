# bio-m8-g03 (feedback loop practice): new build, 6 Nov 2026

Sheet: `bio-m8-g03-sheet.jpg` (16 evenly spaced stills over 14,188 frames, (i + 0.5) / 16 spacing, key notes held at 1,200 frames). Composition `Explainer-bio-m8-g03`; the design names lesson key `m8g03b`, but the measured narration is under `docs/production/claude-pm/lessons/m8g03/measured/lesson.json` (used). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-g03/`: `common.ts` (lesson lookups, the three worded questions, the graph data), `assets.ts`, `parts.tsx` (question cards and columns, the blood pressure loop ring with painted zooms, the glucose and insulin graph with two y axes, peak markers and reading guides, process strips, a mini loop), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10 to 15), `scenes.tsx`, `config.ts`. It imports bio-m8-g01's `board.tsx` and `m8-shared/parts.tsx` read-only.
- `src/explainer/registry.ts`: `import {config_m8g03b} from './lessons/bio-m8-g03/config';` and `config_m8g03b` appended to `explainers`.

## Plates
All design-named plates are in `public/assets/biology/` and were inspected: `m8-heart-v1`, `b3a2-brain-v1`, `m8-pancreas-v1`, `m8-skeletal-muscle-v1`, `m8-liver-v1`, `b2b-prop-new-plant-v1`, `m8-bananas-unripe-v1` and `-ripe-v1` (one union box, cross-fade in place), `m8-stoma-open-v1`. Added: `m8-pancreatic-islet-v1` (b03's plate) to show the beta cells in 3b. None missing; no coded stand-ins.

## Departures from the design
- Walkthrough layout: the question sits in a left column at 27 px with amber underlines on cue; the working is on the right. In Q2 the graph is enlarged in the working, so the column holds the stem and demands and the answer box sits under it.
- Hook: cards with plates (heart and brain; pancreas; the banana pair ripening) over the coded outlines.
- 2b: the ring slots hold painted zooms (receptors: the aortic arch from the heart plate; control centre: the medulla from the brain plate, ringed; effectors: the heart, beating on "faster, stronger") and BP arrows for stimulus and response. Answer (a) is a five-row frame whose prompts show from the first frame. Narrowing arterioles are the shared coded vessel.
- 2c: answer (b) uses "prediction" and "justification" rows; a chip "no signal reaches the medulla".
- 2d: the heart plate stands in the right panel ("effector: the heart") instead of the chip sliding into the slot; an arrow joins the crossed chip to the effector slot.
- 3c: reading-guide values sit at the left axis; the minus loop thumbnail sits inside the graph; glucose dots move from a vessel into the liver and muscle, and out of the liver after glucagon.
- 4b: the change and response lines show from the first frame (they restate the stem); each strip lights and takes its sign on cue. Q is shown in full ink with a "next scene" tag. Answer (a) is framed.
- 4c: strip Q is a coded blood glucose trace (usual level, fall, rise back) with the stimulus and response segments lit on cue, instead of separate up and down arrows.
- Answer boxes with no line yet show a one-line method hint in blue.

## Cue check
Every `cues()` phrase and every question underline resolves (the configs load and `marksCheck` passes); holds use the measured `responseHold` frames with the shared countdown and "Pause here to answer.".

## Grade per frame (final sheet)
1 hook A; 2 question 1 A; 3 loop opening (before "stimulus") A, lightest: answer rows are prompts only; 4 loop done A; 5 cut link A; 6 question 2 A; 7 peaks opening A, lightest: before the peak markers; 8 fall A; 9 dip A; 10 question 3 A; 11 question 3 hold A; 12 one test A; 13 correct the student A, lightest: answer (b) shows only its hint; 14 mistake A; 15 decision board A; 16 key notes A (root fix: five one-line bullets at 48 px with the framed memory card; hold still 1,200 frames).

## Check at playback speed
- 2b: underlines in step with each part; nerve-impulse dots; the heart beating; the arteriole narrowing; the minus arriving.
- 2c: the cut and the pulses stopping at it; the red trace staying low.
- 3b and 3c: peak markers, the islet zoom line, segment highlights, glucose dots entering and leaving the liver.
- 4b: the ethylene dot cycling round strip R; the bananas ripening on "until the fruit is ripe".
