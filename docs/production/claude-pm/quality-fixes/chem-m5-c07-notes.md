# chem-m5-c07 (Haber process conditions): quality fix, 6 Nov 2026

Grade before: B (audit frames 4, 6, 12, 15). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/chem-m5-c07-sheet.jpg` (16 stills at the original audit frames 441 to 13686). Extra checks: 2990, 5100, 13900.
Narration, audio and measured timing are unchanged. New animation uses word cues in `docs/production/claude-pm/lessons/c7/measured/lesson.json`.

## Changes
- **Three temperatures (frame 4, empty axes).** The three curves draw in with the axes as grey dashed previews, tagged "300 C", "450 C" and "600 C", with "same pressure, three temperatures". Each is redrawn in colour, with its moving head and ceiling label, on its spoken cue; each grey tag leaves when its ceiling label arrives.
- **Pressure (frame 6, ghosted box).** The squeezed box was fading out over "So why not a thousand atmospheres?". It now stays solid until just before the bars grow into its space ("less extra ammonia").
- **Feedback, temperature (frame 12, empty table).** The plant's settings ("about 250 C, 50 to 100 atm, copper-based catalyst") and the student's claim ("25 C and 500 atm") sit on the right from the start, then give way to the 25 C inset. The table still fills cell by cell on its cues.
- **Decision rule (frame 15, half-empty card).** A small yield and speed against temperature graph fills the right of the temperature card: yield draws on "gives out heat", speed on "too slow when cold", and the crossing is marked on "compromises".
- **Key notes.** Seven one-line bullets at 38 px replace six paragraphs at 33 px. The framed memory aid is unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (40 s; it was 759), per the root rule.

## Files
- Edited: `src/explainer/lessons/chem-m5-c07/config.ts`, `s2.tsx`, `s3.tsx`, `s5.tsx`. `parts.tsx`, `common.tsx` and `assets.ts` are unchanged.
- Typecheck passes (scoped tsconfig, c05, c07 and c11).

## Plates needed
None.

## Still to check at playback speed
The coloured curves running over the grey previews, the recap cards handing over to the inset, and the mini graph drawing in the decision card.
Note: `s4.tsx` still holds unused coded tug-of-war figures (`Puller`) from an earlier design. They are not rendered (the scene draws a graph), so they were left alone.
