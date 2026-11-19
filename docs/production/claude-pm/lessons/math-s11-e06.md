# Maths S11 E06: How does a spreadsheet model a pay packet with overtime, bonuses and commission? One formula per pay type read as the working already known, filled down every row; a salary and a bonus; a commission rate locked in one cell with $ signs; piecework and royalties rows and a SUM (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 90 (`../checks/root-rulings-maths-standard-outline.md`; rulings 3, 5, 85 and 90 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,137 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 477 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s11-e06-learning-review.md` (summary `../checks/m-s11-e01-e12-learning-review-summary.md`), with root's rulings 84 to 96 in `../checks/root-rulings-maths-standard-outline.md` (ruling 96 accepts every finding as the review wrote it, including the optional ones, and fixes the repriced values). Numbers rechecked with SymPy: `work/brief-review-s11-e/resolve-check.py`. Findings by the review's numbers:

1. Should fix, e05 scene 11 and e06 scene 1 ("one formula, every worker"): **accepted** (ruling 96). Chip "a formula, filled down" (e05 handoff and this opening); scene 1: "Type a formula once, fill it down, and it works for every worker paid the same way.", with the hand tag "one formula per kind of pay" on "fill it down"; heading "hook: a formula, filled down"; question chip "A formula, filled down?". The scene 2 tag becomes "fill down: one formula, every hourly row".
2. Should fix, scene 3 (column C meant two things in one sheet): **accepted**: the manager is on a second tab "Salaried" ("A: role", "B: salary", "C: weekly pay", "D: bonus"), row 2 "manager | 72800", formulas "=B2/52" and "=B2*5%" (ghost "=B2*5"); narration "in B two of a second tab ... equals B two divided by fifty-**two** ... equals B two times five per **cent**". Transition 2 to 3 is a tab change. Key note 3 (=B2/52, =B2*5%) and A2's B2, C2, D2 layout now match the teaching.
3. Optional, scene 5 (H1 and H2 meant different things in two tabs): **accepted**: the e-book's rate and price sit in "H3: 12%" and "H4: $9.99", formula "=B2*$H$4*$H$3", so every locked cell in the video is unique (H1 2.5%, H2 $0.55, H3 12%, H4 $9.99).

Joins: scene 1 opens on e05 Revision 2's final frame (chip "a formula, filled down"); scene 11 (e07's opening) unchanged. Practice cards, feedback and key notes unchanged.

Narration 5,137 characters by `work/brief-review-s11-e/count.py` (Revision 1: 5,086 by the same parser; 5,075 by the author's), about 477 s with holds, 93 s under the 570 s cap; feedback speech about 29.7 s and 19.2 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: seventh video of the Year 11 Earning money strand, outline playlist order 21. One video for Standard 1 and Standard 2. Viewers arrive from e05's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e06.md`. Site lessons: none (crosswalk: "No Earning money lesson uses a spreadsheet."); this video teaches from the syllabus (ruling 3), logged in `../site-corrections-maths-standard.md` sections 2 and 11. Spreadsheet basics (cells, =, fill-down, references that move row by row) are math-s11-f08's (pack `../pre-design/maths-standard/math-s11-f08.md`, which does **not** teach absolute references); this video assumes f08 and adds the $ fixed reference (pack decision; see open decision 1). Route entry: `math-s11-e06` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the wheelbarrow plate reused; a new steel-capped boots plate for the final frame; the spreadsheet (`SpreadsheetGrid`, ruling 90), formula strips and boards coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents; no people; one question; one stage at a time; words before symbols (each formula read in words as the working it replaces); plain meanings (input cell, formula cell, fill down, bonus, absolute or locked reference); the spreadsheet as a coded, unbranded grid ("any spreadsheet program works"); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a garden centre's pay sheet, an e-book); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; award rates said once to change every 1 July).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Ways of earning", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json` (typographic apostrophe as in the source):

- `cic3748618`: "Use a spreadsheet to model an employee’s income including overtime, salary, bonuses, commission, piecework and royalties"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e05's final frame exactly (the wheelbarrow `ma11-garden-barrow-v1.png` with the tag "garden centre: weekly pay"; a blank `SpreadsheetGrid` with headings "A: role", "B: rate", "C: hours", "D: overtime hours", "E: pay" and five empty rows; chips "a formula, filled down", "Next: a pay spreadsheet", "?"). Recalls f08 (a formula starts with =, * for times, / for divide, fill-down moves the references row by row) and e01 to e04a (each pay type's working) in a grey chip each. Teaches: input cells and formula cells; a wage-with-overtime formula read as the e02 working, filled down; a salary's weekly pay (÷ 52) and a percentage bonus; commission with the rate in one cell; why a filled-down reference to the rate cell slides to an empty cell; the $ fixed (absolute) reference that locks it; a what-if change to the rate cell updating every row; piecework and royalties rows with locked rate cells; SUM for a total; the sheet keeping every digit behind its rounded display. Stops at a pay model. Not taught: tax in a spreadsheet (e12); IF formulas (e12 reads one); charts.

