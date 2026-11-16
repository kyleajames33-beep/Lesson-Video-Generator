# Site corrections: Year 11 Mathematics Advanced

Brief 243, 16 November 2026. Source: `kyleajames33-beep/Teaching-APP` main at `5d74a627` (16 November 2026, 11:01 +1100), folder `subjects/maths-advanced/year11/`, read through a sparse clone. No site file was changed. Section 1 lists confirmed errors in lesson copy. Sections 2 to 4 list syllabus-alignment and structure findings for the owner. Every first-strand worked example (w01 to w14) was recalculated with SymPy and all site answers are correct.

## 1. Confirmed copy errors

### S11-01. The discriminant lesson says coefficients are always rational

- Lesson: `algebraic-techniques-and-inequalities/lesson10.sa.html`, step `what-the-discriminant-tells-you` (card "Rational or irrational roots").
- Old text: "Assumes rational coefficients. The perfect-square test tells you about rational roots only when $a$, $b$ and $c$ are themselves rational, which they always are in this course."
- Correction: "Assumes rational coefficients. The perfect-square test tells you about rational roots only when $a$, $b$ and $c$ are themselves rational. Most questions use whole-number coefficients, so check this before you use the test."
- Reason: the 2024 syllabus (`cia7d436df`) states "where a, b and c are real numbers". The claim "which they always are in this course" is false, and with irrational coefficients a perfect-square discriminant does not guarantee rational roots (for example x^2 - 2 sqrt2 x + 1 = 0 has discriminant 4 and roots sqrt2 +/- 1).

### S11-02. The discriminant equal to zero is called "one answer" without "equal roots"

- Lesson: `algebraic-techniques-and-inequalities/lesson10.sa.html`, step `what-the-discriminant-tells-you`.
- Old text: "If $\Delta = 0$ the square root is 0, so $\pm 0$ adds nothing and there is one answer."
- Correction: "If $\Delta = 0$ the square root is 0, so $\pm 0$ adds nothing: the two roots are equal, so there is one distinct real root."
- Reason: the syllabus point `ci887fe9c5` asks for the condition for roots to be equal. Saying only "one answer" loses the repeated-root idea that the tangent test in `working-with-functions/lesson16.sa.html` (we-3) relies on.

### S11-03. A check line in the taxi-budget example is rounded as if exact

- Lesson: `algebraic-techniques-and-inequalities/lesson03.sa.html`, worked example `we-1`, step 3.
- Old text: "Check: $3.50 + 2.10(7.85) = 3.50 + 16.485 = \$19.99 \leq \$20$ ✓"
- Correction: "Check: $3.50 + 2.10(7.85) = 3.50 + 16.485 = 19.985 \leq 20$ ✓"
- Reason: 3.50 + 16.485 = 19.985 exactly. Writing it as $19.99 with an equals sign presents a rounded value as the exact sum.

### S11-04. A $8 margin is called "profit per item"

- Lesson: `working-with-functions/lesson19.sa.html`, worked example `we-2`.
- Old text: "A workshop has fixed costs of $\$340$ and makes $\$8$ profit per item."
- Correction: "A workshop has fixed costs of $\$340$ and makes $\$8$ on each item after that item's own costs."
- Reason: the model P = 8n - 340 shows the business makes a loss until 43 items, so each item does not earn $8 profit. The $8 is a margin (contribution). The same lesson defines profit as revenue minus cost.

## 2. Notation that differs from the 2024 syllabus

- `working-with-functions/lesson09.sa.html`, `lesson10.sa.html` and `lesson03.sa.html` write gradient-intercept form as $y = mx + b$ (for example lesson09: "$y = mx + b$    gradient $m$, $y$-intercept $b$"). The syllabus (`ci7f902bc1`) writes $y = mx + c$. Use $y = mx + c$ in videos.
- `trigonometric-identities-and-equations/lesson01.sa.html` and later trig lessons write csc. The syllabus writes cosec throughout (`ci47b993f2`, `cicf5015c7`, `cic43f35f1`, `cif79ffa41`). Use cosec in videos.
- `graph-transformations/lesson03.sa.html` teaches dilations only as $y = af(x)$ and $y = f(bx)$. The syllabus (`cide27d1f1`) frames them as replacing $x$ by $x/k$ and $y$ by $y/l$, a dilation by factor $k$ or $l$. A video needs to link "factor k" with "coefficient 1/k inside".

## 3. Content gaps against the 2024 syllabus

Partial or missing points are listed with reasons in the crosswalk (`programme/syllabus/maths-advanced-2024-y11-crosswalk.json`, 25 partial and 6 missing). The ones the owner may want fixed on the site:

