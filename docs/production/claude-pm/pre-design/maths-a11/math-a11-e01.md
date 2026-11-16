# math-a11-e01: How do the graphs of y = k a^x and y = k a^(-x) behave?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci98f43d14` (Exponential functions): Graph the exponential functions y = k(a^x) and y = k(a^(-x)) for constants a and k where a > 0, a ≠ 1 and k ≠ 0, and identify its asymptote, y-intercept, domain and range [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `ci69738291` (Exponential functions): Describe the behaviour of y = k(a^x) and y = k(a^(-x)) as x → ∞ and x → -∞ [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w01: Index laws, including a^0 = 1 and a^(-n) = 1/a^n. math-a11-w09: Domain and range. math-a11-w21: Asymptotes, as on y = k/x.

**Prior video:** math-a11-c18.

**Start:** Recall a^0 = 1 and a^(-n) = 1/a^n (w01), then tabulate 2^x for x = -2 to 3.

**Stop:** Graph y = k(a^x) and y = k(a^(-x)) for a > 0, a ≠ 1, k ≠ 0; identify the asymptote y = 0, the y-intercept (0, k), the domain (all real x) and range (y > 0 for k > 0, y < 0 for k < 0); describe the behaviour as x -> ∞ and x -> -∞; find k and a from two points. Translations such as a^(x - h) + c are graph transformations (g strand); e and gradients are e02.

