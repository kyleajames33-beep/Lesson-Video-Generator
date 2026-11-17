# Maths S12 A04a: Where is the break-even point, and what does it say about profit and loss? Fixed and variable cost, revenue, cost equals revenue, rounding up to the first profit, and profit or loss at any number (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`; ruling 8 splits the outline's a04 into a04a, break-even, profit and loss, and a04b, break-even in a spreadsheet). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,934 characters by script (see "Narration length estimate"), 14 scene headings, about 535 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifth video of Year 12 Mathematics Standard (2024), outline playlist order 4 (first half, root ruling 8), Algebraic relationships. Shared by Standard 1 and Standard 2: both courses have the break-even point; Standard 1 reads it from the graph and checks whole numbers by substituting, and the algebra is labelled "Standard 2" beside the graph (root ruling 9). Pre-design pack: `../pre-design/maths-standard/math-s12-a04.md` (the "a04a" half of its suggested split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/algebraic-relationships/lesson02.sa.html` (SHA256 `779d05e6c788c6a7e3bdb540129e1209467a8d4f143da218463f9865f601691f`; card 04's key terms, card 06's break-even analysis and the revisit card's "gap between selling price and variable cost" idea; `we-2`, the market stall, with the site's numbers). Route entry: `math-s12-a04` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; one new painted plate (a mowing trailer); every graph, number line and board coded.

Owner rules applied: as a01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, every step said in words before its symbols, a short "why this matters", g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (work: a weekend lawn-mowing round), Australian spelling, no em dashes, money and decimals spoken naturally, conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Algebraic relationships, Simultaneous linear equations), quoted from `../../programme/maths-standard-route-inputs-1.json`:

Standard 2:
- `ci7ff6c8c4`: "Use simultaneous equations to model and analyse the break-even point where cost and revenue are represented by linear equations"
- `ciaa0d09e2`: "Identify the break-even point and solve problems involving profit and loss using a spreadsheet" (the profit-and-loss half here, by graph and algebra; the spreadsheet is a04b)

Standard 1:
- `cic9643bd9`: "Use simultaneous equations to model and analyse the break-even point of a problem where cost and revenue are represented by linear equations"
- `ci8b3fb7f8`: "Identify the break-even point and solve problems involving profit and loss by using a spreadsheet to model the problem" (profit and loss here; the spreadsheet is a04b)

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

