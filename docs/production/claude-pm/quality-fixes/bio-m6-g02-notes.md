# bio-m6-g02 (evaluating biotechnology: HSC-style practice): quality fix, 6 Nov 2026

Grade before: B (audit frames 3 to 14: answer panels and stimulus text far too small). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-g02-sheet.jpg` (16 stills at the audit frames, 449 to 13921). Extra checks: 3664, 4674, 7444, 8583, 8963, 11063, 12478.

Narration, audio and measured timing are unchanged. All animation stays on the existing word cues.

## Changes

- **No side rail.** The mini verdict strip is gone from every question scene. In the hook, the full strip now fades out at the end instead of shrinking into a rail.
- **Question cards.** They run full width (x 60, w 1800) at 32 px, with 30 px table text (were 24 to 26 px, shrunk to 0.66 to 0.75 in walkthroughs, so about 16 to 18 px).
  - Each walkthrough shows only the card items its step needs: Q1 table + demand, Q2 stem or method + demand, Q3 the relevant paragraphs + demand. The real exam wording stays, with givens underlined on cue.
  - Q1 table headers are now "Before" and "Ten years after", so the 30 px table fits. The stem still says "sprayed" and "ten years after".
- **Staged answer** (`big.tsx` `StagedAnswer`). The current part writes on at 42 px in an amber card, with its role tag (24 px) and tick. When the next part starts, each earlier part collapses to a ticked 30 px short line. The mark counter is 32 px. A loop arrow joins the condition to the verdict (Q1, Q2, Q3).
- **Q1 plan.** Level-coloured bands sit on the table rows: species teal, crop genetic purple, pest grey. The 36 px legend chips, a large levels diagram (34 px labels) and the baseline chip fill the space under the card.
- **Q1 weak answer.** Answer A is 42 px. Answer B is a 30 px short-line list on the right. The slots, lost-marks tag and mistake chip are 32 to 36 px.
- **Side visuals** at x 1320 to 1860, with 24 to 38 px labels (were 18 to 22 px):
  - a larger nuclear-transfer strip and gene pool;
  - large b19 test chips and evidence ladder (30 px);
  - the bearer icons, waiting dimmed from the start.
- **Attempt scenes.** Card 32 px, answer box 30 px, and the countdown in the right column. Every demand stays visible through the hold.
- **Key notes.** Eight one-line bullets at 34 px replace five paragraphs at 27 px. The memory aid is unchanged.

## Files

- New: `src/explainer/lessons/bio-m6-g02/big.tsx`.
- Edited: `common.tsx` (card specs), `s1.tsx`, `s2.tsx`, `s3.tsx`.
- No shared kit (skills-shared, skills-s04), legacy or b19 file was edited.
- The scoped typecheck passes (b15, b18, g02 and b16 graphs).

## Plates needed

None.

## Still to check

- At playback speed: the collapse from each current part to its short line, and the jump between card subsets at scene cuts.
- Ready to re-render on the existing narration.
