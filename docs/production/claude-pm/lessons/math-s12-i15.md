# Maths S12 I15: How do we find the repayment, amount owing, total paid and time to repay a loan? A table of repayments per $1,000, a spreadsheet's rows and a balance graph (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,268 characters by script (see "Narration length estimate"), 14 scene headings, about 495 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 28, Investment and loans (Loans). **Standard 2 only** (root ruling 30: Standard 1 goes from i14 to i16, and i16 opens without assuming this video). Tools are the syllabus's: a table of monthly repayments per $1,000, an unbranded loan calculator, a spreadsheet's rows and a supplied balance graph. No repayment formula, no logarithms (root ruling 33; site correction MS-24). Pre-design pack: `../pre-design/maths-standard/math-s12-i15.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson12.sa.html` (SHA256 `cb32815eed2123cd6997f15a0617b992061ed309b103cc18d7e601b008fd4acb`; card 05's systematic approach, card 06's $25,000 car at 7.2% over 5 years) and `lesson08.sa.html` (SHA256 `13b6a566e1fce40d02e973d1b5dcb86cb64a519b15c9c123b15afae5766541e0`; `we-1` and card 08, read for the method only). Route entry: `math-s12-i15` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; one new painted plate (a small SUV); the credit card plate for the final frame; the table, calculator window, spreadsheet, graph and bars coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (cars and work: a small SUV for a long commute to a first full-time job), Australian spelling, no em dashes, money spoken naturally, conversational narration).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Investment and loans, Loans):
- `ci659a906b`: "Solve problems involving reducing balance loans including calculating the total amount paid, monthly repayments, amount still owing and the time taken to repay the loan"

Standard 1: no matching content point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2)

**Boundary:** starts from i14's final frame (the two-route frame: left, the SUV plate with "$25,000 car loan", "7.2% a year for 5 years" and four chips; right, the credit card plate and the table with "New purchases"). The right panel fades on the first sentence. Recalls i13 (the period table and its spreadsheet), i14 (a spreadsheet or graph gives a term) and i12 (interest = total paid − amount borrowed) in a phrase or grey chip each; i04 (monthly rate = annual rate ÷ 12; months = years × 12) in a grey chip. Teaches: reading a table of monthly repayments per $1,000 (row for the annual rate, column for the term) and multiplying by the number of thousands borrowed; checking with a loan calculator; total paid = repayment × number of repayments; total interest = total paid − amount borrowed; the amount still owing after a number of payments, from the spreadsheet's row or a balance graph; the time to repay at a larger repayment, by counting spreadsheet rows to a zero balance (the last payment smaller); keeping "total paid", "interest" and "still owing" apart. Stops at the four loan questions. Not taught: present value interest factors (i20); credit cards (i16); any formula for the repayment or the term.

## Decisions

