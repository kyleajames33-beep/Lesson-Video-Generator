# Maths A12 S10: How do graphing tools verify the empirical rule and normal CDF? The normal PDF's parts, the global maximum at μ, inflection at μ ± σ, 68%, 95% and 99.7% measured and applied, and the S-shaped CDF (design)

Status: Revision 1 (3 Nov 2026), overnight queue wave I5. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `QuestionCard`, `Countdown`, `KeyNotes`, `ConcavityTint`), `ToolPanel` (unbranded, root decision 38, with s08's input/output mode), `AreaFill` (i06, with s09's open ends), `AccumulationTracer` (i08), the s09 parts (`NormalCurve`, `TailMirror`) and the additions under "Codex asset brief" (`ToolPanel` graph mode, `NormalCurve` bands and inflection marks, `TailLadder`). Nothing recorded; human listening pending.

Narration 6,032 characters, 17 scenes, about 556 s (9.3 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: tenth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 62), after s09 (the normal model, its shape and notation) and before s11 (z-scores and tables). Templates: `math-a12-i05.md` and `math-a12-d10.md` (section structure, voice, attempt and feedback pattern, key notes), with `math-a12-s07.md` to `math-a12-s09.md` as the nearest strand templates. Maths visuals are coded; the bottle plate from s09 returns small. No people. Pre-design pack: none, so this design does the pack work itself. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson02.sa.html` (The Normal Distribution), SHA256 `c80e763e63444ac1420243e1bdc7bedde0cca84edae267beb462f8635283f2b6`; lesson 3's hook (490 mL) and revisit card are also used (`lesson03.sa.html`, SHA256 `08101d4bc1a93fb663cde4c428cd800e2f0e2c259d39a55ec9ca13506072c758`). Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s10` ("How do graphing tools verify the empirical rule and normal CDF?", three syllabus actions, site source lesson 2, coverage gap on `ciaca4d996`: no site application graphs the explicit PDF and CDF or verifies the rule; this design fills it).

Owner rules applied: as s07 to s09 (new 2024 syllabus only; codenames and exact wording; no site module label; maths coded, objects painted; no people; one reasoning stage at a time; worked examples as separate task, model and grouped givens; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed-out mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causal conversational narration). Binding root decisions: exact values in the algebra (1/(σ√(2π)), μ ± σ), decimals only in grey readouts and app outputs; attempt cards give nothing away; the application panel stays unbranded and the narration says the area was found with an application (s08, root decision 58); the handoff scene's final frame is the video's last frame (root decision 20); s10 opens on s09's handoff (root decision 59).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, The normal distribution; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cie0de74be`: "Apply the empirical rule to make judgements and solve problems involving probabilities of normally distributed data: that for normal distributions, approximately 68% of data lie within one standard deviation of the mean, approximately 95% within two standard deviations of the mean and approximately 99.7% within three standard deviations of the mean"
- `ciaca4d996`: "Use graphing applications to explore the normal distribution, graph the probability density function f(x)=(1)/(σsqrt(2π))e^(-((x-μ)^(2))/(2σ^(2))) , verify the empirical rule and graph the cumulative distribution function"
- `cicc8fa862`: "Recognise features of the normal curve, and identify the global maximum and points of inflection"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s09's handoff frame (the fills' bell N(500, 64) with dashed marks at 492 and 508, 484 and 516, 476 and 524, the inner region tinted, "?" marks, chip "Next: how much area lies within one, two and three σ?"; `math-a12-s09.md` scene 14). Reads the normal PDF's parts (the power of e as minus the squared distance over 2σ², which gives symmetry and positive tails; the front factor fixes the area) and graphs it in an unbranded application (`ciaca4d996`); finds the global maximum at x = μ from the sign of f′ (`cicc8fa862`); finds the points of inflection at x = μ ± σ from the sign of f″ (`cicc8fa862`); measures the areas within one, two and three σ with the application (0.6827, 0.9545, 0.9973) and shows they repeat for another normal curve, with the reason (slide and stretch) (`ciaca4d996` "verify the empirical rule"); states the empirical rule with "approximately" and the one-sided tails 16%, 2.5%, 0.15% (`cie0de74be`); solves site lesson 2 problem 1 (heights N(170, 8²)) and makes two judgements (a 196 cm student; the 490 mL underfill bounded between 2.5% and 16%, site lesson 3 hook) (`cie0de74be`); graphs the CDF as an S-curve and reads F(490) = 0.1056 from the application (`ciaca4d996`). Stops at the empirical rule, the PDF's features and the CDF read from an application. Not taught: z-scores, the standard normal and tables (s11); finding μ or σ from a probability (s12). The PDF's area of exactly 1 is stated, not proved.

## Decisions

