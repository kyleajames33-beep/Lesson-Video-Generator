# B12 science check (Claude): DNA sequencing and profiling for inheritance studies

Checked 18 October 2026 by an independent reviewer. Input: `../lessons/bio-m5-b12.md` (Revision 1), `../site-extracts/bio-m5-l17.md`. Method: band lengths, the attempt gel and the match ladder recomputed by a Python script (scratch, below); facts against standard texts and web sources, including the 1985 case. No renders. No em dash in the design or here. Syllabus (2017) B5-IQ5: "investigate the use of technologies to determine inheritance patterns in a population using, for example: ... DNA sequencing and profiling".

## Summary

- Gel direction (DNA to the positive electrode) and size logic (shorter further) are correct; the explanation now includes why charge does not favour long pieces.
- STR inheritance, the exclusion rule, the attempt gel and the product rule are correct.
- One sequencing description implied the bases emit light (fixed).
- The Jeffreys 1985 case is verified: Ghana, the boy's disputed relationship to his mother, the relatives used.

## Findings

Severity: M = change before recording; L = wording or author-note fix.

| # | sev | where | problem | correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | L | Hook | Verify the 1985 case. | Jeffreys, Brookfield and Semeonoff, "Positive identification of an immigration test-case using human DNA fingerprints", Nature 317:818 to 819 (1985). A British-born 13-year-old boy was refused re-entry to the UK after a visit to Ghana because officials suspected he was not his mother's son (for example a nephew). The father was unavailable, so his DNA fingerprint was reconstructed from three undisputed children; the boy's bands were all accounted for by the mother and that reconstructed father, establishing that he was her son. The Home Office accepted the DNA evidence and he was allowed to stay. Method: multi-locus minisatellite probes after restriction digestion (no PCR). Narration's claims (officials doubted he was her son; his pattern was compared with his family's; it showed he was her son) are all supported. Some secondary accounts say "three daughters"; others "three children"; the narration avoids the detail. | "Curiosity in the genes: the DNA fingerprinting story" (PMC3831598): https://pmc.ncbi.nlm.nih.gov/articles/PMC3831598/ ; DNALC interview with Jeffreys: https://dnalc.cshl.edu/view/15107-The-Ghana-Immigration-case-Alec-Jeffreys.html ; https://dnalc.cshl.edu/view/15108-Results-of-the-Ghana-Immigration-case-Alec-Jeffreys.html | Keep narration; Numbers updated. |
| 2 | M | Scene 3 | "each kind of base gives off its own colour of light" | Bases are not luminous; in dye-terminator Sanger and common four-dye short-read methods each kind of nucleotide carries its own fluorescent dye, excited by a laser and read by colour. (Some instruments use two-colour chemistry or non-optical detection; the student-level statement holds for the methods met.) Short fragments are read and assembled or aligned by overlap; no method reads a whole chromosome in one pass. | Standard texts (Campbell Biology; Griffiths) | "tagged with its own coloured dye". |
| 3 | L | Scene 4 | Heterozygous trace. | Two overlapping peaks at the variant position in a heterozygote (Sanger). Family: I-1 and I-2 A/T, II-1 T/T, II-2 A/A, II-3 A/T: fits autosomal recessive. HBB codon 6 coding-strand A (GAG) to T (GTG). | Standard | Keep. |
| 4 | L | Scene 5 | STR facts. | Units of 2 to 6 bases, forensic markers mostly tetranucleotide (for example TH01 TCAT; D7S820 and D13S317 GATA or TATC type); repeat numbers vary between people; two copies per autosomal marker, one from each parent; most lie in non-coding DNA. | NIST STRBase (standard reference) | Keep. |
| 5 | L | Scene 6 | Gel direction and size logic. | DNA's phosphate backbone is negative at buffer pH, so it migrates to the anode (+, conventionally the red lead). Charge per unit length is constant, so free-solution mobility is nearly independent of length; the gel matrix sieves, and shorter fragments migrate further, distance roughly linear in log(length) over the useful range. Revision 2's added clause states this. | Standard texts | Clause added. |
| 6 | L | Scene 6, Numbers | Band spacing. | Fragment = flank + 4 x repeats; with a 100-base flank: 6 = 124, 7 = 128, 8 = 132, 9 = 136, 10 = 140, 11 = 144, 12 = 148, 13 = 152, 14 = 156, 15 = 160, 16 = 164 bases. Four-base differences are resolved by capillary electrophoresis or high-resolution gels, not cleanly by agarose; the coded gel exaggerates spacing (author note stands). | Script | Keep. |
| 7 | L | Scene 7 | Trio and exclusion. | Mother 8, 11; father 9, 12; child 8, 12: 8 maternal, 12 paternal. Man X (10, 13) lacks 12: excluded, assuming no new mutation or lab error (tagged). | Script | Keep. |
| 8 | L | Scene 8 | Product rule and "not proof". | (1/10)^n: 1/10, 1/100, 1/1,000; ten markers 1 in 10^10. Valid only for independently inherited markers (different chromosomes or far apart) and for unrelated people; relatives share alleles by descent, so a brother's chance is far higher. Real profiles: UK DNA-17 (16 STRs plus amelogenin), US CODIS core 20 STRs. "A match is strong evidence, not proof" is correct (it is not the probability of guilt or of paternity). | Standard forensic genetics; Butler, Forensic DNA Typing | Relatives tag added. |
| 9 | L | Scene 9 (9a) | "mostly in DNA that doesn't code for anything" | Non-coding DNA can have functions (regulatory and others); the accurate claim is "doesn't code for a protein". | Standard | Corrected in 9a. |
| 10 | L | Scene 9 (9a) | Conservation use. | Microsatellite (STR) profiling is widely used to estimate relatedness and reconstruct pedigrees in captive breeding and wild populations to limit inbreeding. "Quick and cheap" is relative to sequencing many genomes (author doubt b); fair for the questions named. | Standard conservation genetics | Keep. |
| 11 | L | Attempt 1 | Gel data. | Paternal bands: 12 (marker 1), 13 (marker 2), 10 (marker 3); the mother has none of them, so each is unambiguous. Man A has all three (cannot be excluded). Man B lacks 12 and 10 (excluded at two markers; shares 13). | Script | Keep. |
| 12 | L | Attempt 2 | Tool choice. | Correct: a single-base variant needs the base read; STR profiling measures repeat lengths at selected loci. Site's "both begin with PCR" error avoided. | Site L17 (corrected) | Keep. |

## Script results (Python, 18 Oct)

- Band lengths as in finding 6.
- Attempt 1: paternal bands {12, 13, 10}; man A {12, 14, 13, 16, 10, 11} contains all three; man B {8, 10, 13, 15, 9, 12} by marker: marker 1 {8, 10} lacks 12, marker 3 {9, 12} lacks 10.
- Ladder: 1e-1, 1e-2, 1e-3, 1e-10.
- Narration (Revision 2): 5733 characters, 17 scenes; about 553 s.

## Resolution

Applied in Revision 2 of `../lessons/bio-m5-b12.md` (18 Oct).

1. Finding 1: verified; Numbers updated; narration unchanged.
2. Finding 2: resolved (scene 3 wording).
3. Finding 5: resolved (scene 6 clause).
4. Finding 8: relatives tag added; key notes carry "strong evidence, not proof".
5. Finding 9: resolved in scene 9a.
6. Findings 3, 4, 6, 7, 10 to 12: no change needed.

No open science question blocks recording. Human listening and the voiced-preview check remain pending.
