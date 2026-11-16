# math-a11-e06: How do the log laws simplify expressions and solve equations?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cia453eab7` (Logarithmic functions): Apply the logarithmic laws and results to simplify expressions, solve equations and prove results, using digital tools where necessary [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-e05: The three log laws and log_a 1 = 0, log_a a = 1. math-a11-e04: Solving a^x = b by the definition. math-a11-w04: Solving quadratics by factorising.

**Prior video:** math-a11-e05.

**Start:** Recall the three laws (e05); an equation like log_2 (x + 1) + log_2 (x - 1) = 3 now has a way in.

**Stop:** Apply the log laws and results to simplify expressions (expand and condense), solve log equations (combine, convert to index form, check every argument is positive) and exponential equations with different bases (take logs of both sides, power law), and prove simple results, using digital tools where necessary.

**Next:** math-a11-e07.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `eeecfa03787ce802d5a5d42720268aa9104b31abf0db98f9d49400fa1f8f66d9`. Title: Change of Base & Logarithmic Equations. Lesson id maths-adv-y11-m4-l08.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `change-of-base-and-solving`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson08.sa.html, `we-2`

PROBLEM 2 · LOG EQUATION WITH DOMAIN CHECK Solve $\log_2(x+1) + \log_2(x-1) = 3$. 1 $\log_2[(x+1)(x-1)] = 3$ Product law: sum of logs = log of product. 2 $(x+1)(x-1) = 2^3 = 8$ Convert to exponential form. 3 $x^2 - 1 = 8$, so $x^2 = 9$, giving $x = \pm 3$ Expand difference of squares and solve. 4 Domain: $x + 1 > 0$ and $x - 1 > 0$, so $x > 1$. Thus $x = 3$ only. $x = -3$ makes $x - 1 = -4 < 0$, which is invalid. Reject the extraneous solution.

### Source exponential-and-logarithmic-functions/lesson08.sa.html, `we-3`

PROBLEM 3 · EXPONENTIAL EQUATION DIFFERENT BASES Solve $3^{x+1} = 5^{2x}$. 1 Take logarithms of both sides: $\ln(3^{x+1}) = \ln(5^{2x})$ Use logs to bring down the exponents. 2 $(x+1)\ln 3 = 2x\ln 5$ Power law on both sides. 3 $x\ln 3 + \ln 3 = 2x\ln 5$ Expand the left side. 4 $\ln 3 = x(2\ln 5 - \ln 3)$, so $x = \dfrac{\ln 3}{2\ln 5 - \ln 3} \approx \dfrac{1.099}{3.219 - 1.099} \approx 0.518$ Collect $x$ terms on the right and solve.

Other worked examples in this lesson (we-1, change of base, is e07's) are deferred source context, not part of this video.

Read-only source: [exponential-and-logarithmic-functions/lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `89d0377ec565b7286198c6d909f55b1c0cdfa8519432249e8bc3476259fe90fb`. Title: Laws of Logarithms. Lesson id maths-adv-y11-m4-l07.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `why-do-the-log-laws`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson07.sa.html, step `practice-short-answer`, Q3

Write $3\log_a x - \log_a y + \dfrac{1}{2}\log_a z$ as a single logarithm. (3 marks)

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson08 we-2: (x + 1)(x - 1) = 8, x = ±3, domain x > 1, so x = 3. Drill 3: x(x - 2) = 8, x = 4 (reject -2). Q2: x^2 - 1 = 3, x = 2 (reject -2). Drill 2: x + 2 = 9, x = 7.
- lesson08 we-3: 3^(x + 1) = 5^(2x) gives x = ln 3/(2 ln 5 - ln 3) ≈ 0.518. Drill 5: 5^(x - 1) = 3^(x + 1) gives x = ln 15/ln(5/3) ≈ 5.30. Q3: 4^(x + 1) = 7^x gives x ≈ 2.48.
- lesson07 Q2: 2 log_a x + log_a y - (1/2) log_a z. Q3: log_a (x^3 sqrt z / y).

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Adding arguments: log_a x + log_a y = log_a z read as x + y = z.
- Keeping a solution that makes an argument zero or negative.
- Cancelling "log" from both sides of a sum.
- Writing (x + 1) ln 3 as x ln 3 + 1.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `WorkingBoard` with a domain strip (`StudioDomainStrip`) shading x > 1 from the first line, so the rejected root visibly falls outside it.
- For 3^(x + 1) = 5^(2x): both sides as curves meeting at x ≈ 0.518, the algebra on the board landing on the same value.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Solve log_6 x + log_6 (x - 5) = 2.

**Worked answer:** log_6 (x(x - 5)) = 2, so x^2 - 5x = 36, (x - 9)(x + 4) = 0. Both arguments need x > 5, so x = 9 (reject -4).

### Question 2

Solve 2^(x + 3) = 3^x, giving an exact answer and its value to 2 decimal places.

**Worked answer:** (x + 3) ln 2 = x ln 3, so x(ln 3 - ln 2) = 3 ln 2 and x = 3 ln 2/(ln 3 - ln 2) = ln 8/ln(3/2) ≈ 5.13.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Camera exposure stops on a phone: each stop doubles the light, so the number of stops between two settings is log_2 of the light ratio, and stops add when ratios multiply (phones).
- Doubling a recipe again and again: the number of doublings to scale from 4 serves to 64 serves is log_2 16 = 4 (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Proving results (in `cia453eab7`) can be one short "show that" row, for example log_a (a^2/sqrt a) = 3/2.
- If e06 runs long, simplifying and solving can split, but keep the domain check with the equations.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
