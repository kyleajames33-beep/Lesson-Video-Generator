# math-s12-i23: How do annuities answer superannuation, savings and loan decisions?

Maths Standard research pack (Year 12, Investment, loans and annuities: Annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Annuities):

- `cieeb45b0f`: Solve annuity problems involving financial decisions regarding superannuation, savings accounts and loans [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3). Site coverage: covered.

Standard 1: no matching point. Standard 2 only.

This is a CMS codename, not a published content-point code (ruling 16).

**Course:** Standard 2 only. Last video of the money strand.

**Entry knowledge:** math-s12-i20 to i22: `ci8032ba07`, `cifb9dd435`, `ci025a6c75` (FV and PV with factor tables, the contribution for a goal, the effect of each input); math-s12-i15: `ci659a906b` (a loan's repayment, total paid and amount owing); math-s11-e-strand (Year 11 Earning money): gross pay and pay periods.

**Prior video:** math-s12-i22.

**Start:** i22 ends on the two savers' balance curves (starting at 18 and at 28) pulling apart. The same mathematics decides three real questions: what super does with a first job's pay, whether to save or borrow for a car, and how big a loan a repayment can support.

**Stop:** Solve three decision problems with the annuity tools of i19 to i22: (1) superannuation: employer contributions of 12% of ordinary pay each payday (2026-27), less the fund's 15% contributions tax, as an annuity; find a future value from a table or spreadsheet and say what starting early does; (2) a savings account against a loan for the same goal: how long saving takes against the interest a loan costs; (3) a loan as a present value: the most that can be borrowed for an affordable repayment (repayment × PV factor). State each decision in a sentence with numbers and one non-money factor (waiting, access, risk). The next strand starts with right-angled triangles (math-s12-t01).

**Next:** math-s12-t01 (outline row 37; see section 8 for the strand-order note).

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at `5d74a627`, not modified):

- [annuities/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson01.sa.html), SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`: `define-annuity-structure` (card 05, "Fortnightly superannuation contributions, employer deposits equal amounts each fortnight"), `work-annuity-examples` (`we-1`), SA 3.
- [annuities/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson03.sa.html), SHA256 `fa5d9f7646cbd109db123d5bb1ce82d59a356e7178796115989f6bccffc76986`: card 05 ("the loan amount IS the present value of all your future repayments"), `work-loan-examples` (`we-1`). The lottery decision (`evaluate-present-value-decisions`, card 08, the hook and SA 2) is excluded by ruling 6.
- [investment-and-loans/lesson12.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson12.sa.html), SHA256 `cb32815eed2123cd6997f15a0617b992061ed309b103cc18d7e601b008fd4acb`: card 06 (save or borrow for a $25 000 car) and card 08 (superannuation against after-tax investing).

### Source lesson01, `we-1`

PROBLEM 1 · FUTURE VALUE OF SUPERANNUATION. "$300 deposited fortnightly into super at 5.4% p.a. compounded fortnightly for 20 years. Find the future value and total interest earned." FV "$280,422"; "Total deposited = 300 × 520 = $156,000. Interest = $124,422".

### Source lesson12, card 06

"You need a $25,000 car. You can save $600/month at 4.8% p.a. compounded monthly, or take a 5-year loan at 7.2% p.a. compounded monthly." Saving: "n ≈ 38.7 months (round up to 39)"; "Total contributed = 600 × 39 = $23,400". Borrowing: "$497.39 per month"; "Interest paid = $4,843". "Saving costs $0 interest but takes 3.25 years, you cannot drive the car now. Borrowing gives immediate access but costs $4,843 in interest."

### Source lesson12, card 08

"A 30-year-old can salary sacrifice $500/month into super (taxed at 15%) earning 7% p.a. compounded monthly, OR invest $500/month after-tax in shares earning 8% p.a." Super option: "FV = 500 × ((1.005833)^420 − 1) ÷ 0.005833 ≈ 500 × 1801 = $900,400"; shares "≈ $455,000"; "Super wins by approximately $445,000".

### Source lesson03, `we-1`

"Find the monthly repayment on a 25,000 car loan at 7.2% p.a. compounded monthly over 5 years. Find total interest and the outstanding balance after 2 years." $497.39; interest $4,843.40; "Balance = 497.39 × 32.29 = $16,061".

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- lesson01 `we-1`: (1 + 0.054/26)^520 = 2.9413834; FV $280 422.05; interest $124 422.05. Correct.
- lesson12 card 06: saving $600 a month at 0.4% a month reaches $25 000 after 38.61 months, so 39 deposits (site "38.7"; the rounded-up 39 and $23 400 are right). Borrowing: $497.39, interest $4 843.40. Correct.
- lesson12 card 08: $500 × 1801.0546 = $900 527.30, but the card says the contribution is "taxed at 15%" and then invests the full $500. After the 15% contributions tax only $425 goes in: $425 × 1801.0546 = $765 448.21. The after-tax shares figure $455 027.54 is right, so the gap is about $310 400, not $445 000. The same lesson's SA 3 does deduct the 15% ($255 from $300). Logged as MS-28.
- lesson03 `we-1`: balance after 2 years $16 061.10 (PV factor 0.6%, 36 = 32.2907). Correct.
- Practice values: $450 a week × 12% = $54.00 a week, $2 808.00 a year; after 15% tax $2 386.80; × FV factor (6%, 10) 13.1808 = $31 459.93. Max loan: $650 × 50.2621 (PV factor 0.6%, 60) = $32 670.37.

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`, `practice.py`, `factor_tables.py`).

