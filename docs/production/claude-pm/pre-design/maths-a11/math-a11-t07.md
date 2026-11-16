# math-a11-t07: When can the sine rule give two triangles, and which rule fits a problem?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci44ad375d` (Trigonometry with angles of any magnitude): Use graphing applications or geometric construction to examine the ambiguous case of the sine rule, in which there are two possible solutions for an angle, and the condition for it to arise [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.
- `ci5fb5a13c` (Trigonometry with angles of any magnitude): Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

Shared points: `ci96840b09` and `ci5fb5a13c` are split across t05 (sine rule and area), t06 (cosine rule) and t07 (ambiguous case and choosing a rule). The proofs are complete after t06; t07 applies.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t05: The sine rule. math-a11-t06: The cosine rule, which is never ambiguous. math-a11-t04: sin(180° − θ) = sin θ.

**Prior video:** math-a11-t06.

**Start:** Open on t06's handoff: two sides and a non-included angle (a = 7 cm, b = 9 cm, A = 40°, the site's we-1), with the calculator's single answer B = 55.7° and the question "is that the only triangle?".

**Stop:** Use a geometric construction (an arc of length a swung from C onto the ray from A) and a graphing application to examine the ambiguous case: two, one or no triangles from two sides and a non-included angle; state the condition (for acute A, two triangles when b sin A < a < b); test the obtuse partner 180° − B against the angle sum; choose a rule from the given data (side-and-opposite-angle pair: sine rule; two sides and included angle, or three sides: cosine rule; find the largest angle first). This video owns `ci44ad375d` and the choosing and ambiguous parts of `ci5fb5a13c`.

**Next:** math-a11-t08.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry-and-measure-of-angles/lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `45638f1a5e1e417fda3fdfa9eba0e92e459142a53e4a43afac5a7a65f069aaaa`. Title: The Ambiguous Case, and Choosing a Rule. Lesson id maths-adv-y11-m2-l18.

Data-step ids: `recall-your-gut-answer-first`, `two-angles-share-the-same`, `what-you-ll-master`, `why-the-inverse-sine-hides`, `model`, `quick-fire-practice`, `revisit-your-inverse-sine`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson08.sa.html, `we-1`

PROBLEM 1 · TWO VALID TRIANGLES In triangle $ABC$, $a = 7$ cm, $b = 9$ cm and $A = 40^\circ$. Find all possible values of $B$. 1 $\dfrac{\sin B}{9} = \dfrac{\sin 40^\circ}{7}$, so $\sin B = \dfrac{9\sin 40^\circ}{7} \approx 0.8264$ SSA data, so test for ambiguity. 2 Acute: $B \approx 55.7^\circ$. Supplement: $180 - 55.7 = 124.3^\circ$ Both have the same sine. 3 $40 + 55.7 = 95.7 < 180$ and $40 + 124.3 = 164.3 < 180$, so both are valid Two genuinely different triangles fit these measurements.

### Source trigonometry-and-measure-of-angles/lesson08.sa.html, `we-2`

PROBLEM 2 · ONLY ONE VALID TRIANGLE In triangle $ABC$, $a = 12$ cm, $b = 5$ cm and $A = 70^\circ$. Find $B$. 1 $\sin B = \dfrac{5\sin 70^\circ}{12} \approx 0.3915$ Again SSA, so check both cases. 2 Acute: $B \approx 23.1^\circ$. Supplement: $156.9^\circ$ Form the partner as usual. 3 $70 + 157 = 227 > 180$, so the obtuse case is impossible; $B \approx 23^\circ$ only The angle sum rejects the second triangle.

### Source trigonometry-and-measure-of-angles/lesson08.sa.html, `we-3`

PROBLEM 3 · CHOOSING THE RULE A triangle has $b = 14$, $c = 9$ and $A = 38^\circ$. Explain which rule to use and find $a$. 1 $A$ sits between $b$ and $c$, so this is SAS, not SSA No side-and-opposite-angle pair exists, so the sine rule cannot start. 2 $a^2 = 14^2 + 9^2 - 2(14)(9)\cos 38^\circ = 277 - 198.6$ Cosine rule, which is never ambiguous. 3 $a^2 \approx 78.4$, so $a \approx 8.9$ One triangle only, because SAS fixes it completely.

