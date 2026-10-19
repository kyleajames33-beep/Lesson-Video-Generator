# m6b03 science check (Claude): how one base change can affect a protein

Checked on 19 October 2026 by an independent reviewer who did not author the design. Input: `../lessons/bio-m6-b03.md` (Revision 1). Method: every codon was re-read against the standard genetic code (and the design's ported `codonToAA` output); the beta-globin sequence was checked against the mature HBB chain; the disease alleles were checked against database and primary sources (linked). The dotpoint was compared word for word against the 2017 syllabus ledger `docs/production/programme/syllabus/bio-2017-y12.json`. No renders and no audio. U+2014 searched in the design: none found; none are used here.

## Dotpoint check

The ledger entry B6-IQ1-02 (Module 6, inquiry question "How does mutation introduce new alleles into a population?", p 51) reads: "compare the causes, processes and effects of different types of mutation, including but not limited to:" with the examples "point mutation" and "chromosomal mutation". **The design's Syllabus line and the YouTube draft match it word for word**, including the trailing colon and the two sub-bullets. The ledger's source is the official 2017 syllabus document (nsw.gov.au, biology-stage-6-syllabus-2017.docx). This video covers the point mutation half; b04 covers the chromosomal half and the comparison. That split is consistent with the dotpoint.

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) | Sources |
| --- | --- | --- | --- | --- | --- |
| 1 | minor | Scene 6 visual: "regroup ... into "AUG AAC CUG GAU U.."" | The 15-base message AUG AAA CCU GGA UUU with one A deleted is AUGAACCUGGAUUU (14 bases): AUG AAC CUG GAU, then **UU**. The codons and amino acids (Met, Asn, Leu, Asp) are right. | "AUG AAC CUG GAU UU" | Standard genetic code |
| 2 | minor | Scene 8: "That's why a one-base deletion near the start usually does more damage than a substitution, although an early nonsense change can be just as bad." | True as a tendency, and the caveat is right, but it is cut for length by learning-review finding 2. Nothing in the remaining scene 8 is wrong without it: "point describes the size of the change, not the size of its effect" still holds, and scene 5 shows an early stop. | Cut (learning review finding 2). | Standard texts (Griffiths et al., Introduction to Genetic Analysis) |
| 3 | minor | Hook and scenes 3 to 5: "the sixth codon", "codon thirty-nine", "cut short after thirty-eight amino acids" | All correct in the **traditional numbering** of the mature beta chain, which omits the initiator methionine (HGVS gives p.Glu7Val and p.Gln40Ter). Scene 2 says the ribosome reads "starting at the start codon", so a student counting from AUG would get codon 7. HSC papers and B7 use position 6, so no learner copy is needed. | Add an author note in Numbers. No screen or narration change. | ClinVar / IthaNet entry for HBB c.118C>T (https://www.ithanet.eu/db/ithagenes?ithaID=142); HGVS numbering convention |
| 4 | minor | Scene 2: "sliding chemicals" | Intercalating agents insert (slip) between stacked base pairs and cause insertions and deletions during copying. "Sliding" is not wrong but is vague. | "the chemicals that slip between bases" (learning review finding 4). | Standard texts; b02 design |

No blocker or should-fix science finding.

## Facts confirmed (no change)

- **Beta-globin codons 5 to 7.** The mature beta chain begins Val-His-Leu-Thr-Pro-Glu-Glu-Lys, so residues 5 to 7 are Pro, Glu, Glu. The HBB coding strand reads ATG GTG CAC CTG ACT CCT GAG GAG, so codons 5 to 7 are CCT GAG GAG (mRNA CCU GAG GAG). Correct.
- **Codon 6, GAG to GTG (missense, sickle cell).** mRNA GAG (Glu) to GUG (Val), Glu6Val. The DNA callout "A to T" on the coding strand and "A to U" on the mRNA are correct. Correct.
- **Codon 6, GAG to GAA (silent).** GAA also codes for glutamate. The design presents it as a teaching case on the same codon, not as a recorded variant, which is right. "Nothing happens at all" is acceptable for a synonymous change at HSC level. (A first-base change at this codon, GAG to AAG, gives HbC, Glu6Lys; not needed here.)
- **Codons 37 to 41 and the codon 39 nonsense allele.** Mature-chain residues 35 to 41 are Tyr-Pro-Trp-Thr-Gln-Arg-Phe, so 37 to 41 are Trp, Thr, Gln, Arg, Phe, encoded TGG ACC CAG AGG TTC (mRNA UGG ACC CAG AGG UUC). Codon 39 CAG (Gln) to TAG (mRNA UAG, stop) is the beta-zero 39 nonsense allele, HBB c.118C>T, first described in Sardinia (Trecartin et al. 1981), common there and elsewhere around the Mediterranean, and classed as pathogenic. "Cut short after thirty-eight amino acids" is right in the traditional numbering. "A person with two copies makes no normal beta chains" is right (beta-zero thalassaemia major). The author note on nonsense-mediated decay is correct and rightly kept out of narration. Sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC370888 (Trecartin et al., JCI 1981); https://www.ithanet.eu/db/ithagenes?ithaID=142 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC304764 (Pirastu et al., PNAS 1987); https://databases.lovd.nl/shared/variants/603299
- **"U Are Gone" for UAG.** The B6c mnemonic matches the three stop codons (UAA, UAG, UGA). Correct.
- **Degenerate code.** 61 sense codons code for 20 amino acids; 18 amino acids have more than one codon; most synonymous codons differ at the third base. "Often differing only in the third base": correct.
- **"Glutamate carries a charge, but valine avoids water."** Glutamate has a negatively charged side chain at cell pH; valine's side chain is non-polar (hydrophobic). Correct.
- **Site message and in-frame deletion.** AUG AAA CCU GGA UUU gives Met, Lys, Pro, Gly, Phe. Deleting one A gives AUG AAC CUG GAU (Met, Asn, Leu, Asp). Deleting AAA gives AUG CCU GGA UUU (Met, Pro, Gly, Phe). All correct. "Mostly wrong" (not "all wrong") is the right wording, since a regrouped codon can code for the same amino acid by chance.
- **THE FAT CAT ATE THE RAT.** With the F deleted: THE ATC ATA TET HER AT. Correct.
- **Early stops after a frameshift.** About 3 of the 64 codons are stops, so a random frame meets one roughly every 20 codons. "A stop codon often turns up early": correct.
- **Attempt 1 codons.** Normal AUG GCA UAC CAG UGG: Met, Ala, Tyr, Gln, Trp. A: GCG, Ala (silent). B: UAA, stop after Met, Ala (nonsense). C: AUG GCA ACC AGU GG...: deleting the U of codon 3 is the only single-base deletion that gives this sequence; Thr, Ser follow. The chart excerpt contains every codon the student needs and no answer. Correct.
- **Attempt 2, cystic fibrosis.** F508del (c.1521_1523delCTT) deletes three bases spanning codons 507 and 508; codon 507 changes ATC to ATT (still isoleucine) and phenylalanine 508 is lost, so the protein lacks exactly one amino acid and the reading frame is kept. It is the commonest CF allele (ClinVar: the most common pathogenic CFTR variant). "Three bases deleted from the CFTR gene": correct. The author note that the protein still misfolds is correct and rightly kept out of the model's main line. Sources: https://www.ncbi.nlm.nih.gov/clinvar/variation/7105/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC4046180 ; Riordan et al., Science 1989.
- **Attempt 2, Tay-Sachs.** HEXA c.1274_1277dupTATC (traditionally 1278insTATC) is a four-base insertion in exon 11, the major Tay-Sachs allele in Ashkenazi Jewish people (with the intron 12 splice allele, more than 90 per cent of carriers there). It shifts the frame and creates a premature stop codon, so no functional hexosaminidase A is made. "A common Tay-Sachs allele has four bases inserted into the HEXA gene" and "changed from the insertion onwards and cut short": correct. The design's Numbers line gives "about 80 per cent of carrier alleles"; one carrier study found the insertion in 108 of 148 Ashkenazi carriers (about 73 per cent), so "about 70 to 80 per cent" is safer in author notes (not spoken, no change needed to learner copy). Sources: Myerowitz and Costigan, J Biol Chem 1988;263(35):18587-18589 (title: "The major defect in Ashkenazi Jews with Tay-Sachs disease is an insertion in the gene for the alpha-chain of beta-hexosaminidase"); Landels et al., J Med Genet 1991 (https://pubmed.ncbi.nlm.nih.gov/1828838/); Grebner and Tomczak, Am J Hum Genet 1991 (PMID 1825595); https://medlineplus.gov/genetics/gene/hexa/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC1683266
- **Position effect.** A frameshift or stop near the 3' end leaves most of the protein; one near the start removes most of it. Correct as a general rule.
- **Missense effect depends on where and what.** An active-site or charge-changing substitution is more likely to alter function than a conservative one elsewhere. Correct, and the design avoids "surface means harmless" (Val6 is a surface residue).
- **Memory aids.** "Silent same, missense misses, nonsense stops" and THE FAT CAT are scientifically sound with the limits the design speaks. "Multiples of three don't shift the frame" is correct (F508del confirmed above).
- **Site corrections 1 to 7** in the design are scientifically right (Ingram found the amino acid change, not the codon; a nonsense substitution can shorten the protein; regulatory changes; frameshift "mostly"; the garbled "three bases' worth" sentence; splice sites; diploid base-pair count).
- **Em dashes:** none in the design.

## Verdict

**ready to voice** on science (all findings are minor wording or author notes). The Codex error check (sequence record NM_000518.5) remains as planned.

## Resolution (19 Oct)

Resolved in `../lessons/bio-m6-b03.md` Revision 2.

- **Finding 1 (minor): applied.** The scene 6 remainder now reads "UU", and the Numbers section says "AUG AAC CUG GAU, then UU".
- **Finding 2 (minor): applied** through learning review finding 2. The sentence is cut and scene 8 still teaches type and position correctly.
- **Finding 3 (minor): applied.** The Numbers section has an author note on traditional numbering (mature chain, initiator methionine removed; codon 7 if counted from AUG). The hook visual notes that the position numbers use this convention. No narration change.
- **Finding 4 (minor): applied.** Scene 2 now says "the chemicals that slip between bases".
- **Tay-Sachs frequency (confirmed facts, author note): applied.** The Numbers line now reads "about 70 to 80 per cent of carrier alleles there; 108 of 148 carriers in Grebner and Tomczak 1991". Not spoken.
