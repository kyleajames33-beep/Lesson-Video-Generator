# Maths A12 S05: How does a density determine its CDF and probabilities? f(x) = F′(x), probability as area, the two properties of a density, and moving between f and F (design)

Status: Revision 2 (4 Nov 2026), brief 162 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov 2026), overnight queue wave H4. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer` with `domain` intervals, `DerivativeTracer` in paired mode, `TangentTriangle` with `ReadoutPanel`, `NumericDial`, `IntegralNotation`, `AlignedAlgebra`, `ExpressionSlot`, `Chip` with `cross`, `QuestionCard`, `Countdown`, `KeyNotes`), the integral parts proposed in `math-a12-i06.md` and `math-a12-i08.md` (`AreaFill`, `RiemannStrips`, `AccumulationTracer`), and the continuous parts proposed in `math-a12-s04.md` (`ClassHistogram`, `CdfSubtraction`). One new part is specified under "Codex asset brief" (`StripRiseRatio`). Nothing recorded; human listening pending.

Narration 5,692 characters, 16 scenes, about 520 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: fifth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 57), after s04 (P(X = x) = 0 and the CDF) and before s06 (mode, median and quartiles of a density). Templates: `math-a12-i05.md` and `math-a12-d10.md` (same structure, voice, paper style, attempt and feedback pattern and key notes), with `math-a12-s04.md` for the continuous conventions. All maths visuals are coded; no painted plates. No people. Pre-design pack: none (no s packs or s route inputs), so this design does the pack work itself. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson09.sa.html` (Probability Density Functions), SHA256 `8724957cdae4920681fb1c1d0c2644a2db5d674edc47af98d4ab7009133dadf7`. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s05` in `../../programme/maths-a12-course-outline.json` ("How does a density determine its CDF and probabilities?", five syllabus actions, site source lesson 9, no coverage gaps).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; maths visuals coded; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, formula and conditions; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Binding root decisions applied: exact values in the algebra (1/8, 7/16, 5/8), decimals only for data or in grey readouts; attempt cards give neither the answer nor its form; domains kept (every density and CDF is stated with its interval and "0 elsewhere" or its flat pieces); integrals are checked (F(a) = 0, F(b) = 1; differentiate back); the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cicf91daa4`: "Define a probability density function (PDF), f(x) , for a random variable X with cumulative distribution function F(x) as f(x)=F'(x) and recognise that P(a<X<b)=∫_{a}^(b)f(x)dx"
- `ci660140f9`: "Recognise the properties of a probability density function: f(x)≥0 for all x in the domain of f(x), and ∫_{a}^(b)f(x)dx=1 if the domain of f(x) is [a,b] , or ∫_{-∞}^(∞)f(x)dx=1 if the domain of f(x) is all real x"
- `ci7d5b28b0`: "Apply the properties of a probability density function to solve problems and justify conclusions"
- `cic6439f2a`: "Obtain the cumulative distribution function using the formula F(x)=∫_{a}^(x)f(t)dt where f(x) is a given probability density function defined on the interval (a,b]"
- `cibf3988c1`: "Find the probability density function from a given cumulative distribution function"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s04's handoff frame (F(x) = x²/9 on x from −1 to 4 with a gentle tangent at 0.5 and a steep one at 2.5, chips "Next: how steeply F climbs" and "?"). Compares equal-width strips to show steepness as packing; defines f(x) = F′(x) as probability per unit of x, f(x) = 2x/9 on [0, 3] (`cicf91daa4`); rescales s04's reaction-time histogram to a density histogram, so a density of 3.5 per second is shown to be allowed; shows P(c < X < d) as the area ∫ f = F(d) − F(c), reproducing s04's 1/3; states and explains the two properties (`ci660140f9`); finds k for k(4 − x) on [0, 4] and P(X < 1) = 7/16 (site problem 1, numbers unchanged; `ci7d5b28b0`); builds F(x) = (8x − x²)/16 by accumulating f with a dummy variable (site problem 2; `cic6439f2a`); differentiates F(x) = x²(3 − x)/4 to f(x) = 3x(2 − x)/4 (site problem 3 steps 1 and 2 only; `cibf3988c1`). Stops at moving between f and F and computing probabilities. Not taught: the mode (site problem 3 steps 3 and 4, and card 06; s06); median and quartiles (s06); the continuous uniform model (site card 05; s07); continuous mean and variance (s08).

## Decisions

