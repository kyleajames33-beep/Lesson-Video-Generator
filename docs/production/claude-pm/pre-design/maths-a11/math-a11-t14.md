# math-a11-t14: How do the Pythagorean identities prove further identities?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cif79ffa41` (None): Prove the Pythagorean identity cos^2 x + sin^2 x = 1, and the identities 1 + tan^2 x = sec^2 x and 1 + cot^2 x = cosec^2 x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.
- `ci1ff2042e` (None): Apply trigonometric identities to solve problems, simplify expressions and prove further trigonometric identities using substitution and/or reduction to sin x and cos x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t03: x² + y² = r² for the point on the circle; cos θ = x/r, sin θ = y/r. math-a11-t12: Reciprocal identities, tan = sin/cos, cot = cos/sin, and their excluded angles. math-a11-t04: Quadrant signs. math-a11-w02: Algebraic fractions, common denominators, difference of two squares.

**Prior video:** math-a11-t13.

**Start:** Open on t13's handoff: t03's circle point with sides x, y and r, the equation x² + y² = r², and the site's hook question "divide every term by ...?".

**Stop:** Prove cos² x + sin² x = 1 (divide x² + y² = r² by r²), 1 + tan² x = sec² x (divide by cos² x, cos x ≠ 0) and 1 + cot² x = cosec² x (divide by sin² x, sin x ≠ 0); use them to find a ratio from another with the quadrant choosing the sign; simplify expressions; prove further identities by substitution or by reducing to sin x and cos x, working from one side. Solving equations with these identities is t16.

**Next:** math-a11-t15.

## 2. Site order, sections and worked examples

