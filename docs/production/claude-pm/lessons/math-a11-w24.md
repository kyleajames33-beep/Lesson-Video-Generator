# Maths A11 W24: How does Pythagoras give the equation of a circle centred at the origin? x² + y² = r², graphing it, testing points, the equation from a graph, and domain and range for a relation (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,060 characters by script (build parser rules), 14 scene headings, about 543 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w24-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Optional, scene 2 (r = 10 not said): **accepted**: "On the treble wire, it's one hundred at every point." (the cue moves to "point"), with a chip "treble wire: r = 10".
2. Optional, feedback 2 ("point oh seven"): **accepted**: "seven point zero seven", following root's spoken-decimals ruling ("zero" wording, not "oh" or "nought").

Narration now 6,060 characters by script, about 543 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: twenty-fourth video of Year 11 Mathematics Advanced (2024), outline order 24, Working with functions. Pre-design pack: `../pre-design/maths-a11/math-a11-w24.md` (brief 243). Site lessons (read through the pack's quotations, read only): `working-with-functions/lesson22.sa.html` (Circles Centred at the Origin, SHA256 `ba95b53d15b73b86d4e851c8504f79877263eef426f3f05d82dfdbb0803dcfc6`; `we-1`, `we-2`, `we-3` used with the site's numbers unchanged) and, as the second source for `ci7cdb9b15`, `working-with-functions/lesson23.sa.html` `we-3` (SHA256 `b7dc15292366027dfd91478ac966025c56a70a50311628c75ef66d2d70395bfa`). Route entry: `math-a11-w24` in `../../programme/maths-a11-route-inputs-2.json`. Visual system: maths studio kit; painted plates for the dartboard and dart (prefix `ma11-`); circles, triangles, gauges and algebra coded.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for the real objects, coded diagrams for the maths; no people, hands or faces (no player is shown, only the board and darts); one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a game, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci6022d0ef` (Circles and semicircles): "Derive the equation of a circle of radius r with centre at the origin by considering Pythagoras’ theorem"
- `cib62f4915` (Circles and semicircles): "Graph circles of the form x^2 + y^2 = r^2 from their equations"
- `ci7cdb9b15` (Circles and semicircles): "Determine the equation of a circle of the form x^2 + y^2 = r^2 given its graph"
- `ci4d0e93cc` (Properties of functions, relations and graphs): "Extend the definitions of domain and range to relations"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w23's final frame (the dartboard and one dart with its tip 6 cm right of and 8 cm below the bullseye, dashed legs "6 cm" and "8 cm", a "?" on the straight line, and w23's "Next" chip; the join is fixed in `../checks/root-decisions-maths-a11-w24-w31.md`). Teaches: the derivation of x² + y² = r² from Pythagoras for any point, with the sign of x or y removed by squaring (`ci6022d0ef`); "on the circle" exactly when the coordinates satisfy the equation, and the inside or outside test by comparing x² + y² with r²; graphing from the equation with the radius as √(right side) and four axis points (site `we-2`, `cib62f4915`); testing a point (site `we-3`); the equation from a graph through a point (lesson23 `we-3`) or an axis crossing (`ci7cdb9b15`); the circle as a relation that fails the vertical line test, with domain and range extended to relations as the sets of x and y values its points use (`ci4d0e93cc`). Stops at circles centred at the origin. Not taught: semicircles and solving for y (w25; the handoff only asks the question); circles with other centres and completing the square (g06); x² + y² = 0 and negative right sides (author note only).

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a dartboard and its darts (painted plates, live).** A dartboard is a set of circles about one centre, and every dart asks one question: how far is the tip from the bullseye? Pythagoras answers it from the across and down distances, and the treble ring's inner wire becomes the circle x² + y² = 100 in centimetres. The hook dart at (6, −8) is exactly 10 cm out, so it is "on the wire"; two more darts, (5, 5) and (12, 9), are inside and outside. Games, not science. No Year 12 Maths design and no w01 to w14 design uses darts or a dartboard (grep, 16 Nov), and no w15 to w23 pack suggests one. The pack's garden sprinkler was rejected because w18's pack suggests a garden sprinkler; the Bluetooth speaker range was rejected because phones are already Year 12's d03, i03, t04 and f14 contexts and no speaker plate exists.
- **Model board (author note, not learner copy).** A regulation board's treble ring inner wire is 99 mm from the centre; narration says "about ten centimetres, so let's call it exactly ten". Codex paints the treble inner wire at exactly 10/17 of the double ring's outer radius (170 mm), so the coded 10 cm circle lies on the painted wire.
- **Simulations (standard item 3).**
  1. **`CircleTracer`** (scene 2, new part): a point runs round the circle x² + y² = 100 on an equal-scale plot over the board; a right-angled triangle hangs from it to the x axis, its horizontal side blue, its vertical side teal and its hypotenuse amber; a `LiveReadoutBoard` shows "x", "y", "x²", "y²" and "x² + y²" (violet), all computed from the point. x and y change sign and size; x² + y² reads 100 throughout. It pauses at (6, −8), (−6, 8) and (−10, 0).
  2. **`RadiusGauge`** (scene 3, new part on `LiveReadoutBoard`): a dart's x² + y² grows as a violet bar against an amber mark at r² = 100; the verdict chip reads "inside" (bar short), "on" (bar meets the mark) or "outside" (bar passes it), computed from the sum.
  3. **`VerticalLineSweep`** (w07) and **`AxisShadow`** (w09) on the circle (scene 4): the hit count reads 2 inside the circle; the lamp casts a blue domain shadow on the x axis and a teal range shadow on the y axis, both closed at ±10.
- **Colour roles (fixed for the whole video).** x and the across distance **blue**; y and the up distance **teal** (the strand's input and output pair, root ruling 12); the radius r and r² **amber**; the sum x² + y² (the distance squared) **violet**; domain shadow blue and range shadow teal (as w09); answer **green**; mistake **red**, crossed slips only; ink otherwise.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "across", "down", "radius", "always 100", "squared: no sign", "distance²", "inside", "on", "outside", "2 hits: not a function", "shadow: domain", "shadow: range", "right side = r²", "check: 5 from O", "50 > 49". At most two live at once.
- **Stage changes (standard item 2).** The board and dart (1); the tracer over the board (2); the gauge with three darts (3); the sweep and shadows (4); three g01 boards (5 to 7); the framed card (8); question cards (9 to 12); the netball court (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 5: site `we-2` (crossed "radius 49"). 6: site `we-3` (crossed "9 − 16 = −7: not on it"). 7: lesson23 `we-3` plus an axis-crossing reading (crossed "x² + y² = 5"). Feedback scenes: givens strip, framed answer, one crossed slip each.
- **Memory aid (standard item 8).** Framed card: "Across squared plus up squared is radius squared." Key: "x² + y² = r². The right side is r², so r = √(right side)." Badge: the dart's right-angled triangle.
- **Visual surprise (standard item 9).** As the tracer's point goes round, x and y swap sizes and change sign, x² and y² trade places on the readout, and their sum never moves from 100.
- **Site sources and corrections.** The pack's note on the site's "length x and length y" wording is applied: the narration says the side lengths are x and y "without their signs", and that squaring removes the sign, so the equation holds in every quadrant. No logged S11 correction applies to lessons 22 or 23 `we-3`. The pack's ownership note is followed: `ci7cdb9b15` is taught here (scene 7), with lesson23 `we-3` as its source.
- **Plain meanings at first use.** Origin ("the point zero, zero; here, the bullseye"); radius ("the distance from the centre to the circle"); relation ("a set of points, where one x can pair with more than one y", recalled from w07); domain and range of a relation ("every x value its points use; every y value they use"); "on the circle" ("its coordinates fit the equation").
- **Attempts.** A1 (pack question 1, point changed): through (−5, 12) rather than (−8, 6), because (−8, 6) gives r = 10, the hook's own wire. Answer x² + y² = 169, r = 13, domain and range [−13, 13]; crossed "domain [−169, 169]". A2 (pack question 2): (5, −5) against x² + y² = 49; 50 > 49, just outside; crossed "√50 ≈ 7, so on the circle".
- **Mistake scene:** none separate. Radius read as r² (5 crossed; 7 tag); squaring a negative to a negative (6 crossed); r for r² in the equation (7 crossed); domain from r² (A1 crossed); rounding a distance before comparing (A2 crossed); "a circle is a function" (4, positively).
- **Cause chain taught, in order:** (1) a point's across and down distances and its distance from the centre form a right-angled triangle (1, 2); (2) Pythagoras makes the sum of the squared legs equal the squared radius, and squaring removes signs, so x² + y² = r² holds for every point on the circle and only for those points (2); (3) so x² + y² compared with r² sorts any point as inside, on or outside (3); (4) a vertical line meets the circle twice, so it is a relation, and its domain and range are the x and y values its points use, one radius either side (4); (5) the right side is r², so the radius is its root, and the axis points are (±r, 0) and (0, ±r) (5); (6) any one point on a graph gives r² (7).
- **Entry knowledge (route):** w07 (relations and the vertical line test); w09 (domain and range, interval notation); Stage 5 Pythagoras.
- **Handoff (to w25, "How does solving a circle for y or x split it into semicircles?").** Scene 13: the netball court plate (`ma11-netball-court-top-v1.png`, painted under w25's brief), its near goal line along a coded x axis, a coded circle of radius 4.9 m about the goal line's midpoint, the half on court drawn solid and the half beyond the end line dashed grey; the equation "x² + y² = 4.9²" beside it; chips "Next: an equation for half a circle" and "?". This is w25's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Board model: treble inner wire 10 cm (regulation 9.9 cm); darts at (6, −8): 100, on; (5, 5): 50, inside, distance 5√2 ≈ 7.07 cm; (12, 9): 225, outside, 15 cm.
  (b) Derivation in every quadrant: the legs have lengths |x| and |y|; |x|² = x², so x² + y² = r². |x| is not named (w30 owns it).
  (c) Converse: if x² + y² = r² with r > 0, then the distance √(x² + y²) = r, so the point is on the circle.
  (d) x² + y² = 0 is the single point (0, 0) and x² + y² = −4 has no points: kept out of learner copy (no question needs it; the review may add a tag).
  (e) Pronunciations: "x squared plus y squared equals r squared"; "three, minus four"; "minus five, twelve"; "one sixty-nine"; "root fifty"; "four point nine".
  (f) Windows: board plot x and y from −18 to 18 (cm), equal scale, registered to the plate's sidecar (centre and the double ring's outer radius in px); worked-example plots −9 to 9, equal scale.

Main question: *A dart lands 6 cm right of the bullseye and 8 cm below it. Is it exactly on the 10 cm wire? Pythagoras answers for one dart. How does Pythagoras give the equation of a circle centred at the origin?*
Entry knowledge (w07, w09, Stage 5): relations and the vertical line test; domain and range in interval notation; Pythagoras' theorem.
Stops after: the derivation, inside, on or outside, graphing from the equation, testing a point, the equation from a graph, and domain and range for the circle as a relation. No semicircles, no other centres.
Handoff: math-a11-w25: "only half of this circle is on the court: an equation for half a circle?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x and across blue; y and up teal; r and r² amber; x² + y² violet; domain shadow blue, range shadow teal; answer green; mistake red, crossed slips only; ink otherwise. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: is the dart on the wire?
> Here's a dartboard, and one dart. Its tip landed six centimetres right of the bullseye, and eight centimetres below it. On a standard board, the inner wire of the treble ring is about ten centimetres from the centre, so let's call it exactly ten. Is this dart sitting exactly on that wire? The across and down distances make a right-angled **triangle**, so Pythagoras gives the straight-line distance. Six squared plus eight squared is thirty-six plus sixty-four, which is one **hundred**. The square root of a hundred is ten, so yes, the tip is exactly ten centimetres from the centre. But that's one dart. The wire is a whole circle of points, all ten centimetres out. How does Pythagoras give one equation for every point on a circle?

Visual: opens on w23's final frame exactly (the dartboard `ma11-dartboard-v1.png` and dart `ma11-dart-v1.png` with dashed legs "6 cm" and "8 cm", the "?" on the straight line, and w23's chips). On the first sentence w23's chips and any w23 content fade; the board grows to about 760 px across at the centre-left, with the heading "Is the dart on the wire?". On "ten centimetres from the centre" a coded amber circle traces the treble ring's inner wire (registered to the sidecar), with an amber tag "10 cm". On "triangle" the legs firm up as a coded right-angled triangle: across side blue "6", down side teal "8", hypotenuse amber "?", with a right-angle mark at the corner. Rows at the right, 52 px: "6² + 8² = 36 + 64"; on "hundred" "= 100" (violet); then "√100 = 10" and the "?" becomes "10" (amber), hand tag "on the wire". On the last two sentences the amber circle pulses round its whole length, and the chip "One equation for every point?" moves to the top right as the scene question.

### 2. deriving x² + y² = r²
> Put the bullseye at the origin, the point zero, zero, and let x, y be any point on a circle of radius r. The radius is the distance from the centre to the circle. Drop a line straight down to the x axis, and you get a right-angled triangle. Its across side is x long, its up side is y, and its longest side is the radius, r. So by Pythagoras, x squared plus y squared equals r **squared**. Now watch the point run round the **circle**. x and y keep changing, and sometimes they're negative. The side lengths are then x and y without their signs, but squaring a negative gives a positive anyway, so the sum stays the same. On the treble wire, it's one hundred at every **point**. It works the other way too. Any point whose coordinates fit the equation is exactly r from the centre, so it's on the circle.

Visual: camera continue; coded axes appear over the board with the origin at the bullseye (x and y from −18 to 18 cm, equal scale, axis numbers 28 px), the board dims to 40 per cent behind them. Definition chips, 44 px: "origin (0, 0): the bullseye" and "radius r: centre to circle" (amber). A general point P(x, y) on the amber circle with its triangle: blue across side "x", teal up side "y", amber hypotenuse "r". On "squared" the equation strip writes, 64 px: "x² + y² = r²" (x² blue, y² teal, r² amber), hand tag "Pythagoras". On "circle" `CircleTracer` starts: P runs anticlockwise from (8, 6) round the circle x² + y² = 100 (about 6 s per lap), the triangle following; the `LiveReadoutBoard` at the right (52 px) shows "x", "y", "x²", "y²" and "x² + y²" (violet). It pauses at (−6, 8) with the hand tag "x = −6, but x² = 36" and "squared: no sign". While "On the treble wire" is spoken a small chip "treble wire: r = 10" (amber) writes by the circle. On "point" the violet readout "x² + y² = 100" pulses, hand tag "always 100"; P pauses at (6, −8) (the dart's spot, the dart badge at 120 px beside it). On "It works the other way too" a two-way arrow writes between the chips "on the circle" and "fits x² + y² = 100".

### 3. inside, on or outside
> So the treble wire is x squared plus y squared equals one hundred, and every dart can be tested against it. Square its coordinates and add them. That sum is the distance squared. If it equals one hundred, the dart's on the wire. A dart at five, five gives twenty-five plus twenty-five, which is fifty. That's less than a hundred, so it's inside the **circle**. A dart at twelve, nine gives a hundred and forty-four plus eighty-one, which is two hundred and twenty-five. Its distance is fifteen centimetres, so it's **outside** the wire. Less than r squared means inside, equal means on, and more means **outside**.

Visual: stage change to the board at 700 px on the left with its coded circle "x² + y² = 100" (amber) and three darts placed by their tips: (6, −8) (from scene 1), (5, 5) and (12, 9), each with a 36 px coordinate label (x blue, y teal). At the right, `RadiusGauge` (900 × 360 px): an amber mark "r² = 100"; the dart (6, −8)'s violet bar "36 + 64 = 100" meets the mark exactly, verdict "on". On "circle" the dart (5, 5) lights, its bar "25 + 25 = 50" stops short, verdict "inside", hand tag "50 < 100". On "outside" (first) the dart (12, 9) lights, its bar "144 + 81 = 225" runs past the mark, verdict "outside", grey tag "√225 = 15 cm". On "outside" (last) a three-row table writes, 44 px: "x² + y² < r²: inside", "= r²: on", "> r²: outside" (violet sums, amber r²).

### 4. a relation: domain and range
> Is this circle a function? Sweep a vertical line across it. Inside the circle, the line meets it twice, so one x value pairs with two y values. It fails the vertical line test, so the circle is a relation, not a **function**. But domain and range still make sense for a relation. The domain is every x value its points use, and the range is every y value they use. Shine a light straight down, and the circle's shadow on the x axis runs from minus ten to ten. So the domain is minus ten to ten, closed at both **ends**. Shine it from the side, and the range is minus ten to ten as **well**.

Visual: clear change to a large equal-scale plot (1,000 × 820 px, −12 to 12) with the circle x² + y² = 100 (amber) and a dart badge (120 px) at the top right. `VerticalLineSweep` (w07): an amber vertical line sweeps from x = −12 to 12; outside the circle "hits: 0" (grey), inside "hits: 2" (red) with both hit points marked, pausing at x = 6 to show (6, 8) and (6, −8). On "function" the verdict "relation, not a function" (44 px), hand tag "2 hits: not a function". Definition chips: "domain: every x its points use" (blue) and "range: every y they use" (teal). `AxisShadow` (w09): the lamp above casts a blue bar on the x axis from a closed dot at −10 to a closed dot at 10; on "ends" the label "domain [−10, 10]" (blue), hand tag "shadow: domain". On "well" the lamp swings to the right and casts a teal bar on the y axis, "range [−10, 10]" (teal), hand tag "shadow: range".

### 5. worked example 1: graph from the equation
> Let's practise. Graph x squared plus y squared equals forty-nine, and state its radius, domain and range. The number on the right is r squared, not r. So the radius is the square root of forty-nine, which is **seven**. Now mark the four axis points. Put y equals zero, and x is seven or minus seven. Put x equals zero, and y is seven or minus **seven**. Then draw the circle through all four, centred at the origin. Domain, minus seven to seven. Range, minus seven to seven. Reading the radius as forty-nine is the classic slip. That circle would be seven times too **big**.

Visual: clear change to the g01 board (site `we-2`). Task strip, 44 px: "Graph x² + y² = 49, stating the radius, domain and range." Givens card: "x² + y² = 49", with "49" boxed amber and labelled "r²". Plot at the right (720 × 720 px, −9 to 9, equal scale, empty). Rows, 52 px: "r² = 49"; on "seven" (first) "r = √49 = 7" (amber), hand tag "right side = r²". On "Put y equals zero" the row "y = 0: x² = 49, x = ±7" and blue dots at (7, 0), (−7, 0); on "seven" (second) "x = 0: y = ±7" and teal dots at (0, 7), (0, −7). On "draw the circle" the circle draws through the four dots (ink, then amber). Framed answer (green): "radius 7; domain [−7, 7]; range [−7, 7]", with the two shadows flicking on and off the axes. On "big" a red slip "radius 49" writes small at the right and is crossed, caption "r = √49".

### 6. worked example 2: is a point on the circle?
> Does the point three, minus four lie on the circle x squared plus y squared equals twenty-five? Substitute both coordinates. Three squared is nine, and minus four, squared, is plus sixteen, because squaring removes the negative **sign**. Nine plus sixteen is twenty-five. That matches the right side, so yes, three, minus four is on the **circle**. If you wrote nine minus sixteen, you'd get minus seven, and decide it isn't. A squared number is never **negative**.

Visual: clear change to the g01 board (site `we-3`). Task strip: "Does the point (3, −4) lie on the circle x² + y² = 25?" Givens card: "point (3, −4)" (3 blue, −4 teal) and "x² + y² = 25" (25 amber). Rows, 52 px: "3² + (−4)²"; on "sign" "= 9 + 16", with "(−4)² = +16" tagged; then "= 25" (violet). A small plot at the right with the circle of radius 5 and the point. On "circle" framed answer (green): "9 + 16 = 25, so (3, −4) is on the circle", the point dropping onto the amber circle with a tick. On "negative" a red slip "3² + (−4)² = 9 − 16 = −7: not on it" writes and is crossed, caption "(−4)² = +16".

### 7. worked example 3: the equation from a graph
> Now go the other way, from a graph to its equation. Here's a circle centred at the origin, passing through the point three, **four**. Any point on it gives r squared directly. Three squared plus four squared is nine plus sixteen, which is twenty-**five**. So the equation is x squared plus y squared equals twenty-five, and the radius is five. Sometimes it's even quicker. If a circle centred at the origin crosses the x axis at six, its radius is six, and its equation is x squared plus y squared equals thirty-**six**. Writing equals five, or equals six, is the slip. The right side is the radius **squared**.

Visual: clear change to the g01 board (lesson23 `we-3`). Task strip: "A circle centred at the origin passes through (3, 4). Find its equation and radius." Plot at the left (720 × 720 px, −9 to 9, equal scale): the circle drawn, the point (3, 4) marked; on "four" the point's legs draw (blue 3, teal 4). Rows, 52 px: "r² = x² + y² = 3² + 4²"; on "five" "= 9 + 16 = 25" (amber). Framed answer (green): "x² + y² = 25, radius √25 = 5", hand tag "check: 5 from O" with the hypotenuse labelled 5. On "Sometimes it's even quicker" a second small plot (420 × 420 px) slides in: a circle crossing the x axis at 6 and −6, the crossing at 6 ringed; on "six" (thirty-six) the row "r = 6, so x² + y² = 36" (green frame). On "squared" a red slip "x² + y² = 5" writes and is crossed, caption "right side is r²".

### 8. memory aid
> Here's a short way to remember it. Across squared, plus up squared, is radius squared. The across and up distances are x and y. And whatever number sits on the right is the radius **squared**, so take its square root to get the radius.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the dart badge with its triangle (blue across, teal up, amber radius). Main line, hand font 60 px: "Across squared plus up squared is radius squared." On "squared" the key line, 40 px: "x² + y² = r². The right side is r², so r = √(right side)." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A circle centred at the origin passes through the point minus five, twelve. Find its equation and radius, and state its domain and range. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A circle centred at the origin passes through the point (−5, 12). Find its equation and radius, and state its domain and range." The full question stays on screen. Picture slot: equal-scale axes (−15 to 15) with the point (−5, 12) marked and no circle. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> r squared is minus five, squared, plus twelve squared. That's twenty-five plus one hundred and forty-four, which is one hundred and sixty-**nine**. So the equation is x squared plus y squared equals one sixty-nine, and the radius is **thirteen**. The domain and range are both minus thirteen to thirteen. Using one sixty-nine for the domain is wrong. The domain stops one radius from the **centre**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "centre (0, 0)", "point (−5, 12)". Rows, 52 px: "r² = (−5)² + 12² = 25 + 144"; on "nine" "= 169" (amber). On "thirteen" framed answer (green): "x² + y² = 169, r = 13; domain [−13, 13], range [−13, 13]", and the circle draws through (−5, 12) on the picture with its two shadows. On "centre" a red slip "domain [−169, 169]" writes and is crossed, caption "one radius: 13". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Does the point five, minus five lie inside, on or outside the circle x squared plus y squared equals forty-nine? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Does the point (5, −5) lie inside, on or outside the circle x² + y² = 49? Explain." Picture slot: the circle x² + y² = 49 on equal-scale axes with no point marked. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Five squared, plus minus five, squared, is twenty-five plus twenty-five, which is **fifty**. Fifty is more than forty-nine, so the point is just **outside** the circle. Its distance from the centre is root fifty, about seven point zero seven, a little more than seven. Rounding that to seven, and saying it's on the circle, is the slip. Compare fifty with forty-nine **exactly**.

Visual: the card shrinks to the top. `GivensStrip`: "point (5, −5)", "r² = 49". Rows, 52 px: "5² + (−5)² = 25 + 25"; on "fifty" "= 50" (violet). `RadiusGauge` small at the right: the violet bar "50" just passes the amber mark "49". On "outside" framed answer (green): "50 > 49, so (5, −5) is outside the circle", the point appearing just beyond the circle on the picture, grey tag "√50 ≈ 7.07 > 7". On "exactly" a red slip "√50 ≈ 7, so it's on the circle" writes and is crossed, caption "50 ≠ 49". Hold about 1 s.

### 13. handoff
> So a circle centred at the origin is x squared plus y squared equals r squared, straight from Pythagoras. Now look at a netball court. The goal circle is centred at the middle of the goal line, with a radius of four point nine metres. Our equation draws the whole circle, but only half of it is on the **court**. Next, how do we write an equation for just half a circle?

Visual: the memory line shows small at the top (30 px), then fades on "Now look". Board clears to the netball court plate (`ma11-netball-court-top-v1.png`, about 1,200 px wide, top view, the near goal line horizontal near the bottom of the frame). A coded x axis along the goal line and a y axis up the court's centre line, origin at the goal line's midpoint; a coded white circle of radius 4.9 m about the origin. On "court" the half on the court stays solid white and the half beyond the end line turns dashed grey; the equation chip "x² + y² = 4.9²" (amber 4.9) beside it; chips "Next: an equation for half a circle" and "?". Hold about 2 s. This is w25's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Circle, centre O, radius r: x² + y² = r² (Pythagoras).
- Radius = √(right side). Axis points (±r, 0), (0, ±r).
- Point test: x² + y² < r² inside, = r² on, > r² outside.
- From a graph: any point gives r² = x² + y².
- A circle is a relation: domain [−r, r], range [−r, r].

Memory aid (framed card, right side, as in scene 8): *Across squared plus up squared is radius squared.* Key: *x² + y² = r². The right side is r², so r = √(right side).* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w25's opening frame.

## Teaching checks

- **Does it explain causes?** Why x² + y² = r²: a point's across and up distances and the radius form a right-angled triangle (2). Why it holds in every quadrant: squaring removes the sign (2). Why fitting the equation means "on the circle": the distance is then exactly r (2). Why the sum sorts inside and outside: it is the distance squared (3). Why the circle is not a function: a vertical line meets it twice (4). Why the domain and range stop at ±r: no point is more than a radius from the centre (4, 5). Why the radius is √(right side): the right side is r² (5, 7). Why one point gives the equation: it fixes r² (7).
- **Misconceptions addressed:** radius read as r² (5 crossed, 7 tag); (−4)² as −16 (6 crossed); r instead of r² in the equation (7 crossed); domain from r² (A1 crossed); rounding before comparing (A2 crossed); "a circle is a function" and "domain and range are only for functions" (4).
- **Visual standard, item by item:** 1 the painted board and darts from the first frame, returning in 2, 3, 4 (badge) and 8; 2 a new stage every 35 to 60 s; 3 `CircleTracer` with the unchanging sum, `RadiusGauge`, the sweep and the shadows; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 5 to 7; 8 framed card and five bullets; 9 the sum staying at 100 while x and y change sign.
- **One idea at a time:** one dart (1), every point (2), any dart (3), the relation and its shadows (4), then one task type per worked example.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 25 s.
- **Avoided double teaching:** Pythagoras (Stage 5), the vertical line test (w07) and interval notation (w09) are recalled, not re-taught.
- **Syllabus coverage:** `ci6022d0ef` (1, 2; key note 1); `cib62f4915` (5; key note 2); `ci7cdb9b15` (7, A1; key note 4); `ci4d0e93cc` (4, 5, A1; key note 5). Testing a point (3, 6, A2; key note 3) supports `cib62f4915` and the stop boundary.
- **Out of scope by design:** semicircles (w25); other centres (g06).

## Practice questions and model answers

**Attempt 1 (scene 9; adapted from pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A circle centred at the origin passes through the point (−5, 12). Find its equation and radius, and state its domain and range."
Model answer: r² = (−5)² + 12² = 25 + 144 = 169, so x² + y² = 169 and r = 13. Domain [−13, 13], range [−13, 13]. Classic mistake (crossed): "domain [−169, 169]".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Does the point (5, −5) lie inside, on or outside the circle x² + y² = 49? Explain."
Model answer: 5² + (−5)² = 50 > 49, so the point's distance from the centre, √50, is more than 7: the point is outside the circle. Classic mistake (crossed): "√50 ≈ 7, so it's on the circle".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook dart | (6, −8): 36 + 64 = 100; √100 = 10 cm | 1, 2, 3 |
| Tracer | x² + y² = 100 at (8, 6), (−6, 8), (−10, 0), (6, −8) | 2 |
| Gauge darts | (5, 5): 50 < 100 inside; (12, 9): 144 + 81 = 225 > 100, 15 cm, outside | 3 |
| Relation | x² + y² = 100: domain [−10, 10], range [−10, 10]; at x = 6, y = ±8 | 4 |
| Site `we-2` | x² + y² = 49: r = 7; (±7, 0), (0, ±7); domain, range [−7, 7]; crossed "radius 49" | 5 |
| Site `we-3` | (3, −4): 9 + 16 = 25, on; crossed 9 − 16 = −7 | 6 |
| Lesson23 `we-3` | through (3, 4): r² = 25, r = 5; axis crossing 6: x² + y² = 36; crossed "= 5" | 7 |
| A1 | (−5, 12): 25 + 144 = 169; r = 13; domain, range [−13, 13]; crossed [−169, 169] | 9, 10 |
| A2 | (5, −5): 50 > 49, outside; √50 ≈ 7.07; crossed "≈ 7, on" | 11, 12 |
| Handoff | netball goal circle r = 4.9 m: x² + y² = 4.9² (= 24.01, not shown) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- 6² + 8² = 100, √100 = 10; (−6)² + 8² = 100; (8, 6), (0, 10), (−10, 0), (−8, −6), (0, −10), (6, −8) all give 100.
- (5, 5): 50, distance 5√2 ≈ 7.071; (12, 9): 225, distance 15.
- x² + y² = 49: r = 7. (3, −4): 9 + 16 = 25; slip 9 − 16 = −7.
- Through (3, 4): 25, r = 5. Crossing at 6: 36.
- A1: 25 + 144 = 169, r = 13; slip −25 + 144 = 119 (not used).
- A2: 50 > 49; √50 = 7.07107.
- 4.9² = 24.01.

## Memory aid check

- **"Across squared plus up squared is radius squared."** Original. Meaning, as said in scene 8: for a point on a circle centred at the origin, the square of its horizontal distance plus the square of its vertical distance equals the square of the radius, and the equation's right side is r². Assumptions checked: centre at the origin (the card says "centre O" in the key notes; a circle with another centre needs the shifted distances, g06); "across" and "up" are distances, so their signs do not matter once squared. It helps a new case: a circle through (−5, 12) has r² = 169. Introduced after the derivation (2) and the examples (5 to 7).
- **Considered, not used:** "r squared on the right, root it for the radius" (repeats key note 2 without the cause).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed): **6,060 characters**, 14 scene headings. Characters per scene (1 to 14): 729, 792, 602, 578, 562, 453, 595, 231, 170, 387, 153, 367, 366, 75.

At 13.3 characters per second the speech before the notes is about 450 s. Holds and settling: two 10 s countdowns (20 s); memory card 2 s, two feedback holds 1 s each, handoff 2 s (6 s); about 22 s of settling (the tracer's lap and pauses, the gauge bars, the sweep and the two shadows); the notes scene is 45 s. Total **about 543 s (9 min 3 s)**, inside the 5,500 to 6,800 band and about 27 s under the 570 s cap. Two sentences were cut in drafting to make that margin (scene 4's "one radius either side" line, kept as the shadows' labels; scene 7's spoken check, kept as the hand tag).

Reserve trims if the voiced take runs long: scene 2's "The radius is the distance from the centre to the circle." (keep the chip); scene 12's "a little more than seven" (keep the grey tag); scene 1's "so let's call it exactly ten" only if the learning review accepts "about ten" on screen.

## Scene list and build ids

Lesson key `m-a11w24` (route math-a11-w24). Explainer folder `src/explainer/lessons/math-a11-w24`; build inputs in `docs/production/claude-pm/lessons/math-a11-w24/` (at voicing).

In order (14 scene headings): hook-dart, derive-circle, inside-on-outside, relation-domain-range, worked-graph, worked-point, worked-from-graph, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 58 s | 1 | w23's frame; the board, the dart and its triangle |
| 58 to 122 s | 2 | Axes over the board; `CircleTracer` with the unchanging sum |
| 122 to 172 s | 3 | Three darts and `RadiusGauge` |
| 172 to 222 s | 4 | The vertical line sweep and the two shadows |
| 222 to 330 s | 5 to 7 | Three g01 boards |
| 330 to 350 s | 8 | Framed memory card |
| 350 to 451 s | 9 to 12 | Question cards and countdowns, then feedback |
| 451 to 481 s | 13 | The netball court with half a circle off court |
| 481 to 541 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions (`pickTransition`): w23's last frame continues into 1 (the board grows); 1 to 2 camera continue (axes over the board); 2 to 3 stage change (three darts); 3 to 4 clear change to the plot; 4 to 5, 5 to 6, 6 to 7 clear change; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w24-learning-review.md`, `science_check` = `checks/m-a11-w24-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no dartboard, dart, target or court plate exists in any subject (searched dart, board, target, court). `maths/ma12-card-texture-v1.png` is a paper texture only. Not used.

Need (painted, new; see the Codex asset brief): `ma11-dartboard-v1.png` and `ma11-dart-v1.png` (also needed for w23's final frame, so paint before the w23 build). The handoff uses `ma11-netball-court-top-v1.png`, specified in w25's asset brief (paint before this build).

Coded: the axes, circles and wire overlay, triangles, the tracer and readouts, the gauge, the sweep and shadows, plots, working boards, cards, countdown, hand tags, key notes, and the court's circle, axes and equation in the handoff.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `DrawnMark`, `PlateImg`, `StudioPlot` (equal scale), `LiveReadoutBoard`, `VerticalLineSweep` (w07), `AxisShadow` (w09), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`CircleTracer`** (new; reused by w25): a point moving round x² + y² = r² on a `StudioPlot`, with its right-angled triangle to the x axis (role-coloured sides, right-angle mark) and live readouts of x, y, x², y² and their sum, all computed from the point; pauses at listed points. Check: the sum equals r² to 1e-9 at every frame; the triangle's legs match |x| and |y|.
2. **`RadiusGauge`** (new): for a point and a circle, a bar of length x² + y² against a mark at r², with a computed verdict "inside", "on" or "outside". Check: the verdict is computed, never typed, and "on" appears only when the sum equals r² exactly.
3. **Plate registration** (lesson folder): the board's sidecar gives the bullseye and the double ring's outer radius in px; the coded axes and circles use that scale (17 cm = the outer radius); the dart is placed by its sidecar tip point.

## Codex asset brief (Maths A11 W24, a dartboard and a dart; also w23's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w24.md`, route entry math-a11-w24. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w23 build (w23's final frame shows both plates). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-coin-v1.png` and `maths/ma12-swing-tag-v1.png`; no text, **no numbers on the board's number ring**, no logos, brand names, people, hands, faces, glow or shadow. Never stretch; keep the native aspect ratio.

1. `ma11-dartboard-v1.png` (2000 × 2000 px): a standard bristle dartboard seen **exactly face-on** (a true circle, not an ellipse), with the usual 20 alternating black and cream segments, red and green treble and double rings, the outer and inner bull, and thin metal wires; the outer number ring is a **plain black band with no numbers**. The board's centre is the image centre. Paint to these radii, as fractions of the double ring's outer radius R (R = 850 px): double ring 0.953R to 1.000R; **treble ring inner wire exactly 0.588R** (10/17; this is the design's 10 cm wire), outer 0.6294R; outer bull 0.0935R; inner bull 0.0374R. The number band runs from R to about 1.12R. No darts in the board.
2. `ma11-dart-v1.png` (900 × 900 px): one steel-tip dart seen from the front and slightly to the side (about 25 degrees off face-on), so the flights and barrel show but the dart clearly points into the board; plain silver barrel, plain blue flights, no text or logos. The **tip point** is where it meets the board.

Sidecar JSON: `ma11-dartboard-v1.json` (the centre in px; R in px; the measured treble inner wire radius in px) and `ma11-dart-v1.json` (the tip point in px). If the treble wire misses 0.588R by more than 1 per cent, report the measured value; the builder draws the coded 10 cm circle on the measured wire and scales the axes to it, never warping the plate.

Report inspection on the paper background (`#f6f1e7`) at 400 px and 760 px, the alpha check, and the board with a coded circle at 0.588R overlaid. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w24-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly (including the curly apostrophe in "Pythagoras’ theorem" and "x^2 + y^2 = r^2"), and no site module label appears.
3. Confirm the derivation's claim in every quadrant (author note b) and the converse (author note c); confirm "inside" and "outside" are computed from x² + y² against r².
4. Confirm site `we-2`, `we-3` and lesson23 `we-3` keep their numbers and answers; A1's point change is recorded.
5. Confirm both attempts carry every demand and that neither card nor picture shows an answer (A1's picture shows the point only; A2's shows the circle only).
6. Confirm no semicircle equation (y = ±√(r² − x²)) appears before the handoff's question.
7. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w23's final frame as fixed in `../checks/root-decisions-maths-a11-w24-w31.md`, and scene 13's frame matches w25's opening frame.

## YouTube metadata (draft)

Title: The Equation of a Circle from Pythagoras | Year 11 Maths Advanced

(Title length: 65 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson22.sa.html

A dart lands 6 cm right of the bullseye and 8 cm below it. Is it exactly on the 10 cm wire? Pythagoras says yes, and the same idea gives the equation of every circle centred at the origin: x² + y² = r². Watch a point run round a circle while x² + y² never changes, test whether darts land inside, on or outside, graph a circle from its equation, find the equation from a graph, and see how domain and range work for a relation that is not a function. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Derive the equation of a circle of radius r with centre at the origin by considering Pythagoras’ theorem"
"Graph circles of the form x^2 + y^2 = r^2 from their equations"
"Determine the equation of a circle of the form x^2 + y^2 = r^2 given its graph"
"Extend the definitions of domain and range to relations"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Pythagoras' theorem; relations and the vertical line test; domain and range. Next: Semicircles.

#Year11Maths #MathsAdvanced #Circles #HSCScience

## Open decisions

- **1. The w23 join (root, and the w15 to w23 designer).** w24 needs the board and the dart at (6, −8) with its legs on w23's last frame (decisions file). If w23 cannot end there, w24's scene 1 instead opens cold on the same frame, and its first sentence stays as written.
- **2. Model board (learning review).** "About ten centimetres, so let's call it exactly ten" is the only rounding; the reviewer checks it does not distract.
- **3. x² + y² = 0 and negative right sides (learning review).** Kept in author notes; add a one-line tag in scene 5 only if the reviewer judges students will meet it in this video's questions.
- **4. Plate prefix `ma11-`,** as root ruling 1.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w24-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w07 and w09; check that the derivation's "without their signs" sentence is clear without |x|; that the tracer makes the unchanging sum feel discovered; that "a relation still has a domain and range" lands before the shadows; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The tracer, gauge and shadows carry the explanation; judge them at playback speed. Every readout must be computed from the plotted point.
