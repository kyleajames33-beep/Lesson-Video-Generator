# Maths S12 I21: How much must we put in to reach a savings goal? The contribution from a future value factor, rounding up, and the single sum that does the same job (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,073 characters by script (see "Narration length estimate"), 12 scene headings, about 478 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 34, Annuities. **Standard 2 only.** Tables of interest factors only (root ruling 33): contribution = goal ÷ FV factor; single sum = contribution × PV factor; no rearranged formula. Pre-design pack: `../pre-design/maths-standard/math-s12-i21.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/annuities/lesson02.sa.html` (SHA256 `7507f0b0368b652290ae14ed4768d709dd55e5448c5f224999d1e195c4aa708a`; card 05's $50,000 in 8 years at 5.4% p.a. monthly). The site uses the rearranged formula only, and has no single-sum example (MS-29), so the table method and the single sum are original teaching on the site's numbers; `we-2`'s super example (MS-27) is left to i23. Route entry: `math-s12-i21` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; one new painted plate (a house key); the pay envelope plate; the tables, meter and timelines coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (home: a first-home deposit), Australian spelling, no em dashes, money spoken naturally, conversational narration, annuity tables of interest factors as the syllabus does).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Annuities):
- `cifb9dd435`: "Using a table of interest factors, determine the contribution amount required to achieve a given future value or the single sum contribution required to produce an equivalent future value for any given annuity"

Standard 1: no matching content point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3 (Standard 2)

**Boundary:** starts from i20's final frame exactly (the pay envelope and house key plates; the card "goal: $50,000 deposit", "in 8 years", "5.4% a year, monthly"; the equation card "contribution × factor = future value" with "$50,000" in the future value slot and a violet "?" in the contribution box; chips "how much a month?", "Next: saving for a goal", "?"). Recalls i20 (reading FV and PV factors; payment × factor) and i04 (rate per period, number of periods) in a phrase or grey chip each. Teaches: the regular contribution for a goal as goal ÷ FV factor (division undoes the multiplication); rounding the contribution up to the next cent when the goal must be reached; how much of the goal is interest; the single sum invested now that produces the same future value as a given annuity, as contribution × PV factor, checked by growing it forward; why the single sum is less than the total of the contributions. Stops at the contribution and the single sum. Not taught: changing the inputs (i22); superannuation decisions (i23); closed-form or rearranged formulas.

## Decisions

