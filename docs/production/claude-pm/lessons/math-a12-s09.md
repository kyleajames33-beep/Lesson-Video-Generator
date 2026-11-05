# Maths A12 S09: When is a normal model useful, and what does its shape mean? Many small nudges, the bell curve, mean = median = mode, X ∼ N(μ, σ²), and tail areas out to ±∞ (design)

Status: Revision 3 (5 Nov 2026): brief 171 fixes applied (scene 14 summary scoped to a clue check, matching "clues, not a proof"); needs the Codex error check of Revision 3. Previously Revision 2 (4 Nov 2026, brief 162 repairs). Previously Revision 1 (3 Nov 2026), overnight queue wave I2. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `QuestionCard`, `Countdown`, `KeyNotes`), `AreaFill` (i06), the probability parts from s01 to s04 (`ClassHistogram`, `BalancePoint`) and the additions under "Codex asset brief" (`PegBoard`, `NormalCurve`, `AreaFill` open ends, `TailMirror`). Nothing recorded; human listening pending.

Narration 5,627 characters, 15 scenes, about 525 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: ninth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 61) and the first on the normal distribution, after s08 (continuous moments) and before s10 (the empirical rule and graphing the normal PDF and CDF). Templates: `math-a12-i05.md` and `math-a12-d10.md` (section structure, voice, attempt and feedback pattern, key notes), with `math-a12-s03.md` and `math-a12-s04.md` for the probability conventions. Maths visuals are coded (the peg board is an abstract diagram of pegs and dots); one small painted plate (a plain plastic bottle) carries the filling context. No people. Pre-design pack: none, so this design does the pack work itself. Site lessons read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson02.sa.html` (The Normal Distribution), SHA256 `c80e763e63444ac1420243e1bdc7bedde0cca84edae267beb462f8635283f2b6`, and `lesson03.sa.html` (Normal Distribution Applications), SHA256 `08101d4bc1a93fb663cde4c428cd800e2f0e2c259d39a55ec9ca13506072c758`. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s09` ("When is a normal model useful, and what does its shape mean?", five syllabus actions, site sources lessons 2 and 3, no coverage gaps).

