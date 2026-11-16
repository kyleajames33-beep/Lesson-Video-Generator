# math-a11-w28: How do we read and graph a function defined in pieces?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci5b30234d` (Piecewise-defined functions): Interpret piecewise-defined functions, where the function is defined differently in different parts of the domain [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci088a8d02` (Piecewise-defined functions): Graph piecewise-defined functions involving functions covered in the scope of the Mathematics Advanced course, test if they are even or odd, and determine the domain and range [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: Graphing and domain/range of piecewise functions are taught. Testing a piecewise function for even or odd symmetry is not.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w08: Evaluating a function at a value. math-a11-w09: Domain, range and interval notation. math-a11-w26: Tests for even and odd functions. math-a11-w16: Sketching lines and parabolas.

**Prior video:** math-a11-w27.

**Start:** Recall evaluating a function and testing f(-x) (w08, w26).

**Stop:** Interpret a function defined differently on different parts of its domain; evaluate it, using the condition at a boundary; write a rule from context; graph it with open and closed circles; state its domain and range; test it for even or odd symmetry. Continuity at the joins is w29; |x| as a piecewise function is w30.

**Next:** math-a11-w29.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `29324c638f5c3da48aa689e8a3e5d4ddb47c569fd633f0f68ef22b6121e8e780`. Title: Piecewise & Absolute Value Functions. Lesson id maths-adv-y11-m1-l04.

Data-step ids: `orient`, `piecewise-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson04.sa.html, `we-pw-1`

Worked example 1 · evaluating a piecewise function Evaluate $f(-1)$, $f(2)$, and $f(4)$ for $\displaystyle f(x) = \begin{cases} x^2 + 1 & \text{if } x \leq 2 \\ 5x - 3 & \text{if } x > 2 \end{cases}$ 1 Evaluate $f(-1)$: $-1 \leq 2$, use the first rule Always check the condition before substituting 2 $f(-1) = (-1)^2 + 1 = 1 + 1 = 2$ Use brackets around $-1$ to avoid sign errors 3 Evaluate $f(2)$: $2 \leq 2$, use the first rule The boundary value $x = 2$ satisfies $\leq$, so it belongs to the first piece 4 $f(2) = (2)^2 + 1 = 4 + 1 = 5$ Apply the matching rule only 5 Evaluate $f(4)$: $4 > 2$, use $5x - 3 \Rightarrow f(4) = 5(4) - 3 = 17$ ✓ Answer: $f(-1) = 2$, $f(2) = 5$, $f(4) = 17$

### Source working-with-functions/lesson04.sa.html, `we-pw-3`

Worked example 3 · writing a piecewise rule from context A courier company charges $\$5$ for deliveries up to and including $2$ km, and $\$5$ plus $\$1.50$ for each kilometre beyond $2$ km for longer deliveries. Write a piecewise function $C(d)$ for the cost in dollars of a delivery of $d$ km. 1 Identify the conditions Up to 2 km: flat rate of $\$5$. Beyond 2 km: $\$5$ plus $\$1.50$ per extra km. 2 $C(d) = 5 \quad \text{if } d \leq 2$ First piece: flat fee for short trips 3 Extra distance $= d - 2$, so $C(d) = 5 + 1.5(d - 2) \quad \text{if } d > 2$ Use $d - 2$ not $d$, the flat fee covers the first 2 km 4 $C(d) = 2 + 1.5d \quad \text{if } d > 2$ ✓ Simplified: $C(d) = \begin{cases} 5 & d \leq 2 \\ 2 + 1.5d & d > 2 \end{cases}$

### Source working-with-functions/lesson04.sa.html, card 05 example (summarised, not verbatim)

$f(x) = 2x + 1$ if $x < 3$, $10 - x$ if $x \geq 3$. $f(2) = 5$, $f(3) = 7$, $f(5) = 5$.

Other worked examples in this lesson (we-pw-2) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-pw-1: f(-1) = 2, f(2) = 5, f(4) = 17.
- we-pw-3: C(d) = 5 for d <= 2 and 5 + 1.5(d - 2) = 2 + 1.5d for d > 2; C(1) = 5, C(2) = 5, C(4) = 8.
- Card 05: f(2) = 5, f(3) = 7, f(5) = 5.
- Site activity and short answers also check: f(0) = 3, f(1) = 1, f(3) = 9, f(5) = 7; Q1 gives -1, 5, 8; C(150) = $22.50.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using either rule at the boundary instead of the one whose condition includes it.
- Charging the second rate on the whole distance instead of the part beyond the threshold.
- Joining the pieces with a line where the graph actually jumps.
- Giving the range as the union of the rules' ranges over all x instead of over each piece's own interval.
- Testing symmetry on one piece only.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Each rule drawn faintly over all x, then clipped to its own interval with an open or closed circle at the boundary, so students see where each piece comes from.
- A boundary tick that moves an input across x = 2 and lights which rule is in use.
- Domain and range shadows (AxisShadow) built piece by piece; a ghost reflection for the even or odd test.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

An e-bike share app charges $3 to unlock, which covers the first 20 minutes, then $0.50 a minute after that. Write C(t), the cost of a t-minute ride, as a piecewise function. Find C(12), C(20) and C(32), and state the range.

**Worked answer:** C(t) = 3 for 0 < t <= 20 and C(t) = 3 + 0.5(t - 20) for t > 20. C(12) = 3, C(20) = 3, C(32) = 3 + 6 = 9. Range [3, inf).

### Question 2

h(x) = 2 - x for x >= 0 and h(x) = 2 + x for x < 0. Sketch h, state its domain and range, and show whether it is even, odd or neither.

**Worked answer:** Two lines meeting at the peak (0, 2), falling on both sides. Domain all real x; range y <= 2. For x > 0, h(-x) = 2 + (-x) = 2 - x = h(x), and likewise for x < 0, so h is even.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- An e-bike share app: an unlock fee covering the first 20 minutes, then a per-minute rate (travel, phones).
- An electricity bill with two price tiers: a cheaper rate for the first units each day, a dearer rate after (home, money).
- Swimming-pool entry by age band: a flat price for each band (sport; constant pieces).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `working-with-functions/lesson04.sa.html`, card 05 (piecewise functions). Old text: "Misconceptions to fix ✗ Wrong: (a + b)² = a² + b². ✓ Right: (a + b)² = a² + 2ab + b²; the middle term 2ab is essential and commonly forgotten." This box is unrelated to piecewise functions. Correction: "Misconceptions to fix ✗ Wrong: at a boundary value you can use either rule. ✓ Right: use the rule whose condition includes the boundary value (≤ or ≥)."
- Same lesson, short answer Q2(c) model answer. Old text: "A piecewise function is needed because the rate of change is not constant across all ages [1]." The price is constant on each age band and jumps at 16. Correction: "A piecewise function is needed because the price is constant within each age band and jumps by $\$20$ at exactly 16 [1]."
- Minor wording, same lesson, key term "surge pricing" and card 05 ("Surge pricing is piecewise"). Surge pricing is a demand-based multiplier, not a change of rate at a distance threshold. Suggested: "tiered pricing".

Decisions for Claude:

- Site card 05 contains an unrelated misconception box about (a + b)^2 (section 8). Do not reuse it.
- Testing a piecewise function for even or odd symmetry is not on the site (crosswalk: partial). Question 2 and the visual above give original teaching.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
