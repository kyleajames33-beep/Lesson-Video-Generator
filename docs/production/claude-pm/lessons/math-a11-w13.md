# Maths A11 W13: Where do two linear models meet, and what does the meeting point mean? Cost, revenue and break-even, and solving a practical pair of lines algebraically, graphically and with a graphing app (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models). Not voiced (no `math-a11-w13/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,624 characters, 14 scene headings, about 511 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: thirteenth video of the Year 11 Mathematics Advanced course (outline playlist order 13), after w12 (linear models and inequalities) and before w14 (zeros and the discriminant). Pre-design pack: `../pre-design/maths-a11/math-a11-w13.md` (brief 243). Site lessons (read through the pack's quotations, read only): `working-with-functions/lesson19.sa.html` (Break-even and Quadratic Modelling, SHA256 `40f59eeef05d66d2740baa2c326bbeabe6f4c5ba9c4782607d60b13620b94cc4`, `we-1`, `we-2`) and `working-with-functions/lesson18.sa.html` (SHA256 `cce25d1b6c1b41586c2bd6711af9c183378ef0230354350ff07f89682b88b690`, `we-2`); `lesson16.sa.html` is context only. Every number recalculated with SymPy. Route entry: `math-a11-w13` in `../../programme/maths-a11-route-inputs-1.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for real objects (a market lemonade stall and its cups, a tradie's van, swimming goggles, a T-shirt), coded graphs, regions, the graphing-app window and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a small business, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule. The site's "$8 profit per item" is corrected to "$8 on each item after that item's own costs" (`../site-corrections-maths-a11.md`, S11-04).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Constructing and using functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-1.json`:

- `ci83587815`: "Solve practical problems involving a pair of simultaneous linear equations both algebraically and graphically, with and without graphing applications, and justify conclusions in the context of the problem"
- `cicb50e7a8`: "Construct and use simultaneous equations to model and solve a problem where cost and revenue are represented by linear equations, identify and analyse the break-even point, and justify conclusions in the context of the problem"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w12's final frame (the lemonade stall, "$200 site fee", "each cup: costs $3, sells for $5", two faint lines and a "?" ring). Builds cost and revenue as two linear models over the same variable (`cicb50e7a8`, site lesson 19 `we-1`, numbers unchanged); shows the profit as the gap between them and break-even as the meeting point, then solves it algebraically and analyses profit on either side; handles a non-whole break-even (site lesson 19 `we-2`, numbers unchanged, wording corrected); solves a practical pair of lines (site lesson 18 `we-2`, two electricians' plans) algebraically, graphically by hand, and with a graphing application, and turns the crossing into a decision (`ci83587815`). Recalls the substitution and elimination methods from Stage 5 without re-teaching them. Stops at linear pairs. Not taught: quadratic revenue (site lesson 19 `we-3`, w19); intersections of a line and a curve (later); systems of three equations (not Advanced).

## Decisions

- **Anchor: a market lemonade stall (painted plates, live).** The site's own break-even example (lesson 19 `we-1`: $200 site fee, $3 to make each drink, sold for $5) becomes a lemonade stall at a weekend market. It carries the main ideas: two models over one variable (2); the profit as the gap between revenue and cost, closing by $2 a cup (3); break-even as the meeting point and as the solution of C = R (3, 4); profit and loss on either side, analysed at 250 cups (4); and the decision in words. The stall returns in the memory card (8) and the handoff (13). A small business, food and money, not science; distinct from Year 12's s12 bottle-filling machine (a factory filling bottles, with no cost or revenue) and every other Year 12 anchor; distinct from w12's gym and from the w01 to w07 packs' suggestions.
- **Second context kept from the site (worked example, not an anchor).** Lesson 18 `we-2`'s two electricians' plans (A: $70 + $45 an hour; B: $120 + $30 an hour) stay in their own context as the "any practical pair" example, with a painted tradie's van (no lettering). They give the graphing-app demonstration a fresh pair whose crossing is not a whole number (h = 10/3), which is the reason an app's decimal and the algebra's exact value are compared.
- **Idealising assumptions (author notes, not learner copy).** (i) Every cup made is sold; the $3 per cup covers lemons, sugar and the cup. (ii) The workshop's $8 is the amount each item brings in after that item's own costs (S11-04); its $340 is fixed. (iii) The electricians charge by the exact time, with no minimum.
- **Simulations (standard item 3).**
  1. **The selling day** (scene 3, the main simulation): a cup counter n runs from 0 to 250; painted cups slide off the stall's counter into a growing coded tally; a vertical rider moves along both lines at the current n; a `LiveReadoutBoard` shows "cups n" (amber), "cost C" (violet), "revenue R" (blue) and "profit R − C" (grey and labelled "loss" while negative, teal and labelled "profit" once positive); the gap between the lines shades grey (loss) to the left of the crossing and teal (profit) to the right, the shading drawing as the rider passes. At n = 100 the rider's gap closes to a point and the readout reads "$0".
  2. **The profit counter** (scene 5): a signed profit bar (`SignedBar`) steps n = 40, 41, 42, 43, 44 with P = 8n − 340: −20, −12, −4, +4, +12; it crosses zero between 42 and 43.
  3. **The app's intersection tool** (scene 7; `ScreenApp` in graph mode, unbranded "graphing app" window): both lines typed in, the window auto-fits, the "intersection" tool's cursor snaps to the crossing, and the app's label reads "(3.333, 220)".
