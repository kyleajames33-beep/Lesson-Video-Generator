# Maths S12 I16: Why is a credit card a reducing balance loan, and what do its fees and interest-free period mean? A loan you can keep borrowing on, its rate against other loans, its fees, and the interest-free condition (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,335 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 500 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i16-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 5 ("closing balance" spoken before its meaning): **accepted**, reviewer's wording. "You must pay the whole closing balance, everything the statement says you owe, by the due date." The chip stays.
2. Optional, scene 2 ("the same as a loan's, with one more"): **applied**. "They're the loan table's columns, with new purchases added." The hand tag is now "the loan's columns + new purchases".
3. Optional, scene 1 ("Most adults have one"): **applied**. "Lots of adults have one." The reserve-trim line quotes it the same way.

Narration 5,335 characters by script (Revision 1: 5,292), about 500 s with holds, 70 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 29, Investment and loans (Credit cards). Shared by Standard 1 and Standard 2, identical in substance (Standard 2 "understand the meaning of an interest-free period", Standard 1 "explain the meaning"). Root ruling 30: the Standard 1 path arrives from i14 and Standard 2 from i15, so the video opens on a frame both have just seen and relies on nothing from i15. Pre-design pack: `../pre-design/maths-standard/math-s12-i16.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson10.sa.html` (SHA256 `9dfbd06d389ddb8e49b8223ac80ece3589e8950fa990e7486dbf0753bf9253c5`; cards 02, 04 and 05, the interest-free rules, MC Q3). The site names no fee other than the balance transfer fee and gives no rate comparison (MS-30), so fees and the rate ladder are taught from the syllabus and the cited sources. Route entry: `math-s12-i16` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; two new painted plates (a plain credit card, an ATM); the table, ladder, fee tags and timeline coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, no real bank branding, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (money: a first credit card), Australian spelling, no em dashes, money spoken naturally, conversational narration, responsible-money framing stated plainly once without lecturing).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Investment and loans, Credit cards):
- `ci213a72e9`: "Explain how credit cards are an example of a reducing balance loan"
- `ci3480c9ff`: "Compare credit card interest rates with interest rates for other loan types"
- `ci435086e3`: "Identify the various fees and charges associated with credit card usage, and understand the meaning of an interest-free period"