- Direct and inverse variation (`working-with-functions/lesson20.sa.html`, `lesson21.sa.html`) teach only $y = kx$ and $y = k/x$. The syllabus models are $y = kx^n$ and $y = k/x^n$ (`ci388144c4`, `cie81af7cc`, `ci52779ff4`).
- Missing entirely: $\sqrt{x^2} = |x|$ by substitution (`cidb25f0cc`); sec, cosec and cot at 0 and 90 degrees by limiting triangles (`cid1300c17`); sec = r/x, cosec = r/y, cot = x/y on a circle of radius r (`ci15aca25e`); the gradient function of $a^x$ is $ka^x$ (`ci7e417be9`); enlargement by replacing both x and y (`ci950cc744`); the algebraic proof that P(A|B) = P(A) implies P(B|A) = P(B) (`cifa01f762`).
- The trig lessons use the unit circle only; the syllabus defines the ratios on a circle of radius r (`ci95d785c0`).

## 4. Structure and metadata

- Thirteen lessons carry an inline "This lesson has been retired" notice but are still live in the Year 11 folders: exponential-and-logarithmic-functions lesson04 and lesson09; graph-transformations lesson06; introduction-to-differentiation lesson02, lesson09 and lesson11; probability-and-data lesson05, lesson06, lesson08, lesson09 and lesson10; trigonometric-identities-and-equations lesson07 and lesson09.
- Lessons that teach non-Year-11 content without a notice: introduction-to-differentiation lesson07 (second derivative, concavity; Year 12); probability-and-data lesson07 (box plots, stem-and-leaf, frequency density; not in 2024 Year 11 Advanced); exponential-and-logarithmic-functions lesson03 (continuous compounding A = Pe^(rt)); trigonometric-identities-and-equations lesson05 (y = a sin(bx) + d; Year 12) and lesson06 (cot graph); working-with-functions lesson08 practice ("Finding an inverse. Swap and solve"; Extension 1).
- Probability-and-data lesson01 to lesson10 carry `maths-adv-y12-m5-*` lesson ids; lesson05, 06, 08, 09 and 10 have "Year 12 Module 5" page titles.
- All lessons carry old module numbers (m1 to m6) and site outcome codes (MAV-11-xx), not NESA codes. Sixty files carry a lesson id whose number differs from the file name (for example `working-with-functions/lesson06.sa.html` is `maths-adv-y11-m1-l07`).
- The folder `algebraic-techniques-and-inequalities` is a content group of Working with functions, not a 2024 focus area.
- The master plan counts 92 Year 11 Advanced lessons; the repo has 103 lesson files, 90 once the 13 retired pages are set aside.

## 5. More copy errors found while preparing w15 to w31 (16 November 2026)

Full old text and corrections are in section 8 of the named packs (`pre-design/maths-a11/`).

- **S11-05** `working-with-functions/lesson16.sa.html`, card 05: "Find $a$ if $a(x+1)^2 = ax^2 + 4x + 1$ for all $x$" has no solution (the x terms give a = 2, the constants give a = 1). Use "$ax^2 + 4x + 2$" (a = 2).
- **S11-06** `working-with-functions/lesson23.sa.html`, step `the-plus-or-minus-splits` and card 06: "Each semicircle is a function" is false for the left and right semicircles. Replace with: "The upper and lower semicircles are functions. The left and right semicircles are not functions of x, because a vertical line can cut them twice."
- **S11-07** `working-with-functions/lesson06.sa.html`, card 06: doubling then adding a percentage tax equals adding the tax then doubling. Use "take $10 off and then add 10% GST, or add GST and then take $10 off: the first costs $1 more". Also change "order always matters" to "order usually matters".
- **S11-08** `working-with-functions/lesson04.sa.html`: card 05's (a + b)² misconception box is unrelated to piecewise functions; replace it with choosing the rule at a boundary value. The model answer to Q2(c) should say "the price is constant within each age band and jumps by $20 at exactly 16".
- **S11-09** `working-with-functions/lesson15.sa.html`: "$y = a(x-r)^3 + k$ ... a single point of inflection" is 2017 wording. Use "The other syllabus form is $y = kx^3$".
- **S11-10** `working-with-functions/lesson19.sa.html`, card 07: "The syllabus places this in MAV-11-01" should read "In Year 11 the optimum comes from the vertex".
- **Minor:** lesson16's tangent definition should say a non-vertical line, for parabolas. Lesson04's "surge pricing" is really tiered pricing.
- **Minor (w17 pack):** the tangent wording in working-with-functions should limit "meets the curve once" to non-vertical lines on a parabola (same as the lesson16 note above).

