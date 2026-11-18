# Maths S12 I12: What do buy now pay later, short-term and long-term loans really cost? Total paid against the repayment, why a longer loan costs more, and BNPL's condition (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`; ruling 31 fixes the i11 to i12 join). Written after i13 to i23, opening on i11's final frame as specified in `math-s12-i11.md` (scene 12 and its Decisions "Handoff"); `../checks/root-decisions-maths-s12-i01-i11.md` did not yet exist when this was written, so the join is taken from the i11 design itself (see the i12 to i23 decisions file, join 1). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,253 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 494 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i12-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, Decisions "Rates and rules" (BNPL regulation source, ruling 32): **accepted** (root decision 3). The start date is confirmed: ASIC Information Sheet 285, "Buy now pay later credit contracts: Credit licensing" (issued January 2025, read 18 November 2026), says "From 10 June 2025, anyone engaging in credit activities involving buy now pay later contracts must hold an Australian credit licence". It replaces the ASIC news item, which did not state the date. The narration ("Since June twenty twenty-five") and the chip ("regulated as credit since June 2025 (ASIC)") are unchanged. The Moneysmart page (last updated 6 October 2026) does not state the date, so it stays cited for fees only. Codex brief item 4 names INFO 285.
2. Optional, scene 3 ("about two and a half times" against "≈ 2.6"): **applied**. "more than two and a half times", and the grey row reads "1,003.80 ÷ 389.28 ≈ 2.58".
3. Optional, scene 3 (task strip repeats the givens): **applied**. Strip: "A $3,000 e-bike: find the total paid and the extra cost for each way to pay." The givens card holds the three options with their terms.

Housekeeping (root decision 3): the description's "Builds on" line names i11's title, "Straight-Line vs Declining Balance Depreciation". i11's "Next" line now reads "Buy Now, Pay Later and Loans: What They Really Cost" (the only change made to i11). Open decision 1 is closed.

Narration 5,253 characters by script (Revision 1: 5,249), about 494 s with holds, 76 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 25, Investment and loans (Loans). Shared by Standard 1 and Standard 2: the two content points are word for word the same. Repayments are supplied ("from the lender's calculator"), so no Standard 2 method is needed. Pre-design pack: `../pre-design/maths-standard/math-s12-i12.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson08.sa.html` (SHA256 `13b6a566e1fce40d02e973d1b5dcb86cb64a519b15c9c123b15afae5766541e0`; card 08 "Buy now pay later, and why term matters more than rate", the $3,000 purchase, its three-row table and its late-interest example; the first card 08's "total interest paid" rule). Route entry: `math-s12-i12` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; the e-bike plate (briefed in i11) and the swing tag reused; the solar panels plate reused in attempt 2; the bars, curves, instalment strip and decision card coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (transport: an e-bike for getting to work or TAFE), Australian spelling, no em dashes, money spoken naturally, conversational narration, responsible-money framing stated plainly without lecturing).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Investment and loans, Loans):
- `ciad381478`: "Compare and analyse the costs associated with buy now, pay later, short term and long term loans"

Standard 1 (Depreciation and loans, Loans):
- `ci9fb7eb0d`: "Compare and analyse the costs associated with buy now, pay later, short term and long term loans"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i11's final frame exactly (board clear; the e-bike plate `ms12-ebike-v1.png`, about 1,100 px wide, at the centre-left; the swing tag `ma12-swing-tag-v1.png` hanging from the handlebar with "$3,000" (48 px, ink) and "buy now, pay later?" (hand font, 36 px, amber); top left, a small grey thumbnail of i11's depreciation chart with "What things are worth: done"; chips "Next: the real cost of borrowing" and "?"; no payment options, rates, fees or terms). Recalls Year 11 m03 and m04 (buy now, pay later: instalments, fees; buying on terms; comparing total costs) and i01 and i02 (interest as the price of borrowing over time) in a phrase or grey chip each. Teaches: comparing three ways to pay for the same $3,000 (buy now, pay later over 12 months; a 2-year loan; a 5-year loan) by the total paid and the cost above the price, not by the repayment; why, at the same interest rate, a longer loan costs more (money is owed for longer, on a balance that falls more slowly); that BNPL costs nothing only while every instalment is on time, and that late fees, any account fees and interest after an interest-free period are what make it dear; choosing and justifying an option for someone's situation. Stops at comparing costs. Not taught: how a loan's balance changes each month (i13); repayment formulas; credit cards (i16).

## Decisions

