# bio-m7-b12 (vector control): quality fix, 6 Nov 2026

Grade before: B (audit frames 11, 13, 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m7-b12-sheet.jpg` (16 stills at the audit frames 456 to 14163). Extra checks: 10040, 11723.
Narration, audio and measured timing are unchanged.

## Changes (all in `src/explainer/lessons/bio-m7-b12/s4.tsx`)
- **Exam question 1.** The whole question (text and survival table) now arrives with the card, not sentence by sentence. The text narrows to 1100 px. A right-hand panel shows the painted sprayer (on "A town sprayed") and Aedes (on "Each year"), with tags for "insecticide X, once a year", "Aedes aegypti: carries dengue" and "lab: standard dose". Nothing in it gives away the answer.
- **Exam question 2.** The whole question arrives with the card. There are two panels: town P (Aedes, "sterile males, weekly for 2 years") and town Q (Aedes with the Wolbachia cell, "Wolbachia, males and females, 4 months"), each on its cue.
- **Key notes.** Seven one-line bullets at 34 px replace the five paragraphs at 22 px. The framed memory aid is unchanged.

`parts.tsx` and `assets.ts` are unchanged (b13 imports them). The typecheck passes on `out/explainer/tsconfig.m7b1213g01.json`.

## Plates needed
None.

## Still to check
- Feedback 1 (frame 13) is unchanged. It is readable but its text is small.
- Judge the motion at playback speed after re-rendering. Ready to re-render.
