# Year 12 Physics M5 V20: Kepler's laws. How do Kepler's laws describe circular and elliptical orbits? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,679 characters, 16 scenes, about 519 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How does the force of gravity determine the motion of planets and satellites?". Templates as `phys-y12-m5-v17.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson17.sa.html`, SHA256 `01842919fdfa6884fe4144bf4197bb53f8d91c2f43873464c113dadcc13b8f8e` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m5-v20`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use equal areas and ellipse focus qualitatively, and T squared proportional to semimajor axis cubed quantitatively. Distinguish circular r from elliptical semimajor axis." Next: "phys-y12-m5-v21: Why does gravitational potential energy use a zero at infinity?"

**Learner question (small wording change, recorded).** Route: "How do Kepler laws describe circular and elliptical orbits?" Used: "How do Kepler's laws describe circular and elliptical orbits?" (possessive added; meaning unchanged).

Owner rules applied: as v17 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: Kepler, Tycho Brahe and Newton are named, never drawn; the Sun, Earth, Mars and Halley's comet are painted plates; ellipses, foci, sectors, arrows and tables are coded; every number recalculated in Python; real orbital data from NASA fact sheets and NASA's Halley page; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v09 (torque needs a perpendicular moment arm), v15 (a perpendicular force changes direction, not speed), v18 (r³/T² = GM/4π² for circular orbits).

Syllabus content (Physics Stage 6 (2017), Module 5; ledger id `P5-IQ3-04`), quoted from the route JSON `syllabusActions`:

- `P5-IQ3-04`: "investigate the relationship of Kepler’s Laws of Planetary Motion to the forces acting on, and the total energy of, planets in circular and non-circular orbits using: (ACSPH101)" "v=(2πr)/(T)", "(r^(3))/(T^(2))=(GM)/(4π^(2))"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 54)

