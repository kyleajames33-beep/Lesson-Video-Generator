# math-s11-d12: When is the mean, median or mode the right measure of centre?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Measures of centre and spread", outcome MST-11-08:

- `ci1ce7c84d`: Examine the merits of each measure of centre and justify where each measure is most appropriately used [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson10 cards 06, 08; match activity; lesson07).
- `ci6dfbf5c5` (shared with d14; d12 takes measures of centre, d14 measures of spread): Identify and describe real-world examples illustrating appropriate and inappropriate uses of measures of centre and measures of spread. Site coverage: covered (lesson10 SA 3; lesson07).

**Entry knowledge:** math-s11-d11 (mean, median, mode; the sleep sample's 7.2, 7.5, 7.5); math-s11-d09 (symmetric and skewed shapes; "the tail tells the skew"); math-s11-d06a (screen time, positively skewed).

**Prior video:** math-s11-d11. **Start:** d11's final frame (the sleep dot plot with the mean 7.2, median 7.5 and mode 7.5 marked, the 3 h dot ringed; chips "Which one is typical?", "Next: choosing a measure of centre", "?").

**Stop:** the merits of the mean (uses every value; gives totals; best for symmetric data with no extreme values; pulled by extreme values and tails), the median (resists extreme values; best for skewed data; ignores how far the extremes go), the mode (the only choice for nominal categories; most popular size or item; may not exist or be central); shape and centre (symmetric: mean ≈ median; positively skewed: mean above the median; negatively skewed: mean below; "the mean is pulled towards the tail"); appropriate and inappropriate real-world uses (median house prices; a mean wage dragged by a manager; a mean shoe size nobody wears; a mean battery life for a symmetric test); justifying a choice in a sentence. Not: spread (d13, d14); outliers by rule (d18, d19).

**Next:** math-s11-d13: the bus stop `ma12-bus-stop-v1.png` with two dot plots of minutes late over six days: Bus A 3, 4, 4, 4, 5, 4 and Bus B 0, 1, 2, 6, 7, 8, each with a teal triangle at 4; chips "Same mean, same bus?", "Next: range and standard deviation", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson10.sa.html`: intro (five incomes with $1,000,000: mean $238,000, median $50,000); hook and revisit (house prices 600 to 2,500 thousand: mean ≈ 928.6, median 680); card 06 ("Key advantage of median: Not affected by outliers"); card 08 (outliers and skew; "Right-skewed (positive skew): Long tail to the right. Mean > Median"; "house price reports and income statistics almost always quote the median"); match activity (mansion: median; shoe size: mode; symmetric scores: mean; CEO: median); SA 3 (CEO $2M and 99 at $50K; mean $69,500); MC 3. `year11/data-analysis/lesson07.sa.html` trap 01 ("Comparing different measures").

All values recalculated: no arithmetic error. Site decisions: the house prices (the site's hook) are used as written (scene 3); the merits and the skew rule follow card 08; the site's CEO and $1,000,000 income examples are replaced by a small café's pay (scene 6, attempt 1); "The mean is the only measure of centre affected by outliers" is kept in spirit ("the mean is pulled"; the mode can move too, MSY-43).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Sleep | mean 7.2, median 7.5; 11 of 20 values above the mean | mean below the median (negative skew) |
| Sleep, 3 dragged to 7 | 148 ÷ 20 | mean 7.4; median stays 7.5 |
| Screen time (30) | 6565 ÷ 30; positions 15, 16: 195, 205 | mean 218.8; median 200 (positive skew) |
| House prices (thousands) | 600, 620, 650, 680, 700, 750, 2500 | mean 6500 ÷ 7 = 928.6; median 680 |
| Hoodie sizes (40 sold) | S 8, M 15, L 12, XL 5 | mode M |
| A1 café pay | 600, 650, 650, 700, 720, 2880 | mean 6200 ÷ 6 = 1033.33; median (650 + 700) ÷ 2 = 675 |
| A2 | (i) phone case colour; (ii) a suburb's house prices | mode; median |

## 4. Misconceptions and HSC-style traps

- "The mean is always best because it uses every value."
- Thinking the median is "less accurate".
- Quoting a mean for skewed data (incomes, house prices).
- A mean for nominal categories, or a mean shoe size nobody wears.
- Comparing the mean of one group with the median of another.

## 5. Visual needs

The sleep dot plot with three markers (the hook); a drag simulation (an extreme dot slides while the mean triangle follows and the median line stays); the screen-time histogram with mean and median marked; a street of houses as a coded value strip with one mansion; the club hoodie plate with size tags and a column graph; a shape-centre panel (symmetric, positive, negative with the mean marker pulled towards the tail); a real-world gallery of claims marked "fits" or "misleads".

## 6. Two original candidate practice questions

**Question 1.** The weekly pays of six café workers are $600, $650, $650, $700, $720 and $2,880 (the manager). (a) Find the mean and the median. (b) Which better describes a typical worker's pay? Justify your choice.
Worked answer: (a) mean 6200 ÷ 6 = $1,033.33; median (650 + 700) ÷ 2 = $675. (b) The median: the manager's much higher pay pulls the mean above five of the six pays. Slip: "(b) the mean, because it uses every value".

**Question 2.** Choose the most appropriate measure of centre and justify it. (i) The phone case colour a shop should stock most of. (ii) The typical price of houses sold in a suburb this month, where a few were very expensive.
Worked answer: (i) the mode: colour is categorical, and the shop wants the most popular. (ii) the median: the prices are positively skewed, and the median isn't pulled up by the few expensive houses. Slip: "(ii) the mean, because it's the average".

## 7. Everyday anchors

Sleep (the sample); screen time; house prices; club hoodies; a café's pay; phone cases. No people.

## 8. Site corrections and decisions for Claude

- MSY-43 (with d11): the "only measure" lines; a mode can also be unrepresentative.
- Year 12 z01 says the mean is pulled "towards the tail" (positively skewed): use that wording.
- `ci6dfbf5c5` is shared: d12 covers measures of centre; d14 covers measures of spread.
- Pace: about 9 minutes.
