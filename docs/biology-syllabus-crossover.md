# Biology: 2017 syllabus vs new Biology 11–12 (2025) syllabus, crossover audit

Prepared 2026-09-24. Scope: all 84 Biology lesson JSONs in `src/data/biology-y12-m{5..8}-*.json`. That is the 80 lessons plus 4 lessons that were split into A/B parts (M8 L13, L17, L18, L19). Each one is classified against the new NESA syllabus. The goal is to find content taught under **both** syllabuses so that audio and image credits go only on lessons that stay useful after the changeover.

## Sources (primary, verified)

All new-syllabus content below was read from the official NESA Digital Curriculum on 2026-09-24. The text was taken from the page data embedded in each focus-area page. A plain-text copy is saved at `.agents/syllabi/biology-11-12-2025-syllabus-content.txt`. NESA publishes no single Word or PDF of the full syllabus; only a JS "custom download" exists.

- Overview (structure, hours, implementation): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview
- Content (landing): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content
  - Y11 Cells as the basis of life: `.../content/year-11/fa0edb304c`
  - Y11 Cells to systems: `.../content/year-11/fa79a477bc`
  - Y11 Evolution and ecosystems: `.../content/year-11/fad715a0de`
  - Y12 Heredity: `.../content/year-12/fab2288036`
  - Y12 Diseases: `.../content/year-12/facdcec83d`
  - Y12 Biodiversity: `.../content/year-12/fa0a6a1d67`
  - Y12 Biotechnology: `.../content/year-12/fa610240ba`
- 2017 syllabus: `.agents/syllabi/biology-stage-6-syllabus-2017 (2).docx`

### Implementation dates (verbatim from the NESA overview page)

| When | What |
|---|---|
| 2026 | Plan and prepare |
| **2027 Term 1** | Year 11 starts the new syllabus. Year 12 continues on the 2017 syllabus. |
| **2027 Term 4** | Year 12 starts the new syllabus (the HSC course starts in Term 4, not 2028) |
| **2028** | First HSC exam on the new syllabus |
| 2027 HSC | Last HSC exam on the 2017 syllabus (Year 12 of 2027) |

So the current 2017-framed Y12 lessons have **one more full cohort**, the 2027 HSC. After that, only crossover content keeps its value.

### New structure (indicative hours)

| Year 11 (120 h, incl. 10 h depth study + 1 fieldwork) | h | Year 12 (120 h, incl. 10 h depth study) | h |
|---|---|---|---|
| Cells as the basis of life (BI-11-01) | 40 | Heredity (BI-12-01) | 30 |
| Cells to systems (BI-11-02) | 40 | Diseases (BI-12-02) | 30 |
| Evolution and ecosystems (BI-11-03) | 40 | Biodiversity (BI-12-03) | 30 |
| | | Biotechnology (BI-12-04) | 30 |

Rough mapping: 2017 M5+M6 split into **Heredity** plus half of **Biotechnology**. 2017 M7+M8 (60 h) shrink into **Diseases** (30 h). **Homeostasis moves to Y11** (Cells to systems). Plant disease and reproduction diversity move to **Biodiversity**, which also takes most of 2017 Y11 M3/M4 conservation content. Mitosis, meiosis, DNA structure and replication **move from Y12 to Y11**.

## Counts

| Classification | Count (of 84 files) | M5 | M6 | M7 | M8 |
|---|---|---|---|---|---|
| **CROSSOVER** (content in both syllabuses, reusable as-is or with trivial wording changes) | **44** | 11 | 10 | 12 | 11 |
| **PARTIAL** (mostly overlaps, needs edits) | **30** | 7 | 8 | 7 | 8 |
| **2017-ONLY** (drop or deprioritise) | **10** | 1 | 1 | 2 | 6 |

"Moves" means the content survives but sits in a different year or focus area. That changes the lesson's title card and caption ("Year 12 Biology, Module 5…"), and for Y11 moves the syllabus metadata too. The script content itself carries over. The metadata fields (`yearLevel`, `module`, `syllabusModule`, `syllabusDotPoints`, `nesaOutcomes`, caption text) would need a new-syllabus version to be published as new-syllabus lessons.

## Per-lesson table

Legend: **X** = CROSSOVER, **P** = PARTIAL, **—** = 2017-ONLY. "→Y11" = moves to Year 11. Focus-area group names are NESA's content-group headings.

### Module 5: Heredity (19)

