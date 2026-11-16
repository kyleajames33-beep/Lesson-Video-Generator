# Maths A11 W19: How do quadratic models find a best value in context? Building the model, the vertex, the practical domain and the answer in words (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w19/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,849 characters, 14 scene headings, about 526 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w19-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 6 (internal reference, muddled callback): **accepted, adapted.** Reviewer's wording for the opening and "takings" throughout, but the definition sentence says "Takings, or revenue, is price times quantity", because the route's stop boundary and key note require the word "revenue". The task strip, givens, framed answer and crossed slip ("maximum takings: $10") follow; site `we-3` numbers unchanged.
2. Optional, scene 7 ("practical domain" first spoken here): **accepted**: "..., the prices the situation allows, ...".

Narration now 5,849 characters by script, about 526 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: nineteenth video of the Year 11 Mathematics Advanced course (outline playlist order 19), after w18 (quadratic inequalities) and before w20 (cubic graphs). Pre-design pack: `../pre-design/maths-a11/math-a11-w19.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson19.sa.html` (Break-even and Quadratic Modelling, SHA256 `40f59eeef05d66d2740baa2c326bbeabe6f4c5ba9c4782607d60b13620b94cc4`, `we-3`; `we-1` and `we-2` were w13's and are not repeated). Every number recalculated with SymPy. Route entry: `math-a11-w19` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content point cited by codename and exact wording; painted plates for the real objects (a food truck, a tray of dumplings; the w05 kayak jetty reused as a callback badge; a reused ticket for attempt 1), coded sliders, bars, curves and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (food and money); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codename, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci6ee9e4ed` (Constructing and using functions): "Model and solve practical problems involving quadratic functions and justify conclusions in the context of the problem"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w18's final frame (the food truck with "$p a tray", a dumpling tray, the hoodie badge "30 ≤ p ≤ 50 ✓", "best price?", "Where does the model come from?"), recalling w15 (the vertex of a concave-down parabola is its highest point; x = −b/(2a)) and w13 (revenue is price times quantity; profit is revenue minus cost). Builds a profit model from a context with named variables, units and restrictions (w12): trays sold depend on price, so profit = (amount kept on each tray) × (trays) − fixed costs; finds the best price from the vertex and checks it lies in the practical domain; finds where the model is positive (w18); justifies the answer in context with units and whole numbers; uses site `we-3` (a stall's revenue p(40 − 2p), the same model as w05's kayak hire, cited as a callback); shows a vertex outside a capped domain. Stops at the vertex method. Not taught: calculus optimisation (Year 12); cubic models (w20).

## Decisions

- **Anchor: a food truck pricing its trays of dumplings (painted plates, live).** At $p a tray it sells 500 − 20p trays a day; each tray costs $5 to make; fixed costs are $720 a day. Profit P = (p − 5)(500 − 20p) − 720 = −20p² + 600p − 3220. Best price $15 (200 trays), greatest daily profit $1280; profitable for 7 < p < 23; with a $12 market cap the best allowed price is $12 ($1100). Food and money. Distinct from every Year 12 Maths anchor (s01 mentions "a food truck's queue" only as a rejected alternative; no Year 12 design uses it; grep of `math-a12-*.md`) and from w01 to w18, and from the w24 to w31 pack suggestions.
- **Root ruling 5 ("no price-and-takings model" for w19) and the route.** The route's stop boundary requires "revenue as price times quantity when quantity depends on price". The anchor is a profit model with costs, a practical domain and a profitable range, which goes beyond w05's takings question. Site `we-3` is exactly w05's kayak model (p(40 − 2p), $10, $200), so it is used as an explicit callback ("the kayak model from the discriminant video"), as the w01 to w07 designer's call 11 suggested. Root confirms (open decision 1).
- **S11-04 wording.** p − 5 is "what the truck keeps on each tray after that tray's own cost", never "profit per tray" (`../site-corrections-maths-a11.md`, S11-04, the same idea in w13).
- **Idealising assumptions (author notes, not learner copy).** (i) The demand line 500 − 20p is an illustrative model fitted "from past markets"; the narration says so. (ii) Prices are continuous; trays are whole numbers at the answers used ($15 gives 200; $12 gives 260; $7.50 gives 300 tickets). (iii) The cap is a hypothetical market rule.
- **Simulations (standard item 3).**
  1. **The price slider** (scenes 3 and 4, new `PriceProfitRig` on `ParameterSlider`, `LiveReadoutBoard` and `StudioPlot`): a blue slider "price p" moves from $5 to $25; the menu board on the painted truck shows the coded price; an amber bar "trays sold 500 − 20p" shrinks; a violet bar "kept per tray p − 5" grows; a rectangle whose sides are those two bars fills teal (their product), with a grey strip "− 720 fixed" cut from it; the teal readout "P" and the curve P(p) draw live as the slider moves. One timeline drives slider, board, bars, rectangle, readout and curve.
  2. **The best-value ring** (scenes 4 and 7): the vertex ring locks at (15, 1280) when the slider passes 15; in scene 7 a grey wall at p = 12 blocks the slider, the curve beyond it greys, and the ring moves to the wall's top (12, 1100).
  3. **Above the axis** (scene 5): the w18 `SignSweep` on the profit curve shades the price axis green between 7 and 23.
- **Colour roles (fixed for the whole video).** Price p **blue** (input, root ruling 12); profit P and revenue R **teal** (outputs); trays or items sold **amber**; the amount kept on each tray (p − 5) **violet**; fixed costs grey; the practical domain a grey bracket; answer green; mistake red, crossed slips only; curves ink.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "name it, with units", "kept per tray", "not profit yet", "trays ≥ 0", "more each, fewer sold", "a < 0: a top", "best at", "in the domain?", "whole trays", "say it in context", "profitable between", "two questions", "revenue = price × quantity", "kayak, w05", "price ≠ revenue", "capped", "still rising", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 55 s.** w18's frame (1); building the model on the truck (2); the price slider and rectangle (3); the vertex and the context answer (4); the profitable range (5); g01 board with the kayak callback (6); the capped price (7); framed memory card (8); question cards (9 to 12); the card-tray handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 4 (the truck): p = 15, P = 1280, 200 trays; crossed "best profit: $15" captioned "$15 is the price". 6 (`we-3`): p = 10, R = 200; crossed "maximum takings: $10" captioned "price ≠ takings" (Revision 2: scene 6 is named as w05's kayak hire and says "takings, or revenue"). 7 (cap): best allowed $12, P = 1100; crossed "best price $15" captioned "outside the allowed prices". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Build, peak, check, say." Key line: "Build the model with units. Peak at the vertex (a < 0). Check it's in the domain. Say the answer in context." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** On the price slider, the teal rectangle (kept per tray × trays) visibly grows and then shrinks as one side lengthens and the other shortens, and the profit curve drawn by it peaks exactly where the rectangle is largest. In scene 6 the kayak jetty badge from w05 returns with its old "Δ = 0 at T = 200" chip, and the vertex lands on the same $200.
- **Site numbers unchanged.** `we-3`: R = 40p − 2p², p = 10, R = $200.
- **Attempts (pack questions, original).** A1 (pack question 1): "At a price of $p per ticket, a cinema sells 600 − 40p tickets for a session. Find the ticket price that gives the greatest takings, and the greatest takings." Answer $7.50, $2250. Crossed "p = −7.5". A2 (pack question 2, context changed from a food truck to a bakery stall because the truck is the anchor): "A bakery stall's daily profit from selling x batches of muffins is P = −5x² + 80x − 195 dollars. (a) How many batches give the greatest profit, and what is it? (b) For which whole numbers of batches does the stall make a profit?" Answer (a) 8 batches, $125; (b) 4 to 12 batches. Crossed "3 to 13 batches".
- **Mistake scene:** none separate. Price given for profit (4 crossed), or price for revenue (6 crossed); the vertex outside the domain (7 crossed); a sign lost in −b/(2a) (A1 crossed); break-even points counted as profit (A2 crossed); "profit per tray" (2, the violet bar says "kept per tray").
- **Cause chain taught, in order:** (1) a model needs named variables with units and limits (2); (2) profit is what's kept on each item times the number sold, minus fixed costs, and when the number sold falls as price rises, the product is a quadratic with a < 0 (2, 3); (3) a < 0 means the vertex is the highest point, so the best price is at x = −b/(2a), and the best profit is found by substituting (4); (4) a model's answer must be checked against its practical domain and the quantity's meaning (whole trays) (4, 7); (5) "best" and "profitable" are different questions: the vertex against the roots (5); (6) if the vertex is outside the allowed values, the best allowed value is at an end of the domain, because the curve is still rising or falling there (7).
- **Entry knowledge (route):** w12 (building a model with variables, units and restrictions); w13 (cost, revenue, profit and break-even); w15 (the vertex; x = −b/(2a)). w18's inequality method is used in scene 5.
- **Learner-visible vocabulary (plain meaning at first use):** model (a formula that describes a real situation, 2); practical domain (the input values that make sense in the situation, 2); maximum, best value (recalled from w15, 4); revenue, takings (money taken: price × quantity, 6).
- **Handoff (to w20, "How do the factors of a cubic shape its graph?").** Scene 13: the flat card with corners cut (`ma11-card-sheet-cut-v1.png`), dashed fold lines and "30 cm", "20 cm", "x" labels, beside the folded tray (`ma11-card-tray-5-v1.png`), with the strip "V = x(30 − 2x)(20 − 2x)" and chips "Three factors: a cubic" and "Next: how a cubic's factors shape its graph". This is w20's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) P = (p − 5)(500 − 20p) − 720 = −20p² + 600p − 3220. Vertex p = −600/(2 × −20) = 15; P(15) = 10 × 200 − 720 = 1280. Zeros: −20(p² − 30p + 161) = 0, Δ = 900 − 644 = 256, p = 7, 23. P(10) = 5 × 300 − 720 = 780. P(12) = 7 × 260 − 720 = 1100; P is increasing on [5, 15]. Practical domain from the model 0 ≤ p ≤ 25 (trays ≥ 0); prices below $5 lose money on every tray.
  (b) `we-3`: R = p(40 − 2p): vertex 10; R(10) = 200. w05: T = p(40 − 2p), Δ = 1600 − 8T = 0 at T = 200.
  (c) A1: R = 600p − 40p², p = 7.5, 300 tickets, R = 2250. A2: x = 8, P = 125; zeros 3, 13; positive for whole x from 4 to 12.
  (d) Pronunciations: "five hundred minus twenty p", "seven twenty", "twelve hundred and eighty", "seven dollars fifty", "minus five x squared plus eighty x minus one hundred and ninety-five".
  (e) Windows: profit plot p 0 to 26, P −1,000 to 1,500 (labelled scales); kayak inset p 0 to 20, R 0 to 220.

