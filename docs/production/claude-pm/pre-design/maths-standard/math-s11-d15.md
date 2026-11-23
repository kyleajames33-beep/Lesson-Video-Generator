# math-s11-d15: How do quartiles, the five-number summary and the IQR describe spread?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Quartiles and interquartile range", outcome MST-11-08:

- `ci3247f05b`: Determine the five-number summary from a set of numerical data or graphical representation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson11 card 06; lesson13 card 05).
- `ci955be675`: Determine the interquartile range (IQR) of datasets. Site coverage: covered.
- `cib3d54f04`: Compare and contrast the use of range and IQR as measures of spread. Site coverage: covered (lesson11 WE 1; lesson13).

**Entry knowledge:** math-s11-d11 (the median; the order strip; position (n + 1) ÷ 2); math-s11-d13 (range; σ uses every value); math-s11-d08 (stem-and-leaf plots; Batter A); math-s11-d14 (the middle-half question).

**Prior video:** math-s11-d14. **Start:** d14's final frame (the 20 sleep values on the order strip; the median line between positions 10 and 11; an amber bracket over the middle with "?"; the alarm clock; chips "Where's the middle half?", "Next: quartiles and the IQR", "?").

**Stop:** quartiles (Q1, Q2 = median, Q3) as the values that split ordered data into four quarters; the halves method (split at the median; Q1 is the median of the lower half, Q3 of the upper half; with odd n, leave the median out of both halves); the five-number summary (minimum, Q1, median, Q3, maximum); from a list and from a stem-and-leaf plot; the IQR = Q3 − Q1 (the spread of the middle half); range against IQR (the range uses the two extremes; the IQR ignores the top and bottom quarters, so it resists extreme values); a calculator's statistics mode shows Q1 and Q3 too, and some spreadsheets use a different quartile rule. Not: box plots (d16); quartiles from histograms and dot plots (d16); outlier fences (d18).

**Next:** math-s11-d16: the alarm clock and the sleep five-number summary on a card "3 | 6.5 | 7.5 | 8 | 9.5" above an empty number line from 2 to 10 hours with five dashed tick marks at those values; chips "Five numbers, one picture?", "Next: box plots", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson11.sa.html`: card 06 (quartiles, IQR; example 8, 12, 15, 18, 20, 22, 25, 30: Q1 13.5, Q3 23.5, IQR 10); WE 1 (weekly sales with $2,500: range 1,300, IQR 200); traps. `year11/data-analysis/lesson13.sa.html`: card 05 (five-number summary; "Do not include the median value in either half when n is odd"); quick check (4, 7, 9, 12, 15, 18, 21: Q1 = 7); MC 2.

Recalculated: no error in these items (lesson11 SA 1 (c) and lesson13 WE 2 are logged in MSY-44 and MSY-46). Site decisions: the halves method with the median left out for odd n (lesson13 card 05) is the video's method; it matches common scientific calculators' statistics mode; the sales example's idea (one extreme inflates the range, not the IQR) becomes attempt 2 with new numbers.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Sleep (20) | lower half positions 1 to 10: Q1 = (5th + 6th) ÷ 2 = (6.5 + 6.5) ÷ 2; upper half 11 to 20: Q3 = (15th + 16th) ÷ 2 = (8 + 8) ÷ 2 | five-number 3, 6.5, 7.5, 8, 9.5; IQR 1.5; range 6.5 |
| Batter A (15) | median 8th = 24; lower 7 values (median left out): 4th = 12; upper 7: 41 | five-number 0, 12, 24, 41, 87; IQR 29; range 87 |
| A1 deliveries (11) | 18, 22, 25, 27, 29, 31, 33, 35, 38, 44, 52 | five-number 18, 25, 31, 38, 52; IQR 13 (slip: Q1 26 with the median included) |
| A2 earnings (8 weeks) | 120, 135, 140, 150, 150, 160, 170, 480 | range 360; Q1 137.5; Q3 165; IQR 27.5; the IQR describes the spread better |

## 4. Misconceptions and HSC-style traps

- Finding quartiles without ordering first.
- Including the median in both halves when n is odd (A1 slip).
- Taking Q1 as "a quarter of the largest value".
- IQR written as an interval ("6.5 to 8") instead of a difference (1.5).
- Thinking the range and IQR always tell the same story.

## 5. Visual needs

The order strip (the hook) splitting at the median into halves, then each half splitting again (a "halve, then halve again" fold); four quarter bands of 5 values each; a five-number card writing in; the stem-and-leaf of Batter A with its leaves unfolding and the median left out of the halves; a range bracket against an IQR bracket on the same strip; one extreme value sliding out (the range stretches, the IQR doesn't move); a calculator results screen with Q1 and Q3 lines.

## 6. Two original candidate practice questions

**Question 1.** The times (minutes) for 11 food deliveries were 18, 22, 25, 27, 29, 31, 33, 35, 38, 44, 52. Find the five-number summary and the IQR.
Worked answer: median 31 (6th); lower half 18, 22, 25, 27, 29: Q1 = 25; upper half 33, 35, 38, 44, 52: Q3 = 38; five-number 18, 25, 31, 38, 52; IQR 13. Slip: "Q1 = 26" (the median included in the lower half).

**Question 2.** A student's weekly earnings from a part-time job over 8 weeks were $120, $135, $140, $150, $150, $160, $170 and $480 (a holiday week). (a) Find the range and the IQR. (b) Which better describes the spread of a usual week's earnings? Explain.
Worked answer: (a) range 480 − 120 = $360; Q1 = (135 + 140) ÷ 2 = 137.5; Q3 = (160 + 170) ÷ 2 = 165; IQR = $27.50. (b) The IQR: it ignores the top and bottom quarters, so the one holiday week doesn't inflate it; the range depends on that week. Slip: "(b) the range, because it uses the biggest and smallest values".

## 7. Everyday anchors

Sleep (the sample); a batter's scores; food deliveries; part-time earnings. No people.

## 8. Site corrections and decisions for Claude

- MSY-46 (with d16 to d18): lesson13 WE 2's stray line "Q1 = (12 + 15) ÷ 2 = 13.5" beside the correct Q1 = 15.
- Year 12 b02 recalls outliers (d18); this video does not test outliers.
- Pace: about 9 minutes.
