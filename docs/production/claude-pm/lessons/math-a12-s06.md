# Maths A12 S06: How do mode, median and quartiles differ for a density? The peak of f, solving F(x) = p, and why the most likely value is not the middle (design)

Status: Revision 1 (3 Nov 2026), overnight queue wave H4. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer` with `domain` intervals, `DerivativeTracer` in paired mode, `TangentTriangle` with `ReadoutPanel`, `SymbolicCandidateTable`, `AlignedAlgebra`, `ExpressionSlot`, `DomainStrip`, `Chip` with `cross`, `QuestionCard`, `Countdown`, `KeyNotes`), the integral part proposed in `math-a12-i06.md` (`AreaFill`), the continuous parts proposed in `math-a12-s04.md` and `s05.md` (`CdfSubtraction`, `StripRiseRatio`), and two new parts specified under "Codex asset brief" (`SlidingWindow`, `QuantileReader`). Nothing recorded; human listening pending.

Narration 5,584 characters, 16 scenes, about 512 s (8.5 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: sixth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 58), after s05 (density and CDF) and before s07 (the continuous uniform model). Templates: `math-a12-i05.md` and `math-a12-d10.md` (same structure, voice, paper style, attempt and feedback pattern and key notes), with `math-a12-s04.md` and `s05.md` for the continuous conventions. All maths visuals are coded; no painted plates. No people. Pre-design pack: none, so this design does the pack work itself. Site lessons read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson09.sa.html` (card 06, mode; problem 3 steps 3 and 4; trap 02; practice Q3), SHA256 `8724957cdae4920681fb1c1d0c2644a2db5d674edc47af98d4ab7009133dadf7`, and `lesson10.sa.html` (Expected Value, Variance and Quantiles: card 02 quantiles, problem 1 mode and median, traps 02 and 03), SHA256 `bb363c20ce881f9f2da10030a32abddca9c9bb5221f05ad4a1eb1f15817f1579`. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s06` in `../../programme/maths-a12-course-outline.json` ("How do mode, median and quartiles differ for a density?", two syllabus actions, site sources lessons 9 and 10, no coverage gaps).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; maths visuals coded; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, formula and conditions; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Binding root decisions applied: exact values in the algebra (2√2, 2√3, ∛4, √3 − 1), decimals only in grey readouts; attempt cards give neither the answer nor its form; domains kept (roots outside the domain are rejected aloud; every density is stated with its interval); the d10 global-extremum method (check stationary points and ends) is recalled, not re-taught; the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci189487ff`: "Find the mode from a given probability density function"
- `ci9d3ce54c`: "Use a cumulative distribution function to calculate the median and quartiles for a continuous random variable"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s05's handoff frame (f(x) = 3x(2 − x)/4 on [0, 2], "?" over the hump, an unlabelled dashed line, chip "Next: the most likely value and the middle"). Contrasts the symmetric hump (mode and median both 1) with f(x) = x/8 on [0, 4] (mode 4, median 2√2) as the hook; explains the mode as the peak of f with a sliding window of fixed width, finds it by calculus (site lesson 9 problem 3 steps 3 and 4: mode 1, f(1) = 3/4) and at an endpoint (site card 06: x/8, mode 4), with the flat case in one sentence (`ci189487ff`); explains the median as half the area and solves F(m) = ½ for x/8 (site lesson 10 card 02: m = 2√2, rejecting −2√2), the quartiles 2 and 2√3, and the trap of solving f(x) = ½ (`ci9d3ce54c`); works site lesson 10 problem 1's mode, median and lower quartile (3x²/8 on [0, 2]: mode 2, median ∛4, Q₁ = ∛2); applies both to a component-lifetime context (site lesson 10 Q2, numbers unchanged: mode 0, median 4 − ∛32 ≈ 0.83 h) and says what the gap means. Stops at mode, median and quartiles. Not taught: the mean and variance of a density (site lesson 10 cards 03 onwards and problem 1 step 3; s08), so the mean-median-mode ordering and skew vocabulary stay out (one grey chip "mean: a later video"); the uniform model in full (s07; the flat case is one sentence and the handoff question); percentiles beyond quartiles (one grey tag "F(x) = p works for any p").

## Decisions

