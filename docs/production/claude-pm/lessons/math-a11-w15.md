# Maths A11 W15: How does completing the square reveal the vertex and axis of a parabola? Vertex form, a not 1, maximum or minimum, and x = −b/(2a) (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w15/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 6,184 characters, 15 scene headings, about 554 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w15-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 7 and key note 5 (substitution step missing): **declined.** Scene 7a already teaches it: "That's only half the answer. Put x equals two back in. Three times four, minus twenty-four, plus seven, is minus five.", with the row "y = 3(2)² − 12(2) + 7 = −5", the tag "substitute back" and the crossed slip "vertex: x = 2" ("half the answer: find y too"). Key note 5 therefore records a step the narration shows. Adding the hammock substitution to scene 7 would teach the same step twice in a row and add about 8 s.
2. Should fix, scene 2 (taught twice, after w09): **accepted**, reviewer's wording ("You met this fact when finding a range."); a grey tag "met before: finding a range" with w09's row "x² − 4x + 5 = (x − 2)² + 1 ≥ 1" for about 3 s.

Narration now 6,184 characters by script, about 554 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: fifteenth video of the Year 11 Mathematics Advanced course (outline playlist order 15), after w14 (zeros, intercepts and the discriminant) and before w16 (sketching a parabola from its features, and its equation from features). Pre-design pack: `../pre-design/maths-a11/math-a11-w15.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson14.sa.html` (Completing the Square, Axis and Vertex, SHA256 `86dacf75a1e2c039579d30958d110c06b57eda07f674347933ffcc0d51ae4d0d`, `we-1`, `we-2`, `we-3`). Every number recalculated with SymPy. Route entry: `math-a11-w15` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for real objects (the light hammock from w14, reused; a park drinking fountain, new), coded curves, sliders, readouts and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchors (a backyard and a park, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci9c3bd164` (Quadratic and cubic functions): "Show by completing the square on the general quadratic y = ax^2 + bx + c that the axis of symmetry is x = -b/(2a) where a, b and c are constants"
- `ci9f2c04cb` (Quadratic and cubic functions): "Identify the axis of symmetry and vertex of a parabola by completing the square on its quadratic function"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w14's final frame (the light hammock, its curve h = ¼x² − x + 1.5, a "?" at its lowest point and a dashed "axis?" line). Reads the vertex (h, k) and the axis x = h from y = a(x − h)² + k, because a square is never negative (`ci9f2c04cb`); completes the square for a = 1 (site `we-1`, recalling w04's method) and for a ≠ 1 (the hammock, then site `we-2`); a < 0 gives a maximum (a park drinking fountain); completes the square on y = ax² + bx + c to show the axis is x = −b/(2a) (`ci9c3bd164`), then uses the formula with substitution for the vertex (site `we-3`). Stops at the vertex, the axis, maximum or minimum and the range that follows. Not taught: full labelled sketches and equations from features (w16); intersections (w17); quadratic inequalities (w18); best values in context (w19). Site copy's link of the sign reversal to "circles and translations" is not used (pack section 8: those come later).

## Decisions

- **Anchor: the light hammock from w14 (painted plate, reused, live), with a park drinking fountain for the maximum case (painted plate, new).** The opening is fixed by w14's handoff. The hammock's completed square, h = ¼(x − 2)² + ½, answers w14's "?" exactly: lowest point (2, 0.5), half a metre above the grass, axis x = 2, the same lowest height w14 showed for the light state. The fountain's water jet is the a < 0 case: h = −0.1x² + 2x + 90 = −0.1(x − 10)² + 100 (centimetres), a maximum of 100 cm at 10 cm along. A park bubbler is everyday and public, not science; distinct from every Year 12 Maths anchor (no fountain, jet or water arc; grep of `math-a12-*.md`, 16 Nov), from w01 to w14, and from the w24 to w31 pack suggestions (sprinkler circle, speaker range, dartboard, tunnel, gate, protractor, cards, sunglasses, domino, voucher, travel money, power-ups, e-bike, electricity tiers, pool entry, postage, toll gantry, bus map, golf par, rail trail, bank balance, train, jelly beans, flour). The pack's wok was not used (a > 0 duplicates the hammock).
- **Idealising assumptions (author notes, not learner copy).** (i) The hammock is a parabola model (w14 already said so). (ii) A water jet is close to a parabola over a short arc; the narration says "modelled by". (iii) The jet leaves at 90 cm and lands back at 90 cm, 20 cm along, in the bowl.
- **Simulations (standard item 3).**
  1. **The square readout** (scenes 2 and 4, new `SquareReadout` on `ParameterSlider`, `StudioPlot` and `LiveReadoutBoard`): a blue rider moves along the x axis; an amber bar beside the plot shows (x − h)² growing and shrinking, reaching zero exactly at x = h; a teal readout shows y = a × bar + k, and the rider's point on the curve sits at that height. When the bar is zero, the point lands on the vertex and the readout locks to k. Mirror pairs (scene 2): two blue ticks at h − d and h + d light together with equal amber bars and equal teal heights. One timeline drives the rider, the bar, the readout and the dot, so they cannot disagree.
  2. **Halve, square, balance** (scenes 3 and 4, `AlgebraTileGrid` in its `CompleteSquareTiles` mode from w04): the x² tile and the split x strips form an incomplete square; the missing corner fills amber ("+ 9") and an equal grey "− 9" appears outside, so the value is unchanged.
  3. **The fountain's top** (scene 6): the same readout with a = −0.1; the amber bar is multiplied by a negative, so the teal height drops as the bar grows; the rider tops out at (10, 100).
- **Colour roles (fixed for the whole video).** Inputs blue (`MATH_BLUE`): x, h, the axis x = h, the rider; outputs teal (`MATH_TEAL`): y, heights, k, the vertex's height (root ruling 12); the squared bracket (x − h)² **amber**; a and its sign **violet** (`MATH_GRADIENT`); answer green; mistake red, crossed slips only; curves ink; the grass line green-grey ("grass: h = 0").
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "never negative", "zero here", "lowest", "same height", "axis", "opposite sign", "halve, square", "+ 9 − 9: no change", "x terms only", "× ¼ too", "× 2 too", "takes height away", "highest", "same answer", "half the answer", "substitute back", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 50 s.** w14's frame and the mirror guess (1); the square readout on a clean plot (2); g01 board with tiles (3); the hammock answered (4); g01 board, a = 2 (5); the fountain (6); the general derivation, full width (7); g01 board with the formula (7a); framed memory card (8); question cards (9 to 12); the polytunnel handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 3 (`we-1`): y = x² − 6x + 11 = (x − 3)² + 2, vertex (3, 2), axis x = 3, minimum; no slip (its reading slip is in scene 2); 5 (`we-2`): 2x² + 8x + 3 = 2(x + 2)² − 5, vertex (−2, −5); crossed "2(x + 2)² − 4 + 3 = 2(x + 2)² − 1" captioned "× 2 reaches the − 4 too". 7a (`we-3`): vertex of 3x² − 12x + 7 by the formula, (2, −5), minimum; crossed "vertex: x = 2" captioned "half the answer: find y too".
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Bracket zero, vertex found." Key line: "y = a(x − h)² + k: vertex (h, k), axis x = h. a > 0 lowest, a < 0 highest." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** In scene 2 the amber bar shrinks to nothing at exactly the moment the rider's point drops onto the vertex, and two mirror ticks light with equal bars, so "lowest when the square is zero" and "symmetric" are seen together. In scene 4 the same readout on the hammock locks at 0.5 m, matching the painted hammock's lowest point; in scene 6 the bar grows while the jet's height falls.
- **Site numbers unchanged.** `we-1`: (3, 2), x = 3, minimum. `we-2`: 2(x + 2)² − 5, (−2, −5). `we-3`: x = 2, (2, −5), minimum.
- **Attempts (pack questions, original).** A1: "Write y = x² + 6x + 4 in completed-square form, and state its vertex and axis of symmetry." Answer (x + 3)² − 5, vertex (−3, −5), axis x = −3. Crossed "(3, −5)". A2: "Write y = −2x² + 12x − 7 in completed-square form. State its vertex, whether the vertex is a maximum or a minimum, and the range." Answer −2(x − 3)² + 11, vertex (3, 11), maximum, range y ≤ 11. Crossed "−2(x − 3)² − 16".
- **Mistake scene:** none separate. The sign inside the bracket (2 tag; A1 crossed); a not reaching the subtracted square (4 tag; 5 crossed; A2 crossed); stopping at the axis value (7a crossed); calling every vertex a minimum (6, A2).
- **Cause chain taught, in order:** (1) a square is never negative and is zero only when its bracket is zero (2); (2) so a(x − h)² + k with a > 0 is least, k, at x = h, and equal steps either side give equal heights, so x = h is the axis (2); (3) adding and subtracting the same number keeps the value while making a perfect square (3); (4) when a ≠ 1, a multiplies the whole bracket, including the subtracted square (4, 5); (5) with a < 0 the squared part only takes height away, so the vertex is the highest point (6); (6) the same steps on ax² + bx + c put the zero of the bracket at x = −b/(2a) (7); (7) the axis gives only the vertex's x; substitution gives its y (7a).
- **Entry knowledge (route):** w14 (the hammock, the sign of a); w04 (completing the square to solve a monic quadratic). Range notation from w09 is used once (A2).
- **Learner-visible vocabulary (plain meaning at first use):** vertex (the turning point, the lowest or highest point, 2); axis of symmetry (the vertical line the parabola is mirror-symmetric about, 2); completed-square form (a quadratic written as a(x − h)² + k, 3); maximum, minimum (the greatest or least value, 6).
- **Handoff (to w16, "How do key features build a parabola, and how do we work back to its equation?").** Scene 13: the polytunnel end-on (`ma11-polytunnel-end-v1.png`) on the grass strip, coded ground axis, two amber dots at its feet labelled "0 m" and "4 m", a teal mark "2 m" at the top of the hoop, a dashed blue axis line, and the chip "y = ?" with "Next: build a parabola from its features, then work back to its equation". This is w16's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Hammock: ¼x² − x + 1.5 = ¼(x² − 4x) + 1.5 = ¼[(x − 2)² − 4] + 1.5 = ¼(x − 2)² − 1 + 1.5 = ¼(x − 2)² + ½. Heights at x = 0, 1, 2, 3, 4: 1.5, 0.75, 0.5, 0.75, 1.5.
  (b) Fountain: −0.1x² + 2x + 90 = −0.1(x² − 20x) + 90 = −0.1[(x − 10)² − 100] + 90 = −0.1(x − 10)² + 100. h(0) = h(20) = 90; h(5) = 97.5.
  (c) General: ax² + bx + c = a[x² + (b/a)x] + c = a(x + b/(2a))² + c − b²/(4a), a ≠ 0. The vertex's height c − b²/(4a) is shown on screen once and not required (`ci9c3bd164` asks for the axis).
  (d) Pronunciations: "a quarter x squared", "minus zero point one x squared" (match the course's decimal choice, w10), "minus b over two a", "x minus three, all squared", "x plus three, squared".
  (e) Windows: hammock plot x −0.5 to 4.5, y −0.3 to 2.0, equal scale, matched to the plate's 300 px per metre; square-readout plot x −1 to 7, y −1 to 10; fountain plot x 0 to 20 cm, y 80 to 105 cm (vertical axis starts at 80, broken-axis mark shown); worked-example plots x −5 to 5, y −7 to 12 (labelled scales).

Main question: *Where exactly is the hammock's lowest point, and what line is it symmetric about? How does completing the square reveal the vertex and axis of a parabola?*
Entry knowledge (w14; w04): the hammock's equation and the sign of a; completing the square.
Stops after: vertex and axis from a(x − h)² + k; completing the square for a = 1 and a ≠ 1; maximum or minimum from the sign of a; x = −b/(2a) shown by completing the square and used with substitution. No full sketches.
Handoff: math-a11-w16: the polytunnel hoop, 4 m wide and 2 m high: "y = ?".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): inputs and the axis blue; outputs and heights teal; the squared bracket amber; a violet; answer green; mistake red, crossed slips only; curves ink; grass green-grey. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: the lowest point
> Here's the light hammock again. Its height, x metres along, is a quarter x squared, minus x, plus one and a half. But where exactly is its lowest point, and what line is it symmetric **about**? We could guess. At one metre and at three metres the heights match, so the middle looks like two. But a guess isn't a reason, and most curves won't have friendly numbers. So how does completing the square reveal the vertex and axis of a **parabola**?

Visual: opens on w14's final frame exactly (the light hammock `ma11-hammock-frame-high-v1.png` on the grass strip `ma12-cricket-grass-strip-v1.png`, about 1,100 px wide, its coded curve h = ¼x² − x + 1.5 with axes along the grass and up the left rope end, the "?" ring at the lowest point, the dashed vertical "axis?" line, chips "Next: the lowest point and the line of symmetry" and "?"). On the first sentence the "Next" chip fades, the heading writes on "Where is the lowest point?", and the equation strip writes at the top, 52 px: "h = ¼x² − x + 1.5". On "about" the "?" ring pulses. On "We could guess" two blue ticks at x = 1 and x = 3 drop teal height bars to the curve, each labelled "0.75 m", hand tag "same height". On "looks like two" the dashed line slides to x = 2 with a pencil "2?" tag. On "a guess isn't a reason" the "2?" tag is struck through lightly in grey (not red: it is not wrong, only unproved). On "parabola" the chip "vertex? axis?" moves to the top right as the scene question.

### 2. a square is never negative
> Start with a curve in a special form, y equals x minus three, all squared, plus two. You met this fact when finding a range. A square is never negative. So x minus three, squared, is zero or more, and it's zero only when x is **three**. That means y is never less than two, and it equals two exactly at x equals three. So the lowest point, called the vertex, is three, **two**. Now step the same distance either side of three. At two and at four, the bracket squares to one either way, so the heights match. The curve is mirror-symmetric about the line x equals three, its axis of **symmetry**. Watch the sign, though. In x plus four, squared, plus one, the bracket is zero when x is minus four, so that vertex is minus four, **one**.

Visual: clear change to the square readout (simulation 1) on a clean plot (x −1 to 7, y −1 to 10; 900 × 620 px) at the left; `LiveReadoutBoard` at the right (52 px): "x" (blue), "(x − 3)²" (amber bar and number), "y = (x − 3)² + 2" (teal). Equation strip: "y = (x − 3)² + 2" with "(x − 3)²" boxed amber and "3" blue, "2" teal. On "You met this fact" a chip "a square is never negative" (44 px) writes with a small grey tag "met before: finding a range" and, under it, w09's range row "x² − 4x + 5 = (x − 2)² + 1 ≥ 1" at 30 px grey for about 3 s, hand tag "never negative". The blue rider sweeps from x = 0 to x = 6 and back; the amber bar shrinks and grows. On "three" the rider stops at 3, the bar reaches zero, hand tag "zero here". The point drops onto (3, 2); on "two" a teal ring "vertex (3, 2)", hand tag "lowest". On "Now step" two blue ticks at 2 and 4 light together; both amber bars read "1", both teal heights "3", and a second pair at 1 and 5 reads "4" and "6", hand tag "same height". On "symmetry" the dashed blue line x = 3 draws, labelled "axis x = 3". On "Watch the sign" a small second strip "y = (x + 4)² + 1" writes beside the first with "+ 4" circled; on "one" a small inset plot shows its vertex at (−4, 1), hand tag "opposite sign: x = −4".

### 3. worked example 1: completing the square
> So the job is to get any quadratic into that form. Write y equals x squared minus six x plus eleven in completed-square form, and state its vertex. You've done this before, when solving. Half of minus six is minus three, and minus three squared is **nine**. Add nine and take nine away, so nothing changes. x squared minus six x plus nine is x minus three, all **squared**. That leaves minus nine plus eleven, which is two. So it's x minus three, squared, plus two, the same curve as before. Vertex three, two, axis x equals three, and it's a minimum, because the squared part only ever **adds**.

Visual: clear change to the g01 board. Task strip, 44 px: "Write y = x² − 6x + 11 in completed-square form and state its vertex." (site `we-1`). Givens card: "y = x² − 6x + 11" with "− 6x" boxed. At the right, the tiles (simulation 2): an x² square and the −6x strip split into two −3x strips around it. Rows, 52 px, one at a time: on "nine" "half of −6 is −3; (−3)² = 9", hand tag "halve, square"; the missing corner fills amber "+ 9" and a grey "− 9" appears outside, hand tag "+ 9 − 9: no change"; row "y = x² − 6x + 9 − 9 + 11"; on "squared" "y = (x − 3)² − 9 + 11" with "(x − 3)²" amber; "y = (x − 3)² + 2". On "same curve" the small plot from scene 2 slides in at the right with its vertex ring. Framed answer (green): "y = (x − 3)² + 2: vertex (3, 2), axis x = 3, minimum". On "adds" hand tag "a = 1 > 0: minimum".

### 4. the hammock: when a isn't 1
> Now the hammock. Here x squared has a quarter in front, so take the quarter out of the x terms only. A quarter, times x squared minus four x, plus one and a **half**. Complete the square inside. x squared minus four x is x minus two, all squared, minus **four**. Careful here. The quarter multiplies that minus four too, which gives minus one. So h is a quarter, times x minus two, squared, minus one plus one and a half. That's a quarter, x minus two, squared, plus a **half**. The squared part is zero at x equals two. So the lowest point is half a metre above the grass, two metres along, and the axis is x equals **two**.

Visual: camera continue back onto the painted hammock (about 1,100 px wide, solid) with its coded curve, now at the left two-thirds; working rows at the right third (52 px current, 32 px earlier). Equation strip: "h = ¼x² − x + 1.5" with "¼" violet. On "x terms only" the "¼" lifts out, hand tag "x terms only"; on "half" row "h = ¼(x² − 4x) + 1.5". On "four" row "x² − 4x = (x − 2)² − 4" (amber bracket). On "Careful here" the "¼" swings over the "− 4", hand tag "× ¼ too"; row "h = ¼[(x − 2)² − 4] + 1.5 = ¼(x − 2)² − 1 + 1.5". On "half" (second bold) row "h = ¼(x − 2)² + 0.5" (52 px, "2" blue, "0.5" teal). The square readout runs on the hammock: the blue rider slides along the grass from 0 to 4 and back to 2; the amber bar reads "0" at 2. On "two" (last bold) the "?" ring from w14 becomes a teal ring "(2, 0.5)" on the plate's lowest point, the dashed line labelled "axis x = 2", and the struck "2?" from scene 1 turns into a blue tick, hand tag "now with a reason".

### 5. worked example 2: a = 2
> Here's one with a two in front. Write y equals two x squared plus eight x plus three in completed-square form. Take the two out of the x terms only. Two, times x squared plus four x, plus **three**. Inside, x squared plus four x is x plus two, squared, minus four. Now the two multiplies everything in the big bracket, so minus four becomes minus **eight**. Minus eight plus three is minus five. So y is two, times x plus two, squared, minus five, and the vertex is minus two, minus **five**. The classic slip is to leave the minus four alone and get minus one. The number in front multiplies the subtracted square **too**.

Visual: clear change to the g01 board. Task strip, 44 px: "Write y = 2x² + 8x + 3 in completed-square form and state its vertex." (site `we-2`). Givens card: "y = 2x² + 8x + 3", "a = 2" (violet). Rows, 52 px, one at a time: on "three" "y = 2(x² + 4x) + 3", hand tag "x terms only"; "x² + 4x = (x + 2)² − 4"; on "eight" "y = 2[(x + 2)² − 4] + 3 = 2(x + 2)² − 8 + 3" with an arrow from the 2 to the − 4, hand tag "× 2 too"; on "five" "y = 2(x + 2)² − 5". Framed answer (green): "y = 2(x + 2)² − 5: vertex (−2, −5)". A small plot at the right draws the curve with its vertex ring and axis x = −2 (blue). On "too" a red slip "2(x + 2)² − 4 + 3 = 2(x + 2)² − 1" writes small and is crossed (caption "× 2 reaches the − 4 too").

### 6. a maximum: the drinking fountain
> What if a is negative? Here's a park drinking fountain. The water leaves the spout ninety centimetres up, and its height, x centimetres along, is modelled by minus zero point one x squared, plus two x, plus ninety. Complete the square the same way, and you get minus zero point one, times x minus ten, squared, plus a **hundred**. The squared part is still zero or more, but now it's multiplied by a negative, so it can only take height away. The height is greatest when the square is zero, at x equals ten. So the vertex, ten, a hundred, is the highest point, a **maximum**. With a negative a, the vertex is always the **highest**.

Visual: clear change. Left half: the painted fountain `ma11-drinking-fountain-v1.png` (about 820 px tall, solid) with its painted jet; the coded curve laid over the jet (ink), axes from the spout (x "cm along", y "height (cm)", broken-axis mark at 80). Right half: rows and the readout board. Equation strip: "h = −0.1x² + 2x + 90" with "−0.1" violet. On "hundred" rows (44 px, already worked, a 3 s read): "= −0.1(x² − 20x) + 90", "= −0.1[(x − 10)² − 100] + 90", and current (52 px) "h = −0.1(x − 10)² + 100". On "take height away" the square readout runs on the jet (simulation 3): the amber bar grows away from x = 10 while the teal height falls, hand tag "takes height away". On "maximum" the rider tops out at (10, 100), a teal ring "vertex (10, 100)" at the top of the painted jet. On "highest" (last bold) a small hammock thumbnail (the scene 4 frame, 300 px) slides in at the top left with "a > 0: lowest", and the fountain carries "a < 0: highest", both tags in violet.

### 7. the general quadratic: x = −b/(2a)
> We can complete the square once, for every quadratic. Take y equals a x squared plus b x plus c. Take a out of the x terms. Half of b over a is b over two a, so the bracket becomes x plus b over two a, all squared, with a constant left outside. That constant moves the height, not the axis. The squared part is zero when x plus b over two a is zero, so when x is minus b over two **a**. That's the axis of symmetry, for every parabola. Check it on the hammock. b is minus one and a is a quarter, so minus b over two a is one over a half, which is **two**. It agrees.

Visual: clear change to full-width working (the current line 52 px, earlier lines 32 px, one at a time). Rows: "y = ax² + bx + c" ("a" violet); "y = a(x² + (b/a)x) + c", hand tag "x terms only"; "half of b/a is b/(2a)", hand tag "halve, square"; "y = a(x + b/(2a))² + c − b²/(4a)" with the bracket amber and the trailing constant grey, hand tag "height, not axis". On "two a" (first bold) the bracket's inside is circled, "x + b/(2a) = 0", then the framed result (green, 60 px): "axis of symmetry: x = −b/(2a)". On "Check it on the hammock" the hammock thumbnail (300 px) appears at the right with "a = ¼, b = −1"; on "two" (last bold) the row "x = −(−1)/(2 × ¼) = 1 ÷ ½ = 2" and the thumbnail's axis line pulses, hand tag "same answer".

### 7a. worked example 3: the formula
> So when only the vertex is wanted, the formula is quicker. Find the vertex of y equals three x squared minus twelve x plus seven. Here a is three and b is minus twelve, so x is minus, minus twelve, over six, which is **two**. That's only half the answer. Put x equals two back in. Three times four, minus twenty-four, plus seven, is minus **five**. So the vertex is two, minus five, and it's a minimum, because a is **positive**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the vertex of y = 3x² − 12x + 7 using the axis-of-symmetry formula." (site `we-3`). Givens card: "a = 3" (violet), "b = −12", "c = 7", with "b = −12" ringed. Equation strip: "x = −b/(2a)". Rows, 52 px: on "two" "x = −(−12)/(2 × 3) = 12/6 = 2" ("2" blue); hand tag "half the answer"; on "five" "y = 3(2)² − 12(2) + 7 = 12 − 24 + 7 = −5" ("−5" teal), hand tag "substitute back". Framed answer (green): "vertex (2, −5), a minimum since a = 3 > 0". A plot at the right draws the curve with the axis x = 2 and the vertex ring. On "positive" a red slip "vertex: x = 2" writes small and is crossed (caption "half the answer: find y too").

### 8. memory aid
> Here's a way to remember it. Bracket zero, vertex found. Whatever makes the squared bracket zero is the vertex's x, the number left over is its height, and the sign of a says whether that's the lowest point or the **highest**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the amber bar shrinking to zero beside a small curve whose rider lands on its vertex (a 3 s loop). Main line, hand font 60 px: "Bracket zero, vertex found." On "highest" the key line, 40 px: "y = a(x − h)² + k: vertex (h, k), axis x = h. a > 0 lowest, a < 0 highest." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Write y equals x squared plus six x plus four in completed-square form, and state its vertex and axis of symmetry. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Write y = x² + 6x + 4 in completed-square form, and state its vertex and axis of symmetry." The full question stays on screen. Picture slot: empty axes (x −7 to 2, y −6 to 6) with a dashed "axis?" line not placed (a "?" chip only). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Half of six is three, and three squared is nine. So y is x plus three, squared, minus nine plus four, which is x plus three, squared, minus **five**. The vertex is minus three, minus five, and the axis is x equals minus **three**. Writing the vertex as three, minus five is the classic slip. The bracket is zero when x is minus **three**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "y = x² + 6x + 4" ("+ 6x" underlined as used). Rows, 52 px: "half of 6 is 3; 3² = 9"; on "five" "y = (x + 3)² − 9 + 4 = (x + 3)² − 5". On "three" (first) framed answer (green): "y = (x + 3)² − 5: vertex (−3, −5), axis x = −3"; the picture's axes draw the curve with its vertex ring and the axis line. On "three" (last) a red slip "vertex (3, −5)" writes and is crossed (hand caption "opposite sign"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Write y equals minus two x squared plus twelve x minus seven in completed-square form. State its vertex, whether it's a maximum or a minimum, and the range. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Write y = −2x² + 12x − 7 in completed-square form. State its vertex, whether the vertex is a maximum or a minimum, and the range." The full question stays on screen. Picture slot: empty axes (x −1 to 7, y −10 to 14), no curve. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Take out minus two. Inside, that's x minus three, squared, minus nine. Minus two times minus nine is plus eighteen, and eighteen minus seven is eleven. So y is minus two, x minus three, squared, plus **eleven**. The vertex is three, eleven. a is negative, so it's a maximum, and the range is y less than or equal to **eleven**. If you got minus sixteen, the minus two never reached the minus **nine**.

Visual: the card shrinks to the top. `GivensStrip`: "a = −2" (violet), "y = −2x² + 12x − 7" (underlined as used). Rows, 52 px: "y = −2(x² − 6x) − 7"; "= −2[(x − 3)² − 9] − 7 = −2(x − 3)² + 18 − 7"; on "eleven" (first) "y = −2(x − 3)² + 11". On "eleven" (second) framed answer (green): "vertex (3, 11), a maximum (a = −2 < 0); range y ≤ 11"; the picture draws the downward curve with its vertex ring and a teal bracket on the y axis from 11 down. On "nine" a red slip "y = −2(x − 3)² − 9 − 7 = −2(x − 3)² − 16" writes and is crossed (hand caption "× (−2) reaches the − 9"). Hold about 1 s.

### 13. handoff
> So completing the square shows the vertex and the axis. Next, we put every feature together. Here's a garden polytunnel. Its hoop stands four metres wide at the ground and two metres high in the middle. How do features like these build a parabola, and how do we work back to its **equation**?

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to the painted polytunnel end-on (`ma11-polytunnel-end-v1.png`, about 1,200 px wide at 300 px per metre, solid) on the grass strip, with a coded ground axis. On "four metres wide" two amber dots at its feet labelled "0 m" and "4 m"; on "two metres high" a teal mark "2 m" at the top of the hoop and a dashed blue axis line through it. On "equation" the chip "y = ?" and "Next: build a parabola from its features, then work back to its equation". Hold about 2 s. This is w16's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = a(x − h)² + k: vertex (h, k), axis x = h.
- a > 0: vertex is a minimum. a < 0: a maximum.
- Complete the square: halve, square, add and subtract.
- a ≠ 1: take a out of the x terms; it multiplies the − square.
- Axis x = −b/(2a); substitute back for the vertex's y.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Bracket zero, vertex found.* Key: *y = a(x − h)² + k: vertex (h, k), axis x = h. a > 0 lowest, a < 0 highest.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the polytunnel, its feet dots "0 m" and "4 m", the "2 m" mark, the dashed axis, "y = ?" and the "Next" chip). This is the final frame and w16's opening frame.

## Teaching checks

- **Does it explain causes?** Why the vertex is where the bracket is zero: a square is never negative, so the squared part is least (zero) there (2). Why x = h is the axis: equal steps either side give equal squares (2). Why add and subtract the same number: the value is unchanged while a perfect square appears (3). Why a multiplies the subtracted square: it multiplies the whole bracket (4, 5). Why a < 0 gives a maximum: a negative times a square only takes height away (6). Why x = −b/(2a): it is where the general bracket is zero (7). Why substitute back: the axis gives only x (7a).
- **Misconceptions addressed:** the vertex sign (2 tag; A1 crossed); a not reaching the − square (4 tag; 5 crossed; A2 crossed); stopping at x (7a crossed); every vertex a minimum (6, A2); the formula as a rule only (7 shows it).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted hammock from the first frame, answered in 4; the painted fountain in 6; 2 a new stage every 30 to 50 s; 3 the square readout (rider, amber bar and teal height on one timeline), the tiles, the fountain's top; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 3, 5 and 7a with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the bar shrinking to zero exactly as the point lands on the vertex, and the hammock's readout locking at the plate's lowest point.
- **One idea at a time:** reading the form (2), making it for a = 1 (3), a ≠ 1 (4, 5), the sign of a (6), the general axis (7), using it (7a).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture slot; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 30 s.
- **Avoided double teaching:** completing the square (w04) is recalled by its steps, not re-taught from the beginning; range (w09) is used, not taught.
- **Syllabus coverage:** `ci9f2c04cb` (2, 3, 4, 5, 6; A1, A2; key notes 1 to 4); `ci9c3bd164` (7, 7a; key note 5).
- **Out of scope by design:** labelled sketches and equations from features (w16); intersections (w17); inequalities (w18); optimisation in context (w19).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Write y = x² + 6x + 4 in completed-square form, and state its vertex and axis of symmetry."
Model answer: half of 6 is 3, and 3² = 9. y = x² + 6x + 9 − 9 + 4 = (x + 3)² − 5. Vertex (−3, −5); axis of symmetry x = −3. Classic mistake (crossed): "vertex (3, −5)".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "Write y = −2x² + 12x − 7 in completed-square form. State its vertex, whether the vertex is a maximum or a minimum, and the range."
Model answer: y = −2(x² − 6x) − 7 = −2[(x − 3)² − 9] − 7 = −2(x − 3)² + 18 − 7 = −2(x − 3)² + 11. Vertex (3, 11). a = −2 < 0, so the vertex is a maximum. Range: y ≤ 11. Classic mistake (crossed): "y = −2(x − 3)² − 16".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hammock | ¼x² − x + 1.5 = ¼(x − 2)² + 0.5; vertex (2, 0.5); axis x = 2; heights 1.5, 0.75, 0.5, 0.75, 1.5 at x = 0 to 4 | 1, 4, 7 |
| Reading example | (x − 3)² + 2: values 6, 3, 2, 3, 6 at x = 1 to 5; vertex (3, 2) | 2 |
| Sign example | (x + 4)² + 1: vertex (−4, 1) | 2 |
| Site `we-1` | x² − 6x + 11 = (x − 3)² + 2; half of −6 is −3; 9 | 3 |
| Site `we-2` | 2x² + 8x + 3 = 2(x + 2)² − 5; vertex (−2, −5); crossed 2(x + 2)² − 1 | 5 |
| Fountain | −0.1x² + 2x + 90 = −0.1(x − 10)² + 100; vertex (10, 100) max; h(0) = h(20) = 90 | 6 |
| General | a(x + b/(2a))² + c − b²/(4a); axis x = −b/(2a); hammock check 2 | 7 |
| Site `we-3` | 3x² − 12x + 7: x = 2; y = −5; minimum | 7a |
| A1 | x² + 6x + 4 = (x + 3)² − 5; (−3, −5); x = −3; crossed (3, −5) | 9, 10 |
| A2 | −2x² + 12x − 7 = −2(x − 3)² + 11; (3, 11) max; y ≤ 11; crossed −16 | 11, 12 |
| Handoff | polytunnel feet 0 and 4 m, top 2 m | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- ¼x² − x + 1.5 = ¼(x² − 4x) + 1.5; x² − 4x = (x − 2)² − 4; so ¼(x − 2)² − 1 + 1.5 = ¼(x − 2)² + 0.5. h(0), h(1), h(2), h(3), h(4) = 1.5, 0.75, 0.5, 0.75, 1.5.
- (x − 3)² + 2 at x = 1, 2, 3, 4, 5: 6, 3, 2, 3, 6. (x + 4)² + 1 has vertex (−4, 1).
- x² − 6x + 11 = (x − 3)² + 2.
- 2x² + 8x + 3 = 2(x + 2)² − 5; 2(x + 2)² − 1 does not equal it.
- −0.1x² + 2x + 90 = −0.1(x − 10)² + 100; h(0) = h(20) = 90; h(10) = 100; h(5) = 97.5.
- ax² + bx + c = a(x + b/(2a))² + c − b²/(4a) (a ≠ 0). −(−1)/(2 × ¼) = 2; −2/(2 × (−0.1)) = 10.
- 3x² − 12x + 7: −(−12)/6 = 2; 3(4) − 24 + 7 = −5.
- x² + 6x + 4 = (x + 3)² − 5.
- −2x² + 12x − 7 = −2(x − 3)² + 11; −2(x − 3)² − 16 does not equal it.

## Memory aid check

- **"Bracket zero, vertex found."** Original. Meaning, as said in scene 8: in y = a(x − h)² + k, the x that makes the squared bracket zero is the vertex's x-coordinate (h), the constant left is its y-coordinate (k), and the sign of a decides lowest (a > 0) or highest (a < 0). Assumptions checked: a ≠ 0; the form is fully completed (no x outside the bracket); real coefficients. It helps a new case: y = 3(x + 1)² − 4: the bracket is zero at x = −1, so the vertex is (−1, −4), a minimum. Introduced after the causes in 2, 4 and 6.
- **Considered, not used:** "Opposite sign inside, same sign outside" (correct but a rule without the reason; kept as the hand tag "opposite sign").

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings, including `### 7a.`; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,184 characters**, 15 scene headings. Characters per scene (1 to 14, with 7a): 436, 718, 584, 609, 607, 620, 558, 417, 222, 147, 326, 188, 389, 288, 75.

At 13.3 characters per second the speech is about 465 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the mirror guess (1), the square readout's sweeps and mirror pairs (2), the tiles (3), the readout on the hammock (4), the fountain's top (6) and the derivation rows (7), about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 554 s (9 min 14 s)**, inside the 5,500 to 6,800 character band and about 16 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 2's last two sentences (keep the (x + 4)² inset with its tag); scene 6's last two sentences (keep the two thumbnails and tags). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w15` (route math-a11-w15). Explainer folder `src/explainer/lessons/math-a11-w15`; build inputs in `docs/production/claude-pm/lessons/math-a11-w15/` (to be created at voicing).

In order (kebab-case; 15 scene headings): hook-lowest-point, square-never-negative, worked-complete-square, hammock-a-not-one, worked-a-two, fountain-maximum, general-axis, worked-formula, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | w14's frame; the mirror guess on the painted hammock |
| 35 to 90 s | 2 | The square readout: bar to zero, mirror pairs, the sign inset |
| 90 to 139 s | 3 | g01 board with tiles: completing the square |
| 139 to 190 s | 4 | The painted hammock answered: (2, 0.5), axis x = 2 |
| 190 to 237 s | 5 | g01 board: a = 2 |
| 237 to 289 s | 6 | The painted fountain: a maximum |
| 289 to 338 s | 7 | Full-width derivation of x = −b/(2a) |
| 338 to 369 s | 7a | g01 board: the formula and substitution |
| 369 to 389 s | 8 | Framed memory card |
| 389 to 483 s | 9 to 12 | Question cards with picture slots and countdowns, then feedback |
| 483 to 508 s | 13 | The polytunnel with its features and "y = ?" |
| 508 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w14's last frame continues into scene 1 (the frame is identical); 1 to 2 clear change; 2 to 3 clear change (the scene 2 plot returns small in 3); 3 to 4 camera continue back onto the hammock; 4 to 5 clear change; 5 to 6 clear change to the fountain; 6 to 7 clear change; 7 to 7a camera continue (the formula carries); 7a to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w15-learning-review.md`, `science_check` = `checks/m-a11-w15-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-cricket-grass-strip-v1.png` (reused under the hammock, as w14); the w14 hammock plates are commissioned in w14's asset brief and not yet painted. No fountain, water or garden-structure plate exists in `maths/`.

Need (painted): reused from w14's brief `ma11-hammock-frame-high-v1.png` (the light state; already required by w13's handoff, w14 and this video); new `ma11-drinking-fountain-v1.png` (see the Codex asset brief); w16's `ma11-polytunnel-end-v1.png` (commissioned in w16's brief; must be painted before this video's build, because scene 13 shows it). Reused: `maths/ma12-cricket-grass-strip-v1.png`.

