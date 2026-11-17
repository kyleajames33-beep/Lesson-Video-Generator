# math-s12-a05: How do tables, graphs and equations show exponential growth and decay?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `cidb32c4b8` (Exponential relationships): Recognise that an exponential relationship can be represented by an equation, a table of values, a set of ordered pairs or a graph, and move flexibly between these representations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.
- `ci8b7a1643` (Exponential relationships): Graph an exponential relationship of the form y = a^x and y = a^(-x), where a > 0, with and without using graphing applications [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. The official wording contains MathML; quote it from `sourceHtml`.

Standard 1 (Year 12, Algebraic relationships):

- `ci3bda1c7e` (Graphs of practical situations): Construct a linear or exponential graph using a table of values or graphing application to make predictions in practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb). Site coverage: covered (Standard 2 lesson; the site has no Standard 1 pages). Its linear half revisits Year 11 (math-s11-l02, l03).

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Course:** Standard 1 and Standard 2. Standard 1 needs the table, the graph and a prediction, for a linear and an exponential case side by side. Standard 2 needs the four representations and the graphs of a^x and a^(−x).

**Entry knowledge (outline dependency list):** math-s11-f01: `ci7f303375` (substituting numbers into linear and non-linear expressions, including powers); math-s11-m01: `cib256693a` (percentage increase and decrease, the source of growth and decay factors). Also used: math-s11-l02: `ci5ff71229` (constructing a graph with and without graphing applications, via a table).

**Prior video:** math-s12-a04.

**Start:** a04's lines added the same amount each step. Now a table where each step multiplies by the same number instead.

**Stop:** Recognise exponential change as "multiply by the same number each step" (a constant ratio in a table), against linear change as "add the same amount each step"; move between the equation, a table, a set of ordered pairs and a graph; graph y = a^x and y = a^(−x) (a > 0) by hand from a table and with an app: y-intercept 1, the x-axis as a line the curve gets close to but never meets, rising for growth and falling for decay, and y = a^(−x) as the mirror image of y = a^x in the y-axis; make a prediction from a table or graph (Standard 1). Building a model y = k a^x from a story and interpreting k is a06; limitations are a07.

