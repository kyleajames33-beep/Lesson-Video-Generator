# Maths A12 S08: How do integration and digital tools calculate continuous moments? From Σ xP(x) to ∫ x f(x) dx, the variance integral and E(X²) − μ², and integrals beyond the course with an online computational application (design)

Status: Revision 4 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 3 (5 Nov 2026, brief 171 fixes). Not voiced (no `math-a12-s08/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s08.md`).

Narration 6,167 characters, 14 scene headings, about 549 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: eighth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 60), after s07 (the continuous uniform model) and before s09 (the normal model). Revision 4 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (a running playlist on shuffle, with song lengths as the random variable, and over-ear headphones as the plate); graphs, strips, beams, the application panel, tables and algebra stay coded. No people. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson10.sa.html` (Quantiles, Expectation and Variance), SHA256 `bb363c20ce881f9f2da10030a32abddca9c9bb5221f05ad4a1eb1f15817f1579`; this video uses cards 03 (expectation), 04 (variance and the uniform results), 06 (integrals beyond the course), problem 3 (the uniform derivation), traps 01 and drill 4. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded; Codex confirms them against the live site. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s08` ("How do integration and digital tools calculate continuous moments?", four syllabus actions, site source lesson 10, no coverage gaps).

Owner rules applied: new 2024 syllabus only, codenames and exact wording, no site module label; painted plates for real objects, coded graphs and algebra; no people, hands or faces; one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; causal conversational narration. Exact values in the algebra (8/3, 8/9, 4 − 32/π², π − 3), decimals only in grey readouts and application outputs; attempt cards give nothing away; every density stated with "0 elsewhere".

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci0b521caf`: "Generate the expression for the expected value of a continuous random variable, E(X)=μ=∫_{a}^(b)xf(x)dx , where the probability density function f(x) is defined on the interval [a,b]"
- `ci8a12d966`: "Generate the expression for the variance of a continuous random variable, Var(X)=E(X^(2))-μ^(2)=∫_{a}^(b)x^(2)f(x)dx-μ^(2) , where the probability density function f(x) is defined on the interval [a,b]"
- `ms_s6_y12_evaluate_the_expected_value_and_the_vari`: "Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a,b] , that involve integration of functions within the scope of the Mathematics Advanced course"
- `ci66c27065`: "Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a,b] , that involve integration of functions beyond the scope of the Mathematics Advanced course using an online computational application"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s07's handoff frame (the train's flat density on [1, 5] at height 1/4 with the violet balance triangle at t = 2 and "?"; `math-a12-s07.md` scene 15). Levels the beam at 3 by symmetry, then poses the anchor question (a running playlist on shuffle: how long is a song on average, and how many fit in a 40-minute run?) and builds the method on the site's f(x) = x/8 on [0, 4] (s06's cookie density, recalled in one sentence); generates E(X) = ∫ x f(x) dx by cutting the density into strips that act like discrete values with probabilities f(x)Δx (`ci0b521caf`), with strip sums 2.625, 2.656, 2.664 closing in; evaluates 8/3 (site card 03) and checks the uniform midpoint 3 (site problem 3); generates Var(X) = ∫ (x − μ)² f(x) dx = ∫ x² f(x) dx − μ² by the same weighting and the same expansion steps as s03 (`ci8a12d966`); evaluates 8/9 and σ = 2√2/3 (site card 04) and quotes the uniform variance (b − a)²/12 with the train check 4/3 (`ms_s6_...`); returns to the playlist with the song-length density f(x) = (π/8) sin(π(x − 2)/4) on [2, 6], where x f(x) is beyond the course, and evaluates E and Var with an online computational application, then watches 60 shuffled songs' running average settle near 4 minutes (`ci66c27065`). Stops at continuous moments. Not taught: the normal model (s09; the handoff asks a question only); E(aX + b) and Var(aX + b); the uniform variance derivation in full.

## Decisions

### Revision 4 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a running playlist on shuffle (painted headphones, coded playlist, live).** X is the length of a randomly shuffled song in minutes. The everyday question "how long is a song on average, so how many fit in a 40-minute run?" is exactly E(X) as a long-run average, and the song-length density needs a tool (the syllabus point `ci66c27065`). The playlist is a music context, distinct from d04's guitar octaves (pitch and logs); no playlist, headphones or song length is used in `checks/root-decisions-maths-redesign.md`. A ride-share wait was rejected because it repeats s07's waiting time straight after the bus.
- **The song-length density (new, not a site example).** f(x) = (π/8) sin(π(x − 2)/4) for 2 ≤ x ≤ 6, 0 elsewhere: a symmetric hump from 2 to 6 minutes (a model, said "suppose"). The density check is within the course (∫ sin of a linear function); E(X) and E(X²) need integration by parts, so the application evaluates them: E(X) = 4 (matching the symmetry), E(X²) = 20 − 32/π² ≈ 16.758, Var(X) = 4 − 32/π² ≈ 0.758, σ ≈ 0.870 min ≈ 52 s. It replaces Revision 3's ½ sin x on [0, π] (the same shape, moved and stretched to minutes), so the technique case now answers the anchor's question.
- **The cookie recall (one sentence, root to confirm).** x/8 on [0, 4] is s06's cookie density, and s06's grey chip promised "the mean is a third kind of middle: a later video". Scene 3 pays that off in one sentence with s06's cookie badge (200 px, reused plate `ma12-cookie-v1`): mean 8/3 ≈ 2.67 cm, just inside the median 2.83 cm. The cookie is a recall, not this video's anchor (open decision 7).
- **Idealising assumptions (author notes, not learner copy).** Song lengths follow the stated density and shuffle picks songs independently; the 60 shuffled songs are one stored random sample (author note k), so the running average is illustrative; "about ten songs" is 40 ÷ 4 on average.
- **Join with s07 (fixed).** Scene 1 opens on s07 Revision 3's final frame exactly (the train's density, the violet triangle at t = 2, "?").
- **Join with s09 (changed with s09 Revision 4).** Scene 13 now ends on 1,000 simulated bags of chips (target 175 g), with the painted chip bag small, instead of bottle fills; s09 Revision 4 opens on it. Both files change together.
- **Simulations (standard item 3).**
  1. `RiemannStrips` `toBars` with `BalancePoint` (scenes 2 and 3): strips collapse into amber bars and the violet beam slides and levels as n goes 4, 8, 16, with a live readout of Σ x f(x)Δx (2.625, 2.656, 2.664) and the bars' total "= 1".
  2. `ToolPanel` input/output (scene 7): the set-up types in and the outputs return.
  3. `RunningMeanTrace` (scene 7, decision 45): 60 stored shuffled songs play one after another as blue bars on a playlist strip (each bar's length its song length), while a blue running-average trace settles towards a dashed violet line at 4, live readouts "songs played: n" and "average: m:ss" (52 px); after 10 songs the total reads "40.1 min".
- **Colour roles (fixed for the whole video, continuing s03 to s07).**
  - **densities: teal** (`MATH_TEAL`);
  - **μ, the beam, the fulcrum and the balance readout: violet** (`MATH_GRADIENT`, s03's role); **σ brackets: violet dashed**;
  - **strip probabilities and bars: amber** (`MATH_AMBER`);
  - **simulated data (songs and the running average): blue** (`MATH_BLUE`);
  - **the application panel: neutral grey frame, ink text**;
  - **answer: green**; **mistake: red**, crossed slips only; ink algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; application text 40 px; nothing below 26 px; text above y = 950. The headphones plate is at least 360 px wide when it carries the idea. `HandTag` (at most two live): "how long, on average?", "area ≈ f(x)Δx = probability", "further out, heavier: more pull", "taller side pulls", "formula = symmetry", "no bracket to expand", "a typical distance", "not a rule in this course", "say you used it", "settles near 4".
- **Stage changes (standard item 2):** the train's beam levelling, then the headphones and playlist (1); x/8 with its beam and strips turning into bars (2); the g01 board for 8/3 with the cookie badge (3); the train check (4); the crosswalk table (5); the g01 board for the variance and σ brackets (6); the playlist density with the application and the running-average simulation (7); the framed card (8); question cards with pictures (9 to 12); the chip-bag histogram (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 3: task strip "Find E(X) for f(x) = x/8, 0 ≤ x ≤ 4.", equation strip "E(X) = ∫ₐᵇ x f(x) dx", givens card, rows at 52 px, green framed "E(X) = 8/3", red slip "E(X) = 2, the middle of [0, 4]" crossed silently with the tag "only for a flat density" (root decision 5). Scene 6: green framed "Var(X) = 8/9" and "σ = 2√2/3", red slip "Var = 8 − 8/3" crossed silently, tag "subtract μ², not μ". Scene 7: green framed "E(X) = 4 min" and "σ ≈ 0.87 min", red slip "σ = 0.76" crossed silently, tag "that's Var; σ = √Var". Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Sum becomes integral; P(x) becomes f(x) dx." with the key "E(X) = ∫ x f(x) dx; Var(X) = ∫ x² f(x) dx − μ²" and a headphones badge with the levelled beam at 4.
- **Visual surprise (standard item 9).** The strips collapse into bars and the beam creeps right to settle at 8/3, not 2 (2, 3); the application's 4 lands exactly on the dashed symmetry line, and the shuffled songs' running average wobbles, then settles onto it (7).
- **Question cards (full text and a picture).** A1: the worded question with empty axes x −0.2 to 1.2, y 0 to 2.2, labelled "f(x)" (no line). A2: the worded question with empty axes x 0 to π/2 labelled "f(x)" (no curve) and a blank grey application panel with an empty input line.
- **Author note k (stored songs).** 60 song lengths from Python 3.14 `random.Random(808)` by the inverse CDF F(x) = (1 − cos(π(x − 2)/4))/2; first ten 3.65, 4.39, 4.58, 3.85, 5.36, 3.29, 3.61, 3.97, 3.32, 4.09 min (total 40.11 min); running averages after 1, 5, 10, 20, 40, 60 songs: 3.650, 4.365, 4.011, 3.803, 4.064, 4.005. Stored as data.
- **Author note l (handoff histogram).** 1,000 simulated bag masses from Python 3.14 `random.Random(909)`, `gauss(175, 4)`; 2 g classes from 161 to 189 g with counts 3, 3, 13, 37, 91, 157, 176, 190, 150, 115, 44, 16, 3, 2 (sum 1,000); sample mean 175.16 g, sample sd 3.98 g; min 162.4, max 187.4; 94 below 170 and 119 above 180. Replaces author note h (the bottle fills, which move to s12 as worked numbers). Stored as data.
- **Narration (not voiced).** Scene 1 brings in the playlist; scene 3 adds the cookie recall; scene 7 is rewritten for the song-length density, the application and the running average; scene 13 hands off to the chip bags. Scenes 2, 4 to 6 and 8 to 12 keep their Revision 3 text; scene 8 gains a cue word.

### Kept from Revisions 1 to 3

- **Learner question kept (outline).** "How do integration and digital tools calculate continuous moments?" The answer, built in order: a flat density balances in the middle, but a sloping one needs a calculation (1); a thin strip acts like a discrete value with probability f(x)Δx, so Σ xP(x) becomes Σ x f(x)Δx and, as the strips thin, ∫ x f(x) dx (2); evaluating it gives the balance point (3), and it agrees with symmetry for the uniform (4); variance is still the expected squared distance, and the s03 expansion carries over because ∫ f = 1 and ∫ x f = μ (5); evaluating it gives a spread in X's units (6); when x f(x) is beyond the course, set up the same integrals and let an online computational application evaluate them (7).
- **Hook (continuity with s03 and s07).** s07's beam at t = 2 tilts towards 5; it slides and levels at 3 (symmetry, no integral). Then x/8 on [0, 4] replaces it: the beam tilts right of 2, with "?". The site's hook (three middles) is s06's territory and is not reused.
- **Generating ∫ x f(x) dx (`ci0b521caf`, "generate").** `RiemannStrips` (midpoint rule) on x/8 with n = 4, 8, 16 strips. Each strip is redrawn as a bar at its midpoint with weight f(x)Δx (the strip's area, its probability), so the strips become a discrete distribution (`ProbabilityBars` from the strips). Its balance point Σ x f(x)Δx is 21/8 = 2.625, 85/32 ≈ 2.656, 341/128 ≈ 2.664 (grey `RefinementTable`), closing in on 8/3. A crosswalk table writes the switch row by row: Σ → ∫, P(x) → f(x) dx (`FormulaCrosswalk`, new). The strip probabilities add to exactly 1 at every n (midpoint rule on a linear f), which the table shows in grey.
- **Evaluating E (site card 03, numbers unchanged).** ∫₀⁴ x · x/8 dx = (1/8)[x³/3]₀⁴ = 64/24 = 8/3 ≈ 2.67 (grey). The beam levels at 8/3, right of 2, "pulled by the taller part on the right". The median 2√2 is not mentioned (s06 compared the middles; one idea here).
- **The uniform check (site card 04 and problem 3).** ∫₁⁵ x/4 dx = [x²/8]₁⁵ = 24/8 = 3, the beam's answer. The general (a + b)/2 is stated once with "the midpoint" (site's quotable result), not derived.
- **Generating the variance (`ci8a12d966`, "generate").** Same weighting: Var(X) = ∫ (x − μ)² f(x) dx, the expected squared distance (s03's Var(X) = E((X − μ)²) is recalled, not re-taught). The quick form: the s03 expansion with each sum now an integral, ∫ x² f − 2μ ∫ x f + μ² ∫ f = E(X²) − 2μ² + μ² = E(X²) − μ². The `FormulaCrosswalk` adds the two variance rows. The narration names why it carries over: ∫ f = 1 and ∫ x f = μ play the parts of ΣP(x) = 1 and ΣxP(x) = μ.
- **Evaluating Var (site card 04, numbers unchanged).** E(X²) = ∫₀⁴ x³/8 dx = (1/8)[x⁴/4]₀⁴ = 8; Var = 8 − 64/9 = 8/9; σ = √(8/9) = 2√2/3 ≈ 0.943 (grey). `SpreadBrackets` mark 8/3 ± 2√2/3 (≈ 1.72 to 3.61, grey) on the axis with "a typical distance". No fraction-inside claim (s03 rule). Then one line: the same work for a uniform gives (b − a)²/12; for the train, 16/12 = 4/3 (checked: E(X²) = 31/3, 31/3 − 9 = 4/3).
- **Beyond the course (`ci66c27065`; Revision 4).** The song density f(x) = (π/8) sin(π(x − 2)/4) on [2, 6] (new example; the site's card 06 describes the method but gives no worked case). The density checks are within the course: f ≥ 0 on [2, 6] and ∫₂⁶ f = 1. E(X) needs ∫ x sin(...) dx, which needs integration by parts (not in Mathematics Advanced). The set-up is written in full, then entered in an unbranded `ToolPanel`: E(X) = 4, E(X²) = 20 − 32/π² ≈ 16.758, Var = 4 − 32/π² ≈ 0.758, σ ≈ 0.87 min. The symmetry check (the hump is symmetric about 4) is spoken. "Say that you used it" (site card 06). Revision 3's ½ sin x on [0, π] is withdrawn (author notes e and j's ½ sin x window no longer used).
- **Attempts (original).** (A1, within the course) f(x) = 2x on 0 ≤ x ≤ 1, 0 elsewhere: E(X) = 2/3, E(X²) = 1/2, Var(X) = 1/18. Crossed: "E(X) = ∫₀¹ 2x dx = 1" (integrated f, not x f; site trap 01). (A2, beyond the course) f(x) = cos x on 0 ≤ x ≤ π/2, 0 elsewhere: write the integrals you would enter in an online computational application for E(X) and Var(X). E(X) = ∫₀^(π/2) x cos x dx; Var(X) = ∫₀^(π/2) x² cos x dx − μ². App: μ = π/2 − 1 ≈ 0.571, Var = π − 3 ≈ 0.142. Crossed: "∫₀^(π/2) (x cos x)² dx − μ²" (squared the whole integrand; it even gives a negative "variance", ≈ −0.073). Neither card shows a formula or the answer form.
- **Mistake scene:** none separate. "E(X) = ∫ f dx" (feedback 1 crossed); "the formula needs a new derivation" (5, the expansion carries over); "an app answer needs no set-up" (7); "square the whole integrand" (feedback 2 crossed); "a negative variance is possible" (feedback 2: it is the warning sign, site drill 4's idea).
- **Memory aid.** "Sum becomes integral; P(x) becomes f(x) dx." See "Memory aid check".
- **Handoff (outline next: s09, "When is a normal model useful, and what does its shape mean?").** Scene 13: a histogram of 1,000 simulated bags of chips (author note l), bunched in a bell around 175 g, with the chip-bag plate small, "?" and chip "Next: when is a normal model useful?". No normal curve, notation, mean or σ is shown. This is s09 Revision 4's opening frame.
- **Site sources used:** lesson 10 cards 03 (E(X) = ∫ x f(x) dx, the discrete/continuous table, x/8 gives 8/3, balance point and long-run average), 04 (Var formulas, E(X²) = 8, Var = 8/9, σ = 2√2/3, the uniform results), 06 (beyond the course: set up, evaluate with an online computational application, state that you did; the marks are in the set-up), problem 3 (uniform E and Var by integration; only the results are used), trap 01 (∫ f gives 1, not the mean), drill 4 (a negative variance means an error). Not used: cards 02 (quantiles, s06), problems 1 and 2 (3x²/8: 3/2 and 0.15; the attempts are original), the hook and traps 02 to 04 (s06), Q1 to Q3.
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Hook: "The mean, the median and the mode are three different answers to 'where is the middle'. For a symmetric distribution they coincide." False without a single peak: a symmetric density with two peaks has its modes away from the centre, and the uniform has no unique mode (lesson 9 card 06 says so). Suggested: "For a symmetric distribution with a single peak, they coincide." (2) Trap 04: "They agree only for a symmetric density. For any skewed distribution they differ." Too strong: some non-symmetric densities have mean equal to median (for example, a suitable mixture of a uniform piece and a triangle). Suggested: "They agree for a symmetric density; for a skewed density they usually differ, and questions are built on that gap." (3) Card 02 and the hook contain em dashes, against the house style (note). (4) Card 06 lists "Polynomial densities, and simple exponential ones" as within the course; trigonometric densities such as ½ sin x are also within the course for ∫ f, while their x f(x) integrals are not (wording suggestion, not an error).
- **Cause chain taught, in order:** (1) a flat density balances in the middle; a sloping one leans towards its taller side (1); (2) each thin strip acts like a value with probability f(x)Δx, so the discrete balance-point sum becomes ∫ x f(x) dx as the strips thin (2); (3) evaluating it gives 8/3, right of the middle (3); (4) the formula agrees with symmetry for a uniform (4); (5) variance is the same weighting of squared distances, and the quick form carries over because ∫ f = 1 and ∫ x f = μ (5); (6) the numbers for x/8 and the uniform result (6); (7) when the integral needs a technique beyond the course, the set-up is the same and an app evaluates it (7); (8) memory aid (8).
- **Entry knowledge (draft route `entryKnowledge`):** s03 (E(X) = ΣxP(x) as balance point and long-run average; Var(X) = E((X − μ)²) = E(X²) − μ²; σ), s05 (density, probability as area, ∫ f = 1), s07 (uniform 1/(b − a)), i06 and i07 (strips, definite integral as a limit of sums), i09 (evaluating definite integrals), i05 (∫ sin x dx = −cos x + C). Years 7 to 10: none beyond algebra.
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s08`; playlistOrder 60; mainLearnerQuestion as above; syllabusActionIds `ci0b521caf`, `ci8a12d966`, `ms_s6_y12_evaluate_the_expected_value_and_the_vari`, `ci66c27065`; prerequisiteVideos `math-a12-s03`, `math-a12-s05`, `math-a12-s07`; sourceLessons `random-variables/lesson10.sa.html` (SHA above); startBoundary "From s07's flat train density with a balance triangle: where does a density balance?"; stopBoundary "Generate ∫ x f(x) dx from strips; evaluate x/8 (8/3) and check the uniform midpoint; generate ∫ x² f(x) dx − μ² from s03's expansion; evaluate 8/9 and σ; quote (b − a)²/12; set up and evaluate a beyond-course case with an online computational application. No normal model, no linear changes of variable."; nextHandoff "math-a12-s09: why do chip-bag masses pile up in a bell? (a histogram with ?)".
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
Handoff: math-a12-s09: a histogram of 1,000 simulated chip bags in a bell around 175 g, "?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): densities teal; μ, beam and fulcrum violet; σ brackets violet dashed; strip bars amber; simulated songs and the running average blue; application panel grey; answer green; mistake red; ink algebra. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; nothing below 26 px.