- **Learner question kept (outline).** "How do graphing tools verify the empirical rule and normal CDF?" The answer, built in order: the application needs the PDF, and each part of the formula has a job (2); calculus places the peak at μ (3) and the change of bend at μ ± σ (4); the application measures the areas inside one, two and three σ (5); the same areas appear for every normal curve, because sliding and stretching keep them (6); rounding them gives the empirical rule, and halving what's outside gives the tails (7); the rule solves problems (8) and supports judgements, but gives only a range off the marks (9); the CDF, graphed by the application, gives the area to the left of any value (10).
- **Hook (continuity, root decision 59).** s09's handoff question returns unchanged. "There's no simple area formula for it" is the reason for the tool: the normal PDF has no antiderivative among the course's functions (author note b), so areas are found numerically (application) or from tables (s11). The site's lesson 2 IQ hook is not used (s11 and s12 use other contexts; IQ is avoided as a context throughout this strand).
- **The PDF's parts (`ciaca4d996`).** The formula is written exactly as the syllabus prints it (typeset f(x) = (1/(σ√(2π))) e^(−(x − μ)²/(2σ²))). One job per part: the squared distance gives symmetry (equal distances square to equal values); the minus sign makes the power zero at μ and more negative further out, so f falls towards 0; e to any power is positive, so the tails never reach the axis (s09's "forever", now with its reason); the front factor makes the total area 1 (stated; grey tag "chosen so the area is 1", author note b). The fills' version f(x) = (1/(8√(2π))) e^(−(x − 500)²/128) types into `ToolPanel` graph mode and the bell redraws exactly over s09's curve.
- **Global maximum (`cicc8fa862`; calculus from the d strand).** Chain rule: f′(x) = −((x − μ)/σ²) f(x). Because f(x) > 0, the sign of f′ is the sign of −(x − μ): positive for x < μ, negative for x > μ. So f rises up to μ and falls after it: the maximum at x = μ is global, not only local (one stationary point, and the sign never changes back). Height 1/(σ√(2π)), exact; grey readout "≈ 0.0499" for σ = 8. `DerivativeCheck` style sign strip (+ | 0 | −) under the axis.
- **Points of inflection (`cicc8fa862`).** Product rule on f′: f″(x) = −(1/σ²) f(x) − ((x − μ)/σ²) f′(x) = (f(x)/σ⁴)((x − μ)² − σ²). One line shows the product rule with f′ substituted, the next the factorised form (one stage each). Because f(x)/σ⁴ > 0, the bracket decides the sign: zero at x = μ ± σ, negative between (concave down), positive outside (concave up), so the concavity changes and both are points of inflection. For the fills, 492 and 508: s09's first pair of marks. "One sigma is where the bell changes its bend" is the visual meaning of σ (site lesson 2 card 05: "Inflection points at μ − σ and μ + σ, where the curve changes from concave down to concave up"). `ConcavityTint` (d16) tints the cap and the two tails. "Cap" is used once after "concave down" (root decision 10).
- **Verifying the rule (`ciaca4d996`).** `ToolPanel` input/output mode: "area under f from 492 to 508" returns 0.6827; 484 to 516 returns 0.9545; 476 to 524 returns 0.9973 (author note c), each shading on the bell as it returns. A second curve (apples, N(150, 15²), site lesson 2 Q1's apples) returns 0.6827 for 135 to 165. The reason is spoken: μ slides the bell, σ stretches it sideways and squashes it down by the same factor (s09's σ stretch, "area = 1" fixed), so the area between matching marks (μ − kσ to μ + kσ) is unchanged; "measured in sigmas from the mean, every normal curve is the same curve". This also prepares s11's standardising without naming z.
- **The empirical rule (`cie0de74be`, wording kept).** Spoken with "approximately" each time, then "approximate, because the app's values are sixty-eight point two seven, and so on" (site card 06's precision note; trap 03). Tails by symmetry: outside 1σ is 32%, so 16% each side; 2σ: 5%, 2.5%; 3σ: 0.3%, 0.15% (site card 06's table). `TailLadder` (new) shows the outside amount splitting into two equal tails.
- **Worked problem (site lesson 2 problem 1, numbers unchanged).** H ∼ N(170, 8²) cm (written N(170, 8²) as the site does, with a grey "variance 64"): (a) P(162 < H < 178) ≈ 68%; (b) P(H > 186) ≈ 2.5%; (c) about 97.5% of students are shorter than 186 cm (the site's part (c), shown on screen as a consequence, not spoken and not a separate inverse question). Task strip, model and grouped givens are separate (task strip top; "H ∼ N(170, 8²)" with grouped givens "μ = 170 cm, σ = 8 cm"; marks drawn at 162, 178, 186 one stage at a time).
- **Judgements (`cie0de74be` "make judgements").** (1) A 196 cm student: above μ + 3σ = 194, where only about 0.15% lie: "very unusual". (2) Site lesson 3's hook (fills N(500, 64), underfilled below 490): 490 is between 492 (μ − σ) and 484 (μ − 2σ), so the tail is between 2.5% and 16% (site lesson 3 revisit card). The rule gives a range, which motivates the CDF.
- **The CDF (`ciaca4d996`).** F(x) = P(X ≤ x), the area to the left (s05, s06). `AccumulationTracer` sweeps the shaded area left to right while the application draws F: near 0 on the left, F(500) = 0.5 (half the area each side, s09), steepest at μ because F′ = f (s06) and f is highest at μ, F(492) ≈ 0.1587 and F(508) ≈ 0.8413 (the rule's 16% and 84%), levelling towards 1 without reaching it. F(490) = 0.1056 read from the application: about 10.6% underfilled (site lesson 3's revisit card: "approximately 10.6%"). The input line is plain text ("cdf of f at 490"), no brand.
- **Attempts (original).** (A1) "The masses, X g, of tomatoes are modelled by X ∼ N(80, 36). Use the empirical rule to find, approximately, P(68 < X < 92) and P(X > 86)." σ = 6; 68 and 92 are μ ± 2σ: ≈ 95%; 86 is μ + σ: ≈ 16%. Crossed: "P(X > 86) ≈ 32%" (counted both tails). (A2) "A normal random variable X has probability density function f(x) = (1/(5√(2π))) e^(−(x − 40)²/50). State the coordinates of the global maximum of the graph of f, and the x-values of its points of inflection." μ = 40, σ = 5 (front factor; check 2σ² = 50); maximum (40, 1/(5√(2π))), grey ≈ 0.0798; inflection at x = 35 and x = 45. Crossed: "x = 40 ± √50" (read 50 as σ²). Neither card shows a curve, marks or the answer form.
- **Mistake scene:** none separate. "The empirical rule is exact" (7); "the tail beyond one σ is 32%" (7; A1 crossed); "the rule gives any probability" (9); "the inflection points are at the tails" (4); "50 in the formula is σ²" (A2 crossed).
- **Memory aid.** "Sixty-eight, ninety-five, ninety-nine point seven. For a tail, find what's outside, then halve it." See "Memory aid check".
- **Handoff (outline next: s11, "How do z-scores compare outcomes and locate tail probabilities?").** Scene 16: two bells side by side, the fills N(500, 64) with 490 marked ("10 mL below") and the chocolate bars N(250, 25) from s09's attempt 2 with 242 marked ("8 g below"), each left tail tinted with "?", chip "Next: which is further out, and how much area lies beyond it?". No z-value or tail probability is shown. This is s11's opening frame.
- **Site sources used:** lesson 2 card 02 and card 06 (the rule, the precision note 68.27%, 95.45%, 99.73%, the one-sided tails table 16%, 2.5%, 0.15%), card 05 (inflection points at μ ± σ; properties), trap 03 (the rule is approximate), problem 1 (heights N(170, 8²): 162 to 178, above 186, 97.5% below 186), Q1 (apples N(150, 15²), reused only as the second curve); lesson 3 hook and revisit card (fills N(500, 8²), below 490 between 2.5% and 16%, about 10.6%). Not used: z-scores and the standard normal (lesson 2 card 07, s11), tables and the inverse normal (lesson 3, s11 and s12), IQ contexts.
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`; s09's items 1 and 2 are related but at other locations):** (1) Lesson 2 header lead: "Master the empirical rule (68–95–99.7%) and the z-score, and you unlock every normal probability problem without a calculator." Most normal probabilities need tables or technology (lesson 3's own hook needs a table for 490 mL). Suggested: "and you can estimate many normal probabilities without a calculator." (2) Lesson 2 card 07 lead: "the empirical rule works only when values happen to land exactly at μ ± kσ". The rule also bounds a probability between marks (lesson 3's own revisit card does this for 490 mL). Suggested: "the empirical rule gives exact-looking answers only when values land at μ ± kσ; between marks it gives a range." (3) The site never graphs the explicit PDF or the CDF in an application (outline gap on `ciaca4d996`); not an error, a coverage gap this video fills.
- **Cause chain taught, in order:** (1) the area question needs a tool, because the curve has no simple area formula (1); (2) the PDF's power is minus a squared distance, so the curve is symmetric, highest at μ and positive everywhere; the front factor fixes the area (2); (3) f′ has the sign of −(x − μ), so μ is the global maximum (3); (4) f″ has the sign of (x − μ)² − σ², so the bend changes at μ ± σ (4); (5) the application measures 0.6827, 0.9545, 0.9973 (5); (6) sliding and stretching keep those areas, so they hold for every normal curve (6); (7) rounding gives the rule, and symmetry halves the outside (7); (8) the rule solves problems on the marks (8) and gives ranges between them (9); (9) the CDF accumulates area, so it is S-shaped and gives any left area (10); (10) memory aid (11).
- **Entry knowledge (draft route `entryKnowledge`):** s09 (the normal curve's shape, X ∼ N(μ, σ²) with the variance second, shaded tails to ±∞, symmetry); s05 and s06 (probability as area, CDF as area to the left, F′ = f, median at F = 0.5); d strand (chain and product rules with e^(u), stationary points, concavity and points of inflection from f″); s08 (stating that an online application was used for an integral).
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s10`; playlistOrder 62; mainLearnerQuestion as above; syllabusActionIds `cie0de74be`, `ciaca4d996`, `cicc8fa862`; prerequisiteVideos `math-a12-s06`, `math-a12-s09`, `math-a12-d16`; sourceLessons `random-variables/lesson02.sa.html` (with lesson 3's hook; SHAs above); startBoundary "From s09's bell with μ ± σ, μ ± 2σ, μ ± 3σ marks: how much area lies within each?"; stopBoundary "The PDF's parts; global maximum at μ from f′; inflection at μ ± σ from f″; the application's 0.6827, 0.9545, 0.9973 for two normal curves and why they match; the empirical rule with 'approximately' and its one-sided tails; site problem 1; two judgements; the CDF graphed and read at one value. No z-scores, standard normal, tables or unknown parameters."; nextHandoff "math-a12-s11: 490 mL (fills) against 242 g (chocolate bars): which is further out, and how much area lies beyond it?".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** the formula's parts lighting one at a time with their effect on the curve (the squared distance: matched points either side; the minus: the curve falling; e positive: the tail gap); the formula typing into the application and the bell redrawing (`ToolPanel` graph mode, new); a gradient sign strip under the axis (+, 0, −); the concavity tints changing at μ ± σ (`ConcavityTint`); the area queries returning and shading (`ToolPanel` input/output mode on `NormalCurve`); the apples' curve and the fills' curve morphing into each other with their σ marks locked (`NormalCurve` `matchMarks`, new); the outside amount splitting into two tails (`TailLadder`, new); marks stepping out on the heights bell; the area sweep drawing the S-curve (`AccumulationTracer` with `ToolPanel` graph mode); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`. Painted plate: the bottle (s09), small.
- **Board layout (constant):** as s09: heading top-left; graph on the left (about 1,000 × 520 px); formula, algebra, application panel and rows in the right column, one reasoning stage bright at a time. In scene 10 the CDF graph sits under the bell on the left, sharing its x axis.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Fills: X ∼ N(500, 64), σ = 8 mL; marks 492, 508 (±σ), 484, 516 (±2σ), 476, 524 (±3σ). Window x 460 to 540; density y 0 to 0.055.
  (b) PDF: f(x) = (1/(σ√(2π))) e^(−(x − μ)²/(2σ²)); ∫ f dx over ℝ = 1 (SymPy, μ = 0, σ = 1); no elementary antiderivative (the area function is written with erf, which is outside the course and not shown).
  (c) Areas (Φ from erf): within 1σ 0.682689; 2σ 0.954500; 3σ 0.997300 (application outputs to 4 dp: 0.6827, 0.9545, 0.9973). One-sided outside: 0.158655, 0.022750, 0.001350 (empirical rule: 16%, 2.5%, 0.15%).
  (d) f′(x) = −((x − μ)/σ²) f(x); f″(x) = (f(x)/σ⁴)((x − μ)² − σ²); roots of f″: μ ± σ (SymPy). Peak 1/(8√(2π)) = 0.049868; f(μ ± σ) = e^(−1/2)/(σ√(2π)) = 0.030246 for σ = 8 (not shown).
  (e) Apples: N(150, 15²); 135 to 165 gives 0.6827.
  (f) Heights (site problem 1): N(170, 8²); 162 = μ − σ, 178 = μ + σ, 186 = μ + 2σ, 194 = μ + 3σ; P(H > 186) ≈ 2.5% (exact 2.275%); P(H > 194) ≈ 0.15% (exact 0.135%).
  (g) CDF of the fills: F(492) = 0.158655, F(508) = 0.841345, F(490) = Φ(−1.25) = 0.105650 (application 4 dp: 0.1587, 0.8413, 0.1056); F(500) = 0.5.
  (h) A1: N(80, 36), σ = 6: 68 = 80 − 12, 92 = 80 + 12 (2σ): ≈ 95% (exact 0.9545); 86 = 80 + 6: ≈ 16% (exact 0.1587). Crossed 32%.
  (i) A2: 1/(5√(2π)) gives σ = 5; 2σ² = 50 ✓; maximum (40, 1/(5√(2π))) = (40, 0.079788); inflection x = 35, 45. Crossed 40 ± √50 (≈ 32.93, 47.07).
  (j) Pronunciations: "f of x equals one over sigma root two pi, times e to the power of minus x minus mu all squared, over two sigma squared" (shown, not read in full); "f prime of x"; "f double prime of x"; "one over sigma root two pi"; "four ninety-two", "five oh eight"; "zero point six eight two seven"; "capital F of x".

Main question: *We marked one, two and three σ either side of the mean. How much area lies between those marks, how can a graphing application measure and check it, and what else does the curve's formula tell us?*
Entry knowledge (s05 to s09, d strand): area as probability, the CDF, the normal curve and notation, chain and product rules, concavity.
Stops after: the PDF's features, the empirical rule measured, applied and judged, and the CDF read from an application. No z-scores or tables.
Handoff: math-a12-s11: 490 mL against 242 g, "which is further out?".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as s09: the normal curve teal; shaded probabilities `AREA_POS`; μ marker and σ marks amber (`MATH_ACCENT`); concave-down cap tint blue, concave-up tail tints green (as d16); the application panel neutral grey; the CDF curve amber; crossed red; algebra ink, current line bright, earlier lines dim.

### 1. hook (how much area within one σ?)
> Last video ended with this question. Mark one sigma either side of the mean. How much of the area lies between those **marks**? This curve has no simple area formula, so today a graphing app does the measuring. Then we'll turn what it finds into a rule you can use with no technology at **all**.

Visual: opens on s09's last frame exactly (the fills' bell N(500, 64), x 460 to 540, dashed marks at 492 and 508 ("μ − σ", "μ + σ"), 484 and 516, 476 and 524, the inner region tinted, "?" marks, chip "Next: how much area lies within one, two and three σ?"). Heading writes on: "Graphing the normal curve". On "marks" the inner "?" pulses. On "no simple area formula" a grey tag "no area formula in this course". On "all" the chip moves to the top right as "How much area within 1σ, 2σ, 3σ?"; the bottle plate stands small at the top right.

### 2. the formula and its parts
> First, the app needs the equation. This is the normal probability density **function**, and each part has a job. The power of e is minus the squared distance from the mean, over two sigma squared. The same distance either side squares to the same value, so the curve is **symmetric**. Further out, the power gets more negative, so the curve drops towards **zero**. But e to any power is positive, so it never reaches the **axis**. The number in front makes the total area exactly **one**. For the fills, two sigma squared is one hundred and twenty-**eight**.

Visual: right column on "function": "f(x) = (1/(σ√(2π))) e^(−(x − μ)²/(2σ²))", large, with grey tag "normal probability density function". On "power of e" the exponent glows; under it a label "−(distance from μ)² ÷ 2σ²". On "symmetric" two points at 490 and 510 light on the bell with the same height, tag "same distance, same square". On "zero" the exponent's minus sign glows and the curve's tails darken as they fall, tag "more negative, smaller". On "axis" a zoom inset on the right tail (x 520 to 540) shows the gap to the axis, tag "e to any power > 0". On "one" the front factor glows, grey tag "chosen so the area is 1". On "eight" `ToolPanel` graph mode slides in at the lower right: its input types "f(x) = 1/(8√(2π)) e^(−(x − 500)²/128)"; the application's bell draws exactly over the bell on the left (s09's curve), grey tag "2σ² = 2 × 64 = 128".

