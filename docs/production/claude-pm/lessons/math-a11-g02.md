# Maths A11 G02: How do −x and −y reflect a graph? Reverse and Invert in an audio app, replacing x by −x and y by −y, images of points, the equation of a reflected graph, and both flips as a half-turn (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,513 characters by script (see "Narration length estimate"), 12 scene headings, about 500 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-fifth video of Year 11 Mathematics Advanced (2024), outline order 75, Graph transformations. Pre-design pack: `../pre-design/maths-a11/math-a11-g02.md` (brief 243). Site lesson (read through the pack's quotations, read only): `graph-transformations/lesson02.sa.html` (Reflections of Functions, SHA256 `fe58da094ef25c7cd8256209ed8052422ee5eb92a3f2c5c300c6fd3ac721ff6e`; the establish task's cubic y = x³ − 2x and `we-refl-3`'s result used with the site's numbers; short answer Q9's f(x) = x² − 4x + 3 used as the worked example; no site error in this lesson). Route entry: `math-a11-g02` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; the reused phone and headphones plates; every graph, waveform, app screen and table coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (music and phones: an audio app's Reverse and Invert buttons), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Graph transformations), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `cifbd84c1c`: "Establish using graphing applications that replacing x by -x in the equation of a graph corresponds to the reflection of the graph in the y-axis, and that replacing y by -y corresponds to a reflection in the x-axis"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

**Boundary:** starts from g01's final frame exactly (the phone `maths/ma12-phone-v1.png` with a coded audio app showing a doorbell clip's sound wave on axes x −3 to 3 (time, s) and y −9 to 9; two app buttons "Reverse" and "Invert"; the headphones `maths/ma12-headphones-v1.png` as a badge; chips "Reverse: replace x by −x?", "Invert: replace y by −y?", "Next: reflections", "?"). Recalls g01 (replacing x or y in an equation; images of points; "the new graph at x does what the old one did at ...") in a phrase, w26 (odd functions are unchanged by a half-turn about the origin) in a grey chip, e01 (2ˣ, its y-intercept and asymptote) in a grey chip. Teaches: replacing x by −x reflects a graph in the y-axis, because the new graph at x copies the old graph at −x; (x, y) → (−x, y), points on the y-axis fixed; replacing y by −y gives −y = f(x), that is y = −f(x), every height negated, a reflection in the x-axis; (x, y) → (x, −y), x-intercepts fixed; established in a graphing app with the site's cubic, where the two reflections happen to agree (an odd function) and with √x, where they do not; both together give (x, y) → (−x, −y), a half-turn; the equation of a reflected graph replaces every x, in brackets (`cifbd84c1c`). Stops at single reflections and the half-turn. Not taught: even and odd tests (w26, referenced only); reflections in other lines (y = x is e08's); dilations (g03); combining with other moves (g04).

## Decisions

- **Anchor: an audio app's Reverse and Invert buttons (reused painted plates, live).** A doorbell "ding" recorded on a phone: the sound wave strikes loud and fades. With time zero put at the middle of the clip, **Reverse** plays it backwards, so at time x you hear what played at −x: the graph reflects in the y-axis, and the fade-out becomes a swell. **Invert** (a standard audio-editor button) multiplies every height of the wave by −1: the graph reflects in the x-axis. One object gives both syllabus reflections, each as a real button. Music and phones; the pack's anchor 2 ("reversing a sound clip"), extended to Invert. No Year 11 or Year 12 Maths design uses an audio app's waveform (grep "waveform", "Reverse", "Invert", 17 Nov). Plates are reused: `maths/ma12-phone-v1.png` (viewed: plain phone, blank screen) and `maths/ma12-headphones-v1.png` (viewed: grey and teal over-ear headphones, Year 12 s08's object), as a badge only; plate reuse is not a shared anchor (root acceptance w01 to w14, ruling 6).
- **Notation (root ruling 4).** The syllabus replace-language with numbers and f(−x), −f(x). No general form appears in this video; the Year 12 form y = k f(a(x + b)) + c is assembled in g04, where k = −1 and a = −1 are named as these two reflections.
- **Graphing applications (syllabus wording).** A coded graphing-app screen (`ScreenApp`) in scene 4 plots the site's cubic and its two reflections, then √x and its two reflections; the narration says "a graphing app", unbranded, and the key notes invite students to try it.
- **Simulations (standard item 3).**
  1. **Reverse and Invert** (`AudioWaveView`, scenes 1 to 3; new part): the waveform inside its envelope flips about the y-axis (Reverse) or the x-axis (Invert) over 1.2 s as a fold, with a play-head that sweeps both versions so the swell is visible.
  2. **Point tracer** (`TransformationTracer`, scenes 2, 3, 5): ringed points travel along dotted perpendiculars to the mirror line, their coordinate readouts changing sign in transit; points on the mirror pulse and stay.
  3. **App flips** (scene 4): the cubic folds in each axis in turn and the two images land on the same curve (`FunctionSimulator` folds with xScale and yScale through 0); then √x folds into two different images.
