# Maths S12 I20: How does a table of interest factors give an annuity's future or present value? What a factor means, reading the right one, and choosing future or present value (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,526 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 514 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i20-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 6 (the present value is stated, not shown): **accepted**, visual only, as the reviewer wrote it. When $9,074.75 lands, the PV table shrinks aside and i19's withdrawal table runs once from it, under the sentence about interest while it waits: "$9,074.75 + $362.99 − $2,500 = $6,937.74"; "$6,937.74 + $277.51 − $2,500 = $4,715.25"; "$4,715.25 + $188.61 − $2,500 = $2,403.86"; "$2,403.86 + $96.15 − $2,500 = $0.01". The hand tag is "exactly pays all four", and a grey tag reads "1 cent: the factor is rounded". Revision 1's grey chip "i19 started with $10,000, so $1,082.43 was left" is dropped, because the run shows the same idea without a second number. The Decisions note is corrected to $1,082.41 for (10,000 − 9,074.75) × 1.04⁴, as the review's housekeeping asked. The kit note gains the forward run. No narration is added.
2. Should fix, attempt 1 and feedback 1 (an unreachable "6% column" slip): **accepted, adapted**. The red slip is "PV column: 250 × 42.5803 = $10,645.08", captioned "saving towards a future amount: FV", with the 42.5803 cell ringed red for one beat. The narration is "Using the present value column is the slip." The reviewer's second sentence ("This is saving towards a future amount.") is left out because feedback 1's first sentence already says it, which keeps feedback 1 at about 30 s. The annual-rate column slip is still taught where it can happen (scene 5, "rate per month"). The Decisions, model answer, Numbers and Codex brief match.
3. Should fix, scene 13 (handoff rate must follow ruling 40): **accepted** (root decision 1). "at six per cent a year, compounded monthly"; the card reads "6% a year, monthly". i21 opens on this frame with the same rate.