- **Anchor: a first-home deposit fund (painted plate, live).** The site's card 05: $50,000 in 8 years at 5.4% p.a. compounded monthly: rate per period 0.45%, n = 96, FV factor 119.7429; contribution 50,000 ÷ 119.7429 = 417.5613, so $417.57 a month (rounded up; $417.56 reaches only $49,999.85, 15 cents short). Total contributed 96 × 417.57 = $40,086.72, so about $9,900 of the goal is interest. Single sum: 417.57 × PV factor (0.45%, 96) 77.8136 = $32,492.62, which grows to about $50,001 in 8 years. Home and money; the pack's anchor 1. Advanced f12's first-apartment deposit is a near neighbour, so the site's different numbers are kept and the wall calendar and apartment plates are avoided; the house key is a new plate.
- **Worked example (g01, scene 3): the monthly contribution.** Task strip, givens, the FV table lookup, "contribution = 50,000 ÷ 119.7429", the `GoalMeter` magnifier for rounding, framed answer "$417.57 a month", crossed slip "$417.56" (caption "15 cents short: round UP for a goal").
- **The table extract.** FV and PV factors to 4 decimal places for rates per period 0.40%, 0.45%, 0.50% and n = 84, 96, 120 (SymPy, values under "Numbers used"). A 0.45% column is unusual in printed tables, so scene 3 says once that exam tables give the column needed.
- **Site corrections.** MS-29: the site has no table and no single-sum example; both are taught here. MS-27 (`we-2`'s $310.08 should be $310.05) belongs to a super example not used here. MS-24: the rearranged formula M = FV × r ÷ ((1 + r)^n − 1) is not shown.
- **Rates (ruling 5, ruling 32), read 18 November 2026.** 5.4% p.a. sits just above today's bonus saver average: RBA statistical table F4, Advertised Deposit Rates (October 2026): bonus savings accounts 5.05% p.a. (https://www.rba.gov.au/statistics/tables/csv/f4-data.csv). Said once in scene 1: "a little above today's best savings rates; rates change".
- **Join.** Scene 1 opens on i20's final frame exactly. Scene 11 is i22's opening frame.
- **Simulations (standard item 3).**
  1. **Equation turn-round** (scene 2): the equation card's "× 119.7429" lifts off the contribution and moves under $50,000 as "÷ 119.7429", the "?" box lighting.
  2. **Goal meter** (scene 3; `GoalMeter` with its last-gap magnifier): a meter fills with 96 violet deposits and amber interest slivers towards a dashed $50,000 line; at $417.56 the magnifier shows a 15-cent gap ("$49,999.85"); at $417.57 it crosses ("$50,001.05").
  3. **Two timelines** (scene 5; two `PeriodTimeline`s, one above the other): 96 small violet deposits above; one teal block of $32,492.62 at month 0 below; both grow and arrive at the same $50,000 line at month 96.
- **Colour roles (fixed for i19 to i23).** Balance and goal **blue**; interest **amber**; regular contribution **violet**; single sum and PV **teal**; the FV table **blue**, the PV table **teal**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Working rows 44 px (current line 52 px); table cells 36 px (the lifted cell 56 px); meter readouts 52 px; timeline labels 36 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "undo × with ÷", "÷ 96 ignores interest", "per month: 5.4% ÷ 12", "8 × 12 = 96", "15 cents short", "round UP for a goal", "interest does about $9,900", "same $50,000", "one sum now", "earns for all 96 months". At most two live at once.
- **Stage changes (standard item 2).** i20's frame and the goal (1); the equation turned round (2); the g01 board with the meter (3); how much is interest (4); the two timelines (5); framed card (6); question cards (7 to 10); the four-input spreadsheet for i22 (11); key notes (12).
- **Memory aid.** Framed card: "Contribution = goal ÷ FV factor (round up). Single sum = contribution × PV factor." Key line: "One sum now earns for longer, so it can be smaller."
- **Visual surprise.** In scene 5 a single teal block, smaller than the stack of 96 deposits, arrives at the same $50,000 line at the same moment.
- **Plain meanings at first use.** Goal ("the future value you need"); contribution ("the amount paid in each period"); single sum ("one amount invested now"); equivalent ("producing the same future value").
- **Attempts (original, HSC style; the pack's two questions).** A1: $12,000 for an above-ground pool and deck in 3 years, saved at the end of each quarter at 4% p.a. compounded quarterly, FV factor 12.6825 (1%, 12): $946.19 (rounded up); crossed "12,000 × 12.6825" (caption "the goal is known: divide"). A2: an employer's retention bonus of $2,000 at the end of each year for 6 years at 5%, FV factor 6.8019 and PV factor 5.0757: the FV ($13,603.80), the equivalent single sum now ($10,151.40) and why it is less than $12,000; crossed "single sum = 6 × $2,000 = $12,000" (caption "one sum now earns interest for all 6 years").
- **Mistake scene:** none separate. Multiplying by the factor (A1 crossed); rounding down for a goal (3 crossed); dividing by the number of periods (2, said); "the single sum equals the total contributions" (A2 crossed); using the FV factor for the single sum (5, said).
- **Cause chain taught, in order:** (1) the FV is the contribution times the factor, so the contribution is the FV divided by the factor (2); (2) dividing by 96 alone would ignore the interest the deposits earn (2); (3) a contribution rounded down falls short of the goal by cents, so round up (3); (4) the deposits total less than the goal; the gap is interest (4); (5) a single sum today earns interest for the whole term, so less is needed than the total of the contributions, and the PV factor gives exactly that amount (5).
- **Entry knowledge (route):** i20 (FV and PV factors; payment × factor), i04 (rate per period). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i22, "How do the starting amount, payment, rate and term change an annuity's value?").** Scene 11: the two timelines from scene 5 small at the top (both reaching $50,000); below, an empty coded spreadsheet (`SpreadsheetGrid` with an input panel, 1,300 × 520 px) with four labelled input cells, all blank: "amount initially invested", "payment each period", "rate per period", "number of periods", and a large empty output cell "future value"; chips "change one input at a time: which matters most?", "Next: what changes an annuity's value" and "?". No input or value is filled. This is i22's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) FV factor (0.45%, 96) = 119.7429; PV factor (0.45%, 96) = 77.8136. 50,000 ÷ 119.7429 = 417.56129 → $417.57 up. 417.56 × 119.7429 = 49,999.85; 417.57 × 119.7429 = 50,001.04 (table factor) or 50,001.05 (exact factor); the screen shows $50,001.05 from the exact meter run.
  (b) 96 × 417.57 = 40,086.72; 50,001.05 − 40,086.72 = 9,914.33 ("about $9,900"). 50,000 ÷ 96 = 520.83 (the "÷ 96" idea, said).
  (c) Single sum 417.57 × 77.8136 = 32,492.62; × 1.0045^96 = 50,001.05. The exact single sum for exactly $50,000 is 50,000 ÷ 1.0045^96 = 32,491.94 (not shown; the syllabus asks for the single sum for the given annuity).
  (d) A1: 12,000 ÷ 12.6825 = 946.1857 → 946.19. A2: 2,000 × 6.8019 = 13,603.80; 2,000 × 5.0757 = 10,151.40; 10,151.40 × 1.05^6 = 13,603.85 (5 cents from table rounding).
  (e) Pronunciations: "a hundred and nineteen point seven four two nine"; "four hundred and seventeen dollars fifty-seven"; "thirty-two thousand four hundred and ninety-two dollars sixty-two".

Main question: *A $50,000 first-home deposit is needed in 8 years at 5.4% a year, compounded monthly. How much must go in each month, and what single sum now would do the same job?*
Entry knowledge (i20, i04): FV and PV factors; rate per period.
Stops after: the contribution for a goal (rounded up) and the equivalent single sum, with reasons. No input experiments, no super, no formula.
Handoff: math-s12-i22: "four input cells and a future value: change one at a time".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): goal and balance blue; interest amber; contribution violet; single sum teal; FV table blue; PV table teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ANNUITIES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a deposit in eight years
> Here's the goal. A deposit of fifty thousand dollars for a first home, in eight years. The savings account pays five point four per cent a year, compounded monthly. That's a little above today's best savings rates, and rates change. Last time, we multiplied a payment by a factor to get the future value. This time, we know the future value, and the payment is the question **mark**. So how much must we put in to reach a savings **goal**?

