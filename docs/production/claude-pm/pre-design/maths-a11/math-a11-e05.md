# math-a11-e05: How do the log laws follow from the index laws?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci348896a1` (Logarithmic functions): Derive the laws of logarithms from the laws of indices log_a m + log_a n = log_a (mn), log_a m - log_a n = log_a (m/n) and log_a (m^n) = nlog_a m [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `ci55afa938` (Logarithmic functions): Justify the logarithmic results log_a a = 1, log_a 1 = 0 and log_a (1/x) = -log_a x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: partial. Gap: log_a a = 1 and log_a 1 = 0 are used. log_a(1/x) = -log_a x is not justified.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-e03: Logs as indices; log_a a^x = x and a^(log_a x) = x. math-a11-w01: Index laws: a^m a^n = a^(m + n), a^m / a^n = a^(m - n), (a^m)^n = a^(mn), a^0 = 1.

**Prior video:** math-a11-e04.

**Start:** Recall the three index laws (w01) and that a log is an index (e03).

**Stop:** Derive log_a m + log_a n = log_a (mn), log_a m - log_a n = log_a (m/n) and log_a (m^n) = n log_a m from the index laws (m, n > 0); justify log_a a = 1, log_a 1 = 0 and log_a (1/x) = -log_a x. Using the laws to solve equations is e06.

**Next:** math-a11-e06.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `89d0377ec565b7286198c6d909f55b1c0cdfa8519432249e8bc3476259fe90fb`. Title: Laws of Logarithms. Lesson id maths-adv-y11-m4-l07.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `why-do-the-log-laws`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson07.sa.html, `we-1`

PROBLEM 1 · PRODUCT LAW Simplify $\log_2 3 + \log_2 4$. 1 $\log_2 3 + \log_2 4 = \log_2(3 \times 4)$ Product law: sum of logs = log of product. 2 $= \log_2 12$ $3 \times 4 = 12$.

### Source exponential-and-logarithmic-functions/lesson07.sa.html, `we-2`

PROBLEM 2 · QUOTIENT LAW Simplify $\log_3 54 - \log_3 2$. 1 $\log_3 54 - \log_3 2 = \log_3\!\left(\dfrac{54}{2}\right)$ Quotient law: difference of logs = log of quotient. 2 $= \log_3 27 = \log_3(3^3) = 3$ $\frac{54}{2} = 27 = 3^3$, so $\log_3 27 = 3$.

### Source exponential-and-logarithmic-functions/lesson07.sa.html, `we-3`

PROBLEM 3 · ALL THREE LAWS Express $\log_a\!\left(\dfrac{x^2\sqrt{y}}{z^3}\right)$ in terms of $\log_a x$, $\log_a y$, and $\log_a z$. 1 $= \log_a(x^2\sqrt{y}) - \log_a(z^3)$ Quotient law first. 2 $= \log_a(x^2) + \log_a(y^{1/2}) - \log_a(z^3)$ Product law on the numerator. 3 $= 2\log_a x + \tfrac{1}{2}\log_a y - 3\log_a z$ Power law on each term. Note $\sqrt{y} = y^{1/2}$.

### Source exponential-and-logarithmic-functions/lesson07.sa.html, card "Why do the log laws work?"

If $m = \log_a x$ and $n = \log_a y$, then $x = a^m$ and $y = a^n$. Multiplying gives $xy = a^m \cdot a^n = a^{m+n}$, so $\log_a(xy) = m + n = \log_a x + \log_a y$. The same reasoning yields the quotient and power laws.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: log_2 3 + log_2 4 = log_2 12. we-2: log_3 54 - log_3 2 = log_3 27 = 3. we-3: log_a (x^2 sqrt y / z^3) = 2 log_a x + (1/2) log_a y - 3 log_a z.
- Drills: log_5 6; log_2 24 - log_2 3 = 3; log_2 8 + log_2 4 - log_2 2 = 4. Q1: log_3 6 + log_3 (3/2) = 2. Hook: 10^0.8 ≈ 6.31.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- log_a (x + y) = log_a x + log_a y.
- (log_a x)^n = n log_a x.
- log_a x × log_a y = log_a (xy).
- Thinking log_a (1/x) is 1/log_a x.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Two matching columns: each index law on the left and the log law it becomes on the right, joined by "let m = a^p, n = a^q" (`EquationStrip`).
- A slide rule as two coded log scales: sliding one along the other adds lengths and so multiplies numbers (2 × 3 lands on 6).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Given log_2 5 ≈ 2.32, find log_2 20, log_2 (1/5) and log_2 125.

**Worked answer:** log_2 20 = log_2 4 + log_2 5 ≈ 2 + 2.32 = 4.32. log_2 (1/5) = -log_2 5 ≈ -2.32. log_2 125 = 3 log_2 5 ≈ 6.96 (6.97 from the unrounded value).

### Question 2

Prove that log_a (1/x) = -log_a x for x > 0, using the index laws.

**Worked answer:** Let p = log_a x, so x = a^p. Then 1/x = a^(-p), so log_a (1/x) = -p = -log_a x. (Or: log_a (1/x) = log_a 1 - log_a x = 0 - log_a x.)

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A slide rule: the tool that multiplied numbers by adding lengths on log scales (home; the object only).
- Counting the digits of a big number: log_10 (2^10) = 10 log_10 2 ≈ 3.01, so 2^10 has 4 digits (games, phones).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- `ci55afa938` is partial: log_a (1/x) = -log_a x is not justified on the site. Question 2 and one board row cover it.
- Year 12 d04 assumes ln(1/3) = -ln 3 and log_a 1 = 0; state both with base e as well.
- The site's hook (star magnitudes) is science; it is not needed.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
