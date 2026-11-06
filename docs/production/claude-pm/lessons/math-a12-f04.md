# Maths A12 F04: How do arithmetic sequences model linear change? Fixed change per period, one period or a running total, the timing of n, and where a decay model stops (design)

Status: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026). Not voiced (no `math-a12-f04/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 5,750 characters, 15 scene headings, about 528 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 41), after f03 (arithmetic partial sums) and before f05 (geometric sequences). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5; the café, ski resort, machine and car are named in words and shown as coded timelines and graphs, with no objects or people drawn; see open decision 2). No brief 151 pack and no route-inputs-3 entry exist for f04 (checked 2 Nov); pack work done here. Site lesson read (2 Nov, read-only): `sequences-and-series/lesson03.sa.html`, SHA256 `6ccf1ca41bea4fa028dec2301417d98bf39c6394ad06a0acebff03cfd413448b` (hook and card 11 answer; card 09 applications, AP against GP; Problem 3). Every number recalculated with SymPy. Course outline entry: `math-a12-f04` (one content point, site source lesson 3).

Owner rules applied: as f01 to f03 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values, with an inequality's decimal root in grey; attempt cards give nothing away; opens on f03's handoff frame; f02's aₙ and f03's Sₙ forms recalled by use, not re-taught).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Arithmetic sequences and series; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci01ed1e3f`: "Apply the formulas for arithmetic sequences and their partial sums to model and solve growth and decay problems involving a quantity that is a linear function of time"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary (Revision 1 wording; Revision 2 anchor contexts and joins in Decisions override it):** starts from f03's last frame (a `PeriodTimeline` of 12 month tabs with deposit bars $50, $80, $110 and "?" over the other nine, a dashed "$1,200 in total?" line, chips "Next: more or less than $1,200?" and "?"); identifies an AP model (fixed amount per period; a, d and what n counts) against a fixed percentage (GP, f05); separates one period (aₙ) from a running total (Sₙ); shows the terms on a straight line and the totals curving upward; solves a salary model (expression, total, first year over a target), a decay model with its end point (machine output), and the timing of n ("in year n" against "after n years", car value). Stops at arithmetic models. Not taught: geometric growth and decay (f05 to f08; the handoff shows doubling as a question only); interest and annuities (finance strand); continuous linear models beyond the sequence (the car value is a linear function of time, used only at whole years).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a volunteer tree-planting crew on a bare hillside (painted plates, live).** The crew plants 50 seedlings on day 1, 80 on day 2, 110 on day 3, 30 more each day as they get faster. These are the site's savings numbers (lesson 3 hook and card 11) unchanged, with seedlings in place of dollars: a₁₂ = 380, S₁₂ = 2,580, against the guess "about 1,200". The anchor shows the model's two quantities at once: each day's planting (a bar, aₙ) and the hillside filling up with seedlings (the running total, Sₙ), so the difference between one period and a total is something the student can see. Community volunteering, not science and not money; distinct from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts. Money is kept out of f01 to f08 except f08 (owner note: money belongs to the finance strand).
- **Context changes, numbers unchanged (root to confirm).** (1) The savings plan becomes the planting crew (scenes 1 to 4, 9). (2) The site's tradie salary (Problem 3 and SA 3: $62,000 and +$3,500 a year) becomes a new theme park's yearly visitors (62,000 and +3,500 a year): every value, step and answer is unchanged (777,500; n > 83/7; year 12). (3) Revision 1's original car example (scene 8, $28,000 − $2,500 a year, a car context that d19 now owns) becomes a young tree planted at 120 cm that grows 45 cm a year; after 6 years it is 390 cm, the 7th term (the same "after n years" idea). (4) Attempt 2's ski-resort snow (now i14's snow-depth context) becomes a woodpile: 180 logs, 4 fewer each day, first below 100 on day 22 (same numbers). The café (attempt 1) and the machine (scene 7) are unchanged.
- **Idealising assumptions (author notes, not learner copy).** (i) The crew's daily increase is exactly 30 (a model of a crew getting faster; real crews level off, which is why the hook asks about twelve days only). (ii) The young tree grows a steady 45 cm a year over six years (a linear model of early growth; real growth varies by year). (iii) Seedlings are drawn one per 10 planted.
- **Join with f03 (changed, both designs edited together).** Scene 1 opens on f03 Revision 2's final frame exactly (the hillside strip with seedlings below days 1 to 3, bars 50, 80, 110 with "+30" arcs, "?" tabs, the "1,200 in total?" line, "Next: more or less than 1,200?" and "?").
- **Join with f05 (kept).** Scene 14's frame is unchanged (2, 4, 8, 16 with unequal differences and "×2" arcs); f05 Revision 2 opens on it.
- **Simulations (standard item 3).**
  1. **The planting crew** (scenes 1 to 4; the main simulation): a day slider runs 1 to 12; each day's blue bar rises, that day's seedlings appear on the slope, and the teal total column climbs, with `LiveReadoutBoard` "day n", "planted today aₙ", "total Sₙ" (52 px). The total passes the 1,200 line on day 8 (1,240), long before day 12 (the visual surprise). In scene 4 the same slider drives the two-series plot.
  2. **The growing tree** (scene 8): a time slider from t = 0 grows the painted tree (uniform scale from its base) against a cm scale with "years t" and "height" readouts; six "+45" arcs land on the 7th ladder card.
  3. **The machine's output** (scene 7): a marker slides down the falling points with "week n" and "output aₙ" readouts until the model stops at week 61.
- **Colour roles (fixed for the whole video).** One period's value aₙ blue; the change per period d amber; running totals Sₙ teal; period number n and time markers grey ink; targets and reference lines dashed ink; answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** See the type line under "Script and shots". The hillside about 1,800 px wide; the plot about 1,200 × 720 px; the tree up to about 670 px tall.
- **Handwritten voice (standard item 6).** `HandTag`: "guess", "fixed amount each period → arithmetic", "growing steps: not arithmetic", "past 1,200 already on day 8", "later days are far above 100", "same change every period", "terms: +30 each day", "totals: bigger jumps each day", "no increase yet", "model stops at week 61", "7th term: 6 steps", "day 15 only, not the total", "exactly 100 logs: not fewer", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 60 s.** The hillside and guess (1, 2); the planting simulation and total column (3); the two-series plot (4); the theme-park board (5, 6); the machine plot (7); the growing tree (8); the framed memory card (9); question cards with pictures (10 to 13); the doubling ladder (14); key notes (15).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 5 to 8: task strip, givens card with units, rows at 52 px, green framed answers; scene 6 and scene 8 carry silent crossed slips ("12 increases"; "6th term: 345 cm"). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full question at 40 px plus a picture (A1: a 15-tab day strip with only day 1's bar; A2: a day strip with a 180 bar and a 100 line).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Find a, d and n. Say what n counts. One period: aₙ. Running total: Sₙ." with a day-bar icon and a total-column icon. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The crew passes 1,200 seedlings on day 8, and the twelve-day total is more than double the guess (scene 3).
- **Narration (not voiced).** Scenes 1 to 5, 6, 8, 12 and 13 are rewritten for the new contexts (numbers unchanged); scenes 7, 9 to 11, 14 and 15 keep their Revision 1 text.

### Revision 1 decisions (kept where not overridden above)

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
  - Start boundary (Revision 2): "Open on f03's planting strip (50, 80, 110, … seedlings against 1,200); identify a, d and what n counts."
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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): one period's value aₙ (each day's planting, each year's visitors, bars and points) **blue**; the change per period d (arcs, steps) **amber**; running totals Sₙ (the total column and its points) **teal**; the period number n and time markers **grey ink**; targets and reference lines **dashed ink**; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; tab labels and axis numbers at least 28 px; hand tags (`HandTag`) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (the hillside, plot, timeline or board) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · SEQUENCES AND SERIES"; scene headings in the hand font, 44 px.

### 1. hook (more or less than 1,200 seedlings?)
> Here's a tree-planting crew. They plant fifty seedlings on their first day, eighty on the second and a hundred and ten on the third, thirty more each day as they get faster. After twelve days, have they planted more or less than twelve hundred seedlings? Many people say **less**, or about the same. Twelve days at around a hundred seedlings sounds like twelve hundred. Let's find out, and see how arithmetic sequences model change like this.

Visual: opens on f03's last frame exactly (f03 Revision 2 scene 14: the painted hillside strip `ma12-hillside-strip-v1.png` across the lower half with 12 coded day tabs "day 1" to "day 12"; the painted tube seedling `ma12-tube-seedling-v1.png` (about 44 px tall) planted on the slope below days 1 to 3 (5, 8 and 11 seedlings, one per 10 planted); blue day bars "50", "80", "110" with amber "+30" arcs; "?" over days 4 to 12; the dashed ink line "1,200 in total?" across the empty teal total column at the right; chips "Next: more or less than 1,200?" and "?"). Heading writes on: "How do arithmetic sequences model linear change?" as the chips fade. On "less" a pencil-grey guess chip "12 × about 100 ≈ 1,200" appears beside the total column (hand tag "guess") and stays through scene 3.

### 2. spotting an arithmetic model
> First, why is this arithmetic? Each day's planting is thirty seedlings more than the day before. When a fixed amount is added each period, the amounts make an arithmetic sequence. So a sub n is the number planted on day n. The first term, a, is fifty seedlings, the common difference, d, is thirty, and n counts the **days**. If the change were a fixed percentage instead, like three per cent more each day, the steps themselves would grow. That's a geometric sequence, and it's coming **soon**.

Visual: camera continue on the hillside. The three "+30" arcs glow. Hand tag "fixed amount each period → arithmetic". On "a sub n" a label under the tabs "aₙ: seedlings planted on day n"; a givens card writes in the right column (44 px): "a = 50 seedlings, d = 30 a day, n = day number"; on "days" the tab labels' numbers 1 to 12 glow grey ink. On "fixed percentage" a small side strip slides in: bars growing by 3% a day with arcs "+3%" whose steps (grey "+1.5", "+1.55", …) grow slightly, hand tag "growing steps: not arithmetic"; on "soon" a chip "Later: geometric sequences", and the side strip fades.

### 3. one day, or the total?
> Now choose the right formula. One day's planting is a single term. On day twelve, it's fifty plus eleven lots of thirty, which is three hundred and eighty **seedlings**. But the question asks for the total over all twelve days, and that's a partial sum, S twelve. It's six, times fifty plus three hundred and eighty, which is two thousand five hundred and eighty **seedlings**. That's more than double the guess. The guess forgot that the later days are much bigger than a hundred.

Visual: the planting simulation (simulation 1, the lesson's main live simulation), camera continue. Rule chips at the top of the right column (44 px): "one day: aₙ = a + (n − 1)d" and "total: Sₙ = (n/2)(a + aₙ)". On "a single term" the day 12 tab's "?" becomes a bar; row "a₁₂ = 50 + 11 × 30"; on the first "seedlings" "= 380" and the day 12 bar rises to its height, towering over the first bars. On "partial sum" a day slider runs from day 4 to day 12 (about 4 s): each day's bar rises (grey labels 140 to 350), that day's seedlings appear on the hillside (one painted seedling per 10 planted, about 44 px tall, filling the slope in rows; 258 by day 12), and the teal total column climbs with `LiveReadoutBoard` (52 px) "day n" (grey ink), "planted today aₙ" (blue), "total Sₙ" (teal); the column crosses the 1,200 line on day 8 (readout "1,240", hand tag "past 1,200 already on day 8"). Row "S₁₂ = (12/2)(50 + 380) = 6 × 430"; on the second "seedlings" green framed "S₁₂ = 2,580", the column far above the 1,200 line. On "more than double" the guess chip is crossed in red (hand caption "later days are far above 100"); a dashed ink 100 line across the bars shows that ten of the twelve days are above it.

### 4. linear terms, curving totals
> Look at the two graphs. Each day's planting goes up by the same thirty seedlings, so the daily amounts lie on a straight line. a sub n is thirty n plus twenty, a linear function of the day number. That's what linear growth means: the same change in every period. But the running total adds a bigger amount each day, so its graph bends **upward**. The totals grow faster and faster, even though each day's planting only grows by thirty.

Visual: clear change to a `TermPlot` with two series (about 1,200 × 720 px, solid frame and axes from the first frame): blue points aₙ for n = 1 to 12 on a dashed ink line (right-hand blue axis, 0 to 400 seedlings), teal points Sₙ (left-hand axis, 0 to 2,700). The day slider replays days 1 to 12 at the left edge (a small hillside, about 420 px) while each day's two points appear. On "straight line" the amber run-1, rise-30 steps draw between the blue points; row (52 px) "aₙ = 30n + 20: linear in n (time)". On "linear growth means" a hand tag "same change every period". On "upward" the teal points build, each a little higher above the last, with the gaps between consecutive teal points labelled grey for the first three and the last ("+80", "+110", "+140", …, "+380"); the teal points curve upward. On the last sentence both series pulse, hand tags "terms: +30 each day" and "totals: bigger jumps each day".

### 5. worked example: a theme park
> Here's a bigger model. A new theme park has sixty-two thousand visitors in its first year, and three thousand five hundred more each year after that. Its visitors in year n are sixty-two thousand, plus n minus one increases, because the first year has no increase yet. That simplifies to three thousand five hundred n, plus fifty-eight thousand five hundred. Over the first ten years, the total is S ten. That's five, times one hundred and twenty-four thousand, plus nine increases. So it's five times one hundred and fifty-five thousand five hundred, which is seven hundred and seventy-seven thousand five hundred **visitors**.

Visual: clear change to the g01 layout. Task strip: "(a) Write an expression for the visitors in year n. (b) Find the total number of visitors over the first 10 years." (site Problem 3 (a), (b), numbers unchanged; context changed, see Decisions). Givens card (with units): "first year: 62,000 visitors (blue); increase: 3,500 visitors each year (amber)". A `PeriodTimeline` of year tabs 1 to 5 and "…": blue bars 62,000, 65,500, 69,000, …; year 1 has no arc before it, hand tag "no increase yet"; amber "+3,500" arcs between the others. Rows at 52 px: "aₙ = 62 000 + 3500(n − 1)"; "= 3500n + 58 500". Then (b): "S₁₀ = (10/2)[2 × 62 000 + 9 × 3500]"; "= 5(124 000 + 31 500)"; "= 5 × 155 500"; on "visitors" green framed "777 500 visitors".

### 6. worked example: the first year over a target
> In which year do its visitors first go over one hundred thousand? Set the formula above one hundred thousand. Then three thousand five hundred n is more than forty-one thousand five hundred, so n is more than about eleven point eight **six**. Years are whole numbers, so it's year twelve. Check both sides. Year eleven has ninety-seven thousand visitors, and year twelve has one hundred thousand five **hundred**. Notice that year twelve comes after eleven increases, not twelve.

Visual: camera continue (same givens; the (a) expression stays bright, the (b) rows dim). Task strip part (c): "In which year do the visitors first exceed 100,000?" Rows at 52 px: "3500n + 58 500 > 100 000"; "3500n > 41 500"; on "six" "n > 83/7" with a grey "≈ 11.86". A number line with n = 11, 11.86 (dashed marker) and 12; green framed "year 12". On "Check both sides" two blue bars against a dashed ink 100,000 line: "year 11: 97,000" (below) and, on "hundred", "year 12: 100,500" (above). On the last sentence a `StepCounter` bracket over the year strip: "year 12: 11 increases"; a red slip "12 increases" writes small and is crossed, silent.

### 7. decay: where the model stops
> Arithmetic models can go down, too. A new machine makes nine hundred parts in its first week, and fifteen fewer parts each week after that. Here d is minus fifteen, so its output in week n is nine hundred and fifteen, minus fifteen n. That reaches zero in week **sixty-one**. After that, the formula gives negative parts, which can't happen, so the model only works up to there. How many parts does it make before its output reaches zero? That's the first sixty weeks: thirty, times nine hundred plus fifteen, which is twenty-seven thousand, four hundred and **fifty**.

Visual: clear change (new case, g01 layout). Task strip: "How many parts does the machine make before its weekly output reaches zero?" (original). Givens card: "week 1: 900 parts; 15 fewer each week (d = −15)". Row at 52 px "aₙ = 900 − 15(n − 1) = 915 − 15n". A `TermPlot` (Revision 1 window, note i): blue falling points every 5 weeks with a dashed ink guide line and a dashed ink y = 0; `LiveReadoutBoard` "week n" and "output aₙ" (52 px) runs as a marker slides down the points; on "sixty-one" the point (61, 0) is ringed, row "915 − 15n = 0 at n = 61". On "negative parts" the guide line continues below zero in grey with two grey points (62, −15) and (63, −30) crossed in red, hand tag "model stops at week 61". On "first sixty weeks" weeks 1 to 60 tint teal; rows "S₆₀ = (60/2)(900 + 15)"; "= 30 × 915"; on "fifty" green framed "27 450 parts".

### 8. in year n, or after n years?
> Watch the wording about time. A young tree is one hundred and twenty centimetres tall when it's planted, and it grows forty-five centimetres each year. How tall is it after six years? Here the starting height is at time zero, before any year has passed. After one year, there's one year of growth. After six years, there are six. So the height is one hundred and twenty, plus six lots of forty-five, which is three hundred and ninety **centimetres**. As a sequence that starts at the planting height, that's the seventh term, not the sixth. So, in year n means n minus one changes, but after n years means n **changes**.

Visual: clear change (new case, g01 layout). Task strip: "A young tree is 120 cm tall when planted and grows 45 cm each year. How tall is it after 6 years?" (original). Givens card: "planted (t = 0): 120 cm; +45 cm each year". Left, the tree growth simulation (simulation 2): the painted young gum `ma12-young-gum-tree-v1.png` standing on a strip of the hillside beside a coded height scale 0 to 420 cm (1.6 px per cm), drawn at 120 cm tall at t = 0; a time slider steps "t = 0 (planted)", "after 1 year", …, "after 6 years" and the tree grows to each height (uniform scale from its base; the plate's aspect never changes), with `LiveReadoutBoard` "years t" (grey ink) and "height (cm)" (blue). On "one year of growth" one amber "+45" arc from t = 0 to t = 1; on "there are six" six arcs, counted by a `StepCounter` "1" to "6". Row at 52 px "120 + 6 × 45"; on "centimetres" green framed "390 cm", with a grey "h = 120 + 45t (t in years)". On "seventh term" a `TermLadder` under the scale: cards 120 (n = 1), 165, …, 390 (n = 7), the last ringed, hand tag "7th term: 6 steps"; a red slip "6th term: 345 cm" writes small and is crossed. On "changes" a two-row chip: "in year n: n − 1 changes" and "after n years: n changes", the second row glowing.

### 9. memory aid
> For any of these problems, first find a, d and n, and say what n counts. Then ask one question. Is it one period? Use a sub n. Is it a running total? Use S sub **n**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). The hand-font lines at 60 px: "Find a, d and n. Say what n counts." Under it: "One period: aₙ. Running total: Sₙ." A small icon beside each: one day's blue bar with three seedlings (aₙ) and the teal total column (Sₙ). On "n" the two icons pulse. Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A café sells eighty coffees on its first day, and six more coffees each day after that. How many coffees does it sell in total over its first fifteen days? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A café sells 80 coffees on its first day, and 6 more coffees each day after that. How many coffees does it sell in total over its first 15 days?" The full question stays on screen. Picture slot: a coded strip of 15 day tabs with one blue bar "80" over day 1 and "?" over the rest, and an empty teal total column (no other values). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> This is a total, so it's a partial sum. Here a is eighty, d is six and n is fifteen. Day fifteen sells eighty plus fourteen sixes, which is one hundred and **sixty-four**. So the total is fifteen over two, times eighty plus one hundred and sixty-four, which is one thousand eight hundred and **thirty**. One hundred and sixty-four is wrong. That's just day fifteen's sales, not the **total**.

Visual: the card shrinks to the top (30 px); "in total" underlined first, then "80", "6 more" and "15 days". `GivensStrip`: "a = 80", "d = 6", "n = 15". Row at 52 px "a₁₅ = 80 + 14 × 6 = 164" (on "sixty-four"). Row "S₁₅ = (15/2)(80 + 164) = 7.5 × 244"; on "thirty" green framed "1830 coffees". On "total" a red slip "164 coffees" writes and is crossed (hand caption "day 15 only, not the total"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. On the first day of winter, a woodpile holds one hundred and eighty logs. Each day after that, it holds four fewer logs than the day before. On which day does it first hold fewer than one hundred logs? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "On the first day of winter, a woodpile holds 180 logs. Each day after that, it holds 4 fewer logs than the day before. On which day does it first hold fewer than 100 logs?" The full question stays on screen. Picture slot: a coded day strip with a blue bar "180" over day 1, "?" over later days, and a dashed ink line "100". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> Day n comes after n minus one drops, so the pile holds one hundred and eighty, minus four lots of n minus one. Set that below one hundred. Then n minus one is more than twenty, so n is more than **twenty-one**. The first day below is day twenty-two, with ninety-six logs. Day twenty-one is wrong. On that day the pile holds exactly one hundred, not **fewer**.

Visual: the card shrinks to the top; "first day", "180 logs", "4 fewer" and "fewer than 100" underlined as used. `GivensStrip`: "day 1: 180", "−4 each day", "below 100". Row at 52 px "day n: 180 − 4(n − 1)" with a grey tag "day 1: no drop yet". Rows "180 − 4(n − 1) < 100"; "n − 1 > 20"; on "twenty-one" "n > 21". Green framed "day 22 (96 logs)". On "fewer" a red slip "day 21" writes and is crossed (hand caption "exactly 100 logs: not fewer"). Hold about 1 s.

### 14. handoff
> So an arithmetic sequence models a quantity that changes by the same amount each period. Its terms lie on a straight line, and S sub n gives the running total. But what if each step multiplies instead? Two, four, eight, sixteen. Each term is double the one **before**.

Visual: the memory-aid icons and the plot motif show small at the top (30 px), then fade on "But what if". Board clears to a `TermLadder`: 2, 4, 8, 16 (52 px; positions n = 1 to 4 in grey ink). Grey difference labels "+2", "+4", "+8" appear under the gaps (unequal; hand tag "not the same step"); on "before" amber "×2" arcs draw over the gaps, one after another. A chip "Next: the same ratio every time" and a "?" chip. No formula, no "geometric" word. Hold about 2 s. This is f05's opening frame (unchanged from Revision 1); scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Same amount each period: arithmetic model.
- a = first value, d = change, n = period.
- One period: aₙ. Running total: Sₙ.
- In year n: n − 1 changes. After n years: n.
- A decay model stops when it reaches 0.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Find a, d and n. Say what n counts. One period: aₙ. Running total: Sₙ.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 14's frame exactly (2, 4, 8, 16 with unequal "+2", "+4", "+8" labels, the "×2" arcs, "Next: the same ratio every time" and "?"). This is the final frame and f05's opening frame.

## Teaching checks

- **Does it explain causes?** Why the planting is arithmetic: a fixed extra amount each day (2). Why the total beats 1,200: later days are far above 100 (3). Why the terms make a line and the totals curve: equal steps against growing additions (4). Why year n has n − 1 increases: the first year has none (5, 6). Why year 12: the first whole year past 11.86, checked both sides (6). Why the machine model stops: output cannot be negative (7). Why the tree's height after 6 years is the 7th term: time zero is the first value (8).
- **Misconceptions addressed:** "about 100 a day" (hook, 3); aₙ confused with Sₙ (3; A1 crossed); percentage change treated as arithmetic (2); n raises in year n (5, 6, 8); a model valid for every n (7); boundary counted as below (A2 crossed); "after n years" as the nth term (8).
- **One idea at a time:** one model per scene from 5 on (6 continues 5's model with one new question); rows replace each other with only the needed results kept; the plot appears only where it carries the cause (4, 7).
- **Video makes it easier:** the student watches the later bars tower over 100 and the hillside fill as the total passes the 1,200 line on day 8 (3), sees equal steps against growing jumps (4), sees the guide line continue below zero and the impossible points crossed (7), and watches the tree grow six times from time zero to land on the seventh card (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given (with units) visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 30 s and 28 s (scenes 11 and 13; at the top of the brief-feedback range because each names one model choice before the arithmetic).
- **Avoided double teaching:** f02's aₙ and f03's two Sₙ forms appear as rule chips and are used, not re-derived; Year 11 linear functions in one phrase.
- **Syllabus coverage:** `ci01ed1e3f` (2 to 8; A1 growth with a total, A2 decay with a threshold; key notes 1 to 4).
- **Out of scope by design:** geometric models; interest, loans and annuities; continuous models.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A café sells 80 coffees on its first day, and 6 more coffees each day after that. How many coffees does it sell in total over its first 15 days?"
Model answer: an AP with a = 80, d = 6, n = 15; a₁₅ = 80 + 14 × 6 = 164; S₁₅ = (15/2)(80 + 164) = 1830 coffees (or (15/2)[160 + 14 × 6] = 1830). Classic mistake (crossed): "164" (day 15's sales).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "On the first day of winter, a woodpile holds 180 logs. Each day after that, it holds 4 fewer logs than the day before. On which day does it first hold fewer than 100 logs?" (Revision 2; was ski-resort snow, same numbers.)
Model answer: on day n the pile holds 180 − 4(n − 1) logs; 180 − 4(n − 1) < 100 gives n − 1 > 20, so n > 21; the first whole day is day 22 (96 logs; day 21 is exactly 100). Classic mistake (crossed): "Day 21".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Planting crew (Revision 2; site savings numbers) | 50, 80, 110, … (+30 seedlings a day); a₁₂ = 380; S₁₂ = 6 × 430 = 2,580; guess 1,200; first total over 1,200: S₈ = 1,240 (S₇ = 980); days above 100: 10 of 12; sprites one per 10 (258) | 1 to 3 |
| Daily bars | days 4 to 11: 140, 170, 200, 230, 260, 290, 320, 350 | 3 |
| Graphs | aₙ = 30n + 20; Sₙ = 15n² + 35n: 50, 130, 240, 380, 550, 750, 980, 1240, 1530, 1850, 2200, 2580; jumps +80, +110, +140, …, +380 | 4 |
| Percentage side strip | 50 growing by 3% a day: grey steps +1.5, +1.55 | 2 |
| Theme park (Revision 2; site tradie numbers) | aₙ = 3500n + 58 500; S₁₀ = 5 × 155 500 = 777,500 visitors; n > 83/7 ≈ 11.86; a₁₁ = 97,000, a₁₂ = 100,500 | 5, 6 |
| Machine | aₙ = 915 − 15n; zero at n = 61; S₆₀ = 30 × 915 = 27,450 parts | 7 |
| Young tree (Revision 2; was the car) | 120 + 6 × 45 = 390 cm; 7th term of 120, 165, …; 6th term 345 (crossed) | 8 |
| A1 | a₁₅ = 164; S₁₅ = 1830; crossed 164 | 10, 11 |
| A2 (woodpile) | 180 − 4(n − 1) < 100: n > 21, day 22 (96 logs); crossed day 21 (100 logs) | 12, 13 |
| Handoff | 2, 4, 8, 16; differences +2, +4, +8; ×2 | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 50 + 30(n − 1) = 30n + 20; n = 1 to 12: 50, 80, …, 380; Sₙ = 15n² + 35n, S₁₂ = 2580; jumps Sₙ − Sₙ₋₁ = aₙ.
- 50 × 1.03 = 51.50 (step +1.50); 51.50 × 1.03 = 53.045 (step +1.545, shown "+$1.55").
- 62 000 + 3500(n − 1) = 3500n + 58 500; S₁₀ = 777 500; 41 500/3500 = 83/7 = 11.857…; a₁₁ = 97 000, a₁₂ = 100 500.
- 900 − 15(n − 1) = 915 − 15n; zero at 61; S₆₀ = 27 450 = S₆₁.
- Revision 2 (Python, 7 Nov): 120 + 6 × 45 = 390; 120 + 5 × 45 = 345; S₇ = 980, S₈ = 1240 for 50 + 30(n − 1); 2580/10 = 258 sprites.
- A1: 80 + 14 × 6 = 164; 7.5 × 244 = 1830. A2: 180 − 4 × 20 = 100 (day 21), 180 − 4 × 21 = 96 (day 22).
- 2, 4, 8, 16: differences 2, 4, 8; ratios 2.

## Memory aid check

- **"Find a, d and n. Say what n counts. One period: aₙ. Running total: Sₙ."** Original. Meaning, as said in scene 9: set up the model by naming the first value, the change per period and what the period number means, then match the question to a term or a partial sum. Assumptions checked: the quantity changes by a fixed amount per period (an AP; key note 1 says a percentage change is not arithmetic); "what n counts" carries the timing rule of scene 8 (in year n against after n years); "running total" means a sum of the period values, which is meaningful for sales, savings, earnings and parts but not for a level such as snow depth or a car's value (A2 and scene 8 use aₙ only, as the aid's first branch). It helps a new case: "total rent paid in the first 3 years if rent rises $20 a week each year" needs Sₙ over years. Introduced after the cause and the uses (2 to 8).
- **Considered, not used:** "AP: add; GP: multiply" (f05's job); a table of keywords ("total", "altogether") (keywords without the meaning).

## Narration length estimate

Revision 2 (7 Nov 2026), counted by script with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,750 characters**, 15 scene headings (Revision 1, recounted the same way: 5,708). Characters per scene (in order): 438, 487, 473, 431, 624, 471, 561, 612, 162, 188, 380, 233, 351, 264, 75.

At 13.3 characters per second the speech is about 432 s. Holds and settling: two 10 s countdowns 20 s; short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the planting slider (3), the plot replay (4), the machine marker (7) and the growing tree (8) 25 s; the key-notes scene 45 s (about 96 s in all). Total **about 528 s (8 min 48 s)**, inside the 5,500 to 7,000 character band and 42 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 4's last sentence (keep the two hand tags); scene 6's last sentence (keep the `StepCounter` bracket). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12f04` (route math-a12-f04). Suggested explainer folder `src/explainer/lessons/math-a12-f04` and build folder `docs/production/claude-pm/lessons/m-a12f04` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, arithmetic-model, period-or-total, linear-and-curving, theme-park, first-year-over, decay-end, timing-of-n, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f03's last frame continues into scene 1 (camera continue, same strip); 1 to 2 to 3 camera continue; 3 to 4 clear change (bars to points); 4 to 5 clear change (new case); 5 to 6 camera continue (same model); 6 to 7 and 7 to 8 clear changes; 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12f04-learning-review.md`, `science_check` = `checks/m-a12f04-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `biology/m7-banksia-seedling-healthy-v1.png` (a bare-root seedling showing its roots; crews plant tube stock in guards, and roots would read as biology), `biology/y11-mulga-seedling-v1.png` (a seedling in soil, botanical style), `chemistry/g1-tree-v1.png` and `biology/y11-hollow-tree-v1.png` (mature trees; too old for a young planted tree), `physics/phys-y11-ground-strip-v1.png` (a flat ground strip; no slope). None shows a planting site or a guarded seedling.

Need (painted, new; see the Codex asset brief): `ma12-hillside-strip-v1.png`, `ma12-tube-seedling-v1.png` (both also f03's final frame), `ma12-young-gum-tree-v1.png`.

Coded (studio kit): day tabs, bars, arcs and the total column, readouts, plots, timelines, the cm scale, ladders, givens cards, answer frames, slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `GrowthBars`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`; `TermLadder`, `PartialSumStack` (f01), `TermPlot`, `StepCounter` (f02).

Additions the build needs:
1. **`PeriodTimeline`** (the Revision 1 contract below is kept): period tabs with bars, step arcs and "?" slots, a total column, and a time mode with a "t = 0" marker before the first tab.
2. **A sprite field** (small, extends `GrowthField`): places a plate sprite at native aspect in rows over a region, a given number per period, in order, so the hillside fills day by day (258 sprites by day 12).
3. **A growing plate** (small): a plate drawn at a height given by a value (uniform scale from a base point, aspect fixed), driven by a slider, beside a coded scale (the tree in scene 8).

## Codex asset brief (Maths A12 F04, a tree-planting crew on a hillside)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f04.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style (match `biology/b4-car-yellow-v1.png` and `physics/phys-y11-lift-car-v1.png` in palette, line weight and finish); at least 8 per cent clear margin unless a plate is stated to be a tile; no text, labels, letters, numbers, logos, signs, people, hands, faces, tools in use, sky, glow or ground shadow beyond the plate's own ground patch. Never stretch to fit; keep the native aspect ratio.

1. `ma12-hillside-strip-v1.png` (2400 × 600 px): a gently sloping bare hillside seen from the side, rising slightly from left to right: dry pasture grass with patches of bare, freshly prepared soil where seedlings will go, a few scattered rocks, **tileable horizontally** (left and right edges join seamlessly at the same height; exempt from the side margins); transparent above the ground with at least 8 per cent clear margin there. No trees, fences, people or tools. Codex reports, in file pixels, the ground line's y at x = 0, 600, 1200, 1800 and 2400 (the build plants seedlings on it).
2. `ma12-tube-seedling-v1.png` (400 × 800 px, portrait): one young native tube-stock seedling (a small eucalypt with a few narrow leaves) just planted, inside a translucent pale green plastic tree guard held by three thin timber stakes, with a small mound of fresh soil at its base. Seen from the side. No labels on the guard. Codex reports the base point (soil centre) and the plate's top y in file pixels.
3. `ma12-young-gum-tree-v1.png` (1000 × 2000 px, portrait): a young eucalypt sapling about two years old, seen from the side: a slim pale trunk, an open crown of narrow grey-green leaves, tied to one timber stake, with a small patch of soil at its base; drawn so that it reads as the same kind of tree at any size (the build scales it uniformly from 120 cm to 390 cm tall). Codex reports the base point and the top of the crown in file pixels.

Report inspection on the paper background (`#f6f1e7`): plate 1 as a two-copy tiling check at 1,800 px wide; plate 2 at 44 px and 140 px tall (it must still read as a guarded seedling at 44 px); plate 3 at 190 px and 620 px tall; plus the alpha checks and anchor points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f04-provenance.json`.

### Coded part contract (Revision 1, kept)

**`PeriodTimeline`.** A row of period tabs ("day 1", "year 1", or "t = 0", "after 1 year" in time mode) along a baseline, with optional bars (heights scaled by `unit`), "?" slots, step arcs (amber, labelled "+30", "×3", "−$600"), a `StepCounter` bracket, a total column (teal) beside the last tab, and a dashed reference line with a label. Used here in scenes 1 to 3, 5, 6 and 8, and in f07 to f09 in time mode.

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

A tree-planting crew plants 50 seedlings, then 80, then 110, adding 30 more each day. After twelve days, have they planted more or less than 1,200? It is 2,580, because the later days are far bigger than 100. See how a fixed change per period makes an arithmetic model, when a question wants one period (aₙ) or the running total (Sₙ), why the terms lie on a straight line while the totals curve upward, how to model a theme park's yearly visitors and find the first year over 100,000, where a decay model stops, and why "in year n" and "after n years" differ by one. A memory aid: find a, d and n, say what n counts, then choose aₙ or Sₙ. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the formulas for arithmetic sequences and their partial sums to model and solve growth and decay problems involving a quantity that is a linear function of time"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Arithmetic sequences and why the arithmetic sum formulas work (previous videos). Next: Geometric sequences.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. Feedback length (root).** Feedback 1 and 2 run about 30 s and 28 s, at the top of the 15 to 30 s range, because each names the model choice (total; n − 1 drops) before the arithmetic. If root wants them shorter, cut "This is a total, so it's a partial sum." from feedback 1 (keep the underline on "in total") and "Set that below one hundred." from feedback 2 (keep the row); about −80 characters, still above the floor.
- **2. Coded contexts, no plates (root; superseded by Revision 2: painted plates carry the planting crew and the tree; the ski resort and the car are replaced).** The café, ski resort, machine and car appear only as words, timelines and graphs (programme decision 5; owner rule against clip-art coded objects). If root wants small context plates (a coffee cup, a snow gauge), they would be Codex painted plates; none is requested because the timeline carries the cause.
- **3. "Quadratic" for the totals (learning review).** The site says the sum "grows quadratically"; the video says "bends upward" and "faster and faster" (author note b). Confirm, or add "a quadratic in n" as a grey tag on the teal series (no speech change).
- **4. Car value (maths check; Revision 2: the same timing idea now uses the young tree, h = 120 + 45t at t = 6, the 7th term).** "After six years" is a linear function of time V = 28 000 − 2500t evaluated at t = 6; the ladder view calls $13,000 the 7th term of a sequence that starts at the new price. Confirm the wording "As a sequence that starts at the new price, that's the seventh term" is clear and correct.
- **5. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f02, f03 and Year 11 linear functions; check that the hook's guess is crossed by visible evidence; that aₙ against Sₙ is decided by the question's wording; that the two-series plot is readable with its two axes; that "the first year has no raise yet" is said before n − 1 is used; that the decay end point is a necessary condition, not a caveat; that the timing scene clearly separates "in year n" and "after n years"; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The rising bars, the stack passing $1,200, the growing jumps and the time-zero arcs carry the explanation; judge them at playback speed in the voiced preview. Every bar, point and readout must be computed from the same functions as the displayed expressions.
- The opening frame is f03's scene 15 (same designer, 2 Nov). If f03's handoff changes in review, change scene 1's first visual to match. Scene 14 must match f05's opening when f05 is designed.

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the syllabus point, the learner question, every number, the cause chain and the memory aid are unchanged. Programme decision 5 is withdrawn by the visual standard; the Revision 1 lines that say "no painted plates" are superseded.

- **Anchor and why:** a volunteer tree-planting crew (50, 80, 110, … seedlings a day; the site's savings numbers unchanged). Each day's bar and the filling hillside put one period and the running total side by side, which is the lesson's main choice. Not money: money is kept for f08 and the finance strand.
- **Simulations:** the planting crew (day slider, rising bars, seedlings filling the slope, total column with "day n", "aₙ", "Sₙ" readouts; it passes 1,200 on day 8); the two-series plot driven by the same slider; the machine's output marker stopping at week 61; the growing tree with "years" and "height" readouts.
- **Colour roles:** one period's value blue; change per period amber; running totals teal; period number and time grey ink; targets dashed ink; answer green; mistake red.
- **Plates:** new `ma12-hillside-strip-v1.png`, `ma12-tube-seedling-v1.png` (both also f03's final frame) and `ma12-young-gum-tree-v1.png`. No reused plates.
- **Narration changes (not voiced):** scenes 1 to 4 (seedlings for dollars), 5 and 6 (theme-park visitors for the tradie's salary; same numbers), 8 (a young tree for Revision 1's car; same "after n years" idea), 12 and 13 (a woodpile for the ski-resort snow; same numbers). Scenes 7, 9 to 11, 14 and 15 keep their Revision 1 text. Root to confirm the context changes in Decisions (numbers unchanged).
- **Counts:** 5,708 → 5,750 characters (both as the sum of scene strings; Revision 1 stated 5,722 with joining spaces); about 530 s (old 60 s notes hold) → about 528 s with holds (notes 45 s), 42 s under the cap.
- **Key notes:** five short one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on f03 Revision 2's planting strip (edited together); the final frame (2, 4, 8, 16 with "×2" arcs) is unchanged and matches f05's opening.
- **Kit additions:** `PeriodTimeline` (Revision 1 contract); a sprite field on `GrowthField`; a growing-plate helper (uniform scale from a base point).
