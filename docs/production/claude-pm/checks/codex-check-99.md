# Brief 99: error-only check

Revision 2 designs, checked 22 October 2026.

## skills-s05

1. **Research findings table: the 2021 significant-figures criterion is in the four-mark band.**
   - Old: "2021 Q27(a) in a 2 to 3 mark band".
   - Corrected: "2021 Q27(a) in the 4-mark band".
   - The four-mark criterion includes correct significant figures. The two-to-three-mark band requires some relevant steps and does not name significant figures. The scene 8 Revision 2 tag already says "other criteria", so it does not need changing for this finding. [NESA Chemistry 2021 marking guidelines, page 8, Q27(a)](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2021-hsc-chemistry-mg.pdf).

## chem-m7-c01

1. **Narration length estimate: the stated headroom disagrees with its runtime.**
   - Old: "About 30 s of headroom remains under 9.5 minutes".
   - Corrected: "About 13 s of headroom remains under 9.5 minutes".
   - This section estimates 557 s. The 9.5-minute limit is 570 s, leaving 13 s. Source: the runtime calculation in this design's "Narration length estimate" section.

## chem-m7-c02

## bio-m7-b01

1. **Scene 4 and key note 2: a peptidoglycan wall is not present in every bacterium.**
   - Old: "It's a prokaryote, with its DNA lying in the cytoplasm, and a wall containing a material called peptidoglycan. The tuberculosis bacterium is a rod a few thousandths of a millimetre long."
   - Corrected: "It's a prokaryote, with its DNA lying in the cytoplasm. The tuberculosis bacterium has a wall containing a material called peptidoglycan, and is a rod a few thousandths of a millimetre long."
   - In key note 2, change "bacteria (prokaryotes, no nucleus, peptidoglycan wall; tuberculosis)" to "bacteria (prokaryotes, no nucleus; the tuberculosis bacterium has a peptidoglycan wall)". The current wording makes the wall a universal bacterial feature. Mycoplasmas are disease-causing bacteria without cell walls, so this also matters to the treatment principle. The replacement uses the actual bacterium already shown. [CDC: mycoplasmas lack cell walls](https://www.cdc.gov/mycoplasma/hcp/clinical-care/).

2. **Scene 6: viruses are not universally smaller than every cell.**
   - Old: "Now go smaller than any cell."
   - Corrected: "Now zoom in to a smaller example."
   - Change the corresponding cue in the visual and Revision 2 summary. The SARS-CoV-2 example is smaller than the tuberculosis cell shown. The opening sentence instead makes a universal size claim, contradicted by giant viruses. [Primary discovery of the 1.5 µm Pithovirus particle](https://pmc.ncbi.nlm.nih.gov/articles/PMC3964051/).

3. **Assets: a stale target description assigns ribosomes to penicillin.**
   - Old: "the generic bacterium whose wall and ribosomes pulse as penicillin's target".
   - Corrected: "the generic bacterium whose wall and ribosomes pulse as examples of targets for different antibiotics".
   - Scene 9's visual correctly labels the class "antibiotics". Keep that distinction in the asset instruction: penicillin acts on cell-wall synthesis, not ribosomes. [Primary penicillin-binding-protein study](https://pmc.ncbi.nlm.nih.gov/articles/PMC432906/).

4. **B7-IQ1-01 practical flag.**
   - Old in `docs/production/programme/syllabus/bio-2017-y12.json`: `"depthStudyOrPractical": false`.
   - Corrected flag: `"depthStudyOrPractical": true`.
   - Its examples include "design and conduct a practical investigation relating to the microbial testing of water or food samples". This is a requirement within the dotpoint, even though B01 teaches only the classification component. The ledger has not been edited. [Official Biology Stage 6 syllabus, page 54](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx).

5. **Decisions item 4: the proposed Snow death count misreads the original table.**
   - Old author note: "Snow's account gives 127 deaths in the first three days".
   - Corrected: "Snow's Table I records 127 deaths on 2 September 1854 alone."
   - Table I gives 70 deaths on 1 September, 127 on 2 September and 76 on 3 September. The site's weekly figure is wrong, but the design's proposed replacement is wrong too. This note is not used in the narration. [Snow, On the Mode of Communication of Cholera, 1855, Table I](https://www.gutenberg.org/files/72894/72894-h/72894-h.htm).

## bio-m7-b02


1. **Reference-facts paragraph: the WHO source URL is incomplete.**
   - Old: `https://www.who.int/news/item/12-11-2025`.
   - Corrected source: [WHO Global Tuberculosis Report 2025, section 1.2: TB mortality](https://www.who.int/teams/global-programme-on-tuberculosis-and-lung-health/tb-reports/global-tuberculosis-report-2025/tb-disease-burden/1-2-tb-mortality).
   - The old URL returns 404. The report confirms the stated 2024 total of 1.23 million deaths, including 150,000 among people with HIV. The number does not need changing.

## Resolution

Resolved 22 October 2026 by the resolving author. All five designs are now Revision 3, "ready to voice". Narration counted by script (only lines starting `> `, bold markers removed).

### skills-s05 (Revision 3; narration 6,109 characters, about 566 s)

1. **Applied.** The research findings table and the Codex request list now say "2021 Q27(a) in the 4-mark band". Scene 8 already says "other criteria", so no learner copy changes.

### chem-m7-c01 (Revision 3; narration 6,140 characters, about 557 s)

1. **Applied.** The length section now says "About 13 s of headroom remains under 9.5 minutes". No learner copy changes.

### chem-m7-c02 (Revision 3; narration 6,027 characters, about 548 s)

No errors reported. Status updated only: "No changes: Codex check 99 found no errors in this design."

### bio-m7-b01 (Revision 3; narration 5,943 characters, about 570 s)

1. **Applied.** Scene 4: "It's a prokaryote, with its DNA lying in the cytoplasm. The tuberculosis bacterium has a wall containing a material called peptidoglycan, and is a rod a few thousandths of a millimetre long." Key note 2: "bacteria (prokaryotes, no nucleus; the tuberculosis bacterium has a peptidoglycan wall)". For consistency the bacteria reference fact now says the wall belongs to most bacteria (mycoplasmas have none).
2. **Applied.** Scene 6 opens "Now zoom in to a smaller example."; the visual cue and the Revision 2 visual-fixes summary match.
3. **Applied.** The `b6a-bacterium-v1.png` asset entry now says its wall and ribosomes pulse "as examples of targets for different antibiotics".
4. **Not a design error; note for root.** B7-IQ1-01 in `docs/production/programme/syllabus/bio-2017-y12.json` should change from `"depthStudyOrPractical": false` to `true`, because its examples include designing and conducting a microbial testing investigation of water or food samples. B01 still teaches only the classification part. The ledger was not edited in this pass. Root to update the ledger and decide where the practical is routed.
5. **Applied.** Decisions item 4 now reads "Snow's Table I records 127 deaths on 2 September 1854 alone." Not used in narration.

Length offset: items 1 and 2 added 8 characters to a design at the 9.5-minute cap. Scene 6's last sentence was shortened to "... tobacco mosaic virus, a rod of RNA in a protein coat." (it now matches the on-screen tag). Net change is 2 characters fewer.

### bio-m7-b02 (Revision 3; narration 5,919 characters, about 568 s)

1. **Applied.** The TB-today reference fact now cites WHO Global Tuberculosis Report 2025, section 1.2: TB mortality (the full URL), in place of the 404 press-release URL. The 1.23 million figure is unchanged and is not spoken.

No em dashes in any of the five designs (checked by script).
