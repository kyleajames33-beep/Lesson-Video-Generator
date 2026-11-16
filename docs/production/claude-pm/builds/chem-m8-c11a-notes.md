# chem-m8-c11a (carbon-13 NMR): new build, 16 to 17 Nov 2026

Sheet: `chem-m8-c11a-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-chem-m8-c11a`, measured narration `docs/production/claude-pm/lessons/m8c11a/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Not committed.

## Files created
- `src/explainer/lessons/chem-m8-c11a/`: `common.ts`, `assets.ts` (NMR machine, sample tube), `parts.tsx` (NG, dx, NmrAxis, NmrSpec with carbon lines and proton multiplets, AxisArrow, DataSheet13, Bore, Nuclei, Cloud, Squiggle, environment colours E1 to E4, extra structures), `s1.tsx` (1 to 8), `s2.tsx` (9 to 17), `scenes.tsx`, `config.ts`.
- Imports read-only: c10's parts (and through them c09's), `chem-m7-c01/molecules`, `chem-m5-c06a/s4`.
- `src/explainer/registry.ts`: `config_m8c11a` entry.

## Spectra (coded only)
Every drawn line is the design's measured CDCl₃ value (HMDB, G97, nmrshiftdb2 as listed): propan-1-ol 64, 26, 10; propan-2-ol 64, 25; ethanol 58, 18; ethyl ethanoate 171, 60, 21, 14; 2-methylpropan-2-ol 69, 31; methyl ethanoate (feedback card) and propanoic acid tags "about 181, 28, 9". Heights are deliberately unequal (C=O and quaternary lines shorter), and no copy relies on heights. TMS grey at 0. Counts only (not drawn): butan-2-one 4, pentan-3-one 3, the A1 rivals 4, 4, 3.

## Plates
`m8-nmr-machine-v1` (hook, scene 2, and a dimmed thumbnail later), `m8-nmr-sample-tube-v1` (scene 2, drops into the magnet). Both exist; boxes measured. None missing.

## Departures from the design (with reasons)
- Hook: the NMR machine plate is on screen from the first frame (the opening was otherwise mostly empty); "carbon-13 NMR" writes under it on cue. Empty mini axes sit ready under each propanol.
- Scene 2: the bore is a coded magnet card beside the machine plate (not a window cut into the plate); nuclei settle five with, four against on "line up".
- Scene 3: the cloud is scaled up; a reference "carbon on its own: fully shielded" cloud sits top right; the two frequencies and the two-line chart sit lower right.
- Scene 6: structures are skeletal with environment rings (not every H drawn); the "flip" check uses a faint mirrored copy (red for propan-1-ol, teal for propan-2-ol). Mirror lines start below the OH so they do not cross the label.
- Scene 7: walk arrows are two short arrows under butan-2-one; pentan-3-one's pairs share ring colours.
- Scene 8: inset 2 shows split lines collapsing into one line.
- Scene 10: the formula chip is C₄H₁₀O as the design states; the Cl/Br row is struck through on the card.
- Scene 11: the ranges on the axis are C–O 50 to 90, C=C and aromatic 90 to 160, C=O 160 to 220.
- Feedback 1: the "turns a third of a turn" motion is shown as the three CH₃ rings lighting together (no rotation).
- Key notes: five short bullets.

## Cue check
124 cue phrases resolve; every underline matches its card text.

## Check at playback speed
- Scene 2: tube drop, nuclei settling, one nucleus flipping and flashing on "resonance".
- Scene 3: the cloud shifting toward O on "pulls electron".
- Scene 4: tick numbers writing right to left; the "more deshielded" arrow.
- Scene 9: one data-sheet row lit at a time as each line takes its colour.

## Grade and ink check
- Scoped typecheck: clean.
- `npm run grade:explainer -- Explainer-chem-m8-c11a`: PASS WITH WARNINGS (0 failures, 4 warnings: sparse hook and symmetry samples, key notes 491 characters with the two memory aids, few pictures). Earlier failures (empty hook and shielding openings, swap-test frame, faint dimmed data-sheet rows, 16 to 24 px superscript titles) were fixed. Report: `out/explainer/Explainer-chem-m8-c11a/grade/Explainer-chem-m8-c11a-grade.md`.
- My grade per frame (final sheet): 1 hook (opening) A−; 2 tiny magnets A; 3 shielding A; 4 scale A; 5 environments A; 6 symmetry A−, sparse at that moment; 7 swap test A; 8 single lines A; 9 data sheet A; 10 overlap A; 11 attempt 1 A; 12 feedback 1 A; 13 attempt 2 A; 14 feedback 2 A; 15 decision A; 16 notes A. Lesson grade: A.
- Ink check (final run): 5 runs, all deliberate (the crossed chips and the struck Cl/Br row on the data sheet). Fixed and re-checked: the sample tube dropping over the title, field lines through the electron-density label, the abundance label on the dot grid, a grey tag edge under a text line, and the countdown caption.
