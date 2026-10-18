# Brief 66: error-only fact check

Checked each design against its exact `measured/lesson.json` narration and built `s*.tsx` scenes. Numerical answers were recomputed. The 2017 dotpoints were checked against the official NSW Biology and Chemistry syllabus files.

## C11: ionic compounds dissolving

- **Syllabus code label:** `chem-m5-c11.md` calls `C5-IQ4-01` a 2017 syllabus code. It is a local catalogue ID, not a code printed in the official syllabus. Label it as a local ID. The quoted dotpoint wording is correct. [Official Chemistry syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx).
- No error found in the recorded enthalpy and entropy signs, hot and cold pack examples, lattice and hydration account, or scene numbers and labels.

## C13: precipitation and solubility rules

- **Sulfides:** The `nagsag` rule and key notes say sulfides are insoluble except with Group 1 and ammonium. Calcium, strontium and barium sulfides are also exceptions. Correct the rule in the design scenes 5 and 20, recorded `nagsag` and `key-notes`, and `s1.tsx:236` and `s4.tsx:147`. [Solubility rules](https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/materials-science-and-engineering/solid-state-synthesis/solubility-rules-solubility-of-common-ionic-compounds).
- **Sulfates:** The exceptions omit strontium sulfate. Add SrSO4 alongside BaSO4 and PbSO4 in design scenes 5 and 20, recorded `nagsag` and `key-notes`, `s1.tsx:215`, `s4.tsx:147`, and the compact card in `parts.tsx:148`. [RSC teacher notes](https://edu.rsc.org/download?ac=513948).
- **Hydroxides:** Recorded `feedback-1` says hydroxides are insoluble unless paired with Group 1. Ba(OH)2 is soluble; Ca(OH)2 and Sr(OH)2 are slightly soluble. The lesson itself teaches the barium exception earlier. Correct the absolute rule in design scene 16 and the recorded feedback. Cu(OH)2 still precipitates. [Solubility rules](https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/materials-science-and-engineering/solid-state-synthesis/solubility-rules-solubility-of-common-ionic-compounds).
- **Group 1 compounds:** Recorded `nagsag`, design scene 5 and `s1.tsx:231` say the first rules have “no exceptions”. Lithium phosphate is poorly soluble. Remove that absolute claim. [Solubility rules](https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/materials-science-and-engineering/solid-state-synthesis/solubility-rules-solubility-of-common-ionic-compounds).
- **Syllabus code label:** `chem-m5-c13.md` presents `C5-IQ4-03` as if it were an official code. It is a local catalogue ID. Label it as local. The dotpoint wording and `ACSCH065` match the [official Chemistry syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx).
- No other error found in the precipitate colours, including white BaSO4, net ionic equations, or excess-ion answers.

## C14: Ksp and molar solubility

- **Wrong reverse-ratio example:** `s3.tsx:175` calls Mg(OH)2 “the other way round” from CaF2. Both release one cation and two anions. Ag2CO3 is a reverse example, releasing two cations and one anion. Both ratios give Ksp = 4s³.
- **Root rule overgeneralised:** Design scene 18, recorded `decision-rule`, and `s4.tsx:149,156` say any Ksp question can be solved with a square or cube root. A 1:3 salt gives Ksp = 27s⁴ and needs a fourth root; a 3:2 salt gives Ksp = 108s⁵ and needs a fifth root. Limit the rule to the ratios taught here or state the general root order m + n for A_mB_n. [NESA reference sheet](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf).
- No error found in the taught Ksp values against the NESA sheet, the off-sheet CaF2 label, worked solubilities, reverse Ksp calculations, or the 2017 syllabus quotation.

## C15: Q against Ksp and common ions

- No error found in any Qsp value, Ksp comparison, common-ion solubility, deliberately crossed wrong answer, or the 2017 syllabus quotation. The Ksp values used match the [NESA reference sheet](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf).

## B7: protein to trait and environment

- **Protein chains:** Recorded `protein-jobs`, design scene 2 and `s1.tsx:120` say every example is a single polypeptide chain. Haemoglobin has four chains, and a typical antibody has four. Correct: a protein contains one or more folded polypeptide chains. [Haemoglobin structure](https://pmc.ncbi.nlm.nih.gov/articles/PMC4219717/), [antibody structure](https://www.ncbi.nlm.nih.gov/books/NBK27144/).
- **Red cell synthesis:** Recorded `why-synthesis`, design scene 9 and `s3.tsx:163-168` give a mature red cell the “same genes” and show it making haemoglobin. Mature human red cells have no nucleus or ribosomes; developing red cells make haemoglobin before losing them. Use a developing red cell for that comparison.
- **Rabbit offspring:** The recorded `attempt` and `feedback-one`, design scenes 11a and 11b, and `s4.tsx:21,99,106` predict white-backed offspring from one Himalayan rabbit without stating the other parent's genotype. A full-colour mate can produce full-colour young. Establish that the offspring have the Himalayan genotype before predicting white backs under normal rearing. Cooling the parent's patch does not change an inherited allele. [Rabbit coat-colour inheritance](https://extension.oregonstate.edu/catalog/understanding-genetics-behind-rabbit-coat-colors-part-2-coat-color-genes).
- No other error found in the folding and function account, Himalayan temperature-sensitive enzyme account, other examples, or the 2017 syllabus wording and `BIO12-12`.

## B8: sources of genetic variation

- **Mutation and inheritance:** Recorded `decision-rule`, design scene 10 and `s4.tsx:187` make an egg or sperm line mutation a condition for a *new allele*. Somatic mutation can also make a new allele. A mutation must reach a gamete to be transmitted through sexual reproduction. [Somatic mutation](https://www.ncbi.nlm.nih.gov/books/NBK557896/).
- **Truncated syllabus quote:** `bio-m5-b08.md:9` quotes B5-IQ4-02 only through “produced during meiosis”. The official stem continues “, including but not limited to:”. Restore that ending when quoting the dotpoint. `B5-IQ4-02` is a local catalogue ID, not a printed syllabus code. [Official Biology syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx).
- No other error found in the meiosis and fertilisation combination counts, crossing-over and assortment account, pea and fly examples, or other cited syllabus wording.

## B9: Punnett squares and pedigrees

- No error found in the tall/short and round/wrinkled squares, 1:2:1 and 3:1 ratios, test cross, per-child probabilities, pedigree modes and genotypes, or the 2017 syllabus wording and `BIO12-12`. Exactly one short plant in four has probability 4(1/4)(3/4)³ = 42.1875%; Mendel's 787 + 277 = 1,064.

## B10: inheritance patterns

- **Affected father's daughters:** Recorded `x-linked-pedigree`, design scene 5 and `s2.tsx:47` say all daughters of an affected father are carriers. Each receives his affected X, but a daughter can be affected if she also receives the recessive allele from her mother. In the drawn P4 family, the daughters shown as carriers received an unaffected X from their mother. State that condition for the example.
- **Morgan's first generation:** Recorded `hook`, design scene 1 and `s1.tsx:44-45` say all offspring had red eyes. Morgan reported 1,237 red-eyed flies and 3 white-eyed males in that first cross. Correct the absolute historical claim. The design's author note already records the three exceptions. [Morgan's 1910 report](https://journals.sagepub.com/doi/pdf/10.3181/00379727-8-12).
- **Pedigree numbering:** Design scene 5 calls P4's carrier daughters II-1 and II-3, while the built `shared.tsx:68-74` labels them II-2 and II-4. Correct the design's person IDs to match the displayed pedigree.
- No other error found in the X-linked squares and probabilities, incomplete and codominant ratios, ABO genotypes and cross, other pedigree readings, or the 2017 syllabus wording and `BIO12-12`.
