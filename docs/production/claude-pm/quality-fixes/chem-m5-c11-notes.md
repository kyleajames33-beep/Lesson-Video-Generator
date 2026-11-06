# chem-m5-c11 (how ionic compounds dissolve): quality fix, 6 Nov 2026

Grade before: B (audit frames 4, 7, 15). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/chem-m5-c11-sheet.jpg` (16 stills at the original audit frames 506 to 15680). Extra checks: 7100, 16400.
Narration, audio and measured timing are unchanged. New animation uses word cues in `docs/production/claude-pm/lessons/c11/measured/lesson.json`.

## Changes
- **Two energy steps (frame 4, title only).** The water thermometer, the energy ledger (base line, start label and a labelled energy axis) and the two animated step icons arrive with the title, labelled "1. Separate the ions" and "2. Hydrate the ions" (40 px). These labels hand over to the coloured "energy in, +" and "energy out, −" lines on their cues. Bars and sums still follow the narration.
- **Entropy (frame 7, one ice cube).** The particle inset is on stage from the start and larger (460 x 360): cations and anions locked in a lattice ("ions locked in the lattice"), which spread through the water on "spread out through" ("ions spread through the water"). "entropy increases" is 44 px.
- **Decision rule (frame 15, empty box).** All three summary rows and their icons fill the box from the start; each row glows on its spoken cue, and the mini ledger fills on "compare the cost" and "payback".
- **Key notes.** Seven short bullets at 36 px replace five paragraphs at 30 px. The memory aids card is unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (40 s; it was 759), per the root rule.

## Files
- Edited: `src/explainer/lessons/chem-m5-c11/config.ts`, `s2.tsx`, `s4.tsx`. `parts.tsx`, `common.tsx` and `assets.ts` are unchanged (c13, c14, p01, p03 and chem-m6 lessons import them); only props passed to shared parts changed.
- Typecheck passes (scoped tsconfig, c05, c07 and c11).

## Plates needed
None. The entropy scene still uses the interim ice-cube plate for the cold pack (unchanged; brief 59 cold pack not delivered).

## Still to check at playback speed
The step labels handing over to the coloured lines, the lattice spreading in the inset, and the row glows in the summary box. Frame 4 is better but still the lightest frame (the ledger bars only grow from "Step one").
