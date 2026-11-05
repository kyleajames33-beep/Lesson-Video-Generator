# bio-m6-b07 (meiosis, fertilisation and mutation): quality fix, 6 Nov 2026

Grade before: C (audit frames 3, 6, 9, 10, 11, 13 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b07-sheet.jpg`. These are 16 evenly spaced stills at the same frames as the audit sheet. Stills come from `out/explainer/Explainer-bio-m6-b07/stills/`.

Narration, audio and measured timing are unchanged. Every animation still uses the existing word cues from `docs/production/claude-pm/lessons/m6b07/measured/lesson.json`.

## Changes by scene

- **1. Hook.** The ten finches are 215 px wide (they were 140), in two staggered rows on the island. The seed plate sits at the top left, and the 1977 drought tag sits under it. The beak-depth dots are larger (r 14) and the tags are 38 to 46 px.
- **2. Three jobs.** The coded chromosome icon is replaced by the painted crossing-over pair (`cd-crossing-over-c`). The coded gamete circles are replaced by B3a's painted sperm sliding onto the egg.
- **3. One new allele (rebuilt).** The sperm (amber "d") and egg are 460 px. On fertilisation, B3a's painted cleavage plates show the zygote dividing (1, 2 and then many cells), and a large "one copy in every cell" card appears. Then brief 88's painted homologous pair fills the frame (920 px canvas), with D and the amber d beside the lowest band, a "same gene" link and tags outside the nucleus. "When this bird makes its own gametes": meiosis I metaphase, anaphase, telophase and the four cells, painted, crossfade on their cues. The allele beads ride beside the painted chromosomes, and "1/2 new allele d" and "1/2 original D" sit at 96 px on either side. No coded chromosome bars are drawn over a cell.
- **4. New neighbours (rebuilt).** The painted crossing-over plates (a, b and c) play on "swap matching pieces". E and e beads sit above each chromatid and D and d below. The two inner lower beads swap as the painted segments exchange, and the chromatid now carrying E beside the amber d is ringed ("new neighbour: E now beside the new d", 48 px). For independent assortment, the painted metaphase I cell returns. Its short pair flips edge-on and back (a mirrored crop of the plate), and the F and f beads ride with it. The gametes are four large cards of computed letter beads (r 32), with no coded cells.
- **6. One generation.** The genome bar is 52 px thick with 80 px mutation ticks, beside B5a's painted chromosome pair. The right-hand card shows dimmed from "In humans", so the frame is not half empty. The coded chromatid pair is replaced by the painted pair with four bead pairs; the differing pairs are ringed. Tickers and headings are 44 to 72 px.
- **7. Ultimate source.** The returning finch is 210 px.
- **8. Asexual.** The lineage tree's bacteria are about 30% larger. The tree dims only to 75% when the population appears, and the population is 24 bacteria at 124 px wide (it was 36 at 62 px).
- **9. Memory (staged).** The deck and hands are 1.9 times larger cards. Each line labels its own action: "prints a new card" sits over the deck, and "deals a hand" and "two hands together" sit over the hands. The two brackets sit below the cards, so the end frame reads as the aid, not a text list.
- **10a. Exam question 1.** The question and answer boxes fill the left column. The right column draws the givens as each is read: a sperm with the amber n, the painted embryo ("one copy of n in every cell") and "× a mate with no n". No genotype, grid or fraction is shown.
- **10c. Exam question 2.** The card appears from "Second". The right column draws the claim's two parts: the painted meiosis cell and egg-and-sperm dish ("almost all the variation") and the amber mutation bead ("not important"?).
- **11. Decision rule.** The three option boxes show dimmed as soon as "new combination" is said, then light in turn. Their icons are the painted crossing-over pair, the painted metaphase cell and the sperm meeting the egg. Labels are 42 and 32 px.
- **12. Key notes.** Seven short bullets at 36 px replace the five paragraphs at 30 px. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b07/painted.tsx` (new): places brief 88 plates on screen (`CdStage`, `pt`) and adds allele beads beside painted chromosomes (`SideBead`). It imports B5a's `PL`, `AN`, `CD` and `usePlates`, unchanged.
- `src/explainer/lessons/bio-m6-b07/assets.ts`: adds the cleavage plates, the painted chromosome pair, the two icon plates and the nine brief 88 stage plates to the slim-bundle list.
- `src/explainer/lessons/bio-m6-b07/s1.tsx`, `s2.tsx`, `s3.tsx`.

`parts.tsx` is unchanged. Other lessons import from it (Brace, Tg, GreyCross and others), and none of those exports changed. No shared kit, legacy or other lesson file was edited. The typecheck passes.

## Plates needed

None required. Every plate used already exists in `public/assets/biology/`.

## Still to check

- Scene 4's assortment flip mirrors a crop of `cd-m1-metaphase` (the short pair's region) over `cd-m1-metaphase-empty`. `cd-m1-metaphase-alt` was not used, because its short pair is recoloured brown and cyan. Check the flip at playback speed.
- Scene 3's four-cell beads sit beside each nucleus's long chromosome, overlapping a little cytoplasm in the top-left and bottom-left cells.
- Feedback 1 (10b) is unchanged; its first seconds are sparse until the Punnett squares build on cue.
- Judge the motion at playback speed in the re-render. The checks so far are stills only.
- Ready for Codex to re-render on the existing narration.
