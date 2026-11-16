# math-a11-t02: How do we solve right-triangle problems with bearings and elevation?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci61c6fa90` (Trigonometry with acute angles): Apply trigonometry to solve problems involving right-angled triangles in two dimensions, true and compass bearings, and angles of elevation and depression [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-t01: Exact sin, cos and tan of 30°, 45° and 60°. Stage 5 (Year 10): Solving right-angled triangles with SOH CAH TOA and inverse ratios on a calculator; angles of elevation and depression; compass directions.

**Prior video:** math-a11-t01.

**Start:** Open on t01's handoff: the site's ladder, 4 m long at 60° to the ground (lesson04 recall). The exact height 2√3 m comes from t01's sin 60°; then a calculator angle (52°) replaces the special angle.

**Stop:** Solve right-angled triangle problems in two dimensions: choose the ratio from the two sides involved, find a side or an angle, round only at the end; angles of elevation and depression measured from the horizontal and equal as alternate angles; true bearings (three digits, clockwise from north) and compass bearings (N40°E), converting between them and reversing a bearing; a two-leg journey whose turn makes a right angle (Pythagoras and tan). Journeys with a non-right turn need the cosine rule (t06). Angles beyond 90° are t03.

**Next:** math-a11-t03.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry-and-measure-of-angles/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `eb5f63ae4fb6a7a12aff8d5dc2bd7932455be8dad1228e7547f136e547b719c8`. Title: Trigonometric Ratios. Lesson id maths-adv-y11-m2-l04.

Data-step ids: `orient`, `the-three-ratios`, `what-you-ll-master`, `how-trigonometric-ratios-connect-angles`, `common-traps`, `drill-build-fluency`, `revisit-the-ladder-problem`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson04.sa.html, `we-1`

WORKED EXAMPLE · TWO RIGHT TRIANGLES, ONE HEIGHT From a point $A$ on level ground, $40$ m from the base of a building, the angle of elevation of the top of the building is $52^\circ$. (a) Find the height of the building, correct to one decimal place. (b) Point $B$ is a further $25$ m back from the building, in line with $A$. Find the angle of elevation of the top from $B$, to the nearest degree. 1 $\tan 52^\circ = \dfrac{h}{40}$ The height is opposite the $52^\circ$ angle and the $40$ m is adjacent to it, so the ratio linking them is tangent. 2 $h = 40 \tan 52^\circ = 51.197\ldots \approx 51.2 \text{ m}$ (a) Keep the unrounded value in your calculator for part (b), and round only what you write as the answer. 3 $\tan \theta = \dfrac{51.197\ldots}{40 + 25} = \dfrac{51.197\ldots}{65} = 0.7876\ldots$ From $B$ the adjacent side is the whole distance to the building, $65$ m, not $25$ m. 4 $\theta = \tan^{-1}(0.7876\ldots) = 38.2\ldots^\circ \approx 38^\circ$ (b) Check: $B$ is further away, so its angle of elevation must be smaller than $52^\circ$, and $38^\circ$ is. ✓

### Source trigonometry-and-measure-of-angles/lesson04.sa.html, step `orient`, recall

A ladder leans against a wall, making an angle of 60° with the ground. The ladder is 4 metres long. How high up the wall does the ladder reach? Try to solve this without a calculator. Find out → 0/5 QUESTS Learn 9 sections Practice MC + 3 short answer Review boss + jump challenge === STEP orient === 1 You’re here Orient and recall Meet the destination, bring back what you already know, and gather the terms and formulas this lesson leans on. Worksheets Practise this lesson Three printable worksheets that build from foundations to mastery, or build your own from any module’s questions. Build Foundations & guided practice Apply Application practice Master Mastery challenge Build custom Build your own from any module question 01 Recall, your gut answer first +5 XP warm-up A ladder leans against a wall, making an angle of $60^\circ$ with the ground. The ladder is 4 metres long. Without using a calculator , how high up the wall does the ladder reach?

### Source trigonometry-and-measure-of-angles/lesson04.sa.html, step `drill-build-fluency`, items 1 to 3

1 In a right-angled triangle, $\sin \theta = \frac{3}{5}$ and the hypotenuse is 20 cm. Find the opposite side. Show answer 12 cm Since $\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{3}{5}$, then $\text{opposite} = \frac{3}{5} \times 20 = 12$ cm. 2 In a right-angled triangle, $\tan \theta = 2$ and the adjacent side is 3 cm. Find the exact opposite side. Show answer 6 cm $\tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{x}{3} = 2 \Rightarrow x = 6$ cm. 3 A ramp makes a $15^\circ$ angle with the ground. The horizontal distance is 10 m. Find the ramp length (hypotenuse) to 1 decimal place. Show answer 10.4 m $\cos 15^\circ = \frac{10}{L} \Rightarrow L = \frac{10}{\cos 15^\circ} \approx 10.4$ m.

