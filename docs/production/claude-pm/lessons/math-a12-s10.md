# Maths A12 S10: How do graphing tools verify the empirical rule and normal CDF? The normal PDF's parts, the global maximum at μ, inflection at μ ± σ, 68%, 95% and 99.7% measured and applied, and the S-shaped CDF (design)

Status: Revision 4 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 3 (5 Nov 2026, brief 171 fixes). Not voiced (no `math-a12-s10/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s10.md`).

Narration 6,257 characters, 17 scene headings, about 554 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: tenth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 62), after s09 (the normal model, its shape and notation) and before s11 (z-scores and tables). Revision 4 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (an orchard's apples graded by mass, the site's own lesson 2 Q1 distribution N(150, 15²), measured on a painted graphing calculator whose screen carries coded readouts); graphs, tints, sign strips and algebra stay coded. No people. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson02.sa.html` (The Normal Distribution), SHA256 `c80e763e63444ac1420243e1bdc7bedde0cca84edae267beb462f8635283f2b6`; lesson 3 (`lesson03.sa.html`, SHA256 `08101d4bc1a93fb663cde4c428cd800e2f0e2c259d39a55ec9ca13506072c758`) is no longer used here (its bottle numbers are worked in s11 and s12). The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded; Codex confirms them against the live site. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s10` ("How do graphing tools verify the empirical rule and normal CDF?", three syllabus actions, site source lesson 2, coverage gap on `ciaca4d996`: no site application graphs the explicit PDF and CDF or verifies the rule; this design fills it).

