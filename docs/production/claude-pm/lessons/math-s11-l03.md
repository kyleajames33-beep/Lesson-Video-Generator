# Maths S11 L03: How does a linear model describe a real situation, and what do its gradient and intercept mean? A hire bike in words, the model built and used both ways, interpreting with units, a falling model, and the site's savings example (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard designs (`math-s12-a01.md`, `a07.md`, `r12a.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 91). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,281 characters by script (see "Narration length estimate"), 13 scene headings, about 484 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: third video of Year 11 Mathematics Standard (2024) Linear relationships, outline playlist order 11. Year 11 is one course for Standard 1 and Standard 2. Pre-design pack: `../pre-design/maths-standard/math-s11-l03.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year11/linear-relationships/lesson03.sa.html` (Intercepts and Linear Equations, SHA256 `c8d6872ef3873497730932a9296aa733ae5a3439e9f27e20984f9e21d5d2c8e0`; the bike hire "$12 before you ride a single metre, then $5 per hour", `we-1`'s C = 12 + 5h and $32 for 4 hours, `we-2`'s S = 75 + 20w and $195 after 6 weeks, card 05 "the intercept is not the final total. It is the starting output", trap 02 "Saying the intercept is 'added each time'", the revisit's price rise to $6) and `formulas-and-equations/lesson05.sa.html` (Building Formulas from Patterns and Tables, SHA256 `548a35b67aa1760a54719d8f8996c3c1b8b06f1b84aeae185178f34b0642ba18`; card 02 "output = starting value + rate × input"). Route entry: `math-s11-l03` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit; one new painted plate (a box of coffee pods); the hire e-bike and the water tank reused; every model card, graph, slider and board coded.

Owner rules applied: 2024 syllabus only, content point cited by codename in this design and by exact wording in the description; painted plates for real objects and code for diagrams; no people, hands or faces; one main learner question; one reasoning stage at a time; every step said in words before its symbols (Standard pace); worked example in the g01 layout with a framed answer and a crossed slip; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed memory card; everyday anchors (a hire bike, coffee pods at home, ski hire, a garden tank); Australian spelling; no em dashes; money spoken naturally; conversational narration with commas for small pauses; y = mx + c letters (ruling 91; the site's "m and b", MS-82, become "the gradient and the intercept").

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, common to Standard 1 and Standard 2, Linear relationships), quoted from `../../programme/maths-standard-route-inputs-8.json`:
- `cib2d6c0df`: "Model linear relationships and interpret the features of those relationships in a variety of contexts, noting that the y-intercept is the vertical intercept and the gradient is the rate of change"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

**Boundary:** opens on l02's final frame exactly (the hire e-bike with "$12 before you ride a single metre", "then $5 per hour" and an empty model card "C = ▢ + ▢ h"). Recalls l01 (gradient and intercept), l02 (y = mx + c and drawing the line) and f02 (solving a linear equation in context) in a phrase or grey chip each. Teaches: a linear model ("an equation for a straight line that stands in for the real situation"); naming both variables with units; the starting value as the vertical intercept and the rate as the gradient, said almost word for word as the syllabus says it; output = starting value + rate × input; using the model to find an output (substitute) and an input (solve, checked); interpreting both features in a sentence with units and "per"; the intercept paid once, not added each time; a price rise changing only the gradient; a falling model with a negative gradient and its zero; the site's `we-2` interpreted and evaluated. Stops there. Not taught: when to trust a prediction (l04); spreadsheets (l05); models with no starting amount (l06).

## Decisions

