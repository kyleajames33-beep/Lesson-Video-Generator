# math-s11-e10: How are the Medicare levy and net pay calculated?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Taxation", outcome MST-11-03:

- `cieb8d7d73`: Calculate the Medicare levy from taxable income [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered.
- `ci87c8a7d9`: Calculate net earnings after deductions, taxation and the Medicare levy [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered.

CMS codenames, not published codes.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge (Stage 5):** 2% of an amount. Year 11: math-s11-e08 (tax payable from the 2026-27 table), math-s11-e09 (PAYG withheld, pay-slip deductions), math-s11-e07 (taxable income).

**Prior video:** math-s11-e09.

**Start:** e09's final frame: the clothing store pay slip with a Medicare card (unbranded, green and gold, no real numbers) beside it, chip "2% of what?".

**Stop:** The Medicare levy helps fund Australia's public health system (Medicare: bulk-billed GP visits, public hospitals); it is 2% of taxable income (not 2% of the tax); people on low incomes pay a reduced levy or none (2026-27 single threshold $28 011, provisional on the ATO page; named once, with one example at most); total tax for the year = income tax + Medicare levy; net earnings for a year = gross income − income tax − Medicare levy (and any other stated deductions); on a pay slip, net pay = gross pay − total deductions (PAYG, union fees, salary sacrifice, health insurance); the employer's superannuation guarantee (12% of ordinary-time earnings from 1 July 2025) is paid on top of wages into the worker's super fund and is never subtracted from net pay (salary-sacrifice super is a voluntary deduction that is). Refund or debt is e11.

**Next:** math-s11-e11.

## 2. Site order, sections and worked examples

Read-only sources (5d74a627): [earning-money/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson08.sa.html), SHA256 `2d5c712075eeee98f4fa6a78089dbe912fb78f0c8b11ca706e2188b435bf1ef5`, sections `how-progressive-tax-brackets`, `worked-examples-4-in`; [lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson06.sa.html), SHA256 `210387123f041f906bf684f5ff2cea3e23085f3febc6da2120726f784279ff17` (Deductions and Net Pay, maths-std-y11-m3-l06), sections `recall-your-gut-answer`, `what-are-deductions-and`, `superannuation-employer-cost-vs`, `worked-examples-4-in`, `common-errors-the-3`, `practice-set`.

### lesson08 (Medicare)

Card 02: "Medicare levy = Taxable income × 0.02"; "Medicare levy = 2% of taxable income (not of income tax). For $70,000: Medicare = $70,000 × 0.02 = $1,400, not $11,788 × 0.02." Quick check: "What is the Medicare levy on a taxable income of $45,000?" ($900). `we-1` (Zara, $67 500): "$\text{Medicare levy} = \$67{,}500 \times 0.02 = \$1{,}350.00$". `we-3` (Priya, $80 950): $1,619.00.

### lesson06 (deductions and net pay)

Card 02: "Net pay = Gross pay − Total deductions"; "Employer super is paid IN ADDITION to gross pay, it does not reduce net pay unless the question describes a salary sacrifice arrangement." Key term: "The super guarantee rate is 12% from 1 July 2025". Card 06 and `we-2`, `we-4`, SA 2 use 11.5% (2024-25).

- `we-1` (Kofi): gross $3,240.00 a fortnight; PAYG $712.00, union $38.50, salary sacrifice $162.00; net $2,327.50.
- `we-3` (Rhys): 38 hours at $31.50 + 5 hours at time-and-a-half = $1,433.25; deductions $535.80; net $897.45.
- `we-4`: gross $1,520; PAYG $286.00, union $14.50; net $1,219.50; employer super at 11.5% $174.80.
- Hook: "$1,500 this week but only $1,050 landed in your bank account".

## 3. Recalculation

- lesson08: $67 500 × 0.02 = $1350.00; $70 000 × 0.02 = $1400.00 (wrong method 11 788 × 0.02 = $235.76); $45 000 × 0.02 = $900.00; $80 950 × 0.02 = $1619.00. All match.
- lesson06: quick check $1808.00; `we-1` $912.50 and $2327.50; `we-3` $1197.00, $236.25, $1433.25, $897.45; `we-4` $1219.50; SA 1 $1340.00; SA 3 $1450.00. All match.
- Super at 11.5% (site): `we-2` $213.90 and $2073.90; `we-4` $174.80 and $1694.80; card 06 $66 900; SA 2 $257.60. At the current 12%: `we-2` $223.20 and $2083.20; `we-4` $182.40 and $1702.40; card 06 $67 200; SA 2 $268.80.
- Anchors: taxable income $58 400 (2026-27): tax $8040.00, levy $1168.00, net earnings $49 192.00. Low-income example (provisional thresholds): $30 000 pays 10% × (30 000 − 28 011) = $198.90 instead of $600.00.

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py`, `practice.py`).

## 4. Misconceptions and HSC-style traps

- Levy as 2% of the tax instead of the taxable income (site card 05).
- Levy on gross income instead of taxable income.
- Subtracting employer super from net pay (site Trap 01, lesson06).
- Missing one deduction in a list (site Trap 02).
- Net pay larger than gross (a sign slip; site Trap 03).
- Counting the levy twice when PAYG (which already allows for it) is subtracted on a pay slip and the levy is subtracted again.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The levy as a thin 2% slice taken from the taxable income bar (the same bar as e07 and e08), not from the tax slice; a ghost "2% of tax" slice is crossed out.
- A year view: gross income bar; deductions cut off (taxable income); tax and levy slices removed; what is left is net earnings, labelled.
- A pay-slip view: gross, then PAYG, union and salary-sacrifice lines subtracted to net; a separate "employer super 12%" line drawn outside the slip with an arrow to a super fund jar, tagged "paid on top".
- A small Medicare card and GP-clinic sign for the "what it pays for" sentence (unbranded).

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

Use the 2026-27 resident tax table on the card.

### Question 1

In 2026-27 Nadia's taxable income is $62 500 and she has no other deductions. (a) Calculate her Medicare levy. (b) Calculate her income tax from the table. (c) Calculate her net earnings for the year.

**Worked answer:** (a) 0.02 × 62 500 = $1250. (b) 4020 + 0.30 × 17 500 = $9270. (c) 62 500 − 9270 − 1250 = $51 980.

### Question 2

A pay slip shows weekly gross pay of $1284.50. Deductions are PAYG tax $214.00, union fees $9.80 and salary-sacrifice super $50.00. The employer also pays superannuation guarantee of 12% of gross pay. (a) Calculate the net pay. (b) Calculate the employer's super contribution. Does it change the net pay?

**Worked answer:** (a) 214.00 + 9.80 + 50.00 = $273.80; 1284.50 − 273.80 = $1010.70. (b) 0.12 × 1284.50 = $154.14; no, it is paid on top into the super fund.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1 (a): "2% × $9270 = $185.40", crossed, "2% of taxable income"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **A bulk-billed GP visit:** the Medicare card and a clinic sign, for the one sentence on what the levy pays for (health services, not science) (everyday).
- **A first-job pay slip from gross to net:** the site's Rhys example (38 hours at $31.50 + 5 hours overtime: $1433.25 gross, $897.45 net) or the e09 clothing store slip continued (work; carries net pay).
- **A super fund jar:** the 12% employer contribution paid on top (site `we-4` at 12%: $182.40 on $1520) (money; carries the "not a deduction" contrast).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "Medicare", "GP", "net pay", "salary sacrifice" no hits; "super" appears in math-a12-f13 (a super statement) and math-s12-i23 (a super payslip), so e10's super jar should stay a small side element, not a statement. Claude picks; none is required. Objects, never people.

**Money figures (root rulings 5 and 32):** Medicare levy 2% of taxable income; 2026-27 low-income threshold for singles $28 011 with a 10% shade-in to about $35 014 (ATO page marked provisional, based on the 2026-27 Budget announcement of 12 May 2026; [ATO, Medicare levy reduction for low-income earners](https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy/medicare-levy-reduction/medicare-levy-reduction-for-low-income-earners), read via search 19 November 2026; Codex confirms the status before narration). Superannuation guarantee 12% from 1 July 2025 ([ATO, How much super to pay](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-much-super-to-pay); Codex confirms). Say once that the levy thresholds and tax rates change each year.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 11 (MS-72: lesson06's super rate and "mandatory deductions"; MS-71: lesson04's super deduction).

Decisions for Claude:

- **Two points, one flow.** Teach the levy on the yearly bar first (cieb8d7d73), then net earnings for the year, then the weekly pay-slip version (ci87c8a7d9).
- **Low incomes.** Many Year 11 students earn under $28 011, so one sentence that they pay a reduced levy or none is accurate and relevant; do not teach the shade-in formula.
- **Medicare levy surcharge** (for higher earners without private cover) stays out.
- **Super.** Use 12% (current) or the question's stated rate; never the site's 11.5% without its year.
- Pace: WATCH (two points plus the super contrast); about 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
