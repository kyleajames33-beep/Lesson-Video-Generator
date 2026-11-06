# bio-m7-b07 (how B cells target an antigen): quality fix, 6 Nov 2026

Grade before: B (audit frames 6, 8, 11, 13). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b07-sheet.jpg` (16 stills at the audit frames 432 to 13403). Extra checks: 4810, 6380, 9700, 11000.

Narration, audio and measured timing are unchanged. All new animation uses word cues in `docs/production/claude-pm/lessons/m7b07/measured/lesson.json`.

## Changes
- **Clone (frame 6, one small cell).** The selected B cell now grows to a 460 px hero at the centre while it divides. "the B cell divides" lands on "divides", then "two identical daughter cells". The two daughters shrink into the first level of the clone tree before "again and again".
- **What antibodies do (frame 8, empty stage).** While "Antibodies don't kill bacteria by themselves. They bind" is spoken, a large wound bacterium is coated with bound antibodies (on "bind"). The tags read "antibodies bound", "the bacterium is still whole" and "binding helps in three ways". On "cover the parts" the bacterium shrinks onto the membrane and becomes panel 1 (block).
- **Exam 1 (frame 11).** The whole question lands with the card. The painted mouse arrives on "A mouse" ("injected: killed bacterium A"). Tube 1 (bacterium A plate) and tube 2 (coccus plate, bacterium B) arrive on "The serum was mixed", with "+ serum from the mouse". Nothing shows clumping or binding.
- **Exam 2 (frame 13).** The whole question lands with the card. A small painted timeline shows the given: "day 0: new pathogen" (bacterium plate), an arrow, then the antibody plate with "day 7 to 10: antibodies detected" on "a week or more". No B cells, so nothing answer-bearing.
- **Key notes.** Seven one-line bullets at 32 px replace five paragraphs at 27 px. The memory aid is unchanged.

## Files
- `src/explainer/lessons/bio-m7-b07/s2.tsx`, `s3.tsx` and `config.ts` (assets list extended) were edited.
- The new file `plates2.ts` holds the house mouse plate (`y11-house-mouse-v1.png`, measured alpha box).
- `parts.tsx`, `assets.ts` and `board.tsx` are untouched, because b08, b09, b10 and g03 import from this lesson.
- The typecheck passes on `out/explainer/tsconfig.m7b070809.json` (b07, b08, b09, b10, g03).

## Notes
- No new plates are needed.
- Judge at playback speed: the hero cell dividing and shrinking into the tree, and the coated bacterium moving into panel 1.
- Ready to re-render.
