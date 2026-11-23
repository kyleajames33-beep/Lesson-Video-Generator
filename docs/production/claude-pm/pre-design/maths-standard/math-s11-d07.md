# math-s11-d07: Which graph suits a dataset, including categorical data and spreadsheet graphs?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Display and interpret grouped and ungrouped data", outcome MST-11-08:

- `cic1f6796f`: Represent categorical datasets in tables and column graphs as appropriate, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson12: "Bar charts are for categorical data (bars have gaps)").
- `ci01aceb17`: Select the type of graph best suited to represent various single datasets and justify the choice of graph. Site coverage: covered (lesson12 match activity; MC 5).
- `cia127389f`: Use a spreadsheet to organise and represent data using appropriate graphs. Site coverage: missing (MSY-39).

**Entry knowledge:** math-s11-d05 (the type tree; nominal and ordinal); math-s11-d06a and d06b (frequency tables; histograms touch; spreadsheet chart with the gap at zero); math-s11-d04 (the bus and bedroom counts); math-s11-f08 (spreadsheet formulas).

**Prior video:** math-s11-d06b. **Start:** d06b's final frame (the phone dock at the left; the table "bedroom 12, kitchen 5, lounge room 2, other 1, total 20"; a ghost histogram lightly crossed; chips "Which graph?", "Next: choosing a graph", "?").

**Stop:** categorical frequency tables with a percentage column; a two-way table (phone location by travel); the column graph (gaps, equal widths, axis from zero, title, labels; nominal in any order, often largest first; ordinal kept in order); a spreadsheet (raw answers in a column, COUNTIF to organise, a percentage formula, a column chart, a histogram for numerical data); choosing a graph for one dataset by its type and the question (column graph, dot plot, histogram, stem-and-leaf, line graph, sector graph and divided bar previewed), with a justification sentence. Not: reading the six named displays in detail (d08); shape (d09); misleading graphs (d10).

**Next:** math-s11-d08: the cricket scoreboard `ma12-cricket-scoreboard-v1.png` with a coded stem-and-leaf plot of a batter's 15 scores on its green board (stems 0 to 8; key "2 | 4 = 24 runs"), and four small coded graphs around it (a dot plot, a line graph, a sector graph, a divided bar chart); chips "What does each one tell us?", "Next: reading statistical graphs", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson12.sa.html`: card 06's "Bar chart vs histogram: Bar charts are for categorical data (bars have gaps). Histograms are for continuous numerical data (bars touch)"; the match activity (histogram, stem-and-leaf, frequency table, back-to-back); MC 1 (histogram against bar chart); MC 5 (back-to-back to compare two classes keeping every value).

No lesson uses a spreadsheet to organise or graph data (crosswalk: missing). This video teaches it from the syllabus (ruling 3; MSY-39). Site decisions: the gaps-against-touching contrast is used (scene 3); the site says "bar chart", the syllabus says "column graph", and the video uses "column graph" (MSY-39); the "choose by type and question" scene is original.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Percentages | 12, 5, 2, 1 of 20 | 60%, 25%, 10%, 5% (100%) |
| Two-way table | bedroom: bus 5, nearby 7; elsewhere: bus 1, nearby 7 | row totals 12, 8; column totals 6, 14; 20 |
| How rested? (ordinal) | not at all 2, a little 5, somewhat 7, quite 4, very 2 | 20 |
| Spreadsheet | =COUNTIF(B2:B21,"bedroom"); =C2/20 | 12; 0.6 = 60% |
| A1 | comedy 9, drama 4, reality 7, documentary 5 (25) | 36%, 16%, 28%, 20% |
| A2 | coffee sales each day for 4 weeks; masses of 60 apples | line graph; histogram |

## 4. Misconceptions and HSC-style traps

- Touching bars for categories (a histogram habit), or gaps for a histogram.
- Reordering ordinal categories (rating scales) by size.
- A vertical axis that doesn't start at zero on a column graph (d10 develops it).
- Choosing a graph by appearance rather than by data type and question.
- A sector graph for data that aren't parts of one whole.

## 5. Visual needs

The phone dock and the location table (the hook); a percentage column writing in; a two-way table filling from tokens; a column graph drawing with gaps; an ordinal graph whose bars refuse to be sorted; an unbranded spreadsheet (raw answers column, COUNTIF, percentage, chart insert); a graph chooser (cards with datasets fall through d05's type tree into graph bins, with the reason written as they land).

## 6. Two original candidate practice questions

**Question 1.** Twenty-five students named their favourite streaming genre: comedy 9, drama 4, reality 7, documentary 5. (a) Write each as a percentage of the 25 students. (b) In a column graph of these data, should the columns touch? Explain.
Worked answer: (a) 36%, 16%, 28%, 20%. (b) No: the genres are categories, with nothing between them on a number line, so the columns have gaps. Slip: "(b) yes, like a histogram".

**Question 2.** Choose the most suitable graph for each dataset and justify your choice. (i) A café's coffee sales each day for four weeks. (ii) The masses of 60 apples from an orchard.
Worked answer: (i) a line graph: the data change over time, and a line shows the rise and fall from day to day. (ii) a histogram: mass is continuous numerical with many values, so group it into classes. Slip: "(ii) a column graph with a column for each apple".

## 7. Everyday anchors

Where phones charge (the sample of 20); how rested students feel; streaming genres; a café's sales; apples. No people.

## 8. Site corrections and decisions for Claude

- MSY-39: no spreadsheet organising or graphing on the site; "bar chart" against the syllabus's "column graph".
- Year 12 b06 recalls "Year 11: spreadsheet charts" and p07 "categorical data in tables": use "spreadsheet chart" and "table" in those words.
- Pace: about 9 minutes.
