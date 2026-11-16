# chem-m8-c13 (designing a synthesis: aspirin): new build, 16 Nov 2026

Sheet: `chem-m8-c13-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-chem-m8-c13`, measured narration `docs/production/claude-pm/lessons/m8c13/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Last video of Module 8 Chemistry: no Next chip (as designed); the course-close chip reads "End of Module 8 Chemistry: Applying Chemical Ideas".

## Files created
- `src/explainer/lessons/chem-m8-c13/`: `common.ts` (lookups, the two worded questions), `assets.ts` (13 plates, measured boxes; the iron(III) chloride pair shares one box), `parts.tsx` (MOLS and Mol: salicylic acid, ethanoic anhydride, aspirin and ethanoic acid as skeletal structures; FactorBoard; SeeSaw; HBar; Beaker; Factory; PriceTag; Drop), `s1.tsx` (1 to 6), `s2.tsx` (7 to 11), `s3.tsx` (12 to 17), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b12/parts` (the bio-m8-g01 practice board, as chem-m8-g02 uses it), `chem-m7-c02/parts` (SkelAt), `chem-m7-c01/molecules` (ringPts, ringBonds), `bio-m8-b11/parts` (FrameStrip), `chem-m5-c06a/s4` (KeyNotesBoard, two memory aids).
- `src/explainer/registry.ts`: import and `config_m8c13` entry.

## Plates
All design-named plates exist and were inspected: aspirin tablets, aspirin water bath, willow bark, crude oil barrel, vinegar bottle, filter funnel with white solid, balance with watch glass, iron(III) chloride violet and pale yellow, fume cupboard, waste bottle, vegetable oil bottle, sugar cane. None missing.

## Departures from the design (with reasons)
- The board is the M8 practice board (as chem-m8-g02), not c05's three-zone chem board; the factor board stands at the far right (nine tiles: lit amber for the current factor, ticked when done).
- Scene 1: the aspirin structure (coded skeletal) sits between the tablets and the water bath; a 1897 to today axis fills the bottom.
- Scene 2: the four structures write left to right on their cues; the acetyl group is amber, the ring OH ringed red, the ester ringed amber, the by-product ringed grey-brown. The ester-swap motion is shown as the products writing on with the acetyl group highlighted, not a sliding group.
- Scene 4: the two equations are written in words with gauges under each (not structures), so the comparison reads at a glance.
- Scenes 4, 5, 7, 8: the see-saw sits at the bottom of the content area (the right third holds the factor board).
- Scene 7: three phases (recrystallisation beaker; the iron(III) chloride pair with small structures; purity against yield bars with two recrystallisation steps).
- Scene 9: link lines are drawn beside the factor board (not an enlarged board).
- Scene 10: the verdict box with three parts, five grey PEEL rows, the bottom bookend, the weakness chip and the crossed "list" chip.
- Attempt 1: the vegetable oil plate with three givens; attempt 2: cane and barrel plates; the 8 s silent reading hold is not in the measured audio, so it is not added.
- Feedback 2: the plan card is five rows (verdict, supply, conditions and rate, separation and energy, carbon dioxide); the card text in the left column is at 26 px (the long stem needs it).
- Key notes: five one-line bullets; memory aids "Yield tells you how much product you collected, not how good the route is." and "Verdict, factors with evidence, verdict with a condition."

## Cue check
Every cue phrase and question underline resolves.

## Check at playback speed
- Scene 2: structures writing on their cues; ring timings on "O H", "oxygen", "acid".
- Scene 4: gauges filling (much unreacted, almost complete); the water drop pushing back.
- Scene 6: collected bar filling to 80%; loss drips on "dissolved", "glassware", "filter paper".
- Scene 7: beaker warm then cool with crystals forming; tube pair; purity flecks clearing while the yield bar shortens.
- Scene 8: loop arrow from ethanoic acid back to the anhydride.

## Grade and ink check
- `npm run grade:explainer -- Explainer-chem-m8-c13`: PASS WITH WARNINGS (0 failures, 1 warning: dense key notes, 590 characters, mostly the two memory-aid lines the design requires). Report: `out/explainer/Explainer-chem-m8-c13/grade/Explainer-chem-m8-c13-grade.md`.
- My grade per frame: all 16 A. The lightest are attempt 2 and feedback 2 (long card text at 30 and 26 px, which the long stem needs) and the rate scene (equation copy in soft ink above the plate).
- Ink check: 5 runs, all the deliberate red crossed mistakes. Earlier real collisions (the Haber tag under "a balance of speed, yield and cost"; the water-bath plate behind "with its condition"; the by-product ring across the equation text) were fixed and re-checked.
- Open: the design's 8 s silent reading hold before attempt 2 is not in the measured audio, so it is not built (root to decide if an edit gap is wanted).