Visual: opens on i20's final frame exactly (the pay envelope and house key plates, the card, the equation card with "?", chips). On the first sentence the "Next" chip fades and the house key plate moves to the left third at about 700 px. On "fifty thousand dollars" the card's first line pulses; on "five point four per cent" the third, with a grey chip "example rate (RBA F4, Oct 2026: bonus savers 5.05% p.a.)". On "mark" the violet "?" in the equation card pulses. On "goal" heading "Saving for a goal" writes on, and the question chip "How much a month?" moves to the top right.

### 2. turn it round
> The rule from last time is contribution times factor equals future value. Now the contribution's unknown, so we undo the times. Divide the goal by the factor, and that's the **contribution**. You might think, why not just divide fifty thousand by ninety-six months? That would ignore the interest the deposits earn along the way, and you'd save far more than you **need**.

Visual: stage change: the plates shrink to a 300 px badge at the top left. The equation card enlarges (1,300 px wide, 56 px): "contribution × factor = $50,000". On "undo" the "× factor" lifts off the contribution (simulation 1) and drops under $50,000 as "÷ factor"; on "contribution" the card reads "contribution = $50,000 ÷ factor" with the "?" box lit violet, hand tag "undo × with ÷". On "ninety-six months" a grey row "50,000 ÷ 96 = $520.83 a month?"; on "need" the row dims with the tag "÷ 96 ignores interest".

