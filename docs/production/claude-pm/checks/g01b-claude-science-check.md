# G01b science check (bio-m5-g01, trace practice, Revision 1)

Reviewer: independent (did not author the design). Date: 18 Oct 2026.
Inspected: `lessons/bio-m5-g01.md` Revision 1 (narration, visual notes, model answers, numbers, metadata). Every answer was recomputed independently with a script that uses a hand-written codon dictionary (not the TCAG string the author used) and exact arithmetic: `C:\Users\kygs\AppData\Local\Temp\claude\c--lesson-video-generator\ed4a88d8-fdfe-46da-9442-961cd412b0db\scratchpad\check.py`.

## Recomputed answers

**Q1 (copying error).** Start T-A. Round 1: the A strand templates a new T (A-T, normal); the T strand receives a G (T·G, mismatch). Round 2: A-T gives two A-T (normal). T·G separates: the T strand templates A (normal); the G strand templates C (G-C, changed). Final: 3 normal, 1 G-C in place of T-A. **Matches the design.** The crossed mistake "two" is the right classic error.

**Q2 (coding strand 3' CGGAATAAAGGTGTA 5').**
- Reversed to 5' to 3': 5' ATG TGG AAA TAA GGC 3' (coding). mRNA 5' AUG UGG AAA UAA GGC 3'.
- AUG Met, UGG Trp, AAA Lys, UAA stop, GGC Gly (not translated). Chain Met-Trp-Lys, **3** amino acids. **Matches.**
- Wrong method 1 (left to right, T to U): CGG Arg, AAU Asn, AAA Lys, GGU Gly, GUA Val. **Matches** "arginine, asparagine and three more, with no start codon". There is no AUG in that reading frame; correct.
- Wrong method 2 (paired as a template, read left to right): GCC Ala, UUA Leu, UUU Phe, CCA Pro, CAU His. **Matches.** Reading left to right is the correct direction for that complementary strand (its 5' end is on the left), so this chip shows the honest result of the "pair, don't copy" error alone.
- Strand directions: the coding strand and mRNA run the same way; mRNA is read 5' to 3'. Correct as stated in 3b except for the wording conflation noted in the learning review (should fix 1).

**Q3 (koala, 2n = 16, about 7.0 pg in G1).**
| stage | chromosomes | chromatids | DNA |
|---|---|---|---|
| G1 | 16 | 16 | 7.0 pg |
| prophase I | 16 | 32 | 14.0 pg |
| each cell after meiosis I | 8 | 16 | 7.0 pg |
| each sperm | 8 | 8 | 3.5 pg |
Check 4 x 3.5 = 14.0. **Matches.** Unspoken mistake chip "prophase I: 32 chromosomes" is a genuine chromatid-count error.

7.0 pg derivation: 2 x 3.42 x 10^9 bp / 0.978 x 10^9 bp per pg = 6.99 pg. **Correct**, but note it is derived from the assembly length, not a measured C-value. "About" in the stem covers this.

**Q4 (sweet pea, P L / p l, one crossover between the loci).** After S phase: PL, PL, pl, pl. One crossover between non-sister chromatids: PL, Pl, pL, pl. Meiosis I separates homologues, meiosis II separates sister chromatids; each of four microspores gets one: PL, Pl, pL, pl. 2 parental, 2 recombinant. **Matches.**

## Organism facts (sources)

- **Koala 2n = 16. Confirmed.** Johnson et al. (2018) Nature Genetics 50:1102-1111: "Koalas have 16 chromosomes, differing from the ancestral marsupial 2n = 14 karyotype", and "generating a 3.42 Gb reference assembly". https://pmc.ncbi.nlm.nih.gov/articles/PMC6197426/
- **7.0 pg.** Consistent with that assembly and the standard 1 pg = 978 Mb conversion (Dolezel et al. 2003, Cytometry A 51:127-128). No flow cytometry C-value was found for the koala in the Animal Genome Size Database search (https://genomesize.com/). Keep "about" on screen and in speech.
- **Sweet pea linkage. Confirmed.** Bateson, Saunders and Punnett (reports to the Evolution Committee, 1905 to 1908) crossed purple, long-pollen (P L) and red, round-pollen (p l) *Lathyrus odoratus*; the F2 had excess PL and pl and too few Pl and pL, the first recorded linkage ("coupling"). https://en.wikipedia.org/wiki/Genetic_linkage ; https://ebsco.com/research-starters/history/bateson-and-punnett-observe-gene-linkage . Purple dominant to red, long dominant to round: correct. The author's point that pollen shape is set by the parent plant (sporophytic) is right; the card correctly asks only for alleles.
- **No crossing over in male *Drosophila*. Confirmed (true, not used in G01).** Male *D. melanogaster* meiosis is achiasmate (first described by Morgan in the early 1910s; rare exceptions, Hiraizumi 1971). https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4949207/ . G01 uses no *Drosophila* item, so no finding. If a later fix ever swaps Q4 to flies, it must use a female.
- **Firefly light from luciferase.** Correct; only "an enzyme made from one gene" is spoken, and the sequence is labelled "illustrative".

## Syllabus quotes (against `programme/syllabus/bio-2017-y12.json`)

- B5-IQ2-01 stem and both examples: **verbatim match**.
- B5-IQ3-02 stem "model the process of polypeptide synthesis, including: (ACSBL079)" and "transcription and translation": **verbatim match**.
- B5-IQ4-02 stem "model the formation of new combinations of genotypes produced during meiosis, including but not limited to:": **verbatim match**. See minor 4 on whether it is the best dotpoint.

## Em dashes

None in the design file (U+2014 count 0; U+2013 count 0). No em dashes in any replacement text below.

## Findings

### Should fix

1. **Model answer 4(b) overstates a limit.** Quoted: "Only the two chromatids in the crossover become new, so even a crossover cell gives at most half new". A cell with two crossovers between the loci involving all four chromatids gives four recombinants, so "at most half" is false for a single cell (it holds only as an average over many meioses). Replace with: "Only the two chromatids in the crossover become new, so a cell with one crossover between the genes gives half new". The same correction applies to the author note "Recombinant share of all pollen = half the share of meioses with a crossover in the interval": add "(single crossovers only)".

### Minor

2. **Scene 2b simplification.** Quoted: "A T and a G don't fit as a proper pair". G·T wobble pairs form two hydrogen bonds; the accurate claim is that they are not complementary partners. Replacement as in the learning review: "A T and a G aren't partners, so they pair badly, and this molecule has a **mismatch**."
3. **X and Y sperm differ in DNA mass.** A male koala's X-bearing and Y-bearing cells after meiosis I and II do not hold identical DNA (the marsupial Y is very small). 3.5 pg and 7.0 pg are averages. Keep "about" in the answer lines: "about 7.0" and "about 3.5", or add to the givens "treat every chromosome set as equal in DNA" (similar length to the existing condition line).
4. **Dotpoint choice for crossing over.** B5-IQ4-02's listed examples are inheritance patterns; crossing over is named explicitly in B5-IQ4-01: "conduct practical investigations to predict variations in the genotype of offspring by modelling meiosis, including the crossing over of homologous chromosomes, fertilisation and mutations (ACSBL084)". The stem-only quote is verbatim and defensible, but if root wants the dotpoint that names the Q4 skill, quote B5-IQ4-01 instead (or as well), noting P01 owns its practical coverage.
5. **Notes condition tag.** "after copying, before the chromatids separate" is narrower than the aid's true range; replace with "a single, unpaired chromosome counts as one chromatid" (as in the learning review).

### Checked and correct (no change)

"Copying doubles the DNA, not the chromosomes"; "Meiosis I splits the pairs. Meiosis II splits the copies"; "a crossover changes two chromatids, not four" (true for one crossover, which is the stated condition); UAA adds no amino acid and releases the chain; AUG is the start codon (methionine); "four pollen cells" from one meiosis in an anther (microspore tetrad); Q1's "not repaired" and Q3's "no mistakes in division" are the necessary conditions and are on the cards.

## Verdict

**ready to voice after fixes** (should fix 1 in the model answer and author note; minors 2 and 3 recommended in learner copy).

## Resolution (18 Oct, Claude)

Every blocker and should-fix finding above was applied in Revision 2 of `lessons/bio-m5-g01.md` (see its "Revision 2 changes" line), with the replacement wording proposed here or an equivalent of the same length. Minor findings were applied where they helped; any not applied are recorded in the design. Exact voiced preview, voiced learning review and human listening are still pending.
