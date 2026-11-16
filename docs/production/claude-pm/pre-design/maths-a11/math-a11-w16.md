# math-a11-w16: How do key features build a parabola, and how do we work back to its equation?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cice1a96a6` (Quadratic and cubic functions): Choose and apply appropriate techniques to graph a parabola of the form y = ax^2 + bx + c by identifying its x-intercepts if they exist, its y-intercept, its axis of symmetry using x = -b/(2a) and its vertex [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cif56630dd` (Quadratic and cubic functions): Find the equation of a parabola given sufficient graphical features [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci3086d97f` (Quadratic and cubic functions): Use the fact that two quadratic functions are equal for all values of x if and only if the corresponding coefficients are equal to solve related problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w14: x-intercepts from factored form and the discriminant; y-intercept as f(0). math-a11-w15: Axis x = -b/(2a), vertex, and completed-square form.

**Prior video:** math-a11-w15.

**Start:** Recall the axis x = -b/(2a) and vertex from w15 and the intercepts from w14.

**Stop:** Sketch y = ax^2 + bx + c from its x-intercepts (if they exist), y-intercept, axis and vertex, with the mirror point; find a parabola's equation from sufficient features (vertex and a point, or x-intercepts and a point); use the fact that two quadratics are equal for all x only when their coefficients are equal to find unknown constants. Intersections are w17.

**Next:** math-a11-w17.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson15.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson15.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `ecd404fe733ac55c409703f59eb475638370c1967bd8462ed514411bcadf9253`. Title: Graphing Parabolas and Cubics. Lesson id maths-adv-y11-m1-l23.

Data-step ids: `recall-your-gut-answer-first`, `find-the-features-then-draw`, `what-you-ll-master`, `sketching-a-parabola-from-its`, `model`, `quick-fire-practice`, `revisit-the-cubic-you-predicted`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson15.sa.html, `we-1`

PROBLEM 1 · SKETCHING A PARABOLA Sketch $y = x^2 - 4x + 3$, showing all key features. 1 $x$-intercepts: $(x-1)(x-3) = 0$, so $x = 1$ and $x = 3$; $y$-intercept: $y = 3$ Factorise, then substitute $x = 0$. 2 Axis: $x = -\dfrac{-4}{2(1)} = 2$; vertex: $y = 4 - 8 + 3 = -1$, so $(2, -1)$ Axis first, then substitute back. 3 Plot $(1,0)$, $(3,0)$, $(0,3)$, $(2,-1)$ and the mirror point $(4,3)$; curve opens upward Label every feature on the sketch.

### Source working-with-functions/lesson15.sa.html, `we-2`

PROBLEM 2 · EQUATION FROM A GRAPH A parabola has vertex $(2, -1)$ and passes through $(0, 3)$. Find its equation. 1 Vertex given, so use $y = a(x - 2)^2 - 1$ Choose the form matching the given features. 2 Substitute $(0,3)$: $3 = a(0-2)^2 - 1 = 4a - 1$ The extra point determines $a$. 3 $4a = 4$, so $a = 1$ and $y = (x-2)^2 - 1$ Check: at $x = 0$, $(0-2)^2 - 1 = 3$ ✓

Other worked examples in this lesson (we-3) are deferred source context, not part of this video.

