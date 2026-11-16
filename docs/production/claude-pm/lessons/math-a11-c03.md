# Maths A11 C03: How do we estimate a changing rate from a real-world graph? Non-linear models have changing rates, the tangent at each point, units and sign, and saying what the rate means (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,596 characters by script (see "Narration length estimate"), 14 scene headings, about 508 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c03-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 6 (the tangent's read points sit almost on the curve, at c01's secant ends): **accepted**, reviewer's wording and visual: read points about (6:30, 5) and (9:30, 192), legs "3 h" and "187 cups", row "187 ÷ 3 ≈ 62 cups per hour". Added the hand tag "on the tangent, not the curve" (the read points sit about 12 and 5 cups off the curve). The c01 chip stays. The spoken length is unchanged (197 characters either way).
2. Optional, root ruling 2 on c01 to c09 ("model curve" tag): **accepted** (a root ruling not previously carried into the design). A grey hand tag "model curve" (34 px) writes near the cooling curve's tail in scene 1 and stays in scenes 3 and 5. No narration change.

Narration unchanged at 5,596 characters by script, about 508 s with holds. Every changed value was rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: thirty-fourth video of Year 11 Mathematics Advanced (2024), outline order 34, Introduction to differentiation. Pre-design pack: `../pre-design/maths-a11/math-a11-c03.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson12.sa.html` (its "reading and interpreting a practical graph" card: flat means 0, negative means decreasing, steeper means faster; `we-3`'s draining tank is a secant and is not used). Route entry: `math-a11-c03` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted hot chocolate mug (c02's brief) and the reused coffee cart badge (c01) (prefix `ma11-`); every graph, tangent and readout coded.

