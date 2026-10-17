# B6b science check (Claude): transcription

Checked 16 October 2026 by an independent reviewer. Input: `../lessons/bio-m5-b06b.md` (Revision 1), the pack `../pre-design/bio-b7-transcription.md` and `../site-extracts/bio-m5-l10.md`. Method: every sequence recomputed by a Python script (complement and codon lookup against the standard code); facts checked against web sources. No renders. No em dash in the design or here. Syllabus: NSW Biology Stage 6 (2017), Module 5, "model the process of polypeptide synthesis, including: transcription and translation; assessing the importance of mRNA and tRNA in transcription and translation (ACSBL079)".

## Summary

- Strand directions are correct throughout: mRNA built 5' to 3' by adding to the 3' end, template read 3' to 5', mRNA antiparallel to the template and equal to the coding strand with U for T.
- All three sequences are correct (worked example, attempt 1, scene 8 change). The attempt 1 bottom strand is the exact complement of the top strand.
- The death cap mechanism is correct at school level: alpha-amanitin binds RNA polymerase II and blocks nucleotide addition and translocation, so no new mRNA is made.
- No learner-facing science error. Two author-note precision additions.

## Findings

| # | sev | where | claim | verdict and correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | L | 4b (now 4c), key notes | New nucleotides join only at the 3' end; mRNA grows 5' to 3'; template read 3' to 5' | Correct. RNA polymerase adds ribonucleotides to the 3' end of the growing RNA, moving along the template 3' to 5'; no primer is needed. | LibreTexts Genetics, Overview of Transcription: https://bio.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Genetics_BIOL3300_(Leacock)/Genetics_Textbook/02%3A_Central_Dogma/2.01%3A_Overview_of_Transcription | Keep. |
| 2 | L | 3 | RNA single-stranded, ribose, U pairs with A as T does | Correct. | Same | Keep. |
| 3 | L | 10c, 10d, facts list | "a toxin that stops RNA polymerase moving along DNA" | Correct at school level. Alpha-amanitin binds RNA polymerase II next to the bridge helix and trigger loop, trapping them so the enzyme cannot add nucleotides and translocate. It inhibits Pol II strongly, Pol III weakly and Pol I not at all; Pol II makes mRNA, so "no new mRNA" is right. | Brueckner and Cramer (2008), Nat Struct Mol Biol 15:811, structure PDB 2VUM: https://www.rcsb.org/structure/2VUM ; review cited in the design: https://pmc.ncbi.nlm.nih.gov/articles/PMC8230822 | Precision added to the facts list (author note). Learner copy unchanged. |
| 4 | L | 10c | Death cap "grows in parts of Australia", under oaks | Correct. Introduced; found under exotic trees, especially oaks, in Victoria (Melbourne), the ACT and South Australia (Adelaide 2008); also reported in Launceston, Tasmania. | Royal Botanic Gardens Victoria: https://rbg.vic.gov.au/science/herbarium/death-cap ; MJA 1999 ACT case series: https://www.mja.com.au/journal/1999/171/5/poisoning-amanita-phalloides-deathcap-mushrooms-australian-capital-territory ; Launceston report: https://www.examiner.com.au/story/4643557/worlds-deadliest-mushrooms-found-in-launceston-photos/ | Tasmania note added to the facts list. |
| 5 | L | 6 (now 6b), 10d | mRNA is "broken down after a while"; protein production falls "over the following hours" | Correct. Mammalian mRNA half-lives range from minutes to many hours (the design cites a median of about 9 h in mouse fibroblasts; the abstract confirms the global turnover study but the 9 h figure was not re-read from the full text in this pass). No learner copy states a number. | Schwanhausser et al. (2011), Nature 473:337: https://ideas.repec.org/a/nat/nature/v473y2011i7347d10.1038_nature10098.html | Keep. |
| 6 | L | 6 (now 6a), held-back note (a) | mRNA leaves through nuclear pores; DNA stays | Correct. In eukaryotes the transcript is capped, given a tail and spliced before export; held back in author notes without teaching a false idea (the narration never says the mRNA is unaltered). | Standard texts | Keep. |
| 7 | L | 7 | Replication copies both strands of all the DNA before division; transcription copies one strand of one gene when needed | Correct. (Different genes may use different strands as template; not needed here.) | Standard | Keep. |
| 8 | L | 8 | Illustrative template change, "not the real CFTR change" | Correct label: the commonest CFTR variant (F508del) is a three-base deletion. | Standard | Keep. |

## Script results (Python, 16 Oct)

Complement rule A to U, T to A, C to G, G to C; codons looked up in the standard code (the table string `FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG`, TCAG order, identical to NCBI translation table 1).

- Worked: template 3' TAC CGA ATT 5' gives mRNA 5' AUG GCU UAA 3' (Met, Ala, stop: not spoken in B6b). Coding strand 5' ATG GCT TAA 3' equals the mRNA with T for U.
- Attempt 1: top 3' TGC AAT CGG 5'; its complement is ACGTTAGCC, identical to the stated bottom strand 5' ACG TTA GCC 3'. Template is the top strand (3' end on the left, polymerase moving right). mRNA 5' ACG UUA GCC 3'. Pairing the bottom strand gives 3' UGC AAU CGG 5' (the crossed mistake). The top strand is not its own reverse complement (CCGATTGCA), so no strand reads the same both ways.
- Scene 8: template position 4 C to T gives mRNA G to A; codon 2 GCU becomes ACU.

## Resolution

Applied in Revision 2 of `../lessons/bio-m5-b06b.md` (16 Oct).

1. Findings 1, 2, 5 to 8: correct; no change.
2. Finding 3: resolved; polymerase II specificity and the bridge helix and trigger loop mechanism added to the facts list.
3. Finding 4: resolved; Tasmania report added to the facts list; "parts of Australia" stays.

No open science question blocks recording. The owner decision on the death cap stem (learning review note 7) is about association, not accuracy.
