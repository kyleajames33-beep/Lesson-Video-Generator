# math-s11-d04: What can go wrong when we collect data?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Population and sample", outcome MST-11-08:

- `ci4c7cc505`: Describe the potential faults in the design and practicalities of a data collection process by considering survey design, experiments and observational studies, and misunderstandings and misrepresentations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: partial (sampling bias is taught; faults in experiments and observational studies are not).

**Entry knowledge:** math-s11-d01 (question faults); math-s11-d02 (bias, honest answers, reporting); math-s11-d03 (samples; random; self-selected; representative).

**Prior video:** math-s11-d03. **Start:** d03's final frame (the bedroom with the headline card "Phones in bedrooms steal 2 hours of sleep!"; the 20 tokens as "phone in bedroom: 12" and "elsewhere: 8"; chips "What could go wrong?", "Next: faults in data collection", "?").

**Stop:** observational study and controlled experiment (Year 12 b03's wording); why an observational study cannot show cause (something else could explain the difference); faults in experiments (no random allocation, people not following the rule, knowing they are watched, too few or too short); practical faults (non-response, recall and rounding, careless or dishonest answers, data-entry errors, timing); survey design faults (d01 callback); misunderstandings (respondents reading a question differently) and misrepresentations (a cause claimed from observation; a sample generalised too far; an exaggerated number; a count shown as a percentage of a tiny sample). Not: variable types (d05); graphs that mislead (d10).

**Next:** math-s11-d05: the exam desk with the survey's record sheet (coded) for the 20 students: columns "Sleep (h)", "Screens in bedroom", "Phone charges", "How rested?", "Gets to school"; chips "Numbers or words?", "Next: types of data", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson02.sa.html`: card 06 (selection, response and non-response bias; self-selection); SA 1 (an email survey with 200 of 10,000 replies: non-response and selection). `year11/data-analysis/lesson09.sa.html`: card 08 (selection, measurement, non-response and confirmation bias; "Follow up with non-respondents"); WE 2 ("9 out of 10 dentists" at a sponsored conference: selection, response, small sample).

Experiments and observational studies are not taught on the site (crosswalk: partial). This video teaches them from the syllabus (ruling 3; MSY-36), using Year 12 b03's plain meanings so b03's grey chip "Year 11: experiments and observational studies" lands on words students have met. Site decisions: non-response (lesson02 SA 1) and "follow up with non-respondents" are reused (scene 4, attempt 2 is original); confirmation bias becomes the misrepresentation scene's "report what you wanted to find"; the dentists example is not used (a sponsor context is replaced by the strand's own headline).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Phone location in the sample | from d03 | 12 bedroom, 8 elsewhere |
| A count as a percentage | 12 ÷ 20 | 60% (of only 20 students) |
| Non-response (example) | 15 of 20 returned | 5 missing, 25% |
| Data entry (example) | 7.5 typed as 75 | an impossible 75 h |
| Experiment (example design) | 40 volunteers, 20 and 20 by random draw, 2 weeks | phone in the kitchen against usual |
| A2 | 200 ÷ 10 000 | 2% replied |

## 4. Misconceptions and HSC-style traps

- "The groups differ, so one causes the other" from an observational study.
- Calling any data collection an "experiment".
- Letting people choose their own group in an experiment.
- Ignoring the people who didn't reply.
- Generalising from one school, one night, to "all teenagers".
- A percentage of a tiny sample presented as if it were large.

## 5. Visual needs

The headline over the bedroom (the hook); two side-by-side panels "observational study: just watching" and "experiment: change one thing on purpose"; a hidden-factor reveal (the bus icon behind the bedroom group); a random allocation of 40 volunteer tokens into two groups; a fault map of the data pipeline (question, people, method, recording, claim) with fault pins dropping on each stage; a headline rewrite board with struck words.

## 6. Two original candidate practice questions

**Question 1.** A school finds that students who eat breakfast at the school canteen get higher marks, and claims that canteen breakfasts raise marks. (a) Is this an experiment or an observational study? (b) Give one reason the claim may be wrong.
Worked answer: (a) observational study (the school just recorded what students did). (b) Something else could explain both, for example students who arrive early for breakfast may be more organised or get more sleep. Slip: "(a) experiment, because they measured marks".

**Question 2.** A phone company texts 10,000 customers at 2 am: "Rate our network from 1 to 10." 200 reply. Describe two faults in this data collection.
Worked answer: non-response: only 2% replied, and those who reply may be the very happy or very annoyed (self-selected); timing: a 2 am text wakes or misses most customers, so night owls are over-represented. Slip: "200 replies is plenty, so the result is reliable".

## 7. Everyday anchors

Phones in bedrooms (the strand's investigation); a school canteen; a phone company. No people.

## 8. Site corrections and decisions for Claude

- MSY-36: experiments and observational studies, and misrepresentation of results, are not taught.
- Use b03's words: controlled experiment, "change one thing on purpose and keep everything else the same"; observational study, "just watching what happens".
- Pace: about 9 minutes.
