# bio-m7-g01 (outbreak data practice): quality fix, 6 Nov 2026

Grade before: B (audit frames 2, 10, 15, 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m7-g01-sheet.jpg` (16 stills at the audit frames 431 to 13376). Extra checks: 8456, 12893.
Narration, audio, measured timing and the real exam wording are unchanged.

## Changes
- **Q1, Q2 and Q3 question cards (`s1.tsx`, `s2.tsx`, `s3.tsx`).** The whole question arrives with the card: all the text, the lunch table with the epidemic curve, the province table, and the cholera graph. Before, these came in sentence by sentence. The plates still arrive on their cues.
- **Q2 mistake (`s2.tsx`, rebuilt).** The sampling picture is on screen from the start. It shows the province as 200 squares (each 2000 people), all lit amber as the wrong denominator ("dividing by everyone in the province"). On "Only two thousand", the rest grey out and one teal square stays. Its 2000 people open in an inset with the 50 carriers, and then come the boxed formula, "50 ÷ 2000 = 2.5%" and "2.5% ÷ 0.0125% = 200 times".
- **Decision board (`s3.tsx`).** All three rows stand from "how to start", each with painted question plates (sandwiches and pasta, Anopheles and bed net, Vibrio and tank). "What you do first" writes in on each cue.
- **Key notes.** Eight one-line bullets at 32 px replace the five paragraphs at 27 px. The memory aid is unchanged.

`parts.tsx` and `assets.ts` are unchanged. The typecheck passes on `out/explainer/tsconfig.m7b1213g01.json`.

## Plates needed
None.

## Still to check
The Q1 question text is still 25 px, because the full exam wording is long. Ready to re-render.
