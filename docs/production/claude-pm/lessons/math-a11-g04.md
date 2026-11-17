# Maths A11 G04: Why does the order of transformations matter? An oven's °C to °F conversion, the stretch that stretches the slide, same axis against different axes, the form y = k f(a(x + b)) + c, writing a rule and reading one (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,821 characters by script (see "Narration length estimate"), 13 scene headings, about 525 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-seventh video of Year 11 Mathematics Advanced (2024), outline order 77, Graph transformations. Pre-design pack: `../pre-design/maths-a11/math-a11-g04.md` (brief 243). Site lesson (read through the pack's quotations, read only): `graph-transformations/lesson04.sa.html` (Combined Transformations, SHA256 `eb7f95b26d45d7ab5371941cd2c9975179813455dd21707ba2e7fb4f3440e2b0`; `we-ct-2` and short answer Q9 used with the site's numbers; the reading order (S11-G03) and the establish task (S11-G04) are not reused; `we-ct-1` and `we-ct-3` are not used). Route entry: `math-a11-g04` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; a painted oven (new, from g03's brief) and team caps (new); every graph, tracer, panel and board coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (cooking: converting an oven temperature), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Graph transformations), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `ci063bd03f`: "Recognise that the order in which individual transformations are applied to functions is important"
- `cid4fd3807` (shared with g05; g04 owns "determine the function rule" after a described sequence and "describe which transformations have been applied"): "Apply reflections, translations and dilations to functions within the scope of the Mathematics Advanced course, excluding trigonometric functions, determine the function rule and the graph of the transformed function, the domain and range of the transformed graph, any intercepts, asymptotes and discontinuities where appropriate, and describe which transformations have been applied"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

**Boundary:** starts from g03's final frame exactly (the oven plate `ma11-oven-dial-v1.png` with coded °F marks; the recipe card "Bake at 180 °C"; the rule card "°F = 1.8 × °C + 32"; two workings "× 1.8, then + 32 = ?" and "+ 32, then × 1.8 = ?"; chips "same two steps, different order?", "Next: does the order matter?", "?"). Recalls g01 (slides by replacing x by x − 3 or y by y − 2), g02 (−x and −y as flips), g03 (dilations; "3x = x ÷ ⅓"; "Outside: on y, as written. Inside: on x, the opposite.") and w27 (composite functions: order usually matters) in a phrase or grey chip each. Teaches: two moves along the same axis give different graphs in different orders, because a later stretch stretches an earlier slide (`ci063bd03f`); moves along different axes give the same graph in either order; the standard order on each axis is stretch (with any flip) then slide, written as y = k f(a(x + b)) + c (root ruling 4); writing the function rule after a described sequence, replacing every x (site Q9); describing the sequence from a rule by factoring the inside first, and carrying a point (site `we-ct-2`) (`cid4fd3807`, rule and description). Stops at rules and descriptions. Not taught: the domain, range, intercepts, asymptotes and discontinuities of the result (g05); trigonometric functions (excluded by the syllabus; Year 12 t01).

## Decisions

