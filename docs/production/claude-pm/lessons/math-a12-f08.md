# Maths A12 F08: How do geometric models predict repeated growth or decay? A fixed percentage as a ratio, counting from time zero, thresholds with logs, and totals that settle (design)

Status: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026). Not voiced (no `math-a12-f08/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 6,052 characters, 14 scene headings, about 551 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: eighth and last video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 45), after f07 (limiting sums) and before f09 (reducing-balance loans, the first financial mathematics video). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5; the colony, car, oil well, town and ball are named in words and shown as coded timelines, graphs and strips, with no objects or people drawn, as f04 open decision 2). No brief 151 pack and no route-inputs-3 entry exist (checked 2 Nov); pack work done here. Site lesson read (2 Nov, read-only): `sequences-and-series/lesson04.sa.html`, SHA256 `d1fd3515cc8305e434a4d55e703dffc7bff674fc014d3047911cf0b570497afc` (card 09 with the bacteria and car examples and the "after k periods" rule; Problem 3; MC Q5; card 01 recall prompts; card 11). Handoff source read: `financial-mathematics/lesson12.sa.html` Problem 1 ($30,000 car loan at 7.2% p.a. monthly, $600 repayments; read-only, numbers only). Every number recalculated with SymPy. Course outline entry: `math-a12-f08` (one content point, site source lesson 4).

Owner rules applied: as f05 to f07 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; optional key notes; Australian spelling; no em dashes; causal narration; exact values in algebra, decimals only in grey readouts, with money and counts rounded as the question asks; attempt cards give nothing away; opens on f07's handoff frame; f04's "in year n against after n years" rule, f05's aₙ and log thresholds, f06's Sₙ and f07's S∞ recalled by use, not re-taught).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Geometric sequences and series; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci243a9af6`: "Apply the formulas for geometric sequences and series to model and solve growth and decay problems where a quantity is an exponential function of time"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary (Revision 1 wording; Revision 2 anchor contexts and joins in Decisions override it):** starts from f07's last frame (a `PeriodTimeline` in time mode: "t = 0: 500 bacteria", "×3" to "after 1 hour: 1500", "?" tabs to "after 6 hours: ?", chips "Next: growth and decay models" and "?"); counts multiplications from time zero (A rᵗ, the (t + 1)th term); turns a fixed percentage into r = 1 ± p/100; states the quantity as an exponential function of time; solves a growth threshold (site bacteria) and a decay threshold where log r < 0 flips the inequality (site car); contrasts geometric and arithmetic decay; uses Sₙ and S∞ for a total over time (oil well). Stops at geometric growth and decay models. Not taught: loans, interest with repayments, annuities (finance strand; the handoff asks a question only); recurrence relations of the form Pₙ = rPₙ₋₁ − c (site SA 3; f09 and later); continuous models with eᵏᵗ (d19 and the exponential strand, not this point).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a growing country town (painted plates, live).** A town of 20 000 people growing 5% a year is the natural geometric model: the same percentage each year, a clear start at time zero, and the counting trap of the hook (after 6 years is 1.05⁶, the 7th term, not 1.05⁵). The town simulation adds houses as the population grows and counts the multiplications on the timeline. It replaces the site's bacteria hook (d01 is bacteria, and the owner rule keeps science for when it is clearly the most natural fit). Population of people is in the owner's list of everyday contexts; distinct from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts.
- **Money in f08 only (owner note).** f08 is the one lesson in f01 to f08 that uses money, because the site's example is money (lesson 4 Problem 3, a car's value) and f09 opens on a loan. The site's car is re-contexted as a camper trailer (same numbers), because d19 already uses a car depreciating 15% a year. Attempt 1 (a concert ticket's price, 4% a year) is the second money context.
- **Context changes, numbers unchanged (root to confirm).** (1) Hook: the site's 500 bacteria tripling each hour (500 × 3⁶) becomes the town (20 000 × 1.05⁶ ≈ 26 802; guess 20 000 × 1.05⁵ ≈ 25 526); new numbers, the same counting idea. (2) Scene 4 keeps the site's threshold numbers (500 × 3ᵗ > 1 000 000, t = 7) as a chain message reaching people. (3) Scene 5 and 6: the car becomes a camper trailer (30 000, 15%, 7 years; the straight-line contrast unchanged). (4) Attempt 1: a town of 12 000 growing 4% (now the anchor's context) becomes a $120 concert ticket rising 4% a year ($146.00; crossed $140.38). (5) Attempt 2: the dropped ball (now f07's anchor) becomes a mine whose output falls 5% a year (S∞ = 1 600 000 t; crossed 84 211 t, r taken as 0.05). The oil well (scene 7) and the handoff (scene 13) are unchanged.
- **Idealising assumptions (author notes, not learner copy).** (i) The town's growth rate is constant (a model; real growth varies). (ii) Houses are drawn one per 1 000 extra people (a picture of growth, not a housing claim). (iii) The chain message's tripling every hour is a model of fast spreading, for a short time only. (iv) The mine's output falls by exactly 5% of the previous year's each year, for ever (the limiting sum is a ceiling, not a forecast).
- **Join with f07 (changed, both designs edited together).** Scene 1 opens on f07 Revision 2's final frame exactly (the painted town with the time-mode timeline "t = 0: 20 000 people", "×1.05", "after 1 year: 21 000", "?" tabs to "after 6 years: ?", "Next: growth and decay models" and "?").
- **Join with f09 (kept exactly).** Scene 13's narration and visual are unchanged, so the final frame still matches `math-a12-f09.md` scene 1 ("t = 0: $30,000 owed", "×1.006" to "$30,180", red "−$600" to "?", faint "month 2: ?", "Next: reducing-balance loans" and "?"). The red repayment arc is the one red mark that is not a crossed slip; it is f09's frame and is left as it is.
- **Simulations (standard item 3).**
  1. **The town** (scenes 1, 3; the main simulation): a year slider from t = 0 draws a "×1.05" arc per year, numbers the arcs, adds houses, and updates `LiveReadoutBoard` "years t", "multiplications" and "population" (52 px); in scene 3 it replays with symbols and an inset exponential curve.
  2. **The decay race** (scenes 5, 6): a year slider drives the trailer's value bar, then two trailer icons ride the geometric and straight-line models; the straight line stops at 0 at 6⅔ years while the geometric value keeps shrinking (≈ $4 267 at 12 years).
  3. **The running total** (scene 7): the oil well's totals build towards the 500 000 line with a "total so far" readout; the chain message's count climbs past 1 000 000 in scene 4.
