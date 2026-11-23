# math-s11-d09: What does the shape of a distribution tell us?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, outcome MST-11-08:

- `ci0c94e728` (group "Display and interpret grouped and ungrouped data"): Identify and describe the shape of the distribution of a dataset as either symmetric, positively skewed or negatively skewed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson12 card 06; lesson10 card 08).
- `cie2345a02` (group "Measures of centre and spread"): Identify and describe datasets as uniform, unimodal, bimodal or multimodal. Site coverage: partial (unimodal, bimodal and multimodal are named; uniform is not; MSY-41).

**Entry knowledge:** math-s11-d06a (histograms; the screen-time data); math-s11-d07 and d08 (dot plots; reading displays); Stage 5 "symmetric" in everyday use.

**Prior video:** math-s11-d08. **Start:** d08's final frame (the screen-time histogram, the sleep dot plot with its 3 far left, the apple-mass histogram with the apple crate; chips "Which way is the tail?", "Next: the shape of a distribution", "?").

**Stop:** distribution ("how the values are spread along the number line: where they bunch and where they thin out"); symmetric (mirror fold); tail; skewed ("one tail longer than the other"); positively skewed (tail towards the bigger values, to the right); negatively skewed (tail to the left); naming skew by the tail, not the peak; a reason in context for each shape; peaks: unimodal, bimodal, multimodal; uniform (flat: every value about equally common); a bimodal shape as a sign of two groups mixed; describing a distribution in one sentence (peaks, shape, where most values are, the extremes). Not: mean and median against shape (d12); outliers by rule (d18).

**Next:** math-s11-d10: the tournament board `ma11-tournament-board-v1.png` with a coded infographic poster "Sleep and screens: our Year 11 survey": a big number "35% get 8+ hours", a sector graph of where phones charge, a pictogram row of 20 phone icons (12 lit), and a column graph whose vertical axis starts at 6; chips "Is this poster fair?", "Next: infographics and misleading graphs", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson12.sa.html`: key term "Skew: Asymmetry in a distribution. Positive (right) skew: tail extends right. Negative (left) skew: tail extends left."; card 06 ("Symmetry", "Skew", "Modality: Unimodal (one peak) or bimodal (two peaks)?"); MC 3 (mean 75, median 70, mode 65: positively skewed). `year11/data-analysis/lesson10.sa.html`: card 06 (unimodal, bimodal, multimodal, no mode); card 08 (skew with mean and median).

Site decisions: the tail rule is used word for word ("tail extends right"); "uniform" is taught from the syllabus (MSY-41); the mean-median-mode links (lesson10 card 08, lesson12 MC 3) are left to d12; the word "modality" is not used (plain "how many peaks").

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Apples (60) | 140–<150 to 200–<210: 2, 6, 12, 20, 12, 6, 2 | symmetric about 175 g |
| Screen time (30) | 3, 9, 7, 5, 3, 2, 1 | unimodal, positively skewed |
| Sleep (20) | bulk 6.5 to 8.5, one 3, one 5.5 | unimodal, negatively skewed |
| Food truck by hour (11 am to 9 pm) | 18, 42, 30, 10, 6, 8, 25, 40, 22, 9 | bimodal (12 to 1 pm; 6 to 7 pm) |
| Café by hour (6 am to 6 pm) | 12, 35, 20, 10, 14, 26, 38, 18, 15, 30, 12, 6 | multimodal (7 to 8; 12 to 1; 3 to 4) |
| Die, 600 rolls (example run) | 98, 103, 101, 97, 99, 102 | uniform (about 100 each) |
| A1 quiz (40) | marks 3 to 10: 1, 1, 2, 3, 5, 9, 12, 7 | unimodal, negatively skewed |
| A2 commute (25) | 0–<10: 5, 10–<20: 8, 20–<30: 2, 30–<40: 1, 40–<50: 6, 50–<60: 3 | bimodal (walkers and bus) |
| 8 hours or more (sample) | 8, 8, 8, 8.5, 8.5, 9, 9.5 | 7 of 20 = 35% (d10) |

## 4. Misconceptions and HSC-style traps

- Naming skew by the peak ("the peak is on the right, so positively skewed"): skew is named by the tail.
- Calling every distribution with two tall bars bimodal (two separate peaks with a dip between).
- Calling any flat-ish set "symmetric" (symmetric means a mirror; uniform means flat).
- Describing shape without context ("positively skewed" with no reason).

## 5. Visual needs

The three displays (d08's frame); a mirror fold along the centre line; a tail pointer that follows the long side; a shape slider (a smooth outline over a histogram whose tail handle drags right or left, with a live label "symmetric / positively skewed / negatively skewed"); a peak counter that counts peaks with dips between; four everyday histograms (food truck, café, die); a description builder that assembles one sentence.

## 6. Two original candidate practice questions

**Question 1.** A histogram shows the marks of 40 students on an easy 10-mark quiz: 3: 1, 4: 1, 5: 2, 6: 3, 7: 5, 8: 9, 9: 12, 10: 7. Describe the shape of the distribution and give a reason for it in context.
Worked answer: unimodal (one peak, at 9) and negatively skewed (the tail stretches left, to the low marks); the quiz was easy, so most marks are high and only a few students scored low. Slip: "positively skewed, because the peak is on the right".

**Question 2.** The travel times to school of 25 students (minutes): 0–<10: 5; 10–<20: 8; 20–<30: 2; 30–<40: 1; 40–<50: 6; 50–<60: 3. (a) Describe the distribution by its peaks. (b) Suggest a reason in context.
Worked answer: (a) bimodal: peaks at 10–<20 and 40–<50, with a dip between. (b) Two groups: students who live nearby and those who catch the bus. Slip: "(a) unimodal, because 10–<20 is the tallest bar".

## 7. Everyday anchors

Apples, screen time, sleep (the investigation), a food truck, a café, a die, a quiz, the trip to school. No people.

## 8. Site corrections and decisions for Claude

- MSY-41: "uniform" is not taught; the site names skew correctly but never asks for a reason in context.
- Year 12 z01 recalls "Year 11: symmetric, skewed" and "Year 11: positively skewed", with the plain meanings "the left side is a mirror image of the right" and "one tail longer than the other": use them word for word.
- Pace: about 8 to 9 minutes.
