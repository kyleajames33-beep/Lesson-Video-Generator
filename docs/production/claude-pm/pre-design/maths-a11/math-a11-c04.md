# math-a11-c04: How do shrinking secants find the gradient of a curve?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci447b12b9` (The derivative): Examine the gradient of a curve at a point on the curve using graphing applications [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `cif58445af` (The derivative): Approximate the gradient of a curve f(x) = x^n at a point P(c, f(c)) by considering the gradient of the secant through P and Q(c + h, f(c + h)) as the magnitude of h approaches zero, using graphing applications or a spreadsheet [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci8fd626a1` (Graphical applications of the derivative): Numerically estimate the value of the derivative at a point on the graph of a power of x, with and without the use of digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c02: Shrinking the interval improves an average speed towards the instantaneous speed. math-a11-w08: Evaluating f(c + h) by substitution. math-a11-w29: A corner in a graph such as |x| at 0.

**Prior video:** math-a11-c03.

**Start:** Recall that a shorter interval gives a better speed estimate (c02), then generalise the second point to Q(c + h, f(c + h)).

**Stop:** Approximate the gradient of f(x) = x^n at P(c, f(c)) by the secant through Q(c + h, f(c + h)) as h approaches zero, in a table (spreadsheet) and with a graphing application, using positive and negative h; numerically estimate the derivative at a point on a power of x with and without digital tools; note that a two-sided check can fail at a corner. The symbol f'(x) and its definition are c05; the algebraic limit is c06; the pattern nx^(n - 1) is c07.

**Next:** math-a11-c05.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson13.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson13.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `bfaae610853e1e55504c28dc9f7f62020ae926bded4dddd275e953f25c9e5e33`. Title: Exploring Gradients with Digital Tools. Lesson id maths-adv-y11-m3-l17.

Data-step ids: `recall-your-gut-answer-first`, `watch-the-secant-become-the`, `what-you-ll-master`, `building-the-table`, `model`, `quick-fire-practice`, `revisit-your-three-chord-gradients`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson13.sa.html, `we-1`

PROBLEM 1 · A TABLE OF SECANT GRADIENTS For $f(x) = x^2$, tabulate the secant gradient at $a = 2$ for $h = 1, 0.5, 0.1, 0.01$, and state the limit. 1 $h = 1$: $\dfrac{9 - 4}{1} = 5$ Second point at $x = 3$. 2 $h = 0.5$: $4.5$; $h = 0.1$: $4.1$; $h = 0.01$: $4.01$ Each row halves or better the gap to the limit. 3 The gradients tend to $4$, so $f'(2) = 4$ Confirmed by $\dfrac{(2+h)^2 - 4}{h} = 4 + h$.

### Source introduction-to-differentiation/lesson13.sa.html, `we-2`

PROBLEM 2 · ESTIMATING A DERIVATIVE NUMERICALLY Estimate $f'(3)$ for $f(x) = x^3$ using $h = 0.001$, and compare with the exact value. 1 $f(3.001) = 27.027009$ and $f(3) = 27$ Evaluate both to enough decimal places. 2 $\dfrac{27.027009 - 27}{0.001} = 27.009$ The numerical estimate. 3 Exact: $f'(x) = 3x^2$ so $f'(3) = 27$; the estimate is high by $0.009$ The error is roughly proportional to $h$.

### Source introduction-to-differentiation/lesson13.sa.html, `we-3`

PROBLEM 3 · A TWO-SIDED CHECK AT A CORNER For $f(x) = |x|$ at $a = 0$, estimate the derivative using $h = 0.001$ and $h = -0.001$. 1 $h = 0.001$: $\dfrac{0.001 - 0}{0.001} = 1$ Approaching from the right. 2 $h = -0.001$: $\dfrac{0.001 - 0}{-0.001} = -1$ Approaching from the left. 3 The two sides disagree, so $f'(0)$ does not exist A corner has no single tangent.

### Source introduction-to-differentiation/lesson13.sa.html, card "Building the table"

For $f(x) = x^2$ at $a = 2$: $h = 1$ gives $5$, $h = 0.5$ gives $4.5$, $h = 0.25$ gives $4.25$, $h = 0.1$ gives $4.1$. The pattern is unmistakable and the limit is $4$. The algebra confirms it: $\dfrac{(2+h)^2 - 4}{h} = \dfrac{4h + h^2}{h} = 4 + h$, which tends to $4$ as $h \to 0$. The table and the algebra are the same statement.

### Source introduction-to-differentiation/lesson13.sa.html, card "When the numerical estimate breaks down"

