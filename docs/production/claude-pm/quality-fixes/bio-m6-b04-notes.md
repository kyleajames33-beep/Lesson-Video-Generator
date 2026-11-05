# bio-m6-b04 (chromosomal mutations): quality fix, 6 Nov 2026

Grade before: C (audit frames 2, 3, 7, 10, 14 and 15). Grade after (stills): B+, a solid B and close to A.
Sheet after: `work/quality-audit/fixed/bio-m6-b04-sheet.jpg`. These are 16 evenly spaced stills at the same frames as the audit sheet. Stills come from `out/explainer/Explainer-bio-m6-b04/stills/`.

Narration, audio and measured timing are unchanged. Every animation still uses the existing word cues from `docs/production/claude-pm/lessons/m6b04/measured/lesson.json`.

## Changes by scene

- **2. What a chromosomal mutation is.** The painted chromosome (`b5x-zoom-chromosome`) now stays large at the left. A dashed bridge leads to a large exam-style bar, 118 px per gene. The strand inset is wider and thicker. On "seen down a microscope" the painted metaphase spread and the microscope fill the frame, with the visible and not-visible tags at 44 px.
- **3. How a chromosome changes shape.** The painted X-ray machine sits beside the break, with the tag "ionising radiation". The bar is larger (100 px per gene), and the strand inset reads "both strands snap". For unequal crossing over, the painted pink and teal partner pair stays at the left. The bars are larger, the "duplication" and "deletion" tags sit to the right, and "one error: a duplication and a deletion" lands on its cue.
- **4. Deletion and duplication.** Bars go from 80 to 108 px per gene. Copy counters are 44 px and tags are 46 px.
- **5. Inversion and translocation.** Bars go from 72 to 98 px per gene and are recentred. Tags sit under the bars at 46 px. In the leukaemia part, the protein and the dividing cells are larger and moved clear of the 9 and 22 bars. A "white blood cells" label is added.
- **6. Carrier gametes.** Gene letters go from 18 to 28 px, and the cells and gametes are larger.
- **7. Nondisjunction.** The small coded glyphs are replaced by B5a's painted plum and teal chromosomes, drawn in larger coded meiosis cells, as in B5b. No coded bars appear over a painted cell. The nondisjunction tag stays until fertilisation, and the zygote holds three painted chromosomes.
- **10. Memory (book).** The coded tab book is replaced by the painted book plate (`m5x-recipe-book-copy`), with "genes = chapters". A second, smaller book appears for translocation. The bars are larger (54 px per gene, 30 px letters).
- **11a and 11b. Exam question 1.** The diagram is larger: 56 px per gene and 28 px letters, up from 22 px. Row 3's second chromosome sits on its own line, so the demands keep their own column. Feedback drops the demands to make room for a readable partner bar ("its partner") and 30 px copy counters. The crossed mistake chip moves into the freed column.
- **11d. Feedback two.** A tall header carries the painted normal and sickle red cells and three chromosome 21s. Row labels show from the start. The question strip goes from about 25 to 27 px, and cells are 32 to 34 px.
- **12. Decision rule.** The bar icons are larger (40 px per gene, 24 px letters) and arrive with step 1. The dosage bars and the 21 trio are larger.
- **13. Key notes.** Seven short bullets at 36 px replace the five paragraphs. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b04/assets.ts`. Adds the reused plates (X-ray machine, chromosome pair, book, sickle cells) and B5a's painted chromosome files.
- `src/explainer/lessons/bio-m6-b04/parts.tsx`. Adds the new `PChrom` and `PCell` helpers. Existing exports are unchanged, because g01 and b05 import them.
- `src/explainer/lessons/bio-m6-b04/s1.tsx`, `s2.tsx`, `s3.tsx`, `s4.tsx`.

No shared kit, legacy or other lesson file was edited. The typecheck passes (`out/explainer/tsconfig.qa-m6b0405.json`).

## Plates needed (optional, not blocking)

- A painted nondisjunction stage set in the `cd-` style: one cell with both partners moving to one pole, then gametes with 2 and 0 copies. This would replace the coded cell outlines that hold painted chromosomes. The current build follows the accepted B5b pattern.
- A painted myeloid white blood cell for the leukaemia beat, which still uses coded cell circles. The `m7-b-cell` plate is a lymphocyte and would mislead for chronic myeloid leukaemia.

## Still to check

- Exam question 2 still shows a short card during its reading phase. The design forbids answer-bearing art there.
- Judge the motion at playback speed in the re-render. The checks so far are stills only.
- Ready for Codex to re-render on the existing narration.
