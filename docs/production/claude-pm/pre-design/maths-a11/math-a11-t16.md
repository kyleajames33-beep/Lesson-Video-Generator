# math-a11-t16: How do trig equations that reduce to quadratics get solved?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci24474f01` (None): Solve problems involving trigonometric equations, including those that reduce to quadratic equations, on a restricted domain [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t15: Solving sin θ = k, cos θ = k and tan θ = k on a restricted domain. math-a11-t14: sin² θ + cos² θ = 1 and its rearrangements. math-a11-w04: Solving quadratics by factorising and by the formula. math-a11-t10: The ranges of sin and cos are −1 ≤ y ≤ 1; tan takes every real value.

**Prior video:** math-a11-t15.

**Start:** Open on t15's handoff (the site's hook): 2 sin² θ − sin θ − 1 = 0, with each sin θ glowing and the chip "call it s?".

**Stop:** Solve trigonometric equations that reduce to quadratics on a restricted domain: substitute one ratio (s = sin θ), solve the quadratic, reject a root outside −1 ≤ s ≤ 1 for sin or cos with a stated reason (tan takes every value), and solve each surviving root as in t15; reduce a mixed equation to one ratio with sin² θ = 1 − cos² θ (or the reverse), converting towards the ratio that appears unsquared; factorise rather than divide (sin² θ = sin θ). Degrees and radians. This ends the trigonometry strand; graph transformations (g01) come next.

**Next:** math-a11-g01.

## 2. Site order, sections and worked examples

