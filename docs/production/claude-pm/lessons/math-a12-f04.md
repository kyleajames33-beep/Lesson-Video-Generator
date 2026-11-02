# Maths A12 F04: How do arithmetic sequences model linear change? Fixed change per period, one period or a running total, the timing of n, and where a decay model stops (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143), the sequence parts specified in `math-a12-f01.md` (`TermLadder`, `PartialSumStack`, `SigmaBuilder`), `math-a12-f02.md` (`TermPlot`, `StepCounter`) and `math-a12-f03.md` (`PairingRectangle`), plus one new part specified below (`PeriodTimeline`, the first cash-flow part). Nothing recorded; human listening pending.

Narration 5,722 characters, 15 scenes, about 530 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 41), after f03 (arithmetic partial sums) and before f05 (geometric sequences). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5; the café, ski resort, machine and car are named in words and shown as coded timelines and graphs, with no objects or people drawn; see open decision 2). No brief 151 pack and no route-inputs-3 entry exist for f04 (checked 2 Nov); pack work done here. Site lesson read (2 Nov, read-only): `sequences-and-series/lesson03.sa.html`, SHA256 `6ccf1ca41bea4fa028dec2301417d98bf39c6394ad06a0acebff03cfd413448b` (hook and card 11 answer; card 09 applications, AP against GP; Problem 3). Every number recalculated with SymPy. Course outline entry: `math-a12-f04` (one content point, site source lesson 3).

