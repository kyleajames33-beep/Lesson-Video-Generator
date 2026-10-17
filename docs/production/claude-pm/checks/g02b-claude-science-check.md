# G02b science check (bio-m5-g02, inheritance probability practice, Revision 1)

Reviewer: independent (did not author the design). Date: 18 Oct 2026.
Inspected: `lessons/bio-m5-g02.md` Revision 1. All probabilities recomputed as exact fractions and both pedigrees brute-forced over every genotype assignment under AD, AR, XR and XD by an independent script: `C:\Users\kygs\AppData\Local\Temp\claude\c--lesson-video-generator\ed4a88d8-fdfe-46da-9442-961cd412b0db\scratchpad\check.py`.

## Recomputed answers

**Q1 (Andalusian).** Blue (heterozygote) x blue: 1/4 black, 1/2 blue, 1/4 splash (1 : 2 : 1). P(blue) = 1/2; P(first two both blue) = 1/2 x 1/2 = **1/4**. Black x splash: all heterozygous, all blue. **Matches.** Unspoken slip 1/2 + 1/2 = 1 is a genuine adding error.

**Q2 (tortoiseshell).** X^O X^o x X^O Y: X^O X^O (orange female) 1/4, X^O X^o (tortoiseshell female) 1/4, X^O Y (orange male) 1/4, X^o Y (black male) 1/4. Tortoiseshell female **1/4 of all kittens**; black **1/2 of sons**. **Matches.** Autosomal slip Oo x OO: 1/2 Oo in both sexes; **matches** "half of all kittens".

**Q3 (PKU, pedigree P-Q3).**
- Brute force: fits AR only (AD 0 solutions, XR 0, XD 0). Under AR: I-1 Pp, I-2 Pp, I-3 pp, II-1 pp, II-3 Pp forced; II-2 PP or Pp; I-4 PP or Pp (not needed). 4 solutions in total, as expected.
- P(II-2 Pp | unaffected) = (1/2)/(3/4) = **2/3**. Partner certain carrier (x 1). P(first child pp) = 2/3 x 1 x 1/4 = **1/6**.
- Given an affected first child, P(II-2 Pp) = 1, so P(second child pp) = **1/4**. (Equivalently: P(both children pp)/P(first pp) = (2/3 x 1/16)/(1/6) = 1/4.)
- Slip: 1/2 x 1/4 = 1/8. **All match.**
- Extra check relevant to the "multiply" aid: P(both children affected) = 2/3 x 1/4 x 1/4 = **1/24**, not 1/6 x 1/6 = 1/36. The aid needs its condition (see learning review should fix 1).

**Q4 (pedigree P-Q4).**
- AD: exactly 1 solution (I-2, II-1, III-1 Aa; all others aa). Fits.
- AR: exactly 1 solution: I-2, II-1, III-1 aa; I-1, II-2, II-3, II-4, III-2 Aa. Fits only with both I-1 and II-4 carriers. **Matches** "recessive needs I-1 and II-4 to be carriers".
- XR: 0 solutions (I-2 X^a X^a forces affected son II-2; II-1 affected with unaffected father I-1). **Matches.**
- XD: 1 solution (I-2 X^A X^a; III-1 X^A Y from II-1). Fits, so limiting the stem to three patterns is necessary and correct.
- Giveaway scan: both couples (I-1 x I-2, II-1 x II-4) are one affected and one unaffected parent, so neither trio giveaway appears. **Matches** 5c.
- Decisive future evidence: under AD II-3 is aa, and with an unaffected (aa) partner cannot have an affected child (full penetrance, no new mutation); under AR II-3 is a certain carrier and could. **Correct.**

## Organism and condition facts (sources)

