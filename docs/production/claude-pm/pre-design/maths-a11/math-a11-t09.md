# math-a11-t09: How do radians simplify arc length, sector area and segment area?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cib55a24b7` (Radians): Establish and use the formula l = rθ for the length l of arc subtending an angle θ in radians at the centre of a circle of radius r [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.
- `ci56cda609` (Radians): Prove and use the formula A = 1/2 r^2θ for the area of a sector with angle θ in radians at the centre of a circle of radius r [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.
- `cibf527c60` (Radians): Solve problems involving arc lengths and areas of major and minor sectors and segments [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t08: θ in radians = arc length/radius; arc/circumference = sector/area = θ/2π. math-a11-t05: Area of a triangle = ½ab sin C. Stage 5 (Year 10): Circumference 2πr and area πr² of a circle.

**Prior video:** math-a11-t08.

**Start:** Open on t08's handoff: the site's pizza, radius 20 cm, slice angle 45° = π/4, with its crust 5π cm found as one eighth of 40π, and the question "one step instead of two?".

**Stop:** Establish l = rθ from θ = l/r; prove A = ½r²θ by taking the fraction θ/2π of πr²; find the area of a segment as sector minus triangle, ½r²θ − ½r² sin θ = ½r²(θ − sin θ), with θ in radians and the calculator in radian mode; solve problems with minor and major arcs, sectors and segments, including finding r or θ and the perimeter of a sector (two radii plus the arc). Graphs of sin, cos and tan are t10.

**Next:** math-a11-t10.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry-and-measure-of-angles/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f47520b94df64916243ba92c261c735e3d9f1f54ed613e79870a39183d478c83`. Title: Arc Length & Area of Sectors. Lesson id maths-adv-y11-m2-l02.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `arc-length-and-sector-area`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson02.sa.html, `we-1`

PROBLEM 1 · ARC LENGTH Find the arc length of a sector with radius 8 cm and central angle $\frac{\pi}{4}$ radians. 1 $l = r\theta$ Identify the arc length formula. 2 $l = 8 \times \frac{\pi}{4}$ Substitute $r = 8$ and $\theta = \frac{\pi}{4}$. 3 $l = 2\pi$ cm Simplify. $8 \div 4 = 2$.

### Source trigonometry-and-measure-of-angles/lesson02.sa.html, `we-2`

PROBLEM 2 · SECTOR AREA A sector has radius 10 cm and central angle $60^\circ$. Find its area. 1 $60^\circ = 60 \times \frac{\pi}{180} = \frac{\pi}{3}$ rad Convert degrees to radians first. 2 $A = \frac{1}{2}r^2\theta = \frac{1}{2}(10)^2 \times \frac{\pi}{3}$ Apply the sector area formula. 3 $A = \frac{1}{2} \times 100 \times \frac{\pi}{3} = \frac{50\pi}{3}$ cm$^2$ Simplify to exact form.

### Source trigonometry-and-measure-of-angles/lesson02.sa.html, `we-3`

PROBLEM 3 · FINDING THE RADIUS A sector has area $27\pi$ cm$^2$ and central angle $\frac{\pi}{2}$ radians. Find the radius. 1 $A = \frac{1}{2}r^2\theta$ Start with the area formula. 2 $27\pi = \frac{1}{2}r^2 \times \frac{\pi}{2}$ Substitute known values. 3 $27\pi = \frac{\pi r^2}{4} \Rightarrow r^2 = 108 \Rightarrow r = \sqrt{108} = 6\sqrt{3}$ cm Cancel $\pi$, multiply both sides by 4, then take the square root.

### Source trigonometry-and-measure-of-angles/lesson02.sa.html, card 05 "Arc length and sector area"

When an angle $\theta$ is measured in radians , the arc length $l$ swept out by that angle in a circle of radius $r$ is given by: $$l = r\theta$$ This formula is elegant because it follows directly from the definition of a radian: $\theta = \frac{l}{r}$. In degrees, the equivalent formula is $l = 2\pi r \times \frac{\theta}{360^\circ}$, messier, and easy to misapply. A sector is the "pizza slice" region bounded by two radii and an arc. Its area comes from taking the same fraction of the full circle's area ($\pi r^2$) as the angle is of a full revolution ($2\pi$ radians). When you simplify $\pi r^2 \times \frac{\theta}{2\pi}$, the $\pi$ cancels and you get: $$A = \frac{1}{2}r^2\theta$$

### Source trigonometry-and-measure-of-angles/lesson02.sa.html, card 06 "The area of a segment"

A segment is the region between a chord and the arc it cuts off. Draw the two radii to the ends of the chord and you have a sector, made up of the segment plus a triangle. So the segment area is the sector area minus the triangle area. The sector is $\tfrac{1}{2}r^2\theta$, and the triangle has two sides $r$ with the included angle $\theta$, so its area is $\tfrac{1}{2}r^2\sin\theta$. Subtracting gives $A = \tfrac{1}{2}r^2\theta - \tfrac{1}{2}r^2\sin\theta = \tfrac{1}{2}r^2(\theta - \sin\theta)$, with $\theta$ in radians.

### Source trigonometry-and-measure-of-angles/lesson02.sa.html, short answer questions Q2 and Q3

Q2. A piece of wire 40 cm long is bent to form the perimeter of a sector. If the radius of the sector is 12 cm, find the angle of the sector in radians. 3 MARKS auto-saved Analyse Band 5 Q3. Two sectors have the same area. Sector A has radius 6 cm and angle $\frac{\pi}{2}$ radians. Sector B has radius 4 cm. Find the angle of Sector B in radians.

### Source trigonometry-and-measure-of-angles/lesson02.sa.html, comprehensive answers

Drill 1: $l = 6 \times \frac{\pi}{3} = 2\pi$ cm Drill 2: $A = \frac{1}{2}(100) \times \frac{3\pi}{4} = \frac{75\pi}{2}$ cm$^2$ Drill 3: $45^\circ = \frac{\pi}{4}$ rad. $l = 12 \times \frac{\pi}{4} = 3\pi$ cm. $A = \frac{1}{2}(144) \times \frac{\pi}{4} = 18\pi$ cm$^2$. Drill 4: $\theta = \frac{8\pi}{4} = 2\pi$ rad (a full circle) Drill 5: $50\pi = \frac{1}{2}r^2 \times \frac{\pi}{2} \Rightarrow r^2 = 200 \Rightarrow r = 10\sqrt{2}$ cm Q1 (3 marks): (a) $l = 9 \times \frac{2\pi}{3} = 6\pi$ cm [1.5]. (b) $A = \frac{1}{2}(81) \times \frac{2\pi}{3} = 27\pi$ cm$^2$ [1.5]. Q2 (3 marks): Perimeter $= 2r + l = 40$ [1]. So $l = 40 - 24 = 16$ cm [0.5]. Then $\theta = \frac{l}{r} = \frac{16}{12} = \frac{4}{3}$ rad [1.5]. Q3 (3 marks): Area of A $= \frac{1}{2}(36) \times \frac{\pi}{2} = 9\pi$ cm$^2$ [1]. Set equal to area of B: $9\pi = \frac{1}{2}(16) \times \theta_B$ [1]. So $\theta_B = \frac{9\pi}{8}$ rad [1].

Other parts of this lesson (the fraction-of-a-revolution reasoning of the hook opens t08; this video starts from its answer) are deferred source context, not part of this video.

Read-only source: [trigonometric-identities-and-equations/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e36de2cf0f4ccc044f4dfd456cd23611c529dddf7656b51c50579ee7ab742c63`. Title: Review and Connections. Lesson id maths-adv-y11-m2-l15.

Data-step ids: `orient`, `two-moves-the-big-picture`, `what-you-ll-master`, `module-2-at-a-glance`, `common-traps`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometric-identities-and-equations/lesson10.sa.html, short answer "Arc, sector and segment"

A sector of a circle has radius $12$ cm and subtends an angle of $\dfrac{\pi}{3}$ radians at the centre. (a) Find the exact arc length. (b) Find the exact area of the sector. (c) Find the exact area of the segment cut off by the chord joining the two radii. [5 marks] auto-saved View comprehensive answer (a) $\ell = r\theta = 12 \times \dfrac{\pi}{3} = 4\pi$ cm [1]. (b) $A = \tfrac{1}{2}r^2\theta = \tfrac{1}{2} \times 144 \times \dfrac{\pi}{3} = 24\pi$ cm$^2$ [2]. (c) Triangle area $= \tfrac{1}{2}r^2\sin\theta = \tfrac{1}{2} \times 144 \times \dfrac{\sqrt{3}}{2} = 36\sqrt{3}$ cm$^2$ [1]. Segment $= 24\pi - 36\sqrt{3}$ cm$^2$ [1].

### Source trigonometric-identities-and-equations/lesson10.sa.html, "think to learn" item

A sector of radius $6$ cm has arc length $9$ cm. Find the angle at the centre in radians, and explain why no degree conversion is needed. Show answer Lock In → $\theta = \dfrac{\ell}{r} = \dfrac{9}{6} = 1.5$ radians. A radian is defined as arc length divided by radius, so the ratio already is the angle. You would only convert if the question asked for degrees.

Other parts of this lesson (the rest of the review lesson is used by t07, t14 and t15) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson02 we-1: l = 8 × π/4 = 2π cm. we-2: 60° = π/3, A = ½(100)(π/3) = 50π/3 ≈ 52.36 cm². we-3: 27π = ½r²(π/2) gives r² = 108, r = 6√3 cm.
- Drills: 2π cm; 75π/2 cm²; 45° = π/4, l = 3π cm, A = 18π cm²; θ = 8π/4 = 2π (a full circle); r² = 200, r = 10√2 cm. Short answers: Q1 l = 6π cm, A = 27π cm²; Q2 l = 40 − 24 = 16, θ = 16/12 = 4/3; Q3 9π = 8θ_B, θ_B = 9π/8.
- TI10: l = 4π cm, sector 24π cm², triangle ½(144) sin(π/3) = 36√3 cm², segment 24π − 36√3 ≈ 13.04 cm². Think-to-learn: θ = 9/6 = 1.5. Drill 3: l = 6 cm, A = 24 cm².
- Original major example: r = 10, θ = 2π/3: minor segment 100π/3 − 25√3 ≈ 61.42; major segment 200π/3 + 25√3 ≈ 252.74; major arc 40π/3 ≈ 41.89; major sector 200π/3. Degrees by mistake: 10 × 60 = 600 instead of 10π/3 ≈ 10.47, about 57.3 times too big.

Every value above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Substituting degrees into l = rθ (60° gives 600 instead of about 10.47).
- Writing A = r²θ (no half).
- Finding sin θ in degree mode for a segment.
- Leaving out the two radii from a sector's perimeter.
- Giving the minor segment when the question asks for the major one.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The arc straightening into a segment of length rθ beside the radius (t08's `RadiusWrap`), and the sector as a fraction of the disc (`SpinnerSectors`) with "θ/2π of πr²" written beside it.
- Segment = sector − triangle: the sector fills, the triangle (two radii, included angle θ) lifts out using t05's ½ab sin C, leaving the segment shaded; a toggle shows the major sector and major segment as the rest of the circle (new part `SectorSegment`).
- A radian-mode badge on every calculator line (`ScreenApp`), crossed in degree mode.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

A sector of a circle has radius 15 cm and perimeter 50 cm. Find the angle at the centre in radians, and the area of the sector.

**Worked answer:** Arc = 50 − 2 × 15 = 20 cm, so θ = l/r = 20/15 = 4/3. Area = ½ × 15² × 4/3 = 150 cm².

### Question 2

A chord of a circle of radius 6 cm subtends an angle of 2π/3 at the centre. Find the exact areas of the minor segment and the major segment.

**Worked answer:** Minor: ½ × 36 × (2π/3 − sin(2π/3)) = 18(2π/3 − √3/2) = 12π − 9√3 ≈ 22.11 cm². Major: 36π − (12π − 9√3) = 24π + 9√3 ≈ 90.99 cm².

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- A running track's bend: each bend is a half circle, so a lane's bend length is rπ, and outer lanes start further ahead (sport).
- A round cheesecake cut into slices: the top of a slice is a sector and its outer crust an arc (cooking).
- A round table with a drop leaf: the leaf is a segment cut off by a straight hinge line (home and DIY).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- Minor: lesson02 card 05 says satellite dish makers cut flat metal "into sectors and bent into a cone, then flattened into a parabola"; this is not how dishes are made. Drop the paragraph or replace it with a sector-shaped object such as a paper party hat.
- Minor: lesson02 trap 01 says a degree substitution makes the answer "wrong by a factor of $\frac{\pi}{180}$"; the wrong answer is $\frac{180}{\pi}$ (about 57.3) times too big. Minor: lesson02 Q1 and Q2 award half marks ([1.5], [0.5]).

Decisions for Claude:

- `cibf527c60` names major sectors and segments; the site states "a major segment is the circle minus the minor segment" but works no major example. The r = 10, θ = 2π/3 example is original.
- `ci56cda609` says "prove": keep the fraction-of-the-circle derivation as the proof, written in full.
- Drill 4's θ = 2π (a whole circle) is a good check of meaning, not a sector; keep or drop.
- Join: the next pack (math-a11-t10) opens on this video's final frame. Its start reads: Open on t09's handoff: a point going round t03's circle (radius 1), its height marked, and the question "plot the height against the angle?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