## 6. Copy errors found while preparing c01 to c18 and e01 to e08 (16 November 2026)

Twenty-one more site errors. Each has the exact old text and a correction in section 8 of its pack (`pre-design/maths-a11/math-a11-c*.md` and `-e*.md`).

- **Differentiation lesson10 contradicts itself:**
  - It defines decreasing with f′(x) < 0 for all x, yet says "decreasing on (−∞, 3)" across a stationary point.
  - It says x³ is "always increasing".
  - It makes an unsupported claim about losing marks for including an endpoint.
- **Differentiation lesson08:**
  - It defines a local maximum or minimum through the sign of f″ (Year 12, and not necessary).
  - "Move 2" teaches the second derivative test.
  - we-1 says "classify" but never does.
- **Differentiation lesson05:**
  - The odd-one-out question has more than one defensible answer (√(3x)).
  - It makes an unsupported claim that answers in terms of u are "not accepted".
- **Differentiation lesson03:**
  - "Touches a curve at exactly one point" is false (the tangent to y = x³ at x = 1 meets the curve again at x = −2).
  - "The two points become one" is also wrong.
- **Differentiation lesson16:** −5 m is called "the displacement" but is the change in displacement.
- **Differentiation lesson13:**
  - The claim about a spreadsheet returning 0 at h = 10⁻¹⁴ is wrong (it gives about 4.09).
  - Rounded values are written with equals signs.
- **Differentiation lesson04:** the power-rule proof uses the binomial theorem (Extension 1).
- **Differentiation lesson01:** a quick-check option prints its own working.
- **Exponentials lesson06:**
  - ln(2x) is a shift up by ln 2, not left.
  - The points (2, 1) and (1/2, −1) hold only for base 2.
- **Exponentials lesson01:** the paper-folding hook contradicts itself.
- **Exponentials lesson02:** the horizontal-asymptote definition is wrong ("never crosses").
- **Exponentials lesson03:** "Daily: $2.714" truncates 2.71457.
- **Exponentials lessons 05 and 08:** "revisit" items refer to questions the openings never asked.

## 7. Trigonometry packs (t01 to t16) (17 November 2026)

Same source commit (`5d74a627`, read from the read-only clone `C:/Users/kygs/teaching-app-fix`, not modified). Every trigonometry worked example and answer used by the t packs was recalculated with SymPy, with equation solution sets also checked by a numerical scan (`work/brief243-t/recalc.py`, output in `work/brief243-t/recalc-output.txt`). Apart from the items below, all site answers are correct. Each item is repeated in section 8 of the named pack (`pre-design/maths-a11/math-a11-t*.md`).

### S11-11. The radian definition sets "1 radian" equal to every arc over radius (t08)

- Lesson: `trigonometry-and-measure-of-angles/lesson01.sa.html`, card 05 "What is a radian?".
- Old text: "$$1 \text{ radian} = \dfrac{\text{arc length}}{\text{radius}} = \dfrac{l}{r}$$"
- Correction: "$$\theta \text{ (in radians)} = \dfrac{\text{arc length}}{\text{radius}} = \dfrac{l}{r}, \text{ so one radian is the angle where } l = r.$$"
- Reason: the syllabus (`ci6db63911`) defines the angle θ in radians as arc length over radius. As printed, every arc would measure one radian. The lesson's own summary line "$\theta = \frac{l}{r}$" is right.

### S11-12. The inverse cosine is said to need a quadrant check in a triangle (t02, t07)

- Lesson: `trigonometry-and-measure-of-angles/lesson04.sa.html`, card 09, trap 2 and its summary line.
- Old text: "If the triangle is in a different quadrant, you may need $180^\circ - \theta$ or $360^\circ - \theta$." and "$\cos^{-1}$ and $\sin^{-1}$ give principal values only, check the quadrant if the angle could be obtuse".
- Correction: "In a triangle, $\cos^{-1}$ gives the angle directly, acute or obtuse. $\sin^{-1}$ gives only the acute angle, so when the angle could be obtuse, also test $180^\circ - \theta$ (see the ambiguous case)."
- Reason: $\cos^{-1}$ returns 0° to 180°, which covers every triangle angle, and no triangle angle is reflex. Lessons 07 and 08 rightly teach that only the sine rule can be ambiguous, so this trap contradicts them.

### S11-13. The ladder revisit gives the wrong reason (t02)

