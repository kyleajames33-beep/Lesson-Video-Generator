# Maths S12 A10: How do the x-intercepts of a parabola locate its vertex? A foam rocket's two crossings, the y-intercept as c, the midpoint of the x-intercepts, and substituting for the vertex (design)

Status: Revision 1 (18 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`), the w-strand learning-review resolutions (`../checks/m-a11-w01-w31-learning-review-resolution.md`) and root's rulings on the Standard outline (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 12). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,175 characters by script (see "Narration length estimate"), 13 scene headings, about 478 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: tenth video of Year 12 Mathematics Standard (2024), outline order 10, Algebraic relationships. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-a10.md`. Site lesson (read through the pack's quotations, read only): `algebraic-relationships/lesson04.sa.html` (SHA256 `88a40a5aff6c6e61711f564af8c084016ceceaf2e53cdb659c20213eac9dff74`): `we-1` (y = x² − 4x − 5: y-intercept (0, −5), x-intercepts −1 and 5, axis x = 2, vertex (2, −9)) and card 06's midpoint example (x-intercepts 1 and 5, y = −(x − 1)(x − 5), axis 3, vertex (3, 4)) used with their exact numbers; card 06's zero, one or two x-intercepts named in one frame; the true or false item (x-intercepts −3 and 7, axis x = 2) as the graph-only case. Not used: SA 2 and x = −b/(2a) (root ruling 11); factorising as a method (the syllabus reads intercepts "shown on a graph"). Route entry: `math-s12-a10` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; the painted paddock, launcher and foam rocket (from a09's final frame); every graph, bracket and board coded.

Owner rules applied: as a09 (2024 syllabus; plates for real objects, code for graphs; no people; one question; one stage at a time; words before symbols; g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchor (a backyard toy); Australian spelling; no em dashes; "zero point" decimals; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12 Standard 2, Algebraic relationships, Quadratic relationships), quoted from `../../programme/maths-standard-route-inputs-1.json`:

- `ci75131568`: "Identify the x-intercepts and y-intercept of a parabola from a graph"
- `ciea5db2d8`: "Determine the axis of symmetry and vertex of a parabola using the midpoint of the x-intercepts shown on a graph"

Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

**Boundary:** starts from a09's final frame exactly (the paddock strip, the launcher with the foam rocket, coded axes t 0 to 5 s and h 0 to 25 m with the curve drawn and no grid, the crossings "0" and "4" ringed amber, a "?" at the top; chips "Only the crossings are shown: where is the top?", "Next: intercepts and the vertex" and "?"). Recalls a09 (matching pairs, the axis as the middle line, a's sign) and Year 11's y-intercept and substitution (math-s11-l01, f01) in a phrase or grey chip each. Teaches: x-intercepts are where y = 0 and the y-intercept is where x = 0, read from a graph; for y = ax² + bx + c the y-intercept is c; a parabola may have two, one or no x-intercepts (one frame); the two x-intercepts are a matching pair, so the axis is their midpoint, x = (x₁ + x₂) ÷ 2; substitute that x (or read the graph) for the vertex's y-value; state the vertex as a point, a maximum or a minimum. Stops at the axis and vertex from the intercepts. Not taught: what the numbers mean in context, the four question types and valid values (a11a, a11b); factorising or the quadratic formula to find intercepts; x = −b/(2a).

## Decisions

