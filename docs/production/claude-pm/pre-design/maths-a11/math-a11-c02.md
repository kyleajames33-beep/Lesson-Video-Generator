# math-a11-c02: How does a tangent capture speed at one instant?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci6a71a44d` (Estimating change): Describe the difference between the average speed of an object and its instantaneous speed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci9f5aa4ac` (Estimating change): Determine that the instantaneous speed of an object at time t can be approximated by the average speed between its position at time t and its position some time later, and explain how this approximation can be improved [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci8c73fdcb` (Estimating change): Relate the instantaneous speed of an object to the gradient of the tangent at that point on its distance–time graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci0b795741` (Estimating change): Estimate the instantaneous speed of an object from its distance–time graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c01: Average rate of change as the gradient of a secant; average speed from a distance-time graph. math-a11-w17: A tangent to a parabola as a line that touches it at one point.

**Prior video:** math-a11-c01.

**Start:** Recall average speed as a secant gradient (c01), then ask what a speedometer reads at one instant.

**Stop:** Describe how average speed differs from instantaneous speed; approximate the instantaneous speed at time t by the average speed from t to a slightly later time and improve it by shortening the interval; relate instantaneous speed to the gradient of the tangent on a distance-time graph; estimate it from a drawn tangent using two far-apart points on the tangent. The general secant table with h and first principles are c04 and c06; non-distance contexts are c03.

**Next:** math-a11-c03.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `00e3ba61b1a4148dd39fd110dc76e8a765f7c928fedf3d72d2ba920e5d0320a2`. Title: Average & Instantaneous Rates of Change. Lesson id maths-adv-y11-m3-l01.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `average-and-instantaneous-rates`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson01.sa.html, `we-3`

PROBLEM 3 · ESTIMATING INSTANTANEOUS RATE A runner's position after $t$ seconds is $s(t) = t^2$ metres. Estimate the instantaneous speed at $t = 2$ by calculating average speeds over $[2, 2.1]$ and $[2, 2.01]$. 1 $s(2.1) = (2.1)^2 = 4.41$ $s(2) = 4$ $\displaystyle\text{Average speed} = \frac{4.41 - 4}{0.1} = 4.1$ m/s Calculate the average speed over the wider interval $[2, 2.1]$. 2 $s(2.01) = (2.01)^2 = 4.0401$ $\displaystyle\text{Average speed} = \frac{4.0401 - 4}{0.01} = 4.01$ m/s Shrink the interval to $[2, 2.01]$ and recalculate. 3 $4.1 \to 4.01$ as the interval shrinks As the interval gets smaller, the average speed converges toward 4 m/s. We estimate the instantaneous speed at $t = 2$ is approximately 4 m/s .

### Source introduction-to-differentiation/lesson01.sa.html, card 05 (the geometric idea)

Geometrically, as the second point on the curve moves closer to the first, the secant line pivots and approaches a limiting position: the tangent line at that point. The gradient of this tangent is the instantaneous rate of change.

