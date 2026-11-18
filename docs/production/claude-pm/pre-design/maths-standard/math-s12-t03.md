# math-s12-t03: How do Pythagoras and trig solve height and distance problems with angles of elevation and depression?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `cif644212f`: Solve practical problems involving Pythagoras’ theorem, the trigonometry of right-angled and non-right-angled triangles, angles of elevation and depression, and true bearings and compass bearings [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered. Shared with t05 (bearings) and t11 (non-right-angled triangles); this video owns Pythagoras with right-angled trigonometry and elevation and depression.

Standard 1 (Year 12, Right-angled triangles):

- `ci0f40c78b`: Apply Pythagoras’ theorem to solve practical problems in two dimensions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea). Site coverage: covered (crosswalk; the matched section, lesson04 `use-two-observations`, has no Pythagoras: see MS-46).
- `cid1949529`: Solve practical problems involving Pythagoras’ theorem, the trigonometry of right-angled triangles, angles of elevation and depression, and true bearings and compass bearings [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea). Shared with t05 (bearings).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2. Playlist order 53 (ruling 46 positions). `ci0f40c78b` is a Standard 1-only point (Standard 2 has Pythagoras inside `cif644212f`); this video must carry one Pythagoras-only practical problem so Standard 1 students meet it in Year 12.

**Entry knowledge:** math-s11-a06: `cib49e1f1d` (Pythagoras' theorem; recall, not re-teach: the site's Year 11 lesson03); math-s12-t01: `ci74344e24`, `ci07db556a` (a side from a ratio, unknown on top or underneath); math-s12-t02: `cif8689656` (an angle from two sides, degrees and minutes).

**Prior video:** math-s12-t02.

**Start:** t02's final frame (proposed): a drone hovering over a sports field, a coded sight line from a corner flag to the drone and the chip "how far away, and at what angle?".

**Stop:** Choosing Pythagoras (two sides known, third side wanted, no angle) or a trig ratio (an angle involved); the horizontal reference line drawn first; angle of elevation (measured up from the horizontal) and angle of depression (measured down from the horizontal); why the depression angle from the top equals the elevation angle from the bottom (two horizontal lines are parallel, alternate angles), so it can be placed at the bottom of the triangle; tan for height and horizontal distance, sin or cos when the sight line is given; adding a height on top of a height (the site's antenna); a two-step problem with two angles of depression and a subtraction. Not taught: the two-observation simultaneous equation (site `we-4`; see decisions), bearings (t04).

**Next:** math-s12-t04.

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at 5d74a627):