| Lesson file | Title | Class | New-syllabus location | Action |
|---|---|---|---|---|
| m5-l1-reproduction-continuity | Reproduction and Continuity of Species | X | Y12 Biodiversity › Genetic diversity (asexual vs sexual, continuity in changing environments) | Keep; retitle to Biodiversity |
| m5-l2-reproduction-in-animals | Reproduction in Animals | X | Y12 Biodiversity › Genetic diversity ("compare external and internal fertilisation methods for creating variation") | Keep |
| m5-l3-reproduction-plants-fungi-bacteria-protists | Reproduction in Plants, Fungi, Bacteria and Protists | X | Y12 Biodiversity › Genetic diversity (plant sexual/asexual; budding, spores, parthenogenesis, binary fission) | Keep. The Komodo parthenogenesis hook fits the new wording exactly |
| m5-l4-mammalian-reproduction | Mammalian Reproduction | — | Not in new syllabus (no fertilisation/implantation/pregnancy/hormones point) | Drop for new syllabus. Voice only if serving the 2027 HSC cohort |
| m5-l5-manipulating-reproduction-agriculture | Manipulating Reproduction in Agriculture | P | Y12 Biotechnology (artificial pollination; "germline changes in reproductive and genetic engineering biotechnologies") + Biodiversity (monoculture) | Recut toward artificial pollination and germline change. Selective breeding and AI are 2017 framing |
| m5-l6-dna-structure-replication | DNA Structure and DNA Replication | P | **→Y11** Cells as the basis of life › Cell division | Add helicase, **primase, DNA polymerases, ligase** and **leading/lagging strands** (all named in new syllabus, absent from lesson) |
| m5-l7-mitosis | Mitosis | P | **→Y11** Cells as the basis of life › Cell division | Add cell cycle **G1 / S / G2** phases and cytokinesis. Add somatic vs gametic cells |
| m5-l8-meiosis | Meiosis | X | **→Y11** Cells as the basis of life (phases, crossing over, independent assortment, random segregation). Also Y12 Heredity › Inheritance patterns | Keep (Y11 title card) |
| m5-l9-dna-prokaryotes-eukaryotes | DNA in Prokaryotes and Eukaryotes | X | **→Y11** Cells as the basis of life ("compare the forms in which DNA exists in prokaryotic and eukaryotic cells") | Keep (Y11 title card) |
| m5-l10-transcription-dna-to-mrna | Transcription | X | Y12 Heredity › Polypeptide synthesis (template/coding strand, RNA polymerase, alternative splicing) | Keep. Check that introns/exons are named (the word "intron" does not appear) |
| m5-l11-translation | Translation | X | Y12 Heredity › Polypeptide synthesis | Keep |
| m5-l12-proteins-phenotype | Proteins, Phenotype and Gene–Environment Interaction | X | Y12 Heredity › Polypeptide synthesis (protein function; DNA → phenotype; environment and phenotype) | Keep. New adds 1°–4° structure, epigenetics and regulatory RNA, which are gaps, see below |
| m5-l13-sources-genetic-variation | Sources of Genetic Variation | X | Y12 Heredity › Inheritance patterns (meiosis + fertilisation creating variation) and Genetic variants | Keep. Overlaps M6 L6, so voice one of the two |
| m5-l14-mendelian-patterns | Mendelian Patterns | X | Y12 Heredity › Inheritance patterns (Punnett, sex-linked, pedigrees) | Keep, **top priority** |
| m5-l15-non-mendelian-patterns | Non-Mendelian Patterns | X | Y12 Heredity › Inheritance patterns (codominance, incomplete dominance, multiple alleles) | Keep, top priority |
| m5-l16-frequency-data-snp-analysis | Frequency Data and SNP Analysis | P | Y12 Heredity › Genetic variants (SNPs in populations + association with a genetic disease; limits of SNP testing) | Refocus on SNP–disease association and diagnostic limits. Drop the generic frequency-data framing |
| m5-l17-dna-sequencing-profiling | DNA Sequencing and DNA Profiling | P | Y12 Biotechnology (biotechnologies to diagnose genetic disease; bioinformatics) | DNA profiling is not in the new syllabus. Recut sequencing as a diagnostic/bioinformatics tool. Low priority |
| m5-l18-large-scale-population-genetics | Large-Scale Population Genetics Data | P | Y12 Biotechnology (genetic databases e.g. GenBank for prevalence; data and modelling) + Biodiversity (bottlenecks) | Recut around genetic databases and bioinformatics |
| m5-l19-predicting-population-genetic-patterns | Predicting Population Genetic Patterns | P | Y12 Heredity (SNP limits) / Biotechnology (personalised risk information for a non-infectious disease) | Recut. The "risk ≠ destiny" core survives. Low priority |

