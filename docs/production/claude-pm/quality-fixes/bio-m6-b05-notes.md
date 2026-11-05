# bio-m6-b05 (somatic, germ line, coding, non-coding): quality fix, 6 Nov 2026

Grade before: C (audit frames 1 to 4, 5 to 8, 9, 11, 13 and 15). Grade after (stills): B+ after the second pass. The gene-map frames 5 to 9 were rebuilt following root review.
Sheet after: `work/quality-audit/fixed/bio-m6-b05-sheet.jpg`. These are 16 evenly spaced stills at the same frames as the audit sheet. Stills come from `out/explainer/Explainer-bio-m6-b05/stills/`.

Narration, audio and measured timing are unchanged. Every animation still uses the existing word cues from `docs/production/claude-pm/lessons/m6b05/measured/lesson.json`.

## Changes by scene

- **1. Hook.** The coded chromosome bars are replaced by B5a's painted chromosome pair, with an amber ring on one band for BRCA1. The trees are larger (R 330). The 87% is 80 px, and its caption now reads "her doctors' estimate of breast cancer risk". No person is drawn.
- **2. Two kinds of cells.** The tree is larger (R 420). The body cells named in the narration now appear as painted plates as each is spoken: skin, smooth muscle and a liver cell, all reused. The sperm and egg are larger and labelled.
- **3. Somatic.** At the close, the UV-on-skin plate and the melanoma plate grow large, side by side with an arrow and tags. The tree moves aside.
- **5. Distinction.** While Jolie's case is narrated, the inherited tree starts large (R 380) and the painted eggs replace the coded dots. Both then shrink to the top when the comparison table arrives, and the one-cell tree fades in on its cue.
- **6 to 9. The gene map (rebuilt after root review).** The strand is now the hero: about four times thicker (gap 130, thick rails and rungs). It spans 89% of the width at mid-height, and the gene's regions are solid coloured blocks: teal for control, warm for coding. Region labels are 34 to 42 px in the hand font and role colours.
  - **Scene 6:** the painted chromosome sits top right, with a zoom wedge to the gene. The codon change appears as 60 px codons, with outcome chips beneath.
  - **Scene 7:** the painted polymerase (`y11-enzyme-polymerase`) drops onto the promoter and travels along the gene while the mRNA grows behind it. With the changed promoter it hovers, slips off, and only a thin copy is made. The protein amount bar falls.
  - **Scene 8:** a large lactase-against-age graph shows the usual curve falling after weaning and the persistent curve staying high, each drawn on its cue. The small intestine and the milk glass are the anchors, and the gene with its upstream base change sits below.
  - **Scene 9:** the polymerase rides the strand as the mRNA is made. The introns lift out and the exons join, on all three runs of the cut. Exons and introns are labelled.
- **10. Which matters.** These are now two large side-by-side panels, coding and non-coding, each with a thick strand, its region block and the changed base. The ghosted strip at the top is gone.
- **13a. Exam question 1.** The painted flies are large in the right column, with a bigger eye magnifier. The question text and answer boxes fill the left column.
- **13c. Exam question 2.** A gene diagram of the givens is added: promoter and coding sequence, with P and Q pins landing on their spoken words. It shows no answer-bearing amounts or codon meanings.
- **14. Decision rule.** Card 1 now carries the painted UV skin ("skin cell: somatic") and the egg and sperm dish ("gametes: germ line"), as the card lands. The icons on card 2 are 1.5 times larger and labelled.
- **15. Key notes.** Seven short bullets at 36 px replace the five paragraphs. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b05/assets.ts`. Adds the skin, muscle, liver, chromosome, polymerase and small intestine plates and the chromosome pair file.
- `src/explainer/lessons/bio-m6-b05/parts.tsx`. Changes the gene map constants and the Pol, Protein, RLab and MrnaRibbon defaults. Only b05 uses these. g01 imports only CellTree, Dot, StopMark and the helpers, which are unchanged.
- `src/explainer/lessons/bio-m6-b05/s1.tsx`, `s2.tsx`, `s3.tsx`, `s4.tsx`.

No shared kit, legacy or other lesson file was edited. The typecheck passes.

## Plates needed

None required.

## Still to check

- The lower third of scenes 6 and 7 stays empty until their tag lines and terms land on cue.
- The polymerase plate is the Y11 replication polymerase art, relabelled "RNA polymerase". It is a generic painted enzyme; an RNA-polymerase-specific plate would be a small upgrade.
- b04 was checked for thin strand frames and none was found: its strands are short insets, already thickened in the first pass.
- Judge the motion at playback speed in the re-render. The checks so far are stills only.
- Ready for Codex to re-render on the existing narration.
