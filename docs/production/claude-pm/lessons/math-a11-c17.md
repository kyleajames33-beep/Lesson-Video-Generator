# Maths A11 C17: What does f′(c) tell us about a real situation? f′(c) as the instantaneous rate of change with units and sign, and reading a quantity's graph and its rate graph together without algebra (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`, ruling 4 in particular). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,525 characters by script (see "Narration length estimate"), 14 scene headings, about 503 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c17-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Optional, scene 3a ("Same climbing speed"): **accepted**: "Same climbing rate, very different heights."

Narration now 5,525 characters by script (Revision 1: 5,526), about 503 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: forty-eighth video of Year 11 Mathematics Advanced (2024), outline order 48, Introduction to differentiation (The derivative as a rate of change). Pre-design pack: `../pre-design/maths-a11/math-a11-c17.md` (brief 243). Site lessons (read through the pack's quotations, read only): `introduction-to-differentiation/lesson12.sa.html` (`we-3`, the draining tank's average −50 L/min, used only as the model for "say what it means"; the steep-flat-steep revisit) and `lesson15.sa.html` (the height rule: where f is steepest, f′ is largest). Route entry: `math-a11-c17` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted hot-air balloon and paddock (c16's brief) and a painted shuttle-run strip for the handoff (prefix `ma11-`); every graph, cursor and readout coded.

Owner rules applied: as c01 to c16 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (travel: a hot-air balloon flight), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, The derivative as a rate of change), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci9d118719`: "Interpret f'(c) as the instantaneous rate of change of the function f(x) at x = c"
- `ci8a2722e2`: "Use graphs of functions and their derivatives, without the use of algebraic techniques, to describe and interpret physical phenomena"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c16's final frame (the balloon over the paddock, "h(t) = (60t² − t³)/50 m, t in minutes", "h′(10) = ?" with an empty units box "? per ?", "Next: what f′(c) means", "?"). Recalls c03 (a rate's units are the output's units per the input's units) and c01 (average rate). Teaches, formally (root ruling 4): f′(c) is the instantaneous rate of change of f at x = c, with units and sign, read from a formula (the balloon's climb; `ci9d118719`); f(c) against f′(c) (how much against how fast); then a quantity's graph and its rate graph together, without algebra, to describe the whole flight: highest where the rate changes from + to −, climbing fastest where the rate peaks, falling fastest where it is lowest, steady where it sits on zero; and the rate graph read on its own (`ci8a2722e2`; original teaching, the pack's gap). Stops at interpretation. Not taught: displacement and velocity (c18); finding a maximum by algebra (c16 did it for cubics).

## Decisions

- **Anchor: a hot-air balloon flight (painted plates, live).** While it climbs, h(t) = (60t² − t³)/50 m, t in minutes (0 ≤ t ≤ 40): h′(10) = 18 m/min at h(10) = 100 m; h′(30) = 18 m/min again at 540 m (same rate, different heights); h′(40) = 0 at the top, 640 m; the climb is fastest at 20 min, 24 m/min, exactly halfway up (320 m). The descent comes from the "flight log" as a graph only (no formula, `ci8a2722e2`): falling fastest at 55 min, about 32 m/min, landed and steady from 70 min. Travel; the pack's anchor 1. Grep 16 Nov: "hot-air" and "hot air" no hits; "balloon" only in c05 and c06 (a water balloon, a different object; the narration does not call back to it to avoid confusion). The pack's ice cube (anchor 2) was rejected because c03's attempt 1 is ice melting.
- **The model.** Climb: h = (60t² − t³)/50, h′ = (120t − 3t²)/50 = −3t(t − 40)/50. Descent (author note, drawn as data): h = 640(1 − 3s² + 2s³), s = (t − 40)/30, 40 ≤ t ≤ 70, then h = 0; its rate is −32 m/min at t = 55 and 0 at 40 and 70; height and rate join continuously at 40 (author note a).
- **Simulations (standard item 3).**
  1. **Balloon flight with stacked graphs** (`StudioStackedDerivativePanels` with a shared cursor; scenes 1 to 5): the balloon sprite rises and falls over the paddock at the computed height while a vertical cursor sweeps both graphs; a `LiveReadoutBoard` names both readings in words ("height 320 m, climbing 24 m per minute"). Tags appear on the graphs on cue: "climbing fastest", "highest", "falling fastest", "steady".
  2. **Cover the height graph** (scene 5): a paper card slides over the top panel, and the story is told from the rate graph alone; the card lifts to confirm each reading.
  3. **Average against instantaneous** (scene 2): an amber secant from (0, 0) to (10, 100) beside the violet tangent at 10, readouts "10 m/min average" and "18 m/min at 10 min".
- **Colour roles (the c01 to c16 roles, root ruling 7).** Heights and f **teal**; rates, tangents and f′ **violet**; time blue; the average secant **amber**; tags on both graphs amber; answer green; mistake red, crossed slips only. Units are handwritten under every rate ("m per min").
- **Large type, handwritten voice.** As c01. Hand tags: "rise ÷ run: m per min", "at that instant", "average: secant", "how fast, not how high", "+ climbing, − falling", "rate peak = fastest climb", "rate crosses 0 (+ to −) = highest", "rate lowest = falling fastest", "rate on 0 = steady", "cover f", "how much vs how fast".
- **Stage changes (standard item 2).** The balloon and its formula (1); g01 board with the tangent and secant (2); a second board, same rate at 30 and the top at 40 (3a); a cost graph and the sentence frame (3b); stacked graphs of the whole flight (4a, 4b); the rate graph alone (5); framed card (6); question cards (7 to 10); the shuttle run (11); key notes (12). Scenes 3 and 4 each split in two (14 headings).
- **Worked examples (g01 layout).** 2: h′(10) = 18 m/min, h(10) = 100 m, average 10 m/min; crossed "h′(10) = 100 m". 3a: h′(30) = 18, h(30) = 540; h′(40) = 0, h(40) = 640. 3b: C′(50) = 1.2 dollars per loaf (an illustrative value, no formula), and the four-part sentence. 4 and 5: the flight read from the graphs; crossed "highest at 20 min".
- **Memory aid.** Framed card: "f: how much. f′: how fast." Key line: "f′'s units: f's units per x's unit; its sign: up or down."
- **Visual surprise.** The climb is fastest at 20 minutes, when the balloon is exactly halfway up (320 of 640 m), and at the very top the cursor finds the rate graph crossing zero: the highest moment is the one where it is not climbing at all.
- **Site notes (pack section 8).** The site interprets one practical graph (lesson12's draining tank, an average); the instantaneous reading, the paired graphs and the rate-graph-alone reading are original (the pack's gap). No logged error affects this video.
- **Plain meanings at first use.** Instantaneous rate of change ("how fast it's changing at that exact moment, not on average"); units of a rate ("the output's units per the input's units", recalled from c03); flight log ("the balloon's recorded height over the flight").
- **Attempts (pack questions).** A1: V(t) = 1000 − 40t + 0.4t² L: V′(10) = −32, draining at 32 L/min; crossed "V(10) = 640 L". A2: the dam's rate graph: fullest at day 40, filling fastest at day 15; crossed "fullest at day 15".
- **Mistake scene:** none separate. f(c) given for f′(c) (2 crossed; A1 crossed); a rate without units (2 tag, A1); the peak of f′ read as the peak of f (5 crossed; A2 crossed); a negative rate read as "f is negative" (3a tag "+ climbing, − falling"; 4b, still hundreds of metres up).
- **Cause chain taught, in order:** (1) f′(c) is the gradient at c, a rise over a run, so its units are f's units per x's unit and its value is how fast f is changing at that instant (2); (2) a rate says how fast, not how much, so equal rates can sit at different heights (3a); (2b) the same reading works for any input, as units of f per unit of x (3b); (3) f′ = 0 where f stops rising and starts falling, so f is greatest where f′ changes from + to − (3, 4); (4) the steeper f, the larger f′ (c15), so f grows fastest where f′ peaks (4); (5) all of this can be read from the rate graph alone (5).
- **Entry knowledge (route):** c03 (estimating a rate from a tangent on a practical graph, with units); c15 (sketching f′ from f); c07 (differentiating polynomials); c01 (average rate, for the contrast); c14 (sign of f′).
- **Handoff (to math-a11-c18, "How do displacement and velocity differ from distance and speed?").** Scene 11: the shuttle-run strip (`ma11-shuttle-run-v1.png`) with a coded dot at the start line and a coded number line "0 m" to "20 m" along the lanes; chips "there and back, twice: 80 m run", "where are you now? ?", "running back: how fast? ?"; chips "Next: displacement and velocity" and "?". This is c18's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Climb: h(0) = 0, h(10) = 100, h(20) = 320, h(30) = 540, h(40) = 640; h′(0) = 0, h′(10) = 18, h′(20) = 24 (maximum of h′, where h″ = 0), h′(30) = 18, h′(40) = 0. h″(40) = −2.4. Descent: h = 640(1 − 3s² + 2s³), s = (t − 40)/30; h(55) = 320, h′(55) = −32, h′(40) = h′(70) = 0, h(70) = 0; h″(40) = −64/15 ≈ −4.27 (the rate graph has a slight kink in slope at 40, not visible at video size; height and rate are continuous). The descent is not presented as a formula.
  (b) Average over [0, 10]: 100/10 = 10 m/min. Bakery: C′(50) = 1.2 is an illustrative given, no cost function is stated or needed.
  (c) A1: V′ = −40 + 0.8t; V′(10) = −32; V(10) = 640; V(50) = 0 with V′(50) = 0 (empty, tap flow stops). A2: R′ > 0 on (0, 40), max at 15, R′ < 0 on (40, 90): R greatest at 40; R′ greatest at 15.
  (d) Pronunciations: "sixty t squared minus t cubed, all over fifty"; "h prime of ten"; "metres per minute"; "zero point four t squared"; "zero point eight t"; "megalitres per day".
  (e) Windows: height panel t 0 to 80 min, h 0 to 700 m; rate panel h′ −40 to 30 m/min; balloon sprite height mapped to the panel's h at the cursor (sprite base 0 m at the paddock line, 640 m near the top of frame).

Main question: *A balloon's climb rate at ten minutes is h′(10). What does that number actually tell us, and what can its graph tell us without any formula? What does f′(c) tell us about a real situation?*
Entry knowledge (c03, c15, c07): rates and units from tangents; sketching f′ from f; differentiating polynomials.
Stops after: f′(c) as an instantaneous rate with units and sign; f(c) against f′(c); reading f and f′ graphs together and f′ alone. No displacement or velocity.
Handoff: math-a11-c18: "a shuttle run: 80 m run, but where are you, and how fast going back?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): heights teal; rates and f′ violet; time blue; average secant amber; tags amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a number that isn't a height
> Here's that hot-air balloon. While it climbs, its height after t minutes is sixty t squared minus t cubed, all over fifty, in metres. Put in ten, and you get a hundred, so ten minutes in, it's a hundred metres up. But what does the derivative at ten minutes tell us? It's a number too, but it isn't a height. Is it a speed? A distance? Something else? And later, when the balloon drifts back down, we'll only have its graphs, not a formula. So, what does f prime of c tell us about a real **situation**?

Visual: opens on c16's final frame exactly (the paddock `ma11-launch-paddock-v1.png`, the balloon `ma11-hot-air-balloon-v1.png`, chips "h(t) = (60t² − t³)/50 m, t in minutes", "h′(10) = ?" with "? per ?", "Next: what f′(c) means", "?"). On the first sentence the "Next" chips fade and the balloon rises to its 10-minute height; row, 52 px: "h(10) = (6000 − 1000)/50 = 100 m" (teal). On "isn't a height" the "h′(10) = ?" chip pulses. On "drifts back down" the balloon drifts down a little and a grey "flight log" card with a squiggle graph flickers. On "situation" heading "What f′(c) means: how fast, with units". The chip "h′(10) = ? per ?" moves to the top right.

### 2. f′(c): how fast, with units
> The derivative is h prime of t equals a hundred and twenty t minus three t squared, all over fifty. At ten minutes, that's twelve hundred minus three hundred, over fifty, which is **eighteen**. Eighteen what? A derivative is a rise over a run, so its units are the height's units per the time's units: metres per minute. So h prime of ten equals eighteen means that at ten minutes, the balloon is climbing at eighteen metres per **minute**. That's the instantaneous rate of change: how fast it's changing at that exact moment. Compare the average over the first ten minutes: a hundred metres in ten minutes is just ten metres per minute. The balloon started slowly, and it's faster now. Saying h prime of ten is a hundred metres mixes up the rate with the **height**.

Visual: clear change to the g01 board at the left (1,000 px), the climb graph at the right (t 0 to 40, h 0 to 700; 760 × 560 px) with the balloon as a badge. Task strip, 44 px: "h(t) = (60t² − t³)/50. Find h′(10) and say what it means." Rows, 52 px: "h′(t) = (120t − 3t²)/50" (violet); on "eighteen" "h′(10) = (1200 − 300)/50 = 18"; hand tag "rise ÷ run: m per min"; on "minute" framed answer (green): "At 10 min the balloon is climbing at 18 m per minute." The graph's violet tangent at t = 10 draws with readout "18 m/min", hand tag "at that instant". On "Compare the average" an amber secant from (0, 0) to (10, 100) with readout "100 ÷ 10 = 10 m/min", hand tag "average: secant". On "height" a red slip "h′(10) = 100 m" writes and is crossed, caption "100 m is h(10)".

### 3a. how fast, not how high
> The rate tells you how fast, not how high. At thirty minutes, h prime is three thousand six hundred minus two thousand seven hundred, over fifty, which is eighteen again. But now the balloon is five hundred and forty metres **up**. Same climbing rate, very different heights. And at forty minutes, h prime is zero. The balloon has stopped climbing, at its highest point, six hundred and forty **metres**. The sign matters too. A positive rate means the height is increasing, and a negative rate means it's **decreasing**.

Visual: the board clears row by row. Rows, 52 px: "h′(30) = (3600 − 2700)/50 = 18"; on "up" "h(30) = 540 m" (teal); two equal violet tangents at t = 10 and t = 30 with readouts "18 m/min" and the balloons at 100 m and 540 m side by side as badges, hand tag "how fast, not how high". Row: "h′(40) = 0"; on "metres" "h(40) = 640 m, the top" (green frame), a flat amber tangent at t = 40. On "decreasing" two small chips "+ climbing", "− falling", hand tag "+ climbing, − falling".

### 3b. not just per minute
> The input doesn't have to be time. Say a bakery's cost of making n loaves is C of n dollars, and C prime of fifty is one point two. The units are dollars per loaf. So at fifty loaves, the cost is increasing at about a dollar twenty for each extra **loaf**. Every interpretation has the same shape. At this value of x, the quantity is increasing, or decreasing, at this many of its units, per unit of x. Fill in all four parts, and the meaning is **complete**.

Visual: clear change: a small coded cost graph C(n) (n 0 to 100 loaves, $0 to $150; 700 × 480 px) with a violet tangent at n = 50, readout "C′(50) = 1.2"; hand tag "$ per loaf". On "loaf" framed sentence (green): "At 50 loaves, the cost is increasing at about $1.20 per extra loaf." On "Every interpretation" a sentence frame writes, 44 px, with four coloured slots: "At [x = c] (blue), [the quantity] (teal) is [increasing / decreasing] (violet) at [|f′(c)|] [units of f per unit of x] (violet)". On "complete" the balloon's sentence from scene 2 drops into the frame, each part landing in its slot.

### 4a. the whole flight: the climb
> Now the whole flight, from the balloon's flight log, with no formula at all. The top graph is the height. Underneath is the climb rate, the graph of h prime. Read them together, with a cursor moving across both, and say what's happening in words. The balloon climbs fastest at twenty minutes, where the rate graph peaks, at twenty-four metres per minute. That's only halfway up, at three hundred and twenty **metres**. It's highest at forty minutes, where the rate crosses zero, going from positive to **negative**.

Visual: stage change: `StudioStackedDerivativePanels` (each 1,300 × 340 px) for 0 to 80 minutes, the balloon sprite at the left over the paddock moving with the cursor. The cursor sweeps from 0; `LiveReadoutBoard` (44 px): "height … m", "climbing … m per min". At t = 20 the cursor stops: on "metres" readout "height 320 m, climbing 24 m per minute", amber tags "climbing fastest" on both panels (the rate's peak and the height's steepest point), hand tag "rate peak = fastest climb", and a grey chip "320 = half of 640". At t = 40: on "negative" readout "height 640 m, climbing 0 m per minute", amber tag "highest" on the height panel and "crosses 0, + to −" on the rate panel, hand tag "rate crosses 0 (+ to −) = highest".

### 4b. the whole flight: the descent
> After that, the rate is negative, so the balloon is coming down. Notice that while it's coming down, it's still hundreds of metres up. A negative rate means falling, not below the ground. It falls fastest at fifty-five minutes, at about thirty-two metres per **minute**. And from seventy minutes, the rate stays on zero. The balloon has landed, and its height is **steady**. That's the whole flight, told from two graphs.

Visual: the cursor continues: at t = 55 on "minute" readout "height 320 m, falling 32 m per minute", amber tag "falling fastest" at the rate graph's lowest point, hand tag "rate lowest = falling fastest". Earlier, on "still hundreds of metres up" (the cursor passing 45 minutes), the height panel's falling stretch shades above its axis while the rate panel's matching stretch shades below, hand tag "− rate, + height". From t = 70 on "steady" both graphs run flat (height 0, rate 0), amber tag "steady", hand tag "rate on 0 = steady"; the balloon sits on the paddock.

### 5. the rate graph on its own
> Here's the really useful part. Cover up the height graph. With only the rate graph, you can still tell the whole story. That's often exactly what an exam gives you: a rate graph, and questions about the quantity. The height is greatest where the rate changes from positive to negative, here at forty minutes. The height is growing fastest where the rate is at its peak, at twenty minutes. And the height is steady wherever the rate sits on zero. Saying the balloon is highest at twenty minutes, because that's the top of the rate graph, is the **slip**. The highest point of f prime is the fastest climb, not the highest **point**.

Visual: clear change: a paper card slides over the height panel (hand tag "cover f"); the rate panel enlarges (1,400 × 480 px). On each sentence an amber tag writes on the rate graph alone: "+ to − at 40: height greatest", "peak at 20: growing fastest", "on 0 from 70: steady"; after each, the card lifts briefly to confirm on the height graph, then drops. On "slip" a red slip "highest at 20 min" writes and is crossed; on "point" the card lifts for good, the rate's peak and the height's peak ringed in different places with a double-headed arrow between them.

### 6. memory aid
> Here's the summary. f tells you how much. f prime tells you how fast, in the units of f per unit of x, and its sign tells you up or **down**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the stacked flight graphs, small, with the four amber tags. Main line, hand font 60 px: "f: how much. f′: how fast." On "down" the key line, 40 px: "f′'s units: f's units per x's unit; sign: up or down." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. The water in a tank is V of t equals a thousand, minus forty t, plus zero point four t squared litres, after t minutes, for t from zero to fifty. Find V prime of ten, and say what it means. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The water in a tank is V(t) = 1000 − 40t + 0.4t² litres after t minutes (0 ≤ t ≤ 50). Find V′(10) and say what it means." The full question stays on screen. Picture: the graph of V for 0 to 50 min (a falling curve flattening to 0), no tangent. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> V prime of t is minus forty plus zero point eight t. At ten minutes, that's minus forty plus eight, which is minus thirty-**two**. The units are litres per minute, and the sign is negative. So at ten minutes, the water is draining at thirty-two litres per **minute**. Giving V of ten, six hundred and forty litres, is the slip. That's how much water there is, not how **fast** it's changing.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "V′(t) = −40 + 0.8t"; on "two" "V′(10) = −40 + 8 = −32"; hand tag "L per min"; on "minute" framed answer (green): "At 10 min the water is draining at 32 L per minute", with a violet tangent on the picture. On "fast" a red slip "V(10) = 640 L" writes and is crossed, caption "how much, not how fast". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A dam's rate of change of stored water, R prime of t, in megalitres per day, is positive from day zero to day forty, highest at day fifteen, and negative from day forty to day ninety. On which day was the dam fullest, and on which day was it filling fastest? Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph of R′(t), the rate of change of the water stored in a dam (megalitres per day), is positive from day 0 to day 40, highest at day 15, and negative from day 40 to day 90. On which day was the dam fullest, and on which day was it filling fastest?" Picture: the R′ graph drawn to that description (t 0 to 90 days), no tags. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The dam fills while R prime is positive, and empties once it's negative. So it's fullest at day forty, where R prime changes from positive to **negative**. That's the day it stops filling. It fills fastest where R prime is greatest, at day **fifteen**. Saying it was fullest at day fifteen, at the peak of the rate graph, is the **slip**.

Visual: the card shrinks to the top. On the picture: "+" and "−" bands; on "negative" amber tag "day 40: fullest" (green frame); on "fifteen" amber tag "day 15: filling fastest" (green frame). On "slip" a red slip "fullest at day 15" writes and is crossed, caption "peak of R′ = fastest filling". Hold about 1 s.

### 11. handoff
> The balloon only went up and down. For anything moving back and forth along a line, the signed rate gets its own name. Here's a twenty metre shuttle run, between two lines. Run there and back twice, and you've covered eighty metres. But where are you now, compared with the start? And how fast are you going when you run back? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the shuttle-run strip `ma11-shuttle-run-v1.png` (1,500 px). A coded dot leaves the start line, runs to the far line and back twice (played at 4 ×) with a coded number line beneath, "0 m" at the start line and "20 m" at the far line; chip "there and back, twice: 80 m run". On "where are you now" chip "where are you now? ?"; on "run back" chip "running back: how fast? ?". On "next" chips "Next: displacement and velocity" and "?". Hold about 2 s. This is c18's opening frame (the dot at the start line); scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- f′(c) is the instantaneous rate of change of f at x = c.
- Units of f′: f's units per x's unit (m per min, L per min, $ per loaf).
- f′(c) > 0: f increasing; f′(c) < 0: decreasing; f′(c) = 0: momentarily steady.
- f is greatest where f′ changes from + to −; it grows fastest where f′ peaks.
- f(c) is how much; f′(c) is how fast. Don't swap them.

Memory aid (framed card, right side, as in scene 6): *f: how much. f′: how fast.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and c18's opening frame.

## Teaching checks

- **Does it explain causes?** Why metres per minute: a derivative is rise over run (2). Why instantaneous differs from average: the balloon speeds up (2). Why equal rates at different heights: a rate is how fast, not how much (3a). Why the units are per loaf: the input is loaves (3b). Why highest where f′ crosses zero from + to −: it stops climbing and starts falling (3, 4a). Why fastest climb at the rate's peak: f′'s size is the steepness (4a, c15). Why the rate graph alone suffices: each feature of f has a matching feature of f′ (5).
- **Misconceptions addressed:** f(c) for f′(c) (2, A1 crossed); a rate without units (2, A1 tags); the peak of f′ read as the peak of f (5, A2 crossed); a negative rate read as a negative amount (3a tag, 4b).
- **Visual standard, item by item:** 1 the painted balloon and paddock from the first frame, the balloon rising and falling with the cursor in 4a, 4b and 11; 2 a new stage every 25 to 60 s; 3 the flight with stacked graphs and a shared cursor naming both readings, the average-versus-tangent pair, the covered height graph; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2 and 3a, the sentence frame in 3b; 8 framed card and five bullets; 9 the fastest climb at exactly halfway, and the top where the climb rate is zero.
- **One idea at a time:** a rate with units (2), how fast against how high (3a), any input and the four-part sentence (3b), the climb on both graphs (4a), the descent (4b), the rate graph alone (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 25 s.
- **Avoided double teaching:** units of a rate (c03), average rate (c01), sketching f′ (c15) and the sign of f′ (c14) are recalled in a phrase; this video formalises f′(c) (root ruling 4).
- **Syllabus coverage:** `ci9d118719` (2, 3a, 3b, A1; key notes 1 to 3, 5); `ci8a2722e2` (4a, 4b, 5, A2; key note 4).
- **Out of scope by design:** displacement and velocity (c18); maxima by algebra (c16).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "The water in a tank is V(t) = 1000 − 40t + 0.4t² litres after t minutes (0 ≤ t ≤ 50). Find V′(10) and say what it means."
Model answer: V′(t) = −40 + 0.8t, so V′(10) = −32. At 10 minutes the water is draining at 32 litres per minute. Classic mistake (crossed): "V(10) = 640 L".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 2 marks suggested).** "The graph of R′(t), the rate of change of the water stored in a dam (megalitres per day), is positive from day 0 to day 40, highest at day 15, and negative from day 40 to day 90. On which day was the dam fullest, and on which day was it filling fastest?"
Model answer: Fullest at day 40, where R′ changes from positive to negative. Filling fastest at day 15, where R′ is greatest. Classic mistake (crossed): "fullest at day 15".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Climb | h = (60t² − t³)/50; h(10) = 100 m | 1 |
| Rate at 10 | h′ = (120t − 3t²)/50; h′(10) = 18 m/min; average 10 m/min | 2 |
| Same rate, top | h′(30) = 18, h(30) = 540 m; h′(40) = 0, h(40) = 640 m | 3a |
| Cost | C′(50) = 1.2, $1.20 per loaf (illustrative) | 3b |
| Flight graphs | fastest climb 24 m/min at 20 min, 320 m; highest at 40 min; falling fastest about 32 m/min at 55 min; landed from 70 min | 4a, 4b, 5 |
| A1 | V′ = −40 + 0.8t; V′(10) = −32 L/min; V(10) = 640 L | 7, 8 |
| A2 | fullest day 40; filling fastest day 15 | 9, 10 |
| Handoff | 20 m shuttle; there and back twice: 80 m | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- h = (60t² − t³)/50: h′ = −3t(t − 40)/50; (t, h, h′): (0, 0, 0), (10, 100, 18), (20, 320, 24), (30, 540, 18), (40, 640, 0); h″ = 0 at t = 20.
- Descent h = 640(1 − 3s² + 2s³), s = (t − 40)/30: (40, 640, 0), (55, 320, −32), (70, 0, 0).
- Average on [0, 10]: 10 m/min.
- V = 1000 − 40t + 0.4t²: V′ = 0.8t − 40; V′(10) = −32; V(10) = 640; V(50) = 0, V′(50) = 0.
- Shuttle: 4 × 20 = 80 m.

## Memory aid check

- **"f: how much. f′: how fast."** Original. Meaning, as said in scene 6: f(c) is the amount at x = c (in f's units); f′(c) is the instantaneous rate at x = c, in f's units per x's unit, with its sign saying increasing or decreasing. Assumptions checked: f′(c) exists; "how fast" includes direction through the sign; the units rule assumes f and x carry units. It helps a new case: if C(n) is a cost in dollars for n items, C′(50) is dollars per extra item at 50 items. Introduced after scenes 2 to 5.
- **Considered, not used:** "The rate's peak is the fastest change, not the biggest amount" (true and kept as a hand tag; the card's shorter form is easier to copy).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,525 characters (Revision 2; Revision 1 was 5,526). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the cursor sweeps, the cover card) and the 45 s notes scene: about 503 s. Characters per scene (1 to 12, with 3a, 3b, 4a and 4b counted separately): 499, 755, 509, 451, 507, 413, 623, 137, 222, 379, 290, 326, 339, 75. Speech before the notes is about 410 s, under the 570 s cap. Feedback speech: about 28 s and 25 s.

Reserve trims if the voiced take runs long: scene 2's "The balloon started slowly" sentence (keep the secant); scene 1's "drifts back down" sentence.

## Scene list and build ids

Lesson key `m-a11c17` (route math-a11-c17). Explainer folder `src/explainer/lessons/math-a11-c17`; build inputs in `docs/production/claude-pm/lessons/math-a11-c17/` (at voicing).

In order (14 scene headings): hook-balloon, rate-with-units, how-fast-not-high, any-input, flight-climb, flight-descent, rate-graph-alone, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 36 s | 1 | c16's frame; the balloon climbs |
| 36 to 98 s | 2 | g01 board: h′(10) with tangent and secant |
| 98 to 136 s | 3a | Board: same rate at 30, the top at 40 |
| 136 to 170 s | 3b | Cost graph and the sentence frame |
| 170 to 210 s | 4a | Stacked graphs: the climb |
| 210 to 240 s | 4b | Stacked graphs: the descent |
| 240 to 284 s | 5 | The rate graph alone |
| 284 to 298 s | 6 | Framed memory card |
| 298 to 410 s | 7 to 10 | Question cards and countdowns, then feedback |
| 410 to 442 s | 11 | The shuttle run |
| 442 to 487 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c16's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3a board row clear; 3a to 3b clear change; 3b to 4a stage change; 4a to 4b the cursor continues; 4b to 5 the cover card slides in; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-c17-learning-review.md`, `science_check` = `checks/m-a11-c17-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no shuttle-run plate exists; the balloon and paddock are c16's brief.

Need (painted, new; see the Codex asset brief): `ma11-shuttle-run-v1.png` (this video's handoff and c18). Reused: `ma11-hot-air-balloon-v1.png`, `ma11-launch-paddock-v1.png` (c16's brief).

Coded: the flight graphs, cursor, readouts, tags, tangent and secant, cover card, the shuttle dot and number line, every row, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `StudioStackedDerivativePanels`, `LiveReadoutBoard`, `FunctionRider` (tangent), `SpriteField` or `PlateImg` (balloon on a computed height), `StudioPlot`, `WorkingBoard`, `TaskStrip`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `StudioParticleTrack` (the shuttle dot in the handoff).

Additions:
1. **Shared cursor with word readouts** on `StudioStackedDerivativePanels`: one vertical cursor across both panels and a readout line built from both values ("height 320 m, climbing 24 m per minute"; "falling" when the rate is negative). Check: the readout's verb flips exactly where the rate crosses zero.
2. **Cover card**: a paper card that slides over one panel and lifts on cue.

## Codex asset brief (Maths A11 C17, a shuttle-run strip; opens c18)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c17.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c17 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-shuttle-run-v1.png` (2800 × 700 px): a strip of school sports oval grass seen from the side and slightly above, with two straight white painted lines across it 20 m apart (one near each end of the strip) and a small orange marker cone at each end of each line; a low white picket fence far behind. Nothing else on the grass.

