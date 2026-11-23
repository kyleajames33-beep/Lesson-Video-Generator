# math-s11-m07: How do we read and check electricity, water and gas bills?

Maths Standard pre-design pack (Year 11, Managing money), 23 November 2026, written by Claude (designer of record) in the form of the e and f packs, from route inputs 10 (`../../../programme/maths-standard-route-inputs-10.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Managing money, group "Budgeting", outcome MST-11-04:

- `ci345de108`: Calculate household costs including electricity, water and gas usage from household bills [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431). Site coverage: covered (lesson01, card 3; WE3; SAQ 3).

**Entry knowledge:** math-s11-m06 (a yearly cost shared per unit: cost ÷ distance; per week); math-s11-e03 (a sliding scale: different rates for different bands, for the gas blocks); math-s11-m02 (displayed prices include GST).

**Prior video:** math-s11-m06. **Start:** m06's final frame (the electricity meter `ms11-electricity-meter-v1.png` with a coded display "19264 kWh"; chips "the house costs money too", "Next: household bills", "?").

**Stop:** usage from two meter readings; a kilowatt-hour (what it measures, what an appliance uses); a bill = days × daily supply charge + units used × rate; water in kilolitres (1 kL = 1000 L) with a service charge, and that NSW tenants usually pay only the usage part; gas in megajoules with two price blocks; checking a bill by its cost per day against the same season last year. Not: budgets (m08); unit conversions beyond kL = 1000 L (a01, later); tariffs beyond one usage rate for electricity.

**Next:** math-s11-m08: final frame is the phone with a blank budget screen "My week" and the house's bills card "$761.21 a quarter".

## 2. Site order, sections and worked examples

`year11/managing-money/lesson01.sa.html` (site L9): card 3 (electricity: supply charge per day + usage per kWh; water: service charge + usage per kL, sometimes tiered; council rates; insurance; tiers like a sliding scale; "check units: kWh vs MJ, litres vs kilolitres"; "don't forget the supply charge"); WE3 (supply $1.04 × 90 days, 500 kWh at 28.6c then 220 at 34.2c: $311.84 before GST, $343.02 with GST); SAQ 3 ($0.98 × 91 + 540 × 31.5c = $259.28; $285.21 with GST).

All values recalculated: no arithmetic error. Site issues (MSY-07): the site adds GST to electricity bills as a separate step, but Australian retail electricity, gas and water prices are quoted including GST where it applies, and Sydney Water usage is GST-free, so "add GST at the end" teaches the wrong habit for real bills; no site example uses meter readings; gas usage in MJ is named but never calculated; "council rates ... calculated as a percentage of land value" is outside this point and simplified.

## 3. Recalculation (values for the design; prices include GST)

| Bill | Working | Result |
| --- | --- | --- |
| Electricity, 91 days | readings 18 452 → 19 264: 812 kWh; 91 × $1.10 = $100.10; 812 × $0.33 = $267.96 | $368.06; $4.04 a day |
| A heater and an air conditioner | 2 kW × 1 h = 2 kWh = 66c; 2.5 kW × 6 h = 15 kWh = $4.95 | |
| Water, quarter | meter 1284 → 1342 kL: 58 kL × $2.70 = $156.60; service $190 | $346.60 (tenant pays $156.60) |
| Gas, 91 days | 1800 MJ × 4.8c = $86.40; 2100 MJ × 3.9c = $81.90; 91 × 75c = $68.25 | $236.55 (slip, all at 4.8c: $255.45) |
| House, one quarter (tenant) | 368.06 + 156.60 + 236.55 | $761.21 |
| Check | last year's same quarter $412.16 over 92 days | $4.48 a day; now $4.04 |

Example rates (labelled): electricity supply $1.10 a day; water $2.70 a kL and a $190 service charge; gas 75c a day, 4.8c then 3.9c a MJ. Electricity usage 33c a kWh (ruling 47, AER default market offer 2026-27, Ausgrid area).

## 4. Misconceptions and HSC-style traps

- Forgetting the daily supply charge.
- Using a meter reading as the usage instead of the difference.
- Charging all the gas at the first block's rate.
- Cents and dollars mixed (33c = $0.33; 4.8c = $0.048).
- Adding GST to prices that already include it.

## 5. Visual needs

The electricity meter (new plate) with its dial display ticking up; a coded bill with three lines (supply, usage, total); a kWh picture (a coded bar of 1 kW for 1 hour); the water meter (new plate) with a kL counter; a gas bill with two blocks filling like a sliding scale; a cost-per-day comparison against last year.

## 6. Two original candidate practice questions

**Question 1.** An electricity bill covers 92 days. The meter read 24 615 kWh at the start and 25 203 kWh at the end. The supply charge is $1.05 a day and usage costs 34c per kWh (prices include GST). Find (a) the electricity used, (b) the total bill.
Worked answer: (a) 25 203 − 24 615 = 588 kWh. (b) 92 × 1.05 = $96.60; 588 × 0.34 = $199.92; total $296.52. Slip: "total = $199.92" (supply charge forgotten).

**Question 2.** A gas bill covers 91 days. The household used 5200 MJ. The first 1800 MJ cost 4.8c per MJ and the rest cost 3.9c per MJ, and there is a supply charge of 75c a day. Find the total bill.
Worked answer: 1800 × 0.048 = $86.40; 3400 × 0.039 = $132.60; 91 × 0.75 = $68.25; total $287.25. Slip: "5200 × 0.048 + 68.25 = $317.85".

## 7. Everyday anchors

A share house's quarter: the meter, an air conditioner on a hot day, showers and the washing machine (water), a gas cooktop and hot water (gas). No people.

## 8. Site corrections and decisions for Claude

- Prices include GST; no separate GST step (MSY-07). Say once that bill prices include GST where it applies.
- Meter readings for usage (the syllabus's "from household bills").
- Two new plates: `ms11-electricity-meter-v1.png` (painted one video early for m06's final frame, ruling 17) and `ms11-water-meter-v1.png`. Gas stays coded (the bill).
- The existing `ma12-air-conditioner-v1.png` shows a yellow-fringed wall wash around its edge; use it only if it passes the builder's paper-background check, otherwise drop it (scene 2 works without it).
- Pace: about 9 minutes.
