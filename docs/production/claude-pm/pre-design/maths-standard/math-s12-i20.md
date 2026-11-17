# math-s12-i20: How does a table of interest factors give an annuity's future or present value?

Maths Standard research pack (Year 12, Investment, loans and annuities: Annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Annuities):

- `ci8032ba07`: Using a table of interest factors, calculate the future value or present value of an annuity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3). Site coverage: covered (by formula only; the site shows no table; see section 8).

Standard 1: no matching point. Standard 2 only.

This is a CMS codename, not a published content-point code (ruling 16).

**Course:** Standard 2 only. The method is the syllabus's tabular one: look up the factor for the rate per period and the number of periods, then multiply by the contribution. The closed-form formulas and the geometric series (the Advanced route in math-a12-f13) are not used.

**Entry knowledge:** math-s12-i19: `cibac40b05`, `ci198f30b4` (what an annuity is; the four-period table); math-s12-i04: `ciaa253014` (rate per period and number of periods from an annual rate and a frequency).

**Prior video:** math-s12-i19.

**Start:** i19 ends on the summer-job table: $2 000 a year at 5% for 4 years, closing balance $8 620.25, and a "40 years?" chip. Forty rows by hand is too many; a table of factors does the work in one multiplication.

**Stop:** Explain the future value interest factor as what contributions of $1 at the end of each period grow to after n periods, and the present value interest factor as the single amount today that is worth the same as $1 at the end of each period for n periods; read a factor from a table by finding the rate per period (column) and the number of periods (row); calculate FV = contribution × FV factor and PV = payment × PV factor; check the FV factor against the i19 table (4.3101 × $2 000 = $8 620.20, five cents from the table's $8 620.25 because the factor is rounded to 4 decimal places); choose FV (saving towards a future amount) or PV (a lump sum now, such as the most you can borrow for a given repayment) from the wording. Finding the contribution for a goal is i21.

**Next:** math-s12-i21.

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at `5d74a627`, not modified):

- [annuities/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson02.sa.html), SHA256 `7507f0b0368b652290ae14ed4768d709dd55e5448c5f224999d1e195c4aa708a`. Title: Future Value of Annuities. Lesson id maths-std-y12-m7-l05. Sections: `orient-future-value`, `calculate-future-value`, `compare-payment-timing`, `work-future-value-examples`, `analyse-starting-early`, `consolidate-future-value`, `apply-future-value`, `finish-future-value`. Uses the hook, the "Beyond the syllabus" notice, card 05 and `we-1`.
- [annuities/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson03.sa.html), SHA256 `fa5d9f7646cbd109db123d5bb1ce82d59a356e7178796115989f6bccffc76986`. Title: Present Value of Annuities. Lesson id maths-std-y12-m7-l06. Sections: `orient-present-value`, `calculate-present-value`, `build-amortisation-models`, `work-loan-examples`, `compare-loan-options`, `evaluate-present-value-decisions`, `apply-present-value`, `finish-present-value`. Uses card 05 (the present value example).
- [annuities/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson01.sa.html), SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`: card 07 (the $2 000 table) and card 09 (the present value of $500 a month).

### Source lesson02, "Beyond the syllabus" notice

"Future value, total interest, required contributions and superannuation decisions are core, worked through future-value interest factors. Formula rearrangement, annuity due calculations, and logarithmic or geometric series methods for finding n are extension [the page uses a dash here]: the exam supplies factor tables and expects table or spreadsheet reasoning."

### Source lesson02, hook and `we-1`

Hook: "$100 is deposited at the end of each month for 2 years at 6% p.a. compounded monthly ... close to $2400, significantly more, or significantly less?" Revisit: "$2,543". `we-1`: "Sarah deposits $180 per month into a savings account paying 5.4% p.a. compounded monthly for 6 years." FV $15,265.71, interest $2,305.71.

### Source lesson01, card 09 and lesson03, card 05

lesson01: "What lump sum today equals $500 monthly for 5 years at 6% p.a. compounded monthly? ... PV ≈ $25,862.78". lesson03: "What is $500/month for 3 years at 6% p.a. compounded monthly worth today? ... 500 × 32.87 = $16,435".

Only the parts named in the stop boundary belong to this video. The page's lottery choices (lesson01 and lesson03) are excluded by ruling 6.

## 3. Recalculation

Factor tables (4 decimal places) were generated with SymPy (`work/brief-standard-i2/factor_tables.py`, output in `factor-tables-output.txt`) for rates per period 0.5%, 1%, 2%, 3%, 4%, 5%, 6% and n = 1 to 6, 8, 10, 12, 24, 36, 48, 60. Values used here:

- FV factor, 5%, n = 4: 4.3101 (exact 4.310125). $2 000 × 4.3101 = $8 620.20 (table), $8 620.25 (exact, the i19 table).
- FV factor, 0.5%, n = 24: 25.4320; $100 × 25.4320 = $2 543.20 (lesson02 hook, $2,543).
- FV factor, 0.5%, n = 48: 54.0978. PV factor, 1%, n = 60: 44.9550 (practice questions).
- PV factor, 0.5%, n = 60: 51.7256; $500 × 51.7256 = $25 862.80 (exact $25 862.78, lesson01 card 09).
- PV factor, 0.5%, n = 36: 32.8710; $500 × 32.8710 = $16 435.50 (exact $16 435.51; lesson03 card 05 "$16,435").
- `we-1` ($180 a month at 0.45% for 72 months): FV $15 265.71 and interest $2 305.71 match; 0.45% is not a common table column, so it is not the teaching example here.

All site values used here match.

## 4. Misconceptions and HSC-style traps

- Looking up the annual rate (6%) instead of the rate per period (0.5% a month), or years (5) instead of periods (60).
- Using the FV table for a present-value question, or the other way round.
- Multiplying the factor by the total contributed (contribution × n) instead of by one contribution.
- Expecting the table answer to match a spreadsheet to the cent; rounding the factor to 4 decimal places can move the answer by a few cents.
- Thinking a PV is "the total of the payments". It is less, because a dollar paid later is worth less than a dollar now when interest can be earned.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- An InterestFactorTable (new part): a printed-style table with rate-per-period columns and period rows; a vertical highlight runs down the rate column and a horizontal one along the period row, and the cell where they cross lifts out and drops into "contribution × factor". Two versions with distinct headers: "Future value interest factors" (blue) and "Present value interest factors" (teal), so the choice is visible.
- The i19 table in miniature beside the lookup: 4.3101 × $2 000 lands on $8 620.20 next to the table's $8 620.25, with the 5-cent difference circled and labelled "factor rounded to 4 decimal places".
- A meaning card for each factor: four $1 coins at the ends of four periods growing into 4.3101 (FV); and $1 a month for 60 months collapsing back to 51.7256 today (PV), drawn on a timeline (PeriodTimeline).
- A FV or PV decision chip: "saving towards a future amount" points to FV; "a lump sum today, or the most you can borrow" points to PV.

Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`. No Advanced design uses factor tables.