### Source trigonometry-and-measure-of-angles/lesson04.sa.html, short answer "Ramp problem"

A wheelchair ramp must have a gradient no steeper than $1:12$ (rise : run). If the ramp makes an angle $\theta$ with the ground, find $\tan\theta$ and hence $\theta$ to the nearest degree. auto-saved View comprehensive answer Working: A gradient of $1:12$ means $\frac{\text{rise}}{\text{run}} = \frac{1}{12}$. By definition: $$\tan\theta = \frac{1}{12}$$ Finding the angle: $$\theta = \tan^{-1}\left(\frac{1}{12}\right) \approx 4.76^\circ$$ Answer: $\tan\theta = \mathbf{\frac{1}{12}}$ and $\theta \approx \mathbf{5^\circ}$ (nearest degree). Note: this is a shallow angle. Many real ramps are around 4–5°, which is why they need to be long.

### Source trigonometry-and-measure-of-angles/lesson04.sa.html, step `revisit-the-ladder-problem`

A 4-metre ladder makes a $60^\circ$ angle with the ground. Using $\sin 60^\circ = \frac{\sqrt{3}}{2}$, the height is: $$\sin 60^\circ = \frac{h}{4} \;\Rightarrow\; h = 4 \times \frac{\sqrt{3}}{2} = 2\sqrt{3} \text{ metres}$$ To 1 decimal place: $2\sqrt{3} \approx 3.5$ metres . How does your gut answer compare? Did you think the height would be 2 m (half the ladder), 3 m, or something else? The actual answer is closer to 3.5 m, notice how the height is actually more than half the ladder length because $60^\circ$ is steeper than $45^\circ$.

Other parts of this lesson (cards 05 and 07 and drills 4 and 5 use the unit circle and the Pythagorean identity (t03, t04, t14); short answers 1 and 3 are quadrant work (t04)) are deferred source context, not part of this video.

