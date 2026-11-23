# Maths S12 I13: How does a reducing balance loan change from one period to the next? Interest on what is still owed, the repayment taken off, the balance carried down, and the same table in a spreadsheet (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,115 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 558 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i13-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Optional, scene 5 (a sentence on i12's five-year loan): **declined** for length. The design has a 13 s margin and the sentence costs about 8 s. Scene 5 already gives the cause ("a little faster each time"). i15 Revision 2 now gives the numbers for Standard 2 viewers ($347.39 off the loan in month 1).
2. Optional, scene 7 (why the last payment is smaller, for Standard 1 viewers who skip i15): **applied**. "a smaller last payment of three hundred and thirty-three dollars sixty, all that's left".
3. Optional, scene 6 (board load): **applied**. The givens card fades once E2 shows its formula, so the formula bar and the E2-to-B3 link arrow are the brightest things on screen when the link is said.

Narration 6,115 characters by script (Revision 1: 6,098), about 558 s with holds, 12 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 26, Investment and loans (Loans). Shared by Standard 1 and Standard 2: Standard 1 models three periods with the rate per period given; Standard 2 models up to four, with and without digital tools. The fourth row is labelled "Standard 2". The spreadsheet point is word for word the same in both courses. Pre-design pack: `../pre-design/maths-standard/math-s12-i13.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson09.sa.html` (SHA256 `635c4a42aa2d954f404df8cd664221d1ca8b2ebe7085c1563152c4cac7d206ff`; card 06 and the spreadsheet card, $20,000 at 0.5% a month, $600) and `lesson08.sa.html` (SHA256 `13b6a566e1fce40d02e973d1b5dcb86cb64a519b15c9c123b15afae5766541e0`; card 05). Route entry: `math-s12-i13` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; one new painted plate (a farm tractor); the e-bike from i12; the camper trailer reused for the final frame; every table, bar, graph and spreadsheet coded.

Owner rules applied: 2024 syllabus; plates for real objects and code for diagrams; no people, hands or faces; one main question; one reasoning stage at a time; every step said in words before its symbols; a short "why this matters"; g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback (answer, one or two reasons, one crossed slip); five key notes with a framed card; everyday anchor (transport: the e-bike loan from i12); Australian spelling; no em dashes; money spoken naturally; conversational narration with commas for small pauses; text above the bottom 12% (y = 950).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Investment and loans, Loans):
- `ci94e049c3`: "Model a reducing balance loan as an application of compound interest with periodic repayments in tabular form for up to four time periods, with and without using digital tools"
- `cibb416d3e`: "Use a spreadsheet to model and solve problems involving a reducing balance loan in a variety of contexts"

Standard 1 (Depreciation and loans, Loans):
- `cib9ea7be8`: "Model a reducing balance loan as an application of compound interest, given the interest rate per time period, with periodic repayments, using a table for up to three time periods"
- `cica72a281`: "Use a spreadsheet to model and solve problems involving a reducing balance loan in a variety of contexts"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i12's final frame exactly (the e-bike plate with the card "borrowed: $3,000", "1% a month", "$141.22 a month for 24 months"; an empty reducing-balance table header; chips "where does each $141.22 go?", "Next: reducing balance loans", "?"). Recalls i12 (total paid, the e-bike's $389.28 of interest), i02 (compound interest: multiply by 1 + r each period) and a04b (spreadsheet cells, formulas, fill down) in a phrase or grey chip each. Teaches: a reducing balance loan (interest charged only on what is still owed); one period as three moves (interest = balance × rate per period; add it; take off the repayment); the closing balance carried down to start the next period; three rows (both courses) and a fourth (Standard 2); why the interest falls while the repayment stays fixed, so more of each repayment pays off the debt; the same model in a spreadsheet (B3 = E2, fill down); changing one cell to answer a new question. Stops at modelling a loan period by period. Not taught: extra repayments, lump sums and repayment frequency (i14); finding the repayment, amount owing and time to repay (i15); credit cards (i16); any repayment formula.

## Decisions

