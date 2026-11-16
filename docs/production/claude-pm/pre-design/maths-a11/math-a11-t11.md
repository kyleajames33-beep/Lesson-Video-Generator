# math-a11-t11: What are sec, cosec and cot in a right-angled triangle?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci47b993f2` (None): Define the trigonometric functions sec θ, cosec θ and cot θ for acute angles θ using ratios of sides in a right-angled triangle [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: partial. Gap: Reciprocal functions are defined as 1/sin, 1/cos, 1/tan. They are not defined first as side ratios (hypotenuse/adjacent and so on) for acute angles.
- `ci0e59b7f1` (None): Find the exact secant, cosecant and cotangent ratios for angles of 30°, 45° and 60° [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.
- `cid1300c17` (None): Justify the values of sec θ, cosec θ and cot θ at 0° and 90° by examining the ratios of sides in a right-angled triangle as θ tends to 0° and 90° [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: missing. Gap: No lesson justifies sec, cosec and cot at 0 and 90 degrees by letting a right-angled triangle tend to those angles.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t01: Exact sin, cos and tan of 30°, 45° and 60° from the special triangles. math-a11-t02: SOH CAH TOA with opposite, adjacent and hypotenuse. math-a11-w21: Dividing by a number close to 0 gives a very large result.

**Prior video:** math-a11-t10.

**Start:** Open on t10's handoff: tan x racing towards its asymptote at 90° because its denominator (adjacent, or x) shrinks to 0, beside a right-angled triangle with the three side-ratio cards opp/hyp, adj/hyp, opp/adj, and the chip "flip them?".

**Stop:** Define sec θ = hypotenuse/adjacent, cosec θ = hypotenuse/opposite and cot θ = adjacent/opposite for acute θ (each the reciprocal of cos, sin and tan); find exact sec, cosec and cot of 30°, 45° and 60°; justify sec 0° = 1, cosec 90° = 1 and cot 90° = 0, and that sec 90°, cosec 0° and cot 0° do not exist, by letting a right-angled triangle with a fixed hypotenuse flatten (θ → 0°) or stand up (θ → 90°). Definitions on a circle and angles of any size are t12.

**Next:** math-a11-t12.

## 2. Site order, sections and worked examples

Read-only source: [trigonometric-identities-and-equations/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `d55cf57e77a8c4b1f6afd312c0cf7f57cb5b600348350faf495d1d0fc8b138bc`. Title: Reciprocal Trigonometric Functions. Lesson id maths-adv-y11-m2-l06.

Data-step ids: `orient`, `the-three-reciprocal-functions`, `what-you-ll-master`, `domains-and-signs-of-reciprocal`, `common-traps`, `drill-build-fluency`, `revisit-the-unit-circle`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson01.sa.html, card 02 "The three reciprocal functions"

The reciprocal functions are defined by flipping the original function. Cosecant is the reciprocal of sine, secant is the reciprocal of cosine, and cotangent is the reciprocal of tangent. They are undefined wherever their denominator equals zero. csc · sec · cot Cosecant $\csc \theta = \frac{1}{\sin \theta}$. Undefined when $\sin \theta = 0$, i.e. $\theta = n\pi$. Secant $\sec \theta = \frac{1}{\cos \theta}$. Undefined when $\cos \theta = 0$, i.e. $\theta = \frac{\pi}{2} + n\pi$. Cotangent $\cot \theta = \frac{1}{\tan \theta} = \frac{\cos \theta}{\sin \theta}$. Undefined when $\sin \theta = 0$.

### Source trigonometric-identities-and-equations/lesson01.sa.html, card 06, worked example

Find the exact value of $\sec \frac{\pi}{3}$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 1 mark · HSC band 3+ Step 1: Write in terms of the original function. $$\sec \frac{\pi}{3} = \frac{1}{\cos \frac{\pi}{3}}$$ Step 2: Substitute the exact value. $\cos \frac{\pi}{3} = \frac{1}{2}$. $$\sec \frac{\pi}{3} = \frac{1}{\frac{1}{2}} = 2$$

### Source trigonometric-identities-and-equations/lesson01.sa.html, step `drill-build-fluency`, items 1 to 3

1 Find the exact value of $\csc \frac{\pi}{6}$. Show answer 2 $\csc \frac{\pi}{6} = \frac{1}{\sin \frac{\pi}{6}} = \frac{1}{\frac{1}{2}} = 2$. 2 Find the exact value of $\sec \frac{\pi}{4}$. Show answer $\sqrt{2}$ $\sec \frac{\pi}{4} = \frac{1}{\cos \frac{\pi}{4}} = \frac{1}{\frac{\sqrt{2}}{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$. 3 Find the exact value of $\cot \frac{\pi}{3}$. Show answer $\frac{\sqrt{3}}{3}$ $\cot \frac{\pi}{3} = \frac{1}{\tan \frac{\pi}{3}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$.

Other parts of this lesson (signs, undefined angles, we-1 and drills 4 and 5 are t12; the site works in radians, used here in degrees (π/6 = 30°, π/4 = 45°, π/3 = 60°)) are deferred source context, not part of this video.

Read-only source: [trigonometric-identities-and-equations/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `a3e9e72e1c8fdcb9671f008d4324f5840209060244db52e042df2e5306221cf7`. Title: Pythagorean Identities. Lesson id maths-adv-y11-m2-l07.

Data-step ids: `orient`, `the-three-pythagorean-identities`, `what-you-ll-master`, `deriving-and-using-the-identities`, `common-traps`, `drill-build-fluency`, `revisit-one-identity-two-divisions`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson02.sa.html, card 07, worked example

If $\sec \theta = \frac{5}{4}$ and $\theta$ is acute, find $\tan \theta$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Step 1: Choose the appropriate identity. $$1 + \tan^2 \theta = \sec^2 \theta$$ Step 2: Substitute $\sec \theta = \frac{5}{4}$. $$1 + \tan^2 \theta = \left(\frac{5}{4}\right)^2 = \frac{25}{16}$$ Step 3: Solve for $\tan^2 \theta$. $$\tan^2 \theta = \frac{25}{16} - 1 = \frac{9}{16}$$ Step 4: Take the square root. Since $\theta$ is acute, $\tan \theta > 0$. $$\tan \theta = \frac{3}{4}$$

Other parts of this lesson (the identities are t14; the numbers of card 07 are read here off a 3, 4, 5 triangle instead of 1 + tan² θ = sec² θ) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Exact values: sec 30° = 2√3/3, cosec 30° = 2, cot 30° = √3; sec 45° = cosec 45° = √2, cot 45° = 1; sec 60° = 2, cosec 60° = 2√3/3, cot 60° = √3/3. TI01 card 06: sec(π/3) = 2; drills: cosec(π/6) = 2, sec(π/4) = √2, cot(π/3) = √3/3.
- TI02 card 07: sec θ = 5/4 means hypotenuse 5, adjacent 4, so opposite 3 and tan θ = 3/4.
- Limiting triangles (hypotenuse 1): at 1°, sec = 1.00015, cosec = 57.30, cot = 57.29; at 0.1°, sec = 1.000002, cosec = 572.96, cot = 572.96; at 89°, sec = 57.30, cosec = 1.00015, cot = 0.01746; at 89.9°, sec = 572.96, cot = 0.00175.

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Pairing sec with sin (sec is 1/cos, cosec is 1/sin).
- Writing cosec 30° = 1/2 (that is sin 30°).
- Calling sec 90° "infinity" or 0 instead of undefined.
- Thinking cot 90° is undefined because tan 90° is (cot 90° = 0/1 = 0).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Ratio cards that flip over: opp/hyp turns into hyp/opp (cosec), adj/hyp into hyp/adj (sec), opp/adj into adj/opp (cot), each pair in one role colour (coded cards with `MemoryAidCard` for the pairs).
- A right-angled triangle with hypotenuse fixed at 1, the angle sliding towards 0° and towards 90°, with live readouts of sec, cosec and cot (`StudioTriangle` with `ParameterSlider` and `LiveReadoutBoard`); the side that becomes 0 turns grey and its readout grows without bound.
- t01's exact-value table extended by three rows, each new cell written as 1 over an old cell, then rationalised (`AlignedAlgebra`; surds need the surd formatter noted in kit needs).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

In a right-angled triangle, the side adjacent to the angle θ is 7 cm and the hypotenuse is 25 cm. Find the exact values of sec θ, cosec θ and cot θ.

**Worked answer:** Opposite = √(625 − 49) = 24 cm. sec θ = 25/7, cosec θ = 25/24, cot θ = 7/24.

### Question 2

Without a calculator, find the exact value of sec² 45° + cot 30° cosec 60°.

**Worked answer:** sec 45° = √2, so sec² 45° = 2. cot 30° cosec 60° = √3 × 2/√3 = 2. Total 4.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A diagonal brace on a timber gate: the brace length is the gate's width times sec of the brace's angle (building and DIY).
- A flying-fox (zip-line) cable from a platform: cable length is the drop times cosec of the cable's angle with the ground (games and leisure).
- A stair stringer: the horizontal run times sec of the pitch gives the length of timber to cut (building and DIY).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- `trigonometric-identities-and-equations/lesson01.sa.html`, card 05 box "Why astronomers use parallax and secants". Old text: "The small angle of shift is related to the star's distance through a reciprocal relationship, essentially a secant function. Without understanding reciprocal trig functions, the mathematics of stellar distances would be impossible." Parallax distance is (baseline) ÷ tan p, a cotangent (about 1/p for small p), not a secant, and "impossible" overstates it. Correction: "The small angle of shift p gives the star's distance as the baseline times $\cot p$, a reciprocal ratio. For tiny angles this is about the baseline divided by $p$ in radians."

Decisions for Claude:

- `ci47b993f2` is partial: the site defines sec, cosec and cot as 1/cos, 1/sin and 1/tan, never as side ratios. Start from the triangle's sides, then show they are the reciprocals.
- `cid1300c17` is missing: no site lesson justifies the values at 0° and 90° with limiting triangles. The fixed-hypotenuse triangle and its readouts are original teaching.
- Notation: the site writes csc; the syllabus and this course write cosec (site-corrections section 2). Say "cosec" aloud.
- Join: the next pack (math-a11-t12) opens on this video's final frame. Its start reads: Open on t11's handoff: "sec 120° = ?" beside a 120° ray with no right-angled triangle to flip, and t03's point (−3, 4) on a circle of radius 5.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
