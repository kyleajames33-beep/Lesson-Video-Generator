# math-a11-t15: How do we find every solution of a trig equation in a domain?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci84d04f4e` (None): Solve equations involving trigonometric ratios of angles, specified in degrees or radians, on a restricted domain [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t04: Related angles, quadrant signs, values of any angle. math-a11-t08: Radians and exact values at multiples of π/6 and π/4. math-a11-t10: Graphs of sin, cos and tan and their periods. math-a11-t02: Inverse ratios on a calculator.

**Prior video:** math-a11-t14.

**Start:** Open on t14's handoff: "sin θ = 0.5" with the calculator's single answer 30° and a sketch of y = sin x from 0° to 360° crossing y = 0.5 twice (lesson11 recall).

**Stop:** Solve equations sin θ = k, cos θ = k and tan θ = k on a restricted domain in degrees or radians: take the related acute angle from the inverse of |k|, place solutions in the quadrants the sign allows, keep those in the domain; check the count with the graph and the line y = k; rearrange first (2 sin x = 1; sin x = cos x becomes tan x = 1 when cos x ≠ 0); multiple angles such as sin 2θ = k by widening the domain, solving and dividing; exact answers and calculator answers in radian mode. General solutions (with n) are not required in Year 11. Equations that reduce to quadratics are t16.

**Next:** math-a11-t16.

## 2. Site order, sections and worked examples

