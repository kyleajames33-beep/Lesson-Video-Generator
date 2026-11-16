# Maths A11 T06: How does the cosine rule correct Pythagoras for any triangle? The hinge, the proof by Pythagoras twice, the correction term 2ab cos C, a side from two sides and the included angle, an angle from three sides, and a non-right bearings journey (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Designer's decisions for t01 to t08: `../checks/root-decisions-maths-a11-t01-t08.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,908 characters by script (see "Narration length estimate"), 13 scene headings, about 532 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: sixty-third video of Year 11 Mathematics Advanced (2024), outline order 63, Trigonometry and measure of angles (Trigonometry with angles of any magnitude). Pre-design pack: `../pre-design/maths-a11/math-a11-t06.md` (brief 243). Site lessons (read through the pack's quotations, read only): `trigonometry-and-measure-of-angles/lesson07.sa.html` (card 02 the correction term; card 05 the proof; `we-1`, a = 11, b = 7, C = 62°, c ≈ 9.9 cm; `we-2`, sides 5, 6, 10, largest angle 130°32'; all with their numbers) and `lesson09.sa.html` (card 07, a new north line and the cosine rule for a journey home). Route entry: `math-a11-t06` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; t02's yacht on a coded sea map (a deliberate return), and a painted phone tower for the handoff; every triangle, bar, map line and working row coded.

Owner rules applied: as t01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (travel: the yacht's journey home), Australian spelling, no em dashes, "zero point" decimals, angles always spoken with "degrees", conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Trigonometry and measure of angles, Trigonometry with angles of any magnitude), quoted from `../../programme/maths-a11-route-inputs-4.json`. Shared with t05 and t07; this video owns the cosine rule parts:

- `ci96840b09`: "Examine the proof of the sine rule a/(sin A) = b/(sin B) = c/(sin C), cosine rule c^2 = a^2 + b^2 - 2ab cos C and the area of a triangle formula A = 1/2 ab sin C for a given triangle ABC"
- `ci5fb5a13c`: "Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

**Boundary:** starts from t05's final frame exactly (the coded sea map, the top-view yacht at the end of "12 km on 040°" then "9 km on 100°", a new north line at the turn, the interior angle "120°", the dashed line home, the red-crossed chip "sine rule: no side with its opposite angle", chips "distance from start = ?", "Next: the cosine rule", "?"). Recalls t02 (a right-angle turn gave Pythagoras; the new north line and reverse bearing), t05 (the perpendicular h and the labelling; degrees and minutes; the sine rule for the bearing) and t04 (cos θ < 0 for 90° < θ < 180°) in a phrase or chip each. Teaches: the hinge (two sides fixed, the angle opening, c² less than, equal to, more than a² + b²); the proof of c² = a² + b² − 2ab cos C from Pythagoras in both halves (`ci96840b09`, cosine rule part); Pythagoras as the case C = 90° and 2ab cos C as a correction that subtracts for acute C and adds for obtuse C; a side from two sides and the included angle (`we-1`); the yacht's distance and bearing home (original non-right journey); an angle from three sides, cos C = (a² + b² − c²)/(2ab), with a negative cosine meaning an obtuse angle (`we-2`) (`ci5fb5a13c`, cosine rule part). Stops at the cosine rule. Not taught: the ambiguous case and choosing a rule (t07).

## Decisions

- **Anchor: the yacht's journey home, with a 120° turn (t02's yacht, a deliberate return; coded sea map).** In t02 the turn made a right angle and Pythagoras gave 15 km. Here the turn makes 120°, so the same question needs the cosine rule; the change from t02 is the whole lesson in one picture. Travel; the pack's original journey (12 km on 040°, then 9 km on 100°). The pack's dog-leg golf hole was avoided (w15 to w17 use golf), and the stepladder sits close to the Year 12 ladders (decisions file, open question 1). The phone tower that closes the video is t07's anchor.
- **Simulations (standard item 3).**
  1. **Hinge** (scenes 1, 3; `StudioTriangle` hinge mode with `ParameterSlider` and `LiveReadoutBoard`): the yacht's legs a = 12 and b = 9 fixed at the turn, the angle C opening from 40° through 90° to 150°; the third side c redraws, and two live bars compare "c²" (blue) with "a² + b² = 225" (grey line); readouts "C = …°", "c² = …"; labels "less", "equal", "more" at 60°, 90° and 120° (117, 225, 333).
  2. **Pythagoras twice** (scene 2; `StudioTriangle` foot mode with `AlignedAlgebra`): the perpendicular from B to AC meets it at H, splitting b into x and b − x; each half's Pythagoras writes in its half's tint; the bracket expands term by term and h² + x² slides out and becomes c².
  3. **Bearing sweep** (scene 5; `BearingRose`): the new north line at the turn, the reverse bearing 220° sweeping back along leg one, the second bearing 100°, and the 120° angle between them filling.
