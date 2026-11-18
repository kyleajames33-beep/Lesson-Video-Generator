# Maths S12 I19: What is an annuity, and how does its balance build period by period? Regular contributions, or a lump sum with regular withdrawals, in a table and a spreadsheet (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,240 characters by script (see "Narration length estimate"), 13 scene headings, about 493 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 32, Annuities. **Standard 2 only** (Standard 1 has no Annuities focus area; root ruling 30). No closed-form annuity formula and no geometric series (root ruling 33): balances come from tables and a spreadsheet. Pre-design pack: `../pre-design/maths-standard/math-s12-i19.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/annuities/lesson01.sa.html` (SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`; card 05's definition, card 07's $2,000 a year at 5% for 4 years, card 08's spreadsheet and zero-rate check). The site has no withdrawal annuity (MS-31), so that half is original; the site's lottery hook is excluded (ruling 6; MS-32). Route entry: `math-s12-i19` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; one new painted plate (a pay envelope and savings book, the anchor for i19 to i22); every table, tower, tank and spreadsheet coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (work: summer-job savings), Australian spelling, no em dashes, money spoken naturally, conversational narration, no gambling).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Annuities):
- `cibac40b05`: "Identify an annuity as an investment account with regular, equal contributions and interest compounding at the end of each period, or as a single sum investment from which regular equal withdrawals are made"
- `ci198f30b4`: "Model an annuity in tabular form for up to four time periods"
- `ci75f171a2`: "Use a spreadsheet to model an annuity"

Standard 1: no Annuities focus area.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3 (Standard 2)

**Boundary:** starts from i18's final frame (the two-route frame: left, the house plate small and the pay envelope plate with "save the same amount every year: what does it grow to?"; right, the water jug and "Standard 1 next: ratios"). The right panel fades on the first sentence. Recalls i13 (the period table: opening, interest, payment, closing, carried down; B3 = E2 and fill down) and i02 (compound interest each period) in a phrase or grey chip each. Teaches: an annuity in both forms (regular, equal contributions with interest compounding at the end of each period; a single sum from which regular, equal withdrawals are made); the contribution table for four periods (first period earns no interest because the first deposit arrives at the end; interest on the opening balance, then the contribution added, then carried down); why the final balance is more than the total contributed; the same model in a spreadsheet (B3 = E2, fill down) with a zero-rate check; a withdrawal table for four periods (interest on the opening balance, then the withdrawal taken off). Stops at modelling an annuity period by period. Not taught: interest factor tables (i20); contributions for a goal (i21); closed-form formulas; annuities due (payments at the start of each period; beyond the syllabus).

## Decisions

- **Anchor: summer-job savings (painted plate, live).** The site's card 07: $2,000 paid in at the end of each year from summer casual work, earning 5% p.a. compounded yearly, for 4 years: 0 / 0 / 2,000 / 2,000; 2,000 / 100 / 2,000 / 4,100; 4,100 / 205 / 2,000 / 6,305; 6,305 / 315.25 / 2,000 / 8,620.25. Total contributed $8,000; interest $620.25. Work and money; the pack's anchor 1. The plate `ms12-pay-envelope-v1.png` (a pay envelope and a savings book) is the anchor object for the whole annuities run (i19 to i22).
- **Worked example (g01, scene 5): the same annuity in a spreadsheet.** The site's card 08 cells: A2 = 1 (=A2+1 below), B2 = 0, C2 = =B2*0.05, D2 = 2000, E2 = =B2+C2+D2, B3 = =E2, fill down; framed answer "E5 = $8,620.25"; the zero-rate check (C2 = =B2*0, every closing balance becomes a multiple of $2,000, so E5 = 8,000). Crossed slip "C2: =(B2+D2)*0.05" (caption "the deposit arrives at the END: no interest on it yet").
- **Withdrawal annuity (original, MS-31).** A study allowance: a $10,000 gift held in an account earning 4% p.a., with $2,500 withdrawn at the end of each year during a course: 10,000 / 400 / 2,500 / 7,900; 7,900 / 316 / 2,500 / 5,716; 5,716 / 228.64 / 2,500 / 3,444.64; 3,444.64 / 137.79 / 2,500 / 1,082.43. The pack's figures. Education; the pack's anchor 2.
- **Site corrections.** None in the parts used. MS-31 (no withdrawal annuity) is filled by the original table. The site's lottery hook (MS-32) and the closed-form formulas on cards 06 and 09 (marked by the page itself as beyond the syllabus) are not used.
- **Rates (ruling 5, ruling 32), read 18 November 2026.** RBA statistical table F4, Advertised Deposit Rates (October 2026): banks' bonus savings accounts 5.05% p.a.; online savings accounts 3.30% p.a.; 3-year term deposits 4.20% p.a. (https://www.rba.gov.au/statistics/tables/csv/f4-data.csv). 5% and 4% are realistic; said once in scene 1: "example rates; rates change".
- **Join.** Scene 1 opens on i18's final frame and fades the right panel. Scene 12 is i20's opening frame.
- **Simulations (standard item 3).**
  1. **Table morph** (scene 3; `ReducingBalanceTable` in contribution and withdrawal modes): i13's loan table header "Repayment" is crossed out and "Contribution" written in, its minus turning to a plus; later the same table becomes "Withdrawal" with a minus and a starting $10,000.
  2. **Deposit tower** (scene 4; `DepositTower`, finance-parts.tsx): four $2,000 blocks drop in at the right-hand end of each year on a four-period `PeriodTimeline`; each older block grows an amber interest layer each year; at year 4 the blocks merge into one $8,620.25 column against a dashed $8,000 line.
  3. **Draining tank** (scene 6; new, `GoalMeter` run downward): a tank of $10,000 gets a thin amber interest sliver in, then a violet $2,500 bucket out, at the end of each year; the level falls to $1,082.43 after four years.
