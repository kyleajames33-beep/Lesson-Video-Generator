# math-s12-i13: How does a reducing balance loan change from one period to the next?

Maths Standard research pack (Year 12, Investment, loans and annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans, group "Loans"):

- `ci94e049c3`: Model a reducing balance loan as an application of compound interest with periodic repayments in tabular form for up to four time periods, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.
- `cibb416d3e`: Use a spreadsheet to model and solve problems involving a reducing balance loan in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1 (Year 12, Depreciation and loans, group "Loans"):

- `cib9ea7be8`: Model a reducing balance loan as an application of compound interest, given the interest rate per time period, with periodic repayments, using a table for up to three time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered (Standard 2 lesson; the site has no Standard 1 pages).
- `cica72a281`: Use a spreadsheet to model and solve problems involving a reducing balance loan in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered.

These are CMS codenames, not published content-point codes (ruling 16). Exact HTML is in the crosswalk and in `programme/maths-standard-route-inputs-3.json`.

**Course:** Standard 1 and Standard 2. The two courses differ only in the table length: Standard 1 says "given the interest rate per time period" and "up to three time periods"; Standard 2 says "up to four time periods" and "with and without using digital tools". Teach three rows, then add the fourth as the Standard 2 row. The spreadsheet point is word for word the same in both courses.

**Entry knowledge:** math-s12-i02: `ci64a24122` (compound interest: the balance is multiplied by 1 + r each period; Standard 1 `cib6fe9f5b`); math-s12-i12: `ciad381478` (a loan's total cost is the total paid minus the amount borrowed, and a lender's repayment figure is taken as given); math-s11-l05 or math-s12-a04b: a spreadsheet's cells, formulas and fill-down (a04b is Standard 1 and 2; Year 11 l05 is the first spreadsheet video). Also used: converting an annual rate to a monthly rate (i04, `ciaa253014`, Standard 2; Standard 1 is "given the rate per time period", so show the monthly rate already worked out for Standard 1).

**Prior video:** math-s12-i12.

**Start:** i12 ends on the e-bike's 2-year loan: $3,000 borrowed, $141.22 a month, and the question "where does each $141.22 go?". This video opens a month-by-month table to answer it.

**Stop:** Model a reducing balance loan in a table, one row per period: interest = balance × rate per period, add it, subtract the repayment, carry the new balance to the next row (three rows for Standard 1, four for Standard 2); explain why the interest falls each period while the repayment stays the same (the balance falls), so more of each repayment reduces the debt; build the same table in a spreadsheet with the link "next opening balance = last closing balance" and fill down; change one cell (the repayment or the rate) to answer a new question. Extra repayments, lump sums and repayment frequency are i14; the repayment, amount owing, total paid and time to repay are i15; credit cards are i16.

**Next:** math-s12-i14.

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at `5d74a627`, read from `C:/Users/kygs/teaching-app-fix`, not modified):

- [investment-and-loans/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson08.sa.html), SHA256 `13b6a566e1fce40d02e973d1b5dcb86cb64a519b15c9c123b15afae5766541e0`. Title: Loans and Amortisation. Lesson id maths-std-y12-m7-l07. Sections (`data-step-id`): `orient-to-amortisation`, `read-an-amortisation-schedule`, `make-extra-repayments`, `compare-loans-and-terms`, `avoid-the-amortisation-traps`, `drill-and-revisit-amortisation`, `practise-amortisation`, `finish-amortisation`. This video uses `read-an-amortisation-schedule` (card 05) and the drill.
- [investment-and-loans/lesson09.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson09.sa.html), SHA256 `635c4a42aa2d954f404df8cd664221d1ca8b2ebe7085c1563152c4cac7d206ff`. Title: Reducing Balance Loans. Lesson id maths-std-y12-m7-l08. Sections: `orient-to-reducing-balance-loans`, `the-hidden-cost-of-a-flat-rate`, `reducing-balance-loans`, `find-the-true-rate`, `avoid-the-advertised-rate-traps`, `drill-and-revisit-reducing-balance`, `practise-reducing-balance-loans`, `finish-reducing-balance-loans`. This video uses card 06 (`reducing-balance-loans`) and the spreadsheet card 08 inside `drill-and-revisit-reducing-balance`.

### Source lesson09, spreadsheet card ("Modelling a reducing balance loan in a spreadsheet")

