# math-a11-e03: What is a logarithm, and how does it undo an exponential?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci604946ac` (Logarithmic functions): Define the logarithm of a number y, where y > 0, to any positive base a as the index to which a is raised to give y [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `ci5994ec54` (Logarithmic functions): Use the notation log_a y for the logarithm of y to the base a [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `ci7cd97f8c` (Logarithmic functions): Define the natural logarithm ln a = log_e a [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `cic84a1659` (Logarithmic functions): Recognise and use the logarithmic properties: log_a a^x = x for all real x, a^(log_a x) = x where x > 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-e01: Values of a^x for integer and negative x. math-a11-e02: Euler's number e. math-a11-w01: Index laws.

**Prior video:** math-a11-e02.

**Start:** Recall a table of 2^x (e01), then run it backwards: which power of 2 gives 8? gives 100?

**Stop:** Define the logarithm of y > 0 to base a > 0 (a ≠ 1) as the index to which a is raised to give y; use the notation log_a y; define ln a = log_e a; evaluate logs by converting to index form; use log_a a^x = x for all real x and a^(log_a x) = x for x > 0. Solving a^x = b is e04; the laws are e05; graphs are e08.

**Next:** math-a11-e04.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c5f53d12d728a75a0a8e8187d0188e05e56a1a150d2260bda7bedcde19338239`. Title: Introduction to Logarithmic Functions. Lesson id maths-adv-y11-m4-l05.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-a-logarithm`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson05.sa.html, `we-1`

PROBLEM 1 · EVALUATE Evaluate $\log_2 8$ and $\log_3 \dfrac{1}{9}$. 1 $\log_2 8$: find $y$ such that $2^y = 8$. Since $8 = 2^3$, we have $\log_2 8 = 3$. $2^3 = 8$, so the exponent needed is 3. 2 $\log_3 \dfrac{1}{9}$: find $y$ such that $3^y = \dfrac{1}{9}$. Since $\dfrac{1}{9} = 3^{-2}$, we have $\log_3 \dfrac{1}{9} = -2$. $3^{-2} = \frac{1}{9}$, so the exponent is $-2$. Negative logs are valid, they correspond to numbers between 0 and 1.

### Source exponential-and-logarithmic-functions/lesson05.sa.html, `we-2`

PROBLEM 2 · SOLVE Solve $\log_5 x = 3$. 1 $\log_5 x = 3$ means $5^3 = x$ Convert from logarithmic form to exponential form. 2 $x = 5^3 = 125$ Evaluate. Check: $\log_5 125 = 3$ since $5^3 = 125$. ✓

### Source exponential-and-logarithmic-functions/lesson05.sa.html, card "What is a logarithm?"

Because $a^y > 0$ for all real $y$ when $a > 0$, the output of an exponential is always positive. This means when we invert to get $x = a^y$, the input $x$ must be positive, explaining why $\log_a 0$ and $\log_a(\text{negative})$ are undefined .

Other worked examples in this lesson (we-3, a domain question, fits e08) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: log_2 8 = 3; log_3 (1/9) = -2. we-2: log_5 x = 3 gives x = 125.
- Drills: log_2 16 = 4, log_10 1000 = 3, log_3 (1/27) = -3, log_4 x = 2 gives 16, log_5 5^7 = 7, e^(ln 4) = 4. Match: log_2 32 = 5, log_5 1 = 0, log_3 (1/3) = -1, ln e^7 = 7. Quick check: log_4 64 = 3.
- Q1: log_3 81 = 4, log_2 (1/8) = -3, ln e^4 = 4. Q2: log_2 (x + 1) = 4 gives x = 15. Revisit: log_2 100 ≈ 6.644, between 6 and 7.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading log_2 8 as 8/2 or 2^8.
- Thinking a log cannot be negative (log_3 (1/9) = -2).
- Taking the log of zero or a negative number.
- Treating ln as a different operation rather than log base e.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A two-way converter: "2^3 = 8" and "log_2 8 = 3" with the base, the index and the result in matching colours sliding between the two forms.
- A doubling ladder 1, 2, 4, 8, 16 with the rung count shown as the log; 100 lands between rungs 6 and 7.
- The undo pair as two arrows: raise a to the power, then take log_a, and back; the inputs return unchanged.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Evaluate log_5 125, log_2 (1/16), log_9 3 and ln(e^(-2)).

**Worked answer:** 3 (5^3 = 125), -4 (2^(-4) = 1/16), 1/2 (9^(1/2) = 3), -2.

### Question 2

Solve log_3 x = -2, and simplify 10^(log_10 7) + log_4 4^3.

**Worked answer:** x = 3^(-2) = 1/9. 10^(log_10 7) = 7 and log_4 4^3 = 3, so the sum is 10.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A higher-or-lower number guessing game from 1 to 1000: each guess halves the range, so about log_2 1000 ≈ 10 guesses are enough (games).
- A knockout tournament: 64 teams need log_2 64 = 6 rounds to find a winner (sport).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `exponential-and-logarithmic-functions/lesson05.sa.html`, step `drill`, revisit. Old text: "Earlier you bracketed $x$ in $2^x = 100$." The opening only asked for a new operation; it never asked students to bracket $x$. Correction: "Earlier you met $2^x = 100$. Since $2^6 = 64$ and $2^7 = 128$, the answer lies between 6 and 7."

Decisions for Claude:

- Year 12 d02 and d03 rely on `cic84a1659` with base e (e^(ln a) = a, e^(ln x) = x) and `ci7cd97f8c` (ln a = log_e a). Show both identities with base e as well as base 2.
- Avoid music, sound and phone-storage anchors: Year 12 d04 and an f-strand design use them for logs.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
