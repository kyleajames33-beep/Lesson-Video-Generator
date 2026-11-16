# Maths A11 W16: How do key features build a parabola, and how do we work back to its equation? Labelled sketches, equations from features, and equal quadratics (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w16/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,813 characters, 14 scene headings, about 524 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w16-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 6 (logical link missing): **accepted, adapted.** The reviewer's "zero at every x, so it must be zero everywhere" restates itself, so the link is spelled out instead: "This difference is zero at every x, which is far more than two zeros. So it can't really be a quadratic or a line at all. Every coefficient in it must be zero, and that means the matching coefficients are equal." A new cue "zero" lands the flat line, after the zero dots fill the axis.

Narration now 5,813 characters by script, about 524 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: sixteenth video of the Year 11 Mathematics Advanced course (outline playlist order 16), after w15 (completing the square, vertex and axis) and before w17 (intersections). Pre-design pack: `../pre-design/maths-a11/math-a11-w16.md` (brief 243). Site lessons (read through the pack's quotations, read only): `working-with-functions/lesson15.sa.html` (Graphing Parabolas and Cubics, SHA256 `ecd404fe733ac55c409703f59eb475638370c1967bd8462ed514411bcadf9253`, `we-1`, `we-2`) and `working-with-functions/lesson16.sa.html` (Intersections and Simultaneous Equations, SHA256 `6107881f3dbf6aef67f8062e189d685675ee4f90ebfb31194b44693f810ecd2b`, `we-1`). Every number recalculated with SymPy. Route entry: `math-a11-w16` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for the real object (a garden polytunnel end-on, and its bare hoop pipe), coded curves, families, readouts and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a garden, growing food, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `cice1a96a6` (Quadratic and cubic functions): "Choose and apply appropriate techniques to graph a parabola of the form y = ax^2 + bx + c by identifying its x-intercepts if they exist, its y-intercept, its axis of symmetry using x = -b/(2a) and its vertex"
- `cif56630dd` (Quadratic and cubic functions): "Find the equation of a parabola given sufficient graphical features"
- `ci3086d97f` (Quadratic and cubic functions): "Use the fact that two quadratic functions are equal for all values of x if and only if the corresponding coefficients are equal to solve related problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w15's final frame (the polytunnel end-on, its feet at 0 m and 4 m, a "2 m" mark at the top, a dashed axis line, "y = ?"). Sketches y = ax² + bx + c from its x-intercepts, y-intercept, axis x = −b/(2a), vertex and mirror point (site lesson15 `we-1`; `cice1a96a6`); matches each form to the features it shows; works back to an equation from a vertex and a point (lesson15 `we-2`, the same parabola as `we-1`) and from two x-intercepts and a point (the polytunnel) (`cif56630dd`); shows why two quadratics equal for all x have equal coefficients and uses it (the polytunnel's two forms, then lesson16 `we-1`) (`ci3086d97f`). Stops at sketches, equations and equating coefficients. Not taught: intersections and simultaneous equations (w17); inequalities (w18); cubics (w20). Site lesson16 card 05's identity example "a(x + 1)² = ax² + 4x + 1" has no solution (S11-05) and is not used.

## Decisions

- **Anchor: a garden polytunnel, end-on (painted plates, live).** The hoop stands on the ground 4 m wide and is 2 m high in the middle; the gardener wants its equation to bend new hoops to the same shape. With the origin at the left foot, the hoop is y = −½x(x − 4) = −½x² + 2x = −½(x − 2)² + 2. It carries every idea of the lesson: features (feet are x-intercepts, the top is the vertex, the centre line is the axis); working back from two roots and one point (the top); and, when a pipe supplier writes the curve in vertex form, two forms that must agree for every x. A garden growing food, not science. Distinct from every Year 12 Maths anchor (grep of `math-a12-*.md` for polytunnel, greenhouse, hoop, tunnel: no match; i12's garden path and stone footbridge arch carry odd and even symmetry, a different idea) and from w01 to w15. Near context, judged distinct: w25's pack suggests a semicircular road tunnel and an arched garden gate (a semicircle, not a parabola; a road, not a garden structure). The pack's BMX dirt jump and pizza-oven dome were not used (w09 is pizza; a dirt jump's profile is less clearly a parabola).
- **Idealising assumptions (author notes, not learner copy).** (i) A polytunnel hoop is close to a parabola but is often a circular arc; the narration says the gardener's hoops are bent to a parabola ("the same shape"), and the plate is painted to the parabola. (ii) The ground is level; the origin is at the left foot.
- **Simulations (standard item 3).**
  1. **The feature checklist** (scene 2, new `FeatureChecklist` on `StudioPlot`): five chips tick in order (x-intercepts, y-intercept, axis, vertex, mirror point) while each feature lands on the empty axes in its colour; only then does the curve draw through them (draw-as-you-go), and each label stays.
  2. **The family fan** (scenes 4 and 5, new `FamilyFan`): a violet slider sweeps a; every curve of the family (same vertex, or same two roots) redraws live and leaves a faint ghost; a fixed point (teal ring) sits off most curves; as a reaches the value that passes through the point, the curve snaps through it, the ghosts fade, and the readout "a = 1" or "a = −½" locks green. One timeline drives slider, curves and readout.
  3. **Matching columns** (scenes 6, 7, 12, `ExpressionSlot` and `WorkingRows`): both sides of an identity expand into three aligned columns (x², x, constant) that light in turn from the top, each writing its own small equation.
- **Colour roles (fixed for the whole video).** x-intercepts **amber** (as w14); the y-intercept and the constant term **teal** (an output, root ruling 12); the axis of symmetry and x-values **blue** (dashed line for the axis); the vertex an ink ring with its coordinates blue and teal; a and the x² column **violet**, with a dashed outline while unknown; the x column grey-ink; answer green; mistake red, crossed slips only; curves ink; the ground green-grey.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "factor", "x = 0", "−b/(2a)", "substitute back", "mirror", "label every feature", "roots for free", "vertex for free", "c for free", "not one curve yet", "the point picks a", "same curve!", "check", "every x", "at most two zeros", "match from the top", "keep − b", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 55 s.** w15's frame (1); the checklist sketch (2); three forms side by side (3); the vertex fan (4); the polytunnel and its roots fan (5); the two forms and matching columns (6); g01 board, equating coefficients (7); framed memory card (8); question cards (9 to 12); the golf handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 2 (lesson15 `we-1`): sketch y = x² − 4x + 3: (1, 0), (3, 0), (0, 3), axis x = 2, vertex (2, −1), mirror (4, 3); crossed "vertex at x = −2" captioned "−b/(2a): −(−4)/2 = +2". 4 (lesson15 `we-2`): vertex (2, −1) through (0, 3): y = (x − 2)² − 1 (the same curve as 2; no slip, the fan carries the "one point fixes a" idea). 7 (lesson16 `we-1`): a = 2, b = 1, c = 3; crossed "a + c = 4, so c = 2" captioned "keep − b". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Pick the form that fits the facts. One more point fixes a." Key line: "Roots: a(x − p)(x − q). Vertex: a(x − h)² + k. Equal for all x: match term by term." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** In scene 4 the fan of parabolas through the vertex (2, −1) collapses onto one curve as a reaches 1, and that curve lands exactly on scene 2's labelled sketch (its five feature dots light again): working back gives the very curve we sketched. In scene 5 the fanned curves through the feet collapse onto the painted hoop.
- **Site numbers unchanged.** lesson15 `we-1`: (1, 0), (3, 0), (0, 3), x = 2, (2, −1), (4, 3). `we-2`: a = 1, y = (x − 2)² − 1. lesson16 `we-1`: a = 2, b = 1, c = 3.
- **Attempts (pack questions, original).** A1: "A parabola cuts the x-axis at x = −1 and x = 3 and passes through the point (2, 6). Find its equation in the form y = ax² + bx + c." Answer y = −2x² + 4x + 6. Crossed "y = −2(x − 1)(x + 3)". A2: "Find a, b and c if a(x + 2)² + b(x + 2) + c = 3x² + 5x − 1 for all values of x." Answer a = 3, b = −7, c = 1. Crossed "c = −1".
- **Mistake scene:** none separate. The axis sign (2 crossed); one feature thought enough (4, 5 fans); root signs in the brackets (A1 crossed); losing − b in an expansion (7 crossed); reading the constant straight off (A2 crossed); "equal at some x" against "equal for all x" (6, said once).
- **Cause chain taught, in order:** (1) each feature has its own reason (w14, w15), and the mirror point exists because the curve is symmetric about its axis (2); (2) each form shows different features for free, so the given features choose the form (3); (3) a vertex or two roots fix a family, not one curve, because a can be anything; one more point fixes a (4, 5); (4) two quadratics equal for every x have a difference that is zero for every x, but a non-zero quadratic or line has at most two zeros, so every coefficient of the difference is zero (6); (5) so expand, then match x², x and constant terms from the top (7).
- **Entry knowledge (route):** w14 (x-intercepts from factored form, the y-intercept as f(0)); w15 (the axis x = −b/(2a), the vertex, completed-square form).
- **Learner-visible vocabulary (plain meaning at first use):** key features (the intercepts, axis and vertex that fix a sketch, 1); mirror point (the reflection of a known point across the axis, 2); factored form (recalled, 3); coefficient (the number in front of a power of x, 6); identity, said as "equal for all values of x" (6).
- **Handoff (to w17, "How do intersections solve f(x) = k and line-parabola systems?").** Scene 13: the golf bank (`ma11-golf-bank-v1.png`) with the ball (`ma11-golf-ball-v1.png`) at the bottom of a straight rising bank, the ball's dashed coded flight y = x − 0.1x² (ink) and the bank's line y = 0.2x (green-grey), a "?" ring where they meet, chips "Where does it land?" and "Next: where two graphs meet". This is w17's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Hoop: y = a·x(x − 4); at (2, 2): 2 = a(2)(−2) = −4a, a = −½; y = −½x² + 2x = −½(x − 2)² + 2. Heights at x = 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4: 0, 0.875, 1.5, 1.875, 2, 1.875, 1.5, 0.875, 0.
  (b) Supplier form: a(x − 2)² + k = ax² − 4ax + 4a + k; match: a = −½; −4a = 2 (consistent); 4a + k = 0, k = 2.
  (c) Why equal coefficients: if p(x) = q(x) for all x, then p − q is zero for all x; a polynomial of degree at most 2 that is not the zero polynomial has at most two roots; so p − q is the zero polynomial. Learner copy says "a quadratic or a line that isn't zero everywhere has at most two zeros" (a non-zero constant has none).
  (d) Fan values: y = a(x − 2)² − 1 at x = 0 gives 4a − 1: a = ½, 1, 2 give 1, 3, 7.
  (e) Pronunciations: "a, times x minus one, squared, plus b, times x minus one, plus c"; "minus a half x squared plus two x".
  (f) Windows: hoop plot x −0.5 to 4.5, y −0.3 to 2.4, equal scale, matched to the plate's 300 px per metre; sketch plots x −1 to 5, y −2 to 8 (labelled scales).

Main question: *A polytunnel hoop is 4 m wide at the ground and 2 m high in the middle. How do key features build a parabola, and how do we work back to its equation?*
Entry knowledge (w14; w15): intercepts from factored form; the y-intercept as f(0); the axis x = −b/(2a); the vertex; completed-square form.
Stops after: labelled sketches from features; equations from a vertex and a point, or two roots and a point; equal quadratics by matching coefficients. No intersections.
Handoff: math-a11-w17: the golf chip and the rising bank: "Where does it land?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): x-intercepts amber; y-intercept and constants teal; axis and x-values blue; vertex ink ring; a and the x² column violet (dashed while unknown); answer green; mistake red, crossed slips only; curves ink; ground green-grey. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: a hoop to bend
> Here's a garden polytunnel, seen from one end. Its hoop stands on the ground four metres apart, and it's two metres high in the middle. To bend new hoops to the same shape, the gardener wants the curve's equation. Last time we read a vertex from an equation. Now we need both directions. From an equation, which features do we find to sketch it? And from features like these, how do we work back to the **equation**?

Visual: opens on w15's final frame exactly (the polytunnel `ma11-polytunnel-end-v1.png`, about 1,200 px wide at 300 px per metre, on the grass strip `ma12-cricket-grass-strip-v1.png`; amber dots at its feet "0 m" and "4 m"; a teal "2 m" mark at the top; a dashed blue axis line; chips "y = ?" and "Next: build a parabola from its features, then work back to its equation"). On the first sentence the "Next" chip fades and the heading writes on "Features to curve, and back again". On "bend new hoops" the bare hoop plate `ma11-polytunnel-hoop-v1.png` (same scale) slides in small at the top right, hand tag "same shape". On "Last time" a 300 px badge of w15's hammock with "vertex (2, 0.5)" appears for 3 s and fades. On "both directions" two arrows draw between "equation" and "features" chips (44 px), one each way. On "equation" the "y = ?" chip pulses and moves to the top right as the scene question.

### 2. the feature checklist
> Start forwards. Sketch y equals x squared minus four x plus three, showing all its key features. First the x intercepts. It factors to x minus one, times x minus three, so it meets the x axis at one and **three**. Next the y intercept, where x is zero, so y is **three**. Then the axis. Minus b over two a is four over two, so x equals **two**. Put two back in. Four minus eight plus three is minus one, so the vertex is two, minus **one**. One more point comes free. Zero, three is two units left of the axis, so its mirror image, four, three, is two units **right**. a is positive, so it opens upwards. Draw a smooth curve through all five points, and label every **feature**.

Visual: clear change to the feature checklist (simulation 1). Left: empty axes (x −1 to 5, y −2 to 8; 900 × 640 px). Right: task strip, 44 px: "Sketch y = x² − 4x + 3, showing all key features." (site lesson15 `we-1`), and a checklist of five chips: "x-intercepts", "y-intercept", "axis", "vertex", "mirror point". On "three" (first) row "(x − 1)(x − 3) = 0 ⇒ x = 1, 3" (52 px), amber dots at (1, 0) and (3, 0), chip ticks, hand tag "factor". On "three" (second) "x = 0: y = 3" teal dot at (0, 3), hand tag "x = 0". On "two" "x = −(−4)/(2 × 1) = 2" and the dashed blue axis x = 2. On "one" "y = 4 − 8 + 3 = −1", vertex ring at (2, −1), hand tag "substitute back". On "right" a teal arrow mirrors (0, 3) across the axis to (4, 3), hand tag "mirror". On "feature" the curve draws through the five dots and every label stays: "(1, 0)", "(3, 0)", "(0, 3)", "(4, 3)", "vertex (2, −1)", "x = 2", hand tag "label every feature". A red slip "axis x = −2" writes small at the right and is crossed (caption "−(−4)/2 = +2").

### 3. three forms, three sets of features
> Notice that each form of a quadratic hands you different features for free. Factored form, a, times x minus p, times x minus q, gives the x **intercepts**. Completed-square form, a, times x minus h, squared, plus k, gives the **vertex**. And the general form gives the y intercept, the constant c, and the axis, minus b over two **a**. So when you work backwards, choose the form that matches the features you're **given**.

Visual: camera continue; the scene 2 sketch shrinks to the top centre (560 px). Below it three cards side by side (each 560 × 360 px, 44 px type): "y = a(x − p)(x − q)", "y = a(x − h)² + k", "y = ax² + bx + c". On "intercepts" the first card's p and q light amber and two arrows run to the sketch's x-intercept dots, hand tag "roots for free". On "vertex" the second card's (h, k) lights (blue and teal) with an arrow to the vertex ring, hand tag "vertex for free". On "a" the third card's c lights teal (arrow to (0, 3)) and "−b/(2a)" writes under it in blue (arrow to the axis), hand tag "c for free". On "given" each card shows the sketch's own numbers in grey: "(x − 1)(x − 3)", "(x − 2)² − 1", "x² − 4x + 3", hand tag "same curve, three ways".

### 4. working back from a vertex and a point
> Now backwards. A parabola has vertex two, minus one, and passes through zero, three. Find its equation. A vertex is given, so start from completed-square form, y equals a, times x minus two, squared, minus **one**. But that's not one curve yet. Every value of a gives a parabola with that same vertex, some narrow, some wide, some upside **down**. The extra point picks one. Put in zero, three. Three equals a, times four, minus one, so four a is four, and a is **one**. The equation is y equals x minus two, squared, minus one. Expand it, and it's x squared minus four x plus three, the very curve we just **sketched**.

Visual: clear change to the g01 board with the family fan (simulation 2). Task strip, 44 px: "A parabola has vertex (2, −1) and passes through (0, 3). Find its equation." (site lesson15 `we-2`). Givens card: "vertex (2, −1)", "point (0, 3)" (teal ring). Equation strip, 52 px, on "one": "y = a(x − 2)² − 1" with "a" violet, dashed. On "down" the violet slider sweeps a from 3 to −2: curves through the vertex redraw and leave faint ghosts (narrow, wide, upside down), the point (0, 3) sitting off most of them, hand tag "not one curve yet". On "picks one" rows, 52 px: "3 = a(0 − 2)² − 1", "3 = 4a − 1"; on "one" (second bold) "a = 1" and the slider settles at 1; the curve snaps through (0, 3), the ghosts fade, the readout "a = 1" locks green, hand tag "the point picks a". Framed answer (green): "y = (x − 2)² − 1". On "sketched" the row "= x² − 4x + 3" writes and scene 2's five feature dots and labels light again on this curve, hand tag "same curve!".

### 5. the polytunnel: two roots and a point
> Back to the polytunnel. Put the origin at the left foot, with x in metres along the ground. The feet are x intercepts at zero and four, so start from factored form, y equals a x, times x minus **four**. Again, a whole family shares those feet. The top of the hoop, two, two, picks the one we want. Two equals a, times two, times minus two, which is minus four a, so a is minus a **half**. The hoop is y equals minus a half x, times x minus four, or minus a half x squared plus two **x**. Check another point. At one metre along, that's minus a half plus two, so one and a half metres high, and the painted hoop **agrees**.

Visual: clear change back to the painted polytunnel (about 1,200 px wide, solid) with coded axes along the ground (x "metres along") and up the left foot (y "height (m)"); rows at the right third. On "four" the equation strip "y = ax(x − 4)" with "a" violet dashed, amber dots at the feet. The fan runs over the plate: curves through (0, 0) and (4, 0) sweep as a goes from −1.5 to −0.2, ghosts left, the top point (2, 2) in a teal ring. Rows: "2 = a(2)(2 − 4)", "2 = −4a"; on "half" "a = −½", the curve snaps onto the painted hoop and the ghosts fade, readout "a = −½" green. On "x" framed answer (green): "y = −½x(x − 4) = −½x² + 2x". On "Check another point" a blue tick at x = 1 drops a teal bar to the curve, row "y = −½ + 2 = 1.5"; on "agrees" a tick on the plate's hoop at 1.5 m, hand tag "check".

### 6. equal for every x
> Here's a twist. The pipe supplier writes the curve as a, times x minus two, squared, plus k. To be the same hoop, it must match ours for every value of x, not just at a few points. Why does that force the numbers? If two quadratics are equal for every x, their difference is zero for every x. But a quadratic or a line that isn't zero everywhere has at most two **zeros**. This difference is zero at every x, which is far more than two zeros. So it can't really be a quadratic or a line at all. Every coefficient in it must be **zero**, and that means the matching coefficients are equal. Expand the supplier's form. a x squared, minus four a x, plus four a plus k. The x squared terms give a equals minus a **half**. The x terms agree, minus four times minus a half is two. And the constants give four a plus k equals zero, so k is **two**. That's the vertex form, with the top two metres up.

Visual: clear change. Top: the bare hoop plate (500 px) with a small chip "supplier: y = a(x − 2)² + k" (a violet dashed, k teal dashed) beside "ours: y = −½x² + 2x". Centre: a chip, 44 px, "equal for every x". On "Why does that force the numbers?" a small plot shows a difference curve that is zero at two points only (two amber dots), hand tag "at most two zeros"; on "zeros" the two amber dots pulse with a count "2". While "This difference is zero at every x" is spoken, amber dots fill in along the whole axis and the count runs past 2 to "every x" (red ring on "more than two"). On "zero" the curve flattens onto the axis and lights as a flat line with "zero everywhere ⇒ every coefficient 0", hand tag "so equate coefficients". Then the matching columns (simulation 3), full width, 52 px: left "ax² − 4ax + (4a + k)", right "−½x² + 2x + 0", aligned under column heads "x²" (violet), "x" (grey-ink), "constant" (teal). On "half" the x² column lights: "a = −½". The x column lights: "−4a = 2 ✓" (with a = −½), hand tag "check". On "two" the constant column lights: "4a + k = 0 ⇒ k = 2". Framed answer (green): "y = −½(x − 2)² + 2", hand tag "top: 2 m".

### 7. worked example: equating coefficients
> Here's the classic exam version. Find a, b and c if a, times x minus one, squared, plus b, times x minus one, plus c, equals two x squared minus three x plus four, for all values of x. Expand the left. a x squared, plus b minus two a, times x, plus a minus b plus **c**. Match from the top. The x squared terms give a equals **two**. The x terms give b minus two a equals minus three, so b is **one**. The constants give a minus b plus c equals four, so two minus one plus c is four, and c is **three**. The usual slip is losing the minus b from the constant, and getting c equals two. Expand slowly, and keep every **term**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find a, b and c if a(x − 1)² + b(x − 1) + c = 2x² − 3x + 4 for all values of x." (site lesson16 `we-1`), with "for all values of x" underlined, hand tag "every x". Rows, 52 px: "a(x² − 2x + 1) + bx − b + c"; on "c" "= ax² + (b − 2a)x + (a − b + c)" with the three groups underlined violet, grey-ink and teal. The matching columns against "2x² − 3x + 4": on "two" "a = 2"; on "one" "b − 2a = −3 ⇒ b = 1"; on "three" "a − b + c = 4 ⇒ 2 − 1 + c = 4 ⇒ c = 3", hand tag "match from the top". Framed answer (green): "a = 2, b = 1, c = 3". On "term" a red slip "a + c = 4, so c = 2" writes and is crossed (caption "keep − b").

### 8. memory aid
> Here's a way to remember it. Pick the form that fits the facts, then let one more point fix a. Roots, use factored form. A vertex, use completed-square form. And when two quadratics are equal for all x, match them term by **term**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the fan collapsing onto one curve through its point (a 3 s loop). Main line, hand font 56 px: "Pick the form that fits the facts. One more point fixes a." On "term" the key line, 40 px: "Roots: a(x − p)(x − q). Vertex: a(x − h)² + k. Equal for all x: match term by term." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A parabola cuts the x axis at x equals minus one and x equals three, and passes through the point two, six. Find its equation in the form y equals a x squared plus b x plus c. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A parabola cuts the x-axis at x = −1 and x = 3 and passes through the point (2, 6). Find its equation in the form y = ax² + bx + c." The full question stays on screen. Picture slot: axes (x −2 to 4, y −2 to 9) with amber dots at (−1, 0) and (3, 0) and a teal ring at (2, 6), as the question states; no curve. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The roots give y equals a, times x plus one, times x minus **three**. Put in two, six. Six equals a, times three, times minus one, so a is minus **two**. Expanded, y equals minus two x squared plus four x plus **six**. Writing x minus one and x plus three is the classic slip. A root at minus one gives the bracket x plus **one**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "roots −1, 3", "point (2, 6)" (underlined as used). Rows, 52 px: on "three" "y = a(x + 1)(x − 3)" (a violet dashed); "6 = a(3)(−1) = −3a"; on "two" "a = −2"; on "six" "y = −2(x + 1)(x − 3) = −2x² + 4x + 6". Framed answer (green): "y = −2x² + 4x + 6"; the picture draws the downward curve through the three marks. On "one" a red slip "y = −2(x − 1)(x + 3)" writes and is crossed (hand caption "root −1: bracket (x + 1)"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find a, b and c if a, times x plus two, squared, plus b, times x plus two, plus c, equals three x squared plus five x minus one, for all values of x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find a, b and c if a(x + 2)² + b(x + 2) + c = 3x² + 5x − 1 for all values of x." The full question stays on screen. Picture slot: three empty matching columns headed "x²", "x", "constant" (no entries). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Expand the left. a x squared, plus four a plus b, times x, plus four a plus two b plus **c**. The x squared terms give a equals **three**. Then twelve plus b is five, so b is minus **seven**. And twelve minus fourteen plus c is minus one, so c is **one**. Saying c is minus one, just by reading off the constant, is wrong. The constant on the left is four a plus two b plus **c**.

Visual: the card shrinks to the top. `GivensStrip`: "for all values of x" underlined. On "c" (first) row "ax² + (4a + b)x + (4a + 2b + c)". The picture's matching columns fill: on "three" "a = 3"; on "seven" "4(3) + b = 5 ⇒ b = −7"; on "one" "4(3) + 2(−7) + c = −1 ⇒ c = 1". Framed answer (green): "a = 3, b = −7, c = 1". On "c" (last) a red slip "c = −1" writes and is crossed (hand caption "constant = 4a + 2b + c"). Hold about 1 s.

### 13. handoff
> So features build a sketch, and the right form plus one more point builds an equation. Next, two graphs at once. Here's a golf chip, heading up a straight, rising bank. The ball's flight is a parabola, and the bank is a line. Where does the ball land? It's where the two graphs **meet**.

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to the golf bank plate `ma11-golf-bank-v1.png` (about 1,400 px wide, solid) with the ball `ma11-golf-ball-v1.png` at the foot of the bank; the ball's flight draws as a dashed ink curve y = x − 0.1x² and the bank as a green-grey line y = 0.2x, with axes (x "metres along", y "height (m)"). On "meet" a "?" ring where the curve comes down onto the bank (unlabelled). Chips "Where does it land?" and "Next: where two graphs meet". Hold about 2 s. This is w17's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Sketch: x-intercepts, y-intercept, axis, vertex, mirror point.
- Axis x = −b/(2a). Label every feature.
- Roots p, q given: y = a(x − p)(x − q); a point gives a.
- Vertex (h, k) given: y = a(x − h)² + k; a point gives a.
- Equal for all x: match x², x and constant coefficients.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Pick the form that fits the facts. One more point fixes a.* Key: *Roots: a(x − p)(x − q). Vertex: a(x − h)² + k. Equal for all x: match term by term.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the golf bank, the ball, the dashed flight, the bank line, the "?" ring and both chips). This is the final frame and w17's opening frame.

