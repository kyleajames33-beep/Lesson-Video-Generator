# math-a11-w30: Why is absolute value a distance, and why does it need two cases?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cib39edbb7` (Absolute value functions): Define the absolute value |x| of a number x, also known as the magnitude of x, to be the distance from the origin to x on the number line [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci25113162` (Absolute value functions): Establish and use the piecewise definition |x| = {x, for x ≥ 0; -x, for x < 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cidb25f0cc` (Absolute value functions): Show using numerical substitutions that √(x^2) = |x| and use the result [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: missing. Gap: No lesson shows by numerical substitution that the square root of x squared equals |x|.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w28: Piecewise definitions and evaluation. math-a11-w01: The root sign means the non-negative root. Stage 5 (Year 10): Distance on the number line.

**Prior video:** math-a11-w29.

**Start:** Recall the number line and that sqrt9 = 3, not +/-3.

**Stop:** Define |x| (the magnitude of x) as the distance from the origin to x on the number line; establish the piecewise definition |x| = x for x >= 0 and -x for x < 0; read |a - b| as the distance between a and b; show by numerical substitution that sqrt(x^2) = |x| and use it. Graphs and equations are w31.

**Next:** math-a11-w31.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `29324c638f5c3da48aa689e8a3e5d4ddb47c569fd633f0f68ef22b6121e8e780`. Title: Piecewise & Absolute Value Functions. Lesson id maths-adv-y11-m1-l04.

Data-step ids: `orient`, `piecewise-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson04.sa.html, card 06 (absolute value functions)

The absolute value of a number is its distance from zero on the number line. Distance is always non-negative, so absolute value always produces a positive result or zero. ... This definition explains why $|-7| = 7$: because $-7 < 0$, we use the second piece and get $-(-7) = 7$.

Other worked examples in this lesson (we-pw-1, we-pw-2, we-pw-3) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 06: |-7| = -(-7) = 7. Drill: |-8| = 8.
- Original (the site has no example, crosswalk: missing): sqrt(3^2) = 3 = |3|; sqrt((-3)^2) = sqrt9 = 3 = |-3|, not -3; sqrt((-5)^2) = 5. SymPy simplifies sqrt(x^2) to |x| for real x.
- |3 - 8| = |8 - 3| = 5.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). The site has no worked example for this video. The card text and drill answers above match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading -x as "a negative number" (for x < 0, -x is positive).
- Simplifying sqrt(x^2) to x.
- Thinking |a - b| and |b - a| differ.
- Writing |-5| = -5 or |x| = +/-x.
- Treating the absolute value as "drop the minus sign" inside an expression, so |x - 4| becomes x + 4.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A number line with a point x sliding left and right and a distance bar back to 0 whose length readout is |x|, switching from x to -x as the point crosses 0.
- Two points a and b with the bar between them labelled |a - b|, the same whichever is first.
- A substitution table x, x^2, sqrt(x^2), |x| filling row by row for 3, -3, 0, -5, with the sqrt(x^2) and |x| columns matching and an x column that fails on negatives.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Evaluate |3 - 8| and |8 - 3|, and use distance on the number line to explain why they are equal.

**Worked answer:** |3 - 8| = |-5| = 5 and |8 - 3| = 5. Both are the distance between 3 and 8 on the number line, which does not depend on the direction.

### Question 2

Simplify sqrt((x - 4)^2), then evaluate it at x = 1 and at x = 9.

**Worked answer:** sqrt((x - 4)^2) = |x - 4|. At x = 1: |-3| = 3. At x = 9: 5. (Writing x - 4 would give -3 at x = 1, which a square root cannot be.)

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Golf scores against par: 3 over and 3 under are both 3 strokes from par; the sign says which side (sport).
- Kilometre posts on a rail trail: the distance between posts 12 and 5 is |12 - 5| whichever way you ride (travel).
- An overdrawn bank balance of -$40 is $40 from zero (money).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- The site's lesson04 combines piecewise functions, |x| and |ax + b| = c in one page; this video uses only card 06 and the drill. cidb25f0cc (sqrt(x^2) = |x|) has no site teaching and needs original material.
- Site card 06 says |x| "always produces a positive result or zero". Keep "non-negative" in learner copy.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
