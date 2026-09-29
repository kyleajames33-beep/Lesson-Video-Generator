# Independent pre-render content audit — 30 September 2026

**Recommendation: hold final narration and production rendering for the lessons with identified errors. The catalogue does not yet have a complete scientific or visual sign-off.**

This is a new content review against live official NESA page data, not an endorsement of previous repo audits, lesson labels, or successful renderer checks. It found 28 issues: 15 hold findings, 10 corrections and 3 source/qualification reviews. Finding counts are not lesson counts: one issue can affect several lessons, and one lesson can have several issues.

## Scope and evidence

- Inventoried all 308 current lesson JSONs and screened the catalogue for syllabus labels, source trails and risky universal claims.
- Read the principal teaching narration, worked examples and quick checks across all 75 new Year 11 Biology lessons. Also inspected their declared syllabus mappings and diagram props; selectively inspected relevant diagram implementation. Hooks, definitions and summaries received targeted checks, not an exhaustive separate line-by-line review.
- Conducted targeted principal-scene checks of Biology Y12 M6 L16, Chemistry Y12 M7 L21 and Chemistry Y12 M6 L2; sampled selected biotechnology/population-genetics scenes elsewhere. The remaining catalogue has **not** received equivalent manual science review in this pass.
- Fetched the live NESA focus-area pages over HTTPS and followed the actual content-group/content-item links in their embedded page data. Formula components were resolved separately. The repo's older plain-text syllabus extract is incomplete where equations were omitted; it was not used as the sole authority.
- Baseline: main commit `b3796f22c311e30df3778732a9cd254cc5029a22`. Five Chemistry lesson files in the review workspace include the proposed corrections from [draft PR #36](https://github.com/kyleajames33-beep/Lesson-Video-Generator/pull/36). Those corrections are not assumed merged. All new Biology issues also exist on the main baseline.
- The JSON ledger records each file's review scope, findings, script hash and syllabus metadata. A provisional result means no issue identified within that scope; it is not proof that every sentence, example or visual is accurate.

## Use the right syllabus for the cohort

| Collection | Files | Actual declared target | Cohort decision |
|---|---:|---|---|
| Biology Year 11 | 75 | Biology 11–12 (2025) | New Year 11 course from Term 1, 2027; use the three new focus areas. |
| Biology Year 12 | 84 | 53 declare 2017; 31 declare 2017 + 2025 | 2017 remains the Year 12 syllabus through the 2027 HSC. Mixed labels do not certify complete new-course coverage. |
| Chemistry Year 11 | 73 | Chemistry Stage 6 (2017) | Correct legacy target for 2027 Year 11; **not** a complete new-2025-course package for 2028 Year 11. |
| Chemistry Year 12 | 76 | Chemistry Stage 6 (2017) | Legacy syllabus remains through the 2028 HSC. |

Biology's new Year 12 teaching begins Term 4, 2027, with the first new HSC in 2028. Chemistry's new Year 11 begins Term 1, 2028; Year 12 begins Term 4, 2028, with the first new HSC in 2029. The publication year “2025” is not the implementation year. The current Chemistry inventory includes the legacy Mole Concept lesson and its Part A/Part B replacements; choose the production route deliberately rather than rendering all three as a continuous course.

For new Chemistry preparation, the Year 11 narration screen found no `PV = nRT` teaching or explicit VSEPR treatment. Radioactivity and flame tests are mentioned in isolated legacy scenes, but this does not establish coverage of the new nuclear-decay/fission, half-life/application and emission-spectroscopy sequence. These require a fresh content-item map to the three new Chemistry focus areas before the 73 legacy scripts can be advertised as a complete 2028 course. Older Hess-law/entropy/Gibbs material must be checked for placement or retained explicitly as enrichment, rather than silently presented as required new Year 11 content.

Sources: [NESA Biology overview](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview), [NESA Chemistry overview](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview), [NESA legacy Chemistry](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017).

## New Year 11 Biology alignment

| Official focus area | Videos | Official content items | Nominal metadata mapping |
|---|---:|---:|---|
| Cells as the basis of life | 25 | 30 | All 30 represented |
| Cells to systems | 25 | 29 | All 29 represented |
| Evolution and ecosystems | 25 | 30 | All 30 represented |

All **89** focus-area content items have a corresponding declared lesson mapping. This is topic coverage, not demonstrated mastery or complete teaching coverage. In particular, A06 and A07 map to official items but do not fully teach the required calculation/data skill. New DNA replication, cell division and human homeostasis topics are present in Year 11, so the collection is not simply the old four-module Year 11 course relabelled.

The separate Working scientifically focus area must be integrated. The scripts discuss variables, controls, models, repeatability and bias, but there is no explicit complete WS outcome/content mapping. The new WS content also includes uncertainty calculations, percentage error, range, mean, standard deviation and precision. Those named calculation/precision requirements are not demonstrated as a complete sequence in the 75 videos. This is a course-resource coverage gap, not a requirement that every video contain every WS skill. Add a programme-level matrix and supporting practical/data lessons before claiming a complete course.

NESA's negative-feedback examples (including blood pH, oxygen and EPO) sit in its **examples** field; they must not be misclassified as separate mandatory content items. Conversely, the field-of-view formula is inside the actual required content item and cannot be dropped. Videos that explain a practical do not replace students conducting the required investigations, fieldwork or depth study.

## Identified issues and required correction

“Hold” means the identified error or missing required skill should be resolved before recording final narration. “Correct” means a misleading definition or overstatement should also be corrected before audio spend. “Review” requires source checking or a clearly stated qualification. Each entry identifies the teaching/check scenes in the findings JSON; the correction must be propagated through narration, bullets, captions and diagrams wherever repeated.

### A01 — HOLD — biology-y11-m2-l19

**Issue:** Hot-day water conservation is reversed: narration says less water is reclaimed on a hot day and more on a cold day.

**Required change:** For dehydration from sweating, explain increased ADH, increased collecting-duct water permeability and increased water reabsorption, producing less, more concentrated urine. Temperature alone does not determine ADH.

Scenes: concept-design. [Evidence](https://openstax.org/books/anatomy-and-physiology-2e/pages/26-2-water-balance).

### A02 — HOLD — biology-y11-m2-l19

**Issue:** Urea is said not to be reabsorbed. This incorrectly treats excretion as meaning no tubular reabsorption.

**Required change:** Explain that some filtered urea is reabsorbed and recycled while net urea excretion removes nitrogenous waste. Revise the narration and corresponding diagrams/bullets.

Scenes: concept-tubule, worked-example. [Evidence](https://open.oregonstate.education/anatomy/chapter/25-3-physiology-of-urine-formation-overview/).

### A03 — HOLD — biology-y11-m2-l20

**Issue:** Dialysis is said to rely on diffusion alone, although the same lesson describes removal of excess water.

**Required change:** Distinguish solute diffusion from pressure-driven ultrafiltration of water; describe routine treatment frequency as an example, since regimens vary.

Scenes: concept-compare, worked-example. [Evidence](https://pmc.ncbi.nlm.nih.gov/articles/PMC5056503/).

### A04 — HOLD — biology-y11-m2-l12

**Issue:** The phloem is said to carry sugars, not water; absence of dye is overinterpreted as evidence of that claim.

**Required change:** Phloem transports sugars dissolved in water. The celery dye traces the xylem pathway in this setup; lack of phloem staining does not establish absence of water transport.

Scenes: concept-stem-root, worked-example. [Evidence](https://pmc.ncbi.nlm.nih.gov/articles/PMC2949042/).

### A05 — HOLD — biology-y11-m2-l25

**Issue:** 40°C is described as posing no immediate danger; 42°C is presented as a universal irreversible enzyme-damage boundary. The lesson also claims fever simply slows all enzymes.

**Required change:** Remove reassurance and fixed survival/denaturation thresholds. Explain that risk depends on duration, cause and individual factors; distinguish fever from hyperthermia, and use clearly labelled illustrative tolerance ranges. Severe heat illness can occur around 40°C.

Scenes: concept-zones, concept-enzymes, worked-example, quick-check. [Evidence](https://www.cdc.gov/niosh/docs/2010-114/default.html).

### A06 — HOLD — biology-y11-m1-l05

**Issue:** The mapped NESA content explicitly requires cell size = diameter of field of view / number of cells across it. The script teaches direct grid reading and image-size/magnification instead, without the specified equation.

**Required change:** Keep the useful existing methods, add a calibrated field-of-view calculation and a question using the NESA equation, and preserve the complete equation in syllabus metadata.

Scenes: concept-mini-grid, worked-example, summary. [Evidence](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c).

### A07 — HOLD — biology-y11-m2-l24

**Issue:** The lesson maps to analysis of hormone levels and physiological processes, but the data scene/diagram contains glucose only, with no measured hormone series.

**Required change:** Add labelled insulin or another endocrine-hormone time series alongside the physiological response; identify illustrative data as illustrative and analyse the relationship, not merely infer unseen insulin.

Scenes: concept-data. [Evidence](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa79a477bc).

### A08 — HOLD — biology-y11-m2-l01

**Issue:** Volvox is presented as identical, independent cells without specialisation, and the colony/multicellular distinction is reduced to whether isolated cells die. Volvox carteri has differentiated somatic and reproductive cells; cultured multicellular-organism cells can survive independently under suitable conditions.

**Required change:** Choose a clearly defined colonial species/example, explain Volvox as an example on a complexity spectrum where appropriate, and replace the universal separation test with evidence of division of labour and interdependence.

Scenes: concept-colony, concept-multi, quick-check. [Evidence](https://pubmed.ncbi.nlm.nih.gov/21680429/).

### A09 — CORRECT — biology-y11-m2-l03

**Issue:** A tissue is defined as one type of cell, yet the lesson itself calls xylem a tissue. Complex tissues contain multiple cell types.

**Required change:** Define a tissue as an organised group of cells working together on related functions; similar cells are common, but a single cell type is not a requirement.

Scenes: worked-example. Evidence: Internal contradiction with the xylem example in this same lesson.

### A10 — CORRECT — biology-y11-m1-l07

**Issue:** All integral proteins are said to span the whole bilayer; that specifically describes transmembrane proteins.

**Required change:** Integral proteins are embedded in the membrane; many span it. Keep channels/carriers as transmembrane examples.

Scenes: concept-proteins. [Evidence](https://openstax.org/books/concepts-biology/pages/3-4-the-cell-membrane).

### A11 — CORRECT — biology-y11-m1-l17, biology-y11-m1-l18

**Issue:** All activity loss either side of optimum pH is labelled denaturation. Changes in active-site ionisation can reduce activity without permanent unfolding.

**Required change:** Distinguish reversible pH effects on charge/binding from denaturation at sufficiently extreme conditions. Do not treat every point on the bell-shaped curve as destroyed enzyme.

Scenes: concept-factors, concept-ph, quick-check. [Evidence](https://openstax.org/books/microbiology/pages/8-1-energy-matter-and-enzymes).

### A12 — HOLD — biology-y11-m2-l05

**Issue:** Bright light and a warm day are treated as enough information to prove carbon dioxide is limiting. Water, species, leaf temperature, stomatal conductance and actual light-response data are unspecified.

**Required change:** Provide explicit controlled conditions and response data demonstrating a CO2-limited plateau, or make the answer conditional. Also qualify the claim that light and CO2 can increase forever without harm.

Scenes: worked-example. Evidence: The lesson's own limiting-factor rule allows multiple factors to cap rate; the question does not identify which one applies.

### A13 — CORRECT — biology-y11-m2-l11

**Issue:** The potometer limitation is said to affect both readings equally so the comparison holds, without evidence. The text says time is controlled while comparing six-minute and five-minute trials.

**Required change:** Rate normalisation permits unequal observation times; say that explicitly. Water storage/use, leaks and changing conditions may bias treatments differently, so do not assert cancellation.

Scenes: worked-example, concept-fair-test. Evidence: Internal comparison: 18 mm/6 min and 40 mm/5 min.

### A14 — HOLD — biology-y11-m2-l15

**Issue:** Two isolated blood samples, low in oxygen and high/low in urea, are treated as uniquely identifying liver and kidney. Concentrations alone without paired entering/leaving samples or context do not establish the organs.

**Required change:** Supply paired arterial/venous changes through specified candidate organs, with other variables controlled. Ask about the change in urea rather than one absolute concentration.

Scenes: quick-check. Evidence: Underdetermined question: baseline urea, renal status, circulation location and comparative samples are unspecified.

### A15 — CORRECT — biology-y11-m3-l03

**Issue:** The antibiotic is said not to cause any mutation. This overstates the useful principle that mutations are not directed toward the organism's needs.

**Required change:** Say selection favours resistance variants; mutations are not purposeful. Some antibiotic exposures can increase mutation rates, and resistance can also spread by horizontal gene transfer.

Scenes: concept-chemicals. [Evidence](https://www.nature.com/articles/ncomms2607).

### A16 — HOLD — biology-y11-m3-l05

**Issue:** Dating a volcano and evidence of prior occupation are presented as proving continuous accurate oral transmission for tens of thousands of years. The original researchers frame this as a possibility, conditional on the traditions referring to those eruptions.

**Required change:** Preserve the value of Cultural Knowledge and the independently dated evidence, but present the continuity inference as a supported possibility, not an independently established fact. Attach primary/community source attribution to named traditions.

Scenes: concept-tested. [Evidence](https://pursuit.unimelb.edu.au/articles/victoria-s-volcanic-history-confirms-the-state-s-aboriginal-inhabitation-before-34-000-years).

### A17 — REVIEW — biology-y11-m3-l13

**Issue:** Specific Cultural Knowledge claims and named communities have no scene-level source trail. The examples cover Aboriginal Peoples but do not include a distinct Torres Strait Islander example.

**Required change:** Link authoritative community sources and primary supporting material. Consider adding a sourced Torres Strait Islander example for breadth; this is an alignment enhancement, not a claim that every NESA example is compulsory.

Scenes: concept-plants, concept-animals, concept-calendar. [Evidence](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fad715a0de).

### A18 — CORRECT — biology-y11-m3-l23

**Issue:** Incomplete mixing is said always to decrease marked recaptures and overestimate abundance. The direction depends on where/when the second sample is taken.

**Required change:** Explain that incomplete mixing biases the marked fraction either upward or downward. If sampling near release overrepresents marks, abundance is underestimated; underrepresentation reverses that direction.

Scenes: concept-assumptions. Evidence: The lesson's correct N = MC/R formula determines the direction once sampling bias is specified.

### A19 — CORRECT — biology-y11-m3-l24

**Issue:** Predator peaks are said always to lag prey peaks; a lag alone is then used to assert that prey drives predators, not the reverse.

**Required change:** Describe the pattern in the shown data/model, not a universal rule. A lag is consistent with a prey-driven response but does not prove one-way causation; feedback and other factors matter.

Scenes: hook, concept-cycle, worked-example. Evidence: The same lesson later acknowledges food-predation interaction; observed lag alone cannot establish causal direction.

### A20 — REVIEW — biology-y11-m3-l17

**Issue:** A numerical cytochrome-c table is called real without a sequence accession/source. Phylogenetic inference as a whole is said to assume a molecular clock, which is broader than the simple classroom distance ranking.

**Required change:** Source the exact aligned sequences/table or label them illustrative. State the equal-rate assumption for this simplified inference; general phylogenetic methods need not impose a strict molecular clock.

Scenes: concept-tree, worked-example. Evidence: Source/provenance absent from lesson JSON.

### A21 — CORRECT — biology-y11-m3-l21

**Issue:** Diversity is defined only as the number of species, which is species richness; evenness is omitted.

**Required change:** Distinguish richness from diversity including relative abundance/evenness, at an appropriate Year 11 level.

Scenes: concept-measures. [Evidence](https://openstax.org/books/biology-2e/pages/45-6-community-ecology).

### A22 — CORRECT — biology-y11-m1-l01

**Issue:** Lack of eukaryotic membrane-bound organelles is overextended to lack of internal membranes in all prokaryotes.

**Required change:** Retain the nucleus/organelle distinction; allow internal membranes such as cyanobacterial thylakoids, and label chromosome/size comparisons as typical rather than universal.

Scenes: concept-how-we-know. [Evidence](https://openstax.org/books/microbiology/pages/8-6-photosynthesis).

### A23 — CORRECT — biology-y11-m1-l24

**Issue:** Every gamete is said to be unique, and all four products of every meiosis genetically different. These are expected sources of variation, not mathematical guarantees for every meiosis or comparison.

**Required change:** Say meiosis generally produces genetically varied haploid products through these mechanisms; avoid promising every gamete has a unique genotype.

Scenes: concept-combined, worked-example. Evidence: The 2^n combinations calculation counts possible chromosome combinations, not guaranteed distinct outputs of every division.

### A24 — HOLD — biology-y12-m6-l16

**Issue:** The same restriction enzyme is asserted to be the only way to generate ligatable ends. Different enzymes can generate compatible cohesive ends; blunt-end ligation also exists. The quiz does not supply actual cut-end sequences.

**Required change:** Teach compatible ends as the requirement, with use of the same enzyme as a simple method. Give actual incompatible overhangs for the quiz, and avoid claiming all restriction enzymes produce sticky ends.

Scenes: worked-example, misconception, quick-check, summary. [Evidence](https://www.neb.com/en/tools-and-resources/selection-charts/compatible-cohesive-ends-and-generation-of-new-restriction-sites).

### A25 — HOLD — biology-y12-m6-l16

**Issue:** The insulin example cuts the human gene straight from genomic DNA for expression in E. coli, omitting introns and expression design.

**Required change:** Use intron-free cDNA or a synthetic coding sequence with suitable regulatory sequences; distinguish the simplified cloning model from historical production of synthetic A/B-chain genes and later proinsulin methods.

Scenes: worked-example. [Evidence](https://pmc.ncbi.nlm.nih.gov/articles/PMC8152450/).

### A26 — HOLD — chemistry-y12-m7-l21

**Issue:** Any C=C remaining in an addition-polymer repeat unit is called impossible. Addition polymerisation of dienes can retain unsaturation, as in polybutadiene.

**Required change:** Limit the rule to the single vinyl double bond consumed in the displayed monoalkene examples; do not generalise it to all addition polymers.

Scenes: concept-mechanism, misconception, summary. [Evidence](https://openstax.org/books/organic-chemistry/pages/14-6-diene-polymers-natural-and-synthetic-rubbers).

### A27 — HOLD — chemistry-y12-m6-l2

**Issue:** Phenolphthalein at high pH is explicitly said never to return to colourless. Alkaline fading is a documented reaction, with observed colour dependent on conditions and time.

**Required change:** Use a less strongly alkaline comparison, such as pH 10.5, or specify observation time/conditions and explain fading. Remove the universal denial.

Scenes: quick-check. [Evidence](https://pubs.acs.org/doi/10.1021/ed066p725).

### A28 — REVIEW — biology-y11-m1-l15, biology-y11-m1-l16, biology-y11-m1-l17

**Issue:** Specificity is repeatedly reduced to exactly one substrate, and liver/potato catalase is given a fixed 37°C optimum without source or method dependence.

**Required change:** Explain specificity for particular substrates/reaction types; label the enzyme-temperature graph as illustrative and investigate the actual optimum for the chosen enzyme preparation.

Scenes: concept-what, concept-lock-key, concept-fair-test. [Evidence](https://openstax.org/books/biology-2e/pages/6-5-enzymes).

## Numerical and teaching-quality checks

The inspected Biology examples correctly calculate cube SA:V ratios (6:1, 3:1, 2:1), a 30 mm image at ×100 as 300 µm, 20 hydrogen bonds for the stated eight-base-pair sequence, 2³ = 8 chromosome combinations, 40 × 50 / 8 = 250 in mark–recapture, 45 × 60 / 15 = 180, 30 × 40 / 6 = 200, 24% of 4000 m² as 960 m², and the stated 6%/30% leaf mass losses. These spot checks do not certify every numerical claim in the catalogue. Correct arithmetic does not rescue an underdetermined question or invalid inference (A12, A14, A18, A19).

The 75 Biology Year 11 scripts run about 5.3–7.4 minutes from current scene durations, median 6.2 minutes. Their explanations generally follow a clear structure with examples, a misconception and a quick check. However, many assessments reveal answers in the same narration scene after saying “pause”. That works if students manually pause; do not count it as a measured thinking interval without checking the actual timing.

None of the 308 lesson JSONs contains a URL. Sources may exist elsewhere in the repository, but the scripts do not provide a direct claim-to-source trail. Attach primary/community sources to named experiments, dates, historical statistics and exact data tables. Label model data on screen and in narration. Mark allocations and phrases such as “full marks” must be identified as original practice guidance unless tied to a published question and marking scheme; they are not guaranteed NESA outcomes.

The earlier Chemistry M5/M6 review and proposed corrections in PR #36 remain separate evidence. It corrected the small-x criterion/example, unsupported combined Haber-direction claim, nitric-acid metal example and overgeneralised neutralisation-enthalpy/Ka inference. This pass additionally identifies A27 in a different scene of the already edited indicators lesson, so PR #36 alone does not give that lesson content clearance.

## Rendering and audio remain unverified

No real audio, image media, or final rendered frames were available in the clone. Browser acquisition failed in the earlier production QA, so no claim of visual readability, correct animation, sound pronunciation or subtitle synchronisation is made. All 308 therefore have `renderSignoff: false` in the ledger. The preflight failure for unavailable media is an environment result, not evidence that files are missing on your production machine.

Year 11 Biology has zero scene audio links. Fix its identified teaching issues before generating ElevenLabs audio. Other lessons can have audio links that point to absent local media; a link is not an auditioned recording. Rewritten narration must invalidate old audio and receive fresh timing/alignment. No audio was generated and no ElevenLabs credits were used for this audit.

Before production rendering: resolve findings for the chosen lesson; verify its cohort/syllabus; check current-hash audio and local images; fit scene durations to actual alignment; inspect the final reveal of every scene at full and phone size; audition equations, units and scientific terms; check exported subtitles. A short QA preview is useful before the full production render.

## Lesson-level Year 11 Biology disposition

Within the stated principal-scene review scope: 10 lessons on hold, 11 needing correction, 4 needing source review, and 50 provisional. The 25 lessons with findings should be resolved or source-reviewed; the other 50 remain provisional and still need media/visual QA.

| Lesson | Title | Content disposition | Findings |
|---|---|---|---|
| biology-y11-m1-l01 | Prokaryotic vs Eukaryotic Cells | CORRECT | A22 |
| biology-y11-m1-l02 | Inside the Eukaryotic Cell | PROVISIONAL | None identified in scope |
| biology-y11-m1-l03 | Plant vs Animal Cells | PROVISIONAL | None identified in scope |
| biology-y11-m1-l04 | Prokaryotic Cell Structures | PROVISIONAL | None identified in scope |
| biology-y11-m1-l05 | Using the Microscope | HOLD | A06 |
| biology-y11-m1-l06 | Microscopy & Scientific Understanding | PROVISIONAL | None identified in scope |
| biology-y11-m1-l07 | The Fluid Mosaic Membrane | CORRECT | A10 |
| biology-y11-m1-l08 | Passive Transport | PROVISIONAL | None identified in scope |
| biology-y11-m1-l09 | Tonicity & Cells | PROVISIONAL | None identified in scope |
| biology-y11-m1-l10 | Active & Bulk Transport | PROVISIONAL | None identified in scope |
| biology-y11-m1-l11 | Exchange & Concentration Gradients | PROVISIONAL | None identified in scope |
| biology-y11-m1-l12 | Raw Materials of the Cell | PROVISIONAL | None identified in scope |
| biology-y11-m1-l13 | Cellular Respiration | PROVISIONAL | None identified in scope |
| biology-y11-m1-l14 | Photosynthesis | PROVISIONAL | None identified in scope |
| biology-y11-m1-l15 | Enzymes: Biological Catalysts | REVIEW | A28 |
| biology-y11-m1-l16 | Enzyme Models | REVIEW | A28 |
| biology-y11-m1-l17 | What Affects Enzyme Activity | CORRECT | A11, A28 |
| biology-y11-m1-l18 | Reading Enzyme Graphs | CORRECT | A11 |
| biology-y11-m1-l19 | The DNA Double Helix | PROVISIONAL | None identified in scope |
| biology-y11-m1-l20 | DNA Replication | PROVISIONAL | None identified in scope |
| biology-y11-m1-l21 | DNA in Prokaryotes vs Eukaryotes | PROVISIONAL | None identified in scope |
| biology-y11-m1-l22 | Somatic vs Gametic Cells | PROVISIONAL | None identified in scope |
| biology-y11-m1-l23 | The Cell Cycle and Mitosis | PROVISIONAL | None identified in scope |
| biology-y11-m1-l24 | Meiosis | CORRECT | A23 |
| biology-y11-m1-l25 | Why Cell Division Matters | PROVISIONAL | None identified in scope |
| biology-y11-m2-l01 | Levels of Cellular Organisation | HOLD | A08 |
| biology-y11-m2-l02 | Surface-Area-to-Volume Ratio | PROVISIONAL | None identified in scope |
| biology-y11-m2-l03 | From Organelles to Systems | CORRECT | A09 |
| biology-y11-m2-l04 | Plant Requirements | PROVISIONAL | None identified in scope |
| biology-y11-m2-l05 | Conditions for Photosynthesis | HOLD | A12 |
| biology-y11-m2-l06 | Changing Conditions on Photosynthesis | PROVISIONAL | None identified in scope |
| biology-y11-m2-l07 | Xylem & Phloem | PROVISIONAL | None identified in scope |
| biology-y11-m2-l08 | Translocation in Phloem | PROVISIONAL | None identified in scope |
| biology-y11-m2-l09 | Cohesion-Tension in Xylem | PROVISIONAL | None identified in scope |
| biology-y11-m2-l10 | Factors Affecting Transpiration | PROVISIONAL | None identified in scope |
| biology-y11-m2-l11 | Measuring Transpiration Rate | CORRECT | A13 |
| biology-y11-m2-l12 | Inside Leaf, Stem & Root | HOLD | A04 |
| biology-y11-m2-l13 | Animal Organ Systems | PROVISIONAL | None identified in scope |
| biology-y11-m2-l14 | Human Digestion | PROVISIONAL | None identified in scope |
| biology-y11-m2-l15 | Blood Through the Organs | HOLD | A14 |
| biology-y11-m2-l16 | Arteries, Capillaries & Veins | PROVISIONAL | None identified in scope |
| biology-y11-m2-l17 | What's in Blood? | PROVISIONAL | None identified in scope |
| biology-y11-m2-l18 | Gas Exchange in the Lungs | PROVISIONAL | None identified in scope |
| biology-y11-m2-l19 | The Nephron | HOLD | A01, A02 |
| biology-y11-m2-l20 | Renal Dialysis | HOLD | A03 |
| biology-y11-m2-l21 | Feedback Systems | PROVISIONAL | None identified in scope |
| biology-y11-m2-l22 | Negative Feedback & Homeostasis | PROVISIONAL | None identified in scope |
| biology-y11-m2-l23 | Hypothalamus, Pituitary & Hormones | PROVISIONAL | None identified in scope |
| biology-y11-m2-l24 | Blood Sugar, Stress & Diabetes | HOLD | A07 |
| biology-y11-m2-l25 | Optimal Range & Tolerance Limits | HOLD | A05 |
| biology-y11-m3-l01 | Natural Selection | PROVISIONAL | None identified in scope |
| biology-y11-m3-l02 | Selective Pressures | PROVISIONAL | None identified in scope |
| biology-y11-m3-l03 | Human-Induced Selective Pressures | CORRECT | A15 |
| biology-y11-m3-l04 | Evolution and Species Diversity | PROVISIONAL | None identified in scope |
| biology-y11-m3-l05 | Australian Megafauna: Aboriginal Evidence | HOLD | A16 |
| biology-y11-m3-l06 | Monotremes and Marsupials | PROVISIONAL | None identified in scope |
| biology-y11-m3-l07 | Modelling Natural Selection | PROVISIONAL | None identified in scope |
| biology-y11-m3-l08 | Convergent and Divergent Evolution | PROVISIONAL | None identified in scope |
| biology-y11-m3-l09 | Structural, Physiological and Behavioural Adaptations | PROVISIONAL | None identified in scope |
| biology-y11-m3-l10 | Water Balance in Plants (Practical) | PROVISIONAL | None identified in scope |
| biology-y11-m3-l11 | Ectotherms and Endotherms | PROVISIONAL | None identified in scope |
| biology-y11-m3-l12 | Water and Salt Balance in Aquatic Animals | PROVISIONAL | None identified in scope |
| biology-y11-m3-l13 | First Nations Use of Plant & Animal Adaptations | REVIEW | A17 |
| biology-y11-m3-l14 | Gradualism vs Punctuated Equilibrium | PROVISIONAL | None identified in scope |
| biology-y11-m3-l15 | Antibiotic & DDT Resistance | PROVISIONAL | None identified in scope |
| biology-y11-m3-l16 | Evidence from Fossils | PROVISIONAL | None identified in scope |
| biology-y11-m3-l17 | Inferring Evolutionary Relationships from Sequences | REVIEW | A20 |
| biology-y11-m3-l18 | Weighing the Evidence for Evolution | PROVISIONAL | None identified in scope |
| biology-y11-m3-l19 | Features of an Ecosystem (Practical) | PROVISIONAL | None identified in scope |
| biology-y11-m3-l20 | Comparing Ecosystems | PROVISIONAL | None identified in scope |
| biology-y11-m3-l21 | What Shapes a Community | CORRECT | A21 |
| biology-y11-m3-l22 | Sampling Techniques: Quadrats & Transects (Practical) | PROVISIONAL | None identified in scope |
| biology-y11-m3-l23 | Mark-Release-Recapture (Practical) | CORRECT | A18 |
| biology-y11-m3-l24 | Relationships Between Organisms | CORRECT | A19 |
| biology-y11-m3-l25 | Carrying Capacity & Data Validity | PROVISIONAL | None identified in scope |

## Audit artefacts

- `content-audit-findings-2026-09-30.json`: 28 evidence-backed findings and requested corrections.
- `content-audit-ledger-2026-09-30.json`: all 308 files, review scope, disposition, script hash, and all 89 official Biology Year 11 content-item mappings. Includes URL/checksum/last-modified provenance for seven live NESA content-page checks.

The audit is a correction queue and evidence record. It does not authorize publication, replace practical learning, or label the unreviewed remainder scientifically cleared.