### 3. worked example: the monthly contribution
> Here it is set out. Find the monthly contribution needed to reach fifty thousand dollars in eight years, at five point four per cent a year, compounded monthly. The rate per month is five point four divided by twelve, zero point four five per cent. The number of months is eight times twelve, ninety-**six**. Exam tables will give you the column you need. Zero point four five per cent and ninety-six periods gives a hundred and nineteen point seven four two nine. Fifty thousand divided by that is four hundred and seventeen point five six one **three**. Now be careful with rounding. Four hundred and seventeen fifty-six a month would leave you fifteen cents **short**. To reach the goal, round up, to four hundred and seventeen dollars fifty-**seven**. Rounding down is the slip, because the goal must be **reached**.

Visual: clear change to the g01 board. Task strip, 44 px: "A first-home deposit of $50,000 is needed in 8 years. The account pays 5.4% p.a., compounded monthly, and equal contributions are made at the end of each month. Use the table to find the monthly contribution needed." Givens card, 40 px: "goal $50,000" (blue), "5.4% p.a. ÷ 12 = 0.45% a month" (amber), "8 × 12 = 96 months". On "six" hand tags "per month: 5.4% ÷ 12" and "8 × 12 = 96". The FV table extract at the right 40 per cent ("Future value interest factors", blue; columns 0.40%, 0.45%, 0.50%; rows 84, 96, 120; 36 px), a grey chip "exam tables give the column you need"; the crosshair on "0.45%" and "96"; "119.7429" lifts out (56 px). Rows, 52 px: "contribution = 50,000 ÷ 119.7429"; on "three" "= 417.5613…". Below, the `GoalMeter` (simulation 2) fills towards a dashed $50,000 line; on "short" the magnifier at the top shows "$417.56 → $49,999.85", a 15-cent gap ringed amber, hand tag "15 cents short". On "seven" "$417.57 → $50,001.05", the line crossed; framed answer (green) "$417.57 a month", hand tag "round UP for a goal". On "reached" a red slip "$417.56" writes and is crossed (caption "15 cents short: round UP for a goal").

### 4. how much is interest?
> Ninety-six deposits of four seventeen fifty-seven add up to forty thousand and eighty-six dollars seventy-**two**. So almost ten thousand dollars of the deposit isn't money you put in at all. It's **interest**. The first deposits sit in the account for almost eight years, earning interest on interest the whole time, and that's why the account does so much of the work. It's also why the factor, a hundred and nineteen, is bigger than the ninety-six deposits.

Visual: stage change: the meter shows its fill split: violet "you put in: 96 × 417.57 = $40,086.72" on "two"; on "interest" the amber top "interest: about $9,900", hand tag "interest does about $9,900". On "The first deposits" the earliest violet deposits at the bottom of the meter ring with thick amber layers; on "bigger than the ninety-six" a row "factor 119.7429 > 96 deposits" (blue).

### 5. one sum now instead
> Now the other half of the question. Suppose instead you already had a lump sum to invest today, at the same rate. What single sum, put in now, would grow to the same amount as those ninety-six monthly **deposits**? That's a present value, so use the present value table. Zero point four five per cent, ninety-six periods, gives seventy-seven point eight one three six. Times four seventeen fifty-seven is thirty-two thousand four hundred and ninety-two dollars sixty-**two**. Check it by growing it forward eight years, and it reaches the same fifty thousand, give or take a **dollar**. Notice it's thousands less than the forty thousand you'd pay in monthly. That's because every dollar of the lump sum earns interest for all ninety-six **months**.

Visual: stage change: two timelines (simulation 3), one above the other, months 0 to 96. Top: 96 small violet deposits along the line. Bottom: empty, with a teal "?" block at month 0. On "deposits" both lines run to a dashed blue "$50,000" at month 96 (the top filling, the bottom waiting). The PV table extract slides in at the right (teal header; same columns and rows); the crosshair on "0.45%" and "96"; "77.8136" lifts. Row, 52 px: "single sum = 417.57 × 77.8136"; on "two" "= $32,492.62" (teal, framed green), the bottom block filling to "$32,492.62", hand tag "one sum now". On "dollar" the teal block grows along the bottom line and arrives at "≈ $50,001" beside the top line's "$50,001.05", hand tag "same $50,000"; grey row "32,492.62 × 1.0045⁹⁶ ≈ $50,001". On "months" two bars under the timelines: "monthly: $40,086.72 paid in" (violet) and "single sum: $32,492.62" (teal), hand tag "earns for all 96 months". Grey chip "PV, not FV, for the single sum".