- **Anchor: a $3,000 e-bike (painted plate, live; ruling 31).** The site's card 08 table: BNPL 12 monthly instalments of $250, total $3,000, $0 extra if every instalment is on time; a 2-year loan at 12% p.a. (1% a month), $141.22 a month, total $3,389.28, interest $389.28; a 5-year loan at the same rate, $66.73 a month, total $4,003.80, interest $1,003.80 (2.58 times the 2-year interest; the site's "two and a half times"). Repayments are given as the lender's calculator figures.
- **Worked example (g01, scene 3): total paid and extra cost for each option.** Task strip, givens, three working rows, the total-paid bars, framed answer, crossed slip "5-year loan: smallest repayment, so cheapest" (caption "compare the total paid, not the repayment").
- **Why longer costs more (scene 4).** After 12 months the 2-year loan owes $1,589.45 and the 5-year loan $2,534.18 (cent-rounded runs); the area under each balance curve is shaded "dollars owed × time", which is what interest is charged on. No formula.
- **BNPL's condition (scene 5; site card 08 and the pack's decisions).** "$0 only while every instalment lands on time"; a late fee for each missed instalment (the site's "typically around $10", said as an example); some plans charge an account fee, which is added to the total (the Year 11 rule); some longer plans charge interest on anything still owed after the interest-free time: the site's $800 at 18% p.a. simple for 6 months = $72. One plain sentence: since June 2025 BNPL is regulated as credit, so there's a credit check, and missed payments can show on a credit report.
- **Rates and rules (ruling 5, ruling 32), read 18 November 2026.** Personal loans: RBA statistical table F8, Personal Lending Rates (September 2026): new fixed-rate personal term loans averaged 10.39% p.a. (https://www.rba.gov.au/statistics/tables/csv/f8-data.csv); unsecured loans are usually higher, so 12% is realistic. BNPL: Moneysmart, "Buy now pay later services" (usually interest-free, but late fees, account-keeping fees and other charges can apply; https://moneysmart.gov.au/other-ways-to-borrow/buy-now-pay-later-services); ASIC Information Sheet 285, "Buy now pay later credit contracts: Credit licensing" (issued January 2025, read 18 November 2026): "From 10 June 2025, anyone engaging in credit activities involving buy now pay later contracts must hold an Australian credit licence" (https://www.asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing). Revision 2 replaces Revision 1's ASIC news item, which invited feedback on draft guidance and did not state the start date (learning review finding 1, root decision 3). Said once in scene 2: "fees and rates change".
- **Site corrections.** None in the parts used (pack section 8). The amortisation schedule (card 05) is i13's; extra repayments (card 06) are i14's; no repayment formula is shown (MS-24).
- **Join.** Scene 1 opens on i11's final frame exactly; the grey "What things are worth: done" thumbnail fades on the first sentence. Scene 12 is i13's opening frame, as `math-s12-i13.md`'s boundary states.
- **Standard 1 completeness.** Every step is multiplication of a given repayment and a subtraction; both attempts serve both courses.
- **Simulations (standard item 3).**
  1. **Total-paid bars** (scene 3; new `CostSplitBars`): three horizontal bars on one dollar scale, each split into teal "price $3,000" and amber "extra"; beside each bar its monthly repayment shrinks ($250, $141.22, $66.73) while the amber grows ($0, $389.28, $1,003.80): a seesaw.
  2. **Balance curves** (scene 4; `StudioPlot`, months 0 to 60, $0 to $3,000): the 2-year and 5-year balances fall from $3,000; a vertical reader at month 12 shows $1,589.45 and $2,534.18; the area under each curve shades amber, the 5-year area much larger.
  3. **Instalment strip** (scene 5; `PeriodTimeline`): 12 monthly ticks, all teal when paid on time; then one tick turns red with a "+$10 late fee" stamp; then a second run leaves "$800 still owed" at the end with an amber stamp "18% p.a. for 6 months: +$72".
- **Colour roles (fixed for i12 to i18).** Price or amount borrowed **teal**; extra cost (interest or fees) **amber**; repayment **violet**; balance owed **blue**; answer **green**; mistake **red**, crossed slips only (a late tick is red-outlined as an event, not a mistake, with an amber fee stamp).
- **Large type, handwritten voice.** Bar labels 40 px; working rows 44 px; graph labels 34 px; readouts 52 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "same e-bike", "from the lender's calculator", "smaller repayment, bigger total", "compare the total paid", "owed for longer", "still owes more", "dollars owed × time", "$0 only if every one is on time", "+ fees", "can every instalment be paid?". At most two live at once.
- **Stage changes (standard item 2).** i11's frame and three ways to pay (1); BNPL and the two loans set up (2); the g01 board with the bars (3); the balance curves (4); the instalment strip (5); the decision card (6); framed card (7); question cards (8 to 11); the e-bike loan for i13 (12); key notes (13).
- **Memory aid.** Framed card: "Compare the total paid, not the repayment." Key line: "Longer loan: smaller repayment, bigger total. BNPL: free only while every instalment is on time."
- **Visual surprise.** In scene 3 the repayment beside each bar shrinks while the amber cost grows, so the "cheapest-looking" option is visibly the dearest.
- **Plain meanings at first use.** Buy now, pay later ("you take the item now and pay it off in instalments, usually with no interest"); instalment ("one of the equal payments"); short-term and long-term loan ("a loan paid off over a short time, like two years, or a long time, like five"); interest ("what a lender charges for the use of its money"); total paid ("every payment added up"); late fee ("a charge for a payment that's late").
- **Attempts (original, HSC style; the pack's two questions).** A1: a $1,440 gaming console, three ways to pay (BNPL 4 fortnightly instalments of $360 with a $10 late fee each; a 12-month loan at $132.02; a 24-month loan at $71.89): totals ($1,440; $1,584.24; $1,725.36), the BNPL total with two missed instalments ($1,460) and a justified recommendation for someone paid fortnightly who can afford $360 a fortnight; crossed "two missed: still $1,440" (caption "add $10 for each missed instalment"). A2: $8,000 for solar panels at 12% p.a., $376.59 a month over 2 years or $210.67 over 4 years: total interest ($1,038.16, $2,112.16), the difference ($1,074.00) and why the longer loan costs more at the same rate; crossed "same rate, so the same cost" (caption "owed for twice as long").
- **Mistake scene:** none separate. The smallest repayment chosen as cheapest (3 crossed); "the same rate means the same cost" (4; A2 crossed); "BNPL is free whatever happens" (5); late fees left out (A1 crossed); account fees left out (5, said).
- **Cause chain taught, in order:** (1) the honest comparison is the total paid, because a repayment hides how many payments there are (3); (2) at the same rate, a smaller repayment pays the balance down more slowly, so more money is owed for longer, and interest is charged on every dollar for every month it is owed (4); (3) BNPL charges no interest only while its condition holds; a missed instalment adds a fee, and some plans add account fees or interest afterwards (5); (4) so the right choice depends on whether every instalment can be met, and otherwise on the shortest loan the budget can carry (6).
- **Entry knowledge (route):** Year 11 m03 (BNPL fees) and m04 (buying on terms; comparing totals); i01 and i02 (interest as the price of borrowing). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i13, "How does a reducing balance loan change from one period to the next?").** Scene 12: the e-bike plate (about 900 px) at the left with a coded card, 40 px: "borrowed: $3,000", "1% a month", "$141.22 a month for 24 months"; at the right an empty reducing-balance table header (36 px: "Month", "Balance at start", "Interest", "Balance plus interest", "Repayment", "Balance at end"); chips "where does each $141.22 go?", "Next: reducing balance loans" and "?". No row is filled. This is i13's opening frame (as `math-s12-i13.md` states).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 24 months at 1%: M = 141.2204 → 141.22; 24 × 141.22 = 3,389.28; interest 389.28. 60 months: M = 66.7334 → 66.73; 60 × 66.73 = 4,003.80; interest 1,003.80. 1,003.80 ÷ 389.28 = 2.58. A cent-rounded 5-year run leaves a 61st payment of $0.27 (lenders fold it into the last payment); the totals use repayment × number, as the site does.
  (b) Balances after 12 payments: 2-year 1,589.45; 5-year 2,534.18 (after 24 payments the 5-year loan still owes 2,009.27; not shown).
  (c) BNPL: 12 × 250 = 3,000. Late interest (site): 800 × 0.18 × 0.5 = 72.
  (d) A1: 12 months at 1.5%: 132.02, 1,584.24 (extra 144.24); 24 months: 71.89, 1,725.36 (extra 285.36); BNPL 4 × 360 = 1,440; two missed: 1,460. A2: 8,000 at 1%: 24 months 376.59, 9,038.16, 1,038.16; 48 months 210.67, 10,112.16, 2,112.16; difference 1,074.00.
  (e) Pronunciations: "a hundred and forty-one dollars twenty-two"; "sixty-six dollars seventy-three"; "one thousand and three dollars eighty".

Main question: *A $3,000 e-bike can be paid with buy now, pay later over a year, a 2-year loan or a 5-year loan. What does each really cost?*
Entry knowledge (Year 11 m03, m04; i01, i02): BNPL fees; comparing totals; interest as the price of borrowing.
Stops after: totals and extra costs compared, why longer costs more, BNPL's condition, and a justified choice. No monthly balance table (i13).
Handoff: math-s12-i13: "the 2-year loan: where does each $141.22 go?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): price teal; extra cost amber; repayment violet; balance blue; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: three ways to pay
> Here's the e-bike, three thousand dollars, for getting to work or TAFE. The tag says buy now, pay later. But that's only one way to pay. You could use buy now, pay later over a year, take out a loan over two years, or take one over five **years**. Each one has a different monthly payment, and a very different total. Most big purchases come with offers like these, so it pays to see through them. What do buy now pay later, short-term and long-term loans really **cost**?

Visual: opens on i11's final frame exactly (the e-bike, the swing tag "$3,000" and "buy now, pay later?", the grey thumbnail, chips). On the first sentence the thumbnail and "Next" chip fade and the bike moves to the left third at about 900 px. On "years" three option chips fan out from the tag, 40 px: "buy now, pay later: 12 months", "loan: 2 years", "loan: 5 years", hand tag "same e-bike". On "different total" each chip gets an empty bar slot. On "cost" heading "What borrowing really costs" writes on, and the question chip "Which is cheapest?" moves to the top right.

### 2. the three offers
> Buy now, pay later, or BNPL, means you take the e-bike now and pay it off in instalments, usually with no interest. Here, it's twelve monthly instalments of two hundred and fifty **dollars**. A loan charges interest, the price of using the lender's money. This lender charges twelve per cent a year, one per cent a month. A two-year loan is a short-term loan, and its repayment is a hundred and forty-one dollars twenty-two a month. A five-year loan is a long-term loan, and its repayment is just sixty-six dollars seventy-**three**. These figures come from the lender's calculator, and fees and rates change.

Visual: stage change: the bike shrinks to a 300 px badge at the top left. Three option cards side by side (each 480 × 360 px). Card 1 "BNPL": a definition line, 34 px, "take it now, pay in instalments, usually no interest"; on "dollars" "12 × $250 a month" (violet), grey chip "Year 11: buy now, pay later". Card 2 "2-year loan (short-term)": "12% a year = 1% a month" (amber outline), "$141.22 a month" (violet). On "three" card 3 "5-year loan (long-term)": "12% a year", "$66.73 a month" (violet). A grey chip "from the lender's calculator", hand tag "from the lender's calculator", and a grey chip "example rate (RBA F8, Sept 2026: personal loans average 10.39% p.a.)".

### 3. worked example: what each one costs
> Let's set it out. For each option, find the total paid and the extra cost above the price. BNPL is twelve times two fifty, three thousand dollars, so the extra is nothing. The two-year loan is twenty-four times a hundred and forty-one twenty-two, three thousand three hundred and eighty-nine dollars twenty-eight. The extra is three hundred and eighty-nine twenty-**eight**. The five-year loan is sixty times sixty-six seventy-three, four thousand and three dollars eighty. The extra is one thousand and three dollars **eighty**, more than two and a half times the two-year loan's interest. Saying the five-year loan is cheapest because its repayment is smallest is the slip. Compare the total **paid**.

Visual: clear change to the g01 board. Task strip, 44 px: "A $3,000 e-bike: find the total paid and the extra cost for each way to pay." Givens card, 40 px: "price $3,000" (teal), "A: BNPL, 12 × $250, no interest if every instalment is on time", "B: 2-year loan, 24 × $141.22", "C: 5-year loan, 60 × $66.73" (violet). (Revision 2: the strip holds only the task, and the givens card holds the options; learning review optional finding 3.) Rows, 44 px: "A: 12 × 250 = $3,000; extra $0"; "B: 24 × 141.22 = $3,389.28"; on "eight" "extra = 3,389.28 − 3,000 = $389.28" (amber); "C: 60 × 66.73 = $4,003.80"; on "eighty" "extra = $1,003.80" (amber) and "1,003.80 ÷ 389.28 ≈ 2.58" (grey). At the right the total-paid bars (simulation 1) grow on one $0 to $4,500 scale, teal "$3,000" in each, amber "$0", "$389.28", "$1,003.80"; beside them the repayments shrink "$250", "$141.22", "$66.73", hand tag "smaller repayment, bigger total". Framed answer (green): "cheapest: BNPL $3,000 (if on time); dearest: 5-year loan $4,003.80". On "paid" a red slip "5-year loan: smallest repayment, so cheapest" writes and is crossed (caption "compare the total paid, not the repayment"), hand tag "compare the total paid".

### 4. why the longer loan costs more
> Same e-bike, same interest rate, so why does the longer loan cost so much more? Interest is charged on what you still owe, every month you owe it. With the smaller repayment, the balance comes down more slowly. After one year, the two-year loan owes about one thousand five hundred and eighty-nine dollars, but the five-year loan still owes about two thousand five hundred and thirty-**four**. And it keeps owing for three more years after the short loan is finished. More dollars, owed for more months, means more **interest**.

Visual: stage change: the balance curves (simulation 2), months 0 to 60, $0 to $3,000: the 2-year curve (blue) reaching zero at 24, the 5-year curve (blue, dashed) reaching zero at 60. A reader slides to month 12; on "four" readouts "$1,589.45" and "$2,534.18", hand tags "owed for longer" and "still owes more". On "interest" the area under each curve shades amber, the 5-year area much larger, labelled "dollars owed × time", hand tag "dollars owed × time".

### 5. BNPL's catch
> So is BNPL always best? Only if one condition holds. The zero holds only while every instalment is paid on **time**. Miss one, and a late fee applies, often around ten dollars each **time**. Some plans also charge an account fee, and that has to be added to the total. And some longer plans charge interest on anything still owing when the interest-free time ends. Say eight hundred dollars is left, at eighteen per cent a year, for six more months. That's seventy-two dollars of **interest**. One more thing. Since June twenty twenty-five, BNPL is regulated as credit, so there's a credit check, and missed payments can show up on your credit **report**.

Visual: stage change: the instalment strip (simulation 3; 1,600 px): 12 monthly ticks "$250", each turning teal as "paid on time"; on "time" (first bold) a teal bracket "$0 extra", hand tag "$0 only if every one is on time". On "time" (second bold) a second run: tick 5 turns red-outlined with an amber stamp "+$10 late fee". On "account fee" a grey chip "+ account fee, if the plan has one", hand tag "+ fees". On "eight hundred dollars" a third run ends with "$800 still owed"; on "interest" an amber stamp "800 × 0.18 × 0.5 = $72". On "report" a grey chip "regulated as credit since June 2025 (ASIC)".

### 6. choosing
> So which should you choose? Ask one question first. Can every instalment be paid on time? If yes, BNPL is the cheapest. If not, choose a loan, and the shortest term your budget can comfortably **carry**.

Visual: stage change: the decision card (`DecisionTree`, 1,200 × 520 px): "Can every instalment be paid on time?"; "yes" leads to "BNPL: $3,000", "no" leads to "loan: the shortest term you can afford". On "carry" the "no" branch lights the 2-year card above the 5-year card, hand tag "can every instalment be paid?".

### 7. memory aid
> Here's the summary. Compare the total paid, not the repayment. A longer loan has a smaller repayment, and a bigger total. And BNPL is only free while every instalment is on **time**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three total-paid bars small with their shrinking repayments. Main line, hand font 56 px: "Compare the total paid, not the repayment." On "time" the key line, 40 px: "Longer loan: smaller repayment, bigger total. BNPL: free only while every instalment is on time." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A gaming console costs one thousand four hundred and forty dollars, and there are three ways to pay. Find the total paid for each option, if every payment is on time. Find the BNPL total if two instalments are missed. And which option would you recommend for someone paid fortnightly, who can afford three hundred and sixty dollars a fortnight? Justify with numbers. Pause here to answer.

Visual: `QuestionCard`, 38 px, worded as printed: "A gaming console costs $1,440. Three ways to pay are offered: BNPL: 4 fortnightly instalments of $360, no interest or fees if every instalment is paid on time, $10 late fee for each missed instalment; a 12-month loan with repayments of $132.02 per month; a 24-month loan with repayments of $71.89 per month. (a) Find the total paid for each option if every payment is on time. (b) Find the BNPL total if two instalments are missed. (c) Which option would you recommend for someone who is paid fortnightly and can afford $360 a fortnight? Justify with numbers." The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> On time, it's fourteen forty for BNPL, fifteen eighty-four twenty-four for the twelve-month loan, and seventeen twenty-five thirty-**six** for the two-year loan. Two missed instalments add twenty dollars, so fourteen sixty. Recommend BNPL. Three-sixty a fortnight fits the pay, and it's at least a hundred and forty-four dollars cheaper. Forgetting the late fees is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "(a) BNPL $1,440; 12 × 132.02 = $1,584.24; 24 × 71.89"; on "six" "= $1,725.36" (framed green). "(b) 1,440 + 2 × 10 = $1,460" (framed green). "(c) BNPL: $360 fits fortnightly pay; $144.24 less than the 12-month loan" (framed green). On "slip" a red slip "two missed: still $1,440" writes and is crossed (caption "add $10 for each missed instalment"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Solar panels for a family home cost eight thousand dollars. A lender charges twelve per cent a year, one per cent a month. The repayments are three hundred and seventy-six dollars fifty-nine a month over two years, or two hundred and ten sixty-seven a month over four years. Find the total interest for each term. How much more does the four-year loan cost? Explain why it costs more, even though the rate is the same. Pause here to answer.

Visual: `QuestionCard`, 38 px: "Solar panels for a family home cost $8,000. A lender charges 12% p.a. (1% per month). The repayments are $376.59 per month over 2 years, or $210.67 per month over 4 years. (a) Find the total interest for each term. (b) How much more does the 4-year loan cost? (c) Explain why the longer loan costs more, even though the interest rate is the same." Picture slot: the solar panels plate `ma12-solar-panels-v1.png` (about 360 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Over two years, the total is nine thousand and thirty-eight sixteen, so the interest is one thousand and thirty-eight sixteen. Over four years, it's two thousand one hundred and twelve **sixteen**. The four-year loan costs one thousand and seventy-four dollars more, because the balance falls more slowly and money is owed for twice as long. Saying the same rate means the same cost is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "(a) 24 × 376.59 = 9,038.16; interest $1,038.16"; on "sixteen" "48 × 210.67 = 10,112.16; interest $2,112.16" (framed green). "(b) 2,112.16 − 1,038.16 = $1,074.00" (framed green); "(c) owed for longer, on a balance that falls more slowly" (framed green). On "slip" a red slip "same rate, so the same cost" writes and is crossed (caption "owed for twice as long"). Hold about 1 s.

### 12. handoff
> So the two-year loan costs three hundred and eighty-nine dollars twenty-eight in interest. But each month, the repayment is the same, a hundred and forty-one twenty-two. Some of it pays interest, and some pays off the e-bike. Where does each payment actually go? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: the e-bike plate (about 900 px) at the left; on "two-year loan" a coded card, 40 px, writing: "borrowed: $3,000", "1% a month", "$141.22 a month for 24 months". On "Some of it pays interest" an empty reducing-balance table header at the right (36 px: "Month", "Balance at start", "Interest", "Balance plus interest", "Repayment", "Balance at end"). On "next" chips "where does each $141.22 go?", "Next: reducing balance loans" and "?". Hold about 2 s. No row is filled. This is i13's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Total paid = repayment × number of repayments (+ any fees).
- Extra cost = total paid − price.
- Same rate, longer term: smaller repayment, more interest.
- BNPL: $0 extra only if every instalment is on time.
- Late fees, account fees and later interest add to BNPL's cost.

Memory aid (framed card, right side, as in scene 7): *Compare the total paid, not the repayment.* Key: *Longer loan: smaller repayment, bigger total. BNPL: free only while every instalment is on time.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i13's opening frame.

## Teaching checks

- **Does it explain causes?** Why compare totals: the repayment hides how many there are (3). Why a longer loan costs more at the same rate: more dollars owed for more months (4). Why BNPL can become dear: its $0 is conditional, and fees and later interest are added (5). Why the choice depends on the budget (6).
- **Misconceptions addressed:** smallest repayment as cheapest (3 crossed); same rate means same cost (4; A2 crossed); BNPL free whatever happens (5); late fees left out (A1 crossed); account fees left out (5).
- **Visual standard, item by item:** 1 the e-bike from the first frame; 2 a new stage every 25 to 70 s; 3 the total-paid seesaw, the balance curves with shaded "dollars owed × time", the instalment strip with fee stamps; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 the shrinking repayment against the growing amber.
- **One idea at a time:** the offers (2), totals (3), why longer costs more (4), BNPL's condition (5), choosing (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** Year 11's BNPL rule is recalled in a chip; the monthly balance mechanics are left to i13.
- **Standard 1 path:** identical points; arithmetic only.
- **Syllabus coverage:** `ciad381478` and `ci9fb7eb0d`: buy now, pay later (2, 3, 5, A1), short-term loans (2 to 4, A1, A2), long-term loans (2 to 4, A2), compare and analyse the costs (3 to 6). Key notes 1 to 5.
- **Out of scope by design:** the period-by-period balance (i13); repayment formulas (MS-24); credit cards (i16).

## Practice questions and model answers

**Attempt 1 (scene 8; original, HSC style, 4 marks suggested, not an official marking scheme).** "A gaming console costs $1,440. Three ways to pay are offered: BNPL: 4 fortnightly instalments of $360, no interest or fees if every instalment is paid on time, $10 late fee for each missed instalment; a 12-month loan with repayments of $132.02 per month; a 24-month loan with repayments of $71.89 per month. (a) Find the total paid for each option if every payment is on time. (b) Find the BNPL total if two instalments are missed. (c) Which option would you recommend for someone who is paid fortnightly and can afford $360 a fortnight? Justify with numbers."
Model answer: (a) BNPL $1,440.00; 12 months: 12 × $132.02 = $1,584.24; 24 months: 24 × $71.89 = $1,725.36. (b) $1,440 + 2 × $10 = $1,460.00. (c) BNPL: it costs $1,440, which is $144.24 less than the 12-month loan and $285.36 less than the 24-month loan, and the $360 instalments fit a fortnightly pay, so they can be paid on time. Classic mistake (crossed): "two missed: still $1,440".

**Attempt 2 (scene 10; original, HSC style, 3 marks suggested).** "Solar panels for a family home cost $8,000. A lender charges 12% p.a. (1% per month). The repayments are $376.59 per month over 2 years, or $210.67 per month over 4 years. (a) Find the total interest for each term. (b) How much more does the 4-year loan cost? (c) Explain why the longer loan costs more, even though the interest rate is the same."
Model answer: (a) 2 years: 24 × $376.59 = $9,038.16, interest $1,038.16. 4 years: 48 × $210.67 = $10,112.16, interest $2,112.16. (b) $2,112.16 − $1,038.16 = $1,074.00. (c) With smaller repayments, the balance falls more slowly and money is owed for twice as long, so interest is charged on more dollars for more months. Classic mistake (crossed): "same rate, so the same cost".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| E-bike (site card 08) | $3,000; BNPL 12 × 250 = 3,000; 1% a month; 2 years: 141.22, 3,389.28, 389.28; 5 years: 66.73, 4,003.80, 1,003.80; ratio 2.58 ("more than two and a half times"; Revision 2) | 1 to 4, 12 |
| Balances after 12 payments | 1,589.45; 2,534.18 | 4 |
| BNPL condition | $10 late fee (example); 800 × 0.18 × 0.5 = 72 | 5 |
| A1 | 1,440; 360; 132.02 → 1,584.24; 71.89 → 1,725.36; 1,460; 144.24 | 8, 9 |
| A2 | 8,000; 376.59 → 9,038.16, 1,038.16; 210.67 → 10,112.16, 2,112.16; 1,074.00 | 10, 11 |
| Handoff | $3,000; 1% a month; $141.22; 24 months | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the pack's values (`recalc-output.txt`, `practice-output.txt`) agree. Codex to re-check.

- 3,000 at 0.01: 24 months M = 141.22, 3,389.28, 389.28; 60 months M = 66.73, 4,003.80, 1,003.80; 1,003.80 ÷ 389.28 = 2.579.
- Balances after 12 payments: 1,589.45 (M = 141.22) and 2,534.18 (M = 66.73).
- 12 × 250 = 3,000; 800 × 0.18 × 0.5 = 72.
- 1,440 at 0.015: 12 months 132.02, 1,584.24; 24 months 71.89, 1,725.36; 1,584.24 − 1,440 = 144.24; 1,440 + 20 = 1,460.
- 8,000 at 0.01: 24 months 376.59, 9,038.16, 1,038.16; 48 months 210.67, 10,112.16, 2,112.16; difference 1,074.00.

## Memory aid check

- **"Compare the total paid, not the repayment."** with key line **"Longer loan: smaller repayment, bigger total. BNPL: free only while every instalment is on time."** Original. Meaning, as said in scene 7: the cost of a way to pay is the sum of all its payments (and fees), not the size of one; at the same rate, spreading a loan over longer lowers each repayment but raises the total; BNPL adds nothing only under its on-time condition. Assumptions checked: the loans compared have the same rate and amount (the syllabus comparison and every example here); fees are added to the total; "free" ignores account fees on plans that charge them (scene 5 says to add them). It helps a new case: $5,000 at 1% a month over 3 years ($166.07) or 5 years ($111.22): $5,978.52 against $6,673.20 in total. Introduced after scenes 3 to 6.
- **Considered, not used:** "Small payments, big bill" (catchy, but leaves out BNPL's condition).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,253 characters** (Revision 2; Revision 1: 5,249), 13 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 395 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the bars (3), the curves and shading (4), the instalment strip (5) and the decision card (6) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 494 s (8 min 14 s)**, 76 s under the 570 s cap. Feedback speech: about 28 s and 29 s.

Reserve trims if the voiced take runs long: scene 1's "Most big purchases come with offers like these, so it pays to see through them." (keep if possible: the why-it-matters line); scene 5's "One more thing ..." sentence pair (the chip carries it).

## Scene list and build ids

Lesson key `m-s12i12` (route math-s12-i12). Explainer folder `src/explainer/lessons/math-s12-i12`; build inputs in `docs/production/claude-pm/lessons/math-s12-i12/` (at voicing).

In order (13 scene headings): hook-ebike-three-ways, three-offers, worked-total-cost, why-longer-costs-more, bnpl-catch, choosing, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | i11's frame; three ways to pay |
| 35 to 80 s | 2 | The three offers |
| 80 to 145 s | 3 | g01 board: totals and the seesaw bars |
| 145 to 185 s | 4 | Balance curves and shaded area |
| 185 to 240 s | 5 | The instalment strip and fees |
| 240 to 260 s | 6 | The decision card |
| 260 to 280 s | 7 | Framed memory card |
| 280 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 410 s | 12 | The e-bike loan for i13 |
| 410 to 455 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i11's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i12-learning-review.md`, `science_check` = `checks/m-s12-i12-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-swing-tag-v1.png` (a blank cream card tag on a string loop with four ruled lines; reused with coded text, as i11 does); `ma11-share-ebike-v1.png` (a teal step-through e-bike with a basket and a share-scheme wheel lock; not used, as i11's design decided, because it reads as a hire bike); `ma12-solar-panels-v1.png` (a ground-mounted array of six blue panels on a steel frame over grass; reused small in attempt 2); `ma12-phone-v1.png` (not used: the pack suggested avoiding a fourth phone, so attempt 1 is a gaming console, shown as a chip, not a plate).

Need: none new. `ms12-ebike-v1.png` is briefed in `math-s12-i11.md` (painted before the i11 build, ruling 17). Reused: `ma12-swing-tag-v1.png`, `ma12-solar-panels-v1.png`.

Coded: the option cards, the total-paid bars, the curves and shading, the instalment strip and stamps, the decision card, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot` with a vertical reader, `PeriodTimeline`, `DecisionTree` (trig-parts.tsx), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `loanSchedule` from `money.ts` for the balance curves.

Additions (kit-needs row i12):
1. **CostSplitBars** (new, small; reused by i14, i15, i17b, i18 and i22): horizontal total-paid bars on one scale, each split into price (teal) and extra (amber), with the repayment shown shrinking beside each bar and an optional fee stamp. Check: 3,000 + 0; 3,000 + 389.28; 3,000 + 1,003.80.
2. **Instalment strip with stamps** (a `PeriodTimeline` mode): ticks that turn teal when paid, a red-outlined late tick with an amber "+$10" stamp, and an end stamp for later interest.
3. **Area under a curve, shaded** on `StudioPlot`, labelled "dollars owed × time".

## Codex asset brief

No new plate for i12. `ms12-ebike-v1.png` is briefed in `math-s12-i11.md` and must exist before the i11 build (and so before i12). `ma12-swing-tag-v1.png` and `ma12-solar-panels-v1.png` are reused as they stand.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm the site's card 08 table is kept exactly and no repayment formula appears.
4. Confirm the BNPL facts against Moneysmart and ASIC Information Sheet 285 as cited (fees can apply; credit licence from 10 June 2025), and the rate source line (RBA F8, September 2026); confirm "fees and rates change" is said.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i11's final frame exactly as `math-s12-i11.md` specifies, and scene 12 matches `math-s12-i13.md`'s boundary.
7. Confirm the responsible-money sentences are said plainly once, without a lecture.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Buy Now, Pay Later and Loans: What They Really Cost | Year 12 Maths Standard

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson08.sa.html

A $3,000 e-bike can be paid with buy now, pay later over a year, a 2-year loan or a 5-year loan. Which really costs least? Compare the total paid and the extra cost above the price, not the monthly repayment: the 5-year loan has the smallest repayment and the biggest total. See why a longer loan costs more at the same interest rate, why buy now, pay later is only free while every instalment is on time, and how to choose an option that fits a budget. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Rates and fees are examples; real ones change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Compare and analyse the costs associated with buy now, pay later, short term and long term loans"
Syllabus content, Standard 1:
"Compare and analyse the costs associated with buy now, pay later, short term and long term loans"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Straight-Line vs Declining Balance Depreciation. Next: Reducing Balance Loans: Tables and Spreadsheets.

#Year12Maths #MathsStandard #Loans #HSCScience

## Open decisions

- **1. The i11 to i12 join (ruling 31).** This design opens on i11's final frame exactly as `math-s12-i11.md` specifies (the e-bike, the tag with "$3,000" and "buy now, pay later?", the grey thumbnail, the chips). It confirms i11's three details: the price $3,000, the thumbnail fading on the first sentence, and the chip wording "Next: the real cost of borrowing". `checks/root-decisions-maths-s12-i01-i11.md` did not exist when this was written; root should check it agrees once written. Closed in Revision 2: the review found the two files agree (summary, "Joins"), and the "Builds on" line now names i11's title, "Straight-Line vs Declining Balance Depreciation" (root decision 3); i11's "Next" line names this video's title.
- **2. BNPL realism.** The site's 12 monthly instalments with no fee are kept as the spine; scene 5 adds the late fee, account fees and later interest as stamps. Confirm.
- **3. Attempt contexts.** A gaming console (instead of the pack's phone, to avoid a fourth phone in the strand) and solar panels (instead of the pack's car repair, because i18's anchor is a car repair). The numbers are the pack's. Confirm.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i11 and Year 11 m03 for a Standard 1 student; check that "total paid" and "extra cost" land before the comparison, that the seesaw bars make the smaller-repayment trap visible, that the shaded area explains "owed for longer" without a formula, that BNPL's condition is stated plainly and not as a lecture, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