- **Colour roles (t05 to t07, any triangle).** Opposite pairs colour-matched: a and A **amber**, b and B **violet**, c and C **blue**; the perpendicular h dashed grey with an ink label; the correction term 2ab cos C **teal**; answer green; mistake red, crossed slips only. On maps, legs are ink and bearings blue.
- **Large type, handwritten voice.** As t05. Hand tags: "right angle: Pythagoras", "less", "equal", "more", "left half", "right half", "expand", "h² + x² = c²", "x = c cos A", "relabel", "c faces C", "cos 90° = 0", "acute: subtract", "obtuse: adds", "only 2ab gets the cos", "root once, at the end", "new north here", "220° − 100° = 120°", "now there's a pair", "longest side, largest angle", "negative cos: obtuse", "cos⁻¹ gives it directly".
- **Stage changes (standard item 2).** t05's journey frame and the hinge (1); the proof (2); the correction term (3); g01 board, `we-1` (4); the map and the journey home (5); g01 board, `we-2` (6); framed card (7); question cards (8 to 11); the phone tower (12); key notes (13).
- **Worked examples (g01 layout).** 4: site `we-1`, c ≈ 9.9 cm; crossed "(a² + b² − 2ab) cos C". 5: the yacht (original), d = √333 ≈ 18.2 km, bearing about 065°. 6: site `we-2`, cos C = −0.65, C ≈ 130°32'; inverse cosine gives an obtuse angle directly (site correction S11-12).
- **Memory aid.** Framed card: "Cosine rule: Pythagoras with a correction, − 2ab cos C." Second line: "Right angle: no correction. Acute: subtract. Obtuse: add."
- **Visual surprise.** The hinge: as the turn opens past 90°, the c² bar passes the a² + b² line exactly at the right angle, so Pythagoras is one frame of the cosine rule.
- **Site notes (pack section 8; S11-12).** The site's proof assumes the foot H lies between A and C (acute A); kept, with the obtuse case an author note. Scene 6 says, in the site correction's sense, that inverse cosine gives a triangle's angle directly, acute or obtuse (S11-12), so no quadrant check is taught. lesson07 `we-3` (choosing between rules) moves to t07 with its correction S11-15. The site's journeys are right-angled; the 120° journey is the pack's original.
- **Plain meanings at first use.** Included angle (recalled from t05, "the angle between the two sides"); correction ("the extra term that fixes Pythagoras when the angle isn't ninety degrees"); obtuse ("between ninety and a hundred and eighty degrees"); reverse bearing (recalled from t02).
- **Attempts (pack questions).** A1: two paths of 350 m and 420 m from a park gate at 118°: d ≈ 661 m; crossed "about 401 m" (the cosine taken as positive). A2: sides 7, 8, 13: largest angle exactly 120°; crossed "cos θ = −1" (the 2 forgotten).
- **Mistake scene:** none separate. Multiplying the whole of a² + b² − 2ab by cos C (4 crossed); square-rooting or rounding early (4 tag); rejecting a negative cosine (6, tag); the cosine's sign ignored (A1 crossed); the 2 in 2ab forgotten (A2 crossed); the wrong side matched to the angle (3 tag "c faces C").
- **Cause chain taught, in order:** (1) with two sides fixed, the third side grows as the angle between them opens, passing the Pythagoras value exactly at 90° (1); (2) Pythagoras in each half of a split triangle, with x = c cos A, gives a² = b² + c² − 2bc cos A, which relabels to c² = a² + b² − 2ab cos C (2); (3) cos C is positive for acute C, zero at 90° and negative for obtuse C, so the correction subtracts, vanishes or adds (3); (4) two sides and the angle between them give the third side directly (4, 5); (5) rearranged, three sides give an angle, and a negative cosine means an obtuse angle (6).
- **Entry knowledge (route):** t05 (the sine rule, the perpendicular h, degrees and minutes); t04 (cos θ < 0 for 90° < θ < 180°); t02 (true bearings and a new north line at each turn).
- **What later videos rely on.** t07 uses "the cosine rule is never ambiguous" and "largest angle faces the longest side" to choose a rule and to avoid the ambiguous case; t09 and Year 12 use the cosine rule in sector and navigation problems.
- **Handoff (to math-a11-t07, "When can the sine rule give two triangles, and which rule fits a problem?").** Scene 12: a coded map (no grid, pale land tint) with the town "A" (a coded dot and label), the phone tower `ma11-phone-tower-v1.png` (320 px) at "C", "AC = 9 km" (violet), a straight highway (grey road band) leaving A at "40°" (amber) to the line AC, a chip "signal reaches 7 km" (amber), and a calculator strip "sin B = 9 sin 40° ÷ 7 ≈ 0.8264 → B ≈ 55.7°"; chips "the only triangle?", "Next: two triangles?" and "?". No signal circle is drawn yet. This is t07's opening frame (the t07 pack's start: a = 7, b = 9, A = 40°, B = 55.7°).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Hinge, a = 12, b = 9: C = 60°: c² = 225 − 216 × ½ = 117, c ≈ 10.82; C = 90°: 225, c = 15; C = 120°: 333, c ≈ 18.25.
  (b) Proof (acute A, H between A and C): c² = h² + x²; a² = h² + (b − x)² = h² + b² − 2bx + x² = c² + b² − 2bx; x = c cos A, so a² = b² + c² − 2bc cos A. If A is obtuse, H lies beyond A, x = c cos(180° − A) = −c cos A, and the same result follows.
  (c) `we-1`: 121 + 49 = 170; 154 cos 62° = 72.30; c² = 97.70; c = 9.884 ≈ 9.9 cm. Slip: √(16 cos 62°) ≈ 2.7 (not shown).
  (d) Yacht: interior angle 220° − 100° = 120°; d² = 144 + 81 + 108 = 333; d = 18.248 ≈ 18.2 km; sin α = 9 sin 120°/18.248, α = 25.29°; bearing 040° + 25.3° = 065.3° ≈ 065° (coordinates: finish (16.58, 7.63) km, bearing 065.28°).
  (e) `we-2`: cos C = (25 + 36 − 100)/60 = −13/20 = −0.65; C = 130.5416° = 130°32.5' (130°32' to the nearest minute, as the site; 32.496').
  (f) A1: 350² + 420² = 298 900; 2 × 350 × 420 = 294 000; cos 118° = −0.46947; d² = 436 924.6; d = 661.0 m. Slip (|cos|): d ≈ 401 m. A2: (49 + 64 − 169)/112 = −1/2; θ = 120°; slip −56/56 = −1.
  (g) Pronunciations: "c squared equals a squared plus b squared, minus two a b cosine C"; "two b x"; "three hundred and thirty-three"; "a hundred and thirty degrees thirty-two minutes"; "four hundred and thirty-seven thousand".
  (h) Windows: hinge panel 1,000 × 640 px; map grid 1 km = 40 px.

