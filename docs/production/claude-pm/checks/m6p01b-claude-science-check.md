# m6p01b science check (bio-m6-p01, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/bio-m6-p01.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/bio-2017-y12.json`; `lessons/bio-m6-b01.md` and `bio-m6-b02.md` (recalled claims and attempt 11c). Every number was recomputed with a Python script (21 Oct): means, relative survival, plate points, ranges, A1 and A2; the sample standard deviation of each replicate set against the Poisson expectation (√mean), and a 20,000-draw simulation of the expected range of three plates at each mean. No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `B6-IQ1-01` (page 51): "explain how a range of mutagens operate, including but not limited to:" with examples "electromagnetic radiation sources", "chemicals", "naturally occurring mutagens". The design and the YouTube description match the ledger exactly. The ledger entry carries no ACSBL code, and the design adds none: correct. The fit is reasonable for a practical support video (the mutagen's action is the fate mechanism in scene 3); the Working Scientifically outcomes listed carry the rest.

## Em dashes

None found (U+2014 count 0; U+2013 count 0).

## Arithmetic

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| Means | 142, 98, 61, 24, 5 | 426, 294, 183, 72, 15 ÷ 3 (all exact) | Correct |
| Relative survival | 100.0, 69.0, 43.0, 16.9, 3.5 % | 100.000, 69.014, 42.958, 16.901, 3.521 | Correct |
| First 15 s | about a third lost | 31.0 % | Correct |
| Ranges | 7, 7, 5, 6, 4 | as stated | Correct arithmetic, but see S2 |
| Plate points | 97.2 ... 4.9 | all 15 reproduced | Correct |
| A1 | 152; 41; 27.0 %; crossed 73.0 % | 456 ÷ 3 = 152; 123 ÷ 3 = 41; 26.97 → 27.0; 73.03 → 73.0 | Correct |
| A2 | reported 36.6 %; corrected about 5.2 and about 3.7 % | 52 ÷ 142 = 36.62 %; 5.2 ÷ 142 = 3.662 % | Correct |

### One decimal place

Counts are exact integers and each mean here is exact, so ordinary significant-figure rules do not limit the arithmetic; a fixed one decimal place down a table column is the usual biology convention and is acceptable. Note for author note (e): the decimal place is a presentation choice, not a precision claim. With a mean of 5 colonies over three plates, the standard error of the mean is about √(5 ÷ 3) = 1.3 colonies, so 3.5 % carries about ±0.9 % of chance variation, and A2's 3.7 % is consistent with it. "close to the main data" is fair. No change to learner copy.

## Replicate realism

| Time | Design counts | SD | Poisson SD (√mean) | Median range of 3 plates by chance | Design range |
| --- | --- | --- | --- | --- | --- |
| 0 s | 138, 143, 145 | 3.6 | 11.9 | 19 | 7 |
| 15 s | 94, 99, 101 | 3.6 | 9.9 | 16 | 7 |
| 30 s | 58, 62, 63 | 2.6 | 7.8 | 12 | 5 |
| 60 s | 21, 24, 27 | 3.0 | 4.9 | 8 | 6 |
| 120 s | 3, 5, 7 | 2.0 | 2.2 | 4 | 4 |

Spread-plate counts vary at least as much as Poisson sampling (pipetting adds more). The design's upper four sets are about three times tighter than chance allows (S2).

## Biology claims