## Decisions

- **Anchor: a garden centre's weekly pay sheet (reused plate, from e05's final frame).** One workplace whose staff cover every income type the syllabus lists: a casual, a permanent worker with overtime, a salaried manager with a bonus, plant sales staff on commission, a seedling potter on piecework, and the manager's gardening e-book for royalties (pack anchors 1 and 2, joined). Plate reused: `ma11-garden-barrow-v1.png`. Staff rows are labelled by role; no people.
- **Example values (pack, original and labelled).** Casual $34.76 × 24 = $834.24 (the 2026-27 retail Level 1 casual rate, as a given example); permanent $28.90 × 38 + $28.90 × 1.5 × 3 = $1,228.25; manager $72,800 a year, $1,400.00 a week, 5% bonus $3,640.00; commission 2.5% of $18,450 and $22,300 ($461.25, $557.50; at 3%, $553.50, $669.00); piecework 820 pots × $0.55 = $451.00; e-book royalties 12% of $9.99 on 120, 95 and 210 sales ($143.86, $113.89, $251.75; SUM $509.49, while the rounded cells add to $509.50).
- **The $ reference (pack decision; f08 and Year 12 a04b do not teach it).** Taught here in one scene because the syllabus's commission and piecework rows need a shared rate cell, and the "rates change every year" habit depends on it. Words first: "lock the cell"; then "$H$1" with "dollar H dollar one". e12 reuses it.
- **Join.** Scene 1 opens on e05's final frame exactly; the grid fills in scene 2.
- **Simulations (standard item 3).**
  1. **Fill-down** (scene 2; `SpreadsheetGrid`): E2's formula copies down; each copy's references visibly re-point to its own row (coloured outlines move with it), values appear row by row.
  2. **Broken fill-down** (scene 4; new grid prop): G2's =F2*H1 fills down; G3's outline jumps to H2 (an empty cell), and "0.00" appears; the empty H2 rings.
  3. **Lock and what-if** (scene 4; new grid prop): $ signs drop into the reference; fill-down again, all outlines now point at H1; H1 changes 2.5% → 3% and the dependent cells ripple to new values.
  4. **Hidden digits** (scene 5): a magnifier over C2 shows "143.856" behind the displayed "143.86"; the three hidden values add to 509.490 and the shown ones to 509.50.
