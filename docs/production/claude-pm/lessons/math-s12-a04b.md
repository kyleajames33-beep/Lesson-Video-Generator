# Maths S12 A04b: How do we find break-even, and profit or loss, in a spreadsheet? Building columns for n, cost, revenue and profit, filling down, the sign change, refining the step, and checking with algebra (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`; ruling 8 splits the outline's a04 into a04a and a04b, which share the outline number and both keep the Standard 1 and Standard 2 codes). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,229 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 482 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-a04b-learning-review.md` (summary `../checks/m-s12-a01-a06-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-a01-a06-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 3 (filling down shown, not explained): **accepted**, reviewer's sentence and visual. "When you fill down, the A two in each formula changes to A three, A four, and so on, so every row uses its own number of tickets." On "A three, A four" the bar shows B3's and B4's formulas with "A3" and "A4" ringing amber, then B5 as planned; the hand tag becomes "fill down: A2 becomes A3, A4 ...".
2. Should fix, scene 5 and feedback 2 (the check is algebra only): **accepted**, reviewer's wording (root's decision 1). Scene 5: "We can check with break-even from last time. Each ticket brings in a hundred and thirty dollars and costs eighty-five for catering, so it pays back forty-five dollars. Six thousand five hundred divided by forty-five is about a hundred and forty-four point four." "130n = 6500 + 85n, 45n = 6500" is a grey, unspoken row tagged "Standard 2". Scene 3 now gives the "+450" its reason: "because each ticket pays back forty-five", with the grey chip "10 tickets × $45 = $450". Feedback 2: "Each stand pays back nine dollars, so break-even is eight hundred divided by nine, about eighty-eight point nine", with "12n = 800 + 3n, 9n = 800" as a grey "Standard 2" row. Key note 5 now reads "Check: fixed cost ÷ what each one pays back; round up." (was "Check with R = C, then round up."), and scene 1's grey recall chip reads "a04a: fixed ÷ pay-back". Scene 5's build id becomes `check-and-price-change`.
3. Optional, attempt 1 ("Between which two rows" invites row numbers): **applied**. Card and narration: "Between which two numbers of meals is the break-even point?" The model answer is updated to match.
4. Optional, scene 5 (graph window): **applied**. The graph runs from $12,000 to $22,000, so revenue after the $135 edit ($21,600 at 160 tickets) stays on the grid.

Housekeeping: the description's "Next" line now names a05 by its new title (root ruling 15). Root's decision 6: no second worked example, no absolute references, and the site's numbers stay in both attempts. Open decisions closed: 1 (root ruling 14 accepted $130), 2 (no absolute references, root's decision 6) and 3 (site numbers kept, root's decision 6). Joins unchanged: scene 1 opens on a04a's final frame; scene 11 is still a05's opening frame.

Narration 5,229 characters by script (Revision 1: 5,009), about 482 s with holds; speech before the notes about 388 s, under the 570 s cap. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: sixth video of Year 12 Mathematics Standard (2024), outline playlist order 4 (second half, root ruling 8), Algebraic relationships. Shared by Standard 1 and Standard 2. Standard 1's wording asks students to use a spreadsheet "to model the problem", so the video builds the spreadsheet from empty cells, not only reads one. Pre-design pack: `../pre-design/maths-standard/math-s12-a04.md` (the "a04b" half of its suggested split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/algebraic-relationships/lesson02.sa.html` (SHA256 `779d05e6c788c6a7e3bdb540129e1209467a8d4f143da218463f9865f601691f`; card 07's columns, formulas and "the break-even is where D changes sign"; `we-3`'s "That is what a spreadsheet gives you: a bracket" and its numbers, used in attempt 2; SA 3's food van rows, used in attempt 1). Route entry: `math-s12-a04` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; one new painted plate (a formal table setting); the spreadsheet, graph and board coded.

Owner rules applied: as a01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, every step said in words before its symbols, a short "why this matters", g01-style boards, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (events: a school formal), Australian spelling, no em dashes, money and decimals spoken naturally, conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Algebraic relationships, Simultaneous linear equations), quoted from `../../programme/maths-standard-route-inputs-1.json`:

Standard 2:
- `ciaa0d09e2`: "Identify the break-even point and solve problems involving profit and loss using a spreadsheet"
- `ci7ff6c8c4`: "Use simultaneous equations to model and analyse the break-even point where cost and revenue are represented by linear equations" (revisited: the algebra check in scene 5)

Standard 1:
- `ci8b3fb7f8`: "Identify the break-even point and solve problems involving profit and loss by using a spreadsheet to model the problem"
- `cic9643bd9`: "Use simultaneous equations to model and analyse the break-even point of a problem where cost and revenue are represented by linear equations" (revisited)

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

