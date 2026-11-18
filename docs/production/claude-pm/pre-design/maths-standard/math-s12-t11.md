# math-s12-t11: Which rule fits a practical problem with a non-right-angled triangle?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `cif644212f`: Solve practical problems involving Pythagoras’ theorem, the trigonometry of right-angled and non-right-angled triangles, angles of elevation and depression, and true bearings and compass bearings [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered. Shared with t03 and t05; this video owns the non-right-angled part and the mixed problems.

Standard 1: no matching point (Standard 1's practical point `cid1949529` is right-angled only and is owned by t03 and t05). This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Playlist order 61 (ruling 46 positions). **Last Trigonometry video.** Both courses continue to math-s12-b01 (Standard 1 from t05).

**Entry knowledge:** math-s12-t03 (`cif644212f`: elevation and depression), t05 (bearings in triangles, north lines at every point), t06 and t07 (`ci26620302`, `ci50b6961b`, `ci6b083940`: the sine rule), t08 (`ci431f9599`, `ci3e1d3a01`: the cosine rule), t09 (`ci30a047f1`: the area rule).

**Prior video:** math-s12-t10.

**Start:** t10's final frame (proposed): four small cards from the strand (a right-angled roof, a river, a hinged paddock, a radial survey) fanned on the board with "which rule?" over them.

**Stop:** A decision path, said as questions: Is there a right angle? (Pythagoras or SOH CAH TOA.) If not: is there a side with its opposite angle known? (Sine rule.) If not: two sides and the angle between, or three sides? (Cosine rule.) An area? (½ab sin C with the angle between.) Drawing the triangle from words first (north lines at every point for bearings; the horizontal for elevation); turning bearings into angles inside the triangle (the bearing back at a turning point); multi-step problems that use one result in the next (a cosine-rule side, then the sine rule for an angle, then a bearing; a sine-rule distance, then tan for a height). Final frame hands to math-s12-b01.

**Next:** math-s12-b01, "When do we need bivariate data, and which variable is independent?" (outline row 62; the next strand in the recommended order, ruling 28).

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at 5d74a627):