- **Colour roles (fixed for the g strand, from Year 12 t01 Revision 3).** Horizontal changes: x replaced by −x (and later horizontal dilation) **blue**; horizontal translation teal (g01, recalled only); vertical changes: y replaced by −y (and later vertical dilation) **amber**; vertical translation violet (g01, recalled only); the parent graph a **dashed grey ghost**; the image **ink**; mirror lines dashed grey with a fold crease; answer green; mistake red, crossed slips only. So the y-axis mirror and every "−x" glow blue, and the x-axis mirror and every "−y" glow amber.
- **Large type, handwritten voice.** Current lines 52 px, task strips and givens 44 px, earlier lines 30 to 32 px, nothing below 26 px, all text above y = 950 (the bottom 12 per cent stays clear). Hand tags: "fade-out → swell", "same height, other side", "on the mirror: stays", "every height × (−1)", "crossings stay", "same curve!", "odd (w26)", "two different flips", "half-turn", "every x, in brackets", "(−x)² = x²".
- **Stage changes (standard item 2).** The phone app and its two buttons (1); Reverse as a y-axis reflection with the point tracer (2); Invert zoomed with the tracer (3); the graphing app (4); the g01 board (5); framed card (6); question cards (7 to 10); the photocopier frame for g03 (11); key notes (12).
- **Worked example (g01 layout).** 5: site short answer Q9, f(x) = x² − 4x + 3 under x → −x (x² + 4x + 3, vertex (2, −1) → (−2, −1)) and under y → −y (−x² + 4x − 3). Crossed slip: "(−x)² = −x²". Scenes 2 to 4 are simulation stages with rows.
- **Memory aid.** Framed card: "Negate x: flip across the y-axis. Negate y: flip across the x-axis." Key line: "Points on the mirror stay put. Replace every x, in brackets."
- **Visual surprise.** In the app, two different flips of y = x³ − 2x land on exactly the same curve, while √x's two flips point in different directions.
- **Site notes (pack section 8).** No error in lesson02. The site writes the x-axis reflection only as y = −f(x); this design states the syllabus form first (replace y by −y) and rearranges. `we-refl-1`, `we-refl-2` and the drill are not used (`we-refl-2`'s three points are replaced by the attempt's three points to avoid a near repeat).
- **Plain meanings at first use.** Reflection ("a flip across a mirror line: each point lands the same distance away, on the other side"); mirror line (the line the graph flips across); half-turn ("a turn of 180° about the origin"); odd function (w26 recall: "a graph a half-turn leaves unchanged").
- **Attempts (pack questions).** A1: images of A(−3, 2), B(0, −1), C(4, 0) under y → −y and x → −x; crossed "(3, 2)" for A under the first. A2: f(x) = 2ˣ under x → −x and y → −y, with y-intercepts and asymptotes; crossed "y = (−2)ˣ".
- **Mistake scene:** none separate. Swapping the axes ("−x flips in the x-axis", 2, said and tagged); moving points on the mirror line (2, 3 tags; A1 feedback); negating only part of an expression ((−x)² = −x², 5 crossed); "two reflections always differ" (4, the cubic); "both flips undo each other" (4, the half-turn); the wrong coordinate negated (A1 crossed); (−2)ˣ (A2 crossed).
- **Cause chain taught, in order:** (1) a reversed clip plays at time x what the original played at −x, so the graph's point at −x appears at x (2); (2) so replacing x by −x moves each point to the same height on the other side of the y-axis, a reflection in the y-axis, and points on that axis stay (2); (3) −y = f(x) means y = −f(x): every height times −1, a reflection in the x-axis, with x-intercepts fixed (3); (4) the two flips are different moves; they agree only for odd functions, and together they make a half-turn (4); (5) the equation of a reflected graph replaces every x, so brackets carry the sign into each term (5).
- **Entry knowledge (route):** g01 (replacing x or y in an equation; images of points); w26 (even and odd functions, referenced); e01 (y = aˣ, (0, 1), asymptote y = 0, and k a⁻ˣ as a reflection).
- **What Year 12 relies on.** Year 12 t01 treats "k < 0 also reflects" in the x-axis ("Every height changes sign, so the curve flips over the x-axis") and needs "a number outside acts on every height as written". Scene 3 delivers: replacing y by −y gives y = −f(x), every height negated, x-intercepts fixed, and its last sentence says "The number outside, minus one, acts on every height, just as it's written." t01's grey chip "reflection in the y-axis: cos(−x) = cos x, sin(−x) = −sin x" relies on scene 2's rule.
- **Handoff (to math-a11-g03, "How does replacing x by x/k or y by y/l stretch a graph?").** Scene 11: the photocopier plate `ma11-photocopier-v1.png` (new) at the left; a coded page beside it with y = x² drawn on graph paper, origin at the page's lower-left corner; the copier's coded panel reading "Zoom 200%" and a second setting "Width 200% · Height 100%"; chips "copy at 200%: what equation?", "width only: what equation?", "Next: stretching a graph", "?". This is g03's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) The ding's envelope (coded shape): 0 before x = −2, then 8(½)^(x + 2) for x ≥ −2: E(−2) = 8, E(0) = 2, E(1) = 1, E(2) = ½. The wave is a fast sine inside ±E. A crest at about (−1.9, 7) is used in scene 3. Reversed: E(−x), peak at x = 2.
  (b) "Invert" multiplies samples by −1 (polarity inversion). Heard alone, a polarity-inverted mono clip is generally indistinguishable from the original; the design says only "it sounds just the same to your ear" in the hook and gives no reason, because the reason (the ear's insensitivity to absolute polarity) is outside the course.
  (c) f(x) = x³ − 2x: −f(x) = −x³ + 2x = f(−x), because f is odd; −f(−x) = f(x) (half-turn leaves it unchanged).
  (d) √x: √(−x) has domain x ≤ 0 (points left); −√x has range y ≤ 0 (hangs below).
  (e) f(x) = x² − 4x + 3 = (x − 2)² − 1: vertex (2, −1). f(−x) = x² + 4x + 3, vertex (−2, −1). −f(x) = −x² + 4x − 3, vertex (2, 1). Slip −x² + 4x + 3 (vertex (2, 7)) is not a reflection.
  (f) A1: y → −y: A(−3, −2), B(0, 1), C(4, 0); x → −x: A(3, 2), B(0, −1), C(−4, 0). A2: 2⁻ˣ = (½)ˣ, (0, 1), y = 0; −2ˣ, (0, −1), y = 0.
  (g) Pronunciations: "f of minus x"; "minus f of x"; "minus x, all cubed"; "two to the minus x"; "minus two to the x" (for −2ˣ) against "minus two, all to the x" (for (−2)ˣ).
  (h) Windows: app clip x −3 to 3, y −9 to 9; tracer windows x −4 to 4, y −4 to 4, equal units (reflections look like mirror images only with equal units); the app in scene 4 x −3 to 3, y −3 to 3, equal units; scene 5 x −5 to 5, y −2 to 8.

Main question: *An audio app's Reverse button plays a clip backwards and its Invert button flips the wave upside down. How do −x and −y reflect a graph?*
Entry knowledge (g01, w26, e01): replacing x or y in an equation and images of points; odd functions; 2ˣ and its asymptote.
Stops after: replacing x by −x (reflection in the y-axis) and y by −y (reflection in the x-axis), with images of points, the equation of a reflected graph, and both together as a half-turn. No dilations, no combined sequences.
Handoff: math-a11-g03: "a photocopier copies a graph at 200%, or stretches only its width: what's the new equation?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed for the g strand): "−x" and the y-axis mirror blue; "−y" and the x-axis mirror amber; horizontal slide teal and vertical slide violet (recalled only); parent dashed grey ghost; image ink; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · GRAPH TRANSFORMATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: Reverse and Invert
> Here's a sound clip in an audio app on a phone, a doorbell going ding. The graph shows its sound wave. It strikes loud, then fades away. Let's put time zero at the middle of the clip, so time runs from minus three to three seconds along the x-axis. The app has two buttons. **Reverse** plays the clip backwards, so the fade-out becomes a slow swell. **Invert** flips every wiggle of the wave upside down, and it sounds just the same to your ear. Both buttons reflect the graph, like a mirror would. One replaces x by minus x in its equation, and the other replaces y by minus y. So how do minus x and minus y reflect a **graph**?

Visual: opens on g01's final frame exactly (the phone `maths/ma12-phone-v1.png`, 760 px tall, with the coded audio app: the ding's wave on axes x −3 to 3 "time (s)" and y −9 to 9 "wave height", buttons "Reverse" and "Invert"; the headphones `maths/ma12-headphones-v1.png` as a 220 px badge; chips "Reverse: replace x by −x?", "Invert: replace y by −y?", "Next: reflections", "?"). On the first sentence the "Next" chips fade, the play-head sweeps once and the wave draws in ink (the strike at x = −2, then the fade). On "Let's put time zero" the y-axis glows at the clip's middle, hand tag "time 0: the middle". On "Reverse" the button presses (blue), the wave folds across the y-axis over 1.2 s into a dashed-ghost-plus-ink pair, the play-head sweeps the reversed wave, hand tag "fade-out → swell"; then it folds back. On "Invert" the button presses (amber), the wave folds across the x-axis, hand tag "upside down"; then it folds back. On "graph" heading "Reflecting graphs", and the question chip "−x and −y: which flip?" moves to the top right.

