# chem-m5-p01 (reversibility and disturbances practical): quality fix, 6 Nov 2026

Grade before: B (audit frames 6, 10, 15, 16). Grade after (stills): B+.
Sheet: `chem-m5-p01-sheet.jpg` (16 stills at the original audit frames 484 to 15017). Extra checks: 9700, 14400, 15200.
Narration, audio and measured timing are unchanged; existing word cues only.

## Changes
- **Table cells on their own cues (`parts.tsx`).** `TRow` gains an optional `cellAt`: a cell with its own time writes on after its row. Rows without it behave as before (p03 imports this Table; no other lesson does).
- **Expected results (frame 6, empty table; `s2.tsx`).** The planned rows (tube 2 Fe(NO3)3 crystals, tube 3 KSCN crystals, tube 4 NaOH drops) are on the table from the start. Colour, shift and reason still write on as narrated, and each row glows while its tube is named. Table text is 26 px (was 24 px); tube labels under the tubes are 28 px (were 24 px). The same table in the dilution scene gets the larger text.
- **Risk assessment (frame 10, one-row table; `s3.tsx`).** All six hazards (painted icon and name) are listed on "each hazard". Harm and control write on as each is narrated, and the row being narrated glows.
- **Temperature footnotes.** The two 24 px footnotes are 26 px, slightly shortened to fit.
- **Decision rule (frame 15, empty box; `s4.tsx`).** The seven steps sit faintly on the board from the start and write in on their cues. The push-and-return loop and the six-tube row are on screen from the start (pulses on cue unchanged). Tube numbers 30 px (were 24 px).
- **Key notes (frame 16).** Eight one-line bullets at 36 px replace six paragraphs at 26 px. The memory aids are unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (was 759); about 14.7 s added at the end.

## Files
- Edited: `src/explainer/lessons/chem-m5-p01/config.ts`, `parts.tsx` (additive `cellAt` only), `s2.tsx`, `s3.tsx`, `s4.tsx`.
- `assets.ts` unchanged (m7 and m8 practicals import it).
- Scoped typecheck passes.

## Plates needed
None.

## Still to check at playback speed
Result cells writing in after the planned rows; the risk-row glow following the narration.