- **Colour roles (fixed for e01 to e06).** Rates and rate cells **amber**; hours, items and sales (inputs) **blue**; pay cells (formula outputs) **teal**; salary and fixed amounts **violet**; cell-reference outlines in the colour of the cell they point at; answer **green**; mistake **red**, crossed slips only; recalls grey.
- **Large type, handwritten voice.** Grid cells 36 to 40 px (the active cell 44 px), the formula bar 44 px; current working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "input cells", "formula = the working", "fill down: one formula, every hourly row", "one formula per kind of pay", "rate × hours + overtime rate × overtime hours", "year ÷ 52", "5% = 0.05", "slid to an empty cell", "$ locks it", "one change, every row", "the sheet keeps every digit". At most two live at once.
- **Stage changes (standard item 2).** The wheelbarrow and blank grid (1); the hourly rows filling (2); the salary row and formula strip (3); the commission block, broken and fixed (4); the per-item and e-book tabs (5); framed card (6); question cards (7 to 10); the boots for e07 (11); key notes (12).
- **Worked examples (g01 layout in a spreadsheet).** Each scene keeps the g01 order: a short task strip above the grid, the formula bar as the formula strip, the input cells as the grouped givens (blue and amber), and the answer cell framed green. A "formula = working" strip (44 px) sits under the formula bar in scenes 2 to 5, e.g. "=B3*C3+B3*1.5*D3 ↔ 28.90 × 38 + 28.90 × 1.5 × 3". Crossed slip in 4: "=F2*H1 filled down → 0.00" (caption "lock the rate cell: $H$1").
- **Memory aid.** Framed card: "Inputs in cells, the working in the formula, fill it down." Key line: "Lock a shared rate with $ ($H$1): one change updates every row."
- **Visual surprise.** The filled-down commission column shows a row of zeros, and the outline on the screen shows exactly where the formula went looking (scene 4).
- **Site notes.** No site lesson (logged gap). The pack's royalty note is kept: the SUM of the unrounded cells (509.49) is a cent below the sum of the displayed cells (509.50).
- **Plain meanings at first use.** Input cell ("a cell you type a number into"); formula cell ("a cell that works something out from other cells"); fill down (recalled from f08: "copy the formula to the rows below; its references move with it"); bonus ("an extra payment on top of normal pay"); locked (absolute) reference ("a reference with $ signs that does not move when filled down").
- **Attempts.** A1 (pack question 1 (a) and (b)): D2 = 38 × 29.40 + 4 × 29.40 × 1.5 = $1,293.60; E2 =F2*$H$1; crossed "=F2*H1" (caption "without $ the rate cell slides when filled down"). A2 (pack question 2, with a new salary and rate so the teaching values are not repeated): $68,900, 4% bonus: =B2/52 → $1,325.00; =B2*4% → $2,756.00; crossed "=B2/12 → $5741.67" (caption "a week is the year ÷ 52").
- **Mistake scene:** none separate. The sliding rate reference (4, the broken fill-down; A1 crossed); a percentage typed as a whole number (3, said: "the sheet reads 5% as 0.05"); dividing a salary by 12 for a week (A2 crossed); reading the rounded display as exact (5, the magnifier).
- **Cause chain taught, in order:** (1) a formula is the working with cell names in place of numbers, so it works for any inputs (2); (2) filling down moves every reference one row, so each row uses its own inputs (2); (3) a shared rate in one cell must not move, but a plain reference moves too and lands on an empty cell (4); (4) $ signs lock the reference, so every row uses the one rate cell, and changing that cell updates every row (4); (5) the sheet stores every digit and only rounds the display, so its total can differ by a cent from adding displayed values (5).
- **Entry knowledge (route):** math-s11-f08 (cells, =, fill-down); math-s11-e01 to e04a (each pay type). Recalled in a grey chip each.
- **Money sources (rulings 5 and 85).** The casual row's $34.76 is the 2026-27 General Retail Award Level 1 casual rate (FWO pay guide, from 1 July 2026; e02's source; Codex confirms). Every other value is a labelled example. Said once (scene 1): "award rates change every first of July", the reason for keeping rates in cells.
- **Handoff (to math-s11-e07, "How do allowable deductions turn income into taxable income?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: the boots `ms11-steel-cap-boots-v1.png` (about 700 px wide) standing on a coded, unbranded receipt (360 × 480 px) "Steel-capped work boots $189.00", a strand chip "Ways of earning: done" (grey); chips "does this cut my tax?", "Next: taxable income" and "?". No tax figures. This is e07's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) E2: 34.76 × 24 + 34.76 × 1.5 × 0 = 834.24; E3: 28.90 × 38 = 1098.20, 28.90 × 1.5 × 3 = 130.05, total 1228.25.
  (b) Manager: 72 800 ÷ 52 = 1400.00; × 0.05 = 3640.00.
  (c) Commission: 18 450 × 0.025 = 461.25; 22 300 × 0.025 = 557.50; at 0.03: 553.50 and 669.00.
  (d) Piecework: 820 × 0.55 = 451.00.
  (e) Royalties: 120 × 9.99 × 0.12 = 143.856 → 143.86; 95 × … = 113.886 → 113.89; 210 × … = 251.748 → 251.75; SUM 509.490 → 509.49; displayed sum 509.50.
  (f) Pronunciations: "equals B two times C two"; "dollar H dollar one"; "equals SUM, C two to C four"; "eight hundred and thirty-four dollars twenty-four".

Main question: *A garden centre pays casuals, permanent staff with overtime, a salaried manager, commission and piecework. How does a spreadsheet model a pay packet with overtime, bonuses and commission?*
Entry knowledge (math-s11-f08; e01 to e04a): cells, =, fill-down; each pay type.
Stops after: a pay model with filled-down formulas, a locked rate cell and a SUM. No tax.
Handoff: math-s11-e07: "does this cut my tax?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): rates amber; inputs blue; pay cells teal; salary violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame. The grid is coded and unbranded; formulas are shown exactly as typed.

### 1. hook: a formula, filled down
> Last time ended at a garden centre. Its weekly pay sheet has casual staff, permanent staff with overtime, a salaried manager, and people paid by commission or by the piece. Working out every pay by hand takes ages, and award rates change every first of July, so it all has to be redone. A spreadsheet fixes that. Type a formula once, fill it down, and it works for every worker paid the same way. So how does a spreadsheet model a pay packet with overtime, bonuses and **commission**?

Visual: opens on e05's final frame exactly (the wheelbarrow with its tag, the blank grid, chips). On the first sentence the "Next" chip fades. On "casual staff" role labels type into column A: "casual", "permanent", "manager", "plant sales", "potting". On "award rates change" a grey chip "award rates change every 1 July". On "fill it down" hand tag "one formula per kind of pay" (Revision 2, review finding 1). On "commission" heading "A pay spreadsheet" writes on; the question chip "A formula, filled down?" moves to the top right.

### 2. hourly pay, filled down
> Start with the hourly staff. Each row is one worker. Column B is the rate, C is ordinary hours, and D is overtime hours. In cell E two, type equals B two times C two, plus B two times one point five times D **two**. In words, that's rate times hours, plus the overtime rate times the overtime hours, the same working as before. The casual row has no overtime, so E two shows eight hundred and thirty-four dollars twenty-four, straight **away**. Now fill the formula down. It slides one row, so E three uses row three's own **cells**. The permanent worker, on twenty-eight ninety for thirty-eight hours plus three hours of overtime, gets one thousand two hundred and twenty-eight dollars twenty-five. One formula, every **row**.

Visual: stage change: the grid (1,400 × 520 px) fills rows 2 and 3 with inputs: "casual | 34.76 | 24 | 0", "permanent | 28.90 | 38 | 3" (rates amber, hours blue), hand tag "input cells". Task strip above, 40 px: "Weekly pay = rate × hours + overtime rate × overtime hours". On "two" (bold) E2 is active; the formula bar (44 px) shows "=B2*C2+B2*1.5*D2", outlines on B2, C2 and D2 in their colours. On "In words" the "formula = working" strip under the bar: "rate × hours + rate × 1.5 × overtime hours", hand tag "formula = the working". On "away" E2 shows "834.24" (teal). On "fill the formula down" (simulation 1) the fill handle drags to E3; on "cells" E3's bar shows "=B3*C3+B3*1.5*D3", its outlines on row 3, hand tag "fill down: one formula, every hourly row". On "one thousand two hundred and twenty-eight" E3 shows "1228.25" (framed green), and the strip reads "28.90 × 38 + 28.90 × 1.5 × 3 = 1098.20 + 130.05". On "row" both pay cells pulse.

### 3. a salary and a bonus
> The manager is on a salary, seventy-two thousand eight hundred dollars a year, in B two of a second tab. Weekly pay is the year divided by fifty-two, so the formula is equals B two divided by fifty-**two**. That's one thousand four hundred dollars a week. The manager also gets a bonus, an extra payment on top of normal pay. Here it's five per cent of the salary, once a year. The formula is equals B two times five per **cent**, three thousand six hundred and forty dollars. A spreadsheet reads five per cent as zero point zero five, so typing the per cent sign is **fine**.

Visual: tab change (Revision 2, review finding 2): a second tab "Salaried" opens beside the hourly tab, with its own headings "A: role", "B: salary", "C: weekly pay", "D: bonus (once a year)"; row 2 "manager | 72800" (violet), hand tag "new tab: new columns". On "two" (bold) C2 active, bar "=B2/52", strip "72 800 ÷ 52", hand tag "year ÷ 52"; C2 shows "1400.00" (teal). On "bonus" chip "bonus: an extra payment on top". On "cent" D2 active, bar "=B2*5%", strip "72 800 × 0.05"; D2 shows "3640.00" (framed green). On "fine" hand tag "5% = 0.05", a grey crossed ghost "=B2*5 → 364 000" (caption "5 is not 5%").

### 4. commission: lock the rate cell
> Now the plant sales staff, paid two and a half per cent commission. The rate sits in its own cell, H one, so it's easy to change. In G two, type equals F two times H one, sales times the **rate**. That works for the first person. But fill it down, and the next row reads F three times H **two**. H two is empty, so the commission shows zero. The rate cell slid down with everything else. To stop that, put dollar signs in the reference, dollar H dollar one. The dollar signs lock the cell, so every row uses H one. Fill down again, and the commissions are four hundred and sixty-one dollars twenty-five, and five hundred and fifty-seven dollars **fifty**. Here's the payoff. Change H one to three per cent, and every commission updates at **once**.

Visual: stage change: a new block, "F: sales", "G: commission", and the rate cell "H1: 2.5%" boxed in amber with a label "commission rate". Rows: "plant sales | 18450", "plant sales | 22300" (blue). On "rate" (bold) G2 active, bar "=F2*H1", outlines on F2 and H1; G2 "461.25". On "two" (bold) (simulation 2) fill-down: G3's bar "=F3*H2", its amber outline jumps to the empty H2, which rings; G3 shows "0.00"; hand tag "slid to an empty cell". A red slip "=F2*H1 filled down → 0.00" writes and is crossed (caption "lock the rate cell: $H$1"). On "dollar H dollar one" (simulation 3) "$" signs drop into the bar: "=F2*$H$1", hand tag "$ locks it". On "Fill down again" G3's bar "=F3*$H$1", both outlines on H1. On "fifty" G2 "461.25" and G3 "557.50" (framed green). On "three per cent" H1 changes to "3%"; on "once" G2 and G3 ripple to "553.50" and "669.00", hand tag "one change, every row".

### 5. per-item rows, royalties and a total
> Pay per item works the same way. A worker potting seedlings is paid fifty-five cents a pot, with the rate locked in H two. Eight hundred and twenty pots, times dollar H dollar two, is four hundred and fifty-one **dollars**. Royalties too. The manager has written a gardening e-book that sells for nine ninety-nine, with a twelve per cent royalty. Each month's royalty is sales, times price, times rate. Equals SUM, C two to C four, adds the three months, five hundred and nine dollars forty-nine. Add the rounded cells yourself, and you'd get five hundred and nine fifty, one cent more, because the sheet keeps every digit behind what it shows. Trust the sheet's **total**.

Visual: stage change: two small tabs side by side. Tab "Per item": "potting | 820 pots", rate cell "H2: $0.55" (amber). On "dollars" C2 bar "=B2*$H$2", strip "820 × 0.55", C2 "451.00" (framed green). Tab "E-book": "month | sales | royalty", rows "Jan 120", "Feb 95", "Mar 210", rate cells "H3: 12%", "H4: $9.99" (Revision 2, review finding 3: every locked cell in the video is unique). On "sales, times price, times rate" C2 bar "=B2*$H$4*$H$3", filled down: "143.86", "113.89", "251.75" (teal). On "Equals SUM" C5 bar "=SUM(C2:C4)", C5 "509.49" (framed green). On "one cent more" (simulation 4) a magnifier over C2 shows "143.856", over C3 "113.886", over C4 "251.748", with a strip "143.856 + 113.886 + 251.748 = 509.49; 143.86 + 113.89 + 251.75 = 509.50"; on "total" hand tag "the sheet keeps every digit".

### 6. memory aid
> Here's the summary. Inputs go in cells, and each formula is the working you already know. Fill it down to reuse it on every row. And lock a shared rate cell with dollar signs, so one change updates **everything**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a mini grid with the formula bar "=F2*$H$1" and outlines from every row to H1. Main line, hand font 56 px: "Inputs in cells, the working in the formula, fill it down." On "everything" the key line, 40 px: "Lock a shared rate with $ ($H$1): one change updates every row." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A spreadsheet calculates weekly pay. Column A holds ordinary hours, B the hourly rate, and C overtime hours, paid at time and a half. Cell D two contains equals A two times B two, plus C two times B two times one point five. Row two holds thirty-eight hours, twenty-nine dollars forty, and four overtime hours. What value does D two show? Then, sales are in F two, and the commission rate is in H one. Write a formula for E two that gives the commission, and still works when it's filled down. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A spreadsheet calculates weekly pay. Column A holds ordinary hours, column B the hourly rate and column C overtime hours (paid at time-and-a-half). Cell D2 contains =A2*B2+C2*B2*1.5. Row 2 holds A2 = 38, B2 = 29.40, C2 = 4. (a) What value does D2 show? (b) Sales are in F2 and the commission rate is in H1. Write a formula for E2 that gives the commission and still works when it is filled down." Picture slot: a small grid with A2, B2, C2, F2 and H1 filled and D2, E2 blank. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Thirty-eight times twenty-nine forty is one thousand one hundred and seventeen twenty. Four times twenty-nine forty times one point five is a hundred and seventy-six forty. So D two shows one thousand two hundred and ninety-three dollars **sixty**. For the commission, it's equals F two times dollar H dollar **one**. Leaving out the dollar signs is the **slip**. The rate cell would slide when filled down.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "38 × 29.40 = 1117.20"; "4 × 29.40 × 1.5 = 176.40"; on "sixty" "D2 = 1293.60" (framed green). On "one" E2's bar "=F2*$H$1" (framed green). On "slip" a red slip "=F2*H1" writes and is crossed (caption "without $ the rate cell slides when filled down"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A salaried employee's yearly salary is in cell B two, sixty-eight thousand nine hundred dollars. A bonus of four per cent of salary is paid once a year. Write formulas for the weekly pay in C two, and the bonus in D two, and calculate both values. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A salaried employee's yearly salary is in cell B2 ($68 900). A bonus of 4% of salary is paid once a year. (a) Write formulas for the weekly pay (C2) and the bonus (D2). (b) Calculate both values." Picture slot: a small grid with B2 = 68900 and C2, D2 blank. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Weekly pay is equals B two divided by fifty-two, one thousand three hundred and twenty-five **dollars**. The bonus is equals B two times four per cent, two thousand seven hundred and fifty-six **dollars**. Dividing by twelve for a week is the **slip**. That's a month.

Visual: the card shrinks to the top. Rows, 44 px: on "dollars" (first) "C2: =B2/52 → 1325.00" (framed green); on "dollars" (second) "D2: =B2*4% → 2756.00" (framed green). On "slip" a red slip "=B2/12 → 5741.67" writes and is crossed (caption "a week is the year ÷ 52"). Hold about 1 s.

### 11. handoff
> That's every way of earning in one sheet. Next comes tax, and the first question is what counts. These steel-capped boots cost a hundred and eighty-nine dollars, and they're needed for work. Does buying them cut your **tax**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "every way of earning" a grey strand chip "Ways of earning: done". On "steel-capped boots" the boots `ms11-steel-cap-boots-v1.png` (about 700 px wide) standing on the coded receipt "Steel-capped work boots $189.00". On "tax" chip "does this cut my tax?". On "next" chips "Next: taxable income" and "?". Hold about 2 s. No tax figures. This is e07's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Inputs in cells; a formula is the working with cell names.
- Wage with overtime: =B2*C2+B2*1.5*D2 (fill down).
- Salary per week: =B2/52. Bonus of 5%: =B2*5%.
- Shared rate in one cell, locked: =F2*$H$1.
- =SUM(C2:C4) totals a column; the sheet keeps every digit.

Memory aid (framed card, right side, as in scene 6): *Inputs in cells, the working in the formula, fill it down.* Key: *Lock a shared rate with $ ($H$1): one change updates every row.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e07's opening frame.

## Teaching checks

- **Does it explain causes?** Why a formula works for every row: it is the working with cell names (2). Why fill-down breaks the rate reference: every reference moves one row (4). Why $ fixes it: it locks the reference (4). Why keep rates in cells: rates change every year, and one change updates every row (1, 4). Why the total can differ by a cent: the sheet keeps every digit (5).
- **Misconceptions addressed:** the sliding rate reference (4; A1 crossed); 5 for 5% (3, crossed ghost); a salary ÷ 12 for a week (A2 crossed); the display read as exact (5).
- **Visual standard, item by item:** 1 the garden centre from the first frame; 2 a new stage every 40 to 60 s; 3 fill-down with moving outlines, a column of zeros from a slid reference, a what-if ripple, a magnifier on hidden digits; 4 fixed roles with outlines coloured by what they point at; 5 large type; 6 hand tags; 7 g01 order in each sheet (task, formula bar, inputs, framed answer, crossed slip); 8 framed card and five bullets; 9 the outline jumping to an empty cell.
- **One idea at a time:** hourly rows (2), salary and bonus (3), the locked rate (4), per-item rows and SUM (5).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 28 s and 19 s.
- **Avoided double teaching:** f08's =, cells and fill-down recalled in a chip; each pay type's working recalled, not re-taught.
- **Syllabus coverage:** `cic3748618`: overtime (2, A1), salary (3, A2), bonuses (3, A2), commission (4, A1), piecework (5), royalties (5); key notes 1 to 5.
- **Out of scope by design:** tax in a spreadsheet (e12); IF formulas; charts.

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1 (a) and (b), original HSC style, 3 marks suggested, not an official marking scheme).** "A spreadsheet calculates weekly pay. Column A holds ordinary hours, column B the hourly rate and column C overtime hours (paid at time-and-a-half). Cell D2 contains =A2*B2+C2*B2*1.5. Row 2 holds A2 = 38, B2 = 29.40, C2 = 4. (a) What value does D2 show? (b) Sales are in F2 and the commission rate is in H1. Write a formula for E2 that gives the commission and still works when it is filled down."
Model answer: (a) 38 × 29.40 + 4 × 29.40 × 1.5 = 1117.20 + 176.40 = $1293.60. (b) =F2*$H$1. Classic mistake (crossed): "=F2*H1".