### 2. replace x by −x: a flip in the y-axis
> Start with Reverse. Played backwards, at time x you hear what the original played at time minus x. Two seconds after the middle, you hear the moment from two seconds before it. So the loud strike, which was at minus two, now happens at plus **two**. In the equation, that's y equals f of minus x. The new graph at x copies the old graph at minus x. So every point x, y moves to minus x, y. It keeps its height, and lands the same distance from the y-axis, on the other **side**. That's a reflection in the y-axis, a flip across it, like a mirror. A point on the y-axis doesn't move, because minus zero is still **zero**. So replacing x by minus x flips the graph in the y-axis, even though x is the letter that **changed**.

Visual: stage change: the app screen enlarges to a full plot (1,300 × 720 px, x −4 to 4, y −9 to 9; the time axis keeps its sub-label "time (s)" in grey), the phone shrinks to a 260 px badge at the top left with the headphones beside it. The original wave shows as a dashed grey ghost; its envelope is outlined. A paired readout (52 px) under the plot: "new graph at x = 2" and "copies the old graph at x = −2", the 2 and −2 blue. On "two" (first) the strike's crest at x = −2 rings and a blue dotted path flies it across the y-axis to x = 2, where the reversed (ink) wave draws (`AudioWaveView` Reverse). Equation strip (52 px): "y = f(−x)" with "−x" blue. On "side" the tracer carries three envelope points, (−2, 8) → (2, 8), (−1, 4) → (1, 4) and (1, 1) → (−1, 1), each along a dotted horizontal path bisected by the dashed y-axis mirror (blue crease), equal-distance ticks on each half; coordinate readouts swap the sign of x in transit; rule chip "(x, y) → (−x, y)" (44 px), hand tag "same height, other side". On "zero" the point (0, 2) on the y-axis pulses and stays, hand tag "on the mirror: stays". On "changed" a red slip "−x flips in the x-axis" writes and is crossed, caption "x changes sign: flip across the y-axis".