**Boundary:** starts from a04a's final frame exactly (the painted formal table with the card "venue and DJ: $6,500", "catering: $85 a guest", "tickets: $130 each"; an empty spreadsheet with columns A to D and rows 1 to 7, the formula bar empty, the cursor on A1; chips "how many tickets?", "Next: break-even in a spreadsheet", "?"). Recalls a04a (C = fixed + variable × n, R = price × n, break-even where C = R, profit = R − C, round up) and Year 11 (spreadsheet formulas) in a phrase or grey chip each. Teaches: a spreadsheet's cells, columns and rows; building four columns (n, cost, revenue, profit) with formulas that start with "=" and use "*" for times; filling down; reading the break-even as the place where the profit column changes sign; that a table only brackets break-even, so the step is refined to find the first profitable row; checking with C = R (rounding up); changing one number in a formula and watching every row update. Stops at linear break-even in a spreadsheet. Not taught: absolute cell references; non-linear profit (a11a, a11b).

## Decisions

- **Anchor: a school formal (painted plate, live).** Venue and DJ $6,500, catering $85 a guest, tickets $130: C = 6500 + 85n, R = 130n, P = 45n − 6500; rows of 10 from 100 to 160 tickets put the sign change between 140 (−$200) and 150 (+$250); rows of 1 put the first profit at 145 (144: −$20; 145: +$25); the pay-back check gives 6500 ÷ 45 = 1300/9 ≈ 144.4. Every Year 12 student knows a formal, and a committee really does build this spreadsheet. Events; the pack's question 2 context, with the ticket price changed from $135 to $130 so that break-even is not a whole number and the bracket idea is needed; the pack's own $135 returns in scene 5 as the "change one number" demonstration (break-even exactly 130). Plate: a round table set for a formal (centrepiece, place settings, blank place cards); no people.
- **Join.** Scene 1 opens on a04a's final frame exactly; the formal plate is solid from the first frame.
- **No absolute references.** To keep Standard 1 within reach, the price change in scene 5 edits the number inside the revenue formula and fills down again; "$" cell references are not introduced (author note).
- **Simulations (standard item 3).**
  1. **Spreadsheet build and fill** (scenes 2, 3; new `SpreadsheetGrid`): typed headers, formulas shown in the formula bar for the active cell, the fill handle dragged down, rows computing one after another; profit cells shade grey (negative) or teal (positive) as they compute.
  2. **Refine the step** (scene 4): the grid scrolls to a new block with n from 140 to 150 in steps of 1; rows compute; the sign change between 144 and 145 rings amber.
  3. **Change one number** (scene 5): the "130" in C2's formula is edited to "135" and filled down; every revenue and profit cell recomputes in a ripple, the shading moves, and the profit at 130 tickets lands on exactly $0.
  4. **Graph beside the grid** (scene 5): the cost and revenue lines from a04a, with the grid's rows plotted as dots, so the sign change and the crossing are seen as the same thing.
