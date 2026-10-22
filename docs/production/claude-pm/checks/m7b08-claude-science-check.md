# m7b08 science check (Claude): how do T cells respond to infected cells?

Checked on 22 October 2026 by an independent reviewer who did not author the design. Input: `../lessons/bio-m7-b08.md` (Revision 1, 22 Oct).

**Method.** I checked every narration line, the on-screen text, both attempts and their model answers, the feedback, the key notes, the memory aid, the logged site errors and the YouTube draft against standard texts (Janeway, *Immunobiology*; Campbell Biology) and the sources below. Sources marked (searched) were found by web search in this session. Sources marked "for Codex to open" are standard references not opened here. I compared the syllabus wording character for character against `docs/production/programme/syllabus/bio-2017-y12.json` by script. I searched the narration by script for the absolute words "every", "all", "always", "never", "only", "can't", "must", "need", "any" and "entirely" and checked each hit. I checked each logged site error against the live page `C:/Users/kygs/hscscience/subjects/biology/year12/module7/lesson12.sa.html`, searched by exact phrase after stripping tags. No renders and no audio. I searched the design for U+2014 and found none; none are used here.

## Dotpoint check

- **B7-IQ3-01** (p 54, inquiry question "How does the human immune system respond to exposure to a pathogen?"): "investigate and model the innate and adaptive immune systems in the human body (ACSBL119)".
- **Match.** The string in `bio-2017-y12.json` (modules[2].contentPoints[6]) matches the Decisions and the YouTube draft character for character (script check). This is the one action the route assigns to bio-m7-b08.

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) | Sources |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | Scene 4: "It only fits a piece that's displayed on a cell, held in a display molecule. That's what Doherty and Zinkernagel found. A T cell checks the display molecule and the piece together." | **Overstated attribution.** Doherty and Zinkernagel (experiments from 1973, *Nature* 1974) showed that cytotoxic T cells kill virus-infected cells only when those cells carry the same MHC type as the T cells: the T cell recognises the virus together with a self MHC molecule ("MHC restriction"). That antigen is seen as a short **peptide** held in the MHC groove was shown later (Townsend and colleagues, 1985 to 1986; the MHC I structure, Bjorkman and colleagues, 1987). "That's what they found" placed after the piece-in-a-cup sentence credits them with the later finding. | "Doherty and Zinkernagel found the clue: a T cell recognises a virus only together with the cell's own display molecule. So it checks the display molecule and the piece together." Facts list: "D and Z: recognition needs virus antigen plus self MHC (1973 to 1975); the peptide-in-groove picture came in 1986 to 1987." | (searched) Nobel press release, 1996: lymphocytes "must recognize both the virus and certain self molecules, the major histocompatibility antigens", work done "1973 to 1975" at the John Curtin School, Canberra https://www.nobelprize.org/prizes/medicine/1996/press-release/ ; Nobel summary https://www.nobelprize.org/prizes/medicine/1996/summary/ ; Zinkernagel and Doherty, *Nature* 248:701 (1974); Townsend et al., *Cell* 44:959 (1986); Bjorkman et al., *Nature* 329:506 (1987) (for Codex to open) |
| 2 | should fix | 13d: "Both arms fail together." Model answer: "So both the antibody (humoral) arm and the cell-mediated arm weaken together". | **Absolute, and inconsistent with the design's own site error 3** ("progressively weakening"). Responses weaken as helper T cell numbers fall over years; some antibody responses (to T-independent antigens) and innate defences continue. The model answer is right; the spoken line overstates it. | "Both arms weaken together." Verdict chip: "B cells make antibodies: true. Only the T cell arm: not supported". | Janeway, *Immunobiology*, ch. 13 (HIV and AIDS) and T-independent antigens (ch. 10) (for Codex to open); L12's own Explain model ("untreated infection takes years") |
| 3 | minor | 13d: "Cytotoxic T cells need helper cytokines to multiply, so killing of infected cells weakens as well." Model: "Cytotoxic T cells need helper T cell cytokines to multiply into an effective clone". | "Need" is too strong. Some primary CD8 responses (for example to strongly inflammatory infections, with costimulation from activated dendritic cells) expand without CD4 help, although help strongly improves expansion and is needed for good memory. The marking point survives with a softer verb. | Spoken: "Cytotoxic T cells rely on helper cytokines to multiply, so killing of infected cells weakens as well." Model: "Cytotoxic T cells usually depend on helper T cell cytokines to multiply into an effective clone". Scene 6 ("make cytotoxic T cells multiply") is fine. | (searched) J Exp Med 177:1791 (1993): CD28 to B7 costimulation lets CD8 cytotoxic T cells be induced without exogenous help, and costimulation is needed at induction, not at the effector phase https://rupress.org/jem/article-pdf/177/6/1791/494594/1791.pdf ; Janeway ch. 9 (for Codex to open) |
| 4 | minor | Scene 9: "They don't need a matching receptor." Key note 5: "NK cells (innate) also kill infected cells, without a matching receptor." | NK cells have many receptors (inhibitory receptors for MHC I; activating receptors such as NKG2D for stress-induced molecules). What they lack is a randomly made receptor for one antigen. | Scene 9: "They don't have receptors made for one pathogen." Note 5: "... without a receptor for one pathogen." | (searched) Raulet, Marcus and Coscoy, *Immunological Reviews*, NK recognition of stress ligands and missing self https://mcb.berkeley.edu/labs2/raulet/sites/mcb.berkeley.edu.labs2.raulet/files/u7/171101%20RauletMarcusCoscoy-Immunological_Reviews.pdf.pdf ; review of missing self and induced self https://pmc.ncbi.nlm.nih.gov/articles/PMC2265965 |
| 5 | minor | Scene 3: "Every one of your cells cuts up some of the proteins it's making". | Nucleated cells display peptides on MHC I; mature red blood cells do not. The design's doubt (a) asks whether "almost" is needed. Yes: Module 7 commonly uses *Plasmodium*, which hides in red blood cells partly because they display no MHC I, so the absolute version can mislead later. | "Almost every one of your cells cuts up ..." Key note 2: "almost every cell displays ...". | Janeway ch. 6 (MHC I on nucleated cells) (for Codex to open) |
| 6 | minor | Site error 4 proposal: "39.9 million people were living with HIV globally in 2023 (UNAIDS)". | **Out of date at this check.** The UNAIDS fact sheet (data dated 27 July 2026) gives 41.0 million [35.3 to 47.5 million] people living with HIV in 2025. The 2025 edition gave 40.8 million [37.0 to 45.6 million] for 2024. The site's "38.4 million by 2023" is still wrong. | Proposed site wording: "41.0 million people were living with HIV globally in 2025 (UNAIDS, July 2026)." Recheck at the site fix. | (searched) UNAIDS fact sheet https://www.unaids.org/en/resources/fact-sheet ; 2026 fact sheet PDF https://www.unaids.org/sites/default/files/2026-07/2026_UNAIDS_Global_HIV_Factsheet_en.pdf ; 2025 fact sheet https://www.unaids.org/sites/default/files/2025-07/2025_Global_HIV_Factsheet_en.pdf |
| 7 | minor | Site error 8 proposal: "HIV was isolated in 1983 and confirmed as the cause of AIDS in 1984." | Correct in substance: Barré-Sinoussi, Montagnier and colleagues reported the virus (LAV) in May 1983; the 1984 papers (Gallo and colleagues) made the causal case widely accepted. Suggest "shown to cause" over "confirmed", which reads as a single event. | "HIV was isolated in 1983 and shown to cause AIDS in 1984." | Barré-Sinoussi et al., *Science* 220:868 (1983); Gallo et al., *Science* 224:500 (1984) (for Codex to open) |

