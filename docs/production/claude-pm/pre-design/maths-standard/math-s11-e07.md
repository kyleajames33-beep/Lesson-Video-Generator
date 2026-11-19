# math-s11-e07: How do allowable deductions turn income into taxable income?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Taxation", outcome MST-11-03:

- `ci1e53d540`: Determine taxable income by examining allowable deductions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered.

CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge (Stage 5):** adding and subtracting money. Year 11: math-s11-e01 (yearly income from a wage or salary).

**Prior video:** math-s11-e06.

**Start:** e06's final frame: steel-capped work boots standing on a receipt, chip "does this cut my tax?".

**Stop:** Income tax is worked out for each financial year (1 July to 30 June); gross (assessable) income adds wages or salary, bank interest and other income; an allowable deduction is a cost of earning that income: protective clothing and footwear, tools and equipment, union fees, work-related study, compulsory or occupation-specific uniforms, gifts of $2 or more to a deductible gift recipient (a registered charity); not allowable: ordinary clothing (even if worn only to work), travel between home and work, private costs, and PAYG tax already withheld; the ATO's three tests in plain words (you spent the money yourself and were not paid back, it is for earning your income, you have a record); taxable income = gross income − allowable deductions; working backwards for the deductions. Tax payable is e08.

**Next:** math-s11-e08.

## 2. Site order, sections and worked examples

Read-only source: [earning-money/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson07.sa.html) (5d74a627), SHA256 `7d3d53ce2e0ad96f2440b5cb996d22f6bc8336f3a9e5be6496d6956284afedd0`. Title: Taxable Income and Allowable Deductions. Lesson id maths-std-y11-m3-l07. Sections: `recall-your-gut-answer`, `gross-income-vs-taxable`, `worked-examples-4-in`, `independent-checks`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

### Hook

"Most people assume that the ATO taxes everything you earn. But what if you spent $800 on work boots, $1,200 on a professional development course, and donated $500 to a registered charity?" Revisit: "Work boots = allowable (protective equipment for earning income). Professional development = allowable (directly incurred in earning income). Registered charity donation = allowable (DGR donation of $2+)."

### Card 05 (`gross-income-vs-taxable`)

"Taxable income is gross income minus allowable deductions." "PAYG tax withheld is NOT an allowable deduction". Quick check: "$64,500 ... $700 in bank interest ... deductions total $2,850" (answer $62,350).

### `we-1` to `we-4`

- PROBLEM 1 · IDENTIFYING DEDUCTIONS: "Sophie is a secondary school teacher. Her annual salary is $89,400. She also earned $640 interest. She spent: $480 on textbooks and classroom resources, $320 on a professional development course, $180 on a conventional work wardrobe, $250 donation to a registered charity, $860 on daily train travel to school." Allowable $1,050; taxable $88,990.
- PROBLEM 2 · MULTIPLE INCOME SOURCES: David, $74,200 + $1,850 rent + $420 interest − $3,640 = $72,830.
- PROBLEM 3 · WORKING BACKWARDS: Anika, $64,800 + $380 − $61,450 = $3,730.
- PROBLEM 4 · MIXED DEDUCTION LIST: "Olivia earned $72,400 in salary and $560 in bank interest. Her listed expenses are: $420 union fees, $660 professional registration, $240 conventional business clothes, $1,150 commuting costs, and a $300 donation to a registered charity." Taxable $71,580.

### Practice

SA 1 $62,350; SA 2 $2,600; SA 3 ($78 000 salary; union $520, commuting $860, charity $290, textbooks $430) $76,760.

## 3. Recalculation

