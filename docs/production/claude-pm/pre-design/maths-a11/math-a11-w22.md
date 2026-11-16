# math-a11-w22: How does one pair of values fix a direct variation model y = kx^n?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci388144c4` (Direct and inverse variation): Develop models of the form y = kx^n, where k is a non-zero constant, from descriptions of situations in which one quantity varies directly with another [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: Only y = kx (n = 1) is taught. The syllabus model is y = kx^n.
- `ci52779ff4` (Direct and inverse variation): Evaluate k in the equations y = kx^n and y = k/(x^n), given one pair of values for the variables, and use the resulting formula to find other values of the variables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: Finding k from one pair is taught for n = 1 only.
- `ci70194fe3` (Direct and inverse variation): Analyse and solve problems involving direct and inverse variation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered. Gap: Problems are limited to n = 1.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w10: A line through the origin, y = mx, and gradient as a rate. math-a11-w12: Building a model with variables, units and restrictions. math-a11-w01: Powers and roots, for x^2, x^3 and solving v^2 = 10 000.

**Prior video:** math-a11-w21.

**Start:** Recall that y = mx is a line through the origin with gradient m (w10).

**Stop:** Develop y = kx^n (k not 0) from a description of direct variation, for n = 1, 2 and 3; evaluate k from one pair of values, with units; use the formula forwards and backwards; test data by the constant ratio y/x^n; solve problems in context. Inverse variation is w23.

**Next:** math-a11-w23.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson20.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson20.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3acc5f2d8a823f2af07743d7f30a1dfe521bbd641ad23e0b69a1fff52018e4cf`. Title: Direct Variation. Lesson id maths-adv-y11-m1-l28.

Data-step ids: `recall-your-gut-answer-first`, `one-constant-found-from-one`, `what-you-ll-master`, `building-the-model-and-finding`, `model`, `quick-fire-practice`, `revisit-the-textbooks`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson20.sa.html, `we-1`

PROBLEM 1 · BUILDING THE MODEL The weight of a stack of identical books varies directly with the number of books. Four books weigh 6 kg. Find the weight of 10 books. 1 Let $w$ be weight in kg and $b$ the number of books; $w = kb$ Translate the description, defining variables. 2 $6 = k \times 4$, so $k = 1.5$ kg per book Substitute the known pair to find the constant. 3 $w = 1.5b$, so 10 books weigh $1.5 \times 10 = 15$ kg Complete the model first, then substitute.

### Source working-with-functions/lesson20.sa.html, `we-2`

PROBLEM 2 · WORKING BACKWARDS The cost of fabric varies directly with its length. 3 m costs $\$19.50$. How much fabric can be bought for $\$52$? 1 $C = kL$, and $19.50 = k \times 3$, so $k = 6.5$ dollars per metre Find the constant first. 2 $C = 6.5L$, so $52 = 6.5L$ Substitute the known cost. 3 $L = \dfrac{52}{6.5} = 8$ metres Solve for the length.

### Source working-with-functions/lesson20.sa.html, `we-3`

PROBLEM 3 · TESTING A TABLE Decide whether this data shows direct variation: $x = 2, y = 5$; $x = 6, y = 15$; $x = 10, y = 25$. 1 $\dfrac{5}{2} = 2.5$ Divide the first pair. 2 $\dfrac{15}{6} = 2.5$ and $\dfrac{25}{10} = 2.5$ Divide the others. 3 The ratio is constant at 2.5, so $y$ varies directly with $x$ and $y = 2.5x$ A constant ratio is the test.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: 6 = 4k gives k = 1.5 kg per book; 10 books weigh 15 kg.
- we-2: 19.50 = 3k gives k = 6.5 dollars per metre; 52 = 6.5L gives L = 8 m.
- we-3: 5/2 = 15/6 = 25/10 = 2.5, so y = 2.5x.
- Original n = 2 teaching example (the site has none): see the anchors; braking distance d = kv^2 with d = 18 m at 60 km/h gives k = 1/200 m per (km/h)^2.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. The site teaches n = 1 only; n = 2 and 3 need original teaching (crosswalk: partial). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Answering before finding k and writing the complete formula.
- Calling any straight line "direct variation" (a fixed fee breaks proportionality).
- Testing y/x when the model is y = kx^2 (the constant ratio is y/x^2).
- Doubling x and doubling y when y varies with x^2 (it multiplies by 4).
- Dropping k's units.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A doubling ladder: x doubles while y doubles (n = 1), quadruples (n = 2) or multiplies by 8 (n = 3), shown as stacked bars beside the graphs.
- One known pair dropped onto a family of curves y = kx^n; only one k passes through it, and its readout locks.
- A ratio table whose y/x^n column turns constant (green) only for the right n.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

The price of a round cake varies directly with the square of its diameter. A 20 cm cake costs $36. Find the price of a 30 cm cake.

**Worked answer:** P = kd^2. 36 = k(400), so k = 0.09 dollars per square centimetre. P = 0.09 x 900 = $81.

### Question 2

A car's braking distance varies directly with the square of its speed. At 60 km/h it is 18 m. At what speed is the braking distance 50 m?

**Worked answer:** d = kv^2. 18 = k(3600), so k = 1/200. 50 = v^2/200, so v^2 = 10 000 and v = 100 km/h (speed is positive).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A car's braking distance against its speed: twice the speed needs four times the distance (n = 2, travel).
- A round cake's price by its diameter: a cake 1.5 times as wide costs 2.25 times as much (n = 2, food).
- Data used while streaming against minutes watched: a straight line through the origin (n = 1, phones).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Braking distance is the one driving context here; road safety numbers are illustrative, not data. Keep "model" language.
- The site's books, fabric and table examples (n = 1) stay as the introduction. A design that stops at n = 1 does not meet ci388144c4.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