### 1. hook (where does a density balance?)
> Last video ended with this question. The train's waiting-time density is flat from one to five. Where does it balance? Right in the middle, at **three**, because the two halves are mirror images. But most densities aren't flat. Think of a running playlist on **shuffle**. Song lengths run from about two to six minutes. How long is a song on average, and so how many songs fit in a forty-minute run? We'll build the method on a simpler density first: f of x equals x over eight, from zero to **four**. It's taller on the right, so it should balance somewhere right of two. Where exactly? And how spread out is it? In a discrete model we added up values times probabilities. Here there's no list of values to **add**.

Visual: opens on s07 Revision 3's last frame exactly (the train's density 1/4 on [1, 5], the violet balance triangle at t = 2 with the beam tilting towards 5, "?", chip "Next: where does a density balance?"). Heading writes on: "Expected value and variance of a continuous random variable". On the third sentence the triangle slides right and the beam levels on "three", readout "balance point: 3" (52 px); a dashed mirror line at 3 flashes. On "shuffle" the train shrinks to a 280 px card at the top left and the painted headphones (`ma12-headphones-v1`, 420 px wide) land at the left beside a coded playlist strip: twelve blue song bars of different lengths stacked as rows, each labelled with a play symbol and its length in minutes and seconds (40 px), hand tag "how long, on average?" and a chip "40-minute run: how many songs?". On "four" a clear change: f(x) = x/8 on [0, 4] (teal, 0 elsewhere; 1,000 × 520 px), the violet beam under it with the triangle at 2, tilting right; "?" beside the triangle; the headphones stay small (200 px) at the top right. On "add" a grey chip "discrete: E(X) = Σ x P(x)" (s03).