Main question: *How does the cosine rule correct Pythagoras for any triangle? How far is the yacht from the start after a 120° turn?*
Entry knowledge (t05, t04, t02): the sine rule and h; the sign of cosine for obtuse angles; bearings and new north lines.
Stops after: the cosine rule's proof, sides from SAS, angles from SSS (including obtuse), and a non-right bearings journey. No ambiguous case.
Handoff: math-a11-t07: "a highway passes a phone tower's 7 km signal edge: the sine rule gives B = 55.7°, but is that the only triangle?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): a and A amber; b and B violet; c and C blue; h dashed grey; the correction teal; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: when the turn isn't square
> Here's the yacht's journey: twelve kilometres, a turn, then nine kilometres, with a hundred and twenty degrees inside the triangle at the turn. Back in the bearings video, the turn made a right angle, and Pythagoras gave the distance home. Here it doesn't. So watch what happens as the angle at the turn opens up. At sixty degrees, the distance home squared is a hundred and seventeen, less than twelve squared plus nine squared, which is two hundred and twenty-**five**. At ninety degrees, it's exactly two hundred and twenty-**five**. At a hundred and twenty degrees, it's three hundred and thirty-three, **more**. So Pythagoras needs a correction. How does the cosine rule correct Pythagoras for any **triangle**?

Visual: opens on t05's final frame exactly (the map, the yacht, "12 km on 040°", "9 km on 100°", the new north line, "120°", the dashed line home, the crossed sine-rule chip, chips "distance from start = ?", "Next: the cosine rule", "?"). On the first sentence the "Next" chips fade. On "Back in the bearings video" a grey chip "t02: right-angle turn: √(12² + 9²) = 15 km". On "opens up" the triangle lifts off the map into the hinge panel at the right (simulation 1): legs "a = 12" (amber) and "b = 9" (violet) fixed at the turn, angle C (blue) set to 60°; bars "c²" (blue) and "a² + b² = 225" (grey line). On "five" (first) C = 60°: "c² = 117", hand tag "less". On "five" (second) C = 90°: the bar meets the line, "c² = 225", hand tag "equal", grey chip "right angle: Pythagoras". On "more" C = 120°: "c² = 333", hand tag "more". On "triangle" heading "The cosine rule", and the question chip "How far home?" moves to the top right.