- **Colour roles (fixed for the whole video).** Values blue; r and "×r" arcs amber; running totals teal; times and multiplication counts grey ink; the arithmetic contrast dashed grey ink; targets dashed ink; answer green; mistake red, crossed slips only (exception: scene 13's fixed "−$600" arc).
- **Large type (standard item 5).** See the type line under "Script and shots". The town about 1,500 px wide (620 px in scene 2); the trailer about 560 px; plots about 1,200 × 640 px.
- **Handwritten voice (standard item 6).** `HandTag`: "only 5 steps", "r keeps what's left, not what's lost", "same factor each period: geometric", "time in the power: exponential in time", "log 3 > 0: sign stays", "log 0.85 < 0: dividing flips the sign", "arithmetic: same loss, reaches 0", "geometric: approaches 0, never reaches it", "year 1 = a₁", "only 4 steps: the start is not a step", "r is what's kept: 0.95", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 60 s.** The town simulation (1); percentage bars beside the town (2); the symbolic timeline and curve (3); the chain-message board and plot (4); the camper trailer (5); the decay race (6); the oil well's totals (7); the framed memory card (8); question cards with pictures (9 to 12); the loan timeline (13); key notes (14).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 4, 5 and 7: task strip, givens card, equation strip, rows at 52 px, green framed answers; scene 2 carries a silent crossed slip ("r = 0.2"). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full question at 40 px plus a picture (A1: a painted concert ticket and a time strip; A2: a year strip with one bar and an empty total column).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Start, ratio, count. Count the multiplications from time zero." with three icons. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** In the decay race the straight-line trailer hits zero and stops, while the geometric trailer keeps losing less each year and never reaches zero (scene 6).
- **Narration (not voiced).** Scenes 1, 2 (one sentence cut), 4, 5, 6, 9 to 12 are rewritten for the new contexts; scene 7 drops its first sentence for length; scenes 3, 8, 13 and 14 keep their Revision 1 text.

### Revision 1 decisions (kept where not overridden above)

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
  - Start boundary (Revision 2): "Open on f07's town: 20 000 people at t = 0, ×1.05 each year, 'after 6 years: ?'; count the multiplications from time zero."
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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): values (population, message count, trailer value, output; bars and points) **blue**; the ratio r and the "×r" arcs **amber**; running totals Sₙ **teal**; times and multiplication counts **grey ink**; the straight-line (arithmetic) contrast **dashed grey ink**; targets and reference lines **dashed ink**; answer **green**; mistake **red**, crossed slips only. Exception: scene 13's "−$600" arc stays red because that frame is f09's fixed opening. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; tab labels and axis numbers at least 28 px; hand tags (`HandTag`) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (the town, trailer, timeline, plot or board) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · SEQUENCES AND SERIES"; scene headings in the hand font, 44 px.

### 1. hook (after six years)
> Last video ended with this question. A town of twenty thousand people grows by five per cent each year. How many people after six years? A common answer uses the sixth term, twenty thousand times one point zero five to the five. But count the growth steps. After one year, there's been one. After six years, there have been **six**. So it's twenty thousand times one point zero five to the six, which is about twenty-six thousand, eight **hundred**. The start, at time zero, is the first term, so six years later is the seventh term. How do we set up models like this without getting the count wrong?

Visual: opens on f07's last frame exactly (f07 Revision 2 scene 14: the painted country town `ma12-country-town-v1.png` across the lower half; above it the time-mode `PeriodTimeline` "t = 0: 20 000 people", amber "×1.05" arc to "after 1 year: 21 000", faint tabs to "after 6 years: ?"; chips "Next: growth and decay models" and "?"). Heading writes on: "How do geometric models predict repeated growth or decay?" as the chips fade. On "the sixth term" a pencil-grey guess chip "a₆ = 20 000 × 1.05⁵ ≈ 25 526?" beside the strip. On "count the growth steps" the town simulation (simulation 1, the lesson's main live simulation) runs a year slider from t = 0: each year an amber "×1.05" arc draws to the next bar, a `StepCounter` numbers the arcs "1", "2", …, and new houses (the reused house plate `phys-y11-house-v1.png` at about 70 px, one per 1,000 extra people) appear on the town's empty land; `LiveReadoutBoard` (52 px): "years t" (grey ink), "multiplications" (grey ink), "population" (blue). On "six" the slider reaches t = 6: six arcs numbered, bracket "6 growth steps", readout "26 802" with six new houses. Row (52 px) "20 000 × 1.05⁶"; on "hundred" green framed "≈ 26 800 people", and the guess chip is crossed in red (hand caption "only 5 steps"). On "seventh term" grey term labels "a₁" (at t = 0) to "a₇" (after 6 years) slide under the tabs, the a₇ label ringed. Chip "How do we count it right?" at the top right.

