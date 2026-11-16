# math-a11-e07: Why does the change of base rule work?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ciae7673fb` (Logarithmic functions): Prove the change of base rule log_a x = (log_b x)/(log_b a) and use it to solve problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-e05: The power law log_b (a^y) = y log_b a. math-a11-e03: Converting between log and index form. math-a11-e04: Exact log answers such as log_2 7.

**Prior video:** math-a11-e06.

**Start:** Recall that log_2 7 is exact but needs a value (e04), and the power law (e05).

**Stop:** Prove the change of base rule log_a x = log_b x / log_b a (let y = log_a x, so a^y = x; take log_b; use the power law; divide by log_b a, which is not 0 because a ≠ 1) and use it to evaluate logs and solve problems.

**Next:** math-a11-e08.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `eeecfa03787ce802d5a5d42720268aa9104b31abf0db98f9d49400fa1f8f66d9`. Title: Change of Base & Logarithmic Equations. Lesson id maths-adv-y11-m4-l08.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `change-of-base-and-solving`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson08.sa.html, `we-1`

PROBLEM 1 · CHANGE OF BASE Evaluate $\log_3 7$ to 3 decimal places. 1 $\log_3 7 = \dfrac{\ln 7}{\ln 3}$ Change of base to natural logarithm. 2 $\approx \dfrac{1.946}{1.099} \approx 1.771$ Use calculator values for $\ln 7$ and $\ln 3$.

### Source exponential-and-logarithmic-functions/lesson08.sa.html, card "Change of base and solving log equations", proof

Proving it. Let $y = \log_a x$. By the definition of a logarithm that is exactly the statement $a^y = x$. Take $\log_b$ of both sides, where $b$ is any base you can actually evaluate: $\log_b (a^y) = \log_b x$. The power law from Lesson 7 brings the index to the front: $y \log_b a = \log_b x$. Divide by $\log_b a$, which is never zero because $a \neq 1$: $y = \dfrac{\log_b x}{\log_b a}$. Since $y$ was defined as $\log_a x$, that is the change of base rule, and choosing $b = e$ gives the $\ln$ form above. Why $a \neq 1$ matters. If $a$ were $1$ then $\log_b a = 0$ and the division would be undefined, which is the same reason $1$ is excluded as a logarithm base in the first place. The proof needs that exclusion; it does not merely inherit it.

Other worked examples in this lesson (we-2 and we-3 are e06's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: log_3 7 = ln 7/ln 3 ≈ 1.946/1.099 ≈ 1.771.
- Drill 1: log_5 12 ≈ 1.54. Q1: log_4 15 ≈ 1.953. Revisit: log_5 30 ≈ 2.11. lesson03: log_2 40 ≈ 5.322.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Putting the base on top: ln 3/ln 7.
- Writing ln 7 - ln 3 or ln(7/3) for log_3 7.
- Rounding ln 7 and ln 3 early, then dividing (1.946/1.099 = 1.7707 instead of 1.7712).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `WorkingBoard` proof in four rows, each with its reason chip (definition, take log_b, power law, divide).
- Two log scales side by side (`LogRuler`): base 2 and base 8 marks for the same numbers; every base-2 reading is exactly three times the base-8 reading (log_2 x = log_8 x / log_8 2 = 3 log_8 x), one fixed ratio for every x.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Use the change of base rule to evaluate log_7 50 to 3 decimal places, and check your answer by raising 7 to that power.

**Worked answer:** log_7 50 = ln 50/ln 7 ≈ 2.010. Check: 7^2.010 ≈ 50.

### Question 2

Show that log_4 x = (1/2) log_2 x, and hence solve log_2 x + log_4 x = 6.

**Worked answer:** log_4 x = log_2 x / log_2 4 = (1/2) log_2 x. So (3/2) log_2 x = 6, log_2 x = 4 and x = 16.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A phone camera's 2× and 3× zoom buttons: the presses needed to reach 100× are log_2 100 and log_3 100, and their ratio is always log_2 3 (phones).
- A game that eliminates two-thirds of players each round against one that eliminates half: rounds needed are log_3 N and log_2 N, one a fixed multiple of the other (games).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `exponential-and-logarithmic-functions/lesson08.sa.html`, step `drill`, revisit. Old text: "Earlier you were asked how to compute $\log_5 30$ using only $\log_{10}$ or $\ln$." The opening is a currency-exchange analogy and never asks this. Correction: "How would you compute $\log_5 30$ using only $\log_{10}$ or $\ln$?"

Decisions for Claude:

- Year 12 d04 relies on `ciae7673fb` with b = e; finish on log_a x = ln x / ln a.
- The site's currency-exchange hook resembles a pack suggestion for w27 (travel money); the zoom buttons avoid it.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
