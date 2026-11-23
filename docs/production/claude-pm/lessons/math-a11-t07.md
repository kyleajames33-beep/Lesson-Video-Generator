# Maths A11 T07: When can the sine rule give two triangles, and which rule fits a problem? The ambiguous case by construction and in a graphing app, the angle-sum test, the condition b sin A < a < b, and choosing between the sine and cosine rules (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Designer's decisions for t01 to t08: `../checks/root-decisions-maths-a11-t01-t08.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,928 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 533 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov 2026): learning review resolved

Review: `../checks/m-a11-t07-learning-review.md` (summary `../checks/m-a11-t01-t08-learning-review-summary.md`), with root's resolution brief of 17 Nov (decision 6) and the t06 review's finding 1, which changes this video's opening frame. Resolution log: `../checks/m-a11-t01-t08-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 5 (b sin A is not derived): **accepted**, reviewer's narration. "It makes a right-angled triangle with hypotenuse b, and the perpendicular is opposite A, so it's b sine A". Visual: on "right-angled triangle" the small triangle A, C and the foot of the perpendicular tints, b (violet) as its hypotenuse, hand tag "opposite A: b sin A".
2. Optional, scene 5 (link to t05's acute angle): **applied**, reviewer's sentence, placed before "So when A is acute": "Last time, B faced the shorter side, so it had to be acute. Here B faces nine, the longer side, so it can be obtuse too." t05 Revision 2 now states "the shorter side faces the smaller angle" in general, so the link lands on a stated fact.

Opening frame (t06 finding 1): t06's final frame now draws the point B on the highway 10.84 km from A, a dashed amber line "7 km" from B to C and the angle "55.7°" (violet) at B. The boundary and scene 1 list them; on "twice" that B is relabelled B₁ (where you drive out of coverage), and the circle reveals B₂ (where you drive in). Open decisions 1 (kilometres) and 2 (a = b unspoken) are closed as the reviewer advised. Length: 5,928 characters (Revision 1: 5,710), about 533 s with holds and about 440 s of speech before the notes, both under the 570 s cap. Changed values were rechecked with SymPy (`work/brief-resolve-t/verify.py`). Nothing recorded; human listening pending.

Scope: sixty-fourth video of Year 11 Mathematics Advanced (2024), outline order 64, Trigonometry and measure of angles (Trigonometry with angles of any magnitude). Pre-design pack: `../pre-design/maths-a11/math-a11-t07.md` (brief 243). Site lessons (read through the pack's quotations, read only): `trigonometry-and-measure-of-angles/lesson08.sa.html` (card 05 why the inverse sine hides a solution; card 06 the angle-sum test and the arc construction; card 07 choosing a rule; `we-1`, a = 7, b = 9, A = 40°, B = 55.7° or 124.3°; `we-2`, a = 12, b = 5, A = 70°, B ≈ 23° only; all with their numbers) and `lesson07.sa.html` (`we-3`, b = 9, c = 12, A = 47°, with site correction S11-15). Route entry: `math-a11-t07` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; the painted phone tower from t06's handoff, a coded graphing-app screen, and a painted cake tin for the handoff; every map, arc, triangle and working row coded.

Owner rules applied: as t01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (phones and travel: a highway through a phone tower's signal), Australian spelling, no em dashes, "zero point" decimals, angles always spoken with "degrees", conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Trigonometry and measure of angles, Trigonometry with angles of any magnitude), quoted from `../../programme/maths-a11-route-inputs-4.json`. `ci5fb5a13c` is shared with t05 and t06; this video owns the ambiguous case and choosing a rule:

- `ci44ad375d`: "Use graphing applications or geometric construction to examine the ambiguous case of the sine rule, in which there are two possible solutions for an angle, and the condition for it to arise"
- `ci5fb5a13c`: "Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

**Boundary:** starts from t06's final frame exactly (the coded map: town A, the phone tower `ma11-phone-tower-v1.png` at C, "AC = 9 km", the highway at "40°" to AC, chip "signal reaches 7 km", a dot "B" on the highway 10.84 km from A, a dashed amber line "7 km" from B to C, and the angle "55.7°" (violet) at B, the calculator strip "sin B = 9 sin 40° ÷ 7 ≈ 0.8264 → B ≈ 55.7°", chips "the only triangle?", "Next: two triangles?", "?"). Recalls t05 (the sine rule; "B must be acute" when it faces the shorter side), t06 (the cosine rule; largest angle faces the longest side), t04 (θ and 180° − θ share a sine) and t03 (sine as a point's height) in a phrase or chip each. Teaches: two triangles from the same two sides and non-included angle, seen as the signal circle cutting the highway twice; why inverse sine returns one angle and the partner 180° − B shares its sine, shown in a graphing app (`ci44ad375d`, graphing application); the angle-sum test; a case with one triangle (`we-2`); the construction (an arc of radius a swung from C onto the ray from A) giving none, one or two triangles, and the condition b sin A < a < b for acute A (`ci44ad375d`, construction and condition); choosing a rule from the data, with lesson07 `we-3` (corrected) where the cosine rule creates a pair (`ci5fb5a13c`, choosing). Stops at triangles. Not taught: radians (t08); trig equations (t15a, t15b).

## Decisions

- **Anchor: a straight highway through a phone tower's signal range (painted plate, live; t06's handoff).** A driver enters the signal and later leaves it: two points on the highway, both 7 km from the tower, so the same 9 km, 7 km and 40° make two triangles. The two answers mean something (where coverage starts and ends: about 2.95 km and 10.84 km from town), and the "none" and "one" cases are a road that misses the signal or just grazes it. Phones and travel; replaces the pack's tent guy rope, which needs an awkward plan view. The site's `we-1` numbers are kept in kilometres (decisions file, departure 7). Year 11's other phone contexts (w21's download time, the Year 12 handset plates) are different ideas.
- **Graphing applications (syllabus wording).** A coded graphing-app screen (`ScreenApp` with `AppGraph`) plots y = sin x for 0° ≤ x ≤ 180° and the line y = 0.8264, with an input bar and slider for the level; the two crossings are marked by the app's intersection points. Unbranded; the narration says "in a graphing app".
- **Simulations (standard item 3).**
  1. **Signal circle** (scene 1): the circle of radius 7 km draws round the tower; a car marker (a coded dot) drives along the highway, the road turning teal while inside the signal; the entry and exit points B₁ and B₂ ring, and both triangles A C B₁ and A C B₂ draw.
  2. **Level line in the app** (scene 2; `StudioLevelLine` with `crossingsOf`): the line y = 0.8264 crosses the sine curve twice, readouts "55.7°" and "124.3°", with a bracket "180° − 55.7°" between them; the app's slider moves the level and the two crossings move symmetrically about 90°.
  3. **Arc construction** (scene 5; `StudioTriangle` SSA mode with `ParameterSlider`): angle A and side b fixed; an arc of radius a swings from C onto the ray from A while a slider moves a from 4 to 11; a readout counts "triangles: 0, 1, 2, 1"; the perpendicular b sin A (dashed) and the length b mark the two thresholds.