### 2. a fixed percentage is a fixed ratio
> First, why is this geometric? Each year, the population is multiplied by the same factor. Growing by five per cent means keeping all one hundred per cent, and adding five more. So each value is multiplied by one point zero **five**. Falling by twenty per cent means keeping eighty per cent, so r is zero point **eight**. Either way, every period multiplies by the same number, so the values make a geometric sequence. Arithmetic models add the same amount. Geometric models multiply by the same **factor**.

Visual: camera continue; the town shrinks to the left third (about 620 px wide, solid). Right two-thirds: a percentage bar (a full 100% bar, about 900 px wide, blue). On "keeping all one hundred per cent" a 5% amber block joins its end; row (52 px) "100% + 5% = 105%"; on "five" "r = 1.05". On "Falling by twenty per cent" a second 100% bar loses a 20% block (it slides off, grey ink outline), "100% − 20% = 80%"; on "eight" "r = 0.8". A red slip "r = 0.2" writes and is crossed (hand caption "r keeps what's left, not what's lost"), silent. On "add the same amount" a small grey ink strip "+d, +d, +d"; on "factor" an amber strip "×r, ×r, ×r", hand tag "same factor each period: geometric".

### 3. counting from time zero
> Now the timing. Call the starting amount A, at time zero. After one period, it's A times r. After t periods, it's been multiplied t times, so the amount is A, times r to the **t**. Time is in the power, so the quantity is an exponential function of time. In sequence language, the start is the first term, so after t periods we're at term t plus **one**. Some questions call the value after the first period the first term instead. Then after t periods, you're at term t. So always ask what time the first term **is**.

Visual: camera continue. The town's year slider replays at the left with the timeline now in symbols (simulation 1 again): "t = 0: A", "after 1 period: Ar", "after 2: Ar²", "…", "after t: Arᵗ" (44 px); `StepCounter` bracket "t multiplications". On "t" the framed model (52 px) "amount after t periods = A rᵗ" with the hand tag "time in the power: exponential in time"; a small inset plot shows the town's population points on a rising exponential curve. On "one" the grey term labels "a₁, a₂, a₃, …, aₜ₊₁" slide under the marks, ringing "a₁ = A at t = 0". On "Some questions" a second label row slides in beneath: "a₁ = Ar (after 1 period)", …, "aₜ (after t)", in grey ink. On "is" a chip "First term: at what time?" glows.

### 4. worked example: a chain message passes a million
> When does a chain message reach a million people? Five hundred people have it at the start, and the number who have it triples every hour. Set five hundred times three to the t above one **million**. Divide by five hundred, so three to the t is more than two thousand. Take logs, and divide by log three, which is positive, so the inequality stays the same way round. Then t is more than about six point nine **two**. So seven is the first whole hour with more than a million. Check: after six hours it's three hundred and sixty-four thousand, five hundred, and after seven, one million, ninety-three thousand, five **hundred**.

Visual: clear change to the g01 layout. Task strip: "500 people have a chain message at the start, and the number who have it triples every hour. After how many whole hours does it first exceed 1 000 000?" (site card 09 (b) numbers, unchanged; context changed, see Decisions). Givens card: "A = 500 (blue), r = 3 (amber), t in hours". Equation strip: "N = 500 × 3ᵗ". Rows at 52 px: "500 × 3ᵗ > 1 000 000" (on "million"); "3ᵗ > 2000"; "t log 3 > log 2000" with a grey tag "log 3 > 0: sign stays"; on "two" "t > log 2000 / log 3" with grey "≈ 6.92". Left: a `TermPlot` (hours 0 to 8, log-free linear axis to 1 200 000, solid) with a dashed ink line at 1 000 000 and an hour slider whose readout "N" (blue) climbs: 500, 1500, 4500, …; green framed "7 hours". On "Check" the points at t = 6 ("364 500", below the line) and, on the last "hundred", t = 7 ("1 093 500", above) ring.

### 5. worked example: a camper trailer that loses value
> Now decay. A camper trailer costs thirty thousand dollars new, and loses fifteen per cent of its value each year. So r is zero point eight five, and after n years it's worth thirty thousand, times zero point eight five to the n. After five years, that's about thirteen thousand three hundred and eleven **dollars**. When is it first worth less than ten thousand? Divide by thirty thousand, so zero point eight five to the n is less than a third. Take logs. But log of zero point eight five is negative, and dividing by a negative number flips the **inequality**. So n is more than about six point seven six, and the answer is seven years. Check: after six years it's worth about eleven thousand three hundred dollars, and after seven, about nine thousand six **hundred**.

