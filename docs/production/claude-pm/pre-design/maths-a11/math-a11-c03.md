# math-a11-c03: How do we estimate a changing rate from a real-world graph?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci7e80ed31` (Estimating change): Recognise when modelling with a non-linear function that the rate of change is not constant and is represented by the gradient of the tangent to the curve at each point on the curve [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci1a06a2ed` (Estimating change): Estimate the instantaneous rate of change of a non-linear function at a given point from a given graph of a practical situation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c02: Instantaneous speed as the gradient of the tangent, estimated from two points on a drawn tangent. math-a11-c01: Average rate of change with units from the axes.

**Prior video:** math-a11-c02.

**Start:** Recall the tangent gradient as the speed at an instant (c02), then leave distance-time graphs for other changing quantities.

**Stop:** Recognise that a non-linear model has a rate of change that is not constant, given at each point by the gradient of the tangent; estimate the instantaneous rate of change at a point from a given practical graph with units and a sign, and say what it means. Interpreting f'(c) from a formula and reading f and f' together are c17.

**Next:** math-a11-c04.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson12.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson12.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c1ad49f14f260138bda23457b5f2f0d83adf4dd8f26653448bceb8069880e1e3`. Title: Rates of Change from a Graph. Lesson id maths-adv-y11-m3-l16.

Data-step ids: `recall-your-gut-answer-first`, `steepness-is-the-rate`, `what-you-ll-master`, `average-rate-of-change-the`, `model`, `quick-fire-practice`, `revisit-the-steep-flat-steep`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson12.sa.html, `we-2`

PROBLEM 2 · INSTANTANEOUS RATE FROM A TANGENT The tangent to a curve at $t = 4$ passes through the points $(2, 20)$ and $(8, 80)$. Find the instantaneous rate of change at $t = 4$. 1 Both $(2, 20)$ and $(8, 80)$ lie on the tangent, so use them directly Points on the curve would give a chord instead. 2 Gradient $= \dfrac{80 - 20}{8 - 2} = \dfrac{60}{6}$ Rise over run. 3 $= 10$ units per second This is the rate at $t = 4$ only.

### Source introduction-to-differentiation/lesson12.sa.html, `we-3`

PROBLEM 3 · INTERPRETING A PRACTICAL GRAPH A tank drains so that its volume-time graph falls from $(0, 500)$ to $(10, 0)$, volume in litres and time in minutes. Find the average rate of change and say what it means. 1 Average rate $= \dfrac{0 - 500}{10 - 0}$ Take the points in the same order top and bottom. 2 $= -50$ litres per minute Negative because the volume is decreasing. 3 The tank empties at an average of $50$ litres per minute The sign is carried by the word "empties", so it is not repeated.

### Source introduction-to-differentiation/lesson12.sa.html, card "Reading and interpreting a practical graph"

A flat section has gradient $0$: the quantity is not changing. On a distance-time graph that is an object at rest. A negative gradient means the quantity is decreasing . On a cooling curve it is temperature falling; on a distance-time graph it is movement back towards the start. Steeper means faster. Comparing two points on the same graph, the one with the steeper tangent has the greater instantaneous rate, whatever the units happen to be.

### Source introduction-to-differentiation/lesson12.sa.html, step `steepness-is-the-rate`

Sign carries meaning A negative gradient means the quantity is decreasing. On a distance-time graph that is motion back towards the start; on a cooling graph it is temperature falling.

Other worked examples in this lesson (we-1 is c01's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson12 we-2: tangent (2, 20) to (8, 80): 10 units per second (reused here as the general "rate at a point" method).
- lesson12 we-3: (0 - 500)/10 = -50 L/min average; "empties at 50 litres per minute".
- lesson12 Q2: (42 - 10)/(9 - 1) = 4. Practice (0, 90) to (6, 30): -10.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Giving one rate for a whole curved graph, as if it were a line.
- Using a secant over a wide interval when the question asks for the rate at a point.
- Dropping the sign, or keeping both a negative sign and the word "falls" (a double negative).
- Thinking the steepest part is the highest part of the graph.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A practical curve (cooling drink or turnstile count) with a tangent that rides along it (`FunctionRider` plus `StudioTangentTriangle`) and a live rate readout whose value changes, against a line whose readout does not.
- Two drawn tangents at different times compared side by side; the steeper one wins, with units "°C per minute" or "people per minute" built from the axes.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

A drink cools on a bench. On its temperature-time graph (°C, minutes), the tangent at t = 4 passes through (0, 72) and (10, 32). Estimate the rate of change of temperature at t = 4 and say what it means.

**Worked answer:** (32 - 72)/(10 - 0) = -4 °C per minute: at 4 minutes the drink is cooling at about 4 °C per minute.

### Question 2

People enter a football ground through turnstiles. On the graph of total people inside against minutes, the tangent at t = 20 passes through (10, 600) and (30, 2200), and the tangent at t = 50 passes through (40, 5000) and (60, 5600). At which time are people entering faster, and by how much?

**Worked answer:** At t = 20: 1600/20 = 80 people per minute. At t = 50: 600/20 = 30 people per minute. Faster at t = 20, by 50 people per minute.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A hot chocolate cooling on the kitchen bench: it cools fast at first and slowly later, so the rate changes along the curve (food).
- Crowds entering a football ground through turnstiles before kick-off: the total inside is a curve, the entry rate is its tangent gradient (sport; counts only, no crowd drawn).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- The site's only practical non-motion graph here is a draining tank (we-3), which is a secant, not a tangent. A tangent on a practical curve is original teaching for `ci1a06a2ed`.
- c03 is close to c02 in method. If root wants fewer videos, c02 and c03 could merge as "speed and other rates from tangents"; the outline keeps them apart so the speed points stand alone.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