- **Colour roles (fixed for a04a and a04b).** Cost and column B **violet**; revenue and column C **teal**; profit column D shaded grey for a loss and teal for a profit; the break-even bracket and sign-change ring **amber**; answer **green**; mistake **red**, crossed slips only. Column A (n) and formulas in ink.
- **Large type, handwritten voice.** Spreadsheet cells 40 px (current row 44 px), column letters and row numbers 32 px, formula bar 44 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "cell A2", "= means calculate", "* means times", "fill down: A2 becomes A3, A4 ...", "loss", "profit", "sign change here", "a bracket, not the answer", "step of 1", "first profit", "same answer", "one change, every row", "R − C, not C − R". At most two live at once.
- **Stage changes (standard item 2).** a04a's frame and the formal (1); the grid built column by column (2); filled down with the sign change (3); the refined block (4); the pay-back check, graph beside the grid and the price change (5); framed card (6); question cards (7 to 10); the profit column and a phone's view count for a05 (11); key notes (12).
- **Worked example (g01-style).** The formal (scenes 2 to 5) is the worked example, with the task strip "How many tickets must be sold to make a profit?" and a framed answer "145 tickets". Crossed slip (4): "break-even at 140 tickets" (caption "140 is still a loss of $200").
- **Memory aid.** Framed card: "Look for the sign change in the profit column." Key line: "Last negative row and first positive row bracket break-even. Refine the step to find the first profit."
- **Visual surprise.** One number changes in one formula, and every row recomputes at once; the profit at 130 tickets lands on exactly $0 (scene 5).
- **Site notes.** No site error in card 07 or `we-3`. `we-3` (fixed $800, $3 a unit, $12 price) becomes attempt 2 in an original context (phone stands); SA 3 (food van) becomes attempt 1 with original wording. The food stall (MS-04, MS-05) is not used.
- **Plain meanings at first use.** Spreadsheet ("a grid of cells that can calculate"); cell ("one box, named by its column letter and row number, like A2"); formula ("a calculation the cell does; it starts with an equals sign"); fill down ("copy a formula into the rows below, where it updates to each row"); bracket ("two rows that trap the break-even between them").
- **Attempts (original wording, site numbers).** A1 (site SA 3 numbers): a food van's rows at 40, 60 and 70 meals (cost 600, 700, 750; revenue 440, 660, 770); between 60 and 70; D2 = C2 − B2; crossed "=B2-C2" (caption "that's cost minus revenue"). A2 (site `we-3` numbers): phone stands, fixed $800 a month, $3 a stand, $12 each; B2 =800+3*A2, C2 =12*A2; break-even about 88.9, so 89 stands (88: loss of $8; 89: profit of $1); crossed "88 stands" (caption "88 is still a loss").
- **Mistake scene:** none separate. A bracketing row stated as break-even (4 crossed, A1 said); profit as C − R (A1 crossed); rounding down (A2 crossed); a formula without "=" (2, said).
- **Cause chain taught, in order:** (1) each column is one quantity, and a formula makes the cell calculate it from n, so one row is one possible night (2); (2) filling down repeats the same formula for every n, so the whole table follows the model (3); (3) profit goes from negative to positive only where cost and revenue cross, so the sign change traps break-even between two rows (3, 4); (4) a table only shows the rows you chose, so a smaller step narrows the bracket to the first profitable whole number (4); (5) the pay-back division gives the same break-even, which is why the spreadsheet can be trusted; and because every row uses the same formula, changing one number changes every row (5).
- **Entry knowledge (route):** a04a (C, R, break-even, profit = R − C, round up); Year 11 Standard f08 (spreadsheet formulas) and l05 (a linear model in a spreadsheet; partial on the site). Recalled in a phrase or grey chip; the plain meanings above make the video self-contained for students who have not used formulas.
- **Handoff (to math-s12-a05, "How do tables, graphs and equations show exponential growth and decay?").** Scene 11: left half, the formal spreadsheet's columns A and D only (rows 100 to 160 in steps of 10, profits −2000, −1550, −1100, −650, −200, 250, 700, shaded grey and teal), with "+450" arrows between consecutive profit cells and a hand tag "adds $450 each row"; right half, the phone plate `ma12-phone-v1.png` (760 px tall) with a coded video app on its screen: a play-button thumbnail and a small table "day 0: 100 views", "day 1: 200", "day 2: 400", "day 3: 800" (44 px), and grey "?" arrows between the rows; chips "each day: + ? or × ?", "Next: exponential growth" and "?". No ratio is stated. This is a05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Formal: C = 6500 + 85n; R = 130n; P = 45n − 6500. Rows of 10: n = 100, 110, …, 160: C 15000, 15850, 16700, 17550, 18400, 19250, 20100; R 13000, 14300, 15600, 16900, 18200, 19500, 20800; P −2000, −1550, −1100, −650, −200, 250, 700. Rows of 1: P(144) = −20 (C 18740, R 18720); P(145) = 25 (C 18825, R 18850). Break-even 6500/45 = 1300/9 ≈ 144.44.
  (b) Price $135: P = 50n − 6500; P(130) = 0 (C = R = 17550); P(120) = −500; P(140) = 500.
  (c) A1: C = 400 + 5n, R = 11n: 40: 600, 440 (−160); 60: 700, 660 (−40); 70: 750, 770 (+20); break-even 66.7 (first profit 67, $2; not asked).
  (d) A2: C = 800 + 3n, R = 12n: 9n = 800, n ≈ 88.89; 88: 1064, 1056 (−8); 89: 1067, 1068 (+1).
  (e) Pronunciations: "A two"; "equals six thousand five hundred plus eighty-five times A two"; "equals C two minus B two"; "a hundred and forty-four point four".
  (f) Absolute references ($G$1) would let the price sit in its own cell; left out for Standard 1 (open decision 2).

Main question: *A school formal costs $6,500 plus $85 a guest, and tickets are $130. How many tickets must the committee sell, and how does a spreadsheet find break-even, profit and loss?*
Entry knowledge (a04a; Year 11 Standard f08, l05): C, R and break-even; spreadsheet formulas.
Stops after: building and filling the four columns, the sign change, refining the step, the algebra check and a one-number change. No absolute references, no non-linear profit.
Handoff: math-s12-a05: "each spreadsheet row added $450; a video's views go 100, 200, 400, 800: adding, or something else?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): cost and column B violet; revenue and column C teal; profit cells grey (loss) or teal (profit); bracket amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the formal's spreadsheet
> Here's the school formal. The venue and DJ cost six thousand five hundred dollars, however many people come. Catering is eighty-five dollars a guest, and tickets are a hundred and thirty dollars each. The committee needs to know how many tickets to sell before the formal stops losing money. They could draw a graph, or solve the algebra. But a spreadsheet shows every possible number of tickets at once, and if a price changes, the answer updates by **itself**. That's why businesses, clubs and committees use them. So how do we find break-even, and profit or loss, in a **spreadsheet**?

Visual: opens on a04a's final frame exactly (the formal table plate `ms12-formal-table-v1.png` with its card, the empty spreadsheet with the cursor on A1, chips). On the first sentence the "Next" chip fades. On "six thousand five hundred dollars" the card's first line pulses with a violet tag "fixed"; on "eighty-five dollars a guest" a violet tag "variable"; on "a hundred and thirty dollars each" a teal tag "price". On "graph, or solve the algebra" two small grey chips "a04a: graph", "a04a: fixed ÷ pay-back". On "itself" the empty grid's cells ripple once, hand tag "updates by itself". On "spreadsheet" (last bold) heading "Break-even in a spreadsheet" writes on, and the question chip "How many tickets?" moves to the top right.

