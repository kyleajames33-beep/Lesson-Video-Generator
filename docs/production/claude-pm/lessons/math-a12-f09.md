# Maths A12 F09: How does a reducing-balance loan evolve period by period? Interest on what you still owe, the recurrence, a balance table, the geometric sum inside the balance, and a whole loan's curve (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143), the sequence parts from f01 to f08 (`TermLadder`, `TermPlot`, `PeriodTimeline`, `ShiftCancelRows`, `ConvergenceStrip`), plus three new finance parts specified below (`BalanceTable`, `LoanBalanceGraph`, `RepaymentSplit`) and a loan mode for `PeriodTimeline`. Nothing recorded; human listening pending.

Narration 6,184 characters, 16 scenes, about 565 s (9.4 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: first video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 46), after f08 (geometric growth and decay models) and before f10 (how rate and repayment changes alter the term). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f04.md`): same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5; no people, no bank names, logos or branch buildings; the loans are numbers on coded timelines, tables and graphs). No brief 151 pack and no route-inputs-3 entry exist for f09 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson12.sa.html`, SHA256 `3421ed0f7375f5753005a8531ddf98df46232122ee5381f7af4ae11bd48deffa` (hook, cards 01, 04, 05, 11; Problems 1 to 3; SA Q1 to Q3; traps); `lesson13.sa.html` (SHA256 `827aaa5b52f4c4ea8ba4e775b82d6cc65c1527e46206f23721a396dbfca7a479`) read only for the 30-year repayment $2,147.29. Every number recalculated with SymPy and exact fractions. Course outline entry: `math-a12-f09` (one content point, site source lesson 12).