- [trigonometry/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson04.sa.html), SHA256 `4e23fb50272901b0c90e2685cc1f47bb90752d8588b9099f26dbc57bfe02ba9a`. Sections used: `orient-to-elevation-and-depression` (cards 01, 02, 04), `look-up-and-look-down` (card 05), `work-three-sightline-examples` (`we-1` to `we-3`), `avoid-the-sightline-traps`, `drill-elevation-and-depression` (drills 1 to 4, 6), `revisit-elevation-and-depression`, `practise-elevation-and-depression` (SA 1, SA 2). Not used: `use-two-observations` (`we-4`, drill 5, SA 3).
- [applications-of-measurement/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/applications-of-measurement/lesson03.sa.html) (Year 11, Pythagoras' Theorem), SHA256 `d455522169e2dd699c8d6dc70c7560c521f05015ae71e2e030ec231e2f02ee01`. Sections used: `recall-your-gut-answer` (the ladder hook), `worked-examples-3-in` (`we-1`, `we-2`), for a one-scene recall.

### Source lesson04, cards 01, 02 and 05

Hook: "You are on a cliff looking down at a boat. Your friend in the boat looks up at you. You both measure the angle from the horizontal to your line of sight. Do you get the same angle or different angles? Why?" Card 02: "Every elevation and depression problem starts with a horizontal reference line drawn from the observer's eye. The angle opens between that horizontal and the line of sight, never from the vertical, never from the slope." "Key fact: The angle of elevation from A to B equals the angle of depression from B to A. ... the angles are alternate interior angles." "In elevation/depression problems, O = vertical height and A = horizontal distance. Use $\tan\theta = O/A$. Only use $\sin$ or $\cos$ when the hypotenuse (line-of-sight distance) is given or required." Card 05: "Common diagram error: Placing the right angle at the observer's position, or marking the angle from the vertical side. The right angle is at the base of the object's height, not at the observer."

### Source lesson04, `we-1` to `we-3`

`we-1`: "From a point 45 m from the base of a vertical building, the angle of elevation to the top is 38°. Find the height of the building" ("$x = 45 \times 0.78128\ldots = 35.16 \text{ m}$"). `we-2`: "From the top of a cliff 80 m high, a boat is observed at sea with an angle of depression of 24°. Find the horizontal distance" ("$x = \dfrac{80}{0.44522\ldots} \approx 179.69 \text{ m}$"; correct value 179.68 m, MS-41). `we-3`: "A 12 m antenna sits on top of a 40 m building. An observer stands 75 m from the base of the building. Find the angle of elevation to the top of the antenna, to the nearest minute." (52 m; $34°44'$).

### Source lesson04, traps, drills and SA

Trap 01: "Omitting the horizontal reference line from the diagram". Trap 02: "If the angle is 30° from horizontal, it is not 30° from vertical (that would be the complement, 60°)." Drills: 54.02 m (tree), 199.71 m (cliff and boat), 35°0', 26°34' (flagpole on a building), 210.34 m (sight line from a lighthouse, by sine). SA 1: cliff 220 m away at 34° (148.39 m). SA 2: "A ship is sailing toward a 45 m lighthouse at sea level. From the ship, the angle of elevation to the top of the lighthouse is 12°. ... After the ship travels closer, the angle of elevation becomes 28°. How far has the ship travelled?" (212 m, 85 m, 127 m).

### Source Year 11 lesson03 (recall only)

Hook: "A 5 m ladder leans against a wall with its base 1.5 m from the wall. How high up the wall does it reach, without measuring?" `we-1`: "shorter sides 6 cm and 8 cm" (10 cm). `we-2`: "hypotenuse 15 m and one shorter side of 9 m" (12 m).

## 3. Recalculation

- lesson04: `we-1` 35.1579, so 35.16 m; `we-2` 80 ÷ tan 24° = 179.6829, so **179.68 m** (site 179.69 from the rounded tan, MS-41); `we-3` tan⁻¹(52/75) = 34.7349°, so 34°44'; quick check 94.04 m (option B); drills 54.02 m, 199.71 m, 34.9920° so 35°0', 26.5651° so 26°34', 210.34 m; SA 1 148.39 m; SA 2 211.71 and 84.63 m, difference 127.08, so 127 m (the site's 212 − 85 also gives 127); `we-4` 47.00 m and 60.16 m and SA 3 38.48 m and 54.95 m (checked, not used).
- Year 11 lesson03: ladder √(25 − 2.25) = 4.7697, so 4.77 m; 10 cm; 12 m.
- Question 1: √(40² + 75²) = 85 m exactly; tan⁻¹(40/75) = 28.0725°, so 28°4'. Question 2: 32 ÷ tan 41° = 36.8118; 32 ÷ tan 23° = 75.3873; gap 38.5755, so 39 m.
- Flagpole anchor: 25 tan 31° = 15.02 m.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). Site answers match apart from `we-2`'s last digit.

## 4. Misconceptions and HSC-style traps

- No horizontal line drawn, so the angle is measured from the vertical or from the slope.
- Putting the depression angle inside the triangle at the top (where the interior angle is 90° minus it) instead of moving it to the bottom.
- Right angle drawn at the observer instead of at the foot of the height.
- Using sin or cos when only the height and the horizontal distance are involved (tan).
- Forgetting a height on top of a height (antenna on a building), or an eye height when one is given.
- Rounding each distance before subtracting in a two-step problem (usually harmless; say "keep the calculator values").
- Using Pythagoras with one side and an angle (it needs two sides).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- One scene with both angles: a coded horizontal line at the top and at the bottom, the sight line between, the elevation arc at the bottom and the depression arc at the top lighting together, then a Z traced through the parallel lines (alternate angles).
- The depression angle "sliding" from the top to the bottom corner so the triangle reads like t01's.
- A drone over a sports field for Pythagoras and elevation in one picture: height 40 m, ground distance 75 m, sight line 85 m; the squares on the sides for the Pythagoras recall.
- A rooftop looking down at two parked cars: two depression angles, two triangles sharing the building's height, the subtraction shown as a gap on the ground line.