Owner rules applied: as s07 and s08 (new 2024 syllabus only; codenames and exact wording; no site module label; maths coded, objects painted; no people; one reasoning stage at a time; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed-out mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causal conversational narration). Binding root decisions: exact values in the algebra; the one table value in this video (P(X < 242) = 0.0548) is a given in the question, not computed; attempt cards give nothing away; the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, The normal distribution; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci2ef338c4`: "Identify the normal distribution as a continuous probability distribution that is used to model many naturally occurring phenomena"
- `cib8d213fb`: "Identify the graph of the probability density function of a normal distribution, the normal curve, as an ‘ideal’ bell-shaped curve, symmetrical about its mean which is equal to its mode and median, and as having most values concentrated about the mean"
- `ci9431590e`: "Identify contexts that can be approximately modelled by a normal random variable"
- `ci9f30e6a8`: "Use the notation X∼N(μ,σ^(2)) to represent a normally distributed random variable that has mean μ and standard deviation σ"
- `ci477a9380`: "Represent probabilities associated with the normal distribution by areas of shaded regions under the normal curve, which may extend to ±∞"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s08's handoff frame (a histogram of 1,000 simulated bottle fills bunched in a bell around a 500 mL target, "?", chip "Next: when is a normal model useful?"; `math-a12-s08.md` scene 13). Explains why many measurements bunch in a bell (many small, independent nudges add up: a 12-row peg board, one path to an edge against 924 to the middle) (`ci2ef338c4`); lays the smooth normal curve over the histogram and names it as a continuous model of many natural measurements; reads its shape: symmetric about μ, so μ is the median; highest at μ, so μ is the mode; most values near μ; tails that approach the axis without reaching it (`cib8d213fb`); writes X ∼ N(500, 64) for the fills (lesson 3's hook, numbers unchanged: μ = 500 mL, σ = 8 mL), with the second number as the variance (lesson 2 trap 01: N(60, 9) has σ = 3), and slides μ and stretches σ (`ci9f30e6a8`); contrasts contexts that are and aren't approximately normal (`ci9431590e`); shades the underfill tail P(X < 490) out to −∞, the overfill tail out to +∞, their equal areas by symmetry and the middle as 1 minus both tails (`ci477a9380`). Stops at the shape, the notation and shaded areas. Not taught: the PDF formula, the global maximum and points of inflection, graphing applications (s10); the empirical rule's 68%, 95% and 99.7% (s10; the handoff asks a question only); z-scores and tables (s11); finding μ or σ from a probability (s12).

## Decisions

- **Learner question kept (outline).** "When is a normal model useful, and what does its shape mean?" The answer, built in order: many measurements are the sum of many small, independent nudges, and sums like that pile up in the middle and thin out evenly on both sides (2); the smooth bell that fits is the normal curve, a continuous model of many natural measurements (3); symmetry makes μ the median, the peak makes μ the mode, and most values sit near μ, with tails that never quite reach the axis (4); two numbers fix the curve, the mean and the variance (5); a normal model is useful when a variable bunches symmetrically around one peak, and wrong for skewed, flat or piled-at-an-edge variables (6); probabilities are shaded areas, and tails run to ±∞ (7, 8).
- **Hook (continuity).** s08's histogram returns; the narration says what the student can see (bunched near 500, rarer further out, mirror sides) before asking why. The site's lesson 2 hook (IQ above 130 by the empirical rule) belongs to s10 and is not used.
- **Why a bell (`ci2ef338c4`; the cause; not on the site).** `PegBoard`: 12 rows of pegs; each peg sends a dot left or right with equal chance (one nudge each); 400 stored dots fall into 13 bins (author note c: 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0). Counting is the reason: one path reaches the far left (left every time), while 924 of the 4,096 paths end in the middle (six of each, in any order), shown as a grey readout, not computed on screen. The narration scopes the claim: "When many small, independent effects add up, the total often has a shape close to a bell." No theorem is named; binomial is not named (root decision 54). The fill causes ("small changes in pressure, temperature or timing") are plausible examples, said with "like".
- **The normal model (`ci2ef338c4`; site lesson 2 card 05's examples).** The smooth curve fades in over the fill histogram (`ClassHistogram` density mode with `NormalCurve` for μ = 500, σ = 8). Examples spoken: adult heights in one population, measurement errors, fills from a machine (site card 05: "Heights of adult males in a homogeneous population", "Measurement errors in laboratory experiments", "Manufacturing tolerances"). "It's a model": the fit is approximate (`ci9431590e`'s "approximately").
- **Shape and its meaning (`cib8d213fb`).** Each property is tied to a reason on the graph: `TailMirror` folds the left half onto the right (symmetric), half the area each side tints "½ | ½" (so μ is the median: P(X < μ) = 0.5), the peak glows at μ (the mode, s06's rule "where f is highest"), the bulk near μ is tinted, and the tails are zoomed to show the gap to the axis shrinking but never closing (asymptotic, "goes on forever", extends to ±∞). The mean's balance-point reading (s08) is one phrase: "it balances at μ too".
- **Notation (`ci9f30e6a8`).** X ∼ N(μ, σ²), read "X is normal, with mean mu and variance sigma squared". For the fills: X ∼ N(500, 64), σ = √64 = 8 mL (site lesson 3's hook numbers, written in the variance form so the second number has to be read). The trap (site lesson 2 trap 01): the second number is σ², not σ. Then `NormalCurve` animations: μ from 500 to 510 slides the bell; σ from 8 to 12 spreads and lowers it with the area readout fixed at 1. "Lower because the area must stay one" is the cause.
- **When the model fits (`ci9431590e`; the contrast).** Fits: fills, adult heights in one population, measurement errors (bunched, symmetric, one peak, thin tails both ways). Doesn't fit: household water use (site lesson 10 Q3: strongly skewed to the right), the bus wait (s07: flat), a component's lifetime (site lesson 10 Q2: piled at 0, decreasing). Three small density sketches, each with its reason tag. The checklist "continuous, one peak, roughly symmetric, thinning out both ways" is on screen, and "many small independent effects adding up" is the good sign.
- **Shaded regions to ±∞ (`ci477a9380`; site lesson 3's hook and its three probability types).** Underfill P(X < 490) shades from 490 leftwards with an arrow "to −∞" (`AreaFill` open end). The model also gives negative fill volumes a positive area, but far too small to matter (grey readout "P(X < 0): less than 10⁻⁵⁰⁰", author note f). Overfill P(X > 510) shades to +∞. 510 is 10 above as 490 is 10 below, so `TailMirror` lays one tail over the other: equal areas. The middle is 1 minus both tails. No probability value is computed (tables are s11; the empirical rule is s10). The site's lesson 3 bottle numbers (500, 8, 490) are unchanged; 510 is added for the symmetric tail.
- **Attempts (original).** (A1) "The lengths X mm of bolts are modelled by X ∼ N(64, 16). State the mean, the median, the mode and the standard deviation of X." All three centres 64; σ = 4 mm. Crossed: "σ = 16" (read the variance as σ). (A2) "The masses X g of chocolate bars are modelled by X ∼ N(250, 25). Given that P(X < 242) = 0.0548, find P(X > 258) and P(242 < X < 258)." By symmetry 0.0548; middle 1 − 2(0.0548) = 0.8904. Crossed: "1 − 0.0548 = 0.9452" (removed only one tail). The chocolate bar distribution and the 242 g cut are site lesson 3 problem 1 (N(250, 5²), P(X < 242) ≈ 0.0548); the 258 mirror and the middle are new. Neither card shows a curve, a shading or the answer form.
- **Mistake scene:** none separate. "σ is the second number" (5; A1 crossed); "a bell fits anything" (6); "the tails stop at the edge of the graph" (4, 7); "the middle is 1 minus one tail" (A2 crossed); "a normal model allows impossible values, so it's wrong" (7: tiny area, still useful).
- **Memory aid.** "Mirror, middle, forever." See "Memory aid check".
- **Handoff (outline next: s10, "How do graphing tools verify the empirical rule and normal CDF?").** Scene 14: the fills' bell N(500, 64) with dashed marks at 492 and 508 (μ ± σ), then 484 and 516, then 476 and 524, the region between the inner pair tinted, "?" and chip "Next: how much area lies within one, two and three σ?". No percentage is shown or spoken. This is s10's assumed opening frame (open decision 1).
- **Site sources used:** lesson 2 card 05 (notation, properties: symmetric, mean = median = mode, asymptotic, total area 1; the real-world examples), card 02's z-score and empirical rule are not used, trap 01 (N(60, 9) means σ = 3), key terms ("larger σ: wider, flatter bell"); lesson 3 hook (bottles: μ = 500 mL, σ = 8 mL, underfilled below 490 mL), problem 1 (chocolate bars N(250, 5²), P(X < 242) ≈ 0.0548, used as A2's given), card 05 (left tail, right tail, middle as the three probability types). Lesson 10 Q2 and Q3 contexts (lifetime, water use) are reused as non-normal contrasts. Not used: the empirical rule, z-scores, inverse normal, tables (s10 to s12).
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Lesson 2 card 06's lead-in says the 68–95–99.7 rule "gives exact percentages for intervals within 1, 2, and 3 standard deviations"; the same card's precision note and trap 03 say the percentages are approximate (68.27%, 95.45%, 99.73%). Suggested: "gives approximate percentages". (2) Lesson 2 card 02: "Every normal probability problem starts here" (the empirical rule) overstates; most values need z-scores and tables or technology (lesson 3). Suggested: "Many quick estimates start here." (3) Lesson 2 card 05 lists "Exam scores in large, well-designed assessments" as normal; marks are bounded and discrete, so this is approximate at best (note: say "approximately normal"). (4) Lesson 2 header label "MAV-12-06/07" style module labels and the "68–95–99.7%" en dashes are site style (no change needed); no em dashes found in the cards used.
- **Cause chain taught, in order:** (1) the fills bunch near the target, symmetrically (1); (2) a fill is the sum of many small, independent nudges, and there are far more ways to land near the middle than at an edge, so sums like this pile up in a bell (2); (3) the smooth bell is the normal model for many natural measurements (3); (4) symmetry gives median = μ, the peak gives mode = μ, most values are near μ, and the tails never reach the axis (4); (5) two numbers fix the curve; changing σ spreads and lowers it because the area stays 1 (5); (6) a normal model suits bunched, symmetric, one-peaked variables, not skewed, flat or edge-piled ones (6); (7) probabilities are shaded areas, tails reach ±∞, and symmetry matches equal tails (7, 8); (8) memory aid (9).
- **Entry knowledge (draft route `entryKnowledge`):** s04 (continuous variables, histograms, P(X = x) = 0), s05 (density, probability as area, total area 1), s06 (mode as the peak of f, median as the half-area point), s07 (uniform), s08 (E(X) as balance point; σ). Years 7 to 10: symmetry; Year 11: infinity notation in intervals.
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s09`; playlistOrder 61; mainLearnerQuestion as above; syllabusActionIds `ci2ef338c4`, `cib8d213fb`, `ci9431590e`, `ci9f30e6a8`, `ci477a9380`; prerequisiteVideos `math-a12-s06`, `math-a12-s08`; sourceLessons `random-variables/lesson02.sa.html`, `random-variables/lesson03.sa.html` (SHAs above); startBoundary "From s08's histogram of 1,000 bottle fills: why a bell?"; stopBoundary "Many small nudges as the cause of the bell; the normal curve as a model; symmetric, mean = median = mode, concentrated near μ, tails to ±∞; X ∼ N(μ, σ²) with the variance second; contexts that fit and don't; shaded left, right and middle regions with symmetry. No empirical rule percentages, PDF formula, inflection points, z-scores or tables."; nextHandoff "math-a12-s10: how much area lies within one, two and three σ? (marks at μ ± σ, μ ± 2σ, μ ± 3σ with ?)".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** dots falling through pegs into bins (`PegBoard`, new); the smooth bell fading over the histogram (`NormalCurve` over `ClassHistogram` density mode); the left half folding onto the right (`TailMirror`, new); half-area tints and the peak marker; a tail zoom showing the gap to the axis shrinking (`NormalCurve` `tailZoom`); μ sliding and σ stretching with the area readout fixed (`NormalCurve` animations); three small non-normal sketches (`FunctionGraph`); tails shading out to arrows "to −∞" and "to +∞" (`AreaFill` open ends, new); one tail laid on the other (`TailMirror`); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`. Painted plate: the bottle.
- **Board layout (constant):** as s04: heading top-left; graph on the left (about 1,000 × 520 px); notation, checklist and rows in the right column, one reasoning stage bright at a time.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Fills (from s08 author note h): Python 3.14 `random.Random(1636)`, `gauss(500, 8)` 1,000 times; classes [476, 480), ..., [524, 528) mL; counts 2, 17, 45, 94, 153, 192, 191, 152, 94, 41, 16, 3, 0; sample mean 499.91, sample sd 7.71; 105 below 490, 106 above 510. Stored as data.
  (b) Model: X ∼ N(500, 64), σ = 8. Density heights for the overlay: 1,000 × 4 × f(x) per class for counts mode; in density mode bar heights = count/(1,000 × 4).
  (c) Peg board: 12 rows, each nudge ±1 with probability ½; `random.Random(4505)`, 400 dots, bins (number of right nudges 0 to 12): 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0. Path counts: C(12, k); C(12, 0) = 1, C(12, 6) = 924, total 2¹² = 4,096. Expected bins for 400 dots: 0.1, 1.2, 6.4, 21.5, 48.3, 77.3, 90.2, 77.3, 48.3, 21.5, 6.4, 1.2, 0.1. Stored as data (paths too, for the animation).
  (d) Shape facts for N(μ, σ²): symmetric about μ; P(X < μ) = ½; maximum at μ; f > 0 for all real x and f → 0 as x → ±∞; total area 1. Mean = median = mode = μ.
  (e) σ animation: N(500, 8²) to N(500, 12²): peak height 1/(σ√(2π)) falls from 0.0499 to 0.0332 (grey readouts not shown; area readout 1 throughout).
  (f) P(X < 490) for N(500, 64): Φ(−1.25) ≈ 0.1056 (not shown; s11). P(X < 0): z = −62.5, Φ(−62.5) ≈ 10^(−850) (shown only as "less than 10⁻⁵⁰⁰", a safe bound). P(X > 510) = P(X < 490) by symmetry.
  (g) A1: N(64, 16): μ = 64, median 64, mode 64, σ = 4. Crossed σ = 16.
  (h) A2: N(250, 25), σ = 5; 242 = μ − 8 and 258 = μ + 8; P(X > 258) = 0.0548; P(242 < X < 258) = 1 − 2(0.0548) = 0.8904 (true value 1 − 2Φ(−1.6) = 0.89040, consistent). Crossed 1 − 0.0548 = 0.9452.
  (i) Pronunciations: "X is normal, with mean mu and variance sigma squared" for X ∼ N(μ, σ²) at first use, then "N of five hundred, sixty-four"; "minus infinity", "plus infinity"; "zero point zero five four eight"; "zero point eight nine zero four".
  (j) Windows: fill histogram x 470 to 530 mL, y 0 to 200 (counts) or 0 to 0.055 (density); bell for notation x 460 to 560; peg board 13 bins; non-normal sketches small, no values.

Main question: *A thousand bottle fills pile up in a bell around the target. Why does that shape turn up so often, when is it a good model, and what does the shape tell us?*
Entry knowledge (s04 to s08): densities, area as probability, mode and median, mean and σ.
Stops after: the cause of the bell, the normal curve's shape and meaning, the notation, contexts, and shaded regions to ±∞. No percentages, formula or z-scores.
Handoff: math-a12-s10: the bell with μ ± σ, μ ± 2σ, μ ± 3σ marks and "?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as s04 and s08: histograms and the normal curve teal; shaded probabilities `AREA_POS`; μ marker amber (`MATH_ACCENT`); peg-board dots amber; mirror folds blue; crossed red; algebra ink, current line bright, earlier lines dim. Screen notation writes X ∼ N(μ, σ²).

### 1. hook (why a bell?)
> Last video ended with these thousand simulated fills. The machine aims for five hundred millilitres. Most fills land close to that, a few land further away, and the two sides look like mirror **images**. Heights, measurement errors and many other natural measurements often make a similar bell shape. So why does it keep turning up? When can we use it as a model? And what does its shape tell **us**?

Visual: opens on s08's last frame exactly (the 1,000-fill histogram in 4 mL classes, the dashed target line at 500 mL, "?", chip "Next: when is a normal model useful?"). Heading writes on: "When is a normal model useful?". A grey tag "simulated: 1,000 fills" sits on the histogram (Revision 2). The bottle plate stands small at the top right. On the third sentence the tallest classes near 500 glow, then the end classes (2 and 3 bottles) pulse; on "images" a blue mirror line at 500 flashes and the left half ghosts across onto the right (approximate match; grey tag "roughly mirror images"). On "us" the chip "Why a bell?" moves to the top right.

### 2. many small nudges
> Here's one reason. A fill isn't set by one thing. Lots of small effects push it a little up or a little down, like tiny changes in pressure, temperature or timing. Watch dots fall through twelve rows of **pegs**. Each peg nudges a dot left or right, with equal chance. To land at the far left, a dot has to go left all twelve times, and only one path does **that**. To land one bin in from the edge, it needs just one right nudge, and that nudge can come at any of the twelve rows, so twelve paths do. To land in the middle, it needs six of each, in any order, and nine hundred and twenty-four paths do **that**. So the dots pile up in the middle and thin out towards the edges, the same on both **sides**. When many small, independent effects add up, the total often has a shape close to a **bell**.

Visual: clear change to `PegBoard` (12 rows, 13 bins). On "pegs" dots start falling from the top (stored paths, author note c), each bounce flashing its peg. On the next sentence one dot's path is traced: L, R, R, L, ... (12 arrows). On "that" (first) the all-left path draws in amber to the far-left bin, grey tag "1 path". On the next sentence twelve faint one-right-nudge paths draw into bin 1, the single right step marked on each at a different row, grey tag "12 paths". On "that" (second) a handful of different six-and-six paths draw into the middle bin, grey readout "924 of 4,096 paths". The remaining dots fall quickly (about 3 s) to the final bins 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0; on "sides" a mirror line flashes over the bins. On "bell" a grey tag "many small, independent nudges added up".

### 3. the normal model
> The smooth bell that fits this shape is called the normal distribution. It's a continuous probability distribution, and it's used to model many naturally occurring **things**, like adult heights in one population, measurement errors, and fills from a machine. A fill can be any volume, not just a whole number of millilitres, so the model is a smooth curve, not bars. Just as in the histogram, the area over an interval is the probability. The fit is never perfect. It's a model, and a good one when the data bunch symmetrically around one **peak**.

Visual: clear change back to the fill histogram (density mode: the y axis relabels to "density", bar heights fixed as in s04's `ClassHistogram`). On "things" the smooth `NormalCurve` (μ = 500, σ = 8) draws over the bars, tag "normal distribution: a continuous model". On the examples, three small chips: "adult heights (one population)", "measurement errors", "machine fills". On "any volume" the bars fade to ghosts under the curve; on "area over an interval" one class (496 to 500) and the matching strip under the curve shade together, grey tag "area = probability" (s04, s05). On "peak" a grey tag "approximate fit".

### 4. what the shape means
> So what does the shape mean? The curve is symmetric about its mean, mu. Fold it at mu and the two halves match. So half the area is on each side, which makes mu the median **too**. The curve is highest at mu, so mu is also the **mode**. Mean, median and mode are the same value. Most of the area sits close to the mean, and the curve gets lower and lower further out. That's why most fills land within a few millilitres of five hundred. Its tails get closer and closer to the axis, but never touch it. So the curve goes on forever, in both **directions**.

Visual: camera continue (the bars fade; the bell stays). On "symmetric" an amber μ marker at 500; on "Fold" `TailMirror` folds the left half onto the right along μ, matching exactly. On "too" the two halves tint "½ | ½", row "P(X < μ) = 0.5, so median = μ". On "mode" the peak glows, row "highest at μ, so mode = μ" (s06's rule in a grey chip). Row "mean = median = mode = μ" boxed; a small `BalancePoint` triangle under μ, level (grey tag "and it balances at μ"). On "close to the mean" the bulk near 500 tints deeper. On "never touch it" a zoom inset on the right tail (x 520 to 540): the gap between the curve and the axis shrinks but stays open, tag "never reaches 0". On "directions" arrows at both ends of the x axis, labels "to −∞" and "to +∞".

### 5. the notation: N of mu, sigma squared
> We write X is normal, with mean mu and variance sigma squared, like **this**. The first number is the mean. The second is the variance, not the standard deviation. The fills are N of five hundred, sixty-four, so sigma is the square root of sixty-four, which is eight **millilitres**. Change mu, and the whole bell slides along the **axis**. Make sigma bigger, and the bell spreads out and gets lower, because the total area has to stay **one**. Make it one and a half times as wide, and its peak drops to two thirds of the height.

Visual: right column on "this": "X ∼ N(μ, σ²)" with labels under each part ("mean", "variance"). On "variance" the σ² slot glows, grey chip "σ = √(second number)". Row "X ∼ N(500, 64)"; on "millilitres" "σ = √64 = 8 mL", boxed (site lesson 3's machine; grey "same as N(500, 8²)"). On "axis" the bell slides from μ = 500 to 510 and back (shape unchanged), tag "μ moves the centre". On "one" σ grows from 8 to 12: the bell widens and its peak lowers, with an area readout "area = 1" held fixed throughout; tag "σ sets the spread". On the last sentence ghost brackets show the width ratio "× 1.5" and the peak ratio "× 2/3" (no density values). A small grey chip in the corner: "N(60, 9): σ = 3, not 9".

### 6. when a normal model fits
> So when is a normal model useful? Look for continuous data that bunch around one peak and thin out evenly in both **directions**. Then lay the bell over the data and check that the tails match too. These are clues, not a proof. Many small, independent effects adding up is a good sign. Household water use isn't like that. Most homes use a moderate amount, but a few use a lot, so the tail stretches far to the **right**. The bus wait from two videos ago is flat, not a **bell**. And a component's lifetime piles up near zero, then trails **off**. For those, a normal model would put the probability in the wrong places.

Visual: clear change. Right column checklist writes on "directions": "continuous", "one peak", "roughly symmetric", "thins out both ways"; on "tails match" the fills' histogram returns small with its fitted bell and both tails glow, row "tails match the bell"; grey tag "clues, not a proof"; then "good sign: many small, independent effects". Left: three small density sketches appear one at a time, each with a dashed normal curve of the same mean overlaid. On "right" a right-skewed hump with a long right tail, tag "water use: skewed right" (site lesson 10 Q3). On "bell" s07's flat rectangle, tag "bus wait: flat". On "off" a decreasing curve from a high value at 0, tag "lifetime: piled at 0" (site lesson 10 Q2). On the last sentence the mismatch regions between each sketch and its dashed bell tint red briefly, tag "wrong places".

### 7. probabilities as shaded areas, out to infinity
> In a normal model, probability is still area. A bottle is underfilled if it holds less than four hundred and ninety millilitres. That's the area to the left of four ninety, and it runs all the way out to minus **infinity**. A single value has zero probability, so less than four ninety and at most four ninety give the same area. The model even gives a tiny area to impossible fills, like negative volumes. That area is so small it doesn't matter, so the model is still **useful**. Overfilling, above five hundred and ten, is the area to the right, out to plus **infinity**.

Visual: clear change to the fills' bell N(500, 64) (x 460 to 560, labels 490, 500, 510), bottle plate small. Task strip "Shade P(X < 490) and P(X > 510)." On "infinity" (first) `AreaFill` shades from 490 leftwards; the shading runs into an arrow at the left edge labelled "to −∞", row "P(X < 490) = area to the left of 490"; on "single value" a grey row "P(X ≤ 490) = P(X < 490), since P(X = 490) = 0" (s04). On the next sentences a grey readout "P(X < 0): less than 10⁻⁵⁰⁰" at the far left, tag "tiny: the model is still useful". On "infinity" (second) the right tail shades from 510 with an arrow "to +∞", row "P(X > 510) = area to the right of 510".

### 8. symmetry gives equal tails
> Five ten is ten millilitres above the mean, and four ninety is ten below. So by symmetry, these two tails have the same **area**. And the fills between them are what's left over. That's one, minus both **tails**. The mean splits the curve too. Each half is exactly a half, so the fills from four ninety up to five hundred are a half, minus that left tail. You can find all three regions from one tail, using nothing but the shape of the **curve**.

Visual: camera continue. On "area" `TailMirror` lifts the left tail and lays it over the right tail: an exact match, tags "10 below" and "10 above", row "P(X > 510) = P(X < 490)". On "tails" the middle region (490 to 510) shades in a lighter teal, row "P(490 < X < 510) = 1 − 2 × P(X < 490)". On "The mean splits" a dashed line at 500 and the "½ | ½" tint from scene 4 return; [490, 500] shades, row "P(490 < X < 500) = 0.5 − P(X < 490)". On "curve" all three regions sit together with a grey tag "whole area = 1". No tail value is shown.

### 9. memory aid
> Here's a way to remember the shape. Mirror, middle, forever. The halves mirror each other, the mean, median and mode share one middle, and the tails go on forever.

Visual: camera pull back to the bell small with its three regions. The handwritten words write large: "Mirror, middle, forever." Under each word, a small icon from the scenes (the fold, the peak marker with "mean = median = mode", the two infinity arrows). Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. State these four values. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The lengths, X mm, of bolts made by a machine are modelled by X ∼ N(64, 16). State the mean, the median, the mode and the standard deviation of X." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no curve, no labels on the notation).

### 11. feedback 1 (brief)
> The first number is the mean, so mu is sixty-**four**. The curve is symmetric with one peak, so the median and the mode are sixty-four **too**. The second number, sixteen, is the variance. So sigma is the square root of sixteen, which is four **millimetres**. A standard deviation of sixteen is wrong. Sixteen is sigma **squared**.

Visual: card shrinks to the top. "64" underlined on "four"; row "mean μ = 64". On "too" a small bell with its peak and fold at 64, row "median = mode = 64". "16" underlined; on "millimetres" boxed "σ = √16 = 4 mm". On "squared" a chip "σ = 16" fades in and is crossed (caption "16 is σ²"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Use the shape of the curve. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The masses, X g, of chocolate bars are modelled by X ∼ N(250, 25). Given that P(X < 242) = 0.0548, find P(X > 258) and P(242 < X < 258)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no curve, no shading).

### 13. feedback 2 (brief)
> Two fifty-eight is eight grams above the mean, and two forty-two is eight grams **below**. The curve is symmetric, so the right tail has the same area: zero point zero five four **eight**. The middle is one minus two lots of zero point zero five four eight, which is zero point eight nine zero **four**. One minus zero point zero five four eight is wrong. That removes only the left **tail**.

Visual: card shrinks to the top. "250", "242" and "258" underlined as used; on "below" a bell at 250 with marks at 242 and 258, tags "8 below", "8 above". On "eight" the left tail shades, `TailMirror` lays it on the right tail, boxed "P(X > 258) = 0.0548". On "four" the middle shades, boxed "P(242 < X < 258) = 1 − 2(0.0548) = 0.8904". On "tail" a chip "1 − 0.0548 = 0.9452" fades in and is crossed (caption "the right tail is still in it"). Hold about 1 second.

### 14. handoff
> So check the peak, symmetry and tails against the normal model, and a normal shape tells us the mean, median and mode are the same. Next, a new question. Mark one sigma either side of the mean. How much of the area lies between those **marks**? And what about two sigma, or **three**?

Visual: the boxed "mean = median = mode = μ" and "X ∼ N(μ, σ²)" show small at the top, then fade on "Next". Board clears to the fills' bell N(500, 64) (x 460 to 540). On "Mark" dashed marks at 492 and 508 with tags "μ − σ", "μ + σ"; on "marks" the region between them tints, "?" over it. On "three" further dashed marks at 484 and 516 ("μ ± 2σ") and 476 and 524 ("μ ± 3σ"), each with a "?". Chip "Next: how much area lies within one, two and three σ?". No percentage is shown or spoken. Hold about 2 seconds. This is s10's assumed opening frame (open decision 1); scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. The normal distribution is a continuous distribution used to model many natural measurements (heights in one population, measurement errors, machine fills). It often fits when many small, independent effects add up.
2. The normal curve is bell-shaped and symmetric about μ, so mean = median = mode = μ. Most values are near μ, and the tails approach the axis but never reach it.
3. X ∼ N(μ, σ²): the second number is the variance. Example: N(500, 64) has σ = 8.
4. Probabilities are shaded areas under the curve; tails extend to −∞ and +∞. By symmetry, P(X < μ − c) = P(X > μ + c), and P(X < μ) = 0.5.
5. Good-fit clues: continuous, one peak, roughly symmetric, thinning out both ways, with tails that match the bell. Poor fit: skewed, flat or piled at an edge.

Memory aid (large, on the notes screen): *Mirror, middle, forever.*

Visual (end of the hold, silent, no added speech): the key notes cross-fade (1 s, root decision 20) back to scene 14's frame exactly (the bell N(500, 64) with dashed marks at μ ± σ, μ ± 2σ, μ ± 3σ, the tinted inner region, the "?" marks and chip "Next: how much area lies within one, two and three σ?"). This is the final frame and s10's assumed opening frame.

## Teaching checks

- **Does it explain causes?** Why a bell: many small, independent nudges, with far more paths to the middle than to an edge (2). Why the median is μ: symmetry gives half the area each side (4). Why the mode is μ: the peak is at μ (4). Why the curve never ends: the tails approach but never reach the axis (4). Why σ = 8 for N(500, 64): the second number is the variance (5). Why a wider bell is lower: the area must stay 1 (5). Why water use, the bus wait and lifetimes don't fit: skewed, flat, piled at an edge (6). Why the two tails match: equal distances from μ and symmetry (8). Why the middle is 1 − 2 tails: total area 1 (8).
- **Misconceptions addressed:** "σ is the second number" (5; A1 crossed); "every data set is normal" (6); "the tails stop where the graph stops" (4, 7); "impossible values make the model wrong" (7); "the middle is 1 minus one tail" (A2 crossed).
- **One idea at a time:** one observation (1), one cause (2), one name (3), one shape reading (4), one notation (5), one contrast (6), one shading (7), one symmetry use (8). Only the needed earlier results stay bright: μ = 500 and σ = 8 in 5, 7 and 8.
- **Video makes it easier:** the student watches dots pile into a bell and sees the one path to the edge against the many to the middle (2), sees the curve fold onto itself (4, 8), sees the tail gap shrink without closing (4), sees μ slide and σ stretch while the area stays 1 (5), and sees tails run off to infinity arrows (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible, 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 25 s and 29 s (scenes 11 and 13, including the 1 s holds).
- **Avoided double teaching:** s05's probability as area, s06's mode and median and s08's balance point are used, not re-taught; s04's histogram density mode is reused.
- **Syllabus coverage:** `ci2ef338c4` (2, 3; key note 1); `cib8d213fb` (4; A1; key note 2); `ci9431590e` (3, 6; key note 5); `ci9f30e6a8` (5; A1, A2; key note 3); `ci477a9380` (7, 8; A2; key note 4).
- **Out of scope by design:** empirical rule percentages, the PDF formula, inflection points and graphing (s10); z-scores and tables (s11); unknown μ or σ (s12).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The lengths, X mm, of bolts made by a machine are modelled by X ∼ N(64, 16). State the mean, the median, the mode and the standard deviation of X."
Model answer: mean μ = 64 mm. The normal curve is symmetric about μ with its peak at μ, so the median and the mode are also 64 mm. The variance is 16, so σ = √16 = 4 mm. Classic mistake (crossed): "σ = 16" (16 is σ²).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "The masses, X g, of chocolate bars are modelled by X ∼ N(250, 25). Given that P(X < 242) = 0.0548, find P(X > 258) and P(242 < X < 258)."
Model answer: 242 = 250 − 8 and 258 = 250 + 8 are equal distances from μ, so by symmetry P(X > 258) = P(X < 242) = 0.0548. Then P(242 < X < 258) = 1 − 2(0.0548) = 0.8904. Classic mistake (crossed): "1 − 0.0548 = 0.9452" (removes only the left tail).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Fill histogram | 1,000 stored fills; counts 2, 17, 45, 94, 153, 192, 191, 152, 94, 41, 16, 3, 0 in 4 mL classes from 476 mL | 1, 3 |
| Peg board | 12 rows; 400 dots; bins 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0; 1 path to the edge; 12 paths to the next bin; 924 of 4,096 to the middle | 2 |
| Fill model | X ∼ N(500, 64); σ = 8 mL; slide to μ = 510; stretch to σ = 12 (width × 1.5, peak × 2/3); P(490 < X < 500) = 0.5 − P(X < 490) | 3, 4, 5, 7, 8, 14 |
| Site trap | N(60, 9): σ = 3 | 5 |
| Fill tails | 490 and 510 (10 either side); P(X < 0) less than 10⁻⁵⁰⁰ (grey) | 7, 8 |
| A1 | N(64, 16): mean, median, mode 64; σ = 4; crossed 16 | 10, 11 |
| A2 | N(250, 25): P(X > 258) = 0.0548; P(242 < X < 258) = 0.8904; crossed 0.9452 | 12, 13 |
| Handoff | marks 492, 508; 484, 516; 476, 524 | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 and SymPy (3 Nov, scratchpad scripts `nums_s07s09.py`, `seed_s09.py`, `peg_s09.py`); Codex to re-check.

- Fills: `random.Random(1636)`, 1,000 × `gauss(500, 8)`: the class counts above (sum 1,000); 105 below 490; 106 above 510.
- Peg board: `random.Random(4505)`, 400 × sum of 12 `randint(0, 1)`: bins above; C(12, 0) = 1, C(12, 1) = 12, C(12, 6) = 924, 2¹² = 4,096.
- √64 = 8; √9 = 3; √16 = 4; √25 = 5.
- σ stretch: 12/8 = 1.5; peak 1/(σ√(2π)) scales by 8/12 = 2/3 (0.04987 to 0.03325).
- A2: 250 − 242 = 8 = 258 − 250; 1 − 2(0.0548) = 0.8904; 1 − 0.0548 = 0.9452; Φ(−1.6) = 0.054799 (consistent with the given).
- P(X < 0) for N(500, 64): z = −62.5, far below 10⁻⁵⁰⁰.
- Handoff marks: 500 ± 8, ± 16, ± 24.

## Memory aid check

- **"Mirror, middle, forever."** Meaning, as said in scene 9: the two halves of a normal curve are mirror images (symmetric about μ); the mean, median and mode share one middle value, μ; the tails go on forever (the curve extends to ±∞ and never reaches the axis). Assumptions checked: all three are true of every normal curve (author note d); "middle" relies on the single peak and symmetry together (scene 4 explains both), so it is not offered as a rule for every symmetric distribution (a flat uniform is symmetric but has no single mode, s07); "forever" is about the model, not the data (scene 7 says impossible values get tiny area). It helps a new case: A1's median and mode come straight from "middle", and A2's equal tails from "mirror". Introduced after the causes (scenes 4, 7, 8).
- **Considered, not used:** "N of mean, variance: root the second" as a second aid (it is key note 3 and A1's lesson; one aid per video).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): see the count line below.

**5,627 characters** (5,641 with the joining spaces), 15 scenes. Characters per scene (1 to 15): 389, 780, 541, 543, 514, 541, 562, 435, 163, 57, 315, 59, 376, 277, 75. At 13.3 characters per second the speech is about 423 s; add about 14 s of settling for the peg-board drop (2), the fold and tail zoom (4), the μ slide and σ stretch (5) and the tail lift (8), 20 s for two countdowns, 6 s of short holds (9, 11, 13, 14) and about 62 s more for the quiet notes (about 102 s of holds): **about 525 s**, inside the 5,500 to 6,800 band (127 characters above the floor) and under the 570 s cap. The interrupted draft counted 4,940; Revision 1 added content, not padding: the twelve paths one bin in from the edge (why the dots thin out step by step), why a continuous model is a curve and its area is the probability (s04, s05), the bulk-near-μ consequence, the size of the σ effect (1.5 times as wide, 2/3 as high), why < and ≤ give the same area (s04), and the half-minus-tail use of P(X < μ) = 0.5 (key note 4). Feedback 2 lost one redundant sentence (−37). Scene 2 is the longest; the first dots must be falling before "Each peg nudges". Feedback: scene 11 about 25 s and scene 13 about 29 s including the 1 s holds. If the voiced take runs over 570 s, root decides between scene 8's half-minus-tail sentences (−143, leaving 5,484) and scene 3's continuous-curve sentences (−180, leaving 5,447, just under the floor).

## Scene list and build ids

Lesson key `m-a12s09` (route math-a12-s09). Suggested explainer folder `src/explainer/lessons/math-a12-s09` and build folder `docs/production/claude-pm/lessons/m-a12s09` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, small-nudges, normal-model, shape-meaning, notation, when-it-fits, shaded-tails, equal-tails, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s08's last frame continues into scene 1 (same histogram); 1 to 2 clear change (`PegBoard`); 2 to 3 clear change back to the histogram; 3 to 4 camera continue (bars fade, bell stays); 4 to 5 camera continue (right column); 5 to 6 clear change; 6 to 7 clear change; 7 to 8 camera continue; 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s09-learning-review.md`, `science_check` = `checks/m-a12s09-maths-check.md`.

