# math-s12-r10: How do we convert a rate into different units and use it to solve problems?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Rates):

- `cib0e451ed`: Convert between rates [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered (crosswalk); compound-unit conversion is not taught (MS-35).
- `ciff825a61`: Use rates to solve problems in a variety of practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.

Standard 1 (Year 12, Ratios and rates, Rates):

- `ci088435d6`: Convert between rates [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: covered (Standard 2 lesson); as `cib0e451ed` (MS-35).
- `ci4b3c5e42`: Use rates to solve problems in a variety of practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical wording.

**Entry knowledge:** math-s12-r09: `ci26fe7fac` (a unit rate). math-s11-t01: `cic8bbf9d6` (seconds, minutes, hours). math-s11-a01: `ci29461234` and `ci529c4c4e` (length and capacity units). math-s11-f04: `ci61d581aa` (speed = distance ÷ time with unit changes).

**Prior video:** math-s12-r09.

**Start:** r09 ends on a unit rate in the wrong unit for the question: a dripping tap loses 0.3 L every minute. Is that a little or a lot over a year?

**Stop:** Convert a rate by converting its top unit and its bottom unit separately, one at a time, and writing the units at each step (0.3 L/min = 18 L/h = 432 L/day; 90 km/h = 90 000 m in 3600 s = 25 m/s; 144 km/h ÷ 3.6 = 40 m/s as a shortcut only after the reason); a rate turned upside down (12 km/h is 5 minutes per km); use a rate to find a total (rate × amount) or an amount of time (total ÷ rate), with the unitary method; give times in hours and minutes. Speed on a graph is r12.

**Next:** math-s12-r11.

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `05ae0325c7136abaf31da18d8639832e80554887247876ba02712b10dfa64381`. Sections used: `build-foundation` (card 05), `work-examples` (`we-2`), `avoid-common-errors` (Trap 02), `guided-drill` (quick-fire 5 to 8, 11, 12).

### Source lesson01, `we-2`

PROBLEM 2 · SPEED–DISTANCE–TIME. "A car travels 270 km in 3 hours and 15 minutes. Find the average speed in km/h." "$T = 3 + \dfrac{15}{60} = 3.25 \text{ h}$ ... Convert time to hours: 15 min = 15/60 h = 0.25 h." "$S = D \div T = 270 \div 3.25 \approx 83.1 \text{ km/h}$".

### Source lesson01, Trap 02

"Forgetting to convert minutes to hours. If speed is in km/h, time must be in hours. Divide minutes by 60 before substituting. 45 min = 0.75 h, not 45 h."

### Source lesson01, quick-fire practice

"5. A cyclist travels at 24 km/h for 2.5 hours. Find the distance." (60 km). "6. A train travels 480 km at an average speed of 120 km/h. Find the time in hours and minutes." (4 h). "7. A runner completes a 10 km race in 52 minutes and 30 seconds. Find the average speed in km/h (to 2 d.p.)." (11.43). "8. A car travels 140 km in 1 h 45 min." (80 km/h). "11. A tap drips at 0.3 L/min. How many litres are wasted in 24 hours?" (432 L). "12. A pump drains a 2400 L tank in 40 minutes. Find the drainage rate in L/min. How long to drain a 3600 L tank at the same rate?" (60 L/min; 60 min).

Drill 11 is the only place the site changes a rate's unit outright; no example converts both units of a rate (km/h to m/s, $/kg to c/g, L/min to kL/h). That part is original teaching (MS-35).

## 3. Recalculation

- `we-2`: 270 ÷ 3.25 = 83.08, so 83.1 km/h. Quick-fire 5: 60 km; 6: 4 h; 7: 10 ÷ 0.875 = 11.43 km/h; 8: 140 ÷ 1.75 = 80 km/h; 11: 0.3 × 60 × 24 = 432 L (157 680 L a year); 12: 60 L/min, 60 min.
- Conversions: 90 km/h = 25 m/s; 144 km/h = 40 m/s; 20.12 m ÷ 40 m/s = 0.503 s; 5 km in 25 min = 12 km/h, 5 min per km.
- Question 1: 14 × 60 = 840 L/h; 2500 ÷ 14 = 178.6 min, about 2 h 59 min. Question 2: 72 km/h = 20 m/s; 20 × 1.5 = 30 m.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Converting only one unit (90 km/h "= 90 000 m/h" then called m/s).
- Multiplying by 60 when dividing is needed, or the reverse; units written at each step catch it.
- 3 h 15 min as 3.15 h.
- Giving a decimal of an hour as minutes (2.98 h as "2 h 98 min").
- Using the ÷ 3.6 shortcut the wrong way (× 3.6 for km/h to m/s).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A conversion chain: "0.3 L per 1 min" → "× 60 / × 60" → "18 L per 1 h" → "× 24 / × 24" → "432 L per 1 day"; top and bottom multiply by the same number at each link, shown as a fraction strip so the "multiply top and bottom" logic is visible.
- km/h to m/s as two separate swaps: "km → m (× 1000 on top)", "h → s (× 3600 underneath)", then 90 000 ÷ 3600 = 25.
- A cricket pitch strip (20.12 m) with a ball travelling at 40 m/s; a stopwatch reads 0.5 s.
- A dripping tap filling a bucket, then a day's and a year's worth as stacked containers.

Advanced reuse (visual parts only): `StudioRateChainStrips` (working-parts.tsx), made for rates multiplying in a chain; `StopwatchHand` (rig.tsx); `ContainerFill` (rig.tsx) for the tap; `TripSim` is r12's. Kit needs: a two-line rate fraction (top unit over bottom unit) where each unit swaps on cue, a small mode of `StudioRateChainStrips`.

## 6. Two original candidate practice questions

### Question 1

A garden hose delivers water at 14 L/min. (a) Write this rate in litres per hour. (b) How long will it take to fill a 2500 L above-ground pool? Give your answer in hours and minutes, to the nearest minute.

**Worked answer:** (a) 14 × 60 = 840 L/h. (b) 2500 ÷ 14 = 178.6 min = 2 h 58.6 min, so about 2 h 59 min.

### Question 2

A car travels at 72 km/h through a school zone that is signed for 40 km/h. (a) Convert 72 km/h to metres per second. (b) The driver takes 1.5 seconds to react to a child stepping out. How far does the car travel in that time?

**Worked answer:** (a) 72 km/h = 72 000 m in 3600 s = 20 m/s. (b) 20 × 1.5 = 30 m.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "2.98 h = 2 h 98 min", crossed, "0.98 of an hour is about 59 min"). Answers were checked with SymPy. Question 2 touches Year 11 reaction distance (f04) as a use of a rate, not a re-teach; Claude may swap it for the cricket anchor if f04 overlap is a concern.

## 7. Everyday anchors

- **A dripping tap:** 0.3 L a minute is 432 L a day (the site's quick-fire 11) and about 158 000 L a year (home; a small rate made big by converting the bottom unit).
- **A fast bowler at the cricket:** 144 km/h is 40 m/s, so the ball covers the 20.12 m pitch in about half a second (sport; km/h to m/s with a reason to care).
- **A parkrun pace:** 5 km in 25 minutes is 12 km/h, or 5 minutes per kilometre (fitness; a rate turned upside down).

Varied everyday contexts (home, sport, fitness). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "dripping", "leaking tap" and "parkrun" no hits; "garden hose" and "sprinkler" are Advanced w15, w18, w24 and g06 arcs and a09's water arc, so the hose is practice only). Claude picks; none is required. Objects, never people (a ball and a pitch, not a bowler).

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 7: MS-35 (no conversion of a compound rate on the site; teach from the syllabus).

Decisions for Claude:

- **Reason before shortcut:** show the two swaps (top unit, bottom unit) before ÷ 3.6.
- **Pace: watch.** Conversions and problem-solving are two points; keep to two or three conversions and two problems. Fits about 8 minutes.
- Final frame: a supermarket shelf with flour, 2 kg for $3.80 and 5 kg for $8.75 (r11's hook), "which is better value?".

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