- **Anchor: the site's hire bike (reused plate, live).** Lesson03's own words, "$12 before you ride a single metre, then $5 per hour", with `ma11-share-ebike-v1.png` (viewed 19 Nov 2026: a teal step-through e-bike with a basket, no rider). Labelled "example price". It returns in scenes 2 to 4 as a badge and on the graph.
- **The falling model: a box of coffee pods (new plate).** P = 120 − 6d runs out at 20 days (the pack's anchor 1, recalculated). The site's draining pool (lesson05) is left for l04's limitation idea; math-s12-i09 (a steady fall) relies on this scene.
- **Join.** Opens on l02's final frame exactly. Ends on l04's opening frame: the hire boat (`ms11s-hire-boat-v1.png`, briefed in `math-s11-l04.md` and painted before this video's build, ruling 17) with "F = 60 − 8h" and "h = 9: F = −12 L?".
- **The syllabus sentence (pack decision).** Scene 2 says "The y-intercept is the vertical intercept, the starting value, and the gradient is the rate of change", and key notes 2 and 3 carry it, because Year 12 a03, a04a, i01 and i09 recall it.
- **Simulations (standard item 3).**
  1. **Words into slots** (scene 2; `ModelCard`, `ModelSlot`): "$12 before you ride" flies into the violet c slot and "$5 per hour" into the amber m slot; the graph draws from the filled card, its intercept and step triangle in the same colours.
  2. **Price-rise slider** (scene 4; `ParameterSlider` with `FunctionSimulator` in linear mode): the rate slides from 5 to 6; the line swings about its pinned intercept (0, 12); a readout "4 hours: $32" updates live to "$36".
  3. **Pods running down** (scene 5): a coded count bar beside the pod plate empties in steps of 6 as a rider moves along the falling line; the readout "pods left" reaches 0 at day 20.
- **Colour roles (fixed for l01 to l07).** The line blue; the gradient, the rate and its "per" words amber; the intercept and starting value violet; inputs ink; answers green; mistake red, crossed slips only; the price-rise ghost line grey.
- **Large type, handwritten voice.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Hand tags: "paid at 0 hours: start", "added each hour: rate", "substitute", "solve, then check", "say it with units", "per = rate", "paid once", "only m changes", "falling: negative", "multiply first". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The e-bike and the empty card (1); words into slots and the graph (2); substitution and solving rows on the graph (3); the interpretation sentences and the slider (4); the pod box and the falling line (5); the g01 board (6); the framed card (7); question cards (8 to 11); the hire-boat frame (12); key notes (13).
- **Worked example (g01 layout).** Scene 6: site `we-2`, S = 75 + 20w: interpret both features, then S after 6 weeks = $195. Crossed slip: "(75 + 20) × 6 = 570" (caption "multiply first: 20 × 6").
- **Memory aid.** Framed card: "Intercept: where it starts. Gradient: the change per one." Key line: "Interpret with units and 'per'."
- **Visual surprise.** The price-rise slider: as the rate goes from 5 to 6 the whole line swings, yet the violet point at (0, 12) does not move at all, and the "4 hours" readout ticks from $32 to $36. The starting value and the rate are visibly separate controls.
- **Site notes (pack section 8).** MS-82: the site's "interpret m and b" is said as "interpret the gradient and the intercept"; y = mx + c only. Lesson05's "Beyond the syllabus" notice is not repeated (pattern-building is in this content point). Lesson03's taxi drill and lesson05's `we-1` are not used (l02 used a taxi).
- **Plain meanings at first use.** Linear model ("an equation for a straight line that stands in for the real situation"); starting value ("the amount when the input is zero"); rate ("how much is added for each one of the input"); vertical intercept (the y-intercept, said with it); rate of change (the gradient, said with it); interpret ("say what each number means in this situation, with units").
- **Attempts (pack questions).** A1 (pack question 1): ski hire $55 plus $48 per day; model, interpretation, 5 days = $295. Crossed "C = 48 + 55d" (caption "the per-day amount goes with d"). A2 (pack question 2): a 2000 L tank, 125 L a day; model, gradient, 500 L left after 12 days. Crossed "16 days" (caption "that's when it's empty"). The ski hire prices and the garden use are invented, labelled "example price" and "example" on the cards.
- **Mistake scene:** none separate. The intercept added each time (4 spoken, 6 crossed); swapped rate and start (A1 crossed); a falling amount with a plus sign (5); no units or "per" (4 tag); solving for the wrong target (A2 crossed).
- **Cause chain taught, in order:** (1) an amount paid even at zero input is the starting value, so it is where the line meets the vertical axis (2); (2) an amount added for each unit of input is the rate, so it sets the steepness (2); (3) so the model is start plus rate times input, and it answers questions both ways (3); (4) the start is paid once, so it is not multiplied, and a price change moves only the rate (4); (5) an amount used up each day makes the output fall, so the gradient is negative, and the amount reaches zero when the start is used up (5).
- **Entry knowledge (route):** math-s11-l02 (`ciafd3b572`: writing y = mx + c); math-s11-f02 (`ci2acef85d`: solving a linear equation in context); l01 (gradient, intercept). Recalled in a phrase or grey chip.
- **Handoff (to math-s11-l04, "When can we trust a prediction from a linear model?").** Scene 12: see Handoff below; this is l04's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Bike: C = 12 + 5h; h = 4: 32; 12 + 5h = 47 at h = 7; rate 6: C = 12 + 6h, h = 4: 36.
  (b) Pods: P = 120 − 6d; 0 at d = 20; d = 0, 5, 10, 15, 20: 120, 90, 60, 30, 0.
  (c) `we-2`: S = 75 + 20w; w = 6: 195; slip (75 + 20) × 6 = 570.
  (d) A1: C = 55 + 48d; d = 5: 295. A2: V = 2000 − 125d; 2000 − 125d = 500 at d = 12; empty at d = 16.
  (e) Handoff: F = 60 − 8h; h = 9: −12.
  (f) Pronunciations: "C equals twelve plus five h"; "P equals a hundred and twenty minus six d"; "S equals seventy-five plus twenty w"; "V equals two thousand minus a hundred and twenty-five d".
  (g) Windows: bike h 0 to 8 hours, C $0 to $60 (grid every 1 hour and $5); pods d 0 to 24 days, P 0 to 130 (grid every 2 days and 10 pods); `we-2` w 0 to 8, S $0 to $250 (grid every 1 week and $25).

Main question: *How does a linear model describe a real situation, and what do its gradient and intercept mean?*
Entry knowledge (l02, f02, l01): y = mx + c; solving a linear equation; gradient and intercept.
Stops after: building a model from words; using it both ways; interpreting both features with units; a price rise; a falling model.
Handoff: math-s11-l04: "the model gives minus twelve litres of fuel: when can we trust a prediction?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): line blue; gradient and rate amber; intercept and start violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · LINEAR RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the hire bike
> Here's the hire bike. It costs twelve dollars before you ride a single metre, then five dollars per hour. That's a real situation, described in words. We can turn it into a linear model, an equation for a straight line that stands in for the real situation. Then each number in the model tells part of the story. So how does a linear model describe a real situation, and what do its gradient and intercept **mean**?

Visual: opens on l02's final frame exactly (the e-bike `ma11-share-ebike-v1.png`, about 900 px wide, at the left; the swing tag "$12 before you ride a single metre" (violet underline) and "then $5 per hour" (amber underline); grey tag "example price"; the model card "C = ▢ + ▢ h" at the right). On the first sentence the "Next" and "?" chips fade. On "linear model" a chip, 44 px: "linear model: an equation for a straight line that stands in for the real situation". On "tells part of the story" the two empty slots pulse in turn (violet, amber). On "mean" the heading "Linear models: what the gradient and intercept mean" writes on, and the question chip moves to the top right.

### 2. from words to a model
> First, name the variables in words, with units. Let C be the cost in dollars, and h the number of hours. The twelve dollars is paid even at zero hours, so it's the starting value. The five dollars is added for every hour, so it's the **rate**. A linear model is the starting value, plus the rate times the input. So C equals twelve plus five **h**. On the graph, the line meets the vertical axis at twelve, and climbs five dollars for every hour across. And that's the big idea of this whole topic. The y-intercept is the vertical intercept, the starting value, and the gradient is the rate of **change**.

Visual: stage change: the e-bike shrinks to a 260 px badge at the top left with the swing tag (30 px). Variable key, 44 px: "C = cost ($)", "h = time (hours)". On "paid even at zero hours" the "$12" phrase lifts and flies into the violet slot, hand tag "paid at 0 hours: start"; on "rate" the "$5 per hour" phrase flies into the amber slot, hand tag "added each hour: rate". Formula strip, 44 px: "output = starting value + rate × input" (start violet, rate amber). On "h" the model card completes, 52 px: "C = 12 + 5h" (12 violet, 5 amber). On "graph" axes slide in at the right (h 0 to 8, C $0 to $60): the line draws blue from (0, 12), the point ringed violet, and an amber step triangle "1 hour across, $5 up" rides from h = 0 to 2. Grey chip "Year 11 l02: y = mx + c". On "change" the syllabus sentence writes across the bottom (44 px, above y = 950): "y-intercept = vertical intercept = starting value" (violet) and "gradient = rate of change" (amber).

### 3. using the model, both ways
> Now put the model to work. How much for four hours? Substitute h equals four. Twelve plus five times four is twelve plus twenty, which is thirty-two **dollars**. Or go backwards. If you've got forty-seven dollars, how long can you ride? Set twelve plus five h equal to forty-seven, and solve it, just like in our equations videos. Take away twelve, and five h is thirty-five. Divide by five, and h is **seven** hours. Check it, twelve plus five times seven is forty-seven.

Visual: camera continue on the same graph (the sentence strip shrinks). Rows at the left, 52 px: "h = 4: C = 12 + 5 × 4 = 12 + 20" and on "dollars" "= $32" (green), with a reading path up from h = 4 to the line and across to $32, hand tag "substitute". Then "12 + 5h = 47" with grey chip "Year 11 f02: solving"; rows "5h = 35", and on "seven" "h = 7" (green), with the reading path from $47 across to the line and down to 7 hours, hand tag "solve, then check". Check row: "12 + 5 × 7 = 47 ✓" (green).

### 4. interpreting, with units
> Exam questions often say, interpret the gradient and the intercept. That means say what each number means in this situation, with units. The intercept, twelve, is the twelve dollars you pay before any riding. The gradient, five, means the cost goes up by five dollars for each hour. Listen for the word per, five dollars per hour. And notice the twelve is paid once. It isn't added every hour, it's where the cost **starts**. If the hourly price rose to six dollars, only the gradient would change. The line still starts at twelve, but it climbs more **steeply**, so four hours now costs thirty-six dollars.

Visual: stage change: two sentence cards at the left, 44 px, each writing on as spoken: "Intercept 12: the $12 paid before any riding." (violet) and "Gradient 5: the cost rises $5 per hour." (amber), hand tag "say it with units"; on "per" the word "per" circles amber, hand tag "per = rate". The graph stays at the right. On "paid once" a small strip of four hour-blocks writes: "12 | +5 | +5 | +5 | +5" with "12" only in the first block, hand tag "paid once"; on "starts" a grey ghost strip "12 + 12 + 12 ..." writes and is crossed red. On "rose to six dollars" the price-rise slider (simulation 2) appears under the graph, "rate: $5 per hour"; it slides to $6, the line swings about the pinned violet point (0, 12), the old line left as a grey ghost, hand tag "only m changes"; on "steeply" the model card reads "C = 12 + 6h" (6 amber) and the readout "4 hours: $32" ticks to "$36".

### 5. a model that falls
> Not every model goes up. A box holds a hundred and twenty coffee pods, and the household uses six pods a day. Let P be the number of pods left, and d the number of days. It starts at a hundred and twenty, and falls by six each day, so P equals a hundred and twenty minus six **d**. The gradient is minus six, six pods fewer per **day**. When does the box run out? Set a hundred and twenty minus six d equal to zero. So six d is a hundred and twenty, and d is **twenty** days. A falling amount needs a negative gradient. Writing plus six would have the pods piling **up**.

Visual: clear change: the coffee-pod box plate `ms11s-coffee-pods-v1.png` (about 700 px wide) at the left, with a coded count bar beside it (120 at the top, ticks every 10) reading "pods left: 120". Variable key, 44 px: "P = pods left", "d = days". On "d" (bold) the model card, 52 px: "P = 120 − 6d" (120 violet, −6 amber). Axes at the right (d 0 to 24, P 0 to 130): the line draws blue falling from (0, 120). On "day" an amber step triangle "1 day across, 6 down" and the chip "gradient −6: 6 fewer pods per day", hand tag "falling: negative". The rider (simulation 3) moves along the line, the count bar emptying in steps (90 at day 5, 60 at day 10, 30 at day 15). Rows, 52 px: "120 − 6d = 0", "6d = 120"; on "twenty" "d = 20" (green), the rider landing on (20, 0) and the bar reading "0". On "up" a grey ghost line "P = 120 + 6d" rises from (0, 120) and is crossed red.

### 6. worked example: interpret, then evaluate
> Here's one from start to finish. A savings balance is modelled by S equals seventy-five plus twenty w, where S is the balance in dollars after w weeks. Interpret the gradient and the intercept, then find the savings after six weeks. The intercept, seventy-five, is the balance at zero weeks, so there's seventy-five dollars to **start**. The gradient, twenty, means the balance grows by twenty dollars per **week**. After six weeks, seventy-five plus twenty times six is seventy-five plus a hundred and twenty, which is a hundred and ninety-five **dollars**. The slip is adding seventy-five and twenty first, then multiplying by six. That gives five hundred and seventy, and treats the seventy-five as if it were saved every week. Multiply first, then **add**.

Visual: clear change to the g01 board. Task strip, 44 px: "S = 75 + 20w gives the savings S ($) after w weeks. Interpret the gradient and the vertical intercept. Find the savings after 6 weeks." (site `we-2`, MS-82's letters replaced). Givens card, 44 px: "intercept: 75" (violet), "gradient: 20" (amber), "w = 6". Small plot at the right (560 × 480 px, w 0 to 8, S $0 to $250). Rows, 52 px: on "start" "75: $75 at the start (w = 0)" (violet), the intercept ringing on the plot; on "week" "20: +$20 per week" (amber), a step triangle on the plot. "S = 75 + 20 × 6 = 75 + 120"; on "dollars" framed answer (green) "S = $195", the point (6, 195) ringing green. On "add" a red slip "(75 + 20) × 6 = 570" writes small at the right and is crossed (caption "multiply first: 20 × 6").

### 7. memory aid
> Here's the idea to keep. Every linear model is a start, plus a rate. The intercept is where the story starts, and the gradient is how much it changes, per one of the **input**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the bike line small, the violet start point and an amber step. Main line, hand font 56 px: "Intercept: where it starts. Gradient: the change per one." On "input" the key line, 40 px: "Interpret with units and 'per'." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A ski hire shop charges fifty-five dollars, plus forty-eight dollars per day, for skis and boots. Write a linear model for the cost C after d days. Interpret the gradient and the vertical intercept. Then find the cost for five days. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A ski hire shop charges $55 plus $48 per day for skis and boots. (a) Write a linear model for the cost C ($) after d days. (b) Interpret the gradient and the vertical intercept. (c) Find the cost for 5 days." Grey tag "example prices". The full question stays on screen. No picture (the words are the task). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> The model is C equals fifty-five plus forty-eight **d**. The gradient, forty-eight, is the cost per day, forty-eight dollars a day. The intercept, fifty-five, is the fixed amount paid before any days. Five days costs fifty-five plus two hundred and forty, which is two hundred and ninety-five **dollars**. Writing C equals forty-eight plus fifty-five d is the slip. The per-day amount goes with **d** every time.

Visual: the card shrinks to the top (30 px). On "d" (first bold) the model "C = 55 + 48d" (55 violet, 48 amber). Rows, 44 px: "48: $48 per day" (amber), "55: $55 paid once, before any days" (violet). On "dollars" "55 + 48 × 5 = 55 + 240" and framed answer (green) "$295". On "d" (second bold) a red slip "C = 48 + 55d" writes and is crossed (caption "the per-day amount goes with d"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A water tank holds two thousand litres. A garden uses a hundred and twenty-five litres a day, and there's no rain. Write a model for the volume V after d days. Interpret the gradient. After how many days are five hundred litres left? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A water tank holds 2000 L. A garden uses 125 L a day and there is no rain. (a) Write a model for the volume V (L) after d days. (b) Interpret the gradient. (c) After how many days are 500 L left?" Picture slot: the water tank plate `ma11-water-tank-v1.png` (about 380 px tall), no numbers on it. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The model is V equals two thousand minus a hundred and twenty-five d. The gradient is minus a hundred and twenty-five, so a hundred and twenty-five litres less each **day**. For five hundred litres left, two thousand minus a hundred and twenty-five d equals five hundred, so a hundred and twenty-five d is fifteen hundred, and d is **twelve** days. Sixteen days is the slip. That's when the tank is **empty**.

Visual: the card shrinks to the top. Model, 44 px: "V = 2000 − 125d" (2000 violet, −125 amber); on "day" the chip "gradient −125: 125 L less per day". Rows: "2000 − 125d = 500", "125d = 1500"; on "twelve" framed answer (green) "d = 12 days". On "empty" a red slip "2000 ÷ 125 = 16 days" writes and is crossed (caption "that's when it's empty"). Hold about 1 s.

### 12. handoff
> So a linear model turns words into a line, and its two numbers tell the story. But a model gives an answer for any number you put in. Should you believe every one? A hire boat starts with sixty litres of fuel, and uses eight litres an hour. After nine hours, the model says there are minus twelve litres left. Can that be right? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame: the hire boat `ms11s-hire-boat-v1.png` (about 1,000 px wide) at the left on a coded water line; on "sixty litres" a coded fuel-gauge card beside it (a semicircle dial, needle at full, "60 L"); on "eight litres an hour" the model chip, 44 px: "F = 60 − 8h" (60 violet, −8 amber), with the key "F = fuel (L), h = hours". At the right, small axes (h 0 to 10, F −20 to 70) with the line falling from (0, 60) through the h-axis and on below it; on "nine hours" a readout, 52 px: "h = 9: F = −12 L?" with the point (9, −12) ringed grey below the axis. On "next" chips "trust it?", "Next: interpolation and extrapolation" and "?". Hold about 2 s. This is l04's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Linear model: output = starting value + rate × input.
- The y-intercept is the vertical intercept: the starting value.
- The gradient is the rate of change: the change per 1 of input.
- Interpret with units and "per", like "$5 per hour".
- A falling amount has a negative gradient.

Memory aid (framed card, right side, as in scene 7): *Intercept: where it starts. Gradient: the change per one.* Key: *Interpret with units and "per".* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and l04's opening frame.

## Teaching checks

- **Does it explain causes?** Why the fee is the intercept: it is paid at zero hours, where the line meets the vertical axis (2). Why the hourly price is the gradient: it is added for each hour (2). Why the fee is not multiplied: it is paid once (4, 6). Why a price rise changes only the gradient: the fee is untouched (4). Why the pods' gradient is negative: pods are used up each day (5). Why 20 days: 120 pods at 6 a day (5).
- **Misconceptions addressed:** intercept added each time (4, 6 crossed); swapped start and rate (A1 crossed); positive gradient for a fall (5 crossed ghost); no units or "per" (4 tags); solving for the wrong target (A2 crossed).
- **Visual standard, item by item:** 1 the e-bike from the first frame, returning as a badge; 2 a new stage every 30 to 60 s; 3 words into slots, the price-rise slider with a live readout, the pods running down with a count bar; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 6; 8 framed card and five bullets; 9 the pinned intercept as the line swings.
- **One idea at a time:** building (2), using (3), interpreting (4), falling (5), whole method (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 30 s.
- **Avoided double teaching:** l01's rise over run, l02's y = mx + c and f02's solving are recalled in grey chips and phrases.
- **Syllabus coverage:** `cib2d6c0df` (2 to 6, A1, A2; all five key notes).
- **Out of scope by design:** trusting predictions (l04); spreadsheets (l05); direct variation (l06).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A ski hire shop charges $55 plus $48 per day for skis and boots. (a) Write a linear model for the cost C ($) after d days. (b) Interpret the gradient and the vertical intercept. (c) Find the cost for 5 days."
Model answer: (a) C = 55 + 48d. (b) The gradient, 48, is the cost per day ($48 a day); the vertical intercept, 55, is the fixed amount paid before any days ($55). (c) 55 + 48 × 5 = $295. Classic mistake (crossed): "C = 48 + 55d".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "A water tank holds 2000 L. A garden uses 125 L a day and there is no rain. (a) Write a model for the volume V (L) after d days. (b) Interpret the gradient. (c) After how many days are 500 L left?"
Model answer: (a) V = 2000 − 125d. (b) −125: the volume falls by 125 L each day. (c) 2000 − 125d = 500, so 125d = 1500 and d = 12 days. Classic mistake (crossed): "16 days" (when the tank is empty).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bike hire | C = 12 + 5h; h = 4: $32; 12 + 5h = 47 at h = 7; rate $6: C = 12 + 6h, h = 4: $36 | 1 to 4 |
| Coffee pods | P = 120 − 6d; 120, 90, 60, 30, 0 at d = 0, 5, 10, 15, 20; empty at d = 20 | 5 |
| Site `we-2` | S = 75 + 20w; w = 6: 75 + 120 = $195; slip (75 + 20) × 6 = 570 | 6 |
| A1 | C = 55 + 48d; d = 5: 55 + 240 = $295 | 8, 9 |
| A2 | V = 2000 − 125d; 500 L at d = 12; 1500 ÷ 125 = 12; empty at d = 16 | 10, 11 |
| Handoff | F = 60 − 8h; h = 9: −12 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `l/verify.py`, run with `python -I`); Codex to re-check.

- 12 + 5(4) = 32; 12 + 5h = 47 at h = 7; 12 + 6(4) = 36.
- 120 − 6d = 0 at d = 20; 120 − 6d at d = 0, 5, 10, 15, 20: 120, 90, 60, 30, 0.
- 75 + 20(6) = 195; (75 + 20) × 6 = 570.
- 55 + 48(5) = 295.
- 2000 − 125d = 500 at d = 12; 2000 − 125d = 0 at d = 16.
- 60 − 8(9) = −12.

## Memory aid check

- **"Intercept: where it starts. Gradient: the change per one."** with key line **"Interpret with units and 'per'."** Original. Meaning, as said in scene 7: the vertical intercept is the output when the input is zero (the starting value); the gradient is the change in output for each one unit of input (the rate). Assumptions checked: the model is linear (a constant rate), and "starts" means at input zero, which scene 2 says; "per one" covers a negative change (scene 5: 6 fewer pods per day). It helps a new case: a gym's C = 60 + 15w reads as "$60 to start, $15 more per week". Introduced after scenes 2 to 6.
- **Considered, not used:** "Fee first, then per" (catchy, but suggests the order of terms matters; the site's card 05 and l01 teach that it does not).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `l/count.py`, which reproduces e08's 5,632): **5,281 characters**, 13 scene headings. Characters per scene (1 to 13): 411, 593, 464, 599, 555, 744, 172, 265, 400, 265, 397, 341, 75.

At 13.3 characters per second the speech is about 397 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the slots and graph (2), the reading paths (3), the slider (4) and the pods rider (5) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 484 s (8 min 4 s)**, 86 s under the 570 s cap; speech and holds before the notes about 439 s. Feedback speech: about 30 s and 30 s.

Reserve trims if the voiced take runs long: scene 3's "and solve it, just like in our equations videos" (the grey chip carries it; about 3 s); scene 4's last clause "so four hours now costs thirty-six dollars" (the readout shows it; about 3 s).

## Scene list and build ids

Lesson key `m-s11l03` (route math-s11-l03). Explainer folder `src/explainer/lessons/math-s11-l03`; build inputs in `docs/production/claude-pm/lessons/math-s11-l03/` (at voicing).

In order (13 scene headings): hook-hire-bike, words-to-model, using-model, interpreting, falling-model, worked-savings, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The e-bike and the empty model card |
| 35 to 95 s | 2 | Words into slots, the graph, the syllabus sentence |
| 95 to 135 s | 3 | Substituting and solving on the graph |
| 135 to 190 s | 4 | Interpreting; the price-rise slider |
| 190 to 245 s | 5 | The pod box and the falling line |
| 245 to 305 s | 6 | g01 board: the site's savings |
| 305 to 320 s | 7 | Framed memory card |
| 320 to 425 s | 8 to 11 | Question cards and countdowns, then feedback |
| 425 to 455 s | 12 | The hire-boat frame for l04 |
| 455 to 500 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on l02's final frame; 1 to 2 stage change (the e-bike becomes a badge); 2 to 3 camera continue; 3 to 4 stage change to the sentence cards; 4 to 5 clear change; 5 to 6 clear change to the board; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-l03-learning-review.md`, `science_check` = `checks/m-s11-l03-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only, each opened): `ma11-share-ebike-v1.png` (a teal step-through e-bike with a basket, no rider; used as the hire bike); `ma11-water-tank-v1.png` (a green corrugated rainwater tank on a timber stand with a brass tap and hose; used in A2's picture slot); `ma12-coffee-sandwich-v1.png` (exists for math-s12-a02a; a café coffee and sandwich, not a pod box, so not used).

Need (painted, new; see the Codex asset brief): `ms11s-coffee-pods-v1.png`. The hire boat in scene 12 is `ms11s-hire-boat-v1.png`, briefed in `math-s11-l04.md` and painted before this build (ruling 17). Reused: `ma11-share-ebike-v1.png`, `ma11-water-tank-v1.png`.

Coded: the swing tag, model cards and slots, every graph, slider and rider, the count bar, the fuel-gauge card, sentence cards, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `ModelCard`, `ModelSlot`, `ParameterSlider`, `FunctionSimulator` (linear), `FunctionRider`, `LiveReadoutBoard`, `FillDial` or `ThermoColumn` (the pod count bar, check appearance), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions: none (kit-needs row l03: "None essential").

## Codex asset brief (Maths S11 L03, a box of coffee pods)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s11-l03.md`, route entry math-s11-l03. Paint after the learning review and maths check pass and root gives the go-ahead, and before the l03 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-water-tank-v1.png` and `maths/ma11-share-ebike-v1.png`; no text, letters, numbers, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch; keep the native aspect ratio.

1. `ms11s-coffee-pods-v1.png` (about 1400 × 1000 px): an open cardboard box (plain kraft brown with a coloured stripe, no printing) seen from a three-quarter view above, holding neat rows of small round coffee capsules in two or three plain colours; four or five capsules standing loose on the bench in front of the box. Generic capsules, not any brand's shape or colours. Leave the right third of the canvas clear so a coded count bar can sit beside the box.

Report inspection on the paper background (`#f6f1e7`) at 700 px and 260 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11s-l03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON and the crosswalk exactly, and that scene 2's spoken sentence keeps its meaning.
3. Confirm the site's bike hire (12 and 5, $32 at 4 hours, $36 after the price rise) and `we-2` ($195) are kept; no "m and b" (MS-82).
4. Confirm the intercept is never described as added each time.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 12's frame matches l04's opening.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Linear Models: What the Gradient and Intercept Mean | Year 11 Maths Standard

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson03.sa.html

A hire bike costs $12 before you ride a single metre, then $5 per hour. Turn words like these into a linear model, use it to find a cost or a time, and say what the gradient and the intercept mean, with units. See why the starting amount is paid once, why a price rise changes only the gradient, and how a falling amount gets a negative gradient. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Linear relationships. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
"Model linear relationships and interpret the features of those relationships in a variety of contexts, noting that the y-intercept is the vertical intercept and the gradient is the rate of change"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

Builds on: Writing y = mx + c and Drawing Straight-Line Graphs. Next: Interpolation, Extrapolation and Limits of Linear Models.

#Year11Maths #MathsStandard #LinearModels #HSCScience

## Open decisions

- **1. The hire bike's price (root).** The site's $12 plus $5 per hour is kept and labelled "example price"; real Sydney hire rates are higher per hour. Root may prefer a dated real rate (ruling 32), at the cost of the site's numbers.
- **2. "Just like in our equations videos" (learning review).** Scene 3 points back to f02 by description, not title, because f02's title is not yet fixed. Once f02's title is settled, the chip may quote it.

## Review notes

- Revision 1. Next: student learning review (trace from l02 and f02 only; check that "starting value" and "rate" land before "intercept" and "gradient", that the syllabus sentence is followable at speed, that the slider makes "only the gradient changes" visible, that the pods' zero is reached by a stated cause, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