- Lesson: `trigonometry-and-measure-of-angles/lesson04.sa.html`, step `revisit-the-ladder-problem`.
- Old text: "notice how the height is actually more than half the ladder length because $60^\circ$ is steeper than $45^\circ$."
- Correction: "the height is more than half the ladder length because $60^\circ$ is steeper than $30^\circ$, the angle at which the height is exactly half."
- Reason: sin 30° = 1/2, so the half-height angle is 30°. At 45° the height is already about 0.71 of the ladder.

### S11-14. An unsupported claim about marking rationalised denominators (t01)

- Lesson: `trigonometry-and-measure-of-angles/lesson05.sa.html`, card 09, trap 2.
- Old text: "HSC marking guidelines almost always require rationalised denominators."
- Correction: "Rationalised form, such as $\frac{\sqrt{3}}{3}$, is the usual way to write a final answer. $\frac{1}{\sqrt{3}}$ and $\frac{\sqrt{3}}{3}$ are equal, so rationalise when the question asks or when it makes the next step easier."
- Reason: no source supports the claim, and equivalent exact answers are generally accepted unless the question asks for a rationalised denominator. Section 6 logged similar marking claims in the differentiation lessons.

### S11-15. A cosine-rule example quotes the wrong form and rounds too early (t07)

- Lesson: `trigonometry-and-measure-of-angles/lesson07.sa.html`, worked example `we-3`, steps 1 and 3.
- Old text (step 1): "No side is paired with its opposite angle, so start with $c^2 = a^2 + b^2 - 2ab\cos C$". Old text (step 3): "$\sin B = \dfrac{9\sin 47^\circ}{8.8} \approx 0.748$, so $B \approx 48.4^\circ$".
- Correction (step 1): "start with $a^2 = b^2 + c^2 - 2bc\cos A$". Correction (step 3): "$\sin B = \dfrac{9\sin 47^\circ}{8.814...} \approx 0.747$, so $B \approx 48.3^\circ$ (keep $a$ unrounded)".
- Reason: the unknown is $a$ with the given angle $A$ (step 2 uses the right form). With $a = 8.814...$, $B = 48.31^\circ$, confirmed by the cosine rule; rounding $a$ to 8.8 first gives 48.4°, against the lesson's own advice to round only at the end.

### S11-16. Parallax is called a secant relationship (t11)

- Lesson: `trigonometric-identities-and-equations/lesson01.sa.html`, card 05 box "Why astronomers use parallax and secants".
- Old text: "The small angle of shift is related to the star's distance through a reciprocal relationship, essentially a secant function. Without understanding reciprocal trig functions, the mathematics of stellar distances would be impossible."
- Correction: "The small angle of shift $p$ gives the star's distance as the baseline times $\cot p$, a reciprocal ratio. For tiny angles this is about the baseline divided by $p$ in radians."
- Reason: distance = baseline ÷ tan p, a cotangent (about 1/p for small p), not a secant; "impossible" overstates it.

### S11-17. A piano note is called a perfect sine wave (t10)

- Lesson: `trigonometric-identities-and-equations/lesson05.sa.html`, hook.
- Old text: "A pure musical tone is a sine wave. When you play middle C on a piano, the air pressure oscillates 262 times per second in a perfect sinusoidal pattern."
- Correction: "A pure tone, like a tuning fork or a test tone, is a sine wave. Middle C repeats about 262 times per second (261.6 Hz); a piano adds overtones, so its wave is not a perfect sine curve."
- Reason: a piano note contains overtones at multiples of the main frequency, so its pressure wave is periodic but not sinusoidal. Middle C is 261.63 Hz in standard tuning.

### S11-18. Inverse functions are said to always return the related acute angle (t15)

- Lesson: `trigonometric-identities-and-equations/lesson11.sa.html`, step `what-you-ll-master`.
- Old text: "The inverse trigonometric functions return only one angle, the related acute angle."
- Correction: "An inverse trigonometric function returns only one angle. Applied to the positive value, it gives the related acute angle."
- Reason: $\cos^{-1}(-0.5) = 120^\circ$ and $\sin^{-1}(-0.5) = -30^\circ$. The lesson's method (take the inverse of the positive value) is right; this summary line is not.

### Minor (trigonometry)

