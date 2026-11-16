# math-a11-g04: Why does the order of transformations matter?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci063bd03f` (Graph transformations): Recognise that the order in which individual transformations are applied to functions is important [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered (crosswalk). Pack note: the site's graphing task for this point uses two moves that commute (S11-G04), and its reading order is wrong (S11-G03).
- `cid4fd3807` (Graph transformations), shared with g05: Apply reflections, translations and dilations to functions within the scope of the Mathematics Advanced course, excluding trigonometric functions, determine the function rule and the graph of the transformed function, the domain and range of the transformed graph, any intercepts, asymptotes and discontinuities where appropriate, and describe which transformations have been applied [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered. **g04 owns** "determine the function rule" (after a described sequence) and "describe which transformations have been applied" (from a rule). **g05 owns** the graph's domain and range, intercepts, asymptotes and discontinuities.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-g01: translations (replace x by x - a, y by y - b). math-a11-g02: reflections (replace x by -x, y by -y). math-a11-g03: dilations (replace x by x/k, y by y/l). math-a11-w27: composite functions, where the order usually matters (w27 owns the general idea; refer to it).

**Prior video:** math-a11-g03.

**Start:** two copies of y = x^2 given the same two moves in opposite orders, ending at different vertices.

**Stop:** Recognise that the order of transformations matters (a translation and a dilation along the same axis do not commute; moves along different axes do); write the function rule after a described sequence of reflections, dilations and translations (not trigonometric functions), and describe the sequence from a rule by factoring the inside first (dilate, then translate). Domain, range, intercepts, asymptotes and discontinuities are g05.

**Next:** math-a11-g05.

**Year 12 dependency:** Year 12 t01 reads y = k f(a(x + b)) + c (the 2024 Year 12 syllabus form; root decision 21), says "write the inside as a(x + b) first so the translation is read from x itself", and fixes the order "squash then slide" (the kit's X = xScale x + xShift). Its misconception list includes "reading the translation as the inside number instead of that number divided by a". g04 must deliver: factor the inside first; horizontal dilation then horizontal translation; vertical dilation (and reflection) then vertical translation.

## 2. Site order, sections and worked examples

Read-only source: [graph-transformations/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `eb7f95b26d45d7ab5371941cd2c9975179813455dd21707ba2e7fb4f3440e2b0`. Title: Combined Transformations. Lesson id maths-adv-y11-m1-l12.

Data-step ids: `orient`, `establish-it-yourself-with-a`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source graph-transformations/lesson04.sa.html, `we-ct-1`

Worked example 1 · describing combined transformations. Describe the transformations that map $y = f(x)$ to $y = -2f(x - 3) + 1$. 1 Identify parameters: $a = -2$, $b = 1$, $h = 3$, $k = 1$ 2 Horizontal translation: $x - 3$ means shift 3 units to the right. 3 Vertical dilation and reflection: $-2$ outside means vertical dilation by factor 2 and reflection in the $x$-axis. 4 Vertical translation: $+1$ means shift 1 unit up. 5 Answer: Translation 3 units right, vertical dilation by factor 2, reflection in the $x$-axis, translation 1 unit up. ✓

### Source graph-transformations/lesson04.sa.html, `we-ct-2`

Worked example 2 · finding a transformed point. The point $(2, 4)$ lies on $y = f(x)$. Find the corresponding point on $y = 3f(2x - 4) + 5$. 1 Rewrite in standard form: $y = 3f(2(x - 2)) + 5$ So $a = 3$, $b = 2$, $h = 2$, $k = 5$. 2 $x_{\text{new}} = \dfrac{x}{b} + h = \dfrac{2}{2} + 2 = 1 + 2 = 3$ 3 $y_{\text{new}} = ay + k = 3(4) + 5 = 12 + 5 = 17$ 4 Answer: $(3, 17)$ ✓

### Source graph-transformations/lesson04.sa.html, `we-ct-3`

Worked example 3 · writing the equation. Write the equation of $y = f(x)$ after the following transformations: reflection in the $y$-axis, horizontal dilation by factor 3, vertical dilation by factor 2, translation 1 unit right and 4 units down. 1 Reflection in $y$-axis: $f(-x)$ 2 Horizontal dilation by factor 3: $f\!\left(-\dfrac{x}{3}\right)$ 3 Vertical dilation by factor 2: $2f\!\left(-\dfrac{x}{3}\right)$ 4 Translation 1 right, 4 down: $y = 2f\!\left(-\dfrac{1}{3}(x - 1)\right) - 4$ 5 Answer: $y = 2f\!\left(-\dfrac{1}{3}(x - 1)\right) - 4$ ✓

### Source graph-transformations/lesson04.sa.html, step `apply` (trap 1 and predict-reveal) and short answers

Trap 1: "$2x - 4 = 2(x - 2)$ ... It is a dilation by 2 and a translation right 2 ... Always factorise the inside." Q8: $(1, 2)$ on $y = -2f(3x - 6) + 4$: $\left(\frac{7}{3}, 0\right)$. Q9: reflection in the $x$-axis, horizontal dilation by factor $\frac{1}{2}$, translation 3 left and 2 up: $y = -4(x + 3)^2 + 2 = -4x^2 - 24x - 34$ for $f(x) = x^2$. Q10: $f(2x - 4)$ is a horizontal dilation by factor $\frac{1}{2}$ then a translation 2 right, not 4 left.

The establish task (S11-G04) and the "inside out" reading order (S11-G03) are not reused as written. Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-ct-1: -2f(x - 3) + 1 as described.
- we-ct-2: 2x - 4 = 2(x - 2); (2, 4) to (2/2 + 2, 3(4) + 5) = (3, 17). Check: at x = 3 the inside is 2, the old x, and the output is 3f(2) + 5 = 17.
- we-ct-3: f(-x), then f(-x/3), then 2f(-x/3), then 2f(-(x - 1)/3) - 4. Matches.
- Q8: (7/3, 0). Q9: -4x^2 - 24x - 34. Drill 3: (4, 6) on 2f(x) - 3 is (4, 9). Revisit: -2(x - 3)^2 - 2, vertex (3, -2).
- Order (original, from y = x^2): up 1 then vertical factor 2 gives 2x^2 + 2; factor 2 then up 1 gives 2x^2 + 1. Right 1 then horizontal factor 2 gives ((x - 2)/2)^2, vertex at 2; factor 2 then right 1 gives ((x - 1)/2)^2, vertex at 1. Right 1 and vertical factor 2 (the site's task) give 2(x - 1)^2 in either order.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_g.py`, run with `python -I`, sympy 1.14.0). All site worked-example answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading f(2x - 4) as "right 4" or "left 4" without factoring (it is factor 1/2 then right 2).
- Translating before dilating along the same axis when building a rule from a description, or when reading one.
- Assuming every pair of moves commutes, or that none do (moves on different axes always commute; a translation and a dilation on the same axis do not).
- Forgetting that a negative coefficient is a reflection as well as a dilation.
- Applying a later "replace x by x - 1" to only part of the inside (it replaces every x, so -x/3 becomes -(x - 1)/3).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Two tracers side by side, one per order, starting from the same y = x^2 and the same two step cards in swapped order; their vertices separate, then a third pair (moves on different axes) lands on the same curve. A "commute or not" verdict chip per pair.
- A step-card queue for building a rule: each card (reflect, dilate, translate) replaces x or y in the current equation, with the replaced symbol glowing (as in g01 to g03).
- Factor-first strip: 2x - 4 becomes 2(x - 2); the inside read as "dilate by 1/2, then slide right 2", with the kit's own order (X = xScale u + xShift) driving the curve so the picture and the reading cannot disagree.
- A point-mapping board for we-ct-2: x divided by 2 then plus 2; y times 3 then plus 5.
- `StudioTransformPanel` (trig-parts.tsx) accepts any family, so the same four sliders Year 12 t01 uses (k, a, b, c on y = k f(a(x + b)) + c) can run here on a parabola, giving Year 12 a familiar panel.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

The graph of y = x^2 is dilated vertically by a factor of 3 from the x-axis and then translated 2 units down. A second copy of y = x^2 is translated 2 units down first and then dilated vertically by a factor of 3. Find both equations and the vertex of each.

**Worked answer:** First: 3x^2, then 3x^2 - 2, vertex (0, -2). Second: x^2 - 2, then 3(x^2 - 2) = 3x^2 - 6, vertex (0, -6). The translation was stretched in the second order. Crossed mistake: "both are 3x^2 - 2".

### Question 2

The graph of y = sqrt(x) is reflected in the y-axis and then translated 4 units to the right. (a) Write the equation and state its domain. (b) A student translates first and then reflects. Write the student's equation and its domain.

**Worked answer:** (a) Reflect: y = sqrt(-x). Translate: replace x by x - 4, so y = sqrt(-(x - 4)) = sqrt(4 - x), domain x <= 4. (b) Translate: y = sqrt(x - 4). Reflect: y = sqrt(-x - 4), domain x <= -4. Crossed mistake: y = sqrt(-x - 4) for (a).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- An oven dial converted from Celsius to Fahrenheit: F = 1.8C + 32 is "multiply, then add"; adding 32 first gives 1.8(C + 32), so 180 °C would read 381.6 instead of 356 (cooking).
- Placing a character sprite in a game: scale it about the origin then move it, or move it then scale it; the second puts it in the wrong place because the move is scaled too (games; the site's own card 05 context, drawn as an object).
- A caravan road-trip estimate: double the normal drive time and then add a 30-minute rest stop, or add the stop and then double it; the second plan takes 30 minutes longer (travel).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped, 17 November 2026; w27's voucher and GST, travel money and power-up anchors were avoided). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-G03** (logged): the formula card's "Key insight" and card 05's "Reading transformations from the equation" list the order as horizontal translation, then horizontal dilation. Applying them in that order sends x to (x + h)/b, not x/b + h, and contradicts the lesson's own point formula.
- **S11-G04** (logged): the establish task compares "translate right 1 then dilate vertically by 2" with the reverse order. These two moves commute, so the task cannot show that order matters.

Decisions for Claude:

- Notation: the site uses y = af(b(x - h)) + k. The 2024 Year 12 syllabus and Year 12 t01 use y = k f(a(x + b)) + c, where a and b swap roles. Recommend either the replace-language only (no general form) or the Year 12 form, so that students do not meet two meanings of a and b in one year.
- Prove "order matters" with a same-axis pair (vertex at 2 against vertex at 1) and show a different-axis pair commuting, so the rule is "same axis: order matters".
- w27 owns composition and "order usually matters"; one frame naming the link is enough.
- The rule-building half of `cid4fd3807` is here; tracking features is g05.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
