# math-s12-r12: What does a distance-time graph tell us about a journey?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Rates):

- `cic3bbd162`: Interpret and analyse distance–time graphs to solve problems related to speed, distance and time [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: partial (speed, distance and time are taught; distance-time graphs are not).

Standard 1 (Year 12, Ratios and rates, Rates):

- `ci30ebbe40`: Interpret and analyse distance–time graphs to solve problems related to speed, distance and time [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: partial (Standard 2 lesson).

These are CMS codenames, not published content-point codes. The official wording uses an en dash in "distance–time"; quote it exactly in descriptions.

**Course:** Standard 1 and Standard 2, identical wording.

**Entry knowledge (outline dependency list):** math-s11-f04: `ci61d581aa` (speed = distance ÷ time, with unit changes); math-s11-l01: `ci94641a48` (gradient from a graph, rise over run). Also math-s12-r10: `cib0e451ed` (minutes to hours inside a rate) and math-s12-a01 (two lines crossing, for two journeys).

**Prior video:** math-s12-r11.

**Start:** The road-trip receipt on r11's final frame: Sydney to Melbourne, 880 km. A trip that has stops and speed changes can be drawn as one line.

**Stop:** A distance-time graph: time along the bottom, distance from the start up the side; a straight section is a steady speed, and its gradient (distance ÷ time, rise over run) is the speed; steeper means faster; a flat section is a stop; a section sloping down is travel back towards the start; read times and distances from the graph; average speed for a whole trip = total distance ÷ total time, stops included (not the mean of the speeds); two journeys on one set of axes and what the crossing point means (one catches the other: same place, same time). Use the site's Sydney-Melbourne trip (SA 4) as the worked example. Fuel is r13.

**Next:** math-s12-r13.

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `05ae0325c7136abaf31da18d8639832e80554887247876ba02712b10dfa64381`. Sections used: `orient-and-prepare` (card 02, D = S × T), `build-foundation` (average speed warning), `work-examples` (`we-2`), `avoid-common-errors` (Traps 01 and 02), `independent-practice` (SA 4). The page has no graph of any journey; the graph teaching is original from the syllabus (partial, existing section 2 entry in the corrections file).

### Source lesson01, card 02 and the average speed warning

"For speed: $D = S \times T$, cover the unknown to read the formula." "Average speed warning: Average speed = total distance ÷ total time. It is NOT the arithmetic mean of two speeds unless the time spent at each speed is equal." Key term: "Average speed: Total distance divided by total time for a journey; does not reflect varying speed during the trip."

### Source lesson01, `we-2` and Traps

`we-2`: "A car travels 270 km in 3 hours and 15 minutes ... $270 \div 3.25 \approx 83.1 \text{ km/h}$". Trap 01: "Wrong: Average speed = (speed1 + speed2) ÷ 2. Right: Average speed = total distance ÷ total time." Trap 02: "45 min = 0.75 h, not 45 h."

### Source lesson01, SA 4

"A family drives from Sydney to Melbourne, a distance of 880 km. They drive at an average speed of 100 km/h for the first 400 km, then stop for 45 minutes, then continue at 90 km/h for the rest. (a) Find the time for the first 400 km. (b) Find the time for the remaining distance. (c) Find the total travel time including the rest stop, in hours and minutes." Answers: "4 h", "$480 \div 90 = 5\frac{1}{3}$ h $= 5$ h 20 min", "$10$ h 5 min". This becomes the graph: three straight pieces (steep, flat, slightly less steep).

## 3. Recalculation

- SA 4: 4 h; 480 ÷ 90 = 16/3 h = 5 h 20 min; total 121/12 h = 10 h 5 min. Average speed including the stop: 880 ÷ 10.083 = 87.27 km/h; moving only: 880 ÷ 9.333 = 94.29 km/h; the mean of the two speeds (95 km/h) is neither.
- `we-2`: 83.08, so 83.1 km/h.
- Question 1: 6 km in 20 min = 18 km/h; last leg 4 km in 15 min = 16 km/h; 10 km in 45 min = 13.33 km/h. Question 2: 80t = 100(t − 0.5) gives t = 2.5 h, so 11:30 am, 200 km from the town.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading the graph as a map of the road (a hill), not distance against time.
- Treating a flat section as "going slowly" rather than stopped.
- Taking the mean of the speeds (95 km/h) instead of total distance ÷ total time.
- Leaving out the stop when the question asks for the whole trip, or including it when it asks for driving time.
- Reading the crossing of two journey lines as "same speed" instead of "same place at the same time".

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- TripSim (rig.tsx) drives a car along a road strip with a dashboard and readouts; the same trip state draws the distance-time graph point by point beside it (one trip state, two views), so the steep, flat and second slope appear as the car drives, stops and drives on.
- A rise-over-run triangle on each straight section: "400 km over 4 h = 100 km/h"; on the flat section "0 km over 0.75 h = 0 km/h, stopped".
- Average speed: a dashed line from the start to the end point of the whole trip; its gradient is 87.3 km/h; a crossed "(100 + 90) ÷ 2 = 95" card.
- Two journeys: two lines on one set of axes (car A leaves at 9:00, car B at 9:30); the crossing ringed with "same place, same time" (a callback to a01's two lines).
- A return trip: a line sloping back down to zero distance.

Advanced reuse (visual parts only): `TripSim` and `tripAt` (rig.tsx; "Road trip: ... a readout board carries distance, time and average. One trip state drives everything"); `StudioPlot` for the graph; `crossingX` and `RegionLabels` (a11-graph-parts.tsx) for the crossing; `StudioTangentTriangle` (fn-sim.tsx) style rise-over-run (it is drawn for tangents; a chord triangle on a straight section may need a small option). Plates: `maths/ma12-country-road-v1.png`, `ma11-road-side-strip-v1.png`, `ma11-city-road-strip-v1.png` and the used hatchback (appearance not checked). Kit needs: a TripGraph link (TripSim state drawn live as a distance-time line).

## 6. Two original candidate practice questions

### Question 1

The graph (described): Jordan rides a bike to work. Distance from home rises steadily from 0 km at 0 min to 6 km at 20 min, stays at 6 km from 20 min to 30 min (a stop at a café), then rises steadily to 10 km at 45 min. (a) Find Jordan's speed in km/h for the first 20 minutes. (b) What was happening between 20 and 30 minutes? (c) Find the average speed for the whole trip, in km/h, correct to one decimal place.

**Worked answer:** (a) 6 km in 1/3 h = 18 km/h. (b) Stopped (the distance from home did not change). (c) 10 km in 45 min = 0.75 h; 10 ÷ 0.75 = 13.3 km/h.

### Question 2

Two friends drive from the same town along the same highway. Car A leaves at 9:00 am and travels at a steady 80 km/h. Car B leaves at 9:30 am and travels at a steady 100 km/h. (a) Draw both journeys on one distance-time graph for the first 3 hours after 9:00 am. (b) Use your graph to find when and where car B catches car A. (c) Check your answer with a calculation.

**Worked answer:** (a) Car A: a line from (9:00, 0) through (10:00, 80 km), (12:00, 240 km). Car B: a line from (9:30, 0) through (10:30, 100 km), (12:00, 250 km). (b) The lines cross at 11:30 am, 200 km from the town. (c) At 11:30 car A has driven 2.5 h × 80 = 200 km; car B has driven 2 h × 100 = 200 km.

Only the question and the graph (Question 1) or empty axes (Question 2) go on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (c): "(18 + 16) ÷ 2 = 17 km/h", crossed, "total distance ÷ total time"). Answers were checked with SymPy.

## 7. Everyday anchors

- **The Sydney to Melbourne road trip:** 880 km with a 45-minute rest stop (the site's SA 4) (travel; the stop becomes a flat line, and the average speed trap is built in).
- **A bike ride to work with a coffee stop:** short distances in minutes, so the minutes-to-hours step matters (commuting).
- **A pizza delivery scooter's run:** out to a customer and back, the line going up and then down to zero (part-time work; "distance from the start" falls on the way back).

Varied everyday contexts (travel, commuting, part-time work). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "Melbourne" no hits; the Advanced taxi and odometer contexts (w08, i10) are about displacement and integrals, and the delivery van plate is used in Standard i11, so the delivery here is a scooter). Claude picks; none is required. Objects, never people. The 880 km figure is the site's; Codex may confirm it as a reasonable Hume Highway distance if it is narrated as fact.

## 8. Site corrections and decisions for Claude

The site gap is already logged (section 2 of the corrections file: distance-time graphs, partial). No new error in the parts used here.

Decisions for Claude:

- **Original teaching** from the syllabus, built on the site's own SA 4 numbers.
- **Pace: watch.** Reading one journey, average speed and two journeys is a full video. Suggested split only if the design runs past 570 s: r12a (reading a journey: gradient as speed, stops, return) and r12b (average speed and two journeys on one graph). Both would carry both courses' codes.
- **Callback:** two journeys crossing is a01's two lines meeting; a grey chip is enough.
- Final frame: the Sydney-Melbourne car on the graph with a fuel gauge chip, "how much fuel did that take?" (r13's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
