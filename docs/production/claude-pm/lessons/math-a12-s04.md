# Maths A12 S04: Why are continuous probabilities intervals rather than point masses? Histograms, why one exact value has probability 0, and the cumulative distribution function F(x) = P(X ≤ x) (design)

Status: Revision 4 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 3 (5 Nov 2026, brief 171 fixes), Revision 2 (4 Nov, brief 162) and Revision 1 (3 Nov). Not voiced (no `math-a12-s04/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s04.md`).

Narration 6,196 characters, 18 scene headings, about 551 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: fourth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 56) and the first on continuous random variables, after s03 (expectation and variance) and before s05 (the density f(x) = F′(x)). Revision 4 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (sprinters' reaction times at a school athletics carnival, timed by sensors in the starting blocks); histograms, the shrinking window, the CDF, graphs and algebra stay coded. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson08.sa.html` (Continuous Random Variables and the CDF), SHA256 `e811956fdfcc15baf12fc83128eb595d0470fb5a2ba392a71f64b75e6fd883dc`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded below; Codex confirms them against the live site. Route entry: none yet (draft in Decisions).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; painted plates for real objects, coded graphs and algebra; no people, hands or faces (the sprinters are never drawn: only their blocks and the timing display); one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in the feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Exact values in the algebra (4/9, 1/3, 21/32), decimals for data or grey readouts; every CDF stated with its interval and flat pieces.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cibf81b169`: "Estimate the probability that a continuous random variable falls in some interval using relative frequencies and histograms obtained from data"
- `ci04530a48`: "Recognise that the probability of a particular value for a continuous random variable is 0 and hence that P(a<X<b)=P(a≤X<b)=P(a<X≤b)=P(a≤X≤b) since P(X=a)=P(X=b)=0 when X is a continuous random variable"
- `ci9dad7e9e`: "Define the cumulative distribution function (CDF), F(x) , as the probability of a random variable, X , having values less than or equal to x , so F(x)=P(X≤x) and P(a≤x≤b)=F(b)-F(a)"
- `cicb65fc88`: "Recognise that the cumulative distribution function, F(x) , is non-decreasing for all x in its domain, and graph cumulative distribution functions, given a formula for F(x) , with and without graphing applications"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s03's handoff frame, unchanged (64 thin bars across a continuous axis 0 to 4, chip "Next: what if X can take any value in an interval?" and "?"; s03 Revision 3 now says "like a sprinter's reaction time"). Names a continuous random variable in plain words; groups 200 reaction times into five classes (site card 02, numbers unchanged: 20, 50, 70, 40, 20) and estimates interval probabilities from relative frequencies, including a range that cuts a class with a stated even-spread assumption (`cibf81b169`); shrinks an interval about 0.35 to show why one exact value has probability 0, and why endpoints do not matter, with the discrete die contrast (`ci04530a48`); defines the CDF as a running total, first from the histogram, then the subtraction F(b) − F(a) and the complement 1 − F(a) (`ci9dad7e9e`); explains why F never decreases, runs from 0 to 1 and has no jumps for a continuous variable, then checks and graphs F(x) = x²/9 on [0, 3] by hand and with a graphing app (site problems 1 and 2, numbers unchanged) (`cicb65fc88`). Stops at the CDF. Not taught: the density f(x) = F′(x) (s05); mode, median and quartiles (s06); the continuous uniform model (s07); continuous mean and variance (s08); mixed variables with a jump.

## Decisions

### Revision 4 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: sprinters' reaction times at a school athletics carnival (painted plates).** The site's data are reaction times (card 02: 200 times from 0.1 to 0.6 s); Revision 4 gives them an everyday home: the time from the start signal until a sprinter pushes off, measured by sensors in the starting blocks and shown on a trackside display. The display's digits are the hook ("0.35, then 0.3517 and more digits"): a measured time is a continuous quantity, so no exact time repeats, and only intervals carry probability. Sport is on the owner's everyday list; athletics is not used in `checks/root-decisions-maths-redesign.md` (d15's skateboard and f's bouncing ball are different contexts), and buses are kept for s07's waiting times.
- **Idealising assumptions (author notes, not learner copy).** (i) The 200 times are the site's illustrative data, told as a carnival's heats; no claim about real sprinters. (ii) Recorded times are rounded by the instrument; the ideal continuous model has exact repeats with probability 0 (the Revision 3 tag stays). (iii) Real competition rules call a reaction under 0.1 s a false start; the site's classes start at 0.1, which fits, but this is not said (author note only).
- **Join with s03 (fixed).** Scene 1 opens on s03's thin-bars frame exactly.
- **Join with s05 (changed colour only).** Scene 17's frame is unchanged in content (F(x) = x²/9 on x from −1 to 4 with its flat pieces, a gentle tangent stub at 0.5 and a steep one at 2.5, chips "Next: how steeply F climbs" and "?"), but F is now violet (the CDF's fixed role) instead of teal; s05 Revision 3 opens on it.
- **Simulations (standard item 3).**
  1. `HeatsToHistogram` (scene 2; `ClassHistogram` with `dropFrom`): heats run one after another on a small trackside readout ("heat 1 of 25", 8 lanes each); each heat's eight reaction times appear as dots on the time axis at their stored positions, then the dots drop into their classes and the five blue bars grow live to 20, 50, 70, 40, 20, with a live "times recorded" readout reaching 200.
  2. `ShrinkingWindow` (scenes 5, 6): an amber slice about 0.35 narrows from width 0.1 to 0.01 to 0.001 to a line, with "width" and "probability" readouts drawn from the same numbers.
  3. `CdfTracer` (scenes 8, 9; `CumulativeBuild` with an event bracket): a marker sweeps x from 0 to 0.7; the histogram's area left of the marker shades amber while a violet dot draws F live, with a readout "F(x) = P(X ≤ x)" that only ever climbs.