- **Learner question kept (outline).** "How do mode, median and quartiles differ for a density?" The answer, built in order: the most likely value and the middle can be far apart (hook); the mode is where f is highest, because a fixed narrow window catches the most probability there (2); it is a global maximum of f, found by calculus with the ends checked (3, 4); the median has half the area below it, so it solves F(m) = ½ (5); the quartiles solve F = ¼ and F = ¾, and quarters are narrower where f is higher (6); the median comes from F, not f (7); a second density shows the median and mode apart (8); in context, the gap says something real (9).
- **The hook surprise.** The symmetric hump gives 1 for both; then x/8 on [0, 4] puts its most likely value at the very end, 4, while half the probability lies below 2√2 ≈ 2.83. Site lesson 10's hook ("three different answers to where is the middle") is kept in spirit but without the mean, which belongs to s08.
- **The cause on the graph (owner quality bar).** Scene 2's `SlidingWindow` (new): a window of width 0.2 slides along the hump with its captured area as a grey readout (≈ 0.054 at [0.1, 0.3], ≈ 0.150 at [0.9, 1.1]); the readout is largest under the peak. The median and quartiles are read on F by `QuantileReader` (new): a horizontal line at height p runs across to F and drops to the x-axis, while the matching area on f fills to the same x.
- **Mode from f, not F (site trap).** Scene 2 says why maximising F fails: F never decreases, so its top is always the right-hand end.
- **Mode by calculus (site lesson 9 problem 3, steps 3 and 4).** f(x) = 3x(2 − x)/4 = (6x − 3x²)/4, f′(x) = (6 − 6x)/4 = 0 at x = 1, f″ = −3/2 < 0, mode 1, f(1) = 3/4. This is s05's scene 9 density, so the strand runs on.
- **Mode at an endpoint (site card 06).** f(x) = x/8 on [0, 4]: f′ = 1/8, never 0; greatest value at x = 4; mode 4. d10's global method (stationary points and ends) recalled in one sentence with a `SymbolicCandidateTable` of two rows (x = 0: f = 0; x = 4: f = ½). The flat (uniform) case: "no single mode" in one sentence (s07's home).
- **Median and quartiles (`ci9d3ce54c`; site lesson 10 card 02, numbers unchanged).** For x/8, F(x) = x²/16 (s05's method recalled in one phrase). F(m) = ½: m² = 8, m = 2√2 (reject −2√2, outside [0, 4], said aloud: site trap 03). F(Q₁) = ¼: Q₁ = 2; F(Q₃) = ¾: Q₃ = 2√3. The four quarter-areas on f have widths 2, 0.83, 0.64 and 0.54 (grey), so "a quarter fits into less width where f is higher". IQR is shown only as a grey readout (2√3 − 2 ≈ 1.46) because the point names median and quartiles only.
- **Trap: f(x) = ½ (site lesson 10 trap 02).** For x/8 it gives x = 4, the end of the domain, which shows the height has nothing to do with half the area. Shown crossed.
- **Symmetric median (scene 3).** For the hump, symmetry about 1 puts half the area each side, checked by F(1) = ½, so mode and median coincide there (one sentence; this is the contrast the hook sets up).
- **Second example (site lesson 10 problem 1, steps 1 and 2 only).** f(x) = 3x²/8, F(x) = x³/8 on [0, 2]: mode 2 (f increasing), median ∛4 ≈ 1.59, plus Q₁ = ∛2 ≈ 1.26 (one sentence). The site's cause ("long tail to the left drags the mean") concerns the mean; here the median's cause is told directly: the low left part needs a lot of width to collect half the probability. Its mean (3/2) and the skew ordering are left for s08.
- **Context (site lesson 10 Q2, numbers unchanged; a genuine addition, not padding).** Lifetime L hours, f(l) = 3(4 − l)²/64, F(l) = 1 − (4 − l)³/64 on [0, 4] (F given, as the site's part (b) supplies it): mode 0 (f decreasing), median 4 − ∛32 ≈ 0.83 h ≈ 50 min; "half fail in under fifty minutes, though some last four hours". It answers the outline question ("how do they differ") with a reason to care, and uses the CDF in a context (`ci9d3ce54c`). The first draft (4,740 characters) was below the band without it; the site's mean of 1 h is not mentioned (s08).
- **Attempts (original).** (A1) f(x) = 12x²(1 − x) on [0, 1], 0 elsewhere: find the mode, justifying. f′(x) = 12x(2 − 3x), zero at 0 and 2/3; f(0) = 0 and f(1) = 0 are the least values; f(2/3) = 16/9; mode 2/3. Crossed: "mode = 0" (a stationary point, but a minimum). This is the site practice Q3 idea (a stationary point that is a minimum) in a new density; it also shows a density above 1 (s05). A decreasing density (first draft) was replaced because scene 9's lifetime density has the same shape. (A2) F(x) = (x² + 2x)/8 on [0, 2] (with flat pieces): find the lower quartile exactly. x² + 2x = 2, (x + 1)² = 3, x = −1 ± √3; reject −1 − √3; Q₁ = √3 − 1 ≈ 0.73. Crossed: "x = −1 ± √3" (both roots kept). The CDF is s04's attempt 2 function (a deliberate callback; the card states it in full, so it stands alone). Neither card shows a derivative, an equation F = p or a root.
- **Mistake scene:** none separate. "Maximise F for the mode" (2); "f′ = 0 always gives the mode" (4; feedback 1 crossed); "forget the ends" (4); "solve f(x) = ½ for the median" (7, crossed); "keep both roots" (5; feedback 2 crossed); "the mode is the middle" (hook, 8).
- **Memory aid.** "Mode: the top of f. Median and quartiles: go across from F." See "Memory aid check".
- **Handoff (outline next s07, "How does a continuous uniform model work?").** Scene 14: a flat density on [1, 5] at an unlabelled height "?", asking how high it must be and what its F looks like. Chip "Next: a flat density". No 1/4, no F formula.
- **Site sources used:** lesson 9 card 06 (mode as the maximum of f; the three-step method with endpoints; x/8 at the endpoint; flat has no unique mode), problem 3 steps 3 and 4 (mode 1, f(1) = 3/4), trap 02 (maximising F), Q3 (a stationary point that is a minimum; idea only); lesson 10 card 02 (F(xₚ) = p; x/8 median and quartiles; rejecting the negative root), problem 1 steps 1 and 2 (3x²/8: mode 2, median ∛4), Q2 (lifetime density and its F, mode and median, used as the scene 9 context; the site practice item becomes taught content, so it is no longer unseen practice there), traps 02 and 03. Not used: lesson 10 cards 03 onwards (mean and variance, s08), the mean-median-mode ordering and the councils question (s08 or the strand practice video).
- **Site corrections (new, for brief logging):** (1) lesson 10 card 02: "Because F is non-decreasing and continuous, such a value always exists." Existence is right, but uniqueness can fail where F is flat inside the support (a density that is 0 on a gap); the sentence is fine for the course's examples, so this is a minor wording note only: suggest "such a value always exists (and is unique when f > 0 there)". (2) lesson 9 card 06: "The mode is the most likely region of the distribution" mixes "value" and "region"; suggest "the value of x where the density is greatest (values near it are the most likely)". (3) No numerical errors found in either lesson's mode, median or quartile values (all recalculated; see "Numbers to verify").
- **Pack questions answered:** no pack exists. All site values recalculated with SymPy.
- **Cause chain taught, in order:** (1) the most likely value and the middle can differ (1); (2) a fixed window catches most probability where f is highest, so the mode is the peak of f (2); (3) the peak is a global maximum: stationary point with a second-derivative test, or an end (3, 4); (4) the median has half the area below it, and F holds areas, so F(m) = ½ (5); (5) quartiles solve F = ¼, ¾; higher density means a quarter fits in less width (6); (6) the height of f is not an area, so f = ½ is wrong (7); (7) a low part of f needs more width to collect probability, which moves the median away from the mode (8).
- **Entry knowledge (draft route):** s05 (f = F′; probability as area; F(x) = ∫ₐˣ f(t) dt; f = 3x(2 − x)/4); s04 (F never decreases, 0 to 1); d09 (stationary points, second-derivative test); d10 (global maximum: compare stationary points and ends on a closed interval); Year 11 quadratics (completing the square or the quadratic formula), surds and cube roots.
- **Learner-visible vocabulary (plain meaning at first use):** mode (the value where the density is highest, scene 2); median (the value with half the probability below it, scene 5); lower and upper quartiles (the values with a quarter and three quarters below, scene 6); interquartile range (grey readout only).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **sliding window** (`SlidingWindow`, new: fixed-width window slides along f with its captured area as a readout, scene 2; a ghost of F beside it reaching its top at the right end); **paired f and f′** (`DerivativeTracer` paired: tangent on f flattening at the peak, scene 3); **endpoint candidates** (`SymbolicCandidateTable`, d10, scene 4); **quantile reading** (`QuantileReader`, new: horizontal lines at p = ¼, ½, ¾ across to F and down, with matching `AreaFill` on f, scenes 5, 6, 8, feedback 2); **quarter strips** (four alternately tinted quarter-areas with width brackets, scene 6); **root rejection** (`DomainStrip` with the rejected root as an open red marker outside the strip, scenes 5 and feedback 2); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; f on the left (lower, about 1,000 × 320 px) and F above it (about 1,000 × 340 px) with a shared x-axis when both are needed; algebra in the right column. Unequal unit lengths (no angle claims).
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Hump: f(x) = 3x(2 − x)/4 on [0, 2]; F(x) = (3x² − x³)/4; F(1) = ½ (median 1, by symmetry about x = 1); f′(x) = (6 − 6x)/4 = −3(x − 1)/2; f″ = −3/2; f(1) = 3/4. Window areas (width 0.2): ∫ from 0.9 to 1.1 = 0.1495; from 0.1 to 0.3 = 0.0535.
  (b) x/8 on [0, 4]: F(x) = x²/16; f′ = 1/8; f(0) = 0, f(4) = ½; mode 4. m² = 8, m = 2√2 ≈ 2.828; Q₁² = 4, Q₁ = 2; Q₃² = 12, Q₃ = 2√3 ≈ 3.464; IQR = 2√3 − 2 ≈ 1.464. Quarter widths: 2, 2√2 − 2 ≈ 0.828, 2√3 − 2√2 ≈ 0.636, 4 − 2√3 ≈ 0.536. Trap: x/8 = ½ gives x = 4.
  (c) 3x²/8 on [0, 2]: F(x) = x³/8; f′ = 3x/4 > 0 on (0, 2]; mode 2, f(2) = 3/2; m³ = 4, m = ∛4 ≈ 1.587 (the only real root). Q₁ = ∛2 ≈ 1.260 (used); Q₃ = ∛6 ≈ 1.817 (not used).
  (d) A1: f(x) = 12x²(1 − x) on [0, 1]; ∫₀¹ f = 1; f′(x) = 24x − 36x² = 12x(2 − 3x), zero at 0 and 2/3; f″(2/3) = 24 − 48 = −24 < 0; f(0) = f(1) = 0; f(2/3) = 16/9; mode 2/3.
  (d2) Lifetime: f(l) = 3(4 − l)²/64 on [0, 4], ∫ = 1; F(l) = 1 − (4 − l)³/64; f′(l) = −6(4 − l)/64 < 0 for l < 4; mode 0, f(0) = 3/16; (4 − m)³ = 32, m = 4 − ∛32 = 4 − 2∛4 ≈ 0.8252 h ≈ 49.5 min.
  (e) A2: F(x) = (x² + 2x)/8 on [0, 2]; F = ¼ gives x² + 2x − 2 = 0, x = −1 ± √3; −1 + √3 ≈ 0.732 in [0, 2]; −1 − √3 ≈ −2.732 rejected. (Median, not asked: −1 + √5 ≈ 1.236.)
  (f) Pronunciations: "two root two"; "two root three"; "the cube root of four"; "root three minus one"; "F of m equals one half"; "f prime" (series form); "three halves"; "x over eight".
  (g) Windows: hump x −0.3 to 2.3, f y 0 to 1 (ticks 0.25, 0.5, 0.75), F y 0 to 1.1; x/8 on x −0.3 to 4.3, f y 0 to 0.6, F y 0 to 1.1 (ticks ¼, ½, ¾, 1); 3x²/8 on x −0.2 to 2.2, f y 0 to 1.6, F y 0 to 1.1; flat density on x 0 to 6, y 0 to 0.5 (no y label at the line).

Main question: *The most likely value of X and the value in the middle of its probability are different questions. Why is the mode the peak of f, why do the median and quartiles come from solving F(x) = ½, ¼ and ¾, and when are they far apart?*
Entry knowledge (s05 density and CDF; d09 and d10 maxima on closed intervals; Year 11 quadratics and surds): f = F′, probability as area, F from f; stationary points, the second-derivative test and checking ends; solving quadratics and cubics of simple form.
Stops after: the mode from f (interior and endpoint), the median and quartiles from F with roots rejected. No mean, variance or skew ordering.
Handoff: math-a12-s07: a flat density on [1, 5] at an unknown height (a question only).

**Draft route entry (for the route file):** id `math-a12-s06`; playlistOrder 58; mainLearnerQuestion "How do mode, median and quartiles differ for a density?"; syllabusActionIds `ci189487ff`, `ci9d3ce54c`; entryKnowledge "s05 f = F′, area as probability, F from f; d09 stationary points and second-derivative test; d10 global extrema with ends; Year 11 quadratics, surds, cube roots"; start "s05's handoff: the hump 3x(2 − x)/4 and 'where is X most likely, and where is the middle?'"; stop "Mode as the peak of f (sliding window reason), by calculus and at an endpoint; flat has no single mode; median and quartiles by F(x) = p with roots outside the domain rejected; the f(x) = ½ trap. No mean or variance."; next "math-a12-s07: the continuous uniform density".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as s05): f blue (lower panel); F teal (upper panel); probability areas pale teal (`AREA_POS`), the quarter-areas alternating pale teal and pale amber; quantile lines amber; the mode marker a blue triangle under the peak; rejected roots open red markers. Exact surds in the algebra; decimals only in grey readouts.

### 1. hook (the most likely value or the middle?)
> Last video ended here, with this density. Where is X most likely to be, and where's the middle, with half the probability on each side? For this symmetric hump, both answers are one, right in the centre. But look at a different density, x over eight, from zero to four. It climbs the whole way, so the most likely place is right at the end, at **four**. Yet half the probability lies below about two point eight three. So the most likely value and the middle can be far apart. How do we find each one?

Visual: opens on s05's last frame (s05's key notes cross-fade back to it): f(x) = 3x(2 − x)/4 on [0, 2], "?" over the hump, an unlabelled dashed line, chip "Next: the most likely value and the middle". Heading writes on: "Mode, median and quartiles of a density". On "both answers are one" the "?" settles at the peak (a blue triangle at x = 1) and the dashed line slides to x = 1; the two halves of the area tint, grey readout "½ | ½". On "different density" the hump shrinks to the top left (small, labelled "symmetric") and a new graph draws: f(x) = x/8 on [0, 4] (author note g). On "four" a blue triangle marks x = 4, tag "highest density". On "two point eight three" `AreaFill` fills from 0 to 2√2 in pale teal with a grey readout "½ of the area", the dashed line at 2.83. A grey chip at the bottom right: "the mean is a third kind of middle: a later video".

