# math-s12-i14: How do extra repayments, lump sums and paying more often shorten a loan?

Maths Standard research pack (Year 12, Investment, loans and annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans, group "Loans"):

- `ci668ed87c`: Examine the effect of changing the repayment frequency, additional repayments or a lump-sum payment on the term and cost of a loan using a graph or by calculation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1 (Year 12, Depreciation and loans, group "Loans"):

- `ci69b1ad8f`: Examine the effect of changing the repayment frequency, making additional repayments or a making a lump-sum payment on the term and cost of repaying a loan [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered (Standard 2 lesson). The official text contains "or a making a"; quote it exactly as published.

These are CMS codenames, not published content-point codes (ruling 16).

**Course:** Standard 1 and Standard 2. Standard 2 adds "using a graph or by calculation"; Standard 1 does not name a method, so the spreadsheet and the given graph serve both. No logarithms: Standard 2 does not use them, so a new term comes from a spreadsheet, a digital loan calculator or a supplied graph.

**Entry knowledge:** math-s12-i13: `ci94e049c3`, `cibb416d3e` (Standard 1 `cib9ea7be8`, `cica72a281`): one row per period, interest on the balance owing, and a spreadsheet model filled down; math-s12-i12: `ciad381478` (total cost = total paid minus amount borrowed).

**Prior video:** math-s12-i13.

**Start:** i13 ends on its spreadsheet with the repayment cell changed from $600 to $700 and the closing balance column racing to zero sooner (37 months down to 31). This video asks why a small change makes such a difference, and what else does it.

**Stop:** Explain that every dollar above the interest for the period reduces the balance, so each later interest charge is smaller; show with a spreadsheet, a calculation or a given graph of balance against time how (a) a regular extra repayment, (b) a one-off lump sum and (c) paying more often (half the monthly repayment every fortnight, giving 26 half-payments, the same as 13 monthly repayments a year) shorten the term and cut the total interest; read the new term and the saving from the spreadsheet or graph; say why an early extra payment saves more than the same payment late. Finding the repayment, amount owing and time to repay in general is i15.

**Next:** math-s12-i15.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at `5d74a627`), SHA256 `13b6a566e1fce40d02e973d1b5dcb86cb64a519b15c9c123b15afae5766541e0`. Title: Loans and Amortisation. Sections used: `make-extra-repayments` (card 06), `compare-loans-and-terms` (`we-2`), the true or false check, Top 3 list and short answer SA 3 (a).

### Source lesson08, card 06 ("Extra repayments, the power of paying more")

"When you make an extra payment, every dollar above the scheduled repayment goes directly to reducing the principal, which shrinks every future interest charge, shortening the loan and saving money". Example: "$400,000 mortgage at 4.8% p.a. compounded monthly over 30 years ... $2098.66 per month ... Total interest = $355,518. If you pay $2,200/month instead (only $101.34 extra per month): New term ≈ 27 years ... Total interest ≈ $316,000, saves approximately $39,500". True or false: "Paying $100 extra per month on a 30-year mortgage saves more money if you start in Year 1 than if you start in Year 20." (True.)

### Source lesson08, `we-2`

PROBLEM 2 · EXTRA REPAYMENTS. "$15,000 personal loan at 9.6% p.a. compounded monthly over 5 years. Find monthly repayment, total interest, and savings from paying $50 extra per month." Repayment $315.76; total interest $3946; with $365.76, "n ≈ 50 months. Saves 10 months and ≈ $694 interest." (Step 4 solves for n with logarithms.)

### Source lesson08, short answer SA 3 (a)

"Explain mathematically why paying fortnightly (half the monthly amount, 26 times per year) reduces total interest compared to monthly payments." Answer: "26 half-payments = 13 full payments per year instead of 12. The extra annual payment goes entirely to principal ... Paying more frequently also means slightly less interest accrues between payments".

Only the parts named in the stop boundary belong to this video. The site has no lump-sum example; the video adds one (below).

## 3. Recalculation

