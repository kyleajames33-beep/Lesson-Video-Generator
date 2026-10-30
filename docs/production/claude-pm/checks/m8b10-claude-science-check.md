# m8b10: independent science check

Checked 30 October 2026 by Codex, against Revision 1. Source SHA-256: `c082982c1f441a415fcbaa3a3ef4799f5c4703fd0512213b36711ab6e65d4919`. All narration lines, planned on-screen copy, attempts, feedback, notes, number lists and metadata were inspected. This is a source review; no laboratory experiment, voiced preview, full playback or human listening pass is claimed.

## Findings

| # | Severity | Location | Problem | Repair and source |
| --- | --- | --- | --- | --- |
| 1 | blocker | 1 and description | Age-standardised mortality decline does not establish lower mortality at every given age. | Use aggregate adjusted-rate wording. [AIHW methods](https://www.aihw.gov.au/reports/cancer/cancer-data-in-australia/contents/technical-notes/methods). |
| 2 | should fix | hook graph and source-data request | The design still has memory values and a monotonic count-graph instruction. | Exact Table S2a. 1 series is now in ../assets/brief118-aihw-cancer-mortality.json. The requested 2001-standard rates are available in column H:208.6 in 1995 and 142.7 in 2025; deaths 34216 and 53545.2024-2025 areprojections. 2003 count is below 2002, so draw the actual series. Both 2001 and 2025 standard columns exist; the current overview uses 2025 but that does not prevent using 2001. [Official workbook](https://www.aihw.gov.au/getmedia/c5b5798e-a812-420a-87c4-5619b6a429ab/CDiA-2025-Book-2a-Cancer-mortality-and-age-standardised-rates-by-age-5-year-groups.xlsx). |
| 3 | should fix | 3 | The cervical-cancer risk group is expressed as an absolute sex-category exclusion. | Use anatomy-based explanation and retain the actual denominator definition of any source series. |
| 4 | should fix | 10d | Stable crude incidence is called unchanged risk, and lower mortality is said to prove longer survival. | Use a possible explanation consistent with the dataset, as learning finding 5. Compare age-adjusted or age-specific risks before claiming unchanged risk. [CDC frequency measures](https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson3/section2.html). |
| 5 | should fix | 7 and tag | The pancreatic survival figure is dated to an older release and must be named relative survival. | Use a dated AIHW/Cancer Australia series, not an unqualified1-in 8 probability. The current figure is about 14% for 2017-2021; label the period and measure. [Cancer Australia pancreatic statistics](https://www.canceraustralia.gov.au/cancer-types/pancreatic-cancer/statistics). |

**Counts: 1 blocker, 4 should fix.** These overlap the learning review where they concern the same repair.

## Exact syllabus check

collect and represent data to show the incidence, prevalence and mortality rates of non-infectious diseases, for example:
- nutritional diseases
- diseases caused by environmental exposure

B8-IQ2-02; quotation and examples are preserved; the exact 31 annual mortality rows are now provided in the brief118data artifact. The official 2017 DOCX paragraph extract was checked word for word against the local syllabus ledger and design quotation. Source SHA-256: `0314aff268e37fea5e75dfeb689326c4bcfbc6ff07c0d960b5ebabc07cf3e3b7`; extract path: `out\research\continuity-2026-10-08\biology-2017-paragraphs.json`. Relevant paragraphs are recorded in `../assets/brief118-source-audit.json`. No substitution of 2025 syllabus content was made. [Official course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017).

## Fact and figure checks

- Worked and attempt arithmetic is checked below. The 80,000 population is acceptable as a teaching city and as a simple population-based surveillance denominator; it is not the disease-free denominator of cumulative incidence. [CDC incidence distinctions](https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson3/section2.html).
- Point prevalence is a snapshot; prevalence may also be measured over a period. The lesson's snapshot version is appropriate when explicitly labelled. Mortality uses population, whereas case fatality uses diagnosed cases.
- AIHW's current overview supports rising cancer death counts and falling adjusted mortality. The 2025-standard aggregate is about 257 in 2000 to 194 in 2025; about 36,000 deaths in 2000 to 53,500 projected in 2025. The full 1995-2025 annual series has now been extracted from Book 2a,Table S2a. 1 with both standard populations; use its 2001 column for this design. The crude rate changes190.0 to 193.6 per 100,000, while 2001-standard mortality declines208.6 to 142.7. Counts 34216 to 53545 rise overall but not monotonically.
- Diabetes is long-lasting and improved survival can increase prevalence at steady incidence. The tap/tank is useful if recovery and death remain outflows. Screening can alter detected incidence. These mechanisms support possible explanations rather than uniquely determining them.

## Recalculation

160/80000 x 100000 = 200 per 100,000/year; 4400/80000 = 0.055 = 5.5% = 5500 per 100,000; 16/80000 x 100000 = 20 per 100,000/year. 30/10000 and 60/20000 both give 300. A1 X =45, Y =60 per 100,000/year. A2 mortality 30 to 15 halves; prevalence 300 to 540 rises80%; incidence 60,61,59 is approximately steady.

Narration recount: 5,595 characters, 15 scenes; U+2014 count 0. No numerical or chemical spelling change was made to a source lesson. Exact scenes and counts are retained in the source audit.

## Site-error decisions

Read-only HTML was checked, with file hashes and normalized full text retained in `../assets/brief118-source-audit.json`. Confirmed new rows, and rejected or unresolved author suggestions, are in `../assets/brief118-site-corrections-proposed.md`. That file is for root integration; this review does not change the site or shared log. Missing source support is labelled unresolved rather than asserted false.

## Remaining checks

Resolve the numbered findings before recording. Exact procedural colour timing, current mixture SDS s, missing annual dataset rows and dash glyph certification remain open where stated. Question wording is HSC-style; originality against every historical exam has not been exhaustively established. Check the revised source, then the exact voiced preview for learning, timing, motion and captions. Human listening and release approval remain pending.

## Resolution

Resolved in `../lessons/bio-m8-b10.md` Revision 2 (31 Oct; root resolver, Claude PM). Findings 1 to 4 are merged with the learning review's repairs. Recount by script: 5,655 characters, about 543 s.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Blocker: age-standardised decline stated as lower mortality at every age | Fixed (as learning 1). Aggregate adjusted-rate wording in narration, main question and description. | Scene 1; YouTube description |
| 2 | Memory values and a monotonic count instruction | Fixed (as learning 2). Exact Table S2a.1 series, 2001-standard column, all 31 rows, projections marked; the 2003 dip is drawn. Scene 8's crude-rate claim is corrected to "barely moved" (190.0 to 193.6). | Scenes 1 and 8; Numbers to verify; asset brief task 1 |
| 3 | Cervical-cancer risk group as a sex-category exclusion | Fixed (as learning 4). "People with a cervix"; the source's own denominator is to be stated where a series is used. | Scene 3 |
| 4 | Stable crude incidence called unchanged risk; lower mortality said to prove longer survival | Fixed (as learning 5). "Consistent with people living longer"; the model notes the table cannot prove the cause or unchanged age-specific risk. | Scenes 10c, 10d; model answer 2 |
| 5 | Pancreatic survival figure dated to an older release, not named relative survival | Fixed. Grey tag "Cancer Australia: five-year relative survival about 14% (2017 to 2021)"; site error 1's proposed text uses the same figure. | Scene 7 visual; Decisions site error 1; Numbers to verify |

No teaching-data value changed; all rates were rechecked as in the Recalculation section. Open items for the Codex error check: the diabetes prevalence and cancer-incidence-by-age grey tags (asset brief task 2).