Standard 1 (Depreciation and loans, Credit cards):
- `ci23d33e6f`: "Explain how credit cards are an example of a reducing balance loan"
- `ci9715d6e5`: "Compare credit card interest rates with interest rates for other loan types"
- `ci8a052732`: "Identify the various fees and charges associated with credit card usage, and explain the meaning of an interest-free period"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i15's final frame exactly, which is also i14's right panel (the plain card plate; an empty table with headers "Balance at start", "Interest", "Repayment", "New purchases", "Balance at end", "New purchases" ringed amber; chips "a loan you can borrow again?", "Next: credit cards", "?"). Recalls i13 (interest on the balance owing; the period table) and i12 (comparing on cost, BNPL's late fees) in a phrase or grey chip each. Teaches: a credit card as a reducing balance loan with a limit you can borrow again (interest on the balance owed, repayments reduce it, new purchases add to it), shown in two months of the i13 table with a "New purchases" column; comparing a card's annual rate with a low-rate card, a personal loan and a home loan, as annual rates and as one month's interest on the same balance; the common fees and what triggers each (annual fee, late payment fee, cash advance fee, foreign transaction fee, over-limit fee, balance transfer fee); the interest-free period (up to about 55 days on purchases, only if the whole closing balance is paid by the due date; never on cash advances). Stops at the meaning of rates, fees and the interest-free period. Not taught: daily compound interest (i17a); reading a statement and the minimum payment (i17b); choosing a card or a loan for a goal (i18); balance transfer analysis (not a 2024 point).

## Decisions

- **Anchor: a first credit card (painted plate, live).** A plain, unbranded card with a $3,000 limit and $2,000 owing. Two months in the i13 table at an example 21% a year, worked as 1.75% a month for this video only (scene 2 says "most cards actually charge by the day; that's next video"): month 1: $2,000.00, interest $35.00, repayment $500, new purchases $300, end $1,835.00; month 2: $1,835.00, $32.11, $500, $150, end $1,517.11. Money; the pack's anchor 1, with the table from i13 so the headers carry the explanation.
- **Worked example (g01, scene 3): one month's interest on $2,000 at four rates.** Rate ÷ 12 for comparison: standard card 21.74% p.a., $36.23; low-rate card 13.49%, $22.48; personal loan 10.39%, $17.32; home loan 7.05%, $11.75. Framed answer "a standard card costs about 3 times a home loan and 2 times a personal loan". Crossed slip "1.8% a month is less than 7.05% a year, so the card is cheaper" (caption "compare a year with a year").
- **Rates (ruling 5, ruling 32), read 18 November 2026.** RBA statistical table F5, Indicator Lending Rates (October 2026): credit cards standard rate 21.74% p.a., low rate 13.49% p.a.; banks' discounted owner-occupier variable housing rate 7.05% p.a. (https://www.rba.gov.au/statistics/tables/xls/f05hist.xlsx). RBA table F8, Personal Lending Rates (September 2026): new fixed-rate personal term loans 10.39% p.a. (https://www.rba.gov.au/statistics/tables/csv/f8-data.csv). Moneysmart, "Choosing a credit card": interest-free days "only apply if you pay the full balance by the due date" (https://moneysmart.gov.au/credit-cards/choosing-a-credit-card). On screen: a 30 px source line under the ladder, "RBA tables F5 (Oct 2026) and F8 (Sept 2026)", and the sentence "these rates change" said once.
- **Fees (original teaching, MS-30).** Each fee is named with what triggers it; no dollar amounts in teaching. Annual fee (for having the card, once a year); late payment fee (the minimum not paid by the due date); cash advance fee (taking cash, with interest from that day); foreign transaction fee (a purchase in another currency or from an overseas business); over-limit fee (going over the limit, on cards that allow it); balance transfer fee (moving a debt from another card). Attempt 1's fee amounts are invented and labelled.
- **Interest-free period.** A 30-day statement period, then about 25 days to the due date: a purchase on day 1 gets up to about 55 days, a purchase on day 29 about 26 days (site card 05). Pay the whole closing balance by the due date and purchases cost no interest; pay less, and on most cards interest is charged from each purchase's date (site card 05; Moneysmart). Cash advances never get interest-free days.
- **Site corrections.** None in the parts used. MS-30 (gap) is filled by original teaching. The site's balance transfer analysis (and MS-23) stays out; the balance transfer fee is named once as a fee.
- **Responsible framing (pack decision).** Said once, plainly, in scene 5: paying the whole closing balance by the due date means purchases cost no interest; carrying a balance costs about 20% a year, roughly twice a personal loan and three times a home loan.
- **Join.** Scene 1 opens on i15's final frame exactly (also i14's right panel). Scene 13 is i17a's opening frame.
- **Standard 1 completeness.** The only arithmetic is a percentage of a balance and rate ÷ 12; both courses share every scene and both attempts.
- **Simulations (standard item 3).**
  1. **Card table with new purchases** (scene 2; `ReducingBalanceTable` in its "new purchases" mode): two rows build with the carry-down arrow, the new purchases cell adding (ink "+"), and a credit-limit bar beside the table filling and emptying as the balance changes.
  2. **Rate ladder** (scene 3; new `RateLadder`): four horizontal bars grow to their annual rates on one scale, then each sprouts its month's interest on $2,000 as an amber coin-stack chip; the card's stack is about three times the home loan's.
  3. **Statement-cycle timeline** (scene 5; `PeriodTimeline`): a 30-day bar and a 25-day bar to the due date; a purchase marker slides from day 1 to day 29 while an "interest-free days" readout counts down from 55 to 26; a second run shows the closing balance part-paid: the interest-free bracket cracks and amber interest ticks start at the purchase date.
