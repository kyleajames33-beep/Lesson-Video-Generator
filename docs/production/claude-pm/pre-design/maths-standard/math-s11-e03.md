# math-s11-e03: How does commission, including a sliding scale, pay for sales?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Ways of earning", outcome MST-11-03:

- `ci85c34acf`: Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: partial (crosswalk note: "Commission, sliding-scale (tiered) commission, piecework and royalties are taught in earning-money/lesson03. Government payments and sole-trader earnings are not taught as earnings.").

The point is shared: e03 owns commission and sliding scale commission; e04 owns piecework, royalties, government payments and sole-trader earnings (outline, "Points owned by more than one video"). CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge (Stage 5):** a percentage as a decimal (2.8% = 0.028) and a percentage of an amount. Year 11: math-s11-e01 (pay periods, converting to a year), math-s11-e02 (working pay in separate blocks, then adding).

**Prior video:** math-s11-e02.

**Start:** e02's final frame: a car yard's price board with a card "salesperson: $620 a week + 2.8% of sales" (lesson03 `we-1`), chip "paid for sales, not hours".

**Stop:** Commission as a percentage of the value of sales (convert the percentage to a decimal first); a retainer (a fixed amount each period) plus commission; commission on sales above a threshold (subtract the threshold, then apply the rate); sliding scale (tiered) commission: split sales at each boundary, apply each rate only to its slice, then add; finding the sales needed for a target income (one short equation, lesson05 card 03); comparing a commission job with a salary in the same period (optional, lesson05 `we-2`). Piecework, royalties, government payments and sole-trader earnings are e04.

**Next:** math-s11-e04.

## 2. Site order, sections and worked examples

Read-only sources (5d74a627): [earning-money/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson03.sa.html), SHA256 `4bff2698118bd1e4657f6f5cf02f51557282e4959a29a1249fd1b481a6392aa4` (Commission, Piecework and Leave Loading, maths-std-y11-m3-l03), sections `recall-your-gut-answer`, `commission-flat-and-retainer`, `tiered-commission-split-by`, `worked-examples-4-in`, `common-errors-the-3`, `revisit-your-thinking`, `practice-set`, `review-and-complete`; and [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson05.sa.html), SHA256 `b254ea601d328e73a60f6b12e60e4218df2bcfb2fbe7afdf5df4cb7577de32c2` (Earning Money, Exam Practice), section `comparing-earning-options` and `we-2`.

### lesson03 hook

"Imagine you're a real estate agent who just sold a $1.2 million house. You don't get paid an hourly wage, you get a cut of the sale price. But what happens in a slow month when nothing sells?"

### Card 05 (`commission-flat-and-retainer`)

"a commission rate of 3.5% on $45,000 of sales gives $45,000 × 0.035 = $1,575." Retainer plus commission. "Some questions say "5% commission on all sales above $10,000." This means you subtract $10,000 first, then apply 5%."

### Card 06 (`tiered-commission-split-by`)

"2% on the first $20,000, 3.5% on the next $30,000 (up to $50,000), and 5% on any sales above $50,000." On $65 000: $400 + $1,050 + $750 = $2,200. "Applying 5% to the full $65,000 gives $3,250, $1,050 more than the correct answer".

### `we-1` and `we-2`

- PROBLEM 1 · RETAINER + COMMISSION: "Daniela works as a car salesperson. She receives a weekly retainer of $620 and a commission of 2.8% on all sales. In one week she sells $84,000 worth of cars." $2,972.00.
- PROBLEM 2 · TIERED COMMISSION: "3% on the first $15,000 of monthly sales, 4.5% on sales from $15,001 to $40,000, and 6% on sales above $40,000. In March he achieves $55,000 in sales." $450 + $1,125 + $900 = $2,475.00.

### Traps, drills, lesson05

Trap 01 ("$910,000 × 2.2 = $2,002,000. $910,000 × 0.022 = $20,020"); Trap 02 (top rate on all sales). Drill 1: $540 retainer + 3.2% of $48 000 = $2,076.00. lesson05 `we-2` (Maya): Job A $52 000 salary against $650 a fortnight + 3.5% of $28 000; Job B $42 380.00; Job A by $9,620. lesson05 SAQ 2: $720 + 2.8% of $34 500 = $1,686.00 a fortnight, $43 836.00 a year.

## 3. Recalculation

