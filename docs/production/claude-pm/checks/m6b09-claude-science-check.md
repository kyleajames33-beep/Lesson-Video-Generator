# m6b09 science check (Claude): what counts as biotechnology, and what does each kind change?

Checked on 20 October 2026 by an independent reviewer who did not author the design. Input: `../lessons/bio-m6-b09.md` (Revision 1). Method: every science claim, date, named case and memory aid was checked against standard texts (Campbell Biology; OpenStax Biology 2e, 17.1 Biotechnology and 7.5 Metabolism without oxygen) and the primary or secondary sources listed below. Sources fetched this session are marked (fetched); the others are standard references cited from the literature and left for the Codex error check to open. The syllabus wording was compared character for character against the 2017 ledger `docs/production/programme/syllabus/bio-2017-y12.json`. Absolute words in the narration ("always", "never", "nothing", "only", "all", "exactly", "at all") were searched and each was checked. No renders and no audio. U+2014 searched in the design: none found; none are used here.

## Dotpoint check

The ledger entries (Module 6, p 52) read: B6-IQ2-01 "investigate the uses and applications of biotechnology (past, present and future), including: (ACSBL087)", inquiry question "How do genetic techniques affect Earth’s biodiversity?"; B6-IQ3-01 "investigate the uses and advantages of current genetic technologies that induce genetic change", inquiry question "Does artificial manipulation of DNA have the potential to change populations forever?". **The design's Syllabus line and the YouTube draft match both exactly**, and both inquiry questions match. One correction to the design's own note: the ledger renders the apostrophe in "Earth's" as a curly apostrophe (U+2019), not as a replacement character; the wording is the same. The ledger's source is the official 2017 syllabus document (nsw.gov.au, biology-stage-6-syllabus-2017.docx). The four B6-IQ2-01 sub-points are correctly left to b10 to b13.

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) | Sources |
| --- | --- | --- | --- | --- | --- |
| 1 | minor | Scene 2: "The yeast's DNA isn't changed at all." | True of the baking process, but absolute: baker's yeast strains are themselves domesticated and selected, so a student could later meet "yeast strains are bred" as a contradiction. The claim needed is that fermentation does not change DNA. | "Making bread doesn't change the yeast's DNA." | OpenStax 2e 7.5; Gallone et al., Cell 2016;166:1397 (domestication of industrial yeasts) |
| 2 | minor | Scene 4: "It's slow, and it only works with variation the sheep already have." | New mutations do arise in a flock and can then be selected, so "only ... already have" is slightly absolute. The point is that breeding creates no allele. | "It's slow, and it's limited to variation that already exists in the flock." | Campbell ch. 23; Falconer and Mackay, Introduction to Quantitative Genetics |
| 3 | minor | Scene 7: "Copying keeps a valuable genotype exactly, with no reshuffling by meiosis." | Tissue culture can introduce somaclonal variation, and somatic mutations occur in any clone line; "exactly" overstates. No meiotic reshuffling is the correct reason. | "Copying keeps a valuable combination of alleles together, with no reshuffling by meiosis." | Larkin and Scowcroft, Theor Appl Genet 1981;60:197 (somaclonal variation) |
| 4 | minor | Scene 8: "Cheesemakers once used rennet, an enzyme taken from calves' stomachs." | "Once" implies calf rennet is no longer used; it is still required for some traditional and protected-origin cheeses. | "Cheesemakers traditionally used rennet, an enzyme taken from calves' stomachs." | Kumar et al., Crit Rev Biotechnol 2010;30:243 (rennet and chymosin review) |
| 5 | minor | Scene 6: "Some copy existing DNA ... or making many copies of one gene." | Gene cloning in practice inserts the gene into a vector, so it straddles "copy" and "insert". Correct at this level as "copies one gene"; author note only. | Author note only (b16, b18). | Campbell ch. 20 |

No blocker and no should-fix science finding. All four wording findings are minor and remove absolute claims.

## Facts confirmed (no change)

