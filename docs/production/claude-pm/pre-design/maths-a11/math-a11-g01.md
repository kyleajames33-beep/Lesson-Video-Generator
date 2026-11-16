# math-a11-g01: Which way does replacing x by x - a move a graph?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cia7e452b4` (Graph transformations): Establish using graphing applications that replacing x by x - a in the equation of a graph corresponds to a horizontal translation of a graph by a, that replacing y by y - b corresponds to a vertical translation by b, and recognise that the sign of a and b determines the direction of the translation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered (crosswalk). Pack note: the site writes vertical translations only as y = f(x) + k; the syllabus form "replace y by y - b" is not shown.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w15: vertex form y = a(x - h)^2 + k with vertex (h, k). math-a11-w21: y = k/x with asymptotes x = 0 and y = 0 (w21's stop boundary hands transformed hyperbolas to this strand). math-a11-w31: graphs of y = |x| and y = |ax + b| and their vertex (w31 hands transformations of |x| to g01 to g05). math-a11-e01: y = a^x and its asymptote y = 0. math-a11-w09: domain and range.

**Prior video:** math-a11-t16 (not yet written). g01 needs nothing from trigonometry: transformed trig graphs are excluded from Year 11 (`cid4fd3807`) and taught in Year 12 t01. The join is a playlist join only; root fixes the opening frame when t16's final frame exists.

**Start:** a parent graph students already know, y = x^2 with its vertex at the origin (w15), and the question "does replacing x by x - 3 move it left or right?".

**Stop:** Establish with a graphing application that replacing x by x - a is a horizontal translation by a and replacing y by y - b is a vertical translation by b, the sign of a and b giving the direction; apply it to y = x^2, |x|, 1/x and a^x (vertex, asymptotes and key points move with the graph; domain and range follow). Reflections are g02, dilations g03, sequences g04.

**Next:** math-a11-g02.

**Year 12 dependency:** Year 12 t01 lists "Year 11 graph transformations of y = f(x) (translations, dilations and reflections)" as entry knowledge, and its codename question (t01 root item 2) is answered by `cia7e452b4`, `cifbd84c1c`, `cic990ec79`, `cide27d1f1`, `ci063bd03f` and `cid4fd3807` (g01 to g04). From g01, t01 needs: "x - pi/3 inside slides right" for the reason that the new graph must reach the same inside value at a later x. Teach that reason here, with plain functions.

## 2. Site order, sections and worked examples