### 2. from a sum to an integral
> So let's make a list. Cut the interval into four strips. Each strip's area is about f of x times its width, delta x. That's the probability that X lands in the **strip**. So treat each strip like a single value at its middle, with that probability. Values further out, and with more probability, pull harder on the beam. Now it's a discrete model, and its balance point is the sum of x times f of x delta x. That's two point six two **five**. With eight strips, it's two point six five six. With sixteen, two point six six **four**. As the strips get thinner, the sum becomes an integral. So the expected value is the integral from a to b of x times f of x, **dx**.

Visual: camera continue (x/8 with its beam). `RiemannStrips` (midpoint, n = 4) draw in pale amber; on "strip" one strip is highlighted with amber brackets "width Δx" and "height f(x)", hand tag "area ≈ f(x)Δx = probability". On the next sentence each strip collapses into an amber bar at its midpoint (0.5, 1.5, 2.5, 3.5) with labels 1/16, 3/16, 5/16, 7/16 (`toBars`, 40 px); the beam tilts and slides, hand tag "further out, heavier: more pull". Live readout (52 px) "Σ x f(x)Δx = 2.625" as the beam levels on "five", with a grey "bars add to 1". The bars return to strips and split: n = 8 (readout 2.656), on "four" n = 16 (readout 2.664), the beam creeping right each time, each value logged in a grey `RefinementTable`. On "integral" the right column's `FormulaCrosswalk` writes two rows: "discrete: Σ P(x) = 1 | continuous: ∫ₐᵇ f(x) dx = 1" and "discrete: E(X) = Σ x P(x) | continuous: E(X) = ∫ₐᵇ x f(x) dx", with "Σ → ∫" and "P(x) → f(x) dx" arrows. On "dx" the green framed "E(X) = μ = ∫ₐᵇ x f(x) dx" (`IntegralNotation`, labels "value x" and "density f(x)").