- **Learner question kept (outline).** "How does a density determine its CDF and probabilities?" The answer, built in order: equal-width strips hold more probability where F is steep (hook); the rise per unit width tends to F′(x), so f = F′ measures probability per unit of x (2); a density can exceed 1, because probability is the area (3); area under f from c to d is F(d) − F(c), the probability (4); f ≥ 0 because F never decreases, and total area 1 because it is all of the probability (5); these properties find unknown constants and probabilities (6, 7); F is the accumulated area from the start of the domain (8); f is the derivative of F, 0 on the flat pieces (9).
- **The hook (from s04's question).** Equal strips of width 0.1 under F(x) = x²/9: F(0.6) − F(0.5) = 11/900 ≈ 0.012 and F(2.6) − F(2.5) = 51/900 ≈ 0.057, almost five times as much. Steepness is packing, made visible before any definition.
- **The cause on the graph (owner quality bar).** Scene 2's strip at x = 1.5 narrows (h = 0.1, 0.01) while its rise ÷ width readout approaches the tangent gradient 1/3 (`StripRiseRatio`, new; the same idea as i08's `AccumulationTracer` `edgeStrip`, here on F). The lower panel then shows f(x) = 2x/9 in the paired view (`DerivativeTracer`).
- **Density can exceed 1, with s04's data (and a site correction).** The site says the relative-frequency histogram "was a blocky picture of f all along: bar heights were relative frequency per class, which is density". That is not right: density heights are relative frequency ÷ class width. Scene 3 divides 0.10, 0.25, 0.35, 0.20, 0.10 by 0.1 s to get 1.0, 2.5, 3.5, 2.0, 1.0 per second; the bars change height while each bar's area stays its probability. This gives the site's "f(2) = 3 is legal" point with real data, and replaces the site's abstract hook.
- **Probability as area (`cicf91daa4`).** F is a primitive of f, so ∫_c^d f(x) dx = F(d) − F(c) (i08 and i09 recalled in one phrase). For 2x/9 from 1 to 2: 1/3, s04's answer, now as an area (a trapezium fill with `AreaFill`). Endpoints still do not matter (s04, one phrase).
- **The two properties with their reasons (`ci660140f9`).** f ≥ 0 because F never decreases (s04); total area 1 because it is all of the probability; both domain forms of the syllabus stated ([a, b] and all real x). Checked on 2x/9: a triangle of base 3 and height 2/3, area 1.
- **Problems and justification (`ci7d5b28b0`; site problem 1, numbers unchanged).** f(x) = k(4 − x) on [0, 4]: triangle area ½ × 4 × 4k = 8k (site's own geometric check) with a `NumericDial` on k showing the area readout reach 1 at k = 1/8; then the integral agrees. Justification spoken: k is positive because f ≥ 0. P(X < 1) = 7/16, with the site's sense check ("just under half in the first quarter, highest at 0").
- **F from f (`cic6439f2a`; site problem 2).** F(x) = ∫₀ˣ (4 − t)/8 dt = (8x − x²)/16 on [0, 4] with the `AccumulationTracer` (marker sweeping, signed `AreaFill`, upper F drawn to the marker); the dummy variable t is given its reason; checks F(0) = 0, F(4) = 1, F(1) = 7/16 (scene 7's area as a height); flat pieces 0 and 1.
- **f from F (`cibf3988c1`; site problem 3, steps 1 and 2).** F(x) = x²(3 − x)/4 on [0, 2]: check ends, expand, differentiate: f(x) = (6x − 3x²)/4 = 3x(2 − x)/4, ≥ 0 on [0, 2], 0 elsewhere because the flat pieces have gradient 0. Its mode (steps 3 and 4) is kept for s06, which opens on this density.
- **Attempts (original).** (A1) f(x) = k(x + 1) on [0, 2], 0 elsewhere: find k, then P(X > 1). Answer k = 1/4, P(X > 1) = 5/8. Crossed: "3/4" (f(2), a height, not an area). (A2) F(x) = (4x − x²)/4 on [0, 2] with flat pieces: find f. Answer f(x) = (2 − x)/2 on [0, 2], 0 elsewhere. Crossed: "f(x) = 1 for x > 2" (the derivative of a constant is 0). The site practice (k(9 − x²), uniform train) stays unseen. Neither card shows a value of k, an area, a derivative or the form of the answer.
- **Mistake scene:** none separate. "A density is a probability" and "a density can't exceed 1" (2, 3; feedback 1 crossed); "maximise or read f for a probability" (feedback 1); "reuse x as the integration variable" (8); "drop 0 elsewhere" (9; feedback 2 crossed); "a negative k is fine" (6).
- **Memory aid.** The filling tank: "f is how fast probability pours in at x; F is how much has collected up to x." with "Differentiate F to get f. Integrate f to get F. The tank ends at exactly 1." It recalls i06's tap context (rate and amount). See "Memory aid check".
- **Handoff (outline next s06, "How do mode, median and quartiles differ for a density?").** Scene 15 shows f(x) = 3x(2 − x)/4 on [0, 2] (scene 9's result) and asks where X is most likely, and where the middle is with half the probability each side. No peak value, no shading at 1. Chip "Next: the most likely value and the middle".
- **Site sources used:** lesson 9 card 02 (f = F′, "probability per unit of x" with the physical density analogy, the two properties and their reasons), card 03 (P = ∫, "the second validity condition is just this rule applied to everything", the sign check on k), card 04 (F(x) = ∫ₐˣ f(t) dt, the dummy variable, "differentiate only the non-constant piece", "and 0 elsewhere"), card 07 problems 1, 2 and 3 (steps 1 and 2), card 08 traps 01, 03 and 04. Not used here: the uniform card 05 (s07), the mode card 06 and problem 3 steps 3 and 4 (s06), the x²/9 constant example k x² on [0, 3] (kept as a possible s06 or practice item), the practice questions (unseen).
- **Site corrections (new, for brief logging):** (1) lesson 9 card 02: "The histogram from the previous lesson was a blocky picture of f all along: bar heights were relative frequency per class, which is density." Wrong: density = relative frequency ÷ class width (for the card 02 reaction-time data, 1.0, 2.5, 3.5, 2.0, 1.0 per second, not 0.10 to 0.35); a relative-frequency histogram matches a density only when the class width is 1. Same claim in lesson 8 card 09 (s04 site note 1). Suggested fix: "Divide each bar's relative frequency by its class width and the histogram becomes a blocky picture of f: each bar's area is then its probability." (2) Card 03: "A negative constant is a signal that a limit of integration has been swapped" is too narrow; a negative k signals an error of any kind (often swapped limits, also a sign slip); suggest "usually a sign that the limits were swapped or a sign was lost".
- **Pack questions answered:** no pack exists. All site values recalculated with SymPy ("Numbers to verify").
- **Cause chain taught, in order:** (1) equal widths hold more probability where F is steep (1); (2) rise ÷ width tends to F′(x), probability per unit of x (2); (3) a density can exceed 1 because area, not height, is probability (3); (4) F is a primitive of f, so area = F(d) − F(c) = probability (4); (5) f ≥ 0 because F never decreases; total area 1 because it is everything (5); (6) so an unknown constant comes from total area 1, and must be positive (6); (7) a probability is an area (7); (8) F accumulates f from the start of the domain (8); (9) f is the gradient of F, 0 where F is flat (9).
- **Entry knowledge (draft route):** s04 (P(X = x) = 0; F(x) = P(X ≤ x); F(b) − F(a); F never decreases, 0 to 1, flat pieces; x²/9 and its probabilities; the reaction-time histogram); i06 and i07 (definite integral as signed area; strips); i08 (F(x) = ∫ₐˣ f(t) dt has derivative f(x); a dummy variable); i09 (∫_c^d f = F(d) − F(c) with a primitive); d01 to d04 (power rule); Year 11 area of a triangle and trapezium.
- **Learner-visible vocabulary (plain meaning at first use):** probability density function, PDF, density (f(x) = F′(x), probability per unit of x, scene 2); dummy variable (a letter used only inside the integral, because x is already the upper limit, scene 8); domain (recall: the interval where X lives, scene 5).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **equal strips on F** (`StripRiseRatio`, new: two strips of width 0.1 with rise brackets, scene 1; then one strip at 1.5 narrowing with a rise ÷ width readout approaching the tangent gradient, scene 2); **paired F and f** (`DerivativeTracer` mode `paired`, F upper, f lower); **density rescale** (`ClassHistogram` `mode` relative → density from s04, area labels kept); **area as probability** (`AreaFill` from i06 on 2x/9 between 1 and 2; `CdfSubtraction` from s04 on the upper F); **k dial** (`NumericDial` with the triangle k(4 − x) and an area readout 8k); **accumulation** (`AccumulationTracer` from i08: marker sweeping x from 0 to 4, fill, upper F drawn to the marker, dots at x = 1, 4); **differentiate back** (`AlignedAlgebra` with `ExpressionSlot`); **tank** (plain SVG, scene 10: a tank filling at a rate linked to f under the marker); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; paired graph on the left (upper F about 1,000 × 380 px, lower f about 1,000 × 300 px, shared x); algebra in the right column. Unequal unit lengths (no angle claims).
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Strips on x²/9: F(0.6) − F(0.5) = 0.11/9 = 11/900 ≈ 0.0122; F(2.6) − F(2.5) = 0.51/9 = 51/900 ≈ 0.0567; ratio 51/11 ≈ 4.64 ("almost five times"). At 1.5: (F(1.6) − F(1.5))/0.1 = 0.31/0.9 ≈ 0.344; h = 0.01: (F(1.51) − F(1.5))/0.01 = 0.0301/0.09 ≈ 0.334; F′(1.5) = 1/3.
  (b) Density histogram: 0.10/0.1 = 1.0, 0.25/0.1 = 2.5, 0.35/0.1 = 3.5, 0.20/0.1 = 2.0, 0.10/0.1 = 1.0 (per second); areas back to 0.10 to 0.35; total 1.
  (c) ∫₁² 2x/9 dx = (4 − 1)/9 = 1/3; ∫₀³ 2x/9 dx = 1 (triangle ½ × 3 × 2/3).
  (d) k(4 − x): ∫₀⁴ = 8k (triangle ½ × 4 × 4k); k = 1/8; f(0) = 1/2. P(X < 1) = (1/8)(4 − ½) = 7/16. F(x) = (8x − x²)/16; F(4) = 1; F(1) = 7/16.
  (e) F(x) = x²(3 − x)/4 = (3x² − x³)/4 on [0, 2]; F(2) = 1; f(x) = (6x − 3x²)/4 = 3x(2 − x)/4; ∫₀² f = 1; f(1) = 3/4 (not stated in s05).
  (f) A1: ∫₀² k(x + 1) dx = 4k, k = 1/4; P(X > 1) = (1/4)[(2 + 2) − (½ + 1)] = 5/8 (trapezium (½ + ¾)/2 × 1 = 5/8); f(2) = 3/4 (crossed). A2: F(x) = (4x − x²)/4, F(0) = 0, F(2) = 1; f(x) = (4 − 2x)/4 = (2 − x)/2 ≥ 0 on [0, 2]; ∫₀² f = 1.
  (g) Pronunciations: "F prime of x" (series form); "two x over nine"; "k times four minus x"; "eight x minus x squared, over sixteen"; "f of t, d t"; "three x times two minus x, over four"; "five eighths"; "seven sixteenths".
  (h) Windows: F upper x −1 to 4, y −0.2 to 1.2 (s04's handoff window); f lower y 0 to 0.8; density histogram y 0 to 4 per second; k(4 − x) on x −0.5 to 4.5, y 0 to 0.8 (dial k from 0.05 to 0.2, f(0) = 4k); F for k(4 − x) y 0 to 1.2; scene 9 x −0.5 to 2.5, upper y −0.2 to 1.2, lower y 0 to 1.

Main question: *Where F climbs steeply, values of X are packed closely. How does the steepness of F become a density f, why are probabilities areas under it, and how do we move between f and F?*
Entry knowledge (s04 CDF and its properties; i08 accumulation function and its derivative; i09 definite integrals by primitives; power rule): F(b) − F(a); F never decreases; ∫ₐˣ f(t) dt has derivative f(x); ∫_c^d f = F(d) − F(c).
Stops after: f = F′, probability as area, the two properties, constants, F from f and f from F. No mode, quantiles, uniform or mean.
Handoff: math-a12-s06: f(x) = 3x(2 − x)/4 on [0, 2], "where is X most likely, and where is the middle?" (a question only).

**Draft route entry (for the route file):** id `math-a12-s05`; playlistOrder 57; mainLearnerQuestion "How does a density determine its CDF and probabilities?"; syllabusActionIds `cicf91daa4`, `ci660140f9`, `ci7d5b28b0`, `cic6439f2a`, `cibf3988c1`; entryKnowledge "s04 CDF, F(b) − F(a), non-decreasing, flat pieces; i08 accumulation function and dummy variable; i09 definite integrals by primitives"; start "s04's handoff: equal strips on x²/9, steepness as packing"; stop "f = F′ as probability per unit of x; density histogram; P = ∫ f = F(d) − F(c); f ≥ 0 and total area 1 with reasons; unknown constant k(4 − x); F from f with a dummy variable; f from F with 0 elsewhere. No mode or quantiles."; next "math-a12-s06: mode, median and quartiles of a density".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as s04): F teal in the upper panel; the density f blue in the lower panel; strips and areas amber (probability), using `AREA_POS` for fills; brackets amber; algebra ink with the current line bright and earlier lines dim. Exact fractions in the algebra; decimals only in grey readouts and data.

### 1. hook (equal strips, unequal probability)
> Last video ended here, with F of x equals x squared over nine. It climbs slowly near zero and steeply near three. Compare two strips of the same width, one tenth. From zero point five to zero point six, F only rises by about zero point zero one two. From two point five to two point six, it rises by about zero point zero five **seven**. So the same width holds almost five times as much probability near two point five. Steep means the values of X are packed closely. So how do we measure that packing?

Visual: opens on s04's last frame (s04's key notes cross-fade back to it): F(x) = x²/9 on x from −1 to 4 with its flat pieces, teal, the gentle tangent at 0.5 and the steep one at 2.5, chips "Next: how steeply F climbs" and "?". Heading writes on: "How does a density give probabilities?". On "two strips" the tangents fade and `StripRiseRatio` draws two amber vertical strips of width 0.1 at [0.5, 0.6] and [2.5, 2.6], each with a rise bracket on the F axis; grey readouts "rise ≈ 0.012" and, on "seven", "rise ≈ 0.057". On "five times" a grey chip "0.057 ÷ 0.012 ≈ 4.6". On "packed closely" a row of dots along the x-axis appears, sparse near 0.5 and dense near 2.5 (illustrative, tagged "more values per unit of x").

### 2. the density is the gradient of F
> Divide the rise in F by the width of the strip, and you get probability per unit of x. Make the strip thinner and thinner, and that becomes the gradient of F. So we define the probability density function, f of x, as F prime of x. Here, f of x is two x over nine, between zero and three, and zero everywhere else. At one point five, F has gradient one third, so the density there is one **third**. A density isn't a probability. It's probability per unit of x, like a rope's density in grams per metre.

Visual: camera continue. One strip at x = 1.5 (width 0.1), readout "rise ÷ width ≈ 0.344"; on "thinner" it narrows to 0.01, readout "≈ 0.334", and the tangent at (1.5, 1/4) draws with `TangentTriangle` and `ReadoutPanel` "gradient 1/3". Right column: boxed "f(x) = F′(x)" with tag "probability density function (PDF)". The window splits into the paired view (author note h): F upper; on "two x over nine" the lower panel draws f(x) = 2x/9 in blue on [0, 3] and the line y = 0 outside it (open and filled endpoint markers as the build's domain rule gives), tag "f(x) = 2x/9, 0 ≤ x ≤ 3; 0 elsewhere". On "third" a dashed connector drops from the tangent point to (1.5, 1/3) on f, which glows. On the last sentence a chip "density = probability per unit of x" and a grey small "rope: grams per metre".

### 3. a density can be bigger than one
> Here's why that matters. Go back to the reaction-time histogram from last video. Divide each relative frequency by the class width, one tenth of a second. The heights become one, two point five, three point five, two and one, per **second**. Now each bar's area, height times width, is its probability, and the areas add to one. Three point five is bigger than one, and that's fine. A density can be bigger than one, because the probability is the area, not the **height**.

Visual: board clears to s04's reaction-time histogram (`ClassHistogram`, relative mode, heights 0.10 to 0.35, y axis 0 to 0.4). On "Divide" the y axis rescales to "density (per second)", 0 to 4, and the bars grow to 1.0, 2.5, 3.5, 2.0, 1.0 (about 1 s) while each bar's area label stays: "0.10", "0.25", "0.35", "0.20", "0.10". Grey row "height = relative frequency ÷ 0.1". On "areas add to one" the area labels sum in the right column: "0.10 + 0.25 + 0.35 + 0.20 + 0.10 = 1". On "Three point five" the tallest bar glows with a dashed line y = 1 beneath its top, tag "density 3.5 > 1: allowed". On "height" the bar's area tints amber, tag "probability = area".

### 4. probability is area under the density
> So for a density, probability is area. F is a primitive of f, so the area under f from c to d is F of d minus F of c. That's exactly the probability that X is between c and d. For our example, the area under two x over nine from one to two is four ninths minus one ninth, which is one **third**. That's the answer from last video, now shown as an area. And since single values carry no probability, the ends of the interval still don't matter.

Visual: board clears back to the paired view (F upper, f = 2x/9 lower). Right column: "P(c < X < d) = ∫_c^d f(x) dx = F(d) − F(c)" (`IntegralNotation`, grey tag "F is a primitive of f"). On "one to two" `AreaFill` fills under f from 1 to 2 in pale teal, and in the upper panel `CdfSubtraction` brackets F(1) = 1/9 and F(2) = 4/9. Right column: "∫₁² 2x/9 dx = [x²/9]₁² = 4/9 − 1/9 = 1/3"; on "third" both the area and the bracket label "1/3" glow together. On the last sentence a grey chip "≤ or <: same (P(X = c) = 0)".

### 5. the two properties of a density
> Every density has two properties. First, f of x is never negative, because F never decreases, so its gradient can't be below zero. Second, the total area under f is one, because that's all of the probability. If X lives on an interval from a to b, the integral from a to b is one. If X can be any real number, the integral from minus infinity to infinity is one. Check two x over nine. It's never negative from zero to three, and its area is a triangle, half of three times two thirds, which is **one**.

Visual: camera continue. Right column boxed, two rows: "f(x) ≥ 0 for all x in the domain" (on "never negative"; the lower curve tints above the axis, grey tag "F never decreases, so F′ ≥ 0") and "∫_a^b f(x) dx = 1 on [a, b], or ∫_−∞^∞ f(x) dx = 1 on all real x" (on "total area"). On "Check" `AreaFill` fills the whole triangle under 2x/9 from 0 to 3, a base bracket "3" and a height bracket "2/3" draw; on "one" "½ × 3 × 2/3 = 1" with a tick, and the upper F reaches 1 at x = 3 with a matching glow.

### 6. finding an unknown constant
> These two properties solve problems. A density is k times four minus x, for x from zero to four, and zero elsewhere. Find k. The total area must be one. The graph is a triangle with base four and height four k, so its area is eight **k**. Integrating gives the same answer. So eight k equals one, and k is one **eighth**. It has to be positive, because a density can't be negative.

Visual: board clears (new case). Task strip "Find k." with the conditions below it: "f(x) = k(4 − x) for 0 ≤ x ≤ 4; f(x) = 0 elsewhere" (site problem 1). One graph (author note h): the triangle under k(4 − x), with a `NumericDial` "k" at 0.05; brackets "base 4" and "height 4k". On "eight k" a readout "area = ½ × 4 × 4k = 8k"; the dial sweeps k up while the area readout (grey decimal beside it) rises; it stops on "eighth" at k = 1/8, readout "area = 1", tick. Right column `AlignedAlgebra`: "∫₀⁴ k(4 − x) dx = k[4x − x²/2]₀⁴ = k(16 − 8) = 8k" (on "Integrating"), "8k = 1, so k = 1/8" boxed on "eighth". On the last sentence a grey tag "k > 0 because f ≥ 0".

### 7. a probability as an area
> Now find the probability that X is less than one. Integrate four minus x, over eight, from zero to one. That's one eighth of four minus a half, which is seven sixteenths. Just under half of the probability sits in the first quarter of the range. That fits, because this density is highest at **zero**.

Visual: camera continue (the dial fades; f(x) = (4 − x)/8 fixed). Task strip "Find P(X < 1)." `AreaFill` from 0 to 1 in pale teal. Right column: "P(X < 1) = ∫₀¹ (4 − x)/8 dx = (1/8)[4x − x²/2]₀¹ = (1/8)(4 − ½) = 7/16", boxed, grey readout "≈ 0.44". On "first quarter" a bracket over [0, 1] tagged "¼ of the range"; on "zero" the point (0, ½) glows, tag "highest density".

### 8. building F from f
> We can also build F from f. F of x is the area under f from the start of the domain up to x. So F of x is the integral from zero to x of f of t, d t. The letter t is a dummy variable, because x is already the upper limit. Here, that gives eight x minus x squared, over sixteen, for x from zero to four. Check the ends. F of zero is zero, and F of four is thirty two minus sixteen, over sixteen, which is **one**. And F of one is seven sixteenths, the area we just found.

Visual: the paired view returns for this example (F upper, y 0 to 1.2; f lower). `AccumulationTracer`: a marker at x on the lower axis sweeps from 0 to 4 while `AreaFill` follows it and the upper curve draws up to the marker; on "seven sixteenths" (last sentence) a dot at (1, 7/16) on F glows with a connector to the scene 7 area. Right column: "F(x) = ∫₀ˣ f(t) dt" with "t" ringed (tag "dummy variable: x is the upper limit"); "= ∫₀ˣ (4 − t)/8 dt = (1/8)[4t − t²/2]₀ˣ = (8x − x²)/16, 0 ≤ x ≤ 4"; checks "F(0) = 0, F(4) = (32 − 16)/16 = 1" ticked on "one". Grey under it: "F(x) = 0 for x < 0; F(x) = 1 for x > 4" with the flat pieces drawing on the upper graph.

### 9. finding f from F
> Going the other way takes one step. Differentiate. A variable has F of x equals x squared times three minus x, over four, for x from zero to two. First check the ends. F of zero is zero, and F of two is four times one, over four, which is one. Expand it, and differentiate. The density is three x times two minus x, over **four**. Both factors are positive between zero and two, so f is never negative. And f is zero elsewhere, because the flat pieces of F have gradient **zero**.

Visual: board clears (new case). Task strip "Find the probability density function." with the conditions "F(x) = 0 for x < 0; F(x) = x²(3 − x)/4 for 0 ≤ x ≤ 2; F(x) = 1 for x > 2" (site problem 3). Right column: "F(0) = 0, F(2) = (4 × 1)/4 = 1" ticked; "F(x) = (3x² − x³)/4"; "f(x) = F′(x) = (6x − 3x²)/4 = 3x(2 − x)/4", boxed on "four", with "3x" and "(2 − x)" in `ExpressionSlot`s that tint green on "positive". Paired graphs at the left (author note h): F upper with flat pieces; on "Differentiate" the `DerivativeTracer` sweeps and the lower curve f = 3x(2 − x)/4 draws as a hump on [0, 2]. On "zero" (last) the flat pieces of F glow, tangent stubs on them read "gradient 0", and the lower panel's line y = 0 outside [0, 2] glows, row "f(x) = 0 elsewhere".

### 10. memory aid
> Here's a picture to hold on to. Think of a tank filling from a tap. The density f is how fast probability is pouring in at x, and F is how much has collected up to x. Differentiate F to get f. Integrate f to get F. And the tank ends up holding exactly **one**.

Visual: the scene 9 graphs shrink to the left. A plain coded tank (outline with a level) at the right fills as a marker sweeps along f, its inflow arrow thickening where f is high; the level reads F at the marker (grey readout); on "one" the level reaches a line marked "1". The handwritten lines write large: "f: how fast probability pours in. F: how much has collected." and "Differentiate F → f. Integrate f → F. Total: 1." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A density is k times x plus one, for x from zero to two, and zero elsewhere. Find k, then find the probability that X is greater than one. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X has probability density function f(x) = k(x + 1) for 0 ≤ x ≤ 2, and f(x) = 0 elsewhere. (a) Find the value of k. (b) Find P(X > 1)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No graph, no area, no value of k.

### 12. feedback 1 (brief)
> The total area is k times x squared over two plus x, from zero to two, which is four **k**. So k is one quarter. Then the probability that X is more than one is the integral from one to two of x plus one, over four. That's one quarter of four minus one and a half, which is five **eighths**. Three quarters is wrong. That's the height of f at two, not an **area**.

Visual: card shrinks to the top. On "four k" "0 ≤ x ≤ 2" is underlined in the card; row "∫₀² k(x + 1) dx = k[x²/2 + x]₀² = 4k = 1, so k = 1/4". On "eighths" a small graph shows the trapezium under (x + 1)/4 from 1 to 2 filled amber and the row "P(X > 1) = (1/4)[x²/2 + x]₁² = (1/4)(4 − 3/2) = 5/8" boxed. On "area" a chip "P(X > 1) = f(2) = 3/4" fades in and is crossed (caption "a height, not an area"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A continuous random variable has F of x equals four x minus x squared, over four, for x from zero to two, with F equal to zero below zero, and one above two. Find its probability density function. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (4x − x²)/4 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the probability density function of X." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No graph and no derivative.

### 14. feedback 2 (brief)
> Differentiate the middle piece. Four minus two x, over four, is two minus x, over **two**, for x from zero to two. It's never negative there. Outside that interval, f is zero, because the flat pieces of F have gradient **zero**. Saying f is one for x above two is wrong. The derivative of a constant is zero, not **one**.

Visual: card shrinks to the top. On "two" "(4x − x²)/4" is underlined in the card and the row "f(x) = F′(x) = (4 − 2x)/4 = (2 − x)/2, 0 ≤ x ≤ 2" writes, boxed. Grey tag "≥ 0 on [0, 2]". On "zero" the row "f(x) = 0 elsewhere" joins the box. On "one" a chip "f(x) = 1 for x > 2" fades in and is crossed (caption "d/dx (1) = 0"). Hold about 1 second.

### 15. handoff
> So the density is the gradient of F, probabilities are areas under it, and the total area is one. Next, a new question. Here's the density we found a moment ago, three x times two minus x, over four. Where is X most likely to be? And where's the middle, with half the probability on each **side**?

Visual: the two memory-aid lines show small at the top, then fade on "Next". Board clears to one graph (author note h): f(x) = 3x(2 − x)/4 in blue on [0, 2], 0 elsewhere, x ticks 0, 1, 2, no y value at the peak. On "most likely" a "?" chip sits above the hump; on "side" a dashed vertical line with a "?" label slides along the axis and stops at no labelled value (it hovers, unlabelled). Chip "Next: the most likely value and the middle". No peak value, no area shading, no "1". Hold about 2 seconds. This is s06's opening frame; scene 16 returns to it after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Probability density function: f(x) = F′(x), probability per unit of x. A density is not a probability, and it can be bigger than 1.
2. P(c < X < d) = ∫_c^d f(x) dx = F(d) − F(c). Probability is area under f.
3. Every density: f(x) ≥ 0, and the total area is 1 (∫_a^b f(x) dx = 1 on [a, b]). Use total area 1 to find an unknown constant; it must make f ≥ 0.
4. F(x) = ∫_a^x f(t) dt (t is a dummy variable); check F(a) = 0 and F(b) = 1. f(x) = F′(x), and f(x) = 0 outside the domain.

Memory aid (large, on the notes screen): *f: how fast probability pours in. F: how much has collected.* Second line: *Differentiate F → f. Integrate f → F. Total: 1.*

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s, root decision 20) back to scene 15's frame exactly (f(x) = 3x(2 − x)/4 with the "?" over the hump, the unlabelled dashed line, and the chip "Next: the most likely value and the middle"). This is the final frame and s06's opening frame.

## Teaching checks

- **Does it explain causes?** Why measure steepness: equal widths hold different probability (1). Why f = F′: rise per width tends to the gradient (2). Why a density can exceed 1: area, not height, is probability (3). Why area is probability: F is a primitive of f (4). Why f ≥ 0: F never decreases (5). Why total area 1: it is all of the probability (5). Why k = 1/8 and positive: total area 1 and f ≥ 0 (6). Why t: x is the upper limit (8). Why f = 0 outside: F's flat pieces have gradient 0 (9).
- **Misconceptions addressed:** "a density is a probability" and "densities are at most 1" (2, 3; key note 1); "read a probability as a height" (feedback 1 crossed); "reuse x inside the integral" (8); "drop 0 elsewhere" or "differentiate a flat piece to 1" (9; feedback 2 crossed); "a negative k is a valid answer" (6).
- **One idea at a time:** one strip per sentence in 1 and 2; one property per sentence in 5; constant (6), probability (7), accumulation (8) and differentiation (9) as separate scenes on two examples.
- **Video makes it easier:** strips with different rises (1), a strip narrowing into a tangent (2), bars growing above 1 while their areas stay (3), a fill and a bracket that show the same 1/3 (4), a dial that stops when the area reaches 1 (6), and a sweeping marker that draws F (8) are each the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (the density with its interval and "0 elsewhere"; the full piecewise F), 10 seconds each with the invitation to pause; neither card shows a constant, an area or a derivative. One crossed mistake each; feedback about 29 s and 24 s (scenes 12 and 14).
- **Avoided double teaching:** P(X = x) = 0 and F(b) − F(a) (s04) in one phrase each; the accumulation function and dummy variable (i08) and ∫ = F(d) − F(c) (i09) in one phrase; the reaction-time data (s04) reused, not rebuilt.
- **Syllabus coverage:** `cicf91daa4` (2, 4; key notes 1, 2); `ci660140f9` (5; both domain forms; key note 3); `ci7d5b28b0` (6, 7; A1; key note 3); `cic6439f2a` (8; key note 4); `cibf3988c1` (9; A2; key note 4).
- **Out of scope by design:** mode, median and quartiles (s06); uniform (s07); mean and variance (s08).

## Practice questions and model answers

**Attempt 1 (scene 11; original, HSC style, 3 marks suggested, not an official marking scheme).** "A continuous random variable X has probability density function f(x) = k(x + 1) for 0 ≤ x ≤ 2, and f(x) = 0 elsewhere. (a) Find the value of k. (b) Find P(X > 1)."
Model answer: (a) ∫₀² k(x + 1) dx = k[x²/2 + x]₀² = 4k = 1, so k = 1/4 (positive, so f ≥ 0). (b) P(X > 1) = ∫₁² (x + 1)/4 dx = (1/4)[(2 + 2) − (½ + 1)] = 5/8. Classic mistake (crossed): "3/4" (f(2), a height).

**Attempt 2 (scene 13; original, HSC style, 2 marks suggested).** "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (4x − x²)/4 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the probability density function of X."
Model answer: f(x) = F′(x) = (4 − 2x)/4 = (2 − x)/2 for 0 ≤ x ≤ 2, and f(x) = 0 elsewhere. Classic mistake (crossed): "f(x) = 1 for x > 2" (the derivative of a constant is 0).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook strips on x²/9 | [0.5, 0.6]: rise 11/900 ≈ 0.012; [2.5, 2.6]: 51/900 ≈ 0.057; ratio ≈ 4.6 | 1 |
| Strip at 1.5 | h = 0.1: ≈ 0.344; h = 0.01: ≈ 0.334; F′(1.5) = 1/3 | 2 |
| Density of x²/9 | f(x) = 2x/9 on [0, 3], 0 elsewhere | 2, 4, 5 |
| Density histogram | 1.0, 2.5, 3.5, 2.0, 1.0 per second; areas 0.10, 0.25, 0.35, 0.20, 0.10; sum 1 | 3 |
| Area 1 to 2 | ∫₁² 2x/9 dx = 4/9 − 1/9 = 1/3 | 4 |
| Total area | ½ × 3 × 2/3 = 1 | 5 |
| k(4 − x) (site problem 1) | area 8k; k = 1/8; f(0) = 1/2 | 6 |
| P(X < 1) | 7/16 ≈ 0.44 | 7 |
| F from f (site problem 2) | F(x) = (8x − x²)/16 on [0, 4]; F(0) = 0, F(4) = 1, F(1) = 7/16 | 8 |
| f from F (site problem 3) | F(x) = x²(3 − x)/4; F(2) = 1; f(x) = 3x(2 − x)/4 on [0, 2], 0 elsewhere | 9, 15 |
| A1 | k = 1/4; P(X > 1) = 5/8; crossed 3/4 | 11, 12 |
| A2 | f(x) = (2 − x)/2 on [0, 2], 0 elsewhere; crossed f = 1 for x > 2 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (3 Nov, isolated Python run); Codex to re-check numerically and with a CAS.

- (0.6² − 0.5²)/9 = 0.012222; (2.6² − 2.5²)/9 = 0.056667; ratio 4.636.
- (1.6² − 1.5²)/(9 × 0.1) = 0.34444; (1.51² − 1.5²)/(9 × 0.01) = 0.33444; d/dx (x²/9) = 2x/9; at 1.5: 1/3.
- 0.10/0.1, 0.25/0.1, 0.35/0.1, 0.20/0.1, 0.10/0.1 = 1, 2.5, 3.5, 2, 1.
- ∫₁² 2x/9 dx = 1/3; ∫₀³ 2x/9 dx = 1.
- ∫₀⁴ k(4 − x) dx = 8k; k = 1/8; ∫₀¹ (4 − x)/8 dx = 7/16; ∫₀ˣ (4 − t)/8 dt = (8x − x²)/16; at 4: 1; at 1: 7/16.
- d/dx [x²(3 − x)/4] = (6x − 3x²)/4 = 3x(2 − x)/4; F(2) = 1; ∫₀² 3x(2 − x)/4 dx = 1.
- A1: ∫₀² (x + 1) dx = 4; k = 1/4; ∫₁² (x + 1)/4 dx = 5/8; f(2) = 3/4.
- A2: d/dx [(4x − x²)/4] = (2 − x)/2; F(0) = 0, F(2) = 1; ∫₀² (2 − x)/2 dx = 1.

## Memory aid check

- **The filling tank: "f: how fast probability pours in. F: how much has collected."** Meaning, as said in scene 10: the density is a rate (probability per unit of x, here pictured as an inflow as the marker moves along x), and F is the accumulated amount. Assumptions checked: the inflow is never negative (f ≥ 0, so the level never falls: F never decreases); the tank ends at exactly 1 (total area 1); the "time" of the picture is x, not clock time (the picture is a moving marker along x, not a story about time). It recalls i06's tap context (a rate in L/min and the amount collected), which is entry knowledge, and i08's accumulation function. It helps a new case: given F, "how fast does it fill" means differentiate (A2). Introduced after the cause (2 to 9).
- **Considered, not used:** "height is density, area is probability" as the only aid (kept as a scene 3 tag; it does not cover the f and F conversion); "PDF = derivative, CDF = integral" as letters (easy to swap).

## Narration length estimate

Revision 1 (3 Nov; counted by script `s0406_count.py` in the designer's scratchpad with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,692 characters** (5,707 with joining spaces), 16 scenes. Characters per scene (1 to 16): 499, 498, 465, 439, 499, 373, 297, 466, 472, 256, 171, 352, 228, 309, 293, 75. At 13.3 characters per second the speech is about 428 s; add about 12 s of settling time (strips narrowing in 2, bars rescaling in 3, the k dial in 6, the accumulation sweep in 8, the derivative sweep in 9), 20 s for two countdowns, 5 s of short holds (10, 12, 14, 15) and about 55 s more of the quiet notes hold (about 92 s of holds): **about 520 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Feedback: scene 12 about 29 s and scene 14 about 24 s (including the 1 s holds). The content fills the band without padding; no trims are planned (trimming more than about 190 characters would drop below the 5,500 floor). If the learning review wants more, the listed genuine addition is the site's k x² on [0, 3] constant check (k = 1/9) as a second, shorter constant example in scene 6 (+ about 250 characters).

## Scene list and build ids

Lesson key `m-a12s05` (route math-a12-s05). Suggested explainer folder `src/explainer/lessons/math-a12-s05` and build folder `docs/production/claude-pm/lessons/m-a12s05` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, density-is-gradient, density-over-one, probability-is-area, two-properties, unknown-constant, probability-area, f-to-F, F-to-f, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s04's last frame continues into scene 1 (same window; tangents give way to strips); 1 to 2 camera continue, then the window splits into the paired view; 2 to 3 clear change (histogram); 3 to 4 clear change (paired view back); 4 to 5 camera continue; 5 to 6 clear change (new case); 6 to 7 camera continue; 7 to 8 camera continue into the paired view; 8 to 9 clear change (new case); 9 to 10 pull back; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s05-learning-review.md`, `science_check` = `checks/m-a12s05-maths-check.md`.

## Assets

Have (built): `FunctionGraph` / `GraphLayer` with `domain` pieces, `DerivativeTracer` (paired), `TangentTriangle` with `ReadoutPanel`, `NumericDial`, `IntegralNotation`, `AlignedAlgebra`, `ExpressionSlot`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`. Proposed, not yet built: `AreaFill` and `AccumulationTracer` (i06, i08 designs; root decision 31); `ClassHistogram` (density mode) and `CdfSubtraction` (s04 design). New, specified below: `StripRiseRatio`. No plates.

## Codex asset brief

**A. Coded part (new, for the next maths kit brief).** In `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample.

1. **`StripRiseRatio`** (scenes 1, 2). On a `FunctionGraph` of an increasing F: one or more vertical strips [x, x + h] with a rise bracket on the F axis (F(x + h) − F(x)) and an optional `ratio` readout (rise ÷ h); `h` animatable ({h, at}[]); optional `tangentAt` (draws the tangent with `ReadoutPanel` at the strip's left end for comparison); optional `densityDots` (illustrative dots along the x-axis whose spacing is inversely proportional to F′, author-supplied count, tagged illustrative). Readouts come from the supplied F. Checks: x²/9 strips [0.5, 0.6] and [2.5, 2.6] give 0.01222 and 0.05667; at 1.5, h = 0.1 and 0.01 give 0.3444 and 0.3344; the tangent gradient 1/3.

**B. Extensions to proposed parts (for the same brief):** `ClassHistogram` density mode (s04 item 1: heights rescale while area labels stay); `AccumulationTracer` (i08 item 1) used with an upper F that has flat pieces outside [a, b], with the marker sweeping past b (F stays 1) as a check; `AreaFill` on a piecewise f that is 0 outside its domain.

No painted plates.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (exact fractions; grey decimals), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every density and CDF is stated with its domain and "0 elsewhere" or its flat pieces wherever it is written (scenes 2, 6, 8, 9, 15; both attempts; key notes).
3. Confirm the density-histogram heights are relative frequency ÷ class width, that each bar's area is its relative frequency, and that the narration does not call the relative-frequency bars a density.
4. Confirm the scope of every learner-visible general claim: "a density can be bigger than 1" with "probability is the area"; the two properties with both domain forms; "k must be positive because f ≥ 0"; key notes 1 to 4.
5. Confirm F(x) = ∫ₐˣ f(t) dt is written with a dummy variable, with F(a) = 0 and F(b) = 1 checked, and that each derivative is checked against the integral it reverses.
6. Confirm both attempt questions carry every demand and condition, and that neither card or its visuals shows a constant, an area, a derivative or the form of the answer.
7. Confirm the handoff (scene 15) states no mode, peak value, median or area, and asks a question only.
8. Confirm the five syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Probability Density Functions: f(x) = F′(x), Probability as Area | Year 12 Maths Advanced

(Title length: 85 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson09.sa.html

Where a cumulative distribution function climbs steeply, values of X are packed closely together. Measure that steepness and you get the probability density function, f(x) = F′(x): probability per unit of x. See why a density can be bigger than 1 (the probability is the area, not the height), why P(c < X < d) is the area under f, and why every density is never negative with total area 1. Then use those properties to find an unknown constant, build F(x) by integrating f from the start of the domain, and recover f by differentiating F, with "0 elsewhere". Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, statistics and probability.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a probability density function (PDF), f(x) , for a random variable X with cumulative distribution function F(x) as f(x)=F'(x) and recognise that P(a<X<b)=∫_{a}^(b)f(x)dx"
"Recognise the properties of a probability density function: f(x)≥0 for all x in the domain of f(x), and ∫_{a}^(b)f(x)dx=1 if the domain of f(x) is [a,b] , or ∫_{-∞}^(∞)f(x)dx=1 if the domain of f(x) is all real x"
"Apply the properties of a probability density function to solve problems and justify conclusions"
"Obtain the cumulative distribution function using the formula F(x)=∫_{a}^(x)f(t)dt where f(x) is a given probability density function defined on the interval (a,b]"
"Find the probability density function from a given cumulative distribution function"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Continuous random variables and the CDF (previous video); definite integrals and the accumulation function. Next: Mode, median and quartiles of a density.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Syllabus quote form (maths check).** The crosswalk text for `cicf91daa4`, `ci660140f9` and `cic6439f2a` carries linear MathML with odd spacing and an invisible function-application character (U+2061) in "f(x)". The quotes here copy it exactly; the YouTube description may need the clean linear form ("∫_a^b f(x) dx = 1") if the invisible character causes problems in the upload tool. Root to decide once for s04 to s09.
- **2. Spoken "F prime of x" (voice pilot).** Series form from d10 onwards; listed for the brief 124 pilot with "f of t, d t".
- **3. Density histogram (learning review).** Scene 3 rescales s04's histogram; confirm the "same area, new height" move is clear without a separate class-width explanation.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s04 and i08 entry knowledge; check that the equal strips make "packing" visible before f is defined; that the narrowing strip is the evidence for f = F′; that "a density can be bigger than 1" is earned by the area labels; that each property has its reason; that the dial shows why k = 1/8; that the dummy variable reason is clear; that "0 elsewhere" comes from the flat pieces; that the tank aid's assumptions are not over-claimed; that the attempt cards give nothing away), then the Codex maths check and error check.
- The strips, the rescaling bars, the k dial and the accumulation sweep carry the explanation; judge them at playback speed in the voiced preview, not from stills. Readouts must be computed from the same functions as the curves.

## Revision 2 (4 November 2026, brief 162 repairs)

Invisible U+2061 removed from the quotes (root decision 56); `cic6439f2a` quote corrected to the official (a,b]. No narration change. Narration now 5,692 characters (counted by the build parser rules). No em dashes.
