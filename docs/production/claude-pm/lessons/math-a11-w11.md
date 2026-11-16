# Maths A11 W11: How do intercepts draw a line and gradients compare two lines? Intercepts, choosing a graphing method, and parallel and perpendicular lines (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models). Not voiced (no `math-a11-w11/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,585 characters, 14 scene headings, about 508 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: eleventh video of the Year 11 Mathematics Advanced course (outline playlist order 11), after w10 (equations of straight lines) and before w12 (linear models and inequalities). Pre-design pack: `../pre-design/maths-a11/math-a11-w11.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson11.sa.html` (Graphing Lines, Parallel and Perpendicular, SHA256 `41e2f53dd5e11718f5211772443c8d2b9a51ee806dd08d45d288966d426ac58a`, worked examples `we-1`, `we-2`, `we-3`). Every number recalculated with SymPy. Route entry: `math-a11-w11` in `../../programme/maths-a11-route-inputs-1.json`.

Owner rules applied: 2024 syllabus only (y = mx + c), content points cited by codename and exact wording; painted plate for the real object (an aerial view of town blocks), coded axes, lines, triangles and algebra (a street map's lines are a diagram); no people, cars, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a town's street layout, not science); equal axis scales wherever right angles are shown; Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Linear functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-1.json`:

- `cicbb8a9c7`: "Determine the x-intercept and y-intercept of a straight line given its equation"
- `ci13d47f71`: "Choose and apply appropriate techniques to graph a straight line given its equation"
- `cif0d11ebe`: "Find the equation of a line that is parallel or perpendicular to a given line"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w10's final frame (the town blocks with the street 2x + 3y = 12, "?" at each main road and a dashed cross street at (3, 2)). Finds intercepts by setting the other variable to 0 (`cicbb8a9c7`) on the site's `we-1` line, now a street; chooses a graphing method by the equation's form, including a line through the origin (`ci13d47f71`); explains why parallel lines have equal gradients and perpendicular lines have m₁m₂ = −1, with a quarter-turn of the rise-run triangle, and finds both kinds of line through a point (`cif0d11ebe`) on the site's `we-2` and `we-3`. Stops at equations and sketches. Not taught: distance and midpoint (not 2024 Year 11 Advanced points); modelling (w12); simultaneous equations (w13); vertical and horizontal lines beyond a grey tag (the product rule excludes them).

## Decisions

- **Anchor: a town's street map (painted aerial plate, live).** Take two main roads at right angles as the axes, in blocks of 100 m. A straight street meets each main road at its intercepts (2); a second street that runs alongside never meets it because it has the same gradient (4); a cross street meets it at right angles, and its gradient is the first one flipped with its sign changed (6). So the map carries all three content points, and gives each intercept a meaning: where the street reaches a main road. The map returns in scenes 2, 4 and 6. Urban planning and travel, not science; distinct from every Year 12 Maths anchor (the d14 road is a curve with headlights; d08 is a road trip's speed; neither is a street layout) and from w08's taxi (a fare, not a map) and the w01 to w07 packs' suggestions. The pack's park shortcut was weighed: it is close to i12's garden path; the fuel gauge carries intercepts but not perpendicular lines.
- **Idealising assumptions (author notes, not learner copy).** (i) Streets are treated as straight lines along their centres; widths are ignored. (ii) The map uses equal scales on both axes, which is what makes right angles look right (said once in scene 6).
- **Geometry.** Axes: the bottom main road (x axis) and the left main road (y axis); unit 1 block = 100 m; map extent x 0 to 10, y 0 to 7. Street A: 2x + 3y = 12 (site `we-1`), intercepts (6, 0) and (0, 4), gradient −2/3. Street B (parallel): 2x + 3y = 18, intercepts (9, 0) and (0, 6). Street C (perpendicular, through (3, 2) on Street A): 3x − 2y − 5 = 0, gradient 3/2, meeting the bottom road at (5/3, 0).
- **Simulations (standard item 3).**
  1. **The intercept drop** (scene 2): on the map, the "y = 0" chip slides down onto the bottom road and the street's x-intercept dot lands where they meet, readout "x = 6"; then "x = 0" slides onto the left road for "y = 4"; then a ruler rules the street through the two dots.
  2. **The parallel slide** (scene 4): a coded copy of Street A slides upward over the map, its intercepts moving outward with live readouts (x-intercept, y-intercept, gradient), the gradient readout fixed at −2/3; it settles exactly on painted Street B (2x + 3y = 18). A gap marker between the two lines stays constant: they never meet.
  3. **The quarter turn and the locked pair** (scene 6; `QuarterTurnNormal`): Street A's rise-run triangle (run 3 right, rise 2 down) rotates a quarter turn about the crossing point into run 2 right, rise 3 up, the brackets swapping places and one sign flipping; then on an equal-scale `StudioPlot` two lines locked at 90° rotate together about a point, with a `LiveReadoutBoard` for m₁, m₂ and m₁ × m₂, the product holding at −1 (the readout blanks with a grey "vertical" tag when one line passes through vertical).
- **Colour roles (fixed for the whole video).** x-intercepts and the x-axis road **amber** (`MATH_AMBER`); y-intercepts and the y-axis road **blue** (`MATH_BLUE`); gradients **violet** (`MATH_GRADIENT`); the given line ink; the new line (parallel or perpendicular) **teal** (`MATH_TEAL`); answer **green**; mistake **red**, crossed slips only.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; street labels on the map 40 px on a paper chip; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "on the x axis, y = 0", "on the y axis, x = 0", "rule it", "label it", "same gradient", "never meet", "only c changes", "swap", "flip and change the sign", "× = −1", "equal scales!", "check", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w10's map frame becomes the hook (1); the intercept drop on the map (2); the three graphing methods on a plot (3); the parallel slide on the map (4); g01 board, parallel (5); the quarter turn and the locked pair (6); g01 board, perpendicular (7); framed memory card (8); question cards with pictures (9 to 12); the gym handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 2 (site `we-1`, as Street A): 2x + 3y = 12 has intercepts (6, 0) and (0, 4); crossed slip "x-intercept: x = 0 gives y = 4" captioned "that's the y-intercept". Scene 5 (site `we-2`): parallel to y = 4x − 7 through (2, 3) is y = 4x − 5; crossed slip "y = 4x − 7" captioned "that's the first line". Scene 7 (site `we-3`): perpendicular to 3x + 4y = 8 through (3, −1) is 4x − 3y − 15 = 0; crossed slip "m₂ = −4/3" captioned "flip AND change the sign". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Parallel: same. Perpendicular: flip it and change the sign." with the key line "Intercepts: set the other variable to 0." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** The rise-run triangle turns a quarter turn and its rise and run visibly swap places, one changing sign (scene 6): the negative reciprocal is seen, not just stated. Then two locked streets spin through many angles and the product readout never leaves −1.
- **Site numbers unchanged.** `we-1`: (6, 0) and (0, 4). `we-2`: y = 4x − 5. `we-3`: m₁ = −¾, m₂ = 4/3, 4x − 3y − 15 = 0.
- **Attempts (pack questions, original).** A1: "Find the x- and y-intercepts of 3x − 4y = 24, and use them to sketch the line." Answer (8, 0) and (0, −6). Crossed: "(0, 6)" (dropped the minus sign of −4y). A2: "Find the equation of the line perpendicular to y = −2x + 5 that passes through (4, 1). Give your answer in general form." Answer x − 2y − 2 = 0. Crossed: "m = −1/2" (flipped but no sign change).
- **Mistake scene:** none separate. Setting x = 0 for the x-intercept (2 crossed); keeping the old intercept for a parallel line (5 crossed); reciprocal only or negative only (7 crossed, A2 crossed); right angles judged on unequal scales (6 tag); a dropped sign (A1 crossed).
- **Cause chain taught, in order:** (1) every point on the x axis has y = 0, so the x-intercept comes from y = 0, and likewise x = 0 for the y-intercept (2); (2) two points fix a line (w10), so two intercepts are enough to graph it, unless they are the same point (3); (3) lines that rise the same amount per step across never close the gap between them, so parallel means equal gradients (4); (4) a quarter turn swaps the rise and the run and reverses one direction, so the perpendicular gradient is the negative reciprocal, and the product is −1 (6).
- **Entry knowledge (route):** w10 (the three line forms and the point-gradient formula); Stage 5 plotting; reciprocals of fractions.
- **Learner-visible vocabulary (plain meaning at first use):** x-intercept (where the line meets the x axis, 2); y-intercept (where it meets the y axis, 2); parallel (running alongside, never meeting, 4); perpendicular (meeting at right angles, 6); negative reciprocal (flip the fraction and change its sign, 6).
- **Handoff (to w12, "How do we build a linear model or inequality from a real situation?").** Scene 13: the painted gym membership card and kettlebell (`ma11-gym-membership-card-v1.png`, `ma11-kettlebell-v1.png`, w12's anchor) beside empty axes "months" and "total cost ($)", chip "$60 to join, then $25 a month", "Next: build the line from the words" and "?". This is w12's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Street A 2x + 3y = 12: y = −⅔x + 4; intercepts (6, 0), (0, 4). Street B 2x + 3y = 18: (9, 0), (0, 6). Street C through (3, 2) (2·3 + 3·2 = 12, on A): y − 2 = 1.5(x − 3), y = 1.5x − 2.5, 3x − 2y − 5 = 0, x-intercept 5/3; A and C meet at (3, 2); B and C meet at (51/13, 44/13) ≈ (3.92, 3.38) (not shown).
  (b) y = 2x − 1: start at (0, −1), step 1 across and 2 up to (1, 1). y = 3x: through (0, 0) and (1, 3).
  (c) `we-2`: y − 3 = 4(x − 2), y = 4x − 5; check 4(2) − 5 = 3. `we-3`: 3x + 4y = 8 gives y = −¾x + 2; m₂ = 4/3; y + 1 = (4/3)(x − 3); ×3: 3y + 3 = 4x − 12; 4x − 3y − 15 = 0; check (3, −1): 12 + 3 − 15 = 0; (−¾)(4/3) = −1.
  (d) A1: 3x − 4y = 24: y = 0 gives x = 8; x = 0 gives y = −6. A2: m₂ = ½; y − 1 = ½(x − 4); ×2: 2y − 2 = x − 4; x − 2y − 2 = 0; check 4 − 2 − 2 = 0.
  (e) Pronunciations: "minus two thirds", "three halves", "four thirds", "m one times m two equals minus one". Voice-pilot item: "m one" and "m two".
  (f) Windows: map x 0 to 10, y 0 to 7 (equal scale, about 130 px per block on a 1,300 × 910 px map); graphing plot x −3 to 4, y −3 to 5 (equal scale); locked-pair plot x −5 to 5, y −5 to 5 (equal scale).

Main question: *A straight street crosses a town. Where does it meet the two main roads, how do we draw it, and what equations give a street that runs alongside it or crosses it at right angles?*
Entry knowledge (w10): line equations in three forms; point-gradient formula.
Stops after: intercepts, choosing a graphing method, parallel and perpendicular lines through a point. No distance, midpoint, modelling or simultaneous equations.
Handoff: math-a11-w12: a gym's $60 joining fee and $25 a month, with empty axes (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): x-intercepts amber; y-intercepts blue; gradients violet; given line ink; new line teal; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: a street on a town map
> Here's that town map. Each block is a hundred metres, and the two main roads meet at the origin. The straight street is two x plus three y equals **twelve**. Where does it meet each main road? And how do we lay out new streets that run alongside it, or cross it at right **angles**? Intercepts tell us where a line meets the axes, and gradients tell us how two lines compare. So let's draw lines from their equations, and compare them.

Visual: opens on w10's final frame exactly (the painted town blocks `ma11-town-blocks-top-v1.png`, about 1,300 × 910 px, solid, with the coded axes along the two main roads, Street A labelled "2x + 3y = 12", "?" chips at each main road, a dashed cross street at (3, 2), chips "Next: where does it cross, and what crosses it at right angles?" and "?"). On the first sentence the "Next" chip fades and the heading writes on: "How do intercepts draw a line, and gradients compare two lines?". Axis labels write: "bottom main road (x, blocks)" amber and "left main road (y, blocks)" blue. On "twelve" the street's label pulses. On "angles" painted Street B and painted Street C each glow briefly (no labels yet), and the dashed cross street fades. On the last sentences the chip "Where does it meet the axes? How do two lines compare?" moves to the top right as the scene question.

### 2. intercepts
> A line meets the x axis where y is zero, because every point on the x axis has height zero. So put y equals zero: two x equals twelve, and x is **six**. The street meets the bottom road at six, zero, six hundred metres along. A line meets the y axis where x is zero. Put x equals zero: three y equals twelve, and y is **four**. That's zero, four. Plot both intercepts, rule a line through them, and you've drawn the **street**. Setting x to zero to find the x intercept is the classic slip. It gives you the y intercept **instead**.

Visual: camera continue on the map (it shifts left to about 1,100 px wide; a g01 strip opens at the right). Task strip, 44 px: "Find the intercepts of 2x + 3y = 12, and graph it." (site `we-1`). On the first sentence the intercept drop (simulation 1): an amber chip "y = 0" slides down onto the bottom road, hand tag "on the x axis, y = 0". Row, 52 px: "y = 0: 2x = 12"; on "six" "x = 6", and the amber dot lands at (6, 0) on the map, label "(6, 0): 600 m along". On "A line meets the y axis" a blue chip "x = 0" slides onto the left road. Row: "x = 0: 3y = 12"; on "four" "y = 4", blue dot at (0, 4). On "street" a coded ruler draws the line through the two dots, landing exactly on painted Street A; hand tags "rule it" and "label it"; framed answer (green): "intercepts (6, 0) and (0, 4)". On "instead" a red slip "x-intercept: put x = 0, so (0, 4)" writes and is crossed, caption "that's the y-intercept".

### 3. choosing a graphing method
> So which method should you use to graph a line? If it's in general form, like this street, intercepts are quick, because each one comes from one division. If it's in gradient intercept form, like y equals two x minus one, start at the y intercept, minus one, then step one across and two **up**, and rule through the points. And if the line passes through the origin, like y equals three x, both intercepts are the same point, zero, zero. One point can't fix a line, so plot a second one, such as one, **three**. Whichever method you choose, label the points you used.

Visual: clear change to an equal-scale `StudioPlot` (1,200 × 700 px, x −3 to 4, y −3 to 5). A three-row chooser at the left (44 px): "general form → intercepts", "y = mx + c → start at c, step m", "through (0, 0) → a second point". The first row glows on the first sentences with a small thumbnail of Street A's two intercept dots. On "two x minus one" the second row glows; a blue dot at (0, −1); on "up" a violet step triangle draws "1 across, 2 up" to (1, 1), and the line y = 2x − 1 rules through, labelled. On "origin" the third row glows; the line y = 3x's single intercept dot at (0, 0) pulses, hand tag "both intercepts here"; on "three" a second dot at (1, 3) and the line rules through. On the last sentence all three lines show their labelled points, hand tag "label it".

### 4. parallel lines: equal gradients
> Now a second street, running alongside the first. Rearranged, the first street is y equals minus two thirds x plus four, so its gradient is minus two thirds. Parallel lines never meet, and that happens when they rise by the same amount for every step across. So a parallel street has gradient minus two thirds too. Watch the line slide. Its intercepts move, but its gradient stays the **same**, and it never catches the first street. Parallel means equal gradients. Only the intercept changes. In general form, the x and y parts stay the same, and only the number changes: this second street is two x plus three y equals **eighteen**.

Visual: clear change back to the map (full size). Row at the top right, 52 px: "2x + 3y = 12 → y = −⅔x + 4", the "−⅔" violet. On "rise by the same amount" a violet step triangle (3 across, 2 down) draws on Street A and a copy of it at a point further along, tag "same gradient". On "slide" the parallel slide runs (simulation 2): a teal copy of Street A slides up and out; `LiveReadoutBoard` (52 px): "gradient −⅔" (fixed), "x-intercept 6 → 9" (amber), "y-intercept 4 → 6" (blue). On "same" the gradient readout pulses, hand tag "only c changes"; a constant gap marker runs between the lines, tag "never meet". On "eighteen" the teal line lands exactly on painted Street B and its label writes "2x + 3y = 18", with "2x + 3y" ringed in both labels.

### 5. worked example 1: parallel through a point
> Here's the standard question. Find the equation of the line parallel to y equals four x minus seven, through two, three. Parallel means the same gradient, so m is **four**. Use the point gradient formula with the new point: y minus three equals four times, x minus two. Expand: y equals four x minus eight plus three, so y equals four x minus **five**. Check: four times two, minus five, is three. Keeping minus seven, the old intercept, would just give the first line **again**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the equation of the line parallel to y = 4x − 7 that passes through (2, 3)." (site `we-2`). Givens card: "given line y = 4x − 7" (ink), "point (2, 3)" (teal). Small equal-scale plot at the right (x −1 to 4, y −8 to 8) with y = 4x − 7 in ink. On "four" the row "m = 4" (violet), hand tag "parallel: same m". Rows, 52 px: "y − 3 = 4(x − 2)", then "y = 4x − 8 + 3"; on "five" "y = 4x − 5" in a green frame, the teal line drawing through (2, 3) beside the ink line. Check row "4(2) − 5 = 3 ✓". On "again" a red slip "y = 4x − 7" writes and is crossed, caption "that's the first line".

### 6. perpendicular lines: flip and change the sign
> Now a cross street, at right angles. What happens to the gradient? Draw the first street's rise and run as a triangle: three across, then two down. Turn that triangle a quarter turn. The run and the rise swap places, and one of them changes **direction**. Now it's two across, and three up. So the new gradient is three halves. Compare minus two thirds with three halves: flip the fraction, and change the **sign**. Multiply them, and you get minus **one**. That's the test for perpendicular lines: m one times m two equals minus one. It works for any pair, except a horizontal and a vertical line. Watch two lines locked at right angles turn together. The gradients change, but their product stays minus **one**. One warning. Right angles only look right when both axes use the same **scale**.

Visual: clear change: the map (left, 820 px wide, solid) with painted Street C highlighted in teal through (3, 2). On "triangle" Street A's rise-run triangle draws at (3, 2): run "3 across" (amber bracket) and rise "2 down" (blue bracket), gradient chip "−2/3" (violet). On "quarter turn" the quarter turn runs (simulation 3) about (3, 2): the triangle rotates 90° anticlockwise onto Street C; the brackets travel with it so that the old run now stands upright and the old rise lies flat. On "direction" a hand tag "swap" and a small red-free arrow showing the "down" bracket now pointing across (the sign change is shown by the bracket's arrowhead). New labels: "2 across", "3 up", chip "3/2" (violet). On "sign" a row, 52 px: "−2/3 → flip → −3/2 → change the sign → 3/2". On "one" (first bold) the row "(−2/3) × (3/2) = −1", hand tag "× = −1". On "except" a grey tag, 30 px, "not for horizontal and vertical lines". On "locked" the right half becomes an equal-scale plot (x −5 to 5, y −5 to 5) with two lines crossing at the origin at 90°, a right-angle box between them, rotating together; `LiveReadoutBoard`: "m₁", "m₂", "m₁ × m₂ = −1"; on "one" (second bold) the product readout pulses through several angles. On "scale" the plot's y axis stretches to double scale for 1 s: the right-angle box visibly skews, hand tag "equal scales!", then snaps back.

### 7. worked example 2: perpendicular through a point
> Find the equation of the line perpendicular to three x plus four y equals eight, through three, minus one, in general form. First, the given gradient. Rearrange: four y equals minus three x plus eight, so the gradient is minus three quarters. Flip it and change the sign: the perpendicular gradient is four **thirds**. Then y plus one equals four thirds, times x minus three. Multiply by three: three y plus three equals four x minus twelve. So four x minus three y minus fifteen equals **zero**. Check: minus three quarters times four thirds is minus one. A gradient of minus four thirds would flip the fraction, but forget the **sign**.

Visual: clear change to the g01 board. Task strip: "Find the equation of the line perpendicular to 3x + 4y = 8 that passes through (3, −1). Give your answer in general form." (site `we-3`). Givens card: "given 3x + 4y = 8" (ink), "point (3, −1)" (teal). Small equal-scale plot at the right (x −2 to 6, y −4 to 4) with the given line. Rows, 52 px, one at a time: "4y = −3x + 8 → m₁ = −3/4"; on "thirds" "m₂ = 4/3" (violet), hand tag "flip and change the sign". "y + 1 = (4/3)(x − 3)"; "× 3: 3y + 3 = 4x − 12"; on "zero" "4x − 3y − 15 = 0" in a green frame, the teal line drawing through (3, −1) with a right-angle box at the crossing. Check row "(−3/4)(4/3) = −1 ✓". On "sign" a red slip "m₂ = −4/3" writes and is crossed, caption "flip AND change the sign".

### 8. memory aid
> Here's how to remember the two tests. Parallel: same gradient. Perpendicular: flip it, and change the sign. And for intercepts, to find where a line meets one axis, set the other variable to **zero**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: a small street pair (parallel, with "=") and a crossing pair (with the right-angle box and a turning triangle). Main line, hand font 56 px: "Parallel: same. Perpendicular: flip it and change the sign." On "zero" the key line, 40 px: "Intercepts: set the other variable to 0." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the x and y intercepts of three x minus four y equals twenty-four, and use them to sketch the line. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the x- and y-intercepts of 3x − 4y = 24, and use them to sketch the line." The full question stays on screen. Picture slot: empty equal-scale axes (x −2 to 10, y −8 to 2) with no points or line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> For the x intercept, set y to zero: three x equals twenty-four, so x is **eight**. For the y intercept, set x to zero: minus four y equals twenty-four, so y is minus **six**. Plot eight, zero, and zero, minus six, and rule the line through them. A y intercept of six is wrong. It drops the minus sign in front of four **y**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "3x − 4y = 24" ("− 4y" underlined as used). Rows, 52 px: "y = 0: 3x = 24"; on "eight" "x = 8", amber dot at (8, 0). "x = 0: −4y = 24"; on "six" "y = −6", blue dot at (0, −6). On "Plot" the line rules through, framed answer (green): "(8, 0) and (0, −6)". On "y" a red slip "(0, 6)" writes and is crossed (hand caption "−4y = 24 gives y = −6"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find the equation of the line perpendicular to y equals minus two x plus five that passes through four, one. Give your answer in general form. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the equation of the line perpendicular to y = −2x + 5 that passes through (4, 1). Give your answer in general form." The full question stays on screen. Picture slot: equal-scale axes (x −1 to 7, y −2 to 6) with y = −2x + 5 drawn and the point (4, 1) marked; no second line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> The given gradient is minus two. Flip it and change the sign, and the perpendicular gradient is one **half**. Then y minus one equals one half, times x minus four. Multiply by two: two y minus two equals x minus four, so x minus two y minus two equals **zero**. A gradient of minus one half is wrong. It flips the fraction, but forgets to change the **sign**.

Visual: the card shrinks to the top. `GivensStrip`: "y = −2x + 5", "(4, 1)", "general form" (underlined as used). Rows, 52 px: "m₁ = −2"; on "half" "m₂ = 1/2" (violet), with "(−2)(1/2) = −1" grey beside it. "y − 1 = ½(x − 4)", "2y − 2 = x − 4"; on "zero" "x − 2y − 2 = 0" in a green frame, the teal line drawing through (4, 1) with a right-angle box. On "sign" a red slip "m₂ = −1/2" writes and is crossed (hand caption "flip AND change the sign"). Hold about 1 s.

### 13. handoff
> So intercepts draw a line, and gradients compare two lines: equal for parallel, flipped with the sign changed for perpendicular. Lines also model real situations, and that's next. A gym charges sixty dollars to join, then twenty-five dollars a month. What's the total cost after any number of months, and how many months can you afford on a **budget**?

Visual: the ideas show as small chips at the top ("intercepts: set the other to 0", "parallel: same m", "perpendicular: m₁m₂ = −1", 34 px), then fade on "Lines also model". Board clears: at the left, the painted gym membership card `ma11-gym-membership-card-v1.png` (about 520 px wide, solid; its blank face carries a coded line "$60 to join, then $25 a month", 40 px) and the painted kettlebell `ma11-kettlebell-v1.png` (about 260 px); at the right, empty axes "months" (amber) and "total cost ($)" (blue), with no points. On "budget" a dashed horizontal line labelled "budget?" and a "?" chip. Chip "Next: build the line from the words". Hold about 2 s. This is w12's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- x-intercept: set y = 0. y-intercept: set x = 0.
- Graph: intercepts, or start at c and step m.
- Parallel: m₁ = m₂.
- Perpendicular: m₁m₂ = −1 (flip, change the sign).
- Then use y − y₁ = m(x − x₁).

Memory aid (framed card, right side of the notes screen, as in scene 8): *Parallel: same. Perpendicular: flip it and change the sign.* Key: *Intercepts: set the other variable to 0.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the gym card and kettlebell, the empty axes with the dashed "budget?" line, "Next: build the line from the words" and "?"). This is the final frame and w12's opening frame.

## Teaching checks

- **Does it explain causes?** Why y = 0 gives the x-intercept: every point on the x axis has height 0 (2). Why a second point for y = 3x: one point cannot fix a line (3). Why parallel lines share a gradient: equal rise per step keeps the gap fixed (4). Why the perpendicular gradient is the negative reciprocal: a quarter turn swaps rise and run and reverses one (6). Why the product is −1: (−a/b)(b/a) = −1 (6). Why equal scales matter: unequal scales skew the right angle (6).
- **Misconceptions addressed:** x = 0 for the x-intercept (2 crossed); old intercept for the parallel line (5 crossed); reciprocal without the sign change (7 crossed, A2 crossed); perpendicular judged by eye on unequal scales (6); a dropped sign in an intercept (A1 crossed).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted town map from the first seconds, returning in 2, 4 and 6; 2 a new stage every 30 to 60 s; 3 the intercept drop, the parallel slide with live intercepts, the quarter turn and the locked pair; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 2, 5 and 7, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the triangle's rise and run swapping in a quarter turn.
- **One idea at a time:** intercepts (2), methods (3), parallel cause then example (4, 5), perpendicular cause then example (6, 7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 27 s.
- **Avoided double teaching:** the point-gradient formula and general form (w10) are used, not re-taught.
- **Syllabus coverage:** `cicbb8a9c7` (2; A1; key note 1); `ci13d47f71` (2, 3; A1; key note 2); `cif0d11ebe` (4 to 7; A2; key notes 3, 4, 5).
- **Out of scope by design:** distance and midpoint; modelling (w12); simultaneous equations (w13).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find the x- and y-intercepts of 3x − 4y = 24, and use them to sketch the line."
Model answer: y = 0: 3x = 24, x = 8, so (8, 0). x = 0: −4y = 24, y = −6, so (0, −6). Plot both intercepts, rule the line through them and label them. Classic mistake (crossed): "(0, 6)".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "Find the equation of the line perpendicular to y = −2x + 5 that passes through (4, 1). Give your answer in general form."
Model answer: m₁ = −2, so m₂ = ½ (since m₁m₂ = −1). y − 1 = ½(x − 4), so 2y − 2 = x − 4, and x − 2y − 2 = 0. Classic mistake (crossed): "m₂ = −½".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Street A (site `we-1`) | 2x + 3y = 12; (6, 0), (0, 4); y = −⅔x + 4 | 1, 2, 4, 6 |
| Street B | 2x + 3y = 18; (9, 0), (0, 6) | 4 |
| Street C | through (3, 2); m = 3/2; 3x − 2y − 5 = 0 | 6 |
| Methods | y = 2x − 1: (0, −1), (1, 1); y = 3x: (0, 0), (1, 3) | 3 |
| Quarter turn | run 3, rise −2 → run 2, rise 3; (−2/3)(3/2) = −1 | 6 |
| Site `we-2` | parallel to y = 4x − 7 through (2, 3): y = 4x − 5; check 3 | 5 |
| Site `we-3` | perpendicular to 3x + 4y = 8 through (3, −1): m₁ = −¾, m₂ = 4/3; 4x − 3y − 15 = 0 | 7 |
| A1 | 3x − 4y = 24: (8, 0), (0, −6); crossed (0, 6) | 9, 10 |
| A2 | m₂ = ½; x − 2y − 2 = 0; crossed −½ | 11, 12 |
| Handoff | $60 joining fee, $25 a month | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w08w14/verify.py`); Codex to re-check.

