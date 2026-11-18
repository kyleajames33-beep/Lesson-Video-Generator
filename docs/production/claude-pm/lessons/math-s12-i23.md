# Maths S12 I23: How do annuities answer superannuation, savings and loan decisions? Super from a payslip, saving or borrowing for a car, and how much a repayment can borrow (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,422 characters by script (see "Narration length estimate"), 12 scene headings, about 507 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 36, Annuities. **Standard 2 only. Last video of the money strand**; hands to math-s12-r01 (root ruling 28; the outline's r01 asks "How do ratios relate to fractions, and how do we simplify them?"). Tools are the annuity tools of i19 to i22: factor tables, a spreadsheet and a super calculator; no formula, no logarithm (ruling 33). Pre-design pack: `../pre-design/maths-standard/math-s12-i23.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/annuities/lesson01.sa.html` (SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`; card 05's fortnightly super, `we-1`'s $300 a fortnight at 5.4% for 20 years), `lesson03.sa.html` (SHA256 `fa5d9f7646cbd109db123d5bb1ce82d59a356e7178796115989f6bccffc76986`; card 05, "the loan amount IS the present value of all your future repayments") and `investment-and-loans/lesson12.sa.html` (SHA256 `cb32815eed2123cd6997f15a0617b992061ed309b103cc18d7e601b008fd4acb`; card 06, save or borrow for a $25,000 car). Site correction MS-28 (card 08 ignores the 15% contributions tax): card 08 is not used, and the tax is deducted everywhere here. The lottery decisions (MS-32) are excluded (ruling 6). Route entry: `math-s12-i23` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; the SUV, house key and water jug plates reused; the payslip, super account, meter, bars and tables coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchors (work: a first full-time job's payslip; cars: the i15 SUV), Australian spelling, no em dashes, money spoken naturally, conversational narration, responsible-money framing stated plainly without lecturing, no gambling, money sources cited with dates).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Annuities):
- `cieeb45b0f`: "Solve annuity problems involving financial decisions regarding superannuation, savings accounts and loans"

Standard 1: no matching content point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3 (Standard 2)

