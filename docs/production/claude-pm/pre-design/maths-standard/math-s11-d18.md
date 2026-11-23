# math-s11-d18: How do we spot clusters, gaps and outliers, and test an outlier formally?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Clusters and outliers", outcome MST-11-08:

- `ci72ffda24`: Identify clusters, gaps and outliers and explain their occurrence in the context of the data [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: partial (outliers taught; clusters and gaps not; MSY-46).
- `ci02be1794`: Apply Q_1 - 1.5 × IQR and Q_3 + 1.5 × IQR to formally identify outliers. Site coverage: covered (lesson13 card 06; WE 1, 2).

**Entry knowledge:** math-s11-d15 (quartiles; IQR); math-s11-d16 (box plots; "outliers: later"); math-s11-d17 (the 3 h night stretching a range); math-s11-d09 (bimodal: two groups mixed); math-s11-d04 (checking for recording errors).

**Prior video:** math-s11-d17. **Start:** d17's final frame (the sleep box plot with the 3 ringed and "unusual?"; the commute dot plot with two groups and a 95; the bus; chips "Unusual, or just different?", "Next: clusters, gaps and outliers", "?").

**Stop:** cluster ("a group of values bunched close together"); gap ("a stretch of the number line with no values"); outlier ("a value well away from the rest of the data", Year 12 b02's words); explaining each in context; the fences Q1 − 1.5 × IQR and Q3 + 1.5 × IQR; a value below the lower fence or above the upper fence is an outlier; the sleep test (fences 4.25 and 10.25; 3 is an outlier; 5.5 isn't); the box plot with an outlier shown as a separate point and the whisker to the furthest value inside the fences; deciding what to do (check for a recording error; if genuine, keep it and report it; never delete just to tidy); the rule's limit with clustered data (the 95-minute trip passes, because the gap makes the IQR large). Not: the effect of an outlier on each measure (d19).

**Next:** math-s11-d19: two box plots on one scale, "with the 3 h night" (3 as a point, whisker to 5.5) and "without it" (5.5, 6.5, 7.5, 8, 9.5); a summary card with two columns of measures (mean, median, mode, range, IQR, σ) and blank cells in the "without" column; the alarm clock; chips "What changes?", "Next: the effect of an outlier", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson13.sa.html`: hook (5, 8, 12, 15, 18, 20, 22, 25, 30, 100); card 06 (fences; worked example: Q1 12, Q3 25, IQR 13, fences −7.5 and 44.5, 100 an outlier; "Outliers should always be investigated, not automatically removed ... data entry errors (e.g., 100 cm when 10.0 cm was intended)"); WE 1 (temperatures: upper fence 35, "35 = fence exactly", no outliers); WE 2 (60 an outlier, with a stray Q1 line); card 08 (whiskers within the fences; outliers as dots); traps; SA 2. `lesson12.sa.html` mentions outliers in histograms.

Recalculated: card 06 and WE 1 are correct; WE 2 shows a contradictory line "Q1 = (12 + 15) ÷ 2 = 13.5" beside the correct Q1 = 15; SA 2's "outliers" (45 and 35) are inside their own fences (39.5 and 22.5) and Class A's 45 is below its stated minimum of 50 (MSY-46). Site decisions: the fence rule, "investigate, don't automatically remove", and outliers drawn as dots are used; WE 1's boundary case (a value exactly on a fence is not an outlier) is said in one clause; clusters and gaps are taught from the syllabus (MSY-46).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Commute (16) | 6, 8, 10, 10, 12, 12, 15, 18 and 42, 45, 45, 48, 50, 52, 55; 95 | clusters 6 to 18 and 42 to 55; gap 18 to 42 |
| Commute fences | Q1 11, Q3 49, IQR 38; 49 + 57 = 106; 11 − 57 = −46 | 95 is not an outlier by the rule |
| Sleep fences | Q1 6.5, Q3 8, IQR 1.5; 1.5 × 1.5 = 2.25 | lower 4.25; upper 10.25; 3 is an outlier; 5.5 is not |
| Sleep box plot with the outlier | whisker to 5.5; point at 3 | |
| A1 coffee (9 days) | 42, 45, 47, 48, 50, 52, 55, 58, 96 | Q1 46, Q3 56.5, IQR 10.5; fences 30.25 and 72.25; 96 an outlier |
| A2 phones (14) | $180 to $260 (6) and $950 to $1,400 (8) | two clusters, gap $260 to $950; budget and premium phones |

## 4. Misconceptions and HSC-style traps

- Adding 1.5 instead of 1.5 × IQR.
- Using the median instead of Q1 and Q3 for the fences.
- Treating a separate cluster as outliers (A2 slip).
- Deleting outliers automatically (A1 slip).
- Drawing the whisker to the outlier.
- Calling a value exactly on a fence an outlier.

## 5. Visual needs

The commute dot plot (the hook) with cluster outlines and a gap band; a ring and label for an outlier; a fence builder (Q1 and Q3 lines, an IQR bracket that copies itself 1.5 times out from each quartile, dashed fences); the sleep box plot redrawn with the whisker snapping back to 5.5 and the 3 becoming a point; a decision path (check the record: error? correct it; genuine? keep and report); the commute fences landing beyond 95.

## 6. Two original candidate practice questions

**Question 1.** A coffee stall's daily sales over nine days were 42, 45, 47, 48, 50, 52, 55, 58 and 96 (the day of a local festival). (a) Use Q1 − 1.5 × IQR and Q3 + 1.5 × IQR to decide whether 96 is an outlier. (b) Should it be removed? Explain.
Worked answer: (a) median 50; Q1 = (45 + 47) ÷ 2 = 46; Q3 = (55 + 58) ÷ 2 = 56.5; IQR 10.5; upper fence 56.5 + 15.75 = 72.25; 96 > 72.25, so it is an outlier (lower fence 30.25: none below). (b) No: it is a genuine festival day, so keep it and report it, perhaps describing the usual days separately. Slip: "(b) yes, outliers are always removed".

**Question 2.** The prices of 14 phones in a shop are $180, $200, $220, $240, $250, $260, $950, $1,000, $1,050, $1,100, $1,200, $1,250, $1,300 and $1,400. Describe any clusters and gaps, and suggest a reason in context.
Worked answer: two clusters, $180 to $260 and $950 to $1,400, with a gap from $260 to $950: the shop sells budget phones and premium phones, and nothing in between. Slip: "the expensive phones are outliers".

## 7. Everyday anchors

Travel to school (walkers and bus students); sleep (the sample); a coffee stall at a festival; a phone shop. No people.

## 8. Site corrections and decisions for Claude

- MSY-46: clusters and gaps not taught; WE 2's stray line; SA 2's "outliers" inside their fences and below the stated minimum; fences introduced on lesson13 before outliers are defined as dots.
- Year 12 b02 recalls "Year 11: outliers" with "a point well away from the rest": use "a value well away from the rest of the data".
- Pace: about 9 minutes.
