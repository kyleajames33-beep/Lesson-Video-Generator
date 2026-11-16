# Maths A11 W25: How does solving a circle for y or x split it into semicircles? y = ±√(r² − x²), x = ±√(r² − y²), which halves are functions, and their domain and range (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,603 characters by script (build parser rules), 14 scene headings, about 511 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w25-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 3 (spoken intermediate decimals): **accepted** (root ruling: keep the real 4.9 m radius), reviewer's wording; the screen shows "y = √(4.9² − 3²)" then "≈ 3.87 m". Open decision 1 closed; the r = 5 fallback is not needed.

Narration now 5,603 characters by script, about 511 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: twenty-fifth video of Year 11 Mathematics Advanced (2024), outline order 25, Working with functions. Pre-design pack: `../pre-design/maths-a11/math-a11-w25.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson23.sa.html` (Semicircles and Circles from a Graph, SHA256 `b7dc15292366027dfd91478ac966025c56a70a50311628c75ef66d2d70395bfa`; `we-1` and `we-2` used with the site's numbers unchanged; `we-3` was taught in w24). Its logged copy error S11-06 ("Each semicircle is a function") is not taught (Decisions). Route entry: `math-a11-w25` in `../../programme/maths-a11-route-inputs-2.json`. Visual system: maths studio kit; one painted plate of a netball court from above (prefix `ma11-`); the goal circles, semicircles, sweeps, shadows and algebra coded.

Owner rules applied: as w24 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (sport), Australian spelling, no em dashes, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Circles and semicircles; NESA codename, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci86be862c`: "Identify and graph the semicircles y = √(r^2 - x^2), y = -√(r^2 - x^2), x = √(r^2 - y^2) and x = -√(r^2 - y^2)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w24's handoff frame (the netball court from above, its near goal line as the x axis, the coded circle of radius 4.9 m about the goal line's midpoint with the off-court half dashed grey, "x² + y² = 4.9²", "Next: an equation for half a circle"). Teaches: solving x² + y² = r² for y gives y = ±√(r² − x²), and the root sign alone means the non-negative root, so + gives the upper semicircle and − the lower (site `we-1`); the court's goal circle as an upper semicircle used to find a distance; solving for x gives x = ±√(r² − y²), the right and left semicircles; only the upper and lower semicircles are functions of x (S11-06 corrected); domain and range of each semicircle, with the halved set belonging to the variable solved for (site `we-2`); identifying and graphing each of the four from its equation. Stops at semicircles centred at the origin. Not taught: even functions (w26; the handoff only notices the mirror image); semicircles with other centres (g06); inequalities.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a netball court from above, and its two goal circles (painted plate, live).** The goal circle is a semicircle of radius 4.9 m centred at the middle of the goal line, so the full circle's equation draws a half that is off the court. Seen with the goal line along the x axis, the court's half is the upper semicircle; turned side on, the left end's goal circle is a right semicircle and the right end's is a left semicircle, so one court shows all four halves and makes the "which halves are functions" point concrete. Sport. No Year 12 Maths design uses netball or a court; the w14 design mentions a netball pass only as a rejected pack suggestion (a different object and idea). No w15 to w23 pack suggests a court. The pack's road tunnel was rejected because w18's pack suggests a truck under a parabolic road arch (the same clearance question); the garden gate and protractor carry only the upper half.
- **Court facts (author note).** Court 30.5 m by 15.25 m; goal circle radius 4.9 m about the midpoint of the goal line (netball rules). x² + y² = 4.9² = 24.01.
- **Simulations (standard item 3).**
  1. **`SemicircleSplit`** (scenes 2 and 4, new part on `CircleTracer` from w24): the circle x² + y² = 25 is drawn; as "±" writes in the equation, the circle splits along the x axis, the upper half sliding up 40 px in amber with its own label "y = +√(25 − x²)" and the lower half sliding down in violet "y = −√(25 − x²)"; in scene 4 the same circle splits along the y axis into right (amber) and left (violet) halves with "x = ±√(25 − y²)". Each half's points are computed from its equation.
  2. **`VerticalLineSweep`** (w07) over each half in turn (scene 5): the hit count reads 1 for the upper and lower halves (green) and 2 inside the right and left halves (red), pausing at x = 3 on the right half to show (3, 4) and (3, −4).
  3. **`AxisShadow`** (w09) on each half (scenes 6 and 7): blue domain bar and teal range bar, closed ends; the halved bar is ringed.
- **Colour roles (fixed for the whole video).** x **blue**, y **teal** (root ruling 12); the **plus root and its half amber**; the **minus root and its half violet**; r and r² ink, with r² tagged "r²" in grey; domain shadow blue, range shadow teal; answer **green**; mistake **red**, crossed slips only. The court's coded goal circles are white chalk lines until they split.
- **Large type, handwritten voice.** As w24. Hand tags: "+√: never negative", "top half", "bottom half", "right half", "left half", "1 hit: function", "2 hits: not a function", "full width", "half the range", "half the domain", "solved for x", "r², not r".
- **Stage changes (standard item 2).** The court (1); the split along the x axis (2); the court's upper semicircle with a distance (3); the court side on and the split along the y axis (4); four sweeps (5); two g01 boards (6, 7); the framed card (8); question cards (9 to 12); the mirror and the dominoes (13); key notes (14).
- **Worked examples (g01 layout).** 6: site `we-2` (y = √(36 − x²); crossed "domain [0, 6]"). 7: original, identify and graph x = √(9 − y²) (crossed "upper semicircle"). Site `we-1` is taught in scene 2 on the stage itself (its numbers, r = 5) rather than as a separate board. Feedback scenes: givens strip, framed answer, one crossed slip each.
- **Memory aid.** Framed card: "Whatever you solve for gets the sign and the side." Key: "y = ±√(r² − x²): + top, − bottom (range halved). x = ±√(r² − y²): + right, − left (domain halved)." Badge: the court with both goal circles.
- **Visual surprise.** The full circle on the court splits into two coloured halves as the ± is written; then, side on, a vertical line meets the right half twice, so splitting did not make it a function.
- **Site correction applied (`../site-corrections-maths-a11.md`).** S11-06: the video never says "each semicircle is a function". Scene 5 says the upper and lower semicircles are functions of x and the left and right semicircles are not, because a vertical line can cut them twice, with the site's own check value (x = 3 gives y = ±4).
- **Plain meanings at first use.** Semicircle ("half a circle, cut along a diameter"); the root sign √ ("the non-negative root only", recalled from w01 and w03); upper, lower, right and left semicircles ("which side of the centre the half lies on").
- **Attempts (pack questions, original).** A1: describe x = −√(16 − y²) and state its domain and range (left semicircle, radius 4, domain [−4, 0], range [−4, 4]); crossed "domain [−4, 4], range [−4, 0]". A2: the lower semicircle of radius 3 and y at x = 2 (y = −√(9 − x²), y = −√5 ≈ −2.24); crossed "y = −√(3 − x²)".
- **Mistake scene:** none separate. √25 = ±5 (2, the "+√: never negative" tag); all four halves as functions (5, positively); halving the domain of an upper semicircle (6 crossed); the side read from the root's sign alone (7 crossed); the wrong set halved (A1 crossed); r for r² under the root (A2 crossed).
- **Cause chain taught, in order:** (1) y² = r² − x² has two square roots, so y = ±√(r² − x²) (2); (2) √ alone is never negative, so + keeps y ≥ 0 (top) and − keeps y ≤ 0 (bottom) (2); (3) each x then gives one y, so the upper half is a function we can evaluate (3); (4) solving for x instead gives x = ±√(r² − y²), and the same sign rule picks right or left (4); (5) a vertical line meets a right or left half twice, so those are not functions of x (5); (6) the halved set is the variable solved for: its values only run from 0 to r, or from −r to 0 (6, 7).
- **Entry knowledge (route):** w24 (x² + y² = r², radius, domain and range of a relation); w07 (the vertical line test); w03 (surds such as √21 and √5); w01 (√ means the non-negative root).
- **Handoff (to w26, "How do symmetry tests tell even, odd and neither functions apart?").** Scene 13: the upper semicircle y = √(25 − x²) on an equal-scale plot with the points (3, 4) and (−3, 4) joined by a dashed horizontal line through the y axis, the y axis drawn as a violet mirror line, and beside it the three upright domino plates from w26's brief (`ma11-domino-1-4-v1.png`, `ma11-domino-3-3-v1.png`, `ma11-domino-1-2-v1.png`), with chips "Next: mirror or half-turn?" and "?". This is w26's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) √(r² − x²) is real only for −r ≤ x ≤ r, which is why the domain is [−r, r] for the upper and lower halves.
  (b) Court: y = √(24.01 − x²); at x = 3, √15.01 = 3.8743 m (shown "≈ 3.87 m"); at x = 0, 4.9 m.
  (c) Right half check: x = √(25 − y²) at x = 3 gives y = ±4 (pack recalculation).
  (d) Endpoints: each semicircle includes its two endpoints on the cutting diameter (closed shadows).
  (e) Pronunciations: "y equals plus or minus the root of r squared minus x squared"; "four point nine squared" (24.01 and 15.01 are no longer spoken, Revision 2); "minus root five".
  (f) Windows: court plot in metres, x −8 to 8, y −1 to 8 (scene 3) and x −1 to 8, y −8 to 8 (scene 4), equal scale, registered to the plate's sidecar; split plots −7 to 7, equal scale.

Main question: *A netball goal circle is half a circle. The equation x² + y² = r² draws the whole thing. How does solving a circle for y or x split it into semicircles?*
Entry knowledge (w24, w07, w03, w01): the circle x² + y² = r²; the vertical line test; surds; √ means the non-negative root.
Stops after: the four semicircles from solving for y and for x, which are functions, their domains and ranges, and identifying and graphing each from its equation. No other centres.
Handoff: math-a11-w26: "the upper semicircle is its own mirror image: mirror or half-turn?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x blue; y teal; plus root and its half amber; minus root and its half violet; r and r² ink with a grey "r²" tag; domain shadow blue, range shadow teal; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: half a circle on the court
> Here's that netball court. The goal circle is centred at the middle of the goal line, with a radius of four point nine metres. Put the origin there, and the whole circle is x squared plus y squared equals four point nine squared. But the half behind the goal line isn't on the court. The court only uses the top **half**. There's a second problem too. A vertical line meets the whole circle twice, so we can't write y as one formula in x. Not **yet**. So how does solving a circle for y, or for x, split it into semicircles?

Visual: opens on w24's final frame exactly (the court plate `ma11-netball-court-top-v1.png` with its near goal line along the coded x axis, the coded circle of radius 4.9 m about the origin, the off-court half dashed grey, the chip "x² + y² = 4.9²", "Next: an equation for half a circle" and "?"). On the first sentence the "Next" chip fades and the heading writes: "Half a circle on the court". On "half" the on-court half pulses white and the off-court half fades to 20 per cent, hand tag "on court: top half". On "yet" an amber vertical line at x = 3 crosses the full circle (both halves briefly redrawn solid) and two red dots mark its two hits, hand tag "2 hits"; then the off-court half fades again. The chip "Solve for y? Solve for x?" moves to the top right as the scene question.

### 2. solving for y: the plus or minus splits
> Take a simpler circle, x squared plus y squared equals twenty-five, radius five. Solve it for y. Move x squared across, so y squared equals twenty-five minus x **squared**. Now take the square root of both sides. y could be positive or negative, so y equals plus or minus the root of twenty-five minus x **squared**. That plus or minus is where the circle splits. The root sign on its own means the positive root, never negative. So y equals the root of twenty-five minus x squared gives y values of zero or more. That's the top half, the upper **semicircle**. Check a point. At x equals three, y is the root of sixteen, which is four, and three, four is on the circle. And y equals minus the root gives zero or less, the lower **semicircle**. A semicircle is just half a circle, cut along a diameter.

Visual: clear change to an equal-scale plot (−7 to 7, 820 × 820 px) at the left with the circle x² + y² = 25 (ink) and a small court badge (220 px) at the top left. Rows at the right, 52 px, one at a time (site `we-1`): "x² + y² = 25"; on "squared" (first) "y² = 25 − x²"; on "squared" (second) "y = ±√(25 − x²)" with "±" ringed. On "The root sign on its own" a chip "√ : the non-negative root" (44 px), hand tag "+√: never negative", with the recall "√25 = 5, not ±5" in grey. On "semicircle" (first) `SemicircleSplit`: the circle splits along the x axis; the upper half slides up 40 px in amber with the label "y = √(25 − x²)", hand tag "top half". On "Check a point" the point (3, 4) marks on the amber half with the row "x = 3: y = √(25 − 9) = √16 = 4" (44 px). On "semicircle" (second) the lower half slides down 40 px in violet, label "y = −√(25 − x²)", hand tag "bottom half". On "cut along a diameter" the x axis between −5 and 5 glows as the diameter, chip "semicircle: half a circle".

### 3. the goal circle as a function
> Back on the court. With the origin at the middle of the goal line, the court's half of the circle is y equals the root of four point nine squared minus x squared. Each x along the goal line gives exactly one y, so this upper semicircle is a **function**, and we can use it. How far out from the goal line is the circle, three metres along the line? Put x equals three. y is the root of four point nine squared, minus three squared. On a calculator, that's about three point eight seven **metres**. Right in the middle, at x equals zero, it's the full four point **nine**, one whole radius out from the post.

Visual: stage change to the court plate (about 1,200 px wide) with the goal line along the coded x axis (metres, −8 to 8) and the y axis up the court's centre line; the court's goal circle drawn as an amber upper semicircle, label "y = √(4.9² − x²)" (44 px). On "function" a short amber vertical line at x = 3 meets it once (green "1 hit"). On "Put x equals three" a blue tick at x = 3 on the goal line; rows at the right, 52 px: "y = √(4.9² − 3²)"; on "metres" "≈ 3.87 m" (teal), with a small calculator chip "calc" beside it and a teal dashed line rises from the tick to the circle, with a "3.87 m" tag. On "nine" a second teal dashed line rises from the origin to the top of the circle, tag "4.9 m". The off-court half stays hidden.

### 4. solving for x: right and left
> Now turn the court side on, so both goal lines are upright. At the left end, the goal circle bulges to the right, into the court. To describe that half, solve the circle for x instead. x squared equals r squared minus y squared, so x equals plus or minus the root of r squared minus y **squared**. The plus root gives x values of zero or more. That's the right **semicircle**. The minus root gives zero or less, the left semicircle. That's the shape at the other **end**, bulging left into the court from its own goal line.

Visual: camera continue; the court rotates 90 degrees to lie side on (about 1,400 px wide), both goal circles drawn white; the left end's circle lights amber. Rows, 52 px: "x² = r² − y²"; on "squared" "x = ±√(r² − y²)" with "±" ringed. A split plot slides in at the right (−7 to 7, 620 × 620 px): `SemicircleSplit` along the y axis on x² + y² = 25; on "semicircle" the right half slides right 40 px in amber, label "x = √(25 − y²)", hand tag "right half", and on the court the left end's circle shows a coded mini-axis at its own goal line with the same label. On "end" the left half slides left in violet, "x = −√(25 − y²)", hand tag "left half", and the right end's goal circle on the court lights violet with its own mini-axis.

### 5. which halves are functions?
> Here's the catch. Sweep a vertical line across each half. The upper and lower semicircles are met just **once** each time, so they're functions of x. But a vertical line meets the right semicircle twice. At x equals three, x equals the root of twenty-five minus y squared gives y equals four and y equals minus **four**. The left semicircle does the same. So the left and right semicircles are not functions of **x**. Only the top and bottom halves are. Splitting a circle doesn't automatically give you functions. It depends which way you cut it.

Visual: clear change to four small equal-scale plots in a row (each 420 × 420 px, −6 to 6): upper (amber), lower (violet), right (amber), left (violet), each labelled with its equation (32 px). `VerticalLineSweep` runs across the first two: on "once" each reads "hits: 1" (green), hand tag "1 hit: function". It moves to the right half and pauses at x = 3: the two hits (3, 4) and (3, −4) mark in red; on "four" the row "x = 3: 3 = √(25 − y²), y² = 16, y = ±4" writes under it (44 px). The left half shows "hits: 2" (red) at x = −3. On "x" verdict chips under the plots: "function" (green) under the upper and lower, "not a function" (red) under the right and left, hand tag "2 hits: not a function".

### 6. worked example 1: domain and range
> Let's practise. State the domain and range of y equals the root of thirty-six minus x squared. The number under the root is r squared, so the radius is **six**. It's solved for y, with the plus root, so it's the upper semicircle. The domain is the full width, minus six to **six**, the same as the whole circle. But the root is never negative, and it's biggest at x equals zero, where it's the root of thirty-six. So the range runs from zero to **six**. The classic slip is halving the domain instead. The domain is still the whole width. It's the range that loses **half**.

Visual: clear change to the g01 board (site `we-2`). Task strip, 44 px: "State the domain and range of y = √(36 − x²)." Givens card: "y = √(36 − x²)", "36" tagged "r²", the "+√" ringed amber. Plot at the right (−8 to 8, 640 × 640 px). Rows, 52 px: on "six" (first) "r = √36 = 6"; the amber upper semicircle draws. `AxisShadow`: on "six" (second) the blue bar on the x axis from closed −6 to closed 6, row "domain [−6, 6]", hand tag "full width"; on "six" (third) the teal bar on the y axis from closed 0 to closed 6, row "range [0, 6]", hand tag "half the range". Framed answer (green): "domain [−6, 6], range [0, 6]". On "half" a red slip "domain [0, 6]" writes and is crossed, caption "solved for y: the range halves".

### 7. worked example 2: identify and graph
> Here's one solved for x. Identify and graph x equals the root of nine minus y squared, and state its domain and range. Nine is r squared, so the radius is **three**. It's solved for x, with the plus root, so x is never negative. That's the right semicircle, bulging to the **right**. Its ends are zero, three and zero, minus three, and it passes through three, zero. The domain is zero to three, and the range is minus three to **three**. Calling it the upper semicircle, just because the root is positive, is the slip. The variable you solved for decides the **side**.

Visual: clear change to the g01 board. Task strip: "Identify and graph x = √(9 − y²), and state its domain and range." Givens card: "x = √(9 − y²)", "9" tagged "r²", "x =" ringed blue with the tag "solved for x". Rows, 52 px: on "three" (first) "r = √9 = 3"; on "right" "x ≥ 0: right semicircle", and on the plot (−5 to 5, 600 × 600 px) the points (0, 3), (3, 0), (0, −3) mark and the amber right semicircle draws through them. On "three" (last) the shadows: blue "domain [0, 3]" ringed "half the domain", teal "range [−3, 3]". Framed answer (green): "right semicircle, radius 3; domain [0, 3], range [−3, 3]". On "side" a red slip "upper semicircle" with a small wrong top-half sketch writes and is crossed, caption "solved for x: right or left".

### 8. memory aid
> Here's the rule in one line. Whatever you solve for gets the sign, and the side. Solve for y, and plus means top, minus means bottom, so the range is halved. Solve for x, and plus means right, minus means left, so the domain is **halved**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the court badge with both goal circles (amber right half at the left end, violet left half at the right end). Main line, hand font 60 px: "Whatever you solve for gets the sign and the side." On "halved" the key lines, 36 px: "y = ±√(r² − x²): + top, − bottom (range halved)" and "x = ±√(r² − y²): + right, − left (domain halved)". Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Describe the graph of x equals minus the root of sixteen minus y squared, and state its domain and range. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Describe the graph of x = −√(16 − y²) and state its domain and range." The full question stays on screen. Picture slot: empty equal-scale axes (−6 to 6). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Sixteen is r squared, so the radius is four. It's solved for x with the minus root, so x is never positive. That's the left **semicircle**. The domain is minus four to **zero**, and the range is minus four to four. Swapping those, with the range halved, is the slip. Solving for x halves the **domain**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "x = −√(16 − y²)", "r² = 16", "−√" ringed violet. Rows, 52 px: "r = 4; x ≤ 0"; on "semicircle" the violet left semicircle draws on the picture's axes. On "zero" the shadows and framed answer (green): "left semicircle, radius 4; domain [−4, 0], range [−4, 4]". On "domain" a red slip "domain [−4, 4], range [−4, 0]" writes and is crossed, caption "solved for x: domain halves". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Write the equation of the lower semicircle of radius three, centred at the origin, and find y when x equals two. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Write the equation of the lower semicircle of radius 3 centred at the origin, and find y when x = 2." Picture slot: empty equal-scale axes (−5 to 5). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Lower means solve for y and take the minus root, with r squared, nine, under it. So y equals minus the root of nine minus x **squared**. At x equals two, y is minus the root of nine minus four. That's minus root five, about minus two point two **four**. Writing three under the root is the slip. The circle needs r squared, not **r**.

Visual: the card shrinks to the top. `GivensStrip`: "lower", "r = 3", "x = 2" (each underlined as used). On "squared" the row "y = −√(9 − x²)" (52 px, "−√" violet) and the violet lower semicircle draws. On "four" rows "y = −√(9 − 2²) = −√5", "≈ −2.24", and the point (2, −√5) marks on the curve. Framed answer (green): "y = −√(9 − x²); at x = 2, y = −√5 ≈ −2.24". On "r" a red slip "y = −√(3 − x²)" writes and is crossed, caption "r² = 9 goes under the root". Hold about 1 s.

### 13. handoff
> Look back at the upper semicircle, y equals the root of twenty-five minus x squared. At x equals three, y is four, and at x equals minus three, y is four as well. The left side is a mirror image of the right. Some graphs look the same in a mirror, and others look the same after a half-turn, just like these dominoes. Next, how do we tell **which**?

Visual: the memory line shows small at the top (30 px), then fades. Board: an equal-scale plot (−7 to 7, 760 × 600 px) at the left with the amber upper semicircle y = √(25 − x²); on "At x equals three" the point (3, 4) marks, then (−3, 4), joined by a dashed horizontal line through the y axis; on "mirror image" the y axis draws as a violet mirror line, hand tag "mirror". On "dominoes" the three upright domino plates (`ma11-domino-1-4-v1.png`, `ma11-domino-3-3-v1.png`, `ma11-domino-1-2-v1.png`, each about 220 px tall) slide in at the right in a row. On "which" chips "Next: mirror or half-turn?" and "?". Hold about 2 s. This is w26's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = √(r² − x²): upper; y = −√(r² − x²): lower.
- x = √(r² − y²): right; x = −√(r² − y²): left.
- √ alone is never negative: it picks the half.
- Upper and lower: functions. Right and left: not functions of x.
- Upper: domain [−r, r], range [0, r]. Right: domain [0, r], range [−r, r].

Memory aid (framed card, right side, as in scene 8): *Whatever you solve for gets the sign and the side.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w26's opening frame.

## Teaching checks

- **Does it explain causes?** Why ± appears: y² has two square roots (2). Why + gives the top half: √ alone is never negative (2). Why the court's half is usable as a function: one y for each x (3). Why solving for x gives right and left halves: the same sign rule applies to x (4). Why right and left halves are not functions of x: a vertical line meets them twice (5). Why the range halves for upper and lower and the domain halves for right and left: the solved variable's values run only one side of 0 (6, 7).
- **Misconceptions addressed:** √25 = ±5 (2 tag); "each semicircle is a function" (5, S11-06); halving the domain of an upper semicircle (6 crossed); side from the root's sign alone (7 crossed); the wrong set halved (A1 crossed); r under the root (A2 crossed).
- **Visual standard, item by item:** 1 the painted court from the first frame, returning in 3, 4, 8 (badge); 2 a new stage every 30 to 55 s; 3 `SemicircleSplit` along both axes, the four-way sweep, the shadows; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 6 and 7; 8 framed card and five bullets; 9 the circle splitting into two coloured halves as ± is written, and a "half" that still fails the vertical line test.
- **One idea at a time:** solve for y (2), use it (3), solve for x (4), functions (5), domain and range (6), identifying (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 22 s each.
- **Avoided double teaching:** the circle equation (w24), the vertical line test (w07) and surds (w03) are recalled, not re-taught.
- **Syllabus coverage:** `ci86be862c`: identify and graph y = √(r² − x²) (2, 3, 6), y = −√(r² − x²) (2, A2), x = √(r² − y²) (4, 7), x = −√(r² − y²) (4, A1); key notes 1 to 5.
- **Out of scope by design:** even functions (w26); other centres (g06).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Describe the graph of x = −√(16 − y²) and state its domain and range."
Model answer: it is the left semicircle of radius 4 centred at the origin (solved for x with the negative root, so x ≤ 0). Domain [−4, 0], range [−4, 4]. Classic mistake (crossed): "domain [−4, 4], range [−4, 0]".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Write the equation of the lower semicircle of radius 3 centred at the origin, and find y when x = 2."
Model answer: y = −√(9 − x²). At x = 2, y = −√(9 − 4) = −√5 ≈ −2.24. Classic mistake (crossed): "y = −√(3 − x²)".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Court | r = 4.9 m; x² + y² = 4.9² = 24.01 | 1, 3, 13 |
| Site `we-1` | x² + y² = 25: y² = 25 − x², y = ±√(25 − x²) | 2 |
| Court semicircle | y = √(24.01 − x²); x = 3: √15.01 ≈ 3.87 m; x = 0: 4.9 m | 3 |
| Right and left | x = ±√(r² − y²); on r = 5: x = ±√(25 − y²) | 4 |
| Sweep check | x = 3 on x = √(25 − y²): y = ±4 | 5 |
| Site `we-2` | y = √(36 − x²): r = 6; domain [−6, 6]; range [0, 6]; crossed domain [0, 6] | 6 |
| Example 2 | x = √(9 − y²): r = 3; right; (0, 3), (3, 0), (0, −3); domain [0, 3]; range [−3, 3] | 7 |
| A1 | x = −√(16 − y²): left, r = 4; domain [−4, 0]; range [−4, 4] | 9, 10 |
| A2 | y = −√(9 − x²); x = 2: −√5 ≈ −2.24; crossed −√(3 − x²) | 11, 12 |
| Handoff | y = √(25 − x²): (3, 4), (−3, 4) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- Solving x² + y² = 25: y = ±√(25 − x²); x = ±√(25 − y²).
- 4.9² = 24.01; √(24.01 − 9) = √15.01 = 3.87427; √24.01 = 4.9.
- x = √(25 − y²) at x = 3: y = ±4.
- √36 = 6; √9 = 3; √16 = 4.
- −√(9 − 4) = −√5 = −2.236; slip −√(3 − 4) is not real.
- √(25 − 3²) = 4 at x = ±3; √(25 − (−x)²) = √(25 − x²).

## Memory aid check

- **"Whatever you solve for gets the sign and the side."** Original. Meaning, as said in scene 8: in y = ±√(r² − x²) the sign picks top (+) or bottom (−) and the range is halved; in x = ±√(r² − y²) the sign picks right (+) or left (−) and the domain is halved. Assumptions checked: centre at the origin; the root sign means the non-negative root. It helps a new case: x = −√(16 − y²) is solved for x with −, so it is the left half with domain [−4, 0]. Introduced after scenes 2, 4, 6 and 7.
- **Considered, not used:** "Plus is up" (false for x = √(r² − y²), which is the right half).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules: **5,603 characters**, 14 scene headings. Characters per scene (1 to 14): 516, 785, 595, 511, 535, 558, 553, 235, 138, 291, 144, 322, 345, 75.

At 13.3 characters per second the speech before the notes is about 416 s. Holds and settling: 2 countdowns of 10 s (20 s); short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s; about 24 s of settling (the split along each axis, the court turning side on, the four-way sweep and the shadows); the notes scene is 45 s. Total **about 511 s (8 min 31 s)**, inside the 5,500 to 6,800 band and about 59 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 3's "one whole radius out from the post" (keep the 4.9 m tag); scene 5's "Only the top and bottom halves are." (keep the verdict chips).

## Scene list and build ids

Lesson key `m-a11w25` (route math-a11-w25). Explainer folder `src/explainer/lessons/math-a11-w25`; build inputs in `docs/production/claude-pm/lessons/math-a11-w25/` (at voicing).

In order (14 scene headings): hook-court, split-for-y, court-semicircle, split-for-x, which-functions, worked-domain-range, worked-identify, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 42 s | 1 | w24's frame; the court and its goal circle, half off court |
| 42 to 106 s | 2 | The r = 5 circle splitting along the x axis |
| 106 to 155 s | 3 | The court's upper semicircle and a distance |
| 155 to 197 s | 4 | The court side on; the split along the y axis |
| 197 to 242 s | 5 | Four semicircles and the vertical line sweep |
| 242 to 330 s | 6 to 7 | Two g01 boards with shadows |
| 330 to 350 s | 8 | Framed memory card |
| 350 to 439 s | 9 to 12 | Question cards and countdowns, then feedback |
| 439 to 467 s | 13 | The mirrored semicircle and three dominoes |
| 467 to 512 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w24's last frame continues into 1; 1 to 2 clear change (the r = 5 plot, court badge kept); 2 to 3 stage change back to the court; 3 to 4 camera continue (the court turns side on); 4 to 5 clear change (four plots); 5 to 6, 6 to 7 clear change; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w25-learning-review.md`, `science_check` = `checks/m-a11w25-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no court, field or pitch plate from above exists in any subject (searched court, netball, field, pitch); `maths/ma12-cricket-grass-strip-v1.png` is a grass tile, not a marked court. Not used.

Need (painted, new; see the Codex asset brief): `ma11-netball-court-top-v1.png` (also needed for w24's final frame, so paint before the w24 build). The handoff uses w26's three domino plates (paint before this build).

Coded: the goal circles and their halves, axes, mini-axes, the split, sweeps, shadows, readouts, plots, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `StudioPlot` (equal scale), `VerticalLineSweep` (w07), `AxisShadow` (w09), `CircleTracer` (w24), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`SemicircleSplit`** (new; on `CircleTracer`'s circle): splits x² + y² = r² along the x axis (upper and lower) or the y axis (right and left), each half sliding apart in its role colour with its equation label; each half is drawn from its own equation. Check: the upper half's points satisfy y = √(r² − x²) with y ≥ 0, and so on for each half.
2. **Plate rotation and registration** (lesson folder): the court plate is shown at 0 and 90 degrees (rotated, never stretched); the sidecar's goal-line midpoints and metres-per-pixel place the coded circles and axes.

## Codex asset brief (Maths A11 W25, a netball court from above; also w24's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w25.md`, route entry math-a11-w25. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w24 build (w24's final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-chessboard-top-v1.png`; no text, numbers, logos, people, players, balls in play, hands, faces, glow or shadow. Never stretch.

1. `ma11-netball-court-top-v1.png` (3050 × 1525 px, **100 px per metre**, exactly to scale): a netball court seen **directly from above**, long axis horizontal, on a plain hard-court surface (muted green, slightly mottled), with white boundary lines (30.5 m by 15.25 m, the outer edge of the lines at the image border), the two transverse lines dividing it into thirds, the small centre circle (0.9 m diameter), and the two goalposts seen from above at the midpoint of each goal line (a small post base with its ring). **Do not paint the goal circles**; code draws them at exactly 4.9 m. A faint court texture only; no shadows from the posts.

Sidecar JSON (`ma11-netball-court-top-v1.json`): both goal-line midpoints in px and the measured px per metre. If the court's proportions miss 2:1 (30.5 : 15.25) by more than 1 per cent, report the measured values; the builder scales the coded circles to the measured court, never warping the plate.

Report inspection on the paper background (`#f6f1e7`) at 1,200 px and 1,400 px wide, the alpha check, and the plate with two coded 4.9 m semicircles overlaid at the goal-line midpoints. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w25-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly (including "√(r^2 - x^2)"), and no site module label appears.
3. Confirm S11-06 is applied everywhere: no learner copy says every semicircle is a function; the right and left halves are "not functions of x".
4. Confirm site `we-1` and `we-2` keep their numbers and answers.
5. Confirm both attempts carry every demand and that neither card nor picture shows a curve or answer.
6. Confirm the court facts (4.9 m about the goal line's midpoint) and the √15.01 rounding.
7. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w24's final frame and scene 13's frame matches w26's opening frame.

## YouTube metadata (draft)

Title: Semicircles: Splitting a Circle into Four Halves | Year 11 Maths Advanced

(Title length: 73 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson23.sa.html

A netball goal circle is half a circle, but x² + y² = r² draws the whole thing. Solve the circle for y and the plus or minus splits it into the upper and lower semicircles; solve for x and you get the right and left ones. Find out why the root sign picks the half, which semicircles are functions (only the top and bottom ones), and how to read each one's domain and range from its equation. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Identify and graph the semicircles y = √(r^2 - x^2), y = -√(r^2 - x^2), x = √(r^2 - y^2) and x = -√(r^2 - y^2)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: The equation of a circle (previous video); the vertical line test. Next: Even and odd functions.

#Year11Maths #MathsAdvanced #Semicircles #HSCScience

## Open decisions

- **1. Court decimals (resolved, Revision 2).** Root ruling: keep the real 4.9 m radius. Scene 3 now says "the root of four point nine squared, minus three squared" and gives only the calculator result, about 3.87 m; 24.01 and 15.01 are no longer spoken. The r = 5 fallback is not needed.
- **2. Site `we-1` on the stage (root).** It is taught in scene 2 on the split plot, not as a separate g01 board, because the split is the explanation; its numbers are unchanged.
- **3. Where "functions of x" is said (learning review).** Scene 5 says the right half is "not a function of x". The reviewer checks that students do not hear "not a function at all" as permission to ignore x = √(r² − y²) as a graph.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w25-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w24 and w07; check that "the root sign means the positive root" lands before the split; that turning the court side on makes the x-forms feel needed; that the four-way sweep makes S11-06's correction visible; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The split and the sweep carry the explanation; judge them at playback speed. Each half must be drawn from its own equation.
