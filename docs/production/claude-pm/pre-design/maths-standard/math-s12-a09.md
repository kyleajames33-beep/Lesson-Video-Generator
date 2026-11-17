# math-s12-a09: What shape does a quadratic make, and where are its vertex and axis of symmetry?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci0ba98146` (Quadratic relationships): Recognise that a quadratic relationship can be represented by an equation, a table of values, a set of ordered pairs or a graph, and move flexibly between these representations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.
- `cie98a4311` (Quadratic relationships): Recognise the parabolic shape of a quadratic relationship, noting its vertex and axis of symmetry [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.
- `ci468232d2` (Quadratic relationships): Graph a quadratic relationship of the form y = ax^2 + bx + c using graphing applications [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. The official wording contains MathML; quote it from `sourceHtml`.

Standard 1: no matching point (Standard 1 has no quadratic relationships).

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-a05 (moving between equation, table, ordered pairs and graph, met first for exponentials). math-s11-f01: `ci7f303375` (substituting into non-linear expressions, here x^2 with negative x). math-s11-f03: `cib54d5e23` (formulas of the form y = ax^2 + c, the first quadratics students met). math-s11-l02: `ci5ff71229` (constructing a graph with and without graphing applications).

**Prior video:** math-s12-a07 (a08 is Standard 1 only and optional for Standard 2).

**Start:** a05 told exponential from linear by the pattern in a table. A third table pattern: values that fall, turn and rise again, the same on both sides.

**Stop:** Recognise a quadratic from its equation (an x^2 term, the highest power), a table (values symmetric about a middle x; second differences constant as an optional check) or a graph (a parabola); move between the four representations; the vertex is the turning point (a minimum if a > 0, a maximum if a < 0); the axis of symmetry is the vertical line x = (vertex x-value) through it; read the vertex and axis from a symmetric table or a graph; graph y = ax^2 + bx + c with a graphing app and read off the vertex. Intercepts and the midpoint method are a10; practical problems are a11.

**Next:** math-s12-a10.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `88a40a5aff6c6e61711f564af8c084016ceceaf2e53cdb659c20213eac9dff74`. Title: Quadratic Relationships, Parabolas. Lesson id maths-std-y12-algrel-l04.

Older page format: no `data-step-id` sections. Cards used here: 02 The key features ("Sign of $a$ determines direction", "Use graphing technology"), 04 Key terms (parabola, vertex, axis of symmetry, concave up and down), 05 Recognising and Representing Quadratic Relationships, 06 (reading the vertex and axis), `we-3`, the quick check and the match item. Card 06's midpoint formula, `we-1`, `we-2`, card 07 and the short answers belong to a10 and a11.

### Source lesson04, card 05

"Consider $x = 0, 1, 2, 3, 4$ and $y = 1, 4, 9, 16, 25$: First differences: ... 3, 5, 7, 9, not constant (not linear). Second differences: ... 2, 2, 2, constant! This confirms quadratic." "Equation: $y = x^2$, the simplest quadratic. Table of values: $(0,0),\ (1,1),\ (2,4),\ (3,9),\ (-1,1),\ (-2,4)$ ... Graph: a symmetric U-shaped curve (parabola) opening upward with vertex at the origin." Quick check: $y$-values 3, 7, 13, 21, 31 (answer B, quadratic, second differences 2).

### Source lesson04, card 02

"If $a > 0$: parabola opens upward (minimum vertex, a valley). If $a < 0$: opens downward (maximum vertex, a hill)." "NESA requires you to use graphing applications to graph quadratics. In Desmos or GeoGebra you can read off vertex, intercepts and axis of symmetry directly from the graph."

### Source lesson04, `we-3`

PROBLEM 3 · TABLE OF VALUES AND FEATURES. "A table gives: $x$ = 0, 1, 2, 3, 4 and $y$ = 8, 5, 4, 5, 8. (a) Show this is quadratic. (b) Identify the vertex and axis of symmetry." First differences $-3, -1, +1, +3$; second differences 2, 2, 2. "Minimum value from table: $y = 4$ at $x = 2$. Vertex: $(2, 4)$. Axis of symmetry: $x = 2$." "The table is symmetric about $x = 2$."

### Source lesson04, card 06 technology note

"In Desmos, enter the equation (e.g., y = -x^2 + 6x - 5). Click on the $x$-intercepts, vertex and $y$-intercept to read their coordinates."

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 05: y = x^2 first differences 1, 3, 5, 7 for x = 0 to 4 (the site lists 3, 5, 7, 9 from x = 1, also correct); second differences 2.
- Quick check: second differences 2, 2, 2.
- `we-3`: differences −3, −1, 1, 3 and 2, 2, 2; vertex (2, 4), axis x = 2.
- Technology note: y = −x^2 + 6x − 5 = −(x − 1)(x − 5), vertex (3, 4) (also the card 06 example in a10).

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Squaring a negative x wrongly ((−2)^2 = −4), which breaks the symmetry of the table.
- Thinking the vertex is always on an axis, or always at the lowest y in a table even when the table is not centred on it.
- Mixing up the axis of symmetry (a line, x = 2) with the vertex (a point, (2, 4)).
- Joining the points with straight segments into a V.
- Thinking a large positive c makes the parabola open upward (only the sign of a does).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A table filling row by row with matching rows (same y) linking across the middle row by arcs, so symmetry is seen before the word "axis"; the points then drop onto a grid and a dashed vertical line appears through the middle.
- The parabola folding along its axis of symmetry so the two halves land on each other.
- A slider on a passing through zero: the curve opens upward, flattens to a line at a = 0 (not a quadratic), then opens downward; the vertex chip changes from "minimum" to "maximum".
- An unbranded graphing-app window (`ScreenApp`, graph mode) typing y = −x^2 + 6x − 5 and tapping the vertex to read (3, 4).
- Four-panel representation card as in a05 (equation, table, ordered pairs, graph), with one point lit in all four.

Advanced reuse (visual parts only): `FunctionSimulator` and `ParameterSlider` (math-a11-w14, w15 and w16 designs use them for parabolas), `StudioSymmetryPairs` (integration-parts.tsx, even mode) for mirror pairs about the axis, `StudioFeatureMarks` (trig-parts.tsx) for labelled vertex and axis marks, `ScreenApp`. Advanced's w15 (completing the square, x = −b/(2a)) goes beyond Standard; reuse its parabola visuals only, not its method. No simulation is needed. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

The table shows values of a relationship.

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| y | 10 | 5 | 2 | 1 | 2 | 5 | 10 |

(a) Explain why the relationship is quadratic. (b) Write down the equation of the axis of symmetry and the coordinates of the vertex. (c) Does the parabola open upward or downward?

**Worked answer:** (a) The values are symmetric about x = 3 (10, 5, 2 then 2, 5, 10), and the second differences are constant (first differences −5, −3, −1, 1, 3, 5; second differences 2). (b) Axis x = 3; vertex (3, 1). (c) Upward: the vertex is the lowest point (a minimum).

### Question 2

Consider y = −x^2 + 4x + 5. (a) Without graphing, say whether the parabola opens upward or downward, and why. (b) Complete a table for x = 0, 1, 2, 3, 4. (c) Use your table to write down the vertex and the axis of symmetry.

**Worked answer:** (a) Downward, because the x^2 term is negative (a = −1). (b) y = 5, 8, 9, 8, 5. (c) The table is symmetric about x = 2, so the axis is x = 2 and the vertex is (2, 9), a maximum.

Only the question and the table go on the card. Hide the answer and do not mark the middle column until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "vertex x = 3", crossed, "the vertex is a point: (3, 1)"). Answers were checked with SymPy.

## 7. Everyday anchors

- A kangaroo's hop seen side-on: the path rises and falls the same on both sides of its highest point, the axis of symmetry halfway between take-off and landing (Australian outdoors; the path is a coded dashed curve beside a painted kangaroo, an animal not a person).
- A suspension footbridge's main cable between two towers, sagging to a lowest point in the middle (travel; a parabola opening upward with a minimum).
- A soccer goal kick's flight, rising and falling the same on both sides of its highest point (sport; a maximum).

Varied everyday contexts (outdoors, travel, sport). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "suspension" and "goal kick" have no hits; "kangaroo" appears only as a hoodie's pocket in w18's plate brief; car headlights were avoided because a12-d14 uses them; basketball arcs, sprinklers, drinking fountains, a hammock, a polytunnel and a skate bowl were avoided because Advanced w05, w14, w15, w16, w18, w24 and g01 use them). No other Standard pack uses them. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No new error was found in the parts of lesson04 used here.

Decisions for Claude:

- Second differences are site content, not in the syllabus wording. Lead with symmetry in the table (easier for Standard students) and keep second differences as a short optional check.
- The site's SA 2 asks students to find the equation from a table and uses x = −b/(2a). Both go beyond the Standard 2 points (the syllabus finds the axis from the x-intercepts on a graph, a10). Do not use SA 2 in the videos. It is beyond the syllabus, not a copy error, so it is not logged in the corrections file; root decides whether to tell the website AI.
- The syllabus says "using graphing applications" for y = ax^2 + bx + c. Standard 2 HSC calculators do not graph, so exam questions supply the graph or a table; the app is for class and for this video's demonstration.
- Pace: three points but one idea (the shape and its centre line). Fits 7 to 8 minutes. Not at risk.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