- 2x + 3y = 12: x-intercept 12/2 = 6; y-intercept 12/3 = 4; gradient −2/3.
- 2x + 3y = 18: intercepts 9 and 6. 2(3) + 3(2) = 12, so (3, 2) is on Street A.
- y − 2 = 1.5(x − 3) ⇔ y = 1.5x − 2.5 ⇔ 3x − 2y − 5 = 0; x-intercept 5/3.
- (−2/3)(3/2) = −1; (−3/4)(4/3) = −1; (−2)(1/2) = −1.
- 4(x − 2) + 3 = 4x − 5; 4(2) − 5 = 3.
- 3((4/3)(x − 3) − 1) = 4x − 15, so 4x − 3y − 15 = 0; at (3, −1): 12 + 3 − 15 = 0.
- 3x − 4y = 24: x = 8, y = −6.
- 2(½(x − 4) + 1) = x − 2, so x − 2y − 2 = 0; at (4, 1): 4 − 2 − 2 = 0.

## Memory aid check

- **"Parallel: same. Perpendicular: flip it and change the sign."** Common teaching phrase, original wording. Meaning: parallel lines have equal gradients; a perpendicular gradient is the negative reciprocal. Assumptions checked: both lines non-vertical; for perpendicular, neither line horizontal (said in scene 6 and tagged grey). It helps a new case: perpendicular to gradient 5 is −1/5. Introduced after the causes in 4 and 6. Key line "set the other variable to 0" holds for every line that meets the axis (a line parallel to an axis has only one intercept; not shown).
- **Considered, not used:** "negative reciprocal" alone (jargon without the action).