### 6. memory aid
> Here's the summary. For a regular contribution, divide the goal by the future value factor, and round up. For a single sum now, multiply the contribution by the present value factor. One sum now earns for longer, so it can be **smaller**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two timelines small, both arriving at $50,000. Main line, hand font 52 px: "Contribution = goal ÷ FV factor (round up). Single sum = contribution × PV factor." On "smaller" the key line, 40 px: "One sum now earns for longer, so it can be smaller." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Mai wants twelve thousand dollars in three years for an above-ground pool and deck. She'll make equal contributions at the end of each quarter, into an account paying four per cent a year, compounded quarterly. The future value interest factor for one per cent per period and twelve periods is twelve point six eight two five. Find the quarterly contribution she needs, to the nearest cent, so that she reaches her goal. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Mai wants $12,000 in 3 years for an above-ground pool and deck. She will make equal contributions at the end of each quarter into an account paying 4% p.a., compounded quarterly. The future value interest factor for 1% per period and 12 periods is 12.6825. Find the quarterly contribution she needs, to the nearest cent, so that she reaches her goal." The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Four per cent a year is one per cent a quarter, for twelve quarters. Twelve thousand divided by twelve point six eight two five is nine hundred and forty-six point one eight five seven, so round up to nine hundred and forty-six dollars nineteen a **quarter**. Multiplying twelve thousand by the factor is the **slip**. The goal is known, so divide.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "1% a quarter, n = 12, FV factor 12.6825"; "12,000 ÷ 12.6825 = 946.1857…"; on "quarter" "round up: $946.19 a quarter" (framed green). On "slip" a red slip "12,000 × 12.6825" writes and is crossed (caption "the goal is known: divide"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. An employer's retention bonus pays two thousand dollars at the end of each year for six years, into an account earning five per cent a year, compounded yearly. Use the future value factor six point eight oh one nine and the present value factor five point oh seven five seven. Find the future value of the annuity. Find the single sum that, invested now, produces the same future value. And explain why it's less than the total of the six contributions. Pause here to answer.

Visual: `QuestionCard`, 38 px: "An employer's retention bonus pays $2,000 at the end of each year for 6 years into an account earning 5% p.a., compounded yearly. Use FV factor 6.8019 and PV factor 5.0757 (5%, 6 periods). (a) Find the future value of the annuity. (b) Find the single sum that, invested now at 5% p.a. compounded yearly, produces the same future value. (c) Explain why the single sum is less than the total of the six contributions." Picture slot: two empty timelines, years 0 to 6. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The future value is two thousand times six point oh eight oh one nine, thirteen thousand six hundred and three dollars **eighty**. The single sum is two thousand times five point oh seven five seven, ten thousand one hundred and fifty-one **forty**. It's less than twelve thousand because a lump sum now earns interest for all six years. Saying it's just six times two thousand is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "eighty" "(a) 2,000 × 6.8019 = $13,603.80" (framed green); on "forty" "(b) 2,000 × 5.0757 = $10,151.40" (framed green), with a grey check "10,151.40 × 1.05⁶ ≈ $13,603.85"; "(c) the lump sum earns for all 6 years" (framed green). On "slip" a red slip "single sum = 6 × $2,000 = $12,000" writes and is crossed (caption "one sum now earns interest for all 6 years"). Hold about 1 s.

### 11. handoff
> So the same fifty thousand can come from many small deposits, or one smaller sum now. That means the starting amount matters, not just the deposits. And so do the rate, and the time. Here's a spreadsheet with four inputs, and one result. If we change one input at a time, which one makes the biggest **difference**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: the two timelines from scene 5 small at the top, both reaching $50,000. On "spreadsheet" an empty `SpreadsheetGrid` with an input panel (1,300 × 520 px) below: four labelled input cells, all blank, "amount initially invested", "payment each period", "rate per period", "number of periods", and a large empty output cell "future value". On "difference" the four input labels ring in turn. On "next" chips "change one input at a time: which matters most?", "Next: what changes an annuity's value" and "?". Hold about 2 s. No input or value is filled. This is i22's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Contribution for a goal = goal ÷ FV factor.
- Round UP to the next cent so the goal is reached.
- Equivalent single sum now = contribution × PV factor.
- The single sum is less than the total of the contributions.
- Check: grow the single sum forward; it reaches the same goal.

