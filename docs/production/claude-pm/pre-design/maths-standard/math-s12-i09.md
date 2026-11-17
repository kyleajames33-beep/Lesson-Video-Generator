# math-s12-i09: How does straight-line depreciation work?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `cid762df37` (Depreciation and loans): Apply the straight-line depreciation method to calculate the depreciation of an asset using the formula S = V_0 - Dn where S = salvage value, V_0 = initial value of the asset, D = depreciation amount per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered. MathML in `sourceHtml` (V with subscript 0).

Standard 1 (Year 12, Depreciation and loans):

- `ci34b68cb8`: Apply the straight-line depreciation method to calculate the depreciation of an asset using the formula S = V_0 - Dn where S = salvage value, V_0 = initial value of the asset, D = depreciation amount per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Same wording. MathML in `sourceHtml`.

In the Standard 2 syllabus these sit in the Investment and loans focus area; in Standard 1 they are in Depreciation and loans. These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical content. This video teaches depreciation fully; a06 only previewed it in one sentence (root ruling 12, Standard 2 only), so assume no prior depreciation.

**Entry knowledge:** math-s12-i01 (simple interest: the same amount each period, a straight line from the starting value). math-s11-l03: `cib2d6c0df` (a linear model; a negative gradient means a steady fall). math-s11-f02: `ci2acef85d` (solving a linear equation) for finding D and n. Year 11 car costs (math-s11-m05, m06) mention that cars lose value.

**Prior video:** math-s12-i08.

**Start:** Investments grow. Most things a worker or a business buys do the opposite: tools, gear and vehicles lose value as they are used and as newer models arrive.

**Stop:** Depreciation as the fall in an asset's value over time (wear, age, newer models); straight-line depreciation removes the same dollar amount D every period, so S = V_0 − Dn (syllabus letters: S salvage value, V_0 initial value, D amount per period, n number of periods); total depreciation = V_0 − S = Dn; find S after n years; find D from the start and end values, D = (V_0 − S) ÷ n; find when the value first falls below a level, solving V_0 − Dn < level and rounding up to whole years, with a check on both sides (site `we-1`); the graph of S against n is a straight line falling from V_0 with gradient −D, the mirror of i01's simple interest line; the model stops at zero (an asset cannot be worth less than nothing), and S is a modelled value, not a guaranteed sale price. Declining balance is i10; comparing the methods and the spreadsheet is i11.

**Next:** math-s12-i10.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `ec39ed540dbf06830d2fc9f00f56459edd17426cb88ac8acb5f849bb23ca9131`. Title: Depreciation | Declining Balance Method (teaches both methods). Lesson id maths-std-y11-m3-l13 (stale; it serves the Year 12 points). Sections: `orient-to-depreciation`, `straight-line-depreciation`, `work-four-depreciation-examples` (`we-1`), `avoid-the-depreciation-traps`, `drill-and-revisit-depreciation` (drills 1, 3, 4).

### Source lesson03, hook and recall

