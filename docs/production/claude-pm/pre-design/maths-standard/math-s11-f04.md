# math-s11-f04: How do speed, time and stopping distance connect, and why does speed matter so much?

Maths Standard research pack (Year 11, Formulas and equations), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Formulas and equations:

- `ci61d581aa`: Calculate distance, speed and time (with change of units of measurement as required) and stopping distances of vehicles using speed = distance/time and stopping distance = reaction distance + braking distance [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: partial. Lesson07 teaches only the supplied model D = 0.01v² + 0.3v, and its key terms call stopping distance the braking distance (MS-78). The sum reaction + braking and the km/h to m/s change are not taught in Year 11. Both formulas are MathML in the official wording; quote them from `sourceHtml`.

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f03: `cib54d5e23` (d = st rearranged as s = d/t and t = d/s). math-s11-f01: substitution, including a squared term. Stage 5: 60 minutes in an hour, 60 seconds in a minute, 1000 m in a kilometre.

**Prior video:** math-s11-f03.

**Start:** f03 ended with d = st in its three forms. A speedometer reads km/h, but a driver reacts in seconds and the car travels metres: units must match before the formula works.

**Stop:** speed = distance ÷ time and its two rearrangements; minutes to hours (15 min = 0.25 h, never 0.15 h); km/h to m/s (÷ 3.6) and back (× 3.6); stopping distance = reaction distance + braking distance; reaction distance = speed in m/s × reaction time in s; braking distance from a table or a supplied formula; why stopping distance grows faster than speed (the braking part grows with the square of the speed); road-safety meaning (wet roads, tiredness, phones and alcohol lengthen it, which sets up f05). Average speed over several legs, other rates and distance-time graphs are math-s12-r10 and r12.

**Next:** math-s11-f05.

## 2. Site order, sections and worked examples

Read-only source 1: [formulas-and-equations/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson07.sa.html), SHA256 `56fbba593ae4c2b386e409da02860a1b369f59e6e1d17149ec5d8ba024ccdc29`. Quadratic Formulas in Applied Contexts. Sections: `think-first-your-gut`, `the-formulas-you-need`, `squared-terms-change-the`, `round-at-the-end`, `worked-examples-3-in`, `common-errors-the-3`, `revisit-the-stopping-distance`, `practice-set`, `review-and-complete`.

Hook: "A safety model estimates stopping distance with $D = 0.01v^2 + 0.3v$, where $v$ is speed in km/h. Why might doubling the speed more than double the stopping distance?" Card 05: "the $0.01v^2$ part grows much faster than the $0.3v$ part as speed increases. This is why higher speeds are disproportionately dangerous."
`we-1`: $v = 50$: $D = 0.01(2500) + 15 = 25 + 15 = 40$ m.
`we-2`: $v = 40$: $16 + 12 = 28$ m; $v = 80$: $64 + 24 = 88$ m; "$88 \div 28 \approx 3.14$, more than double".
Drill: 60 km/h gives 54 m; 30 km/h gives 18 m, "it triples, not doubles". Q1: 70 km/h gives $49 + 21 = 70$ m.
`we-3` (a square's area) is not needed here.

Read-only source 2: [formulas-and-equations/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson04.sa.html), SHA256 `85bf8cdd80b824ece87303a73906a6753528df68a157e34c988473a62df4d9a2`: `we-1` 180 km in 3 h, 60 km/h; drill 240 km at 80 km/h, 3 h; Q1 150 km at 50 km/h, 3 h.

Read-only source 3: [formulas-and-equations/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson08.sa.html), SHA256 `963fedd859ac4fa1a9bb496342246289c904a73ac7fd581453d3e20098b681ed`: `we-2` cyclist 135 km in 3 h, 45 km/h; Q2 210 km at 70 km/h, 3 h; `we-4` the 540 m claim (correct value 54 m; its explanation is wrong, MS-77).

Read-only source 4: [year12/ratios-and-rates/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson01.sa.html), SHA256 `05ae0325c7136abaf31da18d8639832e80554887247876ba02712b10dfa64381`. Rates. Trap: "If speed is in km/h, time must be in hours. Divide minutes by 60 before substituting. 45 min = 0.75 h, not 45 h." Drill: 24 km/h for 2.5 h (60 km); 480 km at 120 km/h (4 h); 10 km in 52 min 30 s (11.43 km/h); 140 km in 1 h 45 min (80 km/h). **`we-2` (270 km in 3 h 15 min) is taken by math-s12-r10's design; do not reuse it here.**

## 3. Recalculation

- Lesson07: 40, 28, 88, 88/28 = 3.142857 (3.14), 54, 18 (ratio 3), 70.
- Model split for every 10 km/h from 40 to 110: reaction part 0.3v = 12, 15, 18, 21, 24, 27, 30, 33 m; braking part 0.01v² = 16, 25, 36, 49, 64, 81, 100, 121 m; totals 28, 40, 54, 70, 88, 108, 130, 154 m.
- 0.3v is a reaction distance: v km/h ÷ 3.6 × t s = 0.3v gives t = 27/25 = 1.08 s.
- Lesson04 and 08: 60, 3, 3, 45, 3. Lesson08 `we-4`: 0.01(3600) + 18 = 54; 10 × 54 = 540; using 0.1 would give 0.1(3600) + 18 = 378, not 540.
- Year 12 rates: 60, 4, 11.43 (10 ÷ 0.875), 80.
- New: 60 km/h = 50/3 ≈ 16.67 m/s; reaction 1.5 s gives 25 m; with an example braking distance of 20 m, stopping distance 45 m. Canberra drive 285 km in 3 h 10 min = 90 km/h. Paddleboard 4.5 km in 1 h 15 min = 3.6 km/h = 1 m/s.
- Practice: 72 km/h = 20 m/s; 20 × 1.2 = 24 m; 24 + 29 = 53 m. 156 km in 1 h 36 min = 97.5 km/h; 156 km at 80 km/h = 1.95 h = 1 h 57 min.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`). All site answers match; the `we-4` explanation does not (MS-77).

## 4. Misconceptions and HSC-style traps

- 3 h 15 min written as 3.15 h; 45 min as 0.45 h.
- Multiplying km/h by seconds (60 × 1.5 = 90 "m").
- Converting the wrong way (× 3.6 for km/h to m/s).
- Stopping distance taken as braking distance only (the site's own definition, MS-78), so the reaction distance is lost.
- Thinking doubling the speed doubles the stopping distance.
- Average speed as the mean of two speeds (deferred to math-s12-r10; name it only if asked).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A road strip with a car (existing plates `ma11-road-side-strip-v1.png` or `ma11-city-road-strip-v1.png`, `ma12-used-hatchback-v1.png`; check appearance), a hazard marker, and a stopping bar under it in two colours: the reaction part (the car still at full speed while the driver reacts) then the braking part (the car slowing). The bar grows as speed rises, the braking colour fastest.
- A unit converter strip: km/h → ÷ 1000 × ... shown once as "1 km/h = 1000 m per 3600 s", so ÷ 3.6 has a reason, then used as a shortcut.
- A clock face for 3 h 15 min with the quarter shaded: 0.25 h, crossed "3.15".
- A speed table (40 to 110 km/h) with the reaction and braking columns, so "30 km/h to 60 km/h triples it" is seen.
- A wet-road version where only the braking part stretches (example values, labelled).

Kit: `SpeedStop` and `TripSim`/`tripAt` exist (check what they draw before use); `StackedTotalBar` or `SignedBar` for the two-part stopping bar; `MinutesDial` for 15 min as a quarter; `StudioUnitProduct` and `StudioRateChainStrips` for the unit chain; `WorkingBoard`. A `StoppingDistanceStrip` is requested in the kit-needs file. No people; the driver is not drawn (the car and a reaction clock stand in).

## 6. Two original candidate practice questions

### Question 1

A car travels at 72 km/h. The driver's reaction time is 1.2 seconds. (a) Convert 72 km/h to metres per second. (b) Find the reaction distance. (c) At this speed the braking distance is 29 m. Find the stopping distance.

**Worked answer:** (a) 72 ÷ 3.6 = 20 m/s. (b) 20 × 1.2 = 24 m. (c) 24 + 29 = 53 m.

### Question 2

A coach travels 156 km in 1 hour 36 minutes. (a) Find its average speed in km/h. (b) How long would the same trip take at 80 km/h? Give your answer in hours and minutes.

**Worked answer:** (a) 1 h 36 min = 1.6 h; 156 ÷ 1.6 = 97.5 km/h. (b) 156 ÷ 80 = 1.95 h = 1 h 57 min.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "72 × 1.2 = 86.4 m", "change km/h to m/s first"; Question 2: crossed "1.36 h"). The braking distance in Question 1 is an invented example. Answers were checked with SymPy.

## 7. Everyday anchors

- A drive from Sydney to Canberra: about 285 km in 3 hours 10 minutes, so about 90 km/h on average (travel; the minutes-to-hours change).
- A stand-up paddleboard trip: 4.5 km in 1 hour 15 minutes is 3.6 km/h, which is exactly 1 m/s (sport; shows where 3.6 comes from).
- A wet road at night: the reaction part stays the same but the braking part grows (road safety; the stopping-distance sum).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "Canberra", "paddleboard" and "wet road" no hits; a road trip, parkrun and a school zone were avoided because math-a11-c01, math-s12-r10 and r10's attempt use them). The Canberra distance is approximate and labelled as such. Objects only (a car, a road, a board), never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New findings: MS-77 (lesson08 `we-4`: the "used 0.1 instead of 0.01" explanation gives 378 m, not 540 m), MS-78 (lesson07 defines stopping distance as the braking distance) and MS-81 (the stopping-distance sum is a gap).

Decisions for Claude:

- **The site's model is the syllabus formula in disguise.** In D = 0.01v² + 0.3v, the 0.3v is a reaction distance (v ÷ 3.6 × 1.08 s) and the 0.01v² is a braking distance. Teaching it that way joins the site's numbers to the syllabus sum and explains why speed matters so much.
- **Sourced values.** A reaction time of about 1.5 s (25 m at 60 km/h) appears in NSW road-safety guidance; the nsw.gov.au "Safe stopping distance" page and the Road User Handbook are the sources to cite. Braking distances in examples are labelled "example values". Codex confirms the 1.5 s figure and checks that the site model's 54 m at 60 km/h is presented as a model, not an official figure.
- **Year 12 needs:** math-s12-r10 shows a grey chip "Year 11: speed = distance ÷ time" and teaches the 3 h 15 min example; math-s12-r12 assumes speed = distance ÷ time with unit changes; math-s12-r04 uses it for a travel time; math-s12-f04 converts per minute to per hour. This video must deliver the formula, its rearrangements and the minutes-to-hours change.
- **Pace flag: at risk.** Suggested split: f04a (speed, distance and time with unit changes) and f04b (stopping distance = reaction distance + braking distance, and why speed matters), sharing the outline number. f04b's final frame (a reaction clock and a breath-test sign) opens f05.
- **Tone.** Road safety without fear tactics: no crash imagery, no injured people.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