No blocker. Two should-fix findings (1, 2); five minor (3 to 7).

## Facts confirmed (no change)

- **Doherty and Zinkernagel (hook).** Canberra, John Curtin School of Medical Research (ANU); experiments from 1973 (the Nobel release says 1973 to 1975); *Nature* 1974; 1996 Nobel Prize in Physiology or Medicine "for their discoveries concerning the specificity of the cell mediated immune defence". "Helped answer that, and later shared a Nobel Prize for it" is correct. (searched) Nobel press release and summary (links in finding 1).
- **Antibodies cannot act inside living cells (hook, 2).** Correct; they neutralise virus between cells, which scene 10 says.
- **MHC I presentation by infected cells (scene 3).** Nucleated cells break down some of the proteins they make and display peptides on MHC I; infected cells display viral peptides among self peptides. Correct, with finding 5.
- **T cell receptors (scene 4).** One specificity per T cell from random gene rearrangement; recognise peptide on MHC, not free antigen. Correct. T cells mature in the thymus (screen gloss): correct.
- **Activation by dendritic cells (scene 5).** Naive T cells are activated in lymph nodes by dendritic cells: helper T cells by peptide on MHC II, cytotoxic T cells by peptide on MHC I (including cross-presentation of engulfed antigen). Proliferation takes several days. Doubt (b): one cup shape for both MHC classes hides nothing an HSC answer needs; L12's own banner calls MHC I and II, CD4 and CD8 "beyond the syllabus". Correct.
- **Helper signals at activation, not at killing (scenes 5 to 7; site error 1).** Help and costimulation act when the cytotoxic T cell is activated; armed effector cells kill matching targets without further help. Correct. (searched) J Exp Med 1993 (finding 3).
- **Helper T cells (scene 6).** Linked help to B cells displaying peptide from the same antigen; cytokines (such as IL-2) support cytotoxic T cell expansion; IFN-γ activates macrophages to kill what they have engulfed. "Don't kill anything" is correct for the HSC roles.
- **Cytotoxic killing (scene 8).** Perforin forms pores; granzymes enter (through pores and by perforin-assisted uptake) and trigger apoptosis; the cell breaks into membrane-bound pieces that phagocytes clear; the T cell detaches and can kill again. "Others pass through" is a fair level. The Fas pathway is rightly omitted. Correct.
- **NK cells (scene 9).** Innate lymphocytes; killing follows when activating signals (stress-induced ligands such as those for NKG2D) outweigh inhibitory signals from MHC I; some viruses reduce MHC I to evade cytotoxic T cells, which exposes them to NK cells; NK cells act within the first days. Correct, with finding 4. (searched) links in finding 4.
- **Two arms (scene 10).** Humoral against extracellular pathogens; cell-mediated against infected cells; helper T cells support both; memory T cells form. Correct.
- **HIV (13c and site errors 5 and 6).** gp120 binds CD4 and then a co-receptor (CCR5, or CXCR4 later in infection); reverse transcriptase makes a DNA copy of the RNA genome; integrase inserts it into host DNA (the provirus); untreated infection lowers helper T cell counts over years. The card says only "infects and destroys helper T cells", which is correct. (searched) HIV entry and replication review https://pmc.ncbi.nlm.nih.gov/articles/PMC3563077 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC3908444
- **Attempt 1.** A simplified cytotoxic T cell killing assay with same-strain targets. The model is correct; the MHC restriction note is rightly author-only.
- **Memory aid.** "B cells make antiBodies; T cells Terminate or Tell" is sound as a role sorter. The bank's supporting notes (Bone marrow, Thymus) are correct.
- **Absolute words.** "antibodies can't reach it" and "can't touch it" (true for virus inside a living cell); "It only fits a piece that's displayed" (true for the T cell receptor); "Only the few T cells whose receptors fit" (true); "Healthy cells ... are left alone" (true for the matching cytotoxic T cell); "You need both" (fair); "Every one of your cells" (finding 5); "Both arms fail" (finding 2); "need helper cytokines" (finding 3). No others flagged.

