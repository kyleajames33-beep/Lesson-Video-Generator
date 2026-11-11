# Maths A12 F14: How do starting balance, contribution, rate and duration change future value? A digital tool, one change at a time, what scales and what compounds (design)

Status: Revision 3 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov). Not voiced (no `math-a12-f14/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 5,688 characters (Revision 3; was 5,578) (sum of the 15 scene strings), 15 scene headings, about 510 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: third annuities video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 51), after f13 (why annuity future value is a geometric sum) and before f15 (end-of-period annuity problems). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f09.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank or software names, logos or icons. No brief 151 pack and no route-inputs-3 entry exist for f14 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson18.sa.html`, SHA256 `65e93cf0492734c08e2cde43b565e1d837be30d2c1f254bb493a149c98cf3ac9` (cards 02, 05, trap 03 "Technology vs HSC", worked problems and SA answers); `lesson06.sa.html`, SHA256 `d54dd8e49e416d806273d69a6a5ff9e3d91adb9c65745e6400dc2f456a49bf3e` (hook: $9,200 a year for 40 years at 7%, about $1.84 million); `lesson10.sa.html`, SHA256 `dd0db47e93bf8468230dd03ab4ef05cb27747865c5f94edd798ad69d616b704d` (Problem 3: the closed form with a starting balance, Aₙ = A₀(1 + r)ⁿ + a[(1 + r)ⁿ − 1]/r). Every number recalculated in Python with exact fractions. Course outline entry: `math-a12-f14` (one content point, site source lesson 18, coverage gap noted).

Owner rules applied: as f01 to f13 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; money exact to the cent in working, with every rounding stated; decimals only in grey readouts except money; attempt cards give nothing away; opens on f13's handoff frame; f13's formula and f08's compound growth recalled by use).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Annuities; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci4720c3d8`: "Examine the effect of varying the amount initially invested, the value of the periodic payment, the interest rate and the duration of the annuity on the total value of the investment, using digital tools"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Coverage note (course outline `sourceCoverageGaps`, status partial): "The TVM solver and parameter roles are given; a systematic digital exploration varying initial investment, payment, rate and duration for an annuity is not located." This video supplies that exploration as original teaching, with an unbranded coded tool.

**Boundary:** starts from f13's last frame (scene 14 of `math-a12-f13.md`: an unbranded `ToolPanel` in explorer mode with start $0, $300 a month, 4.8% p.a. compounded monthly, 5 years, future value $20,298.05, a small growth graph, a "?" beside each input, chips "Next: which change matters most?" and "?"); sets the fair-test rule (change one input, keep the rest); varies the deposit ($600: $40,596.11), the starting balance ($5,000: total $26,651.26, with Aₙ = P(1 + r)ⁿ + M[(1 + r)ⁿ − 1]/r), the rate (9.6%: $22,987.16 over 5 years) and the duration (5, 10, 20, 30 years); combines rate and time (30 years at 9.6%: $622,923.97); shows the site's 40-year example and the cost of starting 10 years later; sorts the inputs into "scales or adds" and "compounds". Stops at the effects of the four inputs. Not taught: solving for a deposit, a time or a rate (f15); other payment frequencies (f15); present value; tool keystrokes or software functions (unbranded; root decision on `ToolPanel`).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a savings app with sliders (painted phone, coded app, live).** The syllabus asks for the effect of each input "using digital tools", and the digital tool a student actually holds is a phone. The reused painted phone (`ma12-phone-v1.png`, d03) carries a plain, unbranded savings app on its measured screen: four sliders (start, deposit each month, rate, years), a live balance readout, a `ValueSplitBar` and a mini growth graph. Every scene is an experiment on the app, so the plate is on screen for most of the lesson. d03 used the phone for an app's user count; here it is a different app and meaning. Distinct from every context in `checks/root-decisions-maths-redesign.md` and from f10's laptop mortgage calculator.
- **Idealising assumptions (author notes, not learner copy).** A fixed stated rate for the whole term; deposits at each month's end (each year's end in scene 8); no fees or tax. The app is a calculator of the model, not a product; no real app is named or imitated.
- **Simulations (standard item 3).**
  1. **The app's sliders** (scenes 1 to 7, 14; main simulation): `ScreenApp` with four `ParameterSlider`s; moving one slider redraws the mini graph against a grey ghost of the base case, and the readouts (52 px, mirrored large beside the phone) "balance", "put in" and "interest" and the `ValueSplitBar` update live; a reset flash returns the slider to the base case (the fair test made visible).
  2. **The forty-year fund** (scene 8): two curves, the second starting 10 years later, drawn by the years slider, with a bracket between their end values.