- **Anchor: converting an oven temperature (painted plate, live).** An oven whose dial is marked in °F and a recipe that says 180 °C. °F = 1.8 × °C + 32 is "multiply, then add": 356 °F. Adding first, then multiplying, gives 381.6 °F, about 26 degrees too hot, because the multiplying stretches the 32 into 57.6. That is exactly why a vertical stretch after a vertical slide changes the graph, so the anchor is the cause, not decoration; and the conversion line °F = 1.8°C + 32 is itself y = x stretched by 1.8, then slid up 32. Cooking; the pack's anchor 1. No Year 11 or Year 12 Maths design converts °C to °F or uses an oven dial (grep "Fahrenheit", "oven dial", 17 Nov). w27's voucher and GST order anchors are different objects and money, and w27's composition is recalled as a grey chip only.
- **Notation (root ruling 4; Year 12 t01 root decision 21).** The form y = k f(a(x + b)) + c is introduced in scene 4 and used from then on. k: vertical dilation factor (k < 0 also reflects in the x-axis); a: the number multiplying x inside, a horizontal dilation by factor 1/a (a < 0 also reflects in the y-axis); b: a horizontal slide left b (right when b is negative); c: a vertical slide up c. The site's y = af(b(x − h)) + k is not shown, and nothing is said about it.
- **Order taught (root ruling 5; S11-G03).** On each axis: stretch (with any flip) first, then slide. Building a rule replaces x by ax, then x by x + b; outside, multiplies by k, then adds c. Reading a rule factors the inside first, so the slide is read from x itself. The site's "translate, then dilate" reading is never shown. The "order matters" demonstration uses two pairs that really differ (vertical stretch and vertical slide; horizontal slide and horizontal stretch) and shows one pair on different axes that agrees (S11-G04's own pair, right 1 and a vertical stretch by 2, used correctly as the commuting case).
- **Simulations (standard item 3).**
  1. **Two tracers side by side** (`TransformQueue` ×2, scenes 2 and 3; new part): each starts from y = x² with the same two step cards in swapped order; the cards apply one at a time; the vertices separate and a "commute or not" verdict chip writes under each pair. The third pair lands on one curve.
  2. **Build panel** (`StudioTransformPanel` on a parabola, scene 4): the Year 12 t01 four-slider panel (k amber, a blue, b teal, c violet) with a non-trig readout set ("horizontal factor 1/a", "slide left b", "vertical factor k", "slide up c"); each slider moves on its cue and the curve follows (X = u/a − b, Y = k f(u) + c, the kit's dilate-then-translate order).
  3. **Point carry** (scene 6): the point (2, 4) halves, slides, triples and rises along four arrows, with a live coordinate readout.
- **Colour roles (fixed for the g strand, from Year 12 t01 Revision 3).** k (vertical dilation, and the x-axis flip) **amber**; a (horizontal dilation, and the y-axis flip) **blue**; b (horizontal slide) **teal**; c (vertical slide) **violet**; parent dashed grey ghost; image ink; answer green; mistake red, crossed slips only. On the oven cards, "× 1.8" is amber and "+ 32" violet, so the conversion reads as a vertical stretch and a vertical slide.
- **Large type, handwritten voice.** As g02. Hand tags: "the × stretched the 32", "stretch, then slide", "slide, then stretch", "same axis: order matters", "different axes: same curve", "a × x first, then x + b", "every x replaced", "factor first", "½ then +2", "×3 then +5", "inside: opposite", "outside: as written".
- **Stage changes (standard item 2).** The oven and its two orders (1); two tracers, vertical (2); two tracers, horizontal, then the commuting pair (3); the build panel (4); g01 board, writing a rule (5); g01 board, reading a rule (6); framed card (7); question cards (8 to 11); the caps frame for g05 (12); key notes (13).
- **Worked examples (g01 layout).** 5: site short answer Q9 for f(x) = x² (reflection in the x-axis, horizontal dilation by factor ½, translation 3 left and 2 up: y = −(2(x + 3))² + 2 = −4(x + 3)² + 2, vertex (−3, 2)); crossed "y = −(2x + 3)² + 2". 6: site `we-ct-2` (y = 3f(2x − 4) + 5; (2, 4) → (3, 17)); crossed "2x − 4: right 4". Scenes 2 to 4 are simulation stages with rows.
- **Memory aid.** Framed card: "Stretch, then slide, on each axis. Factor the inside first." Key line: "Inside: on x, the opposite. Outside: on y, as written." (g03's line and Year 12 t01's, with "factor the inside first", t01's stated condition.)
- **Visual surprise.** In the oven's swapped order, the 32 visibly stretches into 57.6 on the bar; on the graphs, the vertical slide of 1 stretches into 2 and the two vertices separate, then the different-axes pair lands on one curve.
- **Site notes (pack section 8; `../site-corrections-maths-a11.md` section 8).** S11-G03 (the "inside out" reading order, translation before dilation): not shown; scene 4 teaches dilate then translate and scene 6 reads by factoring. S11-G04 (the establish task's commuting pair): reused only as the commuting example in scene 3; the "order matters" proof uses the same-axis pairs. The site's notation y = af(b(x − h)) + k is not shown (root ruling 4).
- **Plain meanings at first use.** Combined transformation ("two or more moves, one after another"); commute ("give the same result in either order", said as "in either order"; the word commute is not needed in narration); factor the inside ("write 2x − 4 as 2(x − 2), a number times a bracket around x").
- **Attempts (pack questions).** A1: y = x² vertical factor 3 then down 2, and down 2 then factor 3: y = 3x² − 2, vertex (0, −2); y = 3x² − 6, vertex (0, −6); crossed "both are 3x² − 2". A2: √x reflected in the y-axis then right 4: y = √(4 − x), x ≤ 4; the student's order: y = √(−x − 4), x ≤ −4; crossed "y = √(−x − 4)" for the first.
- **Mistake scene:** none separate. "Order never matters" (2, 3); "order always matters" (3, the commuting pair); the slide read from the inside number without factoring (6 crossed; Year 12 t01's misconception "reading the translation as the inside number instead of that number divided by a"); replacing only part of the inside (5 crossed); translating before dilating (2, 3 and A1, the stretched slide); forgetting that a negative coefficient also reflects (4, said; 5, the reflection step).
- **Cause chain taught, in order:** (1) in °F = 1.8°C + 32, multiplying after adding stretches the 32 too (1); (2) on a graph, a vertical stretch after a vertical slide stretches the slide, so the vertex lands somewhere else (2); (3) sideways, a stretch from the y-axis after a slide stretches the slide too; but moves on different axes don't touch each other's coordinates, so their order doesn't matter (3); (4) so we fix an order: stretch then slide on each axis, which is y = k f(a(x + b)) + c, built by replacing x by ax and then x by x + b (4); (5) every replacement replaces every x, so the slide goes around x inside the a (5); (6) reading a rule: factor the inside, so the slide is read from x itself (6).
- **Entry knowledge (route):** g01 (translations), g02 (reflections), g03 (dilations), w27 (composite functions; order usually matters).
- **What Year 12 relies on.** Year 12 t01 reads y = k f(a(x + b)) + c, says "Factor out the two, and you get sine of two, bracket x plus pi over two. So, squash by a factor of a half, then slide left by pi over two.", fixes the order "squash then slide" (the kit's X = xScale·x + xShift), and lists "reading the translation as the inside number instead of that number divided by a" as a misconception. Scene 4 introduces the form in those letters and roles; scene 6 says "Take the two out of the bracket first" and "squash by a factor of a half, then slide right two"; scene 6's crossed slip is t01's misconception; the memory key line is t01's aid.
- **Handoff (to math-a11-g05, "How do we track domain, range, intercepts and asymptotes through transformations?").** Scene 12: the team caps plate `ma11-team-caps-v1.png` (new) at the left; a coded order card "set-up $90 · $12 a cap"; a plot (n 0 to 60, A 0 to 60) with the cost rule "A = 90/n + 12" drawn for n ≥ 1 and the parent y = 1/x as a dashed grey ghost; the row "1/x: stretch × 90, then up 12" (amber, violet); a dashed line A = 12 with "?" on it; chips "can the average reach $12?", "where do the asymptotes go?", "Next: tracking features", "?". This is g05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Oven: 1.8 × 180 + 32 = 356; 1.8 × (180 + 32) = 381.6; difference 25.6 = 1.8 × 32 − 32; 1.8 × 32 = 57.6.
  (b) y = x²: stretch ×2 then up 1: 2x² + 1, vertex (0, 1); up 1 then ×2: 2(x² + 1) = 2x² + 2, vertex (0, 2).
  (c) y = x²: right 1 then horizontal factor 2: (x − 1)² → (x/2 − 1)² = ((x − 2)/2)², vertex (2, 0); factor 2 then right 1: (x/2)² → ((x − 1)/2)², vertex (1, 0). Right 1 and vertical ×2: 2(x − 1)² in either order.
  (d) Building y = k f(a(x + b)) + c: f(x) → f(ax) (factor 1/a) → f(a(x + b)) (left b) → k f(a(x + b)) (factor k) → k f(a(x + b)) + c (up c). A point (u, v) goes to (u/a − b, kv + c).
  (e) Q9: −x² → −(2x)² → −(2(x + 3))² → −(2(x + 3))² + 2 = −4(x + 3)² + 2 = −4x² − 24x − 34; k = −1, a = 2, b = 3, c = 2; vertex (−3, 2). Slip −(2x + 3)² + 2 has vertex (−3/2, 2).
  (f) `we-ct-2`: 2x − 4 = 2(x − 2); (2, 4) → (2/2 + 2, 3 × 4 + 5) = (3, 17). Check: at x = 3 the inside is 2(3 − 2) = 2, the old x, and the output is 3f(2) + 5 = 17. In the form, k = 3, a = 2, b = −2, c = 5.
  (g) A1: 3x² − 2, (0, −2); 3(x² − 2) = 3x² − 6, (0, −6). A2: √(−x) → √(−(x − 4)) = √(4 − x), x ≤ 4; √(x − 4) → √(−x − 4), x ≤ −4.
  (h) Pronunciations: "y equals k, f of a, bracket x plus b, plus c"; "minus, two bracket x plus three, all squared, plus two"; "three f of, two x minus four, plus five"; "root of four minus x"; "three hundred and eighty-one point six".
  (i) Windows: oven bar 0 to 400 °F; tracers x −3 to 5, y −1 to 9 each (two 760 × 600 px plots); panel plot x −6 to 4, y −6 to 4; scene 6 plot x −1 to 5, y −1 to 19.

Main question: *°F = 1.8 × °C + 32 means multiply, then add. Add first and the oven runs 26 degrees hot. Why does the order of transformations matter?*
Entry knowledge (g01 to g03, w27): translations, reflections and dilations as replacements; composite functions.
Stops after: order matters for moves on the same axis and not across axes; y = k f(a(x + b)) + c with stretch-then-slide on each axis; writing a rule from a described sequence; describing the sequence from a rule by factoring first, with a point carried. No features of the result.
Handoff: math-a11-g05: "average cost per cap = 90/n + 12: can it reach $12, and where do the asymptotes go?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed for the g strand): k amber; a blue; b teal; c violet; parent dashed grey ghost; image ink; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · GRAPH TRANSFORMATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: two steps, two orders
> Here's that oven, marked in degrees Fahrenheit, and a recipe that wants a hundred and eighty degrees Celsius. To convert, multiply by one point eight, then add thirty-two. That gives three hundred and fifty-**six**. Now do the same two steps the other way round. Add thirty-two first, to get two hundred and twelve, then multiply by one point eight. That's three hundred and eighty-one point **six**, about twenty-six degrees too hot. Same two steps, a different answer. Graphs have the same problem when we transform them more than once. So why does the order of transformations **matter**?

Visual: opens on g03's final frame exactly (the oven `ma11-oven-dial-v1.png` with coded °F marks; the recipe card "Bake at 180 °C"; the rule card "°F = 1.8 × °C + 32" with "× 1.8" amber and "+ 32" violet; the two workings "× 1.8, then + 32 = ?" and "+ 32, then × 1.8 = ?"; chips "same two steps, different order?", "Next: does the order matter?", "?"). On the first sentence the "Next" chips fade. Two horizontal bars (900 px, scale 0 to 400 °F) build under the workings. Left bar: 180 stretches ×1.8 to 324 (amber), then 32 adds on the end (violet); on "six" (first) "= 356 °F" (green) and the dial's pointer turns to 356. Right bar: 180 plus a violet 32 makes 212; the whole bar, violet piece included, stretches ×1.8 (amber); on "six" (second) "= 381.6 °F" (red), the violet piece now 57.6 long, hand tag "the × stretched the 32"; a bracket "25.6 too hot". On "matter" heading "Order of transformations", and the question chip "same moves, different order: same graph?" moves to the top right.

### 2. a stretch stretches the slide
> Look at what went wrong. Adding first meant the multiplying stretched the thirty-two too, into fifty-seven point six. Graphs do exactly the same. Take y equals x squared, and give it two moves along the y-axis, a vertical stretch by a factor of two and a slide up one. Stretch first, and you get two x squared. Then slide up one, two x squared plus one, with its vertex at zero, **one**. Now slide first, x squared plus one. Then the stretch doubles every height, including the one you just added. That's two x squared plus two, with its vertex at zero, **two**. The stretch stretched the slide. So for two moves along the same axis, the order **matters**.

Visual: stage change: two tracers side by side (`TransformQueue`, two 760 × 600 px plots, x −3 to 3, y −1 to 9), each with y = x² as a dashed ghost and a queue of two step cards above it: left "× 2 (vertical)" (amber) then "up 1" (violet); right "up 1" then "× 2". The oven bars shrink to a 30 px strip at the top left with "32 → 57.6" ringed. Left: the amber card applies (heights double, amber arrows), row "2x²"; the violet card applies (slide up 1), row "2x² + 1"; on "one" the vertex (0, 1) rings, hand tag "stretch, then slide". Right: the violet card applies, row "x² + 1"; the amber card applies and every height doubles, the vertex rising from 1 to 2 along an amber arrow; row "2(x² + 1) = 2x² + 2"; on "two" the vertex (0, 2) rings, hand tag "slide, then stretch". On "matters" a verdict chip under the pair "same axis: order matters" (red outline, 44 px).

### 3. sideways too, but not across axes
> The same happens sideways. Slide y equals x squared right one, then stretch it from the y-axis by a factor of two. The stretch doubles every distance from the y-axis, including the slide, so the vertex ends up at **two**. Stretch first and then slide right one, and the vertex is at **one**. Different graphs again. But moves on different axes don't interfere. Slide right one and stretch vertically by two, in either order, and both give two, bracket x minus one, all squared, the same **curve**. A sideways slide changes no heights, and a vertical stretch moves nothing sideways. So along the same axis, order matters. Across different axes, it doesn't.

Visual: clear change: the two tracers reset (x −2 to 5, y −1 to 9). Left queue "right 1" (teal) then "× 2 from the y-axis" (blue); right queue the reverse. Left: the vertex slides to (1, 0), then the blue stretch carries it along an arrow to (2, 0); rows "(x − 1)²", "((x − 2)/2)²"; on "two" the vertex rings. Right: the stretch leaves the vertex at 0, the slide takes it to (1, 0); rows "(x/2)²", "((x − 1)/2)²"; on "one" the vertex rings. Verdict chip "same axis: order matters". On "But moves on different axes" both plots reset; left queue "right 1" (teal) then "× 2 vertical" (amber); right the reverse. Both run; on "curve" both images land on the same ink curve and a dashed outline of each overlays the other exactly, row under both "2(x − 1)²" (44 px), verdict chip "different axes: same curve" (green outline), hand tag "different axes: same curve". Grey chip at the side: "w27: composite functions, order usually matters".

### 4. the standard order: y = k f(a(x + b)) + c
> So we fix an order. On each axis, stretch first, then slide. Here's the form you'll use from now on, and again in Year 12, y equals k, f of a, bracket x plus b, plus c. Build it from y equals f of x, one replacement at a time. Replace x by a x, a horizontal dilation by a factor of one over **a**. Then replace x by x plus b, a slide left by **b**. Every x is replaced, so x plus b goes inside the bracket, and a stays outside it. If b is negative, the slide goes right. Outside, multiply by k, a vertical dilation by a factor of **k**, and then add c, a slide up by **c**. A negative a or k also flips the graph. To read a rule, take a out of the bracket first, so the slide comes from x **itself**.

Visual: stage change to the build panel (`StudioTransformPanel`, the Year 12 t01 panel, on y = x²): the plot at the left (1,000 × 640 px, x −6 to 4, y −6 to 4) with y = x² as a dashed ghost; at the right the four sliders k (amber), a (blue), b (teal), c (violet) with 52 px value badges and a readout board (44 px) with non-trig rows "horizontal factor 1/a", "slide left b", "vertical factor k", "slide up c". The equation strip at the top (52 px) builds term by term, the replaced part glowing (`ExpressionSlot`): "y = f(x)". On "a" (first, "one over a") the strip reads "y = f(ax)", the a slider runs 1 → 2 and the curve squashes, readout "horizontal factor ½". On "b" the strip reads "y = f(a(x + b))" with the bracket drawing around x + b inside the a, hand tag "a × x first, then x + b"; the b slider runs 0 → 3 and the curve slides left 3, readout "slide left 3". On "If b is negative" the slider dips to −2 and back (grey tag "b < 0: right"). On "k" the strip reads "y = k f(a(x + b))", the k slider runs 1 → −1 through 0 (the flip; labels hidden near 0), readout "vertical factor 1, flipped". On "c" the strip reads "y = k f(a(x + b)) + c", the c slider runs 0 → 2, readout "slide up 2". A grey chip "order: on x, a then b; on y, k then c", hand tag "stretch, then slide". On "itself" a small row writes under the strip: "f(2x − 4) = f(2(x − 2))", hand tag "factor first".

### 5. worked example: write the rule
> Let's write a rule. Start with y equals x squared. Reflect it in the x-axis, dilate it horizontally by a factor of a half, then translate it three left and two up. Reflect, and y equals minus x squared. A factor of a half means replacing x by two x, so y equals minus, two x, all **squared**. Three left means replacing every x by x plus three. The x inside two x becomes x plus three, so y equals minus, two bracket x plus three, all squared. Then up two. So y equals minus, two bracket x plus three, all squared, plus **two**, which is minus four, bracket x plus three, all squared, plus two. The vertex is at minus three, **two**. Writing two x plus three inside is the **slip**. That only slides left one and a half.

Visual: clear change to the g01 board. Task strip (44 px): "Write the equation of y = x² after: a reflection in the x-axis, a horizontal dilation by factor ½, then a translation 3 left and 2 up." Givens card (44 px, left), one line per move with its colour: "reflect in x-axis: k = −1" (amber), "factor ½: a = 2" (blue), "3 left: b = 3" (teal), "2 up: c = 2" (violet). A plot at the right (700 × 560 px, x −6 to 2, y −6 to 4) with y = x² as a ghost; each row applies its move to the curve. Rows (current 52 px, earlier 32 px): "y = −x²"; on "squared" "y = −(2x)²" ("2x" blue, hand tag "factor ½: x → 2x"); "y = −(2(x + 3))²" with "x + 3" teal in a slot replacing the x inside 2x, hand tag "every x replaced"; on "two" (first) "y = −(2(x + 3))² + 2 = −4(x + 3)² + 2" (green frame). On "two" (second) the vertex (−3, 2) rings on the plot. On "slip" a red slip "y = −(2x + 3)² + 2" writes and is crossed, a dashed grey ghost of it landing with its vertex at −1.5, caption "2x + 3: only left 1.5".

### 6. worked example: read the rule
> Now go the other way. Describe the transformations from y equals f of x to y equals three f of, two x minus four, plus five, and find where the point two, four goes. Take the two out of the bracket first, so two x minus four is two, bracket x minus **two**. Horizontally, that's a squash by a factor of a half, then a slide right two. Vertically, a stretch by a factor of three, then a slide up five. Follow the point. Its x, two, halves to one, then slides to **three**. Its y, four, triples to twelve, then rises to **seventeen**. So two, four goes to three, seventeen. Reading two x minus four as a slide right four is the **slip**. Factor first.

Visual: clear change to the g01 board. Task strip (44 px): "Describe the transformations from y = f(x) to y = 3f(2x − 4) + 5, and find the image of (2, 4)." Equation strip (52 px): "y = 3f(2x − 4) + 5" (3 amber, + 5 violet, the inside in a dashed grey slot). On "two" (first, "bracket x minus two") the inside rewrites "2(x − 2)" (2 blue, − 2 teal), hand tag "factor first"; givens card (44 px): "k = 3, a = 2, b = −2, c = 5". Rows (52 px): "on x: factor ½, then right 2" (blue, teal), hand tag "½ then +2"; "on y: factor 3, then up 5" (amber, violet), hand tag "×3 then +5". A plot at the right (x −1 to 5, y −1 to 19) with the point (2, 4). On "three" the point's x halves to 1 (blue arrow) and slides to 3 (teal arrow), readout "x: 2 → 1 → 3". On "seventeen" its y triples to 12 (amber arrow) and rises to 17 (violet arrow), readout "y: 4 → 12 → 17"; framed answer (green) "(2, 4) → (3, 17)". On "slip" a red slip "2x − 4: right 4" writes and is crossed, caption "factor: 2(x − 2), right 2". A grey check row "x = 3: inside 2(3 − 2) = 2 ✓".

### 7. memory aid
> Here's the summary. On each axis, stretch, then slide. To read a rule, factor the inside first, so the slide comes from x itself. Inside, on x, it's the opposite. Outside, on y, it's as **written**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the oven's two bars, the 32 stretching to 57.6, beside the panel's four sliders. Main line, hand font 56 px: "Stretch, then slide, on each axis. Factor the inside first." On "written" the key line, 40 px: "Inside: on x, the opposite. Outside: on y, as written." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The graph of y equals x squared is dilated vertically by a factor of three, then translated two units down. A second copy is translated two units down first, then dilated vertically by a factor of three. Find both equations, and the vertex of each. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The graph of y = x² is dilated vertically by a factor of 3 from the x-axis and then translated 2 units down. A second copy of y = x² is translated 2 units down first and then dilated vertically by a factor of 3. Find both equations and the vertex of each." The full question stays on screen. Picture slot: empty axes, x −3 to 3, y −7 to 5, with y = x² as a dashed ghost. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> First copy, stretch to three x squared, then down two. That's three x squared minus two, with vertex zero, minus **two**. Second copy, down two gives x squared minus two, then the stretch triples every height. That's three x squared minus six, with vertex zero, minus **six**. The stretch stretched the slide. Saying both are three x squared minus two is the **slip**.

Visual: the card shrinks to the top (30 px). Two small tracers on the picture. Rows (44 px): "3x², then 3x² − 2"; on "two" "vertex (0, −2)" (green frame). "x² − 2, then 3(x² − 2) = 3x² − 6"; on "six" "vertex (0, −6)" (green frame), the slide of −2 stretching to −6 along an amber arrow. On "slip" a red slip "both: 3x² − 2" writes and is crossed, caption "slide first: it gets stretched". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The graph of y equals root x is reflected in the y-axis, then translated four units to the right. Write the equation, and state its domain. A student translates first, then reflects. Write the student's equation and its domain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph of y = √x is reflected in the y-axis and then translated 4 units to the right. (a) Write the equation and state its domain. (b) A student translates first and then reflects. Write the student's equation and its domain." Picture slot: empty axes, x −8 to 8, y −1 to 4, with y = √x as a dashed ghost. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Reflect first, root of minus x. Then replace every x by x minus four, giving root of minus, bracket x minus four, which is root of four minus x. The domain is x less than or equal to **four**. The student gets root of x minus four, then root of minus x minus four, with domain x less than or equal to minus **four**. Writing root of minus x minus four for the first one is the **slip**.

Visual: the card shrinks to the top. Rows (44 px): "(a) √(−x) → √(−(x − 4)) = √(4 − x)"; on "four" (first) "domain x ≤ 4" (green frame), the ghost flipping (blue) then sliding right 4 (teal) on the picture. "(b) √(x − 4) → √(−x − 4)"; on "four" (second) "domain x ≤ −4" (green frame), a second curve drawing in grey. On "slip" a red slip "(a) y = √(−x − 4)" writes and is crossed, caption "replace every x: −(x − 4)". Hold about 1 s.

### 12. handoff
> Now we can build and read a rule. Next, we track what happens to a graph's features. A team orders custom caps, with a ninety dollar set-up fee and twelve dollars a cap. The average cost per cap is ninety over n, plus twelve. That's y equals one over x, stretched by ninety and slid up twelve. Order more caps and the average drops. But can it ever reach twelve dollars? Where does the asymptote **go**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear. On "custom caps" the caps plate `ma11-team-caps-v1.png` (480 px wide) arrives at the left with a coded order card "set-up $90 · $12 a cap". On "ninety over n" a plot (900 × 600 px, n 0 to 60, A 0 to 60) draws "A = 90/n + 12" for n ≥ 1; on "one over x" the parent y = 1/x shows as a dashed grey ghost and the row "1/x: stretch × 90, then up 12" writes (× 90 amber, up 12 violet). On "drops" a rider runs down the curve with a readout "n = 10: $21", "n = 30: $15". On "go" a dashed line A = 12 draws with "?" on it; chips "can the average reach $12?", "where do the asymptotes go?", "Next: tracking features" and "?". Hold about 2 s. This is g05's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Same axis: order matters. Different axes: either order.
- y = k f(a(x + b)) + c: on x, factor 1/a, then slide left b.
- On y: factor k (k < 0 also flips), then slide up c.
- Factor the inside first: f(2x − 4) = f(2(x − 2)), factor ½ then right 2.
- Replace every x: 3 left in f(2x) gives f(2(x + 3)).

Memory aid (framed card, right side, as in scene 7): *Stretch, then slide, on each axis. Factor the inside first.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and g05's opening frame.

## Teaching checks

- **Does it explain causes?** Why the oven's swapped order is wrong: the multiplying stretches the 32 (1). Why a stretch after a slide changes the graph: the stretch acts on the slide too (2, 3). Why moves on different axes agree: neither touches the other's coordinate (3). Why the form puts x + b inside the a: every x is replaced, after x has become ax (4, 5). Why to factor first: the slide is read from x itself (4, 6).
- **Misconceptions addressed:** "order never matters" (2); "order always matters" (3); the slide read from the inside number (6 crossed); replacing only part of the inside (5 crossed); slide-then-stretch when building a rule (A1 crossed, A2 crossed); a negative coefficient's flip (4, 5).
- **Visual standard, item by item:** 1 the painted oven from the first frame (g03's frame), its bars returning in 2 and 7; 2 a new stage every 40 to 60 s; 3 two tracers with swapped queues, the build panel with live readouts, the point carried in four moves; 4 fixed roles (k amber, a blue, b teal, c violet, as Year 12 t01); 5 large type; 6 hand tags; 7 g01 boards in 5 and 6; 8 framed card and five bullets; 9 the stretched slide on the oven bar and the separating vertices.
- **One idea at a time:** order on one axis (2), sideways and across axes (3), the standard form (4), building (5), reading (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 28 s.
- **Avoided double teaching:** g01 to g03's single moves are recalled in a phrase; w27's composition is a grey chip.
- **Syllabus coverage:** `ci063bd03f` (1 to 3, A1, A2; key note 1); `cid4fd3807`, function rule (4, 5, A1, A2; key notes 2, 3, 5) and describing the transformations (6; key notes 2 to 4); the graph's features are g05's.
- **Out of scope by design:** domain, range, intercepts, asymptotes and discontinuities (g05); trigonometric functions (Year 12).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "The graph of y = x² is dilated vertically by a factor of 3 from the x-axis and then translated 2 units down. A second copy of y = x² is translated 2 units down first and then dilated vertically by a factor of 3. Find both equations and the vertex of each."
Model answer: first: y = 3x² − 2, vertex (0, −2). Second: y = 3(x² − 2) = 3x² − 6, vertex (0, −6). Classic mistake (crossed): "both are 3x² − 2".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "The graph of y = √x is reflected in the y-axis and then translated 4 units to the right. (a) Write the equation and state its domain. (b) A student translates first and then reflects. Write the student's equation and its domain."
Model answer: (a) y = √(−(x − 4)) = √(4 − x), domain x ≤ 4. (b) y = √(x − 4), then y = √(−x − 4), domain x ≤ −4. Classic mistake (crossed): "(a) y = √(−x − 4)".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Oven | 1.8 × 180 + 32 = 356; (180 + 32) × 1.8 = 381.6; 25.6 hotter; 32 → 57.6 | 1, 2 |
| Vertical pair | 2x² + 1, vertex (0, 1); 2x² + 2, vertex (0, 2) | 2 |
| Horizontal pair | ((x − 2)/2)², vertex 2; ((x − 1)/2)², vertex 1 | 3 |
| Different axes | 2(x − 1)² either order | 3 |
| Panel | a 1 → 2; b 0 → 3 (dip to −2); k 1 → −1; c 0 → 2; f(2x − 4) = f(2(x − 2)) | 4 |
| Site Q9 | −4(x + 3)² + 2, vertex (−3, 2); slip −(2x + 3)² + 2, vertex −1.5 | 5 |
| Site `we-ct-2` | 2(x − 2); (2, 4) → (3, 17); 2 → 1 → 3; 4 → 12 → 17 | 6 |
| A1 | 3x² − 2, (0, −2); 3x² − 6, (0, −6) | 8, 9 |
| A2 | √(4 − x), x ≤ 4; √(−x − 4), x ≤ −4 | 10, 11 |
| Handoff | A = 90/n + 12; n = 10: $21; n = 30: $15 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `g-designs/verify.py`, run with `python -I`); Codex to re-check.

- 1.8 × 180 + 32 = 356; 1.8 × 212 = 381.6; 381.6 − 356 = 25.6; 1.8 × 32 = 57.6.
- 2(x² + 1) = 2x² + 2. ((x − 1) with x → x/2)² = (x − 2)²/4, vertex 2; ((x/2) with x → x − 1)² = (x − 1)²/4, vertex 1. 2(x − 1)² both orders: 2x² − 4x + 2.
- −(2(x + 3))² + 2 = −4x² − 24x − 34 = −4(x + 3)² + 2; vertex of −(2x + 3)² + 2 is at x = −3/2.
- (2/2 + 2, 3 × 4 + 5) = (3, 17).
- 3(x² − 2) = 3x² − 6; −(x − 4) = 4 − x.
- 90/10 + 12 = 21; 90/30 + 12 = 15.

## Memory aid check

- **"Stretch, then slide, on each axis. Factor the inside first."** with key line **"Inside: on x, the opposite. Outside: on y, as written."** Original first line; key line shared with g03 and Year 12 t01. Meaning, as said in scene 7: build or read y = k f(a(x + b)) + c with the dilation (and any flip) before the slide on each axis; before reading, write the inside as a number times a bracket around x. Assumptions checked: "stretch" includes squashes and flips (a factor between 0 and 1, or a negative a or k); the order is a convention that makes the letters read directly, and the swapped order gives a different rule (2, 3, A1, A2); moves on different axes may be done in either order (3), so "on each axis" is the condition. It helps a new case: y = f(3x + 6) = f(3(x + 2)): squash to a third, then left 2. Introduced after scenes 2 to 6.
- **Considered, not used:** "Inside out" (the site's phrase; it suggested slide before stretch, S11-G03).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `g-designs/count.py`): 5,821 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the oven bars, the two tracers' queues, the panel's sliders, the point carry) and the 45 s notes scene: about 525 s. Characters per scene (1 to 13): 579, 644, 643, 680, 704, 633, 194, 281, 356, 259, 374, 399, 75. Speech before the notes is about 432 s, under the 570 s cap. Feedback speech: about 27 s and 28 s.

Reserve trims if the voiced take runs long: scene 3's "A sideways slide changes no heights, and a vertical stretch moves nothing sideways" (keep the overlay); scene 5's "which is minus four, bracket x plus three, all squared, plus two" (keep it on screen).

## Scene list and build ids

Lesson key `m-a11g04` (route math-a11-g04). Explainer folder `src/explainer/lessons/math-a11-g04`; build inputs in `docs/production/claude-pm/lessons/math-a11-g04/` (at voicing).

In order (13 scene headings): hook-oven, stretch-stretches-slide, sideways-and-across, standard-form, worked-write-rule, worked-read-rule, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | g03's frame; the oven's two orders as bars |
| 45 to 95 s | 2 | Two tracers: vertical stretch and slide |
| 95 to 150 s | 3 | Two tracers: sideways; then the different-axes pair |
| 150 to 210 s | 4 | Build panel: y = k f(a(x + b)) + c |
| 210 to 265 s | 5 | g01 board: writing a rule |
| 265 to 315 s | 6 | g01 board: reading a rule, the point carried |
| 315 to 335 s | 7 | Framed memory card |
| 335 to 430 s | 8 to 11 | Question cards and countdowns, then feedback |
| 430 to 465 s | 12 | Caps frame for g05 |
| 465 to 510 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: g03's last frame continues into 1; 1 to 2 stage change (two tracers); 2 to 3 clear change (reset); 3 to 4 stage change to the panel; 4 to 5 and 5 to 6 clear changes; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-g04-learning-review.md`, `science_check` = `checks/m-a11-g04-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only): no oven, dial or cap plate exists. `ma11-club-hoodie-v1.png` and `ma11-tshirt-v1.png` are other merchandise anchors (w18, w-strand) and are not reused for the caps.

Need (painted, new): `ma11-oven-dial-v1.png` (briefed in `math-a11-g03.md`; g03's final frame and this video's opening) and `ma11-team-caps-v1.png` (this video's final frame and g05's opening; see the Codex asset brief).

Coded: the °F marks and pointer, recipe and rule cards, bars, both tracers and their step cards, the panel and readouts, the boards, the point carry, the caps order card and cost plot, the countdown, the key notes.

### Studio kit use and additions

Uses: `TransformQueue` (new, listed in `../checks/maths-a11-kit-needs-g-s.md`), `StudioTransformPanel` with a non-trig readout set (kit note: the trig rows amplitude, period and midline are replaced), `FunctionSimulator`, `ExpressionSlot`, `StudioPlot`, `ParameterSlider`, `LiveReadoutBoard`, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`TransformQueue`** (new, as listed): step cards applied one at a time to the current equation and curve, with a swapped twin and a verdict chip ("same axis: order matters" or "different axes: same curve") computed by comparing the two final curves at sample points. Check: the vertical pair's vertices are (0, 1) and (0, 2); the horizontal pair's are 2 and 1; the different-axes pair agree within 1 px.
2. **Stretching bar** (small): a number bar whose segments scale together when a "× 1.8" acts on the whole bar, so an added piece visibly lengthens. Check: segment lengths 324 + 32 and 1.8 × (180 + 32) on a 0 to 400 scale.

## Codex asset brief (Maths A11 G04, team caps; g04's final frame and g05's opening)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-g04.md`, route entry math-a11-g04. Paint after the learning review and maths check pass and root gives the go-ahead, and before the g04 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma11-club-hoodie-v1.png`; no text, numbers, labels, logos, brand names, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-team-caps-v1.png` (1400 × 1000 px): a neat stack of five identical plain baseball caps in one team colour (navy with a white peak edge), the top cap angled slightly towards the viewer, a **blank** front panel on every cap (no badge or embroidery), resting on the top of an open cardboard delivery box. Sidecar JSON: the top cap's front-panel box (four corners), in case code places a coded team initial later.

The oven plate is briefed in `math-a11-g03.md`. Report inspection on the paper background (`#f6f1e7`) at 300 px and 480 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-g04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the crosswalk JSON exactly.
3. Confirm the order is always dilate (with any reflection) then translate on each axis; that no screen or narration reads a translation before a dilation on the same axis (S11-G03); and that the "order matters" pairs really give different graphs (S11-G04).
4. Confirm the form is written y = k f(a(x + b)) + c with k, a, b, c in the roles stated, and that the site's af(b(x − h)) + k does not appear.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, that scene 1 opens on g03's final frame and that scene 12 matches g05's opening frame.

## YouTube metadata (draft)

Title: Combining Transformations: Why Order Matters | Year 11 Maths Advanced

(Title length: 71 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson04.sa.html

Converting 180 °C to Fahrenheit means multiply by 1.8, then add 32. Do it the other way round and the oven runs 26 degrees too hot. Graph transformations work the same way. See why a stretch after a slide on the same axis changes the graph, why moves on different axes can go in either order, how to build a rule in the form y = k f(a(x + b)) + c, and how to read the transformations from a rule by factoring the inside first. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Graph transformations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise that the order in which individual transformations are applied to functions is important"
"Apply reflections, translations and dilations to functions within the scope of the Mathematics Advanced course, excluding trigonometric functions, determine the function rule and the graph of the transformed function, the domain and range of the transformed graph, any intercepts, asymptotes and discontinuities where appropriate, and describe which transformations have been applied"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

Builds on: Translations, reflections and dilations. Next: Tracking domain, range, intercepts and asymptotes.

#Year11Maths #MathsAdvanced #GraphTransformations #HSCScience

## Open decisions

- **1. The second syllabus point is shared (root).** `cid4fd3807` is quoted in full here and in g05; this video covers the function rule and the description, g05 the features (pack ownership). If root prefers each description to quote it only once, keep it in g05 and replace this video's quote with `ci063bd03f` alone.
- **2. Four letters at once (learning review).** Scene 4 introduces k, a, b and c in one scene, each on its own slider and cue. Check that a Year 11 student can follow it at speed; the fallback splits scene 4 into "the x half" and "the y half" with no other change.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from g01 to g03 and w27; check that the oven's stretched 32 makes the graph's stretched slide feel caused; that the commuting pair is read as "different axes", not "this case is lucky"; that scene 4's build makes "x + b inside the a" a consequence of replacing every x; that scene 6's factoring is seen before attempt 2 needs "replace every x"; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
