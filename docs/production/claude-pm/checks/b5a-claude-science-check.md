# B5a science check (Claude, errors only): mitosis, revision 3

Format: `codex-prompts/03-fact-check-template.md`. Checked the narration and the 27 numbered claims in `../lessons/bio-m5-b05a.md` against web sources (12 Oct). Source review only: no stills, no audio. No em dashes found in the design.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | 2a: "So every kind appears twice ... called a homologous pair" (and the screen tag "in males, X and Y count as the 23rd pair") | In a male, X and Y are not a matching pair: they share only the pseudoautosomal end regions, so "every kind appears twice" is false for the 23rd pair and "count as" glosses over it. | Tag: "in males, X and Y are different and only partly match (23rd pair)". Narration can stay. |
| 2 | science | 2c: "each new cell would get only half of them, and half the instructions" | A cell holding one of each kind (one set) has every gene, as a gamete does (2b); the problem is that a body cell needs both sets, and a random half of a diploid cell's chromosomes need not even be one of each kind. "Half the instructions" is true only as "half the DNA". | "each new cell would get only half of them, and a skin cell needs both sets." |
| 3 | science | 4a: "the nuclear envelope ... breaks down" and notes "the nuclear envelope breaks down" | True for animal and plant cells; budding yeast has closed mitosis and its envelope stays intact, and the lesson names yeast as a mitosis example in 6c. | Notes: "In animal and plant cells the nuclear envelope breaks down." Narration unchanged is acceptable. |
| 4 | screen | Hook visual: "cells at the edges of the gap pinch and divide one at a time and the gap closes" | Epithelial wound closure starts with basal keratinocytes migrating into the gap as a sheet, with division behind; showing closure by division alone is wrong as a mechanism (narration only says "new skin has filled the gap", which is fine). | Show edge cells sliding in as well as dividing, or tag "cells move in and divide". |
| 5 | copy | Review notes, "Animation simplification": "interphase as about three quarters of the ring" | Contradicts the revised design, which draws interphase at about nine tenths. | Change to "about nine tenths". |

Science: 3. Syllabus: 0. Screen: 1. Copy: 1. Findings: 5.

## UNVERIFIED

- U1 (4a2, claim 9): "a fibre from each end ... one fibre to each chromatid". Each kinetochore binds a bundle of microtubules (about 20 in human cells; one in budding yeast). I did not retrieve a primary source for the number. A simplification, not an error, if "a fibre" is read as a bundle.
- U2 (6b, claim 16): "Checks catch many of these, but not all". The qualitative claim is supported (checkpoint delay, mitotic slippage, mitotic nondisjunction leading to aneuploid daughters), but no frequency source was retrieved.
- U3 (claim 8): the reason "easier to move without tangling". Supported by the Lodish text (compaction avoids breakage of long intertwined DNA; topoisomerase II and condensin untangle sister chromatids); I read the search summary, not the page.
- U4 (claims 6, 10): NHGRI chromatid and centromere definitions were seen only on mirrors, not on genome.gov. Same wording as standard textbooks.
- U5 (claim 26): Amoeba proteus mitosis is supported by a 1960 electron microscopy paper and a lecture handout, but the handout says the envelope stays intact while the paper says the inner layer disappears in prophase. Mitosis itself is not in doubt.

## Claim by claim (numbers refer to the design list)

