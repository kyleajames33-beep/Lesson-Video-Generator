# bio-m6-b15 (insemination and pollination compared): quality fix, 6 Nov 2026

Grade before: B (audit frames 2 to 5, 11, 13, 16). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b15-sheet.jpg` (16 stills at the audit frames, 448 to 13886). Extra checks: 1700, 2700, 3600, 8400, 9700, 10800, 11500, 12600.

Narration, audio and measured timing are unchanged. All animation stays on the existing word cues.

## Changes

- **Rail (`parts2.tsx` `Rail2`).** Labels are 28 px (were 24 px), with shorter names: "deliver + keep out" and "gene pool effect".
- **2. What both do.** The meiosis cells are 400 px. Gamete rings are r 17 (were 11). The calves are 180 px.
  - The labels are 40 to 42 px, in ink (were 28 px grey).
  - Sorter, X straw and Y straw labels are 36 px. The sorting set-up is centred.
  - The divider is hidden, because this scene is shared by both methods.
- **3. Collect and store.** The floret waits greyed in the right column from the start ("next: pollen") and lights on "Pollen is collected".
  - New 34 to 36 px labels: "semen collected", "diluted: many doses", "frozen in thin straws".
  - "anthers: make pollen" is 38 px. The clock is larger. The pills are 36 px.
- **4. Deliver.** The tract and the floret wait dimmed from the start. Labels are 34 to 38 px: uterus, cervix, "thawed dose", on heat, "stigma exposed", and the pills and tags.
- **8. Writing a compare.** The table text is 34 px (was 26 px).
- **10a. Exam 1.** The givens are drawn in the empty answer space as they are read, then cleared when the answer box opens:
  - the tomato truss, "one chosen father plant";
  - an amber self-loop, "pollinates itself";
  - the bull and a dotted WA farm to NSW calves arc.
- **10b. Feedback 1.** The question strip is 29 px (was 22 px). The rows are 32 to 36 px.
- **10c. Exam 2.** The data are drawn row by row beside the table: cows the same, fathers 1200 to 150 as bars, affected calves 1 to 6 as dots. The demand and answer box are narrower, so nothing overlaps.
- **10d. Feedback 2.** The table is shown at full size (was 0.85). The pills are 30 to 34 px.
- **11. Decision rule.** The four step cards wait dimmed from the first frame and light on cue (was a title only).
- **12. Key notes.** Eight one-line bullets at 34 px replace five paragraphs at 28 px. The memory aid is unchanged.

## Note on frame numbers

The audit's "13 title only" matches frame 15 (the decision rule), and that is fixed. Frame 13 (exam 2, early) now also carries the drawn data.

## Files

- New: `src/explainer/lessons/bio-m6-b15/parts2.tsx`.
- Edited: `s1.tsx`, `s2.tsx`, `s3.tsx`.
- `parts.tsx` is untouched (B16 imports its `ClockRing`). The scoped typecheck passes.

## Plates needed

None.

## Still to check

At playback speed, check the self-loop and the WA to NSW arc in exam 1.

Ready to re-render on the existing narration.
