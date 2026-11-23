# math-s11-d16: How do we draw and read a box plot, including from a histogram or dot plot?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Five-number summary and box plots", outcome MST-11-08:

- `ci4c0893da`: Represent numerical datasets using a box plot to display a five-number summary, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson13 card 08); digital tools not taught (MSY-46).
- `ci2d7c794d`: Determine quartiles from datasets displayed in histograms and dot plots, and represent these datasets as a box plot. Site coverage: covered in the crosswalk; in fact no histogram or dot plot example (MSY-46).
- `cic5161f3b`: Interpret box plots to draw conclusions and make inferences about a dataset. Site coverage: covered (lesson13 card 08; MC 3).

**Entry knowledge:** math-s11-d15 (quartiles by halving; the five-number summary; IQR); math-s11-d08 (dot plots; the wickets); math-s11-d06a (histograms; the screens counts); math-s11-d06b and d11 (running totals find positions); math-s11-d09 (skew; "the tail tells the skew"); math-s11-d01 (the 8 to 10 hour guideline).

**Prior video:** math-s11-d15. **Start:** d15's final frame (the five-number card "3 | 6.5 | 7.5 | 8 | 9.5" over an empty number line 2 to 10 with five dashed ticks; the alarm clock; chips "Five numbers, one picture?", "Next: box plots", "?").

**Stop:** drawing a box plot by hand (a scale; a box from Q1 to Q3; a line at the median; whiskers to the minimum and maximum); each of the four sections holds about a quarter of the values; reading it (about a quarter at or below Q1; the middle half between Q1 and Q3; at least half at or above the median; shape from the whiskers and the median's place in the box); conclusions and inferences (about the sample; about the population, with caution); quartiles from a dot plot (count dots to positions) and from a histogram whose bars are single values (running totals); a box plot from an app or spreadsheet (check its quartile rule and its outlier setting). Not: outliers drawn as separate points (d18); comparing groups (d17).

**Next:** math-s11-d17: the bedroom plate; two box plots on one scale (2 to 10 hours), "phone in bedroom" (3, 6, 6.75, 7.5, 8.5) above "elsewhere" (7, 7.5, 8, 8.75, 9.5); chips "Two boxes, one scale?", "Next: parallel box plots", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson13.sa.html`: card 08 (drawing: "Draw a horizontal number line ... Draw a box from Q1 to Q3 with a vertical line at the median ... Extend whiskers from the box to the most extreme values within the fences"; interpreting: median position, box width, whisker length; "median closer to Q1 = positive skew"); MC 3; WE 1 (temperatures: summary 14, 17.5, 21, 24.5, 35).

Recalculated: no error in these items. Site decisions: the site draws whiskers "to the most extreme values within the fences" from the start; the video draws whiskers to the minimum and maximum here (a box plot of the five-number summary, as the point says) and adds the fence version in d18, where outliers are defined (MSY-46). Histograms and dot plots as sources, and digital tools, are taught from the syllabus (MSY-46).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Sleep box plot | 3, 6.5, 7.5, 8, 9.5 | left whisker 3.5 h; right 1.5 h; median nearer Q3: negatively skewed |
| Sleep readings | values at or above 7.5; below 8; in 6.5 to 8 | 11 of 20; 13 of 20 (65%); 12 of 20 |
| Wickets dot plot (16) | 0 × 2, 1 × 4, 2 × 5, 3 × 3, 4, 5 | Q1 = (4th + 5th) ÷ 2 = 1; median (8th + 9th) ÷ 2 = 2; Q3 (12th + 13th) ÷ 2 = 3; 0, 1, 2, 3, 5 |
| Screens histogram (20) | bars 0: 3, 1: 7, 2: 6, 3: 4; running totals 3, 10, 16, 20 | Q1 = (5th + 6th) ÷ 2 = 1; median (10th + 11th) ÷ 2 = 1.5; Q3 (15th + 16th) ÷ 2 = 2; 0, 1, 1.5, 2, 3 |
| A1 basketball (12) | 8, 10, 10, 12, 13, 14, 14, 15, 16, 18, 20, 24 | 8, 11, 14, 17, 24 |
| A2 battery box plot | 9, 14, 16, 17, 19 | 75% lasted 14 h or more; negatively skewed |

## 4. Misconceptions and HSC-style traps

- Each section of a box plot holds a quarter of the values, not a quarter of the range (a long whisker is not "more data").
- Reading the box's length as the median.
- Drawing the box from the minimum to the maximum.
- Quartiles from a dot plot by reading the axis halfway instead of counting dots.
- Skew read from the box alone, ignoring the whiskers.
- Claims about the whole population from a sample with no caution.

## 5. Visual needs

The five ticks (the hook) growing into a box plot; the 20 dots above it sliding into the four sections, 5 dots each (a quarter per section, whatever the length); reading guides with percentages; the wickets dot plot with a counting cursor; the screens histogram with a running-total column; an app screen drawing a box plot from a list, with a "quartile method" and "show outliers" setting.

## 6. Two original candidate practice questions

**Question 1.** A dot plot shows the points a basketball player scored in 12 games: 8, 10, 10, 12, 13, 14, 14, 15, 16, 18, 20, 24. Find the five-number summary and describe the box plot you would draw.
Worked answer: median (14 + 14) ÷ 2 = 14; Q1 = (10 + 12) ÷ 2 = 11; Q3 = (16 + 18) ÷ 2 = 17; summary 8, 11, 14, 17, 24: a box from 11 to 17 with a line at 14, whiskers to 8 and 24. Slip: "Q1 = 10".

**Question 2.** A box plot of the battery life of a phone model (hours) shows minimum 9, Q1 14, median 16, Q3 17 and maximum 19. (a) What percentage of the phones lasted 14 hours or more? (b) Describe the shape of the distribution.
Worked answer: (a) 75%. (b) Negatively skewed: the left whisker (5 h) is much longer than the right (2 h), and the median is closer to Q3. Slip: "(a) 50%".

## 7. Everyday anchors

Sleep (the sample); cricket wickets; screens in bedrooms; basketball points; phone battery life. No people.

## 8. Site corrections and decisions for Claude

- MSY-46: lesson13 introduces fences before outliers are defined; no histogram or dot plot source; no digital tools; WE 2's stray Q1 line; SA 2's "outliers" that are inside the fences and below a stated minimum.
- Pace: about 9 minutes.
