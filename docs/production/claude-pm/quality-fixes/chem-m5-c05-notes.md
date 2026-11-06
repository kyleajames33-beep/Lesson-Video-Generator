# chem-m5-c05 (writing K expressions): quality fix, 6 Nov 2026

Grade before: B (audit frames 5, 7, 8). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/chem-m5-c05-sheet.jpg` (16 stills at the original audit frames 404 to 12527). Extra checks: 5700, 6500, 13000.
Narration, audio and measured timing are unchanged. New animation uses word cues in `docs/production/claude-pm/lessons/c5/measured/lesson.json`.

## Changes
- **From scratch (frame 5, title only).** The cobalt tube and the full cobalt equation arrive with the title (frames 10 and 22), with "the cobalt tube" tagged until "First". The ring, tick and fraction steps still follow their cues.
- **Carbon (frame 7, small coded block).** The painted sealed vessel from the squeeze video (`g03-carbon-vessel-v1`, 800 px tall, not stretched) fills the left side, with CO2 and CO particles moving above the lump and a gas key. "pure solid: concentration does not change" points at the lump, "squeezing could not crowd it any more" arrives on its words, and the lump greys out on "the carbon never appears".
- **Size of K (frame 8, one fraction and an arrow).** The K scale (three bands, 10^-30 to 10^13 ticks) and the three example cards (flask with N2 + O2, sealed HI tube, copper ammonia tube) are on stage from the start, each with "K = ?". Band labels, markers and K values still arrive on their spoken cues; the copper tube turns deep blue on "ten to the thirteen".
- **Attempt.** Both items and their givens arrive with the card (frames 8 to 46), as in the accepted examples. "Pause here to answer" stays on cue.
- **Key notes.** Eight one-line bullets at 40 px replace four paragraphs at 36 px. The framed memory aid is unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (40 s; it was 756), per the root rule. The video grows by about 14.8 s, all at the end.

## Files
- Edited: `src/explainer/lessons/chem-m5-c05/assets.ts` (adds the G03 carbon vessel plate), `config.ts`, `s3.tsx`, `s4.tsx`, `s5.tsx`.
- `parts.tsx` and `common.tsx` are unchanged (other lessons import them). `CarbonVessel` and `GasKey` are imported read-only from `chem-m5-g03a/board.tsx`.
- Typecheck passes on a scoped tsconfig covering the c05, c07 and c11 configs.

## Plates needed
None.

## Still to check at playback speed
The gas particles moving in the vessel, the lump greying, and the "K = ?" tags crossfading to the K values.
