# bio-m6-b13 (weighing benefits and biodiversity risks): quality fix, 6 Nov 2026

Grade before: B (audit frames 3, 4, 5, 6, 7, 8 and 16). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b13-sheet.jpg`. It holds 16 stills at the audit frames (436 to 13520). I also checked extra stills across the Bt cotton, gene drive, undo and verdict scenes.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6b13/measured/lesson.json`.

## Changes by scene

- **2 to 4. The four-question board (frames 3 to 5).**
  - The rows are 156 px tall (they were 136).
  - The wide column is 1030 px (it was 940): the split moved to 1600 and 780.
  - Bt cotton cell text is 38 px (it was 30), and gene drive text 36 to 38 px (it was 28 to 30).
  - Row labels are 34 px grey and 40 px when lit (they were 30 and 36), and the row questions are 30 px (they were 26).
  - The thumbnail words ("before Bt", "with Bt", "refuge" and the season pill) are 26 px (they were 20).
  - The foot balances moved down to clear the taller rows.
  - Two on-screen lines were shortened to fit: "target mosquito: down if the drive works;" and "resistance: genetic change, slowed by refuges". The narration is unchanged.
  - "builds on the ethics checklist" is 30 px.
- **5. Can it be undone? (frame 6).** The undo card opens in the centre at 1.45 scale. It eases to its old place at the left just before "won back", when the lanes arrive. The card words are 32 px, and the lane labels ("season", "generation", "switch back", "releases stop") are 28 to 30 px (they were 22 to 24).
- **6. Two verdicts (frames 7 and 8).** The compact board rows are 96 px. The labels are 36 px, and the cells are 40 px hand in a darker ink (they were 28 and 27 px, grey). The balances are at 0.9 scale and sit lower. "a model verdict" is 30 px.
- **7. What would change the verdict?** The two small verdict bars are 30 px (they were 27). "resistance alleles in caterpillars" is 32 px, and "seasons" 30 px.
- **12. Key notes (frame 16).** Seven one-line bullets at 33 px replace five paragraphs at 29 px. The framed memory aid is unchanged.

Scenes 1, 8 (memory) and the exam items are unchanged; the audit did not flag them.

## Files touched

- `src/explainer/lessons/bio-m6-b13/parts.tsx`. No other lesson imports B13's parts, so it was edited in place.
- `s1.tsx`, `s2.tsx`, `s3.tsx`.
- No shared or legacy file was edited. The parts imported from B01, B07, B08, B09, B11 and B12 are unchanged.

The typecheck passes on the B08, B09, B10, B12, B13 and B15 graphs.

## Plates needed

None.

## Still to check

- Judge at playback speed: the column-width shift between the Bt cotton and gene drive scenes with the larger text, and the undo card easing left.
- Ready for Codex to re-render on the existing narration.
