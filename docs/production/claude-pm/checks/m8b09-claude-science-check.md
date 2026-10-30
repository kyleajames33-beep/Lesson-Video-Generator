# m8b09: independent science check

Checked 30 October 2026 by Codex, against Revision 1. Source SHA-256: `f1be586a139ef6e9e959968761dda9bf754ab2a4e48315807ef3409721a82644`. All narration lines, planned on-screen copy, attempts, feedback, notes, number lists and metadata were inspected. This is a source review; no laboratory experiment, voiced preview, full playback or human listening pass is claimed.

## Findings

| # | Severity | Location | Problem | Repair and source |
| --- | --- | --- | --- | --- |
| 1 | blocker | 4 | Most cells with changedDNA are said to be repaired or self-destructed. | Separate repairable damage from established harmless mutations and cancer-driving mutations. This is the central answer and must be corrected. [NCI genetics](https://www.cancer.gov/about-cancer/causes-prevention/genetics). |
| 2 | blocker | A1 | Any mutated proto-oncogene copy is assumed to be an activating oncogene. | Specify activating and loss-of-function effects and the sufficient normal suppressor copy. The gene name alone does not predict the mutation effect. [NCI cancer biology](https://www.cancer.gov/about-cancer/understanding/what-is-cancer). |
| 3 | blocker | 8-9 visual | A cell lineage described as malignant is drawn using the benign mole plate. | Use melanoma for the cancer lineage and a separate mole comparison. Common moles rarely become melanoma; do not show this as a required stage. [NCI mole facts](https://www.cancer.gov/types/skin/moles-fact-sheet). |
| 4 | should fix | 2; cycle ring | DNA copying is assigned to mitosis; spindle checkpoint sits beforeM. | CopyDNA inS phase beforeM. Put the spindle checkpoint insideM before sister chromatid separation. A chromosome must have sister kinetochores attached to opposite spindle poles, rather than an unqualified attachment "from both ends". [Open Stax cell cycle](https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle). |
| 5 | should fix | 4 and 12d | p53 is treated as the sole direct damage sensor and the only repair/death route. | Use "responds to DNA damage" and "weakens a key checkpoint". Loss increases the chance of survival/division; it does not abolish every repair or apoptotic mechanism. Do not add molecular pathways to learner copy. [NCI TP53 definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tp53-gene). |
| 6 | should fix | 11 and metadata source tags | Survival placeholders are unresolved, and relative survival must not be called a cure probability. | Use AIHW 2025 cancer series: five-year relative survival94% for 2017-2021, labelled as such. A thin early melanoma is often successfully removed, but the all-stage survival figure is not proof that surgery cured an individual. [AIHW melanoma commentary](https://www.aihw.gov.au/reports/cancer/cancer-data-in-australia/contents/cancer-data-commentaries/melanoma-of-the-skin-in-australia). |

**Counts: 3 blocker, 3 should fix.** These overlap the learning review where they concern the same repair.

## Exact syllabus check

investigate the causes and effects of non-infectious diseases in humans, including but not limited to:
- genetic diseases
- diseases caused by environmental exposure
- nutritional diseases
- cancer

B8-IQ2-01; this lesson covers cancer, not all listed categories. The official 2017 DOCX paragraph extract was checked word for word against the local syllabus ledger and design quotation. Source SHA-256: `0314aff268e37fea5e75dfeb689326c4bcfbc6ff07c0d960b5ebabc07cf3e3b7`; extract path: `out\research\continuity-2026-10-08\biology-2017-paragraphs.json`. Relevant paragraphs are recorded in `../assets/brief118-source-audit.json`. No substitution of 2025 syllabus content was made. [Official course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017).

## Fact and figure checks

- The normal growth role of proto-oncogenes, activating oncogene effects and usual two-hit loss of suppressor function are suitable simplifications with stated assumptions. BRCA1 increases risk without certainty. Do not imply every suppressor is a simple two-copy switch.
- UV exposure as the principal environmental cause of most cutaneous melanoma, melanocytes as pigment cells, andBRAF activation in many cases are supported. BRAF activation alone does not establish cancer; benign nevi can also carryBRAF changes. [NIH mole genetics](https://medlineplus.gov/genetics/understanding/traits/moles/).
- Invasion, vessel entry, survival, exit and growth at a new site describe metastasis. A lymph-node secondary remains melanoma. Most cancer deaths involve metastatic disease. These claims are supported; do not require every melanoma to reach a node before a distant organ.
- AIHW 2025 projections:17,443 new melanoma cases and 1,455 deaths; five-year relative survival94% in 2017-2021. The current report rates use the 2025 population. These are dated contextual data, not personal prognosis.
- A benign tumour not metastasising is correct while it is benign. Reject the author's proposed site correction claiming that possible future malignant transformation makes this statement false. Similarly, do not replace an Australian comparison with two risks measured to different ages and call them directly comparable.

## Recalculation

No student rate calculation. One activating allele versus two usual loss-of-function hits is an explanatory rule with assumptions, not a numerical proof for unspecified mutations. AIHW figures are checked in the science review, not inferred from the supplied survival placeholder.

Narration recount: 5,948 characters, 17 scenes; U+2014 count 0. No numerical or chemical spelling change was made to a source lesson. Exact scenes and counts are retained in the source audit.

## Site-error decisions

Read-only HTML was checked, with file hashes and normalized full text retained in `../assets/brief118-source-audit.json`. Confirmed new rows, and rejected or unresolved author suggestions, are in `../assets/brief118-site-corrections-proposed.md`. That file is for root integration; this review does not change the site or shared log. Missing source support is labelled unresolved rather than asserted false.

## Remaining checks

Resolve the numbered findings before recording. Exact procedural colour timing, current mixture SDS s, missing annual dataset rows and dash glyph certification remain open where stated. Question wording is HSC-style; originality against every historical exam has not been exhaustively established. Check the revised source, then the exact voiced preview for learning, timing, motion and captions. Human listening and release approval remain pending.

## Resolution

Resolved in `../lessons/bio-m8-b09.md` Revision 2 (31 Oct; root resolver, Claude PM). Findings 1 to 5 are merged with the learning review's repairs. Recount by script: 5,929 characters, about 569 s.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Blocker: most cells with changed DNA said to be repaired or self-destroyed | Fixed (as learning 1). Repairable damage, harmless established mutations and control-gene mutations are now separate in scene 4. | Scene 4; key notes 1 and 2; Numbers to verify (p53) |
| 2 | Blocker: mutated proto-oncogene assumed to be activating | Fixed (as learning 2). Both mutation effects and the sufficient normal suppressor copy are stated in the stem. | Scenes 12a, 12b; Practice item 1 |
| 3 | Blocker: malignant lineage drawn on the benign mole plate | Fixed (as learning 3). Melanoma plate for the lineage; mole only as a separate comparison, tagged "most moles never become melanoma". | Scenes 8, 9, 13; asset brief item 2 (flagged) |
| 4 | DNA copying assigned to mitosis; spindle checkpoint placed before M | Fixed (as learning 4). S phase before M; spindle gate inside M before separation; "attached to fibres from both poles". | Scenes 2 and 3 |
| 5 | p53 treated as the sole sensor and only route | Fixed (as learning 5). "Responds to DNA damage" (scene 4, gloss, Terms) and "weakens a key DNA-damage checkpoint" (12d). | Scenes 4 and 12d; Practice item 2 model |
| 6 | Survival placeholders unresolved; relative survival must not be a cure probability | Fixed. Scene 11 says "cutting it out is often successful". Grey tags: "AIHW, Cancer data in Australia 2025: about 17,400 new cases projected" (scene 8) and "AIHW 2025: five-year relative survival 94% (2017 to 2021), all stages; not a personal cure rate" (scene 11). Nothing numeric is spoken. | Scenes 8 and 11 visuals; Numbers to verify; Added beyond the site (d); error-check brief |

The check rejects proposed site corrections 3 (benign tumours) and 8 (the BRCA1 comparison across different ages); the design's Decisions now mark both as rejected, and the error-check brief no longer asks for them to be logged. The mnemonic describes the benign state, as the check confirms. Open item for the Codex error check: confirm the AIHW 2025 figures against the current release when the tags are built; the general remaining checks above carry over.