Owner rules applied: as c01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (food: a cooling drink), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Estimating change), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci7e80ed31`: "Recognise when modelling with a non-linear function that the rate of change is not constant and is represented by the gradient of the tangent to the curve at each point on the curve"
- `ci1a06a2ed`: "Estimate the instantaneous rate of change of a non-linear function at a given point from a given graph of a practical situation"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c02's final frame (the mug, the cooling curve, a dashed violet tangent at t = 4 with "?", chips "Next: rates of other things" and "°C per minute?"). Teaches: a linear model's rate is constant but a non-linear model's rate changes, given at each point by the tangent's gradient (`ci7e80ed31`; the line recalled from c01, the curve original); estimating the instantaneous rate at a point from a practical graph by a drawn tangent, with units from the axes and a sign, and saying what it means in words without a double negative (`ci1a06a2ed`, original teaching on a practical tangent: the site's only practical example is a secant); steeper means faster; "at" a time needs a tangent, "from ... to" a secant. Stops at reading graphs. Not taught: Q(c + h) and numerical tables (c04); f′ and formulas (c05 on); interpreting f′(c) with units from a formula (c17, root ruling 4).

## Decisions

- **Anchor: a mug of hot chocolate cooling on a kitchen bench (painted plate, live).** It cools fast while it's hot and slowly as it nears room temperature, so its rate changes visibly along the curve, the rate is negative (falling), and "cooling at 4 °C per minute" is the everyday sentence the syllabus wants. Food. Pack anchor 1. No Year 12 or w-strand design uses a hot drink (Year 12 d19 considered and rejected one; grep 16 Nov). The turnstiles (pack anchor 2) become attempt 2.
- **The model (author only, never shown as a formula).** T(t) = 20 + 324/(t + 5) °C, t minutes after pouring, 0 ≤ t ≤ 30: T(0) = 84.8, T(4) = 56 with gradient −4 (tangent through (0, 72) and (10, 32)), T(13) = 38 with gradient −1 (tangent through (3, 48) and (23, 28)). Chosen so both tangents pass through readable grid points. It falls towards 20 °C and flattens, like a real cooling drink; it is a smooth shape for a "given graph", not a physical law (author note a).
- **Simulations (standard item 3).**
  1. **`FunctionRider` with a live tangent** (scene 2): a violet tangent rides along the cooling curve with a live readout "rate: … °C per min" that changes (−13 at the start to about −0.3 at 30 min); the same rider on the cart's takings line from c01 keeps "5 $ per cup" frozen. Side by side, so "not constant" is seen.
  2. **`TangentReader`** (scenes 3, 5; c02's part): the tangent at 4 and at 13 with ringed read points, legs and readouts with units.
  3. **A mug thermometer** (scenes 1, 3, 5): a coded thermometer column beside the mug falls in step with the curve as a time cursor moves; at t = 4 and t = 13 its fall-rate is shown as a small violet arrow whose length is the rate.
- **Colour roles (fixed, as c01 and c02).** Run (time) blue; rise (temperature change) teal; tangent and instantaneous rate violet; secant and average amber (scene 6 only); answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "same everywhere", "changes", "on the tangent", "°C per min", "minus: falling", "one sign only", "steeper = faster", "at: tangent", "from ... to: secant", "higher isn't steeper".
- **Stage changes (standard item 2).** The mug and its curve (1); line and curve riders side by side (2); the tangent at 4 (3); the sentence card (4); the tangent at 13 beside the one at 4 (5); the cart's curve at 8 am, a rising rate (6); g01 board, at against from (7); framed card (8); question cards (9 to 12); the phone map (13); key notes (14).
- **Worked examples (g01 layout).** 3 and 4: the rate at t = 4, −4 °C per minute, and its sentence; crossed "cooling at −4 °C per minute" (double negative). 5: the rate at t = 13, −1 °C per minute. 6: the cart at 8 am, about 62 cups per hour (positive, an estimate). 7: the secant over [0, 10], about −4.3 °C per minute, crossed as an answer to "at 4 minutes".
- **Memory aid.** Framed card: "Draw, read, divide, describe." Key: "draw the tangent; read two far points on it; rise ÷ run with units; say it in words with one sign".
- **Visual surprise.** The tangent rider's readout on the curve slides from about −13 to −0.3 while the one on the line never moves; at 13 minutes the tangent is visibly a quarter as steep as at 4.
- **Site notes (pack section 8).** No logged error affects this video. The site's practical example (`we-3`, tank) is an average and is not used; the pack notes the practical tangent is original teaching.
- **Plain meanings at first use.** Non-linear ("not a straight line"); instantaneous rate of change ("how fast it's changing at one moment"); "practical graph" not said; double negative ("two minuses that cancel, so the meaning flips").
- **Attempts.** A1 (original; a bag of ice melting): tangent at t = 10 through (0, 900) and (30, 300): −20 g per minute, melting at about 20 g per minute; crossed "+20" (sign dropped). A2 (pack Q2, turnstiles): 80 and 30 people per minute; faster at t = 20 by 50; crossed "t = 50, because more people are inside".
- **Mistake scene:** none separate. One rate for a whole curve (2); the double negative (4 crossed); a secant for "at" (7 crossed); the sign dropped (A1 crossed); higher means steeper (A2 crossed; site card "steeper means faster").
- **Cause chain taught, in order:** (1) a straight line has one steepness, so a linear model has one rate; a curve's steepness changes, so its rate changes from point to point (2); (2) the rate at a point is the gradient of the tangent there (from c02), so to estimate it we draw that tangent and read it (3); (3) the units are the y unit per the x unit, and a negative gradient means the quantity is falling (3); (4) "cooling" already says falling, so a sentence keeps one sign (4); (5) a steeper tangent means a faster change, and as the drink nears room temperature its tangent flattens (5); (6) "at" asks for one moment, so a tangent; "from ... to" asks for an average, so a secant (6).
- **Entry knowledge (route):** c02 (instantaneous speed as the tangent's gradient, read from two points on a drawn tangent); c01 (average rate with units from the axes).
- **Handoff (to math-a11-c04, "How do shrinking secants find the gradient of a curve?").** Scene 12: the reused phone (`maths/ma12-phone-v1.png`, 620 px) with a coded map on its screen: a winding road with a smooth bend and a sharp T-junction corner; a magnifier ring over the bend with "?" in its inset; chips "Next: the gradient of a curve, exactly" and "?". This is c04's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) T(t) = 20 + 324/(t + 5); T′(t) = −324/(t + 5)². T(0) = 84.8, T′(0) = −12.96; T(4) = 56, T′(4) = −4; tangent T = 72 − 4t (72 at 0, 32 at 10); T(13) = 38, T′(13) = −1; tangent T = 51 − t (48 at 3, 28 at 23); T(10) = 41.6; secant [0, 10] −4.32; T′(30) ≈ −0.26. The rate magnitude falls with T − 20 (T′ = −(T − 20)²/324), so "closer to room temperature, cools more slowly" holds for the model. Real cooling is roughly exponential (Newton's law), which students meet in Year 12; the narration says only that it cools more slowly near room temperature.
  (b) Ice: tangent (0, 900) to (30, 300): −600/30 = −20 g/min. The curve drawn: m(t) = 1200 − 20t − ... (author: a decreasing convex curve through (10, 700) with gradient −20; m(t) = 700 − 20(t − 10) + 0.4(t − 10)² for 0 ≤ t ≤ 35, never negative on that domain: minimum 450 at t = 35); only the tangent and its two points matter.
  (c) Turnstiles: (10, 600) to (30, 2200): 1600/20 = 80; (40, 5000) to (60, 5600): 600/20 = 30; difference 50. The tangency points are (20, 1400) and (50, 5300), so the entry rate must peak in between (average 130 per minute from 20 to 50): the picture uses N′(t) = 10.707 + 186.22·exp(−((t − 31.93)/12)²) people per minute with N(20) = 1400 (rising throughout; about 870 inside at t = 0, gates opened earlier).
  (c2) Cart (c01 model): C′(2) = 751/12 ≈ 62.6 cups per hour at 8 am; the read points (6:30, 5) and (9:30, 192) are on the tangent to within 0.4 cup and sit visibly off the curve (Revision 2; c01's secant ends (7, 40) and (9, 160) are no longer used); the narration says "about sixty-two".
  (d) Pronunciations: "degrees Celsius per minute" once, then "degrees a minute"; "minus four"; "eighty-five" (rounded from 84.8, said "about").
  (e) Windows: mug plot t 0 to 30, T 0 to 90; A1 picture t 0 to 35, m 0 to 1000; A2 picture t 0 to 70, people 0 to 6000.

Main question: *A hot chocolate cools fast, then slowly. How fast is it cooling at one moment? How do we estimate a changing rate from a real-world graph?*
Entry knowledge (c02, c01): the tangent's gradient as the rate at an instant; units from the axes.
Stops after: changing rates on non-linear models; estimating a rate at a point from a practical graph with units, sign and meaning. No formulas, no f′.
Handoff: math-a11-c04: "zoom in on a bend: how do we find a curve's gradient exactly, with numbers?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): time and run blue; temperature change and rise teal; tangent and rate violet; secant amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: fast, then slow
> Here's that hot chocolate, cooling on the kitchen bench. Its temperature graph starts at about eighty-five degrees and falls towards room temperature, twenty **degrees**. Early on it drops fast. Later it barely changes. The thermometer drops quickly at first, then hardly at all. So "how fast is it cooling?" has a different answer at different **times**. And this time the rate isn't a speed, it's degrees per minute. That's what a rate of change is, how fast one quantity changes compared with another. How do we estimate a changing rate from a real-world graph?

Visual: opens on c02's final frame exactly (the mug `ma11-hot-chocolate-mug-v1.png` with its steam wisp, the temperature-time plot with the cooling curve, the dashed violet tangent at t = 4 with "?", chips "Next: rates of other things" and "°C per minute?"). On the first sentence the chips fade; heading writes "A changing rate from a real graph?". The coded thermometer column appears beside the mug; a time cursor moves from 0, the column falling in step. As the cooling curve first draws, a small grey hand tag "model curve" (34 px) writes near its tail (root ruling 2 on c01 to c09); it stays in scenes 3 and 5. On "degrees" a dashed grey line at T = 20 labelled "room: 20 °C". On "times" two small violet arrows by the thermometer at t = 2 (long) and t = 25 (short), hand tag "changes". The chip "How fast at one moment?" moves to the top right.

### 2. a line has one rate, a curve doesn't
> First, compare a straight line with a curve. Here's the coffee cart's takings line again. Slide a point along it, and the rate stays at five dollars per cup, **everywhere**. Now slide the same point along the cooling curve, with its tangent. The tangent's gradient keeps changing, steep at first, then **flatter**. If you used one number for the whole curve, you'd be wrong almost everywhere. That's the big idea. When a model is linear, its rate of change is constant. When it isn't linear, the rate changes from point to point, and at each point it's the gradient of the tangent **there**.

Visual: clear change to two panels side by side (each 860 × 600 px). Left: c01's takings line T = 5n with the cart badge (220 px); a point rides it and the readout "rate: $5 per cup" holds; on "everywhere" hand tag "same everywhere". Right: the cooling curve with `FunctionRider` and its violet tangent riding from t = 0 to 30, readout "rate: −13.0 … −0.3 °C per min" ticking (one decimal); on "flatter" hand tag "changes". On "there" a strip writes under both panels, 44 px: "non-linear: rate at a point = gradient of the tangent there".

### 3. estimating the rate at four minutes
> Let's estimate the rate at four minutes. Draw the tangent at t equals four. It passes through zero, seventy-two and ten, **thirty-two**. Both points are on the tangent, and they're far apart. The rise is thirty-two minus seventy-two, which is minus forty degrees. The run is ten minutes. So the rate is minus forty over ten, minus four degrees Celsius per **minute**. The units come from the axes, degrees up, per minute along. And the minus sign means the temperature is **falling**. A positive gradient would mean it's warming up.

Visual: clear change: the cooling plot large (1,200 × 760 px), the grey "model curve" tag kept near its tail, the mug as a 260 px badge with its thermometer. `TangentReader` at t = 4: the violet tangent draws full length; on "thirty-two" ringed points (0, 72) and (10, 32), hand tag "on the tangent". Legs: run "10 min" (blue), rise "−40 °C" (teal, pointing down). Rows, 52 px: "(32 − 72)/(10 − 0) = −40/10"; on "minute" "= −4 °C per min" (green frame), "°C" teal over "min" blue, hand tag "°C per min". On "falling" hand tag "minus: falling", and the thermometer's arrow at t = 4 pulses.

### 4. say what it means, with one sign
> Now say what it means, in words. At four minutes, the hot chocolate is cooling at about four degrees per **minute**. The word "cooling" already carries the minus sign. So don't write "cooling at minus four degrees a minute". That's a double negative, and it would mean warming **up**. Either give the rate as minus four, or say it's cooling at four. Not both. And always include the units, because "four" on its own could mean anything.

Visual: stage change to a sentence card (1,400 px wide), the plot dimmed behind. On "minute" the card writes, 52 px: "At t = 4, the drink is cooling at about 4 °C per minute." with "cooling" underlined in violet, hand tag "one sign only". On "up" a red slip "cooling at −4 °C per minute" writes beside it and is crossed, caption "two minuses: warming". Under the card two green chips, 44 px: "rate = −4 °C/min" and "cooling at 4 °C/min".

### 5. a later time: flatter, slower
> Now try thirteen minutes. The tangent there passes through three, forty-eight and twenty-three, **twenty-eight**. That's a fall of twenty degrees over twenty minutes, so minus one degree per **minute**. It's still cooling, but only a quarter as fast. Four degrees a minute at four minutes, and one degree a minute at thirteen. The steeper the tangent, the faster the change, whatever the units. Here the tangent is flatter because the drink is closer to room temperature, and the closer it gets, the more slowly it loses **heat**.

Visual: the plot returns, with its grey "model curve" tag, and the tangent at 4 kept in pale violet. `TangentReader` at t = 13: violet tangent; on "twenty-eight" ringed points (3, 48) and (23, 28), legs "20 min" (blue), "−20 °C" (teal). Row 52 px: on "minute" "rate at 13 min = −20/20 = −1 °C per min" (green frame). The two tangents' gradients sit side by side, 44 px: "t = 4: −4", "t = 13: −1", hand tag "steeper = faster". On "heat" the gap between the curve and the room line shrinks visibly at the two times (teal brackets "36 °C above room", "18 °C above room").

### 6. a rising graph: the cart at eight o'clock
> Rates can be positive too. Here's the coffee cart's sales curve again. At eight o'clock, in the middle of the rush, draw the tangent. It passes through about half past six, five cups, and half past nine, a hundred and ninety-two **cups**. That's a rise of a hundred and eighty-seven cups over three hours, about sixty-two cups an **hour**. So at eight, the cart is selling about sixty-two cups an hour. The gradient is positive because the total is **rising**. Your reading might differ by a cup or two, and that's fine. It's an **estimate**.

Visual: clear change: c01's cart curve (clock 6 to 11, cups 0 to 250; 1,200 × 760 px), the cart badge (260 px) at the top left. `TangentReader` at 8 o'clock (t = 2): the violet tangent draws; on "cups" ringed read points at about (6:30, 5) and (9:30, 192), each visibly off the curve (the curve is near 17 and 187 there), hand tag "on the tangent, not the curve"; legs "3 h" (blue), "187 cups" (teal). Row 52 px: "187 ÷ 3 ≈ 62 cups per hour"; on "hour" green frame "about 62 cups per hour at 8 am". On "rising" hand tag "plus: rising" beside the rise leg, and a small grey chip "c01: average 7 to 9 = 60". On "estimate" a grey "±" tag on each read point.

### 7. at a time, or from one time to another?
> One trap. The question said "at four minutes", so it needs a tangent. A secant over the first ten minutes goes from about eighty-five degrees down to about forty-two. That's an average of about minus four point three degrees per minute. It's close, but it's the average over ten minutes, not the rate at **four**. "At" a time means a tangent. "From" one time "to" another means a **secant**. In an exam question, look for the word "at".

Visual: clear change to the g01 board. Task strip, 44 px: "Estimate the rate of change of temperature at t = 4." with "at" circled in violet. Small plot at the right with the tangent at 4 (violet) and the secant from (0, 84.8) to (10, 41.6) (amber). Rows, 44 px: "secant: (41.6 − 84.8)/10 ≈ −4.3 °C per min (average, 0 to 10)"; on "four" it is crossed in red as an answer to the task, caption "an average, not at 4"; the green framed "−4 °C per min" from scene 3 returns. On "secant" two chips, 44 px: "at: tangent" (violet), "from ... to: secant" (amber).

### 8. memory aid
> So here's the routine. Draw the tangent. Read two far-apart points on it. Divide rise by run, with units. Then say it in words, with one sign. It works for any practical graph, whatever the units. Draw, read, divide, **describe**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the cooling curve with the tangent at 4 and its two ringed points. Main line, hand font 60 px: "Draw, read, divide, describe." On "describe" the key line, 36 px: "tangent → two far points on it → rise ÷ run, units → words, one sign". Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A bag of ice is melting in the sun. On its graph of mass in grams against time in minutes, the tangent at t equals ten passes through zero, nine hundred and thirty, three hundred. Estimate the rate of change of the mass at t equals ten, and say what it means. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A bag of ice is melting. On its graph of mass (g) against time (min), the tangent at t = 10 passes through (0, 900) and (30, 300). Estimate the rate of change of the mass at t = 10 and say what it means." The full question stays on screen. Picture: the falling curve with the tangent at t = 10 drawn and its two points marked. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Both points are on the tangent, so use them directly. The rise is three hundred minus nine hundred, minus six hundred grams. The run is thirty minutes. So the rate is minus twenty grams per **minute**. At ten minutes, the ice is melting at about twenty grams per **minute**. Writing plus twenty, as if the ice were growing, is the slip. The mass is falling, so the rate is **negative**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: "(300 − 900)/(30 − 0) = −600/30"; on "minute" (first) "= −20 g per min" (green frame). On "minute" (second) the sentence chip "At t = 10, the ice is melting at about 20 g per minute." (green). On "negative" a red slip "+20 g per min" writes and is crossed, caption "falling: negative". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. People enter a football ground through turnstiles. On the graph of the total number inside against time in minutes, the tangent at t equals twenty passes through ten, six hundred and thirty, two thousand two hundred. The tangent at t equals fifty passes through forty, five thousand and sixty, five thousand six hundred. At which time are people entering faster, and by how much? Pause here to answer.

Visual: `QuestionCard`, 40 px: "People enter a football ground through turnstiles. On the graph of total people inside against time (min), the tangent at t = 20 passes through (10, 600) and (30, 2200), and the tangent at t = 50 passes through (40, 5000) and (60, 5600). At which time are people entering faster, and by how much?" Picture: a rising curve with both tangents drawn and their points marked. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> At twenty minutes, the tangent rises one thousand six hundred over twenty minutes, so eighty people per **minute**. At fifty minutes, it rises six hundred over twenty, so thirty people per **minute**. People are entering faster at twenty minutes, by fifty people per **minute**. Choosing fifty minutes because more people are inside is the slip. Higher on the graph isn't **steeper**.

Visual: the card shrinks to the top. Rows, 52 px: on "minute" (first) "t = 20: 1600 ÷ 20 = 80 people per min"; on "minute" (second) "t = 50: 600 ÷ 20 = 30 people per min". On "minute" (third) framed answer (green): "faster at t = 20, by 50 people per minute". On "steeper" a red slip "t = 50: more people inside" writes and is crossed, caption "higher isn't steeper". Hold about 1 s.

### 13. handoff
> So far, we've drawn tangents by eye, and a hand-drawn tangent is only an estimate. Can we find the gradient of a curve at a point exactly, with numbers? Here's a map on a phone. Zoom in on a bend in the road, and keep **zooming**. Next, we'll replace the ruler with numbers, using shrinking secants.

Visual: the memory line shows small at the top (30 px), then fades. The reused phone (`maths/ma12-phone-v1.png`, 620 px) slides in with a coded map on its screen: a winding road with a smooth bend and a sharp T-junction corner. On "zooming" a magnifier ring settles over the bend with "?" in its inset; chips "Next: the gradient of a curve, exactly" and "?". Hold about 2 s. This is c04's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Linear model: one rate. Non-linear: the rate changes along the curve.
- Rate at a point = gradient of the tangent there.
- Units: y unit per x unit. Negative means decreasing.
- Say it in words with one sign: "cooling at 4 °C per minute".
- "At" a time: tangent. "From ... to": secant.

Memory aid (framed card, right side, as in scene 7): *Draw, read, divide, describe.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and c04's opening frame.

## Teaching checks

- **Does it explain causes?** Why a curve's rate changes: its steepness changes (2). Why the tangent gives the rate at a point: c02's limit idea, recalled (2, 3). Why negative: the temperature falls as time goes on (3). Why one sign: "cooling" already means falling (4). Why the later tangent is flatter: the drink is nearer room temperature (5). Why the cart's rate is positive: its total rises (6). Why "at" needs a tangent: an average covers an interval (7).
- **Misconceptions addressed:** one rate for a curve (2); secant for "at" (7 crossed); double negative (4 crossed); dropped sign (A1 crossed); highest means steepest (A2 crossed).
- **Visual standard, item by item:** 1 the painted mug from the first frame, its thermometer live; 2 a new stage every 30 to 50 s; 3 the two riders side by side, `TangentReader`, the thermometer arrows; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 7 and the sentence card in 4; 8 framed card and five bullets; 9 one readout sliding while the other is frozen.
- **One idea at a time:** changing rate (2), reading it (3), saying it (4), comparing (5), a rising rate (6), at against from (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 28 s.
- **Avoided double teaching:** the tangent as the instantaneous rate (c02) and reading two far points (c02) are recalled, not re-derived; the takings line (c01) is a reused badge.
- **Syllabus coverage:** `ci7e80ed31` (2, 5; key notes 1, 2); `ci1a06a2ed` (3, 4, 5, 6, A1, A2; key notes 3, 4, 5).
- **Out of scope by design:** numerical secant tables (c04); f′ from a formula and its units (c17).

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 2 marks suggested, not an official marking scheme).** "A bag of ice is melting. On its graph of mass (g) against time (min), the tangent at t = 10 passes through (0, 900) and (30, 300). Estimate the rate of change of the mass at t = 10 and say what it means."
Model answer: (300 − 900)/(30 − 0) = −20 g per minute. At 10 minutes the ice is melting (losing mass) at about 20 g per minute. Classic mistake (crossed): "+20 g per min".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "People enter a football ground through turnstiles. On the graph of total people inside against time (min), the tangent at t = 20 passes through (10, 600) and (30, 2200), and the tangent at t = 50 passes through (40, 5000) and (60, 5600). At which time are people entering faster, and by how much?"
Model answer: t = 20: 1600/20 = 80 people per minute; t = 50: 600/20 = 30 people per minute; faster at t = 20, by 50 people per minute. Classic mistake (crossed): "t = 50, because more people are inside".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Mug | starts about 85 °C (84.8), room 20 °C | 1, 6 |
| Riders | line $5 per cup; curve −13.0 to −0.3 °C/min | 2 |
| t = 4 | tangent (0, 72), (10, 32): −40/10 = −4 °C/min | 3, 4, 6 |
| t = 13 | tangent (3, 48), (23, 28): −20/20 = −1 °C/min; a quarter as fast | 5 |
| Above room | 36 °C at t = 4, 18 °C at t = 13 | 5 |
| Cart at 8 am | tangent through about (6:30, 5), (9:30, 192): 187/3 ≈ 62 cups/h (model C′(2) = 751/12 ≈ 62.6) | 6 |
| Secant | (0, 84.8) to (10, 41.6): −4.32, "about −4.3" | 7 |
| A1 | −600/30 = −20 g/min | 9, 10 |
| A2 | 80, 30, difference 50 people/min | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c01c09/verify.py`); Codex to re-check.

