# math-a11-g06: How does translation find the centre and radius of a circle?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci84f96bc4` (Graph transformations): Use the principles of translations to identify the centre, radius, domain and range of graphs of circles in the form (x - a)^2 + (y - b)^2 = r^2, where a, b and r are constants [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered.
- `cid118e6e7` (Graph transformations): Find the centre and radius of circles of the form x^2 + y^2 + ax + by + c = 0, where a, b and c are constants, by completing the squares [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered.
- `ci95f9075b` (Graph transformations): Graph circles given their equations and find the equation of a circle from its graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w24: x^2 + y^2 = r^2 from Pythagoras, the radius as the square root of the right side, a circle as a relation with a domain and range, and the equation from one point on the graph. math-a11-w15: completing the square. math-a11-g01: replacing x by x - a and y by y - b translates a graph. math-a11-g03: x^2 + y^2 = r^2 is the unit circle enlarged by factor r.

**Prior video:** math-a11-g05.

**Start:** w24's circle x^2 + y^2 = r^2 (not re-derived) and g01's rule, applied to both x and y at once.

**Stop:** Use translations to identify the centre (a, b), radius r, domain [a - r, a + r] and range [b - r, b + r] of (x - a)^2 + (y - b)^2 = r^2; find the centre and radius of x^2 + y^2 + ax + by + c = 0 by completing both squares; graph circles from their equations and find the equation of a circle from its graph (centre and radius, or centre and one point). Semicircles stay in w25.

**Next:** math-a11-s01 (the playlist moves to probability; s01's opening does not depend on this video).

**How g06 builds on w24 without re-teaching it.** w24 (Revision 2) derives x^2 + y^2 = r^2 from Pythagoras with its dartboard anchor, tests points inside, on or outside, reads the radius as the root of the right side, finds the equation from a point, and extends domain and range to relations; its boundary says "circles with other centres and completing the square (g06)". So g06 starts from w24's finished equation as a known fact (one recap frame, no derivation, no inside-or-outside test), and adds only three things: the translation (centre (a, b) from replacing x by x - a and y by y - b, g01), the general form (completing the square twice, w15), and graphing or reading a circle whose centre is off the origin. w24's "right side = r^2" and "domain one radius either side" are reused as reminders, not taught again. The site's lesson07 does the same: its heading is "A circle is the unit circle, translated and scaled".

**Year 12 dependency:** none named in the Year 12 designs.

## 2. Site order, sections and worked examples

Read-only source: [graph-transformations/lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3eebd7c51ee25a7eaba038edd1b50cdc7d946add794e61c104c5453e4f8cb63a`. Title: Circles by Translation. Lesson id maths-adv-y11-m1-l16.

Data-step ids: `recall-your-gut-answer-first`, `a-circle-is-the-unit`, `what-you-ll-master`, `reading-the-centre-and-radius`, `model`, `quick-fire-practice`, `revisit-your-prediction`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source graph-transformations/lesson07.sa.html, `we-1`

PROBLEM 1 · READING CENTRE, RADIUS, DOMAIN AND RANGE For $(x-2)^2 + (y+1)^2 = 16$, state the centre, radius, domain and range. 1 Centre is $(2, -1)$ Reverse the sign inside each bracket: $x-2$ gives 2, and $y+1$ gives $-1$. 2 Radius is $\sqrt{16} = 4$ The right-hand side is $r^2$, so take the square root. 3 Domain $[-2, 6]$, range $[-5, 3]$ One radius either side of each coordinate of the centre: $2 \pm 4$ and $-1 \pm 4$.

### Source graph-transformations/lesson07.sa.html, `we-2`

PROBLEM 2 · COMPLETING THE SQUARE TWICE Find the centre and radius of $x^2 + y^2 - 4x + 2y - 11 = 0$. 1 $x^2 - 4x + y^2 + 2y = 11$ Group the $x$ terms and the $y$ terms; move the constant right. 2 $(x-2)^2 - 4 + (y+1)^2 - 1 = 11$ Half of $-4$ is $-2$; half of 2 is 1. Subtract what you added. 3 $(x-2)^2 + (y+1)^2 = 16$, so centre $(2,-1)$ and radius 4

### Source graph-transformations/lesson07.sa.html, `we-3`

PROBLEM 3 · EQUATION FROM A GRAPH A circle has centre $(-1, 2)$ and passes through the point $(2, 2)$. Find its equation. 1 Radius is the distance from $(-1,2)$ to $(2,2)$ 2 $r = 2 - (-1) = 3$ Radius 3, so $r^2 = 9$. 3 $(x+1)^2 + (y-2)^2 = 9$

### Source graph-transformations/lesson07.sa.html, short answers and quick-fire practice

Q1: $(x+4)^2 + (y-1)^2 = 36$: centre $(-4, 1)$, radius 6, domain $[-10, 2]$, range $[-5, 7]$. Q2: $x^2 + y^2 + 6x - 8y + 9 = 0$ gives $(x+3)^2 + (y-4)^2 = 16$, centre $(-3, 4)$, radius 4. Practice 3: $x^2 + y^2 - 6x = 0$ gives $(x-3)^2 + y^2 = 9$.

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-1: centre (2, -1), r = 4, domain [-2, 6], range [-5, 3].
- we-2: (x - 2)^2 + (y + 1)^2 = 16 expands back to x^2 + y^2 - 4x + 2y - 11 = 0.
- we-3: r = 3, (x + 1)^2 + (y - 2)^2 = 9.
- Q1 and Q2 and practice 3 as quoted.
- General form check: x^2 + y^2 + Dx + Ey + F = 0 has centre (-D/2, -E/2) and r^2 = (D/2)^2 + (E/2)^2 - F. Author note: x^2 + y^2 + 2x + 5 = 0 gives r^2 = -4, so no circle.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_g.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading the centre with the bracket's sign ((x - 2) gives centre x = -2).
- Taking the right side as r instead of r^2.
- Completing the square on the left and not adding the same amounts on the right (the site's warning).
- Domain and range from r^2, or from the origin instead of the centre.
- Assuming every equation of the form x^2 + y^2 + ax + by + c = 0 is a circle (the right side after completing the squares must be positive).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- w24's origin circle sliding to its new centre as x is replaced by x - a and y by y - b (one translation arrow, the centre dot leading, the radius spokes unchanged).
- Completing the square twice: the x group and the y group in two colours, each square built from its half-coefficient, the added amounts appearing on both sides.
- Graphing: plot the centre, step one radius left, right, up and down, draw the circle; domain and range brackets on the axes (`AxisShadow` from the w-strand list).
- Equation from a graph: centre read from the grid, radius from the centre to a marked point.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph, equal axis units. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

Find the centre and radius of the circle x^2 + y^2 - 10x + 4y + 20 = 0, and state its domain and range.

**Worked answer:** (x^2 - 10x + 25) + (y^2 + 4y + 4) = -20 + 25 + 4, so (x - 5)^2 + (y + 2)^2 = 9. Centre (5, -2), radius 3, domain [2, 8], range [-5, 1]. Crossed mistake: right side -20 + 25 + 4 written as -20 (amounts not added to both sides).

### Question 2

A circle has centre (3, -1) and passes through the origin. Find its equation and the other point where it crosses the x-axis.

**Worked answer:** r^2 = (0 - 3)^2 + (0 + 1)^2 = 10, so (x - 3)^2 + (y + 1)^2 = 10. On the x-axis, y = 0: (x - 3)^2 + 1 = 10, (x - 3)^2 = 9, x = 0 or x = 6. The other crossing is (6, 0). Crossed mistake: r = 10.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A hardware store's free-delivery zone on a town grid: every address within 5 km of the store at (3, -2) gets free delivery, so the boundary is (x - 3)^2 + (y + 2)^2 = 25 (shopping).
- A roundabout on a council street plan, given in expanded form: completing the squares finds its centre and radius (travel).
- The centre circle of an AFL ground on a ground plan whose origin is at a goal post: the circle is centred far from the origin (sport).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped, 17 November 2026; w24's dartboard, sprinkler and speaker range and w25's netball court were avoided). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No copy error was found in this lesson.

Decisions for Claude:

- Notation: the site writes (x - h)^2 + (y - k)^2 = r^2. The syllabus uses (x - a)^2 + (y - b)^2 = r^2 for the centre form and x^2 + y^2 + ax + by + c = 0 for the general form, so a and b mean different things in the two forms (in the general form the centre is (-a/2, -b/2)). Use the centre form's letters on screen, and use numbers, not letters, for general-form examples.
- Do not re-derive x^2 + y^2 = r^2 (w24 owns it). One recap frame, then translate.
- The "x^2 + y^2 + 2x + 5 = 0 is not a circle" case is an author note; include it in learner copy only if a question needs it.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