Memory aid (framed card, right side, as in scene 6): *Contribution = goal ÷ FV factor (round up). Single sum = contribution × PV factor.* Key: *One sum now earns for longer, so it can be smaller.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and i22's opening frame.

## Teaching checks

- **Does it explain causes?** Why divide: it undoes the multiplication (2). Why not ÷ 96: the deposits earn interest (2). Why round up: rounding down misses the goal by cents (3). Why the deposits total less than the goal: interest (4). Why the single sum is smaller: it earns for the whole term (5). Why the PV table: the single sum is an amount today (5).
- **Misconceptions addressed:** multiplying by the factor (A1 crossed); rounding down (3 crossed); dividing by the number of periods (2); the single sum equal to the total contributed (A2 crossed); the FV factor for the single sum (5, chip).
- **Visual standard, item by item:** 1 the house key from the first frame; 2 a new stage every 20 to 70 s; 3 the equation turn-round, the goal meter with its 15-cent magnifier, two timelines arriving together; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 the smaller teal block arriving with the 96 deposits.
- **One idea at a time:** turning the rule round (2), the contribution (3), interest's share (4), the single sum (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 29 s.
- **Avoided double teaching:** i20's lookup and i04's rate per period are recalled in a phrase or chip.
- **Standard 1 path:** not applicable (Standard 2 only).
- **Syllabus coverage:** `cifb9dd435`: the contribution amount for a given future value (2 to 4, A1; key notes 1, 2), the single sum for an equivalent future value of a given annuity (5, A2; key notes 3 to 5).
- **Out of scope by design:** input experiments (i22); super decisions (i23); rearranged formulas (MS-24, ruling 33).

## Practice questions and model answers

**Attempt 1 (scene 7; original, HSC style, 2 marks suggested, not an official marking scheme).** "Mai wants $12,000 in 3 years for an above-ground pool and deck. She will make equal contributions at the end of each quarter into an account paying 4% p.a., compounded quarterly. The future value interest factor for 1% per period and 12 periods is 12.6825. Find the quarterly contribution she needs, to the nearest cent, so that she reaches her goal."
Model answer: rate per quarter 1%, n = 12. Contribution = $12,000 ÷ 12.6825 = $946.1857..., so $946.19 (rounded up to reach the goal). Classic mistake (crossed): "12,000 × 12.6825".

**Attempt 2 (scene 9; original, HSC style, 3 marks suggested).** "An employer's retention bonus pays $2,000 at the end of each year for 6 years into an account earning 5% p.a., compounded yearly. Use FV factor 6.8019 and PV factor 5.0757 (5%, 6 periods). (a) Find the future value of the annuity. (b) Find the single sum that, invested now at 5% p.a. compounded yearly, produces the same future value. (c) Explain why the single sum is less than the total of the six contributions."
Model answer: (a) $2,000 × 6.8019 = $13,603.80. (b) $2,000 × 5.0757 = $10,151.40 (check: $10,151.40 × 1.05^6 = $13,603.85, the same to within table rounding). (c) The single sum earns interest for all 6 years, while each contribution earns interest only from when it is paid in; the six contributions total $12,000. Classic mistake (crossed): "single sum = 6 × $2,000 = $12,000".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Goal (site card 05) | $50,000; 8 years; 5.4% p.a. monthly; 0.45%; n = 96 | 1 to 3 |
| FV extract | 0.40%, 0.45%, 0.50% × n = 84: 99.6004, 101.8058, 104.0739; 96: 116.7553, 119.7429, 122.8285; 120: 153.6320, 158.6510, 163.8793 | 3 |
| PV extract | 84: 71.2244, 69.8196, 68.4530; 96: 79.5867, 77.8136, 76.0952; 120: 95.1560, 92.5656, 90.0735 | 5 |
| Contribution | 50,000 ÷ 119.7429 = 417.5613; $417.56 → 49,999.85; $417.57 → 50,001.05; ÷ 96 idea 520.83 | 2, 3 |
| Interest share | 96 × 417.57 = 40,086.72; about 9,900 | 4 |
| Single sum | 417.57 × 77.8136 = 32,492.62; grows to about 50,001 | 5 |
| A1 | 12,000 ÷ 12.6825 = 946.1857 → 946.19 | 7, 8 |
| A2 | 13,603.80; 10,151.40; check 13,603.85; 12,000 | 9, 10 |
| Rate source | RBA F4 (Oct 2026) bonus savers 5.05% | 1 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the pack's values (`recalc-output.txt`, `practice-output.txt`, `factor-tables-output.txt` extras) agree. Codex to re-check, including every cell of both extracts.

