# math-a11-w23: How does inverse variation y = k/x^n differ from direct variation?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie81af7cc` (Direct and inverse variation): Develop the model y = k/(x^n), where k is a non-zero constant, from descriptions of situations in which one quantity varies inversely with another [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: Only y = k/x (n = 1) is taught. The syllabus model is y = k/x^n.
- `ci52779ff4` (Direct and inverse variation): Evaluate k in the equations y = kx^n and y = k/(x^n), given one pair of values for the variables, and use the resulting formula to find other values of the variables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: Finding k from one pair is taught for n = 1 only.
- `ci70194fe3` (Direct and inverse variation): Analyse and solve problems involving direct and inverse variation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered. Gap: Problems are limited to n = 1.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w22: Direct variation y = kx^n, finding k from one pair, the doubling test. math-a11-w21: The hyperbola y = k/x, its asymptotes and branches.

**Prior video:** math-a11-w22.

**Start:** Recall the direct variation model and the hyperbola y = k/x (w21, w22).

**Stop:** Develop y = k/x^n from a description of inverse variation (n = 1 and 2); evaluate k by multiplying (y x^n = k); use the formula both ways; tell direct from inverse by the doubling test and by constant ratio against constant product; keep the practical domain and round in context.

**Next:** math-a11-w24.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson21.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson21.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3074addb757d8b95a04ba6f051bb45aaaab42d333211a95a09ed15d50e72fab5`. Title: Inverse Variation. Lesson id maths-adv-y11-m1-l29.

Data-step ids: `recall-your-gut-answer-first`, `constant-product-not-constant-ratio`, `what-you-ll-master`, `building-the-model-and-finding`, `model`, `quick-fire-practice`, `revisit-the-fence`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson21.sa.html, `we-1`

PROBLEM 1 · BUILDING THE MODEL The time to paint a fence varies inversely with the number of painters. Four painters take 6 hours. How long would 8 painters take? 1 $t = \dfrac{k}{n}$, so $k = tn$ Inverse variation means a constant product. 2 $k = 6 \times 4 = 24$ person-hours Multiply the known pair. 3 $t = \dfrac{24}{8} = 3$ hours Doubling the painters halves the time, as expected.

### Source working-with-functions/lesson21.sa.html, `we-2`

PROBLEM 2 · WORKING BACKWARDS For the same fence, how many painters are needed to finish in 2 hours? 1 $t = \dfrac{24}{n}$, and $t = 2$ Use the completed model. 2 $2 = \dfrac{24}{n}$, so $2n = 24$ Multiply both sides by $n$. 3 $n = 12$ painters. Check: $12 \times 2 = 24$ ✓ The product matches, confirming the answer.

### Source working-with-functions/lesson21.sa.html, `we-3`

PROBLEM 3 · IDENTIFYING THE TYPE Data: $x = 2, y = 18$; $x = 3, y = 12$; $x = 6, y = 6$. Is this direct or inverse variation? 1 Ratios: $\frac{18}{2} = 9$, $\frac{12}{3} = 4$, not constant So it is not direct variation. 2 Products: $2 \times 18 = 36$, $3 \times 12 = 36$, $6 \times 6 = 36$ Constant. 3 Inverse variation with $k = 36$, so $y = \dfrac{36}{x}$ A constant product identifies it.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: k = 6 x 4 = 24 person-hours; 8 painters take 3 hours.
- we-2: 2 = 24/n gives n = 12 painters; check 12 x 2 = 24.
- we-3: ratios 9 and 4 (not constant); products 36, 36, 36, so y = 36/x.
- Site quick-fire and short answers also check: k = 24 gives y = 4 at x = 6; 60 machine-hours gives 15 hours; 360 km gives 3 hours at 120 km/h; 24 000 kPa mL gives 400 mL.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. The site teaches n = 1 only; n = 2 needs original teaching (crosswalk: partial). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Dividing (y/x) by habit to find k instead of multiplying.
- Assuming doubling x halves y when y varies inversely with x^2 (it quarters).
- Using the negative branch in a context where only positive values make sense.
- Rounding a count (tiles, painters) to the nearest whole number instead of up when "enough" is needed.
- Confusing inverse variation with a decreasing straight line.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The same doubling ladder as w22, now with y halving (n = 1) or quartering (n = 2), so the two videos read as a pair.
- Equal-area rectangles: x by y for inverse variation with n = 1 keeps the same area as one side stretches (a product made visible), with the hyperbola traced by the moving corner.
- Floor tiles: the same floor filled by 20 cm then 30 cm square tiles, with a live count (coded grid over a painted floor).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

The number of square tiles needed to cover a floor varies inversely with the square of the tile's side length. 600 tiles of side 20 cm are needed. How many tiles of side 30 cm are needed?

**Worked answer:** N = k/s^2. k = 600 x 20^2 = 240 000. N = 240 000/900 = 266.67, so 267 tiles are needed (round up so the floor is covered).

### Question 2

y varies inversely with the square of x, and y = 8 when x = 3. Find y when x = 6, and explain why doubling x did not halve y.

**Worked answer:** y = k/x^2, k = 8 x 9 = 72. At x = 6, y = 72/36 = 2. Doubling x multiplies x^2 by 4, so y is divided by 4, not 2.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Floor tiles by tile size: bigger tiles, far fewer of them, by the square (n = 2, home).
- A 2 L bottle of juice poured into cups of size c mL: the number of cups is 2000/c (n = 1, food).
- A $120 group gift split evenly: each share is 120 divided by the number of people chipping in (n = 1, money; no people drawn).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Site examples use painters; do not draw people (owner rule). Keep the painter numbers as text or replace the picture with the job's total person-hours.
- The site's Q2 (gas pressure and volume) is science; keep it out of the video.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