Main question: *A food truck sets the price of a tray of dumplings. Which price gives the greatest profit, and which prices make any profit at all? How do quadratic models find a best value in context?*
Entry knowledge (w12; w13; w15): building a model with units and limits; profit; the vertex and x = −b/(2a).
Stops after: building a price model, the vertex as the best value, the domain check, the profitable range, answers in context, a capped domain. No calculus.
Handoff: math-a11-w20: the card tray V = x(30 − 2x)(20 − 2x).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): price blue; profit and revenue teal; trays or items sold amber; kept per tray violet; fixed costs grey; answer green; mistake red, crossed slips only; curves ink. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: the best price
> Here's a food truck that sells dumplings by the tray. The owner has to set the price. Too cheap, and each tray barely covers its cost. Too dear, and hardly anyone buys. Somewhere in between is the best price. We met a profit model like this with the hoodies, but we didn't ask where it came from, or which price is best. So how do quadratic models find a best value in **context**?

Visual: opens on w18's final frame exactly (the food truck `ma11-food-truck-v1.png`, about 1,200 px wide, its menu board showing coded "$p a tray", the dumpling tray `ma11-dumpling-tray-v1.png` on the counter, the hoodie badge "30 ≤ p ≤ 50 ✓" with "best price?" at the top left, chips "Best price? Where does the model come from?" and "Next: quadratic models and best values"). On the first sentence the "Next" chip fades and the heading writes on "The best price". On "Too cheap" the board shows "$6", a tiny violet bar "kept per tray" barely shows, hand tag "barely covers it"; on "Too dear" the board shows "$24" and a tiny amber bar "trays sold" barely shows. On "in between" the board shows "$p" again with a "?" ring. On "hoodies" the hoodie badge pulses, then fades. On "context" the chip "best value?" moves to the top right as the scene question.

