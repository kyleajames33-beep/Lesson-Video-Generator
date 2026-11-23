# math-s11-d14: How do we compare two datasets using centre and spread, by hand and in a spreadsheet?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Measures of centre and spread", outcome MST-11-08:

- `ciabf18f84`: Compare datasets using measures of centre and measures of spread [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson07 cards 05, 06; WE; lesson11).
- `ci6dfbf5c5` (shared with d12; d14 takes measures of spread): Identify and describe real-world examples illustrating appropriate and inappropriate uses of measures of centre and measures of spread. Site coverage: covered (lesson07; lesson10).
- `ci6446263f`: Use a spreadsheet to analyse data including calculating measures of centre and spread. Site coverage: missing (MSY-45).

**Entry knowledge:** math-s11-d11 (mean, median, mode; =AVERAGE, =MEDIAN, =MODE); math-s11-d12 (choosing a measure); math-s11-d13 (range; σ; =STDEV.P; =MAX − MIN); math-s11-d07 (COUNTIF; spreadsheet layout); math-s11-d04 (observation, not cause).

**Prior video:** math-s11-d13. **Start:** d13's final frame (the bedroom; two dot plots of the sleep sample, "phone in bedroom" 12 values with mean 6.58 and σ 1.37, "elsewhere" 8 values with mean 8.13 and σ 0.78; a spreadsheet badge; chips "Which group sleeps more, and more steadily?", "Next: comparing datasets", "?").

**Stop:** organising two groups in a spreadsheet; formulas for count, mean, median, range and σ (=COUNT, =AVERAGE, =MEDIAN, =MAX − MIN, =STDEV.P), filled across; comparing centre (same measure for both; which is higher and by how much); comparing spread (which is more consistent and by how much); a full comparison sentence with numbers and context and the observational caution; real-world uses of measures of spread that fit or mislead (a range quoted with one extreme value; an average with no spread hiding risk; σ for consistency); lower-is-better contexts (times). Not: quartiles and IQR (d15); box plots (d16, d17).

**Next:** math-s11-d15: the 20 sleep values on d11's order strip (blue, positions 1 to 20), the violet median line between positions 10 and 11, an amber bracket over the middle of the strip with a "?"; the alarm clock small at the top left; chips "Where's the middle half?", "Next: quartiles and the IQR", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson07.sa.html`: card 02 (centre, spread, shape; "Always compare using the same measures"); card 05 (comparing centre: "School X typically achieves higher results than School Y, with a median 6 marks higher"; comparing spread: machine IQRs 2 mm and 5 mm); card 06 (a full comparison statement); WE (Class X and Class Y five-number summaries); traps ("Comparing different measures", "Ignoring spread", "Comparing without numbers"); SA 1 (two factories, means 50 and 50.5 mm, SD 1 and 3 mm).

Recalculated: the WE's ranges are both 45 (90 − 45 and 95 − 50), so its final line "Class Y is more consistent with a slightly wider overall range" contradicts its own step 3 ("Both have equal range") (MSY-45). No lesson uses a spreadsheet to calculate statistics (crosswalk: missing; MSY-45). Site decisions: the three traps become the comparison checklist (scene 5); the factory SA's idea (consistency matters more than a small mean difference) shapes attempt 1, with new numbers; box-plot comparisons are left to d17.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Phone in bedroom (12) | 3, 5.5, 6, 6, 6.5, 6.5, 7, 7, 7.5, 7.5, 8, 8.5 | n 12; mean 79 ÷ 12 = 6.58; median 6.75; range 5.5; σ 1.37 |
| Elsewhere (8) | 7, 7.5, 7.5, 8, 8, 8.5, 9, 9.5 | n 8; mean 65 ÷ 8 = 8.13; median 8; range 2.5; σ 0.78 |
| Differences | 8.125 − 6.583; 8 − 6.75 | means 1.54 h (about 1.5 h); medians 1.25 h |
| Spread ratio | 1.37 ÷ 0.78 | bedroom σ about 1.75 times |
| Phone plans (example) | 11 plans, $15 to $40 and one $250 | range $235 misleads; most within $25 |
| Delivery (example) | mean 30 min, σ 18 min | the mean alone hides long waits |
| A1 | Machine 1: mean 251 mL, σ 1.2; Machine 2: mean 255, σ 6.8; target 250 | choose Machine 1 |
| A2 | Swimmer A: mean 31.2 s, σ 0.4; B: mean 30.8 s, σ 1.5 | =AVERAGE(B2:B9), =STDEV.P(B2:B9); B faster on average by 0.4 s; A more consistent |

## 4. Misconceptions and HSC-style traps

- Comparing only the centre ("ignoring spread", site trap 02).
- Comparing without numbers ("Group A is more spread out" with no values).
- Comparing one group's mean with the other's median.
- "Higher is better" where lower is better (race times, delivery times).
- A range quoted with one extreme value; an average quoted with no spread.
- Claiming cause from an observational comparison (d04).
- STDEV.S instead of STDEV.P.

## 5. Visual needs

The two sleep dot plots (the hook); a spreadsheet with two columns and a summary block filling across; a comparison board with two scales (centre and spread) and arrows that show "higher by" and "more consistent by"; a sentence builder; a fits-or-misleads gallery for spread.

## 6. Two original candidate practice questions

**Question 1.** Two coffee machines are set to pour 250 mL. Machine 1: mean 251 mL, standard deviation 1.2 mL. Machine 2: mean 255 mL, standard deviation 6.8 mL. Compare the machines using centre and spread, and say which a café should choose.
Worked answer: Machine 1's mean is closer to 250 mL (1 mL over, against 5 mL) and its σ is much smaller (1.2 against 6.8 mL), so its cups are closer to the target and more consistent: choose Machine 1. Slip: "Machine 2, because its mean is higher".

**Question 2.** Swimmer A's eight 50 m times are in cells B2 to B9 and Swimmer B's in C2 to C9. (a) Write spreadsheet formulas for Swimmer A's mean and population standard deviation. (b) The results are A: mean 31.2 s, σ 0.4 s; B: mean 30.8 s, σ 1.5 s. Compare the swimmers.
Worked answer: (a) =AVERAGE(B2:B9) and =STDEV.P(B2:B9). (b) Swimmer B is faster on average (30.8 s against 31.2 s, 0.4 s less); Swimmer A is more consistent (σ 0.4 s against 1.5 s). Slip: "(b) Swimmer A is faster, because 31.2 is higher".

## 7. Everyday anchors

Sleep by phone location (the investigation); phone plans; food delivery; coffee machines; swimmers. No people.

## 8. Site corrections and decisions for Claude

- MSY-45: no spreadsheet statistics on the site; lesson07 WE's contradictory final line about the ranges.
- The comparison stays observational: "tended to", not "caused" (d04).
- Pace: about 9 minutes.
