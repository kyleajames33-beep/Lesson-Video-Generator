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
