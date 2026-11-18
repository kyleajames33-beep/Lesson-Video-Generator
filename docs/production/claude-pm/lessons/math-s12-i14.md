# Maths S12 I14: How do extra repayments, lump sums and paying more often shorten a loan? Every extra dollar off the balance, a lump sum early or late, and fortnightly halves (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,750 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 535 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i14-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Optional, scene 7 and the framed card ("often"): **applied**. Narration: "or pay half every fortnight". Card: "Extra, early, or fortnightly halves: a shorter loan and less interest." The same wording is in the key-notes card, the Decisions and the memory aid check, and the handoff line says "early, or half every fortnight". Key note 4 was already exact.
2. Optional, scene 3 (where the extra goes): **applied**, visual only. On "extra cell" the Repayment cells read 365.76 and the formula bar shows "=315.76+extra" for one beat, with an arrow from the input cell.
3. Optional, scene 4 ("One plain check first."): **applied**. "One plain check."

Narration 5,750 characters by script (Revision 1: 5,735), about 535 s with holds, 35 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 27, Investment and loans (Loans). Shared by Standard 1 and Standard 2: Standard 2's point adds "using a graph or by calculation"; Standard 1 names no method, so the spreadsheet's results and the graph serve both. No logarithms (root ruling 33; site correction MS-24): every new term comes from a spreadsheet's row count or a graph. Pre-design pack: `../pre-design/maths-standard/math-s12-i14.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson08.sa.html` (SHA256 `13b6a566e1fce40d02e973d1b5dcb86cb64a519b15c9c123b15afae5766541e0`; card 06, `we-2` with the site's numbers, the true or false item on early extra payments and SA 3 (a) on fortnightly payments). Route entry: `math-s12-i14` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; the reused camper trailer plate; every graph, bar, timeline and spreadsheet coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (travel: a camper trailer loan), Australian spelling, no em dashes, money spoken naturally, conversational narration, responsible-money framing stated plainly once).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Investment and loans, Loans):
- `ci668ed87c`: "Examine the effect of changing the repayment frequency, additional repayments or a lump-sum payment on the term and cost of a loan using a graph or by calculation"

Standard 1 (Depreciation and loans, Loans):
- `ci69b1ad8f`: "Examine the effect of changing the repayment frequency, making additional repayments or a making a lump-sum payment on the term and cost of repaying a loan" (quoted exactly as published, including "or a making a")

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i13's final frame exactly (the camper trailer plate with the card "borrowed: $15,000", "0.8% a month", "$315.76 a month for 5 years"; a small balance graph with one blue curve landing at month 60 and a dashed violet "+$50?" arrow; chips "what if we pay $50 more a month?", "Next: paying a loan off sooner", "?"). Recalls i13 (interest on the balance owing; a spreadsheet model filled down) and i12 (total cost = total paid minus amount borrowed) in a phrase or grey chip each. Teaches: why every dollar above the period's interest reduces the balance and so every later interest charge; reading the new term and the interest saved from a spreadsheet and a balance graph for (a) a regular extra repayment, (b) a lump sum, (c) fortnightly half-repayments (26 halves = 13 monthly repayments a year); why an early lump sum saves more than the same sum later; the saving as the difference in total interest, not the difference in months times the repayment. Stops at the effect of each change on the term and the cost. Not taught: finding a repayment from a table, the amount owing in general or the time to repay in general (i15); any logarithm or repayment formula.

## Decisions

