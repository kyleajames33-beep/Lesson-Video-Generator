# math-a11-c01: What does an average rate of change measure on a graph?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci8019730a` (Estimating change): Define the average rate of change of y with respect to x for a function y = f(x) over the domain [a, b] as Δy/Δx = (change in y)/(change in x), that is Δy/Δx = (f(b) - f(a))/(b - a), and recognise (f(b) - f(a))/(b - a) as the gradient of the secant through (a, f(a)) and (b, f(b)) on the graph of y = f(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci7d6c383e` (Estimating change): Recognise speed as a rate of change of distance with respect to time [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci34973239` (Estimating change): Use the definition for average rate of change to determine the average speed of an object from a given distance–time graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci41d3073a` (Estimating change): Recognise when modelling with a linear function that its gradient is the rate of change and determine the rate of change for linear functions in practical situations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: partial. Gap: The gradient of a linear model as its rate is taught in WF18. The differentiation lessons do not connect a constant rate to the linear case.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w10: Gradient of a line through two points, (y2 - y1)/(x2 - x1). math-a11-w12: A linear model y = mx + c whose gradient is a cost or amount per unit. math-a11-w08: Evaluating f(a) and f(b) from a rule. math-a11-w31: The V graph y = |g - 350| whose right arm rises 20 over a run of 20 (the handoff frame).

**Prior video:** math-a11-w31.

**Start:** Open on w31's final frame: the jelly bean V y = |g - 350| with its right arm from (350, 0) to (370, 20) and the rise-and-run triangle, "rise ÷ run = 20 ÷ 20 = 1". On a straight piece the rate is the same everywhere (the gradient, ci41d3073a). Then ask what "how fast" means when the graph curves.

**Stop:** Define the average rate of change of f over [a, b] as (f(b) - f(a))/(b - a), the gradient of the secant through (a, f(a)) and (b, f(b)); recognise speed as the rate of change of distance with time; find average speed from a distance-time graph with units; recognise that a linear model's gradient is its constant rate of change. Instantaneous speed and tangents start in c02.

**Next:** math-a11-c02.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `00e3ba61b1a4148dd39fd110dc76e8a765f7c928fedf3d72d2ba920e5d0320a2`. Title: Average & Instantaneous Rates of Change. Lesson id maths-adv-y11-m3-l01.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `average-and-instantaneous-rates`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson01.sa.html, `we-1`

PROBLEM 1 · AVERAGE RATE FROM A TABLE The temperature of a chemical solution is recorded over time: Time (h) 0 2 4 6 8 Temp (°C) 15 22 28 24 18 Find the average rate of change of temperature over the first 4 hours. 1 $T(0) = 15$ and $T(4) = 28$ Read the temperature values at $t = 0$ and $t = 4$ from the table. 2 $\displaystyle\text{Average rate} = \frac{T(4) - T(0)}{4 - 0} = \frac{28 - 15}{4} = \frac{13}{4} = 3.25$ Apply the difference quotient. The temperature rose by 13°C over 4 hours.

### Source introduction-to-differentiation/lesson01.sa.html, `we-2`

PROBLEM 2 · AVERAGE RATE FROM AN EQUATION Find the average rate of change of $f(x) = x^2$ over the interval $[1, 3]$. 1 $f(1) = (1)^2 = 1$ $f(3) = (3)^2 = 9$ Evaluate the function at each endpoint of the interval. 2 $\displaystyle\text{Average rate} = \frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = \frac{8}{2} = 4$ The function value increased by 8 units while $x$ increased by 2 units.

### Source introduction-to-differentiation/lesson01.sa.html, card 05 (core concept)

This is exactly the same calculation as finding the gradient of a straight line through the two points $(a, f(a))$ and $(b, f(b))$. On a curve, this line is called a secant it cuts through the curve at two points.