Owner rules applied: as f01 to f08 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; money exact to the cent in working, with every rounding stated; decimals only in grey readouts except money; attempt cards give nothing away; opens on f08's handoff frame; f06's geometric sum used, not re-derived).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Reducing balance loans; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci4ca53e2c`: "Recognise a reducing balance loan algebraically as a compound interest loan with periodic repayments"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

**Boundary:** starts from f08's last frame (scene 13 of `math-a12-f08.md`: a `PeriodTimeline` in time mode, "t = 0: $30,000 owed", an amber "×1.006" arc to a bar "$30,180" with the grey tag "interest: 0.6% a month", a red "−$600" arc from that bar to a "?" bar, a faint tab "month 2: ?", chips "Next: reducing-balance loans" and "?"); defines principal, balance and reducing balance; converts an annual rate compounded monthly to a rate per month; writes the recurrence Aₙ₊₁ = (1 + r)Aₙ − M with its order (interest, then repayment); runs a three-month balance table (site Problem 1 and 2 numbers); explains why each repayment reduces the debt a little more than the one before; unfolds the recurrence into P(1 + r)ⁿ minus a geometric sum of repayments and closes it with f06's sum; checks the closed form against the table; shows a whole 30-year loan's balance curve and when half is repaid. Stops at the behaviour and algebraic form of one loan. Not taught: changing the rate or repayment (f10); solving for M, the amount owing at a chosen time as a task, the term n and the total paid (f11); annuities and present value (f12 to f15); offset and redraw accounts (not a 2024 Advanced point).

## Decisions

- **Learner question kept (outline).** "How does a reducing-balance loan evolve period by period?" The answer, built in order: each period the balance is multiplied by 1 + r (interest on what is still owed), then the repayment comes off (2, 3); that one step is the recurrence Aₙ₊₁ = (1 + r)Aₙ − M, which is compound interest with a repayment taken off every period (3); run in a table, the interest falls each month because the balance falls, so each repayment reduces the debt by a little more than the one before (4, 5); unfolding the recurrence shows the balance is the compound-interest growth of the loan minus the grown repayments, a geometric sum with ratio 1 + r (6 to 8); over a whole loan the balance falls slowly at first, then faster (9).
- **Opening and hook (root note, 2 Nov: f08 now exists).** f09 opens on f08 scene 13's actual frame (site lesson 12 Problem 1: $30,000 at 7.2% p.a. compounded monthly, $600 a month). The hook asks what replaces the "?" bar and adds the site's card 01 "Think first" question, moved from the $400,000 loan to this loan: will the next repayment reduce the debt by more, less or the same? A 3 s prediction hold follows "Make a guess." The answer is given in scene 5 from the table (420, 422.52, 425.06), with the cause.
- **Vocabulary (site card 03 terms, plain meanings at first use).** principal (the amount borrowed); balance (the amount still owed); reducing-balance loan (interest is charged on the balance still owed, which falls as repayments are made); rate per period (the annual rate divided by the number of periods in a year, here 12); repayment M (the fixed amount paid each period). "Amortisation" is not used (site word; not in the 2024 point; it adds a word without a cause).
- **Recurrence and its order (site card 04).** Aₙ₊₁ = (1 + r)Aₙ − M with A₀ = P. The order is stated as a necessary condition: interest is charged on the month's balance, then the end-of-month repayment comes off. The wrong order (repay first) is the site's quick-check distractor D, "1.005 × (20,000 − 400)"; it is not crossed here (one crossed mistake per feedback; A1 crosses a different mistake), but scene 3's tag "interest first, then the repayment" carries it.
- **"Compound interest loan with periodic repayments" (the point's own words).** Said twice: scene 3 ("without the repayment, this would be compound interest") and scene 8 (the closed form's first piece is P(1 + r)ⁿ, compound interest with no repayments). This is the algebraic recognition the point asks for.
- **Balance table (site Problems 1 and 2, numbers unchanged).** $30,000, r = 0.006, M = $600: interest 180, 177.48, 174.94488 (shown "$174.94", rounded to the cent, stated); principal reductions 420, 422.52, 425.05512 ("$425.06"); balances 29,580, 29,157.48, 28,732.42488 (shown "$28,732.42"). The table carries full precision from row to row (as the site says); only the display rounds to the cent. Total interest in three months $532.42 (532.42488) is a grey readout only.
- **The unfolding (original presentation of the site's recurrence).** A₁ = 30 000(1.006) − 600; A₂ = 30 000(1.006)² − 600(1.006) − 600; A₃ = 30 000(1.006)³ − 600(1.006)² − 600(1.006) − 600. The cause of each power is spoken: the loan has grown for three months; the first repayment has been off the balance for two months, so it has stopped two months of interest; the last for none. Then Aₙ = 30 000(1.006)ⁿ − 600(1 + 1.006 + … + 1.006ⁿ⁻¹), the bracket a GP with first term 1, ratio 1.006 and n terms (f06: Sₙ = a(rⁿ − 1)/(r − 1)), so Aₙ = 30 000(1.006)ⁿ − 600(1.006ⁿ − 1)/0.006 = 30 000(1.006)ⁿ − 100 000(1.006ⁿ − 1). General: Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r. Check: A₃ = 28,732.42488, the table's value.
- **Ratio collision (necessary in learner copy).** f05 to f08 call the common ratio r; here r is the interest rate per period and the ratio is 1 + r. Spoken once in scene 7 ("Notice the ratio is one plus r, not r itself") and crossed in A2's feedback, because confusing them gives a wrong sum.
- **Whole loan (site card 05 half-paid claim; lesson 13 repayment).** $400,000 at 5% p.a. compounded monthly (r = 1/240 exactly), M = $2,147.29 (the 30-year repayment, rounded to the cent; found in f11). First month: interest $1,666.67 (1,666.666…, rounded to the cent), about 78% of the repayment (0.776; grey). Balance after 15 years: $271,534.70 (with M = 2,147.29); balance first below $200,000 after the 242nd repayment (about 20 years 2 months). The site's "about 20 years" is confirmed. The final balance with the rounded repayment is −$2.92 (the last payment is a few dollars smaller; author note e, not spoken).
- **Attempts (original).** (A1) "A loan of $12,000 has interest at 6% p.a., compounded monthly. It is repaid at $250 per month. How much is owed after 2 months?" r = 0.005: A₁ = 11 810, A₂ = 11 619.05 exactly. Crossed: "$11,500" (two repayments taken off, interest forgotten). (A2) "A loan of $50,000 has interest at 4.8% p.a., compounded monthly, with repayments of $900 per month. Show that the amount owing after n months is Aₙ = 50 000(1.004)ⁿ − 225 000(1.004ⁿ − 1)." Model: the repayments give 900(1 + 1.004 + … + 1.004ⁿ⁻¹) = 900(1.004ⁿ − 1)/0.004 and 900/0.004 = 225 000. Crossed: a sum with ratio 0.004, "(0.004ⁿ − 1)/(0.004 − 1)". A1's card shows only the givens and the demand; A2's card shows the target expression (a "show that" demand must) and no sum or ratio.
- **Mistake scene:** none separate. "Interest is charged on the amount first borrowed" (2; site card 04 copy prompt); "repay first, then add interest" (3, tag); "each repayment reduces the debt by the same amount" (hook prediction, 5; site odd-one-out C "the balance falls by exactly M"); "early repayments are split evenly" (9; site trap 01); "half the time, half the debt" (9; site card 05 true/false); "interest forgotten" (A1 crossed); "the ratio is r" (7; A2 crossed). The site's trap 03 (forgetting to divide the annual rate by 12) is carried by scene 2's conversion and both feedbacks.
- **Memory aid (original).** "Grow, then pay: × (1 + r), then − M." See "Memory aid check".
- **Handoff (to f10, "How do rate and repayment changes alter a loan term?").** Scene 15 sums up in one sentence, then shows scene 9's `LoanBalanceGraph` ($400,000, M = $2,147.29, reaching $0 at 30 years) with a dashed grey ghost curve labelled "$2,500 a month?" that stops partway with a "?" where it would meet the time axis, a chip "Next: pay more, or pay a higher rate?" and a "?" chip. No term for $2,500 and no formula. Scene 16 returns to this frame silently; it is f10's opening frame.
- **Site sources used:** lesson 12 hook and card 01 (question moved to the car loan), card 03 (terms), card 04 (recurrence, interest on the outstanding balance), card 05 (half-paid by about year 20), Problems 1 and 2 (car loan table), traps 01 and 03; lesson 13 card 04 for M = $2,147.29 only. Not used: lesson 12 card 05's term table (f10 and f11 use their own exact values), Problem 3 and the explorer activity, SA Q1 to Q3 (same skill as A1).
- **Site errors (new, lesson 12; for root to log; no financial-mathematics items exist in `site-corrections-maths-a12.md`).** (1) Problem 1 step 3: "A₃ = 1.006(29,157.48) − 600 = $28,732.43". Correct: 29,157.48 × 1.006 = 29,332.42488, minus 600 = 28,732.42488, so $28,732.42 to the cent. (Problem 2's interest total $532.42 is consistent with $28,732.42.) (2) Card 04 example writes r = 0.05/12 ≈ 0.004167 and then "A₁ = 1.004167 × 400,000 − 2,500 = $399,166.67"; with the rounded rate the product is 401,666.80, giving $399,166.80. The stated value is right only with the exact rate 1/240. Correction: write r = 0.05/12 = 1/240 (≈ 0.004167 shown as a readout only) and compute with the exact rate. (3) Card 05's table rounds the repayments and interest ($2,640 and $233,600; $2,340 and $302,000; $2,150 and $374,000) without saying so; exact values are $2,639.82 and $233,557.51, $2,338.36 and $301,508.05, $2,147.29 and $373,023.14 (using the unrounded repayment). The "$140,400" difference is then about $139,466. Correction: label the table "rounded" or give the cent values. Minor.
- **Cause chain taught, in order:** (1) interest is charged on the balance still owed, at the rate per period (2); (2) each period the balance is multiplied by 1 + r, then the repayment comes off, so the loan is compound interest with a repayment taken off every period (3); (3) a lower balance means less interest, so more of the same repayment reduces the debt, and the effect builds (4, 5); (4) each repayment stops interest growing on that amount from the month it is paid, which is why it appears with its own power of 1 + r (6); (5) the repayments form a geometric series with ratio 1 + r, so the balance has a closed form (7, 8); (6) a large balance makes early repayments mostly interest, so the balance falls slowly at first and faster later (9).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f09`; playlist order 46; main learner question "How does a reducing-balance loan evolve period by period?"; syllabus action `ci4ca53e2c`.
  - Entry knowledge: f06 (Sₙ = a(rⁿ − 1)/(r − 1)); f08 (growth factor r = 1 + p/100, ×1.006 each month as compound growth, A rᵗ from time zero); f01 (sequences and subscripts); Year 11 percentages and index laws.
  - Start boundary: "Open on f08's strip: $30,000 owed, ×1.006 to $30,180, then −$600 to '?'; ask what the balance is and whether the next repayment reduces the debt by more, less or the same."
  - Stop boundary: "Principal, balance, rate per period; Aₙ₊₁ = (1 + r)Aₙ − M with interest first; a three-month balance table with interest and principal parts; why each principal part grows; the unfolding to P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r with ratio 1 + r; a 30-year balance curve and the half-balance time. No solving for M or n, no rate or repayment changes, no total paid, no annuities or offset accounts."
  - Next handoff: "math-a12-f10: the $400,000 balance curve at $2,147.29 reaching $0 at 30 years, with a dashed '$2,500 a month?' ghost ending in '?'; ask how much sooner it is gone."
  - Prerequisite videos: math-a12-f06, math-a12-f08.