- **Colour roles (fixed for i19 to i23).** Balance **blue**; interest **amber**; contribution or withdrawal **violet**; the total contributed (dashed line) **grey**; answer **green**; mistake **red**, crossed slips only. The header strip changes to "MATHEMATICS STANDARD · ANNUITIES".
- **Large type, handwritten voice.** Table cells 40 px (current row 44 px), headers 32 px; spreadsheet cells 40 px, formula bar 44 px; tower and tank readouts 52 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "regular, equal", "at the END of each period", "repayment → contribution", "year 1: $0 interest", "interest first, then deposit", "carry it down", "more than $8,000", "older dollars grow more", "the link", "rate 0: just $8,000", "interest in, then withdraw", "draining, slowly". At most two live at once.
- **Stage changes (standard item 2).** i18's frame and the pay envelope (1); the two-form definition card (2); the table morph and year 1 (3); years 2 to 4 with the deposit tower (4); the g01 board with the spreadsheet (5); the withdrawal table and tank (6); framed card (7); question cards (8 to 11); the "10 years?" frame for i20 (12); key notes (13).
- **Memory aid.** Framed card: "Each period: interest on what's there, then the payment, then carry it down." Key line: "Put in: add. Take out: subtract. Year 1 of saving earns nothing."
- **Visual surprise.** In scene 4 the first $2,000 block, paid in at the end of year 1, ends up the tallest of the four, while the last block, paid in at the end of year 4, has no interest layer at all.
- **Plain meanings at first use.** Annuity ("an account with regular, equal payments in or out, and interest each period"); contribution ("a payment into the account"); withdrawal ("money taken out"); at the end of each period ("the payment happens on the last day of the year, after that year's interest").
- **Attempts (original, HSC style; the pack's two questions).** A1: $1,500 at the end of each year at 6% for 4 years: table and interest; crossed "year 1 interest $90" (caption "the first deposit arrives at the end of year 1"). A2: an $8,000 gift at 5%, $2,200 withdrawn at the end of each year for TAFE course fees: why it is an annuity, and the balance after 3 years; crossed "year 1: (8,000 − 2,200) × 0.05" (caption "interest first, then the withdrawal").
- **Mistake scene:** none separate. First-period interest (A1 crossed); adding the contribution before the interest (5 crossed); "balance = contribution × periods" (4, said); taking a withdrawal before the interest (A2 crossed); "annuities are only for retirement" (2, said).
- **Cause chain taught, in order:** (1) the same loan table works for saving, with the payment added instead of subtracted (3); (2) a deposit made at the end of a period has had no time to earn interest, so period 1 earns nothing (3); (3) each later period, interest is earned on everything already there, and that includes earlier interest, so the balance grows faster than the deposits (4); (4) the earliest dollars have earned for longest, so they grow most (4); (5) B3 = E2 links each period to the last, so fill down repeats the model, and a zero rate must give just the deposits (5); (6) in a withdrawal annuity, interest is still earned on the balance, then the withdrawal comes off, so the balance falls more slowly than $2,500 a year (6).
- **Entry knowledge (route):** i13 (the period table and its spreadsheet; Standard 1 and 2), i02 (compound interest each period). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i20, "How does a table of interest factors give an annuity's future or present value?").** Scene 12: the pay envelope plate (about 600 px) at the left; at the right the four-row summer-job table small (1,000 × 300 px) with "$8,620.25" ringed green, and a long dashed continuation "years 5 to 10?" stacking ghost rows; a printed-style table page outline (coded, blank, header "Future value interest factors") tilting in behind; chips "10 years: 10 rows by hand?", "Next: interest factor tables" and "?". No factor or value is shown. This is i20's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Card 07 rows exact (no rounding needed until year 4's 315.25). Total contributed 8,000; interest 620.25. Check (not shown): FV factor (5%, 4) = 4.310125; × 2,000 = 8,620.25.
  (b) Withdrawal rows: 400.00, 7,900.00; 316.00, 5,716.00; 228.64, 3,444.64; 137.79, 1,082.43. A withdrawal of $2,754.90 a year would empty it in exactly 4 years (not shown; i20 shows the present value idea).
  (c) A1: 0, 1,500.00; 90.00, 3,090.00; 185.40, 4,775.40; 286.52, 6,561.92; interest 561.92. A2: 400.00, 6,200.00; 310.00, 4,310.00; 215.50, 2,325.50. A2 slip: (8,000 − 2,200) × 0.05 = 290.
  (d) Pronunciations: "eight thousand six hundred and twenty dollars twenty-five"; "B three equals E two".
  (e) The site's hook ($200 a month at 4.8% for a year: $2,453.51) is not used, to keep one anchor.