Visual: clear change (new case, g01 layout). Task strip: "A camper trailer costs $30 000 new and loses 15% of its value each year. (a) Find its value after 5 years. (b) When is it first worth less than $10 000?" (site Problem 3 numbers, unchanged; context changed, see Decisions). Givens card: "A = $30 000, r = 1 − 0.15 = 0.85". Left: the painted camper trailer `ma12-camper-trailer-v1.png` (about 560 px wide, solid) above a value bar (blue) that shrinks with a year slider; readouts "years n" (grey ink) and "value" (blue, 52 px). Rows at 52 px: "V = 30 000 × 0.85ⁿ"; "V(5) = 30 000 × 0.85⁵"; on "dollars" "≈ $13 311" (grey "13 311.16"). Then (b): "0.85ⁿ < 1/3"; "n log 0.85 < log(1/3)"; on "inequality" the "<" turns to ">" with an amber flash and the hand tag "log 0.85 < 0: dividing flips the sign"; "n > log(1/3) / log 0.85" with grey "≈ 6.76"; green framed "7 years". On "Check" the slider shows n = 6 ("≈ $11 314", above a dashed ink $10 000 line) and, on the last "hundred", n = 7 ("≈ $9 617", below).

### 6. geometric against arithmetic decay
> Compare that with an arithmetic model. If the trailer lost a fixed four thousand five hundred dollars every year, which is fifteen per cent of its first price, it would be worth nothing after six and two thirds years. The geometric model takes fifteen per cent of what's left, so each year's loss is smaller than the one **before**. Its value gets closer and closer to zero, but never reaches **it**.

Visual: the decay race (simulation 2): a `TermPlot` of value against years 0 to 12 (about 1,200 × 640 px, solid), two trailer icons (the trailer plate at about 120 px) riding two series as a year slider runs: dashed grey-ink points of 30 000 − 4500n falling in a straight line to 0 at n = 20/3 (hand tag "arithmetic: same loss, reaches 0") and blue points of 30 000 × 0.85ⁿ curving down; readouts "year n", "geometric value" (blue), "arithmetic value" (grey ink). On "before" the blue points' yearly drops label "−4500", "−3825", "−3251", … shrinking. On "it" the slider runs on to n = 12 (blue "≈ $4 267") while the grey trailer has stopped at 0; hand tag "geometric: approaches 0, never reaches it".

### 7. a total over time: the oil well
> An oil well produces fifty thousand barrels in its first year, and each year after that, ten per cent less than the year before. Here the first term is the first year's output, so year n is term n. So a is fifty thousand, and r is zero point nine. Over the first ten years, the well produces S ten. That's fifty thousand, times one minus zero point nine to the ten, over zero point **one**, which is about three hundred and twenty-five thousand, six hundred and sixty-one barrels. And since r is less than one, the totals settle. S infinity is fifty thousand over zero point one, which is five hundred thousand. However long it runs, the well can never produce more than five hundred thousand **barrels**.

Visual: clear change (new case, g01 layout). Task strip: "An oil well produces 50 000 barrels in its first year. Each year after that, it produces 10% less than the year before. (a) Find the total produced in the first 10 years. (b) Show that the well can never produce more than 500 000 barrels." (original). Givens card: "a = 50 000 barrels (year 1), r = 0.9". A `PeriodTimeline` of year tabs 1 to 5 and "…", blue bars shrinking with amber "×0.9" arcs and the hand tag "year 1 = a₁". Rows at 52 px: "S₁₀ = 50 000(1 − 0.9¹⁰)/(1 − 0.9)"; on "one" "= 500 000(1 − 0.9¹⁰)" with grey "≈ 325 660.78"; green framed "≈ 325 661 barrels". On "the totals settle" the running-total simulation (simulation 3): a `PartialSumStack` of S₁ to S₂₀ builds beside the rows (teal, with a year slider and readout "total so far") towards a dashed ink line at 500 000. Row "S∞ = 50 000/(1 − 0.9) = 500 000" (with "|r| = 0.9 < 1"); on "barrels" the dashed line labels "500 000: the most it can ever produce" and part (b) gets a tick.

