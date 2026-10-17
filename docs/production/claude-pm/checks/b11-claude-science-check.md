# B11 science check (Claude): population frequencies and SNP evidence

Checked 18 October 2026 by an independent reviewer. Input: `../lessons/bio-m5-b11.md` (Revision 1), `../site-extracts/bio-m5-l16.md`. Method: every count and frequency recomputed by a Python script (scratch, below), including binomial sampling probabilities; facts against standard genetics texts and web sources. No renders. No em dash in the design or here. Syllabus (2017) B5-IQ4-03: "collect, record and present data to represent frequencies of characteristics in a population, in order to identify trends, patterns, relationships and limitations in data, for example: examining frequency data; analysing single nucleotide polymorphism (SNP)".

## Summary

- All frequency arithmetic is correct (herd, peas, both SNP tables, both attempts, both wrong-answer chips).
- SNP facts and the association logic are correct and appropriately scoped.
- The sampling beat relied on seed-searched draws; replaced with fixed draws whose plausibility is checked below.
- Attempt 1's trait changed to white clover's V leaf mark (learning review); the genetics of that trait is checked below.

## Findings

Severity: M = change before recording; L = wording or author-note fix.

| # | sev | where | problem | correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | L | Hook, scenes 2, 3 | Herd arithmetic. | 64 + 32 + 4 = 100; 200 copies; white = 2 x 4 + 32 = 40 (0.20); red = 2 x 64 + 32 = 160 (0.80). Wrong chips 4% (white cattle only) and 36% ((4 + 32) / 100, animals carrying white). Matches the site's 160 and 40 of 200. | Script | Keep. |
| 2 | L | Scene 4 | Recessive phenotype. | 9 of 100 short = tt frequency 0.09 under complete dominance; TT and Tt look alike. q = 0.3 under Hardy-Weinberg is correctly not spoken (not in the dotpoint). | Site L16 key 3; Griffiths, Introduction to Genetic Analysis | Keep. |
| 3 | L | Scenes 5, 6 | SNP facts. | A single-base position where more than one base occurs in the population (some definitions require a minor allele frequency of at least about 1 percent; author note added). Two unrelated people differ at roughly 1 base in 1,000 (about 0.1 percent; about 3 million differences); a typical genome has about 4 to 5 million variant sites against the reference. Most lie outside protein-coding sequence (coding sequence is about 1 to 2 percent of the genome). Sickle cell: HBB codon 6, GAG to GTG on the coding strand (A to T), Glu to Val. | 1000 Genomes Project Consortium, Nature 526:68 (2015); B7 convention | Keep; author note added. |
| 4 | L | Scenes 7, 8 | SNP tables. | Cases: CC 18, CT 24, TT 8: T = 24 + 16 = 40 of 100 (40%); C 60%. Wrong chip 8 / 50 = 16%. Controls: CC 32, CT 16, TT 2: T = 16 + 4 = 20 of 100 (20%). | Script | Keep. |
| 5 | L | Scene 8 | Association logic. | Correct: a higher allele frequency in cases than controls is an association; a marker SNP is often inherited with a nearby causal variant because close loci rarely recombine (linkage disequilibrium, the basis of genome-wide association studies). Other non-causal explanations (different ancestry between groups, chance in small samples) exist; population structure is in author notes and scene 10 covers sampling. Unspoken tag added on what shows cause (functional evidence). | Standard GWAS logic (for example Visscher et al., Am J Hum Genet 101:5, 2017) | Tag added. |
| 6 | M | Scene 10 | Seeded values must hit narration. | With a breed white frequency of 0.20 and random-mating genotypes, 40 copies from 20 cattle are binomial(40, 0.2): sd 0.063. P(4 or fewer) = 0.076, P(12 or more) = 0.088, P(exactly 7) = 0.151. So 10% and 30% are each about a 1-in-12 sample: plausible illustrations, not typical. For 200 cattle (400 copies) sd 0.020; P(18% to 22%) = 0.71; 19%, 21% and 22% are within about one sd. | Script | Fixed draws (4, 12, 7 of 40; 76, 83, 86 of 400) tagged "three example samples"; "you might get" keeps the narration honest. |
| 7 | L | Scene 9 | One SNP as one marker. | Correct: relatedness and ancestry analyses use many markers (often hundreds of thousands of SNPs). The 21 of 40 grid is labelled illustrative. | Site L16 key 6 | Keep. |
| 8 | L | 12a, 12b (Revision 2) | Clover trait. | White clover (Trifolium repens) white V leaf mark: controlled mainly by the multi-allelic V locus (about 11 alleles described); the no-mark allele v is recessive to all marking alleles; mark intensity is variable and partly plastic, with modifier loci (a 2024 study maps V to chromosome 5). The item claims no inheritance; it counts a characteristic. Arithmetic: 18 / 60 = 30%, 30 / 60 = 50%; wrong chip 18 / 42 = 43%. Clover spreads by stolons, so "plants" can be one clone (author note; a real collection limitation). | Nature abstract on V-leaf alleles: https://www.nature.com/articles/1841957b0 ; WashU, genetics and plasticity of white leaf mark: https://profiles.wustl.edu/en/publications/genetics-and-plasticity-of-white-leaf-mark-variegation-in-white-c/ ; Annals of Botany 2024: https://pmc.ncbi.nlm.nih.gov/articles/PMC11687625 | Applied. |
| 9 | L | 12c, 12d | SNP attempt. | GG 20, GA 16, AA 4: 80 copies; A = 16 + 8 = 24 (30%); G = 56 (70%). Wrong chips 4 / 40 = 10%; (16 + 4) / 40 = 50%. Model (b) correct. | Script | Keep. |
| 10 | L | Scene 3 | "autosomal gene: two copies each". | Correct scope tag; X-linked loci in males have one copy (not needed here). | Standard | Keep. |

## Script results (Python, 18 Oct)

- Herd: C^W 40 / 200 = 0.20; C^R 160 / 200 = 0.80; chips 0.04 and 0.36.
- Peas: 0.09.
- Cases T 0.40, C 0.60; controls T 0.20; wrong chip 0.16.
- Clover: 0.30, 0.50; wrong 0.4286.
- SNP attempt: A 0.30, G 0.70; wrong 0.10 and 0.50.
- Binomial(40, 0.2): P(X <= 4) 0.0759; P(X >= 12) 0.0875; P(X = 7) 0.1513. Binomial(400, 0.2): sd 0.020; P(72 <= X <= 88) 0.712.
- Narration (Revision 2): 6013 characters; about 574 s.

## Resolution

Applied in Revision 2 of `../lessons/bio-m5-b11.md` (18 Oct).

1. Findings 1 to 4, 7, 9 and 10: no change needed.
2. Finding 3: author note on the SNP frequency threshold added.
3. Finding 5: unspoken causation tag added in scene 8.
4. Finding 6: resolved with fixed example draws.
5. Finding 8: clover item checked and applied.

No open science question blocks recording. Human listening and the voiced-preview check remain pending.