### 3. working it out for x over eight
> Let's evaluate it. Multiply x by x over eight, and you get x squared over eight. Its integral from zero to four is one eighth of x cubed over three, from zero to four. That's sixty-four over twenty-four, which is eight **thirds**, about two point six seven. The beam levels there, right of the middle, pulled over by the taller part of the density. And the strip sums were closing in on exactly this **number**. You've met this density before. It's the cookie from two videos ago, so the average chip sits about two point six seven centimetres from the centre, a third kind of middle, just inside the median of two point eight **three**. Like a discrete mean, it's also the long-run average. Take many values of X, and their average settles near eight thirds.

Visual: clear change to the g01 board (strips fade; the density and beam stay at the left, 1,000 × 520 px). Task strip (44 px): "Find E(X) for f(x) = x/8, 0 ≤ x ≤ 4 (0 elsewhere)." Equation strip: "E(X) = ∫ₐᵇ x f(x) dx". Rows (52 px current): "E(X) = ∫₀⁴ x · x/8 dx = ∫₀⁴ x²/8 dx"; "= (1/8)[x³/3]₀⁴ = 64/24"; on "thirds" the green framed "E(X) = 8/3" with a grey readout "≈ 2.67". The beam slides from 2.664 to 8/3 and levels, violet μ marker "8/3"; the right half of the area tints slightly darker, hand tag "taller side pulls". A red slip "E(X) = 2, the middle of [0, 4]" writes and is crossed silently, tag "only for a flat density". On "number" the grey refinement rows (2.625, 2.656, 2.664) line up with an arrow to "8/3 ≈ 2.667". On "You've met this density" s06's cookie badge (`ma12-cookie-v1`, 200 px) appears at the top right with three markers on a small x axis: the violet mean "2.67", an amber median line "2.83" and a blue mode triangle "4"; on "three" the mean and median markers pulse side by side. On the long-run sentences a small grey chip "long-run average of X" beside the μ marker.

### 4. a check on the uniform
> Does this agree with symmetry? For the train, f is a quarter from one to five. So we integrate x over four, which gives x squared over eight, from one to five. That's twenty-five minus one, over eight, which is three, the **middle**. The integral and the symmetry agree, so the formula passes a test we can check by eye. For any uniform distribution from a to b, the mean is a plus b over two, the **midpoint**.

Visual: camera pull back: the x/8 board shrinks to the top left (600 px); the train's flat density returns at the right (800 × 420 px) with its level violet beam at 3. Rows (52 px): "E(X) = ∫₁⁵ x · 1/4 dx = [x²/8]₁⁵ = (25 − 1)/8 = 3"; on "middle" a tick linking it to the beam; hand tag "formula = symmetry". On "midpoint" a grey line "uniform on [a, b]: E(X) = (a + b)/2".