### 2. the proof: Pythagoras twice
> Here's where the correction comes from. Take triangle ABC and drop the perpendicular from B to side b, meeting it at a point H. Call the piece from A to H x, so the rest of side b is b minus x. In the left triangle, Pythagoras says c squared equals h squared plus x **squared**. In the right triangle, a squared equals h squared, plus b minus x all squared. Expand that bracket, to get b squared, minus two b x, plus x squared. Now h squared plus x squared is c squared, so a squared equals c squared plus b squared, minus two b **x**. Last, in the left triangle, x is c cosine A, adjacent over hypotenuse. So a squared equals b squared plus c squared, minus two b c cosine **A**. Relabel the corners, and the same rule reads c squared equals a squared plus b squared, minus two a b cosine **C**.

Visual: stage change: the proof triangle (`StudioTriangle` foot mode, base b 900 px) at the left, pairs coloured; the perpendicular from B meets AC at H, the base split "x" and "b − x" (violet tints). Rows at the right (`AlignedAlgebra`), current 52 px, earlier 32 px and dimmed. On "squared" (first bold) the left half lights: "c² = h² + x²", hand tag "left half". The right half lights: "a² = h² + (b − x)²", hand tag "right half"; the bracket expands: "a² = h² + b² − 2bx + x²", hand tag "expand". "h² + x²" rings and slides to the c² row, hand tag "h² + x² = c²"; on "x" (bold) "a² = c² + b² − 2bx". On "c cosine A" the left half's angle A rings: "x = c cos A", hand tag "x = c cos A"; on "A" (bold) "a² = b² + c² − 2bc cos A" (framed). On "C" (bold) the corners relabel round (hand tag "relabel") and the rule, 60 px, framed: "c² = a² + b² − 2ab cos C" (2ab cos C teal).

### 3. a correction, not a new rule
> Read it as Pythagoras with a correction. The side c faces angle C. If C is ninety degrees, cosine C is zero, the correction vanishes, and you get Pythagoras **exactly**. If C is acute, cosine is positive, so you subtract, and c comes out shorter. If C is obtuse, cosine is negative, and subtracting a negative **adds**, so c comes out longer. That's exactly what the hinge showed.

Visual: clear change: the rule large at the top (60 px), "− 2ab cos C" teal; the hinge returns below (simulation 1), hand tag "c faces C". On "exactly" C sits at 90°, the teal term greys to "0", hand tag "cos 90° = 0". C closes to 60°: the term shows "− 108", hand tag "acute: subtract". On "adds" C opens to 120°: "− 2ab cos C = − 216 × (−½) = + 108", hand tag "obtuse: adds"; the bars from scene 1 sit beside each case.

### 4. worked example: two sides and the angle between
> Here's an example. In triangle ABC, a is eleven centimetres, b is seven centimetres, and C is sixty-two degrees. Find c. C is between a and b, and c faces C. So c squared is eleven squared plus seven squared, minus two times eleven times seven, cosine sixty-two degrees. That's a hundred and seventy, minus a hundred and fifty-four cosine sixty-two degrees. The correction is about seventy-two point three, so c squared is about ninety-seven point **seven**. Take the square root once, at the end, and c is about nine point nine **centimetres**. Multiplying the whole of a squared plus b squared minus two a b by cosine C is the **slip**. Only the two a b term gets the cosine.

Visual: clear change to the full-width g01 board with a small triangle at the left (11, 7, 62°). Task strip, 44 px: "In triangle ABC, a = 11 cm, b = 7 cm and C = 62°. Find c to one decimal place." Givens card, 40 px: "a = 11" (amber), "b = 7" (violet), "C = 62°" (blue, between them). Rows, current 52 px, earlier 32 px and dimmed: "c² = 11² + 7² − 2(11)(7) cos 62°"; "= 170 − 154 cos 62°" (154 cos 62° teal); "154 cos 62° ≈ 72.30"; on "seven" "c² ≈ 97.70"; on "centimetres" "c ≈ 9.9 cm" (green frame), hand tag "root once, at the end". On "slip" a red slip "(11² + 7² − 2(11)(7)) cos 62°" writes and is crossed, caption "only 2ab gets the cos".