### 2. the mode is the peak of f
> The mode is the value where the density is highest. Here's why that's the most likely place. Slide a narrow window, two tenths wide, along the hump. It catches the most area, and so the most probability, where the curve is highest. Near one, it catches about zero point one five. Near zero point two, only about zero point zero five. So the mode is at the peak of f, not of **F**. F never decreases, so its highest point is always at the right-hand end, whatever the density.

Visual: board clears back to the hump (author note g), f lower and F upper. `SlidingWindow`: an amber window of width 0.2 slides from x = 0 to 1.8 and back to 1; its captured area reads in grey ("≈ 0.054" at [0.1, 0.3], "≈ 0.150" at [0.9, 1.1]), largest under the peak. Tag "mode: where f is highest". On "F" the upper F glows at its right-hand end (2, 1) with a crossed chip "maximise F? always the right end".

### 3. finding the mode by calculus
> Finding the peak is a maximum problem, like the ones you've solved before. Write f as six x minus three x squared, over four. Its derivative is six minus six x, over four, which is zero at x equals **one**. The second derivative is minus three halves, which is negative, so that's a maximum. The mode is one, where the density is three **quarters**. And because this hump is symmetric about one, half the area lies on each side, so the median is one as well. F of one is a half, which checks it.

Visual: camera continue (F fades; f fills the left). Task strip "Find the mode." with the condition "f(x) = 3x(2 − x)/4 for 0 ≤ x ≤ 2; f(x) = 0 elsewhere". `DerivativeTracer` (tangent only): a tangent slides along the hump and flattens at x = 1, `ReadoutPanel` "gradient 0" on "one". Right column `AlignedAlgebra`: "f(x) = (6x − 3x²)/4"; "f′(x) = (6 − 6x)/4 = 0 ⇒ x = 1"; "f″(x) = −3/2 < 0: maximum"; on "quarters" boxed "mode = 1, f(1) = 3/4". On "symmetric" the two halves of the area tint either side of x = 1 and a grey row "F(1) = (3 − 1)/4 = ½: median 1" ticks.

