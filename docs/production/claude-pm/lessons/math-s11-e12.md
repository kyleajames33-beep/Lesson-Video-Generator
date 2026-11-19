# Maths S11 E12: How does a spreadsheet test different tax scenarios? A tax model with the levy rate in its own cell, a supplied tax formula read one table row at a time, scenario rows filled down (the pay-rise myth tested on every row, net against income always rising), and two job offers compared after tax (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 90 (`../checks/root-rulings-maths-standard-outline.md`; ruling 87: the e12 to m01 join is **provisional**; rulings 3, 5, 85 and 90 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,749 characters by script (see "Narration length estimate"), 12 scene headings, about 448 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: last video of the Year 11 Earning money strand, outline playlist order 27. One video for Standard 1 and Standard 2. Viewers arrive from e11's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e12.md`. Site lessons: none (crosswalk: "No Earning money lesson uses a spreadsheet for tax."); taught from the syllabus (ruling 3), logged in `../site-corrections-maths-standard.md` sections 2 and 11. The site's lesson08 incomes recalculated for 2026-27 in e08 and e11 (Priya $80,950) are reused as a check row. Route entry: `math-s11-e12` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the swing tag plate reused for the provisional final frame; the spreadsheet (`SpreadsheetGrid`, ruling 90), the formula reader, the net-against-income graph and boards coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents; no people; one question; one stage at a time; words before symbols (the tax formula read as questions before its symbols are pointed at); plain meanings (scenario, IF formula, net); the spreadsheet coded and unbranded ("any spreadsheet program works"); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a pay rise, two job offers from the start of the strand); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; rates said once to change every year).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Taxation", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json`:

- `ci877a99ed`: "Use a spreadsheet to model scenarios involving taxation"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e11's final frame exactly (one `SpreadsheetGrid` row, headings "A: taxable income", "B: tax", "C: Medicare levy", "D: net", row 2 "80950 | 14805 | 1619 | 64526", row 3 empty; chips "what if I earn more?", "Next: tax in a spreadsheet", "?"). Recalls e06 (formulas as working, fill-down, a rate locked in a cell with $) and e08, e10, e11 (tax from the table, the 2% levy, net) in a grey chip each. Teaches: a tax model with input and formula columns; the levy rate in its own cell, locked; net = income − tax − levy as a formula; the supplied tax formula (nested IF) read as a list of questions, each piece one row of the 2026-27 table, checked on a known income; scenario rows filled down; the pay-rise myth tested on every row (net always rises) and drawn as net against income; two job offers compared after tax; answering in a sentence. Stops at reading and using a tax model. Not taught: building the IF formula from scratch (pack: supplied and read); PAYG and refund columns (named as possible extra columns only); real future rates (no future rate is stated).

## Decisions