- **Colour roles (fixed for i12 to i18).** Balance owed **blue**; interest **amber**; repayment **violet**; new purchases **dark ink**; fees **amber with a stamp outline**; the interest-free bracket **teal**; answer **green**; mistake **red**, crossed slips only. The rate ladder's card bars are blue, the loan bars grey-blue.
- **Large type, handwritten voice.** Table cells 40 px; ladder labels 40 px and values 44 px; fee tags 40 px; timeline labels 36 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "the loan's columns + new purchases", "new purchases add", "a limit you can reuse", "per year vs per year", "about 3 times", "for having the card", "missed the due date", "cash: interest from day 1", "overseas", "over the limit", "up to 55 days", "only 26 days", "pay it ALL by the due date", "bracket broken". At most two live at once.
- **Stage changes (standard item 2).** i15's frame and the card (1); the card table, two months (2); the g01 board with the rate ladder (3); fee tags flying to their triggers (4); the statement-cycle timeline (5); framed card (6); question cards (7 to 10); the television and broken bracket for i17a (11); key notes (12).
- **Memory aid.** Framed card: "Pay the whole closing balance by the due date: no interest on purchases." Key line: "A card is a loan you can keep borrowing on."
- **Visual surprise.** In scene 5 the purchase marker slides from day 1 to day 29 and the interest-free readout falls from 55 to 26 days, so the same card gives very different free days by purchase date; then a part payment cracks the bracket.
- **Plain meanings at first use.** Credit card ("a card that lets you borrow up to a limit and pay it back later"); credit limit ("the most you can owe"); new purchases ("what you buy on the card this month"); fee ("a set charge for something you did, on top of interest"); cash advance ("taking cash out using the credit card"); statement ("the monthly summary of what you owe"); closing balance ("what you owe at the end of the statement period"); due date ("the day the payment must arrive"); interest-free period ("the days a purchase costs no interest, if the whole closing balance is paid by the due date").
- **Attempts (original, HSC style; the pack's two questions, fees labelled invented).** A1: a card's terms (purchase 20.99%, cash advance 21.99% from the day of withdrawal, up to 55 interest-free days, annual fee $99, late fee $20, foreign transaction fee 3%): the fee on $2,400 overseas accommodation; whether paying $2,000 of a $2,472 closing balance avoids interest; why $200 cash costs more than a $200 purchase; crossed "no interest: she paid most of it" (caption "the WHOLE closing balance"). A2: $5,000 owed on a card at 20.99%, a personal loan at 12% and a car loan at 7%: one month's interest each (rate ÷ 12) and why a card is a reducing balance loan; crossed "$5,000 × 0.2099 = $1,049.50 a month" (caption "that's a year: divide by 12").
- **Mistake scene:** none separate. Monthly against annual rates (3 crossed); "interest-free means never any interest" (5, said); "paying most keeps the free days" (A1 crossed); cash advances with free days (4, 5; A1 (c)); an annual rate used for a month (A2 crossed).
- **Cause chain taught, in order:** (1) a card charges interest only on what is owed, repayments reduce it and new purchases add to it, so it is a reducing balance loan you can borrow on again (2); (2) its annual rate is about three times a home loan's, so the same balance costs about three times as much interest (3); (3) fees are set charges triggered by things you do (4); (4) a purchase early in the statement period waits longer for the due date, so it gets more free days (5); (5) the free days are conditional on paying the whole closing balance by the due date, so part-paying brings interest back, from the purchase date on most cards (5).
- **Entry knowledge (route):** i13 (interest on the balance owing; the period table); i12 (comparing on cost; BNPL fees); Year 11 m03 (fees on buy now, pay later). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i17a, "How is credit card interest charged by the day?").** Scene 11: the television plate `ms12-television-v1.png` (about 800 px wide) at the left with a coded card, 40 px: "TV: $2,000 on the card", "19.99% a year", "not paid in full by the due date"; at the right the statement-cycle timeline from scene 5 with the bracket broken and amber interest ticks (30 small ticks) from the purchase date, a "?" over them; chips "how much interest, day by day?", "Next: daily interest" and "?". No interest amount is shown. This is i17a's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Card table at 1.75% a month (21% ÷ 12, example): 2,000 × 0.0175 = 35.00; 2,000 + 35 − 500 + 300 = 1,835.00; 1,835 × 0.0175 = 32.1125 → 32.11; 1,835 + 32.11 − 500 + 150 = 1,517.11.
  (b) Month's interest on $2,000 at rate ÷ 12: 21.74%: 36.2333 → 36.23; 13.49%: 22.4833 → 22.48; 10.39%: 17.3167 → 17.32; 7.05%: 11.75. Ratios 21.74 ÷ 7.05 = 3.08; 21.74 ÷ 10.39 = 2.09. RBA F8 also gives 18.91% on card balances incurring interest (month's interest $31.52); not used on screen, to keep four bars.
  (c) The slip "1.8% a month": 21.74 ÷ 12 = 1.81.
  (d) A1: 3% × 2,400 = 72.00. A2: 5,000 × 0.2099 ÷ 12 = 87.4583 → 87.46; 5,000 × 0.12 ÷ 12 = 50.00; 5,000 × 0.07 ÷ 12 = 29.1667 → 29.17; slip 5,000 × 0.2099 = 1,049.50.
  (e) Pronunciations: "twenty-one point seven four per cent"; "thirty-six dollars twenty-three"; "one thousand five hundred and seventeen dollars eleven".

Main question: *A first credit card has $2,000 owing. Why is it a reducing balance loan, how does its rate compare with other loans, and what do its fees and interest-free period mean?*
Entry knowledge (i13, i12; Year 11 m03): interest on the balance owing; comparing on cost; fees.
Stops after: a card as a reducing balance loan, the rate comparison, the fees and the interest-free period. No daily interest calculation, no statement, no minimum payment.
Handoff: math-s12-i17a: "a $2,000 television on the card, not paid in full: how much interest, day by day?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest amber; repayment violet; new purchases dark ink; fees amber stamp; interest-free teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a loan you can borrow again
> Here's a plain credit card. A credit card lets you borrow up to a limit, and pay it back later. This one has a limit of three thousand dollars, and right now two thousand dollars is **owing**. Unlike a car loan, you can keep spending on it while you pay it off. Lots of adults have one, and it can be the cheapest way to pay, or one of the dearest. So why is a credit card a reducing balance loan, and what do its fees and interest-free period **mean**?

Visual: opens on i15's final frame exactly (the card plate, the empty table with "New purchases" ringed, chips). On the first sentence the "Next" chip fades and the card plate moves to the left third at about 800 px. On "up to a limit" a blue limit bar appears under the card, "limit $3,000", hand tag "a limit you can reuse". On "owing" the bar fills to two-thirds, "owing $2,000" (blue). On "keep spending" a small ink "+" chip "new purchases" taps the bar. On "mean" heading "Credit cards" writes on, and the question chip "Why is it a loan? What do fees and free days mean?" moves to the top right.