### 3. replace y by −y: a flip in the x-axis
> Now Invert. Zoom in on the first few wiggles. Every height changes sign, so a crest at height seven becomes a trough at minus **seven**. In the equation, that's replacing y by minus y. Minus y equals f of x is the same as y equals minus f of x, so every height is multiplied by minus one. Each point x, y moves to x, minus y, a reflection in the x-axis. The points where the wave crosses the x-axis stay exactly where they are, because minus zero is **zero**. That's why the inverted wave still crosses the axis at the very same moments. The number outside, minus one, acts on every height, just as it's **written**.

Visual: clear change: the plot zooms to the first wiggles (x −2.2 to −0.8, y −9 to 9; 1,300 × 720 px), the reversed wave gone, the original as ink with a dashed ghost. The x-axis is the mirror (amber crease). On "seven" the crest near (−1.9, 7) rings and an amber dotted vertical path carries it to (−1.9, −7) (`AudioWaveView` Invert), the whole zoomed wave folding over the x-axis; the "Invert" button badge glows amber. Rows (52 px): "−y = f(x)" then "y = −f(x)" with "−" amber, hand tag "every height × (−1)"; rule chip "(x, y) → (x, −y)" (44 px). On "zero" three axis crossings ring and stay while the wave flips past them, hand tag "crossings stay". On "written" the "−" in "y = −f(x)" circles, chip "outside: acts on every height, as written".

### 4. in a graphing app: two flips, one curve?
> Let's check it in a graphing app, with y equals x cubed minus two x. Flip it in the x-axis by replacing y with minus y, and you get minus x cubed plus two x. Now start again, and flip it in the y-axis by replacing x with minus x. That's minus x, all cubed, minus two times minus x, which simplifies to minus x cubed plus two x as **well**. Two different flips, exactly the same curve. That only happens because this cubic is an odd function, like the ones you met earlier. For an odd function, flipping it sideways gives the same picture as flipping it upside down. Most graphs aren't odd. Take root x. Flipped in the y-axis, it points left. Flipped in the x-axis, it hangs below. Two different **graphs**. And doing both flips moves every point x, y to minus x, minus y, a half-turn about the **origin**.