Main question: *$2,000 from each summer job goes into savings at the end of every year at 5%. What is this kind of account, and how does its balance build year by year?*
Entry knowledge (i13, i02): the period table and spreadsheet; compound interest per period.
Stops after: an annuity in both forms, four-period tables, and a spreadsheet with a zero-rate check. No factor tables, no formulas.
Handoff: math-s12-i20: "10 years of the summer-job annuity: 10 rows by hand, or one table?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest amber; contribution or withdrawal violet; total contributed grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ANNUITIES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: saving every summer
> Here's a pay envelope from a summer job. At the end of every summer, two thousand dollars goes into a savings account earning five per cent a year. These are example rates, and rates change. After four summers, two thousand has gone in four times, so that's eight thousand dollars. But is that what's in the **account**? Saving like this, the same amount, again and again, with interest each time, has a name. So what is an annuity, and how does its balance build, one period at a **time**?

Visual: opens on i18's final frame. On the first sentence the right panel (the jug) fades and the grey rule withdraws; the house plate fades; the pay envelope plate moves to the left third at about 800 px. On "two thousand dollars" a coded card writes "$2,000 at the end of each year" (violet); on "five per cent" "5% a year" (amber), with a grey chip "example rate (RBA F4, Oct 2026: bonus savers 5.05% p.a.)". On "eight thousand dollars" a grey row "4 × $2,000 = $8,000". On "account" a "?" ring on the savings book. On "time" heading "Annuities" writes on, and the question chip "What does it grow to?" moves to the top right.

### 2. what an annuity is
> An annuity is an account with regular, equal payments, and interest each period. It comes in two forms. In the first, you put in the same amount, at the end of each period, and interest is added at the end of each period too. That's saving, like this summer job, or super. In the second, you start with one lump sum, and take out the same amount at the end of each period, like an allowance paid from a gift. Either way, it's regular, equal payments, in or **out**.

Visual: stage change: the plate shrinks to a 300 px badge at the top left. A definition card, 44 px: "annuity: regular, equal payments, and interest each period", hand tag "regular, equal". Two panels below, each with a small four-period timeline: left "1. contributions in" with four violet arrows dropping in at the right-hand end of each period and amber interest stamps, hand tag "at the END of each period"; right "2. a lump sum, withdrawals out" with one blue block at the start and four violet arrows leaving at the ends. On "out" both panels pulse once.

### 3. the table, turned round
> We can model it with the loan table from earlier, turned round. Cross out repayment, write contribution, and instead of taking it away, we **add** it. Year one. The account starts at zero, so there's no interest. The first two thousand only arrives at the end of the year, so year one earns **nothing**. That's not a mistake, it's because of the timing. The year closes at two thousand **dollars**.

