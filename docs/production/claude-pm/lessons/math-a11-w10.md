# Maths A11 W10: How do two points, or a point and a gradient, fix a straight line? Gradient from two points, the point-gradient formula, and gradient-intercept and general form (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models). Not voiced (no `math-a11-w10/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,629 characters, 15 scene headings, about 508 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w10-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 5 (split into two beats): **accepted** (root ruling 13). Scene 5 is now "three forms of one line" (ends on the "same line" brace) and scene 6 "on the line, or not" (rows shrink to a strip, "x − 14y − 2 = 0" stays full size, the plot returns to full width). No narration change and no bridge sentence. Scenes 6 to 14 renumbered 7 to 15; every scene reference, the Build ids list (new id `on-the-line`), the stage plan and the transitions updated. The visual's stale cue "crossed" corrected to "cross the y axis".
2. Optional, scene 5a, now scene 5 (keep the ×4 tag with the c ring): **accepted** (visual only).

Narration now 5,629 characters by script, about 508 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: tenth video of the Year 11 Mathematics Advanced course (outline playlist order 10), after w09 (domain and range) and before w11 (intercepts, graphing, parallel and perpendicular lines). Pre-design pack: `../pre-design/maths-a11/math-a11-w10.md` (brief 243). Site lessons (read through the pack's quotations, read only): `working-with-functions/lesson09.sa.html` (Gradient and the Equation of a Line, SHA256 `bd2064a6323b63df8d1a2511dec234a3322d61fa51a3e3bb7cee29336301e2ad`, `we-1`, `we-2`, `we-3`) and `working-with-functions/lesson10.sa.html` (Finding the Equation of a Line, SHA256 `a7a783ecd97b1ffa393d96207b177eb80d4acd338ce57f32c8620376da4284fb`, `we-1`, `we-2`, `we-3`). Every number recalculated with SymPy. Route entry: `math-a11-w10` in `../../programme/maths-a11-route-inputs-1.json`.

Owner rules applied: 2024 syllabus only (y = mx + c, not the site's y = mx + b; site corrections file section 2), content points cited by codename and exact wording; painted plate for the real object (an entrance ramp), coded plots, triangles and algebra; no people, hands, faces or wheelchairs with users (the ramp is shown empty); one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (design and building, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Linear functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-1.json` (the en dashes in "gradient–intercept" and "point–gradient" are the syllabus's own):

- `ci7f902bc1`: "Determine the equations of straight lines in gradient–intercept form y = mx + c with gradient m and y-intercept c"
- `ci2edbbb14`: "Determine the equations of straight lines in general form ax + by + c = 0, where a, b and c are constants"
- `cibddcc59d`: "Determine the equation of a straight line passing through a point (x_1, y_1) with gradient m using the point–gradient formula y - y_1 = m(x - x_1)"
- `ci3ed3083c`: "Determine the equation of a straight line passing through two points (x_1, y_1) and (x_2, y_2) by calculating its gradient m using the formula m = (y_2 - y_1)/(x_2 - x_1)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w09's final frame (the painted ramp with its foot (2, 0) and doorway (9, 0.5)). Recalls gradient as rise over run (Stage 5) and builds the two-point formula on the ramp (`ci3ed3083c`); derives the point-gradient formula from "the gradient from the known point to any point is still m" (`cibddcc59d`); writes the ramp's line in gradient-intercept form (`ci7f902bc1`) and general form (`ci2edbbb14`); checks a point on the line by substitution and uses it for three collinear points. Worked examples: the site's lesson 9 `we-1` (gradient with negatives), lesson 10 `we-1` (point and gradient) and `we-2` (two points, general form). Stops at finding and converting equations. Not taught: intercepts and graphing (w11); parallel and perpendicular lines (w11); modelling (w12). Site lesson 9 `we-2` (4y − 12x = 20) and `we-3` (y = −¾x + 2 to general form) are not used as separate examples: the ramp's own conversion covers both directions (see Decisions).

## Decisions

- **Anchor: an accessible entrance ramp (painted plate, live).** A ramp is a straight line that people build to a rule: many building rules say an access ramp may be no steeper than 1 in 14 (it rises 1 m for every 14 m along). Its foot and its top are two points that fix the line; its foot and the 1 in 14 rule are a point and a gradient that fix it too. So the anchor carries the lesson's question exactly: rise over run between two points (2); the gradient limit as a test, live (2); the gradient from the foot to any point on the ramp staying 1/14, which is the point-gradient formula (4); and the three forms of one line, with the doorway and a handrail post checked on it (5). Design and building, not science; distinct from the Year 12 boat ramp of t02 and t03 (a tide board, not a gradient) and from every other Year 12 anchor; distinct from the w01 to w07 packs' suggestions. The pack's "two taxi trips" was not used because the taxi is w08's anchor; the road sign was not used because it is a road context and w06's pack suggests a speed sign.
- **Idealising assumptions (author notes, not learner copy).** (i) "Many building rules say" scopes the 1 in 14 limit (it is the usual Australian access-ramp maximum); landings, kerbs and handrail heights are not modelled. (ii) The ramp's run of 7 m with no landing is a teaching simplification. (iii) The plate is painted at equal scale, so the real ramp looks gentle; the coded plot beside it stretches the vertical axis by 4 and says so on screen ("vertical scale × 4").
- **Coordinates.** x is the distance in metres along the footpath from a fence post at the left; y is the height in metres above the footpath. Ramp foot A(2, 0); doorway D(9, 0.5); handrail post P(5.5, 0.25) halfway. Gradient 0.5/7 = 1/14. Line: y = (x − 2)/14 = x/14 − 1/7; general form x − 14y − 2 = 0.
- **Simulations (standard item 3).**
  1. **The doorway slider** (scene 2): on the coded plot, the top point D slides up and down (doorway height 0.3 m to 0.8 m) with the run fixed at 7 m; the rise bracket, the run bracket and a `LiveReadoutBoard` (rise, run, gradient m to 3 decimals and as a fraction when exact) update together; a dashed 1-in-14 limit line stays fixed; above it the ramp line is tagged "too steep", at 0.5 m it lies exactly on the limit, below it "gentler".
  2. **The riding point** (scene 4; `FunctionRider` with a linear function and `StudioTangentTriangle` anchored at A): a point (x, y) rides the ramp line from A to D and beyond; the triangle from A to the point grows, its rise and run readouts change, and the ratio readout stays "1/14" throughout.
  3. **The order flip** (scene 2's last sentence, scene 3): the subtraction arrows draw from the second point back to the first on both rise and run; when one arrow is reversed alone, the gradient readout flips sign and turns red with a cross.
- **Colour roles (fixed for the whole video).** Run (change in x) **amber** (`MATH_AMBER`); rise (change in y) **blue** (`MATH_BLUE`); gradient m **violet** (`MATH_GRADIENT`); the known point (x₁, y₁) **teal** (`MATH_TEAL`); the general point (x, y) ink; answer **green**; mistake **red**, crossed slips only. The 1 in 14 limit line is dashed ink with its label.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "rise", "run", "1 in 14", "too steep", "just passes", "same order", "minus a negative adds", "still 1/14", "any point", "known point", "same line", "on the line", "collinear", "whole numbers", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w09's ramp frame becomes the hook (1); the ramp plot with the doorway slider (2); g01 board, negatives (3); the riding point (4); the three forms beside the ramp (5); the doorway and post checks on the full-width plot (6, a beat change; Revision 2 split); g01 board, point and gradient (7); g01 board, two points to general form (8); framed memory card (9); question cards with pictures (10 to 13); the town map handoff (14); key notes (15).
- **Worked examples (g01 layout, standard item 7).** Scene 3 (lesson 9 `we-1`): m through (−2, 7) and (4, −5) is −2; crossed slip "−12/2 = −6" captioned "4 − (−2) = 6". Scene 7 (lesson 10 `we-1`): m = −3 through (−2, 5) gives y = −3x − 1; crossed slip "y − 5 = −3(x − 2)" captioned "x − (−2) = x + 2". Scene 8 (lesson 10 `we-2`): (1, 3) and (5, 11) give y = 2x + 1 and 2x − y + 1 = 0, checked at (5, 11); crossed slip "m = (11 − 3)/(1 − 5) = −2" captioned "same order, top and bottom". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Site examples not used separately.** Lesson 9 `we-2` (4y − 12x = 20 to y = 3x + 5) reads m and c by making y the subject, and `we-3` (y = −¾x + 2 to 3x + 4y − 8 = 0) clears a fraction to reach general form. Scene 5 does both moves on the ramp's own line (y = x/14 − 1/7 ⇄ x − 14y − 2 = 0), and attempt 2 clears a fraction again. The collinearity check (lesson 10 `we-3`) is done on the ramp (A, P and D) by substitution into the line's equation, which is the same test as equal gradients through a shared point; the equal-gradient form is named in one sentence.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Same order, top and bottom." with the key line "y − y₁ = m(x − x₁): from the point you know to any point, the gradient is still m." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** The riding point climbs the ramp and the triangle behind it keeps growing, yet the gradient readout never moves from 1/14 (scene 4): the point-gradient formula is seen to be true before it is written.
- **Attempts (pack questions, original).** A1: "Find the equation of the line through (−3, 4) and (1, −4). Give your answer in gradient-intercept form." Answer y = −2x − 2. Crossed: "y = −2x + 10" (used x − 3). A2: "Find the equation of the line with gradient 2/3 that passes through (6, −1). Give your answer in general form." Answer 2x − 3y − 15 = 0. Crossed: "⅔x − y − 5 = 0" (same line, but general form needs whole-number coefficients).
- **Mistake scene:** none separate. Different orders top and bottom (2, 8 crossed); x − (−2) as x − 2 (3, 7 crossed; A1 crossed); fractions left in general form (A2 crossed); reading the gradient of ax + by + c = 0 as a (pack trap; avoided by always making y the subject first in scene 5, with a grey tag "the gradient is not the 1 in front of x").
- **Cause chain taught, in order:** (1) gradient is rise over run, so between two points it is the change in y over the change in x (2); (2) subtracting in the same order keeps the signs consistent (2, 3); (3) a straight line has the same gradient everywhere, so the gradient from a known point to any point (x, y) is m (4); (4) rearranging that equal-gradient statement gives y − y₁ = m(x − x₁) (4); (5) one line has many equation forms, reached by rearranging (5); (6) a point lies on a line exactly when its coordinates satisfy the equation, which also tests whether three points are collinear (6).
- **Entry knowledge (route):** Stage 5 gradient as rise over run; plotting lines; rearranging linear equations; w08 substitution; w09 for the opening frame only.
- **Learner-visible vocabulary (plain meaning at first use):** gradient (steepness: rise over run, 2); gradient-intercept form (y = mx + c, m the gradient and c where the line crosses the y axis, 5); general form (ax + by + c = 0, everything on one side, usually whole numbers with a positive, 5); collinear (on one straight line, 6).
- **Handoff (to w11, "How do intercepts draw a line and gradients compare two lines?").** Scene 14: the painted town blocks (`ma11-town-blocks-top-v1.png`, w11's anchor) with two main roads as the axes and one straight street on 2x + 3y = 12, "?" chips where it meets each main road and a dashed right-angle mark at a point on it, chip "Next: where does it cross, and what crosses it at right angles?". This is w11's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ramp: m = 0.5/7 = 1/14 ≈ 0.0714; y = x/14 − 1/7 (c = −1/7 ≈ −0.143, below the footpath at the fence post, where the line, not the ramp, would cross); general form x − 14y − 2 = 0; D: 9 − 7 − 2 = 0; P: 5.5 − 3.5 − 2 = 0.
  (b) Doorway slider (run 7): rise 0.3, 0.5, 0.6, 0.8 give m 0.043, 0.071, 0.086, 0.114.
  (c) Lesson 9 `we-1`: (−5 − 7)/(4 − (−2)) = −12/6 = −2; slip −12/2 = −6.
  (d) Lesson 10 `we-1`: y − 5 = −3(x + 2) gives y = −3x − 1; check −3(−2) − 1 = 5. `we-2`: m = 8/4 = 2; y = 2x + 1; 2x − y + 1 = 0; check 10 − 11 + 1 = 0; reversed-order slip (11 − 3)/(1 − 5) = −2.
  (e) A1: m = (−4 − 4)/(1 − (−3)) = −2; y = −2x − 2; slip y − 4 = −2(x − 3) gives y = −2x + 10. A2: y + 1 = ⅔(x − 6); ×3: 3y + 3 = 2x − 12; 2x − 3y − 15 = 0; ⅔x − y − 5 = 0 is the same line.
  (f) Pronunciations: "y two minus y one", "x minus x one", "one fourteenth", "one seventh", "zero point five" (Australian), "two thirds". Voice-pilot items: "zero point five" against "zero point five" (match the course choice).
  (g) Plot window: x 0 to 10 m (ticks 1), y −0.2 to 1.2 m (ticks 0.2), vertical scale × 4 relative to horizontal, labelled.

Main question: *An entrance ramp starts at one point and reaches a doorway at another, and it must be no steeper than 1 in 14. How do two points, or one point and a gradient, give the equation of a straight line, and in which forms can we write it?*
Entry knowledge (Stage 5; w08): rise over run; rearranging linear equations; substitution.
Stops after: gradient from two points, point-gradient formula, gradient-intercept and general form, a point-on-line and collinearity check. No intercept graphing, parallel or perpendicular lines.
Handoff: math-a11-w11: a street on a town map, where it meets the main roads and what crosses it at right angles (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): run amber; rise blue; gradient violet; known point teal; general point ink; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: a ramp to a rule
> Here's that ramp. Put the footpath on the x axis, with distances in metres from the fence post at the left, and heights in metres up the y axis. The ramp starts two metres along, and reaches the doorway nine metres along, half a metre **up**. Many building rules say an access ramp can be no steeper than one in fourteen. That means it rises one metre for every fourteen metres along. Does this ramp **pass**? And what's the equation of its line? Two points, or one point and a gradient, fix a straight line. Let's see how.

Visual: opens on w09's final frame exactly (the painted ramp `ma11-entrance-ramp-v1.png`, about 1,500 px wide, on the coded footpath axis 0 to 10 with the points (2, 0) and (9, 0.5), brackets "7 m" and "0.5 m", chips "Next: two points fix a line" and "?"). On the first sentence the "Next" chip fades and the heading writes on: "How do two points, or a point and a gradient, fix a line?"; the coded axes extend: x "distance along (m)" (amber label) and a short y axis "height (m)" at the fence post (blue label). On "up" the two points pulse, labelled "A(2, 0)" and "D(9, 0.5)" in teal and ink. On "one in fourteen" a small coded ruler sketch at the top right: a triangle "14 m along, 1 m up" with a hand tag "1 in 14"; it stays as a 30 px chip. On "pass" a "?" chip sits on the ramp's surface. On the last sentences the chip "Two points? A point and a gradient?" moves to the top right as the scene question.

### 2. gradient from two points
> Gradient measures steepness: rise over run. Between two points, the rise is the change in y, and the run is the change in x. So m equals y two minus y one, over x two minus x one. For the ramp, the rise is zero point five minus zero, and the run is nine minus two, which is seven. Zero point five over seven is one fourteenth. So the ramp just **passes**. Now watch what happens if the doorway were **higher**. The run stays seven, the rise grows, and the gradient climbs past one fourteenth. That ramp would be too steep. One more thing. Subtract in the same order, top and bottom, starting from the same **point**.

Visual: camera continue into the ramp plot: the plate shrinks to the top strip (900 px wide, solid) and a coded `StudioPlot` (1,300 × 560 px, x 0 to 10, y −0.2 to 1.2, tag "vertical scale × 4") fills the lower two-thirds with the ramp line from A to D and the dashed 1-in-14 line from A. On "rise over run" the run bracket (amber) and rise bracket (blue) draw between A and D. Equation strip, 44 px: "m = (y₂ − y₁)/(x₂ − x₁)", "y₂ − y₁" blue, "x₂ − x₁" amber, "m" violet. Row, 52 px: "m = (0.5 − 0)/(9 − 2) = 0.5/7 = 1/14"; on "passes" the ramp line lies exactly on the dashed limit, hand tag "just passes", green tick. On "higher" the doorway slider runs (simulation 1): D rises to 0.8 m; `LiveReadoutBoard`: "rise 0.8", "run 7", "m ≈ 0.114"; the line climbs above the dashed limit, tag "too steep"; then D falls to 0.3 m ("m ≈ 0.043", tag "gentler") and returns to 0.5 m. On "point" (last bold) the subtraction arrows draw from D back to A on both brackets, hand tag "same order"; then the run arrow alone reverses and the readout shows "−1/14" in red, crossed.

### 3. worked example 1: negatives
> Here's one with negatives. Find the gradient of the line through minus two, seven, and four, minus five. Take the second point first, top and bottom. The rise is minus five minus seven, which is minus twelve. The run is four minus minus two, and subtracting a negative adds, so it's **six**. Minus twelve over six is minus **two**. Start from the first point instead, and you get twelve over minus six, the same minus two. A negative gradient means the line falls as x increases. Writing the run as four minus two, which is two, is the classic slip, and gives minus **six**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the gradient of the line through (−2, 7) and (4, −5)." (site lesson 9 `we-1`). Givens card: "(x₁, y₁) = (−2, 7)" (teal), "(x₂, y₂) = (4, −5)". A small plot at the right (560 × 480 px, x −3 to 5, y −6 to 8) with both points and the line through them. On "rise" the blue bracket and row "rise: −5 − 7 = −12". On "six" the amber bracket and row "run: 4 − (−2) = 6", hand tag "minus a negative adds". On "two" the row "m = −12/6 = −2" in a green frame, the line glowing violet; on "Start from the first point" a grey side row "(7 − (−5))/(−2 − 4) = 12/(−6) = −2", hand tag "same order: same answer"; then tag "falls as x increases". On "six" (last bold) a red slip "−12/(4 − 2) = −6" writes and is crossed, caption "4 − (−2) = 6".

### 4. the point-gradient formula
> Now the big idea. Pick any point on the ramp's line, and call it x, y. The gradient from the foot of the ramp, two, zero, up to that point is still one fourteenth, because a straight line has the same gradient **everywhere**. Watch the point slide. The rise and the run both change, but their ratio **doesn't**. So y minus zero, over x minus two, equals one fourteenth. Multiply both sides by x minus two, and you get the point gradient formula: y minus y one equals m times, x minus x **one**. One known point and the gradient give you the whole line.

Visual: clear change back to the ramp plot (same window). A is teal and labelled "known point (x₁, y₁) = (2, 0)". On "x, y" a general point "(x, y)" (ink) appears on the line at x = 4. On "everywhere" the triangle from A to the point draws with its rise (blue) and run (amber) brackets. On "slide" the riding point runs (simulation 2) from x = 4 to x = 9 and on to x = 10, the triangle stretching; `LiveReadoutBoard`, 52 px: "run x − 2", "rise y − 0", "rise ÷ run = 1/14". On "doesn't" the ratio readout pulses with a hand tag "still 1/14". Row, 52 px: "(y − 0)/(x − 2) = 1/14". On "Multiply" the row becomes "y − 0 = (1/14)(x − 2)" and beside it the general form of the rule writes in the equation strip, 52 px, "y − y₁ = m(x − x₁)", with "(x₁, y₁)" teal and "m" violet; on "one" (last bold) a hand tag "known point to any point".

### 5. three forms of one line
> For the ramp, y equals one fourteenth of, x minus two. Expand it, and y equals one fourteenth x, minus one **seventh**. That's gradient intercept form, y equals m x plus c. The gradient m is one fourteenth, and c is where the line would cross the y axis, here at minus one seventh. There's also general form, with everything on one side and whole numbers. Multiply by fourteen: fourteen y equals x minus two, so x minus fourteen y minus two equals **zero**. Three forms, one line.

Visual: camera continue; the plot narrows to the right half (the ramp plate strip still at the top, solid). Left: three framed rows stacked, each written on its cue, 52 px: "y = (1/14)(x − 2)" (point-gradient, tag "from A"); on "seventh" "y = (1/14)x − 1/7" with "1/14" violet and "−1/7" labelled "c"; a grey tag "gradient-intercept: y = mx + c (the site writes b; the syllabus writes c)". On "cross the y axis" the plot extends the line dashed back to x = 0, where a small ring at y = −1/7 shows "c" below the footpath, hand tag "the line, not the ramp"; the plot's "vertical scale × 4" tag stays visible beside the ring for as long as the ring is shown, so the stretched picture does not suggest the wrong size. On "zero" the third row "x − 14y − 2 = 0", tag "general: ax + by + c = 0, whole numbers", and a grey tag "the gradient is not the 1 in front of x". On "Three forms, one line" a brace joins the three rows, hand tag "same line". The stage holds on the brace.

### 6. on the line, or not
> A point is on a line exactly when its coordinates make the equation true. The doorway, nine, zero point five, gives nine minus seven minus two, which is **zero**. The handrail post, halfway at five point five, zero point two five, gives zero as well. So the foot, the post and the doorway are collinear, all on one straight **line**.

Visual: camera continue, a new beat (Revision 2 split): the three framed rows shrink to a 32 px strip at the top left, keeping "x − 14y − 2 = 0" at full size (52 px) under a heading "on the line, or not" (hand font, 44 px); the plot returns to full width (the plate strip stays at the top, solid). On "zero" the doorway D pulses with the row "9 − 14(0.5) − 2 = 0 ✓". On "handrail post" a coded post marker appears at P(5.5, 0.25) on the plate strip and the plot, with "5.5 − 14(0.25) − 2 = 0 ✓". On "line" A, P and D glow together on one violet line, hand tag "collinear", with a small grey row "m(AP) = m(PD) = 1/14".

### 7. worked example 2: a point and a gradient
> Now a worked example. Find the equation of the line with gradient minus three, through minus two, five, in gradient intercept form. Substitute into y minus y one equals m, x minus x one. That's y minus five equals minus three times, x minus minus two. And x minus minus two is x plus **two**. Expand: y minus five equals minus three x minus six. Add five, and y equals minus three x minus **one**. Check the point: minus three times minus two, minus one, is five. It **works**.

Visual: clear change to the g01 board. Task strip: "Find the equation of the line with gradient −3 through (−2, 5). Give your answer in gradient-intercept form." (site lesson 10 `we-1`). Givens card: "m = −3" (violet), "(x₁, y₁) = (−2, 5)" (teal). Equation strip: "y − y₁ = m(x − x₁)". Rows, 52 px, one at a time: "y − 5 = −3(x − (−2))"; on "two" "y − 5 = −3(x + 2)" with "+ 2" ringed, hand tag "minus a negative adds". "y − 5 = −3x − 6"; on "one" "y = −3x − 1" in a green frame. On "works" the check row "−3(−2) − 1 = 5 ✓" and a red slip "y − 5 = −3(x − 2)" writes small at the right and is crossed (caption "x − (−2) = x + 2"). A small plot at the right shows the line through (−2, 5) falling with gradient −3.

### 8. worked example 3: two points, general form
> With two points, find the gradient first, then use either point. Find the line through one, three, and five, eleven, in general form. The gradient is eleven minus three, over five minus one: eight over four, which is **two**. Use the easier point, one, three: y minus three equals two times, x minus one, so y equals two x plus **one**. Using five, eleven instead gives the same line, with bigger numbers. Move everything to one side: two x minus y plus one equals **zero**. Check the other point: ten minus eleven plus one is zero. Eleven minus three over one minus five would flip the **sign**.

Visual: clear change to the g01 board (new case). Task strip: "Find the equation of the line through (1, 3) and (5, 11), in general form." (site lesson 10 `we-2`). Givens card: "(1, 3)" (teal), "(5, 11)". Small plot at the right with both points, the rise (blue) and run (amber) brackets. Rows, 52 px: "m = (11 − 3)/(5 − 1) = 8/4"; on "two" "= 2" (violet). On "easier point" "y − 3 = 2(x − 1)"; on "one" "y = 2x + 1"; on "Using five, eleven" a grey side row "y − 11 = 2(x − 5) → y = 2x + 1", hand tag "same line". On "zero" (first bold) "2x − y + 1 = 0" in a green frame. On "Check" the row "2(5) − 11 + 1 = 0 ✓" with (5, 11) pulsing. On "sign" a red slip "(11 − 3)/(1 − 5) = −2" writes and is crossed, caption "same order, top and bottom".

### 9. memory aid
> Here's how to keep it straight. For the gradient, same order, top and bottom. And for the line, from the point you know to any point, the gradient is still **m**. That one sentence is the point gradient formula.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: a small ramp sketch with the triangle from the teal known point to a riding point, readout "still m". Main line, hand font 60 px: "Same order, top and bottom." On "m" the key line, 40 px: "y − y₁ = m(x − x₁): known point to any point, still m." Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the equation of the line through minus three, four, and one, minus four. Give your answer in gradient intercept form. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the equation of the line through (−3, 4) and (1, −4). Give your answer in gradient-intercept form." The full question stays on screen. Picture slot: empty axes (x −4 to 3, y −5 to 5) with the two points plotted and labelled, no line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> The gradient is minus four minus four, over one minus minus three: minus eight over four, which is minus **two**. Using minus three, four: y minus four equals minus two times, x plus three. So y equals minus two x minus **two**. Y equals minus two x plus ten is wrong. It used x minus three, instead of x plus **three**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "(−3, 4)", "(1, −4)", "gradient-intercept form" (underlined in the card as used). Rows, 52 px: "m = (−4 − 4)/(1 − (−3)) = −8/4"; on "two" (first bold) "= −2". Next row "y − 4 = −2(x + 3)"; on "two" (second bold) "y = −2x − 2" in a green frame, the line drawn through both points. On "three" a red slip "y − 4 = −2(x − 3), so y = −2x + 10" writes and is crossed (hand caption "x − (−3) = x + 3"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Find the equation of the line with gradient two thirds that passes through six, minus one. Give your answer in general form. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the equation of the line with gradient 2/3 that passes through (6, −1). Give your answer in general form." The full question stays on screen. Picture slot: empty axes (x −2 to 9, y −6 to 3) with the point (6, −1) plotted and a small "m = 2/3" chip; no line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> Start with y plus one equals two thirds, times x minus six. Multiply both sides by three to clear the **fraction**: three y plus three equals two x minus twelve. Move everything to one side: two x minus three y minus fifteen equals **zero**. Two thirds x minus y minus five equals zero is the same line, but general form needs whole number **coefficients**.

Visual: the card shrinks to the top. `GivensStrip`: "m = 2/3", "(6, −1)", "general form" (underlined as used). Rows, 52 px: "y + 1 = (2/3)(x − 6)"; on "fraction" "× 3: 3y + 3 = 2x − 12", hand tag "clear the fraction". On "zero" "2x − 3y − 15 = 0" in a green frame, with the check "12 + 3 − 15 = 0 ✓" grey beside it. On "coefficients" a red slip "(2/3)x − y − 5 = 0" writes and is crossed (hand caption "whole numbers"). Hold about 1 s.

### 14. handoff
> So two points, or a point and a gradient, fix a line, and you can write it in any of the three forms. Now look at a town map. The two main roads are the axes, and this straight street is two x plus three y equals twelve. Where does it meet each main road? And how would you lay a new street, crossing it at right **angles**?

Visual: the three forms show as small chips at the top ("y − y₁ = m(x − x₁)", "y = mx + c", "ax + by + c = 0", 34 px), then fade on "Now look". Board clears to the painted town blocks `ma11-town-blocks-top-v1.png` (about 1,400 × 980 px, solid; w11's anchor), with the two main roads along its bottom and left edges drawn over as the coded x and y axes (equal scale, "blocks of 100 m"), and the diagonal street highlighted by a coded ink line labelled "2x + 3y = 12" (44 px). "?" chips sit where the street meets each main road. On "angles" a dashed right-angle mark and a short dashed cross street appear at (3, 2) on the street. Chip "Next: where does it cross, and what crosses it at right angles?" and "?". Hold about 2 s. This is w11's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- m = (y₂ − y₁)/(x₂ − x₁), same order top and bottom.
- Point-gradient: y − y₁ = m(x − x₁).
- Gradient-intercept: y = mx + c.
- General form: ax + by + c = 0, whole numbers.
- On the line: the point makes the equation true.

Memory aid (framed card, right side of the notes screen, as in scene 9): *Same order, top and bottom.* Key: *Known point to any point: still m.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 14's frame exactly (the town blocks with the street 2x + 3y = 12, the "?" chips, the dashed cross street, "Next: where does it cross, and what crosses it at right angles?"). This is the final frame and w11's opening frame.

## Teaching checks

- **Does it explain causes?** Why m = (y₂ − y₁)/(x₂ − x₁): rise over run between the points (2). Why the same order: otherwise rise and run take opposite signs (2, 8). Why 4 − (−2) = 6 (3). Why y − y₁ = m(x − x₁): the gradient from the known point to any point is m, because a line's gradient is the same everywhere (4). Why the three forms agree: each is a rearrangement (5). Why the substitution check works: points on the line satisfy its equation (6, 8). Why collinear: one line through all three (6).
- **Misconceptions addressed:** mixed order (2, 8 crossed); double negative (3 crossed, 7 crossed, A1 crossed); fractions in general form (A2 crossed); the gradient of ax + by + c = 0 read as a (5 tag); y = mx + b against y = mx + c (5 grey tag).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted ramp from the first seconds, returning in 2, 4, 5 and 6; 2 a new stage every 30 to 60 s; 3 the doorway slider, the riding point with its constant ratio; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 3, 7 and 8, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the triangle that grows while the gradient readout stays 1/14.
- **One idea at a time:** gradient (2, 3), then the formula (4), then the three forms (5), then the point check as its own beat (6), then the two routes as worked examples (7, 8).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 27 s.
- **Avoided double teaching:** rise over run (Stage 5) is recalled in one sentence; substitution (w08) is used.
- **Syllabus coverage:** `ci7f902bc1` (5, 7, 11; key note 3); `ci2edbbb14` (5, 6, 8, 13; key note 4); `cibddcc59d` (4, 7, 13; key note 2); `ci3ed3083c` (2, 3, 8, 11; key note 1).
- **Out of scope by design:** intercepts and graphing, parallel and perpendicular (w11); modelling (w12).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find the equation of the line through (−3, 4) and (1, −4). Give your answer in gradient-intercept form."
Model answer: m = (−4 − 4)/(1 − (−3)) = −8/4 = −2. y − 4 = −2(x + 3), so y = −2x − 2. Classic mistake (crossed): "y = −2x + 10" (used x − 3).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "Find the equation of the line with gradient 2/3 that passes through (6, −1). Give your answer in general form."
Model answer: y + 1 = ⅔(x − 6). Multiply by 3: 3y + 3 = 2x − 12. So 2x − 3y − 15 = 0. Classic mistake (crossed): "⅔x − y − 5 = 0" (not whole-number coefficients).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ramp | A(2, 0), D(9, 0.5), P(5.5, 0.25); run 7, rise 0.5; m = 1/14 | 1, 2, 4, 5, 6, 9 |
| Ramp line | y = (1/14)(x − 2) = x/14 − 1/7; x − 14y − 2 = 0; D and P give 0 | 5, 6 |
| Doorway slider | rise 0.3, 0.5, 0.6, 0.8: m ≈ 0.043, 0.071, 0.086, 0.114 | 2 |
| Lesson 9 `we-1` | (−2, 7), (4, −5): rise −12, run 6, m = −2; slip −6 | 3 |
| Lesson 10 `we-1` | m = −3, (−2, 5): y = −3x − 1; check 5 | 7 |
| Lesson 10 `we-2` | (1, 3), (5, 11): m = 2; y = 2x + 1; 2x − y + 1 = 0; check 0; slip −2 | 8 |
| A1 | m = −2; y = −2x − 2; crossed y = −2x + 10 | 10, 11 |
| A2 | 2x − 3y − 15 = 0; crossed ⅔x − y − 5 = 0 | 12, 13 |
| Handoff | street 2x + 3y = 12; cross-street point (3, 2) | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w08w14/verify.py`); Codex to re-check.

- 0.5/7 = 1/14 ≈ 0.0714; (1/14)(x − 2) = x/14 − 1/7; 9 − 14(0.5) − 2 = 0; 5.5 − 14(0.25) − 2 = 0; (5.5 − 2)/14 = 0.25.
- 0.3/7 ≈ 0.0429, 0.6/7 ≈ 0.0857, 0.8/7 ≈ 0.1143.
- (−5 − 7)/(4 + 2) = −2; (7 − (−5))/(−2 − 4) = −2; (−5 − 7)/(4 − 2) = −6.
- −3(x + 2) + 5 = −3x − 1; −3(−2) − 1 = 5.
- (11 − 3)/(5 − 1) = 2; 2(x − 1) + 3 = 2x + 1; 2(x − 5) + 11 = 2x + 1; 2(5) − 11 + 1 = 0.
- (−4 − 4)/(1 + 3) = −2; −2(x + 3) + 4 = −2x − 2; −2(x − 3) + 4 = −2x + 10.
- 3(⅔(x − 6) − 1) = 2x − 15, so 2x − 3y − 15 = 0; at (6, −1): 12 + 3 − 15 = 0.
- Handoff: 2(3) + 3(2) = 12, so (3, 2) is on the street.

## Memory aid check

- **"Same order, top and bottom."** Common teaching phrase, original wording. Meaning: subtract the coordinates of the same point last in both the numerator and the denominator. Assumptions checked: always valid for two distinct points with x₁ ≠ x₂ (a vertical line has no gradient; not in this video). Key line "known point to any point, still m" restates `cibddcc59d` with its cause (scene 4) and holds for every non-vertical line. Introduced after the causes in 2 and 4.
- **Considered, not used:** "rise over run, run is x" (no help with signs).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,629 characters**, 15 scene headings. Characters per scene (1 to 15): 515, 604, 562, 540, 472, 325, 465, 580, 207, 155, 308, 156, 345, 320, 75.

At 13.3 characters per second the speech is about 423 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the doorway slider (2), the riding point (4), the three-forms build (5) and the worked boards about 20 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 508 s (8 min 28 s)**, inside the 5,500 to 6,800 character band and about 62 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 6's "The handrail post, halfway at five point five, zero point two five, gives zero as well." (keep the post's check row on screen); scene 2's "That ramp would be too steep." (keep the tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w10` (route math-a11-w10). Explainer folder `src/explainer/lessons/math-a11-w10`; build inputs in `docs/production/claude-pm/lessons/math-a11-w10/` (to be created at voicing).

In order (kebab-case; 15 scene headings, all `### N.`; Revision 2 split old scene 5 into three-forms and on-the-line and renumbered the rest): hook-ramp, gradient-two-points, worked-negatives, point-gradient, three-forms, on-the-line, worked-point-gradient, worked-two-points, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 42 s | 1 | w09's ramp frame, axes and the 1 in 14 rule |
| 42 to 91 s | 2 | Ramp plot with rise and run; the doorway slider |
| 91 to 135 s | 3 | g01 board: gradient with negatives |
| 135 to 180 s | 4 | The riding point and the constant ratio; the formula |
| 180 to 218 s | 5 | Three forms beside the ramp, joined by the "same line" brace |
| 218 to 243 s | 6 | On the line, or not: rows as a strip, full-width plot; the doorway and post checks |
| 243 to 280 s | 7 | g01 board: a point and a gradient |
| 280 to 326 s | 8 | g01 board: two points to general form |
| 326 to 344 s | 9 | Framed memory card |
| 344 to 438 s | 10 to 13 | Question cards with pictures and countdowns, then feedback |
| 438 to 464 s | 14 | The painted town blocks with the street |
| 464 to 509 s | 15 | Key notes with the framed card, then a silent return to scene 14's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w09's last frame continues into scene 1 (camera continue); 1 to 2 camera continue (the plate becomes the strip over the plot); 2 to 3 clear change (new case); 3 to 4 clear change back to the ramp plot; 4 to 5 camera continue; 5 to 6 camera continue (the three rows shrink to a strip and the plot returns to full width); 6 to 7, 7 to 8 clear change (new cases); 8 to 9 camera pull back to the card; attempts and feedback: the card shrinks to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, then a silent return to scene 14's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w10-learning-review.md`, `science_check` = `checks/m-a11-w10-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only, by file name): `physics/phys-y11-ramp-hinge-block-v1.png` is a laboratory ramp (wrong context); `maths/ma12-tide-board-v1.png` is t02's boat ramp tide board. No building entrance ramp exists.

Need (painted, new; see the Codex asset brief): `ma11-entrance-ramp-v1.png` (also w09's handoff), and `ma11-town-blocks-top-v1.png` (scene 14; w11's anchor, briefed in w11; it must be painted before this build).

Coded (studio kit): axes and plot, the limit line, brackets, triangles, the riding point, readouts, the handrail post marker, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `StudioPlot`, `FunctionRider` (linear), `StudioTangentTriangle` (anchored at a fixed point, as the rise-run triangle), `ParameterSlider`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions: none essential (kit-needs row w10). Two small options on existing parts: an `anisotropic` label on `StudioPlot` ("vertical scale × 4") and a `fixedStart` mode on `StudioTangentTriangle` (the triangle runs from a fixed known point to the rider, rather than from the rider by a fixed run).

## Codex asset brief (Maths A11 W10, an entrance ramp; also w09's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w10.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w09 build (w09's final frame uses it). Save to `public/assets/maths/`. **Transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; at least 8 per cent clear margin; no text, signs, symbols (including the access symbol), people, wheelchairs, hands, faces, sky, glow or shadow beyond the plate's own ground patch. Never stretch to fit; keep the native aspect ratio.

1. `ma11-entrance-ramp-v1.png` (3600 × 1100 px), **painted at equal horizontal and vertical scale, 340 px per metre**: a side view (exactly side-on) of a concrete footpath running the full width, a short timber fence post at the far left (its centre line is x = 0), and an accessible concrete entrance ramp with a simple steel handrail rising in a **straight line** from its foot at 2 m along (on the footpath surface) to a flat landing at 9 m along and 0.5 m up, in front of a plain building entrance with a closed door (door about 2.1 m tall). The ramp surface must be one straight edge between the foot and the landing; the handrail runs parallel to it. Codex reports in `ma11-entrance-ramp-v1.json`, in file pixels: the footpath surface line (y), the fence post centre (x), the ramp foot point and the landing edge point on the ramp surface, and the measured px per metre in both directions. If the measured points miss the 2 m, 9 m and 0.5 m positions by more than 1 per cent of the width, the builder fits the coded points to the measured ones (root decision 30); the plate is never warped.

Report inspection on the paper background (`#f6f1e7`) at 900 px and 1,500 px wide, the alpha check, and the anchor points overlaid as dots.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the four syllabus quotes match the route-inputs JSON exactly (including the en dashes), y = mx + c is used throughout (no y = mx + b in learner copy except the one grey tag naming the site's form), and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "many building rules say ... no steeper than one in fourteen" (1); "a straight line has the same gradient everywhere" (4); "a point is on a line exactly when its coordinates make the equation true" (6); "general form ... with whole numbers" (5, 13, key note 4; the syllabus form allows any constants, the course convention is whole numbers with a positive first coefficient); "c is where the line would cross the y axis" (5).
4. Confirm the site's three examples keep their numbers, and that the unused lesson 9 `we-2` and `we-3` are correctly described as covered by scene 5's conversions.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a line or answer.
6. Confirm the opening matches w09's final frame and scene 14's frame is w11's opening frame (street 2x + 3y = 12, dashed cross street at (3, 2)).
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate request contains no people, wheelchairs, signs or text.

## YouTube metadata (draft)

Title: Equation of a Line: Two Points, Point-Gradient and General Form | Year 11 Maths Advanced

(Title length: 87 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson10.sa.html

An entrance ramp rises half a metre over seven metres. Is it within the usual 1 in 14 limit, and what is the equation of its line? Find the gradient from two points (same order, top and bottom), watch a point ride the ramp while the gradient stays the same, and see where the point-gradient formula y − y₁ = m(x − x₁) comes from. Write one line in gradient-intercept form y = mx + c and general form ax + by + c = 0, check points on it, and work through negatives, a point and a gradient, and two points. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Determine the equations of straight lines in gradient–intercept form y = mx + c with gradient m and y-intercept c"
"Determine the equations of straight lines in general form ax + by + c = 0, where a, b and c are constants"
"Determine the equation of a straight line passing through a point (x₁, y₁) with gradient m using the point–gradient formula y − y₁ = m(x − x₁)"
"Determine the equation of a straight line passing through two points (x₁, y₁) and (x₂, y₂) by calculating its gradient m using the formula m = (y₂ − y₁)/(x₂ − x₁)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: gradient as rise over run (Year 10). Next: Graphing lines, parallel and perpendicular.

#Year11Maths #MathsAdvanced #StraightLines #HSCScience

## Open decisions

- **1. The 1 in 14 claim (maths check).** Spoken as "Many building rules say an access ramp can be no steeper than one in fourteen". The maths check confirms this is a fair everyday statement for Australia (AS 1428.1 sets 1:14 as the usual maximum for a ramp) without naming the standard in learner copy.
- **2. Site link (root).** The description links lesson 10 (the equation examples); lesson 9 is the source of the gradient example. Both are `.sa.html` (root decision 15).
- **3. "Zero point five" (voice pilot).** The design writes "zero point five" for 0.5 (Australian); match whatever the course's voice pilot fixes for decimals.
- **4. Unequal scales (learning review).** The plot's vertical scale is × 4 so that a 1 in 14 ramp is visible. The reviewer checks that the "vertical scale × 4" tag is enough, given that w11 stresses equal scales for right angles.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w10-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from Stage 5 rise over run; check that the doorway slider makes the limit a real test; that the constant ratio is visible before the formula is written; that the three forms read as one line; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The slider and the riding triangle carry the explanation; judge them at playback speed, not from stills. Every readout must be computed from the same coordinates as the displayed points.