## Narration length estimate

Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,585 characters**, 14 scene headings. Characters per scene (1 to 14): 427, 516, 560, 626, 467, 774, 626, 196, 137, 312, 174, 347, 348, 75.

At 13.3 characters per second the speech is about 420 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the intercept drop (2), the stepping (3), the parallel slide (4), the quarter turn, locked pair and skew (6) and the worked boards about 21 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 508 s (8 min 28 s)**, inside the 5,500 to 6,800 character band and about 62 s under the 570 s cap.

No reserve trims are planned: the video sits about 62 s under the cap and only 85 characters above the 5,500 floor. If the learning review removes scene 4's general-form sentence (open decision 2), replace it with an equal-length check sentence rather than leaving the count below the floor.

## Scene list and build ids

Lesson key `m-a11w11` (route math-a11-w11). Explainer folder `src/explainer/lessons/math-a11-w11`; build inputs in `docs/production/claude-pm/lessons/math-a11-w11/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-town-map, intercepts, graphing-methods, parallel, worked-parallel, perpendicular, worked-perpendicular, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 34 s | 1 | w10's town map frame; the three streets glow |
| 34 to 77 s | 2 | The intercept drop on the map; the street ruled |
| 77 to 122 s | 3 | Three graphing methods on an equal-scale plot |
| 122 to 173 s | 4 | The parallel slide on the map |
| 173 to 210 s | 5 | g01 board: parallel through a point |
| 210 to 274 s | 6 | The quarter turn, the locked pair, the skew warning |
| 274 to 323 s | 7 | g01 board: perpendicular through a point |
| 323 to 340 s | 8 | Framed memory card |
| 340 to 435 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 435 to 463 s | 13 | The gym card and kettlebell with empty axes |
| 463 to 508 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w10's last frame continues into scene 1 (camera continue); 1 to 2 camera continue (the map shifts left); 2 to 3 clear change; 3 to 4 clear change back to the map; 4 to 5 clear change (new case); 5 to 6 clear change back to the map; 6 to 7 clear change (new case); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w11-learning-review.md`, `science_check` = `checks/m-a11w11-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only, by file name): `biology/m8-world-map-v1.png` (a world map; wrong scale and meaning), `maths/ma12-city-skyline-strip-v1.png` (t01's skyline, side view). No aerial town plate exists.

Need (painted, new; see the Codex asset brief): `ma11-town-blocks-top-v1.png` (also w10's handoff), and `ma11-gym-membership-card-v1.png` and `ma11-kettlebell-v1.png` (scene 13; w12's anchor, briefed in w12; they must be painted before this build).

Coded (studio kit): axes along the painted main roads, street lines and labels, intercept dots and chips, triangles and brackets, the locked pair, plots, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `StudioPlot` (equal scales), `QuarterTurnNormal`, `studioNormalLine`, `StudioTangentTriangle`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (kit-needs row w11):
1. **Equal-scale check on `StudioPlot`** (small): an `equalScale` prop that sizes the plot so one x unit and one y unit are the same number of pixels, and throws if the given box cannot hold the window at equal scale; plus a `skewDemo` animation (scale one axis by a factor for a set time, then restore) for scene 6.
2. **`LockedPair`** (lesson folder, on `studioNormalLine`): two lines through a point at 90°, rotating together by a timeline angle, with live m₁, m₂ and product readouts that blank near vertical (|m| > 50) and show the grey "vertical" tag.
3. **Map overlay** (lesson folder): coded axes and street lines registered to the plate's sidecar points (street centrelines and the axes' origin), with any measured offsets applied to the coded overlay, never to the plate.

## Codex asset brief (Maths A11 W11, town blocks from above; also w10's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w11.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w10 build (w10's final frame uses it). Save to `public/assets/maths/`. **Transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-top-v1.png` and `maths/ma12-stone-wall-top-v1.png`; no text, street names, numbers, signs, logos, people, cars, hands or faces. Never stretch to fit; keep the native aspect ratio.

