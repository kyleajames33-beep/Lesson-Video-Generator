# Maths S11 F08: How does a spreadsheet apply one formula to a whole table of cases? A pancake breakfast's supply orders, cells named by column and row, =B2*C2+D2 read as T = qc + f, filling down so each row uses its own cells, an edited input updating its total, and the stopping-distance table from f04b (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a01.md`, `a07.md`, `r10.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 91; **ruling 90**: `SpreadsheetGrid`, a coded, unbranded spreadsheet with a formula bar, is built as a shared kit part before this build). Opens on f07's final frame as specified in `math-s11-f07.md` (Decisions, "Handoff", and scene 13). Its final frame is l01's opening frame, fixed in `../checks/root-decisions-maths-s11-f01-f08.md` section 1. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit (after `SpreadsheetGrid` exists) to grade A.

Narration 4,730 characters by script (see "Narration length estimate"), 13 scene headings, about 447 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: tenth and last video of the Year 11 Mathematics Standard (2024) Formulas and equations strand, playlist order 8. Year 11 is one course for Standard 1 and Standard 2. Pre-design pack: `../pre-design/maths-standard/math-s11-f08.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year11/formulas-and-equations/lesson06.sa.html` (Formula Modelling with Spreadsheets, SHA256 `83c071741dc7f915df11d2dc4da32d05f7f8652705146894de95a55bb0e1df72`; card 02's "A spreadsheet formula uses cell references instead of variable names, but the underlying algebra is identical. Change an input cell and every formula that references it updates automatically." and "Copying =B2*C2 to row 3 gives =B3*C3 automatically."; card 05's B2 = 12, C2 = $4, D2 = $10 and =B2*C2+D2; card 06's unit warning; `we-1` 48 + 10 = $58, "T = qc + f"; the trap "Forgetting the = sign ... The cell displays 'B2*C2'"). Its `we-3` "$4 × 8" slip (MS-80 item 2) is not used. Route entry: `math-s11-f08` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit with the new shared `SpreadsheetGrid` (ruling 90); the pancake plate (painted with f07), the P-plate car badge; every grid, formula, bar and plot coded.

Owner rules applied: as f01 (2024 syllabus; plates for real objects, code for diagrams; no people, hands or faces (the cursor and fill handle are coded, no hand); one question; one stage at a time; words before symbols; plain meanings (spreadsheet, cell, formula, fill down; the vocabulary of math-s12-a04b); g01-style worked example on the grid; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a pancake breakfast fundraiser, concert tickets, f04b's road-safety model); Australian spelling; no em dashes; conversational narration). Prices are invented examples.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Formulas and equations, common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-8.json`:

- `ciffbbbd58`: "Use a spreadsheet to perform calculations involving formulas"
- `ci2343d424`: "Apply given formulas to solve problems in a variety of contexts" (shared with f01: f01 applied a formula to one case at a time; this video applies it to a whole table)

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

**Boundary:** starts from f07's final frame exactly (the pancake plate `ms11s-pancake-stack-v1.png` at the left, about 620 px; the hand-font order card "Pancake breakfast: supply orders" with four rows, "Pancake mix: 12 bags × $4 + $10 delivery", "Maple syrup: 6 bottles × $7.50 + $10 delivery", "Butter: 8 blocks × $3.25 + $10 delivery", "Paper plates: 5 packs × $6.80 + $10 delivery", each "= ?"; chips "Four orders. One rule?", "Next" and "?"). Recalls f01 (substitution, order of operations; T = qc + f is a formula), f04a (÷ 3.6) and f04b (reaction and braking; D = 0.01v² + 0.3v) in a phrase or grey chip each. Teaches: a spreadsheet as a grid of cells named by column letter and row number; a formula starts with =, uses cell references in place of letters, * for times, / for divide, ^ for a power; =B2*C2+D2 read as T = qc + f; the cell shows the value and the formula bar shows the formula; filling down, with the row numbers changing (relative references); changing one input updates its total; never typing over a formula cell; one unit per column; the stopping-distance capstone with ^. Stops at formulas in a spreadsheet. Not taught: absolute references ($), consistent with math-s12-a04b (pack decision); building a linear model and charting it (l05); graphs and gradient (l01).

## Decisions

- **Anchor: a pancake breakfast's supply orders (new painted plate, live).** The site's `we-1` numbers (12 at $4 plus $10 delivery, $58) become the pancake-mix order; three more invented orders fill the sheet (syrup 6 × $7.50, butter 8 × $3.25, plates 5 × $6.80, each + $10): $55, $36, $44. The pack's canteen was avoided (b and p strands use a canteen); the pancake breakfast is the pack's own first anchor. `ms11s-pancake-stack-v1.png` (briefed in f07). Prices labelled "example prices".
- **SpreadsheetGrid (ruling 90).** The shared kit part must exist before this build: column letters, row numbers, a formula bar, typed formulas, a fill handle with relative references, row-by-row computation, an edit ripple; Year 11 adds `^` and `/`, and an in-cell bar option for the capstone. Unbranded.
- **Same vocabulary as a04b (pack decision).** "spreadsheet: a grid of cells that can calculate"; "cell: one box, named by its column letter and row number"; "formula: a calculation the cell does; it starts with an equals sign"; "fill down: copy a formula into the rows below, where it updates to each row". a04b (Year 12) recalls these in a phrase.
- **No absolute references (pack decision).** Each order keeps its own delivery fee in column D, so filling down never needs "$". The edit ripple therefore changes one input (B2: 12 → 15 bags) and one total ($70), which is what relative references do.
- **Capstone: f04b's model filled down (pack decision).** Speeds 40 to 110 km/h in A2:A9; B "=0.3*A2" (reaction, teal), C "=0.01*A2^2" (braking, violet), D "=B2+C2" (stopping, amber, with in-cell bars). It shows ^ once, joins the strand, and gives l01's final-frame curve. Values 28, 40, 54, 70, 88, 108, 130, 154 m.
- **Final frame for l01 (fixed early).** As specified in `../checks/root-decisions-maths-s11-f01-f08.md` section 1: the pancake-mix total for 0 to 6 bags ("=A2*4+10": 10, 14, ... 34) plotted as a straight line, beside the capstone's stopping distances bending upward, with the chip "What two numbers describe a straight line?". The pancake mix rule ($4 a bag plus $10 delivery) is the same as the first order's, so nothing new is taught in the frame.
- **Simulations (standard item 3).**
  1. **Two views of one cell** (scenes 2, 3; `SpreadsheetGrid`): clicking E2 shows "58" in the cell and "=B2*C2+D2" in the formula bar; each reference in the bar rings in its cell's colour, and the cells B2, C2, D2 ring to match; T = qc + f writes under it with the same colours.
  2. **Fill down** (scene 4): the coded fill handle drags from E2 to E5; each row computes in turn (55, 36, 44 appear), and as each cell is selected the bar shows "=B3*C3+D3", "=B4*C4+D4", "=B5*C5+D5", the changing row number ringed amber.
  3. **Edit ripple** (scene 4): B2 is retyped from 12 to 15; E2 flashes and changes from 58 to 70 within half a second.
  4. **Capstone fill** (scene 6): three formulas filled down at once over eight speeds; column D's in-cell amber bars grow down the column, the 40 and 80 rows ring (28 and 88).
- **Colour roles.** Orders: quantity column B **blue**; price column C **teal**; fee column D **violet**; total column E **amber**; each reference in a formula takes its column's colour. Capstone (as f04b): speed **blue**, reaction **teal**, braking **violet**, stopping **amber**. Changing row numbers ringed **amber**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Grid cell text at least 36 px in teaching stages (30 px only in the final frame's small grid); formula bar 44 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "= means calculate", "* is times", "/ is divide", "^ is a power", "column letter + row number", "the cell shows the value", "the bar shows the formula", "fill down: B2 becomes B3", "each row uses its own cells", "updates by itself", "don't type over a formula", "one unit per column". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The pancake plate and orders (1); the empty grid and its names (2); E2's two views (3); fill down and the ripple (4); the mixed-units column (5); the capstone sheet (6); framed card (7); question cards (8 to 11); the two plots for l01 (12); key notes (13).
- **Worked example (g01 layout on the grid).** Scene 3: site `we-1` in E2, with a task strip, the givens as the cells B2, C2, D2, the working rows "12 × 4 = 48", "48 + 10 = 58" and a framed answer "E2 shows $58". Crossed slip: the formula typed without "=" (the cell shows the text "B2*C2+D2"; caption "start every formula with =").
- **Memory aid.** Framed card: "Start with =, use cell names, then fill down." Key line: "Filled down, B2 becomes B3: each row uses its own cells."
- **Visual surprise.** Three formulas, one drag, and twenty-four cells of the stopping-distance table fill at once, the amber bars stretching faster and faster down the column.
- **Plain meanings at first use.** As a04b's vocabulary above; "fill handle" ("the small square at the corner of a selected cell"); "formula bar" ("the strip above the grid that shows a cell's formula").
- **Attempts (pack questions).** A1 (pack question 1): concert tickets, E2 = 4 × 18.50 + 3.95 = 77.95; E3 = "=B3*C3+D3"; crossed "=B2*C2+D2 in E3" (caption "filling down changes the row number"). A2 (pack question 2): reaction distance in C2 "=B2/3.6*1.5"; 25 m at 60; C3 "=B3/3.6*1.5"; crossed "=B2/3.6x1.5" (caption "a spreadsheet needs * for times").
- **Mistake scene:** none separate. No "=" (3 crossed); expecting the row to stay at 2 (A1 crossed); "x" for times (A2 crossed); typing a value over a formula (4, said); mixed units (5); reading =B2*C2+D2 as B2 × (C2 + D2) (3, a grey row "order of operations: × first" with "12 × 14 = 168" struck through in grey).
- **Cause chain taught, in order:** (1) the same rule repeats down the rows, so one formula in the first row can serve them all (1, 4); (2) cell names stand in for the letters, so the spreadsheet formula is the algebra formula (2, 3); (3) the formula is stored and the value is shown, so changing an input changes the value (3, 4); (4) filling down shifts each reference by one row, so each row uses its own inputs (4); (5) the spreadsheet calculates whatever it is given, so a mixed-unit column gives wrong totals (5); (6) a squared term makes the stopping column grow faster and faster (6).
- **Entry knowledge (route):** f01 (substitution with order of operations); f04b (stopping distance = reaction + braking; the site's model); f04a (÷ 3.6); Stage 5 reading a table by rows and columns.
- **Handoff (to math-s11-l01, "What do the gradient and y-intercept tell us, from a graph or an equation?").** Scene 12. The exact frame, chips and spoken text are fixed in `../checks/root-decisions-maths-s11-f01-f08.md` section 1 (header "MATHEMATICS STANDARD"; the pancake plate small top left; the small grid "=A2*4+10" with bags 0 to 6 and totals 10 to 34, plotted as a straight blue line meeting the vertical axis at 10, tag "a straight line"; the capstone's eight stopping distances plotted in amber with a dotted curve bending upward, tag "a curve"; chips "What two numbers describe a straight line?", "Next: gradient and y-intercept", "?"; no gradient or intercept labelled). This is l01's opening frame; scene 13 returns to it silently after the notes.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Orders: 12 × 4 + 10 = 58; 6 × 7.50 + 10 = 55; 8 × 3.25 + 10 = 36; 5 × 6.80 + 10 = 44; edit 15 × 4 + 10 = 70; bracket misreading 12 × (4 + 10) = 168.
  (b) Capstone, v = 40 to 110 step 10: 0.3v = 12, 15, 18, 21, 24, 27, 30, 33; 0.01v² = 16, 25, 36, 49, 64, 81, 100, 121; sums 28, 40, 54, 70, 88, 108, 130, 154.
  (c) A1: 4 × 18.50 = 74; 74 + 3.95 = 77.95. A2: 60 ÷ 3.6 × 1.5 = 25.
  (d) Final frame: =A2*4+10 for A = 0 to 6: 10, 14, 18, 22, 26, 30, 34.
  (e) Spoken formulas: "equals B2 star C2 plus D2" (star said once as "star, which means times", then "times" is acceptable on screen echoes); "equals zero point zero one star A2 hat two"; "B2 slash three point six star one point five".
  (f) The order prices are invented examples, labelled "example prices".

Main question: *A pancake breakfast has four supply orders, and next week forty more. How does a spreadsheet apply one formula to a whole table of cases?*
Entry knowledge (f01, f04b; Stage 5): substitution and order of operations; the stopping-distance model; tables.
Stops after: cells and references, formulas with =, *, / and ^, the two views of a cell, filling down with relative references, an edit ripple, one unit per column, and the stopping-distance table.
Handoff: math-s11-l01: "some tables plot as straight lines: what two numbers describe a straight line?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): column B blue, C teal, D violet, E amber; capstone reaction teal, braking violet, stopping amber; changing row numbers amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS" (scenes 1 to 11). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: four orders, one rule
> Four supply orders for the pancake breakfast. Each total is the quantity, times the price, plus a ten dollar delivery fee. Pancake mix is twelve bags at four dollars, plus ten, so fifty-eight dollars. Then there's syrup, butter and plates, and next week, forty more orders. Working each one out by hand is slow, and it's easy to slip. A spreadsheet can use one formula for every row. So how does a spreadsheet apply one formula to a whole table of **cases**?

Visual: opens on f07's final frame exactly (see Boundary). On "quantity, times the price, plus" the first row's three numbers ring blue, teal and violet in turn. On "fifty-eight dollars" the first row's "?" becomes "$58" (amber). On "forty more orders" the order card's edge fans out into a tall grey stack of copies. On "slow" a grey hand-tally strip "58, 55, 36, 44, ..." writes slowly, one value at a time. On "cases" heading "Spreadsheet formulas" writes on, and the question chip "One formula, every row?" moves to the top right.

### 2. cells, names and formulas
> A spreadsheet is a grid of cells that can calculate. Each cell is named by its column letter and its row number, so this one is B2. Put the quantity in column B, the price in column C, and the delivery fee in column D. To make a cell calculate, type a formula. A formula starts with an equals sign, then uses cell names instead of letters. Times is a star, divide is a slash, and a power is a little hat. So the total for row two is equals B2 star C2 plus **D2**. It's just T equals q c plus f, with cell names in place of the **letters**.

Visual: stage change: the plate shrinks to a 260 px badge at the top left. The `SpreadsheetGrid` (about 1,500 × 520 px) fills the frame: column letters A to E, rows 1 to 5, a formula bar above (44 px). On "column letter and its row number" B2 rings, with a coded leader to "B" and "2", hand tag "column letter + row number". Row 1 headers type in: A "item", B "quantity" (blue), C "price ($)" (teal), D "delivery ($)" (violet), E "total ($)" (amber); rows 2 to 5 fill with the four orders' items and numbers (example prices chip). On "equals sign" E2 is selected and the bar types "=", hand tag "= means calculate". A symbols strip, 40 px, under the bar: "* times", "/ divide", "^ power" (each a hand tag in turn: "* is times", "/ is divide", "^ is a power"). On "D2" the bar reads "=B2*C2+D2" with B2 blue, C2 teal, D2 violet. On "letters" a row under the grid, 52 px: "T = q × c + f", each letter in its column's colour, with grey chip "f01: a formula".

### 3. worked example: what E2 does
> Here's what the cell does. B2 is twelve, C2 is four, and D2 is ten. Order of operations still applies, so it multiplies first. Twelve times four is forty-eight, then plus ten is fifty-eight. The cell shows fifty-eight dollars, and the formula bar shows the formula behind it, two views of the same **thing**. Leaving out the equals sign is the slip. Then the cell just shows the text, B2 star C2 plus D2, and calculates **nothing**.

Visual: clear change to the g01 board laid over the grid's right half (the grid stays at the left, rows 1 and 2 enlarged to 44 px). Task strip, 44 px: "What does E2 show? E2: =B2*C2+D2" (site `we-1`). Givens card: "B2 = 12" (blue), "C2 = 4" (teal), "D2 = 10" (violet). Rows, 52 px: "12 × 4 = 48" (grey chip "f01: × before +"); "48 + 10 = 58". The two-views simulation: on "fifty-eight dollars" E2 shows "58" and the bar shows "=B2*C2+D2"; on "thing" a leader joins them; framed answer (green): "E2 shows $58". Hand tags "the cell shows the value" and "the bar shows the formula". A grey row, 30 px: "not 12 × (4 + 10) = 168" struck through. On "equals sign" a second copy of E2 (red outline) shows the text "B2*C2+D2" left-aligned; on "nothing" it is crossed (caption "start every formula with =").

### 4. fill down
> Now the clever part. Drag the fill handle, the little square at the corner of the cell, down the column. That's called filling down, copying a formula into the rows below. In row three, the formula becomes B3 star C3 plus D3, and in row four, B4 star C4 plus D4. Each row uses its own cells, so every total appears at **once**. Fifty-five, thirty-six, forty-**four**. And if the club changes an order, say to fifteen bags of mix, type fifteen in B2, and the total updates by itself, to seventy **dollars**. Just don't type a number over a formula cell, or it stops **updating**.

Visual: stage change: the grid returns to full width (rows 1 to 5, 40 px). The fill-down simulation: a coded fill handle (a small square, no hand) drags from E2 to E5; on "row three" E3 is selected and the bar reads "=B3*C3+D3" with the "3"s ringed amber, hand tag "fill down: B2 becomes B3"; on "row four" E4, "=B4*C4+D4". On "once" E3 to E5 compute in turn; on "four" they read 55, 36, 44 (amber), hand tag "each row uses its own cells". The edit ripple: on "fifteen in B2" B2 is retyped "15"; on "dollars" E2 flashes and changes from 58 to 70, hand tag "updates by itself". On "updating" a grey copy of E4 with "36" typed over its formula shows an empty bar; a hand tag "don't type over a formula" and the cell is struck through in grey.

### 5. one unit per column
> One warning. A spreadsheet calculates whatever you give it. If some prices are in cents and others in dollars, or some times in minutes and others in hours, the totals in those rows are wrong, even though the formula is **right**. Keep each column in one **unit**.

Visual: clear change: a small grid (about 1,100 × 360 px), column C "price" with one cell "325" (red outline) among "4", "7.50", "6.80"; its total in E computes to "2610" and flashes red beside the others; on "right" the bar shows the same "=B4*C4+D4" with a tick (the formula is fine), and the "325" is crossed and corrected to "3.25" (caption "325 cents = $3.25"), the total returning to 36. On "unit" hand tag "one unit per column". Grey chip "f04a: minutes and hours".

### 6. the stopping-distance table
> Now let's use a spreadsheet on something from earlier. Remember f04b's road-safety model, D equals zero point zero one v squared, plus zero point three v? Put the speeds, from forty to a hundred and ten, down column A. In column B, the reaction part, equals zero point three star A2. In column C, the braking part, equals zero point zero one star A2, hat two. And in column D, the stopping distance, equals B2 plus C2. Fill all three down, and the whole table appears. At forty kilometres an hour, it's twenty-eight metres. At eighty, it's eighty-eight. Double the speed, and the stopping distance more than **triples**.

Visual: stage change: the P-plate car badge (220 px) at the top left beside a grey chip "f04b: D = 0.01v² + 0.3v". A new grid (about 1,500 × 600 px, 36 px text): A "speed (km/h)" (blue) 40, 50, ... 110 in rows 2 to 9; B "reaction (m)" (teal); C "braking (m)" (violet); D "stopping (m)" (amber). On "zero point three star A2" B2's bar "=0.3*A2"; on "hat two" C2's bar "=0.01*A2^2" with "^2" ringed, hand tag "^ is a power"; on "B2 plus C2" D2's bar "=B2+C2". The capstone fill: on "fill all three down" the three columns fill in one sweep (B 12 to 33, C 16 to 121, D 28 to 154), D's in-cell amber bars growing longer and faster down the column. On "twenty-eight" and "eighty-eight" the 40 and 80 rows ring; on "triples" a row under the grid, 44 px: "88 ÷ 28 ≈ 3.1" and hand tag "more than triples".

### 7. memory aid
> Here's the idea to keep. Start with equals, use cell names, then fill down. Each row uses its own **cells**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: E2 to E5 with their four formulas stacked, the row numbers ringed amber. Main line, hand font 56 px: "Start with =, use cell names, then fill down." On "cells" the key line, 40 px: "Filled down, B2 becomes B3: each row uses its own cells." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A spreadsheet works out the cost of concert tickets. Column B holds the number of tickets, column C the price per ticket, and column D a booking fee. Cell E2 contains equals B2 star C2 plus D2. Find the value shown in E2 when B2 is four, C2 is eighteen fifty, and D2 is three ninety-five. Then write the formula that appears in E3 after the formula is filled down. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A spreadsheet works out the cost of concert tickets. Column B holds the number of tickets, column C the price per ticket and column D a booking fee. Cell E2 contains =B2*C2+D2. (a) Find the value shown in E2 when B2 = 4, C2 = 18.50 and D2 = 3.95. (b) Write the formula that appears in E3 after the formula is filled down." The full question stays on screen. Picture slot: a small grid with B2 4, C2 18.50, D2 3.95, E2 empty, E3 empty. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Four times eighteen fifty is seventy-four, plus three ninety-five, is seventy-seven dollars ninety-**five**. Filled down to row three, it becomes equals B3 star C3 plus **D3**. Keeping B2 star C2 plus D2 in E3 is the slip. Filling down changes the row **number**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "4 × 18.50 = 74", "74 + 3.95 = 77.95"; on "five" E2 shows "77.95"; on "D3" E3's bar "=B3*C3+D3" with the 3s ringed amber; framed answer (green) "(a) $77.95 (b) =B3*C3+D3". On "number" a red slip "E3: =B2*C2+D2" writes and is crossed (caption "filling down changes the row number"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Cell B2 holds a car's speed in kilometres per hour, and the driver's reaction time is one point five seconds. Write a formula for C2 that gives the reaction distance in metres. What does C2 show when B2 is sixty? And what formula is in C3 after filling down? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Cell B2 holds a car's speed in km/h. A driver's reaction time is 1.5 seconds. (a) Write a formula for C2 that gives the reaction distance in metres. (b) What does C2 show when B2 is 60? (c) What formula is in C3 after filling down?" Picture slot: a small grid with B "speed (km/h)" and C "reaction distance (m)", B2 = 60, C2 and C3 empty. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Change to metres per second, then multiply by the reaction time. So it's equals B2 slash three point six, star one point **five**. At sixty, that's twenty-five metres, just like f04b. In C3, it's equals B3 slash three point six, star one point **five**. Typing an x for times is the slip. A spreadsheet needs the **star**.

Visual: the card shrinks to the top. On "five" (first) C2's bar "=B2/3.6*1.5" with grey chip "f04a: ÷ 3.6"; C2 shows "25"; on "five" (second) C3's bar "=B3/3.6*1.5" with the 3 ringed amber; framed answer (green) "(a) =B2/3.6*1.5 (b) 25 m (c) =B3/3.6*1.5". On "star" a red slip "=B2/3.6x1.5" writes and is crossed (caption "a spreadsheet needs * for times"). Hold about 1 s.

### 12. handoff
> So a spreadsheet turns one formula into a whole table. Here's one more, the pancake mix total for zero to six bags, at four dollars a bag plus ten dollars delivery. Plot a column against its inputs, and you get a picture. The pancake mix totals, ten dollars, fourteen, eighteen and so on, sit in a perfectly straight line. The stopping distances bend upward. A straight line turns out to need just two numbers to describe it completely. Which two? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame (see Decisions, "Handoff", and `../checks/root-decisions-maths-s11-f01-f08.md` section 1): the header changes to "MATHEMATICS STANDARD"; on "pancake mix total" the small grid "=A2*4+10" fills bags 0 to 6 and totals 10 to 34; on "plot a column" the seven totals fly to the left plot as blue points; on "straight line" the ruled blue line draws through them to the vertical axis at 10, tag "a straight line"; on "bend upward" the capstone's eight stopping distances fly from a ghost of scene 6's column D to the right plot as amber points, joined by a dotted curve, tag "a curve"; on "two numbers" the chip "What two numbers describe a straight line?"; on "next" chips "Next: gradient and y-intercept" and "?". Hold about 2 s. This is l01's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A cell is named by its column letter and row number: B2.
- A formula starts with =. Use * for times, / for divide, ^ for a power.
- =B2*C2+D2 is T = qc + f, with cell names for letters.
- Fill down: B2 becomes B3, B4 ... in the rows below.
- Change an input and its formula updates. One unit per column.

Memory aid (framed card, right side, as in scene 7): *Start with =, use cell names, then fill down.* Key: *Filled down, B2 becomes B3: each row uses its own cells.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame of the Formulas and equations strand and l01's opening frame.

## Teaching checks

- **Does it explain causes?** Why a spreadsheet helps: the same rule repeats down the rows (1, 4). Why "=": without it the cell stores text, not a calculation (3). Why the formula is the algebra: cell names stand for the quantities (2). Why filling down works: each reference moves down one row with the formula (4). Why an edit updates: the cell stores the formula, not the number (3, 4). Why units matter: the spreadsheet cannot know a cell is in cents (5). Why the stopping column grows faster: the squared term (6).
- **Misconceptions addressed:** no "=" (3 crossed); the row staying at 2 (A1 crossed); "x" for times and "²" for a power (2, A2 crossed); B2 × (C2 + D2) (3, grey); typing over a formula (4); mixed units (5).
- **Visual standard, item by item:** 1 the pancake plate and orders from the first frame, the grid built from them; 2 a new stage every 30 to 60 s; 3 the two views of a cell, the fill-down sweep with the bar updating, the edit ripple, the capstone's growing bars; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board on the grid in 3; 8 framed card and five bullets; 9 twenty-four cells filling in one drag.
- **One idea at a time:** names and formulas (2), one cell (3), fill down (4), units (5), a whole model (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 19 s and 23 s.
- **Avoided double teaching:** f01's order of operations, f04a's ÷ 3.6 and f04b's model are recalled in grey chips.
- **Syllabus coverage:** `ciffbbbd58` (2 to 6, A1, A2; key notes 1 to 5); `ci2343d424` (1, 3, 6, A1, A2; key note 3).
- **Out of scope by design:** absolute references; charts from a spreadsheet (l05); gradient and intercept (l01).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "A spreadsheet works out the cost of concert tickets. Column B holds the number of tickets, column C the price per ticket and column D a booking fee. Cell E2 contains =B2*C2+D2. (a) Find the value shown in E2 when B2 = 4, C2 = 18.50 and D2 = 3.95. (b) Write the formula that appears in E3 after the formula is filled down."
Model answer: (a) 4 × 18.50 + 3.95 = 77.95, so $77.95. (b) =B3*C3+D3. Classic mistake (crossed): "=B2*C2+D2 in E3".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Cell B2 holds a car's speed in km/h. A driver's reaction time is 1.5 seconds. (a) Write a formula for C2 that gives the reaction distance in metres. (b) What does C2 show when B2 is 60? (c) What formula is in C3 after filling down?"
Model answer: (a) =B2/3.6*1.5. (b) 60 ÷ 3.6 × 1.5 = 25, so 25 m. (c) =B3/3.6*1.5. Classic mistake (crossed): "=B2/3.6x1.5".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Orders (site `we-1` plus invented) | 12 × 4 + 10 = 58; 6 × 7.50 + 10 = 55; 8 × 3.25 + 10 = 36; 5 × 6.80 + 10 = 44; edit 15 × 4 + 10 = 70; grey 12 × (4 + 10) = 168 | 1 to 4 |
| Mixed units | 325 cents read as dollars: 8 × 325 + 10 = 2610 (wrong); 3.25 gives 36 | 5 |
| Capstone | speeds 40 to 110; reaction 12 to 33; braking 16 to 121; stopping 28, 40, 54, 70, 88, 108, 130, 154; 88 ÷ 28 ≈ 3.1 | 6, 12 |
| A1 | 4 × 18.50 + 3.95 = 77.95; =B3*C3+D3 | 8, 9 |
| A2 | =B2/3.6*1.5; 60 ÷ 3.6 × 1.5 = 25 m; =B3/3.6*1.5 | 10, 11 |
| Final frame | =A2*4+10, bags 0 to 6: 10, 14, 18, 22, 26, 30, 34 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `s11f/verify.py`, `python -I`; 201 checks across f01 to f08, 0 failures); Codex to re-check.

- 12 × 4 + 10 = 58; 6 × 7.5 + 10 = 55; 8 × 3.25 + 10 = 36; 5 × 6.8 + 10 = 44; 15 × 4 + 10 = 70; 12 × (4 + 10) = 168.
- 8 × 325 + 10 = 2610.
- 0.3v and 0.01v² for v = 40, 50, ..., 110: 12, 15, 18, 21, 24, 27, 30, 33 and 16, 25, 36, 49, 64, 81, 100, 121; sums 28, 40, 54, 70, 88, 108, 130, 154; 88/28 = 3.142...
- 4 × 18.5 + 3.95 = 77.95.
- 60/3.6 × 1.5 = 25.
- 4b + 10 for b = 0 to 6: 10, 14, 18, 22, 26, 30, 34.

## Memory aid check

- **"Start with =, use cell names, then fill down."** with key line **"Filled down, B2 becomes B3: each row uses its own cells."** Original. Meaning, as said in scene 7: a spreadsheet formula begins with an equals sign, refers to cells instead of letters, and is copied down a column, where each reference moves to its own row. Assumptions checked: relative references only (no "$"), as taught; the key line describes filling down one row at a time (filling across would change the letter, not taught here). It helps a new case: a pay sheet with hours in B and rates in C: "=B2*C2" in D2, filled down, gives "=B3*C3" in D3. Introduced after scenes 2 to 6.
- **Considered, not used:** "Equals first" alone (true, but fill down is the idea students most often get wrong).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11f/count.py`, which reproduces e08's 5,632): **4,730 characters**, 13 scene headings. Characters per scene (1 to 13): 454, 531, 424, 562, 256, 616, 104, 397, 251, 290, 310, 460, 75.

At 13.3 characters per second the speech is about 356 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the grid build (2), the fill sweep and ripple (4), the mixed-units flash (5), the capstone fill (6) and the final frame's point flights (12) about 26 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 447 s (7 min 27 s)**, 123 s under the 570 s cap. At 4,730 characters it sits just under the 5,000 guide, like r08, r09 and t09 (ruling 55), with no padding. Feedback speech: about 19 s and 23 s.

Reserve trims if the voiced take runs long: scene 1's "Working each one out by hand ..." sentence (about 4 s); scene 4's last sentence (about 5 s; the grey struck cell can stay silent).

## Scene list and build ids

Lesson key `m-s11f08` (route math-s11-f08). Explainer folder `src/explainer/lessons/math-s11-f08`; build inputs in `docs/production/claude-pm/lessons/math-s11-f08/` (at voicing).

In order (13 scenes): hook-orders, cells-formulas, worked-e2, fill-down, one-unit, stopping-table, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-l01, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | f07's pancake orders |
| 35 to 85 s | 2 | The grid, its names and the formula |
| 85 to 125 s | 3 | E2's two views on the board |
| 125 to 180 s | 4 | Fill down and the ripple |
| 180 to 200 s | 5 | One unit per column |
| 200 to 260 s | 6 | The stopping-distance table |
| 260 to 270 s | 7 | Framed memory card |
| 270 to 365 s | 8 to 11 | Question cards and countdowns, then feedback |
| 365 to 400 s | 12 | Two plots for l01 |
| 400 to 445 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on f07's frame; 1 to 2 stage change (the orders become the grid); 2 to 3 clear change (board over the grid); 3 to 4 stage change; 4 to 5 clear change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-f08-learning-review.md`, `science_check` = `checks/m-s11-f08-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only): no pancake, canteen or order-sheet plate exists; `ms11s-pancake-stack-v1.png` is briefed in f07; `ms11s-p-plate-car-v1.png` (f03b) returns as a badge.

Need (painted, new): none here. Reused: `ms11s-pancake-stack-v1.png` (1, 2, 12), `ms11s-p-plate-car-v1.png` (6).

Coded: the spreadsheet grid, formula bar, fill handle and cursor (no hand), the in-cell bars, the board, the plots, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot` (final frame), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row f08; ruling 90):
1. **SpreadsheetGrid** (shared; first requested by math-s12-a04b; also l05, Year 11 e06, e12, m06, m08, Year 12 i05, i11, c06): column letters, row numbers, a formula bar, typed formulas with each reference ringed in its cell's colour, a fill handle that copies a formula down with relative references (row numbers shift), row-by-row computation, an edit ripple (an input retyped updates its dependants), `*`, `/`, `^` and `+`, and an in-cell bar option for a numeric column. Unbranded (no product colours, ribbons or logos). Check: E2 to E5 give 58, 55, 36, 44; B2 → 15 gives E2 = 70; the capstone's D column gives 28 to 154; the bar text for each selected row shows that row's numbers.

## Codex asset brief (Maths S11 F08)

No new plate. `ms11s-pancake-stack-v1.png` is briefed in `math-s11-f07.md` and must exist before this build (it also appears in l01's opening frame). `SpreadsheetGrid` must be built and checked before this build (ruling 90). Report in `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm the site's `we-1` keeps its numbers ($58) and that `we-3`'s "$4 × 8" (MS-80 item 2) is not used; confirm no "$" absolute reference appears.
4. Confirm both attempts carry every demand and neither card nor picture shows an answer.
5. Confirm scene 1 matches f07's final frame and scene 12 matches section 1 of `../checks/root-decisions-maths-s11-f01-f08.md` exactly (frame and spoken text).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Spreadsheet Formulas: One Formula, a Whole Table | Year 11 Maths Standard

(Title length: 73 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson06.sa.html

A pancake breakfast has four supply orders, each a quantity times a price plus a delivery fee, and next week there are forty more. A spreadsheet can use one formula for every row. See how cells are named by column and row, why every formula starts with =, how =B2*C2+D2 is the same as T = qc + f, how filling down changes B2 to B3 so each row uses its own cells, why an edited input updates its total by itself, and why each column needs one unit. Then fill down a stopping-distance model to see how fast stopping distance grows. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Formulas and equations. Year 11 is one course for Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024), Year 11:
"Use a spreadsheet to perform calculations involving formulas"
"Apply given formulas to solve problems in a variety of contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

Builds on: Substituting into Formulas and Stopping Distance. Next: Gradient and y-Intercept.

#Year11Maths #MathsStandard #Spreadsheets #HSCScience

## Open decisions

- **1. Saying "star" (learning review).** Scene 2 says "times is a star", and the narration then reads formulas aloud with "star". Check it sounds natural; the alternative reads "equals B2 times C2 plus D2" with the star only on screen.
- **2. The final frame's new rule (l01 designer and root).** The final frame adds the pancake-mix total for 0 to 6 bags (=A2*4+10), a rule the student already has from the first order, so l01 can read c = 10 and m = 4 straight from it. If the l01 designer prefers another line, change section 1 of the decisions file and this scene together.
- **3. Header change (root).** The final frame's header drops "· FORMULAS AND EQUATIONS" because it bridges two strands; l01 adds "· LINEAR RELATIONSHIPS".

## Review notes

- Student learning review: trace from f01, f04a, f04b and Stage 5 tables only. Check that cell names, "=" and the symbols arrive one at a time; that the two views of a cell are clear; that the changing row number in fill down is unmissable; that the capstone reads as f04b's model, not a new formula; that the final frame's straight line and curve are seen without a gradient being taught; that the cards give nothing away. Then the Codex maths check and error check, then the `SpreadsheetGrid` build, voicing and a build to grade A.
