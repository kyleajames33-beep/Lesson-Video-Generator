# Maths A12 S03: What do expectation and variance measure in a discrete model? The balance point and the long-run average, Σ xP(x), variance as an expected squared distance, and E(X²) − μ² (design)

Status: Revision 2 (4 Nov 2026), brief 162 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov 2026). Needs student learning review, Codex maths check and Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the brief 129 to 143 maths kit (`AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `QuestionCard`, `Countdown`, `KeyNotes`) and the probability parts from s01 and s02 (`ProbabilityBars`, `DistributionTable`), plus new parts here (`BalancePoint`, `DeviationArms`, `SpreadBrackets`, `RunningMeanTrace`). Nothing recorded; human listening pending.

Narration 5,664 characters, 14 scenes, about 529 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 55), after s02 (uniform discrete distributions) and before s04 (continuous random variables). Templates: `math-a12-i05.md` and `math-a12-d10.md`, and the s01 and s02 designs (same designer, written just before this one; s02's scene 13 is this video's first frame). Maths visuals are coded; the die is the small painted plate from the s01 asset brief. No people. No gambling context: the site's stall game (problem 3) is replaced by the site's insurance question for the applied problem. Pre-design pack: none (brief 151 stopped at i14); pack work done here. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson07.sa.html` (Expected Value and Variance), SHA256 `4ba2ac7bbc5148f5c35f039fa552917d79ce5f82ca8abf3dbec30303460dafa3`. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s03` ("What do expectation and variance measure in a discrete model?", four syllabus actions, site source lesson 7, no coverage gaps).

Owner rules applied: as s01 and s02 (new 2024 syllabus only; codenames and exact wording; no site module label; maths coded, objects painted; no people; one reasoning stage at a time; calculations as task, formula and grouped givens; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed-out mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causal conversational narration). Binding root decisions: exact values in the algebra where they are exact (the question's decimals are exact here, so 1.7, 0.81 and 0.9 are exact; 35/12 for the die stays a fraction, with its decimal in a grey readout); attempt cards give nothing away; the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci5e2af56f`: "Recognise the mean, or expected value, μ or E(X), of a discrete random variable X as a measure of centre for its distribution"
- `cief06313d`: "Generate and use the formulas E(X)=μ=ΣxP(x) and Var(X)=σ^(2)=Σ(x-μ)^(2)P(x)=Σx^(2)P(x)-μ^(2) for the random variable X, where Var(X) is the variance and σ is the standard deviation of the distribution"
- `cib50250f9`: "Recognise that the variance is an expected value because Var(X)=E((X-μ)^(2))"
- `cia0e71266`: "Solve problems involving probabilities, expectation and variance of discrete random variables"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s02's last frame (the fair die's six equal bars with a balance triangle under the axis and "?"). Finds the die's balance point, 3.5, a value it can never show (the site's hook); reads E(X) as a long-run average with a simulated running mean (`ci5e2af56f`); generates E(X) = ΣxP(x) from a thousand imagined trials on the site's distribution P(0) = 0.1, P(1) = 0.3, P(2) = 0.4, P(3) = 0.2, μ = 1.7 (`cief06313d`); shows that the probability-weighted deviations always cancel, which is why squared deviations are averaged, so Var(X) = E((X − μ)²) (`cib50250f9`); computes 0.81 and σ = 0.9 with spread brackets; generates and checks Σx²P(x) − μ² (site card 04, numbers unchanged); solves the site's insurance problem with expectation and standard deviation (`cia0e71266`). Stops at discrete expectation and variance. Not taught: E(aX + b) and Var(aX + b) (not in this route's points; later home: the strand practice video if the 2024 points include them); continuous expectation and variance (s08); the binomial distribution (not a 2024 Advanced point in this strand).

## Decisions

- **Learner question kept (outline).** "What do expectation and variance measure in a discrete model?" The answer, built in order: E(X) is the balance point of the bar graph, and the long-run average of many trials, so it need not be a value X can take (1, 2); weighting each value by its probability is what averaging many trials does (3); the weighted distances from μ always cancel, because μ is the balance point, so spread is measured by the average squared distance, an expected value (4); the square root returns it to X's units as a typical distance (5); expanding the square gives a quicker form (6); in a problem, E gives the long-run cost and σ shows how far one year can swing (7).
- **Hook (a surprise).** Equal weights on a beam balance in the middle: 3.5, which no die face shows (site hook). "So what is being expected?" is answered in scene 2 with a running mean.
- **The balance point (owner's request: "bar-chart distribution with a balance point for the mean").** `BalancePoint`: a triangle under the x axis that tilts the axis (a beam) when off-centre and levels at μ. Scene 1 (uniform: the middle), scene 3 (1.7, pulled towards the heavier bars at 1 and 2), feedback 1 (1.6). The tilt is qualitative (direction only, with the angle proportional to the net moment, capped); the level state is exact at μ.
- **Long-run average (`ci5e2af56f`).** A `RunningMeanTrace` of one fixed simulated sequence of 2,000 fair rolls (author note c): the running mean starts at 5, is 4.2 after 10 rolls, 3.32 after 100 and 3.496 after 1,000, with a dashed line at 3.5. Spoken: "after ten rolls ... four point two; after a thousand, three point five, almost exactly" (3.496 in a grey readout). Scoped: "settles close to", not "reaches".
- **Generating ΣxP(x) (`cief06313d`, "generate").** Site card 03's distribution, imagined over 1,000 trials: about 100 zeros, 300 ones, 400 twos, 200 threes; their total 1,700 ÷ 1,000 = 1.7; dividing by 1,000 turns each count into its probability, so μ = Σ x P(x). "About" is kept: a run gives roughly those counts, and the formula is the exact long-run version. The uniform shortcut (an ordinary average when every weight is 1/n) is one sentence on the die, 21/6 = 3.5 (site card 02).
- **Why square (`cib50250f9`; corrects the site).** The deviations x − μ are −1.7, −0.7, 0.3, 1.3. Weighted by probability they are −0.17, −0.21, 0.12, 0.26, which add to exactly 0. That's what balancing at μ means, so the weighted average deviation is 0 for every distribution and can't measure spread. Squaring makes every distance count positive; averaging the squares with the same weights is an expected value of a new variable, (X − μ)². `DeviationArms` draws each deviation as an arm from μ to the bar, then its weighted length, then its square. The site's card 03 says the raw departures "always sum to zero" without the weights; see site corrections.
- **σ and spread brackets.** Var(X) = 0.81 (square units of X); σ = √0.81 = 0.9 back in X's units. `SpreadBrackets` mark μ − σ = 0.8 and μ + σ = 2.6 on the axis, tagged "a typical distance from the centre is about 0.9". No claim about what fraction of the distribution lies inside (that is the normal model's empirical rule, s09 onwards).
- **The computational form (`cief06313d`; site card 04).** Expand (x − μ)² = x² − 2μx + μ²; weight and add: Σx²P(x) − 2μΣxP(x) + μ²ΣP(x) = E(X²) − 2μ² + μ² = E(X²) − μ². One line of `AlignedAlgebra`, each sum replaced by what it equals (s01's ΣP(x) = 1 and this video's ΣxP(x) = μ). Check: E(X²) = 3.7; 3.7 − 2.89 = 0.81, the same. Trap shown once: square the values, not the probabilities (site card 04 note).
- **The applied problem (`cia0e71266`; site short-answer Q2, numbers unchanged, worked rather than set).** Premium $300; claim $8,000 with probability 0.02, $1,000 with probability 0.05, else nothing. E(C) = $210; expected profit $90 per policy. Added beyond the site: σ ≈ $1,134 (Var in a grey readout, 1,285,900), set against the $90, to show why one policy is a risk though the long run is a profit (the site's Q2(c) idea, quantified). Task, distribution and givens are separate strips. No gambling: the site's stall game is not used.
- **Attempts (original).** (A1) x: 0, 1, 2, 3 with P(x): 0.1, 0.3, 0.5, 0.1. Find E(X) and Var(X). μ = 1.6, E(X²) = 3.2, Var(X) = 3.2 − 2.56 = 0.64. Crossed: "3.2 − 1.6 = 1.6" (subtracted μ, not μ²). (A2) X takes 1, 2, 3 with P(X = 1) = 0.2, P(X = 2) = a, P(X = 3) = b, and E(X) = 2.3. Find a and b. a + b = 0.8 and 2a + 3b = 2.1, so b = 0.5, a = 0.3. Tests using both the total-probability condition and the formula for E. Crossed: "a = b = 0.4" (uses only the sum; its E is 2.2). Neither card shows a formula, a sum or the answer form.
- **Mistake scene:** none separate. "The expected value is what you'll get" (1, 2); "the ordinary average of the values" (3, the non-uniform case); "average the distances" (4, they cancel); "variance is in the units of X" (5); "Σx²P(x)² " and "E(X²) = [E(X)]²" (6); "a positive expected profit means no risk" (7); "subtract μ" (feedback 1 crossed); "one condition is enough" (feedback 2 crossed).
- **Memory aid.** "Mean of the squares, minus the square of the mean." See "Memory aid check".
- **Handoff (outline next: s04, "Why are continuous probabilities intervals rather than point masses?").** Scene 13: the s03 distribution's bars split into more and narrower bars (4, then 16, then 64 bars on the same interval, heights not stated), and a chip "Next: what if X can be any value in an interval?". The narration asks a question about a waiting time; no density, area or probability claim. The frame is s04's assumed opening (open decision 1).
- **Site sources used:** lesson 7 hook (3.5 is not a face), cards 02 (definition, the die's 21/6 = 3.5, uniform shortcut, long-run average, balance point), 03 (variance as E((X − μ)²) on P(0) = 0.1, P(1) = 0.3, P(2) = 0.4, P(3) = 0.2: μ = 1.7, Var = 0.81), 04 (E(X²) = 3.7, 3.7 − 2.89 = 0.81, σ = 0.9, "squares the values, not the probabilities"), traps 01 to 04 and short-answer Q2 (insurance: 300, 0.02 × 8,000, 0.05 × 1,000; E(C) = 210, profit 90). Not used: the die's variance 35/12 (shown only as a grey readout in scene 5's closing chip; open decision 3), problem 2 (4.2, 1.96; attempts are original), problem 3 (stall game), Q1 and Q3.
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Card 03: "The raw distances x − μ are no use on their own, because they cancel, the positive and negative departures always sum to zero." The unweighted departures don't sum to zero (for the card's own distribution: −1.7 − 0.7 + 0.3 + 1.3 = −0.8). The probability-weighted departures do: Σ(x − μ)P(x) = μ − μ = 0. Suggested: "weighted by their probabilities, the positive and negative departures always cancel". (2) Problem 2, step 4 note: "A variance larger than the mean would have been a signal to re-check." False: a variance can exceed the mean (the same page's drill 2 has mean 13 and variance 21; short-answer Q2 has mean 210 and variance 1,285,900), and the two are in different units. Suggested: delete, or replace with "a negative variance would be a signal to re-check". (3) Short-answer Q3(b) asks students to argue "without assuming any particular distribution" that line A (σ = 0.2 mm) produces more components within 0.5 mm of 50 mm than line B (σ = 2.0 mm), and the answer says A "will produce far more". That doesn't follow without a shape assumption: line B with 90% of components at exactly 50 mm and 10% at 50 ± 6.32 mm has mean 50 and σ = 2.0 with 90% acceptable, while Chebyshev's bound only guarantees line A at least 84%, and a line A near that bound has fewer acceptable. Suggested: ask which line is likely to produce more, assuming similar shapes. (4) Notes, not errors: the stall game in problem 3 is a gambling context; card 03, card 04's check line, drill 4, Q1(c) and Q3(c) contain em dashes, against the house style.
- **Cause chain taught, in order:** (1) E(X) is where the bar graph balances (1); (2) it's also the long-run average of many trials, so it need not be a possible value (2); (3) in many trials each value turns up in proportion to its probability, so the average is ΣxP(x) (3); (4) because μ is the balance point, the weighted deviations cancel to 0, so spread uses squared distances, averaged with the same weights: Var(X) = E((X − μ)²) (4); (5) the square root gives a typical distance in X's units (5); (6) expanding the square and using ΣP(x) = 1 and ΣxP(x) = μ gives E(X²) − μ² (6); (7) the mean gives the long-run cost, and σ shows the size of one year's swing (7); (8) memory aid (8).
- **Entry knowledge (draft route `entryKnowledge`):** s01 (distributions, P(x), ΣP(x) = 1, tables and bar graphs) and s02 (uniform, 1/n). Years 7 to 10: the mean of a data set; square roots; expanding (a − b)². Year 11: none beyond probability.
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s03`; main learner question as above; syllabusActions `ci5e2af56f`, `cief06313d`, `cib50250f9`, `cia0e71266`; site source `random-variables/lesson07.sa.html`; start: "From s02's die, find the balance point 3.5 and read it as a long-run average." Stop: "Generate ΣxP(x); show weighted deviations cancel, so Var(X) = E((X − μ)²); compute σ with units; generate E(X²) − μ²; solve one applied problem with E and σ. Leave linear changes of variable and continuous moments to later videos." Next: "math-a12-s04: why continuous probabilities are intervals (a question only)".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** the beam tilting and levelling (`BalancePoint`); the running mean settling towards a dashed line (`RunningMeanTrace`); 1,000 imagined trials as counts above the bars (`DistributionTable` extra rows, `ProbabilityBars` labels); arms from μ to each bar, shrinking to weighted lengths that cancel, then squared (`DeviationArms`); brackets at μ ± σ (`SpreadBrackets`); bars splitting for the handoff (`ProbabilityBars` `runs`); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`. Painted plate: the die (s01).
- **Board layout (constant):** as s01: heading top-left; bar graph on the left (about 1,000 × 520 px) with the beam axis; table and algebra in the right column, one reasoning stage bright at a time.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Die: E(X) = 21/6 = 7/2; E(X²) = 91/6; Var(X) = 91/6 − 49/4 = 35/12 ≈ 2.917; σ ≈ 1.708.
  (b) Site distribution: P(0) = 0.1, P(1) = 0.3, P(2) = 0.4, P(3) = 0.2. μ = 0 + 0.3 + 0.8 + 0.6 = 1.7. Deviations −1.7, −0.7, 0.3, 1.3; weighted −0.17, −0.21, 0.12, 0.26; sum 0. Squared 2.89, 0.49, 0.09, 1.69; weighted 0.289, 0.147, 0.036, 0.338; sum 0.81. E(X²) = 0 + 0.3 + 1.6 + 1.8 = 3.7; 3.7 − 1.7² = 0.81. σ = 0.9. μ ± σ = 0.8, 2.6. The unweighted deviations sum to −0.8 (site correction 1).
  (c) Running mean: Python 3.14 `random.Random(142)`, `randint(1, 6)` 2,000 times. First ten rolls 5, 6, 6, 6, 4, 2, 4, 3, 3, 3 (sum 42). Running mean after 1, 2, 3, 5, 10, 20, 50, 100, 200, 500, 1,000, 2,000 rolls: 5, 5.5, 5.667, 5.4, 4.2, 3.7, 3.4, 3.32, 3.445, 3.47, 3.496, 3.491. Sums: first 100 = 332, first 1,000 = 3,496, all 2,000 = 6,982. The build stores the 2,000 values as data (generator behaviour may differ between Python versions); Codex confirms the checkpoint sums.
  (d) Generation: N trials with frequencies f_x ≈ N P(x); mean of results = Σ x f_x / N ≈ Σ x P(x). With N = 1,000: 100, 300, 400, 200; Σ x f_x = 0 + 300 + 800 + 600 = 1,700.
  (e) Computational form: Σ(x − μ)²P(x) = Σx²P(x) − 2μΣxP(x) + μ²ΣP(x) = E(X²) − 2μ² + μ² = E(X²) − μ². Since the left side is a sum of non-negative terms, Var(X) ≥ 0 and E(X²) ≥ μ².
  (f) Insurance: C = 8,000 (0.02), 1,000 (0.05), 0 (0.93). E(C) = 160 + 50 = 210. Profit per policy 300 − 210 = 90 (expected). E(C²) = 64,000,000 × 0.02 + 1,000,000 × 0.05 = 1,280,000 + 50,000 = 1,330,000. Var(C) = 1,330,000 − 210² = 1,330,000 − 44,100 = 1,285,900. σ = 1,133.975... ≈ 1,134.
  (g) A1: μ = 0 + 0.3 + 1.0 + 0.3 = 1.6; E(X²) = 0 + 0.3 + 2.0 + 0.9 = 3.2; Var = 3.2 − 2.56 = 0.64 (σ = 0.8, not asked). Crossed 3.2 − 1.6 = 1.6.
  (h) A2: 0.2 + a + b = 1 gives a + b = 0.8; 0.2 + 2a + 3b = 2.3 gives 2a + 3b = 2.1; subtract 2(a + b) = 1.6: b = 0.5, a = 0.3. Both in [0, 1]. Crossed a = b = 0.4: E = 0.2 + 0.8 + 1.2 = 2.2 ≠ 2.3.
  (i) Pronunciations: "E of X"; "mu" (μ); "sigma" (σ); "sigma squared"; "Var of X" said "the variance of X"; "the sum of x times P of x"; "E of X squared" (E(X²)) against "E of X, all squared" ([E(X)]²): the narration says "E of X squared, the average of the squared values" at first use to separate them; "three point four nine six"; "one thousand one hundred and thirty-four dollars".
  (j) Windows: die bars x 1 to 6, y 0 to 0.2 (s02's handoff); site distribution bars x 0 to 3, y 0 to 0.5 (ticks 0.1 to 0.5), beam axis below with μ marker; running mean graph x 0 to 2,000 rolls (log-like compression not used: a linear axis with the first 50 rolls in an inset), y 1 to 6 with a dashed line at 3.5; insurance bars x 0, 1,000, 8,000 drawn as three labelled categories (not to scale on x; tag "not to scale"), y 0 to 1.

Main question: *The expected value of one roll of a die is 3.5, a number the die can never show. So what is "expected"? And once we know the centre of a distribution, how do we measure its spread?*
Entry knowledge (s01, s02; the mean of a data set; expanding a square): distributions and their checks.
Stops after: E(X) as balance point and long-run average, ΣxP(x), Var(X) = E((X − μ)²) and E(X²) − μ², σ, and one applied problem. No linear transformations or continuous moments.
Handoff: math-a12-s04: bars splitting into narrower bars on an interval, "what if X can be any value in an interval?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as s01 and s02: model probabilities teal; the balance triangle, μ marker and running mean amber (`MATH_ACCENT`); deviation arms blue (left of μ) and green (right of μ), squared deviations purple; σ brackets amber; crossed red; algebra ink, current line bright, earlier lines dim. Screen maths writes E(X) = μ = ΣxP(x), Var(X) = σ² = Σ(x − μ)²P(x) = Σx²P(x) − μ², E(X²) and σ = √Var(X).

### 1. hook (a balance point the die can't show)
> Last video ended with this question. Think of these six bars as equal weights resting on a beam. Where would the beam **balance**? Right in the middle, at three point **five**. That number is called the expected value of one roll. But a die can never show three point five. So what does expected value really measure? And once we know the centre of a distribution, how do we measure how spread out it is?

Visual: opens on s02's last frame exactly (the fair die's six teal bars at 1/6 on x 1 to 6, the die plate, the balance triangle under the axis at "?", chip "Next: where does a distribution balance?"). Heading writes on: "What do expectation and variance measure?". On the second sentence the x axis thickens into a beam resting on the triangle (`BalancePoint`), tilting towards 6 while the triangle sits left of centre. On "balance" the triangle slides; the beam tilts less and less. On "five" it levels with the triangle under 3.5, readout "balance point: 3.5". On the next sentences the die plate's six faces flick by (1 to 6), tag "no face shows 3.5". The chip "What is expected?" moves to the top right.

### 2. the long-run average
> Here's what it means. Roll the die again and again, and keep track of the average of all your rolls. This run starts with five, six, six, six, so the average is high at first. After ten rolls it's four point **two**. After a thousand rolls, it's three point five, almost **exactly**. So the expected value is the long-run average of X. It isn't a prediction for one roll. It's the centre the results settle around. We write it as E of X, or the Greek letter mu, and it's a measure of centre for the **distribution**.

Visual: clear change to a `RunningMeanTrace` (author note c): x axis "number of rolls" 0 to 2,000, y axis "average so far" 1 to 6, a dashed amber line at 3.5. On the third sentence an inset shows the first rolls as small face tokens (5, 6, 6, 6) with the running mean at 5, 5.5, 5.667, 5.75. On "two" the trace reaches 10 rolls, readout "after 10 rolls: 4.2". The trace then runs to 2,000 rolls over about 3 s, wobbling and settling; on "exactly" a readout "after 1,000 rolls: 3.496" (grey). On the next two sentences a tag "long-run average, not a prediction for one roll". On "distribution" the right column writes "E(X) = μ: the centre of the distribution" with the bars and their level beam small beside it.

### 3. where Σ x P(x) comes from
> For a fair die, every value has the same weight, so E of X is just the ordinary average, twenty-one over six. But most distributions aren't uniform. Take this one: X is zero, one, two or three, with probabilities zero point one, zero point three, zero point four and zero point **two**. Imagine a thousand trials. About a hundred zeros, three hundred ones, four hundred twos and two hundred **threes**. Their total is seventeen hundred, so the average is one point **seven**. Dividing each count by a thousand gives its probability. So the expected value is the sum of each value times its probability. And the beam balances at one point seven, pulled towards the heavier **bars**.

Visual: on the first sentence a small chip "die: (1 + 2 + ... + 6)/6 = 21/6 = 3.5". Clear change on "But": task strip "X has the distribution below. Find E(X)." `DistributionTable`: x 0, 1, 2, 3; P(x) 0.1, 0.3, 0.4, 0.2 (site card 03); on "two" four teal bars on y 0 to 0.5 beside it. On "threes" an extra row "in 1,000 trials, about" fills 100, 300, 400, 200 above the bars. On "seven" the row "total: 0×100 + 1×300 + 2×400 + 3×200 = 1,700" and "1,700 ÷ 1,000 = 1.7". On the next sentence the "about" counts turn into the P(x) row (÷ 1,000 flashes), and the boxed formula writes: "E(X) = μ = Σ x P(x)", with the working "0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7". On "bars" the beam and triangle appear under the bars, tilt, then level at 1.7 (readout "μ = 1.7"), the 1 and 2 bars tinted as the heavy ones.

### 4. measuring spread: why we square
> Now, spread. A natural idea is to average the distances from mu. The distances are minus one point seven, minus zero point seven, zero point three and one point **three**. Weight each one by its probability, and add. You get exactly **zero**. That's not bad luck. Mu is the balance point, so the weighted distances on the left always cancel the ones on the **right**. So we square each distance first, which makes them all positive, and then take the weighted average. That's the variance. It's an expected value too: the expected value of the squared distance from **mu**.

Visual: camera continue (same bars and beam at 1.7; the formula box shrinks to the top right). `DeviationArms`: on the second sentence arms draw from μ = 1.7 along the axis to each bar, labelled −1.7, −0.7, 0.3, 1.3 (blue left, green right). On "three" the right column writes "x − μ: −1.7, −0.7, 0.3, 1.3". On the next sentence each arm shrinks to its weighted length: −0.17, −0.21, 0.12, 0.26 (labels change); on "zero" the left arms and right arms slide into two stacks of equal length, row "−0.17 − 0.21 + 0.12 + 0.26 = 0". On "right" a tag "balance point: weighted distances cancel, for every distribution". On the squaring sentence each arm turns into a purple square on its bar's side, labelled 2.89, 0.49, 0.09, 1.69. On "mu" (last bold) boxed "Var(X) = σ² = E((X − μ)²) = Σ (x − μ)² P(x)".

### 5. working out the variance and σ
> Here it is for our distribution. The squared distances are two point eight nine, zero point four nine, zero point zero nine and one point six nine. Weight them and add, and the variance is zero point eight **one**. But squaring changed the units. If X counts something, the variance is in that unit squared. So take the square root. The standard deviation, sigma, is the square root of zero point eight one, which is zero point **nine**. It's a typical distance from the centre. Here, the values within one sigma of one point seven, from zero point eight to two point **six**, carry most of the probability.

Visual: `DistributionTable` extra rows: "(x − μ)²" 2.89, 0.49, 0.09, 1.69 and "(x − μ)² P(x)" 0.289, 0.147, 0.036, 0.338; on "one" the sum cell "0.81" ticks, boxed "Var(X) = 0.81". On the units sentences a grey tag "units²". On "nine" boxed "σ = √Var(X) = √0.81 = 0.9". On "six" `SpreadBrackets` draw on the axis from 0.8 to 2.6 around μ = 1.7, tagged "μ ± σ: a typical distance of about 0.9"; the bars at 1 and 2 (probability 0.7 together) sit inside, tagged "most". A small grey chip in the corner: "the die: Var = 35/12 ≈ 2.92, σ ≈ 1.71".

Check of "most" (author note b): the values 1 and 2 lie in [0.8, 2.6] and carry 0.3 + 0.4 = 0.7 of the probability; 0 and 3 lie outside. "Most of the probability" is said of this distribution only ("Here").

### 6. a quicker formula
> There's a faster way to get the same number. Expand the square: x minus mu, squared, is x squared, minus two mu x, plus mu **squared**. Weight each part and add. The middle part has the sum of x times P of x, which is mu. The last has the sum of the probabilities, which is **one**. What's left is E of X squared, the average of the squared values, minus mu squared. For our distribution, E of X squared is three point seven, and three point seven minus one point seven squared is zero point eight one, the same **answer**. Be careful. E of X squared squares the values, not the probabilities, and it isn't the same as mu **squared**.

Visual: clear change of the right column (the bars stay small at the left with the brackets). `AlignedAlgebra`: "(x − μ)² = x² − 2μx + μ²"; on "squared" each term in its own colour. Row "Σ(x − μ)²P(x) = Σx²P(x) − 2μ ΣxP(x) + μ² ΣP(x)"; on "mu" (spoken in the sentence) "ΣxP(x)" is ringed with a tag "= μ"; on "one" "ΣP(x)" is ringed, tag "= 1". Row "= E(X²) − 2μ² + μ² = E(X²) − μ²", boxed "Var(X) = Σx²P(x) − μ²". On the check sentence: "E(X²) = 0(0.1) + 1(0.3) + 4(0.4) + 9(0.2) = 3.7"; on "answer" "3.7 − 1.7² = 3.7 − 2.89 = 0.81" with a tick linking to scene 5's 0.81. On the last sentence two crossed chips: "Σx²P(x)²" (caption "square the values only") and "E(X²) = μ²" (caption "then the variance would always be 0").

### 7. a problem: insurance
> Here's how these numbers get used. An insurer charges three hundred dollars a year for a policy. In a year, there's a zero point zero two chance of paying an eight thousand dollar claim, a zero point zero five chance of paying a one thousand dollar claim, and otherwise nothing. The expected payout is eight thousand times zero point zero two, plus one thousand times zero point zero five, which is two hundred and ten **dollars**. So in the long run the insurer makes ninety dollars a policy. But the standard deviation of the payout is about one thousand one hundred and thirty-four **dollars**. One policy swings far more than ninety dollars either way. That's why insurers need many independent policies, so the long-run average takes **over**.

Visual: clear change. Task strip "Find the insurer's expected profit per policy, and explain the risk on one policy." (site short-answer Q2, adapted). Givens strip, grouped: "premium: $300 per year"; "claim $8,000: probability 0.02"; "claim $1,000: probability 0.05"; "otherwise $0". On the second sentence the `DistributionTable`: C 0, 1,000, 8,000; P 0.93, 0.05, 0.02 (0.93 = 1 − 0.02 − 0.05, written in grey), with three bars on a category axis (tag "not to scale"). On "dollars" (first) "E(C) = 8,000(0.02) + 1,000(0.05) + 0(0.93) = 160 + 50 = 210" boxed "$210". Next row "expected profit = 300 − 210 = $90 per policy". On "dollars" (second) a grey readout "E(C²) = 1,330,000; Var(C) = 1,330,000 − 210² = 1,285,900", and boxed "σ ≈ $1,134". On "either way" `SpreadBrackets` on a money line around $210 reach far past $0 and $1,300, beside a small "$90" marker. On "over" a tag "long run: many policies; one policy: large spread".

### 8. memory aid
> Here's a way to remember the quicker formula. Mean of the squares, minus the square of the mean. Square the values, average them with the probabilities, and then subtract mu squared. The answer can never be negative.

Visual: camera pull back to the scene 6 rows small. The handwritten line writes large: "Mean of the squares, minus the square of the mean." Under it, smaller: "Var(X) = E(X²) − μ², never negative." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find E of X and the variance of X for this distribution. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A discrete random variable X has the distribution below. Find E(X) and Var(X)." Table: x 0, 1, 2, 3; P(x) 0.1, 0.3, 0.5, 0.1. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no formula, no extra rows, no beam).

### 10. feedback 1 (brief)
> E of X is zero, plus zero point three, plus one, plus zero point three, which is one point **six**. E of X squared is zero point three, plus two, plus zero point nine, which is three point **two**. So the variance is three point two minus one point six squared, which is zero point six **four**. Three point two minus one point six is wrong. You subtract mu squared, not **mu**.

Visual: card shrinks to the top. The P(x) row underlined as it is used. On "six" row "E(X) = 0(0.1) + 1(0.3) + 2(0.5) + 3(0.1) = 1.6", and a small beam under four bars levels at 1.6. On "two" row "E(X²) = 0 + 1(0.3) + 4(0.5) + 9(0.1) = 3.2". On "four" boxed "Var(X) = 3.2 − 1.6² = 3.2 − 2.56 = 0.64". On "mu" a chip "3.2 − 1.6 = 1.6" fades in and is crossed (caption "subtract μ², not μ"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. X takes the values one, two and three. Find a and b. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A discrete random variable X takes the values 1, 2 and 3, with P(X = 1) = 0.2, P(X = 2) = a and P(X = 3) = b. Given that E(X) = 2.3, find a and b." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no equations).

### 12. feedback 2 (brief)
> Use both facts. The probabilities add to one, so a plus b is zero point **eight**. And the expected value gives zero point two, plus two a, plus three b, equals two point three, so two a plus three b is two point **one**. Take away twice the first equation, and b is zero point five, so a is zero point **three**. A and b both zero point four is wrong. It uses only one fact, and its expected value is two point **two**.

Visual: card shrinks to the top. "0.2", "a", "b" and "E(X) = 2.3" underlined as used. On "eight" row "0.2 + a + b = 1, so a + b = 0.8". On "one" (second bold, "two point one") row "1(0.2) + 2a + 3b = 2.3, so 2a + 3b = 2.1". On "three" rows "(2a + 3b) − 2(a + b) = 2.1 − 1.6, so b = 0.5", boxed "a = 0.3, b = 0.5" with a grey check "0.2 + 0.6 + 1.5 = 2.3". On "two" (last) a chip "a = b = 0.4" fades in and is crossed (caption "E(X) would be 2.2"). Hold about 1 second.

### 13. handoff
> So the expected value is the balance point, and the long-run average. The variance is the expected squared distance from it, and sigma brings it back to the units of X. Every sum here ran over a list of separate values. Next, a new question. What if X can be any value in an interval, like a waiting time? Then the bars get thinner and **thinner**, and there's no list to add up.

Visual: the three boxed results (E, Var two ways, σ) show small at the top, then fade on "Next". Board clears to the scene 3 distribution's four bars on x 0 to 3 (no labels). On "interval" the x axis becomes a continuous line from 0 to 4 tagged "any value in an interval"; on "thinner" the bars split into 16, then 64 narrower bars across the interval (heights left to the build as a smooth hump, no values, no y labels). Chip "Next: what if X can take any value in an interval?" and a "?". No density, area or probability claim. Hold about 2 seconds. This is s04's assumed opening frame (open decision 1); scene 14 returns to it silently after the notes.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Expected value: E(X) = μ = Σ x P(x). It is the balance point of the distribution and the long-run average of X, a measure of centre. It need not be a value X can take.
2. Variance: Var(X) = σ² = E((X − μ)²) = Σ (x − μ)² P(x), the expected squared distance from μ (the weighted distances themselves always add to 0).
3. Quicker form: Var(X) = Σ x² P(x) − μ², where E(X²) = Σ x² P(x) squares the values, not the probabilities.
4. Standard deviation: σ = √Var(X), a typical distance from μ, in the units of X.

Memory aid (large, on the notes screen): *Mean of the squares, minus the square of the mean.*

Visual (end of the hold, silent, no added speech): the key notes cross-fade (1 s, root decision 20) back to scene 13's frame exactly (the 64 thin bars across the interval, chip "Next: what if X can take any value in an interval?" and "?"). This is the final frame and s04's assumed opening frame.

## Teaching checks

- **Does it explain causes?** Why 3.5 for the die: equal weights balance in the middle (1). Why 3.5 needn't be a face: it's a long-run average (2). Why ΣxP(x): in many trials each value turns up in proportion to its probability, so the average of the results is the probability-weighted sum (3). Why 1.7 is right of the midpoint 1.5: the heavier bars at 2 and 3 (0.6 against 0.4) pull it (3; the fulcrum sits at exactly 1.7). Why square: the weighted distances from the balance point always cancel (4). Why σ: squaring changed the units (5). Why E(X²) − μ² equals the definition: expanding and using ΣxP(x) = μ and ΣP(x) = 1 (6). Why a profitable policy is still a risk: σ ≈ $1,134 is far larger than the $90 expected profit (7).
- **Misconceptions addressed:** "the expected value is what you'll get" (1, 2); "E(X) is the ordinary average of the values" (3); "average the distances" (4); "variance is in X's units" (5); "Σx²P(x)²" and "E(X²) = μ²" (6, crossed); "expected profit means no risk" (7); "subtract μ" (feedback 1 crossed); "one equation is enough" (feedback 2 crossed).
- **One idea at a time:** one meaning of E per scene (1, 2), one generation (3), one reason to square (4), one computation (5), one rearrangement (6), one problem with task, table and givens separate (7). Only the needed earlier results stay bright: μ = 1.7 in 4 to 6, 0.81 in 6.
- **Video makes it easier:** the student watches the beam level at 3.5 and at 1.7 (1, 3), sees a running average settle on 3.5 (2), watches the weighted arms cancel and turn into squares (4), sees σ as brackets on the axis (5) and sees the money brackets reach far past the $90 (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible (the table; the probabilities, unknowns and E(X)), 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 28 s and 31 s (scenes 10 and 12).
- **Avoided double teaching:** s01's ΣP(x) = 1 and s02's uniform 1/n are used, not re-taught; the mean of data (Years 7 to 10) is named once in 3.
- **Syllabus coverage:** `ci5e2af56f` (1, 2; key note 1); `cief06313d` (3, 5, 6; A1; key notes 1 to 4; both formulas generated); `cib50250f9` (4; key note 2); `cia0e71266` (7; A1, A2).
- **Out of scope by design:** E(aX + b) and Var(aX + b); continuous expectation and variance (s08); the empirical rule (s09 onwards).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A discrete random variable X has the distribution below (x: 0, 1, 2, 3; P(x): 0.1, 0.3, 0.5, 0.1). Find E(X) and Var(X)."
Model answer: E(X) = 0(0.1) + 1(0.3) + 2(0.5) + 3(0.1) = 1.6. E(X²) = 0(0.1) + 1(0.3) + 4(0.5) + 9(0.1) = 3.2. Var(X) = 3.2 − 1.6² = 0.64. Classic mistake (crossed): "3.2 − 1.6 = 1.6" (subtracted μ instead of μ²).

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A discrete random variable X takes the values 1, 2 and 3, with P(X = 1) = 0.2, P(X = 2) = a and P(X = 3) = b. Given that E(X) = 2.3, find a and b."
Model answer: 0.2 + a + b = 1, so a + b = 0.8. 1(0.2) + 2a + 3b = 2.3, so 2a + 3b = 2.1. Subtracting 2(a + b) = 1.6 gives b = 0.5, so a = 0.3. Check: 0.2 + 0.6 + 1.5 = 2.3, and all probabilities lie in [0, 1]. Classic mistake (crossed): "a = b = 0.4" (uses only the sum; its E(X) is 2.2).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Die | E(X) = 21/6 = 3.5; Var = 35/12 ≈ 2.92; σ ≈ 1.71 (grey) | 1, 3, 5 |
| Running mean | 5 after 1 roll; 4.2 after 10; 3.496 after 1,000; 3.491 after 2,000 | 2 |
| Site distribution | P(0..3) = 0.1, 0.3, 0.4, 0.2; μ = 1.7 | 3 to 6 |
| 1,000 trials | 100, 300, 400, 200; total 1,700 | 3 |
| Deviations | −1.7, −0.7, 0.3, 1.3; weighted −0.17, −0.21, 0.12, 0.26 (sum 0) | 4 |
| Squares | 2.89, 0.49, 0.09, 1.69; weighted 0.289, 0.147, 0.036, 0.338; Var = 0.81 | 4, 5 |
| σ | 0.9; μ ± σ = 0.8 to 2.6 (contains x = 1, 2, probability 0.7) | 5 |
| E(X²) | 3.7; 3.7 − 2.89 = 0.81 | 6 |
| Insurance | P = 0.02, 0.05, 0.93; E(C) = $210; profit $90; E(C²) = 1,330,000; Var = 1,285,900; σ ≈ $1,134 | 7 |
| A1 | μ = 1.6; E(X²) = 3.2; Var = 0.64; crossed 1.6 | 9, 10 |
| A2 | a = 0.3, b = 0.5; crossed a = b = 0.4 (E = 2.2) | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 `fractions` (3 Nov, scratchpad script); Codex to re-check.

- Die: Σx/6 = 7/2; Σx²/6 = 91/6; 91/6 − 49/4 = 35/12; √(35/12) = 1.7078.
- Running mean checkpoints from the stored sequence: sums 42 (10 rolls), 332 (100), 3,496 (1,000), 6,982 (2,000).
- Site distribution: μ = 17/10; Σ(x − μ)P(x) = 0; Σ(x − μ)²P(x) = 81/100; Σx²P(x) = 37/10; 37/10 − 289/100 = 81/100; √0.81 = 0.9; unweighted Σ(x − μ) = −0.8.
- Insurance: 160 + 50 = 210; 300 − 210 = 90; 1,280,000 + 50,000 = 1,330,000; 1,330,000 − 44,100 = 1,285,900; √1,285,900 = 1,133.98.
- A1: μ = 8/5; E(X²) = 16/5; Var = 16/25 = 0.64; 3.2 − 1.6 = 1.6.
- A2: a = 3/10, b = 1/2; 0.2 + 0.6 + 1.5 = 2.3; with a = b = 0.4, E = 2.2.
- Site correction 3 counterexample: 0.9 at 50 and 0.05 each at 50 ± d with σ = 2 gives d² × 0.1 = 4, d = √40 ≈ 6.32; Chebyshev bound for line A within 2.5σ: at least 1 − 1/6.25 = 0.84.

## Memory aid check

- **"Mean of the squares, minus the square of the mean."** A standard phrasing of Var(X) = E(X²) − [E(X)]². Meaning, as said in scene 8: square the values, average them with the probabilities (the mean of the squares, E(X²)), then subtract μ² (the square of the mean). Assumptions checked: "mean" here is the probability-weighted mean E, not the ordinary average of the listed values (scene 3 makes the distinction; the second line writes E(X²) − μ²); "squares" means the squared values x², not squared probabilities (scene 6 crossed chip); the result is never negative (author note e), which gives a check: a negative variance means an arithmetic error. It helps a new case: A1 uses it directly; for any table it fixes the order of operations. Introduced after the cause (scene 4) and the derivation (scene 6).
- **Considered, not used:** "MOSSOM" as an acronym (one more thing to decode; the full phrase is short enough).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): see the count line below.

**5,664 characters** (5,677 with the joining spaces), 14 scenes. Characters per scene (1 to 14): 396, 504, 665, 557, 595, 618, 724, 216, 89, 362, 84, 404, 375, 75. At 13.3 characters per second the speech is about 426 s; add about 16 s of settling for the beam (1, 3), the running-mean sweep (2, about 4 s), the arms (4), the brackets (5) and the money line (7), 20 s for two countdowns, 5 s of short holds (8, 10, 12, 13) and about 62 s more for the quiet notes (about 103 s of holds): **about 529 s**, inside the 5,500 to 6,800 band and under the 570 s cap. Scene 7 is the longest; the givens strip must be complete before "The expected payout". Feedback: scene 10 about 28 s and scene 12 about 31 s including the 1 s holds. Reserve trims if the voiced take runs long (only about 160 characters above the floor): scene 13's second sentence (keep the boxed results silent, −99); scene 3's "Dividing each count by a thousand gives its probability." is needed for the generation and stays.

## Scene list and build ids

Lesson key `m-a12s03` (route math-a12-s03). Suggested explainer folder `src/explainer/lessons/math-a12-s03` and build folder `docs/production/claude-pm/lessons/m-a12s03` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, long-run-average, sum-x-p-x, why-square, variance-and-sigma, quicker-formula, insurance, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s02's last frame continues into scene 1 (camera continue, same bars and triangle); 1 to 2 clear change (the running-mean graph); 2 to 3 clear change (new distribution); 3 to 4 to 5 camera continue (same bars and beam); 5 to 6 camera continue (right column clears, bars stay small); 6 to 7 clear change; 7 to 8 camera pull back; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s03-learning-review.md`, `science_check` = `checks/m-a12s03-maths-check.md`.

## Assets

Have (after the s01 and s02 builds): `ProbabilityBars`, `DistributionTable` (with extra rows), `StackedTotalBar`; shared `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`. Plate: `maths-a12-die.png` and the top-face set (s01 asset brief).

New: `BalancePoint`, `RunningMeanTrace`, `DeviationArms`, `SpreadBrackets`; `ProbabilityBars` category mode (insurance) and split mode (handoff).

## Codex asset brief

**Coded parts (add to the s01 probability kit brief; same rules: exported through `kit.tsx`, pilot from this design's numbers, numerical checks, desktop and phone-landscape stills, silent motion sample). Every value shown is computed from the same distribution data that draws the bars.**

1. **`BalancePoint`** (scenes 1, 3, 4, 5; feedback 1; s02 handoff). The x axis of a `ProbabilityBars` drawn as a beam on a triangle (fulcrum). Props: `at` (fulcrum x, animatable), `levelAt` (cue to slide to μ and level), `showReadout` ("balance point: 3.5"), `tiltCap` (degrees). The beam's tilt sign and size follow the net moment Σ (x − fulcrum) P(x), capped, so it tilts towards the heavier side and is level only at μ; `settle: false` lets s02's handoff slide without settling. Checks: level exactly at 3.5 for the die, 1.7 for the site distribution, 1.6 for A1; tilt sign correct at five sample fulcrum positions each.
2. **`RunningMeanTrace`** (scene 2). Plots the running mean of a stored sequence (prop `rolls`, 2,000 integers) against the roll count, with a dashed `target` line (3.5), `inset` for the first k rolls as face tokens with their running means, `revealTo` cues (10, then 2,000 over about 3 s) and `readouts` ({n, at}). Checks: means 5, 5.5, 5.667, 5.75 for the first four; 4.2 at 10; 3.32 at 100; 3.496 at 1,000; 3.491 at 2,000 (from the stored sequence in author note c; sums 42, 332, 3,496, 6,982).
3. **`DeviationArms`** (scene 4). From the μ marker on the beam, horizontal arms to each value (blue left, green right) labelled x − μ; `weightAt` shrinks each arm to (x − μ)P(x) with relabelling; `cancelAt` slides left and right arms into two stacks whose lengths are shown equal; `squareAt` turns each arm into a square of side |x − μ| (area labelled (x − μ)², purple) beside its bar, then a weighted version. Checks: weighted arms −0.17, −0.21, 0.12, 0.26; stacks 0.38 and 0.38; squares 2.89, 0.49, 0.09, 1.69. The part throws if the author's μ isn't the distribution's mean.
4. **`SpreadBrackets`** (scenes 5, 7). A bracket on the axis from μ − σ to μ + σ with labels, optional inner tint of bars inside it, and a money-line variant on a plain number line (scene 7: 210 ± 1,134, clipped with an arrow beyond the axis end). Checks: 0.8 to 2.6; bars at 1 and 2 inside.
5. **`ProbabilityBars` category mode** (scene 7): bars at labelled categories (0, 1,000, 8,000) evenly spaced with a "not to scale" tag. **Split mode** (scene 13): a bar set splits into 16 then 64 narrower bars over the same interval following an author-supplied smooth height function, no values or y labels shown.

No new painted plate (the die from the s01 asset brief).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the derivation in scene 6 (expanding (x − μ)² and using ΣxP(x) = μ and ΣP(x) = 1) and the claim that Var(X) is never negative.
3. Confirm the scope of every learner-visible general claim: "the weighted distances always cancel" (true for every distribution: Σ(x − μ)P(x) = 0) is stated with "weighted"; "the long-run average" is "settles around", not "reaches"; "most of the probability" in scene 5 is said of this distribution only (probability 0.7 inside μ ± σ); no fraction-inside-σ rule is stated in general.
4. Confirm the running-mean readouts come from the stored sequence and are labelled simulated (grey), and the build stores the data rather than regenerating it.
5. Confirm the insurance numbers (site short-answer Q2) and that σ ≈ $1,134 is computed with the 0.93 outcome included.
6. Confirm both attempt questions carry every demand and given, and that neither card shows a formula, an equation or the answer form.
7. Confirm the four syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the opening frame matches s02 scene 13 exactly.

## YouTube metadata (draft)

Title: Expected Value and Variance of Discrete Random Variables | Year 12 Maths Advanced

(Title length: 82 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson07.sa.html

The expected value of one roll of a die is 3.5, a number the die can never show. So what is expected? See the expected value as the balance point of the bar graph and as the long-run average of many rolls, and see where E(X) = Σ xP(x) comes from. Then measure spread: the weighted distances from the mean always cancel, so we average squared distances instead, which makes the variance an expected value, Var(X) = E((X − μ)²). Work out the variance and standard deviation, derive the quicker form Σ x²P(x) − μ², and use expectation and standard deviation to explain an insurer's risk. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, random variables.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise the mean, or expected value, μ or E(X), of a discrete random variable X as a measure of centre for its distribution"
"Generate and use the formulas E(X)=μ=ΣxP(x) and Var(X)=σ^(2)=Σ(x-μ)^(2)P(x)=Σx^(2)P(x)-μ^(2) for the random variable X, where Var(X) is the variance and σ is the standard deviation of the distribution"
"Recognise that the variance is an expected value because Var(X)=E((X-μ)^(2))"
"Solve problems involving probabilities, expectation and variance of discrete random variables"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: When is a distribution uniform? (previous video); the mean of a data set. Next: Continuous random variables.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. s04's opening frame (root).** s04 has no design yet. Scene 13 ends on thin bars across an interval with "Next: what if X can take any value in an interval?". If s04 opens on a different picture (the site's lesson 8 is the likely source), change scene 13's last two sentences and its graph only; no continuous claim is made here either way.
- **2. Syllabus quote linear form (error check).** The crosswalk's linear text "σ^(2)" and "Σx^(2)P(x)-μ^(2)" is quoted unchanged in the description; root may prefer "σ²" and "Σx²P(x) − μ²" for readability (as i05 wrote the MathML in linear form). The quotes above copy the crosswalk exactly.
- **3. The die's variance (learning review).** 35/12 appears only as a small grey chip in scene 5, so a student sees that a uniform distribution has a variance too. If it competes with the 0.81 work, remove the chip (screen only; no narration change).
- **4. Spoken "E of X squared" (voice pilot).** First use says "E of X squared, the average of the squared values" to separate it from μ²; the voice pilot checks that the two are heard as different.
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s01, s02 and the mean of data; check that the beam makes "balance point" concrete before the formula; that the running mean is labelled simulated and makes "long-run average" visible; that the thousand-trials argument generates ΣxP(x) rather than asserting it; that the cancelling arms are the reason for squaring; that units motivate σ; that the derivation in scene 6 is one step per line; that the insurance problem separates task, table and givens; that the cards give nothing away), then the Codex maths check and error check.
- The levelling beam, the running mean, the cancelling arms and the brackets carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s02's scene 13 (same designer).

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 7 says "many independent policies"; the author-only fulcrum note corrected (1.7 is right of 1.5, pulled by the bars at 2 and 3). Narration now 5,676 characters (counted by the build parser rules). No em dashes.