### 2. a reducing balance loan you can add to
> Look at the columns. They're the loan table's columns, with new purchases added. Say this card charges twenty-one per cent a year, so about one point seven five per cent a month. Most cards actually work it out by the day, and that's next video. Month one starts at two thousand dollars. The interest is thirty-five dollars, on what's owed. A repayment of five hundred comes off, and three hundred of new purchases goes on, so it ends at one thousand eight hundred and thirty-**five**. Month two starts there. The interest is thirty-two eleven, five hundred comes off, a hundred and fifty goes on, and it ends at one thousand five hundred and seventeen dollars **eleven**. Interest only on what's owed, and repayments reduce it. That's a reducing balance loan, one you can keep **adding** to.

Visual: stage change: the plate shrinks to a 300 px badge at the top left. The `ReducingBalanceTable` in "new purchases" mode (1,500 × 420 px), headers 32 px: "Month", "Balance at start" (blue), "Interest" (amber), "Repayment" (violet), "New purchases" (ink), "Balance at end" (blue); hand tag "the loan's columns + new purchases". A chip "21% a year ÷ 12 ≈ 1.75% a month (example)" and a grey chip "next video: interest by the day". Row 1 builds, 44 px: "$2,000.00", "2,000 × 0.0175 = $35.00", "−$500.00", "+$300.00" (hand tag "new purchases add"); on "five" (first bold) "$1,835.00". The end cell flies down to row 2: "$32.11", "−$500.00", "+$150.00"; on "eleven" "$1,517.11". The limit bar beside the table rises and falls with each step. On "adding" grey chips "i13: interest only on what's owed" and "+ new purchases".

### 3. worked example: comparing the rates
> So how dear is a card's interest? Here's a fair comparison. Find one month's interest on two thousand dollars at four typical rates. These are recent averages from the Reserve Bank, and they change, so treat them as a snapshot. A standard card is twenty-one point seven four per cent a year. Divide by twelve for a month, and times two thousand is thirty-six dollars twenty-**three**. A low-rate card, twenty-two forty-eight. A personal loan, seventeen thirty-two. A home loan, eleven seventy-**five**. So the same balance on a standard card costs about three times a home loan's interest, and twice a personal loan's. Calling the card cheaper because it says one point eight per cent a month is the slip. That's a month against a year. Compare a year with a **year**.

