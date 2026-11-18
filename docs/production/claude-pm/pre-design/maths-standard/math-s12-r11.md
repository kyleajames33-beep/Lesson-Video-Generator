# math-s12-r11: Which pack is the best buy?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Rates):

- `cibecf9f22`: Compare unit prices to determine best buys [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.

Standard 1 (Year 12, Ratios and rates, Rates):

- `cie8590152`: Compare unit prices to determine best buys [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical wording.

**Entry knowledge:** math-s12-r09: `ci26fe7fac` (a unit rate). math-s12-r10: `cib0e451ed` (converting a rate's units: per kg to per 100 g, per L to per 100 mL).

**Prior video:** math-s12-r10.

**Start:** The site's hook on r10's final frame: flour, 2 kg for $3.80 and 5 kg for $8.75. "Which is better value?" The dearer bag is the cheaper flour.

**Stop:** Unit price = price ÷ quantity, in a common unit (per kg, per 100 g, per L, per 100 mL, per GB); the lowest unit price is the best value; convert sizes to the same unit before dividing (1.25 L and 750 mL); choose a convenient unit (per 100 mL avoids tiny decimals); read the unit price already printed on a supermarket shelf label; when the best value is not the best buy (more than you can use before it spoils, money you do not have today, a plan bigger than your need). Fuel cost is r13.

**Next:** math-s12-r12.

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `05ae0325c7136abaf31da18d8639832e80554887247876ba02712b10dfa64381`. Sections used: `orient-and-prepare` (hook, card 01), `build-foundation` (card 05), `work-examples` (`we-1`), `avoid-common-errors` (Trap 03), `guided-drill` (quick-fire 3), `independent-practice` (SA 5), `retrieve-and-finish` (revisit).

### Source lesson01, hook and revisit

"Supermarket A sells 2 kg of flour for $\$3.80$. Supermarket B sells 5 kg for $\$8.75$. Which is better value? How would you decide?" Revisit: "Supermarket A: $\$3.80$ ÷ 2 = $\$1.90$/kg; Supermarket B: $\$8.75$ ÷ 5 = $\$1.75$/kg. Supermarket B is cheaper per kilogram despite having the higher total price."

### Source lesson01, card 05 and `we-1`

"For best-value comparisons, find the cost per gram or per unit, then the cheapest rate wins." `we-1`, PROBLEM 1 · BEST VALUE, UNITARY METHOD: "Store A sells orange juice: 1.25 L for $\$2.80$. Store B sells 2 L for $\$4.20$." "$\$2.80 \div 1.25 = \$2.24 \text{ per litre}$"; "$\$4.20 \div 2 = \$2.10 \text{ per litre}$"; "Store B is better value".

### Source lesson01, Trap 03, quick-fire 3 and SA 5

Trap 03: "A larger pack is not automatically cheaper per unit. Always divide price by quantity to get the rate per gram, litre, or unit before comparing." Quick-fire 3: "Pack A: 400 g of coffee for $\$7.60$. Pack B: 600 g for $\$11.10$." (A $0.019/g, B $0.0185/g: B). SA 5: "375 mL for $\$6.45$, 750 mL for $\$11.40$, and 1.5 L for $\$24.00$. (a) Find the cost per 100 mL for each size. (b) State which size offers the best value." ($1.72, $1.52, $1.60; 750 mL). SA 5 is a good example of the largest pack not being the best value.

## 3. Recalculation

- Hook: $1.90 and $1.75 per kg. `we-1`: $2.24 and $2.10 per L. Quick-fire 3: $0.019 and $0.0185 per g ($1.90 and $1.85 per 100 g). SA 5: $1.72, $1.52, $1.60 per 100 mL.
- Question 1: rice $2.60, $2.30, $2.40 per kg. Question 2: $0.857 and $0.75 per GB.
- Drinks anchor: a 6 × 600 mL pack at $9.60 is $2.67 per L; a single 600 mL at $3.50 is $5.83 per L.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Choosing the lower price tag, or assuming the biggest pack is always cheapest per unit (SA 5's 1.5 L is not).
- Dividing quantity by price (grams per dollar) and then picking the smaller number.
- Comparing per litre with per 100 mL.
- Rounding unit prices to the cent too early when they differ by less than a cent per gram (quick-fire 3); use per 100 g instead.
- Calling the best value the best buy without considering use-by dates or need.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A coded supermarket shelf with two or three products and their price tags; each tag flips to show a unit price strip ("$1.90 per kg", "$1.75 per kg") in the shelf-label style; the lowest unit price rings green.
- The same quantity in each pack: each bag is cut into 1 kg blocks with a price on each block (the unit price made visible).
- A "same unit first" step: 1.25 L and 2 L, or 375 mL, 750 mL and 1.5 L, turned into 100 mL blocks.
- "Best value is not always the best buy": a 10 kg rice bag beside a calendar with a use-by date, or a 60 GB plan beside a 20 GB usage meter.

Advanced reuse (visual parts only): `PlateFields` for price and unit-price tags; `GrowthBars` for the blocks; `ma12-cereal-box-v1.png` exists (appearance not checked) as a pack object; `WorkingBoard`. Kit needs: a ShelfLabel card (product, price, unit price line) that can flip, course-neutral (Year 11 Standard money videos can reuse it).

## 6. Two original candidate practice questions

### Question 1

Rice is sold in three sizes: 1 kg for $2.60, 5 kg for $11.50 and 10 kg for $24.00. (a) Find the unit price of each size in dollars per kilogram. (b) Which size is the best value? (c) A student living alone eats about 1 kg of rice a month. Give one reason the best-value size might not be the best buy for them.

**Worked answer:** (a) $2.60, $2.30 and $2.40 per kg. (b) The 5 kg bag. (c) Any one: it takes five months to use and may go stale or attract pests; it ties up more money now; there may be no room to store it.

### Question 2

A prepaid phone provider offers $30 for 35 GB of data or $45 for 60 GB, each lasting 28 days. (a) Find the cost per GB of each recharge. (b) Which recharge is better value per GB? (c) Mia uses about 20 GB every 28 days. Which recharge should she buy? Explain.

**Worked answer:** (a) $30 ÷ 35 ≈ $0.86 per GB; $45 ÷ 60 = $0.75 per GB. (b) The $45 recharge. (c) The $30 recharge: it covers her 20 GB and costs $15 less; the extra data in the $45 recharge would go unused.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "10 kg, the biggest bag", crossed, "$2.40 per kg is more than $2.30"). Answers were checked with SymPy. Prices are realistic NSW 2026 examples, labelled as examples.

## 7. Everyday anchors

- **Supermarket shelf labels:** large grocery retailers must show a unit price on the shelf label (the Unit Pricing Code, administered by the ACCC; Codex re-verifies the current code, its date and which retailers it covers before any claim is narrated) (shopping; the maths students can check on their next shop).
- **Prepaid phone recharges:** cost per GB, and why the cheaper per GB plan is not always the better buy (phones).
- **Sports drinks:** a 6-pack of 600 mL bottles at $9.60 ($2.67 per L) against a single bottle at $3.50 ($5.83 per L) from a servo fridge (sport and convenience; buying ahead against buying on the day).

Varied everyday contexts (groceries, phones, sport). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "shelf label", "per GB", "recharge" and "sports drink" no hits; "unit price" appears in Advanced f03 as "$650,000 unit price" for an apartment, a different meaning). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in the parts used here.

Decisions for Claude:

- **Best value against best buy:** the syllabus says "best buys"; one short scene on need and waste keeps the decision honest without lecturing.
- **Shelf labels:** a coded, unbranded label; no real supermarket name or logo.
- **Final frame:** a road-trip receipt card "Sydney to Melbourne, 880 km" (r12's opening, the site's SA 4).
- Pace: not at risk; fits 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
