# m8b11: independent student learning review

Reviewed 30 October 2026 by Codex. Design Revision 1. Source: `docs\production\claude-pm\lessons\bio-m8-b11.md`. SHA-256: `44df03d6933a4dacb5c5f1906473542af19c877b9ce294f66df574418f8b21ac`.

Inspected the written proposal, narration, visual plans, attempts, feedback, notes and metadata. Earlier lesson sources were compared for prerequisite and double-teaching checks. This is a proposal review. It does not establish plate fit, playback motion, caption fit or human listening. No real student explanations were collected. Repeat on the exact voiced preview before export.

Main learner question: **How should a student judge an epidemiological method and its benefit?**

## Findings

| # | Severity | Scene / location | Finding and learner question | Concrete repair |
| --- | --- | --- | --- | --- |
| 1 | should fix | 2, 4 and 11b | **Random allocation and matching are described as guarantees.** Chance does not ensure other differences even out in any particular trial. Matching only makes selected factors comparable and still needs suitable analysis; "cannot explain" is stronger than the method establishes. | Use "chance helps balance other differences" and "matching made age and sex more comparable". In feedback use "matching reduced differences in age and sex". These are shorter replacements. |
| 2 | should fix | 6 and 7 | **The historical cohort is called disease-free at enrolment.** The 1951 questionnaire recorded smoking and later deaths. It did not establish that everyone was free of preclinical lung cancer. "Before anyone fell ill" overstates temporality and makes the bias argument absolute. | Use "Smoking was recorded before the later deaths" and "recorded prospectively, rather than reconstructed after death". Keep the forward timeline. No longer speech. |
| 3 | should fix | 6 chart | **The published rates need their population and standardisation.** The 1954 figures are age-standardised annual rates for men aged 35 and above, not all people or all doctors. Without this, the student cannot evaluate what the bars represent. | Axis: "age-standardised lung-cancer deaths per 1,000 men aged 35+ per year". Bars 0.00, 0.48, 0.67, 1.14 for none, 1-14, 15-24, 25+ grams/day. Screen repair only. |
| 4 | should fix | 8 | **The quitting result is not given its endpoint.** The cited 2004 conclusion concerns excess all-cause mortality and years of life. In a lung-cancer lesson, "almost all of the extra risk" can be read as a precise lung-cancer estimate from 1954. | Use "The fifty-year follow-up found that quitting around thirty avoided almost all the extra risk of dying early." Label the survival sketch "all-cause survival, 2004 follow-up". Cut "Removing the exposure lowered the disease" to keep length neutral. |
| 5 | should fix | 11c | **The transfer question states an incorrect universal flour rule and narrows neural tube defects to the spinal cord.** Organic bread-making flour is exempt. Neural tube defects also affect the developing brain. Neither correction needs another teaching section. | Card: "From 2009 Australia required non-organic wheat flour for bread-making to contain folic acid." Voice: "neural tube defects, where the early brain or spinal cord does not close properly". Replace the old clauses, with the extra words paid for by shortening "the groups with the highest rates" to "higher-risk groups". |
| 6 | optional | 3 | **The small ever-smoking contrast needs its intended conclusion visible.** 647/649 and 622/649 are both high. A learner may judge the link from those rows alone and miss the heavy-smoking evidence. | Keep the existing heavy-smoking contrast, but write the actual heavy-smoking category and its counts before describing it as stronger evidence. Do not use an unscaled "shape only" bar as quantitative support. |

**Counts: 0 blocker, 5 should fix, 1 optional.** Counts overlap the science review where the same issue affects learning; do not add the two counts as distinct repairs.

## Learner trace and boundaries

From B10 rates and B07 exposure risk, the learner starts with 1950 disease groups looking back, then a 1951 cohort looking forward, then several causal evidence lines. The four-step method frame is applied to hair dye, and the benefit chain transfers to fortification. Historical timeline and endpoint labels need the listed repairs.

