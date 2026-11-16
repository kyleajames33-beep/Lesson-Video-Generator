# math-a11-c18: How do displacement and velocity differ from distance and speed?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci05229304` (The derivative as a rate of change): Define and distinguish between displacement and distance and between velocity and speed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci8a1ba332` (The derivative as a rate of change): Use the notation dx/dt or ẋ to represent the velocity of a particle with displacement x from a point as a function of time t [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci1be28612` (The derivative as a rate of change): Solve problems by determining the velocity of a particle moving in a straight line, given its displacement from a point as a function of time [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c17: f'(c) as an instantaneous rate with units. math-a11-c02: Speed as a rate; average against instantaneous. math-a11-w30: Absolute value as a distance (speed = |v|).

**Prior video:** math-a11-c17.

**Start:** Recall speed as a rate of change of distance (c01, c02), then put a sign on position.

**Stop:** Define and distinguish displacement and distance, and velocity and speed; use the notations dx/dt and ẋ for velocity; solve problems finding the velocity of a particle moving in a straight line from its displacement function, including when it is at rest, its direction, its speed, and the distance travelled when it turns around (stage by stage). Acceleration and integration are Year 12.

**Next:** math-a11-e01.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson16.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson16.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0d028aec22c3977fb4e8fc6e79fa66670de22edf2cb712a874c1039fecea9c5a`. Title: Motion in a Straight Line. Lesson id maths-adv-y11-m3-l20.

Data-step ids: `recall-your-gut-answer-first`, `sign-is-the-whole-difference`, `what-you-ll-master`, `displacement-against-distance`, `model`, `quick-fire-practice`, `revisit-the-particle-that-went`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson16.sa.html, `we-1`

PROBLEM 1 · VELOCITY FROM DISPLACEMENT A particle has displacement $x = t^3 - 3t^2$ metres at time $t$ seconds. Find its velocity at $t = 4$. 1 $v = \dfrac{dx}{dt} = 3t^2 - 6t$ Differentiate with respect to time. 2 $v(4) = 3(16) - 6(4) = 48 - 24$ Substitute $t = 4$. 3 $v = 24$ metres per second Positive, so it is moving in the positive direction.

### Source introduction-to-differentiation/lesson16.sa.html, `we-2`

PROBLEM 2 · WHEN IS IT AT REST For $x = t^2 - 6t + 5$, find when the particle is at rest and where it is at that time. 1 $v = 2t - 6$, and at rest means $v = 0$ Set the velocity to zero. 2 $2t - 6 = 0$ gives $t = 3$ seconds Solve for $t$. 3 $x(3) = 9 - 18 + 5 = -4$ metres Substitute into $x$, not into $v$.

### Source introduction-to-differentiation/lesson16.sa.html, `we-3`

PROBLEM 3 · DISTANCE AGAINST DISPLACEMENT For $x = t^2 - 6t + 5$, find the displacement and the total distance travelled from $t = 0$ to $t = 5$. 1 $x(0) = 5$, $x(5) = 0$, so the displacement is $0 - 5 = -5$ m Endpoints give displacement. 2 The particle is at rest at $t = 3$, where $x = -4$ It reverses inside the interval. 3 Distance $= |{-4} - 5| + |0 - (-4)| = 9 + 4 = 13$ m Add the magnitudes of each stage.

### Source introduction-to-differentiation/lesson16.sa.html, step `sign-is-the-whole-difference`

Negative velocity is not slowing down It means moving in the negative direction. A particle with $v = -8$ is moving faster than one with $v = 3$; its speed is $8$.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: x = t^3 - 3t^2: v = 3t^2 - 6t; v(4) = 24 m/s.
- we-2: x = t^2 - 6t + 5: v = 2t - 6 = 0 at t = 3; x(3) = -4. Card: v(1) = -4, speed 4.
- we-3: x(0) = 5, x(5) = 0; change in displacement -5 m; distance |-4 - 5| + |0 - (-4)| = 13 m.
- Practice: x = t^2 + 3t gives v = 2t + 3; v = 4t - 12 at rest at t = 3; 3 m right then 8 m left: -5 m, 11 m. Q1: x = t^2 - 8t + 7: v = 2t - 8, rest at t = 4, x = -9. Q2: x(0) = 7, x(6) = -5, change -12, distance 16 + 4 = 20 m.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading a negative velocity as slowing down.
- Subtracting end positions to get distance when the particle turned around.
- Substituting the rest time into v instead of x to find where it stops.
- Mixing up "displacement at time t" (position x) with "change in displacement" over an interval.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `StudioParticleTrack`: a dot on a horizontal number line with the origin marked, a velocity arrow whose length and direction follow v, and a trail that counts distance while x shows position.
- Paired x-t and v-t graphs (`StackedDerivativePanels`): the turn on the track lines up with v = 0 and the top or bottom of the x graph.
- Stage-by-stage distance as two coloured bars (9 m and 4 m) stacking to 13, against the single -5 bar for change in displacement.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

A particle moves so that x = t^2 - 4t - 5 metres after t seconds. Find its velocity and speed at t = 1, when it is at rest, and its position then.

**Worked answer:** v = dx/dt = 2t - 4. At t = 1: v = -2 m/s, speed 2 m/s. At rest when 2t - 4 = 0, t = 2 s; x(2) = 4 - 8 - 5 = -9 m.

### Question 2

A particle has displacement x = 12t - 2t^2 metres after t seconds. Find its displacement at t = 5 and the distance it travels in the first 5 seconds.

**Worked answer:** v = 12 - 4t = 0 at t = 3, where x = 18. x(0) = 0 and x(5) = 10, so the displacement at t = 5 is 10 m. Distance: 18 m out, then 18 - 10 = 8 m back, total 26 m.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A beep test (20 m shuttle run) between two lines: after each return the displacement is back to 0 while the distance keeps growing (sport; cones and lines only).
- A harbour ferry shuttling across and back: velocity changes sign at each wharf, speed does not (travel).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson16.sa.html`, `we-3`. Old text: "$x(0) = 5$, $x(5) = 0$, so the displacement is $0 - 5 = -5$ m". The lesson defines displacement as signed position from the origin, so the displacement at $t = 5$ is $0$ m; $-5$ m is the change in displacement (as the lesson's own Q2 says). Correction: "so the change in displacement is $0 - 5 = -5$ m". The same fix applies to the card sentence "The displacement over the same interval is only $0 - 5 = -5$ m."

Decisions for Claude:

- Keep "displacement x" (a position) and "change in displacement" (over an interval) as separate phrases throughout; the syllabus point asks to distinguish displacement from distance.
- Next is math-a11-e01. The handoff can turn the particle's turning point into a question about growth that never turns around.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