Owner rules applied: as f01 to f03 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values, with an inequality's decimal root in grey; attempt cards give nothing away; opens on f03's handoff frame; f02's aₙ and f03's Sₙ forms recalled by use, not re-taught).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Arithmetic sequences and series; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci01ed1e3f`: "Apply the formulas for arithmetic sequences and their partial sums to model and solve growth and decay problems involving a quantity that is a linear function of time"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from f03's last frame (a `PeriodTimeline` of 12 month tabs with deposit bars $50, $80, $110 and "?" over the other nine, a dashed "$1,200 in total?" line, chips "Next: more or less than $1,200?" and "?"); identifies an AP model (fixed amount per period; a, d and what n counts) against a fixed percentage (GP, f05); separates one period (aₙ) from a running total (Sₙ); shows the terms on a straight line and the totals curving upward; solves a salary model (expression, total, first year over a target), a decay model with its end point (machine output), and the timing of n ("in year n" against "after n years", car value). Stops at arithmetic models. Not taught: geometric growth and decay (f05 to f08; the handoff shows doubling as a question only); interest and annuities (finance strand); continuous linear models beyond the sequence (the car value is a linear function of time, used only at whole years).

## Decisions

- **Learner question kept (outline).** "How do arithmetic sequences model linear change?" The answer, built in order: a quantity that changes by a fixed amount each period is an AP, with a the first period's value, d the change per period and n the period number (2); a question about one period needs aₙ, and a question about a total needs Sₙ (3); the terms are a linear function of time, while the totals grow faster and curve upward (4); the same formulas solve salary (5, 6) and decay (7) problems, with whole-number periods and a model that stops when the quantity reaches zero (7); the wording of time decides whether n − 1 or n changes have happened (8).
- **The hook surprise (site lesson 3 hook, numbers unchanged).** $50, $80, $110, … (+$30 a month); after 12 months, more or less than $1,200? The site's own answer: a₁₂ = $380, S₁₂ = $2,580 (card 11). The tempting reasoning ("twelve months at around a hundred dollars") is stated and corrected in scene 3 by the bars of the later months towering over $100. The hook names the plan on its own terms, so it stays true if the playlist order changes.
- **AP against GP (site card 09 "AP vs GP, key distinction").** One sentence and a side chip: a fixed amount gives an AP; a fixed percentage (3% a month) gives growing steps, a GP, "coming soon". No GP formula.
- **Linear terms, curving totals (`ci01ed1e3f` "a linear function of time"; site card 11 "The sum grows quadratically").** A `TermPlot` with two series: aₙ = 30n + 20 (blue points on a dashed line) and Sₙ = 15n² + 35n (teal points curving up), n = 1 to 12. The word "quadratic" is not spoken (author note b); the narration says "bends upward" and "faster and faster".
- **Salary (site Problem 3, numbers unchanged; also site SA 3).** a = $62,000, d = $3,500: (a) aₙ = 62,000 + 3,500(n − 1) = 3,500n + 58,500; (b) S₁₀ = 5(124,000 + 31,500) = $777,500; (c) 3,500n + 58,500 > 100,000 gives n > 83/7 ≈ 11.86 (grey), so year 12; checks a₁₁ = $97,000, a₁₂ = $100,500. Cause stated: "the first year has no raise yet", and "year twelve comes after eleven raises".
- **Decay with an end point (original).** A machine makes 900 parts in week 1 and 15 fewer each week: aₙ = 915 − 15n; zero at week 61; the model stops there (negative output is impossible); total before output reaches zero: S₆₀ = 30(900 + 15) = 27,450. This answers the syllabus "decay" half and the modelling limit (a necessary condition in learner copy, because omitting it would teach that the formula holds for every n).
- **Timing of n (original; the core modelling idea).** Car: $28,000 new, −$2,500 a year; after 6 years: 28,000 − 6 × 2,500 = $13,000. The value is a linear function of time t, V = 28,000 − 2,500t; "after n years" means n drops, while "in year n" (salary, café, snow) means n − 1 changes. On a ladder that starts at the new price, $13,000 is the 7th term. A1 and A2 then test both sides of this idea (a total; a "first day below" with n − 1 drops).
- **Attempts (original).** (A1) "A café sells 80 coffees on its first day, and 6 more coffees each day after that. How many coffees does it sell in total over its first 15 days?" a₁₅ = 164; S₁₅ = 1830. Crossed: "164" (day 15 only, not the total). (A2) "On the first day of spring, the snow at a ski resort is 180 cm deep. The depth drops by 4 cm each day. On which day is the depth first below 100 cm?" 180 − 4(n − 1) < 100 gives n > 21, so day 22 (96 cm). Crossed: "Day 21" (exactly 100 cm, not below; it comes from 180 − 4n < 100, which forgets that day 1 has no drop yet). Neither card shows a formula, a value of n or a total.
- **Mistake scene:** none separate. "About $100 a month, so about $1,200" (hook, 3); "the 12th month's amount is the total" (3; A1 crossed); "a percentage change is arithmetic" (2); "year n has n raises" (5, 6, 8); "the model works for every n" (7); "after n years is the nth term" (8); "boundary day counts as below" (A2 crossed).
- **Memory aid (original).** "Find a, d and n, and say what n counts. One period: aₙ. Running total: Sₙ." See "Memory aid check".
- **Handoff (to f05, "How does a fixed ratio determine a geometric sequence?").** Scene 14 sums up in one sentence, then shows the site's lesson 3 non-AP 2, 4, 8, 16 on a `TermLadder` with amber "×2" arcs drawing between neighbours (and the f02-style difference labels "+2, +4, +8" in grey, unequal), a chip "Next: the same ratio every time" and a "?" chip. No formula, no "geometric" word. Scene 15 returns to this frame silently; it is f05's opening frame.
- **Site sources used:** lesson 3 hook and card 11 (savings), card 09 (AP models, AP against GP), Problem 3 and SA 3 (tradie). Not used: card 09's worker example ($48,000 + $2,000, S₁₅ = $930,000; same skill as Problem 3), the "Top 3 list" activity.
- **Site errors:** none new in the parts used (card 09 worker S₁₅ = $930,000, Problem 3 and SA 3 and card 11 recalculated and correct; Problem 3 (c) "n > 11.86" is a rounded 83/7 = 11.857…, acceptable as an inequality boundary). Earlier lesson 3 items are in f02's Decisions.
- **Cause chain taught, in order:** (1) a fixed amount per period makes the amounts an AP; a fixed percentage does not (2); (2) one period is a term, a total is a partial sum, and later periods are much bigger than early ones (3); (3) equal steps make the terms a straight line in time, while each total adds a bigger term, so the totals curve upward (4); (4) the first period has no change yet, so year n has n − 1 changes (5, 6); (5) a threshold needs the first whole period past the boundary, checked both sides (6); (6) a decreasing model stops when the quantity reaches zero (7); (7) "after n years" starts from time zero, so n changes have happened (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f04`; playlist order 41; main learner question "How do arithmetic sequences model linear change?"; syllabus action `ci01ed1e3f`.
  - Entry knowledge: f02 (aₙ = a + (n − 1)d, linear in n, positions are whole numbers); f03 (both Sₙ forms, threshold reasoning); Year 11 linear functions of time; solving linear inequalities.
  - Start boundary: "Open on f03's savings strip ($50, $80, $110, … against $1,200); identify a, d and what n counts."
  - Stop boundary: "Arithmetic growth and decay models: one period or a total, linear terms against curving totals, salary expression, total and first year over a target, a decay model's end point, 'in year n' against 'after n years'. No GPs, interest or annuities."
  - Next handoff: "math-a12-f05: 2, 4, 8, 16 with ×2 steps (differences unequal); ask what happens when every step multiplies by the same number."
  - Prerequisite videos: math-a12-f02, math-a12-f03.
