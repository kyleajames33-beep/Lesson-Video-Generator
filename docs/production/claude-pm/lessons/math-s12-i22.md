# Maths S12 I22: How do the starting amount, payment, rate and term change an annuity's value? One input at a time in a spreadsheet, and why time beats everything (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings 1 to 33 (`../checks/root-rulings-maths-standard-outline.md`). Not voiced. Next: Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,642 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 524 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i22-learning-review.md` (summary `../checks/m-s12-i12-i23-learning-review-summary.md`), with root's rulings 1 to 42 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i12-i23-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, key note 3 ("more than in proportion" read as the value): **accepted**. Key note 3 is "Longer time or higher rate: the interest grows more than in proportion." Scene 8 adds "in the interest": "interest on interest makes the difference in the interest bigger than you'd expect".
2. Optional, scene 7 ("the example from the lesson notes"): **applied**. "Here's a classic example." It saves exactly the characters scene 8 gains, so the total is unchanged.

Narration 5,642 characters by script (Revision 1: 5,642), about 524 s with holds, 46 s under the 570 s cap. Changed money was rechecked with SymPy (`work/brief-resolve-standard-i2/verify.py`, `python -I`). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Year 12 Mathematics Standard (2024), outline playlist order 35, Annuities. **Standard 2 only.** "Using digital tools" is part of the point, so the main tool is a spreadsheet with four input cells, plus one look at an unbranded online savings calculator. No formula is shown; every value comes from the spreadsheet (root ruling 33). Pre-design pack: `../pre-design/maths-standard/math-s12-i22.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/annuities/lesson02.sa.html` (SHA256 `7507f0b0368b652290ae14ed4768d709dd55e5448c5f224999d1e195c4aa708a`; card 07's two investors, $200 a month at 6% from 25 and from 35) and `lesson01.sa.html` (SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`; card 08's "raise the contribution, lengthen the term, change the rate"). The site never varies the amount initially invested and shows no digital tool (MS-29), so those parts are original. Route entry: `math-s12-i22` in `../../programme/maths-standard-route-inputs-3.json`. Visual system: maths studio kit; the pay envelope plate; the spreadsheet, results log, bars, calculator window and curves coded.