### Module 6: Genetic Change (19)

| Lesson file | Title | Class | New-syllabus location | Action |
|---|---|---|---|---|
| m6-l1-mutation-alleles-genetic-change | Mutation, Alleles and Genetic Change | X | Y12 Heredity › Genetic variants | Keep |
| m6-l2-mutagens | Mutagens | X | Y12 Heredity › Genetic variants (EMR, chemicals, naturally occurring. Near-verbatim) | Keep |
| m6-l3-point-mutation | Point Mutation | X | Y12 Heredity › Genetic variants (substitution/insertion/deletion; silent/missense/nonsense/frameshift) | Keep, top priority |
| m6-l4-chromosomal-mutation | Chromosomal Mutation | X | Y12 Heredity › Genetic variants (dup/del/inv/trans; karyotypes and non-disjunction) | Keep, top priority |
| m6-l5-somatic-germline-coding-noncoding | Somatic vs Germ-line; Coding vs Non-coding | X | Y12 Heredity › Genetic variants (somatic/germline in tumours, disease, diversity; coding mutations and protein function) | Keep |
| m6-l6-causes-of-genetic-variation | Causes of Genetic Variation | X | Y12 Heredity › Inheritance patterns | Keep. Duplicates M5 L13, so pick one |
| m6-l7-gene-pools | Gene Pools | X | Y12 Biodiversity › Genetic diversity (gene pool size, drift, gene flow, founder/bottleneck) | Keep |
| m6-l8-biotechnology-definitions | Biotechnology | P | Y12 Biotechnology › Modern biotechnologies | Cut the "traditional biotech" history. Add genetic engineering + bioinformatics roles |
| m6-l9-ethics-social-implications | Ethics and Social Implications | P | Y12 Biotechnology (ethical/legal implications of gene therapy; GM plant for nutritional deficiency) | Refocus on gene-therapy ethics/law and golden-rice-type examples |
| m6-l10-future-directions-benefits | Future Directions and Benefits | P | Y12 Biotechnology › Biotech in human diseases ("outline 2 selected gene therapies"; future applications for a non-infectious disease) | Strong base (gene-therapy "functionally cured" hook). Make it name 2 gene therapies |
| m6-l11-biodiversity-change-genetic-techniques | Biodiversity Change Caused by Genetic Techniques | P | Y12 Biodiversity (3 levels of diversity; monoculture) + Biotechnology (GMO release into wild) | Light edit. The three-levels framing matches the new wording |
| m6-l12-biotechnology-synthesis-evaluation | Biotechnology Synthesis (gene drive) | P | Y12 Biotechnology ("evaluate biotechnologies on the prevalence of mosquito-borne diseases"; GMO release) | Reframe the Target Malaria case as the mosquito-borne-disease point, a good fit |
| m6-l13-current-genetic-technologies | Current Genetic Technologies | P | Y12 Biotechnology ("compare germline genetic changes in reproductive and genetic engineering biotechnologies") | Retitle and reframe around germline change |
| m6-l14-reproductive-technologies-ai-ap | Artificial Insemination and Artificial Pollination | P | Y12 Biotechnology › Agriculture and biodiversity ("artificial pollination in Australian agriculture") | Make it mostly about artificial pollination with an Australian example. Trim AI |
| m6-l15-cloning-whole-organism-gene | Cloning | — | Not in new syllabus (no cloning point; gene cloning only implied in rDNA insulin) | Drop. Fold the gene-cloning steps into M6 L16 if needed |
| m6-l16-recombinant-dna-transgenic-organisms | Recombinant DNA and Transgenic Organisms | X | Y12 Biotechnology ("model recombinant DNA technology to produce human insulin"; "compare transgenic organisms and GMOs") | Keep, top priority. Make insulin the worked example |
| m6-l17-benefits-genetic-technologies | Benefits of Genetic Technologies | P | Y12 Biotechnology (medicine/agriculture/conservation; industrial is gone) | Drop industrial. Add conservation |
| m6-l18-long-term-population-change | Long-Term Population Change (social/economic/cultural contexts) | X | Y12 Biotechnology ("assess the influence of social, economic and cultural contexts on the use of a biotechnology in agriculture". Near-verbatim) | Keep |
| m6-l19-variation-allele-frequency | Variation and Allele Frequency | X | Y12 Biodiversity › Genetic diversity (allele frequency, drift, gene flow, selection) | Keep |