| Claim | Finding | Verdict |
| --- | --- | --- |
| A colony grows from one cell that could still divide | A colony arises from one colony-forming unit (usually one cell; a budding pair or small clump counts once) | Correct for teaching; author note only (M4) |
| "millions of copies in two days" at 30 °C | A yeast colony after 2 days holds about 10⁶ to 10⁷ cells | Correct |
| UV "joins neighbouring thymines" | UVC forms cyclobutane pyrimidine dimers (T-T most often, also C-containing) and 6-4 photoproducts | Correct as a b02 recall |
| Heavily damaged cells cannot copy their DNA and stop dividing | Unrepaired dimers block replicative polymerases; many lesions stall replication and the cell does not form a colony (lethal effect) | Correct; the learning review S2 wording is also correct |
| A changed base gets copied and the cell lives | In yeast most UV mutagenesis comes from error-prone copying past lesions (translesion synthesis by Pol ζ with Rev1); mutation frequency per survivor rises with dose while survival falls | Correct: lethal and mutagenic effects are different outcomes of the same damage |
| Repair (author note c) | Photoreactivation (photolyase, visible light) and nucleotide excision repair | Correct; plates are kept from white light after exposure in standard protocols (M2) |
| Control plates go in the cabinet with lids off, lamp off | Plastic lids absorb UVC, so exposed plates are irradiated lid-off (Bio-protocol: "irradiate the plates without lids") and identical lid-off handling of controls is right | Correct |
| Replica plating to a selective medium measures mutation (scene 11) | Forward-mutation assays plate about 10⁷ cells on the selective medium and about 10² on non-selective plates; mutants are reported per 10⁶ survivors (Bio-protocol 1272, CAN1 assay). Replica plating one plate of about 60 colonies would almost never catch an induced mutant | Logic correct, method not workable as shown (S1) |
| Yeast strain for a mutation test (author note d) | CAN1 and ade2 assays use haploid laboratory strains; baker's yeast is usually diploid or polyploid, so recessive mutations would not show | Author note gap (M5) |
| Plating more cells at high exposure | Standard practice, corrected for the amount plated (the CAN1 protocol plates different volumes at different doses and corrects for them) | A2's "change one variable only" overstates (S3) |
| Time is not dose | Fluence (J/m²) = irradiance (W/m²) × time; lamps warm up and age. Within one run with a stable lamp, dose is proportional to time, so the independent variable is still valid | Correct idea; wording absolute (M3) |
| Countable range 30 to 300 | Common convention (25 to 250 also used) | Correct as an author note |

## Safety and standards

| Item | Finding | Verdict |
| --- | --- | --- |
| UVC 100 to 280 nm; germicidal lamps mainly 254 nm; photokeratitis and erythema | Correct | Correct |
| ARPANSA RPS 12 | "Radiation Protection Standard for Occupational Exposure to Ultraviolet Radiation (2006)", Radiation Protection Series No. 12; limits in Schedule 1 (ICNIRP basis: 30 J/m² effective in 8 h; relative effectiveness about 0.5 at 254 nm, so about 60 J/m² actual, about 0.2 µW/cm² over 8 h) | Correct. At an irradiance of 1 mW/cm² (plausible near a germicidal tube) the limit is reached in about 6 s, so "seconds to minutes" holds |
| Yeast risk group 1 under AS/NZS 2243.3 | The standard's text is paywalled and its example table could not be checked this session. Current edition is AS/NZS 2243.3:2022. *S. cerevisiae* is risk group 1 in the WHO Laboratory Biosafety Manual, and RG1 is defined as unlikely to cause human or animal disease, matching the design's gloss | Consistent; cite the 2022 edition and have Codex confirm the table entry (M6) |
| Contaminants: treat as potentially harmful; sealed, never opened, autoclaved | Standard school microbiology practice | Correct |
| 70 % ethanol H225 | Ethanol's harmonised classification is Flam. Liq. 2 (H225); 70 % v/v has a flash point of about 16 to 21 °C, still below 23 °C, so H225; H319 is a common supplier self-classification | Correct |
| "UVC ... not a GHS chemical hazard" | GHS classifies chemicals, not radiation | Correct |

## Exam style