| # | Result |
| --- | --- |
| 1 | Human 46 in 23 pairs, gamete 23: correct. X and Y exception: finding 1. |
| 2 | Chromosome as DNA wound with proteins: correct (histones). |
| 3 | Homologous pair, same genes in the same order, possibly different alleles: correct. |
| 4 | Diploid two sets, haploid one set: correct. |
| 5 | Cannot cut a chromosome in half: acceptable as a cause; wording issue in finding 2. |
| 6 | Sister chromatids joined at the centromere, still one chromosome: correct. |
| 7 | Interphase not a rest, S phase copies DNA, mitosis much shorter, no copying in mitosis: correct (interphase about 95 percent of a roughly 24 hour human culture cycle; mitosis about 1 hour). |
| 8 | Prophase: condensation, envelope breakdown, spindle formation: correct (finding 3 for yeast, U3). |
| 9 | Metaphase: attachment at the centromere via the kinetochore, alignment on its own, no pairing in mitosis: correct (U1). |
| 10 | Anaphase: centromeres split, sister chromatids pulled apart, each called a chromosome, double the count (92): correct. |
| 11 | Telophase uncoiling and new envelopes; cytokinesis often starts during anaphase or telophase; animal furrow by actin ring; plant cell plate growing outward from the centre: correct. |
| 12 | Tracker figures 4, 4 and 8 chromatids, 8, 4; 46, 46 and 92, 92, 46: arithmetic correct. |
| 13 | Each daughter gets one copy of each chromosome, same number and information barring errors: correct. |
| 14 | Spindle checkpoint delays anaphase until kinetochores are attached; cells can slip through: correct as phrased ("checks ... before anaphase starts"). |
| 15 | Copying mistake is a mutation passed to descendants: correct. |
| 16 | Mitotic nondisjunction gives one extra and one short; 3 and 5 in the model cell: correct (U2). |
| 17 | Uses; bacteria divide by binary fission with no mitosis (FtsZ ring, no spindle): correct. |
| 18 | Drosophila melanogaster 2n = 8, four pairs: correct. |
| 19 | Item one: 8 chromosomes and 16 chromatids, 8 per new cell: correct. |
| 20 | Item two: six X shapes lined up with fibres from both ends is metaphase, 6 chromosomes, 12 chromatids: correct. |
| 21 | IPMAT order I, P, M, A, T: correct; interphase is not part of mitosis, as spoken. |
| 22 | Grazes close within days: correct (about 3 to 5 days for superficial wounds); mechanism: finding 4. |
| 23 | Cut chromosome halves carry about half the instructions: acceptable (finding 2). |
| 24 | One DNA molecule before copying, two after, still one chromosome: correct. |
| 25 | A copying error sits on one new strand, so it reaches one daughter and its descendants: correct. |
| 26 | Amoeba and budding yeast divide the nucleus by mitosis: correct (U5; yeast is closed mitosis). |
| 27 | Interphase is the large majority of the cycle (drawn at nine tenths): correct. |

## Sources