Owner rules applied: new 2024 syllabus only, codenames and exact wording, no site module label; painted plates for real objects, coded graphs and algebra (the calculator's screen content is coded); no people, hands or faces; one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; causal conversational narration. Exact values in the algebra (1/(σ√(2π)), μ ± σ), decimals only in grey readouts and calculator outputs; the calculator is unbranded and the narration says to state that one was used.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, The normal distribution; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cie0de74be`: "Apply the empirical rule to make judgements and solve problems involving probabilities of normally distributed data: that for normal distributions, approximately 68% of data lie within one standard deviation of the mean, approximately 95% within two standard deviations of the mean and approximately 99.7% within three standard deviations of the mean"
- `ciaca4d996`: "Use graphing applications to explore the normal distribution, graph the probability density function f(x)=(1)/(σsqrt(2π))e^(-((x-μ)^(2))/(2σ^(2))) , verify the empirical rule and graph the cumulative distribution function"
- `cicc8fa862`: "Recognise features of the normal curve, and identify the global maximum and points of inflection"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s09 Revision 4's handoff frame (the chip bags' bell N(175, 16) with violet dashed marks at 171 and 179, 167 and 183, 163 and 187, the inner region tinted, "?" marks, the chip bag, chip "Next: how much area lies within one, two and three σ?"). Brings in the anchor (apples graded by mass, N(150, 15²), site lesson 2 Q1's distribution) and a graphing calculator; reads the normal PDF's parts and graphs the apples' PDF on the calculator (`ciaca4d996`); finds the global maximum at x = μ from the sign of f′ (`cicc8fa862`); finds the points of inflection at x = μ ± σ (135 and 165) from the sign of f″ (`cicc8fa862`); measures the areas within one, two and three σ on the calculator with a live band slider (0.6827, 0.9545, 0.9973) and shows they repeat for s09's chip bags N(175, 4²), with the reason (slide and stretch) (`ciaca4d996` "verify the empirical rule"); states the empirical rule with "approximately" and the one-sided tails 16%, 2.5%, 0.15% (`cie0de74be`); solves site lesson 2 problem 1 (heights N(170, 8²)) and makes two judgements (a 196 cm student; apples under 130 g sent to juice, bounded between 2.5% and 16%) (`cie0de74be`); graphs the CDF as an S-curve and reads F(130) ≈ 0.0912 from the calculator (`ciaca4d996`). Stops at the empirical rule, the PDF's features and the CDF read from a calculator. Not taught: z-scores, the standard normal and tables (s11); finding μ or σ from a probability (s12). The PDF's area of exactly 1 is stated, not proved.

## Decisions

### Revision 4 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: apples graded by mass, measured on a graphing calculator (painted plates, live).** The site's own lesson 2 Q1 distribution, apples N(150, 15²) g, which Revision 3 used only as a second curve, becomes the main curve: a crate of apples and a graphing calculator are painted, and the calculator's screen shows the coded graph and outputs. Grading fruit by mass is everyday (the fruit shop, the supermarket's "small" bag), and its questions are exactly this video's: what share is within a band, and what share is too small. Apples are not used in `checks/root-decisions-maths-redesign.md`. Soft-drink bottles were the suggested context, but s12's final frame, which g01 opens on unchanged, is the bottle-filling machine, so the bottle belongs to s12 (and s11 works the bottle numbers on the way).
- **Numbers.** Apples X ∼ N(150, 225): σ = 15 g; 2σ² = 450; peak 1/(15√(2π)) ≈ 0.0266; inflection at 135 and 165; marks 135 and 165, 120 and 180, 105 and 195; areas 0.6827, 0.9545, 0.9973 (and 0.3829 within ±0.5σ, live slider only); F(135) ≈ 0.1587, F(150) = 0.5, F(165) ≈ 0.8413. The juice threshold 130 g is new (not a site value): 130 lies between 120 (μ − 2σ) and 135 (μ − σ), so the tail is between 2.5% and 16%; F(130) = Φ(−4/3) ≈ 0.0912, "about 9%". The second curve is s09's chip bags N(175, 4²): 171 to 179 gives 0.6827. Site lesson 2 problem 1 (heights N(170, 8²)) and its judgement are unchanged. Site lesson 3's bottle numbers (490 mL, 10.6%) move to s11 (worked with the table) and s12.
- **Idealising assumptions (author notes, not learner copy).** The orchard's apple masses are modelled as normal; "about 9%" is the model's share, not a count.
- **Join with s09 (changed with s09 Revision 4).** Scene 1 opens on s09 Revision 4's final frame exactly.
- **Join with s11 (changed with s11 Revision 3).** Scene 16 now ends on two catches: a snapper N(40, 4²) cm with 45 marked "5 cm above" and a golden perch N(36, 2.5²) cm with 40 marked "4 cm above", each with its reused painted fish, right tails tinted "?"; s11 Revision 3 opens on it. Both files change together.
- **Simulations (standard item 3).**
  1. `BandSlider` on the calculator (scene 5; a kit addition on `ToolPanel` graph mode and `ParameterSlider`): a symmetric band μ ± kσ widens as k slides from 0 to 3, the shaded area on the calculator's graph growing, with a live area readout on its screen (52 px on the stage echo): 0.3829 at k = 0.5, stopping at 0.6827 (k = 1), 0.9545 (k = 2) and 0.9973 (k = 3).
  2. `NormalCurve` `matchMarks` morph (scene 6): the apples' bell slides and squeezes onto the bags' bell with the ±σ band locked and a live area readout fixed at 0.6827.
  3. A gradient sign strip and `ConcavityTint` (scenes 3, 4): a point rides the curve with a live gradient sign, and the tints change at the inflection dots.
  4. `AccumulationTracer` (scene 10): the sweep draws the violet S-curve with a live F readout.
- **Colour roles (fixed for the whole video, continuing s04 to s09).**
  - **the normal curve: teal** (`MATH_TEAL`);
  - **shaded probabilities and bands: amber** (`MATH_AMBER`);
  - **μ: violet triangle and line; σ marks: violet dashed; the CDF F: violet** (`MATH_GRADIENT`), as s04 to s09;
  - **concavity: the d16 roles** (`MATH_CAP` for concave down, `MATH_CUP` for concave up);
  - **the calculator's screen: ink on its pale screen**;
  - **answer: green**; **mistake: red**; ink algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; calculator screen text at least 32 px on its 1080p footprint (the calculator plate is shown at least 520 px tall when its screen carries a reading); nothing below 26 px; text above y = 950. `HandTag` (at most two live): "no area formula in this course", "same distance, same square", "more negative, smaller", "e to any power > 0", "chosen so the area is 1", "rises, then falls", "one σ: where the bend changes", "say you used it", "same for every normal curve", "outside, then halve", "a range, not a value", "steepest at μ".
- **Stage changes (standard item 2):** the bags' bell, then the apples and the calculator (1); the formula's parts lighting on the apples' curve (2); the sign strip (3); the concavity tints (4); the band slider on the calculator (5); the morph onto the chip bags (6); the rule's bands and the tail ladder (7); the heights g01 board (8); judgements: 196 cm, then the juice apples (9); the CDF sweep (10); the framed card (11); question cards with pictures (12 to 15); the two fish (16); key notes (17).
- **Worked examples (g01 layout, standard item 7).** Scene 8 (heights): task strip, model strip "H ∼ N(170, 8²)", grouped givens "μ = 170 cm, σ = 8 cm", rows at 52 px, green framed "≈ 68%" and "≈ 2.5%", red slip "P(H > 186) ≈ 95%" crossed silently, tag "that's inside ±2σ, not above" (root decision 5). Scenes 3 and 4 are derivation boards with framed results ("global maximum at x = μ", "inflection at x = μ ± σ"). Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "68, 95, 99.7." and "Outside, then halve." with a three-band bell and an apple badge.
- **Visual surprise (standard item 9).** The cap and tail tints meet exactly at the σ marks (4); the apples' bell squeezes onto the chip bags' bell and the area readout never moves off 0.6827 (6).
- **Question cards (full text and a picture).** A1: the worded question with empty axes "mass x (g)" (no curve, no marks). A2: the worded question with empty axes x 20 to 60 labelled "f(x)" (no curve, no labels on the formula).
- **Narration (not voiced).** Scenes 1, 2, 4 to 6, 9, 10 and 16 are re-worded for the apples, the calculator, the chip bags and the fish; scenes 3, 7, 8 and 11 to 15 keep their Revision 3 text.

### Kept from Revisions 1 to 3

In the bullets below, read the bottle fills N(500, 64) (marks 492 to 524, 2σ² = 128, F(490) ≈ 0.1056) as the apples N(150, 15²) (marks 105 to 195, 2σ² = 450, F(130) ≈ 0.0912), the second curve "apples" as s09's chip bags, and the handoff as the two fish; the application is the painted graphing calculator. The causes, the heights problem and the attempts are unchanged.

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
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s10`; playlistOrder 62; mainLearnerQuestion as above; syllabusActionIds `cie0de74be`, `ciaca4d996`, `cicc8fa862`; prerequisiteVideos `math-a12-s06`, `math-a12-s09`, `math-a12-d16`; sourceLessons `random-variables/lesson02.sa.html` (with lesson 3's hook; SHAs above); startBoundary "From s09's bell with μ ± σ, μ ± 2σ, μ ± 3σ marks: how much area lies within each?"; stopBoundary "The PDF's parts; global maximum at μ from f′; inflection at μ ± σ from f″; the application's 0.6827, 0.9545, 0.9973 for two normal curves and why they match; the empirical rule with 'approximately' and its one-sided tails; site problem 1; two judgements; the CDF graphed and read at one value. No z-scores, standard normal, tables or unknown parameters."; nextHandoff "math-a12-s11: a 45 cm snapper against a 40 cm golden perch: which catch is more unusual, and how much area lies beyond each?".
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

Main question: *An orchard grades apples by mass. How much of a normal distribution lies within one, two and three σ of the mean, how can a graphing calculator measure and check it, and what else does the curve's formula tell us?*
Entry knowledge (s05 to s09, d strand): area as probability, the CDF, the normal curve and notation, chain and product rules, concavity.
Stops after: the PDF's features, the empirical rule measured, applied and judged, and the CDF read from an application. No z-scores or tables.
Handoff: math-a12-s11: a 45 cm snapper against a 40 cm golden perch, "which catch is more unusual?".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): curve teal; shaded areas amber; μ, σ marks and F violet; concavity tints in the d16 roles; answer green; mistake red; ink algebra. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; nothing below 26 px.

### 1. hook (how much area within one σ?)
> Last video ended with this question. Mark one sigma either side of the mean. How much of the area lies between those **marks**? This curve has no simple area formula, so today a graphing calculator does the measuring. An orchard grades its **apples** by mass, and the masses are normal, with mean one hundred and fifty grams and standard deviation fifteen. Then we'll turn what we find into a rule you can use with no technology at **all**.

Visual: opens on s09 Revision 4's last frame exactly (the bags' bell N(175, 16), violet dashed marks at 171 and 179, 167 and 183, 163 and 187, the inner region tinted, "?" marks, the chip bag, chip "Next: how much area lies within one, two and three σ?"). Heading writes on: "Graphing the normal curve". On "marks" the inner "?" pulses. On "no simple area formula" hand tag "no area formula in this course". On "apples" the bags' bell shrinks to a 300 px card at the top left and the painted apple crate (`ma12-apple-crate-v1`, 460 px wide) lands at the left with a single apple (`ma12-apple-v1`, 200 px) on the platform scale beside it (`phys-y11-platform-scales-v1`, 420 px, coded readout "152 g"); the painted graphing calculator (`ma12-graphing-calculator-v1`, 560 px tall) stands at the right, its screen blank. Model strip (44 px): "X ∼ N(150, 15²): apple mass (g)". On "all" the chip moves to the top right as "How much area within 1σ, 2σ, 3σ?".

### 2. the formula and its parts
> This is the normal probability density **function**, and each part has a job. The power of e is minus the squared distance from the mean, over two sigma squared. The same distance either side squares to the same value, so the curve is **symmetric**. Further out, the power gets more negative, so the curve drops towards **zero**. But e to any power is positive, so it never reaches the **axis**. The number in front makes the total area exactly **one**. For the apples, two sigma squared is four hundred and **fifty**.

Visual: clear change: the apples' bell N(150, 15²) at the left (x 100 to 200; 1,000 × 520 px), the apple badge (160 px) above it. Right column on "function": "f(x) = (1/(σ√(2π))) e^(−(x − μ)²/(2σ²))" (56 px), grey tag "normal probability density function". On "power of e" the exponent glows; under it a label "−(distance from μ)² ÷ 2σ²". On "symmetric" two points at 140 and 160 light on the bell at the same height, hand tag "same distance, same square". On "zero" the exponent's minus sign glows and the tails darken as they fall, hand tag "more negative, smaller". On "axis" a zoom inset on the right tail (x 185 to 200) shows the gap to the axis, hand tag "e to any power > 0". On "one" the front factor glows, hand tag "chosen so the area is 1". On "fifty" the calculator plate (520 px tall) slides in at the right: its screen types "Y1 = 1/(15√(2π)) e^(−(X − 150)²/450)" (32 px on screen) and draws the bell; the stage bell flashes once to show they match, grey tag "2σ² = 2 × 225 = 450".

### 3. the global maximum
> Where's the highest point? By the chain rule, f prime of x is the derivative of the power, times f of x **itself**. Since f of x is always positive, the sign of the gradient comes from minus x minus mu. Left of the mean the gradient is positive, so the curve **rises**. Right of the mean it's negative, so the curve **falls**. It rises all the way to mu and falls all the way after, so x equals mu is the global maximum, not just a local one. Its height is one over sigma root two **pi**.

Visual: camera continue (the calculator shrinks to a 280 px icon at the top right). Derivation board, right column: on "itself" "f′(x) = (derivative of the power) × f(x)" in grey, then directly under it the line "f′(x) = −((x − μ)/σ²) f(x)" (52 px). On "always positive" "f(x) > 0" ticks in, and "−(x − μ)" boxes. A point rides the bell from 110 to 190 with a live gradient-sign readout ("+", "0", "−", 52 px), and a sign strip slides under the x axis: on "rises" the left part reads "+" with an up arrow along the curve; on "falls" the right part reads "−" with a down arrow; "0" at μ. On "global maximum" the peak glows, violet μ triangle at 150, hand tag "rises, then falls", green framed "global maximum at x = μ"; on "pi" green framed "f(μ) = 1/(σ√(2π))", grey readout "apples: 1/(15√(2π)) ≈ 0.0266".

### 4. the points of inflection
> Now the points of inflection. Differentiate again with the product rule, and **factorise**. Again f of x is positive, so the sign of the second derivative comes from this **bracket**. It's zero when x minus mu squared equals sigma squared, so at mu plus or minus **sigma**. Between those points the bracket is negative, so the curve is concave down, like a cap over the **peak**. Outside them it's concave up, and the tails flatten **out**. The concavity changes, so these are points of inflection, at one thirty-five and one sixty-**five**. So one sigma is where the bell changes its **bend**.

Visual: camera continue. The f′ line dims and stays. On "product rule" a line "f″(x) = −(1/σ²) f(x) − ((x − μ)/σ²) f′(x)" writes, then on "factorise" it dims and the factorised line writes: "f″(x) = (f(x)/σ⁴)((x − μ)² − σ²)" (52 px). On "bracket" "((x − μ)² − σ²)" boxes; "f(x)/σ⁴ > 0" ticks in. On "sigma" the row "(x − μ)² = σ², so x = μ ± σ". On "peak" `ConcavityTint` tints the cap between the two points (`MATH_CAP`), tag "concave down"; on "out" the tails tint (`MATH_CUP`), tag "concave up". On "inflection" two dots appear on the curve, green framed "points of inflection at x = μ ± σ". On "five" violet dashed marks at 135 and 165 drop and pass exactly through the two dots. On "bend" the dots pulse, hand tag "one σ: where the bend changes".

### 5. the calculator measures the areas
> Back to the question. Ask the calculator for the area from one thirty-five to one sixty-five. It works out the area numerically: zero point six eight two **seven**. So about sixty-eight percent of apples land within one sigma. Widen the band to two sigma and it gives zero point nine five four **five**, and three sigma gives zero point nine nine seven **three**. If you use a calculator or app in an answer, say that you **did**.

Visual: clear change: the calculator plate fills the right half (620 px tall), its screen showing the apples' bell; the stage echo of the same bell sits at the left (900 × 480 px), the algebra reduced to two small framed rows ("max at x = μ", "inflection at x = μ ± σ"). `BandSlider`: an amber band grows symmetrically from μ as a slider k runs from 0 (live area readout "0.0000", 52 px on the stage echo, 32 px on the screen), passing "0.3829" at k = 0.5; on "seven" it holds at k = 1 (135 to 165) with "0.6827", grey tag "≈ 68%". On "five" (first) it widens to k = 2 (120 to 180) and holds at "0.9545"; on "three" to k = 3 (105 to 195), "0.9973". A small results table builds in the stage's lower right: "±1σ: 0.6827", "±2σ: 0.9545", "±3σ: 0.9973". On "did" hand tag "say you used it", grey chip "write: found using a graphing calculator".

### 6. the same areas for every normal curve
> Is that just these apples? Try last video's chip bags, with mean one seventy-five grams and standard deviation four. From one seventy-one to one seventy-nine, the calculator gives zero point six eight two seven **again**. Here's why. Changing mu slides the bell along. Changing sigma stretches it sideways and squashes it down by the same factor, so the area between matching marks doesn't **change**. Measured in sigmas from the mean, every normal curve is the same **curve**.

Visual: clear change: left, the bags' bell N(175, 4²) (x 163 to 187) with the chip bag badge (180 px) and violet marks at 171 and 179; the calculator's screen shows "area 171 to 179: 0.6827"; on "again" the region shades amber and the apples' result sits beside it, both green framed. On "slides" the apples' bell ghost slides to sit over the bags' centre (`NormalCurve` `matchMarks`); on "change" it squeezes sideways by 4/15 and stretches up by 15/4 until it lies exactly on the bags' bell, the ±σ marks locked to the curve and a live readout "area between the marks: 0.6827" never changing (52 px). On "curve" the x axis relabels to "μ − 3σ, ..., μ + 3σ" in place of numbers, and the results table's three rows glow, hand tag "same for every normal curve".

### 7. the empirical rule and its tails
> That's the empirical rule. For any normal distribution, approximately sixty-eight percent of the data lie within one standard deviation of the mean, approximately ninety-five percent within two, and approximately ninety-nine point seven percent within **three**. They're approximate, because the calculator gave sixty-eight point two seven, and so on. Symmetry gives the tails. Outside one sigma is thirty-two percent, so sixteen percent in each **tail**. Outside two sigma, two and a half percent each **side**. Outside three sigma, zero point one five percent each **side**.

Visual: camera continue on the general bell (x labelled in σ; 1,100 × 520 px). On "three" three nested amber bands shade (68%, 95%, 99.7%) with labels (44 px), and the rule writes green framed in the right column: "approximately 68% within μ ± σ, 95% within μ ± 2σ, 99.7% within μ ± 3σ". On "and so on" a grey row "calculator: 68.27%, 95.45%, 99.73%". On "tail" `TailLadder`: the region outside ±σ lifts as "32%", splits into two equal halves that drop into the two tails, "16%" each, hand tag "outside, then halve"; on "side" (first) the same for ±2σ: "5%" into "2.5%" and "2.5%"; on "side" (second) "0.3%" into "0.15%" and "0.15%". The tail row reads "16% | 2.5% | 0.15% each side" (52 px).

### 8. a problem on the marks
> Heights of Year 12 students are normal, with mean one seventy centimetres and standard deviation eight. What percentage are between one sixty-two and one seventy-**eight**? That's eight either side, one sigma, so about sixty-eight **percent**. What percentage are taller than one eighty-**six**? That's two eights above, so two sigma. Outside two sigma is five percent, and half of that is above, so about two point five **percent**.

Visual: clear change to the g01 board. Task strip (44 px): "Heights: find P(162 < H < 178) and P(H > 186)." Model strip "H ∼ N(170, 8²)" with grouped givens under it: "μ = 170 cm", "σ = 8 cm" (grey "variance 64"). Left: the heights bell (x 140 to 200; 1,000 × 520 px), a coded door-frame height scale in grey beside the axis (no figure). On "eight" (first) violet marks at 162 and 178; on the next sentence rows "162 = 170 − 8 = μ − σ", "178 = 170 + 8 = μ + σ"; on "percent" the region shades amber, green framed "P(162 < H < 178) ≈ 68%". The first result dims. On "six" a mark at 186; on "two eights above" row "186 = 170 + 2 × 8 = μ + 2σ"; on "percent" (second) the outside of ±2σ tints lightly, then only the right tail shades, green framed "P(H > 186) ≈ 5% ÷ 2 = 2.5%"; a red slip "P(H > 186) ≈ 95%" writes and is crossed silently, tag "that's inside ±2σ, not above". After the frame, the region left of 186 shades lightly with a grey row "so P(H < 186) ≈ 97.5%" (screen only, site part (c)).

### 9. judgements, and where the rule stops
> The rule also helps you judge. Is a student of one ninety-six centimetres unusual? Three sigma above is one ninety-four. Only about zero point one five percent are above that, so even fewer are above one ninety-six. Very **unusual**. Now the small apples. Apples under one hundred and thirty grams go to juice. One thirty sits between one sigma below and two sigma **below**. So that tail is between two point five and sixteen **percent**. For an actual value, we need the area to the left of one **thirty**.

Visual: camera continue on the heights bell. A mark at 194 ("μ + 3σ") and a dot at 196 beyond it; on "unusual" the tail beyond 194 shades thinly, green framed "P(H > 194) ≈ 0.15%", tag "very unusual". Clear change on "Now the small apples": the apples' bell N(150, 15²) with the apple crate small, violet marks at 120 and 135, a red dot at 130 between them, tags "μ − σ = 135" and "μ − 2σ = 120", and a small apple sprite rolling off a coded "juice" chute at the left. On "below" (second) two shaded tails flash in turn: below 135 ("about 16%") and below 120 ("about 2.5%"). On "percent" the tail below 130 shades between them, row "2.5% < P(X < 130) < 16%" (52 px), hand tag "a range, not a value". On "thirty" a "?" over the tail.

### 10. the CDF, graphed
> That's the cumulative distribution function. Capital F of x is the probability that X is at most x, the area to the left of **x**. Graph it on the calculator, and it draws an S **shape**. It starts near zero, and at the mean it's exactly a half, because half the area is on each **side**. Its slope is the density, so it climbs fastest at mu, where the bell is **highest**. Then it levels off towards **one**. At one thirty, the calculator reads zero point zero nine one **two**, so about nine percent go to juice.

Visual: camera continue; the bell moves to the upper half (1,000 × 320 px); a second graph appears under it sharing the x axis (y 0 to 1; 1,000 × 320 px); the calculator (420 px tall) at the right. On "x" a row "F(x) = P(X ≤ x) = area to the left of x" (s06). On "shape" `AccumulationTracer` sweeps a vertical line left to right over the bell, the shaded amber area growing, while the lower graph draws violet F point by point with a live readout "F = ..." (52 px); the calculator's screen shows "Y2 = cdf(Y1)" and the same S-curve. On "side" a dot at (150, 0.5), the bell's halves tinting "½ | ½". On "highest" a tangent segment on F at 150, hand tag "steepest at μ". On "one" a dashed line at F = 1 (tag "never reaches 1"), and dots at (135, 0.1587) and (165, 0.8413) with grey readouts and tags "≈ 16%" and "≈ 84% = 50% + 34%", matching the rule (screen only). On "two" the tracer stops at 130: the bell's left tail shades, the F graph's dot at (130, 0.0912), green framed "P(X < 130) = F(130) ≈ 0.0912", and on the last sentence "about 9% to juice" beside the apple crate.

### 11. memory aid
> Here's a way to remember the rule. Sixty-eight, ninety-five, ninety-nine point seven, for one, two and three sigma. And for a tail, find what's outside, then **halve** it.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line in the hand font, 64 px: "68, 95, 99.7" over a small three-band bell (1σ, 2σ, 3σ). Second line on "halve": "Outside, then halve." with the 32% splitting into 16% and 16% (`TailLadder` replay, small). Badge at the left: the apple (200 px). Hold about 2 s.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Use the empirical rule. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The masses, X g, of tomatoes are modelled by X ∼ N(80, 36). Use the empirical rule to find, approximately, P(68 < X < 92) and P(X > 86)." Picture slot: empty axes "mass x (g)" (no curve, no marks, no σ). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 1 (brief)
> The second number is the variance, so sigma is six. Sixty-eight and ninety-two are twelve either side of eighty, which is two **sigma**. So that probability is about ninety-five **percent**. Eighty-six is one sigma above. Outside one sigma is thirty-two percent, and half of that is above, so about sixteen **percent**. Thirty-two percent is wrong. That counts both **tails**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "X ∼ N(80, 36)", "P(68 < X < 92)", "P(X > 86)". "36" underlined, row "σ = √36 = 6" (52 px); "68" and "92" underlined; on "sigma" the card's axes draw a teal bell at 80 with violet marks at 68 and 92, row "80 ± 12 = μ ± 2σ"; on "percent" (first) green framed "P(68 < X < 92) ≈ 95%". "86" underlined, row "86 = 80 + 6 = μ + σ"; on "percent" (second) the right tail shades amber, green framed "P(X > 86) ≈ 32% ÷ 2 = 16%". On "tails" a red slip "P(X > 86) ≈ 32%" writes and is crossed (caption "that's both tails"). Hold about 1 s.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Read the features from the formula. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A normal random variable X has probability density function f(x) = (1/(5√(2π))) e^(−(x − 40)²/50). State the coordinates of the global maximum of the graph of f, and the x-values of its points of inflection." Picture slot: empty axes x 20 to 60 labelled "f(x)" (no curve, no labels on the formula). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 15. feedback 2 (brief)
> Match it to the general formula. The mean is forty, and the number in front has five where sigma goes, so sigma is **five**. The global maximum is at x equals forty, with height one over five root two **pi**. The points of inflection are one sigma either side, at thirty-five and forty-**five**. Forty plus or minus root fifty is wrong. Fifty is two sigma squared, not sigma **squared**.

Visual: the card shrinks to the top. The general formula appears small above the given one, matching parts linked by thin lines. `GivensStrip`: "f(x) = (1/(5√(2π))) e^(−(x − 40)²/50)". "40" underlined, row "μ = 40"; on "five" "5" in the front factor underlined, row "σ = 5", and the row "2σ² = 2 × 25 = 50 ✓" writes silently. On "pi" the card's axes draw a teal bell with its peak dot, green framed "maximum (40, 1/(5√(2π)))", grey "≈ 0.0798". On "five" (second) two inflection dots, green framed "x = 35 and x = 45". On "squared" a red slip "x = 40 ± √50" writes and is crossed (caption "50 is 2σ²"). Hold about 1 s.

### 16. handoff
> So the calculator shows where the curve peaks and bends, verifies the empirical rule, and graphs the CDF. Next, a new question. A forty-five centimetre snapper is five centimetres above the average snapper off one **jetty**. A forty centimetre golden perch is four above the average perch in one river. Which catch is more unusual, and how much area lies beyond **each**?

Visual: the memory-card lines "68, 95, 99.7" and "inflection at μ ± σ" show small at the top, then fade on "Next". Board clears to two bells side by side, same size on screen (each 820 × 440 px): left the snapper N(40, 4²) cm (x 28 to 52) with the painted snapper (`biology/y11-fish-snapper-v1`, 360 px wide) above it and 45 marked "5 cm above"; on "jetty" it is in place; right the golden perch N(36, 2.5²) cm (x 28.5 to 43.5) with the painted golden perch (`biology/y11-fish-golden-perch-v1`, 360 px wide) and 40 marked "4 cm above". On "each" both right tails tint amber with "?" on each, and chip "Next: which catch is more unusual?". No z-value or probability is shown or spoken. Hold about 2 s. This is s11 Revision 3's opening frame; scene 17 returns to it silently after the notes.

### 17. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Peak at x = μ, height 1/(σ√(2π)).
- Points of inflection at x = μ ± σ.
- About 68%, 95%, 99.7% within 1, 2, 3 σ.
- One tail: half of what's outside (16%, 2.5%, 0.15%).
- CDF F(x): area to the left; F(μ) = 0.5.

Memory aid (framed card, right half of the notes screen, as in scene 11): *68, 95, 99.7. Outside, then halve.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 16's frame exactly (the snapper and golden perch bells with their fish, 45 "5 cm above" and 40 "4 cm above", tinted right tails with "?", chip "Next: which catch is more unusual?"). This is the final frame and s11 Revision 3's opening frame.

## Teaching checks

- **Does it explain causes?** Why a tool: no simple area formula (1). Why the curve is symmetric: equal distances square to equal values (2). Why it never reaches the axis: e to any power is positive (2). Why μ is the global maximum: f′ has the sign of −(x − μ), positive then negative, with f > 0 (3). Why the bend changes at μ ± σ: f″ has the sign of (x − μ)² − σ² (4). Why the percentages are the same for every normal curve: sliding and equal-factor stretching keep the area between matching marks (6). Why each tail is half the outside: symmetry (7). Why 490 gives only a range: it isn't on a mark (9). Why the CDF is S-shaped and steepest at μ: it accumulates area, and its slope is f (10).
- **Misconceptions addressed:** "the empirical rule is exact" (7); "the one-sided tail is 32%" (7; A1 crossed); "the rule gives every probability" (9); "inflection points are out in the tails" (4); "the 2σ² in the formula is σ²" (A2 crossed); "the CDF is a bell too" (10).
- **One idea at a time:** one tool (1), one formula reading (2), one derivative (3), one second derivative (4), one measurement (5), one reason (6), one rule (7), one problem (8), one judgement pair (9), one new graph (10). Only the needed earlier results stay bright: σ = 8 and the marks in 3 to 5 and 9 to 10; the boxed rule in 8 and 9.
- **Video makes it easier:** the student sees each formula part change the curve (2), a point ride the bell while the gradient sign flips at the peak (3), the cap and tail tints meet exactly at the σ marks (4), the band widen on the calculator while its area reads live (5), one bell squeeze onto another with its area fixed (6), the outside split into two tails (7), and the S-curve draw itself from the growing area (10).
- **Visual standard, item by item:** 1 the painted apples and calculator by about 20 s, returning in 2, 5, 9 to 11; 2 a new stage every 25 to 60 s; 3 `BandSlider` with a live area, the morph with a fixed live area, the gradient rider and the CDF sweep with a live F; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 board (8) and derivation boards (3, 4), framed answers and crossed slips; 8 framed card and five short bullets; 9 the tints meeting the σ marks, the apples' bell landing on the bags' bell.
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
| Apples (site lesson 2 Q1 distribution) | N(150, 15²), σ = 15 g; 2σ² = 450; marks 135, 165; 120, 180; 105, 195 | 1 to 7, 9 to 11 |
| PDF peak | 1/(σ√(2π)); 1/(15√(2π)) ≈ 0.0266 (grey) | 3 |
| Derivatives | f′(x) = −((x − μ)/σ²) f(x); f″(x) = (f(x)/σ⁴)((x − μ)² − σ²); inflection at μ ± σ | 3, 4 |
| Calculator areas | 0.6827, 0.9545, 0.9973 (and 0.3829 at ±0.5σ, live only); 68.27%, 95.45%, 99.73% | 5, 7 |
| Chip bags (s09) | N(175, 4²); 171 to 179 gives 0.6827; squeeze 4/15, stretch 15/4 | 6 |
| Empirical rule | approximately 68%, 95%, 99.7%; outside 32%, 5%, 0.3%; each tail 16%, 2.5%, 0.15% | 7, 8, 9, 11, 13 |
| Heights (site problem 1) | N(170, 8²); 162, 178 (±σ): ≈ 68%; 186 (+2σ): ≈ 2.5%; below 186 ≈ 97.5%; above 194 (+3σ): ≈ 0.15% (exact 0.1350%); above 196: fewer still (exact 0.0577%, not shown as a percentage on screen) | 8, 9 |
| Apples below 130 g (juice) | between 2.5% and 16%; F(130) = Φ(−4/3) ≈ 0.0912, about 9% | 9, 10 |
| CDF | F(150) = 0.5; F(135) ≈ 0.1587 (≈ 16%); F(165) ≈ 0.8413 (≈ 84%) | 10 |
| A1 | N(80, 36): σ = 6; 68, 92 = μ ± 2σ: ≈ 95%; 86 = μ + σ: ≈ 16%; crossed 32% | 12, 13 |
| A2 | μ = 40, σ = 5, 2σ² = 50; maximum (40, 1/(5√(2π))) ≈ (40, 0.0798); inflection x = 35, 45; crossed 40 ± √50 | 14, 15 |
| Handoff | snapper N(40, 4²), 45 cm (5 above); golden perch N(36, 2.5²), 40 cm (4 above) | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 and SymPy (3 Nov, scratchpad script `s10s12/nums_s10s12.py`); Codex to re-check.

- SymPy: f′/f = (μ − x)/σ²; f″/f = (x − μ − σ)(x − μ + σ)/σ⁴; roots of f″: μ − σ, μ + σ; ∫ f over ℝ = 1.
- 1/(15√(2π)) = 0.026596; 1/(5√(2π)) = 0.079788.
- Within kσ: 2Φ(1) − 1 = 0.682689; 2Φ(2) − 1 = 0.954500; 2Φ(3) − 1 = 0.997300. Outside each side: 0.158655, 0.022750, 0.001350.
- Apples (recalculated 7 Nov with SciPy, scratchpad `maths07/nums.py`): 150 ± 15, ± 30, ± 45; 2 × 225 = 450; Φ(−4/3) = 0.091211; F(135) = 0.158655, F(165) = 0.841345; within 0.5σ 0.382925.
- Chip bags: 175 ± 4 gives 0.682689.
- Heights: 170 ± 8 = 162, 178; 170 + 16 = 186; 170 + 24 = 194.
- A1: √36 = 6; 80 ± 12 = 68, 92; 80 + 6 = 86.
- A2: 2 × 5² = 50; √50 = 7.071 (crossed values 32.93, 47.07).

## Memory aid check

- **"68, 95, 99.7. Outside, then halve."** Meaning, as said in scene 11: the three percentages go with one, two and three σ either side of the mean; for a one-sided tail, take the percentage outside the interval and halve it. Assumptions checked: the percentages are approximate and true for every normal distribution (scenes 5 to 7); "halve" relies on the symmetry of the normal curve (s09), so it is not offered for skewed distributions; it gives tails beyond μ ± kσ only, not between marks (scene 9 says so). It helps a new case: A1's P(X > 86) is "32% outside, then halve". Introduced after the measurement and the reason (scenes 5 to 7).
- **Considered, not used:** "inflection is one σ out" as a second aid (it is key note 2 and A2's lesson; one aid per video).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,257 characters**, 17 scene headings (Revision 3: 6,029). Characters per scene (1 to 17): 428, 494, 472, 566, 414, 465, 560, 417, 492, 490, 167, 56, 360, 67, 371, 363, 75.

At 13.3 characters per second the speech before the notes is about 465 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 18 s of settling for the formula parts (2), the rider (3), the tints (4), the band slider (5), the morph (6), the tail split (7) and the CDF sweep (10); the key-notes scene is 45 s (1,350 frames). Total **about 554 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 16 s spare.

Reserve trims if the voiced take runs long, in order: scene 5's last sentence (keep the grey chip); scene 3's "not just a local one" (keep the framed row). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s10` (route math-a12-s10). Suggested explainer folder `src/explainer/lessons/math-a12-s10` and build folder `docs/production/claude-pm/lessons/m-a12s10` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 17 scene headings, all `### N.`): hook, pdf-parts, global-maximum, inflection-points, app-areas, every-normal, empirical-rule, heights-problem, judgements, cdf-graph, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s09's last frame continues into scene 1 (same bell); 1 to 2 camera continue (right column); 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 clear change (apples); 6 to 7 camera continue (σ-labelled bell); 7 to 8 clear change (heights); 8 to 9 camera continue, then a clear change to the fills within scene 9; 9 to 10 camera continue (the bell moves up, the CDF graph joins); 10 to 11 camera pull back; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s10-rev4-learning-review.md`, `science_check` = `checks/m-a12s10-rev4-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only): no apple, fruit crate or calculator plate exists in any course (searched apple, fruit, crate, orchard, calculator; the fruit hits are Biology's eggplant and grapes and Chemistry's ester fruit bowl). Reused after inspection: `physics/phys-y11-platform-scales-v1.png` (plain scale with a blank display window, coded readout) and, for the handoff, `biology/y11-fish-snapper-v1.png` and `biology/y11-fish-golden-perch-v1.png` (both side views on transparent backgrounds, clear at 360 px). The bottle plate is not used here (s12 owns it).

