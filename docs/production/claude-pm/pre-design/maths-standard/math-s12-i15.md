# math-s12-i15: How do we find the repayment, amount owing, total paid and time to repay a loan?

Maths Standard research pack (Year 12, Investment, loans and annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans, group "Loans"):

- `ci659a906b`: Solve problems involving reducing balance loans including calculating the total amount paid, monthly repayments, amount still owing and the time taken to repay the loan [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1: no matching point. This video is Standard 2 only.

This is a CMS codename, not a published content-point code (ruling 16).

**Course:** Standard 2 only. Standard 1 students go from i14 to i16 (credit cards); i16's opening must make sense without this video (see the join note in section 8).

**Entry knowledge:** math-s12-i13: `ci94e049c3`, `cibb416d3e` (the period-by-period table and its spreadsheet); math-s12-i14: `ci668ed87c` (a spreadsheet or graph gives a new term); math-s12-i12: `ciad381478` (total cost = total paid minus amount borrowed). Also used: math-s12-i04 (`ciaa253014`): monthly rate = annual rate ÷ 12, months = years × 12.

**Prior video:** math-s12-i14.

**Start:** i14 ends on the camper loan's two balance curves landing at 61 and 50 payments. Four questions are still open for any loan: how big is the repayment, how much is paid in total, how much is still owed part-way, and how long does it take? This video answers each with a tool a Standard 2 student is allowed to use.

**Stop:** Find (1) the monthly repayment from a table of monthly repayments per $1 000 borrowed (repayment = table value × number of thousands) or from a digital loan calculator; (2) the total amount paid (repayment × number of repayments) and the interest (total paid minus amount borrowed); (3) the amount still owing after a given number of payments by reading the spreadsheet row (or a supplied graph); (4) the time taken to repay by counting spreadsheet rows to a zero balance (or reading a graph), noting that the last payment is usually smaller. Use a four-step routine: read what is asked, list the givens with units, choose the tool, state the answer in a sentence. Present value interest factors are i20; credit cards are i16.

**Next:** math-s12-i16.

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at `5d74a627`, not modified):

- [investment-and-loans/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson08.sa.html), SHA256 `13b6a566e1fce40d02e973d1b5dcb86cb64a519b15c9c123b15afae5766541e0`, section `compare-loans-and-terms` (`we-1`, card 08 "Comparing loans, which is cheaper?").
- [investment-and-loans/lesson12.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson12.sa.html), SHA256 `cb32815eed2123cd6997f15a0617b992061ed309b103cc18d7e601b008fd4acb`. Title: Mixed Financial Problems. Lesson id maths-std-y12-m7-l11. Sections: `orient-to-mixed-problems`, `a-systematic-approach`, `the-car-purchase-decision`, `work-examples-and-superannuation`, `drill-mixed-problems`, `revisit-mixed-problems`, `practise-mixed-problems`, `finish-mixed-problems`. This video uses card 05 (`a-systematic-approach`) and the borrowing half of card 06 (`the-car-purchase-decision`); the saving half belongs to i23.

### Source lesson08, `we-1`

PROBLEM 1 · AMORTISATION SCHEDULE. "$250,000 mortgage at 5.4% p.a. compounded monthly over 20 years. Find the monthly repayment, total interest, and remaining balance after 5 years." r = 0.0045, n = 240; repayment "≈ $1705.63"; "Total paid = 1705.63 × 240 = $409,351. Interest = 409351 − 250000 = $159,351"; "After 60 payments, remaining n = 180. Balance = 1705.63 × (1 − (1.0045)^(−180)) ÷ 0.0045 ≈ $210,108".

### Source lesson12, card 05 ("A systematic approach to mixed problems")

"Identify what you need to find ... List all given information ... Choose the right formula(s) ... Calculate each component separately ... Compare and conclude". "Read the question carefully: 'total cost,' 'total interest,' 'monthly repayment,' and 'amount saved' are different things."

### Source lesson12, card 06 (borrowing option)