- Revision 2: cart tangent at 8 am read at t = ½ (6:30) and t = 7/2 (9:30): tangent values 37/8 = 4.625 and 1539/8 = 192.375; curve C(½) ≈ 16.72, C(7/2) ≈ 187.03; (192 − 5)/3 = 187/3 ≈ 62.3; model C′(2) = 751/12 ≈ 62.6 unchanged.
- T(t) = 20 + 324/(t + 5): T(0) = 424/5 = 84.8; T(4) = 56; T(10) = 208/5 = 41.6; T(13) = 38; T′(0) = −12.96; T′(4) = −4; T′(13) = −1; T′(30) = −324/1225 ≈ −0.26.
- Tangent at 4: 56 − 4(t − 4): 72 at 0, 32 at 10. Tangent at 13: 38 − (t − 13): 48 at 3, 28 at 23.
- Secant [0, 10]: (41.6 − 84.8)/10 = −4.32.
- Ice: −600/30 = −20; author curve m(t) = 700 − 20(t − 10) + 0.4(t − 10)²: m(10) = 700, m′(10) = −20.
- Cart at t = 2 (8 am): C(2) = 197/2 = 98.5; C′(2) = 751/12 ≈ 62.58; tangent value at t = ½ (6:30): 37/8 = 4.625 (about 5), at t = 7/2 (9:30): 1539/8 = 192.375 (about 192); curve there C(½) ≈ 16.72, C(7/2) ≈ 187.03; (192 − 5)/3 = 187/3 ≈ 62.3 (Revision 2, SymPy, scratchpad `c-rev2/verify.py`).
- Turnstiles: 1600/20 = 80; 600/20 = 30; 80 − 30 = 50. Picture model (author): N′(t) = 10.707 + 186.22·exp(−((t − 31.93)/12)²), N(20) = 1400: N′(20) = 80, N′(50) = 30, N(50) = 5300, N′ > 0 throughout, N(0) ≈ 870.

