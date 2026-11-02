# Maths A12 F08: How do geometric models predict repeated growth or decay? A fixed percentage as a ratio, counting from time zero, thresholds with logs, and totals that settle (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143) and the sequence parts specified in `math-a12-f01.md` (`TermLadder`, `PartialSumStack`), `math-a12-f02.md` (`TermPlot`, `StepCounter`), `math-a12-f04.md` (`PeriodTimeline`), `math-a12-f05.md` (extensions) and `math-a12-f07.md` (`ConvergenceStrip`), plus `PeriodTimeline` extensions specified below. No new part. Nothing recorded; human listening pending.

Narration 6,124 characters, 14 scenes, about 560 s (9.3 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: eighth and last video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 45), after f07 (limiting sums) and before f09 (reducing-balance loans, the first financial mathematics video). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5; the colony, car, oil well, town and ball are named in words and shown as coded timelines, graphs and strips, with no objects or people drawn, as f04 open decision 2). No brief 151 pack and no route-inputs-3 entry exist (checked 2 Nov); pack work done here. Site lesson read (2 Nov, read-only): `sequences-and-series/lesson04.sa.html`, SHA256 `d1fd3515cc8305e434a4d55e703dffc7bff674fc014d3047911cf0b570497afc` (card 09 with the bacteria and car examples and the "after k periods" rule; Problem 3; MC Q5; card 01 recall prompts; card 11). Handoff source read: `financial-mathematics/lesson12.sa.html` Problem 1 ($30,000 car loan at 7.2% p.a. monthly, $600 repayments; read-only, numbers only). Every number recalculated with SymPy. Course outline entry: `math-a12-f08` (one content point, site source lesson 4).

Owner rules applied: as f05 to f07 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; optional key notes; Australian spelling; no em dashes; causal narration; exact values in algebra, decimals only in grey readouts, with money and counts rounded as the question asks; attempt cards give nothing away; opens on f07's handoff frame; f04's "in year n against after n years" rule, f05's aₙ and log thresholds, f06's Sₙ and f07's S∞ recalled by use, not re-taught).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Geometric sequences and series; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci243a9af6`: "Apply the formulas for geometric sequences and series to model and solve growth and decay problems where a quantity is an exponential function of time"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from f07's last frame (a `PeriodTimeline` in time mode: "t = 0: 500 bacteria", "×3" to "after 1 hour: 1500", "?" tabs to "after 6 hours: ?", chips "Next: growth and decay models" and "?"); counts multiplications from time zero (A rᵗ, the (t + 1)th term); turns a fixed percentage into r = 1 ± p/100; states the quantity as an exponential function of time; solves a growth threshold (site bacteria) and a decay threshold where log r < 0 flips the inequality (site car); contrasts geometric and arithmetic decay; uses Sₙ and S∞ for a total over time (oil well). Stops at geometric growth and decay models. Not taught: loans, interest with repayments, annuities (finance strand; the handoff asks a question only); recurrence relations of the form Pₙ = rPₙ₋₁ − c (site SA 3; f09 and later); continuous models with eᵏᵗ (d19 and the exponential strand, not this point).

## Decisions