- **Learner-visible vocabulary (plain meaning at first use):** model (a rule that describes a real quantity, 1, 2); period (a month, year, week or day: one step of time, 2); linear growth (the same change in every period, 4); decay (a quantity going down, 7); geometric sequence (named only, "coming soon", 2).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **period timeline** (`PeriodTimeline`, new: a strip of period tabs with value bars, change arcs, a running-total column and time-zero marker; see "Codex asset brief"); `TermPlot` with `series2` (f02 part) for terms and totals; `TermLadder` (f01) for the car's value ladder and the handoff; `PartialSumStack` single columns (f01) for totals against a reference; `AlignedAlgebra`; `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the timeline or plot on the left two-thirds; givens chip (with units) at the top of the right column, algebra below it, current line bright and earlier lines dim.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Savings: aₙ = 50 + 30(n − 1) = 30n + 20; a₁₂ = 380; S₁₂ = 6(100 + 330) = 2580; Sₙ = (n/2)(100 + 30(n − 1)) = 15n² + 35n: 50, 130, 240, 380, 550, 750, 980, 1240, 1530, 1850, 2200, 2580. The total first passes $1,200 in month 8 (1,240); not stated.
  (b) "Quadratic": Sₙ is a quadratic function of n for d ≠ 0; the video says "bends upward" only (the word adds a claim the student cannot yet see; the site says it; open decision 3).
  (c) Tradie: aₙ = 3500n + 58500; S₁₀ = 5(124000 + 31500) = 777500; 3500n > 41500 gives n > 83/7 = 11.857…; a₁₁ = 97000, a₁₂ = 100500.
  (d) Machine: aₙ = 900 − 15(n − 1) = 915 − 15n; a₆₀ = 15, a₆₁ = 0; S₆₀ = 30(900 + 15) = 27450 = S₆₁. "Before its output reaches zero" means weeks 1 to 60.
  (e) Car: V(t) = 28000 − 2500t at whole t; V(6) = 13000. As a sequence starting at the new price (b₁ = 28000), b₇ = 28000 + 6(−2500) = 13000. Value reaches 0 at t = 11.2 (not stated; the model is used for six years only).
  (f) A1: a₁₅ = 80 + 14 × 6 = 164; S₁₅ = 7.5 × 244 = 1830. A2: 180 − 4(n − 1) < 100 gives n − 1 > 20, n > 21, so n = 22; a₂₁ = 100, a₂₂ = 96; the wrong model 180 − 4n < 100 gives n > 20, day 21.
  (g) Units: dollars on every money readout ("$380"); "parts", "coffees", "cm" on the others. Money written with a comma in screen text ($62,000; $777,500) and spoken in full.
  (h) Pronunciations: "three thousand five hundred n, plus fifty-eight thousand five hundred"; "eleven point eight six"; "twenty-seven thousand, four hundred and fifty"; "S twelve", "S ten".
  (i) Plot windows: scene 4 n from 0 to 12.5, y from 0 to 2,700 (ticks 0, 500, …, 2,500; month ticks 1 to 12); the aₙ series is small against Sₙ, so an inset y-scale for aₙ (0 to 400, blue axis on the right) is used, labelled clearly; scene 7 week from 0 to 66, y from −60 to 960 (points every 5 weeks plus 60 and 61; red dashed y = 0; points beyond 61 drawn grey and crossed).

Main question: *When a quantity changes by the same amount every period, how do we model it, and how do we know whether a question wants one period or the total?*
Entry knowledge (f02, f03; Year 11 linear functions and inequalities): aₙ = a + (n − 1)d; both Sₙ forms; thresholds.
Stops after: arithmetic growth and decay models with totals, thresholds, end points and timing. No GPs or finance.
Handoff: math-a12-f05: 2, 4, 8, 16 with ×2 steps (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f01 to f03): period values (terms) blue bars and cards; changes per period amber arcs; running totals teal; reference lines red dashed; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (more or less than $1,200?)
> Here's a savings plan. You save fifty dollars in January, eighty in February and a hundred and ten in March, adding thirty dollars more each month. After twelve months, is your total more or less than twelve hundred dollars? Many people say less, or about the same. Twelve months at around a hundred dollars sounds like twelve hundred. Let's find out, and see how arithmetic sequences model change like this.

Visual: opens on f03's last frame exactly (f03 scene 15: the `PeriodTimeline` with 12 month tabs, bars "$50", "$80", "$110" with "+$30" arcs, "?" over the other nine tabs, the dashed red "$1,200 in total?" line across the empty total column, chips "Next: more or less than $1,200?" and "?"). Heading writes on: "How do arithmetic sequences model linear change?" as the chips fade. On "Many people say less" a grey guess chip "12 × about $100 ≈ $1,200" appears beside the total column and stays through scene 3.

### 2. spotting an arithmetic model
> First, why is this arithmetic? Each month's saving is thirty dollars more than the month before. When a fixed amount is added each period, the amounts make an arithmetic sequence. So a sub n is the saving in month n. The first term, a, is fifty dollars, the common difference, d, is thirty dollars, and n counts the **months**. If the change were a fixed percentage instead, like three per cent more each month, the steps themselves would grow. That's a geometric sequence, and it's coming **soon**.

Visual: camera continue. The three "+$30" arcs glow. Tag "fixed amount each period → arithmetic sequence". On "a sub n" a label under the tabs "aₙ: the saving in month n"; givens chip writes in the right column: "a = $50, d = $30, n = month number"; on "months" the tab labels gain small grey numbers 1 to 12. On "fixed percentage" a small side strip slides in: bars growing by 3% each month with arcs "+3%" whose dollar steps (grey "+$1.50", "+$1.55", …) grow slightly, tagged "growing steps: not arithmetic"; on "soon" a chip "Later: geometric sequences", and the side strip fades.

