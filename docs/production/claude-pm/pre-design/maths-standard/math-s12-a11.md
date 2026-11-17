# math-s12-a11: How do we use a quadratic graph to solve a practical problem, and where does the model stop working?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci73f0af63` (Quadratic relationships): Analyse a given graph of a quadratic relationship and use it to solve practical problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.
- `cic7ff4ee6` (Quadratic relationships): Interpret the meaning of the intercepts and vertex of a parabola in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.
- `ci88f43c88` (Quadratic relationships): Explain the limitations of a model of a quadratic relationship in a practical context and consider the values for x and y for which the quadratic model is valid [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. The official wording contains MathML; quote it from `sourceHtml`.

Standard 1: no matching point.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-a10 (intercepts and the vertex by the midpoint). math-s12-a04 (break-even as profit = 0, reused when a profit parabola crosses the axis). math-s12-a07 (a limitation names an assumption and why it fails). math-s11-l04: `ci1b3cf962` (limitations of a linear model, the first "valid values" idea).

**Prior video:** math-s12-a10.

**Start:** a10's firework: the numbers 0, 8, 4 and 80 were found, but what do they mean, and what happens to the model after t = 8?

**Stop:** On a given practical graph, say what the y-intercept, each x-intercept and the vertex mean, with units; answer the four usual questions: the greatest or least value (the vertex), when the quantity is zero (an x-intercept), the value at a given x (read up and across), and when the quantity is above a level (draw the horizontal line y = k and read the two crossings); state the valid values of x and of y for the model (usually between the x-intercepts, never negative time or area) with a reason; give a limitation in context (the assumption and why it fails). Inverse variation is a12.

**Next:** math-s12-a12.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `30c7a2925ec1ac3e017ed94b684891e5f2af67b59c91252a25b6808c6dbc666f`. Title: Quadratic Models, Applying and Interpreting. Lesson id maths-std-y12-algrel-l05.

Older page format: no `data-step-id` sections. Cards in page order: 01 Recall (the paddock), 02 The key idea (valid domain), 03 What you'll master, 04 Key terms, 05 Interpreting Intercepts and Vertex in Context, 06 Valid Domain and Model Limitations, 07 Solving Practical Problems from a Quadratic Graph, worked examples `we-1` to `we-3`, 08 Revisit, SA 1 to SA 3. Also from lesson04 (SHA256 `88a40a5aff6c6e61711f564af8c084016ceceaf2e53cdb659c20213eac9dff74`): card 07 and `we-2` (a thrown ball).

### Source lesson05, card 05 and the paddock

"$y$-intercept: The value of the modelled quantity when $x = 0$ ... $x$-intercepts: Where the quantity is zero. E.g. when height = 0 (ball at ground), when profit = 0 (break-even), when area = 0 (no paddock) ... Vertex: The maximum (opens down) or minimum (opens up)." "Farmer paddock example: $A = 40w - w^2$ ... $x$-intercepts: $w = 0$ and $w = 40$ ... Vertex: $w = 20$ m, $A = 400$ m²". Card 06: "Is $w = 50$ m valid ...? At $w = 50$: $A = -500$ m². A negative area is impossible ... The valid domain is $0 \leq w \leq 40$". (The hook's "One side is the barn wall" does not fit this model; see section 8.)

### Source lesson05, card 07

"'What is the maximum [height/area/profit]?' → Read the $y$-coordinate of the vertex. 'When does [the ball land ...]?' → Read the positive $x$-intercept. 'What is the [value] at $t = k$?' → Read the $y$-value at the specified $x$. 'For what values of $x$ is [the quantity] greater than $k$?' → ... read the two $x$-values where the graph meets the horizontal line $y = k$". "NESA expects both the numerical answer AND the contextual meaning in one sentence."

### Source lesson05, `we-1`

PROBLEM 1 · INTERPRETING FEATURES IN CONTEXT. "A skateboard ramp is modelled by $h = -0.1x^2 + 2x$ ..." $x$-intercepts 0 and 20; axis $x = 10$; $h = 10$ m; length 20 m; valid domain $0 \leq x \leq 20$.

### Source lesson05, `we-2`

PROBLEM 2 · PROFIT MODEL, READING FROM GRAPH. "A company's weekly profit, in thousands of dollars, is modelled by $P = -2n^2 + 20n - 32$ where $n$ is the number of items produced (hundreds)." Break-even at $n = 2$ and $n = 8$ (200 and 800 items); maximum profit $\$18{,}000$ at 500 items; profit when $2 < n < 8$.

### Source lesson05, `we-3`

PROBLEM 3 · LIMITATIONS. "A quadratic model for a roller coaster height is $h = -0.02d^2 + 1.6d$". Valid domain $0 \leq d \leq 80$; "A quadratic has only one turning point, but a roller coaster typically has multiple rises and dips."

### Source lesson05, short answers and lesson04 `we-2`

SA 1: $h = -5t^2 + 25t$, lands at 5 s, maximum 31.25 m at 2.5 s, valid $0 \leq t \leq 5$. SA 2: $P = -n^2 + 12n - 20$; break-even 200 and 1000 items; maximum $\$16{,}000$ at 600 items; (c) "There is no such range" for a profit above $\$16{,}000$, with the reachable comparison $5 < n < 7$ for above $\$15{,}000$. lesson04 `we-2`: $h = -4t^2 + 16t$ lands at 4 s; maximum 16 m at 2 s; "$y$-intercept ... it starts at ground level".

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Paddock: A = 40w − w^2 has intercepts 0 and 40, vertex (20, 400), A(50) = −500. This model is a rectangle fenced on all four sides (length 40 − w). With a barn wall as one side, the model would be A = w(80 − 2w), maximum 800 m² at w = 20 (or 800 m² at a 40 m side parallel to the wall).
- `we-1`: intercepts 0, 20; vertex (10, 10).
- `we-2`: intercepts 2, 8; vertex (5, 18).
- `we-3`: intercepts 0, 80; vertex (40, 32) (not stated on the site).
- SA 1: intercepts 0, 5; vertex (2.5, 31.25). SA 2: intercepts 2, 10; vertex (6, 16); P = 15 at n = 5 and 7. SA 3: intercepts 0, 60; vertex (30, 45).
- lesson04 `we-2`: intercepts 0, 4; vertex (2, 16). True or false (−4t^2 + 20t): lands at 5 (true).

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match except the paddock wording (MS-10). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Giving the vertex's x-value when asked for the maximum value (or the reverse).
- Answering "above 10 m" with one time instead of an interval between two times.
- Stating the valid domain from the whole parabola instead of the context (negative times, negative areas).
- Forgetting that x is in hundreds of items or y in thousands of dollars.
- A limitation that only says "the model may be wrong".

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A given graph with a painted object beside it; each feature (y-intercept, x-intercepts, vertex) rings in turn and a sentence chip writes its meaning with units.
- The four question types as four small "read the graph" moves: across to the vertex, down to an intercept, up and across from a given x, and a horizontal level line y = k cutting the curve twice with the interval between shaded.
- The valid region shaded on the x-axis and the y-axis (values the context allows); the rest of the parabola greyed with a "not in the real situation" tag.
- A limitation card in a07's two-part form: assumption + why it fails here.

Advanced reuse (visual parts only): `StudioLevelLine` (trig-parts.tsx) draws a horizontal level with a crossing counter, `AxisShadow` and `RegionLabels` (a11-graph-parts.tsx) shade valid x and y values, `StudioDomainStrip` (working-parts.tsx), `FunctionRider` and `LiveReadoutBoard` for reading values. Advanced w19 (food truck pricing) builds the quadratic itself; Standard is given the graph, so reuse only its graph parts. `StudioFencePen` (calc-parts.tsx) draws a fenced rectangle and could carry a corrected paddock if Claude keeps that example. No simulation is needed. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

A rugby ball is kicked from the ground. The graph shows its height h metres after t seconds, modelled by h = −5t^2 + 15t. (a) How long is the ball in the air? (b) What is its greatest height, and when? (c) For how long is the ball higher than 10 metres? (d) State the values of t for which the model is valid.

**Worked answer:** (a) The graph meets the t-axis at 0 and 3, so 3 seconds. (b) Midpoint t = 1.5 s; h = −5(2.25) + 15(1.5) = 11.25 m. (c) The line h = 10 meets the curve at t = 1 and t = 2, so for 1 second (between 1 s and 2 s). (d) 0 ≤ t ≤ 3: before the kick and after landing the model gives meaningless or negative heights.

### Question 2

A school musical's committee models the total ticket takings T dollars for a ticket price of p dollars as T = −20p^2 + 1200p. The graph is shown for 0 ≤ p ≤ 60. (a) What ticket price gives the greatest takings, and what are those takings? (b) Explain what the p-intercepts mean. (c) Explain why the model is not valid for p = 70.

**Worked answer:** (a) Intercepts 0 and 60, so the vertex is at p = 30: T = −20(900) + 1200(30) = $18,000. (b) At $0 the tickets earn nothing; at $60 the model says nobody buys a ticket, so the takings are $0. (c) T(70) = −$14,000: negative takings are impossible, so prices above $60 are outside the model's valid values.

Only the question and the graph go on the card. Hide the answer and do not label the vertex until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (c): "t = 1", crossed, "an interval: from 1 s to 2 s"). Answers were checked with SymPy.

## 7. Everyday anchors

- A rugby ball's kick: height against time, the time in the air, the top of the kick and "above the crossbar height" as a level line (sport; carries Question 1).
- A school musical's ticket price and the takings: too cheap earns little, too dear sells nothing (events and money; carries Question 2).
- A vegetable patch edged with a fixed length of timber: width against area, with the largest patch at the vertex and impossible widths outside the intercepts (home; a corrected paddock in a backyard).

Varied everyday contexts (sport, events, home). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "rugby" and "school musical" have no hits; "musical" appears in t10 as a different idea; the w21 pack suggested a 24 m² vegetable patch for a hyperbola, which the w21 design did not use, so this fixed-edging patch is a different idea). No other Standard pack uses these. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New error logged there:

