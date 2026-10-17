# BP02 science check: model meiosis, fertilisation and mutation (bio-m5-p02)

Scope: every scientific statement, number and quote in `../lessons/bio-m5-p02.md` (Revision 1, 18 Oct), checked against `docs/production/programme/syllabus/bio-2017-y12.json`, the site extracts `../site-extracts/bio-m5-l08.md` and `l13.md`, B5b and B8, and the sources below. Numbers recomputed by script. Source review only; no stills or audio. U+2014 searched in the design and in this file: none.

## Recomputed numbers

| Item | Design | Recomputed | Result |
| --- | --- | --- | --- |
| Chance of no wrinkled-wrinkled offspring in 4 draws (Rr x Rr) | (3/4)^4 = 0.316, "about one time in three" | P(not rr) = 3/4 each, independent draws: 81/256 = 0.3164 | correct |
| Expected for 16 fertilisations | 4, 8, 4 (1 : 2 : 1) | 16 x 1/4, 16 x 1/2, 16 x 1/4 | correct |
| Example tally | 3, 9, 4 (sum 16) | chi-squared 0.25 + 0.125 + 0 = 0.375 (2 df, p about 0.83) | correct, well within chance (author note only) |
| Pooled example | 41, 79, 40 of 160; expected 40, 80, 40 | sum 160; chi-squared 0.0375 | correct |
| Gamete types, no crossing over | P T R, P T r, p t R, p t r | long pair in coupling (P with T on plum, p with t on teal), short pair independent: 2 x 2 = 4 | correct |
| Extra types with one crossover between P and T | P t R, P t r, p T R, p T r | recombinant chromatids P t and p T, each with R or r | correct |
| Scene 5 rings | plum-top teal-bottom = P with t; teal-top plum-bottom = p with T | as stated | correct |
| Scene 8 zygote | P T r + p t R = Pp Tt Rr | as stated | correct |
| Humans | 2^23 = 8,388,608, "over eight million" | 2^23 = 8,388,608 | correct; matches site L08 and L13 |
| Model chromosome numbers | 2n = 4, n = 2; four gametes each with one long and one short | as stated | correct; site L13 Activity 3 |

Assumptions behind 1 : 2 : 1 (author note d) are complete: each parent's two gamete types equally frequent (true here: every meiosis of an Rr cell gives two R and two r gametes), random fertilisation, equal survival. The independence of the four draws in the attempt also needs sampling with replacement, which scene 8 provides ("return the cards").

## Meiosis steps the model shows

| Model step | Real stage | Check |
| --- | --- | --- |
| Step 2: copy each chain, join with a centromere piece; still four chromosomes | DNA replication in S phase of interphase, before meiosis; count centromeres | correct (site L07, L08; B5a) |
| Step 3: lay homologues side by side; swap end segments between one plum and one teal chromatid at matching points | Prophase I: synapsis and crossing over between **non-sister** chromatids at corresponding positions | correct (site L08 key idea 3 and misconception "regulated exchange between non-sister chromatids"); the stage is not named in learner copy (learning review finding 4) |
| Step 4: pairs on the equator, coin per pair | Metaphase I: independent orientation of each homologous pair | correct; this is where independent assortment appears (site L08, L13) |
| Pull partners apart, centromeres stay joined | Anaphase I and telophase I: homologues separate | correct (B5b) |
| Pull sister chromatids apart in each loop | Meiosis II: sister chromatids separate | correct |
| Four loops, n = 2 | Four haploid cells | correct |
| Random draw of one gamete from each parent | Random fertilisation restores 2n | correct |

**Model-result conflict (science side of learning-review finding 2).** "They're less common, because a crossover between those two genes happens in only some cells" is true of real cells. But if the student swaps segments in every run, as scenes 5 and 7 instruct, then every meiosis yields two recombinant and two parental chromatids, so recombinant gametes are 50 per cent of the total and each of the eight types is equally common (1/8). The model would then contradict the stated result. The die rule in the learning review (cross over on a six) makes recombinants about 1 in 12 of gametes, which matches the claim. Recombinant frequency can never exceed 50 per cent, so "less common" needs crossovers in fewer than all meioses.