Visual: clear change to the g01 board. Task strip, 44 px: "$2,000 is owed. Using the annual rate ÷ 12, find one month's interest at each rate and compare." Givens card, 40 px: "standard card 21.74% p.a.", "low-rate card 13.49% p.a.", "personal loan 10.39% p.a.", "home loan 7.05% p.a.", and a 30 px source line "RBA tables F5 (Oct 2026) and F8 (Sept 2026)"; a grey chip "rates change". The rate ladder (simulation 2) at the right 60 per cent: four horizontal bars on a 0% to 25% scale, card bars blue, loan bars grey-blue. Rows, 44 px: "2,000 × 0.2174 ÷ 12"; on "three" "= $36.23" (amber chip at the card bar's end); then "$22.48", "$17.32"; on "five" "$11.75", each as an amber coin-stack chip. Framed answer (green): "standard card ≈ 3 × home loan, ≈ 2 × personal loan", hand tag "about 3 times". On "year" (last bold) a red slip "1.8% a month < 7.05% a year, so the card is cheaper" writes and is crossed (caption "compare a year with a year"), hand tag "per year vs per year".

### 4. fees and charges
> On top of interest, cards can charge fees. A fee is a set charge for something you did. There's an annual fee, just for having the **card**. A late payment fee if the payment misses the due **date**. A cash advance fee for taking cash out with the card, and interest on that cash starts the same **day**. A foreign transaction fee on purchases in another currency, or from an overseas **business**. An over-limit fee if you go past your limit, and a balance transfer fee for moving a debt from another card. Each fee has a trigger, so you can usually avoid it.

Visual: stage change: the card plate at about 700 px at the centre, with coded event icons around it on a ring (a calendar page, a due-date flag, the ATM plate `ms12-atm-v1.png` at about 360 px, a globe-and-coin chip, the limit bar, a second card outline). Fee tags (amber stamps, 40 px) fly from the card to their triggers as spoken: on "card" "annual fee" to the calendar page, hand tag "for having the card"; on "date" "late payment fee" to the due-date flag, hand tag "missed the due date"; on "day" "cash advance fee" to the ATM, with an amber "interest from day 1" tick, hand tag "cash: interest from day 1"; on "business" "foreign transaction fee" to the globe chip, hand tag "overseas"; then "over-limit fee" to the limit bar overflowing, hand tag "over the limit", and "balance transfer fee" to the second card outline. On "Each fee has a trigger" every tag pulses once.

### 5. the interest-free period
> Now the big one, the interest-free period. Purchases are collected over a statement period, say thirty days. Then you get about twenty-five more days until the due date. Buy something on day one, and it can go up to fifty-five days without **interest**. Buy it on day twenty-nine, and it only gets about twenty-six **days**. But here's the condition. You must pay the whole closing balance, everything the statement says you owe, by the due date. Pay less, and on most cards interest is charged on those purchases from the day you bought them, and cash advances never get free days at **all**. So pay it all by the due date, and a card costs no interest. Carry a balance, and it's about twenty per cent a year, roughly twice a personal loan.

Visual: clear change to the statement-cycle timeline (simulation 3; 1,600 px wide): a 30-day bar "statement period" and a 25-day bar "to the due date", a flag "due date" at day 55. A purchase marker (ink) at day 1 with a teal bracket from it to the due date; on "interest" the readout "interest-free: up to 55 days" (teal, 52 px), hand tag "up to 55 days". The marker slides to day 29, the bracket shrinking and the readout counting down; on "days" "about 26 days", hand tag "only 26 days". On "condition" a chip "closing balance: what you owe at the end of the period" and a teal stamp "pay it ALL by the due date", hand tag "pay it ALL by the due date". On "Pay less" a second run: a part-payment chip "paid part of it" lands at the due date; the teal bracket cracks, hand tag "bracket broken", and amber interest ticks run from the purchase date. On "all" an ATM chip with amber ticks from its first day. On "Carry a balance" a strip, 40 px: "carrying a balance: about 20% a year ≈ 2 × a personal loan".

### 6. memory aid
> Here's the summary. A credit card is a loan you can keep borrowing on. Pay the whole closing balance by the due date, and purchases cost no interest. Leave some unpaid, and the interest **comes back**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the timeline small with the teal bracket intact. Main line, hand font 52 px: "Pay the whole closing balance by the due date: no interest on purchases." On "comes back" the key line, 40 px: "A card is a loan you can keep borrowing on." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A credit card has the terms shown. Ella pays two thousand four hundred dollars for accommodation overseas with this card. What fee is charged on this purchase? Her closing balance is two thousand four hundred and seventy-two dollars, and she pays two thousand by the due date. Will she be charged interest? Explain. And why does withdrawing two hundred dollars cash cost more than buying a two hundred dollar item? Pause here to answer.

Visual: `QuestionCard`, 38 px, worded as printed: "A credit card has these terms: purchase rate 20.99% p.a.; cash advance rate 21.99% p.a., charged from the day of the withdrawal; up to 55 interest-free days on purchases; annual fee $99; late payment fee $20; foreign transaction fee 3% of the purchase. (a) Ella pays $2,400 for accommodation overseas with this card. What fee is charged on this purchase? (b) Her closing balance is $2,472 and she pays $2,000 by the due date. Will she be charged interest? Explain. (c) Explain why withdrawing $200 cash with this card costs more than buying a $200 item with it." A 26 px grey line: "Fees are invented for this question." The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> The foreign transaction fee is three per cent of two thousand four hundred, seventy-two **dollars**. Yes, she'll be charged interest. The free days only apply if the whole closing balance is paid, and two thousand isn't enough. The cash has no free days, so interest starts that day, at a higher rate, and there may be a cash advance fee. Saying she paid most of it is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "3% × $2,400"; on "dollars" "= $72.00" (framed green). Row: "(b) Yes: $2,000 < $2,472, so no interest-free days" (framed green). Row: "(c) cash: no free days, 21.99% from day 1, plus a fee" (framed green). On "slip" a red slip "no interest: she paid most of it" writes and is crossed (caption "the WHOLE closing balance"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Five thousand dollars is owed on each of three loans: a credit card at twenty point nine nine per cent a year, a personal loan at twelve per cent, and a car loan at seven per cent. Using the annual rate divided by twelve, find the interest charged in one month on each. Then explain why a credit card is called a reducing balance loan. Pause here to answer.

Visual: `QuestionCard`, 40 px: "$5,000 is owed on each of three loans: a credit card at 20.99% p.a., a personal loan at 12% p.a. and a car loan at 7% p.a. (a) Using the monthly rate (annual rate ÷ 12), find the interest charged in one month on each. (b) Explain why a credit card is called a reducing balance loan." Picture slot: three empty bars labelled "card", "personal loan", "car loan". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> One month on the card is eighty-seven dollars forty-six. The personal loan is fifty dollars, and the car loan twenty-nine **seventeen**. It's a reducing balance loan because interest is charged only on what's still owed, and each repayment reduces that, while new purchases add to it. Using the whole year's rate for one month is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "5,000 × 0.2099 ÷ 12 = $87.46", "5,000 × 0.12 ÷ 12 = $50.00"; on "seventeen" "5,000 × 0.07 ÷ 12 = $29.17" (each framed green), the three bars filling. Row: "(b) interest only on what's owed; repayments reduce it; purchases add" (framed green). On "slip" a red slip "5,000 × 0.2099 = $1,049.50 a month" writes and is crossed (caption "that's a year: divide by 12"). Hold about 1 s.

### 11. handoff
> So the interest-free days vanish if you don't pay it all. Here's a two thousand dollar television, bought on a card at nineteen point nine nine per cent a year, and not paid in full by the due date. Interest is now charged every day. How much does it add up to, day by **day**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "television" the plate `ms12-television-v1.png` (about 800 px wide) at the left with a coded card, 40 px, writing as spoken: "TV: $2,000 on the card", "19.99% a year", "not paid in full by the due date". At the right the statement-cycle timeline small, the teal bracket broken, 30 amber interest ticks from the purchase date. On "day" (first bold) a "?" over the ticks. On "next" chips "how much interest, day by day?", "Next: daily interest" and "?". Hold about 2 s. No amount is shown. This is i17a's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Credit card: a reducing balance loan you can keep borrowing on.
- Interest on what's owed; repayments reduce it; purchases add.
- Card about 20% p.a.: about 2 × personal loan, 3 × home loan.
- Fees: annual, late payment, cash advance, foreign transaction.
- Interest-free (up to 55 days): only if the WHOLE balance is paid.

Memory aid (framed card, right side, as in scene 6): *Pay the whole closing balance by the due date: no interest on purchases.* Key: *A card is a loan you can keep borrowing on.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and i17a's opening frame.

## Teaching checks

- **Does it explain causes?** Why a card is a reducing balance loan: interest only on what is owed, reduced by repayments (2). Why it differs from a car loan: new purchases add (2). Why it costs about three times a home loan: the annual rate is about three times as high (3). Why each fee happens: its trigger (4). Why day 1 gets more free days than day 29: it waits longer for the same due date (5). Why part-paying brings interest back: the free days are conditional (5).
- **Misconceptions addressed:** "interest-free means never any interest" (5); "paying most keeps the free days" (A1 crossed); cash advances with free days (4, 5, A1); a monthly rate compared with an annual one (3 crossed); an annual rate used for a month (A2 crossed); a card as free money up to the limit (1, 2).
- **Visual standard, item by item:** 1 the card from the first frame; 2 a new stage every 35 to 60 s; 3 the card table with a live limit bar, the rate ladder with coin stacks, the sliding purchase marker and the cracking bracket; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 55 days falling to 26 as the marker slides.
- **One idea at a time:** the card as a loan (2), rates (3), fees (4), the interest-free period (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A1's terms in full); 10 s each; feedback about 28 s and 25 s.
- **Avoided double teaching:** i13's period table and i12's comparison on cost are recalled in a phrase or chip; daily interest is left to i17a.
- **Standard 1 path:** arrives from i14 and sees the same opening frame as Standard 2; no step uses i15.
- **Syllabus coverage:** `ci213a72e9` and `ci23d33e6f` (2, A2 (b); key notes 1, 2); `ci3480c9ff` and `ci9715d6e5` (3, A2 (a); key note 3); `ci435086e3` and `ci8a052732`, fees (4, A1 (a), (c); key note 4) and the interest-free period (5, A1 (b); key note 5).
- **Out of scope by design:** daily compound interest (i17a); statements and minimum payments (i17b); card or loan for a goal (i18); balance transfer calculations (not a 2024 point; MS-23).

## Practice questions and model answers

**Attempt 1 (scene 7; original, HSC style, 3 marks suggested, not an official marking scheme; fees invented).** "A credit card has these terms: purchase rate 20.99% p.a.; cash advance rate 21.99% p.a., charged from the day of the withdrawal; up to 55 interest-free days on purchases; annual fee $99; late payment fee $20; foreign transaction fee 3% of the purchase. (a) Ella pays $2,400 for accommodation overseas with this card. What fee is charged on this purchase? (b) Her closing balance is $2,472 and she pays $2,000 by the due date. Will she be charged interest? Explain. (c) Explain why withdrawing $200 cash with this card costs more than buying a $200 item with it."
Model answer: (a) 3% × $2,400 = $72.00 (foreign transaction fee). (b) Yes: the interest-free period applies only if the whole closing balance ($2,472) is paid by the due date; $2,000 is not enough. (c) The cash advance has no interest-free days, so interest is charged from the day of the withdrawal, at a higher rate (21.99%), and a cash advance fee may also apply. Classic mistake (crossed): "no interest, she paid most of it".

**Attempt 2 (scene 9; original, HSC style, 3 marks suggested).** "$5,000 is owed on each of three loans: a credit card at 20.99% p.a., a personal loan at 12% p.a. and a car loan at 7% p.a. (a) Using the monthly rate (annual rate ÷ 12), find the interest charged in one month on each. (b) Explain why a credit card is called a reducing balance loan."
Model answer: (a) $5,000 × 0.2099 ÷ 12 = $87.46; $5,000 × 0.12 ÷ 12 = $50.00; $5,000 × 0.07 ÷ 12 = $29.17. (b) Interest is charged only on the balance still owed each period; each repayment reduces that balance, so later interest is charged on less (new purchases add to it). Classic mistake (crossed): "$5,000 × 0.2099 = $1,049.50 a month".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Card | limit $3,000; owing $2,000 | 1 |
| Card table (21% ÷ 12 = 1.75%, example) | 35.00; −500; +300; 1,835.00; 32.11; −500; +150; 1,517.11 | 2 |
| Rates (RBA F5 Oct 2026, F8 Sept 2026) | 21.74%, 13.49%, 10.39%, 7.05%; month on $2,000: 36.23, 22.48, 17.32, 11.75; about 3 × and 2 × | 3, 5 |
| Slip | 21.74 ÷ 12 ≈ 1.8% a month | 3 |
| Interest-free | 30-day period; about 25 days to due; up to 55 days; day 29: about 26 days | 5 |
| A1 | 3% × 2,400 = 72.00; 2,000 < 2,472 | 7, 8 |
| A2 | 87.46; 50.00; 29.17; slip 1,049.50 | 9, 10 |
| Handoff | TV $2,000; 19.99% a year (no amount worked) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the pack's values (`recalc-output.txt`, `practice-output.txt`) agree. Codex to re-check the arithmetic and the four rates against the RBA tables named.

- 2,000 × 0.0175 = 35.00; 2,000 + 35 − 500 + 300 = 1,835.00; 1,835 × 0.0175 = 32.11; 1,835.00 + 32.11 − 500 + 150 = 1,517.11.
- 2,000 × r ÷ 12 for r = 21.74%, 13.49%, 10.39%, 7.05%: 36.23, 22.48, 17.32, 11.75; 21.74 ÷ 7.05 = 3.08; 21.74 ÷ 10.39 = 2.09; 21.74 ÷ 12 = 1.81.
- 3% × 2,400 = 72.00. 5,000 × 0.2099 ÷ 12 = 87.46; 5,000 × 0.12 ÷ 12 = 50.00; 5,000 × 0.07 ÷ 12 = 29.17; 5,000 × 0.2099 = 1,049.50.
- 30 + 25 = 55 days; a purchase on day 29 of a 30-day period: 1 + 25 = 26 days.

## Memory aid check

- **"Pay the whole closing balance by the due date: no interest on purchases."** with key line **"A card is a loan you can keep borrowing on."** Original. Meaning, as said in scene 6: the interest-free period on purchases holds only when the entire closing balance is paid by the due date; otherwise interest is charged, and the card behaves like any reducing balance loan whose balance can also grow with new spending. Assumptions checked: the card has an interest-free period on purchases (most do; some low-rate cards have none, which the "Pay less" sentence covers by saying "on most cards"); cash advances are excluded (said in scene 5); fees such as an annual fee may still apply even when no interest is charged (scene 4). It helps a new case: a $640 closing balance paid as $600 by the due date loses the free days. Introduced after scenes 2 to 5.
- **Considered, not used:** "All by the date, or interest at a rate" (rhymes, but "at a rate" is vague).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,335 characters** (Revision 2; Revision 1: 5,292), 12 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 401 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the card table (2), the rate ladder (3), the fee tags (4) and the timeline runs (5) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 500 s (8 min 20 s)**, 70 s under the 570 s cap. Feedback speech: about 28 s and 25 s.

Reserve trims if the voiced take runs long: scene 1's "Lots of adults have one, and it can be the cheapest way to pay, or one of the dearest." (keep if possible: the why-it-matters line); scene 4's "Each fee has a trigger, so you can usually avoid it."

## Scene list and build ids

Lesson key `m-s12i16` (route math-s12-i16). Explainer folder `src/explainer/lessons/math-s12-i16`; build inputs in `docs/production/claude-pm/lessons/math-s12-i16/` (at voicing).

In order (12 scene headings): hook-first-card, card-as-loan, worked-rate-ladder, fees-and-charges, interest-free-period, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | i15's frame; the card and its limit bar |
| 35 to 100 s | 2 | The card table, two months |
| 100 to 165 s | 3 | g01 board: the rate ladder |
| 165 to 215 s | 4 | Fee tags to their triggers |
| 215 to 280 s | 5 | The statement-cycle timeline |
| 280 to 300 s | 6 | Framed memory card |
| 300 to 400 s | 7 to 10 | Question cards and countdowns, then feedback |
| 400 to 425 s | 11 | The television and the broken bracket for i17a |
| 425 to 470 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i15's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 clear change to the timeline; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i16-learning-review.md`, `science_check` = `checks/m-s12-i16-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma11-gym-membership-card-v1.png` and `ma11-travel-card-v1.png` (both cards with their own meaning; not reused as a credit card); `ma12-card-texture-v1.png` (a texture, not a card); `ma12-loan-statement-v1.png` (not needed). No credit card or ATM plate exists.

Need (painted, new; see the Codex asset brief): `ms12-credit-card-v1.png` (also on i14's and i15's final frames, so paint it before the i14 build; reused in i17a, i17b and i18), `ms12-atm-v1.png`. The final frame uses `ms12-television-v1.png`, briefed in `math-s12-i17a.md`.

Coded: the card table and limit bar, the rate ladder and coin-stack chips, the fee tags and trigger icons (except the ATM), the timeline, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `ReducingBalanceTable` (i13), `PeriodTimeline`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i16):
1. **RateLadder** (new, small; reused by i18): labelled horizontal bars for annual rates on one scale, each with one period's interest on a chosen balance beside it as a chip, and a source line underneath. Check: 21.74%, 13.49%, 10.39%, 7.05% on $2,000 give 36.23, 22.48, 17.32, 11.75.
2. **ReducingBalanceTable "new purchases" mode:** a sixth column that adds, with a limit bar. Check: the two rows end at 1,835.00 and 1,517.11.
3. **PeriodTimeline statement cycle:** a sliding purchase marker with a counting "interest-free days" readout and a bracket that cracks on a part payment. Check: day 1 gives 55, day 29 gives 26.

## Codex asset brief (Maths S12 I16, a plain credit card and an ATM; the card also on i14's and i15's final frames)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i16.md`, route entry math-s12-i16. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i14 build (i14's final frame uses the card). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-travel-card-v1.png` and `maths/ma12-calculator-v1.png`; no text, numbers, logos, brand names, network marks, card numbers, names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch. These must not look like any real bank's card or machine.

1. `ms12-credit-card-v1.png` (about 1400 × 900 px): a plain credit card at a slight angle, deep teal with a subtle diagonal sheen, a gold contact chip at the left, a blank raised strip where numbers would be (no digits), rounded corners. It must read as a credit card at 300 px.
2. `ms12-atm-v1.png` (about 900 × 1300 px): a free-standing cash machine in front view, grey metal housing, a blank screen with a soft glow only on the screen, a keypad with blank keys, a card slot and a cash slot; no lettering or logos.

Report inspection on the paper background (`#f6f1e7`) at 800 px, 420 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i16-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Re-check the four rates and their months against RBA F5 (October 2026) and F8 (September 2026) as published on the day of the check; report any change (the design says "rates change").
3. Confirm the six syllabus quotes match the route-inputs JSON exactly, including "understand" (Standard 2) and "explain" (Standard 1).
4. Confirm the fees are named with triggers and no dollar amounts in teaching, and that attempt 1 labels its fees as invented.
5. Confirm the interest-free condition is stated as the whole closing balance by the due date, and cash advances are excluded.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm scene 1 opens on i15's final frame and scene 11 shows no interest amount.
8. Confirm no em dash (U+2014), Australian spelling, no real card branding, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Credit Cards: Interest Rates, Fees and Interest-Free Periods | Year 12 Maths Standard

(Title length: 85 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson10.sa.html

A first credit card with $2,000 owing. See why a credit card is a reducing balance loan you can keep borrowing on: interest on what you owe, repayments that reduce it, and new purchases that add to it. Compare a card's rate with a low-rate card, a personal loan and a home loan, as yearly rates and as one month's interest on $2,000. Learn the common fees and what triggers each, and what an interest-free period really means: up to about 55 days, but only if you pay the whole closing balance by the due date. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Rates are Reserve Bank of Australia averages (tables F5, October 2026, and F8, September 2026) and change over time.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Explain how credit cards are an example of a reducing balance loan"
"Compare credit card interest rates with interest rates for other loan types"
"Identify the various fees and charges associated with credit card usage, and understand the meaning of an interest-free period"
Syllabus content, Standard 1:
"Explain how credit cards are an example of a reducing balance loan"
"Compare credit card interest rates with interest rates for other loan types"
"Identify the various fees and charges associated with credit card usage, and explain the meaning of an interest-free period"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Reducing Balance Loans: Tables and Spreadsheets. Next: Credit Card Interest by the Day: Daily Compound Interest.

#Year12Maths #MathsStandard #CreditCards #HSCScience

## Open decisions

- **1. Monthly rate in scene 2 (root).** The card table uses 21% ÷ 12 = 1.75% a month so the i13 table carries over, and says once that cards really work it out by the day (i17a). Confirm, or use one month of daily compounding (more accurate, but it would pre-teach i17a).
- **2. Four bars, not five.** RBA F8's 18.91% (card balances actually incurring interest) is left off the ladder to keep one card bar per product; scene 5's "about twenty per cent a year" covers it. Confirm.
- **3. Fee list.** Six fees are named; the key notes keep four. The over-limit and balance transfer fees are named once only. Confirm.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i14 for a Standard 1 student who has not seen i15; check that "closing balance" and "due date" land before the condition, that the sliding purchase marker shows why free days vary, that the cracked bracket makes "pay it all" a cause and not a rule, that the fee scene is followable without amounts, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