### Module 7: Infectious Disease (21)

| Lesson file | Title | Class | New-syllabus location | Action |
|---|---|---|---|---|
| m7-l1-what-is-infectious-disease | What Is Infectious Disease? | X | Y12 Diseases › Infectious diseases | Keep |
| m7-l2-classifying-pathogens | Classifying Pathogens | X | Y12 Diseases (macro/micro/non-cellular; adaptive features of prions, viruses, bacteria, protozoa, fungi, macroparasites) | Keep. Check each pathogen type gets an "adaptive feature" |
| m7-l3-koch-pasteur-germ-theory | Koch and Pasteur | — | Not in new syllabus | Drop |
| m7-l4-modes-of-transmission | Modes of Transmission | X | Y12 Diseases (direct, indirect, vector. Verbatim) | Keep, top priority |
| m7-l5-microbial-testing | Microbial Testing | P | Y12 Diseases (lab: "effect of antimicrobial treatment on growth of microorganisms in food or water"; E. coli temperature viability) | Reframe the serial-dilution/CFU lesson around an antimicrobial-treatment experiment |
| m7-l6-disease-in-agriculture-plants | Disease in Agriculture: Plants | P | Y12 **Biodiversity** › Genetic diversity ("effects of infectious diseases on plants"; **Panama disease** on bananas) | Move to Biodiversity. Add Panama disease (not in lesson) |
| m7-l7-disease-in-agriculture-animals | Disease in Agriculture: Animals | P | Y12 **Biodiversity** › Sustainable ecosystems (Australian procedures limiting disease transmission in animals/plants) | Reframe from "agricultural production" to Australian biosecurity procedures |
| m7-l8-plant-responses-to-pathogens | How Plants Respond to Pathogens | X | Y12 **Biodiversity** ("physical and chemical changes of a plant in response to pathogens") | Keep (moves focus area) |
| m7-l9-physical-chemical-responses-animals | Physical and Chemical Responses in Animals | X | Y12 Diseases › innate immunity (barriers, secretions, inflammatory response, fever) | Keep. Consider merging with L10 |
| m7-l10-innate-immune-system | The Innate Immune System | X | Y12 Diseases (innate vs adaptive; phagocytes, antimicrobial proteins) | Keep, top priority |
| m7-l11-adaptive-immunity-antigens-antibodies | Adaptive Immunity: Antigens and Antibodies | X | Y12 Diseases (humoral: plasma cells, memory B cells, antibodies) | Keep, top priority |
| m7-l12-t-cells-cell-mediated-immunity | T Cells and Cell-Mediated Immunity | X | Y12 Diseases (helper, cytotoxic, memory, **suppressor** T cells; interleukins) | Keep. Add suppressor T cells (not named in lesson) |
| m7-l13-primary-secondary-immune-response | Primary and Secondary Immune Response | X | Y12 Diseases | Keep, top priority |
| m7-l14-vaccination-active-passive-immunity | Vaccination: Active and Passive Immunity | X | Y12 Diseases (passive vs active; data on vaccination) | Keep, top priority |
| m7-l15-hygiene-quarantine-public-health | Hygiene, Quarantine and Public Health | X | Y12 Diseases ("procedures to limit transmission of infectious diseases in humans") | Keep |
| m7-l16-antibiotics-and-antivirals | Antibiotics and Antivirals | X | Y12 Diseases ("compare pharmaceutical treatments for viral and bacterial diseases") | Keep |
| m7-l17-pesticides-and-genetic-engineering | Pesticides and Genetic Engineering | P | Y12 Biotechnology (mosquito-borne diseases) + **Y11** Evolution and ecosystems (DDT-resistant mosquitoes) | Split value: resistance → Y11; SIT/gene drive → Y12 Biotech |
| m7-l18-malaria-and-dengue-global-case-study | Malaria and Dengue | P | Y12 Biotechnology ("biotechnologies on the prevalence of mosquito-borne diseases") | Reframe from "factors limiting spread" to biotech interventions (Wolbachia, gene drive, vaccines) |
| m7-l19-historical-cultural-disease-control | Historical and Cultural Disease Control | — | Not in new syllabus | Drop |
| m7-l20-indigenous-protocols-bush-medicine | Indigenous Protocols and Bush Medicine | P | Y12 Diseases ("use of an Aboriginal bush medicine in treating disease: tea tree oil, Kakadu plum or emu bush") | Cut protocols/IP. Centre on one named bush medicine |
| m7-l21-environmental-management-pandemic-control | Environmental Management and Pandemic Control | P | Y12 Diseases › Epidemiological studies (surveillance; error/bias during a pandemic) + Biodiversity (epidemic control in **plants/animals**) | Reframe. The new quarantine point is about plant/animal epidemics, not human pandemics |

