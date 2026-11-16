# chem-m8-c12 (combining spectra): new build, 16 to 17 Nov 2026

Sheet: `chem-m8-c12-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-chem-m8-c12`, measured narration `docs/production/claude-pm/lessons/m8c12/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Not committed.

## Files created
- `src/explainer/lessons/chem-m8-c12/`: `common.ts`, `assets.ts` (bottle, MS, IR and NMR plates), `parts.tsx` (Ledger, SPEC12 spectra), `s1.tsx` (1 to 9), `s2.tsx` (10 to 17), `scenes.tsx`, `config.ts`.
- Imports read-only: c11b's parts (and through them c11a, c10, c09), c10's `irdata.ts`, `chem-m5-c06a/s4`.
- `src/explainer/registry.ts`: `config_m8c12` entry.

## Spectra (coded only)
| Spectrum | Source | How |
| --- | --- | --- |
| butanone MS (all 14 peaks), 2-chloropropane MS | NIST MS 50206; NIST 229273 / AIST MS-NW-4938 | design values |
| butanone IR | MEK-IR (experimental liquid film, page 2 of the Investigation 2 handout) | digitised here (`butanone-experimental-p2.png`); 21 table bands within 3 cm⁻¹ (one 6) and 3 %T |
| ethanoic acid IR (mini) | A306-IR | c10's digitised trace |
| methyl methanoate IR (mini) | A1208-IR (SDBS 1208, IR-NIDA-20626) | digitised here (`methyl-formate-sdbs-1208-p3.png`); table bands within 6 cm⁻¹; the reproduction is cropped, so the trace ends near 760 cm⁻¹ (the mini axis runs 4000 to 500) |
| butanone ¹³C and ¹H, 2-chloropropane ¹³C and ¹H, ethanoic acid and methyl methanoate ¹H, ethyl propanoate ¹H | design's measured records | lines at the listed centres |

The 2-chloropropane septet is drawn at a minimum visible height (author note e). Butanal appears only as dashed prediction brackets (no fabricated multiplet). No band-list fallback was needed.

## Readiness review build fix (brief 245)
Scene 4: the 3230 to 3550 shade carries "no broad band: no O–H"; the weak 3416 dip has a grey chip "weak, narrow: not an O–H band" below the trace on a dashed leader, fading on "but-3-en-2-ol"; the recall "c10: a missing band rules out" writes in the IR ledger row (it gives way to "C=O ✓ O–H ✗" on "aldehyde").

## Plates
`p03-dropper-bottle-v1`, `m8-mass-spectrometer-v1`, `m8-ir-spectrometer-v1`, `m8-nmr-machine-v1`. All exist. None missing.

## Departures from the design (with reasons)
- Layout: strip along the top, dock lower left, card centre right, ledger as a narrow column at the right edge (scenes 1 and 3 to 8); scene 2 uses a full-width question card with the plates as row icons.
- Scene 4: the C=O rings on the three remaining strip cards are shown as the three cards glowing (the strip structures are small).
- Scene 5: the swap arc is a mirror line with the two methyl rings lit.
- Scene 7: the pieces are three condensed-formula chips that slide together, then the full structure with ringed hydrogens.
- Scene 9: the crossword is a small coded grid (MS across, CHO down) beside a clue list; the ledger ticks.
- Scene 11: four icon cards (72 spectrum, groups line, a proton spectrum, ticks).
- A2 card: the question text sits in the left column at 28 px (the long card needs it), the proton spectrum at right.
- Key notes: four short bullets.

## Cue check
116 cue phrases resolve; every underline matches its card text.

## Check at playback speed
- Scene 7: the pieces sliding together on "only one way".
- Scene 8: the prediction brackets and the red "not there" rings in order.
- Scene 9: ledger rows lighting and ticking in turn.

## Grade and ink check
- Scoped typecheck: clean.
- `npm run grade:explainer -- Explainer-chem-m8-c12`: PASS WITH WARNINGS (0 failures, 1 warning: faint text in the check-every-clue sample, the crossword caption while it fades in). Earlier failures (22 px data-sheet and axis text, ledger subscripts, empty corroborate and check openings) were fixed. Report: `out/explainer/Explainer-chem-m8-c12/grade/Explainer-chem-m8-c12-grade.md`.
- My grade per frame (final sheet): 1 hook A; 2 technique roles A; 3 mass A; 4 IR A; 5 carbon map A; 6 proton map A; 7 rival isomer A; 8 check every clue (before the clue rows) A−; 9 corroborate (opening) A−; 10 corroborate A; 11 attempt 1 A; 12 feedback 1 A; 13 attempt 2 A (card text 28 px; the long stem needs it); 14 feedback 2 A; 15 decision A; 16 notes A. Lesson grade: A.
- Ink check (final run): 7 runs. 6 are the deliberate red strikes; 1 is the coded "?" on the bottle's painted label. Fixed and re-checked: the ledger note overflowing its row, the 2-methylpropanal label on a ring, the integration "2" on the singlet, "not there" on the singlet, the ester chip on the trace, the structure crossing the card edge, and the countdown caption.
