# Build notes: chem-y11-m1-v03 (filtration and crystallisation)

Builder: Claude build agent, 20 November 2026. Not committed. Explainer id `Explainer-chem-y11-m1-v03`.

## Files created

- `src/explainer/lessons/chem-y11-m1-v03/common.ts` (lesson lookups, holds, plates with measured alpha boxes)
- `src/explainer/lessons/chem-y11-m1-v03/parts.tsx` (ions with drawn signs, sand grain, goal checklist, pour stream, drips, flask fill, dashed inset card, meter, steam wisps, pause ring)
- `src/explainer/lessons/chem-y11-m1-v03/s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 11), `s3.tsx` (12 to 17)
- `src/explainer/lessons/chem-y11-m1-v03/scenes.tsx`, `assets.ts`, `config.ts`
- `src/explainer/registry.ts`: one import and one list entry after v02.

Read-only imports from v01, v02 (parts, common, `Underline`, `Givens`, `Lines`, `QTag`).

## Plates used (all real files, uniform scale, never stretched)

`y11c-sand-saltwater-beaker-v1`, `y11c-filter-funnel-flask-empty-v1` and `-sand-v1` (aligned pair, drawn with one box), `y11c-evaporating-basin-hotplate-v1` and `-crystals-v1` (aligned pair, drawn with one box; the crystals plate is also used alone with its own box), `y11c-watch-glass-v1`, `-sand-v1`, `-salt-v1`, `m6-wash-bottle-v1`, `m8-drying-oven-v1`, `y11-sieve-bowl-filtered-v1`, `c11-cuso4-beaker-dissolved-v1`, `c11-cuso4-beaker-crystal-v1`. No plate missing.

## Departures from the design (with reasons)

- **Ion glyphs.** The shared glyph writes the Na+ and Cl- signs as text about 8 px tall, which fails the checker's small-text rule. This lesson's parts override `Glyph` and `Particles` to draw the signs as white strokes (same colours and sizes). V04 and V05 inherit the override.
- **Scene 2 pore view.** Built as a particle-box run with a membrane (water and ions pass at 30% per hit, sand cannot). The run's axis is turned so the paper lies across the view. Readouts ("water molecules", "ions", "sand grains") count particles below the paper, read from the run. A key (water molecule, ions, sand grain) fills the right column until "That's filtration". Water also crosses back upwards (the model is a membrane), so the counts settle rather than reaching every particle.
- **Scene 3.** The coded glass rod stays coded (root decision 2). Added a small close-up circle "on the paper" (grains settle, water passes) so the right column is not empty before "residue".
- **Scene 5.** The hand tag "ions went through" sits under the flask, not beside the cone, to avoid covering the plate.
- **Scene 6.** The drying oven door cannot open (painted); the watch glass of sand moves into the oven and returns, with a "later" tag, as the time jump. The wash bottle "squeeze" is a small rotation of the whole plate (no non-uniform scaling).
- **Scene 8.** The filtrate pouring into the basin is not drawn (the basin plate already holds liquid); the scene opens with the basin heating. The meter reads "saturated" at the top line.
- **Scene 9.** Point labels at 34 px; the cooling markers and the four readouts are read from the drawn curves (Catmull-Rom through the design's values; KNO3 31 g at 20 C and 169 g at 80 C, NaCl 36 and 38 g). Root call 1 of the design applies.
- **Scene 10.** The crystal face is a coded lattice that grows ion by ion; the "boiled to dryness" and slow/fast cases are coded insets.
- **Scene 11 (root fix, 20 Nov).** From the first frame the right half shows the order as plates: the filter funnel and flask ("1. filter") with an arrow to the crystals basin ("2. crystallise the filtrate"), each pen-ringed on "Filter first" and "then crystallise". This picture gives way to the sieve on "Filter paper works". The crossed "crystallise first?" panel and the memory card are unchanged.
- **Attempts (root fix).** "Pause here to answer." now arrives whole (fade, no typing reveal) in both attempt scenes, through a `whole` option on this lesson's `PauseRing`, so v04 and v05 are unaffected.
- **Scene 15.** Answer (b) is framed on "To get crystals" (the start of the answer sentence) rather than on "dry them", so it lands while it is being spoken.
- **Scene 16 (final frame).** The basin is at the left-centre (x 360, 620 px wide), with the tag and question chips at the right; v04 reuses `HB16` from this file for its opening frame.
- **Key notes.** Five two-line bullets at 38 px, trimmed from the design's wording (same facts), with the framed memory card. The notes scene is the measured 45 s.

## Cue check

All cue phrases checked against the measured captions with a script (0 missing). Examples: "trapped" 755, "residue" 512, "filtrate" 640, "No" 17, "clear doesn't mean" 721, "dry" (2nd) 684 ticks "dry sand", "dry them" 916 ticks "dry salt", "crystallise" 621 frames 138 g, "Pause here" 432 and 600 start the full ring, holds from `voiceover.endFrame`.

## Checker result

`npm run grade:explainer -- Explainer-chem-y11-m1-v03`: **PASS WITH WARNINGS (0 failures, 1 warning)**: dense key notes (506 characters including the memory card). Re-run after the root fixes: same result; the order-and-rule sample frame is now 17% empty. Report: `out/explainer/Explainer-chem-y11-m1-v03/grade/Explainer-chem-y11-m1-v03-grade.md`; sheet: `out/explainer/Explainer-chem-y11-m1-v03/grade/Explainer-chem-y11-m1-v03-grade-sheet.jpg`.

Earlier rounds failed on the ion sign text (fixed with the drawn signs) and an early key-notes frame (fixed by bringing the notes in by frame 40).

## Builder's sheet grade

A (borderline on frame 1, where the soluble view has not yet opened; the V02 "salt: dissolved" callout now stays until that cue so the right side is not bare).

## Check at playback speed

- Scene 2: the pore view speed and how quickly water crosses; the counts settle as particles move both ways.
- Scene 3: the beaker tilt and return, stream, drips and the cross-fade to the sand plate around "residue".
- Scene 5: the drop's arc to the watch glass and the crystal ring on "behind".
- Scene 6: the watch glass into and out of the oven; the "dry sand" tick.
- Scene 8: the water-left readout, meter and lattice growth against "concentrated", "saturated", "crystals".
- Scene 9: both markers sliding against "Cool a saturated solution" and "about thirty six at twenty".
- Scene 10: impurity particles bouncing off the lattice face.