**Boundary:** starts from i22's final frame exactly (a blank payslip strip with "Super (12%)" ringed; the SUV plate with "save for it, or borrow?"; the house key plate small; chips "super, saving or borrowing: three decisions", "Next: annuities in real decisions", "?"). Recalls i22 (time compounds), i20 and i21 (FV and PV factors), i15 (the SUV loan: $497.39 a month, interest $4,843.40) and Year 11 e-strand (gross pay, pay periods) in a phrase or grey chip each. Teaches: (1) superannuation: the employer pays 12% of ordinary pay on top of pay each payday, the fund deducts 15% contributions tax, and what is left is a regular contribution, so super is an annuity; its future value from a super calculator or spreadsheet, and what starting earlier does; (2) saving against borrowing for the same car: how long saving takes (a spreadsheet's row count) against the interest a loan costs, plus a non-money factor; (3) a loan as a present value: the most a repayment can borrow is repayment × PV factor; the most a lender offers is not the most a budget can repay. Each decision ends in a sentence with numbers. Stops at annuity decisions. Not taught: salary sacrifice and marginal tax (MS-28's card); preservation age rules beyond one sentence; ratios (r01).

## Decisions

- **Three decisions on one board (pack visual).** Super, save or borrow, and how much can I borrow, each opening to one worked solution and closing to a one-line decision.
- **Super (scenes 2 and 3; original numbers on the site's `we-1` model).** A first full-time job paying $2,500 gross a fortnight: super 12% = $300, paid by the employer on top of pay; the fund deducts 15% contributions tax, so $255 reaches the account each payday. Treated as $255 at the end of each fortnight at 5.4% p.a. compounded fortnightly (a teaching assumption for a fund's return after fees), a super calculator or spreadsheet gives $238,358.74 after 20 years (520 fortnights; $132,600 paid in) and $496,588.02 after 30 years. The site's `we-1` ($300 a fortnight, $280,422.05) put the whole $300 in; this design takes the tax off first (the MS-28 principle). One plain sentence: super is locked away until retirement age, so it is not savings for a car.
- **Save or borrow (scene 4, g01 worked example; the site's lesson12 card 06).** The i15 SUV, $25,000: save $600 at the end of each month at 4.8% p.a. (0.4% a month): the spreadsheet first passes $25,000 at deposit 39 ($25,269.37; $23,400 paid in), so 39 months (3 years 3 months); borrow over 5 years at 7.2%: $497.39 a month, interest $4,843.40 (i15). Decision: saving costs no interest and earns about $1,869 but means waiting over three years; borrowing gives the car now and costs $4,843.40. Crossed slip "$497.39 a month is less than $600 a month, so borrowing is cheaper" (caption "compare totals and interest, not monthly amounts"). The site's "n ≈ 38.7" logarithm step (MS-24) is replaced by the row count.
- **How much can I borrow (scene 5; site lesson03 card 05).** The loan is the present value of its repayments: $497.39 × PV factor (0.6%, 60) 50.2621 = $24,999.87, about $25,000, which is i15's loan, read backwards. The responsible line: the most a lender offers is not the most a budget can comfortably repay.
- **Site corrections.** MS-28 (card 08 ignores the 15% tax): card 08 is not used; tax is deducted in scene 2 and A1. MS-27 (`we-2`'s $310.08) is not used. MS-24: no logarithm for the saving time. MS-32: no lottery.
- **Super facts and rates (ruling 5, ruling 32), read 18 November 2026.** Super guarantee 12% for 2026-27; from 1 July 2026 (Payday Super) employers pay super on qualifying earnings so it reaches the fund within 7 business days of each payday: ATO, Payday Super (https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/payday-super-resources/paying-super-for-your-employees). Concessional contributions are taxed at 15% in the fund: ATO, "Tax on super contributions" (https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/how-to-save-more-in-your-super/tax-on-super-contributions), Codex to confirm the page. Savings 4.8% p.a. against RBA F4 (October 2026: bonus savers 5.05% p.a.; https://www.rba.gov.au/statistics/tables/csv/f4-data.csv); car loan 7.2% p.a. against RBA F8 (September 2026: personal term loans 10.39% p.a.; https://www.rba.gov.au/statistics/tables/csv/f8-data.csv). Said once in scene 2: "these rates and rules change".
- **Join.** Scene 1 opens on i22's final frame exactly. Scene 11 repeats i18's right panel full width (the water jug with its cordial layer), so r01 opens on one picture for both courses (Standard 1 from i18, Standard 2 from here).
- **Simulations (standard item 3).**
  1. **Payslip to super** (scene 2; new `PayslipLine` on `PeriodTimeline` with fortnight tabs): the "Super (12%)" line fills "$300.00", slides off the payslip into a fund box (not out of net pay, which stays whole), a 15% amber slice "−$45.00 tax" peels off at the fund, and "$255.00" drops in; it repeats for three paydays, then fast-forwards.
  2. **Super tower** (scene 3; `DepositTower`): 520 fortnightly deposits merge into one column of $238,358.74 against a dashed $132,600 line; a second column for 30 years rises beside it to $496,588.02.
  3. **Save or borrow split** (scene 4; `GoalMeter` and `LoanBalanceBar`): left, a meter filling with $600 deposits and slivers of interest, crossing $25,000 at month 39; right, a car icon available at month 0 with a loan bar shrinking over 60 months and an amber stack "$4,843.40 interest".
- **Colour roles (fixed for i19 to i23).** Balance and future value **blue**; interest **amber** (the contributions tax also amber, with a stamp outline); payments **violet**; present value and loan amount **teal**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Payslip lines 40 px; tower and meter readouts 52 px; working rows 44 px; table cells 36 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "paid on top, not out of your pay", "15% tax at the fund", "$255 each payday", "an annuity", "10 years earlier: about double", "locked until retirement", "count the rows: 39", "car now, $4,843.40", "wait 3 years, $0 interest", "compare totals", "a loan is a present value", "fits the budget?". At most two live at once.
- **Stage changes (standard item 2).** i22's frame and the three decisions (1); payslip to super (2); the super tower (3); the g01 board for save or borrow (4); the borrowing limit (5); framed card (6); question cards (7 to 10); the jug for r01 (11); key notes (12).
- **Memory aid.** Framed card: "Building up (super, savings): future value. Borrowing now (a loan): present value." Key line: "Decide with the numbers, then say what the numbers can't: waiting, access, risk."
- **Visual surprise.** In scene 5, multiplying i15's repayment by a present value factor lands back on almost exactly the $25,000 borrowed: the loan and its repayments are the same annuity seen from today.
- **Plain meanings at first use.** Superannuation ("money your employer puts aside for your retirement"); ordinary pay ("your normal pay, before tax"); contributions tax ("a 15% tax the fund takes from each employer contribution"); borrowing limit ("the most you can borrow for a given repayment").
- **Attempts (original, HSC style; the pack's two questions).** A1: Kai, 19, earns $450 a week in ordinary pay; super 12%; 15% contributions tax; treated as $2,386.80 at the end of each year for 10 years at 6% with FV factor 13.1808: $54.00 a week, $2,386.80 a year after tax, about $31,459.93; crossed "$54 comes out of Kai's pay" (caption "the employer pays it on top"). A2: Lena can afford $650 a month for 5 years at 7.2% p.a.; PV factor 50.2621: the most she can borrow ($32,670.37) and the deposit needed for a $35,000 car ($2,329.63); crossed "$650 × 60 = $39,000" (caption "interest: borrow the present value").
- **Mistake scene:** none separate. Super taken out of pay (2, said; A1 crossed); the 15% tax forgotten (2); comparing monthly amounts in save-or-borrow (4 crossed); total repayments as the borrowing limit (A2 crossed); the lender's maximum as the right loan (5, said).
- **Cause chain taught, in order:** (1) super contributions are regular, equal payments into an account earning interest, so super is an annuity (2); (2) the employer pays 12% on top, and the fund keeps 85% of it after tax (2); (3) the longer super runs, the more interest on interest, so starting early roughly doubles it (3, recalling i22); (4) saving earns interest but takes time, borrowing gives the item now but costs interest, so the decision weighs money against waiting (4); (5) a loan's repayments are an annuity whose present value is the amount borrowed, so repayment × PV factor gives the borrowing limit (5).
- **Entry knowledge (route):** i22, i20, i21, i15; Year 11 e-strand (gross pay, pay periods). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-r01, "How do ratios relate to fractions, and how do we simplify them?").** Scene 11: a row of small grey strand thumbnails (a loan balance curve, a card, a deposit tower) with "Money: done"; the water jug plate `ma11-water-jug-v1.png` (about 700 px) with the coded cordial layer (no markings or numbers), as on i18's right panel; chips "how much of the jug is cordial?", "Next: ratios" and "?". No number is shown. This is i18's right panel full width and r01's opening frame (provisional until r01 is designed; see the decisions file).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) $2,500 × 0.12 = $300.00; × 0.85 = $255.00; tax $45.00.
  (b) 255 × FV factor (5.4%/26, 520) = 238,358.74; 255 × 520 = 132,600; interest 105,758.74. 30 years (780): 496,588.02 (2.08 ×). 40 years (1,040; not used): 939,463.17. The site's $300 for 20 years: 280,422.05 (scaled by 0.85: 238,358.74).
  (c) Saving $600 at 0.004 a month, interest rounded to the cent: after 39 deposits 25,269.37; after 38 below 25,000; 39 × 600 = 23,400; interest earned 1,869.37.
  (d) Loan: 497.39; 60 × 497.39 = 29,843.40; interest 4,843.40 (i15). 497.39 × 50.2621 = 24,999.87.
  (e) A1: 450 × 0.12 = 54.00; 52 × 54 = 2,808.00; × 0.85 = 2,386.80; × 13.1808 = 31,459.93. A2: 650 × 50.2621 = 32,670.37 (to the cent); 35,000 − 32,670.37 = 2,329.63; slip 650 × 60 = 39,000.
  (f) Pronunciations: "two hundred and thirty-eight thousand three hundred and fifty-eight dollars"; "twenty-four thousand nine hundred and ninety-nine dollars eighty-seven".

Main question: *A first job's pay, a car to buy and a budget for repayments. How do annuities answer superannuation, savings and loan decisions?*
Entry knowledge (i22, i20, i21, i15; Year 11 e-strand): time compounds; FV and PV factors; the SUV loan; gross pay.
Stops after: super as an annuity, save against borrow, and a borrowing limit, each with a sentence decision. No salary sacrifice, no ratios.
Handoff: math-s12-r01: "how much of the jug is cordial?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest and tax amber; payments violet; present value teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ANNUITIES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: three real decisions
> Everything from the last few videos comes together here, in three real decisions. First, what does super do with a first job's pay? Second, should you save up for a car, or borrow for it **now**? And third, how much can a monthly repayment actually **borrow**? Each one is an annuity, and each ends in a decision you can back with numbers. So how do annuities answer super, savings and loan **decisions**?

Visual: opens on i22's final frame exactly (the blank payslip, the SUV plate with its chip, the house key small, chips). On the first sentence the "Next" chip fades and three decision cards (each 520 × 300 px) lay out across the board: "Super" over the payslip, "Save or borrow?" over the SUV, "How much can I borrow?" with the house key. On "now" the second card pulses; on "borrow" the third. On "decisions" heading "Annuities in real decisions" writes on, and the question chip "Which annuity, which table?" moves to the top right.

### 2. super starts on your payslip
> Start with super. Superannuation is money your employer puts aside for your retirement. Say a first full-time job pays two thousand five hundred dollars a fortnight, before tax. The employer must pay twelve per cent of that into super, three hundred dollars, and it's paid on top of your pay, not taken out of **it**. Since July twenty twenty-six, it has to reach the fund within days of each payday. The fund then takes a fifteen per cent contributions tax, forty-five dollars, so two hundred and fifty-five dollars lands in the account every **payday**. These rates and rules change, so check them each year. Regular, equal payments into an account that earns interest. That's an **annuity**.

Visual: stage change: the Super card opens. The payslip strip (simulation 1; 1,400 × 260 px) fills, 40 px: "Gross pay $2,500.00", "Tax", "Net pay" (amounts for tax and net pay stay as grey dashes; not taught), "Super (12%) $300.00" (violet); a definition chip "superannuation: money your employer puts aside for your retirement". On "it" the super line slides off to a fund box at the right while the net-pay line stays whole, hand tag "paid on top, not out of your pay", a grey chip "ATO: super guarantee 12% (2026-27)". On "Since July twenty twenty-six" a grey chip "Payday Super: in the fund within 7 business days of payday (ATO)". At the fund, an amber stamp "15% tax: −$45.00" peels off, hand tag "15% tax at the fund"; on "payday" "$255.00" drops in (violet), hand tag "$255 each payday"; three fortnight tabs repeat it. On "annuity" hand tag "an annuity", grey chip "i19".

### 3. what super grows to
> Treat it as two hundred and fifty-five dollars at the end of each fortnight, earning, say, five point four per cent a year after fees. A super calculator, or a spreadsheet like last video's, does the rows. After twenty years, the account holds about two hundred and thirty-eight thousand dollars, from a hundred and thirty-two thousand six hundred paid **in**. After thirty years, it's about four hundred and ninety-seven thousand, roughly double, just for starting ten years **earlier**. One plain fact. Super is locked away until retirement age, so it isn't savings for a **car**.

Visual: stage change: the super tower (simulation 2): a grey chip "assumed return: 5.4% p.a. after fees, compounded fortnightly", a coded calculator window (unbranded) with "$255 a fortnight, 5.4% p.a., 20 years". Deposits stream into one blue column; on "in" it reads "$238,358.74" beside a dashed grey line "$132,600 paid in", the gap amber "interest $105,758.74". On "earlier" a second column (30 years) rises to "$496,588.02", hand tag "10 years earlier: about double", grey chip "i22: time compounds". On "car" a padlock chip on the fund box, hand tag "locked until retirement".

### 4. worked example: save or borrow for the car
> Second decision. Here's the SUV from the loans videos, twenty-five thousand dollars. You could save six hundred dollars a month at four point eight per cent a year, or borrow over five years at seven point two per cent. How long does saving take, and what does borrowing cost? In a spreadsheet, filling down the savings month by month, the balance first passes twenty-five thousand at month thirty-**nine**. That's three years and three months, twenty-three thousand four hundred paid in, and the rest is interest you **earn**. Borrowing, from earlier, costs four ninety-seven thirty-nine a month, and four thousand eight hundred and forty-three dollars forty in **interest**. So saving costs no interest but means waiting over three years. Borrowing gets the car now, for about forty-eight hundred dollars more. Saying borrowing's cheaper because four ninety-seven is less than six hundred a month is the slip. Compare the **totals**.

Visual: clear change to the g01 board. Task strip, 44 px: "A $25,000 car. Option A: save $600 at the end of each month at 4.8% p.a. compounded monthly. Option B: borrow $25,000 over 5 years at 7.2% p.a., $497.39 a month. Compare the time and the cost." Givens card, 40 px: "price $25,000" (blue), "save $600 a month at 0.4% a month" (violet), "loan $497.39 a month for 60 months" (violet); the SUV plate as a 300 px badge. Split screen (simulation 3): left, a `SpreadsheetGrid` extract (month, balance) jumping to rows 38 and 39 and a `GoalMeter` filling; on "nine" row 39 "$25,269.37" rings, the meter crosses $25,000, hand tag "count the rows: 39". On "earn" rows, 44 px: "39 × $600 = $23,400 paid in", "interest earned ≈ $1,869" (amber); framed "A: 39 months (3 years 3 months), no interest paid", hand tag "wait 3 years, $0 interest". Right, the car icon at month 0 and a `LoanBalanceBar` shrinking over 60 months; on "interest" an amber stack "$4,843.40" and framed "B: car now, interest $4,843.40", hand tag "car now, $4,843.40", grey chip "i15". On "totals" a red slip "$497.39 < $600 a month, so borrowing is cheaper" writes and is crossed (caption "compare totals and interest, not monthly amounts"), hand tag "compare totals".

### 5. how much can a repayment borrow?
> Third decision. A loan is really an annuity seen from today. The amount you borrow is the present value of all your repayments. So the most a repayment can borrow is the repayment times the present value **factor**. Check it with the SUV loan. Four ninety-seven thirty-nine times the factor for point six per cent and sixty months, fifty point two six two one, gives twenty-four thousand nine hundred and ninety-nine dollars eighty-**seven**. That's the twenty-five thousand, read backwards. And remember, the most a lender will offer isn't the most your budget can comfortably repay. Start from the repayment that fits your **budget**.

Visual: stage change: the third card opens. A timeline with 60 violet repayments collapsing back to month 0 into a teal block (i20's collapsing timeline); a definition chip "borrowing limit = repayment × PV factor", hand tag "a loan is a present value", grey chip "i20: present value". On "factor" the PV table extract (teal; columns 0.5%, 0.6%, 1%; rows 48, 60) lifts "50.2621" at 0.6%, 60. Rows, 52 px: "497.39 × 50.2621"; on "seven" "= $24,999.87 ≈ $25,000" (teal, framed green), the SUV badge ringing. On "budget" a teal chip "start from the repayment that fits", hand tag "fits the budget?".

### 6. memory aid
> Here's the summary. When money is building up, like super or savings, use future value. When you're borrowing now, the loan is a present value. Decide with the numbers, then say what the numbers can't show, like waiting, or **risk**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three decision cards small, each with its one-line decision. Main line, hand font 52 px: "Building up (super, savings): future value. Borrowing now (a loan): present value." On "risk" the key line, 40 px: "Decide with the numbers, then say what the numbers can't: waiting, access, risk." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Kai is nineteen, and his first job pays four hundred and fifty dollars a week in ordinary pay. His employer pays super of twelve per cent, and the fund deducts fifteen per cent contributions tax. How much super does the employer pay each week? How much reaches Kai's account in a year, after the tax? Then, treating that as paid at the end of each year for ten years at six per cent, use the factor thirteen point one eight oh eight to estimate the balance. Pause here to answer.

Visual: `QuestionCard`, 38 px, worded as printed: "Kai, 19, earns $450 a week in ordinary pay. His employer pays super of 12% of this into his fund, and the fund deducts 15% contributions tax. (a) How much super does the employer pay each week? (b) How much reaches Kai's account in a year (52 weeks) after the contributions tax? (c) Treat this as one payment at the end of each year for 10 years, earning 6% p.a., compounded yearly. Use the FV factor 13.1808 to estimate the balance." A 26 px grey line: "A simplified yearly model; real super arrives each payday." The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Twelve per cent of four fifty is fifty-four dollars a **week**, paid on top. Over fifty-two weeks that's two thousand eight hundred and eight, and after fifteen per cent tax, two thousand three hundred and eighty-six eighty. Times thirteen point one eight oh eight is about thirty-one thousand four hundred and fifty-nine dollars ninety-**three**. Saying the fifty-four comes out of his pay is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "week" "(a) 12% × $450 = $54.00" (framed green); "(b) 52 × 54 = $2,808.00; × 0.85 = $2,386.80" (framed green); on "three" "(c) 2,386.80 × 13.1808 = $31,459.93" (framed green). On "slip" a red slip "$54 comes out of Kai's pay" writes and is crossed (caption "the employer pays it on top"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Lena can afford car loan repayments of six hundred and fifty dollars at the end of each month. A five-year loan charges seven point two per cent a year, compounded monthly. The present value interest factor for point six per cent per period and sixty periods is fifty point two six two one. Find the most she can borrow. The car she wants costs thirty-five thousand dollars. How much must she save as a deposit first? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Lena can afford car loan repayments of $650 at the end of each month. A 5-year loan charges 7.2% p.a., compounded monthly. The present value interest factor for 0.6% per period and 60 periods is 50.2621. (a) Find the most she can borrow. (b) The car she wants costs $35,000. How much must she save as a deposit first?" Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The most she can borrow is a present value, six fifty times fifty point two six two one, thirty-two thousand six hundred and seventy dollars thirty-**seven**. So she needs a deposit of thirty-five thousand minus that, two thousand three hundred and twenty-nine sixty-**three**. Multiplying six fifty by sixty months is the **slip**. That counts the interest she'd pay.

Visual: the card shrinks to the top. Rows, 44 px: on "seven" "(a) 650 × 50.2621 = $32,670.37" (framed green); on "three" "(b) 35,000 − 32,670.37 = $2,329.63" (framed green). On "slip" a red slip "$650 × 60 = $39,000" writes and is crossed (caption "interest: borrow the present value"). Hold about 1 s.

### 11. handoff
> And that's the money topic done, from simple interest, all the way to super. Next, a new topic, ratios. It starts somewhere much simpler, with a jug of cordial. How much of the jug is cordial, and how do we say that as a **ratio**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "money topic done" a row of small grey strand thumbnails (a loan balance curve, a card, a deposit tower) with a grey chip "Money: done". On "jug of cordial" the water jug plate `ma11-water-jug-v1.png` (about 700 px) with its coded cordial layer (a darker layer under clear water, no markings or numbers), as on i18's right panel. On "ratio" the chip "how much of the jug is cordial?". On "next" chips "Next: ratios" and "?". Hold about 2 s. No number is shown. This is r01's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Super: employer pays 12% on top; the fund takes 15% tax.
- Super is an annuity: regular payments plus interest (use FV).
- Save or borrow: compare time and total interest, not repayments.
- Most you can borrow = repayment × PV factor.
- State the decision with numbers and one non-money factor.

Memory aid (framed card, right side, as in scene 6): *Building up (super, savings): future value. Borrowing now (a loan): present value.* Key: *Decide with the numbers, then say what the numbers can't: waiting, access, risk.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and r01's opening frame.

## Teaching checks

- **Does it explain causes?** Why super is an annuity: regular, equal payments plus interest (2). Why $255, not $300: the fund's tax (2). Why starting earlier nearly doubles it: time compounds (3). Why saving earns but waits and borrowing costs but is immediate (4). Why repayment × PV factor gives the limit: the loan is the repayments' present value (5).
- **Misconceptions addressed:** super out of pay (2; A1 crossed); forgetting the 15% tax (2; MS-28); comparing monthly amounts (4 crossed); total repayments as the limit (A2 crossed); the lender's maximum as the right loan (5).
- **Visual standard, item by item:** 1 the payslip and SUV from the first frame; 2 a new stage every 40 to 80 s; 3 the payslip-to-fund slide with the tax slice, the super towers, the save-or-borrow split, the collapsing repayments; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 i15's repayment landing back on $25,000.
- **One idea at a time:** super's contribution (2), super's growth (3), save or borrow (4), the borrowing limit (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 27 s.
- **Avoided double teaching:** i22's time effect, i20's PV and i15's loan are recalled and used.
- **Standard 1 path:** not applicable (Standard 2 only); the final frame matches i18's Standard 1 panel, so both courses meet r01 on the same picture.
- **Syllabus coverage:** `cieeb45b0f`: superannuation (2, 3, A1; key notes 1, 2), savings accounts (4; key note 3), loans (4, 5, A2; key notes 3, 4), financial decisions (4 to 6; key note 5).
- **Out of scope by design:** salary sacrifice and marginal tax (MS-28's card); preservation rules beyond one sentence; lottery decisions (ruling 6); ratios (r01).

## Practice questions and model answers

**Attempt 1 (scene 7; original, HSC style, 3 marks suggested, not an official marking scheme).** "Kai, 19, earns $450 a week in ordinary pay. His employer pays super of 12% of this into his fund, and the fund deducts 15% contributions tax. (a) How much super does the employer pay each week? (b) How much reaches Kai's account in a year (52 weeks) after the contributions tax? (c) Treat this as one payment at the end of each year for 10 years, earning 6% p.a., compounded yearly. Use the FV factor 13.1808 to estimate the balance."
Model answer: (a) 12% × $450 = $54.00. (b) 52 × $54 = $2,808.00; after 15% tax, $2,808 × 0.85 = $2,386.80. (c) $2,386.80 × 13.1808 = $31,459.93. Classic mistake (crossed): "$54 comes out of Kai's pay".

**Attempt 2 (scene 9; original, HSC style, 2 marks suggested).** "Lena can afford car loan repayments of $650 at the end of each month. A 5-year loan charges 7.2% p.a., compounded monthly. The present value interest factor for 0.6% per period and 60 periods is 50.2621. (a) Find the most she can borrow. (b) The car she wants costs $35,000. How much must she save as a deposit first?"
Model answer: (a) $650 × 50.2621 = $32,670.37. (b) $35,000 − $32,670.37 = $2,329.63. Classic mistake (crossed): "$650 × 60 = $39,000".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Payslip | $2,500 a fortnight; 12% = $300.00; 15% tax $45.00; $255.00 | 2 |
| Super growth | 5.4% p.a. fortnightly (assumed); 20 years: 238,358.74; paid in 132,600; interest 105,758.74; 30 years: 496,588.02 | 3 |
| Save (site lesson12 card 06) | $600 a month; 0.4%; 39 months; 25,269.37; 23,400; interest about 1,869 | 4 |
| Borrow (i15) | 497.39; interest 4,843.40 | 4 |
| Limit | 497.39 × 50.2621 = 24,999.87 | 5 |
| A1 | 54.00; 2,808.00; 2,386.80; 13.1808; 31,459.93 | 7, 8 |
| A2 | 650 × 50.2621 = 32,670.37; 2,329.63; slip 39,000 | 9, 10 |
| Sources | ATO SG 12% and Payday Super; 15% contributions tax; RBA F4 (Oct 2026); F8 (Sept 2026) | 2, 4 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the pack's values agree where shared. Codex to re-check, and to confirm the ATO pages.

- 2,500 × 0.12 = 300; × 0.85 = 255. 255 × ((1 + 0.054/26)^520 − 1) ÷ (0.054/26) = 238,358.74; 255 × 520 = 132,600; at 780 periods 496,588.02.
- Saving 600 a month at 0.004 (interest rounded to the cent): balance after 39 deposits 25,269.37, after 38 below 25,000; 39 × 600 = 23,400.
- 60 × 497.39 − 25,000 = 4,843.40; 497.39 × 50.2621 = 24,999.87.
- 450 × 0.12 = 54; 52 × 54 = 2,808; × 0.85 = 2,386.80; × 13.1808 = 31,459.93. 650 × 50.2621 = 32,670.365 → 32,670.37; 35,000 − 32,670.37 = 2,329.63.

## Memory aid check

- **"Building up (super, savings): future value. Borrowing now (a loan): present value."** with key line **"Decide with the numbers, then say what the numbers can't: waiting, access, risk."** Original. Meaning, as said in scene 6: when regular payments build a balance for later, the question is a future value; when a loan is taken now and repaid by regular payments, the amount borrowed is the present value of those payments; a decision is justified with the numbers and one factor the numbers leave out. Assumptions checked: equal payments at the end of each period at a fixed rate (the annuity model, a simplification of real super, which arrives each payday at varying returns, said in A1); "risk" covers changing rates and returns. It helps a new case: "how much can $400 a month for 4 years at 1% a month borrow?" is a present value, 400 × 37.9740 = $15,189.60. Introduced after scenes 2 to 5.
- **Considered, not used:** "Save forward, borrow back" (neat, but unclear on first hearing).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,422 characters**, 12 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 408 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the payslip slide (2), the towers (3), the split screen (4) and the collapsing repayments (5) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 507 s (8 min 27 s)**, 63 s under the 570 s cap. Feedback speech: about 30 s and 27 s.

Reserve trims if the voiced take runs long: scene 2's "Since July twenty twenty-six, it has to reach the fund within days of each payday." (the chip carries it); scene 1's "Each one is an annuity, and each ends in a decision you can back with numbers."

## Scene list and build ids

Lesson key `m-s12i23` (route math-s12-i23). Explainer folder `src/explainer/lessons/math-s12-i23`; build inputs in `docs/production/claude-pm/lessons/math-s12-i23/` (at voicing).

In order (12 scene headings): hook-three-decisions, super-payslip, super-grows, worked-save-or-borrow, borrowing-limit, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-ratios, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | i22's frame; three decision cards |
| 35 to 100 s | 2 | Payslip to super |
| 100 to 140 s | 3 | The super towers |
| 140 to 230 s | 4 | g01 board: save or borrow |
| 230 to 285 s | 5 | The borrowing limit |
| 285 to 305 s | 6 | Framed memory card |
| 305 to 420 s | 7 to 10 | Question cards and countdowns, then feedback |
| 420 to 440 s | 11 | Money done; the jug for r01 |
| 440 to 485 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i22's last frame continues into 1; 1 to 2 stage change (the first card opens); 2 to 3 stage change; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i23-learning-review.md`, `science_check` = `checks/m-s12-i23-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, opened and viewed): `maths/ma12-super-statement-v1.png` (Advanced f13's anchor; not reused, as the pack asks; the payslip is coded); `maths/ma11-water-jug-v1.png` (a clear glass jug half full of water; final frame, as in i18); `physics/phys-y11-house-v1.png` (not needed here: the kit-needs file's roof-triangle final frame was for t01, which ruling 28 replaced with r01).

Need: none new. Reused: `ms12-small-suv-v1.png`, `ms12-house-key-v1.png`, `ms12-pay-envelope-v1.png` (strand thumbnail), `ma11-water-jug-v1.png`.

Coded: the decision cards, the payslip strip and fund box, the towers, the spreadsheet extract, meter, loan bar and car icon, the PV extract and collapsing timeline, the jug's cordial layer, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `PeriodTimeline`, `DepositTower`, `GoalMeter`, `LoanBalanceBar`, `SpreadsheetGrid`, `InterestFactorTable` (PV), `ScreenApp` (an unbranded calculator window), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `annuityFV`, `loanPresentValue` and `savingsSchedule` from `money.ts`.

Additions (kit-needs row i23):
1. **PayslipLine** (new, small): a coded, unbranded payslip strip whose "Super (12%)" line slides to a fund box, with a 15% tax slice peeling off. Check: $300 becomes $255.
2. **Decision cards** (small): three cards that open to a worked stage and close to a one-line decision.
3. The final frame no longer uses the kit-needs file's roof-triangle overlay (ruling 28); the jug's coded cordial layer from i18 is reused.

## Codex asset brief

No new plate for i23. `ms12-small-suv-v1.png` (brief in `math-s12-i15.md`), `ms12-house-key-v1.png` (brief in `math-s12-i21.md`) and `ms12-pay-envelope-v1.png` (brief in `math-s12-i19.md`) are reused; `ma11-water-jug-v1.png` exists.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that the description says Standard 2 only.
3. Confirm the super facts against the ATO pages cited (12% for 2026-27; Payday Super from 1 July 2026, within 7 business days; 15% contributions tax), and the rates against RBA F4 and F8; confirm "rates and rules change" is said.
4. Confirm the 15% tax is deducted wherever super contributions are counted (MS-28), and no lottery, logarithm or annuity formula appears.
5. Confirm both attempts carry every demand and neither card shows an answer; A1 states its simplified yearly model.
6. Confirm scene 1 opens on i22's final frame and scene 11 matches i18's right panel (the jug, no numbers).
7. Confirm the responsible-money sentences (super locked until retirement; the lender's maximum) are said once, plainly.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Annuities in Real Decisions: Super, Saving and Borrowing | Year 12 Maths Standard

(Title length: 81 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson03.sa.html

Three real money decisions, each solved as an annuity. Superannuation: see how 12% of a first job's pay is paid on top by the employer, how the fund's 15% contributions tax leaves $255 each payday, and what that grows to over 20 and 30 years. Saving or borrowing for a $25,000 car: 39 months of saving against $4,843.40 of loan interest. And how much a monthly repayment can borrow, using a present value factor. End each decision with numbers and one thing the numbers can't show. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Super rules are from the ATO for 2026-27 and interest rates are examples; rates and rules change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Annuities. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Solve annuity problems involving financial decisions regarding superannuation, savings accounts and loans"
Standard 1 has no annuities content.
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3

Builds on: How Each Input Changes an Annuity's Value. Next: the first ratios video.

#Year12Maths #MathsStandard #Superannuation #HSCScience

## Open decisions

- **1. The super return assumption.** 5.4% p.a. after fees, compounded fortnightly, keeps the site's `we-1` rate; it is labelled an assumption. Confirm, or ask for a cited long-run figure.
- **2. The r01 teaser (shared with i18).** The jug is provisional until r01 is designed; only scene 11 changes if r01 picks another anchor.
- **3. Payday Super sentence.** The "within days of each payday" detail is new law from 1 July 2026; it is one sentence and the first trim.

## Review notes

- Revision 1. Next: student learning review (trace from i22 for a Standard 2 student finishing the strand; check that "on top, not out of your pay" lands, that the tax slice explains $255, that the save-or-borrow decision weighs waiting against interest rather than declaring a winner, that "a loan is a present value" is seen in the collapsing repayments, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
