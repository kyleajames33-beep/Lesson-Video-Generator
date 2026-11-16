# math-a11-t05: Why does the sine rule work, and when does the area formula apply?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci96840b09` (Trigonometry with angles of any magnitude): Examine the proof of the sine rule a/(sin A) = b/(sin B) = c/(sin C), cosine rule c^2 = a^2 + b^2 - 2ab cos C and the area of a triangle formula A = 1/2 ab sin C for a given triangle ABC [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.
- `ci5fb5a13c` (Trigonometry with angles of any magnitude): Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

Shared points: `ci96840b09` and `ci5fb5a13c` are split across t05 (sine rule and area), t06 (cosine rule) and t07 (ambiguous case and choosing a rule).

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t02: SOH CAH TOA in a right-angled triangle. math-a11-t04: sin(180° − A) = sin A, so an obtuse angle has a positive sine. Stage 5 (Year 10): Area of a triangle = ½ × base × height; the angle sum of a triangle is 180°.

**Prior video:** math-a11-t04.

**Start:** Open on t04's handoff: a triangle with no right angle and the side a and angle A marked, with the chip "SOH CAH TOA needs a right angle: drop one in?".

**Stop:** Examine the proof of the sine rule a/sin A = b/sin B = c/sin C by dropping a perpendicular h and writing it as c sin A and a sin C; examine the proof of the area formula A = ½ab sin C from ½ × base × height with h = a sin C; use the sine rule to find a side, or an angle when the angle is known to be acute, given a side-and-opposite-angle pair; use the area formula with the included angle; work in degrees and minutes. This video owns the sine rule and area parts of `ci96840b09` and `ci5fb5a13c`. The cosine rule is t06; the ambiguous case and choosing a rule are t07.

**Next:** math-a11-t06.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry-and-measure-of-angles/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `9c631c65a0e20098884e8d4403138e967912062c03cdfd84d836b67c32f171bd`. Title: The Sine Rule and the Area of a Triangle. Lesson id maths-adv-y11-m2-l16.

Data-step ids: `recall-your-gut-answer-first`, `drop-a-perpendicular-and-the`, `what-you-ll-master`, `proving-the-sine-rule`, `model`, `quick-fire-practice`, `revisit-the-largest-angle`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson06.sa.html, `we-1`

PROBLEM 1 · FINDING A SIDE In triangle $ABC$, $A = 40^\circ$, $B = 75^\circ$ and $a = 12$ cm. Find $b$ correct to one decimal place. 1 Pair available: $a = 12$ with $A = 40^\circ$ The sine rule needs one complete side-and-opposite-angle pair. 2 $\dfrac{b}{\sin 75^\circ} = \dfrac{12}{\sin 40^\circ}$ Unknown on top, matched with its opposite angle. 3 $b = \dfrac{12\sin 75^\circ}{\sin 40^\circ} \approx 18.0$ cm Evaluate, keeping full accuracy until the final rounding.

### Source trigonometry-and-measure-of-angles/lesson06.sa.html, `we-2`

PROBLEM 2 · FINDING AN ANGLE IN DEGREES AND MINUTES In triangle $ABC$, $a = 9$, $b = 7$ and $A = 63^\circ$. Find $B$ to the nearest minute. 1 $\dfrac{\sin B}{7} = \dfrac{\sin 63^\circ}{9}$ Sines on top when the unknown is an angle. 2 $\sin B = \dfrac{7\sin 63^\circ}{9} \approx 0.6929$ Rearrange and evaluate. 3 $B \approx 43.87^\circ = 43^\circ 52'$ Inverse sine, then convert: $0.87 \times 60 \approx 52$ minutes.

### Source trigonometry-and-measure-of-angles/lesson06.sa.html, `we-3`

PROBLEM 3 · AREA FROM TWO SIDES AND THE INCLUDED ANGLE A triangular garden bed has sides 8 m and 11 m with an angle of $52^\circ$ between them. Find its area to the nearest square metre. 1 The $52^\circ$ angle is included between the two given sides Check this before substituting. 2 Area $= \tfrac{1}{2}(8)(11)\sin 52^\circ$ Substitute into $\frac{1}{2}ab\sin C$. 3 $= 44\sin 52^\circ \approx 35$ m$^2$ Evaluate and round.

### Source trigonometry-and-measure-of-angles/lesson06.sa.html, card 05 "Proving the sine rule"

Take any triangle $ABC$ and drop a perpendicular of height $h$ from vertex $B$ to side $AC$. This splits it into two right-angled triangles that share the side $h$. In the left-hand triangle, $\sin A = \dfrac{h}{c}$, so $h = c\sin A$. In the right-hand triangle, $\sin C = \dfrac{h}{a}$, so $h = a\sin C$. The same $h$ cannot equal two different things, so $c\sin A = a\sin C$. Dividing both sides by $\sin A \sin C$ gives $\dfrac{a}{\sin A} = \dfrac{c}{\sin C}$. Repeating with a perpendicular from a different vertex brings in $\dfrac{b}{\sin B}$.

### Source trigonometry-and-measure-of-angles/lesson06.sa.html, card 06 "Finding a side or an angle", degrees and minutes

If the angles are given in degrees and minutes, convert to decimal degrees before calculating: $37^\circ 30'$ is $37.5^\circ$, because $30 \div 60 = 0.5$.

### Source trigonometry-and-measure-of-angles/lesson06.sa.html, card 07 "The area of a triangle"