- **Learner question kept (outline).** "How do geometric models predict repeated growth or decay?" The answer, built in order: the amount after t periods is the start multiplied by r, t times, so it is A rᵗ, and in sequence terms that is term t + 1 (hook, 3); a fixed percentage change multiplies by the same number each period, r = 1 + p/100 or 1 − p/100 (2); with time in the power the quantity is an exponential function of time, so thresholds need logs, and for decay log r < 0 flips the inequality (4, 5); geometric decay takes a fixed fraction of what is left, so it approaches zero without reaching it, unlike f04's arithmetic decay (6); totals over time are Sₙ, and if |r| < 1 the total can never pass S∞ (7).
- **The hook surprise (site card 09 bacteria, numbers unchanged).** "A common answer uses the sixth term" (500 × 3⁵ = 121,500); counting triplings from time zero gives 500 × 3⁶ = 364,500, the site's answer ("After 6 hours means n = 7"). The wrong answer is said and corrected by the step count before any rule is stated.
- **Percentage as a ratio (site card 09 setting-up rules, numbers unchanged: 5% → 1.05, 20% → 0.8).** The cause in plain words: "growing by five per cent means keeping all one hundred per cent, and adding five more". The contrast with f04 (a fixed amount added) is one sentence. The site's MC Q5 distractor 0.15ⁿ (using the rate as the ratio) becomes a crossed ghost chip.
- **Timing (`ci243a9af6` "an exponential function of time"; site card 09 "after k periods means Tₖ₊₁").** The model is written A rᵗ with t the time since the start, which avoids the index shift; the sequence view (term t + 1) and the opposite convention (the first term is the value after one period, so after t periods it is term t) are each one sentence, ending "always ask what time the first term is". The oil well (7) then uses the other convention on purpose (year 1's output is the first term), so both conventions appear in use.
- **Growth threshold (site card 09 (b), numbers unchanged).** 500 × 3ᵗ > 1,000,000; 3ᵗ > 2000; t > log 2000 / log 3 ≈ 6.92 (grey); the colony passes one million just before 7 hours, and 7 is the first whole hour above it; checks 364,500 and 1,093,500. The site's "n ≥ 8 (after 7 hours)" is the same answer in term numbering.
- **Decay threshold (site Problem 3, numbers unchanged).** V = 30,000 × 0.85ⁿ; V₅ ≈ $13,311; 0.85ⁿ < ⅓; log 0.85 < 0, so dividing flips the inequality (the site's "critical step", made the spoken cause); n > 6.76 (grey), 7 years; checks ≈ $11,314 and ≈ $9,617 (spoken as "about eleven thousand three hundred" and "about nine thousand six hundred"; exact cents in grey).
- **Geometric against arithmetic decay (site MC Q5 option C, 30,000 − 4,500n, used as the contrast).** The straight-line model reaches $0 at 20/3 years (six and two thirds); the geometric model's yearly loss shrinks (4,500, 3,825, …) and the value approaches zero without reaching it. This links f04's "a decay model stops at zero" to the geometric case, where it never gets there.
- **Series in a model (original).** Oil well: 50,000 barrels in year 1, each year 10% less: S₁₀ = 50,000(1 − 0.9¹⁰)/0.1 ≈ 325,661 barrels (grey ≈ 325,660.78); S∞ = 500,000 barrels, the most it can ever produce (f07's limiting sum as a modelling bound). "Year n is term n" here, because the first term is year 1's output.
- **Attempts (original).** (A1) "A town has a population of 12,000. Its population grows by 4% each year. Find the population after 5 years, to the nearest whole number." 12,000 × 1.04⁵ ≈ 14,600 (14,599.83). Crossed: "14,038" (12,000 × 1.04⁴: counted the start as a multiplication). (A2) "A ball is dropped from a height of 2 m. After each bounce, it rises to 60% of the height it fell from. Find the total distance the ball travels before it comes to rest." 2 + 2 × (1.2/(1 − 0.6)) = 2 + 2 × 3 = 8 m. Crossed: "5 m" (2/(1 − 0.6): counted every height once). Neither card shows r, a power, a formula or a total. A2 combines a model, a limiting sum and the up-and-down count; it is the strand's closing challenge (open decision 2).
- **Mistake scene:** none separate. "After 6 hours is the 6th term" (hook; A1 crossed); "r is the rate" (2, the crossed 0.15 ghost); "the inequality keeps its direction" (5); "geometric decay reaches zero" (6); "the well runs forever, so it produces forever more" (7); "each bounce is counted once" (A2 crossed).
- **Memory aid (original, parallel to f04's).** "Start, ratio, count. Find the start and the ratio, then count the multiplications from time zero." See "Memory aid check".
- **Handoff (to f09, "How does a reducing-balance loan evolve period by period?"; site financial lesson 12 Problem 1, numbers unchanged).** Scene 13 sums up in one sentence, then shows a `PeriodTimeline` in time mode: "t = 0: $30,000 owed", an amber "×1.006" arc to "$30,180", then a red "−$600" arc to "?", with "month 2: ?" after it, the chip "Next: reducing-balance loans" and "?". No recurrence, no balance value after the repayment and no formula. Scene 14 returns to this frame silently; it is f09's assumed opening frame (f09 not yet designed; open decision 1).
- **Site sources used:** card 09 (setup rules, bacteria (a) and (b), "after k periods" rule, car setup), Problem 3 (a) to (c), MC Q5 (the ratio distractor and the straight-line option), card 11 (doublings to a million: not used, see open decision 3). Not used: SA 3 (fish with removals: a recurrence, not a pure GP; its home is the finance strand, which f09 opens).
- **Site errors:** none new in the parts used (bacteria 364,500 and 1,093,500 with log 2000/log 3 = 6.92; car V₅ = $13,311, V₆ ≈ $11,314, V₇ ≈ $9,617, n > 6.76; card 11 2⁴² × 0.1 mm ≈ 440,000 km and 2²⁰ = 1,048,576; finance lesson 12 Problem 1 first step 1.006 × 30,000 = 30,180 recalculated and correct). Lesson 4 items are in f05 and f06's Decisions.
- **Cause chain taught, in order:** (1) after t periods the start has been multiplied t times; the start is term 1, so that is term t + 1 (hook, 3); (2) a fixed percentage change keeps 100% and adds or removes p%, so it multiplies by 1 ± p/100 every period (2); (3) time in the power makes the quantity an exponential function of time (3); (4) a threshold needs logs; dividing by a negative log (r < 1) flips the inequality (4, 5); (5) taking a fixed fraction of what is left gives shrinking losses, so the value approaches zero without reaching it, while a fixed loss reaches zero (6); (6) a total over time is a partial sum, and with |r| < 1 it can never pass S∞ (7).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f08`; playlist order 45; main learner question "How do geometric models predict repeated growth or decay?"; syllabus action `ci243a9af6`.
  - Entry knowledge: f04 (AP models; "in year n" against "after n years"; a decay model stops at zero); f05 (aₙ = arⁿ⁻¹; thresholds with logs); f06 (Sₙ); f07 (S∞ and |r| < 1); Year 11 percentages, exponential functions and logarithms (log of a number between 0 and 1 is negative).
  - Start boundary: "Open on f07's time strip: 500 bacteria at t = 0, ×3 each hour, 'after 6 hours: ?'; count the multiplications from time zero."
  - Stop boundary: "Geometric growth and decay: r = 1 ± p/100; A rᵗ from time zero and the term-number shift; growth and decay thresholds with logs (direction flip for log r < 0); geometric against arithmetic decay; a total over time with Sₙ and the S∞ bound. No loans, repayments, recurrences or eᵏᵗ models."
  - Next handoff: "math-a12-f09: $30,000 loan, ×1.006 to $30,180, then −$600 to '?'; ask what happens month by month."
  - Prerequisite videos: math-a12-f04, math-a12-f05, math-a12-f06, math-a12-f07.
- **Learner-visible vocabulary (plain meaning at first use):** model (recall from f04: a rule that describes a real quantity, 1); growth factor (the number each period multiplies by, 2); depreciation (named only in a grey tag "loses value": the car losing value, 5); exponential function of time (time is in the power, 3).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** f04's `PeriodTimeline` in time mode with multiplicative arcs (`changeArcs` labels such as "×3", "×0.85", checked as ratios; extension below) and a subtract arc for the handoff; f02's `TermPlot` with f05's `guideCurve` (scenes 5, 6: geometric and straight-line decay on the same axes); f05's `TermLadder` and f02's `StepCounter` (hook, 3: counting multiplications from time zero, with the term numbers under the strip); f01's `PartialSumStack` with f03's `referenceLine` (7: the oil totals against the S∞ line); f07's `ConvergenceStrip` (A2 feedback: bounce heights); `AlignedAlgebra`; number lines as plain SVG (4, 5); `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the timeline, plot or stack on the left two-thirds; givens chip (with units) at the top of the right column, algebra below it, current line bright and earlier lines dim.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Bacteria: N(t) = 500 × 3ᵗ (t in hours); N(5) = 121,500 (= 500 × 3⁵, the "sixth term" answer); N(6) = 364,500; as a sequence from t = 0, aₙ = 500 × 3ⁿ⁻¹ and N(6) = a₇. Threshold: 3ᵗ > 2000, t > ln 2000/ln 3 = 6.9186…; the continuous model passes 10⁶ at t ≈ 6.92 h; N(7) = 1,093,500.
  (b) Percentages: r = 1 + p/100 for growth, 1 − p/100 for decay; 5% → 1.05; 20% → 0.8; 15% → 0.85; 4% → 1.04; 10% less → 0.9.
  (c) Car: V(n) = 30,000 × 0.85ⁿ; V(5) = 13,311.16; V(6) = 11,314.49; V(7) = 9,617.31; 0.85ⁿ < ⅓; n > log(⅓)/log 0.85 = 6.7599…; log₁₀ 0.85 = −0.0706, log₁₀ ⅓ = −0.4771. Straight-line contrast: 30,000 − 4,500n = 0 at n = 20/3; geometric yearly losses 4,500, 3,825, 3,251.25, … (each 0.85 of the last).
  (d) Oil well: aₙ = 50,000 × 0.9ⁿ⁻¹ (year n's output); S₁₀ = 500,000(1 − 0.9¹⁰) = 325,660.78 (0.9¹⁰ = 0.3486784401); S∞ = 50,000/0.1 = 500,000. "Never more than 500,000" is true because every partial sum is less than S∞ for positive terms.
  (e) A1: 12,000 × 1.04⁵ = 14,599.83 → 14,600; 12,000 × 1.04⁴ = 14,038.30. A2: drop 2 m; bounce heights 1.2, 0.72, 0.432, … (r = 0.6); sum of heights 1.2/0.4 = 3; total distance 2 + 2 × 3 = 8 m; 2/(1 − 0.6) = 5 counts each height once. The model assumes infinitely many bounces in finite time with no loss beyond the 60% rule; standard for the exam style, kept in author notes (its omission does not teach a wrong idea about the series).
  (f) Handoff: 7.2% p.a. compounded monthly = 0.6% per month = ×1.006; 30,000 × 1.006 = 30,180; 30,180 − 600 = 29,580 (site A₁; not shown in f08).
  (g) Units and formatting: dollars with en-AU commas in screen text ($30,000; $13,311); "bacteria", "barrels", "m". Spoken money in full.
  (h) Pronunciations: "five hundred times three to the t"; "one point zero five"; "zero point eight five to the n"; "six point nine two"; "six point seven six"; "three hundred and twenty-five thousand, six hundred and sixty-one"; "one point zero zero six".
  (i) Plot windows: scene 5 and 6 n (years) 0 to 12, value $0 to $32,000 (ticks every $5,000); geometric points at whole n on a dashed guide curve 30,000 × 0.85ˣ; straight-line points 30,000 − 4,500n for n = 0 to 6 with the line reaching 0 at 20/3 (dashed marker); red dashed $10,000 line in scene 5. Scene 7 stack: S₁ to S₁₀ (50,000, 95,000, 135,500, 171,950, …) on a scale to 520,000 with a dashed line at 500,000.

Main question: *When a quantity grows or shrinks by the same percentage every period, how do we model it, count the periods correctly, and find when it passes a target or what it adds up to?*
Entry knowledge (f04 to f07; Year 11 percentages, exponentials and logarithms): aₙ = arⁿ⁻¹; Sₙ; S∞; "after n years".
Stops after: geometric growth and decay models with thresholds, a decay contrast, and totals with Sₙ and S∞. No loans.
Handoff: math-a12-f09: a $30,000 loan, ×1.006, then −$600 (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f04 to f07): values blue bars and points; multiplications amber arcs ("×r"); subtractions red arcs (handoff only); running totals teal; reference lines red dashed; the straight-line contrast grey; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (after six hours)
> Last video ended with this question. Five hundred bacteria, tripling every hour. How many after six hours? A common answer uses the sixth term, five hundred times three to the five. But count the triplings. After one hour, there's been one tripling. After six hours, there have been **six**. So it's five hundred times three to the six, which is three hundred and sixty-four thousand, five **hundred**. The start, at time zero, is the first term, so six hours later is the seventh term. How do we set up models like this without getting the count wrong?

Visual: opens on f07's last frame exactly (f07 scene 15: the `PeriodTimeline` in time mode, "t = 0: 500 bacteria", "×3" to "after 1 hour: 1500", "?" tabs to "after 6 hours: ?", chips "Next: growth and decay models" and "?"). Heading writes on: "How do geometric models predict repeated growth or decay?" as the chips fade. On "the sixth term" a grey guess chip "a₆ = 500 × 3⁵ = 121 500?" beside the strip. On "count the triplings" a `StepCounter` numbers the "×3" arcs from t = 0: "1" on the first arc; on "six" (bold) all six arcs numbered "1" to "6", bracket "6 triplings". Row "500 × 3⁶"; on "hundred" "= 364 500 bacteria" boxed, and the guess chip is crossed (caption "only 5 triplings"). On the next sentence grey term labels appear under the time marks: "a₁" under t = 0, …, "a₇" under "after 6 hours".

### 2. a fixed percentage is a fixed ratio
> First, why is this geometric? Each hour, the number is multiplied by the same factor, three. Many real quantities change by the same percentage each period, and that's the same thing. Growing by five per cent means keeping all one hundred per cent, and adding five more. So each value is multiplied by one point zero **five**. Falling by twenty per cent means keeping eighty per cent, so r is zero point **eight**. Either way, every period multiplies by the same number, so the values make a geometric sequence. Arithmetic models add the same amount. Geometric models multiply by the same **factor**.

Visual: camera continue (the strip shrinks to the top). On "five per cent" a bar "100%" with a small "+5%" block stacked on it, label "105% = × 1.05"; on "five" (bold) the chip "growth by p%: r = 1 + p/100". On "twenty per cent" a bar "100%" with the top "20%" fading out, label "80% = × 0.8"; on "eight" the chip "decay by p%: r = 1 − p/100", and a ghost chip "r = 0.2?" crossed (caption "that's the part lost, not the part kept"). On the last two sentences two mini ladders: "+d" arcs (grey, "arithmetic: add") and "×r" arcs (amber, "geometric: multiply"); on "factor" the "×r" ladder glows.

### 3. counting from time zero
> Now the timing. Call the starting amount A, at time zero. After one period, it's A times r. After t periods, it's been multiplied t times, so the amount is A, times r to the **t**. Time is in the power, so the quantity is an exponential function of time. In sequence language, the start is the first term, so after t periods we're at term t plus **one**. Some questions call the value after the first period the first term instead. Then after t periods, you're at term t. So always ask what time the first term **is**.

Visual: clear change. A `PeriodTimeline` in time mode with symbolic labels: "t = 0: A", "after 1 period: Ar", "after 2: Ar²", "…", "after t: Arᵗ"; `StepCounter` bracket "t multiplications". On "t" (bold) the boxed model "amount after t periods = A rᵗ" with the tag "time in the power: exponential in time". On "term t plus one" the grey term labels "a₁, a₂, a₃, …, aₜ₊₁" slide under the marks, ringing "a₁ = A at t = 0". On "Some questions" a second label row slides in beneath: "a₁ = Ar (after 1 period)", …, "aₜ (after t)", in grey. On "is" (bold) a chip "First term: at what time?" glows.

### 4. worked example: the first hour over a million
> When does the colony first pass one million? Set five hundred times three to the t above one **million**. Divide by five hundred, so three to the t is more than two thousand. Take logs, and divide by log three, which is positive, so the inequality stays the same way round. Then t is more than about six point nine **two**. So the colony passes one million just before seven hours, and seven is the first whole hour with more than a million. Check: after six hours there are three hundred and sixty-four thousand, five hundred, and after seven, one million, ninety-three thousand, five **hundred**.

Visual: board clears (new task, same context). Task strip: "A colony starts with 500 bacteria and triples every hour. When does it first exceed 1 000 000?" (site card 09 (b)). Givens chip: "A = 500, r = 3, t in hours". Rows: "500 × 3ᵗ > 1 000 000" (on "million"); "3ᵗ > 2000"; "t log 3 > log 2000" with a grey tag "log 3 > 0: sign stays"; on "two" "t > log 2000 / log 3" with grey "≈ 6.92". A time number line 6, 6.92 (dashed marker), 7; "first whole hour: 7" boxed. On "Check" two bars against a red dashed 1 000 000 line: "after 6 h: 364 500" (below) and, on "hundred", "after 7 h: 1 093 500" (above).

### 5. worked example: a car that loses value
> Now decay. A car costs thirty thousand dollars new, and loses fifteen per cent of its value each year. So r is zero point eight five, and after n years it's worth thirty thousand, times zero point eight five to the n. After five years, that's about thirteen thousand three hundred and eleven **dollars**. When is it first worth less than ten thousand? Divide by thirty thousand, so zero point eight five to the n is less than a third. Take logs. But log of zero point eight five is negative, because zero point eight five is less than one, and dividing by a negative number flips the **inequality**. So n is more than about six point seven six, and the answer is seven years. Check: after six years it's worth about eleven thousand three hundred dollars, and after seven, about nine thousand six **hundred**.

Visual: board clears (new case). Task strip: "A car costs $30,000 new and loses 15% of its value each year. (a) Find its value after 5 years. (b) After how many whole years is it first worth less than $10,000?" (site Problem 3 (b), (c)). Givens chip: "A = $30,000, r = 1 − 0.15 = 0.85, n in years". A `TermPlot` (author note i) with blue points at whole years on a dashed guide curve. Rows: "V = 30 000 × 0.85ⁿ"; "V(5) = 30 000 × 0.85⁵"; on "dollars" "≈ $13,311" boxed (grey "13 311.16"), the n = 5 point ringed. Part (b) rows: "30 000 × 0.85ⁿ < 10 000"; "0.85ⁿ < 1/3"; "n log 0.85 < log(1/3)"; on "negative" a red tag "log 0.85 < 0"; on "inequality" the "<" turns into ">" with a flip animation: "n > log(1/3) / log 0.85" with grey "≈ 6.76"; "7 years" boxed. On "Check" the red dashed $10,000 line draws across the plot; the n = 6 point "≈ $11,314" above and, on "hundred", the n = 7 point "≈ $9,617" below.

### 6. geometric against arithmetic decay
> Compare that with an arithmetic model. If the car lost a fixed four thousand five hundred dollars every year, which is fifteen per cent of its first price, it would be worth nothing after six and two thirds years. The geometric model takes fifteen per cent of what's left, so each year's loss is smaller than the one **before**. Its value gets closer and closer to zero, but never reaches **it**.

Visual: camera continue (same axes; the scene 5 rows dim). Grey points of 30 000 − 4500n with a grey dashed straight line reaching $0 at n = 20/3 (marker "6⅔ years: $0"), tag "fixed loss: arithmetic". On "smaller than the one before" amber drop labels on the blue points: "−$4,500", "−$3,825", "−$3,251", … shrinking; tag "15% of what's left". On "it" (bold) the blue guide curve extends to n = 12 hugging the axis without touching, tag "approaches $0, never reaches it".

### 7. a total over time: the oil well
> Sums matter when a model adds up over time. An oil well produces fifty thousand barrels in its first year, and each year after that, ten per cent less than the year before. Here the first term is the first year's output, so year n is term n. So a is fifty thousand, and r is zero point nine. Over the first ten years, the well produces S ten. That's fifty thousand, times one minus zero point nine to the ten, over zero point **one**, which is about three hundred and twenty-five thousand, six hundred and sixty-one barrels. And since r is less than one, the totals settle. S infinity is fifty thousand over zero point one, which is five hundred thousand. However long it runs, the well can never produce more than five hundred thousand **barrels**.

Visual: board clears (new case). Task strip: "An oil well produces 50,000 barrels in its first year. Each year after that, it produces 10% less than the year before. (a) Find the total produced in the first 10 years. (b) Show that the well can never produce more than 500,000 barrels." (original). Givens chip: "a = 50 000 barrels (year 1), r = 0.9". A `PeriodTimeline` of year tabs 1 to 5 and "…", bars shrinking with "×0.9" arcs and the tag "year 1 = a₁". Rows: "S₁₀ = 50 000(1 − 0.9¹⁰)/(1 − 0.9)"; on "one" "= 500 000(1 − 0.9¹⁰)" with grey "≈ 325 660.78"; "≈ 325 661 barrels" boxed. On "the totals settle" a `PartialSumStack` of S₁ to S₁₀ (author note i) builds beside the rows towards a dashed red line at 500 000. Row "S∞ = 50 000/(1 − 0.9) = 500 000" (with "|r| = 0.9 < 1"); on "barrels" the dashed line labels "500 000: the most it can ever produce" and part (b) gets a tick.

### 8. memory aid
> For any of these models, use three steps. Find the start. Find the ratio, from the percentage. Then count the multiplications from time **zero**. Start, ratio, count.

Visual: the handwritten line writes large: "Start, ratio, count." Under it: "Find the start and the ratio, then count the multiplications from time zero." Small icons: a "t = 0" marker, a "×r" arc and a step counter "1, 2, 3". On "zero" the icons pulse in turn. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A town has a population of twelve thousand. Its population grows by four per cent each year. Find the population after five years, to the nearest whole number. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A town has a population of 12,000. Its population grows by 4% each year. Find the population after 5 years, to the nearest whole number." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no timeline, no ratio, no formula).

### 10. feedback 1 (brief)
> Growing by four per cent means multiplying by one point zero four each **year**. The start is twelve thousand, at time zero, so after five years there have been five **multiplications**. Twelve thousand times one point zero four to the five is about fourteen thousand six **hundred**. Fourteen thousand and thirty-eight is wrong. It uses the power four, as if the start were the first **multiplication**.

Visual: card shrinks to the top; "12,000", "4% each year", "after 5 years" and "nearest whole number" underlined as used. Givens chip "A = 12 000, r = 1.04" (on "year"). A short time strip with five "×1.04" arcs counted "1" to "5" (on "multiplications"). Row "12 000 × 1.04⁵ = 14 599.83…"; on "hundred" "≈ 14 600" boxed. On "multiplication" (last bold) a chip "14 038" fades in and is crossed (caption "12 000 × 1.04⁴: one multiplication short"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A ball is dropped from a height of two metres. After each bounce, it rises to sixty per cent of the height it fell from. Find the total distance the ball travels before it comes to rest. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A ball is dropped from a height of 2 m. After each bounce, it rises to 60% of the height it fell from. Find the total distance the ball travels before it comes to rest." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> Follow the ball. It falls two metres. After that, each bounce goes up and comes back down the same height. The bounce heights are one point two, then zero point seven two, and so on, with r equal to zero point **six**. Their limiting sum is one point two over zero point four, which is **three**. Each of those heights is travelled twice, so the total is two, plus two times three, which is eight **metres**. Five metres is wrong. It counts each height only once, but every bounce goes up and comes back **down**.

Visual: card shrinks to the top; "dropped from a height of 2 m", "60%" and "total distance" underlined as used. A coded height strip (vertical `ConvergenceStrip` rotated, abstract arcs only, no ball drawn): a down arrow "2 m", then up-and-down arc pairs "1.2 m", "0.72 m", "0.432 m", … shrinking towards the floor line. Givens chip "first drop 2 m; heights 1.2, 0.72, …: a = 1.2, r = 0.6" (on "six"). Row "heights: S∞ = 1.2/(1 − 0.6) = 3" (on "three"); row "total = 2 + 2 × 3"; on "metres" "= 8 m" boxed. On "down" (last bold) a chip "5 m" fades in and is crossed (caption "each bounce is up and down"). Hold about 1 second.

### 13. handoff
> So a geometric model multiplies by the same ratio every period, from a start at time zero, and its sums give totals over time. But some quantities are multiplied, and then have something taken away. A car loan of thirty thousand dollars grows by zero point six per cent interest each month, so it's multiplied by one point zero zero six. Then a six hundred dollar repayment comes off. What happens to the balance, month by **month**?

Visual: the memory-aid icons show small at the top, then fade on "But some quantities". Board clears to f04's `PeriodTimeline` in time mode: "t = 0: $30,000 owed"; on "one point zero zero six" an amber "×1.006" arc to a bar "$30,180" (grey tag "interest: 0.6% a month"); on "repayment" a red "−$600" arc from that bar to a "?" bar; then a faint tab "month 2: ?". On "month" (bold) a chip "Next: reducing-balance loans" and a "?" chip. No recurrence, no balance after the repayment, no formula. Hold about 2 seconds. This is f09's assumed opening frame (open decision 1); scene 14 returns to it silently after the notes.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A fixed percentage change each period is a geometric model. Growth by p%: r = 1 + p/100. Decay by p%: r = 1 − p/100.
2. Start A at time 0: after t periods the amount is A rᵗ, an exponential function of time. In sequence terms that is term t + 1. Always check what time the first term is.
3. Thresholds: solve with logs. If 0 < r < 1, log r < 0, so dividing by it flips the inequality. Take the first whole period past the boundary and check both sides.
4. Totals over time use Sₙ. If |r| < 1, S∞ is a bound the total never passes.
5. Geometric decay takes a fixed fraction of what is left, so it approaches 0 but never reaches it. (Arithmetic decay reaches 0.)

Memory aid (large, on the notes screen): *Start, ratio, count: find the start and the ratio, then count the multiplications from time zero.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 13's frame exactly (the time strip "t = 0: $30,000 owed", "×1.006" to "$30,180", "−$600" to "?", "month 2: ?", the chips "Next: reducing-balance loans" and "?"). This is the final frame and f09's assumed opening frame.

## Teaching checks

- **Does it explain causes?** Why after 6 hours is 3⁶: six triplings from time zero (hook). Why a percentage is a ratio: keep 100% and add or lose p% (2). Why the quantity is exponential in time: time is in the power (3). Why the term number is t + 1: the start is term 1 (3). Why the car's inequality flips: log 0.85 < 0 (5). Why geometric decay never reaches zero: each loss is a fraction of what is left (6). Why the well has a ceiling: its totals settle at S∞ (7). Why the ball goes 8 m: each bounce height is travelled up and down (A2).
- **Misconceptions addressed:** "after 6 hours is the 6th term" (hook; A1 crossed); "r is the rate" (2); "the first term is always at time zero" (3); "the inequality never flips" (5); "decay always reaches zero" (6); "a total that goes on forever is unlimited" (7); "each bounce counted once" (A2 crossed).
- **One idea at a time:** one context per scene from 4 on (4 and 1 share the colony; 6 continues 5's axes with one new comparison); rows replace each other with only the needed results kept.
- **Video makes it easier:** the student counts the triplings on the strip and sees the term labels sit one ahead (hook, 3), sees the kept 80% and the added 5% as bars (2), watches the "<" flip as the negative log is divided (5), sees the straight line hit zero while the curve hugs the axis (6), and sees the oil totals stop short of the 500,000 line (7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given (with units) visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 26 s and 34 s (scenes 10 and 12; feedback 2 is above the brief range because it sets up the model before the arithmetic; open decision 2).
- **Avoided double teaching:** f04's timing rule is recalled by the step count, not restated as a rule first; f05's log method and f06's Sₙ and f07's S∞ are used with one clause each.
- **Syllabus coverage:** `ci243a9af6` (hook to 7; A1 growth, A2 decay with a series; key notes 1 to 5).
- **Out of scope by design:** loans and repayments, recurrence relations, eᵏᵗ models, annuities.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A town has a population of 12,000. Its population grows by 4% each year. Find the population after 5 years, to the nearest whole number."
Model answer: r = 1.04; after 5 years, 12,000 × 1.04⁵ = 14,599.83…, so about 14,600 people. Classic mistake (crossed): "14,038" (12,000 × 1.04⁴).

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "A ball is dropped from a height of 2 m. After each bounce, it rises to 60% of the height it fell from. Find the total distance the ball travels before it comes to rest."
Model answer: first drop 2 m; bounce heights 1.2, 0.72, … m form a GP with a = 1.2, r = 0.6 (|r| < 1), whose limiting sum is 1.2/(1 − 0.6) = 3 m; each height is travelled up and down, so the total is 2 + 2 × 3 = 8 m. Classic mistake (crossed): "5 m".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bacteria (site) | 500 × 3⁵ = 121,500 (crossed guess); 500 × 3⁶ = 364,500; a₇ | 1 |
| Percentages (site) | 5% → 1.05; 20% → 0.8; crossed r = 0.2 | 2 |
| Threshold (site) | 3ᵗ > 2000; t > 6.92 (grey); 7 hours; 364,500 and 1,093,500 | 4 |
| Car (site) | r = 0.85; V(5) ≈ $13,311; 0.85ⁿ < ⅓; n > 6.76 (grey); 7 years; ≈ $11,314, ≈ $9,617 | 5 |
| Straight-line contrast (site MC Q5 C) | 30,000 − 4,500n; $0 at 20/3 years; losses $4,500, $3,825, $3,251 | 6 |
| Oil well | a = 50,000, r = 0.9; S₁₀ ≈ 325,661 barrels (grey 325,660.78); S∞ = 500,000 | 7 |
| A1 | 12,000 × 1.04⁵ ≈ 14,600; crossed 14,038 | 9, 10 |
| A2 | 2 + 2 × 1.2/0.4 = 8 m; crossed 5 m | 11, 12 |
| Handoff (finance lesson 12) | $30,000; ×1.006; $30,180; −$600; ? | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 500 × 3⁵ = 121 500; 500 × 3⁶ = 364 500; 500 × 3⁷ = 1 093 500; log 2000/log 3 = 6.9186…
- 30 000 × 0.85⁵ = 13 311.159…; × 0.85⁶ = 11 314.485…; × 0.85⁷ = 9 617.312…; log(1/3)/log 0.85 = 6.7599…; log₁₀ 0.85 = −0.07058.
- 30 000/4500 = 20/3; 4500 × 0.85 = 3825; 3825 × 0.85 = 3251.25.
- 0.9¹⁰ = 0.3486784401; 500 000 × (1 − 0.9¹⁰) = 325 660.78; 50 000/0.1 = 500 000; S₂ = 95 000, S₃ = 135 500, S₄ = 171 950.
- A1: 12 000 × 1.04⁵ = 14 599.834…; 12 000 × 1.04⁴ = 14 038.302…
- A2: 1.2/(1 − 0.6) = 3; 2 + 6 = 8; 2/(1 − 0.6) = 5.
- Handoff: 30 000 × 1.006 = 30 180; 0.072/12 = 0.006.

## Memory aid check

- **"Start, ratio, count: find the start and the ratio, then count the multiplications from time zero."** Original, parallel to f04's "Find a, d and n, and say what n counts". Meaning, as said in scene 8: identify the amount at time zero, convert the percentage to r = 1 ± p/100, and count the periods that have passed, which is the power. Assumptions checked: the quantity changes by a fixed percentage per period (a geometric model); "the start" is the amount at time zero, so the count equals the time t; when a question's first term is the value after one period (or a first year's output, as in scene 7), the count from the first term is n − 1, which scene 3 and key note 2 name ("always check what time the first term is"). It helps a new case: $8,000 invested at 6% a year for 10 years gives 8,000 × 1.06¹⁰. Introduced after the cause (hook to 3) and the uses (4 to 7).
- **Considered, not used:** "after k periods is term k + 1" alone (the site's rule; true only when term 1 is at time zero, so on its own it would mislead in scene 7); "rule of 72" (outside the syllabus point).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,124 characters**, 14 scenes. Characters per scene (1 to 14): 545, 588, 506, 586, 796, 388, 741, 162, 192, 388, 218, 497, 429, 75 (the total includes the 13 joining spaces). At 13.3 characters per second the speech is about 460 s; add about 15 s of settling time for the step count in scene 1, the bars in scene 2, the flip in scene 5, the curve extension in scene 6 and the stack in scene 7, 20 s for two countdowns, 5 s of short holds (scenes 8, 10, 12, 13) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 560 s**, inside the 5,500 to 6,800 character band and under the 570 s cap with about 10 s to spare, so the reserve trims are listed in order of use if the voiced take runs over 570 s: scene 2's last two sentences (keep the mini ladders silent); scene 3's "Then after t periods, you're at term t." (keep the second label row); scene 7's "And since r is less than one, the totals settle." (keep the stack).

## Scene list and build ids

Lesson key `m-a12f08` (route math-a12-f08). Suggested explainer folder `src/explainer/lessons/math-a12-f08` and build folder `docs/production/claude-pm/lessons/m-a12f08` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, percentage-ratio, time-zero-count, growth-threshold, car-decay, geometric-vs-arithmetic, oil-total, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f07's last frame continues into scene 1 (camera continue, same strip); 1 to 2 camera continue (strip shrinks); 2 to 3 clear change; 3 to 4 clear change (new task); 4 to 5 clear change (new case); 5 to 6 camera continue (same axes); 6 to 7 clear change; 7 to 8 camera pull back to the aid; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f08-learning-review.md`, `science_check` = `checks/m-a12f08-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Sequence parts from f01 (`TermLadder`, `PartialSumStack` with f03's `referenceLine`), f02 (`TermPlot` with f05's `guideCurve`, `StepCounter`), f04 (`PeriodTimeline`), f07 (`ConvergenceStrip`, vertical orientation for A2 feedback). The number lines in scenes 4 and 5 and the percentage bars in scene 2 are plain SVG.

`PeriodTimeline` extensions (for the sequence-parts kit brief; also the first finance needs):
1. **Multiplicative arcs.** `changeArcs` labels such as "×3", "×0.85", "×1.006": an optional `kind: 'add' | 'multiply'` per arc; for multiply the part checks the label against next ÷ this (within 1e-9, or to the stated decimal places) and throws if it differs.
2. **Symbolic and term labels.** `timeMode.boundaryLabels` accepts React nodes ("Ar²"), and a `termRows` option draws one or two grey rows of term labels under the boundaries ("a₁ … aₜ₊₁"; a second row offset by one), for scene 3.
3. **Two-step period (handoff; finance strand).** Within one period, a multiply arc followed by a subtract arc to an intermediate bar, with the second bar allowed to show "?". Checks: 30,000 × 1.006 = 30,180 and, when shown, 30,180 − 600 = 29,580.
4. **`ConvergenceStrip` vertical orientation** (A2 feedback; f07 part): `orientation: 'vertical'` with up-and-down arc pairs per value and a floor line; heights 1.2, 0.72, 0.432, … checked against a·rᵏ.

## Codex asset brief

No painted plate is needed (programme decision 5; as f04 open decision 2, contexts are words, timelines and graphs). No new part: the extensions under "Assets" go to the sequence-parts kit brief with f01 to f07's parts, each with a pilot from this design's numbers (bacteria ×3 from t = 0 to 7 hours; car ×0.85 for 7 years; loan ×1.006 then −600), numerical checks, desktop and phone-landscape stills and a silent motion sample.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table, including rounding (money to the dollar where spoken as "about", population to the nearest whole number).
2. Confirm the syllabus quote matches the official 2024 text, and that no site module label or code appears in learner copy or metadata.
3. Confirm the scope of learner-visible general claims: "r = 1 ± p/100" (2, key note 1); "after t periods: A rᵗ; term t + 1 when the first term is at time zero" (3, key note 2); "if 0 < r < 1, log r < 0, so dividing flips the inequality" (5, key note 3); "geometric decay approaches 0 but never reaches it" (6, key note 5); "S∞ is a bound the total never passes" (7, key note 4: true for positive terms).
4. Confirm the threshold reasoning in scenes 4 and 5 (t > 6.92 so 7 hours, with "passes just before seven hours" true of the model; n > 6.76 so 7 years), and the term-number convention in scene 7 (year 1 is a₁).
5. Confirm both attempts carry every demand and unit, are original in wording, and that neither card or its visuals shows r, a power, a formula or a total. Confirm A2's 8 m and the crossed 5 m.
6. Confirm the opening matches f07's scene 15 exactly and the handoff (scene 13) shows no recurrence, no balance after the repayment and no formula; scene 14 returns to it. Confirm 7.2% p.a. compounded monthly is 0.6% per month (finance lesson 12 Problem 1).
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Geometric Growth and Decay Models: Percentages, Time Zero and Limiting Totals | Year 12 Maths Advanced

(Title length: 103 characters; shorter alternative "Geometric Growth and Decay Models | Year 12 Maths Advanced", 58 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson04.sa.html

500 bacteria triple every hour. After 6 hours, is it 500 × 3⁵ or 500 × 3⁶? Count the triplings from time zero and it's 3⁶ = 364,500. See why a fixed percentage change multiplies by the same ratio (5% growth is × 1.05, 20% decay is × 0.8), why the amount after t periods is A rᵗ, an exponential function of time, how to find the first hour over a million, and why the inequality flips when a car's value falls below $10,000 (log 0.85 is negative). Compare geometric decay with straight-line decay, and use Sₙ and the limiting sum to find what an oil well produces in ten years and the most it can ever produce. A memory aid: start, ratio, count. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the formulas for geometric sequences and series to model and solve growth and decay problems where a quantity is an exponential function of time"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Geometric sequences, geometric sums and limiting sums (previous videos); arithmetic models. Next: Reducing-balance loans.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. f09's opening frame (root).** f09 has no design yet. Scene 13 uses the site's financial lesson 12 Problem 1 ($30,000 at 7.2% p.a. compounded monthly, $600 a month), showing ×1.006 to $30,180 and −$600 to "?". If f09 opens on different numbers or a different picture, change scene 13's fourth and fifth sentences and its strip; no loan teaching is done here either way.
- **2. Attempt 2 and feedback length (learning review).** The bouncing ball combines a model, a limiting sum and the up-and-down count; feedback 2 runs about 34 s, above the 15 to 30 s range, because the model must be set up before the arithmetic. Options: keep (strand finale); cut "Follow the ball. It falls two metres." (about −40 characters, keep the down arrow silent); or replace A2 with a shorter decay threshold ("A medicine's amount falls by 20% each hour from 400 mg. After how many whole hours is it first below 100 mg?" 400 × 0.8ᵗ < 100, t > 6.21, so 7 hours; crossed "6 hours" (inequality not flipped)).
- **3. Site card 11's "doublings to a million" (root).** The site's recall prompt (2²⁰ ≈ 10⁶, so about 20 doublings) is a good surprise but would add a third growth context; not used. It could open the practice video.
- **4. Title length (root).** 103 characters; the 58-character alternative is recommended unless root wants the longer form.
- **5. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f04 to f07 and Year 11 percentages and logs; check that the hook's wrong answer is corrected by counting before any rule; that the percentage bars make r = 1 ± p/100 visible; that "always ask what time the first term is" is clear with both label rows; that the flip in scene 5 is caused by the negative log, said before it happens; that the straight line and the curve are read as the contrast; that the oil well's ceiling is a modelling bound; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The step count, the percentage bars, the inequality flip, the two decay graphs and the stack under its ceiling carry the explanation; judge them at playback speed in the voiced preview. Every bar, point and readout must be computed from the same functions as the displayed expressions.
- The opening frame is f07's scene 15 (same designer, 2 Nov). Scene 13 must match f09's opening when f09 is designed.
