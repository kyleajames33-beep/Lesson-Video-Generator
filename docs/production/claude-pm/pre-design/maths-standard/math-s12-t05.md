# math-s12-t05: How do bearings and right-angled triangles solve a navigation problem?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `cif644212f`: Solve practical problems involving Pythagoras’ theorem, the trigonometry of right-angled and non-right-angled triangles, angles of elevation and depression, and true bearings and compass bearings [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered. Shared with t03 and t11; this video owns bearings in right-angled problems.

Standard 1 (Year 12, Right-angled triangles):

- `cid1949529`: Solve practical problems involving Pythagoras’ theorem, the trigonometry of right-angled triangles, angles of elevation and depression, and true bearings and compass bearings [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea). Shared with t03; this video owns the bearings part.

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2. Playlist order 55 (ruling 46 positions). **Last Trigonometry video for Standard 1**: Standard 1 viewers go from here to math-s12-b01 (bivariate data, the next strand in the recommended order, ruling 28).

**Entry knowledge:** math-s12-t04: `ci065df8b3`, `ci0b85c453` (true and compass bearings, the bearing back); math-s12-t01 and t02 (a side or an angle from a ratio); math-s11-a06: `cib49e1f1d` (Pythagoras), recalled in t03.

**Prior video:** math-s12-t04.

**Start:** t04's final frame (proposed): the farm map from t04, a coded ute track running due north from the homestead, then turning due east to the far paddock gate: "how far is the gate in a straight line, and on what bearing?"

**Stop:** A north line at every turning point (all parallel); find the angle inside the triangle from the bearing (the bearing is not the angle in the triangle); a journey that is due north then due east (or any two legs at right angles) solved with Pythagoras for the distance and tan⁻¹ for the angle, then turned into a true bearing; the bearing back; one leg on a bearing split into how far east and how far south (or north) with sin and cos of the angle from the N-S line; two legs whose bearings differ by 90° (site `we-3`). Two-route final frame: Standard 2 to t06, Standard 1 to b01. Not taught: legs at other angles (the cosine rule, t08 and t11).

**Next:** math-s12-t06 (Standard 2); math-s12-b01 (Standard 1).

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `cbe50a5103ae73d7ccf3e52295c9921083fd3f0b4e3c0e8d9df21119d20c7918`. Sections used: `orient-to-bearings` (card 01 hook, card 02 components card), `work-three-bearing-examples` (`we-2`, `we-3`), `avoid-the-bearing-traps` (traps 01, 02), `drill-bearings` (drills 3 to 5), `revisit-bearings`, `practise-bearings` (Q2, Q3). Also lesson02 Q3 (a N25°W bearing in a right-angled triangle) from [trigonometry/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson02.sa.html) (SHA256 `42bde378ce705b9019cb1ea6cfd2b1e31b3c0f109f7e1dd75500d13ace6e6c8f`).

### Source lesson05, hook, card 02 and traps

Hook: "A ship sails northeast for 20 km, then southeast for 20 km. Where does it end up relative to the port? How far is it from port, and what bearing does it need to return?" Card 02: "N-S component $= d\cos\alpha$; E-W component $= d\sin\alpha$ where $\alpha$ is the angle from the N-S line." Trap 01: "The bearing (e.g. 130°T) is not the angle in the triangle. The trig angle is measured from the N or S direction, read it from your diagram. For 130°T: angle from South = 50°, so use sin 50° and cos 50°." Trap 02: "Every turning point needs its own North line parallel to all others." Revisit: "Total displacement: 0 km North, 28.28 km East the ship is due East of port! Distance $= 28.28$ km. Return bearing $= 270°T$ (due West)."

### Source lesson05, `we-2` and `we-3`