- **Anchor: a small second-hand SUV for a long commute to a first full-time job (painted plate, live).** The site's lesson12 card 06 loan: $25,000 at 7.2% p.a. (0.6% a month) over 5 years: repayment $497.39 (table 19.8957 × 25); total $29,843.40; interest $4,843.40; owing after 24 payments $16,061.23 (spreadsheet, interest rounded to the cent); at $600 a month, 49 payments (the last $54.58), interest $3,854.58. Cars and work; the pack's anchor 1, framed around commuting to work so it is not Advanced f09's first-car anchor.
- **Worked example (g01, scene 3): repayment, total paid and interest.** Task strip, givens card, the table lookup lifted into the working, framed answers, crossed slip "25,000 × 19.8957 = $497,392.50" (caption "the table is per $1,000: use 25").
- **The repayment table (teaching extract).** Monthly repayment per $1,000 borrowed, 4 decimal places, rows 6.0%, 6.6%, 7.2%, 7.8% p.a. and columns 3, 4, 5 years (exact repayments rounded; values under "Numbers used"). Scene 3 says once that answers can differ by a few cents if the table has fewer decimal places, and that HSC answers follow the table given.
- **Site corrections.** MS-24: lessons 08 and 12 find the repayment with M = PV × r ÷ (1 − (1 + r)^(−n)) and terms with logarithms; neither is shown. The site's lesson08 `we-1` ($250,000 mortgage at 5.4%) is not used (pack realism note: RBA F5 October 2026 owner-occupier discounted variable rate 7.05% p.a.; NSW prices far above $250,000).
- **Rates (ruling 5, ruling 32).** 7.2% p.a. for a secured car loan is plausible against RBA statistical table F8, Personal Lending Rates (September 2026, read 18 November 2026): new fixed-rate personal term loans averaged 10.39% p.a. (https://www.rba.gov.au/statistics/tables/csv/f8-data.csv); secured loans are usually lower. Said once in scene 1: "an example rate; rates change".
- **Join.** Scene 1 opens on i14's final frame and fades its right panel. Scene 13 repeats i14's right panel full width (the credit card plate and the table with "New purchases"), so i16 opens on one picture for both courses (root ruling 30).
- **Simulations (standard item 3).**
  1. **Table lookup** (scenes 2 and 3; new `InterestFactorTable` in its "Monthly repayment per $1,000" version): a crosshair runs down the "5 years" column and along the "7.2%" row; the crossing cell lifts out and drops into "× 25".
  2. **Total-paid bar** (scene 4; `CostSplitBars` from i12): 60 violet repayment blocks stack into one bar on a dollar scale, then the bar splits into teal "$25,000 borrowed" and amber "$4,843.40 interest".
  3. **Row jump and graph reader** (scenes 5 and 6; `SpreadsheetGrid` with a row jump, `StudioPlot` with a vertical reader): the grid scrolls from row 3 to row 24 while a reader on the balance graph slides to month 24; then the repayment cell changes to 600 and the grid jumps to the first zero row, the graph's landing point moving from 60 to 49.
- **Colour roles (fixed for i12 to i18).** Balance owed **blue**; interest **amber**; repayment **violet**; amount borrowed and the part that pays off the debt **teal**; answer **green**; mistake **red**, crossed slips only. The repayment table's header strip is violet.
- **Large type, handwritten voice.** Table cells 40 px (the lifted cell 56 px), headers 32 px; working rows 44 px; spreadsheet cells 40 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "per $1,000", "row: the rate", "column: the years", "25 thousands", "same answer", "60 repayments", "total paid − borrowed", "2 years = 24 payments", "still owe most of it", "count the rows", "smaller last payment", "three different numbers". At most two live at once.
- **Stage changes (standard item 2).** i14's frame and the SUV with four question chips (1); the repayment table (2); the g01 board with the lookup, the calculator check and the totals (3); the total-paid bar (4); the spreadsheet row 24 and the graph reader (5); the zero row at $600 (6); three numbers side by side (7); framed card (8); question cards (9 to 12); the credit card frame for i16 (13); key notes (14).
- **Memory aid.** Framed card: "Repayment from the table. Total = repayment × number. Interest = total − borrowed." Key line: "Still owing? Read the row. How long? Count the rows."
- **Visual surprise.** In scene 5, at month 24 (40% of the way through the time) the graph's reader shows the balance still about 64% of the loan: the curve is visibly bowed, because early repayments are mostly interest (i13's split).
- **Plain meanings at first use.** Repayment per $1,000 ("the monthly repayment for every thousand dollars borrowed"); total amount paid ("every repayment added up"); total interest ("what you pay on top of what you borrowed"); amount still owing ("the balance after a number of repayments"); term ("how long the loan takes to repay").
- **Attempts (original, HSC style; the pack's two questions).** A1: an $18,000 kitchen renovation at 8% p.a. over 4 years, with a supplied table: repayment, total paid and interest; crossed "interest = $21,092.64" (caption "that's the total paid"). A2: a $14,000 camera kit at 0.7% a month and $450 a month, with spreadsheet extracts: the amount owing after a year, the time to repay, the total and the interest; crossed "36 × $450 = $16,200" (caption "the last payment is only $95.10").
- **Mistake scene:** none separate. The whole loan times the table value (3 crossed); total paid called interest (A1 crossed); "after 2 years" read from row 2 (5, said and crossed); the full repayment counted for the last month (6, said; A2 crossed).
- **Cause chain taught, in order:** (1) the table gives the repayment for $1,000, and the repayment grows in proportion to the amount, so multiply by the number of thousands (2, 3); (2) every repayment is the same, so the total is the repayment times the number of repayments, and the interest is what is paid above the amount borrowed (3, 4); (3) the balance after n payments is whatever the table or spreadsheet carries down to row n, and it falls slowly at first because early repayments are mostly interest (5); (4) a bigger repayment clears the balance in fewer rows, and the last payment is only what is left (6).
- **Entry knowledge (route):** i13 (period table and spreadsheet), i14 (term from a spreadsheet or graph), i12 (total cost), i04 (rate per period and number of periods, Standard 2). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i16, "Why is a credit card a reducing balance loan, and what do its fees and interest-free period mean?").** Scene 13: the plain card plate `ms12-credit-card-v1.png` (about 700 px wide) at the left; at the right an empty coded table (1,100 × 360 px) with headers "Balance at start", "Interest", "Repayment", "New purchases", "Balance at end" (36 px), "New purchases" ringed amber; chips "a loan you can borrow again?", "Next: credit cards" and "?". No value is shown. This is i14's right panel, full width, and i16's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Factor per $1,000 at 0.6% for 60 months: 19.8957 (exact 19.89568...); 25 × 19.8957 = 497.3925 → $497.39 (exact repayment 497.3871 → $497.39). With a 2-decimal table ($19.90) the answer would be $497.50.
  (b) Totals: 60 × 497.39 = 29,843.40; interest 4,843.40. A cent-rounded spreadsheet leaves $0.21 after 60 payments, which the lender adds to the last repayment (pack); not shown.
  (c) Rows: 150.00 / 24,652.61; 147.92 / 24,303.14; 145.82 / 23,951.57. After 12 payments 20,690.95; after 24 payments 16,061.23 (a present value shortcut would give 16,061.10; not shown). 16,061.23 ÷ 25,000 = 64%.
  (d) At $600: 49 payments, the last 54.58; total 28,854.58; interest 3,854.58; 48 × 600 + 54.58 = 28,854.58. 49 months = 4 years 1 month.
  (e) Pronunciations: "nineteen point eight nine five seven"; "four hundred and ninety-seven dollars thirty-nine"; "sixteen thousand and sixty-one dollars twenty-three".
  (f) Window: months 0 to 60, $0 to $26,000, grid every 12 months and $5,000.