## 6. Two original candidate practice questions

Both questions supply this table extract (the full table is in the factor-tables output).

| n | FV factor, 0.5% | FV factor, 1% | PV factor, 0.5% | PV factor, 1% |
| --- | --- | --- | --- | --- |
| 36 | 39.3361 | 43.0769 | 32.8710 | 30.1075 |
| 48 | 54.0978 | 61.2226 | 42.5803 | 37.9740 |
| 60 | 69.7700 | 81.6697 | 51.7256 | 44.9550 |

### Question 1

Priya saves $250 at the end of each month for 4 years towards the bond and moving costs of leaving home, in an account paying 6% p.a. compounded monthly. Use the table to find the future value of her savings and the interest earned.

**Worked answer:** rate per month 0.5%, n = 48, FV factor 54.0978. FV = $250 × 54.0978 = $13 524.45. Interest = $13 524.45 − 48 × $250 = $1 524.45.

### Question 2

Jack can afford car loan repayments of $420 at the end of each month for 5 years. The interest rate is 12% p.a., compounded monthly. Use the table to find the most he can borrow.

**Worked answer:** rate per month 1%, n = 60, PV factor 44.9550. PV = $420 × 44.9550 = $18 881.10.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: the 6% column, crossed, "use the rate per month"). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`; exact values $13 524.46 and $18 881.12 differ by a cent from the table method).

## 7. Everyday anchors

- The summer-job account from i19, now projected forward with one lookup (work and money).
- A leaving-home fund of $250 a month for a rental bond and moving costs (renting; carries Question 1).
- A car-loan budget: the most a buyer can borrow if the repayment must stay at $420 a month (cars; carries Question 2, the present value use).

Drawn as objects (a printed table page, an account book, a car key), never people. Grepped 18 November 2026: "leaving-home fund", "interest factor" and "car-loan budget" have no hits in the Advanced finance designs, the Standard a-strand packs or the i01 to i11 packs (a gap-year fund is used in i01 and i08, so it is avoided here); Advanced f09 (first car loan) is a balance table, not a borrowing limit. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

Gap logged as MS-29 in `../../site-corrections-maths-standard.md` (section 6): annuities lessons 02 and 03 declare this point but never show a table of interest factors; every example uses the closed-form formula, which lesson02's own notice calls extension. Decisions for Claude:

- **Tables only.** Build the two tables from `factor-tables-output.txt` (or a smaller extract per scene) and teach lookup, multiply, interpret. Keep the site's numbers as the worked examples where they fall on table columns (5% for 4 periods; 0.5% for 24, 36 and 60 periods).
- **Rounding.** Say once that table factors are rounded, so answers can differ from a spreadsheet by a few cents; HSC answers follow the table supplied.
- **Rates.** 6% p.a. on savings is above today's typical deposit rates (RBA F4, October 2026: banks' bonus savings accounts 5.05% p.a., online savings 3.30% p.a., 1-year term deposits 5.00% p.a.; [RBA F4](https://www.rba.gov.au/statistics/tables/csv/f4-data.csv)); it is a teaching rate that falls on a table column, and the 5% column fits today's bonus saver. Say once that rates change.
- **Pace.** Two lookups (FV and PV), the i19 check and the choice between them fit 8 minutes.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
