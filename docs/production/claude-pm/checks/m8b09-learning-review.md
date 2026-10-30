# m8b09: independent student learning review

Reviewed 30 October 2026 by Codex. Design Revision 1. Source: `docs\production\claude-pm\lessons\bio-m8-b09.md`. SHA-256: `f1be586a139ef6e9e959968761dda9bf754ab2a4e48315807ef3409721a82644`.

Inspected the written proposal, narration, visual plans, attempts, feedback, notes and metadata. Earlier lesson sources were compared for prerequisite and double-teaching checks. This is a proposal review. It does not establish plate fit, playback motion, caption fit or human listening. No real student explanations were collected. Repeat on the exact voiced preview before export.

Main learner question: **Why do most changed cells avoid cancer, and how can melanoma invade and spread?**

## Findings

| # | Severity | Scene / location | Finding and learner question | Concrete repair |
| --- | --- | --- | --- | --- |
| 1 | blocker | 4 and its hook payoff | **DNA damage and an established mutation are treated as the same thing.** The first answer is "Most changed cells are repaired, or they remove themselves". Many healthy cells retain harmless mutations; DNA repair does not generally reverse every established sequence variant. The learner is taught that changed DNA should always trigger removal. | Use: "DNA damage can stop the cycle for repair, or trigger controlled cell death. And many mutations do not affect the genes that control division. Cancer usually needs several changes that defeat those controls." Use the existing scene-5 transition; remove "the fault is never copied" and the repeated two-chip summary to keep length neutral. |
| 2 | blocker | 12a and 12b | **An unspecified mutation is assumed to activate a gene.** Any mutation in a proto-oncogene need not make a stuck-on protein, and any tumour-suppressor mutation need not destroy function. The stem does not provide the condition required by its model answer. | Specify "Cell A has an activating mutation that keeps one proto-oncogene switched on. Cell B has a mutation that stops one copy of a tumour suppressor working; one normal copy is sufficient for its function." Retain the intended comparison, avoiding a new exception lecture. Cut the scene-2 full mitosis recap to pay for the slightly longer stem. |
| 3 | blocker | 8 to 9 | **The cancer lineage turns into the plate that is then labelled benign.** After BRAF activation plus lost brakes, scene 8 fades to m8-skin-mole-v1, then scene 9 calls that same block benign. This makes the sustained case contradict itself and implies a routine mole-to-melanoma progression. | Keep melanoma as the main case. Use the existing melanoma plate for the cancer lineage in scene 8; introduce the mole only as a separate comparison in scene 9. State "Compare that with a benign mole". Do not cross-fade benign to malignant as a necessary progression. |
| 4 | should fix | 2 and 3 | **The mitosis recap puts chromosome copying inside mitosis.** Students have been taught that DNA is copied before division. The loop then correctly places S phase before M, so the lesson contradicts its prerequisite. The spindle gate is also drawn at the entrance to M, rather than within M before chromatid separation. | Use "Before mitosis, a cell copies its DNA. Mitosis separates the chromosome copies into two nuclei." Put the spindle gate inside the M sector before separation, keeping G2/M as the separate entry gate. This shortens speech. |
| 5 | should fix | 12d | **Removing p53 is said to remove every checkpoint and every repair/apoptosis route.** "The checkpoint cannot stop", "it is not repaired" and "does not destroy itself" are absolute. The useful application is weakened protection and increased mutation survival, not certainty. | Use "Losing p53 weakens a key DNA-damage checkpoint. More damaged cells can survive and divide, so mutations can build up." Replace the first two sentences and matching answer lines. Keep the infection-versus-cancer distinction. |
| 6 | optional | 6 and 7 | **The pedals carry the idea without extra named-gene memorisation.** BRAF, CDKN2A, BRCA1 and p53 can crowd the same conceptual comparison. | Keep p53 spoken as the worked brake. Let BRAF and BRCA1 remain small contextual tags if timing or term load fails in playback. Do not add a separate gene lesson. |

**Counts: 3 blocker, 2 should fix, 1 optional.** Counts overlap the science review where the same issue affects learning; do not add the two counts as distinct repairs.

## Learner trace and boundaries

From mitosis and somatic mutation, the learner follows damage protection, several driver changes in one lineage, activation of growth signalling, loss of brakes, invasion, vessel entry and a secondary melanoma deposit. The clone tree and vessel sequence are purposeful. The distinction between harmless mutation, repairable damage and a driver must come first.