### Module 8: Non-infectious Disease and Disorders (25 files)

| Lesson file | Title | Class | New-syllabus location | Action |
|---|---|---|---|---|
| m8-l1-homeostasis-feedback-loops | Homeostasis and Feedback Loops | X | **→Y11** Cells to systems › Homeostasis in humans | Keep. Relabel Y11 |
| m8-l2-temperature-regulation | Temperature Regulation | X | **→Y11** Cells to systems (thermoregulation) + Evolution and ecosystems (endotherms vs ectotherms) | Keep. Relabel Y11 |
| m8-l3-glucose-regulation | Glucose Regulation | X | **→Y11** Cells to systems (glucose hormones; diabetes secondary-source investigation) | Keep. Relabel Y11 |
| m8-l4-water-balance | Water Balance | P | **→Y11** Cells to systems (hypothalamus/pituitary; nephron) | Osmoregulation/ADH isn't in the listed feedback examples (glucose, pH, O₂, EPO, temperature). Reframe as a hypothalamus–pituitary lesson |
| m8-l5-plant-water-balance | Plant Water Balance | P | **→Y11** Cells to systems (transpiration factors, cohesion-tension) + Evolution and ecosystems (Australian plant water adaptations; aquatic salt balance) | Reframe around transpiration |
| m8-l6-causes-noninfectious-disease | Causes of Non-infectious Disease | X | Y12 Diseases › Non-infectious diseases (genetics, environment, nutrition) | Keep, top priority |
| m8-l7-genetic-diseases | Genetic Diseases | X | Y12 Diseases + Heredity | Keep |
| m8-l8-environmental-diseases | Environmental Diseases | X | Y12 Diseases (+ "causal relationship for a selected environmental disease") | Keep |
| m8-l9-nutritional-diseases | Nutritional Diseases | X | Y12 Diseases | Keep. Add Aboriginal use of native grasses to prevent nutritional disease (new point) |
| m8-l10-cancer | Cancer | X | Y12 Diseases (non-infectious example) + Heredity (somatic variants and tumour formation) | Keep |
| m8-l11-causes-mastery | Causes Mastery | P | Y12 Diseases › Non-infectious diseases | Consolidation lesson. Remove the 2017 inquiry-question framing. Optional |
| m8-l12-epidemiology-measures-study-design | Epidemiology: Measures and Study Design | X | Y12 Diseases › Epidemiological studies (incidence/prevalence/morbidity/mortality; observational/analytical/experimental; RCT, cohort, cross-sectional) | Keep, **trim** (see M8 section) |
| m8-l13a-analysing-epidemiological-data | Analysing Epidemiological Data A | X | Y12 Diseases › Epidemiological studies (analyse rates; confounding) | Keep |
| m8-l13b-analysing-epidemiological-data | Analysing Epidemiological Data B | X | Y12 Diseases (causation vs correlation; confounding/selection error) | Keep |
| m8-l14-treatment-non-infectious-disease | Treatment of Non-infectious Disease | P | Y12 **Biotechnology** ("analyse data to evaluate a biotechnology used for a selected non-infectious disease"; current/future applications) | Refocus on one biotech (checkpoint inhibitors already the hook). Drop surgery/lifestyle survey. Trim |
| m8-l15-treatment-management-evaluation | Treatment and Management of Non-infectious Diseases | P | Y12 Diseases ("evaluate the effectiveness of a **campaign** to prevent a non-infectious disease") | Refocus on prevention-campaign evaluation |
| m8-l16-autoimmune-diseases-allergies | Autoimmune Diseases and Allergies | — | Not in new syllabus (not an explicit 2017 point either) | Drop |
| m8-l17a-genetic-disorders-inheritance | Genetic Disorders A | P | Y12 Heredity (karyotypes, non-disjunction) + Biotechnology (diagnosing genetic disease: CF, alpha-1 antitrypsin, LCA) | Refocus on diagnosis biotechnologies |
| m8-l17b-genetic-disorders-applying | Genetic Disorders B | P | Y12 Heredity (pedigrees) + Biotechnology (gene therapies; ethics/legal) | Refocus on 2 gene therapies |
| m8-l18a-hearing-loss-foundations | Hearing Loss A | — | Not in new syllabus | Drop |
| m8-l18b-cochlear-implants-applying | Hearing Loss / Cochlear Implants B | — | Not in new syllabus | Drop |
| m8-l19a-visual-disorders-eye-and-errors | Visual Disorders A | — | Not in new syllabus (inherited retinal dystrophy/LCA appear only as genetic-diagnosis examples) | Drop |
| m8-l19b-visual-disorders-technologies | Visual Disorders B | — | Not in new syllabus | Drop |
| m8-l20-kidney-disorders-dialysis-transplantation | Kidney Disorders, Dialysis and Transplantation | P | **→Y11** Cells to systems (nephron filtration/reabsorption/secretion; "compare renal dialysis to the function of the kidney") | Keep nephron + dialysis. Drop transplant/disorders. Relabel Y11 |
| m8-l21-module-8-mastery-integration | Module 8 Mastery | — | Integrates the 2017 M8 inquiry questions, most of which are gone or moved to Y11 | Drop |

