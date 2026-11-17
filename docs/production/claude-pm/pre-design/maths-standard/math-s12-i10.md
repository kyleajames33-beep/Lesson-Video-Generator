# math-s12-i10: How does declining-balance depreciation work, and why does it look like compound interest?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `cif830811b` (Depreciation and loans): Apply the declining balance method to calculate the depreciation of an asset using the formula S = V_0(1 - r)^n where S = salvage value, V_0 = initial value of the asset, r = depreciation rate per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered. MathML in `sourceHtml`.

Standard 1 (Year 12, Depreciation and loans):

- `ciffbbac75`: Apply the declining balance method to calculate the depreciation of an asset using the formula S = V_0(1 - r)^n where S = salvage value, V_0 = initial value of the asset, r = depreciation rate per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Same wording. MathML in `sourceHtml`.
- `cid65c76c0`: Explain the similarities and differences between the declining balance formula and the compound interest formula [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: covered (the "Insight" box and Trap 02).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2. `cid65c76c0` is Standard 1 only in wording, but the comparison is the clearest way for both courses to understand the formula, so both see it.

**Entry knowledge:** math-s12-i09 (straight-line depreciation; V_0, S, n; total depreciation = V_0 − S). math-s12-i02 (FV = PV(1 + r)^n). math-s12-a06 (Standard 2: decay as multiplying by 1 − r; the gaming console example) and a05 (both: y = a^(−x) falls towards the axis without reaching it).

**Prior video:** math-s12-i09.

**Start:** i09 took the same dollars off every year. A new car does not lose $6000 a year for ever: it loses a percentage of whatever it is worth now (the site's recall question, answered).

**Stop:** Declining-balance depreciation removes the same percentage r of the current value every period, so each year's value is the last year's × (1 − r) and S = V_0(1 − r)^n; the multiplier is 1 − r (18% gives 0.82; Trap 02: not 1.18); the dollar loss shrinks each year because it is a percentage of a smaller value; total depreciation = V_0 − S, never r × n × V_0 (Trap 03); the graph is a decay curve that falls steeply then flattens and, in the model, never reaches zero; similarities with compound interest (same shape of formula, a starting value times a multiplier to the power n, the same calculator steps, r and n per period) and differences (1 − r against 1 + r; the value falls instead of grows; each period's change shrinks instead of grows; the curve flattens towards zero instead of steepening). Finding r from two values (site `we-4`) is optional (the syllabus asks only to calculate the depreciation; see the pace flag). Comparing with straight-line and the spreadsheet is i11.

**Next:** math-s12-i11.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `ec39ed540dbf06830d2fc9f00f56459edd17426cb88ac8acb5f849bb23ca9131`. Sections: `orient-to-depreciation`, `declining-balance-depreciation`, `work-four-depreciation-examples` (`we-2`, `we-4`), `avoid-the-depreciation-traps`.

### Source lesson03, key formulas

"Declining balance: $S = V_0(1-r)^n$ loses the same percentage each year, exponential decay, like compound interest but shrinking." "Fixed % → declining balance: "Depreciates at 18% of its current value each year" signals declining balance. A percentage alone is not enough: it may instead refer to the original value. ... The multiplier is $(1-r)$, e.g. $1 - 0.18 = 0.82$."

### Source lesson03, card `declining-balance-depreciation`

"Declining balance depreciation reduces the asset's value by a fixed percentage of its current value each period, so the dollar amount of depreciation decreases as the asset becomes worth less." "a vehicle purchased for $\$32,000$ depreciating at 18% per annum after 4 years: $S = \$32{,}000 \times (0.82)^4 = \$32{,}000 \times 0.45212 = \$14{,}468$." "Insight: $S = V_0(1-r)^n$ is structurally identical to $A = P(1+r)^n$. Same calculator process, same care with $r$ and $n$, just subtraction instead of addition inside the bracket." "Model limits: If $V_0 > 0$ and $0 < r < 1$, each multiplier is positive, so $S$ approaches zero but does not reach it after any finite number of years."

### Source lesson03, `we-2`

PROBLEM 2 · DECLINING BALANCE DEPRECIATION. "A car is purchased new for $38,500 and depreciates at 22% per annum declining balance. Calculate: (a) its value after 3 years, and (b) the total depreciation over this period." $(0.78)^3 = 0.474552$; $S = \$18{,}270.25$; $V_0 - S = \$20{,}229.75$.

### Source lesson03, `we-4`

PROBLEM 4 · FINDING THE DEPRECIATION RATE. "A machine was purchased for $\$28,000$ and is worth $\$15,950$ after 4 years under declining balance depreciation." $(1-r)^4 = 0.569642857\ldots$, $1 - r \approx 0.868762$, $r \approx 13.12\%$.

### Source lesson03, traps and drills

Trap 02: "Depreciation shrinks the value, so the multiplier is $(1-r)$. Using $(1+r)$ gives compound interest growth instead." Trap 03: "Never use $r \times n \times V_0$ for declining balance." Drill 2 / SA 2: "A boat was purchased for $64,000 and depreciates at 12% per annum declining balance" ($43 614.21; total $20 385.79). Fill-the-gap: $45 000 at 25% for 2 years.

## 3. Recalculation

- Card: 32 000 × 0.82^4 = $14 467.90 (the site's $14 468 is correct to the dollar; its 0.45212 is rounded).
- `we-2`: $18 270.25 and $20 229.75. `we-4`: 1 − (15 950 ÷ 28 000)^(1/4) = 13.1238%, so 13.12%.
- Drill 2 / SA 2: $43 614.21 and $20 385.79. Fill-the-gap: 45 000 × 0.75^2 = $25 312.50.
- Original: 32 000 × 0.75^3 = $13 500.00 (an ATO-style 25% rate on a car); 1600 × 0.6^2 = $576.00 (a phone at 40%); Question 1 46 000 × 0.8^3 = $23 552.00 and $22 448.00; Question 2 5000 × 1.15^2 = $6612.50 and 5000 × 0.85^2 = $3612.50.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using 1 + r (Trap 02) or r itself (0.18^4) as the multiplier.
- Total depreciation as r × n × V_0 (Trap 03): 22% × 3 × $38 500 = $25 410, not $20 229.75.
- Expecting the value to reach zero after 100 ÷ r years (that is straight-line thinking).
- Taking the percentage of the original value each year (that is straight-line with D = r × V_0; the site's key formulas card warns about this).
- Saying the two formulas are "the same": they share a structure but behave differently.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The car's value tag stepping down year by year with "× 0.82" arrows, and the dollar loss for each year shown as a shrinking chunk (5760, 4723.20, ...), against i09's equal chunks.
- A decay curve on the same axes style as i09's line; it flattens towards the axis and never touches it.
- A formula twin card: FV = PV(1 + r)^n above S = V_0(1 − r)^n, matching parts lit together (starting value, multiplier, power n), then the differences lit in a second colour (+ against −, growth against decay); this is the Standard 1 explain point.
- Two curves from the same start on one graph: 15% growth and 15% decay (Question 2's numbers), mirror-like but not symmetric.
- A source chip for the ATO's 25% car rate, if used.

Advanced reuse (visual parts only): `StudioTermLadder` for the × 0.82 ladder; `GrowthBars` for the shrinking yearly losses; `StudioPlot` with an exponential decay curve and `AxisShadow` (a11-graph-parts.tsx) for "never reaches zero"; `FunctionSimulator` with `EXP_BASE_FAMILY` if a rate slider is wanted. **New, small:** a FormulaTwin card (see the kit needs). Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A landscaper's ute is bought for $46 000. It depreciates at 20% p.a. using the declining-balance method. (a) Find its value after 3 years. (b) Find the total depreciation over the 3 years.

**Worked answer:** (a) S = 46 000 × 0.8^3 = $23 552. (b) 46 000 − 23 552 = $22 448.

### Question 2

$5000 is invested at 15% p.a. compound interest, and a $5000 machine depreciates at 15% p.a. declining balance. (a) Find each value after 2 years. (b) Describe one similarity and one difference between the two formulas.

**Worked answer:** (a) Investment: 5000 × 1.15^2 = $6612.50; machine: 5000 × 0.85^2 = $3612.50. (b) Similarity: both are a starting value times a multiplier to the power n (the same calculator steps). Difference: compound interest multiplies by 1 + r, so the value grows by more each year; declining balance multiplies by 1 − r, so the value falls by less each year.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "0.2 × 3 × 46 000 = $27 600", crossed, "total depreciation is V_0 − S"). Answers were checked with SymPy. (15% is a high investment rate; it is chosen so the two curves separate clearly; say so if used.)

## 7. Everyday anchors

- **A first car losing value:** the site's car (`we-2`: $38 500 new, 22% a year, $18 270.25 after 3 years) or the card's $32 000 at 18%; carries the main example (cars; a first car is the commonest thing students will see lose value). Not a car loan (math-a12-f09's anchor) and not the gaming console (a06).
- **A phone's resale value:** a $1600 phone losing about 40% a year is worth about $576 after 2 years (phones; a quick second example of "fast early, slow later"). Label 40% as an assumed rate.
- **A tradie's ute at tax time:** the ATO's diminishing value method for a car with an 8-year effective life uses 200% ÷ 8 = 25% a year, so a $32 000 vehicle is written down to $13 500 after 3 years (work and a small business; shows the method is real).

Varied everyday contexts (cars, phones, a trade). None repeats an anchor in the Year 12 Advanced finance designs (math-a12-f08 uses a growing town for growth and decay models; f09 a car loan) or the Standard a-strand packs (a06's console resale is avoided). Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** ATO diminishing value formula: base value × (days held ÷ 365) × (200% ÷ effective life); cars generally have an 8-year effective life, so 25% a year ([ATO, prime cost and diminishing value methods](https://ato.gov.au/Business/Depreciation-and-capital-expenses-and-allowances/General-depreciation-rules---capital-allowances/Prime-cost-(straight-line)-and-diminishing-value-methods); effective life from the ATO depreciating assets guide). The site's 18% and 22% are plausible market-value rates; label them as examples. Say once that rates and rules change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5. No numerical error in the declining-balance parts of lesson03.

Decisions for Claude:

- **Give the compound-interest comparison its own scene** (Standard 1 point `cid65c76c0`; useful for both). Explain the cause: the change each year is r times the current value, so it grows when the value grows and shrinks when it shrinks.
- **"Never reaches zero"** is a model statement; say plainly that real assets can be scrapped or sold for little (the site's "Model limits" and a07's limitation idea).
- **Pace flag:** with `we-4` (finding r with a fourth root) the video runs long and adds a skill the syllabus point does not ask for here. Leave `we-4` out, or use it as an optional practice question (Standard 2) with the i02b method (if that split happens).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