- FV (0.45%, 96) = 119.7429; PV (0.45%, 96) = 77.8136; the 0.40% and 0.50% cells as listed.
- 50,000 ÷ 119.7429 = 417.5612917; 417.56 × 119.7429 = 49,999.85; 417.57 with the exact factor: 50,001.05.
- 96 × 417.57 = 40,086.72; 50,001.05 − 40,086.72 = 9,914.33.
- 417.57 × 77.8136 = 32,492.62; × 1.0045^96 = 50,001.05.
- 12,000 ÷ 12.6825 = 946.1856889. 2,000 × 6.8019 = 13,603.80; 2,000 × 5.0757 = 10,151.40; 10,151.40 × 1.05^6 = 13,603.85.

## Memory aid check

- **"Contribution = goal ÷ FV factor (round up). Single sum = contribution × PV factor."** with key line **"One sum now earns for longer, so it can be smaller."** Original. Meaning, as said in scene 6: dividing the goal by the future value factor gives the regular payment, rounded up so the goal is met; multiplying that payment by the present value factor gives the one amount today that grows to the same future value; it is smaller than the total of the payments because all of it earns interest from the start. Assumptions checked: payments at the end of each period with the factor's rate and number of periods; "round up" applies when the goal must be reached (a question asking simply "to the nearest cent" is answered as asked, said in the pack and in the A1 wording); the single sum is invested at the same rate for the same term. It helps a new case: a $6,000 goal in 2 years at 1% a month: 6,000 ÷ 26.9735 = $222.45 (rounded up from 222.4408). Introduced after scenes 2 to 5.
- **Considered, not used:** "Goal over factor, round it up" (catchy, but leaves out the single sum).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,073 characters**, 12 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 381 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the equation turn-round (2), the meter and magnifier (3), the split fill (4) and the two timelines (5) about 32 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 478 s (7 min 58 s)**, 92 s under the 570 s cap. Feedback speech: about 26 s and 29 s.

Reserve trims if the voiced take runs long: scene 2's "You might think ..." to the end of the scene (about 12 s); scene 3's "Exam tables will give you the column you need." (the chip carries it).

## Scene list and build ids

Lesson key `m-s12i21` (route math-s12-i21). Explainer folder `src/explainer/lessons/math-s12-i21`; build inputs in `docs/production/claude-pm/lessons/math-s12-i21/` (at voicing).