Visual: stage change: i13's `ReducingBalanceTable` (1,400 × 460 px) appears with its loan headers; on "Cross out repayment" the "Repayment" header is crossed out and "Contribution" handwritten in (violet), hand tag "repayment → contribution"; on "add" the minus sign turns to a plus. Headers, 32 px: "Year", "Opening balance" (blue), "Interest" (amber), "Contribution" (violet), "Closing balance" (blue). Grey chip "i13: the same table". Row 1, 44 px: "1", "$0.00"; on "nothing" "$0.00" interest rings amber, hand tag "year 1: $0 interest"; "+$2,000.00"; on "dollars" "$2,000.00" closing.

### 4. years two to four
> Now year two opens with that two thousand. Five per cent of it is a hundred dollars of interest. Add the next two thousand, and it closes at four thousand one hundred. Carry it **down**. Year three, five per cent of four thousand one hundred is two hundred and five, and it closes at six thousand three hundred and five. Year four, the interest is three hundred and fifteen twenty-five, and the account closes at eight thousand six hundred and twenty dollars twenty-**five**. That's six hundred and twenty dollars twenty-five more than you put in, and it's all interest. The first two thousand, in for three years, grew the **most**.

Visual: camera continue. Row 2: "$2,000.00", "$100.00", "+$2,000.00", "$4,100.00", hand tag "interest first, then deposit"; on "down" the closing cell flies down to row 3 (blue arrow), hand tag "carry it down". Row 3: "$4,100.00", "$205.00", "+$2,000.00", "$6,305.00"; row 4: "$6,305.00", "$315.25", "+$2,000.00"; on "five" "$8,620.25" (framed green). The table shrinks to the top half; below, the deposit tower (simulation 2): four $2,000 blocks drop in at the ends of years 1 to 4 on a `PeriodTimeline`, older blocks growing amber layers each year; at year 4 they merge into one $8,620.25 column beside a dashed grey line "$8,000 put in", hand tag "more than $8,000"; row "interest = 8,620.25 − 8,000 = $620.25" (amber). On "most" the first block (tallest) rings, hand tag "older dollars grow more".

### 5. worked example: a spreadsheet annuity
> Here's the same annuity in a spreadsheet, set out like the lesson notes. Model two thousand dollars a year at five per cent for four years. B two is the opening balance, zero. C two is the interest, B two times zero point zero **five**. D two is the contribution, two thousand, and E two is the closing balance, B two plus C two plus D **two**. Then the link from the loans videos. B three equals E two, because each year opens with last year's closing balance. Fill down, and E five shows eight thousand six hundred and twenty dollars twenty-**five**. Now a quick check. Set the rate to zero, and every closing balance should be just the deposits, and E five reads eight **thousand**. Working out interest on the new deposit too is the slip. It arrives at the end of the year, so it hasn't earned anything **yet**.

Visual: clear change to the g01 board. Task strip, 44 px: "$2,000 is paid in at the end of each year for 4 years at 5% p.a., compounded yearly. Model the annuity in a spreadsheet and check it." Givens card, 40 px: "contribution $2,000 a year" (violet), "5% p.a." (amber), "4 years", "start $0" (blue). The `SpreadsheetGrid` (1,300 × 520 px): headers "Year", "Opening", "Interest", "Contribution", "Closing"; A2 "1", B2 "0". On "five" (first bold) the formula bar (44 px) "=B2*0.05" for C2 (shows 0.00). D2 "2000". On "two" the bar "=B2+C2+D2" for E2 (shows 2000.00). On "B three equals E two" the cursor at B3, the bar "=E2", a blue arrow from E2 to B3, hand tag "the link". Fill down to row 5 (about 2 s): 2000, 100, 2000, 4100; 4100, 205, 2000, 6305; 6305, 315.25, 2000, 8620.25; on "five" (second bold) E5 rings, framed answer (green) "E5 = $8,620.25". On "Set the rate to zero" C2 becomes "=B2*0" and fills down; every C cell shows 0 and on "thousand" E5 reads "8000.00", hand tag "rate 0: just $8,000". On "yet" a red slip "C2: =(B2+D2)*0.05" writes and is crossed (caption "the deposit arrives at the END: no interest on it yet").

