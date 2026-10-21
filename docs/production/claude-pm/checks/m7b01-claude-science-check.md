# m7b01 science check (Claude): what makes a disease infectious, and how do we classify pathogens?

Checked on 22 October 2026 by an independent reviewer who did not author the design. Input: `../lessons/bio-m7-b01.md` (Revision 1, 21 Oct).

**Method.** I checked every narration line, the on-screen text, both attempts and their model answers, the feedback, the key notes, the memory aids, the logged site errors and the YouTube draft. I checked them against standard texts (Campbell Biology; OpenStax Microbiology, chapters 5, 6 and 9) and the sources listed below. Sources marked (searched) were opened or found by search in this session. Sources marked "for Codex to open" are standard references not opened here. I compared the syllabus wording character for character against `docs/production/programme/syllabus/bio-2017-y12.json`. I searched for the absolute words "always", "never", "every", "all", "only", "no", "can't", "isn't" and "useless" and checked each hit. I checked each logged site error against the live site pages (`C:/Users/kygs/hscscience/subjects/biology/year12/module7/lesson01.sa.html` and `lesson02.sa.html`), searched by exact phrase.

No renders and no audio. I searched the design for U+2014 and found none; none are used here.

## Dotpoint check

The ledger entry for **B7-IQ1-01** (Module 7, p 54, section "Causes of Infectious Disease", inquiry question "How are diseases transmitted?") reads: "describe a variety of infectious diseases caused by pathogens, including microorganisms, macroorganisms and non-cellular pathogens, and collect primary and secondary-sourced data and information relating to disease transmission, including: (ACSBL097, ACSBL098, ACSBL116, ACSBL117)". Its first listed example is "classifying different pathogens that cause disease in plants and animals (ACSBL117)".