### 5. the yacht's way home
> Now the yacht. The angle at the turn came from the bearings. A new north line at the turn makes the reverse of the first leg two two zero degrees, and the second leg heads off at one hundred degrees, so the angle between them is a hundred and twenty **degrees**. The distance home squared is twelve squared plus nine squared, minus two times twelve times nine, cosine a hundred and twenty degrees. Cosine a hundred and twenty degrees is minus a half, so the correction adds a hundred and **eight**. That's three hundred and thirty-three, so the yacht is about eighteen point two kilometres from the **start**. Now there's a pair, a hundred and twenty degrees facing that distance, so the sine rule gives the angle at the start, about twenty-five point three degrees. Add it to zero four zero degrees, and the bearing of the finish is about zero six five **degrees**.

Visual: stage change: the sea map returns at the left with the yacht. On "new north line" the `BearingRose` sweep at the turn (simulation 3): the reverse bearing "220°" back along leg one, the second leg's "100°", hand tag "new north here"; on "degrees" (first) the angle between fills blue "120°", hand tag "220° − 100° = 120°". Rows at the right, 52 px: "d² = 12² + 9² − 2(12)(9) cos 120°"; "cos 120° = −½" (grey chip "t04: cos < 0 for obtuse angles"); on "eight" "= 225 + 108 = 333" (+108 teal); on "start" "d = √333 ≈ 18.2 km" (green frame), the dashed line home turning solid. On "Now there's a pair" "120°" and "18.2 km" ring blue, hand tag "now there's a pair". Row: "sin α = 9 sin 120° ÷ 18.25…, α ≈ 25.3°"; on "degrees" (last) "bearing ≈ 040° + 25.3° ≈ 065°" (green frame), a blue arc sweeping from the start's north to the finish.

### 6. an angle from three sides
> The rule finds angles too. Rearrange it, and cosine C equals a squared plus b squared minus c squared, all over two a b. A triangle has sides five, six and ten metres. Find its largest angle. The largest angle faces the longest side, ten, so that's c. Cosine C is twenty-five plus thirty-six minus a hundred, over sixty, which is minus zero point six **five**. A negative cosine isn't a mistake. It means the angle is **obtuse**. Inverse cosine gives a hundred and thirty point five four degrees, which is a hundred and thirty degrees thirty-two **minutes**. In a triangle, inverse cosine gives the angle directly, acute or obtuse, so there's nothing more to check.

Visual: clear change to the g01 board with a triangle (5, 6, 10) at the left, the 10 m side and its opposite angle blue. Row, 60 px, framed: "cos C = (a² + b² − c²) ÷ 2ab". Task strip, 44 px: "A triangle has sides 5 m, 6 m and 10 m. Find its largest angle to the nearest minute." Hand tag "longest side, largest angle". Rows, 52 px: "cos C = (25 + 36 − 100) ÷ 60"; on "five" "= −39 ÷ 60 = −0.65"; on "obtuse" hand tag "negative cos: obtuse" with the angle's arc opening past a dashed 90° mark; "C = cos⁻¹(−0.65) ≈ 130.54°"; on "minutes" "C ≈ 130°32′" (green frame). Hand tag "cos⁻¹ gives it directly".

### 7. memory aid
> Here's the summary. The cosine rule is Pythagoras with a correction, minus two a b cosine C. At a right angle there's no correction. An acute angle subtracts, and an obtuse angle **adds**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the hinge at 60°, 90° and 120° with its three bars, and the yacht badge. Main line, hand font 56 px: "Cosine rule: Pythagoras with a correction, − 2ab cos C." On "adds" the key line, 40 px: "Right angle: no correction. Acute: subtract. Obtuse: add." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Two straight paths leave a park gate at an angle of a hundred and eighteen degrees to each other. One is three hundred and fifty metres long, and the other is four hundred and twenty metres long. Find the straight-line distance between their far ends, to the nearest metre. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Two straight paths leave a park gate at an angle of 118° to each other. One is 350 m long and the other is 420 m long. Find the straight-line distance between their far ends, to the nearest metre." The full question stays on screen. Picture slot: a coded sketch, two paths from a gate with "350 m", "420 m" and "118°"; the far ends joined by a dashed line with no label. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The angle is between the two paths, so use the cosine rule with a hundred and eighteen degrees. The cosine is negative, so the correction **adds**, and d squared is about four hundred and thirty-seven thousand. So d is about six hundred and sixty-one **metres**. Treating the cosine as positive gives about four hundred and one metres. That's the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "d² = 350² + 420² − 2(350)(420) cos 118°"; on "adds" "cos 118° < 0: + 138 024.6…" (teal); "d² ≈ 436 925"; on "metres" "d ≈ 661 m" (green frame). On "slip" a red slip "≈ 401 m" writes and is crossed, caption "118° is obtuse: add". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A triangle has sides seven, eight and thirteen centimetres. Find the exact size of its largest angle. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A triangle has sides 7 cm, 8 cm and 13 cm. Find the exact size of its largest angle." Picture: a coded triangle with the three sides labelled, no angle marked. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The largest angle faces the longest side, thirteen. Cosine theta is forty-nine plus sixty-four minus a hundred and sixty-nine, over two times seven times eight. That's minus fifty-six over a hundred and twelve, minus a **half**. Cosine is minus a half at a hundred and twenty degrees, so the angle is exactly a hundred and twenty **degrees**. Forgetting the two, to get minus one, is the **slip**.

