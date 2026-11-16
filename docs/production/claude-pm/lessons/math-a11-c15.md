# Maths A11 C15: How do we sketch y = f′(x) from the graph of y = f(x)? Zeros under the flat points, sign from rising or falling, size from steepness, the degree dropping by one, and a break at a corner (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,523 characters by script (see "Narration length estimate"), 13 scene headings, about 503 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: forty-sixth video of Year 11 Mathematics Advanced (2024), outline order 46, Introduction to differentiation (Graphical applications of the derivative). Pre-design pack: `../pre-design/maths-a11/math-a11-c15.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson15.sa.html` (`we-1`, a parabola with its minimum at x = 3; `we-2`, a cubic with a maximum at −1 and a minimum at 2; `we-3`, |x|; the "Fixing the skeleton" card; all used). Route entry: `math-a11-c15` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted garage and roller door (c14's brief) and a painted pump track for the handoff (prefix `ma11-`); every graph, tracer and drop line coded.

Owner rules applied: as c01 to c14 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (home: a garage roller door), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Graphical applications of the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci63650902`: "Graph y = f'(x) for a given graph of a function y = f(x)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c14's final frame (the garage plate with the curtain half up, the door's height-time graph, empty axes beneath labelled "how fast is the height changing?" with "?", "Next: sketch y = f′(x)", "?"). Recalls c14 (the sign of f′) and c05 (f′ is a function with its own graph; no derivative at a corner). Teaches: sketching y = f′(x) from the graph of y = f(x) with three questions in order: zeros of f′ under the flat points of f; the sign from rising or falling; the size from steepness, largest where f is steepest, not highest (the door; the site's card); the degree dropping by one for polynomials (site `we-1`, `we-2`); a break in f′ at a corner of f (site `we-3`) (`ci63650902`). Stops at sketching f′. Not taught: physical interpretation of both graphs (c17); classifying stationary points (c16).

## Decisions

- **Anchor: a garage roller door opening, pausing and closing (painted plates, live).** The door rises 2.4 m over 12 s (easing in and out), waits 8 s at the top, then closes the same way. Its height graph gives a rate graph with every feature in order: zeros at the start, along the whole pause and at the end; a positive hump peaking at 0.3 m/s at 6 s; a negative hump dipping to −0.3 m/s at 26 s. The door is highest during the pause, where its rate is zero, which drives "steepest, not highest". Home; the pack's anchor 1. Grep 16 Nov: "roller door" appears once in Year 12 (s05) as part of a truck's description; "garage" in c08 and c09 only as the end of the driveway. The door is a different object and question (noted for root). The pack's swing seat (anchor 2) was rejected: its height is periodic, which is Year 12's sine territory (d05).
- **The model.** Opening: H = 2.4(3s² − 2s³), s = t/12, 0 ≤ t ≤ 12; pause H = 2.4 for 12 ≤ t ≤ 20; closing: H = 2.4(1 − 3s² + 2s³), s = (t − 20)/12, 20 ≤ t ≤ 32. H′ = 0.6s(1 − s) on opening (in m/s, with s as above), so H′(6) = 0.3 m/s; closing −0.3 m/s at 26 s; H′ is continuous (zero at the joins). The narration calls H′ "how fast the height is changing, positive going up" (the word velocity is c18's). Author note a.
- **Simulations (standard item 3).**
  1. **`PairedDerivativePanel` tracer with the door** (scenes 1, 2): the curtain sprite rises, pauses and falls in its doorway (`MaskedPlateRise`) in step with a dot riding the height graph; a violet tangent rides the dot, a slope gauge needle beside it reads the tangent's gradient, and a violet pen draws f′ in the panel below at the same t, the pen's height equal to the gauge. Dashed amber drop lines fall from each flat stretch to the axis below.
  2. **Skeleton-first sketching** (scenes 3, 4): the three questions build the sketch in layers: amber zero dots first, then "+" and "−" bands, then the curve drawn through them by the tracer, which confirms the hand sketch.
  3. **Corner** (scene 5): the tracer rides y = |x|; at the corner the tangent cannot settle (it flips between the two arms) and the pen lifts, leaving open circles.
- **Colour roles (the c01 to c14 roles, root ruling 7).** f and heights **teal**; f′, the tangent and the pen **violet**; zeros of f′ and the drop lines **amber**; "+" and "−" bands the kit's up and down tokens (as c14); time and x blue; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "1 flat → zero", "2 up → above, down → below", "3 steep → far from the axis", "highest ≠ steepest", "degree drops by one", "zeros under flat points", "not under the intercepts", "steepest fall: lowest f′", "no gradient at a corner", "open circles".
- **Stage changes (standard item 2).** The door and the empty axes (1); the paired panel with the tracer (2); paired panels, the parabola (3); paired panels, the cubic (4); paired panels, x³ (5); the corner (6); framed card (7); question cards (8 to 11); the pump track (12); key notes (13).
- **Worked examples (g01 layout, adapted to sketches: task strip, the three-question card as givens, the sketch built stage by stage, a framed answer and a crossed slip).** 2: the door: zeros at 0, 12 to 20 and 32 s; peak 0.3 m/s at 6 s; −0.3 m/s at 26 s; crossed "f′ biggest at the top". 3: site `we-1`: f′ a rising line through (3, 0). 4: site `we-2`: f′ an upward parabola with zeros −1 and 2, lowest at x = ½; crossed "zeros under the x-intercepts". 5: x³ → 3x², touching the axis at 0 (original, linking c14's warning). 6: site `we-3`: |x| → −1 and 1, no value at 0; crossed "a line joining them".
- **Memory aid.** Framed card: "Flat, zero. Up, above. Down, below. Steep, far." Key line: "the three questions, in order".
- **Visual surprise.** The door is still for eight whole seconds at the top, and the violet pen runs flat along the axis for exactly that stretch, while the highest point of the height graph sits directly above it.
- **Site notes (pack section 8).** lesson15's careful wording about isolated zeros of f′ (x³ strictly increasing) agrees with c14; it is not repeated here. No logged error affects this video.
- **Plain meanings at first use.** Sketch ("a graph that shows the shape and key features, not every value"); degree ("the highest power"); corner ("a sharp point where the graph changes direction suddenly", recalled from c04 and c05).
- **Attempts (pack questions).** A1: a cubic with a minimum at −1 and a maximum at 3, decreasing for large x: f′ a downward parabola, zeros −1 and 3, positive between, greatest at x = 1; crossed "an upward parabola". A2: a parabola with vertex (2, 5) opening down through (0, 1): f′(x) = −2x + 4, x-intercept 2, y-intercept 4; crossed "a downward parabola" (copying f).
- **Mistake scene:** none separate. Highest taken for steepest (2 crossed); zeros under the x-intercepts (4 crossed); copying f's shape (A2 crossed); joining across a corner (6 crossed); a zero of f′ assumed to change sign (5); the sign flipped by habit (A1 crossed).
- **Cause chain taught, in order:** (1) f′ is the gradient at each point, so wherever f is flat, f′ is zero (2); (2) rising means positive gradient and falling negative (c14), so the sign of f′ follows the direction of f (2); (3) the steeper f is, the larger the gradient's size, so f′ is furthest from the axis where f is steepest, not where it is highest (2); (4) a parabola's steepness grows at a steady rate, so its f′ is a line, and in general a polynomial's degree drops by one (3, 4); (5) where f flattens but keeps rising, f′ touches zero without changing sign (5); (6) at a corner the two sides have different gradients, so there is no gradient there and f′ breaks (6).
- **Entry knowledge (route):** c14 (f′ > 0 where f rises, < 0 where it falls, = 0 at stationary points); c05 (f′ is itself a function with its own graph; no derivative at a corner); w20 (the shapes of quadratic and cubic graphs); w30 (y = |x|).
- **Handoff (to math-a11-c16, "How do we find and justify the stationary points of a cubic?").** Scene 12: the pump-track plate (`ma11-pump-track-v1.png`) with its coded profile (heights × 2, labelled), chip "y = (x³ − 9x² + 24x)/20 m", chips at the crest "crest: where exactly?" and at the hollow "hollow: where exactly?", a third chip "which is which? prove it"; chips "Next: stationary points of a cubic" and "?". This is c16's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Door: H(12) = 2.4; opening H′ = −t(t − 12)/120 for 0 ≤ t ≤ 12, H′(6) = 0.3 m/s; closing symmetric, H′(26) = −0.3; H′ = 0 at 0, on [12, 20] and at 32. Real doors vary; this is a smooth model.
  (b) `we-1`: f = (x − 3)² gives f′ = 2x − 6, a rising line through (3, 0) (any upward parabola with vertex at 3 gives a rising line through (3, 0)).
  (c) `we-2`: f′ = k(x + 1)(x − 2) with k > 0; vertex of f′ at x = ½ (for k = 1, f′(½) = −9/4).
  (d) `we-3`: |x| → −1 for x < 0, 1 for x > 0, undefined at 0.
  (d2) x³: f′ = 3x², zero only at 0, positive on both sides.
  (e) A1: f′ = −k(x + 1)(x − 3), k > 0, vertex at x = 1 (for k = 1, f′(1) = 4). A2: f = −(x − 2)² + 5 = −x² + 4x + 1, f(0) = 1; f′ = −2x + 4; x-intercept 2, y-intercept 4.
  (f) Pronunciations: "f prime of x"; "y equals f prime of x"; "zero point three metres per second"; "the absolute value of x"; "two, five" for (2, 5); "zero, one" for (0, 1).
  (g) Windows: door height t 0 to 32 s, H 0 to 2.8 m; rate panel H′ −0.4 to 0.4 m/s; parabola x 0 to 6; cubic x −2.5 to 3.5; |x| x −3 to 3, f′ −1.5 to 1.5.

Main question: *A roller door rises, waits and closes. Can you sketch how fast its height changes from its height graph alone? How do we sketch y = f′(x) from the graph of y = f(x)?*
Entry knowledge (c14, c05, w20, w30): the sign of f′; f′ as a function; quadratic and cubic shapes; |x|.
Stops after: zeros, sign, size; degree drops by one; a corner breaks f′. No physical interpretation of both graphs, no classification.
Handoff: math-a11-c16: "a pump track's crest and hollow: exactly where, and which is which?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): f teal; f′, tangent and pen violet; zeros amber; "+" up token, "−" down token; t and x blue; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the door's height, and its rate?
> Here's that roller door. It rolls up over twelve seconds, starting gently, moving fastest halfway, and easing to a stop at the top. It waits there for eight seconds, then rolls back down the same way. Its height over time makes this graph. Now, underneath it, sketch how fast the height is changing at each moment. If the height is f of t, that new graph is f prime of t. There's no equation to differentiate here, just a shape. How do we sketch y equals f prime of x from the graph of y equals f of **x**?

Visual: opens on c14's final frame exactly (the garage plate `ma11-garage-front-v1.png` with the curtain `ma11-roller-door-curtain-v1.png` half up, the height-time graph at the right, empty axes beneath "how fast is the height changing?" with "?", "Next: sketch y = f′(x)", "?"). On the first sentence the "Next" chips fade; the curtain drops to closed, then on "rolls up" it rises over 12 s of graph time (played at 3 ×), pauses, and closes, while a dot rides the height graph in step (teal), axis labels "height (m)" and "t (s)", ticks 0, 12, 20, 32. On "underneath" the empty lower axes brighten, labelled "rate of change of height (m/s)". On "x" heading "Sketching f′ from f".

### 2. three questions, in order
> Use three questions, in order. Each one adds a layer to the sketch. First, where is the graph flat? At the start, during the pause at the top, and at the end, the height isn't changing, so the rate is zero. Those go on the axis **below**. Second, is the graph going up or down? While the door rises, the rate is positive, above the axis. While it falls, the rate is negative, **below**. Third, how steep is it? The door rises fastest halfway up, at six seconds, so the rate graph peaks there, at about zero point three metres per **second**. Coming down, it's just as fast at twenty-six seconds, so the rate dips to minus zero point three. Notice the door is highest during the pause, but its rate there is zero. f prime is biggest where f is steepest, not where f is **highest**.

Visual: stage change: `PairedDerivativePanel` full width (each panel 1,400 × 340 px), the garage as a 260 px badge whose curtain moves with the tracer. A three-question card at the left (40 px): "1 flat → zero", "2 up → above, down → below", "3 steep → far from the axis". Question 1 lights: dashed amber drop lines fall from t = 0, the flat stretch 12 to 20 and t = 32; on "below" (first) amber dots and an amber segment land on the lower axis. Question 2 lights: on "below" (second) a "+" band (up token) over 0 to 12 and a "−" band (down token) over 20 to 32. Question 3 lights: the tracer runs; the violet tangent and slope gauge ride the height curve and the pen draws f′ below; on "second" the pen peaks, readout "0.3 m/s at 6 s" (violet); it runs flat along the axis through the pause and dips to "−0.3 m/s at 26 s". On "highest" a red slip "f′ biggest at the top" writes and is crossed, hand tag "highest ≠ steepest", with the pause stretch and its zero rate ringed together.

### 3. worked example: a parabola
> Now plain graphs. Here's a parabola with its minimum at x equals three. The minimum is flat, so f prime is zero at three. To the left, f falls, so f prime is negative. To the right, f rises, so f prime is **positive**. And moving away from the minimum, the parabola gets steeper at a steady rate, so f prime changes at a steady rate too. That makes f prime a straight line, rising through three, zero. A quadratic f gives a linear f prime. The degree drops by **one**. Check with algebra. If f is x minus three, all squared, then f prime is two x minus six, a rising line that's zero at three.

Visual: clear change: paired panels (each 1,200 × 340 px) with the question card at the left. Task strip, 44 px: "f is a parabola with a minimum at x = 3. Sketch y = f′(x)." Question 1: an amber drop line from (3, f(3)) to an amber dot at (3, 0) below. Question 2: "−" band left of 3; on "positive" "+" band right of 3. Question 3: the tracer rides f and the pen draws a rising line through (3, 0). On "one" framed answer (green): "f′: a rising line through (3, 0)", hand tag "degree drops by one" with "x² → x" beside it. On "Check with algebra" a grey row, 40 px: "f = (x − 3)² → f′ = 2x − 6 = 0 at x = 3 ✓".

### 4. worked example: a cubic
> Here's a cubic with a maximum at x equals minus one and a minimum at x equals two. Two flat points, so f prime has two zeros, at minus one and **two**. f rises, then falls, then rises again, so f prime is positive, then negative, then positive. That's an upward parabola, cutting the axis at minus one and two. Where does f fall most steeply? About halfway between its turns, at x equals a half, so that's where f prime is **lowest**. A cubic gives a quadratic, so the degree drops by one again. In fact f prime must be a number times x plus one, times x minus two, which is exactly that parabola. Putting the zeros of f prime under the x intercepts of f is the slip. They go under the flat **points**.

Visual: the panels clear and redraw. Task strip: "A cubic f has a maximum at x = −1 and a minimum at x = 2. Sketch y = f′(x)." Question 1: drop lines from the two turns; on "two" amber dots at (−1, 0) and (2, 0), hand tag "zeros under flat points". Question 2: bands "+ − +". Question 3: the tracer runs and the pen draws an upward parabola; on "lowest" its vertex at x = ½ rings, hand tag "steepest fall: lowest f′". On "In fact" a grey row, 40 px: "f′ = k(x + 1)(x − 2), k > 0". Framed answer (green): "f′: an upward parabola, zeros −1 and 2, lowest at x = ½". On "points" grey dashed lines from f's three x-intercepts drop to the axis and a red slip "zeros under the x-intercepts" writes and is crossed, hand tag "not under the intercepts".

### 5. a flat spot that keeps rising
> What if a graph flattens but doesn't turn? Here's y equals x cubed. It rises, flattens for an instant at the origin, then keeps on rising. Question one: it's flat at zero, so f prime is zero there. Question two: it's rising on both sides, so f prime is above the axis on both sides. So the graph of f prime just touches the axis at zero and goes straight back **up**. Question three: x cubed gets steeper and steeper as you move away from zero, in either direction, so f prime climbs on both sides. That's an upward parabola sitting on the axis, which is three x squared, just as the power rule **says**. So a zero of f prime doesn't always mean its sign changes.

Visual: clear change: paired panels, y = x³ above (x −1.6 to 1.6, teal), the question card at the left. Question 1: an amber drop line from the origin to an amber dot at (0, 0) below. Question 2: "+" bands on both sides of 0 (up token), hand tag "rising both sides". On "up" the tracer runs through the origin and the pen draws f′ touching the axis at 0 and rising again, hand tag "touches, doesn't cross". Question 3: the slope gauge swings steep, flat, steep. On "says" a grey chip "c07: d/dx(x³) = 3x² ✓" and the pen's curve labels "3x²" (violet).

### 6. a corner
> One more shape. Suppose the door had jerked into motion at full speed, with no easing. Its height graph would have a sharp corner, and its rate would jump. The simplest corner is y equals the absolute value of x. To the left of zero, it's a line with gradient minus one. To the right, the gradient is one. So f prime is minus one, then **one**. At zero, the two sides disagree, so there's no gradient at the corner. The graph of f prime is two flat rays, with open circles at x equals **zero**. Joining them with a line through the corner is the **slip**.

Visual: clear change: paired panels, y = |x| above (x −3 to 3). On "jerked" a 300 px inset of a height graph with a sharp corner at the start and its rate graph jumping from 0 to a flat value. Task strip: "Sketch the derivative of f(x) = |x|." The tracer rides the left arm, the pen drawing a flat ray at −1; on "one" it jumps to the right arm, the pen drawing a flat ray at 1. At the corner the tangent flips between the two arms without settling, hand tag "no gradient at a corner"; on "zero" open circles at (0, −1) and (0, 1), hand tag "open circles". Framed answer (green): "f′(x) = −1 for x < 0, 1 for x > 0; no value at 0". On "slip" a red slip line from (−0.5, −1) to (0.5, 1) writes and is crossed.

### 7. memory aid
> Here's the summary: the three questions, in order. Flat on f gives zero on f prime. Going up gives above the axis, and going down gives below. And steep gives far from the **axis**. Ask them in that order, every time, and the sketch builds itself.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the door's two graphs, small, with the pause stretch and its flat pen line. Main line, hand font 60 px: "Flat, zero. Up, above. Down, below. Steep, far." On "axis" the key line, 40 px: "the three questions, in order". Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A cubic f has a minimum at x equals minus one and a maximum at x equals three, and f decreases for large x. Describe the graph of y equals f prime of x, including where it's positive and where it's greatest. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A cubic f has a minimum at x = −1 and a maximum at x = 3, and f decreases for large x. Describe the graph of y = f′(x), including where it is positive and where it is greatest." The full question stays on screen. Picture: empty paired axes, x −3 to 5, no curves. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Two flat points, so f prime has zeros at minus one and **three**. Between them, f rises from its minimum to its maximum, so f prime is positive there, and negative outside. That's a downward **parabola**. f rises most steeply halfway between, at x equals one, so that's where f prime is **greatest**. An upward parabola, drawn out of habit, is the **slip**.

Visual: the card shrinks to the top (30 px). On the picture: on "three" amber dots at −1 and 3; bands "− + −"; on "parabola" a violet downward parabola through the dots; on "greatest" its vertex at x = 1 rings (green frame "greatest at x = 1"), with a faint teal sketch of f above for reference. On "slip" a red upward parabola writes and is crossed, caption "f rises between: f′ > 0 there". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The graph of f is a parabola with vertex two, five. It opens downward and passes through zero, one. Sketch y equals f prime of x, giving its intercepts. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph of f is a parabola with vertex (2, 5) that opens downward and passes through (0, 1). Sketch y = f′(x), giving its intercepts." Picture: the parabola drawn (x −1 to 5) with (2, 5) and (0, 1) marked; empty axes below. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The vertex is flat, so f prime is zero at x equals **two**. In vertex form, f is a times x minus two, squared, plus five. Through zero, one, four a plus five is one, so a is minus one. Then f prime is minus two times x minus two, which is minus two x plus four. It's a falling line with y intercept **four**. Copying the shape of f, as a downward parabola, is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "two" an amber dot at (2, 0) below the vertex; "f = a(x − 2)² + 5; (0, 1): 4a + 5 = 1, a = −1"; "f′(x) = −2(x − 2) = −2x + 4"; on "four" the violet falling line draws, framed labels "x-intercept 2", "y-intercept 4" (green). On "slip" a red downward parabola writes in the lower panel and is crossed, caption "f′ of a parabola is a line". Hold about 1 s.

### 12. handoff
> So a sketch shows the shape of f prime. But exactly where does a curve turn, and how can you prove which turn is which? Here's a pump track, a dirt bike track made of humps and hollows. This section rises to a crest, dips into a hollow, then climbs again, and its profile is a cubic. Where exactly are the crest and the hollow? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the pump-track plate `ma11-pump-track-v1.png` (1,300 px) with its coded profile overlaid (teal, from the sidecar), tag "heights × 2". On "its profile is a cubic" chip, 44 px, "y = (x³ − 9x² + 24x)/20 m"; on "crest" chip "crest: where exactly?" over the crest and "hollow: where exactly?" over the hollow; chip "which is which? prove it". On "next" chips "Next: stationary points of a cubic" and "?". Hold about 2 s. This is c16's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Flat points of f give zeros of f′, directly below them (x³: f′ only touches).
- f rising: f′ above the axis. f falling: f′ below.
- The steeper f, the further f′ from the axis (biggest where steepest, not highest).
- Polynomials: the degree drops by one (quadratic → line, cubic → parabola).
- A corner on f: f′ jumps and has no value there.

Memory aid (framed card, right side, as in scene 7): *Flat, zero. Up, above. Down, below. Steep, far.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c16's opening frame.

## Teaching checks

- **Does it explain causes?** Why zeros under flat points: the gradient there is 0 (2). Why the sign: rising means positive gradient (2, c14). Why size follows steepness: f′ is the gradient's value (2). Why highest is not steepest: the door is still at the top (2). Why a line for a parabola: its steepness changes at a steady rate (3). Why f′ only touches zero for x³: x³ rises on both sides (5). Why a break at a corner: the two sides disagree (6).
- **Misconceptions addressed:** highest taken for steepest (2 crossed); zeros under the x-intercepts (4 crossed); copying f's shape (A2 crossed); joining across a corner (6 crossed); habit over reasoning (A1 crossed).
- **Visual standard, item by item:** 1 the painted garage with a moving curtain from the first frame, returning as a badge that moves with the tracer; 2 a new stage every 35 to 65 s; 3 the paired tracer with slope gauge and pen, the skeleton-first sketch, the corner where the tangent cannot settle; 4 fixed roles (f teal, f′ violet, zeros amber); 5 large type; 6 hand tags; 7 sketch boards in the g01 pattern in 3 to 6; 8 framed card and five bullets; 9 the pen running flat along the axis for the whole pause under the highest stretch.
- **One idea at a time:** the three questions on the door (2), a parabola (3), a cubic (4), a flat spot (5), a corner (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 27 s.
- **Avoided double teaching:** the sign of f′ (c14) is recalled as question 2 in one sentence; the corner's missing derivative (c05) is recalled, not re-taught; vertex form (w-strand) is used in A2's feedback.
- **Syllabus coverage:** `ci63650902` (2 to 6, A1, A2; key notes 1 to 5).
- **Out of scope by design:** interpreting both graphs physically (c17); classifying stationary points (c16).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "A cubic f has a minimum at x = −1 and a maximum at x = 3, and f decreases for large x. Describe the graph of y = f′(x), including where it is positive and where it is greatest."
Model answer: f′ is a downward parabola with x-intercepts −1 and 3, positive between them and negative outside. It is greatest midway, at x = 1, where f rises most steeply. Classic mistake (crossed): "an upward parabola".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "The graph of f is a parabola with vertex (2, 5) that opens downward and passes through (0, 1). Sketch y = f′(x), giving its intercepts."
Model answer: f(x) = −(x − 2)² + 5, so f′(x) = −2x + 4: a falling line with x-intercept 2 (under the vertex) and y-intercept 4. Classic mistake (crossed): "a downward parabola for f′".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Door | 2.4 m; up 12 s; pause 8 s (12 to 20 s); down 12 s (to 32 s); peak rate 0.3 m/s at 6 s; −0.3 m/s at 26 s | 1, 2 |
| `we-1` | minimum at 3; f′ rising line through (3, 0) | 3 |
| `we-2` | max −1, min 2; f′ zeros −1, 2; lowest at ½ | 4 |
| x³ | f′ = 3x², touches 0 at 0 | 5 |
| `we-3` | |x|: −1, 1; none at 0 | 6 |
| A1 | zeros −1, 3; positive between; greatest at 1 | 8, 9 |
| A2 | a = −1; f′ = −2x + 4; intercepts 2 and 4 | 10, 11 |
| Handoff | y = (x³ − 9x² + 24x)/20 m (no stationary points stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- Door opening: H = (12/5)(3s² − 2s³), s = t/12: H(12) = 12/5 = 2.4; H′ = −t(t − 12)/120; H′(6) = 3/10.
- (x − 3)²: f′ = 2x − 6, zero at 3.
- x³: f′ = 3x²; values 3, 0, 3 at −1, 0, 1.
- f′ = (x + 1)(x − 2): zeros −1, 2; vertex at ½ (value −9/4 for k = 1).
- f′ = −(x + 1)(x − 3): vertex at 1 (value 4 for k = 1).
- f = −(x − 2)² + 5 = −x² + 4x + 1; f(0) = 1; f′ = 4 − 2x; zero at 2; f′(0) = 4.

## Memory aid check

- **"Flat, zero. Up, above. Down, below. Steep, far."** Original, compressing the site's "Fixing the skeleton" card. Meaning, as said in scene 6: at every flat point of f, f′ = 0; where f rises f′ > 0, where it falls f′ < 0; the steeper f, the further f′ is from the axis. Assumptions checked: "up" means as x increases; f differentiable except at stated corners (where f′ has no value); "far" is the size of f′, not its sign. It helps a new case: a quartic W shape gives a cubic f′ with three zeros under its three turns. Introduced after scenes 2 to 6.
- **Considered, not used:** "Zeros, signs, size" (accurate but abstract; the card's version names what to look for on f).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,523 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the door's run, the tracer's passes) and the 45 s notes scene: about 503 s. Characters per scene (1 to 13): 502, 764, 585, 690, 655, 543, 243, 240, 341, 184, 361, 340, 75. Speech before the notes is about 410 s, under the 570 s cap. Feedback speech: about 26 s and 27 s.

Reserve trims if the voiced take runs long: scene 6's first three sentences (keep the inset); scene 4's degree sentence; scene 5's last sentence.

## Scene list and build ids

Lesson key `m-a11c15` (route math-a11-c15). Explainer folder `src/explainer/lessons/math-a11-c15`; build inputs in `docs/production/claude-pm/lessons/math-a11-c15/` (at voicing).

In order (13 scene headings): hook-roller-door, three-questions, example-parabola, example-cubic, flat-spot, corner, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | c14's frame; the door runs |
| 40 to 110 s | 2 | Paired tracer: the door's rate |
| 110 to 145 s | 3 | Paired panels: the parabola |
| 145 to 195 s | 4 | Paired panels: the cubic |
| 195 to 240 s | 5 | Paired panels: x³ |
| 240 to 285 s | 6 | The corner |
| 285 to 301 s | 7 | Framed memory card |
| 301 to 410 s | 8 to 11 | Question cards and countdowns, then feedback |
| 410 to 440 s | 12 | The pump track |
| 440 to 485 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c14's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 panels redraw; 4 to 5 panels redraw; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c15-learning-review.md`, `science_check` = `checks/m-a11c15-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no pump-track plate exists; the garage and curtain are c14's brief.

Need (painted, new; see the Codex asset brief): `ma11-pump-track-v1.png` with its profile sidecar (this video's handoff and c16). Reused: `ma11-garage-front-v1.png`, `ma11-roller-door-curtain-v1.png` (c14's brief).

Coded: the height and rate graphs, tracer, tangent, slope gauge, pen, drop lines, bands, the corner inset, the profile overlay, every row, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `PairedDerivativePanel`, `MaskedPlateRise`, `FunctionRider`, `SignStrip` (bands), `StudioPlot`, `TaskStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Slope gauge and pen on `PairedDerivativePanel`**: a needle beside the rider whose reading is the tangent's gradient and equals the pen's height below; the pen lifts where f′ is undefined (open circles). Check: at t = 6 the gauge and pen read 0.3; along 12 ≤ t ≤ 20 the pen is on the axis.
2. **Piecewise model support** for the door (three pieces with matching values and zero slopes at the joins).

