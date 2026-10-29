# skills06 science check: graphs and data

Independent Codex review, 28 October 2026, Revision 1. Checked narration, planned visuals, question cards, feedback, notes, number list and metadata. Calculations independently reproduced by `../assets/brief109-qa/check-sources.py`. No audio, playback or release approval.

## Syllabus wording check

Both official 2017 DOCX files were downloaded and XML extracted. The four quoted content lines match after whitespace normalisation: selecting/representing qualitative and quantitative data; applying quantitative processes; deriving trends/patterns/relationships; assessing error/uncertainty/limitations. Outcome wording matches BIO11/12-4/-5 and CH11/12-4/-5. Chemistry uses ACSCH004/007/064/101 on representation and ACSCH004/005/033/099 on limitations; Biology uses corresponding ACSBL codes. Metadata omits reference codes without changing skill wording.

## Findings

| # | Severity | Claim | Error and repair |
| --- | --- | --- | --- |
| 1 | should fix | 9/notes: "Use a line graph when both variables are numbers" | Numerical coding alone is insufficient: continuity and meaningful intermediate values matter. Say "Use a line graph for a continuous relationship or change over time, like these years and percentages. Use columns for separate categories." NESA Chemistry 2025 feedback explicitly distinguishes continuous quantitative data from categories. |
| 2 | should fix | Decisions drill 1: "rate slowing as the acid is used up" | Stem says excess hydrochloric acid. Replace with "as the marble chips are used up", matching the shot and number list. |
| 3 | should fix | 6: "if the question says explain, add the cause" followed by selection explanation | The temporal trend alone does not identify its cause. Say "give a plausible scientific reason, using any extra evidence in the question" and identify selection as an example, not a causal inference established by this graph. |
| 4 | should fix | Scene 8: NESA glossary quotation "Infer beyond what is known." | The current official glossary says "Infer from what is known." Use that exact text if attributing a quote, or remove the quotation and keep the lesson's mathematically sound explanation of extrapolation. |
| 5 | optional | Best fit wording | Approximately balanced points is an HSC convention for this line, not a universal fitting algorithm. Keep it tied to this example and do not require a best-fit curve to pass through every point. |

Zero blockers, four should-fix findings, one optional.

## Numerical checks

| Item | Independent result |
| --- | --- |
| Least squares | x mean 4.6; y mean 11; Sxy 96; Sxx 63.2; slope 1.5189873418 percentage points/year; intercept 4.0126582278 percent. |
| Fitted values | 4.013, 7.051, 10.089, 14.646, 19.203 percent. Residuals -0.013, -0.051, -0.089, +0.354, -0.203. Rounded claims agree. |
| Endpoint rate | (19-4)/10 = 1.5 percentage points/year. |
| Relative change | 19-4 = 15 percentage points. 15/4 x100 = 375 percent increase. 19/4=4.75. |
| Interior/exterior readings | 2016: 13.1266 percent; 2040: 49.5823 percent. About 13 and 50 correct; 2040 is twenty years beyond data. |
| Main grid | Ten years at two squares/year = twenty squares. Fifteen squares at two percentage points/square = thirty percent. Highest fit uses about 64 percent of height. |
| Inset grid | Thirty years at two years/square = fifteen squares; sixty percentage points at four/square = fifteen squares. 2040 is 12.396 squares up. |
| Hook graph | (50 s, 28 mL) is a stipulated constructed curve point. Actual implementation must pass through it; it is not an empirical measured value. |
| Chemistry drill | Interval rates 0.7333, 0.5333, 0.2833, 0.05833 mL/s. Unequal intervals cannot occupy equal horizontal distances. Missing mL and dot-to-dot error are correctly identified. |
| Biology drill | 0 to 3 percent: +9 mm over three percentage points, or 3 mm/point. 3 to 6 percent: +1 mm over three points, or 0.333 mm/point. Levelling-off description valid. Disc-only six millimetres at zero is explicit on card. |

TAILS is correctly presented as a school aid, not a NESA prescription. Interpolation and extrapolation meanings are correct. A requested extrapolation should be performed while evaluating its assumptions. Percentage-point and relative-percent distinction is correct.

## Research, metadata and limits

The local common-faults pack records 11/12 graph issues (Biology 6/6, Chemistry 5/6) and 9/12 trends without values (Biology 6/6, Chemistry 3/6), matching design. These are coded reports, not student proportions. All twelve reports were not independently recoded. Official Biology 2024 Q29 feedback confirms plotting, balanced best-fit line and extending the same trend; Chemistry 2025 Q26 confirms category/column choice, scales, labels and heights. Full mark bands should stay labelled as a paraphrase of one item; no universal title mark follows.

Narration recount 5,675 characters; zero U+2014; title within 100 characters. Metadata graph-choice wording should change with finding 1. No site error is logged by S06. Cached 2019 to 2025 Chemistry/Biology exam text was searched; hits retained in `../assets/brief109-qa/exam-text-hits.txt`. Closest Biology 2024 Q29 plots diabetes percentages for 1990/2000/2010/2020 and extrapolates to calculate a 2040 population. S06 changes context/data, adds uneven-year scale, trend description, interpolation and assessment rather than a population calculation. Chemistry 2022 Q29 plots combustion enthalpies against alcohol carbon count, whereas the drill repairs a flawed gas-volume graph. Shared graph skills do not make these close wording copies. Full visual comparison of every diagram-only page was not completed. Official Biology 2024 Q29 and Chemistry 2025 Q26 marking PDFs were opened directly: the quoted 2/1 and 3/2/1 criteria match the planned ladders.

## Sources checked

- [Biology 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx), [Chemistry 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx). Extracts in `../assets/brief109-qa/`.
- [NESA Biology 2024 feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/biology/2024), [NESA Chemistry 2025 feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/chemistry/2025).
- Local `../research/exam-skills/common-faults.md`, `what-markers-reward.md`, `glossary.md`.
- [Official glossary](https://www.nsw.gov.au/education-and-training/nesa/hsc/student-guide/glossary), [Biology 2024 marking PDF](https://www.nsw.gov.au/sites/default/files/noindex/2025-02/2024-hsc-biology-mg.pdf), [Chemistry 2025 marking PDF](https://www.nsw.gov.au/sites/default/files/noindex/2025-11/2025-hsc-chemistry-mg.pdf).

## Resolution

Resolved in `../lessons/skills-s06.md` Revision 2 (30 Oct; root resolver, Claude PM). Merged with the learning review where they overlap.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with learning 1) | Continuous relationship or change over time gets a line graph; separate categories get columns. Metadata names no graph-choice rule, so it is unchanged. |
| 2 | Fixed (merged with learning 2) | "as the marble chips are used up" in Drill 1's Decisions text, matching the shot and number list. |
| 3 | Fixed (merged with learning 2) | Scene 6 asks for "a plausible scientific reason" and says the graph alone doesn't show the cause; selection is offered as an example. The extra-evidence clause is not added to the narration (the question here has none) and stays in the author note. |
| 4 | Fixed | The quotation now reads "Infer from what is known." in scene 8's tag, the research table and Codex brief item 5. |
| 5 | Fixed (optional) | Scene 5: points "scattered about evenly on both sides, as they are here", tied to this example. |