### 4. a mode at an endpoint
> But a density doesn't always have a stationary point. For x over eight, from zero to four, the derivative is one eighth, and it's never zero. The density keeps climbing, so its greatest value is at the right-hand end. The mode is **four**. So, just like any global maximum, check the endpoints as well. And if a density is completely flat, it has no single **mode**.

Visual: board clears to f(x) = x/8 on [0, 4]. Right column: "f′(x) = 1/8 ≠ 0: no stationary point". `SymbolicCandidateTable` (d10) with two end rows: "x = 0: f = 0" and "x = 4: f = ½" (highlighted on "four"); boxed "mode = 4". Grey chip "d10: check stationary points and ends". On "mode" (last) a small inset: a flat segment, tag "flat: no single mode (a later video)".

### 5. the median: half the area, from F
> Now the middle. The median, m, is the value with half the probability below it. That's an area on f, but F already holds the areas. So we solve F of m equals one half. Integrating x over eight from zero, F of x is x squared over sixteen. So m squared over sixteen is a half, m squared is eight, and m is two root two, about two point eight **three**. The negative root, minus two root two, is outside zero to four, so we reject it, and say so.

Visual: the paired view (author note g): F(x) = x²/16 upper, f = x/8 lower. Right column: "median m: F(m) = ½". On "F already holds the areas" `QuantileReader`: an amber horizontal line at height ½ on F runs across to the curve and drops to the x-axis, while `AreaFill` fills under f from 0 to the same x. Rows: "F(x) = ∫₀ˣ t/8 dt = x²/16"; "m²/16 = ½ ⇒ m² = 8 ⇒ m = ±2√2"; on "three" boxed "m = 2√2 (≈ 2.83)". On the last sentence a `DomainStrip` [0, 4] with −2√2 as an open red marker outside it, tag "outside the domain: rejected".

