# B4 science check (Claude, errors only): DNA structure and semi-conservative replication

Checked: `docs/production/claude-pm/lessons/bio-m5-b04.md` revision 3 (narration, on-screen text, visual notes, key notes, attempt and feedback, fact-check list items 1 to 23). Format: `codex-prompts/03-fact-check-template.md`. Source review only: no stills, audio or render. Em dash (U+2014) search of the design: none.

Access note: NCBI Bookshelf returned a browser-check page and one pressbooks page returned 403, so some confirmations below rest on the search-result summaries of the named pages plus the OpenStax page that did load. Those are marked "summary". Anything I could not confirm is marked UNVERIFIED.

## Findings (errors only)

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | 6b: "In a bacterium that splits in two, that is both new cells." Visual tag "passes to both new cells". Key note 5: "It passes to every cell that divides from that cell." | The lesson's own model says a copying error sits in one new strand, so only one of the two daughter DNA molecules carries it. When the bacterium splits, only the new cell that receives that molecule inherits the change. The other new cell receives the unchanged copy (the mismatch is resolved at the next round of copying, giving one changed and one unchanged molecule). "Both new cells" is false for a replication error. | Narration: "A mutation passes to the cell that receives the changed DNA, and to every cell that divides from that cell. In a bacterium that splits in two, only one of the two new cells gets the changed copy." Visual: the bacterium splits, the changed ladder goes to one cell only, tag "passes to one new cell, then to all its descendants". Note 5: "It passes to the cell that receives the changed copy and to every cell that divides from it, and in an organism that reproduces sexually it reaches offspring only through a cell that makes gametes." |

Count of findings: 1 (science 1, syllabus 0, screen 0, copy 0).

Syllabus and site mismatch: None found. Screen problems: not checked (no stills). Copy problems (em dashes, production words in learner copy): None found.

## Claim-by-claim verification (design fact-check list and narration)

