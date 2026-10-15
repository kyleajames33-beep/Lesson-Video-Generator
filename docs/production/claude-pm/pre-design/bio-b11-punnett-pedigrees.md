# B11 pre-design: Punnett squares and pedigrees

**Site source:** read-only `C:/Users/kygs/hscscience/subjects/biology/year12/module5/lesson14.sa.html`, with the ABO extension in `lesson15.sa.html`; extracts `../site-extracts/bio-m5-l14.md` and `bio-m5-l15.md`. The B11 filename in Brief 41 describes a topic, not the canonical route ID: route `bio-m5-b11` currently means population frequencies. Claude needs to settle the eventual video ID.

## Exact 2017 syllabus wording

From [NESA Biology Stage 6 Syllabus (2017)](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017), Module 5, Genetic Variation, official DOCX cached at `out/research/continuity-2026-10-08/biology-2017.docx`, paragraphs p1057 to p1059:

> model the formation of new combinations of genotypes produced during meiosis, including but not limited to:
>
> interpreting examples of autosomal, sex-linkage, co-dominance, incomplete dominance and multiple alleles (ACSBL085)
>
> constructing and interpreting information and data from pedigrees and Punnett squares

## Site order and content

L14: hook on Garrod's alkaptonuria families; orient and practise; Punnett square as a probability model; genotype versus phenotype probability and independent births; autosomal dominant versus recessive; X-linked recessive, carrier mother and affected father; pedigree clues; four-step method (define symbols, infer parents, list gametes, fill square); interactive cross simulator; haemophilia reasoning; copy notes; multiple choice, true/false and short answers; retrieve and reflect. L15 extends the cross method to incomplete dominance, codominance and ABO, then uses phenotype ratios, flower and blood-group crosses, practice and retrieval.

**Worked cases and number check.** Aa × Aa gives AA:Aa:aa = 1:2:1, dominant:recessive phenotype = 3:1. Each child has 1/4 chance of aa. Exactly one aa in four births is `4 × (1/4) × (3/4)^3 = 27/64 = 42.1875%`, so the simulator's “about 42%” is sound; it does not mean 42% of children. Aa × aa gives 50% Aa and 50% aa. XᴴXʰ × XᴴY gives 25% affected son, 25% unaffected son, 25% carrier daughter and 25% unaffected non-carrier daughter among all births, assuming equal sex probabilities. The affected-son chance is 50% **given a son**. With Aa × Aa parents, an unaffected sibling of an aa child has `P(Aa | unaffected) = (1/2)/(3/4) = 2/3`, not 1/2. In L15, CᴿCᵂ × CᴿCᵂ yields 1 red:2 pink:1 white; Iᴬi × Iᴮi yields AB, A, B and O, each 1/4. No empirical constant is needed.

**Named misconceptions and practice:** dominant does not mean common; a 3:1 ratio is an expected probability pattern, not a guaranteed four-child family; a sex-linked trait does not come only from mothers; pink flowers do not permanently blend alleles. Tasks ask students to infer inheritance from a pedigree (6 marks), explain why real family ratios differ (5), identify offspring from the haemophilia cross, work through Aa × aa, and list the ABO cross outcomes. Memory cues: “define symbols → infer parents → list gametes → square” and “probability per birth, not a fixed family outcome.”

## Findings and exam traps

| Site text or common answer | Check and action |
| --- | --- |
| L14 Garrod hook says he had no knowledge of chromosomes in 1902. | Too absolute; chromosome theory was emerging in 1902 to 1903. Keep the inheritance evidence without the claim unless sourced. See `../site-corrections.md`, L14 unclear item. |
| L15 credits Landsteiner with all four ABO groups by 1902. | Confirmed error B9 in `../site-corrections.md`: Decastello and Sturli reported AB. Use the corrected attribution. |
| “Recessive” alone identifies a pedigree mode. | State **autosomal recessive** or **X-linked recessive** and cite specific people in the pedigree. [NESA 2025 Biology Q31 feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/biology/2025) asks for named individuals, correct alleles and a supporting square. |
| 1/4 equals 33%; vague allele letters. | [NESA 2024 Biology Q28 feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/biology/2024) flags inconsistent fractions and percentages; 2025 Q31 flags hard-to-distinguish capital and lower-case allele letters. |

## Objects, overlap, and Claude decisions

Show actual parents/offspring for per-child probability, a chromosome X/Y pair, an editable square and a legible three-generation pedigree. A haemophilia family or ABO blood samples can ground the model. Existing `public/assets/biology/b5b-parents-v1.png` and `b5b-brothers-v1.png` are painted people, not a pedigree; no Brief 39 genetics plates were present at this check. Construct squares and pedigrees as code so symbols stay precise. Earlier `../lessons/bio-m5-b05b.md` explains meiotic variation and `bio-m5-b04.md` explains DNA inheritance. Recall these; focus here on predicting and reading offspring patterns.

**For Claude:** Which one learner question owns the pedigree inference, and which owns the square? Will B10 already teach the full Aa and ABO crosses? If so, B11 should use an unfamiliar pedigree and conditional probability instead of repeating them. Resolve the brief filename versus route ID before design.