- Fruit fly 2n = 8, four pairs: [Pearson Genetics, Drosophila 2n = 8](https://pearson.com/channels/genetics/textbook-solutions/sanders-3rd-edition-9780135564172/ch-3-cell-division-and-chromosome-heredity/drosophila-has-a-diploid-chromosome-number-of-2n-8-which-includes-one-pair-of-se-2); [Univ. catholique de Louvain genetics PDF](https://sites.uclouvain.be/gena/genedactic/NewGenedactic/1MediaCommuns/document%20pdf/Carte%20genetique.pdf)
- X and Y pseudoautosomal regions: [Whitehead Institute](https://wi.mit.edu/news/establishing-boundaries-genetic-kind); [NIH Record](https://nihrecord.nih.gov/2019/05/31/sex-chromosomes-can-trade-dna-two-regions)
- Chromosome condensation: [Lodish, Chromosome Condensation Facilitates Chromosome Segregation](https://digfir-published.macmillanusa.com/lodish8e/lodish8e_ch19_34.html)
- Spindle checkpoint and slippage: [PMC10109492](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10109492/); [PMC2946930](https://pmc.ncbi.nlm.nih.gov/articles/PMC2946930)
- Yeast closed mitosis: [PMC3810332](https://pmc.ncbi.nlm.nih.gov/articles/PMC3810332)
- Cytokinesis: [Lumen Learning, Cytokinesis](https://courses.lumenlearning.com/wm-biology1/chapter/reading-cytokenesis); [LibreTexts 8.08](https://bio.libretexts.org/Courses/Lumen_Learning/Biology_for_Non_Majors_I_(Lumen)/08%3A_Cell_Division/8.08%3A_Cytokinesis)
- Interphase share and S phase: [JoVE, Interphase](https://www.jove.com/v/13407)
- Amoeba mitosis: [J Cell Biol 1960, Electron microscopic studies of mitosis in amebae](https://rupress.org/jcb/article/8/1/207/10429/ELECTRON-MICROSCOPIC-STUDIES-OF-MITOSIS-IN-AMEBAE)
- Bacterial fission: [Saylor, prokaryotic cell division](https://rachel.core2learn.org/modules/en-learnsaylor/course/prokaryoticcelldivision.pdf)
- Wound closure: [J Cell Biol 1968, Human wound repair I](https://rupress.org/jcb/article/39/1/135/17248/HUMAN-WOUND-REPAIR-I-Epidermal-Regeneration)
- Nondisjunction: [encyclopedia.pub, checkpoint and nondisjunction](https://encyclopedia.pub/entry/history/compare_revision/77516)
- Centromere and chromatid definitions: [Wikipedia, Centromere](https://en.wikipedia.org/wiki/Centromere)

Total: 5 findings (3 science, 1 screen, 1 copy), 5 UNVERIFIED.

## Resolution (Claude science check)

Applied to `../lessons/bio-m5-b05a.md` (Revision 4, 13 Oct).

| # | Resolution |
| --- | --- |
| 1 | 2a narration now says "apart from X and Y in males" aloud, and the screen tag reads "in males, X and Y are different and only partly match (23rd pair)". Author note in claim 1 updated. |
| 2 | 2c now says "each new cell would get only half of them, and a skin cell needs both sets"; the ghost-cell tag reads "only half the chromosomes: a skin cell needs both sets". |
| 3 | The notes say "the nuclear envelope breaks down (animal and plant cells)" and the 4a visual adds a small grey tag "animal and plant cells". Narration unchanged, so the yeast example in 6c is not contradicted. Claim 8 updated. |
| 4 | Hook visual: edge cells slide in as a sheet while cells behind them divide, with the tag "cells move in and divide". Narration unchanged. |
| 5 | The animation-simplification note now says interphase is drawn at about nine tenths of the ring. |
| U1 | 4a2 now says "fibres from the two ends attach ... one end to each chromatid"; no fibre count is spoken or drawn as a number. Tag: "fibres from opposite ends, one end to each chromatid". |
| U2 | Kept: "Checks catch many of these, but not all" (qualitative, supported). |
| U3 | "Without tangling" dropped; 4a says "easier to move". |
| U4, U5 | No change: wording matches standard textbooks; amoeba mitosis is not in doubt. The amoeba envelope detail is not stated in the learner copy. |

## Codex check resolution (13 Oct)

Applied to `../lessons/bio-m5-b05a.md` (Revision 5, "Codex fact check resolved; ready to voice").

| # | Finding | Decision | New wording |
| --- | --- | --- | --- |
| 1 | Scene 6b non-disjunction drawing showed one unopened X (one centromere) going right, so the stated counting rule gives 4, not 5 | Show two separate daughter chromosomes, each with its own centromere, moving to the same pole: five on the right, three on the left, counting rule kept (one centromere, one chromosome). Because the visual now shows the chromatids already separated, the narration and key note no longer say "fail to separate". | Scene 6b: "Rarely, the two chromatids of one chromosome both move to the same end of the cell, so one new cell gets an extra chromosome and the other is one short." Key note: "Rarely both sister chromatids move to the same end of the cell: one cell gains a chromosome, one loses one." Visual: the long plum X splits at its centromere into two daughter chromosomes, each with its own centromere, both travel right; tags "3 chromosomes" (left) and "5 chromosomes" (right). |