| Claim (where) | Result | Source |
| --- | --- | --- |
| Human diploid cell holds about 6 billion base pairs, "billions of letters" (hook, list 1) | Verified. About 6.27 to 6.4 billion base pairs per diploid cell, about 2 m of DNA (not spoken). | PMC study of human genome size, https://pmc.ncbi.nlm.nih.gov/articles/PMC6391780 (summary) |
| Nucleus "far smaller than a pinhead" (hook, list 1) | The comparison holds. UNVERIFIED: the exact "about 6 micrometres" in the design; sources give 6 to 10 micrometres. Any value is 100 times or more smaller than a 1 to 2 mm pinhead, so the spoken claim is safe. The on-screen tag does not give a number. | search summaries only |
| Nucleotide = deoxyribose sugar, phosphate group, nitrogenous base (2a, notes) | Verified. | OpenStax Biology 2e, DNA structure and replication chapters, https://openstax.org/books/biology-2e/pages/14-4-dna-replication-in-prokaryotes (replication page; structure page link returned 404) and standard textbooks |
| "Phosphate group, which holds phosphorus and oxygen atoms" (2a) | Verified as a plain meaning (PO4 unit). | standard biochemistry |
| Sugars and phosphates link in a backbone (2a); strong covalent bonds, atoms share electrons (3, notes) | Verified: phosphodiester bonds are covalent. | OpenStax replication page: "the phosphodiester bond between the incoming nucleotide and the growing chain" |
| Bases A, T, C, G; names adenine, thymine, cytosine, guanine (2a) | Verified. | standard |
| Watson and Crick model, 1953; screen credit "built using X-ray images by Rosalind Franklin and others" (2b) | Verified. Watson and Crick, Nature 171:737-738, 25 April 1953, alongside Franklin and Gosling (Nature 171:740-741) and Wilkins, Stokes and Wilson. "Franklin and others" is fair. | Nature 1953; Nature feature https://media.nature.com/original/magazine-assets/d41586-019-02554-z/d41586-019-02554-z.pdf (summary); https://www.kcl.ac.uk/lsm/about/kings-and-dna.aspx (summary) |
| Backbones outside, bases inward (2b) | Verified. | Lodish, Molecular Cell Biology 8e, https://digfir-published.macmillanusa.com/lodish8e/lodish8e_ch5_4.html (summary) |
| A pairs with T, C with G, "only those pairs fit like jigsaw pieces" (2b) | Verified as a plain-language reason (a purine pairs with a pyrimidine, and hydrogen-bond donors and acceptors line up only for A-T and G-C). | Lodish 8e (summary); https://rotel.pressbooks.pub/genetics/chapter/dna-double-helix-structure/ (summary) |
| Two hydrogen bonds A-T, three C-G (2b2, notes) | Verified. | same sources |
| Hydrogen bonds are weak, strands separate without breaking either backbone (3) | Verified. | OpenStax: helicase unwinds by "breaking the hydrogen bonds between the nitrogenous base pairs" |
| Each sugar joins the next phosphate on one particular side, giving a start (5') end and finish (3') end (2c) | Verified. The 3' carbon of one sugar links through a phosphate to the 5' carbon of the next, so every strand has a free 5' phosphate end and a free 3' hydroxyl end. Labelling 5' as start and 3' as finish matches the direction DNA polymerase builds. UNVERIFIED by page text: I did not open a page quoting the 3' hydroxyl detail; this is standard and consistent with the OpenStax line "add nucleotides only in the 5' to 3' direction" and "requires a free 3'-OH group". | OpenStax replication page above |
| Strands antiparallel (2c, notes) | Verified. Note that the design states what antiparallel is and does not state a cause, which is not an error. | Lodish 8e (summary) |
| Helicase unwinds the helix and breaks hydrogen bonds at the replication fork (4a) | Verified. | OpenStax: "An enzyme called helicase unwinds the DNA by breaking the hydrogen bonds between the nitrogenous base pairs." |
| Loose (free) nucleotides pair with exposed bases (4a) | Verified. The incoming units are actually nucleoside triphosphates (dATP, dGTP, dTTP, dCTP); "nucleotides" is an acceptable plain-language simplification and not an error. | OpenStax replication page |
| DNA polymerase joins each new nucleotide to the last with covalent bonds (4a, notes) | Verified (phosphodiester bond formation). | OpenStax replication page |
| Replication is semi-conservative: each daughter has one original and one new strand (4b, notes) | Verified. | Meselson and Stahl 1958, https://doi.org/10.1073/pnas.44.7.671 |
| Animation: new strands built "in short stretches behind the fork", no growth arrow | Not an error. Real polymerase adds only at 3' ends (leading strand continuous, lagging strand in fragments), which the design deliberately does not contradict. | OpenStax replication page |
| Polymerase checks each base and can back up to remove a mistake; repair proteins check the new strand afterwards; "almost every mistake is fixed" (6a, notes) | Verified. Proofreading (3' to 5' exonuclease) and mismatch repair together bring the error rate to roughly 1 in 10^9 to 10^10 per base copied; mismatch repair preferentially corrects the new strand. No rate is spoken. | https://bio.libretexts.org/Courses/Clinton_College/BIO_300%3A_Introduction_to_Genetics_(Neely)/03%3A_Mutation/3.05%3A_DNA_Repair (summary); https://bionumbers.hms.harvard.edu/bionumber.aspx?id=112655 (summary) |
| A surviving error is a mutation, a change in base order (6a, notes) | Verified. | standard |
| Many mutations have no effect, some harm, a few help (6b) | Verified. | standard |
| Inheritance: sexual organisms, a body-cell mutation reaches offspring only through a cell that makes gametes (6b, notes) | Verified for animals. For plants the sentence still holds because the cells that make gametes arise from the same shoot cells (meristem) that form body tissue, but a plant "body cell" is not cleanly separated from the gamete-making lineage. This is a caveat on wording, not an error in the sentence as written. UNVERIFIED: a March 2026 press report disputes how late plant germline segregation happens, and I did not open the paper. | https://en.wikipedia.org/wiki/Somatic_mutation (summary), https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2021.707740/text (summary) |
| Inheritance: asexual organisms (bacteria, yeast, cuttings) pass a mutation on when the copied cells divide (6b, notes) | Verified in substance, but see finding 1 for "both new cells". | https://par.nsf.gov/biblio/10480161 (summary) |
| Worked example orientation: top 3' A T C G 5' over bottom 5' T A G C 3' is a valid antiparallel complementary pair; new bottom strand on the top template is 5' T A G C 3'; new top strand on the bottom template is 3' A T C G 5'; both daughters equal the start (5a to 5d) | Verified by pairing and reversing letter by letter. | own derivation, standard base pairing |
| Turned round (5b2): template 3' A T C G 5' flipped about a vertical axis reads 5' G C T A 3' left to right, and the new strand 5' T A G C 3' reads 3' C G A T 5'; pairs G-C, C-G, T-A, A-T | Verified. | own derivation |
| Attempt item one: template 5' T G C C A T 3' pairs with 3' A C G G T A 5', which reads 5' A T G G C A 3' from its own 5' end (7, 8a) | Verified. Feedback line "3' end on the left: A, C, G, G, T, A, from 3' to 5'" is correct. | own derivation |
| Attempt item two: a both-heavy molecule copied twice gives four molecules: two with one heavy and one light strand, two with two light strands; heavy strands total stays 2 (7, 8b) | Verified. Round 1: two heavy-light molecules. Round 2: each gives one heavy-light and one light-light. | own derivation; Meselson and Stahl 1958 |
| Meselson and Stahl, 1958, bacteria (E. coli), heavy nitrogen, "this pattern" (8b source chip) | Verified. E. coli grown in 15N then shifted to 14N; one generation gave one intermediate-density band; the second generation gave equal intermediate and light bands, matching the item two pattern. They separated DNA by density in a caesium chloride gradient (not on screen). | Meselson and Stahl, PNAS 44(7):671-682, https://doi.org/10.1073/pnas.44.7.671; https://embryo.asu.edu/pages/meselson-stahl-experiment-1957-1958-matthew-meselson-and-franklin-stahl (summary) |
| Enzyme = protein that speeds up a reaction (4a) | Verified, Year 11 meaning. | standard |
| "Half old, half new" and "Apple in the Tree, Car in the Garage" (in DNA) | Aid assumptions as stated in the design are correct (A pairs with U in RNA, so "in DNA" is needed; old = the strand it was copied from). | standard |