### 3. one month, or the total?
> Now choose the right formula. One month's saving is a single term. In month twelve, it's fifty plus eleven lots of thirty, which is three hundred and eighty **dollars**. But the question asks for the total over all twelve months, and that's a partial sum, S twelve. It's six, times one hundred plus three hundred and thirty, which is two thousand five hundred and eighty **dollars**. That's more than double the guess. The guess forgot that the later months are much bigger than a hundred dollars.

Visual: camera continue. Rule chips at the top of the right column: "one period: aₙ = a + (n − 1)d" and "total: Sₙ = (n/2)(a + aₙ)". On "a single term" the December tab's "?" becomes a bar; row "a₁₂ = 50 + 11 × 30"; on "dollars" (first bold) "= $380" and the December bar rises to its true height, towering over the first bars. On "partial sum" the remaining "?" bars rise one by one to their heights ($140 to $350; small grey labels), and all twelve bars slide together into the total column as a single teal `PartialSumStack` column; row "S₁₂ = (12/2)(50 + 380) = 6 × 430"; on "dollars" (second bold) "= $2,580" boxed, and the column passes far above the red $1,200 line. On "more than double" the grey guess chip is crossed (caption "later months are far above $100"); a dashed grey $100 level line across the bars shows how many months are above it.

### 4. linear terms, curving totals
> Look at the two graphs. Each month's saving goes up by the same thirty dollars, so the savings lie on a straight line. a sub n is thirty n plus twenty, a linear function of the month number. That's what linear growth means: the same change in every period. But the running total adds a bigger amount each month, so its graph bends **upward**. The totals grow faster and faster, even though each month's saving only grows by thirty.

Visual: clear change to a `TermPlot` with two series (author note i): blue points aₙ for n = 1 to 12 on a dashed line (right-hand blue axis, $0 to $400), teal points Sₙ (left-hand axis, $0 to $2,700). On "straight line" the run-1, rise-30 steps draw between the blue points; row "aₙ = 30n + 20: linear in n (time)". On "linear growth means" a tag "same change every period". On "upward" the teal points build one by one, each a little higher above the last, with the gap between consecutive teal points labelled grey for the first three and last ("+$80", "+$110", "+$140", …, "+$380") so the growing jumps are visible; the teal points curve upward. On the last sentence both series pulse together, tags "terms: +$30 each month" and "totals: bigger jumps each month".

### 5. worked example: a salary
> Here's a salary. A tradie earns sixty-two thousand dollars in their first year, and gets a raise of three thousand five hundred dollars every year. Their income in year n is sixty-two thousand, plus n minus one raises, because the first year has no raise yet. That simplifies to three thousand five hundred n, plus fifty-eight thousand five hundred. Over the first ten years, they earn S ten. That's five, times one hundred and twenty-four thousand, plus nine raises. So it's five times one hundred and fifty-five thousand five hundred, which is seven hundred and seventy-seven thousand five hundred **dollars**.

Visual: board clears (new case). Task strip: "(a) Write an expression for income in year n. (b) Find the total earned over the first 10 years." (site Problem 3, parts (a), (b)). Givens chip (with units): "first year: $62,000; raise: $3,500 each year". A `PeriodTimeline` of year tabs 1 to 5 and "…": bars $62,000, $65,500, $69,000, …; year 1 has no arc before it, tagged "no raise yet"; amber "+$3,500" arcs between the others. Rows: "aₙ = 62 000 + 3500(n − 1)"; "= 3500n + 58 500". Then (b): "S₁₀ = (10/2)[2 × 62 000 + 9 × 3500]"; "= 5(124 000 + 31 500)"; "= 5 × 155 500"; on "dollars" "= $777,500" boxed.

### 6. worked example: the first year over a target
> In which year does their income first go over one hundred thousand dollars? Set the formula above one hundred thousand. Then three thousand five hundred n is more than forty-one thousand five hundred, so n is more than about eleven point eight **six**. Years are whole numbers, so it's year twelve. Check both sides. Year eleven pays ninety-seven thousand, and year twelve pays one hundred thousand five hundred **dollars**. Notice that year twelve comes after eleven raises, not twelve.

Visual: camera continue (same givens; the (a) expression stays bright, the (b) rows dim). Task strip part (c): "In which year does income first exceed $100,000?" Rows: "3500n + 58 500 > 100 000"; "3500n > 41 500"; on "six" "n > 83/7" with grey "≈ 11.86". Number line with n = 11, 11.86 (dashed marker), 12; "year 12" boxed. On "Check both sides" two bars against a red dashed $100,000 line: "year 11: $97,000" (below) and, on "dollars", "year 12: $100,500" (above). On the last sentence a `StepCounter` bracket over the year strip: "year 12: 11 raises".

### 7. decay: where the model stops
> Arithmetic models can go down, too. A new machine makes nine hundred parts in its first week, and fifteen fewer parts each week after that. Here d is minus fifteen, so its output in week n is nine hundred and fifteen, minus fifteen n. That reaches zero in week sixty-**one**. After that, the formula gives negative parts, which can't happen, so the model only works up to there. How many parts does it make before its output reaches zero? That's the first sixty weeks: thirty, times nine hundred plus fifteen, which is twenty-seven thousand, four hundred and **fifty**.