### Source trigonometry-and-measure-of-angles/lesson08.sa.html, card 05 "Why the inverse sine hides a solution"

On the unit circle, sine is the $y$-coordinate, and two different angles in $0^\circ$ to $180^\circ$ share the same height. Those two angles are $\theta$ and $180^\circ - \theta$. A calculator must return one value, so it returns the acute one. When you write $B = \sin^{-1}(0.643) = 40^\circ$, the value $140^\circ$ has the same sine and may also fit. The inverse cosine has no such problem, because cosine takes each value exactly once between $0^\circ$ and $180^\circ$: positive for acute angles, negative for obtuse ones. This is why the ambiguity belongs to the sine rule alone.

### Source trigonometry-and-measure-of-angles/lesson08.sa.html, card 06 "Testing whether a second triangle exists"

Work out the acute angle from the sine rule, then form its supplement by subtracting from $180^\circ$. Add the supplement to the angle you were originally given. If the total is less than $180^\circ$ there is room for a third angle, so a second triangle exists and both answers are correct. If the total is $180^\circ$ or more, the second triangle is impossible and you discard it. Example: $A = 40^\circ$, $\sin B = 0.643$ gives $B = 40^\circ$ or $140^\circ$; since $40 + 140 = 180$, the obtuse case fails by exactly nothing and is rejected. Construct it to see it. Draw the known angle and side, then swing an arc of the second known length from the far vertex. The arc may cross the base line twice, giving two triangles, once, or not at all. The syllabus names construction and graphing applications explicitly.

### Source trigonometry-and-measure-of-angles/lesson08.sa.html, card 07 "Choosing a rule"

If you know a complete side-and-opposite-angle pair, the sine rule is available and is usually quickest. Watch for ambiguity only when the unknown is an angle in an SSA arrangement. If you know two sides and the included angle (SAS), or all three sides (SSS), use the cosine rule. Neither case is ever ambiguous.

### Source trigonometry-and-measure-of-angles/lesson08.sa.html, comprehensive answers

Practice 1: $50^\circ$ or $130^\circ$. Practice 2: $\sin B = \frac{10\sin 35^\circ}{8} \approx 0.717$, so $B \approx 45.8^\circ$ or $134.2^\circ$; both give an angle sum under $180^\circ$, so both are valid. Practice 3: $\sin B = \frac{6\sin 80^\circ}{20} \approx 0.295$, $B \approx 17.2^\circ$; the supplement $162.8^\circ$ gives $80 + 162.8 > 180$, so it is rejected. Practice 4: cosine rule, because the angle is included between the two known sides, which is SAS. Q1 (4 marks): $\sin B = \frac{8\sin 42^\circ}{6} \approx 0.8921$ [1]. Acute: $B \approx 63.1^\circ$ [1]. Supplement: $B \approx 116.9^\circ$ [1]. $42 + 63.1 = 105.1 < 180$ and $42 + 116.9 = 158.9 < 180$, so both are valid and two triangles exist [1]. Q2 (3 marks): $\sin B = \frac{7\sin 61^\circ}{25} \approx 0.2448$ [1]. Acute: $B \approx 14.2^\circ$; supplement $\approx 165.8^\circ$ [1]. $61 + 165.8 = 226.8 > 180$, so the obtuse case is impossible and exactly one triangle exists [1].

