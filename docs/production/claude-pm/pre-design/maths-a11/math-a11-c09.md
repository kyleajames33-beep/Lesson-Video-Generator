# math-a11-c09: Where does a curve have a given gradient, and what angle does it make?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci35f0bdbe` (Calculations with the derivative): Find points on a curve where the tangent or normal has a given gradient [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci70bdc1be` (Calculations with the derivative): Examine and use the relationship between the angle of inclination of a line or tangent to a curve, θ, with the positive x-axis, and the gradient, m, of that line or tangent, and establish that tan θ = m [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c08: The gradient of the tangent at x = a is f'(a). math-a11-w04: Solving linear and quadratic equations. Year 10: tan θ = opposite/adjacent for acute angles and the calculator's inverse tan.

**Prior video:** math-a11-c08.

**Start:** Recall that f'(a) gives the tangent's gradient (c08); now run it backwards from a gradient to the point.

**Stop:** Find points on a curve where the tangent or normal has a given gradient (solve f'(x) = m, then use f for the y-value); establish tan θ = m for the angle of inclination θ with the positive x-axis (0° ≤ θ < 180°), and use it both ways. Equations of those tangents are optional; sign of f' is c14.

**Next:** math-a11-c10.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson14.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson14.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e5fc501934a9611b5081c24b6c1462c65270d9681c6c819fd784369af8236e44`. Title: Tangents, Normals and the Angle of Inclination. Lesson id maths-adv-y11-m3-l18.

Data-step ids: `recall-your-gut-answer-first`, `one-gradient-three-questions`, `what-you-ll-master`, `the-equation-of-a-tangent`, `model`, `quick-fire-practice`, `revisit-your-two-gradients`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson14.sa.html, `we-2`

PROBLEM 2 · ANGLE OF INCLINATION Find the angle of inclination of the tangent to $y = x^2$ at $x = -1$, to the nearest degree. 1 $f'(x) = 2x$, so $m = 2(-1) = -2$ The gradient is negative. 2 $\tan^{-1}(-2) = -63.43^\circ$ The calculator returns a negative angle. 3 $\theta = -63.43^\circ + 180^\circ \approx 117^\circ$ Adding $180^\circ$ puts it in the range $0^\circ$ to $180^\circ$.

### Source introduction-to-differentiation/lesson14.sa.html, `we-3`

PROBLEM 3 · WHERE THE GRADIENT IS GIVEN Find the point on $y = x^2 - 4x$ where the tangent makes an angle of $45^\circ$ with the $x$-axis. 1 $45^\circ$ means $m = \tan 45^\circ = 1$ Convert the angle to a gradient first. 2 $f'(x) = 2x - 4$, so solve $2x - 4 = 1$, giving $x = 2.5$ Set the derivative equal to the required gradient. 3 $f(2.5) = 6.25 - 10 = -3.75$, so the point is $(2.5, -3.75)$ Substitute back into $f$, not $f'$.

### Source introduction-to-differentiation/lesson14.sa.html, card "The angle of inclination"

If $m$ is negative the calculator returns a negative angle. Add $180^\circ$ to express the inclination in the usual range $0^\circ \leq \theta < 180^\circ$. For $m = -1$, $\tan^{-1}(-1) = -45^\circ$, so $\theta = 135^\circ$.

Other worked examples in this lesson (we-1 is c08's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-2: y = x^2 at x = -1: m = -2; tan^-1(-2) = -63.43°, θ = 116.57°, about 117°.
- we-3: y = x^2 - 4x, 45° means m = 1: 2x - 4 = 1, x = 2.5, y = -3.75.
- Q2: y = x^2 - 6x at x = 1: m = -4; θ = 104.04°, about 104°. Practice: y = x^2 with gradient 10 at x = 5; gradient 1 gives 45°; sqrt 3 gives 60°; m = -1 gives 135°.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Substituting the x found from f'(x) = m back into f' instead of f.
- Giving a negative angle of inclination instead of adding 180°.
- Forgetting that a quadratic f'(x) = m can give two points.
- Measuring the angle from the y-axis or clockwise.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A tangent sliding along a cubic with a target-gradient chip; it flashes at every point where its gradient matches (`FunctionRider` with `StudioLevelLine` on the f' graph below: the matches are where f' meets y = m).
- An angle arc from the positive x-axis to a tangent, with the rise-and-run triangle showing tan θ = rise/run = m; for a falling tangent the arc opens past 90° and the calculator's -63° is turned into 117° by adding 180°.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Find the points on y = x^3 - 3x where the tangent is parallel to the line y = 9x + 2.

**Worked answer:** Parallel means gradient 9: 3x^2 - 3 = 9, so x^2 = 4 and x = 2 or -2. Points (2, 2) and (-2, -2).

### Question 2

For y = x^2 + 2x, find the point where the tangent is inclined at 135° to the positive x-axis, and the angle of inclination of the tangent at x = 1, to the nearest degree.

**Worked answer:** tan 135° = -1: 2x + 2 = -1, x = -3/2, y = 9/4 - 3 = -3/4, so (-3/2, -3/4). At x = 1, m = 4 and θ = tan^-1 4, about 76°.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A sloping driveway: where on its curved profile is the slope steep enough that a car's bumper would scrape? Solve f'(x) = a given gradient (home).
- A playground slide built so its steepest part is no more than 40° from horizontal: the angle limit becomes a gradient limit, tan 40° (games).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Order flag for root: obtuse angles of inclination use tan of angles over 90°, but the outline puts trigonometry (t01 to t16) after this strand. Either teach the obtuse case geometrically (θ = 180° minus the acute angle the line makes with the x-axis, using only Year 10 tan) or move the obtuse part of `ci70bdc1be` after t04.
- Normals with a given gradient (in the content point) need one line: the normal's gradient m means f'(x) = -1/m.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