"The moment you drive a new car off the lot, it loses roughly 10–15% of its value." Recall: "A new car is purchased for $\$30,000$. After one year it might be worth only $\$24,000$, a loss of $\$6,000$ in year one. Does it lose another $\$6,000$ in year two, or something different?" (The 10 to 15% claim is the site's; it has no source. Use it only as a question.)

### Source lesson03, key formulas and terms

"Straight-line: $S = V_0 - Dn$ loses the same dollar amount $D$ each year, linear, like simple interest in reverse." "Fixed $\$$ → straight-line: "Depreciates by $\$2,400$ per year", a dollar figure signals straight-line." "Total depreciation = $V_0 - S$ for both methods". Salvage value: "The modelled book value at the time being considered. Salvage or residual value usually means the estimated value at the end of an asset's useful life; it need not equal market price."

### Source lesson03, card `straight-line-depreciation`

"For example, a machine worth $\$24,000$ that depreciates by $\$3,000$ per year will be worth $\$24{,}000$ − ($\$3{,}000$ × 5) = $\$9{,}000$ after 5 years. An asset depreciated to zero is "fully depreciated." If the initial value, final salvage value, and time are all known, calculate $D = (V_0 - S_n) \div n$." (This card also holds the "Common error" box and orphan sentence logged as MS-17 and MS-18.)

### Source lesson03, `we-1`

PROBLEM 1 · STRAIGHT-LINE, VALUE AND INEQUALITY. "A piece of industrial equipment was purchased for $\$85,000$. It depreciates by $\$7,400$ per year using the straight-line method. (a) What is its value after 6 years? (b) After how many complete years will its value first fall below $30,000?" (a) $40 600. (b) $85 000 − $7400n < $30 000, n > 7.43..., checks: $33 200 after 7 years, $25 800 after 8 years, so 8 complete years.

### Source lesson03, drills and SA 1

Drill 1 / SA 1: "A printer costing $\$6,200$ depreciates by $\$540$ per year using straight-line depreciation. Find its value after 5 years" ($3500). Drill 3: "$\$50,000$ ... salvage value of $\$18,000$ after 8 years" (D = $4000). Drill 4: "$\$2,800$ ... $\$420$ per year ... after 4 years" ($1120). Trap 01: "Depreciates by $3,000 per year" → straight-line.

## 3. Recalculation

- Card: 24 000 − 3000 × 5 = $9000.00. `we-1`: $40 600.00; 55 000 ÷ 7400 = 7.4324; $33 200.00 and $25 800.00, so 8 complete years.
- Drills: $3500.00; D = $4000.00; $1120.00.
- Original Question 1: 14 500 − 1850 × 4 = $7100.00; (14 500 − 5000) ÷ 1850 = 5.1351, $5250.00 after 5 years and $3400.00 after 6. Question 2: D = (2400 − 600) ÷ 3 = $600.00; $1200.00 after 2 years.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Adding Dn (V_0 + Dn) out of habit from simple interest.
- Rounding 7.43 down to 7 years when the question asks when the value first falls below a level.
- Using a percentage of the current value each year (that is declining balance, i10; MS-17 shows the site's own box confusing this).
- Continuing the line below zero.
- Confusing "depreciation" (the amount lost) with "salvage value" (what is left).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A painted asset (a tool kit, a machine) with a coded value tag that drops by the same amount each year; equal "chunks" fall off a value bar, one per year.
- The table of years and values beside the graph: equal steps down, joined into a straight line from V_0 with gradient −D; a ghost of i01's rising simple interest line, mirrored, as a callback.
- S = V_0 − Dn with each letter tagged on the anchor; "total depreciation = Dn = V_0 − S" as a bracket on the bar.
- The "first falls below" level as a horizontal line on the graph; the crossing at n ≈ 7.43 between grid lines; a two-sided check strip (7 years above, 8 years below).
- Finding D: the start and end values with an equal-steps bracket split into n pieces.

Advanced reuse (visual parts only): `StudioPlot` with a falling line; `StudioLevelLine` (trig-parts.tsx) for the "below $30 000" level and its crossing; `IntervalPicture` (extras.tsx) for the round-up strip (as in a13); `LoanBalanceBar` (finance-parts.tsx) may show a bar losing equal bites, if its loan-mode bite works without interest; `PlateFields` for the value tag. Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A carpet-cleaning business buys a cleaning machine for $14 500. It depreciates by $1850 per year using the straight-line method. (a) Find its value after 4 years. (b) After how many complete years does its value first fall below $5000?

**Worked answer:** (a) S = 14 500 − 1850 × 4 = $7100. (b) 14 500 − 1850n < 5000, 1850n > 9500, n > 5.14. After 5 years: $5250 (not yet below); after 6 years: $3400. So 6 complete years.

### Question 2

A commercial sewing machine for a small alterations business costs $2400. Using straight-line depreciation, it will have a salvage value of $600 after 3 years. (a) Find the depreciation per year. (b) Find its value after 2 years. (c) Sketch the graph of its value over the 3 years, labelling the intercept and the gradient.

**Worked answer:** (a) D = (2400 − 600) ÷ 3 = $600 per year. (b) 2400 − 600 × 2 = $1200. (c) A straight line from (0, 2400) to (3, 600); vertical intercept $2400 (the purchase price), gradient −600 (the value falls $600 a year).

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "5 years", crossed, "after 5 years it is still $5250; round up"). Answers were checked with SymPy.

## 7. Everyday anchors

- **An apprentice's tool kit:** $6200 of tools losing $540 a year (the site's printer numbers, drill 1: $3500 after 5 years) (work; tools are a real tax-deductible asset for tradies, and an apprentice buys them).
- **A landscaping business's mini excavator:** $85 000 losing $7400 a year (site `we-1`), with "when does it first fall below $30 000?" (small business; a common machine for a landscaper; carries the inequality).
- **A band's PA system:** $2800 losing $420 a year (site drill 4: $1120 after 4 years) (music gear). If i01 uses the PA system for its loan, use a drum kit or a DJ controller here instead, or link them deliberately.

Varied everyday contexts (a trade, a small business, music). None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "apprentic", "tool kit", "excavator" no hits; "landscape" hits in the f-designs are page-orientation words, not anchors) or the Standard a-strand packs (a13's mowers are a different idea; the cleaning machine in Question 1 avoids them). Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** prices are realistic NSW 2026 estimates, labelled as examples, not quotes. The ATO's straight-line method is called "prime cost" (cost ÷ effective life each year; [ATO, prime cost and diminishing value methods](https://ato.gov.au/Business/Depreciation-and-capital-expenses-and-allowances/General-depreciation-rules---capital-allowances/Prime-cost-(straight-line)-and-diminishing-value-methods)); one sentence can say businesses really use it at tax time. Say once that rules and prices change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5: MS-17 (the "Common error" box states a correct fact) and MS-18 (an orphan comparison sentence), both on this video's card; the stale title and "Year 11 review" label (structure note).

Decisions for Claude:

- **Teach depreciation from the start** (ruling 12); open on the hook's question (same dollars or same percentage?) but answer only the "same dollars" half here, leaving "same percentage" as i10's opening.
- **Callback to i01:** the straight line falling is simple interest in reverse; use the same graph style, a mirrored line.
- **Rounding up** to whole years is the HSC-style twist; give it a two-sided check, as `we-1` does.
- Pace: not at risk; fits 7 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
