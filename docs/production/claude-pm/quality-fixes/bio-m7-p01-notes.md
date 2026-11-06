# bio-m7-p01 (epidemic simulation practical): quality fix, 6 Nov 2026

Grade before: B (audit frames 4, 10, 11, 14, 15, 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m7-p01-sheet.jpg` (16 stills at the audit frames 463 to 14368). Extra checks: 9319, 11971, 13752.
Narration, audio and measured timing are unchanged; existing word cues only.

## Changes
- **Frame 4 (controls, scene frame 2).** This is the shared 0.5 s scene fade, not a defect; the scene is solid from frame 15. No change.
- **Risk assessment (`s3.tsx`).** The table frame now grows with its rows, so there is no empty table waiting for rows. Each row arrives on its cue ("Sodium carbonate", "phenolphthalein indicator", "Never taste", "ultraviolet torch", "Wipe up spills"). Text is 30 px hand (was 22 px). Each Control cell has its painted apparatus: clear and pink cups, the dropper bottle, a cup, the UV handle, the door handle. The two footers are merged into one tag.
- **Exam question 1 (`s4.tsx`).** The whole question, both pairs columns and the answer box arrive with the card. Six clear cups under letter chips P to U sit beside the pairs table (nothing answer-bearing).
- **Exam question 2.** The whole question and answer box arrive with the card. A row of eight pink cup plates shows the given "after round 3: all eight cups pink".
- **Feedback 2 (frame 14).** The rows narrow to 1220 px. A right panel shows the model round by round as cup plates (1, 2, 4, 8 pink), with "infected: 1, 2, 4, 8" on "every contact transmits".
- **Decision rule (frame 15).** The rows narrow and wrap at 34 px. A right panel is there from the first frame, and its apparatus changes on each row's cue: the dropper with the minus and plus cups, then the contact sheet and the well plate, then eight cups with a new outlined starter, then the filled well plate with who, when and how.
- **Key notes (frame 16).** Eight one-line bullets at 34 px replace six paragraphs at 26 px. The memory aid is unchanged.

All edits are in this lesson's own `s3.tsx` and `s4.tsx`. The typecheck passes on `out/explainer/tsconfig.m7p010205.json`.

## Plates needed
None.

## Still to check
Check the growing risk table and the decision panel crossfades at playback speed. Ready to re-render.