- **Anchor: "Will a pay rise leave me worse off?" (pack anchor 1).** The question from e08's myth, now tested on many rows at once, with Priya's row from e11's final frame as the opening. No people.
- **The tax formula: supplied and read (pack decision; the designer's pick).** One nested IF formula (=IF(A2<=18200,0,IF(A2<=45000,0.15*(A2-18200),IF(A2<=135000,4020+0.3*(A2-45000),IF(A2<=190000,31020+0.37*(A2-135000),51370+0.45*(A2-190000)))))) shown once in full, then split by the formula reader into five pieces, each lit with its matching table row; the top two pieces are read in one sentence ("the last two pieces handle the top rows in the same way"). The "one formula per bracket, chosen by eye" option is not used: it cannot fill down across a boundary, which is the point of scenario rows. Checked on Priya ($80,950 → $14,805, e11).
- **Rates in cells (pack decision).** The levy rate sits in G1 (2%), locked with $ as in e06. The tax rates sit inside the supplied formula; the narration says that when the table changes, the formula's numbers are updated once and filled down (no future rate is stated, pack).
- **Scenario rows (pack recalculation).** $40,000, $44,000, $45,000, $46,000 and $50,000: nets $35,930, $39,250, $40,080, $40,760, $43,480; every net higher than the one before. A coded graph of net against income from $40,000 to $50,000 rises everywhere, a little less steeply after $45,000 (68 cents kept per extra dollar instead of 83).
- **Two job offers after tax (pack anchor 3; e01's attempt 2, a callback that closes the strand).** Job A $64,000: net $53,000.00; Job B $33.10 × 38 × 52 = $65,405.60: tax $10,141.68, levy $1,308.11, net $53,955.81; $1,405.60 ahead before tax, $955.81 after (32 cents of each extra dollar go in tax and levy).
- **The pack's "+10 Saturday shifts" scenario** is not used, to keep two scenarios (pack: "two or three are enough") and stay under length; the 32-cent idea it carried is in scene 5 and attempt 2.
- **Notation.** Formulas exactly as typed; spoken as "equals A two minus B two minus C two" and so on; IF spoken as "if".
- **Join.** Scene 1 opens on e11's final frame exactly; the row grows into a sheet in scene 2.
- **Simulations (standard item 3).**
  1. **Formula reader** (scene 3; new `SpreadsheetGrid` prop, the long-formula reader): the IF formula splits into five labelled pieces; each piece slides beside its row of the e08 table, which lights; the check value appears in B2.
  2. **Scenario rows** (scene 4; new prop): rows appear one at a time with short labels in a left column ("now", "rise to 44k", …); fill-down lights each row's formulas; the net column's arrows all point up.
  3. **Net against income** (scene 4; `StudioPlot`): points for each row drop onto a graph, then a line through $40,000 to $50,000; a kink at $45,000 is ringed ("less steep, still rising").
  4. **Two jobs** (scene 5): two rows "Job A", "Job B"; a before-tax gap bar ($1,405.60) shrinks to the after-tax gap ($955.81), the lost part tinted amber and olive ("32c of each extra dollar").
- **Colour roles (fixed for e07 to e12).** Taxable income **blue**; tax **amber**; levy **olive**; net **teal**; the levy rate cell outlined amber-olive; formula reference outlines in the colour of the cell they point at; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Grid cells 36 to 40 px (the active cell 44 px); the formula bar 40 px for the long formula, with the reader's pieces at 40 px; current working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "rate in its own cell", "same working, cell names", "a list of questions", "one piece = one table row", "check it on a known row", "every net goes up", "less steep, still rising", "32c of each extra dollar", "answer in a sentence". At most two live at once.
- **Stage changes (standard item 2).** e11's row (1); the sheet's easy columns (2); the formula reader beside the table (3); scenario rows and the graph (4); two jobs (5); framed card (6); question cards (7 to 10); the strand close and m01 tag (11); key notes (12).
- **Worked examples (g01 order in the sheet).** Each scene keeps a short task strip above the grid, the formula bar as the formula strip, the input cells as givens (blue) and a framed green answer: scene 3's check "B2 = 14805 ✓ (e11's table value)"; scene 4's sentence "Net rises on every row: a pay rise never leaves you worse off."; scene 5's sentence "Job B is still ahead after tax, by $955.81." Crossed slip in 4: "net at $46 000 = 46 000 × 0.70 − levy" (caption "30c only on the dollars over $45 000").
- **Memory aid.** Framed card: "Rates in cells; read the tax formula one table row at a time." Key line: "Fill down: each row is a scenario. Net = income − tax − levy. Answer in a sentence."
- **Visual surprise.** Every arrow in the net column points up, and the graph only bends at $45,000; it never dips (scene 4).
- **Site notes.** No site lesson (logged gap). No 2024-25 figure appears (ruling 85).
- **Plain meanings at first use.** Scenario ("a what-if: one set of numbers to test"); IF formula ("a formula that asks a question and gives one answer if yes and another if no"); net (recalled from e10).
- **Attempts.** A1 (pack question 1): B2 = 58,000: C2 = 4,020 + 0.30 × 13,000 = $7,920; D2 = $1,160; E2 = $48,920; column E is net earnings after tax and the levy; crossed "D2 = 0.02 × 7920 = $158.40" (caption "the levy is 2% of taxable income"). A2 (pack question 2): 1.03 × 58,000 = $59,740; net $50,103.20, $1,183.20 more; less than the $1,740 rise because the extra dollars are all in the 30c row and pay the 2% levy (32c of each); crossed "the rise puts all $59 740 at 30%" (caption "only the extra dollars in the row pay 30c").
- **Mistake scene:** none separate. The pay-rise myth (4, the main scenario; A2 crossed); typing tax rates into many formulas (2, the locked rate cell); the extra income taxed at the average rate (5, "32 cents"); comparing jobs before tax only (5); the levy on the tax (A1 crossed); a boundary read wrongly ("<=45000" includes $45,000 in the 15c row; 3, said by the "up to").
- **Cause chain taught, in order:** (1) a model is the hand working with cell names, so filling it down tests many incomes at once (2, 4); (2) a rate in one locked cell means one change updates every row (2); (3) the IF formula asks the table's questions in order, so each piece is one row (3); (4) each extra dollar only pays its own row's rate plus the levy, so net always rises, just less steeply in higher rows (4); (5) so a bigger gross keeps its lead after tax, but a smaller one, because 32 cents of each extra dollar go (5).
- **Entry knowledge (route):** math-s11-e06 (formulas, fill-down, $); e08 (the table); e10 (the levy, net); e11 (Priya's row); f08 (fill-down). Recalled in a grey chip each.
- **Money sources (rulings 5 and 85).** 2026-27 resident tax rates (e08's source) and the 2% levy (e10's source); Codex confirms. No offsets or low-income levy reduction are modelled (all scenario rows are well above the low-income range, said in the author notes). Said once (scene 1): "Rates change every year too, and a spreadsheet is easy to update."
- **Handoff (to math-s11-m01, percentage increase and decrease; provisional, ruling 87).** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: a grey strand chip "Earning money: done"; the pay-rise row's amber "+3%" tag lifts out of the sheet and lands on the swing tag `ma12-swing-tag-v1.png` (about 360 px tall), whose blank lines show a coded "+3%"; chips "Next: prices go up too" and "?". No price is stated. The m01 designer confirms or replaces this frame; if it changes, only scene 11 and this design's "Next" line change.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Rows: 40 000 → tax 0.15 × 21 800 = 3270, levy 800, net 35 930; 44 000 → 3870, 880, 39 250; 45 000 → 4020, 900, 40 080; 46 000 → 4320, 920, 40 760; 50 000 → 5520, 1000, 43 480. Kept per extra dollar: 0.83 below $45,000, 0.68 above.
  (b) Check: tax(80 950) = 14 805 (e11); the formula reproduces every 2026-27 value in e08 and e11.
  (c) Jobs: A tax 4020 + 0.30 × 19 000 = 9720, levy 1280, net 53 000; B 65 405.60: tax 4020 + 0.30 × 20 405.60 = 10 141.68, levy 1308.112 → 1308.11, net 53 955.808 → 53 955.81; gap 955.808 → 955.81; 1405.60 × 0.68 = 955.808.
  (d) A1: 58 000 → 7920, 1160, 48 920; slip 0.02 × 7920 = 158.40. A2: 1.03 × 58 000 = 59 740; tax 4020 + 0.30 × 14 740 = 8442; levy 1194.80; net 50 103.20; gain 1183.20; 1740 × 0.32 = 556.80.
  (e) Offsets and the low-income levy reduction are left out; every row is above the low-income range.
  (f) Pronunciations: "equals A two times dollar G dollar one"; "if A two is up to eighteen thousand two hundred"; "fifty-three thousand nine hundred and fifty-five dollars eighty-one".

Main question: *Will a pay rise leave you worse off? Is the better-paid job better after tax? How does a spreadsheet test different tax scenarios?*
Entry knowledge (math-s11-e06, e08, e10, e11; f08): formulas, fill-down and $; the table; the levy; net.
Stops after: reading the tax formula, scenario rows, the graph and two jobs after tax. No PAYG columns.
Handoff: math-s11-m01 (provisional): "prices go up too".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): taxable income blue; tax amber; levy olive; net teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame. The grid is coded and unbranded; formulas are shown exactly as typed.

### 1. hook: what if I earn more?
> Last time ended with one tax return turned into a spreadsheet row. Income, tax, Medicare levy, and what's left. Now ask the questions people really worry about. Will a pay rise leave me worse off? Is the better-paid job really better after tax? A spreadsheet can test every scenario at once, as long as the formulas are right. Rates change every year too, and a spreadsheet is easy to update. So how does a spreadsheet test different tax **scenarios**?

Visual: opens on e11's final frame exactly (the one-row grid with Priya's values, the empty row 3, chips). On the first sentence the "Next" chip fades. On "Will a pay rise leave me worse off?" a grey chip with the question appears beside row 3; on "Is the better-paid job really better after tax?" a second grey chip. On "every scenario at once" ghost rows 3 to 7 flicker in, empty. On "Rates change every year" a grey chip "rates change every year: keep them in cells". On "scenarios" heading "Tax scenarios in a spreadsheet" writes on; the question chip "What if…?" moves to the top right.

