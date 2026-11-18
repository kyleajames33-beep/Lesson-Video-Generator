# math-s12-t01: How do sine, cosine and tangent find a missing side of a right-angled triangle?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `ci74344e24`: Apply trigonometric ratios to right-angled triangles to find either the lengths of unknown sides or the size of unknown angles in both degrees, and degrees and minutes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered. Shared with math-s12-t02: this video owns the sides, t02 the angles.

Standard 1 (Year 12, Right-angled triangles):

- `ci07db556a`: Apply trigonometric ratios to find the lengths of unknown sides in right-angled triangles given an angle in both degrees, and degrees and minutes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2. First video of the strand for both courses; playlist order 51 (root ruling 46: r01 to r14 come before t01 to t11, so the ruled positions are r01 to r14 = 37 to 50 and t01 to t11 = 51 to 61; see the route inputs' recommendations).

**Entry knowledge (outline dependency list):** math-s11-a06: `cib49e1f1d` (Pythagoras' theorem; the hypotenuse is the longest side, opposite the right angle); math-s11-f03: `cib54d5e23` (changing the subject of a formula, needed when the unknown sits underneath). The 2024 Year 11 Standard course has **no** trigonometric-ratio point (the crosswalk's Year 11 Applications of measurement points stop at Pythagoras), so this video introduces sine, cosine and tangent from the start; Stage 5 trigonometry may be a memory for some students, never an assumption.

**Prior video:** math-s12-r14 (Standard 2) and math-s12-r13 (Standard 1); both end on the same picture (ruling 45).

**Start (rulings 45, 53 and 55):** the house plate `physics/phys-y11-house-v1.png` with the coded amber right-angled triangle on the roof's left end (left eave corner, along the roof edge to the ridge's left end, straight down to eave height, back along the eave line), "35°" at the eave corner, "?" on the vertical side, the grey tag "not to scale", chips "Ratios and rates: done" and "Next: right-angled triangles". r14's narration says "This roof rises from the gutter at an angle of thirty-five degrees. How high does it go?"

**Roof angle: confirmed at 35° (ruling 55 asks this pack to confirm).** Reasons: (1) 35° is the site's own trigonometry hook (lesson01: "Two right-angled triangles both have a 35° angle, but one is much larger"), so the opening mirrors the site and its "same ratio, any size" idea; (2) r14 already speaks "thirty-five degrees" and r13 labels it, so no narration changes; (3) the coded overlay with "not to scale" carries the angle (ruling 53), which is ordinary HSC diagram practice, while the painted pitch is about 24°. A 25° alternative would match the painting better but buys nothing the tag does not already cover. Recommendation: keep 35°; r13 and r14 can be voiced once the t01 design confirms it.

**Stop:** Label a right-angled triangle from a chosen angle (hypotenuse opposite the right angle; opposite across from the angle; adjacent touching the angle, not the hypotenuse); why a ratio of two sides depends only on the angle (any 35° right-angled triangle has opposite ÷ hypotenuse ≈ 0.5736, big roof or small shed); sin, cos and tan as those three ratios (SOH CAH TOA); choose the ratio from the two sides involved; unknown on top (multiply) and unknown underneath (rearrange, then divide), with the check that a hypotenuse must be the longest side; an angle given in degrees and minutes typed as degrees + minutes ÷ 60; calculator in degree mode (sin 90 = 1 check); round only at the end. Finding an angle is t02.

**Next:** math-s12-t02.

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at 5d74a627):

- [trigonometry/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson01.sa.html), SHA256 `bbddb5ce1c17fbe9cad548c75ca6a38af0b1b0f4fe6817dbe5f126488ac290bd`. Sections used: `orient-to-trigonometry` (cards 01, 02, 04), `label-any-triangle` (card 05), `work-three-ratio-examples` (`we-1`, `we-2`), `avoid-the-ratio-traps`, `drill-the-ratios` (drills 1 to 10), `revisit-trigonometry-thinking`, `practise-trigonometry-ratios` (Q1, Q3).
- [trigonometry/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson02.sa.html), SHA256 `42bde378ce705b9019cb1ea6cfd2b1e31b3c0f109f7e1dd75500d13ace6e6c8f`. Sections used: `orient-to-unknown-sides` (card 02), `label-before-you-solve`, `work-three-side-examples` (`we-1` to `we-3`), `avoid-the-side-traps` (traps 01, 02), `drill-unknown-sides` (drills 1 to 4), `revisit-unknown-sides`, `practise-unknown-sides` (Q1).