- **Anchor: a foam rocket from a backyard launcher (new painted plates from a09's brief, live).** The rocket is fired straight up from the grass and falls back; its height is modelled by h = −5t² + 20t (metres, seconds). Its graph's two t-intercepts (launch at 0 s, landing at 4 s) are the facts a student sees, and the top is the question; the midpoint (2 s) and the height there (20 m) answer it. A backyard toy, not science (the narration says "modelled by"; no physics is named). Chosen over the pack's firework (a shell that falls back unexploded is an odd, unsafe picture) and the javelin (thrown from hand height, so it does not start on the axis). The pack's garden archway becomes attempt 2. No other Standard or Advanced design uses a foam rocket (grep "foam rocket", "rocket launcher", 18 Nov).
- **Idealising assumptions (author notes, not learner copy).** Launched from ground level, straight up, with g taken as 10 m/s² and no air resistance; real foam rockets leave the tube slightly above the grass and drift. a11b discusses these as limitations.
- **Simulations (standard item 3).**
  1. **Rocket rider** (scenes 1 and 3; `FunctionRider` with `LiveReadoutBoard`): the painted rocket rises and falls beside the graph while a dot rides h(t) and readouts show "t" and "h"; it pauses at the launch and landing crossings.
  2. **Midpoint bracket** (`MidpointBracket`, an `IntervalPicture` mode; scenes 3 to 5): a bracket spans the two x-intercepts, a violet marker slides to the exact middle, steps count equally from each side on a number-line strip, and a dashed axis drops through the marker; the curve's halves flash as mirror images.
  3. **y-intercept probe** (scene 2): a vertical line at x = 0 meets the curve; the meeting value reads out and matches c in the equation, which lights.
- **Colour roles (fixed for a09 to a11b; x-intercepts added).** x-values and the x-intercepts **blue**; y-values and the y-intercept (c) **teal**; the vertex **amber**; the axis of symmetry and the midpoint marker **violet**, dashed; answer **green**; mistake **red**, crossed slips only. (a09's handoff ringed the crossings amber as an unlabelled question; on scene 2's "x-intercepts" they turn blue.)
- **Large type, handwritten voice.** As a09. Hand tags: "y = 0 here", "x = 0 here", "c", "a matching pair", "halfway", "add, then halve", "2 steps each side", "substitute", "keep the sign", "not between them?", "two, one or none", "a point, with both numbers".
- **Stage changes (standard item 2).** a09's frame, then the rocket flight and graph (1); intercept names, the probe and c, with the two, one or none frame (2); the midpoint and substitution on the rocket (3); g01 board, site `we-1` (4); g01 board, card 06 (5); the graph-only case (6); framed card (7); question cards (8 to 11); the meaning frame for a11a (12); key notes (13).
- **Worked examples (g01 layout).** 3: the rocket: axis t = (0 + 4) ÷ 2 = 2; h(2) = −20 + 40 = 20; vertex (2, 20), maximum. 4: site `we-1`: y-intercept (0, −5); x-intercepts −1, 5; axis x = 2; vertex (2, −9), minimum; crossed "(1 + 5) ÷ 2 = 3". 5: site card 06: x-intercepts 1 and 5; axis x = 3; y = −(2)(−2) = 4; vertex (3, 4), maximum; crossed "1 + 5 = 6, so x = 6".
- **Memory aid.** Framed card: "Average the crossings, then substitute." Key line: "Axis: x = (x₁ + x₂) ÷ 2. Vertex: put that x into the equation."
- **Visual surprise.** The midpoint marker lands at t = 2 and the paused rocket on the rider is exactly at its highest point at that moment: the top was hiding halfway between the launch and the landing.
- **Site notes (pack section 8).** Site numbers unchanged (`we-1`, card 06, the true or false item). Intercepts are read from the graph; the site's factorising asides are not taught. SA 2 is not used. No site error found here.
- **Plain meanings at first use.** x-intercept ("where the graph crosses the x-axis, so y is zero"); y-intercept ("where it crosses the y-axis, so x is zero"); midpoint ("the number exactly halfway between two numbers: add them and halve"); substitute ("put the number in place of x").
- **Attempts (pack question 1 and the pack's archway anchor).** A1 (pack question 1): y = x² − 4x − 12 crosses at −2 and 6 and the y-axis at (0, −12); axis x = 2, vertex (2, −16), minimum; crossed "x = 4". A2 (original, from the pack's archway anchor): a garden archway h = −2x² + 4x meets the ground at 0 and 2; axis x = 1; top 2 m; crossed "the top is at x = 2".
- **Mistake scene:** none separate. Adding without halving (5 crossed, A1 crossed); dropping a negative sign (4 crossed); the axis as a number or point (2 tag "a line"); giving only the vertex's x-value (3 tag); the y-intercept taken as the vertex (2, said: the rocket's y-intercept is 0, its vertex is (2, 20)); an intercept taken for the top (A2 crossed).
- **Cause chain taught, in order:** (1) on the x-axis every point has y = 0, and on the y-axis x = 0, so that's what the intercepts are (2); (2) at x = 0 the x² and x terms vanish, leaving c (2); (3) the two x-intercepts have equal heights (both 0), so they are a matching pair, sitting the same distance either side of the axis (3); (4) so the axis is halfway between them: add and halve (3, 4, 5); (5) the vertex lies on the axis, so substituting the axis's x gives its height (3, 4, 5); (6) a decides whether that height is a maximum or a minimum (3, 4, 5).
- **Entry knowledge (route):** a09 (parabola, vertex, axis, matching pairs, the sign of a); math-s11-l01 (`ci94641a48`, the y-intercept from a graph); math-s11-f01 (`ci7f303375`, substitution).
- **What later videos rely on.** a11a opens on this video's final frame and asks what 0, 4, 2 and 20 mean; it uses "the vertex's y says how high, its x says when" and the midpoint method on site `we-2` (2 and 8 give 5).
- **Handoff (to math-s12-a11a, "What do the intercepts and vertex of a practical graph mean?").** Scene 12: the paddock, launcher and rocket again; the rocket's graph with all four numbers labelled: crossings "0" and "4" (blue), the h-intercept "0" (teal), the vertex "(2, 20)" (amber) with its dashed axis; four empty speech-bubble chips pointing at them, each "means ...?"; a grey dashed continuation of the curve past t = 4 below the axis, with a chip "after 4 s?"; chips "Next: what do the numbers mean?" and "?". This is a11a's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) h = −5t² + 20t = −5t(t − 4): zeros 0 and 4; h(2) = 20; h(1) = h(3) = 15; h(5) = −25 (used in a11a's handoff and a11b).
  (b) `we-1`: x² − 4x − 5 = (x + 1)(x − 5); y(0) = −5; y(2) = −9. Slip: (1 + 5) ÷ 2 = 3 gives y(3) = −8, not the vertex.
  (c) Card 06: −(x − 1)(x − 5) = −x² + 6x − 5 (a09's app curve); y(3) = 4.
  (d) A1: x² − 4x − 12 = (x + 2)(x − 6); y(2) = −16. A2: −2x² + 4x = −2x(x − 2); h(1) = 2.
  (e) Two, one or none: y = x² − 4 (two), y = x² (one, touching), y = x² + 2 (none), shown unlabelled except "2", "1", "0".
  (f) Pronunciations: "minus five t squared, plus twenty t"; "x one plus x two, over two" (on screen only; narration says "add them and halve").
  (g) Windows: rocket t −0.5 to 5.5, h −5 to 25; `we-1` x −3 to 7, y −10 to 8; card 06 x −1 to 7, y −6 to 6; A1 card x −4 to 8, y −18 to 8; A2 card x −0.5 to 2.5, h 0 to 3.

Main question: *A foam rocket's graph shows where it leaves the ground and where it lands, but not its top. How do the x-intercepts of a parabola locate its vertex?*
Entry knowledge (a09; math-s11-l01, f01): vertex, axis and matching pairs; the y-intercept; substitution.
Stops after: intercepts read from a graph, c as the y-intercept, the axis as the midpoint of the x-intercepts, the vertex by substitution, maximum or minimum. No context meanings or valid values.
Handoff: math-s12-a11a: "we found 0, 4, 2 and 20: what does each one mean, and what happens after 4 s?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x and x-intercepts blue; y and the y-intercept teal; vertex amber; axis and midpoint violet dashed; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: only the crossings
> Here's that foam rocket. A backyard launcher fires it straight up from the grass, and then it falls back down. Its height, h metres, after t seconds, can be modelled by h equals minus five t squared, plus twenty t. The graph shows where it leaves the ground, at zero seconds, and where it lands again, at four **seconds**. It doesn't show the top. But a parabola is symmetric, so those two crossings should tell us where the top is, and how high it gets. So how do the x-intercepts of a parabola locate its **vertex**?

Visual: opens on a09's final frame exactly (the paddock strip, the launcher with the rocket, the axes t 0 to 5 and h 0 to 25 with the curve and no grid, crossings "0" and "4" ringed amber, a "?" at the top, chips "Only the crossings are shown: where is the top?", "Next: intercepts and the vertex" and "?"). On the first sentence the "Next" chips fade. On "fires it straight up" the rocket rider runs once (simulation 1): the painted rocket lifts off the tube, rises, slows, falls and lands back by the tube, while a dot rides the curve and readouts "t" (blue) and "h" (teal) count (52 px); the top of the rise is not labelled. On "can be modelled by" the equation strip writes (52 px): "h = −5t² + 20t", with a grey tag "model: straight up from the grass". On "seconds" the rider pauses at t = 4 on the ground; both crossings pulse. On "vertex" heading "Intercepts and the vertex", and the question chip "Two crossings → the top?" moves to the top right.

### 2. intercepts, and c
> First, some names. The x-intercepts are where the graph crosses the x-axis, so y is zero there. The y-intercept is where it crosses the y-axis, so x is zero. On the rocket's graph, the axes are t and h, so the t-intercepts are where the height is zero, at zero and four **seconds**. The h-intercept is where t is zero, and that's zero too, because the rocket starts on the **grass**. Here's a shortcut. For y equals a x squared, plus b x, plus c, put x equals zero, and every term disappears except c. So the y-intercept is always **c**. And a parabola can cross the x-axis twice, touch it once, or miss it **completely**. The method in this video needs two crossings.

Visual: camera continue; the paddock and plates shrink to a 300 px badge strip at the top left and the graph enlarges (1,250 × 640 px, t −0.5 to 5.5, h −5 to 25). Definition chips (44 px): "x-intercepts: y = 0" (blue) and "y-intercept: x = 0" (teal), hand tags "y = 0 here" and "x = 0 here". On "seconds" the two crossings turn from amber to blue, labelled "(0, 0)" and "(4, 0)". On "grass" the probe (simulation 3) slides in at t = 0 and meets the curve at (0, 0), teal ring "h-intercept 0". On "Here's a shortcut" a row (52 px): "y = ax² + bx + c"; then "x = 0: y = a(0)² + b(0) + c = c", with the zero terms greying out; on "c" the "c" rings teal, hand tag "c", and the rocket's equation shows "h = −5t² + 20t + 0" with the "+ 0" teal. On "completely" a small three-panel strip at the right (each 360 × 260 px) shows parabolas crossing twice, touching once and missing the axis, labelled "2", "1" and "0", hand tag "two, one or none"; the "2" panel rings.

### 3. the middle of the crossings
> Here's the key idea. The two x-intercepts are a matching pair. They're at the same height, zero, so they sit the same distance either side of the axis of symmetry. That means the axis is exactly halfway between them. To find halfway, add them and halve. Zero plus four is four, and half of that is **two**. So the axis is t equals two. Now find the height there. Put t equals two into the equation. Minus five times four is minus twenty, and twenty times two is forty, so the height is **twenty**. The vertex is two, twenty, and it's a maximum, because a is minus five. So the rocket is highest after two seconds, at twenty **metres**.

Visual: clear change to the g01 board with the rocket graph at the right (900 × 600 px) and the badge strip above. Task strip (44 px): "Find the axis of symmetry and the vertex of h = −5t² + 20t." Givens card (44 px): "t-intercepts: 0 and 4 (from the graph)"; "h = −5t² + 20t". On "a matching pair" a grey arc links the two blue crossings, hand tag "a matching pair" (grey chip "a09: matching pairs"). The midpoint bracket (simulation 2) spans 0 to 4 on a number-line strip under the t-axis; the violet marker slides to the middle with step ticks "2 steps" from each side, hand tag "halfway". Row (52 px): "t = (0 + 4) ÷ 2"; on "two" (first) "= 2" and a violet dashed axis drops through t = 2, label "axis: t = 2", hand tag "add, then halve". On "Put t equals two" row "h = −5(2)² + 20(2)" with the "2"s blue; on "twenty" "= −20 + 40 = 20". The point (2, 20) rings amber on the curve, label "vertex (2, 20)", row "a = −5 < 0: maximum". On "metres" the framed answer (green): "Highest at t = 2 s: 20 m", and the badge's rocket rider runs to t = 2 and pauses at its top, level with the amber ring.

### 4. worked example: the site's parabola
> Here's one to work through. The graph of y equals x squared, minus four x, minus five, is shown. First, the y-intercept is c, so it's zero, minus **five**. The graph crosses the x-axis at minus one and at **five**. The axis is halfway between them. Minus one plus five is four, and half of four is **two**. So the axis is x equals two. Now substitute two. Two squared is four, minus eight, minus five, which is minus **nine**. The vertex is two, minus nine, and since a is positive, it's a minimum. Dropping the minus sign, and averaging one and five to get three, is the classic **slip**. Keep the sign of each intercept.

Visual: clear change to the g01 board. Task strip (44 px): "The graph of y = x² − 4x − 5 is shown. Find the y-intercept, the axis of symmetry and the vertex." Givens card (44 px): "y = x² − 4x − 5"; "the graph crosses the x-axis at x = −1 and x = 5". The graph at the right (800 × 640 px, x −3 to 7, y −10 to 8) with its crossings marked by the graph only. On "five" (first) the probe meets (0, −5), teal ring, row "y-intercept: c = −5, so (0, −5)". On "five" (second) the crossings ring blue, "(−1, 0)" and "(5, 0)". The midpoint bracket spans −1 to 5, the marker sliding to 2 with "3 steps" each side; row "x = (−1 + 5) ÷ 2"; on "two" "= 4 ÷ 2 = 2", violet dashed axis x = 2. Rows: "y = 2² − 4(2) − 5"; on "nine" "= 4 − 8 − 5 = −9". Vertex (2, −9) rings amber; framed answer (green): "axis x = 2; vertex (2, −9), a minimum". On "slip" a red slip "(1 + 5) ÷ 2 = 3" writes and is crossed, caption "keep the sign: −1", hand tag "keep the sign".

### 5. worked example: add, then halve
> Here's another. A parabola crosses the x-axis at one and at five, and its equation is y equals minus, x minus one, times x minus five. The axis is one plus five, over two, which is **three**. Put x equals three into the equation. Three minus one is two, and three minus five is minus two. So y is minus, two times minus two, which is plus **four**. The vertex is three, four, and because the curve opens downwards, it's a maximum. Adding the intercepts without halving gives six, which isn't even between them. The axis always sits between the two **crossings**.

Visual: clear change within the board. Task strip (44 px): "A parabola has x-intercepts 1 and 5, and y = −(x − 1)(x − 5). Find the axis of symmetry and the vertex." Givens card: "x-intercepts: 1, 5"; "y = −(x − 1)(x − 5)". Graph at the right (x −1 to 7, y −6 to 6), the crossings ringed blue. Row "x = (1 + 5) ÷ 2"; on "three" "= 3", the marker sliding to 3, violet axis x = 3. Rows: "y = −(3 − 1)(3 − 5)" with each bracket boxed; "= −(2)(−2)"; on "four" "= 4". Vertex (3, 4) rings amber; framed answer (green): "axis x = 3; vertex (3, 4), a maximum". A grey chip "a09: the same curve in the app". On "crossings" a red slip "1 + 5 = 6, so x = 6" writes and is crossed, a ghost axis at x = 6 drawn outside both crossings, hand tag "not between them?", caption "add, then halve".

### 6. no equation? read the graph
> Sometimes you're given only the graph, with no equation. The midpoint still gives the axis. Here's a true or false question. A parabola with x-intercepts at minus three and seven has its axis of symmetry at x equals two. Add and halve. Minus three plus seven is four, and half of four is **two**. So it's true. Without an equation, you can't substitute, so read the height from the graph instead. Go up the axis line from x equals two until it meets the curve, then across to the y-axis. On this graph, that's **five**. So the vertex is two, five, a maximum. The axis line always leads you straight to the vertex.

Visual: clear change. A true-or-false card at the top (44 px): "True or false: a parabola with x-intercepts at x = −3 and x = 7 has its axis of symmetry at x = 2." (site lesson04). Below, a graph (1,150 × 600 px, x −4 to 8, y −2 to 7, with grid lines every 1) of a downward parabola through (−3, 0) and (7, 0), no equation shown, the crossings ringed blue. The bracket spans −3 to 7 with "5 steps" each side; row (52 px) "x = (−3 + 7) ÷ 2"; on "two" "= 2", violet axis, and a green tick on the card "True". Grey chip "no equation: read the graph". A dot climbs the violet axis from (2, 0) to the curve, then a dashed line runs across to the y-axis; on "five" the reading "5" rings teal on the y-axis and the vertex (2, 5) rings amber; framed answer (green): "vertex (2, 5), a maximum", hand tag "up the axis, then across".

### 7. memory aid
> Here's the summary. To find the vertex from a graph, average the crossings, then substitute. Add the two x-intercepts and halve, and that's the axis. Put that x into the equation, and that's the vertex's **height**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the rocket's graph with the bracket, the violet marker and the amber vertex. Main line, hand font 60 px: "Average the crossings, then substitute." On "height" the key line, 40 px: "Axis: x = (x₁ + x₂) ÷ 2. Vertex: put that x into the equation." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The graph of y equals x squared, minus four x, minus twelve, crosses the x-axis at minus two and at six, and the y-axis at zero, minus twelve. Find the equation of the axis of symmetry, and the coordinates of the vertex. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The graph of y = x² − 4x − 12 is shown. It crosses the x-axis at x = −2 and x = 6 and the y-axis at (0, −12). (a) Find the equation of the axis of symmetry. (b) Find the coordinates of the vertex." Picture slot: the graph (x −4 to 8, y −18 to 8) with its three crossings marked, no axis line and no vertex label. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Add the crossings and halve. Minus two plus six is four, and half of that is two, so the axis is x equals **two**. Substitute. Four, minus eight, minus twelve, is minus sixteen, so the vertex is two, minus **sixteen**, a minimum. Writing x equals four is the slip. Add, then halve.

Visual: the card shrinks to the top (30 px). The bracket spans −2 to 6 and the marker slides to 2; on "two" row "x = (−2 + 6) ÷ 2 = 2" (44 px), violet axis. Row "y = 2² − 4(2) − 12"; on "sixteen" "= −16", vertex (2, −16) rings amber; framed answer (green): "axis x = 2; vertex (2, −16)". On "the slip" a red slip "x = 4" writes and is crossed, caption "add, then halve". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A garden archway's height, h metres, x metres across from one foot, is modelled by h equals minus two x squared, plus four x. Its graph meets the ground at x equals zero and x equals two. Find the axis of symmetry, and the height of the top of the archway. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A garden archway's height h metres, x metres across from one foot, is modelled by h = −2x² + 4x. Its graph meets the ground at x = 0 and x = 2. (a) Find the axis of symmetry. (b) Find the height of the top of the archway." Picture slot: the graph (x −0.5 to 2.5, h 0 to 3) with its two crossings marked, the top unlabelled. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Halfway between zero and two is one, so the axis is x equals **one**. At x equals one, the height is minus two, plus four, which is **two**. So the top of the archway is two metres high, one metre from each foot. Saying the top is at x equals two is the slip. That's a foot, not the middle.

Visual: the card shrinks to the top. On "one" row "x = (0 + 2) ÷ 2 = 1", violet axis. On "two" (first bold) "h = −2(1)² + 4(1) = 2", the top rings amber; framed answer (green): "axis x = 1; top 2 m". On "the slip" a red slip "top at x = 2" writes and is crossed, caption "that's a foot". Hold about 1 s.

### 12. handoff
> So the x-intercepts locate the vertex. Average them for the axis, then substitute for the height. For the rocket, we found zero, four, two and twenty. But what does each of those numbers actually mean? And what happens to the model after four **seconds**?

Visual: the memory line shows small at the top (30 px), then fades on "For the rocket". Board clear to the paddock strip with the launcher and rocket (1,700 px) and the rocket's graph below (1,250 × 560 px): crossings "0" and "4" (blue), h-intercept "0" (teal), vertex "(2, 20)" (amber) with its violet axis. Four empty speech-bubble chips point at them, each reading "means ...?". On "seconds" a grey dashed continuation of the curve runs past t = 4 below the axis, with a chip "after 4 s?"; chips "Next: what do the numbers mean?" and "?". Hold about 2 s. This is a11a's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- x-intercepts: where y = 0. y-intercept: where x = 0.
- For y = ax² + bx + c, the y-intercept is c.
- Axis of symmetry: x = (x₁ + x₂) ÷ 2, halfway between the x-intercepts.
- Vertex: substitute that x to find its y-value. Write it as a point.
- a > 0: minimum. a < 0: maximum.

Memory aid (framed card, right side, as in scene 7): *Average the crossings, then substitute.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and a11a's opening frame.

## Teaching checks

- **Does it explain causes?** Why intercepts mean y = 0 or x = 0: every point on that axis has that coordinate (2). Why the y-intercept is c: the other terms vanish at x = 0 (2). Why the axis is the midpoint: the intercepts are a matching pair at equal heights (3). Why substitute: the vertex is on the axis (3 to 5). Why maximum or minimum: the sign of a (3 to 5).
- **Misconceptions addressed:** adding without halving (5 crossed, A1 crossed); dropping a negative (4 crossed); the axis as a point (2, 3 labels "axis: t = 2"); only the x-value of the vertex (3 framed answer gives both); the y-intercept as the vertex (2: (0, 0) versus (2, 20)); a foot taken for the top (A2 crossed).
- **Visual standard, item by item:** 1 the rocket and launcher from the first frame (a09's), as a badge through 2 and 3, and in 11; 2 a new stage every 40 to 60 s; 3 the rocket rider, the midpoint bracket, the probe, the climb up the axis (6); 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 3, 4 and 5 with framed answers and crossed slips; 8 framed card and five bullets; 9 the marker landing at t = 2 as the rider pauses at the top.
- **One idea at a time:** names and c (2), the midpoint (3), signs (4), halving (5), reading the graph when there is no equation (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 22 s and 22 s (speech plus hold).
- **Avoided double teaching:** a09's pairs, axis and a's sign are recalled in grey chips and one phrase each.
- **Syllabus coverage:** `ci75131568` (2, 4, A1; key notes 1, 2); `ciea5db2d8` (3 to 6, A1, A2; key notes 3 to 5).
- **Out of scope by design:** context meanings, the four questions and valid values (a11a, a11b); finding intercepts by algebra; x = −b/(2a).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "The graph of y = x² − 4x − 12 is shown. It crosses the x-axis at x = −2 and x = 6 and the y-axis at (0, −12). (a) Find the equation of the axis of symmetry. (b) Find the coordinates of the vertex."
Model answer: (a) x = (−2 + 6) ÷ 2 = 2. (b) y = 2² − 4(2) − 12 = −16; vertex (2, −16), a minimum. Classic mistake (crossed): "x = 4".

**Attempt 2 (scene 10; original, from the pack's archway anchor, HSC style, 2 marks suggested).** "A garden archway's height h metres, x metres across from one foot, is modelled by h = −2x² + 4x. Its graph meets the ground at x = 0 and x = 2. (a) Find the axis of symmetry. (b) Find the height of the top of the archway."
Model answer: (a) x = (0 + 2) ÷ 2 = 1. (b) h = −2(1)² + 4(1) = 2, so the top is 2 m high. Classic mistake (crossed): "top at x = 2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rocket | h = −5t² + 20t; t-intercepts 0, 4; h-intercept 0; axis t = 2; vertex (2, 20) | 1, 2, 3, 7, 12 |
| Intercept counts | y = x² − 4, x², x² + 2: 2, 1, 0 (unlabelled curves) | 2 |
| Site `we-1` | x² − 4x − 5: (0, −5); −1, 5; x = 2; (2, −9); slip 3 | 4 |
| Site card 06 | −(x − 1)(x − 5): x = 3; (3, 4); slip 6 | 5 |
| Graph only (site true or false) | x-intercepts −3, 7; axis x = 2; graph y = −(x + 3)(x − 7) ÷ 5, vertex (2, 5) read from the grid | 6 |
| A1 | x² − 4x − 12: x = 2; (2, −16); slip 4 | 8, 9 |
| A2 | −2x² + 4x: x = 1; top 2 m | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12/verify.py`, run with `python -I`); Codex to re-check.

- −5t² + 20t: zeros 0, 4; value 20 at t = 2; 15 at t = 1 and 3; −25 at t = 5 and t = −1.
- x² − 4x − 5: zeros −1, 5; value −5 at 0; −9 at 2. (−1 + 5) ÷ 2 = 2; (1 + 5) ÷ 2 = 3.
- −(x − 1)(x − 5) at x = 3: 4; expands to −x² + 6x − 5.
- x² − 4x − 12: zeros −2, 6; value −12 at 0; −16 at 2; −2 + 6 = 4.
- −2x² + 4x: zeros 0, 2; value 2 at 1.
- (−3 + 7) ÷ 2 = 2; −(x + 3)(x − 7) ÷ 5 at x = 2: 5 (graph-only curve; the equation is author only, never shown).

## Memory aid check

- **"Average the crossings, then substitute."** with the key line "Axis: x = (x₁ + x₂) ÷ 2. Vertex: put that x into the equation." Original. Meaning, as said in scene 7: the axis of symmetry is the average (midpoint) of the two x-intercepts, and the vertex's y-value comes from substituting that x. Assumptions checked: the parabola has two x-intercepts (scene 2 says the method needs two; a touching parabola's single intercept is its vertex, not covered here); the equation is known, or the graph can be read at that x (scene 6). It helps a new case: crossings at −4 and 2 give the axis x = −1. Introduced after scenes 3 to 6.
- **Considered, not used:** "Halfway, then plug in" ("plug in" is informal, and the syllabus word is substitute).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `s12/count.py`): 5,175 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 24 s of settling (the rocket rider, the bracket slides, the probe, the climb up the axis) and the 45 s notes scene: about 478 s. Characters per scene (1 to 13): 510, 652, 623, 602, 550, 605, 211, 253, 273, 288, 282, 251, 75. Speech before the notes is about 383 s, under the 570 s cap. Feedback speech plus hold: about 22 s and 22 s.

Reserve trims if the voiced take runs long: scene 2's "And a parabola can cross ... needs two crossings" pair (keep the three-panel strip); scene 5's last sentence (keep the crossed ghost axis).

## Scene list and build ids

Lesson key `m-s12a10` (route math-s12-a10). Explainer folder `src/explainer/lessons/math-s12-a10`; build inputs in `docs/production/claude-pm/lessons/math-s12-a10/` (at voicing).

In order (13 scene headings): hook-two-crossings, intercepts-and-c, midpoint-rocket, worked-site-we1, worked-add-halve, graph-only, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | a09's frame; the rocket's flight and graph |
| 45 to 100 s | 2 | Intercept names, the probe, c, two-one-none |
| 100 to 155 s | 3 | Midpoint bracket and substitution on the rocket |
| 155 to 205 s | 4 | g01 board: site `we-1` |
| 205 to 245 s | 5 | g01 board: card 06, add then halve |
| 245 to 290 s | 6 | Graph only: the site's true or false, read up the axis |
| 290 to 305 s | 7 | Framed memory card |
| 305 to 395 s | 8 to 11 | Question cards and countdowns, then feedback |
| 395 to 415 s | 12 | Rocket graph with four labelled numbers, for a11a |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a09's last frame continues into 1; 1 to 2 camera continue; 2 to 3 clear change to the board; 3 to 4 clear change; 4 to 5 clear change within the board; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a10-learning-review.md`, `science_check` = `checks/m-s12-a10-maths-check.md`.

## Assets

Reused: `maths/ma11-launch-paddock-v1.png` (viewed 18 Nov). From a09's brief: `ms12-rocket-launcher-v1.png`, `ms12-foam-rocket-v1.png` (must exist before the a09 build). No new plate. The archway in A2 is a coded graph only (the question card is an exam-style graph).

Coded: every graph, the probe, the bracket and number-line strip, the boards, the three-panel intercept strip, the question cards, the countdown, the key notes.

### Studio kit use and additions

Uses: `StudioPlot`, `FunctionRider`, `LiveReadoutBoard`, `IntervalPicture` (extras.tsx), `quadCrossings` and `crossingX` (a11-graph-parts.tsx), `StudioFeatureMarks`, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a10):
1. **`MidpointBracket`** (small, an `IntervalPicture` mode): a bracket between two marked x-values, a marker sliding to their average with equal step ticks each side, and a dashed vertical line dropping through it onto a `StudioPlot`. Check: −1 and 5 give 2 with "3 steps" each side; 0 and 4 give 2.
2. **Plate rider** (small): the rocket plate moves vertically by h(t) at the plot's h-scale while the `FunctionRider` dot rides the graph, so both pause together at t = 2 and t = 4.

## Codex asset brief

No new plate. The launcher and rocket are painted under a09's brief (`math-s12-a09.md`) and must exist before the a09 build; the paddock strip is reused.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly.
3. Confirm site `we-1` and card 06 keep their numbers, and that intercepts are read from graphs (no factorising, quadratic formula or x = −b/(2a) taught).
4. Confirm the axis is always stated as a line (x = 2) and the vertex as a point with both coordinates.
5. Confirm both attempts carry every demand and neither card nor picture shows the axis or the vertex.
6. Confirm scene 1 opens on a09's final frame and scene 12 matches a11a's opening frame.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, and every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Finding the Vertex from the x-Intercepts | Year 12 Maths Standard 2

(Title length: 67 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson04.sa.html

A foam rocket leaves the ground at 0 seconds and lands at 4 seconds. When is it highest, and how high does it go? Read the x-intercepts and y-intercept of a parabola from its graph, see why the y-intercept of y = ax² + bx + c is c, and find the axis of symmetry halfway between the x-intercepts. Then substitute to find the vertex, and say whether it's a maximum or a minimum. A memory aid: average the crossings, then substitute. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
Standard 2 (ci75131568): "Identify the x-intercepts and y-intercept of a parabola from a graph"
Standard 2 (ciea5db2d8): "Determine the axis of symmetry and vertex of a parabola using the midpoint of the x-intercepts shown on a graph"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

Builds on: Parabolas, the vertex and axis of symmetry. Next: Reading a practical quadratic graph.

#Year12Maths #MathsStandard #Parabolas #HSCScience

## Open decisions

- **1. The rocket instead of the firework (root).** The pack's firework carried question 2; a shell that falls back to the ground unexploded is an odd and unsafe picture, so a foam rocket carries the same numbers' idea at toy scale (0, 4, 2, 20). a11a and a11b continue with it.
- **2. "x-intercepts" on a t-h graph (learning review).** The narration names t-intercepts as the x-intercepts of this graph once (scene 2). Check that students follow the letter change.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from a09; check that "a matching pair" makes the midpoint caused rather than a rule, that the y-intercept as c is seen on the probe, that the slip boards are readable at speed, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
