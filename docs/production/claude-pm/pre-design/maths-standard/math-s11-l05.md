# math-s11-l05: How does a spreadsheet build and test a linear model?

Maths Standard research pack (Year 11, Linear relationships), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Linear relationships (Linear modelling):

- `ci80b8ed46`: Use a spreadsheet to model a linear relationship in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: partial (spreadsheet formulas are taught generally in formulas-and-equations/lesson06; no lesson builds a linear model in a spreadsheet).

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f08: `ciffbbbd58` (cells, formulas starting with =, *, fill down). math-s11-l03: `cib2d6c0df` (intercept and gradient in context). math-s11-l04: interpolation, extrapolation and a valid range.

**Prior video:** math-s11-l04.

**Start:** l04 ended with a model and its valid range. A spreadsheet can lay out every case in that range at once.

**Stop:** An input column filled with a step; an output column with a formula such as =150+18*A2 filled down; checking the output column has a constant difference equal to the gradient; the intercept in the row where the input is 0; a line chart from the two columns; finding when the output first reaches a target (bracket between two rows, refine the step, round in context); changing the rate or the fixed amount in the formula, filling down again, and watching every row and the chart update; agreeing with the algebra answer. Break-even with cost and revenue columns is math-s12-a04b.

**Next:** math-s11-l06.

## 2. Site order, sections and worked examples

Read-only source (general spreadsheet formulas only): [formulas-and-equations/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson06.sa.html), SHA256 `83c071741dc7f915df11d2dc4da32d05f7f8652705146894de95a55bb0e1df72`. `we-3` is the nearest site content to a linear model: "A formula is $T = 8n + 15$ ... What happens when $n$ changes from 10 to 14?" (95, 127, increase 32: "4 extra items each add $\$8$"). Card 02: "A copied formula repeats the same relationship across rows, just as an algebra formula applies for any value of the variable." The modelling part (a step column, a chart, a target, a parameter change) is original teaching (root ruling 3).

## 3. Recalculation

- Lesson06 `we-3`: 95, 127, 32.
- New worked example (ice skating party, invented prices): C = 150 + 18n gives 150, 168, 186, 204, 222, 240 for n = 0 to 5 (constant difference 18). Budget $400: 150 + 18n = 400 gives n = 125/9 ≈ 13.9; 13 skaters cost $384, 14 cost $402, so at most 13.
- Practice: =45+12.5*A2 at A2 = 8 gives 145; rows 30, 38.5, 47 have difference 8.5 and start 30, so C = 30 + 8.5n.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Putting the gradient where the intercept goes (=18+150*A2).
- An input column that does not step evenly, so the differences look uneven.
- Reading "13.9 skaters" as 14 when a budget means rounding down.
- Forgetting to fill down again after editing the formula.
- Charting the wrong column on the horizontal axis.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Spreadsheet build: header row, input column 0, 1, 2 ... filling, the formula typed once in B2 and filled down; a "+18" arrow between each pair of output cells.
- The row with input 0 ringed: "the intercept lives here".
- A line chart growing from the two columns beside the grid, each row lighting its point.
- The budget target: the $400 row bracket between 13 and 14 (shaded), refined to show 13 is the last row under budget.
- An edit to the rate (18 to 20): the column ripples and the chart line swings steeper, the intercept fixed.

Kit: **SpreadsheetGrid** (not yet built; requested by a04b; see the kit-needs file) plus a small linked chart option; `StudioPlot`; `IntervalPicture` for the bracket. Objects only for the anchor plate.

## 6. Two original candidate practice questions

### Question 1

A spreadsheet models the cost of hiring a party bus. Column A holds the number of hours and cell B2 contains =45+12.5*A2, filled down. (a) What is the value in column B when A shows 8? (b) Interpret 45 and 12.5 in context.

**Worked answer:** (a) 45 + 12.5 × 8 = 145, so $145. (b) 45 is the fixed cost in dollars before any hours (the vertical intercept); 12.5 is the cost per hour, $12.50 (the gradient).

### Question 2

A spreadsheet shows a linear model: when A is 0, 1, 2, column B shows 30, 38.5, 47. (a) Write the formula that would be in B2 (with A2 holding the input). (b) Write the model as an equation.

**Worked answer:** (a) =30+8.5*A2. (b) y = 30 + 8.5x (difference 8.5 each step; 30 when x = 0).

Only the question goes on the card. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 2: crossed "=8.5+30*A2"). Answers were checked with SymPy.

## 7. Everyday anchors

- An ice skating party: a room fee plus a price per skater, with a budget limit (entertainment; the worked example).
- A hot chips van at a weekend market: set-up costs plus a cost per serve, modelled across a day (food; a business model).
- A mobile car detailing side job: a callout amount plus a rate per car (part-time job).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "skating rink" and "hot chips" no hits; car detailing appears once, in math-s12-a04a, so Claude should prefer the first two). Objects only, never people. Prices are invented examples.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. The partial gap is already in section 2.

Decisions for Claude:

- **Do not teach break-even** (two lines, cost against revenue): math-s12-a04b owns it. One model, one column of outputs.
- **Year 12 needs:** a04b recalls "Year 11 Standard f08 (spreadsheet formulas) and l05 (a linear model in a spreadsheet)"; i13 assumes cells, formulas and fill-down. Use a04b's vocabulary and its "edit one number, fill down again" move; no absolute references.
- **Outline note:** math-s12-i13's pack calls l05 "the first spreadsheet video"; f08 is first. Not a problem for this design.
- Pace: 6 to 8 minutes. Not at risk.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
