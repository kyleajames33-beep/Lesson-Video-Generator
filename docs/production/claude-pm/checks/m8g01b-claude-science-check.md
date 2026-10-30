# m8g01b: independent science check

Checked 30 October 2026 by Codex, against Revision 1. Source SHA-256: `ae391584324fb3e98e85b4bace9d1e89c06b3dad961418f2680754b9fe93a506`. All narration lines, planned on-screen copy, attempts, feedback, notes, number lists and metadata were inspected. This is a source review; no laboratory experiment, voiced preview, full playback or human listening pass is claimed.

## Findings

| # | Severity | Location | Problem | Repair and source |
| --- | --- | --- | --- | --- |
| 1 | should fix | 4a-b | Ever-diagnosed history is treated as present disease prevalence. | Use current diagnosed disease wording or label the measured attribute as diagnosis history. [CDC morbidity measures](https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson3/section2.html). |
| 2 | should fix | 2c | Age standardisation is said to settle the risk claim. | It adjusts for age composition, not all competing causes or selection effects. Use fairer age comparison, as learning finding 2. |
| 3 | should fix | 3c | The graph explanation invites a same-year incidence/mortality survival interpretation. | State that the deaths and diagnoses are not the same cohort. Do not compute survival from their ratio. [AIHW survival methods](https://www.aihw.gov.au/reports/cancer/cancer-data-in-australia/contents/technical-notes/methods). |
| 4 | should fix | 4b-d | Quick cross-sectional online sampling is said to measure prevalence well without naming the sampled population. | It describes respondents and can have selection and self-report bias. Size alone does not fix representativeness. [NICE study-design glossary](https://www.nice.org.uk/process/pmg4/chapter/appendix-d-glossary-of-study-designs). |

**Counts: 0 blocker, 4 should fix.** These overlap the learning review where they concern the same repair.

## Exact syllabus check

collect and represent data to show the incidence, prevalence and mortality rates of non-infectious diseases, for example:
- nutritional diseases
- diseases caused by environmental exposure

analyse patterns of non-infectious diseases in populations, including their incidence and prevalence, including but not limited to:
- nutritional diseases
- diseases caused by environmental exposure

evaluate the method used in an example of an epidemiological study

Practice application of B8-IQ2-02, B8-IQ3-01 and B8-IQ3-03. Do not imply illustrative data are the primary collection component. The official 2017 DOCX paragraph extract was checked word for word against the local syllabus ledger and design quotation. Source SHA-256: `0314aff268e37fea5e75dfeb689326c4bcfbc6ff07c0d960b5ebabc07cf3e3b7`; extract path: `out\research\continuity-2026-10-08\biology-2017-paragraphs.json`. Relevant paragraphs are recorded in `../assets/brief118-source-audit.json`. No substitution of 2025 syllabus content was made. [Official course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017).

## Fact and figure checks

- Q1 and Q3 are explicitly illustrative. The numerical rates and percentages are right. 9% versus4% is2.25 times; "about twice" is acceptable. This is prevalence ratio, not an incident relative risk or evidence of causation.
- Q2 is labelled illustrative data shaped on Australian trends, not an exact AIHW series. Keep that label visible in the completed graph caption as well as the question. The ten-point line graph must use five-year spacing at the final interval. Never replace the coded graph withAI art.
- Cross-sectional measurement cannot establish timing in this survey. Possible reverse causality, self-report, selection and confounding are appropriate critiques. The proposed cohort records baseline exposure in people without diabetes and follows new disease, appropriately improving the temporal evidence.
- B11 is a prerequisite for Q3's four-step frame, cohort comparison and confounder concept. The settled placement after B11 is correct. Longer walkthroughs are permitted because these worked answers are the lesson content.

## Recalculation

P incidence 6600/1200000 x 100000 =550; mortality 300/1200000 x 100000 =25. Q incidence 1050/150000 x 100000 =700; mortality 54/150000 x 100000 =36. Population ratio8; cases ratio6.2857, so more than six is true. Q3:36/400 x100 =9%;64/1600 x100 =4%; ratio2.25, reasonably about twice. Q2 x gaps10,10,10,5 years; y0-60 in 10s fits all values; final incidence 52 to 50 is a3.85% decrease. All graph points require exact scaled positions.

Narration recount: 5,668 characters, 15 scenes; U+2014 count 0. No numerical or chemical spelling change was made to a source lesson. Exact scenes and counts are retained in the source audit.

## Site-error decisions

Read-only HTML was checked, with file hashes and normalized full text retained in `../assets/brief118-source-audit.json`. Confirmed new rows, and rejected or unresolved author suggestions, are in `../assets/brief118-site-corrections-proposed.md`. That file is for root integration; this review does not change the site or shared log. Missing source support is labelled unresolved rather than asserted false.

## Remaining checks

Resolve the numbered findings before recording. Exact procedural colour timing, current mixture SDS s, missing annual dataset rows and dash glyph certification remain open where stated. Question wording is HSC-style; originality against every historical exam has not been exhaustively established. Check the revised source, then the exact voiced preview for learning, timing, motion and captions. Human listening and release approval remain pending.

## Resolution

Resolved in `../lessons/bio-m8-g01.md` Revision 2 (31 Oct; root resolver, Claude PM). Each finding is the same repair as the learning finding with its number. Recount by script: 5,798 characters, about 565 s.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Ever-diagnosed history treated as present prevalence | Fixed (as learning 1). Current diagnosed disease wording in card, speech and underlines. | Scenes 4a to 4c |
| 2 | Age standardisation said to settle the risk claim | Fixed (as learning 2). "Would make that comparison fairer". | Scene 2c |
| 3 | Graph invites a same-year survival reading | Fixed (as learning 3). Narration and a grey tag say the deaths and diagnoses are not the same people; no survival ratio is computed. | Scene 3c; Q2 model |
| 4 | Online sample said to measure prevalence well | Fixed (as learning 4). "Prevalence among the respondents"; size reduces random uncertainty but not selection bias. | Scenes 4b, 4d; Q3 model |

Fact notes applied: the completed Q2 graph carries the "illustrative data, based on the pattern of Australian statistics" caption under its title, with 2020 at its true five-year spacing (already specified). Question 3's dependence on b11 is confirmed, so the route-order fallback is withdrawn. No number changed (9% against 4%, 2.25 times, stays "about twice"). No new open items.