Advanced reuse (visual parts only): `ElevationView` (a11-trig-bearings.tsx: elevation, depression, the alternate-angle Z, the "from the vertical" wrong mark and a live readout); `StudioTriangle` with `squares` (Pythagoras) and `triRight`; `HandTag`. Plates: `physics/phys-y11-drone-side-v1.png` (inspect: Advanced a12-d12 uses a drone for a camera-tilt rate, so the drone here is plate reuse with a different question; root may prefer another object); `maths/ma12-tower-block-v1.png` (an apartment block, inspect before use); `ma11-sea-cliff-v1.png`, `ma11-yacht-side-v1.png` and `ma11-coastal-lookout-v1.png` are Advanced t02a's anchor and should not lead this video. Kit needs: a two-triangle mode of ElevationView (two objects on one ground line under one height), small.

## 6. Two original candidate practice questions

### Question 1

A drone hovers 40 m above level ground. Its launch pad is 75 m from the point on the ground directly below it. (a) Find the straight-line distance from the launch pad to the drone. (b) Find the angle of elevation of the drone from the launch pad, correct to the nearest minute.

**Worked answer:** (a) The height and the ground distance are the two shorter sides, so Pythagoras: √(40² + 75²) = √7225 = 85 m. (b) tan θ = 40 ÷ 75; θ = tan⁻¹(40/75) = 28.07°; 0.0725 × 60 = 4.35, so 28°4'.

### Question 2

From the top of a 32 m apartment building, the angles of depression to two cars parked in a straight line on the same side of the building are 41° and 23°. How far apart are the two cars, correct to the nearest metre?

**Worked answer:** Each angle of depression equals the angle of elevation at its car. Nearer car: tan 41° = 32 ÷ d₁, d₁ = 32 ÷ tan 41° = 36.81 m. Further car: d₂ = 32 ÷ tan 23° = 75.39 m. Gap = 75.39 − 36.81 = 38.58, so 39 m.

Only the question goes on the card (Question 2 without a diagram, as a worded HSC item; Question 1 with a sketch). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "32 × tan 41° = 27.82 m", crossed, "the distance is next to the angle, so divide: 32 ÷ tan 41°"; for Question 1 (a): "40 + 75 = 115 m", crossed, "square, add, then square root"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A drone over a sports field:** 40 m up and 75 m out from its launch pad, 85 m away along the sight line, at about 28° above the horizontal (sport and technology; Pythagoras and a trig angle from one picture).
- **A rooftop and the car park below:** looking down at two parked cars at 41° and 23° (city life; depression and a two-step subtraction).
- **The school flagpole:** stand 25 m from it and a phone clinometer app reads 31°: the pole is about 15.02 m tall (school; a height you cannot reach).

Varied everyday contexts (sport, city, school). Repeat check (grepped 18 November 2026): Advanced t02a's anchor is a yacht under a sea cliff, so the site's cliff-and-boat examples stay as worked numbers only, without the painted cliff; "drone" appears in Advanced a12-d11 and d12 (a camera tilting at a steady rate), a different question, flagged above; "flagpole" and "car park" have no hits. Claude picks; none is required. Objects, never people (the clinometer is a phone on a stand).

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 8: MS-41 (`we-2` 179.69 m for 179.68 m), MS-43 (lesson02's depression trap says the angle sits "inside the right-angled triangle"), MS-45 (the two-observation method), MS-46 (no Year 12 Pythagoras practice for the Standard 1 point).

Decisions for Claude:

- **Two-observation problems (site `we-4`, drill 5, SA 3):** the site solves d tan 52° = (d + 30) tan 38° by collecting d terms. That algebra is heavier than the Standard pace needs and is not named in the point; the same situation is solvable as two separate right-angled triangles when the height is known (site SA 2, Question 2). Recommendation: teach the two-step subtraction; leave the simultaneous version out (MS-45 owner note).
- **Pythagoras for Standard 1 (`ci0f40c78b`):** one recall scene (the site's Year 11 ladder, 4.77 m) and one practical use (the drone's 85 m sight line). Say when to choose it: two sides known, no angle involved.
- **The depression angle:** show it outside the triangle at the top and equal to the angle at the bottom; avoid the site's "inside the right-angled triangle" wording (MS-43).
- **Standard 1 path:** identical; this is the video that carries the Standard 1-only Pythagoras point.
- **Pace: watch.** Pythagoras recall, two definitions, the alternate-angle reason, a stacked height and a two-step problem fit about 8 to 9 minutes if Pythagoras is recalled, not re-taught, and the simultaneous version is left out.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
