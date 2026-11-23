# math-s11-d06b: How do a cumulative frequency table, histogram and polygon answer "how many below?", by hand and with digital tools?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Second half of outline video d06 (see d06a's pack). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Display and interpret grouped and ungrouped data", outcome MST-11-08:

- `cia7a007a6` (shared with d06a): Represent a numerical dataset as either a frequency distribution table or a cumulative frequency distribution table and graph the associated histogram with polygon, both with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). d06b teaches the cumulative frequency distribution table, the cumulative frequency histogram and polygon by hand, and both sets of tables and graphs with digital tools (a spreadsheet; a statistics app). Site coverage: the cumulative column only (lesson12 card 05); no cumulative graph, no digital tools (MSY-38).

**Entry knowledge:** math-s11-d06a (frequency tables, classes 60–<120, the histogram, the polygon at class centres); math-s11-f08 and e06 (spreadsheet formulas, "=", fill down; the star means times).

**Prior video:** math-s11-d06a. **Start:** d06a's final frame (the screen-time histogram with its polygon; the phone; an amber dashed line at 240 min; chips "4 hours = 240 min", "How many used less than 4 hours?", "Next: cumulative frequency", "?").

**Stop:** cumulative frequency (a running total; "how many are below the end of this class"); the cumulative frequency table; the last value equals the total (a check); the cumulative histogram (a staircase); the cumulative frequency polygon (points at the upper class boundaries, starting at zero at the first class's lower boundary); reading it at boundaries ("less than", "at least", "between"); a spreadsheet (frequency table typed in, running-total formula filled down, column chart with no gaps, line for the polygon); a statistics app binning raw values. Not: reading medians or quartiles from the polygon (d15 recalls it); shape words (d09).

**Next:** math-s11-d07: the phone on its dock (`ma12-phone-dock-v1.png`) at the left; the sample's phone-location table "bedroom 12 | kitchen 5 | lounge room 2 | other 1" at the right; a ghost histogram with touching bars beside it, crossed lightly; chips "Which graph?", "Next: choosing a graph", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson12.sa.html`: card 05's table "Mark range | Frequency | Cumulative frequency" (2, 4, 8, 9, 5, 2; cumulative 2, 6, 14, 23, 28, 30); key line "Cumulative frequency adds up as you go down"; "Include cumulative frequency column to read off percentile positions quickly". No cumulative graph and no spreadsheet or app.

Recalculated: 2 + 4 + 8 + 9 + 5 + 2 = 30; running totals 2, 6, 14, 23, 28, 30 (correct). Site decisions: "adds up as you go down" is the video's spoken rule; the cumulative histogram, polygon and both digital tools are taught from the syllabus (ruling 3; MSY-38); percentiles are not used.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Frequencies | from d06a | 3, 9, 7, 5, 3, 2, 1 |
| Cumulative | running total | 3, 12, 19, 24, 27, 29, 30 |
| Less than 240 min | cumulative at 240 | 19 |
| At least 300 min | 30 − 24 | 6 |
| 180 to under 300 | 24 − 12 | 12 |
| Polygon points | (60, 0), (120, 3), (180, 12), (240, 19), (300, 24), (360, 27), (420, 29), (480, 30) | 8 points |
| Spreadsheet | C2: =B2; C3: =C2+B3, filled down | 3, 12, 19, 24, 27, 29, 30 |
| A1 | battery life 4, 10, 14, 8, 4 (40 phones) | cumulative 4, 14, 28, 36, 40; less than 16 h: 28; at least 18 h: 4 |
| A2 | fun-run polygon (20, 0), (25, 6), (30, 21), (35, 38), (40, 47), (45, 50) | 30 min or more: 29; 30 to under 40: 26 |

## 4. Misconceptions and HSC-style traps

- Plotting cumulative points at class centres (the frequency polygon's rule) instead of upper boundaries.
- Starting the cumulative polygon at the first point instead of zero at the lower boundary.
- Reading "at least" or "more than" straight off the graph (it gives "less than"; subtract from the total).
- Answering with a class frequency when a running total is asked (A1 slip).
- A running total that doesn't end at the total (an adding slip).

## 5. Visual needs

d06a's histogram (the hook); bars sliding to stack into a staircase with a running-total counter; a cumulative table writing row by row; the cumulative polygon's points landing on each bar's top-right corner; a reading guide (an amber line up from the axis and across to the frequency axis); an unbranded spreadsheet grid with the formula bar, fill-down and chart insert; a statistics app screen with a class-width box.

## 6. Two original candidate practice questions

**Question 1.** The battery life of 40 phones (hours): 10–<12: 4; 12–<14: 10; 14–<16: 14; 16–<18: 8; 18–<20: 4. (a) Write the cumulative frequency column. (b) How many phones lasted less than 16 hours? (c) How many lasted at least 18 hours?
Worked answer: (a) 4, 14, 28, 36, 40. (b) 28. (c) 40 − 36 = 4. Slip: "(b) 14" (a class frequency).

**Question 2.** A cumulative frequency polygon for the 5 km times of 50 fun-run entrants passes through (20, 0), (25, 6), (30, 21), (35, 38), (40, 47) and (45, 50), with time in minutes. (a) How many took 30 minutes or more? (b) How many took from 30 to under 40 minutes?
Worked answer: (a) 50 − 21 = 29. (b) 47 − 21 = 26. Slip: "(a) 21".

## 7. Everyday anchors

Phone screen time (the class of 30); phone battery life; a 5 km fun run. No people.

## 8. Site corrections and decisions for Claude

- MSY-38 (with d06a): no cumulative graph and no digital tools on the site.
- Spreadsheet formulas are spoken as "equals C two plus B three"; the grid is coded and unbranded (ruling 90's `SpreadsheetGrid`).
- Pace: about 8 to 9 minutes.