## Assets

Have (after the s01 to s08 and i06 builds): `ClassHistogram` (density mode), `BalancePoint`, `AreaFill`; shared `FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`.

New: `PegBoard`, `NormalCurve`, `TailMirror`, `AreaFill` open ends; painted plate `maths-a12-bottle.png`.

## Codex asset brief

**A. Coded parts (add to the next maths kit brief, with the s01 to s08 probability parts; same rules: exported through `kit.tsx`, pilot from this design's numbers, numerical checks, desktop and phone-landscape stills, silent motion sample). Every displayed value is formatted from the same data that sets the geometry. s10 will reuse `NormalCurve` and `AreaFill` open ends.**

1. **`PegBoard`** (scene 2). A triangular board of `rows` (12) of peg dots over `rows + 1` bins. Props: `paths` (stored per dot: arrays of 0/1 for left/right, from author note c; not regenerated), `drop` ({count, from, to, duration}[] cues: the first few dots slowly with peg flashes, then the rest quickly), `tracePath` ({path, at, colour}: draw one path's zig-zag), `highlightPaths` (a set of paths into one bin), `binCounts` (computed from the stored paths), `pathCountReadout` (grey author strings "1 path", "924 of 4,096 paths"; the part checks them against C(12, k) and 2¹²). Abstract only: pegs are dots, no frame, no wood, no people. Checks: final bins 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0; the all-left path ends in bin 0; the six-and-six paths end in bin 6; readouts match C(12, 0) = 1 and C(12, 6) = 924.
2. **`NormalCurve`** (scenes 3 to 8, 11, 13, 14). A `FunctionGraph` preset for the normal density with props `mu`, `sigma` (animatable: {value, at, duration}[]), `areaReadout` (shows "area = 1"; computed numerically over ±8σ), `peakMarker`, `halfTint` (tints the two halves with "½" labels), `bulkTint` (author interval), `tailZoom` ({from, to, at}: an inset of one tail resampled at higher y magnification, with the gap to the axis labelled), `infinityArrows` (arrows at both x-axis ends labelled "to −∞", "to +∞"), `sigmaMarks` ({k: 1 | 2 | 3, at}[]: dashed marks at μ ± kσ with labels; no area values), and `overHistogram` (fit to a `ClassHistogram` in density mode). Checks: total area 1 within 1e-6 at σ = 8 and 12; peak height 0.04987 at σ = 8 and 0.03324 at σ = 12; the curve stays above the axis at x = μ ± 8σ (positive, not clipped to zero in the data, though it may draw on the axis line at screen resolution, in which case the zoom carries the point); marks at 492, 508, 484, 516, 476, 524.
3. **`AreaFill` open ends** (scenes 7, 8, 13). For `from: -Infinity` or `to: Infinity`, the fill runs to the plot edge and ends in an arrow beyond the edge labelled "to −∞" or "to +∞" (label text author-supplied). Checks: the fill is clipped at the plot edge; the arrow sits outside the clip; works with `NormalCurve` and any `FunctionGraph`.
4. **`TailMirror`** (scenes 1, 4, 8, 13). Reflects a region of a symmetric curve (or a histogram, scene 1, approximate) about an author-supplied axis x = c: `fold` (left half rotates over onto the right, 3D-free 2D flip), `liftTail` ({from, at}: copies one shaded tail, moves and flips it onto the mirror tail). The part checks symmetry of the supplied function about c at 50 sample points (tolerance 1e-9) and refuses to claim an exact match otherwise (scene 1's histogram uses `approximate: true`, which adds the grey tag). Checks: N(500, 64) folds exactly at 500; tail below 490 matches the tail above 510; N(250, 25) tail below 242 matches above 258.

Existing parts used unchanged: `ClassHistogram` (counts and density modes, 1,000 stored fills; relabel counts → density over a set duration), `BalancePoint` (small, level at μ), `FunctionGraph` (three non-normal sketches with dashed bells, no values).

**B. Painted plate (new; transparent PNG with a true alpha channel, no background, no shadow box, no text, no people, no hands; flat paper-friendly painted style matching the existing explainer plates and the `maths-a12-` set; never stretched, scale uniformly only).**

1. `maths-a12-bottle.png`: one plain clear plastic drink bottle with a blue screw cap, front view, filled with water to a visible fill line about 85% up, **no label, no brand, no text, no measurement marks**; about 500 × 1,200 px (portrait).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the scope of every learner-visible general claim: "the total often has a shape close to a bell" (not "always", no theorem named); "used to model many naturally occurring things" (the syllabus wording); "mean, median and mode are the same" said of the normal curve only; "a good one when the data bunch symmetrically around one peak" (approximate); the memory aid scoped to normal curves.
3. Confirm no empirical rule percentage, PDF formula, inflection point, z-score or table value is stated (the only probability values are the halves either side of μ, A2's given 0.0548 and the values derived from it by symmetry).
4. Confirm the notation reading "X is normal, with mean mu and variance sigma squared" matches the syllabus's "mean μ and standard deviation σ" (the second parameter is σ², so the standard deviation is its square root).
5. Confirm the peg-board path counts (1, 924, 4,096) and that "binomial" is not named anywhere in learner copy (root decision 54).
6. Confirm both attempt questions carry every demand and given, and that neither card shows a curve, a shading or the answer form.
7. Confirm the five syllabus quotes match the crosswalk JSON exactly (including the curly quotes around ‘ideal’) and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text ("millilitres", "symmetric").
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the opening frame matches s08 scene 13 exactly, and the handoff (scene 14) shows no percentage.

## YouTube metadata (draft)

Title: The Normal Distribution: Shape, Notation and Uses | Year 12 Maths Advanced

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson02.sa.html

A thousand bottle fills pile up in a bell around the target. Why does that shape keep turning up? Watch dots fall through a board of pegs to see how many small, independent nudges add up to a bell, then meet the normal distribution as a model of natural measurements. See why its symmetry makes the mean equal the median and mode, why its tails go on forever, what the notation X ∼ N(μ, σ²) means (the second number is the variance), which contexts suit a normal model and which don't, and how to shade probabilities that extend to ±∞. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, the normal distribution.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Identify the normal distribution as a continuous probability distribution that is used to model many naturally occurring phenomena"
"Identify the graph of the probability density function of a normal distribution, the normal curve, as an ‘ideal’ bell-shaped curve, symmetrical about its mean which is equal to its mode and median, and as having most values concentrated about the mean"
"Identify contexts that can be approximately modelled by a normal random variable"
"Use the notation X ∼ N(μ, σ²) to represent a normally distributed random variable that has mean μ and standard deviation σ"
"Represent probabilities associated with the normal distribution by areas of shaded regions under the normal curve, which may extend to ±∞"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Expected value and variance of continuous random variables (previous video); probability density functions. Next: The empirical rule and graphing the normal distribution.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. s10's opening frame (root).** s10 has no design yet. Scene 14 ends on the fills' bell with marks at μ ± σ, μ ± 2σ and μ ± 3σ and "?" chips, with no percentage. If s10 opens on a different picture (the site's lesson 2 card 06 or a graphing-app view), change scene 14's last two sentences and its marks only.
- **2. The peg board (learning review).** It is new (not on the site) and is the cause scene. Root decision 54 keeps binomial unnamed; the "924 of 4,096" count is a grey readout, not a calculation the student must follow. If the review finds the path count a distraction, remove the readout (screen only) and keep "only one path" and "lots of paths".
- **3. The link to lesson 2 (root).** The description links lesson 2 (the outline's first source); lesson 3 supplies the bottle and chocolate-bar numbers and the shading types. Root may prefer lesson 3's link.
- **4. Spoken notation (voice pilot).** "X is normal, with mean mu and variance sigma squared" at first use, then "N of five hundred, sixty-four" (the comma pause separates the two numbers).
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s04 to s08; check that the peg board gives a reason for the bell rather than decoration; that each shape property is tied to a visible reason (fold, half areas, peak, tail zoom); that the notation trap is caught before the attempt; that the non-normal contrasts are clear at a glance; that the shaded tails visibly run to the infinity arrows; that the cards give nothing away), then the Codex maths check and error check.
- The falling dots, the fold, the σ stretch with a fixed area and the tail lift carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s08's scene 13 (same designer); the handoff frame is s10's assumed opening (open decision 1).

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 1 says "simulated fills" with a grey tag; scene 6 adds the tail comparison with the bell and "clues, not a proof"; key note 5 updated. Narration now 5,693 characters (counted by the build parser rules). No em dashes.

## Revision 3 (5 November 2026, brief 171 fixes)

Findings from `checks/m-a12s09-error-check.md`.

- Should fix 1 (scene 14): "So a normal model fits data that bunch symmetrically around one peak, and its shape tells us ..." becomes "So check the peak, symmetry and tails against the normal model, and a normal shape tells us the mean, median and mode are the same." The mean/median/mode result and the handoff are unchanged.
- Opening (scene 1) checked against s08's revised handoff: both say "simulated" and show the "simulated: 1,000 fills" tag. No change needed.
- Narration count: 5,692 characters (scene narration only, ** removed, joins excluded; -1 against Revision 2's 5,693), estimated about 529.9 s with the stated holds. No em dashes.