Need (painted, new; see the Codex asset brief): `ma12-apple-v1.png`, `ma12-apple-crate-v1.png` and `ma12-graphing-calculator-v1.png`. Reused: s09's `ma12-chip-bag-v1` (opening frame and scene 6), the platform scale, the two fish (handoff).

Coded (studio kit): every graph, band, tint, sign strip and readout; the calculator's screen contents (drawn into the screen rectangle from the plate's sidecar); the working boards, the heights scale, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: the s09 additions (`NormalCurve`, `TailMirror`, `AreaFill` open ends), decision 27's `ConcavityTint` roles and `SignStrip`, decision 32's `ToolPanel` and `AccumulationTracer`, decision 45's `CdfTracer`, and the studio's `ParameterSlider`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip` and `QuestionAxes`.

Additions:
1. **`ToolPanel` calculator-plate mode**: the panel's content drawn into a painted plate's screen rectangle (from `ma12-graphing-calculator-v1.json`), with typed input, a linked plot of the stage's curve and author outputs checked against a numerical integral (tolerance 5e-5 at 4 dp). Checks: 0.6827, 0.9545, 0.9973 for the apples; 0.6827 for N(175, 4²) on [171, 179]; F(130) = 0.0912, F(135) = 0.1587, F(165) = 0.8413.
2. **`BandSlider`**: a symmetric band μ ± kσ driven by a k slider with a live area readout on the stage and the screen. Checks: 0.3829 (0.5), 0.6827 (1), 0.9545 (2), 0.9973 (3).
3. **`NormalCurve` additions**: `inflectionMarks`, `bands`, `matchMarks` (live area held within 1e-4 through the morph; ends exactly on N(175, 4²)) and `sigmaAxisLabels`.
4. **`TailLadder`**: the outside region lifts, splits and drops into two tails with author labels 32/16, 5/2.5, 0.3/0.15 (symmetry check required).

## Codex asset brief (Maths A12 S10, apples and a graphing calculator)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s10.md`, draft route entry math-a12-s10. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, logos, brand names, stickers, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-apple-v1.png` (800 × 800 px): one red-and-green apple, three-quarter view, short stem and one small leaf, sitting upright with a flat-reading base; no sticker.
2. `ma12-apple-crate-v1.png` (1,800 × 1,200 px): one shallow wooden fruit crate seen from the front and slightly above, filled with about twenty apples of visibly different sizes (the plate shows that masses vary); no stencilled words on the crate.
3. `ma12-graphing-calculator-v1.png` (1,000 × 2,000 px, portrait): one generic graphing calculator seen straight on, charcoal body, with a **large blank pale-grey screen** in the top third and a grid of plain keys below with **no symbols, letters or numbers on any key** and no brand. The screen must be a clean rectangle with square corners: Codex reports its pixel rectangle in `ma12-graphing-calculator-v1.json` so the coded graph and readouts can be drawn inside it.

Report inspection on the paper background (`#f6f1e7`) with the calculator at 560 px tall, a test of coded 32 px text and a bell drawn inside the reported screen rectangle, the crate at 460 px wide, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s10-provenance.json`.

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