### 2. set up the columns
> A spreadsheet is a grid of cells. The columns have letters, and the rows have numbers, so each cell has a name, like A **two**. Put the number of tickets, n, in column A. Column B is the cost. In cell B two, type a formula. Equals, six thousand five hundred, plus eighty-five times A **two**. In a spreadsheet, times is written with a star, and A two means "the number in cell A two". Column C is the revenue. Equals, a hundred and thirty times A **two**. And column D is the profit, revenue minus cost. Equals, C two minus B **two**. Every formula starts with an equals sign, so the spreadsheet knows to calculate it, rather than just show the **text**.

Visual: stage change: the plate shrinks to a 300 px badge at the top left with its card as a 30 px strip; the grid (`SpreadsheetGrid`, 1,500 × 760 px) fills the frame. On "grid of cells" the column letters A to D and row numbers 1 to 8 light; on "two" (first bold) cell A2 rings, hand tag "cell A2". Headers type into row 1, 40 px: A1 "tickets n", B1 "cost ($)" (violet), C1 "revenue ($)" (teal), D1 "profit ($)". On "type a formula" the cursor moves to B2; on "two" (second bold) the formula bar (44 px) shows "=6500+85*A2" (violet), typed as spoken, hand tag "= means calculate"; on "star" the "*" circles, hand tag "* means times". On "two" (third bold) the cursor at C2, the bar "=130*A2" (teal). On "two" (fourth bold) the cursor at D2, the bar "=C2-B2". On "text" a grey ghost cell "6500+85*A2" with no "=" shows the formula as plain text, crossed in grey, then fades.

### 3. fill down and find the sign change
> Now type the ticket numbers down column A, a hundred, a hundred and ten, and so on, up to a hundred and sixty. Then fill the formulas down, so every row does the same **calculation** for its own number of tickets. When you fill down, the A two in each formula changes to A three, A four, and so on, so every row uses its own number of tickets. At a hundred tickets, the profit is minus two thousand dollars, a loss. Each extra ten tickets adds four hundred and fifty dollars, because each ticket pays back forty-five, so the losses shrink. At a hundred and forty tickets, the profit is minus two **hundred**. And at a hundred and fifty, it's plus two hundred and fifty, a **profit**. So the profit changes sign between a hundred and forty and a hundred and fifty tickets. The break-even point is somewhere in **between**.

Visual: camera continue. Column A fills: 100, 110, 120, 130, 140, 150, 160 (40 px). On "fill the formulas down" the fill handle drags from B2:D2 to row 8 (simulation 1); on "calculation" the rows compute top to bottom (about 2 s): B 15000 … 20100 (violet), C 13000 … 20800 (teal), D −2000, −1550, −1100, −650, −200, 250, 700, each D cell shading grey or teal as it computes. On "A three, A four" clicking B3 then B4 shows "=6500+85*A3" and "=6500+85*A4" in the bar, the "A3" and "A4" ringing amber in turn; then B5 shows "=6500+85*A5", hand tag "fill down: A2 becomes A3, A4 ...". On "minus two thousand" D2 rings grey, tag "loss". On "four hundred and fifty" "+450" arrows appear between consecutive D cells; on "pays back forty-five" a grey chip "10 tickets × $45 = $450". On "hundred" (bold) D6 (−200, at 140) rings; on "profit" D7 (250, at 150) rings teal, tag "profit". On "between" an amber bracket joins rows 6 and 7, hand tag "sign change here".

### 4. a table only brackets it
> A table like this can't show the exact break-even. It only traps it between two rows, like a **bracket**. So zoom in. Start at a hundred and forty, and go up by one each row. At a hundred and forty-four tickets, the profit is minus twenty dollars, still a **loss**. At a hundred and forty-five, it's plus twenty-five dollars, the first **profit**. So the committee needs to sell a hundred and forty-five tickets. Saying break-even is at a hundred and forty is the slip. That row is still a loss of two hundred **dollars**.

Visual: camera continue: the step-10 block shrinks to the left third (bracket kept, 30 px); at the right a new block (simulation 2), 44 px, with a task strip above it, 44 px: "How many tickets must be sold to make a profit?" On "bracket" hand tag "a bracket, not the answer". On "zoom in" the new block's A column fills 140, 141, …, 150 (hand tag "step of 1") and the rows compute; D cells: −200, −155, −110, −65, −20, 25, 70, 115, 160, 205, 250, shaded. On "loss" the 144 row rings grey (C 18,720, B 18,740, D −20). On "profit" (bold) the 145 row rings teal (C 18,850, B 18,825, D 25), hand tag "first profit"; framed answer (green): "145 tickets". On "dollars" a red slip "break-even at 140 tickets" writes and is crossed (caption "140 is still a loss of $200").

### 5. check with algebra, then change a price
> We can check with break-even from last time. Each ticket brings in a hundred and thirty dollars and costs eighty-five for catering, so it pays back forty-five dollars. Six thousand five hundred divided by forty-five is about a hundred and forty-four point **four**. It's not whole, so round up, to a hundred and forty-five, just as the spreadsheet **showed**. Here's what a spreadsheet does best. Suppose the committee raises the ticket price to a hundred and thirty-five dollars. Change the hundred and thirty in the revenue formula, and fill down again. Every row recalculates at once, and now the profit is exactly zero at a hundred and thirty **tickets**. One change, and the whole plan **updates**.