- Card 05 $1575.00; card 06 $400.00, $1050.00, $750.00, $2200.00, wrong $3250.00 (difference $1050.00).
- `we-1` $2352.00 and $2972.00; `we-2` $450.00, $1125.00, $900.00, $2475.00 (6% of all $55 000 would be $3300.00).
- Trap 01 $2 002 000.00 and $20 020.00; drill 1 $2076.00.
- lesson05 `we-2` $1630.00, $42 380.00, $9620.00; SAQ 2 $1686.00 and $43 836.00.

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py`). All site answers match.

## 4. Misconceptions and HSC-style traps

- Multiplying by 3.5 instead of 0.035 (site Trap 01).
- Applying the top rate to all sales in a sliding scale (site Trap 02).
- Forgetting to subtract the threshold in "on sales above $10 000".
- Adding the retainer to sales before applying the rate.
- Reading "4.5% on sales from $15 001 to $40 000" as $40 000 at 4.5% instead of the $25 000 slice.
- Thinking that moving into a higher tier makes earlier sales pay more (it does not; the same slicing idea returns in income tax, e08).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A sales bar cut at the tier boundaries: each slice coloured, its rate on the slice, its commission dropping out underneath; the slices' amounts add to the total. A "wrong" ghost bar in one colour at the top rate shows the $3250 against $2200 gap.
- A retainer floor: a fixed block that is paid even when sales are zero, with commission stacked on top. The hook's "slow month" shows the floor alone (with a retainer) or nothing (commission only).
- A percentage-to-decimal tag that slides the decimal point two places (3.5% to 0.035) before every multiplication.
- For the target-sales question: the sales bar grows until the earnings readout reaches the target.

The sliced bar should be the same part that e08 uses for tax brackets, so students see the same picture twice. Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

### Question 1

A phone shop pays its sales staff commission on a sliding scale each month: 4% on the first $10 000 of sales, 6% on the next $15 000, and 8% on sales above $25 000. In June, Ari's sales are $31 500. Calculate Ari's commission for June.

**Worked answer:** 0.04 × 10 000 = $400; 0.06 × 15 000 = $900; 0.08 × (31 500 − 25 000) = 0.08 × 6500 = $520; total $1820.

### Question 2

A salesperson is paid a retainer of $450 per week plus 3.5% commission on weekly sales above $5000. (a) Calculate the pay for a week with sales of $12 800. (b) What weekly sales are needed for a pay of $1000?

**Worked answer:** (a) 450 + 0.035 × (12 800 − 5000) = 450 + 273 = $723.00. (b) 450 + 0.035(S − 5000) = 1000, so S − 5000 = 550 ÷ 0.035 = 15 714.29 (to the cent), S = $20 714.29; sales of at least $20 714.29.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1: "8% × 31 500 = $2520", crossed, "each rate only on its slice"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **A car yard:** a retainer plus commission (site `we-1`: $620 + 2.8% of $84 000 = $2972.00) (cars; carries retainer and commission).
- **A phone shop's monthly sliding scale:** site card 06's tiers (2%, 3.5%, 5% on $65 000 = $2200) shown on a phone shop's sales board (phones and retail; carries the slicing picture).
- **A house sale in a slow month:** the site's hook (an agent's income depends on sales; nothing sold, nothing earned unless there is a retainer). Keep it to the opening and the slow-month contrast; do not state a typical real estate commission rate (unsourced).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "car yard", "car sales", "phone shop", "commission", "real estate" no hits in an earnings role ("mobile phone" appears in math-s12-i06a as a share example, a different picture). Claude picks; none is required. Objects, never people.

**Money figures (root rulings 5 and 32):** commission rates are set by each employment contract, so the video uses the question's rates and needs no dated source. If a design states a real retail award minimum alongside commission (commission cannot take an award employee below the award), cite the FWO pay guide for 2026-27 and say that rates change each year.

## 8. Site corrections and decisions for Claude

No error in lesson03's commission content or lesson05's comparisons. See `../../site-corrections-maths-standard.md`, section 11 for the strand's findings.

Decisions for Claude:

- **Shared point.** Say in the description that the point continues in e04; quote it once in full in both videos.
- **Sliding scale = slices.** Build the sliced bar carefully; e08 (tax brackets) calls back to it.
- **Target sales** (lesson05 card 03) is a short equation; include one if time allows, as an extension of the threshold idea.
- **Comparison with a salary** (lesson05 `we-2`) is optional; it repeats e01's conversion skill.
- Pace: comfortable; about 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