### 2. the easy columns
> Start with the easy columns. Column A holds taxable income. The levy rate goes in its own cell, G one, two per cent, so it's easy to change. Then C two is equals A two times dollar G dollar one, the levy. And D two is equals A two minus B two minus C two, income minus tax minus levy, the net. That's the same working as before, just with cell **names**. Now the hard one, the **tax** in column B.

Visual: stage change: the grid (1,400 × 520 px), row 2 Priya's income "80950" (blue). On "its own cell" G1 "2%" boxed, labelled "levy rate", hand tag "rate in its own cell", grey chip "e06: lock it with $". On "equals A two times dollar G dollar one" C2 active, bar "=A2*$G$1", outlines on A2 and G1; C2 "1619" (olive). On "equals A two minus B two minus C two" D2 active, bar "=A2-B2-C2"; strip under the bar "income − tax − levy". On "names" hand tag "same working, cell names". On "tax" B2 rings amber with "?".

### 3. reading the tax formula
> Here's a formula that gives the tax from the table. It looks long, but read it as a list of questions. If A two is up to eighteen thousand two hundred, the tax is zero. If not, is it up to forty-five thousand? Then it's fifteen per cent of the amount over eighteen thousand two **hundred**. If not, is it up to a hundred and thirty-five thousand? Then it's four thousand and twenty, plus thirty per cent of the amount over forty-five **thousand**. The last two pieces handle the top rows in the same way. Each piece is one row of the tax table. You don't need to build it from scratch, but you do need to read it. Check it on Priya's income, eighty thousand nine hundred and fifty. It gives fourteen thousand eight hundred and five, matching the **table**.