Owner rules applied: as i13 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, words before symbols, a short "why this matters", g01 worked example, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (work: a first-job savings plan of $100 a month), Australian spelling, no em dashes, money spoken naturally, conversational narration).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-3.json`:

Standard 2 (Annuities):
- `ci025a6c75`: "Examine the effect of varying the amount initially invested, the value of the periodic payment, the interest rate and the duration of the annuity on the total value of the investment, using digital tools"

Standard 1: no matching content point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3 (Standard 2)

**Boundary:** starts from i21's final frame exactly (the two timelines small, both reaching $50,000; an empty spreadsheet with four blank input cells "amount initially invested", "payment each period", "rate per period", "number of periods" and an empty "future value" cell; chips "change one input at a time: which matters most?", "Next: what changes an annuity's value", "?"). Recalls i19 (the annuity spreadsheet, filled down), i20 and i21 (future value; a single sum earns for the whole term) and i02 (a single sum grows by (1 + r)^n) in a phrase or grey chip each. Teaches: a base case and four single changes, one input at a time, with the total contributed and the interest compared each time; doubling the payment doubles the value (every deposit and its interest double); doubling the term more than doubles it (interest on interest for longer); halving the rate less than halves the value and cuts the interest by more than half; an amount initially invested adds that amount grown for the whole term; which change matters most and why starting early matters (site card 07). Stops at the effect of each input. Not taught: superannuation rules and decisions (i23); closed-form formulas.

## Decisions

- **Anchor: a first-job savings plan in a spreadsheet (painted plate, live).** $100 at the end of each month from a part-time wage, at 0.5% a month (6% p.a.), for 120 months, with $0 initially: future value $16,387.93; contributed $12,000; interest $4,387.93. Changes, one at a time: payment $200: $32,775.87 (exactly double); 240 months: $46,204.09 (contributed $24,000; interest $22,204.09, five times the base interest); rate 0.25% a month (3% p.a.): $13,974.14 (interest $1,974.14, under half the base interest); $2,000 initially: $20,026.73 (the $2,000 alone grows to about $3,639). Work and money; the pack's anchor 1. The pack's rate experiment (1% a month, 12% p.a.) is replaced by halving the rate to 3% p.a., because 12% p.a. is not a realistic savings rate (ruling 5) and halving shows the same "not in proportion" idea.
- **Worked example (g01, scene 4): doubling the term.** Task strip, givens, the results log, working, framed answer "$46,204.09: contributions double, interest five times", crossed slip "double the time, double the value: $32,775.86" (caption "time compounds: it more than doubles").
- **Starting early (scene 7): the site's card 07.** Two savers each put in $200 a month at 6% p.a.: one from 25 to 65 (40 years) reaches $398,298.15; one from 35 to 65 (30 years) reaches $200,903.01. Ten more years and $24,000 more paid in nearly doubles the result. Drawn as two account books, never people (the site's "Investor A" and "Investor B" become "saver 1" and "saver 2").
- **Digital tools.** The spreadsheet (four inputs; the model filled down 120 or 240 rows behind the output cell; a results log that gains a row per experiment) and one unbranded online savings calculator window (a coded browser frame, not a phone; Advanced f14's phone app is not reused) confirming the base case.
- **Site corrections.** MS-29 (no amount initially invested, no digital tool): filled here. The site's SA 3 (stopping at 35 still beats starting at 35) is not used, to keep one starting-early story.
- **Rates (ruling 5, ruling 32), read 18 November 2026.** RBA statistical table F4, Advertised Deposit Rates (October 2026): banks' bonus savings accounts 5.05% p.a.; online savings 3.30% p.a. (https://www.rba.gov.au/statistics/tables/csv/f4-data.csv). 6% p.a. is a slightly generous teaching rate; 3% p.a. is close to today's online savings rate. Said once in scene 2: "a little above today's best savings rates; rates change".
- **Join.** Scene 1 opens on i21's final frame exactly. Scene 13 is i23's opening frame.
- **Simulations (standard item 3).**
  1. **Input panel with recalculation** (scenes 2 to 6; `SpreadsheetGrid` input panel): one input cell glows, its value changes, a shimmer runs down the hidden model rows, and the output and "total contributed" cells update; the changed input resets to the base before the next experiment.
  2. **Results log and split bars** (scenes 2 to 6): each experiment adds a log row and a bar split into violet "contributed" and amber "interest" on one scale; the $200 bar is exactly twice the base bar in both colours; the 240-month bar's amber part is five times the base's.
  3. **Two savers' curves** (scene 7; `StudioPlot`, age 25 to 65, $0 to $400,000): the two balance curves rise side by side after 35, then the earlier saver's pulls away; the gap at 65 is bracketed.
- **Colour roles (fixed for i19 to i23).** Balance and future value **blue**; interest **amber**; payment and contributions **violet**; the amount initially invested **teal**; the input being changed **gold glow**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Input cells 44 px; output cell 56 px; log rows 36 px; bar labels 36 px; graph labels 34 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "one input at a time", "same answer", "payment × 2 → value × 2", "time × 2 → interest × 5", "interest on interest, for longer", "rate ÷ 2 → interest less than ÷ 2", "a head start earns all the way", "compare what went in", "10 years earlier: nearly double". At most two live at once.
- **Stage changes (standard item 2).** i21's frame (1); the base case and the calculator check (2); the payment change (3); the g01 board for the term change (4); the rate change (5); the starting amount (6); the two savers' curves (7); framed card (8); question cards (9 to 12); the payslip frame for i23 (13); key notes (14).
- **Memory aid.** Framed card: "Payment scales. Time compounds." Key line: "Change one input at a time, and compare what went in with what came out."
- **Visual surprise.** In scene 4 the contributions bar doubles but the interest bar grows five times, towering over the base bar's amber slice.
- **Plain meanings at first use.** Input ("a cell you can change"); amount initially invested ("a lump sum put in at the very start"); duration ("how long the annuity runs"); base case ("the plan before any change").
- **Attempts (original, HSC style; the pack's two questions, case C changed to the halved rate).** A1: a spreadsheet's base case and four cases (A payment $200, B 240 months, C rate 0.25%, D $2,000 initially): contributed and interest for A and B, why B is much larger, how much the $2,000 grows to in D ($3,638.80 from the table); crossed "(c) $2,000" (caption "it earns interest for all 120 months"). A2: two savers at $150 a month and 6% p.a., one for 20 years from 18 ($69,306.13), one for 10 years from 28 ($24,581.90): the extra contributed ($18,000), the extra at the end ($44,724.23) and why; crossed "Alex has $18,000 more" (caption "his early dollars earned interest for longer").
- **Mistake scene:** none separate. Doubling the term doubles the value (4 crossed); doubling the payment more than doubles it (3, said); halving the rate halves the interest (5, said); an initial amount stays at face value (A1 crossed); comparing final values without what went in (A2 crossed); changing two inputs at once (2, said).
- **Cause chain taught, in order:** (1) changing one input at a time shows which one caused the change (2); (2) doubling the payment doubles every deposit and so every interest amount, so the value exactly doubles (3); (3) a longer term adds deposits and gives every earlier dollar more periods of interest on interest, so the value more than doubles (4); (4) a lower rate cuts each period's interest and the interest on that interest, so the interest falls by more than half (5); (5) an initial amount earns for the whole term, like i21's single sum (6); (6) so starting earlier is the most powerful change (7).
- **Entry knowledge (route):** i19 (spreadsheet annuity), i20 and i21 (future value; single sums), i02 (a single sum grows by (1 + r)^n). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-i23, "How do annuities answer superannuation, savings and loan decisions?").** Scene 13: a coded, unbranded payslip strip (1,200 × 200 px) with the lines "Gross pay", "Tax", "Net pay" and "Super (12%)", all amounts blank, the "Super (12%)" line ringed amber; the small SUV plate `ms12-small-suv-v1.png` (about 500 px) beside a coded chip "save for it, or borrow?"; the house key plate small; chips "super, saving or borrowing: three decisions", "Next: annuities in real decisions" and "?". No amount is shown. This is i23's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Future values (0.5% a month unless stated): $100, 120: 16,387.93; $200, 120: 32,775.87; $100, 240: 46,204.09; $100 at 0.25%, 120: 13,974.14; $100 at 1%, 120 (the pack's case, not used): 23,003.87; $2,000 initially + $100, 120: 20,026.73; 2,000 × 1.005^120 = 3,638.79.
  (b) Interest: base 4,387.93; $200: 8,775.87 (2 ×, to a cent of rounding); 240 months: 22,204.09 (5.06 ×); 0.25%: 1,974.14 (0.45 ×). 2 × 16,387.93 = 32,775.86 (the slip; the true doubled payment is 32,775.87 from rounding).
  (c) Card 07: $200 at 0.5% for 480 months: 398,298.15; for 360 months: 200,903.01; extra contributed 24,000.
  (d) A1 table: base 16,387.93; A 32,775.87; B 46,204.09; C 13,974.14; D 20,026.73. Answers: A contributed 24,000, interest 8,775.87; B contributed 24,000, interest 22,204.09; D 20,026.73 − 16,387.93 = 3,638.80 (3,638.79 exactly). A2: 150 × FV factor (0.5%, 240) = 69,306.13; (0.5%, 120) = 24,581.90; 36,000 − 18,000 = 18,000; 69,306.13 − 24,581.90 = 44,724.23.
  (e) Pronunciations: "sixteen thousand three hundred and eighty-seven dollars ninety-three"; "forty-six thousand two hundred and four dollars nine".

Main question: *A first job's $100 a month goes into savings at 6% a year for 10 years. What happens to the final value if we change the payment, the time, the rate, or the starting amount, one at a time?*
Entry knowledge (i19, i20, i21, i02): the spreadsheet annuity; future value; single sums.
Stops after: four single changes in a spreadsheet, a calculator check, and the starting-early story. No super, no formula.
Handoff: math-s12-i23: "a payslip's super line, a car to save for or borrow for: three decisions".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): future value blue; interest amber; payments violet; initial amount teal; changed input gold glow; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ANNUITIES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: four dials
> Last time, the same fifty thousand dollars came from many small deposits, or one smaller sum now. So the starting amount matters, not just the deposits. And so do the rate, and the time. This spreadsheet has four inputs: the amount you start with, the payment, the rate, and the number of periods. Change any one, and the final value **changes**. So how do the starting amount, payment, rate and term change an annuity's **value**?

Visual: opens on i21's final frame exactly (the two timelines small, the empty spreadsheet with four blank inputs, chips). On the first sentence the "Next" chip fades and the timelines shrink to a 30 px strip. On "four inputs" the four input labels ring one after another. On "changes" the output cell flickers. On "value" heading "What changes an annuity's value?" writes on, and the question chip "Which input matters most?" moves to the top right; the pay envelope plate appears as a 300 px badge at the top left.

### 2. the base case
> Here's the starting plan. A first job puts a hundred dollars a month into savings, at six per cent a year, which is half a per cent a month, for ten years, a hundred and twenty months. Six per cent is a little above today's best savings rates, and rates change. Nothing is invested at the start. The spreadsheet gives a future value of sixteen thousand three hundred and eighty-seven dollars ninety-**three**. Twelve thousand of that is what you put in, so four thousand three hundred and eighty-seven ninety-three is interest. An online savings calculator gives the same **answer**. Now the rule for experiments. Change one input at a time, so you know which one did it.

Visual: stage change: the `SpreadsheetGrid` input panel (1,500 × 560 px) fills the frame: "amount initially invested $0" (teal), "payment each period $100" (violet), "rate per period 0.5%" (amber), "number of periods 120" with a grey chip "10 years × 12", and a grey chip "example rate (RBA F4, Oct 2026: bonus savers 5.05% p.a.)". On "three" the output cell (56 px) shows "$16,387.93" (blue) after a shimmer down a hidden-rows bar labelled "120 rows, as in i19". Cells "total contributed $12,000" (violet) and "interest $4,387.93" (amber). A results log under the panel gains row "base | $16,387.93 | $12,000 | $4,387.93", and a split bar (simulation 2) draws. On "answer" a small coded browser window (unbranded, 560 × 360 px) at the right with fields "regular deposit $100 a month", "rate 6% p.a.", "term 10 years" and "$16,387.93", hand tag "same answer". On "one input at a time" hand tag "one input at a time".

### 3. double the payment
> First experiment. Double the payment to two hundred dollars a month, and leave everything else **alone**. The future value becomes thirty-two thousand seven hundred and seventy-five dollars eighty-seven, exactly **double**. That makes sense. Every deposit doubles, so the interest each one earns doubles too. The payment just scales everything.

Visual: camera continue. On "alone" the payment cell glows gold and changes "$100" to "$200"; the shimmer runs. On "double" the output reads "$32,775.87"; log row "payment $200 | $32,775.87 | $24,000 | $8,775.87"; its bar draws exactly twice the base bar in both colours, hand tag "payment × 2 → value × 2". The payment cell resets to "$100".

### 4. worked example: double the time
> Now put the payment back, and double the time instead. Find the new future value, and compare it with the base. Twenty years is two hundred and forty **months**. The future value is forty-six thousand two hundred and four dollars **nine**. You've put in twenty-four thousand, double the base. But the interest is twenty-two thousand two hundred and four dollars, five times the base's interest. Why? The early dollars now sit there for twice as long, and the interest they've earned keeps earning more. A common slip is saying double the time gives double the value, about thirty-two thousand eight hundred. Time compounds, so it more than **doubles**.

Visual: clear change to the g01 board. Task strip, 44 px: "Base case: $100 a month at 0.5% a month for 120 months gives $16,387.93. Change only the number of periods to 240. Find the future value, the total contributed and the interest, and compare with the base." Givens card, 40 px: "payment $100" (violet), "0.5% a month" (amber), "n: 120 → 240" (gold glow). At the right the input panel small: on "months" the periods cell changes to "240"; the shimmer runs. Rows, 52 px: on "nine" "FV = $46,204.09" (blue); "contributed = 240 × $100 = $24,000" (violet); "interest = 46,204.09 − 24,000 = $22,204.09" (amber); "base interest $4,387.93: about 5 times" (framed green with the FV), hand tag "time × 2 → interest × 5". The log gains "240 months | $46,204.09 | $24,000 | $22,204.09"; its bar's amber part towers over the base's. On "keeps earning more" hand tag "interest on interest, for longer". On "doubles" a red slip "double the time, double the value: 2 × 16,387.93 = $32,775.86" writes and is crossed (caption "time compounds: it more than doubles").

### 5. halve the rate
> Back to ten years. This time, halve the rate, to three per cent a year, a quarter of a per cent a month. That's about what an online savings account pays **today**. The future value drops to thirteen thousand nine hundred and seventy-four dollars fourteen. You still put in twelve thousand, so the interest is now one thousand nine hundred and seventy-four, less than half the base's four thousand three **hundred**. A lower rate shrinks the interest, and the interest on that interest too.

Visual: stage change: the input panel full width; the periods cell resets to "120"; on "today" the rate cell glows gold and changes "0.5%" to "0.25%" (grey chip "RBA F4: online savings 3.30% p.a."); the shimmer runs; the output reads "$13,974.14". On "hundred" log row "rate 0.25% | $13,974.14 | $12,000 | $1,974.14"; its bar's amber slice is under half the base's, hand tag "rate ÷ 2 → interest less than ÷ 2". The rate cell resets.

### 6. a head start
> Last input. Keep the base plan, but start with two thousand dollars already in the account, say from savings at school. The future value rises to twenty thousand and twenty-six dollars seventy-**three**. That's about three thousand six hundred and thirty-nine more than the base, because the two thousand earns interest for the whole ten years, just like the single sum last lesson. A head start keeps earning all the **way**.

Visual: camera continue. The "amount initially invested" cell glows gold and changes "$0" to "$2,000" (teal); the shimmer runs. On "three" the output reads "$20,026.73"; log row "start $2,000 | $20,026.73 | $14,000 | $6,026.73". A teal row, 44 px: "the $2,000 grows to 2,000 × 1.005¹²⁰ ≈ $3,639", grey chips "i02: a single sum grows" and "i21: the single sum". On "way" the bar shows a teal block grown into a larger teal block on top of the base bar, hand tag "a head start earns all the way".

### 7. starting early
> So which change is the most powerful? Usually it's time. Here's a classic example. Two savers each put in two hundred dollars a month at six per cent a year. One starts at twenty-five, the other at thirty-five, and both stop at **sixty-five**. The early starter ends with about three hundred and ninety-eight thousand dollars. The later one ends with about two hundred and one thousand. The early starter only put in twenty-four thousand dollars more, but ends up with nearly double. Those ten extra years at the start earn interest for the longest **time**.

Visual: stage change: two account-book icons labelled "saver 1: from 25" and "saver 2: from 35" (coded, no people). The graph (simulation 3; age 25 to 65, $0 to $400,000): saver 1's curve starts at 25, saver 2's at 35; on "sixty-five" both run to 65, the first pulling away; end labels "$398,298.15" and "$200,903.01" (blue). Row, 44 px: "put in: $96,000 against $72,000"; the gap bracketed "nearly double", hand tag "10 years earlier: nearly double". On "time" the first ten years of saver 1's curve ring amber, hand tag "compare what went in".

### 8. memory aid
> Here's the summary. Double the payment, and the value doubles. But give it more time, or a better rate, and interest on interest makes the difference in the interest bigger than you'd expect. Payment scales. Time **compounds**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the results log's five split bars small. Main line, hand font 56 px: "Payment scales. Time compounds." On "compounds" the key line, 40 px: "Change one input at a time, and compare what went in with what came out." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A spreadsheet models an annuity, and each row changes one input from the base case. For cases A and B, find the total contributed and the interest earned. Both double the total contributed. Explain why B's future value is much larger. And in case D, how much does the two thousand dollars grow to? Pause here to answer.

Visual: `QuestionCard`, 38 px, worded as printed: "A spreadsheet models an annuity. Each row changes one input from the base case. (a) For cases A and B, find the total contributed and the interest earned. (b) Both A and B double the total contributed. Explain why B's future value is much larger. (c) In case D, how much does the $2,000 grow to?" Table, 32 px: "Case | Initially invested | Monthly payment | Rate per month | Months | Future value"; "Base | $0 | $100 | 0.5% | 120 | $16,387.93"; "A | $0 | $200 | 0.5% | 120 | $32,775.87"; "B | $0 | $100 | 0.5% | 240 | $46,204.09"; "C | $0 | $100 | 0.25% | 120 | $13,974.14"; "D | $2,000 | $100 | 0.5% | 120 | $20,026.73". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> A and B each put in twenty-four thousand. A's interest is eight thousand seven hundred and seventy-five eighty-seven, and B's is twenty-two thousand two hundred and four oh **nine**. B's money is invested for longer, so interest earns interest for a hundred and twenty more months. In D, the two thousand grows to three thousand six hundred and thirty-eight eighty. Saying it's still two thousand is the **slip**.

Visual: the card shrinks to the top (30 px); the table stays at 32 px. Rows, 40 px: "A: $24,000 in, interest $8,775.87"; on "nine" "B: $24,000 in, interest $22,204.09" (framed green). Row "(b) B: 120 more months of interest on interest" (framed green). Row "(c) 20,026.73 − 16,387.93 = $3,638.80" (framed green). On "slip" a red slip "(c) $2,000" writes and is crossed (caption "it earns interest for all 120 months"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Two friends each save a hundred and fifty dollars at the end of every month, at six per cent a year, compounded monthly. Alex starts at eighteen and saves for twenty years. Jo starts at twenty-eight and saves for ten years. A savings calculator gives Alex sixty-nine thousand three hundred and six dollars thirteen, and Jo twenty-four thousand five hundred and eighty-one ninety. How much more does Alex contribute? How much more does Alex have at the end? Explain the difference. Pause here to answer.

Visual: `QuestionCard`, 38 px: "Two friends each save $150 at the end of every month at 6% p.a., compounded monthly. Alex starts at 18 and saves for 20 years. Jo starts at 28 and saves for 10 years. A savings calculator gives Alex $69,306.13 and Jo $24,581.90. (a) How much more does Alex contribute than Jo? (b) How much more does Alex have at the end? (c) Explain the difference." Picture slot: two account-book icons "Alex" and "Jo" with empty bars. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> Alex puts in thirty-six thousand, Jo eighteen thousand, so eighteen thousand **more**. At the end, Alex has forty-four thousand seven hundred and twenty-four dollars twenty-three more. Alex's early deposits earn interest for many more months, and that interest earns interest. Saying Alex has only eighteen thousand more is the **slip**.

Visual: the card shrinks to the top. On "more" row, 44 px: "(a) 36,000 − 18,000 = $18,000" (framed green); "(b) 69,306.13 − 24,581.90 = $44,724.23" (framed green); "(c) early deposits earn for longer" (framed green). On "slip" a red slip "Alex has $18,000 more" writes and is crossed (caption "his early dollars earned interest for longer"). Hold about 1 s.

### 13. handoff
> So now you can see what drives an annuity. Next, we put it to work on three real decisions. What does super do with your first job's pay? Is it better to save for a car, or borrow for it now? And how much can a monthly repayment really borrow? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "super" a coded, unbranded payslip strip (1,200 × 200 px) with lines "Gross pay", "Tax", "Net pay", "Super (12%)", all amounts blank, "Super (12%)" ringed amber; on "save for a car" the SUV plate `ms12-small-suv-v1.png` (about 500 px) with a chip "save for it, or borrow?"; on "borrow" the house key plate small. On "next" chips "super, saving or borrowing: three decisions", "Next: annuities in real decisions" and "?". Hold about 2 s. No amount is shown. This is i23's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Change one input at a time; compare with the base case.
- Double the payment: the value exactly doubles.
- Longer time or higher rate: the interest grows more than in proportion.
- An initial amount earns interest for the whole term.
- Starting early is usually the biggest change.

Memory aid (framed card, right side, as in scene 8): *Payment scales. Time compounds.* Key: *Change one input at a time, and compare what went in with what came out.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and i23's opening frame.

## Teaching checks

- **Does it explain causes?** Why one input at a time: to know which caused the change (2). Why doubling the payment doubles the value: every deposit and its interest double (3). Why doubling the time more than doubles it: interest on interest for longer (4). Why halving the rate more than halves the interest (5). Why the initial amount is worth more at the end: it earns for the whole term (6). Why starting early wins (7).
- **Misconceptions addressed:** double the time, double the value (4 crossed); doubling the payment more than doubles it (3); halving the rate halves the interest (5); the initial amount at face value (A1 crossed); comparing final values without contributions (A2 crossed); changing two inputs at once (2).
- **Visual standard, item by item:** 1 the pay envelope from the first frame, as a badge; 2 a new stage every 25 to 60 s; 3 a live input panel with recalculation, a growing results log with split bars, the two savers' curves; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the 240-month interest bar towering at five times.
- **One idea at a time:** the base (2), payment (3), term (4), rate (5), initial amount (6), starting early (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 31 s and 25 s.
- **Avoided double teaching:** i19's spreadsheet, i21's single sum and i02's growth are recalled in a chip.
- **Standard 1 path:** not applicable (Standard 2 only).
- **Syllabus coverage:** `ci025a6c75`: the amount initially invested (6, A1 (c)), the periodic payment (3, A1), the interest rate (5), the duration (4, 7, A1 (b), A2), on the total value (all), using digital tools (2 to 6: spreadsheet and calculator). Key notes 1 to 5.
- **Out of scope by design:** super decisions (i23); closed-form formulas (ruling 33).

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 3 marks suggested, not an official marking scheme).** "A spreadsheet models an annuity. Each row changes one input from the base case. [Case | Initially invested | Monthly payment | Rate per month | Months | Future value: Base | $0 | $100 | 0.5% | 120 | $16,387.93; A | $0 | $200 | 0.5% | 120 | $32,775.87; B | $0 | $100 | 0.5% | 240 | $46,204.09; C | $0 | $100 | 0.25% | 120 | $13,974.14; D | $2,000 | $100 | 0.5% | 120 | $20,026.73] (a) For cases A and B, find the total contributed and the interest earned. (b) Both A and B double the total contributed. Explain why B's future value is much larger. (c) In case D, how much does the $2,000 grow to?"
Model answer: (a) A: contributed $24,000, interest $8,775.87. B: contributed $24,000, interest $22,204.09. (b) In B the money is invested for longer, so interest is earned on interest for 120 more months; in A the same 120 months are used, so the value simply doubles. (c) $20,026.73 − $16,387.93 = $3,638.80 (the $2,000 grows by 1.005^120; $3,638.79 exactly, a cent of rounding in the table). Classic mistake (crossed): "(c) $2,000".

**Attempt 2 (scene 11; original, HSC style, 3 marks suggested).** "Two friends each save $150 at the end of every month at 6% p.a., compounded monthly. Alex starts at 18 and saves for 20 years. Jo starts at 28 and saves for 10 years. A savings calculator gives Alex $69,306.13 and Jo $24,581.90. (a) How much more does Alex contribute than Jo? (b) How much more does Alex have at the end? (c) Explain the difference."
Model answer: (a) $36,000 − $18,000 = $18,000. (b) $69,306.13 − $24,581.90 = $44,724.23. (c) Alex's early deposits earn interest for many more months, and that interest earns interest; the extra $18,000 contributed becomes $44,724.23 more at the end. Classic mistake (crossed): "Alex has $18,000 more".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Base | $0; $100; 0.5%; 120; 16,387.93; 12,000; 4,387.93 | 2, 9 |
| Payment $200 | 32,775.87; 24,000; 8,775.87 | 3, 9 |
| 240 months | 46,204.09; 24,000; 22,204.09; about 5 times; slip 32,775.86 | 4, 9 |
| Rate 0.25% | 13,974.14; 1,974.14 | 5, 9 |
| $2,000 initially | 20,026.73; contributed 14,000; interest 6,026.73; about 3,639 (3,638.79) | 6, 9 |
| Card 07 | $200; 6%; 40 and 30 years; 398,298.15; 200,903.01; put in 96,000 and 72,000 | 7 |
| A1 | as the table; 8,775.87; 22,204.09; 3,638.80 | 9, 10 |
| A2 | 69,306.13; 24,581.90; 18,000; 44,724.23 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); the pack's values agree, and case C (0.25%) is new. Codex to re-check.

- FV = P0(1 + r)^n + M × FV factor: (0, 100, 0.5%, 120) 16,387.93; (0, 200, 0.5%, 120) 32,775.87; (0, 100, 0.5%, 240) 46,204.09; (0, 100, 0.25%, 120) 13,974.14; (2,000, 100, 0.5%, 120) 20,026.73; 2,000 × 1.005^120 = 3,638.79.
- Interest: 4,387.93; 8,775.87; 22,204.09; 1,974.14; 6,026.73. 2 × 16,387.93 = 32,775.86.
- 200 × FV factor (0.5%, 480) = 398,298.15; (0.5%, 360) = 200,903.01.
- 150 × FV factor (0.5%, 240) = 69,306.13; (0.5%, 120) = 24,581.90; difference 44,724.23.

## Memory aid check

- **"Payment scales. Time compounds."** with key line **"Change one input at a time, and compare what went in with what came out."** Original. Meaning, as said in scene 8: multiplying the payment by a number multiplies the future value by the same number, but a longer term (and a higher rate) changes the value by more than in proportion, because interest earns interest. Assumptions checked: one input changed at a time, the others at the base; "scales" holds for the payment only (and for the initial amount's own contribution), not for the rate or term; the rate stays fixed for the whole term. It helps a new case: tripling a $50 payment triples the value, but tripling the term from 5 to 15 years more than triples it. Introduced after scenes 2 to 7.
- **Considered, not used:** "Time is money's best friend" (memorable, but says nothing about the payment).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,642 characters** (Revision 2; Revision 1: 5,642), 14 scene headings. Characters per scene are in `../checks/root-decisions-maths-s12-i12-i23.md`, section 1.

At 13.3 characters per second the speech is about 424 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for each recalculation shimmer and bar (2 to 6) and the curves (7) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 524 s (8 min 44 s)**, 46 s under the 570 s cap. Feedback speech: about 31 s and 25 s.

Reserve trims if the voiced take runs long: scene 2's online calculator sentence (the window can stay silent); scene 5's "A lower rate shrinks the interest, and the interest on that interest too."

## Scene list and build ids

Lesson key `m-s12i22` (route math-s12-i22). Explainer folder `src/explainer/lessons/math-s12-i22`; build inputs in `docs/production/claude-pm/lessons/math-s12-i22/` (at voicing).

In order (14 scene headings): hook-four-dials, base-case, double-payment, worked-double-time, halve-rate, head-start, starting-early, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | i21's frame; the four inputs |
| 30 to 85 s | 2 | The base case and the calculator check |
| 85 to 110 s | 3 | Double the payment |
| 110 to 175 s | 4 | g01 board: double the time |
| 175 to 210 s | 5 | Halve the rate |
| 210 to 240 s | 6 | A head start |
| 240 to 285 s | 7 | The two savers' curves |
| 285 to 305 s | 8 | Framed memory card |
| 305 to 415 s | 9 to 12 | Question cards and countdowns, then feedback |
| 415 to 435 s | 13 | The payslip and car for i23 |
| 435 to 480 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i21's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 camera continue; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i22-learning-review.md`, `science_check` = `checks/m-s12-i22-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-phone-v1.png` (Advanced f14's savings-app anchor; not reused, as the pack asks; the digital tool is a spreadsheet and a coded desktop browser window). The two savers are coded account-book icons, never people.

Need: none new. Reused: `ms12-pay-envelope-v1.png` (badge), `ms12-small-suv-v1.png` and `ms12-house-key-v1.png` (final frame).

Coded: the input panel, results log and bars, the calculator window, the curves and account-book icons, the payslip strip, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `SpreadsheetGrid`, `CostSplitBars` (contributed against interest), `StudioPlot`, `ScreenApp` (as an unbranded browser calculator), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `accountFV` from `money.ts`.

Additions (kit-needs row i22):
1. **SpreadsheetGrid input panel, recalculation shimmer and results log:** four input cells (one glowing at a time), a hidden model, an output cell, and a log that gains a row per experiment. Check: the five log rows reproduce "Numbers used".
2. **Desktop calculator frame for `ScreenApp`:** a coded, unbranded browser window. Check: base inputs give 16,387.93.
3. **PayslipLine** (from i23's kit row) first appears blank on the final frame.

## Codex asset brief

No new plate for i22. `ms12-pay-envelope-v1.png` (brief in `math-s12-i19.md`), `ms12-small-suv-v1.png` (brief in `math-s12-i15.md`) and `ms12-house-key-v1.png` (brief in `math-s12-i21.md`) are reused.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that the description says Standard 2 only.
3. Confirm each experiment changes exactly one input from the base, and that case C is 0.25% (not the pack's 1%).
4. Confirm no annuity formula is shown and the calculator window is unbranded and not a phone.
5. Confirm the site's card 07 figures and that the savers appear as account books, not people.
6. Confirm both attempts carry every demand and neither card shows an answer.
7. Confirm scene 1 opens on i21's final frame, scene 13's payslip is blank, and the rate source line (RBA F4, October 2026) and "rates change" are present.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: How Each Input Changes an Annuity's Value | Year 12 Maths Standard

(Title length: 66 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson02.sa.html

A first job's $100 a month goes into savings for 10 years. What happens if you double the payment, double the time, halve the interest rate, or start with $2,000 already saved? Change one input at a time in a spreadsheet, check the base case with an online calculator, and compare what went in with what came out. See why doubling the payment doubles the value, but doubling the time gives five times the interest, and why starting ten years earlier nearly doubles a final balance. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates in this video are examples; real rates change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Annuities. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Examine the effect of varying the amount initially invested, the value of the periodic payment, the interest rate and the duration of the annuity on the total value of the investment, using digital tools"
Standard 1 has no annuities content.
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3

Builds on: Annuities: The Contribution Needed for a Savings Goal. Next: Annuities in Real Decisions: Super, Saving and Borrowing.

#Year12Maths #MathsStandard #Annuities #HSCScience

## Open decisions

- **1. Rate experiment: halve to 3% p.a. instead of the pack's 12% p.a. (root).** Chosen for realism (ruling 5); A1's case C changes to match. Confirm.
- **2. The starting-early story uses the site's card 07** ($200 a month, ages 25 and 35). Confirm, or use A2's figures only.

## Review notes

- Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" at the top and `../checks/m-s12-i12-i23-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.

- Revision 1. Next: student learning review (trace from i21 for a Standard 2 student; check that "one input at a time" is a reason and not a rule, that the bars make "scales" against "compounds" visible, that the head start is linked to i21's single sum, that the savers are clearly not people, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