### 2. build the model
> Build the model first, naming every variable with its units. Let p be the price of a tray, in dollars. From past markets, the owner finds that at p dollars a tray, the truck sells five hundred minus twenty p trays a **day**. Each tray costs five dollars to make, so the truck keeps p minus five dollars on each tray, after that tray's own cost. That's not profit yet, because there are also seven hundred and twenty dollars a day in fixed costs, for the site, gas and **power**. So profit is what it keeps on each tray, times the trays, minus the fixed costs. P equals p minus five, times five hundred minus twenty p, minus seven hundred and **twenty**. And there are limits. The truck can't sell a negative number of trays, so p is at most twenty-**five** dollars.

Visual: camera continue; the truck shrinks to the left half (720 px). At the right, a `ModelCard` (from w12) builds one slot at a time, 44 px: "p = price of a tray ($)" (blue), hand tag "name it, with units". On "day" the slot "trays sold a day = 500 − 20p" (amber) with a small table under it: "$10: 300", "$15: 200", "$20: 100". On "make" the slot "kept on each tray = p − 5 ($)" (violet), hand tag "kept per tray". On "power" a grey slot "fixed costs = $720 a day", hand tag "not profit yet". On "twenty" (first) the equation strip, 52 px: "P = (p − 5)(500 − 20p) − 720" with each part in its colour. On "five" (last) the slot "500 − 20p ≥ 0 ⇒ p ≤ 25" and a grey bracket "0 ≤ p ≤ 25", hand tag "trays ≥ 0".

