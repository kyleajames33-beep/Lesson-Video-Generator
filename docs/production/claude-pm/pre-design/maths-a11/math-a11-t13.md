# math-a11-t13: Why does a ratio of an angle equal the co-ratio of its complement?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cic43f35f1` (None): Prove the complementary angle identities sin (90° - θ) = cos θ, cos (90° - θ) = sin θ, tan (90° - θ) = cot θ, cot (90° - θ) = tan θ, sec (90° - θ) = cosec θ and cosec (90° - θ) = sec θ identifying the angles to be excluded in each identity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.
- `ci3f6f944a` (None): Evaluate trigonometric expressions using angles of any magnitude and complementary angle identities [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t11: sec, cosec and cot as side ratios. math-a11-t12: The reciprocal identities, tan = sin/cos, cot = cos/sin, and their excluded angles. math-a11-t04: Exact values of angles of any magnitude. math-a11-t03: The point (x, y) on a circle; x² + y² = r².

**Prior video:** math-a11-t12.

**Start:** Open on t12's handoff (the site's hook): sin 30° = 1/2 and cos 60° = 1/2 side by side in t01's half-equilateral triangle, with the chip "coincidence?".

**Stop:** Prove sin(90° − θ) = cos θ, cos(90° − θ) = sin θ, tan(90° − θ) = cot θ, cot(90° − θ) = tan θ, sec(90° − θ) = cosec θ and cosec(90° − θ) = sec θ, first in a right-angled triangle (the side opposite θ is adjacent to 90° − θ) and then for any angle by reflecting the circle point in y = x (x and y swap); state the excluded angles of each; evaluate expressions using angles of any magnitude and the complementary identities. Solving equations such as sin 2θ = cos θ is t15.

**Next:** math-a11-t14.

## 2. Site order, sections and worked examples

