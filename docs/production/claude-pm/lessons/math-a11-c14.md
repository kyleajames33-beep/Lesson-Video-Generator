# Maths A11 C14: How does the sign of f′(x) show increasing, decreasing and stationary? f′(c) > 0, f′(c) < 0 and f′(c) = 0 at a point, solving f′(x) > 0 for where a function increases, and why a stationary point need not be a turn (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,560 characters by script (see "Narration length estimate"), 14 scene headings, about 505 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: forty-fifth video of Year 11 Mathematics Advanced (2024), outline order 45, Introduction to differentiation (Graphical applications of the derivative). Pre-design pack: `../pre-design/maths-a11/math-a11-c14.md` (brief 243). Site lessons (read through the pack's quotations, read only): `introduction-to-differentiation/lesson10.sa.html` (`we-1`, x² − 4x + 3, and `we-2`, x³ − 3x², both with their numbers) and `lesson08.sa.html` (the stationary-point card). Route entry: `math-a11-c14` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted beach (c13's brief) and a painted garage with a roller door for the handoff (prefix `ma11-`); every graph, tangent and sign strip coded.

Owner rules applied: as c01 to c13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (travel and leisure: a beach crowd over a summer's day, counts only), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Graphical applications of the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `cie435d18f`: "Interpret f(x) as increasing at x = c when f'(c) > 0 and decreasing at x = c when f'(c) < 0"
- `cief55e727`: "Describe the behaviour of a function at a point as stationary when the tangent at the point is parallel to the x-axis, and recognise that f(x) is stationary at x = c when f'(c) = 0"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c13's final frame (the beach plate, the counter "people on the beach", the crowd-time graph with "10 am: growing?", "4 pm: shrinking?", "neither?", "Next: the sign of f′", "?"). Recalls c05 (f′(c) is the tangent's gradient at x = c) and w18 (where a quadratic is positive or negative). Teaches: increasing at x = c when f′(c) > 0 and decreasing when f′(c) < 0, in the syllabus's pointwise wording (`cie435d18f`); stationary when the tangent is parallel to the x-axis, f′(c) = 0 (`cief55e727`); where a polynomial increases or decreases by solving f′(x) > 0 or < 0, with the stationary x-values excluded from the inequalities (the beach; site `we-1` and `we-2`); a stationary point need not be a turn (x³ at 0, a forward reference). Stops at signs and intervals. Not taught: classifying stationary points with a slope table (c16); sketching f′ (c15); the second derivative (Year 12).

## Decisions

