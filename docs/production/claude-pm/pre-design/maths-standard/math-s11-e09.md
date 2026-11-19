# math-s11-e09: How does PAYG take tax out of each weekly, fortnightly or monthly pay?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Taxation", outcome MST-11-03:

- `cic3cf78c6`: Calculate the weekly, fortnightly or monthly tax to be deducted from a worker’s pay under the Australian Pay-As-You-Go (PAYG) taxation system using tax tables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: the crosswalk says covered (matches in lesson04 `calculating-gross-pay-from` and lesson06 `superannuation-employer-cost-vs`), but neither lesson reads a PAYG tax table: PAYG is always given as a dollar amount. Treat as a site gap for the table reading (logged in section 11).

CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge:** math-s11-e08 (`cifaf82aa0`: yearly tax payable from a table); math-s11-e01 (weekly, fortnightly and monthly pay); math-s11-e02 (gross pay on a pay slip).

**Prior video:** math-s11-e08.

**Start:** e08's final frame: a weekly pay slip with gross pay filled in and a blank "Tax withheld" line, chip "taken out every week?".

**Stop:** PAYG withholding: the employer takes an amount of tax from every pay and sends it to the ATO, so the year's tax is paid as you go; the amount comes from the ATO's tax tables for the pay period (weekly NAT 1005, fortnightly NAT 1006, monthly NAT 1007, for payments from 1 July 2026); choosing the column: "with tax-free threshold" (claimed with one employer on the tax file number declaration) or "no tax-free threshold" (a second job); reading the row for the gross pay (whole dollars); the withheld amount already allows for the Medicare levy; weekly withheld × 52 is close to, but not exactly, the year's tax plus levy (a preview of e11); net pay on the slip = gross − PAYG − any other deductions. The Medicare levy calculation is e10.

**Next:** math-s11-e10.

## 2. Site order, sections and worked examples

Read-only sources (5d74a627): [earning-money/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson04.sa.html), SHA256 `9dfc6dcec3727e7981fbade98d9b06ccc0c88ad4373ec8bdef040c6059b79d09`, sections `anatomy-of-a-pay`, `pay-slip-strategy-for`, `worked-examples`; [lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson06.sa.html), SHA256 `210387123f041f906bf684f5ff2cea3e23085f3febc6da2120726f784279ff17`, sections `what-are-deductions-and`, `superannuation-employer-cost-vs`, `worked-examples-4-in`.

### What the site has

- lesson04 card 01: "Under Australian law, employers must provide a pay slip within one working day of each pay day." Card 04: "Deductions: tax withheld, employee super, union fees or similar deductions".
- lesson04 `we-4` (PROBLEM 4 · FINDING NET PAY): "gross pay of $1,986.40. Deductions are PAYG tax $412.00, union fees $18.40, and employee superannuation $96.00." Net $1,460.00.
- lesson06 `we-1` (PROBLEM 1 · STRAIGHTFORWARD NET PAY): "Kofi's gross fortnightly pay is $3,240.00. His deductions are: PAYG tax withheld $712.00, union fee $38.50, salary sacrifice super $162.00." Net $2,327.50.
- lesson06 hook: "If you earned $1,500 this week but only $1,050 landed in your bank account, where did the other $450 go?"

### What the site lacks

No ATO table, no column choice, no reading of a withholding amount, no fortnightly or monthly table. Teach from the syllabus with a 2026-27 ATO table excerpt (root ruling 3).

## 3. Recalculation