Visual: stage change (simulation 1): the formula bar widens to the full width (40 px): "=IF(A2<=18200,0,IF(A2<=45000,0.15*(A2-18200),IF(A2<=135000,4020+0.3*(A2-45000),IF(A2<=190000,31020+0.37*(A2-135000),51370+0.45*(A2-190000)))))". Below it, the e08 table (34 px) at the right, and the reader at the left. On "a list of questions" hand tag "a list of questions"; grey chip "IF: a question, then an answer for yes and for no". On "up to eighteen thousand two hundred, the tax is zero" piece 1 "IF(A2<=18200, 0" lifts out (40 px) and slides beside row 1 "Nil", which lights. On "hundred" piece 2 "IF(A2<=45000, 0.15*(A2-18200)" beside row 2, which lights, hand tag "one piece = one table row". On "thousand" piece 3 "IF(A2<=135000, 4020+0.3*(A2-45000)" beside row 3. On "The last two pieces" pieces 4 and 5 slide beside rows 4 and 5 together, greyer. On "Check it" B2 is active with the full formula; on "table" B2 shows "14805" (framed green), and e11's chain card "tax $14 805" appears small beside it, hand tag "check it on a known row". D2 now shows "64526".

### 4. scenario rows: is a pay rise ever worse?
> Now the scenarios. Put incomes from forty thousand to fifty thousand in column A, and fill every formula down. Forty-four thousand leaves thirty-nine thousand two hundred and fifty after tax and levy. Forty-five thousand leaves forty thousand and **eighty**. Forty-six thousand, in the thirty-cent row, leaves forty thousand seven hundred and **sixty**. The net column goes up on every row. Graph net against income, and the line always rises. It just gets a little less steep at each new row of the **table**. So a pay rise never leaves you worse **off**.

Visual: stage change (simulation 2): rows 3 to 7 with labels in a new left column: "40k", "44k", "45k", "46k", "50k"; column A "40000", "44000", "45000", "46000", "50000" (blue). On "fill every formula down" B, C and D fill row by row: tax 3270, 3870, 4020, 4320, 5520 (amber); levy 800, 880, 900, 920, 1000 (olive); net 35930, 39250, 40080, 40760, 43480 (teal). On "eighty" the 45k row rings; on "sixty" the 46k row rings, its tax cell outlined "30c row". On "goes up on every row" small teal up-arrows appear between successive nets, hand tag "every net goes up". On "Graph net against income" (simulation 3) a `StudioPlot` (900 × 520 px; income $40,000 to $50,000 across, net $35,000 to $45,000 up) takes the five points and a line through them; on "table" the bend at $45,000 is ringed, hand tag "less steep, still rising", a small label "83c kept per extra $1 → 68c". On "off" framed sentence (green) "Net rises on every row: a pay rise never leaves you worse off." A red slip "net at $46 000 = 46 000 × 0.70 − levy" writes beside the 46k row and is crossed (caption "30c only on the dollars over $45 000").

