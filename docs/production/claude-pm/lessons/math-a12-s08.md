# Maths A12 S08: How do integration and digital tools calculate continuous moments? From Σ xP(x) to ∫ x f(x) dx, the variance integral and E(X²) − μ², and integrals beyond the course with an online computational application (design)

Status: Revision 1 (3 Nov 2026), overnight queue wave I2. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer` with `domain` intervals, `IntegralNotation`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `QuestionCard`, `Countdown`, `KeyNotes`), `ToolPanel` (unbranded, i12 decision 38), the integral parts from i06 (`AreaFill`, `RiemannStrips`, `RefinementTable`), the probability parts from s01 to s03 (`ProbabilityBars`, `DistributionTable`, `BalancePoint`, `SpreadBrackets`) and `BalancePoint` density mode from s07, with the additions under "Codex asset brief". Nothing recorded; human listening pending.

Narration 5,573 characters, 14 scenes, about 522 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: eighth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 60), after s07 (the continuous uniform model) and before s09 (the normal model). Templates: `math-a12-i05.md` and `math-a12-d10.md` (section structure, voice, attempt and feedback pattern, key notes), with `math-a12-s03.md` for the discrete moments this video generalises. Maths visuals are coded; no painted plate. No people. Pre-design pack: none, so this design does the pack work itself. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson10.sa.html` (Quantiles, Expectation and Variance), SHA256 `bb363c20ce881f9f2da10030a32abddca9c9bb5221f05ad4a1eb1f15817f1579`; this video uses cards 03 (expectation), 04 (variance and the uniform results), 06 (integrals beyond the course), problem 3 (the uniform derivation), traps 01 and drill 4. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s08` ("How do integration and digital tools calculate continuous moments?", four syllabus actions, site source lesson 10, no coverage gaps).

Owner rules applied: as s07 (new 2024 syllabus only; codenames and exact wording; no site module label; maths coded; no people; one reasoning stage at a time; calculations as task, formula and grouped givens; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed-out mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causal conversational narration). Binding root decisions: exact values in the algebra (8/3, 8/9, π/2, π²/4 − 2, π − 3), decimals only in grey readouts; attempt cards give nothing away; domains kept (every density stated with "0 elsewhere"); the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci0b521caf`: "Generate the expression for the expected value of a continuous random variable, E(X)=μ=∫_{a}^(b)xf(x)dx , where the probability density function f(x) is defined on the interval [a,b]"
- `ci8a12d966`: "Generate the expression for the variance of a continuous random variable, Var(X)=E(X^(2))-μ^(2)=∫_{a}^(b)x^(2)f(x)dx-μ^(2) , where the probability density function f(x) is defined on the interval [a,b]"
- `ms_s6_y12_evaluate_the_expected_value_and_the_vari`: "Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a,b] , that involve integration of functions within the scope of the Mathematics Advanced course"
- `ci66c27065`: "Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a,b] , that involve integration of functions beyond the scope of the Mathematics Advanced course using an online computational application"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s07's handoff frame (the train's flat density on [1, 5] at height 1/4 with a balance triangle at t = 2 and "?"; `math-a12-s07.md` scene 15). Levels the beam at 3 by symmetry, then asks where a sloping density balances (the site's f(x) = x/8 on [0, 4]); generates E(X) = ∫ x f(x) dx by cutting the density into strips that act like discrete values with probabilities f(x)Δx (`ci0b521caf`), with strip sums 2.625, 2.656, 2.664 closing in; evaluates 8/3 (site card 03) and checks the uniform midpoint 3 (site problem 3); generates Var(X) = ∫ (x − μ)² f(x) dx = ∫ x² f(x) dx − μ² by the same weighting and the same expansion steps as s03 (`ci8a12d966`); evaluates 8/9 and σ = 2√2/3 (site card 04) and quotes the uniform variance (b − a)²/12 with the train check 4/3 (`ms_s6_...`); sets up E and Var for f(x) = ½ sin x on [0, π], where x sin x is beyond the course, and evaluates them with an online computational application (`ci66c27065`). Stops at continuous moments. Not taught: the normal model (s09; the handoff asks a question only); E(aX + b) and Var(aX + b) (not in this route's points); the uniform variance derivation in full (key note and grey line only; site problem 3 remains on the site).

## Decisions

