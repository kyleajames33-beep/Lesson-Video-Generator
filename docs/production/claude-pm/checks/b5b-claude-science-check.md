# B5b science check: meiosis (bio-m5-b05b revision 2)

Format: `codex-prompts/03-fact-check-template.md`. Checker: fresh independent reviewer, 13 Oct 2026. Scope: the 22 numbered claims, narration (scenes 1 to 18), on-screen tags and key notes in `lessons/bio-m5-b05b.md`. Science errors only; no style, pacing or caveat suggestions. No stills were inspected (none exist yet), so screen findings cover the written visual plans only. U+2014 searched in the design: none.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Scene 9 screen tag "female: one egg, three polar bodies that break down"; claim 11 "in total, three polar bodies" | Sources differ: many textbooks say up to three polar bodies when the first polar body divides, but in humans the first often does not divide, giving two. "Three" can be marked wrong. | Write "one egg and polar bodies that break down" (no number). |
| 2 | copy | Decisions, "Narration" bullet: "About XXWORDS words... roughly XXMIN minutes... near 9.4 minutes" | Unfilled placeholders and a runtime that disagrees with the length section (9.5 minutes, and about 8.1 with the new 10 second attempt). | Fill the figures from the length section after the attempt edit. |

## Claims verified (no error found)

| Claim | Result | Source |
| --- | --- | --- |
| Human body cell 46 chromosomes in 23 pairs; gamete 23 (scenes 1, 2, 10, 12) | correct | [OpenStax Biology 2e, 11.1 The Process of Meiosis](https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis) |
| Doubling argument: mitosis-made gametes give 46 + 46 = 92, then 92 + 92 = 184 (scene 2) | correct arithmetic; the logic (gametes must be haploid so the number stays constant) is the standard rationale | same OpenStax page |
| Pea (Pisum sativum) 2n = 14, seven homologous pairs; 2^7 = 128 | correct; 14 chromosomes form seven pairs at meiosis | [Springer cytogenetics paper](https://link.springer.com/doi/10.1007/BF02983933); [Zigya exam solution](https://www.zigya.com/competition/neet/study/Biology/BI/Principles+of+Inheritance+and+Variation/BIENNT12177892/90) (secondary) |
| 2^23 = 8,388,608, "more than 8 million" (scene 11, notes) | correct arithmetic; OpenStax says "over eight million" possible combinations from random alignment alone | OpenStax 11.1 |
| Assumptions behind 2^n: n distinct homologous pairs, each orients independently with either orientation possible, crossing over ignored (scene 11, attempt, claim 13) | correct as stated; the lesson says "assortment alone" and "whole chromosomes", and the attempt says "assume no crossing over" | OpenStax 11.1 ("The orientation of each tetrad is independent of the orientation of the other 22 tetrads") |
| One DNA copying then two divisions, four haploid cells (scenes 2, 9, 10; claims 2, 8) | correct | OpenStax 11.1 |
| Homologous chromosomes pair side by side in prophase I (synapsis), gene against gene (scene 4; claims 3, 22) | correct | OpenStax 11.1 |
| Pairing and crossover linkages (chiasmata) help the homologues attach to opposite poles and segregate; "lets the cell later send one partner of each pair to each end" is a sound functional summary (claims 3, 4) | correct | [Hirose et al., PLoS Genetics 2011](https://pubmed.ncbi.nlm.nih.gov/21423721/); OpenStax: homologues "remain attached... at chiasmata" |
| Crossing over exchanges segments between homologous non-sister chromatids; it makes new combinations of existing alleles, not new alleles (scenes 5a, 5b, notes) | correct | OpenStax 11.1 |
| After crossing over a chromosome's two sister chromatids can differ (claim 5; scenes 5b, 8) | correct | OpenStax 11.1 |
| In metaphase I homologous pairs line up on the plate and each pair orients independently; sister chromatids attach to the same pole (scene 6, claim 6) | correct | OpenStax 11.1 |
| Meiosis I separates homologues and the sister chromatids stay joined at the centromere (scene 7, claim 7) | correct | OpenStax 11.1 ("sister chromatids remain tightly bound together at the centromere") |
| Cells after meiosis I are haploid, each chromosome still two chromatids (scene 7, claim 7) | correct; each cell has one of each kind (n) but twice the DNA of a gamete, which is the scene 8 reason | OpenStax 11.1 ("Two haploid cells are the result of the first meiotic division") |
| No DNA copying between meiosis I and II (scene 8, claim 8) | correct | OpenStax 11.1 ("Interkinesis lacks an S phase") |
| Meiosis II separates sister chromatids (centromeres split), as in mitosis (scene 8, claim 9) | correct | OpenStax 11.1 |
| Four different cells, and the no-crossing-over contrast "two kinds, each twice" (scene 9) | correct when one crossover occurs between the marked genes. Recomputed: line-up 1 with a crossover between the A and B levels gives A B D, A b D, a B d, a b d; with no crossover, A B D twice and a b d twice. Line-up 2 gives A B d, A b d, a B D, a b D (no crossover: A B d twice, a b D twice) | recomputation |
| Allele combination lists in the scene 11 inset | correct | recomputation |
| Four sperm from one male meiosis; one egg per female meiosis, polar bodies degenerate (scene 9, claim 11) | correct except the polar body count (finding 1) | [Wikipedia: Polar body](https://en.wikipedia.org/wiki/Polar_body); textbook accounts vary on the count |
| Chromatid-count convention: chromatids counted only while joined at a centromere; a separated chromatid is again called a chromosome; 46 chromosomes and 92 chromatids after copying; model 4, 8, 4, 0 (scene 10, claim 12) | correct; the tracker figures recompute | [Wikipedia: Chromatid](https://en.wikipedia.org/wiki/Chromatid) ("they are again called chromosomes") |
| Fertilisation joins two haploid gametes, 23 + 23 = 46 (scene 12) | correct | OpenStax 11.1 |
| Mitosis contrast: one division, two identical cells; meiosis two divisions, four cells, half the number, usually different (scene 14) | correct | OpenStax 11.1 |
| "Only mutation makes new alleles" (notes) | correct at this level | standard; not separately sourced |
| Non-disjunction author note (claim 17) | not in the video; consistent with standard accounts; not checked further | not needed |

## UNVERIFIED

1. Claim 4 "crossing points help hold the pair together": verified in general (chiasmata) by the sources above; the exact site wording was not compared because the site extract was out of scope.
2. Pea chromosome number was confirmed from a cytogenetics abstract and secondary exam sources via search, not a primary karyotype paper read in full. The value 2n = 14 is long established, so the risk is low.
3. First polar body division in humans: sources conflict (finding 1); the recommended fix avoids relying on either.

Count: 2 findings (1 science, 1 copy), 3 UNVERIFIED items.

## Resolution (Claude science check)

Applied to `../lessons/bio-m5-b05b.md` (Revision 3, 13 Oct).

| # | Resolution |
| --- | --- |
| 1 | Scene 9 no longer speaks any polar body point (the female sentence was cut). The screen tag now reads "female: one egg and polar bodies that break down" with no number, and claim 11 says the same and records that textbooks differ on whether the first polar body divides. |
| 2 | The placeholders in the Decisions "Narration" bullet are filled from the length section: 1,053 words, about 5.7 minutes of narration, plus a 10 second attempt countdown (owner pause rule), 75 s of key notes and about 35 s of other holds, a runtime of about 7.7 minutes. |
| UNVERIFIED 1 to 3 | No change: "crossing points help hold the pair together" is a screen-only tag (chiasmata, supported); pea 2n = 14 is long established; the polar body count is no longer stated. |

## Codex check resolution (13 Oct)

Applied to `../lessons/bio-m5-b05b.md` (Revision 4, "Codex fact check resolved; ready to voice").

| # | Finding | Decision | New wording |
| --- | --- | --- | --- |
| 1 | Scene 1 called a 46-chromosome cell a gamete | Pull back from the gamete to a diploid precursor cell before the 23 plus 23 reduction. | Visual: on "halve its chromosome number" the camera pulls back to a parent's gamete-making cell tagged "before: 46 chromosomes, two sets", then a flat arrow cuts the rows to a small cell tagged "gamete: 23". Narration unchanged. |
| 2 | Envelope breakdown placed in metaphase I | Breaks down at the end of prophase I; chips reordered. | Scene 6a: "At the end of prophase one, the nuclear envelope breaks down. Then, in metaphase one, the pairs line up across the middle, with one partner facing each end." Chip "1 prophase I" stays lit during the breakdown; chip "2 metaphase I" lands on "in metaphase one". |
| 3 | "Single strand" implied single-stranded DNA | Use one DNA molecule or undoubled chromosome. | Scene 10 tags: "0: none to count, one DNA molecule each" and "none: each chromosome is undoubled again (one chromatid, one DNA molecule)". Key note 4: "Result: four haploid cells, each chromosome undoubled (one chromatid, one DNA molecule)." |
| 4 | Scene 12 mixed-colour gametes do not make one set per colour | Colour each gamete's whole contribution as one set first. | Scene 12 visual: left gamete all plum, right gamete all teal, tag "each gamete brings one set"; zygote holds a plum set of 23 and a teal set of 23, tag "now plum and teal mean the cell's two sets: one from each gamete". |
| 5 | Scene 8 cue typo | Use the narration phrase. | Cue: "the two cells get different chromosomes" (present verbatim in the scene 8 narration). |
