# math-s11-d03: Which sampling method gives a sample that represents the population?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Population and sample", outcome MST-11-08:

- `ci3d27ce1c`: Compare and contrast systematic sampling, self-selected sampling, random sampling and stratified sampling [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson02 card 05, WE; lesson09 card 06).
- `ciefb0c944`: Justify whether a sample obtained from a population is representative of the population by considering the sampling method. Site coverage: covered (lesson02, lesson09).

**Entry knowledge:** math-s11-d01 (target population; "sample" as the part you ask); math-s11-d02 (bias as a lean; the 200 students, 140 nearby and 60 by bus); Stage 4 percentages of an amount.

**Prior video:** math-s11-d02. **Start:** d02's final frame (the 200-dot field, 140 blue and 60 amber-outlined; the bus plate small; chips "140 live nearby", "60 catch the early bus", "sample: 20", "Who do we ask?", "Next: sampling methods", "?").

**Stop:** census and sample (why sample: time and cost); representative ("looks like the population in the ways that matter for the question"); random (every member an equal chance; a random number generator); systematic (every k-th from a list, k = population ÷ sample, random start); stratified (groups in proportion, then random within each); self-selected (volunteers; strong feelings over-represented); convenience named in one sentence; comparing the four; justifying representativeness from the method. Not: faults in experiments and observational studies (d04); sample-size theory.

**Next:** math-s11-d04: the bedroom plate with a coded headline card "Phones in bedrooms steal 2 hours of sleep!"; the 20 sample tokens split into "phone in bedroom 12" and "elsewhere 8"; chips "What could go wrong?", "Next: faults in data collection", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson02.sa.html`: card 05 (census and sample, the five methods in one line: "Simple random (equal chance), Stratified (proportional groups), Systematic (every nth person), Convenience (whoever is nearby, often biased), Self-selected (volunteers, attracts strong opinions)"); quick check (40% of 80 = 32); WE (stratified 30 and 20 by gender); drill 5 (200 and 300, sample 100: 40 and 60). `year11/data-analysis/lesson09.sa.html`: card 06 (methods; the council survey outside the sports centre as convenience); MC 2 (every 10th from an alphabetical list: systematic); MC 4 (an online poll: self-selection); trap 02 ("Confusing self-selected with random").

All site values recalculated: no arithmetic error. Site decisions: the site's definitions are used; its stratifying by gender is replaced by where students live (it matters for sleep, and it avoids a sensitive split); the "every 10th" systematic example becomes k = 200 ÷ 20 = 10 with a random start; lesson02's call-in true/false item is ambiguous (MSY-35).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Strata shares | 140 ÷ 200; 60 ÷ 200 | 70%; 30% |
| Stratified sample of 20 | 0.7 × 20; 0.3 × 20 | 14 nearby, 6 bus |
| Systematic step | 200 ÷ 20 | k = 10 (start 1 to 10; e.g. 7, 17, ..., 197) |
| Random runs (example seeds) | three draws of 20 | 4, 9 and 6 bus students |
| Self-selected (example) | poster replies | 20 replies, 14 slept under 7 h |
| A1 | 180 ÷ 300 × 40; 120 ÷ 300 × 40 | 24 juniors, 16 seniors |
| A2 | every 50th ticket; website poll; random generator | systematic; self-selected; random; the poll least representative |

## 4. Misconceptions and HSC-style traps

- "Random" in everyday speech (whoever) against random sampling (every member an equal chance).
- Self-selected is not random (trap 02).
- Stratified samples taken equally from each group instead of in proportion.
- A bigger self-selected sample is still unrepresentative.
- Systematic sampling goes wrong if the list has a pattern that matches the step.

## 5. Visual needs

The 200-dot field (d02's frame) as a live sampler: random draws (20 dots light, stratum counter), repeated runs; systematic (a numbered list and a step-10 pointer); stratified (the field splits into two blocks; 14 and 6 drawn); self-selected (a poster on the tournament board with a QR code; only some dots answer, mostly tired ones); a comparison table of the four methods with ticks and crosses.

## 6. Two original candidate practice questions

**Question 1.** A sports club has 300 members: 180 juniors and 120 seniors. (a) How many of each should be in a stratified sample of 40? (b) Give one reason a stratified sample is more likely to represent the club than an online poll members choose to answer.
Worked answer: (a) 180 ÷ 300 × 40 = 24 juniors; 120 ÷ 300 × 40 = 16 seniors. (b) It includes juniors and seniors in the club's own proportions, chosen at random; an online poll only hears from members who choose to answer, often those with strong views. Slip: "20 juniors and 20 seniors".

**Question 2.** Name the sampling method in each case, then say which is least likely to be representative and why. (i) Every 50th ticket scanned at a concert gate. (ii) A poll on a band's website. (iii) Names drawn by a random number generator from the ticket list.
Worked answer: (i) systematic; (ii) self-selected; (iii) random. (ii) is least representative: only fans who visit the site and choose to answer are heard. Slip: "(i) random".

## 7. Everyday anchors

Year 11 sleep (the strand's investigation; the early bus); a sports club; a concert. No people (dots and tokens only).

## 8. Site corrections and decisions for Claude

- MSY-35: lesson02's call-in vote true/false labels self-selection as "selection bias" (ambiguous).
- Stratify by where students live (bus or nearby), not by gender.
- Year 12 p08 recalls "samples; random and self-selected samples": use those words.
- Pace: about 8 to 9 minutes.