## Teaching checks

- **Does it explain causes?** Why the mirror point: the curve is symmetric about its axis (2). Why each form gives its features: roots make a bracket zero, the vertex makes the square zero, and x = 0 leaves c (3; w14, w15). Why one more point: a vertex or two roots fit a whole family (4, 5). Why matching coefficients: the difference would otherwise be a non-zero quadratic or line with zeros everywhere, but those have at most two zeros (6). Why match from the top: the top coefficient is found alone, then feeds the next (7).
- **Misconceptions addressed:** the axis sign (2 crossed); one feature thought enough (4, 5); root signs (A1 crossed); losing − b (7 crossed); the constant read off directly (A2 crossed); "equal at some x" against "for all x" (6).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted polytunnel from the first frame, returning in 5 and 6; 2 a new stage every 35 to 55 s; 3 the feature checklist, the family fan (twice), the matching columns; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 2, 4 and 7 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the fan collapsing onto scene 2's labelled curve, and onto the painted hoop.
- **One idea at a time:** forwards (2), forms (3), back from a vertex (4), back from roots (5), why coefficients match (6), using it (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; each card with a picture slot showing only what the question states; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 28 s.
- **Avoided double teaching:** the axis formula and completing the square (w15), factored-form intercepts (w14) are used, not re-taught.
- **Syllabus coverage:** `cice1a96a6` (2, 3; key notes 1, 2); `cif56630dd` (4, 5; A1; key notes 3, 4); `ci3086d97f` (6, 7; A2; key note 5).
- **Out of scope by design:** intersections (w17); inequalities (w18); cubics (w20).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A parabola cuts the x-axis at x = −1 and x = 3 and passes through the point (2, 6). Find its equation in the form y = ax² + bx + c."
Model answer: y = a(x + 1)(x − 3). At (2, 6): 6 = a(3)(−1) = −3a, so a = −2. y = −2(x + 1)(x − 3) = −2x² + 4x + 6. Classic mistake (crossed): "y = −2(x − 1)(x + 3)".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "Find a, b and c if a(x + 2)² + b(x + 2) + c = 3x² + 5x − 1 for all values of x."
Model answer: the left side is ax² + (4a + b)x + (4a + 2b + c). Equating coefficients: x²: a = 3; x: 4a + b = 5, so b = −7; constants: 4a + 2b + c = −1, so 12 − 14 + c = −1 and c = 1. Classic mistake (crossed): "c = −1".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Site lesson15 `we-1` | x² − 4x + 3 = (x − 1)(x − 3); (1, 0), (3, 0), (0, 3); axis x = 2; vertex (2, −1); mirror (4, 3); crossed x = −2 | 2, 3 |
| Site lesson15 `we-2` | vertex (2, −1), (0, 3): 3 = 4a − 1, a = 1; y = (x − 2)² − 1 = x² − 4x + 3 | 4 |
| Fan | a(x − 2)² − 1 at x = 0: a = ½, 1, 2 give 1, 3, 7 | 4 |
| Polytunnel | y = ax(x − 4); 2 = −4a; a = −½; y = −½x² + 2x = −½(x − 2)² + 2; y(1) = 1.5 | 1, 5, 6 |
| Supplier form | a = −½; −4a = 2; 4a + k = 0, k = 2 | 6 |
| Site lesson16 `we-1` | ax² + (b − 2a)x + (a − b + c) = 2x² − 3x + 4: a = 2, b = 1, c = 3; crossed c = 2 | 7 |
| A1 | roots −1, 3, (2, 6): a = −2; y = −2x² + 4x + 6 | 9, 10 |
| A2 | ax² + (4a + b)x + (4a + 2b + c) = 3x² + 5x − 1: a = 3, b = −7, c = 1; crossed c = −1 | 11, 12 |
| Handoff | golf flight y = x − 0.1x²; bank y = 0.2x | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- (x − 1)(x − 3) = x² − 4x + 3; value at 0 is 3; at 2 is −1; at 4 is 3; −(−4)/(2 × 1) = 2.
- a(0 − 2)² − 1 = 3 gives a = 1; (x − 2)² − 1 = x² − 4x + 3; at x = 0, a = ½, 1, 2 give 1, 3, 7.
- a(2)(2 − 4) = 2 gives a = −½; −½x(x − 4) = −½x² + 2x = −½(x − 2)² + 2; value at 1 and 3 is 1.5; profile heights 0, 0.875, 1.5, 1.875, 2 at x = 0, 0.5, 1, 1.5, 2.
- a(x − 2)² + k ≡ −½x² + 2x gives a = −½, k = 2.
- a(x − 1)² + b(x − 1) + c ≡ 2x² − 3x + 4 gives a = 2, b = 1, c = 3.
- a(x + 1)(x − 3) through (2, 6) gives a = −2; −2(x + 1)(x − 3) = −2x² + 4x + 6.
- a(x + 2)² + b(x + 2) + c ≡ 3x² + 5x − 1 gives a = 3, b = −7, c = 1.
- Site card 05 (S11-05, not used): a(x + 1)² ≡ ax² + 4x + 1 has no solution; with + 2 it gives a = 2.

## Memory aid check

- **"Pick the form that fits the facts. One more point fixes a."** Original. Meaning, as said in scene 8: given two x-intercepts, start from y = a(x − p)(x − q); given the vertex, from y = a(x − h)² + k; either way one more point on the curve determines a. With "match term by term" for identities. Assumptions checked: "sufficient features" means the extra point is not one of the given roots or the vertex (otherwise a stays free); a ≠ 0. It helps a new case: vertex (−1, 4) through (1, 0) gives 0 = 4a + 4, a = −1, y = −(x + 1)² + 4. Introduced after the causes in 4, 5 and 6.
- **Considered, not used:** "Two roots, one point" (true but drops the vertex case).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,813 characters**, 14 scene headings. Characters per scene (1 to 14): 412, 654, 407, 604, 606, 877, 605, 227, 208, 314, 181, 360, 283, 75.

At 13.3 characters per second the speech is about 437 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the checklist's five features (2), the three cards (3), the two fans collapsing (4, 5) and the matching columns (6), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 524 s (8 min 44 s)**, inside the 5,500 to 6,800 character band and about 46 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 3's last sentence (keep the grey numbers under the cards); scene 5's check sentence (keep the tick on the plate). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w16` (route math-a11-w16). Explainer folder `src/explainer/lessons/math-a11-w16`; build inputs in `docs/production/claude-pm/lessons/math-a11-w16/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-hoop, feature-checklist, three-forms, back-from-vertex, tunnel-from-roots, equal-for-every-x, worked-equate, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 33 s | 1 | w15's frame; the polytunnel and its bare hoop |
| 33 to 89 s | 2 | The feature checklist builds the sketch |
| 89 to 122 s | 3 | Three forms, three sets of features |
| 122 to 170 s | 4 | g01 board with the vertex fan |
| 170 to 220 s | 5 | The polytunnel: the roots fan collapses onto the hoop |
| 220 to 280 s | 6 | Why coefficients match; the matching columns |
| 280 to 331 s | 7 | g01 board: equating coefficients |
| 331 to 350 s | 8 | Framed memory card |
| 350 to 445 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 445 to 470 s | 13 | The golf bank with "Where does it land?" |
| 470 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w15's last frame continues into scene 1 (identical frame); 1 to 2 clear change; 2 to 3 camera continue (the sketch shrinks); 3 to 4 clear change; 4 to 5 clear change back to the plate; 5 to 6 clear change; 6 to 7 clear change (new case); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w16-learning-review.md`, `science_check` = `checks/m-a11w16-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-cricket-grass-strip-v1.png` (reused as the ground); `ma12-garden-cut-fill-v1.png` (i12's garden path, a different idea, not used); no polytunnel, hoop or golf plate exists.

