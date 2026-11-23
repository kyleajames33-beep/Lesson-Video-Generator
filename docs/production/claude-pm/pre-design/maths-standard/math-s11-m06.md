# math-s11-m06: What does a car cost to run each year, and how does a spreadsheet track it?

Maths Standard pre-design pack (Year 11, Managing money), 23 November 2026, written by Claude (designer of record) in the form of the e and f packs, from route inputs 10 (`../../../programme/maths-standard-route-inputs-10.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Managing money, group "Budgeting", outcome MST-11-04:

- `ci9d6326d6`: Examine the ongoing costs of a vehicle [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431). Site coverage: covered (lesson05).
- `ci61920f78`: Use a spreadsheet to model the costs of purchasing, running and maintaining a vehicle. Site coverage: covered (lesson05).

**Entry knowledge:** math-s11-m05 (the hatchback's drive-away cost $16,645; registration, green slip, comprehensive insurance); math-s11-e06 and e12 (a spreadsheet: inputs in cells, formulas, SUM, fill-down, "rates in their own cells"); math-s11-f08 (a formula applied in a sheet).

**Prior video:** math-s11-m05. **Start:** m05's final frame (the hatchback stamped "drive-away $16 645"; grey chips "fuel", "rego", "insurance", "service"; chips "every year after?", "Next: running costs", "?").

**Stop:** the yearly costs of a car (fuel from L/100 km, registration and green slip renewal, insurance, servicing and tyres as maintenance); cost per kilometre and per week; a spreadsheet model with inputs in their own cells and totals as formulas; what-if changes (more kilometres: a bigger total, a smaller cost per km); purchase plus five years of running; comparing two cars over five years. Depreciation (the car's falling value) named only. Not: depreciation calculations (Year 12).

**Next:** math-s11-m07: final frame is the electricity meter.

## 2. Site order, sections and worked examples

`year11/managing-money/lesson05.sa.html` (site L13): card 3 (15,000 km, 8 L/100 km, $2.00 a litre: 1,200 L, $2,400 fuel; servicing $700, tyres $400, rego $380, insurance $620: $4,500, 30c/km; only fuel changes with distance); card 4 (the ten-row sheet: =B1*B2/100*B3, =SUM(B4:B8), =B9/B1; "every input in its own cell; every total a formula"; the =SUM(B4:B9) double count); WE3, WE4 (two cars over five years: $31,500 against $31,000 at $2.00); SAQ 2 (Mia), SAQ 3 (Sam's sheet, the typed 4500).

All values recalculated: no arithmetic error. Site issue (MSY-06): the running costs list renews registration but not the CTP green slip, which is also paid every year with registration; and $2.00 a litre is below the current price (ruling 47 uses about $2.25). The design reprices at $2.25 and includes the green slip.

## 3. Recalculation (values for the design; petrol $2.25 a litre, ruling 47)

| Item | Working | Result |
| --- | --- | --- |
| Fuel, 12,000 km at 6.5 L/100 km | 12 000 × 6.5 ÷ 100 = 780 L; × 2.25 | $1,755 |
| Yearly cost | 1755 + 385 + 780 + 1640 + 548 + 300 | $5,408 |
| Per km; per week | 5408 ÷ 12 000; 5408 ÷ 52 | 45.1c; $104 |
| 18,000 km | 1170 L, $2,632.50; total $6,285.50 | 34.9c per km |
| Buy plus 5 years | 16 645 + 5 × 5408 | $43,685 (72.8c per km over 60,000 km) |
| Slip | =SUM(B4:B10) | $10,816 (the total counted twice) |

## 4. Misconceptions and HSC-style traps

- Using 6.5 L/100 km as 6.5 L per km (forgetting ÷ 100).
- Dividing distance by cost (km per dollar).
- Typing a total instead of a formula, so it goes stale.
- Including the total cell in its own SUM.
- Judging a car by price alone, ignoring fuel over the years.

## 5. Visual needs

The hatchback with a coded fuel gauge strip; a fuel tank filling in litres; the year's costs as a stacked bar that becomes the sheet; `SpreadsheetGrid` with inputs (blue) and formulas (teal); a slider on the distance cell (B1) with the cost-per-km readout falling; two cars' five-year bars.

## 6. Two original candidate practice questions

**Question 1.** Mia drives 20 000 km a year in a car that uses 7.5 L/100 km. Petrol costs $2.25 a litre. Her other yearly costs are servicing $820, tyres $500, registration $380 and insurance $950. (a) Find her yearly fuel cost. (b) Find her total yearly running cost and the cost per kilometre, in cents, to one decimal place.
Worked answer: (a) 20 000 × 7.5 ÷ 100 = 1500 L; 1500 × 2.25 = $3375. (b) 3375 + 2650 = $6025; 6025 ÷ 20 000 = $0.30125 ≈ 30.1c. Slip: "20 000 ÷ 6025 = 3.3" (km per dollar).

**Question 2.** Car A costs $18 000 and uses 9 L/100 km. Car B costs $22 000 and uses 6 L/100 km. Each is driven 15 000 km a year, with petrol at $2.25 a litre. (a) Find the cost of buying and fuelling each car for 5 years. (b) Which is cheaper over 5 years, and by how much?
Worked answer: (a) A: 1350 L × 2.25 = $3037.50 a year; 18 000 + 5 × 3037.50 = $33 187.50. B: 900 L × 2.25 = $2025; 22 000 + 10 125 = $32 125. (b) B, by $1062.50. Slip: "A, because it's $4000 cheaper to buy".

## 7. Everyday anchors

The strand's red hatchback; the two-car choice; Mia's long commute. No people.

## 8. Site corrections and decisions for Claude

- Reprice fuel at about $2.25 a litre (ruling 47) and add the green slip renewal (MSY-06).
- Servicing $548 and tyres $300 a year (an averaged set) are examples; the total $5,408 makes $104 a week exactly, which m08's budget reuses.
- The spreadsheet models purchase plus running (the syllabus's "purchasing, running and maintaining").
- Pace: about 8.5 minutes.