### 8. memory aid
> For any of these models, use three steps. Find the start. Find the ratio, from the percentage. Then count the multiplications from time **zero**. Start, ratio, count.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). Three icons in a row: a small town with a "t = 0" flag (start), a percentage bar becoming "×1.05" (ratio), and a `StepCounter` "1, 2, 3, …" over amber arcs (count). The hand-font line at 60 px: "Start, ratio, count." Under it (44 px): "Count the multiplications from time zero." On "zero" the "t = 0" flag glows. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A concert ticket costs one hundred and twenty dollars this year. Ticket prices rise by four per cent each year. Find the price after five years, to the nearest cent. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A concert ticket costs $120 this year. Ticket prices rise by 4% each year. Find the price after 5 years, to the nearest cent." The full question stays on screen. Picture slot: the painted ticket `ma12-concert-ticket-v1.png` (about 300 px wide) beside a time strip "t = 0: $120" with faint tabs to "after 5 years: ?" (no arcs, no ratio). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Rising by four per cent means multiplying by one point zero four each **year**. The start is one hundred and twenty dollars, at time zero, so after five years there have been five **multiplications**. One hundred and twenty times one point zero four to the five is one hundred and forty-six **dollars**, to the nearest cent. A hundred and forty dollars and thirty-eight cents is wrong. It uses the power four, as if the start were the first **multiplication**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "A = $120 (t = 0)", "r = 1.04", "t = 5" ("4%" and "after 5 years" underlined as used). On "year" "r = 1 + 0.04 = 1.04". On "multiplications" five amber arcs draw on the strip with a `StepCounter` "1" to "5". Row at 52 px "120 × 1.04⁵ = 145.998…"; on "dollars" green framed "$146.00". On the last "multiplication" a red slip "120 × 1.04⁴ = $140.38" writes and is crossed (hand caption "only 4 steps: the start is not a step"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A new mine produces eighty thousand tonnes of ore in its first year. Each year after that, it produces five per cent less than the year before. Find the greatest total amount of ore the mine can ever produce. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A new mine produces 80 000 tonnes of ore in its first year. Each year after that, it produces 5% less than the year before. Find the greatest total amount of ore the mine can ever produce." The full question stays on screen. Picture slot: a year strip with one blue bar "80 000 t" over year 1, "?" over later years, and an empty teal total column (no line, no ratio). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Five per cent less each year means keeping ninety-five per cent, so r is zero point **ninety-five**. The first year's output is the first term, so a is eighty thousand. Since r is less than one, the totals settle, and the limiting sum is eighty thousand over zero point zero five, which is one million six hundred thousand **tonnes**. About eighty-four thousand tonnes is wrong. It uses zero point zero five as the ratio, instead of zero point **ninety-five**.

Visual: the card shrinks to the top. `GivensStrip`: "a = 80 000 t (year 1)", "5% less each year", "greatest total" ("first year" and "5% less" underlined as used). On the first "ninety-five" "r = 1 − 0.05 = 0.95" and the picture's bars shrink with "×0.95" arcs. Rows at 52 px "|r| = 0.95 < 1, so S∞ exists"; "S∞ = 80 000/(1 − 0.95) = 80 000/0.05"; on "tonnes" green framed "1 600 000 tonnes", and the teal column builds towards a dashed ink line at 1 600 000. On the last "ninety-five" a red slip "80 000/(1 − 0.05) ≈ 84 211 t" writes and is crossed (hand caption "r is what's kept: 0.95"). Hold about 1 s.

### 13. handoff
> So a geometric model multiplies by the same ratio every period, from a start at time zero, and its sums give totals over time. But some quantities are multiplied, and then have something taken away. A car loan of thirty thousand dollars grows by zero point six per cent interest each month, so it's multiplied by one point zero zero six. Then a six hundred dollar repayment comes off. What happens to the balance, month by **month**?

Visual: the memory-aid icons show small at the top, then fade on "But some quantities". Board clears to f04's `PeriodTimeline` in time mode: "t = 0: $30,000 owed"; on "one point zero zero six" an amber "×1.006" arc to a bar "$30,180" (grey tag "interest: 0.6% a month"); on "repayment" a red "−$600" arc from that bar to a "?" bar; then a faint tab "month 2: ?". On "month" a chip "Next: reducing-balance loans" and a "?" chip. No recurrence, no balance after the repayment, no formula. Hold about 2 s. This is f09's opening frame (unchanged from Revision 1, matching `math-a12-f09.md` scene 1); scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Grow p%: r = 1 + p/100. Fall p%: r = 1 − p/100.
- Start A at t = 0: after t periods, A rᵗ.
- Check what time the first term is.
- 0 < r < 1: log r < 0, so the inequality flips.
- |r| < 1: S∞ is a total never passed.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Start, ratio, count: find the start and the ratio, then count the multiplications from time zero.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 13's frame exactly ("t = 0: $30,000 owed", the amber "×1.006" arc to "$30,180" with its grey tag, the red "−$600" arc to the "?" bar, the faint "month 2: ?" tab, "Next: reducing-balance loans" and "?"). This is the final frame and f09's opening frame.

## Teaching checks

