# math-s12-i11: Which depreciation method loses value faster, and how does a spreadsheet compare them?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `ci776a0f04` (Depreciation and loans): Compare straight-line depreciation and declining balance depreciation both numerically and graphically, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.
- `ci4311f343` (Depreciation and loans): Use a spreadsheet to numerically and graphically model depreciation using the straight-line and declining balance methods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1 (Year 12, Depreciation and loans):

- `ci7395c156`: Compare straight-line depreciation and declining balance depreciation either numerically or from a given graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered.
- `ci4d802367`: Use a spreadsheet to model depreciation using the straight-line and declining balance methods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2. Standard 2 compares numerically and graphically, with and without digital tools; Standard 1 compares numerically or from a given graph. Both use the spreadsheet.

**Entry knowledge:** math-s12-i09 (straight-line, S = V_0 − Dn). math-s12-i10 (declining balance, S = V_0(1 − r)^n). math-s12-i05 (a spreadsheet with two model columns and a line chart; the year-1 check). math-s12-a04b (spreadsheet basics).

**Prior video:** math-s12-i10.

**Start:** Two methods, one asset. Which writes off more value early, which later, and where do their graphs cross?

**Stop:** Compare the two methods for the same asset numerically (values after n years; the difference; which is higher) and graphically (a straight line against a curve that falls fast then flattens); interpret the crossing point (before it, declining balance has written off more; after it, straight-line has, and straight-line reaches zero while declining balance never does in the model); explain the cause: straight-line removes the same dollars, declining balance removes a percentage of a shrinking value, so its early losses are large and its later losses small; the comparison depends on the chosen D and r (another pair need not cross in the period that matters); build both in a spreadsheet (year in column A filled down, =40000-6000*A2 and =40000*0.8^A2 filled down, a line chart of both), and read a given graph. The loans section (buy now pay later, short and long-term loans) starts at math-s12-i12, written by another author.

**Next:** math-s12-i12.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `ec39ed540dbf06830d2fc9f00f56459edd17426cb88ac8acb5f849bb23ca9131`. The page's `data-lesson-dotpoints` names the Standard 2 spreadsheet point. Sections: `work-four-depreciation-examples` (`we-3`), `drill-and-revisit-depreciation` (the spreadsheet card, drill 5), `practise-depreciation` (SA 3).

### Source lesson03, `we-3`

PROBLEM 3 · COMPARING BOTH METHODS. "Office furniture is purchased for $\$16,000$. Method A: straight-line depreciation of $\$1,800$ per year. Method B: declining balance at 14% per annum. (a) Find the value under each method after 5 years. (b) Which method gives a higher salvage value after 5 years, and by how much?" $S_A = \$7{,}000.00$; $S_B = 16\,000 \times (0.86)^5 \approx \$7{,}526.83$; "Method B gives a higher salvage value by $\$526.83$." "Declining balance depreciated this asset more slowly over 5 years. A higher modelled book value does not necessarily mean a higher resale price."

### Source lesson03, spreadsheet card ("Modelling both methods in a spreadsheet")

"Take an asset worth $\$40\,000$, depreciated by $\$6000$ per year on the straight line, or by $20\%$ per year on the declining balance." Cells: "A2 | the year number, $0$ | yes, =A2+1"; "B2 | straight line, =40000-6000*A2"; "C2 | declining balance, =40000*0.8^A2". Values for years 1 to 5: straight line $34 000, $28 000, $22 000, $16 000, $10 000; declining balance $32 000, $25 600, $20 480, $16 384, $13 107.20. "Declining balance is below the straight line for the first three years and above it from year $4$ on. In this example it writes value off faster early and slower late. Different chosen rates can produce different comparisons".

### Source lesson03, drill 5 and SA 3

"An asset was bought for $\$24,000$. Under straight-line depreciation it loses $\$2,200$ per year. Under declining balance it depreciates at 10% per annum. Compare the salvage value after 4 years." $15 200 against $15 746.40; declining balance higher by $546.40.

## 3. Recalculation