### Source lesson01, cards 01, 02 and 05

Hook: "Two right-angled triangles both have a 35° angle, but one is much larger. The ratio of opposite to hypotenuse is the same in both. Why? And how does that let us find unknown sides?" Card 02: "For any right-angled triangle with a given angle $\theta$, the ratios of pairs of sides are fixed they depend only on the angle, not the size of the triangle." "SOH: $\sin\theta = \dfrac{O}{H}$, Opposite over Hypotenuse", "CAH: $\cos\theta = \dfrac{A}{H}$", "TOA: $\tan\theta = \dfrac{O}{A}$". Card 05: "Take any right-angled triangle with a 35° angle. Make it bigger. Make it smaller. As long as that angle stays at 35°, the ratio of any two sides stays exactly the same." "Labelling process (5 seconds, every time): Mark the right angle / Circle the reference angle (the one you know or are finding) / Label H opposite the right angle / Label O opposite the circled angle / Label A the remaining side". "Algebra beats memory. Never try to remember "multiply or divide" as a rule. Always write the equation ($\sin\theta = O/H$) and solve algebraically." Revisit: "For any 35° right-angled triangle in the world, $O \div H = \sin 35° \approx 0.5736$."

### Source lesson01, `we-1` and `we-2`

`we-1`: "In a right-angled triangle, the reference angle is 32°, the hypotenuse is 15 cm, and $x$ is the opposite side. Find $x$ correct to 2 decimal places." "$x = 15 \times \sin 32° = 15 \times 0.52992... = 7.95\text{ cm}$". `we-2`: "the reference angle is 48°, the adjacent side is 9 m, and the hypotenuse is unknown." "$H = \dfrac{9}{\cos 48°} = \dfrac{9}{0.66913...} = 13.45\text{ m}$" "Common error: $H = 9 \times \cos 48° = 6.02$ m, impossible since H is the hypotenuse (longest side)."

### Source lesson01, traps, drills and Q3

Trap 02: "$\sin(32)$ in radian mode gives $0.5514$ instead of $0.5299$." Trap 03: "$\cos 48° = \dfrac{9}{H}$ becomes $H = 9 \times \cos 48°$ (wrong, multiplied instead of divided)." Fill the gap: "A reference angle of 55° with adjacent = 10 m and opposite = unknown ... $O = 10 \times \tan 55° \approx$ m" (14.28). Drills 5 to 10: 6.88 cm, 12.86 m, 10.76 cm, 15.21 m, 7.81 cm, 12.37 m. Q3: "A ramp rises from ground level to a platform. The ramp makes an angle of 15° with the horizontal. The horizontal distance is 6 m." (6.21 m; 1.61 m).

### Source lesson02, `we-1` to `we-3` and drills

`we-1`: "the hypotenuse is 18 m and one angle is 38°. Find the side opposite the 38° angle" (11.08 m). `we-2`: "angle 52° and the adjacent side is 9.4 cm. Find the hypotenuse" (15.27 cm). `we-3`: "A ladder makes an angle of 63°24' with the ground. If the ladder reaches 4.6 m up a vertical wall, find the length of the ladder" with "$63°24' = 63 + \dfrac{24}{60} = 63.4°$" and "$H = \dfrac{O}{\sin\theta} = \dfrac{4.6}{\sin 63.4°} \approx \dfrac{4.6}{0.8942} \approx 5.15 \text{ m}$" (correct value 5.14 m: MS-41). Trap 02: "$\sin(63°24')$ typed directly gives the wrong answer. Convert first". Drill 4: "$\theta = 35°30'$, H $= 20$ m. Find O" (11.61 m). Revisit: the ramp rising 1.2 m at 15°, "$H = \frac{1.2}{\sin 15°} \approx ... \approx 4.63$ m". Quick match (wire to a pole at 65°, 4.5 m out): option "B, 9.64 m" (correct value 9.65 m: MS-42).

## 3. Recalculation