"take a 5-year loan at 7.2% p.a. compounded monthly." "r = 0.072 ÷ 12 = 0.006, n = 60." "M = 25000 × 0.006 ÷ (1 − (1.006)^(−60)) = 150 ÷ 0.30157 ≈ $497.39 per month". "Total repayments = 497.39 × 60 = $29,843. Interest paid = $4,843."

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- lesson12 car loan ($25 000, 0.6% a month, 60 months): repayment $497.39 (497.3871...); total $29 843.40; interest $4 843.40 (site $29,843 and $4,843). Spreadsheet run with interest rounded to the cent: rows $150.00 / $347.39 repaid / $24 652.61; $147.92 / $349.47 / $24 303.14; $145.82 / $351.57 / $23 951.57; balance after 12 payments $20 690.95; after 24 payments $16 061.23 (the present-value shortcut gives $16 061.10, the difference is month-by-month rounding); 60 payments of $497.39 leave $0.21, so the 61st "payment" is a cents adjustment that banks fold into the last repayment.
- Table method: repayment per $1 000 at 7.2% p.a. over 5 years = $19.8957 (to 4 decimal places); 25 × 19.8957 = $497.39. With a 2-decimal table ($19.90) the answer is $497.50; say which table precision the question gives.
- Time to repay: paying $600 a month instead, the spreadsheet clears the loan after 49 payments (the last $54.58), total interest $3 854.58.
- lesson08 `we-1` ($250 000, 0.45% a month, 240 months): repayment $1 705.63; total $409 351.20; interest $159 351.20; balance after 60 payments $210 108.17 (site $210,108). Correct, but see the realism note in section 8.

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`). All site values used here match.

## 4. Misconceptions and HSC-style traps

- Confusing "total amount paid", "total interest" and "amount still owing" (the site's own warning, card 05).
- Multiplying the table value by the whole loan ($25 000 × 19.8957) instead of by the number of thousands (25).
- Reading the amount owing after 2 years from the row "month 2".
- Quoting the time to repay as 60 months when a larger repayment was used, or ignoring the smaller final payment.
- Using the annual rate in the table lookup when the table is for a monthly rate (or the other way round).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A four-question card for one loan ("Repayment? Total paid? Still owing after 2 years? How long at $600?"), each question ticked as it is answered, with only the current question's working on screen.
- An InterestFactorTable-style lookup table (rows = annual rate, columns = years, monthly repayment per $1 000): a crosshair lights the 7.2% row and 5-year column, the cell lifts out and multiplies by 25. The same lookup part serves i20 and i21 (see kit needs).
- The spreadsheet (SpreadsheetGrid) with rows hidden in the middle: a scroll to row 24 for the amount owing, then a scroll to the first row where the balance reaches zero for the time to repay.
- A balance graph (StudioPlot) with a vertical reader at month 24 and the landing point on the axis, for "using a graph".
- A total-paid bar: 60 repayment blocks stacked, the amount borrowed shaded teal and the interest amber on top.

Advanced reuse (visual parts only, ruling 7): math-a12-f11 solved the same four questions with closed forms and logarithms for a motorbike loan; Standard uses tables, spreadsheets and graphs. Reuse the total-paid bar and balance graph styling only. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

The table shows monthly repayments per $1 000 borrowed.

| Annual rate | 2 years | 3 years | 4 years | 5 years |
| --- | --- | --- | --- | --- |
| 7% | 44.7726 | 30.8771 | 23.9462 | 19.8012 |
| 8% | 45.2273 | 31.3364 | 24.4129 | 20.2764 |
| 9% | 45.6847 | 31.7997 | 24.8850 | 20.7584 |

Mia borrows $18 000 at 8% p.a. over 4 years for a kitchen renovation. (a) Find the monthly repayment. (b) Find the total amount paid and the total interest.

**Worked answer:** (a) 18 × 24.4129 = $439.43 (to the nearest cent). (b) 48 × $439.43 = $21 092.64; interest $21 092.64 − $18 000 = $3 092.64.

### Question 2

A spreadsheet models a $14 000 loan for a professional camera kit, at 0.7% per month with repayments of $450 per month. Extracts: after month 1 the balance is $13 648.00; after month 2, $13 293.54; after month 12, $9 609.53; the balance first reaches zero at month 36, when a final payment of $95.10 is made.

(a) How much is still owing after one year? (b) How long does it take to repay the loan? (c) Find the total amount paid and the total interest.

**Worked answer:** (a) $9 609.53. (b) 36 months (35 payments of $450 and a final $95.10). (c) 35 × $450 + $95.10 = $15 845.10; interest $1 845.10.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "18 000 × 24.4129", crossed, "the table is per $1 000, so use 18"). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`). The table values are exact repayments rounded to 4 decimal places.

## 7. Everyday anchors

- A reliable used small SUV for a long commute to a first full-time job, on the site's $25 000 loan at 7.2% p.a. over 5 years (cars and work).
- A kitchen renovation on an $18 000 loan (home; carries Question 1).
- A professional camera kit for a weekend photography business on a $14 000 loan (work and hobbies; carries Question 2).

Drawn as objects (a small SUV, a kitchen bench, a camera bag), never people. Grepped 18 November 2026: "SUV", "kitchen" and "camera kit" have no hits in the Advanced finance designs or the Standard a-strand packs. Advanced f09 is a first car loan with a used hatchback and f11 a used motorbike; the SUV keeps the site's lesson12 numbers and is framed around commuting to work, not a first car. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

One method finding applies (MS-24 in `../../site-corrections-maths-standard.md`, section 6): lessons 08 and 12 find every repayment with the formula M = PV × r ÷ (1 − (1 + r)^(−n)) and every new term with logarithms; neither is on the Standard 2 reference sheet, and the syllabus point lists outcomes, not that method. Decisions for Claude:

- **Tool.** Repayment from a table of repayments per $1 000 (and once from an unbranded loan calculator as the "digital tool"); amount owing and time to repay from the spreadsheet or a graph. The formula is not shown.
- **Realism (ruling 5).** The site's $250 000 mortgage at 5.4% is not a realistic NSW home loan in 2026 (RBA F5, October 2026: discounted owner-occupier variable rate 7.05% p.a.; NSW prices are far above $250 000 plus a deposit). Do not use it as a home loan; the car loan is the spine. 7.2% p.a. for a secured car loan is plausible against RBA F8 (September 2026: new fixed-rate personal term loans averaged 10.39% p.a.; secured loans are lower). Say once that rates change.
- **Join for Standard 1.** i16 must open on a credit card picture that needs nothing from i15; the i15 final frame (a card statement beside the loan's balance graph) is a Standard 2 bonus, not a dependency.
- **Pace.** Four questions on one loan, a short routine and two tools fit about 8 minutes. If long, show the graph reading in Question 2 only.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
