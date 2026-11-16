# math-a11-t06: How does the cosine rule correct Pythagoras for any triangle?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci96840b09` (Trigonometry with angles of any magnitude): Examine the proof of the sine rule a/(sin A) = b/(sin B) = c/(sin C), cosine rule c^2 = a^2 + b^2 - 2ab cos C and the area of a triangle formula A = 1/2 ab sin C for a given triangle ABC [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.
- `ci5fb5a13c` (Trigonometry with angles of any magnitude): Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

Shared points: `ci96840b09` and `ci5fb5a13c` are split across t05 (sine rule and area), t06 (cosine rule) and t07 (ambiguous case and choosing a rule).

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t05: The sine rule, the perpendicular h, degrees and minutes. math-a11-t04: cos θ < 0 for 90° < θ < 180°. math-a11-t02: True bearings and a new north line at each turning point.

**Prior video:** math-a11-t05.

**Start:** Open on t05's handoff: a triangle with two sides and the angle between them known (no side-and-opposite-angle pair), with the sine rule crossed and the question "how long is the third side?".

**Stop:** Examine the proof of c² = a² + b² − 2ab cos C by dropping the same perpendicular and using Pythagoras in both right-angled triangles; see Pythagoras as the case C = 90° and the term 2ab cos C as a correction that subtracts for acute C and adds for obtuse C; find a side from two sides and the included angle; find an angle from three sides with cos C = (a² + b² − c²)/2ab, including obtuse angles (negative cosine); solve a two-leg bearings journey with a non-right turn. This video owns the cosine rule parts of `ci96840b09` and `ci5fb5a13c`. The ambiguous case and choosing between rules are t07.

**Next:** math-a11-t07.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry-and-measure-of-angles/lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `d72d51d79e4278e3cd9f772db88ac9cb3f2005e9d4ad11428c3d2c492ffdd354`. Title: The Cosine Rule. Lesson id maths-adv-y11-m2-l17.

Data-step ids: `recall-your-gut-answer-first`, `pythagoras-with-a-correction-term`, `what-you-ll-master`, `proving-the-cosine-rule`, `model`, `quick-fire-practice`, `revisit-the-right-angled-case`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson07.sa.html, `we-1`

PROBLEM 1 · THIRD SIDE FROM SAS In triangle $ABC$, $a = 11$ cm, $b = 7$ cm and $C = 62^\circ$. Find $c$ to one decimal place. 1 $c^2 = 11^2 + 7^2 - 2(11)(7)\cos 62^\circ$ Substitute; $c$ is opposite the given angle $C$. 2 $= 121 + 49 - 154\cos 62^\circ = 170 - 72.31$ Evaluate the correction term. 3 $c^2 \approx 97.69$, so $c \approx 9.9$ cm Square root once, at the end.

### Source trigonometry-and-measure-of-angles/lesson07.sa.html, `we-2`

PROBLEM 2 · ANGLE FROM SSS A triangle has sides 5 m, 6 m and 10 m. Find its largest angle, to the nearest minute. 1 The largest angle faces the longest side, so find the angle opposite $10$ Set $c = 10$, $a = 5$, $b = 6$. 2 $\cos C = \dfrac{25 + 36 - 100}{2(5)(6)} = \dfrac{-39}{60} = -0.65$ A negative cosine, so the angle is obtuse. 3 $C \approx 130.54^\circ = 130^\circ 32'$ Inverse cosine, then $0.54 \times 60 \approx 32$ minutes.

### Source trigonometry-and-measure-of-angles/lesson07.sa.html, card 02 "Pythagoras with a correction term"

When $C = 90^\circ$, $\cos C = 0$ and the rule collapses to $c^2 = a^2 + b^2$. For any other angle the term $2ab\cos C$ corrects Pythagoras: it subtracts when $C$ is acute and adds when $C$ is obtuse, because $\cos C$ is then negative.

### Source trigonometry-and-measure-of-angles/lesson07.sa.html, card 05 "Proving the cosine rule"

Drop a perpendicular of height $h$ from $B$ to $AC$, meeting it at $H$, and let $AH = x$, so $HC = b - x$. Pythagoras in the left triangle gives $c^2 = h^2 + x^2$, and in the right triangle $a^2 = h^2 + (b-x)^2$. Also $x = c\cos A$. Expanding the second equation and substituting gives $a^2 = b^2 + c^2 - 2bc\cos A$. Relabelling the vertices produces the version for any angle.

### Source trigonometry-and-measure-of-angles/lesson07.sa.html, card 06, worked numbers

For example with $a = 8$, $b = 5$ and $C = 60^\circ$: $c^2 = 64 + 25 - 2(8)(5)(0.5) = 89 - 40 = 49$, so $c = 7$.

### Source trigonometry-and-measure-of-angles/lesson07.sa.html, comprehensive answers

Practice 1: $c^2 = 36 + 64 - 96\cos 40^\circ \approx 26.5$, $c \approx 5.1$. Practice 2: $\cos C = \frac{49+81-144}{126} \approx -0.111$, $C \approx 96.4^\circ$. Practice 3: $b^2 = 225 + 400 - 600\cos 110^\circ \approx 830.2$, $b \approx 28.8$. Practice 4: cosine is negative only for angles between $90^\circ$ and $180^\circ$. Q1 (3 marks): $y^2 = 13^2 + 9^2 - 2(13)(9)\cos 56^\circ$ [1]. $= 169 + 81 - 234(0.5592) = 250 - 130.8$ [1]. $y^2 \approx 119.2$, so $y \approx 10.9$ cm [1]. Q2 (4 marks): The largest angle is opposite the longest side, 80 m, because a larger side subtends a larger angle [1]. $\cos \theta = \frac{45^2 + 62^2 - 80^2}{2(45)(62)} = \frac{2025 + 3844 - 6400}{5580}$ [1] $= \frac{-531}{5580} \approx -0.0952$ [1]. $\theta \approx 95.46^\circ = 95^\circ 28'$ [1].