### 5. two job offers, after tax
> Here's one from the start of this topic. Job A pays sixty-four thousand dollars a year. Job B pays thirty-three dollars ten an hour for thirty-eight hours, sixty-five thousand four hundred and five dollars sixty a year. Before tax, Job B is ahead by one thousand four hundred and five dollars sixty. Put both in the sheet. Job A's net is fifty-three thousand **dollars**. Job B's net is fifty-three thousand nine hundred and fifty-five dollars **eighty-one**. So Job B is still ahead, but only by nine hundred and fifty-five dollars eighty-one. Thirty-two cents of every extra dollar go in tax and levy, because those dollars sit in the thirty-cent row, and the levy takes two per **cent**.

Visual: stage change (simulation 4): two rows labelled "Job A", "Job B" (grey chip "e01: the two job ads"), A "64000", B "=33.10*38*52" showing "65405.60" (blue). A before-tax gap bar "$1405.60" (blue) at the right. On "dollars" (bold) row A fills: "9720 | 1280 | 53000" (net teal). On "eighty-one" row B fills: "10141.68 | 1308.11 | 53955.81". On "only by" the gap bar shrinks to "$955.81" (teal), the lost part tinted amber and olive "$449.79 in tax and levy". On "cent" hand tag "32c of each extra dollar", row "1405.60 × 0.68 = 955.81", framed sentence (green) "Job B is still ahead after tax, by $955.81."

### 6. memory aid
> Here's the summary. Put rates in their own cells, and read the tax formula one row of the table at a time. Fill every formula down, and each row becomes a scenario. Then answer the question in a **sentence**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the five formula pieces beside their table rows, and the rising net line. Main line, hand font 56 px: "Rates in cells; read the tax formula one table row at a time." On "sentence" the key line, 40 px: "Fill down: each row is a scenario. Net = income − tax − levy. Answer in a sentence." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A spreadsheet models tax. Cell B two holds taxable income, and C two holds the tax formula from the table. D two contains equals zero point zero two times B two, and E two contains equals B two minus C two minus D two. For B two equal to fifty-eight thousand, what values appear in C two, D two and E two? And what does column E represent? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A spreadsheet models tax for 2026-27. Cell B2 holds taxable income, and C2 holds the tax formula from the 2026-27 tax table. D2 contains =0.02*B2 and E2 contains =B2-C2-D2. (a) For B2 = 58 000, what values appear in C2, D2 and E2? (b) What does column E represent?" Beside it the 2026-27 table (34 px). Picture slot: a small grid with B2 = 58000 and C2, D2, E2 blank. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> C two is four thousand and twenty, plus thirty per cent of thirteen thousand, seven thousand nine hundred and **twenty**. D two is two per cent, one thousand one hundred and **sixty**. E two is fifty-eight thousand minus both, forty-eight thousand nine hundred and twenty, the net earnings after tax and the **levy**. Taking two per cent of the tax for D two is the **slip**.

