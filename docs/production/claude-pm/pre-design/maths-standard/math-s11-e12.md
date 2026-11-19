# math-s11-e12: How does a spreadsheet test different tax scenarios?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Taxation", outcome MST-11-03:

- `ci877a99ed`: Use a spreadsheet to model scenarios involving taxation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: missing (crosswalk: "No Earning money lesson uses a spreadsheet for tax.").

CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge:** math-s11-e06 (`cic3748618`: a pay spreadsheet, input and formula columns, a $ fixed cell); math-s11-e08 (tax from the 2026-27 table); math-s11-e10 (Medicare levy, net earnings); math-s11-e11 (refund or debt); math-s11-f08 (fill-down).

**Prior video:** math-s11-e11.

**Start:** e11's final frame: the tax-return summary turned into one spreadsheet row (Income, Tax, Medicare levy, Net) with an empty row below, chip "what if I earn more?".

**Stop:** A tax model in a spreadsheet: input cells (income, allowable deductions, PAYG withheld) and formula cells (taxable income = income − deductions; tax from the 2026-27 table; Medicare levy = 2% of taxable income; net earnings; refund or debt = withheld − tax − levy); the tax formula is supplied and read row by row (which bracket each part of the formula handles), not built from scratch; the rates sit in their own cells so next year's table means changing a few cells; scenarios as rows: a pay rise, extra shifts, a new deduction, a second job, two job offers compared after tax; reading the results to answer a question in a sentence; the bracket myth tested on many rows at once (more taxable income always leaves more after tax). This closes the Earning money strand.

**Next:** math-s11-m01 (Managing money: percentage increase and decrease). The m-strand has no pack yet, so the handoff frame is PROVISIONAL.

## 2. Site order, sections and worked examples

No site lesson teaches this point (crosswalk: missing). Teach from the syllabus (root ruling 3). Logged in the site corrections, sections 2 (existing) and 11.

Useful site numbers to reuse as rows (recalculated for 2026-27 in e08 and e11): Zara ($67 500), Marcus ($112 000), Priya ($80 950), Ella ($45 000), lesson08 SA 1 ($60 000).

## 3. Recalculation

All with the 2026-27 resident table and a 2% levy (exact decimal arithmetic, `work/brief-standard-s11-e/practice.py`):

| Taxable income | Tax | Medicare levy | Net |
| --- | --- | --- | --- |
| $40 000 | $3270.00 | $800.00 | $35 930.00 |
| $44 000 | $3870.00 | $880.00 | $39 250.00 |
| $45 000 | $4020.00 | $900.00 | $40 080.00 |
| $46 000 | $4320.00 | $920.00 | $40 760.00 |
| $50 000 | $5520.00 | $1000.00 | $43 480.00 |