- **Learner-visible vocabulary (plain meaning at first use):** principal (2); balance (2); reducing-balance loan (2); compounded monthly (interest is added every month, 2); rate per period r (2); repayment M (3); recurrence (a rule that gives the next value from the one before, 3).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **loan strip** (`PeriodTimeline` in `loanMode`: per period an amber "×(1 + r)" arc up to an interest-added bar, then a red "−M" arc down to the closing bar; see "Codex asset brief"); **balance table** (`BalanceTable`, new: rows reveal one at a time with opening balance, interest, repayment, principal part and closing balance, each closing value sliding down to open the next row); **repayment split** (`RepaymentSplit`, new: a repayment bar divided into an amber interest part and a teal principal part, with the boundary moving between months); **unfolding** (`AlignedAlgebra` with colour-coded terms: the loan's power in blue, each repayment's power in red; brackets expand in place); **series close** (f06's `ShiftCancelRows` shown only as a small recalled chip, not re-run); **balance curve** (`LoanBalanceGraph`, new: balance against time from the recurrence, a half-balance line, a moving marker with readouts, ghost curves); `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the strip, table or graph on the left two-thirds; givens chip (with units) at the top of the right column, algebra below it, current line bright and earlier lines dim.
- **No human figures, no painted plates, no bank names or logos.**
- **Author notes (not learner copy):**
  (a) Rate: 7.2% p.a. compounded monthly gives r = 0.072/12 = 0.006 exactly; 5% gives 1/240 = 0.0041666…; 6% gives 0.005; 4.8% gives 0.004.
  (b) Car loan rows: opening 30 000.00, interest 180.00, principal 420.00, closing 29 580.00; opening 29 580.00, interest 177.48, principal 422.52, closing 29 157.48; opening 29 157.48, interest 174.94488 ("174.94"), principal 425.05512 ("425.06"), closing 28 732.42488 ("28,732.42"). Displayed interest and principal parts in row 3 add to 600.00 (174.94 + 425.06).
  (c) Closed form: 1.006³ = 1.018108216; 30 000 × 1.018108216 = 30 543.24648; 600 × 0.018108216/0.006 = 1 810.8216; difference 28 732.42488. 600/0.006 = 100 000.
  (d) $400,000 loan (r = 1/240, M = 2 147.29): month 1 interest 1 666.67 (rounded), principal 480.62 (480.623…); month 2 interest 1 664.66, principal 482.63. Balances: 1 year 394 098.50; 5 years 367 314.69; 10 years 325 367.71; 15 years 271 534.70; 20 years 202 447.63; 25 years 113 784.14. First below 200 000 after repayment 242. Month 360: interest about 8.90, principal about 2 138.39.
  (e) With M rounded up to the cent (exact 2 147.2865…), the balance after 360 repayments is −2.92: the final repayment would be about $2,144.37 (author note only).
  (f) A1: 12 000 × 1.005 = 12 060; − 250 = 11 810; 11 810 × 1.005 = 11 869.05; − 250 = 11 619.05. Wrong order gives 1.005 × 11 750 = 11 808.75 (not used).
  (g) A2: 900/0.004 = 225 000; check at n = 12: 41 412.71 (both forms; grey only if shown).
  (h) Pronunciations: "one point zero zero six"; "A sub n plus one"; "twenty-eight thousand, seven hundred and thirty-two dollars forty-two"; "two thousand one hundred and forty-seven dollars twenty-nine".
  (i) Graph window, scene 9: time 0 to 31 years (ticks every 5), balance $0 to $420,000 (ticks every $100,000); dashed half line at $200,000; markers at 15 years ($271,534.70) and at repayment 242 (20.2 years, grey).

Main question: *When you repay a loan, what happens to the balance each month, and why does it fall slowly at first and then faster?*
Entry knowledge (f06, f08; Year 11 percentages): geometric sums; compound growth by a factor 1 + r.
Stops after: the recurrence, a balance table, the closed form and one loan's curve. No solving for M or n.
Handoff: math-a12-f10: the same loan at $2,500 a month (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: balances blue bars and cells; interest amber (arcs "×1.006" and interest cells); repayments red arcs and cells; the part of a repayment that reduces the debt teal; reference lines red dashed; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (what goes under the question mark?)
> Here's a car loan. You borrow thirty thousand dollars, and each month interest of zero point six per cent is added, so the balance is multiplied by one point zero zero six. Then your six hundred dollar repayment comes off. So what do you owe now? And next month, will more of your six hundred dollars go towards the debt, less, or the same? Make a **guess**.

Visual: opens on f08's last frame exactly (f08 scene 13: the `PeriodTimeline` in time mode, "t = 0: $30,000 owed", amber "×1.006" arc to "$30,180" with grey tag "interest: 0.6% a month", red "−$600" arc to a "?" bar, faint tab "month 2: ?", chips "Next: reducing-balance loans" and "?"). Heading writes on: "How does a reducing-balance loan evolve period by period?" as the chips fade. The "×1.006" and "−$600" arcs pulse in turn as they are named. On "next month" a three-way chip "more / less / the same?" appears under the faint month 2 tab. On "guess" (bold) a 3 s prediction ring (no number) runs; the chip stays to scene 5.

### 2. one month of a loan
> The principal is the amount you borrow, and the balance is the amount you still owe. In a reducing-balance loan, interest is charged on the balance you still owe, not on the amount you first borrowed. The rate is seven point two per cent a year, compounded monthly, so each month's rate r is seven point two over twelve, which is zero point six per cent. Each month, first the interest is added, so the balance is multiplied by one plus r. Then the repayment comes off. So you now owe twenty-nine thousand five hundred and eighty **dollars**.

Visual: camera continue (same strip). Tags write under the strip: "principal: the amount borrowed ($30,000)" and "balance: the amount still owed". On "not on the amount you first borrowed" the amber arc's base glows on the current bar (tag "interest on what is still owed"). Givens chip in the right column: "7.2% p.a., compounded monthly; repayment $600 a month". Row "r = 0.072 ÷ 12 = 0.006 per month". On "first the interest" the two arcs number themselves "1" (amber) and "2" (red). On "dollars" (bold) the "?" bar becomes "$29,580".

### 3. the recurrence
> That one month is the whole rule. Call the balance after n months A sub n, so A zero is the thirty thousand you borrowed. A rule that gives the next value from the one before is called a recurrence. Here, A sub n plus one equals one plus r, times A sub n, minus M, the repayment. Without the repayment, this would just be compound interest. So a reducing-balance loan is a compound interest loan with a repayment taken off every period. And interest comes first, because the repayment is made at the end of the **month**.

Visual: camera continue. Labels on the strip: "A₀ = $30,000" at t = 0 and "A₁ = $29,580" at month 1. Rows: "A₁ = 1.006 × A₀ − 600"; then "Aₙ₊₁ = 1.006Aₙ − 600"; then boxed "Aₙ₊₁ = (1 + r)Aₙ − M" with labels "r: rate per period", "M: repayment". On "compound interest" the red "−M" fades for a moment, leaving "Aₙ₊₁ = (1 + r)Aₙ" with a grey tag "compound interest only", then returns; tag "compound interest + a repayment every period". On "month" (bold) tag "interest first, then the repayment" under the arcs "1" and "2".

### 4. a balance table
> Here are three months in a table. Each row's interest is zero point six per cent of what's owed at the start. In month one, that's one hundred and eighty dollars, so the repayment pays off four hundred and twenty dollars of the debt. In month two, the balance is lower, so the interest is one hundred and seventy-seven dollars forty-eight, leaving four hundred and twenty-two dollars fifty-two for the debt. In month three, the interest is one hundred and seventy-four dollars ninety-four, rounded to the cent, and the balance falls to twenty-eight thousand, seven hundred and thirty-two dollars forty-**two**.

Visual: clear change to a `BalanceTable` (author note b). Columns: "month", "owed at start", "interest (× 0.006)", "repayment", "debt paid off", "owed at end". Row 1 writes cell by cell with the cue words: $30,000.00, $180.00 (amber), $600.00 (red), $420.00 (teal), $29,580.00. On "month two" the closing $29,580.00 slides down to open row 2; $177.48, $600.00, $422.52, $29,157.48. On "month three" row 3: $174.94, $600.00, $425.06; on "two" (bold) $28,732.42. A grey note under the table: "rounded to the cent; the full values are carried to the next row". A small `RepaymentSplit` bar beside each row shows the amber and teal parts of $600.

### 5. why each month pays off more
> So, each month, a little more of the repayment goes towards the debt. The repayment stays the same, but the interest is charged on a smaller balance each time. Less interest means more of the six hundred dollars is left to reduce the balance, and that makes the next balance smaller **again**.

Visual: camera continue. The three `RepaymentSplit` bars line up side by side and enlarge: the amber/teal boundary moves left a little each month ($420 → $422.52 → $425.06). The hook's "more / less / the same?" chip returns and "more" is ringed. On "smaller balance" the "owed at start" cells pulse in turn with a small down arrow between them; on "less interest" the interest cells pulse with down arrows; on "more of the six hundred" the teal cells pulse with up arrows. On "again" (bold) a faint fourth and fifth bar ghost in to the right with the boundary still moving (no values), tag "keeps building".

### 6. unfolding the rule
> Now find the pattern behind the table. A one is thirty thousand times one point zero zero six, minus six hundred. For A two, multiply all of that by one point zero zero six, then take off another six hundred. That's thirty thousand times one point zero zero six squared, minus six hundred times one point zero zero six, minus six **hundred**. In A three, the loan has grown for three months. The first repayment has been off the balance for two months, so it has stopped two months of interest. The last has stopped none at **all**.

Visual: clear change (table shrinks to a small chip "A₃ = $28,732.42" at the top right). Rows (author note c): "A₁ = 30 000(1.006) − 600"; "A₂ = [30 000(1.006) − 600](1.006) − 600"; on "hundred" (bold) the bracket expands in place: "A₂ = 30 000(1.006)² − 600(1.006) − 600". On "In A three" "A₃ = 30 000(1.006)³ − 600(1.006)² − 600(1.006) − 600". The loan term is blue, the repayment terms red. A mini `PeriodTimeline` under the rows (months 0 to 3) shows three red repayment ticks at the ends of months 1, 2, 3; on "two months" an amber bracket from the first tick to month 3 labelled "(1.006)²" links to its term; on "all" the last tick is labelled "(1.006)⁰ = 1".

### 7. a geometric series inside the balance
> So after n months, you owe thirty thousand times one point zero zero six to the n, minus six hundred times a sum: one, plus one point zero zero six, plus one point zero zero six squared, up to the power n minus one. It's a geometric series with first term one, ratio one point zero zero six, and n **terms**. Its sum is one point zero zero six to the n, minus one, all over one point zero zero six minus one, which is zero point zero zero **six**. Notice the ratio is one plus r, not r itself.

Visual: camera continue. Row "Aₙ = 30 000(1.006)ⁿ − 600(1 + 1.006 + 1.006² + … + 1.006ⁿ⁻¹)". The bracket is scribble-circled; on "terms" (bold) a givens chip "GP: a = 1, ratio 1.006, n terms". The recalled f06 chip "Sₙ = a(rⁿ − 1)/(r − 1)" appears small in grey (no re-run). Row "1 + 1.006 + … + 1.006ⁿ⁻¹ = (1.006ⁿ − 1)/(1.006 − 1)"; on "six" (bold) "= (1.006ⁿ − 1)/0.006". On "not r itself" a tag "ratio = 1 + r (r = 0.006 is the interest rate)".

### 8. what the formula says
> In general, A sub n equals P times one plus r to the n, minus M times one plus r to the n, minus one, all over r. Read it as two pieces. The first is what the loan would grow to with compound interest and no repayments. The second is the repayments, each grown by interest from the month it was paid, because paying it stopped that much debt from growing. What you owe is the difference. For three months it gives twenty-eight thousand, seven hundred and thirty-two dollars forty-two, the same as the **table**.

Visual: camera continue. Row "Aₙ = 30 000(1.006)ⁿ − 100 000(1.006ⁿ − 1)" (grey tag "600 ÷ 0.006 = 100 000"); then boxed general "Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r". On "two pieces" the first piece glows blue with a tag "the loan with compound interest", and a rising blue bar grows over the mini timeline; the second piece glows red, tag "the repayments, each grown by interest", and a red bar grows beside it; on "the difference" a bracket between the bar tops labelled "owed". On "Check" row "A₃ = 30 000(1.018108216) − 100 000(0.018108216)" with grey readouts "30 543.25" and "1 810.82"; on "table" (bold) "= $28,732.42" and the small chip from scene 6 pulses with a tick.

### 9. a whole loan
> Now zoom out to a home loan: four hundred thousand dollars at five per cent a year, compounded monthly, repaid over thirty years at two thousand one hundred and forty-seven dollars twenty-nine a month. In the first month, more than three quarters of the repayment is interest. So the balance falls slowly at first, then faster and faster. Halfway through, at fifteen years, you still owe about two hundred and seventy-one thousand dollars. You don't owe less than half until about twenty **years**.

Visual: clear change to a `LoanBalanceGraph` (author notes d, i): givens chip "$400,000; 5% p.a., compounded monthly; $2,147.29 a month" with grey "r = 0.05 ÷ 12 = 1/240" and a small grey chip "repayment found later" beside $2,147.29. The curve draws from $400,000 at t = 0 to $0 at 30 years, slowly at first then steeper. On "first month" a `RepaymentSplit` bar beside the start: amber "$1,666.67" and teal "$480.62" (grey "≈ 78% interest"); a second bar at year 25 (the 301st repayment) shows the split reversed (grey readouts "$474.10" interest, "$1,673.19" debt paid off; interest rounded to the cent). A dashed grey straight chord from start to end shows how far the curve sags above it. On "Halfway through" a marker runs to 15 years with readout "$271,534.70"; the red dashed half line at $200,000 appears; on "years" (bold) the marker runs on to the point where the curve crosses the half line, readout "after repayment 242 (about 20 years)".

### 10. memory aid
> Here's a way to remember each month of a loan. Grow, then pay. The balance grows by the interest, times one plus r, and then the repayment comes off, minus **M**.

Visual: the handwritten line writes large: "Grow, then pay: × (1 + r), then − M." Under it, a tiny strip with one amber arc up and one red arc down. On "M" (bold) both arcs pulse. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A loan of twelve thousand dollars has interest at six per cent a year, compounded monthly. It's repaid at two hundred and fifty dollars a month. How much is owed after two months? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A loan of $12,000 has interest at 6% p.a., compounded monthly. It is repaid at $250 per month. How much is owed after 2 months?" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no recurrence, no rate per month, no table).

### 12. feedback 1 (brief)
> The monthly rate is half a per cent. After one month, the balance is twelve thousand and sixty, minus two hundred and fifty, which is eleven thousand eight hundred and ten. After two months, it's eleven thousand six hundred and nineteen dollars and five **cents**. Eleven thousand five hundred is wrong. It takes off two repayments, but forgets the interest added each **month**.

Visual: card shrinks to the top; "6% p.a., compounded monthly", "$250 per month" and "after 2 months" underlined as used. Row "r = 0.06 ÷ 12 = 0.005". Two `BalanceTable` rows: $12,000.00, interest $60.00, $250.00, owed $11,810.00; $11,810.00, interest $59.05, $250.00; on "cents" (bold) "$11,619.05" boxed. On "month" (bold) a chip "$11,500" fades in and is crossed (caption "interest forgotten"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A loan of fifty thousand dollars has interest at four point eight per cent a year, compounded monthly, with repayments of nine hundred dollars a month. Show that the amount owing after n months is fifty thousand times one point zero zero four to the n, minus two hundred and twenty-five thousand, times one point zero zero four to the n, minus one. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A loan of $50,000 has interest at 4.8% p.a., compounded monthly, with repayments of $900 per month. Show that the amount owing after n months is Aₙ = 50 000(1.004)ⁿ − 225 000(1.004ⁿ − 1)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing beyond the target (no ratio, no sum, no unfolded rows).

### 14. feedback 2 (brief)
> The repayments give nine hundred times a geometric series with ratio one point zero zero four and n terms. Its sum is one point zero zero four to the n, minus one, over zero point zero zero four, and nine hundred over zero point zero zero four is two hundred and twenty-five **thousand**. Using zero point zero zero four as the ratio is wrong. The ratio is one plus **r**.

Visual: card shrinks to the top; "4.8% p.a., compounded monthly", "$900 per month" and "after n months" underlined as used. Rows: "r = 0.048 ÷ 12 = 0.004; ratio 1.004"; "Aₙ = 50 000(1.004)ⁿ − 900(1 + 1.004 + … + 1.004ⁿ⁻¹)" with the bracket tagged "GP: a = 1, ratio 1.004, n terms"; "= 50 000(1.004)ⁿ − 900(1.004ⁿ − 1)/0.004"; on "thousand" (bold) "= 50 000(1.004)ⁿ − 225 000(1.004ⁿ − 1)" with a tick. On "r" (bold) a chip "(0.004ⁿ − 1)/(0.004 − 1)" fades in and is crossed (caption "ratio is 1 + r, not r"). Hold about 1 second.

### 15. handoff
> So a reducing-balance loan is compound interest with a repayment taken off every period, and its balance falls slowly at first, then faster. Here's the home loan again, cleared in thirty years. What if you paid two thousand five hundred dollars a month instead? How much sooner would it be **gone**?

Visual: the memory-aid line shows small at the top, then fades on "Here's the home loan". Board clears to scene 9's `LoanBalanceGraph` (no markers): the $2,147.29 curve from $400,000 to $0 at 30 years, labelled "$2,147.29 a month: 30 years". On "two thousand five hundred" a dashed grey ghost curve labelled "$2,500 a month?" draws below it and stops partway; on "gone" (bold) a "?" appears on the time axis where it would end, with a chip "Next: pay more, or pay a higher rate?" and a "?" chip. No term for $2,500 and no formula. Hold about 2 seconds. This is f10's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Reducing-balance loan: interest is charged each period on the balance still owed. Rate per period r = annual rate ÷ periods per year (monthly: ÷ 12).
2. Recurrence: Aₙ₊₁ = (1 + r)Aₙ − M, with A₀ = P (the principal). Interest first, then the repayment.
3. Each period the interest falls, so more of the same repayment reduces the debt. The balance falls slowly at first, then faster.
4. Unfolding: Aₙ = P(1 + r)ⁿ − M[1 + (1 + r) + … + (1 + r)ⁿ⁻¹] = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r. The ratio of the series is 1 + r.

Memory aid (large, on the notes screen): *Grow, then pay: × (1 + r), then − M.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 15's frame exactly (the $2,147.29 curve to $0 at 30 years, the dashed "$2,500 a month?" ghost ending in "?", the chips "Next: pay more, or pay a higher rate?" and "?"). This is the final frame and f10's opening frame.

## Teaching checks

- **Does it explain causes?** Why the balance is multiplied by 1.006: interest of 0.6% on what is owed is added (2). Why order matters: interest is charged on the month's balance before the end-of-month repayment (3). Why each repayment pays off more: the balance is lower, so the interest is lower, leaving more of the same $600 (4, 5). Why each repayment carries its own power of 1.006: it stopped interest on that amount from the month it was paid (6). Why the closed form exists: the repayments form a GP with ratio 1 + r (7). Why the 30-year curve sags: early repayments are about 78% interest (9).
- **Misconceptions addressed:** interest on the original amount (2); repay before interest (3); the balance falls by the same amount each month (hook, 5); an even split from the start (9); half the time, half the debt (9); interest forgotten (A1 crossed); ratio r instead of 1 + r (7; A2 crossed).
- **One idea at a time:** one loan per worked scene (1 to 8 the car loan; 9 the home loan); the table shrinks to a single-chip result before the algebra starts (6); rows replace each other with only the needed results kept.
- **Video makes it easier:** the student watches each month's balance go up by an arc and down by an arc (1 to 3), sees the interest/debt boundary inside the same repayment bar move a little each month (5), sees each repayment's bracket of months match its power (6), and sees the loan's curve sag above a straight line (9). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given (with units) visible, 10 seconds each with the invitation to pause, nothing answer-bearing (A2's target expression is the demand itself). One crossed mistake each; feedback about 29 s and 28 s (scenes 12 and 14).
- **Avoided double teaching:** f06's sum formula appears as a recalled chip and is used, not re-derived; f08's growth factor 1 + p/100 is used in one phrase.
- **Syllabus coverage:** `ci4ca53e2c` (2 to 8; key notes 1 to 4; A1 the recurrence, A2 the algebraic form).
- **Out of scope by design:** changing r or M (f10); solving for M, n, the amount owing as a task and the total paid (f11); annuities and present value (f12 to f15); offset and redraw.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A loan of $12,000 has interest at 6% p.a., compounded monthly. It is repaid at $250 per month. How much is owed after 2 months?"
Model answer: r = 0.06 ÷ 12 = 0.005; A₁ = 1.005 × 12 000 − 250 = $11,810; A₂ = 1.005 × 11 810 − 250 = 11 869.05 − 250 = $11,619.05. Classic mistake (crossed): "$11,500" (12 000 − 2 × 250; no interest).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** "A loan of $50,000 has interest at 4.8% p.a., compounded monthly, with repayments of $900 per month. Show that the amount owing after n months is Aₙ = 50 000(1.004)ⁿ − 225 000(1.004ⁿ − 1)."
Model answer: r = 0.004; Aₙ = 50 000(1.004)ⁿ − 900(1 + 1.004 + … + 1.004ⁿ⁻¹), a GP with a = 1, ratio 1.004, n terms; sum = (1.004ⁿ − 1)/(1.004 − 1) = (1.004ⁿ − 1)/0.004; 900/0.004 = 225 000, so Aₙ = 50 000(1.004)ⁿ − 225 000(1.004ⁿ − 1). Classic mistake (crossed): summing with ratio 0.004.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Car loan (site) | $30,000; 7.2% p.a. monthly; r = 0.006; M = $600; ×1.006 → $30,180; A₁ = $29,580 | 1 to 3 |
| Table (site) | interest $180, $177.48, $174.94; debt paid off $420, $422.52, $425.06; balances $29,580, $29,157.48, $28,732.42 (28,732.42488) | 4, 5 |
| Unfolding | A₂ = 30 000(1.006)² − 600(1.006) − 600; A₃ with powers 3, 2, 1, 0 | 6 |
| Closed form | (1.006ⁿ − 1)/0.006; 600/0.006 = 100 000; A₃ = 30 543.25 − 1 810.82 = $28,732.42 | 7, 8 |
| Home loan | $400,000; 5% p.a. monthly; r = 1/240; M = $2,147.29; interest month 1 $1,666.67, debt paid $480.62 (≈ 78% interest); 15 years $271,534.70; below half after repayment 242 (about 20 years) | 9, 15 |
| A1 | r = 0.005; $11,810; $11,619.05; crossed $11,500 | 11, 12 |
| A2 | r = 0.004; 900/0.004 = 225 000; crossed ratio 0.004 | 13, 14 |
| Handoff | $2,147.29: 30 years; "$2,500 a month?" ghost | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy and exact fractions (2 Nov, isolated run); Codex to re-check.

- 0.072/12 = 0.006; 30 000 × 1.006 = 30 180; 30 180 − 600 = 29 580.
- 29 580 × 0.006 = 177.48; 29 580 × 1.006 − 600 = 29 157.48; 29 157.48 × 0.006 = 174.94488; 29 157.48 × 1.006 − 600 = 28 732.42488; principal parts 420, 422.52, 425.05512; interest total 532.42488.
- 1.006³ = 1.018108216; 30 000(1.006)³ − 100 000(1.006³ − 1) = 28 732.42488.
- r = 1/240; 400 000/240 = 1 666.666…; 2 147.29 − 1 666.666… = 480.6233…; 1 666.666…/2 147.29 = 0.7762.
- Balance after 180 repayments with M = 2 147.29: 271 534.70; first below 200 000 after repayment 242 (A₂₄₁ > 200 000 > A₂₄₂); A₂₄₀ = 202 447.63.
- Balance after 300 repayments 113 784.14; 301st repayment: interest 113 784.14/240 = 474.10, debt paid off 1 673.19.
- Exact 30-year repayment 400 000 × (1/240)(241/240)³⁶⁰/((241/240)³⁶⁰ − 1) = 2 147.2865…; rounded 2 147.29.
- A1: 11 810; 11 619.05. A2: 900/0.004 = 225 000; A₁₂ = 41 412.71 by both forms.

## Memory aid check

- **"Grow, then pay: × (1 + r), then − M."** Original. Meaning, as said in scene 10: each period the balance first grows by its interest (multiply by 1 + r), then the repayment is subtracted. Assumptions checked: interest compounds once per repayment period at the rate per period r (both attempts and every example; key note 1 gives the conversion); repayments are made at the end of each period (the 2024 HSC loan convention, and the site's); the repayment is the same each period. It helps a new case: a loan with quarterly repayments and interest compounded quarterly uses r = annual rate ÷ 4 with the same order. It would mislead for repayments at the start of a period, which this course does not set. Introduced after the cause and the uses (2 to 9).
- **Considered, not used:** the site's "ad mortem: toward death" etymology of amortisation (a word not used in this video); "the bank collects first" (true in order, but personifies the lender).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,184 characters**, 16 scenes. Characters per scene (1 to 16): 354, 538, 517, 606, 289, 524, 485, 507, 494, 158, 212, 371, 380, 364, 295, 75 (the total includes the 15 joining spaces). At 13.3 characters per second the speech is about 465 s; add 3 s for the hook's prediction, about 12 s of settling time for the table rows (4), the split bars (5) and the curve (9), 20 s for two countdowns, 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 565 s**, inside the band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 3's "Without the repayment, this would just be compound interest." (keep the grey tag; the next sentence carries the point's wording); scene 9's "Halfway through, at fifteen years, you still owe about two hundred and seventy-one thousand dollars." (keep the marker and readout silent). More than about 680 characters of trims would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12f09` (route math-a12-f09). Suggested explainer folder `src/explainer/lessons/math-a12-f09` and build folder `docs/production/claude-pm/lessons/m-a12f09` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, one-month, recurrence, balance-table, paying-off-more, unfolding, geometric-inside, formula-meaning, whole-loan, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f08's last frame continues into scene 1 (camera continue, same strip); 1 to 2 to 3 camera continue; 3 to 4 clear change (strip to table); 4 to 5 camera continue; 5 to 6 clear change (table to algebra); 6 to 7 to 8 camera continue; 8 to 9 clear change (graph); 9 to 10 camera pull back to the aid; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: hook prediction (3 s); attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f09-learning-review.md`, `science_check` = `checks/m-a12f09-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Sequence parts from f01 to f08: `PeriodTimeline` (f04, with f08's interest and repayment arcs), the f06 sum as a chip (no `ShiftCancelRows` run).

New parts: `BalanceTable`, `LoanBalanceGraph`, `RepaymentSplit`, and `PeriodTimeline` `loanMode` (below).

## Codex asset brief

No painted plate is needed (programme decision 5; no people, no bank branding, no buildings or cards; the loans are numbers). Coded kit parts for the finance-parts kit brief, in `src/explainer/math/`, exported through `kit.tsx`, each with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. All money is computed from one shared loan engine (`loanSchedule(P, r, M, periods)` returning exact-precision rows) so tables, bars, curves and readouts agree; display rounds to the cent with en-AU separators ("$28,732.42"), and the engine never rounds between rows unless `roundEachPeriod: true` is set (default false; open decision 3).

1. **`PeriodTimeline` `loanMode`** (scenes 1 to 3, 6; f08 scene 13). Per period two arcs: an amber up-arc "×(1 + r)" from the opening bar to an interest-added bar, then a red down-arc "−M" to the closing bar. Props: `principal`, `rate` (per period), `repayment`, `periods`, `shownThrough` (later bars show "?"), `arcOrderLabels` (show "1" and "2"), `ticksOnly` (mini mode for scene 6: repayment ticks at period ends with amber month brackets labelled with powers "(1.006)²"). Checks: 30 000 → 30 180 → 29 580; the "?" bar fills only on cue.
2. **`BalanceTable`** (scenes 4, 5, 12; f10, f11). Columns configurable: period, owed at start, interest, repayment, debt paid off, owed at end. Rows reveal cell by cell on cues; each closing value slides down to open the next row. Props: `engine` (loan schedule), `rows` (range), `columns`, `highlight` ({row, col, at}), `note` (rounding note text), `ellipsisRows` (for long loans: show first k rows, a "⋮" row and chosen later rows such as 120, 240), `finalRow` (a smaller last payment, f10, f11). Checks: car-loan rows match author note b to the cent; row 3 displayed interest + debt paid off = $600.00 (if display rounding breaks this, the part shows the true values and flags it); A1 rows 11,810.00 and 11,619.05.
3. **`RepaymentSplit`** (scenes 4, 5, 9; f10 scene 2). A horizontal bar of length M split into an amber interest part and a teal "debt paid off" part, labelled with cent values; side-by-side mode for consecutive periods, with the boundary animating between them; `compareRepayments` mode (f10: two bars of different M with the same interest part). Checks: $180 / $420, $177.48 / $422.52, $174.94 / $425.06; $1,666.67 / $480.62.
4. **`LoanBalanceGraph`** (scenes 9, 15; f10 and f11). Balance against time (periods, with a years axis option) computed from the engine for one or more `curves` ({P, r, M, label, colour, style: solid | dashed | ghost, stopAt?}); each curve ends where the balance reaches 0 (the final part payment handled), with an optional end marker and term readout; `referenceLines` ({value, label}: such as the half line $200,000); `marker` ({curve, at, readout}) that runs along a curve; `straightChord` (optional dashed straight line from start to end, to show the sag); `neverRepaid` (a curve that rises or stays flat when M ≤ Pr, drawn with an arrow off the right edge: f10); `axisWindow`. Checks: $400,000 at 1/240 with M = 2 147.29 ends at 360 (−2.92 last-period overshoot handled as a smaller final payment); readout at 180 = $271,534.70; half-line crossing between repayments 241 and 242. Fit check at 1920 and phone landscape with six-figure axis labels.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table, to the cent.
2. Confirm the syllabus quote matches the official 2024 text, and that no site module label appears in learner copy or metadata.
3. Confirm the scope of learner-visible general claims: "interest is charged on the balance you still owe" (2, key note 1); "a reducing-balance loan is a compound interest loan with a repayment taken off every period" (3); "each month a little more of the repayment goes towards the debt" (5, key note 3; true while M > Pr); "the balance falls slowly at first, then faster" (9, 15, key note 3).
4. Confirm the unfolding and closed form (6 to 8): the powers 3, 2, 1, 0; the GP has a = 1, ratio 1.006, n terms; Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r; A₃ by formula equals the table.
5. Confirm every money rounding is stated where it happens (the table note; "rounded to the cent" in scenes 4 and 9), and that full precision is carried between rows.
6. Confirm both attempts carry every demand and unit, are original in wording, and that neither card shows a monthly rate, ratio, sum or table.
7. Confirm the opening matches f08's scene 13 exactly and the handoff (scene 15) gives no term for $2,500 and no formula; scene 16 returns to it.
8. Confirm no people, bank names or logos appear in any visual.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Reducing-Balance Loans Month by Month: The Recurrence and the Geometric Sum | Year 12 Maths Advanced

(Title length: 102 characters. Shorter alternative: "Reducing-Balance Loans: What Happens Each Month | Year 12 Maths Advanced", 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/financial-mathematics/lesson12.sa.html

Borrow $30,000 at 7.2% a year, compounded monthly, and repay $600 a month. Each month the balance is multiplied by 1.006, then the repayment comes off. See why interest is charged on what you still owe, how that one step becomes the recurrence Aₙ₊₁ = (1 + r)Aₙ − M, why each repayment pays off a little more of the debt than the one before, and how unfolding the recurrence reveals a geometric series with ratio 1 + r, giving Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r. Then watch a 30-year home loan's balance fall slowly at first and faster later, staying above half until about year 20. A memory aid: grow, then pay. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, financial mathematics.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise a reducing balance loan algebraically as a compound interest loan with periodic repayments"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Builds on: Finite geometric sums and geometric growth models (previous videos). Next: How rate and repayment changes alter a loan term.

#Year12Maths #MathsAdvanced #FinancialMaths #HSCScience

## Open decisions

- **1. Length (root).** About 565 s, close to the cap, because the strand's first loan video carries the vocabulary, the recurrence, a table, the unfolding and a whole-loan curve. Reserve trims are listed under "Narration length estimate". The hook's 3 s prediction can drop if the voiced preview runs over.
- **2. Feedback lengths (root).** Feedback 1 and 2 run about 29 s and 28 s (scenes 12 and 14), inside the range.
- **3. Rounding each period (maths check).** The design carries full precision between rows (site practice; HSC answers to the cent at the end). Real lenders round interest each period; the difference in this table is at most a cent. Confirm the "rounded to the cent; the full values are carried to the next row" note is the right learner rule.
- **4. Home-loan repayment ahead of f11 (learning review).** Scene 9 uses $2,147.29 before f11 shows how it is found (a grey chip "found later" sits beside the givens; no speech). Confirm this is acceptable, or replace the curve with a repayment the student can check now (any M, with the term left unstated).
- **5. "More than three quarters" (learning review).** Spoken for the first month's interest share (0.776); the grey readout "≈ 78% interest" shows the value. Confirm the words are clear.
- **6. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f06's geometric sum and f08's growth factor; check that interest on what is still owed is said before the recurrence; that the order "interest first" is a condition, not a caveat; that the hook's prediction is answered with the table's evidence; that each repayment's power has its cause spoken; that the ratio collision with f05 to f08's r is resolved clearly; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The arcs, the moving split boundary, the month brackets and the sagging curve carry the explanation; judge them at playback speed in the voiced preview. Every bar, cell, point and readout must come from the same loan engine as the displayed expressions.
- The opening frame is f08's scene 13 (root note 2 Nov). If f08's handoff changes in review, change scene 1's first visual to match. Scene 15 must match f10's opening (same designer).
