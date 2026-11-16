# math-a11-w09: Which inputs can a function accept, and which outputs can it give?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci7b72a364` (Introduction to functions and relations): Define the domain of a function f as the set of real numbers on which f is defined [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci0d9e1578` (Introduction to functions and relations): Define the range of a function f as the set of values of f(x) obtained as x varies over the domain of f [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ms_s6_y11_recognise_domains_and_ranges_of_function` (Properties of functions, relations and graphs): Recognise domains and ranges of functions and relations given in interval notation, as inequalities and as worded descriptions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci0c0bc407` (Properties of functions, relations and graphs): Determine and describe the domain and range of functions and relations, using interval notation, inequalities or worded descriptions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w08: f(x) notation and substitution. math-a11-w06: Solving linear inequalities.

**Prior video:** math-a11-w08.

**Start:** Recall solving a linear inequality and substituting into f(x).

**Stop:** Domain and range of functions from formulas and graphs, written in interval notation, as inequalities and in words; natural restrictions from denominators and square roots. Relations' domain and range wait for the circle video (w24). Log domains wait for e03.

**Next:** math-a11-w10.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `9367d5636a0259dcd79a77cc5688d658f87267b1744bc93ce61f9fa4552974e2`. Title: Domain & Range. Lesson id maths-adv-y11-m1-l03.

Data-step ids: `orient`, `domain-interval-notation`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson03.sa.html, `we-l03-1`

Worked example 1 · domain of a rational function +5 XP on full reveal Find the domain of $\displaystyle f(x) = \frac{5}{x - 3}$. Write your answer in interval notation. 1 Denominator cannot equal zero Identify the restriction, division by zero is undefined 2 $x - 3 \neq 0 \Rightarrow x \neq 3$ Solve for the excluded value 3 All real numbers except $3$ Write in words, this splits into two intervals 4 Domain: $(-\infty, 3) \cup (3, \infty)$ ✓ Use $\cup$ to join the two open intervals (open brackets because 3 is excluded)

### Source working-with-functions/lesson03.sa.html, `we-l03-2`

Worked example 2 · domain of a square root function +5 XP on full reveal Find the domain of $f(x) = \sqrt{2x + 6}$. 1 $2x + 6 \geq 0$ Set the radicand greater than or equal to zero, the expression under the square root must be non-negative 2 $2x \geq -6$ Subtract 6 from both sides 3 $x \geq -3$ Divide by 2, $x = -3$ is included (square bracket) because $\geq$ includes equality 4 Domain: $[-3, \infty)$ ✓ Square bracket at $-3$ (included), round bracket at $\infty$ (never reached)

### Source working-with-functions/lesson03.sa.html, `we-l03-3`

Worked example 3 · domain and range of a quadratic +5 XP on full reveal Find the domain and range of $f(x) = x^2 - 4x + 5$. 1 Domain: $(-\infty, \infty)$ Quadratic functions are polynomials, defined for all real $x$ 2 $x = \dfrac{-b}{2a} = \dfrac{4}{2} = 2$ Find the $x$-coordinate of the vertex using $x = -b/(2a)$ where $a=1$, $b=-4$ 3 $f(2) = (2)^2 - 4(2) + 5 = 4 - 8 + 5 = 1$ Find the $y$-coordinate of the vertex by substituting $x = 2$ 4 Range: $[1, \infty)$ ✓ Coefficient of $x^2$ is positive → parabola opens upward → minimum is at vertex; range starts at $y = 1$

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-l03-1: 5/(x - 3) has domain (-inf, 3) U (3, inf).
- we-l03-2: sqrt(2x + 6) has domain [-3, inf).
- we-l03-3: x^2 - 4x + 5 has vertex (2, 1) and range [1, inf). The site uses x = -b/(2a), which this route teaches later (w15); either reuse it as a quoted fact or swap in a graph-read range.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using a square bracket at infinity.
- Excluding the endpoint where the radicand is 0.
- Finding the domain from the simplified formula instead of the original.
- Confusing domain (inputs) with range (outputs).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- StudioDomainStrip with the denominator and radicand conditions.
- Graph squashed onto the x-axis (domain) and onto the y-axis (range) as shadows.
- IntervalPicture showing an excluded point as an open circle and a split domain as two rays.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Find the domain of f(x) = sqrt(6 - 2x) in interval notation, and state its range.

**Worked answer:** 6 - 2x >= 0 gives x <= 3, domain (-inf, 3]. Range [0, inf).

### Question 2

State the domain and range of h(x) = sqrt(x - 1) + 2.

**Worked answer:** Domain [1, inf) because x - 1 >= 0. The root is at least 0, so h(x) >= 2: range [2, inf).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A phone battery reading: the percentage is restricted to [0, 100].
- A youth ticket valid for ages 5 to 17 as an interval with both ends closed.
- Splitting a $60 bill among n friends: cost per person 60/n has no value at n = 0.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
