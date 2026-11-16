# math-a11-t01: How do two special triangles give exact values at 30, 45 and 60 degrees?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci83df430f` (Trigonometry with acute angles): Use Pythagoras’ theorem to find the exact sine, cosine and tangent ratios for angles of 30°, 45° and 60° [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** Stage 5 (Year 10): Pythagoras' theorem, and sin, cos and tan as side ratios in a right-angled triangle (SOH CAH TOA). math-a11-w03: Simplifying surds and rationalising a denominator (1/√3 = √3/3). math-a11-e08: The final frame: a square of side 1 with its diagonal, an equilateral triangle of side 2 halved, and a calculator showing sin 45° = 0.7071067811..., with no exact value stated.

**Prior video:** math-a11-e08.

**Start:** Open on e08's final frame exactly: the square of side 1 with its diagonal and one 45° angle, the equilateral triangle of side 2 with its height drawn and 30° and 60° marked, the calculator strip "sin 45° = 0.7071067811..." with digits running on, and the chips "never ends: exact form?" and "30°, 45°, 60°: exact values?".

**Stop:** Use Pythagoras' theorem in the half-square (sides 1, 1, √2) and the half-equilateral triangle (sides 1, √3, 2) to find exact sin, cos and tan of 30°, 45° and 60°, in rationalised form; evaluate simple exact-value expressions by substitution. Acute angles in degrees only. Other quadrants are t04, radians are t08, sec, cosec and cot are t11, and sin 30° = cos 60° as an identity is t13. The sin² θ + cos² θ = 1 shortcut is t14 (use direct substitution here).

**Next:** math-a11-t02.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry-and-measure-of-angles/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `091683abce72944ad0f27d7ecbb0cb227afa48342cf6203c185023da8841c1b1`. Title: Exact Values and Special Triangles. Lesson id maths-adv-y11-m2-l05.

Data-step ids: `orient`, `exact-values-from-special-triangles`, `what-you-ll-master`, `from-special-triangles-to-any`, `common-traps`, `drill-build-fluency`, `revisit-the-diagonal-of-the`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson05.sa.html, step `orient`, recall

A square has side length 2 cm. A diagonal is drawn, forming two 45°-45°-90° triangles. Without using a calculator , what is the exact length of the diagonal?

### Source trigonometry-and-measure-of-angles/lesson05.sa.html, card 02 "Exact values from special triangles"

For the 45°-45°-90° triangle with legs of length 1, the hypotenuse is $\sqrt{2}$. For the 30°-60°-90° triangle, the sides are in ratio $1 : \sqrt{3} : 2$. These give exact values for $\sin\theta$, $\cos\theta$, and $\tan\theta$ at $30^\circ$, $45^\circ$, and $60^\circ$. 45°-45°-90° · 30°-60°-90° 45°-45°-90° $\sin 45° = \cos 45° = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$, and $\tan 45° = 1$. 30° $\sin 30° = \frac12$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 30° = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$. 60° $\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 60° = \frac12$, $\tan 60° = \sqrt{3}$.

### Source trigonometry-and-measure-of-angles/lesson05.sa.html, card 08, worked example

Find the exact value of $\sin^2 30° + \cos^2 30° + \tan 45°$. Your turn first. Try it yourself before viewing the solution. I've tried, show me the solution SOLUTION 2 marks · HSC band 4+ Method 1: Direct substitution. From exact values: $\sin 30° = \frac12$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 45° = 1$ $$\sin^2 30° + \cos^2 30° + \tan 45° = \left(\frac12\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2 + 1$$ $$= \frac14 + \frac34 + 1 = 1 + 1 = 2$$

### Source trigonometry-and-measure-of-angles/lesson05.sa.html, step `revisit-the-diagonal-of-the`

By Pythagoras: $$d^2 = 2^2 + 2^2 = 8 \;\Rightarrow\; d = \sqrt{8} = 2\sqrt{2} \text{ cm}$$ Alternatively, using the $45°$-$45°$-$90°$ triangle ratio $1:1:\sqrt{2}$, scaling by 2 gives $2:2:2\sqrt{2}$. Answer: $2\sqrt{2}$ cm (approximately 2.83 cm).

### Source trigonometry-and-measure-of-angles/lesson05.sa.html, short answers (Band 5 to 6 and Band 6)

Find the exact value of $2\sin 60° \cos 60°$. auto-saved View comprehensive answer Working: Substitute exact values: $\sin 60° = \frac{\sqrt{3}}{2}$ and $\cos 60° = \frac12$ $$2\sin 60° \cos 60° = 2 \times \frac{\sqrt{3}}{2} \times \frac12 = \frac{\sqrt{3}}{2}$$ Answer: $\mathbf{\frac{\sqrt{3}}{2}}$ Notice: this is exactly $\sin 60°$. In fact, this is a special case of the double-angle formula $\sin 2\theta = 2\sin\theta\cos\theta$. Analyse Band 6 Proving a relationship Without using a calculator, show that $\tan 60° - \tan 30° = \frac{2\sqrt{3}}{3}$. auto-saved View comprehensive answer Working: Substitute exact values: $\tan 60° = \sqrt{3}$ and $\tan 30° = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ $$\tan 60° - \tan 30° = \sqrt{3} - \frac{\sqrt{3}}{3}$$ Common denominator: $$= \frac{3\sqrt{3}}{3} - \frac{\sqrt{3}}{3} = \frac{2\sqrt{3}}{3}$$

