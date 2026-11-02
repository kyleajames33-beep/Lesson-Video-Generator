# Maths A12 F15: How do end-of-period annuity problems combine the model and its conditions? Solving for the deposit, other payment periods, solving for the time with logs, and payments that stop (design)

Status: Revision 1 (3 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143), the sequence parts from f01 to f08, the finance parts from f09 to f14 (`ToolPanel` `explorerMode`, `SolveForPanel`, `LoanBalanceGraph` `growthMode` with `targetLine`, `DepositLayers`, `ValueSplitBar`, `BalanceTable` with `ellipsisRows`, `PeriodTimeline` `depositMode` and `cashFlowMode`, one shared money engine), plus a two-stage mode for `PeriodTimeline` and one small part for the handoff (`FrequencyBars`), specified below. Nothing recorded; human listening pending.

Narration 5,527 characters, 13 scenes, about 510 s (8.5 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth and last annuities video, and the last video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 52), after f14 (how the inputs change future value) and before s01 (discrete probability distributions). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f09.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank or software names. No brief 151 pack and no route-inputs-3 entry exist for f15 (checked 3 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson06.sa.html`, SHA256 `d54dd8e49e416d806273d69a6a5ff9e3d91adb9c65745e6400dc2f456a49bf3e` (Problem 2 fortnightly, trap 03, SA Q2 find the contribution); `random-variables/lesson05.sa.html`, SHA256 `e4e82191b5488803872d0c4dc2af00c1bba15b708387ef339e819e8b56014bdd` (hook only, for the s01 handoff). Every number recalculated in Python with exact fractions. Course outline entry: `math-a12-f15` (one content point, site source lesson 6).

Owner rules applied: as f01 to f14 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; money exact to the cent in working, with every rounding stated; decimals only in grey readouts except money; attempt cards give nothing away; opens on f14's handoff frame; f13's formula, f12's conditions, f08's and f11's log step recalled by use; "log" written as in f08 and f11, with the base stated once: "any base, the same base on top and bottom").

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Annuities; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` (MathML in linear form):

- `ci21651d90`: "Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

**Boundary:** starts from f14's last frame (scene 14 of `math-a12-f14.md`: the unbranded tool with deposit "?", 6% p.a. compounded monthly, 30 years, a $600,000 target line and a ghost curve ending in "?", chips "Next: work back from a target" and "?"); lists the model's conditions as a checklist; solves for the deposit (site Q2: $597.30 to the nearest cent, $597.31 to be sure of the target); applies a fortnightly period (site Problem 2: r = 0.064/26, n = 650, $720,885.32); solves for the number of deposits with logs ($500 a month to $50,000: 82 deposits); handles deposits that stop (f13's $20,298.05 left 3 more years: $23,435.17). Stops at end-of-period annuity problems for future value. Not taught: present value and withdrawal-annuity formulas (not in the 2024 points); annuities due; solving for the rate (no algebraic method in this course; a tool would be used); the finance strand's exam-practice video (later home, if planned).

## Decisions

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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f12 to f14): balances blue; interest amber; deposits green; targets red dashed; the unknown slot amber; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (more or less than $1,666.67?)
> Last video ended with a target. You want six hundred thousand dollars in thirty years, from deposits at the end of every month, at six per cent a year, compounded monthly. How much should each deposit be? A quick guess is six hundred thousand, divided by three hundred and sixty months, which is one thousand, six hundred and sixty-six dollars sixty-seven. Is the real answer more than that, or less? Make a **guess**.

Visual: opens on f14's last frame exactly (f14 scene 14: the `ToolPanel` in explorer mode with "start balance: $0", "deposit each month: ?" in amber, "rate: 6% p.a., compounded monthly", "years: 30", "future value: $600,000 (target)", the growth graph with the red dashed "$600,000" target line and the ghost curve ending in "?", chips "Next: work back from a target" and "?"). Heading writes on: "How do annuity problems combine the model and its conditions?" as the "Next" chip fades. On "quick guess" a grey chip "600,000 ÷ 360 = $1,666.67?" beside the deposit cell. On "guess" (bold) a 3 s prediction hold with a small dot timer; two chips "more" and "less".

### 2. the model and its conditions
> Every problem in this video uses the same model, so check its conditions first. Are the payments equal, and made at the end of each period? Do r and n match how often the payments are made? Is the future value read at the end of a period, straight after a payment? And what does the question want at the end: rounding to the cent, a whole number of periods, or more growth after the payments stop? This video solves one problem for each of those **conditions**.

Visual: the tool shrinks to the top left. Boxed model in the centre: "FV = M[(1 + r)ⁿ − 1]/r" with a small f12 `cashFlowMode` strip under it (arrows at 1 to n, the flag at n). A checklist writes in the right column, one line per sentence: "1. equal payments at the end of each period"; "2. r and n per payment period"; "3. FV read straight after a payment"; "4. finish as asked: round the right way, whole periods, or growth after payments stop". On "conditions" (bold) four small tags appear under line 4 and the checklist moves to the bottom right, where it stays small for the rest of the video.

### 3. solving for the deposit
> Here, the payments are monthly, so r is zero point zero zero five, and n is three hundred and sixty. Put the target in for the future value, and M is the unknown. Six hundred thousand equals M, times one point zero zero five to the three hundred and sixty, minus one, over zero point zero zero five. That fraction is about one thousand and four point five, so divide by **it**. M is five hundred and ninety-seven dollars and thirty **cents**, to the nearest cent. That's far less than the quick guess, because interest does most of the work. You deposit about two hundred and fifteen thousand dollars, and interest adds about three hundred and eighty-five thousand. One detail: five hundred and ninety-seven dollars thirty falls about three dollars short. To be sure of reaching the target, round up to five hundred and ninety-seven dollars thirty-**one**.

Visual: task strip: "Find the monthly deposit that gives $600,000 after 30 years at 6% p.a., compounded monthly." (site SA Q2, name removed). Givens chip: "FV = $600,000 (target); 6% p.a., compounded monthly; 30 years; deposits at the end of each month". Rows: "r = 0.06 ÷ 12 = 0.005; n = 30 × 12 = 360" (checklist line 2 ticks). `SolveForPanel` (f11 part): "600 000 = M × [(1.005)³⁶⁰ − 1]/0.005" with the M slot amber; grey readout "[(1.005)³⁶⁰ − 1]/0.005 ≈ 1004.5"; on "it" (bold) the factor slides under 600 000: "M = 600 000 ÷ 1004.515…"; on "cents" (bold) "M = $597.30 (nearest cent)" boxed. On "less than the quick guess" the hook chip "$1,666.67?" is ringed grey and the "less" chip ticks. On "interest does most of the work" a `ValueSplitBar`: green "deposits ≈ $215,028" and amber "interest ≈ $384,969" (grey). On "short" a readout pair: "$597.30 → $599,996.83 (short $3.17)" and "$597.31 → $600,006.88"; on "thirty-one" (bold) the second is ticked, tag "to reach the target, round up" (checklist line 4 ticks, first tag).

### 4. a different period: fortnights
> Next, a different payment period. Four hundred and fifty dollars goes in at the end of every fortnight, for twenty-five years, at six point four per cent a year, compounded fortnightly. There are twenty-six fortnights in a year, so r is zero point zero six four, divided by twenty-six, and n is twenty-six times twenty-five, which is six hundred and **fifty**. Keep r as that exact fraction. Rounded to zero point zero zero two four six two, it would add about a hundred and thirty-five dollars after six hundred and fifty periods. The future value is seven hundred and twenty thousand, eight hundred and eighty-five dollars and thirty-two **cents**. The deposits are two hundred and ninety-two thousand, five hundred dollars, so the interest is four hundred and twenty-eight thousand, three hundred and eighty-five dollars thirty-two.

Visual: board clears (new case). Task strip: "$450 is deposited at the end of every fortnight for 25 years at 6.4% p.a., compounded fortnightly. Find the future value and the interest." (site Problem 2, name removed). Givens chip: "M = $450 per fortnight; 6.4% p.a., compounded fortnightly; 25 years". A `cashFlowMode` strip for one year with 26 small green ticks, bracket "26 fortnights = 1 year". On "fifty" (bold) rows "r = 0.064 ÷ 26 (≈ 0.0024615, grey)", "n = 26 × 25 = 650" (checklist line 2 ticks). On "exact fraction" the r row keeps "0.064/26" and a grey chip "r rounded to 0.002462: $721,020.61 (≈ $135 too high)". Row "FV = 450[(1 + 0.064/26)⁶⁵⁰ − 1]/(0.064/26)"; on "cents" (bold) "= $720,885.32" boxed. `ValueSplitBar`: green "$292,500.00", amber "$428,385.32".

### 5. solving for the time
> Now the time is the unknown. Five hundred dollars goes in at the end of each month, at six per cent a year, compounded monthly. How many deposits until the balance reaches fifty thousand dollars? Set fifty thousand equal to five hundred, times one point zero zero five to the n, minus one, over zero point zero zero five. Rearranging gives one point zero zero five to the n equals one point **five**. The unknown is a power, so take logs. n is log one point five over log one point zero zero five, which is about eighty-one point **three**. But the balance only changes at the end of a month. After eighty-one deposits it's still short, at forty-nine thousand, seven hundred and seventy-nine dollars. So round up. It takes eighty-two deposits, which is six years and ten **months**.

Visual: board clears (new case). Task strip: "$500 is deposited at the end of each month at 6% p.a., compounded monthly. How many deposits are needed for the balance to reach $50,000?" Givens chip: "M = $500 per month; r = 0.06 ÷ 12 = 0.005; FV = $50,000 (target); n unknown". Rows in `SolveForPanel` with the n slot amber: "50 000 = 500[(1.005)ⁿ − 1]/0.005"; "× 0.005 ÷ 500: (1.005)ⁿ − 1 = 0.5"; on "five" (bold) "(1.005)ⁿ = 1.5". Log step (as f11): "log (1.005)ⁿ = log 1.5", the power n slides down in front: "n log 1.005 = log 1.5" (grey tag "log: any base, the same base on top and bottom"); on "three" (bold) "n = log 1.5 / log 1.005 ≈ 81.3" (grey decimal). On "end of a month" a small balance strip (`BalanceTable` `ellipsisRows`): rows "⋮", "80", "81: $49,779.03" (below a red dashed "$50,000" line), "82: $50,527.92" (above it); on "months" (bold) "n = 82 deposits = 6 years 10 months" boxed (checklist lines 3 and 4 tick, second tag).

### 6. payments that stop
> The last condition is payments that stop. Three hundred dollars a month for five years, at four point eight per cent, gave twenty thousand, two hundred and ninety-eight dollars and five cents. Now the deposits stop, but the money stays in for three more years at the same rate. That's two stages. The annuity formula covers the deposits. After that, it's plain compound interest, so multiply by one point zero zero four to the thirty-**six**. The final balance is twenty-three thousand, four hundred and thirty-five dollars seventeen. Using the annuity formula for eight years would count thirty-six deposits that were never **made**.

Visual: board clears (new case). Task strip: "$300 is deposited at the end of each month for 5 years at 4.8% p.a., compounded monthly. The deposits then stop, and the balance stays in the account for 3 more years. Find the final balance." A `PeriodTimeline` in `twoStage` mode (new): stage 1 (months 1 to 60) with green deposit arrows and amber arcs, tagged "stage 1: annuity"; stage 2 (months 61 to 96) with amber arcs only, tagged "stage 2: compound interest, no deposits". Row "stage 1: FV = $20,298.05 (earlier video)". On "thirty-six" (bold) row "stage 2: 20 298.05 × (1.004)³⁶" (grey "(1.004)³⁶ ≈ 1.15455"), then "= $23,435.17" boxed (checklist line 4 ticks, third tag). On "made" (bold) a chip "8-year annuity: $35,026.60" fades in and is crossed (caption "counts 36 deposits never made"); stage 2's empty deposit slots flash as dashed outlines.

### 7. memory aid
> Here's a way to keep the steps in order. Match, model, finish. Match r and n to the payment period. Write the model, with the target or the unknown in its place. Then finish with the question's condition: round the right way, use whole periods, or grow what's left.

Visual: the checklist returns large beside the boxed model. The handwritten line writes large: "Match, model, finish." As each word is spoken its step writes under it: "Match: r and n per payment period"; "Model: FV = M[(1 + r)ⁿ − 1]/r, target or unknown in place"; "Finish: round the right way, whole periods, or grow what's left". Hold about 2 seconds.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Find the smallest quarterly deposit that reaches the target. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Deposits are made at the end of each quarter for 6 years into an account earning 4.4% p.a., compounded quarterly. Find the smallest quarterly deposit, in whole cents, that gives a balance of at least $30,000 after the last deposit." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no checklist, no model).

### 9. feedback 1 (brief)
> Quarterly means r is zero point zero four four over four, which is zero point zero one one, and n is twenty-**four**. Dividing thirty thousand by the series factor gives just over one thousand and ninety-nine dollars and seven cents, so round up, to one thousand and ninety-nine dollars and eight **cents**. Twelve hundred and fifty dollars is wrong. It divides thirty thousand by twenty-four, and ignores the **interest**.

Visual: card shrinks to the top. On "four" (bold) "r = 0.044 ÷ 4 = 0.011; n = 6 × 4 = 24" ("each quarter", "6 years", "4.4% p.a., compounded quarterly" underlined in the card). Row "30 000 = M[(1.011)²⁴ − 1]/0.011" with the M slot amber; row "M = 30 000 ÷ 27.2957… = 1099.0745…" (grey). On "cents" (bold) "M = $1,099.08" boxed ("smallest", "at least $30,000" underlined), with a grey readout "$1,099.07 gives $29,999.88". On "interest" (bold) a chip "30 000 ÷ 24 = $1,250" fades in and is crossed (caption "ignores the interest"). Hold about 1 second.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Find the final balance. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "$2,000 is deposited at the end of each year for 10 years into an account earning 4% p.a., compounded annually. No more deposits are made, and the balance is left in the account for a further 5 years at the same rate. Find the final balance." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 2 (brief)
> Two stages. The ten deposits grow to twenty-four thousand and twelve dollars twenty-**one**. Then five years of compound interest. Times one point zero four to the five gives twenty-nine thousand, two hundred and fourteen dollars fifty-**three**. Forty thousand and forty-seven dollars is wrong. It treats the plan as fifteen years of deposits, so it counts five that were never **made**.

Visual: card shrinks to the top. A small `twoStage` strip: 10 yearly deposit arrows, then 5 years of amber arcs only ("for 10 years", "a further 5 years" underlined). On "one" (bold) "stage 1: 2000[(1.04)¹⁰ − 1]/0.04 = $24,012.21". On "three" (bold) "stage 2: 24 012.21 × (1.04)⁵ = $29,214.53" boxed. On "made" (bold) a chip "15-year annuity: $40,047.18" fades in and is crossed (caption "counts 5 deposits never made"). Hold about 1 second.

### 12. handoff
> So every annuity problem is the same model, with its conditions checked: match, model, finish. That's the end of the finance videos. Next, something new. A die is rolled two hundred times, and the four comes up thirty-eight times. Is the die fair? To answer that, you need to know what the counts should look **like**.

Visual: the memory-aid line shows small at the top, then fades on "Next". Board clears to a `FrequencyBars` chart (new small part): horizontal axis "face" with 1 to 6, vertical axis "count" from 0 to 50, a tag "200 rolls"; on "thirty-eight" a single blue bar at face 4 rises to "38"; the other five faces show dashed empty outlines with "?". On "like" (bold) chips "Next: is the die fair?" and "?". No expected count, no probability, no fraction 1/6. Hold about 2 seconds. This is s01's assumed opening frame (open decision 1); scene 13 returns to it silently after the notes.

### 13. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Check the model FV = M[(1 + r)ⁿ − 1]/r: equal payments at the end of each period; r and n per payment period (fortnightly: ÷ 26, × 26); FV read straight after a payment. Keep r exact.
2. Unknown M: put the target in for FV and divide by [(1 + r)ⁿ − 1]/r. To be sure of reaching a target, round M up.
3. Unknown n: rearrange to (1 + r)ⁿ = 1 + FV × r ÷ M, then n = log(1 + FV × r ÷ M) / log(1 + r). Round up to a whole number of payments.
4. Payments stop: find the FV of the payments, then multiply by (1 + r)ᵏ for k more periods with no payments.

Memory aid (large, on the notes screen): *Match, model, finish.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 12's frame exactly (the face chart with the "38" bar at face 4, five dashed "?" outlines, "200 rolls", the chips "Next: is the die fair?" and "?"). This is the final frame and s01's assumed opening frame.

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

**Attempt 1 (scene 8; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Deposits are made at the end of each quarter for 6 years into an account earning 4.4% p.a., compounded quarterly. Find the smallest quarterly deposit, in whole cents, that gives a balance of at least $30,000 after the last deposit."
Model answer: r = 0.044 ÷ 4 = 0.011, n = 6 × 4 = 24. 30 000 = M[(1.011)²⁴ − 1]/0.011, so M = 30 000 ÷ 27.2957… = 1,099.0745…. Since $1,099.07 gives only $29,999.88, the smallest deposit is $1,099.08. Classic mistake (crossed): "$1,250" (30,000 ÷ 24, ignoring interest).

**Attempt 2 (scene 10; original wording, HSC style, 3 marks suggested).** "$2,000 is deposited at the end of each year for 10 years into an account earning 4% p.a., compounded annually. No more deposits are made, and the balance is left in the account for a further 5 years at the same rate. Find the final balance."
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

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 exact fractions (2 to 3 Nov, isolated runs); Codex to re-check.

- (1.005³⁶⁰ − 1)/0.005 = 1,004.5150…; 600,000 ÷ it = 597.3031…; 597.30 × it = 599,996.83; 597.31 × it = 600,006.88; 597.30 × 360 = 215,028.
- 450[(1 + 0.064/26)⁶⁵⁰ − 1]/(0.064/26) = 720,885.3178…; with r = 0.002462: 721,020.61.
- log 1.5 / log 1.005 = 81.2955…; 500(1.005⁸¹ − 1)/0.005 = 49,779.03; 500(1.005⁸² − 1)/0.005 = 50,527.92.
- 20,298.0539… × 1.004³⁶ = 23,435.17; 300(1.004⁹⁶ − 1)/0.004 = 35,026.60.
- A1: (1.011²⁴ − 1)/0.011 = 27.2956918…; 30,000 ÷ it = 1,099.0745…; 1,099.07 × it = 29,999.88.
- A2: 2,000(1.04¹⁰ − 1)/0.04 = 24,012.21; × 1.04⁵ = 29,214.53; 2,000(1.04¹⁵ − 1)/0.04 = 40,047.18.

## Memory aid check

- **"Match, model, finish."** Original. Meaning, as said in scene 7: match r and n to the payment period; write the model with the target or the unknown in its place; finish with the question's condition (round the right way, whole periods, or growth after payments stop). Assumptions checked: the model is the end-of-period future value formula (the 2024 point's case); "round the right way" is defined in scene 3 and key note 2 (up to guarantee a target; otherwise as the question states); "whole periods" means rounding n up because the balance is read straight after a payment (scene 5); "grow what's left" means multiplying by (1 + r)ᵏ with no payments (scene 6). It helps a new case: a starting balance with a target (f14's form) still matches, models and finishes the same way. Introduced after the four problem types (3 to 6).
- **Considered, not used:** "TVM: enter four, solve for one" (software framing; site lesson 18); "FV, PV, PMT" (calculator labels, and PV is not a 2024 point).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,527 characters** (5,539 with the joining spaces), 13 scenes. Characters per scene (1 to 13): 414, 457, 844, 827, 770, 626, 265, 93, 411, 55, 376, 314, 75. At 13.3 characters per second the speech is about 416 s; add about 10 s of settling (the solve-for moves in 3 and 5, the strips in 4 and 6), 3 s for the hook prediction, 20 s for two countdowns, 5 s of short holds (scenes 7, 9, 11, 12) and about 56 s more of the notes hold (about 94 s of holds): **about 510 s**, inside the 5,500 to 6,800 band and under the 570 s cap. Scenes 3 and 4 are the longest; each carries one problem. Feedback: scene 9 about 32 s and scene 11 about 29 s including the 1 s holds. The content fills the band without padding; only about 25 characters can be trimmed before the floor, so if the voiced take runs long shorten holds first.

## Scene list and build ids

Lesson key `m-a12f15` (route math-a12-f15). Suggested explainer folder `src/explainer/lessons/math-a12-f15` and build folder `docs/production/claude-pm/lessons/m-a12f15` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 13 scene headings, all `### N.`): hook, model-and-conditions, solve-for-deposit, fortnightly, solve-for-time, payments-stop, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f14's last frame continues into scene 1 (camera continue, same tool); 1 to 2 camera continue (the tool shrinks; the model draws); 2 to 3 camera continue (same model, the unknown slot appears); 3 to 4, 4 to 5, 5 to 6 clear change (new case each); 6 to 7 camera pull back; attempts and feedback card shrink to the top; 11 to 12 board clear; 12 to 13 fade to the notes board.

Holds: scene 1 prediction (3 s, no ring); attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12f15-learning-review.md`, `science_check` = `checks/m-a12f15-maths-check.md`.

## Assets

Have: no plates. All visuals are coded:
- `ToolPanel` `explorerMode` (f14): scene 1.
- `SolveForPanel` (f11): scenes 3, 5, 9.
- `BalanceTable` with `ellipsisRows` (f09, f11): scene 5.
- `PeriodTimeline` `cashFlowMode` (f12): scenes 2, 4; needs `twoStage` (below).
- `ValueSplitBar` (f14): scenes 3, 4.
- `LoanBalanceGraph` `growthMode` with `targetLine` (f13, f14): scene 1.
- `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).

New: `PeriodTimeline` `twoStage`; `FrequencyBars` (small; may move to the s01 kit).

## Codex asset brief

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

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f13's formula and conditions, f12's r and n, and f11's log step; check that the checklist is introduced as the reason for each finishing step, not as a list to memorise; that each scene has one problem with its own task and givens; that the round-up reasons are causal; that the two stages are visibly different on the strip; that the attempt cards give nothing away), then the Codex maths check and error check.
- The unknown slot moving, the rows straddling the target line and the second stage without arrows carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is f14's scene 14 (same designer).