- **Match.** The design's syllabus line, the YouTube draft's two quoted lines and the inquiry question all match the ledger exactly.
- **Ledger flag.** `depthStudyOrPractical: false`.
- **Open items.** The design correctly leaves the data-collection stem and the other three examples (epidemic transmission, microbial testing, modes of transmission) open for b03, p01 and p02.

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) | Sources |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | Scene 3: "single cells or fine threads of cells, too small to see, so they're **microorganisms**. Worms and ticks are animals made of many cells, big enough to see, so they're **macroorganisms**." | **Inaccurate as a defining rule.** Fungal colonies and fruiting bodies are visible (Fleming's mould in the hook; rust pustules in scene 8). Many macroparasites are at or below the limit of the unaided eye. Root-knot nematode females are about 0.4 to 1.3 mm and second-stage juveniles about 0.4 to 0.75 mm. Scabies mites (ectoparasites) are about 0.3 to 0.4 mm. The real distinction is unicellular or filamentous microbes against multicellular animals. | "single cells or fine threads of cells, each too small to see on its own, so they're **microorganisms**. Worms and ticks are animals made of many cells, usually big enough to see, so they're **macroorganisms**." (Learning review finding 2, which also fixes scene 10 and 11b.) | (searched) UGA root-knot nematode sheet https://ipm.uga.edu/files/2022/02/Root-Knot-Nematode.pdf ; AGES https://www.ages.at/en/plant/plant-health/pests-from-a-to-z/root-knot-nematode ; OpenStax Microbiology 5.3 (fungi: macroscopic forms) |
| 2 | should fix | Scene 10: "And if it isn't a cell, is it RNA, protein, or both?" | **Wrong for DNA viruses.** Scene 6 correctly says a virus holds "DNA or RNA". As a sorting rule, "both" (RNA and protein) excludes DNA viruses such as herpesviruses and hepatitis B virus. | "And if it isn't a cell, is it RNA only, protein only, or genes in a coat?" Chip to match. | OpenStax Microbiology 6.1 (viral genomes DNA or RNA) |
| 3 | should fix | Scene 2: "a **pathogen**, an organism or agent that gets into another organism, its **host**, and harms it." Gloss: "host: the organism it lives in". | **Excludes ectoparasites,** which the lesson classifies as pathogens in scene 5 ("live on the outside, like ticks and lice"). | "an organism or agent that lives in or on another organism, its **host**, and harms it." Gloss: "host: the organism it lives in or on". | OpenStax Microbiology 15.1 (pathogen, host); site L01 card 2 lists ectoparasites under macroorganisms |
| 4 | minor | Scene 4: "with its DNA loose in the cytoplasm" | The bacterial chromosome is organised in the nucleoid by supercoiling and nucleoid-associated proteins. bio-m5-b06a says "it is not floating loose". | "with its DNA lying in the cytoplasm". | bio-m5-b06a design (scene 4 and fact 4); OpenStax Microbiology 3.3 |
| 5 | minor | Scene 4: "with walls made of chitin" | Fungal walls contain chitin, but most of the wall is glucans and glycoproteins. "Made of" overstates. | "with walls containing chitin". Key note: "chitin in the wall". | OpenStax Microbiology 5.3; Gow et al., Microbiol Spectr 2017 (for Codex to open) |
| 6 | minor | 11b: "a virus always has a protein coat" | **Absolute, and not quite true.** A few RNA viruses have no capsid (narnaviruses in fungi, endornaviruses in plants). The comparison needed is with a typical virus, and the sentence works without "always". | "Calling Q a small virus is the classic mistake: a virus has a protein coat." (-7 characters.) | ICTV Narnaviridae and Endornaviridae reports (for Codex to open) |
| 7 | minor | Scene 9: "Antibiotics like penicillin act on parts only bacteria have, such as the peptidoglycan wall and bacterial ribosomes." Visual: penicillin target shown on the TB rod. | **Two points.** (a) Bacterial ribosomes are 70S, while host cytoplasmic ribosomes are 80S. Ribosome-targeting antibiotics rely on this difference; "parts only bacteria have" needs it said (learning review finding 5). (b) *Mycobacterium* is intrinsically resistant to most beta-lactams (mycolic acid layer, the BlaC beta-lactamase), so the TB rod should not illustrate penicillin's target. The 11d answer ("bacterial ribosomes and the enzymes that build its wall") is correct for TB drugs: streptomycin acts on the ribosome, and isoniazid blocks mycolic acid synthesis. | Scene 9: "such as the peptidoglycan wall and ribosomes shaped differently from ours." The visual uses a generic `b6a-bacterium-v1.png` glyph for the penicillin pulse. 11d unchanged. | OpenStax Microbiology 14.3 (selective toxicity; 70S targets); Kurz and Bishai, Clin Microbiol Rev (beta-lactams and M. tuberculosis) (for Codex to open) |
| 8 | minor | Scene 7: "a misfolded copy of a normal protein found mostly on nerve cells" | PrP^C is expressed in many tissues (lymphoid, muscle and others), most highly in neurons. "Mostly" implies it is largely absent elsewhere. | "a misfolded copy of a normal protein found especially on nerve cells" (+3). | Prusiner, PNAS 1998;95:13363; CDC prion diseases https://www.cdc.gov/prions/ (for Codex to open) |
| 9 | minor | Scene 2 on-screen definition "Infectious disease: caused by a pathogen, can pass between hosts"; key note 1 "... and can pass between hosts"; scene 12 "a pathogen that can pass between hosts, or something else" | **"Infectious" is not the same as "communicable".** Tetanus and legionellosis are infectious (caused by pathogens) but do not pass from host to host. The site's own test is "is there an invading organism?". As a decision rule, the transmission clause would misfile tetanus. | Screen: "Infectious disease: caused by a pathogen; most can pass between hosts". Key note 1: "... and most can pass between hosts." Scene 12: "first ask what causes it: a pathogen, or something else." (-28 characters.) The narration in scene 2 ("the pathogen can pass from one host to the next, the disease can spread") is correct as written. | OpenStax Microbiology 16.1 (communicable and noncommunicable infectious disease) |
| 10 | minor | Scene 8: "A bacterium causes crown gall, a swelling on stems." | Crown galls form mainly at the crown (where the stem meets the roots), and also on roots and lower stems. | "A bacterium causes crown gall, a swelling at the base of the stem." (+15; or leave as is.) The plate brief already places the gall at the crown. | Escobar and Dandekar, Trends Plant Sci 2003 (Agrobacterium tumefaciens) (for Codex to open) |
| 11 | minor | Key note 3: "helminths, which are parasitic worms (pork tapeworm, root-knot nematodes)" | "Helminth" normally refers to parasitic worms of animals. The design's own facts list says plant nematodes are called "tiny roundworms" for that reason. | See learning review finding 13. | Design facts list |
| 12 | minor | Site error 8: "It contains five (viruses listed as cellular; bacteria treated with antifungals; prions as RNA; viroids infecting animals and having a protein coat, which is two errors in one sentence; influenza using fimbriae)" | **Miscounted.** The design's own list gives six errors (1 + 1 + 1 + 2 + 1). I read the paragraph on the live L02 page and confirm all six. | "It contains six (viruses listed as cellular; bacteria treated with antifungals; prions as RNA; viroids infecting animals; viroids having a protein coat; influenza using fimbriae). Proposed: 'contains six factual errors'." | lesson02.sa.html Activity 1 (searched) |
| 13 | minor | Site error 5 quotes the site as "HIV is a retrovirus that inserts its RNA genome into the host's DNA". | The live page reads "inserts its RNA genome into the host's DNA using reverse transcriptase". It is still an error (the DNA copy is inserted, by integrase), but the quotation should be complete. | Quote: "HIV is a retrovirus that inserts its RNA genome into the host's DNA using reverse transcriptase". Proposed site wording unchanged. | lesson02.sa.html card 4 (searched) |
| 14 | minor | Scene 7 visual: prion shown beside a virus at true relative scale (Decisions) | A PrP monomer is about 2 to 5 nm across (about 25 to 35 kDa), so at true scale it is a dot beside a 100 nm virus. PSTVd's native rod is a few tens of nanometres long (denatured strands about 50 nm by electron microscopy) and about 2 nm wide, so "a fraction of the virus's width" is right for the viroid. | Keep the viroid at true scale. Do not pair the prion with the virus at scale (learning review finding 11). | Sänger et al. / Gross et al., Nature 1978;273:203 (PSTVd 359 nucleotides, rod-like) (searched: https://www.nature.com/articles/273203a0.pdf); PSTVd summary https://en.wikipedia.org/wiki/PSTVd (searched) |

No blocker. Three should-fix findings (1 to 3). Findings 4 to 14 are wording, citation and visual-accuracy fixes.

## Facts confirmed (no change)

- **Fleming, 1928.** Fleming observed lysis of staphylococcal colonies around a *Penicillium* contaminant in September 1928. He named the substance penicillin in his paper "On the antibacterial action of cultures of a Penicillium ...", *Br J Exp Pathol* 1929;10:226. "Around it, the bacteria had died, leaving a clear ring" is a fair plain summary. (searched: https://sciencehistory.org/education/scientific-biographies/alexander-fleming/ ; https://www.quaritch.com/books/fleming-alexander-i-sir-i/on-the-antibacterial-action-of-cultures-of-a-penic/GU96/)
- **Penicillin's limits.** Penicillin inhibits peptidoglycan cross-linking. It has no action on influenza virus, dermatophyte fungi (tinea), *Plasmodium* or tapeworms, so the hook is correct. (Doxycycline, a different antibiotic, is used against malaria; nothing in the narration says otherwise, so this is an author note only.)
- **Most microbes are harmless.** About 38 trillion bacteria live in a reference adult (Sender, Fuchs and Milo, *PLoS Biol* 2016;14:e1002533). "Trillions ... most do no harm, or even help" is correct.
- **Tuberculosis, type 2 diabetes.** Correct as stated.
- **Bacteria.** Prokaryotic, with a peptidoglycan wall. *M. tuberculosis* rods are about 2 to 4 by 0.2 to 0.5 micrometres and non-motile (no flagella), so "a rod a few thousandths of a millimetre long" is correct. A red blood cell is about 7.5 micrometres, and the scene 4 scale is correct.
- **Fungi and protozoa.** Both are eukaryotic. Tinea is caused by dermatophytes and wheat stem rust by *Puccinia graminis*. Protozoa lack walls. *Plasmodium* infects red blood cells (after the liver stage). Correct.
- **Helminths.** *Taenia solium* adults are 2 to 7 m (CDC DPDx), with a scolex bearing four suckers and a rostellum with two rows of hooks. "Hooks onto the wall of the gut and can grow to several metres long" is correct. (searched: https://www.cdc.gov/dpdx/taeniasis)
- **Ticks** are a few millimetres long unfed. Correct.
- **Viruses.** Nucleic acid in a capsid, no ribosomes, replication only in host cells. SARS-CoV-2 virions are about 60 to 140 nm (Zhu et al., *N Engl J Med* 2020;382:727), so "about a ten-thousandth of a millimetre" and "dozens along one bacterium" are correct (about 20 to 40 along a 2 to 4 micrometre rod). TMV is a rigid rod about 300 by 18 nm, with ssRNA in a helical coat. Correct.
- **Viroids.** PSTVd is a covalently closed circular ssRNA of 359 nucleotides, rod-like through intramolecular base pairing, with no protein coat, and causes spindle-shaped tubers. All known viroids infect plants. Correct (Nature 1978, searched above).
- **Prions.** PrP^Sc has no nucleic acid and templates the misfolding of PrP^C. Prions cause BSE in cattle. No plant prion disease is known, and there is no cure. "No DNA or RNA at all", "makes them fold the same wrong way", "no known cure" and "the known prions infect animals" are correct. Yeast prions exist, but they are not pathogens in this sense, so "known prions infect animals" is acceptable for disease.
- **Plant examples.** Crown gall is caused by *Agrobacterium tumefaciens*. Root-knot nematodes are *Meloidogyne* spp., which form root galls. Wheat stem rust is a fungus. Protozoan plant pathogens are few. *Phytomonas* (trypanosomatid flagellates in phloem) causes hartrot of coconut and marchitez of oil palm, so "plant diseases caused by protozoa are rare" and the grey tag "Phytomonas in palms" are correct. (searched: https://pmc.ncbi.nlm.nih.gov/articles/PMC3916237 ; https://wiki.pestinfo.org/wiki/Phytomonas_staheli)
- **Treatment.** "A drug has to hit something the pathogen has and the host doesn't" is selective toxicity. Antifungals (ergosterol targets) and antimalarials are correct, and so is "prions ... have no known cure".
- **Attempt 1.** Avian *Plasmodium* (for example *P. relictum*) lives in bird red blood cells. Dog tapeworms (*Taenia pisiformis*, *T. hydatigena*) are flat and segmented and about 1 to 2 m or more. A circular RNA with no coat from deformed tubers is a viroid. The model answer is correct, with finding 6 for the crossed reason.
- **Attempt 2.** *M. bovis* causes bovine TB, and BSE is a prion disease. Australia declared freedom from bovine TB in 1997, and the item names no country. The model answer is correct, and so is the author note on TB drugs and culling.
- **Absolute words.** These hits are true as stated: "No cure" (prions), "can't make anything itself" (virus), "antibiotics can't touch it" (virus), "Not a cell means antibiotics are useless" (as a treatment rule for viruses, viroids and prions), "with no DNA or RNA at all" and "no protein coat" (viroid). "Always" in 11b is finding 6. No other absolute word is a problem.
- **Memory aids.** "Not a cell means antibiotics are useless" is correct, and the reverse limit (fungi and protozoa) is stated in scene 9. "Bad apple" is a correct picture of templated misfolding. "Ecto/endo" is correct. "Viroid RNA only; prion protein only" is correct for structure.

## Logged site errors (each checked against the live pages)

| # | Real? | Note |
| --- | --- | --- |
| 1 Pythium in Protozoan row | Real | Oomycetes (stramenopiles) are neither protozoa nor fungi. Phytomonas is a valid replacement. |
| 2 "11 million ... when declaring" | Real | WHO's 11 March 2020 remarks cited more than 118,000 cases in 114 countries. About 11 million cumulative cases was reached in early July 2020. |
| 3 "sequenced within 10 days of the first case" | Real | The first genome was shared on 10 to 11 January 2020. The earliest known cases had symptom onset in early December 2019. The hook's "shared ... in just 10 days" is defensible only if counted from WHO's 31 December notification. |
| 4 Broad Street "127 per week"; Kansas origin | Real | Snow's figure is 127 deaths in the first three days. The Kansas origin is one disputed hypothesis, and about 50 million deaths accrued over 1918 to 1920. |
| 5 HIV "inserts its RNA genome" | Real | Quote incomplete (finding 13). |
| 6 tapeworm "survive cooking at low temperatures" | Real | Cysts survive in undercooked meat and are killed by thorough cooking or freezing. |
| 7 *S. aureus* "fimbriae ... fibronectin receptors" | Real | Attachment is by MSCRAMM adhesins (fibronectin-binding proteins) that bind host fibronectin. |
| 8 "four factual errors" | Real | Six, not five (finding 12). |
| 9 viroid "smallest known pathogen" | Real | A PrP monomer is smaller. "Smallest known infectious RNA" is correct. |
| 10 prions "cannot be inactivated" | Real | WHO infection-control guidance inactivates prions with sodium hydroxide plus autoclaving at 121 to 134 °C. |
| 11 virus spreads "mainly by contact and short-range aerosol" | Real | This is an over-general rule (norovirus and hepatitis A persist on surfaces and in water; TB is airborne). |
| 12 vaccines as "treatment" | Real | Vaccines prevent infection rather than treat it. |

## Exam style

Both items are HSC Section II style. They use NESA verbs (classify and justify, explain) with mark values (3 and 3), are tagged "HSC-style question, written for HSCScience" and give new contexts (an avian parasite, a dog tapeworm, bovine TB against BSE). A web search for the item wording and scenarios found no NESA or past-paper match (searched); the items are original.

## YouTube metadata

The dotpoint and example are quoted verbatim. "Each shown at its real relative size" is acceptable after learning review finding 11, because the prion is labelled rather than paired at scale. Prerequisites and next link match.

## Verdict

**Ready to voice after fixes 1 to 3** on science. Findings 4 to 14 are minor. The Codex error check remains as planned (PSTVd native length, TB rod size, *Phytomonas*, Fleming dates).

## Resolution

Resolved 22 Oct 2026 by the resolving author in `../lessons/bio-m7-b01.md` Revision 2. Narration 5,945 characters (counted by script), about 570 s.

| # | Action |
| --- | --- |
| 1 | Applied (with learning review finding 2): "each too small to see on its own"; "usually big enough to see"; the sorting question is "many-celled animal?". Facts list notes the root-knot nematode and scabies mite sizes. |
| 2 | Applied: "is it RNA only, protein only, or genes in a coat?" in scene 10 and its chip; scene 12 chip "what is it made of?". |
| 3 | Applied: "lives in or on another organism, its host"; gloss "host: the organism it lives in or on". |
| 4 | Applied: "with its DNA lying in the cytoplasm". |
| 5 | Applied: "with walls containing chitin"; key note "chitin in the wall"; facts list notes glucans and glycoproteins. |
| 6 | Applied: 11b "a virus has a protein coat" (no "always"). |
| 7 | Applied: (a) "ribosomes shaped differently from ours" (70S against 80S in the facts list); (b) penicillin's target is shown on a generic `b6a-bacterium-v1.png` glyph, never the TB rod. 11d unchanged. |
| 8 | Applied: "found especially on nerve cells". |
| 9 | Applied: screen definition "caused by a pathogen; most can pass between hosts"; key note 1 "and most can pass between hosts"; scene 12 "a pathogen, or something else"; the "Stops after" line follows. Scene 2's spoken sentence is unchanged, as advised. |
| 10 | Applied on screen only: the tag reads "crown gall: a swelling at the stem base". Narration keeps "a swelling on stems" (true, since galls also form on lower stems) to stay at the length cap. |
| 11 | Applied (learning review finding 13). |
| 12 | Applied: site error 8 now says the paragraph contains six errors, listing viroids infecting animals and viroids having a protein coat separately; proposed "contains six factual errors". |
| 13 | Applied: site error 5 quotes "... into the host's DNA using reverse transcriptase". |
| 14 | Applied (learning review finding 11): the viroid stays at true scale; the prion is not paired with the virus and carries "one protein molecule: far smaller than a virus". |

Nothing declined. The Codex error check remains (PSTVd native length, TB rod size, *Phytomonas*, Fleming dates), with site errors 1 to 12 to be logged in `../site-corrections-m7.md`.
