# math-a11-t12: How do the reciprocal ratios extend to any angle, and where are they undefined?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci15aca25e` (None): Develop the definitions sec θ = r/x, cosec θ = r/y and cot θ = x/y using a circle of radius r centred at the origin [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: missing. Gap: The definitions sec = r/x, cosec = r/y, cot = x/y on a circle of radius r are not developed.
- `cicf5015c7` (None): Establish the reciprocal ratios sec A = 1/(cos A), cosec A = 1/(sin A), and cot A = 1/(tan A), identifying the angles to be excluded in each identity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.
- `ci6990d1da` (None): Determine the exact value of the secant, cosecant and cotangent ratios for angles that are integer multiples of π/6 and π/4, if they exist [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.
- `ci3c95dfdc` (None): Establish the identities tan θ = (sin θ)/(cos θ) and cot θ = (cos θ)/(sin θ), identifying the angles to be excluded in each identity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t03: cos θ = x/r, sin θ = y/r, tan θ = y/x for any angle on a circle of radius r. math-a11-t11: sec, cosec and cot as side ratios for acute angles. math-a11-t04: Quadrant signs and related angles. math-a11-t08: Exact values at multiples of π/6 and π/4.

**Prior video:** math-a11-t11.

**Start:** Open on t11's handoff: "sec 120° = ?" beside a 120° ray with no right-angled triangle to flip, and t03's point (−3, 4) on a circle of radius 5.

**Stop:** Develop sec θ = r/x, cosec θ = r/y and cot θ = x/y for the point (x, y) on a circle of radius r; establish sec A = 1/cos A, cosec A = 1/sin A, cot A = 1/tan A, tan θ = sin θ/cos θ and cot θ = cos θ/sin θ, stating the angles excluded from each; read signs from the coordinates; find exact sec, cosec and cot of integer multiples of π/6 and π/4 (and their degree equivalents), or say that they do not exist. Graphs of sec, cosec and cot are not Year 11. The Pythagorean identities are t14.

**Next:** math-a11-t13.

## 2. Site order, sections and worked examples

Read-only source: [trigonometric-identities-and-equations/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `d55cf57e77a8c4b1f6afd312c0cf7f57cb5b600348350faf495d1d0fc8b138bc`. Title: Reciprocal Trigonometric Functions. Lesson id maths-adv-y11-m2-l06.

Data-step ids: `orient`, `the-three-reciprocal-functions`, `what-you-ll-master`, `domains-and-signs-of-reciprocal`, `common-traps`, `drill-build-fluency`, `revisit-the-unit-circle`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson01.sa.html, `we-1`

WORKED EXAMPLE · FROM ONE RATIO TO ALL SIX Given $\sec \theta = -3$ and $\pi < \theta < \dfrac{3\pi}{2}$, find the exact values of $\sin \theta$, $\csc \theta$, $\tan \theta$ and $\cot \theta$. 1 $\cos \theta = \dfrac{1}{\sec \theta} = -\dfrac{1}{3}$ Turn the reciprocal back into its original function first. Here $\cos\theta$ is negative, as it must be in Quadrant III. 2 Opposite side $= \sqrt{3^2 - 1^2} = \sqrt{8} = 2\sqrt{2}$ Draw a reference triangle with adjacent side $1$ and hypotenuse $3$, then use Pythagoras for the third side. Signs come later, from the quadrant. 3 $\sin \theta = -\dfrac{2\sqrt{2}}{3}, \qquad \csc \theta = -\dfrac{3}{2\sqrt{2}} = -\dfrac{3\sqrt{2}}{4}$ In Quadrant III sine is negative (ASTC), and cosecant takes the same sign as sine. Rationalise the denominator. 4 $\tan \theta = \dfrac{\sin \theta}{\cos \theta} = \dfrac{-2\sqrt{2}/3}{-1/3} = 2\sqrt{2}, \qquad \cot \theta = \dfrac{1}{2\sqrt{2}} = \dfrac{\sqrt{2}}{4}$ Tangent is positive in Quadrant III, and the two negatives confirm it. Check: $\tan\theta \cdot \cot\theta = 2\sqrt{2} \cdot \dfrac{\sqrt{2}}{4} = 1$ ✓

### Source trigonometric-identities-and-equations/lesson01.sa.html, hook

If $\sin \theta = 0$, then $\frac{1}{\sin \theta}$ is undefined because you cannot divide by zero. Where on the unit circle does $\sin \theta = 0$? And what does this tell you about where $\csc \theta$ is undefined?

### Source trigonometric-identities-and-equations/lesson01.sa.html, card 05 "Domains and signs of reciprocal functions"

Because division by zero is undefined, each reciprocal function has restrictions on its domain. The signs follow directly from the original function via ASTC: $\csc \theta$ is positive where $\sin \theta$ is positive (Quadrants I and II) $\sec \theta$ is positive where $\cos \theta$ is positive (Quadrants I and IV) $\cot \theta$ is positive where $\tan \theta$ is positive (Quadrants I and III) The range of cosecant and secant is $(-\infty, -1] \cup [1, \infty)$ because they are reciprocals of numbers in $[-1, 1]$ (excluding 0). The range of cotangent is all real numbers.

### Source trigonometric-identities-and-equations/lesson01.sa.html, card 07, worked example

State the values of $\theta$ in $[0, 2\pi]$ for which $\cot \theta$ is undefined. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Step 1: Identify the condition. $$\cot \theta = \frac{\cos \theta}{\sin \theta} \text{ is undefined when } \sin \theta = 0$$ Step 2: Find solutions in $[0, 2\pi]$. $$\sin \theta = 0 \text{ at } \theta = 0, \pi, 2\pi$$

### Source trigonometric-identities-and-equations/lesson01.sa.html, card 08, worked example

Simplify $\sin \theta \cdot \csc \theta + \cos \theta \cdot \sec \theta$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Step 1: Write reciprocals explicitly. $$\sin \theta \cdot \frac{1}{\sin \theta} + \cos \theta \cdot \frac{1}{\cos \theta}$$ Step 2: Simplify each term. $$1 + 1 = 2$$

### Source trigonometric-identities-and-equations/lesson01.sa.html, drill items 4 and 5

4 Find the exact value of $\sec \frac{2\pi}{3}$. Show answer $-2$ QII: $\cos \frac{2\pi}{3} = -\frac{1}{2}$, so $\sec \frac{2\pi}{3} = -2$. 5 Find the exact value of $\csc \frac{3\pi}{4}$. Show answer $\sqrt{2}$ QII: $\sin \frac{3\pi}{4} = \frac{\sqrt{2}}{2}$, so $\csc \frac{3\pi}{4} = \sqrt{2}$.

### Source trigonometric-identities-and-equations/lesson01.sa.html, short answers 1 and 2

(a) $\frac{5\pi}{6}$ is in QII. Reference angle = $\frac{\pi}{6}$. $\sin \frac{\pi}{6} = \frac{1}{2}$. In QII, sine is positive, so $\sin \frac{5\pi}{6} = \frac{1}{2}$. Therefore $\csc \frac{5\pi}{6} = \mathbf{2}$. (b) $\frac{7\pi}{4}$ is in QIV. Reference angle = $\frac{\pi}{4}$. $\cos \frac{\pi}{4} = \frac{\sqrt{2}}{2}$. In QIV, cosine is positive, so $\cos \frac{7\pi}{4} = \frac{\sqrt{2}}{2}$. Therefore $\sec \frac{7\pi}{4} = \mathbf{\sqrt{2}}$. Apply Band 5–6 Simplify to a single function Simplify $\frac{\sec \theta}{\tan \theta}$ to a single trigonometric function. State any restrictions on $\theta$. auto-saved View comprehensive answer Working: $$\frac{\sec \theta}{\tan \theta} = \frac{\frac{1}{\cos \theta}}{\frac{\sin \theta}{\cos \theta}} = \frac{1}{\cos \theta} \times \frac{\cos \theta}{\sin \theta} = \frac{1}{\sin \theta} = \csc \theta$$ Answer: $\mathbf{\csc \theta}$ Restrictions: $\cos \theta \neq 0$ and $\sin \theta \neq 0$, so $\theta \neq \frac{n\pi}{2}$ for any integer $n$.

Other parts of this lesson (the range of cosecant (short answer 3) belongs to graphs of the reciprocals, which are not a Year 11 point) are deferred source context, not part of this video.

Read-only source: [trigonometric-identities-and-equations/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `2e682dc6bfe7234c7dc21341876e36f9dfff920f15f65bd6e320a05358fa138d`. Title: Domains and Ranges of Trigonometric Functions. Lesson id maths-adv-y11-m2-l09.

Data-step ids: `orient`, `domain-and-range-at-a`, `what-you-ll-master`, `systematic-analysis-of-all-six`, `common-traps`, `drill-build-fluency`, `revisit-bounded-vs-unbounded`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson04.sa.html, card 05 "Systematic analysis of all six functions"

$\tan x = \frac{\sin x}{\cos x}$ is undefined whenever $\cos x = 0$, which occurs at $x = \frac{\pi}{2} + n\pi$ for any integer $n$. As $x$ approaches these values, $\tan x$ approaches $\pm\infty$. The reciprocal functions inherit restrictions from their denominators: $\csc x = \frac{1}{\sin x}$: undefined at $x = n\pi$; range $|y| \geq 1$ $\sec x = \frac{1}{\cos x}$: undefined at $x = \frac{\pi}{2} + n\pi$; range $|y| \geq 1$ $\cot x = \frac{\cos x}{\sin x}$: undefined at $x = n\pi$; range all real $y$

Other parts of this lesson (ranges and transformed ranges are not part of this video) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Original circle example (t03's point): (−3, 4), r = 5: sec θ = r/x = −5/3, cosec θ = r/y = 5/4, cot θ = x/y = −3/4.
- TI01: sec(π/3) = 2; cot undefined on [0, 2π] at 0, π, 2π; sin θ cosec θ + cos θ sec θ = 2 (where defined); drills sec(2π/3) = −2, cosec(3π/4) = √2; short answers cosec(5π/6) = 2, sec(7π/4) = √2, sec θ/tan θ = cosec θ with θ ≠ nπ/2.
- TI01 we-1: sec θ = −3, π < θ < 3π/2: cos θ = −1/3, sin θ = −2√2/3, cosec θ = −3√2/4, tan θ = 2√2, cot θ = √2/4.
- Degree forms: sec 120° = −2, cosec 210° = −2, cot 330° = −√3.

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Excluding the wrong angles: cot θ = cos θ/sin θ fails only where sin θ = 0, but cot θ = 1/tan θ also fails where tan θ is undefined (cos θ = 0).
- Writing cot 90° as undefined (x/y = 0/1 = 0).
- Giving a reciprocal the opposite sign to its partner.
- Writing sec θ = 1/sin θ.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `StudioCirclePoint` (new) with paired readouts: x/r beside r/x, y/r beside r/y, y/x beside x/y, in matching role colours, all from one point turning through any angle.
- Excluded angles as hollow dots on the circle where x = 0 or y = 0, and a short exclusions strip under each identity (`DomainExclusions` from `algebra.tsx`, or `IntervalPicture` with open points).
- An identity table that fills one row at a time: identity, "excluded where", example angle.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

Find the exact value of cosec 300° + cot 225°.

**Worked answer:** sin 300° = −√3/2, so cosec 300° = −2/√3 = −2√3/3. tan 225° = 1, so cot 225° = 1. Total 1 − 2√3/3.

### Question 2

(a) For 0° ≤ θ ≤ 360°, state the values of θ for which sec θ is undefined. (b) Find the exact values of sec 135° and sec 300°.

**Worked answer:** (a) 90° and 270°, where cos θ = 0 (x = 0). (b) cos 135° = −√2/2, so sec 135° = −√2; cos 300° = 1/2, so sec 300° = 2.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A security floodlight on a tilting bracket: the beam's length to the ground is the mounting height times sec of its tilt from straight down, with no end as the tilt reaches 90° (home).
- A phone on a tripod tilted down at a subject on the ground: the distance along the line of sight is the height times cosec of the angle of depression (phones).
- A boat's anchor rope: rope length is the water depth times sec of the rope's angle from the vertical (travel).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- `ci15aca25e` is missing: the site never defines sec, cosec and cot on a circle of radius r. Reuse t03's circle and point (−3, 4) so the six ratios come from one picture.
- `cicf5015c7` and `ci3c95dfdc` ask for the excluded angles of each identity. The site lists where each function is undefined but not where each identity fails (for example cot θ = 1/tan θ at θ = 90°, where cot 90° = 0 but tan 90° is undefined). State them per identity.
- Possible split if the draft runs long: t12a (circle definitions, the five identities and their exclusions) and t12b (exact values at multiples of π/6 and π/4, with we-1).
- Join: the next pack (math-a11-t13) opens on this video's final frame. Its start reads: Open on t12's handoff (the site's hook): sin 30° = 1/2 and cos 60° = 1/2 side by side in t01's half-equilateral triangle, with the chip "coincidence?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