- Quick check and SA 1 $62 350.00; `we-1` $90 040.00, $1050.00, $88 990.00; `we-2` $72 830.00; `we-3` $3730.00; `we-4` $72 960.00, $1380.00, $71 580.00; SA 2 $2600.00; SA 3 $76 760.00.

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py`). All site answers match.

## 4. Misconceptions and HSC-style traps

- Subtracting PAYG tax withheld as a deduction (site card 05).
- Claiming plain clothes because they are worn only at work.
- Claiming travel from home to work.
- Using gross income in the tax table (e08 depends on taxable income).
- Forgetting interest or other income in gross income.
- Treating any work-related purchase as deductible when the employer paid it back.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A receipt sorter: receipts slide in one at a time and drop into "allowable" or "not allowable" trays, each with a one-line reason tag ("protective", "ordinary clothing", "home to work").
- An income stack (salary, interest, rent) that becomes the gross income bar; the allowable tray's total is cut off the top to leave taxable income. The PAYG amount hovers with a "not a deduction: tax already paid" tag and is set aside.
- A working-backwards version: gross and taxable bars known, the gap labelled "deductions = ?".

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

### Question 1

Taylor works as a carpenter. In the 2026-27 financial year Taylor earns a salary of $56 300 and $185 in bank interest. Taylor's expenses were: steel-capped boots $189, union fees $364, plain black work pants $79, a $40 donation to a registered charity (a deductible gift recipient) and bus fares between home and work $1040. Calculate Taylor's taxable income.

**Worked answer:** gross income 56 300 + 185 = $56 485; allowable: boots $189, union fees $364, donation $40 = $593 (not the plain pants or the home-to-work fares); taxable income 56 485 − 593 = $55 892.

### Question 2

Ravi's taxable income is $47 260. He earned $48 900 in wages and $76 in interest. What was the total of his allowable deductions?

**Worked answer:** gross 48 900 + 76 = $48 976; deductions = 48 976 − 47 260 = $1716.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1: every expense subtracted, "$54 773", crossed, "plain clothes and home-to-work travel are not allowed"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **A carpentry apprentice's steel-capped boots and tool kit:** the site's hook (work boots, a course, a donation), with "steel-capped" added so the boots are clearly protective (trades; carries the opening and the sorter; a deliberate callback to e01's carpenter, so one tool-belt plate can serve both).
- **A clothing store's logo shirt against plain black pants:** a compulsory uniform with the employer's logo is deductible to buy and clean; plain black pants are not, even if worn only at work (retail; carries the "ordinary clothing" rule; the clothing store recurs from e02 and e05).
- **A bus card and a charity receipt:** home-to-work travel is not deductible; a $2-or-more gift to a deductible gift recipient is (everyday; two quick sorts).

The worked examples can be the site's: `we-1` (Sophie, a teacher, $88 990) and `we-4` (Olivia, $71 580). Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "steel-cap", "work boots", "receipt", "deduction", "logo shirt", "bus card" no hits as tax contexts ("uniform" appears in Advanced statistics as "uniform distribution", unrelated; "travel card" plates exist, `maths/ma11-travel-card-v1.png`, and could serve the bus card after an appearance check). Claude picks; none is required. Objects, never people.

**Money figures and rules (root rulings 5 and 32):** cite the ATO pages for the three tests and the clothing rules ([ATO, Work-related deductions](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim), [ATO, Clothing, laundry and dry-cleaning expenses](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/clothing-laundry-and-dry-cleaning-expenses), [ATO, Gifts and donations](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/gifts-and-donations)), each read and dated by Codex before narration (the URLs were found by search on 19 November 2026, not opened). Say once that tax rules and rates change each year.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 11 (MS-75: the hook's boots and course need their conditions). No arithmetic error in lesson07.

Decisions for Claude:

- **Conditions matter more than lists.** Teach the plain test (spent it yourself, for earning this income, kept a record) once, then sort items with it, rather than a long list to memorise.
- **The site's "work boots" and "professional development"** are allowable only if the boots are protective and the course relates to the current job; say so in the sort.
- **Leave out** the $300 no-receipt threshold, car expenses and working-from-home rates (beyond the point and frequently changed).
- Pace: comfortable; about 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