Read-only source: [working-with-functions/lesson16.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson16.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `6107881f3dbf6aef67f8062e189d685675ee4f90ebfb31194b44693f810ecd2b`. Title: Intersections and Simultaneous Equations. Lesson id maths-adv-y11-m1-l24.

Data-step ids: `recall-your-gut-answer-first`, `solving-is-intersecting`, `what-you-ll-master`, `equal-quadratics-and-equating-coefficients`, `model`, `quick-fire-practice`, `revisit-your-two-lines`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson16.sa.html, `we-1`

PROBLEM 1 · EQUATING COEFFICIENTS Find $a$, $b$ and $c$ if $a(x-1)^2 + b(x-1) + c = 2x^2 - 3x + 4$ for all values of $x$. 1 Expand the left: $a(x^2 - 2x + 1) + bx - b + c = ax^2 + (b - 2a)x + (a - b + c)$ Collect by powers of $x$. 2 Match $x^2$: $a = 2$. Match $x$: $b - 2a = -3$, so $b = 1$ Work down from the highest power. 3 Match constants: $a - b + c = 4$, so $2 - 1 + c = 4$ and $c = 3$ Substitute the values already found.

Other worked examples in this lesson (we-2, we-3) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- WF15 we-1: x^2 - 4x + 3 = (x - 1)(x - 3): x-intercepts 1 and 3, y-intercept 3, axis x = 2, vertex (2, -1), mirror point (4, 3).
- WF15 we-2: vertex (2, -1) through (0, 3): 3 = 4a - 1 gives a = 1, y = (x - 2)^2 - 1 = x^2 - 4x + 3 (the same parabola as we-1, which a design can show).
- WF16 we-1: a(x - 1)^2 + b(x - 1) + c = 2x^2 - 3x + 4 for all x gives a = 2, b = 1, c = 3.
- WF16 card 05 identity example a(x + 1)^2 = ax^2 + 4x + 1: no value of a works (x terms give a = 2, constants give a = 1). See section 8.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All three worked-example answers match. One identity example in card 05 has no solution; it is logged in section 8 and must not be reused. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Plotting the vertex before finding the axis, or taking the vertex's x-coordinate as b/(2a).
- Unlabelled sketches: marks go to labelled intercepts, axis and vertex, not to smoothness.
- Thinking the vertex alone (or the two roots alone) fixes the parabola; a needs one more point.
- Equating coefficients for an equation that holds only at some x (an intersection) rather than for all x.
- Expanding a(x - 1)^2 + b(x - 1) + c and losing the -b in the constant term.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A feature checklist that builds the sketch one labelled feature at a time on StudioPlot: intercepts, y-intercept, axis, vertex, mirror point, then the curve.
- Working back: a family of parabolas through the same vertex (or the same two roots) fans out as a changes, until the extra point pins one curve. One slider drives a and the readout.
- Equating coefficients as matched colour slots: x^2, x and constant columns on both sides of the identity, filled top to bottom (ExpressionSlot, WorkingRows).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

A parabola cuts the x-axis at x = -1 and x = 3 and passes through the point (2, 6). Find its equation in the form y = ax^2 + bx + c.

**Worked answer:** y = a(x + 1)(x - 3). At (2, 6): 6 = a(3)(-1) = -3a, so a = -2. y = -2(x + 1)(x - 3) = -2x^2 + 4x + 6.

### Question 2

Find a, b and c if a(x + 2)^2 + b(x + 2) + c = 3x^2 + 5x - 1 for all values of x.

**Worked answer:** Left side = ax^2 + (4a + b)x + (4a + 2b + c). Match x^2: a = 3. Match x: 12 + b = 5, so b = -7. Match constants: 12 - 14 + c = -1, so c = 1.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A garden polytunnel hoop: its width at the ground (the x-intercepts) and its height in the middle fix the parabola, so the gardener can work back to the equation.
- A BMX dirt jump's profile: take-off and landing points and the height of the crest give the features to sketch and to build the equation (sport).
- A wood-fired pizza oven's dome cross-section: built from its floor width and dome height (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `working-with-functions/lesson16.sa.html`, card 05 ("Identity or equation?"). Old text: ""Find $a$ if $a(x+1)^2 = ax^2 + 4x + 1$ for all $x$" is an identity and is solved by matching." No value of a satisfies it: the x terms give 2a = 4 (a = 2) but the constants give a = 1. Correction: ""Find $a$ if $a(x+1)^2 = ax^2 + 4x + 2$ for all $x$" is an identity and is solved by matching: $2a = 4$ and $a = 2$ agree."

Decisions for Claude:

- The site's card 05 identity example is inconsistent (section 8). Use WF16 we-1 for equating coefficients.
- WF15 we-1 and we-2 describe the same parabola. Claude may use that on purpose (sketch forwards, then work back) or keep them separate.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
