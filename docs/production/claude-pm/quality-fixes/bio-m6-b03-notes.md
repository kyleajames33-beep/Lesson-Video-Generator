# bio-m6-b03 (point mutations): quality fix, 6 Nov 2026

Grade before: B (audit frames 5, 8, 9 and 13). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b03-sheet.jpg` (16 stills at the audit frames). I also checked stills in the middle of scenes 5, 7 and 8.

Narration, audio and measured timing are unchanged. Every new animation is keyed to existing word cues in `docs/production/claude-pm/lessons/m6b03/measured/lesson.json`.

## Changes by scene

- **5. Nonsense (frame 5).** The codon 39 strip opens at 1.35x and fills the left two thirds of the stage. It zooms back to 1x as the codon chart arrives on "Change the C to U", which frees the right third for the chart, the folds and the haemoglobin. The "38 amino acids" label moved into the strip group, so it stays aligned at either scale.
- **7. Reading frame (frame 8).** The three-base-deletion strip (beads and codons) is drawn at 1.5x about the stage centre. Its label is 42 px and moved below the strip.
- **8. What decides the effect (frame 9).** The long gene is larger: 26 px beads (up from 15), a taller band, heavier brackets and a 36 px "−1 base" tag. During "type" the row sits mid-stage, with 40 px chips and a 46 px "everything downstream" below it. On "Second, its position" it rises to make room for row 2.
- **10c. Exam question 2 (frame 13).** The painted airway-cell plate with its CFTR channels (`m8-airway-cell-cftr-v1.png`, 390 px tall) appears on "CFTR", labelled "airway cell / CFTR channels (teal)". The answer box narrows, and the countdown moves beside it.
- **12. Key notes.** Seven one-line bullets at 34 px replace four paragraphs at 30 px. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b03/s2.tsx` (scene 5), `s3.tsx` (7 and 8), `s4.tsx` (10c and 12).
- `assets.ts` adds `CFTR_CELL` (with a measured alpha box) to the preload list. Only B03 imports this file.
- `parts.tsx` is untouched, because B04, B05, B08, B09 and G01 import it. B01's files are untouched too.

The typecheck passes on the B01, B02 and B03 graphs.

## Plates needed

None.

## Still to check

- At playback speed: the zoom out in scene 5, and the gene row rising in scene 8. The audit frame 9 lands at the start of the rise.
- The silent, missense and frameshift strips (frames 3, 4 and 7) were not flagged and are unchanged.
- Ready to re-render on the existing narration.
