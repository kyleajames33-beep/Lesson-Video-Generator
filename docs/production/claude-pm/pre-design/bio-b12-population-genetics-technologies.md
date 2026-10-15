# B12 pre-design: population genetics and technologies

**Site sources:** read-only `C:/Users/kygs/hscscience/subjects/biology/year12/module5/lesson16.sa.html` to `lesson19.sa.html`, plus matching `../site-extracts/bio-m5-l16.md` to `bio-m5-l19.md`. Brief 41's B12 topic spans four site lessons; canonical route `bio-m5-b12` currently means sequencing and profiling only.

## Exact 2017 syllabus wording

From [NESA Biology Stage 6 Syllabus (2017)](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017), Module 5, official DOCX cached at `out/research/continuity-2026-10-08/biology-2017.docx`, paragraphs p1060 to p1073:

> collect, record and present data to represent frequencies of characteristics in a population, in order to identify trends, patterns, relationships and limitations in data, for example:
>
> examining frequency data
>
> analysing single nucleotide polymorphism (SNP)
>
> investigate the use of technologies to determine inheritance patterns in a population using, for example: (ACSBL064, ACSBL085)
>
> DNA sequencing and profiling (ACSBL086)
>
> investigate the use of data analysis from a large-scale collaborative project to identify trends, patterns and relationships,  for example: (ACSBL064, ACSBL073)
>
> the use of population genetics data in conservation management
>
> population genetics studies used to determine the inheritance of a disease or disorder
>
> population genetics relating to human evolution

The two spaces before “for example” in the last parent line are present in the official DOCX extraction.

## Site section order, ideas, questions and memory aids

| Page | Order and core idea | Questions and recall |
| --- | --- | --- |
| L16, frequency and SNP | Tuskegee hook; frequency tables; sample limits; one-base SNP markers; interpret data in four steps; copy notes; independent practice and retrieval. Frequency describes a sample; an allele frequency counts copies out of all copies; one SNP does not prove whole-genome relatedness. | Calculate 20/80; compare 18 attached/42 free versus 30/30; identify a sampling limitation; explain how SNPs help study inheritance. Recall “frequency, SNP, limits.” |
| L17, sequencing and profiling | Jeffreys hook; sequencing base order; profiling variable marker patterns; compare purposes; population applications; choose the tool in four steps; practice and retrieval. | Sort base-order versus marker tasks; explain why sequencing answers a disease-variant question; Compare (6 marks), Assess (6 marks). Recall “sequence = bases; profile = selected markers.” |
| L18, large data | UK Biobank hook; why large data help; conservation; disease studies; human evolution; limits; match applications; Analyse (7 marks) and Explain (5 marks); retrieval. | Analyse sickle-cell inheritance using population frequencies, pedigree, single-base change and malaria; explain why a group trend does not decide one person's outcome. Recall conservation, disease, evolution. |
| L19, prediction | deCODE ethics hook; group predictions; limits for individuals and future populations; Module 5 chain; strong versus overclaim wording; handoff to Module 6; Evaluate (7 marks), Explain (5 marks); retrieval. | Sort evidence-based claims; connect meiosis, mutation, inheritance and population data. Recall “population evidence → population conclusions” and “risk is not destiny.” |

**Site misconceptions:** a small sample difference need not describe a whole species; one SNP proves little alone; a profile is not a whole genome sequence; larger studies do not give certainty; diversity does not guarantee survival; the Human Genome Project did not sequence everyone; a harmful allele need not vanish; a risk variant does not guarantee disease. The site uses Hardy-Weinberg as a null model in L19, with no numeric worked example.

## Number and source check

| Site number | Recheck or correction |
| --- | --- |
| L16: 60 of 100 = 60%; 160 A + 40 a = 200 copies, so a = 0.20; 9% recessive phenotype = 0.09 aa genotype under the stated complete-recessivity assumption; 20/80 = 25%. | Arithmetic passes. In the comparison task, 18/60 = 30% and 30/60 = 50%; use denominators on screen. |
| L17: 5,511 tested; random match 1 in 40 billion; “1986 conviction.” | The page gives no marker frequencies to recompute 1 in 40 billion. Treat it as unverified. [University of Leicester](https://le.ac.uk/news/2016/may/professor-sir-alec-jeffreys-to-be-guest-speaker-at-unique-fundraising-event) places Pitchfork's conviction in **1988**. Site error B3. Its historical RFLP method did not use PCR, contrary to L17's comparison answer (site error B4). |
| L18: UK Biobank 500,000, ages 40–69, 800,000 measured variants, 20 TB, 6,000 papers and 100 loci by 2023; “100 patients find 10% of risk.” | [UK Biobank](https://www.ukbiobank.ac.uk/about-us/who-we-are/) confirms about 500,000, ages 40–69. Its [genetic data page](https://www.ukbiobank.ac.uk/about-our-data/types-of-data/genetic-data/) says **around 850,000 directly measured variants**; 800,000 is an approximation. The 20 TB, 6,000, 100-locus and 100-patient/10% claims are not established by the page's sources. Do not record them until sourced. Commercial researchers can be approved; site error B10. |
| L19: 290,000 Icelanders “enrolled”, 96% of adults; $200 million Roche deal; 70% BRCA1 lifetime risk. | 290,000 was roughly Iceland's whole population, not enrolled participants (site error B2). The $200 million and BRCA1 figure need case-specific sourcing and context before narration. The court story also misstates whose records were transferred (site error B7). No calculation on this page to recompute. |

L16's Belmont principles and origin are wrong (site errors B1, B8 in `../site-corrections.md`). Use “respect for persons, beneficence and justice” if the case stays. The raw site pages were checked for these numbers; the correction register records suggested copy.

## Exam traps, visual material, overlap and decisions

[NESA 2024 Biology feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/biology/2024) asks students to use specific stimulus data, show calculation working and address the question. Thus label **sample versus population**, **individuals versus allele copies**, and **association versus causation**. A match probability is not the probability that a named person is guilty. A pedigree or sequence alone does not justify an entire population claim.

Useful visuals: counted earlobe samples or a defensible alternate trait, chromosome positions with one changed base, short DNA fragments and STR bands, sequencing readout, sample-size comparison, conservation population and a sickle-cell red cell. These need precise coded data diagrams. Existing `public/assets/biology/b4-person-child-v1.png`, `b4-person-adult-v1.png`, `b6a-animal-cell-v1.png` are painted context only; no Brief 39 genetics plates were present at this check. Earlier `../lessons/bio-m5-b04.md` teaches DNA structure, `bio-m5-b05b.md` meiosis and `bio-m5-b06a.md` DNA organisation. Recall those briefly.

**For Claude:** Split this four-lesson source into focused video questions. Which real collaborative dataset can be documented cleanly? Should L19's deCODE story be held until every historical number and ruling is checked? Align B12's brief label with canonical route IDs before authoring.