Main question: *A $25,000 car loan is at 7.2% a year over 5 years. How big is the repayment, how much is paid in total, how much is still owed after 2 years, and how long does it take at $600 a month?*
Entry knowledge (i13, i14, i12, i04): period tables and spreadsheets; a term from a spreadsheet or graph; total cost; rate per period.
Stops after: the four loan questions with a repayment table, a calculator, a spreadsheet and a graph. No formula, no present value factors, no credit cards.
Handoff: math-s12-i16: "a plain credit card and a loan table with a new column: a loan you can borrow again?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest amber; repayment violet; borrowed teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: four questions about one loan
> Here's a small second-hand SUV for a long commute to a first full-time job. It costs twenty-five thousand dollars, borrowed over five years at seven point two per cent a year. That's an example rate, and rates change. Before anyone signs, there are four questions to answer. How big is the monthly **repayment**? How much is paid in total? How much is still owed after two years? And how long would it take paying six hundred a month? Every loan question in the exam is one of these four. So how do we find **them**?

Visual: opens on i14's final frame. On the first sentence the right panel (credit card) fades and the grey rule withdraws; the SUV plate moves to the left third at about 900 px. On "twenty-five thousand dollars" the card's first line pulses; on "seven point two per cent" the second, with a grey chip "example rate (RBA F8, Sept 2026: personal loans average 10.39% p.a.)". On "repayment" the four chips move into a column at the right, 40 px, the first one ringing violet; the others ring in turn as spoken ("total paid?", "still owing after 2 years?", "how long at $600 a month?"). On "them" heading "The four loan questions" writes on.

### 2. a table of repayments
> First, the repayment. A lender's table lists the monthly repayment for every thousand dollars you borrow. Each row is an interest rate a year, and each column is how many years. Find the seven point two per cent row, and the five-year column, and where they meet is nineteen point eight nine five **seven**. So every thousand dollars borrowed costs nineteen dollars eighty-nine and a bit each month. We're borrowing twenty-five thousand, which is twenty-five lots of a **thousand**, so the repayment is twenty-five times that.

Visual: stage change: the plate shrinks to a 300 px badge at the top left with the four chips as a 30 px strip (the first ringed). The `InterestFactorTable` ("Monthly repayment per $1,000 borrowed", violet header, 1,300 × 560 px) fills the frame: columns "3 years", "4 years", "5 years"; rows "6.0%", "6.6%", "7.2%", "7.8%"; cells 40 px. Definition chip, 40 px: "repayment per $1,000: the monthly repayment for every thousand borrowed". On "rate a year" the row headers ring, hand tag "row: the rate"; on "how many years" the column headers ring, hand tag "column: the years". The crosshair runs down "5 years" and along "7.2%" (simulation 1); on "seven" the cell "19.8957" rings violet and lifts out to 56 px. On "thousand" a strip "$25,000 = 25 × $1,000", hand tag "25 thousands".

### 3. worked example: repayment, total and interest
> Here it is set out. Find the monthly repayment, the total paid and the total interest. The repayment is twenty-five times nineteen point eight nine five seven, which is four hundred and ninety-seven dollars thirty-**nine**. A loan calculator gives the same answer. Five years is sixty monthly repayments, so the total paid is sixty times four ninety-seven thirty-nine, twenty-nine thousand eight hundred and forty-three dollars **forty**. The interest is the total paid minus what you borrowed, four thousand eight hundred and forty-three dollars forty. Multiplying the whole twenty-five thousand by the table value is the slip. That gives almost half a million dollars a month. The table is per thousand, so use **twenty-five**.