- Revision 4 (7 Nov) has had no independent review. Next: student learning review (trace from s05, s06, s09 and d16; check that the apples make the area question concrete; that each formula part is tied to a visible effect; that the f′ and f″ sign reasoning lands with the rider and tints; that the calculator's role is clear and honest (it measures, the rule rounds); that the band slider and the morph give a reason, not decoration; that the CDF's S-shape is linked to the growing area; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The formula-part highlights, the sign strip, the concavity tints meeting the σ marks, the band morph and the CDF sweep carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s09's scene 14 (root decision 59); the handoff frame is s11's opening (same designer).

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 9's 196 cm sentence corrected (0.15% is above 194, so even fewer above 196); feedback 2's spoken 2σ² check cut (root decision 60). Narration now 6,029 characters (counted by the build parser rules). No em dashes.

## Revision 3 (5 November 2026, brief 171 fixes)

Findings from `checks/m-a12s10-error-check.md`.

- Should fix 1 (Numbers used): the heights row now gives "above 194 (+3σ): ≈ 0.15% (exact 0.1350%); above 196: fewer still (exact 0.0577%)". Recalculated: P(H > 194) = 0.001349898, P(H > 196) = 0.000577025 at N(170, 8²).
- Should fix 2 (scene 9): the graph-change cue "Now the underfilled" becomes "Now underfilled bottles", which occurs in the narration.
- Narration count: 6,029 characters (scene narration only, ** removed, joins excluded; narration unchanged), estimated about 555.8 s with the stated holds. No em dashes.


## Revision 4 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). The three syllabus points, the derivative reasoning, the heights problem, both attempts and the memory aid are unchanged.

- **Anchor and why:** apples graded by mass (the site's lesson 2 Q1 distribution, N(150, 15²)), measured on a painted graphing calculator. Grading asks this video's questions: what share lies within a band, and what share is too small for sale. The bottle-filling context was not used because s12's fixed final frame makes the bottle s12's anchor.
- **Simulations:** `BandSlider` (a σ band widening on the calculator with a live area); the `matchMarks` morph onto s09's chip bags with a fixed live area; a gradient rider with a live sign; the CDF sweep with a live F.
- **Colour roles:** curve teal; shaded areas amber; μ, σ marks and F violet; concavity in the d16 roles; answer green; mistake red.
- **Plates:** new `ma12-apple-v1`, `ma12-apple-crate-v1`, `ma12-graphing-calculator-v1`; reused the platform scale, s09's chip bag, and Biology's snapper and golden perch (handoff).
- **Narration changes (not voiced):** scenes 1, 2, 4, 5, 6, 9, 10 and 16 (apples, the calculator, the chip bags, the juice apples, the fish); scene 11 gains a cue word. Other scenes keep their Revision 3 text.
- **Counts:** 6,029 → 6,257 characters; about 556 s with the old 60 s notes hold → about 554 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s09 Revision 4's bags' bell; ends on the two fish, which s11 Revision 3 opens on (both changed together; the bottle and chocolate-bar bells withdrawn from this join).
- **Kit additions:** `ToolPanel` calculator-plate mode, `BandSlider`, `NormalCurve` additions (`inflectionMarks`, `bands`, `matchMarks`, `sigmaAxisLabels`), `TailLadder`.