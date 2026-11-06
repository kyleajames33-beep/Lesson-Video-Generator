# bio-m5-b05b (meiosis): quality fix, 6 Nov 2026

Grade before: B (frames 3, 9, 10 and 11). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b05b-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged. Every element still uses the existing cues in `docs/production/claude-pm/lessons/b5b/measured/lesson.json`.

## Changes
- **Model cell, and "copied once, then pair up" (frame 3, `sB.tsx`).**
  - The coded oval cell and coded bars are gone. The 2n = 4 model sits in the painted nucleus close-up (`cd-nucleus-zoom-empty-v1.png`, uniform scale, via B5a's `pnuc.tsx`; added to `assets.ts`).
  - The chromosomes are the painted plates (`MC`): single, then they open into the painted X on "is copied". Then they move into homologous pairs, with brackets.
  - The allele beads A/a and B/b (long pair) and D/d (short pair) sit on the painted chromatids. Each pair shares one centromere row, so its loci sit at the same height.
  - The pair-up still hands over to the brief 88 painted pair close-up on "gene against gene".
- **Tracking the numbers (frame 9, `sD.tsx`).**
  - The mini cells are the painted cell plate at its own aspect (no stretch), and they are larger. The start and after-copying cells are 280 px wide (they were coded ovals 192 x 132).
  - The chromosomes are painted plates scaled with each cell. The crossed-over chromatids keep their swapped piece.
  - The four centromeres ring on "count centromeres".
- **How many combinations? (frame 10, `sE.tsx`).**
  - The pairs, the two gametes, the eight-gamete grid and the "almost never match" gametes are painted cells with painted chromosomes. Everything is enlarged: gametes r 118, grid cells r 82, pair chromosomes 124 px.
  - The "8" moved clear of the grid.
- **Fertilisation (frame 11, `sE.tsx`).**
  - The painted sperm swims into the painted egg. Each carries "23, one set". The fertilised egg then shows a "23 + 23" card.
  - The generation ring is three painted cells, each marked 46.
- **To keep it straight (frame 15, `sG.tsx`).** The memory icons are painted chromosomes and painted cells, as is the "Next" card icon.
- **Key notes (frame 16).** Seven dense sentences became 7 short lines at 38 px. A framed aid sits beside them: "Meiosis I splits the pairs. Meiosis II splits the sisters." It also contrasts mitosis with meiosis.

## Left as is
- The attempt and feedback diagrams (frames 13 and 14, and feedback two) keep the HSC exam-style outline schematics. The audit did not flag them. If the owner wants them painted, use the same `MC` and painted cell pieces.
- `meio.tsx` and `shared.tsx` are imported by B8, so they were not edited. The new code is lesson-local.

## Still to check
- At playback speed: the single-to-X copying and the pairing moves inside the nucleus, and the sperm entering the egg.
- Ready to re-render on the existing narration.