Sidecar JSON (`ma11-shuttle-run-v1.json`): the pixel x of each white line along a horizontal track line, and that track line's pixel y, so code can place the dot and the number line exactly (0 m and 20 m). Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c17-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly.
3. Confirm every rate carries units and a sign word, and f(c) and f′(c) are never swapped in learner copy.
4. Confirm the descent appears only as a graph (no formula on screen) and its readings (32 m/min at 55 min, landed at 70) match the drawn curve.
5. Confirm the words "velocity" and "displacement" are not used (c18 introduces them).
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c16's final frame.

## YouTube metadata (draft)

Title: What f′(c) Really Means: Rates of Change With Units | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson12.sa.html

A hot-air balloon's height is h(t) = (60t² − t³)/50 metres. What does h′(10) = 18 actually mean? Interpret f′(c) as the instantaneous rate of change, with units and a sign, and tell how much from how fast. Then read the balloon's height graph and its climb-rate graph together, with no formula, to find when it climbs fastest, when it's highest and when it falls fastest, and tell the whole story from the rate graph alone. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Interpret f'(c) as the instantaneous rate of change of the function f(x) at x = c"
"Use graphs of functions and their derivatives, without the use of algebraic techniques, to describe and interpret physical phenomena"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Rates and units from tangents (c03); sketching f′ from f (c15); differentiating polynomials (c07). Next: Displacement and velocity.

#Year11Maths #MathsAdvanced #RatesOfChange #HSCScience

## Open decisions

- **1. The descent's source (learning review).** The descent is "from the flight log", a graph without a formula, so the second content point is met without algebra. If a reviewer finds "flight log" unclear, the narration can say "from its recorded height".
- **2. A second balloon (root).** c06's water balloon and this hot-air balloon share a word. The narration never calls back to c06 here, and the plates look nothing alike. Judged distinct.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c03, c15 and c07; check that the units are derived as rise over run, not announced, that the instantaneous-versus-average contrast is felt, that "how fast, not how high" lands with the two equal rates, and that the rate graph alone is enough to answer A2), then the Codex maths check and error check, then voicing and a build to grade A.
