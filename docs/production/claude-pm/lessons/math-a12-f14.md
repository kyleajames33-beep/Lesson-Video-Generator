# Maths A12 F14: How do starting balance, contribution, rate and duration change future value? A digital tool, one change at a time, what scales and what compounds (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143), the sequence parts from f01 to f08, the finance parts from f09 to f13 (`ToolPanel`, `LoanBalanceGraph` with f13's `growthMode`, `DepositLayers`, `PeriodTimeline` modes, one shared money engine), plus an explorer mode for `ToolPanel` and one small new part (`ValueSplitBar`), specified below. Nothing recorded; human listening pending.

Narration 5,540 characters, 15 scenes, about 513 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: third annuities video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 51), after f13 (why annuity future value is a geometric sum) and before f15 (end-of-period annuity problems). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f09.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank or software names, logos or icons. No brief 151 pack and no route-inputs-3 entry exist for f14 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson18.sa.html`, SHA256 `65e93cf0492734c08e2cde43b565e1d837be30d2c1f254bb493a149c98cf3ac9` (cards 02, 05, trap 03 "Technology vs HSC", worked problems and SA answers); `lesson06.sa.html`, SHA256 `d54dd8e49e416d806273d69a6a5ff9e3d91adb9c65745e6400dc2f456a49bf3e` (hook: $9,200 a year for 40 years at 7%, about $1.84 million); `lesson10.sa.html`, SHA256 `dd0db47e93bf8468230dd03ab4ef05cb27747865c5f94edd798ad69d616b704d` (Problem 3: the closed form with a starting balance, Aₙ = A₀(1 + r)ⁿ + a[(1 + r)ⁿ − 1]/r). Every number recalculated in Python with exact fractions. Course outline entry: `math-a12-f14` (one content point, site source lesson 18, coverage gap noted).

Owner rules applied: as f01 to f13 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; money exact to the cent in working, with every rounding stated; decimals only in grey readouts except money; attempt cards give nothing away; opens on f13's handoff frame; f13's formula and f08's compound growth recalled by use).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Annuities; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci4720c3d8`: "Examine the effect of varying the amount initially invested, the value of the periodic payment, the interest rate and the duration of the annuity on the total value of the investment, using digital tools"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Coverage note (course outline `sourceCoverageGaps`, status partial): "The TVM solver and parameter roles are given; a systematic digital exploration varying initial investment, payment, rate and duration for an annuity is not located." This video supplies that exploration as original teaching, with an unbranded coded tool.

**Boundary:** starts from f13's last frame (scene 14 of `math-a12-f13.md`: an unbranded `ToolPanel` in explorer mode with start $0, $300 a month, 4.8% p.a. compounded monthly, 5 years, future value $20,298.05, a small growth graph, a "?" beside each input, chips "Next: which change matters most?" and "?"); sets the fair-test rule (change one input, keep the rest); varies the deposit ($600: $40,596.11), the starting balance ($5,000: total $26,651.26, with Aₙ = P(1 + r)ⁿ + M[(1 + r)ⁿ − 1]/r), the rate (9.6%: $22,987.16 over 5 years) and the duration (5, 10, 20, 30 years); combines rate and time (30 years at 9.6%: $622,923.97); shows the site's 40-year example and the cost of starting 10 years later; sorts the inputs into "scales or adds" and "compounds". Stops at the effects of the four inputs. Not taught: solving for a deposit, a time or a rate (f15); other payment frequencies (f15); present value; tool keystrokes or software functions (unbranded; root decision on `ToolPanel`).

## Decisions