### 3. the global maximum
> Where's the highest point? By the chain rule, f prime of x is the derivative of the power, times f of x **itself**. Since f of x is always positive, the sign of the gradient comes from minus x minus mu. Left of the mean the gradient is positive, so the curve **rises**. Right of the mean it's negative, so the curve **falls**. It rises all the way to mu and falls all the way after, so x equals mu is the global maximum, not just a local one. Its height is one over sigma root two **pi**.

Visual: camera continue (the application panel shrinks to a corner icon). Right column: on "itself" "f′(x) = (derivative of the power) × f(x)" in grey, then directly under it the line "f′(x) = −((x − μ)/σ²) f(x)" (current line bright). On "always positive" "f(x) > 0" ticks in, and "−(x − μ)" boxes. A sign strip slides under the x axis: on "rises" the left part reads "+" with an up arrow along the curve's left side; on "falls" the right part reads "−" with a down arrow; "0" at μ. On "global maximum" the peak glows amber, row "global maximum at x = μ"; on "pi" boxed "f(μ) = 1/(σ√(2π))", grey readout "fills: 1/(8√(2π)) ≈ 0.0499" (screen only).

### 4. the points of inflection
> Now the points of inflection. Differentiate again with the product rule, and **factorise**. Again f of x is positive, so the sign of the second derivative comes from this **bracket**. It's zero when x minus mu squared equals sigma squared, so at mu plus or minus **sigma**. Between those points the bracket is negative, so the curve is concave down, like a cap over the **peak**. Outside them it's concave up, and the tails flatten **out**. The concavity changes, so these are points of inflection, at four ninety-two and five oh **eight**. So one sigma is where the bell changes its **bend**.