- **Colour roles (fixed for the whole video).** The variable n or h **amber** (`MATH_AMBER`); cost line and its values **violet** (`MATH_GRADIENT`, labelled "cost"); revenue line **blue** (`MATH_BLUE`); profit region and positive profit **teal** (`MATH_TEAL`); loss region and negative profit **grey** (`MATH_EXCLUDED`, labelled "loss" in words); Plan A **blue** and Plan B **violet** in scenes 6 and 7; the crossing ringed ink until it is answered, then **green**; mistake **red**, crossed slips only.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; app labels at least 32 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "same n", "starts higher", "climbs faster", "+$2 a cup", "gap closes", "break-even: C = R", "loss", "profit", "can't sell half", "check both", "A cheaper", "B cheaper", "exact: 10/3", "app: 3.333", "the decision is the answer", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w12's stall frame becomes the hook (1); the two lines from the stall (2); the selling day with the rider and regions (3); g01 board, break-even algebra (4); the profit counter (5); the electricians' two lines (6); the graphing app and the decision (7); framed memory card (8); question cards with pictures (9 to 12); the hammock handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 4 (lesson 19 `we-1`): 5n = 200 + 3n, n = 100; P = 2n − 200; P(250) = 300; crossed slip "break-even: $500" captioned "the question asks for cups". Scene 5 (lesson 19 `we-2`, corrected wording): 8n − 340 = 0 at n = 42.5; at least 43 items; crossed slip "42 items" captioned "P(42) = −4". Scenes 6 and 7 (lesson 18 `we-2`): 70 + 45h = 120 + 30h, h = 10/3 = 3 h 20 min, both $220; decision A under 3 h 20 min, B over; crossed slip "h = 3.33 h, done" captioned "say which plan". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Where the lines cross, the decision flips." with the key line "Set the models equal, solve, then say which side is better." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** On the selling day the stall is losing money for the first 99 cups even though every single cup makes $2 (scene 3): the grey loss gap shrinks by the same amount with every cup and closes exactly at 100. The fixed $200 is seen being paid back cup by cup.
- **Attempts (original; re-contexted from the pack where its context clashed).** A1 (pack question 1's numbers, two public pools instead of streaming services, which are laptop and phone contexts already used in Year 12): "Pool A charges $12 a month plus $2 per visit. Pool B charges $20 a month plus $1 per visit. For how many visits in a month do the two cost the same? Which pool is cheaper for 10 visits?" Answer 8 visits ($28 each); B ($30 against $32). Crossed: "A, because it starts lower". A2 (pack question 2): "A school band pays $360 to set up a T-shirt order. Each shirt costs $7 to make and sells for $15. Find the break-even number of shirts and the profit if 60 shirts are sold." Answer 45 shirts; $120. Crossed: "$900" (that is the revenue).
- **Mistake scene:** none separate. Giving the y-value when the question asks for x (4 crossed); rounding a break-even down (5 crossed); stopping at the number without the decision (7 crossed); "the cheaper start stays cheaper" (A1 crossed); revenue as profit (A2 crossed); the site's "$8 profit per item" (corrected in learner copy, 5).
- **Cause chain taught, in order:** (1) two quantities that depend on the same variable can be drawn on the same axes (2); (2) profit is revenue minus cost, the vertical gap between the lines (3); (3) each cup adds $5 of revenue and $3 of cost, so the gap changes by $2 a cup, and the fixed $200 is paid back after 100 cups (3); (4) at the crossing the two models give the same value, so solving C = R finds it (4); (5) on one side cost is higher (loss), on the other revenue is higher (profit), so the crossing is where the answer changes (3, 4); (6) a non-whole crossing means checking the whole numbers either side (5); (7) any two linear options compare the same way, and the crossing splits the choices into "A cheaper" and "B cheaper" (6, 7); (8) an app finds the crossing as a decimal; algebra gives it exactly (7).
- **Entry knowledge (route):** w12 (building linear models); Stage 5 (solving a pair of simultaneous linear equations by substitution or elimination).
- **Learner-visible vocabulary (plain meaning at first use):** cost (money spent: fixed amounts plus amounts per item, 2); revenue (money coming in from sales, 2); profit (revenue minus cost; negative profit is a loss, 3); break-even point (where cost equals revenue: no profit, no loss, 3); simultaneous equations (two equations that must both be true at once, 4).
- **Handoff (to w14, "Where are a function's zeros, and how does the discriminant place a parabola?").** Scene 13: the profit function's line P = 2n − 200 meeting the n axis at 100 (shown small at the top left with the tag "P = 0 at break-even"), and the painted hammock on its frame (`ma11-hammock-frame-high-v1.png`, w14's anchor) over a coded grass line, chips "Clears? Touches? Drags?", "Next: where is a function zero?" and "?". This is w14's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Stall: C = 200 + 3n; R = 5n; P = 2n − 200; break-even n = 100, C = R = 500; P(250) = 300; R(250) = 1250, C(250) = 950.
  (b) Workshop: P = 8n − 340 = 0 at n = 42.5; P(42) = −4; P(43) = 4.
  (c) Plans: 70 + 45h = 120 + 30h ⇔ 15h = 50 ⇔ h = 10/3 ≈ 3.333 = 3 h 20 min; both cost 220.
  (d) A1: 12 + 2v = 20 + v ⇔ v = 8; both $28; v = 10: A $32, B $30. A2: 15n = 360 + 7n ⇔ n = 45; P(60) = 900 − 780 = 120; R(60) = 900.
  (e) Pronunciations: "two hundred plus three n", "ten thirds", "three point three three three", "three hours twenty minutes", "forty-two point five". Voice-pilot item: none new.
  (f) Windows: stall plot n 0 to 260 (ticks 50), dollars 0 to 1,400 (ticks 200); plans plot h 0 to 6 (ticks 1), dollars 0 to 400 (ticks 50).