B10 leaves study design to this lesson. B07 mechanism and Australian smoking trends are brief recalls. G01 follows this lesson and applies the vocabulary; no need to move G01 back.

## Arithmetic and reading load

9287/612 = 15.1748, so about fifteenfold is correct. 1950:647/649 =99.69%, 622/649 =95.84%; the latter is the smokers among 649 male controls, not the number of all controls. 1954 age-standardised lung-cancer rates:0.00,0.48,0.67,1.14 per 1,000 men35+/year. 1951-2001 =50 years. The 2004 cessation gains3,6,9,10 years correspond to ages60,50,40,30.

Recount: 5,970 narration characters in 16 scenes. The source contains 0 em dashes. Counts use normalized line endings, lines beginning `> `, joined within each scene, and removed bold markers. Full per-scene counts and exact source hashes are in `../assets/brief118-source-audit.json`.

The current-case layout, dimmed previous work and retained question cards are useful. Every question specifies a visible ten-second countdown after speech. Feedback contains a crossed classic mistake; its exact duration is untested. Optional notes have a quiet copy/pause hold. The plan uses organisms, apparatus or data rather than text substitutes. Continuous motion has not been inspected at playback speed, so no motion pass is claimed.

## Timing and verdict

The design is already about 568-570 seconds. Repairs above replace existing clauses or screen labels; no new scene or hold is required. Named cuts are given where longer wording is suggested. Recount and time the exact speech after author resolution. Resolve the should-fix findings before recording. Retain the successful visual comparisons and approved lesson boundary. Science review remains separate; neither this source review nor art QA approves a recording or release.

## Resolution

Resolved in `../lessons/bio-m8-b11.md` Revision 2 (31 Oct; root resolver, Claude PM). Learning findings 1 to 5 overlap science findings 1 to 5 and are one edit each. Recount by script (sum of "> " lines per scene file, bold markers removed): 5,912 characters (Revision 1: 5,970), about 564 s, under the 570 s cap. Named cut: scene 8's "Removing the exposure lowered the disease."

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Randomisation and matching described as guarantees | Fixed (as proposed). Scene 2: "chance decides the groups, which helps balance other differences" (tag "no guarantee"). Scene 4: "matching made age and sex more comparable". 11b: "matching reduced differences in age and sex". | Scenes 2, 4, 11b; Terms; Stops line; key note 1; A1 model; teaching checks |
| 2 | Cohort called disease-free at enrolment | Fixed (as proposed). "Smoking was recorded before the later deaths" (6) and "recorded before the deaths, not reconstructed afterwards" (7). | Scenes 6 and 7 narration and frame strip; Stops line; key note 2 |
| 3 | 1954 rates lack population and standardisation | Fixed (as proposed, screen only). Axis "age-standardised lung-cancer deaths per 1,000 men aged 35+ per year"; bars 0.00, 0.48, 0.67, 1.14 with values written; tag "Doll and Hill 1954, Table IV". | Scene 6 visual; Numbers to verify |
| 4 | Quitting result lacks its endpoint | Fixed (as proposed). "The fifty-year follow-up found that quitting around thirty avoided almost all the extra risk of dying early." Sketch labelled "all-cause survival, 2004 follow-up". "Removing the exposure lowered the disease" cut. | Scene 8 narration and visual; key note 3 |
| 5 | Universal flour rule; NTDs narrowed to the spinal cord | Fixed (as proposed). "early brain or spinal cord does not close properly"; "non-organic Australian bread flour had to contain folic acid"; "most in higher-risk groups". | Scenes 11c and 11d; card stem; A2 model |
| 6 | Heavy-smoking contrast needs its counts (optional) | Taken in part. The spoken contrast, its written row and the tag "both groups mostly smoked; the difference is in how much" stay; no unscaled bar. The 1950 heavy-smoking category and counts were not supplied, so they are not invented; a scaled chart is added only if the Codex error check supplies them (open item). | Scene 3 visual; Numbers to verify; Revision 2 changes |
