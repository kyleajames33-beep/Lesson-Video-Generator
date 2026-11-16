# bio-m8-b14 (when genetics can help prevent disease): new build, 16 Nov 2026

Sheet: `bio-m8-b14-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-bio-m8-b14`, measured narration `docs/production/claude-pm/lessons/m8b14/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Continuity: b13 (built here) hands off with "Next: When can genetics help prevent disease?"; this lesson opens on the design's own hook and hands off to hearing loss (ear plate on the Next chip).

## Files created
- `src/explainer/lessons/bio-m8-b14/`: `common.ts`, `assets.ts` (17 plates, measured boxes, feature points; the blastocyst pair shares one union box), `parts.tsx` (JobsBar, Prevented, Al, Punnett, Chain2, Ped), `s1.tsx` (1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11a to 13), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b13/parts` (and through it b12's), `bio-m8-b08/s1` (Lab), `m8-shared/parts` (Enzyme), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: import and `config_m8b14` entry.

## Plates
All design-named plates exist: newborn blood-spot card, liver, liver cell, egg and sperm dish, blastocyst and blastocyst biopsy (matched pair), AAV vector, infusion bag, normal and sickle red cells, ear cutaway. Used in place of coded stand-ins (house rule "never a coded clip-art stand-in for an organism"): `b3a2-brain-v1.png` for the developing brain (design: coded outline), `y11-neuron-v1.png` for nerve cells (design: coded nerve cell outline), `y11-dna-helix-v1.png` for "change", `b3a-egg-v1.png` and `b3a-sperm-v1.png` for the germline chip, `m8-airway-cell-cftr-missing-v1.png` for b06's cystic fibrosis recall, `m5x-sample-tube-rack-v1.png` for carrier screening tests. None missing.

## Departures from the design (with reasons)
- Scene 1: the chip fan is 20 blank grey chips with one amber "PKU" (no invented condition names); "prevented?" and "found?" sit either side of the card.
- Scene 2: the three jobs show as three large cards (magnifier over the card, two blastocysts with a tick, the DNA helix with an edit box) under the jobs bar.
- Scene 3: the enzyme is m8-shared's abstract enzyme with a red cross; phenylalanine dots pile up beside it.
- Scene 5: four outcome tiles carry letters (AA, Aa, Aa, aa) beside two allele pairs; no Punnett grid (as designed).
- Scene 6: the testing-during-pregnancy corner tag is omitted for space; the source embryo shrinks to the upper left and a dashed line joins it to the five tested embryos; strands under each embryo appear on "Notice that".
- Scene 8: the three-generation row is plain circles carrying the edit mark.
- Attempts (root rule): card 1 carries the nerve-cell and embryo plates with "carrier + carrier" and "autosomal recessive" (givens only); card 2 carries the brain plate and its three givens.
- Feedbacks: answer boxes build on cue; framed answers "selection, not engineering" and "helps some families, not most".
- Key notes trimmed to five one-line bullets; memory card "Find, choose, change, then ask what's prevented."

## Cue check
Every cue phrase and question underline resolves.

## Check at playback speed
- Scene 1: spot pulses on "heel-prick", chip fan, brain tint on "severe brain damage" clearing on "grow up".
- Scene 3: phenylalanine bar rising past "harmful" then falling on the diet.
- Scene 6: day-5 embryo to biopsy cross-fade on "A few cells"; shrink and row on "tested for"; one green embryo lifting on "Only an".
- Scene 7: vector dot travelling to the nerve cell; two thumbnails greying on "are lost".

## Grade and ink check
- Grade: PASS WITH WARNINGS (0 failures, 1 warning: dense key notes). Report: `out/explainer/Explainer-bio-m8-b14/grade/Explainer-bio-m8-b14-grade.md`.
- My grade per frame: all 16 A; the lightest are counselling-PGT (sample at the row of tested embryos) and ethics (balance and line scale).
- Ink check: 2 runs, both the deliberate red crossed mistakes. Earlier real collisions ("found?" under the chip fan; the "level stays low" label over the phenylalanine bar; the germline label against a tag) fixed and re-checked.
