# math-a11-e08: How is the log graph a reflection of the exponential graph?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci5d370004` (Logarithmic functions): Graph the logarithmic function y = log_a x for a > 0 and a ≠ 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `ci9eb0125c` (Logarithmic functions): Use graphing applications to identify the graphs of y = a^x and y = log_a x as reflections of each other in the line y = x, in cases where a > 1 and 0 < a < 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: partial. Gap: The reflection in y = x is shown for a > 1. The case 0 < a < 1 is not shown.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-e01: Graphs of a^x for a > 1 and 0 < a < 1. math-a11-e03: log_a x as the index, so log_a a^x = x. math-a11-w09: Domain and range.

**Prior video:** math-a11-e07.

**Start:** Recall the graph of 2^x and its table (e01); swap every pair (x, y) to (y, x).

**Stop:** Graph y = log_a x for a > 0, a ≠ 1: x-intercept (1, 0), vertical asymptote x = 0, domain x > 0, range all real y, increasing for a > 1 and decreasing for 0 < a < 1; use graphing applications to identify y = a^x and y = log_a x as reflections in y = x for a > 1 and for 0 < a < 1. Transformed log graphs are graph transformations; the derivative of ln x is Year 12 d03.

**Next:** math-a11-t01.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0416384db2c1c0a896aea2f84b94e849ff20fcff7149a94db810ef41195ce5ca`. Title: Graphs of Logarithmic Functions. Lesson id maths-adv-y11-m4-l06.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `sketching-logarithmic-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson06.sa.html, `we-1`

PROBLEM 1 · SKETCH FROM SCRATCH Sketch $y = \ln x$, labelling all key features. 1 Vertical asymptote: $x = 0$ (as $x \to 0^+$, $\ln x \to -\infty$) The natural log is undefined at $x \leq 0$. Draw as a dashed line first. 2 $x$-intercept: $(1, 0)$ since $\ln 1 = 0$ $e^0 = 1$, so $\ln 1 = 0$ by the inverse relationship. 3 Second point: $(e, 1)$ since $\ln e = 1$ $\ln e = 1$ by definition of the natural log. 4 Draw an increasing curve from the bottom-left, approaching $x = 0$ without touching, passing through $(1, 0)$ and $(e, 1)$, rising slowly to the right. $\ln x$ is the inverse of $e^x$, so it grows far slower than any linear function.

### Source exponential-and-logarithmic-functions/lesson06.sa.html, step `drill`, revisit

Earlier you predicted which line $y = 2^x$ and $y = \log_2 x$ are mirror images across. The answer is $y = x$, because logarithms and exponentials are inverse functions, every point $(a, b)$ on one becomes $(b, a)$ on the other. The vertical asymptote $x = 0$ of the log graph corresponds exactly to the horizontal asymptote $y = 0$ of the exponential graph, another manifestation of that reflection.

Other worked examples in this lesson (we-2 and we-3 use log_a(x - h) + k, which belongs to the g strand) are deferred source context, not part of this video.