Read-only source: [trigonometric-identities-and-equations/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `a3e9e72e1c8fdcb9671f008d4324f5840209060244db52e042df2e5306221cf7`. Title: Pythagorean Identities. Lesson id maths-adv-y11-m2-l07.

Data-step ids: `orient`, `the-three-pythagorean-identities`, `what-you-ll-master`, `deriving-and-using-the-identities`, `common-traps`, `drill-build-fluency`, `revisit-one-identity-two-divisions`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson02.sa.html, `we-1`

WORKED EXAMPLE · PROVING AN IDENTITY BY FACTORISING Prove that $\sin^4 \theta - \cos^4 \theta = 2\sin^2 \theta - 1$. 1 $\text{LHS} = (\sin^2 \theta)^2 - (\cos^2 \theta)^2 = (\sin^2 \theta - \cos^2 \theta)(\sin^2 \theta + \cos^2 \theta)$ Start from the more complicated side. Fourth powers are squares of squares, so this is a difference of two squares. 2 $= (\sin^2 \theta - \cos^2 \theta) \times 1 = \sin^2 \theta - \cos^2 \theta$ The second bracket is exactly the Pythagorean identity $\sin^2\theta + \cos^2\theta = 1$. 3 $= \sin^2 \theta - (1 - \sin^2 \theta) = 2\sin^2 \theta - 1 = \text{RHS}$ The right-hand side contains only $\sin\theta$, so rewrite $\cos^2\theta$ as $1 - \sin^2\theta$ and collect like terms. ✓

### Source trigonometric-identities-and-equations/lesson02.sa.html, card 05 "Deriving and using the identities"

The fundamental identity comes directly from the unit circle equation $x^2 + y^2 = 1$, where $x = \cos \theta$ and $y = \sin \theta$. $$\sin^2 \theta + \cos^2 \theta = 1$$ Deriving Identity 2: Divide every term by $\cos^2 \theta$ (provided $\cos \theta \neq 0$): $$\frac{\sin^2 \theta}{\cos^2 \theta} + \frac{\cos^2 \theta}{\cos^2 \theta} = \frac{1}{\cos^2 \theta} \;\Rightarrow\; \tan^2 \theta + 1 = \sec^2 \theta$$ Deriving Identity 3: Divide every term by $\sin^2 \theta$ (provided $\sin \theta \neq 0$): $$\frac{\sin^2 \theta}{\sin^2 \theta} + \frac{\cos^2 \theta}{\sin^2 \theta} = \frac{1}{\sin^2 \theta} \;\Rightarrow\; 1 + \cot^2 \theta = \csc^2 \theta$$

### Source trigonometric-identities-and-equations/lesson02.sa.html, card 07, worked example

If $\sec \theta = \frac{5}{4}$ and $\theta$ is acute, find $\tan \theta$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Step 1: Choose the appropriate identity. $$1 + \tan^2 \theta = \sec^2 \theta$$ Step 2: Substitute $\sec \theta = \frac{5}{4}$. $$1 + \tan^2 \theta = \left(\frac{5}{4}\right)^2 = \frac{25}{16}$$ Step 3: Solve for $\tan^2 \theta$. $$\tan^2 \theta = \frac{25}{16} - 1 = \frac{9}{16}$$ Step 4: Take the square root. Since $\theta$ is acute, $\tan \theta > 0$. $$\tan \theta = \frac{3}{4}$$

### Source trigonometric-identities-and-equations/lesson02.sa.html, card 08, worked example

Simplify $\frac{\sec^2 \theta - 1}{\tan \theta}$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Step 1: Recognise the identity. $$\sec^2 \theta - 1 = \tan^2 \theta$$ Step 2: Substitute and simplify. $$\frac{\tan^2 \theta}{\tan \theta} = \tan \theta$$

### Source trigonometric-identities-and-equations/lesson02.sa.html, step `drill-build-fluency`

1 If $\tan \theta = 2$ and $\theta$ is acute, find $\sec \theta$. Show answer $\sqrt{5}$. $1 + 4 = \sec^2 \theta \Rightarrow \sec \theta = \sqrt{5}$ (positive, acute). 2 If $\csc \theta = 3$ and $\frac{\pi}{2} < \theta < \pi$, find $\cot \theta$. Show answer $-2\sqrt{2}$. $1 + \cot^2 \theta = 9 \Rightarrow \cot^2 \theta = 8$. In QII, cot is negative, so $\cot \theta = -2\sqrt{2}$. 3 If $\cos \theta = -\frac{2}{3}$ and $\pi < \theta < \frac{3\pi}{2}$, find $\sin \theta$. Show answer $-\frac{\sqrt{5}}{3}$. $\sin^2 \theta = 1 - \frac{4}{9} = \frac{5}{9}$. In QIII, sine is negative, so $\sin \theta = -\frac{\sqrt{5}}{3}$. 4 If $\sec \theta = -\frac{5}{3}$ and $\frac{\pi}{2} < \theta < \pi$, find $\tan \theta$. Show answer $-\frac{4}{3}$. $\tan^2 \theta = \frac{25}{9} - 1 = \frac{16}{9}$. In QII, tan is negative, so $\tan \theta = -\frac{4}{3}$. 5 Simplify $\sin^2 \theta(1 + \cot^2 \theta)$. Show answer 1. $\sin^2 \theta \cdot \csc^2 \theta = \sin^2 \theta \cdot \frac{1}{\sin^2 \theta} = 1$.

### Source trigonometric-identities-and-equations/lesson02.sa.html, short answers 2 and 3

If $\tan \theta = -\frac{4}{3}$ and $\frac{3\pi}{2} < \theta < 2\pi$, find the exact values of $\sin \theta$ and $\cos \theta$. Show all working. (3 marks) auto-saved View comprehensive answer Working: Using $1 + \tan^2 \theta = \sec^2 \theta$: $$\sec^2 \theta = 1 + \frac{16}{9} = \frac{25}{9}$$ In QIV, $\sec \theta > 0$, so $\sec \theta = \frac{5}{3}$, giving $\cos \theta = \frac{3}{5}$. Using $\tan \theta = \frac{\sin \theta}{\cos \theta}$: $$\sin \theta = -\frac{4}{3} \times \frac{3}{5} = -\frac{4}{5}$$ Check: $\frac{16}{25} + \frac{9}{25} = 1$ ✓ Answer: $\sin \theta = \mathbf{-\frac{4}{5}}$, $\cos \theta = \mathbf{\frac{3}{5}}$ Analyse Band 6 3 marks Simplify using identities Simplify $\frac{\sin^2 \theta}{1 - \cos \theta}$ to a single trigonometric expression. Justify each step. (3 marks) auto-saved View comprehensive answer Working: Replace $\sin^2 \theta$ with $1 - \cos^2 \theta$: $$\frac{1 - \cos^2 \theta}{1 - \cos \theta} = \frac{(1 - \cos \theta)(1 + \cos \theta)}{1 - \cos \theta}$$ Cancel (where $\cos \theta \neq 1$): $$= 1 + \cos \theta$$

Read-only source: [trigonometric-identities-and-equations/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e36de2cf0f4ccc044f4dfd456cd23611c529dddf7656b51c50579ee7ab742c63`. Title: Review and Connections. Lesson id maths-adv-y11-m2-l15.

Data-step ids: `orient`, `two-moves-the-big-picture`, `what-you-ll-master`, `module-2-at-a-glance`, `common-traps`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson10.sa.html, `we-1`

WORKED EXAMPLE · RECIPROCAL AND PYTHAGOREAN IDENTITIES TOGETHER Prove that $\tan \theta + \cot \theta = \sec \theta \csc \theta$. 1 $\text{LHS} = \dfrac{\sin \theta}{\cos \theta} + \dfrac{\cos \theta}{\sin \theta}$ When a proof mixes several functions, rewrite everything in terms of $\sin\theta$ and $\cos\theta$. 2 $= \dfrac{\sin^2 \theta + \cos^2 \theta}{\sin \theta \cos \theta}$ Add the fractions over the common denominator $\sin\theta\cos\theta$. 3 $= \dfrac{1}{\sin \theta \cos \theta} = \dfrac{1}{\cos \theta} \cdot \dfrac{1}{\sin \theta} = \sec \theta \csc \theta = \text{RHS}$ The numerator is the Pythagorean identity, then split the fraction into the two reciprocal ratios. ✓ The identity holds wherever both sides are defined, that is where $\sin\theta \neq 0$ and $\cos\theta \neq 0$.

### Source trigonometric-identities-and-equations/lesson10.sa.html, card 07, worked example

If $\sin \theta = \dfrac{1}{3}$ and $\dfrac{\pi}{2} < \theta < \pi$, find the exact value of $\tan \theta$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 3 marks · HSC band 4+ Step 1: Find $\cos \theta$ using the Pythagorean identity. $$\cos^2 \theta = 1 - \sin^2 \theta = 1 - \frac{1}{9} = \frac{8}{9}$$ Step 2: Determine the sign. $$\text{In QII, } \cos \theta < 0, \text{ so } \cos \theta = -\frac{\sqrt{8}}{3} = -\frac{2\sqrt{2}}{3}$$ Step 3: Calculate $\tan \theta$. $$\tan \theta = \frac{\sin \theta}{\cos \theta} = \frac{\frac{1}{3}}{-\frac{2\sqrt{2}}{3}} = -\frac{1}{2\sqrt{2}} = -\frac{\sqrt{2}}{4}$$

### Source trigonometric-identities-and-equations/lesson10.sa.html, drill items 1 and 2

1 If $\cos \theta = -\dfrac{3}{5}$ and $\pi < \theta < \dfrac{3\pi}{2}$, find $\sin \theta$ and $\tan \theta$. Show answer In QIII, $\sin \theta = -\dfrac{4}{5}$ and $\tan \theta = \dfrac{4}{3}$ . 2 Simplify $\dfrac{1 - \cos^2 x}{\sin x \cos x}$. Show answer $\dfrac{\sin^2 x}{\sin x \cos x} = \dfrac{\sin x}{\cos x} = \tan x$

Other parts of this lesson (the rest of the review lesson is used by t07, t09 and t15) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- TI02 card 07: 1 + tan² θ = 25/16, tan θ = 3/4 (acute). Card 08: (sec² θ − 1)/tan θ = tan θ. we-1: sin⁴ θ − cos⁴ θ = (sin² θ − cos² θ)(1) = 2 sin² θ − 1 (checked symbolically).
- Drills: tan θ = 2 gives sec θ = √5; cosec θ = 3 in the second quadrant gives cot θ = −2√2; cos θ = −2/3 in the third gives sin θ = −√5/3; sec θ = −5/3 in the second gives tan θ = −4/3; sin² θ(1 + cot² θ) = 1.
- Short answers: tan θ = −4/3 in the fourth quadrant gives sec θ = 5/3, cos θ = 3/5, sin θ = −4/5; sin² θ/(1 − cos θ) = 1 + cos θ (cos θ ≠ 1).
- TI10: sin θ = 1/3 in the second quadrant gives cos θ = −2√2/3, tan θ = −√2/4; tan θ + cot θ = sec θ cosec θ (sin θ, cos θ ≠ 0); cos θ = −3/5 in the third gives sin θ = −4/5, tan θ = 4/3; (1 − cos² x)/(sin x cos x) = tan x.

Every value and identity above was recalculated or simplified with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing 1 + tan² θ = cosec² θ (tan pairs with sec).
- Dropping the 1: tan² θ = sec² θ.
- Working on both sides at once, or starting from the statement to be proved as if it were true.
- Keeping ± after a square root instead of letting the quadrant choose.
- Dividing by cos² θ without saying cos θ ≠ 0.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- t03's triangle (x, y, r) rescaled three ways: hypotenuse 1 gives sides cos, sin, 1; adjacent 1 gives sides 1, tan, sec; opposite 1 gives cot, 1, cosec. Pythagoras in each triangle is one identity (`StudioTriangle` scaling, `AlignedAlgebra` dividing through).
- A proof board: LHS on the left, each line's reason in grey ("Pythagorean identity", "tan = sin/cos"), the RHS appearing only at the end (`WorkingBoard` rows).
- A sign check: the quadrant badge from t04 choosing between ± values.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

Prove that sec θ − cos θ = sin θ tan θ.

**Worked answer:** LHS = 1/cos θ − cos θ = (1 − cos² θ)/cos θ = sin² θ/cos θ = sin θ × (sin θ/cos θ) = sin θ tan θ = RHS (cos θ ≠ 0).

### Question 2

Given cosec θ = −13/5 and 270° < θ < 360°, find the exact value of cot θ.

**Worked answer:** 1 + cot² θ = cosec² θ = 169/25, so cot² θ = 144/25 and cot θ = ±12/5. In the fourth quadrant x > 0 and y < 0, so cot θ = x/y < 0: cot θ = −12/5.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A music mixing desk's pan control: the left and right volumes follow cos θ and sin θ, so cos² θ + sin² θ = 1 keeps the total loudness steady as a sound moves across (music).
- A ladder sliding down a wall: its top height and foot distance change, but height² + distance² stays equal to length² (building and DIY).
- A 1 km walk in any direction: its east part and north part, squared and added, always give 1 (travel).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- `cif79ffa41` says "prove": derive cos² x + sin² x = 1 from the circle (x² + y² = r²), not from the unit circle alone, to match t03's radius-r definitions.
- `ci1ff2042e` is broad (solve problems, simplify, prove further identities). Possible split if the draft runs long: t14a (prove the three identities and find ratios) and t14b (simplifying and proving further identities).
- Proof layout: one side to the other, a reason on each line, restrictions stated when dividing.
- Join: the next pack (math-a11-t15) opens on this video's final frame. Its start reads: Open on t14's handoff: "sin θ = 0.5" with the calculator's single answer 30° and a sketch of y = sin x from 0° to 360° crossing y = 0.5 twice (lesson11 recall).

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