**Next:** math-s12-a06.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f8c86393c1deaadd77ae8585d6c8d8473dad655d6c287e794bdf184991d21b60`. Title: Exponential Relationships. Lesson id maths-std-y12-algrel-l03.

Older page format: no `data-step-id` sections. Cards used here: hook and 01 Recall (bacteria doubling), 02 The key formula, 04 Key terms (exponential function, growth factor, horizontal asymptote), 05 Recognising and Representing Exponential Relationships, 06 Graphing $y = Ab^x$ and $y = Ab^{-x}$, `we-1`. Cards 07, `we-2`, `we-3` and the short answers belong to a06 and a07.

### Source lesson03, card 05

"Equation: $y = 3 \times 2^x$ ... Table of values: list $(x, y)$ pairs: $(-1, 1.5)$, $(0, 3)$, $(1, 6)$, $(2, 12)$, $(3, 24)$. Notice each $y$-value is double the previous one, that's the growth factor $b = 2$. Set of ordered pairs: the same table written as {$(-1, 1.5)$, $(0, 3)$, $(1, 6)$, $(2, 12)$, $(3, 24)$}. Graph: ... curved (not straight), increasing, and has a horizontal asymptote at $y = 0$." Test: "In a linear table, differences between consecutive $y$-values are constant. In an exponential table, the ratio between consecutive $y$-values is constant". Quick check: $y$-values 4, 8, 16, 32, 64 (answer: exponential, factor 2).

### Source lesson03, card 06

"$y = Ab^{-x}$ is a reflection: The graph of $y = Ab^{-x}$ is the reflection of $y = Ab^x$ in the $y$-axis. Both pass through $(0,\ A)$." Technology: "type y = 2 * 3^x for the growth curve or y = 2 * 3^(-x) for decay". True or false: "$y = 5 \times 0.6^x$ shows exponential growth because the coefficient $A = 5$ is greater than 1" (false).

### Source lesson03, `we-1`

PROBLEM 1 · GRAPHING A GROWTH CURVE. "Graph $y = 3 \times 2^x$ for $x \in \{-2, -1, 0, 1, 2, 3\}$ and identify the $y$-intercept, growth factor and any asymptote." Table 0.75, 1.5, 3, 6, 12, 24; $y$-intercept $(0, 3)$; $b = 2$; asymptote $y = 0$. "Connect with a smooth curve (not straight lines)."

### Source lesson03, hook and revisit

"If a bacteria population doubles every hour, and starts with 100 bacteria, how many will there be after 10 hours?" $100 \times 2^{10} = 102{,}400$; after 20 hours $\approx 104{,}857{,}600$.

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 05 and `we-1`: y = 3 × 2^x gives 3/4, 3/2, 3, 6, 12, 24 for x = −2 to 3.
- Quick check: ratios 2, 2, 2, 2.
- Hook: 100 × 2^10 = 102 400; 100 × 2^20 = 104 857 600.
- y = 5 × 0.6^x decreases (0.6 < 1), so the true or false answer is false.

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Joining table points with straight segments, or with a ruler.
- Drawing the curve crossing or touching the x-axis.
- Thinking a large number in front (5 × 0.6^x) means growth.
- Testing a table with differences only, and calling it "not linear, so quadratic".
- Reading 2^(−x) as a negative number.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Two tables side by side, one adding 5 each step and one doubling each step, with "+5" and "×2" arrows between rows; the points drop onto one grid and the linear one stays straight while the exponential one bends upward (Standard 1 needs both).
- A four-panel "same relationship" card: equation, table, set of ordered pairs, graph, with one point (2, 12) lit in all four at once.
- y = 2^x drawn point by point from a table including negative x (2^(−1) = 1/2, 2^(−2) = 1/4), so the curve's approach to the x-axis is seen, not stated.
- y = 2^(−x) as the mirror image in the y-axis, with paired points (1, 2) and (−1, 2) swapping sides.
- An unbranded graphing-app window (`ScreenApp`, graph mode) for "with graphing applications", with a slider on a.

Advanced reuse (visual parts only): `FunctionSimulator` with `EXP_BASE_FAMILY` (fn-sim.tsx) and `ParameterSlider` draw y = a^x for any base, and `ExponentialDemo` (calculus-pilot.tsx) is an older demonstration; math-a11-e01 (designed, not built) uses them. `StudioSymmetryPairs` (integration-parts.tsx, even mode) can show the y-axis mirror pairs. `StudioCandidateTable` (extras.tsx) or `WorkingRows` table mode carries the tables; `GrowthBars` (working-parts.tsx) can show the add-versus-multiply bars. No simulation engine is needed. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

Two tables are shown.

| x | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Table A | 5 | 10 | 20 | 40 | 80 |
| Table B | 5 | 10 | 15 | 20 | 25 |

(a) Which table shows an exponential relationship? Give a reason. (b) Use each table's pattern to predict y when x = 6.

**Worked answer:** (a) Table A: each value is 2 times the one before (constant ratio 2); Table B adds 5 each time (linear). (b) A: 5 × 2^6 = 320; B: 5 + 5 × 6 = 35.

### Question 2

Complete a table of values for y = 3^x and y = 3^(−x) for x = −2, −1, 0, 1, 2. Sketch both graphs on the same axes. State the y-intercept of each and describe how the two graphs are related.

**Worked answer:** y = 3^x: 1/9, 1/3, 1, 3, 9. y = 3^(−x): 9, 3, 1, 1/3, 1/9. Both have y-intercept 1. Each is the reflection of the other in the y-axis; both approach the x-axis but never touch it.

Only the question goes on the card. Hide the answer, and which table is which, until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "3^(−2) = −9", crossed, "a negative power is a fraction, not a negative number"). Answers were checked with SymPy.

## 7. Everyday anchors

- A video going viral: views roughly doubling each day for the first week (phones).
- A gift card where half of what is left is spent each week, so the balance follows a halving pattern, 2^(−x) times the start, and never quite reaches zero in the model (money; a clean y = a^(−x) case).
- A local football club's "bring a friend" drive: each member signs up one new member each month, so the membership doubles each month while the drive lasts (sport; drawn as a growing tally of club caps or cards, never people).

Varied everyday contexts (phones, money, sport). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "viral", "gift card" and "bring a friend" no hits; a group chat was avoided because math-a11-s02's pack uses one; paper folding, a knockout tournament, chessboards and trading cards were avoided because Advanced e01, e02, e03 or f05 use them). No other Standard pack uses them. The site's bacteria hook is a science context; keep its numbers (100 × 2^10) if used, or move the same numbers onto the viral video (100 views doubling for 10 days gives 102 400). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New finding logged there (MS-08): the lesson's declared dotpoints change the official letters and conditions (y = ab^x with b ≠ 1 instead of y = a^x and y = a^(−x) with a > 0).

Decisions for Claude:

- **Notation.** The syllabus writes y = a^x and y = a^(−x) here, and y = k a^x in a06. The site writes y = A b^x throughout. Use the syllabus letters on screen, so HSC wording matches; say once that some books write A b^x.
- The four representations are in the syllabus (`cidb32c4b8`); the site's constant-ratio test is the practical way to move from a table to "exponential", and pairs naturally with Year 11's constant-difference test for lines.
- Standard 1's point (`ci3bda1c7e`) asks for a prediction from a linear or exponential graph. Keep one linear case beside the exponential one, as in Question 1, so Standard 1 is fully served.
- Pace: representations, two graphs and a prediction fit 8 to 9 minutes if the linear comparison stays short. Watch it; if long, move the app demonstration to a06.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