Visual: board clears (new case). Task strip: "How many parts does the machine make before its weekly output reaches zero?" (original). Givens chip: "week 1: 900 parts; 15 fewer each week". Row "aₙ = 900 − 15(n − 1) = 915 − 15n". A `TermPlot` (author note i): falling points every 5 weeks with a dashed guide line, red dashed y = 0; on "one" (bold) the point (61, 0) is ringed, row "915 − 15n = 0 at n = 61". On "negative parts" the guide line continues below zero in grey with two grey points (62, −15) and (63, −30) crossed, tag "model stops at week 61". On "first sixty weeks" weeks 1 to 60 tint; rows "S₆₀ = (60/2)(900 + 15)"; "= 30 × 915"; on "fifty" "= 27 450 parts" boxed.

### 8. in year n, or after n years?
> Watch the wording about time. A car costs twenty-eight thousand dollars new, and loses two thousand five hundred dollars in value each year. What's it worth after six years? Here the starting value is at time zero, before any year has passed. After one year, there's one drop. After six years, there are six drops. So the value is twenty-eight thousand, minus six lots of two thousand five hundred, which is thirteen thousand **dollars**. As a sequence that starts at the new price, that's the seventh term, not the sixth. So, in year n means n minus one changes, but after n years means n **changes**.

Visual: board clears (new case). Task strip: "A car costs $28,000 new and loses $2,500 in value each year. What is it worth after 6 years?" (original). Givens chip: "new: $28,000; −$2,500 each year". A `PeriodTimeline` in time mode: a time axis with a marker "t = 0 (new)" before the first tab, then year boundaries "after 1 year", …, "after 6 years"; on "one drop" one amber "−$2,500" arc from t = 0 to t = 1; on "six drops" six arcs, counted by a `StepCounter` "1" to "6". Row "28 000 − 6 × 2500"; on "dollars" (bold) "= $13,000" boxed, with a grey "V = 28 000 − 2500t (t in years)". On "seventh term" a `TermLadder` under the axis: cards $28,000 (n = 1), $25,500, …, $13,000 (n = 7), the last ringed, tag "7th term: 6 steps". On "changes" a two-row chip: "in year n: n − 1 changes" and "after n years: n changes", the second row glowing.

### 9. memory aid
> For any of these problems, first find a, d and n, and say what n counts. Then ask one question. Is it one period? Use a sub n. Is it a running total? Use S sub **n**.

Visual: the handwritten lines write large: "Find a, d and n. Say what n counts." Under it: "One period: aₙ. Running total: Sₙ." A small icon beside each: a single bar (aₙ) and a teal stack (Sₙ). On "n" (bold) the two icons pulse. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A café sells eighty coffees on its first day, and six more coffees each day after that. How many coffees does it sell in total over its first fifteen days? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A café sells 80 coffees on its first day, and 6 more coffees each day after that. How many coffees does it sell in total over its first 15 days?" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no rule chips, no timeline).

### 11. feedback 1 (brief)
> This is a total, so it's a partial sum. Here a is eighty, d is six and n is fifteen. Day fifteen sells eighty plus fourteen sixes, which is one hundred and sixty-**four**. So the total is fifteen over two, times eighty plus one hundred and sixty-four, which is one thousand eight hundred and **thirty**. One hundred and sixty-four is wrong. That's just day fifteen's sales, not the **total**.