### 6. the other form: withdrawals
> Now the other form. A ten thousand dollar gift sits in an account earning four per cent a year, and two thousand five hundred is taken out at the end of each year, to help with course fees. Same table, but the payment is a withdrawal, so we subtract **it**. Year one, four per cent of ten thousand is four hundred of interest, then the two and a half thousand comes out, leaving seven thousand nine **hundred**. Year two leaves five thousand seven hundred and sixteen. Year three, three thousand four hundred and forty-four sixty-four. And year four, one thousand and eighty-two dollars forty-**three**. The interest keeps topping it up, so it drains more slowly than two and a half thousand a **year**.

Visual: stage change: the same table in withdrawal mode: on "it" "Contribution" is crossed out and "Withdrawal" written in, the plus turning to a minus; row 0 "start $10,000.00" (blue). Rows, 44 px: on "hundred" "1 | $10,000.00 | $400.00 | −$2,500.00 | $7,900.00", hand tag "interest in, then withdraw"; "2 | $7,900.00 | $316.00 | −$2,500.00 | $5,716.00"; "3 | $5,716.00 | $228.64 | −$2,500.00 | $3,444.64"; on "three" "4 | $3,444.64 | $137.79 | −$2,500.00 | $1,082.43" (framed green). At the right the draining tank (simulation 3): each year a thin amber sliver in and a violet bucket out; on "year" the level ends at "$1,082.43", hand tag "draining, slowly".

### 7. memory aid
> Here's the summary. Each period, work out the interest on what's already there, then add a contribution or take off a withdrawal, and carry the balance down. And in a saving annuity, the first period earns **nothing**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the deposit tower small beside the draining tank. Main line, hand font 52 px: "Each period: interest on what's there, then the payment, then carry it down." On "nothing" the key line, 40 px: "Put in: add. Take out: subtract. Year 1 of saving earns nothing." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Sam puts one thousand five hundred dollars into a savings account at the end of each year. The account earns six per cent a year, compounded yearly. Complete the table for four years, and find the interest earned. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Sam puts $1,500 into a savings account at the end of each year. The account earns 6% p.a., compounded yearly. Complete the table for 4 years and find the interest earned." Table, 36 px: "Year | Opening balance | Interest | Contribution | Closing balance"; "1 | $0.00 | | $1,500 |"; rows 2 to 4 with only "$1,500" filled. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Year one earns nothing, and closes at fifteen **hundred**. Year two earns ninety dollars, and the table builds from there to six thousand five hundred and sixty-one dollars ninety-**two** after year four. Take away the six thousand put in, and the interest is five hundred and sixty-one ninety-two. Ninety dollars of interest in year one is the **slip**.