- **Yeast and bread.** *Saccharomyces cerevisiae* is a single-celled fungus; in dough it ferments sugars to carbon dioxide and ethanol, and the trapped CO₂ forms the gas cells that raise bread (OpenStax 2e 7.5). "A little ethanol": correct (most evaporates in baking).
- **Pasteur.** His lactic fermentation memoir (1857), alcoholic fermentation memoir (1860) and later work established that living microorganisms carry out fermentation. "In the eighteen-fifties and sixties ... living yeast does the work": correct. Site correction 3 (the unverified "sealed flask" protocol) is right to avoid.
- **"Thousands of years".** Brewing and leavened bread are documented in ancient Egypt and Mesopotamia several thousand years ago. The site's 14,400-year Shubayqa remains are rightly not used (site correction 2: the study does not establish fermentation).
- **Definition, yoghurt and enzymes.** The definition matches the site and standard texts. Lactic acid bacteria (*Lactobacillus delbrueckii* subsp. *bulgaricus*, *Streptococcus thermophilus*) ferment milk to yoghurt; microbial proteases, lipases and amylases are used in detergents. Correct.
- **Selective breeding changes population allele frequencies, not DNA.** Choosing parents changes which existing alleles are transmitted and so their frequency in the next generation; each offspring receives a normal set of parental alleles by meiosis and fertilisation. "No one touched a sheep's DNA. Each lamb still got a normal mix of its parents' alleles ... alleles for finer wool became more common in the flock": correct (Campbell ch. 23; author note: wool fibre diameter is a moderately heritable, many-gene trait). Site correction 6 ("both change the organism's genetic make-up" is wrong for selective breeding) is right.
- **Insulin history.** Insulin was first given to a patient in Toronto in January 1922 as an extract of cattle pancreas, and animal insulin from cattle and pig pancreases was the treatment until recombinant human insulin. Humulin (made in *E. coli*) was approved by the US FDA in October 1982, the first recombinant DNA drug approved for human use (fetched: NSF, https://nsf.gov/impacts/rdna-insulin; ACSH, https://www.acsh.org/news/2019/10/28/record-time-fda-approval-human-insulin-1982-when-genetic-engineering-came-age-14362; GEN, https://genengnews.com/insights/the-right-protein-to-establish-recombinant-therapeutics). The first bacterial expression used synthetic DNA for the separate A and B chains (Goeddel et al., PNAS 1979;76:106), so "DNA coding for human insulin" rather than "the human insulin gene" is right (site correction 1). "From the nineteen-twenties ... pigs and cattle" and "in the early nineteen-eighties, human insulin made by bacteria went on sale": correct. Site correction 7 (animal insulin was a twentieth-century pharmaceutical, not "traditional medicine") is right. "People with type one diabetes need insulin every day": correct; no person is shown (project manager decision).
- **Reproductive technologies.** Artificial insemination and artificial pollination control which gametes combine and do not change DNA sequence. Correct. b15 teaches both in full (project manager decision).
- **Copying.** Micropropagation, runners and suckers produce plants that match the parent's genotype by mitosis (with the limit in finding 3). Bananas (Cavendish, sterile triploids) are propagated vegetatively. Correct.
- **Bt cotton.** Carries *cry* genes from the soil bacterium *Bacillus thuringiensis*, coding for proteins toxic to certain caterpillars. Correct.
- **Rennet and chymosin.** Calf rennet comes from the abomasum; its main enzyme is chymosin; fermentation-produced chymosin from microbes carrying the calf chymosin gene was accepted in the US in 1990 and now makes much of the world's cheese. "Much cheese", without a figure: correct.
- **DNA tests in breeding.** Genomic breeding values are used in Australian sheep and cattle breeding (Sheep Genetics; MERINOSELECT). Correct as a general statement.
- **"CRISPR in weeks".** Not in the narration. Site correction 10 is correct: an edit in cultured cells can be made and checked within weeks, but producing and verifying an edited plant or animal line takes months to years. Gene editing is spoken only as "aim to change one chosen stretch of DNA": correct.
- **Attempts.** 10a's model (A process used; B choice of parents; C copy of existing DNA; D DNA changed; (b) D only) and 10c's compare model (existing alleles against a gene from any species; changes allele frequencies against changes the plant's DNA; many generations against one) are correct. "Recombinant DNA works without any breeding" is rightly named as a wrong chain (transformed plants are still bred).
- **Memory aids.** "Biotechnology is older than GMOs": correct. "Reproductive technologies choose the parents; they don't change genes": correct with its spoken condition "they change which alleles get passed on, but they make no new ones".
- **Absolute words checked.** "only one of them needed anyone to change an organism's DNA in a lab" (hook): correct for these three products. "Nothing in that definition says the DNA has to be changed": correct. "a trait the species never had": correct for an inserted bacterial gene. "Only the cotton has had its DNA changed" (10b): correct for A to D. Findings 1 to 4 remove the others.
- **Em dashes:** none in the design.

## Verdict

**ready to voice** on science after the minor findings (no blocker, no should-fix). The Codex error check remains as planned (primary sources for the 1922 and 1982 insulin dates, Goeddel et al. 1979 and Pasteur's dates).

## Resolution (20 Oct)

Resolved in `../lessons/bio-m6-b09.md` Revision 2.

- **Finding 1 (minor): applied.** Scene 2 says "Making bread doesn't change the yeast's DNA."
- **Finding 2 (minor): applied.** Scene 4 says "it's limited to variation that already exists in the flock".
- **Finding 3 (minor): applied.** Scene 7 says "keeps a valuable combination of alleles together"; note 5 matches.
- **Finding 4 (minor): applied.** Scene 8 says "Cheesemakers traditionally used rennet".
- **Finding 5 (minor): recorded, no learner change.**
- **Decisions confirmed by this check:** type 1 diabetes is named with no person shown; b15 teaches artificial insemination and pollination in full; the paintbrush pollination plate is used.
