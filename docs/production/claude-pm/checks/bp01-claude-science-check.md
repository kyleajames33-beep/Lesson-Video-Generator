# BP01 science check: build and assess replication and synthesis models (bio-m5-p01)

Scope: every scientific statement, number and quote in `../lessons/bio-m5-p01.md` (Revision 1, 18 Oct), checked against the syllabus file `docs/production/programme/syllabus/bio-2017-y12.json`, the site extracts `../site-extracts/bio-m5-l06.md` and `l07.md`, B4, B6b and B6c, and the sources below. Sequences recomputed by script (standard code table in TCAG order, the same string B6c ports). Source review only; no stills or audio. U+2014 searched in the design and in this file: none.

## Recomputed sequences and directions

| Item | Design | Recomputed | Result |
| --- | --- | --- | --- |
| Coding strand | 5' ATG GCA TTT TGA 3' | (given) | - |
| Template strand | 3' TAC CGT AAA ACT 5' | complement of each base, written 3' to 5' under the coding strand: TACCGTAAAACT | correct |
| mRNA (built on the template) | 5' AUG GCA UUU UGA 3' | coding strand with U for T | correct |
| Codons | AUG Met (start), GCA Ala, UUU Phe, UGA stop | standard code: AUG Met, GCA Ala, UUU Phe, UGA stop | correct |
| Product | Met-Ala-Phe, three amino acids | stop adds none | correct |
| Anticodons (3' to 5') | UAC, CGU, AAA | complements of AUG, GCA, UUU, read 3' to 5' | correct (in the tRNA's own 5' to 3' order: CAU, UGC, AAA) |
| Scene 9 flash | template position 4, C, opposite coding G, first base of codon 2 | coding ATG**G**CA: position 4 is G; template position 4 is C | correct |
| Scene 4 layout | top 5' left; partner 3' left, 5' right | antiparallel | correct |
| Scene 7 | template tagged 3' to 5'; mRNA built 5' to 3' from the 5' end | RNA polymerase reads the template 3' to 5' and builds 5' to 3' | correct |
| Scene 12 | "only add new cards at the three prime end" | DNA polymerase adds nucleotides to the 3' end of the growing strand | correct |
| Results table | anticodon column headed "(3' to 5')" | consistent with B6c's rule (every anticodon carries its ends) | correct |

The sequence differs from B6c's worked message (AUG GAA GCU UAA) and attempt (AUG AAG CCU UGA), as the design claims. The GCA/CGU pair matches site L11's second example and B6c scene 5; that is reuse, not a conflict.

## Facts checked

| # | Statement | Verdict and source |
| --- | --- | --- |
| 1 | Nucleotide = sugar, phosphate, base; A-T and C-G; two hydrogen bonds A-T, three C-G; covalent backbone; antiparallel strands | Correct; matches site L06 Describe walkthrough and B4. Alberts et al., *Molecular Biology of the Cell*, 4th ed., "The Structure and Function of DNA": https://www.ncbi.nlm.nih.gov/books/NBK26821/ |
| 2 | Strands separate when hydrogen bonds break; backbones stay intact; each template fixes its new partner; each daughter keeps one original strand | Correct (semi-conservative replication; site L06 key ideas 2 and 3) |
| 3 | Copies stay joined as sister chromatids that mitosis later separates | Correct; site L07 key idea 1 (replication in S phase gives identical sister chromatids) |
| 4 | Only the template strand is read; U replaces T; the gene is unchanged and can be read again | Correct; B6b; Alberts, "From DNA to RNA": https://www.ncbi.nlm.nih.gov/books/NBK26887/ |
| 5 | A cell opens only a short stretch at a time (screen tag; author note "about 10 to 20 base pairs") | Correct; the transcription bubble is roughly 12 to 14 base pairs, within the stated range (same Alberts chapter) |
| 6 | Ribosome reads three bases at a time; each tRNA carries one amino acid; AUG start (methionine); stop codon has no tRNA; chain released | Correct; B6c; standard genetic code: https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi |
| 7 | "has an **anticodon** that pairs with only one codon" (scene 8) | **Not accurate as a general statement.** Wobble pairing at the third codon position lets many tRNAs read two or more codons (Alberts, "From RNA to Protein": https://www.ncbi.nlm.nih.gov/books/NBK26829/). B6c deliberately held wobble back and never said "only one". See finding 1. |
| 8 | "a real ribosome holds two tRNAs at a time" (screen tag) | Acceptable simplification: during elongation the A and P sites hold two tRNAs; a leaving tRNA briefly occupies the E site. Screen tag only. |
| 9 | "a real gene can be thousands of bases long" | Correct, conservative. Human protein-coding genes: median 26,018 bp, mean 66,646 bp (Piovesan et al. 2019, BMC Res Notes 12:315): https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-019-4343-8/tables/1 |
| 10 | Enzyme jobs: helicase unzips, DNA polymerase builds DNA, RNA polymerase builds RNA, aminoacyl-tRNA synthetases load tRNAs | Correct; names kept to a grey tag, consistent with the site's "Beyond the syllabus" box (L06 key idea 4 marks named machinery as extension) |
| 11 | "a bead chain isn't a working protein until it folds" | Correct; B6c and B7 |
| 12 | Notch rule (author note a): notch count models bond number, not donor and acceptor chemistry or purine-pyrimidine width | Correct and correctly kept out of learner copy |
| 13 | Scissors the only hazard | Reasonable; beads are small parts (Year 12, not spoken) |
| 14 | "changing **one card** in the DNA can change a bead in the chain" | Correct ("can": a synonymous change may not) |

## Dotpoint quotes (YouTube metadata) against `bio-2017-y12.json`

- B5-IQ2-01: "model the processes involved in cell replication, including but not limited to:" with "mitosis and meiosis (ACSBL075)" and "DNA replication using the Watson and Crick DNA model, including nucleotide composition, pairing and bonding (ACSBL076, ACSBL077)". **Word for word: match.**
- B5-IQ3-02: "model the process of polypeptide synthesis, including: (ACSBL079)", "transcription and translation", "assessing the importance of mRNA and tRNA in transcription and translation (ACSBL079)". **Each line matches word for word**, but the JSON has two further sub-points ("analysing the function and importance of polypeptide synthesis (ACSBL080)", "assessing how genes and environment affect phenotypic expression (ACSBL081)") that the quote drops without marking. See finding 3.

Site extracts: L06 and L07 quote the same B5-IQ2-01 text. No site disagreement with any fact in this design.

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) |
| --- | --- | --- | --- | --- |
| 1 | should fix | "Each orange card carries one bead, its amino acid, and has an **anticodon** that pairs with only one codon." | False in general (wobble: one tRNA can read more than one codon). It is also learner copy that a student would write in an exam. | "Each orange card carries one bead, its amino acid, and three tabs, its **anticodon**, that fit its codon." (Same text as learning-review finding 1, which also fixes the missing tabs.) |
| 2 | minor | Decisions: "(5' to 3' synthesis, Okazaki fragments, ligase, primase are extension)" | Matches site L06; no change. Noted only to confirm that scene 12's "add new cards only at the 3' end" stays correct without the lagging strand: in the model both templates are fully open, so each new strand can be built in one 5' to 3' run. | (no change) |
| 3 | minor | YouTube metadata: the B5-IQ3-02 quote ending at "(ACSBL079)" after the mRNA and tRNA line | Verbatim lines, but a silently shortened dotpoint reads as the whole dotpoint. | Add a final line inside the quote: `- ..."` so the block ends `- assessing the importance of mRNA and tRNA in transcription and translation (ACSBL079)` then `- ..."` (marks the two omitted sub-points, covered in B7). |
| 4 | minor | Scene 1: "It took ten minutes to build" | Unsupported, and probably short for cutting about 60 notched cards. Learning-review finding 1 cuts it to make room. | "This strip of paper cards is a model of twelve base pairs of DNA. It can't do anything a real cell does." |

## Em dashes

None in the design file (searched U+2014). None in the replacement texts.

## Verdict

**ready to voice after fixes** (no science blocker; finding 1 must be applied before recording).

## Resolution (18 Oct, Claude)

Every blocker and should-fix finding above was applied in Revision 2 of `lessons/bio-m5-p01.md` (see its "Revision 2 changes" line), with the replacement wording proposed here or an equivalent of the same length. Minor findings were applied where they helped; any not applied are recorded in the design. Exact voiced preview, voiced learning review and human listening are still pending.