Visual: camera continue. The f′ line dims and stays. On "product rule" a line "f″(x) = −(1/σ²) f(x) − ((x − μ)/σ²) f′(x)" writes, then on "factorise" it dims and the factorised line writes: "f″(x) = (f(x)/σ⁴)((x − μ)² − σ²)" (current line bright). On "bracket" "((x − μ)² − σ²)" boxes; "f(x)/σ⁴ > 0" ticks in. On "sigma" the row "(x − μ)² = σ², so x = μ ± σ". On "peak" `ConcavityTint` tints the cap between the two points blue, tag "concave down"; on "out" the tails tint green, tag "concave up". On "inflection" two dots appear on the curve, row "points of inflection at x = μ ± σ". On "eight" s09's dashed marks at 492 and 508 return and pass exactly through the two dots. On "bend" the two dots pulse, tag "one σ: where the bend changes".

### 5. the application measures the areas
> Back to the question. Ask the app for the area from four ninety-two to five oh eight. It integrates numerically and returns zero point six eight two **seven**. So about sixty-eight percent of fills land within one sigma. Two sigma gives zero point nine five four **five**, and three sigma gives zero point nine nine seven **three**. If you use an app in an answer, say that you **did**.

Visual: camera continue; the algebra dims to two small boxed rows ("max at x = μ", "inflection at x = μ ± σ"). `ToolPanel` input/output mode returns to full size: the input types "area under f from 492 to 508"; on "seven" the output "0.6827" returns and the region 492 to 508 shades on the bell (`AREA_POS`), with a grey tag "≈ 68%". On "five" (first) the input "484 to 516" returns "0.9545" and the shading widens; on "three" "476 to 524" returns "0.9973" and the shading widens to the outer marks. A small results table builds in the right column: "±1σ: 0.6827", "±2σ: 0.9545", "±3σ: 0.9973". On "did" a grey chip "write: found using a graphing application".

### 6. the same areas for every normal curve
> Is that just these bottles? Try apples, with mean one fifty grams and standard deviation fifteen. From one thirty-five to one sixty-five, the app gives zero point six eight two seven **again**. Here's why. Changing mu slides the bell along. Changing sigma stretches it sideways and squashes it down by the same factor, so the area between matching marks doesn't **change**. Measured in sigmas from the mean, every normal curve is the same **curve**.

Visual: clear change. Left: the apples' bell N(150, 15²) (x 105 to 195) with marks at 135 and 165. The application's input "area under f from 135 to 165 (μ = 150, σ = 15)"; on "again" the output "0.6827" returns, the region shades, and the fills' result from scene 5 sits beside it, both boxed. On "slides" the fills' bell ghost slides to sit over the apples' centre (`NormalCurve` `matchMarks`); on "change" it stretches sideways by 15/8 and squashes down by 8/15 until it lies exactly on the apples' bell, the ±σ marks staying locked to the curve and the shaded region keeping its area readout "0.6827" throughout. On "curve" the x axis relabels to "μ − 3σ, μ − 2σ, μ − σ, μ, μ + σ, μ + 2σ, μ + 3σ" in place of numbers, and the results table's three rows glow with a grey tag "same for every normal curve".

