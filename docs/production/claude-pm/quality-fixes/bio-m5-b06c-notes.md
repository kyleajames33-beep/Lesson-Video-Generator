# bio-m5-b06c (translation): quality fix, 6 Nov 2026

Grade before: B (frames 5, 6, 9, memory aid unframed). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b06c-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged. Every element still uses the existing cues.

## Changes
- **Reading the codon chart (frames 5 and 6, `s2.tsx`).**
  - The chart now arrives with the title, so the stage is no longer empty for the first 4 s.
  - The chart is a lesson-local copy, `BigChart`. The shared `CodonChart` is imported by other lessons, so it was not edited.
  - Text sizes: codons and amino acids 32 px (were 25), base letters 46 px, axis labels 40 px. Boxes are 300 x 196.
  - The row, column and line highlights and the GAA and AUG arrows follow the new geometry.
- **A polypeptide is not yet a protein (frame 9, `s3.tsx`).**
  - The gene-to-chain strip is larger: the gene strands are 0.62 (were 0.42), the mRNA codons 1.0 (were 0.62) and the amino acid beads r 48 (were 34).
  - Labels are 46 px, and the arrows and the dashed "order came from the gene" line are re-spaced.
  - The folding chain uses larger beads (r 30) and a wider spiral.
- **Two aids (frame 11, `s4.tsx`).** The stop-codon aid and the language aid each sit in a framed card. The tRNA "translator" is inside the second card.
- **Key notes (frame 16, `s4.tsx`).** Five dense paragraphs became 8 short lines at 36 px. A framed aid sits beside them: the stop codons with U Are Away, U Are Gone and U Go Away, and "transcription keeps the language; translation changes it".

## Left as is
- The ribosome, tRNA and cell plates, and the question scenes.

## Still to check
- At playback speed: the chart fades in with the title, then the row and column highlights land on "first base G" and "second base A".
- Ready to re-render on the existing narration.