Visual: the card shrinks to the top. The angle facing 13 rings blue. Rows, 44 px: "cos θ = (49 + 64 − 169) ÷ (2 × 7 × 8)"; on "half" "= −56 ÷ 112 = −½"; on "degrees" "θ = 120°" (green frame), grey chip "t04: cos 120° = −cos 60° = −½". On "slip" a red slip "−56 ÷ 56 = −1" writes and is crossed, caption "2ab, not ab". Hold about 1 s.

### 12. handoff
> So with two sides and the angle between them, or with all three sides, the cosine rule always works. Here's a trickier case. A town and a phone tower are nine kilometres apart. A straight highway leaves the town at forty degrees to the line joining them, and the tower's signal reaches seven kilometres. Where does the highway meet the edge of the signal? The sine rule gives an angle of fifty-five point seven degrees. But is that the only answer? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the coded map (pale land tint, no grid). On "phone tower" the town "A" (coded dot) and the tower plate `ma11-phone-tower-v1.png` (320 px) at "C" appear, joined by "AC = 9 km" (violet). On "forty degrees" a straight highway (grey road band) leaves A, the angle "40°" (amber) marked between the road and AC. On "seven kilometres" chip "signal reaches 7 km" (amber). On "fifty-five point seven degrees" a calculator strip writes "sin B = 9 sin 40° ÷ 7 ≈ 0.8264 → B ≈ 55.7°". On "next" chips "the only triangle?", "Next: two triangles?" and "?". No signal circle is drawn. Hold about 2 s. This is t07's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- c² = a² + b² − 2ab cos C (c faces C).
- cos C = (a² + b² − c²) ÷ 2ab.
- C = 90°: Pythagoras. Acute: subtract. Obtuse: add.
- Largest angle faces the longest side; negative cos: obtuse.
- Journey with a turn: new north line, then the cosine rule.

Memory aid (framed card, right side, as in scene 7): *Cosine rule: Pythagoras with a correction, − 2ab cos C.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t07's opening frame.

## Teaching checks