Visual: stage change: the grid at the left 55 per cent (step-10 block), at the right the a04a-style graph (n 100 to 160, $12,000 to $22,000, so the $135 revenue line's $21,600 at 160 tickets stays on the grid; cost violet, revenue teal), with the grid's seven rows plotted as dots on both lines (simulation 4). Rows above the graph, 44 px: on "pays back" "$130 − $85 = $45 a ticket"; on "four" "6500 ÷ 45 ≈ 144.4" (amber), the crossing ringed between the 140 and 150 dots. Beside them a grey row tagged "Standard 2", 32 px, not spoken: "130n = 6500 + 85n, 45n = 6500". On "showed" an arrow from "round up: 145" to the framed answer "145 tickets", hand tag "same answer". On "a hundred and thirty-five dollars" the cursor goes to C2 and the bar shows "=130*A2"; the "130" is selected and retyped "135" (simulation 3); on "fill down again" the fill runs and every C and D cell recomputes in a ripple; the revenue line on the graph swings steeper. On "tickets" the row for 130 tickets rings amber with D "0" (C 17,550, B 17,550), and the graph's crossing moves to n = 130. On "updates" hand tag "one change, every row".

### 6. memory aid
> Here's the summary. Build four columns, n, cost, revenue and profit. Fill down, and look for the row where the profit changes from negative to positive. Those two rows bracket break-even. Then make the step smaller, and the first positive row is the first **profit**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small profit column with grey cells turning teal and an amber bracket at the change. Main line, hand font 56 px: "Look for the sign change in the profit column." On "profit" the key line, 40 px: "Last negative row and first positive row bracket break-even. Refine the step to find the first profit." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Part of a food van's spreadsheet is shown, for forty, sixty and seventy meals. Between which two numbers of meals is the break-even point? And what formula goes in cell D two, for the profit? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Part of a food van's spreadsheet is shown. (a) Between which two numbers of meals is the break-even point? (b) Write the formula for the profit in cell D2." Picture slot: a coded spreadsheet (40 px): headers "A: meals n", "B: cost ($)", "C: revenue ($)", "D: profit ($)" (D empty); row 2: 40, 600, 440; row 3: 60, 700, 660; row 4: 70, 750, 770. No shading. The full question and table stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> At sixty meals, revenue is below cost, a loss of forty dollars. At seventy, revenue is above cost, a profit of twenty **dollars**. So break-even is between sixty and seventy meals. The profit formula is equals C two minus B **two**, revenue minus cost. Writing B two minus C two is the slip. That's cost minus revenue, so every sign comes out **backwards**.

Visual: the card shrinks to the top (30 px). Column D fills: "−160" (grey), "−40" (grey), "+20" (teal); on "dollars" the rows 60 and 70 bracket amber, framed answer (green) "between 60 and 70 meals". On "two" the formula bar "=C2-B2", framed green. On "backwards" a red slip "=B2-C2" writes and is crossed (caption "R − C, not C − R"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A business making phone stands has fixed costs of eight hundred dollars a month. Materials cost three dollars a stand, and each stand sells for twelve dollars. With n in cell A two, write the formulas for cost in B two and revenue in C two. Then find the smallest number of stands that makes a profit. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A business making phone stands has fixed costs of $800 a month. Materials cost $3 a stand, and each stand sells for $12. (a) With n in cell A2, write the formulas for cost in B2 and revenue in C2. (b) Find the smallest number of stands that makes a profit." Picture slot: an empty coded spreadsheet, headers "A: stands n", "B: cost ($)", "C: revenue ($)", "D: profit ($)", cells blank. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Cost is equals eight hundred plus three times A two, and revenue is equals twelve times A **two**. Each stand pays back nine dollars, so break-even is eight hundred divided by nine, about eighty-eight point **nine**. At eighty-eight stands, it's still a loss of eight dollars. At eighty-nine, a profit of one dollar, so eighty-nine **stands**. Answering eighty-eight is the slip. Always round break-even **up**.

Visual: the card shrinks to the top. Bar rows, 44 px: "B2: =800+3*A2" (violet); on "two" "C2: =12*A2" (teal). On "pays back" row "$12 − $3 = $9 a stand"; on "nine" "800 ÷ 9 ≈ 88.9" (amber); a grey row tagged "Standard 2", 32 px, not spoken: "12n = 800 + 3n, 9n = 800". Two grid rows compute: 88: 1064, 1056, −8 (grey); 89: 1067, 1068, +1 (teal); on "stands" framed answer (green) "89 stands". On "up" a red slip "88 stands" writes and is crossed (caption "88 is still a loss"). Hold about 1 s.

### 11. handoff
> In every one of these spreadsheets, each row added the same amount. For the formal, every extra ten tickets added four hundred and fifty dollars of profit. That's a straight line. But some things don't add. Here's a new video's view count. A hundred views, then two hundred, four hundred, eight hundred. Each day doesn't add the same amount. So what does it do instead? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame: left half, the formal grid's columns A and D only (rows 100 to 160, profits −2000 to 700, shaded); on "four hundred and fifty dollars" "+450" arrows between the D cells, hand tag "adds $450 each row"; on "straight line" a small dotted line through the seven profit points. On "view count" the right half: the phone plate `ma12-phone-v1.png` (760 px tall) with a coded video app on its screen (a play-button thumbnail; a small table, 44 px, "day 0: 100 views", "day 1: 200", "day 2: 400", "day 3: 800", each row writing as spoken). On "doesn't add the same amount" grey "?" arrows between the rows. On "next" chips "each day: + ? or × ?", "Next: exponential growth" and "?". Hold about 2 s. No ratio is stated. This is a05's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Columns: A n, B cost, C revenue, D profit (=C2-B2).
- Formulas start with "="; "*" means times; fill down.
- Break-even lies between the rows where profit changes sign.
- Refine the step to find the first profitable row.
- Check: fixed cost ÷ what each one pays back; round up.

Memory aid (framed card, right side, as in scene 6): *Look for the sign change in the profit column.* Key: *Last negative row and first positive row bracket break-even. Refine the step to find the first profit.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and a05's opening frame.

## Teaching checks

- **Does it explain causes?** Why formulas start with "=": so the cell calculates (2). Why fill down: every row repeats the model for its own n (3). Why the sign change marks break-even: profit is zero only where cost meets revenue (3). Why a table only brackets it: it shows only the rows chosen (4). Why the spreadsheet and the pay-back check agree: both use the same costs and price (5). Why one change updates every row: every row uses the same formula (5).
- **Misconceptions addressed:** a bracketing row as the answer (4 crossed); profit as C − R (A1 crossed); rounding down (A2 crossed); a formula typed without "=" (2).
- **Visual standard, item by item:** 1 the formal plate from the first frame, returning as a badge; 2 a new stage every 40 to 60 s; 3 the grid built, filled and shaded live, the refined block, the price edit rippling through every row with the graph's crossing moving; 4 fixed roles; 5 large type (cells 40 px, current row 44 px); 6 hand tags; 7 a task strip, the build as working rows, a framed answer and a crossed slip; 8 framed card and five bullets; 9 one edit, every row recomputing, $0 landing at 130.
- **One idea at a time:** building (2), filling and the sign change (3), the bracket refined (4), the check and the edit (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 28 s.
- **Avoided double teaching:** a04a's C, R, break-even and rounding are recalled in a phrase; Year 11 spreadsheets in plain meanings.
- **Standard 1 path:** the spreadsheet is built from empty cells ("to model the problem"); the check (scene 5) and feedback 2 use a04a's pay-back route, fixed cost ÷ what each item pays back; the algebra is a grey "Standard 2" row (Revision 2).
- **Syllabus coverage:** `ciaa0d09e2` and `ci8b3fb7f8` (2 to 5, A1, A2; key notes 1 to 4); `ci7ff6c8c4` and `cic9643bd9` (5, A2; key note 5).
- **Out of scope by design:** absolute references; non-linear profit (a11a, a11b).

## Practice questions and model answers

**Attempt 1 (scene 7; original wording, site SA 3 numbers, HSC style, 2 marks suggested, not an official marking scheme).** "Part of a food van's spreadsheet is shown. (a) Between which two numbers of meals is the break-even point? (b) Write the formula for the profit in cell D2." (Rows: 40 meals, cost $600, revenue $440; 60, $700, $660; 70, $750, $770.)
Model answer: (a) Between 60 and 70 meals (a loss of $40 at 60, a profit of $20 at 70). (b) D2: =C2-B2. Classic mistake (crossed): "=B2-C2".

**Attempt 2 (scene 9; original context, site `we-3` numbers, HSC style, 3 marks suggested).** "A business making phone stands has fixed costs of $800 a month. Materials cost $3 a stand, and each stand sells for $12. (a) With n in cell A2, write the formulas for cost in B2 and revenue in C2. (b) Find the smallest number of stands that makes a profit."
Model answer: (a) B2: =800+3*A2; C2: =12*A2. (b) Each stand pays back $12 − $3 = $9, so break-even is 800 ÷ 9 ≈ 88.9 (Standard 2: 12n = 800 + 3n, 9n = 800). At 88: cost $1,064, revenue $1,056, a loss of $8. At 89: cost $1,067, revenue $1,068, a profit of $1. So 89 stands. Classic mistake (crossed): "88 stands".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Formal, rows of 10 | C = 6500 + 85n; R = 130n; P at 100 to 160: −2000, −1550, −1100, −650, −200, 250, 700; +450 each row | 2, 3, 11 |
| Formal, rows of 1 | 140 to 150: P −200, −155, −110, −65, −20, 25, 70, 115, 160, 205, 250; 144: C 18,740, R 18,720; 145: C 18,825, R 18,850 | 4 |
| Pay-back check | 130 − 85 = 45 a ticket; 6500 ÷ 45 ≈ 144.4; round up 145; grey row 45n = 6500; 10 × 45 = 450 a row | 3, 5 |
| Price $135 | P = 50n − 6500; P(130) = 0; C = R = 17,550 | 5 |
| A1 | 40: 600, 440; 60: 700, 660; 70: 750, 770; P −160, −40, +20 | 7, 8 |
| A2 | 12 − 3 = 9 a stand; 800 ÷ 9 ≈ 88.9; grey row 9n = 800; 88: 1064, 1056 (−8); 89: 1067, 1068 (+1) | 9, 10 |
| Handoff | views 100, 200, 400, 800 (no ratio stated) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12a/verify.py` and `verify2.py`, run with `python -I`); Revision 2 values rechecked with SymPy 1.14 in `work/brief-resolve-standard-a1/verify.py` (`python -I`, 53 checks across a01 to a06, 0 failures); Codex to re-check.

- 6500 + 85n and 130n at n = 100, 110, …, 160; 45n − 6500 at the same n: −2000, −1550, −1100, −650, −200, 250, 700.
- 45n − 6500 at n = 140, …, 150: −200, −155, −110, −65, −20, 25, 70, 115, 160, 205, 250; 6500 + 85 × 144 = 18740; 130 × 144 = 18720; 6500 + 85 × 145 = 18825; 130 × 145 = 18850. 6500/45 = 1300/9 = 144.44.
- 135 × 130 = 17550 = 6500 + 85 × 130.
- 400 + 5n and 11n at 40, 60, 70: 600, 440; 700, 660; 750, 770.
- 130 − 85 = 45; 10 × 45 = 450; 12 − 3 = 9; 135 × 160 = 21600 (window top $22,000). 800/9 = 88.89; 800 + 3 × 88 = 1064; 12 × 88 = 1056; 800 + 3 × 89 = 1067; 12 × 89 = 1068.

## Memory aid check

- **"Look for the sign change in the profit column."** with key line **"Last negative row and first positive row bracket break-even. Refine the step to find the first profit."** Original (the idea is the site's card 07: "the break-even is where D changes sign"). Meaning, as said in scene 6: with profit computed as revenue minus cost in each row, break-even lies between the last row with a negative profit and the first with a positive one; a smaller step between those rows finds the first whole number that makes a profit. Assumptions checked: profit = R − C (A1's crossed slip shows the reverse flips the signs); linear cost and revenue with the price above the variable cost, so the profit column rises steadily and changes sign once; a row with profit exactly 0 (scene 5's $135 case) is break-even itself. It helps a new case: profits −300, −100, +100 at 20, 30, 40 items put break-even between 30 and 40. Introduced after scenes 3 to 5.
- **Considered, not used:** "Grey to teal" (tied to this video's colours, not to what a student sees on paper).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,229 characters** (Revision 1: 5,009), 12 scene headings. Characters per scene (1 to 12): 580, 634, 805, 506, 687, 263, 224, 345, 333, 395, 382, 75.

At 13.3 characters per second the speech is about 393 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the grid build and fill (2, 3), the refined block (4), the graph and price-edit ripple (5) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 482 s (8 min 2 s)**, 88 s under the 570 s cap; speech and holds before the notes about 437 s. Feedback speech: about 26 s and 30 s.

No reserve trims are needed (about 88 s of margin); the settling time is generous because the spreadsheet computes on screen in scenes 3 to 5 and students need to watch the cells fill. Do not cut below 5,000 characters.

## Scene list and build ids

Lesson key `m-s12a04b` (route math-s12-a04, second half). Explainer folder `src/explainer/lessons/math-s12-a04b`; build inputs in `docs/production/claude-pm/lessons/math-s12-a04b/` (at voicing).

In order (12 scene headings): hook-formal, set-up-columns, fill-down-sign-change, refine-the-bracket, check-and-price-change, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | a04a's frame; the formal |
| 45 to 110 s | 2 | The grid built column by column |
| 110 to 165 s | 3 | Filled down; the sign change |
| 165 to 210 s | 4 | The refined block; the first profit |
| 210 to 275 s | 5 | Algebra check, graph beside the grid, the price edit |
| 275 to 295 s | 6 | Framed memory card |
| 295 to 385 s | 7 to 10 | Question cards and countdowns, then feedback |
| 385 to 420 s | 11 | Profit column and the phone's view count for a05 |
| 420 to 465 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a04a's last frame continues into 1; 1 to 2 stage change (the grid fills the frame); 2 to 3 camera continue; 3 to 4 camera continue (new block); 4 to 5 stage change (grid and graph); 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a04b-learning-review.md`, `science_check` = `checks/m-s12-a04b-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`): `ma12-phone-v1.png` (viewed: a plain black-screened phone, 971 × 1657, ideal for a coded app screen; reused in the final frame and in a05); `ma12-concert-ticket-v1.png` and `ma12-fundraiser-board-v1.png` exist (listing only; other lessons' objects). No formal or event-table plate exists.

Need (painted, new; see the Codex asset brief): `ms12-formal-table-v1.png` (also a04a's final frame). Reused: `ma12-phone-v1.png` (final frame).

Coded: the spreadsheet (cells, formula bar, fill handle, shading), the graph and dots, the check rows and the grey Standard 2 row, the app screen and view table, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `ScreenApp` (app frame on the phone), the g01 `WorkingBoard` parts (`TaskStrip`, `WorkingRows`, `AnswerFrame`, `MistakeCard`), `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a04; the strand's main new part):
1. **`SpreadsheetGrid`** (new, course-neutral; generalise `FrequencyTable`): an unbranded spreadsheet with column letters, row numbers, a formula bar for the active cell, typed text and formulas, a fill handle that copies a formula down with relative references (B2's "A2" becomes "A5" in B5), row-by-row computation, conditional shading by sign (negative grey, positive teal), row and bracket highlights, a block scroll for a refined step, and an "edit one number" ripple that recomputes dependent cells. Props: `columns`, `rows`, `formulas` (simple arithmetic on same-row cells), `activeCell`, `fill`, `shadeBySign`, `bracket`. Checks: the formal's rows of 10 and rows of 1 reproduce "Numbers used" exactly; editing "130" to "135" gives D = 0 at n = 130; the formula bar shows the relative reference for the active row. Later users: Year 11 Standard f08, l05, e06, e12, m06, m08 and data analysis; Year 12 i05, i11, c06 (kit-needs list).
2. **Rows as dots** (small): a `StudioPlot` layer that plots chosen spreadsheet columns as points. Check: the seven formal rows sit on the cost and revenue lines.

## Codex asset brief (Maths S12 A04b, a formal table; also a04a's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-a04b.md`, route entry math-s12-a04. Paint after the learning review and maths check pass and root gives the go-ahead, and before the a04a build (a04a's final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-round-cake-v1.png` and `maths/ma12-timber-deck-v1.png`; no text, names on place cards, logos, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-formal-table-v1.png` (about 1600 × 1200 px): a round banquet table for a school formal, seen from a slightly raised three-quarter view, with a white tablecloth, a low flower-and-candle centrepiece (unlit candles in glass), eight place settings (plates, cutlery, stemmed water glasses) and small blank folded place cards; four chairs with chair covers and sashes visible around the near side; the floor fades to transparent.

Report inspection on the paper background (`#f6f1e7`) at 760 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-a04b-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every spreadsheet cell, narration value, attempt and key note against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm every formula starts with "=", uses "*" for times and relative references, and that profit is always C − B (revenue minus cost) except in A1's crossed slip.
4. Confirm no table row is called the exact break-even unless its profit is exactly 0 (scene 5's $135 case).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A1's D column empty and unshaded).
6. Confirm scene 1 opens on a04a's final frame and scene 11 states no ratio.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Break-Even in a Spreadsheet: Profit and Loss | Year 12 Maths Standard

(Title length: 69 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson02.sa.html

A school formal costs $6,500 for the venue and DJ plus $85 a guest, and tickets are $130. How many tickets must the committee sell? Build the spreadsheet from empty cells: columns for tickets, cost, revenue and profit, formulas that start with an equals sign, and fill down. Find where the profit column changes sign, refine the step to find the first profitable row, check it by dividing the fixed cost by what each ticket pays back, and watch one price change update every row. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Identify the break-even point and solve problems involving profit and loss using a spreadsheet"
"Use simultaneous equations to model and analyse the break-even point where cost and revenue are represented by linear equations"
Syllabus content, Standard 1:
"Identify the break-even point and solve problems involving profit and loss by using a spreadsheet to model the problem"
"Use simultaneous equations to model and analyse the break-even point of a problem where cost and revenue are represented by linear equations"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

Builds on: Break-even point, profit and loss. Next: Exponential graphs: y = a^x and y = a^(−x).

#Year12Maths #MathsStandard #BreakEven #HSCScience

## Open decisions

- **1. Ticket price $130, not the pack's $135 (root).** Closed: root ruling 14 accepted $130. Revision 1 text: $135 gives a whole break-even (130), which hides the bracket idea; $130 gives 144.4 and needs the refined step. The pack's $135 is used in scene 5 to show a price change, so both numbers appear.
- **2. No absolute references (root).** Closed in Revision 2: none (root's decision 6). Revision 1 text: Editing the number inside the formula and filling down again keeps Standard 1 within reach. If root wants "$" references (they appear in some HSC Standard 2 items), a one-sentence chip can be added in scene 5.
- **3. Site numbers in attempts (root).** Closed in Revision 2: the site's numbers stay (root's decision 6). Revision 1 text: A1 and A2 use the site's SA 3 and `we-3` numbers in original wording and contexts. If root prefers fully original attempts, A2 becomes fixed $900, $4 a unit, $13 each (break-even 100, no rounding), which loses the round-up test.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-a04b-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A; the builder must build `SpreadsheetGrid` before this video. Revision 1 note: student learning review (trace from a04a for a student who has never written a spreadsheet formula; check that the plain meanings of cell, formula and fill down land before they are needed, that the sign change is seen as the crossing, that the refined block is followable at speed, that the price edit's ripple reads as "every row uses the same formula", that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder must build `SpreadsheetGrid` before this video.
