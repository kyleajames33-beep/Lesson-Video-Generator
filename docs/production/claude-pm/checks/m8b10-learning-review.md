# m8b10: independent student learning review

Reviewed 30 October 2026 by Codex. Design Revision 1. Source: `docs\production\claude-pm\lessons\bio-m8-b10.md`. SHA-256: `c082982c1f441a415fcbaa3a3ef4799f5c4703fd0512213b36711ab6e65d4919`.

Inspected the written proposal, narration, visual plans, attempts, feedback, notes and metadata. Earlier lesson sources were compared for prerequisite and double-teaching checks. This is a proposal review. It does not establish plate fit, playback motion, caption fit or human listening. No real student explanations were collected. Repeat on the exact voiced preview before export.

Main learner question: **What do incidence, prevalence and mortality measure, and how can counts and rates disagree?**

## Findings

| # | Severity | Scene / location | Finding and learner question | Concrete repair |
| --- | --- | --- | --- | --- |
| 1 | blocker | 1 and You Tube description | **An aggregate age-adjusted rate is turned into a claim about every age.** A falling age-standardised rate does not establish that each age group has a lower rate. It is an average under a fixed age mix. The dual-axis graph cannot support the stronger spoken statement. | Use "Yet after allowing for the changing age mix, the cancer death rate is lower." Change the matching description. Keep the central counts/rates surprise. |
| 2 | should fix | 1, 8 and asset brief item 1 | **Replace the memory graph values with the exact released series.** The annual data are now independently extracted from official AIHW Book 2a, which includes both 2001 and 2025 standard populations. The design memory endpoint around160 is wrong for 2025 on the 2001 basis:142.7. Counts do not rise every single year:2003 dips. | Use ../assets/brief118-aihw-cancer-mortality.json,2001-standard column:1995 count 34216/rate 208.6;2025 projected count 53545/rate 142.7. Mark 2024-2025 as projections and use the full 31 rows. Keep the requested 2001 basis; do not substitute overview rates from 2025 standard. |
| 3 | should fix | 1 visual | **The visual forces a crossing between unrelated axes.** Counts and age-standardised rates have different units. Positioning their lines to cross in an X gives the crossing an apparent meaning it does not have. | Use aligned small graphs with the same time axis, or clearly separated counts/rate panels. Preserve each actual series and avoid choosing axis ranges to manufacture a crossing. Same narration. |
| 4 | should fix | 3 | **The population at risk is confused with a broad sex label.** "Females only" plus "the rest cannot develop it" is not an anatomical case definition. Not every female has a cervix, and some people registered otherwise do. It also distracts from the numerator/denominator point. | Use "For cervical cancer, define the population with a cervix." Screen: "state the case definition and matching population". Keep surveillance denominators defined by the dataset, rather than silently changing them. |
| 5 | should fix | 10c and 10d | **The data permit a possible explanation but the answer declares the cause.** Stable aggregate incidence and falling mortality fit longer survival, but do not establish improved treatment or unchanged risk at each age. Migration, age structure and diagnosis also matter. | Ask "Suggest an explanation consistent with the table". Feedback: "The pattern is consistent with people living longer with the disease, so existing cases build up while new-case rates stay similar." Keep one concise explanation, not an extra list of possible causes. |
| 6 | optional | 9 | **Generic graph instruction overlaps S06 rather than S05.** S05 teaches calculation layout, not this lesson-specific epidemiological denominator. That reuse is appropriate; the graph-type paragraph repeats S06. | Retain only the units and denominator check needed for these rates. If extra time is needed for the hook repair, use scene 9 as the cut. |

**Counts: 1 blocker, 4 should fix, 1 optional.** Counts overlap the science review where the same issue affects learning; do not add the two counts as distinct repairs.

## Learner trace and boundaries

The learner knows B06-B09 disease cases and S05 calculation layout. In the same city, changing only the numerator produces 200 new diagnoses, 5,500 existing cases and 20 deaths per 100,000. The tap/tank then explains accumulation, and age standardisation explains the hook after the graph is sourced.

S05 contributes the equation/substitute/solve/check habit, not a duplicate epidemiology lesson. G01 is later application. Graph-selection reminders largely overlap S06 and can be trimmed.

## Arithmetic and reading load

160/80000 x 100000 = 200 per 100,000/year; 4400/80000 = 0.055 = 5.5% = 5500 per 100,000; 16/80000 x 100000 = 20 per 100,000/year. 30/10000 and 60/20000 both give 300. A1 X =45, Y =60 per 100,000/year. A2 mortality 30 to 15 halves; prevalence 300 to 540 rises80%; incidence 60,61,59 is approximately steady.

Recount: 5,595 narration characters in 15 scenes. The source contains 0 em dashes. Counts use normalized line endings, lines beginning `> `, joined within each scene, and removed bold markers. Full per-scene counts and exact source hashes are in `../assets/brief118-source-audit.json`.

The current-case layout, dimmed previous work and retained question cards are useful. Every question specifies a visible ten-second countdown after speech. Feedback contains a crossed classic mistake; its exact duration is untested. Optional notes have a quiet copy/pause hold. The plan uses organisms, apparatus or data rather than text substitutes. Continuous motion has not been inspected at playback speed, so no motion pass is claimed.

## Timing and verdict

Resolve the blockers before recording. Retain the successful visual comparisons and approved lesson boundary. Science review remains separate; neither this source review nor art QA approves a recording or release.

## Resolution

Resolved in `../lessons/bio-m8-b10.md` Revision 2 (31 Oct; root resolver, Claude PM). Learning findings 1, 2, 4 and 5 overlap science findings 1, 2, 3 and 4 and are one edit each. Recount by script (sum of "> " lines per scene file, bold markers removed): 5,655 characters (Revision 1: 5,595), about 543 s.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Blocker: an aggregate age-adjusted rate turned into a claim about every age | Fixed (as proposed). Scene 1: "Yet after allowing for the changing age mix, the cancer death rate is lower." The main question, the YouTube description and Numbers to verify match. | Scene 1 narration; main question; YouTube description; Numbers to verify; error-check brief |
| 2 | Memory graph values; counts not monotonic | Fixed (as proposed). Both graphs use the brief 118 AIHW file, 2001-standard column, all 31 rows: deaths 34,216 to 53,545 (2003 dip drawn), rate 208.6 to 142.7, 2024 and 2025 dashed as projections. Scene 8 now says the crude rate "has barely moved" (190.0 to 193.6, from the same file). | Scene 1 and 8 visuals and scene 8 narration; Numbers to verify; asset brief task 1 (flagged, marked done) |
| 3 | Forced crossing between unrelated axes | Fixed (as proposed). Two stacked panels on one shared year axis; the lines never share an axis or cross. Same narration. | Scene 1 visual |
| 4 | Population at risk confused with a sex label | Fixed (as proposed). "For cervical cancer, that's people with a cervix." Bar label "people with a cervix"; tag "state the case definition and the matching population". | Scene 3 narration and visual; Added beyond the site (b) |
| 5 | Answer declares the cause | Fixed (as proposed). 10c: "suggest an explanation for the rise in prevalence that fits the table". 10d: "The pattern is consistent with people living longer with the disease, so existing cases build up while new-case rates stay similar." | Scenes 10c and 10d; card demand; model answer 2 |
| 6 | Graph-type advice overlaps S06 (optional) | Declined. Scene 9 carries the "collect and represent data" dotpoint, and cutting its graph sentence (154 characters) would leave 5,501 characters, at the floor. It stays the first reserve trim if a voiced take runs long. | Revision 2 changes block |