**Superannuation facts (ruling 5), read 18 November 2026:** the super guarantee rate is 12% for 2026-27 and is unchanged; from 1 July 2026 (Payday Super) employers pay super on qualifying earnings so that it reaches the fund within 7 business days of each payday ([ATO, Payday Super](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/payday-super-resources/paying-super-for-your-employees)). Concessional contributions are taxed at 15% in the fund. Say once that rates and rules change.

## 4. Misconceptions and HSC-style traps

- Treating the employer's 12% as coming out of take-home pay (it is paid on top of ordinary pay by the employer).
- Forgetting the 15% contributions tax, as the site's card 08 does.
- In save-or-borrow problems, comparing the saver's total deposits with the loan's repayment instead of the loan's total interest, or forgetting the waiting time.
- Using an FV factor for a "how much can I borrow" question (it is a present value).
- Thinking the biggest loan the bank offers is the right loan: the repayment, not the limit, is what must fit the budget.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Three decision cards (Super, Save or borrow, How much can I borrow?) on one board; each opens to one worked solution, then closes to a one-line decision with its number.
- A payslip-to-super strip: a coded, unbranded payslip line "Super (12%)" sliding into an account each payday (PeriodTimeline with fortnight tabs), a small "15% tax" slice coming off at the fund.
- `DepositTower` (finance-parts.tsx) for 20 years of fortnightly super, merging to $280 422.05 against the $156 000 deposited line.
- A save-or-borrow split screen: a savings `GoalMeter` that reaches $25 000 at month 39, and a loan `LoanBalanceBar` that gives the car at month 0 with $4 843.40 of interest stacked over 60 months.
- The InterestFactorTable's PV column for the borrowing limit: $650 × 50.2621.
- Final frame (hand-off to math-s12-t01): the house from i18's long-term zone, with its roof outlined as a right-angled triangle (35° at the eave, the rafter as the hypotenuse, a "?" on the roof height) and a chip "Next: right-angled triangles". The 35° matches the site's trigonometry lesson01 hook (two right-angled triangles with a 35° angle). The house plate is painted one video early (ruling 17).

Advanced reuse (visual parts only, ruling 7): math-a12-f13 used a painted super statement. This video uses a payslip line and an account instead; do not reuse the super statement plate. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Kai's first job pays $450 a week in ordinary pay. His employer pays super of 12% of this into his fund, and the fund deducts 15% contributions tax. (a) How much super does the employer pay each week? (b) How much reaches Kai's account in a year (52 weeks) after the contributions tax? (c) Treat this as $2 386.80 paid in at the end of each year for 10 years, earning 6% p.a., compounded yearly. Use the FV factor 13.1808 to estimate the balance.

**Worked answer:** (a) 12% × $450 = $54.00. (b) 52 × $54 = $2 808.00; after 15% tax, $2 808 × 0.85 = $2 386.80. (c) $2 386.80 × 13.1808 = $31 459.93.

### Question 2

Lena can afford car loan repayments of $650 at the end of each month. A 5-year loan charges 7.2% p.a., compounded monthly. The present value interest factor for 0.6% per period and 60 periods is 50.2621. (a) Find the most she can borrow. (b) The car she wants costs $35 000. How much must she save as a deposit first?

**Worked answer:** (a) $650 × 50.2621 = $32 670.37. (b) $35 000 − $32 670.37 = $2 329.63.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "$54 comes out of Kai's pay", crossed, "the employer pays it on top"). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`). Question 1 (c) is a simplified yearly model of contributions that really arrive each payday; say so in the question.

## 7. Everyday anchors

- Superannuation from a first job: a payslip's super line and Payday Super (work; carries Question 1).
- Saving for a $25 000 car or borrowing for it now (the site's lesson12 numbers) (cars and money).
- A borrowing limit set by what the budget can repay each month (cars and budgeting; carries Question 2).

Drawn as objects (a payslip, an account book, a car key, a house), never people. Grepped 18 November 2026: Advanced f13's anchor is "a super statement"; this video uses the payslip line and Payday Super instead. "Payslip", "Payday Super" and "borrowing limit" have no hits in the Advanced finance designs or the Standard a-strand packs. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

New finding MS-28 (lesson12 card 08 ignores the 15% contributions tax) in `../../site-corrections-maths-standard.md`, section 6. Decisions for Claude:

- **No lottery.** The site's lottery decisions (lessons 01 and 03) are replaced by the borrowing-limit decision (ruling 6).
- **Salary sacrifice.** Card 08's super against shares comparison also needs marginal tax rates; it is optional and, if used, must deduct the 15% contributions tax.
- **Responsible framing.** One sentence each: super is locked until preservation age, so it is not savings for a car; borrowing gives the car now but costs $4 843.40; the most a bank will lend is not the same as the most a budget can repay.
- **Hand-off and strand order (outline problem).** The outline's table puts Trigonometry (rows 37 to 47) straight after this strand, so the final frame hands to math-s12-t01 as asked. But the outline's own recommended Year 12 order (`recommendedStrandOrder` in the JSON and "Recommended order" in the md) puts Ratios and rates (r01 to r14, rows 48 to 61) before Trigonometry. Root should settle the order; if Ratios and rates comes next, swap the final frame to r01's opener (for example a recipe or a mixing ratio) and keep the roof triangle for the end of r14.
- **Pace.** Three short decisions fit 8 to 9 minutes if each uses one tool. If long, move the save-or-borrow decision to an optional practice video (outline x-series).

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