**Attempt 2 (scene 9; pack question 2 with $68 900 and 4%, 3 marks suggested).** "A salaried employee's yearly salary is in cell B2 ($68 900). A bonus of 4% of salary is paid once a year. (a) Write formulas for the weekly pay (C2) and the bonus (D2). (b) Calculate both values."
Model answer: (a) C2: =B2/52; D2: =B2*4% (or =B2*0.04, or =B2*$H$3 with 4% in H3). (b) $1325.00 a week; $2756.00 bonus. Classic mistake (crossed): "=B2/12 → 5741.67".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hourly rows | 834.24; 1098.20 + 130.05 = 1228.25 | 2 |
| Manager | 1400.00; 3640.00; ghost 364 000 | 3 |
| Commission | 461.25, 557.50; 0.00 (broken); at 3%: 553.50, 669.00 | 4 |
| Piecework | 820 × 0.55 = 451.00 | 5 |
| Royalties | 143.856, 113.886, 251.748; SUM 509.49; displayed sum 509.50 | 5 |
| A1 | 1117.20 + 176.40 = 1293.60; =F2*$H$1 | 7, 8 |
| A2 | 1325.00; 2756.00; slip 5741.67 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check, and to type each formula into a spreadsheet program to confirm the displayed values.

Revision 2: every changed or newly shown value rechecked with SymPy in `work/brief-review-s11-e/resolve-check.py` (`python -I`; 117 checks, 0 failures); placeholder values are checked only as the arithmetic built on them.