- `trigonometry-and-measure-of-angles/lesson06.sa.html`, `we-2` step 2: "≈ 0.6929" should be "≈ 0.6930" (7 sin 63°/9 = 0.693005); B = 43°52' is unchanged.
- `trigonometry-and-measure-of-angles/lesson05.sa.html`: the hook ("What is $\sin 75^\circ$? ... a trig identity") and short answer 2 ("double-angle formula") use compound-angle results from Mathematics Extension 1. "Two triangles produce every exact trig value you will ever need for HSC" omits multiples of 90°.
- `trigonometry-and-measure-of-angles/lesson04.sa.html`: "There are only three trigonometric ratios" (sec, cosec and cot are side ratios too). Short answer 2's wheelchair ramp uses 1:12; the Australian standard (AS 1428.1) sets 1:14 for ramps, as the w10 pack does.
- `trigonometry-and-measure-of-angles/lesson09.sa.html`: Q2's answer measures 36.9° "from the first leg reversed"; it is the angle at the start between the first leg and the line to the finish (055° + 36.9° = 091.9°, reversed 271.9°). The hook's link between "fixes a direction exactly" and "three digits" does not follow.
- `trigonometry-and-measure-of-angles/lesson03.sa.html`: the GPS box says receivers solve triangles from orbital angles (GPS works mainly from signal travel times). "Every sine value between −1 and 1 has two solutions in one turn, never one" needs "strictly between".
- `trigonometry-and-measure-of-angles/lesson08.sa.html`: Q3's answer says sine takes "every value between 0 and 1 exactly twice" (1 is taken once); card 06's arc "may cross the base line twice" should be "may cross the ray from A twice".
- `trigonometry-and-measure-of-angles/lesson02.sa.html`: the satellite-dish box describes a manufacturing process that does not exist ("bent into a cone, then flattened into a parabola"). Trap 01 says a degree substitution is "wrong by a factor of $\frac{\pi}{180}$"; the wrong answer is $\frac{180}{\pi}$ (about 57.3) times too big.
- `trigonometric-identities-and-equations/lesson03.sa.html`, trap 1: "$\sin\theta = \sin(90^\circ - \theta)$ ... is only true when $\theta = 45^\circ$" holds for acute angles only (also 225°, −135°, ...).
- `trigonometric-identities-and-equations/lesson08.sa.html` and `lesson11.sa.html` teach general solutions with $n$ (not required in Year 11 Advanced, 2024). lesson08 `we-1` divides $\sin x = \cos x$ by $\cos x$ without checking $\cos x = 0$. lesson11 card 07 "The number of solutions multiplies by the same factor as the angle" fails at $k = \pm 1$ and at endpoints.
- Unsupported marking claims: trigonometry-and-measure-of-angles lesson01 trap 01 ("will cost you a mark") and lesson09 card 02 ("marks are lost without it"); trigonometric-identities-and-equations lesson11 card 02 ("Answers in the wrong unit earn nothing") and lesson12 cards 02 and 06 ("earns none of those marks", "usually worth a mark"). Half marks ([0.5], [1.5]) appear in trigonometry-and-measure-of-angles lesson02 and lesson03 and trigonometric-identities-and-equations lesson05; HSC marks are whole numbers.
- `trigonometry-and-measure-of-angles/lesson01.sa.html` hook and card 05 make unsupported claims about NASA and Mars rovers. `trigonometric-identities-and-equations/lesson10.sa.html` says the unit circle "gives the sine and cosine rules" (they come from dropping a perpendicular, as the same lesson's revisit says). The `lesson11.sa.html` and `lesson12.sa.html` headers read "Module 5 · L13 of 15".

### Gaps noted for the owner (not errors)

- Beyond the crosswalk's partial and missing points: the ambiguous-case condition (b sin A < a < b for acute A, `ci44ad375d`) is never stated; no major sector or major segment is worked (`cibf527c60`); the sin, cos and tan graphs are drawn in radians only although the syllabus says "degrees or radians" (`cid79268a8`); per-identity excluded angles (cot θ = 1/tan θ also fails where cos θ = 0) are not stated (`cicf5015c7`, `ci3c95dfdc`, `cic43f35f1`); both two-leg bearing journeys in lesson09 turn through exactly 90°, so no site journey needs the cosine rule.

## 8. Transformations and probability packs (g01 to g06, s01 to s11) (17 November 2026)

Same source commit (`5d74a627`, read from the read-only clone `C:/Users/kygs/teaching-app-fix`, not modified). Every worked example and model answer used by the g and s packs was recalculated with SymPy (`work/brief243-gs/verify_g.py` and `verify_s.py`, run with `python -I`). IDs in this section use the prefixes S11-G (graph transformations) and S11-P (probability and data) so they cannot clash with numbered IDs added to section 7 at the same time. Each item is also quoted in section 8 of the named pack (`pre-design/maths-a11/`).

### S11-G01. Vertical translations are said not to move x-intercepts (g01)

- Lesson: `graph-transformations/lesson01.sa.html`, step `establish-it-yourself-with-a`, card 06 "Effect on key features", lead-in.
- Old text: "This card answers it → each feature's coordinates shift by exactly $(h, k)$, but $x$-intercepts only shift if there's a horizontal translation."
- Correction: "This card answers it → the vertex, any asymptote and every other point move by exactly $(h, k)$. The $x$-intercepts are different: a vertical shift can move them, merge them or remove them, so find them again by solving $y = 0$."
- Reason: the card's own bullet says "$x$-intercept(s): Change with both horizontal and vertical shifts". $y = x^2 - 4$ has $x$-intercepts $-2$ and $2$; moved up 4 it has the single intercept 0, and moved up 5 it has none.

### S11-G02. One-way dilations are said to keep a graph's proportions (g03)

- Lesson: `graph-transformations/lesson03.sa.html`, step `establish-it-yourself-with-a`, card 05 "Vertical and horizontal dilations".
- Old text: "Unlike translations, which slide the graph without changing its shape, dilations actually change the distances between points, but they preserve the overall proportions of the graph."
- Correction: "Unlike translations, which slide the graph without changing its shape, dilations change the distances between points. A dilation in one direction changes the graph's proportions (a square would become a rectangle). Only a dilation by the same factor in both directions keeps the shape, as an enlargement or a reduction."
- Reason: a vertical dilation by factor 2 turns a unit square into a 1 by 2 rectangle (the diagonal's gradient goes from 1 to 2). Keeping the shape is the separate syllabus point `ci950cc744`, which no site lesson teaches.

### S11-G03. The reading order for combined transformations puts translation before dilation (g04)

- Lesson: `graph-transformations/lesson04.sa.html`, step `orient` (formula reference, "Key insight") and step `establish-it-yourself-with-a`, card 05 "Reading transformations from the equation".
- Old text: "Key insight: Always identify transformations from the "inside out": horizontal translation → horizontal dilation → vertical dilation → vertical translation." and "Start with the innermost change: $x - h$ tells you the horizontal translation. Next, $b(x - h)$ tells you the horizontal dilation (and any $y$-axis reflection)".
- Correction: "Key insight: for $y = af(b(x - h)) + k$, apply the horizontal dilation by factor $\frac{1}{|b|}$ (with a $y$-axis reflection if $b < 0$) and then the horizontal translation by $h$; apply the vertical dilation by factor $|a|$ (with an $x$-axis reflection if $a < 0$) and then the vertical translation by $k$." Rewrite card 05's list in the same order.
- Reason: translating by $h$ first and then dilating sends $x$ to $\frac{x + h}{b}$, not $\frac{x}{b} + h$, which contradicts the lesson's own point formula in card 06 and its worked example `we-ct-2`. For $y = x^2$: right 1 then a horizontal dilation by factor 2 gives $y = \left(\frac{x - 2}{2}\right)^2$ (vertex at 2), but $y = \left(\frac{1}{2}(x - 1)\right)^2$ has its vertex at 1. Year 12 t01 (designed) reads the same form by factoring the inside and dilating first.

### S11-G04. The order-matters graphing task uses two moves that commute (g04)

- Lesson: `graph-transformations/lesson04.sa.html`, step `establish-it-yourself-with-a`, card 04b.
- Old text: "Task. Graph $y = 2(x - 1)^2$, then graph the result of translating $y = x^2$ right by 1 and then dilating vertically by 2, and separately of dilating first and then translating. ... predict whether the two orders give the same graph."
- Correction: "Task. Translate $y = x^2$ up 1 and then dilate it vertically by factor 2. Separately, dilate first and then translate up 1. Predict whether the two orders give the same graph, then check. ($y = 2x^2 + 2$ against $y = 2x^2 + 1$.) Then try right 1 with a vertical dilation by 2 in both orders, and explain why those two do agree."
- Reason: a horizontal translation and a vertical dilation act on different axes, so both orders give $y = 2(x - 1)^2$. The task is meant to establish `ci063bd03f` (order matters) and cannot do so with this pair.

### S11-G05. A model answer keeps the x-intercepts fixed under a vertical translation (g05)

- Lesson: `graph-transformations/lesson05.sa.html`, step `practice-short-answer`, Q8 model answer.
- Old text: "$x$-intercepts: horizontal translation right 1 shifts intercepts: $-1 \to 0$ and $5 \to 6$. So $x$-intercepts at $x = 0$ and $x = 6$ [2]. Note: vertical transformations preserve $x$-coordinates where $f(x) = 0$."
- Correction: "Turning point $(3, -2)$ [1]. The $+4$ moves the graph up, so the points $(0, 0)$ and $(6, 0)$ of $y = 2f(x - 1)$ move to $(0, 4)$ and $(6, 4)$ and are no longer intercepts. The new $x$-intercepts are where $f(x - 1) = -2$, which needs the equation of $f$ [2]." Or change the question to $y = 2f(x - 1)$, whose $x$-intercepts are 0 and 6.
- Reason: a vertical dilation keeps zeros; a vertical translation does not. With $f(x) = \frac{1}{3}(x + 1)(x - 5)$ (turning point $(2, -3)$, zeros $-1$ and 5), $y = 2f(x - 1) + 4$ has turning point $(3, -2)$ but $x$-intercepts $3 \pm \sqrt{3}$.

### S11-G06. Reflections are said to be able to remove intercepts (g05, minor)

- Lesson: `graph-transformations/lesson05.sa.html`, step `the-key-feature-method`, card 06 "How transformations affect features", Intercepts list.
- Old text: "Reflections: can change the sign of intercepts or eliminate them entirely"
- Correction: "Reflections: a reflection in the $x$-axis keeps the $x$-intercepts and negates the $y$-intercept; a reflection in the $y$-axis keeps the $y$-intercept and negates the $x$-intercepts."
- Reason: a reflection is one-to-one and maps each axis to itself, so every intercept has an image intercept.

### S11-P01. An unconditional probability is said to be lower without data (s07)

- Lesson: `probability-and-data/lesson03.sa.html`, step `what-is-conditional-probability`, card 05 example.
- Old text: "Notice how the conditional probability ($\frac{2}{3}$) is very different from the unconditional probability of playing tennis (which would be lower)."
- Correction: "Compare it with the probability that any student plays tennis: that needs the tennis total, which the question does not give. Knowing the student plays basketball changes which students we count."
- Reason: the example gives only $P(\text{basketball}) = 0.30$ and $P(\text{both}) = 0.20$. $P(\text{tennis})$ is at least 0.20 and could be 0.8, which is higher than $\frac{2}{3}$.

### S11-P02. Zero probability for an exact value is explained by "infinitely many values" (s09)

- Lesson: `probability-and-data/lesson14.sa.html`, step `what-a-random-variable-is`, card 07 "Why the distinction decides what comes next".
- Old text: "For a continuous variable, asking for the probability of an exact value gives zero: there are infinitely many possible heights, so no single one has positive probability."
- Correction: "For a continuous variable, probability belongs to stretches of values, not to single points, so the probability of one exact value is zero. You ask for the probability of a range instead. Year 12 explains why."
- Reason: the same lesson's `we-3` (tosses until the first head) has infinitely many values, each with positive probability, so "infinitely many" is not the reason. The reason (probability as area over an interval) is Year 12 content (Year 12 s04 and s05).

### S11-P03. A worked example's upper quartile is wrong (s11 source)

- Lesson: `probability-and-data/lesson07.sa.html`, step `model`, `we-1`, steps 3 and 4.
- Old text: "$Q_1 = \dfrac{55+58}{2} = 56.5, \quad Q_3 = \dfrac{78+82}{2} = 80$" and "$\text{IQR} = 23.5;\quad \text{Fences: } 21.25 \text{ to } 115.25$".
- Correction: "$Q_1 = \dfrac{55+58}{2} = 56.5, \quad Q_3 = \dfrac{82+85}{2} = 83.5$" and "$\text{IQR} = 27;\quad \text{Fences: } 16 \text{ to } 124$. All data within fences, no outliers."
- Reason: the upper half is 70, 72, 75, 78, 82, 85, 88, 90, 95, 98; its median is the mean of the 5th and 6th values, 82 and 85. The conclusion (no outliers) is unchanged. Box plots are not 2024 Year 11 content (section 4), but the page is live.

### S11-P04. A model answer's quartiles are wrong (s11 source)

- Lesson: `probability-and-data/lesson07.sa.html`, step `practice-short-answer`, Q1 model answer (b) and (c).
- Old text: "(b) Min=152, $Q_1$=162.5, Med=166.5, $Q_3$=177.5, Max=190 [1]. (c) IQR=15; Lower fence=140, Upper=200. No outliers"
- Correction: "(b) Min = 152, $Q_1$ = 161, Med = 166.5, $Q_3$ = 176.5, Max = 190 [1]. (c) IQR = 15.5; lower fence = 137.75, upper fence = 199.75. No outliers"
- Reason: the lower half 152, 155, 158, 160, 162, 163, 165, 165 has median (160 + 162)/2 = 161; the upper half 168, 170, 172, 175, 178, 180, 185, 190 has median (175 + 178)/2 = 176.5.

### S11-P05. A drill answer says "Yes" and then "not an outlier" (s11 source)

- Lesson: `probability-and-data/lesson07.sa.html`, step `practice-short-answer`, comprehensive answers, drill 5.
- Old text: "5) Yes ($Q_1 - 1.5 \times 20 = -10$; 5 > −10 so actually NOT an outlier, lower fence is −10, 5 is inside)"
- Correction: "5) No. The lower fence is $Q_1 - 1.5 \times \text{IQR} = 20 - 30 = -10$, and $5 > -10$, so 5 is not an outlier."
- Reason: the answer contradicts itself; the working is right and the first word is wrong.

### S11-P06. A trap cites an example the lesson does not contain (s08, minor)

- Lesson: `probability-and-data/lesson04.sa.html`, step `apply`, trap 03.
- Old text: "Always do the arithmetic, the king-and-heart example shows that $P(A \cap B) = \frac{1}{52}$ is exactly $P(A) \times P(B)$."
- Correction: "Always do the arithmetic: for a king and a heart from one card, $P(\text{king}) \times P(\text{heart}) = \frac{4}{52} \times \frac{13}{52} = \frac{1}{52} = P(\text{king of hearts})$."
- Reason: no king-and-heart example appears in the lesson. The arithmetic itself is right.

### S11-P07. A card's lead-in promises a different card (s05, minor)

- Lesson: `probability-and-data/lesson02.sa.html`, step `the-power-of-complementary-events`, card 10 lead-in.
- Old text: "That raises a question: what is the most efficient way to confirm those conditions and avoid using the wrong simplification? This card answers it → use the definitions as tests: mutually exclusive means $P(A \cap B) = 0$; independent means $P(A \cap B) = P(A) \times P(B)$."
- Correction: "That raises a question: what is the quickest way to find the probability of "at least one"? This card answers it → use the complement, $P(\text{at least one}) = 1 - P(\text{none})$."
- Reason: the card teaches the complement rule; the two tests appear only in its closing misconception box.

### Notation that differs from the 2024 syllabus (g and s)

- `graph-transformations/lesson01.sa.html` and `lesson02.sa.html` write vertical moves only as $y = f(x) + k$ and $y = -f(x)$. The syllabus (`cia7e452b4`, `cifbd84c1c`) frames them as replacing $y$ by $y - b$ and by $-y$. The g01 and g02 packs teach both.
- `graph-transformations/lesson04.sa.html` and `lesson05.sa.html` use $y = af(b(x - h)) + k$. The 2024 Year 12 syllabus form, used by Year 12 t01, is $y = kf(a(x + b)) + c$, with $a$ and $b$ in other roles.
- `graph-transformations/lesson07.sa.html` writes circles as $(x - h)^2 + (y - k)^2 = r^2$. The syllabus writes $(x - a)^2 + (y - b)^2 = r^2$ and, separately, $x^2 + y^2 + ax + by + c = 0$, where $a$ and $b$ mean something else (centre $(-\frac{a}{2}, -\frac{b}{2})$).
- `probability-and-data/lesson11.sa.html` to `lesson13.sa.html` write the universal set as $\xi$ and use only $n(A)$ and $A'$. The syllabus writes $U$, allows $n(A)$ or $|A|$, writes the counting rule with $|A|$, and lists $\overline{A}$, $A'$ and $A^c$ for the complement.
- `probability-and-data/lesson01.sa.html` writes $P(A) = \frac{n(A)}{n(S)}$; the syllabus writes $P(A) = \frac{|A|}{|S|}$ and gives each equally likely outcome probability $\frac{1}{|S|}$.

### Gaps noted for the owner (not errors)

- Beyond the crosswalk's partial and missing points: no site lesson defines an experiment or trial as infinitely repeatable (`cib914fe5d`); lesson11 shows no infinite set such as {0, 2, 4, 6, …} (`ci04bd3585`); lesson03 never establishes $P(A|B) = \frac{|A \cap B|}{|B|}$ by counting before the probability form (`cidbe2315d`); lesson05 of graph-transformations never names discontinuities (`cid4fd3807`); lesson15 shows tables but no spreadsheet (`ci1c297b6d`).
- Gambling-adjacent copy: `probability-and-data/lesson01.sa.html` card 05 (Oz Lotto, "the lottery is a tax on people who cannot do probability") and `lesson04.sa.html` card 05 ("two separate lottery draws"). Year 12 s02 already ruled out raffle and lottery contexts for videos.