A1 ("Calculate the relative survival of the yeast at 45 s. Show your working.") and A2 ("Evaluate her result.") use HSC Section II verbs and structure and are original (new numbers and a new flaw; neither repeats b02's 11c). No NESA paper wording was found for either. A1 should define relative survival on the card (learning review M2).

## Absolute claims

- Scene 2 "every colony marks one cell that survived": acceptable for teaching (M4).
- Scene 4 "These data were collected by a teacher": false for a constructed dataset (S4).
- Scene 12 "time isn't dose" (M3).
- Scene 13 "the lamp is never on with the door open": a correct rule; keep.
- Feedback 2 "change one variable only" (S3).

## Memory aid

- *Colonies count the living, not the changed.* Assumptions (a dividing survivor makes a colony; a viable mutant makes a normal-looking colony) are true, but the wording can be read as "changed cells are not counted". Use the learning review S3 wording: *Colonies count survivors, changed or not.*

## Findings

No blockers.

### S1. Should fix: the mutation test in scene 11 is not workable as shown

- Exact text: "For example, copy each plate's colonies onto a medium that normal yeast can't grow on, using a velvet pad, like the replica plates in the first video. Count the colonies that grow there as a fraction of survivors, and compare it with the zero second plates."
- Problem: induced forward mutations are rare (of the order of 10⁻⁶ to 10⁻⁴ per survivor), so a plate of about 60 survivors would almost never contain one. Standard assays spread about 10⁷ exposed cells directly on the selective medium and a dilution on ordinary medium to count survivors. Also, each replicated colony carries about 10⁵ to 10⁶ cells, so spontaneous mutants arising during colony growth would print as background on many colonies.
- Replacement narration: "To measure mutation, you'd test the **survivors** for a new trait that's inherited. Mutants are rare, so spread millions of exposed cells on a medium that normal yeast can't grow on, like the antibiotic dish in the first video. Count the colonies that grow as a **fraction of survivors**, and compare it with unexposed cells. Then grow those colonies again, to check the trait is passed on." (20 characters shorter.)
- Screen: as the learning review S4 (dense spread on the selective plate, a diluted survivor plate beside it, "mutation frequency = mutant colonies ÷ survivors plated", "compare with unexposed cells"). Key note 4: "test survivors for a new inherited trait (millions of cells on a selective medium), as a fraction of survivors, against unexposed cells."
- Author note (d) addition: "A CAN1 forward-mutation protocol plates about 2 × 10⁷ cells on canavanine plates and about 200 on SC plates per dose, and reports mutants per 10⁶ survivors (Bio-protocol e1272). Replica plating suits screening a few hundred colonies for a common trait (for example auxotrophs after heavy mutagenesis), not counting rare forward mutants."

### S2. Should fix: replicate counts are about three times tighter than chance allows

- Problem: at a mean of 142, three spread plates typically range by about 19 colonies by sampling alone; the design's 0 s range is 7 (SD 3.6 against 11.9). Scene 12 then teaches "agree closely" from data a real class will not reproduce, so a class seeing 130 to 150 may think its plates are unreliable. (The same issue was an S finding for P04's idealised data.)
- Replacement counts (means unchanged, ranges near the chance median): 0 s **133, 144, 149** (426, range 16); 15 s **91, 97, 106** (294, range 15); 30 s **55, 61, 67** (183, range 12); 60 s **20, 24, 28** (72, range 8); 120 s 3, 5, 7 unchanged.
- Plate points (each ÷ 142 × 100): 0 s 93.7, 101.4, 104.9; 15 s 64.1, 68.3, 74.6; 30 s 38.7, 43.0, 47.2; 60 s 14.1, 16.9, 19.7; 120 s 2.1, 3.5, 4.9. The y axis to 110 still fits.
- Narration, scene 7: "At zero seconds, they grew a hundred and thirty three, a hundred and forty four and a hundred and forty nine colonies, a mean of **a hundred and forty two**." Scene 12: "**Reliability**: the three plates at each time differ only as much as chance predicts, like fifty five to sixty seven at thirty seconds." Screen: reliability card "30 s plates: 55, 61, 67 (range 12, about what random sampling gives); means smooth chance variation"; "Numbers used" and "Numbers to verify" tables to match.
- Optional: A1's sets (SD 4 and 3 against 12 and 6) could also widen, for example 145, 151, 160 (456) and 36, 41, 46 (123); answers unchanged.

### S3. Should fix: A2's feedback says the fix is "change one variable only", but plating more cells is valid when corrected

- Exact text: "Comparing plates that got different numbers of cells is the mistake: change **one** variable only."
- Problem: plating a known larger number of cells at high exposure, then correcting for it, is standard practice (author note g says so, and so does the CAN1 protocol). The error is reporting the uncorrected ratio. As worded, the video marks a correct method as wrong.
- Replacement: "Her mistake was comparing plates given different numbers of cells without correcting for it." (2 characters shorter; cue "**correcting**".) Screen line stays: "fair fix: same suspension for every plate, or correct for the cells plated". Model answer in Decisions: "not valid as reported: ... correct for the tenfold suspension (5.2 ÷ 142 × 100 ≈ 3.7 %), or use the same suspension for every plate". Misconception list: as the learning review M3.

### S4. Should fix: scene 4 presents a constructed dataset as collected