Visual: stage change to the graphing-app screen (`ScreenApp`, 1,150 × 760 px, x −3 to 3, y −3 to 3, equal units; unbranded input bar), the phone badge at the top left. Input "y = x³ − 2x" types; the curve draws in ink. On "minus x cubed plus two x" (first) a second input "−y = x³ − 2x" types (amber "−y") and the curve folds over the x-axis into its image; row beside the app (44 px): "−(x³ − 2x) = −x³ + 2x". The image resets. A third input "y = (−x)³ − 2(−x)" types (blue "−x"); the curve folds over the y-axis; on "well" it lands exactly on the first image, both outlined at once, row "(−x)³ − 2(−x) = −x³ + 2x", hand tag "same curve!" (the visual surprise); grey chip "w26: odd function". On "Take root x" the screen clears to "y = √x" (ink) with "y = √(−x)" folding left (blue) and "−y = √x" folding down (amber); on "graphs" hand tag "two different flips". On "origin" the cubic returns with the ringed point (1, −1) carried by a dotted half-turn arc to (−1, 1), rule chip "(x, y) → (−x, −y): half-turn", hand tag "half-turn".

### 5. worked example: the equation of a reflected graph
> Here's a worked example. Let f of x be x squared minus four x plus three, with its vertex at two, minus one. Write the equation after a reflection in the y-axis. Replace every x by minus x, in brackets. That's minus x, all squared, minus four times minus x, plus three. Minus x, all squared, is x squared, and minus four times minus x is plus four x. So y equals x squared plus four x plus **three**. Its vertex flips to minus two, minus **one**, the same height on the other side. Writing minus x squared for the first term is the **slip**. The bracket matters, because minus x times minus x is positive. For a reflection in the x-axis instead, every term changes sign. That's y equals minus x squared, plus four x, minus **three**.

Visual: clear change to the g01 board. Task strip (44 px): "f(x) = x² − 4x + 3. Write the equation after a reflection in the y-axis." Givens card (44 px, left): "vertex (2, −1)", "reflect in the y-axis: replace x by −x" (blue). Small plot at the right (720 × 600 px, x −5 to 5, y −2 to 8) with y = f(x) as a dashed ghost and its vertex ringed. Rows, current row 52 px, earlier rows 32 px: "y = (−x)² − 4(−x) + 3" (each −x blue in a bracket, hand tag "every x, in brackets"); "(−x)² = x², −4(−x) = +4x" (hand tag "(−x)² = x²"); on "three" (first) "y = x² + 4x + 3" in a green frame. On "one" the parabola folds across the y-axis and the vertex readout reads "(−2, −1)". On "slip" a red slip "y = −x² + 4x + 3" writes and is crossed, caption "(−x)(−x) = +x²". On "three" (second) a short amber row "x-axis instead: y = −x² + 4x − 3" writes, the ghost folding down on the small plot to its image with vertex (2, 1), hand tag "every term flips".

### 6. memory aid
> Here's the summary of both flips. Negate x, and the graph flips sideways, across the y-axis. Negate y, and it flips upside down, across the x-axis. The mirror is never the axis named by the letter you changed. Negating x makes every x-coordinate change sign, so the points jump across the y-axis. Points on the mirror line stay put. And replace every x, in brackets, so no term gets **missed**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the ding's wave with Reverse (blue fold) and Invert (amber fold) playing once each. Main line, hand font 56 px: "Negate x: flip across the y-axis. Negate y: flip across the x-axis." On "missed" the key line, 40 px: "Points on the mirror stay put. Replace every x, in brackets." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. The graph of y equals f of x passes through A, minus three, two, B, zero, minus one, and C, four, zero. Find the images of A, B and C when y is replaced by minus y, and when x is replaced by minus x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The graph of y = f(x) passes through A(−3, 2), B(0, −1) and C(4, 0). Find the images of A, B and C when y is replaced by −y in the equation, and when x is replaced by −x." The full question stays on screen. Picture slot: empty square axes, x and y −5 to 5, with A, B and C plotted and labelled, nothing else. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Replacing y by minus y changes the sign of every y-coordinate. A goes to minus three, minus two, B to zero, one, and C stays at four, zero, on the x-**axis**. Replacing x by minus x changes every x-coordinate. A goes to three, two, B stays at zero, minus one, and C goes to minus four, **zero**. Three, two for A under the first is the slip, the wrong **coordinate**.

