# math-a11-c17: What does f'(c) tell us about a real situation?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci9d118719` (The derivative as a rate of change): Interpret f'(c) as the instantaneous rate of change of the function f(x) at x = c [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci8a2722e2` (The derivative as a rate of change): Use graphs of functions and their derivatives, without the use of algebraic techniques, to describe and interpret physical phenomena [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: partial. Gap: One practical graph (a draining tank) is interpreted. Describing physical phenomena from graphs of a function and its derivative together, without algebra, is not developed.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c03: Estimating a rate from a tangent on a practical graph, with units. math-a11-c15: Sketching f' from f. math-a11-c07: Differentiating polynomials.

**Prior video:** math-a11-c16.

**Start:** Recall a tangent read off a practical graph (c03) and the paired f and f' graphs (c15).

**Stop:** Interpret f'(c) as the instantaneous rate of change of f at x = c, with units and sign in context, from a formula; use graphs of a function and its derivative together, without algebra, to describe a physical situation (when it is greatest, when it changes fastest, when it is steady). Motion with displacement and velocity is c18.

**Next:** math-a11-c18.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson12.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson12.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c1ad49f14f260138bda23457b5f2f0d83adf4dd8f26653448bceb8069880e1e3`. Title: Rates of Change from a Graph. Lesson id maths-adv-y11-m3-l16.

Data-step ids: `recall-your-gut-answer-first`, `steepness-is-the-rate`, `what-you-ll-master`, `average-rate-of-change-the`, `model`, `quick-fire-practice`, `revisit-the-steep-flat-steep`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson12.sa.html, `we-3`

PROBLEM 3 · INTERPRETING A PRACTICAL GRAPH A tank drains so that its volume-time graph falls from $(0, 500)$ to $(10, 0)$, volume in litres and time in minutes. Find the average rate of change and say what it means. 1 Average rate $= \dfrac{0 - 500}{10 - 0}$ Take the points in the same order top and bottom. 2 $= -50$ litres per minute Negative because the volume is decreasing. 3 The tank empties at an average of $50$ litres per minute The sign is carried by the word "empties", so it is not repeated.

### Source introduction-to-differentiation/lesson12.sa.html, step `revisit-the-steep-flat-steep`

At the start you described an object whose distance-time graph rose steeply, flattened, then rose steeply again. Name the speed in the flat section, and explain how you could compare the two steep sections without measuring anything precisely.

Read-only source: [introduction-to-differentiation/lesson15.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson15.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `2f6baee40eeee9ac7f227284fd382c332e6412b6ec7b7514c6e792fd8cd5c75b`. Title: Graphing the Derivative. Lesson id maths-adv-y11-m3-l19.

Data-step ids: `recall-your-gut-answer-first`, `read-the-steepness-plot-the`, `what-you-ll-master`, `from-shape-to-sign`, `model`, `quick-fire-practice`, `revisit-your-sketch-of-y`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson15.sa.html, card "Fixing the skeleton", height rule

Finally, judge the height. Where $f$ is steepest, $f'$ reaches its largest magnitude; where $f$ flattens out, $f'$ approaches the axis.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson12 we-3: average -50 L/min (the site's only practical f graph).
- lesson08 hook (reused for meaning): h(t) = 20t - 5t^2 gives h'(t) = 20 - 10t; h'(1) = 10 m/s upward, h'(2) = 0 at the top (h = 20 m).
- lesson04 we-3: f'(2) = 8 for x^3 - 4x + 1, read as "at x = 2, f increases 8 units per unit of x".

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reporting f(c) (the amount) when the question asks for f'(c) (the rate).
- Giving a rate without units or the per-unit-time wording.
- Reading the maximum of f' as the time when f is greatest (it is when f grows fastest).
- Reading a negative f' as "f is negative".

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `StackedDerivativePanels` with a shared time axis: the quantity above, its rate below, and a vertical cursor that names both readings ("height 12 m, climbing 3 m per minute").
- Three tags on the paired graphs: "f greatest" where f' crosses zero going down, "growing fastest" at the top of f', "steady" where f' sits on zero.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

The water in a tank is V(t) = 1000 - 40t + 0.4t^2 litres after t minutes (0 ≤ t ≤ 50). Find V'(10) and say what it means.

**Worked answer:** V'(t) = -40 + 0.8t, so V'(10) = -32. At 10 minutes the water is draining at 32 litres per minute.

### Question 2

The graph of R'(t), the rate of change of the water stored in a dam (megalitres per day), is positive from day 0 to day 40, highest at day 15, and negative from day 40 to day 90. On which day was the dam fullest, and on which day was it filling fastest?

**Worked answer:** Fullest at day 40, where R' changes from positive to negative. Filling fastest at day 15, where R' is greatest.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A hot-air balloon flight: its height graph and its climb-rate graph together show when it is highest (climb rate zero) and when it climbs fastest (travel; the balloon only).
- An ice cube melting in a drink: its volume falls, and the melting rate graph shows when it melts fastest (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- `ci8a2722e2` is partial: the site interprets one tank graph. Reading f and f' together without algebra is original teaching; question 2 tests it.
- Ownership note for root: `ci9d118719` (f'(c) as an instantaneous rate) is owned here, but c05 to c09 use the idea throughout. This video should name it formally with units, not introduce it.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
