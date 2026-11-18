# math-s12-t04: How do true bearings and compass bearings describe a direction?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `ci065df8b3`: Identify and interpret true bearings and compass bearings and convert between them [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered.

Standard 1 (Year 12, Right-angled triangles):

- `ci0b85c453`: Identify and interpret true bearings and compass bearings and convert between them [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical wording. Playlist order 54 (ruling 46 positions).

**Entry knowledge:** angles in a full turn (360°), a straight angle (180°) and a right angle (Stage 4, recalled in a phrase); math-s12-t03 is the prior video but no trigonometry is needed here. No Year 11 point is assumed (the outline lists none).

**Prior video:** math-s12-t03.

**Start:** t03's final frame (proposed): a farm seen from above, the homestead in the middle with a coded north arrow, and three landmarks (the dam, the shearing shed, the front gate) with "which way?" chips.

**Stop:** A bearing gives a direction from a point; a true bearing is the angle measured clockwise from north, written with three digits and T (000°T to 359°T; 090°T is east); a compass bearing starts at N or S and turns towards E or W (N40°E, S25°E); the named directions NE, SE, SW and NW as 045°T, 135°T, 225°T and 315°T (one line, because the site's hook uses them); converting in each quadrant (sketch first, then add or subtract from 0°, 180° or 360°); the bearing back (the reverse or back bearing) as 180° more or less; "from" matters (the bearing of A from B is measured at B). Using bearings in triangles is t05.

**Next:** math-s12-t05.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `cbe50a5103ae73d7ccf3e52295c9921083fd3f0b4e3c0e8d9df21119d20c7918`. Sections used: `orient-to-bearings` (cards 02, 04), `convert-between-bearing-systems` (card 05), `work-three-bearing-examples` (`we-1` only), `avoid-the-bearing-traps` (trap 03), `drill-bearings` (drills 1, 2, the matching task), `practise-bearings` (Q1). The journeys (`we-2`, `we-3`, drills 3 to 5, Q2, Q3) are t05's.

### Source lesson05, cards 02, 04 and 05

Card 02: "True bearings use a three-digit clockwise angle from North. Compass bearings use a deviation from North or South toward East or West." "True bearing rules: always three digits, measured clockwise from North. 000°T = North; 090°T = East; 180°T = South; 270°T = West." "Back bearing rule: add 180° if bearing < 180°; subtract 180° if bearing ≥ 180°." Key terms: "Compass bearing: A direction expressed relative to North or South with a deviation toward East or West, format: N[angle]E, S[angle]W, etc." "Back bearing: The bearing from B to A when the bearing from A to B is known". Card 05: "000°–090°T (NE): N[bearing]E    090°–180°T (SE): S[180°−bearing]E / 180°–270°T (SW): S[bearing−180°]W    270°–360°T (NW): N[360°−bearing]W". "When a search-and-rescue team reports a bearing of 235°T from a rescue base, they mean: face North, then rotate 235° clockwise. The back bearing (055°T) tells the ship's crew the direction back to base." Quick check: "Which true bearing is equivalent to the compass bearing S40°E?" (C, 140°T).

### Source lesson05, `we-1`, trap 03, drills and Q1

`we-1`: "(a) Convert 155°T to a compass bearing. (b) Convert N65°W to a true bearing." ("$\mathbf{S25°E}$"; "$360° - 65° = \mathbf{295°T}$"). Trap 03: "A bearing of 045°T has a back bearing of 225°T (add 180°). A bearing of 300°T has a back bearing of 120°T (subtract 180°)." Fill the gap: back bearing of 112°T (292°T). Drill 1: "(a) 070°T (b) 160°T (c) 240°T (d) 320°T" (N70°E, S20°E, S60°W, N40°W). Drill 2: back bearings of 045°T, 200°T, 310°T, 090°T (225°T, 020°T, 130°T, 270°T). Matching: 035°T, 120°T, 245°T, 310°T with N50°W, S65°W, S60°E, N35°E. Q1: "A plane flies from airport A on a bearing of 112°T ... (a) Convert 112°T to a compass bearing. (b) State the bearing from B back to A." (S68°E; 292°T).

## 3. Recalculation

- `we-1`: 180 − 155 = 25, S25°E; 360 − 65 = 295, 295°T. Quick check: 180 − 40 = 140°T. Drill 1: N70°E, S20°E, S60°W, N40°W. Drill 2: 225°T, 020°T, 130°T, 270°T. Matching: 035°T = N35°E, 120°T = S60°E, 245°T = S65°W, 310°T = N50°W. Trap 03 and fill the gap: 225°T, 120°T, 292°T. Search and rescue: 235 − 180 = 055°T. Q1: S68°E, 292°T.
- Question 1: 063°T = N63°E; S35°W = 180 + 35 = 215°T; the farmhouse from the shed: 215 − 180 = 035°T (N35°E). Question 2: 360 − 304 = 56, N56°W; 304 − 270 = 34° north of west; return 304 − 180 = 124°T = S56°E.

Every value above was checked by the conversion script in `work/brief-standard-t/recalc_pack.py` (integer arithmetic; output beside it). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Measuring anticlockwise, or from east, for a true bearing.
- Two-digit true bearings (45°T for 045°T).
- Compass bearings measured from E or W (E30°N) instead of from N or S.
- Reading "the bearing of A from B" at A instead of at B.
- Back bearing found by subtracting from 360° instead of adding or subtracting 180°.
- Wind names: a southerly blows from the south (towards 000°T); a direction word can name where something comes from, so read the question.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A large coded rose with N, E, S, W; a sweep arm turns clockwise from north and its true bearing reads live (three digits, T); the same arm then reads as a compass bearing with the arc drawn from the nearer of N or S.
- Four quadrant cards (NE, SE, SW, NW) each showing which of 0°, 180° or 360° the conversion is measured from, built one at a time as the narration converts one bearing in each.
- A farm map (top view) with the homestead at the centre and landmarks; bearings of each from the homestead, then the homestead from a landmark, with a new north line drawn at the landmark and the 180° turn shown.
- The wind chip as an aside: a weather card "southerly" with an arrow coming from the south.

Advanced reuse (visual parts only): `BearingRose` with `sweeps`, `readout` (true and compass), `markers`, `rings` and `reverse` (a11-trig-bearings.tsx); helpers `fmtBearing`, `compassLabel`, `compassToTrue`, `reverseBearing`; `NorthLine` inside `BearingJourney`. Plates: `physics/phys-y11-plotting-compass-v1.png` (inspect; a real compass for the opening), a farm seen from above (new `ms12-` plate, shared with t05 and t10; ruling 17: paint it for t03's final frame). Kit needs: a **MapPins** overlay (labelled landmark pins on a top-view plate, each with a bearing arm from a chosen centre), small and reused by t05 and t10.

## 6. Two original candidate practice questions

### Question 1

From a farmhouse, the dam is on a bearing of 063°T and the shearing shed is on a bearing of S35°W. (a) Write the bearing of the dam as a compass bearing. (b) Write the bearing of the shed as a true bearing. (c) Find the true bearing of the farmhouse from the shed.

**Worked answer:** (a) 063°T is between north and east, measured from north: N63°E. (b) S35°W is 35° past south towards west: 180° + 35° = 215°T. (c) The way back is 180° different: 215° − 180° = 035°T.

### Question 2

A harbour ferry leaves the wharf on a bearing of 304°T. (a) Write this as a compass bearing. (b) How many degrees north of due west is the ferry heading? (c) On the return trip the ferry sails directly back. Write the return bearing as a true bearing and as a compass bearing.

**Worked answer:** (a) 304°T is in the north-west quarter: 360° − 304° = 56°, so N56°W. (b) Due west is 270°T: 304° − 270° = 34° north of west. (c) 304° − 180° = 124°T, which is 180° − 124° = 56° from south towards east: S56°E.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "035°T", crossed, "S35°W is measured from south, so add 180°"; for Question 2 (c): "056°T", crossed, "the reverse is 180° different, not 360° minus"). Answers were checked by script. Ferry bearings are example values, not a real route.

## 7. Everyday anchors

- **Landmarks on a farm from the homestead:** the dam, the shed and the gate each have a bearing; the homestead from the shed is the bearing back (farming; the same farm returns in t05 and t10's survey).
- **A harbour ferry leaving the wharf:** a course written on a chart as a true bearing (travel; why boats and planes use three-digit bearings).
- **A weather report's "southerly":** named for where the wind comes from, so its air moves towards 000°T (weather; a reading-the-question trap in one sentence).

Varied everyday contexts (farming, travel, weather). Repeat check (grepped 18 November 2026): Advanced t02b uses the yacht at sea and t06 the yacht's journey home, so no yacht leads here; the site's search-and-rescue base and plane stay as worked numbers only; "ferry", "homestead" and "southerly" have no hits; Advanced t02 pack named "a phone compass" and "orienteering" as candidates (not used in the designs), so neither is used here. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 8: MS-44 (the page is titled Year 11, Module 2), MS-46 (the hook uses "northeast" and "southeast" without saying they are 045°T and 135°T until the revisit card).

Decisions for Claude:

- **Sketch first, then convert:** the site's card 05 is a four-row rule table; teach it as one picture (the arm and the nearer of N or S) and let the table be the key notes, not the method.
- **Named directions:** say once that NE, SE, SW and NW are halfway between (045°T, 135°T, 225°T, 315°T), because HSC questions and the site's own hook use them; the syllabus's two systems stay the focus.
- **"From":** one scene on "the bearing of the farmhouse from the shed" with the north line drawn at the shed.
- **Standard 1 path:** identical.
- **Pace: fits** (6 to 7 minutes).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
