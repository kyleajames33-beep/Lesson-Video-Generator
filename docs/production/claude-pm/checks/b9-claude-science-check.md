# B9 Claude science check (17 Oct)

Scope: every number, cross, pedigree and claim in `lessons/bio-m5-b09.md` (Revision 1, re-checked against Revision 2). Arithmetic and pedigree logic recomputed by `c14-c15-b9-b10-numbers.py` in this folder (the pedigree check tries every genotype assignment for each individual under autosomal dominant, autosomal recessive, X-linked recessive and X-linked dominant inheritance, with one gene, full expression and no new mutation). U+2014 search: none.

## Numbers (all confirmed by script)

| Item | Recomputed | Design | Result |
|---|---|---|---|
| Mendel stem-length F2 (1866, experiment 7) | 787 + 277 = 1,064; 787 / 277 = 2.84 : 1 | same | correct |
| Short share | 277 / 1,064 = 26.0 per cent | 26% | correct |
| Tt x Tt | TT, Tt, Tt, tt; 1 : 2 : 1; 3 : 1 | same | correct |
| Exactly 1 short in 4 (p = 1/4) | 4 x (1/4) x (3/4)^3 = 27/64 = 42.2 per cent | "about 42 per cent" | correct |
| Full distribution 0 to 4 | 31.6, 42.2, 21.1, 4.7, 0.4 per cent (sum 1) | same | correct |
| TT x tt; Tt x tt | all Tt; Tt, Tt, tt, tt (1 : 1) | same | correct |
| 52 : 48 against 50 : 50 | chi-squared 0.16 (p about 0.69) | author note | correct |
| P3 next child of Aa x Aa unaffected | 1/4 | 1/4 (25%) | correct |

## Pedigree logic (brute force)

| Pedigree | AD | AR | XR | XD | Design claim | Result |
|---|---|---|---|---|---|---|
| P1 (scene 8, recessive) | no | yes | no | no | AR only (under assumptions); III-1 rules out XR for B10 | correct |
| P2 (scene 9, dominant) | yes | yes | yes | no | fits AD; also AR with carrier spouses; teaching relies on the inset trio | correct; also fits XR (irrelevant: the video states autosomal genes) |
| Inset trio (two affected parents, unaffected child) | yes | no | no | no | AR impossible, AD with both Aa | correct |
| P3 (attempt 1) | yes | no | no | no | dominant; I-1 and I-2 Aa | correct |

The narration must not overclaim proof from P2. Revision 1 said "It shows up in every generation, and each affected person has an affected parent", which states the pattern as a rule. Revision 2 says "Look for clues: it usually shows up in every generation, and every affected child has an affected parent" (the site's own "usually") and the decisive statement is made only on the inset trio. Scene 8's "That's the giveaway ... each parent must carry one hidden recessive allele" is decisive under the stated assumptions (AD fails for P1), so it stays.

## Claims

- Mendel's *Le* gene encodes gibberellin 3-beta-hydroxylase (GA 3-oxidase), which makes active GA1; the *le* allele carries a single amino-acid change (Ala to Thr) that greatly reduces activity (Lester et al. 1997; Martin et al. 1997). "The short allele's version barely works" and "one copy still makes enough hormone": correct.
- F1 of tall x short all tall; F1 self-pollinated. Correct.
- Each gamete gets one allele of each gene because homologues separate in meiosis I. Correct.
- Each seed is an independent fertilisation; seed shape is the embryo's phenotype, so seeds from a cross show offspring phenotypes. Correct.
- Test cross: one recessive offspring proves the tested parent carries the recessive allele; all dominant is likely, not proof. Correct.
- Cystic fibrosis autosomal recessive (*CFTR*, chromosome 7); Huntington's autosomal dominant (*HTT*, chromosome 4), about 1 in 10,000 in European-ancestry populations, "rare". Correct.
- Humans: 22 pairs of autosomes plus one pair of sex chromosomes. Correct.
- Round (R) dominant to wrinkled (r); Rr x rr gives 1 : 1. Correct.
- "Dominant doesn't mean common." Correct.
- Fractions and percentages consistent (1/4 = 25%, no 33%). Correct.

## Count

0 numerical errors. 0 pedigree errors. 1 overclaim risk (scene 9 pattern wording), applied. 1 owner-rule finding (letter case spoken in 11d), applied.

## Resolution

All findings are applied in Revision 2 of `lessons/bio-m5-b09.md`: scene 9 now presents the dominant pattern as clues with a "clues, not proof" tag and the inset trio as the decisive case; 11d no longer speaks letter case ("It's heterozygous", Rr on screen); the author note on P2 records that it also fits X-linked recessive, which does not affect an autosomal-only video. Science is cleared for voicing.