Visual: the card shrinks to the top (30 px); the table fills, 40 px. On "hundred" row 1: "$0.00", "$1,500.00". Rows 2 to 4 fill as spoken and silently: "$90.00", "$3,090.00"; "$185.40", "$4,775.40"; on "two" "$286.52", "$6,561.92" (framed green). Row "interest = 6,561.92 − 6,000 = $561.92" (framed green). On "slip" a red slip "year 1 interest $90" writes and is crossed (caption "the first deposit arrives at the end of year 1"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A grandparent's gift of eight thousand dollars is placed in an account earning five per cent a year, compounded yearly. Two thousand two hundred is withdrawn at the end of each year to help pay for TAFE course fees. Explain why this is an annuity. Then use a table to find the balance after three years. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A grandparent's gift of $8,000 is placed in an account earning 5% p.a., compounded yearly. $2,200 is withdrawn at the end of each year to help pay for TAFE course fees. (a) Explain why this is an annuity. (b) Use a table to find the balance after 3 years." Picture slot: an empty table "Year | Opening | Interest | Withdrawal | Closing" with "$8,000.00" in year 1's opening cell and "−$2,200" in each withdrawal cell. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> It's a single sum, with regular, equal withdrawals, and interest each **period**. Year one, four hundred of interest, then take off twenty-two hundred, six thousand two hundred. Then four thousand three hundred and ten. And after three years, two thousand three hundred and twenty-five dollars **fifty**. Taking the withdrawal off before the interest is the **slip**.

Visual: the card shrinks to the top. On "period" row, 40 px: "(a) one lump sum, regular equal withdrawals, interest each period" (framed green). The table fills: "$400.00", "$6,200.00"; "$310.00", "$4,310.00"; on "fifty" "$215.50", "$2,325.50" (framed green). On "slip" a red slip "year 1: (8,000 − 2,200) × 0.05" writes and is crossed (caption "interest first, then the withdrawal"). Hold about 1 s.

### 12. handoff
> Four rows by hand is fine. But what if the summer job kept going for ten years? That's ten rows, and for super, it could be hundreds. There's a shortcut, a printed table of numbers that does all those rows in one multiplication. That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: the pay envelope plate (about 600 px) at the left; at the right the four-row summer-job table small (1,000 × 300 px), "$8,620.25" ringed green. On "ten years" a dashed continuation "years 5 to 10?" stacks ghost rows below it. On "printed table" a coded, blank table page with the header "Future value interest factors" tilts in behind. On "next" chips "10 years: 10 rows by hand?", "Next: interest factor tables" and "?". Hold about 2 s. No factor or value is shown. This is i20's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Annuity: regular, equal payments in or out, interest each period.
- Payments at the END of each period: year 1 of saving earns $0.
- Each period: interest on the opening balance, then the payment.
- Contribution: add. Withdrawal: subtract. Carry it down.
- Spreadsheet: B3 = E2, fill down; check with the rate at 0.

Memory aid (framed card, right side, as in scene 7): *Each period: interest on what's there, then the payment, then carry it down.* Key: *Put in: add. Take out: subtract. Year 1 of saving earns nothing.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i20's opening frame.

## Teaching checks

- **Does it explain causes?** Why year 1 earns nothing: the deposit arrives at the end (3). Why the total beats $8,000: interest on interest (4). Why the first deposit grows most: it earns for longest (4). Why B3 = E2: each year opens with last year's close (5). Why the zero-rate check works: no interest leaves only deposits (5). Why the withdrawal account drains slowly: interest tops it up first (6).
- **Misconceptions addressed:** first-period interest (A1 crossed); contribution added before interest (5 crossed); "balance = contribution × periods" (4); withdrawal before interest (A2 crossed); annuities only for retirement (2).
- **Visual standard, item by item:** 1 the pay envelope from the first frame; 2 a new stage every 30 to 60 s; 3 the table morph, the deposit tower, the draining tank, the zero-rate check; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the first block growing tallest and the last having no layer.
- **One idea at a time:** the definition (2), year 1 (3), years 2 to 4 (4), the spreadsheet (5), withdrawals (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 27 s.
- **Avoided double teaching:** i13's table and spreadsheet link are recalled and reused with the sign changed.
- **Standard 1 path:** not applicable (Standard 2 only).
- **Syllabus coverage:** `cibac40b05`, both forms (2, 3, 6, A2 (a); key notes 1, 2); `ci198f30b4` (3, 4, 6, A1, A2 (b); key notes 3, 4); `ci75f171a2` (5; key note 5).
- **Out of scope by design:** interest factor tables (i20); goals (i21); closed-form formulas and the geometric series (ruling 33); annuities due.

## Practice questions and model answers

**Attempt 1 (scene 8; original, HSC style, 3 marks suggested, not an official marking scheme).** "Sam puts $1,500 into a savings account at the end of each year. The account earns 6% p.a., compounded yearly. Complete the table for 4 years and find the interest earned."
Model answer: Year 1: $0.00, $0.00, $1,500, $1,500.00. Year 2: $1,500.00, $90.00, $1,500, $3,090.00. Year 3: $3,090.00, $185.40, $1,500, $4,775.40. Year 4: $4,775.40, $286.52, $1,500, $6,561.92. Interest = $6,561.92 − $6,000 = $561.92. Classic mistake (crossed): "year 1 interest $90".

**Attempt 2 (scene 10; original, HSC style, 3 marks suggested).** "A grandparent's gift of $8,000 is placed in an account earning 5% p.a., compounded yearly. $2,200 is withdrawn at the end of each year to help pay for TAFE course fees. (a) Explain why this is an annuity. (b) Use a table to find the balance after 3 years."
Model answer: (a) It is a single sum invested, from which regular, equal withdrawals are made, with interest each period. (b) Year 1: interest $400.00, closing $6,200.00. Year 2: $310.00, $4,310.00. Year 3: $215.50, $2,325.50. Classic mistake (crossed): "year 1: (8,000 − 2,200) × 0.05".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Summer job (site card 07) | $2,000 a year; 5%; rows 0/0/2,000/2,000; 2,000/100/4,100; 4,100/205/6,305; 6,305/315.25/8,620.25; contributed 8,000; interest 620.25 | 1, 3 to 5 |
| Spreadsheet (site card 08) | =B2*0.05; =B2+C2+D2; =E2; E5 = 8,620.25; rate 0: E5 = 8,000 | 5 |
| Allowance (original, MS-31) | $10,000; 4%; $2,500; 400/7,900; 316/5,716; 228.64/3,444.64; 137.79/1,082.43 | 6 |
| A1 | 1,500; 6%; 90/3,090; 185.40/4,775.40; 286.52/6,561.92; interest 561.92 | 8, 9 |
| A2 | 8,000; 5%; 2,200; 400/6,200; 310/4,310; 215.50/2,325.50; slip (8,000 − 2,200) × 0.05 | 10, 11 |
| Rate source | RBA F4 (Oct 2026): bonus savers 5.05%, 3-year term deposits 4.20% | 1 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the pack's values (`recalc-output.txt`, `practice-output.txt`) agree. Codex to re-check.

- 0 → 2,000.00; 2,000 × 0.05 = 100.00 → 4,100.00; 205.00 → 6,305.00; 315.25 → 8,620.25; 8,620.25 − 8,000 = 620.25. With rate 0: 2,000, 4,000, 6,000, 8,000.
- 10,000 at 4% less 2,500: 400.00, 7,900.00; 316.00, 5,716.00; 228.64, 3,444.64; 137.79, 1,082.43.
- 1,500 at 6%: 90.00, 3,090.00; 185.40, 4,775.40; 286.52, 6,561.92; 561.92.
- 8,000 at 5% less 2,200: 400.00, 6,200.00; 310.00, 4,310.00; 215.50, 2,325.50.

## Memory aid check

- **"Each period: interest on what's there, then the payment, then carry it down."** with key line **"Put in: add. Take out: subtract. Year 1 of saving earns nothing."** Original. Meaning, as said in scene 7: every period, compute interest on the opening balance, then add a contribution or subtract a withdrawal, and the result opens the next period; a contribution annuity's first period has a zero opening balance and so no interest. Assumptions checked: payments at the end of each period (an ordinary annuity, the syllabus's "at the end of each period"); interest compounding once per period at the period's rate; "year 1 earns nothing" applies to a contribution annuity starting at $0, not to a withdrawal annuity, which starts with a lump sum (scene 6). It helps a new case: $500 a quarter at 1% a quarter gives 0, $500; $5, $1,005; $10.05, $1,515.05. Introduced after scenes 3 to 6.
- **Considered, not used:** "Grow, then go" (catchy, but unclear for contributions).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,240 characters**, 13 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 394 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the table morph (3), the deposit tower (4), the spreadsheet fill and zero check (5) and the tank (6) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 493 s (8 min 13 s)**, 77 s under the 570 s cap. Feedback speech: about 26 s and 27 s.

Reserve trims if the voiced take runs long: scene 2's "That's saving, like this summer job, or super."; scene 4's "The first two thousand, in for three years, grew the most." (the tower carries it).

## Scene list and build ids

Lesson key `m-s12i19` (route math-s12-i19). Explainer folder `src/explainer/lessons/math-s12-i19`; build inputs in `docs/production/claude-pm/lessons/math-s12-i19/` (at voicing).

In order (13 scene headings): hook-summer-job, what-an-annuity-is, table-turned-round, years-two-to-four, worked-spreadsheet-annuity, withdrawals, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | i18's frame; the pay envelope |
| 35 to 70 s | 2 | The two-form definition |
| 70 to 100 s | 3 | The table morph and year 1 |
| 100 to 160 s | 4 | Years 2 to 4 and the deposit tower |
| 160 to 235 s | 5 | g01 board: the spreadsheet and zero check |
| 235 to 290 s | 6 | The withdrawal table and tank |
| 290 to 310 s | 7 | Framed memory card |
| 310 to 410 s | 8 to 11 | Question cards and countdowns, then feedback |
| 410 to 430 s | 12 | The "10 years?" frame for i20 |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i18's last frame continues into 1 (the right panel fades); 1 to 2 stage change; 2 to 3 stage change; 3 to 4 camera continue; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i19-learning-review.md`, `science_check` = `checks/m-s12-i19-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-coin-jar-v1.png` (a glass jar with coins; the i01 to i05 anchor in the i-strand's first half, so not reused here to keep the annuities run distinct); `ma12-wall-calendar-v1.png` and `ma12-apartment-building-v1.png` (Advanced f12's anchors; not reused); `ma12-super-statement-v1.png` (f13's anchor; not reused).

