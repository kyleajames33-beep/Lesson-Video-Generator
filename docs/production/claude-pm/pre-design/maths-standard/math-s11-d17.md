# math-s11-d17: How do parallel box plots compare two groups?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Five-number summary and box plots", outcome MST-11-08:

- `cia0dff040`: Compare and contrast the measures of centre, spread and shape using parallel box plots [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson13 card 09; lesson07 cards 05, 06, WE).

**Entry knowledge:** math-s11-d16 (box plots; a quarter per section; shape from whiskers); math-s11-d15 (IQR against range); math-s11-d14 (comparison sentences; same measure for both; the observational caution); math-s11-d09 (skew).

**Prior video:** math-s11-d16. **Start:** d16's final frame (the bedroom; two box plots on one scale, "phone in bedroom" 3, 6, 6.75, 7.5, 8.5 and "elsewhere" 7, 7.5, 8, 8.75, 9.5; chips "Two boxes, one scale?", "Next: parallel box plots", "?").

**Stop:** parallel box plots ("two or more box plots drawn on the same scale"); why one scale matters; comparing centre (medians; how much higher; the overlap of boxes: one group's Q1 against the other's Q3); comparing spread (IQRs and ranges, and why they can disagree); comparing shape (whiskers and median positions); a written comparison covering centre, spread and shape with numbers, context and the caution. Not: outliers by rule (d18); the effect of an outlier (d19).

**Next:** math-s11-d18: at the left, the sleep box plot (d16's) with the dot at 3 ringed grey and a chip "unusual?"; at the right, a dot plot of 16 students' travel times to school (6, 8, 10, 10, 12, 12, 15, 18 and 42, 45, 45, 48, 50, 52, 55, plus 95), with the bus plate small above the right-hand group; chips "Unusual, or just different?", "Next: clusters, gaps and outliers", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson13.sa.html`: card 09 ("Side-by-side box plots ... Always comment on: Centre ... Spread ... Skewness ... Outliers"; Class A median 72, IQR 10 against Class B 75, 18; "HSC tip: In a written comparison, always address both centre and spread"); MC 5; SA 2 (two classes with summaries and "outliers"). `year11/data-analysis/lesson07.sa.html`: card 06 (a full comparison statement); WE (Class X and Class Y).

Recalculated: lesson13 SA 2's stated outliers (Class A 45, Class B 35) are inside their own fences (39.5 and 22.5) and Class A's 45 is below its stated minimum of 50 (MSY-46); lesson07 WE's final line contradicts its equal ranges (MSY-45). Site decisions: card 09's four headings become the comparison checklist (centre, spread, shape; outliers in d18); the site's term "side-by-side" is said once as another name; the syllabus term "parallel box plots" is used.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Bedroom (12) | 3, 6, 6.75, 7.5, 8.5 | IQR 1.5; range 5.5; whiskers 3 and 1 |
| Elsewhere (8) | 7, 7.5, 8, 8.75, 9.5 | IQR 1.25; range 2.5; whiskers 0.5 and 0.75 |
| Centre | 8 − 6.75 | elsewhere median 1.25 h higher |
| Overlap | bedroom Q3 = elsewhere Q1 = 7.5 | 10 of 12 bedroom values ≤ 7.5; 7 of 8 elsewhere values ≥ 7.5 |
| Spread | IQRs 1.5 and 1.25 (close); ranges 5.5 and 2.5 | the range gap comes from the bedroom group's left whisker |
| Shape | bedroom: left whisker 3 h against 1 h; elsewhere: whiskers 0.5 and 0.75, median nearer Q1 | bedroom negatively skewed; elsewhere roughly symmetric |
| A1 | Route 1: 22, 25, 27, 29, 40; Route 2: 18, 24, 30, 33, 36 | Route 2 median 3 min higher; IQRs 4 and 9: Route 1 more consistent; equal ranges (18) |
| A2 | Class A: 35, 60, 72, 78, 85; Class B: 50, 58, 64, 75, 98 | A negatively skewed (whiskers 25 and 7); B positively skewed (8 and 23) |

## 4. Misconceptions and HSC-style traps

- Comparing box plots drawn on different scales.
- Comparing only medians (site trap "ignoring spread").
- Judging spread by the range alone when one whisker is long.
- Reading "box further right" as "more spread".
- Writing comparisons without numbers or direction.
- Claiming cause from two observed groups.

## 5. Visual needs

Two box plots (the hook); a scale-mismatch demo (two box plots on different scales that look equal, then snapped onto one scale); a centre lens (median lines extended into dashed verticals with a difference arrow); an overlap band (bedroom Q3 and elsewhere Q1 meeting at 7.5); spread brackets (IQR and range for each group); shape pointers on the whiskers; a three-row comparison table (centre, spread, shape) filling in; a sentence builder.

## 6. Two original candidate practice questions

**Question 1.** Parallel box plots show journey times (minutes) on two bus routes. Route 1: min 22, Q1 25, median 27, Q3 29, max 40. Route 2: min 18, Q1 24, median 30, Q3 33, max 36. (a) Which route has the higher median, and by how much? (b) Which route is more consistent for the middle half of journeys? Justify.
Worked answer: (a) Route 2, by 3 minutes (30 against 27). (b) Route 1: its IQR is 4 minutes against 9 (the ranges are equal, 18, so they can't separate the routes). Slip: "(b) both the same, because the ranges are equal".

**Question 2.** Parallel box plots show two classes' test results. Class A: 35, 60, 72, 78, 85. Class B: 50, 58, 64, 75, 98 (min, Q1, median, Q3, max). Describe and compare the shapes of the two distributions.
Worked answer: Class A is negatively skewed (left whisker 25 marks against 7; median nearer Q3). Class B is positively skewed (right whisker 23 against 8; median nearer Q1). Slip: "Class A is positively skewed, because its box is further right".

## 7. Everyday anchors

Sleep by phone location (the investigation); two bus routes; two classes. No people.

## 8. Site corrections and decisions for Claude

- MSY-46 (with d16, d18): lesson13 SA 2's outliers inside the fences and below the stated minimum.
- Pace: about 8 to 9 minutes (one point; the comparison is practised in depth).
