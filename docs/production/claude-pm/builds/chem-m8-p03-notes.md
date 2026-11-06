# chem-m8-p03 (identifying unknown ions practical): new build, 6 Nov 2026

Sheet: `chem-m8-p03-sheet.jpg` (16 evenly spaced stills over 15,885 frames; risk scene +120 frames reading hold; key notes held at 1,200 frames).
Builder's grade: A on all 16 frames (lightest: 1, hook, lower edge; 3, controls, before "unknown"). Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/chem-m8-p03/`: `common.ts` (lesson lookups, plates), `parts.tsx` (well-plate geometry and plate, coded well fills with role rings, well lens, labelled bottles, wash bottle, dropper bottle, write-on text, results table with locked inference cell, justification card, row-by-row risk grid, icon fit, glow; re-exports C04), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 11), `s3.tsx` (12 to 17), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: `import {config_m8p03} from './lessons/chem-m8-p03/config';` and `config_m8p03` appended to `explainers` (same edit as P04).

## Plates
All design-named plates are in `public/assets/chemistry/` and were inspected: both well plates, the m5x bottle, wash bottle, dropper bottle, beaker, the v2 flame set including `m8-flame-blue-v2.png`, Cu(OH)2, browning Fe(OH)2, AgCl and Mg(OH)2 rack tubes, fume cupboard, glasses, gloves, waste bottle, and the copper cuvettes for the handoff. None missing; no coded stand-ins.

## Departures from the design
- Results table well labels follow this build's plate layout (row = reagent; columns 1, 2, 3 = blank, known, unknown): "C3 | C | NaOH", "A3 | C | dilute HCl"; the browning example is unknown B (FeSO4 in author note f) in its own C3, not "B4 | another unknown".
- Hook: unknown C in A2, plain water in A1; two round close-up lenses carry the clouds; tap water and the Ag+/Cl- lock lens replace the bottles from "She'd rinsed".
- Aim: the variables card holds a one-row well diagram and a plate thumbnail from the start; the plan's test names are on screen from the start ("drawn up before you start"); meanings write on cue. The c03a/c03b flowcharts are a chip, not dim panels.
- Cation: a ring legend replaces per-column labels; a close-up of C + NaOH fills the flame station before the flame test; flame status lines sit under the burner.
- Anion: three zoom strips (blank, known, C per reagent) beside the plate; the known carbonate well fizzes.
- Risk: the table lists every hazard with a painted object from "Now the risks" and fills harm and control row by row on cue, current row glowing (P01/BM7-P02 fix pattern) instead of one row at a time; thiocyanate fills after speech; +4 s quiet hold with "Pause to read the full risk table". Lead's icon is a dropper bottle crossed out (students do not handle lead).
- Feedback 2: instead of a shrunk unreadable question card, a readable "results you use" panel underlines the five givens on cue, and a justification card (Ca2+, Cl-, equation) fills; the slip chip is "Cl-: tested with silver nitrate", note "say what you saw".
- Key notes (root fix, 7 Nov): five short one-line bullets at 44 px (on-screen only, trimmed to the core fact each), with the framed memory card; hold still at least 1,200 frames.

## Cue check
Every `cues()` phrase resolves against `docs/production/claude-pm/lessons/m8p03/measured/lesson.json` (config bundled and loaded in node; stills rendered). Holds use the measured `responseHold` frames with the shared countdown.

## Grade per frame (final sheet)
1 hook A; 2 aim and plan A; 3 controls A; 4 small scale A; 5 cation A; 6 anion A; 7 record A; 8 justify A; 9 valid/reliable/accurate A; 10 risk A; 11 memory aid A; 12 attempt 1 A; 13 attempt 2 A; 14 feedback 2 A; 15 handoff A; 16 key notes A.

## Check at playback speed
- Hook: drops into A2 and A1, both clouds blooming, the chloride? chip crossing on "prove anything", the Ag+/Cl- tiles locking on "little chloride".
- Scene 5: the wire loop path (acid beaker, flame, known Ca well, flame, beaker, C well, flame) against the flame cross-fades (blue, brick red, blue).
- Results table: inference cells unlocking with the tick after each observation writes.
- Risk: row glow following the narration; the quiet hold.
- Feedback 1 (off-sheet): the question card is shrunk (about 23 px text) as a reference; the fix rail and carry-over arcs carry the answer.