### 5. the variance, the same way
> Now, spread. The variance is still the expected squared distance from mu. So we weight each squared distance, x minus mu, squared, by f of x dx, and integrate. And the quicker form carries over too. Expanding the square works exactly as it did for a discrete model. The integral of f is one, and the integral of x f is mu, just like the sums were. That means you don't need to expand a squared bracket inside the integral. So the variance is the integral of x squared f of x, minus mu **squared**.

Visual: clear change: x/8 and its level beam at 8/3 stay on the left (900 × 480 px); `FormulaCrosswalk` fills the right column (40 px rows) and adds rows: "Var(X) = Σ (x − μ)² P(x) | Var(X) = ∫ₐᵇ (x − μ)² f(x) dx", then "Σ x² P(x) − μ² | ∫ₐᵇ x² f(x) dx − μ²". On the first sentences violet dashed arms run from 8/3 to a few strip midpoints, each squaring into a pale violet square (s03's picture). On the expansion sentence one row (52 px): "∫ (x − μ)² f dx = ∫ x² f dx − 2μ ∫ x f dx + μ² ∫ f dx"; "∫ x f dx" ringed with tag "= μ" and "∫ f dx" ringed with tag "= 1" (s03's two ringed sums in a grey chip beside them); hand tag "no bracket to expand". On "squared" row "= E(X²) − 2μ² + μ²", green framed "Var(X) = ∫ₐᵇ x² f(x) dx − μ²", with "E(X²) = ∫ₐᵇ x² f(x) dx" in a grey line.

### 6. working out the variance and σ
> For x over eight, E of X squared, the average of the squared values, is the integral of x cubed over eight, from zero to four. That's one eighth of x to the fourth over four, or two hundred and fifty-six over thirty-two, which is **eight**. Subtract mu squared, sixty-four ninths, and the variance is eight **ninths**. Here's a quick check. E of X squared, eight, must be bigger than mu squared, about seven point one, or the variance would be negative. So sigma is the square root of eight ninths, about zero point nine **four**. That's a typical distance from eight thirds. For a uniform from a to b, the same steps give b minus a, squared, over twelve. For the train, that's sixteen over twelve, which is four **thirds**.

Visual: clear change to the g01 board. Task strip: "Find Var(X) and σ for f(x) = x/8, 0 ≤ x ≤ 4." Givens card: "f(x) = x/8 on [0, 4]", "μ = 8/3" (carried from scene 3). Left: x/8 with the violet μ marker (900 × 480 px). Rows (52 px): "E(X²) = ∫₀⁴ x² · x/8 dx = (1/8)[x⁴/4]₀⁴ = 256/32"; on "eight" green framed "E(X²) = 8". On "ninths" "Var(X) = 8 − (8/3)² = 8 − 64/9 = 8/9", green framed; a red slip "Var = 8 − 8/3" writes and is crossed silently, tag "subtract μ², not μ". On the check sentence a grey row "E(X²) = 8 > μ² = 64/9 ≈ 7.1 ✓". On "four" green framed "σ = √(8/9) = 2√2/3" with grey "≈ 0.94"; violet dashed `SpreadBrackets` on the axis from 8/3 − σ to 8/3 + σ (grey ends "≈ 1.72", "≈ 3.61"), hand tag "a typical distance". On the uniform sentences a grey line "uniform on [a, b]: Var(X) = (b − a)²/12"; on "thirds" row "train: (5 − 1)²/12 = 16/12 = 4/3" with a grey check "∫₁⁵ x²/4 dx − 3² = 31/3 − 9 = 4/3".

### 7. back to the playlist: when the integral is beyond the course
> Now the playlist. Suppose song lengths, X minutes, have density pi over eight, times sin of pi times x minus two, over four, from two to six. It is a density. It's never negative there, and its integral from two to six is **one**. But E of X needs the integral of x times that sine. No rule in this course integrates x times a sine **function**. So write the set-up in full, with its limits, and use an online computational application. Then say that you used one. The app gives four minutes, which matches the symmetry of the **curve**. For the variance, set up the integral of x squared f of x, minus mu squared. The app gives about zero point seven six, so sigma is about zero point eight seven minutes, roughly fifty-two **seconds**. Shuffle sixty songs, and their running average settles near **four**. So a forty-minute run fits about ten songs, on average. Show the limits, x f of x or x squared f of x, the result, and the tool you used.

Visual: clear change. The headphones (360 px) return at the top left with the playlist strip. Graph: the song density f(x) = (π/8) sin(π(x − 2)/4) on [2, 6] (teal, 0 elsewhere; x 1 to 7, ticks every minute; 1,000 × 460 px). Task strip: "Find E(X) and Var(X) for the song lengths, 2 ≤ x ≤ 6." Givens card: "f(x) = (π/8) sin(π(x − 2)/4) for 2 ≤ x ≤ 6, 0 elsewhere". Right column, "density check" rows: "f(x) ≥ 0 on [2, 6]"; on "one" "∫₂⁶ f(x) dx = −½[cos(π(x − 2)/4)]₂⁶ = −½(−1 − 1) = 1 ✓". On "function" the set-up "E(X) = ∫₂⁶ x · (π/8) sin(π(x − 2)/4) dx" writes, and "x sin(...)" gets the hand tag "not a rule in this course". On the next sentences `ToolPanel` (unbranded, input/output mode, 40 px) slides in: the set-up types as "integrate x*(pi/8)*sin(pi*(x-2)/4) from 2 to 6"; on "curve" the output returns "4"; the violet beam under the curve levels at 4 and a dashed symmetry line flashes there; hand tag "say you used it", grey chip "write: evaluated using an online computational application". On the variance sentence the second input "integrate x^2*(pi/8)*sin(pi*(x-2)/4) from 2 to 6" returns "20 − 32/π² ≈ 16.758"; row "Var(X) = 16.758 − 4² ≈ 0.758" (grey exact "4 − 32/π²"); on "seconds" green framed "E(X) = 4 min, σ ≈ 0.87 min ≈ 52 s"; a red slip "σ = 0.76" writes and is crossed silently, tag "that's Var; σ = √Var". On "Shuffle" `RunningMeanTrace` takes the lower half: 60 stored songs (author note k) play one after another as blue bars filling a playlist strip, live readouts "songs played: n" and "average: m:ss" (52 px); the blue trace wobbles (3:39 after one song, 4:22 after five) and settles towards the dashed violet line at 4; after ten songs a grey readout "10 songs: 40.1 min". On "four" (last) the trace sits on the line, hand tag "settles near 4", and a chip "40 min ÷ 4 min ≈ 10 songs". A tag across the bottom: "show: the limits, x f(x) or x² f(x), − μ², the result and the tool used".

