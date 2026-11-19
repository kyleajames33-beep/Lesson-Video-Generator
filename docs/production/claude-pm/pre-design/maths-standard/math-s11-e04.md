# math-s11-e04: How are piecework, royalties, government payments and sole-trader income worked out?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Ways of earning", outcome MST-11-03:

- `ci85c34acf`: Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: partial (crosswalk: government payments and sole-trader earnings are not taught as earnings). In fact royalties are only defined (lesson03 key terms: "Payment to the owner of intellectual property based on sales or usage"), with no example.

Shared point: e03 owns commission; e04 owns piecework, royalties, government payments and sole-trader earnings. CMS codename, not a published code.

**Course:** one video (or two, see the split) for Standard 1 and Standard 2.

**Entry knowledge (Stage 5):** percentages as decimals; multiplying and dividing decimals; rounding up to reach a target. Year 11: math-s11-e01 (weekly, fortnightly, yearly conversions), math-s11-e03 (a rate applied to an amount).

**Prior video:** math-s11-e03.

**Start:** e03's final frame: a strawberry crate on a farm scale with a tag "$2.35 a crate" (lesson03 `we-4`), chip "paid per item".

**Stop:** Piecework: pay = number of items × rate per item; the number of items needed to match a wage (divide, then round up); under the Horticulture Award, pieceworkers must earn at least the minimum hourly rate for the hours worked (one dated sentence); royalties: a percentage of the price of each item sold (a book), so royalty = rate × price × number sold; government payments: a fixed amount per period, converted between fortnights, weeks and years (Youth Allowance, paid fortnightly), without the income test; sole-trader earnings: income from the business minus the business's costs, with no employer, no paid leave and no employer super (so a sole trader sets money aside for these). Leave loading is e05.

**Next:** math-s11-e05.

## 2. Site order, sections and worked examples

Read-only sources (5d74a627): [earning-money/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson03.sa.html), SHA256 `4bff2698118bd1e4657f6f5cf02f51557282e4959a29a1249fd1b481a6392aa4`, sections `worked-examples-4-in`, `revisit-your-thinking`, `practice-set`; [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson05.sa.html), SHA256 `b254ea601d328e73a60f6b12e60e4218df2bcfb2fbe7afdf5df4cb7577de32c2`, sections `comparing-earning-options` and `worked-examples`.

### lesson03 `we-4`

PROBLEM 4 · PIECEWORK: "A farm worker is paid $2.35 per crate of strawberries picked. In one shift they pick 186 crates. Calculate the worker's pay for the shift." "$= \$437.10$". Drill 2: "A worker is paid $2.45 per box packed. They pack 172 boxes in a day." $421.40. Revisit: "Piecework rewards speed but can disadvantage workers during machinery breakdowns or poor harvests".

### lesson05 `we-3`

PROBLEM 3 · PIECEWORK BREAK-EVEN: "Option A: $19.80 per hour for a 38-hour week. Option B: $2.75 per component assembled. How many components per week must a worker produce under Option B to earn at least as much as Option A?" $752.40; n = 273.6...; "274 components" ("273 components pay $750.75, which falls short").

### Royalties, government payments, sole traders

Not taught on the site (definition of royalty only). Teach from the syllabus (root ruling 3); logged in the site corrections, section 2 (existing) and section 11.

## 3. Recalculation