- **Colour roles (t05 to t07, any triangle).** Opposite pairs colour-matched: a and A **amber**, b and B **violet**, c and C **blue**; the partner angle 180° − B a lighter violet; the perpendicular b sin A dashed grey; answer green; mistake red, crossed slips only. The signal circle amber (it has radius a).
- **Large type, handwritten voice.** As t05. Hand tags: "same 9, 7 and 40°", "in, then out", "two angles, one height", "180° − 55.7°", "calculator gives the acute one", "room for a third angle?", "both real", "no room", "shortest reach: b sin A", "opposite A: b sin A", "faces the longer side: can be obtuse", "misses", "touches", "crosses twice", "behind the town", "b sin A < a < b", "pair present: sine rule", "SAS or SSS: cosine rule", "now a pair", "keep a unrounded", "b < c: B acute".
- **Stage changes (standard item 2).** t06's map and the signal circle (1); the graphing app (2); the angle-sum test and distances (3); g01 board, `we-2` (4); the construction and the condition (5); the decision tree and `we-3` (6); framed card (7); question cards (8 to 11); the cake tin (12); key notes (13).
- **Worked examples (g01 layout).** 3: `we-1`, both triangles valid; distances along the highway ≈ 2.95 km and 10.84 km (original). 4: `we-2`, one triangle, B ≈ 23.1° (156.9° rejected); crossed "keeping 156.9°". 6: lesson07 `we-3` corrected (S11-15): a ≈ 8.814, B ≈ 48.3°; crossed "48.4° from a = 8.8".
- **Memory aid.** Framed card: "Sine rule for an angle? Test its partner, 180° minus the answer, against the angle sum." Second line: "Two sides and the angle between, or three sides: cosine rule, never ambiguous."
- **Visual surprise.** The road turns teal as the car enters the signal and back to grey as it leaves: two exits from one circle, and the calculator only reported one.
- **Site notes (pack section 8; S11-15 and minor items).** lesson07 `we-3` is used with S11-15 (the form a² = b² + c² − 2bc cos A; a kept unrounded; B = 48.3°, not 48.4°). lesson08's "every value between 0 and 1 exactly twice" is said here as "every height below the top" (strictly between 0 and 1). The arc "may cross the ray from A twice", not "the base line" (minor item). The condition b sin A < a < b is stated, which the site omits (`ci44ad375d` gap). Card 05's 40° and 140° example is not used.
- **Plain meanings at first use.** Ambiguous ("two possible answers from the same information"); partner angle ("a hundred and eighty minus the calculator's angle, which has the same sine"); non-included angle ("an angle that isn't between the two known sides"); construction ("drawing it with a ruler and compass").
- **Attempts (pack questions).** A1: A = 32°, a = 6 cm, b = 10 cm: b sin A ≈ 5.30 < 6 < 10, so two triangles; C ≈ 86° or 30°; crossed "86° only". A2: A = 50°, b = 12 cm: two triangles when 9.2 < a < 12 (12 sin 50° ≈ 9.19); crossed "a > 9.2" (no upper bound).
- **Mistake scene:** none separate. Accepting the calculator's acute angle only (1, A1 crossed); keeping an impossible partner (4 crossed); rounding a side before reuse (6 crossed); SAS treated as ambiguous (6, the tree); the missing upper bound (A2 crossed).
- **Cause chain taught, in order:** (1) a circle of radius a round C can cut a line from A twice, so two triangles can share a, b and A (1); (2) between 0° and 180°, θ and 180° − θ have the same sine (the same height), and inverse sine returns only the acute one (2); (3) the partner gives a real triangle only if it leaves room for a third angle (3, 4); (4) the arc reaches the ray only if a is at least the shortest distance b sin A, and crosses it twice in front of A only if a < b (5); (5) with a complete pair the sine rule works, but finding an angle can be ambiguous; two sides with the included angle, or three sides, fix one triangle, so the cosine rule is never ambiguous (6).
- **Entry knowledge (route):** t05 (the sine rule); t06 (the cosine rule, which is never ambiguous); t04 (sin(180° − θ) = sin θ).
- **What later videos rely on.** t15a reuses "two angles share a height" to find both solutions of sin x = k; the practice video for the strand uses the decision tree.
- **Handoff (to math-a11-t08, "Why is a radian the natural unit for angles?").** Scene 12: the painted cake tin `ma11-cake-tin-v1.png` (top view, 760 px, left of centre) with a coded blue angle at its centre (two radii, ink) and the arc it cuts off (teal); beside the tin, a coded length of kitchen string (ink-brown, 6 px) exactly one radius long, labelled "string = radius"; chips "360° a turn: a choice", "measure with the radius?", "Next: radians" and "?". This is t08's opening frame (the t08 pack's start: a circle with an angle at its centre and an arc, and "360 is a choice").
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) `we-1`: sin B = 9 sin 40°/7 = 0.826441; B₁ = 55.7349°, B₂ = 124.2651°. C₁ = 84.265°, c₁ = 7 sin C₁/sin 40° = 10.8356 km; C₂ = 15.735°, c₂ = 2.95324 km. b sin A = 5.78509.
  (b) `we-2`: sin B = 5 sin 70°/12 = 0.391540; B = 23.0503° ≈ 23.1°; partner 156.95°; 70° + 156.95° > 180°.
  (c) `we-3` corrected: a² = 81 + 144 − 216 cos 47° = 77.6884; a = 8.81410; sin B = 9 sin 47°/8.81410 = 0.74678; B = 48.312° ≈ 48.3°. With a = 8.8: sin B = 0.74798, B = 48.415° ≈ 48.4°.
  (d) Construction thresholds (A = 40°, b = 9): none for a < 5.785; one right-angled at a = 5.785; two for 5.785 < a < 9; one for a ≥ 9 (at a = 9 the second point is A itself, which is no triangle).
  (e) A1: 10 sin 32° = 5.2992; sin B = 0.88320; B = 62.031° or 117.969°; C = 85.969° ≈ 86° or 30.031° ≈ 30°. A2: 12 sin 50° = 9.1925.
  (f) Pronunciations: "b sine A"; "zero point eight two six four"; "fifty-five point seven"; "a hundred and twenty-four point three"; "eight point eight one four".
  (g) Windows: map 1 km = 70 px; app window x 0° to 180°, y −0.2 to 1.2.

