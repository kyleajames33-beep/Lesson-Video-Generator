# Maths S12 I17b: What does a credit card statement tell us, and what does paying only the minimum cost? Reading every line, the minimum payment, the warning box, and why a bigger fixed payment changes everything (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`; ruling 29 splits the outline's i17 into i17a and i17b). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,347 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 503 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i17b-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Optional, scene 2 (why interest was charged): **applied**. "Interest of forty-seven dollars sixty was charged, because last month's balance wasn't paid in full, at a yearly rate of twenty per cent".
2. Optional, scene 5 and A1 (warning box layout; ruling 41): **deferred to Codex**, as root decision 2 directs. The 3-year line is kept until Codex's check under ruling 41. The warning's source is now cited as the National Consumer Credit Protection Regulations 2010, in place of the pack's unconfirmed ASIC instrument 20-0746. The box layout is marked "illustrative" in the Decisions and in scene 5. If Codex confirms the table layout real statements use, open decision 1 already gives the two-row redraw ("Only the minimum: 28 years 11 months, $12,409.15"; "$111.49: 3 years, $4,013.64"). The numbers and narration would not change. Codex brief item 3 names the regulations.

Also applied from the i19 review (optional finding 1): scene 6 now says "Here's a classic example, set out." in place of "the example from the lesson notes".