- 34.76 × 24 = 834.24; 28.90 × 38 = 1098.20; 28.90 × 1.5 × 3 = 130.05; sum 1228.25.
- 72 800 ÷ 52 = 1400.00; 72 800 × 0.05 = 3640.00; 72 800 × 5 = 364 000.
- 18 450 × 0.025 = 461.25; 22 300 × 0.025 = 557.50; 18 450 × 0.03 = 553.50; 22 300 × 0.03 = 669.00.
- 820 × 0.55 = 451.00.
- 120 × 9.99 × 0.12 = 143.856; 95 × 9.99 × 0.12 = 113.886; 210 × 9.99 × 0.12 = 251.748; sum 509.49 (exactly 509.490); 143.86 + 113.89 + 251.75 = 509.50.
- 38 × 29.40 = 1117.20; 4 × 29.40 × 1.5 = 176.40; sum 1293.60.
- 68 900 ÷ 52 = 1325.00; 68 900 × 0.04 = 2756.00; 68 900 ÷ 12 = 5741.666… → 5741.67.

## Memory aid check

- **"Inputs in cells, the working in the formula, fill it down."** with key line **"Lock a shared rate with $ ($H$1): one change updates every row."** Original. Meaning, as said in scene 6: a spreadsheet model is the hand working with cell names, reused on every row by filling down, with any shared rate locked. Assumptions checked: references move when filled down unless locked (2, 4); each row's inputs are in the same columns (2); the rate cell holds a percentage that the sheet reads as a decimal (3, 4). It helps a new case: a piecework rate of $0.40 in H5 and items in B2 to B9 give =B2*$H$5 filled down, and a new rate of $0.45 updates all eight rows. Introduced after scenes 2 to 5.
- **Considered, not used:** "Fill down, but lock the rate" alone (drops the formula-as-working idea).