1. `ma11-town-blocks-top-v1.png` (2000 × 1400 px, **an aerial view seen exactly from above, painted to a grid at equal scale, 200 px per block of 100 m**, so the plate covers x 0 to 10 and y 0 to 7 blocks with the origin at the lower-left inside corner of the two main roads). Contents: a wide main road along the bottom edge and another along the left edge, meeting at right angles at the origin; three narrower straight streets painted exactly along these centrelines: **Street A** from (0, 4) to (6, 0); **Street B** from (0, 6) to (9, 0); **Street C** from (5/3, 0) through (3, 2) to (19/3, 7). Between the streets: small rooftops, gardens and trees in plan view, simple and quiet so that coded lines and labels read clearly over them. No road markings with words, no cars, no people. Codex reports in `ma11-town-blocks-top-v1.json`, in file pixels: the origin, the px per block in x and y, and two measured points on each street's centreline. If any street misses its line by more than 1 per cent of the width, the builder fits the coded street to the measured points (root decision 30); the plate is never warped.

Report inspection on the paper background (`#f6f1e7`) at 820 px and 1,300 px wide, the alpha check, and the three street lines and the axes drawn over it as a registration check.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "every point on the x axis has height zero" (2); "intercepts are quick for general form" (3, a method choice, not a rule); "parallel means equal gradients" (4; non-vertical lines); "m₁m₂ = −1 ... except a horizontal and a vertical line" (6); "right angles only look right when both axes use the same scale" (6).
4. Confirm the site's three examples keep their answers.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows an intercept dot or the answer line.
6. Confirm the opening matches w10's final frame and scene 13's frame is w12's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate request contains no people, cars, text or numbers, and that the stated street lines are correct (A: 2x + 3y = 12; B: 2x + 3y = 18; C: 3x − 2y = 5).