Read-only source: [exponential-and-logarithmic-functions/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c5f53d12d728a75a0a8e8187d0188e05e56a1a150d2260bda7bedcde19338239`. Title: Introduction to Logarithmic Functions. Lesson id maths-adv-y11-m4-l05.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-a-logarithm`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson05.sa.html, `we-3`

PROBLEM 3 · DOMAIN Find the domain of $f(x) = \log_2(x - 3)$. 1 For $\log_2(x - 3)$ to be defined, the argument must be positive: $x - 3 > 0$ The logarithm is only defined for positive inputs. 2 $x - 3 > 0 \implies x > 3$ Solve the inequality by adding 3 to both sides. 3 Domain: $(3, \infty)$ All real numbers strictly greater than 3. Note: $x = 3$ is excluded because $\log_2(0)$ is undefined.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson06 we-1: ln x through (1, 0) and (e, 1), asymptote x = 0.
- Reflection pairs: on 3^x, (0, 1), (1, 3), (-1, 1/3); on log_3 x, (1, 0), (3, 1), (1/3, -1). log_(1/2) 8 = -3.
- lesson06 Q3: (1, 1) lies on y = e^(x - 1) and on y = ln x + 1. lesson05 we-3: log_2 (x - 3) needs x > 3.
- lesson06 drill 3: log_2 (x - 3) + 2 = 0 gives x = 13/4. Drill 4 (ln 2x) is wrong on the site; see section 8.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Drawing the log curve crossing x = 0 or starting at the origin.
- Reflecting in the x-axis instead of the line y = x.
- Thinking log graphs always increase (0 < a < 1 gives a decreasing log graph).
- Giving the range as y > 0.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `StudioSwapReflection` or `ReflectionDemo`: points of a^x fly across y = x to their swapped positions and trace log_a x; the horizontal asymptote turns into the vertical one.
- A base slider through a = 1 (excluded): the pair 2^x and log_2 x, then (1/2)^x and log_(1/2) x, both still mirror images in y = x.
- A graphing-application screen (`ScreenApp`) plotting both curves and y = x for the "with graphing applications" wording.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Sketch y = 3^x and y = log_3 x on the same axes, marking two points on each that are reflections of each other in y = x.

**Worked answer:** For example (0, 1) and (1, 3) on 3^x reflect to (1, 0) and (3, 1) on log_3 x; also (-1, 1/3) and (1/3, -1). The asymptote y = 0 of 3^x becomes x = 0 for log_3 x.

### Question 2

For y = log_(1/2) x, state the domain, range, x-intercept and asymptote, say whether it is increasing or decreasing, and find y when x = 8.

**Worked answer:** Domain x > 0, range all real y, x-intercept (1, 0), asymptote x = 0, decreasing (it is the reflection of (1/2)^x). At x = 8: (1/2)^y = 8, so y = -3.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Typing speed while learning a new phone keyboard: fast gains early, slower later, a log-shaped learning curve (phones).
- Turning e01's markdown graph around: "after how many weeks is the jacket p dollars?" swaps the axes of 400 × 0.75^x, which is a log graph (money; reuses e01's object).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `exponential-and-logarithmic-functions/lesson06.sa.html`, step `drill`, comprehensive answers. Old text: "Drill 4: $\ln(2x)=\ln 2 + \ln x$, so it shifts $\ln x$ left by $\ln 2$ (horizontal compression). Asymptote still $x=0$." Adding $\ln 2$ to the output shifts the graph up by $\ln 2$, not left; equivalently it is a horizontal dilation by factor $\frac{1}{2}$. Correction: "Drill 4: $\ln(2x) = \ln 2 + \ln x$, so the graph of $\ln x$ moves up by $\ln 2 \approx 0.69$ (the same as a horizontal compression by factor $\frac{1}{2}$). Asymptote still $x = 0$."
- `exponential-and-logarithmic-functions/lesson06.sa.html`, step `sketching-logarithmic-functions`. Old text: "Key features: vertical asymptote $x = 0$, $x$-intercept $(1, 0)$, passes through $(2, 1)$ and $(\frac{1}{2}, -1)$." under "$y = \log_a x$ (for $a > 1$)". $(2, 1)$ and $(\frac{1}{2}, -1)$ hold only for base 2. Correction: "passes through $(a, 1)$ and $(\frac{1}{a}, -1)$ (for $y = \log_2 x$: $(2, 1)$ and $(\frac{1}{2}, -1)$)."

Decisions for Claude:

- `ci9eb0125c` is partial: the site shows the reflection for a > 1 only. The 0 < a < 1 case is original teaching.
- Year 12 d03 assumes "ln x is the reflection of e^x in y = x" and asks root to add the codename: it is `ci9eb0125c`, owned here. Include the e^x and ln x pair explicitly.
- Next is t01, the first trigonometry video in the recommended strand order.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
