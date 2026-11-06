# bio-m7-b13 (limits to dengue control): quality fix, 6 Nov 2026

Grade before: B (audit frames 7, 11, 13, 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m7-b13-sheet.jpg` (16 stills at the audit frames 455 to 14127). Extra checks: 6080, 6200, 6300, 9782, 11852.
Narration, audio and measured timing are unchanged.

## Changes
- **Scene 8, four conditions (`s2.tsx`, new `FourChain`).** "All four at once" is now a chain of the four conditions: the painted dengue virus (250 px), Aedes (400 px), the flooded container, and a 4 × 4 grid of open dots for non-immune people. Each arrives on its word, joined by chain links. On "Cut one far enough", Aedes dims and takes a terracotta cross, and its links pull apart on "the chain breaks". The chain clears on "how people live", before the jar arrives. The cut window is short (it follows the narration).
- **Exam question 1 (`s4.tsx`).** The whole question and table arrive with the card. The text narrows to 1100 px, and a right panel shows the virus and Aedes plates, with "dengue: a virus carried by Aedes aegypti".
- **Exam question 2 (`s4.tsx`).** The whole question arrives with the card. A strip under the text adds the givens as plates on their cues: the virus ("DENV-1 antibodies (2022)"), the jar ("open jars") with Aedes, and the virus ("DENV-3 (2025, travellers)"). Nothing in it gives away the answer.
- **Key notes.** Seven one-line bullets at 34 px replace the five paragraphs at 26 px. The memory aid is unchanged.

`parts.tsx` and `assets.ts` are unchanged (g01, bio-m8-b01 and m8-shared import parts). The typecheck passes on `out/explainer/tsconfig.m7b1213g01.json`.

## Plates needed
None.

## Still to check
Judge the chain and the cut at playback speed. Ready to re-render.
