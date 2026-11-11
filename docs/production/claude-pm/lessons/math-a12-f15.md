# Maths A12 F15: How do end-of-period annuity problems combine the model and its conditions? Solving for the deposit, other payment periods, solving for the time with logs, and payments that stop (design)

Status: Revision 3 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (3 Nov). Not voiced (no `math-a12-f15/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 5,808 characters (Revision 3; was 5,693) (sum of the 14 scene strings), 14 scene headings, about 519 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth and last annuities video, and the last video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 52), after f14 (how the inputs change future value) and before s01 (discrete probability distributions). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f09.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank or software names. No brief 151 pack and no route-inputs-3 entry exist for f15 (checked 3 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson06.sa.html`, SHA256 `d54dd8e49e416d806273d69a6a5ff9e3d91adb9c65745e6400dc2f456a49bf3e` (Problem 2 fortnightly, trap 03, SA Q2 find the contribution); `random-variables/lesson05.sa.html`, SHA256 `e4e82191b5488803872d0c4dc2af00c1bba15b708387ef339e819e8b56014bdd` (hook only, for the s01 handoff). Every number recalculated in Python with exact fractions. Course outline entry: `math-a12-f15` (one content point, site source lesson 6).

Owner rules applied: as f01 to f14 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; money exact to the cent in working, with every rounding stated; decimals only in grey readouts except money; attempt cards give nothing away; opens on f14's handoff frame; f13's formula, f12's conditions, f08's and f11's log step recalled by use; "log" written as in f08 and f11, with the base stated once: "any base, the same base on top and bottom").

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Annuities; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` (MathML in linear form):

- `ci21651d90`: "Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

**Boundary:** starts from f14's last frame (scene 14 of `math-a12-f14.md`: the unbranded tool with deposit "?", 6% p.a. compounded monthly, 30 years, a $600,000 target line and a ghost curve ending in "?", chips "Next: work back from a target" and "?"); lists the model's conditions as a checklist; solves for the deposit (site Q2: $597.30 to the nearest cent, $597.31 to be sure of the target); applies a fortnightly period (site Problem 2: r = 0.064/26, n = 650, $720,885.32); solves for the number of deposits with logs ($500 a month to $50,000: 82 deposits); handles deposits that stop (f13's $20,298.05 left 3 more years: $23,435.17). Stops at end-of-period annuity problems for future value. Not taught: present value and withdrawal-annuity formulas (not in the 2024 points); annuities due; solving for the rate (no algebraic method in this course; a tool would be used); the finance strand's exam-practice video (later home, if planned).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a holiday fund with a goal (painted plate, live).** A goal is what turns the future value formula round, and a holiday is a goal a student plans for: $6,000 in two years, saved monthly at 6% p.a. compounded monthly. A painted travel suitcase stands for the trip, and a coded goal meter fills deposit by deposit (blue) with interest (amber) towards a dashed ink goal line. The holiday carries three of the four conditions: solving for the deposit and rounding it up (scene 3), solving for the time and rounding up (scene 6), and payments that stop when the trip moves a year later (scene 7). The site's long-term examples stay, briefly, for the cases a short holiday cannot show: the $600,000 target where interest does most of the work (scene 4, site SA Q2) and fortnightly payments (scene 5, site Problem 2). Distinct from every context in `checks/root-decisions-maths-redesign.md` and from f09 to f14.
- **Idealising assumptions (author notes, not learner copy).** Fixed stated rates; deposits exactly at each period's end; no fees or tax; the goal is a fixed dollar amount (no claim about real holiday costs).
- **Simulations (standard item 3).**
  1. **The goal meter** (scenes 1, 3, 6, 7; main simulation): `GoalMeter` (new), a tall meter beside the suitcase, filling one deposit at a time (blue block, then an amber interest sliver at each month end) towards a dashed ink goal line, with live readouts (52 px) "deposits", "balance" and "to go". In scene 3 it runs 24 deposits at $235.92 and stops just under the line; a magnifier shows the gap "9 cents short"; rerun at $235.93 it crosses. In scene 6 it runs at $200 and is still under the line after 28 deposits ("$5.10 to go"), crossing at 29. In scene 7 it fills for 24 months, then keeps rising with amber slivers only for 12 more.
  2. **The fortnight strip and the split bar** (scenes 4, 5): a `ValueSplitBar` showing deposits against interest for the 30-year target, and a year of 26 fortnight ticks.
- **Visual surprise (standard item 9).** The nearest-cent deposit fills the meter to just below the goal and stops: 9 cents short after two years of saving (scene 3); later 28 deposits stop $5.10 short (scene 6).
- **Colour roles (fixed for f09 to f15).** Deposits blue; interest amber; balance ink; the goal and target lines dashed ink; the unknown's slot grey with "?"; time grey ink; answer green; mistake red, crossed slips only. Revision 1's green deposits and red dashed targets become blue and dashed ink.
- **Content changes (original numbers only; site numbers unchanged).** (1) The hook and scene 3 use the holiday goal (new numbers: M = $235.92, rounded up to $235.93; FV $5,999.91 and $6,000.16; deposits $5,662.32; interest $337.84). (2) The site's SA Q2 ($600,000, 30 years, $597.30, rounded up to $597.31) moves to scene 4, shortened. (3) The site's fortnightly Problem 2 stays as scene 5, with its interest sentence moved to a silent split bar. (4) Solving for n uses the holiday at $200 a month (new: (1.005)ⁿ = 1.15, n ≈ 28.02, 29 deposits; after 28, $5,994.90). (5) Payments that stop use the holiday at $250 a month for 2 years ($6,357.99), then 12 months with no deposits ($6,750.14); crossed: a 3-year annuity, $9,834.03. Revision 1's $500-to-$50,000 and $300-for-5-years examples are replaced. Attempts 1 and 2 are unchanged.
- **Join with f14 (both designs edited together).** Scene 1 opens on f14 Revision 2's final frame exactly (the phone in goal mode with "Goal $6,000", "In 2 years", "Rate 6% p.a., monthly", "Deposit each month: ?", the goal line and ghost curve with "?", the suitcase, chips "Next: work back from a goal" and "?").
- **Join with s01 (kept exactly).** Scene 13's narration and frame are unchanged from Revision 1: the coded `FrequencyBars` chart (faces 1 to 6, counts 0 to 50, "200 rolls", one blue bar "38" at face 4, five dashed "?" outlines), chips "Next: is the die fair?" and "?". s01 opens on it (`math-a12-s01.md` open decision 1). The bar stays blue, as s01 specifies.
- **Large type, hand tags, stage changes.** Type as listed under "Script and shots". `HandTag`: "9 cents short", "to reach a goal, round up", "interest does most of the work", "26 fortnights = 1 year", "keep r exact", "a power: take logs", "only at month ends", "stage 1: deposits", "stage 2: interest only". At most two live. Stages, each change within 30 to 75 s: the phone, suitcase and meter (1); the model with its checklist (2); the meter run and the solve board (3); the 30-year split bar (4); the fortnight strip (5); the time board with the meter (6); the two-stage meter (7); the framed memory card (8); question cards with pictures (9 to 12); the die chart (13); key notes (14).
- **Worked examples and feedback (g01 layout).** Scenes 3 to 7: task strip, givens card, `SolveForPanel` rows at 52 px, green framed answers ("$235.93", "$597.31", "$720,885.32", "29 deposits", "$6,750.14"); scene 7 crosses the 3-year annuity in red. Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip.
- **Question cards.** Full text at 40 px plus a picture: A1 a coded quarterly strip (24 equal blue ticks over 6 years) with a dashed ink line "$30,000" and "M = ?"; A2 a coded timeline 0 to 15 years with blue arrows at years 1 to 10 only and "final balance: ?" at year 15 (the givens only).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Match, model, finish." with three keyed lines and the suitcase icon. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).

### Revision 1 decisions (kept where not overridden above)

- **Learner question kept (outline).** "How do end-of-period annuity problems combine the model and its conditions?" The answer, built in order: every problem uses FV = M[(1 + r)ⁿ − 1]/r, once its conditions are checked (equal end-of-period payments; r and n per payment period; FV read straight after a payment) and the question's finishing condition is known (2); a target turns M into the unknown, and rounding up guarantees the target (3); a different payment period changes r and n, and r is kept exact (4); an unknown time is a power, so it needs logs, and whole payments mean rounding up (5); when payments stop, the deposits' future value then grows as compound interest (6).
- **Opening and hook (f14's question; site lesson 6 SA Q2 numbers).** f15 opens on f14 scene 14's frame and adds the quick guess $600,000 ÷ 360 = $1,666.67 with a 3 s prediction hold ("more or less?"). Scene 3 answers: much less ($597.30), because interest supplies most of the money. The guess is not crossed in teaching (A1's feedback crosses the same error, "divide by the number of deposits", for its own numbers).
- **Checklist (the "conditions" in the learner question).** Four lines, one per sentence in scene 2, each later ticked by the scene that uses it: "equal payments at the end of each period" (all), "r and n per payment period" (4), "FV read straight after a payment" (3, 5), "finish as the question asks: round the right way, whole periods, or growth after payments stop" (3, 5, 6).
- **Solve for M (site lesson 6 SA Q2).** 600,000 = M[(1.005)³⁶⁰ − 1]/0.005; factor 1,004.5150… (grey "about 1004.5"); M = 597.3031… = $597.30 to the nearest cent (the site's answer). Rounding condition (original, necessary when the question says "reach"): $597.30 gives $599,996.83, $3.17 short; $597.31 gives $600,006.88. The narration states both, briefly. Deposits about $215,028; interest about $384,969 (grey readouts in the split bar; spoken "about two hundred and fifteen thousand" and "about three hundred and eighty-five thousand").
- **Fortnightly (site lesson 6 Problem 2, numbers unchanged, name removed).** $450 at the end of each fortnight, 6.4% p.a. compounded fortnightly, 25 years: r = 0.064/26 = 0.0024615384… (grey), n = 650, FV = $720,885.32 (720,885.3178…), deposits $292,500, interest $428,385.32. Site trap 03 kept as a cause: with r rounded to 0.002462 the result is $721,020.61, about $135 too high (spoken "about a hundred and thirty-five dollars").
- **Solve for n (original numbers; f08 and f11's log step).** 50,000 = 500[(1.005)ⁿ − 1]/0.005 ⇒ (1.005)ⁿ − 1 = 0.5 ⇒ (1.005)ⁿ = 1.5 ⇒ n = log 1.5 / log 1.005 = 81.2955… (grey "≈ 81.3"). Condition: the balance changes only at month ends (FV read straight after a deposit), so the first whole n with FV ≥ 50,000 is 82: after 81 deposits $49,779.03, after 82 $50,527.92 (82 months = 6 years 10 months). Log notation as f08 and f11: "log", with a grey tag "any base, the same base on top and bottom".
- **Payments that stop (original extension of f13's example).** $300 a month for 5 years at 4.8% p.a. monthly gives $20,298.05 (f13); left 3 more years with no deposits: × 1.004³⁶ (1.1545524…, grey) = $23,435.17. Crossed in teaching: "$35,026.60" (an 8-year annuity; it counts 36 deposits never made). Two-stage `PeriodTimeline` (new mode).
- **Symbol M (strand decision; f12 open decision 2).**
- **Attempts (original).** (A1) "Deposits are made at the end of each quarter for 6 years into an account earning 4.4% p.a., compounded quarterly. Find the smallest quarterly deposit, in whole cents, that gives a balance of at least $30,000 after the last deposit." r = 0.011, n = 24, factor 27.2956918…, M = 1,099.0745… ⇒ $1,099.08 (rounded up, because $1,099.07 falls about 13 cents short: 1,099.07 × 27.2957 = 29,999.88). Crossed: "$1,250" (30,000 ÷ 24, ignores interest). (A2) "$2,000 is deposited at the end of each year for 10 years into an account earning 4% p.a., compounded annually. No more deposits are made, and the balance is left in the account for a further 5 years at the same rate. Find the final balance." Stage 1 $24,012.21 (24,012.2142…); stage 2 × 1.04⁵ = $29,214.53. Crossed: "$40,047.18" (a 15-year annuity). Neither card shows r, n, the formula, a rounding direction or a stage split; A1's "smallest ... at least" wording is the question's own condition.
- **Mistake scene:** none separate. "Divide the target by the number of deposits" (hook, 3; A1 crossed); "round M to the nearest cent always" (3, A1); "use the annual rate with fortnightly payments" (4); "round r early" (4; site trap 03); "round n to the nearest whole number" (5); "keep using the annuity formula after deposits stop" (6, crossed chip; A2 crossed).
- **Memory aid (original).** "Match, model, finish." See "Memory aid check".
- **Handoff (to s01, "How do data and a model determine a discrete probability distribution?"; site random-variables lesson 5 hook, reworded).** Scene 12 closes the finance strand in one sentence, then shows a coded `FrequencyBars` chart (new small part): six faces 1 to 6 on the horizontal axis, "200 rolls", one bar for face 4 labelled "38", the other five faces with dashed empty outlines and "?", chips "Next: is the die fair?" and "?". No expected count, no probability and no "loaded" or casino wording (the site's "casino die" becomes "a die"). Scene 13 returns to this frame silently; it is s01's assumed opening frame (open decision 1).
- **Site sources used:** lesson 6 Problem 2 (fortnightly; "26 fortnights per year"), trap 03 (rounding r early), SA Q2 ($600,000 in 30 years at 6% monthly, $597.30); random-variables lesson 5 hook (200 rolls, face 4 came up 38 times). Not used: lesson 6 Problem 3 (quarterly $200 for 8 years: same skill as f13 scene 7), Q1 and Q3 (same skill as f13), lesson 7 (present value, not a 2024 point), lessons 8 and 9 (annuities due, tables).
- **Site errors (new, lesson 6; for root to log).** (1) Problem 2 step 3 note: "The interest ($425K) exceeds the contributions ($292K)", but step 3 itself gives interest $428,385. Correction: "$428K". Minor. (2) Problem 2 step 1 shows r = 0.064/26 = 0.002462 and step 2 computes with "(1.002462)⁶⁵⁰ ≈ 4.943"; with r rounded to 0.002462 the future value is $721,020.61, not $720,885. The page says "use full precision", which is right, but its displayed rate is the rounded one. Correction: write r = 0.064/26 (≈ 0.0024615, readout only). Minor. (3) SA Q2 model answer: "a = 600,000/1,004.52 = $597.30" uses a rounded factor; the answer is still $597.30 to the nearest cent (597.3031…), and $597.30 falls $3.17 short of $600,000. Correction (optional): note that a deposit guaranteed to reach the target is $597.31. Minor.
- **Cause chain taught, in order:** (1) one model serves every problem once its conditions hold (2); (2) a target fixes FV, so M is the target divided by the series' factor, and rounding down would fall short (3); (3) interest supplies most of a long plan's balance, which is why the deposit is far below the target over the number of deposits (3); (4) r and n count payment periods, and an early-rounded r is compounded 650 times (4); (5) an unknown in the power needs logs, and the balance only reaches a value at a payment, so n rounds up (5); (6) after payments stop, nothing is added, so the balance only compounds (6).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f15`; playlist order 52; main learner question "How do end-of-period annuity problems combine the model and its conditions?"; syllabus action `ci21651d90`.
  - Entry knowledge: f13 (FV = M[(1 + r)ⁿ − 1]/r and its conditions); f12 (r and n per period); f14 (the tool and the starting-balance form); f08 and f11 (solving a power with logs; rounding n up); f08 (compound growth).
  - Start boundary: "Open on f14's tool with deposit '?', 6% p.a. monthly, 30 years, $600,000 target; is the deposit more or less than $600,000 ÷ 360?"
  - Stop boundary: "Conditions checklist; solve for M with the rounding condition; fortnightly r and n with r kept exact; solve for n with logs and round up; payments that stop then compound. No present value, annuities due, solving for r, or withdrawal formulas."
  - Next handoff: "math-a12-s01: a bar for face 4 at 38 of 200 rolls, the other faces '?'; is the die fair?"
  - Prerequisite videos: math-a12-f13, math-a12-f14, math-a12-f08.
- **Learner-visible vocabulary (plain meaning at first use):** target (the balance you want to reach, 1); condition (something that must be true for the formula to apply, or something the question asks you to do at the end, 2); fortnight (two weeks; 26 in a year, 4); stage (a stretch of time with one rule, 6).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **checklist** (`Chip` rows with ticks, recalled per scene); **solve-for panel** (f11 `SolveForPanel`: the formula with the unknown M slot highlighted, the factor sliding under the target as a division); **round-up strip** (f11 `BalanceTable` `ellipsisRows` style readouts for $597.30 and $597.31; and for n: rows 1, ⋮, 80, 81, 82 with the 50,000 line); **fortnight strip** (`PeriodTimeline` `cashFlowMode` with 26 small ticks per year bracket); **log step** (`AlignedAlgebra`: the power n slides down in front of log 1.005, as f11); **two stages** (`PeriodTimeline` `twoStage`, new mode: a deposit stretch then a no-deposit stretch with only amber arcs); **frequency bars** (`FrequencyBars`, new small part, handoff only); `ValueSplitBar`, `LoanBalanceGraph` `growthMode` with `targetLine`; `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; task strip across the top; the model or strip on the left two-thirds; givens chip (with units) at the top of the right column, rows below it, the checklist small at the bottom right; current line bright, earlier lines dim.
- **No human figures, no painted plates, no bank or software names.** The die is a coded face-number axis; no dice illustration with hands, tables or casino settings.
- **Author notes (not learner copy):**
  (a) SA Q2: 1.005³⁶⁰ = 6.0225752…; factor (1.005³⁶⁰ − 1)/0.005 = 1,004.5150424…; M = 600,000/1,004.5150… = 597.3031509…; 597.30 × factor = 599,996.83 (short by 3.165…); 597.31 × factor = 600,006.88; 597.30 × 360 = 215,028.00; interest with $597.30: 384,968.83.
  (b) Problem 2: r = 0.064/26 = 0.00246153846…; (1 + r)⁶⁵⁰ = 4.9433043…; FV = 720,885.3178…; deposits 450 × 650 = 292,500; interest 428,385.32. With r = 0.002462: 721,020.61 (difference 135.29).
  (c) Solve for n: (1.005)ⁿ = 1 + 50,000 × 0.005/500 = 1.5; n = log 1.5/log 1.005 = 81.29558…; FV after 81 = 49,779.03; after 82 = 50,527.92; 82 months = 6 years 10 months.
  (d) Two stages: 20,298.0539… × 1.004³⁶ (1.1545524338…) = 23,435.17 (23,435.167… with the rounded 20,298.05 also gives 23,435.17); wrong 8-year annuity 300(1.004⁹⁶ − 1)/0.004 = 35,026.60.
  (e) A1: r = 0.044/4 = 0.011; 1.011²⁴ = 1.3002526…; factor 27.2956918…; M = 30,000/27.2956918… = 1,099.0745…; 1,099.07 gives 29,999.88 (short 0.12); 1,099.08 gives 30,000.15. Wrong: 30,000/24 = 1,250.
  (f) A2: 1.04¹⁰ = 1.4802442849; factor 12.0061071…; × 2,000 = 24,012.2142…; × 1.04⁵ (1.2166529024) = 29,214.53 (29,214.5266… from the rounded stage 1, also 29,214.53). Wrong: 2,000(1.04¹⁵ − 1)/0.04 = 40,047.18.
  (g) s01 handoff: 200 rolls, face 4: 38 (site random-variables lesson 5 hook). No other counts are invented; the other bars are "?".
  (h) Pronunciations: "five hundred and ninety-seven dollars thirty"; "five hundred and ninety-seven dollars thirty-one"; "zero point zero six four divided by twenty-six"; "seven hundred and twenty thousand, eight hundred and eighty-five dollars and thirty-two cents"; "log one point five over log one point zero zero five"; "twenty-three thousand, four hundred and thirty-five dollars seventeen"; "one thousand and ninety-nine dollars and eight cents"; "twenty-nine thousand, two hundred and fourteen dollars fifty-three".

Main question: *Every annuity problem uses the same future value model, but each question adds a condition: a target, a different payment period, an unknown time, or payments that stop. How do you set up the model and finish each one correctly?*
Entry knowledge (f13; f12; f14; f08, f11): the FV formula and its conditions; r and n per period; logs for an unknown power.
Stops after: four problem types with their finishing conditions. No present value, annuities due or solving for r.
Handoff: math-a12-s01: 200 rolls of a die, face 4 came up 38 times; is it fair? (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

Colour roles (Revision 2, fixed for f09 to f15): deposits **blue**; interest **amber**; balance **ink**; goal and target lines **dashed ink**; the unknown's slot grey with "?"; time grey ink; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current line and live readouts 52 px; task strip, equation strip and givens 44 px; earlier lines 30 to 32 px and dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (phone, suitcase and meter, model, strip, chart or card) is solid from its first frame. Header strip "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS"; scene headings in the hand font, 44 px.

### 1. hook (more or less than $250?)
> Last video ended with a goal. You're saving for a holiday, and you want six thousand dollars in two years, from deposits at the end of every month, at six per cent a year, compounded monthly. How much should each deposit be? A quick guess is six thousand divided by twenty-four months, which is two hundred and fifty dollars. Is the real answer more than that, or less? Make a **guess**.

Visual: opens on f14's last frame exactly (f14 Revision 2 scene 14: the phone in goal mode with "Goal $6,000", "In 2 years", "Rate 6% p.a., monthly", "Deposit each month: ?", the mini graph's dashed goal line and ghost curve with "?", the painted travel suitcase `ma12-travel-suitcase-v1.png`, chips "Next: work back from a goal" and "?"). Heading writes on: "How do annuity problems combine the model and its conditions?" as the "Next" chip fades. On "holiday" the phone slides left (about 640 px tall) and `GoalMeter` (simulation 1) stands between it and the suitcase (about 700 px tall, solid, empty) with its dashed ink goal line "$6,000" and readouts (52 px) "deposits 0", "balance $0.00", "to go $6,000.00". On "quick guess" a grey chip "6000 ÷ 24 = $250?" beside the phone's deposit field. On "guess" (bold) a 3 s prediction hold with a small dot timer; two chips "more" and "less".

### 2. the model and its conditions
> Every problem in this video uses the same model, so check its conditions first. Does the account start at zero, with a positive interest rate? Are the payments equal, and made at the end of each period? Do r and n match how often the payments are made? Is the future value read at the end of a period, straight after a payment? And what does the question want at the end: rounding to the cent, a whole number of periods, or more growth after the payments stop? This video solves one problem for each of those **conditions**.

Visual: camera continue; the phone, meter and suitcase shrink to a row at the top left (about 300 px tall). Boxed model in the centre (60 px): "FV = M[(1 + r)ⁿ − 1]/r" (M blue, (1 + r) amber) with a small `cashFlowMode` strip under it (blue arrows at 1 to n, the ink flag at n). A checklist writes in the right column (40 px), one line per sentence: "0. starts at $0; r > 0 (if r = 0: FV = nM)"; "1. equal payments at the end of each period"; "2. r and n per payment period"; "3. FV read straight after a payment"; "4. finish as asked: round the right way, whole periods, or growth after payments stop". On "conditions" (bold) four small tags appear under line 4 and the checklist moves to the bottom right, where it stays small for the rest of the video.

### 3. solving for the deposit
> Here, the payments are monthly, so r is zero point zero zero five, and n is twenty-four. Put the goal in for the future value, and M is the unknown. Six thousand equals M, times one point zero zero five to the twenty-four, minus one, over zero point zero zero five. That fraction is about twenty-five point four three, so divide by **it**. M is two hundred and thirty-five dollars and ninety-two **cents**, to the nearest cent. That's a little less than the guess, because interest adds about three hundred and thirty-eight dollars. But watch the goal. Two hundred and thirty-five dollars ninety-two reaches only five thousand, nine hundred and ninety-nine dollars ninety-one. It falls nine cents **short**. To be sure of reaching a goal, round up, to two hundred and thirty-five dollars ninety-**three**.

Visual: stage change (g01 layout). Task strip (44 px): "Find the monthly deposit that reaches $6,000 after 2 years at 6% p.a., compounded monthly." Givens card: "FV = $6,000 (goal)", "6% p.a., compounded monthly", "2 years", "deposits at the end of each month". Rows (52 px): "r = 0.06 ÷ 12 = 0.005; n = 2 × 12 = 24" (checklist line 2 ticks). `SolveForPanel`: "6000 = M × [(1.005)²⁴ − 1]/0.005" with the M slot grey "?"; grey readout "[(1.005)²⁴ − 1]/0.005 ≈ 25.432"; on "it" (bold) the factor slides under 6000: "M = 6000 ÷ 25.4320…"; on "cents" (bold) "M = $235.92 (nearest cent)". On "a little less than the guess" the "less" chip ticks and a small `ValueSplitBar`: blue "deposits ≈ $5,662" and amber "interest ≈ $338". On "watch the goal" the meter at the left (about 640 px tall) runs 24 deposits of $235.92 at speed (blue blocks, amber slivers at month ends, live readouts) and stops just under the dashed line: "balance $5,999.91", "to go $0.09"; on "short" (bold) a magnifier circle on the line shows the gap, hand tag "9 cents short". On "three" (bold) the meter reruns at $235.93 and crosses the line ("$6,000.16"), "M = $235.93" in a green frame, hand tag "to reach a goal, round up" (checklist line 4 ticks, first tag).

### 4. a bigger goal, a longer time
> Over a longer time, interest does far more. Say the goal is six hundred thousand dollars in thirty years, at the same rate. Dividing by three hundred and sixty months suggests one thousand, six hundred and sixty-six dollars sixty-seven. But the same steps give five hundred and ninety-seven dollars and thirty cents to the nearest cent, so round up to five hundred and ninety-seven dollars thirty-**one**. You deposit about two hundred and fifteen thousand dollars, and interest adds about three hundred and eighty-five **thousand**.

Visual: clear change (site SA Q2, name removed). Task strip: "Find the monthly deposit that reaches $600,000 after 30 years at 6% p.a., compounded monthly." Givens card: "FV = $600,000", "r = 0.005", "n = 360". A large `ValueSplitBar` frame (about 1,400 px wide, solid, empty) waits under the rows. Rows (52 px): grey chip "600 000 ÷ 360 = $1,666.67?"; "M = 600 000 ÷ [(1.005)³⁶⁰ − 1]/0.005 = 600 000 ÷ 1004.515…" (grey); "$597.30 → $599,996.83 (short $3.17)"; on "one" (bold) "M = $597.31" in a green frame, and the grey chip "$1,666.67?" is ringed. On "thousand" (bold) the split bar fills: blue "deposits ≈ $215,032" and amber "interest ≈ $384,975" (grey), the amber part far longer, hand tag "interest does most of the work".

### 5. a different period: fortnights
> Next, a different payment period. Four hundred and fifty dollars goes in at the end of every fortnight, for twenty-five years, at six point four per cent a year, compounded fortnightly. There are twenty-six fortnights in a year, so r is zero point zero six four, divided by twenty-six, and n is twenty-six times twenty-five, which is six hundred and **fifty**. Keep r as that exact fraction. Rounded to zero point zero zero two four six two, it would add about a hundred and thirty-five dollars after six hundred and fifty periods. The future value is seven hundred and twenty thousand, eight hundred and eighty-five dollars and thirty-two **cents**.

Visual: clear change (site Problem 2, name removed). Task strip: "$450 is deposited at the end of every fortnight for 25 years at 6.4% p.a., compounded fortnightly. Find the future value." Givens card: "M = $450 per fortnight", "6.4% p.a., compounded fortnightly", "25 years". A `cashFlowMode` strip for one year (about 1,400 px) with 26 small blue ticks, bracket "26 fortnights = 1 year" (hand tag). On "fifty" (bold) rows (52 px) "r = 0.064 ÷ 26 (≈ 0.0024615, grey)", "n = 26 × 25 = 650" (checklist line 2 ticks). On "exact fraction" the r row keeps "0.064/26", hand tag "keep r exact", and a grey chip "r rounded to 0.002462: $721,020.61 (≈ $135 too high)". Row "FV = 450[(1 + 0.064/26)⁶⁵⁰ − 1]/(0.064/26)"; on "cents" (bold) "= $720,885.32" in a green frame. `ValueSplitBar` (silent): blue "$292,500.00", amber "$428,385.32".

### 6. solving for the time
> Now the time is the unknown. Back to the holiday, but you can only spare two hundred dollars a month. How many deposits until you reach six thousand? Set six thousand equal to two hundred, times one point zero zero five to the n, minus one, over zero point zero zero five. Rearranging gives one point zero zero five to the n equals one point one **five**. The unknown is a power, so take logs. n is log one point one five over log one point zero zero five, which is about twenty-eight point zero **two**. But in this model, the balance only changes at each month's end, when the interest and a deposit go in. After twenty-eight deposits it's five thousand, nine hundred and ninety-four dollars ninety, still short. So round up. It takes twenty-nine **deposits**.

Visual: clear change. The suitcase and meter return at the left (meter about 640 px tall, empty, goal line "$6,000"). Task strip: "$200 is deposited at the end of each month at 6% p.a., compounded monthly. How many deposits are needed to reach $6,000?" Givens card: "M = $200 per month", "r = 0.005", "FV = $6,000 (goal)", "n unknown". `SolveForPanel` with the n slot grey "?": "6000 = 200[(1.005)ⁿ − 1]/0.005"; "× 0.005 ÷ 200: (1.005)ⁿ − 1 = 0.15"; on "five" (bold) "(1.005)ⁿ = 1.15". On "take logs" "n log 1.005 = log 1.15", the n sliding down from the power (hand tag "a power: take logs"; grey tag "any base, the same base on top and bottom"); on "two" (bold) "n = log 1.15 / log 1.005 ≈ 28.02" (grey decimal). On "end of a month" the meter runs at $200 a month and stops after 28 deposits just under the line ("balance $5,994.90", "to go $5.10"), hand tag "only at month ends"; on "deposits" (bold) the 29th deposit lands and the meter crosses ("$6,224.88"), "n = 29 deposits" in a green frame (checklist lines 3 and 4 tick, second tag).

### 7. payments that stop
> The last condition is payments that stop. Say you deposit two hundred and fifty dollars a month for two years, which grows to six thousand, three hundred and fifty-seven dollars ninety-nine. Then the trip moves a year later. The deposits stop, but the money stays in at the same rate. That's two stages. The annuity formula covers the deposits. After that, it's plain compound interest, so multiply by one point zero zero five to the **twelve**. The final balance is six thousand, seven hundred and fifty dollars fourteen. Using the annuity formula for three years would count twelve deposits that were never **made**.

Visual: clear change. Task strip: "$250 is deposited at the end of each month for 2 years at 6% p.a., compounded monthly. The deposits then stop, and the balance stays in the account for 1 more year. Find the final balance." The meter at the left with a `PeriodTimeline` in `twoStage` mode beside it (about 1,100 px): stage 1 (months 1 to 24) with blue deposit arrows and amber arcs, hand tag "stage 1: deposits"; stage 2 (months 25 to 36) with amber arcs only, hand tag "stage 2: interest only". On "grows to" the meter fills for 24 months (live readouts) and row (52 px) "stage 1: 250[(1.005)²⁴ − 1]/0.005 = $6,357.99". On "a year later" the suitcase gets a small grey tag "+1 year". On "twelve" (bold) the meter keeps rising with amber slivers only, no blue blocks, and the row "stage 2: 6357.99 × (1.005)¹²" (grey "(1.005)¹² ≈ 1.06168") then "= $6,750.14" in a green frame (checklist line 4 ticks, third tag). On "made" (bold) a red slip "3-year annuity: 250[(1.005)³⁶ − 1]/0.005 = $9,834.03" writes and is crossed, red hand caption "counts 12 deposits never made"; stage 2's empty deposit slots flash as dashed outlines.

### 8. memory aid
> Here's a way to keep the steps in order. Match, model, finish. Match r and n to the payment period. Write the model, with the target or the unknown in its place. Then finish with the question's condition: round the right way, use whole periods, or grow what's left.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"), the suitcase icon at its left edge. The main line writes large, 60 px: "Match, model, finish." As each word is spoken its keyed line writes under it (40 px): "Match: r and n per payment period"; "Model: FV = M[(1 + r)ⁿ − 1]/r, goal or unknown in place"; "Finish: round the right way, whole periods, or grow what's left". Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the smallest quarterly deposit that reaches the target. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Deposits are made at the end of each quarter for 6 years into an account earning 4.4% p.a., compounded quarterly. Find the smallest quarterly deposit, in whole cents, that gives a balance of at least $30,000 after the last deposit." The full question stays on screen. Picture (about 520 × 200 px): a coded strip of 24 equal blue ticks over 6 years with a dashed ink line "$30,000" and "M = ?". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no checklist, no model, no r or n).

### 10. feedback 1 (brief)
> Quarterly means r is zero point zero four four over four, which is zero point zero one one, and n is twenty-**four**. Dividing thirty thousand by the series factor gives just over one thousand and ninety-nine dollars and seven cents, so round up, to one thousand and ninety-nine dollars and eight **cents**. Twelve hundred and fifty dollars is wrong. It divides thirty thousand by twenty-four, and ignores the **interest**.

Visual: the card shrinks to the top (30 px). `GivensStrip` (44 px): on "four" (bold) "r = 0.044 ÷ 4 = 0.011", "n = 6 × 4 = 24", "FV ≥ $30,000" ("each quarter", "6 years", "4.4% p.a., compounded quarterly" underlined in the card). Rows (52 px): "30 000 = M[(1.011)²⁴ − 1]/0.011" with the M slot grey "?"; "M = 30 000 ÷ 27.2957… = 1099.0745…" (grey). On "cents" (bold) "M = $1,099.08" in a green frame ("smallest", "at least $30,000" underlined), with a grey readout "$1,099.07 gives $29,999.88". On "interest" (bold) a red slip "30 000 ÷ 24 = $1,250" writes and is crossed, red hand caption "ignores the interest". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find the final balance. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "$2,000 is deposited at the end of each year for 10 years into an account earning 4% p.a., compounded annually. No more deposits are made, and the balance is left in the account for a further 5 years at the same rate. Find the final balance." The full question stays on screen. Picture (about 520 × 200 px): a coded timeline 0 to 15 years with blue "$2,000" arrows at years 1 to 10 only and "final balance: ?" at year 15. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Two stages. The ten deposits grow to twenty-four thousand and twelve dollars twenty-**one**. Then five years of compound interest. Times one point zero four to the five gives twenty-nine thousand, two hundred and fourteen dollars fifty-**three**. Forty thousand and forty-seven dollars is wrong. It treats the plan as fifteen years of deposits, so it counts five that were never **made**.

Visual: the card shrinks to the top. The picture's timeline becomes a `twoStage` strip: 10 yearly deposit arrows, then 5 years of amber arcs only ("for 10 years", "a further 5 years" underlined). On "one" (bold) row (52 px) "stage 1: 2000[(1.04)¹⁰ − 1]/0.04 = $24,012.21". On "three" (bold) "stage 2: 24 012.21 × (1.04)⁵ = $29,214.53" in a green frame. On "made" (bold) a red slip "15-year annuity: $40,047.18" writes and is crossed, red hand caption "counts 5 deposits never made". Hold about 1 s.

### 13. handoff
> So every annuity problem is the same model, with its conditions checked: match, model, finish. That's the end of the finance videos. Next, something new. A die is rolled two hundred times, and the four comes up thirty-eight times. Is the die fair? To answer that, you need to know what the counts should look **like**.

Visual: the memory card shows small at the top, then fades on "Next". Board clears to a `FrequencyBars` chart (new small part; unchanged from Revision 1): horizontal axis "face" with 1 to 6, vertical axis "count" from 0 to 50, a tag "200 rolls"; on "thirty-eight" a single blue bar at face 4 rises to "38"; the other five faces show dashed empty outlines with "?". On "like" (bold) chips "Next: is the die fair?" and "?". No expected count, no probability, no fraction 1/6. Hold about 2 s. This is s01's opening frame (kept exactly; `math-a12-s01.md` open decision 1); scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60% (root decision 58), colour roles kept, each one line; the framed card on the right.
> Here are the key notes. Pause the video if you need more time to copy them.

- Match r and n to the payment period; keep r exact.
- Unknown M: goal ÷ [(1 + r)ⁿ − 1]/r; round up to reach it.
- Unknown n: get (1 + r)ⁿ alone, then take logs.
- Round n up to whole payments (r > 0, goal not yet met).
- Payments stop: FV, then × (1 + r)ᵏ.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Match, model, finish.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 13's frame exactly (the face chart with the "38" bar at face 4, five dashed "?" outlines, "200 rolls", the chips "Next: is the die fair?" and "?"). This is the final frame and s01's opening frame.

## Teaching checks

- **Does it explain causes?** Why the deposit is far below $1,666.67: interest supplies most of the balance (3). Why round M up: the nearest cent can fall short of a target (3; feedback 1). Why r and n change with the period: they count payment periods (4). Why keep r exact: a rounded r is compounded 650 times (4). Why logs: the unknown is a power (5). Why round n up: the balance only reaches a value straight after a deposit (5). Why two stages: after the deposits stop nothing is added, so the balance only compounds (6; feedback 2).
- **Misconceptions addressed:** "target ÷ number of deposits" (hook, 3; A1 crossed); "always round to the nearest cent, even for a target" (3, A1); "annual rate with fortnightly payments" (4); "round r early" (4); "round n to the nearest whole number" (5); "keep using the annuity formula after deposits stop" (6 crossed chip; A2 crossed).
- **One idea at a time:** one condition per sentence in 2; one problem type per scene in 3 to 6, each with its own task, givens chip and rows; one rearranging move per row in 5.
- **Video makes it easier:** the student sees the unknown slot move from M to n (3, 5), the split bar show interest outweighing deposits (3), 26 ticks fill one year (4), the balance rows straddle the $50,000 line at 81 and 82 (5), and the second stage run with no deposit arrows (6). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and condition visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 32 s and 29 s (scenes 9 and 11).
- **Avoided double teaching:** f13's formula and conditions, f12's r and n per period, f11's log step and round-up, and f14's split bar are recalled by use; the formula is not re-derived.
- **Syllabus coverage:** `ci21651d90` (2 to 6; A1, A2; key notes 1 to 4): end-of-period payments, the future value at the end of one of the periods, the GP sum formula, applied with each problem's conditions.
- **Out of scope by design:** present value and withdrawal formulas; annuities due; solving for r; the strand's exam-practice video.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Deposits are made at the end of each quarter for 6 years into an account earning 4.4% p.a., compounded quarterly. Find the smallest quarterly deposit, in whole cents, that gives a balance of at least $30,000 after the last deposit."
Model answer: r = 0.044 ÷ 4 = 0.011, n = 6 × 4 = 24. 30 000 = M[(1.011)²⁴ − 1]/0.011, so M = 30 000 ÷ 27.2957… = 1,099.0745…. Since $1,099.07 gives only $29,999.88, the smallest deposit is $1,099.08. Classic mistake (crossed): "$1,250" (30,000 ÷ 24, ignoring interest).

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "$2,000 is deposited at the end of each year for 10 years into an account earning 4% p.a., compounded annually. No more deposits are made, and the balance is left in the account for a further 5 years at the same rate. Find the final balance."
Model answer: stage 1: FV = 2000[(1.04)¹⁰ − 1]/0.04 = $24,012.21. Stage 2: 24,012.21 × (1.04)⁵ = $29,214.53. Classic mistake (crossed): "$40,047.18" (a 15-year annuity, counting 5 deposits never made).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook guess | 600,000 ÷ 360 = $1,666.67 | 1, 3 |
| Solve for M | r = 0.005, n = 360; factor ≈ 1004.5 (1,004.5150…); M = $597.30 (597.3031…); $597.30 → $599,996.83 (short $3.17); $597.31 → $600,006.88; deposits ≈ $215,028; interest ≈ $384,969 | 3 |
| Fortnightly | r = 0.064/26 (≈ 0.0024615), n = 650; FV $720,885.32; deposits $292,500; interest $428,385.32; rounded r 0.002462 gives $721,020.61 (≈ $135 more) | 4 |
| Solve for n | (1.005)ⁿ = 1.5; n ≈ 81.3; after 81 $49,779.03; after 82 $50,527.92; 82 months = 6 years 10 months | 5 |
| Two stages | $20,298.05 × 1.004³⁶ = $23,435.17; crossed $35,026.60 | 6 |
| A1 | r = 0.011, n = 24; factor 27.2957…; M = 1,099.0745… → $1,099.08; $1,099.07 gives $29,999.88; crossed $1,250 | 8, 9 |
| A2 | $24,012.21; × 1.04⁵ = $29,214.53; crossed $40,047.18 | 10, 11 |
| Handoff | 200 rolls; face 4: 38 | 12 |

**Revision 2 additions (recalculated in Python with exact fractions, 7 Nov):**

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Holiday deposit | r = 0.005, n = 24; factor [(1.005)²⁴ − 1]/0.005 = 25.4319552…; M = 6000 ÷ 25.43196 = 235.9237…; $235.92 gives $5,999.91 (9 cents short); $235.93 gives $6,000.16; deposits 24 × 235.93 = $5,662.32; interest $337.84 | 1, 3 |
| Guess | 6000 ÷ 24 = $250 | 1 |
| SA Q2 (site) | $597.30 (597.3031…); $597.30 gives $599,996.83; $597.31 gives $600,006.88; deposits 360 × 597.31 = $215,031.60 ("about $215,032", spoken "about two hundred and fifteen thousand"); interest 600,006.88 − 215,031.60 = $384,975.28 ("about three hundred and eighty-five thousand") | 4 |
| Holiday time | 1 + 6000 × 0.005 ÷ 200 = 1.15; n = ln 1.15 / ln 1.005 = 28.022; after 28 deposits $5,994.90 ($5.10 to go); after 29 $6,224.88 | 6 |
| Payments stop | stage 1: 250 × 25.43196 = $6,357.99; (1.005)¹² = 1.0616778; stage 2: $6,750.14; crossed 3-year annuity 250[(1.005)³⁶ − 1]/0.005 = $9,834.03 | 7 |

Revision 1 values no longer used in learner copy: the $500-a-month, $50,000 time example (n = 82) and the $300-a-month, 3-more-years example ($23,435.17; crossed $35,026.60).

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 exact fractions (2 to 3 Nov, isolated runs); Codex to re-check.

- (1.005³⁶⁰ − 1)/0.005 = 1,004.5150…; 600,000 ÷ it = 597.3031…; 597.30 × it = 599,996.83; 597.31 × it = 600,006.88; 597.30 × 360 = 215,028.
- 450[(1 + 0.064/26)⁶⁵⁰ − 1]/(0.064/26) = 720,885.3178…; with r = 0.002462: 721,020.61.
- log 1.5 / log 1.005 = 81.2955…; 500(1.005⁸¹ − 1)/0.005 = 49,779.03; 500(1.005⁸² − 1)/0.005 = 50,527.92.
- 20,298.0539… × 1.004³⁶ = 23,435.17; 300(1.004⁹⁶ − 1)/0.004 = 35,026.60.
- A1: (1.011²⁴ − 1)/0.011 = 27.2956918…; 30,000 ÷ it = 1,099.0745…; 1,099.07 × it = 29,999.88.
- A2: 2,000(1.04¹⁰ − 1)/0.04 = 24,012.21; × 1.04⁵ = 29,214.53; 2,000(1.04¹⁵ − 1)/0.04 = 40,047.18.

- Revision 2: holiday factor 25.4319552; 6000/25.4319552 = 235.9237; 235.92 × 25.4319552 = 5 999.91; 235.93 × 25.4319552 = 6 000.16; 24 × 235.93 = 5 662.32.
- 597.31 × 1004.515042 = 600 006.88; 360 × 597.31 = 215 031.60; difference 384 975.28.
- n: ln 1.15/ln 1.005 = 0.1397619/0.0049875 = 28.022; 200[(1.005)²⁸ − 1]/0.005 = 5 994.90; with 29: 6 224.88.
- 250[(1.005)²⁴ − 1]/0.005 = 6 357.99; × 1.005¹² = 6 750.14; 250[(1.005)³⁶ − 1]/0.005 = 9 834.03.

## Memory aid check

- **"Match, model, finish."** Original. Meaning, as said in scene 7: match r and n to the payment period; write the model with the target or the unknown in its place; finish with the question's condition (round the right way, whole periods, or growth after payments stop). Assumptions checked: the model is the end-of-period future value formula (the 2024 point's case); "round the right way" is defined in scene 3 and key note 2 (up to guarantee a target; otherwise as the question states); "whole periods" means rounding n up because the balance is read straight after a payment (scene 5); "grow what's left" means multiplying by (1 + r)ᵏ with no payments (scene 6). It helps a new case: a starting balance with a target (f14's form) still matches, models and finishes the same way. Introduced after the four problem types (3 to 6).
- **Considered, not used:** "TVM: enter four, solve for one" (software framing; site lesson 18); "FV, PV, PMT" (calculator labels, and PV is not a 2024 point).

- **Revision 2 note.** Unchanged; "goal or unknown in place" replaces "target or unknown" on the card's model line only.

## Narration length estimate

Revision 2 (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " inside the scene, joined with a space, bold markers removed; the total is the sum of the scene strings): **5,693 characters**, 14 scenes. Characters per scene (1 to 14): 383, 457, 789, 525, 642, 698, 610, 265, 93, 411, 55, 376, 314, 75.

At 13.3 characters per second the speech outside the notes scene is about 422 s. Holds and settling: the hook's 3 s prediction; two 10 s countdowns (20 s); the memory-aid hold (2 s); two feedback holds (2 s); the handoff hold (2 s); settling for the meter runs (3, 6, 7) and the split bar (4), about 14 s in all; the key-notes scene fixed at 45 s. Total **about 510 s**, under the 570 s cap with about 60 s spare.

Reserve trims if the voiced take runs long: scene 5's rounded-rate sentence (keep the grey chip; about 9 s); scene 4's last sentence (keep the split bar silent; about 7 s). Do not cut below 5,500 characters without replacing content.

## Scene list and build ids

Lesson key `m-a12f15` (route math-a12-f15). Suggested explainer folder `src/explainer/lessons/math-a12-f15` and build folder `docs/production/claude-pm/lessons/m-a12f15` (root to confirm when adding the LESSONS entry).

In order (Revision 2; kebab-case; 14 scene headings, all `### N.`): hook-holiday, model-and-conditions, solve-for-deposit, bigger-goal, fortnightly, solve-for-time, payments-stop, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f14's last frame continues into scene 1 (camera continue; the phone slides left and the meter stands up); 1 to 2 camera continue (the anchor shrinks; the model draws); 2 to 3 clear change to the solve board with the meter; 3 to 4, 4 to 5, 5 to 6, 6 to 7 clear change (new case each); 7 to 8 clear change to the card; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: scene 1 prediction (3 s, no ring); attempt-1, attempt-2 (10 s countdown after the speech, ring full from "Pause here to answer."); key-notes is the quiet notes hold, fixed at 45 s (1,350 frames). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12f15-learning-review.md`, `science_check` = `checks/m-a12f15-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, actual appearance): `public/assets/biology/y11-coins-v1.png` and `y11-banknote-v1.png` (decorative money; neither shows a goal or a trip), the briefed `ma12-coin-jar-v1.png` (d02's doubling jar; excluded by the owner rule), `ma12-phone-v1.png` (f14's app; kept only in the opening frame). No luggage or travel plate exists.

Need (painted, new; see the Codex asset brief): `ma12-travel-suitcase-v1.png` (also in f14's final frame).

Have (reused, opening frame only): `ma12-phone-v1.png`.

Coded (studio kit): `GoalMeter` (new), `SolveForPanel`, `ValueSplitBar`, `PeriodTimeline` (`cashFlowMode`, `twoStage`), `FrequencyBars` (handoff, unchanged), `WorkingBoard` parts, `LiveReadoutBoard`, `HandTag`, `MemoryAidCard`, `QuestionCard` with `GivensStrip`, countdown, `KeyNotesScreen`. No coded cartoon of luggage, a beach or a die.

### Studio kit use and additions

From f09 to f14: `moneyEngine`, finance role tokens, `SolveForPanel`, `ValueSplitBar`, `ScreenApp` goal mode.

New in f15:
1. **`GoalMeter`**: a tall meter with a dashed ink goal line, filling one deposit at a time (blue block, then an amber sliver at each period end), with live readouts "deposits", "balance" and "to go"; a stop-short state with a magnifier on the gap; a deposits-off stage where only amber slivers grow.
2. **`PeriodTimeline` `twoStage`** and **`FrequencyBars`** at studio sizes (Revision 1 parts below); `FrequencyBars` must draw s01's opening frame identically.

## Codex asset brief (Maths A12 F15, a holiday fund with a goal)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f15.md`. Paint after the learning review and maths check pass and root gives the go-ahead. This plate is also needed for f14's final frame. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on black and on white); ink and watercolour in the house style of the Module 5 Biology plates and the f09 plates; at least 8 per cent clear margin; no text, labels, letters, numbers, logos, brand names, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-travel-suitcase-v1.png` (1400 × 1800 px): one hard-shell travel suitcase standing upright on its wheels, three-quarter front view, handle extended, a warm teal-blue or sunny orange shell, with a plain blank luggage tag (no writing) on a short strap at the handle and a folded sun hat resting on top. No stickers with words, no airline marks, no destination, no people.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide, plus the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f15-provenance.json`.

### Revision 1 coded part specification (kept; colours now follow the Revision 2 roles, and every part is built as a studio kit part)

No painted plate is needed (programme decision 5; the die is a numbered axis, no dice art). Coded kit parts for the finance-parts kit brief (with f09 to f14's parts), in `src/explainer/math/`, exported through `kit.tsx`, each with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. All money comes from the shared engine (`annuitySchedule`, f12), full precision, display rounded to the cent with en-AU separators.

1. **`PeriodTimeline` `twoStage`** (scenes 6, 11). Stage 1 in `depositMode` (green arrows, amber arcs) for k₁ periods, then stage 2 with amber arcs only for k₂ periods; stage tags; optional `ghostSlots` (dashed empty deposit outlines in stage 2, flashed on cue); compact labels by year. The engine runs stage 2 as Aₙ₊₁ = (1 + r)Aₙ. Checks: 60 + 36 months at r = 0.004, M = 300: 20,298.05 then 23,435.17; 10 + 5 years at 4%, M = 2,000: 24,012.21 then 29,214.53.
2. **`SolveForPanel` targets and round-up readouts** (scenes 3, 5, 9; f11 part). An `unknown` slot (M or n) and `roundUpCheck` readouts that compute the engine's value at the rounded-down and rounded-up candidates (M: $597.30 → 599,996.83 and $597.31 → 600,006.88; $1,099.07 → 29,999.88 and $1,099.08 → 30,000.15; n: 81 → 49,779.03 and 82 → 50,527.92) and mark the first that meets the target.
3. **`FrequencyBars`** (scene 12; s01 may reuse or replace it). Categories on the horizontal axis, counts on the vertical, bars that rise on cue with labels, `unknown` categories drawn as dashed outlines with "?", an optional total tag ("200 rolls"). No probabilities computed. Checks: face 4 = 38 within an axis of 0 to 50.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (exact fractions, cents rounding half up), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the rounding claims: $597.30 falls $3.17 short and $597.31 reaches the target; $1,099.07 falls short and $1,099.08 reaches $30,000; 81 deposits fall short of $50,000 and 82 reach it; "about a hundred and thirty-five dollars" for the rounded fortnightly rate.
3. Confirm the n rearrangement (key note 3): (1 + r)ⁿ = 1 + FV × r ÷ M, and that the log step states the base condition (same base top and bottom).
4. Confirm the two-stage claims: stage 2 has no deposits, so it is compound interest; the crossed 8-year and 15-year annuities count deposits never made.
5. Confirm both attempt questions carry every demand and condition, and that neither card shows r, n, the formula, a rounding direction or a stage split beyond the question's own wording.
6. Confirm the s01 handoff states no expected count or probability and uses only the site's 200 and 38.
7. Confirm the syllabus quote matches the crosswalk JSON exactly (MathML n written as n), and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

11. Revision 2: confirm every new holiday value and the SA Q2 rounding values against "Revision 2 additions"; confirm the site's SA Q2 and Problem 2 numbers are unchanged; confirm the goal meter's readouts match at every cue (9 cents short; $5.10 to go after 28); confirm the colour roles (deposits blue, interest amber, goal lines dashed ink, mistake red only on crossed slips); confirm question-card pictures give nothing away; confirm the five one-line key notes and the 1,350-frame notes scene; confirm the opening matches f14 Revision 2 scene 14 and that scene 13 and the final frame match `math-a12-s01.md` scene 1 exactly.

## YouTube metadata (draft)

Title: Solving Annuity Problems: Find the Deposit, the Time and the Final Balance | Year 12 Maths Advanced

(Title length: 99 characters; shorter alternative: "Solving Annuity Future Value Problems | Year 12 Maths Advanced", 62 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/financial-mathematics/lesson06.sa.html

How much do you need to deposit each month to reach $600,000 in 30 years? Far less than $600,000 ÷ 360, because interest does most of the work. Use one model, FV = M[(1 + r)ⁿ − 1]/r, and check its conditions every time: payments at the end of each period, r and n per payment period, and the question's finishing condition. Solve for the deposit (and round up to reach a target), handle fortnightly payments with r kept exact, solve for the number of deposits with logs, and deal with deposits that stop. A memory aid: match, model, finish. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, financial mathematics.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Builds on: Annuity future value as a geometric sum; what changes the future value (previous videos). Next: Discrete probability distributions.

#Year12Maths #MathsAdvanced #FinancialMaths #HSCScience

## Open decisions

- **1. s01's opening frame (root).** s01 has no design yet. Scene 12 assumes s01 opens on the site's random-variables lesson 5 hook (200 rolls, face 4 came up 38 times) as a face-count chart with five "?" bars. If s01 opens differently, change scene 12's last three sentences and its chart only; the first two sentences close the finance strand either way.
- **2. Round-up rule for targets (root, strand-wide).** Scene 3 states "to be sure of reaching the target, round up" alongside the site's nearest-cent answer. Confirm this matches the strand's convention (f11 rounds repayments to the nearest cent and handles a smaller final payment); A1's wording ("smallest ... in whole cents ... at least") makes the condition explicit, so A1 is fair either way.
- **3. Solving for the rate (root).** Not taught: the 2024 point does not require it and there is no algebraic method; f14's tool could find it. Its later home, if any, is a strand practice video.
- **4. Site link form.** `.sa.html`, as root decision 15.

- **Revision 2 (root).** (a) The holiday goal replaces the $600,000 target as the hook; the site's SA Q2 is kept, shorter, as scene 4. (b) The time and payments-stop examples now use the holiday (original numbers); Revision 1's $500-to-$50,000 and $300-for-5-years examples are dropped. (c) The s01 handoff is unchanged; its blue "38" bar matches the deposit colour only by chance (s01 owns that frame).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f13's formula and conditions, f12's r and n, and f11's log step; check that the checklist is introduced as the reason for each finishing step, not as a list to memorise; that each scene has one problem with its own task and givens; that the round-up reasons are causal; that the two stages are visibly different on the strip; that the attempt cards give nothing away), then the Codex maths check and error check.
- The unknown slot moving, the rows straddling the target line and the second stage without arrows carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is f14's scene 14 (same designer).

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov).

- **Anchor:** a holiday fund with a goal: a painted travel suitcase beside a coded goal meter that fills deposit by deposit towards a dashed goal line. Chosen because a goal is what turns the future value formula round, and the holiday carries three of the four conditions (deposit rounded up, time rounded up, payments that stop when the trip moves).
- **Simulations:** (1) `GoalMeter`: 24 deposits of $235.92 stop 9 cents under the goal and $235.93 crosses it; 28 deposits of $200 stop $5.10 short and the 29th crosses; 24 deposits then 12 interest-only months; (2) the 30-year split bar and the fortnight strip.
- **Colour roles:** as f09 (deposits blue, interest amber, balance ink, goal lines dashed ink, answer green, mistake red on crossed slips only).
- **Plates:** new `ma12-travel-suitcase-v1`; reused `ma12-phone-v1` (opening frame).
- **Narration changes:** scenes 1, 3, 6 and 7 rewritten for the holiday; new scene 4 (site SA Q2, shortened); scene 5 drops its interest sentence. Scenes 2 and 8 to 14 keep their Revision 1 text, including the s01 handoff. Scene count 13 → 14.
- **Counts:** 5,527 (sum of Revision 1 scene strings) → **5,693** characters; about 510 s (60 s notes hold) → **about 510 s** (45 s notes scene).
- **Kit additions:** `GoalMeter`; studio `twoStage` and `FrequencyBars`.
- **Joins:** opens on f14 Revision 2's holiday-goal frame; ends on s01's die chart frame, unchanged.

## Revision 3 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **Zero start and zero rate (scene 2).** The conditions now open with "Does the account start at zero, with a positive interest rate?" and the checklist gains line 0, "starts at $0; r > 0 (if r = 0: FV = nM)".
- **Monthly timing (scene 6).** "But the balance only changes at the end of a month" is tied to the model: "But in this model, the balance only changes at each month's end, when the interest and a deposit go in."
- **Rounding-up scope.** Key note 4 adds "(r > 0, goal not yet met)"; the rounding rule already rests on the scene 2 conditions.
- **Die handoff source.** Codex's follow-up confirmed the live lesson 05 hook (200 rolls, 38 fours); no change needed.
- **Narration changed:** scenes 2 (457 to 520), 6 (698 to 750). Total 5,693 to 5,808 characters, 14 scene strings (build parser rules).
