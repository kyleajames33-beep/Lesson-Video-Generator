# chem-m5-p03 (solubility rules practical): quality fix, 6 Nov 2026

Grade before: B (audit frames 8, 10, 15, 16). Grade after (stills): B+.
Sheet: `chem-m5-p03-sheet.jpg` (16 stills at the original audit frames 488 to 15138). Extra checks: 1500, 4400, 7700, 8302, 9700, 14500.
Narration, audio and measured timing are unchanged; existing word cues only.

## Changes
- **Test the liquid (frame 8, title only; `s2.tsx`).** The settled PbI2 tube, both clean test wells (A and B) and both dropper bottles (KI, Pb(NO3)2) are on the bench with the title. "what is still dissolved here?" points at the clear liquid until "take some clear liquid". The pipette, arrows, drops and results stay on their cues. The wells are spaced further apart so the two result notes no longer overlap (they did in the published version, frame 9), and the "faint in both" chip moves clear of the bottle.
- **Risk assessment (frame 10, one-row table; `s3.tsx`).** All five hazards (bottle or waste icon and name) are listed with the table. Harm and control write on as each is narrated, and the row being narrated glows. Uses the new optional `cellAt` in the p01 Table.
- **Small text.** Rules cards (scenes 1, 2, 5) and four labels raised from 22 or 24 px to 26 px.
- **Decision rule (frame 15, one line in a large box; `s4.tsx`).** The seven steps sit faintly on the board from the start and write in on their cues (glow unchanged).
- **Key notes (frame 16).** Eight one-line bullets at 36 px replace seven paragraphs at 25 px. The memory aids are unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (was 759); about 14.7 s added at the end.

## Files
- Edited: `src/explainer/lessons/chem-m5-p03/config.ts`, `s1.tsx`, `s2.tsx`, `s3.tsx`, `s4.tsx`.
- `parts.tsx` and `assets.ts` unchanged (m6-p01 imports p03 assets).
- Scoped typecheck passes.

## Plates needed
None.

## Still to check at playback speed
The question tag handing over to "clear liquid"; risk cells writing in; the decision-board step preview.