Main question: *When can the sine rule give two triangles, and which rule fits a problem? Where does the highway enter and leave the signal?*
Entry knowledge (t05, t06, t04): the sine rule; the cosine rule; sin(180° − θ) = sin θ.
Stops after: the ambiguous case by construction and graphing app; the angle-sum test; b sin A < a < b; choosing a rule. No radians.
Handoff: math-a11-t08: "a full turn is 360°, but that's a choice: is there a natural way to measure an angle, with the circle's own radius?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): a and A amber; b and B violet (the partner lighter violet); c and C blue; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: in, then out
> Here's the town, the tower nine kilometres away, and the highway leaving at forty degrees. Now draw the edge of the signal, a circle of radius seven kilometres around the tower. It cuts the highway **twice**. Once where you drive into coverage, and once where you drive out of it. Both points are seven kilometres from the tower, so both make a triangle with a side of nine, a side of seven, and the same forty degree angle at the town. That's two different triangles from the same three **measurements**. So when can the sine rule give two triangles, and which rule fits a **problem**?

Visual: opens on t06's final frame exactly (town A, the tower at C, "AC = 9 km", the highway at "40°", "signal reaches 7 km", the point B 10.84 km along the highway with its dashed amber "7 km" line to C and "55.7°" (violet) at B, the calculator strip "B ≈ 55.7°", chips "the only triangle?", "Next: two triangles?", "?"). On the first sentence the "Next" chips fade. On "draw the edge of the signal" the amber circle of radius 7 km draws round C. On "twice" a coded car dot drives along the highway from A; the road turns teal on entering the circle (point B₂ rings, light violet) and grey on leaving (the opening frame's B, relabelled B₁, rings, violet), hand tag "in, then out". On "Both points" the two triangles A C B₂ and A C B₁ draw over each other, sides "9" (violet), "7" (amber, twice), angle "40°" (amber) shared; hand tag "same 9, 7 and 40°". On "measurements" the two triangles separate side by side. On "problem" heading "The ambiguous case, and choosing a rule", and the question chip "Two triangles?" moves to the top right.

