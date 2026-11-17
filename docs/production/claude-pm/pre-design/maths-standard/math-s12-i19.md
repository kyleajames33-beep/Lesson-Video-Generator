# math-s12-i19: What is an annuity, and how does its balance build period by period?

Maths Standard research pack (Year 12, Investment, loans and annuities: Annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Annuities):

- `cibac40b05`: Identify an annuity as an investment account with regular, equal contributions and interest compounding at the end of each period, or as a single sum investment from which regular equal withdrawals are made [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3). Site coverage: covered (contributions only; see section 8).
- `ci198f30b4`: Model an annuity in tabular form for up to four time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3). Site coverage: covered.
- `ci75f171a2`: Use a spreadsheet to model an annuity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3). Site coverage: covered.

Standard 1: no Annuities focus area. This video and i20 to i23 are Standard 2 only.

These are CMS codenames, not published content-point codes (ruling 16).

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-i02: `ci64a24122` (compound interest per period); math-s12-i13: `ci94e049c3`, `cibb416d3e` (a period-by-period table and its spreadsheet, with "next opening = last closing"). The loan table runs the same machine with repayments; this video runs it with contributions and with withdrawals.

**Prior video:** math-s12-i18.

**Start:** i18 ends on the long-term zone: a house, and "save a deposit". Saving the same amount at the end of every period, with interest each period, has a name. The i13 table appears again with its "Repayment" header crossed out and "Contribution" written in.

**Stop:** Identify an annuity in both forms: (1) regular, equal contributions at the end of each period, with interest compounding at the end of each period (a savings plan, superannuation); (2) a single sum invested, from which regular, equal withdrawals are made (an allowance or a pension account); model each in a table for up to four periods (opening balance, interest, contribution or withdrawal, closing balance; the first period of a contribution annuity earns no interest because the first deposit arrives at the end); build the contribution table in a spreadsheet (B3 = E2, fill down) and check it by setting the rate to zero; say why the closing balance is more than the total contributed. Tables of interest factors are i20.

**Next:** math-s12-i20.

## 2. Site order, sections and worked examples

Read-only source: [annuities/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at `5d74a627`), SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`. Title: Annuities. Lesson id maths-std-y12-m7-l04. Sections: `orient-annuity-model`, `define-annuity-structure`, `calculate-future-value`, `model-annuity-periods`, `work-annuity-examples`, `compare-present-value`, `apply-annuity-models`, `finish-annuity-foundations`. This video uses `define-annuity-structure` (card 05), `model-annuity-periods` (cards 07 and 08) and the hook. Cards 06 and 09 (closed-form FV and PV formulas) are marked by the page itself as beyond the syllabus.

### Source lesson01, hook

"You deposit $200 every month into an account earning 4.8% p.a. compounded monthly. After one year, how much do you have? Is it simply $200 × 12 = $2,400?" Revisit: "FV = 200 × ((1.004)^12 − 1) ÷ 0.004 = 200 × 12.268 = $2,454. The extra $54 is interest."

### Source lesson01, card 05 ("What is an annuity?")

"An annuity is a sequence of equal payments made at equal time intervals." "Ordinary annuity vs annuity due: If payments occur at the end of each period, it's an ordinary annuity (most HSC problems)."

### Source lesson01, card 07 (tabular form)

"Take $2000 paid in at the end of each year, earning 5% per annum, for 4 years. Each row does the same three things: earn interest on what is already there, add the new contribution, carry the total forward." Rows: 1: $0.00, $0.00, $2000, $2000.00; 2: $2000.00, $100.00, $2000, $4100.00; 3: $4100.00, $205.00, $2000, $6305.00; 4: $6305.00, $315.25, $2000, $8620.25. "Period 1 earns nothing, and that is not a mistake in the table." "Do not round as you go."

### Source lesson01, card 08 (spreadsheet)

Cells: "A2 | the period number, 1 | yes, =A2+1"; "B2 | opening balance, 0 | yes, =E2"; "C2 | interest, =B2*0.05"; "D2 | contribution, 2000"; "E2 | closing balance, =B2+C2+D2". "One cell carries the whole model: B3 is =E2." "Change the rate in column C to 0. Every closing balance should collapse to a plain multiple of $2000, so period 4 reads $8000."

The "single sum ... from which regular equal withdrawals are made" form appears only in the list of examples ("Monthly pension payments") and in present value cards; the site has no withdrawal table. This needs original teaching.

## 3. Recalculation

- Card 07: rows match to the cent; closing balance $8 620.25; check: factor ((1.05)^4 − 1) ÷ 0.05 = 4.310125, × $2 000 = $8 620.25. Total contributed $8 000; interest $620.25.
- Hook: $2 453.51 after 12 months (site $2,454, rounded); after 36 months $7 727.62 (card 06's $7,728).
- Withdrawal table (original): $10 000 at 4% p.a., $2 500 withdrawn at the end of each year: year 1 interest $400.00, closing $7 900.00; year 2 $316.00, $5 716.00; year 3 $228.64, $3 444.64; year 4 $137.79, $1 082.43. A withdrawal of $2 754.90 a year would empty it exactly in 4 years.

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`). All site values used here match.