### 8. memory aid
> Here's a way to remember the switch. Sum becomes integral, and P of x becomes f of x dx. That turns each discrete formula for E and the variance into its continuous **one**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line in the hand font, 56 px: "Sum becomes integral; P(x) becomes f(x) dx." with the Σ and P(x) morphing into ∫ and f(x) dx. Key, 40 px (on "one"): "E(X) = ∫ₐᵇ x f(x) dx; Var(X) = ∫ₐᵇ x² f(x) dx − μ²". Badge at the left: the headphones (220 px) above a small song density with its violet beam level at 4. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find E of X and the variance of X for this density. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X has probability density function f(x) = 2x for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find E(X) and Var(X)." Picture slot: empty axes x −0.2 to 1.2, y 0 to 2.2, labelled "f(x)" (no line). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> E of X is the integral of x times two x, which is two x squared. From zero to one, that's two **thirds**. E of X squared is the integral of two x cubed, which is a **half**. So the variance is a half minus four ninths, which is one **eighteenth**. An expected value of one is wrong. That integrates f by itself, which always gives **one**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "f(x) = 2x", "0 ≤ x ≤ 1". "f(x) = 2x" and "0 ≤ x ≤ 1" underlined as used; the card's axes draw the teal line and a violet beam levelling at 2/3. On "thirds" row "E(X) = ∫₀¹ x · 2x dx = [2x³/3]₀¹ = 2/3" (52 px). On "half" row "E(X²) = ∫₀¹ x² · 2x dx = [x⁴/2]₀¹ = 1/2". On "eighteenth" green framed "Var(X) = 1/2 − (2/3)² = 1/2 − 4/9 = 1/18". On "one" a red slip "E(X) = ∫₀¹ 2x dx = 1" writes and is crossed (caption "that's the total area, always 1"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Write the integrals you would enter into an online computational application. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X has probability density function f(x) = cos x for 0 ≤ x ≤ π/2, and f(x) = 0 elsewhere. Write down the integrals you would evaluate, using an online computational application, to find E(X) and Var(X)." Picture slot: empty axes x 0 to π/2 labelled "f(x)" (no curve) and a blank grey application panel with an empty input line. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> E of X is the integral from zero to pi over two of x cos x, **dx**. The variance is the integral of x squared cos x over the same limits, minus mu **squared**. The app gives mu as pi over two minus one, and the variance as pi minus three, about zero point one four **two**. Squaring the whole integrand, x cos x, is wrong. Only x is squared, and that set-up even gives a negative **variance**.

Visual: the card shrinks to the top. `GivensStrip`: "f(x) = cos x", "0 ≤ x ≤ π/2", "application". "f(x) = cos x" and "0 ≤ x ≤ π/2" underlined. On "dx" row "E(X) = ∫₀^(π/2) x cos x dx" (52 px). On "squared" row "Var(X) = ∫₀^(π/2) x² cos x dx − μ²". On "two" the card's panel shows "π/2 − 1 ≈ 0.571" and "π − 3 ≈ 0.142", green framed "μ = π/2 − 1, Var(X) = π − 3". On "variance" a red slip "∫₀^(π/2) (x cos x)² dx − μ²" writes and is crossed (caption "square x only; this gives ≈ −0.073 < 0"). Hold about 1 s.

### 13. handoff
> So the expected value is the integral of x f of x, and the variance is the integral of x squared f, minus mu squared, by hand or with an app. Every density so far came with a formula on an interval. Next, a new question. Here are a thousand simulated bags of chips, each filled towards one hundred and seventy-five grams. They pile up in a bell around the **target**. Why that shape? And when can we model it?