## Memory aid check

- **"Draw, read, divide, describe."** Original. Meaning, as said in scene 7: draw the tangent at the point; read two far-apart points on it; divide rise by run with units from the axes; describe the rate in words with one sign. Assumptions checked: the graph is smooth at the point; the tangent is drawn by eye, so the answer is an estimate ("about"). It helps a new case: a phone battery graph's tangent at 2 hours, through (0, 90) and (5, 40), gives −10 percentage points per hour, "draining at about 10 percentage points an hour". Introduced after scenes 3 to 7.
- **Considered, not used:** "Steeper is faster" alone (kept as a hand tag and key note).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,596 characters (Revision 2, unchanged). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the riders, the tangents drawing, the thermometer) and the 45 s notes scene: about 508 s. Characters per scene (1 to 14): 556, 579, 520, 428, 518, 526, 428, 226, 292, 374, 411, 368, 295, 75. Speech before the notes is about 415 s, 62 s under the 570 s cap. Feedback speech: about 28 s and 28 s.

Reserve trims if the voiced take runs long: scene 1's "And this time the rate isn't a speed" sentence; scene 5's last clause.

## Scene list and build ids

Lesson key `m-a11c03` (route math-a11-c03). Explainer folder `src/explainer/lessons/math-a11-c03`; build inputs in `docs/production/claude-pm/lessons/math-a11-c03/` (at voicing).

