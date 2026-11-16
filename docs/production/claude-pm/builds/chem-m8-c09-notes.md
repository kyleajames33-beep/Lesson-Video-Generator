# chem-m8-c09 (mass spectrometry): new build, 16 to 17 Nov 2026

Sheet: `chem-m8-c09-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-chem-m8-c09`, measured narration `docs/production/claude-pm/lessons/m8c09/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Not committed.

## Files created
- `src/explainer/lessons/chem-m8-c09/`: `common.ts` (lookups, the two worded questions), `assets.ts` (3 plates, measured alpha boxes), `parts.tsx` (the spectroscopy kit for c09 to c12 and g03: SpecAxes, StickSpec, PeakLab, GapBracket, ToHundred, Spot; SPEC spectra; MOLS and MolAt with bond and atom rings; MolSplit break-and-weigh; CandStrip; IonFlight over the cutaway; BalanceIcon), `s1.tsx` (1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b12/parts` (the bio-m8-g01 practice board, as chem-m8-c13 uses it), `chem-m7-c01/molecules` (Skel, zig, outward), `chem-m5-c06a/s4` (KeyNotesBoard).
- `src/explainer/registry.ts`: import and `config_m8c09` entry after `config_m8c13` (shared file; edited before the coordinator's no-shared-edits rule, see the report).
- No existing spectrum part was found in git or the shared kit (c04's spectra are colourimetry, not MS or IR), so the stick spectrum is new here, in the lesson parts file as the design asks.

## Spectra (coded only)
- Butanone, chloromethane, pentan-3-one: the NIST 70 eV heights listed in the design (Numbers to verify), drawn exactly (73 at 1, 51 at 3.8 and 43 in pentan-3-one at 1.6 kept).
- Bromomethane (A2): the design asked for the NIST record before drawing. Brief 122 (`../assets/brief122-open-items.json`) read the NIST public plot: 15 about 47, 94 100, 96 about 94; those approximate heights are drawn (only 15, 94, 96). The card carries a grey tag "heights read from a measured spectrum". 15 is large enough to name, so the design wording stands.

## Plates
`m8-mass-spectrometer-v1` (hook), `m8-ms-cutaway-v1` (scene 2 full width, thumbnails in 3 and 4), `p03-dropper-bottle-v1` (hook). All exist; boxes measured; the cutaway was inspected on a gridded sheet and its flight path recorded in `parts.tsx` (CUT): tube along y 780, ionisation chamber x 710, plates 890 to 1110, bend arc about (1230, 540) radius 240, detector near (1470, 300). None missing.

## Departures from the design (with reasons)
- Board: the M8 practice board (as c13). Spectrum left two thirds, current card at right; candidate strip only in scenes 5 and 9 (spectrum moves down under it).
- Scene 1: the snapping molecule is a coded four-carbon chain; the candidate boxes sit top right with "possible structures".
- Scene 2: stage chips stay at 0.7 opacity once passed (grade faint-text rule) rather than fully dimmed.
- Scene 4: the spectrum draws from the first frame (the opening read as an empty frame otherwise); the cutaway thumbnail stays top right for continuity; the AnsBox shows a hint before its first line.
- Scene 6: break-and-weigh uses butanone (CH₃CO⁺ kept, ethyl floats off) instead of a generic chain: the four-carbon chain's halves read as single sticks.
- Scene 7: fragment drawings beside each loss row are omitted (space); the two sums for 29 write under the table.
- Scene 10: an added coded row of four chlorine atoms (three 35, one 37) shows the 3 : 1 before the peaks; the bromine inset is a card in the right column.
- Scene 11: the butanone spectrum is the small left panel; rows at right.
- Feedback 2: bromomethane is written as CH₃Br (one carbon; a skeletal drawing is not meaningful).
- Key notes: five one-line bullets (489 characters with the memory aids).

## Cue check
135 cue phrases resolve (checked by script against the measured captions and at config load). Every question underline matches its card text word for word (no phrase relies on a punctuation-only token).

## Check at playback speed
- Scene 2: ion dots turning "+" at the electron streak, three streams bending (light most), the detector flashes, the neutral dot drifting on.
- Scene 9: the two break-and-weigh splits on "forty-three, C" and "fifty-seven, C"; bracket dimming.
- Scene 10: the 50 and 52 recolours and the bromine card on "Bromine's".

## Grade and ink check
- Scoped typecheck (lesson folders c09 to c12, a scratch tsconfig extending the root one): clean.
- `npm run grade:explainer -- Explainer-chem-m8-c09`: PASS WITH WARNINGS (0 failures, 4 warnings: sparse samples at the opening of scene 4, mid-split in scene 6 and in scene 7; key notes 489 characters with the two memory aids). Earlier failures (empty openings in scenes 4, 6 and 10; 16 px "+" on the ion dots; faint dimmed stage chips) were fixed. Report: `out/explainer/Explainer-chem-m8-c09/grade/Explainer-chem-m8-c09-grade.md`.
- My grade per frame (final sheet): 1 hook A; 2 five stages A; 3 molecular ion (opening; the card shows only its hint) A−; 4 molecular ion A; 5 bond breaks (mid-split) A−; 6 common gaps A−, sparse; 7 base peak A; 8 butanone pieces A; 9 isotope pairs A; 10 limits A; 11 attempt 1 A; 12 feedback 1 A; 13 attempt 2 A; 14 feedback 2 A; 15 decision A; 16 notes A. Lesson grade: A.
- Ink check (`ink-check-any.sh chem-m8-c09`, final run): 5 runs. 4 are the deliberate red crossed chips; 1 is the coded "?" on the bottle's painted label (by design). Fixed and re-checked: the memory-aid gap arrow and the gold highlight through the M⁺ cluster label, the 43 label on the dashed expected bar and then on the 29 and 57 bars (now "43: small"), and the countdown caption against the card edge (all attempt scenes).
