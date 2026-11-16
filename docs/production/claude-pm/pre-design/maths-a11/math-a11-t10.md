# math-a11-t10: What do the graphs of sin, cos and tan show about their behaviour?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cid79268a8` (Radians): Graph y = sin x, y = cos x and y = tan x over domains given in degrees or radians, showing intercepts with the x-axis and y-axis and any asymptotes, determine their domains and ranges, and period and amplitude where appropriate, and whether each is even or odd or neither [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t03: sin θ = y/r, cos θ = x/r, tan θ = y/x; values at multiples of 90°. math-a11-t04: cos(−θ) = cos θ, sin(−θ) = −sin θ, tan(−θ) = −tan θ. math-a11-t08: Radians and exact values at multiples of π/6 and π/4. math-a11-w26: Even and odd functions (f(−x) = f(x) or −f(x)). math-a11-w21: Vertical asymptotes.

**Prior video:** math-a11-t09.

**Start:** Open on t09's handoff: a point going round t03's circle (radius 1), its height marked, and the question "plot the height against the angle?".

**Stop:** Graph y = sin x, y = cos x and y = tan x over domains given in degrees or in radians, showing x- and y-intercepts and the asymptotes of tan (x = 90° + 180°k, or π/2 + kπ); state domains and ranges; period (360° or 2π for sin and cos, 180° or π for tan) and amplitude (1, for sin and cos only); decide even (cos) or odd (sin, tan) from t04's negative-angle results. Transformed graphs such as y = 2 sin 3x are Year 12 (math-a12-t01); solving with graphs is t15.

**Next:** math-a11-t11.

## 2. Site order, sections and worked examples