- **Learner question kept (outline).** "How do integration and digital tools calculate continuous moments?" The answer, built in order: a flat density balances in the middle, but a sloping one needs a calculation (1); a thin strip acts like a discrete value with probability f(x)Δx, so Σ xP(x) becomes Σ x f(x)Δx and, as the strips thin, ∫ x f(x) dx (2); evaluating it gives the balance point (3), and it agrees with symmetry for the uniform (4); variance is still the expected squared distance, and the s03 expansion carries over because ∫ f = 1 and ∫ x f = μ (5); evaluating it gives a spread in X's units (6); when x f(x) is beyond the course, set up the same integrals and let an online computational application evaluate them (7).
- **Hook (continuity with s03 and s07).** s07's beam at t = 2 tilts towards 5; it slides and levels at 3 (symmetry, no integral). Then x/8 on [0, 4] replaces it: the beam tilts right of 2, with "?". The site's hook (three middles) is s06's territory and is not reused.
- **Generating ∫ x f(x) dx (`ci0b521caf`, "generate").** `RiemannStrips` (midpoint rule) on x/8 with n = 4, 8, 16 strips. Each strip is redrawn as a bar at its midpoint with weight f(x)Δx (the strip's area, its probability), so the strips become a discrete distribution (`ProbabilityBars` from the strips). Its balance point Σ x f(x)Δx is 21/8 = 2.625, 85/32 ≈ 2.656, 341/128 ≈ 2.664 (grey `RefinementTable`), closing in on 8/3. A crosswalk table writes the switch row by row: Σ → ∫, P(x) → f(x) dx (`FormulaCrosswalk`, new). The strip probabilities add to exactly 1 at every n (midpoint rule on a linear f), which the table shows in grey.
- **Evaluating E (site card 03, numbers unchanged).** ∫₀⁴ x · x/8 dx = (1/8)[x³/3]₀⁴ = 64/24 = 8/3 ≈ 2.67 (grey). The beam levels at 8/3, right of 2, "pulled by the taller part on the right". The median 2√2 is not mentioned (s06 compared the middles; one idea here).
- **The uniform check (site card 04 and problem 3).** ∫₁⁵ x/4 dx = [x²/8]₁⁵ = 24/8 = 3, the beam's answer. The general (a + b)/2 is stated once with "the midpoint" (site's quotable result), not derived.
- **Generating the variance (`ci8a12d966`, "generate").** Same weighting: Var(X) = ∫ (x − μ)² f(x) dx, the expected squared distance (s03's Var(X) = E((X − μ)²) is recalled, not re-taught). The quick form: the s03 expansion with each sum now an integral, ∫ x² f − 2μ ∫ x f + μ² ∫ f = E(X²) − 2μ² + μ² = E(X²) − μ². The `FormulaCrosswalk` adds the two variance rows. The narration names why it carries over: ∫ f = 1 and ∫ x f = μ play the parts of ΣP(x) = 1 and ΣxP(x) = μ.
- **Evaluating Var (site card 04, numbers unchanged).** E(X²) = ∫₀⁴ x³/8 dx = (1/8)[x⁴/4]₀⁴ = 8; Var = 8 − 64/9 = 8/9; σ = √(8/9) = 2√2/3 ≈ 0.943 (grey). `SpreadBrackets` mark 8/3 ± 2√2/3 (≈ 1.72 to 3.61, grey) on the axis with "a typical distance". No fraction-inside claim (s03 rule). Then one line: the same work for a uniform gives (b − a)²/12; for the train, 16/12 = 4/3 (checked: E(X²) = 31/3, 31/3 − 9 = 4/3).
- **Beyond the course (`ci66c27065`).** f(x) = ½ sin x on [0, π] (new example; the site's card 06 describes the method but gives no worked case). The density checks are within the course: ½ sin x ≥ 0 on [0, π] and ∫₀^π ½ sin x dx = ½[−cos x]₀^π = 1. E(X) = ∫₀^π ½ x sin x dx needs integration by parts, which is not in Mathematics Advanced. The set-up is written in full (limits, integrand x f(x)), then entered in an unbranded `ToolPanel` "online computational application": results π/2 (≈ 1.571) and E(X²) = (π² − 4)/2 (≈ 2.935); Var = (π² − 4)/2 − π²/4 = π²/4 − 2 ≈ 0.467. A sense check by symmetry (the curve is symmetric about π/2) is spoken. "Say that you used it" (site card 06: "state that you did"). The app is shown with exact and decimal outputs; no brand, no real interface copied.
- **Attempts (original).** (A1, within the course) f(x) = 2x on 0 ≤ x ≤ 1, 0 elsewhere: E(X) = 2/3, E(X²) = 1/2, Var(X) = 1/18. Crossed: "E(X) = ∫₀¹ 2x dx = 1" (integrated f, not x f; site trap 01). (A2, beyond the course) f(x) = cos x on 0 ≤ x ≤ π/2, 0 elsewhere: write the integrals you would enter in an online computational application for E(X) and Var(X). E(X) = ∫₀^(π/2) x cos x dx; Var(X) = ∫₀^(π/2) x² cos x dx − μ². App: μ = π/2 − 1 ≈ 0.571, Var = π − 3 ≈ 0.142. Crossed: "∫₀^(π/2) (x cos x)² dx − μ²" (squared the whole integrand; it even gives a negative "variance", ≈ −0.073). Neither card shows a formula or the answer form.
- **Mistake scene:** none separate. "E(X) = ∫ f dx" (feedback 1 crossed); "the formula needs a new derivation" (5, the expansion carries over); "an app answer needs no set-up" (7); "square the whole integrand" (feedback 2 crossed); "a negative variance is possible" (feedback 2: it is the warning sign, site drill 4's idea).
- **Memory aid.** "Sum becomes integral; P(x) becomes f(x) dx." See "Memory aid check".
- **Handoff (outline next: s09, "When is a normal model useful, and what does its shape mean?").** Scene 13: a histogram of 1,000 simulated bottle fills (author note h), bunched around 500 mL in a bell, with "?" and chip "Next: when is a normal model useful?". No normal curve, notation, mean or σ is shown. This is s09's opening frame (same designer, written next).
- **Site sources used:** lesson 10 cards 03 (E(X) = ∫ x f(x) dx, the discrete/continuous table, x/8 gives 8/3, balance point and long-run average), 04 (Var formulas, E(X²) = 8, Var = 8/9, σ = 2√2/3, the uniform results), 06 (beyond the course: set up, evaluate with an online computational application, state that you did; the marks are in the set-up), problem 3 (uniform E and Var by integration; only the results are used), trap 01 (∫ f gives 1, not the mean), drill 4 (a negative variance means an error). Not used: cards 02 (quantiles, s06), problems 1 and 2 (3x²/8: 3/2 and 0.15; the attempts are original), the hook and traps 02 to 04 (s06), Q1 to Q3.
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Hook: "The mean, the median and the mode are three different answers to 'where is the middle'. For a symmetric distribution they coincide." False without a single peak: a symmetric density with two peaks has its modes away from the centre, and the uniform has no unique mode (lesson 9 card 06 says so). Suggested: "For a symmetric distribution with a single peak, they coincide." (2) Trap 04: "They agree only for a symmetric density. For any skewed distribution they differ." Too strong: some non-symmetric densities have mean equal to median (for example, a suitable mixture of a uniform piece and a triangle). Suggested: "They agree for a symmetric density; for a skewed density they usually differ, and questions are built on that gap." (3) Card 02 and the hook contain em dashes, against the house style (note). (4) Card 06 lists "Polynomial densities, and simple exponential ones" as within the course; trigonometric densities such as ½ sin x are also within the course for ∫ f, while their x f(x) integrals are not (wording suggestion, not an error).
- **Cause chain taught, in order:** (1) a flat density balances in the middle; a sloping one leans towards its taller side (1); (2) each thin strip acts like a value with probability f(x)Δx, so the discrete balance-point sum becomes ∫ x f(x) dx as the strips thin (2); (3) evaluating it gives 8/3, right of the middle (3); (4) the formula agrees with symmetry for a uniform (4); (5) variance is the same weighting of squared distances, and the quick form carries over because ∫ f = 1 and ∫ x f = μ (5); (6) the numbers for x/8 and the uniform result (6); (7) when the integral needs a technique beyond the course, the set-up is the same and an app evaluates it (7); (8) memory aid (8).
- **Entry knowledge (draft route `entryKnowledge`):** s03 (E(X) = ΣxP(x) as balance point and long-run average; Var(X) = E((X − μ)²) = E(X²) − μ²; σ), s05 (density, probability as area, ∫ f = 1), s07 (uniform 1/(b − a)), i06 and i07 (strips, definite integral as a limit of sums), i09 (evaluating definite integrals), i05 (∫ sin x dx = −cos x + C). Years 7 to 10: none beyond algebra.
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s08`; playlistOrder 60; mainLearnerQuestion as above; syllabusActionIds `ci0b521caf`, `ci8a12d966`, `ms_s6_y12_evaluate_the_expected_value_and_the_vari`, `ci66c27065`; prerequisiteVideos `math-a12-s03`, `math-a12-s05`, `math-a12-s07`; sourceLessons `random-variables/lesson10.sa.html` (SHA above); startBoundary "From s07's flat train density with a balance triangle: where does a density balance?"; stopBoundary "Generate ∫ x f(x) dx from strips; evaluate x/8 (8/3) and check the uniform midpoint; generate ∫ x² f(x) dx − μ² from s03's expansion; evaluate 8/9 and σ; quote (b − a)²/12; set up and evaluate a beyond-course case with an online computational application. No normal model, no linear changes of variable."; nextHandoff "math-a12-s09: why do bottle fills pile up in a bell? (a histogram with ?)".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** the beam sliding and levelling on a density (`BalancePoint` density mode, s07); strips turning into weighted bars and their balance point settling as they thin (`RiemannStrips` with `toBars`, new prop; `RefinementTable`); the row-by-row switch from the discrete to the continuous formula (`FormulaCrosswalk`, new); σ brackets on a density (`SpreadBrackets`); the set-up written into an app panel and its outputs returning (`ToolPanel` input/output mode, new); `IntegralNotation` with timed labels on x and f(x); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`; the fill histogram for the handoff (`ClassHistogram`, s04).
- **Board layout (constant):** as s03: heading top-left; graph on the left (about 1,000 × 520 px) with the beam axis; algebra and the crosswalk table in the right column, one reasoning stage bright at a time.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Train (s07): f = 1/4 on [1, 5]; E(X) = [x²/8]₁⁵ = 3; E(X²) = [x³/12]₁⁵ = 124/12 = 31/3; Var = 31/3 − 9 = 4/3 = (5 − 1)²/12.
  (b) f(x) = x/8 on [0, 4]: ∫ f = 1; E(X) = 8/3; E(X²) = 8; Var = 8/9 (also by definition ∫ (x − 8/3)² x/8 dx = 8/9); σ = 2√2/3 ≈ 0.9428; μ ± σ ≈ 1.724 to 3.609.
  (c) Midpoint strips on x/8 over [0, 4]: n = 4 gives Σ x f(x)Δx = 21/8 = 2.625; n = 8 gives 85/32 = 2.65625; n = 16 gives 341/128 ≈ 2.6641; Σ f(x)Δx = 1 exactly in each case. For n = 4, midpoints 0.5, 1.5, 2.5, 3.5 with strip probabilities 1/16, 3/16, 5/16, 7/16.
  (d) General uniform: E = (a + b)/2; Var = (b − a)²/12 (SymPy).
  (e) ½ sin x on [0, π]: ∫ = 1; E = π/2 ≈ 1.5708; E(X²) = (π² − 4)/2 ≈ 2.9348; Var = π²/4 − 2 ≈ 0.4674 (also by definition); σ ≈ 0.6837. ∫ x sin x dx = sin x − x cos x + C needs integration by parts (not in Mathematics Advanced).
  (f) A1: 2x on [0, 1]: ∫ = 1; E = 2/3; E(X²) = 1/2; Var = 1/2 − 4/9 = 1/18 ≈ 0.0556. Crossed ∫₀¹ 2x dx = 1.
  (g) A2: cos x on [0, π/2]: ∫ = 1, cos x ≥ 0; E = π/2 − 1 ≈ 0.5708; E(X²) = π²/4 − 2 ≈ 0.4674; Var = π − 3 ≈ 0.1416; σ ≈ 0.3763. Crossed ∫ (x cos x)² dx = π(π² − 6)/48 ≈ 0.2532, minus μ² ≈ 0.3258, gives ≈ −0.0725.
  (h) Handoff histogram: Python 3.14 `random.Random(1636)`, `gauss(500, 8)` 1,000 times; classes [476, 480), ..., [524, 528) mL with counts 2, 17, 45, 94, 153, 192, 191, 152, 94, 41, 16, 3, 0 (sum 1,000); sample mean 499.91, sample sd 7.71; min 479.0, max 522.2; 105 below 490 and 106 above 510. The build stores the 1,000 values as data; Codex confirms the class counts.
  (i) Pronunciations: "the integral from a to b of x f of x, dx"; "E of X squared, the average of the squared values" (as s03); "pi over two"; "pi squared over four, minus two"; "pi minus three"; "eight thirds"; "eight ninths".
  (j) Windows: train x 0 to 6, y 0 to 0.4; x/8 on x −0.5 to 4.5, y 0 to 0.6 with the beam axis below; ½ sin x on x −0.3 to 3.5 (ticks π/2, π), y 0 to 0.6; handoff histogram x 470 to 530 mL, y 0 to 200.

Main question: *A flat density balances in its middle. But where does a sloping density balance, how spread out is it, and what do we do when the integral is beyond what we can do by hand?*
Entry knowledge (s03, s05, s07; i06 to i09): discrete moments, densities, definite integrals.
Stops after: ∫ x f(x) dx and ∫ x² f(x) dx − μ² generated and evaluated, the uniform results, and one beyond-course case with an app.
Handoff: math-a12-s09: a histogram of 1,000 bottle fills in a bell, "?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as s03 and s07: densities teal; the balance triangle, μ marker and strip bars amber (`MATH_ACCENT`); σ brackets amber; the app panel neutral grey; crossed red; algebra ink, current line bright, earlier lines dim.

### 1. hook (where does a density balance?)
> Last video ended with this question. The train's waiting-time density is flat from one to five. Where does it balance? Right in the middle, at **three**, because the two halves are mirror images. But most densities aren't flat. Take f of x equals x over eight, from zero to **four**. It's taller on the right, so it should balance somewhere right of two. Where exactly? And how spread out is it? In a discrete model we added up values times probabilities. Here there's no list of values to **add**.

Visual: opens on s07's last frame exactly (the train's density 1/4 on [1, 5], the balance triangle at t = 2 with the beam tilting towards 5, "?", chip "Next: where does a density balance?"). Heading writes on: "Expected value and variance of a continuous random variable". On the third sentence the triangle slides right and the beam levels on "three", readout "balance point: 3"; a dashed mirror line at 3 flashes. On "four" a clear change: f(x) = x/8 on [0, 4] (teal, 0 elsewhere), the beam under it with the triangle at 2, tilting right; "?" beside the triangle. On "add" a small grey chip "discrete: E(X) = Σ x P(x)" (s03).

### 2. from a sum to an integral
> So let's make a list. Cut the interval into four strips. Each strip's area is about f of x times its width, delta x. That's the probability that X lands in the **strip**. So treat each strip like a single value at its middle, with that probability. Values further out, and with more probability, pull harder on the beam. Now it's a discrete model, and its balance point is the sum of x times f of x delta x. That's two point six two **five**. With eight strips, it's two point six five six. With sixteen, two point six six **four**. As the strips get thinner, the sum becomes an integral. So the expected value is the integral from a to b of x times f of x, **dx**.

Visual: camera continue (x/8 with its beam). `RiemannStrips` (midpoint, n = 4) draw; on "strip" one strip is highlighted with brackets "width Δx" and "height f(x)", tag "area ≈ f(x)Δx = probability". On the next sentence each strip collapses into an amber bar at its midpoint (0.5, 1.5, 2.5, 3.5) with labels 1/16, 3/16, 5/16, 7/16 (`toBars`); the beam tilts and slides, with a grey tag "further out and heavier: more pull". On "five" it levels at 2.625, `RefinementTable` row "n = 4: Σ x f(x)Δx = 2.625" (grey). The bars return to strips and split: n = 8 (row "2.656"), on "four" n = 16 (row "2.664"), the beam creeping right each time. On "integral" the right column's `FormulaCrosswalk` writes two rows: "discrete: Σ P(x) = 1 | continuous: ∫ₐᵇ f(x) dx = 1" and "discrete: E(X) = Σ x P(x) | continuous: E(X) = ∫ₐᵇ x f(x) dx", with "Σ → ∫" and "P(x) → f(x) dx" arrows. On "dx" boxed "E(X) = μ = ∫ₐᵇ x f(x) dx" (`IntegralNotation`, labels "value x" and "density f(x)").

### 3. working it out for x over eight
> Let's evaluate it. Multiply x by x over eight, and you get x squared over eight. Its integral from zero to four is one eighth of x cubed over three, from zero to four. That's sixty-four over twenty-four, which is eight **thirds**, about two point six seven. The beam levels there, right of the middle, pulled over by the taller part of the density. And the strip sums were closing in on exactly this **number**. Like a discrete mean, it's also the long-run average. Take many values of X, and their average settles near eight thirds.

Visual: camera continue (strips fade; the density and beam stay). Task strip "Find E(X) for f(x) = x/8, 0 ≤ x ≤ 4 (0 elsewhere)." `AlignedAlgebra`: "E(X) = ∫₀⁴ x · x/8 dx = ∫₀⁴ x²/8 dx"; "= (1/8)[x³/3]₀⁴ = 64/24"; on "thirds" boxed "E(X) = 8/3" with a grey readout "≈ 2.67". The beam slides from 2.664 to 8/3 and levels, μ marker "8/3"; the right half of the area tints slightly darker, tag "taller side pulls". On "number" the grey refinement rows (2.625, 2.656, 2.664) line up with an arrow to "8/3 ≈ 2.667". On the long-run sentences a small grey chip "long-run average of X" beside the μ marker (s03's running mean, no new trace).

### 4. a check on the uniform
> Does this agree with symmetry? For the train, f is a quarter from one to five. So we integrate x over four, which gives x squared over eight, from one to five. That's twenty-five minus one, over eight, which is three, the **middle**. The integral and the symmetry agree, so the formula passes a test we can check by eye. For any uniform distribution from a to b, the mean is a plus b over two, the **midpoint**.

Visual: camera pull back: the x/8 graph shrinks to the top left; the train's flat density returns small at the right with its level beam at 3. Rows: "E(X) = ∫₁⁵ x · 1/4 dx = [x²/8]₁⁵ = (25 − 1)/8 = 3"; on "middle" a tick linking it to the beam; on the next sentence a tag "formula = symmetry ✓". On "midpoint" a grey line "uniform on [a, b]: E(X) = (a + b)/2".

### 5. the variance, the same way
> Now, spread. The variance is still the expected squared distance from mu. So we weight each squared distance, x minus mu, squared, by f of x dx, and integrate. And the quicker form carries over too. Expanding the square works exactly as it did for a discrete model. The integral of f is one, and the integral of x f is mu, just like the sums were. That means you don't need to expand a squared bracket inside the integral. So the variance is the integral of x squared f of x, minus mu **squared**.

Visual: clear change of the right column (x/8 and its level beam at 8/3 stay on the left). `FormulaCrosswalk` adds rows: "Var(X) = Σ (x − μ)² P(x) | Var(X) = ∫ₐᵇ (x − μ)² f(x) dx", then "Σ x² P(x) − μ² | ∫ₐᵇ x² f(x) dx − μ²". On the expansion sentence a single `AlignedAlgebra` row: "∫ (x − μ)² f dx = ∫ x² f dx − 2μ ∫ x f dx + μ² ∫ f dx"; "∫ x f dx" ringed with tag "= μ" and "∫ f dx" ringed with tag "= 1" (s03's two ringed sums in a grey chip beside them); a grey tag "no bracket to expand inside the integral". On "squared" row "= E(X²) − 2μ² + μ²", boxed "Var(X) = ∫ₐᵇ x² f(x) dx − μ²", with "E(X²) = ∫ₐᵇ x² f(x) dx" in a grey line.

### 6. working out the variance and σ
> For x over eight, E of X squared, the average of the squared values, is the integral of x cubed over eight, from zero to four. That's one eighth of x to the fourth over four, or two hundred and fifty-six over thirty-two, which is **eight**. Subtract mu squared, sixty-four ninths, and the variance is eight **ninths**. Here's a quick check. E of X squared, eight, must be bigger than mu squared, about seven point one, or the variance would be negative. So sigma is the square root of eight ninths, about zero point nine **four**. That's a typical distance from eight thirds. For a uniform from a to b, the same steps give b minus a, squared, over twelve. For the train, that's sixteen over twelve, which is four **thirds**.

Visual: right column: "E(X²) = ∫₀⁴ x² · x/8 dx = (1/8)[x⁴/4]₀⁴ = 256/32"; on "eight" boxed "E(X²) = 8". On "ninths" "Var(X) = 8 − (8/3)² = 8 − 64/9 = 8/9", boxed; on the check sentence a grey row "E(X²) = 8 > μ² = 64/9 ≈ 7.1 ✓". On "four" boxed "σ = √(8/9) = 2√2/3" with grey "≈ 0.94"; `SpreadBrackets` on the axis from 8/3 − σ to 8/3 + σ (grey ends "≈ 1.72", "≈ 3.61"), tag "a typical distance of about 0.94". On the uniform sentences a grey line "uniform on [a, b]: Var(X) = (b − a)²/12"; on "thirds" row "train: (5 − 1)²/12 = 16/12 = 4/3" with a grey check "∫₁⁵ x²/4 dx − 3² = 31/3 − 9 = 4/3".

### 7. when the integral is beyond the course
> Sometimes you can set up the integral but can't do it by hand. Take f of x equals a half sin x, from zero to pi. It is a density. It's never negative there, and its integral is a half of minus cos x, from zero to pi, which is **one**. But E of X needs the integral of x times a half sin x. No rule in this course integrates x times sin **x**. So write the set-up in full, with its limits, and use an online computational application. Then say that you used one. The app gives pi over two, which matches the symmetry of the **curve**. For the variance, set up the integral of x squared times a half sin x, minus mu squared. The variance is pi squared over four, minus two, about zero point four six **seven**. In an exam, the marks are in the set-up: the right limits, x f of x or x squared f of x, and subtracting mu squared.

Visual: clear change. Graph: ½ sin x on [0, π] (teal, 0 elsewhere). Task strip "Find E(X) and Var(X) for f(x) = ½ sin x, 0 ≤ x ≤ π (0 elsewhere)." Right column, "density check" rows: "½ sin x ≥ 0 on [0, π]"; on "one" "∫₀^π ½ sin x dx = ½[−cos x]₀^π = ½(1 + 1) = 1 ✓". On "x" the set-up "E(X) = ∫₀^π x · ½ sin x dx" writes, and "x sin x" gets a grey tag "not a rule in this course". On the next sentences `ToolPanel` (unbranded, input/output mode) slides in: the set-up types into its input line as "integrate x*(1/2)*sin(x) from 0 to pi" and on "curve" the output returns "π/2 ≈ 1.5708"; the beam under the curve levels at π/2 and a dashed mirror line flashes there. A grey chip "write: evaluated using an online computational application". On the variance sentence the panel's second input "integrate x^2*(1/2)*sin(x) from 0 to pi" returns "(π² − 4)/2 ≈ 2.9348"; on "seven" the row "Var(X) = (π² − 4)/2 − (π/2)² = π²/4 − 2" boxed, grey "≈ 0.467". A tag across the bottom: "the marks are in the set-up: limits, x f(x) or x² f(x), and − μ²".

### 8. memory aid
> Here's a way to remember the switch. Sum becomes integral, and P of x becomes f of x dx. That turns each discrete formula for E and the variance into its continuous one.

Visual: camera pull back to the `FormulaCrosswalk` small. The handwritten line writes large: "Sum becomes integral; P(x) becomes f(x) dx." Under it, smaller: "E(X) = ∫ₐᵇ x f(x) dx, Var(X) = ∫ₐᵇ x² f(x) dx − μ²." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find E of X and the variance of X for this density. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X has probability density function f(x) = 2x for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find E(X) and Var(X)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no formula).

### 10. feedback 1 (brief)
> E of X is the integral of x times two x, which is two x squared. From zero to one, that's two **thirds**. E of X squared is the integral of two x cubed, which is a **half**. So the variance is a half minus four ninths, which is one **eighteenth**. An expected value of one is wrong. That integrates f by itself, which always gives **one**.

Visual: card shrinks to the top. "f(x) = 2x" and "0 ≤ x ≤ 1" underlined as used. On "thirds" row "E(X) = ∫₀¹ x · 2x dx = [2x³/3]₀¹ = 2/3". On "half" row "E(X²) = ∫₀¹ x² · 2x dx = [x⁴/2]₀¹ = 1/2". On "eighteenth" boxed "Var(X) = 1/2 − (2/3)² = 1/2 − 4/9 = 1/18". On "one" a chip "E(X) = ∫₀¹ 2x dx = 1" fades in and is crossed (caption "that's the total area, always 1"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Write the integrals you would enter into an online computational application. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X has probability density function f(x) = cos x for 0 ≤ x ≤ π/2, and f(x) = 0 elsewhere. Write down the integrals you would evaluate, using an online computational application, to find E(X) and Var(X)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no integral, no app panel).

### 12. feedback 2 (brief)
> E of X is the integral from zero to pi over two of x cos x, **dx**. The variance is the integral of x squared cos x over the same limits, minus mu **squared**. The app gives mu as pi over two minus one, and the variance as pi minus three, about zero point one four **two**. Squaring the whole integrand, x cos x, is wrong. Only x is squared, and that set-up even gives a negative **variance**.

Visual: card shrinks to the top. "f(x) = cos x" and "0 ≤ x ≤ π/2" underlined. On "dx" row "E(X) = ∫₀^(π/2) x cos x dx". On "squared" row "Var(X) = ∫₀^(π/2) x² cos x dx − μ²". On "two" a small `ToolPanel` shows "π/2 − 1 ≈ 0.571" and "π − 3 ≈ 0.142", boxed "μ = π/2 − 1, Var(X) = π − 3". On "variance" a chip "∫₀^(π/2) (x cos x)² dx − μ²" fades in and is crossed (caption "square x only; this gives ≈ −0.073 < 0"). Hold about 1 second.

### 13. handoff
> So the expected value is the integral of x f of x, and the variance is the integral of x squared f, minus mu squared, by hand or with an app. Every density so far came with a formula on an interval. Next, a new question. Here are a thousand bottle fills from one filling machine. They pile up in a bell around the **target**. Why that shape? And when can we model it?

Visual: the boxed E and Var formulas show small at the top, then fade on "Next". Board clears to a histogram (`ClassHistogram`, counts mode) of the 1,000 stored fills (author note h): x "fill (mL)" 470 to 530, classes of 4 mL from 476 to 528, counts 2, 17, 45, 94, 153, 192, 191, 152, 94, 41, 16, 3, 0. On "target" a dashed grey line at 500 mL, tag "target 500 mL". A "?" above the peak. Chip "Next: when is a normal model useful?". No curve, notation, mean or σ is shown. Hold about 2 seconds. This is s09's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Expected value: E(X) = μ = ∫ₐᵇ x f(x) dx, the balance point of the density (not ∫ f(x) dx, which is always 1).
2. Variance: Var(X) = ∫ₐᵇ (x − μ)² f(x) dx = ∫ₐᵇ x² f(x) dx − μ², where E(X²) = ∫ₐᵇ x² f(x) dx; σ = √Var(X).
3. Uniform on [a, b]: E(X) = (a + b)/2 and Var(X) = (b − a)²/12.
4. Beyond the course: write the integrals in full (limits, x f(x) or x² f(x), − μ²), evaluate with an online computational application, and say that you did.

Memory aid (large, on the notes screen): *Sum becomes integral; P(x) becomes f(x) dx.*

Visual (end of the hold, silent, no added speech): the key notes cross-fade (1 s, root decision 20) back to scene 13's frame exactly (the 1,000-fill histogram, the dashed target line, "?" and chip "Next: when is a normal model useful?"). This is the final frame and s09's opening frame.

## Teaching checks

- **Does it explain causes?** Why the uniform balances at 3: mirror halves (1). Why ∫ x f(x) dx: each strip is a value with probability f(x)Δx, and the discrete sum becomes the integral as strips thin (2). Why 8/3 is right of 2: the taller side pulls (3). Why the quick variance form still works: ∫ f = 1 and ∫ x f = μ play the roles of the sums (5). Why an app: x sin x needs a technique outside the course, but the set-up is the same (7). Why the crossed A2 set-up fails: it squares f as well, and gives a negative "variance" (12).
- **Misconceptions addressed:** "E(X) = ∫ f dx" (feedback 1 crossed); "continuous moments need new ideas" (2, 5: same ideas, sum to integral); "an app answer needs no working" (7: the set-up is the mark); "square the whole integrand" (feedback 2 crossed); "a negative variance is fine" (12).
- **One idea at a time:** one balance question (1), one generation (2), one evaluation (3), one check (4), one generation (5), one evaluation with one uniform result (6), one beyond-course case (7). Only the needed earlier results stay bright: μ = 8/3 in 5 and 6.
- **Video makes it easier:** the student watches strips become weighted bars whose balance point creeps towards 8/3 (2, 3), sees the beam level at 3, 8/3 and π/2, sees the discrete and continuous formulas side by side change one symbol at a time (2, 5), and sees the set-up go into an app and the answer come back (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible, 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 25 s and 29 s (scenes 10 and 12, including the 1 s holds).
- **Avoided double teaching:** s03's balance point, E((X − μ)²) and the expansion are recalled with their ringed sums, not re-derived; i06 and i07's strips and limit are used, not re-taught; s07's uniform density is reused.
- **Syllabus coverage:** `ci0b521caf` (2, 3; key note 1); `ci8a12d966` (5, 6; key note 2); `ms_s6_...` (3, 4, 6; A1; key note 3); `ci66c27065` (7; A2; key note 4).
- **Out of scope by design:** the normal model (s09); E(aX + b), Var(aX + b).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A continuous random variable X has probability density function f(x) = 2x for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find E(X) and Var(X)."
Model answer: E(X) = ∫₀¹ x · 2x dx = [2x³/3]₀¹ = 2/3. E(X²) = ∫₀¹ x² · 2x dx = [x⁴/2]₀¹ = 1/2. Var(X) = 1/2 − (2/3)² = 1/2 − 4/9 = 1/18. Classic mistake (crossed): "E(X) = ∫₀¹ 2x dx = 1" (integrated f, which always gives 1).

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A continuous random variable X has probability density function f(x) = cos x for 0 ≤ x ≤ π/2, and f(x) = 0 elsewhere. Write down the integrals you would evaluate, using an online computational application, to find E(X) and Var(X)."
Model answer: E(X) = μ = ∫₀^(π/2) x cos x dx; Var(X) = ∫₀^(π/2) x² cos x dx − μ². (Evaluated with an application: μ = π/2 − 1 ≈ 0.571, Var(X) = π − 3 ≈ 0.142.) Classic mistake (crossed): "∫₀^(π/2) (x cos x)² dx − μ²" (squares f as well; it gives about −0.073, impossible for a variance).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Train | balance point 3; E(X) = 3; Var = 4/3 (E(X²) = 31/3, grey) | 1, 4, 6 |
| Strips on x/8 | n = 4: probabilities 1/16, 3/16, 5/16, 7/16; Σ x f Δx = 2.625; n = 8: 2.656; n = 16: 2.664 | 2, 3 |
| x/8 on [0, 4] | E(X) = 8/3 ≈ 2.67; E(X²) = 8; Var = 8/9; σ = 2√2/3 ≈ 0.94; μ ± σ ≈ 1.72 to 3.61 (grey) | 3, 5, 6 |
| Uniform results | (a + b)/2; (b − a)²/12; train 16/12 = 4/3 | 4, 6, 14 |
| ½ sin x on [0, π] | ∫ = 1; E = π/2 ≈ 1.5708; E(X²) = (π² − 4)/2 ≈ 2.9348; Var = π²/4 − 2 ≈ 0.467 | 7 |
| A1 | E = 2/3; E(X²) = 1/2; Var = 1/18; crossed 1 | 9, 10 |
| A2 | μ = π/2 − 1 ≈ 0.571; Var = π − 3 ≈ 0.142; crossed ≈ −0.073 | 11, 12 |
| Handoff histogram | 1,000 stored fills; counts 2, 17, 45, 94, 153, 192, 191, 152, 94, 41, 16, 3, 0 in 4 mL classes from 476 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy and Python 3.14 (3 Nov, scratchpad scripts `nums_s07s09.py` and `seed_s09.py`); Codex to re-check numerically and with a CAS.

- Train: ∫₁⁵ x/4 dx = 3; ∫₁⁵ x²/4 dx = 31/3; 31/3 − 9 = 4/3 = 16/12.
- General uniform: ∫ₐᵇ x/(b − a) dx = (a + b)/2; ∫ₐᵇ x²/(b − a) dx − ((a + b)/2)² = (b − a)²/12.
- x/8: ∫₀⁴ x/8 dx = 1; ∫₀⁴ x²/8 dx = 8/3; ∫₀⁴ x³/8 dx = 8; 8 − 64/9 = 8/9; ∫₀⁴ (x − 8/3)² x/8 dx = 8/9; √(8/9) = 0.94281.
- Midpoint sums: 21/8, 85/32, 341/128; Σ f Δx = 1 for n = 4, 8, 16.
- ½ sin x: ∫₀^π ½ sin x dx = 1; ∫₀^π ½ x sin x dx = π/2; ∫₀^π ½ x² sin x dx = (π² − 4)/2 = 2.93480; Var = π²/4 − 2 = 0.46740.
- A1: 2/3, 1/2, 1/18; ∫₀¹ 2x dx = 1.
- A2: ∫₀^(π/2) cos x dx = 1; ∫₀^(π/2) x cos x dx = π/2 − 1 = 0.57080; ∫₀^(π/2) x² cos x dx = π²/4 − 2 = 0.46740; Var = π − 3 = 0.14159; crossed ∫₀^(π/2) x² cos² x dx = π(π² − 6)/48 = 0.25326, minus 0.32581 = −0.07254.
- Histogram (seed 1636): counts as above, sum 1,000.

## Memory aid check

- **"Sum becomes integral; P(x) becomes f(x) dx."** Meaning, as said in scene 8: each discrete formula for E and Var turns into the continuous one by replacing the sum with an integral over [a, b] and P(x) with f(x) dx. Assumptions checked: it applies to E(X), E(X²), Var(X) and the total ∫ f = 1 (all sums weighted by P(x)); it does not apply to the mode or median, which use the peak of f and F(x) = ½ (s06; the narration scopes it to "each discrete formula for E and the variance"); "f(x) dx" keeps the dx, which carries the strip width (scene 2), so f(x) alone is not a probability. It helps a new case: A1 and A2 are set up directly from it. Introduced after the generation (scenes 2 and 5).
- **Considered, not used:** "x f for the mean, x² f for the spread" (useful, but it is the key note itself).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): see the count line below.

**5,573 characters** (5,586 with the joining spaces), 14 scenes. Characters per scene (1 to 14): 486, 649, 525, 403, 493, 708, 809, 169, 84, 323, 109, 377, 363, 75. At 13.3 characters per second the speech is about 419 s; add about 16 s of settling for the beam (1, 3, 4), the strip splits (2), the brackets (6) and the app round trip (7), 20 s for two countdowns, 5 s of short holds (8, 10, 12, 13) and about 62 s more for the quiet notes (about 103 s of holds): **about 522 s**, inside the 5,500 to 6,800 band (73 characters above the floor) and under the 570 s cap. The first count was 4,965; Revision 1 added content, not padding: why weighting by x pulls the beam (s03 link), E as a long-run average (site card 03), the symmetry test of the formula, why no squared bracket is expanded (site card 04), the E(X²) > μ² check (site drill 4) and where the marks are (site card 06). Scene 7 is the longest; the density check must be complete before "But E of X needs". No trims are available without going below the band; if the voiced take runs over 570 s, root decides between scene 4's last sentence (−87) and scene 6's check (−124).

## Scene list and build ids

Lesson key `m-a12s08` (route math-a12-s08). Suggested explainer folder `src/explainer/lessons/math-a12-s08` and build folder `docs/production/claude-pm/lessons/m-a12s08` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, sum-to-integral, evaluate-mean, uniform-check, variance-generate, variance-and-sigma, beyond-the-course, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s07's last frame continues into scene 1 (same density and triangle); within 1 a clear change to x/8 (on "four"); 1 to 2 to 3 camera continue (same density and beam); 3 to 4 camera pull back; 4 to 5 clear change of the right column (x/8 stays); 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera pull back; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s08-learning-review.md`, `science_check` = `checks/m-a12s08-maths-check.md`.

## Assets

Have (after the s01 to s07, i06 and i12 builds): `BalancePoint` (with s07's density mode), `SpreadBrackets`, `ProbabilityBars`, `ClassHistogram`, `AreaFill`, `RiemannStrips`, `RefinementTable`, `ToolPanel`; shared `FunctionGraph`, `GraphLayer`, `IntegralNotation`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`.

New: `FormulaCrosswalk`; `RiemannStrips` `toBars`; `ToolPanel` input/output mode. No painted plate.

## Codex asset brief

**Coded parts (add to the next maths kit brief, with the s01 to s07 probability parts; same rules: exported through `kit.tsx`, pilot from this design's numbers, numerical checks, desktop and phone-landscape stills, silent motion sample). Every displayed value is formatted from the same data that sets the geometry.**

1. **`RiemannStrips` `toBars`** (scene 2). With `rule: 'midpoint'` on a density, `toBars` ({at}) collapses each strip into a narrow bar at its midpoint whose label is the strip's area (exact string from an author-supplied list, checked against the computed area within 1e-9), and hands the bars to `BalancePoint` (density mode accepts a bar set) so the beam balances at Σ x f(x)Δx; `fromBars` reverses it before a split. Checks: n = 4 on x/8 gives bars at 0.5, 1.5, 2.5, 3.5 with areas 1/16, 3/16, 5/16, 7/16 and balance 2.625; n = 8 gives 2.65625; n = 16 gives 2.6640625; areas add to 1 each time.
2. **`FormulaCrosswalk`** (scenes 2, 5, 8). A two-column table ("discrete" | "continuous") whose rows write in on cues, each continuous entry morphing from its discrete one: Σ → ∫ₐᵇ and P(x) → f(x) dx highlighted as they change (exact author strings; no maths computed). Props: `rows` ({discrete, continuous, at}[]), `highlightSwaps` (true), `compact` (for scene 8). Checks: fit at 44 px and 64 px for the four rows of this design; phone-landscape legibility.
3. **`ToolPanel` input/output mode** (scenes 7, 12). The unbranded panel from i12 with an input line that types an author string ("integrate x*(1/2)*sin(x) from 0 to pi") and an output line that returns exact and decimal strings after a short "computing" pause; no logo, no real product's layout or fonts; a fixed caption "online computational application". Outputs are author-supplied and checked by the build against a numerical integral of the supplied function (tolerance 1e-6). Checks: π/2 and 1.5708; (π² − 4)/2 and 2.9348; π/2 − 1 and 0.5708; π − 3 and 0.1416 (A2's variance line computes ∫ x² cos x dx − (π/2 − 1)²).
4. **`BalancePoint` density mode** (from s07; scenes 1, 3, 4, 7 here). Checks added: level at 3 (train), 8/3 (x/8) and π/2 (½ sin x); with a bar set from `toBars`, level at 2.625, 2.65625 and 2.6640625.

Existing parts used unchanged: `SpreadBrackets` (8/3 ± 2√2/3 on the x/8 axis), `ClassHistogram` (counts mode, the stored 1,000 fills in 4 mL classes; check the counts in author note h), `IntegralNotation` (timed labels "value x", "density f(x)").

No new painted plate.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the strip argument in scene 2: midpoint strips, strip area as the probability of the strip, Σ x f(x)Δx values 2.625, 2.656, 2.664, and "as the strips get thinner, the sum becomes an integral" (not "equals").
3. Confirm the scene 5 expansion with integrals, and that ∫ f = 1 and ∫ x f = μ are the reasons given.
4. Confirm that x sin x (and x cos x) is outside the Mathematics Advanced 2024 integration content (integration by parts is not an Advanced point), and that ½ sin x and cos x are valid densities on their intervals.
5. Confirm the `ToolPanel` shows no brand, product name or copied interface, and that the narration says to state that an application was used.
6. Confirm both attempt questions carry every demand and given, and that neither card shows a formula, an integral or the answer form.
7. Confirm the four syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the opening frame matches s07 scene 15 exactly, and the handoff (scene 13) shows no normal curve, notation, mean or σ.

## YouTube metadata (draft)

Title: Expected Value and Variance of Continuous Random Variables | Year 12 Maths Advanced

(Title length: 83 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson10.sa.html

A flat density balances in its middle, but where does a sloping one balance? Cut the density into thin strips and each strip acts like a value with probability f(x)Δx, so the discrete formula Σ xP(x) becomes the integral ∫ x f(x) dx. See the variance carry over in the same way, Var(X) = ∫ x² f(x) dx − μ², work out the mean, variance and standard deviation of a density by hand, check the uniform results (a + b)/2 and (b − a)²/12, and see what to do when the integral is beyond the course: set it up in full and evaluate it with an online computational application. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, random variables.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Generate the expression for the expected value of a continuous random variable, E(X) = μ = ∫ₐᵇ x f(x) dx, where the probability density function f(x) is defined on the interval [a, b]"
"Generate the expression for the variance of a continuous random variable, Var(X) = E(X²) − μ² = ∫ₐᵇ x² f(x) dx − μ², where the probability density function f(x) is defined on the interval [a, b]"
"Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a, b], that involve integration of functions within the scope of the Mathematics Advanced course"
"Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a, b], that involve integration of functions beyond the scope of the Mathematics Advanced course using an online computational application"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: The continuous uniform distribution (previous video); expected value and variance of discrete random variables; definite integrals. Next: The normal distribution.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. The beyond-course example (maths check).** ½ sin x on [0, π] is new (the site describes the method without an example). The maths check confirms integration by parts is outside the 2024 Advanced points; if root prefers a non-trigonometric case, x e^(−x) style densities need a normalising constant and a finite interval, which adds a step, so ½ sin x is recommended.
- **2. Uniform variance (learning review).** (b − a)²/12 is quoted with a train check, not derived (the site's problem 3 has the derivation). If the review wants it derived, it belongs in the strand practice video, not here (one idea per scene, and the length cap).
- **3. Syllabus quote forms.** This file quotes the crosswalk linear text exactly; the description uses typographic rendering (root decision 54). The codename `ms_s6_y12_evaluate_the_expected_value_and_the_vari` is the crosswalk's own id and is kept as given.
- **4. Spoken integrals (voice pilot).** "the integral from a to b of x f of x, dx" and "pi squared over four, minus two" are pilot items.
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s03, s05, s07 and i06 to i09; check that the strips-to-bars step generates ∫ x f(x) dx rather than asserting it; that the crosswalk table makes "the same idea" visible; that the variance carry-over names its two reasons; that the app scene keeps the set-up as the student's work; that the cards give nothing away), then the Codex maths check and error check.
- The strips collapsing into bars, the beam creeping to 8/3 and the app round trip carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s07's scene 15 (same designer); the handoff frame is s09's opening.