- Site: lesson04 `we-4` $526.40 and $1460.00; lesson06 `we-1` $912.50 and $2327.50; hook $450.00. All match.
- **2026-27 withholding values (PROVISIONAL).** Computed from the Schedule 1 (NAT 1004) scale 2 weekly coefficients for payments from 1 July 2026 as published by a payroll site ([pay-calculator-australia.com, weekly tax table 2026-27](https://pay-calculator-australia.com/weekly-tax-table/2026-27/), read 19 November 2026), using the ATO method (weekly earnings in whole dollars plus 99 cents, result rounded to the dollar): weekly $900 → $106; $1000 → $138; $1056 (retail Level 1, 38 × $27.81 = $1056.78) → $156; $1112 → $174; $1200 → $202; $1500 → $299. Fortnightly $2224 → $348 (twice the weekly amount on $1112); monthly $5200 → $875 (weekly equivalent $1200 × 13 ÷ 3, rounded). **Codex copies the exact rows from the ATO's NAT 1005, 1006 and 1007 PDFs before design; if any differ, the ATO values win.**
- Annual comparison: 52 × $174 = $9048 withheld on $57 824 a year; 2026-27 tax $7867.20 + Medicare levy $1156.48 = $9023.68, so about $24 too much is withheld (a small refund, e11).

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py`, `practice.py`).

## 4. Misconceptions and HSC-style traps

- Reading the wrong column (with or without the tax-free threshold).
- Using the weekly table for a fortnightly pay, or halving and forgetting to double back.
- Thinking PAYG is an extra tax on top of income tax (it is a prepayment of the same tax).
- Thinking the withheld amount is exactly the year's tax (the return settles the difference, e11).
- Claiming the tax-free threshold with two employers at once.
- Using net pay to look up the table (the table uses gross pay).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A pay slip card (kit) with gross, PAYG withheld, other deductions and net; the PAYG line fills from a table lookup.
- An ATO-style table excerpt (unbranded layout, ATO named as the source): columns "weekly earnings", "with tax-free threshold", "no tax-free threshold"; a finger or highlight runs down to the row and across to the column.
- A TFN declaration check box ("claim the tax-free threshold?") that switches the active column.
- A year strip of 52 small withheld coins filling a jar labelled "paid to the ATO", set beside the yearly tax and levy (preview of e11).

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

The question card shows a short excerpt of the 2026-27 weekly table (rows $898 to $902 and $1198 to $1202 at least, both columns), copied exactly from NAT 1005 by Codex.

### Question 1

Use the weekly tax table excerpt. (a) Alex earns $900 a week and has claimed the tax-free threshold with this employer. How much tax is withheld each week? (b) Jess earns $1200 a week and has also claimed the tax-free threshold. What is Jess's net pay if $15 a week is also deducted for union fees?

**Worked answer (provisional values):** (a) $106. (b) $1200 − $202 − $15 = $983.

### Question 2

Ty is paid $1800 a fortnight and has claimed the tax-free threshold. (a) Use the fortnightly table excerpt to find the tax withheld each fortnight. (b) How much is withheld over the year? (c) Ty's yearly tax plus Medicare levy on $46 800 is $5496. Will Ty get a refund or owe tax, and how much?

**Worked answer (provisional values):** (a) $212 (twice the weekly amount on $900). (b) 26 × $212 = $5512. (c) 5512 − 5496 = $16 refund. (Codex re-derives (a) from NAT 1006; (c) changes with it.)

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1 (a): the "no tax-free threshold" column, crossed, "this job claims the threshold"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **A clothing store weekly pay slip:** 38 hours at the 2026-27 retail Level 1 rate ($1056.78 gross; about $156 withheld, provisional), the e02 store as a callback (a first job; carries the table reading).
- **The tax-free threshold tick box:** a first job (tick) and a second weekend job (no tick), the two columns compared (work; carries the column choice and sets up e11's two-jobs debt).
- **A graduate's monthly salary:** $62 400 a year, $5200 a month, monthly table (about $875 withheld, provisional) (work; carries the monthly table).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "PAYG", "withheld", "tax-free threshold", "graduate", "TFN" no hits; "pay slip" appears in math-s12-r06 to r09 as a rate comparison ($336 for 8 hours against $270 for 6 hours) and "payslip" in i22 and i23 (super), so the e09 slip should look different (weekly retail slip with a tax line). Claude picks; none is required. Objects, never people.

**Money figures (root rulings 5 and 32):** ATO tax tables for payments from 1 July 2026 ([ATO, Tax tables](https://www.ato.gov.au/rates/tax-tables/)); NAT 1005 weekly, NAT 1006 fortnightly, NAT 1007 monthly. Values above are provisional until Codex reads the ATO PDFs. The tax-free threshold rule (claim it with only one payer when total income is over $18 200) from the ATO ([ATO community answer on two jobs](https://community.ato.gov.au/s/article/a079s0000009GmuAAE/how-much-tax-should-i-pay-on-a-second-job-claiming-the-taxfree-threshold); Codex replaces it with the ATO's own "Tax-free threshold" page if available). Say once that the tables change each year.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 11 (the PAYG table gap; MS-71: lesson04's super line).

Decisions for Claude:

- **Excerpt, not the whole table.** Show five or six rows around each value, both columns, with the ATO named and the year in the heading; HSC questions supply excerpts the same way.
- **Formulas.** The ATO's coefficient formula (a × x − b) is how the tables are made, not what the syllabus asks; leave it out of learner copy.
- **Medicare levy.** Say once that the withheld amount already includes an allowance for the Medicare levy, then leave the levy for e10.
- **lesson06's net-pay examples** suit the closing net-pay line; avoid lesson04 `we-2`'s unexplained "superannuation" deduction (MS-71).
- Pace: comfortable; about 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