- **Anchor: the e-bike's two-year loan from i12 (painted plate, live).** $3,000 at 1% a month, $141.22 a month for 24 months: rows $30.00 / $2,888.78; $28.89 / $2,776.45; $27.76 / $2,662.99; (Standard 2) $26.63 / $2,548.40; cleared after 24 repayments, total $3,389.28 (i12's figure). This is the pack's opener, made the whole teaching anchor so the video answers the question i12 leaves on screen. The monthly rate is shown already worked out ("1% a month"), so Standard 1 students, who are given the rate per period, are not asked to convert; a grey chip "Standard 2: 12% a year ÷ 12 = 1% a month" sits beside it.
- **Worked example: the site's spreadsheet card (lesson09).** A small farm's second-hand tractor: $20,000 at 0.5% a month (an example rate), $600 a month; rows match the site to the cent; carried on, 37 months with a last payment of $333.60 and $1,933.60 interest; at $700, 31 months and $1,635.15. The site's card says "principal repaid" (=600−C2) and subtracts it; this design's spreadsheet uses the same add-then-subtract order as the table (interest in C, repayment in D, closing =B2+C2−D2), as the pack recommends, so the two pictures match. The site's "principal repaid" split appears once, as the split bars in scene 4.
- **Site corrections.** None in the parts used (pack section 8). The repayment formula on lesson08 card 05 is not on the Standard reference sheet and is not shown (MS-24); repayments are given. The flat-rate comparison and "true rate" in lesson09 are not in the 2024 points and stay out.
- **Rates (ruling 5, ruling 32).** 1% a month (12% p.a.) and 0.5% a month (6% p.a.) are called example rates. Source line in the design: RBA statistical table F8, Personal Lending Rates (September 2026, read 18 November 2026): new fixed-rate personal term loans averaged 10.39% p.a. (https://www.rba.gov.au/statistics/tables/csv/f8-data.csv). Said once in scene 6: "rates change all the time".
- **Join.** Scene 1 opens on i12's final frame exactly; the e-bike plate is solid from the first frame. Scene 13 is i14's opening frame.
- **Standard 1 completeness.** Every step is arithmetic on a given monthly rate. Rows 1 to 3 are spoken and built for everyone, with a grey chip "Standard 1: three rows" after row 3; row 4 is spoken once, introduced by "If you're doing Standard 2". The spreadsheet scenes serve both courses (identical point). Attempt 1 asks for three rows, four for Standard 2.
- **Simulations (standard item 3).**
  1. **Reducing balance table** (scenes 2 to 4; new `ReducingBalanceTable`): one row at a time, each closing balance flying down to the next row's opening cell; the interest cell pulses amber as it is calculated.
  2. **Balance bar run** (scene 5; `LoanBalanceBar` from finance-parts.tsx): a blue balance bar with a thin amber interest cap added and a violet repayment bite removed each month, run month 1 to 24 with a month counter and a balance readout; the cap visibly thins while the bite stays the same width, and the bar empties at month 24.
  3. **Spreadsheet build and one-cell change** (scenes 6 and 7; `SpreadsheetGrid` with the formula bar, the =E2 link arrow and fill-down, and a closing-balance line chart from column E): changing D2 from 600 to 700 ripples down every row and the chart's landing point moves from month 37 to month 31.
- **Colour roles (fixed for i12 to i18).** Balance owed **blue**; interest **amber**; repayment **violet**; the part of a repayment that pays off the debt **teal**; answer **green**; mistake **red**, crossed slips only. The "Standard 2" row and chips have a grey header tab.
- **Large type, handwritten voice.** Table cells 40 px (current row 44 px), headers 32 px; formula bar 44 px; spreadsheet cells 40 px, column letters and row numbers 32 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "1% of what's owed", "add it on", "take the repayment off", "carry it down", "shrinking", "same repayment", "less interest, more off the debt", "it's fixed", "empty at 24", "the link", "fill down", "one change, every row", "on what's still owed". At most two live at once.
- **Stage changes (standard item 2).** i12's frame and the e-bike (1); the table's first row (2); rows 2 and 3 with carry-down arrows (3); row 4 and four split bars (4); the balance bar run (5); the g01 board with the spreadsheet (6); the one-cell change and the balance chart (7); framed card (8); question cards (9 to 12); the camper trailer for i14 (13); key notes (14).
- **Worked example (g01 layout).** Scene 6: task strip, givens card, the spreadsheet as the working, framed answer (month 4 closing $17,984.95), crossed slip "=B2" in B3 (caption "copies $20,000 down").
- **Memory aid.** Framed card: "Add the interest. Take the repayment. Carry it down." Key line: "Same repayment, less interest, faster fall."
- **Visual surprise.** In scene 4 the four split bars stand side by side: the violet repayment bars are identical, but the amber slice on each is shorter than the last and the teal slice longer, so the repayment is visibly the same while its job changes.
- **Plain meanings at first use.** Balance ("what you still owe"); reducing balance loan ("a loan where interest is charged only on what you still owe, and each repayment reduces it"); rate per period ("the interest rate for one month, here"); opening and closing balance ("what you owe at the start and at the end of the month"); fill down (recalled from a04b: "copy a formula into the rows below").
- **Attempts (original, HSC style; the pack's two questions).** A1: a $12,000 loan for a second-hand tinny and trailer at 0.75% a month, $380 a month: three rows (Standard 2: four); crossed "month 2 interest $90" (caption "interest is on what's still owed"). A2: a $5,000 loan for a fridge and washing machine at 1.2% a month, $450 a month, in a spreadsheet with B3 written as =B2: correct it and find the closing balance after month 3; crossed "$60 interest every month" (caption "that's =B2").
- **Mistake scene:** none separate. Interest on the original amount (A1 crossed; =B2 in scene 6 and A2); the repayment thought to shrink (scene 4, said); the opening balance copied down (scene 6 crossed, A2).
- **Cause chain taught, in order:** (1) the lender charges interest only on what you still owe (2); (2) each month adds that interest and takes off the repayment, so the closing balance is the next opening balance (2, 3); (3) because the balance falls, the interest falls (3); (4) the repayment is fixed, so a shrinking interest leaves more of it to pay off the debt, and the debt falls faster each month (4, 5); (5) a spreadsheet repeats the same moves on every row because B3 links to E2 (6); (6) one changed input flows through every row, which answers "what if" questions (7).
- **Entry knowledge (route):** i12 (total paid; a lender's repayment figure is given); i02 (compound interest per period; Standard 1 has the same idea); a04b (spreadsheet cells, formulas, fill down; Standard 1 and 2). Standard 2 also i04 (rate per period from an annual rate). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i14, "How do extra repayments, lump sums and paying more often shorten a loan?").** Scene 13: the camper trailer plate `ma12-camper-trailer-v1.png` (about 900 px wide) at the left with a coded card, 40 px: "borrowed: $15,000", "0.8% a month", "$315.76 a month for 5 years"; at the right a small coded balance graph (balance against month, 0 to 60) with the planned loan's curve landing at month 60 and a dashed violet "+$50?" arrow above it; chips "what if we pay $50 more a month?", "Next: paying a loan off sooner" and "?". No new term or saving is shown. This is i14's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) E-bike: r = 1% a month, M = $141.22 (i12; exact 141.2204). Rows with interest rounded to the cent: 30.00, 2,888.78; 28.89, 2,776.45; 27.76, 2,662.99; 26.63, 2,548.40. Split: interest 30.00 / debt 111.22; 28.89 / 112.33; 27.76 / 113.46; 26.63 / 114.59. Run on, 24 payments of $141.22 clear it exactly (last payment $141.22), total $3,389.28, interest $389.28.
  (b) Tractor (site): 20,000.00, 100.00, 19,500.00; 19,500.00, 97.50, 18,997.50; 18,997.50, 94.99, 18,492.49; 18,492.49, 92.46, 17,984.95. Run on: 37 payments, last $333.60, total paid $21,933.60, interest $1,933.60. At $700: 31 payments, last $635.15, interest $1,635.15 (saving $298.45). Wrong B3 = B2 would put $100.00 of interest in every row.
  (c) A1: 90.00, 12,090.00, 11,710.00; 87.83, 11,797.83, 11,417.83; 85.63, 11,503.46, 11,123.46; 83.43, 11,206.89, 10,826.89. A2: 60.00, 4,610.00; 55.32, 4,215.32; 50.58, 3,815.90.
  (d) Pronunciations: "two thousand eight hundred and eighty-eight dollars seventy-eight"; "B two times zero point zero zero five"; "equals E two".
  (e) Window for scene 7's chart: month 0 to 40, $0 to $20,000, grid every 5 months and $5,000.

Main question: *The e-bike loan is $3,000 at 1% a month, repaid at $141.22 a month. How does the loan change from one month to the next?*
Entry knowledge (i12, i02, a04b; Standard 2 also i04): total paid; compound interest per period; spreadsheet cells and fill down.
Stops after: a reducing balance loan in a table (three rows, four for Standard 2) and in a spreadsheet, with one cell changed. No extra repayments, no repayment formula, no credit cards.
Handoff: math-s12-i14: "a camper trailer loan of $15,000: what if we pay $50 more a month?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest amber; repayment violet; debt paid off teal; answer green; mistake red. Header strip "INVESTMENT AND LOANS" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: where does each payment go?
> Here's the e-bike again. You borrow three thousand dollars at one per cent a month, and you pay back a hundred and forty-one dollars and twenty-two cents every month for two years. But where does each payment actually go? Part of it pays the interest, and the rest pays off the **loan**. And that split changes every month. Car loans, personal loans and home loans all work this way, so if you can read one month, you can read them all. So how does a loan like this change from one month to the **next**?

Visual: opens on i12's final frame exactly (the e-bike plate with its card, the empty table header, chips). On the first sentence the "Next" chip fades and the plate moves to the left third at about 900 px. On "three thousand dollars" the card's first line pulses; on "one per cent a month" the second, with the grey chip "Standard 2: 12% a year ÷ 12 = 1% a month"; on "a hundred and forty-one dollars" the third. A grey chip "i12: interest $389.28" sits under the card. On "loan" a single violet bar "$141.22" appears beside the plate and splits into an amber slice "interest?" and a teal slice "off the loan?", hand tag "where does it go?". On "next" heading "Reducing balance loans" writes on, and the question chip "How does it change each month?" moves to the top right.

### 2. one month, three moves
> This is called a reducing balance loan. The balance is what you still owe, and the lender only charges interest on that. Each repayment reduces it. Here's month one. You start owing three thousand dollars. One per cent of three thousand is thirty **dollars**, so add that on, and you owe three thousand and thirty. Then your repayment of a hundred and forty-one twenty-two comes **off**. That leaves two thousand eight hundred and eighty-eight dollars seventy-**eight**. It's the same compound interest you met with savings, except now a repayment comes off each month.

Visual: stage change: the plate shrinks to a 300 px badge at the top left with its card as a 30 px strip. The `ReducingBalanceTable` fills the frame (1,500 × 520 px), headers 32 px: "Month", "Balance at start" (blue), "Interest" (amber), "Balance plus interest" (blue), "Repayment" (violet), "Balance at end" (blue). Definitions card above it, 40 px, writing as spoken: "balance: what you still owe", "reducing balance loan: interest only on what's owed". Row 1 builds, 44 px: "1", "$3,000.00"; on "dollars" (first bold) the interest cell writes "3,000 × 0.01 = $30.00" (amber), hand tag "1% of what's owed", then "$3,030.00", hand tag "add it on"; on "off" the repayment cell "$141.22" (violet) and a minus arrow, hand tag "take the repayment off"; on "eight" the end cell "$2,888.78" (blue, framed). Grey chip "i02: compound interest, × (1 + r) each period".

### 3. carry it down
> Month two starts with whatever month one ended with. So two thousand eight hundred and eighty-eight seventy-eight drops down to the next **row**. One per cent of that is twenty-eight dollars eighty-nine. Add it, take off the repayment, and you owe two thousand seven hundred and seventy-six forty-five. Month three does the same three moves. The interest is twenty-seven seventy-six, and the balance ends at two thousand six hundred and sixty-two dollars ninety-nine. Look at the interest: thirty, then twenty-eight eighty-nine, then twenty-seven seventy-six. It's **shrinking**, because each month you owe a little less.

Visual: camera continue. On "row" the end cell "$2,888.78" flies down to row 2's start cell (blue arrow), hand tag "carry it down". Row 2 builds as spoken, 44 px: "$28.89" (amber), "$2,917.67", "$141.22", "$2,776.45"; the end cell flies down to row 3; row 3 builds: "$27.76", "$2,804.21", "$141.22", "$2,662.99". Rows above the current one dim to 32 px. On "shrinking" the three interest cells ring amber in turn with small "−" arrows between them, hand tag "shrinking". A grey chip "Standard 1: three rows" appears under row 3.

### 4. the fourth row and the split
> If you're doing Standard 2, go one more row. Month four's interest is twenty-six sixty-three, and the balance ends at two thousand five hundred and forty-eight dollars **forty**. Now look at where each repayment goes. In month one, thirty dollars paid the interest, and a hundred and eleven twenty-two paid off the **debt**. By month four, only twenty-six sixty-three goes on interest, so a hundred and fourteen fifty-nine comes off the debt. The repayment never changed. The split **did**. Don't think the repayment shrinks too. It's fixed, so more of it goes on the debt each **month**.

Visual: camera continue. Row 4 slides in under a grey header tab "Standard 2", 44 px: "$2,662.99", "$26.63", "$2,689.62", "$141.22"; on "forty" "$2,548.40". Then the table shrinks to the top 40 per cent (32 px). Below it, four split bars (violet outline, each "$141.22", 900 px long, same length): on "debt" bar 1 splits into amber "$30.00 interest" and teal "$111.22 off the debt"; bars 2 to 4 split in turn: "$28.89 / $112.33", "$27.76 / $113.46", "$26.63 / $114.59", hand tag "same repayment". On "did" the amber slices ring in a staircase getting shorter and the teal slices lengthen, hand tag "less interest, more off the debt". On "month" a red slip "repayment shrinks" writes and is crossed (caption "it's fixed"), hand tag "it's fixed".

### 5. the whole loan
> Let's run it on, month after month. The interest on top gets thinner, the repayment stays the same size, so the balance falls a little faster each **time**. After twenty-four repayments, the balance reaches **zero**. Twenty-four lots of a hundred and forty-one twenty-two is three thousand three hundred and eighty-nine dollars twenty-eight, the total we found last time. That's what reducing balance **means**.

Visual: stage change: the balance bar run (simulation 2): a blue bar "balance" 1,300 px long at month 0 ("$3,000.00"), a month counter (44 px) and readouts "interest this month" (amber) and "balance" (blue, 52 px). Each month a thin amber cap is added and a violet bite of fixed width is removed, with the counter ticking (about 8 s for 24 months, slowing for months 1 and 24). On "time" the amber cap at month 2 and month 20 ring side by side ("$28.89" and "$6.85", from `loanSchedule`), hand tag "same bite, thinner cap". On "zero" the bar empties at month 24, hand tag "empty at 24". Row, 44 px: "24 × $141.22 = $3,389.28" (green framed), grey chip "i12: total paid". On "means" the plate badge rings and the heading strip shows "interest only on what's still owed".

### 6. worked example: a loan in a spreadsheet
> Twenty-four rows by hand is slow, so let's use a spreadsheet. A small farm borrows twenty thousand dollars for a second-hand tractor, at half a per cent a month, and repays six hundred dollars a month. Rates change all the time, so treat that as an example. In row two, B two holds the opening balance, twenty thousand. C two works out the interest, B two times zero point zero zero **five**. D two is the repayment, six hundred, and E two is the closing balance, B two plus C two minus D **two**. Now the cell that makes it work. Month two opens with month one's closing balance, so B three is equals E **two**. Fill down, and every row repeats the same three moves. Month four closes at seventeen thousand nine hundred and eighty-four dollars ninety-**five**. Typing equals B two in B three is the classic slip. It copies twenty thousand down, so every month is charged a hundred dollars of **interest**.

Visual: clear change to the g01 board. Task strip, 44 px: "A farm borrows $20,000 for a second-hand tractor at 0.5% a month and repays $600 a month. Model the first four months in a spreadsheet." Givens card, 40 px: "borrowed $20,000" (blue), "0.5% a month" (amber), "repayment $600" (violet); the new tractor badge `ms12-farm-tractor-v1.png` (300 px) beside it. The `SpreadsheetGrid` (1,300 × 520 px) at the right two-thirds: column letters A to E, rows 1 to 6; headers type into row 1, 36 px: "Month", "Opening", "Interest" (amber), "Repayment" (violet), "Closing" (blue). A2 "1", B2 "20000". On "five" the formula bar (44 px) shows "=B2*0.005" for C2, which shows "100.00". D2 "600". On "two" (first bold) the bar shows "=B2+C2-D2" for E2, which shows "19500.00", hand tag "add, then take off"; the givens card then fades (its three values are now in B2, C2's formula and D2), so the formula bar and the link arrow are the brightest things on screen for the next step (Revision 2, learning review optional finding 3). On "two" (second bold) the cursor at B3, the bar "=E2", a curved blue arrow from E2 to B3, hand tag "the link". On "Fill down" the fill handle drags A3:E3 to row 5 and the rows compute (about 2 s): 19500.00, 97.50, 600, 18997.50; 18997.50, 94.99, 600, 18492.49; 18492.49, 92.46, 600, 17984.95, hand tag "fill down". On "five" (third bold) E5 rings, framed answer (green) "month 4 closes at $17,984.95". Grey chip "a04b: fill down copies a formula into the rows below". On "interest" a red slip "B3: =B2" writes and is crossed (caption "copies $20,000 down: $100 interest every month").

### 7. change one cell
> Fill down to the end, and the balance reaches zero at month thirty-seven, with a smaller last payment of three hundred and thirty-three dollars sixty, all that's left. The interest adds up to one thousand nine hundred and thirty-three dollars sixty. Now change one cell. Make the repayment seven hundred **dollars**. Every row recalculates, and the loan is gone in thirty-one months instead of thirty-**seven**, with about three hundred dollars less interest. One change, and you've answered a new **question**.

Visual: stage change: the grid at the left 55 per cent, scrolled to rows 36 to 39 (a "rows 6 to 35 hidden" bar); at the right a coded chart of column E against month (640 × 520 px, months 0 to 40, $0 to $20,000), the blue closing-balance curve landing at 37, ringed, row "37 months, interest $1,933.60" (amber). On "dollars" the cursor at D2, "600" retyped "700" (violet), and every D cell updates in a ripple down the column; the chart redraws a second, steeper blue curve, the first fading to grey dashed. On "seven" the new landing point at 31 rings green, row "31 months, interest $1,635.15" and a teal bracket "6 months sooner, $298.45 less", hand tag "one change, every row". On "question" the chip "what if we paid more?" lights at the top right.

### 8. memory aid
> Here's the summary. Each month, add the interest on what you still owe, take off the repayment, and carry the balance down. Same repayment, less interest, so the debt falls faster every **month**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the four split bars from scene 4, small. Main line, hand font 56 px: "Add the interest. Take the repayment. Carry it down." On "month" the key line, 40 px: "Same repayment, less interest, faster fall." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve thousand dollar loan for a second-hand tinny and trailer charges interest of zero point seven five per cent per month on the balance owing. The repayment is three hundred and eighty dollars a month. Complete the table for the first three months. If you're doing Standard 2, complete four. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A $12,000 loan for a second-hand tinny and trailer charges interest at 0.75% per month on the balance owing. The repayment is $380 per month. Copy and complete the table for the first three months (Standard 2: four months)." Below it the empty table, 36 px: headers "Month | Balance at start | Interest | Balance plus interest | Repayment | Balance at end"; row 1 "1 | $12,000.00 | | | $380.00 |"; rows 2 to 4 with only "$380.00" filled, row 4 tagged "Standard 2". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Month one's interest is ninety dollars, leaving eleven thousand seven hundred and **ten**. Month two's interest is eighty-seven eighty-three, leaving eleven thousand four hundred and seventeen eighty-**three**. Month three ends at eleven thousand one hundred and twenty-three forty-six, and month four at ten thousand eight hundred and twenty-six eighty-nine. Ninety dollars again in month two is the **slip**.

Visual: the card shrinks to the top (30 px); the table fills, 40 px. On "ten" row 1: "$90.00", "$12,090.00", "$11,710.00"; on "three" row 2: "$87.83", "$11,797.83", "$11,417.83", with the carry-down arrow; then row 3: "$85.63", "$11,503.46", "$11,123.46", framed green; row 4 (grey tab "Standard 2"): "$83.43", "$11,206.89", "$10,826.89", framed green. On "slip" a red slip "month 2 interest: 12,000 × 0.0075 = $90" writes and is crossed (caption "interest is on what's still owed"), hand tag "on what's still owed". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A spreadsheet models a five thousand dollar loan for a fridge and washing machine, at one point two per cent a month, with repayments of four hundred and fifty dollars. The formula in B three is wrong. Write the correct formula, and explain why. Then find the closing balance after month three. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A spreadsheet models a $5,000 loan for a fridge and washing machine at 1.2% per month, with repayments of $450 per month. (a) The formula in B3 is wrong. Write the correct formula and explain why. (b) With the correct formula, find the closing balance after month 3." Picture slot: a coded spreadsheet extract, 34 px: row 1 "Month | Opening balance | Interest | Repayment | Closing balance"; row 2 "1 | 5000 | =B2*0.012 | 450 | =B2+C2-D2"; row 3 "2 | =B2 | =B3*0.012 | 450 | =B3+C3-D3" (formulas shown, no values). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> B three should be equals E **two**, because month two opens with what month one closed with. Equals B two charges month two's interest on the full five thousand again. With that fixed, the balances are four thousand six hundred and ten, then four thousand two hundred and fifteen thirty-two, then three thousand eight hundred and fifteen dollars **ninety**. Sixty dollars of interest every month is the **slip**.

Visual: the card shrinks to the top. On "two" B3's formula changes to "=E2" (framed green), the arrow from E2 to B3 drawn, hand tag "the link". The extract computes, 40 px: "4610.00", "4215.32" with interest "55.32"; on "ninety" "3815.90" with interest "50.58", framed green "$3,815.90". On "slip" a red slip "interest $60 every month" writes and is crossed (caption "that's =B2"). Hold about 1 s.

### 13. handoff
> So every repayment pays the month's interest first, and the rest comes off the loan. What if you paid a bit more than you had to? Here's a camper trailer, bought with a fifteen thousand dollar loan at zero point eight per cent a month, repaid at three hundred and fifteen dollars seventy-six a month for five years. What happens if you pay fifty dollars **more**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "camper trailer" the plate `ma12-camper-trailer-v1.png` (about 900 px wide) at the left with a coded card, 40 px, writing as spoken: "borrowed: $15,000", "0.8% a month", "$315.76 a month for 5 years". At the right a small coded balance graph (640 × 420 px, months 0 to 60, $0 to $15,000), one blue curve from $15,000 landing at month 60. On "more" a dashed violet arrow "+$50?" above the curve. On "next" chips "what if we pay $50 more a month?", "Next: paying a loan off sooner" and "?". Hold about 2 s. No new term or saving is shown. This is i14's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Reducing balance loan: interest only on what's still owed.
- Each period: interest = balance × rate per period.
- Add the interest, then subtract the repayment.
- Closing balance carries down: next opening balance.
- Spreadsheet: B3 = E2, then fill down.

Memory aid (framed card, right side, as in scene 8): *Add the interest. Take the repayment. Carry it down.* Key: *Same repayment, less interest, faster fall.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and i14's opening frame.

## Teaching checks

- **Does it explain causes?** Why interest is charged on the balance: the lender charges only on what is still owed (2). Why the closing balance becomes the next opening balance: the next month starts with what is owed (3). Why the interest falls: the balance falls (3). Why more of each repayment pays the debt: the repayment is fixed and the interest shrinks (4). Why the balance falls faster each month: the teal slice grows (5). Why B3 = E2 makes the spreadsheet work (6). Why one change updates every row: every row uses the same linked formulas (7).
- **Misconceptions addressed:** interest on the original amount (A1 crossed; scene 6 crossed; A2); subtracting before adding interest (scene 2 order, tag "add, then take off"); the repayment shrinking (scene 4 crossed); copying the opening balance down (scene 6 crossed, A2); using the annual rate as the monthly rate (grey chip, scene 1).
- **Visual standard, item by item:** 1 the e-bike from the first frame, as a badge in 2 to 4; 2 a new stage every 35 to 60 s; 3 the table build, the balance bar run, the spreadsheet and the one-cell ripple; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 6; 8 framed card and five bullets; 9 the four equal repayment bars with shrinking amber slices.
- **One idea at a time:** one month (2), carrying down (3), the fourth row and the split (4), the whole loan (5), the spreadsheet build (6), one changed cell (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s each.
- **Avoided double teaching:** i12's total paid, i02's compound interest and a04b's fill down are recalled in a phrase or grey chip.
- **Standard 1 path:** three rows with the monthly rate given (2, 3; A1); row 4 labelled "Standard 2"; the spreadsheet serves both courses.
- **Syllabus coverage:** `ci94e049c3` and `cib9ea7be8` (2 to 5, A1; key notes 1 to 4); `cibb416d3e` and `cica72a281` (6, 7, A2; key note 5). "With digital tools" is the spreadsheet (6, 7).
- **Out of scope by design:** extra repayments (i14); the repayment, amount owing and time to repay in general (i15); credit cards (i16); repayment formulas (MS-24).

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 3 marks suggested, not an official marking scheme).** "A $12,000 loan for a second-hand tinny and trailer charges interest at 0.75% per month on the balance owing. The repayment is $380 per month. Copy and complete the table for the first three months (Standard 2: four months)."
Model answer: Month 1: $12,000.00, $90.00, $12,090.00, $380.00, $11,710.00. Month 2: $11,710.00, $87.83, $11,797.83, $380.00, $11,417.83. Month 3: $11,417.83, $85.63, $11,503.46, $380.00, $11,123.46. (Standard 2, month 4: $11,123.46, $83.43, $11,206.89, $380.00, $10,826.89.) Classic mistake (crossed): month 2 interest "12,000 × 0.0075 = $90".

**Attempt 2 (scene 11; original, HSC style, 3 marks suggested).** "A spreadsheet models a $5,000 loan for a fridge and washing machine at 1.2% per month, with repayments of $450 per month. (a) The formula in B3 is wrong. Write the correct formula and explain why. (b) With the correct formula, find the closing balance after month 3."
Model answer: (a) =E2: the opening balance of month 2 is the closing balance of month 1; =B2 would charge month 2's interest on the full $5,000 again. (b) $4,610.00, then $4,215.32 (interest $55.32), then $3,815.90 (interest $50.58). Classic mistake (crossed): "$60 interest every month".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| E-bike loan | $3,000; 1% a month; $141.22; interest 30.00, 28.89, 27.76, 26.63; balances 2,888.78, 2,776.45, 2,662.99, 2,548.40; plus-interest 3,030.00, 2,917.67, 2,804.21, 2,689.62 | 1 to 4 |
| Split | 30.00 / 111.22; 28.89 / 112.33; 27.76 / 113.46; 26.63 / 114.59 | 4 |
| Whole loan | 24 payments; 24 × 141.22 = 3,389.28; interest 389.28 | 1, 5 |
| Tractor (site) | $20,000; 0.5%; $600; 100.00 / 19,500.00; 97.50 / 18,997.50; 94.99 / 18,492.49; 92.46 / 17,984.95; 37 months, last 333.60, interest 1,933.60 | 6, 7 |
| Change | $700: 31 months, interest 1,635.15; 6 months sooner; 298.45 less | 7 |
| A1 | 90.00 / 12,090.00 / 11,710.00; 87.83 / 11,797.83 / 11,417.83; 85.63 / 11,503.46 / 11,123.46; 83.43 / 11,206.89 / 10,826.89 | 9, 10 |
| A2 | =E2; 60.00 / 4,610.00; 55.32 / 4,215.32; 50.58 / 3,815.90 | 11, 12 |
| Handoff | $15,000; 0.8% a month; $315.76; 5 years (no result shown) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`; interest rounded to the cent each period, as a statement does); the pack's values (`work/brief-standard-i2/recalc-output.txt`, `practice-output.txt`) agree. Codex to re-check.

- 3,000 at 1%, M = 141.22: rows 30.00, 3,030.00, 2,888.78; 28.89, 2,917.67, 2,776.45; 27.76, 2,804.21, 2,662.99; 26.63, 2,689.62, 2,548.40. Run on: 24 payments, last 141.22, total 3,389.28, interest 389.28.
- 20,000 at 0.5%, M = 600: 100.00, 19,500.00; 97.50, 18,997.50; 94.99, 18,492.49; 92.46, 17,984.95; 37 payments, last 333.60, total 21,933.60, interest 1,933.60. M = 700: 31 payments, last 635.15, interest 1,635.15; difference 298.45.
- 12,000 at 0.75%, M = 380: 90.00, 11,710.00; 87.83, 11,417.83; 85.63, 11,123.46; 83.43, 10,826.89.
- 5,000 at 1.2%, M = 450: 60.00, 4,610.00; 55.32, 4,215.32; 50.58, 3,815.90.
- Handoff: 15,000 at 0.8% over 60 months gives 315.7615 (i14 checks it).

## Memory aid check

- **"Add the interest. Take the repayment. Carry it down."** with key line **"Same repayment, less interest, faster fall."** Original. Meaning, as said in scene 8: each period, the interest on the balance owing is added, the repayment is subtracted, and the result starts the next period; because the repayment stays the same while the interest shrinks, more of each repayment reduces the debt. Assumptions checked: interest is charged at the end of each period on the opening balance and the repayment is made at the end of the period (the syllabus model and every HSC-style table); the repayment is fixed and larger than the first period's interest (true in every example here; a repayment smaller than the interest is i17b's trap, where the balance grows). It helps a new case: $8,000 at 1% with $400 a month gives $80 interest, $7,680; then $76.80, $7,356.80. Introduced after scenes 2 to 7.
- **Considered, not used:** "Owe, grow, pay, carry" (catchy, but "grow" could suggest the loan gets bigger overall).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **6,115 characters** (Revision 2; Revision 1: 6,098), 14 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 460 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the table build (2, 3), the split bars (4), the bar run (5) and the spreadsheet fill and ripple (6, 7) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 558 s (9 min 18 s)**, 12 s under the 570 s cap. Feedback speech: about 30 s and 30 s.

Reserve trims if the voiced take runs long: scene 1's "Car loans, personal loans and home loans all work this way, so if you can read one month, you can read them all." (keep it if possible: it is the why-it-matters line); scene 7's "One change, and you've answered a new question." (the hand tag carries it). Scene 5's "And at no point were you charged interest on money you'd already paid back." was cut in drafting; the heading strip carries it.

## Scene list and build ids

Lesson key `m-s12i13` (route math-s12-i13). Explainer folder `src/explainer/lessons/math-s12-i13`; build inputs in `docs/production/claude-pm/lessons/math-s12-i13/` (at voicing).

In order (14 scene headings): hook-ebike-payment, one-month-three-moves, carry-it-down, fourth-row-and-split, whole-loan-run, worked-tractor-spreadsheet, change-one-cell, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i12's frame; the e-bike and the split question |
| 40 to 85 s | 2 | Row 1 built in three moves |
| 85 to 130 s | 3 | Rows 2 and 3 carried down |
| 130 to 180 s | 4 | Row 4 (Standard 2) and the four split bars |
| 180 to 215 s | 5 | The balance bar run to month 24 |
| 215 to 290 s | 6 | g01 board: the tractor spreadsheet |
| 290 to 325 s | 7 | One changed cell and the balance chart |
| 325 to 345 s | 8 | Framed memory card |
| 345 to 445 s | 9 to 12 | Question cards and countdowns, then feedback |
| 445 to 470 s | 13 | The camper trailer for i14 |
| 470 to 515 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i12's last frame continues into 1; 1 to 2 stage change (the table enlarges); 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 stage change; 5 to 6 clear change to the board; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i13-learning-review.md`, `science_check` = `checks/m-s12-i13-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-camper-trailer-v1.png` (a white and charcoal off-road camper trailer, side-on, no writing; Advanced f08 used it for depreciation, so here it is a different idea, reused under ruling 7); `ma12-loan-statement-v1.png` (a blank paper form with a table; Advanced f09's anchor, not used); `ma12-calculator-v1.png` (not needed here). No tractor plate exists.

Need (painted, new; see the Codex asset brief): `ms12-farm-tractor-v1.png`. Reused: the e-bike plate `ms12-ebike-v1.png` (briefed in `math-s12-i11.md`; see `../checks/root-decisions-maths-s12-i12-i23.md`, join 1) and `ma12-camper-trailer-v1.png` (final frame).

Coded: the table, split bars, balance bar, spreadsheet, chart, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `LoanBalanceBar` (finance-parts.tsx), `StudioPlot`, `SpreadsheetGrid` (a-strand), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `loanSchedule` from `money.ts` for every row.

Additions (kit-needs row i13):
1. **ReducingBalanceTable** (new, shared with i14 to i17b and i19): one row at a time, each closing balance flying down to the next row's opening cell; dimming older rows; a grey "Standard 1: three rows" chip; a grey "Standard 2" row tab. Check: the e-bike rows reproduce "Numbers used" to the cent from `loanSchedule`.
2. **SpreadsheetGrid options:** the =E2 link arrow, a hidden-rows bar, and a line chart from one column. Check: D2 600 to 700 moves the zero row from 37 to 31.
3. **Split bars** (small, lesson folder or a mode of the CostSplitBars part from i12): equal-length violet bars split into amber and teal by value.

## Codex asset brief (Maths S12 I13, a farm tractor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i13.md`, route entry math-s12-i13. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-camper-trailer-v1.png` and `maths/ma11-trade-van-v1.png`; no text, logos, brand names, number plates with characters, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-farm-tractor-v1.png` (about 1600 × 1100 px): a small, older farm tractor in side three-quarter view facing right, faded red paint with a few honest scuffs, large rear tyres with mud on the tread, a simple roll bar, no cab, a small front-end loader bucket raised slightly; a few tufts of dry grass at the ground line, fading to transparent at the sides. No brand colours or badges.

Report inspection on the paper background (`#f6f1e7`) at 1,000 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i13-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS (interest rounded to the cent each row), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm the site's spreadsheet card keeps its numbers (four rows to the cent; 37 and 31 months), and that no repayment formula appears.
4. Confirm every row adds the interest before subtracting the repayment, and that row 4 is labelled "Standard 2".
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's extract shows formulas, no values).
6. Confirm scene 1 opens on i12's final frame and scene 13 shows no i14 result.
7. Confirm the rate source line (RBA F8, September 2026) and the "rates change" sentence.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Reducing Balance Loans: Tables and Spreadsheets | Year 12 Maths Standard

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson09.sa.html

A $3,000 e-bike loan at 1% a month is repaid at $141.22 a month. Where does each payment go? Build a reducing balance loan one month at a time: work out the interest on what you still owe, add it, take off the repayment, and carry the balance down to the next month. See why the interest shrinks while the repayment stays the same, so more of each payment pays off the debt. Then model a $20,000 tractor loan in a spreadsheet with one linking formula, fill it down, and change one cell to answer a new question. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Model a reducing balance loan as an application of compound interest with periodic repayments in tabular form for up to four time periods, with and without using digital tools"
"Use a spreadsheet to model and solve problems involving a reducing balance loan in a variety of contexts"
Syllabus content, Standard 1:
"Model a reducing balance loan as an application of compound interest, given the interest rate per time period, with periodic repayments, using a table for up to three time periods"
"Use a spreadsheet to model and solve problems involving a reducing balance loan in a variety of contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Buy Now, Pay Later and Loans: What They Really Cost. Next: Extra Repayments, Lump Sums and Paying Fortnightly.

#Year12Maths #MathsStandard #Loans #HSCScience

## Open decisions

- **1. Anchor: the e-bike instead of the site's tractor (root).** The pack opened on the e-bike for three rows, then moved to the tractor for the spreadsheet. This design keeps the e-bike as the whole table anchor and uses the site's tractor as the g01 worked example, so the site's numbers are still taught. Confirm.
- **2. Spreadsheet column order (pack decision).** The site subtracts "principal repaid"; this design's spreadsheet adds interest then subtracts the repayment, matching the table and attempt 2. The site's split appears as the split bars. Confirm.
- **3. The title chip names in the description** ("Builds on", "Next") use the planned titles of i12 and i14 in this file set; update if root changes them.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i12 for a Standard 1 student who has the monthly rate given; check that "balance" and "reducing balance loan" land before the table, that the carry-down arrow is followable at speed, that the four equal split bars read as "same repayment, different job", that the =E2 link is explained and not just shown, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder must build `ReducingBalanceTable` before this video.
