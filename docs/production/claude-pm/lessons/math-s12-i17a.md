# Maths S12 I17a: How is credit card interest charged by the day? Daily compound interest on a purchase or balance for a given number of days, by calculator and in a spreadsheet (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`; ruling 29 splits the outline's i17 into i17a, daily compound interest, and i17b, the statement and the minimum payment). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,086 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 478 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i17a-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scenes 3, 4, feedback 1, card and notes (r means the daily rate on screen and the yearly rate in the notes): **accepted** (root decision 4: r is the yearly rate in the notes, and the daily step is shown). The daily rate is now written in words wherever it is a value: scene 3 keeps "FV = PV(1 + r)ⁿ" with the grey chip "i02: r is the rate per period", then "daily rate = 0.1999 ÷ 365" and "n = 30 (days)". Scene 4's row is "daily rate = 0.2149 ÷ 365" and "n = 42 days", and feedback 1's is "daily rate = 0.1999 ÷ 365, n = 25 days". The card keeps "I = P(1 + r ÷ 365)^days − P" with a line under it: "r = yearly rate as a decimal; r ÷ 365 = daily rate". Key note 1 is "r = yearly rate as a decimal; daily rate = r ÷ 365", and note 5 says "with r typed as the yearly rate". The narration already said "daily rate" in words and is unchanged.
2. Optional, feedback 1 ("minus the one eight five oh"): **applied**. "minus the eighteen fifty".