- **Anchor: a second-hand camper trailer on the site's `we-2` loan (painted plate, live).** $15,000 at 9.6% p.a. (0.8% a month) over 5 years, $315.76 a month (site); the spreadsheet with interest rounded to the cent leaves a 61st row of $0.07, which the lender adds to the 60th repayment, so the plan is 60 months with total interest $3,945.67 (site "$3,946"). With $50 extra: 50 months, interest $3,252.03, saving $693.64 and 10 months (site "≈ $694", "≈ 50 months"). Travel; the pack's anchor 1. The plate `ma12-camper-trailer-v1.png` exists (Advanced f08 used it for depreciation; reused under rulings 7 and 25 for a different idea).
- **Worked example (g01, scene 3): the extra $50 a month.** Task strip, givens card, the graph and the spreadsheet's "months to clear" counter as the working, framed answer "50 months; $693.64 less interest", crossed slip "saved 10 × $315.76 = $3,157.60" (caption "you paid more each month: compare the interest").
- **Lump sum (original; the site has none).** A $2,000 tax refund paid onto the loan after month 12: 52 months, interest $3,106.36, saving $839.31 and 8 months. The same $2,000 after month 48: 54 months, interest $3,795.79, saving $149.88 and 6 months. This carries the site's true or false item ("saves more if you start in Year 1 than if you start in Year 20") on this video's loan.
- **Fortnightly (original numbers, the site's SA 3 (a) reason).** Half the repayment, $157.88, every fortnight at 9.6% ÷ 26 a fortnight: 118 fortnights (about 4 years 7 months), interest $3,506.88, saving $438.79. In one year: 12 × $315.76 = $3,789.12 against 26 × $157.88 = $4,104.88, exactly one extra monthly repayment. The narration names the 13th repayment as the main reason and the more frequent timing as a small extra.
- **Site corrections.** MS-24: `we-2` step 4 and SA 2 (b) solve for the new term with logarithms; this design reads every term from the spreadsheet's row count or the graph. The site's $400,000 mortgage (card 06) is not used: Advanced f10's anchor is a $400,000 home loan, and the 2026 realism note in the i15 pack applies.
- **Rates (ruling 5, ruling 32).** 9.6% p.a. is the site's rate and sits within current personal loan rates: RBA statistical table F8, Personal Lending Rates (September 2026, read 18 November 2026): new fixed-rate personal term loans averaged 10.39% p.a. (https://www.rba.gov.au/statistics/tables/csv/f8-data.csv). Said once in scene 1: "an example rate; rates change".
- **Responsible framing (pack decision).** One plain sentence in scene 4: extra payments only help if bills are still covered, and some fixed-rate loans limit extra repayments or charge a fee, so check the loan's terms.
- **Join.** Scene 1 opens on i13's final frame exactly. Scene 12 is a two-route frame (root ruling 30): Standard 2 to i15, Standard 1 to i16.
- **Standard 1 completeness.** No step needs a Standard 2 method: every term and total is read from a spreadsheet's results or a graph, and every saving is a subtraction. Both attempts serve both courses.
- **Simulations (standard item 3).**
  1. **Two balance bars** (scene 2; `LoanBalanceBar` twice, side by side): month 1 slowly (both caps $120.00; bites $315.76 and $365.76), then month 2's caps "$118.43" and "$118.03" with a "40c less" tag, then both run to month 12 with a growing gap readout ("left owes $12,544.70", "right owes $11,917.58").
  2. **Balance graph with rider** (scenes 3 to 5; `StudioPlot`, months 0 to 64, $0 to $16,000): curves drawn from the spreadsheet's closing balances; a vertical rider reads the landing month; the area between curves shades pale teal ("interest you don't pay"); a lump-sum step at month 12, then at month 48 for the comparison.
  3. **Payment pairing** (scene 6; new `PaymentPairing` mode of `PeriodTimeline`): a one-year strip with 12 monthly ticks above and 26 fortnightly half-ticks below; the halves pair into whole blocks, and the 13th whole block glows teal and drops onto the balance.
- **Colour roles (fixed for i12 to i18).** Balance owed **blue** (the usual plan) and **teal-blue** for the changed plan's curve; interest **amber**; repayment **violet**; the part that pays off the debt and the extra payment **teal**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Graph labels 36 px; readouts 52 px; working rows 44 px; spreadsheet extract cells 40 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "same interest in month 1", "$50 lower", "40c less", "and again, every month", "off the balance for good", "10 months sooner", "interest you don't pay", "compare the interest", "same repayment, shorter loan", "check your loan's terms", "early beats late", "26 halves = 13", "the hidden 13th", "less to charge interest on". At most two live at once.
- **Stage changes (standard item 2).** i13's frame and the camper (1); the two balance bars (2); the g01 board with the graph and the spreadsheet counter (3); the lump-sum step (4); early against late (5); the payment pairing strip (6); framed card (7); question cards (8 to 11); the two-route frame (12); key notes (13).
- **Memory aid.** Framed card: "Extra, early, or fortnightly halves: a shorter loan and less interest." Key line: "Every extra dollar stops costing interest."
- **Visual surprise.** In scene 6 the 26 fortnightly half-ticks pair up and a 13th whole repayment appears where only 12 were expected, then drops onto the balance bar.
- **Plain meanings at first use.** Extra repayment ("paying more than the required repayment each time"); lump sum ("a single extra payment, on top of the usual ones"); term ("how long the loan lasts"); repayment frequency ("how often you pay: monthly, fortnightly or weekly"); interest saved ("the interest you would have paid, minus the interest you do pay").
- **Attempts (original, HSC style).** A1 (the pack's question 1): a $9,000 loan at 1% a month, three plans from a spreadsheet; find the saving and months sooner for $350, and the cheapest plan with a reason; crossed "the $350 plan, it has the biggest repayment" (caption "compare total interest"). A2 (original numbers on the pack's question 2): monthly repayments of $480 switched to $240 a fortnight: the totals in a year and why it repays sooner; crossed "interest is charged twice as often" (caption "it's the 13th repayment").
- **Mistake scene:** none separate. The term saving read as the cost saving (3 crossed); "a lump sum lowers the repayment" (4, said and tagged); "the same saving whenever you pay" (5); the frequency myth (6, said; A2 crossed); the biggest repayment chosen as cheapest (A1 crossed).
- **Cause chain taught, in order:** (1) interest is charged on the balance, so a dollar off the balance stops costing interest from then on (2); (2) each month's saving makes the next balance lower again, so the gap grows (2, 3); (3) the repayment is fixed, so a lower balance means the loan ends sooner (3, 4); (4) a sum paid early is off the balance for more months than the same sum paid late, so it saves more (5); (5) 26 half-payments are 13 whole ones, so fortnightly halves pay one extra repayment a year (6).
- **Entry knowledge (route):** i13 (period-by-period interest on the balance; the spreadsheet model); i12 (total cost and comparing on total, not repayment). Recalled in a phrase or grey chip.
- **Handoff (two routes, root ruling 30).** Scene 12's frame is split by a thin grey rule. Left, "Standard 2": the small SUV plate `ms12-small-suv-v1.png` (about 700 px wide) with a coded card, 36 px: "$25,000 car loan", "7.2% a year for 5 years"; four chips, 32 px: "repayment?", "total paid?", "still owing after 2 years?", "how long at $600 a month?"; label "Standard 2 next: the four loan questions". Right, "Standard 1": the plain card plate `ms12-credit-card-v1.png` (about 420 px wide) beside a small empty coded table (headers "Balance at start", "Interest", "Repayment", "New purchases", "Balance at end", the "New purchases" header ringed amber); chip "a loan you can borrow again?"; label "Standard 1 next: credit cards". Chips "Next" and "?". i15 opens on this frame and fades the right panel; i15's own final frame repeats the right panel full width, so i16 opens on the same picture for both courses.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Base: r = 0.008, M = 315.76 (exact 315.7615). Cent-rounded run: 61 rows, the 61st $0.07; folded into the 60th payment, the plan is 60 months; total paid 18,945.67, interest 3,945.67. 60 × 315.76 − 15,000 = 3,945.60 (the site's "$3,946"; 7 cents from the folded adjustment).
  (b) Month 1: interest 120.00 both; end 14,804.24 (usual) and 14,754.24 (+$50). Month 2 interest 118.43 and 118.03. After 12 months: 12,544.70 and 11,917.58.
  (c) +$50 (M = 365.76): 50 payments, last 329.79, interest 3,252.03; saving 693.64; 10 months.
  (d) Lump $2,000 after payment 12: 52 payments, last 2.60, interest 3,106.36, saving 839.31, 8 months. After payment 48: 54 payments, last 60.51, interest 3,795.79, saving 149.88, 6 months.
  (e) Fortnightly 157.88 at 0.096/26: 118 payments, last 34.92, interest 3,506.88, saving 438.79; 118 ÷ 26 = 4.54 years (about 4 years 7 months). Year totals 3,789.12 and 4,104.88; difference 315.76.
  (f) Pronunciations: "three hundred and fifteen dollars seventy-six"; "six hundred and ninety-three dollars sixty-four"; "a hundred and fifty-seven eighty-eight".
  (g) Window: months 0 to 64, $0 to $16,000, grid every 12 months and $2,000.

Main question: *A $15,000 camper trailer loan is repaid at $315.76 a month for 5 years. How do extra repayments, a lump sum or paying more often shorten it, and what do they save?*
Entry knowledge (i13, i12): interest on the balance owing each period; spreadsheet model; total cost.
Stops after: the effect of an extra repayment, a lump sum (early and late) and fortnightly halves on the term and the interest, read from a spreadsheet or graph. No repayment table, no formula, no logarithms.
Handoff: Standard 2: math-s12-i15, "a $25,000 car loan and four questions"; Standard 1: math-s12-i16, "a loan you can borrow again".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): usual balance blue; changed balance teal-blue; interest amber; repayment violet; extra and debt paid off teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: pay fifty dollars more?
> Here's the camper trailer. The loan is fifteen thousand dollars at zero point eight per cent a month, an example rate, since rates change. The repayment is three hundred and fifteen dollars seventy-six a month for five years, and over those five years the interest comes to about three thousand nine hundred and forty-six dollars. Now suppose you could find an extra fifty dollars a **month**. Would that just save fifty dollars here and there, or a lot more? So how do extra repayments, lump sums and paying more often shorten a **loan**?

Visual: opens on i13's final frame exactly (the camper plate with its card, the small graph, chips). On the first sentence the "Next" chip fades and the plate moves to the left third at about 900 px. On "fifteen thousand dollars" the card's first line pulses; on "zero point eight per cent" the second, with a grey chip "example rate (RBA F8, Sept 2026: personal loans average 10.39% p.a.)"; on "three hundred and fifteen dollars" the third. On "three thousand nine hundred and forty-six" an amber chip "interest ≈ $3,946" and a grey chip "i12: interest = total paid − borrowed". On "month" the dashed "+$50?" arrow turns solid teal. On "loan" heading "Paying a loan off sooner" writes on, and the question chip "What does paying more save?" moves to the top right.

### 2. why an extra fifty helps
> Start with one month, side by side. Both loans begin at fifteen thousand dollars, and both are charged a hundred and twenty dollars of interest in month one. On the left, the usual repayment comes off. On the right, fifty dollars more comes off, so that balance is fifty dollars **lower**. In month two, the interest on the right is forty cents less, because it's charged on fifty dollars less. That sounds tiny, but it happens every month, and each month's saving makes the next balance lower again, so the gap keeps **growing**. Every extra dollar comes straight off the balance, so you never pay interest on it **again**.

Visual: stage change: the plate shrinks to a 300 px badge at the top left. Two `LoanBalanceBar`s side by side (simulation 1), each 1,100 px tall, labelled "usual: $315.76" (blue) and "with $50 extra: $365.76" (teal-blue), a month counter (44 px) above. Month 1, slowly: both amber caps "$120.00", hand tag "same interest in month 1"; violet bites "$315.76" and "$365.76" come off. On "lower" the end readouts "$14,804.24" and "$14,754.24", a teal bracket "$50 lower", hand tag "$50 lower". Month 2: caps "$118.43" and "$118.03", hand tag "40c less". On "growing" both run to month 12 (about 4 s) with readouts "left owes $12,544.70" and "right owes $11,917.58", the gap bracket widening, hand tag "and again, every month". On "again" a teal chip "extra $1 = off the balance for good".

### 3. worked example: fifty dollars extra
> Let's measure it. With fifty dollars extra each month, find the new time to repay, and the interest saved. A spreadsheet with an extra cell does the work, and its balance column draws this **graph**. The usual loan reaches zero at sixty months. With the extra fifty, it reaches zero at fifty months, ten months **sooner**. The spreadsheet adds up the interest too. The usual loan costs three thousand nine hundred and forty-five dollars sixty-seven. With the extra, it's three thousand two hundred and fifty-two dollars and three cents. Take one from the other, and you save six hundred and ninety-three dollars sixty-**four**. The shaded gap is money you're not paying interest on. Saying you save ten repayments, three thousand one hundred and fifty-seven dollars, is the slip. You paid fifty more every month, so compare the **interest**.

Visual: clear change to the g01 board. Task strip, 44 px: "The camper loan ($15,000 at 0.8% a month, $315.76 a month) is repaid at $365.76 a month instead. Find the new time to repay and the interest saved." Givens card, 40 px: "borrowed $15,000" (blue), "0.8% a month" (amber), "usual $315.76" (violet), "extra $50" (teal). Left 40 per cent: a `SpreadsheetGrid` extract, 36 px: input cell "extra: 50" (teal), columns "Month | Opening | Interest | Repayment | Closing", rows 1 to 3 then a hidden-rows bar, and a "months to clear" counter cell. On "extra cell" the Repayment cells read "365.76" and, for one beat, the formula bar (44 px) shows "=315.76+extra" with a teal arrow from the input cell (Revision 2, learning review optional finding 2). On "graph" the right 60 per cent draws the `StudioPlot` (simulation 2): the usual blue curve from $15,000, then the teal-blue curve below it. The rider runs along both; on "sooner" it stops where the teal-blue curve meets zero, "50" ringed green on the axis and "60" ringed blue; the counter cell reads "50"; hand tag "10 months sooner". Rows, 44 px: "usual interest $3,945.67" (amber), "with extra $3,252.03" (amber); on "four" "saving = 3,945.67 − 3,252.03 = $693.64", framed answer (green) "50 months; $693.64 less interest". On "The shaded gap" the area between the curves shades pale teal, hand tag "interest you don't pay". A grey chip "60 months: the last 7 cents are added to the 60th repayment". On "interest" a red slip "saved 10 × $315.76 = $3,157.60" writes and is crossed (caption "you paid more each month: compare the interest"), hand tag "compare the interest".

### 4. a lump sum
> A lump sum is a single extra payment, on top of the usual ones. Say a tax refund of two thousand dollars arrives after the first year, and it goes straight onto the **loan**. The balance drops by two thousand in one step. The repayment stays the same, so the loan simply finishes sooner, at fifty-two months instead of sixty. The interest falls to three thousand one hundred and six dollars thirty-six, a saving of eight hundred and thirty-nine dollars thirty-**one**. One plain check. Only pay extra if your bills are still covered, and some fixed-rate loans limit extra payments or charge a **fee**.

Visual: stage change: the graph full width; the teal-blue curve fades. A coded chip "tax refund: $2,000" (teal) slides in. On "loan" the rider at month 12 drops the new curve straight down by $2,000 (a vertical teal step from $12,544.70 to $10,544.70), then the curve continues, steeper-looking, to zero at month 52, ringed green; hand tag "same repayment, shorter loan". Rows, 44 px: "52 months", "interest $3,106.36" (amber); on "one" "saving = 3,945.67 − 3,106.36 = $839.31" (framed green). On "fee" a grey chip "extra payments: check your loan's terms", hand tag "check your loan's terms".

### 5. early beats late
> Does it matter when the two thousand dollars goes in? Put the same refund in after four years instead of one. Now the loan finishes at fifty-four months, and the saving is only a hundred and forty-nine dollars eighty-**eight**. Paid early, that two thousand is off the balance for three extra years, so you skip three years of interest on it. Paid late, there's only a little time left to save interest. So early beats **late**.

Visual: camera continue. A second lump-sum curve draws (violet-teal dashed): the usual curve to month 48, a $2,000 step down, zero at month 54. The month-12 step and the month-48 step sit side by side; on "eight" rows "after year 1: saves $839.31" and "after year 4: saves $149.88" (amber), the pale-teal area under the early step much larger than under the late one. On "late" hand tag "early beats late", and a bracket over months 12 to 48 "3 more years off the balance".

### 6. paying fortnightly
> The third change is paying more often. Instead of three hundred and fifteen seventy-six once a month, pay half, a hundred and fifty-seven eighty-eight, every fortnight. That sounds the same, but count them. A year has twenty-six fortnights, and twenty-six halves make thirteen whole **repayments**. Monthly, you only make twelve. So in a year you pay four thousand one hundred and four dollars eighty-eight, instead of three thousand seven hundred and eighty-nine twelve. That's one extra repayment every year, straight off the **balance**. The loan finishes in about four and a half years, and saves four hundred and thirty-eight dollars seventy-**nine**. Paying more often helps a little too, but the hidden thirteenth repayment does most of the work.

Visual: clear change to the payment pairing strip (simulation 3; 1,600 px wide): a one-year bar with 12 violet monthly ticks above ("$315.76" each) and 26 half-height ticks below ("$157.88" each). On "repayments" the halves pair two by two into whole blocks; the 13th whole block glows teal, hand tags "26 halves = 13" and "the hidden 13th". Rows, 44 px: "12 × $315.76 = $3,789.12" (violet) and "26 × $157.88 = $4,104.88" (teal); difference "$315.76: one extra repayment". On "balance" the 13th block drops onto a small blue balance bar. On "nine" the graph returns small at the right with a third curve landing at about 54.5 months ("118 fortnights"), rows "interest $3,506.88", "saving $438.79" (framed green). Grey chip "SA 3 (a): more often helps a little too".

### 7. memory aid
> Here's the summary. Every extra dollar comes straight off the balance, so you never pay interest on it again. Pay extra, pay early, or pay half every fortnight, and the loan ends sooner and costs **less**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the graph small with the usual curve and the three shorter curves. Main line, hand font 56 px: "Extra, early, or fortnightly halves: a shorter loan and less interest." On "less" the key line, 40 px: "Every extra dollar stops costing interest." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A nine thousand dollar personal loan charges one per cent interest per month. A spreadsheet gives the results for three plans. How much interest does paying three hundred and fifty dollars a month save, and how many months sooner is the loan repaid? Which plan costs the least interest? Explain why a lump sum early in the loan saves so much. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A $9,000 personal loan charges 1% interest per month. A spreadsheet gives these results. (a) How much interest does paying $350 a month save, and how many months sooner is the loan repaid? (b) Which plan costs the least interest? Explain why a lump sum early in the loan saves so much." Table, 36 px: "Plan | Months to repay | Total interest"; "$300 a month | 36 | $1,753.89"; "$350 a month | 30 | $1,455.93"; "$300 a month plus a $1,000 lump sum at the end of month 6 | 32 | $1,430.97". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Paying three hundred and fifty saves two hundred and ninety-seven dollars ninety-six, and it's repaid six months **sooner**. The lump-sum plan costs the least, one thousand four hundred and thirty dollars ninety-seven. The thousand dollars comes off after only six months, so every later month is charged on a smaller **balance**. Choosing a plan for its biggest repayment is the **slip**.

Visual: the card shrinks to the top (30 px); the table stays at 36 px. On "sooner" rows, 44 px: "1,753.89 − 1,455.93 = $297.96", "36 − 30 = 6 months" (framed green). On "balance" the lump-sum row rings green, framed "lump sum: $1,430.97", hand tag "less to charge interest on". On "slip" a red slip "the $350 plan: biggest repayment" writes and is crossed (caption "compare total interest"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A loan has monthly repayments of four hundred and eighty dollars. The borrower switches to paying half this amount every fortnight. How much is paid in one year under each plan? Explain why the fortnightly plan repays the loan sooner. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A loan has monthly repayments of $480. The borrower switches to paying half this amount every fortnight. (a) How much is paid in one year under each plan? (b) Explain why the fortnightly plan repays the loan sooner." Picture slot: an empty one-year strip with "12 months" above and "26 fortnights" below, no ticks filled. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Monthly, it's twelve times four eighty, five thousand seven hundred and sixty dollars. Fortnightly, it's twenty-six times two forty, six thousand two hundred and forty **dollars**. Twenty-six halves are thirteen repayments, so one extra repayment a year comes straight off the balance, and later interest is charged on less. Saying it's because interest is charged twice as often is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "12 × $480 = $5,760" (violet); on "dollars" "26 × $240 = $6,240" (teal), framed green, and the strip's halves pair into 13 blocks, the 13th glowing. Row "difference $480: one extra repayment". On "slip" a red slip "interest charged twice as often" writes and is crossed (caption "it's the 13th repayment"). Hold about 1 s.

### 12. handoff
> So paying extra, early, or half every fortnight shortens a loan and cuts the interest. From here, there are two paths. If you're doing Standard 2, next we answer the four big questions for any loan, using a twenty-five thousand dollar car loan. If you're doing Standard 1, next is credit cards, a loan you can keep borrowing on **again**. Pick your **path**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the two-route frame, split by a thin grey rule. On "Standard 2" the left panel builds: the SUV plate `ms12-small-suv-v1.png` (about 700 px wide), card "$25,000 car loan", "7.2% a year for 5 years" (36 px), four chips "repayment?", "total paid?", "still owing after 2 years?", "how long at $600 a month?" (32 px), label "Standard 2 next: the four loan questions". On "again" the right panel builds: the card plate `ms12-credit-card-v1.png` (about 420 px wide) beside an empty table (headers "Balance at start", "Interest", "Repayment", "New purchases", "Balance at end", 30 px), "New purchases" ringed amber; chip "a loan you can borrow again?"; label "Standard 1 next: credit cards". On "path" chips "Next" and "?". Hold about 2 s. No value is worked out. This is i15's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Every extra dollar comes straight off the balance.
- Extra repayment or lump sum: same repayment, shorter term.
- Interest saved = old total interest − new total interest.
- Fortnightly halves: 26 halves = 13 repayments a year.
- An earlier lump sum saves more than a later one.

Memory aid (framed card, right side, as in scene 7): *Extra, early, or fortnightly halves: a shorter loan and less interest.* Key: *Every extra dollar stops costing interest.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i15's opening frame.

## Teaching checks

- **Does it explain causes?** Why an extra $50 saves more than $50: it comes off the balance, so every later interest charge is smaller, and the saving compounds (2). Why the term shortens and the repayment stays: the repayment is fixed, so a smaller balance runs out sooner (3, 4). Why early beats late: the sum is off the balance for more months (5). Why fortnightly halves help: 26 halves are 13 repayments (6).
- **Misconceptions addressed:** an extra $50 saves only $50 (2); the term saving read as the cost saving (3 crossed); a lump sum lowers the repayment (4, said and tagged); the same saving whenever you pay (5); "interest is charged less often" (6, A2 crossed); the biggest repayment is cheapest (A1 crossed).
- **Visual standard, item by item:** 1 the camper from the first frame, as a badge after; 2 a new stage every 35 to 60 s; 3 two live balance bars, a graph with a rider and shaded saving, the payment pairing strip; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 the 13th repayment appearing.
- **One idea at a time:** why (2), extra repayment (3), lump sum (4), timing (5), frequency (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** i13's period model and i12's total cost are recalled in a phrase or chip.
- **Standard 1 path:** every result is read from a spreadsheet or graph; savings are subtractions; the handoff's right panel sends Standard 1 to i16.
- **Syllabus coverage:** `ci668ed87c` and `ci69b1ad8f`: additional repayments (2, 3, A1), a lump sum (4, 5, A1), repayment frequency (6, A2), the term (3 to 6), the cost (3 to 6), using a graph (3 to 5) and by calculation (6, A2). Key notes 1 to 5.
- **Out of scope by design:** the four loan questions in general (i15); logarithms and repayment formulas (MS-24, ruling 33); offset and redraw accounts (not in the points).

## Practice questions and model answers

**Attempt 1 (scene 8; original, HSC style, 3 marks suggested, not an official marking scheme).** "A $9,000 personal loan charges 1% interest per month. A spreadsheet gives these results. [Plan | Months to repay | Total interest: $300 a month | 36 | $1,753.89; $350 a month | 30 | $1,455.93; $300 a month plus a $1,000 lump sum at the end of month 6 | 32 | $1,430.97] (a) How much interest does paying $350 a month save, and how many months sooner is the loan repaid? (b) Which plan costs the least interest? Explain why a lump sum early in the loan saves so much."
Model answer: (a) $1,753.89 − $1,455.93 = $297.96, and 36 − 30 = 6 months sooner. (b) The lump-sum plan ($1,430.97). The $1,000 comes off the balance after only 6 months, so every later month's interest is charged on a balance about $1,000 smaller. Classic mistake (crossed): "the $350 plan, because it has the biggest repayment".

**Attempt 2 (scene 10; original, HSC style, 2 marks suggested).** "A loan has monthly repayments of $480. The borrower switches to paying half this amount every fortnight. (a) How much is paid in one year under each plan? (b) Explain why the fortnightly plan repays the loan sooner."
Model answer: (a) Monthly: 12 × $480 = $5,760. Fortnightly: 26 × $240 = $6,240. (b) 26 half-payments are 13 monthly repayments, so one extra repayment a year goes straight off the balance, and later interest is charged on a smaller balance. Classic mistake (crossed): "because interest is charged twice as often".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Camper loan (site `we-2`) | $15,000; 0.8% a month; $315.76; 60 months; interest $3,945.67 (≈ $3,946) | 1, 3 |
| One month | interest 120.00; ends 14,804.24 and 14,754.24; month 2 interest 118.43 and 118.03; after 12: 12,544.70 and 11,917.58 | 2 |
| Extra $50 | $365.76; 50 months; interest 3,252.03; saving 693.64; 10 months; slip 10 × 315.76 = 3,157.60 | 3 |
| Lump sum after month 12 | $2,000; step 12,544.70 to 10,544.70; 52 months; interest 3,106.36; saving 839.31 | 4 |
| Lump sum after month 48 | 54 months; interest 3,795.79; saving 149.88 | 5 |
| Fortnightly | $157.88; 12 × 315.76 = 3,789.12; 26 × 157.88 = 4,104.88; difference 315.76; 118 fortnights (about 4.5 years); interest 3,506.88; saving 438.79 | 6 |
| A1 | 36, 1,753.89; 30, 1,455.93; 32, 1,430.97; 297.96; 6 months | 8, 9 |
| A2 | 12 × 480 = 5,760; 26 × 240 = 6,240; difference 480 | 10, 11 |
| Handoff | $25,000; 7.2% a year; 5 years; $600 (no result shown) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`; interest rounded to the cent each period, the last payment smaller); the pack's values (`work/brief-standard-i2/recalc-output.txt`, `practice-output.txt`) agree. Codex to re-check.

- 15,000 at 0.008, M = 315.76 (exact 315.7614595): 61 rows, last 0.07, interest 3,945.67; 60 × 315.76 − 15,000 = 3,945.60.
- Month 1 interest 120.00; closing 14,804.24 (M) and 14,754.24 (M + 50); month 2 interest 118.43 and 118.03; balances after 12 payments 12,544.70 and 11,917.58.
- M = 365.76: 50 payments, last 329.79, interest 3,252.03; 3,945.67 − 3,252.03 = 693.64.
- Lump 2,000 after payment 12: 52 payments, interest 3,106.36, saving 839.31. After payment 48: 54 payments, interest 3,795.79, saving 149.88.
- Fortnightly 157.88 at 0.096/26: 118 payments, last 34.92, interest 3,506.88, saving 438.79; 12 × 315.76 = 3,789.12; 26 × 157.88 = 4,104.88.
- A1: 9,000 at 1%: M = 300: 36 payments, interest 1,753.89; M = 350: 30, 1,455.93; M = 300 with 1,000 after payment 6: 32, 1,430.97; 1,753.89 − 1,455.93 = 297.96.
- A2: 12 × 480 = 5,760; 26 × 240 = 6,240.

## Memory aid check

- **"Extra, early, or fortnightly halves: a shorter loan and less interest."** with key line **"Every extra dollar stops costing interest."** Original. Meaning, as said in scene 7: any payment above the required repayment reduces the balance, so no interest is charged on that amount again; paying extra regularly, paying a sum early, or paying half every fortnight all reduce the balance sooner, so the loan ends sooner and the total interest falls. Assumptions checked: the repayment stays fixed when extra is paid (the usual case, and the case in every example here); the loan allows extra payments without a fee (scene 4 names the check); "often" means fortnightly halves of the monthly repayment (26 a year), not half-payments twice a month (24 a year, which would not add a 13th repayment); "early" compares the same sum at different times. It helps a new case: on the $9,000 loan, a $1,000 lump sum at month 6 saves more than the same $1,000 at month 24. Introduced after scenes 2 to 6.
- **Considered, not used:** "Pay more, pay less" (memorable but vague about why).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,750 characters** (Revision 2; Revision 1: 5,735), 13 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 432 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the balance bars (2), the graph and rider (3), the lump-sum steps (4, 5) and the pairing strip (6) about 38 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 535 s (8 min 55 s)**, 35 s under the 570 s cap. Feedback speech: about 28 s and 29 s.

Reserve trims if the voiced take runs long: scene 6's "Paying more often helps a little too, but the hidden thirteenth repayment does most of the work." (the grey chip carries it); scene 3's "The shaded gap is money you're not paying interest on." (the hand tag carries it).

## Scene list and build ids

Lesson key `m-s12i14` (route math-s12-i14). Explainer folder `src/explainer/lessons/math-s12-i14`; build inputs in `docs/production/claude-pm/lessons/math-s12-i14/` (at voicing).

In order (13 scene headings): hook-camper-extra, why-extra-helps, worked-extra-fifty, lump-sum, early-beats-late, paying-fortnightly, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-two-routes, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i13's frame; the camper |
| 40 to 90 s | 2 | Two balance bars, month by month |
| 90 to 165 s | 3 | g01 board: graph, rider and spreadsheet counter |
| 165 to 210 s | 4 | The lump-sum step |
| 210 to 245 s | 5 | Early against late |
| 245 to 300 s | 6 | The payment pairing strip |
| 300 to 320 s | 7 | Framed memory card |
| 320 to 420 s | 8 to 11 | Question cards and countdowns, then feedback |
| 420 to 450 s | 12 | Two-route frame for i15 and i16 |
| 450 to 495 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i13's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 stage change (the graph enlarges); 4 to 5 camera continue; 5 to 6 clear change to the strip; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i14-learning-review.md`, `science_check` = `checks/m-s12-i14-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-camper-trailer-v1.png` (white and charcoal off-road camper, side-on, no writing; fits the anchor at 900 px and as a 300 px badge). The pack's tax refund notice and pay calendar are coded chips, not plates.

Need before the i14 build (ruling 17, painted one video early): `ms12-small-suv-v1.png` (briefed in `math-s12-i15.md`) and `ms12-credit-card-v1.png` (briefed in `math-s12-i16.md`), both on the final frame. No new plate is briefed here.

Coded: the balance bars, the graph, rider and shading, the spreadsheet extract and counter, the pairing strip, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `LoanBalanceBar` (twice), `StudioPlot` with a vertical rider, `PeriodTimeline`, `SpreadsheetGrid`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `loanSchedule` and `loanPayoff` from `money.ts` with a lump-sum option.

Additions (kit-needs row i14):
1. **PaymentPairing** (a mode of `PeriodTimeline`): 26 half-ticks pairing into 13 whole blocks, the 13th glowing and dropping onto a balance bar. Check: 26 × 157.88 − 12 × 315.76 = 315.76.
2. **SpreadsheetGrid rows-to-zero counter:** the first row where the closing balance reaches zero, with the smaller last payment. Check: 61 rows (last $0.07) for $315.76 shown as 60 months with a folded adjustment; 50 rows for $365.76.
3. **StudioPlot lump-sum step and shaded gap:** a vertical step at a chosen month and the area between two curves shaded. Check: the step at month 12 is from 12,544.70 to 10,544.70 and the curve meets zero at month 52.

## Codex asset brief

No new plate for i14. Before the i14 build, `ms12-small-suv-v1.png` (brief in `math-s12-i15.md`) and `ms12-credit-card-v1.png` (brief in `math-s12-i16.md`) must exist, because the final frame shows both. `ma12-camper-trailer-v1.png` is reused as it stands.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS (interest rounded to the cent each period), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, including Standard 1's "or a making a", with the labels correct.
3. Confirm no logarithm, repayment formula or "n =" solved algebraically appears; every term comes from a spreadsheet or graph.
4. Confirm the site's `we-2` numbers are kept ($315.76; about 50 months; about $694) and the 60-month plan's folded 7 cents is stated on screen.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i13's final frame and scene 12's two panels each name the right next video.
7. Confirm the rate source line (RBA F8, September 2026) and the responsible-money sentence.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Extra Repayments, Lump Sums and Paying Fortnightly | Year 12 Maths Standard

(Title length: 75 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson08.sa.html

A $15,000 camper trailer loan is repaid at $315.76 a month for 5 years. What happens if you pay $50 more? See why every extra dollar comes straight off the balance, so you never pay interest on it again. Read the new time to repay and the interest saved from a spreadsheet and a balance graph for an extra $50 a month, a $2,000 lump sum (early and late), and paying half every fortnight, where 26 halves make 13 repayments a year. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Examine the effect of changing the repayment frequency, additional repayments or a lump-sum payment on the term and cost of a loan using a graph or by calculation"
Syllabus content, Standard 1:
"Examine the effect of changing the repayment frequency, making additional repayments or a making a lump-sum payment on the term and cost of repaying a loan"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Reducing Balance Loans: Tables and Spreadsheets. Next (Standard 2): Loan Repayments, Total Paid, Amount Owing and Time to Repay. Next (Standard 1): Credit Cards: Interest Rates, Fees and Interest-Free Periods.

#Year12Maths #MathsStandard #Loans #HSCScience

## Open decisions

- **1. Two-route final frame (root ruling 30).** Scene 12 sends Standard 2 to i15 and Standard 1 to i16 on one split frame, as a08 did. i15 opens on it and its own final frame repeats the right panel full width, so i16 opens on one picture for both courses. Alternatively root may prefer separate endings. Confirm.
- **2. The 60-month plan with a folded 7 cents.** The spreadsheet's 61st row is $0.07; the design calls the plan 60 months and says why in a grey chip, keeping the site's "5 years". Confirm, or show 61 rows.
- **3. Attempt 2's numbers.** The pack's question 2 used this video's own $315.76, which the teaching already works; attempt 2 uses $480 so the task is unseen. Confirm.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i13 for a Standard 1 student; check that the 40-cent month-2 difference reads as the start of a snowball and not as trivial, that the graph rider makes "using a graph" concrete, that the crossed $3,157.60 slip is clear, that the pairing strip shows the 13th repayment at speed, that the two-route frame is self-explanatory, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
