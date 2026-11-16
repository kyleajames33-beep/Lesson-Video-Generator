# math-a11-c08: How does the derivative give the tangent and normal at a point?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci3d1a69e4` (Calculations with the derivative): Use the rules for differentiation to find equations of tangents and normals to a curve at points on the curve [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c07: Differentiating polynomials and powers; f'(a) as the gradient at x = a. math-a11-w10: Point-gradient form y - y1 = m(x - x1). math-a11-w11: Perpendicular gradients multiply to -1.

**Prior video:** math-a11-c07.

**Start:** Recall that f'(a) is the tangent's gradient (c05, c07) and the point-gradient form (w10).

**Stop:** Use the rules for differentiation to find equations of tangents and normals to a curve at points on it: the point from f, the gradient from f', the normal's gradient as the negative reciprocal, and a vertical normal when the tangent is horizontal. Points with a given gradient and angles are c09.

**Next:** math-a11-c09.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson14.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson14.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e5fc501934a9611b5081c24b6c1462c65270d9681c6c819fd784369af8236e44`. Title: Tangents, Normals and the Angle of Inclination. Lesson id maths-adv-y11-m3-l18.

Data-step ids: `recall-your-gut-answer-first`, `one-gradient-three-questions`, `what-you-ll-master`, `the-equation-of-a-tangent`, `model`, `quick-fire-practice`, `revisit-your-two-gradients`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson14.sa.html, `we-1`

PROBLEM 1 · TANGENT AND NORMAL Find the equations of the tangent and the normal to $y = x^2$ at the point where $x = 2$. 1 Point: $f(2) = 4$, so $(2, 4)$. Gradient: $f'(x) = 2x$, so $m = 4$ The point comes from $f$, the gradient from $f'$. 2 Tangent: $y - 4 = 4(x - 2)$, so $y = 4x - 4$ Point-gradient form, then tidy. 3 Normal: gradient $-\dfrac{1}{4}$, so $y - 4 = -\dfrac{1}{4}(x - 2)$ Negative reciprocal, same point.

### Source introduction-to-differentiation/lesson14.sa.html, card "The normal"

A horizontal tangent has a vertical normal. If $m = 0$ then $-\dfrac{1}{m}$ is undefined, and the normal is the vertical line $x = a$. Say that rather than writing a gradient.

Other worked examples in this lesson (we-2 and we-3 are c09's) are deferred source context, not part of this video.

Read-only source: [introduction-to-differentiation/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0bd149c84e6fad8fd772dd1496c32d958b33d0ed116f7133834cb3e7043744e5`. Title: The Derivative as the Gradient of a Tangent. Lesson id maths-adv-y11-m3-l03.

Data-step ids: `orient`, `the-two-moves`, `key-terms`, `the-derivative-as-the-gradient`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson03.sa.html, `we-3`

PROBLEM 3 · EQUATION OF TANGENT Find the equation of the tangent to $y = x^2$ at the point where $x = 2$. 1 $f'(x) = 2x$ (from first principles, or Worked Example 1) First find the derivative function. 2 $f'(2) = 2(2) = 4$ Substitute $x = 2$ to find the gradient of the tangent at that point. 3 Point: $(2, f(2)) = (2, 4)$. Gradient: $m = 4$. Find the $y$-coordinate of the point of contact. 4 $y - 4 = 4(x - 2) \Rightarrow y = 4x - 4$ Use point-gradient form $y - y_1 = m(x - x_1)$ and simplify.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson14 we-1 and lesson03 we-3: y = x^2 at x = 2: point (2, 4), m = 4, tangent y = 4x - 4; normal y - 4 = -1/4(x - 2), that is y = -x/4 + 9/2.
- lesson14 Q1: y = x^3 - 2x at x = 2: point (2, 4), m = 10, tangent y = 10x - 16, normal y = -x/10 + 21/5.
- lesson03 drills: tangent to x^2 at (1, 1): y = 2x - 1; normal at (2, 4): y = -x/4 + 9/2. Q2: tangent to x^3 at x = 1: y = 3x - 2.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using (a, f'(a)) as the point of contact.
- Using f'(a) for the normal, or flipping the fraction without changing the sign.
- Writing a gradient for the normal when the tangent is horizontal (it is x = a).
- Believing a tangent can never meet the curve again.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `TangentPlate`-style graph: the point (a, f(a)) drops from f in one colour, the gradient f'(a) from f' in another, and the tangent line builds through them.
- `QuarterTurnNormal` or `NormalLineLayer`: the tangent turns a quarter-turn about the point to become the normal, with the gradient chip flipping 4 to -1/4.
- For y = x^3 at x = 1, the tangent extended until it meets the curve again at (-2, -8).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Find the equations of the tangent and the normal to y = x^2 - 3x + 1 at the point where x = 3.

**Worked answer:** Point: f(3) = 1, so (3, 1). Gradient: dy/dx = 2x - 3 = 3. Tangent: y - 1 = 3(x - 3), so y = 3x - 8. Normal gradient -1/3: y - 1 = -1/3(x - 3), so y = -x/3 + 2 (or x + 3y - 6 = 0).

### Question 2

The tangent to y = x^3 at x = 1 meets the curve again. Find the tangent's equation and the other point where it meets the curve.

**Worked answer:** Point (1, 1), gradient 3, tangent y = 3x - 2. Solve x^3 = 3x - 2: x^3 - 3x + 2 = (x - 1)^2(x + 2) = 0, so the other point is x = -2, (-2, -8).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A marble rolling along a curved toy track that ends in mid-air: it leaves along the tangent at the end of the track (games).
- A bench set square to a curved bike path: its line runs along the normal to the path's edge (home, travel).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Question 2 deliberately shows a tangent meeting its curve again; this repairs the "touches at exactly one point" wording logged under c05.
- Use y = mx + c in any general line form (the site writes y = mx + b in lesson14 Q3; see section 2 of the corrections log).

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
