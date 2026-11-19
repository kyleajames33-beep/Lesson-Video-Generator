# math-s11-e06: How does a spreadsheet model a pay packet with overtime, bonuses and commission?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Ways of earning", outcome MST-11-03:

- `cic3748618`: Use a spreadsheet to model an employee’s income including overtime, salary, bonuses, commission, piecework and royalties [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: missing (crosswalk: "No Earning money lesson uses a spreadsheet.").

CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f08 (`ciffbbbd58`: a spreadsheet applies one formula to a table; cell references, the = sign, fill-down); math-s11-e01 to e05 (each income type). Stage 5: percentages as decimals.

**Prior video:** math-s11-e05 (and f08 for the spreadsheet skills).

**Start:** e05's final frame: a blank, unbranded spreadsheet with column headings Rate, Hours, Overtime hours, Pay, chip "one formula, every worker".

**Stop:** A spreadsheet model of an employee's income: input cells (rate, ordinary hours, overtime hours, sales, items, copies sold) and formula cells; a formula that matches each calculation from e01 to e04 (=B2*C2 for wages; =B2*1.5*D2 for overtime; =E2/52 for a salary as a weekly amount; =F2*$H$1 for commission with the rate in one fixed cell; =G2*$H$2 for piecework; a royalty as rate × price × copies; a bonus as a fixed amount or a percentage of salary; =SUM(...) for the total); fill-down so one formula serves every row; a $ (absolute) reference so changing one rate cell updates every row; reading a formula and predicting its value; a what-if change (commission 2.5% to 3%, overtime hours up). Tax spreadsheets are e12.

**Next:** math-s11-e07.

## 2. Site order, sections and worked examples

No site lesson teaches this point (crosswalk: missing). Teach from the syllabus (root ruling 3); logged in the site corrections, section 2 (existing) and section 11. Year 11 formulas-and-equations/lesson06 (spreadsheets, owned by math-s11-f08, another author) is the only site page on spreadsheets; e06 assumes f08's skills and does not re-teach them.

Useful site numbers to reuse as spreadsheet rows (so the sheet checks answers students have met): lesson01 `we-1` ($26.40 × 38), lesson02 drill 1 ($28.60, 38 + 4 at 1.5: $1258.40), lesson03 `we-1` ($620 + 2.8% of $84 000: $2972.00), lesson03 `we-4` (186 crates × $2.35: $437.10), lesson03 `we-3` (leave loading $868.00).

## 3. Recalculation

Original example values (exact decimal arithmetic, `work/brief-standard-s11-e/practice.py`):

- Garden centre sheet: casual 34.76 × 24 = $834.24; permanent 28.90 × 38 = $1098.20, overtime 28.90 × 1.5 × 3 = $130.05, total $1228.25; salaried manager $72 800 ÷ 52 = $1400.00 a week, end-of-year bonus 5% = $3640.00; commission 2.5% of $18 450 = $461.25; piecework 820 pots × $0.55 = $451.00.
- Royalty sheet (12% of a $9.99 e-book price): 120 sales $143.86 (143.856), 95 sales $113.89 (113.886), 210 sales $251.75 (251.748); sum of the rounded cells $509.50 against $509.49 from the unrounded total (509.496). Use this as a one-line note on rounding display, or keep cells unrounded.
- Site rows: $1003.20, $1258.40, $2972.00, $437.10, $868.00 (all in `recalc-output.txt`).

## 4. Misconceptions and HSC-style traps

- Typing a number into a formula (=B2*0.025) so a rate change needs every cell edited; the fixed rate cell with $ fixes this.
- Filling down a formula with a relative reference to the rate cell, so the rate reference slides off (=F2*H1 becomes =F3*H2, an empty cell).
- Forgetting the = sign (the cell shows text, not a value).
- Treating a percentage cell (2.5%) as 2.5.
- Reading a displayed rounded value as exact.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- SpreadsheetGrid (from the a-strand kit list): column letters, row numbers, a formula bar showing the active cell's formula, fill-down, typed values, a highlighted rate cell with $ signs that pulse when its value changes and every dependent cell updates.
- A formula-to-maths strip: the cell formula (=B3*1.5*D3) written above the matching e02 working line (28.90 × 1.5 × 3), so each formula is read as a calculation students already know.
- A "what if" moment: the commission rate cell changes from 2.5% to 3% and the commission column and total ripple.
- A broken fill-down: a relative reference sliding to an empty cell (a column of zeros), then fixed with $.

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

### Question 1

A spreadsheet calculates weekly pay. Column A holds ordinary hours, column B the hourly rate and column C overtime hours (paid at time-and-a-half). Cell D2 contains =A2*B2+C2*B2*1.5. Row 2 holds A2 = 38, B2 = 29.40, C2 = 4. (a) What value does D2 show? (b) Sales are in F2 and the commission rate (2.5%) is in H1. Write a formula for E2 that gives the commission and still works when it is filled down. (c) F2 = 14 200. What does E2 show, and what does it show if H1 is changed to 3%?

**Worked answer:** (a) 38 × 29.40 + 4 × 29.40 × 1.5 = 1117.20 + 176.40 = $1293.60. (b) =F2*$H$1. (c) 14 200 × 0.025 = $355.00; at 3%, $426.00.

### Question 2

A salaried employee's yearly salary is in cell B2 ($72 800). A bonus of 5% of salary is paid once a year. (a) Write formulas for the weekly pay (C2) and the bonus (D2). (b) Calculate both values.

**Worked answer:** (a) C2: =B2/52; D2: =B2*0.05 (or =B2*$H$3 with 5% in H3). (b) $1400.00 a week; $3640.00 bonus.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1 (b): "=F2*H1", crossed, "without $ the rate cell slides when filled down"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **A garden centre's weekly pay sheet:** rows for a casual worker, a permanent worker with overtime, a salaried manager with a year-end bonus, a commission row for plant sales and a piecework row for potting seedlings (work; carries the main model). Original, labelled numbers.
- **A first e-book's monthly royalties:** a short second sheet, 12% of $9.99 per sale, filled down three months (books; carries royalties and the rounding note).
- **The strand's own answers as rows:** the car yard ($2972.00), the strawberry crates ($437.10) and the road-trip loading ($868.00) typed into the sheet to show the formulas agree with e02 to e05 (a callback, not a new context).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "garden centre", "e-book", "seedling", "pay sheet" no hits ("nursery" appears in a12-i01 and s12-r02 as a plant nursery in other roles; this video says "garden centre"). Claude picks; none is required. Objects, never people; staff rows are labelled by role, not by drawn figures.

**Money figures (root rulings 5 and 32):** the casual row uses the 2026-27 General Retail Award Level 1 casual rate ($34.76, FWO pay guide MA000004, from 1 July 2026; Codex confirms). The other numbers are labelled examples. Say once that award rates change every 1 July (a reason to keep the rate in one cell).

## 8. Site corrections and decisions for Claude

Gap (no site lesson) logged in `../../site-corrections-maths-standard.md`, sections 2 and 11.

Decisions for Claude:

- **Scope.** Six income types are named in the point. Two short sheets (hourly and salaried rows; per-item and royalty rows) cover them without a crowded screen. A bonus can sit on the salaried row.
- **Spreadsheet skills.** Assume f08 for the = sign and fill-down; teach the $ fixed reference here if f08 does not (check the f08 design when it exists).
- **No branding.** Unbranded grid; mention that any spreadsheet program works.
- Pace: WATCH; about 8 to 9 minutes. If a design cannot fit under 570 s, split into hourly and salary rows (e06a) and per-item rows (e06b).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