Other parts of this lesson (we-3 (choosing between rules) is t07) are deferred source context, not part of this video.

Read-only source: [trigonometry-and-measure-of-angles/lesson09.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson09.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e0ae3bd8d9a5a543f04916f3b607ea3d619e08a94811cebe6ee3bba536af1b84`. Title: Bearings, Elevation and Depression. Lesson id maths-adv-y11-m2-l19.

Data-step ids: `recall-your-gut-answer-first`, `two-conventions-one-diagram`, `what-you-ll-master`, `true-and-compass-bearings`, `model`, `quick-fire-practice`, `revisit-the-plane-overhead`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, card 07 "Two-leg journeys"

Draw the first leg from the starting point, then draw a **new north line** at the turning point and measure the second bearing from that. The angle inside the triangle at the turning point is found from the two bearings and the parallel north lines. Often it is $180^\circ$ minus the difference of the bearings, but derive it from the diagram rather than memorising a formula. Once you have two sides and that included angle, the cosine rule gives the direct distance home. The sine rule then gives the bearing back.

Other parts of this lesson (both worked journeys turn through 90° (t02); a non-right turn is original here) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 06: a = 8, b = 5, C = 60°: c² = 89 − 40 = 49, c = 7. Fill-the-blank: 3, 4, 90° gives 5.
- we-1: c² = 170 − 154 cos 62° = 170 − 72.30 = 97.70, c = 9.88 ≈ 9.9 cm. we-2: cos C = (25 + 36 − 100)/60 = −13/20 = −0.65, C = 130.54° = 130°32'.
- Quick-fire: c² = 100 − 96 cos 40° = 26.46, c = 5.14 ≈ 5.1; sides 7, 9, 12: cos C = −14/126 = −0.111, C = 96.4°; b² = 625 − 600 cos 110° = 830.2, b = 28.8.
- Short answers: Q1 y² = 250 − 234 cos 56° = 250 − 130.85 = 119.15, y = 10.9 cm; Q2 cos θ = −531/5580 = −0.0952, θ = 95.46° = 95°28'.
- Original journey: 12 km on 040°, then 9 km on 100°: interior angle 180° − 60° = 120°, d² = 144 + 81 − 216 cos 120° = 333, d = 18.25 km; bearing of the finish from the start 065.3° (checked by coordinates).

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Matching the wrong side to the angle: in c² = a² + b² − 2ab cos C, c is opposite C.
- Computing (a² + b² − 2ab) × cos C, or forgetting the 2.
- Rejecting a negative cosine as an error instead of reading it as an obtuse angle.
- Square-rooting and rounding before the end.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The same `StudioTriangle` as t05, with AH = x and HC = b − x on the base: Pythagoras written in each half, then expanded and combined in `AlignedAlgebra` with x = c cos A substituted.
- A hinge demonstration: two sides a and b fixed, the angle C opening from acute through 90° to obtuse, with c² compared with a² + b² on a live bar (`ParameterSlider` and `LiveReadoutBoard`): less, equal, more.
- A two-leg journey on the `BearingRose` from t02 with a new north line at the turn and the interior angle built from the parallel north lines.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

Two straight paths leave a park gate at an angle of 118° to each other. One is 350 m long and the other is 420 m long. Find the straight-line distance between their far ends, to the nearest metre.

**Worked answer:** d² = 350² + 420² − 2(350)(420) cos 118° = 298 900 − 294 000 cos 118° ≈ 436 925, so d ≈ 661 m.

### Question 2

A triangle has sides 7 cm, 8 cm and 13 cm. Find the exact size of its largest angle.

**Worked answer:** The largest angle is opposite 13 cm. cos θ = (49 + 64 − 169)/(2 × 7 × 8) = −56/112 = −1/2, so θ = 120°.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A dog-leg golf hole: 250 m from the tee to the bend, 150 m from the bend to the green, with a 140° angle at the bend; how far is the green in a straight line? (sport; 377 m)
- An A-frame stepladder: two 2 m legs opened to a known angle; the cosine rule gives the spread at the feet (building and DIY).
- The tips of a clock's hour and minute hands: two hand lengths and the angle between them at a given time give the gap between the tips (home).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- This video owns the cosine rule, its proof, SAS and SSS, and the non-right bearings journey. The site's journeys are right-angled, so the 12 km at 040° then 9 km at 100° journey is original (interior angle 120°).
- The site's proof assumes H falls between A and C (acute A). Keep that case; a one-line note can say the obtuse case gives the same result.
- Keep "largest angle opposite the longest side" (Q2) because t07 uses it to avoid the ambiguous case.
- Join: the next pack (math-a11-t07) opens on this video's final frame. Its start reads: Open on t06's handoff: two sides and a non-included angle (a = 7 cm, b = 9 cm, A = 40°, the site's we-1), with the calculator's single answer B = 55.7° and the question "is that the only triangle?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