## Logged site errors (each checked against the live page)

| # | Real? | Note |
| --- | --- | --- |
| 1 Cytotoxic activation merged with killing ("both must be present for killing to proceed") | Real | On the page, card 3 and the card 2 table ("+ T helper signal"). The correction is right. |
| 2 "can only be cleared by cell-mediated immunity"; "Only CTLs, not antibodies" | Real | Both on the page; the page's own misconception box says "The killers are cytotoxic T cells (CD8+) and NK cells". |
| 3 "systematically dismantling the entire adaptive immune response"; "collapse the entire immune defence network" | Real | Both on the page. |
| 4 "38.4 million people living with HIV globally by 2023" | Real | On the page. The proposed figure is itself now out of date (finding 6). |
| 5 "HIV integrates its genome into the host cell's DNA" | Real | On the page. The genome is RNA; the DNA copy is integrated. |
| 6 "CD4 is the lock; gp120 is the key" | Real (incomplete) | On the page. A co-receptor is also needed; macrophages and dendritic cells can also be infected. |
| 7 "MHC II: APCs only"; "found only on antigen-presenting cells" | Real | Both on the page. Thymic epithelial cells express MHC II, and other cells can be induced to (for example by IFN-γ). |
| 8 "By the time HIV was identified as the cause in 1983" | Real | On the page. Correction wording: see finding 7. |