- **Does it explain causes?** Why after 6 years is 1.05⁶: six growth steps from time zero (hook). Why a percentage is a ratio: keep 100% and add or lose p% (2). Why the quantity is exponential in time: time is in the power (3). Why the term number is t + 1: the start is term 1 (3). Why the trailer's inequality flips: log 0.85 < 0 (5). Why geometric decay never reaches zero: each loss is a fraction of what is left (6). Why the well has a ceiling: its totals settle at S∞ (7). Why the mine's ratio is 0.95: r is the fraction kept (A2).
- **Misconceptions addressed:** "after 6 years is the 6th term" (hook; A1 crossed); "r is the rate" (2); "the first term is always at time zero" (3); "the inequality never flips" (5); "decay always reaches zero" (6); "a total that goes on forever is unlimited" (7); "the rate is the ratio" (A2 crossed).
- **One idea at a time:** one context per scene from 4 on (6 continues 5's trailer with one new comparison); rows replace each other with only the needed results kept.
- **Video makes it easier:** the student counts the growth steps on the town's timeline as houses appear, and sees the term labels sit one ahead (hook, 3), sees the kept 80% and the added 5% as bars (2), watches the "<" flip as the negative log is divided (5), sees the straight line hit zero while the curve hugs the axis (6), and sees the oil totals stop short of the 500,000 line (7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given (with units) visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 26 s and 34 s (scenes 10 and 12; feedback 2 is above the brief range because it sets up the model before the arithmetic; open decision 2).
- **Avoided double teaching:** f04's timing rule is recalled by the step count, not restated as a rule first; f05's log method and f06's Sₙ and f07's S∞ are used with one clause each.
- **Syllabus coverage:** `ci243a9af6` (hook to 7; A1 growth, A2 decay with a series; key notes 1 to 5).
- **Out of scope by design:** loans and repayments, recurrence relations, eᵏᵗ models, annuities.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme; Revision 2).** "A concert ticket costs $120 this year. Ticket prices rise by 4% each year. Find the price after 5 years, to the nearest cent."
Model answer: r = 1.04; the start is at time zero, so after 5 years there are 5 multiplications: 120 × 1.04⁵ = 145.998…, so $146.00. Classic mistake (crossed): "$140.38" (120 × 1.04⁴).

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested; Revision 2).** "A new mine produces 80 000 tonnes of ore in its first year. Each year after that, it produces 5% less than the year before. Find the greatest total amount of ore the mine can ever produce."
Model answer: the yearly outputs form a GP with a = 80 000 (year 1) and r = 1 − 0.05 = 0.95; |r| < 1, so the total approaches S∞ = 80 000/(1 − 0.95) = 1 600 000 tonnes. Classic mistake (crossed): "about 84 211 t" (80 000/(1 − 0.05): the rate used as the ratio).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Town (Revision 2) | 20 000 × 1.05⁶ ≈ 26 802 (26 801.91); crossed guess 20 000 × 1.05⁵ ≈ 25 526; a₇; 6 houses added (one per 1 000 extra people); 21 000 after 1 year | 1 |
| Percentages (site) | 5% → 1.05; 20% → 0.8; crossed r = 0.2 | 2 |
| Threshold (site numbers; a chain message) | 500 × 3ᵗ > 1 000 000; 3ᵗ > 2000; t > 6.92 (grey); 7 hours; 364,500 and 1,093,500 | 4 |
| Camper trailer (site car numbers) | r = 0.85; V(5) ≈ $13,311; 0.85ⁿ < ⅓; n > 6.76 (grey); 7 years; ≈ $11,314, ≈ $9,617 | 5 |
| Straight-line contrast (site MC Q5 C) | 30,000 − 4,500n; $0 at 20/3 years; losses $4,500, $3,825, $3,251; geometric at 12 years ≈ $4,267 | 6 |
| Oil well | a = 50,000, r = 0.9; S₁₀ ≈ 325,661 barrels (grey 325,660.78); S∞ = 500,000 | 7 |
| A1 (Revision 2) | 120 × 1.04⁵ = 145.998… ≈ $146.00; crossed $140.38 | 9, 10 |
| A2 (Revision 2) | r = 0.95; S∞ = 80 000/0.05 = 1 600 000 t; crossed 80 000/0.95 ≈ 84 211 t | 11, 12 |
| Handoff (finance lesson 12) | $30,000; ×1.006; $30,180; −$600; ? | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 500 × 3⁵ = 121 500; 500 × 3⁶ = 364 500; 500 × 3⁷ = 1 093 500; log 2000/log 3 = 6.9186…
- 30 000 × 0.85⁵ = 13 311.159…; × 0.85⁶ = 11 314.485…; × 0.85⁷ = 9 617.312…; log(1/3)/log 0.85 = 6.7599…; log₁₀ 0.85 = −0.07058.
- 30 000/4500 = 20/3; 4500 × 0.85 = 3825; 3825 × 0.85 = 3251.25.
- 0.9¹⁰ = 0.3486784401; 500 000 × (1 − 0.9¹⁰) = 325 660.78; 50 000/0.1 = 500 000; S₂ = 95 000, S₃ = 135 500, S₄ = 171 950.
- Revision 2 (Python, 7 Nov): 20 000 × 1.05⁶ = 26 801.91; 20 000 × 1.05⁵ = 25 525.63; 30 000 × 0.85¹² = 4 267.25.
- A1 (Revision 2): 120 × 1.04⁵ = 145.998…; 120 × 1.04⁴ = 140.383…
- A2 (Revision 2): 80 000/(1 − 0.95) = 1 600 000; 80 000/(1 − 0.05) = 84 210.53.
- Handoff: 30 000 × 1.006 = 30 180; 0.072/12 = 0.006.

## Memory aid check