Narration 5,086 characters by script (Revision 1: 5,089), about 478 s with holds, 92 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 30 (first half, root ruling 29), Investment and loans (Credit cards). Shared by Standard 1 and Standard 2: both calculate daily compound interest with the compound interest formula from i02, using the yearly rate ÷ 365 and the number of days; Standard 2 also does it "with and without using digital tools" (the spreadsheet scene, tagged "Standard 2") and names "a purchase". Pre-design pack: `../pre-design/maths-standard/math-s12-i17.md` (the "i17a" half of its suggested split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson10.sa.html` (SHA256 `9dfbd06d389ddb8e49b8223ac80ece3589e8950fa990e7486dbf0753bf9253c5`; card 05's $2,000 at 19.99% for 30 days, Trap 01). Site correction MS-20: the site teaches simple daily interest; the syllabus asks for compound, so this design teaches compound and names simple once as the method a question might specify. Route entry: `math-s12-i17` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; one new painted plate (a television); the credit card and calculator plates reused; the day counter, working and spreadsheet coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, no real bank branding, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (shopping: a television on a card), Australian spelling, no em dashes, money spoken naturally, conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Investment and loans, Credit cards):
- `ci13e98315`: "Calculate the compound interest charged on a purchase, transaction or outstanding balance for a given number of days, with and without using digital tools"

Standard 1 (Depreciation and loans, Credit cards):
- `ci2dbee6b0`: "Calculate the compound interest charged on a transaction or outstanding balance for a given number of days"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i16's final frame exactly (the television plate with the card "TV: $2,000 on the card", "19.99% a year", "not paid in full by the due date"; the statement-cycle timeline with the teal bracket broken and 30 amber interest ticks; a "?" over the ticks; chips "how much interest, day by day?", "Next: daily interest", "?"). Recalls i16 (the interest-free period is lost if the whole closing balance is not paid) and i02 (FV = PV(1 + r)^n; compound interest = FV − PV) in a phrase or grey chip each. Teaches: the daily rate as the yearly rate ÷ 365; compounding daily (each day's interest is added, and the next day's interest is charged on the new total); I = P(1 + r ÷ 365)^n − P with n the number of days, by calculator; the same in a spreadsheet, one row per day, filled down (Standard 2's digital tool); why compound and simple daily answers differ by a few cents, and that the question says which method. Stops at interest for a given number of days. Not taught: reading a statement, the minimum payment and its cost (i17b); effective annual rates (beyond the syllabus, ruling 33); counting days between dates (questions state the number of days).

## Decisions

- **Anchor: a $2,000 television on a card (painted plate, live).** The site's card 05 numbers: $2,000 at 19.99% p.a. for 30 days. Daily rate 0.1999 ÷ 365 (one day's interest about $1.10); compounded daily, the balance after 30 days is $2,033.12, so the interest is $33.12 (MS-20: the site's simple figure was $32.85 from rounding the daily amount first; exact simple is $32.86). Day readouts: day 1 $2,001.10; day 2 $2,002.19; day 10 $2,010.98; day 20 $2,022.02; day 30 $2,033.12. The site's hook used a $2,000 television with wrong 9-year figures (MS-19); this design uses the television only for daily interest and teaches no repayment time from it.
- **Worked example (g01, scene 4): a $640 car service on a card at 21.49% p.a. for 42 days.** I = 640(1 + 0.2149 ÷ 365)^42 − 640 = $16.02 (balance $656.02). Original numbers. Crossed slip "640 × (1 + 0.2149 ÷ 12)^42 − 640" (caption "42 days: divide by 365", the site's Trap 01).
- **Simple against compound (scene 5).** $2,000 × 0.1999 ÷ 365 × 30 = $32.86 simple against $33.12 compound: a 26-cent difference over 30 days. One sentence says some cards work out a daily amount and add it monthly, and that the question tells you which method; this course's syllabus asks for compound.
- **Spreadsheet (scene 6, Standard 2's digital tool, open to everyone).** Column A day 0 to 30, column B balance; B2 = 2000; B3 = B2*(1+0.1999/365), filled down; B32 = 2,033.12; interest cell = B32 − B2 = 33.12. The same grid as i13's, so the fill-down idea is recalled, not retaught.
- **Rates (ruling 5, ruling 32), read 18 November 2026.** 19.99% to 21.49% sit within current card rates: RBA statistical table F5, Indicator Lending Rates (October 2026): credit cards standard rate 21.74% p.a. (https://www.rba.gov.au/statistics/tables/xls/f05hist.xlsx); RBA F8 (September 2026): card balances incurring interest averaged 18.91% p.a. (https://www.rba.gov.au/statistics/tables/csv/f8-data.csv). Said once in scene 1: "an example rate; card rates change".
- **Site corrections.** MS-20 (simple daily interest where the syllabus asks for compound): corrected by teaching compound and labelling simple. MS-19 (the hook's figures): not used. The effective annual rate on card 05 is beyond the syllabus (ruling 33) and stays out.
- **Join.** Scene 1 opens on i16's final frame exactly. Scene 11 is i17b's opening frame.
- **Standard 1 completeness.** The calculator method (scenes 2 to 5) serves both courses, with the rate per day and the number of days given. The spreadsheet scene is tagged "Standard 2: with digital tools" and needs nothing Standard 1 lacks; attempt 2 is a spreadsheet reading question that Standard 1 can answer from scene 6.
- **Simulations (standard item 3).**
  1. **Day counter** (scene 3; `StudioTermLadder` as a day ladder, or a counter chip): a blue balance chip grows by "× (1 + 0.1999 ÷ 365)" at each tick, 30 ticks in a row along the broken-bracket timeline, with a running readout "day n" and "balance $" (52 px), slow for days 1 and 2 and fast for 3 to 30; each day's amber interest sliver is slightly thicker than the last.
  2. **Calculator entry** (scenes 3, 4; the calculator plate `ma12-calculator-v1.png` with a coded key strip): the one-line entry types key by key into the plate's screen and the answer appears.
  3. **Spreadsheet fill** (scene 6; `SpreadsheetGrid`): B3's formula fills down 30 rows in about 2 s, B32 ringing at 2,033.12.
- **Colour roles (fixed for i12 to i18).** Balance owed **blue**; interest **amber**; the yearly rate and daily rate **amber outline**; days **violet**; answer **green**; mistake **red**, crossed slips only. Simple interest (scene 5) is **grey**.
- **Large type, handwritten voice.** Working rows 44 px (the current line 52 px); counter readouts 52 px; calculator screen text 40 px; spreadsheet cells 40 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "per year ÷ 365 = per day", "added, then charged on", "× the same each day", "i02's formula, by the day", "take away the start", "42 days: ÷ 365", "a few cents", "the question says which", "one row per day", "fill down 30 days". At most two live at once.
- **Stage changes (standard item 2).** i16's frame and the television (1); the daily rate and day 1 (2); the day counter and the formula (3); the g01 board with the calculator (4); simple against compound (5); the spreadsheet (6); framed card (7); question cards (8 to 11); the statement for i17b (12); key notes (13).
- **Memory aid.** Framed card: "Daily rate = yearly rate ÷ 365. Grow it for the days, then take away the start." Key line: "I = P(1 + r ÷ 365)^days − P", defined under it: "r = yearly rate as a decimal; r ÷ 365 = daily rate". On every screen before the card, the daily rate is written in words ("daily rate = 0.1999 ÷ 365"), never as r, so r has one meaning in the video and in the notes (Revision 2, learning review finding 1).
- **Visual surprise.** In scene 3 the day counter's interest slivers each come out a fraction thicker than the day before, then the 30 slivers stack into $33.12, more than 30 times the first day's $1.10.
- **Plain meanings at first use.** Daily rate ("the yearly rate shared over 365 days"); compounded daily ("each day's interest is added on, and the next day's interest is charged on the new total"); outstanding balance ("what's still owed on the card"); transaction ("one purchase or cash withdrawal").
- **Attempts (original, HSC style).** A1 (the pack's question 1): $1,850 at 19.99% compounded daily for 25 days: $25.50; crossed "1850 × 0.1999 × 25" (caption "the rate is per year: divide by 365"). A2 (original, Standard 2 style, a spreadsheet extract): $900 at 21.49% compounded daily; B3 = B2*(1+0.2149/365) filled down from day 0; what B3's formula does, and the interest after 14 days given B16 = 907.45: $7.45; crossed "interest = $907.45" (caption "that's the balance: take away $900").
- **Mistake scene:** none separate. ÷ 12 when days are given (4 crossed); the yearly rate as the daily rate (A1 crossed); the balance given as the interest (A2 crossed); simple used when compound is asked (5, said).
- **Cause chain taught, in order:** (1) a yearly rate shared over 365 days gives the rate for one day (2); (2) each day's interest is added to the balance, so the next day's interest is charged on a slightly bigger amount, which is compounding (2, 3); (3) multiplying by the same factor each day for n days is i02's FV = PV(1 + r)^n with r a daily rate (3); (4) the interest is what the balance grew by, so subtract the start (3, 4); (5) simple interest never charges interest on interest, so it is a few cents less (5); (6) a spreadsheet repeats the one-day step down 30 rows (6).
- **Entry knowledge (route):** i02 (FV = PV(1 + r)^n; compound interest = FV − PV; Standard 1 has the same); i16 (interest-free period lost if part-paid); a04b and i13 (fill down). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i17b, "What does a credit card statement tell us, and what does paying only the minimum cost?").** Scene 12: the television plate (about 600 px wide) at the left, the card plate `ms12-credit-card-v1.png` small beside it; at the right a coded, unbranded statement (`CreditCardStatement`, 900 × 760 px) sliding in with its field labels only ("Statement period", "Opening balance", "Purchases", "Payments", "Interest", "Fees", "Closing balance", "Minimum payment", "Due date", and an empty box "Minimum repayment warning"), every value blank; chips "what's on the statement?", "Next: the statement and the minimum payment" and "?". This is i17b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 0.1999 ÷ 365 = 0.000547671...; 2,000 × that = 1.0953 (one day). (1 + 0.1999/365)^30 = 1.016561...; 2,000 × that = 2,033.12; interest 33.12. Simple: 2,000 × 0.1999 ÷ 365 × 30 = 32.86. Monthly ÷ 12 (not used): 33.32.
  (b) Day balances: 1: 2,001.10; 2: 2,002.19; 10: 2,010.98; 20: 2,022.02; 30: 2,033.12. Day 45 and 55 (not used): 49.89 and 61.14 of interest.
  (c) $640 at 21.49% for 42 days: 656.02; interest 16.02; simple (not used) 15.83.
  (d) A1: 1,850 × (1 + 0.1999/365)^25 − 1,850 = 25.50; slip 1,850 × 0.1999 × 25 = 9,245.38. A2: 900 × (1 + 0.2149/365)^14 = 907.45; interest 7.45; day 1 balance 900.53.
  (e) Pronunciations: "nineteen point nine nine per cent"; "zero point one nine nine nine divided by three hundred and sixty-five"; "to the power of thirty"; "thirty-three dollars twelve".

Main question: *A $2,000 television on a card at 19.99% a year is not paid in full. How much interest is charged over 30 days, when interest is added every day?*
Entry knowledge (i02, i16, a04b): compound interest FV − PV; the interest-free condition; fill down.
Stops after: daily compound interest by calculator and spreadsheet, with simple interest named as the other method. No statement, no minimum payment.
Handoff: math-s12-i17b: "a credit card statement, every field blank: what's on it?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest amber; rate amber outline; days violet; simple grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: interest every day
> Here's the television, two thousand dollars on a credit card at nineteen point nine nine per cent a year. That's an example rate, and card rates change. The closing balance wasn't paid in full, so the interest-free days are gone, and interest is now charged every single **day**. Most cards work this way. So if it sits there for thirty days, how much interest is that? How is credit card interest charged by the **day**?

Visual: opens on i16's final frame exactly (the television plate with its card, the broken-bracket timeline with 30 amber ticks, the "?", chips). On the first sentence the "Next" chip fades and the plate moves to the left third at about 800 px. On "two thousand dollars" the card's first line pulses; on "nineteen point nine nine" the second, with a grey chip "example rate (RBA F5, Oct 2026: standard cards 21.74% p.a.)". On "not paid in full" a grey chip "i16: pay it ALL by the due date, or interest comes back". On "day" (first bold) the 30 ticks pulse one after another. On "day" (second bold) heading "Credit card interest by the day" writes on, and the question chip "How much in 30 days?" moves to the top right.

### 2. one day's interest
> Start with one day. Nineteen point nine nine per cent is the rate for a whole year. Share it over three hundred and sixty-five days, and the daily rate is zero point one nine nine nine divided by three hundred and sixty-**five**. On two thousand dollars, one day's interest is about a dollar ten. Here's what compounded daily means. That dollar ten is added to the balance, and tomorrow's interest is charged on the new total, two thousand and one dollars **ten**. So each day's interest is a tiny bit bigger than the **last**.

Visual: stage change: the plate shrinks to a 300 px badge at the top left. A year bar (1,500 px) splits into 365 thin slices; on "five" one slice lifts out, row, 52 px: "daily rate = 0.1999 ÷ 365" (amber outline), hand tag "per year ÷ 365 = per day". Row, 44 px: "2,000 × 0.1999 ÷ 365 ≈ $1.10" (amber). On "ten" a blue balance chip "$2,000.00" gains an amber sliver and reads "$2,001.10", hand tag "added, then charged on". On "last" a second sliver, a hair thicker, and "$2,002.19".

### 3. thirty days, one calculation
> Doing that thirty times by hand would be slow. But each day multiplies the balance by the same number, one plus the daily rate. Thirty days is that same multiplication thirty **times**. That's the compound interest formula you already know, with the rate per day and the number of days. So the balance after thirty days is two thousand times one plus zero point one nine nine nine over three six five, to the power of thirty. That comes to two thousand and thirty-three dollars **twelve**. The interest is what it grew by. Take away the two thousand, and it's thirty-three dollars **twelve**.

Visual: camera continue: the day counter (simulation 1) runs along the timeline: the balance chip grows at each of 30 ticks, readouts "day n" and "balance $" (52 px), hand tag "× the same each day"; day 10 "$2,010.98", day 20 "$2,022.02". On "times" the strip, 52 px: "FV = PV(1 + r)ⁿ" with a grey chip "i02: r is the rate per period", then "daily rate = 0.1999 ÷ 365" (amber outline) and "n = 30 (days)" (violet "30"), hand tag "i02's formula, by the day". The letter r is not given a daily value on screen (Revision 2, learning review finding 1: in the card and notes, r is the yearly rate). Rows, 44 px: "2,000 × (1 + 0.1999 ÷ 365)³⁰"; on "twelve" (first bold) "= $2,033.12" (blue). On "twelve" (second bold) "I = 2,033.12 − 2,000 = $33.12" (framed green), hand tag "take away the start". The 30 amber slivers stack into one "$33.12" block beside the first day's "$1.10".

### 4. worked example: a car service
> Here's one to set out. A car service costing six hundred and forty dollars goes on a card at twenty-one point four nine per cent a year, compounded daily. The interest-free period is lost, and interest is charged for forty-two days. Find the interest, to the nearest cent. The daily rate is zero point two one four nine over three six five, and the number of days is forty-**two**. On the calculator, six hundred and forty times one plus that, to the power of forty-two, is six hundred and fifty-six dollars and two **cents**. Take away the six hundred and forty, and the interest is sixteen dollars and two cents. Dividing by twelve is the slip, because twelve is for months. The question gives days, so divide by three hundred and sixty-**five**.

Visual: clear change to the g01 board. Task strip, 44 px: "A $640 car service is charged to a credit card at 21.49% p.a., compounded daily. The interest-free period is lost and interest is charged for 42 days. Calculate the interest, to the nearest cent." Givens card, 40 px: "P = $640" (blue), "21.49% p.a." (amber outline), "42 days" (violet). Rows, 52 px: "daily rate = 0.2149 ÷ 365"; on "two" (first bold) "n = 42 days". At the right the calculator plate `ma12-calculator-v1.png` (about 420 px tall) with its screen showing "640×(1+0.2149÷365)^42" typed key by key (simulation 2); on "cents" the screen and a row read "= 656.02" (blue). Row: "I = 656.02 − 640 = $16.02" (framed green). On "five" (last bold) a red slip "640 × (1 + 0.2149 ÷ 12)⁴² − 640" writes and is crossed (caption "42 days: divide by 365"), hand tag "42 days: ÷ 365".

### 5. compound or simple?
> You might see another way. Work out one day's interest on the original two thousand, and times it by thirty days. That's simple interest, and it gives thirty-two dollars eighty-**six**. Compound gives thirty-three twelve. It's only a few cents, because simple interest never charges interest on interest. Some cards work out a daily amount and add it once a month, so the question will say which method to use. Our syllabus asks for **compound**.

Visual: stage change: two columns. Left (grey): "simple: 2,000 × 0.1999 ÷ 365 × 30"; on "six" "= $32.86" (grey). Right (amber): "compound: 2,000 × (1 + 0.1999 ÷ 365)³⁰ − 2,000 = $33.12". Under them the day counter's slivers: grey slivers all the same thickness, amber slivers growing, hand tag "a few cents". On "compound" the right column frames green, hand tag "the question says which".

### 6. with a spreadsheet
> If you're doing Standard 2, you'll also do this with digital tools, and it's handy for everyone. In a spreadsheet, column A counts the days from zero, and B two holds the two thousand dollars. B three is B two times one plus zero point one nine nine nine over three six **five**, one day's growth. Fill it down thirty rows, one row per day, and B thirty-two shows two thousand and thirty-three dollars **twelve**. Take away B two, and there's the same thirty-three dollars twelve.

Visual: stage change: the `SpreadsheetGrid` (1,300 × 620 px), a grey header tab "Standard 2: with digital tools". Columns "A: day", "B: balance ($)"; A2 "0", B2 "2000". On "five" the cursor at B3, the formula bar (44 px) "=B2*(1+0.1999/365)", hand tag "one row per day". On "Fill it down" the fill runs (simulation 3) to row 32, a hidden-rows bar for rows 6 to 29, hand tag "fill down 30 days". On "twelve" B32 "2033.12" rings blue; a cell "interest =B32-B2" shows "33.12" (framed green). Grey chip "i13: fill down".

### 7. memory aid
> Here's the summary. The daily rate is the yearly rate divided by three hundred and sixty-five. Grow the balance for the number of days, then take away what you started **with**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the 30 amber slivers stacked. Main line, hand font 52 px: "Daily rate = yearly rate ÷ 365. Grow it for the days, then take away the start." On "with" the key line, 44 px: "I = P(1 + r ÷ 365)^days − P", with a small line under it, 34 px: "r = yearly rate as a decimal; r ÷ 365 = daily rate" (Revision 2). Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A one thousand eight hundred and fifty dollar purchase is made on a credit card that charges nineteen point nine nine per cent a year, compounded daily. The interest-free period has been lost, and interest is charged for twenty-five days. Calculate the interest charged, to the nearest cent. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A $1,850 purchase is made on a credit card that charges 19.99% p.a. interest, compounded daily. The interest-free period has been lost, and interest is charged for 25 days. Calculate the interest charged, to the nearest cent." Picture slot: the card plate small beside an empty 25-tick timeline. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The daily rate is zero point one nine nine nine over three six five, for twenty-five days. One thousand eight hundred and fifty times one plus that, to the power of twenty-five, minus the eighteen fifty, gives twenty-five dollars **fifty**. Multiplying by the yearly rate and twenty-five days is the slip. The rate is per year, so divide by three hundred and sixty-**five**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "daily rate = 0.1999 ÷ 365, n = 25 days"; "I = 1,850 × (1 + 0.1999 ÷ 365)²⁵ − 1,850"; on "fifty" "= $25.50" (framed green). On "five" a red slip "1,850 × 0.1999 × 25" writes and is crossed (caption "the rate is per year: divide by 365"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A spreadsheet models a nine hundred dollar purchase on a card at twenty-one point four nine per cent a year, compounded daily. Column A counts days from zero, B two is nine hundred, and B three is filled down. What does the formula in B three do? Cell B sixteen shows nine hundred and seven dollars forty-five. How much interest is charged for fourteen days? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A spreadsheet models a $900 purchase on a credit card at 21.49% p.a., compounded daily. Column A counts days from 0. B2 = 900 and B3 = B2*(1+0.2149/365) is filled down. (a) Explain what the formula in B3 does. (b) Cell B16 (day 14) shows 907.45. How much interest is charged for 14 days?" Picture slot: a coded extract: rows 1 to 3 with "day | balance", "0 | 900", "1 | =B2*(1+0.2149/365)", a hidden-rows bar, row 16 "14 | 907.45". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> B three grows the balance by one day's interest, the yearly rate divided by three hundred and sixty-five, added on, so filling it down compounds it every **day**. After fourteen days the balance is nine hundred and seven forty-five, so the interest is seven dollars forty-**five**. Calling nine hundred and seven forty-five the interest is the **slip**.

Visual: the card shrinks to the top. On "day" row, 44 px: "(a) B3: one day's growth, × (1 + 0.2149 ÷ 365)" (framed green), the extract's B3 ringing. On "five" "(b) 907.45 − 900 = $7.45" (framed green). On "slip" a red slip "interest = $907.45" writes and is crossed (caption "that's the balance: take away $900"). Hold about 1 s.

### 12. handoff
> So that's how a card adds interest, day by day. All of this lands on your monthly statement, alongside a minimum payment, a due date and a warning box. What does a credit card statement actually tell you, and what happens if you only pay the **minimum**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: the television plate (about 600 px wide) at the left with the card plate small beside it; on "statement" (first mention) a coded statement (`CreditCardStatement`, 900 × 760 px) slides in at the right with its field labels only, every value blank, and an empty box "Minimum repayment warning". On "minimum" the "Minimum payment" label rings amber. On "next" chips "what's on the statement?", "Next: the statement and the minimum payment" and "?". Hold about 2 s. This is i17b's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- r = yearly rate as a decimal; daily rate = r ÷ 365.
- Compounded daily: each day's interest is added on.
- Balance after n days = P(1 + r ÷ 365)ⁿ.
- Interest = balance after n days − P.
- Spreadsheet: B3 = B2*(1 + r/365), with r typed as the yearly rate; fill down one row per day.

Memory aid (framed card, right side, as in scene 7): *Daily rate = yearly rate ÷ 365. Grow it for the days, then take away the start.* Key: *I = P(1 + r ÷ 365)^days − P (r = yearly rate as a decimal).* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i17b's opening frame.

## Teaching checks

- **Does it explain causes?** Why ÷ 365: the rate is for a year of 365 days (2). Why "compound": each day's interest is added and charged on (2, 3). Why the formula is i02's: the same multiplication each day (3). Why subtract P: interest is the growth (3, 4). Why simple is a few cents less: no interest on interest (5). Why the spreadsheet works: one row repeats one day's step (6).
- **Misconceptions addressed:** ÷ 12 when days are given (4 crossed); the yearly rate used as a daily rate (A1 crossed); the balance given as the interest (A2 crossed); simple interest when compound is asked (5); "a dollar ten a day, so thirty-three dollars" (5 shows the 26-cent difference).
- **Visual standard, item by item:** 1 the television from the first frame, as a badge after; 2 a new stage every 30 to 60 s; 3 the day counter with growing slivers, the calculator entry, the spreadsheet fill; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 thirty slivers outgrowing 30 × the first.
- **One idea at a time:** one day (2), thirty days by formula (3), a worked case (4), simple against compound (5), the spreadsheet (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 26 s.
- **Avoided double teaching:** i02's compound interest formula and i13's fill down are recalled in a chip and used, not retaught; the statement is left to i17b.
- **Standard 1 path:** the calculator method for everyone; the spreadsheet tagged "Standard 2: with digital tools"; attempt 2 is answerable from scene 6.
- **Syllabus coverage:** `ci13e98315` and `ci2dbee6b0`: a purchase or transaction (1 to 4, A1, A2), an outstanding balance (1 to 3), a given number of days (all), without digital tools (3, 4, A1) and with them (6, A2, Standard 2). Key notes 1 to 5.
- **Out of scope by design:** the statement and minimum payment (i17b); effective annual rate (ruling 33); counting days between dates.

## Practice questions and model answers

**Attempt 1 (scene 8; original, HSC style, 2 marks suggested, not an official marking scheme).** "A $1,850 purchase is made on a credit card that charges 19.99% p.a. interest, compounded daily. The interest-free period has been lost, and interest is charged for 25 days. Calculate the interest charged, to the nearest cent."
Model answer: daily rate 0.1999 ÷ 365; I = 1,850 × (1 + 0.1999/365)^25 − 1,850 = $25.50. Classic mistake (crossed): "1850 × 0.1999 × 25".

**Attempt 2 (scene 10; original, HSC style (Standard 2), 2 marks suggested).** "A spreadsheet models a $900 purchase on a credit card at 21.49% p.a., compounded daily. Column A counts days from 0. B2 = 900 and B3 = B2*(1+0.2149/365) is filled down. (a) Explain what the formula in B3 does. (b) Cell B16 (day 14) shows 907.45. How much interest is charged for 14 days?"
Model answer: (a) It multiplies the previous day's balance by 1 + 0.2149 ÷ 365, adding one day's interest; filled down, each row is one more day of daily compounding. (b) $907.45 − $900 = $7.45. Classic mistake (crossed): "interest = $907.45".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| TV (site card 05) | $2,000; 19.99% p.a.; 30 days; daily rate 0.1999 ÷ 365; one day ≈ $1.10 | 1, 2 |
| Day balances | 2,001.10; 2,002.19; 2,010.98; 2,022.02; 2,033.12 | 2, 3 |
| Interest (compound) | 2,033.12 − 2,000 = 33.12 | 3, 5, 6 |
| Simple (MS-20) | 2,000 × 0.1999 ÷ 365 × 30 = 32.86 | 5 |
| Worked example | $640; 21.49%; 42 days; 656.02; interest 16.02 | 4 |
| Spreadsheet | B2 = 2000; B3 = B2*(1+0.1999/365); B32 = 2,033.12; 33.12 | 6 |
| A1 | 1,850; 25 days; 25.50; slip 1,850 × 0.1999 × 25 | 8, 9 |
| A2 | 900; 21.49%; B16 = 907.45; 7.45 | 10, 11 |
| Rate sources | RBA F5 (Oct 2026) 21.74%; F8 (Sept 2026) 18.91% | 1 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the pack's values (`recalc-output.txt`, `practice-output.txt`) agree. Codex to re-check.

- 2,000 × 0.1999 ÷ 365 = 1.0953425 (≈ 1.10); 2,000 × (1 + 0.1999/365)^k for k = 1, 2, 10, 20, 30: 2,001.10, 2,002.19, 2,010.98, 2,022.02, 2,033.12; interest 33.12; simple 30 days 32.86.
- 640 × (1 + 0.2149/365)^42 = 656.02; interest 16.02.
- 1,850 × (1 + 0.1999/365)^25 − 1,850 = 25.50.
- 900 × (1 + 0.2149/365)^14 = 907.45; interest 7.45.

## Memory aid check

- **"Daily rate = yearly rate ÷ 365. Grow it for the days, then take away the start."** with key line **"I = P(1 + r ÷ 365)^days − P"**. Original. Meaning, as said in scene 7: share the yearly rate over 365 days, multiply the balance by 1 plus that daily rate once for each day, and subtract the starting amount to leave the interest. Assumptions checked: interest compounds daily on the balance with no payments or new purchases during the days counted (the syllabus task and every example here); a 365-day year (leap years are not used in HSC tasks unless stated); r is the yearly rate as a decimal. It helps a new case: $500 at 18% for 10 days gives 500 × (1 + 0.18/365)^10 − 500 = $2.47. Introduced after scenes 2 to 6.
- **Considered, not used:** "Divide, power, subtract" (a good order of keys, but it does not say what to divide by).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,086 characters** (Revision 2; Revision 1: 5,089), 13 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 382 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the day counter (3), the calculator entry (4), the sliver comparison (5) and the spreadsheet fill (6) about 30 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 478 s (7 min 58 s)**, 92 s under the 570 s cap. Feedback speech: about 28 s and 26 s.

Reserve trims if the voiced take runs long: scene 1's "Most cards work this way."; scene 5's "Some cards work out a daily amount and add it once a month, so the question will say which method to use." (keep if possible: it protects against a real exam variation).

## Scene list and build ids

Lesson key `m-s12i17a` (route math-s12-i17, first half). Explainer folder `src/explainer/lessons/math-s12-i17a`; build inputs in `docs/production/claude-pm/lessons/math-s12-i17a/` (at voicing).

In order (13 scene headings): hook-tv-daily, one-day, thirty-days-formula, worked-car-service, compound-or-simple, spreadsheet-days, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | i16's frame; the television and 30 ticks |
| 30 to 70 s | 2 | The daily rate and day 1 |
| 70 to 120 s | 3 | The day counter and the formula |
| 120 to 185 s | 4 | g01 board: the car service on the calculator |
| 185 to 220 s | 5 | Simple against compound |
| 220 to 260 s | 6 | The spreadsheet, one row per day |
| 260 to 280 s | 7 | Framed memory card |
| 280 to 375 s | 8 to 11 | Question cards and countdowns, then feedback |
| 375 to 395 s | 12 | The blank statement for i17b |
| 395 to 440 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i16's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i17a-learning-review.md`, `science_check` = `checks/m-s12-i17a-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-calculator-v1.png` (a plain dark scientific calculator with a blank green screen and blank keys; fits the calculator entry at about 420 px tall with coded screen text). No television plate exists.

Need (painted, new; see the Codex asset brief): `ms12-television-v1.png` (also on i16's final frame, so paint it before the i16 build). Reused: `ms12-credit-card-v1.png` (briefed in `math-s12-i16.md`), `ma12-calculator-v1.png`.

Coded: the year bar, the day counter and slivers, the working, the calculator's screen text, the spreadsheet, the statement on the final frame, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioTermLadder` (as a day ladder) or a counter chip, `PeriodTimeline`, `SpreadsheetGrid`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i17):
1. **Day counter** (small, a mode of `StudioTermLadder` or a chip on `PeriodTimeline`): a balance chip multiplied by a fixed factor at each of n ticks, with growing interest slivers and a running readout. Check: day 30 reads 2,033.12 from (1 + 0.1999/365)^30.
2. **Calculator screen text** on `ma12-calculator-v1.png`: typed key by key, then the answer. Check: "656.02".
3. **CreditCardStatement** (new; first appears blank on this video's final frame, used fully in i17b): field labels only here.

## Codex asset brief (Maths S12 I17a, a television; also on i16's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i17a.md`, route entry math-s12-i17. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i16 build (i16's final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-calculator-v1.png` and `maths/ma11-studio-speakers-v1.png`; no text, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-television-v1.png` (about 1600 × 1100 px): a modern flat-screen television on a simple two-foot stand, front view slightly angled, a thin dark bezel and a blank dark screen with a soft reflection only (no picture, no menu, no logo), a small cardboard price-tag loop tied to one foot with a blank tag. It must read clearly at 300 px.

Report inspection on the paper background (`#f6f1e7`) at 800 px, 600 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i17a-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm compound daily interest is taught and simple daily interest is only named and labelled (MS-20), and that no effective annual rate appears.
4. Confirm the site's $2,000 at 19.99% for 30 days gives $33.12 everywhere, and the site's hook figures (MS-19) do not appear.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's extract shows B16's value, which the question supplies, and no interest).
6. Confirm scene 1 opens on i16's final frame and scene 12's statement is blank.
7. Confirm the rate source lines (RBA F5 October 2026; F8 September 2026) and the "rates change" sentence.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Credit Card Interest by the Day: Daily Compound Interest | Year 12 Maths Standard

(Title length: 81 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson10.sa.html

A $2,000 television on a credit card at 19.99% a year, not paid in full. How much interest is charged over 30 days when interest is added every day? Find the daily rate (the yearly rate divided by 365), see why each day's interest is a little bigger than the last, and use the compound interest formula with days to get $33.12. Then set out a worked example, compare compound and simple daily interest, and do the same calculation in a spreadsheet, one row per day. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real card rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Calculate the compound interest charged on a purchase, transaction or outstanding balance for a given number of days, with and without using digital tools"
Syllabus content, Standard 1:
"Calculate the compound interest charged on a transaction or outstanding balance for a given number of days"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Credit Cards: Interest Rates, Fees and Interest-Free Periods. Next: Credit Card Statements and the Minimum Payment.

#Year12Maths #MathsStandard #CreditCards #HSCScience

## Open decisions

- **1. The site's $33.12 against $32.85 (MS-20).** The video teaches compound ($33.12) and names simple once ($32.86, exact), not the site's $32.85. Confirm the wording "the question will say which method".
- **2. Spreadsheet scene open to Standard 1.** It is tagged "Standard 2: with digital tools" but kept in the shared video, and attempt 2 uses it. Confirm, or make attempt 2 a calculator question for both courses.
- **3. Length.** At about 478 s this is one of the shorter videos in the strand; the split (ruling 29) gives the daily method room. No padding was added.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i16 for a Standard 1 student who last met FV = PV(1 + r)^n in i02; check that "compounded daily" is shown before it is named, that the day counter makes the exponent feel like "30 days of the same step", that the ÷ 365 against ÷ 12 contrast lands, that the spreadsheet reads as the same idea and not a new one, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