- **Colour roles (fixed for the whole video).**
  - **data and histogram bars: blue** (`MATH_BLUE`);
  - **the interval being asked about, slices and subtraction brackets: amber** (`MATH_AMBER`);
  - **the CDF F: violet** (`MATH_GRADIENT`), the strand's role for F through s05 and s06;
  - **the even-spread assumption: grey dashed fill with a grey tag**;
  - **the discrete die (contrast only): teal**, as in s01 to s03;
  - **answer: green**; **mistake: red**, crossed slips only; ink algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. `HandTag`: "more digits keep coming", "assume: spread evenly", "÷ 10", "width 0 → probability 0", "0 ≠ impossible", "ends carry nothing", "running total", "only climbs", "not straight". The starting-blocks plate is at least 300 px tall when it carries the idea.
- **Stage changes (standard item 2):** the blocks and the display's growing digits (1); heats dropping into the histogram (2); interval estimates on it (3, 4); the zoomed shrinking window (5, 6); four equal forms and the die (7); the CDF tracer (8, 9); the formula CDF board with the graphing app (10, 11); the framed card (12); question cards with pictures (13 to 16); the x²/9 handoff (17); key notes (18).
- **Worked examples (g01 layout, standard item 7).** Scene 4 (task strip "Estimate P(T < 0.25)", equation strip "relative frequency = count ÷ 200", givens "class 0.2 to 0.3: 50 times", "below 0.2: 20 times", a green framed "0.225", the crossed slip "(20 + 50)/200 = 0.35" captioned "counts the whole class"); scenes 10 and 11 (task strip, the piecewise F as givens, rows at 52 px, green framed "1/3" and "5/9", the crossed straight chord). Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Points carry nothing; intervals carry the probability." with the key "Between a and b: F(bigger) − F(smaller)" and a badge of the display "0.3517…" over a short amber interval.
- **Visual surprise (standard item 9).** The display keeps adding digits (1); the slice shrinks to a line and its probability readout lands on exactly 0 (5); the CDF tracer's readout never once goes down as the marker sweeps (9).
- **Question cards (full text and a picture).** A1: the worded question and its table, with empty touching-bar axes from 100 to 300 g (no bars, no split line); A2: the worded question with empty axes x −0.5 to 2.5, y 0 to 1.2 (no curve, no values).
- **Narration (not voiced).** Scene 1 moves the hook to the carnival's starting blocks (410 to 448); scene 2 names the carnival's heats (526 to 527); scene 2 also drops "not just separate values"; scene 3 drops "Now a useful question." (402 to 379); scene 4 drops "It's part of the answer." (420 to 395); scene 5 drops "Now back to the hook." (508 to 486); scene 7 drops "Less than, or less than or equal to, gives the same answer." (378 to 318); scene 8 drops its spoken complement sentence, which stays on screen and is used aloud in scene 11 (606 to 550); scene 17 drops its first sentence (273 to 187). The other scenes keep their Revision 3 text. These cuts pay for the anchor and bring the video inside the cap with spare.

### Kept from Revisions 1 to 3

- **Learner question kept (outline).** "Why are continuous probabilities intervals rather than point masses?" The answer, built in order: measured values almost never repeat, so we count values in intervals (2); a histogram gives interval estimates (3, 4); shrinking an interval shrinks its probability in step with its width, so a single value gets 0 (5); 0 is not impossible, and only intervals carry probability (6); so endpoints never matter (7); one function, the running total F(x) = P(X ≤ x), holds every interval through one subtraction (8); it never decreases, runs from 0 to 1 and has no jumps (9); a formula CDF is checked and graphed the same way (10, 11).
- **Even-spread assumption kept in learner copy.** Needed for a range that cuts a class (4, A1) and for the shrinking argument from data (5). The exact-value conclusion is stated for the continuous model.
- **CDF from the data first.** Scene 8 builds F as a running total (0.1, 0.35, 0.7, 0.9, 1 at the class ends), joined by straight segments (tagged estimate), so F(0.4) − F(0.2) = 0.6 reproduces scene 3.
- **Non-decreasing as a cause; graphing with and without an app; discrete contrast with s01's die** (4/6 against 2/6).
- **Worked example (site problems 1 and 2, numbers unchanged).** F(x) = 0 for x < 0, x²/9 for 0 ≤ x ≤ 3, 1 for x > 3. Valid: F(0) = 0, F(3) = 1, F′(x) = 2x/9 ≥ 0. P(1 < X ≤ 2) = 1/3; P(X > 2) = 5/9; P(X = 2) = 0.
- **Attempts (original).** (A1) Tomato masses, 400 in four classes (60, 140, 160, 40); P(M ≥ 225) ≈ 0.3. Crossed: "0.5". (A2) F(x) = (x² + 2x)/8 on [0, 2]; P(0.5 ≤ X < 1.5) = 1/2. Crossed: "−1/2".
- **Mistake scene:** none separate. "P(X = 0.35) is small but not zero" (1, 5); "probability 0 means impossible" (6); "endpoints change the answer" (7; feedback 2); "count the whole class" (4, crossed; feedback 1 crossed); "F(a) − F(b)" (12; feedback 2 crossed); "a CDF sketch is a straight line" (10, crossed chord); "forget the flat pieces" (10, key note 5).
- **Site sources used:** lesson 8 cards 02 to 06 and problems 1 to 3, traps 01 to 04. Not used: the site's bus hook (s07 owns buses), Q3 and drill 5 on mixed variables, the site practice questions.
- **Site corrections (for the log):** (1) lesson 8 card 09's "the histogram ... was a picture of [the density] all along" holds only for a density-scaled histogram; (2) Q3 and drill 5 teach mixed variables outside the 2024 points (mark as extension); (3) the "MAV-12-07" and "Module 5" labels are not copied.
- **Entry knowledge (draft route):** s01 (relative frequency, "each trial lands in one place", P(X = x), the fair die); s03 (discrete summaries); d09 (the sign of a derivative); Year 11 complement rule.
- **Learner-visible vocabulary:** continuous random variable (any value in an interval, scene 2); class, histogram (scene 2); cumulative distribution function, CDF (running total, scene 8); non-decreasing (never goes down, scene 9).
- **Draft route entry (for the route file):** id `math-a12-s04`; playlistOrder 56; syllabusActionIds as above; start "s03's handoff: from counting to measuring (sprinters' reaction times)"; stop "Histogram interval estimates with the even-spread assumption; P(X = x) = 0 and equal interval forms; CDF as a running total, F(b) − F(a), 1 − F(a), non-decreasing from 0 to 1, graphed by hand and with an app. No density."; next "math-a12-s05: the density as the steepness of F".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Data (site card 02): classes [0.1, 0.2) to [0.5, 0.6), frequencies 20, 50, 70, 40, 20 (total 200), relative frequencies 0.10, 0.25, 0.35, 0.20, 0.10. P(0.2 ≤ T < 0.4) ≈ 0.6. P(T < 0.25) ≈ 0.225 under even spread.
  (b) Shrinking: within [0.3, 0.4) even spread gives 3.5 per second of width: 0.035 for width 0.01, 0.0035 for 0.001, 0.07 for [0.34, 0.36].
  (c) Running total: F(0.1) = 0, F(0.2) = 0.1, F(0.3) = 0.35, F(0.4) = 0.7, F(0.5) = 0.9, F(0.6) = 1; F(0.25) on the join = 0.225.
  (d) F(x) = x²/9: F(1) = 1/9, F(2) = 4/9, F′(0) = 0 (flat start), curving up more and more steeply.
  (e) Die: P(2 ≤ X ≤ 5) = 4/6, P(2 < X < 5) = 2/6.
  (f) A1: even spread in [200, 250): 80 at or above 225; (80 + 40)/400 = 0.3. A2: G(1.5) = 21/32, G(0.5) = 5/32, difference 1/2; G′(x) = (x + 1)/4 > 0.
  (g) Heats for `HeatsToHistogram`: 25 heats of 8 lanes; the 200 dot positions are stored data (uniform within each class, so the classes hold exactly 20, 50, 70, 40 and 20; seeded once and stored), shown in heat order; the build never regenerates them.
  (h) Pronunciations: "zero point three five"; "F of x"; "x squared over nine"; "four ninths"; "twenty one over thirty two"; "C D F".
  (i) Windows: histogram x 0 to 0.7 s, counts 0 to 80 (relabelled 0 to 0.4); shrinking-window inset x 0.29 to 0.41; running total y 0 to 1.1; x²/9 on x −1 to 4, y −0.2 to 1.2; die bars x 1 to 6, y 0 to 1/4.