B06 classified cancer and B07 explained UV damage. Keep each as one recall. The full four-stage mitosis recap can be cut to fund the corrected A1. Melanoma remains the approved main case.

## Arithmetic and reading load

No student rate calculation. One activating allele versus two usual loss-of-function hits is an explanatory rule with assumptions, not a numerical proof for unspecified mutations. AIHW figures are checked in the science review, not inferred from the supplied survival placeholder.

Recount: 5,948 narration characters in 17 scenes. The source contains 0 em dashes. Counts use normalized line endings, lines beginning `> `, joined within each scene, and removed bold markers. Full per-scene counts and exact source hashes are in `../assets/brief118-source-audit.json`.

The current-case layout, dimmed previous work and retained question cards are useful. Every question specifies a visible ten-second countdown after speech. Feedback contains a crossed classic mistake; its exact duration is untested. Optional notes have a quiet copy/pause hold. The plan uses organisms, apparatus or data rather than text substitutes. Continuous motion has not been inspected at playback speed, so no motion pass is claimed.

## Timing and verdict

The design is already about 568-570 seconds. Repairs above replace existing clauses or screen labels; no new scene or hold is required. Named cuts are given where longer wording is suggested. Recount and time the exact speech after author resolution. Resolve the blockers before recording. Retain the successful visual comparisons and approved lesson boundary. Science review remains separate; neither this source review nor art QA approves a recording or release.

## Resolution

Resolved in `../lessons/bio-m8-b09.md` Revision 2 (31 Oct; root resolver, Claude PM). Learning findings 1 to 5 overlap science findings 1 to 5 and are one edit each. Recount by script (sum of "> " lines per scene file, bold markers removed): 5,929 characters (Revision 1: 5,948), about 569 s, under the 570 s cap. Named cut: scene 2's four-stage mitosis recap pays for the longer 12a stem.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Blocker: DNA damage and an established mutation treated as the same thing | Fixed (as proposed). Scene 4: "p53 responds to DNA damage. It stops the cycle, so repair enzymes can fix the damage. If the damage is too great, p53 triggers apoptosis ... And many mutations that do slip through don't affect the genes that control division. That's the first answer. Cancer usually needs several changes that defeat those controls." "The fault is never copied" and the two-chip summary are removed; scene 5 opens "Those changes usually build up in the same line of cells." | Scenes 4 and 5 narration and visual; Stops line; key notes 1 and 2; teaching checks; error-check brief |
| 2 | Blocker: unspecified mutation assumed to activate or destroy a gene | Fixed (as proposed). 12a: "Cell A has an activating mutation that keeps one copy of a proto-oncogene switched on. Cell B has a mutation that stops one copy of a tumour suppressor gene working, and one normal copy is enough for that gene's job." Card stem, 12b underlines and the model answer match. | Scenes 12a and 12b; Practice question and feedback item 1 |
| 3 | Blocker: the cancer lineage cross-fades to the plate then called benign | Fixed (as proposed). Scene 8 cross-fades normal skin to `m8-skin-melanoma-v1.png`, never to the mole. Scene 9 opens "Compare that with a benign mole." with the mole as a separate side-by-side block, grey tag "most moles never become melanoma"; no mole-to-melanoma cross-fade anywhere. Scene 13's thumbnails no longer use the mole. Asset brief item 2 updated (flagged). | Scenes 8, 9 and 13 visuals; Assets; Codex asset brief item 2 |
| 4 | Mitosis recap puts DNA copying inside mitosis; spindle gate at the entry to M | Fixed (as proposed). Scene 2: "Before mitosis, a cell copies its DNA. Mitosis separates the chromosome copies into two nuclei." Plate labels match. Scene 3's spindle gate sits inside the "divide" sector before separation; the G2/M gate stays at the entry. "Attached to fibres from both poles". | Scenes 2 and 3 narration and visual |
| 5 | p53 loss said to remove every checkpoint, repair and apoptosis route | Fixed (as proposed). 12d: "Losing p53 weakens a key DNA-damage checkpoint. More damaged cells can survive and divide, so mutations can build up in that line." Answer lines and the model answer match; the infection-versus-cancer distinction is kept. | Scene 12d narration and visual; Practice item 2 model |
| 6 | Named genes may crowd the pedal comparison (optional) | Kept as designed, with a fallback. p53 stays the spoken worked brake; BRAF and BRCA1 stay one spoken mention each with small tags. If the voiced preview shows term overload, both become screen tags only. | Revision 2 changes block |