## Module 8 recommendation (the over-length question)

The over-length lessons, per `docs/catalogue-build-status.md` (before the A/B splits): L12 12.1, L13 13.1, L14 12.2, L16 12.6, L17 14.7, L18 13.1, L19 12.9, L20 12.6, L21 11.1 min.

| Lesson | Class | Trim worth it? |
|---|---|---|
| L12 Epidemiology measures and study design | **CROSSOVER** | **Yes, trim.** Epidemiology is one of the three content groups in the new Diseases area. This lesson will be used for years |
| L13a/b Analysing epidemiological data | **CROSSOVER** | Already split. **Keep and voice.** |
| L14 Treatment of non-infectious disease | PARTIAL | **Rewrite rather than trim.** Cut to one biotechnology for one NCD, which also fixes the length |
| L16 Autoimmune and allergies | 2017-ONLY | **No.** Don't trim, don't voice |
| L17a/b Genetic disorders | PARTIAL | Already split. Refocus toward Biotechnology diagnosis and gene therapy when revising. Don't spend effort trimming 2017 framing |
| L18a/b Hearing / cochlear implants | 2017-ONLY | **No.** |
| L19a/b Visual disorders | 2017-ONLY | **No.** |
| L20 Kidney, dialysis, transplant | PARTIAL (→Y11) | **Rewrite, not trim.** Remove transplant/disorders and keep nephron + dialysis. That shortens it naturally and makes it a Y11 lesson |
| L21 M8 mastery | 2017-ONLY | **No.** |

**Bottom line:** of the nine over-length M8 lessons, only **L12** (plus the already-split L13) is worth trimming as-is. L14 and L20 need a *content* rewrite for the new syllabus, and that rewrite fixes the length as a side effect. **L16, L18, L19 and L21 are 2017-only. Don't trim them and don't spend credits on them.** One exception: if they're wanted for the last 2017 cohort (the 2027 HSC), voice them once, untrimmed, at the lowest priority. Also worth noting: **M8 L1–L5 (homeostasis) are no longer Year 12 content at all.** They become Year 11 Cells to systems lessons.

## Gaps: new-syllabus content with no existing lesson

"XO-gap" = also in the 2017 syllabus (usually 2017 Year 11 M1–M4), so a lesson built now serves both cohorts. "NEW" = only in the 2025 syllabus.

### Year 11 (starts 2027 Term 1; the repo has no Year 11 Biology lessons)

**Cells as the basis of life (40 h)**
1. Prokaryotic vs eukaryotic cell structures and organelle functions; plant vs animal cells. **XO-gap** (2017 M1)
2. Microscopy technologies and wet-mount practical. **XO-gap** (2017 M1 "technologies to determine cell structure")
3. Fluid mosaic model of the membrane. **XO-gap** (M1)
4. Diffusion, osmosis, facilitated diffusion; hypertonic/hypotonic/isotonic. **XO-gap** (M1)
5. Active transport, endocytosis, exocytosis; what crosses membranes and why. **XO-gap** (M1)
6. Cell requirements (CO₂, O₂, water, ions, amino acids, glucose). **XO-gap** (M1)
7. Enzymes: lock-and-key vs induced fit; temperature/pH/substrate graphs. **XO-gap** (M1)
8. Cell cycle (G1/S/G2) + somatic vs gametic cells. **NEW emphasis** (extend M5 L7)
9. DNA structure, replication and mitosis/meiosis: existing M5 L6–L9 (relabel; L6 and L7 need edits)

