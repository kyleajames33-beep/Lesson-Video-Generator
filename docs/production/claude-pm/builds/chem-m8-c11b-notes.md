# chem-m8-c11b (proton NMR): new build, 16 to 17 Nov 2026

Sheet: `chem-m8-c11b-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-chem-m8-c11b`, measured narration `docs/production/claude-pm/lessons/m8c11b/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Not committed.

## Files created
- `src/explainer/lessons/chem-m8-c11b/`: `common.ts`, `assets.ts`, `parts.tsx` (fullRow full structures with every H through the M7 kit FullMol, HRing, Full, Integ integration line with step tags, SignalArea), `s1.tsx` (1 to 9), `s2.tsx` (10 to 17), `scenes.tsx`, `config.ts`.
- Imports read-only: c11a's parts (NmrSpec proton mode) and through them c10 and c09, `chem-m7-c01/molecules` (FullMol), `chem-m5-c06a/s4`.
- `src/explainer/registry.ts`: `config_m8c11b` entry.

## Spectra (coded only)
Measured CDCl₃ centres from the design: ethanol q 3.70 (2H), OH 2.60 (tag "position varies"), t 1.23 (3H); bromoethane q 3.42, t 1.70; ethyl ethanoate q 4.12, s 2.04, t 1.26; methyl propanoate s 3.67, q 2.35, t 1.15 (feedback 1 only); pentan-3-one appears only as the A2 card's printed 2.44 and 1.05. Multiplets use Pascal heights with exaggerated spacing (no ppm claim); the tallest line of each signal is scaled so the total area follows the hydrogen count (so the singlet is the tallest single line while the quartet holds more area, as scene 5 needs).

## Plates
`m8-nmr-machine-v1` and `m8-nmr-sample-tube-v1` (scene 2). Both exist. None missing.

## Departures from the design (with reasons)
- Scene 2: the ghost carbon-13 axis shows briefly above the proton axis; the axis is not zoomed to 5 ppm in that scene (the following scenes use the 5 to 0 window).
- Scene 4: c11a's cloud is replaced by an arrow of electron density to O and a grey recall tag (space in the full-structure layout).
- Scene 6: the close-up is coded C and H circles with magnet arrows; the field levels become a 1 : 2 : 1 teal triplet lower right.
- Scene 7: the O–H swap is stated in text (no two-outline flicker).
- Scene 8: reasoning lines use the answer box (newest line bright, earlier lines smaller).
- Scene 11: the icons are one ethanol spectrum with its integration line under the line.
- Feedback 2: the mirror line runs through the C=O carbon; the "3 : 2 = 6 : 4 (10 H)" line sits at right.
- Key notes: four short bullets.

## Cue check
119 cue phrases resolve; every underline matches its card text.

## Check at playback speed
- Scene 5: the integration line drawing right to left with the 3, 2, 1 tags on cue.
- Scene 6: tally rows and the middle line growing twice as tall on "twice".
- Scenes 3, 4, 7: hydrogen rings pulsing on their cues.

## Grade and ink check
- Scoped typecheck: clean.
- `npm run grade:explainer -- Explainer-chem-m8-c11b`: PASS WITH WARNINGS (0 failures, 4 warnings: sparse integration, why-split and attempt-1 samples, few pictures). Report: `out/explainer/Explainer-chem-m8-c11b/grade/Explainer-chem-m8-c11b-grade.md`.
- My grade per frame (final sheet): 1 hook A; 2 same rules A; 3 signals A; 4 integration (opening) A−; 5 integration A; 6 why split A−; 7 n + 1 A; 8 bromoethane A; 9 quartet trap A; 10 ethyl ethanoate A; 11 attempt 1 A− (a plain card: nothing answer-bearing may show); 12 feedback 1 A; 13 attempt 2 A; 14 feedback 2 A; 15 decision A; 16 notes A. Lesson grade: A.
- Ink check (final run): 6 runs, all the deliberate red crossed chips (one is the "CH" of the struck sextet chip). Fixed before it: the "3 : 2 = 6 : 4" line on the pentan-3-one structure, the quartet tag on its integration step, and the countdown caption.