### 3. watch the price rise
> Watch what happens as the price rises. At ten dollars a tray, the truck keeps five on each of three hundred trays. That's fifteen hundred dollars, minus the fixed costs, which leaves seven hundred and **eighty**. Raise the price, and each tray earns more, but fewer trays sell. The profit rises, levels off, then **falls**. Expand the model, and it's minus twenty p squared, plus six hundred p, minus three thousand two hundred and twenty. a is negative, so the graph is a parabola that opens downwards, and its vertex is the highest **point**.

Visual: clear change to the price slider (simulation 1). Top left: the truck (500 px) with its menu board live. Centre: the rectangle (violet side "kept per tray", amber side "trays sold", teal fill) with the grey "− 720" strip. Right: the profit plot (p 0 to 26, P −1,000 to 1,500). The blue slider starts at $10: readouts "kept $5", "trays 300", "P = 5 × 300 − 720 = 780" (teal). On "eighty" the curve's first point lands at (10, 780). On "Raise the price" the slider moves from $10 up to $22 and back down to $5 slowly: the violet side lengthens, the amber side shortens, the teal rectangle grows then shrinks, hand tag "more each, fewer sold", and the curve draws live. On "falls" the curve is complete. On "Expand" the strip writes "P = −20p² + 600p − 3220" (52 px) with "−20" circled; on "point" hand tag "a < 0: a top".

### 4. the best price, said in context
> So the best price is at the vertex. Minus b over two a is minus six hundred over minus forty, which is **fifteen**. At fifteen dollars, the truck keeps ten on each tray and sells two hundred trays. That's two thousand dollars, minus seven twenty, so a profit of twelve hundred and eighty **dollars**. Now check it makes sense. Fifteen dollars is inside the allowed prices, and two hundred is a whole number of trays. So say it in context. Charging fifteen dollars a tray gives the greatest daily profit, twelve hundred and eighty dollars, selling two hundred **trays**.

Visual: camera continue; the plot grows to the left two-thirds; rows at the right third. Rows, 52 px: on "fifteen" "p = −600/(2 × −20) = 15" (blue); the slider moves to $15, the rectangle is at its largest, the vertex ring locks at (15, 1280) (simulation 2), hand tag "best at". On "dollars" rows "kept $10, trays 200", "P = 10 × 200 − 720 = 1280" (teal). On "Now check" the grey domain bracket under the axis lights with "$15 in 0 ≤ p ≤ 25 ✓", hand tag "in the domain?"; "200 trays: whole ✓", hand tag "whole trays". On "trays" framed answer (green), 44 px: "Charging $15 a tray gives the greatest daily profit, $1280, selling 200 trays." A red slip "best profit: $15" writes small and is crossed (caption "$15 is the price").

### 5. a different question: which prices make a profit?
> The owner has a second question. Which prices make any profit at all? That's a different question from the best price. Profit is positive where the parabola is above the axis, so solve P greater than zero. Dividing by minus twenty and flipping gives p squared minus thirty p plus one hundred and sixty-one, less than **zero**. The roots are seven and twenty-**three**, so the truck makes a profit for prices between seven and twenty-three dollars. Best at fifteen, profitable between seven and twenty-three. Two questions, two different **answers**.

Visual: camera continue on the profit plot. Strip, 44 px: "P > 0". Rows, 52 px: on "zero" "−20p² + 600p − 3220 > 0 ⇒ ÷ (−20): p² − 30p + 161 < 0" with the sign violet; "(p − 7)(p − 23) < 0". On "three" amber dots at 7 and 23 on the price axis; the sign sweep (simulation 3) shades the price axis green between them with open circles, hand tag "profitable between". On "answers" two framed chips side by side: "best at $15" (on the vertex ring) and "profit for $7 < p < $23" (on the shaded stretch), hand tag "two questions".

### 6. worked example: the kayak model, again
> Here's a model you may recognise. At a price of p dollars, the kayak hire gets forty minus two p hires a day. Find the price that maximises its takings, and the maximum takings. Takings, or revenue, is price times quantity, so R equals p, times forty minus two p, which is forty p minus two p **squared**. a is minus two, so the vertex is a maximum, at minus forty over minus four, which is **ten**. And R is four hundred minus two hundred, so two hundred **dollars**. That's the kayak model from the discriminant video. Back then, delta said two hundred was the most it could take. The vertex says the same, and at which price. The question asks for two things. Ten dollars is the price, not the maximum **takings**.