**Next:** math-a11-e02.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `06a097c97d0d7fd378a3a4b8ae1b71fe4a94584769cdc9a086a7a7141fcfd377`. Title: Introduction to Exponential Functions. Lesson id maths-adv-y11-m4-l01.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-an-exponential-function`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson01.sa.html, `we-1`

PROBLEM 1 · EVALUATING Evaluate $f(x) = 2^x$ at $x = -2,\ 0,\ 3$. 1 $f(-2) = 2^{-2} = \dfrac{1}{2^2} = \dfrac{1}{4}$ Negative exponent means reciprocal: $a^{-n} = \frac{1}{a^n}$. 2 $f(0) = 2^0 = 1$ Any non-zero base to the power 0 equals 1. 3 $f(3) = 2^3 = 8$ Positive integer exponent: $2 \times 2 \times 2 = 8$.

### Source exponential-and-logarithmic-functions/lesson01.sa.html, `we-2`

PROBLEM 2 · GROWTH OR DECAY? Determine whether $y = \left(\dfrac{1}{3}\right)^x$ shows growth or decay, and find the $y$-intercept. 1 Base $a = \dfrac{1}{3}$ Identify the base of the exponential function. 2 Since $0 < \dfrac{1}{3} < 1$, this is exponential decay. Bases strictly between 0 and 1 produce decay. 3 At $x = 0$: $y = \left(\dfrac{1}{3}\right)^0 = 1$. The $y$-intercept is $(0, 1)$. $a^0 = 1$ for any valid base, the $y$-intercept is always $(0, 1)$.

### Source exponential-and-logarithmic-functions/lesson01.sa.html, step `the-two-moves`

Base > 1 (growth) $y$ increases without bound as $x \to +\infty$ and approaches 0 as $x \to -\infty$. 0 < Base < 1 (decay) $y$ approaches 0 as $x \to +\infty$ and grows without bound as $x \to -\infty$. Negative exponents $a^{-n} = \dfrac{1}{a^n}$, a negative exponent creates a reciprocal, not a negative value.

Other worked examples in this lesson (we-3 is a bacteria model; its numbers are used below as a check only) are deferred source context, not part of this video.

Read-only source: [exponential-and-logarithmic-functions/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `935a7553cf5fdf177d348fa9f1d856ea28c54976a5a6e2fe32c01fe2720dbd8e`. Title: Graphs of Exponential Functions. Lesson id maths-adv-y11-m4-l02.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `key-features-and-transformations`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson02.sa.html, `we-1`

PROBLEM 1 · SKETCH THE BASIC CURVE Sketch $y = 2^x$ showing all key features. 1 Asymptote: $y = 0$ (the $x$-axis) As $x \to -\infty$, $2^x \to 0$. Draw a dashed line along the $x$-axis. 2 $y$-intercept: $(0, 1)$ since $2^0 = 1$ Substitute $x = 0$. Plot the point. 3 Additional points: $(1, 2)$ and $\left(-1, \tfrac{1}{2}\right)$ $2^1 = 2$ and $2^{-1} = \tfrac{1}{2}$. These guide the sketch. 4 Draw a smooth increasing curve through these points, hugging $y = 0$ on the left and rising steeply on the right. State: range $y > 0$, domain all real $x$. Base $2 > 1$, so exponential growth: curve rises to the right.

### Source exponential-and-logarithmic-functions/lesson02.sa.html, `we-3`

PROBLEM 3 · FIND THE EQUATION Find the equation of an exponential curve passing through $(0, 3)$ and $(1, 6)$. 1 General form: $y = A \cdot b^x$ Use the form with a vertical dilation factor $A$ and base $b$. 2 At $(0, 3)$: $3 = A \cdot b^0 = A$, so $A = 3$ $b^0 = 1$, so the $y$-intercept gives $A$ directly. 3 At $(1, 6)$: $6 = 3 \cdot b^1 = 3b$, so $b = 2$ Substitute $A = 3$ and solve for $b$. 4 Equation: $y = 3 \cdot 2^x$ Verify: at $x = 0$, $y = 3$ ✓; at $x = 1$, $y = 6$ ✓.

Other worked examples in this lesson (we-2, y = 3^(x - 1) + 2, is a translation for the g strand) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson01 we-1: 2^-2 = 1/4, 2^0 = 1, 2^3 = 8. we-2: (1/3)^x decays, y-intercept (0, 1). we-3: 100 × 2^5 = 3200.
- lesson01 drills: 3^4 = 81, 3^-2 = 1/9; 10^x at -1, 0, 2 gives 0.1, 1, 100; 800 × (1/2)^3 = 100 g. Q1: (1/2)^x at -2, 0, 4 gives 4, 1, 1/16. Q2: 30 000 × 0.85^2 = 21 675; 30 000 × 0.85^4 = 15 660.19, so $15 660.
- lesson02 we-1: points (1, 2), (-1, 1/2) on 2^x. we-3: (0, 3) and (1, 6) give y = 3 × 2^x. Q2: (0, 5) and (2, 20) give a = 5, b = 2 (b > 0). Drill 5: (0, 1), (2, 9) give 3^x.
- lesson01 hook: 2^10 layers × 0.1 mm = 102.4 mm, about 10 cm; 2^42 × 0.1 mm is about 439 800 km.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading a^(-x) as negative values instead of the reflection of a^x in the y-axis.
- Putting the y-intercept of k a^x at (0, 1) instead of (0, k).
- Drawing the curve touching or crossing y = 0.
- Giving the range as y > 0 when k < 0.
- Accepting a negative base from two points (b^2 = 4 gives b = 2 only).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `ExponentialDemo` or `FunctionSimulator` with sliders for a and k: the curve through (0, k), the dashed asymptote, and readouts for domain and range that flip when k changes sign.
- A doubling table (x = -2 to 3) whose points drop onto the axes, then a mirror in the y-axis turning 2^x into 2^(-x).
- Two end-behaviour arrows labelled "x -> ∞" and "x -> -∞" with the y-values heading to 0 or growing without bound.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Sketch y = 3 × 2^(-x). State its asymptote, y-intercept, domain and range, and describe y as x -> ∞ and as x -> -∞.

**Worked answer:** Asymptote y = 0, y-intercept (0, 3), domain all real x, range y > 0. As x -> ∞, y -> 0; as x -> -∞, y grows without bound. (It is 3 × (1/2)^x, falling to the right.)

### Question 2

The graph of y = k a^x, with a > 0, passes through (0, -2) and (2, -18). Find k and a, and state the range.

**Worked answer:** At x = 0: k = -2. Then -2a^2 = -18, a^2 = 9, a = 3 (a > 0). y = -2 × 3^x, range y < 0.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- An unpaid credit-card debt growing 20% a year: 1000 × 1.2^x dollars (money).
- Weekly clearance markdowns of 25% on a $400 jacket: 400 × 0.75^x dollars, which can be written 400 × (4/3)^(-x) (money).
- A patch of mould on a loaf of bread that doubles in area each day (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `exponential-and-logarithmic-functions/lesson01.sa.html`, hook. Old text: "Most people guess under 10 cm. The real answer is $2^{10} = 1024$ layers, about 10 cm." The surprise contradicts itself: 1024 × 0.1 mm = 102.4 mm, which is about 10 cm, so a guess "under 10 cm" is nearly right. Correction: "Most people guess a few centimetres. The real answer is $2^{10} = 1024$ layers, just over 10 cm. Fold 42 times and it would pass the Moon."
- `exponential-and-logarithmic-functions/lesson02.sa.html`, step `what-you-ll-master`, key term. Old text: "Horizontal asymptote A horizontal line $y = c$ that the graph approaches as $x \to \pm\infty$ but never crosses." An exponential approaches its asymptote in one direction only, and graphs in general can cross a horizontal asymptote. Correction: "Horizontal asymptote A horizontal line $y = c$ that the graph approaches as $x \to \infty$ or as $x \to -\infty$. An exponential graph never reaches it."

Decisions for Claude:

- The 2024 form is y = k a^x and y = k a^(-x) (crosswalk note). lesson02 teaches y = a^(x - h) + k; keep translations for g01 and use lesson02 we-3 and Q2 (finding k and a) here.
- Year 12 d01 relies on `ci98f43d14` (graphs of exponentials). Include a k < 0 case so the range rule is complete.
- Avoid the folding-paper hook: Year 12 f-strand designs use folding paper as an anchor.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
