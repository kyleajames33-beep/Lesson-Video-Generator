# bio-m8-b08 (nutrition and disease risk): new build, 7 Nov 2026

Sheet: `bio-m8-b08-sheet.jpg` (16 evenly spaced stills over 14,317 frames, (i + 0.5) / 16 spacing; key notes held at 1,200 frames). Composition `Explainer-bio-m8-b08`, measured narration `docs/production/claude-pm/lessons/m8b08/measured/lesson.json`. Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-b08/`: `common.ts` (lookups, the two worded questions, the teaching-data bars), `assets.ts` (22 plates, matched pairs on union boxes, feature points), `parts.tsx` (BalanceBeam, the nutrient Chain, Gear, Hex, YearsStrip, BarChart), `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9a to 11), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b07/parts.tsx` (PathwayStrip, RiskDial and the board), `m8-shared/parts.tsx` (LoopRing, SignalPulse), `bio-m8-g01/parts` (DotBlock), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: `import {config_m8b08} from './lessons/bio-m8-b08/config';` and `config_m8b08` appended to `explainers`.

## Plates
All design-named plates exist and were inspected: red blood cells and iron-deficient cells, collagen strong and weak, leg bones normal and rickets, thyroid normal and goitre, pituitary part, bread loaf, sun, muscle cell transporters inside and membrane, liver, pancreatic islet, pancreas, eye cutaway, kidney and nephron, heart, artery healthy and plaque, dividing cell. None missing.
- The thyroid pair's alpha boxes differ (the goitre is larger on the same canvas), so every matched pair is placed on one union box to cross-fade in register.
- The pituitary plate's painted area is only about 95 by 103 px; it is shown at 150 px tall (about 1.5 times), which is slightly soft. A larger pituitary plate would help.

## Departures from the design
- The YearsStrip draws two traces over 0 to 15 years (insulin and blood glucose with a usual-range band and a moving year marker) instead of two bars; it reads more clearly as "over years".
- b03's GlucoseDots are drawn as local glucose hexagons; the insulin dots, bounce-off and liver arrow follow the design.
- Scene 2: all four chain boxes appear on "chain" with thumbnails (bread, gears, iron-deficient cells, bones and pancreas) and light on their cues, so no box is empty.
- Scene 3: two readout bars (haemoglobin, oxygen carried) drop on their cues; the red cells move to the upper left on the cause question.
- Scene 7: the pancreas plate sits under the islet with a zoom line; the chain stays at the bottom and its effect slot fills "type 2 diabetes".
- Scene 8: opens with the question written on screen and a small pancreas plate by the dial; heart disease sits in its own panel with three chips.
- 9a: the sun and normal leg bones plates sit beside (not on) the card.
- The beam in the chain shows one label for the active side (the two labels did not fit the 196 px box at 26 px or more).
- Key notes: five short bullets at 42 px with the framed memory card ("sCurvy is vitamin C. Rickets: think vitamin D.").

## Cue check
Every `cues()` phrase and question underline resolves (config loads; `marksCheck` passes). Holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A; 2 chain A- (lower third is the deficiency gloss only at this instant); 3 iron A- (lower left lightly used); 4 vitamins A- (vitamin D labels still to come on the right); 5 vitamins A; 6 iodine A; 7 insulin resistance A; 8 beta cells A- (vessel row arrives later); 9 risk factor opening A- (chips arrive later on the right); 10 risk factor A; 11 question 1 A; 12 feedback 1 A; 13 question 2 A; 14 feedback 2 A; 15 decision A; 16 key notes A.

## Check at playback speed
- Scene 6: the 30 per cent cross-fade towards the membrane plate on "fewer transporters" must read as "fewer transporters", not a rendering fault (design doubt b); glucose hexagons bouncing off; the liver arrow.
- Scene 5: TSH pulses speeding up; the thyroid swelling over 2 s on "grows".
- Scene 4: calcium dots thinning on "harden"; the bones bowing on "bend".
- Scene 7: the years strip traces keyed to "cover" and "may not keep up".
- Scene 2: the gears (one greys and stops, one spins fast amber).

## Root review round (7 Nov)
- Hook (frame 1): scene heading from the first frame.
- Iron (frame 3): readout bars 62 px tall with 36 px labels; a zoomed red-cell inset (clipped from the plate) with a coded haemoglobin glyph: four irons dock from the scene start, two leave on "too little iron", O₂ rides only where iron sits.
- Vitamins (frame 4): a coded collagen-fibre close-up (three tightly wound strands that loosen and fray on "is weak") beside the collagen plate; the leg bones at 560 px with their label from the first frame; vitamin D labels between them.
- Risk factor (frame 9): gauge radius 215; all seven risk-factor chips show faintly (30 per cent) from the first frame and light on their cues.
- Question 1 (frame 11): sun at 250 px and leg bones at 430 px with a coded daylight strip (6 am to 6 pm, "all daylight hours indoors"); the countdown ring shows from "Pause here to answer." (PreRing, imported from b07). Same ring added to question 2.
- Beta cells: years strip enlarged; vessel row below it.
- Final grade per frame: all 16 A.
