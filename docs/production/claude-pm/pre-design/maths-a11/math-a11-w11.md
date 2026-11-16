# math-a11-w11: How do intercepts draw a line and gradients compare two lines?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cicbb8a9c7` (Linear functions): Determine the x-intercept and y-intercept of a straight line given its equation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci13d47f71` (Linear functions): Choose and apply appropriate techniques to graph a straight line given its equation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cif0d11ebe` (Linear functions): Find the equation of a line that is parallel or perpendicular to a given line [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w10: Line equations in three forms.

**Prior video:** math-a11-w10.

**Start:** Recall gradient-intercept and general form.

**Stop:** Intercepts from an equation, choosing a graphing method, parallel lines (equal gradients) and perpendicular lines (m1 m2 = -1).

**Next:** math-a11-w12.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson11.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson11.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `41e2f53dd5e11718f5211772443c8d2b9a51ee806dd08d45d288966d426ac58a`. Title: Graphing Lines, Parallel and Perpendicular. Lesson id maths-adv-y11-m1-l19.

Data-step ids: `recall-your-gut-answer-first`, `intercepts-to-draw-it-gradients`, `what-you-ll-master`, `intercepts-and-graphing-from-them`, `model`, `quick-fire-practice`, `revisit-your-perpendicular-sketch`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson11.sa.html, `we-1`

PROBLEM 1 · GRAPHING FROM INTERCEPTS Graph $2x + 3y = 12$ by finding both intercepts. 1 Set $y = 0$: $2x = 12$, so $x = 6$ The $x$-intercept is $(6, 0)$. 2 Set $x = 0$: $3y = 12$, so $y = 4$ The $y$-intercept is $(0, 4)$. 3 Plot $(6,0)$ and $(0,4)$ and rule a line through them Label both intercepts; they carry the marks.

### Source working-with-functions/lesson11.sa.html, `we-2`

PROBLEM 2 · PARALLEL THROUGH A POINT Find the equation of the line parallel to $y = 4x - 7$ passing through $(2, 3)$. 1 Parallel means the same gradient, so $m = 4$ Read the gradient off the given equation. 2 $y - 3 = 4(x - 2)$ Point-gradient formula with the new point. 3 $y = 4x - 5$ Expand and simplify. Check $(2,3)$: $8 - 5 = 3$ ✓

### Source working-with-functions/lesson11.sa.html, `we-3`

PROBLEM 3 · PERPENDICULAR THROUGH A POINT Find the equation of the line perpendicular to $3x + 4y = 8$ passing through $(3, -1)$, in general form. 1 Rearrange: $4y = -3x + 8$, so $y = -\tfrac{3}{4}x + 2$ and $m_1 = -\tfrac{3}{4}$ Get the given gradient first. 2 Perpendicular gradient is the negative reciprocal: $m_2 = \tfrac{4}{3}$ Flip and change sign. Check: $-\tfrac{3}{4} \times \tfrac{4}{3} = -1$ ✓ 3 $y + 1 = \tfrac{4}{3}(x - 3)$, so $3y + 3 = 4x - 12$, giving $4x - 3y - 15 = 0$ Substitute, clear the fraction, then move to general form.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: 2x + 3y = 12 has intercepts (6, 0) and (0, 4).
- we-2: parallel to y = 4x - 7 through (2, 3): y = 4x - 5.
- we-3: perpendicular to 3x + 4y = 8 through (3, -1): 4x - 3y - 15 = 0.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Negative reciprocal done as reciprocal only, or negative only.
- Setting x = 0 to find the x-intercept.
- Perpendicular lines judged by eye on axes with unequal scales.
- Writing the parallel line with the old intercept.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Intercept method: the two intercept dots appear, then the line is ruled through them.
- Perpendicular gradients: a rise-run triangle rotated a quarter turn swaps rise and run and changes one sign (QuarterTurnNormal already does this turn).
- Equal-scale axes on StudioPlot so right angles look right.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Find the intercepts of 3x - 4y = 24 and use them to sketch the line.

**Worked answer:** y = 0 gives x = 8; x = 0 gives y = -6. Plot (8, 0) and (0, -6) and rule the line.

### Question 2

Find the equation of the line perpendicular to y = -2x + 5 through (4, 1), in general form.

**Worked answer:** Perpendicular gradient 1/2. y - 1 = (1/2)(x - 4), so 2y - 2 = x - 4, giving x - 2y - 2 = 0.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A city street grid: parallel streets share a gradient, cross streets are perpendicular.
- A diagonal shortcut across a rectangular park meeting a path at right angles.
- A fuel gauge line: the x-intercept is when the tank is empty, the y-intercept is the starting fuel.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
