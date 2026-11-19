# math-s11-e08: How does a tax table give the tax payable on a year of income?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Taxation", outcome MST-11-03:

- `cifaf82aa0`: Determine tax payable by interpreting and applying information in tax tables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered.

CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge (Stage 5):** percentages and cents per dollar (15c in the dollar = 15%). Year 11: math-s11-e07 (`ci1e53d540`: taxable income), math-s11-e03 (a sliding scale: a rate applies only to its slice).

**Prior video:** math-s11-e07.

**Start:** e07's final frame: Sophie's taxable income card ($88 990, from lesson07 `we-1`) slides beside a blank resident tax table, chip "which row?".

**Stop:** A resident income tax table for 2026-27 (nil up to $18 200; 15c for each $1 over $18 200; $4020 plus 30c for each $1 over $45 000; $31 020 plus 37c for each $1 over $135 000; $51 370 plus 45c for each $1 over $190 000); reading it in four steps (find the row, write the base amount, subtract the row's lower limit, add the rate × the excess); progressive tax as slices of income, each taxed at its own rate (the sliding scale from e03); the base amount is the tax on all the slices below; a pay rise into a higher row never lowers take-home pay (only the extra dollars pay the higher rate); "tax payable" here excludes the Medicare levy (e10); a question always supplies its table, and the table changes from year to year. PAYG is e09.

**Next:** math-s11-e09.

## 2. Site order, sections and worked examples

Read-only source: [earning-money/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson08.sa.html) (5d74a627), SHA256 `2d5c712075eeee98f4fa6a78089dbe912fb78f0c8b11ca706e2188b435bf1ef5`. Title: Calculating Income Tax. Lesson id maths-std-y11-m3-l08. Sections: `recall-your-gut-answer`, `how-progressive-tax-brackets`, `tax-refund-or-tax`, `worked-examples-4-in`, `revisit-your-thinking`, `practice-set`, `review-and-complete`. e08 uses the bracket content; Medicare is e10 and the refund or debt is e11.

### Hook and card 02

"progressive means only the income in each bracket gets taxed at that bracket's rate, not your entire income." "Income tax = Base amount + Marginal rate × (Taxable income − Threshold)". "A $70,000 income: 30% applies only to the $25,000 above $45,000".

### Card 05 (`how-progressive-tax-brackets`)

"The supplied resident income tax table for 2024–25 (unchanged for 2025–26)": "$18,201 – $45,000: 16c for each $1 over $18,200"; "$45,001 – $135,000: $4,288 + 30c for each $1 over $45,000"; "$135,001 – $190,000: $31,288 + 37c ..."; "$190,001+: $51,638 + 45c ...". "Always work from the table given in the question, tax rates change between years".

### `we-1`, `we-4` and SA 1 (tax part)

- PROBLEM 1: "Zara has a taxable income of $67,500 for the 2024–25 financial year." Income tax $11,038.00.
- PROBLEM 4 · BRACKET BOUNDARY CHECK: "Ella has a taxable income of $45,000 exactly." "0.16 × $26,800 = $4,288.00"; "This matches the base amount for the next bracket."
- SA 1: "taxable income of $60,000. Calculate their income tax payable before Medicare levy." $8,788.00.
- Revisit: "earning $90,000 ... the 30% rate applies only to the $45,000 above the threshold".

## 3. Recalculation

- Site, 2024-25 table: base amounts $4288 (= 0.16 × 26 800), $31 288, $51 638 check; `we-1` $11 038.00; `we-4` $4288.00; SA 1 $8788.00; $70 000 gives $11 788.00. All match.
- 2026-27 table (root ruling 5): base amounts 0.15 × 26 800 = $4020; 4020 + 0.30 × 90 000 = $31 020; 31 020 + 0.37 × 55 000 = $51 370 (all check). `we-1` (Zara, $67 500): 4020 + 0.30 × 22 500 = **$10 770.00**; `we-4` (Ella, $45 000): **$4020.00**; SA 1 ($60 000): **$8520.00**; $70 000: $11 520.00.
- Anchors: $30 000 gives 0.15 × 11 800 = $1770.00; $15 000 gives $0; the pay-rise myth: $44 800 to $45 600 raises tax from $3990.00 to $4200.00 and after-tax income from $40 810.00 to $41 400.00 (+$590.00); $45 000 to $45 001 adds 30 cents of tax.

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py`, `practice.py`).

## 4. Misconceptions and HSC-style traps

- Applying the top rate to the whole income ("30% of $67 500").
- Subtracting the wrong lower limit (18 200 instead of 45 000) or forgetting the base amount.
- Using gross income instead of taxable income.
- Believing a pay rise "into the next bracket" can lower take-home pay.
- Mixing up the boundary: "over $45 000" means the 30c rate starts at $45 001.
- Using a remembered table instead of the one supplied.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The tax table as a row reader: a taxable income card slides down the table until it sits in its row; the row lights; the base amount and the "over" amount lift out into a working line.
- A sliced income bar (the same part as e03's sliding scale): slices up to $18 200 (nil), $18 200 to $45 000 (15c), $45 000 up (30c), each slice's tax drawn beneath it and added. The base amount is shown to be the total of the lower slices.
- The pay-rise myth: two bars, $44 800 and $45 600; only the new $600 slice above $45 000 turns the 30c colour; the after-tax readout still rises.
- A dated source chip: "ATO resident tax rates 2026-27".

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

Use the 2026-27 resident table on the question card.

### Question 1

In 2026-27 Mai's taxable income is $52 380. Use the tax table to calculate her tax payable (ignore the Medicare levy).

**Worked answer:** row $45 001 to $135 000: 4020 + 0.30 × (52 380 − 45 000) = 4020 + 0.30 × 7380 = 4020 + 2214 = $6234.

### Question 2

(a) Calculate the tax payable on a taxable income of $31 640. (b) Kai earns $44 800 and is offered a pay rise to $45 600. Kai says, "The rise puts me in the 30% bracket, so I will be worse off." Use the table to show whether Kai is right.

**Worked answer:** (a) 0.15 × (31 640 − 18 200) = 0.15 × 13 440 = $2016. (b) Tax on $44 800 = 0.15 × 26 600 = $3990, leaving $40 810; tax on $45 600 = 4020 + 0.30 × 600 = $4200, leaving $41 400. Kai is $590 better off: only the $600 above $45 000 is taxed at 30c.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1: "0.30 × 52 380 = $15 714", crossed, "30c only on the dollars over $45 000"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **A chef's first full year:** the site's Zara ($67 500), recalculated for 2026-27 ($10 770) (work; carries the main table reading). Using a chef keeps the hospitality thread from e02 and e05.
- **A gap-year job:** $30 000 in the 15c row ($1770), and a part-time student on $15 000 who pays no tax (work and study; carries the bottom rows).
- **The pay-rise myth:** $44 800 to $45 600 (+$590 after tax) (work; carries the progressive idea; e12 tests it again in a spreadsheet).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "tax table", "bracket", "gap year" (math-s12-i01 and i08 use a gap-year savings fund; here it is a gap-year job's income, a different picture; Claude may prefer "a first part-time job" to avoid the echo), "pay rise" (math-a11-c11 uses a pay rise as a percentage-change example, not tax). Claude picks; none is required. Objects, never people.

**Money figures (root rulings 5 and 32):** resident tax rates for 2026-27: nil to $18 200; 15% from $18 201 to $45 000 (cut from 16% on 1 July 2026); 30% to $135 000; 37% to $190 000; 45% above. Read 19 November 2026 from secondary sources that cite the ATO (for example [SuperGuide, income tax rates](https://www.superguide.com.au/boost-your-superannuation/income-tax-rates) and [austax.tools, tax tables 2026-27](https://austax.tools/tax-tables-2026-27-australia/)); Codex confirms on the [ATO resident tax rates page](https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents) before narration. The base amounts ($4020, $31 020, $51 370) are derived, checked above. Say once that tax rates change; the narration can use the 16% to 15% cut as the example.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 11 (MS-73: the 2024-25 table; MS-74: the effective-rate check).

Decisions for Claude:

- **Year.** Use the 2026-27 table on screen with its year in the heading; the site's 2024-25 answers ($11 038, $4288, $8788) are correct for that year but not for 2026-27.
- **Ella's boundary case** (`we-4`) is worth keeping: at exactly $45 000 the 15c row's tax equals the next row's base amount ($4020), which shows where base amounts come from.
- **Myth.** Give the pay-rise myth one clear scene; it is the most useful idea in the lesson for a student starting work.
- **Leave out** the low income tax offset and other offsets (not in the point; they change), and non-resident or working-holiday tables. Because offsets reduce real tax on low incomes (the $30 000 example in particular), label the result "tax from the table" and keep a one-line author note; learner copy needs no caveat beyond "use the table you are given".
- Pace: comfortable; about 7 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
