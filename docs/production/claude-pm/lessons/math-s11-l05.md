# Maths S11 L05: How does a spreadsheet build and test a linear model? A skating party's cost filled down a column, the zero row and the constant difference, a chart, a budget found by refining the step, and one price changed (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard designs (`math-s12-a01.md`, `a07.md`, `r12a.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 91). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,234 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 481 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s11-l05-learning-review.md` (summary `../checks/m-s11-l01-l07-learning-review-summary.md`), with root's rulings 1 to 93 in `../checks/root-rulings-maths-standard-outline.md` (ruling 93 accepts every should-fix finding as written). Numbers rechecked with SymPy: `work/brief-review-s11-l/resolve-check.py`. Findings by the review's numbers:

1. Should fix, scene 3 (why test a model you just typed): **accepted**, reviewer's wording, after "really is linear": "That's how you catch a typing slip. If you'd typed equals one fifty, star, eighteen, plus A2, the column would still fill, but the zero row would show two thousand seven hundred, and each step would add just one." Visual: a small grey mini-sheet at the right with "=150*18+A2" in its bar and B values 2700, 2701, 2702, its zero row and "+1" arrows ringed red, hand tag "slip caught"; it fades as the chart arrives.
2. Should fix, scenes 4 and 5 (which rows hold 10 to 14): **accepted**. The refined inputs 10 to 14 sit in rows 2 to 6, so column A keeps equal steps throughout; the step-of-5 inputs also sit in rows 2 to 6. Cell labels corrected: scene 4 "B5 (384)" green and "B6 (402)" red; scene 5 "B4 (390)" green and "B5 (410)" red; the forgotten-fill mini-sheet shows B3 to B6 stale. The chart keeps its (0, 150) start, so "it still starts at a hundred and fifty" holds. No narration change.
3. Ruling 93 (l04's title): the description's "Builds on" line quotes "Interpolation and Extrapolation".

Open decisions closed: 1 (kept, as the reviewer advised) and 2 (ruling 92 accepts trailer hire). Joins unchanged: scene 1 still opens on l04's final frame, and scene 11 (l06's opening) is unchanged. Practice cards and feedback unchanged.

Narration 5,234 characters by script (Revision 1: 5,021), about 481 s with holds, 89 s under the 570 s cap; feedback speech about 28 s and 26 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: fifth video of Year 11 Mathematics Standard (2024) Linear relationships, outline playlist order 13. Year 11 is one course for Standard 1 and Standard 2. Pre-design pack: `../pre-design/maths-standard/math-s11-l05.md`. Site coverage is partial: `maths-standard/year11/formulas-and-equations/lesson06.sa.html` (SHA256 `83c071741dc7f915df11d2dc4da32d05f7f8652705146894de95a55bb0e1df72`) teaches spreadsheet formulas in general (card 02: "A copied formula repeats the same relationship across rows, just as an algebra formula applies for any value of the variable"; `we-3`'s T = 8n + 15); no site lesson builds a linear model in a spreadsheet, so the modelling (a step column, a chart, a target, a parameter change) is original teaching (root ruling 3). Route entry: `math-s11-l05` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit with `SpreadsheetGrid` (ruling 90: built before f08; l05 adds its linked chart); one new painted plate (ice skates, briefed here, painted before l04's build because l04's final frame shows it, ruling 17); the produce scale and apple reused in the handoff.

Owner rules applied: 2024 syllabus only, content point cited by codename in this design and by exact wording in the description; painted plates for real objects and code for diagrams and spreadsheets; no people, hands or faces; one main learner question; one reasoning stage at a time; every step said in words before its symbols (Standard pace); worked example in the g01 layout with a framed answer and a crossed slip; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed memory card; everyday anchors (an ice skating party with a budget, trailer hire); Australian spelling; no em dashes; money spoken naturally; conversational narration with commas for small pauses; no absolute references (as math-s12-a04b); no break-even (a04b owns it).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, common to Standard 1 and Standard 2, Linear relationships), quoted from `../../programme/maths-standard-route-inputs-8.json`:
- `ci80b8ed46`: "Use a spreadsheet to model a linear relationship in a variety of contexts"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