- Extra shifts: 10 Saturday shifts of 6 hours at the 2026-27 retail Saturday rate ($34.76) = $2085.60 more income; at a 30% rate plus the 2% levy, $667.39 goes in tax and levy and $1418.21 is kept.
- Two job offers after tax (e01's Question 2 numbers): Job A $64 000: tax $9720.00, levy $1280.00, net $53 000.00; Job B $33.10 × 38 × 52 = $65 405.60: tax $10 141.68, levy $1308.11, net $53 955.81; Job B ahead by $955.81 after tax (against $1405.60 before tax).
- Formula check: =IF(B2<=18200,0,IF(B2<=45000,0.15*(B2-18200),IF(B2<=135000,4020+0.3*(B2-45000),IF(B2<=190000,31020+0.37*(B2-135000),51370+0.45*(B2-190000))))) reproduces every tax value above and e08's and e11's 2026-27 values.

## 4. Misconceptions and HSC-style traps

- Believing a pay rise can lower take-home pay (the spreadsheet disproves it row by row).
- Typing tax rates into every formula, so a new year's table means rewriting the sheet (keep rates in cells).
- Treating the extra income from overtime as taxed at the average rate instead of the marginal rate.
- Comparing job offers before tax only.
- Reading a formula's bracket boundaries wrongly (<= 45000 includes $45 000 in the 15c row).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- SpreadsheetGrid (kit list a) with columns Income, Deductions, Taxable income, Tax, Medicare levy, Net, PAYG, Refund or debt; the formula bar shows each column's formula when its cell is selected.
- A formula reader: the long tax formula split into its bracket pieces, each piece lit with the matching row of e08's table (the same sliced bar).
- Scenario rows that appear one at a time, each with a short label ("pay rise", "+10 Saturday shifts", "Job B"), and a small chart of Net against Income that is always rising (a straight-ish line with gentle bends at the bracket edges).
- A "next year" moment: the 15% rate cell changes (for example to a different stated rate) and every row updates (no real future rate is stated).

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

### Question 1

A spreadsheet models tax for 2026-27. Cell B2 holds taxable income, and C2 holds the tax formula from the 2026-27 table. D2 contains =0.02*B2 and E2 contains =B2-C2-D2. (a) For B2 = 58 000, what values appear in C2, D2 and E2? (b) What does column E represent?

**Worked answer:** (a) C2: 4020 + 0.30 × 13 000 = $7920; D2: $1160; E2: 58 000 − 7920 − 1160 = $48 920. (b) Net earnings after income tax and the Medicare levy.

### Question 2

The person in Question 1 receives a 3% pay rise, so B2 changes to 1.03 × 58 000. (a) What is the new taxable income? (b) How much more does the person keep after tax and the levy? (c) Explain, using the tax table, why this is less than the pay rise.

**Worked answer:** (a) $59 740. (b) new net: 59 740 − (4020 + 0.30 × 14 740) − 1194.80 = 59 740 − 8442 − 1194.80 = $50 103.20; increase $1183.20. (c) The extra $1740 is all in the 30c row and also attracts the 2% levy, so 32% of it ($556.80) goes in tax and levy.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 2 (b): "the rise puts all $59 740 at 30%", crossed, "only the extra dollars in the row pay 30c"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **"Will a pay rise leave me worse off?":** rows from $40 000 to $50 000 across the $45 000 boundary, net always rising (work; carries the opening question and the chart).
- **Ten extra Saturday shifts:** $2085.60 more income at the 2026-27 retail Saturday rate, $1418.21 kept (a first job; callback to e02's clothing store).
- **Two job offers after tax:** e01's practice Question 2 jobs ($64 000 against $33.10 an hour), $1405.60 apart before tax and $955.81 after (work; a callback that closes the strand where it began).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "tax spreadsheet", "scenario", "Saturday shift", "job offer" no hits as tax contexts ("pay rise" appears once in math-a11-c11 as a percentage-change example). Claude picks; none is required. Objects, never people.

**Money figures (root rulings 5 and 32):** 2026-27 resident tax rates, Medicare levy 2% and the retail Saturday rate as cited in e02, e08 and e10 (ATO and FWO; Codex confirms). The low-income levy reduction and tax offsets are left out of the sheet (all rows are above $35 014). Say once that tax rates change every year (the reason the rates sit in cells).

## 8. Site corrections and decisions for Claude

Gap (no site lesson) logged in `../../site-corrections-maths-standard.md`, sections 2 and 11.

Decisions for Claude:

- **Supply the tax formula.** Nested IF formulas are not in the Year 11 Standard points; show one, read it piece by piece against the table, then use it. Alternatively, a lookup-free version with one formula per bracket row (the row chosen by eye) keeps the screen lighter; the designer picks.
- **Rates in cells.** Teach the habit (it was introduced with the commission rate in e06).
- **Scenarios.** Two or three scenarios are enough; each answers a question in a sentence.
- **Strand close.** The final frame closes Earning money and points to Managing money (m01, percentage increase and decrease): a provisional idea is the pay-rise row's "+3%" tag turning into a shop price tag with "+3%", chip "Next: prices go up too". The m01 author confirms or replaces it.
- Pace: WATCH; about 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