Visual: the card shrinks to the top (30 px). On the picture's axes the x-axis mirror glows amber and A, B, C fly along dotted vertical paths; rows (44 px, amber): "y → −y: A(−3, −2), B(0, 1), C(4, 0)"; on "axis" C pulses, tag "on the mirror: stays". The y-axis mirror glows blue and the points fly horizontally from the originals; rows (blue): "x → −x: A(3, 2), B(0, −1), C(−4, 0)"; on "zero" (last) the rows sit in a green frame, B pulsing. On "coordinate" a red slip "y → −y: A(3, 2)" writes and is crossed, caption "−y changes y, not x". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. For f of x equals two to the x, write the equations of the graphs you get by replacing x by minus x, and by replacing y by minus y. State the y-intercept and the horizontal asymptote of each. Pause here to answer.

Visual: `QuestionCard`, 40 px: "For f(x) = 2ˣ, write the equations of the graphs obtained by (a) replacing x by −x and (b) replacing y by −y. State the y-intercept and the horizontal asymptote of each." Picture slot: empty axes, x −3 to 3, y −5 to 5. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Replacing x by minus x gives y equals two to the minus x, a half to the x. It still crosses at zero, **one**, on the mirror, with asymptote y equals zero. Replacing y by minus y gives y equals minus two to the x. It crosses at zero, minus **one**, and the asymptote y equals zero stays, because the x-axis is the mirror. Minus two, all to the x, is the **slip**. The minus goes on the x, not the base.

Visual: the card shrinks to the top. On the picture: y = 2ˣ as a dashed ghost (grey chip "e01"); it folds across the y-axis (blue) to y = 2⁻ˣ; rows (44 px): "(a) y = 2⁻ˣ = (½)ˣ"; on "one" (first) "(0, 1), asymptote y = 0" (green frame). It folds across the x-axis (amber) to y = −2ˣ; rows "(b) −y = 2ˣ, y = −2ˣ"; on "one" (second) "(0, −1), asymptote y = 0" (green frame), the dashed asymptote pulsing in place. On "slip" a red slip "(a) y = (−2)ˣ" writes and is crossed, caption "replace x: 2^(−x)". Hold about 1 s.

### 11. handoff
> Flips keep a graph's size and shape. Next, we change its size. Here's a photocopier, and a page with y equals x squared drawn on graph paper, with the origin at the page's corner. Copy it at two hundred per cent, and every distance on the page doubles. Or stretch only the width to two hundred per cent, and the curve gets wider, but no taller. What's the equation of each copy? That's **next**, stretching a graph.

Visual: the memory lines show small at the top (30 px), then fade. Board clear. On "photocopier" the copier plate `ma11-photocopier-v1.png` (560 px wide) arrives at the left. On "graph paper" a coded page (520 × 680 px) beside it shows y = x² for x 0 to 3 on graph paper, its origin at the page's lower-left corner. On "two hundred per cent" the copier's coded panel reads "Zoom 200%"; on "only the width" a second setting "Width 200% · Height 100%". On "next" chips "copy at 200%: what equation?", "width only: what equation?", "Next: stretching a graph" and "?". Hold about 2 s. This is g03's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Replace x by −x: y = f(−x), a reflection in the y-axis; (x, y) → (−x, y).
- Replace y by −y: y = −f(x), a reflection in the x-axis; (x, y) → (x, −y).
- Points on the mirror line stay put.
- Replace every x, in brackets: f(x) = x² − 4x + 3 gives f(−x) = x² + 4x + 3.
- Both: (x, y) → (−x, −y), a half-turn about the origin.

Memory aid (framed card, right side, as in scene 6): *Negate x: flip across the y-axis. Negate y: flip across the x-axis.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and g03's opening frame.

## Teaching checks