Visual: clear change to the g01 board. Task strip, 44 px: "A $25,000 car loan is taken at 7.2% p.a. over 5 years, with monthly repayments. Use the table to find (a) the monthly repayment (b) the total amount paid (c) the total interest." Givens card, 40 px: "borrowed $25,000" (teal), "7.2% p.a." (amber), "5 years: 60 months" (violet), "table: 19.8957 per $1,000" (violet). Rows, 52 px: "M = 25 × 19.8957"; on "nine" "= $497.39" (framed green). On "loan calculator" a small coded browser window (unbranded, 520 × 320 px) at the right with fields "amount $25,000", "rate 7.2% p.a.", "term 5 years", "monthly" and the readout "$497.39", hand tag "same answer"; a grey chip "tables with fewer decimal places can differ by a few cents: use the table given". Rows: "total paid = 60 × 497.39"; on "forty" "= $29,843.40" (framed green), hand tag "60 repayments"; "interest = 29,843.40 − 25,000 = $4,843.40" (framed green), hand tag "total paid − borrowed". A grey chip "i12: interest = total paid − borrowed". On "twenty-five" (last bold) a red slip "25,000 × 19.8957 = $497,392.50" writes and is crossed (caption "the table is per $1,000: use 25").

### 4. what the total is made of
> Picture those sixty repayments stacked up. Together they make twenty-nine thousand eight hundred and forty-three dollars forty. Twenty-five thousand of that pays back what you **borrowed**. The rest, four thousand eight hundred and forty-three forty, is the price of borrowing it for five **years**.

Visual: stage change: `CostSplitBars` (simulation 2): 60 thin violet blocks drop one after another (about 4 s) into a horizontal bar on a $0 to $30,000 scale, readout "$29,843.40". On "borrowed" the bar splits: teal "$25,000 borrowed"; on "years" amber "$4,843.40 interest". The SUV badge sits at the bar's left end.

### 5. still owing after two years
> Now the third question. How much is still owed after two years? Two years is twenty-four monthly payments, so we need the balance at the end of row twenty-four, not row **two**. The spreadsheet from last lessons has every row. Jump down to row twenty-four, and the balance is sixteen thousand and sixty-one dollars twenty-**three**. The graph says the same. Here's the surprise. Two years is forty per cent of the time, but you still owe sixty-four per cent of the loan. That's because the early repayments are mostly **interest**.

Visual: stage change: the `SpreadsheetGrid` (left 55 per cent, 36 px cells) with columns "Month | Opening | Interest | Repayment | Closing", rows 1 to 3 showing 25,000.00 / 150.00 / 497.39 / 24,652.61, then 24,652.61 / 147.92 / 497.39 / 24,303.14, then 24,303.14 / 145.82 / 497.39 / 23,951.57. On "two" (first bold) a red slip "row 2: $24,303.14" writes and is crossed (caption "2 years = 24 payments"), hand tag "2 years = 24 payments". A grey chip "i13: one row per month". On "row twenty-four" the grid jumps (simulation 3) to rows 23 to 25, row 24 highlighted; on "three" its closing cell "16,061.23" rings blue, framed green "still owing after 2 years: $16,061.23". At the right 45 per cent, the balance graph (months 0 to 60, $0 to $26,000) with a vertical reader sliding to month 24 and a horizontal dashed line to "$16,061" on the vertical axis. On "surprise" two bars under the graph: "time: 40%" and "still owed: 64%", hand tag "still owe most of it". On "interest" the curve's bow at the left rings amber, a grey chip "i13: early repayments are mostly interest".

### 6. how long at six hundred a month?
> Last question. How long would it take paying six hundred dollars a month? Change the repayment cell to six **hundred**, and the whole spreadsheet recalculates. Now scroll down until the balance first reaches zero. That happens at payment forty-nine, about four years and a month. Look at that last row. Only fifty-four dollars fifty-eight is left to pay, so the last payment is **smaller**. The interest drops to three thousand eight hundred and fifty-four dollars fifty-**eight**.

Visual: camera continue. On "hundred" the repayment input cell changes from 497.39 to 600 (violet), every repayment cell updates in a ripple; the graph redraws a steeper curve, the first fading to grey dashed. On "scroll down" the grid jumps to rows 47 to 50, hand tag "count the rows"; row 49 rings: opening 54.25, interest 0.33, repayment "54.58", closing "0.00"; on "smaller" the "54.58" rings, hand tag "smaller last payment". The graph's landing point at 49 rings green, framed "49 months (about 4 years 1 month)". On "eight" row "interest $3,854.58" (amber), and a grey chip "48 × 600 + 54.58 = $28,854.58 paid".