Read-only source: [trigonometry-and-measure-of-angles/lesson09.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson09.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e0ae3bd8d9a5a543f04916f3b607ea3d619e08a94811cebe6ee3bba536af1b84`. Title: Bearings, Elevation and Depression. Lesson id maths-adv-y11-m2-l19.

Data-step ids: `recall-your-gut-answer-first`, `two-conventions-one-diagram`, `what-you-ll-master`, `true-and-compass-bearings`, `model`, `quick-fire-practice`, `revisit-the-plane-overhead`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, `we-1`

PROBLEM 1 · ELEVATION From a point $O$ on level ground, the angle of elevation to the top of a cliff is $35^\circ$. The horizontal distance from $O$ to the base of the cliff is 60 m. Find the height of the cliff to the nearest metre. 1 Draw the right-angled triangle: horizontal 60 m, angle $35^\circ$ at $O$ The cliff is vertical, so the triangle is right-angled at the base. 2 $\tan 35^\circ = \dfrac{h}{60}$ Opposite over adjacent, so use tangent. 3 $h = 60\tan 35^\circ \approx 42$ m Evaluate and round.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, `we-2`

PROBLEM 2 · CONVERTING AND REVERSING A BEARING A yacht sails on a compass bearing of S$32^\circ$W. Write this as a true bearing, and give the true bearing of the return journey. 1 S$32^\circ$W means start facing south, turn $32^\circ$ towards west South is $180^\circ$ and west is clockwise-further, so add. 2 True bearing $= 180 + 32 = 212^\circ$ Written with three digits as $212^\circ$. 3 Return: $212 - 180 = 032^\circ$ Subtract $180^\circ$ because adding would exceed $360^\circ$.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, `we-3`

PROBLEM 3 · TWO-LEG JOURNEY A ship sails 12 km on a bearing of $040^\circ$, then 9 km on a bearing of $130^\circ$. Find its distance from the starting point, to one decimal place. 1 Draw a new north line at the turning point, $P$ The second bearing is measured from north there, not from the first leg. 2 The interior angle at the turning point is $180^\circ - (130^\circ - 40^\circ) = 90^\circ$ From the parallel north lines and the two bearings. 3 $d^2 = 12^2 + 9^2 - 2(12)(9)\cos 90^\circ = 225$, so $d = 15.0$ km Cosine rule; here the angle is a right angle, so it reduces to Pythagoras.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, card 05 "True and compass bearings"

A true bearing is measured clockwise from north, starting at $000^\circ$, and is always written with three digits: north is $000^\circ$, east $090^\circ$, south $180^\circ$, west $270^\circ$. A compass bearing names a starting direction and turns towards east or west, such as N$40^\circ$E or S$25^\circ$W. To convert N$40^\circ$E to a true bearing, measure clockwise from north to get $040^\circ$. For a southerly compass bearing, work from $180^\circ$. S$25^\circ$W is $180 + 25 = 205^\circ$, and S$25^\circ$E is $180 - 25 = 155^\circ$. The reverse bearing. To return along a leg, add $180^\circ$ (or subtract, if that would exceed $360^\circ$). The reverse of $040^\circ$ is $220^\circ$.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, card 06 "Elevation and depression"

An angle of elevation is measured upward from the horizontal to your line of sight. An angle of depression is measured downward from the horizontal. The two horizontals, at your eye and at the object, are parallel. The line of sight cuts both, so the angle of elevation from the lower point equals the angle of depression from the higher point. They are alternate angles. Almost every question of this kind is a right-angled triangle once drawn, so SOH CAH TOA is usually enough. Mark the right angle and label which side you know. Depression is measured from the horizontal, not the vertical. A depression of $20^\circ$ means $20^\circ$ below horizontal, which is $70^\circ$ from vertical.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, short answer questions

Q1. From a window 18 m above the ground, the angle of depression to a car is $27^\circ$. Find the horizontal distance from the base of the building to the car, correct to one decimal place. (3 marks) auto-saved Apply Band 5 4 marks Q2. A hiker walks 8 km on a bearing of $055^\circ$, then 6 km on a bearing of $145^\circ$. Find how far she is from her starting point, and the true bearing she must walk to return directly. (4 marks) auto-saved Understand Band 3 2 marks Q3. Explain the difference between a true bearing and a compass bearing, and convert S$48^\circ$E to a true bearing.

### Source trigonometry-and-measure-of-angles/lesson09.sa.html, comprehensive answers

Practice 1: $360 - 65 = 295^\circ$. Practice 2: $\tan 22^\circ = \frac{40}{d}$, so $d = \frac{40}{\tan 22^\circ} \approx 99.0$ m. Practice 3: $118 + 180 = 298^\circ$. Practice 4: the horizontals at A and B are parallel and the line of sight is a transversal, so the two angles are alternate angles and therefore equal. Q1 (3 marks): The angle of elevation from the car equals the depression, $27^\circ$ (alternate angles) [1]. $\tan 27^\circ = \frac{18}{d}$ [1]. $d = \frac{18}{\tan 27^\circ} \approx 35.3$ m [1]. Q2 (4 marks): Interior angle at the turning point $= 180 - (145 - 55) = 90^\circ$ [1]. $d^2 = 8^2 + 6^2 - 2(8)(6)\cos 90^\circ = 100$, so $d = 10$ km [1]. For the return bearing, $\sin\theta = \frac{6}{10} = 0.6$, so $\theta \approx 36.9^\circ$ from the first leg reversed [1]. Reverse of $055^\circ$ is $235^\circ$, so the return bearing is $235 + 36.9 \approx 272^\circ$ [1]. Q3 (2 marks): A true bearing is measured clockwise from north and written with three digits; a compass bearing is measured from north or south towards east or west [1]. S$48^\circ$E $= 180 - 48 = 132^\circ$ [1].

Other parts of this lesson (card 07 (two-leg journeys with a non-right turn and the sine and cosine rules) is t06; we-3 and Q2 stay here because their turns are right angles) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson04 we-1: h = 40 tan 52° = 51.1977... ≈ 51.2 m; from B, tan θ = 51.1977/65, θ = 38.23° ≈ 38°. Ladder: 4 sin 60° = 2√3 ≈ 3.46 m (site "3.5 m").
- lesson04 drills: 3/5 × 20 = 12 cm; tan θ = 2 with adjacent 3 gives 6 cm; 10/cos 15° = 10.353 ≈ 10.4 m. Short answer 2: tan⁻¹(1/12) = 4.76° ≈ 5°.
- lesson09 we-1: 60 tan 35° = 42.01 ≈ 42 m. we-2: S32°W = 212°, return 032°. we-3: interior angle 180° − (130° − 40°) = 90°, d² = 144 + 81 = 225, d = 15.0 km.
- lesson09 answers: N65°W = 295°; 40/tan 22° = 99.00 m; reverse of 118° is 298°; Q1 18/tan 27° = 35.33 ≈ 35.3 m; Q2 d = 10 km, return bearing 271.87° ≈ 272° (checked by coordinates: the finish is on bearing 091.87° from the start); Q3 S48°E = 132°; south-west = 225°.

Every example above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Measuring a depression angle from the vertical instead of the horizontal (20° depression is 70° from the vertical).
- Writing 45° for a true bearing instead of 045°, or measuring anticlockwise.
- Using one north line for a two-leg journey; the second bearing needs a new north line at the turning point.
- Using the gap (25 m) instead of the whole distance (65 m) as the adjacent side in a two-triangle problem.
- Rounding 51.2 m before the second part, which can shift the next answer.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A coded right-triangle board: sides tagged opposite, adjacent and hypotenuse relative to the marked angle (role colours), then the ratio card "two sides involved → which ratio" with the matching pair glowing (`WorkingBoard` with `GivensCard`).
- Elevation and depression: two parallel horizontals and one sight line, the two alternate angles lighting together (new part, see kit needs).
- A bearing rose: north line, a clockwise arc sweeping from 000° to the bearing with a three-digit readout, and a second north line drawn at the turning point of a journey (new part `BearingRose`).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".

## 6. Two original candidate practice questions

### Question 1

From the top of a vertical cliff 30 m high, the angle of depression to a buoy is 12°. Find the horizontal distance from the base of the cliff to the buoy, to the nearest metre.

**Worked answer:** The angle of elevation from the buoy is also 12° (alternate angles). tan 12° = 30/d, so d = 30/tan 12° = 141.1, about 141 m.

### Question 2

A hiker walks 5 km on a true bearing of 070°, then 12 km on a true bearing of 160°. (a) Explain why the path turns through a right angle. (b) Find the hiker's distance from the start and the true bearing of the finishing point from the start, to the nearest degree.

**Worked answer:** (a) 160° − 070° = 90°, so the interior angle at the turn is 180° − 90° = 90°. (b) d = √(5² + 12²) = 13 km. At the start, tan θ = 12/5, θ = 67.4°, measured clockwise from the first leg, so the bearing is 070° + 67.4° ≈ 137°.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).

## 7. Everyday anchors

- An orienteering leg: run on a compass bearing from one control flag to the next (sport).
- A phone's compass app reading 145°, the site's hook number, shown as a true bearing on the dial (phones).
- A roof's pitch: a 4 m half-span and a pitch angle give the height of the ridge with tan (building and DIY).

Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):

- `trigonometry-and-measure-of-angles/lesson04.sa.html`, step `revisit-the-ladder-problem`. Old text: "notice how the height is actually more than half the ladder length because $60^\circ$ is steeper than $45^\circ$." The height is half the ladder at 30° (sin 30° = 1/2), so the reason is the comparison with 30°, not 45°. Correction: "the height is more than half the ladder length because $60^\circ$ is steeper than $30^\circ$, the angle at which the height is exactly half."
- `trigonometry-and-measure-of-angles/lesson04.sa.html`, card 09, trap 2. Old text: "When using $\cos^{-1}x$ or $\sin^{-1}x$ on a calculator, the answer is always in the principal range. If the triangle is in a different quadrant, you may need $180^\circ - \theta$ or $360^\circ - \theta$." and the summary "$\cos^{-1}$ and $\sin^{-1}$ give principal values only, check the quadrant if the angle could be obtuse". In a triangle, $\cos^{-1}$ already returns any angle from 0° to 180°, obtuse ones included, and no triangle angle is reflex; only $\sin^{-1}$ can hide an obtuse answer. Correction: "In a triangle, $\cos^{-1}$ gives the angle directly, acute or obtuse. $\sin^{-1}$ gives only the acute angle, so when the angle could be obtuse, also test $180^\circ - \theta$ (see the ambiguous case)."
- Minor: lesson04 short answer 2 uses a 1:12 wheelchair ramp; the Australian standard (AS 1428.1) sets 1:14 for ramps, which the w10 pack also uses. Minor: lesson04 card 02 says "There are only three trigonometric ratios", but sec, cosec and cot are side ratios too (t11). Minor: lesson09 card 02 "marks are lost without it" (three-digit bearings) is an unsupported marking claim. Minor: lesson09 Q2's answer measures 36.9° "from the first leg reversed"; the 36.9° is the angle at the start between the first leg and the line to the finish (055° + 36.9° = 091.9°, reversed 271.9°).

Decisions for Claude:

- Both site journeys (we-3 and Q2) turn through exactly 90°, so they are right-triangle problems and belong here; a journey with a non-right turn is original teaching in t06.
- Compass bearings: the site converts N40°E, S25°W, S32°W, N65°W and S48°E; keep at least one southerly conversion because adding or subtracting from 180° is the step students miss.
- Rounding: carry 51.197... into part (b) of we-1 (site's own advice).
- Join: the next pack (math-a11-t03) opens on this video's final frame. Its start reads: Open on t02's handoff: an angle of 120° drawn from the positive x-axis with no right-angled triangle that contains it, and the question "sin 120° = ?".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
