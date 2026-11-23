# math-s11-d01: How does a statistical investigation start with a clear question and a fair survey?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record) in the form of the n packs, from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Statistical investigation process", outcome MST-11-08:

- `ci22ad0284`: Identify an issue and pose a question to a targeted population to gather statistical information [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: partial (census and sample only; the issue-to-question step is not taught).
- `cie24b93fc`: Develop a survey by applying questionnaire design principles of clear language, unambiguous questions and consideration of number of choices. Site coverage: partial (leading questions appear as a bias type; the three design principles are not taught).

**Entry knowledge:** Stage 4 and 5 statistics (collecting data with a survey; reading a column graph). No earlier Year 11 data video exists; this is the first in the strand. No Year 11 network idea is needed.

**Prior video:** math-s11-n07. **Start:** n07's final frame (the phone `ma12-phone-v1.png` with a coded survey screen "How many hours did you sleep last night?" and four answer buttons "under 7", "7 to 8", "8 to 9", "over 9"; grey chip "Networks, paths and trees: done"; chips "a clear question, a fair survey", "Next: statistical investigations", "?"). This pack confirms that frame unchanged: its overlapping buttons and its "last night" become the hook's two faults.

**Stop:** the investigation process as six steps (issue, question, collect, organise and display, analyse, conclude); an issue; a statistical question (answered by data that varies); the target population (and "sample" in one plain sentence, methods left to d03); clear language; unambiguous questions (one idea, a fixed time frame, no overlap); number of choices (enough to fit every answer exactly once, few enough to read; a middle option on a rating scale); an open number box as an alternative. Not: privacy, bias and leading questions (d02); sampling methods and census (d03); faults in collection (d04); data types (d05).

**Next:** math-s11-d02: the bedroom plate `ms12-bedroom-furniture-v1.png` (bed and desk) at the left; the phone at the right with the fixed sleep question and two new fields "Name: ______" and "Where does your phone charge overnight?"; chips "Who sees the answers?", "Next: privacy, bias and ethics", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson02.sa.html` ("Collecting Data"): hook (pocket money: ask only your school?); census and sample (card 05); bias types (card 06); stratified sampling (WE); bias drill; SA 1 (email survey), SA 2 (a nightclub drug-use survey). `year11/data-analysis/lesson09.sa.html` ("Types of Data and Sampling"): classifying data; sampling methods; "When samples mislead" (card 08: "Measurement bias: Questions are leading or poorly worded (e.g., 'Do you agree that our excellent school needs more funding?')"; "Use neutral, clearly worded questions").

Neither page teaches the issue-to-question step or the three questionnaire principles named in `cie24b93fc` (crosswalk: partial). This video teaches them from the syllabus (ruling 3; MSY-33). Site decisions: lesson09's "Use neutral, clearly worded questions" is the only line reused (scene 4); leading questions and the "excellent school" example belong to d02 (bias); census and sampling to d03. The nightclub and drug-use examples are not used (ruling 69 pattern).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Target population | Year 11 at our school (example) | 200 students |
| Overlapping buttons | "7 to 8" and "8 to 9" both contain 8 | 8 h fits two buttons |
| Fixed buttons | under 7; 7 to under 8; 8 to under 9; 9 or more | every value 0 to 24 lands in exactly one |
| Guideline | Australian 24-Hour Movement Guidelines, 14 to 17 years | 8 to 10 hours a night (Codex confirms) |
| A1 | $0–$20, $20–$40, $40–$60 | overlaps at 20 and 40; no box above 60 |
| A2 | café loyalty app | population: the café's customers; Q2 clearer |

## 4. Misconceptions and HSC-style traps

- A question about one person ("How long did I sleep?") is not a statistical question; it has one answer and no variation.
- "Last night" is ambiguous (a Friday or Saturday is not a school night).
- Overlapping or gapped answer boxes ("7 to 8", "8 to 9"; "more than 9" and "less than 9" with 9 nowhere).
- Jargon or vague frequency words ("sleep hygiene", "often", "regularly").
- Two questions in one ("How long do you sleep and use your phone in bed?").
- Too few choices (yes/no hides the amount); too many choices (a list nobody reads).

## 5. Visual needs

n07's survey phone (the hook); a six-step investigation strip with the sleep example on each step; a question-fixing board (vague wording struck and replaced); an answer-sorter simulation: values 0 to 12 h fall onto the answer buttons, an 8 lands on two buttons and flashes, then the fixed buttons catch every value once; a choice-count dial from 2 to 20 options with a "readable" band.

## 6. Two original candidate practice questions

**Question 1.** A survey asks "How much do you spend on your phone plan each month?" with the choices $0–$20, $20–$40, $40–$60. Describe two problems with the choices and rewrite them.
Worked answer: $20 and $40 each fit two boxes (overlap); a plan over $60 has no box (gap). Rewrite: "under $20", "$20 to under $40", "$40 to under $60", "$60 or more". Slip: "the boxes are fine, every price under $60 is covered".

**Question 2.** A café owner wonders whether customers would use a loyalty app. (a) Name the target population. (b) Which question is better, and why? Q1: "Would you utilise a digital rewards solution?" Q2: "Would you use a free phone app that gives you every tenth coffee free?"
Worked answer: (a) the café's customers; (b) Q2: plain words, says exactly what the app does. Slip: "(a) everyone in the town".

## 7. Everyday anchors

Sleep on school nights (the strand's investigation); a phone plan; a café's loyalty app. No people.

## 8. Site corrections and decisions for Claude

- MSY-33: the issue-to-question step and the three questionnaire principles have no site lesson.
- The strand follows one investigation (Year 11 sleep and phones) from question to conclusion: d01 poses it, d02 to d04 collect it, d05 to d10 display it, d11 to d19 analyse it.
- Header strip: "DATA ANALYSIS" (owner rule of 23 November).
- Pace: about 8 to 9 minutes.