## Narration length estimate

Revision 2, counted by `work/brief-review-s11-e/count.py` (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; it counts the joining spaces the author's parser left out): **5,137 characters** (Revision 1: 5,086 by the same parser, 5,075 by the author's), 12 scene headings. Characters per scene (1 to 12): 480, 711, 564, 732, 665, 209, 526, 395, 279, 256, 234, 75. Speech about 386 s; holds and settling unchanged from Revision 1 (below); total **about 477 s**, 93 s under the 570 s cap. Feedback speech: about 29.7 s and 19.2 s. The Revision 1 paragraphs below are kept for the record.

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**5,075 characters**, 12 scene headings. Characters per scene (1 to 12): 442, 711, 551, 732, 665, 209, 526, 395, 279, 256, 234, 75.

At 13.3 characters per second the speech is about 382 s. Total with the holds and settling below **about 473 s**, 97 s under the 570 s cap; speech and holds before the notes about 428 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the fill-downs (2, 4), the what-if ripple (4) and the magnifier (5), about 26 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 5's "Add the rounded cells yourself ... behind what it shows." (the magnifier strip carries it; keep "Trust the sheet's total."); scene 3's last sentence (the crossed ghost carries it).

## Scene list and build ids

Lesson key `m-s11e06` (route math-s11-e06). Explainer folder `src/explainer/lessons/math-s11-e06`; build inputs in `docs/production/claude-pm/lessons/math-s11-e06/` (at voicing).