## Exam style

Both items are HSC Section II style: NESA verbs "explain" and "evaluate", mark values (4 and 4), and the tag "HSC-style question, written for HSCScience". 13a is modelled on the classic killing assay and 13c on a real disease, both in original wording. Neither copies a NESA item that I know of. The models reward the cause and effect chain ("explain") and a judgement with reasons on both sides ("evaluate"); finding 2 and the learning review's finding 3 make the spoken feedback match that.

## YouTube metadata

The dotpoint is quoted verbatim with the right inquiry question; the title is 88 characters by script. The description's claims ("an Australian discovery: Doherty and Zinkernagel, Canberra, 1973") match the narration and are correct.

## Verdict

**Ready to voice after fixes 1 and 2** on science. Findings 3 to 5 are small wording fixes; findings 6 and 7 are site-record fixes.

## Resolution

Resolved by the author in `../lessons/bio-m7-b08.md` Revision 2 (22 Oct). Narration 5,755 characters by script, about 556 s.

| # | Action |
| --- | --- |
| 1 | Applied. Scene 4: "Doherty and Zinkernagel found the clue: a T cell recognises a virus only together with the cell's own display molecule. So it checks the display molecule and the piece together." They are credited with recognition of virus together with self MHC (1973 to 1975); the facts list and Decisions record that the peptide-in-the-groove picture came later (Townsend and colleagues 1986; Bjorkman and colleagues 1987). The Codex check line is updated to match. |
| 2 | Applied: "Both arms weaken together."; verdict chip "B cells make antibodies: true. Only the T cell arm: not supported". The facts list notes T-independent antibody responses and innate defences continue. |
| 3 | Applied: spoken "Cytotoxic T cells rely on helper cytokines to multiply"; model "usually depend on helper T cell cytokines"; answer row "rely on helper cytokines to multiply". Scene 6 unchanged. |
| 4 | Applied: scene 9 "They don't have receptors made for one pathogen."; note 5 "without a receptor for one pathogen". The facts list names inhibitory MHC I receptors and NKG2D. |
| 5 | Applied: "Almost every one of your cells"; key note 2 "almost every cell displays". Facts list cites the *Plasmodium* reason. |
| 6 | Applied to site error 4: "41.0 million people were living with HIV globally in 2025 (UNAIDS, July 2026)", range 35.3 to 47.5 million, recorded as **time-sensitive** (UNAIDS revises each July; recheck at the site fix). Codex check line updated. |
| 7 | Applied to site error 8: "HIV was isolated in 1983 and shown to cause AIDS in 1984." |

None declined. Ready for the Codex error check.