"A reducing balance loan cannot be done in one calculation, because each month's interest depends on the balance the previous month left behind." "Take $20 000 borrowed at 6% p.a. compounded monthly, so 0.5% a month, with a repayment of $600." Cells: "B2 | opening balance, 20000"; "C2 | interest for the month, =B2*0.005"; "D2 | principal repaid, =600-C2"; "E2 | closing balance, =B2-D2"; "B3 | next opening balance, =E2 | yes, and this is the link that makes it work". Rows: 1: $20 000.00, $100.00, $500.00, $19 500.00; 2: $19 500.00, $97.50, $502.50, $18 997.50; 3: $18 997.50, $94.99, $505.01, $18 492.49; 4: $18 492.49, $92.46, $507.54, $17 984.95. "The repayment never changes, but the split does." "Raise the repayment to $700 and the loan clears sooner; raise the rate to 0.6% a month and every later row changes on its own."

### Source lesson08, card 05 ("Amortisation schedules, tracking every dollar")

"$20,000 car loan at 7.2% p.a. compounded monthly over 3 years." r = 0.006, n = 36, repayment $619.37 (from the repayment formula). Rows 1 to 3: $20,000.00, $120.00, $499.37, $19,500.63; $19,500.63, $117.00, $502.37, $18,998.26; $18,998.26, $113.99, $505.38, $18,492.88; final row 36: $615.68, $3.69, $615.68, $0.00. Drill 1: "Create the first 4 months of an amortisation schedule for a $30,000 loan at 6% p.a. compounded monthly over 4 years."

### Source lesson09, card 06 (reducing balance)

"A reducing balance loan charges interest only on the outstanding balance each period: interest = r × current balance. As you repay principal, the interest component falls each period".

Only the parts named in the stop boundary belong to this video. The flat-rate comparison, the "true rate" formula and payday lending in lesson09 are not in the 2024 Year 12 points (lesson09 itself marks the conversion formula as beyond the syllabus); the repayment formula in lesson08 is not on the Standard reference sheet. Neither is taught here.

## 3. Recalculation

- Opener (the e-bike loan from i12, $3 000 at 1% a month, $141.22): interest $30.00, end $2 888.78; $28.89, $2 776.45; $27.76, $2 662.99. Three rows are enough to show the interest falling before the video moves to the site's spreadsheet example.
- Spreadsheet card ($20 000, 0.5% a month, $600): all four rows match the site to the cent. Carried on, the loan clears in 37 months with a last payment of $333.60 and total interest $1 933.60 (interest rounded to the cent each month).
- The card's "change one cell" claims: at $700 a month the loan clears in 31 months (total interest $1 635.15); at 0.6% a month and $600, row 1 becomes $120.00 interest, $480.00 repaid, $19 520.00, and the loan takes 38 months (interest $2 381.62).
- Card 05 ($20 000, 0.6% a month, $619.37): rows 1 to 3 match the site to the cent; the repayment $619.37 is correct (619.3651...). Carried on with the rounded repayment, a 37th payment of $0.10 is left, which is why real schedules adjust the last payment.
- Drill 1 ($30 000 at 0.5% a month, 48 months): repayment $704.55; rows: $150.00 / $554.55 / $29 445.45; $147.23 / $557.32 / $28 888.13; $144.44 / $560.11 / $28 328.02; $141.64 / $562.91 / $27 765.11 (the site gives no answer).