- **Does it explain causes?** Why −x reflects in the y-axis: the new graph at x copies the old one at −x (2). Why points on the y-axis stay: −0 = 0 (2). Why −y reflects in the x-axis: −y = f(x) makes every height its negative (3). Why x-intercepts stay: −0 = 0 (3). Why the cubic's two flips agree: it is odd (4). Why the brackets matter: (−x)² = x² (5).
- **Misconceptions addressed:** swapping the axes (2 crossed); moving points on the mirror (2, 3, A1); negating only part of the expression (5 crossed); "two flips always differ" and "both flips cancel" (4); the wrong coordinate (A1 crossed); (−2)ˣ (A2 crossed).
- **Visual standard, item by item:** 1 the phone app from the first frame (g01's frame), the phone badge through 2 to 4; 2 a new stage every 35 to 60 s; 3 Reverse and Invert folds with a play-head, the point tracer, the app's folds; 4 fixed roles (−x blue, −y amber); 5 large type; 6 hand tags; 7 the g01 board in 5; 8 framed card and five bullets; 9 two flips landing on one curve.
- **One idea at a time:** the y-axis flip (2), the x-axis flip (3), the app and the half-turn (4), the equation (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** g01's replace-language and images of points are recalled in a phrase; w26's odd test is a grey chip; e01's 2ˣ features are recalled in A2's feedback only.
- **Syllabus coverage:** `cifbd84c1c`: x → −x (2, 4, 5, A1, A2; key notes 1, 3, 4), y → −y (3, 4, 5, A1, A2; key notes 2, 3), with a graphing application (1, 4).
- **Out of scope by design:** even and odd tests (w26); dilations (g03); sequences (g04).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "The graph of y = f(x) passes through A(−3, 2), B(0, −1) and C(4, 0). Find the images of A, B and C when y is replaced by −y in the equation, and when x is replaced by −x."
Model answer: y → −y: (−3, −2), (0, 1), (4, 0); C is on the x-axis and stays. x → −x: (3, 2), (0, −1), (−4, 0); B is on the y-axis and stays. Classic mistake (crossed): A → (3, 2) under the first.

**Attempt 2 (scene 9; pack question 2, original, HSC style, 2 marks suggested).** "For f(x) = 2ˣ, write the equations of the graphs obtained by (a) replacing x by −x and (b) replacing y by −y. State the y-intercept and the horizontal asymptote of each."
Model answer: (a) y = 2⁻ˣ (= (½)ˣ): (0, 1), y = 0. (b) −y = 2ˣ, so y = −2ˣ: (0, −1), y = 0. Classic mistake (crossed): "y = (−2)ˣ".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ding envelope | (−2, 8), (−1, 4), (0, 2), (1, 1) → reversed (2, 8), (1, 4), (0, 2), (−1, 1); crest (−1.9, 7) → (−1.9, −7) | 1 to 3 |
| Site cubic | x³ − 2x: −f(x) = f(−x) = −x³ + 2x; half-turn (1, −1) → (−1, 1) | 4 |
| √x | √(−x) (left); −√x (below) | 4 |
| Site Q9 | x² − 4x + 3, vertex (2, −1); f(−x) = x² + 4x + 3, vertex (−2, −1); −f(x) = −x² + 4x − 3, vertex (2, 1) | 5 |
| A1 | (−3, −2), (0, 1), (4, 0); (3, 2), (0, −1), (−4, 0) | 7, 8 |
| A2 | 2⁻ˣ: (0, 1), y = 0; −2ˣ: (0, −1), y = 0 | 9, 10 |
| Handoff | y = x² on the page; 200%; width 200%, height 100% (no equation stated) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `g-designs/verify.py`, run with `python -I`); Codex to re-check.

- 8(½)^(x + 2) at x = −2, 0, 1, 2: 8, 2, 1, ½.
- −(x³ − 2x) = −x³ + 2x; (−x)³ − 2(−x) = −x³ + 2x; −f(−x) = x³ − 2x; (1, −1) is on the cubic and (−1, 1) is its half-turn image.
- (x² − 4x + 3) at −x: x² + 4x + 3, vertex (−2, −1); −(x² − 4x + 3) = −x² + 4x − 3, vertex (2, 1); vertex of x² − 4x + 3 is (2, −1).
- A1 images as listed; A2: 2⁻ˣ = (½)ˣ, value 1 at x = 0; −2ˣ is −1 at x = 0.

## Memory aid check

- **"Negate x: flip across the y-axis. Negate y: flip across the x-axis."** Original. Meaning, as said in scene 6: replacing x by −x reflects in the y-axis and replacing y by −y reflects in the x-axis; the axis whose letter is negated is not the mirror. Assumptions checked: "negate" means replace every x (or y) in the equation by its negative (key line: "Replace every x, in brackets"); equal axis units make the flip look like a mirror image (scenes 2 to 4). It helps a new case: y = √(−x) is √x flipped across the y-axis, so it lives at x ≤ 0. Introduced after scenes 2 to 5.
- **Considered, not used:** "x flips x" (true of coordinates, (x, y) → (−x, y), but easily heard as "flips in the x-axis", the very slip scene 2 crosses).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `g-designs/count.py`): 5,513 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the Reverse and Invert folds, the tracer flights, the app's folds) and the 45 s notes scene: about 500 s. Characters per scene (1 to 12): 617, 707, 604, 793, 717, 390, 232, 355, 223, 389, 411, 75. Speech before the notes is about 409 s, under the 570 s cap. Feedback speech: about 27 s and 29 s.