Coded (studio kit): every curve, axis, rider, bar, readout, tile, dashed axis line, ring, working board, question card, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`; `AlgebraTileGrid` in `CompleteSquareTiles` mode (from w04).

Additions (new kit-needs row w15):
1. **`SquareReadout`** (new; reused by w16, w18, w19): props `a`, `h`, `k`, `xRange`, `riderPath(t)`, `mirrorPairs`, `plot` (or a plate overlay with a sidecar transform). Draws a blue rider on the x axis, an amber bar for (x − h)², a teal readout y = a·bar + k and the curve point at that height, all from one timeline; locks and rings the vertex when the bar is within 1e-9 of zero. Checks: with (a, h, k) = (1, 3, 2) the readout at x = 1 to 5 is 6, 3, 2, 3, 6; with (¼, 2, 0.5) it is 0.5 at x = 2 and 0.75 at x = 1 and 3; with (−0.1, 10, 100) it is 100 at x = 10 and 90 at x = 0 and 20.
2. **Plate overlay transform** for the fountain (lesson folder): the coded curve is fitted to the plate's sidecar (spout point, scale), as for the w14 hammock.

## Codex asset brief (Maths A11 W15, a park drinking fountain)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w15.md`. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. **Transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; no text, logos, people, hands, faces, pets, sky, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma11-drinking-fountain-v1.png`: a park drinking fountain (a stainless-steel bubbler on a short concrete or timber pedestal with a round bowl), **side-on**, 1600 × 1400 px. Paint the water jet as one smooth arc of clear water rising from the spout and falling into the bowl. Set the scale inside the jet region at **20 px per centimetre** (the jet's horizontal extent is 20 cm = 400 px). Take x = 0 at the spout mouth and heights relative to the spout mouth (the spout mouth is at 90 cm in the model; only the shape is fixed by the table). Paint the jet's centre line to these heights above the spout mouth (within 2 per cent of the 20 cm run):

| x (cm) | 0 | 2.5 | 5 | 7.5 | 10 | 12.5 | 15 | 17.5 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| height above spout (cm) | 0.00 | 4.38 | 7.50 | 9.38 | 10.00 | 9.38 | 7.50 | 4.38 | 0.00 |

The jet lands in the bowl at x = 20 cm, level with the spout mouth (the bowl rim may sit just below). Report in a sidecar `ma11-drinking-fountain-v1.json`, in file pixels: the spout mouth point, the jet's landing point, the measured centre-line heights at the nine x values, and the ground line y. If the jet misses the table by more than 2 per cent of the run, the builder fits the coded curve to the measured points; the plate is never warped. Report inspection on the paper background (`#f6f1e7`) at 820 px tall, the alpha check, and the plate with the model curve overlaid.