Other worked examples in this lesson (we-3, estimating instantaneous speed, is c02's) are deferred source context, not part of this video.

Read-only source: [introduction-to-differentiation/lesson12.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson12.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c1ad49f14f260138bda23457b5f2f0d83adf4dd8f26653448bceb8069880e1e3`. Title: Rates of Change from a Graph. Lesson id maths-adv-y11-m3-l16.

Data-step ids: `recall-your-gut-answer-first`, `steepness-is-the-rate`, `what-you-ll-master`, `average-rate-of-change-the`, `model`, `quick-fire-practice`, `revisit-the-steep-flat-steep`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson12.sa.html, `we-1`

PROBLEM 1 · AVERAGE RATE FROM A CHORD A distance-time graph passes through $(2, 30)$ and $(6, 90)$, with distance in metres and time in seconds. Find the average speed over this interval. 1 Average rate $= \dfrac{y_2 - y_1}{x_2 - x_1}$ The gradient of the chord. 2 $= \dfrac{90 - 30}{6 - 2} = \dfrac{60}{4}$ Substitute the two points. 3 $= 15$ metres per second Units are metres over seconds, from the axes.

### Source introduction-to-differentiation/lesson12.sa.html, `we-3`

PROBLEM 3 · INTERPRETING A PRACTICAL GRAPH A tank drains so that its volume-time graph falls from $(0, 500)$ to $(10, 0)$, volume in litres and time in minutes. Find the average rate of change and say what it means. 1 Average rate $= \dfrac{0 - 500}{10 - 0}$ Take the points in the same order top and bottom. 2 $= -50$ litres per minute Negative because the volume is decreasing. 3 The tank empties at an average of $50$ litres per minute The sign is carried by the word "empties", so it is not repeated.

### Source introduction-to-differentiation/lesson12.sa.html, card "Average rate of change, the gradient of a chord"

It is an average because it ignores everything between the two points. The object may have sped up, slowed down, or stopped; the chord only reports the overall effect. Units come from the axes. Vertical unit per horizontal unit, always. Metres over seconds gives metres per second; dollars over items gives dollars per item.

Other worked examples in this lesson (we-2, the tangent, is c02's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson01 we-1: (28 - 15)/(4 - 0) = 13/4 = 3.25. The site gives no unit; it is 3.25 °C per hour.
- lesson01 we-2: f(x) = x^2 on [1, 3]: (9 - 1)/2 = 4. Quick check [2, 5]: (25 - 4)/3 = 7.
- lesson01 drills: 3x + 2 on [0, 4] gives 3 (a line: the same as its gradient); runner table (15 - 0)/3 = 5 m/s. Short answer Q1: T(1) = T(4) = 24, average rate 0 °C/min.
- lesson12 we-1: (90 - 30)/(6 - 2) = 60/4 = 15 m/s. Key-term example (1, 4) to (5, 20): 4. Quick check (1, 5) to (4, 20): 5. Practice (1, 8) to (5, 24): 4; (0, 90) to (6, 30): -10. Q1: (44 - 12)/4 = 8 m/s.
- lesson12 we-3: (0 - 500)/(10 - 0) = -50 L/min.
- Handoff frame from w31: (370 - 350, 20 - 0) gives rise 20, run 20, rate 1 (one unit of "how far off" per guess).

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Giving f(b) (how high) instead of the rate (how steep).
- Subtracting in opposite orders top and bottom, which flips the sign.
- Dropping units, or writing them the wrong way up (seconds per metre).
- Thinking the average over an interval tells you the speed at every moment inside it.
- Expecting a zero average rate to mean the quantity never changed (lesson01 Q1 rises then falls back to 24).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Open on w31's handoff frame (the V, its right arm and the rise-and-run triangle), then fade the jar badge: a straight piece has one gradient, so its rate never changes (`StudioTangentTriangle` used as a plain rise-and-run triangle).
- A curve with two draggable points and the secant through them, its gradient as a live readout (`SecantToTangent` held at a fixed interval, `LiveReadoutBoard`). The readout names its units from the axes.
- A distance-time graph with "metres" up and "seconds" along, the secant from (2, 30) to (6, 90), and the unit fraction 60 m ÷ 4 s building to 15 m/s.
- A falling secant (the tank, 500 L to 0 L in 10 min) painted in a second colour so the negative sign has a picture.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

A cyclist's distance-time graph passes through (5, 2) and (20, 11), with time in minutes and distance in kilometres. Find the average speed over this interval in kilometres per hour.

**Worked answer:** (11 - 2)/(20 - 5) = 9/15 = 0.6 km per minute, which is 0.6 × 60 = 36 km/h.

### Question 2

For f(x) = x^2 - 4x + 7, find the average rate of change over [1, 4] and over [0, 4]. Explain how the same curve gives two different answers.

**Worked answer:** f(1) = 4, f(4) = 7, f(0) = 7. Over [1, 4]: (7 - 4)/3 = 1. Over [0, 4]: (7 - 7)/4 = 0. Each answer is the gradient of a different secant; the curve falls then rises, so a secant whose ends are at the same height has gradient 0 even though f changed in between.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A marathon runner's GPS watch: distance against time over a race, and the average pace between two kilometre marks as a secant (sport). Shown as the watch and a coded graph.
- A coffee cart's cups sold through the morning rush: the average sales rate from 7 am to 9 am is the gradient of the secant on the cumulative sales graph (food, money).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson01.sa.html`, step `average-and-instantaneous-rates`, quick check after the worked examples. Old text: "B, 7  (i.e. $\frac{25-4}{3} = 7$)". The option shows its own working, which gives the answer away. Correction: "B, 7".

Decisions for Claude:

- c01 opens on w31's proposed final frame (w31 open decision 1). The V's straight arm is the linear case for `ci41d3073a` (partial on the site: the rate of a linear model is not tied to the derivative lessons). The jar is a reused badge, not a new anchor, so the curved examples need one of the anchors in section 7.
- lesson01's sprint hook names a real athlete and a chemical solution (we-1); the 2024 point needs neither. Use the site's table numbers (15, 22, 28, 24, 18) with a non-science label only if root agrees that changing the context keeps the numbers; otherwise use lesson12 we-1 as the main example.
- Speed is the only rate the syllabus names here (`ci7d6c383e`). Keep other rates (sales per hour) as anchors, with units read from the axes.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
