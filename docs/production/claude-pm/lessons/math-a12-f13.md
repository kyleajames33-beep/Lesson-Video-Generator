# Maths A12 F13: Why is annuity future value a geometric sum? Following each deposit, the sum newest first, the series with ratio 1 + r, and the formula with its conditions (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143), the sequence parts from f01 to f08 (`TermLadder`, `PeriodTimeline`, `ShiftCancelRows`), the finance parts from f09 to f12 (`PeriodTimeline` `depositMode`, `cashFlowMode` and `twin`, `BalanceTable`, `LoanBalanceGraph`, `ToolPanel`), plus one new part (`DepositLayers`) and a growth mode for `LoanBalanceGraph`, specified below. Nothing recorded; human listening pending.

Narration 5,595 characters, 15 scenes, about 519 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: second annuities video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 50), after f12 (what cash flows define an annuity) and before f14 (how starting balance, contribution, rate and duration change future value). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f09.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank names or logos. No brief 151 pack and no route-inputs-3 entry exist for f13 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson06.sa.html`, SHA256 `d54dd8e49e416d806273d69a6a5ff9e3d91adb9c65745e6400dc2f456a49bf3e` (card 05 derivation, Problem 1, traps 02 and 03, revisit, SA answers). Every number recalculated in Python with exact fractions. Course outline entry: `math-a12-f13` (two content points, site source lesson 6).

Owner rules applied: as f01 to f12 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; money exact to the cent in working, with every rounding stated; decimals only in grey readouts except money; attempt cards give nothing away; opens on f12's handoff frame; f06's geometric sum used, not re-derived; f12's recurrence recalled by use).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Annuities; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` (MathML in linear form):

- `ciaa055daf`: "Define and model the future value of an annuity as the sum of all the payments, together with the interest they have earned"
- `ci21651d90`: "Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

**Boundary:** starts from f12's last frame (scene 14 of `math-a12-f12.md`: the $200-a-month strip at 6% p.a. compounded monthly, three balances, "?" to "after 5 years: ?", "deposits: 60 × $200 = $12,000", chips "exactly $12,000", "a little more", "a lot more", "Next: add up the deposits and their interest"); follows each deposit separately to the end of month 60 (last earns nothing, first grows 59 months); writes the future value as the sum of the payments with their interest, newest first; recognises a geometric series (first term M, ratio 1 + r, n terms) and closes it with f06's sum to get $13,954.01; checks n = 3 against f12's recurrence ($603.01); states FV = M[(1 + r)ⁿ − 1]/r with its conditions; works site Problem 1 ($300, 4.8%, 5 years: $20,298.05); extends it to 30 years ($240,644.24) and shows interest overtaking contributions after 316 deposits. Stops at the model and a direct use of it. Not taught: varying the inputs and a starting balance (f14); fortnightly and quarterly problems, solving for M or n, two-stage problems (f15); present value; annuities due.

## Decisions