### 6. the quartiles
> The quartiles split the probability into quarters. The lower quartile solves F equals one quarter, and the upper quartile solves F equals three quarters. Here, the lower quartile is two, and the upper quartile is two root three, about three point four **six**. Look at the four pieces. Each one holds a quarter of the area, but they get narrower to the right, because the density is higher there. A quarter of the probability fits into less **width**.

Visual: camera continue. `QuantileReader` adds lines at ¼ and ¾. Rows: "F(Q₁) = ¼ ⇒ Q₁² = 4 ⇒ Q₁ = 2"; "F(Q₃) = ¾ ⇒ Q₃² = 12 ⇒ Q₃ = 2√3 (≈ 3.46)", boxed on "six"; grey "F(x) = p works for any p". On "four pieces" the area under f splits at 2, 2√2 and 2√3 into four alternately tinted pieces, each labelled "¼"; on "width" width brackets under them read in grey "2", "0.83", "0.64", "0.54". A small grey readout "IQR = Q₃ − Q₁ = 2√3 − 2 ≈ 1.46".

### 7. a trap: the median comes from F
> One trap to avoid. The median comes from F, not f. Setting x over eight equal to a half gives four, which is just the end of the domain. The height of the density has nothing to do with half the **area**.

Visual: camera continue. A chip "f(m) = ½ ⇒ m/8 = ½ ⇒ m = 4" writes; a dashed line at height ½ on the lower f panel meets f at x = 4. On "area" the chip is crossed (caption "height, not area"), and the correct "F(m) = ½: m = 2√2" glows.

### 8. a second density: 3x squared over 8
> Try one more. A density is three x squared over eight, from zero to two, and its F is x cubed over eight. The density keeps increasing, so the mode is at the end, at **two**. For the median, x cubed over eight equals a half, so x cubed is four, and m is the cube root of four, about one point five **nine**. In the same way, the lower quartile is the cube root of two, about one point two six. The median is well left of the mode. The density is low near zero, so it takes a lot of width there to collect half the probability.

Visual: board clears (new case). Task strip "Find the mode and the median." with the conditions "f(x) = 3x²/8 and F(x) = x³/8 for 0 ≤ x ≤ 2" (site lesson 10 problem 1). Paired view (author note g). Right column: "f′(x) = 3x/4 > 0 on (0, 2]: f increasing"; on "two" boxed "mode = 2" with a blue triangle at x = 2 (f(2) = 3/2, grey). Row "m³/8 = ½ ⇒ m³ = 4 ⇒ m = ∛4 (≈ 1.59)", boxed on "nine", with the `QuantileReader` line at ½; then "x³ = 2 ⇒ Q₁ = ∛2 (≈ 1.26)" with a line at ¼. On the last sentence the area from 0 to ∛4 fills pale teal and a width bracket "≈ 1.59 wide for half" sits under it, against the bracket "≈ 0.41" for the other half.

### 9. in context: component lifetimes
> Here's why the difference matters in a real problem. A component's lifetime, L hours, has density three times four minus l, all squared, over sixty four, for l from zero to four. That density is highest at zero and falls the whole way, so the mode is **zero**. Its F is one minus four minus l, cubed, over sixty four. Setting F equal to a half gives four minus m, cubed, equals thirty two. So m is four minus the cube root of thirty two, about zero point eight three **hours**. Half of these components fail in under fifty minutes, even though some last up to four hours. The most likely lifetime and the median answer different questions.