Read-only source: [trigonometric-identities-and-equations/lesson11.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson11.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3da4f136d335dd65724facb9cb46000925f7555c05d72ac36f6df96cb177447a`. Title: Solving Trigonometric Equations Algebraically. Lesson id maths-adv-y11-m2-l20.

Data-step ids: `recall-your-gut-answer-first`, `one-from-the-calculator-the`, `what-you-ll-master`, `why-one-answer-is-never`, `model`, `quick-fire-practice`, `revisit-the-sine-curve-you`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson11.sa.html, `we-1`

PROBLEM 1 · A POSITIVE RATIO Solve $\sin\theta = 0.5$ for $0^\circ \leq \theta \leq 360^\circ$. 1 Related acute angle: $\sin^{-1}(0.5) = 30^\circ$ Take the inverse of the positive value. 2 $\sin\theta > 0$, so quadrants 1 and 2 ASTC selects the quadrants. 3 $\theta = 30^\circ$ and $\theta = 180^\circ - 30^\circ = 150^\circ$ Both lie in the domain.

### Source trigonometric-identities-and-equations/lesson11.sa.html, `we-2`

PROBLEM 2 · A NEGATIVE RATIO Solve $\cos\theta = -0.5$ for $0^\circ \leq \theta \leq 360^\circ$. 1 Related acute angle: $\cos^{-1}(0.5) = 60^\circ$ Use the positive value, not $-0.5$. 2 $\cos\theta < 0$, so quadrants 2 and 3 The sign chooses the quadrants. 3 $\theta = 180^\circ - 60^\circ = 120^\circ$ and $\theta = 180^\circ + 60^\circ = 240^\circ$ Both are inside the domain.

### Source trigonometric-identities-and-equations/lesson11.sa.html, `we-3`

PROBLEM 3 · A MULTIPLE ANGLE Solve $\sin(2\theta) = 0.5$ for $0^\circ \leq \theta \leq 360^\circ$. 1 Widen: $0^\circ \leq 2\theta \leq 720^\circ$ The bracket runs twice as far. 2 $2\theta = 30^\circ, 150^\circ, 390^\circ, 510^\circ$ The first pair plus $360^\circ$ each. 3 $\theta = 15^\circ, 75^\circ, 195^\circ, 255^\circ$ Divide every solution by 2.

### Source trigonometric-identities-and-equations/lesson11.sa.html, card 05 "Why one answer is never the answer"

$\sin^{-1}$, $\cos^{-1}$ and $\tan^{-1}$ are functions, so each returns exactly one angle. But $\sin\theta = 0.5$ is satisfied at $30^\circ$ and at $150^\circ$, and again every $360^\circ$ after each of those. The calculator gives the related acute angle . Everything else you place yourself, using the sign of the ratio and the domain you were given. So the method has three parts: find the related acute angle from the positive value, decide which quadrants the sign allows, then keep only the solutions inside the domain. Always take the inverse of the positive value. For $\cos\theta = -0.5$, work with $\cos^{-1}(0.5) = 60^\circ$ and then place the solutions in the quadrants where cosine is negative. Feeding the negative straight in gives one angle and hides the other.

### Source trigonometric-identities-and-equations/lesson11.sa.html, card 07 "Multiple angles, and radians"

For $\sin(2\theta) = 0.5$ on $0^\circ \leq \theta \leq 360^\circ$, the bracket $2\theta$ runs over $0^\circ \leq 2\theta \leq 720^\circ$. Solve on the wider domain first. On $0^\circ$ to $720^\circ$: $2\theta = 30^\circ, 150^\circ, 390^\circ, 510^\circ$. Halving gives $\theta = 15^\circ, 75^\circ, 195^\circ, 255^\circ$, four solutions rather than two.

### Source trigonometric-identities-and-equations/lesson11.sa.html, comprehensive answers

Practice 1: $\alpha = 60^\circ$, sine positive in quadrants 1 and 2, so $\theta = 60^\circ, 120^\circ$. Practice 2: $\alpha = 45^\circ$, cosine negative in quadrants 2 and 3, so $\theta = 135^\circ, 225^\circ$. Practice 3: $\alpha = 45^\circ$, tangent positive in quadrants 1 and 3, so $\theta = 45^\circ, 225^\circ$. Practice 4: six. Q1 (3 marks): Related acute angle $\cos^{-1}\left(\dfrac{1}{2}\right) = 60^\circ$ [1]. Cosine is negative in quadrants 2 and 3 [1]. $\theta = 120^\circ$ and $\theta = 240^\circ$ [1]. Q2 (4 marks): Widen the domain: $0^\circ \leq 2\theta \leq 720^\circ$ [1]. Related acute angle $\sin^{-1}\left(\dfrac{\sqrt{3}}{2}\right) = 60^\circ$, and sine is negative in quadrants 3 and 4 [1]. $2\theta = 240^\circ, 300^\circ, 600^\circ, 660^\circ$ [1]. $\theta = 120^\circ, 150^\circ, 300^\circ, 330^\circ$ [1]. Q3 (2 marks): As $\theta$ runs across the given domain, $2\theta$ runs across twice that interval, so the equation has twice as many solutions [1]. Solving on the original domain finds only the solutions of the first revolution of the bracket and discards the rest, so half the answers are lost [1].

Read-only source: [trigonometric-identities-and-equations/lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `b6cbc67279ba8bb6d48c80bda91ee1b7748786a51179fc31f06406e5ff8d536c`. Title: Solving Trigonometric Equations Graphically. Lesson id maths-adv-y11-m2-l13.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `solving-trigonometric-equations-using-graphs`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson08.sa.html, `we-1`

PROBLEM 1 · GRAPHICAL SOLUTION By sketching $y = \sin x$ and $y = \cos x$ on the same axes, find all solutions to $\sin x = \cos x$ in $0 \leq x \leq 2\pi$. 1 Sketch both graphs $y = \sin x$ starts at $(0, 0)$ and peaks at $\frac{\pi}{2}$. $y = \cos x$ starts at $(0, 1)$ and crosses zero at $\frac{\pi}{2}$. 2 $\sin x = \cos x \Rightarrow \tan x = 1$ The graphs intersect where $\sin x = \cos x$, which is where $\tan x = 1$. 3 $x = \frac{\pi}{4}, \frac{5\pi}{4}$ In $[0, 2\pi]$, tangent equals 1 at $\frac{\pi}{4}$ and $\frac{5\pi}{4}$.

### Source trigonometric-identities-and-equations/lesson08.sa.html, `we-3`

PROBLEM 3 · TRANSFORMED EQUATION By considering the graphs of $y = 2\sin x$ and $y = 1$, find all solutions to $2\sin x = 1$ in $0 \leq x \leq 2\pi$. 1 $\sin x = \frac{1}{2}$ Rewrite the equation so one side is a single trig function. 2 Sketch $y = \sin x$ and $y = \frac{1}{2}$ The line intersects the sine curve twice in $[0, 2\pi]$. 3 $x = \frac{\pi}{6}, \frac{5\pi}{6}$ The first quadrant solution is $\frac{\pi}{6}$; the second quadrant solution is $\pi - \frac{\pi}{6} = \frac{5\pi}{6}$.

### Source trigonometric-identities-and-equations/lesson08.sa.html, card 05, two examples

Example: Solving $\sin x = 0.5$ Draw $y = \sin x$ and $y = 0.5$ on the same axes. In the interval $0 \leq x \leq 2\pi$, the horizontal line $y = 0.5$ cuts the sine curve twice: once in the first quadrant and once in the second quadrant. The solutions are $x = \frac{\pi}{6}$ and $x = \frac{5\pi}{6}$ . Example: Solving $\cos x = -0.5$ Draw $y = \cos x$ and $y = -0.5$. In $0 \leq x \leq 2\pi$, the line cuts the cosine curve twice: in the second and third quadrants. The solutions are $x = \frac{2\pi}{3}$ and $x = \frac{4\pi}{3}$

### Source trigonometric-identities-and-equations/lesson08.sa.html, drill answers

Drill 1: $x = \frac{\pi}{3}, \frac{5\pi}{3}$ Drill 2: $x = \frac{7\pi}{6}, \frac{11\pi}{6}$ Drill 3: $x = \frac{\pi}{3}, \frac{4\pi}{3}$ Drill 4: 6 solutions (3 cycles × 2 intersections). Sine has period $2\pi$, so $6\pi$ contains 3 complete cycles. Each cycle intersects $y = 0.7$ twice.

Other parts of this lesson (we-2 and the counting cards (sin x = 0.2 and 0.3 on [0, 4π]) are optional extra checks of the count) are deferred source context, not part of this video.

Read-only source: [trigonometry-and-measure-of-angles/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e872ed18a75577bd5194696893ef09241155424d0fd2e1710fce3dd6b9b4cc9f`. Title: The Unit Circle. Lesson id maths-adv-y11-m2-l03.

Data-step ids: `orient`, `the-unit-circle-identity`, `what-you-ll-master`, `the-unit-circle-what-s`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson03.sa.html, "predict then reveal" item

How many angles $\theta$ in $[0, 2\pi)$ satisfy $\sin\theta = -0.6$, and which quadrants are they in? Confidence 50% Lock prediction → reveal answer Actual answer Two solutions, in Quadrant III and Quadrant IV. Sine is negative below the $x$-axis, which is QIII and QIV. Both share the reference angle $\alpha = \arcsin(0.6) \approx 0.64$, giving $\theta \approx \pi + 0.64 = 3.79$ and $\theta \approx 2\pi - 0.64 = 5.64$. Their cosines have opposite signs, $-0.8$ and $+0.8$, which is why the quadrant has to decide the sign and the square root cannot.

Other parts of this lesson (the rest of the unit circle lesson is t03 and t04) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson11: we-1 sin θ = 0.5: 30°, 150°; we-2 cos θ = −0.5: 120°, 240°; we-3 sin 2θ = 0.5: 2θ = 30°, 150°, 390°, 510°, θ = 15°, 75°, 195°, 255°. Quick-fire: sin θ = √3/2: 60°, 120°; cos θ = −√2/2: 135°, 225°; tan θ = 1: 45°, 225°; cos 3θ = 0.4 has 6 solutions. Q1: 120°, 240°. Q2 sin 2θ = −√3/2: 120°, 150°, 300°, 330°.
- lesson08: sin x = 0.5: π/6, 5π/6; cos x = −0.5: 2π/3, 4π/3; tan x = 1 on [0, 2π): π/4, 5π/4; we-1 sin x = cos x: π/4, 5π/4; we-3 2 sin x = 1: π/6, 5π/6. Drills: cos x = 0.5: π/3, 5π/3; sin x = −0.5: 7π/6, 11π/6; tan x = √3: π/3, 4π/3; sin x = 0.7 on [0, 6π]: 6 solutions; sin x = 0.3 and 0.2 on [0, 4π]: 4 each.
- lesson03: sin θ = −0.6: α = 0.6435, θ = π + α = 3.785 ≈ 3.79 and 2π − α = 5.640 ≈ 5.64; cosines −0.8 and 0.8.
- Original calculator example: cos θ = −0.4 on 0° to 360°: α = 66.42°, θ = 113.58° and 246.42°.

Every solution set above was recalculated with SymPy and checked by a numerical root scan of the whole domain (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Stopping at the calculator's one answer.
- Feeding a negative value into the inverse and then misplacing the angle.
- Solving sin 2θ = k on the original domain and losing half the solutions.
- Degree mode for a radian domain (or the reverse).
- Dividing sin x = cos x by cos x without checking cos x = 0 gives no solutions.
- Including an endpoint the domain excludes (x = 2π in [0, 2π)).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `StudioLevelLine` (trig-parts): the graph over the stated domain, the line y = k sliding into place and the crossing counter, so the number of solutions is seen before it is calculated.
- The circle view: the horizontal line y = k cutting t03's circle at two points, the related angle α marked in each quadrant (`StudioCirclePoint`).
- `StudioWindowMap` for sin 2θ: the θ-domain strip stretching to 0° to 720°, solutions found there and sliding back halved; a calculator screen in radian mode (`ScreenApp`); a candidate table that strikes out values outside the domain (`StudioCandidateTable`).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

(a) Solve 2 cos θ + √3 = 0 for 0° ≤ θ ≤ 360°. (b) Solve 5 sin x + 2 = 0 for 0 ≤ x ≤ 2π, giving answers correct to two decimal places.

**Worked answer:** (a) cos θ = −√3/2; related angle 30°; cosine is negative in the second and third quadrants: θ = 150°, 210°. (b) sin x = −0.4; α = sin⁻¹ 0.4 = 0.4115 (radian mode); sine is negative in the third and fourth quadrants: x = π + 0.4115 = 3.55 and x = 2π − 0.4115 = 5.87.

### Question 2

Solve tan 2x = −1 for 0 ≤ x ≤ 2π.

**Worked answer:** Widen: 0 ≤ 2x ≤ 4π. Related angle π/4; tan is negative in the second and fourth quadrants: 2x = 3π/4, 7π/4, 11π/4, 15π/4. So x = 3π/8, 7π/8, 11π/8, 15π/8.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A clock's minute hand: at which minutes past the hour is its tip half a hand-length above the centre? cos(6m°) = 1/2 gives 10 and 50 minutes past (home).
- The valve on a car wheel turning as the car rolls: at which angles of turn is the valve exactly 20 cm above the axle? (travel)
- A spinning prize wheel in a phone game: at which angles is the pointer's tip at a given height? (games)

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- `trigonometric-identities-and-equations/lesson11.sa.html`, step `what-you-ll-master`. Old text: "The inverse trigonometric functions return only one angle, the related acute angle." This is false for negative inputs: $\cos^{-1}(-0.5) = 120^\circ$ and $\sin^{-1}(-0.5) = -30^\circ$. Correction: "An inverse trigonometric function returns only one angle. Applied to the positive value, it gives the related acute angle."
- Minor: lesson11 card 02 "Answers in the wrong unit earn nothing" is an unsupported marking claim. Minor: lesson08 and lesson11 teach general solutions ("x = π/6 + 2πn", key term "General solution"), which the 2024 Advanced course does not require in Year 11. Minor: lesson08 we-1 divides sin x = cos x by cos x without checking that cos x = 0 gives no solution. Minor: lesson11 card 07 "The number of solutions multiplies by the same factor as the angle" fails at k = ±1 and at domain endpoints.

Decisions for Claude:

- Year 12 relies on this video: math-a12-t02 and t03 assume solving in a domain by counting and symmetry, cos x = k by quadrants on [0, 2π], and a calculator in radian mode. Include one radian domain with a calculator (non-exact) answer.
- lesson03's sin θ = −0.6 item fits here (two solutions, opposite cosines).
- Possible split if the draft runs long: t15a (sin, cos and tan equal to k, degrees and radians, exact and calculator) and t15b (multiple angles by widening the domain).
- TI03 card 08 (sin 2θ = cos θ via sin A = sin B) needs both angle families and is optional extension only.
- Join: the next pack (math-a11-t16) opens on this video's final frame. Its start reads: Open on t15's handoff (the site's hook): 2 sin² θ − sin θ − 1 = 0, with each sin θ glowing and the chip "call it s?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