For $f(x) = x^2$ at $a = 2$, an estimate at $h = 10^{-8}$ is excellent. At $h = 10^{-14}$ a spreadsheet may return something visibly wrong, or even $0$.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: x^2 at a = 2: h = 1, 0.5, 0.25, 0.1, 0.01 give 5, 4.5, 4.25, 4.1, 4.01 (each is 4 + h); limit 4.
- we-2: (3.001)^3 = 27.027009001 exactly, so the estimate is 27.009001; the site rounds f(3.001) to 27.027009 and writes "= 27.009" and "high by 0.009". Exact f'(3) = 27.
- we-3: |x| at 0: h = 0.001 gives 1, h = -0.001 gives -1.
- Practice: x^2 at a = 5, h = 0.1: 10.1. Q1 at a = 3: 7, 6.1, 6.01, limit 6. Q2: ((a + h)^2 - a^2)/h = 2a + h.
- Floating point (IEEE double, the arithmetic of spreadsheets and most apps) for x^2 at 2: h = 10^-8 gives 3.99999998; 10^-12 gives 4.00036; 10^-14 gives 4.0856; 10^-16 gives 0.

Every example above was recalculated with SymPy and Python floats (work in the scratchpad, sympy 1.14.0). All site answers match within the site's stated rounding; we-2's rounded lines are noted. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Setting h = 0 straight away, which gives 0/0.
- Using only positive h, so a corner goes unnoticed.
- Believing the smallest h a calculator allows is always best.
- Writing the secant gradient as (f(c + h) - f(c))/c instead of dividing by h.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `SecantToTangent` with a draggable Q on y = x^2 at P(2, 4), from h = 1 down to 0.01, the secant rotating onto the tangent; a round zoom inset (`MagnifierLeader`) shows the curve looking straight up close.
- A spreadsheet-style `StudioToolPanel` (table mode): columns h, f(2 + h), gradient filling row by row (5, 4.5, 4.25, 4.1, 4.01), then a second block with negative h approaching from below.
- `StudioOneSidedSecants` on y = |x| at 0: right-hand secants stay at 1, left-hand at -1, and the two readouts never meet.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

For f(x) = x^3 at P(1, 1), find the gradient of the secant PQ for h = 1, 0.1, 0.01 and -0.01. Use your results to estimate the gradient of the curve at P.

**Worked answer:** h = 1: (8 - 1)/1 = 7. h = 0.1: 3.31. h = 0.01: 3.0301. h = -0.01: 2.9701. The values close in on 3 from both sides, so the gradient at P is about 3.

### Question 2

Estimate the gradient of y = x^4 at x = 2 using h = 0.1 and h = -0.1, and explain why the true value lies between your two answers.

**Worked answer:** h = 0.1: (2.1^4 - 16)/0.1 = 34.481. h = -0.1: (16 - 1.9^4)/0.1 = 29.679. The curve gets steeper as x increases, so the right-hand secant is too steep and the left-hand one too shallow; the gradient (exactly 32) lies between them.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Zooming in on a winding road in a phone's map app: zoom far enough and every bend looks straight, which is why a tiny secant matches the tangent (phones, travel).
- A square sheet of pastry rolled out wider: its area is x^2, and the table of secants shows how fast the area grows per centimetre of side at x = 2 (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson13.sa.html`, step `what-you-ll-master`, key term "Rounding error". Old text: "Like this: at $h = 10^{-14}$ a spreadsheet may return $0$ for a gradient that is really $4$." In standard double precision the estimate at $h = 10^{-14}$ is about 4.09; it reaches 0 only near $h = 10^{-16}$. Correction: "Like this: at $h = 10^{-14}$ a spreadsheet returns about 4.09 for a gradient that is really 4, and at $h = 10^{-16}$ it can return 0."
- `introduction-to-differentiation/lesson13.sa.html`, `we-2`. Old text: "$f(3.001) = 27.027009$ and $f(3) = 27$" then "$= 27.009$". $3.001^3 = 27.027009001$, so these are rounded values written with equals signs. Correction: "$f(3.001) = 27.027009001$ and $f(3) = 27$" and "$= 27.009001$" (or use $\approx$).

Decisions for Claude:

- `ci447b12b9`, `cif58445af` and `ci8fd626a1` all live in lesson13; the site table is for x^2 only. Add one other power (x^3 or x^4, as in the questions) so "a curve f(x) = x^n" is not read as "x squared".
- The floating-point breakdown is optional author context; one sentence at most in narration ("a calculator can't subtract nearly equal numbers well").
- The |x| corner can be kept for c05, where the definition needs "if the tangent exists".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
