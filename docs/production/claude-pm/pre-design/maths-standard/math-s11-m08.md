# math-s11-m08: How do we build a personal budget, on paper and in a spreadsheet?

Maths Standard pre-design pack (Year 11, Managing money), 23 November 2026, written by Claude (designer of record) in the form of the e and f packs, from route inputs 10 (`../../../programme/maths-standard-route-inputs-10.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Managing money, group "Budgeting", outcome MST-11-04:

- `ci03b1617b`: Prepare a personal budget for a given income, considering fixed and discretionary spending [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431). Site coverage: covered (lesson01, lesson06).
- `cidfff72ec`: Use a spreadsheet to model personal and household budgets. Site coverage: covered (lesson01, lesson06).

**Entry knowledge:** math-s11-e01 (pay periods; a month is not four weeks; × 52 and ÷ 12); math-s11-e10 (net pay after tax and the levy); math-s11-m06 (the hatchback's $5,408 a year, $104 a week; inputs in cells, totals as formulas); math-s11-m07 (the house's bills, $761.21 a quarter); math-s11-e06 (fill-down).

**Prior video:** math-s11-m07. **Start:** m07's final frame (the bills card "$368.06 + $156.60 + $236.55 = $761.21"; the phone `ma11-phone-budget-v1.png` with a blank budget "My week"; chips "Next: a budget", "?").

**Stop:** net income; fixed spending (the same each time), variable essentials (needs whose amount changes) and discretionary spending (wants you choose); converting every amount to one period with amount × times a year ÷ 52 (and rounding a variable cost up); surplus or deficit; the savings rate; a spreadsheet model with a times-a-year column and one formula filled down; a what-if; a household budget as the same sheet with shared rows and each person's share. Not: emergency funds, saving strategies and monitoring (m09).

**Next:** math-s11-m09: final frame is the budget phone "surplus $233 a week" beside the car on the hoist "$2000 repair?".

## 2. Site order, sections and worked examples

`year11/managing-money/lesson06.sa.html` (site L14): card 1 (the budget sheet: net income $4,200 a month; fixed rent, insurance, phone, transport, subscriptions $1,860; "discretionary" groceries, eating out, entertainment, clothing $1,100; surplus $1,240; savings rate 29.5%; =SUM, =B8+B14, =B1-B16, =B17/B1; "use net income"; "a typed surplus goes stale"); WE1. `lesson01.sa.html` (site L9): card 2 (surplus, deficit, balanced; convert to one period; "a weekly deficit of $80 is $4,160 a year"); WE2 (the Chen family, monthly); WE4 (a student: monthly allowance $260 → $60 a week; phone $38 a month → $8.77; insurance $624 a year → $12).

All values recalculated: no arithmetic error. Site issue (MSY-08): lesson06 classes groceries as "discretionary" (then calls them "discretionary but essential"), while lesson01 classes groceries as a variable expense; the design uses three groups (fixed, variable essentials, discretionary) so that m09's "living expenses = fixed + essentials" is clean, and states the syllabus's two words.

## 3. Recalculation (values for the design)

| Row | Amount | Times a year | Weekly |
| --- | --- | --- | --- |
| Net pay | $860 | 52 | $860 |
| Rent (fixed) | $250 | 52 | $250 |
| Phone (fixed) | $52 | 12 | $12 (slip 52 ÷ 4 = $13) |
| Internet share (fixed) | $26 | 12 | $6 |
| Car (variable essential, m06) | $5408 | 1 | $104 |
| Groceries (variable essential) | $110 | 52 | $110 |
| Bills share (variable essential, m07) | $260 (a third of $761.21 is $253.74, rounded up) | 4 | $20 |
| Eating out, entertainment, clothes (discretionary) | $60, $40, $25 | 52 | $125 |
| Total spending | | | $627 (fixed 268, essentials 234, discretionary 125) |
| Surplus; savings rate | | | $233; 233 ÷ 860 = 27.1% |
| What-if: eating out $30 | | | surplus $263 |
| Household: rent $750 a week, internet $78 a month, bills $761.21 a quarter | | | house $826.55 a week; each of 3: $275.52 |

## 4. Misconceptions and HSC-style traps

- Using gross pay instead of net pay.
- Converting monthly to weekly by ÷ 4.
- Mixing periods (a monthly bill added to weekly costs).
- Typing totals instead of formulas.
- Treating every spending line as equally easy to cut.

## 5. Visual needs

The phone with the budget building on its screen; a period converter (a month's amount spread across 52 weeks); a three-colour spending bar inside an income bar (fixed blue, essentials olive, discretionary violet, surplus green); `SpreadsheetGrid` with columns item, amount, times a year, weekly, type; a slider on one discretionary row; a household sheet that splits into three personal shares.

## 6. Two original candidate practice questions

**Question 1.** Sam earns $420 a week after tax. His costs are rent $190 a week, groceries $95 a week, phone $39 a month, transport $42 a week, insurance $624 a year and entertainment $90 a week. (a) Convert every cost to a weekly amount and find his weekly surplus or deficit. (b) What is that over a year?
Worked answer: (a) phone 39 × 12 ÷ 52 = $9; insurance 624 ÷ 52 = $12; total 190 + 95 + 9 + 42 + 12 + 90 = $438; deficit $18 a week. (b) 18 × 52 = $936 a year. Slip: "phone = 39 ÷ 4 = $9.75".

**Question 2.** In a budget spreadsheet, B6 holds a car insurance premium of 1040 and C6 holds 1 (paid once a year). Column D shows weekly amounts. (a) Write a formula for D6 and find its value. (b) Weekly costs are in D4 to D12 and weekly net pay is in D2. Write formulas for the total costs in D13 and the surplus in D14.
Worked answer: (a) =B6*C6/52 gives 20. (b) =SUM(D4:D12); =D2-D13. Slip: "=SUM(D2:D12)" (adds the pay into the costs).

## 7. Everyday anchors

A first full-time job in a share house: rent, a phone plan, the strand's hatchback, the house's bills, eating out. No people.

## 8. Site corrections and decisions for Claude

- Three spending groups; the syllabus's "fixed and discretionary" stated, with "variable essentials" as the needs in between (MSY-08).
- Weekly budget (most first jobs pay weekly or fortnightly; e01's conversion reused).
- Round a variable cost up when budgeting (the bills share).
- Pace: about 8.5 minutes.