In order (12 scene headings): hook-deposit-goal, turn-it-round, worked-monthly-contribution, how-much-interest, single-sum-now, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | i20's frame; the deposit goal |
| 35 to 65 s | 2 | The equation turned round |
| 65 to 150 s | 3 | g01 board: lookup, division, the meter's 15 cents |
| 150 to 185 s | 4 | How much is interest |
| 165 to 235 s | 5 | Two timelines: the single sum |
| 235 to 255 s | 6 | Framed memory card |
| 255 to 365 s | 7 to 10 | Question cards and countdowns, then feedback |
| 365 to 390 s | 11 | The four-input spreadsheet for i22 |
| 390 to 435 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i20's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 camera continue (the meter); 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i21-learning-review.md`, `science_check` = `checks/m-s12-i21-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-wall-calendar-v1.png` and `ma12-apartment-building-v1.png` (Advanced f12's first-apartment anchors; not reused, as the pack asks); `ma12-travel-suitcase-v1.png` (f15's `GoalMeter` anchor; not reused). No house key plate exists.

Need (painted, new; see the Codex asset brief): `ms12-house-key-v1.png` (also on i20's final frame, so paint it before the i20 build). Reused: `ms12-pay-envelope-v1.png` (opening badge).

Coded: the equation card, the factor extracts, the goal meter and magnifier, the timelines and bars, the spreadsheet on the final frame, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InterestFactorTable` (FV and PV), `GoalMeter` with its last-gap magnifier (finance-parts.tsx), `PeriodTimeline` (two), `SpreadsheetGrid` (input panel, final frame), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `depositForGoal` and `ceilCents` from `money.ts`.

Additions (kit-needs row i21):
1. **Equation turn-round** (small): a factor chip lifting from one side and landing on the other as a divisor. Check: "contribution = $50,000 ÷ factor".
2. **Twin timelines arriving together:** a deposit line and a single-block line, both reaching a dashed target at the same month. Check: 32,492.62 grows to 50,001.05 at month 96; the deposits reach 50,001.05.

## Codex asset brief (Maths S12 I21, a house key; also on i20's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i21.md`, route entry math-s12-i21. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i20 build (i20's final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-coin-jar-v1.png` and `maths/ma11-bike-lock-v1.png`; no text, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-house-key-v1.png` (about 1200 × 1200 px): a single brass house key on a plain metal key ring, with a small blank paper tag tied to the ring and a tiny painted wooden house-shaped key fob (a simple pitched-roof shape, no writing), lying at a slight angle. It must read as "a home" at 300 px.

Report inspection on the paper background (`#f6f1e7`) at 700 px, 500 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i21-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every factor and value under "Numbers to verify" with a CAS, every cell of both extracts, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that the description says Standard 2 only.
3. Confirm no rearranged or closed-form formula appears, and the single sum uses the PV factor.
4. Confirm the rounding rule is "round up to reach a goal", with the 15-cent example, and that A1 says "so that she reaches her goal".
5. Confirm both attempts carry every demand and neither card shows an answer.
6. Confirm scene 1 opens on i20's final frame and scene 11's spreadsheet is empty.
7. Confirm the rate source line (RBA F4, October 2026) and the "rates change" sentence.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Annuities: The Contribution Needed for a Savings Goal | Year 12 Maths Standard

(Title length: 78 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson02.sa.html

A $50,000 first-home deposit is needed in 8 years, at 5.4% a year compounded monthly. How much must go in each month? Turn "payment × factor = future value" round: divide the goal by the future value interest factor, and see why you round up ($417.56 falls 15 cents short). Find how much of the deposit is interest, then the single sum that, invested today, grows to the same amount, using the present value factor, and why it is thousands less than the monthly deposits add up to. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Annuities. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Using a table of interest factors, determine the contribution amount required to achieve a given future value or the single sum contribution required to produce an equivalent future value for any given annuity"
Standard 1 has no annuities content.
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3

Builds on: Annuities: Future and Present Value from Interest Factor Tables. Next: How Each Input Changes an Annuity's Value.

#Year12Maths #MathsStandard #Annuities #HSCScience

## Open decisions

- **1. The 0.45% column (root).** The site's numbers need a 0.45% column, which printed tables rarely have. The extract shows 0.40%, 0.45% and 0.50%, and scene 3 says exam tables give the column needed. Alternatively an original goal on a common column (for example $50,000 in 10 years at 0.5%: 50,000 ÷ 163.8793). Confirm the site's numbers.
- **2. Single sum for the given annuity, not for the goal.** The syllabus asks for the single sum equivalent to a given annuity, so the design uses $417.57 × PV factor = $32,492.62 (reaching about $50,001), not $50,000 ÷ 1.0045⁹⁶ = $32,491.94. Confirm.
- **3. "Give or take a dollar."** Scene 5 says the single sum reaches the same $50,000 "give or take a dollar" (it reaches $50,001.05 because the contribution was rounded up). Confirm the wording.

## Review notes

- Revision 1. Next: student learning review (trace from i20 for a Standard 2 student; check that dividing is caused by undoing the multiplication, that the 15-cent magnifier makes "round up" a reason, that the single sum's "same future value" is seen on the twin timelines, that "earns for longer" explains why it is smaller, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