- **Andalusian blue. Confirmed.** The blue (Bl) allele is an incompletely dominant dilution of black: bl/bl black, Bl/bl blue, Bl/Bl splash; blue x blue gives 1 black : 2 blue : 1 splash; black x splash gives all blue. American Poultry Association, "The Blue Gene and Breeding Poultry": https://amerpoultryassn.com/?p=9648 ; Rare Breeds Survival Trust breed note: https://www.rbst.org.uk/andalusian . Note: the real alleles are "blue dilution" and "no dilution" acting on a black base, so "black allele" and "white allele" are teaching labels. The design already flags the letters as labels; acceptable at Year 12 (minor 3).
- **Tortoiseshell, X-linked orange. Confirmed.** The *Orange* variant lies on the X chromosome (a deletion near *ARHGAP36*, Kaelin et al. and Sato et al., Current Biology 2025). Heterozygous females are tortoiseshell because of random X inactivation; rare tortoiseshell males are usually XXY. https://www.sydney.edu.au/news-opinion/news/2024/12/04/mystery-gene-cats-coats-found-ginger.html ; https://www.scientificamerican.com/article/this-strange-mutation-explains-the-mystifying-color-of-orange-cats/ . "Almost always female" is correct. The "about 1 in 3,000" figure is not spoken; keep it out of learner copy (sources vary).
- **PKU autosomal recessive. Confirmed.** MedlinePlus Genetics: "inherited in an autosomal recessive pattern"; gene *PAH* (chromosome 12q23.2). https://medlineplus.gov/genetics/condition/phenylketonuria/ . Australian newborn screening includes PKU (not spoken).
- **No crossing over in male *Drosophila*. Confirmed (not used in G02).** https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4949207/ . No finding.
- **Koala, sweet pea:** not used in G02 (see `g01b-claude-science-check.md`).

## Syllabus quote (against `programme/syllabus/bio-2017-y12.json`)

B5-IQ4-02 stem "model the formation of new combinations of genotypes produced during meiosis, including but not limited to:" and both examples "interpreting examples of autosomal, sex-linkage, co-dominance, incomplete dominance and multiple alleles (ACSBL085)" and "constructing and interpreting information and data from pedigrees and Punnett squares": **verbatim match** in the YouTube block and Decisions.

## Em dashes

None in the design file (U+2014 count 0; U+2013 count 0). None in the replacement text below.

## Findings

### Should fix

1. **The "Separate births: multiply" aid states no condition** (2c chip, 6, 7). Quoted: "Separate births: multiply the chances." Independent births multiply only when the parents' genotypes are known; in the Q3 family the joint chance is 1/24, not 1/36. Replace with: "Separate offspring, known parents: multiply the chances." (Also fixes "births" for hatched chicks.)
2. **Scene 5b reason.** Quoted: "Under that pattern, she'd pass an affected X to **every son**." Correct but causeless; the scientific basis is that an affected XR female is homozygous. Replace with: "Under that pattern, both her X chromosomes carry the allele, so **every son** gets it."

### Minor

3. **Q1 allele naming.** Quoted (2b): "A blue bird is heterozygous, with one black allele and one white allele." Accurate as a teaching model; the real alleles are dilution and non-dilution. Keep the grey tag "letters: labels only"; no change to narration needed.
4. **Tortoiseshell as co-dominance.** At the cell level each patch expresses one allele (X inactivation), so "co-dominance" is a loose label. The design wisely avoids saying it outright; keep the screen wording "both alleles show, in patches" next to the small "Co shows both" line.
5. **Q4 assumption wording.** Quoted: "the trait always shows when its allele pattern is present". Scientifically this is "full penetrance"; replace with "anyone with the genotype for the trait shows it".
6. **Scene 5c "married in".** I-1 is a generation-one founder. Replace "who married in" with "unaffected partners" (as in the learning review). Science is otherwise unchanged.
7. **Scene 4d cause.** "That proves she's a carrier" is correct (an affected child is pp and needs one p from each parent; no new mutation is on the card). Adding the cause is a learning fix, listed in the learning review.

### Checked and correct (no change)

"a heterozygote cannot breed true"; "his single X carries only one colour"; "sons only get their mother's X"; "an affected daughter, unaffected father: not X-linked recessive"; "two unrelated carriers... unlikely if rare, so dominant is more likely, but not proven"; "dominant because every generation: a clue, not proof"; key-note "An unaffected child of two carriers has a 2/3 chance of being a carrier"; memory aid "Cross out the box they can't be" (valid when the parents' genotypes are known and the remaining boxes were equally likely, which is the condition on the notes screen).

## Verdict

**ready to voice after fixes** (should fix 1 and 2).

## Resolution (18 Oct, Claude)

Every blocker and should-fix finding above was applied in Revision 2 of `lessons/bio-m5-g02.md` (see its "Revision 2 changes" line), with the replacement wording proposed here or an equivalent of the same length. Minor findings were applied where they helped; any not applied are recorded in the design. Exact voiced preview, voiced learning review and human listening are still pending.
