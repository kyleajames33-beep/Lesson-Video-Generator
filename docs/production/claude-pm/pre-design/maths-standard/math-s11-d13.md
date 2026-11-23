# math-s11-d13: How do the range and standard deviation measure spread?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Measures of centre and spread", outcome MST-11-08:

- `ci5bdca88b`: Identify the range and standard deviation as measures of spread to describe variation in a dataset [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson11 cards 05, 07).
- `ci14ad4af7`: Calculate the range and population standard deviation σ of a dataset using a scientific calculator or other digital tools. Site coverage: covered (lesson11 card 07, WE 2; its "Beyond the syllabus" note says the population σ is assessed, by calculator).

**Entry knowledge:** math-s11-d11 (mean; the calculator's statistics mode, first met for x̄; a spreadsheet's AVERAGE); math-s11-d12 (the two buses, same mean 4); math-s11-d08 (dot plots).

**Prior video:** math-s11-d12. **Start:** d12's final frame (the bus stop; dot plots of Bus A 3, 4, 4, 4, 4, 5 and Bus B 0, 1, 2, 6, 7, 8 minutes late, each with "mean 4 min"; chips "Same mean, same bus?", "Next: range and standard deviation", "?").

**Stop:** measure of spread; range = highest − lowest (A 2, B 8); the range uses two values only, so one extreme day changes it (A with a 15-minute day: 12); standard deviation σ ("sigma") as roughly the typical distance of the values from the mean, using every value; σ from the calculator's statistics mode (σx on the results screen; sx is a different number, not used in this course); a spreadsheet's =MAX()−MIN() and =STDEV.P(); interpreting σ (bigger σ, more spread, less consistent); the sleep sample's σ = 1.39 h. Not: the σ formula by hand; IQR (d15); comparing datasets in full (d14).

**Next:** math-s11-d14: the bedroom plate with two dot plots of the sleep sample split by where the phone charges, "phone in bedroom" (12 values) and "elsewhere" (8 values), each with a teal triangle (6.58 and 8.13) and an amber σ bracket (1.37 and 0.78); a small spreadsheet badge; chips "Which group sleeps more, and more steadily?", "Next: comparing datasets", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson11.sa.html`: hook (Class X 70 to 80 and Class Y 50 to 100, both mean 75); key ideas (range; IQR; "Standard deviation: s = √(Σ(x − x̄)² ÷ (n − 1)) (sample), average distance from the mean"); card 05 (range; "A single outlier can make the range very large"); card 07 (σ and s formulas; steps; 5, 7, 9: σ ≈ 1.63, s = 2.00; "Beyond the syllabus. Data analysis (MST-11-08) names the population standard deviation only ... calculate it in your calculator's statistics mode"); WE 2 (10, 12, 15, 18, 20: σ = √13.6 ≈ 3.69); revisit (X σ ≈ 3.69, Y σ ≈ 17.03); SA 2 (two basketball players; σ 2 and 7.07).

All values recalculated: no arithmetic error in these items. Site decisions: the page's own note (population σ, by calculator) sets the video's line; its key-ideas box leads with the sample formula s, which the video does not show (MSY-44); "average distance from the mean" is softened to "roughly the typical distance" (σ is not exactly the average distance; MSY-44); the formula is not taught (the point says calculator or digital tools); the basketball players are replaced by phone batteries.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Bus A | 3, 4, 4, 4, 5, 4 | range 2; σ = √(2 ÷ 6) = 0.577 (0.58) |
| Bus B | 0, 1, 2, 6, 7, 8 | range 8; σ = √(58 ÷ 6) = 3.109 (3.11); sx = 3.41 (not used) |
| Bus A with a breakdown | 3, 4, 4, 4, 5, 15 | range 12 |
| Sleep (20) | statistics mode | x̄ = 7.2; σx = 1.391 (1.39 h); sx = 1.427 (not used); range 6.5 |
| A1 Phone P | 20, 22, 21, 23, 22, 24 | range 4; σ = 1.29 (sx 1.41) |
| A1 Phone Q | 14, 30, 18, 26, 22, 22 | range 16; σ = 5.16 |
| A2 | X: mean 68, σ 4.2; Y: mean 68, σ 11.5 | same centre; Y more spread; X more consistent |

## 4. Misconceptions and HSC-style traps

- Reading sx instead of σx from the calculator (or STDEV.S instead of STDEV.P in a spreadsheet).
- Thinking a bigger σ means "better" or "higher".
- Using the range alone when one extreme value is present.
- Reporting σ without its units (minutes, hours).
- Thinking σ measures the centre.

## 5. Visual needs

The bus stop and two dot plots (the hook); range brackets (amber) from lowest to highest; a breakdown day sliding out to 15; deviation arms from each dot to the mean; a "typical distance" bar that settles at σ; the calculator's statistics mode screens (a list, a results screen with x̄ and σx lit, sx dimmed and crossed when chosen); a spreadsheet row; σ brackets of 1, 2 widths drawn either side of the mean.

## 6. Two original candidate practice questions

**Question 1.** Two phones were charged six times and their battery life recorded (hours). Phone P: 20, 22, 21, 23, 22, 24. Phone Q: 14, 30, 18, 26, 22, 22. Both have a mean of 22 hours. Use a calculator to find the range and the population standard deviation of each (to two decimal places). Which phone's battery is more consistent?
Worked answer: P: range 4, σ = 1.29; Q: range 16, σ = 5.16. Phone P (smaller range and σ). Slip: "σ for P = 1.41" (the sx line).

**Question 2.** Two classes sat the same test. Class X: mean 68, standard deviation 4.2. Class Y: mean 68, standard deviation 11.5. What do the standard deviations tell you about the two classes?
Worked answer: the centres are the same; Class Y's marks are much more spread out (typically about 11.5 marks from the mean against 4.2), so Class X's results are more consistent. Slip: "Class Y did better, because its standard deviation is bigger".

## 7. Everyday anchors

Two buses (late minutes); sleep (the sample); phone batteries; two classes' test marks. No people.

## 8. Site corrections and decisions for Claude

- MSY-44: lesson11's key-ideas box leads with the sample formula; "average distance from the mean"; SA 1 (c)'s IQR after removing 50 (14, not "unchanged" 15; logged here as the spread page's error).
- Year 12 b05 recalls "Year 11: the calculator's statistics mode" (d13): name the mode in those words; z02 shows "σx"; z01 uses σ "only as how spread out"; z02 and z03 recall "σ on the calculator".
- Pace: about 9 minutes.