**Cells to systems (40 h)**
1. Unicellular, colonial and multicellular organisms; SA:V ratio; hierarchy of organisation. **XO-gap** (M1/M2)
2. Photosynthesis/respiration requirements and conditions. **XO-gap** (M1/M2)
3. Xylem and phloem, translocation, cohesion-tension, transpiration factors. **XO-gap** (M2); M8 L5 partly reusable
4. Digestion (mechanical, physical, chemical, absorption, elimination). **XO-gap** (M2)
5. Blood: components; vessel structure; composition changes through lungs/liver/gut/kidneys/muscle. **XO-gap** (M2 "transport medium")
6. Alveoli and gas exchange. **XO-gap** (M2)
7. Nephron filtration, reabsorption and secretion + dialysis vs kidney. **XO-gap** (2017 M8); rebuild from M8 L20/L4
8. Homeostasis: feedback loops (glucose, pH, blood O₂, EPO, temperature). Existing M8 L1–L3
9. Hypothalamus–pituitary; stress response hormones; hormone-data analysis; tolerance limits. **NEW** (partly in M8 L1/L4)

**Evolution and ecosystems (40 h)**
1. Natural selection: variation, inheritance, selection pressures (biotic/abiotic/human-induced). **XO-gap** (M3)
2. Structural/physiological/behavioural adaptations; ectotherms vs endotherms; aquatic salt/water balance; Australian plant water adaptations. **XO-gap** (M3; M8 L2/L5 partly reusable)
3. Convergent vs divergent; gradualism vs punctuated equilibrium; phylogenetic trees. **XO-gap** (M3)
4. Evidence for evolution: fossils, relative dating, comparative anatomy, biochemistry/DNA/amino-acid sequences, biogeography. **XO-gap** (M3/M4)
5. Antibiotic resistance and DDT-resistant mosquitoes. **XO-gap** (M3; M7 L17 partly reusable)
6. Australian megafauna (Aboriginal palaeontological evidence); monotremes and marsupials. **XO-gap, partial** (M3 platypus, M4 Aboriginal rock art)
7. Aboriginal and Torres Strait Islander uses of plant/animal adaptations. **NEW**
8. Ecosystem abiotic/biotic factors; sampling (quadrat, transects, mark-release-recapture); sampling validity. **XO-gap** (M4)
9. Relationships (predation, competition, mutualism, commensalism, parasitism, **allelopathy**); predator–prey data; carrying capacity. **XO-gap** (M4); allelopathy and carrying capacity are NEW wording

### Year 12 (starts 2027 Term 4)

**Heredity**
- Protein 1°/2°/3°/4° structure and function. **NEW detail** (extend M5 L12)
- Environmental influence on phenotype with named examples (hydrangea pH, melanin/UV, reptile TSD). **XO-gap** (M5 L12 covers the idea)
- **Epigenetics** (glucocorticoid receptor gene, agouti gene) and **regulatory RNA**. **NEW**, needs a new lesson
- Codon-table problem solving (template strand → mRNA → amino acids). **XO-gap**, possibly inside M5 L10/L11; confirm

**Diseases**
- Evaluating a **non-infectious disease prevention campaign**. **XO-gap** (2017 M8 "How can NCDs be prevented?"); M8 L15 is the base
- Aboriginal use of native grasses to prevent nutritional disease. **NEW**
- Lab: antimicrobial treatment effect; E. coli temperature viability. **NEW practical** (reframe M7 L5)
- Surveillance methods; bias and measurement error during an epidemic/pandemic. **NEW-ish**
- Selected scientists (Yalow, Franklin, McClintock, Levi-Montalcini). **NEW**
- Herpes / HPV / cervical cancer: causation vs correlation. **NEW example** (the concept is in M8 L12/L13)

**Biodiversity**
- Invasive species (effects + control strategies). **XO-gap** (2017 M3 cane toad/prickly pear)
- Monoculture, pesticides, land clearing and habitat loss; threatened/extinct Australian species. **XO-gap** (M4 "human activity", "recent extinction")
- Keystone species; indicator species. **NEW**
- Tasmanian devil: reduced genetic diversity. **NEW example**
- Panama disease on bananas. **NEW**
- Ecological sustainability; Aboriginal Caring for Country practices. **XO-gap** (M4 "restore Country or Place")
- National parks and marine reserves; de-extinction ethics; conservation programs for genetic diversity. **NEW**
- Predicting future impacts on biodiversity. **XO-gap** (M4)

