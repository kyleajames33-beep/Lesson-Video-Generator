# math-a11-t03: How does a point on a circle define trig ratios for any angle?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci50c304a5` (Trigonometry with angles of any magnitude): Represent angles of any magnitude using rays from the origin in the Cartesian plane and describe how one ray represents infinitely many angles [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: partial. Gap: Coterminal angles and the terminal side are named, but the idea that one ray represents infinitely many angles is not developed in degrees on the Cartesian plane.
- `ci95d785c0` (Trigonometry with angles of any magnitude): Develop the definitions cos θ = x/r, sin θ = y/r and tan θ = y/x, where (x, y) is a point on the circle of radius r, centred at the origin, and θ is the angle between the positive x-axis and the radius drawn to this point [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: partial. Gap: Only the unit circle (r = 1) is used. The definitions cos = x/r, sin = y/r, tan = y/x on a circle of radius r are not developed.
- `cif067a2a2` (Trigonometry with angles of any magnitude): Use the definitions cos θ = x/r, sin θ = y/r and tan θ = y/x to evaluate sin θ, cos θ and tan θ where θ is a multiple of 90°, and identify the values of θ for which these ratios are undefined [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: partial. Gap: Values at multiples of 90 degrees and undefined tan are given in the domain-and-range lesson, not evaluated from the x/r, y/r, y/x definitions.
- `cieed954eb` (Trigonometry with angles of any magnitude): Extend and apply the definitions cos θ = x/r, sin θ = y/r and tan θ = y/x for angles of any magnitude [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t01: Exact values at 30°, 45° and 60°. math-a11-t02: SOH CAH TOA for acute angles. math-a11-w24: A circle centred at the origin, x² + y² = r², from Pythagoras.

**Prior video:** math-a11-t02.

**Start:** Open on t02's handoff: an angle of 120° drawn from the positive x-axis with no right-angled triangle that contains it, and the question "sin 120° = ?".

**Stop:** Represent any angle by a ray from the origin, measured anticlockwise (positive) or clockwise (negative) from the positive x-axis, and see that one ray stands for infinitely many angles (θ ± 360°, ...); define cos θ = x/r, sin θ = y/r and tan θ = y/x for the point (x, y) where the ray meets the circle of radius r; show these agree with SOH CAH TOA for acute angles; evaluate sin, cos and tan at 0°, 90°, 180°, 270° and 360° and say why tan 90° and tan 270° are undefined (x = 0); use the definitions for any angle (signs from the coordinates). Related angles and ASTC are t04; radians are t08.

**Next:** math-a11-t04.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry-and-measure-of-angles/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e872ed18a75577bd5194696893ef09241155424d0fd2e1710fce3dd6b9b4cc9f`. Title: The Unit Circle. Lesson id maths-adv-y11-m2-l03.

Data-step ids: `orient`, `the-unit-circle-identity`, `what-you-ll-master`, `the-unit-circle-what-s`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson03.sa.html, `we-1`

PROBLEM 1 · COORDINATES ON THE UNIT CIRCLE Find the exact coordinates of the point on the unit circle corresponding to $\theta = \frac{2\pi}{3}$. 1 Quadrant II ($\frac{\pi}{2} < \frac{2\pi}{3} < \pi$) Identify the quadrant first. 2 $\alpha = \pi - \frac{2\pi}{3} = \frac{\pi}{3}$ Find the reference angle. 3 $\cos \frac{\pi}{3} = \frac{1}{2}$, $\sin \frac{\pi}{3} = \frac{\sqrt{3}}{2}$ Use special triangle values. 4 In QII: cos negative, sin positive. $P\left(\frac{2\pi}{3}\right) = \left(-\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$ Apply ASTC signs.

### Source trigonometry-and-measure-of-angles/lesson03.sa.html, step `what-you-ll-master`, key term

Terminal side The ray that rotates from the positive $x$-axis to form angle $\theta$.

### Source trigonometry-and-measure-of-angles/lesson03.sa.html, card 05 "The unit circle, what's actually going on"

If you start at the point $(1, 0)$ and rotate anticlockwise by an angle $\theta$, the point where you land is: $$P(\theta) = (\cos \theta, \sin \theta)$$ This means the $x$-coordinate is $\cos \theta$, the $y$-coordinate is $\sin \theta$, and the gradient of the line from the origin is $\tan \theta = \frac{\sin \theta}{\cos \theta}$.

### Source trigonometry-and-measure-of-angles/lesson03.sa.html, step `drill`, items 1 to 4

1 Find the coordinates on the unit circle for $\theta = \pi$. 2 Find the coordinates on the unit circle for $\theta = \frac{5\pi}{4}$. 3 Find the coordinates on the unit circle for $\theta = -\frac{\pi}{2}$. 4 Find the coordinates on the unit circle for $\theta = \frac{5\pi}{6}$.

### Source trigonometry-and-measure-of-angles/lesson03.sa.html, drill answers

Drill 1: $(-1, 0)$ Drill 2: $\left(-\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$ Drill 3: $(0, -1)$ Drill 4: $\left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$

Other parts of this lesson (the reference-angle formulas, ASTC, we-2, we-3 and the traps are t04; the "predict then reveal" item (sin θ = −0.6) is t15. The site works in radians; this video uses degrees (2π/3 = 120°, π = 180°, 5π/4 = 225°, −π/2 = −90°, 5π/6 = 150°)) are deferred source context, not part of this video.

Read-only source: [trigonometric-identities-and-equations/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `2e682dc6bfe7234c7dc21341876e36f9dfff920f15f65bd6e320a05358fa138d`. Title: Domains and Ranges of Trigonometric Functions. Lesson id maths-adv-y11-m2-l09.

Data-step ids: `orient`, `domain-and-range-at-a`, `what-you-ll-master`, `systematic-analysis-of-all-six`, `common-traps`, `drill-build-fluency`, `revisit-bounded-vs-unbounded`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson04.sa.html, card 06, worked example

Find all values of $x$ in $[0, 2\pi]$ where $\tan x$ is undefined. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Step 1: Recall the restriction. $$\tan x = \frac{\sin x}{\cos x} \text{ is undefined when } \cos x = 0$$ Step 2: Solve $\cos x = 0$ in $[0, 2\pi]$. $$x = \frac{\pi}{2}, \frac{3\pi}{2}$$

Other parts of this lesson (ranges, reciprocal domains and transformed ranges are t10 and t12 or Year 12) are deferred source context, not part of this video.

Read-only source: [trigonometry-and-measure-of-angles/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c5567890cd293140e6854d340537573f0b4b64b68e211af6f8bbb0ac9bc3f90a`. Title: Angles & Radian Measure. Lesson id maths-adv-y11-m2-l01.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-a-radian`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson01.sa.html, `we-3`

PROBLEM 3 · COTERMINAL ANGLE Find a positive and a negative angle coterminal with $\dfrac{7\pi}{4}$. 1 $\dfrac{7\pi}{4} + 2\pi = \dfrac{15\pi}{4}$ Add $2\pi$ for the positive coterminal. 2 $\dfrac{7\pi}{4} - 2\pi = -\dfrac{\pi}{4}$ Subtract $2\pi$ for the negative coterminal.

Other parts of this lesson (conversions and the radian definition are t08; we-3's coterminal angles are used here in degrees (7π/4 = 315°: 675° and −45°)) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson03 we-1 in degrees: P(120°) = (−1/2, √3/2). Drills in degrees: P(180°) = (−1, 0), P(225°) = (−√2/2, −√2/2), P(−90°) = (0, −1), P(150°) = (−√3/2, 1/2). Recall: P(45°) = (√2/2, √2/2).
- Multiples of 90°: sin 0°, 90°, 180°, 270°, 360° = 0, 1, 0, −1, 0; cos = 1, 0, −1, 0, 1; tan = 0, undefined, 0, undefined, 0 (x = 0 at 90° and 270°). TI04 card 06: tan undefined at π/2 and 3π/2, that is 90° and 270°.
- lesson01 we-3 in degrees: 315° + 360° = 675°, 315° − 360° = −45°. Skateboard spins: 540° lands on the same ray as 180°, 720° on the same ray as 0°.
- Original radius-r example: (−3, 4) on x² + y² = 25: r = 5, cos θ = −3/5, sin θ = 4/5, tan θ = −4/3 (θ = 126.87°).

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Swapping the coordinates: x goes with cos, y with sin.
- Calling tan 90° "infinity" or 0 instead of undefined.
- Thinking a negative angle must be wrong, or that 400° is "not an angle".
- Dividing by 1 out of habit: on a circle of radius r, cos θ = x/r, not x.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A coded circle of radius r with a ray that turns through any signed angle: the point (x, y), a drop to the x-axis forming the triangle with sides x, y and r, and live readouts x/r, y/r and y/x that change sign with the coordinates (new part `StudioCirclePoint`).
- A lap counter on the same ray: 120°, 480°, −240° land on one ray, the ray glowing while the counter ticks (same new part, coterminal mode).
- At 90° and 270° the readout "y/x" turns to "undefined: x = 0" in the mistake colour; at 0°, 180°, 360° the point sits on the x-axis.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

The point P(−5, −12) lies on a circle centred at the origin, and θ is the angle from the positive x-axis to OP. Find the radius, and the exact values of sin θ, cos θ and tan θ.

**Worked answer:** r = √(25 + 144) = 13. sin θ = y/r = −12/13, cos θ = x/r = −5/13, tan θ = y/x = 12/5.

### Question 2

(a) Evaluate sin 270° + cos 180° + tan 360°. (b) For 0° ≤ θ ≤ 360°, for which θ is tan θ undefined? (c) Write two other angles, one of them negative, that share a ray with 50°.

**Worked answer:** (a) −1 + (−1) + 0 = −2. (b) 90° and 270°, where x = 0. (c) For example 410° and −310°.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- Skateboard spin tricks named 180, 360 and 540: a 540 ends facing the same way as a 180, so one ray stands for many angles (sport).
- A car's steering wheel turned through 120°, or one and a half turns: the marker on the rim is a point on a circle of radius r (travel).
- A record on a turntable: the dot on the label goes round a circle and its height and sideways position are y and x (music).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- Minor: lesson03 card 05 says GPS receivers "solve triangles using the sine and cosine of orbital angles" and that "the unit circle extends these trig functions ... making global positioning possible". GPS works mainly from distances (signal travel times). Drop the claim or say "navigation uses angles of any size".
- Minor: lesson03's "predict then reveal" says "Every sine value between −1 and 1 has two solutions in one turn, never one." True only for values strictly between −1 and 1 (sin θ = 1 and −1 have one solution each in [0, 2π)).
- Minor: lesson03 short answer Q3 awards half marks ([0.5]); HSC marks are whole numbers.

Decisions for Claude:

- `ci95d785c0` is partial: the site uses the unit circle only. Teach on a circle of radius r, then let r = 1 as the special case (the (−3, 4), r = 5 point is original).
- `ci50c304a5` is partial: coterminal angles appear in radians in lesson01. Teach the ray in degrees, with negative angles and laps.
- `cif067a2a2` is partial: the site states tan is undefined at 90° but never evaluates the multiples of 90° from x/r, y/r and y/x. Evaluate all five from the point on the axes.
- Order note: the site teaches the unit circle in radians before this point in the course. This route uses degrees until t08, which reuses the radian forms of these examples.
- Join: the next pack (math-a11-t04) opens on this video's final frame. Its start reads: Open on t03's handoff: rays at 30° and 150° on the circle, their points at the same height, and the question "sin 150° = sin 30°?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