- **Learner question kept (outline).** "How do starting balance, contribution, rate and duration change future value?" The answer, built in order: a digital tool runs the same rule fast, and a fair test changes one input at a time (2); doubling the deposit doubles the future value, because M is a factor of every term (3); a starting balance adds its own compound growth P(1 + r)ⁿ, because it earns interest for all n periods (4); doubling the rate changes only the interest part, so over a short time it moves the total a little (5); more time adds deposits and gives every earlier deposit longer to grow, so doubling the time more than doubles the future value (6); rate and time act together through (1 + r)ⁿ, so the rate's effect grows with time (7); the deposits that grow longest are the earliest, so starting later costs far more than the missed deposits (8); in short, money in scales or adds, while rate and time compound (9).
- **Opening and hook (f13's question).** f14 opens on f13 scene 14's frame and asks for a guess (3 s prediction hold): which change makes the biggest difference? The answer depends on the time; scene 9 states it after the evidence.
- **The digital tool (unbranded; `ci4720c3d8` "using digital tools").** f10's `ToolPanel` in a new explorer mode: four input cells (start balance, deposit each period, rate p.a. with compounding, years), an output cell, a `ValueSplitBar` (new: start balance grown, deposits, interest) and f13's growth graph with a ghost of the base case. The narration names the tool generically ("a digital tool, like a spreadsheet or a financial calculator") and says it "just runs the same rule we've been using, very fast". No product names, keystrokes, sign conventions or function names (site lesson 18's software references are not used). Site lesson 18 trap 03 is kept as one sentence: "in an exam you still show the formula. The tool is for exploring and checking."
- **Fair test (necessary condition for "examine the effect").** One input changes at a time, the others reset to the base case before each new change; the reset is shown (the changed cell flashes back) and said once in scene 2.
- **Base case (f13's worked example, site lesson 6 Problem 1).** P = $0, M = $300 at the end of each month, 4.8% p.a. compounded monthly (r = 0.004), 5 years (n = 60): FV $20,298.05 (20,298.0539…), deposits $18,000, interest $2,298.05.
- **Deposit (proportional).** M = $600: FV $40,596.11 (40,596.1078…, exactly twice the unrounded base; twice the rounded base is $40,596.10, so the narration says "exactly double, to within a cent"); interest $4,596.11. Cause: M is a factor of every term of f13's series.
- **Starting balance (site lesson 10 Problem 3 form; original numbers).** P = $5,000: 5,000 × 1.004⁶⁰ = $6,353.20 (6,353.2035…), plus the deposits' $20,298.05, total $26,651.26 (26,651.2575…). Formula: Aₙ = P(1 + r)ⁿ + M[(1 + r)ⁿ − 1]/r (site lesson 10 writes a for M and A₀ for P; grey tag). Cause: the starting amount earns interest for all n periods, longer than any deposit (`DepositLayers` `startBalance` block). Over 30 years the same $5,000 grows to $21,042.95 (grey readout in scene 7 only if the build shows the start bar; not spoken).
- **Rate (short time).** 9.6% p.a. (r = 0.008), 5 years: $22,987.16, about 13% more (1.1325, grey); deposits unchanged at $18,000; interest $2,298.05 → $4,987.16 (more than double, because interest on interest grows too). Cause of the small total change: interest is a small part of the total over 5 years.
- **Duration.** At 4.8%: 5 years $20,298.05; 10 years $46,089.59; 20 years $120,502.51; 30 years $240,644.24. Cause, said as two effects: each extra year adds 12 deposits, and every earlier deposit gets another year to grow.
- **Rate and time together.** 30 years: 4.8% $240,644.24; 9.6% $622,923.97 (2.59 times, spoken "more than two and a half times"). Over 5 years the higher rate added 13%; over 30 it more than doubles the balance. Cause: the rate acts through (1 + r)ⁿ, so its effect grows with n.
- **Site hook example (site lesson 6 hook, numbers unchanged; context reworded).** $9,200 at the end of each year at 7% p.a. compounded annually: 40 years $1,836,643.03 (site "approximately $1.84 million"); deposits $368,000; 30 years (start 10 years later) $869,039.23; difference $967,603.80 against $92,000 of missed deposits; the first deposit grows for 39 years to $128,752.35 (about 14 times). The site's "Your employer deposits ... into your super" is reworded "goes into a retirement fund" (no people; the dated super rate is not used; f12 site error 3). Annual compounding is stated on screen (the site's hook leaves it implicit; its value matches annual compounding).
- **Two kinds of effect (summary, scene 9).** "The deposit and the starting balance scale or add to the balance, the same at any time." Precisely: FV is proportional to M, and P adds P(1 + r)ⁿ; their effect on the total does not depend on whether the time is short or long in the sense that doubling M doubles FV at any n. "The rate and the time act through the power" (1 + r)ⁿ. The scoped wording avoids "the deposit doesn't matter" and avoids "the starting balance always matters less" (P's term also grows with time; the narration says it "grows like compound interest").
- **Attempts (original).** (A1) "An annuity has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is doubled and nothing else changes. Describe the effect on the future value, and explain it using the formula FV = M[(1 + r)ⁿ − 1]/r." Answer: the FV doubles; M multiplies the whole expression and r and n are unchanged (example: $200 gives $32,775.87, $400 gives $65,551.74). Crossed: "more than doubles, because of compounding". The card gives the formula (the explain demand needs it) but no effect. (A2) "Plan A: $400 is deposited at the end of each month for 20 years. Plan B: $800 is deposited at the end of each month for 10 years. Both earn 6% p.a., compounded monthly, and each plan deposits $96,000 in total. Find the future value of each plan and explain which is larger." Answer: r = 0.005; A $184,816.36 (240 deposits), B $131,103.48 (120 deposits); A is larger because its deposits have longer to grow. Crossed: "equal, because both deposit $96,000". Neither card shows r, n or a result.
- **Mistake scene:** none separate. "Doubling the deposit more than doubles the balance" (3; A1 crossed); "doubling the rate doubles the balance" (5); "doubling the time doubles the balance" (6); "the starting balance just adds P" (4: it adds P(1 + r)ⁿ); "equal deposits give equal balances" (8; A2 crossed); "trust the tool without the working" (2; site trap 03).
- **Memory aid (original).** "Money in adds up. Rate and time compound." See "Memory aid check".
- **Handoff (to f15, "How do end-of-period annuity problems combine the model and its conditions?"; site lesson 6 Q2 numbers).** Scene 14 sums up in one sentence, then turns the tool around: start $0, deposit cell "?" (highlighted), rate "6% p.a., compounded monthly", years "30", the growth graph with a red dashed target line "$600,000" at 30 years and a dashed ghost curve ending at the line with "?", chips "Next: work back from a target" and "?". No deposit value, no formula. Scene 15 returns to this frame silently; it is f15's opening frame.
- **Site sources used:** lesson 18 card 02 (tools compute the same mathematics; "a TVM solver ... enter any four, solve for the fifth" is paraphrased as "runs the same rule", without the five-variable list), card 05 (periodic rate and total periods), trap 03 (technology vs HSC working); lesson 6 hook ($9,200, 40 years, 7%); lesson 6 Problem 1 (base case, via f13); lesson 10 Problem 3's closed form with a starting balance. Not used: lesson 18's loan problems (PMT, NPER, amortisation; f09 to f11), its spreadsheet function names and sign conventions (unbranded tool), its Python note.
- **Site errors (new, lesson 18; for root to log).** (1) Problem 3: "=NPER(0.072/12, -400, 20000) Returns 59.7 months". Recalculated n = 59.62 months (−log(1 − 20 000 × 0.006/400)/log 1.006); "≈ 60 months" is still right. Minor. (2) Drill 1: "=PV(0.005, 120, -500) = $45,035 ... = $500 × 90.07 = $45,035". Recalculated $45,036.73 (factor 90.0735). Minor. (3) Problem 2 uses a repayment of $966.10 for a $50,000 loan at 6% p.a. monthly without a term; a 5-year term gives $966.64. Correction: state the term, or use $966.64 for 5 years (the table's arithmetic with $966.10 is correct as given data). Minor. (4) Card 02 and the lesson's examples name specific commercial software and keys; not an error, but the video does not copy them (unbranded tool).
- **Cause chain taught, in order:** (1) changing one input at a time shows that input's effect (2); (2) M is a factor of every term, so FV is proportional to M (3); (3) a starting balance earns interest for all n periods and adds P(1 + r)ⁿ (4); (4) a higher rate raises only the interest part, which is small over a short time (5); (5) more time adds deposits and lengthens every earlier deposit's growth (6); (6) rate and time act together through (1 + r)ⁿ, so the rate's effect grows with time (7); (7) the earliest deposits grow longest, so missing them costs most (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f14`; playlist order 51; main learner question "How do starting balance, contribution, rate and duration change future value?"; syllabus action `ci4720c3d8`.
  - Entry knowledge: f13 (FV = M[(1 + r)ⁿ − 1]/r and its series; the base case $20,298.05); f08 (compound growth P(1 + r)ⁿ); f12 (r and n per period); f10 (the unbranded tool panel).
  - Start boundary: "Open on f13's tool: start $0, $300 a month, 4.8% p.a. monthly, 5 years, $20,298.05, '?' on each input; which change matters most?"
  - Stop boundary: "Fair test; deposit doubled (proportional); starting balance adds P(1 + r)ⁿ; rate doubled over 5 and 30 years; duration 5 to 30 years; the 40-year example and the cost of starting late; money in adds, rate and time compound. No solving for M, n or r, no other frequencies, no present value, no software names."
  - Next handoff: "math-a12-f15: the tool with deposit '?', 6% p.a. monthly, 30 years and a $600,000 target line; what monthly deposit gets there?"
  - Prerequisite videos: math-a12-f13.
- **Learner-visible vocabulary (plain meaning at first use):** digital tool (a spreadsheet or financial calculator that runs the rule, 1); input and output (the values you set and the value it gives, 2); fair test, said as "change one thing at a time and keep the rest fixed" (2); starting balance (money in the account before the first deposit, 4).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **tool explorer** (`ToolPanel` `explorerMode`, specified below: four input cells, one output cell, a changed cell glowing, a reset flash; f13's growth graph inside the panel with a ghost of the base curve); **value split** (`ValueSplitBar`, new: a horizontal bar of the future value in three parts, start balance grown (blue), deposits (green), interest (amber), with cent labels, animating between cases); **start block** (f13 `DepositLayers` with `startBalance`); **duration run** (the growth graph extends to 10, 20, 30 years with markers); **rate pair** (two curves, 4.8% solid and 9.6% dashed, with the ratio readout); **forty-year fund** (growth graph in years with a second curve starting 10 years later and the gap at the end bracketed); `AlignedAlgebra`; `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the tool panel on the left two-thirds (inputs above, graph below); the `ValueSplitBar` and rows in the right column, current line bright and earlier lines dim.
- **No human figures, no painted plates, no bank or software names, logos or icons.**
- **Author notes (not learner copy):**
  (a) Base: 1.004⁶⁰ = 1.2706407187…; FV 20,298.0539…; interest 2,298.0539….
  (b) M = 600: 40,596.1078… (= 2 × base exactly); interest 4,596.11.
  (c) P = 5,000: 5,000 × 1.004⁶⁰ = 6,353.2035…; total 26,651.2575…; interest on the start balance 1,353.20; total interest 3,651.26. 30 years: 5,000 × 1.004³⁶⁰ = 21,042.95.
  (d) r = 0.008: 300(1.008⁶⁰ − 1)/0.008 = 22,987.1600…; ratio to base 1.13248; interest 4,987.16 (ratio 2.17).
  (e) Durations at r = 0.004: 10 years 46,089.59; 20 years 120,502.51; 30 years 240,644.24. At r = 0.008: 10 years 60,065.24; 20 years 216,339.37; 30 years 622,923.97 (ratio 2.5886). At r = 0.005 (6%, not shown): 30 years 301,354.51.
  (f) Site hook: 9,200(1.07⁴⁰ − 1)/0.07 = 1,836,643.0303…; 30 years 869,039.2342…; difference 967,603.7961…; 9,200 × 1.07³⁹ = 128,752.3478…; 40 × 9,200 = 368,000.
  (g) A1: 200(1.005¹²⁰ − 1)/0.005 = 32,775.87; 400 → 65,551.74.
  (h) A2: 400(1.005²⁴⁰ − 1)/0.005 = 184,816.36 (interest 88,816.36); 800(1.005¹²⁰ − 1)/0.005 = 131,103.48 (interest 35,103.48).
  (i) f15 handoff: target 600,000, r = 0.005, n = 360 (f15 computes M).
  (j) Pronunciations: "forty thousand, five hundred and ninety-six dollars and eleven cents"; "twenty-six thousand, six hundred and fifty-one dollars and twenty-six cents"; "twenty-two thousand, nine hundred and eighty-seven dollars and sixteen cents"; "six hundred and twenty-two thousand, nine hundred and twenty-three dollars and ninety-seven cents"; "one million, eight hundred and thirty-six thousand, six hundred and forty-three dollars".
  (k) Graph windows: scenes 2 to 5 time 0 to 5.2 years, balance $0 to $45,000; scene 6 time 0 to 31 years, $0 to $260,000; scene 7 same time, $0 to $650,000; scene 8 time 0 to 41 years, $0 to $2,000,000 (ticks every $500,000).

Main question: *An annuity's future value depends on four inputs. When you change one at a time in a digital tool, which ones simply scale the answer, which ones compound, and why does time matter so much?*
Entry knowledge (f13; f08; f12; f10): the future value formula and its series; compound growth; r and n per period; the tool panel.
Stops after: the four effects, combined rate and time, and the cost of starting late. No solving for unknowns.
Handoff: math-a12-f15: the deposit needed for $600,000 in 30 years at 6% p.a. monthly (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f12, f13): balances blue; interest amber; deposits green; the grown starting balance a darker blue; ghost (base case) curves grey dashed; reference lines red dashed; crossed chips red; the changed input cell outlined amber.

### 1. hook (which change matters most?)
> Here's last video's plan in a digital tool, like a spreadsheet or a financial calculator. Three hundred dollars a month, at four point eight per cent a year, compounded monthly, for five years, gives twenty thousand, two hundred and ninety-eight dollars and five cents. You can change four things: the deposit, the rate, the number of years, or some money in the account at the start. Which change makes the biggest difference? Make a **guess**.

Visual: opens on f13's last frame exactly (f13 scene 14: the unbranded `ToolPanel` in explorer mode with "start balance: $0", "deposit each month: $300", "rate: 4.8% p.a., compounded monthly", "years: 5", "future value: $20,298.05", the small growth graph, a "?" beside each input, chips "Next: which change matters most?" and "?"). Heading writes on: "How do the inputs change the future value?" as the "Next" chip fades. As each input is named its cell and "?" glow in turn. On "guess" (bold) a 3 s prediction hold with a small dot timer; four guess chips sit beside the cells ("deposit", "rate", "years", "start").

### 2. a fair test
> A tool like this just runs the same rule we've been using, very fast. To see what each input does, change one thing at a time, and keep the rest fixed. That way, any change in the answer comes from that one input. And in an exam, you still show the formula. The tool is for exploring and checking. Right now, the twenty thousand, two hundred and ninety-eight dollars is eighteen thousand dollars of deposits, plus two thousand, two hundred and ninety-eight dollars and five cents of **interest**.

Visual: camera continue; the guess chips shrink to a row at the top right. Under the output cell a grey formula row writes: "FV = M[(1 + r)ⁿ − 1]/r = 300[(1.004)⁶⁰ − 1]/0.004" (tag "the same rule, run fast"). On "one thing at a time" the deposit cell outlines amber while the other three show small padlocks drawn as plain grey brackets "fixed" (no icons from real software). On "show the formula" a grey chip "exam: show the working". On "interest" (bold) the `ValueSplitBar` (new) draws in the right column: green "deposits $18,000.00" and amber "interest $2,298.05", total "$20,298.05"; the growth graph keeps the base curve, which becomes the grey dashed ghost for the next scenes.

### 3. double the deposit
> First, double the deposit to six hundred dollars a month. The future value becomes forty thousand, five hundred and ninety-six dollars and eleven **cents**, exactly double, to within a cent. Here's why. Every term in the sum has the deposit as a factor. Double the deposit, and every term doubles, so the total doubles. The interest doubles too, so it's still the same share of the **total**.

Visual: the deposit cell changes "$300" → "$600" (amber outline). On "cents" (bold) the output reads "$40,596.11"; the growth curve rises to twice the ghost's height at every time (a grey readout "× 2.00" at 1, 3 and 5 years). On "every term" a small f13 series row writes: "FV = M + M(1 + r) + … + M(1 + r)ⁿ⁻¹" with each M glowing, then "= M × [1 + (1 + r) + … + (1 + r)ⁿ⁻¹]". On "total" (bold) the `ValueSplitBar` animates to green "$36,000.00", amber "$4,596.11" (grey "interest share 11.3% in both cases"). Then the deposit cell flashes back to "$300" (reset).

### 4. start with $5,000
> Now put the deposit back to three hundred, and start with five thousand dollars in the account. That five thousand earns interest for all sixty months, longer than any deposit. It grows like compound interest, to five thousand times one point zero zero four to the sixty, which is six thousand, three hundred and fifty-three dollars and twenty **cents**. The deposits still give twenty thousand, two hundred and ninety-eight dollars and five cents, so the total is twenty-six thousand, six hundred and fifty-one dollars and twenty-six **cents**. The two parts just add.

Visual: the start cell changes "$0" → "$5,000". A `DepositLayers` inset (f13 part, compact) shows a large dark-blue block at time 0 with an amber band running the whole way to month 60, longer than every green deposit band beside it, tag "start: 60 months of interest". Row "5000 × 1.004⁶⁰ = $6,353.20"; on "cents" (bold) it boxes. Row "deposits: 300[(1.004)⁶⁰ − 1]/0.004 = $20,298.05". On "cents" (second bold) the output reads "$26,651.26" and the formula row becomes "FV = P(1 + r)ⁿ + M[(1 + r)ⁿ − 1]/r" (grey tag "P: starting balance; some books write A₀"). The `ValueSplitBar` gains a dark-blue first part "start grown $6,353.20" before green "$18,000.00" and amber "$2,298.05" (the start's own interest $1,353.20 sits inside its part, shown as a hatched amber strip). On "just add" the curve sits above the ghost by a gap that widens slightly over time. Reset flash: start back to "$0".

### 5. double the rate
> Next, double the rate to nine point six per cent, with no starting balance. After five years the balance is twenty-two thousand, nine hundred and eighty-seven dollars and sixteen **cents**. That's only about thirteen per cent more. Why so little? The deposits are still eighteen thousand dollars. Only the interest changes. It does more than double, because the interest it earns is also earning interest at the higher rate, and it reaches four thousand, nine hundred and eighty-seven dollars sixteen. But over five years, the interest is a small part of the total, so even doubling it moves the total only a **little**.

Visual: the rate cell changes "4.8%" → "9.6%". On "cents" (bold) the output reads "$22,987.16"; the curve rises only a little above the ghost; grey readout "× 1.13". On "still eighteen thousand" the green part of the `ValueSplitBar` glows unchanged at "$18,000.00"; on "more than double" the amber part grows "$2,298.05" → "$4,987.16" (grey "× 2.17"). On "little" (bold) both bars side by side (5 years: 4.8% and 9.6%) with the amber parts circled. Reset flash: rate back to "4.8%".

### 6. more years
> Now go back to four point eight per cent, and change the time instead. Five years gives about twenty thousand dollars. Ten years gives forty-six thousand and eighty-nine dollars fifty-**nine**, more than double. Twenty years gives a hundred and twenty thousand, and thirty years gives two hundred and forty thousand, six hundred and forty-four dollars. Each extra year does two things. It adds twelve more deposits, and it gives every earlier deposit another year to **grow**.

Visual: the years cell steps "5" → "10" → "20" → "30" on each sentence; the growth graph's window widens (author note k) and the curve extends, bending upward, with markers and readouts "$20,298.05", "$46,089.59" (on "nine", bold), "$120,502.51", "$240,644.24"; a red dashed "deposited" line rises straight beside it (f13's `growthMode` contribution line). The `ValueSplitBar` for each marker stacks below the graph, its amber part overtaking the green by 30 years. On "two things" two tags draw on the curve's last year: "+12 deposits" (green, at the right end) and "every earlier deposit: +1 year" (amber band along the whole curve); on "grow" (bold) the amber band pulses.

### 7. rate and time together
> Now try the higher rate over thirty years. At four point eight per cent, thirty years gives about two hundred and forty thousand dollars. At nine point six per cent, it gives six hundred and twenty-two thousand, nine hundred and twenty-three dollars and ninety-seven **cents**, more than two and a half times as much. Over five years, the higher rate added thirteen per cent. Over thirty, it more than doubles the balance. The rate works through one plus r to the n, so the longer the time, the bigger its **effect**.

Visual: years cell "30"; the rate cell changes "4.8%" → "9.6%". A second curve (dashed blue) draws above the first; on "cents" (bold) its end marker "$622,923.97" and a grey ratio readout "× 2.59". On "five years" a vertical guide at 5 years with "× 1.13"; on "thirty" the guide moves to 30 with "× 2.59". On "effect" (bold) the formula row's "(1 + r)ⁿ" glows, tag "rate and time together". Reset flash: rate "4.8%", years "5".

### 8. starting ten years later
> Here's how big this gets. Nine thousand two hundred dollars goes into a retirement fund at the end of every year, at seven per cent a year. After forty years, that's one million, eight hundred and thirty-six thousand, six hundred and forty-three dollars, from just three hundred and sixty-eight thousand dollars of **deposits**. Start ten years later, and after thirty years it's eight hundred and sixty-nine thousand dollars. Those first ten deposits cost only ninety-two thousand dollars, but missing them costs nearly a million. They're the deposits that grow the **longest**.

Visual: board clears (new case). Givens chip (with units): "$9,200 at the end of each year; 7% p.a., compounded annually" (site lesson 6 hook; "compounded annually" stated on screen). The tool inputs change to match (deposit each year $9,200, rate 7% p.a., years 40). The growth graph (author note k) draws the 40-year curve to "$1,836,643.03"; on "deposits" (bold) the red dashed deposited line ends at "$368,000". On "ten years later" a second curve starts at year 10 and ends at year 40 at "$869,039.23" (tag "30 deposits"). A bracket at year 40 between the two end values: "difference $967,603.80" (grey). On "ninety-two thousand" a small green bar "10 missed deposits: $92,000" beside the bracket. On "longest" (bold) a `DepositLayers` inset shows the first deposit's block with a band reaching to year 40, readout "9,200 × 1.07³⁹ ≈ $128,752.35" (grey).

### 9. what scales, what compounds
> So the four inputs act in two different ways. The deposit and the starting balance scale or add to the balance. The rate and the time act through the power, so their effect starts small and grows enormous. Here's a way to remember it. Money in adds up. Rate and time **compound**.

Visual: the four input cells line up in two groups: "deposit, start balance" under the tag "scale or add" (green and dark blue), and "rate, years" under "compound: (1 + r)ⁿ" (amber). The 30-year curves from scenes 6 and 7 return small as evidence. On "compound" (bold) the handwritten line writes large: "Money in adds up. Rate and time compound." The guess chips from the hook return; none is crossed (the answer depends on the time). Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. What happens to the future value, and why? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "An annuity has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is doubled and nothing else changes. Describe the effect on the future value, and explain it using the formula FV = M[(1 + r)ⁿ − 1]/r." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no tool, no split bar).

### 11. feedback 1 (brief)
> The future value doubles, exactly. In the formula, M multiplies everything, and r and n haven't **changed**. For example, two hundred dollars a month gives thirty-two thousand, seven hundred and seventy-five dollars eighty-seven, and four hundred gives twice that. Saying it more than doubles is the classic mistake. Each deposit still grows for the same time, at the same **rate**.

Visual: card shrinks to the top. Row "FV = M × [(1 + r)ⁿ − 1]/r" with "M" boxed and the bracket tagged "unchanged: same r, same n" (on "changed", bold; "doubled", "nothing else changes" underlined in the card). Grey example rows "$200: $32,775.87", "$400: $65,551.74 = 2 × $32,775.87". On "rate" (bold) a chip "more than doubles, because of compounding" fades in and is crossed (caption "same time, same rate: × 2 exactly"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Which plan gives the larger balance? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Plan A: $400 is deposited at the end of each month for 20 years. Plan B: $800 is deposited at the end of each month for 10 years. Both earn 6% p.a., compounded monthly, and each plan deposits $96,000 in total. Find the future value of each plan and explain which is larger." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> At zero point zero zero five a month, Plan A's two hundred and forty deposits grow to a hundred and eighty-four thousand, eight hundred and sixteen dollars thirty-**six**. Plan B's hundred and twenty grow to a hundred and thirty-one thousand, one hundred and three dollars forty-eight. Plan A is larger, because its deposits have longer to grow. Saying they're equal is wrong. Equal deposits don't mean equal **interest**.

Visual: card shrinks to the top. Row "r = 0.06 ÷ 12 = 0.005" ("6% p.a., compounded monthly" underlined). Rows "A: n = 240, FV = 400[(1.005)²⁴⁰ − 1]/0.005"; on "six" (bold) "= $184,816.36"; "B: n = 120, FV = 800[(1.005)¹²⁰ − 1]/0.005 = $131,103.48". Two `ValueSplitBar`s: A green "$96,000.00" amber "$88,816.36"; B green "$96,000.00" amber "$35,103.48". On "interest" (bold) a chip "equal: both deposit $96,000" fades in and is crossed (caption "same deposits, different time to grow"). Hold about 1 second.

### 14. handoff
> So money in adds up, while rate and time compound. Now flip the question around. Say you want six hundred thousand dollars in thirty years, at six per cent a year, compounded monthly. What monthly deposit gets you **there**?

Visual: the memory-aid line shows small at the top, then fades on "Now flip". Board clears to the `ToolPanel` in explorer mode: "start balance: $0", "deposit each month: ?" (highlighted amber), "rate: 6% p.a., compounded monthly", "years: 30"; output cell "future value: $600,000 (target)". The growth graph shows a red dashed target line "$600,000" at 30 years and a dashed grey ghost curve rising from $0 to meet it, with "?" where the deposit would be labelled. On "there" (bold) chips "Next: work back from a target" and "?". No deposit value and no formula. Hold about 2 seconds. This is f15's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. With a starting balance P: Aₙ = P(1 + r)ⁿ + M[(1 + r)ⁿ − 1]/r. The start earns interest for all n periods.
2. To see one input's effect, change it alone and keep the others fixed (a digital tool makes this quick; exams still need working).
3. Doubling M doubles FV (M is a factor of every term). P adds P(1 + r)ⁿ.
4. Rate and time act through (1 + r)ⁿ: small effects over a short time, large over a long time. Extra years add deposits and give every earlier deposit longer to grow.

Memory aid (large, on the notes screen): *Money in adds up. Rate and time compound.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (the tool with deposit "?", 6% p.a. compounded monthly, 30 years, the $600,000 target line and the ghost curve with "?", the chips "Next: work back from a target" and "?"). This is the final frame and f15's opening frame.

## Teaching checks

- **Does it explain causes?** Why one input at a time: so any change comes from that input (2). Why doubling M doubles FV: M is a factor of every term (3; feedback 1). Why a start balance adds more than P: it earns interest for all n periods (4). Why doubling the rate over 5 years adds only 13%: only the interest part changes and it is small over a short time (5). Why doubling the time more than doubles FV: extra deposits plus longer growth for every earlier deposit (6). Why the rate matters more over 30 years: it acts through (1 + r)ⁿ (7). Why starting late costs so much: the missed deposits are the ones that grow longest (8; feedback 2).
- **Misconceptions addressed:** "doubling the deposit more than doubles FV" (3; A1 crossed); "doubling the rate doubles FV" (5); "doubling the time doubles FV" (6); "a starting balance adds only itself" (4); "equal deposits give equal balances" (8; A2 crossed); "the tool replaces the working" (2).
- **One idea at a time:** one input per scene in 3 to 6; one comparison per sentence in 7 and 8; the reset before each new input.
- **Video makes it easier:** the student sees the curve move against the ghost of the base case as each cell changes (3 to 7), sees which part of the split bar moves (deposits, start, interest) (3 to 5, 13), sees the start block's band outlast every deposit band (4), sees two effects of an extra year tagged on the curve (6), and sees the late-start curve fall far short of the early one (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and condition visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 29 s and 32 s (scenes 11 and 13).
- **Avoided double teaching:** f13's formula and series are recalled by use (2, 3); f08's compound growth is named, not re-taught (4); f12's r and n per period by use (A2).
- **Syllabus coverage:** `ci4720c3d8`: amount initially invested (4), periodic payment (3), interest rate (5, 7), duration (6, 7, 8), using digital tools (1 to 8, the tool panel); A1 and A2; key notes 1 to 4. The outline's partial-coverage gap is filled by original teaching.
- **Out of scope by design:** solving for M, n or r (f15); other frequencies (f15); present value; software names.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "An annuity has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is doubled and nothing else changes. Describe the effect on the future value, and explain it using the formula FV = M[(1 + r)ⁿ − 1]/r."
Model answer: the future value doubles. M multiplies the whole expression, and r = 0.005 and n = 120 are unchanged, so FV is proportional to M (for example, $200 gives $32,775.87 and $400 gives $65,551.74). Classic mistake (crossed): "it more than doubles, because of compounding".

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "Plan A: $400 is deposited at the end of each month for 20 years. Plan B: $800 is deposited at the end of each month for 10 years. Both earn 6% p.a., compounded monthly, and each plan deposits $96,000 in total. Find the future value of each plan and explain which is larger."
Model answer: r = 0.005. A: n = 240, FV = 400[(1.005)²⁴⁰ − 1]/0.005 = $184,816.36. B: n = 120, FV = 800[(1.005)¹²⁰ − 1]/0.005 = $131,103.48. Plan A is larger: its deposits have longer to grow, so they earn more interest ($88,816.36 against $35,103.48). Classic mistake (crossed): "equal, because both deposit $96,000".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Base | P = 0, M = $300 monthly, 4.8% p.a. monthly (r = 0.004), 5 years (n = 60): $20,298.05; deposits $18,000; interest $2,298.05 | 1 to 5 |
| Deposit doubled | M = $600: $40,596.11; deposits $36,000; interest $4,596.11; share 11.3% | 3 |
| Start balance | P = $5,000: grown $6,353.20 (start interest $1,353.20); total $26,651.26 | 4 |
| Rate doubled, 5 years | 9.6% (r = 0.008): $22,987.16 (× 1.13); interest $4,987.16 (× 2.17) | 5 |
| Durations at 4.8% | 5: $20,298.05; 10: $46,089.59; 20: $120,502.51; 30: $240,644.24 | 6 |
| Rate doubled, 30 years | $622,923.97 (× 2.59) | 7 |
| Site hook | $9,200 yearly, 7% p.a. annually: 40 years $1,836,643.03; deposits $368,000; 30 years $869,039.23; difference $967,603.80; missed deposits $92,000; first deposit 9,200 × 1.07³⁹ ≈ $128,752.35 | 8 |
| A1 | doubles; $200: $32,775.87; $400: $65,551.74; crossed "more than doubles" | 10, 11 |
| A2 | r = 0.005; A $184,816.36 (interest $88,816.36); B $131,103.48 (interest $35,103.48); crossed "equal" | 12, 13 |
| Handoff | target $600,000; 6% p.a. monthly; 30 years; deposit ? | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 exact fractions (2 Nov, isolated run); Codex to re-check.

- 300(1.004⁶⁰ − 1)/0.004 = 20,298.0539…; 600(…) = 40,596.1078… (exactly double).
- 5,000 × 1.004⁶⁰ = 6,353.2035…; sum with base 26,651.2575….
- 300(1.008⁶⁰ − 1)/0.008 = 22,987.1600…; ratio 1.13248…; interest ratio 4,987.16/2,298.05 = 2.170….
- r = 0.004: 120 periods 46,089.59; 240 periods 120,502.51; 360 periods 240,644.24.
- r = 0.008, 360 periods: 622,923.97; ratio 2.5886….
- 9,200(1.07⁴⁰ − 1)/0.07 = 1,836,643.03; 9,200(1.07³⁰ − 1)/0.07 = 869,039.23; difference 967,603.80; 9,200 × 1.07³⁹ = 128,752.35.
- A1: 200(1.005¹²⁰ − 1)/0.005 = 32,775.87; × 2 = 65,551.74.
- A2: 400(1.005²⁴⁰ − 1)/0.005 = 184,816.36; 800(1.005¹²⁰ − 1)/0.005 = 131,103.48.
- Site lesson 18 errors: −log(1 − 20 000 × 0.006/400)/log 1.006 = 59.62; 500(1 − 1.005⁻¹²⁰)/0.005 = 45,036.73; 50,000 × 0.005/(1 − 1.005⁻⁶⁰) = 966.64.

## Memory aid check

- **"Money in adds up. Rate and time compound."** Original. Meaning, as said in scene 9: the deposit and the starting balance change the future value by scaling (FV is proportional to M) or adding (P(1 + r)ⁿ); the rate and the time change it through the power (1 + r)ⁿ, so their effect grows with time. Assumptions checked: one input changes at a time; end-of-period payments with r and n per period (f13's conditions); "adds up" for P is scoped by key note 1 (it adds P(1 + r)ⁿ, which itself compounds with time); the aid makes no claim about which input matters most in every case (scene 9 leaves the hook's guesses uncrossed, because the answer depends on the time and the sizes). It helps a new case: asked whether tripling the deposit or adding 10 years has more effect over a long plan, a student knows the time effect grows through the power and checks with the tool or formula. Introduced after the evidence (3 to 8).
- **Considered, not used:** "time is money" (a slogan without a cause); "rule of 72" (site lesson 2; an approximation not in these points).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,540 characters** (5,554 with the joining spaces), 15 scenes. Characters per scene (1 to 15): 441, 492, 384, 561, 612, 468, 509, 571, 276, 75, 374, 68, 414, 220, 75. At 13.3 characters per second the speech is about 417 s; add about 96 s of holds (about 12 s of settling for the curve changes in 3 to 8; 3 s prediction hold; 20 s for two countdowns; 5 s of short holds in 9, 11, 13, 14; about 56 s more of the notes hold): **about 513 s**, inside the 5,500 to 6,800 band and under the 570 s cap. The content fills the band without padding; only about 40 characters can be trimmed before the 5,500 floor, so if the voiced take runs long shorten holds first. Feedback: scene 11 about 29 s and scene 13 about 32 s including the 1 s holds (scene 13 reads two results; its spoken values are the minimum for the comparison).

## Scene list and build ids

Lesson key `m-a12f14` (route math-a12-f14). Suggested explainer folder `src/explainer/lessons/math-a12-f14` and build folder `docs/production/claude-pm/lessons/m-a12f14` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, fair-test, double-the-deposit, start-balance, double-the-rate, more-years, rate-and-time, starting-later, scale-or-compound, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f13's last frame continues into scene 1 (camera continue, same tool); 1 to 7 camera continue (same tool; one cell changes per scene with a reset flash); 7 to 8 clear change (new case); 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear to the tool; 14 to 15 fade to the notes board.

Holds: scene 1 prediction (3 s, no ring); attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12f14-learning-review.md`, `science_check` = `checks/m-a12f14-maths-check.md`.

## Assets

Have: no plates. All visuals are coded:
- `ToolPanel` (f10, table mode): scenes 1 to 9, 14, needs `explorerMode` (below).
- `LoanBalanceGraph` `growthMode` (f13): scenes 2 to 8, 14, with ghosts, a second start time (scene 8) and a `targetLine` (14).
- `DepositLayers` (f13): scenes 4, 8, with `startBalance`.
- `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).

New: `ToolPanel` `explorerMode`, `ValueSplitBar`.

## Codex asset brief

No painted plate is needed (programme decision 5; no software names, fonts, icons or keys of real products). Coded kit parts for the finance-parts kit brief (with f09 to f13's parts), in `src/explainer/math/`, exported through `kit.tsx`, each with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. All money comes from the shared engine (`annuitySchedule`, f12, with a starting balance), full precision, display rounded to the cent with en-AU separators.

1. **`ToolPanel` `explorerMode`** (f13 scene 14; scenes 1 to 9, 14; f15 scenes 1 to 3). An unbranded panel: input cells (`inputs: {id, label, value, format}[]`: start balance, deposit each period, rate p.a. with a compounding label, years, periods per year), one output cell (computed by the engine, or a supplied `target` shown as "(target)"), an optional formula row (author-supplied text), and an embedded `LoanBalanceGraph` `growthMode` panel. Behaviour: `changes: {input, to, at}[]` (the cell outlines amber and the output and graph animate to the new engine value), `resetAt` (cells flash back to the base values; the base curve stays as a grey dashed `ghost`), `fixedMarks` (grey "fixed" brackets on unchanged cells), `unknown` (a cell shown as "?" in amber; f15). Checks: base 20,298.05; M 600 40,596.11; P 5,000 26,651.26; r 0.008 22,987.16; years 10, 20, 30 46,089.59, 120,502.51, 240,644.24; r 0.008 for 30 years 622,923.97; annual 9,200 at 7% for 40 and 30 years 1,836,643.03 and 869,039.23. Fit check with seven-digit dollar outputs at 1920 and phone landscape.
2. **`ValueSplitBar`** (scenes 2 to 6, 13; f15). A horizontal bar of a future value in up to three parts: start balance grown (dark blue, with its own interest as a hatched amber strip inside it), deposits nM (green), deposit interest (amber); cent labels on each part and the total; `compare` (two or more bars stacked for side-by-side cases); parts animate between cases. Checks: base 18,000.00 + 2,298.05; M 600 36,000.00 + 4,596.11; P 5,000 6,353.20 (with 1,353.20 hatched) + 18,000.00 + 2,298.05, displayed sum 26,651.25. The displayed parts must add to the displayed total: if rounding parts separately breaks the sum (6,353.20 + 20,298.05 = 26,651.25 against the true 26,651.26), the part shows the total from the engine and adds a grey "parts rounded" note (open decision 2). A2 bars 96,000.00 + 88,816.36 and 96,000.00 + 35,103.48.
3. **`LoanBalanceGraph` `growthMode` additions** (scene 8). `startAt` per curve (a curve that begins at year 10 with $0), an end bracket between two curves' final values with a readout, and a `targetLine` with a ghost curve that ends on it (scene 14).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (exact fractions, cents rounding half up), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the scoped claims: doubling M doubles FV exactly (with "to within a cent" for the rounded displays); the start balance adds P(1 + r)ⁿ; "about thirteen per cent more" (1.1325); "more than two and a half times" (2.5886); "after about twenty thousand" phrasing for 5 years; "nearly a million" for $967,603.80.
3. Confirm the site hook example is computed with annual compounding and annual end-of-year deposits, and that the screen says "compounded annually".
4. Confirm the fair-test resets: each scene from 3 to 7 starts from the base case except where the narration says otherwise (scene 6 uses 4.8%; scene 7 uses 30 years).
5. Confirm no product, software function, key or brand name appears in narration, screen text or metadata.
6. Confirm both attempt questions carry every demand and condition, and that neither card shows r, n or a result; A1's card gives the formula only because its "explain using the formula" demand needs it.
7. Confirm the syllabus quote matches the crosswalk JSON exactly, and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: What Changes an Annuity's Future Value? Deposit, Start, Rate and Time | Year 12 Maths Advanced

(Title length: 93 characters; shorter alternative: "What Changes an Annuity's Future Value Most? | Year 12 Maths Advanced", 69 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/financial-mathematics/lesson18.sa.html

Use a digital tool to change one input at a time and watch an annuity's future value respond. Doubling the deposit doubles the balance, because it is a factor of every term. A starting balance adds its own compound growth. Doubling the rate barely moves a five-year plan but more than doubles a thirty-year one, because rate and time act together through (1 + r)ⁿ. See why starting a retirement fund ten years later costs nearly a million dollars. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, financial mathematics.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Examine the effect of varying the amount initially invested, the value of the periodic payment, the interest rate and the duration of the annuity on the total value of the investment, using digital tools"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Builds on: Why annuity future value is a geometric sum (previous video). Next: Solving annuity problems.

#Year12Maths #MathsAdvanced #FinancialMaths #HSCScience

## Open decisions

- **1. Site link (root).** The description links lesson 18 (the outline's source); the worked numbers come from lesson 6 (base case and hook) and lesson 10 (the starting-balance form). Root may prefer lesson 6.
- **2. Split-bar rounding (build).** The parts of a future value rounded separately can differ from the rounded total by a cent ($6,353.20 + $20,298.05 = $26,651.25 against $26,651.26). Proposed: show the engine's total and a grey "parts rounded to the cent" note; never adjust a part to force the sum.
- **3. "Scale or add" wording (learning review).** Scene 9 says the deposit and starting balance "scale or add to the balance"; the starting balance's own term also compounds (scene 4 says so). Confirm the summary does not imply P's effect is independent of time; key note 1 carries P(1 + r)ⁿ.
- **4. Lesson 18 site errors (root).** Four items above; all minor.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f13's formula and base case; check that each scene changes exactly one input from the base and shows the reset; that each effect's cause is spoken before the summary; that the 13% against × 2.59 contrast lands; that the late-start example is about time to grow, not about the deposits; that the attempt cards give nothing away), then the Codex maths check and error check.
- The curve against its ghost and the moving parts of the split bar carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is f13's scene 14 (same designer). The final frame (scene 14) must match f15's opening (same designer, written next).