**Biotechnology**
- Bioinformatics: role in biotech, ecosystem health, species conservation decisions. **NEW**
- Australian biotechnology examples (research, agriculture, conservation, health). **NEW**
- Genetic databases (GenBank/EMBL) for disease prevalence. **NEW** (M5 L18 partly)
- Two current biotechnologies for **diagnosing infectious disease** (e.g. PCR vs antigen/antibody tests). **NEW**; no lesson mentions PCR or ELISA
- Aboriginal and Torres Strait Islander uses of biotechnologies. **NEW**
- Plant reproductive technology supporting Australian biodiversity. **NEW**

## Build/voice priority (spend credits here first)

Context: all 84 files are currently **unvoiced and have no images**. Priority means (a) crossover, so it's used by both the 2027 HSC cohort and every cohort after; (b) little or no edit needed; (c) high-yield exam content.

**Tier 1: voice now as-is (crossover, Y12 in both syllabuses, exam-core), 24 lessons**
1. Heredity core: M5 L10, L11, L12, L14, L15; M6 L1, L2, L3, L4, L5; M5 L13 (or M6 L6, not both)
2. Immunity core: M7 L1, L2, L4, L9, L10, L11, L12, L13, L14, L15, L16
3. Biotech: M6 L16 (rDNA/insulin), M6 L18 (contexts)

**Tier 2: voice as-is, crossover but moves focus area or year (relabel captions/title only), 19 lessons**
4. Diseases NCD + epidemiology: M8 L6, L7, L8, L9, L10, L13a, L13b; **M8 L12 after trimming**
5. Biodiversity: M5 L1, L2, L3; M6 L7, L19; M7 L8
6. Y11-bound (relabel to Year 11 before voicing so the 2027 Y11 cohort can use them): M5 L8, L9; M8 L1, L2, L3

**Tier 3: edit, then voice (PARTIAL with high reuse), roughly in this order**
- Y11 cell division: M5 L6 (add replication enzymes/lagging strand), M5 L7 (add cell cycle)
- Biotech: M6 L10 (2 gene therapies), M6 L12 (mosquito-borne), M8 L17a/b (diagnosis + gene therapy), M8 L14 (one biotech for an NCD), M6 L13, M6 L14, M6 L11, M6 L8, M6 L9, M6 L17
- Diseases: M8 L15 (prevention campaign), M7 L5 (antimicrobial practical), M7 L20 (bush medicine)
- Biodiversity: M7 L6 (+Panama disease), M7 L7, M7 L21
- Y11: M8 L20 (nephron + dialysis), M8 L4, M8 L5
- Lower: M5 L5, L16, L17, L18, L19; M7 L17, L18; M8 L11

**Build new (Y11 first, since Y11 starts 2027 Term 1):** in order, Y11 membranes and transport (items 3–5), enzymes, cell structures/microscopy, then Cells to systems transport/digestion/blood/gas exchange, then Evolution (natural selection, evidence, adaptations), then ecosystems/sampling. All are **XO-gaps** (they were 2017 Year 11 content too), so they also serve any student revising Year 11 under the 2017 course. For Y12, the highest-value new builds are **epigenetics + regulatory RNA**, **infectious-disease diagnostics (PCR vs antigen tests)**, **bioinformatics**, and **invasive/keystone species**.

**Do not voice (2017-ONLY, 10):** M5 L4; M6 L15; M7 L3, L19; M8 L16, L18a, L18b, L19a, L19b, L21. The only case for them is the final 2017 HSC cohort (2027). If that audience matters, voice them last.

## What was not verified

- **Verified from the primary source:** implementation dates, structure/hours, and every content point quoted or paraphrased above (from the curriculum.nsw.edu.au focus-area pages, 2026-09-24).
- **Judgement calls, not NESA statements:** CROSSOVER/PARTIAL/2017-ONLY labels, "top priority" flags, and gap groupings are this audit's reading of lesson content against syllabus wording. Lesson content was skimmed via titles, dot-point metadata, scene headings and keyword greps, not full scripts. So "lesson lacks X" means the term was not found in the JSON.
- **UNVERIFIED:** M8 durations are taken from `docs/catalogue-build-status.md`, not re-measured. Teaching advice, the depth-study specifics and the NESA sample scope-and-sequence documents (.docx) were not read.