Main question: *A lemonade stall pays $200 for its site, then $3 a cup, and sells each cup for $5. When does it stop losing money? Where do two linear models meet, and what does the meeting point tell us to do?*
Entry knowledge (w12; Stage 5): building linear models; solving two linear equations by substitution or elimination.
Stops after: cost, revenue and break-even with whole-item rounding; a practical pair of lines solved algebraically, graphically and with an app, and a decision. No quadratic revenue.
Handoff: math-a11-w14: the profit is zero at break-even; a hammock that may clear, touch or drag on the grass (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): the variable amber; cost violet; revenue blue; profit teal; loss grey with the word "loss"; Plan A blue and Plan B violet; crossing ink, then green when answered; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: when does the stall stop losing?
> Here's that lemonade stall. Before a single cup is sold, it owes two hundred dollars for the site. Each cup costs three dollars to make, and sells for five. So early in the day, the stall is losing **money**. When does it stop losing, and how much does it make on a good day? That's two linear models, cost and revenue, and the point where they meet. So where do two linear models meet, and what does the meeting point **mean**?

Visual: opens on w12's final frame exactly (the painted stall `ma11-lemonade-stall-v1.png` at the left with the chips "$200 site fee" and "each cup: costs $3, sells for $5"; axes "cups sold n" and "dollars" at the right with two faint lines and the "?" ring; chip "Next: two models, one meeting point"). On the first sentence the "Next" chip fades and the heading writes on: "Where do two linear models meet, and what does it mean?". On "money" a small `LiveReadoutBoard` under the stall shows "cups 0", "money so far −$200" (grey, labelled "loss"), hand tag "behind before it opens". On "good day" the painted cup `ma11-lemonade-cup-v1.png` (120 px) slides off the counter once. On "meet" the "?" ring pulses. On "mean" the chip "Where do they meet? What does it mean?" moves to the top right as the scene question.

### 2. two models, one variable
> Let n be the number of cups sold. The cost is the fixed two hundred, plus three dollars a cup, so C equals two hundred plus three **n**. The revenue, the money coming in, is five dollars a cup, so R equals five **n**. Revenue isn't profit. It's all the money in, before any costs come out. Both use the same variable, n, so we can draw them on the same axes. Cost starts higher, but climbs more slowly. Revenue starts at zero, but climbs **faster**. So somewhere, revenue must catch up.