Need (painted, new; see the Codex asset brief): `ma11-polytunnel-end-v1.png` (also w15's handoff), `ma11-polytunnel-hoop-v1.png`. w17's `ma11-golf-bank-v1.png` and `ma11-golf-ball-v1.png` are commissioned in w17's brief and must be painted before this video's build (scene 13). Reused: `maths/ma12-cricket-grass-strip-v1.png`.

Coded (studio kit): every curve, axis, dot, ring, dashed axis, fan, slider, column, working board, question card, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator` (draw-as-you-go), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`; `ExpressionSlot` (algebra.tsx) for the columns.

Additions (new kit-needs row w16):
1. **`FeatureChecklist`** (new; reused by w20): an ordered list of features `{label, role, draw()}` that tick and land one at a time on a `StudioPlot`; the curve draws only after the last one; labels persist. Check: for y = x² − 4x + 3 the five features are (1, 0), (3, 0), (0, 3), x = 2, (2, −1), (4, 3).
2. **`FamilyFan`** (new; reused by w20 and w22): `family(a, x)`, `aRange`, `targetPoint`, `aLock`; draws the live curve and fading ghosts, and locks when the family passes through `targetPoint` (computed a, not keyed by time). Checks: vertex family a(x − 2)² − 1 through (0, 3) locks at a = 1; root family ax(x − 4) through (2, 2) locks at a = −½.

## Codex asset brief (Maths A11 W16, a garden polytunnel; also w15's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w16.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and **before the w15 build** (w15's final frame uses plate 1). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; no text, logos, people, hands, faces, pets, sky, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

Both plates share one scale, **300 px per metre**, side-on to the end of the tunnel, 1500 × 900 px, with the ground line straight at y = 780 px. Take x = 0 at the left foot of the hoop (at x = 150 px) and heights above the ground line. Paint the **outer edge of the hoop** to these heights (within 2 per cent of the 4 m span):

| x (m) | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| height (m) | 0.000 | 0.875 | 1.500 | 1.875 | 2.000 | 1.875 | 1.500 | 0.875 | 0.000 |

1. `ma11-polytunnel-end-v1.png`: a small garden polytunnel seen from one end, its clear plastic cover stretched over the hoop, a closed zip door panel, a few seedling rows visible through the plastic, the hoop's feet sunk into the soil at exactly 0 m and 4 m.
2. `ma11-polytunnel-hoop-v1.png`: the same hoop as a single bare galvanised steel pipe, no cover, feet in the soil at the same points.

Report in one sidecar `ma11-polytunnel-v1.json`, in file pixels: the ground line y, both foot points, and the measured outer-edge heights at the nine x values for each plate. If a plate misses the table by more than 2 per cent of the span, the builder fits the coded curve to the measured points; the plate is never warped. Report inspection on the paper background (`#f6f1e7`) at 1,200 px wide, the alpha checks, and each plate with the model curve overlaid.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", the hoop profile table, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "each form hands you different features for free" (3); "a quadratic or a line that isn't zero everywhere has at most two zeros" (6); "two quadratics equal for every x have equal coefficients" (6); "one more point fixes a" (4, 5, 8; a point other than the given features); the model language for the hoop (1, 5).
4. Confirm the site's lesson15 `we-1`, `we-2` and lesson16 `we-1` keep their answers, and that card 05's inconsistent identity (S11-05) is not used.
5. Confirm both attempt questions carry every demand, and that each picture shows only what the question states.
6. Confirm the opening matches w15's final frame and scene 13's frame is w17's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, pets, text or logos.

## YouTube metadata (draft)

Title: Sketching Parabolas and Finding Their Equations | Year 11 Maths Advanced

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson15.sa.html

A polytunnel hoop is four metres wide at the ground and two metres high. What's its equation? Sketch a parabola from its features (x-intercepts, y-intercept, axis of symmetry x = −b/(2a), vertex and the mirror point), see which form of a quadratic shows which features, and work backwards from a vertex and a point, or two roots and a point. Then find out why two quadratics that are equal for every x must have equal coefficients, and use it to find unknown constants. A memory aid: pick the form that fits the facts, and one more point fixes a. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Choose and apply appropriate techniques to graph a parabola of the form y = ax^2 + bx + c by identifying its x-intercepts if they exist, its y-intercept, its axis of symmetry using x = -b/(2a) and its vertex"
"Find the equation of a parabola given sufficient graphical features"
"Use the fact that two quadratic functions are equal for all values of x if and only if the corresponding coefficients are equal to solve related problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: zeros and intercepts; completing the square for the vertex and axis. Next: Intersections: solving f(x) = k and line-parabola systems.

#Year11Maths #MathsAdvanced #Parabolas #HSCScience

## Open decisions

- **1. Site link (root).** The description links lesson15 (the sketching lesson); equating coefficients comes from lesson16, which w17 also links.
- **2. Site finding S11-05 (root).** Already logged in `../site-corrections-maths-a11.md`; this design avoids the example.
- **3. Scene 6's reason (learning review).** "At most two zeros" is the cause given for matching coefficients; the reviewer checks it is followed at speed by a student starting Year 11, or keeps only the flat-line picture with one sentence.
- **4. Hoop shape (Codex).** Real polytunnel hoops are often circular arcs; the plate is painted to the parabola table so the model and the picture agree.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w16-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w14 and w15; check that the checklist order is the reason order, not a ritual; that the fan makes "one more point" visible; that the "same curve!" moment lands; that scene 6's reason is not skipped), then the Codex maths check and error check, then voicing and a build to grade A.
- The fan and the checklist carry the explanation; judge them at playback speed, not from stills. Every curve, dot and readout must be computed from the same coefficients as the displayed equation.
