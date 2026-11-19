# math-s11-f08: How does a spreadsheet apply one formula to a whole table of cases?

Maths Standard research pack (Year 11, Formulas and equations), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Formulas and equations:

- `ciffbbbd58`: Use a spreadsheet to perform calculations involving formulas [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: covered (lesson06).
- `ci2343d424`: Apply given formulas to solve problems in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: covered. Shared with f01: this video applies a formula to many cases at once.

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f01: substitution with order of operations. math-s11-f04: stopping distance = reaction distance + braking distance (the capstone table). Stage 5: reading a table by rows and columns.

**Prior video:** math-s11-f07.

**Start:** The strand has used one formula for one case at a time. A spreadsheet uses one formula for many cases at once: the site's canteen order, =B2*C2+D2.

**Stop:** A spreadsheet as a grid of cells named by column letter and row number; a formula starts with = and uses cell references in place of letters; * for times, / for divide, ^ for a power; reading =B2*C2+D2 as T = qc + f; filling down, where the references change row by row (=B2*C2 becomes =B3*C3); changing one input updates every result; keeping units consistent in a column; a strand capstone: a column of speeds with a filled-down stopping-distance formula, so the table shows how fast stopping distance grows. Absolute references are not taught (consistent with math-s12-a04b). Building a linear model in a spreadsheet is l05.

**Next:** math-s11-l01.

## 2. Site order, sections and worked examples

Read-only source: [formulas-and-equations/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson06.sa.html), SHA256 `83c071741dc7f915df11d2dc4da32d05f7f8652705146894de95a55bb0e1df72`. Formula Modelling with Spreadsheets. Sections: `recall-your-gut-answer`, `spreadsheet-formulas-are-just`, `cell-references-stand-in`, `keep-units-and-inputs`, `worked-examples-3-in`, `common-errors-the-3`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

Card 02: "A spreadsheet formula uses cell references instead of variable names, but the underlying algebra is identical. Change an input cell and every formula that references it updates automatically." "Copying =B2*C2 to row 3 gives =B3*C3 automatically." Card 05: "B2 = Quantity (12), C2 = Cost per item ($\$4$), D2 = Delivery fee ($\$10$). The formula =B2*C2+D2 means total equals quantity times cost per item, plus delivery fee." Card 06: "If a formula expects hours but an input is in minutes, the answer is wrong by a factor of 60."

`we-1`: =B2*C2+D2 with 12, 4, 10: "Total $= 48 + 10 = \$58$ ... Algebra version: $T = qc + f$".
`we-2`: balls and price per ball, =B2*C2, "Copied to row 3: =B3*C3".
`we-3`: $T = 8n + 15$; $n = 10$ gives 95, $n = 14$ gives 127, increase 32 (its "$\$4 \times 8$" is a slip, MS-80 item 2).
Traps: mixing units in a column; "Forgetting the = sign ... The cell displays 'B2*C2'"; not connecting algebra and spreadsheet. Drill: =B2*C2+E2 with 5, 22, 30 gives 140. Q1: 18 × 3 + 12 = $66; Q2 =B2*C2+D2 for pay; Q3 unit consistency.

## 3. Recalculation

- `we-1` 58 (also the quick check); `we-3` 95, 127, 32 (4 items × $8); drill 140; Q1 66.
- Capstone with the site's lesson07 model, =0.3*A2+0.01*A2^2 for speeds 40 to 110 km/h: 28, 40, 54, 70, 88, 108, 130, 154 m (reaction parts 12 to 33 m, braking parts 16 to 121 m).
- Practice: 4 × 18.50 + 3.95 = 77.95; =B2/3.6*1.5 at 60 gives 25.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`). All site answers match.

## 4. Misconceptions and HSC-style traps

- Leaving out the = sign (the cell shows text).
- Typing x for times, or ² for a power.
- Expecting a filled-down formula to keep pointing at row 2.
- Reading =B2*C2+D2 as B2 × (C2 + D2).
- Mixing units in one column (cents with dollars, minutes with hours).
- Typing a value in a formula cell, so it no longer updates.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- An unbranded spreadsheet with column letters, row numbers and a formula bar; a cell clicked shows its formula in the bar and its value in the cell (two views of one thing).
- The formula =B2*C2+D2 with each reference ringed in the same colour as the cell it points to, then the algebra T = qc + f appearing under it with matching colours.
- Fill down as the main moment: the fill handle drags, and the bar shows =B3*C3, =B4*C4 as each row is clicked, the row number ringing amber.
- Change one input (the delivery fee) and every total ripples.
- The capstone: speeds 40 to 110 down column A; reaction, braking and stopping columns fill down; the stopping column's cells grow a bar so 40 to 80 km/h more than triples.

Kit: **SpreadsheetGrid** (requested by math-s12-a04b; not yet built; see the kit-needs file) covers all of this. Until it exists, `FrequencyTable` (a11-data-parts.tsx) shows the house style. `HandTag` for "= means calculate", "* means times", "fill down: B2 becomes B3". No people; the canteen or fundraiser can be a plate.

## 6. Two original candidate practice questions

### Question 1

A spreadsheet works out the cost of concert tickets. Column B holds the number of tickets, column C the price per ticket and column D a booking fee. Cell E2 contains =B2*C2+D2. (a) Find the value shown in E2 when B2 = 4, C2 = 18.50 and D2 = 3.95. (b) Write the formula that appears in E3 after the formula is filled down.

**Worked answer:** (a) 4 × 18.50 + 3.95 = 77.95, so $77.95. (b) =B3*C3+D3.

### Question 2

Cell B2 holds a car's speed in km/h. A driver's reaction time is 1.5 seconds. (a) Write a formula for C2 that gives the reaction distance in metres. (b) What does C2 show when B2 is 60? (c) What formula is in C3 after filling down?

**Worked answer:** (a) =B2/3.6*1.5. (b) 60 ÷ 3.6 × 1.5 = 25, so 25 m. (c) =B3/3.6*1.5.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "=B2*C2+D2 in E3", "filling down changes the row number"). Answers were checked with SymPy.

## 7. Everyday anchors

- A pancake breakfast fundraiser's order sheet: plates ordered, price per plate, a flat fee for the gas bottle (cooking; one formula, many rows).
- The strand's stopping-distance table: one formula filled down a column of speeds (road safety; the capstone that joins f04).
- A scuba course trip's shared costs: course fee per person plus a boat fee shared across the group, one row per group size (travel).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "pancake" and "scuba" no hits; a sausage sizzle was avoided because math-a11-c11 uses one, a canteen because the b and p strands use one). Objects only, never people. Prices are invented examples.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New finding: MS-80 item 2 (`we-3` writes "$\$4 \times 8$" for 4 items at $8).

Decisions for Claude:

- **No absolute references.** math-s12-a04b deliberately left out "$" references for Standard 1; Year 11 matches. If root wants them later, one chip ("$D$2 stays fixed when filled down") can be added.
- **Same vocabulary as a04b:** "spreadsheet: a grid of cells that can calculate"; "cell: one box, named by its column letter and row number"; "formula: a calculation the cell does; it starts with an equals sign"; "fill down: copy a formula into the rows below, where it updates to each row". a04b recalls these in a phrase.
- **Power sign:** show ^ once (the capstone's A2^2), because l05 and Year 12 compound interest spreadsheets (math-s12-i05) use it.
- **Closes the Formulas and equations strand:** the final frame can show the stopping column as points that bend upward beside a straight column, handing to l01 ("some tables make straight lines").
- Pace: 6 to 8 minutes. Not at risk.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
