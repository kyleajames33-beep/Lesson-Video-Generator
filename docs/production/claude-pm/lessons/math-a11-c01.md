# Maths A11 C01: What does an average rate of change measure on a graph? A linear model's constant rate, the secant and its gradient, Δy/Δx with units, and average speed from a distance-time graph (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,563 characters by script (see "Narration length estimate"), 13 scene headings, about 506 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: thirty-second video of Year 11 Mathematics Advanced (2024), outline order 32, the first video of Introduction to differentiation. Pre-design pack: `../pre-design/maths-a11/math-a11-c01.md` (brief 243). Site lessons (read through the pack's quotations, read only): `introduction-to-differentiation/lesson01.sa.html` (SHA256 `00e3ba61…20a2`; `we-2` used with its numbers) and `lesson12.sa.html` (SHA256 `c1ad49f1…e1e3`; `we-1` re-set as a remote-control car, numbers unchanged). Route entry: `math-a11-c01` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; a painted coffee cart, a painted remote-control car on a painted track strip, and the reused jelly bean jar (prefix `ma11-`); every graph, secant and readout coded.

Owner rules applied: 2024 syllabus only, content points by codename and exact wording; painted plates for real objects and code for diagrams; no people (the cart is unattended, the car has no driver); one main learner question; one reasoning stage at a time; g01 worked examples with a framed answer and a crossed slip; two attempts with "Pause here to answer." and a 10 s countdown; brief feedback (answer, key reason, short working, one crossed slip, 30 s or less); five key notes with a framed memory card, 45 s; everyday anchors (food and money, games); Australian spelling; no em dashes; decimals spoken "zero point"; conversational narration that gives the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Estimating change; NESA codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci8019730a`: "Define the average rate of change of y with respect to x for a function y = f(x) over the domain [a, b] as Δy/Δx = (change in y)/(change in x), that is Δy/Δx = (f(b) - f(a))/(b - a), and recognise (f(b) - f(a))/(b - a) as the gradient of the secant through (a, f(a)) and (b, f(b)) on the graph of y = f(x)"
- `ci7d6c383e`: "Recognise speed as a rate of change of distance with respect to time"
- `ci34973239`: "Use the definition for average rate of change to determine the average speed of an object from a given distance–time graph"
- `ci41d3073a`: "Recognise when modelling with a linear function that its gradient is the rate of change and determine the rate of change for linear functions in practical situations"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from w31's final frame (the jar's V, its right arm from (350, 0) to (370, 20), "run 20", "rise 20", "rise ÷ run = 20 ÷ 20 = 1"). Teaches: a linear model's gradient is its rate of change, the same everywhere, with units from the axes (`ci41d3073a`, original teaching: crosswalk partial; recalls w12's cost per unit); the secant and its gradient as the average rate of change over an interval, which depends on the interval (`ci8019730a`); the general Δy/Δx = (f(b) − f(a))/(b − a) on site `we-2`; speed as the rate of change of distance with respect to time and average speed from a distance-time graph, with units (`ci7d6c383e`, `ci34973239`, site lesson12 `we-1`). Stops at averages. Not taught: instantaneous speed and tangents (c02); rates of other quantities at a point (c03); negative rates (c03; mentioned only as the sign a reversed subtraction gives).

## Decisions

- **Anchor: a coffee cart's morning (painted plate, live).** The graph of total cups sold since 6 am is a curve: slow at first, steep in the 7 to 9 rush, flat after. "How fast is it selling?" has no single answer, which is exactly what a secant's average answers. The cart also gives the linear case: at $5 a cup, takings T = 5n is a straight line whose gradient is "$5 per cup" at every point. Food and money. Pack anchor 2; not used in any Year 12 or w-strand design (grep of anchor lines, 16 Nov; f04's attempt 1 sells coffees in a café as a series question, a different idea, noted for root). The pack's GPS running watch was not chosen: running and sprinters appear in s-strand anchors, and speed gets its own object (the car).
- **Second object: a remote-control car (painted plate).** Speed is the one rate the syllabus names, so it needs a moving object; site lesson12 `we-1` ((2, 30) to (6, 90), metres and seconds, 15 m/s) is re-set as a hobby remote-control car on a track (15 m/s is a plausible hobby-car speed; it is never converted). The car is c02's anchor too, so scene 12's frame is c02's opening (games). Year 12 d08's road-trip car (average speed as a quotient) is a different object and question; no car is used here.
- **Opening (root ruling 6):** w31's final frame exactly. The V's straight arm is the first linear rate (one unit of "how far off" per guess), then the jar fades and the cart takes over.
- **Simulations (standard item 3).**
  1. **`SecantPivot`** (scenes 3, 4, 5; new part): on the cart's curve, two points P (time a) and Q (time b) with the secant through them extended across the plot (amber), run and rise legs (blue, teal) and a live readout "average rate = rise ÷ run" with its unit built from the axis labels ("cups per hour"). In scene 4 the pair slides through 6 to 7, 7 to 9, 9 to 11 and 6 to 11 and the readout recomputes (40, 60, 35, 46), so the student watches the average change with the interval.
  2. **`TripSim`** (scene 6, existing rig): the car plate drives along the track strip, its position computed from the distance model s(t) = 15t − 4 sin(πt/2) (author note b), a distance ticker and a stopwatch running, while the distance-time curve draws in step; at t = 2 and t = 6 markers drop onto the curve.
  3. **Straight-line probe** (scene 2): two points slide along T = 5n and the readout stays at "$5 per cup" however they move.
- **Colour roles (fixed for the whole video, and the c strand).** Run Δx **blue**; rise Δy **teal** (the w31 handoff's colours, and inputs blue, outputs teal from the functions strand); the secant and its gradient **amber**; points on the curve ink; answer **green**; mistake **red**, crossed slips only. Units are written in the colour of their axis (the y unit teal, the x unit blue), so "cups per hour" reads teal over blue.
- **Large type, handwritten voice.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px. Hand tags: "same everywhere", "rise ÷ run", "secant", "ignores the middle", "which interval?", "Δ = change in", "same order", "up-unit per along-unit", "metres ÷ seconds", "× 60", "dips, then back".
- **Stage changes (standard item 2).** The jar's V (1, opening); the cart plate and its curve (1); the takings line (2); the curve with one secant (3); the sliding secant (4); g01 board (5); the car on its track with its graph (6); framed card (7); question cards (8 to 11); the car at the finish line (12); key notes (13).
- **Worked examples (g01 layout).** 5: site `we-2`, f(x) = x² over [1, 3], rate 4; crossed "(9 − 1)/(1 − 3) = −4" (orders flipped). 6: site lesson12 `we-1` as the car, 15 m/s; crossed "4/60 s per m" (upside down). Scenes 3 and 4 are simulation stages with rows.
- **Memory aid.** Framed card: "Two points, one secant: rise over run, in up-units per along-unit." Badge: the cart's curve with one amber secant.
- **Visual surprise.** As the secant's two ends slide along the same curve, its gradient jumps from 40 to 60 to 35 cups an hour; on the straight takings line the same sliding changes nothing.
- **Site notes (pack section 8).** lesson01's quick check prints its own working (new finding, logged in the decisions file); no copy of it is used. lesson01's sprint hook (a named athlete) and its chemical-solution table are not used (pack decision); `we-2` is used with its numbers. The site gives no unit for its table example; this video always states units.
- **Plain meanings at first use.** Rate of change ("how fast one quantity changes compared with another"); secant ("a straight line that cuts a curve at two points"); Δ ("change in"); interval [a, b] ("from x = a to x = b"); distance-time graph ("distance up, time along").
- **Attempts (pack questions).** A1 (pack Q1, re-set as a ferry): (5, 2) and (20, 11), minutes and kilometres: 0.6 km per minute, 36 km/h; crossed "0.6 km/h". The unit change is spoken ("sixty minutes in an hour, so multiply by sixty"). A2 (pack Q2): f(x) = x² − 4x + 7 over [1, 4] gives 1, over [0, 4] gives 0; crossed "0, so f stayed constant".
- **Mistake scene:** none separate. Orders flipped (5 crossed); units upside down (6 crossed); unit not converted (A1 crossed); "zero average means no change" (A2 crossed); the height f(b) given instead of a rate (scene 3 tag "rate, not height").
- **Cause chain taught, in order:** (1) a straight line has the same steepness everywhere, so a linear model has one rate, its gradient, in up-units per along-unit (1, 2); (2) a curve's steepness changes, so "how fast" needs an interval (1, 3); (3) the secant joins the two ends of the interval, and its gradient is the change in y over the change in x: the average rate, which ignores what happens in between (3); (4) a different interval gives a different secant and a different average (4); (5) in function notation that gradient is (f(b) − f(a))/(b − a), with the same order on top and bottom (5); (6) speed is distance changing with time, so on a distance-time graph a secant's gradient is an average speed in distance units per time unit (6).
- **Entry knowledge (route):** w10 (gradient through two points); w12 (a linear model's gradient as an amount per unit); w08 (evaluating f(a)); w31 (the V and its rise and run; the opening frame only).
- **Handoff (to math-a11-c02, "How does a tangent capture speed at one instant?").** Scene 12: the car (`ma11-rc-car-v1.png`) at the chequered finish line of the track strip, a coded speed-gun reading box above it showing "? m/s"; at the left a small distance-time plot with an amber secant over an interval, tagged "average: a secant ✓"; at the finish-line point on the curve a single dot tagged "one instant: ?"; chips "Next: speed at one instant" and "?". This is c02's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Cart: C(t) = −31t³/12 + 17t² + 307t/12 cups, t hours after 6 am, 0 ≤ t ≤ 5; C(1) = 40, C(3) = 160, C(5) = 230; C′(t) > 0 on [0, 5] (minimum C′(5) = 11/6), fastest selling at t = 68/31 (about 8:12 am). Axis labels show clock times 6 to 11. Secants: 6 to 7: 40; 7 to 9: 60; 9 to 11: 35; 6 to 11: 46 cups per hour. The model is a smooth curve for the picture; it is never shown as a formula.
  (b) Car: s(t) = 15t − 4 sin(πt/2) m, 0 ≤ t ≤ 8 s; s(2) = 30, s(6) = 90; s′(t) = 15 − 2π cos(πt/2) > 0, so it never stops; it speeds up and slows down, which is why "average" matters. Never shown as a formula.
  (c) Takings T = 5n: (10, 50) and (30, 150): 100/20 = 5.
  (d) `we-2`: (9 − 1)/(3 − 1) = 4; flipped (9 − 1)/(1 − 3) = −4.
  (e) A1: 9/15 = 0.6 km/min; × 60 = 36 km/h. A2: f(1) = 4, f(4) = 7, f(0) = 7; rates 1 and 0; minimum f(2) = 3.
  (f) Pronunciations: "delta y over delta x"; "f of b minus f of a"; "zero point six"; "x squared minus four x plus seven".
  (g) Windows: cart plot t 6 to 11 (clock), cups 0 to 250; takings n 0 to 40, T 0 to 200; x² plot x 0 to 3.5, y 0 to 10; car plot t 0 to 8 s, s 0 to 130 m; A2 picture x −0.5 to 4.5, y 0 to 8.

Main question: *A coffee cart sells slowly, then fast, then slowly. How fast is it selling? What does an average rate of change measure on a graph?*
Entry knowledge (w10, w12, w08, w31): gradient through two points; a linear model's gradient as a rate per unit; f(a) by substitution.
Stops after: a linear model's constant rate; the secant and the average rate over an interval with units; (f(b) − f(a))/(b − a); average speed from a distance-time graph. No tangent, no instant.
Handoff: math-a11-c02: "the car crosses the finish line: how fast at that one instant?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): run blue; rise teal; secant amber; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one rate, or many?
> Here's the jelly bean V again. Along its right arm, every extra guess adds exactly one to how far off you are. Twenty across, twenty up, so the rate is one, and it's one everywhere on that arm, because a straight line has the same steepness all the way **along**. Now here's a coffee cart. This graph shows the total cups it has sold since six in the morning. It's a curve. It climbs slowly, then fast in the morning rush, then slowly **again**. So how fast is it selling? On a curve, the answer depends on when you look. What does an average rate of change measure on a graph?

Visual: opens on w31's final frame exactly (the jar badge `ma11-jellybean-jar-v1.png`, the V y = |g − 350| with its right arm from (350, 0) to (370, 20) amber, "run 20" blue, "rise 20" teal, "rise ÷ run = 20 ÷ 20 = 1", chips "Next: how fast does a graph change? Average rate of change" and "?"). On the first sentence the chips fade. A second rise-and-run triangle slides up the arm from (370, 20) to (390, 40), its row also "= 1"; on "along" hand tag "same everywhere". Then a clear change: the coffee cart plate `ma11-coffee-cart-v1.png` (720 px wide) at the left; at the right a plot (1,000 × 640 px), clock times 6 to 11 along (blue label "time (hours)"), "total cups sold" up (teal), and the curve C(t) draws left to right in ink as a coded cup counter on the cart's chalkboard box ticks 0 → 230 in step. On "again" the curve's three parts get small grey hand tags "slow", "rush", "slow". Heading writes on: "What does an average rate of change measure?" The chip "How fast is it selling?" moves to the top right.

### 2. a straight line: one rate everywhere
> Let's start with the easy case. Each coffee costs five dollars, so the takings are five dollars times the number of cups, T equals five n. That's a straight line through the origin. Pick any two points on it, say ten cups and thirty cups. The takings go from fifty dollars to a hundred and fifty, so the rise is a hundred dollars over a run of twenty cups. That's five dollars per **cup**. Pick two other points, and you get five again. When a model is linear, its gradient is its rate of change, and the units come from the axes, dollars up, per cup **along**.

Visual: clear change to a large plot (n 0 to 40 along, blue "cups sold"; T 0 to 200 up, teal "takings ($)"; 1,100 × 700 px), the cart as a 260 px badge at the top left. Equation chip 52 px: "T = 5n". Points (10, 50) and (30, 150) mark with a run leg "20 cups" (blue) and a rise leg "$100" (teal). Row 52 px: "rise ÷ run = 100 ÷ 20"; on "cup" "= $5 per cup" (green frame). On "Pick two other points" the straight-line probe slides both points to (4, 20) and (36, 180); the legs stretch and the readout stays "$5 per cup", hand tag "same everywhere". On "along" the unit "$ per cup" splits into "$" (teal) over "cup" (blue), hand tag "up-unit per along-unit"; grey chip "w12: gradient = amount per unit".

### 3. a curve: the secant
> Now the curved graph. Time is along the bottom, in hours, and total cups go up the side. At seven o'clock the cart had sold forty cups, and by nine it had sold a hundred and **sixty**. Join those two points with a straight line. A line that cuts a curve at two points is called a secant. Its gradient is the rise over the run, a hundred and twenty cups over two hours, which is sixty cups per **hour**. Careful, a hundred and sixty is a total, not a rate. The rate is how fast that total grows. That's the average rate of change from seven to nine. It's an average because it ignores everything in between. Some of those minutes were busier than others, and the secant only reports the overall effect.

Visual: clear change back to the cart's curve (1,200 × 760 px), the cart badge at the top left. `SecantPivot`: points (7, 40) and (9, 160) ring in ink with dashed guides to both axes; on "sixty" (bold "sixty" in "a hundred and sixty") the amber secant draws through them, extended across the plot, hand tag "secant". Legs: run "2 hours" (blue), rise "120 cups" (teal). Row 52 px: "average rate = 120 ÷ 2"; on "hour" "= 60 cups per hour" (green frame). A small grey tag by the point (9, 160): "160 is a total, not a rate". On "ignores everything in between" the part of the curve between the two points dims to grey under the secant and hand tag "ignores the middle".

### 4. the average depends on the interval
> Watch what happens when we slide the two points. From six to seven, the secant's gradient is forty cups an **hour**. From nine to eleven, it drops to thirty-five, because the rush is **over**. Over the whole morning, six to eleven, it's two hundred and thirty cups in five hours, forty-six cups an **hour**. Seven to nine is the steepest secant, because it covers the rush. Different intervals, different secants, different averages. On a straight line every secant would match. On a curve, you always have to say which interval.

Visual: the same plot (simulation stage). `SecantPivot` slides the pair from 7 to 9 to 6 to 7: on "hour" (first) the readout "40 cups per hour" (amber). On "over" the pair slides to 9 to 11: "35 cups per hour". On "hour" (second) it widens to 6 to 11: "46 cups per hour", with "230 ÷ 5" in the row. Each result stacks in a small table at the right, 44 px: "6 to 7: 40", "7 to 9: 60", "9 to 11: 35", "6 to 11: 46". On "On a straight line" a mini T = 5n badge flashes "5, 5, 5"; hand tag "which interval?" over the table.

### 5. worked example: the general rule
> Here's the general version. For a function y equals f of x, over the interval from a to b, the average rate of change is delta y over delta x. Delta just means "change in". So it's the change in y, f of b minus f of a, over the change in x, b minus a. Delta y is the rise and delta x is the run, so it's still rise over run. And that's exactly the gradient of the secant through the points a, f of a and b, f of **b**. Let's try f of x equals x squared, from one to three. f of three is nine and f of one is one. So the rate is nine minus one, over three minus one, which is eight over two, or **four**. Keep the same order on the top and the bottom. Nine minus one over one minus three gives minus four, which has the wrong **sign**.

Visual: clear change to the g01 board. Top strip, 44 px: "average rate over [a, b] = Δy/Δx = (f(b) − f(a))/(b − a)" with Δy teal and Δx blue, hand tag "Δ = change in". On "b" (bold) a small plot at the right (x 0 to 3.5, y 0 to 10) with y = x² and the amber secant through (1, 1) and (3, 9), labels "(a, f(a))", "(b, f(b))". Task strip, 44 px: "Find the average rate of change of f(x) = x² over [1, 3]." Givens card: "a = 1", "b = 3" (blue). Rows, 52 px: "f(3) = 9, f(1) = 1"; "(9 − 1)/(3 − 1) = 8/2"; on "four" "= 4" (green frame). On "sign" a red slip "(9 − 1)/(1 − 3) = −4" writes and is crossed, caption "same order top and bottom".

### 6. speed: average speed from a distance-time graph
> One rate gets its own name. Speed is the rate of change of distance with respect to time. So on a distance-time graph, the gradient of a secant is an average speed. This remote-control car's graph has metres up and seconds along. At two seconds it has travelled thirty metres, and at six seconds, ninety **metres**. The average speed is ninety minus thirty, over six minus two. That's sixty metres in four seconds, so fifteen metres per **second**. In between, the car sped up and slowed down, but the secant only uses the two ends. The units come from the axes, metres on top and seconds underneath. Writing seconds per metre turns the rate upside **down**.

Visual: stage change. Top: the track strip `ma11-rc-track-strip-v1.png` (1,600 px wide) with the car `ma11-rc-car-v1.png` (300 px) on it; `TripSim` drives the car along from s(t), a distance ticker "s = … m" (teal) and a stopwatch "t = … s" (blue). Below: the distance-time plot (t 0 to 8, s 0 to 130; 1,100 × 520 px) draws in step. Chip 44 px: "speed = rate of change of distance with respect to time". On "metres" markers drop at (2, 30) and (6, 90); the amber secant draws; legs "4 s" (blue), "60 m" (teal). Row 52 px: "(90 − 30)/(6 − 2) = 60/4"; on "second" "= 15 m/s" (green frame), hand tag "metres ÷ seconds". On "down" a red slip "4/60 s per m" writes and is crossed, caption "distance unit on top". The curve's wiggle between the markers is ringed in grey, tag "faster, slower, the secant ignores it".

### 7. memory aid
> Here's a way to remember it. Two points make a secant, and its gradient is the average rate. Rise over run, in up-units per along-unit. Same two points, same order, top and **bottom**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the cart's curve with one amber secant and its legs. Main line, hand font 60 px: "Two points, one secant." On "bottom" the key line, 36 px: "average rate = (f(b) − f(a))/(b − a), in up-units per along-unit". Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A ferry's distance-time graph passes through five, two and twenty, eleven, with time in minutes and distance in kilometres. Find its average speed over this interval, in kilometres per hour. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A ferry's distance-time graph passes through (5, 2) and (20, 11), with time in minutes and distance in kilometres. Find the average speed over this interval in kilometres per hour." The full question stays on screen. Picture slot: coded axes "time (min)" and "distance (km)" with the two points marked and no line joining them. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The rise is eleven minus two, which is nine kilometres. The run is twenty minus five, fifteen minutes. Nine over fifteen is zero point six kilometres per **minute**. The question wants kilometres per hour, and there are sixty minutes in an hour, so multiply by sixty. That's thirty-six kilometres per **hour**. Stopping at zero point six is the slip. That's per minute, not per **hour**.

Visual: the card shrinks to the top (30 px), "kilometres per hour" underlined. The secant draws on the picture; rows 52 px: "(11 − 2)/(20 − 5) = 9/15"; on "minute" "= 0.6 km per min". Row: "0.6 × 60" with hand tag "× 60: 60 min in 1 h"; on "hour" (first) "= 36 km/h" (green frame). On "hour" (last) a red slip "0.6 km/h" writes and is crossed, caption "per minute, not per hour". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. For f of x equals x squared minus four x plus seven, find the average rate of change over the interval from one to four, and over the interval from zero to four. Then explain how the same curve gives two different answers. Pause here to answer.

Visual: `QuestionCard`, 40 px: "For f(x) = x² − 4x + 7, find the average rate of change over [1, 4] and over [0, 4]. Explain how the same curve gives two different answers." Picture slot: empty axes (x −0.5 to 4.5, y 0 to 8). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 2 (brief)
> f of one is four, f of four is seven, and f of zero is seven. From one to four, it's seven minus four, over three, which is **one**. From zero to four, it's seven minus seven, over four, which is **zero**. Each answer is the gradient of a different secant. A zero average doesn't mean f never changed. It dips to three, then comes back to the same height. Saying it stayed constant is the **slip**.

Visual: the card shrinks to the top. Row 44 px: "f(1) = 4, f(4) = 7, f(0) = 7". The parabola draws on the picture. On "one" the amber secant from (1, 4) to (4, 7) and row "(7 − 4)/3 = 1"; on "zero" a second secant from (0, 7) to (4, 7), flat, row "(7 − 7)/4 = 0". Framed answer (green): "[1, 4]: 1. [0, 4]: 0. Different intervals, different secants." The dip to (2, 3) rings, hand tag "dips, then back". On "slip" a red slip "0, so f stayed the same" writes and is crossed. Hold about 1 s.

### 12. handoff
> So an average rate is the gradient of a secant, across an interval. Now picture the car crossing the finish line. A speed gun there shows one number, its speed at that instant. The car doesn't move at a steady speed, so the average can't tell us that. But a secant needs two points, and an instant is just one. So how can a graph give a speed at one **moment**? That's next.

Visual: the memory line shows small at the top (30 px), then fades. The track strip with the car at the chequered finish line; a coded speed-gun reading box above it, "? m/s". At the left a 600 px distance-time plot with an amber secant over an interval, tag "average: a secant ✓"; on "one" (in "just one") a single dot on the curve at the finish time, tag "one instant: ?". On "moment" chips "Next: speed at one instant" and "?". Hold about 2 s. This is c02's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Average rate of change over [a, b] = Δy/Δx = (f(b) − f(a))/(b − a).
- It is the gradient of the secant through (a, f(a)) and (b, f(b)).
- Units: the y unit per the x unit. Same order top and bottom.
- Speed is the rate of change of distance with respect to time.
- A linear model has one rate everywhere: its gradient.

Memory aid (framed card, right side, as in scene 7): *Two points, one secant.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c02's opening frame.

## Teaching checks

- **Does it explain causes?** Why a line has one rate: equal steepness everywhere (1, 2). Why "how fast" needs an interval on a curve: the steepness changes (1, 3, 4). Why the secant gives an average: it only uses the two ends (3, 6). Why the order matters: reversing one subtraction flips the sign (5). Why the units are up per along: the gradient divides the y change by the x change (2, 6).
- **Misconceptions addressed:** the height as the rate (3 tag); orders flipped (5 crossed); units upside down (6 crossed); unit not converted (A1 crossed); the average as the speed at every moment (3, 6 tags); zero average means no change (A2 crossed).
- **Visual standard, item by item:** 1 the jar, then the painted cart within 20 s, returning as badges; the car plate in 6 and 12; 2 a new stage every 30 to 55 s; 3 `SecantPivot` sliding with a live readout, `TripSim` with tickers, the straight-line probe; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 5 and 6; 8 framed card and five bullets; 9 the readout jumping on the curve but frozen on the line.
- **One idea at a time:** the line (2), the secant (3), the interval (4), the formula (5), speed (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** gradient through two points (w10) and a model's gradient as an amount per unit (w12) are recalled in one sentence and a grey chip.
- **Syllabus coverage:** `ci41d3073a` (1, 2; key note 5); `ci8019730a` (3, 4, 5, A2; key notes 1 to 3); `ci7d6c383e` (6; key note 4); `ci34973239` (6, A1).
- **Out of scope by design:** tangents and instantaneous speed (c02); rates at a point on practical graphs (c03).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, re-set as a ferry, original, HSC style, 2 marks suggested, not an official marking scheme).** "A ferry's distance-time graph passes through (5, 2) and (20, 11), with time in minutes and distance in kilometres. Find the average speed over this interval in kilometres per hour."
Model answer: (11 − 2)/(20 − 5) = 9/15 = 0.6 km per minute; × 60 = 36 km/h. Classic mistake (crossed): "0.6 km/h".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "For f(x) = x² − 4x + 7, find the average rate of change over [1, 4] and over [0, 4]. Explain how the same curve gives two different answers."
Model answer: f(1) = 4, f(4) = 7, f(0) = 7. Over [1, 4]: (7 − 4)/3 = 1. Over [0, 4]: (7 − 7)/4 = 0. Each is the gradient of a different secant; f falls to 3 at x = 2 and rises back, so the secant over [0, 4] is flat even though f changed. Classic mistake (crossed): "0, so f stayed the same".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Jar arm | rise 20, run 20, rate 1 (twice) | 1 |
| Takings | T = 5n; (10, 50), (30, 150): 100/20 = 5; (4, 20), (36, 180): 5 | 2 |
| Cart | C(7) = 40, C(9) = 160 (clock times); 120/2 = 60 cups per hour | 3 |
| Cart intervals | 6 to 7: 40; 9 to 11: 35; 6 to 11: 230/5 = 46 | 4 |
| Site `we-2` | x² on [1, 3]: 9, 1, 8/2 = 4; flipped −4 | 5 |
| Car (site lesson12 `we-1`) | (2, 30), (6, 90): 60/4 = 15 m/s; slip 4/60 s per m | 6 |
| A1 | 9/15 = 0.6 km/min; 36 km/h | 8, 9 |
| A2 | f(1) = 4, f(4) = 7, f(0) = 7; rates 1 and 0; dip f(2) = 3 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c01c09/verify.py` and `cart.py`); Codex to re-check.

