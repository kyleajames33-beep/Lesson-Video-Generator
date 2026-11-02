# Maths A12 S04: Why are continuous probabilities intervals rather than point masses? Histograms, why one exact value has probability 0, and the cumulative distribution function F(x) = P(X ≤ x) (design)

Status: Revision 1 (3 Nov 2026), overnight queue wave H4. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer` with `domain` intervals, `TangentTriangle`, `ReadoutPanel`, `AlignedAlgebra`, `ExpressionSlot`, `Chip` with `cross`, `QuestionCard`, `Countdown`, `KeyNotes`), the probability parts proposed in `math-a12-s01.md` (`ProbabilityBars`, `DistributionTable`), `ToolPanel` (unbranded, i12 decision 38) and the new continuous parts specified under "Codex asset brief" (`ClassHistogram`, `ShrinkingWindow`, `CumulativeBuild`, `CdfSubtraction`). Nothing recorded; human listening pending.

Narration 6,413 characters, 18 scenes, about 567 s (9.5 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 56) and the first on continuous random variables, after s03 (expectation and variance of a discrete model) and before s05 (the density f(x) = F′(x)). Templates: `math-a12-i05.md` and `math-a12-d10.md` (same structure, voice, paper style, attempt and feedback pattern and key notes), with `math-a12-s01.md` for the probability conventions. Maths visuals are coded; one small painted plate (a digital stopwatch with a blank display, so the digits are coded) carries the measurement context. No people. Pre-design pack: none (brief 151 wrote packs to i14 only, and `maths-a12-route-inputs-3.json` has no s entries), so this design does the pack work itself. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson08.sa.html` (Continuous Random Variables and the CDF), SHA256 `e811956fdfcc15baf12fc83128eb595d0470fb5a2ba392a71f64b75e6fd883dc`. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s04` in `../../programme/maths-a12-course-outline.json` ("Why are continuous probabilities intervals rather than point masses?", four syllabus actions, site source lesson 8, no coverage gaps).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; maths visuals coded, objects painted; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, formula and conditions; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Binding root decisions applied: exact values in the algebra (4/9, 1/3, 21/32), decimals only where the data are decimals or in grey readouts; attempt cards give neither the answer nor its form; domains kept (every CDF formula is stated with its interval and its flat pieces); the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cibf81b169`: "Estimate the probability that a continuous random variable falls in some interval using relative frequencies and histograms obtained from data"
- `ci04530a48`: "Recognise that the probability of a particular value for a continuous random variable is 0 and hence that P(a<X<b)=P(a≤X<b)=P(a<X≤b)=P(a≤X≤b) since P(X=a)=P(X=b)=0 when X is a continuous random variable"
- `ci9dad7e9e`: "Define the cumulative distribution function (CDF), F(x) , as the probability of a random variable, X , having values less than or equal to x , so F(x)=P(X≤x) and P(a≤x≤b)=F(b)-F(a)"
- `cicb65fc88`: "Recognise that the cumulative distribution function, F(x) , is non-decreasing for all x in its domain, and graph cumulative distribution functions, given a formula for F(x) , with and without graphing applications"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s03's actual handoff frame (64 thin bars across a continuous axis 0 to 4, chip "Next: what if X can take any value in an interval?" and "?"; `math-a12-s03.md` scene 13) and a new question about a measured reaction time. Names a continuous random variable in plain words; groups 200 reaction times into five classes (site card 02, numbers unchanged: 20, 50, 70, 40, 20) and estimates interval probabilities from relative frequencies, including a range that cuts a class with a stated even-spread assumption (`cibf81b169`); shrinks an interval about 0.35 to show why one exact value has probability 0, and why endpoints do not matter, with the discrete die contrast (`ci04530a48`); defines the CDF as a running total, first from the histogram, then the subtraction F(b) − F(a) and the complement 1 − F(a) (`ci9dad7e9e`); explains why F never decreases, runs from 0 to 1 and has no jumps for a continuous variable, then checks and graphs F(x) = x²/9 on [0, 3] by hand and with a graphing app (site problems 1 and 2, numbers unchanged) (`cicb65fc88`). Stops at the CDF. Not taught: the density f(x) = F′(x), area under a density and finding constants (s05; the handoff asks a question only); mode, median and quartiles (s06); the continuous uniform model (s07); continuous mean and variance (s08); mixed variables with a jump (site Q3 and drill 5; outside the 2024 Advanced points).

## Decisions