Read-only source: [trigonometric-identities-and-equations/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `689beae18b4666f580f672a5a78c95f9ffe5847aeff0761b9b83e6554c7ea684`. Title: Graphs of Sine and Cosine. Lesson id maths-adv-y11-m2-l10.

Data-step ids: `orient`, `two-moves-general-form-at`, `what-you-ll-master`, `basic-graphs-of-y-sin`, `common-traps`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson05.sa.html, `we-1`

WORKED EXAMPLE · READING FEATURES OFF THE BASIC GRAPHS For $y = \cos x$ on the domain $-2\pi \le x \le 2\pi$: (a) state the $x$-intercepts, (b) state the period and amplitude, and (c) decide whether the function is even, odd or neither, and use your answer to find $\cos\left(-\dfrac{\pi}{3}\right)$. 1 (a) $\cos x = 0$ at $x = -\dfrac{3\pi}{2}, -\dfrac{\pi}{2}, \dfrac{\pi}{2}, \dfrac{3\pi}{2}$. Cosine is zero at the top and bottom of the unit circle, which is every odd multiple of $\dfrac{\pi}{2}$. List all four in the stated domain, not just the positive ones. 2 (b) Period $2\pi$, amplitude $1$. The graph repeats every full turn of the unit circle, and it oscillates between $-1$ and $1$, which is $1$ unit either side of the $x$-axis. 3 (c) $\cos(-x) = \cos x$ for every $x$, so $y = \cos x$ is even : its graph is symmetric about the $y$-axis. On the unit circle, turning through $-x$ instead of $x$ reflects the point in the horizontal axis, which leaves its $x$-coordinate unchanged. 4 $\cos\left(-\dfrac{\pi}{3}\right) = \cos\dfrac{\pi}{3} = \dfrac{1}{2}$ Evenness turns a negative angle into a positive one in a single step. ✓

### Source trigonometric-identities-and-equations/lesson05.sa.html, hook

A pure musical tone is a sine wave. When you play middle C on a piano, the air pressure oscillates 262 times per second in a perfect sinusoidal pattern.

### Source trigonometric-identities-and-equations/lesson05.sa.html, card 05 "Basic graphs of y = sin x and y = cos x"

The graph of $y = \sin x$ is a smooth wave that passes through the origin, reaches a maximum of $1$ at $x = \frac{\pi}{2}$, returns to $0$ at $x = \pi$, hits a minimum of $-1$ at $x = \frac{3\pi}{2}$, and completes one full cycle at $x = 2\pi$. The graph of $y = \cos x$ has the identical wave shape, but starts at a maximum of $1$ when $x = 0$. It crosses zero at $x = \frac{\pi}{2}$, reaches $-1$ at $x = \pi$, and returns to $1$ at $x = 2\pi$.

Other parts of this lesson (cards 02, 06 to 09, drills 2 to 5 and the short answers teach y = a sin(bx) + d (Year 12 in the 2024 syllabus)) are deferred source context, not part of this video.

Read-only source: [trigonometric-identities-and-equations/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `25f9be3e892a90e292ae779671ec8ffeb0bdc40448bf69205b0ab4ece2d3e2fc`. Title: Graphs of Tangent and Cotangent. Lesson id maths-adv-y11-m2-l11.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `graph-of-y-tan-x`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson06.sa.html, `we-1`

WORKED EXAMPLE · ASYMPTOTES, INTERCEPTS AND SYMMETRY For $y = \tan x$ on the domain $-\pi \le x \le \pi$: (a) state the equations of the vertical asymptotes and the $x$-intercepts, (b) show that the function is odd, and (c) hence find the exact value of $\tan\left(-\dfrac{\pi}{3}\right)$. 1 (a) Asymptotes where $\cos x = 0$: $x = -\dfrac{\pi}{2}$ and $x = \dfrac{\pi}{2}$. $\tan x = \dfrac{\sin x}{\cos x}$ is undefined wherever its denominator is zero. 2 $x$-intercepts where $\sin x = 0$: $x = -\pi, 0, \pi$. A fraction is zero when its numerator is zero. The intercepts are $\pi$ apart, matching the period of $\pi$. 3 $\tan(-x) = \dfrac{\sin(-x)}{\cos(-x)} = \dfrac{-\sin x}{\cos x} = -\tan x$ (b) Sine is odd and cosine is even, so their quotient is odd. The graph has rotational symmetry about the origin. 4 $\tan\left(-\dfrac{\pi}{3}\right) = -\tan\dfrac{\pi}{3} = -\sqrt{3}$ (c) Oddness moves the negative sign outside. Check: $-\dfrac{\pi}{3}$ is in Quadrant IV, where tangent is negative. ✓

### Source trigonometric-identities-and-equations/lesson06.sa.html, card 05 "Graph of y = tan x", key features

Key Features of $y = \tan x$ Period: $\pi$ (repeats every $\pi$ radians) Domain: All real $x$ except $x = \frac{\pi}{2} + n\pi$ Range: All real $y$ $x$-intercepts: $x = n\pi$ (where $\sin x = 0$) Asymptotes: $x = \frac{\pi}{2} + n\pi$ Behaviour: Always increasing between asymptotes

### Source trigonometric-identities-and-equations/lesson06.sa.html, card 07, worked example

Sketch $y = \tan x$ for $-\frac{\pi}{2} < x < \frac{3\pi}{2}$ and label the asymptotes and $x$-intercepts. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 3 marks · HSC band 4+ Step 1: Find the asymptotes. $$x = -\frac{\pi}{2}, \; \frac{\pi}{2}, \; \frac{3\pi}{2}$$ Step 2: Find the $x$-intercepts. $$x = 0, \; \pi$$

Other parts of this lesson (the cotangent graph and tan(2x) are not 2024 Year 11 graphing points) are deferred source context, not part of this video.

Read-only source: [trigonometric-identities-and-equations/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `2e682dc6bfe7234c7dc21341876e36f9dfff920f15f65bd6e320a05358fa138d`. Title: Domains and Ranges of Trigonometric Functions. Lesson id maths-adv-y11-m2-l09.

Data-step ids: `orient`, `domain-and-range-at-a`, `what-you-ll-master`, `systematic-analysis-of-all-six`, `common-traps`, `drill-build-fluency`, `revisit-bounded-vs-unbounded`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson04.sa.html, card 02 "Domain and range at a glance"

Sine & Cosine Domain: all real $x$. Range: $-1 \leq y \leq 1$. Bounded by the unit circle. Tangent Domain: $x \neq \frac{\pi}{2} + n\pi$. Range: all real $y$. Unbounded with vertical asymptotes.

Other parts of this lesson (reciprocal ranges and transformed ranges are not Year 11 graphing points) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- TI05 we-1: cos x = 0 on [−2π, 2π] at −3π/2, −π/2, π/2, 3π/2; period 2π, amplitude 1; cos(−x) = cos x (even); cos(−π/3) = 1/2.
- TI06 we-1: on [−π, π], asymptotes x = ±π/2, intercepts −π, 0, π; tan(−x) = −tan x (odd); tan(−π/3) = −√3. Card 07: on −π/2 < x < 3π/2, asymptotes −π/2, π/2, 3π/2 and intercepts 0, π. tan(x + π) = tan x.
- Degrees: y = sin x on 0° to 360° meets the x-axis at 0°, 180°, 360°; y = cos x on −180° to 360° at −90°, 90°, 270°.
- Hook: middle C is 261.63 Hz in standard tuning (site "262 times per second" is a rounded value).

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Giving tan a period of 2π (or 360°).
- Drawing tan branches that touch or cross the asymptotes, or joining branches across them.
- Giving tan an amplitude.
- Starting sin at 1 or cos at 0.
- Mixing degree and radian labels on one axis.
- Calling sin even because its graph "looks symmetric".

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The circle unrolling into the graph: a coded point turns on t03's circle while its height is carried across by a dashed projector line to draw y = sin x; cos x is drawn from the x-coordinate; tan x from y/x, breaking at the asymptotes where x = 0 (new part `CircleToGraph`, the coded version of `RotatingPlate`'s projector mode).
- `FunctionSimulator` with `SIN_FAMILY`, `COS_FAMILY` and a tan family whose `excluded` points are the odd multiples of π/2; `piTicks` for radian axes and degree `Tick` lists for degree axes, shown as two versions of the same graph.
- Period bracket and amplitude bar (`StudioFeatureMarks`, midline y = 0 only); even and odd shown by `StudioSymmetryPairs` (mirror in the y-axis for cos, half-turn about the origin for sin and tan).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

Sketch y = cos x for −180° ≤ x ≤ 360°. Show the intercepts with both axes, and state the range, the period and the amplitude. Is y = cos x even, odd or neither? Give a reason.

**Worked answer:** x-intercepts −90°, 90°, 270°; y-intercept (0, 1); range −1 ≤ y ≤ 1; period 360°; amplitude 1. Even, because cos(−x) = cos x: the graph is symmetric about the y-axis.

### Question 2

For y = tan x with −2π ≤ x ≤ π, state the equations of the asymptotes, the x-intercepts, the period and the range. Is y = tan x even, odd or neither?

**Worked answer:** Asymptotes x = −3π/2, −π/2, π/2; x-intercepts −2π, −π, 0, π; period π; range all real y. Odd, because tan(−x) = −tan x.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A pure tone on a phone's voice-memo or tuner screen: the wave repeats with a fixed period, like y = sin x (music, phones).
- A carousel horse rising and falling on its pole as the ride turns (games and leisure).
- A torch swept along a long straight fence: the spot's distance along the fence is d tan θ, racing off as the beam turns towards parallel (home).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- `trigonometric-identities-and-equations/lesson05.sa.html`, hook. Old text: "A pure musical tone is a sine wave. When you play middle C on a piano, the air pressure oscillates 262 times per second in a perfect sinusoidal pattern." A piano note is not a pure sine wave; it contains overtones at multiples of the main frequency. Correction: "A pure tone, like a tuning fork or a test tone, is a sine wave. Middle C repeats about 262 times per second (261.6 Hz); a piano adds overtones, so its wave is not a perfect sine curve."

Decisions for Claude:

- Year 12 relies on this video: `cid79268a8` is entry knowledge for math-a12-t01, t02 and d05 (graphs in radians, period, amplitude, asymptotes, symmetry). Draw every graph in radians at least once and name radians aloud.
- The syllabus says "over domains given in degrees or radians"; the site graphs in radians only, so include one degree-domain graph.
- Out of scope here: y = a sin(bx) + d (TI05, Year 12), the cotangent graph (TI06) and graphs of sec, cosec and cot (TI04).
- Join: the next pack (math-a11-t11) opens on this video's final frame. Its start reads: Open on t10's handoff: tan x racing towards its asymptote at 90° because its denominator (adjacent, or x) shrinks to 0, beside a right-angled triangle with the three side-ratio cards opp/hyp, adj/hyp, opp/adj, and the chip "flip them?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
