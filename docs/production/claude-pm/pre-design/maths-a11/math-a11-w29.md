# math-a11-w29: Where does a function break, and what makes it continuous?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci903515d1` (Piecewise-defined functions): Define informally that a function is continuous at a point if the curve can be drawn through the point without lifting the pen off the paper [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci1486e4cc` (Piecewise-defined functions): Identify points where piecewise-defined functions and other functions are not continuous [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci91b5bbaa` (Piecewise-defined functions): Define a discontinuity of a function informally as a point where the function is not continuous [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w28: Graphing piecewise functions with open and closed circles. math-a11-w21: Vertical asymptotes of y = k/x. math-a11-w02: Factorising and cancelling algebraic fractions.

**Prior video:** math-a11-w28.

**Start:** Recall graphing a piecewise function with open and closed circles (w28).

**Stop:** Define informally that a function is continuous at a point if its curve can be drawn through the point without lifting the pen; define a discontinuity as a point where it is not continuous; identify jumps, holes and vertical asymptotes in piecewise and other functions; test a piecewise join. No limits.

**Next:** math-a11-w30.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson12.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson12.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `4d3b5298151fb7304c1daccb9e2c0c9693d54d779e7d242fd174c43f442d550f`. Title: Continuity and Discontinuity. Lesson id maths-adv-y11-m1-l20.

Data-step ids: `recall-your-gut-answer-first`, `draw-it-without-lifting-the`, `what-you-ll-master`, `the-informal-definition-and-why`, `model`, `quick-fire-practice`, `revisit-your-two-sketches`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson12.sa.html, `we-1`

PROBLEM 1 · CLASSIFYING A DISCONTINUITY State where $y = \dfrac{x^2 - 9}{x - 3}$ is discontinuous, and what type of discontinuity it is. 1 The denominator is zero at $x = 3$, so the function is undefined there A function cannot be continuous at a point where it is not defined. 2 Factorise: $\dfrac{(x-3)(x+3)}{x-3} = x + 3$ for $x \neq 3$ The factor cancels, so away from $x = 3$ this is just a straight line. 3 The graph is the line $y = x + 3$ with a hole at $(3, 6)$, so it is a removable discontinuity A cancelled factor leaves a hole, not an asymptote.

### Source working-with-functions/lesson12.sa.html, `we-2`

PROBLEM 2 · PIECEWISE JOIN Determine whether $f(x) = \begin{cases} x + 1 & x < 2 \\ 3x & x \geq 2 \end{cases}$ is continuous at $x = 2$. 1 First piece as $x$ approaches 2: $2 + 1 = 3$ The value the earlier rule is heading to. 2 Second piece at $x = 2$: $3(2) = 6$ The value the later rule actually gives. 3 $3 \neq 6$, so there is a jump discontinuity at $x = 2$ The pieces do not meet, so the pen must lift.

### Source working-with-functions/lesson12.sa.html, `we-3`

PROBLEM 3 · INFINITE DISCONTINUITY Identify and classify every discontinuity of $y = \dfrac{2}{x^2 - 4}$. 1 $x^2 - 4 = 0$ when $x = 2$ or $x = -2$ Find where the denominator vanishes. 2 Neither factor cancels, since the numerator is the constant $2$ No cancellation means no hole. 3 Infinite discontinuities at $x = 2$ and $x = -2$, with vertical asymptotes there The curve runs off to infinity at both.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: (x^2 - 9)/(x - 3) = x + 3 for x not 3: hole at (3, 6), removable.
- we-2: x + 1 heads to 3 at x = 2, 3x gives 6: jump of size 3.
- we-3: 2/(x^2 - 4) has infinite discontinuities at x = 2 and x = -2.
- Site short answers also check: (x - 2)/(x^2 - 4) has a hole at (2, 1/4) and an asymptote at x = -2; x^2 and ax + 1 meet at x = 3 when a = 8/3.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Cancelling a common factor and forgetting the hole it leaves.
- Calling every zero denominator an asymptote.
- Checking a piecewise function everywhere except its joins.
- Thinking a jump means the function is undefined at the join.
- Saying y = 1/x is "not continuous" as a whole instead of naming the point.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A pen tracing each graph with a lift counter: the pen lifts at a jump, at a hole and at an asymptote, and each lift is labelled with its type.
- The cancelled factor shown as a punched-out hole on the line, with the coordinates computed from the simplified rule.
- A k slider on a piecewise join that closes the jump when the two pieces meet.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Identify and classify every discontinuity of y = (x^2 + x - 6)/(x^2 - 4).

**Worked answer:** y = (x + 3)(x - 2)/((x - 2)(x + 2)). The factor x - 2 cancels, leaving (x + 3)/(x + 2): a hole (removable) at (2, 5/4). x + 2 does not cancel: an infinite discontinuity (vertical asymptote) at x = -2.

### Question 2

f(x) = kx - 1 for x < 2 and f(x) = x^2 + 1 for x >= 2. Find k so that f is continuous at x = 2.

**Worked answer:** The first piece heads to 2k - 1 and the second gives 2^2 + 1 = 5. Continuous when 2k - 1 = 5, so k = 3.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Parcel postage by weight band: the price jumps at each band limit (money).
- A toll road's gantry: the fare jumps at the moment you pass it (travel).
- Tracing a bus route on a paper map: continuous means you can follow it without lifting your pen (travel).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Site copy says sine, cosine and exponentials are continuous. Those functions come later in this route; keep examples to polynomials, k/x and piecewise rules.
- The site treats y = 1/x as "continuous on its domain" with a discontinuity at 0. That matches the syllabus's informal use; keep both statements together if quoted.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