In order (12 scene headings): hook-formula-filled-down, hourly-fill-down, salary-bonus, commission-locked-rate, per-item-royalties-sum, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | e05's frame: the wheelbarrow and blank grid |
| 35 to 100 s | 2 | Hourly rows filling down |
| 100 to 145 s | 3 | Salary and bonus |
| 145 to 225 s | 4 | Commission: broken, locked, what-if |
| 225 to 285 s | 5 | Per-item and e-book tabs |
| 285 to 300 s | 6 | Framed memory card |
| 300 to 415 s | 7 to 10 | Question cards and countdowns, then feedback |
| 415 to 435 s | 11 | The boots, for e07 |
| 435 to 480 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e05's last frame continues into 1; 1 to 2 camera continue (the grid fills); 2 to 3 tab change (the "Salaried" tab); 3 to 4 stage change (a new block); 4 to 5 stage change (tabs); 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e06-learning-review.md`, `science_check` = `checks/m-s11-e06-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma11-garden-barrow-v1.png` (green wheelbarrow with sacks, a hose and potted lavender, true alpha; reused as the garden centre). No boots plate exists.

Need (painted, new; see the Codex asset brief): `ms11-steel-cap-boots-v1.png` (scene 11; e07's anchor; needed by this build, ruling 17). Reused: `ma11-garden-barrow-v1.png`.

Coded: the spreadsheet grid, formula bar, outlines, fill handle, tabs, magnifier, receipt, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `SpreadsheetGrid` (ruling 90: built as a shared part before the f08 build), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e06; props on the shared `SpreadsheetGrid`):
1. **Reference outlines** that follow fill-down (each reference drawn as a coloured outline on the cell it points at, re-pointing per row). Check: E3's outlines sit on B3, C3 and D3.
2. **Broken fill-down**: a relative reference to a rate cell slides to an empty cell and shows 0.00. Check: G3 shows 0.00 with its outline on H2.
3. **Absolute reference display**: $ signs typed into the bar; outlines from every row point at the one locked cell; editing it ripples dependent cells. Check: H1 2.5% → 3% changes G2, G3 from 461.25, 557.50 to 553.50, 669.00.
4. **Magnifier on a cell** (small): shows the stored value behind the 2-decimal display. Check: C2 shows 143.856 behind 143.86.