Narration 5,347 characters by script (Revision 1: 5,313), about 503 s with holds, 67 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 30 (second half, root ruling 29), Investment and loans (Credit cards). Shared by Standard 1 and Standard 2: the content point is word for word the same in both courses. Pre-design pack: `../pre-design/maths-standard/math-s12-i17.md` (the "i17b" half of its suggested split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson10.sa.html` (SHA256 `9dfbd06d389ddb8e49b8223ac80ece3589e8950fa990e7486dbf0753bf9253c5`; card 06's minimum payment trap, $3,000 at 20% with $60 and $150 a month, and Trap 03). The site shows no statement (MS-30), so the statement is an original, unbranded coded part. Site corrections MS-19, MS-21 and MS-22 apply; no site error is taught. Route entry: `math-s12-i17` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; the credit card plate; the statement, tables, split bar and graph coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, a coded statement with no real bank branding, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (money: a monthly card statement), Australian spelling, no em dashes, money spoken naturally, conversational narration, responsible-money framing stated plainly without lecturing).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Investment and loans, Credit cards):
- `cife5c18db`: "Interpret a credit card statement, examining the implications of only making the minimum payment"

Standard 1 (Depreciation and loans, Credit cards):
- `ci42184aca`: "Interpret a credit card statement, examining the implications of only making the minimum payment"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i17a's final frame exactly (the television plate and the card plate; a coded statement with field labels only and an empty "Minimum repayment warning" box; "Minimum payment" ringed amber; chips "what's on the statement?", "Next: the statement and the minimum payment", "?"). Recalls i16 (closing balance, due date, the interest-free condition, the late payment fee), i17a (interest charged daily) and i13 (interest on the balance, the period table) in a phrase or grey chip each. Teaches: every line of a statement (statement period, opening balance, payments, purchases, interest, fees, closing balance, annual percentage rate, minimum payment, due date) and how the closing balance is built from them; the minimum payment ("2% of the closing balance or $25, whichever is greater" on this example) as the least you must pay to avoid a late fee, not the amount that avoids interest; why a minimum payment barely touches the debt (most of it is interest); the warning box's two lines (minimum only, and a monthly amount that clears it in 3 years); why paying only the minimum takes decades (the minimum shrinks as the balance does); what a larger fixed payment changes (site card 06, corrected); a payment smaller than the month's interest makes the balance grow (site Trap 03). Stops at interpreting the statement and the minimum payment. Not taught: daily interest calculation (i17a); choosing a card or a loan for a goal (i18).

## Decisions

- **Anchor: one monthly statement (coded, live).** An example statement, unbranded, for a closing balance of $3,000.00: opening balance $2,912.40, payments −$500.00, purchases +$540.00, interest $47.60, fees $0.00; annual percentage rate (purchases) 20.00%; minimum payment due $60.00 ("2% of the closing balance or $25, whichever is greater"); due date 25 days after the statement date. Warning box, worked by the same rule with interest at 20% ÷ 12 a month and no new purchases: "If you make only the minimum payment each month, you will pay off the closing balance in about 28 years and 11 months, paying an estimated total of $12,409.15." and "If you pay $111.49 each month, you will pay it off in 3 years, paying an estimated total of $4,013.64." The $3,000 at 20% matches the site's card 06, so the statement and the site's example are one story. Money; the pack's anchor 2.
- **Worked example (g01, scene 6): site card 06, corrected (MS-22).** $3,000 at 20% p.a. (÷ 12 a month): a fixed $60 a month takes 109 payments (108 of $60 and a last of $24.24; about 9 years), total $6,504.24, interest $3,504.24; a fixed $150 takes 25 payments (the last $79.80), total $3,679.80, interest $679.80; saving $2,824.44 and about 7 years. First three rows at $60: $50.00 interest, $10.00 off; $49.83, $10.17; $49.66, $10.34 (site). Crossed slip "$150 is 2.5 × $60, so 109 ÷ 2.5 ≈ 44 months" (caption "at $60 most goes on interest").
- **The statement's rules (ruling 32).** Moneysmart, credit card calculator and statements guidance (https://moneysmart.gov.au/credit-cards/credit-card-calculator, read 18 November 2026): minimums are typically 2% or 2.5% of the closing balance or a set dollar amount, whichever is greater; statements show how long minimum payments would take and a monthly amount that pays the balance off in 3 years. The minimum repayment warning itself is required by the National Consumer Credit Protection Regulations 2010 (the credit card statement provisions); Revision 2 cites the regulations rather than the pack's ASIC instrument 20-0746, whose number and scope were not confirmed (root decision 2). The warning box's layout is **illustrative** until Codex confirms it under ruling 41: the two lines carry the right quantities (minimum-only time and total; a monthly amount for 3 years and its total), but a real statement may set them out as a small table. The design labels the statement "example" and the rule "on this card"; Codex confirms the 3-year line against the cited sources (open decision 1).
- **Rates (ruling 5).** 20% and 20.99% sit within current card rates: RBA statistical table F5 (October 2026): standard credit card rate 21.74% p.a. (https://www.rba.gov.au/statistics/tables/xls/f05hist.xlsx); RBA F8 (September 2026): card balances incurring interest 18.91% p.a. (https://www.rba.gov.au/statistics/tables/csv/f8-data.csv). Said once in scene 2: "an example rate; card rates change".
- **Site corrections.** MS-22: the $150 comparison is 25 months and $3,679.80, not "approximately 24 months ... $3600". MS-19 (the $2,000 television's 9-year figures) and MS-21 (SA 1 (c)'s 280 months) are not used. The site's balance-transfer `we-1` and the effective annual rate stay out.
- **Monthly interest in this video.** The statement's interest line is given ($47.60); the minimum-payment runs use 20% ÷ 12 a month, as the site and the pack do, and scene 4 says the card really adds interest daily (i17a) but monthly is close enough to see the pattern. The warning box and A1's figures use the same model.
- **Responsible framing (pack decision).** Said plainly with the numbers, once each: paying only the minimum on this $3,000 takes almost 29 years and costs over $9,400 in interest; $111.49 a month clears it in 3 years. The minimum avoids a late fee, not interest. No lecture.
- **Join.** Scene 1 opens on i17a's final frame exactly. Scene 13 is i18's opening frame.
- **Standard 1 completeness.** Every step is reading, a percentage, or subtraction; both courses share every scene and both attempts.
- **Simulations (standard item 3).**
  1. **Statement fill** (scenes 1 to 3; new `CreditCardStatement`): fields fill one at a time as named; the closing balance builds as a running sum with arrows from the four lines that make it; the minimum line computes "2% × $3,000 = $60" beside a "$25" floor chip, the larger one lighting.
  2. **Split bar and shrinking minimum** (scenes 4 and 5; `CostSplitBars` and `StudioPlot`): the first $60 splits $50 amber and $10 teal; then a balance graph over 0 to 30 years draws three curves from $3,000: minimum only (shrinking minimum, a long flat tail to about 28.9 years), $60 fixed (zero at about 9 years), $111.49 fixed (zero at 3 years); a small readout tracks "this month's minimum" falling from $60 towards the $25 floor.
  3. **Growing balance** (scene 7): a balance bar where the amber interest added ($36.67) is taller than the violet payment taken off ($25.00), so the bar grows by $11.67 a month for three ticks.
- **Colour roles (fixed for i12 to i18).** Balance owed **blue**; interest **amber**; payment **violet**; the part that pays off the debt **teal**; the minimum payment line **amber outline**; the warning box **amber-tinted**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Statement fields 36 px labels and 40 px values (the current field 44 px); warning box text 34 px; working rows 44 px; graph labels 34 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "what you owed", "paid off", "new spending", "interest charged", "what you owe now", "the bigger of the two", "stops a late fee, not interest", "pay this to stay interest-free", "$50 interest, $10 off", "the minimum shrinks too", "almost 29 years", "more than 3 times the debt", "most of it is interest", "it grows!". At most two live at once.
- **Stage changes (standard item 2).** i17a's frame and the statement (1); the lines that make the closing balance (2); the minimum payment and due date (3); the first payment's split (4); the warning box and three curves (5); the g01 board for site card 06 (6); a payment below the interest (7); framed card (8); question cards (9 to 12); the car on a hoist for i18 (13); key notes (14).
- **Memory aid.** Framed card: "The minimum stops a late fee, not the interest." Key line: "Pay the closing balance to stay interest-free. Pay more than the minimum to get out sooner."
- **Visual surprise.** In scene 5 the minimum-only curve, after dropping a little, flattens into a tail that runs across the graph to almost 29 years, while the $111.49 curve reaches zero at 3 years; the readout shows the minimum shrinking as the balance does.
- **Plain meanings at first use.** Statement ("the monthly summary of your card"); statement period ("the dates the statement covers"); opening and closing balance ("what you owed at the start and owe at the end of the period"); annual percentage rate ("the yearly interest rate on purchases"); minimum payment ("the least you must pay by the due date to avoid a late fee"); due date ("the day the payment must arrive"); minimum repayment warning ("a box that shows what paying only the minimum would cost").
- **Attempts (original, HSC style).** A1 (the pack's question 2, with the warning's second line set to 3 years and recalculated): a statement extract for $2,640 at 20.99%, minimum 2% or $25 ($52.80); warning: 31 years and 9 months, total $12,879.52; or $99.45 a month for 3 years, total $3,580.20; show how $52.80 was found, find the interest if only the minimum is paid ($10,239.52), and the saving by paying $99.45 ($9,299.32); crossed "interest = $12,879.52" (caption "that's the total: take away $2,640"). A2 (original, on site Trap 03's idea): $1,800 owing at 21% p.a. (1.75% a month) with $25 a month: the first month's interest ($31.50), the new balance ($1,806.50) and why; crossed "the balance falls by $25" (caption "the interest is more than $25").
- **Mistake scene:** none separate. "The minimum is the amount due to avoid interest" (3, said; tag); "a payment that matches the interest makes progress" (7); "2.5 times the payment, 2.5 times faster" (6 crossed); total paid read as interest (A1 crossed); a payment below the interest (A2 crossed).
- **Cause chain taught, in order:** (1) the closing balance is the opening balance, less payments, plus purchases, interest and fees (2); (2) the minimum is a small percentage of the balance, so it is mostly used up by the month's interest (3, 4); (3) only the part above the interest reduces the debt, and because the minimum shrinks as the balance shrinks, the debt falls more and more slowly (5); (4) a fixed larger payment keeps a big part going to the debt, so the time and the interest fall far more than in proportion (6); (5) if a payment is less than the month's interest, the balance grows (7).
- **Entry knowledge (route):** i16 (closing balance, due date, interest-free condition, late fee); i17a (daily interest); i13 (interest on the balance, the period table). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i18, "Credit card or personal loan: which suits a short, medium or long-term goal?").** Scene 13: at the left the statement's warning box small (500 × 220 px) with "28 years and 11 months" ringed amber; at the right the car-on-hoist plate `ms12-car-hoist-v1.png` (about 900 px wide) with a coded card, 40 px: "car repair: $6,000"; chips "a card for a debt that lasts years?", "card or personal loan?", "Next: matching credit to the goal" and "?". No comparison is worked. This is i18's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Statement arithmetic: 2,912.40 − 500.00 + 540.00 + 47.60 + 0.00 = 3,000.00. Minimum max(25, 2% × 3,000) = 60.00.
  (b) Minimum-only run at 20% ÷ 12, minimum = max(25, 2% of the balance after interest), no new purchases: 347 payments (28 years 11 months), total 12,409.15, interest 9,409.15 (3.14 × 3,000). 3-year payment: 3,000 × (0.2/12) ÷ (1 − (1 + 0.2/12)^(−36)) = 111.49; 36 × 111.49 = 4,013.64. Saving 12,409.15 − 4,013.64 = 8,395.51 (not on screen).
  (c) Site card 06: rows 3,000.00 / 50.00 / 60 / 10.00; 2,990.00 / 49.83 / 10.17; 2,979.83 / 49.66 / 10.34. $60 fixed: 109 payments, last 24.24, total 6,504.24, interest 3,504.24. $150 fixed: 25 payments, last 79.80, total 3,679.80, interest 679.80. Saving 6,504.24 − 3,679.80 = 2,824.44. 109 ÷ 2.5 = 43.6 (the slip).
  (d) A1: 2% × 2,640 = 52.80 > 25; minimum-only 381 payments (31 years 9 months), total 12,879.52, interest 10,239.52; 3-year 99.45, total 3,580.20; saving 12,879.52 − 3,580.20 = 9,299.32. (The pack's 2-year line, $135.65 and $3,255.60, is replaced by the 3-year line.)
  (e) Trap: 1,800 × 0.0175 = 31.50; 1,800 + 31.50 − 25 = 1,806.50 (grows 6.50). Scene 7's teaching case (site Trap 03): 2,000 × 0.22 ÷ 12 = 36.67; 36.67 − 25 = 11.67 a month.
  (f) Pronunciations: "twelve thousand four hundred and nine dollars fifteen"; "a hundred and eleven dollars forty-nine"; "twenty-eight years and eleven months".

Main question: *A card statement shows a closing balance of $3,000 and a minimum payment of $60. What does each line mean, and what does paying only the minimum cost?*
Entry knowledge (i16, i17a, i13): closing balance and due date; daily interest; interest on the balance.
Stops after: every statement line, the minimum payment, the warning box, a larger fixed payment, and a payment below the interest. No goal-based choice of credit.
Handoff: math-s12-i18: "a $6,000 car repair: card or personal loan?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest amber; payment violet; debt paid off teal; minimum amber outline; warning box amber-tinted; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the statement arrives
> Every month, a credit card sends a statement, a summary of everything that happened on the card. This one says the closing balance is three thousand dollars, and the minimum payment is just sixty **dollars**. Sixty dollars sounds easy. But down the bottom there's a box with a **warning**. So what does each line tell you, and what does paying only the minimum really **cost**?

Visual: opens on i17a's final frame exactly (the television and card plates, the blank statement, chips). On the first sentence the "Next" chip fades, the plates shrink to a 300 px badge at the top left, and the statement (`CreditCardStatement`, 1,000 × 860 px) moves to the centre, its labels 36 px, a 26 px grey line "example statement". On "three thousand dollars" the "Closing balance" value fills "$3,000.00" (blue); on "dollars" the "Minimum payment" value fills "$60.00" (amber outline). On "warning" the empty warning box at the foot pulses amber. On "cost" heading "Statements and the minimum payment" writes on, and the question chip "What does the minimum cost?" moves to the top right.

### 2. what makes the closing balance
> Let's read it from the top. The statement period is the month it covers. The opening balance, two thousand nine hundred and twelve dollars forty, is what was owed at the start. Then five hundred was paid **off**. Five hundred and forty of new purchases went on. Interest of forty-seven dollars sixty was charged, because last month's balance wasn't paid in full, at a yearly rate of twenty per cent, an example rate, since card rates **change**. No fees this month. Put those together and you get the closing balance, three thousand dollars, what's owed **now**.

Visual: stage change: the statement at the left 60 per cent; fields fill and ring as named: "Statement period: 1 Nov to 30 Nov" ; "Opening balance $2,912.40" (blue), hand tag "what you owed"; on "off" "Payments −$500.00" (violet), hand tag "paid off"; "Purchases +$540.00" (ink), hand tag "new spending"; on "change" "Interest +$47.60" (amber) and "Annual percentage rate (purchases) 20.00%", hand tag "interest charged", and a grey chip "i17a: cards add interest daily"; "Fees $0.00". At the right a running sum, 44 px: "2,912.40 − 500.00 + 540.00 + 47.60 + 0.00"; on "now" "= $3,000.00" (framed blue), arrows from the four lines into the closing balance, hand tag "what you owe now".

### 3. the minimum and the due date
> Next, the minimum payment. On this card, it's two per cent of the closing balance or twenty-five dollars, whichever is bigger. Two per cent of three thousand is sixty, and sixty beats twenty-five, so the minimum is sixty **dollars**. Pay at least that by the due date, and there's no late fee. But here's the catch. The minimum doesn't stop the interest. To stay interest-free, you'd pay the whole closing balance, three thousand, by the due **date**.

Visual: camera continue. The "Minimum payment" line rings; working beside it, 44 px: "2% × $3,000 = $60" and a grey "$25" floor chip; on "dollars" the $60 chip lights and the $25 dims, hand tag "the bigger of the two". "Due date: 25 Dec" fills; a chip "no late fee" (teal) and hand tag "stops a late fee, not interest". On "date" the "Closing balance $3,000.00" rings teal, hand tag "pay this to stay interest-free", grey chip "i16: the WHOLE closing balance".

### 4. where the sixty dollars goes
> Say you pay just sixty dollars. Next month, at twenty per cent a year, about one point six seven per cent a month, the interest on three thousand is fifty dollars. So of your sixty, fifty pays the interest, and only ten dollars comes off the **debt**. You'd still owe two thousand nine hundred and ninety. That's why the minimum feels like it's doing nothing. Most of it is **interest**.

Visual: stage change: a violet bar "$60 payment" (1,000 px) splits into amber "$50.00 interest" and a thin teal "$10.00 off the debt" (simulation 2); on "debt" the teal slice rings, hand tag "$50 interest, $10 off". Row, 44 px: "3,000 × 0.20 ÷ 12 = $50.00", "3,000 + 50 − 60 = $2,990.00" (blue). Grey chip "monthly here; the card really adds it daily (i17a), and the pattern is the same". On "interest" hand tag "most of it is interest".

### 5. the warning box
> Now the warning box. It says that if you make only the minimum payment each month, you'll pay off this three thousand dollars in about twenty-eight years and eleven **months**. Twenty-eight years. You'd pay about twelve thousand four hundred dollars altogether, so more than nine thousand dollars in interest, over three times what you **borrowed**. Why so long? Because the minimum is two per cent of the balance, so as the balance shrinks, the minimum shrinks **too**, and the debt crawls. The second line gives another choice. Pay a hundred and eleven dollars forty-nine a month, and it's gone in three **years**, for about four thousand dollars in total.

Visual: stage change: the warning box (layout illustrative until Codex confirms it, ruling 41) enlarges to the top half (1,400 × 300 px, amber-tinted, 34 px text), filling as read: "If you make only the minimum payment each month, you will pay off the closing balance in about 28 years and 11 months, paying an estimated total of $12,409.15." On "months" "28 years and 11 months" rings, hand tag "almost 29 years". On "borrowed" a row, 44 px: "12,409.15 − 3,000 = $9,409.15 interest" (amber), hand tag "more than 3 times the debt". Below, the balance graph (0 to 30 years, $0 to $3,000): the minimum-only curve draws with its long flat tail to 28.9 years; on "too" a readout "this month's minimum" falls from "$60.00" towards "$25.00" as the curve flattens, hand tag "the minimum shrinks too". On "years" the box's second line fills: "If you pay $111.49 each month, you will pay it off in 3 years, paying an estimated total of $4,013.64.", and a teal curve on the graph reaches zero at 3 years.

### 6. worked example: sixty or a hundred and fifty?
> Here's a classic example, set out. Three thousand dollars is owed at twenty per cent a year. Compare paying a fixed sixty dollars a month with a fixed hundred and fifty. At sixty, a spreadsheet takes a hundred and nine payments, about nine years, and the total paid is six thousand five hundred and four dollars twenty-**four**. At a hundred and fifty, it takes twenty-five payments, about two years, and the total is three thousand six hundred and seventy-nine dollars **eighty**. So the bigger payment saves two thousand eight hundred and twenty-four dollars forty-four, and about seven **years**. A common slip is thinking two and a half times the payment means two and a half times faster. It's far faster than that, because at sixty most of each payment goes on interest, and at a hundred and fifty most goes on the **debt**.

Visual: clear change to the g01 board. Task strip, 44 px: "$3,000 is owed on a card at 20% p.a. (interest monthly). Compare paying a fixed $60 a month with a fixed $150 a month: time to repay, total paid and the saving." Givens card, 40 px: "owed $3,000" (blue), "20% p.a. ÷ 12" (amber), "$60 or $150 a month" (violet). Left: a small table, 36 px, of the first three months at $60 (site): "$50.00 | $10.00", "$49.83 | $10.17", "$49.66 | $10.34". Rows, 44 px: "$60: 109 payments (about 9 years)"; on "four" "total $6,504.24, interest $3,504.24"; "$150: 25 payments (about 2 years)"; on "eighty" "total $3,679.80, interest $679.80"; on "years" "saving = 6,504.24 − 3,679.80 = $2,824.44" (framed green) and "about 7 years sooner" (framed green). Two curves on a small graph beside the rows. On "debt" a red slip "$150 = 2.5 × $60, so 109 ÷ 2.5 ≈ 44 months" writes and is crossed (caption "at $60 most goes on interest"), and two split bars appear: "$60: $50 | $10" and "$150: $50 | $100".

### 7. when the balance grows
> One more trap. Some minimums have a floor, like twenty-five dollars. Say two thousand dollars is owed at twenty-two per cent a year. One month's interest is thirty-six dollars sixty-seven. If only twenty-five dollars is paid, the balance goes **up**, by eleven dollars sixty-seven, every month. Paying less than the interest means the debt **grows**.

Visual: stage change: a blue balance bar "$2,000.00" (simulation 3). Row, 44 px: "2,000 × 0.22 ÷ 12 = $36.67" (amber). Each tick: an amber "+$36.67" cap goes on and a violet "−$25.00" bite comes off; on "up" the bar ends taller, "+$11.67", hand tag "it grows!". On "grows" three ticks run, the bar rising each time. Grey chip "site Trap 03".

### 8. memory aid
> Here's the summary. The minimum payment stops a late fee, but it doesn't stop the interest. Pay the whole closing balance to stay interest-free, and pay more than the minimum to get out of debt **sooner**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three curves small (28.9 years, 9 years, 3 years). Main line, hand font 56 px: "The minimum stops a late fee, not the interest." On "sooner" the key line, 40 px: "Pay the closing balance to stay interest-free. Pay more than the minimum to get out sooner." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Part of a credit card statement is shown. Show how the minimum payment of fifty-two dollars eighty was found. How much interest is paid if only the minimum is paid? And how much is saved by paying ninety-nine dollars forty-five each month instead? Pause here to answer.

Visual: `QuestionCard`, 38 px, worded as printed: "Part of a credit card statement is shown. (a) Show how the minimum payment of $52.80 was found. (b) How much interest is paid if only the minimum is paid each month? (c) How much is saved by paying $99.45 each month instead?" Statement extract, 34 px: "Closing balance $2,640.00"; "Annual percentage rate (purchases) 20.99%"; "Minimum payment due (2% of closing balance or $25, whichever is greater) $52.80"; warning box: "If you make only the minimum payment each month, you will pay off the closing balance in 31 years and 9 months, paying a total of $12,879.52. If you pay $99.45 each month, you will pay it off in 3 years, paying a total of $3,580.20." The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Two per cent of two thousand six hundred and forty is fifty-two eighty, which is more than twenty-five, so that's the **minimum**. Paying only the minimum, the interest is the total minus the balance, ten thousand two hundred and thirty-nine fifty-**two**. Paying ninety-nine forty-five saves nine thousand two hundred and ninety-nine thirty-**two**. Calling the total the interest is the **slip**.

Visual: the card shrinks to the top (30 px); the extract stays at 34 px. Rows, 44 px: "2% × $2,640 = $52.80 > $25"; on "minimum" framed green. On "two" (first bold) "12,879.52 − 2,640 = $10,239.52" (framed green). On "two" (second bold) "12,879.52 − 3,580.20 = $9,299.32" (framed green). On "slip" a red slip "interest = $12,879.52" writes and is crossed (caption "that's the total: take away $2,640"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A card has one thousand eight hundred dollars owing, at twenty-one per cent a year, so one point seven five per cent a month. The cardholder pays twenty-five dollars a month. Find the first month's interest, and the balance after that payment. What's happening to the debt? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A credit card has $1,800 owing at 21% p.a. (1.75% per month). The cardholder pays $25 each month and makes no new purchases. (a) Find the interest for the first month. (b) Find the balance after the first payment. (c) Explain what is happening to the debt." Picture slot: an empty balance bar labelled "$1,800". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> One point seven five per cent of eighteen hundred is thirty-one dollars **fifty**. Add it and take off twenty-five, and the balance is one thousand eight hundred and six dollars **fifty**. The payment is smaller than the interest, so the debt grows every month. Saying the balance falls by twenty-five is the **slip**.

Visual: the card shrinks to the top. On "fifty" (first bold) row, 44 px: "1,800 × 0.0175 = $31.50" (amber). On "fifty" (second bold) "1,800 + 31.50 − 25 = $1,806.50" (framed green), the bar growing. Row "$25 < $31.50: the debt grows" (framed green). On "slip" a red slip "the balance falls by $25" writes and is crossed (caption "the interest is more than $25"). Hold about 1 s.

### 13. handoff
> So a card is fine for spending you clear by the due date, and expensive for a debt that lasts years. Here's a car repair, six thousand dollars, needed now. It can't be paid off in one month. Should it go on a credit card, or a personal loan? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: at the left the warning box small (500 × 220 px) with "28 years and 11 months" ringed amber. On "car repair" the plate `ms12-car-hoist-v1.png` (about 900 px wide) at the right with a coded card, 40 px: "car repair: $6,000". On "personal loan" chips "a card for a debt that lasts years?" and "card or personal loan?". On "next" chips "Next: matching credit to the goal" and "?". Hold about 2 s. No comparison is worked. This is i18's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Closing = opening − payments + purchases + interest + fees.
- Minimum: e.g. 2% of closing balance or $25, whichever is greater.
- Minimum avoids a late fee; only the full balance avoids interest.
- Minimum only: mostly interest, so it can take decades.
- Payment less than the interest: the balance grows.

Memory aid (framed card, right side, as in scene 8): *The minimum stops a late fee, not the interest.* Key: *Pay the closing balance to stay interest-free. Pay more than the minimum to get out sooner.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and i18's opening frame.

## Teaching checks

- **Does it explain causes?** Why the closing balance is what it is: the four lines that build it (2). Why the minimum is $60: 2% beats the $25 floor (3). Why the minimum barely helps: $50 of $60 is interest (4). Why it takes decades: the minimum shrinks with the balance (5). Why $150 is far more than 2.5 times faster: the split changes (6). Why the balance can grow: payment below the interest (7).
- **Misconceptions addressed:** the minimum avoids interest (3, said and tagged); "2.5 times the payment, 2.5 times faster" (6 crossed); total read as interest (A1 crossed); a payment below the interest still makes progress (7, A2 crossed); a fixed minimum (5 shows it shrinking).
- **Visual standard, item by item:** 1 the card and television from the first frame, then the statement as the live object; 2 a new stage every 30 to 60 s; 3 the statement fill with a running sum, the split bar, three curves with a falling minimum readout, the growing bar; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 6; 8 framed card and five bullets; 9 the 29-year tail against the 3-year curve.
- **One idea at a time:** the lines (2), the minimum (3), the first payment's split (4), the warning (5), a larger fixed payment (6), a payment below the interest (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A1's statement extract in full); 10 s each; feedback about 29 s and 23 s.
- **Avoided double teaching:** i16's interest-free condition and i17a's daily interest are recalled in a chip; i13's period step is used, not retaught.
- **Standard 1 path:** identical point; every step is reading, a percentage or a subtraction.
- **Syllabus coverage:** `cife5c18db` and `ci42184aca`: interpreting a statement (1 to 3, A1; key notes 1, 2); the implications of only making the minimum payment (4 to 7, A1, A2; key notes 3 to 5).
- **Out of scope by design:** daily interest calculation (i17a); choosing a card or a loan (i18); effective annual rate and balance transfers.

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 3 marks suggested, not an official marking scheme).** "Part of a credit card statement is shown. [Closing balance $2,640.00; Annual percentage rate (purchases) 20.99%; Minimum payment due (2% of closing balance or $25, whichever is greater) $52.80; warning: If you make only the minimum payment each month, you will pay off the closing balance in 31 years and 9 months, paying a total of $12,879.52. If you pay $99.45 each month, you will pay it off in 3 years, paying a total of $3,580.20.] (a) Show how the minimum payment of $52.80 was found. (b) How much interest is paid if only the minimum is paid each month? (c) How much is saved by paying $99.45 each month instead?"
Model answer: (a) 2% × $2,640 = $52.80, which is greater than $25. (b) $12,879.52 − $2,640 = $10,239.52. (c) $12,879.52 − $3,580.20 = $9,299.32. Classic mistake (crossed): "interest = $12,879.52".

**Attempt 2 (scene 11; original, HSC style, 3 marks suggested).** "A credit card has $1,800 owing at 21% p.a. (1.75% per month). The cardholder pays $25 each month and makes no new purchases. (a) Find the interest for the first month. (b) Find the balance after the first payment. (c) Explain what is happening to the debt."
Model answer: (a) $1,800 × 0.0175 = $31.50. (b) $1,800 + $31.50 − $25 = $1,806.50. (c) The payment is less than the month's interest, so the balance grows (by $6.50 this month) and the debt is never repaid at this rate. Classic mistake (crossed): "the balance falls by $25".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Statement (example) | opening 2,912.40; payments −500.00; purchases +540.00; interest 47.60; fees 0.00; closing 3,000.00; 20.00% p.a.; minimum 60.00 (2% or $25); due 25 days after | 1 to 3 |
| First payment split | 3,000 × 0.20 ÷ 12 = 50.00; 10.00 off; 2,990.00 | 4 |
| Warning (minimum only) | 347 payments: 28 years 11 months; total 12,409.15; interest 9,409.15; over 3 × | 5, 13 |
| Warning (3 years) | 111.49 a month; total 4,013.64 | 5 |
| Site card 06 (MS-22 corrected) | rows 50.00/10.00, 49.83/10.17, 49.66/10.34; $60: 109 payments, 6,504.24, 3,504.24; $150: 25 payments, 3,679.80, 679.80; saving 2,824.44; about 7 years; slip 109 ÷ 2.5 ≈ 44 | 6 |
| Trap 03 | 2,000 × 0.22 ÷ 12 = 36.67; − 25 = +11.67 a month | 7 |
| A1 | 2% × 2,640 = 52.80; 31 years 9 months; 12,879.52; 10,239.52; 99.45; 3,580.20; 9,299.32 | 9, 10 |
| A2 | 1,800 × 0.0175 = 31.50; 1,806.50 | 11, 12 |
| Handoff | $6,000 car repair (no comparison) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`; interest rounded to the cent each month; the minimum is max($25, 2% of the balance after that month's interest), as in the pack's `practice.py`). Codex to re-check.

- 2,912.40 − 500 + 540 + 47.60 = 3,000.00; max(25, 0.02 × 3,000) = 60.
- 3,000 at 0.2/12, minimum 2% or $25: 347 payments, total 12,409.15, interest 9,409.15. 3-year repayment 111.49; 36 × 111.49 = 4,013.64.
- 3,000 at 0.2/12: rows 50.00 / 2,990.00; 49.83 / 2,979.83; 49.66 / 2,969.49. M = 60: 109 payments, last 24.24, total 6,504.24, interest 3,504.24. M = 150: 25 payments, last 79.80, total 3,679.80, interest 679.80. Difference 2,824.44.
- 2,000 × 0.22 ÷ 12 = 36.67; 36.67 − 25 = 11.67.
- A1: 2,640 at 0.2099/12, minimum 2% or $25: 381 payments (31 years 9 months), total 12,879.52, interest 10,239.52; 3-year repayment 99.45, total 3,580.20; 12,879.52 − 3,580.20 = 9,299.32.
- A2: 1,800 × 0.0175 = 31.50; 1,806.50.

## Memory aid check

- **"The minimum stops a late fee, not the interest."** with key line **"Pay the closing balance to stay interest-free. Pay more than the minimum to get out sooner."** Original. Meaning, as said in scene 8: paying at least the minimum by the due date avoids the late payment fee, but interest is still charged on everything not paid; only the whole closing balance keeps the interest-free days, and any larger regular payment reduces the time and the total interest. Assumptions checked: the card has an interest-free period on purchases (i16); "late fee" refers to the late payment fee, which the minimum avoids on standard terms; "more than the minimum" means a fixed larger amount, since the minimum itself shrinks. It helps a new case: on a $1,200 closing balance with a $25 minimum, paying $25 avoids the fee but leaves interest on about $1,175. Introduced after scenes 2 to 7.
- **Considered, not used:** "Minimum pays the bank, not the debt" (memorable, but overstates it: part of the minimum does reduce the debt).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,347 characters** (Revision 2; Revision 1: 5,313), 14 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 402 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the statement fill (2), the split bar (4), the warning box and curves (5) and the growing bar (7) about 36 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 503 s (8 min 23 s)**, 67 s under the 570 s cap. Feedback speech: about 29 s and 23 s.

Reserve trims if the voiced take runs long: scene 1's "Sixty dollars sounds easy."; scene 7 as a whole (about 20 s; A2 still teaches the idea).

## Scene list and build ids

Lesson key `m-s12i17b` (route math-s12-i17, second half). Explainer folder `src/explainer/lessons/math-s12-i17b`; build inputs in `docs/production/claude-pm/lessons/math-s12-i17b/` (at voicing).

In order (14 scene headings): hook-statement, lines-make-closing, minimum-and-due-date, where-sixty-goes, warning-box, worked-sixty-or-150, balance-grows, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | i17a's frame; the statement arrives |
| 25 to 70 s | 2 | The lines that build the closing balance |
| 70 to 105 s | 3 | The minimum payment and due date |
| 105 to 135 s | 4 | The first payment's split |
| 135 to 195 s | 5 | The warning box and three curves |
| 195 to 270 s | 6 | g01 board: $60 against $150 |
| 270 to 295 s | 7 | The growing balance |
| 295 to 315 s | 8 | Framed memory card |
| 315 to 410 s | 9 to 12 | Question cards and countdowns, then feedback |
| 410 to 430 s | 13 | The car on a hoist for i18 |
| 430 to 475 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i17a's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 clear change to the board; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i17b-learning-review.md`, `science_check` = `checks/m-s12-i17b-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-loan-statement-v1.png` (a blank paper form; Advanced f09's anchor, and a painted form would fight the coded fields, so the statement is fully coded); `ma12-super-statement-v1.png` (f13's anchor; not reused).

Need: none new for this video. Reused: `ms12-television-v1.png` and `ms12-credit-card-v1.png` (opening badge). The final frame uses `ms12-car-hoist-v1.png`, briefed in `math-s12-i18.md` (paint before the i17b build, ruling 17).

Coded: the statement and warning box, the running sum, the split bars, the graph and readout, the growing bar, the g01 board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `CostSplitBars` (i12), `StudioPlot`, `LoanBalanceBar`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; a minimum-payment run (a `loanSchedule` variant with payment = max(floor, % of balance)).

Additions (kit-needs row i17):
1. **CreditCardStatement** (new, course-neutral): a coded, unbranded statement (statement period, opening balance, payments, purchases, interest, fees, closing balance, annual percentage rate, minimum payment with its rule, due date, and the minimum repayment warning box with two lines) whose fields fill and highlight one at a time, with arrows into the closing balance. Check: the four lines sum to 3,000.00; the warning lines show 28 years 11 months, $12,409.15, $111.49 and $4,013.64.
2. **Minimum-payment run** (in `money.ts` or the lesson folder): payment = max($25, 2% of the balance after interest), stopping at zero. Check: 347 payments for $3,000 at 20%; 381 for $2,640 at 20.99%.
3. **Shrinking-minimum readout** on `StudioPlot`: a chip that shows the current month's minimum as the reader moves.

## Codex asset brief

No new plate for i17b. Before the i17b build, `ms12-car-hoist-v1.png` (brief in `math-s12-i18.md`) must exist, because the final frame shows it. `ms12-television-v1.png` (brief in `math-s12-i17a.md`) and `ms12-credit-card-v1.png` (brief in `math-s12-i16.md`) appear as the opening badge.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS (the stated minimum rule; interest rounded to the cent each month), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm against Moneysmart (credit card calculator and statement guidance) and the National Consumer Credit Protection Regulations 2010 (the minimum repayment warning; ruling 41) that a statement's warning shows the minimum-only time and total and a monthly amount that repays the balance in 3 years; report the exact wording if it differs from the design's simplified lines.
4. Confirm MS-22's corrected figures (25 payments; $3,679.80) are used, and MS-19 and MS-21's figures do not appear.
5. Confirm both attempts carry every demand and neither card shows an answer.
6. Confirm the statement shows no real bank's name, logo or layout.
7. Confirm scene 1 opens on i17a's final frame and scene 13 shows no comparison.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Credit Card Statements and the Minimum Payment | Year 12 Maths Standard

(Title length: 71 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson10.sa.html

A credit card statement shows a closing balance of $3,000 and a minimum payment of just $60. Read every line: the opening balance, payments, purchases, interest, fees and how they build the closing balance, the minimum payment and the due date. See why $50 of the first $60 goes on interest, why the warning box says paying only the minimum would take almost 29 years, and how a bigger fixed payment cuts the time and the interest. Also see what happens when a payment is smaller than the month's interest. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. The statement is an example; interest rates and minimum payment rules vary between cards and change over time.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Interpret a credit card statement, examining the implications of only making the minimum payment"
Syllabus content, Standard 1:
"Interpret a credit card statement, examining the implications of only making the minimum payment"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Credit Card Interest by the Day: Daily Compound Interest. Next: Credit Card or Personal Loan? Short, Medium and Long-Term Goals.

#Year12Maths #MathsStandard #CreditCards #HSCScience

## Open decisions

- **1. The warning's second line: 3 years (root, Codex to confirm).** Revision 2: kept pending Codex's check (root decision 2); the source is now the National Consumer Credit Protection Regulations 2010, and the box layout is marked illustrative. If Codex confirms the table layout real statements use, the box is redrawn as two rows ("Only the minimum: 28 years 11 months, $12,409.15"; "$111.49: 3 years, $4,013.64"), with no change to the numbers or narration (learning review optional finding 2). The pack's question used a 2-year line ($135.65, $3,255.60); this design uses 3 years ($111.49 and $4,013.64 in teaching; $99.45 and $3,580.20 in A1), because Australian statements show the amount that repays the balance in 3 years. Codex confirms against the cited sources; if the rule differs, only the second line's figures change.
- **2. Monthly interest for the minimum runs.** The runs use 20% ÷ 12 a month, as the site and pack do; scene 4 says cards add interest daily and the pattern is the same. Confirm, or ask for daily-compounded runs (the figures would shift slightly).
- **3. Scene 7 (balance grows).** It carries the site's Trap 03 and sets up A2. It is the first cut if the voiced take runs long.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i17a for a Standard 1 student; check that every statement field has a plain meaning before it is used, that the running sum makes the closing balance a cause and not a number, that "stops a late fee, not the interest" is clear, that the shrinking minimum explains the 29-year tail, that the $60/$150 slip is understood through the split bars, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder must build `CreditCardStatement` before this video.
