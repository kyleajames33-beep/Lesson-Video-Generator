# math-a11-c16: How do we find and justify the stationary points of a cubic?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci6341be75` (Graphical applications of the derivative): Identify stationary points on the graph of a cubic function, and the values of x for which the function is increasing and/or decreasing, by first calculating the derivative, and justify conclusions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c14: Stationary when f'(c) = 0; increasing and decreasing from the sign of f'. math-a11-c07: Differentiating cubics. math-a11-w20: Graphs of cubics. math-a11-w04: Solving quadratic equations by factorising.

**Prior video:** math-a11-c15.

**Start:** Recall w20's cubic sketch, where the turning points could only be guessed, and the sign rules (c14).

**Stop:** For a cubic, find f'(x), solve f'(x) = 0 for the stationary points and their y-values, find where the cubic is increasing or decreasing, and justify each stationary point as a local maximum, local minimum or neither from the sign of f' on each side (a table of slopes). No second derivative (Year 12); no optimisation (Year 12).

**Next:** math-a11-c17.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `121950491455e5c1c83231028697dd551c4a6121377471fb97b8858646a39cac`. Title: Stationary Points. Lesson id maths-adv-y11-m3-l08.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `finding-and-classifying-stationary-points`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson08.sa.html, `we-1`

PROBLEM 1 · FIND STATIONARY POINTS Find and classify the stationary points of $f(x) = x^3 - 3x^2$. Apply 1 $f'(x) = 3x^2 - 6x = 3x(x - 2)$ Differentiate and factorise. 2 $f'(x) = 0$ when $x = 0$ or $x = 2$ Solve for stationary points. 3 $f(0) = 0$ and $f(2) = 8 - 12 = -4$. Stationary points at $(0, 0)$ and $(2, -4)$. Find $y$-coordinates by substituting back into $f(x)$.

### Source introduction-to-differentiation/lesson08.sa.html, card "Finding and classifying stationary points", syllabus note

Beyond the syllabus. Everything above this point is Core. MAV-11-06 requires you to find stationary points by solving $f'(x) = 0$ and to say where a function is increasing or decreasing. The second derivative test below is not a Year 11 method. It is shown because it is quick and because you will meet it in Year 12, but the Year 11 way to classify a stationary point is a sign table for $f'(x)$ either side of it, and that is the method you will be examined on. Learn the sign table first and treat the $f''$ shortcut as a check, not as the answer.

### Source introduction-to-differentiation/lesson08.sa.html, step `practice-short-answer`, Q2

Show that $f(x) = x^3$ has a horizontal inflection at $x = 0$. 3 MARKS View comprehensive answer $f'(x) = 3x^2$, so $f'(0) = 0$ (stationary point) [1]. $f''(x) = 6x$, so $f''(0) = 0$ (inconclusive) [0.5]. For $x < 0$: $f'(x) = 3x^2 > 0$; for $x > 0$: $f'(x) = 3x^2 > 0$. Since $f'(x)$ does not change sign, it is a horizontal inflection [1.5].

Other worked examples in this lesson (we-2 uses the second derivative test (Year 12); we-3 is a quartic) are deferred source context, not part of this video.