Other worked examples in this lesson (we-1 and we-2 are c01's) are deferred source context, not part of this video.

Read-only source: [introduction-to-differentiation/lesson12.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson12.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c1ad49f14f260138bda23457b5f2f0d83adf4dd8f26653448bceb8069880e1e3`. Title: Rates of Change from a Graph. Lesson id maths-adv-y11-m3-l16.

Data-step ids: `recall-your-gut-answer-first`, `steepness-is-the-rate`, `what-you-ll-master`, `average-rate-of-change-the`, `model`, `quick-fire-practice`, `revisit-the-steep-flat-steep`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson12.sa.html, `we-2`

PROBLEM 2 · INSTANTANEOUS RATE FROM A TANGENT The tangent to a curve at $t = 4$ passes through the points $(2, 20)$ and $(8, 80)$. Find the instantaneous rate of change at $t = 4$. 1 Both $(2, 20)$ and $(8, 80)$ lie on the tangent, so use them directly Points on the curve would give a chord instead. 2 Gradient $= \dfrac{80 - 20}{8 - 2} = \dfrac{60}{6}$ Rise over run. 3 $= 10$ units per second This is the rate at $t = 4$ only.

### Source introduction-to-differentiation/lesson12.sa.html, card "Instantaneous rate, the gradient of a tangent"

To estimate it: draw the tangent carefully, then pick two points that lie on the tangent and are far apart, and find the gradient between them. Far apart matters, because a small run magnifies any reading error. If the tangent at $t = 4$ passes through $(2, 20)$ and $(8, 80)$, the instantaneous rate is $\dfrac{80 - 20}{8 - 2} = 10$ units per second.

Other worked examples in this lesson (we-1 and we-3 are c01's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson01 we-3: s = t^2 at t = 2. [2, 2.1]: (4.41 - 4)/0.1 = 4.1 m/s; [2, 2.01]: (4.0401 - 4)/0.01 = 4.01 m/s; limit 4 m/s (exact derivative 2t = 4).
- lesson01 Q2: s = t^3 at t = 2: s(2.1) = 9.261, rate 12.61; s(2.01) = 8.120601, rate 12.0601; limit 12 (3t^2 = 12).
- lesson12 we-2: tangent through (2, 20) and (8, 80): 60/6 = 10 units per second. Practice tangent (0, 6), (4, 18): 3. Q2 tangent (1, 10), (9, 42): 32/8 = 4.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading the two points for a tangent gradient off the curve, which gives a secant (an average) instead.
- Choosing two points close together on the tangent, so a small reading error swamps the run.
- Thinking instantaneous speed can be found from one point alone, without a limit or a tangent.
- Expecting the later-time estimate to be exact; it overestimates for an accelerating object and the error shrinks with the interval.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A road with a fixed speed camera and a point-to-point average-speed zone (painted road strip, coded readouts): one reading at a point, one over a stretch.
- `SecantToTangent` on s = t^2 at t = 2 with the second point sliding in (2.1, then 2.01) while a `RefinementTable` fills 4.1, 4.01 and `ConvergenceStrip` settles on 4.
- The tangent drawn on the distance-time graph with two far-apart ringed points on the tangent (not the curve), and a red-pencil cross over two points taken on the curve.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

A ball rolls down a ramp so that its distance travelled is d = 3t^2 metres after t seconds. Find its average speed over [1, 1.1] and over [1, 1.01], and use them to estimate its speed at t = 1.

**Worked answer:** Over [1, 1.1]: (3.63 - 3)/0.1 = 6.3 m/s. Over [1, 1.01]: (3.0603 - 3)/0.01 = 6.03 m/s. The averages approach 6, so the speed at t = 1 is about 6 m/s.

### Question 2

A distance-time graph (metres, seconds) passes through (0, 0) and (5, 25). The tangent at t = 5 passes through (3, 5) and (8, 55). Find the instantaneous speed at t = 5 and compare it with the average speed over the first 5 seconds.

**Worked answer:** Tangent gradient (55 - 5)/(8 - 3) = 10 m/s. Average speed 25/5 = 5 m/s. At t = 5 the object is going twice as fast as its average, so it has been speeding up.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A fixed speed camera against a point-to-point average-speed zone on a highway: the camera reads the speed at one instant, the zone divides distance by time (travel).
- A slow-motion replay of a horse race finish: frames closer together give a better estimate of the horse's speed at the line (sport; the horse may be painted, no rider needed in frame).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- The site's lesson01 hook (a car averaging 60 km/h) and the speed-camera hook in lesson03 point to the same picture as the first anchor; Claude can use either.
- Keep "approximated by the average speed between t and some time later" literally (`ci9f5aa4ac`): later times only, shrinking, with "how this approximation can be improved" said in words. Two-sided secants belong to c04.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