- **Learner question kept (outline).** "Why are continuous probabilities intervals rather than point masses?" The answer, built in order: measured values almost never repeat, so we count values in intervals (2); a histogram gives interval estimates (3, 4); shrinking an interval shrinks its probability in step with its width, so a single value gets 0 (5); 0 is not impossible, and only intervals carry probability (6); so endpoints never matter (7); one function, the running total F(x) = P(X ≤ x), holds every interval through one subtraction (8); it never decreases, runs from 0 to 1 and has no jumps (9); a formula CDF is checked and graphed the same way (10, 11).
- **The hook surprise.** A timer shows 0.35 s, then a better timer shows 0.3517 and more digits keep coming. "What's the probability it's exactly 0.35?" The site's hook is a bus arrival time; the reaction-time context replaces it so the hook, the histogram and the zero-probability argument use one data set (site card 02's data). The site's resolution "probability zero does not mean impossible" is kept (scene 6).
- **The cause on the screen (owner quality bar).** Scene 5's shrinking window is the evidence: the class 0.3 to 0.4 (probability 0.35) narrows about 0.35 to width 0.01 and 0.001 while the shaded slice and its grey readout shrink by the same factor; the width readout and probability readout are drawn from the same numbers. The rule P(X = x) = 0 is written only after the window reaches a line.
- **Even-spread assumption kept in learner copy.** It is a necessary condition for a range that cuts a class (scene 4, attempt 1) and for the shrinking argument from data (scene 5): without it the estimate has no basis. Scene 5 says "with the times spread evenly" for the data step; the exact-value conclusion is stated for the continuous model.
- **CDF from the data first.** Scene 8 builds F as a running total of the five relative frequencies (0.1, 0.35, 0.7, 0.9, 1 at the class ends), joined by straight segments (the even-spread assumption again, tagged "estimate"), so F(0.4) − F(0.2) = 0.7 − 0.1 = 0.6 reproduces scene 3's 0.6. This is the link between "intervals" and "one subtraction".
- **Non-decreasing (`cicb65fc88`) as a cause.** The event X ≤ x only gains values as x moves right (an amber bracket "X ≤ x" stretches from the left edge as the marker moves; the shaded region never shrinks). Starts at 0, ends at 1. "No jumps" is given its reason (a jump would be a point carrying probability), scoped to a continuous variable.
- **Graphing "with and without graphing applications".** Scene 10 sketches F(x) = x²/9 by hand from three facts (endpoints, F′ ≥ 0, flat start), then an unbranded `ToolPanel` plots it and the two curves coincide. The site's "drawing it straight is the standard sketching error" becomes a dashed straight chord crossed in grey.
- **Worked example (site problems 1 and 2, numbers unchanged).** F(x) = 0 for x < 0, x²/9 for 0 ≤ x ≤ 3, 1 for x > 3. Valid: F(0) = 0, F(3) = 1 (pieces join), F′(x) = 2x/9 ≥ 0 on [0, 3]. P(1 < X ≤ 2) = 4/9 − 1/9 = 1/3; P(X > 2) = 5/9; P(X = 2) = 0.
- **Discrete contrast (site card 03).** The site states "P(2 ≤ X ≤ 5) and P(2 < X < 5) generally differ by p(2) + p(5)". Scene 7 makes it concrete with s01's fair die: 4/6 against 2/6, the ends carrying 1/6 each.
- **Attempts (original).** (A1) Tomato masses, 400 in four classes (60, 140, 160, 40 for 100 to 150, 150 to 200, 200 to 250, 250 to 300 g); estimate P(M ≥ 225). Tests the even-spread assumption: 80 + 40 = 120 out of 400, 0.3. Crossed: "0.5" (the whole 200 to 250 class counted). (A2) F(x) = (x² + 2x)/8 on [0, 2] (with its flat pieces); find P(0.5 ≤ X < 1.5) = 21/32 − 5/32 = 1/2. Tests the subtraction and that the mixed signs do not matter. Crossed: "−1/2" (subtracted the wrong way round). The site's own practice (apples, F = (x − 1)/4) is not used, so the questions are unseen. Neither card shows a relative frequency, an F value or the form of the answer.
- **Mistake scene:** none separate. "P(X = 0.35) is small but not zero" (hook, 5); "probability 0 means impossible" (6); "endpoints change the answer" (7; feedback 2); "count the whole class" (4; feedback 1, crossed); "F(a) − F(b)" (memory aid; feedback 2, crossed); "a CDF sketch is a straight line" (10, grey crossed chord); "forget the flat pieces" (10, key note 4).
- **Memory aid.** "Points carry nothing; intervals carry the probability." and "Between a and b: F(bigger) − F(smaller)." See "Memory aid check".
- **Handoff (outline next s05, "How does a density determine its CDF and probabilities?").** Scene 17 returns to F(x) = x²/9 on [−1, 4] and asks what its steepness says about where the values of X are. A tangent at x = 0.5 (gentle) and x = 2.5 (steep) shows the contrast with no slope value and no density word. Chip "Next: how steeply F climbs".
- **Site sources used:** lesson 8 card 02 (reaction-time table, 0.6 and 0.225 estimates, the even-spread assumption), card 03 (shrinking table 0.35, 0.035, 0.0035; P(X = x) = 0; the four equal forms; the discrete contrast; "probability zero does not mean impossible"), card 04 (definition, F(b) − F(a), 1 − F(a), properties, staircase versus unbroken curve), card 05 problems 1 and 2 (x²/9) and problem 3's sketch features, card 06 traps 01 to 04. Not used: the bus hook (replaced, see above), Q3 and drill 5 on mixed variables (outside the 2024 points), the site practice questions (kept unseen).
- **Site corrections (new, for brief logging; not duplicates of items 1 to 64):** (1) lesson 8 card 09 says "the histogram from card 02 turns out to have been a picture of [the density] all along"; this holds only for a density-scaled histogram (heights relative frequency ÷ class width, here 1.0, 2.5, 3.5, 2.0, 1.0 per second), not for the card 02 relative-frequency bars (0.10 to 0.35). Lesson 9 card 02 repeats it as "bar heights were relative frequency per class, which is density"; s05 logs that location. (2) Scope note (not an error): Q3 and drill 5 teach mixed random variables with a jump in the CDF, which are outside the 2024 Advanced points; suggest marking them as extension. (3) Site metadata label "MAV-12-07" and "Module 5" in the page title (known label item; not copied).
- **Pack questions answered:** no pack exists. Recalculations: all site values checked with SymPy (see "Numbers to verify"); misconceptions from the site traps used as above.
- **Cause chain taught, in order:** (1) a measured value can take any value in an interval, so exact values almost never repeat (2); (2) grouping into classes gives interval estimates, adding to 1 because each time lands in one class (3); (3) a range inside a class needs an assumption about spread (4); (4) a slice's probability shrinks with its width, so width 0 gives probability 0 (5); (5) 0 is not impossible; only intervals carry probability (6); (6) so endpoints never change a continuous probability, unlike a die (7); (7) the running total F(x) = P(X ≤ x) gives every interval as F(b) − F(a) (8); (8) the event X ≤ x only grows, so F never decreases, from 0 to 1, with no jumps (9); (9) a formula CDF is checked by its join, its derivative and its range, and graphed with its flat pieces (10, 11).
- **Entry knowledge (draft route):** s01 (relative frequency estimates add to 1 because each trial gives exactly one value; P(X = x) notation; the fair die distribution); s02 (uniform discrete models); s03 (a discrete distribution summarised by its mean and spread); d09 (the sign of a derivative tells increasing or decreasing); Year 11 probability (complement rule; events contained in others). Not needed: integration (s05 brings it in).
- **Learner-visible vocabulary (plain meaning at first use):** continuous random variable (one that can take any value in an interval, like a time or a mass, scene 2); class (a range of values grouped together, scene 2); histogram (a bar graph of classes whose bars touch, scene 2); relative frequency (recall from s01, scene 3); cumulative distribution function, CDF (F(x), the probability that X is at most x; cumulative means running total, scene 8); non-decreasing (never goes down, scene 9).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **timer digits** (coded digits on the stopwatch plate's blank display, extending 0.35 → 0.3517 → 0.351 7… , scene 1); **dot strip** (200 grey dots at distinct positions along a time axis, each with a "1" tick count, scene 2); **class histogram** (`ClassHistogram`, new: dots drop into touching class bars, counts → relative frequency relabel, interval shading, half-class shading with an even-spread tag); **shrinking window** (`ShrinkingWindow`, new: a shaded slice about 0.35 narrows from width 0.1 to 0.01 to 0.001 to a line, with width and probability readouts from the same numbers); **die bars** (`ProbabilityBars` from s01, scene 7: ends glow); **running total** (`CumulativeBuild`, new: bars slide up and stack into points at class ends, joined by segments into F); **subtraction brackets** (`CdfSubtraction`, new: two heights on F with a bracket for their difference); **growing event bracket** (scene 9); **formula CDF** (`FunctionGraph` with three domain pieces, scene 10, with a crossed grey straight chord); **graphing tool** (`ToolPanel`, unbranded); `AlignedAlgebra`; crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; graph on the left (about 1,050 × 620 px); readouts and algebra in the right column. Unequal unit lengths (no angle claims).
- **No human figures.** The stopwatch plate shows no hands.
- **Author notes (not learner copy):**
  (a) Data (site card 02): classes [0.1, 0.2), [0.2, 0.3), [0.3, 0.4), [0.4, 0.5), [0.5, 0.6), frequencies 20, 50, 70, 40, 20 (total 200), relative frequencies 0.10, 0.25, 0.35, 0.20, 0.10 (sum 1). P(0.2 ≤ T < 0.4) ≈ 120/200 = 0.6. P(T < 0.25) ≈ (20 + 25)/200 = 0.225 under even spread in [0.2, 0.3).
  (b) Shrinking: within [0.3, 0.4) even spread gives probability 3.5 per second of width; width 0.01 about 0.35 gives 0.035, width 0.001 gives 0.0035. The "probability → 0" conclusion is a property of the continuous model, not of the 200 data points (a data set of 200 has finitely many values); the narration says "a continuous random variable" when stating P(X = x) = 0.
  (c) Running total at class ends: F(0.1) = 0, F(0.2) = 0.1, F(0.3) = 0.35, F(0.4) = 0.7, F(0.5) = 0.9, F(0.6) = 1. Straight joins assume even spread inside each class (tag "estimate"); F(0.25) on the join is 0.225, matching scene 4.
  (d) F(x) = x²/9: F(0) = 0, F(3) = 1, F′(x) = 2x/9 ≥ 0 on [0, 3], F′(0) = 0 (flat start), F″ = 2/9 > 0 (concave up; the narration says "curves up more and more steeply", not "concave"). F(1) = 1/9, F(2) = 4/9.
  (e) Die (s01): P(2 ≤ X ≤ 5) = 4/6, P(2 < X < 5) = 2/6, difference 2/6 = P(2) + P(5).
  (f) A1: classes [100, 150), [150, 200), [200, 250), [250, 300), frequencies 60, 140, 160, 40 (total 400). Even spread in [200, 250): 80 at or above 225. P(M ≥ 225) ≈ 120/400 = 0.3. Crossed 0.5 = 200/400.
  (g) A2: G(x) = (x² + 2x)/8 on [0, 2], 0 below, 1 above. G(0) = 0, G(2) = 1, G′(x) = (x + 1)/4 > 0. G(1.5) = 21/32, G(0.5) = 5/32, difference 16/32 = 1/2.
  (h) Pronunciations: "zero point three five" (series form for decimals); "F of x"; "x squared over nine"; "four ninths"; "twenty one over thirty two"; "C D F" (letters).
  (i) Windows: histogram x 0 to 0.7 s, ticks 0.1 to 0.6, y counts 0 to 80 (relabelled 0 to 0.4); shrinking-window inset x 0.29 to 0.41; running total y 0 to 1.1, ticks 0.25, 0.5, 0.75, 1; x²/9 on x −1 to 4, y −0.2 to 1.2, ticks 1, 2, 3 and 1/9, 4/9, 1; die bars x 1 to 6, y 0 to 1/4.

Main question: *A measured time can be any value in an interval, so no exact time ever repeats. Why does every single exact value get probability 0, and how do intervals and one running-total function carry all the probability instead?*
Entry knowledge (s01 relative frequency and P(X = x); s03 discrete summaries; d09 sign of a derivative; Year 11 complement rule): estimates from counts; a distribution adds to 1; increasing means a non-negative derivative.
Stops after: interval estimates from a histogram, P(X = x) = 0 and equal interval forms, the CDF, its properties and graph. No density, no area under a density, no quantiles.
Handoff: math-a12-s05: F(x) = x²/9 with a gentle and a steep tangent, "what does the steepness tell us?" (a question only).

**Draft route entry (for the route file):** id `math-a12-s04`; playlistOrder 56; mainLearnerQuestion "Why are continuous probabilities intervals rather than point masses?"; syllabusActionIds `cibf81b169`, `ci04530a48`, `ci9dad7e9e`, `cicb65fc88`; entryKnowledge "s01 relative-frequency estimates and P(X = x); s03 discrete mean and spread; d09 sign of the derivative; Year 11 complement rule"; start "s03's handoff: from counting to measuring"; stop "Histogram interval estimates with the even-spread assumption; P(X = x) = 0 and equal interval forms; CDF as a running total, F(b) − F(a), 1 − F(a), non-decreasing from 0 to 1, graphed from a formula by hand and with an app. No density."; next "math-a12-s05: the density as the steepness of F".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: data and histogram bars blue; the interval being asked about amber; the CDF curve teal; subtraction brackets amber; the even-spread assumption as a grey dashed fill with a grey tag; model curves ink. Screen maths writes P(X = x), P(a ≤ X ≤ b), F(x) = P(X ≤ x). Exact fractions in the algebra; data decimals as given.

### 1. hook (exactly 0.35 seconds?)
> So far, every random variable has counted something, like the number on a die. Now X can be any value in an interval, because we measure it. A reaction time is measured, and the timer reads zero point three five seconds. But a better timer shows zero point three five one seven, with more digits after that. So what's the probability that a reaction time is exactly zero point three five seconds? Make a guess.

Visual: opens on s03's actual final frame (`math-a12-s03.md` scene 13, returned to after its notes): the 64 thin bars across the continuous axis 0 to 4 tagged "any value in an interval", the chip "Next: what if X can take any value in an interval?" and "?". On the first sentence a small grey ghost of the four original separate bars appears, tagged "counts: separate values"; on "measure" the thin bars and the ghost slide left and fade (the chip moves to the top right as the scene question), and the stopwatch plate (`maths-a12-stopwatch.png`, blank display) fades in at the right. Coded digits on its display: "0.35 s". On "zero point three five one seven" the display extends to "0.3517" then a trailing "…" blinks. Heading writes on: "Why do continuous probabilities come from intervals?". On "exactly" a chip "P(T = 0.35 exactly) = ?" and a 3 s prediction ring (no answer shown).

### 2. measured values don't repeat
> Here are the reaction times of two hundred students. Time is a continuous random variable, which means it can take any value in an interval, not just separate values. With enough decimal places, no two times are the same, so a count for each value is just a list of ones. Instead, we group the times into classes, each a tenth of a second wide. Twenty land between zero point one and zero point two seconds, then fifty, seventy, forty and **twenty**. That's a histogram. Its bars touch, because the classes leave no gaps.

Visual: board clears to a time axis 0 to 0.7 s (author note i). Two hundred small grey dots appear along it at distinct positions (no two stacked), and a tiny "1" floats over a few of them on "list of ones", tag "each exact value: count 1". On "classes" four class boundaries draw (0.1 to 0.6). On each count word the dots in that class drop into a blue bar of that height (`ClassHistogram`, counts axis 0 to 80), the count label above it: 20, 50, 70, 40, 20. On "touch" the shared bar edges pulse, tag "continuous classes: no gaps". Right column: the site's table, class and frequency rows (`DistributionTable`).

### 3. interval probability from the histogram
> Now a useful question. What's the probability that a time is at least zero point two, but less than zero point four seconds? Two classes cover that range, with fifty and seventy times. So the estimate is one hundred and twenty out of two hundred, which is zero point **six**. Each class's relative frequency is its count over two hundred, and they add to one, because every time lands in exactly one class.

Visual: task strip "Estimate P(0.2 ≤ T < 0.4)". On "Two classes" the second and third bars tint amber and the range 0.2 to 0.4 is bracketed on the axis. Right column: "P(0.2 ≤ T < 0.4) ≈ (50 + 70)/200 = 120/200 = 0.6"; on "six" the 0.6 is boxed with "≈". On "relative frequency" a relative-frequency row fills in the table: 0.10, 0.25, 0.35, 0.20, 0.10, and the y axis relabels from counts to relative frequency (0 to 0.4) while the bars keep their heights. On "add to one" a sum cell "= 1" with a tick and a grey tag "s01: each trial lands in one place".

### 4. a range that cuts a class
> What about a time under zero point two five seconds? That cuts the second class in half, and the histogram doesn't say where its fifty times sit. The usual assumption is that they're spread evenly. Then about twenty five are below zero point two **five**. Add the twenty from the first class, and that's forty five out of two hundred, zero point two two five. In an exam, write that assumption down. It's part of the answer.

Visual: board continues (amber clears). Task strip "Estimate P(T < 0.25)". A dashed vertical line at 0.25 splits the second bar; the left half tints amber with a grey dashed edge and a tag "assume: spread evenly in the class". On "five" a "25" label sits on the left half. Right column: "P(T < 0.25) ≈ (20 + 25)/200 = 45/200 = 0.225" and below it, in grey, "= 0.10 + ½(0.25)". On "write" a chip "State the assumption" with a `PenArrow` to the grey tag.

### 5. shrink the window: a single value gets 0
> Now back to the hook. The class from zero point three to zero point four has probability about zero point three five. Shrink it to one hundredth of a second, centred on zero point three five. With the times spread evenly, it holds a tenth as many, so about zero point zero three five. Shrink it to one thousandth, and it's about zero point zero zero three five. The probability shrinks in step with the width. A single exact value has width zero, so for a continuous random variable, its probability is **zero**.

Visual: zoom (camera push) on the third bar; an inset axis 0.29 to 0.41 (author note i). `ShrinkingWindow`: the amber slice covers the whole class, readouts "width 0.1" and "probability ≈ 0.35". On "one hundredth" the slice narrows about 0.35 to width 0.01 (over about 1 s); readouts "width 0.01", "≈ 0.035". On "one thousandth" it narrows to 0.001; readouts "width 0.001", "≈ 0.0035". On "in step" a grey table builds beside it (width row and probability row, three columns, ratio arrows "÷ 10"). On "zero" the slice becomes a line at 0.35, readouts "width 0", "probability 0", and the boxed rule writes: "P(X = x) = 0 for every x (X continuous)". The hook chip "P(T = 0.35 exactly) = ?" returns and fills "0".

### 6. zero isn't impossible
> But someone's time really is zero point three five something. Probability zero isn't the same as impossible. Some exact time always happens, but no single value carries any probability on its own. Only intervals do, like zero point three four to zero point three six **seconds**.

Visual: the stopwatch plate returns small at the top right with its digits "0.3517…". A chip "P = 0 ≠ impossible" writes. On "Only intervals" the inset axis shows a short amber slice from 0.34 to 0.36 with a grey readout "≈ 0.07" (author note b: 0.02 × 3.5). On "seconds" the line at 0.35 dims and the slice glows, tag "intervals carry probability".

### 7. endpoints don't matter
> The ends of an interval are single values, so they carry no probability. So including or excluding the ends makes no **difference**. Less than, or less than or equal to, gives the same answer. That's not true for a discrete variable. For a fair die, two to five including both ends has probability four sixths, but strictly between them it's two sixths. The ends carry a sixth **each**.

Visual: board clears. Right column: the four forms write one under another, "P(a < X < b) = P(a ≤ X < b) = P(a < X ≤ b) = P(a ≤ X ≤ b)", with a grey tag "P(X = a) = P(X = b) = 0". On "difference" the four "≤" and "<" signs glow in turn. On "discrete" a small `ProbabilityBars` panel at the left: the fair die, six teal bars at 1/6 (s01 recalled). Bars 2 to 5 tint amber with "P(2 ≤ X ≤ 5) = 4/6"; then bars 3 and 4 only, "P(2 < X < 5) = 2/6". On "each" bars 2 and 5 pulse, tag "1/6 each: discrete ends carry probability".

### 8. the cumulative distribution function
> There are infinitely many intervals, but one function holds them all. The cumulative distribution function, or C D F, is F of x equals the probability that X is less than or equal to x. Cumulative means running total. For the reaction times, add the classes from the left: zero point one, zero point three five, zero point seven, zero point nine and **one**. Now the probability between zero point two and zero point four is F of zero point four minus F of zero point two. That's zero point seven minus zero point one, zero point six, the same as **before**. And the probability of more than a is one minus F of a.

Visual: board clears to the reaction-time histogram (relative-frequency axis) at the top and empty axes below (x 0 to 0.7, y 0 to 1.1). Heading chip: "F(x) = P(X ≤ x)". `CumulativeBuild`: on each spoken running total the next bar slides down and stacks onto the last, leaving a teal point at its class's right end: (0.2, 0.1), (0.3, 0.35), (0.4, 0.7), (0.5, 0.9), (0.6, 1); on "one" the points join by straight teal segments from (0.1, 0) and the curve stays flat at 1 to the right and 0 to the left, grey tag "joins assume even spread: estimate". `CdfSubtraction` on "subtraction": amber height brackets at x = 0.4 (0.7) and 0.2 (0.1), and a difference bracket "0.6"; on "before" a grey chip "scene 3: 0.6" ticks. Right column: "P(a < X ≤ b) = F(b) − F(a)" and on the last sentence "P(X > a) = 1 − F(a)".

### 9. why F never goes down
> As x moves right, the event that X is at most x can only gain values, never lose them. So F never decreases. We say it's non-decreasing. It starts at zero, and it reaches one once x is past every possible **value**. For a continuous variable it has no jumps either, because a jump would mean one value carried probability.

Visual: camera continue. A marker on the x-axis slides from 0 to 0.7; an amber bracket "X ≤ x" stretches from the left edge to the marker and the shaded histogram region to its left only grows; a teal dot rides the F curve. Tag "non-decreasing: never goes down". On "starts at zero" and "value" the flat pieces at 0 and 1 glow with labels "F = 0 below" (left) and "F = 1 above" (right). On "no jumps" a grey dashed staircase ghost (the die's CDF, steps of 1/6) appears small beside it, tag "jumps: discrete"; the continuous curve is tagged "unbroken: continuous".

### 10. a CDF from a formula: x squared over nine
> Now a C D F from a formula. F of x is x squared over nine for x from zero to three, zero below that, and one above. Is it valid? At zero it's zero, and at three it's one, so the pieces join without a jump. Its derivative, two x over nine, is never negative there, so F never decreases. Graph it by hand or with a graphing app. It's flat at zero, leaves the origin flat, then curves up more and more steeply to the point three, **one**, and stays flat at one. It's not a straight **line**.

Visual: board clears (new case). Task strip "Is this a valid CDF? Graph it." with the piecewise formula below it as the conditions: "F(x) = 0 for x < 0; F(x) = x²/9 for 0 ≤ x ≤ 3; F(x) = 1 for x > 3" (site problem 1). Right column `AlignedAlgebra`: "F(0) = 0, F(3) = 9/9 = 1 (pieces join)"; "F′(x) = 2x/9 ≥ 0 on [0, 3] (never decreases)"; "0 ≤ F(x) ≤ 1" with ticks. On "graph it" axes draw at the left (author note i) and a pen dot sketches the three pieces: flat at 0, a curve leaving (0, 0) with a flat `TangentTriangle`-free stub tagged "F′(0) = 0", rising to (3, 1), then flat at 1. On "one" an unbranded `ToolPanel` slides in and plots the same function; its curve overlays the sketch exactly, tag "graphing app: same curve". On "line" a dashed grey chord from (0, 0) to (3, 1) appears and is crossed, tag "not straight".

### 11. probabilities from that CDF
> Find the probability that X is more than one and at most two. That's F of two minus F of one, four ninths minus one ninth, which is one **third**. The probability that X is more than two is one minus four ninths, which is five ninths. And the probability that X equals two is zero, because X is **continuous**.

Visual: camera continue (the curve stays; the `ToolPanel` closes). `CdfSubtraction`: brackets at x = 1 (height 1/9) and x = 2 (height 4/9), difference bracket "1/3" on "third". Right column: "P(1 < X ≤ 2) = F(2) − F(1) = 4/9 − 1/9 = 1/3"; "P(X > 2) = 1 − F(2) = 1 − 4/9 = 5/9" with a bracket from 4/9 up to 1; "P(X = 2) = 0" on "continuous".

### 12. memory aid
> Two short lines to remember. First, points carry nothing, and intervals carry the probability. Second, between a and b, take F of the bigger end, minus F of the smaller **end**. If you ever get a negative answer, you've subtracted the wrong way round.

Visual: the handwritten lines write large: "Points carry nothing; intervals carry the probability." and "Between a and b: F(bigger) − F(smaller)." On "end" a small F curve beside them shows the two brackets (upper minus lower). On the last sentence a chip "F(1) − F(2) = −1/3" fades in and is crossed, caption "wrong way round". Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. The masses of four hundred tomatoes are grouped into classes. Estimate the probability that a tomato's mass is at least two hundred and twenty five grams. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The masses of 400 tomatoes are grouped below. Estimate P(M ≥ 225), stating any assumption you make." with the table "mass (g): 100 ≤ m < 150, 150 ≤ m < 200, 200 ≤ m < 250, 250 ≤ m < 300; frequency: 60, 140, 160, 40". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No histogram, no relative frequencies, no split line.

### 14. feedback 1 (brief)
> Two hundred and twenty five cuts the two hundred to two hundred and fifty class in **half**. Assume its one hundred and sixty masses are spread evenly, so about eighty are above two hundred and twenty five. Add the forty in the top class. That's one hundred and twenty out of four hundred, zero point **three**. Zero point five is wrong. It counts the whole class, including masses below two hundred and twenty **five**.

Visual: card shrinks to the top. On "half" "225" is underlined in the card and a small histogram of the four classes draws, the third bar split at 225, its right half amber with the grey tag "assume: spread evenly". Row "½ × 160 = 80"; row "P(M ≥ 225) ≈ (80 + 40)/400 = 120/400 = 0.3", boxed on "three". On "five" a chip "(160 + 40)/400 = 0.5" fades in and is crossed (caption "counts masses below 225"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A continuous random variable has F of x equals x squared plus two x, all over eight, for x from zero to two. Find the probability that X is at least zero point five, and less than one point five. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find P(0.5 ≤ X < 1.5)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No graph and no F values.

### 16. feedback 2 (brief)
> It's F of one point five, minus F of zero point **five**. The endpoints carry no probability, so the mixed signs don't matter. F of one point five is twenty one over thirty two, and F of zero point five is five over thirty two. So the answer is sixteen over thirty two, which is one **half**. Minus one half is wrong. It subtracts the wrong way round, and a probability can't be **negative**.

Visual: card shrinks to the top. On "five" "0.5 ≤ X < 1.5" is underlined in the card and the row "P(0.5 ≤ X < 1.5) = F(1.5) − F(0.5)" writes, grey tag "endpoints carry 0". Rows "F(1.5) = (2.25 + 3)/8 = 21/32" and "F(0.5) = (0.25 + 1)/8 = 5/32"; on "half" boxed "21/32 − 5/32 = 16/32 = 1/2". On "negative" a chip "5/32 − 21/32 = −1/2" fades in and is crossed (caption "probabilities are never negative"). Hold about 1 second.

### 17. handoff
> So only intervals carry probability, and the C D F gives each one with a subtraction. Next, a new question. Here's F of x equals x squared over nine again. It climbs slowly near zero, and steeply near three. What does that steepness tell us about where the values of X **are**?

Visual: the two memory-aid lines show small at the top, then fade on "Next". Board clears to one graph (author note i): F(x) = x²/9 on x from −1 to 4 with its flat pieces, teal, tag "F(x) = P(X ≤ x)". On "slowly" a short amber tangent stub at x = 0.5 (gentle); on "steeply" one at x = 2.5 (steep). No slope values. A chip "Next: how steeply F climbs" and a "?" chip on "are". Hold about 2 seconds. This is s05's opening frame; scene 18 returns to it after the notes.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A continuous random variable can take any value in an interval. Estimate P(a ≤ X < b) from a histogram by the relative frequency of that range; a range that cuts a class needs a stated even-spread assumption.
2. P(X = x) = 0 for every x (X continuous), so P(a < X < b) = P(a ≤ X < b) = P(a < X ≤ b) = P(a ≤ X ≤ b). Probability 0 is not impossible.
3. CDF: F(x) = P(X ≤ x). P(a < X ≤ b) = F(b) − F(a); P(X > a) = 1 − F(a).
4. F never decreases, runs from 0 to 1, and has no jumps for a continuous X. Graph it with its flat pieces (0 before, 1 after).

Memory aid (large, on the notes screen): *Points carry nothing; intervals carry the probability.* Second line: *Between a and b: F(bigger) − F(smaller).*

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s, root decision 20) back to scene 17's frame exactly (F(x) = x²/9 with the two tangent stubs, the chips "Next: how steeply F climbs" and "?"). This is the final frame and s05's opening frame.

## Teaching checks

- **Does it explain causes?** Why intervals: measured values almost never repeat (2). Why the estimates add to 1: each time lands in one class (3). Why an assumption is needed: the histogram hides positions inside a class (4). Why one value gets 0: a slice's probability shrinks with its width (5). Why 0 is not impossible: some value always happens, but none carries probability alone (6). Why endpoints don't matter: they are single values (7), and why they matter for a die (7). Why one subtraction works: F is a running total (8). Why F never decreases: the event X ≤ x only grows (9). Why no jumps: a jump would be a point with probability (9). Why x²/9 is valid: join, derivative, range (10).
- **Misconceptions addressed:** "an exact value has a small positive probability" (1, 5); "probability 0 means impossible" (6); "≤ and < give different answers" (7; feedback 2); "count the whole class" (4; feedback 1 crossed); "F(a) − F(b)" (12; feedback 2 crossed); "a CDF is a straight line" (10); "the CDF is only defined on [0, 3]" (10; key note 4).
- **One idea at a time:** one interval per scene in 3 to 5; one width per sentence in 5; one property per sentence in 9; checking (10) separated from computing (11).
- **Video makes it easier:** the dots that never stack (2), bars that relabel without moving (3), a slice that shrinks to a line with its probability (5), bars stacking into the running total (8) and a bracket that only grows (9) are each the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and condition visible (the full table; the full piecewise F with its interval), 10 seconds each with the invitation to pause; neither card shows an estimate, an F value or the form of the answer. One crossed mistake each; feedback about 28 s and 27 s (scenes 14 and 16).
- **Avoided double teaching:** relative frequency and "each trial lands in one place" (s01) in one grey tag; the die distribution (s01) in one panel; the sign of a derivative (d09) in one phrase.
- **Syllabus coverage:** `cibf81b169` (2 to 4; A1; key note 1); `ci04530a48` (5 to 7; A2; key note 2); `ci9dad7e9e` (8, 11; A2; key note 3); `cicb65fc88` (9, 10; key note 4; with and without a graphing app in 10).
- **Out of scope by design:** density, area and constants (s05); mode and quantiles (s06); uniform (s07); continuous mean and variance (s08); mixed variables.

## Practice questions and model answers

**Attempt 1 (scene 13; original, HSC style, 2 marks suggested, not an official marking scheme).** "The masses of 400 tomatoes are grouped below. Estimate P(M ≥ 225), stating any assumption you make." Table: 100 ≤ m < 150: 60; 150 ≤ m < 200: 140; 200 ≤ m < 250: 160; 250 ≤ m < 300: 40.
Model answer: assume the 160 masses in 200 ≤ m < 250 are spread evenly, so about 80 lie in 225 ≤ m < 250. P(M ≥ 225) ≈ (80 + 40)/400 = 120/400 = 0.3. Classic mistake (crossed): "0.5" (counts the whole 200 to 250 class).

**Attempt 2 (scene 15; original, HSC style, 2 marks suggested).** "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find P(0.5 ≤ X < 1.5)."
Model answer: X is continuous, so P(0.5 ≤ X < 1.5) = F(1.5) − F(0.5) = 21/32 − 5/32 = 16/32 = 1/2. Classic mistake (crossed): "−1/2" (F(0.5) − F(1.5)).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Reaction-time data (site card 02) | 20, 50, 70, 40, 20 in [0.1, 0.2) to [0.5, 0.6); total 200; rel. freq. 0.10, 0.25, 0.35, 0.20, 0.10; sum 1 | 2, 3 |
| Interval estimate | P(0.2 ≤ T < 0.4) ≈ 120/200 = 0.6 | 3, 8 |
| Cut class | P(T < 0.25) ≈ 45/200 = 0.225 = 0.10 + ½(0.25) | 4 |
| Shrinking (site card 03) | width 0.1, 0.01, 0.001 about 0.35: ≈ 0.35, 0.035, 0.0035; → 0 | 5 |
| Interval in scene 6 | 0.34 to 0.36: ≈ 0.07 (grey) | 6 |
| Die contrast | P(2 ≤ X ≤ 5) = 4/6; P(2 < X < 5) = 2/6; ends 1/6 each | 7 |
| Running total | F at 0.1 to 0.6: 0, 0.1, 0.35, 0.7, 0.9, 1; F(0.4) − F(0.2) = 0.6 | 8 |
| x²/9 (site problems 1, 2) | F(0) = 0, F(3) = 1; F′ = 2x/9 ≥ 0; F(1) = 1/9, F(2) = 4/9; P(1 < X ≤ 2) = 1/3; P(X > 2) = 5/9; P(X = 2) = 0 | 10, 11, 17 |
| Memory-aid chip | F(1) − F(2) = −1/3 (crossed) | 12 |
| A1 | 60, 140, 160, 40 (400); 80 + 40 = 120; 0.3; crossed 0.5 | 13, 14 |
| A2 | F(1.5) = 21/32, F(0.5) = 5/32; 1/2; crossed −1/2 | 15, 16 |
| Handoff tangents | x = 0.5 and x = 2.5 on x²/9 (no values shown) | 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (3 Nov, isolated Python run); Codex to re-check numerically and with a CAS.

- 20 + 50 + 70 + 40 + 20 = 200; 20/200 = 0.1, 50/200 = 0.25, 70/200 = 0.35, 40/200 = 0.2; sum of relative frequencies 1.
- (50 + 70)/200 = 0.6; (20 + 25)/200 = 0.225.
- 0.35 × 0.1 = 0.035; 0.35 × 0.01 = 0.0035; 3.5 × 0.02 = 0.07.
- Cumulative 0.1, 0.35, 0.7, 0.9, 1.0; 0.7 − 0.1 = 0.6.
- x²/9: values 0 and 1 at 0 and 3; derivative 2x/9; F(1) = 1/9, F(2) = 4/9; 4/9 − 1/9 = 1/3; 1 − 4/9 = 5/9.
- Die: 4/6 and 2/6.
- A1: 60 + 140 + 160 + 40 = 400; 160/2 = 80; 120/400 = 0.3; 200/400 = 0.5.
- A2: (x² + 2x)/8 at 0, 0.5, 1.5, 2: 0, 5/32, 21/32, 1; derivative (x + 1)/4 > 0 on [0, 2]; 16/32 = 1/2.

## Memory aid check

- **"Points carry nothing; intervals carry the probability."** Meaning, as said in scene 12: for a continuous variable, P(X = x) = 0 and every positive probability belongs to an interval. Assumptions checked: true for a continuous random variable (the narration and key note 2 scope it); false for a discrete one (scene 7 shows the die). Introduced after the cause (5, 6).
- **"Between a and b: F(bigger) − F(smaller)."** Meaning: P(a < X ≤ b) = F(b) − F(a) with b > a; because F never decreases, the answer is never negative. Assumption: a < b; for a continuous X the endpoint signs do not matter (scene 7). It helps a new case (feedback 2 uses it, and a negative answer is a visible check).
- **Considered, not used:** "zero means impossible" as a contrast slogan (states the misconception); an ogive mnemonic (unneeded once F is a running total).

## Narration length estimate

Revision 1 (3 Nov; counted by script `s0406_count.py` in the designer's scratchpad with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,413 characters** (6,430 with joining spaces), 18 scenes. Characters per scene (1 to 18): 410, 517, 402, 420, 508, 275, 378, 606, 318, 480, 302, 247, 187, 408, 227, 380, 273, 75. At 13.3 characters per second the speech is about 482 s; add about 10 s of settling time (the dots dropping in scene 2, the shrinking slice in 5, the running-total build in 8, the sketch and tool overlay in 10), 3 s for the hook prediction ring, 20 s for two countdowns, 5 s of short holds (12, 14, 16, 17) and about 55 s more of the quiet notes hold (about 85 s of holds): **about 567 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Feedback: scene 14 about 28 s and scene 16 about 27 s (including the 1 s holds). Close to the cap: a first draft at 7,314 characters was cut to this (scenes 1 to 10 and 17 tightened). Reserve trims if the voiced take runs long (about 250 characters available): scene 7's "Less than, or less than or equal to, gives the same answer." (keep the glowing signs); scene 6's last sentence (keep the slice silent); scene 9's "We say it's non-decreasing." (keep the tag); scene 17's first sentence.

## Scene list and build ids

Lesson key `m-a12s04` (route math-a12-s04). Suggested explainer folder `src/explainer/lessons/math-a12-s04` and build folder `docs/production/claude-pm/lessons/m-a12s04` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 18 scene headings, all `### N.`): hook, values-dont-repeat, interval-estimate, cut-class, shrink-window, zero-not-impossible, endpoints, cdf-running-total, never-decreases, formula-cdf, cdf-probabilities, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): s03's last frame continues into scene 1 (the 64 thin bars slide out, the stopwatch slides in); 1 to 2 clear change; 2 to 3 to 4 camera continue (same histogram); 4 to 5 camera push into the third bar; 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 clear change (new case); 10 to 11 camera continue; 11 to 12 pull back; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s04-learning-review.md`, `science_check` = `checks/m-a12s04-maths-check.md`.

## Assets

Have: `FunctionGraph` / `GraphLayer` with `domain` pieces (scenes 10, 11, 17), `TangentTriangle`-free tangent stubs via `tangent` (10, 17), `ReadoutPanel`, `AlignedAlgebra`, `ToolPanel` (unbranded; i12 decision 38), `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Proposed in `math-a12-s01.md` to `s03.md` (probability kit, not yet built: `ProbabilityBars`, `DistributionTable`, `StackedTotalBar`, `BalancePoint`, `DeviationArms`, `SpreadBrackets`, `RunningMeanTrace`): this video uses `ProbabilityBars` (scene 7, and the die staircase ghost in 9) and `DistributionTable` (scenes 2, 3).

New (coded), specified below: `ClassHistogram`, `ShrinkingWindow`, `CumulativeBuild`, `CdfSubtraction`. They serve s05 (density histogram, area brackets) and s06 (quantile reading) too. New (painted): one stopwatch plate.

## Codex asset brief

**A. Coded continuous-probability parts (new, for the next maths kit brief; shared with s05 and s06).** In `src/explainer/math/`, exported through `kit.tsx`, each with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. Every displayed value is formatted from the same data that sets the geometry.

1. **`ClassHistogram`** (scenes 2 to 5, 8, 14; s05 scene 3). Touching bars over class boundaries (`edges`, e.g. [0.1, 0.2, …, 0.6]) with `counts`. Props: `mode` (`counts`, `relative` or `density`; relabels the y axis over a set duration while bar heights stay fixed for counts → relative, and rescales heights for relative → density by dividing by class width; checks that each bar's area equals its relative frequency in density mode), `dropFrom` (author-supplied dot positions that fall into their class with cues), `shade` ({from, to, colour, at}[], may cut a class: the cut part gets a grey dashed edge and an optional `assumptionTag`), `labels` (counts or exact strings), `areaLabels` (density mode), `total`. Checks: site data 20, 50, 70, 40, 20 relabel to 0.10 to 0.35 with heights unchanged within 0.5 px; density heights 1.0, 2.5, 3.5, 2.0, 1.0 with areas 0.10 to 0.35; shade [0.2, 0.25) area 0.125 of the total; tomato data 60, 140, 160, 40 split at 225.
2. **`ShrinkingWindow`** (scenes 5, 6). A shaded slice about a centre `c` on an inset axis, with `widths` ({w, at}[]) animating the slice width, and `density` (constant height inside the class, author-supplied: 3.5) so the probability readout is w × density. Ends in a line with readouts "width 0", "probability 0" when w reaches 0. Optional `table` (width and probability rows built as it shrinks, with "÷ 10" arrows). Checks: readouts 0.35, 0.035, 0.0035, 0.07 (for [0.34, 0.36]); slice pixel width proportional to w.
3. **`CumulativeBuild`** (scenes 8, 9). Takes a `ClassHistogram` set and stacks its bars into running-total points at the class right ends with cues, joining them by straight segments (`join: 'linear'`, tagged estimate) and drawing flat pieces at 0 and 1. Optional `eventBracket` ({x path, at}: the "X ≤ x" bracket and a dot riding F). Optional `stairGhost` (a discrete CDF staircase for comparison; here the die, steps of 1/6 at 1 to 6). Checks: points (0.2, 0.1), (0.3, 0.35), (0.4, 0.7), (0.5, 0.9), (0.6, 1); F(0.25) on the join = 0.225; the stair ghost has six jumps of 1/6.
4. **`CdfSubtraction`** (scenes 8, 11, 12, 16; s05). On any `FunctionGraph` of F: height brackets at `a` and `b` from the axis to F, a difference bracket between the two heights with a label, an optional `complement` bracket from F(a) up to 1, and `wrongWay` (draws the reversed difference as a crossed chip). Values from the supplied F. Checks: x²/9 at 1 and 2 gives 1/9, 4/9, 1/3 and complement 5/9; the running total at 0.2 and 0.4 gives 0.6.

**B. Painted plate (new; transparent PNG with a true alpha channel, no background, no shadow box, no text, no people, no hands; flat paper-friendly painted style matching the existing explainer and `maths-a12-` plates; never stretched, scale uniformly only).**

1. `maths-a12-stopwatch.png`: a simple digital stopwatch, front view, round-cornered body with two small buttons on top, a **blank, flat light-grey display** so the digits are coded on top; about 1,000 × 1,000 px; the display's rectangle recorded in a sidecar JSON (`display`: x, y, width, height in px) so coded digits register exactly. No brand, no numerals, no lanyard, no hand.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (exact fractions; data decimals), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the shrinking argument (scene 5) states the even-spread assumption for the data steps and states P(X = x) = 0 for a continuous random variable (model), not as a fact about the 200 data values.
3. Confirm the scope of every learner-visible general claim: the four equal interval forms and "no jumps" are stated for a continuous X; the die contrast is labelled discrete; the running-total joins are tagged as an estimate; key notes 1 to 4 carry the same scope as the narration.
4. Confirm F(x) = x²/9 is shown and stated with its flat pieces, and that the hand sketch and the graphing-app curve are the same function.
5. Confirm both attempt questions carry every demand and condition (the full table and "stating any assumption"; the full piecewise F and the interval), and that neither card or its visuals shows a split line, an estimate or an F value.
6. Confirm the handoff (scene 17) states no density, slope value or derivative, and asks a question only.
7. Confirm the four syllabus quotes match the crosswalk JSON exactly and no site module label ("MAV-12-07", "Module 5") appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the plate request contains no people, hands, brand or printed numerals.

## YouTube metadata (draft)

Title: Continuous Random Variables: Why P(X = x) = 0 and the CDF F(x) = P(X ≤ x) | Year 12 Maths Advanced

(Title length: 87 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson08.sa.html

What's the probability a reaction time is exactly 0.35 seconds? For a measured quantity, the answer is 0, and every exact value gets 0. See why: group 200 reaction times into a histogram, estimate interval probabilities (stating the even-spread assumption when a range cuts a class), then shrink an interval until it becomes a single value. Probability 0 isn't impossible: only intervals carry probability, so including or excluding the endpoints changes nothing. Then meet the cumulative distribution function F(x) = P(X ≤ x), a running total that never decreases, find P(a < X ≤ b) = F(b) − F(a), and check and graph F(x) = x²/9 by hand and with a graphing app. Two exam-style questions at the end.

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

- **1. s03's handoff frame (checked).** Scene 1 opens on `math-a12-s03.md` scene 13's final frame as written on 3 Nov (64 thin bars across 0 to 4, "Next: what if X can take any value in an interval?"). s03 says "like a waiting time"; this video uses a reaction time (also a time), so the spoken link holds. If s03's handoff changes in review, change scene 1's first visual only. s03's thin bars have no y values, so they are not reused as the reaction-time histogram.
- **2. Hook context (learning review).** The site's hook is a bus arrival time; this design uses the reaction-time data throughout so the hook, the histogram and the zero argument share one context. Confirm this is clearer; the bus could be a one-sentence aside in scene 6 (+ about 120 characters) if the reviewer wants the site's framing.
- **3. Stopwatch plate (root).** One small plate for context. If root prefers no maths plates outside s01's set, a coded timer outline with the same display works.
- **4. "Zero point three five" (voice pilot).** Spoken decimal form is a brief 124 pilot item, shared with s01 ("zero point one four"); the scripts use "zero point".

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s01 and s03 entry knowledge; check that the dots that never repeat make "intervals" necessary before any rule; that the even-spread assumption is stated where it is needed and nowhere else; that the shrinking slice is the evidence for P(X = x) = 0; that "zero is not impossible" is clear; that the running total reproduces 0.6; that the non-decreasing reason is the growing event; that the sketch shows the flat start and flat pieces; that the attempt cards give nothing away), then the Codex maths check and error check.
- The shrinking slice, the stacking bars and the growing bracket carry the explanation; judge them at playback speed in the voiced preview, not from stills.
