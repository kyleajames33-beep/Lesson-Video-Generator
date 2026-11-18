# math-s12-t09: How does A = (1/2)ab sin C find the area of any triangle?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `ci30a047f1`: Apply the formula A = (1/2)ab sin C, where a and b are the sides that form the included angle C in a given triangle ABC, to solve problems in a range of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered.

Standard 1: no matching point. This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Playlist order 59 (ruling 46 positions).

**Entry knowledge:** math-s11-a05: `ci139f00a0` (area of a triangle, half base times perpendicular height); math-s12-t08: `ci431f9599` (the included angle; the cosine rule, used when an angle must be found first); math-s12-t01: `ci74344e24` (opposite = hypotenuse × sin θ, which gives the height).

**Prior video:** math-s12-t08.

**Start:** t08's final frame (proposed): the paddock with its 346 m third fence now drawn, and the site hook's second question: "how much spray does the paddock take?" (spray is sold by the hectare).

**Stop:** Half base times height recalled; the height is b sin C (t01's "opposite = hypotenuse × sine"), so area = ½ab sin C, with C the angle **between** a and b; no perpendicular height measured; an obtuse included angle works the same (sin 110° is positive); the area is at most ½ab (at 90°); when the angle is not between the two known sides, find the right angle first (cosine rule from three sides, or the angle sum); units (m², hectares: 10 000 m² = 1 ha); a cost from an area (fabric per m², spray per hectare). Radial surveys are t10.

**Next:** math-s12-t10.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f5b3fa68203801b3bf3a6143e88e7e2b1b83f6c65558b093d19799c4b7193809`. Sections used: `orient-to-the-cosine-rule` (card 02 "Finding the AREA", key terms "Area rule" and "Included angle"), `choose-your-rule` (card 05, SAS area), `work-three-cosine-rule-examples` (`we-3`), `avoid-the-cosine-rule-traps` (trap 02), `drill-the-cosine-rule` (drills 4, 5), `revisit-the-cosine-rule` (the area), `practise-the-cosine-rule` (Q2).

### Source lesson07, cards and `we-3`

Card 02: "Finding the AREA: The same two sides and the same included angle give the area rule, $A = \tfrac{1}{2}ab\sin C$. No height needed." Key term: "Area rule: The area of any triangle from two sides and the angle between them, $A = \tfrac{1}{2}ab\sin C$. Like this: sides $14$ and $9$ meeting at $63°$ enclose an area of $\tfrac{1}{2}(14)(9)\sin 63°$, with no perpendicular height ever measured." `we-3`: "A triangular garden bed has sides of $14\text{ m}$ and $9\text{ m}$ meeting at an angle of $63°$. Find its area, correct to 2 decimal places." "$A = \tfrac{1}{2}(14)(9)\sin 63° = 63\sin 63°$" "$A = 63(0.891007) = \mathbf{56.13\text{ m}^2}$" "Sense check, the answer must be under $\tfrac{1}{2}(14)(9) = 63$, the area you would get if the angle were a full $90°$."

### Source lesson07, trap 02, drills, revisit and Q2

Trap 02: "Both the cosine rule and the area rule need the angle between the two sides you are using. Given sides $a$ and $b$ with angle $A$, neither rule applies as written." Drill 4: "A triangle has sides $11\text{ cm}$ and $15\text{ cm}$ meeting at $82°$. Find its area" (81.70 cm²). Drill 5: "A triangular block of land has sides $45\text{ m}$, $60\text{ m}$ and $80\text{ m}$. Find its largest angle to the nearest minute, then its area to the nearest square metre." (98°15'; 1336 m²). Revisit: "Area: $A = \tfrac{1}{2}(240)(180)\sin 110° = 21600(0.939693) \approx \mathbf{20297\text{ m}^2}$, which is about $2.03$ hectares." Q2: the sail with sides 3.4, 4.1 and 5.2 m: "$A = \tfrac{1}{2}(3.4)(4.1)\sin 87.2657° = 6.97 \times 0.998832 = \mathbf{6.96\text{ m}^2}$".

## 3. Recalculation

- `we-3`: 63 sin 63° = 56.1334, so 56.13 m². Drill 4: 81.6971, so 81.70 cm². Drill 5: 98.2515°, area 1336.02, so 1336 m². Revisit: 20297.36 m², 2.0297 ha, so about 2.03 ha. Q2: 6.9621, so 6.96 m².
- Question 1: ½ × 4.8 × 5.5 × sin 72° = 12.5539, so 12.55 m²; × $38 = $477.05 (from the unrounded area; 12.55 × 38 = $476.90 if rounded first). Question 2: cos C = (64 + 121 − 196) ÷ 176 = −11/176; C = 93.5833°, so 93°35'; area ½ × 8 × 11 × sin 93.58° = 43.9140, so 43.91 m²; × $14 = $614.80.
- Corner block from t06 Question 1: ½ × 32 × 41.39 × sin 58° = 561.64 m².

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using an angle that is not between the two sides.
- Forgetting the ½ (the rectangle's half is the triangle).
- Using the slant side as the height in ½bh.
- Rounding the area before multiplying by a price.
- m² to hectares: dividing by 1000 or 100 instead of 10 000.
- Thinking an obtuse angle needs 180° minus it here (sin of the obtuse angle is used as it is).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The paddock triangle with its height dropped from one corner; the height labelled "b sin C" as a right-angled triangle lights inside (t01's SOH); ½ × a × (b sin C) assembles into ½ab sin C.
- The hinge again (t08): the two fences fixed, the angle opening from 0° to 180°; a live area readout rises to its biggest at 90° (½ab) and falls; a tag "most area at 90°".
- An "included angle" check: the two sides glow and the angle between them glows; a wrong angle (not between) is crossed.
- A cost strip: m² × $ per m², and m² ÷ 10 000 = ha × $ per ha.

Advanced reuse (visual parts only): `StudioTriangle` with `drop` (height and foot), `fill`, `angles`; `HingeBars` or `triHinge` with a live area readout (a11-trig-triangle.tsx); `StudioUnitProduct` (integration-parts.tsx) for "m² × $/m² = $". Plates: the paddock (shared with t08 and t10); the shade sail (t07); Advanced t05's garden bed is its anchor, so the site's garden bed `we-3` keeps its numbers on a coded triangle only. Kit needs: an **area readout** option on the hinge (½ab sin C live as the angle changes), small.

## 6. Two original candidate practice questions

### Question 1

A triangular shade sail has two edges of 4.8 m and 5.5 m that meet at an angle of 72°. (a) Find the area of the sail, correct to two decimal places. (b) The fabric costs $38 per square metre (example price). Find the cost of the fabric, to the nearest cent.

**Worked answer:** (a) The 72° is between the two edges, so A = ½ × 4.8 × 5.5 × sin 72° = 12.55 m². (b) 12.5539... × 38 = $477.05 (keep the unrounded area).

### Question 2

A triangular lawn has sides of 8 m, 11 m and 14 m. (a) Find the angle between the 8 m and 11 m sides, correct to the nearest minute. (b) Find the area of the lawn, correct to two decimal places. (c) Turf costs $14 per square metre (example price). Find the cost of turfing the lawn.

**Worked answer:** (a) The angle is opposite the 14 m side: cos C = (8² + 11² − 14²) ÷ (2 × 8 × 11) = −11 ÷ 176, so C = 93.58°, which is 93°35'. (b) A = ½ × 8 × 11 × sin 93.58° = 43.91 m². (c) 43.914 × 14 = $614.80.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "4.8 × 5.5 × sin 72° = 25.11 m²", crossed, "a triangle is half: × ½"; for Question 2 (b): "using the 14 m side with 93°35'", crossed, "the angle must be between the two sides you use: 8 and 11"). Prices are labelled examples (ruling 51 pattern); $14 per m² is r07's turf price, a callback. Answers were checked with SymPy.

## 7. Everyday anchors

- **Spraying a farm paddock:** the site's 240 m and 180 m fences at 110°: about 20 297 m², about 2.03 hectares; spray is costed per hectare (farming; the hook's second question).
- **Shade sail fabric:** two edges and the angle between them give the fabric to buy (home and garden; the t07 sail).
- **A triangular corner block's land area** for a real-estate listing: the t06 block is about 561.64 m² (housing; why sellers quote land in m²).

Varied everyday contexts (farming, garden, housing). Repeat check (grepped 18 November 2026): Advanced t05 pairs its sine rule with a garden bed for area (so no garden bed leads here, although the site's `we-3` numbers are kept); "shade sail" and "corner block" are this strand's own objects; "turf" appears in Standard r07 (a callback). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in the parts of lesson07 used here.

Decisions for Claude:

- **Derive in one picture:** ½ × base × height with the height written as b sin C (t01's sine); this is the only proof the Standard pace needs, and it makes "included angle" obvious.
- **Hinge demonstration:** the area grows to its largest at 90°; it also explains the site's sense check (under ½ab).
- **Angle first when needed:** one example (Question 2 or site drill 5) where the cosine rule gives the angle, then the area: the bridge to t10.
- **Pace: fits** (6 to 7 minutes; the shortest video in the strand).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