Visual: clear change to the g01 board. Task strip, 44 px: "At a price of $p, a kayak hire gets 40 − 2p hires a day. Find the price that maximises its takings and the maximum takings." (site `we-3` numbers unchanged; Revision 2 names it as w05's kayak hire, since a YouTube viewer cannot see "the site"). Givens card: "price p (blue)", "hires a day 40 − 2p (amber)". Rows, 52 px: on "squared" "R = p(40 − 2p) = 40p − 2p²" (teal), hand tag "takings (revenue) = price × quantity"; on "ten" "p = −40/(2 × −2) = 10"; on "dollars" "R = 40(10) − 2(10)² = 400 − 200 = 200". Framed answer (green): "price $10; maximum takings $200". On "kayak model" the w05 jetty badge (`ma11-kayak-jetty-v1.png`, 300 px) slides in at the right with its chip "Δ = 1600 − 8T = 0 at T = 200" (violet), and a small inset curve R(p) with its vertex ring at (10, 200), hand tag "kayak, w05". On "takings" (last bold) a red slip "maximum takings: $10" writes and is crossed (caption "price ≠ takings").

### 7. when the vertex is out of reach
> Sometimes the vertex isn't allowed. Suppose the market caps prices at twelve dollars a tray. The vertex, fifteen, is now out of reach. Up to twelve, the profit is still rising when it hits the cap. So the best allowed price is the cap itself, twelve dollars. That's seven dollars kept on each of two hundred and sixty trays, eighteen hundred and twenty, minus seven twenty, so eleven hundred **dollars**. Always check that the vertex lies in the practical domain, the prices the situation allows, before you trust **it**.

Visual: clear change back to the profit plot with the truck (500 px) at the top left. On "caps prices" a grey wall at p = 12 rises on the plot and a "max $12" chip appears on the truck's menu board; the curve beyond 12 greys, hand tag "capped". The slider pushes against the wall; the vertex ring at 15 turns grey and a teal ring moves to (12, 1100) at the wall's top, hand tag "still rising". Rows, 52 px: "p = 12: kept $7, trays 260", on "dollars" "P = 7 × 260 − 720 = 1100" (teal). Framed answer (green): "With a $12 cap, $12 is best: $1100 a day." On "it" a red slip "best price $15" writes small and is crossed (caption "outside the allowed prices").

### 8. memory aid
> Here's a way to remember it. Build, peak, check, say. Build the model with units, find the peak at the vertex, check it's allowed, and say the answer in **context**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the teal rectangle growing then shrinking beside a small curve with its ring at the top (a 3 s loop). Main line, hand font 60 px: "Build, peak, check, say." On "context" the key line, 40 px: "Build the model with units. Peak at the vertex (a < 0). Check it's in the domain. Say the answer in context." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. At a price of p dollars per ticket, a cinema sells six hundred minus forty p tickets for a session. Find the ticket price that gives the greatest takings, and the greatest takings. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "At a price of $p per ticket, a cinema sells 600 − 40p tickets for a session. Find the ticket price that gives the greatest takings, and the greatest takings." The full question stays on screen. Picture slot: the reused ticket plate `maths/ma12-concert-ticket-v1.png` (280 px, its printed area blank) beside empty axes (p 0 to 16, R 0 to 2,500). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Takings are price times tickets, so R equals six hundred p minus forty p **squared**. The vertex is at minus six hundred over minus eighty, which is seven point **five**. At seven dollars fifty, the cinema sells three hundred tickets, so the greatest takings are two thousand two hundred and fifty **dollars**. If you got minus seven point five, a minus sign went missing. A price can't be **negative**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "price $p", "600 − 40p tickets" (underlined as used). Rows, 52 px: on "squared" "R = p(600 − 40p) = 600p − 40p²"; on "five" "p = −600/(2 × −40) = 7.5"; on "dollars" "tickets 600 − 300 = 300; R = 7.5 × 300 = 2250". Framed answer (green): "$7.50 a ticket gives the greatest takings, $2250"; the picture draws the curve with its ring. On "negative" a red slip "p = 600/(−80) = −7.5" writes and is crossed (hand caption "−b/(2a): −600/(−80) = +7.5"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A bakery stall's daily profit from x batches of muffins is P equals minus five x squared plus eighty x minus one hundred and ninety-five dollars. Part a, how many batches give the greatest profit, and what is it? Part b, for which whole numbers of batches does the stall make a profit? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A bakery stall's daily profit from selling x batches of muffins is P = −5x² + 80x − 195 dollars. (a) How many batches give the greatest profit, and what is it? (b) For which whole numbers of batches does the stall make a profit?" The full question stays on screen. Picture slot: empty axes (x 0 to 16, P −200 to 150). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> For part a, minus eighty over minus ten is **eight** batches, and P is minus three twenty plus six forty minus one ninety-five, which is one hundred and twenty-five **dollars**. For part b, P is zero at three and thirteen batches, and positive between them, so four to twelve **batches**. Three and thirteen don't count. There the profit is exactly zero, not a profit at **all**.

Visual: the card shrinks to the top. `GivensStrip`: "P = −5x² + 80x − 195", "(a) greatest", "(b) whole numbers" (underlined as used). Rows, 52 px: on "eight" "x = −80/(2 × −5) = 8"; on "dollars" "P = −5(64) + 640 − 195 = 125". On "batches" "P = 0: x² − 16x + 39 = 0 ⇒ (x − 3)(x − 13) = 0"; the picture draws the curve, amber dots at 3 and 13, dots on the whole numbers 4 to 12 lit green. Framed answer (green): "(a) 8 batches, $125. (b) 4 to 12 batches." On "all" a red slip "3 to 13 batches" writes and is crossed (hand caption "P = 0 there: no profit"). Hold about 1 s.

### 13. handoff
> So a quadratic model's best value is at its vertex, as long as it's allowed, and the answer is said in context. Next, a model with three factors. Cut a square from each corner of a card, thirty by twenty centimetres, and fold up the sides. The tray's volume is x, times thirty minus two x, times twenty minus two x. That's a cubic. How do its factors shape its **graph**?

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to the flat card with its corners cut (`ma11-card-sheet-cut-v1.png`, about 900 px wide, solid), dashed coded fold lines and labels "30 cm", "20 cm" and amber "x" on each corner square; beside it the folded tray `ma11-card-tray-5-v1.png` (480 px). On "volume" the strip "V = x(30 − 2x)(20 − 2x)" writes (52 px), each bracket boxed. On "graph" chips "Three factors: a cubic" and "Next: how a cubic's factors shape its graph". Hold about 2 s. This is w20's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Name variables with units; state the practical domain.
- Revenue = price × quantity. Profit = revenue − costs.
- a < 0: best value at the vertex, x = −b/(2a).
- Check the vertex is allowed; if not, use the end of the domain.
- Answer the question asked, in words, with units.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Build, peak, check, say.* Key: *Build the model with units. Peak at the vertex (a < 0). Check it's in the domain. Say the answer in context.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the cut card, the folded tray, the volume strip and both chips). This is the final frame and w20's opening frame.

## Teaching checks

- **Does it explain causes?** Why the model is a quadratic: a margin that grows times a quantity that shrinks, both linear in p (2, 3). Why the vertex is the best: a < 0 makes it the highest point (3, 4). Why check the domain: a formula can give answers the situation doesn't allow (4, 7). Why "best" and "profitable" differ: the vertex against the roots (5). Why the cap moves the answer: the curve is still rising at the cap (7). Why the answer is said in words: the question is about a truck, not a parabola (4).
- **Misconceptions addressed:** price given for profit (4 crossed) or for revenue (6 crossed); vertex outside the domain (7 crossed); sign errors in −b/(2a) (A1 crossed); break-even points counted as profitable (A2 crossed); "profit per tray" (2).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted truck and tray from the first frame, returning in 2, 3, 4 and 7; the w05 jetty in 6; 2 a new stage every 35 to 55 s; 3 the price slider (menu board, bars, rectangle, readout and curve on one timeline), the best-value ring and the cap wall, the sign sweep; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4, 6 and 7 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the rectangle growing then shrinking as the curve peaks, and the kayak's Δ = 0 meeting the vertex.
- **One idea at a time:** build (2), watch (3), best (4), profitable (5), the method alone (6), the domain (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture slot; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 28 s and 28 s.
- **Avoided double teaching:** the vertex formula (w15), the inequality method (w18), profit and break-even (w13), modelling with units (w12) are used, not re-taught.
- **Syllabus coverage:** `ci6ee9e4ed` model (2, 3; A1), solve (4, 5, 6, 7; A1, A2), justify in context (4, 7; A2 (b); key notes 4, 5).
- **Out of scope by design:** calculus optimisation (Year 12); cubic models (w20).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "At a price of $p per ticket, a cinema sells 600 − 40p tickets for a session. Find the ticket price that gives the greatest takings, and the greatest takings."
Model answer: R = p(600 − 40p) = 600p − 40p². a = −40 < 0, so the vertex is a maximum, at p = −600/(2 × (−40)) = 7.5. R = 7.5 × (600 − 300) = 7.5 × 300 = 2250. A price of $7.50 gives the greatest takings, $2250. Classic mistake (crossed): "p = −7.5".

**Attempt 2 (scene 11; original wording, HSC style, 4 marks suggested).** "A bakery stall's daily profit from selling x batches of muffins is P = −5x² + 80x − 195 dollars. (a) How many batches give the greatest profit, and what is it? (b) For which whole numbers of batches does the stall make a profit?"
Model answer: (a) a = −5 < 0, so the vertex is a maximum, at x = −80/(2 × (−5)) = 8. P = −5(64) + 640 − 195 = 125. Eight batches give the greatest profit, $125. (b) P = 0 when x² − 16x + 39 = 0, (x − 3)(x − 13) = 0, x = 3 or 13. P > 0 for 3 < x < 13, so the stall makes a profit for 4 to 12 batches (at 3 and 13 the profit is exactly $0). Classic mistake (crossed): "3 to 13 batches".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Truck model | trays 500 − 20p; kept p − 5; fixed $720; P = (p − 5)(500 − 20p) − 720 = −20p² + 600p − 3220; 0 ≤ p ≤ 25 | 2, 3 |
| Sample values | p = 10: 300 trays, P = 780; p = 15: 200; p = 20: 100 | 2, 3 |
| Best price | p = 15; P = 1280; 200 trays | 4 |
| Profitable | p² − 30p + 161 < 0: 7 < p < 23 | 5 |
| Site `we-3` | R = p(40 − 2p) = 40p − 2p²; p = 10; R = 200; w05's Δ = 1600 − 8T = 0 at T = 200 | 6 |
| Cap | p = 12: 260 trays, kept $7, P = 1100 | 7 |
| A1 | R = 600p − 40p²; p = 7.5; 300 tickets; R = 2250; crossed −7.5 | 9, 10 |
| A2 | P = −5x² + 80x − 195; x = 8, P = 125; zeros 3, 13; 4 to 12 batches | 11, 12 |
| Handoff | V = x(30 − 2x)(20 − 2x) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- (p − 5)(500 − 20p) − 720 = −20p² + 600p − 3220; −600/(2 × −20) = 15; value at 15 is 1280; 500 − 20(15) = 200.
- Roots 7 and 23; Δ of p² − 30p + 161 is 256; P > 0 on (7, 23).
- Value at 10 is 780 (300 trays); value at 12 is 1100 (260 trays); value at 11 is less than 1100.
- p(40 − 2p): vertex 10, value 200.
- p(600 − 40p): vertex 7.5, value 2250; 600 − 40(7.5) = 300.
- −5x² + 80x − 195: vertex 8, value 125; roots 3, 13; positive for whole x = 4 to 12.

## Memory aid check

- **"Build, peak, check, say."** Original. Meaning, as said in scene 8: build the model with named variables and units; find the peak at the vertex when a < 0 (x = −b/(2a), then substitute); check the vertex is inside the practical domain and makes sense (whole items); state the answer to the question asked, in context, with units. Assumptions checked: "peak" assumes a < 0 for a maximum (for a minimum, the vertex is the lowest point, said in w15); a vertex outside the domain sends the answer to the domain's end (7). It helps a new case: a ticket price model with a vertex at $7.50 is allowed and in cents; a vertex at −$2 is not, so check the domain's end. Introduced after the causes in 2 to 7.
- **Considered, not used:** "Price isn't profit" (one trap only; kept as a crossed slip).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,849 characters**, 14 scene headings. Characters per scene (1 to 14): 377, 749, 532, 557, 537, 701, 513, 161, 213, 387, 317, 363, 367, 75.

At 13.3 characters per second the speech is about 440 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the model card's slots (2), the price slider's sweep (3), the domain checks (4), the sign sweep (5) and the cap wall (7), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 526 s (8 min 46 s)**, inside the 5,500 to 6,800 character band and about 44 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 6's "Back then, delta said two hundred was the most it could take. The vertex says the same, and at which price." (keep the jetty badge and its chip); scene 1's "We met a profit model like this with the hoodies, but we didn't ask where it came from, or which price is best." Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w19` (route math-a11-w19). Explainer folder `src/explainer/lessons/math-a11-w19`; build inputs in `docs/production/claude-pm/lessons/math-a11-w19/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-best-price, build-model, watch-price-rise, best-in-context, profitable-range, worked-kayak, capped-price, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 34 s | 1 | w18's frame; the truck's price too low and too high |
| 34 to 94 s | 2 | Building the model slot by slot |
| 94 to 139 s | 3 | The price slider: bars, rectangle and the curve drawing |
| 139 to 188 s | 4 | The vertex and the answer in context |
| 188 to 234 s | 5 | Profitable between $7 and $23 |
| 234 to 292 s | 6 | g01 board with the kayak callback |
| 292 to 331 s | 7 | The capped price |
| 331 to 347 s | 8 | Framed memory card |
| 347 to 448 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 448 to 478 s | 13 | The cut card and folded tray: a cubic |
| 478 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w18's last frame continues into scene 1 (identical frame); 1 to 2 camera continue (the truck shrinks); 2 to 3 clear change; 3 to 4 camera continue (the plot grows); 4 to 5 camera continue; 5 to 6 clear change; 6 to 7 clear change back to the truck's plot; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w19-learning-review.md`, `science_check` = `checks/m-a11-w19-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-delivery-van-v1.png` (a delivery van, not a food truck with a serving window; not used); `ma12-concert-ticket-v1.png` (reused for attempt 1's picture); `ma11-kayak-jetty-v1.png` is commissioned in w05's brief (reused as the callback badge). No food-truck or dumpling plate exists.

Need (painted, new; see the Codex asset brief): `ma11-food-truck-v1.png`, `ma11-dumpling-tray-v1.png` (both also w18's handoff). w20's `ma11-card-sheet-cut-v1.png` and `ma11-card-tray-5-v1.png` are commissioned in w20's brief and must be painted before this video's build (scene 13). Reused: `ma11-kayak-jetty-v1.png` (w05), `maths/ma12-concert-ticket-v1.png`.

Coded (studio kit): every slider, bar, rectangle, readout, curve, ring, wall, bracket, model card, working board, question card, the countdown, hand tags, the framed card and key notes; the menu-board price.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator`, `ModelCard` (w12), `SignSweep` (w18), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (new kit-needs row w19):
1. **`PriceProfitRig`** (new; course-neutral for later optimisation lessons): props `price(t)`, `quantity(p)`, `margin(p)`, `fixed`, `domain`, `cap?`, `plateBoard` (the menu board rectangle from the plate's sidecar). Draws two bars, their product rectangle with a fixed-cost strip, a live readout and the drawn curve; locks the best-value ring at the computed vertex or, with a cap, at the cap. Checks: at p = 10, 15, 12 the readout is 780, 1280, 1100; the ring locks at 15 with no cap and at 12 with a cap of 12.
2. **Menu-board text slot** (lesson folder): coded price text placed in the painted board's rectangle from the sidecar.

## Codex asset brief (Maths A11 W19, a food truck and a tray of dumplings; also w18's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w19.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and **before the w18 build** (w18's final frame uses both plates). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; no text, logos, prices, people, hands, faces, pets, sky, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma11-food-truck-v1.png`: a small food truck side-on, serving hatch open with an empty counter shelf, a **blank** chalk menu board (a clean dark rectangle with a timber frame) mounted beside the hatch, an awning, 2000 × 1200 px. No one inside or near the truck.
2. `ma11-dumpling-tray-v1.png`: a takeaway tray of ten steamed dumplings in a paper-lined cardboard tray, three-quarter view from above, 900 × 600 px.

Report in a sidecar `ma11-food-truck-v1.json`, in file pixels: the menu board's inner rectangle (four corners) and the counter shelf's top line. Report inspection on the paper background (`#f6f1e7`) at 1,200 px wide, the alpha checks, and the truck with a test price "$15" set in the board rectangle.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the syllabus quote matches the route-inputs JSON exactly, and no site module label (including "MAV-11-01", S11-10) appears.
3. Confirm the scope of every learner-visible general claim: "a negative a means the vertex is the highest point" (3, 4); "the best price is at the vertex, as long as it's allowed" (4, 7, 13); "if the vertex is outside, use the end of the domain" (7, key note 4; a < 0 and the vertex beyond that end); "best" and "profitable" as different questions (5); S11-04 wording: p − 5 is never called "profit per tray" (2); the model language ("from past markets").
4. Confirm the site's `we-3` keeps its answer ($10, $200).
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a curve, vertex or answer.
6. Confirm the opening matches w18's final frame and scene 13's frame is w20's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, pets, text, prices or logos.

## YouTube metadata (draft)

Title: Quadratic Models: Finding the Best Price | Year 11 Maths Advanced

(Title length: 66 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson19.sa.html

What price should a food truck charge for a tray of dumplings? Build a quadratic model from the situation, with named variables, units and limits: revenue is price times quantity, and profit takes away the costs. The best value is at the parabola's vertex, but only if it's allowed, so check the practical domain and say the answer in context. See why "best price" and "profitable prices" are two different questions, meet the kayak model again, and find out what happens when a price cap puts the vertex out of reach. A memory aid: build, peak, check, say. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Model and solve practical problems involving quadratic functions and justify conclusions in the context of the problem"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: linear models and break-even; the vertex and x = −b/(2a); quadratic inequalities. Next: Cubic graphs: how the factors shape the curve.

#Year11Maths #MathsAdvanced #Quadratics #HSCScience

## Open decisions

- **1. Root ruling 5 (root).** The truck is a price-times-quantity profit model, which the route's stop boundary requires; it adds costs, a domain and a profitable range. Site `we-3` (the kayak numbers) is used as a stated callback, not a new anchor. Root confirms, or names a different anchor type.
- **2. The hoodie's best price (root, with w18 open decision 2).** Not answered here, to keep the hook short; add "the hoodies peak at $40" to scene 1 only if root wants the w18 thread closed.
- **3. The cap scene (learning review).** Scene 7 is beyond the site's examples; it carries "check the vertex lies in the practical domain" (the pack's second trap). The reviewer checks it is not a distraction.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w19-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w12, w13 and w15; check that the model is built, not handed over; that the rectangle shows why the curve rises then falls; that the context sentence is modelled; that the callback to w05 helps rather than distracts), then the Codex maths check and error check, then voicing and a build to grade A.
- The price slider carries the explanation; judge it at playback speed, not from stills. Every bar, rectangle, readout and ring must be computed from the same model as the displayed curve.