## UNVERIFIED items

1. Nucleus diameter "about 6 micrometres" (design note only; sources range 6 to 10 micrometres; the spoken claim is unaffected).
2. 3' hydroxyl and 5' phosphate detail: standard, consistent with OpenStax, but no opened page quoted it.
3. Plant germline timing (disputed in a March 2026 report I did not open); the written sentence is not wrong.

Total: 1 finding (science), 3 UNVERIFIED notes.

## Resolution (Claude science check)

Applied to `lessons/bio-m5-b04.md` (revision 4), 12 Oct.

1. Finding 1 (science, "both new cells"): resolved. Scene 6b now says "A mutation passes to the cell that receives the changed DNA, and to every cell that divides from that cell. In a bacterium that splits in two, only one of the two new cells gets the changed copy." The visual sends the changed ladder to one new cell only, with the tag "passes to one new cell, then to all its descendants", and key note 5 says "It passes to the cell that receives the changed copy and to every cell that divides from it". The fact-check list item 17 explains why (a copying error sits in one new strand).
2. UNVERIFIED 1 (nucleus micrometre figure): softened. No micrometre or metre figure is spoken or shown; only "a nucleus far smaller than a pinhead" remains, with the on-screen tag "size comparison with a human cell nucleus, not to scale".
3. UNVERIFIED 2 (3' hydroxyl and 5' phosphate detail): not spoken. Scene 2c says only that each sugar joins the next phosphate on one particular side, so a strand has a start end and a finish end; nothing about hydroxyl groups appears in learner copy.
4. UNVERIFIED 3 (plant germline timing): softened. The spoken example in 6b is "a person" only; key note 5 says "an organism that reproduces sexually" without a plant claim.