`we-2`: "A ship sails on a bearing of 130°T for 85 km. Find how far east and how far south of its starting position the ship is, correct to 2 decimal places." ("East component $= 85\sin50° = 85 \times 0.76604 \approx \mathbf{65.11 \text{ km}}$"; "South component $= 85\cos50° ... \approx \mathbf{54.64 \text{ km}}$"). `we-3`: "A yacht leaves port P and sails 20 km on bearing 040°T to buoy B, then 15 km on bearing 130°T to point C. Find (a) the straight-line distance PC, and (b) the bearing from C back to P, to the nearest degree." ("Bearings differ by $130° - 040° = 90°$, so legs PB and BC are perpendicular. $PC^2 = 20^2 + 15^2 = 625$; $PC = \mathbf{25 \text{ km}}$"; then N and E components, "$\theta = \tan^{-1}\!\left(\dfrac{24.347}{5.679}\right) \approx 77°$", "Back bearing C to P $= 077° + 180° = \mathbf{257°T}$").

### Source lesson05, drills and SA; lesson02 Q3

Drill 3: "A plane flies on bearing 060°T for 200 km" (100 km N, 173.21 km E). Drill 4: "From A, walk 8 km due North to B, then 6 km due East to C. Find (a) distance AC and (b) bearing from A to C." (10 km; 037°T). Drill 5: 50 km on 025°T then 70 km on 115°T (86.02 km). Q2: "A boat leaves a marina and travels 18 km on a bearing of 055°T to reach a buoy. It then travels due South until it is directly east of the marina." (10.32 km; 14.74 km). Q3: two bushwalkers, 24 km on 050°T and 140°T (90°; 33.94 km; 185°T by coordinates). lesson02 Q3: "The lighthouse is 3.2 km due north of port. From the ship, the lighthouse is on a bearing of N25°W" (1.49 km; 3.53 km).

## 3. Recalculation

- `we-2`: 65.1138, so 65.11 km; 54.6369, so 54.64 km. `we-3`: 25 km exactly; N 5.6791, E 24.3464; bearing 76.8699°, so 077°T; also 040° + tan⁻¹(15/20) = 76.87° (the right-angle route); back 257°T. Drill 3: 100 and 173.21 km. Drill 4: 10 km, tan⁻¹(6/8) = 36.87°, 037°T. Drill 5: 86.02 km. Revisit: 14.14 and 28.28 km. Q2: 10.32 and 14.74 km. Q3: 33.94 km; 5.000° west of south, 185°T. lesson02 Q3: 1.49 and 3.53 km.
- Question 1: √(6² + 4.5²) = 7.5 km; tan⁻¹(4.5/6) = 36.87°, 037°T; back 217°T. Question 2: 12 cos 30° = 10.3923, so 10.39 km south; 12 sin 30° = 6.00 km east.
- Ute anchor: 3.2 km north then 2.4 km east: 4.0 km, 037°T.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using the bearing itself (130°) as the angle in the triangle.
- No north line at the turning point, so the second bearing is measured from the wrong line.
- Giving the angle in the triangle (37°) as the answer to "what bearing" without turning it into a three-digit true bearing (037°T), or giving the outward bearing when the bearing back is asked.
- Mixing sin and cos for east and south: the side next to the angle from the N-S line is the north or south part.
- Assuming every two-leg journey is right-angled (check the bearings differ by 90°).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A coded top-view map with the journey drawing leg by leg, a north line popping up at each turn, and the angle inside the triangle marked separately from the bearing arc (two colours: bearing arc blue, triangle angle amber).
- Pythagoras and tan⁻¹ on the same triangle; then a sweep from north to the straight-line path reading the true bearing; then a 180° turn for the bearing back.
- One leg split into its south and east parts as a right-angled triangle hanging from the leg.
- Two-route final frame (ruling 38 pattern): left "Standard 2: next, the sine rule" (a river with a tree on the far bank, a coded 500 m baseline and two angle arcs, "no right angle: how far?", the site lesson06 hook); right "Standard 1: next, bivariate data" (b01's opening picture, provisional until the b01 pack exists: suggested, a beach kiosk's board pairing each day's top temperature with ice creams sold, the pairing the site's bivariate lesson04 uses as its first example) and a grey chip "Right-angled triangles: done".

