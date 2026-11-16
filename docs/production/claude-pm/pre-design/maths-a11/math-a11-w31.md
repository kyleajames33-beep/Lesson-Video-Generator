# math-a11-w31: How do V-shaped graphs solve absolute value equations?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci81e0ec50` (Absolute value functions): Graph the function y = |x|, describe its symmetry, and identify its domain and range [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci0614b169` (Absolute value functions): Graph y = |ax + b| with and without graphing applications, and identify its symmetry, domain and range [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: Graphs of y = |ax + b| with symmetry, domain and range are not developed as a set task; GT06, which graphs absolute value transformations, is retired as Extension 1 content.
- `ci9fc969f0` (Absolute value functions): Solve absolute value equations of the form |ax + b| = k algebraically and graphically [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: Solved algebraically (ax + b = c or ax + b = -c). The graphical solution (intersection with y = k) is not taught.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w30: |x| as distance and its piecewise definition. math-a11-w28: Graphing piecewise functions. math-a11-w26: Even functions (|x| is even). math-a11-w17: Solving f(x) = k as an intersection with y = k.

**Prior video:** math-a11-w30.

**Start:** Recall |x| = x for x >= 0 and -x for x < 0 (w30).

**Stop:** Graph y = |x| and y = |ax + b| with and without a graphing application, identify the vertex, axis of symmetry, domain and range; solve |ax + b| = k algebraically (two cases, k >= 0) and graphically (where the V meets y = k), including k = 0 and k < 0. Absolute value inequalities and transformations of |x| are later (g01 to g05).

**Next:** math-a11-c01.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `29324c638f5c3da48aa689e8a3e5d4ddb47c569fd633f0f68ef22b6121e8e780`. Title: Piecewise & Absolute Value Functions. Lesson id maths-adv-y11-m1-l04.

Data-step ids: `orient`, `piecewise-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson04.sa.html, `we-pw-2`

Worked example 2 · solving an absolute value equation Solve $|3x - 6| = 9$. 1 Set up two cases $|A| = B$ gives $A = B$ and $A = -B$ 2 $3x - 6 = 9 \Rightarrow 3x = 15 \Rightarrow x = 5$ Case 1: expression equals positive $B$ 3 $3x - 6 = -9 \Rightarrow 3x = -3 \Rightarrow x = -1$ Case 2: expression equals negative $B$ 4 Check: $|3(5)-6| = |9| = 9$ ✓ and $|3(-1)-6| = |-9| = 9$ ✓ Answer: $x = 5$ or $x = -1$

### Source working-with-functions/lesson04.sa.html, card 06 (solving absolute value equations)

For example, to solve $|2x - 4| = 6$: Case 1: $2x - 4 = 6 \Rightarrow 2x = 10 \Rightarrow x = 5$ Case 2: $2x - 4 = -6 \Rightarrow 2x = -2 \Rightarrow x = -1$ Both solutions should be checked in the original equation.

Other worked examples in this lesson (we-pw-1, we-pw-3) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-pw-2: |3x - 6| = 9 gives x = 5 or x = -1 (both check).
- Card 06: |2x - 4| = 6 gives x = 5 or x = -1. Both site examples have the same two answers; a design that shows both should say so or pick one.
- Site drill and Q3 also check: |x - 2| = 5 gives 7 and -3; |2x - 4| = 8 gives 6 and -2.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Solving only ax + b = k and missing the second case.
- Accepting solutions of |ax + b| = -3 (none exist).
- Placing the vertex of |2x + 3| at x = 3 or x = -3 instead of x = -3/2.
- Drawing y = |ax + b| below the x-axis.
- Giving the range of y = |ax + b| as all real numbers.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- y = ax + b drawn first, then the part below the x-axis folding up (reflected) to make the V, with the vertex where ax + b = 0.
- A level line y = k sliding over the V with a live count of solutions (2, 1, 0) and the two x-values read off, matched to the two algebraic cases (StudioLevelLine and the CrossingCounter idea from w14).
- A graphing-application screen (ScreenApp from finance-parts) for "with a graphing application".

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Solve |2x + 3| = 7 algebraically, and check your answers on a graph.

**Worked answer:** 2x + 3 = 7 gives x = 2; 2x + 3 = -7 gives x = -5. On the graph, y = |2x + 3| has its vertex at (-3/2, 0) and the line y = 7 meets it at x = -5 and x = 2.

### Question 2

For y = |4 - 2x|, state the vertex, the axis of symmetry, the domain and the range. How many solutions does |4 - 2x| = k have when k = -1, k = 0 and k = 3?

**Worked answer:** Vertex (2, 0), axis x = 2, domain all real x, range y >= 0. k = -1: none; k = 0: one (x = 2); k = 3: two (x = 1/2 and x = 7/2).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A train passing a station on a straight line: its distance from the platform falls to zero and rises again, a V-shaped graph (travel).
- A jelly-bean jar guessing game at a school fete: guesses exactly 20 away from 350 are 330 and 370 (games).
- A 500 g bag of flour allowed to be 5 g off: the boundary masses are 495 g and 505 g (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Graphing y = |ax + b| and the graphical solution are partial on the site (crosswalk). The fold-up visual and level-line count are original teaching.
- Ownership suggestion: ci81e0ec50 (graph y = |x|, its symmetry, domain and range) could move to w30, where the distance picture already draws |x|. That would leave w31 with |ax + b| graphs and equations only. Root decides.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
