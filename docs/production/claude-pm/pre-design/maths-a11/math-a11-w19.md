# math-a11-w19: How do quadratic models find a best value in context?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci6ee9e4ed` (Constructing and using functions): Model and solve practical problems involving quadratic functions and justify conclusions in the context of the problem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w12: Building a model with named variables, units and restrictions. math-a11-w13: Cost, revenue, profit and break-even. math-a11-w15: The vertex of a concave-down parabola is its highest point; x = -b/(2a).

**Prior video:** math-a11-w18.

**Start:** Recall that the vertex of a concave-down parabola is its highest point (w15) and that revenue is price times quantity (w13).

**Stop:** Build a quadratic model from a context (revenue as price times quantity when quantity depends on price), find the best value from the vertex, check that the vertex lies in the practical domain, find where the model is positive when asked, and justify the answer in context with units and whole-number rounding. Calculus optimisation is Year 12.

**Next:** math-a11-w20.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson19.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson19.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `40f59eeef05d66d2740baa2c326bbeabe6f4c5ba9c4782607d60b13620b94cc4`. Title: Break-even and Quadratic Modelling. Lesson id maths-adv-y11-m1-l27.

Data-step ids: `recall-your-gut-answer-first`, `where-revenue-catches-cost`, `what-you-ll-master`, `cost-revenue-and-the-break`, `model`, `quick-fire-practice`, `revisit-your-estimate`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson19.sa.html, `we-3`

PROBLEM 3 · QUADRATIC MODEL At a price of $p$ dollars, a stall sells $40 - 2p$ items. Find the price that maximises revenue and the maximum revenue. 1 $R = p(40 - 2p) = 40p - 2p^2$ Revenue is price times quantity. 2 $a = -2$, $b = 40$, so the vertex is at $p = -\dfrac{40}{2(-2)} = 10$ Concave down, so the vertex is a maximum. 3 $R = 40(10) - 2(10)^2 = 400 - 200 = 200$ dollars Substitute back for the maximum revenue.

Other worked examples in this lesson (we-1, we-2) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-3: R = p(40 - 2p) = 40p - 2p^2, vertex at p = 10, maximum revenue 200 dollars. Practical domain 0 <= p <= 20 (items sold cannot be negative).
- Site quick-fire: R = 30p - 3p^2 has vertex p = 5, R = 75. Site Q2: R = p(60 - 3p) peaks at p = 10, R = 300.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Giving the vertex's x-value (the best price) when the question asks for the best revenue, or the reverse.
- Not checking that the vertex lies in the practical domain (a negative quantity or price).
- Reporting a non-whole number of items without rounding sensibly in context.
- Assuming the vertex is a maximum without checking a < 0.
- Using differentiation, which is not the Year 11 method here.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A price slider: as p moves, a painted stall's coded price tag changes, the quantity sold bar shrinks, and the revenue rectangle (price by quantity) grows then shrinks, with its area plotted live as the parabola. One timeline drives all three.
- The vertex ringed on the revenue curve with the practical domain shaded on the axis (DomainShading).
- For a profit model, the zeros and the vertex together: "profitable between" and "best at" as two separate questions.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

At a price of $p per ticket, a cinema sells 600 - 40p tickets for a session. Find the ticket price that gives the greatest takings, and the greatest takings.

**Worked answer:** R = p(600 - 40p) = 600p - 40p^2. Vertex at p = -600/(2 x -40) = 7.5. R = 600(7.5) - 40(7.5)^2 = 4500 - 2250 = 2250. A price of $7.50 gives the greatest takings, $2250.

### Question 2

A food truck's daily profit from selling x trays of dumplings is P = -5x^2 + 80x - 195 dollars. (a) How many trays give the greatest profit, and what is it? (b) For which whole numbers of trays does the truck make a profit?

**Worked answer:** (a) x = -80/(2 x -5) = 8 trays; P = -320 + 640 - 195 = $125. (b) P = 0 when x^2 - 16x + 39 = 0, x = 3 or 13. P > 0 between them, so 4 to 12 trays (at 3 and 13 trays the profit is exactly $0).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A band's merch table choosing its T-shirt price: higher prices sell fewer shirts, and takings peak in between (money).
- A food truck deciding how many trays of dumplings to cook (food; matches question 2).
- A phone-repair kiosk setting its screen-repair price (phones).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `working-with-functions/lesson19.sa.html`, card 07. Old text: "The syllabus places this in MAV-11-01, so the optimum comes from the vertex". MAV-11-01 is a site outcome code, not a syllabus code. Correction: "In Year 11 the optimum comes from the vertex".

Decisions for Claude:

- WF19 we-1 and we-2 were used in w13 and are not repeated. S11-04 (the "$8 profit per item" wording in we-2) still applies if any w13 material is shown.
- Site card 07 says "The syllabus places this in MAV-11-01". MAV-11-01 is a site code, not a syllabus code (section 8).

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