Read-only source: [graph-transformations/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `19d287adf661187aa6e6afae044cceba27b10c23707586ae9d626c0ab3f0f32b`. Title: Translations of Functions. Lesson id maths-adv-y11-m1-l09.

Data-step ids: `orient`, `establish-it-yourself-with-a`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source graph-transformations/lesson01.sa.html, `establish-it-yourself-with-a` (graphing task)

Task. Graph $y = x^2$, then $y = (x-3)^2$, then $y = (x-3)^2 + 2$, all on the same axes. Predict before you plot. Before you look: predict which way each change moves the parabola, and by how much. Then check. Pay attention to the sign: does $(x-3)^2$ move it left or right?

### Source graph-transformations/lesson01.sa.html, `we-trans-1`

Worked example 1 · describing a translation. Describe the transformation that maps $y = f(x)$ to $y = f(x + 4) - 1$. 1 $x + 4 = x - (-4) \Rightarrow h = -4$ Identify the horizontal shift, $h = -4$ means 4 units to the left 2 $k = -1$ Identify the vertical shift, $k = -1$ means 1 unit down 3 Translation: 4 units left and 1 unit down ✓

### Source graph-transformations/lesson01.sa.html, `we-trans-2`

Worked example 2 · finding the new vertex. The vertex of $y = f(x)$ is at $(2, -3)$. Find the vertex of $y = f(x - 5) + 2$. 1 Horizontal shift: $h = 5$ (5 units right). Vertical shift: $k = 2$ (2 units up) 2 $x$-coordinate: $2 + 5 = 7$ $y$-coordinate: $-3 + 2 = -1$ 3 New vertex: $(7, -1)$ ✓

### Source graph-transformations/lesson01.sa.html, `we-trans-3`

Worked example 3 · writing the equation. The graph of $y = x^2$ is translated 2 units to the right and 4 units down. Write the equation of the transformed graph. 1 $y = (x - 2)^2$ 2 $y = (x - 2)^2 - 4$ 3 Final answer: $y = (x - 2)^2 - 4$ ✓ Vertex at $(2, -4)$, confirms 2 right and 4 down from $(0, 0)$

### Source graph-transformations/lesson01.sa.html, step `drill` and short answers

Drill 3: "The vertex of $f$ is at $(1, 4)$. Find the vertex after $y = f(x + 2) - 5$." Answer $(-1, -1)$. Drill 5: shifting $y = \sqrt{x}$ right 4 leaves the range $[0, \infty)$ and moves the domain to $[4, \infty)$. Q9: vertex $(-1, 2)$ under (a) $f(x) + 4$, (b) $f(x - 3)$, (c) $f(x + 2) - 5$: $(-1, 6)$, $(2, 2)$, $(-3, -3)$. Q10: $y = x^2$ moved so its vertex is $(4, -2)$: $y = (x - 4)^2 - 2$, range $[-2, \infty)$.

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- Establish task: (x - 3)^2 has vertex (3, 0); (x - 3)^2 + 2 has vertex (3, 2).
- we-trans-1: (X, Y) to (X - 4, Y - 1). we-trans-2: (2, -3) to (7, -1). we-trans-3: (x - 2)^2 - 4, vertex (2, -4).
- Drill 3: (1, 4) to (-1, -1). Drill 4: (x - 3)^2 + 4. Drill 5: domain [4, infinity), range [0, infinity).
- Q9: (-1, 6), (2, 2), (-3, -3). Q10: (x - 4)^2 - 2, range y >= -2. Revisit: (x - 2)^2 + 3.
- Syllabus form: y - 3 = f(x) rearranges to y = f(x) + 3 (same graph, up 3).
- Card 06 claim (see section 8): x^2 - 4 has x-intercepts -2 and 2; moved up 4 it has the single intercept 0; moved up 5 it has none.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_g.py`, run with `python -I`, sympy 1.14.0). All site worked-example answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading x - 3 as "left 3" from the minus sign (the site's "opposite direction trap").
- Treating the two translations by different rules: the syllabus form shows they share one (replace x by x - a: right a; replace y by y - b: up b).
- Adding the vertical shift inside the bracket, or the horizontal one outside.
- Changing the range after a horizontal shift, or the domain after a vertical shift.
- Assuming the x-intercepts simply shift by the vertical amount (they do not; see section 8).
- Moving only the vertex and leaving an asymptote behind (hyperbola, exponential).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A graphing-application screen (`ScreenApp` with `AppGraph`) for the "establish using graphing applications" wording: the parent y = x^2, then (x - 3)^2, then (x - 3)^2 + 2, each with a dashed grey ghost of the parent.
- A transformation tracer: every key point and asymptote carried by the same arrow (right 3, up 2), with a live readout "(x, y) to (x + 3, y + 2)". `FunctionSimulator` (xShift and yShift channels) does the curve and points; asymptotes must be carried too (see kit needs).
- The cause of "x - 3 means right": an input-matching strip. The old graph's vertex happens at x = 0; the new equation reaches the same inside value 0 when x - 3 = 0, at x = 3. So everything happens 3 later.
- The replace-language frame: y = x^2 with the x glowing and swapped for (x - 3); then y swapped for (y - 2). Both minus signs give positive moves.
- Families from earlier videos carried by the same tracer: |x| (w31's V), 1/x (w21, both asymptotes move), 2^x (e01, the asymptote moves up).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

The hyperbola y = 1/x is translated so that its vertical asymptote is x = 3 and its horizontal asymptote is y = -2. Write the equation of the translated graph and find its y-intercept.

**Worked answer:** Right 3 replaces x by x - 3; down 2 replaces y by y + 2. So y + 2 = 1/(x - 3), that is y = 1/(x - 3) - 2. y-intercept: 1/(-3) - 2 = -7/3, so (0, -7/3). Crossed mistake: y = 1/(x + 3) - 2 (sign of the horizontal shift).

### Question 2

Sketch y = |x + 2| - 3, labelling the vertex and both x-intercepts.

**Worked answer:** y = |x| moved 2 left and 3 down: vertex (-2, -3). x-intercepts: |x + 2| = 3 gives x + 2 = 3 or x + 2 = -3, so x = 1 or x = -5. (y-intercept |2| - 3 = -1.) Crossed mistake: vertex (2, -3).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Daylight saving: a shop's customer-count curve over a day happens one hour later on the clock, so the new curve is the old one with x replaced by x - 1; "later" is right, even with a minus sign (shopping).
- A flat $5 delivery fee on an online order: every price point of the cost graph moves up 5, so y - 5 = (old cost) (money).
- A handicap running race drawn as two dots on a track: a 10 m head start lifts the distance-time graph up 10, and starting 2 seconds late slides it right 2 (sport; dots only, no runners).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (`../../lessons/math-a12-*.md`), the Year 11 w, c and e designs, or the w, c and e pack suggestions (anchor lines and full text grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-G01** (logged): card 06's lead-in says "x-intercepts only shift if there's a horizontal translation", which contradicts its own bullet ("x-intercept(s): Change with both horizontal and vertical shifts") and is false (x^2 - 4 moved up 4 has one intercept instead of two).

Decisions for Claude:

- Teach the syllabus form for both directions: replace x by x - a (right a) and replace y by y - b (up b). Then show y - b = f(x) is the same graph as y = f(x) + b, the form students will meet most. This turns the "backwards" rule into one rule for both axes.
- The site's card 05 misconception box ((a + b)^2 is not a^2 + b^2) is unrelated to translations; leave it out (the same box in working-with-functions/lesson04 was logged as S11-08).
- Keep the vertex form link to w15 as a reference ("the vertex form you met in w15 is a translated y = x^2"), not a re-teach of completing the square.
- Graphing-application wording: the video shows the curves on a coded app screen and invites students to repeat the task in any app; no brand names.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