- **"Start, ratio, count: find the start and the ratio, then count the multiplications from time zero."** Original, parallel to f04's "Find a, d and n, and say what n counts". Meaning, as said in scene 8: identify the amount at time zero, convert the percentage to r = 1 ± p/100, and count the periods that have passed, which is the power. Assumptions checked: the quantity changes by a fixed percentage per period (a geometric model); "the start" is the amount at time zero, so the count equals the time t; when a question's first term is the value after one period (or a first year's output, as in scene 7), the count from the first term is n − 1, which scene 3 and key note 2 name ("always check what time the first term is"). It helps a new case: $8,000 invested at 6% a year for 10 years gives 8,000 × 1.06¹⁰. Introduced after the cause (hook to 3) and the uses (4 to 7).
- **Considered, not used:** "after k periods is term k + 1" alone (the site's rule; true only when term 1 is at time zero, so on its own it would mislead in scene 7); "rule of 72" (outside the syllabus point).

## Narration length estimate

Revision 2 (7 Nov 2026), counted by script with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,052 characters**, 14 scene headings (Revision 1, recounted the same way: 6,111). Characters per scene (in order): 592, 494, 506, 616, 759, 392, 697, 162, 198, 444, 240, 448, 429, 75.

At 13.3 characters per second the speech is about 455 s. Holds and settling: two 10 s countdowns 20 s; short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the town slider (1, 3), the message plot (4), the trailer and decay race (5, 6) and the oil totals (7) 25 s; the key-notes scene 45 s (about 96 s in all). Total **about 551 s (9 min 11 s)**, inside the 5,500 to 7,000 character band and 19 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 12's "The first year's output is the first term, so a is eighty thousand." (keep the givens strip); scene 3's "Time is in the power, so the quantity is an exponential function of time." (keep the hand tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12f08` (route math-a12-f08). Suggested explainer folder `src/explainer/lessons/math-a12-f08` and build folder `docs/production/claude-pm/lessons/m-a12f08` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, percentage-ratio, time-zero-count, growth-threshold, trailer-decay, geometric-vs-arithmetic, oil-total, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f07's last frame continues into scene 1 (camera continue, same strip); 1 to 2 camera continue (strip shrinks); 2 to 3 clear change; 3 to 4 clear change (new task); 4 to 5 clear change (new case); 5 to 6 camera continue (same axes); 6 to 7 clear change; 7 to 8 camera pull back to the aid; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12f08-learning-review.md`, `science_check` = `checks/m-a12f08-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `physics/phys-y11-house-v1.png` (a painted weatherboard house with an iron roof, side view, transparent, 1774 × 887, alpha box 219 to 1549 by 133 to 782; reused as the house sprite added as the town grows), `biology/b4-car-blue-v1.png` and `biology/b4-car-yellow-v1.png` (cars; d19 owns car depreciation), `physics/phys-y11-box-trailer-v1.png` (an open box trailer; not something worth $30 000, so it would undermine the numbers). No town, camper trailer or ticket exists.

Reused (no copies needed): `physics/phys-y11-house-v1.png`.

Need (painted, new; see the Codex asset brief): `ma12-country-town-v1.png` (also f07's final frame), `ma12-camper-trailer-v1.png`, `ma12-concert-ticket-v1.png`.

Coded (studio kit): timelines, arcs and step counters, the percentage bars, readouts, plots and sliders, stacks, givens cards, answer frames, slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `GrowthField`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`; `PartialSumStack` (f01), `TermPlot`, `StepCounter` (f02), `PeriodTimeline` and the sprite field (f04).

Additions the build needs:
1. **Plate placement slots** (small, with the f04 sprite field): the town plate's measured empty-land region as a slot list, so house sprites are added in a fixed order without overlapping painted buildings.
2. **Two riders on one `TermPlot`** (small): two small plate sprites (the trailer) riding two series in step with one slider, one of which stops at a floor value.

## Codex asset brief (Maths A12 F08, a growing country town)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f08.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style (match `biology/b4-car-yellow-v1.png` and `physics/phys-y11-lift-car-v1.png` in palette, line weight and finish, and `physics/phys-y11-house-v1.png` for buildings); at least 8 per cent clear margin; no text, signs with writing, street names, numbers, logos, brand names, people, hands, faces, vehicles with drivers, sky, glow or ground shadow beyond the plate's own ground patch. Never stretch to fit; keep the native aspect ratio.

1. `ma12-country-town-v1.png` (2400 × 1000 px): a small Australian country town seen from a low rise, side-on and slightly above: a short main street with a few shopfronts with verandahs (blank facades, no signage), a water tower, a handful of weatherboard houses with iron roofs, gum trees, and **a wide stretch of empty, flat, mown land on the right third** where the build will add houses. A soft ground edge at the bottom. Codex reports, in file pixels, the empty-land region [x0, y0, x1, y1] and the ground line's y across it, and supplies a check image with 10 copies of `physics/phys-y11-house-v1.png` at 70 px wide placed on that land in two rows.
2. `ma12-camper-trailer-v1.png` (1600 × 900 px): a modern off-road camper trailer, closed for towing, seen side-on: a white and charcoal body with a front toolbox, a spare wheel, chunky tyres and a drawbar; no badges, stickers or writing. Codex reports the bounding box and the ground line. It must read at 120 px wide (decay race) and 560 px wide (scene 5).
3. `ma12-concert-ticket-v1.png` (1200 × 600 px): a printed paper concert ticket seen flat and slightly tilted, with a perforated stub on one side and a simple coloured band design; **no words, band names, numbers, barcodes or QR codes**. Codex reports the bounding box. It must read at 300 px wide.

Report inspection on the paper background (`#f6f1e7`) at 1,500 px and 620 px wide for plate 1, 120 px and 560 px wide for plate 2, and 300 px wide for plate 3, plus the alpha checks and anchor points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f08-provenance.json`.

### Revision 1 coded part specification (kept; scene numbers as in Revision 1)

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

A town of 20,000 people grows by 5% a year. After 6 years, is it 20,000 × 1.05⁵ or 20,000 × 1.05⁶? Count the growth steps from time zero and it's 1.05⁶: about 26,800 people. See why a fixed percentage change multiplies by the same ratio (5% growth is × 1.05, 20% decay is × 0.8), why the amount after t periods is A rᵗ, an exponential function of time, how to find the first hour a chain message passes a million, and why the inequality flips when a camper trailer's value falls below $10,000 (log 0.85 is negative). Compare geometric decay with straight-line decay, and use Sₙ and the limiting sum to find what an oil well produces in ten years and the most it can ever produce. A memory aid: start, ratio, count. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the formulas for geometric sequences and series to model and solve growth and decay problems where a quantity is an exponential function of time"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Geometric sequences, geometric sums and limiting sums (previous videos); arithmetic models. Next: Reducing-balance loans.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. f09's opening frame (root).** f09 has no design yet. Scene 13 uses the site's financial lesson 12 Problem 1 ($30,000 at 7.2% p.a. compounded monthly, $600 a month), showing ×1.006 to $30,180 and −$600 to "?". If f09 opens on different numbers or a different picture, change scene 13's fourth and fifth sentences and its strip; no loan teaching is done here either way.
- **2. Attempt 2 and feedback length (learning review; Revision 2: the ball attempt is replaced by the mine, see the Revision 2 section).** The bouncing ball combines a model, a limiting sum and the up-and-down count; feedback 2 runs about 34 s, above the 15 to 30 s range, because the model must be set up before the arithmetic. Options: keep (strand finale); cut "Follow the ball. It falls two metres." (about −40 characters, keep the down arrow silent); or replace A2 with a shorter decay threshold ("A medicine's amount falls by 20% each hour from 400 mg. After how many whole hours is it first below 100 mg?" 400 × 0.8ᵗ < 100, t > 6.21, so 7 hours; crossed "6 hours" (inequality not flipped)).
- **3. Site card 11's "doublings to a million" (root).** The site's recall prompt (2²⁰ ≈ 10⁶, so about 20 doublings) is a good surprise but would add a third growth context; not used. It could open the practice video.
- **4. Title length (root).** 103 characters; the 58-character alternative is recommended unless root wants the longer form.
- **5. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f04 to f07 and Year 11 percentages and logs; check that the hook's wrong answer is corrected by counting before any rule; that the percentage bars make r = 1 ± p/100 visible; that "always ask what time the first term is" is clear with both label rows; that the flip in scene 5 is caused by the negative log, said before it happens; that the straight line and the curve are read as the contrast; that the oil well's ceiling is a modelling bound; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The step count, the percentage bars, the inequality flip, the two decay graphs and the stack under its ceiling carry the explanation; judge them at playback speed in the voiced preview. Every bar, point and readout must be computed from the same functions as the displayed expressions.
- The opening frame is f07's scene 15 (same designer, 2 Nov). Scene 13 must match f09's opening when f09 is designed.

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the syllabus point, the learner question, the site's worked-example numbers (threshold, decay, straight-line contrast), the oil well, the cause chain, the memory aid and the handoff are unchanged. Programme decision 5 is withdrawn by the visual standard; the Revision 1 lines that say "coded visuals" are superseded.

- **Anchor and why:** a growing country town (20 000 people, 5% a year). It is the most natural everyday geometric growth, it has a real time zero, and it carries the hook's counting trap; houses appear as it grows. It replaces the site's bacteria (a science context the owner rule avoids here). f08 is the one money lesson in f01 to f08 (camper trailer, concert ticket, and the fixed loan handoff).
- **Simulations:** the town (year slider, "×1.05" arcs numbered, houses added, "years", "multiplications", "population" readouts); the chain message passing 1 000 000; the decay race (trailer icons on the geometric and straight-line models; one stops at 0); the oil well's totals settling under 500 000.
- **Colour roles:** values blue; r amber; totals teal; times and counts grey ink; the arithmetic contrast dashed grey ink; targets dashed ink; answer green; mistake red (scene 13's fixed "−$600" arc excepted).
- **Plates:** new `ma12-country-town-v1.png` (also f07's final frame), `ma12-camper-trailer-v1.png`, `ma12-concert-ticket-v1.png`; reused `physics/phys-y11-house-v1.png` as the added-house sprite.
- **Narration changes (not voiced):** scene 1 (the town replaces the bacteria), 2 (population wording; one sentence cut), 4 (a chain message; site numbers), 5 and 6 (a camper trailer replaces the car; site numbers), 7 (first sentence cut for length), 9 and 10 (a concert ticket replaces the town attempt), 11 and 12 (a mine replaces the ball attempt, now f07's anchor). Scenes 3, 8, 13 and 14 keep their Revision 1 text.
- **Counts:** 6,111 → 6,052 characters (both as the sum of scene strings; Revision 1 stated 6,124 with joining spaces); about 560 s (old 60 s notes hold) → about 551 s with holds (notes 45 s), 19 s under the cap.
- **Key notes:** five short one-line bullets (were five long notes) beside the framed card.
- **Joins:** opens on f07 Revision 2's town frame (edited together); the final frame is unchanged and matches f09's opening.
- **Kit additions:** placement slots on the sprite field (houses on the town's empty land); two plate riders on one `TermPlot`.
- **Open decision 2 resolved:** the ball attempt (34 s feedback) is gone; feedback 2 is now a mine's limiting sum (about 34 s at 13.3 characters per second; it names the ratio, the first term and the condition before the arithmetic). If the learning review finds it long, cut "The first year's output is the first term, so a is eighty thousand." and keep the givens strip.