## YouTube metadata (draft)

Title: Graphing Lines from Intercepts, Parallel and Perpendicular Lines | Year 11 Maths Advanced

(Title length: 89 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson11.sa.html

A straight street crosses a town map, with the two main roads as the axes. Where does it meet each road? Find the x- and y-intercepts (set the other variable to zero), choose a method to graph any line, and see why parallel streets have equal gradients. Then turn a rise-run triangle a quarter turn and watch the rise and run swap: that is why perpendicular gradients multiply to −1 (flip it and change the sign). Worked examples find a parallel and a perpendicular line through a point. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Determine the x-intercept and y-intercept of a straight line given its equation"
"Choose and apply appropriate techniques to graph a straight line given its equation"
"Find the equation of a line that is parallel or perpendicular to a given line"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: equations of straight lines (point-gradient, gradient-intercept, general form). Next: Linear models and inequalities.

#Year11Maths #MathsAdvanced #StraightLines #HSCScience

## Open decisions

- **1. Map plate geometry (root, Codex).** The plate is painted to three street centrelines at equal scale. If Codex cannot hold Street C's angle within 1 per cent, the builder fits the coded street to the measured points (root decision 30). Root confirms this plate is worth the painting effort over a coded map on a painted rooftop texture.
- **2. The general-form parallel shortcut (learning review).** Scene 4 ends with "In general form, the x and y parts stay the same, and only the number changes". The reviewer checks this helps rather than adds a second rule; it is the first reserve trim.
- **3. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w10; check that "y = 0 on the x axis" is shown before the rule; that the parallel slide shows the gap staying fixed; that the quarter turn makes the swap and the sign change visible; that the equal-scale warning lands; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The intercept drop, the slide, the quarter turn and the locked pair carry the explanation; judge them at playback speed, not from stills. Every readout must be computed from the same line equations as the displayed lines.
