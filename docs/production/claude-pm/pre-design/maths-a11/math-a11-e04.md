# math-a11-e04: How do logarithms solve a^x = b?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci740d04cc` (Logarithmic functions): Explain that y = a^x is equivalent to x = log_a y for a > 0 and a ≠ 1, and use the equivalence to solve equations of the form a^x = b, for a > 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `ci03c5d345` (Logarithmic functions): Use digital tools to determine rational and irrational values of exponential and logarithmic expressions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: partial. Gap: Calculator use appears (e^x key, ln and log keys). Using digital tools to tell rational from irrational values is not addressed.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-e03: log_a y as an index; converting between index and log form. math-a11-e01: Exponential graphs pass every positive height once.

**Prior video:** math-a11-e03.

**Start:** Recall that log_a y is the index that turns a into y (e03); the equation 2^x = 100 from e03's opening is still unsolved.

**Stop:** Explain that y = a^x is equivalent to x = log_a y (a > 0, a ≠ 1) and use it to solve a^x = b exactly; use a calculator (log or log_□ keys, or ln) to evaluate the answer; use digital tools to decide which exponential and log values are rational (exact) and which are irrational and must be rounded. Equations needing the log laws are e06; the change of base proof is e07.

**Next:** math-a11-e05.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `eeecfa03787ce802d5a5d42720268aa9104b31abf0db98f9d49400fa1f8f66d9`. Title: Change of Base & Logarithmic Equations. Lesson id maths-adv-y11-m4-l08.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `change-of-base-and-solving`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson08.sa.html, card "Change of base and solving log equations"

This is essential for solving equations like $2^x = 5$, where we need $x = \log_2 5 = \dfrac{\ln 5}{\ln 2}$.

The rest of lesson08 is e06 and e07.

Read-only source: [exponential-and-logarithmic-functions/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3205d5637f9643d0353d79d6efff112e7578bd304963e933fa1d81c855bd0f19`. Title: The Number $e$ and Natural Exponentials. Lesson id maths-adv-y11-m4-l03.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-e`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson03.sa.html, card "What is e?", evaluating with technology

Evaluating with technology. Use the $e^x$, $\ln$ and $\log$ keys to evaluate $e^{1.7}$, $\ln 12$ and $\log_2 40$, the last by change of base. Notice which results are exact and which are not: $\ln 1 = 0$ and $\log_2 8 = 3$ are rational, while $e^{1.7} \approx 5.4739$ and $\ln 12 \approx 2.4849$ are irrational and must be rounded. Rounding is a decision you make and state, not something the calculator decides for you.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson05 revisit: 2^x = 100 gives x = log_2 100 ≈ 6.644. lesson08 drill 4: 2^x = 7 gives x = log_2 7 ≈ 2.807. lesson08 we-1: log_3 7 ≈ 1.771.
- lesson03: e^1.7 ≈ 5.4739, ln 12 ≈ 2.4849, log_2 40 ≈ 5.3219; ln 1 = 0 and log_2 8 = 3 are rational.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Dividing: 2^x = 100 gives x = 50.
- Writing x = log_100 2 (base and argument swapped).
- Rounding an exact answer that is rational (log_2 8 = 3).
- Presenting a calculator decimal as exact without "≈".

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The e01 graph y = 2^x with a level line y = 100 (`StudioLevelLine`); the meeting point drops to the x-axis as "x = log_2 100".
- A calculator `ScreenApp` showing log_2 100 = 6.6438561... and log_2 8 = 3, with an "exact" or "irrational, rounded" tag on each.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Solve 3^x = 20, giving an exact answer and its value to 3 decimal places. Between which two whole numbers must it lie?

**Worked answer:** x = log_3 20 ≈ 2.727. It lies between 2 and 3, because 3^2 = 9 < 20 < 27 = 3^3.

### Question 2

Solve 5 × 2^x = 40 and 2^x = 40. Which answer is rational?

**Worked answer:** First: 2^x = 8, so x = 3, which is rational. Second: x = log_2 40 ≈ 5.322, which is irrational (no rational power of 2 equals 40), so it is rounded.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A phone game whose upgrade costs rise 15% each level from 100 coins: which level first costs over 10 000 coins? 100 × 1.15^n = 10 000 gives n = log_1.15 100 ≈ 33 (games, phones).
- Halving a 1 m length of ribbon again and again: after how many cuts is it under 1 cm? 2^(-n) < 0.01 gives n > log_2 100 ≈ 6.6, so 7 cuts (home).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Order: e04 comes before the log laws (e05) and change of base (e07). Solve a^x = b by the definition and evaluate with a calculator's log_□ key or by trusting the app; "take ln of both sides" waits for e06, and ln b / ln a waits for e07.
- `ci03c5d345` is partial: the site uses the keys but never asks which values are rational. Question 2 and the screen tags are original teaching.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