Read-only source: [trigonometric-identities-and-equations/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `b7e6268b0fe396daae3bc01b255690c00b806a6bdcf6ac793fc81b30fe2f3057`. Title: Complementary Angle Relationships. Lesson id maths-adv-y11-m2-l08.

Data-step ids: `orient`, `co-function-identities`, `what-you-ll-master`, `why-co-functions-work-triangle`, `common-traps`, `drill-build-fluency`, `revisit-the-geometric-origin`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson03.sa.html, `we-1`

WORKED EXAMPLE · TWO CO-FUNCTION PAIRS IN ONE EXPRESSION Without a calculator, find the value of $\sin 20^\circ \sec 70^\circ + \tan 35^\circ \tan 55^\circ$. 1 Spot the complementary pairs: $20^\circ + 70^\circ = 90^\circ$ and $35^\circ + 55^\circ = 90^\circ$. Angles that add to $90^\circ$ are the signal to use the co-function identities. 2 $\sin 20^\circ \sec 70^\circ = \dfrac{\sin 20^\circ}{\cos 70^\circ} = \dfrac{\sin 20^\circ}{\sin 20^\circ} = 1$ Write the secant as a reciprocal, then use $\cos(90^\circ - \theta) = \sin\theta$ with $\theta = 20^\circ$. 3 $\tan 35^\circ \tan 55^\circ = \tan 35^\circ \cot 35^\circ = 1$ $\tan(90^\circ - \theta) = \cot\theta$, so $\tan 55^\circ = \cot 35^\circ$, and a tangent times its own cotangent is $1$. 4 $\sin 20^\circ \sec 70^\circ + \tan 35^\circ \tan 55^\circ = 1 + 1 = 2$ No angle here is a special angle, so the only route to an exact answer is the complementary relationships. ✓

### Source trigonometric-identities-and-equations/lesson03.sa.html, card 05 "Why co-functions work, triangle and circle"

Consider a right-angled triangle with acute angles $\theta$ and $(90^\circ - \theta)$. Looking at $\sin \theta$, it is $\frac{\text{opposite}}{\text{hypotenuse}}$ relative to $\theta$. But that same side is the adjacent side relative to $(90^\circ - \theta)$. Therefore: $$\sin \theta = \cos(90^\circ - \theta)$$ On the unit circle, the angle $\frac{\pi}{2} - \theta$ represents a reflection across the line $y = x$ . This swaps the $x$- and $y$-coordinates: $\cos\left(\frac{\pi}{2} - \theta\right) = \sin \theta$ (the new $x$-coordinate is the old $y$-coordinate) $\sin\left(\frac{\pi}{2} - \theta\right) = \cos \theta$ (the new $y$-coordinate is the old $x$-coordinate)

### Source trigonometric-identities-and-equations/lesson03.sa.html, card 06, worked example

Write $\sin 37^\circ$ as the cosine of a complementary angle. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 1 mark · HSC band 3+ Step 1: Recall the identity. $$\sin \theta = \cos(90^\circ - \theta)$$ Step 2: Substitute $\theta = 37^\circ$. $$\sin 37^\circ = \cos(90^\circ - 37^\circ) = \cos 53^\circ$$

### Source trigonometric-identities-and-equations/lesson03.sa.html, card 07, worked example

Simplify $\frac{\sin 25^\circ}{\cos 65^\circ}$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Step 1: Notice the complement. $$25^\circ + 65^\circ = 90^\circ$$ Step 2: Apply the co-function identity. $$\cos 65^\circ = \cos(90^\circ - 25^\circ) = \sin 25^\circ$$ Step 3: Simplify the fraction. $$\frac{\sin 25^\circ}{\sin 25^\circ} = 1$$

### Source trigonometric-identities-and-equations/lesson03.sa.html, step `drill-build-fluency`

1 $\sin 28^\circ$ Show answer $\cos 62^\circ$ $\sin 28^\circ = \cos(90^\circ - 28^\circ) = \cos 62^\circ$. 2 $\cos \frac{\pi}{5}$ Show answer $\sin \frac{3\pi}{10}$ $\cos \frac{\pi}{5} = \sin\left(\frac{\pi}{2} - \frac{\pi}{5}\right) = \sin \frac{3\pi}{10}$. 3 $\tan 15^\circ$ Show answer $\cot 75^\circ$ $\tan 15^\circ = \cot(90^\circ - 15^\circ) = \cot 75^\circ$. 4 $\sec \frac{\pi}{8}$ Show answer $\csc \frac{3\pi}{8}$ $\sec \frac{\pi}{8} = \csc\left(\frac{\pi}{2} - \frac{\pi}{8}\right) = \csc \frac{3\pi}{8}$. 5 Simplify $\frac{\cos 35^\circ}{\sin 55^\circ}$. Show answer 1 $\sin 55^\circ = \cos 35^\circ$, so the fraction equals 1.

### Source trigonometric-identities-and-equations/lesson03.sa.html, short answers 1 and 3

(a) $\sin 68^\circ = \cos(90^\circ - 68^\circ) = \mathbf{\cos 22^\circ}$. (b) $\sin^2 68^\circ + \sin^2 22^\circ = \cos^2 22^\circ + \sin^2 22^\circ = \mathbf{1}$. Apply Band 4–5 Solve a co-function equation Solve $\tan 3\theta = \cot \theta$ for $0^\circ \leq \theta \leq 45^\circ$. Show all working. auto-saved View comprehensive answer Working: Use $\cot \theta = \tan(90^\circ - \theta)$: $$\tan 3\theta = \tan(90^\circ - \theta)$$ Equate angles: $$3\theta = 90^\circ - \theta \;\Rightarrow\; 4\theta = 90^\circ \;\Rightarrow\; \theta = 22.5^\circ$$ Answer: $\theta = \mathbf{22.5^\circ}$ Check: $22.5^\circ$ is within $[0^\circ, 45^\circ]$ ✓ Analyse Band 6 Prove a co-function identity A student claims that $\sec(90^\circ - \theta) = \csc \theta$ for all values of $\theta$ where both sides are defined. Prove this identity and explain why the restriction "where both sides are defined" is necessary. auto-saved View comprehensive answer Proof: $$\text{LHS} = \sec(90^\circ - \theta) = \frac{1}{\cos(90^\circ - \theta)} = \frac{1}{\sin \theta} = \csc \theta = \text{RHS}$$ Restriction: $\sec(90^\circ - \theta)$ is undefined when $\cos(90^\circ - \theta) = 0$, i.e. $\theta = 0^\circ, 180^\circ, \dots$ And $\csc \theta$ is undefined when $\sin \theta = 0$ (same values). Both sides must be defined for the identity to hold.

Other parts of this lesson (card 08 (sin 2θ = cos θ) and short answer 2 (tan 3θ = cot θ) are equations for t15) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 06: sin 37° = cos 53°. Card 07: sin 25°/cos 65° = 1; cos 35°/sin 55° = 1. we-1: sin 20° sec 70° + tan 35° tan 55° = 1 + 1 = 2.
- Drills: sin 28° = cos 62°; cos(π/5) = sin(3π/10), that is cos 36° = sin 54°; tan 15° = cot 75°; sec(π/8) = cosec(3π/8), that is sec 22.5° = cosec 67.5°; cos 35°/sin 55° = 1.
- Short answers: sin² 68° + sin² 22° = cos² 22° + sin² 22° = 1; sec(90° − θ) = cosec θ, excluded at θ = 0°, 180°, ...
- Any magnitude: cos(90° − 150°) = cos(−60°) = 1/2 = sin 150°. Exclusions: tan(90° − θ) = cot θ and sec(90° − θ) = cosec θ fail at θ = 180°k; cot(90° − θ) = tan θ and cosec(90° − θ) = sec θ fail at θ = 90° + 180°k; the sine and cosine pair hold for every θ.
- Equations left for t15 (checked): sin 2θ = cos θ on 0° to 90° gives 30° and 90°; tan 3θ = cot θ on 0° to 45° gives 22.5°.

Every value above was recalculated with SymPy and a numerical root scan (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing sin θ = sin(90° − θ).
- Using 180° − θ (supplementary) instead of 90° − θ.
- Proving only for acute angles and claiming it for all θ without the circle argument.
- Dropping the excluded angles.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- One right-angled triangle with θ and 90° − θ: the side labels "opposite" and "adjacent" swap as the focus moves from one acute angle to the other (`StudioTriangle`).
- The circle point at θ reflected in y = x to the point at 90° − θ, its coordinates swapping (`StudioSwapReflection`, which needs equal axis units, as a circle does).
- A co-function pairs card: sin and cos, tan and cot, sec and cosec, with "co = complement" (`MemoryAidCard`).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

Without a calculator, find the value of tan 10° tan 20° tan 70° tan 80°.

**Worked answer:** tan 80° = cot 10° and tan 70° = cot 20°, and tan A cot A = 1. So the product is (tan 10° cot 10°)(tan 20° cot 20°) = 1.

### Question 2

Given cos 25° = k, write sin 65°, cosec 65° and sin 115° in terms of k.

**Worked answer:** sin 65° = cos(90° − 65°) = cos 25° = k; cosec 65° = 1/k; sin 115° = cos(90° − 115°) = cos(−25°) = cos 25° = k.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A phone screen's diagonal: the angle it makes with the bottom edge and the angle it makes with the side edge add to 90° (phones).
- A book on a reading stand: tilted θ from the desk and 90° − θ from the vertical (home).
- A road sign post with a diagonal brace to the ground: the brace makes complementary angles with the post and the ground (travel).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- Minor: lesson03 trap 1 says "Writing $\sin \theta = \sin(90^\circ - \theta)$ ... is only true when $\theta = 45^\circ$". For angles of any size it also holds at 225°, −135° and so on (every 180°). Say "for acute angles, only when θ = 45°".

Decisions for Claude:

- `cic43f35f1` asks for the excluded angles of each identity; the site gives them for one (short answer 3). State all six.
- Short answer 1 uses sin² θ + cos² θ = 1, proved in t14. Either read it from t03's circle (x² + y² = r²) or keep that item for t14.
- "Angles of any magnitude" (`ci3f6f944a`): include at least one obtuse or negative angle (sin 115° = cos(−25°)).
- Join: the next pack (math-a11-t14) opens on this video's final frame. Its start reads: Open on t13's handoff: t03's circle point with sides x, y and r, the equation x² + y² = r², and the site's hook question "divide every term by ...?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
