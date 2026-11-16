# math-a11-w17: How do intersections solve f(x) = k and line-parabola systems?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie66d7ae0` (Quadratic and cubic functions): Recognise that solving f(x) = k for some constant k corresponds to finding the x-coordinate(s) of the intersection of the graphs y = f(x) and y = k [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci6d7b74df` (Quadratic and cubic functions): Solve problems by finding the solution to simultaneous equations involving a linear and a quadratic function, or two quadratic functions, both algebraically and graphically [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w13: Two lines meet where both equations hold; solving simultaneously finds the meeting point. math-a11-w14: The discriminant counts real roots and x-intercepts. math-a11-w16: Sketching a parabola from its features.

**Prior video:** math-a11-w16.

**Start:** Recall that two lines meet where both equations hold (w13).

**Stop:** Read f(x) = k as finding the x-coordinates where y = f(x) meets the horizontal line y = k; solve a line with a parabola, and two parabolas, by substitution and graphically; give both coordinates; use the discriminant of the resulting quadratic to count meetings, including a tangent. Quadratic inequalities are w18.

**Next:** math-a11-w18.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson16.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson16.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `6107881f3dbf6aef67f8062e189d685675ee4f90ebfb31194b44693f810ecd2b`. Title: Intersections and Simultaneous Equations. Lesson id maths-adv-y11-m1-l24.

Data-step ids: `recall-your-gut-answer-first`, `solving-is-intersecting`, `what-you-ll-master`, `equal-quadratics-and-equating-coefficients`, `model`, `quick-fire-practice`, `revisit-your-two-lines`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson16.sa.html, `we-2`

PROBLEM 2 · LINE AND PARABOLA Find the points of intersection of $y = x^2$ and $y = x + 2$. 1 Substitute: $x^2 = x + 2$, so $x^2 - x - 2 = 0$ Replace $y$ in the quadratic using the linear equation. 2 $(x - 2)(x + 1) = 0$, so $x = 2$ or $x = -1$ Factorise and apply the null factor law. 3 $y = 4$ and $y = 1$, so the intersections are $(2, 4)$ and $(-1, 1)$ Substitute back into the simpler equation for each $y$.

### Source working-with-functions/lesson16.sa.html, `we-3`

PROBLEM 3 · SHOWING A LINE IS A TANGENT Show that $y = 2x - 1$ is a tangent to $y = x^2$, and find the point of contact. 1 Substitute: $x^2 = 2x - 1$, so $x^2 - 2x + 1 = 0$ One equation in $x$ alone. 2 $\Delta = (-2)^2 - 4(1)(1) = 0$, so there is exactly one solution A zero discriminant means a single repeated root, so the line touches. 3 $(x-1)^2 = 0$ gives $x = 1$, and $y = 2(1) - 1 = 1$, so contact at $(1, 1)$ A tangent meets the curve at exactly one point.

### Source working-with-functions/lesson16.sa.html, card 06 (solving f(x) = k as an intersection)

So $x^2 = 4$ has two solutions because $y = x^2$ meets $y = 4$ twice, at $x = -2$ and $x = 2$. And $x^2 = -1$ has no real solutions because the parabola never reaches height $-1$.

Other worked examples in this lesson (we-1) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 06: x^2 = 4 gives x = -2, 2; x^2 = -1 has no real solutions.
- we-2: y = x^2 and y = x + 2 meet at (-1, 1) and (2, 4).
- we-3: x^2 - 2x + 1 = 0 has discriminant 0, so y = 2x - 1 touches y = x^2 once, at (1, 1).
- Original teaching examples (no site example covers two quadratics or a graphical f(x) = k count): y = x^2 + 1 and y = 3 - x^2 meet at (-1, 2) and (1, 2); y = x^2 + 2x and y = x^2 - x + 6 meet once, at (2, 8), because the x^2 terms cancel; y = x^2 - 4x + 3 has vertex (2, -1), so x^2 - 4x + 3 = k has two solutions for k > -1, one for k = -1, none for k < -1.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Giving only the x-values when the question asks for points of intersection.
- Eliminating instead of substituting, and creating a harder equation.
- Thinking two parabolas must meet twice; when the x^2 terms cancel there is at most one meeting.
- Calling a zero discriminant "no solution" instead of one repeated solution (a tangent).
- Substituting back into the wrong equation and getting a y that is on only one graph.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A horizontal level line y = k sliding over a fixed parabola, with a live count of meetings (2, 1, 0) and the matching discriminant, driven by one timeline (StudioLevelLine plus the CrossingCounter proposed for w14).
- A line rotating or sliding across a parabola, with its meeting dots and the substituted quadratic's discriminant updating together until the line becomes a tangent.
- Two parabolas on one StudioPlot with the subtraction f(x) - g(x) shown as a third curve whose zeros line up with the meetings.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Find the points of intersection of y = x^2 - 4x + 3 and y = x - 1.

**Worked answer:** x^2 - 4x + 3 = x - 1, so x^2 - 5x + 4 = 0, (x - 1)(x - 4) = 0, x = 1 or 4. y = 0 and y = 3, so (1, 0) and (4, 3).

### Question 2

Find where the parabolas y = x^2 - 2x - 3 and y = -x^2 + 4x + 5 intersect.

**Worked answer:** x^2 - 2x - 3 = -x^2 + 4x + 5 gives 2x^2 - 6x - 8 = 0, so x^2 - 3x - 4 = 0, (x - 4)(x + 1) = 0. x = 4 gives y = 5; x = -1 gives y = 0. Points (4, 5) and (-1, 0).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A golf chip over a sloping fairway: the ball's path is a parabola and the fairway is a straight line, so the landing spot is a line-parabola intersection (sport).
- A straight road cut through a hill's profile: where the road meets the ground is where line and parabola agree (travel).
- A kite's height over a flight: "when is it exactly 20 m up?" is f(x) = 20, a horizontal line meeting the curve (leisure).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- Minor wording, `working-with-functions/lesson16.sa.html`, key term "Tangent to a curve". Old text: "A line meeting a curve at exactly one point, which happens when the resulting quadratic has discriminant zero." A vertical line meets a parabola once without being a tangent, and for other curves one meeting is neither necessary nor sufficient. Suggested: "For a parabola, a non-vertical line that meets it at exactly one point, which happens when the resulting quadratic has discriminant zero."

Decisions for Claude:

- The site gives no worked example of two quadratics, and teaches f(x) = k with x^2 only. The original examples in section 3 fill these gaps; Claude chooses.
- The site's key term defines a tangent as "a line meeting a curve at exactly one point". Keep that scope to non-vertical lines and parabolas (section 8).

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