Also required before this video's build (commissioned elsewhere, not repeated here): `ma11-hammock-frame-high-v1.png` (w14's brief) and `ma11-polytunnel-end-v1.png` (w16's brief).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", the jet profile table in the asset brief, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "a square is never negative" (2; real numbers); "the vertex is where the bracket is zero" (2, 8; completed form); "a multiplies the subtracted square" (4, 5); "a negative a gives a maximum" (6); "x = −b/(2a) for every parabola" (7; a ≠ 0); the model language for the hammock and the jet (1, 6).
4. Confirm the site's `we-1`, `we-2` and `we-3` keep their answers.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a curve, vertex or answer.
6. Confirm the opening matches w14's final frame and scene 13's frame is w16's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate request contains no people, pets, text or logos.

## YouTube metadata (draft)

Title: Completing the Square: the Vertex and Axis of a Parabola | Year 11 Maths Advanced

(Title length: 83 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson14.sa.html

Where exactly is a hammock's lowest point, and what line is it symmetric about? A square is never negative, so the completed-square form y = a(x − h)² + k shows the vertex (h, k) and the axis x = h straight away. Complete the square when a is 1 and when it isn't, see why a negative a turns the vertex into a maximum on a drinking fountain's jet, and show by completing the square on y = ax² + bx + c that the axis is x = −b/(2a). A memory aid: bracket zero, vertex found. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Show by completing the square on the general quadratic y = ax^2 + bx + c that the axis of symmetry is x = -b/(2a) where a, b and c are constants"
"Identify the axis of symmetry and vertex of a parabola by completing the square on its quadratic function"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: completing the square; zeros and the sign of a. Next: Sketching a parabola from its features, and finding its equation.

#Year11Maths #MathsAdvanced #Parabolas #HSCScience

## Open decisions

- **1. Second anchor (root).** The fountain adds one plate for one scene. If root prefers fewer plates, scene 6 can run on a coded jet over the hammock frame's background, but a coded jet is not a plate (standard), so the fallback is weaker.
- **2. Decimal wording (voice pilot).** "Minus zero point one" follows w10's open choice; change all three readings together if the course uses "zero point one".
- **3. Scene 2's sign inset (learning review).** The (x + 4)² inset is brief; the reviewer checks it lands before scene 3, or moves it to scene 3 as a hand tag only.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w15-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w14 and w04; check that "a square is never negative" is the reason, not a slogan; that the hammock answer lands on the painted lowest point; that "a multiplies the − square" is seen in 4 before it is crossed in 5; that the derivation in 7 stays readable at speed), then the Codex maths check and error check, then voicing and a build to grade A.
- The square readout carries the explanation; judge it at playback speed, not from stills. Every readout, bar and dot must be computed from the same coefficients as the displayed curve.