Main question: *A sprinter's reaction time can be any value in an interval, so no exact time ever repeats. Why does every single exact value get probability 0, and how do intervals and one running-total function carry all the probability instead?*
Entry knowledge (s01 relative frequency and P(X = x); s03 discrete summaries; d09 sign of a derivative; Year 11 complement rule).
Stops after: interval estimates from a histogram, P(X = x) = 0 and equal interval forms, the CDF, its properties and graph. No density, no area under a density, no quantiles.
Handoff: math-a12-s05: F(x) = x²/9 with a gentle and a steep tangent, "what does the steepness tell us?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): data bars blue; the interval asked about and brackets amber; the CDF violet; the even-spread assumption grey dashed; the die teal; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Screen maths writes P(X = x), P(a ≤ X ≤ b), F(x) = P(X ≤ x).

### 1. hook: exactly 0.35 seconds?
> So far, every random variable counted something. Now X can be any value in an interval, because we measure it. At an athletics carnival, sensors in the starting blocks time each sprinter's reaction to the start signal. One reads zero point three five seconds. But a finer timer shows zero point three five one seven, with more digits after that. So what's the probability that a reaction time is exactly zero point three five seconds? Make a guess.

Visual: opens on s03's final frame exactly (64 thin bars across the continuous axis 0 to 4 tagged "any value in an interval", the chip "Next: what if X can take any value in an interval?" and "?"). On the first sentence a small grey ghost of four separate bars appears, tagged "counts: separate values"; on "measure" the bars and the ghost slide left and fade, and the chip moves to the top right as the scene question. On "athletics carnival" the painted starting blocks on a lane (`ma12-starting-blocks-v1`, 420 px wide) slide in at the left and the painted trackside display (`ma12-timing-display-v1`, 560 px wide, blank face) stands at the right; a coded lane line runs under the blocks. Heading writes on: "Why do continuous probabilities come from intervals?". On "zero point three five seconds" coded digits, 72 px, light the display: "0.35 s". On "zero point three five one seven" the display extends to "0.3517" then a trailing "…" blinks, hand tag "more digits keep coming". On "exactly" a chip "P(T = 0.35 exactly) = ?" and a 3 s prediction ring (no answer shown).

### 2. measured values don't repeat
> Here's an example set of two hundred reaction times, from the carnival's heats. Time is a continuous random variable, which means it can take any value in an interval. For an ideal continuous measurement, exact repeats have probability zero, so counting each value gives just ones. Instead, we group the times into classes, each a tenth of a second wide. Twenty land between zero point one and zero point two seconds, then fifty, seventy, forty and **twenty**. That's a histogram. Its bars touch, because the classes leave no gaps.

Visual: board change to a time axis 0 to 0.7 s (1,200 px wide), the blocks and display small at the top left (280 px). `HeatsToHistogram`: heats flash on the display ("heat 1", "heat 2", ...) and each heat's eight times appear as grey dots at distinct positions along the axis (none stacked), tag "illustrative data: an example set"; a readout (52 px) "times recorded" climbs to 200. On "ideal continuous measurement" a grey tag "ideal model: exact repeats have probability 0 (recorded readings, rounded to an instrument's resolution, can still tie)"; a "1" floats over a few dots on "just ones", tag "each exact value: count 1". On "classes" class boundaries draw at 0.1 to 0.6. On each count word the dots in that class drop into a blue bar of that height (counts axis 0 to 80), the count label above it: 20, 50, 70, 40 and, on "twenty", 20. On "touch" the shared bar edges pulse, hand tag "no gaps". Right column: the class and frequency table, tag "illustrative data".

### 3. interval probability from the histogram
> What's the probability that a time is at least zero point two, but less than zero point four seconds? Two classes cover that range, with fifty and seventy times. So the estimate is one hundred and twenty out of two hundred, which is zero point **six**. Each class's relative frequency is its count over two hundred, and they add to one, because every time lands in exactly one class.