## 4. Misconceptions and HSC-style traps

- Giving period 1 interest in a contribution annuity (the deposit arrives at the end of period 1).
- Adding the contribution before calculating the interest for the period.
- Thinking the final balance is "contribution × number of periods".
- Thinking an annuity is only for retirement. Any regular equal saving plan with interest each period is one.
- In a withdrawal annuity, taking the withdrawal off before the interest is added (the order must follow the question; end-of-period withdrawals come after the interest).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The i13 loan table morphing into the annuity table: "Repayment" crossed out, "Contribution" written in, the minus sign turning into a plus; a third version shows "Withdrawal" with a minus and a starting lump sum.
- A four-period timeline (PeriodTimeline, series-parts.tsx) with deposits dropping at the right-hand end of each period, and interest stamps appearing on what is already there; period 1's interest stamp reads $0.
- `DepositTower` (finance-parts.tsx) for the four $2 000 deposits: older blocks grow taller with their interest layers, then merge into one column of $8 620.25 against a dashed $8 000 line.
- A draining version for the withdrawal annuity: a tank of $10 000 topped up by an interest sliver and emptied by a $2 500 bucket each year.
- The spreadsheet (SpreadsheetGrid): build, B3 = E2 arrow, fill down, then the zero-rate check.

Advanced reuse (visual parts only, ruling 7): math-a12-f12 (an apartment deposit on a wall calendar, `CalendarDeposits`) and f13 (`DepositTower`) built these pictures for a geometric-series route. Reuse `DepositTower` and the timeline, not the calendar anchor or the apartment plate. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Sam puts $1 500 into a savings account at the end of each year. The account earns 6% p.a., compounded yearly. Complete the table for 4 years and find the interest earned.

| Year | Opening balance | Interest | Contribution | Closing balance |
| --- | --- | --- | --- | --- |
| 1 | $0.00 | | $1 500 | |
| 2 | | | $1 500 | |
| 3 | | | $1 500 | |
| 4 | | | $1 500 | |

**Worked answer:** Year 1: $0.00, $1 500.00. Year 2: $90.00, $3 090.00. Year 3: $185.40, $4 775.40. Year 4: $286.52, $6 561.92. Interest = $6 561.92 − $6 000 = $561.92.

### Question 2

A grandparent's gift of $8 000 is placed in an account earning 5% p.a., compounded yearly. $2 200 is withdrawn at the end of each year to help pay for TAFE course fees. (a) Explain why this is an annuity. (b) Use a table to find the balance after 3 years.

**Worked answer:** (a) It is a single sum invested from which regular, equal withdrawals are made, with interest each period. (b) Year 1: interest $400.00, closing $6 200.00. Year 2: $310.00, $4 310.00. Year 3: $215.50, $2 325.50.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "year 1 interest $90", crossed, "the first deposit arrives at the end of year 1"). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`).

## 7. Everyday anchors

- Summer-job savings: $2 000 from each summer's casual work put into an account at the end of each year for 4 years (work and money; carries the site's card 07 numbers).
- A study allowance: a $10 000 gift held in an account that pays out $2 500 a year during a university course (education; the withdrawal annuity).
- $200 a month from a part-time job paid into a savings account (the site's hook: is it $2 400 after a year?).

Drawn as objects (a pay envelope, an account book, a student card), never people. Grepped 18 November 2026: Advanced f12 is "saving for a first apartment deposit, on a wall calendar" and f15 "a holiday fund with a goal"; "summer job", "study allowance" and "TAFE" have no hits in the Advanced finance designs or the Standard a-strand packs. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

Gap logged as MS-31 in `../../site-corrections-maths-standard.md` (section 6): no withdrawal-annuity table for the second half of `cibac40b05`. The page's lottery hook ("You win the lottery") is excluded by ruling 6 (no gambling). Decisions for Claude:

- **Both forms of annuity.** Teach the contribution table (site) and an original withdrawal table so the whole definition is met.
- **No closed-form formulas.** The page itself marks the FV and PV formulas as beyond the syllabus; i20 uses interest factor tables instead. Do not show the geometric series.
- **End of period.** Name "at the end of each period" on screen; skip annuity due (beyond the syllabus).
- **Rates.** 5% p.a. and 4% p.a. are realistic: RBA F4, Advertised Deposit Rates (October 2026): banks' bonus savings accounts 5.05% p.a., online savings accounts 3.30% p.a., 1-year term deposits 5.00% p.a., 3-year term deposits 4.20% p.a. ([RBA F4](https://www.rba.gov.au/statistics/tables/csv/f4-data.csv), read 18 November 2026). Say once that rates change.
- **Pace.** Definition, two tables and a spreadsheet fit 8 to 9 minutes; the withdrawal table is the item to keep short.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