- `we-3`: $7000.00; 16 000 × 0.86^5 = $7526.83; $526.83.
- Spreadsheet card: every value matches (34 000 / 32 000; 28 000 / 25 600; 22 000 / 20 480; 16 000 / 16 384; 10 000 / 13 107.20); the columns change order between years 3 and 4.
- Drill 5 / SA 3: $15 200.00 and $15 746.40, $546.40.
- Original Question 1: $18 000 machine, $2700 a year against 20%: years 1 to 5: 15 300 / 14 400; 12 600 / 11 520; 9900 / 9216; 7200 / 7372.80; 4500 / 5898.24; declining-balance losses $3600, $2880, $2304, $1843.20.
- Original Question 2: $48 000 van, $5000 a year against 14%: year 5 $23 000 / $22 580.50; year 6 $18 000 / $19 419.23; year 8 $8000 / $14 362.46.
- Yearly losses on the site's $40 000 example at 20%: $8000, $6400, $5120, $4096, $3276.80.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- "Declining balance always loses value faster" (only early, and only for some choices of D and r; `we-3` and drill 5 show it ending higher).
- Reading the crossing point as the year when "both lose the same amount" (it is the year their values are equal).
- Writing the spreadsheet declining-balance formula as =40000*0.2^A2 or =40000-0.2*A2.
- Letting the straight-line column go negative instead of stopping at zero.
- Reading a higher modelled value as a higher sale price (the site's own caution).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The site's spreadsheet built live: typed headers, the A2 to C2 formulas in the formula bar, fill down to year 5, the cells where declining balance is lower shaded in one colour and higher in another, the change between years 3 and 4 ringed.
- A line chart drawn from the two columns: a straight line and a decay curve crossing between years 3 and 4; a bracket on each side ("declining balance has written off more" / "straight-line has written off more").
- A yearly-loss strip under the graph: straight-line $6000 every year; declining balance $8000, $6400, $5120, $4096, $3276.80 (the cause of the crossing).
- `we-3` and drill 5 as "what if the numbers change?" cards: declining balance ends higher here.
- A "given graph" reading for Standard 1: two unlabelled graphs, label them, read the values at year 5 and the difference.

Advanced reuse (visual parts only): **SpreadsheetGrid** (new; from the a-strand list, also used by i05); `StudioPlot` with a line and a decay curve; `crossingX` (a11-graph-parts.tsx) for the crossing; `GrowthBars` for the yearly-loss strip; `RegionLabels` (a11-graph-parts.tsx) for the two brackets. Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A café buys an espresso machine for $18 000. A spreadsheet compares straight-line depreciation of $2700 per year with declining-balance depreciation at 20% p.a.

| Year | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Straight-line | 18 000 | 15 300 | 12 600 | 9900 | 7200 |
| Declining balance | 18 000 | 14 400 | 11 520 | 9216 | ? |

(a) Find the missing value. (b) Write the spreadsheet formula for the declining-balance value in cell C2, if the year is in cell A2. (c) In which year does the declining-balance value first become higher than the straight-line value? (d) Explain why.

**Worked answer:** (a) 18 000 × 0.8^4 = $7372.80. (b) =18000*0.8^A2. (c) Year 4 ($7372.80 > $7200). (d) Straight-line loses $2700 every year; declining balance loses 20% of a shrinking value ($3600, $2880, $2304, $1843.20), so its yearly losses fall below $2700 and its value overtakes.

### Question 2

The graph shows the value of a delivery van over 8 years under two depreciation methods: a straight line from $48 000 to $8000, and a curve from $48 000 that falls steeply at first (declining balance at 14% p.a.; the graph is drawn from these values). (a) Which graph shows declining-balance depreciation? Give a reason. (b) Find the straight-line depreciation per year. (c) The graphs cross between years 5 and 6. What does the crossing point mean? (d) Which method gives the higher value after 8 years?

**Worked answer:** (a) The curve: the value falls by a percentage of the current value, so the drops get smaller. (b) (48 000 − 8000) ÷ 8 = $5000 per year. (c) At that time both methods give the van the same value; before it, declining balance gives the lower value, after it the higher. (d) Declining balance: 48 000 × 0.86^8 = $14 362.46, against $8000.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "=18000*0.2^A2", crossed, "keep 80%: 1 − 0.2 = 0.8"). Answers were checked with SymPy (Question 2: at 14% the values are $22 580.50 against $23 000 after 5 years and $19 419.23 against $18 000 after 6, so the crossing is between years 5 and 6).

## 7. Everyday anchors

- **A café's espresso machine:** $18 000 compared under both methods (small business; carries Question 1 and the spreadsheet).
- **The site's $40 000 asset as a small business's delivery van or a food truck fit-out:** $6000 a year against 20% a year (site spreadsheet card) (work; carries the teaching example). Check the food-truck plate use against a04 and a11's packs first; a delivery van plate `maths/ma12-delivery-van-v1.png` exists (a box truck; appearance check needed).
- **Fitting out a hair salon:** the site's office furniture ($16 000; $1800 a year against 14%; `we-3`) moved to salon chairs and mirrors (small business; carries "declining balance can end higher").

Varied small-business contexts, matching the methods' real use (businesses choose a method at tax time). None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "espresso", "salon" no hits) or the Standard a-strand packs (a04's car-detailing van is a different idea). Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** prices are realistic NSW 2026 examples, not quotes. The ATO lets a business choose prime cost (straight-line) or diminishing value for many assets ([ATO, prime cost and diminishing value methods](https://ato.gov.au/Business/Depreciation-and-capital-expenses-and-allowances/General-depreciation-rules---capital-allowances/Prime-cost-(straight-line)-and-diminishing-value-methods)); one sentence can say so. Say once that rules and prices change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5: MS-18 moves the orphan "In this example declining balance falls faster initially" sentence to this card, where it belongs.

Decisions for Claude:

- **Keep the site's spreadsheet exactly** (the same SpreadsheetGrid look as i05, so the course has one spreadsheet style).
- **Explain the crossing by its cause** (the yearly-loss strip), not only by reading the table.
- **Final frame for i12:** the strand moves from what things are worth to borrowing money. Hand over with a neutral frame (for example, a price tag with "buy now, pay later?" and "Next: the real cost of borrowing"), and agree the exact picture with the i12 author before either design is final (ruling 17: a new `ms12-` plate is painted one video early).
- Pace: not at risk; fits 7 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