Reserve trims if the voiced take runs long: scene 3's "That's why the inverted wave still crosses the axis at the very same moments" (keep the ringed crossings); scene 5's last two sentences (keep the amber row, silent).

## Scene list and build ids

Lesson key `m-a11g02` (route math-a11-g02). Explainer folder `src/explainer/lessons/math-a11-g02`; build inputs in `docs/production/claude-pm/lessons/math-a11-g02/` (at voicing).

In order (12 scene headings): hook-reverse-invert, flip-y-axis, flip-x-axis, app-two-flips, worked-equation, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | g01's frame; the audio app; Reverse and Invert |
| 45 to 105 s | 2 | Reverse as a y-axis reflection, point tracer |
| 105 to 155 s | 3 | Invert zoomed, x-axis reflection |
| 155 to 215 s | 4 | Graphing app: the cubic, √x, the half-turn |
| 215 to 275 s | 5 | g01 board: the reflected equation |
| 275 to 295 s | 6 | Framed memory card |
| 295 to 385 s | 7 to 10 | Question cards and countdowns, then feedback |
| 385 to 420 s | 11 | Photocopier frame for g03 |
| 420 to 465 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: g01's last frame continues into 1; 1 to 2 stage change (the app enlarges); 2 to 3 clear change (zoom); 3 to 4 stage change to the graphing app; 4 to 5 clear change to the board; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-g02-learning-review.md`, `science_check` = `checks/m-a11-g02-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only): `ma12-phone-v1.png` (plain phone, blank screen; reused for the audio app, as w31 reused it for a graphing app) and `ma12-headphones-v1.png` (grey and teal over-ear headphones; badge only). No new plate for this video's teaching. The final frame shows the new photocopier plate, painted under g03's brief, which must exist before the g02 build.

Coded: the waveform and envelope, both buttons, every graph and mirror, flight paths, the app screen, the board, the page on the copier, the countdown, the key notes.

### Studio kit use and additions

Uses: `FunctionSimulator` (folds through 0), `TransformationTracer` (new, shared g01 to g05; see `../checks/maths-a11-kit-needs-g-s.md`), `ScreenApp`, `StudioPlot`, `ExpressionSlot`, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`AudioWaveView`** (new, small): a fast sine inside an envelope on a time axis, with a play-head, and two actions: Reverse (fold about x = 0) and Invert (fold about y = 0), each 1.2 s, the ghost kept. Check: after Reverse every sample at x equals the original at −x; after Invert every sample is the negative of the original.
2. **Mirror crease and equal ticks** (small, part of `TransformationTracer`): a dashed mirror line with a crease highlight and equal-distance ticks on each flight path. Check: equal axis units in every window with a reflection.

## Codex asset brief

No new plate for g02's teaching. The handoff frame needs `ma11-photocopier-v1.png`, briefed in `math-a11-g03.md`; paint it before the g02 build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the crosswalk JSON exactly.
3. Confirm x → −x is always called a reflection in the y-axis and y → −y a reflection in the x-axis, and that both forms (−y = f(x) and y = −f(x)) appear.
4. Confirm every reflection window uses equal axis units.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, that scene 1 opens on g01's final frame and that scene 11 matches g03's opening frame.

## YouTube metadata (draft)

Title: Reflecting Graphs: Replacing x by −x and y by −y | Year 11 Maths Advanced

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson02.sa.html

An audio app's Reverse button plays a clip backwards, and its Invert button flips the sound wave upside down. Both are reflections of a graph. See why replacing x by −x reflects a graph in the y-axis and replacing y by −y reflects it in the x-axis, find images of points, write the equation of a reflected graph with every x in brackets, and use a graphing app to see when two different flips give the same curve. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Graph transformations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Establish using graphing applications that replacing x by -x in the equation of a graph corresponds to the reflection of the graph in the y-axis, and that replacing y by -y corresponds to a reflection in the x-axis"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

Builds on: Translating graphs; even and odd functions. Next: Stretching graphs (dilations).

#Year11Maths #MathsAdvanced #GraphTransformations #HSCScience

## Open decisions

- **1. "Invert sounds the same" (learning review).** The hook says Invert "sounds just the same to your ear" and gives no reason (author note b). If the reviewer finds the claim distracting, cut the clause; nothing else depends on it.
- **2. Time zero at the clip's middle (learning review).** Reverse is a reflection in the y-axis only if time is measured from the clip's middle; the hook says so on screen and in narration. Check that it reads as a choice of axis, not a trick.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from g01, w26 and e01; check that "at time x you hear what played at −x" makes the y-axis reflection feel caused, not asserted; that the zoomed Invert shows heights changing sign; that the app's surprise is read as "this cubic is special", not "the flips are the same"; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