Other parts of this lesson (cards 05 to 07, drills 1 to 3 and 5 and short answer 1 are other quadrants (t04); we-1 and card 07 are radians (t08); the complementary note sin θ = cos(90° − θ) is t13; card 08's "Method 2" uses the Pythagorean identity (t14)) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Exact values: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3; sin 45° = cos 45° = 1/√2 = √2/2, tan 45° = 1; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. Half-equilateral height √(2² − 1²) = √3.
- Hook and revisit: diagonal of a square of side 2 is √8 = 2√2 ≈ 2.83 cm. Handoff decimal: sin 45° = 0.707106781187...
- Card 08: sin² 30° + cos² 30° + tan 45° = 1/4 + 3/4 + 1 = 2. Quick check: tan 60° = √3. Odd one out: tan² 30° + cos² 60° = 1/3 + 1/4 = 7/12.
- Drill 4: sin² 45° + cos² 45° = 1. Short answers: 2 sin 60° cos 60° = √3/2; tan 60° − tan 30° = √3 − √3/3 = 2√3/3.

Every example above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Swapping sin 30° and sin 60° (sin grows from 0° to 90°, so sin 30° = 1/2 is the smaller).
- Labelling the half-equilateral triangle 1, 2, √3 in the wrong places: the side opposite 30° is the shortest (1), the hypotenuse is 2.
- Reading sin² 30° as sin(30²) = sin 900°.
- Writing tan 30° = √3 (it is 1/√3, the reciprocal of tan 60°).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Two coded triangles built from e08's frame: the square splits along its diagonal into a 1, 1, √2 triangle (Pythagoras written as the diagonal draws), and the equilateral triangle of side 2 splits down its height into a 1, √3, 2 triangle. Sides in role colours: opposite amber, adjacent blue, hypotenuse ink.
- An exact-value table that fills one cell at a time as each ratio is read off a triangle (`WorkingBoard` rows; `ExactFraction` takes rational values only, so surds such as √3/2 need a small surd formatter), with the calculator strip's 0.7071... settling into √2/2 (a `DrawnMark` link from decimal to surd).
- A rationalising step (1/√3 to √3/3) as `AlignedAlgebra` with `StudioCancellation`; a small "sin rises from 0° to 90°" bar sketch for the 30°/60° trap.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

Without a calculator, find the exact value of 4 sin 60° cos 30° − tan² 45°.

**Worked answer:** 4 × (√3/2) × (√3/2) − 1² = 4 × 3/4 − 1 = 3 − 1 = 2.

### Question 2

The diagonal of a square is 8 cm. Using an exact value of cos 45°, find the exact side length of the square.

**Worked answer:** Each half of the square is a 45°-45°-90° triangle with hypotenuse 8, so side = 8 cos 45° = 8 × √2/2 = 4√2 cm (about 5.66 cm).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A pool table's triangle rack: an equilateral triangle that a cue (or the rack's own centre line) splits into two 30°-60°-90° halves (games).
- A square sandwich cut corner to corner: two 45°-45°-90° halves whose cut edge is the diagonal (food).
- An Australian give way sign: an equilateral triangle, so its height splits it into two 30°-60°-90° halves (travel).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- `trigonometry-and-measure-of-angles/lesson05.sa.html`, card 09, trap 2. Old text: "HSC marking guidelines almost always require rationalised denominators." No source supports this, and equivalent exact forms are usually accepted unless a question asks for a rationalised denominator. Correction: "Rationalised form, such as $\frac{\sqrt{3}}{3}$, is the usual way to write a final answer. $\frac{1}{\sqrt{3}}$ and $\frac{\sqrt{3}}{3}$ are equal, so rationalise when the question asks or when it makes the next step easier."
- Minor: the hook "What is $\sin 75^\circ$? You can express it exactly using ... a trig identity" and short answer 2's "special case of the double-angle formula" use compound-angle results (Mathematics Extension 1, not Advanced). Minor: "Two triangles produce every exact trig value you will ever need for HSC" omits multiples of 90°.

Decisions for Claude:

- Degrees only, acute angles only. The site lesson mixes quadrants and radians into the same page; those parts move to t04 and t08 with the same numbers.
- Open on e08's coded frame (e08 root ruling 3): the square of side 1 and the equilateral triangle of side 2 are already the two special triangles, and the running decimal makes "exact" the question. If an anchor plate is used, only the frame's right side changes.
- Use direct substitution for card 08 (1/4 + 3/4 + 1). Mention that sin² θ + cos² θ = 1 will be proved in t14 only if the designer wants a forward hook.
- The square of side 2 (site hook) and the square of side 1 (e08) are the same shape: scale by 2 to land on the site's 2√2.
- Join: the next pack (math-a11-t02) opens on this video's final frame. Its start reads: Open on t01's handoff: the site's ladder, 4 m long at 60° to the ground (lesson04 recall). The exact height 2√3 m comes from t01's sin 60°; then a calculator angle (52°) replaces the special angle.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