- Cart model C(t) = −31t³/12 + 17t² + 307t/12 (t hours after 6 am): C(0) = 0, C(1) = 40, C(3) = 160, C(5) = 230; C′(t) > 0 on [0, 5], C′(5) = 11/6; secants 40, 60, 35, 46.
- T = 5n: 100/20 = 5.
- x² on [1, 3]: (9 − 1)/(3 − 1) = 4; (9 − 1)/(1 − 3) = −4.
- Car s(t) = 15t − 4 sin(πt/2): s(2) = 30, s(6) = 90; (90 − 30)/(6 − 2) = 15; s′(t) = 15 − 2π cos(πt/2) ≥ 15 − 2π > 0.
- Ferry: (11 − 2)/(20 − 5) = 3/5; 3/5 × 60 = 36.
- x² − 4x + 7: f(0) = 7, f(1) = 4, f(2) = 3, f(4) = 7; (7 − 4)/3 = 1; (7 − 7)/4 = 0.
- Jar: 20/20 = 1.

## Memory aid check

- **"Two points, one secant."** Original. Meaning, as said in scene 7: the average rate over an interval is the gradient of the secant joining the interval's two end points, rise over run, in y units per x unit, with the same order of subtraction top and bottom. Assumptions checked: a ≠ b; the function is defined at both ends. It helps a new case: a share price from $12 on Monday to $9 on Thursday averages (9 − 12)/3 = −$1 per day. Introduced after scenes 2 to 6. It sets up c02's "Average: two points on the curve. Instant: two points on the tangent."
- **Considered, not used:** "Rise over run" alone (misses the interval and units).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,563 characters. At 13.3 characters per second, plus 2 countdowns of 10 s (20 s), short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s, about 22 s of settling (the curve drawing, the secant sliding, the car's run), and the 45 s notes scene: about 506 s. Characters per scene (1 to 13): 569, 553, 693, 517, 722, 646, 180, 223, 375, 254, 386, 370, 75. Speech before the notes is about 413 s, 64 s under the 570 s cap. Feedback speech: about 28 s and 29 s.

Reserve trims if the voiced take runs long: scene 2's second pair of points (keep the probe moving silently); scene 6's last sentence (keep the crossed slip on screen).

## Scene list and build ids

Lesson key `m-a11c01` (route math-a11-c01). Explainer folder `src/explainer/lessons/math-a11-c01`; build inputs in `docs/production/claude-pm/lessons/math-a11-c01/` (at voicing).

In order (13 scene headings): hook-cart, linear-rate, secant, slide-interval, general-rule, average-speed, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | w31's frame; the cart and its curve |
| 45 to 92 s | 2 | The takings line and its probe |
| 92 to 145 s | 3 | The secant from 7 to 9 |
| 145 to 180 s | 4 | The sliding secant and its table |
| 180 to 236 s | 5 | g01 board, site we-2 |
| 236 to 290 s | 6 | The car's run and its distance-time graph |
| 290 to 305 s | 7 | Framed memory card |
| 305 to 410 s | 8 to 11 | Question cards and countdowns, then feedback |
| 410 to 435 s | 12 | The car at the finish line |
| 435 to 480 s | 13 | Key notes with the framed card, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w31's last frame continues into 1; within 1 a clear change from the jar to the cart; 1 to 2 clear change; 2 to 3 clear change; 3 to 4 continuous (simulation); 4 to 5 clear change to the g01 board; 5 to 6 stage change; 6 to 7 camera pull back to the card; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return to scene 12's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c01-learning-review.md`, `science_check` = `checks/m-a11c01-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, by file name, read only): no coffee cart, café or remote-control car plate exists; `biology/b4-car-blue-v1.png` (a full-size car, d08's road trip) is the wrong object. Reused: `maths/ma11-jellybean-jar-v1.png` (w31's brief).