- lesson03 `we-4` 186 × 2.35 = $437.10; drill 2 172 × 2.45 = $421.40.
- lesson05 `we-3` $752.40; 752.40 ÷ 2.75 = 273.6, rounded up to 274; 273 × 2.75 = $750.75; 274 × 2.75 = $753.50.
- Repriced `we-3` for 2026-27 (if used): 27.81 × 38 = $1056.78; ÷ 2.75 = 384.28..., so 385 components (384 pay $1056.00, short by 78 cents; 385 pay $1058.75).
- Anchors: royalty 0.10 × 29.99 × 2400 = $7197.60; Youth Allowance 677.20 × 26 = $17 607.20 a year, 677.20 ÷ 2 = $338.60 a week; car detailing 14 × 85 = $1190.00 income, − $230.00 costs = $960.00 a week, × 52 = $49 920.00 if every week is the same.

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py` and `practice.py`). All site answers match.

## 4. Misconceptions and HSC-style traps

- Rounding down the number of items needed to match a wage (273 falls short; round up).
- Royalty as a percentage of the author's profit or of the total print run, instead of the price of copies sold.
- Treating a sole trader's takings as earnings without subtracting business costs.
- Converting a fortnightly payment to a year with × 24 or × 12.
- Thinking piecework can pay below the minimum wage (not under the Horticulture Award since 28 April 2022).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A crate counter: crates stack up through a shift, the pay readout rising $2.35 at a time; for the break-even, a target line on the same readout and the 274th (or 385th) crate tipping the readout over it.
- A royalty slice: a book's price tag split into a thin royalty slice (10%) and the rest (printing, shop, publisher), then the slice multiplied by copies sold.
- A payment calendar: Youth Allowance amounts dropping into every second week of a 52-week strip (26 payments), then summed.
- A sole-trader ledger: money in (jobs × price) on one side, money out (products, fuel) on the other, and the difference as earnings; a small "no paid leave, no super from an employer" chip.

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

### Question 1

(a) A picker is paid $3.40 for each tray of blueberries. In an 8-hour shift she fills 96 trays. Calculate her pay for the shift and her average earnings per hour. (b) An author receives royalties of 8% of the $34.95 recommended retail price for each printed copy sold, and 12% of the $14.99 price for each e-book sold. In one year 1850 printed copies and 640 e-books are sold. Calculate the author's total royalties.

**Worked answer:** (a) 96 × 3.40 = $326.40; 326.40 ÷ 8 = $40.80 per hour. (b) 0.08 × 34.95 × 1850 = $5172.60; 0.12 × 14.99 × 640 = $1151.23 (1151.232); total $6323.83.

### Question 2

Ellie runs a mobile dog-washing business as a sole trader. She charges $45 per dog. In one week she washes 32 dogs and spends $186.50 on shampoo, water and fuel. (a) Calculate her earnings for the week. (b) With the same costs, how many dogs must she wash to earn at least $1200 in a week?

**Worked answer:** (a) 32 × 45 = $1440.00; 1440.00 − 186.50 = $1253.50. (b) 45n − 186.50 ≥ 1200, so n ≥ 1386.50 ÷ 45 = 30.8...; 31 dogs (30 dogs earn $1163.50; 31 earn $1208.50).

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 2 (b): "30 dogs", crossed, "30.8 rounds up: 30 falls short"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **Strawberry picking:** the site's `we-4` (186 crates × $2.35 = $437.10), plus the dated piece-rate floor (horticulture; a common holiday and gap-year job).
- **A first novel's royalties:** 10% of a $29.99 recommended retail price on 2400 copies sold = $7197.60 (books; an original, labelled example: royalty contracts vary).
- **Youth Allowance and a mobile car-detailing round:** a student's Youth Allowance of $677.20 a fortnight ($17 607.20 a year) and a sole trader who details 14 cars a week at $85 with $230 of costs ($960 a week) (government payment and sole trader; original, labelled examples).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "strawberr", "royalt", "novel", "Youth Allowance", "car wash", "detailing", "dog wash", "blueberr" no hits ("orchard" appears in a12-s10 data, a different picture). Claude picks; none is required. Objects, never people (the dog in Question 2 is text only).

**Money figures (root rulings 5 and 32):** Youth Allowance (students and apprentices), single, no children, living away from home: $677.20 a fortnight basic rate from 1 January 2026, indexed each 1 January ([Services Australia, How much you can get](https://www.servicesaustralia.gov.au/how-much-youth-allowance-for-students-and-apprentices-you-can-get), read via search 19 November 2026; Codex confirms on the page). Horticulture Award pieceworkers are guaranteed at least the minimum hourly rate for hours worked from the first pay period on or after 28 April 2022 ([Fair Work Ombudsman media release, 28 April 2022](https://www.fairwork.gov.au/newsroom/media-releases/2022-media-releases/april-2022/20220428-horticulture-award-changes-media-release)). Check the site's $437.10 shift against that floor: 437.10 ÷ 8 = $54.64 an hour for an 8-hour shift, comfortably above it. Say once that payment rates change every year.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 2 (government payments and sole-trader earnings) and section 11 (MS-76 for lesson05 `we-3`'s $19.80; the royalties gap).

Decisions for Claude:

- **Split (suggested).** Four kinds of earning, three with no site teaching, is likely too much for one gentle video. Suggested: **e04a** "Piecework and royalties: paid per item" (crates, books) and **e04b** "Government payments and sole-trader earnings" (Youth Allowance, a car-detailing round). Both quote the full point. Root decides; if not split, cap each part at one worked example.
- **Government payments.** Do not model the income test or rent assistance; one payment amount and its conversions are enough for the point. Name the source and date on screen.
- **Sole trader.** Earnings = income − business costs. One sentence that sole traders pay their own tax (via a tax return) and have no employer super or paid leave; no ABN or GST detail.
- **lesson05 `we-3`.** Keep the method (divide, round up, check one less) with the 2026-27 wage, or label $19.80 a junior rate.
- Pace: at risk without the split; each split part about 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