- Exact text: "These data were collected by a teacher, not by students." The corner tag reads "teacher-prepared dataset (constructed example)".
- Replacement: "In this practical, a teacher collects the data, not students." (+5 characters.) The tag stays.

### M1. Minor: four-fates wording for heavy damage

- Covered by the learning review S2 ("So many dimers that copying stalls at them ..."). Scientifically correct.

### M2. Minor: dark incubation is a real controlled variable

- Photoreactivation by room light after exposure changes survival; the CAN1 protocol says the irradiated plates must not be exposed to white light afterwards. Recommend adopting the open decision's silent row "kept in the dark, all plates" in scene 5's controlled list and in key note 2 ("same agar, incubation, all kept dark").

### M3. Minor: "time isn't dose" is absolute

- Exact text, scene 12: "And time isn't dose: to know the dose, measure the lamp's **output** at the plate."
- Replacement: "And time alone isn't dose: to know the dose, measure the lamp's **output** at the plate." (+6.) Screen line: "dose = lamp output at the plate × time; with a warmed-up, steady lamp, more time means more dose". Key note 5: "Time alone is not dose".

### M4. Minor: colony-forming units (author note)

- Add to the Numbers to verify reference facts: "A colony arises from one colony-forming unit, usually one cell; a budding pair or clump counts once. Narration keeps 'one cell'." No learner change.

### M5. Minor: ploidy (author note b and d)

- Add: "Mutation assays need a haploid laboratory strain; baker's yeast is usually diploid or polyploid, so recessive mutations would not show. The survival practical can use either."

### M6. Minor: cite the current standard edition

- Safety facts: "AS/NZS 2243.3:2022" (current edition); Codex to confirm *S. cerevisiae* in its risk group 1 examples. Add the RPS 12 limit numbers to author note i: "30 J/m² effective in 8 h; relative effectiveness about 0.5 at 254 nm (about 60 J/m² actual); at 1 mW/cm² that is reached in about 6 s."

## Sources

- NESA Biology Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx; local ledger `bio-2017-y12.json`, entry B6-IQ1-01 (page 51)
- Unk, I. and Daraba, A. (2014), Measuring UV-induced mutagenesis at the CAN1 locus in *Saccharomyces cerevisiae*, Bio-protocol 4(20): e1272 (2 × 10⁷ cells on canavanine plates, about 200 on SC plates; lids off; no white light after irradiation; correct for volumes plated; mutants per 10⁶ cells): https://en.bio-protocol.org/pdf/Bio-protocol1272.pdf
- Gocke, E. and Manney, T. R. (1979), Expression of radiation-induced mutations at the arginine permease (CAN1) locus in *S. cerevisiae*, Genetics: https://pubmed.ncbi.nlm.nih.gov/372046
- ARPANSA, Radiation Protection Standard for Occupational Exposure to Ultraviolet Radiation (2006), RPS 12: https://www.arpansa.gov.au/node/259 ; RPS 12 text: https://www.arpansa.gov.au/sites/default/files/legacy/pubs/rps/rps12.pdf
- ICNIRP UV guidelines summary (30 J/m² effective): https://www.icnirp.org/cms/upload/presentations/MiniSymposium2022/CridlandIcnirp_Nagoya2022.pdf ; 254 nm limit expressed as irradiance (about 0.2 µW/cm² over 8 h): https://led-professional.com/products-services/uv-c-radiometer-for-disinfection-effectiveness-and-safety-of-uv-c-leds-and-germicidal-lamps
- AS/NZS 2243.3:2022, Safety in laboratories, Part 3: Microbiological safety and containment (listing): https://infostore.saiglobal.com/en-au/standards/as-nzs-2243-3-2022-117305_saig_as_as_3202662/ ; university summaries of the risk group scheme: https://www.une.edu.au/research/research-services/research-ethics-integrity/institutional-biosafety/working-with-microbial-pathogens-infectious-microorganisms
- WHO Laboratory Biosafety Manual (risk group 1 definition; *S. cerevisiae* as RG1, as reported in iGEM safety pages): https://2015.igem.org/Team:UC_San_Diego/Safety
- Regulation (EC) No 1272/2008 (CLP), Annex VI, ethanol (Flam. Liq. 2, H225), via the ECHA C&L Inventory: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- Rastogi, R. P. et al. (2010), Molecular mechanisms of ultraviolet radiation-induced DNA damage and repair, J. Nucleic Acids, 592980 (pyrimidine dimers, 6-4 photoproducts, photoreactivation, excision repair; reviewer knowledge, not re-fetched)
- Local: `lessons/bio-m6-b01.md` (scene 7), `lessons/bio-m6-b02.md` (scenes 3 and 5, 11c and 11d)