**Boundary:** opens on l04's final frame exactly (the ice skates with "room: $150", "+ $18 a skater", "budget: $400", and an empty spreadsheet with headers "skaters" and "cost ($)"). Recalls f08 (cells, formulas starting with =, * for times, fill down) in a phrase with a04b's vocabulary, l03 (start plus rate) and l04 (a valid range) in a phrase or grey chip. Teaches: an input column filled in equal steps; the output formula =150+18*A2 typed once and filled down, each row using its own row; testing the model: the row where the input is 0 shows the intercept, and a constant difference equal to the rate shows it is linear (with steps of 5, the difference is 5 × the rate); a line chart with the input across; finding when the output first passes a target by bracketing between rows, refining the step, and rounding to suit the context; agreeing with the algebra; editing the rate, filling down again, every row and the chart updating with the intercept unchanged. Stops there. Not taught: break-even with cost and revenue columns (math-s12-a04b); absolute references; direct variation (l06).

## Decisions

- **Anchor: an ice skating party (new plate, live).** The pack's worked example with its exact invented prices: $150 for the room, $18 a skater, a $400 budget; C = 150 + 18n gives 13.9, so 13 skaters ($384; 14 cost $402). The prices are labelled "example prices". The plate is a pair of hire skates, no person. No Year 11 or Year 12 design uses a skating rink (pack grep, 19 Nov).
- **Join.** Opens on l04's final frame exactly. Ends on l06's opening frame: the produce scale `ma11-produce-scale-v1.png` with three apples `ma12-apple-v1.png` on its tray, the sign "$4 per kg" and "no bag fee".
- **Refining the step (pack stop boundary).** The budget is found in a spreadsheet the way the syllabus intends: steps of 5 bracket the target between 10 and 15 skaters, then steps of 1 from 10 find 13 and 14. Rounding down is justified by the context (whole skaters, a budget limit). The algebra (n ≈ 13.9) is shown as agreement, not as the method.
- **Simulations (standard item 3).**
  1. **Fill-down ripple** (scene 2; `SpreadsheetGrid`): the formula types into B2, the fill handle drags down, each cell computes in turn with a small highlight on its own A cell (A3 for B3 and so on).
  2. **Linked chart** (scenes 3 and 5; the new `SpreadsheetGrid` option): each computed row lights a point on a line chart beside the grid; on the edit to =150+20*A2 the column ripples and the line swings steeper about (0, 150).
  3. **Bracket and refine** (scene 4; `IntervalPicture`): the $400 level drawn on the chart; rows 10 and 15 bracket it (shaded amber); the step changes to 1 and rows 10 to 14 fill, row 13 green and row 14 red.