Start from Area $= \tfrac{1}{2} \times \text{base} \times \text{height}$. Take $b$ as the base, and drop the perpendicular $h$ as before, where $h = a\sin C$. Substituting gives Area $= \tfrac{1}{2} b \times a\sin C = \tfrac{1}{2}ab\sin C$. So the formula is the standard one with the height rewritten. The angle must be the one **between** the two sides you use. With sides $a$ and $b$ the angle is $C$; with $b$ and $c$ it is $A$.

### Source trigonometry-and-measure-of-angles/lesson06.sa.html, comprehensive answers

Practice 1: $a = \frac{15\sin 35^\circ}{\sin 80^\circ} \approx 8.7$. Practice 2: $\sin B = \frac{8\sin 50^\circ}{10} \approx 0.6128$, so $B \approx 37.8^\circ$. Practice 3: $\frac{1}{2}(6)(9)\sin 40^\circ \approx 17.4$ cm$^2$. Practice 4: $28.75^\circ$. Q1 (3 marks): $\dfrac{q}{\sin 67^\circ} = \dfrac{14}{\sin 48^\circ}$ [1]. $q = \dfrac{14\sin 67^\circ}{\sin 48^\circ}$ [1]. $q \approx 17.3$ cm [1]. Q2 (4 marks): $71^\circ 24' = 71 + \frac{24}{60} = 71.4^\circ$ [1]. Area $= \frac{1}{2}(23)(31)\sin 71.4^\circ$ [1]. $= 356.5 \times 0.9478$ [1] $\approx 338$ m$^2$ [1].

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: b = 12 sin 75°/sin 40° = 18.03 ≈ 18.0 cm. we-2: sin B = 7 sin 63°/9 = 0.693005 (site prints 0.6929), B = 43.87° = 43°52'. we-3: area = 44 sin 52° = 34.67 ≈ 35 m².
- Quick-fire: a = 15 sin 35°/sin 80° = 8.74 ≈ 8.7; B = sin⁻¹(8 sin 50°/10) = 37.8°; area ½(6)(9) sin 40° = 17.36 ≈ 17.4 cm²; 28°45' = 28.75°; 45°30' = 45.5°; 37°30' = 37.5°.
- Short answers: Q1 q = 14 sin 67°/sin 48° = 17.34 ≈ 17.3 cm; Q2 71°24' = 71.4°, area = ½(23)(31) sin 71.4° = 356.5 × 0.9478 = 337.9 ≈ 338 m². Key-term example: b = 8 sin 60°/sin 40° = 10.78.

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match except a fourth-decimal rounding in we-2 (minor, below). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Pairing a side with an adjacent angle instead of the angle opposite it.
- Using the area formula with an angle that is not between the two sides.
- Typing 43.52 for 43°52' (minutes are sixtieths, not hundredths).
- Starting the sine rule without a complete side-and-opposite-angle pair (find the third angle from 180° first).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A coded triangle ABC with the perpendicular h dropping from B: h is written once from each right-angled half (h = c sin A amber, h = a sin C blue), then the two expressions slide together into c sin A = a sin C (new part `StudioTriangle` with `AlignedAlgebra`).
- The same h becoming the height in ½ × base × height, the base b glowing, to give ½ab sin C; a non-included angle tried and crossed (`MistakeCard`).
- Opposite pairs colour-matched (a with A, b with B); a degrees-and-minutes dial reading 43.87° as 43°52' (small new readout or `LiveReadoutBoard`).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

In triangle XYZ, X = 38°24', Y = 71° and x = 9.6 cm. Find y, correct to one decimal place.

**Worked answer:** Pair x with X: y/sin 71° = 9.6/sin 38.4°, so y = 9.6 sin 71°/sin 38.4° = 14.6 cm (38°24' = 38.4°).

### Question 2

A triangular sail has two edges of 4.2 m and 5.5 m, and the angle between them is 48°36'. Find the area of the sail, correct to two decimal places.

**Worked answer:** 48°36' = 48.6°. Area = ½(4.2)(5.5) sin 48.6° = 8.66 m².

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- Two fire-spotting lookout towers a known distance apart each take a bearing to the same smoke plume; the sine rule gives each tower's distance to the fire (travel and outdoors).
- A triangular sail: two edges and the angle between them give its area for a sailmaker's quote (sport).
- A triangular block of land sold by area, measured from two boundary fences and the angle between them (money; the site's Q2 is a triangular block).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- Minor: lesson06 we-2 step 2 prints "$\sin B = \dfrac{7\sin 63^\circ}{9} \approx 0.6929$"; the value is 0.693005, so "≈ 0.6930". B = 43°52' is unchanged.

Decisions for Claude:

- This video owns the sine rule, its proof, the area formula and its proof, and degrees and minutes. t06 and t07 reuse degrees and minutes without re-teaching them.
- The site proves the sine rule for an acute triangle only. If time allows, one line shows the obtuse case: the perpendicular falls outside, and sin(180° − C) = sin C (from t04) keeps h = a sin C.
- Finding an angle with the sine rule here uses cases where the angle must be acute (we-2: B is opposite the shorter of the two sides); the hidden obtuse answer is t07's question, so plant it in the handoff without solving it.
- Join: the next pack (math-a11-t06) opens on this video's final frame. Its start reads: Open on t05's handoff: a triangle with two sides and the angle between them known (no side-and-opposite-angle pair), with the sine rule crossed and the question "how long is the third side?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
