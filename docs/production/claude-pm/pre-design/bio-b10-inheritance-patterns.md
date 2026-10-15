# B10 pre-design pack: inheritance patterns

Sources: read-only raw site [lesson 14](C:/Users/kygs/hscscience/subjects/biology/year12/module5/lesson14.sa.html) and [lesson 15](C:/Users/kygs/hscscience/subjects/biology/year12/module5/lesson15.sa.html), [extracts](../site-extracts/bio-m5-l14.md) and [L15](../site-extracts/bio-m5-l15.md), [NSW Biology Stage 6 Syllabus (2017), p 49](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017).

## Exact syllabus

> model the formation of new combinations of genotypes produced during meiosis, including but not limited to:
> - interpreting examples of autosomal, sex-linkage, co-dominance, incomplete dominance and multiple alleles (ACSBL085)
> - constructing and interpreting information and data from pedigrees and Punnett squares

## Site sequence and material

L14: Punnett squares as a probability model; autosomal dominant versus recessive; sex-linked inheritance; reading a pedigree; four-step solve method; Build the Cross; Haemophilia Reasoning; independent practice; Retrieve and reflect. L15: three dominance relationships; incomplete dominance; co-dominance and ABO; multiple alleles; read the ratio; Flower Colour Cross; ABO Reasoning; independent practice; Retrieve and reflect. Both begin with orientation and worksheet links. B10 should own the five pattern types. The separate B11 pack will own full Punnett and pedigree procedure, despite the pages interleaving them.

- Autosomal dominance describes expression in heterozygotes, not how common an allele is. Two carriers `Aa × Aa` give `AA, Aa, Aa, aa`: genotype 1:2:1 and complete-dominance phenotype 3:1. `Aa × aa` gives half `Aa`, half `aa`. Each birth is independent. Autosomal recessive traits may appear in a child of two unaffected carriers. An X-linked recessive allele on a boy's sole X is expressed. A father gives X to daughters and Y to sons.
- Carrier mother `XᴴXʰ` and unaffected father `XᴴY`: four equally probable outcomes are `XᴴXᴴ`, `XᴴXʰ`, `XᴴY`, `XʰY`. An affected son is 1/4 of all children or 1/2 of sons; a carrier daughter is 1/4 of all children or 1/2 of daughters. The L14 1,000-family simulator asks for exactly one recessive child in a family of four when each child has chance 1/4: `4 × (1/4) × (3/4)^3 = 27/64 = 42.1875%`, matching the page's about 42%, not 25%.
- Incomplete dominance: pink `CᴿCᵂ × CᴿCᵂ` gives red, pink, pink, white, with genotype and phenotype both 1:2:1. Alleles have not blended permanently. Co-dominance: both products show, as A and B antigens in `IᴬIᴮ`. ABO is a three-allele population system (`Iᴬ`, `Iᴮ`, `i`); one person still has two. `Iᴬi × Iᴮi` produces `IᴬIᴮ`, `Iᴬi`, `Iᴮi`, `ii`, each 1/4, hence AB, A, B, O each 1/4. L15's X-linked frequency aside says allele frequency 1/100 gives male frequency about 1/100 and female about 1/10,000; `(.01)^2=.0001` checks under random mating and the simple recessive model.
- Misconceptions: dominant means common; a 25% chance forces one in four siblings to be affected; a sex-linked trait comes only from the mother; incomplete and co-dominance are equivalent; intermediate appearance means allele blending; every monohybrid cross has a 3:1 phenotype ratio. Questions: tall pea heterozygote cross; haemophilia inheritance; interpret an autosomal recessive pedigree (6 marks); explain why observed family ratios vary (5 marks); pink-flower cross; ABO cross; explain male excess in X-linked recessive conditions (5 marks); plus MC, true/false and short answers. Retrieval cues: dominant versus common, autosomal versus sex linked, probability, both products versus intermediate, multiple alleles and ratios. No named mnemonic; the page uses these explicit contrasts.

## Site corrections and exam traps

The crosses and probabilities above check. The L15 hook and main text credit Landsteiner with discovering AB in 1902; `site-corrections.md` B9 identifies Decastello and Sturli as its discoverers. The same hook says about 50% of pre-typing transfusions were fatal without adequate evidence. Drop that number. L14's Garrod claim that he knew nothing of chromosomes is unsafe; chromosome theories were emerging at that time. [NESA 2023 Q25(a) feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/biology/2023) names failure to test all possible pedigree genotypes and confusion between autosomal/sex linked and dominant/recessive. [NESA 2024 feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/biology/2024) warns that equivalent probability forms must agree, for example 1/4 is 25%, not 33%.

Real objects: pea plants and seeds, snapdragon red/white/pink flowers, red/white/roan cattle, red/white-eyed fruit flies, blood typing tile and red cells. Brief 39 requests every one of those painted plates, but no `m5x-` file existed in `public/assets/biology` at this check. Existing strawberry flower plates can suggest style only; they are not snapdragons. Brief 38 is chemistry only. Draw Punnett grids, pedigrees, chromosomes, allele labels and antigens in code, with plates as organism anchors. B5b already teaches homologues, segregation and allele combinations; recall these. B1 introduces allele and inherited variation. B9 gives genotype and phenotype meanings. B11 will develop the cross and pedigree method.

## Questions for Claude

- Does B10 cover all five patterns in one focused video, or split Mendelian and non-Mendelian examples as the site does?
- Which organism anchors each pattern? The site uses peas, snapdragons and ABO; brief 39 also requests cattle and fruit flies.
- The canonical route IDs and Brief 41's topic labels differ. Confirm B10/B11 boundaries before design; do not use ID alone to infer lesson ownership.