### 7. three numbers, three meanings
> Exam questions use three phrases that sound alike. Total paid is every repayment added up. Total interest is what you pay on top of what you borrowed. And amount still owing is the balance part-way through. Read which one the question **asks** for.

Visual: stage change: three chips side by side, 44 px, each with its number from the anchor: "total paid: $29,843.40" (violet), "total interest: $4,843.40" (amber), "still owing after 2 years: $16,061.23" (blue). On "asks" hand tag "three different numbers" across them.

### 8. memory aid
> Here's the summary. Get the repayment from the table, times the number of thousands. Total paid is the repayment times the number of repayments, and interest is the total minus what you borrowed. For the amount owing, read the row. For how long, count the **rows**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the SUV badge with the four chips, each now ticked green. Main line, hand font 52 px: "Repayment from the table. Total = repayment × number. Interest = total − borrowed." On "rows" the key line, 40 px: "Still owing? Read the row. How long? Count the rows." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. The table shows monthly repayments per thousand dollars borrowed. Mia borrows eighteen thousand dollars at eight per cent a year over four years for a kitchen renovation. Find the monthly repayment. Then find the total amount paid and the total interest. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The table shows monthly repayments per $1,000 borrowed. Mia borrows $18,000 at 8% p.a. over 4 years for a kitchen renovation. (a) Find the monthly repayment. (b) Find the total amount paid and the total interest." Table, 36 px, "Annual rate | 2 years | 3 years | 4 years | 5 years": "7% | 44.7726 | 30.8771 | 23.9462 | 19.8012"; "8% | 45.2273 | 31.3364 | 24.4129 | 20.2764"; "9% | 45.6847 | 31.7997 | 24.8850 | 20.7584". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The eight per cent row and four-year column give twenty-four point four one two nine, so the repayment is eighteen times that, four hundred and thirty-nine dollars forty-**three**. Forty-eight repayments make twenty-one thousand and ninety-two dollars sixty-four in total, and the interest is three thousand and ninety-two sixty-**four**. Calling the total the interest is the **slip**.