## Facts checked

| # | Statement | Verdict and source |
| --- | --- | --- |
| 1 | Homologues carry the same genes in the same places | Correct; site L08 key term |
| 2 | Crossing over makes new combinations, not new alleles; mutation alone makes new alleles | Correct; site L08 and L13 misconceptions; B8 |
| 3 | "in real cells its position varies, and there can be several" | Correct. Crossover number and position vary; at least one per homologous pair is usual (obligate crossover). Cooper, *The Cell*, "Meiosis and Fertilization": https://www.ncbi.nlm.nih.gov/books/NBK9901/ |
| 4 | "That models a copying error in a cell that makes gametes" (Open decision 1) | Acceptable. Copying errors are one source; mutagens are another. Inherited only if in the germ line (B8's "a cell that makes eggs or sperm"). Wording confirmed; optional broader wording in finding 2. |
| 5 | "real mutations are rare and random, and many have no effect" | Correct at this level: per-gene rates are low, mutations are random with respect to need, and many are neutral. |
| 6 | "The coin makes each pair's direction random, and independent of the other pair" | Correct for different chromosome pairs (author note i). The two long-pair genes are linked; only crossing over separates them, as the design says. |
| 7 | Mutation step and amber colour | Consistent with B8's rule (amber only for a new allele) |
| 8 | Memory aid "Colour, copy, cross, coin, combine, change" | Does not contradict the Module 5 bank's B8 aid (three reshufflers, only mutation makes new); it is a method sequence and its order (cross before coin) matches prophase I before metaphase I. |
| 9 | "Crossing over and fertilisation only reshuffle alleles" (scene 9) | True but incomplete (independent assortment also reshuffles); see finding 1. |

## Dotpoint quote against `bio-2017-y12.json`

B5-IQ4-01: "conduct practical investigations to predict variations in the genotype of offspring by modelling meiosis, including the crossing over of homologous chromosomes, fertilisation and mutations (ACSBL084)". **Word for word: match** (YouTube metadata and Scope line).

Site discrepancy (for the root, not this design): the extract `bio-m5-l13.md` prints the same text with "(ACSBL078)". The syllabus file and NSW school documents use ACSBL084 (for example https://orange-h.schools.nsw.gov.au/content/dam/doe/sws/schools/o/orange-h/2023-assessment-tasks/HSC_Biology_Assessment_Task_1_Notification_2023_.pdf). The design is right to use ACSBL084; the site lesson 13 code looks wrong and could be added to the site fixes list.

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) |
| --- | --- | --- | --- | --- |
| 1 | minor | "Crossing over and fertilisation only reshuffle alleles." | Omits independent assortment. | "Crossing over, assortment and fertilisation only reshuffle alleles." |
| 2 | minor (optional) | "That models a copying error in a cell that makes gametes." | Correct, but copying errors are only one cause. | "That models a DNA change in a cell that makes gametes." |
| 3 | should fix | Scene 7: "They're less common, because a crossover between those two genes happens in only some cells." with crossing over done in every run (scenes 5, 7) | The model as instructed gives recombinants at 50 per cent, so the stated result is not what the model produces. | Apply learning-review finding 2 (die: cross over only on a six), then "They're less common because, like your die, a crossover between those two genes happens in only some cells." |

## Em dashes

None in the design file (searched U+2014). None in the replacement texts.

## Verdict

**ready to voice after fixes** (science side: finding 3 must be applied; all numbers verified).

## Resolution (18 Oct, Claude)

Every blocker and should-fix finding above was applied in Revision 2 of `lessons/bio-m5-p02.md` (see its "Revision 2 changes" line), with the replacement wording proposed here or an equivalent of the same length. Minor findings were applied where they helped; any not applied are recorded in the design. Exact voiced preview, voiced learning review and human listening are still pending.
