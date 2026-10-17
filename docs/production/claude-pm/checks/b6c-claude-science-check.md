# B6c science check (Claude): translation

Checked 16 October 2026 by an independent reviewer. Input: `../lessons/bio-m5-b06c.md` (Revision 1), the pack `../pre-design/bio-b8-translation.md` and `../site-extracts/bio-m5-l11.md`. Method: every codon, anticodon and chain recomputed by a Python script against the standard genetic code; facts checked against web sources. No renders. No em dash in the design or here. Syllabus: NSW Biology Stage 6 (2017), Module 5, polypeptide synthesis (ACSBL079).

## Summary

- Codon table: every codon used on screen or in narration gives the stated amino acid in the standard code (NCBI translation table 1). 20 amino acids, 61 sense codons, 3 stops (UAA, UAG, UGA); only Met and Trp have one codon each, so "most amino acids have more than one codon" is correct.
- Anticodon orientation is correct everywhere: each anticodon is the complement written 3' to 5' under its codon, or reversed when written 5' to 3'.
- Ribosome, peptide bond (rRNA catalysis), elongation, release factor and stop codons: correct.
- Streptomycin: binds the bacterial small subunit at the decoding site and causes misreading; does not act effectively on cytoplasmic eukaryotic ribosomes; can act on bacteria-like mitochondrial ribosomes. Correct. One stem inconsistency fixed (finding 2).
- One narration simplification fixed (finding 1, initiation order).

## Findings

| # | sev | where | claim | verdict and correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | M | 7a | Small subunit slides to AUG, then a tRNA with anticodon UAC "pairs with it", then the large subunit closes. | In eukaryotes the initiator Met-tRNA is already bound to the small subunit when it attaches near the 5' cap and scans to the first AUG; the anticodon (3' UAC 5') pairs with AUG; the large subunit then joins. The narration also dropped the ends it requires elsewhere. | Standard texts (Alberts, ch. 6); site and pack anticodon convention | Narration and visual rewritten: the tRNA rides on the small subunit; "U A C read from its 3' end". Author note records the bacterial difference. |
| 2 | M | 11c, 11d, practice | (a) "the patient's own cells keep making working proteins" alongside (b) mitochondrial ribosomes affected | Human mitochondrial ribosomes make 13 proteins (respiratory-chain subunits from mitochondrial DNA); cytoplasmic ribosomes make all the rest. Streptomycin does not act effectively on cytoplasmic ribosomes but can bind mitochondrial ribosomes, which is linked to aminoglycoside ototoxicity (the A1555G variant raises susceptibility). So "most of their proteins" is the accurate stem. | Mitoribosome and aminoglycosides: https://pmc.ncbi.nlm.nih.gov/articles/PMC6011804 ; aminoglycoside mitochondrial toxicity and A1555G hybrid-ribosome work (search summary of https://pmc.ncbi.nlm.nih.gov/articles/PMC3390888 and https://pmc.ncbi.nlm.nih.gov/articles/PMC2634874) | Stem, feedback and model answer now say "most of their proteins" and "which make most of the cell's proteins". Author note added. |
| 3 | L | 11c, 11d | Streptomycin binds the bacterial small subunit and causes misreading, so wrong tRNAs pair | Correct. It binds 16S rRNA and protein S12 at the decoding site, stabilising near-cognate tRNA pairing (misreading); it also impairs initiation; bactericidal. "Different shape" for cytoplasmic ribosomes is a fair school form of "different structure". | As above; site extract (Waksman, 30S) | Keep. |
| 4 | L | 7b, key notes | rRNA in the large subunit forms the peptide bond | Correct: the peptidyl transferase centre is rRNA (23S in bacteria); the ribosome is a ribozyme. | Nissen et al. (2000), Science 289:920 (cited in the design); release-factor and peptidyl transferase summary: https://www.mun.ca/biology/scarr/3950_RNA_translation.html | Keep. |
| 5 | L | 7c | No tRNA pairs with a stop codon; a release protein binds; the chain is released; subunits separate | Correct. Release factors (RF1, RF2 in bacteria; eRF1 in eukaryotes) recognise the stop codon and switch the peptidyl transferase centre to hydrolysis. | Same | Keep. |
| 6 | L | 5, 7a, 7b, 11b | Anticodon orientation | Correct (script below). | Pack check; site extract | Keep. |
| 7 | L | 6 | Codon chart worked out in the 1960s | Correct: Nirenberg and Matthaei 1961 (poly-U, Phe); complete by about 1966. | Design facts list; pack | Keep. |
| 8 | L | 11d | Mitochondria came from bacteria, so their ribosomes are bacteria-like | Correct (endosymbiosis; mitoribosomes are bacteria-like though not identical). The design's "can bind" wording is appropriately cautious. | PMC6011804 | Keep. |

## Script results (Python, 16 Oct)

Standard code from the TCAG table string `FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG` (identical to NCBI translation table 1), with U mapped to T.

- Codons used: AUG Met; GAA Glu; GCU Ala; UAA stop; AAG Lys; CCU Pro; UGA stop; UAC Tyr; UUC Phe; GGA Gly; ACU Thr; GUA Val; GGU, GGC, GGA, GGG Gly; UAG stop; GCA Ala. All as stated.
- Anticodons (written 3' to 5' under the codon; then 5' to 3'): AUG: 3' UAC 5' = 5' CAU 3'; GAA: 3' CUU 5' = 5' UUC 3'; GCU: 3' CGA 5' = 5' AGC 3'; AAG: 3' UUC 5' = 5' CUU 3'; GCA: 3' CGU 5' = 5' UGC 3'. All as stated.
- Attempt 1: template 3' TAC TTC GGA ACT 5' gives mRNA 5' AUG AAG CCU UGA 3': Met, Lys, Pro, stop (3 amino acids). Wrong method (DNA letters with T to U): UAC UUC GGA ACU = Tyr, Phe, Gly, Thr (all in the excerpt). Anticodon looked up (UUC) = Phe (in the excerpt). Excerpt rows are in alphabetical order.
- Counts: 20 amino acids; single-codon amino acids Met and Trp; stops TAA, TAG, TGA.
- Scene 9 case: GAA to GUA, Glu to Val (the sickle-cell change; not spoken).

## Resolution

Applied in Revision 2 of `../lessons/bio-m5-b06c.md` (16 Oct).

1. Finding 1: resolved; 7a narration and visual rewritten; facts list updated.
2. Finding 2: resolved; 11c stem, 11d feedback and the practice model answer changed; author note on the 13 mitochondrial proteins and ototoxicity added.
3. Findings 3 to 8: correct; no change.

No open science question blocks recording.
