# bio-m6-b18 (recombinant DNA): quality fix, 6 Nov 2026

Grade before: B (audit frames 3, 4, 6, 13, 15, 16). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b18-sheet.jpg` (16 stills at the audit frames, 433 to 13433). Extra checks: 2674, 3704, 5316, 10205, 11007.

Narration, audio and measured timing are unchanged. All animation stays on the existing word cues.

## Changes

- **3. Cut and 4. Paste.** The base-glyph strands are drawn 1.45 times larger, from x 110, with the enzyme, the recognition box and the ligase scaled with them.
  - The flanks slide less, so they stay on screen.
  - The plasmid ring moves to x 1620. In Cut it waits dimmed, labelled "plasmid", once the phage panel clears.
  - The labels are 34 to 42 px: recognition sequence, staggered cut, ends pair, the marker label and the tags.
- **6. Pick.** The tube is larger and labelled "transformed bacteria". Both agar plates wait at half strength from the first frame (was a tiny tube in an empty frame). The labels are 32 to 36 px.
- **10b and 10d. Feedback.** The question strips are 27 px (were 20 px), and the rows moved down to fit.
- **10c. Exam 2.** The givens are drawn in the answer space as they are read, then cleared when the answer box opens: Copy 1 (chromosomal DNA) to a faulty protein chain, and Copy 2 (from mRNA) to a working chain.
  - The two copies are drawn alike. No introns are shown, so the drawing does not give away the answer.
- **11. Decision rule.** All six chips wait dimmed from the first frame and light on cue (was two chips).
- **12. Key notes.** Nine one-line bullets at 33 px replace five paragraphs at 27 px. The memory aid is unchanged.

## Files

- Edited: `src/explainer/lessons/bio-m6-b18/s1.tsx`, `s2.tsx` and `s3.tsx`.
- `parts.tsx` and `assets.ts` are untouched. The scoped typecheck passes.

## Plates needed

None.

## Still to check

At playback speed, check the scaled strand in Cut and Paste, and the ligase passes.

Ready to re-render on the existing narration.