Visual: the framed E and Var formulas show small at the top, then fade on "Next". Board clears to a blue histogram (`ClassHistogram`, counts mode, 1,100 × 560 px) of the 1,000 stored simulated bag masses (author note l), grey tag "simulated: 1,000 bags" (the same tag s09 keeps at its opening): x "mass (g)" 159 to 191, classes of 2 g from 161 to 189, counts 3, 3, 13, 37, 91, 157, 176, 190, 150, 115, 44, 16, 3, 2. The painted chip bag (`ma12-chip-bag-v1`, s09's plate, 260 px tall) stands at the top right. On "target" a dashed grey line at 175 g, tag "target 175 g". A "?" above the peak. Chip "Next: when is a normal model useful?". No curve, notation, mean or σ is shown. Hold about 2 s. This is s09's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- E(X) = μ = ∫ₐᵇ x f(x) dx: the balance point.
- Not ∫ f(x) dx: that is always 1.
- Var(X) = ∫ₐᵇ x² f(x) dx − μ²; σ = √Var(X).
- Uniform: E(X) = (a + b)/2, Var(X) = (b − a)²/12.
- Beyond the course: write the set-up, use an app, say so.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Sum becomes integral; P(x) becomes f(x) dx.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 13's frame exactly (the 1,000-bag histogram with its "simulated: 1,000 bags" tag, the dashed target line at 175 g, the chip bag, "?" and chip "Next: when is a normal model useful?"). This is the final frame and s09's opening frame.

## Teaching checks

- **Does it explain causes?** Why the uniform balances at 3: mirror halves (1). Why ∫ x f(x) dx: each strip is a value with probability f(x)Δx, and the discrete sum becomes the integral as strips thin (2). Why 8/3 is right of 2: the taller side pulls (3). Why the quick variance form still works: ∫ f = 1 and ∫ x f = μ play the roles of the sums (5). Why an app: x sin x needs a technique outside the course, but the set-up is the same (7). Why the crossed A2 set-up fails: it squares f as well, and gives a negative "variance" (12).
- **Misconceptions addressed:** "E(X) = ∫ f dx" (feedback 1 crossed); "continuous moments need new ideas" (2, 5: same ideas, sum to integral); "an app answer needs no working" (7: the set-up is the mark); "square the whole integrand" (feedback 2 crossed); "a negative variance is fine" (12).
- **One idea at a time:** one balance question (1), one generation (2), one evaluation (3), one check (4), one generation (5), one evaluation with one uniform result (6), one beyond-course case (7). Only the needed earlier results stay bright: μ = 8/3 in 5 and 6.
- **Video makes it easier:** the student watches strips become weighted bars whose balance point creeps towards 8/3 (2, 3), sees the beam level at 3, 8/3 and 4, sees the discrete and continuous formulas side by side change one symbol at a time (2, 5), sees the set-up go into an app and the answer come back (7), and watches shuffled songs' running average settle on the app's answer (7).
- **Visual standard, item by item:** 1 the painted headphones and playlist by about 20 s, returning in 7 and 8; 2 a new stage every 25 to 75 s; 3 strips-to-bars with a live balance readout, the application round trip, and `RunningMeanTrace` with live song and average readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (3, 6, 7), framed answers and crossed slips; 8 framed card and five short bullets; 9 the beam creeping to 8/3, the running average settling on 4.
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
| Song density (π/8) sin(π(x − 2)/4) on [2, 6] | ∫ = 1; E = 4 min; E(X²) = 20 − 32/π² ≈ 16.758; Var = 4 − 32/π² ≈ 0.758; σ ≈ 0.870 min ≈ 52 s; 40 ÷ 4 ≈ 10 songs | 1, 7, 8 |
| Stored songs (author note k) | 60 songs; first ten total 40.11 min; running averages 3.650, 4.365, 4.011, 3.803, 4.064, 4.005 after 1, 5, 10, 20, 40, 60 | 7 |
| Cookie recall (s06) | mean 8/3 ≈ 2.67 cm; median 2√2 ≈ 2.83 cm; mode 4 | 3 |
| A1 | E = 2/3; E(X²) = 1/2; Var = 1/18; crossed 1 | 9, 10 |
| A2 | μ = π/2 − 1 ≈ 0.571; Var = π − 3 ≈ 0.142; crossed ≈ −0.073 | 11, 12 |
| Handoff histogram (author note l) | 1,000 stored bag masses; counts 3, 3, 13, 37, 91, 157, 176, 190, 150, 115, 44, 16, 3, 2 in 2 g classes from 161 g | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy and Python 3.14 (3 Nov, scratchpad scripts `nums_s07s09.py` and `seed_s09.py`); Codex to re-check numerically and with a CAS.

- Train: ∫₁⁵ x/4 dx = 3; ∫₁⁵ x²/4 dx = 31/3; 31/3 − 9 = 4/3 = 16/12.
- General uniform: ∫ₐᵇ x/(b − a) dx = (a + b)/2; ∫ₐᵇ x²/(b − a) dx − ((a + b)/2)² = (b − a)²/12.
- x/8: ∫₀⁴ x/8 dx = 1; ∫₀⁴ x²/8 dx = 8/3; ∫₀⁴ x³/8 dx = 8; 8 − 64/9 = 8/9; ∫₀⁴ (x − 8/3)² x/8 dx = 8/9; √(8/9) = 0.94281.
- Midpoint sums: 21/8, 85/32, 341/128; Σ f Δx = 1 for n = 4, 8, 16.
- Song density (recalculated 7 Nov with SciPy `quad`, scratchpad `maths07/nums.py`): ∫₂⁶ (π/8) sin(π(x − 2)/4) dx = 1; ∫₂⁶ x f(x) dx = 4; ∫₂⁶ x² f(x) dx = 20 − 32/π² = 16.75772; Var = 4 − 32/π² = 0.75772; σ = 0.87047 min = 52.2 s. Stored songs (seed 808): averages as in the Numbers used table.
- A1: 2/3, 1/2, 1/18; ∫₀¹ 2x dx = 1.
- A2: ∫₀^(π/2) cos x dx = 1; ∫₀^(π/2) x cos x dx = π/2 − 1 = 0.57080; ∫₀^(π/2) x² cos x dx = π²/4 − 2 = 0.46740; Var = π − 3 = 0.14159; crossed ∫₀^(π/2) x² cos² x dx = π(π² − 6)/48 = 0.25326, minus 0.32581 = −0.07254.
- Handoff histogram (seed 909, `gauss(175, 4)`): counts as above, sum 1,000; mean 175.16; sd 3.98.

## Memory aid check

- **"Sum becomes integral; P(x) becomes f(x) dx."** Meaning, as said in scene 8: each discrete formula for E and Var turns into the continuous one by replacing the sum with an integral over [a, b] and P(x) with f(x) dx. Assumptions checked: it applies to E(X), E(X²), Var(X) and the total ∫ f = 1 (all sums weighted by P(x)); it does not apply to the mode or median, which use the peak of f and F(x) = ½ (s06; the narration scopes it to "each discrete formula for E and the variance"); "f(x) dx" keeps the dx, which carries the strip width (scene 2), so f(x) alone is not a probability. It helps a new case: A1 and A2 are set up directly from it. Introduced after the generation (scenes 2 and 5).
- **Considered, not used:** "x f for the mean, x² f for the spread" (useful, but it is the key note itself).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,167 characters**, 14 scene headings (Revision 3: 5,526). Characters per scene (1 to 14): 700, 649, 747, 403, 493, 708, 925, 169, 84, 323, 109, 377, 405, 75.

At 13.3 characters per second the speech before the notes is about 458 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 20 s of settling for the beam (1, 3, 4), the strip splits (2), the brackets (6), the application round trip and the running average (7); the key-notes scene is 45 s (1,350 frames). Total **about 549 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 21 s spare.

Reserve trims if the voiced take runs long, in order: scene 3's long-run sentences (−122, the running average in scene 7 carries the idea); scene 4's last sentence (−87, keep the grey line); scene 6's quick check (−124, keep the grey row). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s08` (route math-a12-s08). Suggested explainer folder `src/explainer/lessons/math-a12-s08` and build folder `docs/production/claude-pm/lessons/m-a12s08` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, sum-to-integral, evaluate-mean, uniform-check, variance-generate, variance-and-sigma, beyond-the-course, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s07's last frame continues into scene 1 (same density and triangle); within 1 a clear change to x/8 (on "four"); 1 to 2 to 3 camera continue (same density and beam); 3 to 4 camera pull back; 4 to 5 clear change of the right column (x/8 stays); 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera pull back; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s08-rev4-learning-review.md`, `science_check` = `checks/m-a12s08-rev4-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only): no headphones, earbuds, speaker or music-player plate exists in any course (searched headphone, earbud, music, speaker, playlist; the music plates are Physics's guitar, microphone and sound-level meter, which carry pitch and loudness, not a playlist). `ma12-phone-v1` (d03) was rejected so the playlist does not read as d03's app.

Need (painted, new; see the Codex asset brief): `ma12-headphones-v1.png`. Reused: `ma12-cookie-v1` (s06, badge in scene 3; root to confirm, open decision 7) and `ma12-chip-bag-v1` (s09's new plate, small in the handoff frame).

Coded (studio kit): the playlist strip and song bars, densities, strips and bars, the beam and fulcrum, the crosswalk table, σ brackets, the application panel, the running-average trace, the handoff histogram, working boards, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: decision 45's probability set (`BalanceBeam` with its density mode as `BalancePoint`, `RunningMeanTrace`, `SpreadBrackets`, `ClassHistogram`, `ProbabilityBars`), decision 32's studio `ToolPanel`, decision 36's `StudioRiemannStrips`, `RefinementTable` and `IntegralNotation`, and the studio's `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip` and `QuestionAxes`.

Additions:
1. **`RiemannStrips` `toBars`** linked to `BalancePoint`: midpoint strips collapse into bars at their midpoints labelled with exact areas (checked within 1e-9) and the beam balances at Σ x f(x)Δx with a live readout. Checks: n = 4 bars 1/16, 3/16, 5/16, 7/16 and balance 2.625; n = 8 gives 2.65625; n = 16 gives 2.6640625; areas add to 1.
2. **`FormulaCrosswalk`**: a two-column discrete | continuous table whose continuous entries morph from the discrete ones (Σ → ∫ₐᵇ, P(x) → f(x) dx highlighted). Checks: fit at 40 px for four rows; compact mode for the card.
3. **`ToolPanel` input/output mode**: typed author input, a short "computing" pause, author outputs checked by the build against a numerical integral of the supplied function (tolerance 1e-6); no brand. Checks: 4; 20 − 32/π² ≈ 16.758; π/2 − 1 ≈ 0.5708; π − 3 ≈ 0.1416.
4. **`RunningMeanTrace` playlist mode**: stored values drawn as bars filling a strip, with live "n" and "average" readouts (minutes and seconds) and a target line. Checks: averages 3.650, 4.365, 4.011, 3.803, 4.064, 4.005 after 1, 5, 10, 20, 40, 60; ten-song total 40.11.

## Codex asset brief (Maths A12 S08, a running playlist)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s08.md`, draft route entry math-a12-s08. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, logos, brand names, people, hands, faces, heads, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-headphones-v1.png` (1,600 × 1,400 px): one pair of over-ear wireless headphones seen in three-quarter front view, resting upright as if on a desk (headband arched at the top, both ear cups visible, cushions facing slightly inward), in matte charcoal with soft teal cushions; no cable, no logo, no buttons with symbols, no head or stand.

Also needed, briefed in `math-a12-s09.md` (paint once, used in both): `ma12-chip-bag-v1.png`.

Report inspection on the paper background (`#f6f1e7`) at 420 px and 200 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s08-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the strip argument in scene 2: midpoint strips, strip area as the probability of the strip, Σ x f(x)Δx values 2.625, 2.656, 2.664, and "as the strips get thinner, the sum becomes an integral" (not "equals").
3. Confirm the scene 5 expansion with integrals, and that ∫ f = 1 and ∫ x f = μ are the reasons given.
4. Confirm that x sin(π(x − 2)/4) (and x cos x) is outside the Mathematics Advanced 2024 integration content (integration by parts is not an Advanced point), and that the song density and cos x are valid densities on their intervals.
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

- **1. The beyond-course example (maths check).** Revision 4 replaces ½ sin x on [0, π] with the song density (π/8) sin(π(x − 2)/4) on [2, 6] (the same shape in minutes). The maths check confirms x sin(π(x − 2)/4) needs integration by parts, outside the 2024 Advanced points, and that the density check uses only the integral of sin(ax + b), which is in the course.
- **7. The cookie recall (root).** Scene 3 names s06's cookie in one sentence with its badge, to pay off s06's "a later video" chip. If root reads this as reusing s06's context, cut the two sentences (−222 characters, leaving 5,945) and the badge; nothing else depends on it.
- **2. Uniform variance (learning review).** (b − a)²/12 is quoted with a train check, not derived (the site's problem 3 has the derivation). If the review wants it derived, it belongs in the strand practice video, not here (one idea per scene, and the length cap).
- **3. Syllabus quote forms.** This file quotes the crosswalk linear text exactly; the description uses typographic rendering (root decision 54). The codename `ms_s6_y12_evaluate_the_expected_value_and_the_vari` is the crosswalk's own id and is kept as given.
- **4. Spoken integrals (voice pilot).** "the integral from a to b of x f of x, dx" and "pi squared over four, minus two" are pilot items.
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 4 (7 Nov) has had no independent review. Next: student learning review (trace from s03, s05, s07 and i06 to i09; check that the playlist question is felt before the method; that the strips-to-bars step generates ∫ x f(x) dx rather than asserting it; that the crosswalk table makes "the same idea" visible; that the variance carry-over names its two reasons; that the application scene keeps the set-up as the student's work; that the running average makes "long-run average" concrete; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The strips collapsing into bars, the beam creeping to 8/3 and the app round trip carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s07's scene 15 (same designer); the handoff frame is s09's opening.

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 7's "the marks are in the set-up" replaced by what to show: limits, the integrand, the result and the tool used. Narration now 5,541 characters (counted by the build parser rules). No em dashes.

## Revision 3 (5 November 2026, brief 171 fixes)

Findings from `checks/m-a12s08-error-check.md`.

- Should fix 1 (scene 7): the on-screen tag "the marks are in the set-up: ..." becomes "show: the limits, x f(x) or x² f(x), − μ², the result and the tool used". No narration change.
- Should fix 2 (scene 13 and the notes return): "Here are a thousand bottle fills from one filling machine" becomes "Here are a thousand simulated bottle fills"; the histogram carries the grey tag "simulated: 1,000 fills" in scene 13 and in scene 14's silent return, the same tag s09 keeps at its opening. s09 scene 1 already says "these thousand simulated fills", so s09's opening needed no change.
- Narration stays above the 5,500-character floor.
- Narration count: 5,526 characters (scene narration only, ** removed, joins excluded; -15 against Revision 2's 5,541), estimated about 518.5 s with the stated holds. No em dashes.


## Revision 4 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). The four syllabus points, every site number, the cause chain, both attempts and the memory aid are unchanged.

- **Anchor and why:** a running playlist on shuffle (painted headphones, coded playlist). "How long is a song on average, and how many fit in a 40-minute run?" is E(X) as a long-run average, and the song density's x f(x) is beyond the course, so the anchor carries both the meaning of E(X) and the tool point.
- **Simulations:** strips collapsing into bars with the beam's live balance readout; the application round trip; `RunningMeanTrace` with 60 stored songs settling on the app's 4 minutes.
- **Colour roles:** densities teal; μ, beam, fulcrum violet; σ brackets violet dashed; strip bars amber; simulated songs blue; application grey; answer green; mistake red.
- **Plates:** new `ma12-headphones-v1`; reused `ma12-cookie-v1` (badge, root to confirm) and `ma12-chip-bag-v1` (s09's plate, handoff).
- **Narration changes (not voiced):** scenes 1, 3, 7 and 13; scene 8 gains a cue word. The beyond-course example is now the song density (½ sin x withdrawn).
- **Counts:** 5,526 → 6,167 characters; about 518 s with the old 60 s notes hold → about 549 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s07's train beam (unchanged); now ends on 1,000 simulated chip bags at 175 g, which s09 Revision 4 opens on (bottle fills withdrawn from this join).
- **Kit additions:** `RiemannStrips` `toBars` with a live balance readout, `FormulaCrosswalk`, `ToolPanel` input/output mode, `RunningMeanTrace` playlist mode.