Need (painted, new; see the Codex asset brief): `ms12-pay-envelope-v1.png` (also on i18's final frame, so paint it before the i18 build; reused in i20, i21 and i22).

Coded: the definition card and timelines, the table and its morphs, the deposit tower, the tank, the spreadsheet, the blank factor-table page on the final frame, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `ReducingBalanceTable` (i13) in contribution and withdrawal modes, `DepositTower`, `PeriodTimeline`, `GoalMeter`, `SpreadsheetGrid`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `savingsSchedule` from `money.ts`.

Additions (kit-needs row i19):
1. **Header morph on `ReducingBalanceTable`:** a header crossed out and rewritten, with the sign changing. Check: "Repayment −" becomes "Contribution +", then "Withdrawal −".
2. **Draining tank** (a `GoalMeter` run downward): an interest sliver in, a withdrawal bucket out, each period. Check: levels 7,900.00, 5,716.00, 3,444.64, 1,082.43.
3. **SpreadsheetGrid zero-rate check:** editing one formula to "*0" and filling down. Check: E5 = 8,000.

## Codex asset brief (Maths S12 I19, a pay envelope and savings book; also on i18's final frame and in i20 to i22)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i19.md`, route entry math-s12-i19. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i18 build (i18's final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-coin-jar-v1.png` and `biology/y11-banknote-v1.png`; no text, logos, bank names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-pay-envelope-v1.png` (about 1500 × 1000 px): a brown paper pay envelope lying at a slight angle with its flap open and the corners of a few plain banknotes showing (no readable numbers or portraits), and beside it a small closed savings book with a plain dark blue cover and a ribbon marker. Flat, soft ground shadow only. It must read at 300 px.

Report inspection on the paper background (`#f6f1e7`) at 800 px, 600 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i19-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly and that the description says Standard 2 only.
3. Confirm no closed-form annuity formula or geometric series appears, and no lottery context.
4. Confirm the site's card 07 and card 08 numbers and formulas are kept, and every contribution table gives year 1 zero interest.
5. Confirm the withdrawal table takes interest before the withdrawal.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm scene 1 opens on i18's final frame and scene 12 shows no factor.
8. Confirm the rate source line (RBA F4, October 2026), no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: What Is an Annuity? Tables and Spreadsheets | Year 12 Maths Standard

(Title length: 68 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson01.sa.html

$2,000 from each summer job goes into savings at the end of every year at 5%. After four years, is it just $8,000? Meet the annuity: regular, equal payments with interest each period, either contributions into an account or a lump sum with regular withdrawals. Build the balance year by year in a table, see why the first year earns no interest, and why the total ends up $620.25 more than was put in. Then model it in a spreadsheet with one linking formula, check it with a zero rate, and run a withdrawal annuity for a study allowance. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Annuities. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Identify an annuity as an investment account with regular, equal contributions and interest compounding at the end of each period, or as a single sum investment from which regular equal withdrawals are made"
"Model an annuity in tabular form for up to four time periods"
"Use a spreadsheet to model an annuity"
Standard 1 has no annuities content.
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3

Builds on: Credit Card or Personal Loan? Short, Medium and Long-Term Goals; Reducing Balance Loans: Tables and Spreadsheets. Next: Annuities: Future and Present Value from Interest Factor Tables.

#Year12Maths #MathsStandard #Annuities #HSCScience

## Open decisions

- **1. One plate for the annuities run.** The pay envelope and savings book anchor i19 to i22, with the summer-job account carried into i20. Confirm, or ask for a separate plate per video.
- **2. Feedback 1 length (decided in drafting).** Reading all four rows took about 35 s, so feedback 1 speaks year 1, year 2's interest, the year 4 balance and the interest, and rows 3 and 4's other cells appear silently. Root may ask for the full rows spoken (about 9 s more).
- **3. The withdrawal half (MS-31).** Original teaching with the pack's numbers; the site has none. Confirm.

## Review notes

- Revision 1. Next: student learning review (trace from i18 for a Standard 2 student; check that "at the end of each period" lands before year 1's zero, that the table morph makes the loan table's reuse obvious, that the tower shows interest on interest, that the zero-rate check is understood as a check, that the withdrawal order is clear, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