Visual: camera continue; the plot grows to 1,200 × 660 px (n 0 to 260, dollars 0 to 1,400), the stall (380 px) at the top left. A `ModelCard` (w12's part) at the left: the givens "$200 site fee" (teal), "$3 a cup", "$5 a cup". On "n" (first bold) "$200" and "$3" fly into "C = 200 + 3n" (violet, 52 px) and the cost line draws from (0, 200). On "n" (second bold) "$5" flies into "R = 5n" (blue) and the revenue line draws from (0, 0). On "Revenue isn't profit" a grey chip "revenue: all the money in; profit: what's left after costs". On "same variable" a hand tag "same n" with a bracket under the n axis. On "starts higher" a violet tag at (0, 200); on "faster" a blue slope triangle on the revenue line, hand tag "climbs faster". On the last sentence the two lines' crossing region glows faintly.

### 3. the selling day: profit is the gap
> Watch the stall sell. The gap between the lines is the profit, revenue minus cost. At first, revenue is below cost, so the profit is negative, a **loss**. Each cup brings in five dollars but costs three, so every cup closes the gap by two dollars. That's how the two hundred dollar site fee gets paid back, cup by cup. At one hundred cups, the gap closes **completely**. After that, revenue is above cost, and the stall makes a **profit**. The point where cost equals revenue is called the break-even point. No profit, and no loss.

Visual: camera continue; the selling day runs (simulation 1). The cup counter n climbs; painted cups slide off the stall into a coded tally; the vertical rider moves along both lines; `LiveReadoutBoard` (52 px): "cups n", "cost C", "revenue R", "profit R − C". On "loss" the gap behind the rider shades grey with the word "loss" (n = 20: C = 260, R = 100, profit −160). On "two dollars" the rider pauses at n = 50 and n = 51: the gap bracket shortens by a small "+$2" step, hand tag "+$2 a cup". On "paid back" the profit readout counts up from −200 in $2 steps (fast). On "completely" the rider reaches n = 100: both lines at 500, the gap a single point, readout "profit $0", the crossing ringed ink. On "profit" the rider continues to n = 250 and the gap shades teal with the word "profit", readout "profit $300". On "break-even point" a chip "break-even: C = R", hand tag "no profit, no loss".

### 4. worked example: break-even by algebra
> Graphs show it, and algebra pins it down exactly. At break-even, cost equals revenue, so five n equals two hundred plus three **n**. Take three n from both sides: two n equals two hundred, so n is one **hundred**. At a hundred cups, both lines are at five hundred dollars. Profit is revenue minus cost, so P equals two n minus two hundred. On a good day of two hundred and fifty cups, that's five hundred minus two hundred, a profit of three hundred **dollars**. So, in context: the stall needs to sell more than a hundred cups to make a profit. Five hundred dollars isn't the break-even answer. That's the money at break-even, and the question asks for **cups**.

Visual: clear change to the g01 board, with the stall plot small at the right (600 × 420 px). Task strip, 44 px: "A stall pays $200 for its site and $3 per cup, and sells each cup for $5. Find the break-even number of cups and the profit on 250 cups." (site lesson 19 `we-1`, re-contexted from drinks to cups of lemonade). Givens card: "C = 200 + 3n" (violet), "R = 5n" (blue). Equation strip, 44 px: "break-even: C = R". Rows, 52 px, one at a time: on "n" "5n = 200 + 3n"; "2n = 200"; on "hundred" "n = 100", the crossing turning green on the small plot. Side row: "C(100) = R(100) = 500". On "Profit is" "P = R − C = 5n − (200 + 3n) = 2n − 200" (teal). On "dollars" "P(250) = 2(250) − 200 = 300", framed answer (green): "Break-even at 100 cups; $300 profit on 250 cups". On "in context" the decision line "Sell more than 100 cups to make a profit.", hand tag "the decision is the answer". On "cups" a red slip "break-even: $500" writes and is crossed, caption "the question asks for cups".

### 5. when break-even isn't whole
> Break-even doesn't always land on a whole number. A workshop has fixed costs of three hundred and forty dollars, and makes eight dollars on each item, after that item's own costs. So its profit is eight n minus three hundred and forty. Break-even is where eight n equals three hundred and forty, at forty-two point **five**. You can't sell half an item. At forty-two items, the profit is minus four dollars, still a **loss**. At forty-three, it's plus four. So the workshop must sell at least forty-three items to make a profit. Rounding down to forty-two is the classic **slip**.

Visual: clear change to the g01 board (new case) with the profit counter at the right (simulation 2). Task strip: "A workshop has fixed costs of $340 and makes $8 on each item after that item's own costs. How many items must it sell to make a profit?" (site lesson 19 `we-2`, wording corrected per S11-04). Givens card: "fixed $340" (teal), "$8 per item after its own costs". Row, 52 px: "P = 8n − 340". On "five" "8n = 340, n = 42.5", hand tag "can't sell half". The profit counter (a vertical `SignedBar` around a zero line, 52 px readout) steps n = 40, 41, 42 (−$20, −$12, −$4, grey, "loss"); on "loss" n = 42 holds at "−$4"; on "plus four" n = 43 jumps above the line to "+$4" (teal, "profit"), hand tag "check both". Framed answer (green): "at least 43 items". On "slip" a red slip "42 items" writes and is crossed, caption "P(42) = −$4".

### 6. any two linear options
> The same method compares any two linear options. Two electricians quote for a job. Plan A is seventy dollars, plus forty-five an hour. Plan B is a hundred and twenty, plus thirty an hour. A fixed charge plus an hourly rate is a straight line, just like the stall's cost. When do they cost the **same**? Set them equal: seventy plus forty-five h equals a hundred and twenty plus thirty h. So fifteen h equals fifty, and h is ten thirds. That's three and a third hours, or three hours twenty **minutes**. On a graph you can see it too. Plan A starts lower, but rises faster, and the lines cross at about three point three. By hand, a graph gives an estimate. The algebra gives the exact **value**.

Visual: clear change. Left: the painted van `ma11-trade-van-v1.png` (about 420 px, solid) above two plan chips: "Plan A: $70 + $45/h" (blue) and "Plan B: $120 + $30/h" (violet). Right: a g01 strip and a plot (h 0 to 6, dollars 0 to 400; 760 × 520 px). Task strip: "Plan A costs $70 plus $45 per hour; Plan B costs $120 plus $30 per hour. Find when they cost the same and advise which to choose." (site lesson 18 `we-2`). On "straight line" both plan chips gain small line icons, hand tag "fixed + rate: a line". On "same" the row "70 + 45h = 120 + 30h" (52 px). Rows: "15h = 50"; "h = 10/3"; on "minutes" "= 3⅓ h = 3 h 20 min". On "graph" both lines draw from their intercepts (70 and 120), hand tags "starts lower" (A) and "rises faster" (A); a coded pencil reads the crossing off the grid with a dashed guide to the h axis, tag "≈ 3.3 by eye". On "value" the exact chip "h = 10/3 exactly" sits beside the estimate, hand tag "exact: 10/3".

### 7. with a graphing app, and the decision
> You can also solve it with a graphing app. Type in both lines, and use the intersection tool. It reports three point three three three, two hundred and **twenty**. So at three hours twenty minutes, both plans cost two hundred and twenty dollars. But the number isn't the answer on its own. The decision is. For jobs shorter than three hours twenty minutes, Plan A is cheaper, so choose A. For longer jobs, Plan B is cheaper, so choose **B**. Stopping at three point three three hours would leave the question **unanswered**.

Visual: camera continue; the plot slides into a coded unbranded `ScreenApp` window (about 1,000 × 640 px, title bar "graphing app", simulation 3): the two equations type into its input list ("y = 70 + 45x", "y = 120 + 30x"), the window auto-fits, the "intersection" tool's cursor snaps to the crossing and on "twenty" the app's label reads "(3.333, 220)", hand tag "app: 3.333". Beside the window, rows (52 px): "both cost $220 at 3 h 20 min"; check "70 + 45(10/3) = 220 ✓". On "The decision is" the regions left and right of the crossing shade: "A cheaper" (blue tint) to the left, "B cheaper" (violet tint) to the right, with a vertical dashed line at h = 10/3. On "B" the framed answer (green): "Under 3 h 20 min: choose A. Over 3 h 20 min: choose B." On "unanswered" a red slip "h = 3.33 hours" writes and is crossed, caption "say which plan".

### 8. memory aid
> Here's the idea to keep. Where the lines cross, the decision flips. Set the models equal to find the crossing, solve, then say which side is better, in words, with whole numbers checked when you need **them**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the stall (220 px) above a mini graph of two crossing lines with "loss" grey and "profit" teal either side. Main line, hand font 60 px: "Where the lines cross, the decision flips." On "them" the key line, 40 px: "Set the models equal, solve, then say which side is better." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Pool A charges twelve dollars a month, plus two dollars a visit. Pool B charges twenty dollars a month, plus one dollar a visit. For how many visits in a month do they cost the same? And which pool is cheaper for ten visits? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Pool A charges $12 a month plus $2 per visit. Pool B charges $20 a month plus $1 per visit. For how many visits in a month do the two cost the same? Which pool is cheaper for 10 visits?" The full question stays on screen. Picture slot: the painted swimming goggles `ma11-swim-goggles-v1.png` (about 320 px wide). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Set them equal: twelve plus two v equals twenty plus **v**. So v is eight, and at eight visits both cost twenty-eight **dollars**. For ten visits, A costs thirty-two and B costs thirty, so B is **cheaper**. Picking A because it starts lower is wrong. After eight visits, A's steeper line is on **top**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "A: $12 + $2 per visit" (blue), "B: $20 + $1 per visit" (violet), "10 visits" (underlined as used). On "v" (first bold) the row "12 + 2v = 20 + v". On "dollars" "v = 8; both $28", the crossing on a small plot (v 0 to 12) turning green. On "cheaper" "A(10) = $32, B(10) = $30", framed answer (green): "8 visits; B is cheaper for 10". On "top" a red slip "A, because it starts lower" writes and is crossed, with the plot's lines past v = 8 ringed (hand caption "after 8, A is above"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A school band pays three hundred and sixty dollars to set up a T-shirt order. Each shirt costs seven dollars to make, and sells for fifteen. Find the break-even number of shirts, and the profit if sixty shirts are sold. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A school band pays $360 to set up a T-shirt order. Each shirt costs $7 to make and sells for $15. Find the break-even number of shirts and the profit if 60 shirts are sold." The full question stays on screen. Picture slot: the painted plain T-shirt `ma11-tshirt-v1.png` (about 300 px wide). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Revenue is fifteen n, and cost is three hundred and sixty plus seven n. At break-even they're equal, so eight n equals three hundred and sixty, and n is forty-**five** shirts. Profit is eight n minus three hundred and sixty. At sixty shirts, that's a hundred and twenty **dollars**. Nine hundred dollars is wrong. That's the revenue, before the costs are taken **off**.

Visual: the card shrinks to the top. `GivensStrip`: "$360 set-up" (teal), "$7 to make" (violet), "$15 each" (blue), "60 sold" (underlined as used). Rows, 52 px: "15n = 360 + 7n"; on "five" "8n = 360, n = 45". On "Profit is" "P = 8n − 360"; on "dollars" "P(60) = 480 − 360 = 120", framed answer (green): "45 shirts; $120 profit". On "off" a red slip "$900" writes and is crossed (hand caption "that's R(60), the revenue"). Hold about 1 s.

### 13. handoff
> So two linear models meet where their equations are equal, and that crossing is where the decision changes. Notice something about the stall's profit, two n minus two hundred. It was zero exactly at break-even. Values where a function equals zero deserve a name, and that's next, on a curve. A hammock hangs from a frame. Does it clear the grass, just touch it, or **drag**?

Visual: the memory line shows small at the top (30 px), then fades on "Notice". The profit line P = 2n − 200 (teal above the axis, grey below) draws on small axes at the top left (520 × 300 px); on "zero exactly" its crossing with the n axis at 100 is ringed, hand tag "P = 0 at break-even". Board clears to the right: the painted hammock on its frame `ma11-hammock-frame-high-v1.png` (about 1,000 px wide, solid; w14's anchor) over a coded grass line (the reused grass strip `ma12-cricket-grass-strip-v1.png` tiled under it). On "drag" three small chips "clears?", "touches?", "drags?". Chips "Next: where is a function zero?" and "?". Hold about 2 s. This is w14's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Two models, same variable: set them equal.
- Break-even: cost = revenue. Profit P = R − C.
- Graph: the lines cross. App: intersection tool.
- Whole items: check both sides of the crossing.
- Finish with the decision, in words.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Where the lines cross, the decision flips.* Key: *Set the models equal, solve, then say which side is better.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the small profit line ringed at 100, the hammock on its frame over the grass, the three chips, "Next: where is a function zero?" and "?"). This is the final frame and w14's opening frame.

## Teaching checks

- **Does it explain causes?** Why the stall starts with a loss: the $200 is paid before any sale (1, 3). Why the gap closes by $2 a cup: $5 in, $3 out (3). Why break-even solves C = R: the two models give the same value there (4). Why profit is P = 2n − 200 (4). Why round up to 43: P(42) < 0 < P(43) (5). Why A is cheaper at first and B later: A starts lower but rises faster (6). Why compare the app and the algebra: the app gives a decimal, the algebra the exact value (7). Why the decision is the answer: the question asks which plan (7).
- **Misconceptions addressed:** the y-value as the answer (4 crossed); rounding break-even down (5 crossed); the number without the decision (7 crossed); "a cheaper start stays cheaper" (A1 crossed); revenue as profit (A2 crossed); "$8 profit per item" (5, corrected wording).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted stall from the first seconds, returning in 2, 3, 8 and 13; 2 a new stage every 30 to 60 s; 3 the selling day with the rider, the four readouts and the shading regions, the profit counter crossing zero, the app's intersection tool; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 6, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the loss gap shrinking $2 at a time to nothing at 100.
- **One idea at a time:** models (2), gap (3), algebra (4), rounding (5), any pair (6), app and decision (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 23 s and 28 s.
- **Avoided double teaching:** Stage 5 simultaneous-equation methods are used (equating two expressions for the same quantity) without re-teaching substitution and elimination; w12's model building is used.
- **Syllabus coverage:** `ci83587815` (6, 7; A1; key notes 1, 3, 5): algebraically (6), graphically by hand (6), with an app (7), without (6), decision (7). `cicb50e7a8` (2 to 5; A2; key notes 2, 4, 5).
- **Out of scope by design:** quadratic revenue (w19); line and curve intersections.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Pool A charges $12 a month plus $2 per visit. Pool B charges $20 a month plus $1 per visit. For how many visits in a month do the two cost the same? Which pool is cheaper for 10 visits?"
Model answer: 12 + 2v = 20 + v, so v = 8; both cost $28. For 10 visits, A costs $32 and B costs $30, so B is cheaper. Classic mistake (crossed): "A, because it starts lower".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "A school band pays $360 to set up a T-shirt order. Each shirt costs $7 to make and sells for $15. Find the break-even number of shirts and the profit if 60 shirts are sold."
Model answer: R = 15n, C = 360 + 7n. Break-even: 15n = 360 + 7n, so 8n = 360 and n = 45 shirts. P = 8n − 360; P(60) = 480 − 360 = $120. Classic mistake (crossed): "$900" (the revenue).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Stall (site lesson 19 `we-1`) | C = 200 + 3n; R = 5n; n = 100; C = R = 500; P = 2n − 200; P(250) = 300 | 1 to 4, 13 |
| Selling day readouts | n = 20: C 260, R 100, profit −160; n = 250: C 950, R 1,250, profit 300 | 3 |
| Workshop (site lesson 19 `we-2`) | P = 8n − 340; n = 42.5; P(40) −20, P(41) −12, P(42) −4, P(43) 4, P(44) 12 | 5 |
| Plans (site lesson 18 `we-2`) | 70 + 45h = 120 + 30h; h = 10/3 ≈ 3.333 = 3 h 20 min; both 220 | 6, 7 |
| A1 | v = 8; $28; A(10) = 32, B(10) = 30 | 9, 10 |
| A2 | n = 45; P(60) = 120; R(60) = 900 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w08w14/verify.py`); Codex to re-check.

- 5n = 200 + 3n ⇔ n = 100; 5(100) = 500 = 200 + 300; 2(250) − 200 = 300; 200 + 3(20) = 260; 5(20) = 100; 200 + 3(250) = 950; 5(250) = 1250.
- 340/8 = 42.5; 8n − 340 at 40 to 44: −20, −12, −4, 4, 12.
- 70 + 45h = 120 + 30h ⇔ h = 10/3; 70 + 45(10/3) = 220 = 120 + 30(10/3); 10/3 h = 3 h 20 min.
- 12 + 2v = 20 + v ⇔ v = 8; 12 + 16 = 28; 12 + 20 = 32; 20 + 10 = 30.
- 15n = 360 + 7n ⇔ n = 45; 15(60) − (360 + 7(60)) = 120; 15(60) = 900.

## Memory aid check

- **"Where the lines cross, the decision flips."** Original. Meaning, as said in scene 8: for two linear options, the crossing is where one stops being better and the other starts, so the answer to a "which" question changes there. Assumptions checked: true for two lines with different gradients (a unique crossing; on each side one line is above the other); parallel lines never cross and one option is always better (not shown; a grey note in the error check). It helps a new case: any two plans with different rates. Introduced after the causes in 3 and 7.
- **Considered, not used:** "Cost meets revenue: break even" (true, but only for one kind of pair).

## Narration length estimate

Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,624 characters**, 14 scene headings. Characters per scene (1 to 14): 420, 474, 519, 647, 568, 683, 512, 205, 257, 286, 251, 357, 370, 75.

At 13.3 characters per second the speech is about 423 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the line draws (2), the selling day (3), the profit counter (5), the hand-read graph (6) and the app (7) about 23 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 511 s (8 min 31 s)**, inside the 5,500 to 6,800 character band and about 59 s under the 570 s cap.

Reserve trim, if the voiced takes run long: scene 2's "So somewhere, revenue must catch up." (keep the glow). A second trim would take the count below the 5,500 floor, and the video sits about 59 s under the cap.

## Scene list and build ids

Lesson key `m-a11w13` (route math-a11-w13). Explainer folder `src/explainer/lessons/math-a11-w13`; build inputs in `docs/production/claude-pm/lessons/math-a11-w13/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-stall, two-models, selling-day, worked-break-even, non-whole-break-even, two-plans, graphing-app-decision, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 34 s | 1 | w12's stall frame; the loss readout |
| 34 to 72 s | 2 | The two lines drawing from the stall's amounts |
| 72 to 117 s | 3 | The selling day: rider, readouts, loss and profit regions |
| 117 to 168 s | 4 | g01 board: break-even by algebra, profit on 250 cups |
| 168 to 214 s | 5 | g01 board with the profit counter crossing zero |
| 214 to 268 s | 6 | The van and the two plans; algebra and a hand-read graph |
| 268 to 310 s | 7 | The graphing app's intersection tool; the decision regions |
| 310 to 328 s | 8 | Framed memory card |
| 328 to 436 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 436 to 466 s | 13 | The profit line's zero; the hammock on its frame |
| 466 to 511 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w12's last frame continues into scene 1 (camera continue); 1 to 2 to 3 camera continue (same axes); 3 to 4 clear change (the board opens); 4 to 5 clear change (new case); 5 to 6 clear change (new context); 6 to 7 camera continue (the plot slides into the app); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w13-learning-review.md`, `science_check` = `checks/m-a11w13-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only, by file name): `maths/ma12-delivery-van-v1.png` (s05's parcel van; a different meaning, so not reused for the electricians), `maths/ma12-graphing-calculator-v1.png` (s10's anchor; the app here is a coded window instead), `chemistry/m6-lemon-v1.png` (a chemistry lemon; not a stall), `biology/m7-sim-cup-clear-v1.png` (a plastic sample cup). No stall, lemonade cup, tradie's van, goggles or T-shirt plate exists.

Need (painted, new; see the Codex asset brief): `ma11-lemonade-stall-v1.png` (also w12's handoff), `ma11-lemonade-cup-v1.png`, `ma11-trade-van-v1.png`, `ma11-swim-goggles-v1.png`, `ma11-tshirt-v1.png`, and `ma11-hammock-frame-high-v1.png` (scene 13; w14's anchor, briefed in w14; it must be painted before this build). Reused: `maths/ma12-cricket-grass-strip-v1.png` (tileable mown grass, as a lawn).

Coded (studio kit): the plots, lines, rider, shaded regions, readouts, the profit bar, the app window, the tally, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `StudioPlot`, `LinkedRiders` (the vertical profit rider on two lines), `SignedBar`, `ScreenApp` (graph mode, unbranded), `ModelCard` (from w12), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (kit-needs row w13):
1. **`RegionLabels`** (new; reused by w19): the region between two lines shaded in one role colour where line 1 is above and another where line 2 is above, with word labels that switch at the computed intersection, and a `drawWithRider` mode (the shading follows a rider's x). Props: `f1`, `f2`, `labels` ({above1, above2}), `roles`, `xFrom`, `xTo`, `riderX`. Check: the switch x equals the solved intersection to 1e-9 (100 for the stall; 10/3 for the plans; 8 for A1).
2. **`ScreenApp` intersection tool** (small extension of graph mode): typed equations, auto-fit window, a cursor that snaps to the computed intersection and labels it with the app's 3-decimal rounding. Check: (10/3, 220) shows as "(3.333, 220)".

## Codex asset brief (Maths A11 W13, a market lemonade stall; also w12's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w13.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w12 build (w12's final frame uses plate 1). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-food-tin-v1.png` and `maths/ma12-travel-suitcase-v1.png`; at least 8 per cent clear margin; no text, signs, price boards with numbers, logos, brand names, people, hands, faces, glow or backdrop. Never stretch to fit; keep the native aspect ratio.

1. `ma11-lemonade-stall-v1.png` (2000 × 1600 px): a small weekend-market stall seen from the front at a slight angle: a folding table with a striped yellow and white canopy on four poles, a large glass drink dispenser of lemonade with a tap, a basket of lemons, and a neat stack of paper cups at the front right of the counter. **The stall's front banner is blank** (no words). No stallholder or customers. Codex reports the counter's top edge (y) and the cup stack's position in `ma11-lemonade-stall-v1.json`.
2. `ma11-lemonade-cup-v1.png` (500 × 600 px): one paper cup of lemonade with a lemon slice on the rim, side view, plain cup.
3. `ma11-trade-van-v1.png` (2000 × 1000 px): a plain white tradie's van seen side-on, a ladder on the roof rack, **no lettering, phone number or logo**, tinted windows with no one visible.
4. `ma11-swim-goggles-v1.png` (1000 × 600 px): one pair of blue swimming goggles with a clear strap, seen from the front, no brand.
5. `ma11-tshirt-v1.png` (1000 × 1000 px): one plain crew-neck T-shirt laid flat, deep blue, **no print or text**.

Report inspection on the paper background (`#f6f1e7`) at the sizes used in the design (stall 380 and 640 px, cup 120 px, van 420 px, goggles 320 px, T-shirt 300 px) and the alpha checks.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "every cup closes the gap by two dollars" (3); "the point where cost equals revenue is called the break-even point" (3); "a graph gives an estimate; the algebra gives the exact value" (6); "where the lines cross, the decision flips" (8; lines with different gradients); "after eight visits, A's steeper line is on top" (10).
4. Confirm the site examples keep their numbers and answers, and that the workshop wording follows S11-04 ("$8 on each item after that item's own costs"), not the site's "profit per item".
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a line, crossing or answer.
6. Confirm the opening matches w12's final frame and scene 13's frame is w14's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, text, prices or brands, and that the app window is unbranded.

## YouTube metadata (draft)

Title: Break-Even and Simultaneous Linear Models: Where Lines Meet | Year 11 Maths Advanced

(Title length: 85 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson19.sa.html

A lemonade stall pays $200 for its market site, spends $3 on each cup and sells it for $5. Draw cost and revenue on the same axes, watch the loss gap close by $2 with every cup, and find the break-even point where cost equals revenue, by graph and by algebra. See what to do when break-even is not a whole number, then compare two electricians' plans algebraically, by hand on a graph and with a graphing app's intersection tool, and turn the crossing into a decision. A memory aid: where the lines cross, the decision flips. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve practical problems involving a pair of simultaneous linear equations both algebraically and graphically, with and without graphing applications, and justify conclusions in the context of the problem"
"Construct and use simultaneous equations to model and solve a problem where cost and revenue are represented by linear equations, identify and analyse the break-even point, and justify conclusions in the context of the problem"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: building linear models; solving simultaneous equations (Year 10). Next: Zeros of functions and the discriminant.

#Year11Maths #MathsAdvanced #BreakEven #HSCScience

## Open decisions

- **1. Electricians kept in their own context (root).** The plans example keeps the site's electricians (a worked example, not an anchor) because the app demonstration needs a non-whole crossing, and re-contexting it into the stall would crowd one context with three examples. Root confirms.
- **2. Stage 5 methods (learning review).** The video equates two expressions for the same quantity and does not show elimination. The reviewer checks that this is enough for students who learned elimination first, given the route's Stage 5 entry.
- **3. Site link (root).** The description links lesson 19 (the stall's numbers and the workshop); lesson 18 is the source of the plans. Both `.sa.html` (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w12 and Stage 5; check that the gap reads as profit before the word "break-even"; that the $2-a-cup closing is visible at speed; that the 42 and 43 check is the reason for rounding up; that the app is shown doing the task, not just named; that the decision is said in words; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The selling day, the profit counter and the app's tool carry the explanation; judge them at playback speed, not from stills. Every readout, region switch and app label must be computed from the same model functions as the displayed equations.