- MS-10: the paddock hook says "One side is the barn wall (free)", but A = 40w − w^2 is the model for a rectangle fenced on all four sides with 80 m (length 40 − w), which is also how card 05 explains w = 40 ("all fence used in width, none left for length"). Remove the barn wall from the hook, or change the model.

Decisions for Claude:

- **Pace flag: at risk of rushing.** Three points, four question types, valid values and limitations is a lot for Standard students in one video (a gentle version runs 10 to 12 minutes). Suggested split if the draft runs long: a11a "reading a practical quadratic graph" (meanings of intercepts and vertex, the four question types; `ci73f0af63`, `cic7ff4ee6`; we-1, we-2, SA 1) and a11b "valid values and limitations of a quadratic model" (`ci88f43c88`; the paddock corrected, we-3, SA 3).
- The site often finds intercepts by factorising (we-2: (n − 2)(n − 8) = 0). The syllabus says "a given graph": read intercepts from the graph; factorising is not a Standard 2 skill.
- SA 2 (c) has no answer by design (no price gives more than the maximum). It is a good "check against the vertex" trap but may confuse Standard students; if used, phrase it as "Is a profit above $16,000 possible?"
- Real launches start above the ground (a kicker's boot, a thrower's hand). Say once that the model starts at ground level for simplicity; keep that in author notes otherwise.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