### 7. the empirical rule and its tails
> That's the empirical rule. For any normal distribution, approximately sixty-eight percent of the data lie within one standard deviation of the mean, approximately ninety-five percent within two, and approximately ninety-nine point seven percent within **three**. They're approximate, because the app gave sixty-eight point two seven, and so on. Symmetry gives the tails. Outside one sigma is thirty-two percent, so sixteen percent in each **tail**. Outside two sigma, two and a half percent each **side**. Outside three sigma, zero point one five percent each **side**.

Visual: camera continue on the general bell (x labelled in σ). On "three" three nested bands shade (68%, 95%, 99.7%) with labels, and the rule writes boxed in the right column: "approximately 68% within μ ± σ, 95% within μ ± 2σ, 99.7% within μ ± 3σ". On "and so on" a grey row "app: 68.27%, 95.45%, 99.73%". On "tail" `TailLadder`: the region outside ±σ lifts as "32%", splits into two equal halves that drop into the two tails, "16%" each; on "side" (first) the same for ±2σ: "5%" into "2.5%" and "2.5%"; on "side" (second) "0.3%" into "0.15%" and "0.15%". The tail row reads "16% | 2.5% | 0.15% each side".

### 8. a problem on the marks
> Let's use it. Heights of Year 12 students are normal, with mean one seventy centimetres and standard deviation eight. What percentage are between one sixty-two and one seventy-**eight**? That's eight either side, one sigma, so about sixty-eight **percent**. What percentage are taller than one eighty-**six**? That's two eights above, so two sigma. Outside two sigma is five percent, and half of that is above, so about two point five **percent**.

Visual: clear change. Task strip top: "Heights: find P(162 < H < 178) and P(H > 186)." Right column, model "H ∼ N(170, 8²)" with grouped givens under it: "μ = 170 cm", "σ = 8 cm" (grey "variance 64"). Left: the heights bell (x 140 to 200). On "eight" (first) marks at 162 and 178; on the next sentence rows "162 = 170 − 8 = μ − σ", "178 = 170 + 8 = μ + σ"; on "percent" the region shades, boxed "P(162 < H < 178) ≈ 68%". The first result dims. On "six" a mark at 186; on "two eights above" row "186 = 170 + 2 × 8 = μ + 2σ"; on "percent" (second) the outside of ±2σ tints lightly, then only the right tail shades, boxed "P(H > 186) ≈ 5% ÷ 2 = 2.5%". After the box, the region left of 186 shades lightly with a grey row "so P(H < 186) ≈ 97.5%" (screen only, site part (c)).

### 9. judgements, and where the rule stops
> The rule also helps you judge. Is a student of one ninety-six centimetres unusual? Three sigma above is one ninety-four, and only about zero point one five percent are taller, so yes, very **unusual**. Now underfilled bottles, below four ninety. Four ninety sits between one sigma below and two sigma **below**. So that tail is between two point five and sixteen **percent**. The rule gives a range, not a value. For the value, we need the area to the left of four **ninety**.

Visual: camera continue on the heights bell. A mark at 194 ("μ + 3σ") and a dot at 196 beyond it; on "unusual" the tail beyond 194 shades thinly, boxed "P(H > 194) ≈ 0.15%", tag "very unusual". Clear change on "Now the underfilled": the fills' bell N(500, 64) with the bottle plate small, marks at 484 and 492, a red dot at 490 between them, tags "μ − σ = 492" and "μ − 2σ = 484". On "below" (second) two shaded tails flash in turn: below 492 ("about 16%") and below 484 ("about 2.5%"). On "percent" the tail below 490 shades between them, row "2.5% < P(X < 490) < 16%". On "ninety" a "?" over the tail.

### 10. the CDF, graphed
> That's the cumulative distribution function. Capital F of x is the probability that X is at most x, the area to the left of **x**. Graph it in the app, and it draws an S **shape**. It starts near zero, and at the mean it's exactly a half, because half the area is on each **side**. Its slope is the density, so it climbs fastest at mu, where the bell is **highest**. Then it levels off towards **one**. At four ninety, the app reads zero point one zero five **six**, so about ten point six percent of bottles are underfilled.

Visual: camera continue; the bell moves to the upper half; a second graph appears under it sharing the x axis (y 0 to 1). On "x" a row "F(x) = P(X ≤ x) = area to the left of x" (s06). On "shape" `AccumulationTracer` sweeps a vertical line left to right over the bell, the shaded area growing, while the lower graph draws F (amber) point by point; the application's input line shows "graph cdf of f". On "side" a dot at (500, 0.5), the bell's halves tinting "½ | ½". On "highest" a tangent segment on F at 500, tag "steepest: slope of F = f". On "one" a dashed line at F = 1 (tag "never reaches 1"), and dots at (492, 0.1587) and (508, 0.8413) with grey readouts and tags "≈ 16%" and "≈ 84% = 50% + 34%", matching the rule (screen only). On "six" the tracer stops at 490: the bell's left tail shades, the F graph's dot at (490, 0.1056), boxed "P(X < 490) = F(490) ≈ 0.1056", and on the last sentence "about 10.6% underfilled" (site lesson 3).

### 11. memory aid
> Here's a way to remember the rule. Sixty-eight, ninety-five, ninety-nine point seven, for one, two and three sigma. And for a tail, find what's outside, then halve it.

Visual: camera pull back to the general bell with its three bands. The handwritten words write large: "68, 95, 99.7" over the bands (1σ, 2σ, 3σ), then "Outside, then halve." with the 32% splitting into 16% and 16% (`TailLadder` replay, small). Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Use the empirical rule. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The masses, X g, of tomatoes are modelled by X ∼ N(80, 36). Use the empirical rule to find, approximately, P(68 < X < 92) and P(X > 86)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no curve, no marks, no σ).

### 13. feedback 1 (brief)
> The second number is the variance, so sigma is six. Sixty-eight and ninety-two are twelve either side of eighty, which is two **sigma**. So that probability is about ninety-five **percent**. Eighty-six is one sigma above. Outside one sigma is thirty-two percent, and half of that is above, so about sixteen **percent**. Thirty-two percent is wrong. That counts both **tails**.