- `we-2`: repayment $315.76 (315.7553...); total interest $3 945.60 (site $3 946, rounded). Run month by month with interest rounded to the cent: 61 payments, the last $0.07, interest $3 945.67. With $365.76: 50 payments (last $329.79), total interest $3 252.03, so the saving is $693.64 and 10 fewer months; the site's "≈ $694" and "≈ 50 months" match.
- Lump sum (original example for the video): the same loan with a single $2 000 paid at the end of month 12, repayments unchanged: cleared after 52 payments, total interest $3 106.36, saving $839.31 (from $3 945.67) and 9 months.
- Fortnightly (original example): half the repayment, $157.88, every fortnight at 9.6% ÷ 26 per fortnight: cleared in 118 fortnights (about 4.5 years), total interest $3 506.88, saving $438.79. In one year monthly pays 12 × $315.76 = $3 789.12; fortnightly pays 26 × $157.88 = $4 104.88, exactly one extra monthly repayment ($315.76).
- Card 06 ($400 000 at 0.4% a month): repayment $2 098.66, total interest $355 517.60 (site $355,518). At $2 200: 326 months (27.2 years), interest $316 035.02, saving $39 482.58 (site "≈ $39,500"). These match.

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`). All site values used here match.

## 4. Misconceptions and HSC-style traps

- Thinking an extra $50 a month saves only $50 a month. It saves the interest on every dollar it removes, for the rest of the loan.
- Thinking fortnightly payments save money "because interest is charged less often". The main reason is the 13th monthly repayment hidden in 26 half-payments; the more frequent timing helps only a little.
- Thinking a lump sum lowers the repayment. On most loans the repayment stays the same and the term shortens.
- Reading the "total cost" saving as the term saving, or forgetting that the last payment is usually smaller than the rest.
- Starting an extra repayment late and expecting the same saving.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Two balance-against-month curves on one graph (StudioPlot), the original loan and the loan with an extra $50 a month, from the spreadsheet; the second curve meets zero 10 months earlier, and the gap between the curves is shaded as "interest not paid". A rider reads the term off each curve: this is the syllabus's "using a graph".
- `LoanBalanceBar` (finance-parts.tsx) in two columns, standard and extra: the teal repayment bite is wider on the right, so the amber interest cap on the next month is lower. Show one month, slowly, then let both run.
- A lump-sum drop: the balance curve with a vertical step down at month 12, then a new, earlier landing point.
- A calendar strip of 12 monthly payments against 26 fortnightly half-payments, the 26 halves pairing into 13 wholes, the 13th glowing.
- The spreadsheet (SpreadsheetGrid) with an "extra" input cell feeding the repayment column, and a "months to clear" readout (count of rows until the balance reaches zero).

Advanced reuse (visual parts only, ruling 7): math-a12-f10 built the extra-repayment idea on a mortgage calculator for a $400 000 home loan. Reuse the two-curve graph and `LoanDialGraph` idea, not the anchor or the calculator scenes. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A $9 000 personal loan charges 1% interest per month. A spreadsheet gives these results.

| Plan | Months to repay | Total interest |
| --- | --- | --- |
| $300 a month | 36 | $1 753.89 |
| $350 a month | 30 | $1 455.93 |
| $300 a month plus a $1 000 lump sum at the end of month 6 | 32 | $1 430.97 |

(a) How much interest does paying $350 a month save, and how many months sooner is the loan repaid? (b) Which plan costs the least interest? Explain why a lump sum early in the loan saves so much.

**Worked answer:** (a) $1 753.89 − $1 455.93 = $297.96, and 6 months sooner. (b) The lump-sum plan ($1 430.97). The $1 000 comes off the balance after only 6 months, so every later month's interest is charged on a balance about $1 000 smaller.

### Question 2

A loan has monthly repayments of $315.76. The borrower switches to paying half this amount every fortnight. (a) How much is paid in one year under each plan? (b) Explain why the fortnightly plan repays the loan sooner.

**Worked answer:** (a) Monthly: 12 × $315.76 = $3 789.12. Fortnightly: 26 × $157.88 = $4 104.88. (b) 26 half-payments are 13 monthly repayments, so one extra repayment a year goes straight off the balance, and later interest is charged on a smaller balance.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "fortnightly is cheaper because interest is charged twice as often", crossed). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`, with interest rounded to the cent each month; the last payment is smaller).

## 7. Everyday anchors

- A second-hand camper trailer for family road trips, on the site's $15 000 personal loan at 9.6% p.a. (travel and cars; carries the extra $50 a month).
- A tax refund arriving in August and paid straight onto the camper loan as a lump sum (work and tax, linking Year 11 Earning money).
- Fortnightly pay from a part-time job, matched by fortnightly half-repayments (work; carries Question 2).

Drawn as objects (a camper trailer, a refund notice on paper, a pay calendar), never people. Grepped 18 November 2026: "camper", "tax refund" and "fortnightly pay" have no hits in the Advanced finance designs or the Standard a-strand packs. The site's $400 000 mortgage is avoided as the spine because Advanced f10's anchor is a $400 000 home loan; its figures are kept only as a recalculated check. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

No error in the parts used. One method finding is logged as MS-24 in `../../site-corrections-maths-standard.md` (section 6): `we-2` step 4 and SA 2 (b) solve for the new term with logarithms, which Standard 2 does not teach; the syllabus asks for "a graph or ... calculation", and a spreadsheet or calculator meets it. Decisions for Claude:

- **Method.** Use the spreadsheet's row count, or a supplied balance graph, for every new term. Do not show the logarithm step.
- **Rates.** The site's 9.6% p.a. sits within today's personal loan rates (RBA F8, September 2026: new fixed-rate personal term loans averaged 10.39% p.a.). Say once that rates change.
- **Lump sum.** The site has none; use the $2 000 tax refund at month 12 (52 payments, saving $839.31) or Question 1's figures.
- **Responsible framing.** One line: an extra repayment is only a saving if it does not leave the borrower short for bills; some fixed-rate loans limit extra repayments or charge a fee, so check the loan's terms.
- **Pace.** Three changes (extra, lump sum, frequency) plus a graph reading fit 8 to 9 minutes if each change uses the same loan. If long, move the fortnightly case into Question 2 only.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
