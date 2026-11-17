# math-s12-a13: How do we build and use a reciprocal model, and where does it fail?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci0021fc94` (Reciprocal relationships): Construct a reciprocal model of the form y = k/x to analyse inverse variation problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. The official wording contains MathML; quote it from `sourceHtml`.
- `cib9514f33` (Reciprocal relationships): Solve inverse variation problems graphically, or algebraically given the value of two of the variables in y = k/x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. The official wording contains MathML.
- `cib10770ae` (Reciprocal relationships): Explain the limitations of reciprocal models in practical inverse variation problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.

Standard 1: no matching point.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-a12 (y = k/x, the constant product, the hyperbola). math-s11-f03: `cib54d5e23` (changing the subject: from y = k/x to x = k/y). math-s11-f01: `ci7f303375` (substitution). math-s12-a07 and a11 (the two-part limitation: assumption and why it fails).

**Prior video:** math-s12-a12.

**Start:** a12's holiday-house cost: the total stayed fixed while the share changed. Now we build such a model from one fact and use it.

**Stop:** Construct y = k/x for a practical situation: name the two quantities and their units, find k by multiplying one known pair (k is the fixed total, such as a distance or a cost), and write the model; solve for one variable given the other, algebraically (substitute and rearrange, k = xy, x = k/y) or by reading the graph; round in context (round up when a whole number of people, boxes or machines is needed); explain limitations: x = 0 is impossible, very small x gives impossibly large y, fractional answers may be meaningless, and the product may not really stay constant (set-up time, people getting in each other's way). The strand ends here; next is the investment strand.

**Next:** math-s12-i01.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `dc844c74fcc51b59220bcb0b550bd4239777d71896c2797e95ce151d18873622`. Title: Reciprocal Relationships and Inverse Variation. Lesson id maths-std-y12-algrel-l06.

Older page format: no `data-step-id` sections. Cards used here: 06 Constructing and Solving Inverse Variation Models (steps, worker example, algebraic solution), 07 Limitations of Reciprocal Models, `we-1`, `we-3` (structure only), 08 Revisit, SA 1 to SA 3.

### Source lesson06, card 06

"Identify the two varying quantities call them $x$ and $y$ with their units. Find $k$ multiply any known pair: $k = x \times y$. Verify with a second pair if possible. Write the equation: $y = \frac{k}{x}$. Solve by substituting the known value of $x$ (or $y$) to find the unknown. Verify graphically". "Worker example: Task takes 12 worker-hours ... $h = 12/n$. How many workers to finish in 3 hours? Substitute $h = 3$: $3 = 12/n \Rightarrow n = 4$ workers. Verify: $4 \times 3 = 12$ ✓". "Given $y = k/x$, to find $x$ when $y$ is known, rearrange: $x = k/y$."

### Source lesson06, card 07

"$x = 0$ is undefined but in practice, some minimum value of $x$ must apply ... Prediction of extreme values is unrealistic ... (adding 1 million workers to a 12-hour task doesn't make it finish instantaneously). Non-integer solutions may be invalid if $x$ must be a whole number (workers, items) ... The product may not remain exactly constant real situations have inefficiencies, setup costs, diminishing returns."

### Source lesson06, `we-1`

PROBLEM 1 · CONSTRUCTING A MODEL FROM A TABLE. "A car travels a fixed distance. The time $T$ (hours) depends on the average speed $s$ (km/h). The table shows: $s$ = 40, 60, 80, 120 and $T$ = 3, 2, 1.5, 1. (a) Show this is inverse variation. (b) Find $k$ and write the equation. (c) How long does the journey take at 100 km/h?" Products 120; $T = \dfrac{120}{s}$; "The distance is 120 km, the constant represents the total distance of the journey"; $T = 1.2$ hours = 1 hour 12 minutes.

### Source lesson06, short answers and revisit

SA 1: table 3, 5, 6, 10 and 20, 12, 10, 6; $y = 60/x$; $y = 4$ at $x = 15$. SA 2: train, $T = 3$ at $s = 80$; route 240 km; $T = 240/s$; 120 km/h for 2 hours; "$T = 0$ requires $s \to \infty$". SA 3: group booking $C = 960/n$; $\$120$ each for 8 people; 24 people for $\$40$ each; limitations at very small and very large $n$. Revisit: "100 workers each doing 0.12 hours = 7.2 minutes".

`we-3` (Boyle's Law, $P = 400/V$, 80 kPa at 5 L) is a science context; its structure (find a value, push x towards 0, state two assumptions) can be reused with an everyday context.

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 06: h = 12/n; n = 4 for h = 3.
- `we-1`: products 120, 120, 120, 120; 120/100 = 1.2 h = 1 h 12 min.
- SA 1: products 60; y = 4. SA 2: 240 km; s = 120 km/h. SA 3: $120; n = 24.
- Revisit: 12/100 = 0.12 h = 7.2 min.
- `we-3` (not used): 400/5 = 80.

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Finding k by dividing (y/x) instead of multiplying.
- Writing 1.2 hours as 1 hour 20 minutes.
- Rounding a number of boxes or machines down, so the job is not done.
- Saying "x can't be zero because you can't divide by zero" without the practical reason (no speed, no workers).
- A limitation that does not name the assumption (the total stays exactly the same however many share it).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- One fact (a point on the graph) and the constant-product rectangle from a12 snapping to its area k, then the model y = k/x writing itself beside the curve.
- Solving both ways: algebra rows (substitute, rearrange, answer) next to a graph where a horizontal line at the given y meets the curve and drops to the x answer.
- A rounding strip: 34.29 boxes on a number line, an arrow to 35, and a "34 boxes leaves muffins unpacked" tag.
- Limitations as a slider pushing x towards zero: y shoots off the top of the graph, the readout becomes absurd (seconds for an oval mowed by a hundred mowers), and the practical region is shaded.

Advanced reuse (visual parts only): `FunctionRider`, `StudioLevelLine` (horizontal line meeting the curve), `StudioDomainStrip`, `LiveReadoutBoard`, `ModelCard`, `WorkingBoard` parts; `ProductRectangle` adapted as in a12. Advanced w23 (designed, not built) has an inverse "doubling ladder" (`DoublingLadder`, proposed in w22 and w23, not yet in the kit). No simulation is needed. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

A council uses identical ride-on mowers to mow a sports oval. With 3 mowers the job takes 2 hours. The time T hours varies inversely with the number of mowers n. (a) Find k and write the model. (b) How long does the job take with 4 mowers? Give your answer in hours and minutes. (c) How many mowers are needed to finish in less than 1 hour? (d) Give one limitation of the model.

**Worked answer:** (a) k = 3 × 2 = 6, so T = 6/n. (b) T = 6/4 = 1.5 hours = 1 hour 30 minutes. (c) 6/n < 1 needs n > 6, so 7 mowers. (d) For example: the model assumes the mowers never get in each other's way and there is no set-up time; with many mowers on one oval that fails, so the real time would be longer.

### Question 2

A bakery packs 240 muffins into boxes that each hold the same number of muffins. The number of boxes B varies inversely with the number of muffins per box b. (a) Write the model. (b) How many boxes are needed if each box holds 16 muffins? (c) The model gives B = 34.29 when b = 7. How many boxes are actually needed? Explain.

**Worked answer:** (a) B = 240/b (k = 240, the total number of muffins). (b) 240/16 = 15 boxes. (c) 35 boxes: 34 boxes hold only 238 muffins, so a 35th box is needed for the last 2. The model's fraction must be rounded up.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "1 h 50 min", crossed, "0.5 hours is 30 minutes"). Answers were checked with SymPy.

## 7. Everyday anchors

- Mowing a sports oval with several identical mowers: more mowers, less time, until they get in each other's way (work; carries Question 1).
- A bakery packing a fixed number of muffins into boxes of different sizes (food and work; carries Question 2).
- Reading a 360-page novel over the holidays: pages a day times days stays 360 (hobbies).

Varied everyday contexts (work, food, hobbies). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "muffin" and "novel" have no hits; "mower" appears only as a lawnmower's sound in a12-t04 and mown grass in a12-f01; bottles and egg cartons were avoided because a12-s09 to s12 and a11-s10 use them; rows of chairs were avoided because a12-f02 uses them; a fundraiser target was avoided because i04 and w18 use one). No other Standard pack uses them. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No new error was found in the parts of lesson06 used here.

Decisions for Claude:

- Use `we-1` (car, 120 km) as the main worked example with the site's exact numbers; it shows clearly that k is a real total (the distance).
- `we-3` (Boyle's Law) is science; reuse its structure with the mowers instead.
- Card 07's "valid domain n ≤ 12" for the workers depends on an invented assumption ("the minimum task unit is 1 hour"); do not reuse it as a rule.
- This is the last video of the strand. Its handoff goes to math-s12-i01 (simple interest), a linear relationship again, which closes the loop with a01's lines.
- Pace: three points with one method and one limitation pattern fit 8 to 9 minutes. Not at risk if the graph route stays short.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