Visual: card shrinks to the top; "in total" underlined first, then "80", "6 more" and "15 days". Givens chip "a = 80, d = 6, n = 15". Row "a₁₅ = 80 + 14 × 6 = 164" (on "four"). Row "S₁₅ = (15/2)(80 + 164) = 7.5 × 244"; on "thirty" "= 1830 coffees" boxed. On "total" a chip "164 coffees" fades in and is crossed (caption "day 15 only, not the total"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. On the first day of spring, the snow at a ski resort is one hundred and eighty centimetres deep. It drops by four centimetres each day. On which day is the depth first below one hundred centimetres? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "On the first day of spring, the snow at a ski resort is 180 cm deep. The depth drops by 4 cm each day. On which day is the depth first below 100 cm?" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Day n comes after n minus one drops, so the depth is one hundred and eighty, minus four lots of n minus one. Set that below one hundred. Then n minus one is more than twenty, so n is more than twenty-**one**. The first day below is day twenty-two, at ninety-six centimetres. Day twenty-one is wrong. On that day the depth is exactly one hundred, not **below**.

Visual: card shrinks to the top; "first day", "180 cm", "4 cm each day" and "first below 100 cm" underlined as used. Row "day n: 180 − 4(n − 1)" with a grey tag "day 1: no drop yet". Rows "180 − 4(n − 1) < 100"; "n − 1 > 20"; on "one" "n > 21". "Day 22 (96 cm)" boxed. On "below" a chip "Day 21" fades in and is crossed (caption "depth exactly 100 cm: not below"). Hold about 1 second.

### 14. handoff
> So an arithmetic sequence models a quantity that changes by the same amount each period. Its terms lie on a straight line, and S sub n gives the running total. But what if each step multiplies instead? Two, four, eight, sixteen. Each term is double the one **before**.

Visual: the memory-aid icons and the plot motif show small at the top, then fade on "But what if". Board clears to a `TermLadder`: 2, 4, 8, 16 (positions n = 1 to 4 in grey). Grey difference labels "+2", "+4", "+8" appear under the gaps (unequal, tagged "not the same step"); on "before" amber "×2" arcs draw over the gaps, one after another. A chip "Next: the same ratio every time" and a "?" chip. No formula, no "geometric" word. Hold about 2 seconds. This is f05's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A quantity that changes by the same amount each period is an arithmetic model: a = the first period's value, d = the change per period (negative for decay), n = the period number. A fixed percentage change is not arithmetic.
2. One period: aₙ = a + (n − 1)d. Running total: Sₙ = (n/2)(a + aₙ) or (n/2)[2a + (n − 1)d].
3. Timing: "in year n" means n − 1 changes so far; "after n years" (starting from time zero) means n changes.
4. Thresholds: take the first whole period past the boundary and check both sides. A decay model stops when the quantity reaches zero.

Memory aid (large, on the notes screen): *Find a, d and n. Say what n counts. One period: aₙ. Running total: Sₙ.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (2, 4, 8, 16 with the grey differences, the "×2" arcs, the chips "Next: the same ratio every time" and "?"). This is the final frame and f05's opening frame.

## Teaching checks

- **Does it explain causes?** Why the savings are arithmetic: a fixed amount each month (2). Why the total beats $1,200: later months are far above $100 (3). Why the terms make a line and the totals curve: equal steps against growing additions (4). Why year n has n − 1 raises: the first year has none (5, 6). Why year 12: the first whole year past 11.86, checked both sides (6). Why the machine model stops: output cannot be negative (7). Why the car's value after 6 years is the 7th term: time zero is the first value (8).
- **Misconceptions addressed:** "about $100 a month" (hook, 3); aₙ confused with Sₙ (3; A1 crossed); percentage change treated as arithmetic (2); n raises in year n (5, 6, 8); a model valid for every n (7); boundary counted as below (A2 crossed); "after n years" as the nth term (8).
- **One idea at a time:** one model per scene from 5 on (6 continues 5's model with one new question); rows replace each other with only the needed results kept; the plot appears only where it carries the cause (4, 7).
- **Video makes it easier:** the student watches the later bars tower over $100 and the stack pass the $1,200 line (3), sees equal steps against growing jumps (4), sees the guide line continue below zero and the impossible points crossed (7), and sees six drops from time zero land on the seventh card (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given (with units) visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 30 s and 28 s (scenes 11 and 13; at the top of the brief-feedback range because each names one model choice before the arithmetic).
- **Avoided double teaching:** f02's aₙ and f03's two Sₙ forms appear as rule chips and are used, not re-derived; Year 11 linear functions in one phrase.
- **Syllabus coverage:** `ci01ed1e3f` (2 to 8; A1 growth with a total, A2 decay with a threshold; key notes 1 to 4).
- **Out of scope by design:** geometric models; interest, loans and annuities; continuous models.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A café sells 80 coffees on its first day, and 6 more coffees each day after that. How many coffees does it sell in total over its first 15 days?"
Model answer: an AP with a = 80, d = 6, n = 15; a₁₅ = 80 + 14 × 6 = 164; S₁₅ = (15/2)(80 + 164) = 1830 coffees (or (15/2)[160 + 14 × 6] = 1830). Classic mistake (crossed): "164" (day 15's sales).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "On the first day of spring, the snow at a ski resort is 180 cm deep. The depth drops by 4 cm each day. On which day is the depth first below 100 cm?"
Model answer: depth on day n is 180 − 4(n − 1) cm; 180 − 4(n − 1) < 100 gives n − 1 > 20, so n > 21; the first whole day is day 22 (96 cm; day 21 is exactly 100 cm). Classic mistake (crossed): "Day 21".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Savings (site) | $50, $80, $110, … (+$30); a₁₂ = $380; S₁₂ = 6 × 430 = $2,580; guess $1,200 | 1 to 3 |
| Savings bars | months 4 to 11: $140, $170, $200, $230, $260, $290, $320, $350 | 3 |
| Graphs | aₙ = 30n + 20; Sₙ = 15n² + 35n: 50, 130, 240, 380, 550, 750, 980, 1240, 1530, 1850, 2200, 2580; jumps +80, +110, +140, …, +380 | 4 |
| Percentage side strip | $50 growing by 3% a month: grey steps +$1.50, +$1.55 | 2 |
| Tradie (site) | aₙ = 3500n + 58 500; S₁₀ = 5 × 155 500 = $777,500; n > 83/7 ≈ 11.86; a₁₁ = $97,000, a₁₂ = $100,500 | 5, 6 |
| Machine | aₙ = 915 − 15n; zero at n = 61; S₆₀ = 30 × 915 = 27,450 parts | 7 |
| Car | 28 000 − 6 × 2500 = $13,000; 7th term of 28 000, 25 500, … | 8 |
| A1 | a₁₅ = 164; S₁₅ = 1830; crossed 164 | 10, 11 |
| A2 | 180 − 4(n − 1) < 100: n > 21, day 22 (96 cm); crossed day 21 (100 cm) | 12, 13 |
| Handoff | 2, 4, 8, 16; differences +2, +4, +8; ×2 | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 50 + 30(n − 1) = 30n + 20; n = 1 to 12: 50, 80, …, 380; Sₙ = 15n² + 35n, S₁₂ = 2580; jumps Sₙ − Sₙ₋₁ = aₙ.
- 50 × 1.03 = 51.50 (step +1.50); 51.50 × 1.03 = 53.045 (step +1.545, shown "+$1.55").
- 62 000 + 3500(n − 1) = 3500n + 58 500; S₁₀ = 777 500; 41 500/3500 = 83/7 = 11.857…; a₁₁ = 97 000, a₁₂ = 100 500.
- 900 − 15(n − 1) = 915 − 15n; zero at 61; S₆₀ = 27 450 = S₆₁.
- 28 000 − 15 000 = 13 000; 28 000 + 6(−2500) = 13 000.
- A1: 80 + 14 × 6 = 164; 7.5 × 244 = 1830. A2: 180 − 4 × 20 = 100 (day 21), 180 − 4 × 21 = 96 (day 22).
- 2, 4, 8, 16: differences 2, 4, 8; ratios 2.

## Memory aid check

- **"Find a, d and n. Say what n counts. One period: aₙ. Running total: Sₙ."** Original. Meaning, as said in scene 9: set up the model by naming the first value, the change per period and what the period number means, then match the question to a term or a partial sum. Assumptions checked: the quantity changes by a fixed amount per period (an AP; key note 1 says a percentage change is not arithmetic); "what n counts" carries the timing rule of scene 8 (in year n against after n years); "running total" means a sum of the period values, which is meaningful for sales, savings, earnings and parts but not for a level such as snow depth or a car's value (A2 and scene 8 use aₙ only, as the aid's first branch). It helps a new case: "total rent paid in the first 3 years if rent rises $20 a week each year" needs Sₙ over years. Introduced after the cause and the uses (2 to 8).
- **Considered, not used:** "AP: add; GP: multiply" (f05's job); a table of keywords ("total", "altogether") (keywords without the meaning).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,722 characters**, 15 scenes. Characters per scene (1 to 15): 408, 491, 489, 427, 608, 479, 561, 594, 162, 188, 380, 230, 352, 264, 75 (the total includes the 14 joining spaces). At 13.3 characters per second the speech is about 430 s; add about 15 s of settling time for the bars in scene 3, the two series in scene 4, the plot in scene 7 and the time strip in scene 8, 20 s for two countdowns, 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 530 s**, inside the band and under the 570 s cap. Reserve trim if the voiced take runs long: scene 1's "Many people say less, or about the same." (keep the guess chip); scene 4's last sentence (keep the tags silent). More than about 220 characters of trims would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12f04` (route math-a12-f04). Suggested explainer folder `src/explainer/lessons/math-a12-f04` and build folder `docs/production/claude-pm/lessons/m-a12f04` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, arithmetic-model, period-or-total, linear-and-curving, salary, first-year-over, decay-end, timing-of-n, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f03's last frame continues into scene 1 (camera continue, same strip); 1 to 2 to 3 camera continue; 3 to 4 clear change (bars to points); 4 to 5 clear change (new case); 5 to 6 camera continue (same model); 6 to 7 and 7 to 8 clear changes; 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f04-learning-review.md`, `science_check` = `checks/m-a12f04-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Sequence parts from f01 (`TermLadder`, `PartialSumStack` with f03's `referenceLine`), f02 (`TermPlot` with `series2` and a second y-axis, `StepCounter`). The number lines in scenes 6 and 13 are plain SVG.

New part: `PeriodTimeline` (below). `TermPlot` gains `secondAxis` ({series: 2 | 1, min, max, ticks, colour}) for scene 4.

## Codex asset brief

No painted plate is needed (programme decision 5; open decision 2). Coded kit part for the sequence-parts kit brief (with f01's three, f02's two and f03's one), in `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. It is the first cash-flow part; the finance strand will extend it (deposits, interest and withdrawals per period).

1. **`PeriodTimeline`** (scenes 1 to 3, 5, 6, 8; f03 scene 14; later finance videos). A horizontal strip of period tabs on a baseline, each with a value bar. Props: `periods` (count, or labels such as "Jan" … "Dec", "year 1" …), `values` (numbers, author-supplied) and `valueFn` (optional numeric function of n; if both are given the part checks them equal), `unit` (prefix or suffix, for example "$" or " parts"; formats with en-AU thousands separators), `shown` (which bars are visible; others show "?"), `riseAt` ({index, at}[]: a "?" becomes a bar that grows to its height), `changeArcs` ({from, to, label, at}[]: amber arcs between tabs, such as "+$30" or "−$2,500"; the part checks each label against the value difference and throws if it differs), `noChangeTag` ({index, text}: such as "no raise yet" before period 1), `levelLine` ({value, label, colour}: horizontal dashed line, such as $100 or $100,000), `totalColumn` ({at, referenceLine?: {value, label}}: all visible bars slide together into a single teal stack column at the right, whose height equals the sum; checked), `timeMode` ({zeroLabel, boundaryLabels}: a marker "t = 0" before the first tab and labels at period boundaries such as "after 1 year", so changes are drawn between boundaries rather than over tabs), `stepCounter` (links the f02 `StepCounter` to the arcs), `scaleMax`, `compact` (for 12 or more tabs). Checks: pilot savings (12 months, 50 + 30(n − 1), total 2580), tradie (5 visible years, +3500, no raise before year 1), car in time mode (t = 0 to 6, six arcs of −2500, value 13 000 at t = 6). Fit check with 12 tabs at 1920 and phone landscape, and with five-digit dollar labels.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the syllabus quote matches the official 2024 text, and that no site module label appears in learner copy or metadata.
3. Confirm the scope of learner-visible general claims: "a fixed amount each period makes an arithmetic sequence; a fixed percentage does not" (2, key note 1); "linear growth: the same change in every period" (4); the totals "bend upward" (4); "the model only works up to there" (7, key note 4); the timing rule "in year n: n − 1 changes; after n years: n changes" (8, key note 3).
4. Confirm the threshold reasoning in scenes 6 and A2 (first whole period past the boundary; day 21 is exactly 100 cm), and the end point in scene 7 (week 61 output is 0; "before its output reaches zero" is weeks 1 to 60).
5. Confirm both attempts carry every demand and unit, are original in wording, and that neither card or its visuals shows a formula, n or a total.
6. Confirm the opening matches f03's scene 15 exactly and the handoff (scene 14) gives no formula or "geometric" word; scene 15 returns to it.
7. Confirm the money formatting (en-AU commas in screen text) and that units appear on every result.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Arithmetic Sequence Models: Linear Growth, Decay and "After n Years" | Year 12 Maths Advanced

(Title length: 93 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson03.sa.html

Save $50, then $80, then $110, adding $30 each month. After a year, is the total more or less than $1,200? It is $2,580, because the later months are far bigger than $100. See how a fixed change per period makes an arithmetic model, when a question wants one period (aₙ) or the running total (Sₙ), why the terms lie on a straight line while the totals curve upward, how to model a salary with yearly raises and find the first year over $100,000, where a decay model stops, and why "in year n" and "after n years" differ by one. A memory aid: find a, d and n, say what n counts, then choose aₙ or Sₙ. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the formulas for arithmetic sequences and their partial sums to model and solve growth and decay problems involving a quantity that is a linear function of time"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Arithmetic sequences and why the arithmetic sum formulas work (previous videos). Next: Geometric sequences.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. Feedback length (root).** Feedback 1 and 2 run about 30 s and 28 s, at the top of the 15 to 30 s range, because each names the model choice (total; n − 1 drops) before the arithmetic. If root wants them shorter, cut "This is a total, so it's a partial sum." from feedback 1 (keep the underline on "in total") and "Set that below one hundred." from feedback 2 (keep the row); about −80 characters, still above the floor.
- **2. Coded contexts, no plates (root).** The café, ski resort, machine and car appear only as words, timelines and graphs (programme decision 5; owner rule against clip-art coded objects). If root wants small context plates (a coffee cup, a snow gauge), they would be Codex painted plates; none is requested because the timeline carries the cause.
- **3. "Quadratic" for the totals (learning review).** The site says the sum "grows quadratically"; the video says "bends upward" and "faster and faster" (author note b). Confirm, or add "a quadratic in n" as a grey tag on the teal series (no speech change).
- **4. Car value (maths check).** "After six years" is a linear function of time V = 28 000 − 2500t evaluated at t = 6; the ladder view calls $13,000 the 7th term of a sequence that starts at the new price. Confirm the wording "As a sequence that starts at the new price, that's the seventh term" is clear and correct.
- **5. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f02, f03 and Year 11 linear functions; check that the hook's guess is crossed by visible evidence; that aₙ against Sₙ is decided by the question's wording; that the two-series plot is readable with its two axes; that "the first year has no raise yet" is said before n − 1 is used; that the decay end point is a necessary condition, not a caveat; that the timing scene clearly separates "in year n" and "after n years"; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The rising bars, the stack passing $1,200, the growing jumps and the time-zero arcs carry the explanation; judge them at playback speed in the voiced preview. Every bar, point and readout must be computed from the same functions as the displayed expressions.
- The opening frame is f03's scene 15 (same designer, 2 Nov). If f03's handoff changes in review, change scene 1's first visual to match. Scene 14 must match f05's opening when f05 is designed.