Visual: board clears (new case). Task strip "Find the mode and the median lifetime." with the conditions "f(l) = 3(4 − l)²/64 and F(l) = 1 − (4 − l)³/64 for 0 ≤ l ≤ 4" (site lesson 10 Q2, numbers unchanged; the F is given, as the site's "show that" part already supplies it). Paired view on l from −0.3 to 4.3 (f y 0 to 0.25, F y 0 to 1.1). On "zero" a blue triangle at l = 0 (f(0) = 3/16, grey), row "f′(l) = −6(4 − l)/64 < 0 for l < 4: f decreasing; mode 0". Rows "1 − (4 − m)³/64 = ½ ⇒ (4 − m)³ = 32 ⇒ m = 4 − ∛32"; on "hours" boxed "m ≈ 0.83 h", with the `QuantileReader` line at ½. On "fifty minutes" a grey readout "0.83 h ≈ 50 min", and the long thin tail of f out to 4 tints pale amber, tag "some last up to 4 h".

### 10. memory aid
> Here's a way to keep them apart. The mode is the top of f. The median and quartiles go across from F. For the median, go across from one half, and down to the **axis**.

Visual: the two graphs shrink to the left (f below, F above). The handwritten lines write large: "Mode: the top of f." (on "top" the blue triangle at f's peak pulses) and "Median and quartiles: go across from F." (on "axis" the amber line runs across from ½ on F and down). Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A density is twelve x squared, times one minus x, for x from zero to one, and zero elsewhere. Find the mode, and justify your answer. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X has probability density function f(x) = 12x²(1 − x) for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find the mode of X, justifying your answer." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No graph and no derivative.

### 12. feedback 1 (brief)
> Expand f, and its derivative is twenty four x minus thirty six x squared, or twelve x times two minus three x. That's zero at x equals zero, and at two **thirds**. But f of zero is zero, the lowest value, and f is zero at x equals one too. At two thirds, f is sixteen ninths, its greatest value. So the mode is two **thirds**. Zero is wrong. It's a stationary point, but a **minimum**.

Visual: card shrinks to the top. On "Expand" "0 ≤ x ≤ 1" is underlined in the card; rows "f(x) = 12x² − 12x³"; "f′(x) = 24x − 36x² = 12x(2 − 3x) = 0 ⇒ x = 0 or x = 2/3" (on "thirds"). `SymbolicCandidateTable` rows "x = 0: f = 0 (stationary, end)", "x = 2/3: f = 16/9", "x = 1: f = 0 (end)"; a small graph of the hump on [0, 1] peaking at (2/3, 16/9) draws. On "thirds" (second) boxed "mode = 2/3". On "minimum" a chip "mode = 0" fades in and is crossed (caption "f′ = 0 at a minimum"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A continuous random variable has F of x equals x squared plus two x, all over eight, for x from zero to two. Find the lower quartile exactly. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the exact value of the lower quartile of X." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No graph and no equation.

### 14. feedback 2 (brief)
> Solve F of x equals one **quarter**. So x squared plus two x equals two. Complete the square: x plus one, all squared, is three, so x is minus one, plus or minus root three. Minus one minus root three is outside zero to two, so reject it. The lower quartile is root three minus one, about zero point seven **three**. Keeping both roots is wrong. Only one is in the **domain**.

Visual: card shrinks to the top. On "quarter" "lower quartile" and "0 ≤ x ≤ 2" are underlined; rows "(x² + 2x)/8 = ¼ ⇒ x² + 2x = 2"; "(x + 1)² = 3 ⇒ x = −1 ± √3". A `DomainStrip` [0, 2] with −1 − √3 as an open red marker outside, tag "rejected". On "three" boxed "Q₁ = √3 − 1 (≈ 0.73)". On "domain" a chip "Q₁ = −1 ± √3" fades in and is crossed (caption "one root is outside [0, 2]"). Hold about 1 second.

### 15. handoff
> So the mode is the peak of f, and the median and quartiles come from F. Next, a new question. What if a density is completely flat, from one to five? There's no peak at all. How high must it be, and what does its F look like?

Visual: the two memory-aid lines show small at the top, then fade on "Next". Board clears to one graph (author note g): a flat blue segment on [1, 5] at an unlabelled height, 0 elsewhere, tag "f(x) = ? for 1 ≤ x ≤ 5", a "?" chip at the y-axis where its height would be; small empty axes above for F with a "?". Chip "Next: a flat density". No height value, no area value, no F formula. Hold about 2 seconds. This is s07's opening frame; scene 16 returns to it after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Mode: the value of x where f is greatest. Solve f′(x) = 0 and confirm a maximum, and check the endpoints. Use f, never F. A flat density has no single mode.
2. Median m: F(m) = ½. Lower quartile: F(Q₁) = ¼. Upper quartile: F(Q₃) = ¾.
3. Reject any root outside the domain, and say so.
4. The median is not found from f(x) = ½. A height is not an area.

Memory aid (large, on the notes screen): *Mode: the top of f. Median and quartiles: go across from F.*

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s, root decision 20) back to scene 15's frame exactly (the flat segment on [1, 5] at an unlabelled height, the "?" chips and "Next: a flat density"). This is the final frame and s07's opening frame.

## Teaching checks

- **Does it explain causes?** Why the mode is the peak of f: a fixed window catches the most probability there (2). Why not F: F never decreases (2). Why check ends: the mode is a global maximum (4). Why F(m) = ½: F holds the areas (5). Why quarters narrow: higher density packs a quarter into less width (6). Why not f = ½: height is not area (7). Why the median sits left of the mode for 3x²/8: low density needs more width (8). Why the gap matters: half the components fail early though some last long (9). Why reject a root: it lies outside the domain (5; feedback 2).
- **Misconceptions addressed:** "the mode is the middle" (1, 8); "maximise F" (2); "f′ = 0 is always the mode" (feedback 1 crossed); "ignore the ends" (4); "f(m) = ½" (7 crossed; key note 4); "keep both roots" (feedback 2 crossed; key note 3).
- **One idea at a time:** one density per scene in 2 to 4; one quantile per sentence in 5 and 6; the trap (7) alone; the second example (8) and the context (9) each clear the board.
- **Video makes it easier:** the window readout peaking under the hump (2), the tangent flattening (3), the line across from ½ and the matching area (5), and the quarters narrowing (6) are each the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (density with interval and "0 elsewhere"; the full piecewise F), 10 seconds each with the invitation to pause; neither card shows a derivative, an equation F = p or a root. One crossed mistake each; feedback about 27 s and 29 s (scenes 12 and 14).
- **Avoided double teaching:** stationary points and the second-derivative test (d09) and the global method (d10) in one phrase and one grey chip; F from f (s05) in one phrase; completing the square (Year 11) shown, not taught.
- **Syllabus coverage:** `ci189487ff` (2 to 4, 8, 9; A1; key note 1); `ci9d3ce54c` (3, 5 to 9; A2; key notes 2 to 4).
- **Out of scope by design:** mean, variance and skew ordering (s08); the uniform model (s07); percentiles other than quartiles (one grey tag).

## Practice questions and model answers

**Attempt 1 (scene 11; original, HSC style, 2 marks suggested, not an official marking scheme).** "A continuous random variable X has probability density function f(x) = 12x²(1 − x) for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find the mode of X, justifying your answer."
Model answer: f(x) = 12x² − 12x³, f′(x) = 24x − 36x² = 12x(2 − 3x) = 0 at x = 0 or x = 2/3. Compare: f(0) = 0, f(2/3) = 16/9, f(1) = 0 (or f″(2/3) = −24 < 0). The mode is 2/3. Classic mistake (crossed): "mode = 0" (a stationary point that is a minimum).

**Attempt 2 (scene 13; original, HSC style, 2 marks suggested).** "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the exact value of the lower quartile of X."
Model answer: F(Q₁) = ¼ gives x² + 2x = 2, (x + 1)² = 3, x = −1 ± √3. Since 0 ≤ x ≤ 2, reject −1 − √3. Q₁ = √3 − 1. Classic mistake (crossed): "−1 ± √3" (both roots kept).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hump (s05, site lesson 9 problem 3) | f = 3x(2 − x)/4 on [0, 2]; mode 1, f(1) = 3/4; F(1) = ½, median 1 | 1 to 3 |
| Window areas (width 0.2) | [0.1, 0.3] ≈ 0.054; [0.9, 1.1] ≈ 0.150 | 2 |
| x/8 (site lesson 9 card 06, lesson 10 card 02) | f′ = 1/8; f(0) = 0, f(4) = ½; mode 4; F = x²/16 | 1, 4 to 7 |
| Median of x/8 | m² = 8, m = 2√2 ≈ 2.83; reject −2√2 | 1, 5, 7 |
| Quartiles of x/8 | Q₁ = 2; Q₃ = 2√3 ≈ 3.46; IQR ≈ 1.46 (grey) | 6 |
| Quarter widths | 2, 0.83, 0.64, 0.54 (grey) | 6 |
| Trap | x/8 = ½ gives 4 (crossed) | 7 |
| 3x²/8 (site lesson 10 problem 1) | F = x³/8; mode 2, f(2) = 3/2; m = ∛4 ≈ 1.59; halves 1.59 and 0.41 wide | 8 |
| 3x²/8 lower quartile | Q₁ = ∛2 ≈ 1.26 | 8 |
| Lifetime (site lesson 10 Q2) | f = 3(4 − l)²/64, F = 1 − (4 − l)³/64; mode 0; m = 4 − ∛32 ≈ 0.83 h ≈ 50 min | 9 |
| A1 | f′ = 12x(2 − 3x); f(0) = 0, f(2/3) = 16/9, f(1) = 0; mode 2/3; crossed 0 | 11, 12 |
| A2 | x = −1 ± √3; Q₁ = √3 − 1 ≈ 0.73; crossed both roots | 13, 14 |
| Handoff | flat density on [1, 5], height not shown | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (3 Nov, isolated Python run); Codex to re-check numerically and with a CAS.

- d/dx [3x(2 − x)/4] = −3(x − 1)/2; second derivative −3/2; f(1) = 3/4; F(1) = (3 − 1)/4 = ½.
- ∫ from 0.9 to 1.1 of 3x(2 − x)/4 dx = 0.1495; ∫ from 0.1 to 0.3 = 0.0535.
- ∫₀ˣ t/8 dt = x²/16; roots of x²/16 = ¼, ½, ¾: ±2, ±2√2, ±2√3; 2√2 = 2.8284; 2√3 = 3.4641; 2√3 − 2 = 1.4641; widths 2, 0.8284, 0.6357, 0.5359.
- x/8 = ½ at x = 4.
- 3x²/8: ∫₀² = 1; F = x³/8; f′ = 3x/4; f(2) = 3/2; ∛4 = 1.5874; 2 − ∛4 = 0.4126.
- 3x²/8: ∛2 = 1.2599.
- Lifetime: ∫₀⁴ 3(4 − l)²/64 dl = 1; ∫₀ˡ f = 1 − (4 − l)³/64; f′ = −6(4 − l)/64; 4 − ∛32 = 0.82520; × 60 = 49.5 min.
- A1: ∫₀¹ 12x²(1 − x) dx = 1; f′ = −12x(3x − 2); f(2/3) = 16/9; f″(2/3) = −24.
- A2: (x² + 2x)/8 = ¼ ⇔ x² + 2x − 2 = 0 ⇔ x = −1 ± √3; −1 + √3 = 0.7321; −1 − √3 = −2.7321.

## Memory aid check

- **"Mode: the top of f. Median and quartiles: go across from F."** Meaning, as said in scene 10: the mode is the x of the greatest value of f (interior peak or an end); a quantile is found by going across from the height p on the graph of F to the curve, then down to the x-axis, which is solving F(x) = p. Assumptions checked: "the top of f" includes an endpoint maximum (scene 4 and feedback 1 show it); a flat f has no single top (scene 4 says so); "across from F" needs F to reach the level p inside the domain, which holds because F is continuous and runs from 0 to 1 (s04); a root outside the domain is rejected (key note 3). It helps a new case: feedback 2 goes across from ¼. Introduced after the causes and the context (2 to 9).
- **Considered, not used:** "MMM: mode, median, mean" ordering aids (need the mean, s08); "median = middle of the domain" (false for every skewed example here).

## Narration length estimate

Revision 1 (3 Nov; counted by script `s0406_count.py` in the designer's scratchpad with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,584 characters** (5,599 with joining spaces), 16 scenes. Characters per scene (1 to 16): 497, 471, 487, 358, 439, 443, 200, 518, 631, 164, 166, 373, 173, 364, 225, 75. At 13.3 characters per second the speech is about 420 s; add about 12 s of settling time (the window slide in 2, the tangent in 3, the quantile lines in 5, 6, 8 and 9, the quarter split in 6), 20 s for two countdowns, 5 s of short holds (10, 12, 14, 15) and about 55 s more of the quiet notes hold (about 92 s of holds): **about 512 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. The first draft was 4,740 characters; the genuine additions are the symmetric median check (3), the lower quartile of 3x²/8 (8) and the lifetime context (9). No further trims (trimming more than about 80 characters would drop below the floor). Feedback: scene 12 about 27 s and scene 14 about 29 s (including the 1 s holds).

## Scene list and build ids

Lesson key `m-a12s06` (route math-a12-s06). Suggested explainer folder `src/explainer/lessons/math-a12-s06` and build folder `docs/production/claude-pm/lessons/m-a12s06` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, mode-peak-of-f, mode-by-calculus, mode-at-endpoint, median-from-F, quartiles, median-trap, second-density, lifetime-context, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s05's last frame continues into scene 1 (same window; the hump then shrinks to a corner); 1 to 2 clear change back to the hump; 2 to 3 camera continue; 3 to 4 clear change; 4 to 5 camera continue into the paired view; 5 to 6 to 7 camera continue; 7 to 8 clear change (new case); 8 to 9 clear change (new case); 9 to 10 pull back; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s06-learning-review.md`, `science_check` = `checks/m-a12s06-maths-check.md`.

## Assets

Have (built): `FunctionGraph` / `GraphLayer` with `domain` pieces, `DerivativeTracer` (tangent), `TangentTriangle` with `ReadoutPanel`, `SymbolicCandidateTable` (d10), `DomainStrip` with `markerLabels` (brief 143), `AlignedAlgebra`, `ExpressionSlot`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`. Proposed, not yet built: `AreaFill` (i06), `CdfSubtraction` (s04). New, specified below: `SlidingWindow`, `QuantileReader`. No plates.

## Codex asset brief

**A. Coded parts (new, for the next maths kit brief).** In `src/explainer/math/`, exported through `kit.tsx`, each with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample.

1. **`SlidingWindow`** (scene 2). On a `FunctionGraph` of a density f: a shaded window of fixed width `w` whose left edge follows a `path` ({x, at}[]); the captured area ∫ f over the window is shown as a grey readout, computed from an author-supplied primitive F (not numerically integrated in the part) so the readout and the shape agree. Optional `maxMarker` (marks where the readout is largest along the path). Checks: hump with w = 0.2: [0.1, 0.3] gives 0.0535 and [0.9, 1.1] gives 0.1495; the readout is greatest at left edge 0.9 among 101 sampled positions on [0, 1.8].
2. **`QuantileReader`** (scenes 5, 6, 8, 9, 10, 14). On a paired F (upper) and f (lower) with a shared x-axis: for each `levels` entry ({p, x, label, at}: author-supplied exact x and label), an amber horizontal line at height p on F runs from the y-axis to the curve, then a vertical line drops through both panels to the x-axis, and `AreaFill` fills under f from the domain start to x; optional `quarters` (tint the pieces between successive x values alternately, with width brackets and "¼" labels); optional `rejected` (an x outside the domain shown on a `DomainStrip` as an open red marker). The part checks that F(x) equals p within 1e-9 for each supplied x and throws otherwise. Checks: x²/16 at p = ¼, ½, ¾ with x = 2, 2√2, 2√3; x³/8 at ½ with ∛4 and at ¼ with ∛2; 1 − (4 − l)³/64 at ½ with 4 − ∛32; (x² + 2x)/8 at ¼ with √3 − 1 and the rejected −1 − √3; quarter widths 2, 0.828, 0.636, 0.536.

No painted plates.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (exact surds and cube roots; grey decimals), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every mode is a global maximum of f on its stated domain (interior with f″ < 0, or an endpoint), that the hump's median 1 follows from F(1) = ½, and that the lifetime F(l) = 1 − (4 − l)³/64 is the integral of the stated density from 0 (scene 9).
3. Confirm every median and quartile solves F(x) = p, with each rejected root outside the domain and the rejection stated.
4. Confirm the scope of every learner-visible general claim: "use f, never F" for the mode; "F never decreases, so its highest point is the right-hand end"; "a flat density has no single mode"; key notes 1 to 4.
5. Confirm no mean, variance or skew ordering is taught (only the grey chip "the mean is a third kind of middle: a later video").
6. Confirm both attempt questions carry every demand and condition, and that neither card or its visuals shows a derivative, an equation F = p or a root.
7. Confirm the handoff (scene 15) shows no height value, area value or F formula for the flat density, and asks a question only.
8. Confirm the two syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Mode, Median and Quartiles of a Probability Density Function | Year 12 Maths Advanced

(Title length: 84 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson10.sa.html

The most likely value of a continuous random variable and the middle of its probability are different questions, and they can be far apart. See why the mode is the peak of the density f (a narrow window catches the most probability there), find it by calculus or at an endpoint, and why the median and quartiles come from the cumulative distribution function by solving F(x) = ½, ¼ and ¾, rejecting any root outside the domain. Then see what the gap means for component lifetimes. Includes the classic traps: maximising F instead of f, and solving f(x) = ½ for the median. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, statistics and probability.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Find the mode from a given probability density function"
"Use a cumulative distribution function to calculate the median and quartiles for a continuous random variable"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Probability density functions (previous video); maxima and minima on a closed interval. Next: The continuous uniform distribution.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Site link (root).** The mode content is in lesson 9 and the median and quartiles in lesson 10. The description links lesson 10 (the quantile page); lesson 9 could be added as a second link.
- **2. A2 reuses s04's attempt 2 CDF (learning review).** (x² + 2x)/8 on [0, 2] appears in s04 (an interval probability) and here (a quartile). The card states it in full, so it stands alone; it also lets a student who watched s04 see one F answer two kinds of question. Replace with F(x) = x²/36 style only if the reviewer finds the repeat unhelpful (that one is site drill 3, so a new function would be needed, e.g. F(x) = (x² + 4x)/12 on [0, 2], Q₁ = −2 + √7).
- **3. Scene 8's cause sentence (learning review).** "The density is low near zero, so it takes a lot of width there to collect half the probability" explains why the median is left of the mode without the mean; confirm it reads as a cause, not a rule.
- **4. s07's opening frame.** The handoff uses the site's train example interval [1, 5] (lesson 9 Q2) without its height; if s07 opens on a different interval (the site's bus [0, 10] or drill [2, 10]), change scene 14's interval only.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s05, d09 and d10 entry knowledge; check that the hook makes "most likely" and "middle" feel different before any rule; that the sliding window is the evidence for the mode; that the endpoint mode and the flat case are each one clear step; that "F holds the areas" makes F(m) = ½ feel necessary; that the narrowing quarters are understood; that the f = ½ trap is shown, not just told; that the attempt cards give nothing away), then the Codex maths check and error check.
- The window slide, the tangent flattening and the quantile lines carry the explanation; judge them at playback speed in the voiced preview, not from stills.