In order (14 scene headings): hook-mug, line-vs-curve, rate-at-4, one-sign, rate-at-13, cart-at-8, at-vs-from, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 32 s | 1 | c02's frame; the mug and its thermometer |
| 32 to 70 s | 2 | Two riders, line and curve |
| 70 to 110 s | 3 | The tangent at 4 |
| 110 to 140 s | 4 | The sentence card |
| 140 to 180 s | 5 | The tangent at 13 |
| 180 to 220 s | 6 | The cart's curve at 8 am |
| 220 to 258 s | 7 | g01 board: at against from |
| 258 to 275 s | 8 | Framed memory card |
| 275 to 400 s | 9 to 12 | Question cards and countdowns, then feedback |
| 400 to 420 s | 13 | The phone map |
| 420 to 465 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c02's last frame continues into 1; 1 to 2 clear change; 2 to 3 clear change; 3 to 4 stage change to the card; 4 to 5 return to the plot; 5 to 6 clear change to the cart's curve; 6 to 7 clear change to the g01 board; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-c03-learning-review.md`, `science_check` = `checks/m-a11-c03-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no mug or hot-drink plate exists (c02's brief paints one). `maths/ma12-phone-v1.png` is reused for the handoff map.

Need (painted): none new. Reused: `ma11-hot-chocolate-mug-v1.png` (c02's brief), `ma11-coffee-cart-v1.png` (c01's brief, badge), `maths/ma12-phone-v1.png`.

Coded: every graph, tangent, leg and readout, the thermometer column and arrows, the room-temperature line, the sentence card, the map on the phone, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `FunctionRider`, `TangentReader` (c02 addition), `ThermoColumn`, `LiveReadoutBoard`, `PlateImg`, `HandTag`, `WorkingBoard`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions: none new. The rider's readout shows the model's derivative to one decimal with units; check: at t = 4 it reads −4.0 and at t = 13 it reads −1.0.

## Codex asset brief (Maths A11 C03)

No new plate. The mug is painted under c02's brief and must exist before the c02 build. The coded map on the phone (scene 12) is specified in c04's design.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly.
3. Confirm every rate carries units and one sign, and no learner sentence is a double negative except the crossed slip.
4. Confirm both read points of every tangent lie on the drawn tangent of the model (author note a).
5. Confirm the model is never presented as a formula or as a law of cooling.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c02's final frame.

## YouTube metadata (draft)

Title: Rates of Change from Real Graphs: Tangents, Units and Signs | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson12.sa.html

A hot chocolate cools fast at first and slowly later. How fast is it cooling at four minutes? See why a curved model has a rate that changes from point to point, estimate it from a drawn tangent with units from the axes, and say what it means in words with one sign. Then learn the difference between "at" a time and "from" one time to another. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise when modelling with a non-linear function that the rate of change is not constant and is represented by the gradient of the tangent to the curve at each point on the curve"
"Estimate the instantaneous rate of change of a non-linear function at a given point from a given graph of a practical situation"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Instantaneous speed and the tangent. Next: Shrinking secants and the gradient of a curve.

#Year11Maths #MathsAdvanced #RatesOfChange #HSCScience

## Open decisions

- **1. The model's shape (Codex maths check).** T = 20 + 324/(t + 5) is a smooth falling curve chosen for readable tangents; it is not Newton's law. The narration claims only "closer to room temperature, cools more slowly", which the model satisfies. If root wants an exponential model, the tangent points change and must be re-chosen.
- **2. Ice context.** Original attempt 1 (food, summer); the pack's drink-cooling question was not used because it repeats the anchor.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c02; check that the side-by-side riders make "not constant" obvious, that the one-sign rule is clear, and that "at" against "from ... to" sticks), then the Codex maths check and error check, then voicing and a build to grade A.