Visual: the card shrinks to the top (30 px). Cells fill, 44 px: on "twenty" "C2 = 4020 + 0.30 × 13 000 = 7920" (amber); on "sixty" "D2 = 0.02 × 58 000 = 1160" (olive); on "levy" "E2 = 58 000 − 7920 − 1160 = 48 920" (framed green) and "E: net earnings after tax and levy" (framed green). On "slip" a red slip "D2 = 0.02 × 7920 = $158.40" writes and is crossed (caption "the levy is 2% of taxable income"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. The same person gets a three per cent pay rise, so B two changes to one point zero three times fifty-eight thousand. What's the new taxable income? How much more does the person keep after tax and the levy? And why is that less than the pay rise? Pause here to answer.

Visual: `QuestionCard`, 40 px: "The person in Question 1 receives a 3% pay rise, so B2 changes to 1.03 × 58 000. (a) What is the new taxable income? (b) How much more does the person keep after tax and the levy? (c) Explain, using the tax table, why this is less than the pay rise." Beside it the table (34 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The new income is fifty-nine thousand seven hundred and **forty**. The new net is fifty thousand one hundred and three dollars twenty, so the person keeps one thousand one hundred and eighty-three dollars twenty **more**. It's less than the rise, because the extra dollars are all in the thirty-cent row, plus the two per cent levy. Thinking the rise puts the whole income at thirty per cent is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "forty" "1.03 × 58 000 = 59 740"; on "more" "net 59 740 − 8442 − 1194.80 = 50 103.20; 50 103.20 − 48 920 = $1183.20" (framed green). On "It's less than the rise" "1740 × 0.32 = $556.80 to tax and levy" (framed green, hand tag "30c row + 2% levy"). On "slip" a red slip "the rise puts all $59 740 at 30%" writes and is crossed (caption "only the extra dollars in the row pay 30c"). Hold about 1 s.

### 11. handoff (provisional)
> That's Earning money done, from a first wage to a tax spreadsheet. A three per cent pay rise is a percentage increase. But prices go up by percentages too, at the supermarket and the petrol station. How do you work out a percentage increase or **decrease**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (provisional, ruling 87; exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "Earning money done" a grey strand chip "Earning money: done". On "A three per cent pay rise" the amber "+3%" tag lifts out of the pay-rise row; on "prices go up" it lands on the swing tag `ma12-swing-tag-v1.png` (about 360 px tall), its blank lines showing a coded "+3%". On "decrease" chip "Next: prices go up too". On "next" chip "?". Hold about 2 s. No price stated. This is m01's opening frame (provisional); scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Rates in their own cells, locked with $ (=A2*$G$1).
- Net: =A2-B2-C2 (income − tax − levy).
- The tax formula: one IF piece per table row; check it on a known row.
- Fill down: each row is a scenario. Net always rises with income.
- Compare jobs after tax; answer in a sentence.

Memory aid (framed card, right side, as in scene 6): *Rates in cells; read the tax formula one table row at a time.* Key: *Fill down: each row is a scenario. Net = income − tax − levy. Answer in a sentence.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and m01's provisional opening frame.

## Teaching checks

- **Does it explain causes?** Why a model: the working with cell names, reused on every row (2, 4). Why the levy rate in a cell: rates change and one change updates every row (2). Why the IF formula works: it asks the table's questions in order (3). Why net always rises: each extra dollar pays at most its row's rate plus the levy, less than a dollar (4). Why Job B's lead shrinks: 32 cents of each extra dollar go (5).
- **Misconceptions addressed:** the pay-rise myth (4; A2 crossed); the levy on the tax (A1 crossed); comparing jobs before tax only (5); the average rate for extra income (5, "32 cents"); typing rates into many formulas (2); the $45,000 boundary (3, "up to").
- **Visual standard, item by item:** 1 e11's row from the first frame, the m01 tag at the end; 2 a new stage every 45 to 60 s; 3 the formula splitting into pieces beside lit table rows, scenario rows filling with up-arrows, points becoming a rising line with a bend, the gap bar shrinking; 4 fixed roles (income blue, tax amber, levy olive, net teal); 5 large type; 6 hand tags; 7 g01 order in the sheet with framed answers and crossed slips; 8 framed card and five bullets; 9 every net arrow pointing up.
- **One idea at a time:** the easy columns (2), the tax formula (3), scenario rows (4), two jobs (5).
- **Response opportunity:** two unseen tasks with every demand visible (the table on each card); 10 s each; feedback about 27 s and 30 s.
- **Avoided double teaching:** e06's fill-down and $, e08's table, e10's levy and e11's row recalled in grey chips.
- **Syllabus coverage:** `ci877a99ed` (2 to 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** building the IF formula; PAYG and refund columns; future rates; offsets.

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme; the card shows the 2026-27 table).** "A spreadsheet models tax for 2026-27. Cell B2 holds taxable income, and C2 holds the tax formula from the 2026-27 tax table. D2 contains =0.02*B2 and E2 contains =B2-C2-D2. (a) For B2 = 58 000, what values appear in C2, D2 and E2? (b) What does column E represent?"
Model answer: (a) C2: 4020 + 0.30 × 13 000 = $7920; D2: $1160; E2: 58 000 − 7920 − 1160 = $48 920. (b) Net earnings after income tax and the Medicare levy. Classic mistake (crossed): "D2 = 0.02 × 7920 = $158.40".

**Attempt 2 (scene 9; pack question 2, 3 marks suggested).** "The person in Question 1 receives a 3% pay rise, so B2 changes to 1.03 × 58 000. (a) What is the new taxable income? (b) How much more does the person keep after tax and the levy? (c) Explain, using the tax table, why this is less than the pay rise."
Model answer: (a) $59 740. (b) New net: 59 740 − (4020 + 0.30 × 14 740) − 1194.80 = 59 740 − 8442 − 1194.80 = $50 103.20; an increase of $1183.20. (c) The extra $1740 is all in the 30c row and also attracts the 2% levy, so 32% of it ($556.80) goes in tax and levy. Classic mistake (crossed): "the rise puts all $59 740 at 30%".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Priya check | tax(80 950) = 14 805; levy 1619; net 64 526 | 1, 2, 3 |
| Rows | 40k: 3270, 800, 35 930; 44k: 3870, 880, 39 250; 45k: 4020, 900, 40 080; 46k: 4320, 920, 40 760; 50k: 5520, 1000, 43 480 | 4 |
| Jobs | A: 9720, 1280, 53 000; B: 65 405.60, 10 141.68, 1308.11, 53 955.81; gaps 1405.60 and 955.81; lost 449.79 | 5 |
| A1 | 7920; 1160; 48 920; slip 158.40 | 7, 8 |
| A2 | 59 740; 8442; 1194.80; 50 103.20; 1183.20; 556.80 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check, and to type the IF formula into a spreadsheet program and confirm every row.

- tax(80 950) = 4020 + 0.30 × 35 950 = 14 805; 0.02 × 80 950 = 1619; 80 950 − 14 805 − 1619 = 64 526.
- 40 000: 0.15 × 21 800 = 3270; 800; 35 930. 44 000: 0.15 × 25 800 = 3870; 880; 39 250. 45 000: 4020; 900; 40 080. 46 000: 4020 + 300 = 4320; 920; 40 760. 50 000: 4020 + 1500 = 5520; 1000; 43 480.
- Job A: 4020 + 0.30 × 19 000 = 9720; 1280; 64 000 − 9720 − 1280 = 53 000. Job B: 33.10 × 38 × 52 = 65 405.60; 4020 + 0.30 × 20 405.60 = 10 141.68; 0.02 × 65 405.60 = 1308.112 → 1308.11; net 53 955.808 → 53 955.81; 53 955.81 − 53 000 = 955.81; 1405.60 − 955.81 = 449.79; 1405.60 × 0.68 = 955.808.
- 58 000: 4020 + 0.30 × 13 000 = 7920; 1160; 48 920; 0.02 × 7920 = 158.40.
- 1.03 × 58 000 = 59 740; 4020 + 0.30 × 14 740 = 8442; 0.02 × 59 740 = 1194.80; 59 740 − 8442 − 1194.80 = 50 103.20; 50 103.20 − 48 920 = 1183.20; 1740 × 0.32 = 556.80.

## Memory aid check

- **"Rates in cells; read the tax formula one table row at a time."** with key line **"Fill down: each row is a scenario. Net = income − tax − levy. Answer in a sentence."** Original. Meaning, as said in scene 6: a tax model is the table and the working in cells, and its rows are what-ifs. Assumptions checked: the formula matches the year's table (3, checked on a known row); the levy is a flat 2% of taxable income (no low-income reduction for these rows, author note e); "net" means after tax and levy only (2). It helps a new case: to test a $500 salary-sacrifice deduction, add a column that lowers taxable income and fill down; net still rises with gross income. Introduced after scenes 2 to 5.
- **Considered, not used:** "Every extra dollar keeps at least 53 cents" (true for this table, 45c + 2%, but a number to memorise rather than an idea).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**4,749 characters**, 12 scene headings. Characters per scene (1 to 12): 448, 389, 744, 540, 678, 204, 372, 359, 278, 396, 266, 75.

At 13.3 characters per second the speech is about 357 s. Total with the holds and settling below **about 448 s**, 122 s under the 570 s cap; speech and holds before the notes about 403 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the formula reader (3), the scenario rows and graph (4) and the gap bar (5), about 26 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 3's "You don't need to build it from scratch, but you do need to read it." (the reader carries it); scene 1's "Rates change every year too, and a spreadsheet is easy to update." moves to scene 2 in shortened form if needed (it must stay once).

## Scene list and build ids

Lesson key `m-s11e12` (route math-s11-e12). Explainer folder `src/explainer/lessons/math-s11-e12`; build inputs in `docs/production/claude-pm/lessons/math-s11-e12/` (at voicing).

In order (12 scene headings): hook-what-if, easy-columns, reading-tax-formula, scenario-rows-graph, two-jobs-after-tax, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | e11's frame: one row |
| 35 to 75 s | 2 | The easy columns |
| 75 to 150 s | 3 | The formula reader beside the table |
| 150 to 210 s | 4 | Scenario rows and the graph |
| 210 to 270 s | 5 | Two jobs after tax |
| 270 to 285 s | 6 | Framed memory card |
| 285 to 400 s | 7 to 10 | Question cards and countdowns, then feedback |
| 400 to 420 s | 11 | Strand close and the m01 tag (provisional) |
| 420 to 465 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e11's last frame continues into 1; 1 to 2 camera continue (the row grows into a sheet); 2 to 3 stage change (the bar widens); 3 to 4 stage change; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e12-learning-review.md`, `science_check` = `checks/m-s11-e12-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-swing-tag-v1.png` (a blank cream card tag on a twine loop with four ruled lines, true alpha; reused as the price tag for the provisional m01 join). No other plate is needed: the sheet, graph and table are coded.

Need: none new. Reused: `ma12-swing-tag-v1.png`.

Coded: the spreadsheet grid, formula bar and reader, the table, row labels and arrows, the graph, the gap bar, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `SpreadsheetGrid` (ruling 90, with e06's props), `TaxTableReader` (e08), `StudioPlot`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e12; props on `SpreadsheetGrid`):
1. **Long-formula reader**: a formula split into labelled pieces, each linked to a `TaxTableReader` row that lights when its piece is shown. Check: five pieces for the 2026-27 formula; piece 3 lights row 3.
2. **Scenario rows**: a short label column; rows that appear one at a time and fill down; optional up or down arrows between successive values in a chosen column. Check: the net column's four arrows all point up.
3. **Gap bar** (small): a bar between two values that shrinks to a new gap, the lost part tinted by its parts. Check: $1,405.60 shrinks to $955.81 with $449.79 tinted.

## Codex asset brief

No new plate. The swing tag exists and was viewed. The sheet, reader, graph and bars are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and type the IF formula into a spreadsheet program to confirm every row's tax, levy and net.
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the 2026-27 table and the 2% levy, that no 2024-25 figure appears (ruling 85) and that the "rates change" sentence is said once.
4. Confirm every formula on screen is valid as typed, and the spoken forms match the screen.
5. Confirm both attempts carry every demand and show no answer.
6. Confirm scene 1 opens on e11's final frame and scene 11 is marked provisional (ruling 87) and matches the decisions file's e12 to m01 join.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Tax Scenarios in a Spreadsheet | Year 11 Maths Standard

(Title length: 55 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson08.sa.html

Will a pay rise ever leave you worse off? Is the better-paid job still better after tax? Build a tax spreadsheet with the Medicare levy rate in its own cell, read a supplied tax formula one row of the 2026-27 tax table at a time, and check it on a known income. Then fill the formulas down to test many incomes at once, graph net income against taxable income, and compare two job offers after tax. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Tax rates change every year; this video uses 2026-27 figures.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Use a spreadsheet to model scenarios involving taxation"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Tax Returns: Refund or Tax Debt? and Modelling Pay in a Spreadsheet. Next: percentage increase and decrease.

#Year11Maths #MathsStandard #Spreadsheets #HSCScience

## Open decisions

- **1. The m01 join (ruling 87, provisional).** The "+3%" tag landing on a price tag is the pack's idea. The m01 designer confirms or replaces it; only scene 11 and the "Next" line change.
- **2. The IF formula.** Shown in full once and read piece by piece; nested IF is not in the Year 11 points, so the formula is supplied, never built. Root confirms this reading load suits Standard 1, or asks for the by-eye per-row option (which cannot be filled across boundaries, so scene 4 would need hand-typed formulas per row).
- **3. Saturday shifts dropped.** The pack's third scenario is left out (two scenarios, as the pack allows). Confirm.
- **4. Description link and "Next" title.** No site lesson; the link points to lesson08. The "Next" line names m01's topic until it has a title.

## Review notes

- Revision 1. Next: student learning review (trace from e11 for a student who has done e06; check that the easy columns come first and feel like the working, that the IF formula reads as a list of questions beside the table, that the rising net line busts the myth at a glance, that the job comparison's "32 cents" is explained and not just stated, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs the `SpreadsheetGrid` long-formula reader and scenario rows before this video.