Read-only source: [trigonometry-and-measure-of-angles/lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `d72d51d79e4278e3cd9f772db88ac9cb3f2005e9d4ad11428c3d2c492ffdd354`. Title: The Cosine Rule. Lesson id maths-adv-y11-m2-l17.

Data-step ids: `recall-your-gut-answer-first`, `pythagoras-with-a-correction-term`, `what-you-ll-master`, `proving-the-cosine-rule`, `model`, `quick-fire-practice`, `revisit-the-right-angled-case`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson07.sa.html, `we-3`

PROBLEM 3 · CHOOSING BETWEEN THE RULES In triangle $ABC$, $b = 9$, $c = 12$ and $A = 47^\circ$. Find $a$, then find $B$. 1 No side is paired with its opposite angle, so start with $c^2 = a^2 + b^2 - 2ab\cos C$ The sine rule cannot begin without a complete pair. 2 $a^2 = 81 + 144 - 2(9)(12)\cos 47^\circ \approx 77.7$, so $a \approx 8.8$ Now a pair exists: $a$ with $A$. 3 $\sin B = \dfrac{9\sin 47^\circ}{8.8} \approx 0.748$, so $B \approx 48.4^\circ$ With the pair established the sine rule is quickest.

Other parts of this lesson (the proof, we-1, we-2 and the drills are t06; we-3 (b = 9, c = 12, A = 47°) is used here as a choosing-the-rule example, with the correction in section 8) are deferred source context, not part of this video.

Read-only source: [trigonometric-identities-and-equations/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e36de2cf0f4ccc044f4dfd456cd23611c529dddf7656b51c50579ee7ab742c63`. Title: Review and Connections. Lesson id maths-adv-y11-m2-l15.

Data-step ids: `orient`, `two-moves-the-big-picture`, `what-you-ll-master`, `module-2-at-a-glance`, `common-traps`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson10.sa.html, card 08, worked example

In triangle $ABC$, $a = 8$ cm, $b = 11$ cm and $\angle A = 35^\circ$. Find the two possible sizes of $\angle B$, to the nearest degree. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 3 marks · HSC band 4+ Step 1: Apply the sine rule to find $\sin B$. $$\frac{\sin B}{b} = \frac{\sin A}{a} \;\Rightarrow\; \sin B = \frac{11\sin 35^\circ}{8} \approx 0.7887$$ Step 2: An acute and an obtuse angle share this sine. $$B \approx 52^\circ \quad \text{or} \quad B \approx 180^\circ - 52^\circ = 128^\circ$$ Step 3: Check that both triangles can exist. $$35^\circ + 52^\circ = 87^\circ < 180^\circ, \qquad 35^\circ + 128^\circ = 163^\circ < 180^\circ$$ Answer: $\angle B \approx 52^\circ$ or $\angle B \approx 128^\circ$, both valid.

Other parts of this lesson (the rest of the review lesson is used by t09, t14 and t15) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson08 we-1: sin B = 9 sin 40°/7 = 0.8264, B = 55.7° or 124.3°, both valid (95.7° and 164.3° < 180°). Condition: b sin A = 5.785 < 7 < 9. we-2: sin B = 5 sin 70°/12 = 0.3915, B = 23.05° (156.95° rejected: 70° + 157° > 180°). we-3: a² = 277 − 252 cos 38° = 78.42, a = 8.86 ≈ 8.9.
- Card 05: sin 40° = 0.6428 (site 0.643), so 40° or 140°. Quick-fire: sin⁻¹ 0.766 = 50.0°, so 50° or 130°; 10 sin 35°/8 = 0.717, B = 45.8° or 134.2°; 6 sin 80°/20 = 0.2954, B = 17.2° only.
- Short answers: Q1 8 sin 42°/6 = 0.8922, B = 63.1° or 116.9°, both valid; Q2 7 sin 61°/25 = 0.2449, B = 14.2° only. TI10 card 08: 11 sin 35°/8 = 0.7887, B ≈ 52° or 128°.
- lesson07 we-3: a² = 225 − 216 cos 47° = 77.69, a = 8.814; sin B with the unrounded a gives B = 48.31° (cosine-rule check 48.31°); the site rounds a to 8.8 first and prints 48.4°.

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match except lesson07 we-3 (below). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Accepting the calculator's acute B without testing 180° − B.
- Keeping an obtuse partner that breaks the angle sum (we-2: 70° + 157° > 180°).
- Thinking two sides and the included angle can be ambiguous.
- Rounding a side before using it again (lesson07 we-3 gives 48.4° instead of 48.3°).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The construction: angle A and side b drawn, then an arc of radius a swung from C; it crosses the base ray twice (two triangles), touches it (one right-angled triangle) or misses (none), as a slider moves a past b sin A and b (`StudioTriangle` SSA mode, new; `ParameterSlider`).
- A graphing-application screen (`ScreenApp`) for "use graphing applications": y = sin x on 0° to 180° and the line y = 0.8264 meeting it twice, at 55.7° and 124.3°.
- A three-branch rule chooser: "pair present", "two sides and included angle", "three sides" (`DecisionTree` from `trig-parts.tsx`).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

In triangle ABC, A = 32°, a = 6 cm and b = 10 cm. Show that two triangles are possible, and find both possible sizes of angle C, to the nearest degree.

**Worked answer:** b sin A = 10 sin 32° = 5.30 < 6 < 10, so two triangles. sin B = 10 sin 32°/6 = 0.8832, so B = 62.0° or 118.0° (32° + 118° < 180°). Then C = 180° − 32° − 62° = 86° or C = 180° − 32° − 118° = 30°.

### Question 2

In triangle ABC, A = 50° and b = 12 cm. For which lengths of side a are two different triangles possible? Give the bounds to one decimal place.

**Worked answer:** Two triangles when b sin A < a < b: 12 sin 50° = 9.19, so 9.2 < a < 12 (exactly 12 sin 50° < a < 12).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A tent guy rope of fixed length pegged out along a straight path from a pole: the peg can land in two places (travel and camping).
- A wall-mounted swing-arm TV bracket: an arm of fixed length reaches a straight line on the wall at two points, one point or not at all (home).
- A sailing race's triangular course: which marks and legs are known decides which rule to use (sport).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- `trigonometry-and-measure-of-angles/lesson07.sa.html`, worked example `we-3`, steps 1 and 3. Old text (step 1): "No side is paired with its opposite angle, so start with $c^2 = a^2 + b^2 - 2ab\cos C$". The unknown is $a$, so the form needed is $a^2 = b^2 + c^2 - 2bc\cos A$ (step 2 uses that form). Old text (step 3): "$\sin B = \dfrac{9\sin 47^\circ}{8.8} \approx 0.748$, so $B \approx 48.4^\circ$". Rounding $a$ to 8.8 first shifts the answer; with $a = 8.814...$, $\sin B = 0.7468$ and $B \approx 48.3^\circ$ (the cosine rule agrees). Corrections: step 1 "start with $a^2 = b^2 + c^2 - 2bc\cos A$"; step 3 "$\sin B = \dfrac{9\sin 47^\circ}{8.814...} \approx 0.747$, so $B \approx 48.3^\circ$ (keep $a$ unrounded)".
- Minor: lesson08 Q3's answer says sine "takes every value between 0 and 1 exactly twice"; sin θ = 1 only at 90°, so "every value strictly between 0 and 1". Minor: card 06 says the arc "may cross the base line twice, giving two triangles"; both crossings must lie on the ray from A on the same side, so say "may cross the ray from A twice".

Decisions for Claude:

- `ci44ad375d` asks for "the condition for it to arise". The site gives the angle-sum test but never states b sin A < a < b (for acute A). State it from the construction (the arc reaches the ray only if a ≥ b sin A, and crosses twice only if a < b).
- Use lesson07 we-3 (corrected) as the "pair appears after the cosine rule" example, and keep the largest-angle-first habit from lesson08 card 07.
- Graphing application: a phone or browser plot of y = sin x against y = k on 0° to 180° shows the two angles directly.
- Join: the next pack (math-a11-t08) opens on this video's final frame. Its start reads: Open on t07's handoff, a circle with an angle at its centre and an arc, and the question "360 is a choice: is there a natural way to measure an angle?". Then the site's hook numbers: a bike wheel's turn is 360° or 2π ≈ 6.28 radians.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
