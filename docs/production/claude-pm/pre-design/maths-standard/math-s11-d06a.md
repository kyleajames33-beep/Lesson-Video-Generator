# math-s11-d06a: Why do we group data, and how do frequency tables, histograms and polygons show it?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Outline video d06 is designed as d06a (grouping, frequency tables, the histogram and polygon) and d06b (cumulative frequency, and both drawn with digital tools), both playlist 66, by ruling 8's test (see the status file, open question on the d06 split). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Display and interpret grouped and ungrouped data", outcome MST-11-08:

- `cib752696f`: Recognise and explain why some datasets need to be grouped to allow for appropriate representation and analysis [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson12 card 05). Owned by d06a.
- `cia7a007a6` (shared with d06b): Represent a numerical dataset as either a frequency distribution table or a cumulative frequency distribution table and graph the associated histogram with polygon, both with and without using digital tools. Site coverage: covered in the crosswalk (lesson12); in fact the polygon and the cumulative graph are not taught (MSY-38). d06a teaches the frequency distribution table, the histogram and the frequency polygon by hand; d06b teaches the cumulative table, histogram and polygon, and both sets with digital tools.

**Entry knowledge:** math-s11-d05 (numerical, discrete, continuous; screen time as continuous); math-s11-d01 ("a box for every answer": no overlaps, no gaps); Stage 4 and 5 column graphs and tallies.

**Prior video:** math-s11-d05. **Start:** d05's final frame (the phone with "Screen time yesterday 2 h 25 min"; 30 values in minutes in three columns; chips "2 h 25 min = 145 min", "30 different answers?", "Next: grouping data", "?").

**Stop:** frequency and the tally; an ungrouped frequency table for discrete data with few values (screens 0 to 3); why screen time must be grouped (nearly every value different); choosing classes (equal width, about 5 to 10 classes, cover the range, each value in exactly one class, "60 to under 120" notation); a grouped frequency table; what grouping loses; the histogram (continuous axis, bars touch, height = frequency, modal class named only as "the tallest bar's class"); the frequency polygon (class centres; closed on the axis half a class beyond each end). Not: cumulative frequency (d06b); digital tools (d06b); shape words (d09); mean from a table (d11).

**Next:** math-s11-d06b: the screen-time histogram with its polygon (small) beside the phone; a question chip "How many used less than 4 hours?"; chips "Next: cumulative frequency", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson12.sa.html`: hook (20 test marks to group); card 05 (frequency tables; a 30-mark table with unequal classes and a cumulative column; class boundaries; "Every value must belong to exactly one class"); card 06 (histograms: "Bars touch each other, no gaps, because the data is continuous"; frequency density for unequal widths; reading shape); WE 1 (20 heights in classes of width 10: 3, 6, 5, 4, 2); drills and SA 1 (width-5 classes).

All site values recalculated: no arithmetic error (hook classes 1, 3, 5, 4, 4, 3; heights 3, 6, 5, 4, 2; SA 1 2, 1, 2, 3, 2, 2, 2, 1). Site decisions: "every value must belong to exactly one class" is used (scene 3, with d01's memory card); equal-width classes only (frequency density is beyond the Standard syllabus, MSY-38); the frequency polygon is taught though the site has none (MSY-38); "bars touch because the data is continuous" is kept and extended: discrete data grouped into adjacent classes also gets touching bars; the heights example (people's heights) is replaced by screen time.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Screens (sample of 20) | tally of 0, 1, 2, 3 | 3, 7, 6, 4 (total 20) |
| Screen time (class of 30) | values 70 to 455 min | 30 values, 29 different counts of 1 (all different) |
| Classes | width 60 from 60: 60–<120, ..., 420–<480 | 7 classes |
| Frequencies | tally | 3, 9, 7, 5, 3, 2, 1 (total 30) |
| Boundary values | 120 and 180 | in 120–<180 and 180–<240 |
| Class centres | (60 + 120) ÷ 2, ... | 90, 150, 210, 270, 330, 390, 450 |
| Polygon ends | centres of the empty classes 0–<60 and 480–<540 | 30 and 510 |
| Tallest bar | 120–<180 | 9 students |
| A1 | 15 values 0 to 4 | 3, 4, 5, 2, 1; at least 2: 8 |
| A2 | 20 delivery times, classes of 10 from 10 | 1, 4, 7, 5, 2, 1; tallest 30–<40, centre 35 |

## 4. Misconceptions and HSC-style traps

- Overlapping class labels ("60–120", "120–180"): where does 120 go?
- Gaps between histogram bars (a column graph habit).
- Plotting the polygon at the class boundaries instead of the centres; leaving it open.
- Too many or too few classes.
- Thinking grouped data still shows every value.

## 5. Visual needs

The 30 values (d05's frame); a tally board that fills as values fly into classes; an "all ones" ungrouped table that scrolls uselessly; a class-width slider (width 20 to 200) re-binning the same 30 values live into a histogram so the shape appears, vanishes into spikes or flattens; the histogram drawing bar by bar with touching bars; the polygon's dots landing on the bar-top centres and the line closing on the axis.

## 6. Two original candidate practice questions

**Question 1.** Fifteen students recorded how many apps they downloaded last week: 0, 2, 1, 3, 1, 0, 2, 2, 4, 1, 2, 3, 1, 2, 0. (a) Make a frequency table. (b) How many students downloaded at least 2 apps?
Worked answer: (a) 0: 3; 1: 4; 2: 5; 3: 2; 4: 1 (total 15). (b) 5 + 2 + 1 = 8. Slip: "(b) 5" (only the 2s).

**Question 2.** Twenty food deliveries took these times (minutes): 18, 22, 25, 27, 29, 31, 33, 34, 35, 36, 38, 39, 40, 42, 44, 47, 49, 52, 58, 63. (a) Complete a frequency table with classes 10–<20, 20–<30, ..., 60–<70. (b) Which class has the tallest bar on the histogram, and at what class centre is the polygon's highest point?
Worked answer: (a) 1, 4, 7, 5, 2, 1 (total 20). (b) 30–<40; centre 35. Slip: "30–<40: 8" (40 counted in it).

## 7. Everyday anchors

Phone screen time (a class of 30); screens in bedrooms (the sample of 20); app downloads; food delivery times. No people.

## 8. Site corrections and decisions for Claude

- MSY-38: lesson12 has no frequency polygon and no cumulative frequency graph; it teaches frequency density (beyond the Standard syllabus) and unequal widths.
- Class notation "60–<120" on screen, said "sixty to under a hundred and twenty".
- Year 12 p05 recalls "a frequency table, a tally": use both words.
- Pace: about 9 minutes.