- **Anchor: the crowd on a beach over a summer's day (painted plate, counts only, live).** N(t) = 40 + 300t − 30t² people, t hours after 8 am, 0 ≤ t ≤ 10. N′(t) = 300 − 60t people per hour: +180 at 10 am (growing), 0 at 1 pm (stationary, 790 people, the busiest moment), −180 at 4 pm (shrinking, though 520 people are still there, which drives the height-versus-slope slip). Travel and leisure; the pack's anchor 2. No people are drawn; the plate's umbrellas and towels show a busy beach and a coded counter shows the number. Grep 16 Nov: "beach" appears in Year 12 only as the setting of t01's lighthouse beam and in plate descriptions; "crowd" only as a layout word. Judged distinct (a crowd count, not a beam). The pack's plane altitude (anchor 1) was not used: cruising is level for a long stretch, which a single polynomial cannot model.
- **The model.** N(t) is a model with the right shape (few at 8 am and 6 pm, busiest at 1 pm); counts are treated as smooth (author note a). "Growing" and "shrinking" are the everyday words for increasing and decreasing; both are tied to the syllabus words on screen.
- **Simulations (standard item 3).**
  1. **Crowd rider** (`FunctionRider` with `ScreenCounter`; scenes 1 to 4): a dot rides the crowd graph from 8 am to 6 pm with its tangent, which is coloured by sign (the kit's up token when rising, down token when falling, amber when flat); the beach counter and a live "N′ = … people per hour" readout update; the tangent flattens at 1 pm and the readout hits 0.
  2. **`SignStrip`** under the graph (scenes 4 to 6): painted progressively by the rider, "+" then "0" then "−", with an amber dot at each stationary x.
  3. **`StudioStackedDerivativePanels`** (scene 6): f above, f′ below on the same x-axis, dashed drop lines at x = 0 and x = 2; where f′ is above the axis the f curve is drawn in the up token, below it in the down token.
- **Colour roles (the c01 to c13 roles, root ruling 7).** Tangents and f′ **violet** (a rising or falling tangent also carries the kit's up or down token as a side tick, so colour never replaces the sign); "+" and increasing the kit's **up** token (`MATH_UP`); "−" and decreasing the **down** token (`MATH_DOWN`); stationary points **amber** dots; time and x blue; heights and counts teal; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "tilts up", "tilts down", "slope, not height", "flat: parallel to the x-axis", "momentarily still", "not counted", "split at the stationary x", "test each side", "agrees with the parabola", "the sign can change here", "flat, then up again".
- **Stage changes (standard item 2).** The beach and its rider (1); the tangent at 10 am and 4 pm (2); the flat tangent at 1 pm (3); the sign strip for the day (4); g01 board, the parabola (5); stacked panels, the cubic (6); x³ (7); framed card (8); question cards (9 to 12); the roller door (13); key notes (14).
- **Worked examples (g01 layout).** 2 to 4: the beach, N′ = 300 − 60t; ±180; 0 at t = 5; growing for 0 ≤ t < 5, shrinking for 5 < t ≤ 10; crossed "N(8) = 520 > 0, so growing". 5: site `we-1`, 2x − 4; f′(1) = −2, f′(3) = 2. 6: site `we-2`, 3x(x − 2); f′(−1) = 9, f′(1) = −3, f′(3) = 9; crossed "f′(1) = −3, so decreasing everywhere". 7: x³, f′ = 3x² ≥ 0.
- **Memory aid.** Framed card: "Read the slope, not the height." Key line: "f′ > 0 up; f′ < 0 down; f′ = 0 flat."
- **Visual surprise.** At 1 pm the riding tangent lies flat, the counter shows its largest number, 790, and the readout shows 0 people per hour: the busiest moment is the one moment the crowd is not changing.
- **Site notes (pack section 8).** lesson10 is inconsistent about stationary points inside intervals (it calls x³ "always increasing" and says "decreasing on (−∞, 3)" across a stationary point); this video uses the syllabus's pointwise wording and gives intervals as inequalities that exclude the stationary x-values (pack decision). lesson10's unsupported claim about losing marks for endpoints is not used. lesson08's second-derivative "Move 2" is not used.
- **Plain meanings at first use.** Increasing at x = c ("as x moves past c, f is going up"); stationary ("momentarily still: neither going up nor down at that instant"); interval ("a stretch of x-values, written as an inequality").
- **Attempts (pack questions).** A1: 2x³ + 3x² − 12x at x = −3, 0, 1: increasing, decreasing, stationary; crossed "f(1) = −7 < 0, so decreasing". A2: x³ − 12x + 1 decreasing for −2 < x < 2; crossed "x < −2 or x > 2".
- **Mistake scene:** none separate. Increasing judged by height (2 crossed; A1 crossed); one test value for every interval (6 crossed); every stationary point a turn (7); stationary x included in an interval (4 tag "not counted"); the inequality's direction (A2 crossed).
- **Cause chain taught, in order:** (1) f′(c) is the tangent's gradient, so its sign says whether the tangent tilts up or down, which is whether f is going up or down as x passes c (2); (2) a flat tangent means gradient 0, so f is momentarily still (3); (3) f′ is itself a function, so where it is positive or negative is found by solving an inequality, and its sign can only change at a zero, the stationary x-values (4 to 6); (4) a zero of f′ need not change its sign, so a stationary point need not be a turn (7).
- **Entry knowledge (route):** c07 (differentiating polynomials); c05 (f′(c) as the tangent gradient at x = c); w18 (where a quadratic is positive or negative from its graph); c06 (the water balloon's flat tangent at the top, a callback).
- **Handoff (to math-a11-c15, "How do we sketch y = f′(x) from the graph of y = f(x)?").** Scene 13: the garage plate (`ma11-garage-front-v1.png`) with the roller-door curtain sprite (`ma11-roller-door-curtain-v1.png`) half up; at the right the door's height-time graph (rise, pause, fall, coded) and empty axes below it labelled "how fast is the height changing?" with "?"; chips "Next: sketch y = f′(x)" and "?". This is c15's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Beach: N(t) = 40 + 300t − 30t², 0 ≤ t ≤ 10 (8 am to 6 pm); N(0) = N(10) = 40; N(2) = N(8) = 520; N(5) = 790; N′ = 300 − 60t; N′(0) = 300, N′(2) = 180, N′(5) = 0, N′(8) = −180, N′(10) = −300. A count is a whole number; the model is smooth.
  (b) `we-1`: f′ = 2x − 4; f′(1) = −2; f′(3) = 2. `we-2`: f′ = 3x(x − 2); f′(−1) = 9, f′(1) = −3, f′(3) = 9; increasing for x < 0 and x > 2, decreasing for 0 < x < 2.
  (c) x³: f′ = 3x²; f′(−1) = 3, f′(0) = 0, f′(1) = 3.
  (d) A1: f′ = 6x² + 6x − 12 = 6(x + 2)(x − 1); f′(−3) = 24, f′(0) = −12, f′(1) = 0; f(−3) = 9, f(0) = 0, f(1) = −7. A2: f′ = 3(x − 2)(x + 2) < 0 for −2 < x < 2.
  (e) Pronunciations: "N of t"; "N prime of t"; "three hundred minus sixty t"; "a hundred and eighty people an hour"; "x cubed minus three x squared"; "minus two less than x less than two".
  (f) Windows: crowd graph t 0 to 10 h (ticks "8 am" to "6 pm"), N 0 to 900; parabola x −1 to 5, y −2 to 8; cubic panels x −1.5 to 3.5, f −5 to 1, f′ −4 to 12; x³ x −1.5 to 1.5.

Main question: *A beach's crowd grows in the morning and shrinks by evening. At a given time, is it growing, shrinking or neither? How does the sign of f′(x) show increasing, decreasing and stationary?*
Entry knowledge (c07, c05, w18): differentiating polynomials; f′(c) as the tangent's gradient; the sign of a quadratic from its graph.
Stops after: increasing, decreasing and stationary at a point; intervals by solving f′(x) > 0 or < 0; a stationary point need not turn. No classification, no sketching f′.
Handoff: math-a11-c15: "a roller door rises, pauses and falls: can we sketch how fast its height changes?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): tangents and f′ violet; "+" up token; "−" down token; stationary amber; time and x blue; counts and heights teal; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: growing, shrinking or neither?
> Here's that beach. Suppose the number of people on it, t hours after eight in the morning, is forty plus three hundred t minus thirty t squared. It's a model, but it has the right shape: a few early swimmers, a busy middle of the day, and an almost empty beach by six. At ten o'clock, is the crowd growing or shrinking? What about at four in the afternoon? And at some moment, it's neither. When is that? The derivative answers all three questions, through its sign. How does the sign of f prime of x show increasing, decreasing and **stationary**?

Visual: opens on c13's final frame exactly (the beach plate `ma11-beach-day-v1.png`, the counter "people on the beach", the small crowd-time graph with "10 am: growing?", "4 pm: shrinking?", "neither?", "Next: the sign of f′", "?"). On the first sentence the "Next" chips fade, the graph grows to 1,000 × 600 px at the right and the plate narrows to 800 px; equation chip, 52 px: "N(t) = 40 + 300t − 30t²" (t blue, N teal), with the tick labels "8 am" to "6 pm". On "a few early swimmers" the rider runs once from 8 am to 6 pm with the counter climbing to 790 and falling to 40, the tangent ticking up, then flat, then down. On "stationary" heading "Up, down or flat: the sign of f′". The chips "growing?", "shrinking?" and "neither?" move to the top right.

### 2. increasing and decreasing at a point
> Remember that f prime of c is the gradient of the tangent at x equals c. If that gradient is positive, the tangent tilts up, so as x moves past c, f is going up. We say f is increasing at x equals c when f prime of c is greater than zero. If the gradient is negative, the tangent tilts down, and f is decreasing at c. For the beach, N prime of t is three hundred minus sixty t, in people per hour. At ten o'clock, t is two, and N prime is a hundred and eighty, so the crowd is growing by a hundred and eighty people an **hour**. At four o'clock, t is eight, and N prime is minus a hundred and eighty, so it's shrinking just as **fast**. There are still five hundred and twenty people there at four, a positive number. Saying it's increasing because N is positive is the slip. Increasing is about the slope, not the **height**.

Visual: stage change: the crowd graph full width (1,400 × 680 px), the plate as a 300 px badge with its counter. A grey chip "c05: f′(c) = gradient of the tangent at x = c". Two small tangent glyphs, 44 px rows: "f′(c) > 0: tilts up → increasing at c" (up token), hand tag "tilts up"; "f′(c) < 0: tilts down → decreasing at c" (down token), hand tag "tilts down". Row, 52 px: "N′(t) = 300 − 60t people per hour" (violet). The rider stops at t = 2: tangent up, readout "N′(2) = +180"; on "hour" the row "10 am: growing at 180 people an hour" (green frame). The rider moves to t = 8: tangent down, readout "N′(8) = −180"; on "fast" "4 pm: shrinking at 180 people an hour" (green frame). On "still five hundred and twenty" the counter reads "520"; on "height" a red slip "N(8) = 520 > 0, so growing" writes and is crossed, hand tag "slope, not height".

### 3. stationary: a flat tangent
> In between, there's a moment when the crowd has stopped growing but hasn't started shrinking. The tangent there is flat, parallel to the x axis, so its gradient is zero. We say f is stationary at x equals c when f prime of c equals zero. For the beach, three hundred minus sixty t equals zero when t is five, at one o'clock. The crowd is seven hundred and ninety people, and for that instant, it's neither growing nor **shrinking**. Stationary means momentarily still, like that water balloon, hanging for an instant at the top of its **flight**.

Visual: the rider moves to t = 5 and stops; its tangent lies flat and turns amber, hand tag "flat: parallel to the x-axis". Rows, 52 px: "f′(c) = 0: stationary at c"; "300 − 60t = 0 → t = 5 (1 pm)"; on "shrinking" the counter reads "790", readout "N′(5) = 0 people per hour" and an amber dot sits on the graph's top, hand tag "momentarily still". On "flight" a 260 px thumbnail of c06's balloon at the top of its flight with its flat violet tangent, grey chip "c06".

### 4. where is it growing?
> Now the whole day. The crowd is growing whenever N prime is positive, so solve three hundred minus sixty t greater than zero. That gives t less than five, so it grows from eight in the morning until one o'clock. It's shrinking when t is greater than five, from one until six. Under the graph, a sign strip shows it: plus before one, zero at one, minus **after**. At one o'clock itself it's stationary, so that moment isn't counted in either **stretch**. Notice that the busiest moment of the day is exactly where the strip changes from plus to minus.

Visual: the rider runs from 8 am to 6 pm again and paints a `SignStrip` under the graph as it goes: "+" (up token) from 0 to 5, an amber dot "0" at 5, "−" (down token) from 5 to 10; on "after" the strip completes. Rows, 44 px: "300 − 60t > 0 ⟺ t < 5: growing for 0 ≤ t < 5 (8 am to 1 pm)"; "300 − 60t < 0 ⟺ t > 5: shrinking for 5 < t ≤ 10 (1 pm to 6 pm)". On "stretch" the amber dot rings and both "<" signs at 5 are circled, hand tag "not counted". On "busiest moment" the counter's "790" and the strip's change point flash together.

### 5. worked example: a parabola
> Here's the same idea without the beach. Where is f of x equals x squared minus four x plus three increasing, and where is it decreasing? f prime of x is two x minus four, which is zero at x equals **two**. That splits the number line in two. The sign of f prime can only change where f prime is zero, so one test value on each side is enough. f prime of one is minus two, so f is decreasing for x less than two. f prime of three is two, so f is increasing for x greater than **two**. And at x equals two, it's stationary.

Visual: clear change to the g01 board with a small graph of y = x² − 4x + 3 at the right (420 px). Task strip, 44 px: "Find where f(x) = x² − 4x + 3 is increasing and where it is decreasing." Rows, 52 px: "f′(x) = 2x − 4"; on "two" (first) "f′(x) = 0 at x = 2" (amber dot on the graph), hand tag "split at the stationary x"; "f′(1) = −2 < 0: decreasing for x < 2" (down token), hand tag "test each side"; on "two" (second) "f′(3) = 2 > 0: increasing for x > 2" (up token), the sign strip "− 0 +" painting under the small graph. Framed answer (green): "decreasing for x < 2; increasing for x > 2; stationary at x = 2".

### 6. worked example: a cubic
> A cubic can change direction twice. Take f of x equals x cubed minus three x squared. f prime of x is three x squared minus six x, which factorises as three x times x minus two. So f is stationary at x equals zero and at x equals **two**. Now for the sign of f prime between them. f prime is an upward parabola crossing the axis at zero and two, so it's positive outside those values and negative between them. Testing minus one, one and three gives nine, minus three and nine, which **agrees**. So f is increasing for x less than zero and for x greater than two, and decreasing between zero and **two**. Testing just one value and assuming the same sign everywhere is the slip. The sign can change at every stationary **point**.

Visual: stage change: `StudioStackedDerivativePanels` (each 1,200 × 330 px) at the right, rows at the left (700 px). Top panel f(x) = x³ − 3x²; bottom panel f′(x) = 3x(x − 2), the same x-axis. Rows, 52 px: "f′(x) = 3x² − 6x = 3x(x − 2)"; on "two" (first) "stationary at x = 0 and x = 2" with dashed amber drop lines joining the panels' points. On "upward parabola" the bottom panel's curve shades above the axis (up token) outside 0 and 2 and below (down token) between, the top curve recolouring to match. Row 44 px: "f′(−1) = 9, f′(1) = −3, f′(3) = 9"; on "agrees" a green tick, hand tag "agrees with the parabola". On "two" (second) framed answer (green): "increasing for x < 0 and x > 2; decreasing for 0 < x < 2". On "point" a red slip "f′(1) = −3, so decreasing everywhere" writes and is crossed, hand tag "the sign can change here" on the two drop lines.

### 7. a stationary point isn't always a turn
> One warning. A stationary point isn't always a turn. f of x equals x cubed has f prime of x equals three x squared, which is zero at x equals zero. But three x squared is positive on both sides, so x cubed keeps rising, and just flattens for an **instant**. Telling turns from flat spots like this is coming soon, for cubics.

Visual: clear change: y = x³ (900 × 600 px) with its rider passing through the origin; the tangent goes up token, flat amber at 0, up token again, hand tag "flat, then up again". Under it a `SignStrip` "+ 0 +". On "instant" the amber dot at the origin rings, grey chip "c16: turns or flat spots".

### 8. memory aid
> Here's the summary. Read the slope, not the height. f prime positive, going up. f prime negative, going down. And f prime zero, flat for that **instant**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the beach curve with its sign strip "+ 0 −" and the flat amber tangent at 1 pm. Main line, hand font 60 px: "Read the slope, not the height." On "instant" the key line, 40 px: "f′ > 0 up; f′ < 0 down; f′ = 0 flat." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. For f of x equals two x cubed plus three x squared minus twelve x, decide whether f is increasing, decreasing or stationary at x equals minus three, x equals zero, and x equals one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "For f(x) = 2x³ + 3x² − 12x, decide whether f is increasing, decreasing or stationary at x = −3, x = 0 and x = 1." The full question stays on screen. Picture slot: an empty three-row table "x = −3", "x = 0", "x = 1". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> f prime of x is six x squared plus six x minus twelve. At minus three, that's twenty-four, which is positive, so f is **increasing**. At zero, it's minus twelve, so f is **decreasing**. At one, it's zero, so f is **stationary**. f of one is minus seven, but calling it decreasing because the height is negative is the slip. It's the slope that **counts**.

Visual: the card shrinks to the top (30 px). Row, 44 px: "f′(x) = 6x² + 6x − 12". Table rows: on "increasing" "x = −3: f′ = 24 > 0: increasing" (up token); on "decreasing" "x = 0: f′ = −12 < 0: decreasing" (down token); on "stationary" "x = 1: f′ = 0: stationary" (amber), the three framed green together. On "counts" a red slip "f(1) = −7 < 0, so decreasing" writes and is crossed, caption "slope, not height". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find the values of x for which f of x equals x cubed minus twelve x plus one is decreasing. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Find the values of x for which f(x) = x³ − 12x + 1 is decreasing." Picture slot: blank axes only. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> f prime of x is three x squared minus twelve, which is three times x minus two, times x plus **two**. f is decreasing where f prime is negative. This upward parabola is negative between its roots, so f is decreasing for minus two less than x less than **two**. Writing x less than minus two or x greater than two is the slip. That's where f is **increasing**.

Visual: the card shrinks to the top. Rows, 44 px: on "two" (first) "f′(x) = 3x² − 12 = 3(x − 2)(x + 2)"; a small sketch of f′ (upward parabola, roots −2 and 2) with the part below the axis shaded (down token); on "two" (second) "decreasing for −2 < x < 2" (green frame). On "increasing" a red slip "x < −2 or x > 2" writes and is crossed, caption "that's f′ > 0". Hold about 1 s.

### 13. handoff
> So the sign of f prime tells us up, down or flat, at every point. What if we drew f prime as a whole graph, not just a sign strip? Here's a garage roller door. It rolls up, pauses at the top, then rolls back down. Its height over time makes a graph. Underneath it, could we sketch how fast that height is changing? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the garage plate `ma11-garage-front-v1.png` (900 px) at the left with the curtain sprite `ma11-roller-door-curtain-v1.png` masked in its opening. On "rolls up" the curtain rises, pauses and comes halfway down; at the right the height-time graph draws in step (rise, flat top, fall), with empty axes beneath labelled "how fast is the height changing?" and a "?". On "next" chips "Next: sketch y = f′(x)" and "?". Hold about 2 s. This is c15's opening frame (the curtain held half up); scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- f′(c) > 0: f increasing at x = c. f′(c) < 0: f decreasing at x = c.
- f′(c) = 0: f stationary at x = c (tangent parallel to the x-axis).
- Where f increases: solve f′(x) > 0. Where it decreases: f′(x) < 0.
- Find the stationary x-values first, then test each stretch between them.
- A stationary point need not be a turn: x³ at x = 0.

Memory aid (framed card, right side, as in scene 8): *Read the slope, not the height.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and c15's opening frame.

## Teaching checks

- **Does it explain causes?** Why the sign of f′: it is the tangent's tilt (2). Why f′ = 0 means stationary: the tangent is flat (3). Why solve an inequality: f′ is a function whose sign we want (4). Why test between stationary x-values: the sign can only change at a zero of f′ (5, 6). Why x³'s flat point is not a turn: f′ keeps its sign (7).
- **Misconceptions addressed:** increasing judged by height (2, A1 crossed); one test value (6 crossed); every stationary point a turn (7); a stationary x inside an interval (4 tag); the inequality's direction (A2 crossed).
- **Visual standard, item by item:** 1 the painted beach from the first frame with a live counter and rider, returning as a badge in 2 to 4; 2 a new stage every 25 to 60 s; 3 the crowd rider with a sign-coloured tangent and readouts, the progressively painted sign strip, the stacked f and f′ panels; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 5 and 6; 8 framed card and five bullets; 9 the busiest moment showing 0 people per hour.
- **One idea at a time:** up and down at a point (2), flat (3), where over the day (4), a parabola (5), a cubic (6), a flat spot that is not a turn (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s and 26 s.
- **Avoided double teaching:** f′(c) as the tangent's gradient (c05), quadratic signs (w18) and differentiating polynomials (c07) are recalled in a phrase or chip; the balloon (c06) is a ten-word callback.
- **Syllabus coverage:** `cie435d18f` (2, 4, 5, 6, A1, A2; key notes 1, 3, 4); `cief55e727` (3, 5, 6, 7, A1; key notes 2, 5).
- **Out of scope by design:** classifying stationary points (c16); sketching f′ (c15).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "For f(x) = 2x³ + 3x² − 12x, decide whether f is increasing, decreasing or stationary at x = −3, x = 0 and x = 1."
Model answer: f′(x) = 6x² + 6x − 12 = 6(x + 2)(x − 1). f′(−3) = 24 > 0: increasing. f′(0) = −12 < 0: decreasing. f′(1) = 0: stationary. Classic mistake (crossed): "f(1) = −7 < 0, so decreasing".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Find the values of x for which f(x) = x³ − 12x + 1 is decreasing."
Model answer: f′(x) = 3x² − 12 = 3(x − 2)(x + 2) < 0 when −2 < x < 2. Classic mistake (crossed): "x < −2 or x > 2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Beach | N(t) = 40 + 300t − 30t², 8 am to 6 pm | 1 |
| Rates | N′ = 300 − 60t; N′(2) = 180; N′(8) = −180; N(8) = 520 | 2 |
| Stationary | t = 5 (1 pm); N(5) = 790; N′(5) = 0 | 3 |
| Intervals | growing 0 ≤ t < 5; shrinking 5 < t ≤ 10 | 4 |
| `we-1` | 2x − 4; x = 2; f′(1) = −2; f′(3) = 2 | 5 |
| `we-2` | 3x(x − 2); x = 0, 2; f′(−1) = 9, f′(1) = −3, f′(3) = 9 | 6 |
| x³ | 3x²; 0 at 0, positive both sides | 7 |
| A1 | 6x² + 6x − 12; 24, −12, 0; f(1) = −7 | 9, 10 |
| A2 | 3(x − 2)(x + 2); −2 < x < 2 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- N(t) = 40 + 300t − 30t²: N(0) = 40, N(2) = 520, N(5) = 790, N(8) = 520, N(10) = 40; N′ = 300 − 60t: 300, 180, 0, −180, −300 at t = 0, 2, 5, 8, 10.
- x² − 4x + 3: f′ = 2x − 4; f′(1) = −2; f′(3) = 2.
- x³ − 3x²: f′ = 3x(x − 2); f′(−1) = 9, f′(1) = −3, f′(3) = 9.
- x³: f′(−1) = 3, f′(0) = 0, f′(1) = 3.
- 2x³ + 3x² − 12x: f′ = 6(x − 1)(x + 2); f′(−3) = 24, f′(0) = −12, f′(1) = 0; f(−3) = 9, f(0) = 0, f(1) = −7.
- x³ − 12x + 1: f′ = 3(x − 2)(x + 2) < 0 ⟺ −2 < x < 2.

## Memory aid check

- **"Read the slope, not the height."** Original. Meaning, as said in scene 8: whether f is increasing, decreasing or stationary at a point depends on the sign of f′ there (the tangent's slope), not on the sign of f (the height). Key line: f′ > 0 up, f′ < 0 down, f′ = 0 flat. Assumptions checked: "up" and "down" mean as x increases; f is differentiable at the point; "flat" is for that instant only (x³). It helps a new case: at 4 pm the crowd is 520 (positive height) but shrinking (negative slope). Introduced after scenes 2 to 7.
- **Considered, not used:** "Plus up, minus down, zero flat" alone (it loses the height-versus-slope warning, the source of A1's slip).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,560 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the rider's runs, the sign strip, the panels) and the 45 s notes scene: about 505 s. Characters per scene (1 to 14): 544, 814, 538, 542, 513, 713, 321, 150, 214, 339, 123, 347, 327, 75. Speech before the notes is about 412 s, under the 570 s cap. Feedback speech: about 25 s and 26 s.

Reserve trims if the voiced take runs long: scene 3's balloon callback (keep the thumbnail); scene 6's "Testing minus one, one and three" sentence (keep the row).

## Scene list and build ids

Lesson key `m-a11c14` (route math-a11-c14). Explainer folder `src/explainer/lessons/math-a11-c14`; build inputs in `docs/production/claude-pm/lessons/math-a11-c14/` (at voicing).

In order (14 scene headings): hook-beach, up-down-at-a-point, stationary, sign-strip-day, example-parabola, example-cubic, flat-not-turn, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 42 s | 1 | c13's frame; the beach and its rider |
| 42 to 108 s | 2 | The tangent at 10 am and 4 pm |
| 108 to 142 s | 3 | The flat tangent at 1 pm |
| 142 to 172 s | 4 | The day's sign strip |
| 172 to 202 s | 5 | g01 board: the parabola |
| 202 to 260 s | 6 | Stacked panels: the cubic |
| 260 to 282 s | 7 | x³'s flat spot |
| 282 to 296 s | 8 | Framed memory card |
| 296 to 395 s | 9 to 12 | Question cards and countdowns, then feedback |
| 395 to 423 s | 13 | The roller door |
| 423 to 468 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c13's last frame continues into 1; 1 to 2 stage change (the graph grows); 2 to 3 the rider moves on; 3 to 4 the rider reruns; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 clear change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c14-learning-review.md`, `science_check` = `checks/m-a11c14-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no garage or roller-door plate exists; the beach is c13's brief.

Need (painted, new; see the Codex asset brief): `ma11-garage-front-v1.png` and `ma11-roller-door-curtain-v1.png` (this video's handoff and c15). Reused: `ma11-beach-day-v1.png` (c13's brief); c06's balloon thumbnail (`ma11-water-balloon-balcony-v1.png`, c05's brief).

Coded: the crowd graph, rider, tangents, counter, readouts, sign strips, stacked panels, every row, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `FunctionRider`, `ScreenCounter`, `LiveReadoutBoard`, `SignStrip`, `StudioStackedDerivativePanels`, `StudioPlot`, `WorkingBoard`, `TaskStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `MaskedPlateRise` (the door curtain in the handoff).

Additions:
1. **Sign-coloured tangent on `FunctionRider`**: the tangent's side tick takes the up token when f′ > 0, the down token when f′ < 0 and amber when |f′| is below a small threshold; the colour change frames are computed from the zeros of f′, not sampled. Check: at t = 5 the tangent is amber and the readout says 0.
2. **Progressive `SignStrip`**: the strip paints behind the rider's x position.

## Codex asset brief (Maths A11 C14, a garage with a roller door; opens c15)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c14.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c14 build (its final frame shows these plates). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-garage-front-v1.png` (2000 × 1600 px): the front of a single brick garage seen straight on, with a rectangular doorway whose opening is fully transparent (code places the door curtain behind it); a roller-door housing box across the top of the opening; a strip of concrete driveway apron at the bottom. The inside of the garage is not painted.
2. `ma11-roller-door-curtain-v1.png` (1500 × 1300 px): the roller-door curtain alone, flat-on, pale grey corrugated steel with horizontal ribs and a bottom rail, sized to fill the doorway exactly.

Sidecar JSON (`ma11-garage-front-v1.json`): the doorway's pixel rectangle and the pixel height of 1 m in the doorway (the opening is 2.4 m high). Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, a composite with the curtain at 0, ½ and full height, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c14-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly.
3. Confirm every interval is an inequality that excludes the stationary x-values, and no interval claims f is increasing or decreasing at a stationary point.
4. Confirm the pointwise wording "increasing at x = c when f′(c) > 0" is used, and no second derivative appears.
5. Confirm no person is drawn on the beach plate or in code.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c13's final frame.

## YouTube metadata (draft)

Title: Increasing, Decreasing and Stationary: The Sign of f′(x) | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson10.sa.html

A beach's crowd grows through the morning and shrinks by evening. At ten o'clock, is it growing or shrinking, and when is it neither? See why f is increasing at x = c when f′(c) > 0, decreasing when f′(c) < 0, and stationary when f′(c) = 0, where the tangent is flat. Solve f′(x) > 0 to find where a function increases, for a parabola and a cubic, and see why a stationary point need not be a turn. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Interpret f(x) as increasing at x = c when f'(c) > 0 and decreasing at x = c when f'(c) < 0"
"Describe the behaviour of a function at a point as stationary when the tangent at the point is parallel to the x-axis, and recognise that f(x) is stationary at x = c when f'(c) = 0"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Choosing the right rule. Next: Sketching the graph of f′.

#Year11Maths #MathsAdvanced #IncreasingDecreasing #HSCScience

## Open decisions

- **1. Up and down tokens (builder).** The sign strip and tangent ticks use the kit's `MATH_UP` and `MATH_DOWN`; if either reads too close to the answer green, the builder keeps "+" and "−" printed on every segment so colour is never the only signal.
- **2. A beach with no people (root).** The plate shows a busy beach through its objects only. If QA finds it eerie, the fallback is the same plate at a slightly greater distance.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from c05, c07 and w18; check that "increasing at a point" is understood as "going up as x passes c", that the 520-but-shrinking slip lands, that intervals exclude the stationary x-values, and that x³ is a clear warning without teaching c16's method), then the Codex maths check and error check, then voicing and a build to grade A.
