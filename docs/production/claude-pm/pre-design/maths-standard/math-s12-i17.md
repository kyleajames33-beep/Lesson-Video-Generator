# math-s12-i17: How is credit card interest charged by the day, and what does paying only the minimum cost?

Maths Standard research pack (Year 12, Investment, loans and annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans, group "Credit cards"):

- `cife5c18db`: Interpret a credit card statement, examining the implications of only making the minimum payment [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered (the site has no statement; see section 8).
- `ci13e98315`: Calculate the compound interest charged on a purchase, transaction or outstanding balance for a given number of days, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered (the site uses simple daily interest; see section 8).

Standard 1 (Year 12, Depreciation and loans, group "Credit cards"):

- `ci42184aca`: Interpret a credit card statement, examining the implications of only making the minimum payment [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered.
- `ci2dbee6b0`: Calculate the compound interest charged on a transaction or outstanding balance for a given number of days [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered.

These are CMS codenames, not published content-point codes (ruling 16). Wording differences: Standard 2 adds "a purchase" and "with and without using digital tools".

**Course:** Standard 1 and Standard 2. Both calculate daily compound interest with I = P(1 + r)^n − P, where r is the annual rate ÷ 365 and n is the number of days. Standard 2 also does it in a spreadsheet or calculator app ("digital tools").

**Entry knowledge:** math-s12-i02: `ci64a24122` (Standard 1 `cib6fe9f5b`): FV = PV(1 + r)^n and compound interest = FV − PV; math-s12-i16: `ci213a72e9`, `ci435086e3` (Standard 1 `ci23d33e6f`, `ci8a052732`): a card is a reducing balance loan, and the interest-free period ends if the full balance is not paid.

**Prior video:** math-s12-i16.

**Start:** i16 ends on the statement-cycle timeline with a partly paid balance: the interest-free bracket breaks and daily interest ticks start from the purchase date. This video counts those ticks.

**Stop:** Calculate the interest on a purchase or balance for a given number of days with daily compounding, I = P(1 + r ÷ 365)^n − P, by calculator and in a spreadsheet (Standard 2); read a credit card statement: opening balance, purchases, payments, interest, fees, closing balance, minimum payment, due date and the minimum repayment warning; explain, with a table and the warning's numbers, why paying only the minimum takes years and can cost more in interest than the original debt, and what a larger fixed payment changes. Comparing credit cards with personal loans for goals is i18.

**Next:** math-s12-i18.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson10.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at `5d74a627`), SHA256 `9dfbd06d389ddb8e49b8223ac80ece3589e8950fa990e7486dbf0753bf9253c5`. Sections used: `how-credit-card-interest-works` (card 05), `the-minimum-payment-trap` (card 06), `balance-transfers` (`we-1` only), `avoid-the-credit-card-traps` (Trap 01, Trap 03), the hook and the revisit card, MC Q1 and Q2, SA 1 and SA 3 (a).

### Source lesson10, card 05

"Daily interest = Balance × r ÷ 365". "Worked example: $2000 balance at 19.99% p.a. Daily interest = 2000 × 0.1999 ÷ 365 = $1.095/day. Monthly interest ≈ 1.095 × 30 = $32.85/month. Or directly: 2000 × 0.1999 ÷ 12 = $33.32/month". "Effective annual rate: (1 + 0.1999/365)^365 − 1 ≈ 22.12%."

### Source lesson10, card 06 ("The minimum payment trap")

"Example: $3000 debt at 20% p.a. (compounded monthly), minimum payment $60/month." Table: month 1 $3000.00, $50.00, $60, $10.00; month 2 $2990.00, $49.83, $60, $10.17; month 3 $2979.83, $49.66, $60, $10.34. "n ≈ 108.4 months = about 9 years. Total paid = 60 × 108.4 ≈ $6504. Interest paid ≈ $3504, more than the original debt!" "Comparison, paying $150/month instead: Paid off in approximately 24 months. Total paid ≈ $3600. Saves nearly $3000 and 7 years."

### Source lesson10, `we-1`

"$5000 credit card debt at 19.99% p.a. compounded monthly. Minimum payment = $125 or 2.5% of balance, whichever is higher." Month 1 interest $83.29, principal reduced $41.71, new balance $4958.29. "With minimum: n ≈ 66 months (5.5 years), total ≈ $8300. With $300/month: n ≈ 20 months, total ≈ $5900. Saving: $2400".

### Source lesson10, Trap 03

"If monthly interest exceeds the minimum payment, the balance actually grows ... Example: $2000 at 22%, monthly interest = $36.67. If minimum = $25, balance increases by $11.67/month."

Only the parts named in the stop boundary belong to this video. The effective annual rate and balance transfers are not 2024 points.

## 3. Recalculation

- Card 05 daily figures: daily simple interest $1.0953425...; 30 days simple $32.86 (site $32.85, from rounding the daily figure first); monthly $33.32. **Compound, as the syllabus asks:** $2 000 × (1 + 0.1999/365)^30 − $2 000 = $33.12. Other daily-compound values: 45 days $49.89; 55 days $61.14. EAR 22.12% is correct.
- Card 06 table rows match to the cent. Carried on with interest rounded to the cent, the $3 000 debt takes 109 payments (108 of $60 and a last of $24.24): total $6 504.24, interest $3 504.24 (site ≈ $6504 and ≈ $3504; correct). At $150 a month: 25 payments, total $3 679.80, interest $679.80; the site's "approximately 24 months ... ≈ $3600" is a little low (see section 8); the saving is $2 824.44 and about 7 years.
- `we-1`: month 1 interest $83.29, new balance $4 958.29 (correct). Minimum ($125, since 2.5% never exceeds $125 after month 1): 67 payments, total $8 304.92; $300 a month: 20 payments, total $5 906.24; saving $2 398.68. The site's approximations stand.
- Trap 03: $2 000 × 0.22 ÷ 12 = $36.67; growth $11.67 a month. Correct.
- The hook: "$2000 television ... minimum payment is $60/month ... 19.99% p.a. ... over 9 years and more than $6600 total" is wrong: at 19.99% p.a. compounded monthly and $60 a month, $2 000 takes 50 payments (about 4 years 2 months), total $2 942.85, interest $942.85. The 9-year figure belongs to the $3 000 example. Logged as MS-19.
- SA 1 (c): "n ≈ 280 months (~23 years)" for $4 500 at 19.99% with a $112.50 minimum is not supported: a fixed $112.50 clears it in 67 months; a minimum of 2.5% of the balance with a $25 floor takes 238 months. Logged as MS-21.

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Using r ÷ 12 when the question gives a number of days (the site's own Trap 01), or using the annual rate as the daily rate.
- Using simple interest (P × r ÷ 365 × days) when the question says compound; for short periods the answers differ by cents, so the method must be shown.
- Thinking the minimum payment is "the amount due". The closing balance is what must be paid to keep the interest-free days.
- Thinking a minimum payment that equals the interest makes progress (it does not), or that the minimum is fixed (on most cards it shrinks with the balance, which is why it takes decades).
- Counting the days wrongly (purchase date to statement date, inclusive or not). Questions state the number of days; use it.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A day counter for daily compounding: a balance chip that grows by × (1 + 0.1999/365) each tick, 30 ticks in a row, with a running readout; then the one-line calculator entry 2000 × (1 + 0.1999 ÷ 365)^30 − 2000 = 33.12, and the spreadsheet version (one row per day, filled down) for Standard 2's digital tool.
- A coded, unbranded credit card statement (CreditCardStatement, new part): statement period, opening balance, purchases list, payments, interest, fees, closing balance, minimum payment, due date and the minimum repayment warning box. Fields highlight one at a time as the narration names them; nothing else moves.
- The minimum-payment table (card 06) beside a balance graph: the $60 line barely bends the curve; a $150 line drops it to zero in about two years. Shade the interest above the original $3 000 to show it overtakes the debt.
- A split bar for the first $60 payment: $50 amber interest, $10 teal debt reduction.

Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`. No Advanced design covers credit card statements.

## 6. Two original candidate practice questions

### Question 1

A $1 850 purchase is made on a credit card that charges 19.99% p.a. interest, compounded daily. The interest-free period has been lost, and interest is charged for 25 days. Calculate the interest charged, to the nearest cent.

**Worked answer:** daily rate 0.1999 ÷ 365; I = 1850 × (1 + 0.1999/365)^25 − 1850 = $25.50.

### Question 2

Part of a credit card statement is shown.

| Item | Amount |
| --- | --- |
| Closing balance | $2 640.00 |
| Annual percentage rate (purchases) | 20.99% |
| Minimum payment due (2% of closing balance or $25, whichever is greater) | $52.80 |
| Minimum repayment warning: if you make only the minimum payment each month | you will pay off the closing balance in 31 years and 9 months, paying a total of $12 879.52 |
| If you pay this amount each month | $135.65, you will pay it off in 2 years, paying a total of $3 255.60 |

(a) Show how the minimum payment of $52.80 was found. (b) How much interest is paid if only the minimum is paid? (c) How much is saved by paying $135.65 each month instead?

**Worked answer:** (a) 2% × $2 640 = $52.80, which is greater than $25. (b) $12 879.52 − $2 640 = $10 239.52. (c) $12 879.52 − $3 255.60 = $9 623.92.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "1850 × 0.1999 × 25", crossed, "the rate is per year; divide by 365"). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`; the statement figures model the 2% or $25 minimum with interest at 20.99% ÷ 12 per month, rounded to the cent).

## 7. Everyday anchors

- A credit card used for an $1 800 trip: flights and accommodation, with the balance not paid in full when the statement arrives (travel and money).
- The monthly statement itself, read line by line (money; carries Question 2).
- A $2 000 television bought on the card with only minimum repayments (shopping; the site's hook, with corrected figures: about 4 years 2 months and $942.85 of interest at $60 a month).

Drawn as objects (a plain card, a paper statement, a television), never people, and unbranded. Grepped 18 November 2026: "statement" appears in Advanced f09 (a loan statement plate) and f13 (a super statement); the credit card statement is a coded part, not those plates. "Television" and "trip on a credit card" have no hits. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

New findings in `../../site-corrections-maths-standard.md` (section 6): MS-19 (the hook's figures), MS-20 (simple daily interest where the syllabus asks for compound), MS-21 (SA 1 (c)), MS-22 (the $150 comparison). Decisions for Claude:

- **Compound daily interest.** Teach I = P(1 + r/365)^n − P as an application of i02's FV = PV(1 + r)^n. Mention once that some cards calculate a daily amount and add it monthly, and that questions say which method to use. Keep the site's $2 000 at 19.99% for 30 days: $33.12.
- **The statement.** The site has none; build an unbranded statement. The minimum repayment warning is real: an ASIC instrument requires the statement to warn when minimum payments would take more than the stated time and to show a repayment that pays it off sooner ([ASIC instrument 20-0746](https://download.asic.gov.au/media/5734771/asic-instrument-20-0746.pdf); [Moneysmart credit card calculator](https://moneysmart.gov.au/credit-cards/credit-card-calculator)). Moneysmart describes minimums as typically 2% or 2.5% of the closing balance or a set dollar amount, whichever is greater. Use "2% or $25" and label the statement as an example.
- **Responsible framing.** State the cost plainly with the numbers: paying only the minimum on $2 640 at 20.99% takes over 31 years and costs $10 239.52 in interest; $135.65 a month clears it in 2 years. A late payment also adds a fee. No lecture.
- **Rates (ruling 5).** 19.99% to 20.99% sits within today's card rates (RBA F5 October 2026 standard rate 21.74%; RBA F8 September 2026 average on balances incurring interest 18.91%). Say once that rates change.
- **Pace flag and suggested split.** Daily compound interest (with and without digital tools), the statement, and the minimum-payment table are three different jobs; together they risk 10 minutes and a crowded screen. Suggested split: **i17a** "How is credit card interest charged by the day?" (`ci13e98315`, `ci2dbee6b0`) and **i17b** "What does a credit card statement tell us, and what does paying only the minimum cost?" (`cife5c18db`, `ci42184aca`). Both serve Standard 1 and 2. If kept as one, cut the spreadsheet day-by-day demonstration to a single fill-down.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
