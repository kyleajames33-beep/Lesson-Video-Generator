# math-s11-e11: After a tax return, do we get a refund or owe more tax?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Taxation", outcome MST-11-03:

- `ci7b90b994`: Determine by calculation if more tax is payable or if a refund is owed after completing a tax return [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered.

CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge:** math-s11-e07 (taxable income), math-s11-e08 (tax payable, 2026-27 table), math-s11-e09 (PAYG withheld across the year), math-s11-e10 (Medicare levy).

**Prior video:** math-s11-e10.

**Start:** e10's final frame: an unbranded tax-return summary screen with two lines, "Tax withheld during the year" and "Tax and Medicare levy owed", chip "refund or bill?".

**Stop:** A tax return (lodged after 30 June) works out the year's real tax; total liability = income tax (from the table, on taxable income) + Medicare levy; compare it with the PAYG withheld during the year; refund = withheld − liability when more was withheld; more tax payable (a tax debt) = liability − withheld when less was withheld; the full chain from income and deductions (gross income, allowable deductions, taxable income, tax, levy, compare); why a debt happens (two jobs both claiming the tax-free threshold; income with no tax withheld, such as bank interest) and why a refund happens (PAYG does not know about deductions, so claiming them lowers the real tax below what was withheld). Spreadsheet scenarios are e12.

**Next:** math-s11-e12.

## 2. Site order, sections and worked examples

Read-only source: [earning-money/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson08.sa.html) (5d74a627), SHA256 `2d5c712075eeee98f4fa6a78089dbe912fb78f0c8b11ca706e2188b435bf1ef5`, sections `tax-refund-or-tax`, `worked-examples-4-in`, `practice-set`.

### Card 06 (`tax-refund-or-tax`)

"At the end of each financial year, Australians lodge a tax return comparing what was withheld by their employer against what they actually owe, the difference is either a refund or a debt." "Compare PAYG to total tax liability, not income tax alone". "Refund if PAYG > tax owed; tax debt if PAYG < tax owed."

### `we-1` to `we-4` (2024-25 table on the site)

- PROBLEM 1 · FULL TAX CALCULATION, REFUND: Zara, taxable income $67,500, PAYG $14,980: refund $2,592.00.
- PROBLEM 2 · TAX DEBT OUTCOME: Marcus, $112,000, PAYG $25,300: debt $1,328.
- PROBLEM 3 · FULL QUESTION, INCOME TO REFUND/DEBT: "Priya earns $82,600 salary and $1,200 in bank interest. Her allowable deductions total $2,850. Her PAYG withheld was $19,400." Refund $2,708.00.
- PROBLEM 4 · BRACKET BOUNDARY CHECK: Ella, $45,000, PAYG $5,100: "Ella owes $88".

### Practice

SA 2: $72,000, PAYG $15,600: refund $1,772. SA 3: $95,000, PAYG $20,000: debt $1,188.

## 3. Recalculation

| Example | Taxable income | PAYG | 2024-25 (site) | 2026-27 (tax + levy = total) |
| --- | --- | --- | --- | --- |
| `we-1` Zara | $67 500 | $14 980 | refund $2592 (matches) | $10 770 + $1350 = $12 120; refund **$2860** |
| `we-2` Marcus | $112 000 | $25 300 | debt $1328 (matches) | $24 120 + $2240 = $26 360; debt **$1060** |
| `we-3` Priya | $80 950 | $19 400 | refund $2708 (matches) | $14 805 + $1619 = $16 424; refund **$2976** |
| `we-4` Ella | $45 000 | $5100 | debt $88 (matches) | $4020 + $900 = $4920; refund **$180** |
| SA 2 | $72 000 | $15 600 | refund $1772 (matches) | $12 120 + $1440 = $13 560; refund $2040 |
| SA 3 | $95 000 | $20 000 | debt $1188 (matches) | $19 020 + $1900 = $20 920; debt $920 |

Priya's chain: 82 600 + 1200 = $83 800; − 2850 = $80 950. Two-jobs anchor (provisional withholding values, see e09): $450 a week and $520 a week, both claiming the threshold, withhold $13 and $24 a week; over 52 weeks $1924 withheld on $50 440; 2026-27 tax $5652.00 + levy $1008.80 = $6660.80; debt **$4736.80**.

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py`, `practice.py`).

## 4. Misconceptions and HSC-style traps

- Comparing PAYG with income tax only, leaving out the Medicare levy (site card 06).
- Subtracting the wrong way round and calling a debt a refund.
- Using gross income instead of taxable income in the table.
- Thinking a refund is a bonus from the government (it is your own over-paid tax coming back).
- Thinking you can claim the tax-free threshold from every job.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A balance with two pans: "withheld during the year" (52 coins from e09's jar) and "tax + Medicare levy owed"; the heavier side decides refund or debt, and the difference is written as the result.
- The full chain as one row of cards that fill left to right: income, deductions, taxable income, tax, levy, total, withheld, result (the same order as the tax return summary).
- The two-jobs scene: two pay slips both ticking "tax-free threshold"; two small withholding piles that together are far smaller than the year's tax; a bill arrives.
- A year chip for the table ("2026-27 rates") and, for Ella, a side-by-side of 2024-25 (debt $88) and 2026-27 (refund $180): the same income, a different result.

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

Use the 2026-27 resident tax table on the card.

### Question 1

In 2026-27 Cooper's taxable income is $58 900 and $9100 tax was withheld from his pay. Will Cooper receive a refund or owe more tax? By how much?

**Worked answer:** tax 4020 + 0.30 × 13 900 = $8190; levy 0.02 × 58 900 = $1178; total $9368; 9368 > 9100, so he owes $268.

### Question 2

Mira earned a salary of $71 200 and $310 in bank interest in 2026-27. Her allowable deductions were $1480 and her employer withheld $13 560. Calculate her refund or tax payable.

**Worked answer:** taxable income 71 200 + 310 − 1480 = $70 030; tax 4020 + 0.30 × 25 030 = $11 529; levy 0.02 × 70 030 = $1400.60; total $12 929.60; withheld $13 560 is more, so a refund of $630.40.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 2: "13 560 − 11 529 = $2031 refund", crossed, "add the Medicare levy before comparing"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **Two casual jobs, both claiming the tax-free threshold:** $450 and $520 a week, a debt of $4736.80 at tax time (work; the most useful real lesson in the strand; withholding values provisional until Codex reads NAT 1005).
- **A first tax return's refund:** the site's Priya chain (salary, interest, deductions, refund $2976 for 2026-27) on an unbranded return summary (money; carries the full chain).
- **Same income, different year:** the site's Ella at $45 000: a debt of $88 under 2024-25 rates and a refund of $180 under 2026-27 rates (carries "rates change every year").

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "tax return", "refund" (math-s12-i14 uses an early-repayment refund idea on a loan, a different picture), "two jobs", "second job" no hits. Claude picks; none is required. Objects, never people.

**Money figures (root rulings 5 and 32):** 2026-27 resident tax rates and Medicare levy as in e08 and e10 (ATO; Codex confirms). The tax-free threshold rule from the ATO (claim with one payer when total income is over $18 200; [ATO community answer](https://community.ato.gov.au/s/article/a079s0000009GmuAAE/how-much-tax-should-i-pay-on-a-second-job-claiming-the-taxfree-threshold); Codex replaces it with the ATO's "Tax-free threshold" page if available). PAYG values from NAT 1005 for payments from 1 July 2026 (provisional here). Say once that rates change every year; Ella's flip shows it.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 11 (MS-73: the 2024-25 table changes every answer; MS-74: the effective-rate check).

Decisions for Claude:

- **Use 2026-27 throughout** and keep the site's incomes and PAYG amounts so the structure is the site's. The results differ from the site's printed answers; say nothing about the site.
- **Two-jobs debt.** It needs e09's column idea; keep the arithmetic short (two weekly amounts, × 52, one yearly comparison).
- **Leave out** offsets, HECS-HELP repayments, the Medicare levy surcharge and interest on late payment.
- Pace: comfortable; about 7 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
