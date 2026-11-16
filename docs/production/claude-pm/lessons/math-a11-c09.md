# Maths A11 C09: Where does a curve have a given gradient, and what angle does it make? Solving f′(x) = m then using f, normals with a given gradient, and the angle of inclination with tan θ = m, including falling lines (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,513 characters by script (see "Narration length estimate"), 14 scene headings, about 502 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fortieth video of Year 11 Mathematics Advanced (2024), outline order 40, Introduction to differentiation; the last video of this design batch (c10 to c18 are another designer's). Pre-design pack: `../pre-design/maths-a11/math-a11-c09.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson14.sa.html` (`we-2`, y = x² at x = −1, about 117°, and `we-3`, the 45° point on y = x² − 4x, both with their numbers; `we-2`'s method changed to "180° minus the acute angle" by root ruling 2). Route entry: `math-a11-c09` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted driveway (c08's brief) and a marble-run badge (c07's brief) (prefix `ma11-`); every graph, triangle, arc and working row coded.

Owner rules applied: as c01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (home: a driveway), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Calculations with the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci35f0bdbe`: "Find points on a curve where the tangent or normal has a given gradient"
- `ci70bdc1be`: "Examine and use the relationship between the angle of inclination of a line or tangent to a curve, θ, with the positive x-axis, and the gradient, m, of that line or tangent, and establish that tan θ = m"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c08's final frame (the driveway side-on, its coded profile, "gradient limit: ¼", a violet tangent with "where?" and an angle arc with "angle?"). Teaches: points where the tangent has a given gradient by solving f′(x) = m and then using f (the driveway, two points because f′ is quadratic) (`ci35f0bdbe`); a normal with a given gradient, by converting to the tangent's gradient first (`ci35f0bdbe`); the angle of inclination θ from the positive x-axis, anticlockwise, 0° ≤ θ < 180°, and tan θ = m established from the rise-and-run triangle with Year 10 tan (`ci70bdc1be`); for a falling line, θ = 180° minus the acute angle, where tan of the acute angle is |m| (root ruling 2: no unit circle, the rule stated, with a forward reference to trigonometry); angle to point (site `we-3`). Stops at points and angles. Not taught: tangent equations at these points (optional in the pack; c08 already covers them); the sign of f′ (c14); tan of obtuse angles (t strand).

## Decisions

- **Anchor: a curved driveway with a gradient limit (painted plate, live).** The driveway's side profile, y = (9x² − x³)/96 m over 6 m, is flat at the street, steepest in the middle and flat at the garage. "The gradient may not go beyond a quarter" turns into f′(x) = ¼, which has two answers (2 m and 4 m along), with the stretch between them too steep, and tan θ = ¼ gives the slope's angle, about 14°. Home. The pack's anchor 1, with the bumper-scrape framing dropped (scraping depends on the change of grade, not the grade). The limit of ¼ is stated as a supposition ("Suppose"), not a building rule. Near context: w10's entrance ramp is a straight line built to a gradient rule; this is a curve and asks where and at what angle (noted for root). The pack's playground slide (anchor 2) was rejected because c05 uses a water slide.
- **Simulations (standard item 3).**
  1. **Target-gradient rider** (`StudioStackedDerivativePanels` with `FunctionRider` and `StudioLevelLine`; scene 2): top, the driveway profile with a riding violet tangent and a live "gradient" readout; bottom, the graph of f′(x) = (6x − x²)/32 with a dashed level line at ¼; whenever the rider's gradient equals ¼ the tangent flashes green and a dot lands where f′ meets the line (x = 2 and x = 4); between them the profile is shaded "steeper than ¼".
  2. **`InclinationArc`** (scenes 5, 6, 7; new part): an angle arc drawn anticlockwise from the positive x-axis to a line, with a θ readout, the rise-and-run triangle and "tan θ = rise/run = m"; for a falling line it also draws the acute angle α on the other side (grey) and shows θ = 180° − α.
- **Colour roles (fixed, as c01 to c08).** Gradients and tangents violet; the target gradient m **amber** (chip, level line); points' x values blue, heights teal; θ **amber arc** with its readout, the acute α grey; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "run it backwards", "f′(x) = m", "two answers", "steeper than ¼", "then use f", "f, not f′", "normal → tangent first", "anticlockwise from +x", "opposite ÷ adjacent", "tan θ = m", "acute: tan α = 2", "θ = 180° − α", "0° ≤ θ < 180°", "angle → m first".
- **Stage changes (standard item 2).** The driveway (1); the stacked rider and level line (2); g01 board, heights (3); the normal (4); the angle on the driveway (5); the falling tangent (6); g01 board, angle to point (7); framed card (8); question cards (9 to 12); the bracket to the fifth (13); key notes (14).
- **Worked examples (g01 layout).** 2 and 3: the driveway, x = 2 and 4, heights 7/24 ≈ 0.29 m and 5/6 ≈ 0.83 m; crossed "f′(2) = ¼" as the height. 4: normal gradient −¼ on y = x² → tangent gradient 4 → (2, 4). 5: tan θ = ¼, θ ≈ 14°. 6: site `we-2`, y = x² at x = −1, m = −2, θ ≈ 117°; crossed "θ = −63°". 7: site `we-3`, 45° on y = x² − 4x → (2.5, −3.75).
- **Memory aid.** Framed card: "Angle → gradient: tan. Gradient → point: solve f′(x) = m, then f." Second line: "Falling line: θ = 180° − the acute angle."
- **Visual surprise.** The riding tangent flashes twice on the driveway, at 2 m and 4 m, and the two flashes line up exactly with the two places the f′ graph crosses the level line.
- **Site notes (pack section 8).** `we-2`'s method (tan⁻¹(−2) = −63.43°, then add 180°) is replaced by root ruling 2's method: the acute angle from tan α = 2, then θ = 180° − α. The calculator's −63° is shown as the crossed slip. No logged error affects this video.
- **Plain meanings at first use.** Angle of inclination ("the angle a line makes with the positive direction of the x-axis, measured anticlockwise"); acute angle ("less than 90°"); inverse tan ("the calculator's tan⁻¹, which turns a tan value back into an angle", recalled from Year 10); parallel ("same gradient", recalled from w11).
- **Attempts (pack questions).** A1: the points on y = x³ − 3x where the tangent is parallel to y = 9x + 2: (2, 2) and (−2, −2); crossed "x = 2 only". A2: on y = x² + 2x, the point where the tangent is inclined at 135°, (−3/2, −3/4), and the angle at x = 1, about 76°; crossed "m = 1 for 135°".
- **Mistake scene:** none separate. x put back into f′ (3 crossed); one root only (A1 crossed); a negative angle (6 crossed); the wrong sign of m for an obtuse angle (A2 crossed); a normal's gradient used as the tangent's (4 tag).
- **Cause chain taught, in order:** (1) f′(x) gives the gradient at every x, so a given gradient m is reached where f′(x) = m (2); (2) the heights come from f because the points are on the curve (3); (3) a normal of gradient m sits on a tangent of gradient −1/m (4); (4) under a rising tangent the rise is opposite θ and the run adjacent, so tan θ = rise/run = m (5); (5) a falling tangent makes an acute angle α with the x-axis on the other side, tan α = |m|, and θ is measured anticlockwise from the positive x-axis, so θ = 180° − α (6); (6) an angle gives a gradient by tan, and then the point by (1) and (2) (7).
- **Entry knowledge (route):** c08 (f′(a) is the tangent's gradient; the normal's −1/m); w04 (solving quadratic equations by factorising); Year 10 trigonometry (tan θ = opposite/adjacent for acute angles; the calculator's tan⁻¹); w11 (parallel lines have equal gradients).
- **Handoff (to math-a11-c10, "How does the chain rule handle a function inside a function?").** Scene 13: an algebra frame, no plate (the c10 pack's start: try (3x + 2)⁵). Centre, 72 px: "y = (3x + 2)⁵" with the inside "3x + 2" tinted blue in a bracket; left chip "expand five brackets? slow" with five small bracket glyphs; right chip "power rule alone: 5(3x + 2)⁴ ?" (amber, with a "?"); bottom chips "Next: a function inside a function" and "?". This is c10's opening frame; it fits the c10 pack's start (recall f(g(x)) from w27, then (3x + 2)⁵) and commits c10 to no anchor.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Driveway: f(x) = (9x² − x³)/96, 0 ≤ x ≤ 6 m; f(0) = 0, f(6) = 9/8 = 1.125 m; f′(x) = (18x − 3x²)/96 = (6x − x²)/32; f′(0) = f′(6) = 0; steepest f′(3) = 9/32 ≈ 0.281 (about 15.7°). f′(x) = ¼ ⟺ x² − 6x + 8 = 0 ⟺ x = 2, 4; f(2) = 28/96 = 7/24 ≈ 0.292; f(4) = 80/96 = 5/6 ≈ 0.833. The ¼ limit is a supposition for the problem; real driveway guidance varies and is not claimed.
  (b) Normal gradient −¼ on y = x²: tangent gradient 4: 2x = 4, x = 2, (2, 4).
  (c) tan⁻¹(¼) = 14.036°, "about fourteen degrees". tan 45° = 1.
  (d) `we-2`: y = x² at −1: m = −2; α = tan⁻¹ 2 = 63.435°; θ = 116.565°, about 117°. tan(116.565°) = −2 (the forward reference).
  (e) `we-3`: tan 45° = 1; 2x − 4 = 1, x = 5/2; f(5/2) = 25/4 − 10 = −15/4.
  (f) A1: 3x² − 3 = 9, x = ±2; (2, 2), (−2, −2). A2: 135° = 180° − 45°, m = −1; 2x + 2 = −1, x = −3/2, y = 9/4 − 3 = −3/4; at x = 1, m = 4, θ = tan⁻¹ 4 = 75.96°, about 76°.
  (g) Pronunciations: "nine x squared minus x cubed, all over ninety-six"; "theta"; "alpha" (on screen only, spoken as "that angle" or "the acute angle"); "the inverse tan of a quarter"; "sixty-three point four"; "minus three on two"; "one hundred and thirty-five degrees".
  (h) Windows: driveway profile x 0 to 6 m, y 0 to 1.3 m (vertical scale exaggerated ×2, labelled "heights × 2"; the angle arc in scene 5 uses an equal-scale inset so 14° looks like 14°); f′ panel x 0 to 6, y 0 to 0.35; y = x² panel x −2 to 2.5, y −1 to 5 (equal units for the angle arcs); y = x² − 4x panel x −0.5 to 4.5, y −4.5 to 1.

Main question: *A driveway's gradient mustn't go beyond a quarter. Where is it exactly a quarter, and at what angle? Where does a curve have a given gradient, and what angle does it make?*
Entry knowledge (c08, w04, w11, Year 10 tan): the tangent's gradient f′(a) and the normal's −1/m; solving quadratics; parallel lines; tan of an acute angle.
Stops after: f′(x) = m then f; normals with a given gradient; tan θ = m with θ from the positive x-axis, 0° ≤ θ < 180°, falling lines by 180° minus the acute angle. No tangent equations at these points, no unit circle.
Handoff: math-a11-c10: "y = (3x + 2)⁵: expand five brackets, or a shortcut for a function inside a function?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): gradients and tangents violet; the target m amber; x blue; heights teal; θ amber arc; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: where is it exactly a quarter?
> Here's that driveway, rising from the street to a garage six metres along. Its height, x metres along, is nine x squared minus x cubed, all over ninety-six, in metres. It's flat at the street, steepest in the middle, and flat again at the garage. Suppose a gradient of one quarter is the steepest we're allowed. Where along the driveway is the gradient exactly a quarter? And what angle does that make with the ground? Where does a curve have a given gradient, and what angle does it **make**?

Visual: opens on c08's final frame exactly (the driveway plate `ma11-driveway-v1.png`, its coded profile, "gradient limit: ¼", the hovering violet tangent with "where?" and the arc with "angle?", chips "Next: gradient given, find the point and the angle" and "?"). On the first sentence the "Next" chips fade; equation chip 52 px "y = (9x² − x³)/96" (x blue, y teal), axis ticks "0 m … 6 m" under the drive. On "flat at the street" a riding violet tangent moves from the street to the garage: flat, steep, flat, with its readout. On "make" heading "Gradient given: where? At what angle?". The chips "where?" and "angle?" move to the top right.

### 2. run it backwards: solve f′(x) = m
> This time we know the gradient and want the point, so we run the last video backwards. First, differentiate. f prime of x is eighteen x minus three x squared, over ninety-six, which simplifies to six x minus x squared, over thirty-**two**. Now set that equal to a quarter. Multiply both sides by thirty-two, and six x minus x squared equals eight. Rearranged, that's x squared minus six x plus eight equals zero, which factorises as x minus two, times x minus four. So x is two or **four**. There are two answers because f prime is a quadratic. On the graph of f prime, the line at height one quarter crosses it **twice**.

Visual: stage change to the stacked panels (each 1,200 × 380 px). Top: the profile with the riding tangent and readout "gradient". Bottom: rows at the left, 52 px: on "two" "f′(x) = (18x − 3x²)/96 = (6x − x²)/32" (violet), hand tag "run it backwards"; "(6x − x²)/32 = ¼" (¼ amber), tag "f′(x) = m"; "6x − x² = 8"; "x² − 6x + 8 = 0"; "(x − 2)(x − 4) = 0"; on "four" "x = 2 or x = 4" (blue, green frame). On "twice" the bottom panel's f′ graph draws with the amber dashed level line at ¼; two dots land at x = 2 and x = 4; at the same moment the top rider stops at 2 m and 4 m, its tangent flashing green each time, hand tag "two answers". The profile between 2 and 4 shades, tag "steeper than ¼".

### 3. the heights come from f
> Now find the heights, by putting x back into f, not f prime. f of two is thirty-six minus eight, over ninety-six, which is about zero point two nine metres. f of four is a hundred and forty-four minus sixty-four, over ninety-six, about zero point eight three **metres**. So the gradient is exactly a quarter two metres along, about zero point two nine metres up, and four metres along, about zero point eight three metres up. In between, the driveway is steeper than a quarter. Putting two into f prime is the slip. That just gives a quarter **back**.

Visual: clear change to the g01 board with the profile small at the right. Rows, 52 px: "f(2) = (36 − 8)/96 = 7/24 ≈ 0.29 m" (teal); on "metres" "f(4) = (144 − 64)/96 = 5/6 ≈ 0.83 m" (teal), hand tag "then use f". Framed answer (green): "(2, 0.29) and (4, 0.83), in metres". On the profile the two points ring and the shaded stretch between them pulses. On "back" a red slip "height = f′(2) = ¼" writes and is crossed, caption "f, not f′".

### 4. normals with a given gradient
> Normals work the same way, with one extra step. Suppose the normal must have gradient minus a quarter. Then the tangent's gradient is the negative reciprocal, which is **four**. On y equals x squared, solve two x equals four, so x is two, and the point is two, **four**. That's the end of the marble's track again. So for a normal, turn its gradient into the tangent's gradient first, then solve f prime of x equals that.

Visual: clear change: y = x² (equal units, x −1 to 3, y −1 to 6; 900 × 640 px) with the marble-run badge (240 px) at the top left. Row, 52 px: "m_N = −¼ → m_T = 4", hand tag "normal → tangent first", grey chip "c08: flip and change the sign". On "four" (first) the rider moves along y = x² until its tangent's readout hits 4; row "2x = 4, x = 2". On "four" (second) the point (2, 4) rings, the violet tangent and amber dashed normal draw (normal labelled "gradient −¼"), framed "(2, 4)" (green).

### 5. the angle of inclination: tan θ = m
> Now the angle. The angle of inclination, theta, is the angle a line makes with the positive direction of the x axis, measured anticlockwise. Draw a rise-and-run triangle under the tangent. The rise is opposite theta, and the run is adjacent, so tan theta is the rise over the run. And rise over run is the gradient. So tan theta equals **m**. For the driveway, tan theta is a quarter, so theta is the inverse tan of a quarter, about fourteen **degrees**. Going the other way, a gradient of one gives forty-five degrees.

Visual: stage change: an equal-scale inset of the driveway's tangent at x = 2 (1,000 × 640 px), the plate as a badge. `InclinationArc`: the amber arc opens anticlockwise from the positive x-axis to the tangent, hand tag "anticlockwise from +x"; the triangle under it, run "4" (blue), rise "1" (teal), labels "adjacent" and "opposite", hand tag "opposite ÷ adjacent". Row, 52 px: "tan θ = rise/run"; on "m" "tan θ = m" (framed, violet), hand tag "tan θ = m". Row: "tan θ = ¼, θ = tan⁻¹(¼)"; on "degrees" "θ ≈ 14°" (green frame). On the last sentence a small chip: "m = 1 → θ = 45°", with a 45° line drawn faintly.

### 6. falling lines: 180° minus the acute angle
> What if the gradient is negative? Take y equals x squared at x equals minus one, where the gradient is minus two. The tangent falls, so it makes an acute angle with the x axis, on the left, and tan of that angle is two. That's about sixty-three point four **degrees**. But theta is measured anticlockwise from the positive x axis, so theta is the angle on the other side. It's a hundred and eighty minus sixty-three point four, about one hundred and seventeen **degrees**. A calculator gives minus sixty-three for the inverse tan of minus two, and that negative angle is the slip. Angles of inclination run from zero up to one hundred and eighty degrees. In the trigonometry videos, you'll see that tan of a hundred and seventeen degrees really is minus **two**.

Visual: clear change: y = x² (equal units, x −2.5 to 2, y −1 to 5; 1,100 × 720 px). The violet tangent at (−1, 1) falling, label "m = −2", meeting the x-axis at (−½, 0). `InclinationArc`: the grey acute angle α at the crossing, between the tangent and the negative x direction, with a triangle (run 1, rise 2), hand tag "acute: tan α = 2"; on "degrees" (first) "α ≈ 63.4°" (grey). Then the amber θ arc opens anticlockwise from the positive x-axis all the way round to the tangent, hand tag "θ = 180° − α"; on "degrees" (second) row 52 px "θ = 180° − 63.4° ≈ 117°" (green frame). On "that negative angle is the slip" a red slip "θ = tan⁻¹(−2) = −63°" writes and is crossed, caption "0° ≤ θ < 180°". On "two" a grey chip "trig videos: tan 117° = −2".

### 7. worked example: from an angle to a point
> Now both ideas together. Find the point on y equals x squared minus four x where the tangent makes an angle of forty-five degrees with the x axis. Forty-five degrees means m equals tan forty-five, which is **one**. f prime of x is two x minus four, so two x minus four equals one, and x is two point **five**. Then f of two point five is six point two five minus ten, which is minus three point seven **five**. So the point is two point five, minus three point seven five.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the point on y = x² − 4x where the tangent makes an angle of 45° with the x-axis." Givens card: "θ = 45°" (amber). Rows, 52 px: on "one" "m = tan 45° = 1" (hand tag "angle → m first"); "f′(x) = 2x − 4 = 1"; on "five" "x = 2.5" (blue); on "five" (second) "f(2.5) = 6.25 − 10 = −3.75" (teal). Framed answer (green): "(2.5, −3.75)". Small plot at the right with the tangent at 45° and its amber arc.

### 8. memory aid
> Here's the summary. Angle to gradient, use tan. Gradient to point, solve f prime of x equals m, then use f. And a falling line's angle is a hundred and eighty, minus the acute **one**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the driveway tangent with its amber arc, and a falling tangent with α and θ. Main line, hand font 56 px: "Angle → gradient: tan. Gradient → point: solve f′(x) = m, then f." On "one" the second line, 40 px: "Falling line: θ = 180° − the acute angle." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the points on y equals x cubed minus three x where the tangent is parallel to the line y equals nine x plus two. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the points on y = x³ − 3x where the tangent is parallel to the line y = 9x + 2." The full question stays on screen. Picture: y = x³ − 3x (x −3 to 3) and the line y = 9x + 2 drawn, no tangents. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Parallel lines have the same gradient, so the tangent's gradient is **nine**. d y by d x is three x squared minus three, so three x squared minus three equals nine. That gives x squared equals four, so x is two or minus **two**. f of two is two, and f of minus two is minus two. So the points are two, two and minus two, minus **two**. Stopping at x equals two is the slip. A square has two square **roots**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: on "nine" "m = 9" (amber); "3x² − 3 = 9, x² = 4"; on "two" "x = 2 or x = −2" (blue); "f(2) = 2, f(−2) = −2" (teal); on "two" (last) framed answer (green): "(2, 2) and (−2, −2)", two parallel violet tangents on the picture. On "roots" a red slip "x = 2 only" writes and is crossed, caption "± 2". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. For y equals x squared plus two x, find the point where the tangent is inclined at one hundred and thirty-five degrees to the positive x axis. Then find the angle of inclination of the tangent at x equals one, to the nearest degree. Pause here to answer.

Visual: `QuestionCard`, 40 px: "For y = x² + 2x, find the point where the tangent is inclined at 135° to the positive x-axis. Find the angle of inclination of the tangent at x = 1, to the nearest degree." Picture: y = x² + 2x (x −3.5 to 1.5), no tangents or angles. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> A hundred and thirty-five degrees is a hundred and eighty minus forty-five, so the tangent falls at forty-five degrees, and m is minus **one**. Two x plus two equals minus one, so x is minus three on two, and y is minus three on **four**. At x equals one, m is four, and the inverse tan of four is about seventy-six **degrees**. Using plus one is the slip. That tangent **falls**.

Visual: the card shrinks to the top. Rows, 44 px: on "one" "135° = 180° − 45° → falling at 45°, m = −1"; on "four" "2x + 2 = −1, x = −3/2, y = 9/4 − 3 = −3/4" with framed "(−3/2, −3/4)" (green); on "degrees" "x = 1: m = 4, θ = tan⁻¹ 4 ≈ 76°" (green frame); the two tangents and arcs on the picture. On "falls" a red slip "m = 1 for 135°" writes and is crossed, caption "135° falls: m = −1". Hold about 1 s.

### 13. handoff
> So now we can differentiate sums of powers, find tangents and normals, and run the gradient backwards. But what about a bracket raised to a power, like three x plus two, all to the fifth? We could expand five brackets, which is slow. Or is there a shortcut that handles a function inside a function? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades with the driveway badge. Board clear to the algebra frame: centre, 72 px, "y = (3x + 2)⁵" with "3x + 2" tinted blue inside its bracket; on "expand five brackets" a left chip "expand five brackets? slow" with five small bracket glyphs stacking; on "shortcut" a right chip "power rule alone: 5(3x + 2)⁴ ?" (amber, "?"). On "next" chips "Next: a function inside a function" and "?". Hold about 2 s. This is c10's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Given gradient m: solve f′(x) = m, then find y from f (not f′).
- Normal with gradient m: the tangent has gradient −1/m.
- Angle of inclination θ: from the positive x-axis, anticlockwise; tan θ = m.
- Falling line: θ = 180° − the acute angle (0° ≤ θ < 180°).
- Parallel lines have equal gradients; a quadratic f′ can give two points.

Memory aid (framed card, right side, as in scene 8): *Angle → gradient: tan. Gradient → point: solve f′(x) = m, then f.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and c10's opening frame.

## Teaching checks

- **Does it explain causes?** Why solve f′(x) = m: f′ gives the gradient at every x (2). Why two answers: f′ is quadratic and the level line crosses it twice (2). Why heights from f: the points are on the curve (3). Why a normal needs −1/m first: the tangent at that point is perpendicular to it (4). Why tan θ = m: rise is opposite, run adjacent (5). Why 180° − α: θ is measured anticlockwise from the positive x-axis (6).
- **Misconceptions addressed:** x put into f′ (3 crossed); one root only (A1 crossed); a negative angle (6 crossed); sign of m for obtuse θ (A2 crossed); measuring from the y-axis or clockwise (5, 6 tags).
- **Visual standard, item by item:** 1 the painted driveway with a live rider from the first frame, returning in 3 and 5; 2 a new stage every 30 to 50 s; 3 the stacked rider with the level line, `InclinationArc` for rising and falling lines; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 3 and 7; 8 framed card and five bullets; 9 the rider's two flashes lining up with f′'s two crossings.
- **One idea at a time:** solving f′ = m (2), heights (3), normals (4), tan θ = m (5), falling lines (6), angle to point (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 29 s and 27 s.
- **Avoided double teaching:** the normal's −1/m (c08), solving quadratics (w04), tan of an acute angle (Year 10) and parallel gradients (w11) are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci35f0bdbe` (2, 3, 4, 7, A1, A2; key notes 1, 2, 5); `ci70bdc1be` (5, 6, 7, A2; key notes 3, 4).
- **Out of scope by design:** tangent equations at these points (c08); tan of obtuse angles (trigonometry); the sign of f′ (c14).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Find the points on y = x³ − 3x where the tangent is parallel to the line y = 9x + 2."
Model answer: parallel means gradient 9: 3x² − 3 = 9, x² = 4, x = 2 or −2. Points (2, 2) and (−2, −2). Classic mistake (crossed): "x = 2 only".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 3 marks suggested).** "For y = x² + 2x, find the point where the tangent is inclined at 135° to the positive x-axis. Find the angle of inclination of the tangent at x = 1, to the nearest degree."
Model answer: 135° = 180° − 45°, so the tangent falls at 45° and m = −1. 2x + 2 = −1 gives x = −3/2, y = 9/4 − 3 = −3/4: (−3/2, −3/4). At x = 1, m = 4, θ = tan⁻¹ 4 ≈ 76°. Classic mistake (crossed): "m = 1 for 135°".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Driveway | f(x) = (9x² − x³)/96, 0 ≤ x ≤ 6; rises 1.125 m (author) | 1 |
| Gradient ¼ | f′(x) = (6x − x²)/32; x² − 6x + 8 = 0; x = 2, 4 | 2 |
| Heights | f(2) = 7/24 ≈ 0.29 m; f(4) = 5/6 ≈ 0.83 m | 3 |
| Normal | m_N = −¼ → m_T = 4; 2x = 4; (2, 4) | 4 |
| Angle | tan θ = ¼, θ ≈ 14°; m = 1 → 45° | 5 |
| Site `we-2` | x² at −1: m = −2; α ≈ 63.4°; θ ≈ 117°; slip −63° | 6 |
| Site `we-3` | tan 45° = 1; 2x − 4 = 1, x = 2.5; f(2.5) = −3.75 | 7 |
| A1 | 3x² − 3 = 9; x = ±2; (2, 2), (−2, −2) | 9, 10 |
| A2 | m = −1; x = −3/2, y = −3/4; at 1: m = 4, θ ≈ 76° | 11, 12 |
| Handoff | (3x + 2)⁵ (no derivative stated) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c01c09/verify.py`); Codex to re-check.

- f(x) = (9x² − x³)/96: f′(x) = −x(x − 6)/32; f′ = ¼ at x = 2, 4; f(2) = 7/24 ≈ 0.2917; f(4) = 5/6 ≈ 0.8333; f(6) = 9/8; f′(0) = f′(6) = 0; f′(3) = 9/32, tan⁻¹(9/32) ≈ 15.71°.
- tan⁻¹(¼) ≈ 14.036°.
- tan⁻¹ 2 ≈ 63.435°; 180° − 63.435° ≈ 116.565°.
- y = x² − 4x: 2x − 4 = 1 ⟹ x = 5/2; y = −15/4.
- y = x³ − 3x: 3x² − 3 = 9 ⟹ x = ±2; y(2) = 2, y(−2) = −2.
- y = x² + 2x: 2x + 2 = −1 ⟹ x = −3/2; y = −3/4; tan⁻¹ 4 ≈ 75.964°.
- Normal −¼ on y = x²: 2x = 4, (2, 4).

## Memory aid check

- **"Angle → gradient: tan. Gradient → point: solve f′(x) = m, then f."** Original. Meaning, as said in scene 8: an angle of inclination θ gives the gradient m = tan θ (for a falling line, m is minus tan of the acute angle); a gradient m gives the x values by solving f′(x) = m, and the points by substituting into f. Second line: θ = 180° − the acute angle for a falling line. Assumptions checked: 0° ≤ θ < 180°; θ = 90° (vertical) has no gradient and is excluded; "tan" here is Year 10 acute tan, with obtuse θ handled by the 180° rule (root ruling 2). It helps a new case: a tangent at 60° has m = tan 60° ≈ 1.73. Introduced after scenes 2 to 7.
- **Considered, not used:** "tan θ = m, always" (true but students then apply tan⁻¹ to a negative m and get a negative angle; the card's second line prevents it).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,513 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the riders, the level line, the arcs) and the 45 s notes scene: about 502 s. Characters per scene (1 to 14): 489, 610, 543, 413, 511, 750, 460, 180, 150, 392, 264, 364, 312, 75. Speech before the notes is about 409 s, 68 s under the 570 s cap. Feedback speech: about 29 s and 27 s.

Reserve trims if the voiced take runs long: scene 4's marble sentence; scene 6's forward-reference sentence (keep the chip).

## Scene list and build ids

Lesson key `m-a11c09` (route math-a11-c09). Explainer folder `src/explainer/lessons/math-a11-c09`; build inputs in `docs/production/claude-pm/lessons/math-a11-c09/` (at voicing).

In order (14 scene headings): hook-driveway, solve-fprime, heights-from-f, normal-given, tan-theta, falling-lines, angle-to-point, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 38 s | 1 | c08's frame; the driveway rider |
| 38 to 92 s | 2 | Stacked panels, level line at ¼ |
| 92 to 132 s | 3 | g01 board: heights |
| 132 to 162 s | 4 | The normal on y = x² |
| 162 to 208 s | 5 | The angle on the driveway |
| 208 to 262 s | 6 | The falling tangent |
| 262 to 296 s | 7 | g01 board: angle to point |
| 296 to 312 s | 8 | Framed memory card |
| 312 to 420 s | 9 to 12 | Question cards and countdowns, then feedback |
| 420 to 446 s | 13 | The bracket to the fifth |
| 446 to 491 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c08's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 clear change; 4 to 5 stage change; 5 to 6 clear change; 6 to 7 clear change to the board; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c09-learning-review.md`, `science_check` = `checks/m-a11c09-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no driveway plate exists (c08's brief paints one).

Need (painted): none new. Reused: `ma11-driveway-v1.png` (c08's brief, with its sidecar profile), `ma11-marble-run-v1.png` (c07's brief, badge).

Coded: every graph, rider, level line, triangle, arc and readout, working boards, the bracket frame, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `StudioStackedDerivativePanels`, `FunctionRider`, `StudioLevelLine`, `StudioTangentTriangle`, `QuarterTurnNormal`, `PlateImg`, `HandTag`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`InclinationArc`** (new): on an equal-unit plot, an arc drawn anticlockwise from the positive x-axis to a line through its x-intercept, with a θ readout computed as tan⁻¹ m for m ≥ 0 and 180° − tan⁻¹|m| for m < 0; optional grey acute angle α and rise-and-run triangle. Check: θ readout and the drawn arc agree within 0.5°, and θ is always in [0°, 180°).
2. **Match flash on `FunctionRider`**: the tangent flashes green where the rider's gradient equals a target m (crossings computed from f′ − m, not sampled).

## Codex asset brief (Maths A11 C09)

No new plate. The driveway is painted under c08's brief (with its profile sidecar) and must exist before the c08 build. The final frame is coded algebra only.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly.
3. Confirm obtuse angles use "180° minus the acute angle" (root ruling 2), the calculator's negative angle appears only as the crossed slip, and no unit circle or tan of an obtuse angle is used as a method.
4. Confirm the ¼ limit is presented as a supposition, not a building regulation.
5. Confirm heights always come from f, and both roots are kept in A1.
6. Confirm the final frame shows (3x + 2)⁵ without stating its derivative, so c10's designer is free.
7. Confirm both attempts carry every demand and neither card nor picture shows an answer.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c08's final frame.

## YouTube metadata (draft)

Title: Given Gradient and Angle of Inclination: tan θ = m | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson14.sa.html

A driveway's gradient mustn't go beyond a quarter. Where is it exactly a quarter, and what angle is that? Run the derivative backwards: solve f′(x) = m, then use f for the heights. Find points where a normal has a given gradient, see why tan θ = m from a rise-and-run triangle, and find the angle of a falling tangent as 180° minus the acute angle. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Find points on a curve where the tangent or normal has a given gradient"
"Examine and use the relationship between the angle of inclination of a line or tangent to a curve, θ, with the positive x-axis, and the gradient, m, of that line or tangent, and establish that tan θ = m"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Tangents and normals. Next: The chain rule.

#Year11Maths #MathsAdvanced #AngleOfInclination #HSCScience

## Open decisions

- **1. The c10 join (root and c10's designer).** The final frame is coded algebra ((3x + 2)⁵, "expand five brackets? slow", "power rule alone: 5(3x + 2)⁴ ?"), matching the c10 pack's start without choosing c10's anchor. If c10's designer wants its anchor in the frame, only scene 13's frame changes.
- **2. Near context with w10 (root).** w10's entrance ramp is a straight line built to a gradient rule; this driveway is a curve and asks where and at what angle. Judged distinct.
- **3. "Alpha" (voice pilot).** α is on screen only; the narration says "that angle" or "the acute angle".

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from c08, w04 and Year 10 tan; check that "run it backwards" is followed, that the two crossings on the f′ graph are linked to the two places on the driveway, that tan θ = m is established rather than announced, and that the 180° rule is clear without trigonometry), then the Codex maths check and error check, then voicing and a build to grade A.