### 2. why the calculator gave one
> So why did the calculator give only one? Sine B is nine sine forty degrees over seven, about zero point eight two six four. Sine is the height of a point on a circle, and between zero and a hundred and eighty degrees, every height below the top comes up twice: at theta, and at a hundred and eighty minus **theta**. In a graphing app, plot y equals sine x from zero to a hundred and eighty degrees, and the line y equals zero point eight two six four. It crosses **twice**, at about fifty-five point seven degrees, and about a hundred and twenty-four point three **degrees**. Inverse sine has to give one answer, so it gives the acute one. The other is its partner, a hundred and eighty minus fifty-five point seven degrees.

Visual: stage change: a small grey chip "t04: sin(180° − θ) = sin θ" at the top left beside a mini circle with two points at the same height (t03's picture). The graphing app screen (`ScreenApp`, 1,150 × 720 px) at the right with an input bar "y = sin x" and "y = 0.8264", x from 0° to 180°. On "theta" the mini circle's two rays light, hand tag "two angles, one height". On "twice" the level line draws and the app marks both intersections. On "degrees" readouts "55.7°" (violet) and "124.3°" (light violet), a bracket between them "180° − 55.7°", hand tag "180° − 55.7°". On "has to give one answer" the calculator strip from the opening flashes "55.7°" only, hand tag "calculator gives the acute one". The app's slider then moves the level up and down once (simulation 2), the two crossings sliding symmetrically about 90°.

### 3. does the partner fit?
> Does the partner fit in a triangle? Add it to the angle we were given. Forty plus a hundred and twenty-four point three is a hundred and sixty-four point three degrees. That's under a hundred and eighty, so there's room for a third angle, and both triangles are **real**. For each one, find the third angle, then the sine rule gives the distance along the highway. Coverage starts about two point nine five kilometres from town, and ends about ten point eight four kilometres **out**. So you'd have signal for roughly eight kilometres of highway.

Visual: clear change: the map returns at the left with both triangles. Rows at the right, 52 px: "40° + 124.3° = 164.3° < 180°" with hand tag "room for a third angle?", then a tick and hand tag "both real". On "real" two small tables: "B = 55.7°: C = 84.3°, c = 7 sin 84.3° ÷ sin 40° ≈ 10.84 km" and "B = 124.3°: C = 15.7°, c = 7 sin 15.7° ÷ sin 40° ≈ 2.95 km". On "out" the two distances mark along the highway (green frames), the teal stretch between them labelled "≈ 7.9 km of signal".

### 4. sometimes only one
> The partner doesn't always fit. In triangle ABC, a is twelve, b is five, and A is seventy degrees. Sine B is five sine seventy degrees over twelve, about zero point three nine one five, so B is about twenty-three point one degrees. Its partner is a hundred and fifty-six point nine **degrees**. But seventy plus a hundred and fifty-six point nine is more than a hundred and eighty degrees, so there's no room for a third angle. There's only one triangle, with B about twenty-three point one **degrees**. Keeping the impossible partner anyway is the **slip**.

Visual: clear change to the full-width g01 board with a triangle sketch (a = 12, b = 5, A = 70°) at the left. Task strip, 44 px: "In triangle ABC, a = 12 cm, b = 5 cm and A = 70°. Find B." Givens card, 40 px: "a = 12, A = 70°" (amber, a complete pair), "b = 5" (violet). Rows, 52 px: "sin B = 5 sin 70° ÷ 12 ≈ 0.3915"; "B ≈ 23.1°"; on "degrees" (first) "partner: 180° − 23.1° = 156.9°" (light violet); "70° + 156.9° = 226.9° > 180°" with hand tag "no room", the partner row greying; on "degrees" (second) "B ≈ 23.1° only" (green frame). On "slip" a red slip "B = 23.1° or 156.9°" writes and is crossed, caption "70° + 156.9° > 180°".

### 5. the construction, and the condition
> When are there two? Build it. Draw angle A and side b, out to C. Then swing an arc of radius a from C, like the signal's edge. The shortest distance from C to the highway is the perpendicular. It makes a right-angled triangle with hypotenuse b, and the perpendicular is opposite A, so it's b sine A, here about five point seven nine kilometres. If a is shorter than that, the arc misses: no **triangle**. If a equals it, the arc just touches: one right-angled **triangle**. If a is between b sine A and b, the arc crosses twice: two **triangles**. And once a reaches b or more, the second crossing falls behind the town, so there's just **one**. Last time, B faced the shorter side, so it had to be acute. Here B faces nine, the longer side, so it can be obtuse too. So when A is acute, two triangles need b sine A to be less than a, and a less than b. Here, five point seven nine is less than seven, which is less than nine.

Visual: stage change: the construction (simulation 3) at the left: angle A = 40° at the town, the ray (the highway) and side b = 9 to C fixed; the perpendicular from C to the ray dashed, labelled "b sin A ≈ 5.79", hand tag "shortest reach: b sin A". On "right-angled triangle" the small triangle A, C and the foot of the perpendicular tints, b (violet) as its hypotenuse and the 40° at A ringed, hand tag "opposite A: b sin A". The slider moves a and the amber arc swings; a readout (52 px) counts triangles. On "triangle" (first) a = 5: the arc misses, "0", hand tag "misses". On "triangle" (second) a = 5.79: it touches, "1", a right-angle mark, hand tag "touches". On "triangles" a = 7: two crossings, "2", both triangles shaded, hand tag "crosses twice". On "one" a = 10: one crossing ahead of A and one behind it (greyed), "1", hand tag "behind the town". On "Last time" a grey chip "t05: shorter side, smaller angle", then b = 9 rings violet against a = 7, hand tag "faces the longer side: can be obtuse". Row, 60 px, framed: "two triangles (A acute): b sin A < a < b"; row "5.79 < 7 < 9 ✓".

### 6. which rule fits?
> So which rule fits a problem? If you know a side and the angle facing it, the sine rule is quickest, but check for a partner when you're finding an angle. If you know two sides and the angle between them, or all three sides, use the cosine rule, which is never **ambiguous**. Try one. b is nine, c is twelve, and A is forty-seven degrees. A sits between b and c, so there's no pair yet, and it's the cosine rule. a squared is eighty-one plus a hundred and forty-four, minus two hundred and sixteen cosine forty-seven degrees, so a is about eight point eight one **four**. Now a and A make a pair, so the sine rule gives B. Keep a unrounded, and B is about forty-eight point three **degrees**. B faces a shorter side than c, so it can't be obtuse. Rounding a to eight point eight first gives forty-eight point four degrees. That's the **slip**.

Visual: clear change: the decision tree (`DecisionTree`, 52 px) at the left: "pair present?" → "sine rule (finding an angle: test the partner)"; "two sides + included angle" → "cosine rule"; "three sides" → "cosine rule (largest angle first)"; hand tags "pair present: sine rule" and "SAS or SSS: cosine rule". On "ambiguous" the two cosine branches glow green. The g01 board at the right. Task strip, 44 px: "In triangle ABC, b = 9, c = 12 and A = 47°. Find a, then B." Givens card: "b = 9" (violet), "c = 12" (blue), "A = 47°" (amber, between them); the tree's SAS branch lights. Rows, 52 px: "a² = 9² + 12² − 2(9)(12) cos 47°"; on "four" "a² ≈ 77.69, a ≈ 8.814" with hand tag "keep a unrounded"; "a and A: now a pair", hand tag "now a pair"; "sin B = 9 sin 47° ÷ 8.814…"; on "degrees" "B ≈ 48.3°" (green frame), hand tag "b < c: B acute". On "slip" a red slip "a = 8.8 ⇒ B ≈ 48.4°" writes and is crossed, caption "round only at the end".

### 7. memory aid
> Here's the summary. Finding an angle with the sine rule? Test its partner, a hundred and eighty minus your answer, against the angle sum. Two sides with the angle between them, or three sides, means the cosine rule, and that's never **ambiguous**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the signal circle cutting the highway twice, and the app's two crossings. Main line, hand font 56 px: "Sine rule for an angle? Test its partner, 180° minus the answer, against the angle sum." On "ambiguous" the key line, 40 px: "Two sides and the angle between, or three sides: cosine rule, never ambiguous." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. In triangle ABC, A is thirty-two degrees, a is six centimetres, and b is ten centimetres. Show that two triangles are possible, and find both possible sizes of angle C, to the nearest degree. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "In triangle ABC, A = 32°, a = 6 cm and b = 10 cm. Show that two triangles are possible, and find both possible sizes of angle C, to the nearest degree." The full question stays on screen. Picture slot: angle A with side b drawn to C and the ray from A; no arc. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> b sine A is ten sine thirty-two degrees, about five point three, and six is between five point three and ten, so there are two **triangles**. Sine B is ten sine thirty-two degrees over six, so B is about sixty-two degrees, or its partner, about a hundred and eighteen **degrees**. So C is about eighty-six degrees, or about thirty **degrees**. Giving only eighty-six degrees is the **slip**.

Visual: the card shrinks to the top (30 px). The picture's arc swings and crosses twice. Rows, 44 px: on "triangles" "10 sin 32° ≈ 5.30 < 6 < 10 ✓"; "sin B = 10 sin 32° ÷ 6 ≈ 0.8832"; on "degrees" (first) "B ≈ 62° or 118°"; on "degrees" (second) "C ≈ 180° − 32° − 62° = 86°, or 180° − 32° − 118° = 30°" (green frame). On "slip" a red slip "C ≈ 86° only" writes and is crossed, caption "test the partner". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. In triangle ABC, A is fifty degrees and b is twelve centimetres. For which lengths of side a are two different triangles possible? Give the bounds to one decimal place. Pause here to answer.

Visual: `QuestionCard`, 40 px: "In triangle ABC, A = 50° and b = 12 cm. For which lengths of side a are two different triangles possible? Give the bounds to one decimal place." Picture: angle A with side b to C and the ray from A; no arc, no perpendicular. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Two triangles need b sine A less than a, and a less than b. b sine A is twelve sine fifty degrees, about nine point one **nine**. So a must be between nine point two and twelve **centimetres**. Shorter than that, the arc can't reach the ray. Twelve or more, the second crossing falls behind A. Leaving off the upper bound, and writing only a greater than nine point two, is the **slip**.

Visual: the card shrinks to the top. The perpendicular from C draws, "12 sin 50°". Rows, 44 px: "b sin A < a < b"; on "nine" "12 sin 50° ≈ 9.19"; on "centimetres" "9.2 < a < 12" (green frame), with the slider sweeping a through the band and the readout "2". On "slip" a red slip "a > 9.2" writes and is crossed, caption "a < b too". Hold about 1 s.

### 12. handoff
> So far, every angle has been in degrees, three hundred and sixty to a full turn. But three sixty is just a choice. Here's a round cake tin, and a piece of string cut to the length of its radius. If we measured angles with the circle's own radius, what would a full turn be? Is there a natural way to measure an angle? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the cake tin `ma11-cake-tin-v1.png` (760 px, top view, left of centre). On "three hundred and sixty" a blue angle at the tin's centre (two ink radii from the sidecar centre to the inner rim) with its teal arc; chip "360° a turn: a choice". On "a piece of string" a coded length of string (ink-brown, 6 px) lies beside the tin, one radius long, labelled "string = radius". On "the circle's own radius" chip "measure with the radius?". On "next" chips "Next: radians" and "?". Hold about 2 s. This is t08's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Sine rule for an angle: B or 180° − B (same sine).
- Keep the partner only if the angle sum leaves room (< 180°).
- Two triangles (A acute): b sin A < a < b.
- Pair present: sine rule. SAS or SSS: cosine rule (never ambiguous).
- Keep values unrounded until the end.

Memory aid (framed card, right side, as in scene 7): *Sine rule for an angle? Test its partner, 180° minus the answer, against the angle sum.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t08's opening frame.

## Teaching checks

- **Does it explain causes?** Why two triangles: a circle can cut a line twice (1). Why the calculator gave one: two angles share every height, and inverse sine returns one (2). Why the angle-sum test: a triangle needs room for a third angle (3, 4). Why b sin A and b are the thresholds: the shortest reach (the perpendicular is opposite A in a right triangle with hypotenuse b), and the crossing passing behind A (5). Why an obtuse B is possible here and not in t05: B faces the longer known side (5). Why the cosine rule is never ambiguous: SAS and SSS fix one triangle (6). Why B is acute in `we-3`: it faces a shorter side than c (6).
- **Misconceptions addressed:** accepting only the acute angle (1, 2, A1 crossed); keeping an impossible partner (4 crossed); rounding a before reuse (6 crossed); SAS as ambiguous (6); the missing upper bound (A2 crossed).
- **Visual standard, item by item:** 1 the tower and highway from the first frame (t06's handoff), returning in 3 and on the card; 2 a new stage every 35 to 65 s; 3 the car through the signal, the app's level line with a slider, the arc construction with a counter; 4 fixed pair colours; 5 large type; 6 hand tags; 7 g01 boards in 4 and 6, rows in 3; 8 framed card and five bullets; 9 the road lighting in and out of coverage.
- **One idea at a time:** two triangles (1), why one is hidden (2), the test (3, 4), the condition (5), choosing (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 28 s.
- **Avoided double teaching:** the sine and cosine rules (t05, t06) and sin(180° − θ) = sin θ (t04) are recalled by chip; no proof is repeated.
- **Syllabus coverage:** `ci44ad375d` (1, 2 (graphing application), 5 (construction and condition), A1, A2; key notes 1 to 3); `ci5fb5a13c` (choosing and applying: 3, 4, 6; key notes 4, 5).
- **Out of scope by design:** radians (t08); trig equations (t15a, t15b).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "In triangle ABC, A = 32°, a = 6 cm and b = 10 cm. Show that two triangles are possible, and find both possible sizes of angle C, to the nearest degree."
Model answer: b sin A = 10 sin 32° ≈ 5.30 < 6 < 10, so two triangles. sin B = 10 sin 32°/6 ≈ 0.8832, so B ≈ 62.0° or 118.0° (32° + 118° < 180°). Then C = 180° − 32° − 62° = 86° or C = 180° − 32° − 118° = 30°. Classic mistake (crossed): "C ≈ 86° only".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "In triangle ABC, A = 50° and b = 12 cm. For which lengths of side a are two different triangles possible? Give the bounds to one decimal place."
Model answer: two triangles when b sin A < a < b: 12 sin 50° ≈ 9.19, so 9.2 < a < 12 (exactly 12 sin 50° < a < 12). Classic mistake (crossed): "a > 9.2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| `we-1` (tower) | AC = 9 km, 7 km, 40°; sin B ≈ 0.8264; B ≈ 55.7° or 124.3°; opening point B₁ at 10.84 km | 1, 2 |
| Test and distances | 40° + 124.3° = 164.3°; C ≈ 84.3° and 15.7°; c ≈ 10.84 km and 2.95 km; ≈ 7.9 km of signal | 3 |
| `we-2` | 12, 5, 70°; sin B ≈ 0.3915; B ≈ 23.1°; partner 156.9°; 226.9° > 180° | 4 |
| Construction | b sin A ≈ 5.79; a = 5, 5.79, 7, 10 | 5 |
| `we-3` (S11-15) | 9, 12, 47°; a² ≈ 77.69; a ≈ 8.814; B ≈ 48.3°; slip 48.4° | 6 |
| A1 | 10 sin 32° ≈ 5.30; sin B ≈ 0.8832; B ≈ 62° or 118°; C ≈ 86° or 30° | 8, 9 |
| A2 | 12 sin 50° ≈ 9.19; 9.2 < a < 12 | 10, 11 |
| Handoff | 360° (no radian value stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `t01t08/verify.py`; Revision 2's opening-frame point in `work/brief-resolve-t/verify.py`); Codex to re-check.

- 9 sin 40°/7 = 0.826441; sin⁻¹ = 55.7349°; 180 − 55.7349 = 124.2651.
- 40 + 124.27 = 164.27 < 180. C₁ = 84.265°, c₁ = 10.8356; C₂ = 15.735°, c₂ = 2.95324; c₁ − c₂ = 7.88.
- 9 sin 40° = 5.78509.
- 5 sin 70°/12 = 0.391540; sin⁻¹ = 23.0503°; 180 − 23.0503 = 156.9497; 70 + 156.95 = 226.95.
- 81 + 144 − 216 cos 47° = 77.6884; √ = 8.81410; 9 sin 47°/8.81410 = 0.74678; sin⁻¹ = 48.312°; with 8.8: 48.415°.
- 10 sin 32° = 5.2992; 10 sin 32°/6 = 0.88320; 62.031°, 117.969°; C = 85.969°, 30.031°.
- 12 sin 50° = 9.1925.

## Memory aid check

- **"Sine rule for an angle? Test its partner, 180° minus the answer, against the angle sum."** Original wording of the site's angle-sum test. Meaning, as said in scene 7: when inverse sine gives an angle B, the obtuse angle 180° − B has the same sine; it gives a second triangle exactly when the given angle plus 180° − B is less than 180°. Assumptions checked: the data are two sides and a non-included angle with the unknown an angle (the only ambiguous case); the given angle is the one opposite a known side; sin B < 1 (if sin B = 1 there is one right-angled triangle, and if sin B > 1 none, both shown in scene 5). It helps a new case: A = 35°, a = 8, b = 11 gives B ≈ 52° or 128°, and 35° + 128° = 163° < 180°, so both (the site's review example).
- **Second line: "Two sides and the angle between, or three sides: cosine rule, never ambiguous."** Assumption: SAS and SSS fix a unique triangle (congruence tests).
- **Considered, not used:** "SSA is the ambiguous one" as the aid (true, but students misread which angle is meant).

## Narration length estimate

Counted by script (narration blockquotes inside each numbered scene, bold markers removed; `work/brief-resolve-t/count.py`, which reproduces e08's 5,632 and c10's 5,915): 5,928 characters in Revision 2 (Revision 1: 5,710). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the car through the signal, the app's slider, the arc sweep) and the 45 s notes scene: about 533 s. Characters per scene (1 to 13): 574, 712, 538, 546, 909, 827, 243, 224, 375, 200, 375, 330, 75. Speech before the notes is about 440 s, and the whole video with holds about 533 s, both under the 570 s cap. Feedback speech: about 28 s and 28 s.

Reserve trims if the voiced take runs long: scene 3's last sentence ("So you'd have signal for roughly eight kilometres", keep the label); scene 6's "B faces a shorter side than c" sentence (keep the hand tag).

## Scene list and build ids

Lesson key `m-a11t07` (route math-a11-t07). Explainer folder `src/explainer/lessons/math-a11-t07`; build inputs in `docs/production/claude-pm/lessons/math-a11-t07/` (at voicing).

In order (13 scene headings): hook-in-then-out, calculator-gives-one, partner-fits, only-one, construction-condition, which-rule, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds; Revision 1 times, not re-timed for Revision 2's additions; frames come from the recording's word timings):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | t06's map; the signal circle; two triangles |
| 45 to 105 s | 2 | The graphing app |
| 105 to 140 s | 3 | The angle-sum test; distances along the highway |
| 140 to 185 s | 4 | g01 board: `we-2` |
| 185 to 250 s | 5 | The construction and the condition |
| 250 to 320 s | 6 | The decision tree and `we-3` |
| 320 to 335 s | 7 | Framed memory card |
| 335 to 435 s | 8 to 11 | Question cards and countdowns, then feedback |
| 435 to 460 s | 12 | The cake tin |
| 460 to 505 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t06's last frame continues into 1; 1 to 2 stage change to the app; 2 to 3 clear change (the map returns); 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t07-learning-review.md`, `science_check` = `checks/m-a11-t07-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only, file list): no cake tin exists; `ma11-round-cake-v1.png` (w22) is an iced cake in three-quarter view and `ma12-food-tin-v1.png` a food can, neither a top-view baking tin with a clear centre.

Reused: `ma11-phone-tower-v1.png` (t06's brief). Need (painted, new; see the Codex asset brief): `ma11-cake-tin-v1.png` (this video's handoff and t08's anchor; must be painted before this build).

Coded: the map, road, signal circle and car dot, the graphing-app screen, the construction, the decision tree, working rows, question cards and pictures, the countdown, hand tags, the framed card and key notes, and the handoff's radii, arc and string.

### Studio kit use and additions

Uses: `ScreenApp`, `AppGraph`, `StudioLevelLine` (`crossingsOf`), `StudioTriangle` (SSA mode), `ParameterSlider`, `DecisionTree`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (from `../checks/maths-a11-kit-needs.md`, trigonometry section):
1. **`StudioTriangle` SSA construction mode** (first use): angle A and side b fixed, an arc of radius a from C, crossings with the ray from A (a crossing behind A greyed), a triangle counter, and both triangles drawn when two exist. Check: with A = 40°, b = 9 the counter reads 0, 1, 2, 1 at a = 5, 5.785, 7, 10.
2. **Road highlight inside a circle** (small): a road segment changes colour where a moving dot is inside the signal circle. Check: the colour changes at 2.95 km and 10.84 km from A.

## Codex asset brief (Maths A11 T07, a cake tin for the handoff; also t08's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-t07.md`. The phone tower is briefed in `math-a11-t06.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the t07 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-cake-tin-v1.png` (1500 × 1500 px): an empty round metal cake tin (a plain round baking tin with a low straight side), seen from directly above, so the base is a true circle with the rim as a ring around it; the base plain and bare (code draws on it). No string, no batter, no paper lining.

Sidecar JSON (`ma11-cake-tin-v1.json`): the pixel centre of the base, the inner-rim radius, and the outer-rim radius. Report inspection on the paper background (`#f6f1e7`) at 760 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-t07-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly.
3. Confirm the condition b sin A < a < b is stated for acute A, both by construction and in words, and that a graphing application shows the two angles.
4. Confirm lesson07 `we-3` uses a² = b² + c² − 2bc cos A and the unrounded a, giving B ≈ 48.3° (S11-15).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, every spoken angle carries "degrees", the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t06's final frame.

## YouTube metadata (draft)

Title: The Ambiguous Case of the Sine Rule, and Choosing a Rule | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson08.sa.html

A highway passes through a phone tower's signal. You drive into coverage, then out of it: two points, both 7 km from the tower, so two different triangles from the same measurements. See why the calculator only gives one angle, find the other in a graphing app, test it against the angle sum, build the triangles with an arc to find when there are none, one or two (b sin A < a < b), and learn which rule fits each problem. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometry and measure of angles.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use graphing applications or geometric construction to examine the ambiguous case of the sine rule, in which there are two possible solutions for an angle, and the condition for it to arise"
"Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

Builds on: The cosine rule. Next: Radians.

#Year11Maths #MathsAdvanced #SineRule #HSCScience

## Open decisions

- **1. The tower's numbers in kilometres (root).** Closed: the reviewer judged them realistic; kept.
- **2. The case a ≥ b (learning review).** Closed: fine unspoken, with the counter showing "1".

## Review notes

- Revision 1 had its independent student learning review on 17 Nov (`../checks/m-a11-t07-learning-review.md`): should-fix, 0 blockers, 1 should fix, 1 optional. Revision 2 resolves both (see "Revision 2" above) and takes t06's changed handoff frame as its opening. Next: Codex maths check and error check on Revision 2, then voicing on the Google voice and a build to grade A; the exact voiced preview needs the repeat learning check before full export.