**Boundary:** starts on v19's final frame (a dashed ellipse around Earth with Earth at one focus). Teaches: Halley's comet as the case (fast near the Sun, slow far out); the three laws as descriptions found from Tycho's Mars data and later explained by Newton's gravity; the first law (ellipse, two foci, constant sum of distances, Sun at one focus, semi-major axis a, perihelion and aphelion, the circle as the special case a = r); the second law (equal areas in equal times, faster when nearer); the force explanation (gravity's component along or against the motion; perpendicular in a circle; no torque about the Sun); r_p v_p = r_a v_a from thin-triangle areas, checked with Earth; the third law T² ∝ a³ with the same constant for one central body, a in place of r, checked with Mars; Halley's period from its two extreme distances; the "one extreme as a" mistake. Energy appears only as the handoff (the syllabus "total energy" part is carried by v21 and v22, which build U = −GMm/r and E = −GMm/2r; v22's design links back to the comet). Stops before eccentricity calculations, vis-viva and Hohmann transfers (site optional).

## Decisions

- **Learner question.** Possessive added (above). The answer, built in order: what Kepler found and why it is description, not cause (2); first law, the shape (3); second law, the speed (4); gravity's components as the cause (5); the r v rule at the extremes (6); third law, the size and period (7); applied to Halley (8) and its trap (9).
- **Hook (site lesson 17 hook "a comet shoots past faster when close to the Sun"; real data).** Halley's comet: perihelion 0.5871 AU on 9 February 1986, aphelion 35.25 AU in 1948, average period about 76 years, return in 2061 (NASA "1P/Halley"). Prediction with a 3 s countdown. The comet's motion on screen is computed from Kepler's equation for e = 0.967 (author note a).
- **Kepler and Tycho (site card 1).** One scene: twenty years of naked-eye Mars measurements; no circle fitted; an ellipse did; laws describe, Newton's gravity explains. No portraits; a coded page of tabulated angles and a Mars plate on a dashed circle that fails to match the plotted points.
- **First law.** The constant-sum property is shown with two coded lines from the foci to a moving point (no pins, string or hands). The circle as the special case (foci merge, a = r) carries the route's "distinguish circular r from elliptical semi-major axis". Eccentricity is shown only as a slider word "more stretched"; e = c/a is not taught (site lists it; not required by the route stop).
- **Second law and its cause (site card 2; the syllabus "relationship ... to the forces").** The cause is taught with forces, not energy, because U = −GMm/r is v21's: gravity always points at the Sun, so its component along the path speeds the planet on the way in and slows it on the way out; in a circle it is perpendicular (v15). The torque sentence (v09) explains why the swept rate is constant (site: "a central force gives zero torque"); "angular momentum" is not named (author note b).
- **The r v rule (site card 2).** Derived in one sentence from thin triangles (area ≈ ½ r v t when v is perpendicular to r). Checked with Earth: perihelion 147.095, aphelion 152.100 million km; NASA max and min orbital speeds 30.29 and 29.29 km s⁻¹; ratios 1.0340 and 1.0341.
- **Third law (site card 3, re-sourced).** Linked to v18's circular result, then stated for ellipses with a (Newton's generalisation stated, not derived). Units: a in astronomical units (Earth's average distance from the Sun, defined on first use) and T in Earth years, so the constant is 1 for the Sun; the site's own Mars check (687 days, 1.524 AU) is re-valued with NASA data (a = 1.5238 AU, T = 1.8808 yr; a³ = 3.537, T² = 3.537). SI use with a given central mass was v18's; noted in key note 3.
- **Worked example (new, real data).** Halley: a = (0.5871 + 35.25)/2 = 17.92 AU; T = 17.92^1.5 = 75.8 years ≈ 76 (NASA average 76). The crossed mistake (scene 9) uses 35.25 AU (209 years) and 0.587 AU (0.45 years).
- **Memory aid.** "Shape, speed, size." See "Memory aid check".
- **Attempts.** A1 (site's Jupiter worked example, in AU and years with NASA data): a = 5.20 AU, T = 11.9 years. A2 (new, NASA Mars data): perihelion 1.381 AU, aphelion 1.666 AU; faster at perihelion by 1.21. Crossed: A1 "cubing T and squaring a"; A2 "faster at aphelion" / inverted ratio.
- **Colour key.** As v17 to v19; swept areas pale amber, the semi-major axis navy, foci small navy crosses, velocity orange, gravity amber with its along-path component dashed orange and its perpendicular component dashed grey.
- **Handoff.** Scene 16 holds Halley at aphelion with a dashed line running outwards to "∞" and "U = ?" (v21).
- **Site sources used:** lesson 17 hook (comet), vocabulary (ellipse, semi-major axis, perihelion and aphelion), misconceptions (perfect circles; constant speed; Kepler only for the Sun's planets, in scene 7's "same for every planet around the Sun" and key note 3), card 1 (Tycho, Kepler 1609, the circular approximation), card 2 (equal areas, zero central torque, v_p/v_a = r_a/r_p, Earth's perihelion and aphelion), card 3 (T² ∝ a³, circular derivation, a for ellipses), Review Mars check (scene 7, re-valued), the "Account 5 marks" comet answer (its force half only; the energy half is v22), Activity 1 (Halley in year and AU units, here from real perihelion and aphelion data). Not used: eccentricity table and e = c/a; vis-viva worked example; Hohmann transfers and exoplanets (site optional); the 4.2 × 10⁸ m moon example (SI is v18's).
- **Site notes (for root to log if accepted):**
  1. Lesson 17, Activity 1 MC: "Halley's comet has a period of 75.3 years ... semi-major axis is approximately 17.8 AU" (75.3^(2/3) = 17.83 AU) is correct as arithmetic; NASA quotes an average period of 76 years (74 to 79 years). Not an error; suggest "about 76 years".
  2. Lesson 17 MC on Earth's eccentricity: "perihelion about 3.4% closer than aphelion": (152.1 − 147.1)/152.1 = 3.3 % closer (aphelion is 3.4 % further than perihelion). Minor wording.
  - Checked and correct: vis-viva speeds 30.29 and 29.29 km s⁻¹; Jupiter 11.9 years; moon at 4.2 × 10⁸ m, 1.52 × 10⁵ s; Europa 6.71 × 10⁸ m; Mars T²/a³ = 1.33 × 10⁵ day² AU⁻³.
- **Cause chain taught, in order:** (1) Kepler's laws were found from data; gravity explains them (2); (2) the orbit is an ellipse with the Sun at a focus; a circle is the special case (3); (3) equal areas, so shorter radius means a longer arc per day (4); (4) gravity's along-path component speeds the planet on the way in and slows it on the way out; perpendicular in a circle; no torque about the Sun keeps the area rate fixed (5); (5) thin triangles give r_p v_p = r_a v_a (6); (6) T² ∝ a³ with one constant per central body; a replaces r (7); (7) a is the average of the extreme distances (8, 9).
- **Entry knowledge:** v09 torque, v15 perpendicular force, v18 circular-orbit relation; Year 11 vector components.
- **Learner-visible vocabulary:** ellipse and foci (3); semi-major axis a (half the longest width, 3); perihelion and aphelion (closest and furthest points from the Sun, 3); astronomical unit (Earth's average distance from the Sun, 7).
- **Legacy logic ported:** none. The coded `KeplerOrbit` visual (kit family `m5-kepler`, "equal times, equal swept areas") is the starting point for the orbit stage; its limits (ideal two-body motion) are respected.
- **New explainer motion:** **Kepler orbit stage** (kit gap 5: an ellipse with given a and e, the Sun plate at one focus, a body moving by Kepler's equation in real proportion, equal-time sectors filled pale amber with area readouts, velocity arrows from the model, the gravity arrow split into along-path and perpendicular components, constant-sum focus lines, perihelion and aphelion markers); a log-free AU scale bar; `AlignedAlgebra`; a T² and a³ table; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`.
- **No human figures.** Kepler, Tycho Brahe and Newton are named only.
- **Author notes (not learner copy):**
  (a) Halley: e = (35.25 − 0.5871)/(35.25 + 0.5871) = 0.9672 (NASA perihelion and aphelion). Screen drawings at true eccentricity are needle-thin; scene 1 draws the true shape small and scenes 3 to 5 use a teaching ellipse with e = 0.6 (tag "shape stretched less than Halley's").
  (b) Equal areas follow from zero torque about the Sun (angular momentum conservation, site card 2); the narration says "never twists the planet around the Sun". Mass ratios: the third law with one constant assumes M much larger than m (Jupiter's mass is 0.1 % of the Sun's).
  (c) Earth (NASA Earth Fact Sheet): perihelion 147.095 × 10⁶ km, aphelion 152.100 × 10⁶ km, max orbital speed 30.29 km s⁻¹, min 29.29 km s⁻¹; 152.100 / 147.095 = 1.0340; 30.29 / 29.29 = 1.0341. Narration "about three per cent faster" (3.4 %).
  (d) Mars (NASA Mars Fact Sheet): semimajor axis 227.956 × 10⁶ km = 1.5238 AU; sidereal period 686.980 days = 1.8808 yr; perihelion 206.650 × 10⁶ km = 1.3814 AU; aphelion 249.261 × 10⁶ km = 1.6662 AU (AU = 149.598 × 10⁶ km, Earth's semimajor axis).
  (e) Jupiter (NASA Jupiter Fact Sheet): semimajor axis 778.479 × 10⁶ km = 5.2038 AU; period 4,332.589 days = 11.862 yr. A1 uses 5.20 AU: T = 11.86 yr.
  (f) Halley (NASA science.nasa.gov "1P/Halley"): perihelion 0.5871 AU (9 Feb 1986), aphelion about 35.25 AU (1948), average period about 76 years, return 2061.
  (g) Pronunciations: "aff-ELL-ee-on" for aphelion (the common teaching pronunciation; "ap-HEE-lee-on" also accepted), "peri-HEE-lee-on", "FOH-sigh" for foci, "TEE-koh BRAH-hee".

- **Open decisions for root:**
  - **1. Plates (root).** New `y12p-comet-v1.png` (essential: the hook and worked example) and `y12p-mars-v1.png` (scene 2 and 7). Reused: `phys-y11-sun-v1.png`, `phys-y11-earth-v1.png`. Fallback for Mars: a small coded red disc.
  - **2. "Total energy" part of P5-IQ3-04 (root).** Covered by v21 and v22 (energy built from U = −GMm/r) rather than here, because zero-at-infinity energy is not yet taught. v22's design should name the comet case in its energy-trade scene; recorded there.
  - **3. Pronunciation of aphelion (voicing).** Check the Google voice's reading in the pilot (author note g).

Main question: *Halley's comet races past the Sun in months, then crawls for decades far beyond Neptune. How do Kepler's three laws describe that motion, and how do they apply to circles and ellipses?*
Entry knowledge: v09, v15, v18.
Stops after: the three laws; ellipse focus and semi-major axis; equal areas and its force cause; r_p v_p = r_a v_a; T² ∝ a³ with a; the circle as a special case. No energy calculations.
Handoff: v21, why gravitational potential energy uses a zero at infinity.

## Script and shots

Cue words in **bold** trigger the visual change. Paper background and handwritten headline face as the explainer house style.

### 1. hook (Halley's comet)
> Let's zoom out to the Sun and follow Halley's comet. In nineteen eighty-six it swung past the Sun at less than six tenths of Earth's distance from it. Then it headed out beyond Neptune, more than thirty-five times Earth's distance, and it won't be back until twenty sixty-**one**. It spends decades crawling far out, and only months racing near the **Sun**. Why does it move so much faster up close? Have a **think**.

Visual: opens on v19's final frame (see "Opening frame"); camera pull back hard: Earth shrinks to a dot on a small circle around the Sun plate (`phys-y11-sun-v1.png`). The comet plate (`y12p-comet-v1.png`, new, tail drawn pointing away from the Sun by rotation in code) moves on Halley's true-shape ellipse (e = 0.967, Sun at one focus), with a year counter. On "one" date chips appear at the two ends: "1986: 0.59 × Earth's distance" near the Sun and "1948: 35.25 × Earth's distance" far out; "2061" at the inner end. On "Sun" the comet replays in real proportion: about 3 s crawling across the outer half, then a whip round the Sun in a fraction of a second; a speed bar beside it shoots up near the Sun. On "think" the 3 s `Countdown` runs beside "Why faster near the Sun?" with chips "pulled harder", "a shorter path", "something speeds it up".

### 2. Kepler's three laws
> About four hundred years ago, Johannes Kepler worked through twenty years of careful measurements of Mars, made by Tycho Brahe without a telescope. No circle fitted them, however he adjusted it. What fitted was an **ellipse**. Kepler summed up planetary motion in three laws. They describe how planets move, and Newton's gravity later explained why.

Visual: clear change: a coded ledger page of Mars sky angles (grey hand-ruled columns, no names or faces) slides in at the left; plotted Mars positions (small red dots) appear around the Sun plate. A dashed circle tries to fit them and shifts twice, missing at two sides (red gap marks). On "ellipse" a navy ellipse snaps through every dot; the Mars plate (`y12p-mars-v1.png`, new) rides it. Heading writes on: "How do Kepler's laws describe circular and elliptical orbits?" and three empty slots "Law 1", "Law 2", "Law 3" appear in the right column.

### 3. law 1: an ellipse with the Sun at a focus
> Kepler's first law: each planet moves on an ellipse, with the Sun at one focus. An ellipse has two special points called foci. From any point on it, the two distances to the foci always add to the same **total**. The Sun sits at one focus, and the other is just empty **space**. Half the longest width is called the semi-major axis, a. The closest point to the Sun is the perihelion, and the furthest is the **aphelion**. Squash the foci together, and the ellipse becomes a circle, where a is just the radius.

Visual: camera change to the Kepler orbit stage with a teaching ellipse (e = 0.6, tag "stretched for clarity"). Two navy crosses mark the foci. A point travels round the ellipse with two navy lines to the foci; on "total" a readout "d₁ + d₂ = constant" holds steady while d₁ and d₂ change. On "space" the Sun plate settles on the left focus; the right focus gets a faint "empty" tag. The long axis draws; half of it highlights "a: semi-major axis". On "aphelion" markers "perihelion (closest)" and "aphelion (furthest)" at the two ends of the long axis. As "Squash" is spoken the foci slide together and the ellipse rounds into a circle with "a = r". The "Law 1" slot fills: "shape: ellipse, Sun at one focus".

### 4. law 2: equal areas in equal times
> Kepler's second law: a line from the Sun to the planet sweeps out equal areas in equal times. Near the Sun, that line is short, so to sweep the same area in a month, the planet has to cover a longer stretch of its **path**. Far away, the line is long, and a short stretch does the **job**. So a planet moves fastest at perihelion, and slowest at aphelion.

Visual: camera continue (ellipse again, e = 0.6). The planet moves by Kepler's equation; every equal time step a pale amber sector fills from the Sun to the arc travelled. On "path" a short, wide sector near perihelion pulses, its arc bracket long. On "job" a long, thin sector near aphelion pulses, its arc bracket short; both carry the same area readout "A". Orange speed arrows at both ends: long at perihelion, short at aphelion. The "Law 2" slot fills: "speed: equal areas in equal times, fast when near".

### 5. why: gravity's components
> Gravity explains it. Gravity always points at the Sun. As the planet falls inwards, part of that pull points along its motion, so it speeds **up**. On the way out, part of the pull points backwards, and it slows **down**. So gravity does work on it on the way in, and against it on the way out. In a circle, gravity is always at right angles to the motion, so the speed never changes. And because gravity points straight at the Sun, it never twists the planet around the Sun. That's why the area swept each month stays the **same**.

Visual: camera continue. At a point on the inward leg: the amber gravity arrow towards the Sun splits into a dashed orange component along the velocity and a dashed grey component across it; on "up" the orange speed arrow lengthens as the planet moves in. On "down" at a point on the outward leg the along-path component points backwards and the speed arrow shortens. As "In a circle" is spoken an inset circle shows gravity at a right angle to v with the right-angle mark (v15). On "same" a small torque note writes beside the Sun: "force through the Sun: no moment arm, no twist (torque = 0)" and the equal sectors pulse once together.

### 6. the speeds at the two ends
> At perihelion and aphelion, the velocity is at right angles to the line from the Sun. Over a short time, each swept area is close to a thin triangle, half times r times v times t. Equal areas means r times v is the same at both **points**. Earth is a hundred and forty-seven million kilometres from the Sun in January, and a hundred and fifty-two million in July. So in January it moves about three per cent **faster**. NASA lists thirty point three kilometres per second, against twenty-nine point three.

Visual: camera push to the two ends of the ellipse. A thin triangle at perihelion (base v t along the path, height r) and one at aphelion, both shaded amber, labelled "area ≈ ½ r v t". On "points" `AlignedAlgebra`: "½ r_p v_p t = ½ r_a v_a t", "r_p v_p = r_a v_a", "v_p / v_a = r_a / r_p" boxed. Then a near-circular Earth orbit (e = 0.017, true shape) with the Earth plate: "January: 147.1 × 10⁶ km", "July: 152.1 × 10⁶ km". On "faster" "v_p / v_a = 152.1 / 147.1 = 1.034"; a grey source chip "NASA: 30.29 and 29.29 km s⁻¹ (ratio 1.034)".

### 7. law 3: size and period
> Kepler's third law links the size of an orbit to its period. T squared is proportional to a cubed. For circles, we've already derived it from gravity: r cubed over T squared equals big G M over four pi squared. Newton showed the same holds for an ellipse, with the semi-major axis a in place of **r**. Measure a in astronomical units, Earth's average distance from the Sun, and T in years. Earth gives one and one. Mars has an a of one point five two four, and a period of one point eight eight one years. Cube one, square the other, and both come to three point five **four**.

Visual: clear change to a two-orbit diagram (Earth and Mars plates on their near-circular orbits around the Sun plate, true shapes). The right column: "r³/T² = GM/4π² (circles, from gravity)"; on "r" the r is replaced by a: "a³/T² = GM/4π²", tag "same constant for everything orbiting the Sun". A table writes: "Earth: a = 1 AU, T = 1 yr: a³ = 1, T² = 1"; "Mars: a = 1.524 AU, T = 1.881 yr"; on "four" "a³ = 3.54, T² = 3.54" both boxed; source chip "NASA Mars Fact Sheet". The "Law 3" slot fills: "size: T² ∝ a³, one constant per central body".

### 8. worked example: Halley's period
> Now Halley. Its closest distance from the Sun is zero point five eight seven astronomical units, and its furthest is thirty-five point two five. The long axis runs from one end to the other, so a is half their sum, about seventeen point nine **units**. With T squared equal to a cubed, T is seventeen point nine to the power one and a half, about seventy-six **years**. That matches the comet's real **return**. Notice we didn't need the Sun's mass, because Earth's orbit sets the constant.

Visual: camera change to Halley's true ellipse (scene 1), Sun at the focus. Task strip: "Find Halley's period." Equation strip: "T² = a³ (T in years, a in AU, around the Sun)". Givens grouped: "perihelion 0.587 AU", "aphelion 35.25 AU". The long axis lights end to end, "2a = 0.587 + 35.25 = 35.84 AU". On "units" "a = 17.92 AU" with the half-axis highlighted navy. On "years" "T = 17.92^1.5 = 75.8 years" boxed. On "return" a chip "NASA: average about 76 years; next return 2061".

### 9. the extreme-distance mistake
> Here's the classic mistake: using one of the distances as a. Use the furthest distance, and you'd predict over two hundred years. Use the closest, and you'd get less than half a year. The third law needs the semi-major axis, the average of the two **extremes**. A circle is the one case where those two distances are equal, so a is just r.

Visual: camera continue. Two chips write beside the ellipse: "a = 35.25 AU → T = 209 years" and "a = 0.587 AU → T = 0.45 years", each crossed in red. On "extremes" the navy half-axis pulses with "a = (r_min + r_max) / 2". Small tag "for a circle, r_min = r_max = r".

### 10. memory aid
> To keep the three laws apart, think shape, speed, size. The first law gives the shape, an ellipse with the Sun at one focus. The second gives the speed, fast when close and slow when far. And the third links the size, a, to the period, with T squared proportional to a **cubed**.

Visual: board clears to the three filled law slots, each with a tiny icon (ellipse with focus; equal sectors; a and T² ∝ a³). The handwritten line writes above: "Shape, speed, size." On "cubed" the third slot glows. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Jupiter's orbit around the Sun has a semi-major axis of five point two zero astronomical units. Using Earth's orbit as a reference, calculate Jupiter's orbital period in Earth years. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Jupiter orbits the Sun with a semi-major axis of 5.20 AU. Earth's orbit has a semi-major axis of 1.00 AU and a period of 1.00 year. Use Kepler's third law to calculate Jupiter's orbital period in years." Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Both orbit the Sun, so T squared over a cubed is the same, and for Earth it's one in these units. So T squared equals five point two zero cubed, about one hundred and forty-one, and T is about eleven point nine **years**. The slip to avoid is cubing the period and squaring the distance, the wrong way **round**.

Visual: card shrinks to the top. Rows: "T²/a³ = 1 (Earth, AU and years)", "T² = 5.20³ = 140.6", on "years" "T = √140.6 = 11.9 years" boxed. On "round" a chip "T³ = a² → T = 3.0 years" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Mars is one point three eight one astronomical units from the Sun at perihelion, and one point six six six at aphelion. At which of these points is Mars moving faster, and by what factor? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "At perihelion Mars is 1.381 AU from the Sun; at aphelion it is 1.666 AU from the Sun. (a) At which of these two points does Mars move faster? (b) Calculate the ratio of its speed at that point to its speed at the other point. Justify your answers using Kepler's second law." Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> It's faster at perihelion, the closer point. r times v is the same at both points, so the speed ratio is the inverse of the distance ratio: one point six six six over one point three eight one, about one point two **one**. The slip is flipping the ratio and saying it's faster far **away**.

Visual: card shrinks to the top; "Kepler's second law" underlines. A small ellipse with two thin triangles. Rows: "equal areas: r_p v_p = r_a v_a"; on "one" "v_p / v_a = r_a / r_p = 1.666 / 1.381 = 1.21" boxed, "(a) perihelion". On "away" a chip "faster at aphelion, ratio 0.83" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So Kepler's laws describe the shape, speed and size of every orbit, and gravity explains them. As Halley's comet falls in, it speeds up, trading one kind of energy for another. But how much gravitational energy does something have out in space? Next, we'll see why that energy uses a zero at **infinity**.

Visual: board clears to Halley's ellipse with the Sun plate; the comet at aphelion. As "falls in" is spoken a speed bar rises and an empty energy bar labelled "gravitational energy?" falls as the comet runs in, then the comet returns to aphelion. On "infinity" a dashed line runs from the comet outwards off the right edge to "∞", with a chip "U = ?" and the chip "Next: why does gravitational potential energy use a zero at infinity?". Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Kepler's first law (shape): each planet moves on an ellipse with the Sun at one focus. Semi-major axis a = half the longest width; a circle is the special case with a = r.
2. Kepler's second law (speed): the line from the Sun sweeps equal areas in equal times, so a planet is fastest at perihelion. At perihelion and aphelion r_p v_p = r_a v_a. Cause: gravity points at the Sun, so it speeds the planet on the way in and slows it on the way out.
3. Kepler's third law (size): T² ∝ a³, with a³/T² = GM/4π² the same for everything orbiting one central body. For the Sun, with a in AU and T in years, T² = a³.
4. Use the semi-major axis, a = (closest + furthest)/2, never one extreme distance.

Memory aid (large, on the notes screen): *Shape, speed, size.*

## Teaching checks

- **Does it explain causes?** Why the comet is fast near the Sun: equal areas need a longer arc when the radius is short (4), and gravity's along-path component speeds it up on the way in (5). Why the speed is constant in a circle: gravity is perpendicular (5). Why the swept rate is constant: gravity points through the Sun, no twist (5). Why r v is equal at the extremes: thin-triangle areas (6). Why a replaces r: the size of an ellipse is set by its semi-major axis (7, 9).
- **Misconceptions addressed:** orbits are perfect circles (2, 3); planets move at constant speed (4); the third law uses the instantaneous or extreme distance (9, key note 4); the third law only for planets (7); faster when far (crossed in 14).
- **One idea at a time:** each law in its own scene with its slot filled; the cause (5) after the description (4).
- **Video makes it easier:** the comet's real-proportion crawl and whip (1); the circle failing the Mars dots (2); the constant-sum lines (3); equal sectors of different shapes (4); the gravity arrow splitting (5); thin triangles (6); the table of matching numbers (7).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 20 s and 18 s.
- **Avoided double teaching:** v09 torque, v15 perpendicular force and v18's derivation recalled in a clause.
- **Syllabus coverage:** `P5-IQ3-04` Kepler's laws related to the forces for circular and non-circular orbits (3 to 7), with r³/T² = GM/4π² (7); the total-energy part is completed in v21 and v22 (open decision 2).
- **Out of scope by design:** eccentricity formula, vis-viva, Hohmann transfers, exoplanets (site extension).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, NASA data, 2 marks suggested).** "Jupiter orbits the Sun with a semi-major axis of 5.20 AU. Earth's orbit has a semi-major axis of 1.00 AU and a period of 1.00 year. Use Kepler's third law to calculate Jupiter's orbital period in years."
Model answer: For the same central body T²/a³ is constant: T_J² / 5.20³ = 1² / 1³, so T_J² = 140.6 and T_J = 11.9 years. Classic mistake (crossed): T³ = a², giving 3.0 years.

**Attempt 2 (scene 13; original, NASA data, 3 marks).** "At perihelion Mars is 1.381 AU from the Sun; at aphelion it is 1.666 AU from the Sun. (a) At which of these two points does Mars move faster? (b) Calculate the ratio of its speed at that point to its speed at the other point. Justify your answers using Kepler's second law."
Model answer: (a) Perihelion. The line from the Sun sweeps equal areas in equal times; nearer the Sun the line is shorter, so Mars must travel further along its path in the same time. (b) At these points v is perpendicular to r, so the area swept in a short time t is ½ r v t; equal areas give r_p v_p = r_a v_a, so v_p/v_a = 1.666/1.381 = 1.21. Classic mistake (crossed): faster at aphelion, ratio 0.83.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Halley (NASA) | perihelion 0.5871 AU (1986); aphelion 35.25 AU (1948); e = 0.967; return 2061; average period about 76 years | 1, 8, 9, 15 |
| Halley a and T | a = (0.5871 + 35.25)/2 = 17.92 AU; T = 17.92^1.5 = 75.85 years ≈ 76 | 8 |
| Mistake values | 35.25^1.5 = 209.3 years; 0.5871^1.5 = 0.450 years | 9 |
| Earth (NASA) | 147.095 and 152.100 × 10⁶ km; ratio 1.0340; speeds 30.29 and 29.29 km s⁻¹, ratio 1.0341 ("about three per cent") | 6 |
| Mars (NASA) | a = 1.5238 AU ("1.524"); T = 1.8808 yr ("1.881"); a³ = 3.537; T² = 3.537 ("3.54") | 7 |
| A1 | 5.20³ = 140.6; T = 11.86 ≈ 11.9 years; slip T = 5.20^(2/3) = 3.00 years | 11, 12 |
| A2 | 1.666 / 1.381 = 1.206 ≈ 1.21; inverse 0.829 ≈ 0.83 | 13, 14 |
| Teaching ellipse | e = 0.6 (screen only, tagged) | 3 to 5 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- Halley: (0.5871 + 35.25)/2 = 17.91855 AU; 17.91855^1.5 = 75.850 years; e = (35.25 − 0.5871)/(35.25 + 0.5871) = 0.96724. 35.25^1.5 = 209.28; 0.5871^1.5 = 0.44985.
- Earth: 152.100 / 147.095 = 1.034026; 30.29 / 29.29 = 1.034141.
- Mars: 227.956 / 149.598 = 1.523790 AU; 686.980 / 365.256 = 1.880818 yr; 1.523790³ = 3.537237; 1.880818² = 3.537476. Perihelion 206.650 / 149.598 = 1.381369 AU; aphelion 249.261 / 149.598 = 1.666205 AU; ratio 249.261 / 206.650 = 1.206199.
- Jupiter: 5.20³ = 140.608; √140.608 = 11.858 years; NASA 5.2038 AU and 11.862 years. 5.20^(2/3) = 3.000.

## Memory aid check

- **"Shape, speed, size."** New. Meaning, as said in scene 10: law 1 gives the orbit's shape (ellipse, Sun at a focus), law 2 its speed pattern (equal areas: fast when near), law 3 links its size (a) to its period (T² ∝ a³). Assumptions checked: law 3's single constant applies to bodies orbiting the same central mass, with that mass dominant (scene 7 says "for everything orbiting the Sun"; key note 3 says "one central body"). It helps a new case: A1 (size → period) and A2 (speed). Introduced after scenes 3 to 9.
- **Considered, not used:** "LEAH: Law of Ellipses, Areas, Harmonies" (adds names that HSC questions do not require).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,679 characters**, 16 scenes. Characters per scene (1 to 16): 405, 345, 497, 347, 520, 497, 569, 478, 335, 275, 215, 304, 219, 282, 301, 75. At 13.3 characters per second the speech is about 427 s; add about 3 s for the prediction countdown, about 4 s for the comet's real-proportion replay in scene 1, about 2 s for the circle-fit attempts in scene 2, about 2 s for the sector fills in scene 4, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 92 s of holds and countdowns): **about 519 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 2's Tycho clause (keep the ledger page); scene 6's NASA sentence (keep the chip); scene 8's last sentence.

## Opening frame

v19's final frame (`phys-y12-m5-v19.md`): paper background; the Earth plate small at the centre-left; a dashed navy ellipse around it with Earth at one focus and a satellite plate moving faster near Earth; heading "What makes an orbit geostationary rather than merely near Earth?"; chip "Next: how do Kepler's laws describe circular and elliptical orbits?". Scene 1 pulls the camera back so Earth becomes a dot orbiting the Sun; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 15): paper background; the Sun plate at the left focus of Halley's true-shape ellipse (drawn long and thin across the frame); the comet plate at aphelion at the right end; a dashed line from the comet off the right edge to "∞" with the chip "U = ?"; an empty energy bar "gravitational energy?" beside the comet; heading "How do Kepler's laws describe circular and elliptical orbits?"; chip "Next: why does gravitational potential energy use a zero at infinity?". v21 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v20` (route phys-y12-m5-v20). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v20`; build folder `docs/production/claude-pm/lessons/p-y12-m5-v20` (root to confirm).

In order (16 scene headings): hook, kepler-laws, law-1-ellipse, law-2-areas, gravity-cause, end-speeds, law-3, worked-halley, extreme-mistake, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). `motionTools`: Kepler orbit stage (kit gap 5), `AlignedAlgebra`, table, `Countdown`, `CameraStage`. Transitions: 1 camera pull back; 1 to 2 clear change; 2 to 3 camera change; 3 to 4 to 5 camera continue; 5 to 6 camera push; 6 to 7 clear change; 7 to 8 camera change; 8 to 9 camera continue; 9 to 10 clear change; attempts card shrink; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m5-v20-learning-review.md`, `checks/p-y12-m5-v20-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only):
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA, watercolour Sun): scenes 1 to 9, 15.
- `public/assets/physics/phys-y11-earth-v1.png`: scenes 1, 6, 7.
- **Checked, not used:** `public/assets/sun.png` (cartoon rays, off style).

Need (new plates, Codex), in priority order:
1. `y12p-comet-v1.png`: scenes 1, 8, 9, 15. Essential (the case the lesson explains).
2. `y12p-mars-v1.png`: scenes 2, 7. Useful; fallback a coded red disc.

Coded: ledger page, plotted dots, ellipses, foci, constant-sum lines, sectors, triangles, arrows and components, scale chips, tables, algebra, chips, cards, countdowns, notes board.

Kit gaps: 5. **Kepler orbit stage** (ellipse from a and e; body positions from Kepler's equation; equal-time sectors; velocity from the model; gravity split into along-path and perpendicular components; constant-sum focus lines; true-shape and teaching-shape modes).

## Codex asset brief (Year 12 Physics M5 v20: comet and Mars)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v20.md`. Paint after the reviews pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Transparent PNG with a true alpha channel, clean edges with no fringe or halo, ink and watercolour matched to `phys-y11-sun-v1.png` and `phys-y11-earth-v1.png`, at least 8 per cent clear margin, no text, labels, people, backdrop, stars or glow beyond the comet's own coma. Never stretch.

1. `y12p-comet-v1.png` (2000 × 800 px): a comet seen side-on: a small bright nucleus with a soft coma at the right, a long pale dust tail fanning to the left and a thinner straight bluish ion tail beside it, both tails fading to transparent. The nucleus must read at 30 px. Codex reports the nucleus centre in plate pixels (the code rotates the plate about it so the tails point away from the Sun).
2. `y12p-mars-v1.png` (1254 × 1254 px): Mars as a full sphere, rusty red with darker markings and a small white polar cap, soft limb shading, same edge style as the Earth plate. Codex writes `y12p-mars-v1.json` with centre and radius, matching the Earth plate's JSON.

Report inspection on the paper and dark backgrounds at about 400 px and at 30 px. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v20-provenance.json`.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used"; confirm the NASA figures against the cited fact sheets.
2. Confirm the physics of every learner-visible claim: ellipse with the Sun at one focus; constant sum of focal distances; equal areas in equal times; faster near perihelion through gravity's along-path component; perpendicular gravity in a circle; zero torque about the Sun; r_p v_p = r_a v_a at the extremes; T² ∝ a³ with a for ellipses and a constant per central body (author notes a to f).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (Kepler, Tycho Brahe and Newton named only).
8. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Kepler's Three Laws: Ellipses, Equal Areas and T² ∝ a³ | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson17.sa.html

Halley's comet races past the Sun in months, then crawls for decades beyond Neptune. Kepler's three laws describe it: orbits are ellipses with the Sun at one focus, equal areas are swept in equal times, and T² is proportional to a³. See how gravity explains each law, why planets are fastest at perihelion, and how to find Halley's 76-year period from its closest and furthest distances. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the relationship of Kepler’s Laws of Planetary Motion to the forces acting on, and the total energy of, planets in circular and non-circular orbits using: v = 2πr/T; r³/T² = GM/4π² (ACSPH101)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Planet and comet data: NASA. Next: why gravitational potential energy uses a zero at infinity.

#HSCPhysics #Physics #KeplersLaws #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the constant-sum ellipse definition needed or can it be a picture only; is the thin-triangle step followable at speed), then the physics check and the Codex error check.
- Judge the comet's real-proportion motion and the equal sectors at playback speed.