**Boundary:** starts from a03's final frame exactly (the painted trailer `ms12-mower-trailer-v1.png` with the card "costs $150 a week to run", "$6 of fuel a lawn", "charges $45 a lawn"; axes n 0 to 8 and $0 to $400 with the "cost" line (violet) and the "takings" line (teal), their crossing ringed amber with "?"; chips "where does it stop losing money?", "Next: break-even", "?"). Recalls a03 (two facts, two equations; interpreting a crossing), a02a (setting two expressions equal, Standard 2) and Year 11 (a linear model's intercept and gradient; profit and loss) in a phrase or grey chip each. Teaches: fixed cost (the cost line's starting value), variable cost (its gradient) and revenue (starting at zero); C = fixed + variable × n and R = price × n; the break-even point where C = R and profit is zero, read from the graph (both courses) and found by algebra (Standard 2); why each item closes the gap by price minus variable cost; rounding a non-whole break-even up to the first profitable whole number; profit = R − C at any number, negative meaning a loss; site `we-2`. Stops at break-even by graph and algebra. Not taught: spreadsheets (a04b); non-linear profit (a11a, a11b).

## Decisions

- **Anchor: a weekend lawn-mowing round (painted plate, live).** Fixed costs $150 a week (trailer hire, insurance and a phone), $6 of fuel and trimmer line a lawn, $45 charged a lawn: C = 150 + 6n, R = 45n, break-even at n = 150/39 ≈ 3.85, so 4 lawns (3 lawns lose $33, 4 make $6). A job a Year 12 student could run, with a break-even that is not whole, so rounding up is needed from the start. Work; the pack's question 1 context, moved into the teaching (numbers SymPy-checked); no name, no person. Plate: a box trailer carrying a push mower, a line trimmer and a fuel can.
- **Worked example: the site's market stall (`we-2`).** C = 180 + 4n, R = 10n, break-even 30 items at $300, profit $120 at 50 items: a whole-number break-even beside the anchor's non-whole one.
- **Site corrections (pack section 8; `../site-corrections-maths-standard.md` MS-04, MS-05).** The site's food stall (hook and card 06) is not used: its hook omits the $2 variable cost (MS-04), and its "$536 dollar value" is the revenue at 67 items, not at break-even (MS-05). Nothing in this design calls a first-profit revenue "the break-even value".
- **Join.** Scene 1 opens on a03's final frame exactly; the trailer plate is solid from the first frame.
- **Standard 1 completeness.** Break-even is read from the graph (the crossing between 3 and 4) and confirmed by substituting 3 and 4 lawns, which needs no algebra method. The algebra row (scene 4) sits in a panel labelled "Standard 2"; its reason ("$39 a lawn") is spoken for everyone because it explains the gap closing.
- **Simulations (standard item 3).**
  1. **Break-even rider** (scene 3; `LinkedRiders` with shaded loss and profit regions as specified in math-a11-w13, `LiveReadoutBoard` and `SignedBar`): a vertical rider sweeps n from 0 to 8; readouts "lawns n", "cost $", "revenue $" and "profit $"; the gap between the lines shades grey (loss) left of the crossing and teal (profit) right of it; the `SignedBar` profit counter climbs from −$150 through $0 at n ≈ 3.85.
  2. **Gap steps** (scene 4): at each whole lawn a teal bracket "+$39" stacks against the $150 fixed-cost bar, filling it after 3.85 brackets (three full, the fourth part-way).
  3. **Rounding strip** (scene 5; `IntervalPicture`): a number line from 2 to 5 with 3 (loss $33, grey), 3.85 (break-even, amber) and 4 (profit $6, teal); a slider snaps to whole numbers only.
- **Colour roles (fixed for a04a and a04b).** Cost **violet**; revenue **teal**; profit region teal-tinted, loss region grey; the break-even point **amber**; answer **green**; mistake **red**, crossed slips only. The "Standard 2" algebra panel has a grey header tab.
- **Large type, handwritten voice.** As a01. Hand tags: "paid even at 0 lawns", "per lawn", "starts at 0", "loss", "profit", "break-even: profit 0", "$45 in, $6 out", "$39 a lawn pays it back", "can't mow 0.85 of a lawn", "round UP", "still a loss", "R − C", "below the line: loss", "customers pay revenue". At most two live at once.
- **Stage changes (standard item 2).** a03's frame and the trailer (1); the cost and revenue lines with their parts named (2); the rider and shading (3); the Standard 2 panel and gap steps (4); the rounding strip (5); profit and loss at two numbers (6); g01 board for `we-2` (7); framed card (8); question cards (9 to 12); the formal and the empty spreadsheet for a04b (13); key notes (14).
- **Worked example (g01 layout).** Scene 7: site `we-2`; crossed slip "R = 180 + 10n" (caption "revenue is only what customers pay"). The anchor's rounding carries its own crossed slip in scene 5 ("3 lawns", caption "still a loss").
- **Memory aid.** Framed card: "Break-even: cost = revenue, profit = 0." Key line: "Below it, a loss. Above it, a profit. Not whole? Round up."
- **Visual surprise.** The profit counter (`SignedBar`) passes $0 at the instant the rider crosses the lines' meeting point, and the shading flips from grey to teal there (scene 3).
- **Plain meanings at first use.** Fixed cost ("what you pay no matter how many you make or sell"); variable cost ("what each extra one adds to the cost"); revenue ("the money coming in from customers"); profit ("revenue minus cost"); loss ("a negative profit"); break-even point ("where cost equals revenue, so the profit is zero").
- **Attempts (original, HSC style).** A1 (the pack's anchor 3, a car-detailing van, original numbers): $420 a week, $15 a car, $90 a detail: C = 420 + 15n, R = 90n, 75n = 420, n = 5.6, so 6 cars; crossed "5 cars" (caption "5.6 rounds up: 5 is still a loss of $45"). A2 (original, graph supplied for Standard 1): T-shirt printing, C = 300 + 10n, R = 25n; break-even (20, 500); at 12 shirts a loss of $120; crossed "profit of $120" (caption "12 is below break-even").
- **Mistake scene:** none separate. Rounding down (5 crossed, A1 crossed); fixed cost in revenue (7 crossed); profit read as revenue (6, said); a loss called a profit (A2 crossed).
- **Cause chain taught, in order:** (1) the fixed cost is paid at zero lawns, so the cost line starts there, and each lawn adds the variable cost, its gradient (2); (2) revenue starts at zero and rises by the price, which is steeper than cost, so it catches up (2, 3); (3) where the lines cross, cost equals revenue, so profit is zero: break-even (3); (4) each lawn brings in $45 and uses $6, so it pays back $39 of the fixed cost, and 150 ÷ 39 lawns pay it all (4); (5) you can't sell part of an item, and the whole number below break-even still loses money, so round up (5); (6) profit is revenue minus cost, so its sign says profit or loss, which the graph shows as the gap above or below (6).
- **Entry knowledge (route):** a03 (two facts, two equations; a crossing in context); a02a (setting two expressions equal; Standard 2); Year 11 Standard l03 (a linear model's starting value and rate) and m01 (profit and loss). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-a04b, "How do we find break-even, and profit or loss, in a spreadsheet?").** Scene 13: the painted formal table `ms12-formal-table-v1.png` (a04b's plate; about 760 px wide) at the left, with a coded card, 40 px: "venue and DJ: $6,500", "catering: $85 a guest", "tickets: $130 each"; at the right an empty coded spreadsheet (`SpreadsheetGrid`, 1,000 × 560 px): column letters A to D, row numbers 1 to 7, every cell blank, the formula bar empty, the cursor on cell A1; chips "how many tickets?", "Next: break-even in a spreadsheet" and "?". No value or formula is written. This is a04b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Mowing: C = 150 + 6n; R = 45n; 39n = 150; n = 50/13 ≈ 3.846. P(n) = 39n − 150: P(0) = −150, P(2) = −72, P(3) = −33, P(4) = 6, P(10) = 240. R(10) = 450, C(10) = 210; R(2) = 90, C(2) = 162; R(3) = 135, C(3) = 168; R(4) = 180, C(4) = 174.
  (b) `we-2`: C = 180 + 4n; R = 10n; 6n = 180; n = 30; C = R = 300; at 50: R = 500, C = 380, P = 120.
  (c) A1: 75n = 420, n = 28/5 = 5.6; P(5) = 450 − 495 = −45; P(6) = 540 − 510 = 30. A2: 15n = 300, n = 20, $500; at 12: R = 300, C = 420, P = −120.
  (d) The revenue at the exact break-even (150/39 lawns) is about $173.08; not used (MS-05's point: do not label a first-profit revenue as break-even).
  (e) Pronunciations: "C equals a hundred and fifty plus six n"; "three point eight five"; "minus seventy-two".
  (f) Windows: mowing n 0 to 8, $0 to $400, grid every lawn and $50; `we-2` n 0 to 60, $0 to $600, grid every 10 items and $50; A2 n 0 to 30, $0 to $800, grid every 2 shirts and $50.

Main question: *A mowing round costs $150 a week to run, $6 a lawn, and earns $45 a lawn. Where is the break-even point, and what does it say about profit and loss?*
Entry knowledge (a03; Standard 2 also a02a; Year 11 Standard l03, m01): two facts, two equations; a crossing in context; intercept and gradient as start and rate; profit and loss.
Stops after: C and R, break-even by graph and algebra, rounding up, profit or loss at any number. No spreadsheet, no non-linear profit.
Handoff: math-s12-a04b: "a school formal: venue, catering and ticket price, and an empty spreadsheet."

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): cost violet; revenue teal; profit teal-tinted, loss grey; break-even amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: when does it pay?
> Here's the lawn-mowing round. Hiring the trailer, the insurance and a phone cost a hundred and fifty dollars a week, even before the first lawn. Each lawn then uses six dollars of fuel and trimmer line, and each lawn earns forty-five dollars. Mow no lawns, and the week loses a hundred and fifty dollars. Mow lots, and it makes money. Somewhere in between, it exactly breaks **even**. Any small business, from a market stall to a food van, needs to know that number before it starts. So where is the break-even point, and what does it say about profit and **loss**?

Visual: opens on a03's final frame exactly (the trailer plate with its card, the axes with the "cost" and "takings" lines, the crossing ringed with "?", chips). On the first sentence the "Next" chip fades and the plate grows to about 1,000 px at the left. On "a hundred and fifty dollars a week" the card's first line pulses; on "six dollars" and "forty-five dollars" the next two. On "Mow no lawns" the point (0, 150) on the cost line rings with a grey tag "−$150"; on "Mow lots" the region far right of the crossing tints teal. On "even" the amber "?" ring pulses, hand tag "break even?". On "loss" heading "Break-even, profit and loss" writes on, and the question chip "When does it pay?" moves to the top right.

### 2. cost and revenue
> First, some names. The fixed cost is what you pay no matter how many lawns you mow. Here it's a hundred and fifty dollars. The variable cost is what each extra lawn adds, six dollars. So for n lawns, the cost is C equals a hundred and fifty plus six **n**. Revenue is the money coming in from customers. Each lawn brings in forty-five dollars, so R equals forty-five **n**. On the graph, the cost line starts at a hundred and fifty, because that's paid even at zero lawns, and it rises gently, six dollars a lawn. The revenue line starts at zero, because no lawns means no money, and it rises steeply, forty-five dollars a **lawn**.

Visual: stage change: the plate shrinks to a 300 px badge at the top left; large axes (1,250 × 700 px), n 0 to 8 ("lawns"), $0 to $400, grid every lawn and $50. Definitions card at the left, 44 px, writing as spoken: "fixed cost: paid no matter what" ("$150"), "variable cost: added by each one" ("$6 a lawn"). On "n" (first bold) the strip, 52 px: "C = 150 + 6n" (violet), with "150" tagged "fixed" and "6n" tagged "variable". Chip "revenue: money from customers"; on "n" (second bold) "R = 45n" (teal). Grey chip "Year 11: start value and rate". On "starts at a hundred and fifty" the cost line redraws from (0, 150), hand tag "paid even at 0 lawns"; on "six dollars a lawn" a small rise-and-run triangle "+1 lawn, +$6" on it. On "starts at zero" the revenue line redraws from the origin, hand tag "starts at 0"; on "lawn" (last bold) its triangle "+1 lawn, +$45".

### 3. the break-even point
> Watch both lines as the number of lawns grows. At first, cost is above revenue, so the round is losing money. That gap is the loss. But revenue climbs faster, so the gap closes, until the lines cross. That crossing is the break-even point, where cost equals revenue, and the profit is exactly **zero**. After it, revenue is above cost, and the gap is the profit. On this graph, the crossing is somewhere between three and four lawns. To pin it down, we can use a little **algebra**.

Visual: camera continue. The break-even rider (simulation 1) sweeps from n = 0 (about 6 s): `LiveReadoutBoard` at the right, 52 px: "lawns n", "cost $" (violet), "revenue $" (teal), "profit $"; a `SignedBar` beside it starting at −150. The gap between the lines shades grey as the rider passes, hand tag "loss". On "zero" the rider stops at the crossing, the profit readout "$0" and the bar at zero, the crossing rings amber, chip "break-even point: cost = revenue, profit = 0" (44 px), hand tag "break-even: profit 0". On "After it" the rider continues to n = 8 and the gap shades teal, hand tag "profit". On "between three and four" a zoom bracket on the n-axis from 3 to 4. On "algebra" a grey panel tab "Standard 2" slides in at the right edge.

### 4. by algebra: thirty-nine dollars a lawn
> At break-even, revenue equals cost. So forty-five n equals a hundred and fifty plus six n. Take six n from both sides, and thirty-nine n equals a hundred and **fifty**. There's a reason for that thirty-nine, and it's worth knowing even if you work from the graph. Each lawn brings in forty-five dollars, but six of it goes on fuel, so each lawn pays back thirty-nine dollars of the fixed **cost**. It takes a hundred and fifty divided by thirty-nine lawns to pay it all back, which is about three point eight **five**. So the round breaks even at about three point eight five lawns.

Visual: camera continue: the graph shrinks to the left 55 per cent (rider at the crossing); the "Standard 2" panel at the right, 52 px rows: "R = C"; "45n = 150 + 6n"; on "fifty" "39n = 150". On "a reason" the panel's rows dim and the gap steps (simulation 2) run at the bottom for everyone: a violet bar "fixed cost $150"; on "forty-five dollars" a teal chip "$45 in" and a violet chip "$6 out" merge into "+$39", hand tag "$45 in, $6 out"; on "cost" the "+$39" brackets stack against the bar, one per lawn, three filling $117, hand tag "$39 a lawn pays it back". On "five" the fourth bracket fills part-way, row "n = 150 ÷ 39 ≈ 3.85" (amber) in the panel and under the graph's crossing.

### 5. round up, not down
> But you can't mow zero point eight five of a lawn. So which whole number do we want? Check three lawns. Revenue is a hundred and thirty-five dollars, cost is a hundred and sixty-eight, so that's a loss of thirty-three **dollars**. Now four lawns. Revenue is a hundred and eighty, cost is a hundred and seventy-four, a profit of six **dollars**. So the round needs four lawns a week to make a profit. Rounding down to three is the classic slip. Three lawns is still a **loss**. When break-even isn't a whole number, round up to the first whole number that makes a profit.

Visual: clear change to the rounding strip (simulation 3; `IntervalPicture`, 1,400 px wide): a number line 2 to 5, with "3.85: break-even" (amber) marked; hand tag "can't mow 0.85 of a lawn". A slider snaps to 3: rows, 44 px: "n = 3: R = 45 × 3 = 135, C = 150 + 18 = 168"; on "dollars" (first) "P = −33: loss" (grey), the 3 mark grey. Slider snaps to 4: "n = 4: R = 180, C = 174"; on "dollars" (second) "P = +6: profit" (teal), the 4 mark teal; framed answer (green): "4 lawns a week". On "loss" a red slip "3 lawns" writes and is crossed (caption "still a loss"), hand tag "round UP". The trailer badge stays at the top left.

### 6. profit or loss at any number
> Profit is revenue minus cost. If that comes out negative, it's a loss. For ten lawns, revenue is four hundred and fifty dollars, and cost is two hundred and ten, so the profit is two hundred and forty **dollars**. For two lawns, revenue is ninety, and cost is a hundred and sixty-two. Ninety minus a hundred and sixty-two is minus seventy-two, so that's a loss of seventy-two **dollars**. On the graph, profit is the gap where revenue is above cost, and loss is the gap where it's **below**.

Visual: stage change: the graph returns full width, n 0 to 10, $0 to $500. Strip, 52 px: "profit P = R − C" (hand tag "R − C"). On "ten lawns" the rider jumps to n = 10: rows, 44 px: "R = 450, C = 150 + 60 = 210"; on "dollars" (first) "P = 450 − 210 = 240" (teal), the gap at n = 10 bracketed teal "$240 profit". On "two lawns" the rider jumps to n = 2: "R = 90, C = 162"; on "dollars" (second) "P = 90 − 162 = −72: loss of $72" (grey), the gap bracketed grey. On "below" the two regions shade again (teal right of the crossing, grey left), hand tag "below the line: loss".

### 7. worked example: the market stall
> Here's one with a whole-number answer. A market stall has fixed costs of a hundred and eighty dollars a day, and spends four dollars on materials for each item. It sells each item for ten dollars. Find the break-even point, and the profit if fifty items are sold. Cost is a hundred and eighty plus four n, and revenue is ten **n**. At break-even, ten n equals a hundred and eighty plus four n, so six n is a hundred and eighty, and n equals **thirty**. That's thirty items, where cost and revenue are both three hundred dollars. At fifty items, revenue is five hundred and cost is three hundred and eighty, so the profit is a hundred and twenty **dollars**. Putting the fixed cost into revenue is the slip. Revenue only counts what customers **pay**.

Visual: clear change to the g01 board. Task strip, 44 px: "A market stall has fixed costs of $180 a day and spends $4 on materials per item. Items sell for $10 each. Find (a) the break-even point (b) the profit if 50 items are sold." (site `we-2`). Givens card, 44 px: "fixed $180" (violet), "variable $4 an item" (violet), "price $10" (teal). Plot at the right (640 × 560 px, n 0 to 60, $0 to $600). On "n" (bold) rows, 52 px: "C = 180 + 4n" (violet), "R = 10n" (teal), both lines drawing. Rows: "10n = 180 + 4n", "6n = 180"; on "thirty" "n = 30" (amber), the crossing rings at (30, 300), row "C = R = $300", framed answer (green) "break-even: 30 items, $300". On "fifty items" the rider at n = 50: "R = 500, C = 380"; on "dollars" "P = 500 − 380 = $120" (framed green). On "pay" a red slip "R = 180 + 10n" writes and is crossed (caption "revenue is only what customers pay"), hand tag "customers pay revenue".

### 8. memory aid
> Here's the summary. Break-even is where cost equals revenue, and the profit is zero. Before it, a loss. After it, a profit. And if break-even falls between two whole numbers, round **up**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the mowing graph small, grey loss wedge and teal profit wedge either side of the amber crossing. Main line, hand font 56 px: "Break-even: cost = revenue, profit = 0." On "up" the key line, 40 px: "Below it, a loss. Above it, a profit. Not whole? Round up." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A mobile car-detailing van costs four hundred and twenty dollars a week to lease and insure. Cleaning products cost fifteen dollars a car, and each detail is charged at ninety dollars. Write equations for the weekly cost and revenue for n cars. How many cars must it detail in a week to make a profit? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A mobile car-detailing van costs $420 a week to lease and insure. Cleaning products cost $15 a car, and each detail is charged at $90. (a) Write equations for the weekly cost C and revenue R for n cars. (b) How many cars must it detail in a week to make a profit?" The full question stays on screen. Picture slot: empty axes, n 0 to 10 ("cars"), $0 to $900. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Cost is four hundred and twenty plus fifteen n, and revenue is ninety **n**. At break-even, seventy-five n equals four hundred and twenty, so n is five point **six**. That's not whole, so round up. Six cars makes a profit of thirty dollars, so the answer is six **cars**. Saying five cars is the slip. Five cars is still a loss, of forty-five **dollars**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "C = 420 + 15n" (violet); on "n" "R = 90n" (teal); both lines draw on the picture. "75n = 420"; on "six" "n = 5.6" (amber), the crossing ringed. "n = 6: R = 540, C = 510, P = +30"; on "cars" framed answer (green) "6 cars". On "dollars" a red slip "5 cars" writes and is crossed (caption "5 cars: loss of $45"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The graph shows the weekly cost and revenue of a T-shirt printing business. Cost is three hundred plus ten n, and revenue is twenty-five n, for n shirts. Write down the break-even point, and say what it means. Then find the profit or loss when twelve shirts are sold. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph shows the weekly cost C = 300 + 10n and revenue R = 25n of a T-shirt printing business, for n shirts. (a) Write down the break-even point and explain what it means. (b) Find the profit or loss when 12 shirts are sold." Picture slot: both lines on axes n 0 to 30 ("shirts"), $0 to $800, grid every 2 shirts and $50, labelled "C" (violet) and "R" (teal) at their right ends; the crossing is not marked and nothing is shaded. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The lines cross at twenty, five **hundred**. So at twenty shirts, cost and revenue are both five hundred dollars, and the profit is zero. At twelve shirts, revenue is three hundred, and cost is four hundred and twenty. Revenue minus cost is negative, a loss of a hundred and twenty **dollars**. Calling it a profit is the slip. Twelve is below break-even, so it's a **loss**.

Visual: the card shrinks to the top. On "hundred" the crossing (20, 500) rings amber, row "break-even: 20 shirts, $500, profit 0". A rider at n = 12: "R = 25 × 12 = 300", "C = 300 + 120 = 420"; on "dollars" "P = 300 − 420 = −120: loss of $120" (framed green), the gap bracketed grey. On "loss" (last bold) a red slip "profit of $120" writes and is crossed (caption "12 is below break-even"). Hold about 1 s.

### 13. handoff
> Graphs and algebra find break-even, but plenty of businesses work it out in a spreadsheet. Here's a school formal. The venue and DJ cost six thousand five hundred dollars, catering is eighty-five dollars a guest, and tickets are a hundred and thirty dollars each. How many tickets does the committee need to sell? Building that spreadsheet is **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "school formal" the painted table `ms12-formal-table-v1.png` (about 760 px wide) at the left with a coded card, 40 px, writing as spoken: "venue and DJ: $6,500", "catering: $85 a guest", "tickets: $130 each". On "spreadsheet" (first) an empty coded spreadsheet at the right (`SpreadsheetGrid`, 1,000 × 560 px): column letters A to D, row numbers 1 to 7, every cell blank, the formula bar empty, the cursor on A1. On "next" chips "how many tickets?", "Next: break-even in a spreadsheet" and "?". Hold about 2 s. No value or formula is written. This is a04b's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Cost C = fixed cost + variable cost × n. Revenue R = price × n.
- Break-even: C = R (profit 0), where the lines cross.
- Profit = R − C; a negative profit is a loss.
- Before break-even: loss. After break-even: profit.
- Break-even not whole? Round up to the first profit.

Memory aid (framed card, right side, as in scene 8): *Break-even: cost = revenue, profit = 0.* Key: *Below it, a loss. Above it, a profit. Not whole? Round up.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and a04b's opening frame.

## Teaching checks

- **Does it explain causes?** Why the cost line starts at $150: the fixed cost is paid at zero lawns (2). Why revenue catches up: it rises $45 a lawn against cost's $6 (2, 3). Why the crossing is break-even: cost equals revenue there, so profit is zero (3). Why $39: price minus variable cost is what each lawn pays back (4). Why round up: part-lawns don't exist and the lower whole number still loses money (5). Why a negative profit is a loss (6).
- **Misconceptions addressed:** rounding down (5 crossed, A1 crossed); the fixed cost in revenue (7 crossed); profit read as revenue (6); a loss called a profit (A2 crossed); calling a first-profit revenue the break-even value (MS-05: not taught, author note (d)).
- **Visual standard, item by item:** 1 the trailer from the first frame, returning as a badge in 2 to 5; 2 a new stage every 35 to 60 s; 3 the rider with live profit and shading, the $39 gap steps, the snapping rounding strip; 4 fixed roles (cost violet, revenue teal); 5 large type; 6 hand tags; 7 g01 board in 7; 8 framed card and five bullets; 9 the profit counter hitting $0 at the crossing as the shading flips.
- **One idea at a time:** parts of C and R (2), break-even on the graph (3), by algebra and why (4), rounding (5), profit or loss at any n (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A2's graph supplied for Standard 1); 10 s each; feedback about 25 s and 27 s.
- **Avoided double teaching:** a03's two-equation set-up and a02a's "set them equal" are recalled in a phrase; Year 11 profit and loss and intercept and gradient in grey chips.
- **Standard 1 path:** break-even read from the graph and confirmed by substituting whole numbers; the algebra row is labelled "Standard 2"; the $39 reason is spoken for everyone.
- **Syllabus coverage:** `ci7ff6c8c4` and `cic9643bd9` (2 to 5, 7, A1, A2; key notes 1, 2, 5); `ciaa0d09e2` and `ci8b3fb7f8`, profit and loss (5, 6, 7, A2; key notes 3, 4); the spreadsheet part is a04b.
- **Out of scope by design:** spreadsheets (a04b); non-linear profit (a11a, a11b).

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 3 marks suggested, not an official marking scheme).** "A mobile car-detailing van costs $420 a week to lease and insure. Cleaning products cost $15 a car, and each detail is charged at $90. (a) Write equations for the weekly cost C and revenue R for n cars. (b) How many cars must it detail in a week to make a profit?"
Model answer: (a) C = 420 + 15n and R = 90n. (b) 90n = 420 + 15n gives 75n = 420 and n = 5.6, so it must detail 6 cars (5 cars: P = 450 − 495 = −$45, a loss; 6 cars: P = 540 − 510 = $30). Classic mistake (crossed): "5 cars".

**Attempt 2 (scene 11; original, HSC style, 3 marks suggested).** "The graph shows the weekly cost C = 300 + 10n and revenue R = 25n of a T-shirt printing business, for n shirts. (a) Write down the break-even point and explain what it means. (b) Find the profit or loss when 12 shirts are sold."
Model answer: (a) (20, 500): at 20 shirts, cost and revenue are both $500, so the profit is zero. (b) R = 300, C = 420, P = 300 − 420 = −120: a loss of $120. Classic mistake (crossed): "profit of $120".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Mowing round | C = 150 + 6n; R = 45n; 39n = 150; n ≈ 3.85; P(3) = −33 (135, 168); P(4) = 6 (180, 174) | 1 to 5 |
| Profit at n | P(10) = 450 − 210 = 240; P(2) = 90 − 162 = −72 | 6 |
| Site `we-2` | C = 180 + 4n; R = 10n; 6n = 180; n = 30; $300; at 50: 500 − 380 = 120 | 7 |
| A1 | C = 420 + 15n; R = 90n; 75n = 420; n = 5.6; P(5) = −45; P(6) = 30 (540, 510) | 9, 10 |
| A2 | C = 300 + 10n; R = 25n; (20, 500); at 12: 300 − 420 = −120 | 11, 12 |
| Handoff | $6,500; $85 a guest; $130 a ticket (no value worked out) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12a/verify.py`, run with `python -I`); Codex to re-check.

- 45n = 150 + 6n at n = 50/13 = 3.846; 39n − 150 at n = 0, 2, 3, 4, 10: −150, −72, −33, 6, 240; R and C at 2: 90, 162; at 3: 135, 168; at 4: 180, 174; at 10: 450, 210.
- 10n = 180 + 4n at n = 30; 10 × 30 = 300; at 50: 500 and 380, profit 120.
- 90n = 420 + 15n at n = 28/5; P(5) = −45; P(6) = 30.
- 25n = 300 + 10n at n = 20; 25 × 20 = 500; at 12: 300 and 420, profit −120.

## Memory aid check

- **"Break-even: cost = revenue, profit = 0."** with key line **"Below it, a loss. Above it, a profit. Not whole? Round up."** Original. Meaning, as said in scene 8: the break-even quantity is where the cost and revenue lines meet, so revenue minus cost is zero; for fewer items revenue is below cost (a loss), for more it is above (a profit); a non-whole break-even rounds up to the first whole number with a profit. Assumptions checked: linear cost and revenue with the price above the variable cost (so revenue rises faster and the order "loss then profit" holds; a03 to a04b never use a price below the variable cost); "below" and "above" refer to the number of items, not the graph's height (scene 6 says "where revenue is above cost"); rounding up applies to whole items. It helps a new case: C = 500 + 3n and R = 8n break even at n = 100, so 99 items lose $5 and 101 make $5. Introduced after scenes 3 to 7.
- **Considered, not used:** "Fixed first, then the gap" (accurate for the $39 idea, but it doesn't name break-even).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12a/count.py`, which reproduces e08's 5,632): **5,934 characters**, 14 scene headings. Characters per scene (1 to 14): 557, 620, 474, 570, 558, 479, 734, 184, 334, 339, 299, 363, 348, 75.

At 13.3 characters per second the speech is about 446 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the rider and shading (3), the gap steps (4), the rounding strip (5) and the profit brackets (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 535 s (8 min 55 s)**, 35 s under the 570 s cap; speech and holds before the notes about 491 s. Feedback speech: about 25 s and 27 s.

Reserve trims if the voiced take runs long: scene 1's "Any small business, from a market stall to a food van, needs to know that number before it starts." (keep it if possible: it is the why-it-matters line); scene 4's "and it's worth knowing even if you work from the graph" (the gap steps carry it).

## Scene list and build ids

Lesson key `m-s12a04a` (route math-s12-a04, first half). Explainer folder `src/explainer/lessons/math-s12-a04a`; build inputs in `docs/production/claude-pm/lessons/math-s12-a04a/` (at voicing).

In order (14 scene headings): hook-mowing-round, cost-and-revenue, break-even-point, algebra-39-a-lawn, round-up, profit-or-loss, worked-market-stall, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | a03's frame; the trailer |
| 40 to 90 s | 2 | Cost and revenue lines, parts named |
| 90 to 130 s | 3 | The rider, the shading and the profit counter |
| 130 to 175 s | 4 | Standard 2 panel; the $39 gap steps |
| 175 to 220 s | 5 | The rounding strip |
| 220 to 260 s | 6 | Profit or loss at 10 and 2 lawns |
| 260 to 320 s | 7 | g01 board: site `we-2` |
| 320 to 340 s | 8 | Framed memory card |
| 340 to 440 s | 9 to 12 | Question cards and countdowns, then feedback |
| 440 to 470 s | 13 | The formal and the empty spreadsheet for a04b |
| 470 to 515 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a03's last frame continues into 1; 1 to 2 stage change (the graph enlarges); 2 to 3 camera continue; 3 to 4 camera continue (the panel slides in); 4 to 5 clear change to the strip; 5 to 6 stage change; 6 to 7 clear change to the board; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a04a-learning-review.md`, `science_check` = `checks/m-s12-a04a-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, listing read only): `ma11-lemonade-stall-v1.png`, `ma11-food-truck-v1.png` and `ma11-coffee-cart-v1.png` are other designs' break-even anchors (Advanced w13, w19) and are not reused; `ma11-garden-barrow-v1.png` is a garden barrow, not a mowing set-up. No mowing plate exists.

Need (painted, new; see the Codex asset brief): `ms12-mower-trailer-v1.png` (also a03's final frame). The final frame uses `ms12-formal-table-v1.png`, painted under a04b's brief.

Coded: the cards, every line, rider, shading, readout and bar, the gap steps, the rounding strip, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `LinkedRiders`, `LiveReadoutBoard`, `SignedBar`, `RegionLabels` (a11-graph-parts.tsx), `IntervalPicture` (extras.tsx), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a04):
1. **Loss and profit shading** (the region between two lines, grey where the first is above and teal where the second is above, switching at the crossing; as specified in math-a11-w13): check the switch at n = 50/13 within 1 px.
2. **Gap steps** (small, lesson folder): stacked brackets of a fixed value against a bar, with a final partial bracket. Check: 3 full brackets of $39 and a fourth at 0.846 of its length fill $150.

## Codex asset brief (Maths S12 A04a, a mowing trailer; also a03's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-a04a.md`, route entry math-s12-a04. Paint after the learning review and maths check pass and root gives the go-ahead, and before the a03 build (a03's final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-garden-barrow-v1.png` and `maths/ma11-trade-van-v1.png`; no text, logos, brand names, number plates with characters, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-mower-trailer-v1.png` (about 1800 × 1000 px): a small single-axle box trailer in side three-quarter view, facing right, its tailgate down as a ramp; in the tray, a red push mower, a line trimmer lying along the side, a green plastic fuel can and a rake; a few grass clippings on the tailgate. A blank rectangular plate on the trailer's back (no characters). Ground line flat, fading to transparent at the sides.

Report inspection on the paper background (`#f6f1e7`) at 1,000 px, 760 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-a04a-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm the site's `we-2` keeps its numbers and answers (30 items, $300; $120 at 50), and that the site's food stall (MS-04, MS-05) does not appear.
4. Confirm no revenue at a first-profitable whole number is called a break-even value.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's crossing unmarked, no shading).
6. Confirm scene 1 opens on a03's final frame and scene 13's spreadsheet is empty.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Break-Even Point, Profit and Loss | Year 12 Maths Standard

(Title length: 58 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson02.sa.html

A weekend lawn-mowing round costs $150 a week to run and $6 a lawn, and earns $45 a lawn. When does it start making money? Learn fixed cost, variable cost and revenue, draw the cost and revenue lines, and find the break-even point where they cross (profit zero), by graph and by algebra. See why each lawn pays back $39, why a break-even of 3.85 means 4 lawns, and how to find the profit or loss at any number. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Use simultaneous equations to model and analyse the break-even point where cost and revenue are represented by linear equations"
"Identify the break-even point and solve problems involving profit and loss using a spreadsheet" (spreadsheets in the next video)
Syllabus content, Standard 1:
"Use simultaneous equations to model and analyse the break-even point of a problem where cost and revenue are represented by linear equations"
"Identify the break-even point and solve problems involving profit and loss by using a spreadsheet to model the problem" (spreadsheets in the next video)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

Builds on: Simultaneous equations from worded problems. Next: Break-even in a spreadsheet.

#Year12Maths #MathsStandard #BreakEven #HSCScience

## Open decisions

- **1. The "$39 a lawn" reason for Standard 1 (learning review).** The reason is spoken for everyone and the algebra row is labelled "Standard 2". Check that Standard 1 students are not lost by "a hundred and fifty divided by thirty-nine", which is arithmetic, not a method they lack.
- **2. Profit formula (pack decision).** "Profit = (price − variable cost) × n − fixed cost" is not shown as a formula (pack: Standard students do better with R − C); its idea is the $39 gap steps.
- **3. Anchor and attempt contexts (root).** The pack's question 1 context (lawn mowing) became the anchor, so both attempts are new (car detailing from the pack's anchor 3; T-shirt printing, original). The pack's school formal is a04b's anchor.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from a03; check that fixed cost, variable cost and revenue each land with a picture before their symbols, that the rider's profit counter is followable at speed, that the $39 gap steps explain the division, that rounding up is caused and not a rule, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