- [trigonometry/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson07.sa.html), SHA256 `f5b3fa68203801b3bf3a6143e88e7e2b1b83f6c65558b093d19799c4b7193809`. Sections used: `choose-your-rule` (card 05 "Which rule, decided in one line"), `drill-the-cosine-rule` (the matching task), `practise-the-cosine-rule` (Q3).
- [trigonometry/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson08.sa.html), SHA256 `a5110b3ea364f9718647b9c37bbf0cd1fc8cb96e995362672314aec84ddc43f9`. Sections used: `orient-to-radial-surveys` (card 03 "Combine bearings, elevation and both triangle rules in one problem"), `practise-radial-surveys` (Q3), `finish-compass-radial-surveys` (the boss-battle description, as the strand's list of tools).
- Also lesson06 `practise-the-sine-rule` Q3 (bearings to a sine rule) from [trigonometry/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson06.sa.html), SHA256 `838dc6e4c296b0ab2fbc03de12083acee190e4cbd7b5d30b306856eadeb46f13`.

### Source lesson07, card 05, matching task and Q3

Card 05: "Which rule, decided in one line. If you can see a side and the angle opposite it, use the sine rule. If you cannot, you were almost certainly given SAS or SSS, and that is the cosine rule. For an area, look for two sides with the angle between them, and use the area rule rather than hunting for a height." Matching task: "Two sides and the angle between them, find the third side / All three sides, find an angle / Two sides and the angle between them, find the area / A side, the angle opposite it, and one more angle" with "Sine rule / Cosine rule, angle form / Cosine rule, side form / Area rule, one half ab sin C". Q3: "A ship leaves port $P$ and sails $24\text{ km}$ on a bearing of $042°$T to a point $Q$. It then sails $31\text{ km}$ on a bearing of $128°$T to a point $R$. Find the distance $PR$ correct to the nearest $0.1\text{ km}$, and the bearing of $R$ from $P$ correct to the nearest degree." Answer: "angle $PQR = 222° - 128° = 94°$", "$PR = 40.5068 = \mathbf{40.5\text{ km}}$", "$\angle QPR = 49.77°$", "Angle $PQR = 94°$ is obtuse and a triangle can hold only one obtuse angle, so $\angle QPR$ must be the acute value and no ambiguity arises.", "$042° + 49.77° = 91.77°$, which is $\mathbf{092°\text{T}}$".

### Source lesson08, Q3

"From a point $P$ the bearing of a communications tower $T$ is $040°$T. A second point $Q$ lies $500\text{ m}$ due east of $P$, and from $Q$ the bearing of $T$ is $325°$T. (a) Find the distance $PT$, correct to the nearest $0.1\text{ m}$. (b) From $P$, the angle of elevation to the top of the tower is $8°$. Find the height of the tower". Answer: "$\angle TPQ = 090° - 040° = 50°$", "$\angle TQP = 325° - 270° = 55°$", "$\angle PTQ = 180° - 50° - 55° = 75°$", "$PT = \dfrac{500\sin 55°}{\sin 75°} = ... = \mathbf{424.0\text{ m}}$", "height $= PT\tan 8° = 424.0237 \times 0.140541 = \mathbf{59.6\text{ m}}$".

### Source lesson06, Q3

"From point $P$, a surveyor sights $Q$ on a bearing of $040°$T and $R$ on a bearing of $100°$T. She measures $PQ = 500\text{ m}$ and the angle $PQR = 85°$. Find $QR$" (755 m).

## 3. Recalculation

- lesson07 Q3: PR² = 1640.7976, PR = 40.5068, so 40.5 km; angle QPR = 49.7684°; bearing 91.77°, so 092°T.
- lesson08 Q3: PT = 424.0243, so 424.0 m; height 59.5927, so 59.6 m.
- lesson06 Q3: 754.93, so 755 m.
- Question 1: angle BPQ = 240° − 170° = 70°; BQ² = 13.3864, BQ = 3.6587, so 3.66 km; area ½ × 2.8 × 3.5 × sin 70° = 4.6045, so 4.60 km². Question 2: angles 65°, 40°, 75°; AM = 800 sin 40° ÷ sin 75° = 532.3702, so 532.4 m; height = AM tan 4° = 37.2269, so 37.2 m.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reaching for SOH CAH TOA in a triangle with no right angle.
- Using the sine rule without a matched pair, or the cosine rule with an angle that is not between the two sides.
- At a turning point, using the bearing (128°) as the angle inside the triangle instead of the difference with the bearing back (222° − 128° = 94°).
- Rounding an intermediate side before using it again (carry the calculator value).
- Giving the triangle's angle (49.77°) as the bearing without adding the first leg's bearing.
- Not drawing the diagram before choosing a rule.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A decision path drawn as three gates with picture icons (right angle? side with its opposite angle? two sides and the angle between, or three sides?) and the rule each opens; each worked step lights its gate.
- A two-leg journey with a turn that is not 90°: north lines at P and Q, the bearing back at Q (222°) and the angle inside (94°) shown as a difference of two arcs; then the cosine rule for PR, the sine rule for angle QPR and the bearing as 042° + 49.77°.
- A tower sighted from two points (top view triangle, then the side view right-angled triangle for the height), the sine-rule result carried across as the base of the elevation triangle.
- Final frame (b01's opening; t05's right panel at full width): suggested, a beach kiosk's board pairing each day's top temperature with ice creams sold, a grey chip "Trigonometry: done" and chips "Next: bivariate data" and "?". Provisional until the b01 pack exists; the b01 designer confirms (ruling 42 pattern).

Advanced reuse (visual parts only): `BearingJourney` (legs, norths, between, sweeps, home), `ElevationView`, `StudioTriangle` with `pairs` and `triSAS` (a11-trig-bearings.tsx, a11-trig-triangle.tsx). Plates: the farm or harbour top views from t04 and t05; a communications mast (new `ms12-` plate, or `maths/ma11-phone-tower-v1.png` after inspection; Advanced t07's anchor is a phone tower and highway, so use the plate only as a mast picture, not that story); `physics/phys-y11-drone-top-v1.png` for Question 1. Kit needs: a **RuleChooser** card (the three gates, each lighting with a tick), small and reusable by a later optional practice video.

## 6. Two original candidate practice questions

### Question 1

A survey drone flies from its base B for 2.8 km on a bearing of 060°T to a point P. It then turns and flies 3.5 km on a bearing of 170°T to a point Q. (a) Show that angle BPQ is 70°. (b) Find the distance BQ, correct to two decimal places. (c) Find the area of triangle BPQ, correct to two decimal places.

**Worked answer:** (a) At P, the bearing back to B is 060° + 180° = 240°T and the bearing to Q is 170°T, so angle BPQ = 240° − 170° = 70°. (b) Two sides and the angle between them: BQ² = 2.8² + 3.5² − 2(2.8)(3.5) cos 70° = 13.386, so BQ = 3.66 km. (c) A = ½ × 2.8 × 3.5 × sin 70° = 4.60 km².

### Question 2

From a point A, the bearing of a communications mast M is 025°T. A point B is 800 m due east of A, and from B the bearing of the mast is 310°T. (a) Find the angles of triangle AMB. (b) Find the distance AM, correct to the nearest 0.1 m. (c) From A, the angle of elevation of the top of the mast is 4°. Find the height of the mast, correct to the nearest 0.1 m.

**Worked answer:** (a) Angle MAB = 090° − 025° = 65°; at B the bearing back to A is 270°T, so angle MBA = 310° − 270° = 40°; angle AMB = 180° − 65° − 40° = 75°. (b) AB = 800 m faces the 75° angle (the matched pair); AM faces 40°: AM = 800 sin 40° ÷ sin 75° = 532.4 m. (c) height = 532.37 × tan 4° = 37.2 m.

Only the question goes on the card (worded, without a diagram, as HSC questions often are; the feedback draws it). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "angle 110° (170° − 060°)", crossed, "the angle inside at P is between the way back (240°) and the way on (170°)"; for Question 2 (b): "800 sin 65° ÷ sin 75°", crossed, "AM faces the angle at B, 40°"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A survey drone's flight with a turn:** two legs on bearings that do not meet at 90° (technology; the drone from t03 and t05, now off the right angle).
- **A harbour ferry's dog-leg route:** the site's ship (24 km on 042°T, 31 km on 128°T) as a ferry chart, 40.5 km on 092°T straight (travel; the ferry from t04).
- **Fixing a mast's position from two points 800 m apart** and then its height from an angle of elevation (towns and phone coverage; a sine rule and a tan in one problem).

Varied everyday contexts (technology, travel, towns). Repeat check (grepped 18 November 2026): Advanced t07's anchor is a phone tower's range along a highway (the ambiguous case), so the mast here is a position-and-height problem with a different picture; Advanced t06's yacht journey home is not used (the site's ship becomes a ferry on a coded chart); "survey drone" has no hits. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in the parts used here.

Decisions for Claude:

- **One decision path, three gates:** the site's card 05 line becomes the video's spine; every example says which gate it passed.
- **Two worked problems only:** one bearings problem with a non-right turn (site lesson07 Q3 or Question 1) and one sine rule then tan problem (site lesson08 Q3 or Question 2). The rest is practice.
- **Final frame and handoff (ruling 28):** b01's opening picture, identical to t05's Standard 1 panel (section 5). Narration hands over in one sentence: from triangles to two sets of numbers measured together.
- **Pace: fits** (8 to 9 minutes with two worked problems and two attempts).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