Advanced reuse (visual parts only): `BearingJourney` with `legs`, `norths` at every vertex, `between` (the angle between two legs), `sweeps`, `home` (the straight path back) and `startAngle`; `journeyResult` and `journeyPoints` (a11-trig-bearings.tsx); `StudioTriangle` with `triRight` for the split leg. Plates: the farm top view (shared with t04 and t10); `ma11-yacht-top-v1.png` is Advanced t02b's anchor (use the site's yacht in `we-3` as coded marks, not the painted yacht); a delivery drone top view `physics/phys-y11-drone-top-v1.png` (inspect) for Question 1. Kit needs: MapPins (t04); a **component split** option on BearingJourney (a leg's north-south and east-west parts drawn as a dashed right-angled triangle), small.

## 6. Two original candidate practice questions

### Question 1

A delivery drone flies 6 km due north from its depot to a farm, then 4.5 km due east to a second farm. (a) How far is the second farm from the depot in a straight line? (b) Find the true bearing of the second farm from the depot, to the nearest degree. (c) Find the true bearing the drone flies to return directly to the depot.

**Worked answer:** (a) The two legs meet at a right angle: √(6² + 4.5²) = √56.25 = 7.5 km. (b) At the depot, tan θ = 4.5 ÷ 6, θ = 36.87°, measured from north towards east, so 037°T. (c) 037° + 180° = 217°T.

### Question 2

A ferry sails 12 km on a bearing of 150°T. How far south and how far east of its starting point is it? Give your answers correct to two decimal places.

**Worked answer:** 150°T is 30° from south towards east (180° − 150°). South: 12 cos 30° = 10.39 km. East: 12 sin 30° = 6.00 km.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "12 sin 150° and 12 cos 150°", crossed, "use the angle from the south line, 30°"; for Question 1 (b): "37°", crossed, "a true bearing has three digits and T: 037°T"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A farm ute on two straight tracks:** 3.2 km north then 2.4 km east to the far gate; 4 km in a straight line on 037°T (farming; the farm from t04).
- **A delivery drone between two farms:** the straight path and the bearing home (technology and deliveries).
- **A harbour ferry's leg:** how far south and how far east one leg takes it (travel; components without the word "vector").

Varied everyday contexts (farming, deliveries, travel). Repeat check (grepped 18 November 2026): Advanced t02b's right-angled two-leg journey uses the painted yacht, so the site's yacht `we-3` keeps its numbers on a coded map only; "ute" appears in Standard i09, i10 and r13 as a vehicle being bought or fuelled, not a journey; "delivery drone" has no hits. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 8: MS-45 (lesson05 `we-3` (b) and Q3 (c) use components and coordinates where the right-angled triangle gives the bearing directly).

Decisions for Claude:

- **Bearing from the right angle, not from components:** for `we-3` (b) the triangle already has a right angle at B, so angle BPC = tan⁻¹(15/20) = 36.87° and the bearing is 040° + 36.87° = 077°T, then 257°T back. This is shorter, stays inside right-angled trigonometry and gives the site's answer. Components (card 02, `we-2`) are kept for one leg only (Question 2).
- **Standard 1 is the main audience here:** Standard 2 students meet harder journeys in t08 and t11, so keep every example right-angled.
- **Two-route final frame:** as section 5. The left panel is t06's opening (the site's own sine-rule hook); the right panel is b01's opening and must match t11's final frame (proposal recorded in the route inputs; the b01 designer confirms).
- **Pace: watch.** North lines, the angle inside the triangle, Pythagoras with a bearing, the bearing back and one components leg fit 8 to 9 minutes; drop the components leg to a practice question if the design runs long.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