## Codex asset brief (Maths A11 C15, a pump track; opens c16)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c15.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c15 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-pump-track-v1.png` (2600 × 1100 px): one section of a packed-dirt pump track seen exactly side-on (front elevation), with low grass on either side: from the left the track rises to a rounded crest, dips into a hollow, then climbs a longer rise to the right. The track's top edge must follow the profile y = (x³ − 9x² + 24x)/20 m for 0.5 ≤ x ≤ 5 m with heights drawn at twice the horizontal scale (crest at x = 2 m, 1.0 m high; hollow at x = 4 m, 0.8 m high; ends at 0.49 m and 1.0 m). No bike, no rider.

Sidecar JSON (`ma11-pump-track-v1.json`): the pixel origin (x = 0, y = 0), pixels per metre horizontally and vertically (vertical = 2 × horizontal), and a polyline of the painted top edge every 0.25 m, so the coded profile can be checked against it (tolerance 4 px). Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, an overlay of the formula curve on the painted edge, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c15-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the door model's rate is continuous, zero through the pause, and peaks at ±0.3 m/s at 6 s and 26 s.
4. Confirm every sketched f′ has its zeros under flat points, its sign from rising or falling, and its extreme value under f's steepest point.
5. Confirm the word "velocity" is not used (c18 introduces it).
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c14's final frame.

## YouTube metadata (draft)

Title: Sketching the Graph of f′(x) From the Graph of f(x) | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson15.sa.html

A roller door rises, waits at the top, then closes. From its height graph alone, can you sketch how fast its height changes? Use three questions in order (where is it flat, is it going up or down, how steep is it) to sketch y = f′(x), see why f′ is biggest where f is steepest, not highest, why the degree drops by one, and why a corner breaks the graph of f′. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Graph y = f'(x) for a given graph of a function y = f(x)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Increasing, decreasing and stationary. Next: Stationary points of a cubic.

#Year11Maths #MathsAdvanced #GraphingTheDerivative #HSCScience

## Open decisions

- **1. Near context with c09's garage (root).** c09's driveway ends at a garage (not shown as a door); this video's anchor is the roller door's motion. Judged distinct.
- **2. Pump-track vertical exaggeration (root).** The profile is drawn with heights × 2 (labelled), as c09's driveway was, so the 0.2 m dip between crest and hollow reads at video size.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from c14 and c05; check that the three questions are applied in order on each example, that "steepest, not highest" lands at the pause, that A2's vertex-form step is heard rather than skipped, and that the corner inset links back to the door), then the Codex maths check and error check, then voicing and a build to grade A.