Need (painted, new; see the Codex asset brief): `ma11-coffee-cart-v1.png`, `ma11-rc-car-v1.png` (also c02), `ma11-rc-track-strip-v1.png` (also c02).

Coded: every graph, secant, leg and readout, the cup counter box, the speed-gun box, tables, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `StudioPlot`, `StudioTangentTriangle` (as a plain rise-and-run triangle), `LiveReadoutBoard`, `TripSim`, `WorkingBoard`, `GivensCard`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`SecantPivot`** (new; used in c01 to c04): a plotted function with point P at x = a and Q at x = b (or a + h), both driven by frames; the secant through them extended across the plot; run and rise legs in role colours; a live readout "rise ÷ run = value unit" built from the axis units. Check: the readout equals (f(b) − f(a))/(b − a) from the plotted function at every frame; at a = b it hides the secant (no division by zero).
2. **`TripSim` with a track plate**: the existing rig with the car plate and track strip instead of the road; distance from s(t) above.

## Codex asset brief (Maths A11 C01, a coffee cart and a remote-control car)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c01.md`, route entry math-a11-c01. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, labels, logos, brand names, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-coffee-cart-v1.png` (1600 × 1200 px): a small mobile coffee cart on two wheels with a striped awning, an espresso machine on the counter, a stack of paper cups and a few lids, seen from the front three-quarter view; a blank small chalkboard hung on the side (code writes the cup count on it; sidecar box); unattended, no menu text.
2. `ma11-rc-car-v1.png` (1200 × 700 px): a hobby remote-control car (buggy style, chunky tyres, a short whip aerial), side view facing right, no driver figure, no decals or numbers.
3. `ma11-rc-track-strip-v1.png` (2400 × 500 px): a straight strip of smooth grey asphalt track with white edge lines, a chequered finish line across it about 80 per cent of the way along, side-on at a low three-quarter angle so the car plate sits on it; the far edge fades to transparent.