Every value was recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`, output in `recalc-output.txt`). All site values used here match. Keep the site's numbers; round interest to the cent each row, as a bank statement does.

## 4. Misconceptions and HSC-style traps

- Charging every month's interest on the original amount borrowed (the flat-rate habit from Year 11 buying on terms).
- Subtracting the repayment before adding the interest, or using the annual rate (6%) as the monthly rate.
- Thinking the repayment falls because the interest falls. The repayment is fixed; the split changes.
- Copying the opening balance down a spreadsheet column (=B2 instead of =E2), so every row shows the same interest.
- Treating "principal repaid" and "balance" as the same column.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- One reducing-balance table built row by row with the HSC column order the syllabus implies: Period, Balance at start, Interest (balance × rate), Balance plus interest, Repayment, Balance at end; each end balance flies down to become the next start balance. Standard 1 stops at row 3 with a grey "Standard 1 stops here" chip; row 4 is the Standard 2 row.
- `LoanBalanceBar` (finance-parts.tsx) beside the table: the amber interest cap grows, the teal repayment bite drops off, month by month. The cap visibly shrinks while the bite stays the same width: the whole lesson in one picture.
- A split bar for each repayment: $600 cut into interest (amber) and principal repaid (teal); four bars side by side, amber shrinking, teal growing.
- The spreadsheet: SpreadsheetGrid (the coded spreadsheet requested in `maths-standard-kit-needs-a.md`) with the formula bar, the =E2 link drawn as an arrow from E2 to B3, fill-down, then one input cell changed ($600 to $700) and every later row recalculating.
- A small graph of closing balance against month (curving down to zero), drawn from the filled spreadsheet.

Advanced reuse (visual parts only, ruling 7): math-a12-f09 built the balance table and `LoanBalanceBar` for a recurrence; Standard uses the same pictures without the recurrence notation or the geometric sum. `loanSchedule` in `money.ts` already produces cent-rounded rows. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A $12 000 loan for a second-hand tinny and trailer charges interest at 0.75% per month on the balance owing. The repayment is $380 per month. Copy and complete the table for the first three months (Standard 2: four months).

| Month | Balance at start | Interest | Balance plus interest | Repayment | Balance at end |
| --- | --- | --- | --- | --- | --- |
| 1 | $12 000.00 | | | $380.00 | |
| 2 | | | | $380.00 | |
| 3 | | | | $380.00 | |

**Worked answer:** Month 1: interest $90.00, $12 090.00, end $11 710.00. Month 2: interest $87.83, $11 797.83, end $11 417.83. Month 3: interest $85.63, $11 503.46, end $11 123.46. (Standard 2, month 4: interest $83.43, end $10 826.89.)

### Question 2

A spreadsheet models a $5 000 loan for a fridge and washing machine for a first rental, at 1.2% per month with repayments of $450 per month.

| | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| 1 | Month | Opening balance | Interest | Repayment | Closing balance |
| 2 | 1 | 5000 | =B2*0.012 | 450 | =B2+C2-D2 |
| 3 | 2 | =B2 | =B3*0.012 | 450 | =B3+C3-D3 |

(a) The formula in B3 is wrong. Write the correct formula and explain why. (b) With the correct formula, find the closing balance after month 3.

**Worked answer:** (a) =E2: the opening balance of month 2 is the closing balance of month 1; =B2 would charge month 2's interest on the full $5 000 again. (b) $4 610.00, then $4 215.32, then $3 815.90.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: month 2 interest "12 000 × 0.0075 = $90", crossed, "interest is on what is still owed"). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`).

## 7. Everyday anchors

- A second-hand tractor for a small family farm, bought with a $20 000 loan at 0.5% a month and $600 repayments: the site's spreadsheet numbers, with a reason for every row (work and rural NSW).
- A second-hand tinny and boat trailer for weekend fishing, on a $12 000 loan (hobbies; carries Question 1).
- A fridge and washing machine for a first rental, on a $5 000 loan (renting; carries Question 2).

Mostly no science; drawn as objects, never people. Grepped 18 November 2026 against the Advanced finance designs (`lessons/math-a12-f*.md`: a cricket scoreboard, stacking chairs, a tin pyramid, tree planting, paper folding, a chessboard, a tennis ball, a country town, a first car loan with a used hatchback and loan statement, a $400 000 home loan on a mortgage calculator, a used motorbike, a first apartment deposit on a wall calendar, a super statement, a savings app on a phone, a holiday fund with a suitcase) and the Standard a-strand packs: "tractor", "tinny" and "fridge" have no hits there or in the i01 to i11 packs (a tradie's ute is i10's anchor, so it is avoided). Advanced f09's anchor is a first car loan ($30 000 at 0.6% a month, $600), so this video avoids cars and keeps the site's different numbers. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

No new error in the parts used (see `../../site-corrections-maths-standard.md`, section 6). Decisions for Claude:

- **Column order.** The site's spreadsheet subtracts "principal repaid" (repayment minus interest); the syllabus wording ("an application of compound interest with periodic repayments") reads more naturally as "add the interest, then take off the repayment". Both give the same balances. Recommend the add-then-subtract table on screen, because it shows compound interest at work and matches common HSC tables; show the site's "principal repaid" split once as the split bar, since it explains why the debt falls faster each month.
- **No repayment formula.** The repayment is given in every example (from the lender or a calculator). The site's M = PV × r ÷ (1 − (1 + r)^(−n)) is not on the Standard reference sheet; i15 finds repayments with a table of repayments per $1 000 or a digital tool.
- **Rates.** 0.5% a month is 6% p.a., below today's typical personal loan rates (RBA F8, September 2026: new fixed-rate personal term loans averaged 10.39% p.a.); a secured vehicle loan can be lower. Keep the site's figures, call the rate "an example rate", and say once that rates change.
- **Standard 1.** Show the monthly rate already worked out ("0.5% a month") so Standard 1 students, who are given the rate per period, are not asked to convert.
- **Pace.** A three-row table, the fourth row, the reason the split changes, and the spreadsheet fit 8 to 9 minutes. If long, keep the "change one cell" demonstration to a single change.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