- **Colour roles (fixed for l01 to l07).** The model's line and output column blue; the rate (18, then 20), the "+18" arrows and the gradient amber; the start (150) and the zero row violet; the input column ink; the budget line and the answer green; over-budget cells red; mistake red, crossed slips only.
- **Large type, handwritten voice.** Spreadsheet cells 44 px (current row 52 px), formula bar 48 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Hand tags: "* means times", "its own row", "zero row: the start", "+18 every row: linear", "input across", "between these two", "steps of 1", "over budget", "round down: whole skaters", "only the rate changed", "fill down again". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The skates and the empty sheet (1); the sheet filling (2); the sheet with its chart (3); the g01 board around the sheet (4); the edit and the swinging chart (5); the framed card (6); question cards (7 to 10); the apples frame for l06 (11); key notes (12).
- **Worked example (g01 layout).** Scene 4: the budget question, found by bracketing and refining in the sheet, checked by algebra. Crossed slip: "13.9 → 14 skaters" (caption "14 costs $402: over budget").
- **Memory aid.** Framed card: "Zero row: the start. Each step: the rate." Key line: "Edit the formula, then fill down again."
- **Visual surprise.** The edit: one keystroke changes 18 to 20 in B2, the fill handle drags once, and every cell below ripples to a new value while the chart's line swings up like a door on a hinge, its hinge fixed at (0, 150). The budget answer drops from 13 to 12 on screen.
- **Site notes.** Lesson06's `we-3` (T = 8n + 15) is the nearest site content; its idea, "one formula, every row", is said in scene 2. No site error applies (MS-82's y = mx + b is not shown; A2's answer uses y = mx + c).
- **Plain meanings at first use.** Spreadsheet, cell, formula, fill down (recalled with a04b's wording: "a grid of cells that can calculate", "one box, named by its column letter and row number", "a calculation the cell does; it starts with an equals sign", "copy a formula into the rows below, where it updates to each row"); constant difference ("the same change from each row to the next"); line chart ("each row as a point, joined in order"); refine the step ("go back to the bracket with smaller steps").
- **Attempts (pack questions).** A1 (pack question 1, the context changed from a party bus to trailer hire so the pack's $45 plus $12.50 an hour is plausible for NSW in 2026): =45+12.5*A2 at A2 = 8 gives 145; interpret 45 and 12.5. Crossed "45 is the cost per hour" (caption "the per-hour number multiplies A2"). A2 (pack question 2): rows 30, 38.5, 47 for A = 0, 1, 2; =30+8.5*A2 and y = 8.5x + 30. Crossed "=8.5+30*A2" (caption "the rate multiplies the input").
- **Mistake scene:** none separate. Rounding 13.9 up (4 crossed); forgetting to fill down again (5); swapped rate and start (A1, A2 crossed); uneven input steps (2 says "equal steps").
- **Cause chain taught, in order:** (1) the formula is the model, written once with a cell reference in place of the letter, so filling down applies it to every input (2); (2) the zero row has no skaters, so it shows only the room fee, the intercept (3); (3) each row adds one skater, so each cost rises by the rate, and a constant difference means a straight line (3); (4) the target falls between two rows, so smaller steps between them find the last row under budget, and whole skaters force rounding down (4); (5) changing the rate changes every row's rate term but not the fee, so the line swings about its start (5).
- **Entry knowledge (route):** math-s11-f08 (`ciffbbbd58`: spreadsheet formulas, cell references and fill down); math-s11-l03 (`cib2d6c0df`: a linear model's intercept and gradient); math-s11-l04 (`ci4777471a`, `ci1b3cf962`: a valid range). Recalled in a phrase or grey chip.
- **Handoff (to math-s11-l06, "What makes direct variation special, and how does one pair of values give k?").** Scene 11: see Handoff below; this is l06's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Party: C = 150 + 18n; n = 0 to 5: 150, 168, 186, 204, 222, 240; steps of 5 (n = 0 to 20): 150, 240, 330, 420, 510 (difference 90); n = 10 to 14: 330, 348, 366, 384, 402; 150 + 18n = 400 at n = 125/9 ≈ 13.9; answer 13.
  (b) Edit: C = 150 + 20n; n = 12: 390; n = 13: 410; 150 + 20n = 400 at n = 12.5; answer 12.
  (c) A1: 45 + 12.5 × 8 = 145. A2: 30, 38.5, 47, difference 8.5; =30+8.5*A2; y = 8.5x + 30.
  (d) Pronunciations: "equals one fifty, plus eighteen, star, A2"; "thirteen point nine"; "equals thirty plus eight point five star A2".
  (e) Windows: chart n 0 to 20 skaters, C $0 to $560 (grid every 5 skaters and $50; for steps of 1, n 0 to 15); the $400 budget line green.

Main question: *How does a spreadsheet build and test a linear model?*
Entry knowledge (f08, l03, l04): cells, formulas and fill down; a model's start and rate; a valid range.
Stops after: building the model in a sheet; testing it by the zero row and the constant difference; charting it; a target by refining the step; changing a parameter.
Handoff: math-s11-l06: "apples at $4 a kilogram with no fee: zero kilograms costs zero. What changes?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): model line and output blue; rate amber; start and zero row violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · LINEAR RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the skating party
> Here's the skating party. A hundred and fifty dollars for the room, eighteen dollars for each skater, and four hundred dollars to spend. As a model, that's C equals a hundred and fifty plus eighteen n, where n is the number of skaters. You could work out the cost for each number of skaters, one at a time. Or a spreadsheet can do every row at once, and test the model while it's at it. So how does a spreadsheet build and test a linear **model**?

Visual: opens on l04's final frame exactly (the skates `ms11s-ice-skates-v1.png`, about 700 px wide, at the left; the price card "room: $150" (violet), "+ $18 a skater" (amber), "budget: $400" (green outline); grey tag "example prices"; the empty `SpreadsheetGrid` at the right with "skaters" in A1 and "cost ($)" in B1). On the first sentence the "Next" and "?" chips fade. On "As a model" the model chip, 44 px: "C = 150 + 18n" (150 violet, 18 amber) with the key "n = skaters, C = cost ($)"; grey chip "Year 11 l03: start + rate × input". On "one at a time" three hand-worked rows write small and slow under the chip ("n = 1: 150 + 18 = 168", "n = 2: ...") and then fade. On "model" the heading "A linear model in a spreadsheet" writes on, and the question chip "How many skaters fit?" moves to the top right.

### 2. building it
> Quick reminder from our spreadsheet video. A spreadsheet is a grid of cells, and a formula starts with an equals sign. In column A, type the number of skaters, zero, one, two, three, going up in equal steps. Equal steps matter, because uneven steps would make the costs jump unevenly too. In cell B2, type equals one fifty, plus eighteen, star, A2. The star means times, and A2 means the number of skaters in that **row**. Now fill it down. Each row's formula updates to use its own row, so B3 uses A3, and so on. Out come a hundred and fifty, a hundred and sixty-eight, a hundred and eighty-six, all the way to two hundred and **forty**.

Visual: stage change: the skates shrink to a 260 px badge at the top left with the model chip (30 px); the sheet fills the centre (columns A and B, rows 1 to 7, 44 px cells; formula bar 48 px). Grey chip "Year 11 f08: formulas start with =; fill down". Column A fills 0, 1, 2, 3, 4, 5 (ink), small "+1" ticks between rows. The formula bar types "=150+18*A2" as spoken (150 violet, 18 amber, A2 ink), hand tag "* means times"; on "row" the A2 cell outlines and links to B2, which shows "150". The fill handle drags down (simulation 1): each B cell computes in turn, its own A cell flashing as it does, hand tag "its own row"; the formula bar briefly shows "=150+18*A3" for B3. B fills 150, 168, 186, and on "forty" 204, 222, 240.

### 3. testing it
> Now test it. Look at the row where A is zero. It shows a hundred and fifty, the cost with no skaters at all, so the intercept lives in that **row**. Then look down column B. Each cost is eighteen more than the one above, every time. A constant difference that equals the rate tells you the model really is **linear**. That's how you catch a typing **slip**. If you'd typed equals one fifty, star, eighteen, plus A2, the column would still fill, but the zero row would show two thousand seven hundred, and each step would add just one. Now chart the two columns, with skaters across the bottom and cost up the side. Each row becomes a point, and the points make a straight **line**, starting at a hundred and fifty, and climbing eighteen for each skater. And with every row on screen, you can see the model's sensible range too. You can't have negative skaters, and the rink will have a limit, so the column only needs to run as far as the situation allows.

Visual: camera continue; the sheet moves to the left half. On "row" (first bold) row 2 (A = 0, B = 150) shades violet, hand tag "zero row: the start". Amber "+18" arrows appear between each pair of B cells; on "linear" a chip "constant difference = rate: linear" (44 px), hand tag "+18 every row: linear". On "slip" (Revision 2, review finding 1) a small grey mini-sheet appears at the right with "=150*18+A2" in its formula bar and B values 2700, 2701, 2702 for A = 0, 1, 2; on "two thousand seven hundred" its zero row rings red, and on "just one" its "+1" arrows ring red, hand tag "slip caught"; the mini-sheet fades as the chart arrives. The linked chart (simulation 2) at the right (760 × 600 px, n 0 to 5 "skaters", C $0 to $300 "cost ($)"): on "chart" each row lights its point in turn, the input across, hand tag "input across"; on "line" (bold) the blue line joins them, the start (0, 150) ringed violet and one amber step "1 skater, +$18". On "sensible range" a grey chip "Year 11 l04: valid range"; the chart's region left of n = 0 greys out with the tag "no negative skaters", and a dashed grey stop line at the right edge carries the tag "rink limit?".

### 4. worked example: the budget
> Now the budget question. How many skaters can come for four hundred dollars? Change column A to go up in fives, zero, five, ten, fifteen, twenty. Now each cost jumps by ninety, five lots of eighteen. Ten skaters cost three hundred and thirty, and fifteen cost four hundred and twenty, so four hundred dollars sits somewhere **between**. Refine the step. Start at ten, and go up by ones. Eleven is three hundred and forty-eight, twelve is three hundred and sixty-six, thirteen is three hundred and eighty-four, and fourteen is four hundred and **two**. Fourteen is over budget, so the answer is thirteen skaters. The algebra agrees. A hundred and fifty plus eighteen n equals four hundred gives n equals about thirteen point nine. You can't bring part of a skater, and rounding up to fourteen breaks the budget, so round **down**.

Visual: clear change to the g01 board built around the sheet. Task strip, 44 px: "The party costs $150 for the room plus $18 a skater. The budget is $400. Find the largest number of skaters." Givens card, 44 px: "start: $150" (violet), "rate: $18 a skater" (amber), "budget: $400" (green). The sheet at the left (rows 1 to 7), the chart at the right (n 0 to 20, C $0 to $560) with the green $400 line. Column A rewrites 0, 5, 10, 15, 20 in rows 2 to 6 (row 7 clears); B ripples 150, 240, 330, 420, 510, amber "+90" arrows with a small chip "+90 = 5 × 18". On "between" the rows for 10 and 15 (rows 4 and 5) shade amber and the chart shades the gap between n = 10 and n = 15 under the $400 line (simulation 3), hand tag "between these two". On "Refine" column A rewrites 10, 11, 12, 13, 14 in rows 2 to 6 (equal steps throughout; Revision 2, review finding 2) and B fills 330, 348, 366, 384, 402, hand tag "steps of 1"; on "two" B5 (384) turns green and B6 (402) red, hand tag "over budget". Rows, 52 px, at the right: "150 + 18n = 400", "18n = 250", "n ≈ 13.9" (grey chip "Year 11 f02: solving"). On "down" framed answer (green): "13 skaters ($384)", hand tag "round down: whole skaters"; a red slip "13.9 → 14 skaters" writes small and is crossed (caption "14 costs $402: over budget").

### 5. change one number
> Here's where a spreadsheet earns its keep. Say the rink puts its price up to twenty dollars a skater. Edit the formula in B2 to equals one fifty, plus twenty, star, A2, and fill it down again. Every row updates at **once**. The chart's line swings steeper, but it still starts at a hundred and fifty, because only the rate changed. Now thirteen skaters would cost four hundred and ten, so the budget only covers **twelve**. And if you forget to fill down again, the old numbers just sit there, looking **right**.

Visual: stage change: the sheet (A 10 to 14 kept in rows 2 to 6) and the chart side by side, the board parts gone. The formula bar shows "=150+18*A2"; the "18" is selected and retyped "20" (amber pulse). The fill handle drags once; on "once" column B ripples top to bottom: 350, 370, 390, 410, 430 (row by row), and the chart's line swings steeper about the fixed violet point (0, 150), the old line left as a grey ghost, hand tag "only the rate changed". On "twelve" B4 (390) turns green and B5 (410) red against the $400 line, framed chip "now: 12 skaters". On "right" a mini-sheet at the bottom right shows B2 changed to 20 but B3 to B6 still the old values, a red outline around them, hand tag "fill down again".

### 6. memory aid
> Here's the idea to keep. One formula, filled down, gives every case of the model. The zero row shows the start, and the steady difference shows the **rate**. And whenever something changes, edit the formula, then fill down again.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the first sheet small, its zero row violet and its "+18" arrows amber. Main line, hand font 56 px: "Zero row: the start. Each step: the rate." On "rate" the key line, 40 px: "Edit the formula, then fill down again." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A spreadsheet models the cost of hiring a trailer. Column A holds the number of hours, and cell B2 contains equals forty-five plus twelve point five star A2, filled down. What value is in column B when A shows eight? And interpret the forty-five and the twelve point five in context. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A spreadsheet models the cost of hiring a trailer. Column A holds the number of hours, and cell B2 contains =45+12.5*A2, filled down. (a) What value is in column B when column A shows 8? (b) Interpret 45 and 12.5 in context." Grey tag "example prices". The full question stays on screen. Picture slot: a small sheet with headers "hours" and "cost ($)", A2 to A4 holding 0, 1, 2 and the formula bar showing "=45+12.5*A2"; column B empty. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 8. feedback 1 (brief)
> Forty-five plus twelve point five times eight is forty-five plus a hundred, which is a hundred and forty-five **dollars**. The forty-five is the fixed cost, paid before any hours, the vertical intercept. The twelve point five is the cost per hour, twelve dollars fifty, the gradient. Calling forty-five the cost per hour is the **slip**. The per-hour number is the one multiplied by A2.

Visual: the card shrinks to the top (30 px). On "dollars" the row "45 + 12.5 × 8 = 45 + 100 = 145" and framed answer (green) "$145". Rows, 44 px: "45: $45 fixed, before any hours (vertical intercept)" (violet), "12.5: $12.50 per hour (gradient)" (amber). On "slip" a red slip "45 is the cost per hour" writes and is crossed (caption "the per-hour number multiplies A2"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. In a spreadsheet, when column A is zero, one and two, column B shows thirty, thirty-eight point five, and forty-seven. Write the formula that would be in B2, with A2 holding the input. Then write the model as an equation. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A spreadsheet shows a linear model. When column A is 0, 1, 2, column B shows 30, 38.5, 47. (a) Write the formula that would be in B2 (A2 holds the input). (b) Write the model as an equation in the form y = mx + c." Picture slot: the small sheet with A 0, 1, 2 and B 30, 38.5, 47 (no arrows, no formula). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The zero row shows thirty, so that's the start. Each row goes up by eight point five, so that's the rate. The formula is equals thirty plus eight point five star **A2**, and the equation is y equals eight point five x plus **thirty**. Writing equals eight point five plus thirty star A2 is the slip. The rate is the number that multiplies the **input**.

Visual: the card shrinks to the top. The zero row shades violet ("30"), amber "+8.5" arrows between the B cells. On "A2" the formula bar "=30+8.5*A2" (30 violet, 8.5 amber); on "thirty" framed answer (green) "y = 8.5x + 30". On "input" a red slip "=8.5+30*A2" writes and is crossed (caption "the rate multiplies the input"). Hold about 1 s.

### 11. handoff
> So a spreadsheet builds a model row by row, and lets you test it and change it. Every model in this video had a starting amount, like the room fee. But some don't. Apples at four dollars a kilogram, with no bag fee at all. Zero kilograms costs zero dollars. What changes when there's no starting amount? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame: the produce scale `ma11-produce-scale-v1.png` (about 800 px wide) at the left with three apples `ma12-apple-v1.png` (about 200 px each, native aspect) sitting in its tray; the scale's display panel carries a coded readout "0.00 kg"; on "four dollars a kilogram" a coded shelf sign beside it, 44 px: "Apples $4 per kg" (amber "$4") and on "no bag fee" "no bag fee" (violet, struck through "fee: $0"); grey tag "example price". At the right, empty axes (mass across 0 to 8 kg, cost up $0 to $35) with only the origin marked by a small open circle and the chip "0 kg → $0?". On "next" chips "Next: direct variation" and "?". Hold about 2 s. This is l06's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Inputs in column A, in equal steps. B2: =150+18*A2, filled down.
- The row where the input is 0 shows the intercept.
- A constant difference equal to the rate: the model is linear.
- Target between two rows: refine the step, round to suit.
- Change the formula, then fill down again.

Memory aid (framed card, right side, as in scene 6): *Zero row: the start. Each step: the rate.* Key: *Edit the formula, then fill down again.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and l06's opening frame.

## Teaching checks

- **Does it explain causes?** Why one formula serves every row: each row's reference updates to its own input (2). Why the zero row is the intercept: no skaters, only the fee (3). Why a constant difference means linear: each row adds one skater at the same price (3). Why steps of 5 give +90: five skaters at $18 (4). Why 13, not 14: 14 costs $402, and skaters come whole (4). Why the line keeps its start after the edit: only the rate term changed (5).
- **Misconceptions addressed:** a typing slip in the formula, caught by the zero row and the difference (3; Revision 2); rounding 13.9 up (4 crossed); forgetting to fill down (5); swapped start and rate (A1, A2 crossed); uneven input steps (2); the wrong column across (3 tag).
- **Visual standard, item by item:** 1 the skates and prices from the first frame, returning as a badge; 2 a new stage every 30 to 60 s; 3 the fill-down ripple, the linked chart, the bracket and refine, the edit swinging the line; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the line swinging on its fixed start as the column ripples.
- **One idea at a time:** build (2), test and chart (3), target (4), change (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 26 s.
- **Avoided double teaching:** f08's cells and fill down and l03's start plus rate are recalled in grey chips; break-even is left to a04b.
- **Syllabus coverage:** `ci80b8ed46` (2 to 5, A1, A2; all five key notes).
- **Out of scope by design:** break-even (Year 12 a04b); absolute references; direct variation (l06).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1 with the context changed to trailer hire, original, HSC style, 2 marks suggested, not an official marking scheme).** "A spreadsheet models the cost of hiring a trailer. Column A holds the number of hours, and cell B2 contains =45+12.5*A2, filled down. (a) What value is in column B when column A shows 8? (b) Interpret 45 and 12.5 in context."
Model answer: (a) 45 + 12.5 × 8 = 145, so $145. (b) 45 is the fixed cost in dollars before any hours (the vertical intercept); 12.5 is the cost per hour, $12.50 (the gradient). Classic mistake (crossed): "45 is the cost per hour".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 2 marks suggested).** "A spreadsheet shows a linear model. When column A is 0, 1, 2, column B shows 30, 38.5, 47. (a) Write the formula that would be in B2 (A2 holds the input). (b) Write the model as an equation in the form y = mx + c."
Model answer: (a) =30+8.5*A2. (b) y = 8.5x + 30 (difference 8.5 each step; 30 when x = 0). Classic mistake (crossed): "=8.5+30*A2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Party | C = 150 + 18n; n = 0 to 5: 150, 168, 186, 204, 222, 240 | 1 to 3 |
| Steps of 5 | n = 0, 5, 10, 15, 20: 150, 240, 330, 420, 510; +90 = 5 × 18 | 4 |
| Steps of 1 | n = 10 to 14: 330, 348, 366, 384, 402; 18n = 250; n ≈ 13.9; answer 13 ($384) | 4 |
| Edit | C = 150 + 20n; n = 10 to 14: 350, 370, 390, 410, 430; answer 12 | 5 |
| A1 | 45 + 12.5 × 8 = 145 | 7, 8 |
| A2 | 30, 38.5, 47; difference 8.5; =30+8.5*A2; y = 8.5x + 30 | 9, 10 |
| Handoff | $4 per kg, no fee (no values computed) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `l/verify.py`, run with `python -I`); Codex to re-check.

- 150 + 18n at n = 0 to 5: 150, 168, 186, 204, 222, 240; at n = 0, 5, 10, 15, 20: 150, 240, 330, 420, 510; at n = 10 to 14: 330, 348, 366, 384, 402.
- 150 + 18n = 400 at n = 125/9 ≈ 13.89.
- 150 + 20n at n = 10 to 14: 350, 370, 390, 410, 430; 150 + 20n = 400 at n = 12.5.
- Revision 2: with 10 to 14 in rows 2 to 6, B5 = 384 and B6 = 402 (rate 18), B4 = 390 and B5 = 410 (rate 20). The typing slip =150*18+A2 at A = 0, 1, 2 gives 2700, 2701, 2702 (difference 1). Rechecked with SymPy in `work/brief-review-s11-l/resolve-check.py`.
- 45 + 12.5 × 8 = 145.
- 38.5 − 30 = 47 − 38.5 = 8.5.

## Memory aid check

- **"Zero row: the start. Each step: the rate."** with key line **"Edit the formula, then fill down again."** Original. Meaning, as said in scene 6: the row where the input is 0 shows the intercept, and the difference between rows (for steps of 1) is the gradient. Assumptions checked: the input column starts at 0 and steps by 1 (scene 4 shows steps of 5 give 5 × the rate, and key note 1 says equal steps); a sheet that does not show the zero row needs the formula read instead (A1 reads 45 from the formula). It helps a new case: a sheet with 20, 27, 34 for 0, 1, 2 reads "start 20, rate 7". Introduced after scenes 2 to 5.
- **Considered, not used:** "Type once, fill down, read across" (good for building, but says nothing about testing the model).

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-cf/count.py`, the same method): **5,234 characters** (Revision 1: 5,021), 12 scene headings. Characters per scene (1 to 12): 443, 630, 940, 817, 500, 225, 316, 378, 253, 341, 316, 75. Speech about 394 s; holds and settling unchanged from Revision 1 (below); total **about 481 s**, 89 s under the 570 s cap. Feedback speech: about 28 s and 26 s. The Revision 1 paragraphs below are kept for the record.

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `l/count.py`, which reproduces e08's 5,632): **5,021 characters**, 12 scene headings. Characters per scene (1 to 12): 443, 630, 727, 817, 500, 225, 316, 378, 253, 341, 316, 75.

At 13.3 characters per second the speech is about 378 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the fill-down ripple (2), the chart (3), the two refills (4) and the edit ripple (5) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 465 s (7 min 45 s)**, 105 s under the 570 s cap; speech and holds before the notes about 420 s. Feedback speech: about 28 s and 26 s.

Reserve trims if the voiced take runs long: scene 1's "You could work out the cost for each number of skaters, one at a time." (about 5 s); scene 4's "Now each cost jumps by ninety, five lots of eighteen." (the chip shows it; about 4 s).

## Scene list and build ids

Lesson key `m-s11l05` (route math-s11-l05). Explainer folder `src/explainer/lessons/math-s11-l05`; build inputs in `docs/production/claude-pm/lessons/math-s11-l05/` (at voicing).

In order (12 scene headings): hook-skating-party, building-sheet, testing-chart, worked-budget, change-rate, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The skates, the prices and the empty sheet |
| 35 to 85 s | 2 | The sheet filling down |
| 85 to 130 s | 3 | Zero row, constant difference, the linked chart |
| 130 to 210 s | 4 | g01 board: the budget, bracketed and refined |
| 210 to 250 s | 5 | The edit, the ripple and the swinging line |
| 250 to 265 s | 6 | Framed memory card |
| 265 to 370 s | 7 to 10 | Question cards and countdowns, then feedback |
| 370 to 395 s | 11 | The apples frame for l06 |
| 395 to 440 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on l04's final frame; 1 to 2 stage change (the skates become a badge); 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-l05-learning-review.md`, `science_check` = `checks/m-s11-l05-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only, each opened): `ma11-produce-scale-v1.png` (a white shop scale with a stainless tray and a blank dark display panel; used in the handoff with a coded readout on its panel); `ma12-apple-v1.png` (a single red-green apple with a leaf, true alpha; used three times on the tray at its native aspect); `ma12-apple-crate-v1.png` (a crate of apples with a baked dark glow behind it, which would sit badly on the paper ground; not used); `ms12-formal-table-v1.png` (math-s12-a04b's formal table; a different event, not used).

Need (painted, new; see the Codex asset brief): `ms11s-ice-skates-v1.png` (shown first in l04's final frame, so painted before the l04 build). Reused: `ma11-produce-scale-v1.png`, `ma12-apple-v1.png` (11, 12).

Coded: the price card, model chip, the spreadsheet and its chart, the bracket, the board, question cards and their small sheets, the countdown, hand tags, the shelf sign and the empty axes in the handoff, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `SpreadsheetGrid` (ruling 90; shared with f08 and math-s12-a04b), `StudioPlot`, `IntervalPicture`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row l05):
1. **Linked chart** (a `SpreadsheetGrid` option): each computed row lights a point on a line chart beside the grid (input across, output up, through `StudioPlot`'s transform); when a formula is edited and filled down, the column ripples row by row and the chart's line redraws from the new values, leaving the old line as a grey ghost. Check: the points for =150+18*A2 land on C = 150 + 18n within 1 px; after the edit the line passes through (0, 150) and (14, 430).

## Codex asset brief (Maths S11 L05, a pair of ice skates)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s11-l05.md`, route entry math-s11-l05. Paint after the learning reviews and maths checks for l04 and l05 pass and root gives the go-ahead, and **before the l04 build** (l04's final frame shows it; ruling 17). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-produce-scale-v1.png` and `maths/ma11-share-ebike-v1.png`; no text, letters, numbers, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch; keep the native aspect ratio.

1. `ms11s-ice-skates-v1.png` (about 1400 × 1200 px): a pair of hire ice skates (plain dark blue boots with white laces and silver blades) standing side by side on a bench edge, slightly angled, the laces loose; a plain rubber blade guard on one blade. No size numbers or hire tags printed. Leave the right third of the canvas clear so a coded price card can sit beside them.

Report inspection on the paper background (`#f6f1e7`) at 700 px and 260 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11s-l05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON and the crosswalk exactly.
3. Confirm every spreadsheet formula is valid in a common spreadsheet (=150+18*A2, =150+20*A2, =45+12.5*A2, =30+8.5*A2) and that filling down from B2 gives the values shown; no absolute references.
4. Confirm the vocabulary for cell, formula and fill down matches math-s12-a04b's.
5. Confirm both attempts carry every demand and neither card shows an answer.
6. Confirm scene 11's frame matches l06's opening.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Linear Models in a Spreadsheet | Year 11 Maths Standard

(Title length: 55 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson06.sa.html

An ice skating party costs $150 for the room plus $18 a skater, with $400 to spend. Build the model in a spreadsheet: one formula, filled down. Test it (the zero row shows the start, and a constant difference shows the rate), chart it, find the largest number of skaters by narrowing the steps, and watch every row and the chart update when the price changes. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Linear relationships. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
"Use a spreadsheet to model a linear relationship in a variety of contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

Builds on: Interpolation and Extrapolation. Next: Direct Variation: y = kx and Finding k.

#Year11Maths #MathsStandard #Spreadsheets #HSCScience

## Open decisions

- **1. "Our spreadsheet video" (learning review).** Kept in Revision 2, as the reviewer advised; the grey chip quotes f08's title once it is fixed. Revision 1 text: Scene 2 points back to f08 by description; once f08's title is fixed, the grey chip may quote it.
- **2. Trailer hire for A1 (root).** Closed in Revision 2: ruling 92 accepts trailer hire. Revision 1 text: The pack's party bus at $45 plus $12.50 an hour is far below NSW party-bus prices; trailer hire keeps the numbers and is plausible as an example price. Root may prefer another context.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s11-l05-learning-review.md`; ruling 93). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from f08, l03 and l04 only; check that "A2 means the number of skaters in that row" is enough for fill down, that the steps-of-5 jump of 90 is followable, that rounding down has its reason before the answer, that the edit's ripple is readable at playback speed, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