Sidecar JSON (`ma11-coffee-cart-v1.json`): the chalkboard's text box (four corners). Report inspection on the paper background (`#f6f1e7`) at 300 px and full size, and the alpha check; confirm the car sits on the strip without scaling either. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly.
3. Confirm every rate is stated with units in up-unit per along-unit order, and A1's minute-to-hour change is spoken.
4. Confirm site `we-2` and lesson12 `we-1` keep their numbers, and lesson01's quick check is not copied.
5. Confirm no tangent or instantaneous rate is taught (only named in the handoff).
6. Confirm the cart curve is increasing on [0, 5] and the car model never stops or reverses.
7. Confirm both attempts carry every demand and neither card nor picture shows an answer.
8. Confirm no em dash (U+2014), Australian spelling, the narration count by script, every bold cue quoted in its scene's Visual in spoken order, and that scene 1 opens on w31's final frame.

## YouTube metadata (draft)

Title: Average Rate of Change: The Gradient of a Secant | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson01.sa.html

A coffee cart sells slowly, then fast, then slowly. How fast is it selling? See why a straight line has one rate everywhere, then measure a curve's average rate of change with a secant: rise over run between two points, with units from the axes. Use Δy/Δx = (f(b) − f(a))/(b − a), and find average speed from a distance-time graph. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define the average rate of change of y with respect to x for a function y = f(x) over the domain [a, b] as Δy/Δx = (change in y)/(change in x), that is Δy/Δx = (f(b) - f(a))/(b - a), and recognise (f(b) - f(a))/(b - a) as the gradient of the secant through (a, f(a)) and (b, f(b)) on the graph of y = f(x)"
"Recognise speed as a rate of change of distance with respect to time"
"Use the definition for average rate of change to determine the average speed of an object from a given distance–time graph"
"Recognise when modelling with a linear function that its gradient is the rate of change and determine the rate of change for linear functions in practical situations"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Absolute value graphs; gradient of a line. Next: Instantaneous speed and the tangent.

#Year11Maths #MathsAdvanced #RatesOfChange #HSCScience

## Open decisions

- **1. Coffee near-context (root).** Year 12 f04's attempt 1 is a café selling coffees in an arithmetic series. c01's anchor is a cart's cumulative sales curve, a different idea; judged distinct.
- **2. The car spans c01 and c02 (root).** The car is introduced in c01's speed scene and is c02's anchor, like w30 and w31's jar. If root wants c02 to have its own object, only c01's scenes 6 and 12 change.
- **3. Site link.** c01 draws on lesson01 and lesson12; the description links lesson01. Confirm the playlist page.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w10 and w12; check that "average ignores the middle" is seen on the curve, that units are built visibly from the axes, and that A1's unit change is understood), then the Codex maths check and error check, then voicing and a build to grade A.
- The sliding secant and the frozen line readout carry the explanation; judge them at playback speed. Every readout must be computed.
