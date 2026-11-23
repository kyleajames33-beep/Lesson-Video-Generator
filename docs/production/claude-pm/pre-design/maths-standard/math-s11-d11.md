# math-s11-d11: How do the mean, median and mode measure the centre of a dataset?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Measures of centre and spread", outcome MST-11-08:

- `ciaf232c38`: Describe the mean, median and mode as measures of centre and calculate their values for a dataset in graphical form and tabular form, using a scientific calculator and other digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson10 cards 05, 06; WE 1, 2).

**Entry knowledge:** math-s11-d06a (frequency tables; the screens table 3, 7, 6, 4); math-s11-d06b (running totals); math-s11-d07 and d08 (dot plots; stem-and-leaf plots; the middle of 15 is the 8th); math-s11-d10 ("average" on the poster); Stage 4 and 5 averages.

**Prior video:** math-s11-d10. **Start:** d10's final frame (the sleep dot plot of the 20 values; the alarm clock; the calculator; chips "One number for a typical night?", "Next: mean, median and mode", "?").

**Stop:** measure of centre; the mean ("the mean = total ÷ how many", Year 12 b04a's words) as the balance point; the median (order, then the middle; position (n + 1) ÷ 2; the average of the two middle values when n is even); the mode (most common; works for categories; two modes or none); all three from a dot plot, a stem-and-leaf plot and a frequency table (Σfx ÷ Σf; the median position from running totals); the calculator's statistics mode (x̄, n, Σx; a frequency column); a spreadsheet's AVERAGE, MEDIAN and MODE in one line. Not: which measure to choose (d12); spread (d13).

**Next:** math-s11-d12: the sleep dot plot with three markers, the mean 7.2 (teal triangle), the median 7.5 (violet line) and the mode 7.5 (olive ring), and the dot at 3 ringed; chips "Which one is typical?", "Next: choosing a measure of centre", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson10.sa.html`: key ideas (x̄ = Σx ÷ n; median; mode; mean from a frequency table Σfx ÷ Σf); card 05 (72, 85, 90, 65, 88: mean 80; table 70 × 3, 80 × 5, 90 × 2: 79); card 06 (median for odd and even n; mode; unimodal, bimodal, multimodal; "The mode is the only measure of centre that applies to categorical data"); WE 1 (daily sales with a $2000 day: mean 663, median 515, no mode); WE 2 (marks table: 2210 ÷ 30 = 73.67); quick checks.

All site values recalculated: no arithmetic error. Site decisions: the site's formulas and median rules are used; "the mean = total ÷ how many" is said in Year 12 b04a's exact words before the symbol x̄; the mode-for-categorical line is softened (the median also works for ordinal data; MSY-43); WE 1's outlier story is left to d12 and d19.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Sleep (20) total | 3 + 5.5 + 6 + 6 + ... + 9.5 | 144 |
| Mean | 144 ÷ 20 | 7.2 h |
| Median | positions 10 and 11: 7.5 and 7.5 | 7.5 h |
| Mode | 7.5 four times | 7.5 h |
| Batter A (15) | 8th value | 24 (median recall) |
| Screens table | Σfx = 0 + 7 + 12 + 12 = 31; Σf = 20 | mean 1.55; running totals 3, 10, 16, 20: 10th 1, 11th 2, median 1.5; mode 1 |
| Phone location | most common | bedroom (mode of a category) |
| Calculator | 1-variable statistics, 20 values | x̄ = 7.2, n = 20, Σx = 144 |
| A1 coffee (11 days) | 32, 35, 38, 41, 41, 44, 47, 47, 47, 52, 58 | mean 482 ÷ 11 = 43.8; median 44; mode 47 |
| A2 goals (20 matches) | 0: 4, 1: 6, 2: 5, 3: 3, 4: 2 | mean 33 ÷ 20 = 1.65; median 1.5; mode 1 |

## 4. Misconceptions and HSC-style traps

- Finding the median without ordering the data.
- Taking the middle position (10.5) as the median value.
- Averaging the values in a frequency table without their frequencies ((0 + 1 + 2 + 3 + 4) ÷ 5 = 2).
- Dividing by the wrong count (A1: ÷ 10 instead of ÷ 11).
- Confusing the mode (the value) with its frequency ("the mode is 4" when 7.5 occurs 4 times).

## 5. Visual needs

The sleep dot plot (d10's frame); a balance beam under the dots finding 7.2; dots peeling off in order to a numbered line for the median; the tallest stack ringed for the mode; a frequency table with an f × x column and a running-total column; the calculator's statistics mode screens (a list, a frequency column, the results screen); a stem-and-leaf for the attempt.

## 6. Two original candidate practice questions

**Question 1.** A stem-and-leaf plot shows a café's coffee sales on 11 days: 3 | 2 5 8; 4 | 1 1 4 7 7 7; 5 | 2 8 (key 3 | 2 = 32). Find the mean (to one decimal place), the median and the mode.
Worked answer: total 482; mean 482 ÷ 11 = 43.8; median: the 6th value, 44; mode 47. Slip: "mean 48.2" (÷ 10).

**Question 2.** A soccer team's goals in 20 matches: 0 goals: 4 matches; 1: 6; 2: 5; 3: 3; 4: 2. Find the mean, the median and the mode.
Worked answer: Σfx = 0 + 6 + 10 + 9 + 8 = 33; mean 33 ÷ 20 = 1.65; running totals 4, 10, 15, 18, 20: the 10th value is 1 and the 11th is 2, so the median is 1.5; mode 1. Slip: "mean = (0 + 1 + 2 + 3 + 4) ÷ 5 = 2".

## 7. Everyday anchors

Sleep (the strand's sample); screens in bedrooms; a batter's scores; phone location; a café's coffee sales; a soccer team's goals. No people.

## 8. Site corrections and decisions for Claude

- MSY-43: lesson10's "only measure of centre for categorical data" (the median works for ordinal data); the page's Year 12 course code "MS12-8" on a Year 11 page.
- Year 12 b04a recalls "Year 11: the mean = total ÷ how many"; b01 "Year 11: dot plot, mean, median"; z01 "Year 11: measures of centre". Say each phrase as written.
- Pace: about 9 minutes.