- lesson01: sin 35° = 0.573576; `we-1` 7.9488, so 7.95 cm; `we-2` 13.4503, so 13.45 m, slip 6.02 m; radian sin 32 = 0.5514; fill the gap 14.28 m; drills 6.88, 12.86, 10.77 (site 10.76 is 10.765 rounded down; see note), 15.21, 7.81, 12.38 (site 12.37; see note); Q1 13.58 cm; Q3 6.21 m and 1.61 m.
- lesson02: `we-1` 11.08 m; `we-2` 15.27 cm; `we-3` 4.6 ÷ sin 63.4° = 5.1445, so **5.14 m** (site 5.15, MS-41); quick check 16.58, option C (16.6 cm); drills 10.04 cm, 12.00 cm, 11.91 m, 11.61 m, 76.9 m; quick match 9.6503 (site option 9.64, MS-42); revisit 4.636, so 4.64 m (site 4.63 from the rounded 0.2588: 1.2 ÷ 0.2588 = 4.6368; see note); Q1 5.71 m and 1.85 m; Q3 1.49 km and 3.53 km.
- Note on three last-digit values: lesson01 drill 7 (8 ÷ cos 42° = 10.7651) and drill 10 (5 ÷ tan 22° = 12.3754) round to 10.77 and 12.38; the site prints 10.76 and 12.37. lesson02's revisit 1.2 ÷ sin 15° = 4.6364 rounds to 4.64; the site prints 4.63. All three are recorded in MS-41 with `we-3`.
- Roof anchor: rafter 5.5 m at 35°: height 5.5 sin 35° = 3.1547, so 3.15 m; run 5.5 cos 35° = 4.5053, so 4.51 m; height ÷ run = 0.7002 = tan 35°. Shed roof, 2 m rafter at 35°: height 1.1472 m; height ÷ rafter = 0.5736 again.
- Question 1: 52°18' = 52.3°; 45 sin 52.3° = 35.6051, so 35.61 m. Question 2: 2.4 ÷ sin 58° = 2.8300, so 2.83 m; slip 2.4 sin 58° = 2.04 m; peg distance 2.4 ÷ tan 58° = 1.4997, so 1.50 m.
- Kite anchor: 40 m of string at 50°: 30.64 m.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py` for the site, `recalc_pack.py` for the pack; outputs beside them). The site answers match apart from the five listed (`we-3`, two drill answers, the revisit and the quick-match option). Keep the site's numbers, with the corrected 5.14 m if `we-3` is used.

## 4. Misconceptions and HSC-style traps

- Labelling O and A from the right angle instead of the chosen angle; not relabelling when the other acute angle is used.
- Choosing the ratio from the triangle's look instead of the two sides involved.
- Unknown underneath: writing H = 9 × cos 48° (a "hypotenuse" shorter than a leg).
- Calculator in radian mode (sin 32 = 0.5514).
- Typing 63.24 for 63°24' (minutes are sixtieths, not hundredths).
- Rounding sin 35° early (0.57 × 5.5 = 3.14, not 3.15).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The house plate with the roof triangle (the r13 and r14 frame), then the triangle lifting off the plate as a coded diagram; a small shed roof at 35° slides beside it, and both scale to the same shape (the ratio readout "opposite ÷ hypotenuse = 0.5736" stays fixed while the triangle grows and shrinks).
- Labelling sequence on the triangle: right-angle box, the chosen angle ringed, H, O, A written one at a time; then the chosen angle switches to the other corner and O and A swap (the slide in `StudioTriangle`'s `focus`).
- A coded calculator screen: "sin 35 = 0.5736 (DEG)" and the radian slip "0.5514 (RAD)" crossed; "63°24' → 63 + 24 ÷ 60 = 63.4".
- g01 boards for the roof height (unknown on top) and one unknown underneath (site `we-2` or the shade-sail rope), with the "longest side" check as a hand tag.

Advanced reuse (visual parts only, ruling 7): `StudioTriangle` with `triRight`, `triScale` (the same 35° shape at two sizes), `focus` and `focusWords` (opposite and adjacent labels sliding when the chosen angle changes), `fmtDMS` and `MinutesDial` (a11-trig-triangle.tsx; MinutesDial runs here in reverse, minutes ÷ 60); `StudioToolPanel` (integration-parts.tsx) as the calculator screen. Plates: `physics/phys-y11-house-v1.png` (the join, inspected for r13), a garden shed (new `ms12-` plate, or a coded shed outline if the opening reads clearly without it), a kite (new plate, only if Claude uses the kite anchor). Kit needs: none essential (see `../../checks/maths-standard-kit-needs-t.md`).

## 6. Two original candidate practice questions

### Question 1

A kite's string is tied to a peg in the ground. The string is 45 m long, it is pulled straight, and it makes an angle of 52°18' with the level ground. How high is the kite above the ground? Give your answer correct to two decimal places.

**Worked answer:** The string is the hypotenuse and the height is opposite the angle, so sine. 52°18' = 52 + 18 ÷ 60 = 52.3°. sin 52.3° = h ÷ 45, so h = 45 × sin 52.3° = 35.61 m.

### Question 2

A shade sail is held up by a vertical pole 2.4 m tall. A guy rope runs from the top of the pole to a peg in the level ground and makes an angle of 58° with the ground. (a) Find the length of the rope, correct to two decimal places. (b) How far is the peg from the foot of the pole?

**Worked answer:** (a) The pole is opposite 58° and the rope is the hypotenuse: sin 58° = 2.4 ÷ r, so r = 2.4 ÷ sin 58° = 2.83 m. (b) tan 58° = 2.4 ÷ d, so d = 2.4 ÷ tan 58° = 1.50 m.

Only the question goes on the card (with its diagram for Question 2). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2 (a): "2.4 × sin 58° = 2.04 m", crossed, "the rope is the hypotenuse, so it must be longer than 2.4 m"). Answers were checked with SymPy.

## 7. Everyday anchors

- **The house roof (the join, ruling 45):** a roofer's sheet runs 5.5 m up the slope at 35°: the roof rises about 3.15 m, and the ceiling run under it is about 4.51 m (home; one triangle gives a sine, a cosine and a tangent).
- **A garden shed beside the house, also at 35°:** a 2 m rafter rises 1.15 m; 1.15 ÷ 2 and 3.15 ÷ 5.5 are both 0.57 (home; the site's "two 35° triangles, one much larger", made into objects).
- **A kite on a long string:** 40 m of string at 50° puts the kite about 30.6 m up (leisure; why you cannot measure the height directly).

Varied everyday contexts (home, leisure). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "kite" has no maths hits; "shed" none as an anchor; "roof pitch" appears only as an unused candidate in the Advanced t02 pack and in a12-i05, which is not trigonometry; Advanced t01 uses a sandwich and a pool rack, t02a a yacht under a cliff, t11 a backyard flying fox). The shade-sail rope in Question 2 is also new. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 8: MS-41 (lesson02 `we-3` gives 5.15 m for 5.14 m, and three last-digit drill and revisit values), MS-42 (lesson02 quick-match option 9.64 m for 9.65 m), MS-44 (lessons 01 to 05 are titled Year 11, Module 2).

Decisions for Claude:

- **Roof angle:** keep 35° (section 1). Pick a measured side for the opening: the 5.5 m slope (a roofer's sheet length) gives the height by sine and the run by cosine, so one picture carries two ratios; a run of about 4.5 m would give tan first. The site teaches SOH first (`we-1`), so the slope is the closer mirror.
- **Why it works before the rule:** show the two 35° roofs (house and shed) with the same ratio before naming sine, as the site's card 05 does ("Make it bigger. Make it smaller.").
- **Degrees and minutes as given angles:** the syllabus asks for both; use lesson02 `we-3` (63°24', with the corrected 5.14 m) or Question 1 (52°18'). Finding an angle in degrees and minutes is t02.
- **Unknown underneath:** say the reason (the unknown is the bottom of the fraction, so multiply both sides by it, then divide), matching the site's "Algebra beats memory"; Standard 1 students meet the same rearrangement (`ci07db556a` asks for unknown sides in both positions).
- **Spoken symbols:** "sine", "cos" said as "cos" with "cosine" at first use, "tan" with "tangent"; θ named "theta, the angle we're using" at first use (ruling 36 pattern).
- **Standard 1 path:** identical video; Standard 1 joins here from r13, Standard 2 from r14 (the same frame).
- **Pace: at risk.** Labelling, the reason ratios are fixed, three ratios, unknown on top, unknown underneath, degrees and minutes and degree mode are all new for Year 11 graduates of the 2024 course. Suggested split if a design cannot be taught under 570 s (ruling 8 pattern): **t01a** (label, why the ratio is fixed, SOH CAH TOA, unknown on top: the roof height and run) and **t01b** (unknown underneath, the hypotenuse check, an angle given in degrees and minutes, degree mode: the shade-sail rope and the site's ladder). Both parts serve both courses.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
