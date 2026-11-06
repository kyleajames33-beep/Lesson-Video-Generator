# bio-m7-b09 (immune memory and vaccines): quality fix, 6 Nov 2026

Grade before: B (audit frames 15, 16). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b09-sheet.jpg` (16 stills at the audit frames 446 to 13822). Extra checks: 12500, 12950.

Narration, audio and measured timing are unchanged.

## Changes
- **Frame 15 (ghosted crossfade).** The audit frame 12930 is the exact boundary between feedback-two and decision-rule, so the still falls in the shared 0.5 s scene fade in the `ExplainerVideo` shell. I left that fade alone.
  - Feedback-two has no scene-local ghosting. At 12500 the question, verdict and current row are fully opaque; earlier rows grey as designed.
  - Decision-rule is fully opaque from its first frames (12950).
  - No code change was needed.
- **Key notes (frame 16, dense).** Seven one-line bullets at 32 px replace five long paragraphs at 25 px. They cover primary, the fall and memory cells, secondary, specificity, vaccine and booster, active and passive. The memory card is unchanged (moved to 810).

## Files
- `src/explainer/lessons/bio-m7-b09/s3.tsx` (NOTES and the NotesBoard size) was edited.
- `parts.tsx` is untouched (g03 imports it).
- The typecheck passes on `out/explainer/tsconfig.m7b070809.json`.

## Notes
- The re-rendered sheet will still show a crossfade at frame 15 because of where the audit samples fall. It is not a defect.
- Ready to re-render.