- **Does it explain causes?** Why Pythagoras fails: the hinge shows c² moving past a² + b² (1). Where the rule comes from: Pythagoras in both halves and x = c cos A (2). Why the term subtracts or adds: the sign of cos C (3). Why 120° at the turn: the reverse bearing and the new north line (5). Why a negative cosine is fine: it means obtuse (6). Why find the largest angle: it faces the longest side (6, A2).
- **Misconceptions addressed:** (a² + b² − 2ab) cos C (4 crossed); rooting early (4 tag); a negative cosine as an error (6); the cosine's sign ignored (A1 crossed); the 2 forgotten (A2 crossed); the wrong side matched to C (3 tag).
- **Visual standard, item by item:** 1 the yacht's journey from the first frame (t05's handoff) and again in 5; 2 a new stage every 30 to 65 s; 3 the hinge with live bars, Pythagoras twice, the bearing sweep; 4 fixed pair colours with the correction teal; 5 large type; 6 hand tags; 7 g01 boards in 4 and 6; 8 framed card and five bullets; 9 the c² bar meeting the a² + b² line exactly at 90°.
- **One idea at a time:** the need (1), the proof (2), the correction's sign (3), a side (4), the journey (5), an angle (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 29 s.
- **Avoided double teaching:** the perpendicular and labelling (t05), bearings (t02) and the sign of cosine (t04) are recalled by chip; degrees and minutes are used, not re-taught.
- **Syllabus coverage:** `ci96840b09` (cosine rule proof: 2; key note 1); `ci5fb5a13c` (cosine rule: 4 to 6, A1, A2; key notes 2 to 5).
- **Out of scope by design:** the ambiguous case and choosing a rule (t07).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Two straight paths leave a park gate at an angle of 118° to each other. One is 350 m long and the other is 420 m long. Find the straight-line distance between their far ends, to the nearest metre."
Model answer: d² = 350² + 420² − 2(350)(420) cos 118° = 298 900 − 294 000 cos 118° ≈ 436 925, so d ≈ 661 m. Classic mistake (crossed): "≈ 401 m" (the cosine taken as positive).

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "A triangle has sides 7 cm, 8 cm and 13 cm. Find the exact size of its largest angle."
Model answer: the largest angle is opposite 13 cm. cos θ = (49 + 64 − 169)/(2 × 7 × 8) = −56/112 = −1/2, so θ = 120°. Classic mistake (crossed): "cos θ = −1".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hinge | a = 12, b = 9; a² + b² = 225; c² = 117 (60°), 225 (90°), 333 (120°); ∓108 | 1, 3 |
| t02 recall | √(12² + 9²) = 15 km | 1 |
| `we-1` | 11, 7, 62°; 170 − 154 cos 62°; 72.30; 97.70; c ≈ 9.9 cm | 4 |
| Yacht | 220° − 100° = 120°; cos 120° = −½; 225 + 108 = 333; ≈ 18.2 km; α ≈ 25.3°; bearing ≈ 065° | 5 |
| `we-2` | 5, 6, 10; −39/60 = −0.65; 130.54° = 130°32′ | 6 |
| A1 | 350, 420, 118°; ≈ 436 925; ≈ 661 m; slip ≈ 401 m | 8, 9 |
| A2 | 7, 8, 13; −56/112 = −½; 120°; slip −1 | 10, 11 |
| Handoff | AC = 9 km, 40°, 7 km; sin B ≈ 0.8264; B ≈ 55.7° | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 and coordinates in Python (17 Nov 2026, scratchpad `t01t08/verify.py`); Codex to re-check.

- 144 + 81 − 216 cos C at 60°, 90°, 120°: 117, 225, 333; √ = 10.817, 15, 18.248.
- 154 cos 62° = 72.2986; 170 − 72.2986 = 97.7014; √ = 9.8844.
- Yacht: d = √333 = 18.2483; sin⁻¹(9 sin 120°/18.2483) = 25.285°; bearing by coordinates 065.285°.
- (25 + 36 − 100)/60 = −13/20; cos⁻¹(−0.65) = 130.5416° = 130°32.5′ (32.496′, so 130°32′).
- A1: 298 900 − 294 000 cos 118° = 436 924.64; √ = 661.003; with |cos 118°|: 401.093.
- A2: (49 + 64 − 169)/112 = −1/2; cos⁻¹ = 120°; slip −56/56 = −1.
- Handoff: 9 sin 40°/7 = 0.826441; sin⁻¹ = 55.7349°.

## Memory aid check