## Verdict

**Ready to voice after fixes.** S1 to S4 change narration and screen text and must be applied before recording (S2 also changes the data tables). M1 to M6 are cheap. The Codex error check and the new plates are still required.

## Resolution

Resolved by the design author in `lessons/bio-m6-p01.md` Revision 2 (21 Oct). Narration recounted by script (only `> ` lines): 6,245 characters, about 569 s (9.5 minutes). No em dash or en dash.

- **S1 (resolved):** scene 11 narration replaced with the suggested wording ("Mutants are rare, so spread millions of exposed cells on a medium that normal yeast can't grow on, like the antibiotic dish in the first video. Count the colonies that grow as a fraction of survivors, and compare it with unexposed cells. Then grow those colonies again, to check the trait is passed on."). Screen: "about 2 × 10⁷ exposed cells (20 million)" on the selective plate, a grey tag "induced mutants: about 1 in 10⁴ to 10⁶ survivors", a diluted survivor plate, "mutation frequency = mutant colonies ÷ survivors plated", "compare with unexposed cells". Author note d carries the CAN1 protocol numbers (2 × 10⁷ on canavanine, about 200 on SC, mutants per 10⁶ survivors), why replica plating does not suit rare forward mutants, and the colony background point. Key note 4 updated. Replica plating, the velvet block plate and the `ReplicaPlates` motion are dropped.
- **S2 (resolved):** replicate counts replaced with the suggested sets (0 s 133, 144, 149; 15 s 91, 97, 106; 30 s 55, 61, 67; 60 s 20, 24, 28; 120 s 3, 5, 7). Recomputed by script: means 142, 98, 61, 24, 5 (exact); relative survival unchanged; ranges 16, 15, 12, 8, 4; SDs 8.2, 7.5, 6.0, 4.0, 2.0; plate points 93.7, 101.4, 104.9; 64.1, 68.3, 74.6; 38.7, 43.0, 47.2; 14.1, 16.9, 19.7; 2.1, 3.5, 4.9 (match the check). Scene 7 narration and table, scene 12 narration ("differ only as much as chance predicts, like fifty five to sixty seven at thirty seconds") and its reliability card, "Numbers used", "Numbers to verify" and author note a updated. Optional A1 widening taken (145, 151, 160; 36, 41, 46; answers unchanged). The painted plates now show plate 2 of each set (144, 97, 61, 24, 5 colonies); the hook tags read "mean 142" and "mean 5".
- **S3 (resolved):** feedback 2 now says "Her mistake was comparing plates given different numbers of cells without correcting for it." (cue "correcting"); crossed chip caption "different numbers of cells plated, not corrected"; the screen fair-fix line stays. Model answer and misconception lists reworded as suggested.
- **S4 (resolved):** scene 4 now says "In this practical, a teacher collects the data, not students."; the "constructed example" tag stays. Decisions reworded to match.
- **M1 (resolved):** see learning review S2.
- **M2 (resolved):** silent row "kept in the dark, all plates (light lets cells repair UV damage)" in scene 5; key note 2 "all kept dark".
- **M3 (resolved):** "time alone isn't dose" in scene 12; screen line adds "with a warmed-up, steady lamp, more time means more dose"; key note 5 "Time alone is not dose"; author note h records that exposure time stays a valid independent variable.
- **M4 (resolved):** colony-forming unit note added to the reference facts.
- **M5 (resolved):** haploid-strain note added to author notes b and d.
- **M6 (resolved):** AS/NZS 2243.3:2022 cited in the Safety facts check and Codex brief (Codex to confirm the risk group 1 table entry); RPS 12 limit numbers added to author note i.
- **One decimal place note (resolved):** author note e now says the decimal place is a presentation choice and records the ±0.9 % chance variation at 3.5 %.

Still required: Codex error check and the new plates before voicing.