- **Learner question kept (outline).** "Why is annuity future value a geometric sum?" The answer, built in order: each deposit earns interest for a different time, because it goes in at a different month end and the balance is read at the end of month n (2); so the future value is every deposit with its own interest, added up, which is the point's own definition (3); listed newest first, each term is the one before times 1 + r, so the sum is geometric, with first term M, ratio 1 + r and n terms (3, 4); f06's sum closes it (4); the sum and f12's month-by-month rule give the same balance (5); the general formula and its conditions (6); because interest earns interest on a growing balance, the gap between future value and contributions widens over time (8).
- **Opening and hook (f12's question; f11's question completed).** f13 opens on f12 scene 14's frame. The hook repeats the question, asks for a guess (3 s prediction hold), and says that running the rule 60 times is slow, which motivates following each deposit instead. The answer ("a little more": $13,954.01, interest $1,954.01) is given in scene 4.
- **Following each deposit (the cause, on screen).** `DepositLayers` (new): each deposit is a green block placed at its own month end; an amber growth band rises on it from its month to month 60. Deposit 60: no band, "$200.00"; deposit 59: one month, "$201.00"; deposit 1: 59 months, "$268.43" (268.4309…). The sentence "Every deposit earns interest for a different length of time" closes the scene.
- **Newest first (why the order matters).** Listing from deposit 60 back to deposit 1 makes the terms 200, 200(1.005), …, 200(1.005)⁵⁹, a geometric series with first term 200 (site card 05: "The last payment earns no interest. The second-last earns one period. The first earns (n − 1) periods").
- **Ratio collision (necessary in learner copy; as f09).** f06 writes Sₙ = a(rⁿ − 1)/(r − 1) with r the ratio; here the ratio is 1 + r. Scene 4 says "where r was the ratio" when quoting f06, and scene 6 says "The ratio of the series is one plus r, not r, so its bottom line ... is just r."
- **Symbol M (strand decision; f12 open decision 2).** M for the payment, with the grey "some books write a" tag at first use in the formula (scene 6), because a is the first term in f06's formula, quoted in scene 4.
- **Check against the recurrence (f12 recalled by use).** n = 3: 200(1.005³ − 1)/0.005 = 603.005, shown "$603.01", the balance f12's rule gave after three months. One sentence names the two views: "The rule adds month by month. The sum adds deposit by deposit."
- **Formula and conditions (`ci21651d90`'s conditions stated).** FV = M[(1 + r)ⁿ − 1]/r: payments at the end of each period, future value read at the end of the last period straight after the last payment, r and n per period. These are necessary conditions; omitting them would teach the formula for annuities due or for annual rates with monthly payments.
- **Worked example (site lesson 6 Problem 1, numbers unchanged).** $300 at the end of each month, 4.8% p.a. compounded monthly, 5 years: r = 0.004, n = 60, FV = 300(1.004⁶⁰ − 1)/0.004 = $20,298.05 (20,298.0539…); contributions $18,000; interest $2,298.05. The site's rounded intermediates (1.2706, 67.660) are shown only as grey readouts; the working keeps the exact expression (site trap 03).
- **Long run (original extension of Problem 1).** The same $300 a month for 30 years: FV $240,644.24; contributions $108,000. Interest first exceeds the total contributed after the 316th deposit (FV $189,797.88 against $94,800 contributed; after 315 deposits interest $94,242.91 is still below $94,500); spoken as "after about twenty-six years". The cause is spoken: early deposits have decades to grow and their interest earns interest (site Q3 (b) reason).
- **Attempts (original).** (A1) "$900 is deposited at the end of each year for 5 years, into an account earning 5% p.a., compounded annually. (a) Write the future value as a sum of five terms. (b) Find the future value." Answer: 900 + 900(1.05) + 900(1.05)² + 900(1.05)³ + 900(1.05)⁴ = 900(1.05⁵ − 1)/0.05 = $4,973.07 (4,973.068125). Crossed: "$5,221.72" (every deposit given one extra year, as if paid at the start). (A2) "$250 is deposited at the end of each month for 2 years, into an account earning 3.6% p.a., compounded monthly. Find the future value and the interest earned." Answer: r = 0.003, n = 24, FV = $6,211.63 (6,211.6325…), interest $211.63. Crossed: "$509.00" (r = 0.036 and n = 2; less than the deposits themselves). Neither card shows a rate per period, n, a ratio or the formula.
- **Mistake scene:** none separate. "Future value = total deposits" (hook, 4; site trap 02); "every deposit earns interest for the whole time" (2; A1 crossed); "the ratio is r" (4, 6); "annual rate and years in a monthly formula" (7; A2 crossed; site trap 01 of lesson 6, carried from f12 scene 8); "rounding 1.004⁶⁰ early" (7, grey readout only; site trap 03).
- **Memory aid (original).** "Last in earns nothing. First in earns the most." with the second line "Newest first: n terms, first term M, ratio 1 + r." See "Memory aid check".
- **Handoff (to f14, "How do starting balance, contribution, rate and duration change future value?").** Scene 14 sums up in one sentence, then shows an unbranded `ToolPanel` (f10 part) in a new explorer mode: input cells "start balance: $0", "deposit each month: $300", "rate: 4.8% p.a., compounded monthly", "years: 5", the output cell "future value: $20,298.05", a small growth graph of the 5-year balance, a "?" arrow beside each input, the chip "Next: which change matters most?" and a "?" chip. No new values. Scene 15 returns to this frame silently; it is f14's opening frame.
- **Site sources used:** lesson 6 card 05 (the derivation: last payment earns nothing, first earns n − 1 periods; first term, ratio 1 + r, n terms; "the denominator becomes simply r"), Problem 1 ($300, 4.8%, 5 years; contributions and interest), traps 02 and 03, Q3 (b) reason (later payments ... interest on interest; used for the long-run cause). Not used: Problems 2 and 3 (f15), the hook (f14), Q2 (f15), annuities due (not a 2024 point).
- **Site errors:** none new in the parts used (card 05, Problem 1, revisit values $6,167.78, $21,940 and $322,258, drills and SA answers recalculated and correct). Lesson 6 errors are logged in f12 (navigation, super rate) and f15 (Problem 2 commentary).
- **Cause chain taught, in order:** (1) the balance is read at the end of month n, so each deposit earns interest only from its own month end (2); (2) the future value is the sum of the deposits, each with its own interest (3); (3) newest first, each term is the one before times 1 + r, so the sum is geometric (3); (4) f06's sum gives the total, and its denominator (1 + r) − 1 is r (4, 6); (5) the sum and the recurrence describe the same balance (5); (6) the formula needs end-of-period payments, the reading at the end of the last period, and r and n per period (6); (7) interest on a growing balance makes the future value pull away from the straight line of contributions (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f13`; playlist order 50; main learner question "Why is annuity future value a geometric sum?"; syllabus actions `ciaa055daf`, `ci21651d90`.
  - Entry knowledge: f12 (annuity conditions; Aₙ₊₁ = (1 + r)Aₙ + M; end-of-period timing; r and n per period); f06 (Sₙ = a(rⁿ − 1)/(r − 1)); f05 (common ratio); f08 (compound growth).
  - Start boundary: "Open on f12's $200-a-month strip; exactly $12,000, a little more or a lot more after 5 years?"
  - Stop boundary: "Each deposit followed to the end; the sum newest first; GP with first term M, ratio 1 + r, n terms; FV = M[(1 + r)ⁿ − 1]/r with conditions; checked against the recurrence; site Problem 1; the 30-year gap. No input changes, no starting balance, no solving for M or n, no other frequencies, no present value."
  - Next handoff: "math-a12-f14: an unbranded tool with start $0, $300 a month, 4.8% p.a. monthly, 5 years, FV $20,298.05, and '?' on each input; which change matters most?"
  - Prerequisite videos: math-a12-f06, math-a12-f12.
- **Learner-visible vocabulary (plain meaning at first use):** future value (recall from f12: the balance at the end, straight after the last deposit, 2); geometric series, ratio (recall from f05, f06, 4); contributions (recall, 7); interest earned (future value minus what you put in, 4).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **deposit layers** (`DepositLayers`, new: one block per deposit at its month end, each with an amber growth band to month n; blocks then slide into a single column at n, newest at the bottom; see "Codex asset brief"); **series** (f05 `TermLadder` rows of the terms newest first, with "×1.005" arcs between neighbours); **sum close** (f06's sum as a recalled chip, then `AlignedAlgebra`); **two views** (f12 `BalanceTable` rows beside the formula with n = 3); **growth graph** (f09 `LoanBalanceGraph` in a new `growthMode`: the balance rising from $0 with a straight contributions line and the gap filled amber, a marker with readouts); **tool** (f10 `ToolPanel`, explorer mode, handoff only); `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; strip, layers or graph on the left two-thirds; givens chip (with units) at the top of the right column, rows below it, current line bright and earlier lines dim.
- **No human figures, no painted plates, no bank names or logos.**
- **Author notes (not learner copy):**
  (a) 1.005⁶⁰ = 1.3488501525…; (1.005⁶⁰ − 1)/0.005 = 69.7700305…; × 200 = 13,954.0061…; interest 1,954.0061….
  (b) Deposit values at month 60: deposit k is worth 200(1.005)⁶⁰⁻ᵏ: deposit 60 200.00, deposit 59 201.00, deposit 58 202.01 (202.005), deposit 2 267.09 (267.0954…), deposit 1 268.43 (268.4309…).
  (c) n = 3: 1.005³ = 1.015075125; (1.005³ − 1)/0.005 = 3.015025; × 200 = 603.005 (f12's A₃; displayed $603.01, half up).
  (d) Site Problem 1: 1.004⁶⁰ = 1.2706407187…; factor 67.6601796…; × 300 = 20,298.0539….
  (e) 30 years: 1.004³⁶⁰ = 4.2108…; FV 240,644.24; contributions 108,000; interest 132,644.24. Crossing: n = 315 FV 188,742.91 (interest 94,242.91 < 94,500); n = 316 FV 189,797.88 (interest 94,997.88 > 94,800). Year values for the graph (end of year k, k = 1 to 30): 3,680.27; 7,541.12; 11,591.43; 15,840.49; 20,298.05; 24,974.35; 29,880.11; 35,026.60; 40,425.63; 46,089.59; …; 120,502.51 (20); …; 240,644.24 (30).
  (f) A1: 1.05⁵ = 1.2762815625; factor 5.52563125; × 900 = 4,973.068125; terms 900.00, 945.00, 992.25, 1,041.86 (1,041.8625), 1,093.96 (1,093.955625). Start-of-period error: × 1.05 = 5,221.72153….
  (g) A2: 1.003²⁴ = 1.0745395…; factor 24.8465…; × 250 = 6,211.6325…; interest 211.63. Wrong: 250(1.036² − 1)/0.036 = 250 × 2.036 = 509.00.
  (h) Pronunciations: "one point zero zero five to the fifty-nine"; "thirteen thousand, nine hundred and fifty-four dollars and one cent"; "twenty thousand, two hundred and ninety-eight dollars and five cents"; "two hundred and forty thousand, six hundred and forty-four dollars and twenty-four cents"; "four thousand, nine hundred and seventy-three dollars and seven cents"; "six thousand, two hundred and eleven dollars sixty-three".
  (i) Graph window, scene 8: time 0 to 31 years (ticks every 5), balance $0 to $260,000 (ticks every $50,000); contributions line from (0, 0) to (30, 108,000); marker at 26 years 4 months (deposit 316).

Main question: *Every deposit in an annuity earns interest for a different length of time. How do we add them all up without running the rule month by month, and why is the answer a geometric sum?*
Entry knowledge (f12; f06; f05, f08): annuity conditions and the savings recurrence; the finite geometric sum.
Stops after: the sum, the formula with conditions, one direct problem and the long-run gap. No input changes or solving for M or n.
Handoff: math-a12-f14: which change to start balance, deposit, rate or years matters most? (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f12): balances blue; interest amber (growth bands, arcs "×1.005", the gap on the graph); deposits green blocks and arrows; reference lines red dashed; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (exactly $12,000, or more?)
> Last video ended with this question. Two hundred dollars goes in at the end of every month for five years, at six per cent a year, compounded monthly. That's sixty deposits, twelve thousand dollars in total. Will the balance be exactly twelve thousand, a little more, or a lot more? Make a **guess**. You could run last video's rule sixty times, but that's slow. There's a faster way, if you follow each deposit on its own.

Visual: opens on f12's last frame exactly (f12 scene 14: the 60-tab `PeriodTimeline` in `depositMode` with "$200.00", "$401.00", "$603.01", "?" to "after 5 years: ?", the tag "6% p.a., compounded monthly", the readout "deposits: 60 × $200 = $12,000", the chips "exactly $12,000", "a little more", "a lot more", "Next: add up the deposits and their interest" and "?"). Heading writes on: "Why is annuity future value a geometric sum?" as the "Next" chip fades. On "guess" (bold) a 3 s prediction hold with a small dot timer; the three choice chips stay. On "sixty times" a grey counter "rule used: 3 of 60" ticks under the strip; on "follow each deposit" the bars fade and the green deposit arrows stay.

### 2. follow each deposit
> Take the very last deposit. It goes in at the end of month sixty, and the balance is read straight away, so it earns no interest at **all**. It's worth two hundred dollars. The one before it has one month to grow, so it's two hundred times one point zero zero five, which is two hundred and one dollars. Now the very first deposit. It goes in at the end of month one, so it has fifty-nine months to grow. It's worth two hundred times one point zero zero five to the fifty-nine, about two hundred and sixty-eight dollars forty-**three**. Every deposit earns interest for a different length of time.

Visual: camera continue. The strip becomes `DepositLayers` (new part): 60 thin green blocks, one at each month end, on a time axis "0" to "60 months" with a blue flag at 60, "balance read here". On "all" (bold) block 60 glows, tag "deposit 60: 0 months of interest", readout "$200.00". On "one month" block 59 grows a thin amber band from month 59 to 60, readout "200 × 1.005 = $201.00". On "fifty-nine months" block 1 grows an amber band stretching from month 1 to month 60, tag "deposit 1: 59 months"; on "three" (bold) readout "200 × 1.005⁵⁹ ≈ $268.43" (grey decimal 268.4309…). On the last sentence every block's band grows at once to month 60, longest at the left, shortest at the right, so the band tops form a falling staircase from left to right.

### 3. every deposit, with its interest
> So the future value is every deposit, together with the interest it has earned, all added up. Write them newest first. Two hundred, plus two hundred times one point zero zero five, plus two hundred times one point zero zero five squared, and so on, up to two hundred times one point zero zero five to the fifty-**nine**. That's sixty terms, one for each deposit. And each term is the one before it, times one point zero zero **five**.

Visual: on the first sentence the 60 blocks with their bands slide right into a single column at month 60, deposit 60 at the bottom and deposit 1 at the top, the column tagged "future value = all deposits + their interest". Right column: a `TermLadder` (f05 part) writes the terms as the column's layers light from the bottom: "200", "200(1.005)", "200(1.005)²", "⋯", "200(1.005)⁵⁹"; on "nine" (bold) the row "FV = 200 + 200(1.005) + 200(1.005)² + … + 200(1.005)⁵⁹". On "sixty terms" a bracket "60 terms". On "five" (bold) amber "×1.005" arcs draw between neighbouring terms.

### 4. a geometric series
> That's a geometric series. Its first term is two hundred, its ratio is one point zero zero five, and it has sixty terms. You already have its sum, from the sequences videos: a times r to the n, minus one, over r minus one, where r was the ratio. Here that's two hundred times one point zero zero five to the sixty, minus one, all over zero point zero zero five. That's thirteen thousand, nine hundred and fifty-four dollars and one **cent**. So it's a little more than twelve thousand. Five years isn't long, and the average deposit sits in the account for only about two and a half years, so the interest stays fairly small. The extra one thousand, nine hundred and fifty-four dollars and one cent is the interest the deposits have **earned**.

Visual: the ladder shrinks to the top right. Rows: "first term a = 200; ratio = 1.005; n = 60 terms". Grey chip "Sₙ = a(rⁿ − 1)/(r − 1), r the ratio (earlier video)". Row "FV = 200(1.005⁶⁰ − 1)/(1.005 − 1)"; then "= 200(1.005⁶⁰ − 1)/0.005", the "1.005 − 1 = 0.005" written small under the denominator. On "cent" (bold) "= $13,954.01" boxed (grey readout "1.005⁶⁰ ≈ 1.34885"). On "a little more" the chip "a little more" from the hook is ticked; the other two fade. On "two and a half years" the scene 2 staircase returns small with a dashed line at half its height, tag "average: 29.5 months of interest" (grey). On "earned" (bold) the column at month 60 splits: a green part "$12,000 deposited" and an amber cap "$1,954.01 interest".

### 5. the same balance, two ways
> Does this agree with the month-by-month rule from last video? Use three deposits instead of sixty. The sum is two hundred times one point zero zero five cubed, minus one, over zero point zero zero five. That's six hundred and three dollars and one cent, exactly the balance the rule gave after three **months**. The rule adds month by month. The sum adds deposit by deposit. They're the same balance.

Visual: board clears (new view). Left: f12's `BalanceTable` rows 1 to 3 return small ("$200.00", "$401.00", "$603.01"), tagged "rule: Aₙ₊₁ = 1.005Aₙ + 200 (last video)". Right: `DepositLayers` with three blocks (bands 2, 1 and 0 months) sliding into one column, and the row "200(1.005³ − 1)/0.005 = $603.01". On "months" (bold) the two "$603.01" values are linked by a `PenArrow` with a tick. On "month by month" the table's rows glow down in order; on "deposit by deposit" the column's layers glow up in order.

### 6. the formula and its conditions
> In general, if M goes in at the end of each period, with interest at r per period, then the future value after n periods is M times one plus r to the n, minus one, all over **r**. The ratio of the series is one plus r, not r, so its bottom line, one plus r minus one, is just r. The formula has conditions. Payments come at the end of each period. The future value is read at the end of the last period, straight after the last payment. And r and n are both per **period**.

Visual: board clears. A small `cashFlowMode` strip (f12 part) across the top: marks 0 to n, a green "M" arrow at 1 to n, the future-value flag at n. Rows: "FV = M + M(1 + r) + … + M(1 + r)ⁿ⁻¹" (grey tag "first term M, ratio 1 + r, n terms"; grey tag "M: the payment each period (some books write a)"); on "r" (bold) boxed "FV = M[(1 + r)ⁿ − 1]/r". On "not r" the denominator's working "(1 + r) − 1 = r" writes small under it. The three conditions write as a checklist on their sentences: "✓ payments at the end of each period" (the arrows at 1 to n glow, none at 0); "✓ FV read at the end of period n, just after payment n" (the flag glows); on "period" (bold) "✓ r and n per period".

### 7. worked example: $300 a month
> Let's use it. Three hundred dollars is deposited at the end of each month, at four point eight per cent a year, compounded monthly. What is the balance after five years? First match the period. The rate per month is zero point zero zero four, and five years is sixty **months**. So the future value is three hundred times one point zero zero four to the sixty, minus one, over zero point zero zero four. That's twenty thousand, two hundred and ninety-eight dollars and five **cents**. You put in eighteen thousand dollars, so the interest is two thousand, two hundred and ninety-eight dollars and five cents.

Visual: the boxed formula and checklist shrink to the top right. Task strip: "$300 is deposited at the end of each month at 4.8% p.a., compounded monthly. Find the balance after 5 years." (site Problem 1). Givens chip (with units): "M = $300 per month; 4.8% p.a., compounded monthly; 5 years". On "months" (bold) rows "r = 0.048 ÷ 12 = 0.004 per month", "n = 5 × 12 = 60 months". Row "FV = 300[(1.004)⁶⁰ − 1]/0.004" (grey readouts "1.004⁶⁰ ≈ 1.27064", "factor ≈ 67.660"; grey note "keep full precision until the end"). On "cents" (bold) "= $20,298.05" boxed. Next row "contributions: 300 × 60 = $18,000", then "interest: $20,298.05 − $18,000 = $2,298.05".

### 8. over a longer time
> Now keep the same plan going for thirty years. You put in a hundred and eight thousand dollars, but the balance reaches two hundred and forty thousand, six hundred and forty-four dollars and twenty-four **cents**. Why so much? The early deposits have decades to grow, and the interest they earn starts earning interest too. Watch the gap between what you put in and what you have. It widens every year. After about twenty-six years, the interest has overtaken everything you put **in**.

Visual: the rows dim. A `LoanBalanceGraph` in `growthMode` (author note i): the balance curve rises from $0, bending upward; a straight red dashed line "total deposited: $300 × months"; the gap between them fills amber, labelled "interest". A marker runs along the curve with a `ReadoutPanel` (years, balance, deposited, interest); at 5 years it reads "$20,298.05; $18,000; $2,298.05" (matching scene 7). On "cents" (bold) the marker reaches 30 years: "$240,644.24; $108,000; $132,644.24". On "widens" a scribble bracket marks the gap at 10, 20 and 30 years in turn. On "in" (bold) the marker returns to 26 years 4 months (deposit 316), where a small amber bar "interest $94,997.88" stands taller than a green bar "deposited $94,800", tag "interest overtakes deposits (deposit 316)" (grey values).

### 9. memory aid
> Here's a way to build the sum. Last in earns nothing. First in earns the most. List the deposits from the last to the first, and each one is the one before, times one plus r. That's n terms, first term M, and ratio one plus r.

Visual: the `DepositLayers` falling staircase from scene 2 returns small. The handwritten line writes large: "Last in earns nothing. First in earns the most." Under it, smaller: "Newest first: n terms, first term M, ratio 1 + r." The rightmost block (no band) and the leftmost block (longest band) glow as their phrases are spoken. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Write this future value as a sum, then find it. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "$900 is deposited at the end of each year for 5 years, into an account earning 5% p.a., compounded annually. (a) Write the future value as a sum of five terms. (b) Find the future value." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no formula, no layers).

### 11. feedback 1 (brief)
> The last deposit earns nothing, and the first earns four years of **interest**. So the sum is nine hundred, plus nine hundred times one point zero five, up to nine hundred times one point zero five to the fourth. That's four thousand, nine hundred and seventy-three dollars and seven **cents**. Five thousand, two hundred and twenty-one dollars seventy-two is wrong. It pays every deposit at the **start**.

Visual: card shrinks to the top. A five-block `DepositLayers` (bands 4, 3, 2, 1, 0 years); on "interest" (bold) the first and last blocks glow ("end of each year" underlined in the card). Row "(a) FV = 900 + 900(1.05) + 900(1.05)² + 900(1.05)³ + 900(1.05)⁴". Row "(b) = 900(1.05⁵ − 1)/0.05"; on "cents" (bold) "= $4,973.07" boxed. On "start" (bold) a chip "$5,221.72" fades in and is crossed (caption "as if paid at the start: one extra year each"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Find the future value, and the interest earned. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "$250 is deposited at the end of each month for 2 years, into an account earning 3.6% p.a., compounded monthly. Find the future value and the interest earned." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Monthly deposits need a monthly rate, zero point zero zero three, and n is twenty-four **months**. So the future value is six thousand, two hundred and eleven dollars sixty-**three**, and the interest is two hundred and eleven dollars sixty-three. Five hundred and nine dollars is wrong. It uses the yearly rate and two periods, and it's less than the deposits **themselves**.

Visual: card shrinks to the top. Rows "r = 0.036 ÷ 12 = 0.003; n = 2 × 12 = 24" (on "months" (bold); "each month", "3.6% p.a., compounded monthly", "2 years" underlined in the card). Row "FV = 250[(1.003)²⁴ − 1]/0.003"; on "three" (bold) "= $6,211.63" boxed. Row (silent) "interest = $6,211.63 − 250 × 24 = $6,211.63 − $6,000 = $211.63". On "themselves" (bold) a chip "$509.00" fades in and is crossed (caption "r = 0.036, n = 2: less than $6,000 deposited"). Hold about 1 second.

### 14. handoff
> So a future value is a geometric sum, with one term for each payment and ratio one plus r. Back to three hundred dollars a month for five years. What would make the biggest difference: a bigger deposit, a higher rate, more years, or some money in the account to **start**?

Visual: the boxed formula shows small at the top, then fades on "Back to". Board clears to an unbranded `ToolPanel` in explorer mode (f10 part; mode specified in f14): input cells "start balance: $0", "deposit each month: $300", "rate: 4.8% p.a., compounded monthly", "years: 5"; output cell "future value: $20,298.05"; a small growth graph of the 5-year balance. On "bigger deposit", "higher rate", "more years" and "to start" (bold) a "?" arrow appears beside each input in turn. Chips "Next: which change matters most?" and "?". No new values. Hold about 2 seconds. This is f14's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Future value of an annuity: the sum of all the payments, together with the interest they have earned.
2. Payment k (of n, at the end of period k) earns interest for n − k periods. Newest first: FV = M + M(1 + r) + … + M(1 + r)ⁿ⁻¹, a geometric series: first term M, ratio 1 + r, n terms.
3. FV = M[(1 + r)ⁿ − 1]/r. Conditions: payments at the end of each period; FV read at the end of period n, just after the last payment; r and n per period.
4. Interest earned = FV − nM.

Memory aid (large, on the notes screen): *Last in earns nothing. First in earns the most.* Second line: *Newest first: n terms, first term M, ratio 1 + r.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (the tool with start $0, $300 a month, 4.8% p.a. compounded monthly, 5 years, future value $20,298.05, the small growth graph, four "?" arrows, the chips "Next: which change matters most?" and "?"). This is the final frame and f14's opening frame.

## Teaching checks

- **Does it explain causes?** Why each deposit is worth a different amount at the end: it earns interest only from its own month end to month n (2). Why the future value is a sum: it is every deposit with its own interest (3). Why the sum is geometric: newest first, each term is the one before times 1 + r (3). Why the denominator is r: the ratio is 1 + r, and (1 + r) − 1 = r (4, 6). Why the sum and the rule agree: they add the same money in two orders (5). Why the conditions matter: the powers 0 to n − 1 come from end-of-period payments and a reading at the end of period n (6; feedback 1's start-of-period error). Why the gap widens: interest earns interest on a growing balance, and early deposits grow longest (8).
- **Misconceptions addressed:** "future value = total deposited" (hook, 4, 7; key note 4); "every deposit earns interest for the whole time" (2; A1 crossed); "the ratio is r" (4, 6); "annual rate with monthly payments" (7; A2 crossed); "rounding the power early" (7, grey note); "interest is small, so ignore it" (8).
- **One idea at a time:** one deposit per sentence in 2; one step per sentence in 3 and 4; one view per sentence in 5; one condition per sentence in 6; one step per row in 7; one cause per sentence in 8.
- **Video makes it easier:** the student sees each deposit's growth band end at the same flag, so the bands form a staircase (2), watches the blocks stack into one column that is the future value (3), sees the ladder's "×1.005" arcs make the series geometric (3), sees the column split into deposits and interest (4), sees two different routes land on the same $603.01 (5), and watches the interest gap open on the graph (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and condition visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 31 s and 28 s (scenes 11 and 13).
- **Avoided double teaching:** f06's sum is quoted in a grey chip, not re-derived; f12's recurrence and conditions are recalled by use (5, 6).
- **Syllabus coverage:** `ciaa055daf` (2, 3, 4; key notes 1, 2); `ci21651d90` (4, 6, 7; A1, A2; key note 3), with f15 extending it to other frequencies, solving for M or n, and two-stage problems.
- **Out of scope by design:** changing inputs and a starting balance (f14); solving for M or n, other frequencies, two-stage problems (f15); present value; annuities due.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "$900 is deposited at the end of each year for 5 years, into an account earning 5% p.a., compounded annually. (a) Write the future value as a sum of five terms. (b) Find the future value."
Model answer: (a) FV = 900 + 900(1.05) + 900(1.05)² + 900(1.05)³ + 900(1.05)⁴ (the last deposit earns nothing; the first earns 4 years). (b) A geometric series with first term 900, ratio 1.05 and 5 terms: FV = 900(1.05⁵ − 1)/0.05 = $4,973.07. Classic mistake (crossed): "$5,221.72" (each deposit given one extra year of interest).

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "$250 is deposited at the end of each month for 2 years, into an account earning 3.6% p.a., compounded monthly. Find the future value and the interest earned."
Model answer: r = 0.036 ÷ 12 = 0.003, n = 24. FV = 250[(1.003)²⁴ − 1]/0.003 = $6,211.63. Interest = $6,211.63 − $6,000 = $211.63. Classic mistake (crossed): "$509.00" (r = 0.036 and n = 2; less than the deposits).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook plan | $200 at month ends, 6% p.a. monthly (r = 0.005), 60 months; deposits $12,000 | 1 to 4 |
| Deposit values | deposit 60 $200.00; 59 $201.00; 1 $268.43 (268.4309…) | 2 |
| Sum | 200(1.005⁶⁰ − 1)/0.005 = $13,954.01 (13,954.0061…); interest $1,954.01; 1.005⁶⁰ ≈ 1.34885 (grey) | 4 |
| Check n = 3 | 200(1.005³ − 1)/0.005 = 603.005, $603.01 (f12's A₃) | 5 |
| Formula | FV = M[(1 + r)ⁿ − 1]/r | 6 |
| Site Problem 1 | r = 0.004, n = 60; FV $20,298.05; contributions $18,000; interest $2,298.05; grey 1.27064, 67.660 | 7 |
| 30 years | FV $240,644.24; deposited $108,000; interest $132,644.24 | 8 |
| Crossing | deposit 316: FV $189,797.88, deposited $94,800, interest $94,997.88 | 8 |
| A1 | $4,973.07 (4,973.068125); crossed $5,221.72 | 10, 11 |
| A2 | r = 0.003, n = 24; $6,211.63; interest $211.63; crossed $509.00 | 12, 13 |
| Handoff | $0 start, $300 a month, 4.8% p.a. monthly, 5 years, $20,298.05 | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 exact fractions (2 Nov, isolated run); Codex to re-check.

- 200 × 1.005 = 201; 200 × 1.005⁵⁹ = 268.4309…; 200 × 1.005⁵⁸ = 267.0954….
- 200(1.005⁶⁰ − 1)/0.005 = 13,954.0061…; − 12,000 = 1,954.0061….
- 200(1.005³ − 1)/0.005 = 603.005.
- 300(1.004⁶⁰ − 1)/0.004 = 20,298.0539…; 300 × 60 = 18,000.
- 300(1.004³⁶⁰ − 1)/0.004 = 240,644.24…; 300 × 360 = 108,000.
- n = 315: 188,742.91 (interest 94,242.91 < 94,500); n = 316: 189,797.88 (interest 94,997.88 > 94,800).
- A1: 900(1.05⁵ − 1)/0.05 = 4,973.068125; × 1.05 = 5,221.7215….
- A2: 250(1.003²⁴ − 1)/0.003 = 6,211.6325…; 250(1.036² − 1)/0.036 = 509.
- Graph year values in author note e.

## Memory aid check

- **"Last in earns nothing. First in earns the most."** Original. Meaning, as said in scene 9: the payment made at the end of the last period is read at once and earns no interest; the payment at the end of period 1 earns interest for the most periods (n − 1). The second line turns it into the series: newest first, n terms, first term M, ratio 1 + r. Assumptions checked: end-of-period payments and a reading at the end of period n (the 2024 point's case; the conditions in key note 3); one rate for every period; no starting balance (f14 adds one). It helps a new case: for annual deposits over 5 years (A1) it gives the powers 0 to 4 at once. Introduced after the cause (2 to 4).
- **Considered, not used:** "FV = M × factor" (hides the sum, which is the cause); the site's "multiply by (1 + r) for annuity due" (not a 2024 point).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,595 characters** (5,609 with the joining spaces), 15 scenes. Characters per scene (1 to 15): 419, 589, 426, 736, 396, 465, 600, 478, 226, 80, 394, 79, 364, 268, 75. At 13.3 characters per second the speech is about 421 s, plus about 98 s of holds (about 14 s of settling for the layers in 2 and 3, the column in 4, the two views in 5 and the graph in 8; 3 s prediction hold; 20 s for two countdowns; 5 s of short holds in 9, 11, 13, 14; about 56 s more of the notes hold) gives **about 519 s**, inside the 5,500 to 6,800 band and under the 570 s cap. Scene 4 is the longest; the column split must finish before "is the interest". Feedback: scene 11 about 31 s and scene 13 about 28 s including the 1 s holds. The content fills the band without padding; only about 95 characters can be trimmed before the 5,500 floor, so if the voiced take runs long shorten holds first, then scene 5's last sentence.

## Scene list and build ids

Lesson key `m-a12f13` (route math-a12-f13). Suggested explainer folder `src/explainer/lessons/math-a12-f13` and build folder `docs/production/claude-pm/lessons/m-a12f13` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, follow-each-deposit, deposits-with-interest, geometric-series, two-ways, formula-and-conditions, worked-300-a-month, longer-time, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f12's last frame continues into scene 1 (camera continue, same strip); 1 to 2 to 3 to 4 camera continue (the strip becomes the layers, the layers become the column); 4 to 5 clear change; 5 to 6 clear change; 6 to 7 camera continue (the formula shrinks to the top right); 7 to 8 camera continue (rows dim, graph draws); 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: scene 1 prediction (3 s, no ring); attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12f13-learning-review.md`, `science_check` = `checks/m-a12f13-maths-check.md`.

## Assets

Have: no plates. All visuals are coded:
- `PeriodTimeline` `depositMode` (f11) and `cashFlowMode` (f12): scenes 1, 6.
- `TermLadder` (f01, f05 extensions): scene 3.
- `BalanceTable` (f09): scene 5 (f12's rows).
- `LoanBalanceGraph` (f09): scene 8, needs `growthMode` (below).
- `ToolPanel` (f10): scene 14, explorer mode (specified in f14).
- `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).

New: `DepositLayers`, and `LoanBalanceGraph` `growthMode`.

## Codex asset brief

No painted plate is needed (programme decision 5). Coded kit parts for the finance-parts kit brief (with f09 to f12's parts), in `src/explainer/math/`, exported through `kit.tsx`, each with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. All money comes from the shared engine (`annuitySchedule`, f12), full precision, display rounded to the cent with en-AU separators.

1. **`DepositLayers`** (scenes 2, 3, 5, 9, 11; f14 scene 4 for the starting balance; f15). One green block per payment at its period end on a time axis 0 to n, each with an amber growth band from its own period end to period n whose height equals M[(1 + r)^(n − k) − 1] (so block plus band = M(1 + r)^(n − k)). Props: `payment`, `rate`, `periods`, `readAt` (n; the flag), `highlight` ({k, at, readout}), `growAt` (cue for all bands), `stackAt` (blocks and bands slide into one column at n, newest at the bottom), `split` ({at}: the column recolours into a green "deposited" part nM and an amber "interest" part), `startBalance` (optional block at 0 with its own band, for f14), `compact` (60 or more blocks drawn thin; labels only on highlighted blocks). Checks: n = 60, M = 200, r = 0.005: block 60 200.00, block 59 201.00, block 1 268.43; column total 13,954.01; split 12,000.00 and 1,954.01; n = 3 total 603.01; A1 five annual blocks 900.00 to 1,093.96, total 4,973.07. The column total must equal the engine's recurrence value to the cent (the part throws if not).
2. **`LoanBalanceGraph` `growthMode`** (scene 8; f14 scenes 3 to 8). A rising balance curve from the engine for deposits ({A0, r, M, label, colour, style}), a straight `contributionLine` (A0 + kM against k, red dashed), `gapFill` (amber between them, labelled "interest"), `marker` with a `ReadoutPanel` of years, balance, deposited and interest, `ghost` curves for comparisons (f14), a `targetLine` ({value, label}: f15). Axis labels in years with six-figure dollar ticks. Checks: 5 years 20,298.05 / 18,000 / 2,298.05; 30 years 240,644.24 / 108,000 / 132,644.24; marker at deposit 316 shows 189,797.88 / 94,800 / 94,997.88. Fit check at 1920 and phone landscape.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (exact fractions, cents rounding half up), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the series: newest first the terms are M(1 + r)^0 to M(1 + r)^(n − 1), first term M, ratio 1 + r, n terms; and FV = M[(1 + r)ⁿ − 1]/r follows from f06's Sₙ with the stated substitution.
3. Confirm the scope of every learner-visible general claim: the three conditions (end-of-period payments, reading at the end of period n, r and n per period) are stated with the formula in scene 6 and key note 3; "Last in earns nothing" assumes end-of-period payments.
4. Confirm the n = 3 check equals f12's A₃ ($603.01) and that the f12 frame in scene 1 matches f12 scene 14 exactly.
5. Confirm the crossing claim (interest first exceeds total deposits after deposit 316, about 26 years 4 months) and "about twenty-six years".
6. Confirm both attempt questions carry every demand and condition, and that neither card shows a rate per period, n, a ratio or the formula.
7. Confirm the two syllabus quotes match the crosswalk JSON exactly (MathML n written as n), and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Annuity Future Value as a Geometric Sum: Why FV = M[(1 + r)ⁿ − 1]/r | Year 12 Maths Advanced

(Title length: 92 characters; shorter alternative: "Why Annuity Future Value Is a Geometric Sum | Year 12 Maths Advanced", 68 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/financial-mathematics/lesson06.sa.html

Save $200 at the end of every month for five years at 6% p.a. Is the balance exactly $12,000, or more? Follow each deposit on its own: the last one earns nothing and the first grows for 59 months. Add them up newest first and you get a geometric series with ratio 1 + r, so the future value is M[(1 + r)ⁿ − 1]/r, with its conditions: payments at the end of each period and r and n per period. Worked example: $300 a month at 4.8% p.a. for 5 years, and why the interest overtakes the deposits over 30 years. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, financial mathematics.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define and model the future value of an annuity as the sum of all the payments, together with the interest they have earned"
"Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Builds on: What is an annuity? (previous video); finite geometric series. Next: What changes the future value most?

#Year12Maths #MathsAdvanced #FinancialMaths #HSCScience

## Open decisions

- **1. Reference-sheet form (maths check).** If the 2024 NESA reference sheet prints an annuity future value formula, its symbols should appear as a grey tag beside the boxed formula in scene 6 (the check confirms whether it does; this design does not assume it).
- **2. Symbol M (root, strand-wide; f12 open decision 2).**
- **3. The 3 s prediction in scene 1 (learning review).** f12 already asked the question at its end; repeating "Make a guess" gives students who start here a turn. Keep unless the review finds it redundant.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f12's conditions and recurrence and f06's sum; check that following one deposit at a time makes the different interest times visible before any formula; that newest-first ordering is explained, not imposed; that the ratio collision is handled once in 4 and once in 6; that the n = 3 check is convincing; that the long-run gap is caused, not just shown; that the attempt cards give nothing away), then the Codex maths check and error check.
- The layers, the stacking column and the widening gap carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every block, cell and readout must come from the one money engine.
- The opening frame is f12's scene 14 (same designer). The final frame (scene 14) must match f14's opening (same designer, written next).
