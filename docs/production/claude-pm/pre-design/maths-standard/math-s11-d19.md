# math-s11-d19: How does one outlier change the measures of centre and spread?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). The last video of the Year 11 strand and of Year 11 in playlist order. Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Clusters and outliers", outcome MST-11-08:

- `ci38858a7c`: Explain the impact of outliers on the measures of centre and spread [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson13; lesson11; lesson10 card 08).

**Entry knowledge:** math-s11-d18 (the 3 h night is a genuine outlier; keep and report); math-s11-d11 to d13 (mean, median, mode, range, σ); math-s11-d15 (IQR); math-s11-d12 (the mean follows the extremes; the median stays); math-s11-d01 (the investigation's question and the guideline).

**Prior video:** math-s11-d18. **Start:** d18's final frame (two box plots on one scale, "with the 3 h night" and "without it"; a summary card with rows mean, median, mode, range, IQR, σ, the "with" column filled (7.2, 7.5, 7.5, 6.5, 1.5, 1.39) and the "without" column blank; the alarm clock; chips "What changes?", "Next: the effect of an outlier", "?").

**Stop:** the six measures with and without the outlier (mean 7.2 → 7.42; median 7.5 → 7.5; mode 7.5 → 7.5; range 6.5 → 4; IQR 1.5 → 1.5; σ 1.39 → 1.03); why each moves or doesn't (every value against position); sensitive measures (mean, range, σ) and resistant ones (median, IQR, usually the mode); a high outlier moves the mean and spread the other way; reporting choices (median and IQR with outliers or skew; mean and σ for symmetric data without outliers; report with and without when an outlier is genuine); the investigation's conclusion; the strand and Year 11 close. Not: new measures.

**Next:** Year 12 Mathematics Standard, `math-s12-a01` ("Solving Simultaneous Equations with Graphs"), which opens cold on the driving-school car `ms12-driving-school-car-v1.png` and two quote cards ("School A: $90 booking fee + $65 a lesson", "School B: no fee, $80 a lesson"). d19's final frame shows that picture with grey chips "Data analysis: done" and "Year 11: done" and the chips "Next: Year 12, simultaneous equations" and "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson10.sa.html` card 08 ("An outlier pulls the mean toward it but leaves the median unchanged"); SA 1 (c) (14, 18, 22, 22, 25, 30, 35, 80: the mean falls from 30.75 to 23.71 without 80). `year11/data-analysis/lesson11.sa.html` card 05 (range and outliers) and SA 1 (c) (the IQR claim logged in MSY-44). `year11/data-analysis/lesson13.sa.html` card 06 ("Always report analysis both with and without the outlier if in doubt").

Recalculated: lesson10 SA 1 (c) correct; lesson11 SA 1 (c)'s IQR is 14 without the outlier, not "unchanged 15" (MSY-44). Site decisions: "pulls the mean toward it" and "report both with and without" are used; the "leaves the median unchanged" line is softened to "barely moves" (removing a value can shift the median slightly; here it doesn't because of ties; MSY-47).

## 3. Recalculation (values for the design)

| Measure | With the 3 h night (20 values) | Without it (19 values) | Change |
| --- | --- | --- | --- |
| Mean | 144 ÷ 20 = 7.2 | 141 ÷ 19 = 7.42 | up 0.22 h (about 13 min) |
| Median | 7.5 | 7.5 (10th of 19) | none |
| Mode | 7.5 | 7.5 | none |
| Range | 9.5 − 3 = 6.5 | 9.5 − 5.5 = 4 | down 2.5 h |
| IQR | 8 − 6.5 = 1.5 | 8 − 6.5 = 1.5 | none |
| σ | 1.39 | 1.03 | down about a quarter (26%) |

| Item | Working | Result |
| --- | --- | --- |
| The outlier's distance | 7.2 − 3 | 4.2 h from the mean |
| A1 goals with 31 | 4, 5, 5, 6, 7, 8, 8, 31 | mean 74 ÷ 8 = 9.25; median 6.5 |
| A1 without 31 | 4, 5, 5, 6, 7, 8, 8 | mean 43 ÷ 7 = 6.14; median 6 |
| A2 | one very large outlier removed | mean, range, σ change a lot; median, IQR barely |

## 4. Misconceptions and HSC-style traps

- "The median never changes" (it can shift a little).
- "Removing an outlier makes the data more accurate" (only if it is an error).
- Reporting the mean and σ for data with outliers.
- Forgetting that σ, like the range, is pulled by an outlier.
- Thinking an outlier changes every measure equally.

## 5. Visual needs

d18's two box plots and summary card (the hook); the "without" column filling one row at a time with change arrows; a live drag (the outlier dot dragged from 3 towards the data and far out, with six live readouts); a sensitive/resistant sorting board; the investigation strip lighting its last step with a one-card conclusion; the strand close; the driving-school car and quote cards.

## 6. Two original candidate practice questions

**Question 1.** The goals scored in a season by eight players were 4, 5, 5, 6, 7, 8, 8 and 31 (the star striker). (a) Find the mean and median with and without 31. (b) Which measure of centre changed more? Explain why.
Worked answer: (a) with: mean 9.25, median 6.5; without: mean 6.14 (to two decimal places), median 6. (b) The mean, by 3.11 goals (the median by 0.5): the mean uses every value, so 31 pulls it up, while the median depends only on the middle position. Slip: "(b) the median, because it went down".

**Question 2.** A dataset has one very large outlier. If it were removed, which of these would change a lot: the mean, the median, the range, the IQR, the standard deviation?
Worked answer: the mean, the range and the standard deviation; the median and IQR barely change. Slip: "all five".

## 7. Everyday anchors

Sleep (the investigation's outlier); a soccer season's goals. No people.

## 8. Site corrections and decisions for Claude

- MSY-47: lesson10's "leaves the median unchanged" (it can shift slightly).
- Year 11 close: grey chips "Data analysis: done" and "Year 11: done"; the hand-off to Year 12 a01 shows a01's cold-open picture; Year 12 a01 itself is not changed (math-s12 files are not edited); root may add a line to a01 noting that its first frame matches d19's final frame without the chips.
- Pace: about 9 minutes.