Read-only source: [introduction-to-differentiation/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `917bb60210e0b1e8cdff4d1082b89ebbbd32ae7c1030c4f1e66933ca569d721e`. Title: Increasing and Decreasing Functions. Lesson id maths-adv-y11-m3-l11.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `increasing-and-decreasing-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson10.sa.html, `we-2`

PROBLEM 2 · CUBIC FUNCTION Find the intervals of increase and decrease for $f(x) = x^3 - 3x^2$. Apply 1 $f'(x) = 3x^2 - 6x = 3x(x - 2)$ Differentiate and factorise. Factorising is essential for accurate sign analysis. 2 $f'(x) = 0$ when $x = 0$ or $x = 2$ Find stationary points. These divide the number line into three intervals: $(-\infty, 0)$, $(0, 2)$, $(2, \infty)$. 3 Test $x = -1$: $f'(-1) = 3(-1)(-3) = 9 > 0$ → increasing. Test $x = 1$: $f'(1) = 3(1)(-1) = -3 < 0$ → decreasing. Test $x = 3$: $f'(3) = 3(3)(1) = 9 > 0$ → increasing. $f$ is increasing on $(-\infty, 0)$ and $(2, \infty)$; decreasing on $(0, 2)$.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson08 we-1: x^3 - 3x^2: f' = 3x(x - 2); stationary points (0, 0) and (2, -4); slopes either side: + then - at 0 (maximum), - then + at 2 (minimum). The site's we-1 finds but does not classify; we-2 classifies with f''.
- lesson10 we-2: the same cubic, increasing for x < 0 and x > 2, decreasing for 0 < x < 2.
- lesson08 drill: x^3 - 6x^2 + 9x + 1: (1, 5) maximum, (3, 1) minimum. Q1: x^3 - 3x^2 + 4: (0, 4) maximum, (2, 0) minimum. Q2: x^3 at 0: f' = 3x^2 positive on both sides, so neither. Q3: a = 1, b = -6, c = 9, d = 0 (y = x^3 - 6x^2 + 9x has y(1) = 4, y(3) = 0, y' = 3(x - 1)(x - 3)). Quick check: x^3 - 3x has (1, -2) minimum and (-1, 2) maximum.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Giving only the x-value of a stationary point.
- Classifying by the sign of f instead of the sign of f' either side.
- Testing a value too far away, past another stationary point.
- Assuming every cubic has two turning points (x^3 and x^3 - 3x^2 + 3x have one stationary point that is neither).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Return to w20's cubic with "?" at its turns; f' = 0 pins each turn exactly, and the dots snap into place.
- `SignChart` table of slopes (x just left, at, just right; f' sign; a small slope glyph /, -, \) under each stationary point, then the label max, min or neither.
- A side-by-side of x^3 - 3x^2 (two stationary points) and x^3 - 3x^2 + 3x (one, neither) to show the "neither" case.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Find the stationary points of y = 2x^3 - 3x^2 - 12x + 5 and determine their nature.

**Worked answer:** dy/dx = 6x^2 - 6x - 12 = 6(x - 2)(x + 1) = 0 at x = -1 and 2. y(-1) = 12, y(2) = -15. Slopes: + then - at x = -1, so (-1, 12) is a local maximum; - then + at x = 2, so (2, -15) is a local minimum.

### Question 2

Show that y = x^3 - 3x^2 + 3x has exactly one stationary point, and that it is neither a maximum nor a minimum.

**Worked answer:** dy/dx = 3x^2 - 6x + 3 = 3(x - 1)^2, zero only at x = 1, where y = 1. dy/dx > 0 on both sides of x = 1, so the curve keeps rising: (1, 1) is a stationary point that is neither.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A mini-golf hole with a hump and a hollow: the ball can balance on the hump (local maximum) and settles in the hollow (local minimum); the green's profile is a cubic (games).
- A sand dune and the hollow behind it on a beach walk, seen in profile: the crest and the dip are where the slope is zero (travel).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson08.sa.html`, step `what-you-will-master`, key terms. Old text: "Local maximum A stationary point where the function changes from increasing to decreasing. $f''(x) < 0$." and "Local minimum ... $f''(x) > 0$." The second-derivative condition is not part of the definition and is not necessary ($y = -x^4$ has a local maximum at 0 with $f''(0) = 0$); it is also Year 12. Correction: delete "$f''(x) < 0$." and "$f''(x) > 0$." from the two key terms.
- `introduction-to-differentiation/lesson08.sa.html`, step `the-two-moves`. Old text: "Move 2: Test the nature. Substitute into $f''(x)$: negative means concave down (local max), positive means concave up (local min), zero means further testing needed via a sign table." The page later says the Year 11 method is the sign table. Correction: "Move 2: Test the nature. Check the sign of $f'(x)$ just left and just right of each stationary point: + then - is a local maximum, - then + is a local minimum, no change is neither."
- `introduction-to-differentiation/lesson08.sa.html`, `we-1`. Old text (problem): "Find and classify the stationary points of $f(x) = x^3 - 3x^2$." The worked steps only find them. Correction: add the step "Slopes: $f'(-1) = 9 > 0$, $f'(1) = -3 < 0$, $f'(3) = 9 > 0$, so $(0, 0)$ is a local maximum and $(2, -4)$ is a local minimum."

Decisions for Claude:

- Use "stationary point that is neither a maximum nor a minimum" in learner copy. "Horizontal (stationary) point of inflection", used by the site, is Year 12 language; keep it as an author note.
- Do not use lesson08 Q3 (finding a, b, c, d) as a practice item here; it is a good extension but needs four simultaneous equations.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
