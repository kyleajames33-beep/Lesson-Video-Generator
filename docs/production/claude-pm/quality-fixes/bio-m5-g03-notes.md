# bio-m5-g03 (genetic risk: groups and individuals): quality fix, 6 Nov 2026

Grade before: C (audit frames 3, 4, 7, 8, 11, 13, 14 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m5-g03-sheet.jpg`. It holds 16 evenly spaced stills at the same frames as the audit sheet. The stills come from `out/explainer/Explainer-bio-m5-g03/stills/`.

Narration, audio and measured timing are unchanged. Every animation still uses the existing word cues from `docs/production/claude-pm/lessons/bg03/measured/lesson.json`.

## Changes by scene

- **2. Group proportion.** The dot array is 1.3 times larger (pitch 64). The 72 and 28 counts sit beside it at 96 px, with 50 px labels. The mosaic, the second group and the one-person close-up use 40 to 72 px text, and "a probability, not a forecast" sits in a frame.
- **3. Why the gene doesn't decide (rebuilt).** The painted DNA helix is shown damaged (a red break mark), and the painted repair protein docks on the break and closes it. Brief 88's painted homologous pair carries a grey faulty bead and an amber working bead beside its lower band. A row of seven painted body cells shows one cell losing its working copy. The beads sit below the cells, never on the paint. The three factor chips are 42 px, and the conclusion is framed at 46 px. The pair and the cell row show dimmed from the start as a set-up.
- **4. Probability isn't certainty.** The carriers' array starts centred, then slides left on "the other way too". Women with breast cancer fill a second large array, with 2 in 100 ringed. Each array has its crossed overclaim above it.
- **5. Carrier estimate (rebuilt on the g01 layout).** The left column holds the painted screening card, a teal givens card and the retained results. The right side has a task strip, large AA, Aa and aa genotype cards (carriers look the same), then one stage at a time at 72 to 84 px. The colours stay fixed: q (the CF allele) amber, p teal. A letters-only Punnett square (A/a gametes with p and q; cells AA, Aa, Aa, aa with p², pq, q²) rings the two carrier cells on "mother" and "father". 2pq is worked at 48 px, and "≈ 1 in 25" sits in a frame. The Hardy-Weinberg name and population bar follow.
- **6. When predictions hold.** The checklist is 40 px. A prediction-against-data panel opens on "that's useful too", and the observed bar grows on cue. The drift graphs are larger, and their axis text is now 26 to 28 px (shared.tsx `Traces`).
- **7. Relatives.** The whole pedigree is drawn from the first word, 1.1 times larger and centred, with 42 px "1 in 2" tags. It slides left when the 2003 ruling arrives. The father's records are the painted case-files plate (`m8-hospital-case-files`), and the pedigree symbols are large.
- **10a / 10c. Exam items.** Each right column draws the givens as they are read. Item 1 shows 50,000 adults, the carriers ringed, "×2 as often" and one carrier with a question mark. Item 2 shows 10,000 babies with one affected, then the small isolated village. Nothing in either picture bears on the answer.
- **10b. Feedback 1.** The dot arrays are larger (pitch 38), and the question strip is two lines at 30 px. The lines run 34 to 44 px.
- **10d. Feedback 2 (g01 layout).** It shows a givens card, the letters-only Punnett square, colour-coded working at 48 to 56 px, a framed "(a) ≈ 0.02, 1 in 50", (b), and the crossed "carriers = 1 in 10,000".
- **11. Decision rule.** It now uses four large cards (2 × 2) with icons about 2.5 times larger and 50 px text, and a dashed "can't fix one person's future" card.
- **12. Key notes.** Eight one-line bullets at 34 px and the framed memory aid (bio-m5-g01 `NotesBoard`) replace five paragraphs.

## Files touched

- `src/explainer/lessons/bio-m5-g03/big.tsx` (new). It holds the plate definitions, the allele `Bead`, the letters-only `HWSquare`, `AnswerFrame` and `TaskStrip`.
- `assets.ts`: adds five existing plates to the slim-bundle list.
- `s1.tsx`, `s2.tsx`, `s3.tsx`, `s4.tsx`, and `shared.tsx` (only the `Traces` label sizes).

No shared kit, legacy or other lesson file was edited. The typecheck passes.

## Plates needed

None. Every plate used already exists in `public/assets/biology/` (`cd-homologous-pair-loci`, `b6a-animal-cell`, `y11-dna-helix`, `y11-enzyme-ligase`, `m8-hospital-case-files`, plus brief 70's rack and blood-spot card).

## Still to check

- `y11-enzyme-ligase` stands in visually for the BRCA1 repair protein. It is labelled "BRCA1 protein". A dedicated plate is optional, not required.
- Scene 3's lost cell is shown by a warm tint filter and a ring. Judge it at playback speed.
- Frame 13 (local 195) is early in item 2, before the demands appear. The 10,000-dot field is a fine texture that reads properly only at 1080p.
- The audit judged the stills only. Judge the motion at playback speed after re-rendering.
- Ready for Codex to re-render on the existing narration.