Visual: card shrinks to the top. "36" underlined, row "σ = √36 = 6"; "68" and "92" underlined; on "sigma" a small bell at 80 with marks at 68 and 92, row "80 ± 12 = μ ± 2σ"; on "percent" (first) boxed "P(68 < X < 92) ≈ 95%". "86" underlined, row "86 = 80 + 6 = μ + σ"; on "percent" (second) the right tail shades, boxed "P(X > 86) ≈ 32% ÷ 2 = 16%". On "tails" a chip "P(X > 86) ≈ 32%" fades in and is crossed (caption "that's both tails"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Read the features from the formula. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A normal random variable X has probability density function f(x) = (1/(5√(2π))) e^(−(x − 40)²/50). State the coordinates of the global maximum of the graph of f, and the x-values of its points of inflection." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no curve, no labels on the formula).

### 15. feedback 2 (brief)
> Match it to the general formula. The mean is forty, and the number in front has five where sigma goes, so sigma is **five**. Check: two sigma squared is **fifty**. The global maximum is at x equals forty, with height one over five root two **pi**. The points of inflection are one sigma either side, at thirty-five and forty-**five**. Forty plus or minus root fifty is wrong. Fifty is two sigma squared, not sigma **squared**.

Visual: card shrinks to the top. The general formula appears small above the given one, matching parts linked by thin lines. "40" underlined, row "μ = 40"; on "five" "5" in the front factor underlined, row "σ = 5"; on "fifty" row "2σ² = 2 × 25 = 50 ✓". On "pi" a small bell with its peak dot, boxed "maximum (40, 1/(5√(2π)))", grey "≈ 0.0798". On "five" (second) two inflection dots, boxed "x = 35 and x = 45". On "squared" a chip "x = 40 ± √50" fades in and is crossed (caption "50 is 2σ²"). Hold about 1 second.

### 16. handoff
> So the app shows where the curve peaks and bends, verifies the empirical rule, and graphs the CDF. Next, a new question. Four ninety is ten millilitres below its mean. A two forty-two gram chocolate bar is eight grams below **its** mean. Which is further out, and how much area lies beyond **each**?

Visual: the boxed rule "68, 95, 99.7" and "inflection at μ ± σ" show small at the top, then fade on "Next". Board clears to two bells side by side, same height on screen: left the fills N(500, 64) with 490 marked ("10 mL below"), right the chocolate bars N(250, 25) with 242 marked ("8 g below", s09 attempt 2). On "its" both left tails tint with "?" on each. On "each" chip "Next: which is further out, and how much area lies beyond it?". No z-value or probability is shown or spoken. Hold about 2 seconds. This is s11's opening frame; scene 17 returns to it silently after the notes.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Normal PDF: f(x) = (1/(σ√(2π))) e^(−(x − μ)²/(2σ²)). Global maximum at x = μ, height 1/(σ√(2π)).
2. Points of inflection at x = μ ± σ: concave down between them, concave up outside.
3. Empirical rule: approximately 68%, 95% and 99.7% of data lie within 1, 2 and 3 standard deviations of the mean. Each tail outside: about 16%, 2.5%, 0.15%.
4. CDF: F(x) = P(X ≤ x), the area to the left. S-shaped, F(μ) = 0.5, steepest at μ. A graphing application gives exact values: say that you used one.

Memory aid (large, on the notes screen): *68, 95, 99.7. Outside, then halve.*

Visual (end of the hold, silent, no added speech): the key notes cross-fade (1 s, root decision 20) back to scene 16's frame exactly (the two bells, 490 "10 mL below" and 242 "8 g below", tinted tails with "?", chip "Next: which is further out, and how much area lies beyond it?"). This is the final frame and s11's opening frame.

## Teaching checks

- **Does it explain causes?** Why a tool: no simple area formula (1). Why the curve is symmetric: equal distances square to equal values (2). Why it never reaches the axis: e to any power is positive (2). Why μ is the global maximum: f′ has the sign of −(x − μ), positive then negative, with f > 0 (3). Why the bend changes at μ ± σ: f″ has the sign of (x − μ)² − σ² (4). Why the percentages are the same for every normal curve: sliding and equal-factor stretching keep the area between matching marks (6). Why each tail is half the outside: symmetry (7). Why 490 gives only a range: it isn't on a mark (9). Why the CDF is S-shaped and steepest at μ: it accumulates area, and its slope is f (10).
- **Misconceptions addressed:** "the empirical rule is exact" (7); "the one-sided tail is 32%" (7; A1 crossed); "the rule gives every probability" (9); "inflection points are out in the tails" (4); "the 2σ² in the formula is σ²" (A2 crossed); "the CDF is a bell too" (10).
- **One idea at a time:** one tool (1), one formula reading (2), one derivative (3), one second derivative (4), one measurement (5), one reason (6), one rule (7), one problem (8), one judgement pair (9), one new graph (10). Only the needed earlier results stay bright: σ = 8 and the marks in 3 to 5 and 9 to 10; the boxed rule in 8 and 9.
- **Video makes it easier:** the student sees each formula part change the curve (2), the sign strip turn from + to − at the peak (3), the cap and tail tints meet exactly at the σ marks (4), the areas return and shade (5), one bell stretch onto another with its area fixed (6), the outside split into two tails (7), and the S-curve draw itself from the growing area (10).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible, 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 28 s and 32 s (scenes 13 and 15, including the 1 s holds).
- **Avoided double teaching:** s09's shape, notation and shading are used, not re-taught; the chain and product rules and concavity (d strand) are used, not re-taught; s06's CDF and F′ = f are used.
- **Syllabus coverage:** `cie0de74be` (7, 8, 9; A1; key note 3); `ciaca4d996` (2, 5, 6, 10; key notes 1, 4); `cicc8fa862` (3, 4; A2; key notes 1, 2).
- **Out of scope by design:** z-scores, the standard normal and tables (s11); finding μ or σ (s12); a proof that the area is 1.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The masses, X g, of tomatoes are modelled by X ∼ N(80, 36). Use the empirical rule to find, approximately, P(68 < X < 92) and P(X > 86)."
Model answer: σ = √36 = 6. 68 = 80 − 2(6) and 92 = 80 + 2(6), so P(68 < X < 92) ≈ 95%. 86 = 80 + 6 = μ + σ; about 32% lies outside μ ± σ, half in each tail, so P(X > 86) ≈ 16%. Classic mistake (crossed): "P(X > 86) ≈ 32%" (both tails).

**Attempt 2 (scene 14; original wording, HSC style, 2 marks suggested).** "A normal random variable X has probability density function f(x) = (1/(5√(2π))) e^(−(x − 40)²/50). State the coordinates of the global maximum of the graph of f, and the x-values of its points of inflection."
Model answer: comparing with f(x) = (1/(σ√(2π))) e^(−(x − μ)²/(2σ²)): μ = 40, σ = 5 (check 2σ² = 50). The global maximum is at (40, 1/(5√(2π))). The points of inflection are at x = μ ± σ: x = 35 and x = 45. Classic mistake (crossed): "x = 40 ± √50" (50 is 2σ², not σ²).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Fills | N(500, 64), σ = 8 mL; 2σ² = 128; marks 492, 508; 484, 516; 476, 524 | 1 to 5, 9, 10, 16 |
| PDF peak | 1/(σ√(2π)); 1/(8√(2π)) ≈ 0.0499 (grey) | 3 |
| Derivatives | f′(x) = −((x − μ)/σ²) f(x); f″(x) = (f(x)/σ⁴)((x − μ)² − σ²); inflection at μ ± σ | 3, 4 |
| Application areas | 0.6827, 0.9545, 0.9973; app percentages 68.27%, 95.45%, 99.73% | 5, 7 |
| Apples | N(150, 15²); 135 to 165 gives 0.6827; stretch 15/8, squash 8/15 | 6 |
| Empirical rule | approximately 68%, 95%, 99.7%; outside 32%, 5%, 0.3%; each tail 16%, 2.5%, 0.15% | 7, 8, 9, 11, 13 |
| Heights (site problem 1) | N(170, 8²); 162, 178 (±σ): ≈ 68%; 186 (+2σ): ≈ 2.5%; below 186 ≈ 97.5%; 194 (+3σ), 196: ≈ 0.15% | 8, 9 |
| Fills below 490 | between 2.5% and 16%; F(490) ≈ 0.1056, about 10.6% | 9, 10 |
| CDF | F(500) = 0.5; F(492) ≈ 0.1587 (≈ 16%); F(508) ≈ 0.8413 (≈ 84%) | 10 |
| A1 | N(80, 36): σ = 6; 68, 92 = μ ± 2σ: ≈ 95%; 86 = μ + σ: ≈ 16%; crossed 32% | 12, 13 |
| A2 | μ = 40, σ = 5, 2σ² = 50; maximum (40, 1/(5√(2π))) ≈ (40, 0.0798); inflection x = 35, 45; crossed 40 ± √50 | 14, 15 |
| Handoff | 490 (10 mL below 500); 242 (8 g below 250, N(250, 25)) | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 and SymPy (3 Nov, scratchpad script `s10s12/nums_s10s12.py`); Codex to re-check.

- SymPy: f′/f = (μ − x)/σ²; f″/f = (x − μ − σ)(x − μ + σ)/σ⁴; roots of f″: μ − σ, μ + σ; ∫ f over ℝ = 1.
- 1/(8√(2π)) = 0.049868; 1/(5√(2π)) = 0.079788.
- Within kσ: 2Φ(1) − 1 = 0.682689; 2Φ(2) − 1 = 0.954500; 2Φ(3) − 1 = 0.997300. Outside each side: 0.158655, 0.022750, 0.001350.
- Fills: 500 ± 8, ± 16, ± 24; 2 × 64 = 128; Φ(−1.25) = 0.105650; F(492) = 0.158655, F(508) = 0.841345.
- Apples: 150 ± 15 gives 0.682689.
- Heights: 170 ± 8 = 162, 178; 170 + 16 = 186; 170 + 24 = 194.
- A1: √36 = 6; 80 ± 12 = 68, 92; 80 + 6 = 86.
- A2: 2 × 5² = 50; √50 = 7.071 (crossed values 32.93, 47.07).

## Memory aid check

- **"68, 95, 99.7. Outside, then halve."** Meaning, as said in scene 11: the three percentages go with one, two and three σ either side of the mean; for a one-sided tail, take the percentage outside the interval and halve it. Assumptions checked: the percentages are approximate and true for every normal distribution (scenes 5 to 7); "halve" relies on the symmetry of the normal curve (s09), so it is not offered for skewed distributions; it gives tails beyond μ ± kσ only, not between marks (scene 9 says so). It helps a new case: A1's P(X > 86) is "32% outside, then halve". Introduced after the measurement and the reason (scenes 5 to 7).
- **Considered, not used:** "inflection is one σ out" as a second aid (it is key note 2 and A2's lesson; one aid per video).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): see the count line below.

**6,032 characters** (6,048 with the joining spaces), 17 scenes. Characters per scene (1 to 17): 287, 534, 472, 565, 370, 437, 553, 431, 460, 501, 167, 56, 360, 67, 406, 291, 75. At 13.3 characters per second the speech is about 454 s; add about 14 s of settling for the formula-part highlights (2), the sign strip (3), the concavity tints (4), the morph (6), the tail split (7) and the CDF sweep (10), 20 s for two countdowns, 6 s of short holds (11, 13, 15, 16) and about 62 s more for the quiet notes (about 102 s of holds): **about 556 s**, inside the 5,500 to 6,800 band and under the 570 s cap. The first full draft counted 7,622 (about 675 s); Revision 1 cut repetition, not content: spoken mark values that are on screen, the f′ and f″ expressions read aloud (now on screen with their cue words), the second-derivative reading, the heights' 97.5% line (now screen only), the CDF's 16% and 84% readings (screen only) and the closing sentence of scene 6. Scene 4 is the longest; the factorised line must be on screen before "this bracket". Feedback: scene 13 about 28 s and scene 15 about 32 s including the 1 s holds.

## Scene list and build ids

Lesson key `m-a12s10` (route math-a12-s10). Suggested explainer folder `src/explainer/lessons/math-a12-s10` and build folder `docs/production/claude-pm/lessons/m-a12s10` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 17 scene headings, all `### N.`): hook, pdf-parts, global-maximum, inflection-points, app-areas, every-normal, empirical-rule, heights-problem, judgements, cdf-graph, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s09's last frame continues into scene 1 (same bell); 1 to 2 camera continue (right column); 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 clear change (apples); 6 to 7 camera continue (σ-labelled bell); 7 to 8 clear change (heights); 8 to 9 camera continue, then a clear change to the fills within scene 9; 9 to 10 camera continue (the bell moves up, the CDF graph joins); 10 to 11 camera pull back; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s10-learning-review.md`, `science_check` = `checks/m-a12s10-maths-check.md`.

## Assets

Have (after the s01 to s09, d16, i06, i08 and i12 builds): `NormalCurve`, `TailMirror`, `AreaFill` (open ends), `AccumulationTracer`, `ConcavityTint`, `ToolPanel` (input/output mode); shared `FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`. Painted plate `maths-a12-bottle.png` (s09).

New: `ToolPanel` graph mode; `NormalCurve` props `bands`, `inflectionMarks`, `matchMarks`, `sigmaAxisLabels`; `TailLadder`; a gradient sign strip (reuse the d-strand sign-diagram part if one exists; otherwise `SignStrip` below). No new painted plate.

## Codex asset brief

**A. Coded parts (add to the next maths kit brief, with the s09 parts; same rules: exported through `kit.tsx`, pilot from this design's numbers, numerical checks, desktop and phone-landscape stills, silent motion sample). Every displayed value is formatted from the same data that sets the geometry. s11 and s12 reuse `NormalCurve` and `ToolPanel`.**

1. **`ToolPanel` graph mode** (scenes 2, 5, 6, 10). The unbranded panel (no logo, no real product's layout or fonts; fixed caption "graphing application") with an input line that types an author string ("f(x) = 1/(8√(2π)) e^(−(x − 500)²/128)", "area under f from 492 to 508", "graph cdf of f") and a linked plot: graph mode draws the typed function onto the lesson's `GraphLayer` (not a separate screen), so it lies exactly over the existing curve. Area outputs are author strings checked by the build against a numerical integral (tolerance 5e-5 at 4 dp). Checks: 0.6827, 0.9545, 0.9973 for the fills; 0.6827 for N(150, 15²) on [135, 165]; F(490) = 0.1056, F(492) = 0.1587, F(508) = 0.8413.
2. **`NormalCurve` additions** (scenes 4 to 7, 10). `inflectionMarks` (dots at μ ± σ, computed from μ and σ, checked against the sign change of a numerical f″); `bands` ({k: 1 | 2 | 3, label}[]: nested shaded bands with author labels "68%", "95%", "99.7%"); `matchMarks` ({from: {mu, sigma}, to: {mu, sigma}, at, duration}: morphs one bell into another by sliding then stretching x by σ₂/σ₁ and y by σ₁/σ₂, with the ±kσ marks and any shaded band locked to the curve; an area readout recomputed every frame stays at the author value); `sigmaAxisLabels` (replaces numeric ticks with μ − 3σ, ..., μ + 3σ). Checks: inflection dots at 492 and 508 for N(500, 64); the morph keeps the band area at 0.6827 within 1e-4 at every frame; the morph ends exactly on N(150, 15²).
3. **`TailLadder`** (scenes 7, 11). For a band ±kσ, lifts the outside region as one labelled piece ("32%"), splits it into two mirror halves and drops each into its tail with labels ("16%"). Uses `TailMirror`'s symmetry check (refuses to label halves equal for a non-symmetric curve). Labels author-supplied: 32/16, 5/2.5, 0.3/0.15.
4. **`SignStrip`** (scene 3; only if no sign-diagram part exists from d16 or d17). A thin strip under the x axis with author segments ("+" left of μ, "0" at μ, "−" right), each with a small arrow along the curve above. Checks: the boundary sits at x = μ; the signs match a numerical f′.

Existing parts used unchanged: `AccumulationTracer` (sweep line and growing area, driving the CDF plot), `ConcavityTint` (cap and tails, boundaries supplied as μ ± σ), `AreaFill`, `TailMirror` (scene 7 via `TailLadder`).

**B. Painted plates:** none new. `maths-a12-bottle.png` (s09) reused small in scenes 1, 9 and 10.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the derivative lines: f′(x) = −((x − μ)/σ²) f(x); the product-rule line f″(x) = −(1/σ²) f(x) − ((x − μ)/σ²) f′(x); the factorised f″(x) = (f(x)/σ⁴)((x − μ)² − σ²); the sign reasoning (global maximum at μ; concave down between μ ± σ, concave up outside).
3. Confirm the empirical rule is always said with "approximately" (scene 7) and the tails are stated as approximate; the app's values are 68.27%, 95.45%, 99.73%.
4. Confirm the scope of "measured in sigmas from the mean, every normal curve is the same curve" (true: every normal is a slide and equal-factor stretch of N(0, 1)); and "this curve has no simple area formula" (no elementary antiderivative; the course's functions).
5. Confirm no z-score, standard normal, table value or unknown-parameter method is stated (s11, s12); the application values are the only four-decimal probabilities.
6. Confirm the application panel shows no brand, product name or copied interface, and that the narration says to state that an application was used (scene 5).
7. Confirm both attempt questions carry every demand and given, and that neither card shows a curve, a mark or the answer form.
8. Confirm the three syllabus quotes match the crosswalk JSON exactly (including the PDF's plain-text form in `ciaca4d996`) and no site module label appears in learner copy or metadata.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text ("millilitres", "centimetres").
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Confirm the opening frame matches s09 scene 14 exactly, and the handoff (scene 16) shows no z-value or probability.

## YouTube metadata (draft)

Title: The Empirical Rule and the Normal PDF and CDF | Year 12 Maths Advanced

(Title length: 70 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson02.sa.html

How much of a normal distribution lies within one, two and three standard deviations of the mean? Read the normal probability density function part by part, use calculus to find its global maximum and its points of inflection at one standard deviation either side, then let a graphing application measure the areas and verify the empirical rule: approximately 68%, 95% and 99.7%. See why the same percentages hold for every normal curve, use them to solve problems and make judgements, and graph the S-shaped cumulative distribution function. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, the normal distribution.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the empirical rule to make judgements and solve problems involving probabilities of normally distributed data: that for normal distributions, approximately 68% of data lie within one standard deviation of the mean, approximately 95% within two standard deviations of the mean and approximately 99.7% within three standard deviations of the mean"
"Use graphing applications to explore the normal distribution, graph the probability density function f(x) = (1/(σ√(2π))) e^(−(x − μ)²/(2σ²)), verify the empirical rule and graph the cumulative distribution function"
"Recognise features of the normal curve, and identify the global maximum and points of inflection"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: The normal distribution: shape, notation and uses (previous video); concavity and points of inflection. Next: z-scores and the standard normal distribution.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Length (root).** About 556 s, under the 570 s cap. If the voiced take runs over, the named cut is scene 5's last sentence ("If you use an app in an answer, say that you did.", −49, the grey chip stays on screen) and scene 9's "The rule gives a range, not a value." (−37).
- **2. The second derivative (learning review).** Scene 4 shows the product-rule line and the factorised line, one stage each, without spoken algebra between them ("and tidy up"). If the review finds the jump too large, add a grey middle line on screen only (f′ substituted, before factoring), not narration.
- **3. Application wording (root).** "graphing application" in the caption and "the app" in speech, as s08's "online computational application". The syllabus says "graphing applications".
- **4. The apples (root).** N(150, 15²) is site lesson 2 Q1's distribution, used only as the second curve; Q1's own questions are not used, so the site's practice stays fresh.
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s05, s06, s09 and d16; check that each formula part is tied to a visible effect; that the f′ and f″ sign reasoning lands with the sign strip and tints; that the application's role is clear and honest (it measures, the rule rounds); that the morph in scene 6 gives a reason, not decoration; that the CDF's S-shape is linked to the growing area; that the cards give nothing away), then the Codex maths check and error check.
- The formula-part highlights, the sign strip, the concavity tints meeting the σ marks, the band morph and the CDF sweep carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s09's scene 14 (root decision 59); the handoff frame is s11's opening (same designer).