Visual: the card shrinks to the top (30 px); the table stays, 36 px, with the crosshair on "8%" and "4 years" and "24.4129" lifting out. Rows, 44 px: "M = 18 × 24.4129"; on "three" "= $439.43" (framed green); "48 × 439.43 = $21,092.64"; on "four" "interest = 21,092.64 − 18,000 = $3,092.64" (framed green). On "slip" a red slip "interest = $21,092.64" writes and is crossed (caption "that's the total paid"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A spreadsheet models a fourteen thousand dollar loan for a professional camera kit, at zero point seven per cent a month, with repayments of four hundred and fifty dollars. Use the extracts shown. How much is still owing after one year? How long does it take to repay? Find the total amount paid and the total interest. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A spreadsheet models a $14,000 loan for a professional camera kit at 0.7% per month, with repayments of $450 per month. Extracts: after month 1 the balance is $13,648.00; after month 2, $13,293.54; after month 12, $9,609.53; the balance first reaches zero at month 36, when a final payment of $95.10 is made. (a) How much is still owing after one year? (b) How long does it take to repay the loan? (c) Find the total amount paid and the total interest." Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> One year is twelve months, so nine thousand six hundred and nine dollars fifty-**three** is still owing. It takes thirty-six months, thirty-five payments of four hundred and fifty, then ninety-five dollars ten. So the total is fifteen thousand eight hundred and forty-five dollars ten, and the interest is one thousand eight hundred and forty-five **ten**. Counting thirty-six full payments is the **slip**.

Visual: the card shrinks to the top. On "three" the extract "after month 12: $9,609.53" rings, framed green. Rows, 44 px: "36 months: 35 × $450 + $95.10"; on "ten" "= $15,845.10" and "interest = 15,845.10 − 14,000 = $1,845.10" (framed green). On "slip" a red slip "36 × $450 = $16,200" writes and is crossed (caption "the last payment is only $95.10"). Hold about 1 s.

### 13. handoff
> A car loan is borrowed once and paid down. But one kind of loan lets you keep borrowing, even while you're paying it off. Here's a credit card, and the loan table with one new column, new purchases. Is a credit card still a reducing balance loan? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "credit card" the plain card plate `ms12-credit-card-v1.png` (about 700 px wide) at the left; on "new purchases" an empty coded table at the right (1,100 × 360 px), headers "Balance at start", "Interest", "Repayment", "New purchases", "Balance at end" (36 px), "New purchases" ringed amber. On "next" chips "a loan you can borrow again?", "Next: credit cards" and "?". Hold about 2 s. No value is shown. This is i14's right panel full width and i16's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Repayment = table value × number of thousands borrowed.
- Total paid = repayment × number of repayments.
- Total interest = total paid − amount borrowed.
- Still owing after n payments: read row n.
- Time to repay: count rows to zero; the last payment is smaller.

Memory aid (framed card, right side, as in scene 8): *Repayment from the table. Total = repayment × number. Interest = total − borrowed.* Key: *Still owing? Read the row. How long? Count the rows.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and i16's opening frame.

## Teaching checks

- **Does it explain causes?** Why multiply by 25: the table is per $1,000 and the repayment grows in proportion (2, 3). Why the total is repayment × number: equal repayments (3, 4). Why interest is total minus borrowed: the borrowed part is paid back, the rest is the cost (4). Why row 24, not row 2: one row per month (5). Why most is still owed after two years: early repayments are mostly interest (5). Why the last payment is smaller: only the remainder is left (6).
- **Misconceptions addressed:** the whole loan times the table value (3 crossed); total paid, interest and still owing confused (7; A1 crossed); "after 2 years" read from row 2 (5 crossed); the last payment counted in full (6; A2 crossed); annual rate looked up as monthly or the reverse (the table is by annual rate, said in 2).
- **Visual standard, item by item:** 1 the SUV from the first frame, as a badge after; 2 a new stage every 30 to 60 s; 3 the table lookup, the stacking total bar, the row jump with a graph reader; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 "40% of the time, 64% still owed" on the bowed curve.
- **One idea at a time:** the table (2), repayment and totals (3, 4), still owing (5), time to repay (6), the three phrases (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 30 s.
- **Avoided double teaching:** i13's table, i14's row count and i12's total cost are recalled in a phrase or chip.
- **Standard 1 path:** not applicable (Standard 2 only); the final frame is the Standard 1 path's picture too, so i16 opens the same way for both.
- **Syllabus coverage:** `ci659a906b`: monthly repayments (2, 3, A1), total amount paid (3, 4, A1, A2), amount still owing (5, A2), time taken to repay (6, A2). Key notes 1 to 5.
- **Out of scope by design:** present value interest factors (i20); repayment and term formulas and logarithms (MS-24, ruling 33); credit cards (i16).

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 3 marks suggested, not an official marking scheme).** "The table shows monthly repayments per $1,000 borrowed. [Annual rate | 2 years | 3 years | 4 years | 5 years: 7% | 44.7726 | 30.8771 | 23.9462 | 19.8012; 8% | 45.2273 | 31.3364 | 24.4129 | 20.2764; 9% | 45.6847 | 31.7997 | 24.8850 | 20.7584] Mia borrows $18,000 at 8% p.a. over 4 years for a kitchen renovation. (a) Find the monthly repayment. (b) Find the total amount paid and the total interest."
Model answer: (a) 18 × 24.4129 = $439.43 (to the nearest cent). (b) 48 × $439.43 = $21,092.64; interest $21,092.64 − $18,000 = $3,092.64. Classic mistake (crossed): "interest = $21,092.64".

**Attempt 2 (scene 11; original, HSC style, 3 marks suggested).** "A spreadsheet models a $14,000 loan for a professional camera kit at 0.7% per month, with repayments of $450 per month. Extracts: after month 1 the balance is $13,648.00; after month 2, $13,293.54; after month 12, $9,609.53; the balance first reaches zero at month 36, when a final payment of $95.10 is made. (a) How much is still owing after one year? (b) How long does it take to repay the loan? (c) Find the total amount paid and the total interest."
Model answer: (a) $9,609.53. (b) 36 months (35 payments of $450 and a final $95.10). (c) 35 × $450 + $95.10 = $15,845.10; interest $1,845.10. Classic mistake (crossed): "36 × $450 = $16,200".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Repayment table (per $1,000) | 6.0%: 30.4219, 23.4850, 19.3328; 6.6%: 30.6945, 23.7611, 19.6130; 7.2%: 30.9686, 24.0391, 19.8957; 7.8%: 31.2442, 24.3192, 20.1808 (3, 4, 5 years) | 2, 3 |
| SUV loan (site lesson12) | $25,000; 7.2% p.a.; 60 months; 25 × 19.8957 = $497.39; slip 25,000 × 19.8957 = 497,392.50 | 1 to 3 |
| Totals | 60 × 497.39 = 29,843.40; interest 4,843.40 | 3, 4, 7 |
| Spreadsheet rows | 150.00 / 24,652.61; 147.92 / 24,303.14; 145.82 / 23,951.57; after 24: 16,061.23; 40% and 64% | 5, 7 |
| At $600 | 49 payments; row 49 opening 54.25, interest 0.33, last 54.58; interest 3,854.58; total 28,854.58 | 6 |
| A1 | 18 × 24.4129 = 439.43; 48 × 439.43 = 21,092.64; interest 3,092.64; table as printed | 9, 10 |
| A2 | 13,648.00; 13,293.54; 9,609.53; 36 months; 35 × 450 + 95.10 = 15,845.10; interest 1,845.10; slip 16,200 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`; interest rounded to the cent each period); the pack's values (`work/brief-standard-i2/recalc-output.txt`, `practice-output.txt`) agree. Codex to re-check.

- Repayment per $1,000, monthly compounding (rate ÷ 12), 4 decimal places: 6.0%: 30.4219, 23.4850, 19.3328; 6.6%: 30.6945, 23.7611, 19.6130; 7.2%: 30.9686, 24.0391, 19.8957; 7.8%: 31.2442, 24.3192, 20.1808. 7%, 8%, 9% at 2 to 5 years: as in A1's table.
- 25 × 19.8957 = 497.3925 → 497.39; exact repayment 497.3871 → 497.39. 60 × 497.39 = 29,843.40; − 25,000 = 4,843.40.
- Rows at 0.006 and 497.39: 150.00, 24,652.61; 147.92, 24,303.14; 145.82, 23,951.57; balance after 24 payments 16,061.23.
- At 600: 49 payments, last 54.58 (row 49 opening 54.25, interest 0.33), interest 3,854.58.
- A1: 18 × 24.4129 = 439.4322 → 439.43; 48 × 439.43 = 21,092.64; 3,092.64. A2: 14,000 at 0.007 and 450: 13,648.00; 13,293.54; after 12: 9,609.53; 36 payments, last 95.10; 15,845.10; 1,845.10.

## Memory aid check

- **"Repayment from the table. Total = repayment × number. Interest = total − borrowed."** with key line **"Still owing? Read the row. How long? Count the rows."** Original. Meaning, as said in scene 8: the table gives the repayment per $1,000, so multiply by the number of thousands; equal repayments add to the total paid; the interest is the part of the total above the amount borrowed; a spreadsheet's row n holds the balance after n payments, and the first row with a zero balance gives the time to repay. Assumptions checked: equal repayments at the end of each month (the table's and the spreadsheet's model); "total = repayment × number" holds when every repayment is equal, so the last smaller payment is added separately (scene 6, A2); "read the row" means the row for the number of payments, not years (scene 5). It helps a new case: $12,000 at 7.2% over 3 years: 12 × 30.9686 = $371.62; 36 × 371.62 = $13,378.32; interest $1,378.32. Introduced after scenes 2 to 7.
- **Considered, not used:** "Table, total, take away" (neat, but leaves out the two spreadsheet questions).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,268 characters**, 14 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 396 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the table lookup (2), the stacking bar (4), the row jump and reader (5) and the zero row (6) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 495 s (8 min 15 s)**, 75 s under the 570 s cap. Feedback speech: about 28 s and 30 s.

Reserve trims if the voiced take runs long: scene 1's "Every loan question in the exam is one of these four." (keep if possible: the why-it-matters line); scene 3's "That gives almost half a million dollars a month." (the crossed slip carries it).

## Scene list and build ids

Lesson key `m-s12i15` (route math-s12-i15). Explainer folder `src/explainer/lessons/math-s12-i15`; build inputs in `docs/production/claude-pm/lessons/math-s12-i15/` (at voicing).

In order (14 scene headings): hook-four-questions, repayment-table, worked-repayment-total, total-made-of, still-owing, how-long-at-600, three-numbers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i14's frame; the SUV and four questions |
| 40 to 75 s | 2 | The repayment table lookup |
| 75 to 135 s | 3 | g01 board: repayment, calculator, totals |
| 135 to 155 s | 4 | The stacking total-paid bar |
| 155 to 205 s | 5 | Row 24 and the graph reader |
| 205 to 240 s | 6 | The zero row at $600 |
| 240 to 260 s | 7 | Three numbers side by side |
| 260 to 280 s | 8 | Framed memory card |
| 280 to 380 s | 9 to 12 | Question cards and countdowns, then feedback |
| 380 to 405 s | 13 | The credit card frame for i16 |
| 405 to 450 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i14's last frame continues into 1 (the right panel fades); 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 camera continue; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i15-learning-review.md`, `science_check` = `checks/m-s12-i15-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-calculator-v1.png` (a plain scientific calculator; not used, because the digital tool here is a loan calculator window, coded); `ma12-used-hatchback-v1.png` (Advanced f09's first-car anchor, not reused, as the kit-needs file asks). No SUV plate exists.

Need (painted, new; see the Codex asset brief): `ms12-small-suv-v1.png` (also on i14's final frame, so paint it before the i14 build; reused in i23). Reused: `ms12-credit-card-v1.png` (briefed in `math-s12-i16.md`; final frame).

Coded: the repayment table, the calculator window, the stacking bar, the spreadsheet and graph, the three chips, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot` with a vertical reader, `SpreadsheetGrid`, `ScreenApp` (as a coded browser calculator, unbranded), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `loanRepayment` and `loanSchedule` from `money.ts`.

Additions (kit-needs row i15):
1. **InterestFactorTable** (new; the main new part of the half-strand, reused by i20, i21 and i23): a printed-style lookup table with column and row highlights and the crossing cell lifting into a multiplication; title and header colour by version ("Monthly repayment per $1,000" violet here). Check: the 7.2% row and 5-year column give 19.8957, and × 25 gives 497.39.
2. **SpreadsheetGrid row jump:** scroll from row 3 to row 24, then to the first zero row, with a "rows hidden" bar. Check: row 24 closing 16,061.23; at 600, row 49 with 54.58.
3. **CostSplitBars** (from i12): 60 blocks stacking into one bar, then splitting into borrowed and interest. Check: 25,000 + 4,843.40 = 29,843.40.

## Codex asset brief (Maths S12 I15, a small SUV; also on i14's final frame and in i23)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i15.md`, route entry math-s12-i15. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i14 build (i14's final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-camper-trailer-v1.png` and `maths/ma11-trade-van-v1.png`; no text, logos, brand names, number plates with characters, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-small-suv-v1.png` (about 1700 × 1000 px): a small, slightly older five-door SUV in side three-quarter view facing right, muted blue-grey paint with light road dust on the lower panels, roof rails, plain alloy wheels, a blank number plate (no characters), no badges or brand grille shape. Ground line flat, fading to transparent at the sides. It must read clearly at 300 px.

Report inspection on the paper background (`#f6f1e7`) at 900 px, 700 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i15-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS (table values to 4 decimal places; interest rounded to the cent each row), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that the description says Standard 2 only.
3. Confirm no repayment formula, present value formula or logarithm appears.
4. Confirm the site's lesson12 numbers are kept ($497.39, $29,843.40, $4,843.40) and the $250,000 mortgage does not appear.
5. Confirm both attempts carry every demand and neither card shows an answer.
6. Confirm scene 1 opens on i14's final frame and scene 13 matches i14's right panel and i16's opening.
7. Confirm the rate source line (RBA F8, September 2026) and the "rates change" sentence.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Loan Repayments, Total Paid, Amount Owing and Time to Repay | Year 12 Maths Standard

(Title length: 84 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson12.sa.html

A $25,000 car loan at 7.2% a year over 5 years. Answer the four questions every loan problem asks: the monthly repayment (from a table of repayments per $1,000, checked with a loan calculator), the total amount paid and the total interest, the amount still owing after 2 years (from a spreadsheet row and a graph), and the time to repay at $600 a month (by counting rows to a zero balance). See why you still owe most of the loan after 2 years. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Solve problems involving reducing balance loans including calculating the total amount paid, monthly repayments, amount still owing and the time taken to repay the loan"
Standard 1 has no matching content point; Standard 1 students go on to the credit cards video.
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

Builds on: Extra Repayments, Lump Sums and Paying Fortnightly. Next: Credit Cards: Interest Rates, Fees and Interest-Free Periods.

#Year12Maths #MathsStandard #Loans #HSCScience

## Open decisions

- **1. Repayment table extract (root).** The teaching table is an original extract (6.0% to 7.8%, 3 to 5 years, 4 decimal places) built around the site's 7.2% loan; A1 uses the pack's 7% to 9% table. Confirm both, or ask for one table in both places.
- **2. The calculator check.** One unbranded loan calculator window confirms $497.39 as the "digital tool". Confirm, or drop it (saves about 4 s).
- **3. Scene 7 (three phrases).** A short scene for the site's own warning that "total cost", "total interest" and "amount saved" are different things. It is the first cut if the voiced take runs long.

## Review notes

- Revision 1. Next: student learning review (trace from i14 for a Standard 2 student; check that "per $1,000" and "number of thousands" land before the multiplication, that the row-24 jump and the graph reader agree visibly, that the 40%/64% surprise is caused and not just stated, that the zero-row count and smaller last payment are clear, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder must build `InterestFactorTable` before this video.
