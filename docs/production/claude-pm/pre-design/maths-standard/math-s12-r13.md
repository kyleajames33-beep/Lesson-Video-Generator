# math-s12-r13: How does fuel consumption compare the efficiency of two vehicles?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Rates):

- `cid3ee9707`: Examine fuel consumption rates to compare the efficiency of vehicles [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.

Standard 1 (Year 12, Ratios and rates, Rates):

- `ci1cf760e0`: Examine fuel consumption rates to compare the efficiency of vehicles [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical wording. **Last Ratios and rates video for Standard 1**: Standard 1 viewers go from here to math-s12-t01.

**Entry knowledge:** math-s12-r09: `ci26fe7fac` (a unit rate); math-s12-r12: `cic3bbd162` (a trip's distance); math-s12-r11: `cibecf9f22` (price per unit, here per litre).

**Prior video:** math-s12-r12.

**Start:** r12's final frame: the Sydney-Melbourne car on its graph with a fuel gauge chip. "How much fuel did that take, and what did it cost?"

**Stop:** Fuel consumption in litres per 100 km (L/100 km): the litres a vehicle uses for every 100 km; a lower number means a more efficient vehicle (the opposite of "bigger is better" rates like pay per hour); fuel used = consumption × distance ÷ 100; cost = litres × price per litre; consumption from a fill-up (litres ÷ km × 100, using the odometer); range on a full tank (tank ÷ consumption × 100); compare two vehicles over the same distance in litres and dollars; say once that the label figure is a test figure and real driving often uses more, and that fuel prices change every week. Two-route final frame: Standard 2 to r14, Standard 1 to t01.

**Next:** math-s12-r14 (Standard 2); math-s12-t01 (Standard 1).

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `05ae0325c7136abaf31da18d8639832e80554887247876ba02712b10dfa64381`. Sections used: `orient-and-prepare` (card 02 fuel box, card 04), `work-examples` (`we-3`), `avoid-common-errors` (fill the gap), `guided-drill` (quick-fire 9, 10), `independent-practice` (SA 6).

### Source lesson01, card 02 and key term

"Fuel consumption: Measured in L/100 km. Litres used = consumption × distance ÷ 100. Lower number = more economical." Key term: "Fuel consumption: The number of litres of fuel used per 100 km travelled; a lower number means a more economical".

### Source lesson01, `we-3`

PROBLEM 3 · FUEL CONSUMPTION. "A car has fuel consumption of 8.5 L/100 km. Petrol costs $\$2.05$ per litre. Find the cost of driving 420 km." "$\text{Fuel} = 8.5 \times \dfrac{420}{100} = 8.5 \times 4.2 = 35.7 \text{ L}$ ... Multiply consumption rate by number of 100 km units." "$\text{Cost} = 35.7 \times 2.05 = \$73.19$".

### Source lesson01, fill the gap, quick-fire 9 and 10, SA 6

Fill the gap: "A car uses 9 L/100 km. For a 350 km trip: litres used = 9 × (350 ÷ ) = L." (100; 31.5). Quick-fire 9: "A car uses 9.2 L/100 km. How much fuel is needed for a 350 km journey?" (32.2 L). Quick-fire 10: "if petrol costs $\$2.15$/L, find the total fuel cost" ($69.23). SA 6: "Riley drives a car with fuel consumption of 7.8 L/100 km. Petrol costs $\$2.10$/L. (a) ... 520 km trip? (b) ... fuel cost ... (c) Riley's tank holds 60 L and starts full. After the trip, how many litres remain? (d) ... how far could Riley travel on a full tank?" (40.56 L; $85.18; 19.44 L; 769 km).

The site never finds a consumption figure from a fill-up and never compares two vehicles side by side, although the syllabus says "compare the efficiency of vehicles". Both are short original additions.

## 3. Recalculation

- `we-3`: 8.5 × 4.2 = 35.7 L; × 2.05 = $73.185, so $73.19. Fill the gap: 9 × 3.5 = 31.5 L. Quick-fire 9 and 10: 32.2 L; $69.23. SA 6: 40.56 L; $85.176, so $85.18; 19.44 L; 60 ÷ 7.8 × 100 = 769.2, so 769 km.
- Question 1: 48 763 − 48 215 = 548 km; 38.4 ÷ 548 × 100 = 7.01 L/100 km; 38.4 × 2.25 = $86.40. Question 2: hatch 6.1 × 150 = 915 L, × $2.25 = $2058.75; ute 9.4 × 150 = 1410 L, × $2.70 = $3807.00; difference $1748.25.
- Road-trip anchor: 780 km return at 7.2 L/100 km = 56.16 L; × $2.25 = $126.36.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Thinking a higher L/100 km is better.
- Multiplying the consumption by the full distance (8.5 × 420) and forgetting the ÷ 100.
- Finding consumption as km ÷ L (that is km per litre, a different rate) and comparing it with an L/100 km figure.
- Using the odometer reading instead of the distance between two readings.
- Comparing two vehicles' costs over different distances.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The r12 trip (TripSim) with a coded fuel gauge falling as the car drives; a "per 100 km" ruler under the road: every 100 km block takes 8.5 L from the tank (the number of 100 km units, 4.2, counted as blocks).
- A fill-up docket (coded, unbranded): litres, price per litre, total; an odometer before and after; the subtraction and the ÷ × 100 written beside it.
- Two vehicles side by side over the same 15 000 km year: two stacks of litres and two cost bars; the lower L/100 km gets the green ring "more efficient".
- A tank-range bar: 60 L divided into 7.8 L chunks, each worth 100 km.

Advanced reuse (visual parts only): `TripSim` (rig.tsx) with its dashboard; `ContainerFill` run downward for the tank; `PlateFields` on a docket; `GrowthBars` or `SignedBar` for the two-vehicle costs. Plates: `maths/ma12-used-hatchback-v1.png` and `ma11-trade-van-v1.png` exist (the hatchback is a callback in a06, a07 and a13; ruling 25 accepted deliberate reuse); a ute plate is suggested in the i-strand list (i10) and could be shared. Kit needs: none essential beyond a fuel-gauge readout on TripSim.

## 6. Two original candidate practice questions

### Question 1

Kai fills his car's tank and the odometer reads 48 215 km. At the next fill-up the odometer reads 48 763 km, and it takes 38.4 L to fill the tank again. Petrol costs $2.25 per litre. (a) How far did Kai drive between fill-ups? (b) Find the car's fuel consumption in L/100 km, correct to one decimal place. (c) The car's advertised figure is 6.2 L/100 km. Is Kai's car more or less efficient than advertised? (d) What did the 38.4 L cost?

**Worked answer:** (a) 548 km. (b) 38.4 ÷ 548 × 100 = 7.0 L/100 km. (c) Less efficient: it uses more fuel per 100 km than the advertised 6.2. (d) 38.4 × 2.25 = $86.40.

### Question 2

A first-car buyer is choosing between a small hatchback that uses 6.1 L/100 km of petrol at $2.25 a litre and a ute that uses 9.4 L/100 km of diesel at $2.70 a litre. She expects to drive 15 000 km a year. (a) Find the fuel used and the fuel cost for each vehicle in a year. (b) How much more does the ute cost to fuel each year? (c) Which vehicle is more fuel efficient? Give one non-money reason she might still choose the other.

**Worked answer:** (a) Hatchback: 6.1 × 150 = 915 L, $2058.75. Ute: 9.4 × 150 = 1410 L, $3807.00. (b) $1748.25. (c) The hatchback (lower L/100 km). She might choose the ute to carry tools or a trailer for work.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "548 ÷ 38.4 = 14.3", crossed, "that is km per litre; L/100 km is litres ÷ km × 100"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A fill-up docket and the odometer:** working out your own car's real consumption between two fill-ups (cars; the figure on the label is not always what you get).
- **Choosing a first car:** a small hatchback against a ute over a year of driving, in litres and dollars (cars and money; the syllabus's "compare the efficiency of vehicles").
- **A long-weekend road trip:** about 780 km there and back to the coast at 7.2 L/100 km, 56.16 L, about $126 at $2.25 a litre (travel; a fuel budget for friends splitting costs, a callback to r02).

**Prices (rulings 5 and 32):** petrol about $2.25 a litre: NRMA weekly fuel report, 9 November 2026, Sydney regular unleaded average 225.3 c/L (mynrma.com.au, read 18 November 2026). Diesel at $2.70 is an example near the national average reported for 7 November 2026 (about 278 c/L, IBTimes Australia citing weekly averages); Codex re-verifies both against FuelCheck or the NRMA report at build time. The site's $2.05, $2.10 and $2.15 stay as the site's worked numbers; say once that fuel prices change every week. The 780 km trip is an example distance, not a named route.

Varied everyday contexts (cars, money, travel). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "fill-up" no hits; "odometer" appears in Advanced w08 and i10 as a distance readout in kinematics, not a fuel calculation; "Thredbo" and snow trips are avoided because Advanced f04, f10 and i14 use a ski resort). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in the parts used here (the site's petrol prices are older than current prices, a note rather than an error).

Decisions for Claude:

- **Lower is better:** say plainly that L/100 km is a rate where a smaller number wins, and contrast it with km per litre once.
- **Two-route final frame (ruling 38 pattern):** left "Standard 2: next, the cost of running things at home" (a phone on a charger and a heater, "which costs more to run?"); right "Standard 1: next, right-angled triangles": the house plate `physics/phys-y11-house-v1.png` with its roof outlined as a right-angled triangle (35° at the eave, "?" on the height) and a grey chip "Ratios and rates: done". The same right panel is r14's final frame, so t01 opens on one picture for both courses.
- Pace: not at risk; fits 7 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