## Codex asset brief (Maths S11 E06: steel-capped boots; also e07's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s11-e06.md`, route entry math-s11-e06. Paint after the learning review and maths check pass and root gives the go-ahead, and before this build (the final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-trade-van-v1.png` and `maths/ma11-garden-barrow-v1.png`; no text, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms11-steel-cap-boots-v1.png` (about 1400 × 1100 px): a pair of tan leather steel-capped work boots, laces done up, three-quarter front view, the reinforced toe caps clearly visible (slightly scuffed to show the protective cap), a little dust on the soles. No brand tab or text. Leave the ground plain so a coded receipt can sit under them. It must read clearly as safety boots at 300 px. Also e07's anchor and picture slots.

Report inspection on the paper background (`#f6f1e7`) at 800 px, 600 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11-e06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and type every formula into a spreadsheet program to confirm the displayed values (including 509.49 for the SUM).
2. Confirm the syllabus quote matches the route-inputs JSON exactly (typographic apostrophe).
3. Confirm the casual rate $34.76 on the FWO pay guide for 1 July 2026, and that "award rates change every first of July" is said once.
4. Confirm every formula on screen is valid in a common spreadsheet program (=B2*5% and =SUM(C2:C4) included), and the spoken form matches the screen.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on e05's final frame and scene 11 matches the decisions file's e06 to e07 join.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Modelling Pay in a Spreadsheet | Year 11 Maths Standard

(Title length: 55 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson02.sa.html

A garden centre pays casuals, permanent staff with overtime, a salaried manager, and staff on commission or piecework. Build one spreadsheet that works out every pay: write each formula as the working you already know, fill it down so it works on every row, and turn a salary into weekly pay with a bonus. See why a filled-down commission formula can suddenly show zeros, and how dollar signs lock the rate cell so one change updates every row. Finish with piecework, royalties and a SUM. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Award rates change every 1 July; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Use a spreadsheet to model an employee’s income including overtime, salary, bonuses, commission, piecework and royalties"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Leave Loading, and spreadsheet formulas. Next: Taxable Income and Allowable Deductions.

#Year11Maths #MathsStandard #Spreadsheets #HSCScience

## Open decisions

- **1. Absolute references.** The f08 pack (and Year 12 a04b) leave out "$" references; this video teaches them in one scene, as the e06 pack recommends, because a shared commission or piecework rate needs them and e12 relies on them. Root confirms, or asks for a version that types the rate into each formula (scene 4 would then teach "change every row" as the cost of not locking).
- **2. The f08 dependency.** e06 assumes f08's =, cell names and fill-down. Its "Builds on" line names spreadsheet formulas generically until f08 has a published title.
- **3. Description link.** No site lesson; the link points to lesson02 (overtime, the most-used working here). Root may prefer the topic index page.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s11-e06-learning-review.md`; ruling 96). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: student learning review (trace from e05 for a student who has done f08; check that each formula reads as the working before the symbols, that the column of zeros explains the $ sign rather than only showing it, that the what-if ripple lands, that the hidden-digits magnifier is clear and not a distraction, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs the shared `SpreadsheetGrid` (ruling 90) with the four props above.
