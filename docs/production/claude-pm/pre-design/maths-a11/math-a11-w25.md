# math-a11-w25: How does solving a circle for y or x split it into semicircles?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci86be862c` (Circles and semicircles): Identify and graph the semicircles y = √(r^2 - x^2), y = -√(r^2 - x^2), x = √(r^2 - y^2) and x = -√(r^2 - y^2) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w24: x^2 + y^2 = r^2, its radius, domain and range. math-a11-w07: The vertical line test. math-a11-w03: Surds, for values such as sqrt21.

**Prior video:** math-a11-w24.

**Start:** Recall the circle x^2 + y^2 = r^2 and why it is not a function (w24).

**Stop:** Solve x^2 + y^2 = r^2 for y and for x to get y = +/- sqrt(r^2 - x^2) and x = +/- sqrt(r^2 - y^2); identify and graph each of the four semicircles from its equation; state domain and range; say which are functions of x (upper and lower only).

**Next:** math-a11-w26.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson23.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson23.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `b7dc15292366027dfd91478ac966025c56a70a50311628c75ef66d2d70395bfa`. Title: Semicircles and Circles from a Graph. Lesson id maths-adv-y11-m1-l31.

Data-step ids: `recall-your-gut-answer-first`, `the-plus-or-minus-splits`, `what-you-ll-master`, `splitting-the-circle-by-solving`, `model`, `quick-fire-practice`, `revisit-your-rearrangement`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson23.sa.html, `we-1`

PROBLEM 1 · SPLITTING A CIRCLE Solve $x^2 + y^2 = 25$ for $y$, and describe the graph of each result. 1 $y^2 = 25 - x^2$ Make $y^2$ the subject. 2 $y = \pm\sqrt{25 - x^2}$ Square root both sides, keeping both signs. 3 $y = \sqrt{25-x^2}$ is the upper semicircle of radius 5; $y = -\sqrt{25-x^2}$ is the lower The sign of the root selects the half.

### Source working-with-functions/lesson23.sa.html, `we-2`

PROBLEM 2 · DOMAIN AND RANGE OF A SEMICIRCLE State the domain and range of $y = \sqrt{36 - x^2}$. 1 The radius is $\sqrt{36} = 6$ Read it from the constant under the root. 2 Domain $[-6, 6]$, the same as the full circle The half still spans the full width. 3 Range $[0, 6]$, since the positive root is never negative Only the upper half is kept.

Other worked examples in this lesson (we-3) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: x^2 + y^2 = 25 gives y = +/- sqrt(25 - x^2): upper and lower semicircles of radius 5.
- we-2: y = sqrt(36 - x^2) has radius 6, domain [-6, 6], range [0, 6].
- Right semicircle check: x = sqrt(25 - y^2) at x = 3 gives y = -4 and y = 4, so it is not a function of x (section 8).
- Tunnel anchor: a semicircular tunnel of radius 5 m is sqrt(25 - 2^2) = sqrt21 = 4.58 m high at 2 m from the centre.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All worked-example answers match. A general claim in the site copy is wrong for the left and right semicircles (section 8). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing sqrt25 = +/-5; the root sign alone means the non-negative root.
- Halving the domain of an upper semicircle instead of its range.
- Saying all four semicircles are functions; the left and right ones fail the vertical line test.
- Mixing up which sign gives the left semicircle (x = -sqrt(r^2 - y^2)).
- Losing the radius under the root (sqrt(r^2 - x^2) with r^2, not r).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The circle splitting along the x-axis as the +/- separates into two coloured halves, then along the y-axis for the x = +/- forms.
- A vertical line sweep over each semicircle with a live hit count: 1 for upper and lower, 2 for left and right.
- Domain and range shadows (AxisShadow) for each half.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Describe the graph of x = -sqrt(16 - y^2) and state its domain and range.

**Worked answer:** It is the left semicircle of radius 4 centred at the origin. Domain [-4, 0], range [-4, 4].

### Question 2

Write the equation of the lower semicircle of radius 3 centred at the origin, and find y when x = 2.

**Worked answer:** y = -sqrt(9 - x^2). At x = 2, y = -sqrt5 (about -2.24).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A road tunnel with a semicircular entrance of radius 5 m: how high is it 2 m either side of the centre line (sqrt21, about 4.58 m), so will a truck 4 m wide and 4.3 m tall fit? (travel).
- An arched garden gate whose top is a semicircle (home).
- A school protractor: a semicircle with its straight edge on the x-axis (no science).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `working-with-functions/lesson23.sa.html`, step `the-plus-or-minus-splits` ("Each semicircle is a function. One $x$ gives one $y$ once you have chosen a sign") and card 06 ("Each semicircle is a function. Once the sign is fixed, one $x$ gives exactly one $y$, so the vertical line test passes. That is the point of splitting the circle: it turns a relation into two functions."). False for the right and left semicircles $x = \pm\sqrt{r^2 - y^2}$: on $x = \sqrt{25 - y^2}$ the input $x = 3$ gives $y = 4$ and $y = -4$. Correction: "The upper and lower semicircles are functions: once the sign is fixed, one $x$ gives exactly one $y$. The left and right semicircles are not functions of $x$, because a vertical line can cut them twice."

Decisions for Claude:

- The site states "Each semicircle is a function" and "it turns a relation into two functions" after teaching all four halves. That is true only for the upper and lower ones (section 8).
- The tunnel numbers (sqrt21 = 4.58 m) were checked with SymPy; Claude chooses whether to use them.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