Visual: task strip, 44 px, "Estimate P(0.2 ≤ T < 0.4)". On "Two classes" the second and third bars tint amber and the range is bracketed on the axis. Row (52 px): "P(0.2 ≤ T < 0.4) ≈ (50 + 70)/200 = 120/200"; on "six" the green frame "≈ 0.6". On "relative frequency" a row fills 0.10, 0.25, 0.35, 0.20, 0.10 and the y axis relabels to relative frequency (0 to 0.4) while the bars keep their heights. On "add to one" a sum cell "= 1" with a tick and a grey tag "s01: each trial lands in one place".

### 4. a range that cuts a class
> What about a time under zero point two five seconds? That cuts the second class in half, and the histogram doesn't say where its fifty times sit. The usual assumption is that they're spread evenly. Then about twenty five are below zero point two **five**. Add the twenty from the first class, and that's forty five out of two hundred, zero point two two five. In an exam, write that assumption down.

Visual: g01 board on the same histogram (amber clears). Task strip "Estimate P(T < 0.25)"; equation strip "relative frequency = count ÷ 200"; givens card "below 0.2: 20 times", "0.2 to 0.3: 50 times". A dashed line at 0.25 splits the second bar; the left half tints amber with a grey dashed edge and the tag "assume: spread evenly in the class" (on until the framed answer). On "five" a "25" label sits on the left half. Row (52 px): "P(T < 0.25) ≈ (20 + 25)/200 = 45/200" and the green frame "≈ 0.225 (estimate)", with grey "= 0.10 + ½(0.25)". A red slip "(20 + 50)/200 = 0.35" writes and is crossed, caption "counts the whole class". On "write" a chip "State the assumption" with a hand arrow to the grey tag.

### 5. shrink the window: a single value gets 0
> The class from zero point three to zero point four has probability about zero point three five. Shrink it to one hundredth of a second, centred on zero point three five. With the times spread evenly, it holds a tenth as many, so about zero point zero three five. Shrink it to one thousandth, and it's about zero point zero zero three five. The probability shrinks in step with the width. A single exact value has width zero, so for a continuous random variable, its probability is **zero**.

Visual: camera push on the third bar into an inset axis 0.29 to 0.41 (1,200 × 560 px); the display (220 px, "0.35") at the top right. `ShrinkingWindow`: the amber slice covers the whole class, readouts (52 px) "width 0.1" and "probability ≈ 0.35". On "one hundredth" the slice narrows about 0.35 to width 0.01 (over about 1 s); readouts "width 0.01", "≈ 0.035". On "one thousandth" it narrows to 0.001; readouts "width 0.001", "≈ 0.0035". On "in step" a grey table builds beside it (width and probability rows, ratio arrows), hand tag "÷ 10". On "zero" the slice becomes a line at 0.35, readouts "width 0", "probability 0", hand tag "width 0 → probability 0", and the green frame "P(X = x) = 0 for every x (X continuous)". The hook chip "P(T = 0.35 exactly) = ?" returns and fills "0".

### 6. zero isn't impossible
> But someone's time really is zero point three five something. Probability zero isn't the same as impossible. Some exact time always happens, but no single value carries any probability on its own. Only intervals do, like zero point three four to zero point three six **seconds**.

Visual: the display shows "0.3517…" again (300 px). A chip "P = 0 ≠ impossible" writes, hand tag "0 ≠ impossible". On "Only intervals" the inset shows a short amber slice from 0.34 to 0.36 with a grey readout "≈ 0.07" (author note b). On "seconds" the line at 0.35 dims and the slice glows, tag "intervals carry probability".

### 7. endpoints don't matter
> The ends of an interval are single values, so they carry no probability. So including or excluding the ends makes no **difference**. That's not true for a discrete variable. For a fair die, two to five including both ends has probability four sixths, but strictly between them it's two sixths. The ends carry a sixth **each**.

Visual: clear change. Right column: the four forms write one under another at 44 px, "P(a < X < b) = P(a ≤ X < b) = P(a < X ≤ b) = P(a ≤ X ≤ b)", grey tag "P(X = a) = P(X = b) = 0". On "difference" the four "≤" and "<" signs glow in turn, hand tag "ends carry nothing". On "discrete" a `ProbabilityBars` panel at the left (800 × 460 px): the fair die, six teal bars at 1/6, the die plate (`biology/m5x-die-v1.png`, 200 px). Bars 2 to 5 tint amber with "P(2 ≤ X ≤ 5) = 4/6"; then bars 3 and 4 only, "P(2 < X < 5) = 2/6". On "each" bars 2 and 5 pulse, tag "1/6 each: discrete ends carry probability".

### 8. the cumulative distribution function
> There are infinitely many intervals, but one function holds them all. The cumulative distribution function, or C D F, is F of x equals the probability that X is less than or equal to x. Cumulative means running total. For the reaction times, add the classes from the left: zero point one, zero point three five, zero point seven, zero point nine and **one**. Now the probability between zero point two and zero point four is F of zero point four minus F of zero point two. That's zero point seven minus zero point one, zero point six, the same as **before**.

Visual: board change to the reaction-time histogram (relative-frequency axis) at the top (1,200 × 380 px) and F's axes below (x 0 to 0.7, y 0 to 1.1, solid); the blocks badge (200 px) at the top left. Heading chip: "F(x) = P(X ≤ x)". `CdfTracer`: a marker sweeps right; as it passes each class end the bar slides down and stacks, leaving a violet point: (0.2, 0.1), (0.3, 0.35), (0.4, 0.7), (0.5, 0.9), (0.6, 1), with the readout (52 px) "F(x)" stepping up; on "one" the points join by straight violet segments from (0.1, 0) and the curve stays flat at 1 to the right and 0 to the left, grey tag "joins assume even spread: estimate", hand tag "running total". On "minus" amber height brackets at x = 0.4 (0.7) and 0.2 (0.1) and a difference bracket "0.6"; on "before" a grey chip "scene 3: 0.6" ticks. Right column: green frame "P(a < X ≤ b) = F(b) − F(a)" and, under it in grey, "P(X > a) = 1 − F(a)" (used aloud in scene 11).

### 9. why F never goes down
> As x moves right, the event that X is at most x can only gain values, never lose them. So F never decreases. We say it's non-decreasing. It starts at zero, and for this bounded example, it reaches one beyond the **range**. For a continuous variable it has no jumps either, because a jump would mean one value carried probability.