Narration 5,526 characters by script (Revision 1: 5,535), about 514 s with holds, 56 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 33, Annuities. **Standard 2 only.** The syllabus's tabular method (root ruling 33): look up a factor for the rate per period and the number of periods, then multiply by the payment; no closed-form formula and no geometric series. The meaning of a factor is shown with i19's own table run for $1. Pre-design pack: `../pre-design/maths-standard/math-s12-i20.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/annuities/lesson02.sa.html` (SHA256 `7507f0b0368b652290ae14ed4768d709dd55e5448c5f224999d1e195c4aa708a`; the hook, $100 a month at 6% for 2 years, and the "Beyond the syllabus" notice that exams supply factor tables), `lesson01.sa.html` (SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`; card 07's $2,000 table and card 09's $500 a month for 5 years) and `lesson03.sa.html` (SHA256 `fa5d9f7646cbd109db123d5bb1ce82d59a356e7178796115989f6bccffc76986`). The site shows no factor table (MS-29), so the tables are built from the pack's SymPy output (`work/brief-standard-i2/factor-tables-output.txt`). Route entry: `math-s12-i20` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; the pay envelope plate; the factor tables, timelines and working coded; one new plate for the final frame (briefed in i21).

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (work: i19's summer-job savings, continued), Australian spelling, no em dashes, money spoken naturally, conversational narration, no gambling, annuity tables of interest factors as the syllabus does).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Annuities):
- `ci8032ba07`: "Using a table of interest factors, calculate the future value or present value of an annuity"

Standard 1: no matching content point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3 (Standard 2)

**Boundary:** starts from i19's final frame exactly (the pay envelope plate; the summer-job table with "$8,620.25" ringed and ghost rows "years 5 to 10?"; a blank table page "Future value interest factors"; chips "10 years: 10 rows by hand?", "Next: interest factor tables", "?"). Recalls i19 (the annuity table, payments at the end of each period, the withdrawal annuity) and i04 (rate per period = annual rate ÷ periods a year; periods = years × periods a year) in a phrase or grey chip each. Teaches: the future value (FV) interest factor as what $1 paid in at the end of each period grows to after n periods (shown by running i19's table for $1); reading a factor from a table (column: rate per period; row: number of periods); FV = payment × FV factor; checking against i19 ($8,620.20 against $8,620.25, the 5 cents from rounding the factor); a monthly case (rate per month, months); the present value (PV) interest factor as the single amount today that is worth the same as $1 at the end of each period for n periods, shown with i19's study allowance; PV = payment × PV factor; why a PV is less than the total of the payments; choosing FV or PV from the wording. Stops at calculating FV or PV from a table. Not taught: the contribution for a goal or a single sum for a given annuity (i21); the effect of each input (i22); closed-form formulas.

## Decisions

- **Anchor: i19's summer-job annuity, carried forward (painted plate, live).** $2,000 at the end of each year at 5%: for 4 years the factor 4.3101 gives $8,620.20 (i19's table: $8,620.25); for 10 years the factor 12.5779 gives $25,155.80 (contributed $20,000; interest $5,155.80). The factor's meaning is i19's table run for $1: 0 / 0 / 1 / 1; 1 / 0.05 / 1 / 2.05; 2.05 / 0.1025 / 1 / 3.1525; 3.1525 / 0.157625 / 1 / 4.310125, so "the factor is the table for one dollar". Work and money; continuity from i19.
- **Worked example (g01, scene 4): the summer job for 10 years.** Task strip, givens, the FV table lookup, working, framed answer "$25,155.80; interest $5,155.80", crossed slip "12.5779 × $20,000 = $251,558" (caption "multiply ONE payment, not the total").
- **Monthly case (scene 5): the site's lesson02 hook.** $100 at the end of each month for 2 years at 6% p.a. compounded monthly: rate per period 0.5%, n = 24, FV factor 25.4320, FV $2,543.20 (site "$2,543").
- **Present value (scene 6).** Meaning via i19's study allowance: $2,500 at the end of each year for 4 years at 4%: PV factor 3.6299, PV $9,074.75, the amount today that pays exactly those four withdrawals (i19's $10,000 was $925.25 more, which is why money was left over: 925.25 × 1.04⁴ = 1,082.41 with the table's rounded PV; i19's table, with the unrounded factor, shows $1,082.43). Revision 2 shows the meaning directly: i19's withdrawal table runs once from $9,074.75 and ends at $0.01 (scene 6, visual only; learning review finding 1). Then the site's lesson01 card 09: $500 a month for 5 years at 6% p.a. monthly: PV factor 51.7256, PV $25,862.80 (site $25,862.78, exact), against $30,000 paid out in total.
- **FV or PV (scene 7).** Saving towards a future amount: FV. A lump sum today, such as the most you can borrow for a repayment or the amount needed now to fund an allowance: PV. Two titled tables in distinct colours (FV blue, PV teal) so the choice is visible.
- **The tables.** Printed-style extracts to 4 decimal places from `factor-tables-output.txt`: columns "rate per period" 0.5%, 1%, 4%, 5%, 6%; rows n = 1, 2, 3, 4, 5, 6, 10, 24, 36, 48, 60. Scene 3 says once that factors are rounded, so table answers can differ from a spreadsheet by a few cents, and HSC answers follow the table given (pack decision).
- **Site corrections.** MS-29 (no factor tables; formulas only): filled by these tables. The lottery choices (lessons 01 and 03; MS-32) are excluded (ruling 6). `we-1` ($180 a month at 0.45%) is not used: 0.45% is not a common table column.
- **Rates (ruling 5, ruling 32), read 18 November 2026.** RBA statistical table F4, Advertised Deposit Rates (October 2026): banks' bonus savings accounts 5.05% p.a., online savings 3.30% p.a., 1-year term deposits 5.00% p.a. (https://www.rba.gov.au/statistics/tables/csv/f4-data.csv). 5% and 4% fit today's savings; 6% p.a. is a slightly generous teaching rate that falls on a table column. Said once in scene 5: "6% is a little above today's best savings rates; rates change".
- **Join.** Scene 1 opens on i19's final frame exactly. Scene 13 is i21's opening frame.
- **Simulations (standard item 3).**
  1. **The $1 table** (scene 2; `ReducingBalanceTable` in contribution mode with $1): i19's table re-runs with "$2,000" replaced by "$1"; the closing cell lands on 4.310125 and rounds to "4.3101" as it lifts into the factor table's cell.
  2. **Table lookup** (scenes 3 to 6; `InterestFactorTable` in its FV (blue) and PV (teal) versions): a crosshair down the rate column and along the n row; the crossing cell lifts out and drops into "payment × factor".
  3. **Timelines** (scenes 2 and 6; `PeriodTimeline`): four $1 coins at the ends of four periods grow into 4.3101 at the far end (FV); four $2,500 withdrawals collapse back along the line into $9,074.75 at time zero (PV).
- **Colour roles (fixed for i19 to i23).** Balance **blue**; interest **amber**; payment **violet**; the FV table and FV values **blue**; the PV table and PV values **teal**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Table cells 36 px (the highlighted row and column 40 px, the lifted cell 56 px), headers 32 px; working rows 44 px; timeline labels 36 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "exactly pays all four", "the table for $1", "column: rate per period", "row: number of periods", "5 cents: the factor is rounded", "one payment × factor", "per month: 6% ÷ 12", "periods: 2 × 12", "worth the same today", "less than the total paid out", "future amount: FV", "lump sum now: PV". At most two live at once.
- **Stage changes (standard item 2).** i19's frame (1); the $1 table and the FV timeline (2); the FV table and the i19 check (3); the g01 board for 10 years (4); the monthly lookup (5); the PV meaning and the PV table (6); FV or PV (7); framed card (8); question cards (9 to 12); the goal frame for i21 (13); key notes (14).
- **Memory aid.** Framed card: "Find the column (rate per period) and the row (periods). Payment × factor." Key line: "Future amount: FV table. Lump sum today: PV table."
- **Visual surprise.** In scene 2 the factor 4.3101, which looks like a random number in a printed table, appears as the last cell of i19's own table run for one dollar.
- **Plain meanings at first use.** Interest factor ("a number from a table that does the whole annuity calculation for $1"); future value ("what the annuity is worth at the end"); present value ("the single amount today that is worth the same as all the payments"); rate per period ("the interest rate for one payment period"); number of periods ("how many payments").
- **Attempts (original, HSC style; the pack's two questions, with the table extract supplied).** A1: $250 at the end of each month for 4 years at 6% p.a. monthly, towards the bond and moving costs of leaving home: FV $13,524.45, interest $1,524.45; crossed "PV column: 250 × 42.5803 = $10,645.08" (caption "saving towards a future amount: FV"); Revision 2 replaces Revision 1's "the 6% column", which the supplied extract (0.5% and 1% only) makes impossible (learning review finding 2). A2: car loan repayments of $420 a month for 5 years at 12% p.a. monthly: the most that can be borrowed, $18,881.10; crossed "$420 × 81.6697 (FV table)" (caption "the most you can borrow today: PV").
- **Mistake scene:** none separate. The factor times the total contributed (4 crossed); the annual rate's column (5, said: "rate per month"); the PV table for an FV question (A1 crossed); the FV table for a PV question (A2 crossed); expecting the table to match a spreadsheet to the cent (3, said); "a PV is the total of the payments" (6, said).
- **Cause chain taught, in order:** (1) i19's table for $1 a period gives a single number, the factor, so any payment is that number of dollars times the payment (2); (2) the table is organised by rate per period and number of periods, so those two values find the factor (3, 5); (3) the factor is rounded to 4 decimal places, so the answer can move by a few cents (3); (4) money today can earn interest, so a lump sum today smaller than the total of the payments can fund them all: the present value (6); (5) the question's wording, a future amount or an amount today, chooses the table (7).
- **Entry knowledge (route):** i19 (an annuity and its table), i04 (rate per period and number of periods). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i21, "How much must we put in to reach a savings goal?").** Scene 13: the pay envelope plate (about 500 px) and the new house key plate `ms12-house-key-v1.png` (about 500 px, briefed in `math-s12-i21.md`); a coded card, 40 px: "goal: $50,000 deposit", "in 8 years", "6% a year, monthly" (Revision 2, root ruling 40, matching i21); the equation card from scene 4 with its parts swapped: "contribution × factor = future value" with "contribution" lit as a violet "?" box and "$50,000" in the future value slot; chips "how much a month?", "Next: saving for a goal" and "?". No factor or contribution is shown. This is i21's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) FV factors used: 5%, n = 4: 4.3101 (exact 4.310125); 5%, n = 10: 12.5779; 0.5%, n = 24: 25.4320; 0.5%, n = 48: 54.0978 (A1); 1%, n = 60: 81.6697 (A2's slip). PV factors: 4%, n = 4: 3.6299; 0.5%, n = 48: 42.5803 (A1's slip, Revision 2); 0.5%, n = 60: 51.7256; 1%, n = 60: 44.9550 (A2).
  (b) 2,000 × 4.3101 = 8,620.20; 2,000 × 12.5779 = 25,155.80 (exact 25,155.79); 100 × 25.4320 = 2,543.20; 2,500 × 3.6299 = 9,074.75; 10,000 − 9,074.75 = 925.25, grown 4 years at 4% = 1,082.41 (i19's table, with the unrounded factor, shows 1,082.43; Revision 2 corrects this note, which is not on screen); 500 × 51.7256 = 25,862.80 (exact 25,862.78); 60 × 500 = 30,000.
  (c) A1: 250 × 54.0978 = 13,524.45 (exact 13,524.46); 48 × 250 = 12,000; interest 1,524.45; slip with the PV column: 250 × 42.5803 = 10,645.075 → 10,645.08. A2: 420 × 44.9550 = 18,881.10 (exact 18,881.12); slip 420 × 81.6697 = 34,301.27.
  (d) Pronunciations: "four point three one zero one"; "twelve point five seven seven nine"; "fifty-one point seven two five six".
  (e) The full tables (7 rates, 13 rows) are in `work/brief-standard-i2/factor-tables-output.txt`; the on-screen extract uses 5 rates and 11 rows.

Main question: *The summer-job annuity pays $2,000 a year at 5%. How does one number from a table give its value after 10 years, and how does a second table give a value today?*
Entry knowledge (i19, i04): an annuity's table; rate per period and number of periods.
Stops after: FV and PV from factor tables, checked against i19, with the choice between them. No contribution for a goal, no formula.
Handoff: math-s12-i21: "a $50,000 deposit in 8 years: how much a month?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): balance blue; interest amber; payment violet; FV blue; PV teal; answer green; mistake red. Header strip "ANNUITIES" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: ten rows, or one number?
> Last time, four years of summer-job savings grew to eight thousand six hundred and twenty dollars twenty-five, one row at a time. But what if the savings kept going for ten years? That's ten rows by hand. For super, it could be hundreds. There's a shortcut. A printed table gives one number that does all the rows in one **multiplication**. So how does a table of interest factors give an annuity's **value**?

Visual: opens on i19's final frame exactly (the pay envelope plate, the four-row table with "$8,620.25" ringed, ghost rows, the blank table page, chips). On the first sentence the "Next" chip fades. On "ten years" the ghost rows stack to row 10, hand tag "10 rows?"; on "hundreds" a grey chip "super: one row per payday". On "multiplication" the blank table page tilts forward to face the viewer, still blank. On "value" heading "Interest factor tables" writes on, and the question chip "One number instead of ten rows?" moves to the top right.

### 2. what a factor is
> Here's the idea. Run last lesson's table again, but pay in just one dollar a year, at five per cent. Year one closes at one dollar. Year two, five cents of interest plus another dollar, two dollars five. Then three point one five two five. And after four years, four point three one zero one, near **enough**. So one dollar a year for four years grows to four point three one zero one dollars. That number is called a future value interest factor. It's the whole annuity, for one **dollar**.

Visual: stage change: the plate shrinks to a 300 px badge at the top left. i19's table (1,400 × 420 px) re-runs with "$2,000" replaced by "$1" (simulation 1), cells 44 px: "1 | 0 | 0 | 1 | 1"; "2 | 1 | 0.05 | 1 | 2.05"; "3 | 2.05 | 0.1025 | 1 | 3.1525"; "4 | 3.1525 | 0.157625 | 1 | 4.310125". On "enough" the last cell rounds to "4.3101" (blue). Below, a four-period timeline (simulation 3): four $1 coins drop in at the ends of the periods and roll to the far end, growing into "4.3101". On "dollar" a definition chip, 44 px: "future value interest factor: what $1 a period grows to", hand tag "the table for $1".

### 3. reading the table
> Tables like this list factors for lots of rates and lengths. Each column is the rate per **period**, and each row is the number of **periods**. Find five per cent and four periods, and there's four point three one zero one. Our summer job pays in two thousand, not one, so multiply. Two thousand times four point three one zero one is eight thousand six hundred and twenty dollars **twenty**. That's five cents off last lesson's table, because the factor is rounded to four decimal places. In an exam, use the table you're **given**.

Visual: stage change: the FV `InterestFactorTable` ("Future value interest factors", blue header, 1,400 × 640 px; columns "0.5%", "1%", "4%", "5%", "6%" under "rate per period"; rows 1, 2, 3, 4, 5, 6, 10, 24, 36, 48, 60; cells 36 px). On "period" the column headers ring, hand tag "column: rate per period"; on "periods" the row labels ring, hand tag "row: number of periods". The crosshair (simulation 2) runs down "5%" and along "4"; the cell "4.3101" lifts out. Row, 52 px: "FV = 2,000 × 4.3101"; on "twenty" "= $8,620.20" (blue), beside a grey chip "i19 table: $8,620.25", the difference "5c" circled, hand tag "5 cents: the factor is rounded". On "given" a grey chip "HSC: use the table given".

### 4. worked example: ten years of savings
> Now the ten years. The summer job pays in two thousand dollars at the end of each year for ten years, at five per cent a year. Find the future value, and the interest earned. Five per cent, ten periods. The factor is twelve point five seven seven **nine**. One payment times the factor, two thousand times twelve point five seven seven nine, is twenty-five thousand one hundred and fifty-five dollars **eighty**. Twenty thousand went in, so the interest is five thousand one hundred and fifty-five eighty. Multiplying the factor by the whole twenty thousand is the slip. The factor already counts all ten payments, so use one **payment**.

Visual: clear change to the g01 board. Task strip, 44 px: "$2,000 is paid into an account at the end of each year for 10 years at 5% p.a., compounded yearly. Use the table to find the future value and the interest earned." Givens card, 40 px: "payment $2,000" (violet), "5% per year" (amber), "10 periods". The FV table at the right 45 per cent (cells 32 px), the crosshair on "5%" and "10"; on "nine" the cell "12.5779" lifts out (56 px). Rows, 52 px: "FV = 2,000 × 12.5779"; on "eighty" "= $25,155.80" (framed green), hand tag "one payment × factor". Row, 44 px: "interest = 25,155.80 − 10 × 2,000 = $5,155.80" (framed green). On "payment" a red slip "12.5779 × $20,000 = $251,558" writes and is crossed (caption "multiply ONE payment, not the total").

### 5. monthly payments
> Payments are often monthly. Say a hundred dollars goes in at the end of each month for two years, at six per cent a year, compounded monthly. Six per cent is a little above today's best savings rates, and rates change. The rate per period is six divided by twelve, half a per cent a **month**. And the number of periods is two times twelve, twenty-four **months**. Half a per cent, twenty-four periods, gives twenty-five point four three two oh. Times a hundred is two thousand five hundred and forty-three dollars twenty, a hundred and forty-three more than you paid **in**.

Visual: stage change: the FV table full width again. A strip, 44 px: "$100 a month, 2 years, 6% p.a. monthly" with a grey chip "example rate (RBA F4, Oct 2026: bonus savers 5.05% p.a.)". On "month" "rate per period = 6% ÷ 12 = 0.5%" (amber), hand tag "per month: 6% ÷ 12", grey chip "i04". On "months" "n = 2 × 12 = 24", hand tag "periods: 2 × 12". The crosshair runs down "0.5%" and along "24"; "25.4320" lifts. Row, 52 px: "FV = 100 × 25.4320 = $2,543.20" (blue); on "in" "2,543.20 − 2,400 = $143.20 interest" (amber).

### 6. present value: worth the same today
> There's a second kind of factor. Remember the study allowance last lesson, two thousand five hundred a year for four years at four per cent? How much would you need today to pay exactly that, and end at zero? That's the present value, the single amount today that's worth the same as all the **payments**. The present value table at four per cent and four periods gives three point six two nine nine. Times two thousand five hundred is nine thousand and seventy-four dollars **seventy-five**. That's less than the ten thousand dollars paid out, because the money sitting in the account earns interest while it waits. Here's one more. Five hundred dollars a month for five years at six per cent has a present value of twenty-five thousand eight hundred and sixty-two dollars eighty, well under the thirty thousand paid **out**.

Visual: stage change: a timeline (simulation 3) with four violet "$2,500" withdrawals at the ends of four years; on "payments" they slide back along the line, shrinking, and merge into one teal block "?" at time 0, hand tag "worth the same today"; definition chip, 44 px: "present value: the single amount today worth the same as all the payments". The PV `InterestFactorTable` ("Present value interest factors", teal header) slides in over the FV table; the crosshair on "4%" and "4"; "3.6299" lifts. On "seventy-five" row, 52 px: "PV = 2,500 × 3.6299 = $9,074.75" (teal), and the block reads "$9,074.75". Then, visual only (Revision 2), the PV table shrinks to the right 35 per cent and i19's withdrawal table runs once from the block, under the next sentence, four rows at 40 px, about 1.5 s each, the interest cells amber: "$9,074.75 + $362.99 − $2,500 = $6,937.74"; "$6,937.74 + $277.51 − $2,500 = $4,715.25"; "$4,715.25 + $188.61 − $2,500 = $2,403.86"; "$2,403.86 + $96.15 − $2,500 = $0.01", the last cell ringed teal, hand tag "exactly pays all four", grey tag "1 cent: the factor is rounded" (the "worth the same today" tag has faded). On "paid out" row, 44 px: "paid out: 4 × 2,500 = $10,000", hand tag "less than the total paid out" (replacing "exactly pays all four"). Revision 1's grey chip "i19 started with $10,000, so $1,082.43 was left" is dropped: the run shows the same idea without a second number. On "five hundred dollars a month" the crosshair moves to "0.5%" and "60"; "51.7256" lifts; on "out" row "PV = 500 × 51.7256 = $25,862.80 (paid out: $30,000)" (teal).

### 7. which table?
> So which table? If the question is about saving towards an amount in the future, use the future value table. If it wants a lump sum today, like the most you can borrow for a repayment, or what's needed now to pay an allowance, use the present **value** table.

Visual: stage change: the two tables side by side, small, FV blue and PV teal. A chip slides to each as spoken: "saving towards a future amount" to the FV table, hand tag "future amount: FV"; on "value" "a lump sum today: the most you can borrow, or the amount needed now" to the PV table, hand tag "lump sum now: PV".

### 8. memory aid
> Here's the summary. Find the column for the rate per period, and the row for the number of periods, then multiply one payment by the factor. A future amount uses the future value table. A lump sum today uses the present value **table**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the crosshair on a small table. Main line, hand font 52 px: "Find the column (rate per period) and the row (periods). Payment × factor." On "table" the key line, 40 px: "Future amount: FV table. Lump sum today: PV table." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Use the table shown. Priya saves two hundred and fifty dollars at the end of each month for four years, towards the bond and moving costs of leaving home, in an account paying six per cent a year, compounded monthly. Find the future value of her savings and the interest earned. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Priya saves $250 at the end of each month for 4 years towards the bond and moving costs of leaving home, in an account paying 6% p.a. compounded monthly. Use the table to find the future value of her savings and the interest earned." Table extract, 34 px: "n | FV factor, 0.5% | FV factor, 1% | PV factor, 0.5% | PV factor, 1%"; "36 | 39.3361 | 43.0769 | 32.8710 | 30.1075"; "48 | 54.0978 | 61.2226 | 42.5803 | 37.9740"; "60 | 69.7700 | 81.6697 | 51.7256 | 44.9550". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> It's saving towards a future amount, so the future value table. The rate per month is half a per cent, and four years is forty-eight months. Two fifty times fifty-four point oh nine seven eight is thirteen thousand five hundred and twenty-four dollars forty-**five**. Take away the twelve thousand paid in, and the interest is fifteen twenty-four forty-five. Using the present value column is the **slip**.

Visual: the card shrinks to the top (30 px); the extract stays. Rows, 44 px: "0.5% per month, n = 48, FV factor 54.0978" (the cell ringed blue); on "five" "FV = 250 × 54.0978 = $13,524.45" (framed green); "interest = 13,524.45 − 12,000 = $1,524.45" (framed green). On "slip" a red slip "PV column: 250 × 42.5803 = $10,645.08" writes and is crossed (caption "saving towards a future amount: FV"), the 42.5803 cell in the extract ringed red for one beat. Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Use the same table. Jack can afford car loan repayments of four hundred and twenty dollars at the end of each month for five years. The interest rate is twelve per cent a year, compounded monthly. Find the most he can borrow. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Jack can afford car loan repayments of $420 at the end of each month for 5 years. The interest rate is 12% p.a., compounded monthly. Use the table to find the most he can borrow." The same table extract, 34 px. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The most he can borrow is a lump sum today, so the present value table. Twelve per cent a year is one per cent a month, for sixty months. The factor is forty-four point nine five five oh, and four twenty times that is eighteen thousand eight hundred and eighty-one dollars **ten**. Using the future value column is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "1% per month, n = 60, PV factor 44.9550" (the cell ringed teal); on "ten" "PV = 420 × 44.9550 = $18,881.10" (framed green). On "slip" a red slip "420 × 81.6697 (FV table)" writes and is crossed (caption "the most you can borrow today: PV"). Hold about 1 s.

### 13. handoff
> So payment times factor gives the future value. But often you know the goal, and the payment's the unknown. Here's one. A first-home deposit of fifty thousand dollars, in eight years, at six per cent a year, compounded monthly. How much has to go in each **month**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: the pay envelope plate (about 500 px) at the left; on "first-home deposit" the house key plate `ms12-house-key-v1.png` (about 500 px) beside it with a coded card, 40 px: "goal: $50,000 deposit", "in 8 years", "6% a year, monthly". At the right the equation card, 52 px: "contribution × factor = future value" with "$50,000" written into the future value slot; on "month" the "contribution" box lights violet with a "?". On "next" chips "how much a month?", "Next: saving for a goal" and "?". Hold about 2 s. No factor or contribution is shown. This is i21's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- FV factor: what $1 a period grows to after n periods.
- Table: column = rate per period, row = number of periods.
- FV = one payment × FV factor; PV = one payment × PV factor.
- Future amount: FV table. Lump sum today: PV table.
- Factors are rounded: answers may differ by a few cents.

Memory aid (framed card, right side, as in scene 8): *Find the column (rate per period) and the row (periods). Payment × factor.* Key: *Future amount: FV table. Lump sum today: PV table.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and i21's opening frame.

## Teaching checks

- **Does it explain causes?** Why a factor works: it is i19's table for $1, scaled (2). Why the column and row: the table is organised by rate per period and periods (3). Why 5 cents differ: rounding (3). Why one payment, not the total: the factor already counts every payment (4). Why ÷ 12 and × 12: monthly periods (5). Why a PV is smaller than the payments: money waiting earns interest, and the run from $9,074.75 shows it paying all four withdrawals (6). Why the wording chooses the table (7).
- **Misconceptions addressed:** the factor times the total contributed (4 crossed); the annual rate's column (5, said); PV for an FV question (A1 crossed); FV for a PV question (A2 crossed); exact agreement with a spreadsheet (3); "PV is the total of the payments" (6).
- **Visual standard, item by item:** 1 the pay envelope from the first frame, as a badge after; 2 a new stage every 25 to 60 s; 3 the $1 table landing in the factor table, crosshair lookups, coins growing forward and withdrawals collapsing back; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the "random" factor appearing as i19's last cell.
- **One idea at a time:** the factor's meaning (2), reading the table (3), a worked FV (4), monthly periods (5), PV (6), choosing (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible and the table supplied; 10 s each; feedback about 30 s and 24 s.
- **Avoided double teaching:** i19's table is reused to show meaning; i04's rate per period is a chip.
- **Standard 1 path:** not applicable (Standard 2 only).
- **Syllabus coverage:** `ci8032ba07`: future value with a table (2 to 5, A1; key notes 1 to 3), present value with a table (6, A2; key notes 3, 4), choosing (7; key note 4). Key note 5 covers the rounding.
- **Out of scope by design:** the contribution for a goal and single sums (i21); the effect of inputs (i22); closed-form formulas and the geometric series (ruling 33); annuities due; lottery contexts (ruling 6).

## Practice questions and model answers

Both questions supply this extract: "n | FV factor, 0.5% | FV factor, 1% | PV factor, 0.5% | PV factor, 1%; 36 | 39.3361 | 43.0769 | 32.8710 | 30.1075; 48 | 54.0978 | 61.2226 | 42.5803 | 37.9740; 60 | 69.7700 | 81.6697 | 51.7256 | 44.9550".

**Attempt 1 (scene 9; original, HSC style, 2 marks suggested, not an official marking scheme).** "Priya saves $250 at the end of each month for 4 years towards the bond and moving costs of leaving home, in an account paying 6% p.a. compounded monthly. Use the table to find the future value of her savings and the interest earned."
Model answer: rate per month 0.5%, n = 48, FV factor 54.0978. FV = $250 × 54.0978 = $13,524.45. Interest = $13,524.45 − 48 × $250 = $1,524.45. Classic mistake (crossed): "PV column: 250 × 42.5803 = $10,645.08" (this is saving towards a future amount, so FV).

**Attempt 2 (scene 11; original, HSC style, 2 marks suggested).** "Jack can afford car loan repayments of $420 at the end of each month for 5 years. The interest rate is 12% p.a., compounded monthly. Use the table to find the most he can borrow."
Model answer: rate per month 1%, n = 60, PV factor 44.9550. PV = $420 × 44.9550 = $18,881.10. Classic mistake (crossed): "$420 × 81.6697 (FV table)".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| $1 table (5%, 4 periods) | 1; 2.05; 3.1525; 4.310125 → 4.3101 | 2 |
| i19 check | 2,000 × 4.3101 = 8,620.20; i19 8,620.25; 5 cents | 1, 3 |
| 10 years (5%) | 12.5779; 25,155.80; contributed 20,000; interest 5,155.80; slip 251,558 | 4 |
| Monthly (site lesson02 hook) | 0.5%; n = 24; 25.4320; 2,543.20; interest 143.20 | 5 |
| PV, i19 allowance | 4%; n = 4; 3.6299; 9,074.75; 10,000 paid out; run 9,074.75 + 362.99 − 2,500 = 6,937.74; + 277.51 → 4,715.25; + 188.61 → 2,403.86; + 96.15 → 0.01 | 6 |
| PV, site lesson01 card 09 | 0.5%; n = 60; 51.7256; 25,862.80; paid out 30,000 | 6 |
| A1 | 0.5%; n = 48; 54.0978; 13,524.45; 12,000; 1,524.45; slip 250 × 42.5803 = 10,645.08 | 9, 10 |
| A2 | 1%; n = 60; 44.9550; 18,881.10; slip 81.6697 | 11, 12 |
| Tables | extracts of `factor-tables-output.txt` (0.5%, 1%, 4%, 5%, 6%; n = 1 to 6, 10, 24, 36, 48, 60) | 3 to 7 |
| Handoff | $50,000; 8 years; 6% p.a. monthly (no factor; ruling 40) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the factors match `work/brief-standard-i2/factor-tables-output.txt`. Codex to re-check, including every cell of the on-screen extracts.

- FV factors: (5%, 4) 4.3101 (4.310125); (5%, 10) 12.5779; (0.5%, 24) 25.4320; (0.5%, 48) 54.0978; (1%, 60) 81.6697. PV factors: (4%, 4) 3.6299; (0.5%, 60) 51.7256; (1%, 60) 44.9550.
- 2,000 × 4.3101 = 8,620.20; 2,000 × 12.5779 = 25,155.80; 25,155.80 − 20,000 = 5,155.80; 100 × 25.4320 = 2,543.20; 2,543.20 − 2,400 = 143.20.
- 2,500 × 3.6299 = 9,074.75; (10,000 − 2,500 × 3.629895) × 1.04⁴ = 1,082.43 (with the table's 9,074.75: 1,082.41; author note only, not on screen). Run from 9,074.75 at 4%, interest to the cent: 362.99, 6,937.74; 277.51, 4,715.25; 188.61, 2,403.86; 96.15, 0.01 (`work/brief-resolve-standard-i2/verify.py`). 500 × 51.7256 = 25,862.80.
- 250 × 54.0978 = 13,524.45; − 12,000 = 1,524.45; slip 250 × 42.5803 = 10,645.08. 420 × 44.9550 = 18,881.10.

## Memory aid check

- **"Find the column (rate per period) and the row (periods). Payment × factor."** with key line **"Future amount: FV table. Lump sum today: PV table."** Original. Meaning, as said in scene 8: locate the factor by the rate for one payment period and the number of payments, multiply one payment by it, and choose the FV table for an amount at the end or the PV table for an amount today. Assumptions checked: equal payments at the end of each period (an ordinary annuity, which these tables assume); the table's rate per period matches the payment period (monthly payments need a monthly rate; scene 5); the tables are for annuities, not single sums (i21 handles single sums). It helps a new case: $300 a quarter for 3 years at 4% p.a. compounded quarterly uses 1% and n = 12. Introduced after scenes 2 to 7.
- **Considered, not used:** "Rate across, time down" (true for these tables, but some printed tables are laid out the other way).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,526 characters** (Revision 2; Revision 1: 5,535), 14 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 415 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the $1 table (2), the lookups (3 to 6) and the collapsing timeline (6) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 514 s (8 min 34 s)**, 56 s under the 570 s cap. Feedback speech: about 30 s and 24 s.

Reserve trims if the voiced take runs long: scene 6's "Here's one more ..." to the end of the scene (about 15 s; the i19 allowance carries the idea); scene 1's "For super, it could be hundreds."

## Scene list and build ids

Lesson key `m-s12i20` (route math-s12-i20). Explainer folder `src/explainer/lessons/math-s12-i20`; build inputs in `docs/production/claude-pm/lessons/math-s12-i20/` (at voicing).

In order (14 scene headings): hook-ten-rows, what-a-factor-is, reading-the-table, worked-ten-years, monthly-payments, present-value, which-table, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | i19's frame |
| 30 to 75 s | 2 | The $1 table and timeline |
| 75 to 120 s | 3 | The FV table and the i19 check |
| 120 to 175 s | 4 | g01 board: ten years |
| 175 to 215 s | 5 | The monthly lookup |
| 215 to 290 s | 6 | Present value |
| 290 to 305 s | 7 | Which table? |
| 305 to 325 s | 8 | Framed memory card |
| 325 to 425 s | 9 to 12 | Question cards and countdowns, then feedback |
| 425 to 445 s | 13 | The goal frame for i21 |
| 445 to 490 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i19's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change (the PV table slides over); 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i20-learning-review.md`, `science_check` = `checks/m-s12-i20-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026): the plates in this run are the i19 pay envelope (briefed in `math-s12-i19.md`) and the house key (briefed in `math-s12-i21.md`). `ma12-loan-statement-v1.png` (a blank painted form) was considered for the printed table page and rejected: the table must be coded so its cells can highlight.

Need: none new for this video. The final frame uses `ms12-house-key-v1.png`, briefed in `math-s12-i21.md` (paint before the i20 build). Reused: `ms12-pay-envelope-v1.png`.

Coded: the $1 table, the FV and PV factor tables, timelines, working, question cards and extracts, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `ReducingBalanceTable` (contribution mode), `InterestFactorTable` (i15) in its FV and PV versions, `PeriodTimeline`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `annuityFV` from `money.ts` for checks only.

Additions (kit-needs row i20):
1. **InterestFactorTable FV (blue) and PV (teal) versions** with "rate per period" column headers, a two-table side-by-side layout, and a hand-off where a computed cell (the $1 table's last cell) flies into the table. Check: every on-screen cell matches `factor-tables-output.txt`.
2. **Collapsing timeline** (a `PeriodTimeline` mode): payments slide back to time 0, shrinking, and merge into one block. Check: four $2,500 at 4% merge to 9,074.75. Revision 2: then the `ReducingBalanceTable` (withdrawal mode, i19) runs forward once from the block, four rows, ending at $0.01.

## Codex asset brief

No new plate for i20. Before the i20 build, `ms12-house-key-v1.png` (brief in `math-s12-i21.md`) must exist, because the final frame shows it. `ms12-pay-envelope-v1.png` (brief in `math-s12-i19.md`) is reused.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every factor and value under "Numbers to verify" with a CAS, every cell of the on-screen table extracts against `factor-tables-output.txt`, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that the description says Standard 2 only.
3. Confirm no closed-form annuity formula, geometric series or logarithm appears, and no lottery context.
4. Confirm the 5-cent rounding note is said and shown, the scene 6 run ends at $0.01 with its 1-cent tag, A1's crossed slip uses the PV column of the supplied extract, and the site's numbers ($2,543; $25,862.78 shown as $25,862.80 by the table) are explained.
5. Confirm both attempts supply the table, carry every demand, and show no answer.
6. Confirm scene 1 opens on i19's final frame and scene 13 shows no factor or contribution, with "6% a year, monthly" as in i21 (ruling 40).
7. Confirm the rate source line (RBA F4, October 2026) and the "rates change" sentence.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Annuities: Future and Present Value from Interest Factor Tables | Year 12 Maths Standard

(Title length: 88 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson02.sa.html

Ten years of $2,000-a-year savings at 5%: ten rows by hand, or one number from a table? See what a future value interest factor really is (the annuity table run for $1), read the right factor using the rate per period and the number of periods, and multiply by one payment. Check it against the hand-built table, work with monthly payments, and meet the present value factor: the single amount today worth the same as all the payments. Then choose the right table from the question's wording. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Annuities. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Using a table of interest factors, calculate the future value or present value of an annuity"
Standard 1 has no annuities content.
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3

Builds on: What Is an Annuity? Tables and Spreadsheets. Next: Annuities: The Contribution Needed for a Savings Goal.

#Year12Maths #MathsStandard #Annuities #HSCScience

## Open decisions

- **1. Showing a factor as "the table for $1" (root).** Scene 2 builds the 5%, 4-period factor from i19's table with $1 payments, so its meaning is seen without the geometric series. Confirm this is inside ruling 33 (no formula, only i19's table method).
- **2. Table extract layout.** Rate per period across, periods down, 4 decimal places, 5 columns and 11 rows. Confirm, or match a NESA sample layout if root has one.
- **3. Two PV examples in scene 6.** The i19 allowance gives the meaning; the site's $500 a month keeps the site's numbers. The second is the first trim if the take runs long.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i19 for a Standard 2 student; check that the $1 table makes the factor a meaning and not a magic number, that "rate per period" and "number of periods" land before the lookup, that the 5-cent difference reassures rather than confuses, that "worth the same today" is caused by interest while waiting, that the FV or PV choice is clear from wording, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