Read-only source: [trigonometric-identities-and-equations/lesson12.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson12.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `857a466e01268164cf7e8c24ad191d561b4aaa682cb4e8fbd04337542c22fc65`. Title: Equations That Reduce to Quadratics. Lesson id maths-adv-y11-m2-l21.

Data-step ids: `recall-your-gut-answer-first`, `substitute-solve-then-unwind`, `what-you-ll-master`, `seeing-the-quadratic`, `model`, `quick-fire-practice`, `revisit-the-substitution-you-made`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson12.sa.html, `we-1`

PROBLEM 1 · A QUADRATIC IN SINE Solve $2\sin^2\theta - \sin\theta - 1 = 0$ for $0^\circ \leq \theta \leq 360^\circ$. 1 Let $s = \sin\theta$: $2s^2 - s - 1 = 0$, so $(2s + 1)(s - 1) = 0$ Substitute and factorise. 2 $s = -\dfrac{1}{2}$ or $s = 1$; both lie in $[-1, 1]$ Neither root is rejected. 3 $\sin\theta = -\dfrac{1}{2}$ gives $\theta = 210^\circ, 330^\circ$; $\sin\theta = 1$ gives $\theta = 90^\circ$ Three solutions altogether.

### Source trigonometric-identities-and-equations/lesson12.sa.html, `we-2`

PROBLEM 2 · A ROOT THAT MUST BE REJECTED Solve $\cos^2\theta - \cos\theta - 2 = 0$ for $0^\circ \leq \theta \leq 360^\circ$. 1 Let $c = \cos\theta$: $c^2 - c - 2 = 0$, so $(c - 2)(c + 1) = 0$ Substitute and factorise. 2 $c = 2$ is rejected, since $\cos\theta$ cannot exceed $1$ State the reason for rejecting. 3 $\cos\theta = -1$ gives $\theta = 180^\circ$ One solution in the domain.

### Source trigonometric-identities-and-equations/lesson12.sa.html, `we-3`

PROBLEM 3 · MIXED RATIOS Solve $2\sin^2\theta + 3\cos\theta = 3$ for $0^\circ \leq \theta \leq 360^\circ$. 1 Use $\sin^2\theta = 1 - \cos^2\theta$: $2 - 2\cos^2\theta + 3\cos\theta = 3$ Convert to the ratio that appears unsquared. 2 $2\cos^2\theta - 3\cos\theta + 1 = 0$, so $(2c - 1)(c - 1) = 0$ Tidy, then factorise. 3 $\cos\theta = \dfrac{1}{2}$ gives $\theta = 60^\circ, 300^\circ$; $\cos\theta = 1$ gives $\theta = 0^\circ, 360^\circ$ Four solutions in the closed domain.

### Source trigonometric-identities-and-equations/lesson12.sa.html, card 02 "Substitute, solve, then unwind"

Let $s = \sin\theta$. Solve the resulting quadratic for $s$, discard any root outside $[-1, 1]$, then solve $\sin\theta = s$ on the domain for each root that survives. $a\sin^2\theta + b\sin\theta + c = 0 \;\Rightarrow\; as^2 + bs + c = 0$, then solve $\sin\theta = s$ Reject roots outside $[-1, 1]$ Sine and cosine can never exceed $1$ or fall below $-1$. A root such as $s = 2$ is discarded with a reason, not carried forward. Tangent has no such restriction. Use the identity to get one ratio If an equation mixes $\sin^2\theta$ and $\cos\theta$, replace $\sin^2\theta$ with $1 - \cos^2\theta$ so everything is in cosine. A quadratic in two different ratios cannot be solved by substitution. Each surviving root is a full equation Two roots means two trigonometric equations, each with its own quadrant work and its own set of solutions. Stopping at the roots earns none of those marks.

### Source trigonometric-identities-and-equations/lesson12.sa.html, comprehensive answers

Practice 1: $s^2 - s = 0$, so $s(s - 1) = 0$. Practice 2: cosine never exceeds $1$, so $\cos\theta = 3$ has no solutions. Practice 3: $\cos^2\theta = 1 - \sin^2\theta$. Practice 4: $\cos^2\theta = \dfrac{1}{2}$, so $\cos\theta = \pm\dfrac{\sqrt{2}}{2}$, giving $\theta = 45^\circ, 135^\circ$. Q1 (4 marks): Let $c = \cos\theta$: $2c^2 + c - 1 = 0$ [1]. $(2c - 1)(c + 1) = 0$, so $c = \dfrac{1}{2}$ or $c = -1$ [1]. $\cos\theta = \dfrac{1}{2}$ gives $\theta = 60^\circ, 300^\circ$ [1]. $\cos\theta = -1$ gives $\theta = 180^\circ$ [1]. Q2 (4 marks): $\sin^2\theta = 1 - \cos^2\theta$, so $2 - 2\cos^2\theta = 3\cos\theta$ [1]. Rearranged, $2\cos^2\theta + 3\cos\theta - 2 = 0$, so $(2c - 1)(c + 2) = 0$ [1]. $c = -2$ is rejected, since cosine cannot be less than $-1$ [1]. $\cos\theta = \dfrac{1}{2}$ gives $\theta = 60^\circ, 300^\circ$ [1]. Q3 (2 marks): Sine is bounded: for any angle, $\sin\theta$ lies between $-1$ and $1$, so $\sin\theta = 1.4$ has no solutions and the root is rejected [1]. Tangent is unbounded and takes every real value, so $\tan\theta = 1.4$ does have solutions and the root is kept [1].

Read-only source: [trigonometric-identities-and-equations/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e36de2cf0f4ccc044f4dfd456cd23611c529dddf7656b51c50579ee7ab742c63`. Title: Review and Connections. Lesson id maths-adv-y11-m2-l15.

Data-step ids: `orient`, `two-moves-the-big-picture`, `what-you-ll-master`, `module-2-at-a-glance`, `common-traps`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson10.sa.html, short answer "An equation that reduces to a quadratic"

Solve $2\cos^2 x + \sin x = 1$ for $0 \leq x \leq 2\pi$, giving exact values. [5 marks] auto-saved View comprehensive answer Use $\cos^2 x = 1 - \sin^2 x$: $2(1 - \sin^2 x) + \sin x = 1$ [1]. $2 - 2\sin^2 x + \sin x = 1 \Rightarrow 2\sin^2 x - \sin x - 1 = 0$ [1]. Factorise: $(2\sin x + 1)(\sin x - 1) = 0$ [1]. $\sin x = 1 \Rightarrow x = \dfrac{\pi}{2}$ [1]. $\sin x = -\dfrac{1}{2} \Rightarrow x = \dfrac{7\pi}{6}$ or $x = \dfrac{11\pi}{6}$ [1].

Other parts of this lesson (the rest of the review lesson is used by t07, t09, t14 and t15) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson12 we-1: (2s + 1)(s − 1) = 0; sin θ = −1/2 gives 210°, 330°; sin θ = 1 gives 90°. we-2: (c − 2)(c + 1) = 0; c = 2 rejected; θ = 180°. we-3: 2 cos² θ − 3 cos θ + 1 = 0, (2c − 1)(c − 1) = 0: θ = 60°, 300° and 0°, 360°.
- Quick-fire: s² − s = s(s − 1); 2 cos² θ − 1 = 0 on 0° to 180° gives 45°, 135°. Q1: (2c − 1)(c + 1) = 0: 60°, 300°, 180°. Q2: 2 cos² θ + 3 cos θ − 2 = 0, (2c − 1)(c + 2) = 0, c = −2 rejected: 60°, 300°.
- TI10 short answer: 2 cos² x + sin x = 1 becomes 2 sin² x − sin x − 1 = 0: x = π/2, 7π/6, 11π/6.
- Original tangent example: tan² θ = 3 gives tan θ = ±√3: 60°, 120°, 240°, 300° (no root is rejected for tan).

Every solution set above was recalculated with SymPy and checked by a numerical root scan of the whole domain (`work/brief243-t/recalc.py`, sympy 1.14.0); SymPy's solveset missed some degree-scaled roots, so the scan is the check of record. All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Stopping at the values of s instead of solving for θ.
- Keeping sin θ = 2 or cos θ = −2, or dropping it without a reason.
- Dividing sin² θ = sin θ by sin θ and losing sin θ = 0.
- Substituting before reducing a mixed equation to one ratio.
- Missing 0° and 360° when the domain is closed (we-3).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Each sin θ in the equation replaced by an amber s chip (`ExpressionSlot`), the quadratic factorised on the `WorkingBoard`, then the chips turned back into sin θ.
- The roots placed on a number line with the band −1 ≤ s ≤ 1 shaded (`IntervalPicture`): s = 2 lands outside and is crossed with its reason.
- Each surviving root becomes a level line on the sine or cosine graph with a crossing counter (`StudioLevelLine`), so the final list of angles is read from the picture too.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

Solve 2 cos² θ − sin θ − 1 = 0 for 0° ≤ θ ≤ 360°.

**Worked answer:** Use cos² θ = 1 − sin² θ: 2 − 2 sin² θ − sin θ − 1 = 0, so 2 sin² θ + sin θ − 1 = 0, (2 sin θ − 1)(sin θ + 1) = 0. sin θ = 1/2 gives 30°, 150°; sin θ = −1 gives 270°.

### Question 2

Solve tan² x − (1 + √3) tan x + √3 = 0 for 0 ≤ x ≤ 2π.

**Worked answer:** (tan x − 1)(tan x − √3) = 0. tan x = 1 gives π/4, 5π/4; tan x = √3 gives π/3, 4π/3. No root is rejected, because tan takes every real value.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- An expired voucher code at an online checkout: it is rejected with a stated reason, like a root of 2 for sin θ (money).
- A phone contact saved under a nickname: calling sin θ "s" for a while changes nothing about who it is (phones).
- A treasure-hunt clue that gives a number, then a map that turns each number into places: the quadratic gives values, the circle gives angles (games).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- Minor: lesson12 card 02 "Stopping at the roots earns none of those marks" and card 06 "is usually worth a mark" are unsupported marking claims. Minor: lesson12 and lesson11 headers read "Module 5 · L13 of 15" inside the Module 2 sequence (metadata).

Decisions for Claude:

- This completes `ci24474f01` and the "trig equations" entry knowledge that the Year 12 trigonometric and calculus videos assume (with t15).
- Include one radian example (TI10's 2 cos² x + sin x = 1) and one tangent example with no rejection.
- Next in the outline is math-a11-g01 (graph transformations, order 74).
- Join: math-a11-g01 has no pack yet; leave the final frame free for its designer.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