Visual: camera continue. The `CdfTracer` marker slides from 0 to 0.7 again, slowly: an amber bracket "X ≤ x" stretches from the left edge to the marker, the shaded histogram region left of it only grows, and a violet dot rides F with the live readout climbing; hand tag "only climbs". On "starts at zero" and on "range" the flat pieces glow with labels "F = 0 below 0 s" and "F = 1 beyond the range (this example)". On "no jumps" a grey dashed staircase ghost (the die's CDF, steps of 1/6) appears small beside it, tag "jumps: discrete"; the continuous curve is tagged "unbroken: continuous".

### 10. a CDF from a formula: x squared over nine
> Now a C D F from a formula. F of x is x squared over nine for x from zero to three, zero below that, and one above. Is it valid? At zero it's zero, and at three it's one, so the pieces join without a jump. Its derivative, two x over nine, is never negative there, so F never decreases. Graph it by hand or with a graphing app. It's flat at zero, leaves the origin flat, then curves up more and more steeply to the point three, **one**, and stays flat at one. It's not a straight **line**.

Visual: clear change to the g01 board (new case). Task strip, 44 px, "Is this a valid CDF? Graph it." Givens card with the piecewise formula: "F(x) = 0 for x < 0; F(x) = x²/9 for 0 ≤ x ≤ 3; F(x) = 1 for x > 3" (site problem 1). Axes (author note i, 1,000 × 600 px) solid at the left from the first frame. Rows (52 px current): "F(0) = 0, F(3) = 9/9 = 1 (pieces join)"; "F′(x) = 2x/9 ≥ 0 on [0, 3] (never decreases)"; "0 ≤ F(x) ≤ 1" with ticks. On "Graph it" a pen dot sketches the three pieces in violet: flat at 0, a curve leaving (0, 0) with a flat stub tagged "F′(0) = 0", rising to (3, 1), then flat at 1. On "one" an unbranded `ToolPanel` slides in and plots the same function; its curve overlays the sketch exactly, tag "graphing app: same curve". On "line" a red dashed chord from (0, 0) to (3, 1) appears and is crossed, hand tag "not straight".

### 11. probabilities from that CDF
> Find the probability that X is more than one and at most two. That's F of two minus F of one, four ninths minus one ninth, which is one **third**. The probability that X is more than two is one minus four ninths, which is five ninths. And the probability that X equals two is zero, because X is **continuous**.

Visual: camera continue (the curve stays; the `ToolPanel` closes). `CdfSubtraction`: amber brackets at x = 1 (1/9) and x = 2 (4/9), difference bracket "1/3" on "third". Rows (52 px): "P(1 < X ≤ 2) = F(2) − F(1) = 4/9 − 1/9" with the green frame "= 1/3"; "P(X > 2) = 1 − F(2) = 1 − 4/9" with the green frame "= 5/9" and a bracket from 4/9 up to 1; "P(X = 2) = 0" on "continuous".

### 12. memory aid
> Two short lines to remember. First, points carry nothing, and intervals carry the probability. Second, between a and b, take F of the bigger end, minus F of the smaller **end**. If you ever get a negative answer, you've subtracted the wrong way round.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line, hand font 56 px: "Points carry nothing; intervals carry the probability." Key, 40 px: "Between a and b: F(bigger) − F(smaller)." Badge at the left: the display "0.3517…" over a short amber interval. On "end" a small violet F curve beside the key shows the two brackets (upper minus lower). On the last sentence a red slip "F(1) − F(2) = −1/3" writes and is crossed, caption "wrong way round". Hold about 2 s.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. The masses of four hundred tomatoes are grouped into classes. Estimate the probability that a tomato's mass is at least two hundred and twenty five grams. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The masses of 400 tomatoes are grouped below. Estimate P(M ≥ 225), stating any assumption you make." with the table "mass (g): 100 ≤ m < 150, 150 ≤ m < 200, 200 ≤ m < 250, 250 ≤ m < 300; frequency: 60, 140, 160, 40". Picture slot: empty histogram axes "mass (g)" 100 to 300 with the four class boundaries marked (no bars, no split line). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 1 (brief)
> Two hundred and twenty five cuts the two hundred to two hundred and fifty class in **half**. Assume its one hundred and sixty masses are spread evenly, so about eighty are above two hundred and twenty five. Add the forty in the top class. That's one hundred and twenty out of four hundred, zero point **three**. Zero point five is wrong. It counts the whole class, including masses below two hundred and twenty **five**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "400 tomatoes", "200 to 250 g: 160", "250 to 300 g: 40". On "half" "225" is underlined in the card and the card's axes fill with the four blue bars, the third split at 225, its right half amber with the grey tag "assume: spread evenly". Row (52 px) "½ × 160 = 80"; row "P(M ≥ 225) ≈ (80 + 40)/400 = 120/400" with the green frame "≈ 0.3" on "three". On "five" a red slip "(160 + 40)/400 = 0.5" writes and is crossed, caption "counts masses below 225". Hold about 1 s.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A continuous random variable has F of x equals x squared plus two x, all over eight, for x from zero to two. Find the probability that X is at least zero point five, and less than one point five. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find P(0.5 ≤ X < 1.5)." Picture slot: empty axes x −0.5 to 2.5, y 0 to 1.2, labelled "F(x)" (no curve, no values). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 16. feedback 2 (brief)
> It's F of one point five, minus F of zero point **five**. The endpoints carry no probability, so the mixed signs don't matter. F of one point five is twenty one over thirty two, and F of zero point five is five over thirty two. So the answer is sixteen over thirty two, which is one **half**. Minus one half is wrong. It subtracts the wrong way round, and a probability can't be **negative**.

Visual: the card shrinks to the top. `GivensStrip`: "F(x) = (x² + 2x)/8, 0 ≤ x ≤ 2", "0.5 ≤ X < 1.5". On "five" "0.5 ≤ X < 1.5" is underlined and the row (52 px) "P(0.5 ≤ X < 1.5) = F(1.5) − F(0.5)" writes, grey tag "endpoints carry 0"; the card's axes draw F in violet with amber brackets at 0.5 and 1.5. Rows "F(1.5) = (2.25 + 3)/8 = 21/32" and "F(0.5) = (0.25 + 1)/8 = 5/32"; on "half" the green frame "21/32 − 5/32 = 16/32 = 1/2". On "negative" a red slip "5/32 − 21/32 = −1/2" writes and is crossed, caption "probabilities are never negative". Hold about 1 s.

### 17. handoff
> Next, a new question. Here's F of x equals x squared over nine again. It climbs slowly near zero, and steeply near three. What does that steepness tell us about where the values of X **are**?

Visual: the two memory-aid lines show small at the top, then fade on "Next". Board clears to one graph (author note i, 1,100 × 640 px): F(x) = x²/9 on x from −1 to 4 with its flat pieces, violet, tag "F(x) = P(X ≤ x)". On "slowly" a short amber tangent stub at x = 0.5 (gentle); on "steeply" one at x = 2.5 (steep). No slope values. A chip "Next: how steeply F climbs" and a "?" chip on "are". Hold about 2 s. This is s05's opening frame; scene 18 returns to it after the notes.

### 18. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Histogram estimate: relative frequency of the interval. State any even-spread assumption.
- Continuous X: P(X = x) = 0, so ≤ and < give the same answer.
- Probability 0 is not impossible.
- CDF: F(x) = P(X ≤ x). P(a < X ≤ b) = F(b) − F(a); P(X > a) = 1 − F(a).
- F never decreases, runs 0 to 1, no jumps. Graph its flat pieces.

Memory aid (framed card, right half of the notes screen, as in scene 12): *Points carry nothing; intervals carry the probability.* Key: *Between a and b: F(bigger) − F(smaller).* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 17's frame exactly (violet F(x) = x²/9 with the two tangent stubs, the chips "Next: how steeply F climbs" and "?"). This is the final frame and s05's opening frame.

## Teaching checks

- **Does it explain causes?** Why intervals: measured values almost never repeat (2). Why the estimates add to 1: each time lands in one class (3). Why an assumption: the histogram hides positions inside a class (4). Why one value gets 0: a slice's probability shrinks with its width (5). Why 0 is not impossible: some value always happens (6). Why endpoints don't matter: they are single values (7), and why they matter for a die (7). Why one subtraction works: F is a running total (8). Why F never decreases: the event X ≤ x only grows (9). Why no jumps: a jump would be a point with probability (9). Why x²/9 is valid: join, derivative, range (10).
- **Misconceptions addressed:** as listed under "Mistake scene".
- **Visual standard, item by item:** 1 the painted blocks and the display from the first 10 s, returning in 2, 5, 6, 8 and 12; 2 a new stage every 20 to 60 s; 3 `HeatsToHistogram`, `ShrinkingWindow` and `CdfTracer`, each with live readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (4, 10, 11), framed answers and crossed slips; 8 framed card and five short bullets; 9 the display's endless digits, the slice landing on 0, the readout that never goes down.
- **One idea at a time:** one interval per scene in 3 to 5; one width per sentence in 5; one property per sentence in 9; checking (10) separated from computing (11).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible and a picture each, 10 s each with the invitation to pause; neither card shows an estimate, an F value or the form of the answer. One crossed mistake each; feedback about 32 s and 30 s.
- **Avoided double teaching:** relative frequency (s01) in one tag; the die (s01) in one panel; the sign of a derivative (d09) in one phrase.
- **Syllabus coverage:** `cibf81b169` (2 to 4; A1; key note 1); `ci04530a48` (5 to 7; A2; key notes 2, 3); `ci9dad7e9e` (8, 11; A2; key note 4); `cicb65fc88` (9, 10; key note 5; with and without a graphing app in 10).
- **Out of scope by design:** density, area and constants (s05); mode and quantiles (s06); uniform (s07); continuous mean and variance (s08); mixed variables.

## Practice questions and model answers

**Attempt 1 (scene 13; original, HSC style, 2 marks suggested, not an official marking scheme).** "The masses of 400 tomatoes are grouped below. Estimate P(M ≥ 225), stating any assumption you make." Table: 100 ≤ m < 150: 60; 150 ≤ m < 200: 140; 200 ≤ m < 250: 160; 250 ≤ m < 300: 40.
Model answer: assume the 160 masses in 200 ≤ m < 250 are spread evenly, so about 80 lie in 225 ≤ m < 250. P(M ≥ 225) ≈ (80 + 40)/400 = 0.3. Classic mistake (crossed): "0.5".

**Attempt 2 (scene 15; original, HSC style, 2 marks suggested).** "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find P(0.5 ≤ X < 1.5)."
Model answer: X is continuous, so P(0.5 ≤ X < 1.5) = F(1.5) − F(0.5) = 21/32 − 5/32 = 1/2. Classic mistake (crossed): "−1/2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Reaction-time data (site card 02) | 20, 50, 70, 40, 20 in [0.1, 0.2) to [0.5, 0.6); total 200; rel. freq. 0.10, 0.25, 0.35, 0.20, 0.10 | 2, 3 |
| Heats | 25 heats × 8 lanes = 200 times | 2 |
| Interval estimate | P(0.2 ≤ T < 0.4) ≈ 0.6 | 3, 8 |
| Cut class | P(T < 0.25) ≈ 0.225; crossed 0.35 (whole class) | 4 |
| Shrinking (site card 03) | ≈ 0.35, 0.035, 0.0035; → 0 | 5 |
| Interval in scene 6 | 0.34 to 0.36: ≈ 0.07 (grey) | 6 |
| Die contrast | 4/6 against 2/6 | 7 |
| Running total | 0, 0.1, 0.35, 0.7, 0.9, 1; F(0.4) − F(0.2) = 0.6 | 8, 9 |
| x²/9 (site problems 1, 2) | F(1) = 1/9, F(2) = 4/9; P(1 < X ≤ 2) = 1/3; P(X > 2) = 5/9; P(X = 2) = 0 | 10, 11, 17 |
| Memory-card slip | F(1) − F(2) = −1/3 (crossed) | 12 |
| A1 | 80 + 40 = 120; 0.3; crossed 0.5 | 13, 14 |
| A2 | 21/32, 5/32; 1/2; crossed −1/2 | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python 3.14 (7 Nov); Codex to re-check numerically and with a CAS.

- 20 + 50 + 70 + 40 + 20 = 200; relative frequencies sum to 1; 25 × 8 = 200.
- (50 + 70)/200 = 0.6; (20 + 25)/200 = 0.225; (20 + 50)/200 = 0.35.
- 0.35 × 0.1 = 0.035; 0.35 × 0.01 = 0.0035; 3.5 × 0.02 = 0.07.
- Cumulative 0.1, 0.35, 0.7, 0.9, 1.0; 0.7 − 0.1 = 0.6.
- x²/9: 0 and 1 at 0 and 3; derivative 2x/9; F(1) = 1/9, F(2) = 4/9; 1/3; 5/9.
- A1: 160/2 = 80; 120/400 = 0.3; 200/400 = 0.5. A2: (x² + 2x)/8 at 0.5 and 1.5: 5/32, 21/32; 16/32 = 1/2.

## Memory aid check

- **"Points carry nothing; intervals carry the probability."** True for a continuous random variable (scoped in narration and key note 2); false for a discrete one (scene 7). Introduced after the cause (5, 6).
- **"Between a and b: F(bigger) − F(smaller)."** P(a < X ≤ b) = F(b) − F(a) with b > a; never negative because F never decreases. Feedback 2 uses it.
- **Considered, not used:** "zero means impossible" as a contrast slogan (states the misconception).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,196 characters**, 18 scene headings (Revision 3: 6,429 by script, as stated). Characters per scene (1 to 18): 448, 527, 379, 395, 486, 275, 318, 550, 325, 480, 302, 247, 187, 408, 227, 380, 187, 75.

At 13.3 characters per second the speech before the notes is about 460 s. Holds: the 3 s prediction ring (1), two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 15 s of settling for the heats (2), the shrinking slice (5), the tracer (8, 9) and the sketch and app overlay (10); the key-notes scene is 45 s (1,350 frames). Total **about 551 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 19 s spare.

Reserve trims if the voiced take runs long: scene 6's last sentence (keep the slice silent); scene 9's "We say it's non-decreasing." (keep the tag, which carries the syllabus word). Do not add narration without a named cut.

## Scene list and build ids

Lesson key `m-a12s04` (route math-a12-s04). Explainer folder `src/explainer/lessons/math-a12-s04`; build inputs in `docs/production/claude-pm/lessons/math-a12-s04/` (to be created at voicing).

In order (kebab-case; 18 scene headings, all `### N.`): hook-sprint, values-dont-repeat, interval-estimate, cut-class, shrink-window, zero-not-impossible, endpoints, cdf-running-total, never-decreases, formula-cdf, cdf-probabilities, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 38 s | 1 | Thin bars, then the starting blocks and the display's growing digits |
| 38 to 81 s | 2 | Heats dropping into the histogram |
| 81 to 142 s | 3 to 4 | Interval estimates; g01 board for the cut class |
| 142 to 202 s | 5 to 6 | Zoomed shrinking window to a line |
| 202 to 226 s | 7 | Four equal forms and the die contrast |
| 226 to 296 s | 8 to 9 | CDF tracer drawing F as a running total |
| 296 to 357 s | 10 to 11 | g01 board: x²/9 sketched and plotted, then subtractions |
| 357 to 378 s | 12 | Framed memory card |
| 378 to 490 s | 13 to 16 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 490 to 506 s | 17 | F(x) = x²/9 with two tangent stubs (s05 opening frame) |
| 506 to 551 s | 18 | Key notes with the framed card, then a silent return to scene 17's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s03's last frame continues into scene 1 (the thin bars slide out, the blocks and display slide in); 1 to 2 clear change; 2 to 3 to 4 camera continue (same histogram); 4 to 5 camera push into the third bar; 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 clear change (new case); 10 to 11 camera continue; 11 to 12 clear change to the card; attempts and feedback: the card shrinks to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, then a silent return to scene 17's frame.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s04-rev4-learning-review.md`, `science_check` = `checks/m-a12s04-rev4-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `chemistry/c8-stopwatch-v1.png` (an analogue silver stopwatch with a hand) cannot show digits; `physics/y11p-digital-timer-v1.png` and `phys-y11-digital-timer-v1.png` (a grey laboratory timer box with a black display and red and black terminals) read as lab apparatus, not a sports track; `physics/phys-y11-light-gate-track-v1.png` is a lab dynamics track. None shows a running track or starting blocks. `biology/m5x-die-v1.png` is reused for scene 7.

Reused: `biology/m5x-die-v1.png`.

Need (painted, new; see the Codex asset brief): `ma12-starting-blocks-v1.png` and `ma12-timing-display-v1.png`. (Revision 3's `maths-a12-stopwatch.png` is withdrawn.)

Coded (studio kit): the display's digits, the dots, histograms, the slice and inset, the tracer and F, the die bars, graphs, the graphing-app panel, working boards, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `ProbabilityBars` (s01 additions), `ToolPanel` (unbranded), and the studio's `LiveReadoutBoard`, `FunctionSimulator` (with `domain` pieces and tangent stubs), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip` and `QuestionAxes`.

Additions (shared with s05 and s06):
1. **`ClassHistogram`**: touching bars over class edges; modes counts, relative and density (heights rescale, area labels stay); `dropFrom` stored dots falling into classes; shading that may cut a class with an assumption tag. Checks: 20, 50, 70, 40, 20 relabel to 0.10 to 0.35 with heights unchanged; tomato data split at 225.
2. **`HeatsToHistogram`**: a heat counter on a display plate, stored dot positions appearing heat by heat, then dropping into a linked `ClassHistogram`, with a live "times recorded" readout. Check: the bars equal the dots dropped so far.
3. **`ShrinkingWindow`**: a slice about a centre with animated widths and a constant density inside the class, readouts width and probability (w × density), ending in a line at 0. Checks: 0.35, 0.035, 0.0035, 0.07.
4. **`CdfTracer`** (on `CumulativeBuild`): a sweeping marker, the "X ≤ x" bracket, the shaded region left of the marker, running-total points at class ends joined into F, a live F readout, flat pieces, and an optional discrete staircase ghost. Checks: points (0.2, 0.1) to (0.6, 1); F(0.25) = 0.225; the readout never decreases.
5. **`CdfSubtraction`**: height brackets at a and b, a difference bracket, a complement bracket and a reversed slip. Checks: 1/9, 4/9, 1/3, 5/9; 0.6.

## Codex asset brief (Maths A12 S04, a sprint start)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s04.md`, draft route entry math-a12-s04. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, brand names, people, hands, feet, shoes, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-starting-blocks-v1.png` (2000 × 1200 px): one pair of athletics starting blocks (two angled foot pedals on a central metal rail, with a small grey sensor box and a short cable at the rail's front end) set on a short section of a terracotta-red synthetic running lane with two white lane lines and a white start line just in front of the blocks, three-quarter side view at slight elevation. The lane section fades out at both ends (no hard rectangle). Empty: no runner, feet or shoes.
2. `ma12-timing-display-v1.png` (2000 × 1200 px): a trackside electronic timing display on a short post: a dark rectangular housing with a **blank, flat black display face** (so the digits are coded on top), front view. No digits, letters, logos or lights painted on it. Codex reports the display face's rectangle in px in `ma12-timing-display-v1.json`.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide, plus the alpha check and a test of coded amber digits ("0.3517") on the display face. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the shrinking argument states the even-spread assumption for the data steps and states P(X = x) = 0 for a continuous random variable (model), not as a fact about the 200 data values.
3. Confirm the scope of every learner-visible general claim: the four equal forms and "no jumps" stated for a continuous X; the die contrast labelled discrete; the running-total joins tagged as an estimate; key notes carry the same scope.
4. Confirm F(x) = x²/9 is shown with its flat pieces, and the hand sketch and the app curve are the same function.
5. Confirm the carnival context makes no claim about real sprinters or competition rules, and no person is drawn.
6. Confirm both attempt questions carry every demand and condition, each card has its picture, and neither card shows a split line, an estimate or an F value.
7. Confirm the opening equals s03's final frame, and scene 17 states no density, slope value or derivative (a question only) and equals s05 Revision 3's opening frame (F violet).
8. Confirm the four syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
9. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Continuous Random Variables: Why P(X = x) = 0 and the CDF F(x) = P(X ≤ x) | Year 12 Maths Advanced

(Title length: 87 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson08.sa.html

What's the probability a sprinter's reaction time is exactly 0.35 seconds? For a measured quantity the answer is 0, and every exact value gets 0. See why: group 200 reaction times from an athletics carnival into a histogram, estimate interval probabilities (stating the even-spread assumption when a range cuts a class), then shrink an interval until it becomes a single value. Probability 0 isn't impossible: only intervals carry probability, so including or excluding the endpoints changes nothing. Then meet the cumulative distribution function F(x) = P(X ≤ x), a running total that never decreases, find P(a < X ≤ b) = F(b) − F(a), and check and graph F(x) = x²/9 by hand and with a graphing app. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, statistics and probability.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Estimate the probability that a continuous random variable falls in some interval using relative frequencies and histograms obtained from data"
"Recognise that the probability of a particular value for a continuous random variable is 0 and hence that P(a<X<b)=P(a≤X<b)=P(a<X≤b)=P(a≤X≤b) since P(X=a)=P(X=b)=0 when X is a continuous random variable"
"Define the cumulative distribution function (CDF), F(x) , as the probability of a random variable, X , having values less than or equal to x , so F(x)=P(X≤x) and P(a≤x≤b)=F(b)-F(a)"
"Recognise that the cumulative distribution function, F(x) , is non-decreasing for all x in its domain, and graph cumulative distribution functions, given a formula for F(x) , with and without graphing applications"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Expected value and variance of a discrete random variable (previous video); relative frequency estimates. Next: The probability density function.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Hook context (learning review).** The site's hook is a bus arrival time; s07 now owns buses, so this video uses the site's own reaction-time data at a carnival. Confirm the sprint start is clear without any athletics knowledge (the screen tags "sensors in the blocks time the reaction").
- **2. "Zero point three five" (voice pilot).** Spoken decimal form, shared with s01.

## Review notes

- Revision 4 (7 Nov) has had no independent review. Next: student learning review (trace from s01 and s03; check that the display's growing digits and the heats' dots that never stack make "intervals" necessary before any rule; that the even-spread assumption is stated where needed and nowhere else; that the shrinking slice is the evidence for P(X = x) = 0; that the tracer's readout makes "non-decreasing" visible; that the sketch shows the flat start and flat pieces; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The heats, the shrinking slice, the tracer and the sketch overlay carry the explanation; judge them at playback speed in the voiced preview, not from stills.

## Revision 3 (5 November 2026, brief 171 fixes)

Scene 2 example-data and ideal-continuous wording; scene 9 bounded-example F wording; the `CdfSubtraction` cue retied to "minus". Narration then 6,429 characters by script.

## Revision 4 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, every site number, the cause chain, both attempts and the memory aid are unchanged.

- **Anchor and why:** sprinters' reaction times at a school athletics carnival, timed by sensors in the starting blocks and shown on a trackside display. It gives the site's reaction-time data an everyday home, makes "more digits keep coming" literal, and leaves buses to s07.
- **Simulations:** `HeatsToHistogram` (heats' times dropping into the histogram live); `ShrinkingWindow` (width and probability readouts to 0); `CdfTracer` (a sweeping marker drawing F with a readout that never goes down).
- **Colour roles:** data bars blue; the interval asked about and brackets amber; the CDF violet (was teal); the even-spread assumption grey dashed; the die teal; answer green; mistake red.
- **Plates:** reused `biology/m5x-die-v1.png`; new `ma12-starting-blocks-v1` and `ma12-timing-display-v1` (brief above); the stopwatch request is withdrawn.
- **Narration changes (not voiced):** scenes 1 and 2 (the carnival), and cuts in scenes 2, 3, 4, 5, 7, 8 and 17 (listed with counts in Decisions). Other scenes keep their Revision 3 text.
- **Counts:** 6,429 → 6,196 characters; about 568 s with the old 60 s notes hold → about 551 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s03's thin-bars frame (unchanged); ends on violet F(x) = x²/9 with two tangent stubs, which s05 Revision 3 opens on.
- **Kit additions:** `ClassHistogram`, `HeatsToHistogram`, `ShrinkingWindow`, `CdfTracer` (on `CumulativeBuild`) and `CdfSubtraction`.