- **Visual surprise (standard item 9).** Doubling the rate over 5 years barely lifts the curve (× 1.13), but the same doubling over 30 years lifts it × 2.59 (scenes 5 and 7, the same slider move at two lengths of time); then ten missed early deposits cost nearly a million (scene 8).
- **Colour roles (fixed for f09 to f15).** Deposits blue; interest amber; balance ink; the grown starting balance violet (the kit's `MATH_GRADIENT` token, used only for P here); ghosts dashed grey; targets and goal lines dashed ink; time grey ink; answer green; mistake red, crossed slips only. Revision 1's green deposits and dark-blue start become blue and violet.
- **Join with f13 (both designs edited together).** Scene 1 opens on f13 Revision 2's final frame exactly (the phone with start $0, deposit $300 a month, rate 4.8% p.a. monthly, years 5, balance $20,298.05, the mini graph, a "?" beside each control, chips "Next: which change matters most?" and "?").
- **Join with f15 (changed; both designs edited together).** The handoff turns the app to a goal and introduces f15's anchor, a holiday fund: goal $6,000 in 2 years at 6% p.a. compounded monthly, deposit "?". Final frame: the phone in goal mode (coded: "Goal $6,000", "In 2 years", "Rate 6% p.a., monthly", "Deposit each month: ?" highlighted, the mini graph with a dashed ink goal line and a ghost curve ending at "?") and the painted suitcase `ma12-travel-suitcase-v1.png` (briefed in f15) beside it, chips "Next: work back from a goal" and "?". Revision 1's $600,000 handoff is dropped; f15 keeps that site example as its scene 4.
- **Large type, hand tags, stage changes.** Type as listed under "Script and shots". `HandTag`: "one change at a time", "exam: show the working", "× 2 exactly", "the start earns all 60 months", "interest only", "+12 deposits", "every earlier deposit: +1 year", "rate and time together", "the longest-growing deposits", "scale or add", "compound". At most two live. Stages, each change within 30 to 70 s: the app (1, 2); the deposit slider with the series (3); the start slider with the start block (4); the rate slider with two split bars (5); the years slider with a widening graph (6); rate and time together (7); the forty-year fund (8); the two groups (9); question cards with pictures (10 to 13); the holiday goal (14); key notes (15).
- **Worked steps and feedback (g01 layout).** Scenes 3 to 5: givens on the app, rows at 52 px, green framed values ("$40,596.11", "$26,651.26", "$22,987.16"). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip.
- **Question cards.** Full text at 40 px plus a picture: A1 the app's deposit slider shown at "M" and "2M" with no balance (the change only); A2 two neutral cash-flow strips, "A: $400 a month, 20 years" and "B: $800 a month, 10 years", drawn to scale with no values.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Money in adds up. Rate and time compound." with keyed lines "deposit, start: scale or add" (blue, violet) and "rate, years: (1 + r)ⁿ" (amber) and the phone icon. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Narration (not voiced).** Scene 1 names the savings app; scene 2 says "An app like this"; scene 14 is rewritten for the holiday goal. All other scenes keep their Revision 1 text.

### Revision 1 decisions (kept where not overridden above)

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
- **Attempts (original).** (A1) "An annuity starts at $0 and has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is doubled and nothing else changes. Describe the effect on the future value, and explain it using the formula FV = M[(1 + r)ⁿ − 1]/r." Answer: the FV doubles; M multiplies the whole expression and r and n are unchanged (example: $200 gives $32,775.87, $400 gives $65,551.74). Crossed: "more than doubles, because of compounding". The card gives the formula (the explain demand needs it) but no effect. (A2) "Plan A: $400 is deposited at the end of each month for 20 years. Plan B: $800 is deposited at the end of each month for 10 years. Both earn 6% p.a., compounded monthly, and each plan deposits $96,000 in total. Find the future value of each plan and explain which is larger." Answer: r = 0.005; A $184,816.36 (240 deposits), B $131,103.48 (120 deposits); A is larger because its deposits have longer to grow. Crossed: "equal, because both deposit $96,000". Neither card shows r, n or a result.
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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

Colour roles (Revision 2, fixed for f09 to f15): deposits **blue**; interest **amber**; balance **ink**; the grown starting balance **violet**; ghost (base case) curves dashed grey; goal and target lines **dashed ink**; time grey ink; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current line and live readouts 52 px (the app's readouts are mirrored large beside the phone; on-screen app text at least 36 px); task strip, equation strip and givens 44 px; earlier lines 30 to 32 px and dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (the phone and app, graph or card) is solid from its first frame. Header strip "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS"; scene headings in the hand font, 44 px.

### 1. hook (which change matters most?)
> Here's last video's plan in a savings app, a digital tool like a spreadsheet or a financial calculator. Three hundred dollars a month, at four point eight per cent a year, compounded monthly, for five years, gives twenty thousand, two hundred and ninety-eight dollars and five cents. You can change four things: the deposit, the rate, the number of years, or some money in the account at the start. Which change makes the biggest difference? Make a **guess**.

Visual: opens on f13's last frame exactly (f13 Revision 2 scene 14: the painted phone `ma12-phone-v1.png` with the coded, unbranded savings app: "Start $0", "Deposit $300 a month" (blue slider), "Rate 4.8% p.a., monthly" (amber slider), "Years 5" (grey slider), "Balance $20,298.05", the mini growth graph, a "?" beside each control, chips "Next: which change matters most?" and "?"). Heading writes on: "How do the inputs change the future value?" as the "Next" chip fades. The phone grows to about 900 px tall at the centre left; at its right a large mirrored `LiveReadoutBoard` (52 px numbers): "balance $20,298.05" (ink). As each input is named its slider and "?" glow in turn. On "guess" (bold) a 3 s prediction hold with a small dot timer; four guess chips sit beside the board ("deposit", "rate", "years", "start").

### 2. a fair test
> An app like this just runs the same rule we've been using, very fast. To see what each input does, change one thing at a time, and keep the rest fixed. That way, any change in the answer comes from that one input. And in an exam, you still show the formula. The tool is for exploring and checking. Right now, the twenty thousand, two hundred and ninety-eight dollars is eighteen thousand dollars of deposits, plus two thousand, two hundred and ninety-eight dollars and five cents of **interest**.

Visual: camera continue; the guess chips shrink to a row at the top right. Under the board a grey formula row writes (40 px): "FV = M[(1 + r)ⁿ − 1]/r = 300[(1.004)⁶⁰ − 1]/0.004" (tag "the same rule, run fast"). On "one thing at a time" the deposit slider outlines blue while the other three show plain grey brackets "fixed", hand tag "one change at a time". On "show the formula" hand tag "exam: show the working". On "interest" (bold) the `ValueSplitBar` (about 900 px) draws under the board: blue "deposits $18,000.00" and amber "interest $2,298.05", total "$20,298.05"; the app's mini graph keeps the base curve, which becomes the grey dashed ghost for the next scenes.

### 3. double the deposit
> First, with no starting balance, double the deposit to six hundred dollars a month. The future value becomes forty thousand, five hundred and ninety-six dollars and eleven **cents**, exactly double, to within a cent. Here's why. Every term in the sum has the deposit as a factor. Double the deposit, and every term doubles, so the total doubles. The interest doubles too, so it's still the same share of the **total**.

Visual: the deposit slider moves "$300" → "$600" (blue); the mini graph's curve rises to twice the ghost's height at every time, mirrored large beside the phone (about 760 × 420 px) with grey readouts "× 2.00" at 1, 3 and 5 years. On "cents" (bold) the board reads "$40,596.11" in a green frame, hand tag "× 2 exactly". On "every term" a series row writes (44 px): "FV = M + M(1 + r) + … + M(1 + r)ⁿ⁻¹", each M glowing blue, then "= M × [1 + (1 + r) + … + (1 + r)ⁿ⁻¹]". On "total" (bold) the `ValueSplitBar` animates to blue "$36,000.00", amber "$4,596.11" (grey "interest share 11.3% in both cases"). Then the deposit slider flashes back to "$300" (reset).

### 4. start with $5,000
> Now put the deposit back to three hundred, and start with five thousand dollars in the account. That five thousand earns interest for all sixty months, longer than any deposit. It grows like compound interest, to five thousand times one point zero zero four to the sixty, which is six thousand, three hundred and fifty-three dollars and twenty **cents**. The deposits still give twenty thousand, two hundred and ninety-eight dollars and five cents, so the total is twenty-six thousand, six hundred and fifty-one dollars and twenty-six **cents**. The two parts just add.

Visual: the start slider moves "$0" → "$5,000" (violet). Beside the phone a compact `DepositTower` (f13 part, about 760 × 360 px): a large violet block at time 0 with an amber layer reaching month 60, taller than every blue deposit block beside it, hand tag "the start earns all 60 months". Row (52 px) "5000 × 1.004⁶⁰"; on "cents" (bold) "= $6,353.20" in a green frame. Row "deposits: 300[(1.004)⁶⁰ − 1]/0.004 = $20,298.05". On "cents" (second bold) the board reads "$26,651.26" in a green frame, with a grey note "full values: 6,353.2035 + 20,298.0539 = 26,651.2575 → $26,651.26 (the rounded parts add to .25)" and the formula row becomes "FV = P(1 + r)ⁿ + M[(1 + r)ⁿ − 1]/r" (grey tag "P: starting balance; some books write A₀"). The `ValueSplitBar` gains a violet first part "start grown $6,353.20" before blue "$18,000.00" and amber "$2,298.05". On "just add" the mini graph's curve sits above the ghost by a gap that widens slightly. Reset flash: start back to "$0".

### 5. double the rate
> Next, double the rate to nine point six per cent, with no starting balance. After five years the balance is twenty-two thousand, nine hundred and eighty-seven dollars and sixteen **cents**. That's only about thirteen per cent more. Why so little? The deposits are still eighteen thousand dollars. Only the interest changes. It does more than double, because the interest it earns is also earning interest at the higher rate, and it reaches four thousand, nine hundred and eighty-seven dollars sixteen. But over five years, the interest is a small part of the total, so even doubling it moves the total only a **little**.

Visual: the rate slider moves "4.8%" → "9.6%" (amber). On "cents" (bold) the board reads "$22,987.16"; the curve rises only a little above the ghost; grey readout "× 1.13". On "still eighteen thousand" the blue part of the `ValueSplitBar` glows unchanged at "$18,000.00"; on "more than double" the amber part grows "$2,298.05" → "$4,987.16" (grey "× 2.17"), hand tag "interest only". On "little" (bold) the two bars (4.8% and 9.6%, 5 years) stand side by side with the amber parts circled. Reset flash: rate back to "4.8%".

### 6. more years
> Now go back to four point eight per cent, and change the time instead. Five years gives about twenty thousand dollars. Ten years gives forty-six thousand and eighty-nine dollars fifty-**nine**, more than double. Twenty years gives a hundred and twenty thousand, and thirty years gives two hundred and forty thousand, six hundred and forty-four dollars. Each extra year does two things. It adds twelve more deposits, and it gives every earlier deposit another year to **grow**.

Visual: the years slider steps "5" → "10" → "20" → "30" (grey) on each sentence; the mirrored graph (about 1,000 × 520 px) widens its window (author note k) and the curve extends, bending upward, with markers "$20,298.05", "$46,089.59" (on "nine", bold), "$120,502.51", "$240,644.24"; a dashed ink "put in" line rises straight beside it. The `ValueSplitBar` updates at each marker, its amber part overtaking the blue by 30 years. On "two things" two hand tags draw at the curve's last year: "+12 deposits" (blue) and "every earlier deposit: +1 year" (amber band along the whole curve); on "grow" (bold) the amber band pulses.

### 7. rate and time together
> Now try the higher rate over thirty years. At four point eight per cent, thirty years gives about two hundred and forty thousand dollars. At nine point six per cent, it gives six hundred and twenty-two thousand, nine hundred and twenty-three dollars and ninety-seven **cents**, more than two and a half times as much. Over five years, the higher rate added thirteen per cent. Over thirty, it more than doubles the balance. The rate works through one plus r to the n, so the longer the time, the bigger its **effect**.

Visual: years slider at "30"; the rate slider moves "4.8%" → "9.6%". A second curve (ink, dashed) draws above the first on the mirrored graph; on "cents" (bold) its end marker "$622,923.97" and a grey ratio readout "× 2.59". On "five years" a vertical guide at 5 years with "× 1.13"; on "thirty" the guide moves to 30 with "× 2.59". On "effect" (bold) the formula row's "(1 + r)ⁿ" glows amber, hand tag "rate and time together". Reset flash: rate "4.8%", years "5".

### 8. starting ten years later
> Here's how big this gets. Nine thousand two hundred dollars goes into a retirement fund at the end of every year, in a model with a fixed seven per cent a year. After forty years, that's one million, eight hundred and thirty-six thousand, six hundred and forty-three dollars, from just three hundred and sixty-eight thousand dollars of **deposits**. Start ten years later, and after thirty years it's eight hundred and sixty-nine thousand dollars. Those first ten deposits cost only ninety-two thousand dollars, but missing them costs nearly a million. They're the deposits that grow the **longest**.

Visual: stage change (simulation 2): the phone shrinks to the left (about 560 px tall), its app set to "Deposit $9,200 a year", "Rate 7% p.a., yearly", "Years 40" (site lesson 6 hook; "compounded annually" stated on the app and in a givens card, 44 px). The large graph (about 1,100 × 600 px; author note k) draws the 40-year curve to "$1,836,643.03"; on "deposits" (bold) the dashed ink "put in" line ends at "$368,000". On "ten years later" the years slider drops to 30 and a second curve starts at year 10 and ends at year 40 at "$869,039.23" (tag "30 deposits"). A bracket at year 40 between the two end values: "difference $967,603.80" (grey). On "ninety-two thousand" a small blue bar "10 missed deposits: $92,000" beside the bracket. On "longest" (bold) a compact `DepositTower` inset shows the first deposit's block with an amber layer reaching year 40, readout "9,200 × 1.07³⁹ ≈ $128,752.35" (grey), hand tag "the longest-growing deposits".

### 9. what scales, what compounds
> Which change wins depends on how big it is, and for how long. But the four inputs act in two different ways. The deposit and the starting balance scale or add to the balance. The rate and the time act through the power, so their effect starts small and grows enormous. Here's a way to remember it. Money in adds up. Rate and time **compound**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"), the phone icon at its left edge. The four sliders line up in two groups above the card: "deposit, start" under the tag "scale or add" (blue and violet), and "rate, years" under "compound: (1 + r)ⁿ" (amber). The 30-year curves from scenes 6 and 7 show small as evidence. On "compound" (bold) the main line writes large, 60 px: "Money in adds up. Rate and time compound." The guess chips from the hook return; none is crossed (the answer depends on the time). Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. What happens to the future value, and why? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "An annuity starts at $0 and has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is doubled and nothing else changes. Describe the effect on the future value, and explain it using the formula FV = M[(1 + r)ⁿ − 1]/r." The full question stays on screen. Picture: a deposit slider (about 420 px) shown moving from "M" to "2M", with no balance readout. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no app balance, no split bar).

### 11. feedback 1 (brief)
> The future value doubles, exactly. In the formula, M multiplies everything, and r and n haven't **changed**. For example, two hundred dollars a month gives thirty-two thousand, seven hundred and seventy-five dollars eighty-seven, and four hundred gives twice that. Saying it more than doubles is the classic mistake. Each deposit still grows for the same time, at the same **rate**.

Visual: the card shrinks to the top (30 px). `GivensStrip` (44 px): "M → 2M", "r = 0.005 (unchanged)", "n = 120 (unchanged)". Row (52 px) "FV = M × [(1 + r)ⁿ − 1]/r" with "M" boxed blue and the bracket tagged "unchanged: same r, same n" (on "changed", bold; "doubled", "nothing else changes" underlined in the card); "FV doubles" in a green frame. Grey example rows "$200: $32,775.87", "$400: $65,551.74 = 2 × $32,775.87". On "rate" (bold) a red slip "more than doubles, because of compounding" writes and is crossed, red hand caption "same time, same rate: × 2 exactly". Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Which plan gives the larger balance? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Plan A: $400 is deposited at the end of each month for 20 years. Plan B: $800 is deposited at the end of each month for 10 years. Both earn 6% p.a., compounded monthly, and each plan deposits $96,000 in total. Find the future value of each plan and explain which is larger." The full question stays on screen. Picture: two neutral cash-flow strips drawn to scale (about 520 × 90 px each), "A: $400 a month, 20 years" with 240 thin blue ticks and "B: $800 a month, 10 years" with 120 ticks twice as tall, no values. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> At zero point zero zero five a month, Plan A's two hundred and forty deposits grow to a hundred and eighty-four thousand, eight hundred and sixteen dollars thirty-**six**. Plan B's hundred and twenty grow to a hundred and thirty-one thousand, one hundred and three dollars forty-eight. Plan A is larger, because its deposits have longer to grow. Saying they're equal is wrong. Equal deposits don't mean equal **interest**.

Visual: the card shrinks to the top. `GivensStrip`: "r = 0.06 ÷ 12 = 0.005", "A: n = 240, M = $400", "B: n = 120, M = $800" ("6% p.a., compounded monthly" underlined). Rows (52 px) "A: FV = 400[(1.005)²⁴⁰ − 1]/0.005"; on "six" (bold) "= $184,816.36" in a green frame; "B: FV = 800[(1.005)¹²⁰ − 1]/0.005 = $131,103.48". Two `ValueSplitBar`s: A blue "$96,000.00" amber "$88,816.36"; B blue "$96,000.00" amber "$35,103.48". On "interest" (bold) a red slip "equal: both deposit $96,000" writes and is crossed, red hand caption "same deposits, different time to grow". Hold about 1 s.

### 14. handoff
> So money in adds up, while rate and time compound. Now flip the question around. Say you're saving for a holiday, with a goal of six thousand dollars in two years, at six per cent a year, compounded monthly. What monthly deposit gets you **there**?

Visual: the memory card shows small at the top, then fades on "Now flip". Board clears to the phone (about 820 px tall) in the app's goal mode (coded, unbranded): "Goal $6,000" (dashed ink), "In 2 years", "Rate 6% p.a., monthly" (amber), "Deposit each month: ?" (highlighted blue), and the mini graph with a dashed ink goal line at $6,000 and a grey ghost curve rising from $0 to meet it at 2 years with "?". On "holiday" the painted travel suitcase `ma12-travel-suitcase-v1.png` (about 480 px tall, solid) slides in at the right of the phone. On "there" (bold) chips "Next: work back from a goal" and "?". No deposit value and no formula. Hold about 2 s. This is f15's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60% (root decision 58), colour roles kept, each one line; the framed card on the right.
> Here are the key notes. Pause the video if you need more time to copy them.

- Fair test: change one input, keep the rest fixed.
- With a start P: add P(1 + r)ⁿ to M[(1 + r)ⁿ − 1]/r.
- Doubling M doubles FV: M is in every term.
- Rate and time act through (1 + r)ⁿ.
- Short time: small effect. Long time: huge effect.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Money in adds up. Rate and time compound.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 14's frame exactly (the phone in goal mode with "Goal $6,000", "In 2 years", "Rate 6% p.a., monthly", "Deposit each month: ?", the goal line and ghost curve with "?", the suitcase, the chips "Next: work back from a goal" and "?"). This is the final frame and f15's opening frame.

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

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "An annuity starts at $0 and has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is doubled and nothing else changes. Describe the effect on the future value, and explain it using the formula FV = M[(1 + r)ⁿ − 1]/r."
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

**Revision 2 additions (7 Nov):**

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Handoff (f15's hook, original) | goal $6,000 in 2 years; 6% p.a. monthly (r = 0.005, n = 24); deposit ? (f15: $235.92, rounded up to $235.93) | 14 |

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

- Revision 2: no new learner values in f14; the handoff shows only the goal, the time and the rate.

## Memory aid check

- **"Money in adds up. Rate and time compound."** Original. Meaning, as said in scene 9: the deposit and the starting balance change the future value by scaling (FV is proportional to M) or adding (P(1 + r)ⁿ); the rate and the time change it through the power (1 + r)ⁿ, so their effect grows with time. Assumptions checked: one input changes at a time; end-of-period payments with r and n per period (f13's conditions); "adds up" for P is scoped by key note 1 (it adds P(1 + r)ⁿ, which itself compounds with time); the aid makes no claim about which input matters most in every case (scene 9 leaves the hook's guesses uncrossed, because the answer depends on the time and the sizes). It helps a new case: asked whether tripling the deposit or adding 10 years has more effect over a long plan, a student knows the time effect grows through the power and checks with the tool or formula. Introduced after the evidence (3 to 8).
- **Considered, not used:** "time is money" (a slogan without a cause); "rule of 72" (site lesson 2; an approximation not in these points).

## Narration length estimate

Revision 2 (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " inside the scene, joined with a space, bold markers removed; the total is the sum of the scene strings): **5,578 characters**, 15 scenes. Characters per scene (1 to 15): 455, 492, 384, 561, 612, 468, 509, 571, 276, 75, 374, 68, 414, 244, 75.

At 13.3 characters per second the speech outside the notes scene is about 414 s. Holds and settling: the hook's 3 s prediction; two 10 s countdowns (20 s); the memory-aid hold (2 s); two feedback holds (2 s); the handoff hold (2 s); settling for the slider moves and reset flashes (3 to 7) and the forty-year curves (8), about 14 s in all; the key-notes scene fixed at 45 s. Total **about 502 s**, under the 570 s cap with about 68 s spare.

Reserve trim if the voiced take runs long: scene 2's "And in an exam, you still show the formula. The tool is for exploring and checking." only if the hand tag stays (about 6 s). Do not cut below 5,500 characters without replacing content.

## Scene list and build ids

Lesson key `m-a12f14` (route math-a12-f14). Suggested explainer folder `src/explainer/lessons/math-a12-f14` and build folder `docs/production/claude-pm/lessons/m-a12f14` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, fair-test, double-the-deposit, start-balance, double-the-rate, more-years, rate-and-time, starting-later, scale-or-compound, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f13's last frame continues into scene 1 (camera continue, same tool); 1 to 7 camera continue (same tool; one cell changes per scene with a reset flash); 7 to 8 clear change (new case); 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear to the tool; 14 to 15 fade to the notes board.

Holds: scene 1 prediction (3 s, no ring); attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12f14-learning-review.md`, `science_check` = `checks/m-a12f14-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, actual appearance): `public/assets/biology/y11-laptop-blank-v1.png` (f10's calculator; not reused here, to keep the two tools distinct), `y11-coins-v1.png` and `y11-banknote-v1.png` (decorative), the briefed `ma12-phone-v1.png` (d03: one upright smartphone with a plain, very dark, flat screen rectangle that code can place text over; its hand-in reports the rectangle).

Have (reused): `ma12-phone-v1.png` (all app scenes and the handoff). If its painted file is not yet delivered when f14 builds, the d03 brief covers it; f14 adds no requirement.

Need (painted, new): none for f14. The handoff uses f15's `ma12-travel-suitcase-v1.png` (briefed in `math-a12-f15.md`).

Coded (studio kit): `ScreenApp` (f10) with four `ParameterSlider`s, a goal mode and a mirrored `LiveReadoutBoard`, `ValueSplitBar`, `DepositTower` (f13), the growth graph with ghosts, `WorkingBoard` parts, `HandTag`, `MemoryAidCard`, `QuestionCard` with `GivensStrip`, countdown, `KeyNotesScreen`. No product names, logos or icons of real apps or banks.

### Studio kit use and additions

From f09 to f13: `moneyEngine`, finance role tokens, `ScreenApp`, `DepositTower`, the growth graph.

New in f14:
1. **`ScreenApp` explorer mode**: four sliders with a fixed-bracket state, a reset flash, a ghost of the base curve on the mini graph, a mirrored large readout board beside the plate, and a goal mode (goal line, unknown deposit highlighted).
2. **`ValueSplitBar`** at studio sizes (Revision 1 part below), with a violet start part.
3. **`MATH_ROLES` addition**: `start` (violet, the kit's gradient token) for a starting balance in finance lessons.

## Codex asset brief (Maths A12 F14, a savings app)

No new painted plate. Reused: `ma12-phone-v1.png` (briefed in `math-a12-d03.md`; transparent, native aspect, never stretched). Codex task for the build: confirm the phone plate's measured screen rectangle from its d03 hand-in and record it in `docs/production/claude-pm/assets/ma12-f14-provenance.json`, so `ScreenApp` places the coded app exactly; confirm the app text stays at least 36 px when the phone is shown at about 900 px tall (otherwise the mirrored board carries the readouts and the screen shows the sliders only). The handoff's suitcase is briefed in `math-a12-f15.md`.

### Revision 1 coded part specification (kept; colours now follow the Revision 2 roles, and every part is built as a studio kit part)

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

11. Revision 2: confirm every app readout and slider value comes from the engine and matches "Numbers used"; confirm the app has no product, bank or software name or styling; confirm the colour roles (deposits blue, interest amber, start violet, mistake red only on crossed slips); confirm question-card pictures give nothing away; confirm the five one-line key notes and the 1,350-frame notes scene; confirm the opening matches f13 Revision 2 scene 14 and the handoff frame matches f15 Revision 2 scene 1.

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

- **Revision 2 (root).** (a) The handoff now asks f15's holiday-goal question (original numbers) instead of the site's $600,000 target, which f15 keeps as its scene 4. (b) Scene 8's site example stays a "retirement fund"; f13's anchor is super, so the two overlap in meaning. Accepted as a site example inside the app, with no plate; root to confirm. (c) The phone plate is reused from d03 with a different app on screen.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f13's formula and base case; check that each scene changes exactly one input from the base and shows the reset; that each effect's cause is spoken before the summary; that the 13% against × 2.59 contrast lands; that the late-start example is about time to grow, not about the deposits; that the attempt cards give nothing away), then the Codex maths check and error check.
- The curve against its ghost and the moving parts of the split bar carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is f13's scene 14 (same designer). The final frame (scene 14) must match f15's opening (same designer, written next).

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov).

- **Anchor:** a savings app on a phone: the reused painted phone (d03) with a plain, unbranded app on its screen (start, deposit, rate and years sliders, a live balance, a split bar and a mini graph). Chosen because the point asks for the effect of each input "using digital tools", and a phone app is the tool a student holds; every scene is an experiment on it.
- **Simulations:** (1) the app's sliders, each move redrawing the curve against a ghost of the base case, with live readouts and a reset flash (the fair test made visible); (2) the forty-year fund, with the years slider drawing a second curve that starts 10 years later.
- **Colour roles:** as f09 (deposits blue, interest amber, balance ink, answer green, mistake red on crossed slips only), plus violet for a starting balance.
- **Plates:** reused `ma12-phone-v1`; no new plates; the handoff uses f15's new `ma12-travel-suitcase-v1`.
- **Narration changes:** scene 1 names the savings app; scene 2 opens "An app like this"; scene 14 is rewritten for the holiday goal. All other scenes keep their Revision 1 text.
- **Counts:** 5,540 (sum of Revision 1 scene strings) → **5,578** characters; about 513 s (60 s notes hold) → **about 502 s** (45 s notes scene).
- **Kit additions:** `ScreenApp` explorer and goal modes, studio `ValueSplitBar`, a `start` role token.
- **Joins:** opens on f13 Revision 2's phone frame; ends on f15's holiday-goal frame.

## Revision 3 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **One-cent mismatch (scene 4).** A grey note shows the full values, 6,353.2035 + 20,298.0539 = 26,651.2575 → $26,651.26, and that the rounded parts add to .25. Open decision 2's "never adjust a part" stands.
- **Doubling needs a zero start (scene 3, attempt 1).** Scene 3 now says "with no starting balance", and the A1 card says the annuity "starts at $0".
- **Super example is a model (scene 8).** Narration: "in a model with a fixed seven per cent a year".
- **Which change matters most (scenes 1, 9).** The hook stays a prediction. Scene 9 now opens "Which change wins depends on how big it is, and for how long", before the scale-versus-compound summary.
- **Narration changed:** scenes 3 (384 to 410), 8 (571 to 592), 9 (276 to 339). Total 5,578 to 5,688 characters, 15 scene strings (build parser rules).
