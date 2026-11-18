# math-s12-t10: How does a compass radial survey map a block of land?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `cibe642c8e`: Construct and interpret compass radial surveys and solve related problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered (the "construct" part is partial: no scale drawing; MS-46).

Also served here by root ruling 43: the radial-survey part of `cie48a6b84` ("Calculate the perimeter, or area of a section of land ... from ... a radial survey", owned by math-s12-r07) and, as a callback, the rainfall volume of `ci5d0f766d` (math-s12-r08, V = Ah). These stay owned by r07 and r08 in the route; this video adds the radial-survey case they deferred.

Standard 1: no matching point. This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Playlist order 60 (ruling 46 positions).

**Entry knowledge:** math-s12-t04: `ci065df8b3` (true bearings measured clockwise from north); math-s12-t08: `ci431f9599` (a side from SAS by the cosine rule); math-s12-t09: `ci30a047f1` (area from two sides and the included angle); math-s12-r07: `cie48a6b84` (radial surveys named: "distance and direction from one point out to each corner of the land"); math-s12-r08: `ci5d0f766d` (volume of rainfall V = Ah, with h the rain's depth in metres; 25 mm on the dam); math-s12-r05: `ci9857fa6f` (constructing a scale drawing), for the construct step.

**Prior video:** math-s12-t09.

**Start (ruling 43 callback):** t09's final frame (proposed): r07's scene 7 radial-survey sketch returns (a point inside a five-sided block, rays to the corners, blank distance and bearing boxes) with the grey chip from r07, "radial survey: in Trigonometry", now turned green: "now we have the triangle rules".

**Stop:** What a compass radial survey records (from one point O inside the land: the true bearing and distance to each corner, a field-book table); constructing the survey diagram to scale from the table (north up, each ray at its bearing with a protractor, each length at the scale, corners joined); the angle at O between neighbouring corners as a difference of bearings, with the wrap-around angle that crosses north; the 360° check (it checks the subtractions, not the readings); each triangle is SAS, so its area is ½ab sin C and the total is their sum; a boundary nobody walked from the cosine rule; the perimeter as the sum of the boundaries; rain on the block: V = Ah with h in metres (25 mm = 0.025 m), litres from m³ (r08's callback). Stops at radial surveys; mixed problems are t11.

**Next:** math-s12-t11.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `a5110b3ea364f9718647b9c37bbf0cd1fc8cb96e995362672314aec84ddc43f9`. Sections used: `orient-to-radial-surveys` (cards 01, 02, 04), `work-the-survey-method` (card 05), `work-three-survey-examples` (`we-1` to `we-3`), `avoid-the-survey-traps`, `drill-radial-surveys` (drills 1 to 5), `revisit-radial-surveys`, `practise-radial-surveys` (Q1, Q2). Q3 is t11's.

### Source lesson08, cards 01, 02 and 05

Hook: "A paddock has four corners, no right angles and no parallel sides. A surveyor stands at one point inside it and records four bearings and four distances. She never walks the fence line, never measures a boundary, and never finds a perpendicular height. She still gets the area to the nearest square metre. How?" Card 02: "A compass radial survey is taken from a single point inside the field, usually called $O$. For each corner the surveyor records two things and only two things: the true bearing of that corner from $O$, and the distance to it." "Why it works. Every pair of neighbouring corners forms a triangle with $O$. Both sides of that triangle are distances you measured, and the angle between them is the difference of two bearings. That is SAS, every single time". "The angles at $O$ go all the way round, so they must add to $360°$." Card 05: "1 · Draw $O$, mark north, and draw each radial line at its bearing with its length / 2 · Angles at $O$: difference of neighbouring bearings, then check they total $360°$ / 3 · Area: $A = \tfrac{1}{2}ab\sin C$ on each triangle, then add / 4 · Boundaries: $c^2 = a^2 + b^2 - 2ab\cos C$ on whichever triangle you need". "Take what is left of the circle after the last bearing, $360°$ minus it, and add the first bearing to that."

### Source lesson08, `we-1` to `we-3`

`we-1`: "A paddock $ABCD$ is surveyed from a central point $O$. The record reads: $A$, $041°$T, $85\text{ m}$; $B$, $128°$T, $70\text{ m}$; $C$, $214°$T, $96\text{ m}$; $D$, $305°$T, $60\text{ m}$. Find all four angles at $O$ and check the survey closes." ($87°$, $86°$, $91°$, "$\angle DOA = (360° - 305°) + 041° = 55° + 41° = 96°$", "$87° + 86° + 91° + 96° = 360° \;\checkmark$", "it checks your arithmetic, not the surveyor's readings"). `we-2`: "find the total area of paddock $ABCD$, correct to the nearest square metre" (2970.92, 3351.82, 2879.56, 2536.03; "total $= \mathbf{11738\text{ m}^2}$", "About $1.17$ hectares"). `we-3`: "find the length of boundary $AB$" ("$AB^2 = 12125 - 622.80 = 11502.20$", "$AB = \sqrt{11502.20} = \mathbf{107.25\text{ m}}$", "just under the Pythagoras value $\sqrt{85^2 + 70^2} = 110.11$").

### Source lesson08, traps, drills and SA

Trap 01: "Putting $128°$ into the area rule instead of the $87°$ between the two lines gives a confident, wrong area." Trap 02: "With $305°$ and $041°$, subtracting gives $264°$ when the answer is $96°$." Trap 03: "Rounding each triangle before adding them". Drills (survey P 035°T 40 m; Q 110°T 55 m; R 250°T 48 m; S 310°T 62 m): 75°, 85°, closes; 1062.52 m²; PQ 59.04 m; 848.48 m² ("The obtuse angle makes no difference at all"); total 4435 m². Q1: X 052°T 44 m, Y 137°T 61 m (1336.89 m²). Q2: the same paddock, total and "$CD = \mathbf{114.09\text{ m}}$", "longer than the Pythagoras value of $113.21\text{ m}$".

## 3. Recalculation

- `we-1`: 87, 86, 91, 96; total 360. `we-2`: 2970.9229, 3351.8152, 2879.5614, 2536.0308; total 11738.3303, so 11738 m², 1.17 ha; circle check π × 96² = 28 953 m². `we-3`: AB² = 11502.2021, AB = 107.2483, so 107.25 m; Pythagoras 110.11 m.
- Drills: 75, 140, 60, 85 (360); 1062.5184, 848.4796, 1288.6458, 1235.2814; total 4434.9253, so 4435 m²; PQ 59.0440, so 59.04 m. Q1: 1336.8933, so 1336.89 m². Q2: CD 114.0923, so 114.09 m; Pythagoras 113.21 m.
- Rainfall callback (ruling 43): 25 mm on the site's paddock: 11738.3303 × 0.025 = 293.4583 m³ = 293 458 L, about 293 kL.
- Question 1: angles 85°, 95°, 90°, 90° (total 360°); areas 694.3477, 776.0357, 570, 510; total 2550.3834, so 2550 m²; AB = 50.9314, so 50.93 m. Question 2: angles 125°, 115°, 120° (total 360°); areas 4669.1667, 4735.4582, 5715.7677; total 15120.3925, so 15 120 m²; 18 mm of rain: 272.1671 m³, so 272 kL.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using a bearing as the angle at O.
- Subtracting straight across north (264° for 96°).
- Treating the 360° total as proof the readings are right (it checks only the subtractions).
- Rounding each triangle before adding.
- Forgetting the square root for a boundary, or the ½ in an area.
- Rain depth in mm used as metres (25 instead of 0.025), or m³ reported as litres.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- r07's radial sketch returning, then a field-book table (corner, bearing, distance) beside a paddock seen from above with O marked.
- Construction to scale: north line at O, a coded protractor turning to each bearing, a ruler marking each distance at 1 cm : 10 m, corners joined (the construct step, which the site leaves out).
- The angles at O: arcs between neighbouring rays with the subtraction written on each; the wrap-around arc crossing north drawn in two parts (55° + 41°); a 360° ring filling as the four arcs are added.
- Triangles lit one at a time with their ½ab sin C values stacking into a running total; then one boundary lit for the cosine rule.
- Rain on the paddock: r08's rain slab over the whole survey area, V = A × 0.025 m, m³ to litres.

Advanced reuse (visual parts only): `BearingRose` with `sweeps` and `markers` for the rays, `NorthLine`, `fmtBearing` (a11-trig-bearings.tsx); `StudioTriangle` with `triSAS` for each triangle; `HingeBars` (cosine rule). Standard reuse: ScalePlan's ruler (r04 to r07 kit), the r08 RainSlab or `ContainerFill` (rig.tsx). Plates: the farm or paddock top view (t04, t05, t08), `ms12-farm-dam-aerial-v1.png` from r07 if the dam is the callback picture. Kit needs: a **RadialSurvey** board (O, a field-book table driving the rays at true bearings and scaled lengths, arcs between neighbours with differences, the 360° ring, per-triangle area chips and a running total, a chosen boundary); the main new part of the strand. See `../../checks/maths-standard-kit-needs-t.md`.

## 6. Two original candidate practice questions

### Question 1

A council park ABCD is surveyed from a sprinkler head O inside it. The field book reads: A, 020°T, 34 m; B, 105°T, 41 m; C, 200°T, 38 m; D, 290°T, 30 m. (a) Find the four angles at O and check the survey closes. (b) Find the area of the park, correct to the nearest square metre. (c) Find the length of the boundary AB, correct to two decimal places.

**Worked answer:** (a) AOB = 105 − 20 = 85°, BOC = 200 − 105 = 95°, COD = 290 − 200 = 90°, DOA = (360 − 290) + 20 = 90°; total 360°. (b) ½(34)(41) sin 85° + ½(41)(38) sin 95° + ½(38)(30) sin 90° + ½(30)(34) sin 90° = 694.35 + 776.04 + 570 + 510 = 2550.38, so 2550 m². (c) AB² = 34² + 41² − 2(34)(41) cos 85° = 2594.01, so AB = 50.93 m.

### Question 2

A triangular paddock XYZ is surveyed from a point O inside it: X, 040°T, 120 m; Y, 165°T, 95 m; Z, 280°T, 110 m. (a) Find the area of the paddock, correct to the nearest square metre. (b) Overnight, 18 mm of rain falls on the paddock. Find the volume of water that falls on it, in kilolitres, correct to the nearest kilolitre.

**Worked answer:** (a) Angles at O: 125°, 115° and (360 − 280) + 40 = 120°; total 360°. Area = ½(120)(95) sin 125° + ½(95)(110) sin 115° + ½(110)(120) sin 120° = 4669.17 + 4735.46 + 5715.77 = 15120.39, so 15 120 m². (b) V = Ah = 15120.39 × 0.018 = 272.17 m³ = 272 kL.

Only the question goes on the card (Question 1 with its field-book table). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "DOA = 290 − 20 = 270°", crossed, "that crosses north the long way: 70° + 20° = 90°"; for Question 2 (b): "15120 × 18 = 272 160", crossed, "18 mm is 0.018 m"). Answers were checked with SymPy.

## 7. Everyday anchors

- **The farm paddock and last night's rain (rulings 43 and 52):** the site's paddock, about 11 738 m² from one standing point, and r08's 25 mm of rain on it: about 293 kL, a callback to the dam (farming).
- **A council park surveyed from its sprinkler head:** the sprinkler is the centre point, and the rays reach the park's corners (parks and sport; why one point inside the land is enough).
- **r07's land, finished:** the radial survey sketch that r07 named and deferred, now measured (housing; a promise kept across strands).

Varied everyday contexts (farming, parks, housing). Repeat check (grepped 18 November 2026): no Advanced design teaches radial surveys; "sprinkler" has no hits; the paddock and the 25 mm rain are deliberate Standard callbacks (ruling 43), not repeats of an Advanced anchor. Claude picks; none is required. Objects, never people (the site's surveyor stays in the words).

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 8: MS-46 (no scale construction of a survey, and no link back to the rainfall and trapezoidal lesson).

Decisions for Claude:

- **Ruling 43 callback:** open on r07's radial sketch; close the rainfall loop with one V = Ah line on the surveyed paddock (25 mm, as r08 used on the dam). Keep r08's "h is the depth of rain" wording, because the trapezoidal rule's h has gone.
- **Construct:** one short scale-drawing scene (protractor and ruler from the table), since "construct" is in the point and the site does not show it.
- **The 360° check:** keep the site's honest note: it checks the subtractions, not the readings.
- **Perimeter:** finding all four boundaries is long; show one boundary worked and the others as a quick table, then the perimeter as their sum (the r07 perimeter idea).
- **Pace: watch** (angles, construction, area, one boundary and rain fit about 9 minutes; if the design runs long, move construction to a short demonstration under the field book).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