- **"Cosine rule: Pythagoras with a correction, − 2ab cos C."** A standard reading (site card 02), phrased here. Meaning, as said in scene 7: c² = a² + b² − 2ab cos C, where C is the angle between a and b and c faces it; the term 2ab cos C is zero at 90°, positive for acute C (so c² < a² + b²) and negative for obtuse C (so c² > a² + b²). Assumptions checked: C is the included angle and c is opposite it (scene 3 tag); 0° < C < 180° in a triangle. It helps a new case: at C = 60°, cos C = ½, so c² = a² + b² − ab (card 06's 8, 5, 60° gives c = 7).
- **Considered, not used:** "the cos rule needs SAS or SSS" as the aid (that is t07's choosing rule).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t01t08/count.py`, which reproduces e08's 5,632 and c10's 5,915): 5,908 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the hinge, the expansion, the bearing sweep) and the 45 s notes scene: about 532 s. Characters per scene (1 to 13): 700, 780, 372, 665, 850, 653, 184, 306, 344, 133, 385, 461, 75. Speech before the notes is about 439 s, under the 570 s cap. Feedback speech: about 26 s and 29 s.

Reserve trims if the voiced take runs long: scene 5's last two sentences (the bearing; keep the rows); scene 6's last sentence (keep the hand tag).

## Scene list and build ids

Lesson key `m-a11t06` (route math-a11-t06). Explainer folder `src/explainer/lessons/math-a11-t06`; build inputs in `docs/production/claude-pm/lessons/math-a11-t06/` (at voicing).

In order (13 scene headings): hook-turn-not-square, proof-pythagoras-twice, correction-term, example-sas, yacht-home, angle-from-three-sides, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 55 s | 1 | t05's journey; the hinge |
| 55 to 120 s | 2 | The proof: Pythagoras twice |
| 120 to 150 s | 3 | The correction term on the hinge |
| 150 to 205 s | 4 | g01 board: `we-1` |
| 205 to 270 s | 5 | The map: the yacht's way home |
| 270 to 325 s | 6 | g01 board: `we-2` |
| 325 to 340 s | 7 | Framed memory card |
| 340 to 445 s | 8 to 11 | Question cards and countdowns, then feedback |
| 445 to 475 s | 12 | The phone tower and the highway |
| 475 to 520 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t05's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change (the hinge returns); 3 to 4 clear change to the board; 4 to 5 stage change to the map; 5 to 6 clear change to the board; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t06-learning-review.md`, `science_check` = `checks/m-a11-t06-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only, file list): no phone tower plate exists; `ma12-phone-v1.png` and `ma11-phone-budget-v1.png` are handsets, not a tower.

Reused: `ma11-yacht-top-v1.png` (t02's brief). Need (painted, new; see the Codex asset brief): `ma11-phone-tower-v1.png` (this video's handoff and t07's anchor; must be painted before this build).

Coded: the hinge and bars, the proof triangle and algebra, the sea map and rose, working rows, question cards and pictures, the countdown, hand tags, the framed card and key notes, and the handoff's map, road and labels.

### Studio kit use and additions

Uses: `StudioTriangle` (foot and hinge modes), `AlignedAlgebra`, `ParameterSlider`, `LiveReadoutBoard`, `BearingRose`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (from `../checks/maths-a11-kit-needs.md`, trigonometry section):
1. **`StudioTriangle` hinge mode** (first use): two sides fixed at a vertex, the angle swept by a slider, the third side redrawn, and a c² bar against an a² + b² line. Check: at 60°, 90° and 120° the bar reads 117, 225 and 333.
2. **`StudioTriangle` foot mode** (first use): the foot H with the base split into x and b − x, each half lit for its Pythagoras row.

## Codex asset brief (Maths A11 T06, a phone tower for the handoff; also t07's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-t06.md`. The top-view yacht is briefed in `math-a11-t02.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the t06 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-phone-tower-v1.png` (900 × 1600 px): a single steel lattice mobile phone tower with a cluster of grey panel antennas near the top, standing on a small fenced concrete pad with a little grass, seen from the side at a slight angle, on its own. No signal waves, no lights, no company markings.

Sidecar JSON (`ma11-phone-tower-v1.json`): the pixel point of the tower's base centre (the map's point C) and of the antenna cluster. Report inspection on the paper background (`#f6f1e7`) at 320 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-t06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, the yacht's bearing by coordinates, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly.
3. Confirm the proof uses Pythagoras in both halves and x = c cos A, then relabels to c² = a² + b² − 2ab cos C.
4. Confirm the inverse cosine is said to give the angle directly (S11-12), and that no ambiguous case or rule choice is taught.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, every spoken angle carries "degrees", the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t05's final frame.

## YouTube metadata (draft)

Title: The Cosine Rule: Pythagoras with a Correction | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson07.sa.html

A yacht sails 12 km, turns, then sails 9 km. With a right-angle turn, Pythagoras gives the way home. With a 120° turn, it doesn't. Watch the gap grow as the angle opens, prove the cosine rule c² = a² + b² − 2ab cos C by using Pythagoras twice, see why the correction subtracts for acute angles and adds for obtuse ones, find a side from two sides and the angle between them, find an angle from three sides (a negative cosine means obtuse), and get the yacht home with its bearing. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometry and measure of angles.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Examine the proof of the sine rule a/(sin A) = b/(sin B) = c/(sin C), cosine rule c^2 = a^2 + b^2 - 2ab cos C and the area of a triangle formula A = 1/2 ab sin C for a given triangle ABC"
"Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes"
(This video covers the cosine rule parts.)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

Builds on: The sine rule and the area of a triangle. Next: The ambiguous case, and choosing a rule.

#Year11Maths #MathsAdvanced #CosineRule #HSCScience

## Open decisions

- **1. The yacht returns (root; decisions file, open question 1).** A deliberate return to t02's journey, changing only the turn.
- **2. "Back in the bearings video" (learning review).** Scene 1's callback names t02 for viewers who watch in order; the grey chip shows the 15 km so it still reads for anyone who did not.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t05, t04 and t02; check that the hinge makes the correction feel needed before the proof, that each proof line has a spoken reason, that "subtracting a negative adds" is heard with the 120° case, and that A2's "largest angle" step was modelled in scene 6), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
