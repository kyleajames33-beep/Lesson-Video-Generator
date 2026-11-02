# Maths A12 I08: Why does differentiating accumulation recover the rate? The accumulation function A(x), its gradient at the moving edge, moving the start, and the Fundamental Theorem of Calculus (design)

Status: Revision 1 (2 Nov 2026), overnight queue wave A1. Needs root decisions, the student learning review and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `DerivativeTracer` in paired mode, `TangentTriangle` with `ReadoutPanel`, `NumericDial`, `IntegralNotation`, `PrimitiveFamily`, `AlignedAlgebra`), plus the new area parts specified in `math-a12-i06.md` ("Codex asset brief") and the two accumulation parts specified under "Codex asset brief" here (`AccumulationTracer`, `LowerLimitDial`). Nothing recorded; human listening pending.

Narration 5,599 characters, 16 scenes, about 525 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the definite-integral group in the Year 12 Mathematics Advanced integral calculus strand (outline playlist order 31), after i07 (the definite integral as a signed sum) and before i09 (evaluating definite integrals without losing signs). Templates: `math-a12-i05.md` (Revision 2) and `math-a12-d10.md` (Revision 2), and the i07 design (Revision 1, written just before this one, whose scene 15 is this video's first frame): same structure, voice, paper style and kit parts, and the same paired gradient view as i04 and i05 (here the lower panel holds f, "the height", and the upper panel holds A). All maths visuals are coded; no painted plates (programme decision 5). No pre-design pack exists, so the pack work is done here. Site lesson read (2 Nov, read-only): integral-calculus lesson 8 (the Fundamental Theorem of Calculus), `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson08.sa.html`, SHA256 `2aea0b928a296fdd3b3a13be1a650300df800b8a626c8ca861976bb5bf2dcdb8`: its accumulator interactive (f(t) = 3 − t with a = 0; A peaks at x = 3 where f = 0; "slide a and see the whole A-curve shift by a constant while the slope stays put"), its hook (d/dx ∫₀ˣ t² dt = x²) and its trap 03 ("differentiating the integrand instead"), reused; its worked examples are not used (the chain-rule upper limit is outside the 2024 points; see "Decisions"). No route entry exists yet; the draft entry is in "Decisions". Root decisions applied: "+ C" and derivative checks kept (+ C appears as the moving-start shift and cancels in F(b) − F(a)); exact values in algebra, decimals only in grey readouts; attempt cards never give away answers or signs; final frame is the handoff frame (root decision 20).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label anywhere; maths visuals coded, never painted; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Earlier videos recalled in a sentence, not re-taught: i07 (definite integral as a signed sum, geometry), i06 (strip = rate × width; the trolley and tap estimates), i01 (any two primitives differ by a constant; + C), Year 11 (the gradient of a chord and differentiation from first principles), i05 (∫ cos x dx = sin x + C), i01 to i02 (power primitives).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Integral calculus, group "The Fundamental Theorem of Calculus"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` with the MathML written in linear form:

- `ci9652c528`: "Consider the function defined by A(x) = ∫_{a}^{x} f(t) dt and use a graphing application to recognise that A(x) is a primitive of f(x)"
- `cid76b6b1d`: "Recognise the Fundamental Theorem of Calculus as ∫_{a}^{b} f(x) dx = [F(x)]_{a}^{b} = F(b) − F(a) for a continuous function f on the interval a ≤ x ≤ b where F(x) is any primitive of f(x)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i07's last frame (y = 3 − t on 0 ≤ t ≤ 6, shaded from 0 to a marker at x = 2, "A(x) = ∫₀ˣ (3 − t) dt" with "?", chip "Next: let the end move"); explains the dummy variable t; tracks A(x) by i07's geometry (A(1) = 5/2, A(2) = 4, A(3) = 9/2, A(4) = 4, A(6) = 0) and plots the hill; shows on a paired view that A's gradient matches f's height (gradient 2 at x = 1; flat at x = 3, the site accumulator's peak); explains why with the strip at the moving edge and chord gradients (1.75, 1.95 at x = 1, from first principles) tending to f(x) for a continuous f; confirms A(x) = 3x − x²/2 by the trapezium and differentiates it to 3 − x; repeats the graphing-application view on a curve, A(x) = ∫₀ˣ t² dt (the site's hook), whose traced gradient lands on x² and whose plotted curve matches x³/3 (`ci9652c528`); moves the start from 0 to 1 and shows the whole curve sliding down by 5/2 with gradients unchanged (+ C); derives F(b) − F(a) = A(b) for any primitive F and states the Fundamental Theorem with its condition and bracket notation (`cid76b6b1d`); confirms three earlier strip results by primitives (8/3 for i06's trolley, 1 for i06's tap, 32 for i07's car). Stops at recognising the theorem with one evaluation per earlier result and two attempts. Not taught: practice in evaluating many definite integrals, negative limits and sign care (`ci6dc07a10`, i09: the handoff only asks a question); reversed limits and splitting (i09); areas with absolute values (i10); the chain-rule form d/dx ∫_a^{u(x)} f(t) dt (not in the 2024 Advanced points; the site teaches it); a formal proof beyond the strip argument.

## Decisions

- **Learner question kept (outline).** "Why does differentiating accumulation recover the rate?" The answer, built in order: the area so far, A(x), changes as its end moves (1); tracked by shapes, it makes a hill that climbs fastest where the graph is tallest and is flat where the graph is zero (2, 3); moving the end by h adds one thin strip of area about f(x) × h, so the chord gradient of A is about f(x), and exactly f(x) as h → 0 (4); so A is a primitive of f, and if f is a rate, the amount accumulated grows at that rate (5); the same holds on a curve, so it is not a straight-line trick (6); a different start changes A by a constant only (7); any primitive F is A + C, and A(a) = 0, so F(b) − F(a) = ∫_a^b f(x) dx (8); the earlier strip results agree, and two values of one primitive replace thousands of strips (9).
- **Draft route entry (no route entry or pack exists; root to adopt or amend).** id `math-a12-i08`; playlistOrder 31; mainLearnerQuestion "Why does differentiating accumulation recover the rate?"; syllabusActionIds `ci9652c528`, `cid76b6b1d`; prerequisiteVideos `math-a12-i07`; sourceLessons integral-calculus lesson 8 (SHA above; accumulator interactive, hook, trap 03); entryKnowledge: i07 (definite integral as a signed limit of sums; geometry; above adds, below subtracts), i06 (strip = rate × width; the trolley 2.667 and tap 1 estimates), i01 (`cib907133a`: any two primitives differ by a constant; + C), Year 11 differentiation from first principles (chord gradient (f(x + h) − f(x))/h), power primitives (i01, i02), ∫ cos x dx = sin x + C (i05); startBoundary "Open on i07's frame: 3 − t shaded from 0 to x = 2, A(x) = ∫₀ˣ (3 − t) dt with ?."; stopBoundary "A(x) by geometry; A′(x) = f(x) by the moving-edge strip and chords; A is a primitive; moving a shifts A by a constant; FTC with any primitive, continuity and bracket notation; confirm 8/3, 1 and 32. No evaluation drill, negative limits, reversed limits, areas, or chain-rule upper limits."; nextHandoff "math-a12-i09: evaluating definite integrals without losing signs ([x³/3] from −2 to 1 with ?)".
- **Opening (i07's handoff frame).** i07 ends on this frame with the question "How fast does it grow?". Scene 1's first sentence describes the frame and is true however the video is reached.
- **Dummy variable (plain meaning).** "We use t inside the integral, so that x is free to be the moving end." On screen, t labels the horizontal axis and x labels the marker; a grey tag "t: the variable along the axis; x: where we stop". No formal discussion of bound variables.
- **Graphing-application view (`ci9652c528`).** The paired view (upper: A(x) drawing as the marker moves; lower: y = 3 − t with the shading following the marker) is the syllabus's "graphing application": the marker is dragged (animated) and the readout "A(x) = ..." updates in grey. This mirrors the site's accumulator.
- **Values by i07's geometry first (no primitive yet).** A(1) = (3 + 2)/2 × 1 = 5/2; A(2) = (3 + 1)/2 × 2 = 4; A(3) = ½ × 3 × 3 = 9/2; A(4) = 9/2 − ½ × 1 × 1 = 4; A(6) = 9/2 − 9/2 = 0. The points plot before the smooth curve draws through them. The peak at x = 3 is the site accumulator's answer ("A peaks at x = 3 where f(x) = 0").
- **The pattern before the cause.** Three comparisons on the paired view: steepest climb where the height is largest (x = 0, height 3); flat where the height is 0 (x = 3); falling where the height is negative (x > 3). Then one measured case: at x = 1 a `TangentTriangle` on A (run 1, rise 2) against the lower height 2. Only then the claim "it looks like the gradient of A equals the height".
- **The cause: the strip at the moving edge (one idea).** Moving the end from x to x + h adds one thin strip of width h and height about f(x) (the strip from i06). So A(x + h) − A(x) ≈ f(x) × h, and the chord gradient (A(x + h) − A(x))/h ≈ f(x) (first principles recalled in a grey tag, Year 11). Readouts at x = 1: h = 0.5 gives 1.75, h = 0.1 gives 1.95 (grey). "As h shrinks, the strip's top gets flatter, because the curve is continuous", so the limit is f(x). This is the informal FTC Part 1 argument, scoped to continuous f (author note a).
- **Confirmation by algebra.** For 0 ≤ x ≤ 3 the region is a trapezium with parallel sides 3 and 3 − x and width x, so A(x) = x(6 − x)/2 = 3x − x²/2; author note b: the same formula holds for 3 < x ≤ 6 by signed areas (not narrated; the curve on screen is drawn from the formula across 0 ≤ x ≤ 6, matching the plotted points 4 and 0). d/dx (3x − x²/2) = 3 − x, the original graph: "So A is a primitive of f." The site hook (d/dx ∫₀ˣ t² dt = x²) becomes scene 6: the graphing application sums thin strips numerically under t², the tracer lands on x², and the plotted curve matches x³/3 (a primitive from i01). It answers the natural doubt "is this only true for straight lines?" and is the syllabus's graphing-application recognition on a curve.
- **Rate meaning (title question).** "If f is a rate, A is the amount accumulated so far, and the amount grows at that rate." One sentence, connecting i06's tank to the title.
- **Moving the start (site accumulator idea, kept with 3 − t).** The site moves a on f(t) = t² (A shifts by 1/3, slope at x = 2 stays 4). The design keeps one function and moves a from 0 to 1 on 3 − t: every value loses the trapezium from 0 to 1, area 5/2 (i07 geometry, no primitive needed), so the curve slides down by 5/2 and the gradient at x = 2 stays 1. This is the visible + C: "A different start gives a different primitive, one that differs by a constant." The site's t² version needs ∫₀¹ t² dt = 1/3, which only the FTC gives; using it before the theorem would be circular.
- **FTC (`cid76b6b1d`).** Derivation in four rows on `AlignedAlgebra`: "F(x) = A(x) + C (any two primitives differ by a constant)"; "A(a) = 0 (no strips yet)"; "F(b) − F(a) = (A(b) + C) − (A(a) + C) = A(b)"; boxed "∫_a^b f(x) dx = [F(x)]_a^b = F(b) − F(a)", with "f continuous on a ≤ x ≤ b" and "F any primitive of f". The name "Fundamental Theorem of Calculus" is said once. No "Part 1 / Part 2" labels (not in the 2024 wording).
- **Payoff: three earlier results confirmed (one line each).** i06 trolley: [x³/3]₀² = 8/3 ≈ 2.667 (the site's exact value). i06 tap: [sin x]₀^{π/2} = 1 (i05 primitive). i07 car: [12t − t²]₀⁸ = 96 − 64 = 32 (the site's working). The narration says "Strips and primitives agree." This is recognition, not the i09 drill.
- **Attempts (original).** (A1) "A(x) = ∫₂ˣ √(1 + t³) dt. Find A(2) and A′(2)." A(2) = 0 (no strips); A′(2) = √(1 + 8) = 3. √(1 + t³) has no elementary primitive, so the student must use the idea, not a formula (not said; author note e). Crossed: "A′(2) = 2" (the site's trap 03: differentiating the integrand, 3t²/(2√(1 + t³)) at t = 2, is 12/6 = 2). (A2) "Use the Fundamental Theorem of Calculus to evaluate ∫₁³ 3x² dx." [x³]₁³ = 27 − 1 = 26. Crossed: "27" (the site's trap 01: F(a) not subtracted). Neither card shows a primitive, a value or a graph.
- **Mistake scene:** none separate. "Differentiate the integrand" (feedback 1, crossed); "forget F(a)" (feedback 2, crossed); "the + C changes the answer" (8, feedback 2: any primitive works); "A only depends on x, so the start doesn't matter" (7); "it only works for straight lines" (6); "the theorem works for any f" (8: continuity stated).
- **Memory aid.** "Differentiate the area, get the height. Integrate the rate, get the change." See "Memory aid check".
- **Handoff (outline next: i09 "How do we evaluate definite integrals without losing signs?").** Scene 15: a clean board with "∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ?", the "(−2)³" ringed, chip "Next: evaluating without losing signs". No value is shown (the answer is 3); the narration asks a question only.
- **Site sources used:** lesson 8 accumulator (f(t) = 3 − t, a = 0, peak at x = 3, A′(x) = f(x); moving a shifts A by a constant with the slope unchanged), hook (d/dx ∫₀ˣ t² dt = x², scene 6), trap 01 (forgetting F(a), feedback 2) and trap 03 (differentiating the integrand, feedback 1). Lesson 8's ∫₀³ x² dx = 9 is not used (i06's ∫₀² x² dx = 8/3 is the meaningful check here). The strip-at-the-edge argument, the chord readouts, the a = 1 shift, the payoff scene and both attempts are original; the payoff numbers 8/3 and 32 are the site's (lessons 3 and 7).
- **Site corrections (new, for the next site log; not learner copy):** (1) Integral lesson 8 header: "Module 6 · L5 of 15" and the navigation "← Lesson 4 · The Definite Integral", "Lesson 6 · Areas Between Curves →" are stale labels on a Year 12 page (same class as log items 1 to 7). (2) Integral lesson 8, card 06 introduction: "We just saw FTC Part 2: differentiating the antiderivative and substituting limits evaluates any definite integral." Part 2 uses an antiderivative; nothing is differentiated, and "any definite integral" overstates it (it needs a continuous integrand and a known primitive). Correction: "finding an antiderivative and substituting the limits evaluates a definite integral of a continuous function". (3) Integral lesson 8, "The big idea": "differentiation and integration are inverse operations ... just like addition and subtraction" omits the constant (the key terms card says "up to +C"). Add "up to a constant" in the big-idea card. Scope note (not an error): the chain-rule extension d/dx ∫_a^{u(x)} f(t) dt = f(u(x)) u′(x), its worked example and short-answer Q2 are outside the 2024 Advanced content points `ci9652c528` and `cid76b6b1d`; flag them as extension material or remove them.
- **Pack questions answered:** no pack exists. Pack work done here: site lesson 8 read (and lessons 2, 3, 7 for the payoff values); every number recalculated with SymPy and Python (see "Numbers to verify"); misconceptions listed under "Mistake scene"; site errors above.
- **Cause chain taught, in order:** (1) A(x) is the signed area from the start up to x, found by i07's shapes (1, 2); (2) A climbs fastest where the graph is tallest, is flat where the graph is zero and falls where it is negative (3); (3) moving the end by h adds a thin strip of area about f(x)h, so A's chord gradient is about f(x), and exactly f(x) as h → 0 for a continuous f (4); (4) so A′(x) = f(x): A is a primitive, and an accumulated amount grows at its rate (5); (5) the edge-strip reason needs only continuity, so it holds on curves too (6); (6) a different start removes a fixed area, so A shifts by a constant (7); (7) any primitive is A + C and A(a) = 0, so F(b) − F(a) = ∫_a^b f(x) dx (8); (8) the earlier strip estimates agree with primitives (9).
- **Entry knowledge:** i07 (∫_a^b f(x) dx as the limit of signed sums; evaluation by shapes); i06 (strips; the trolley and tap); i01 (`cib907133a`, + C); Year 11 differentiation from first principles; power primitives (i01, i02); ∫ cos x dx = sin x + C (i05). Not assumed: the term "accumulation function" (plain meaning given), dummy variables (plain meaning given).
- **Learner-visible vocabulary (plain meaning at first use):** A(x) and accumulated area (the signed area from the start up to x, scene 1); t as the variable inside (the variable along the axis, so x can be the moving end, scene 1); chord (recall: a line through two points of a curve, scene 4); primitive (recall, scene 5); Fundamental Theorem of Calculus (named, scene 7); square-bracket notation (F(b) − F(a), scene 7).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **accumulation tracer** (`AccumulationTracer`, new: a marker x moving along the lower graph with signed `AreaFill` following it; the upper panel draws A(x) from its formula as the marker moves; grey readout "A(x) = ..."; optional thin edge strip of width h at the marker); **paired gradient view** (`DerivativeTracer` mode `paired` reused with A upper and f lower; traced gradient dots land on f); **edge strip and chord** (scene 4: the thin strip [x, x + h] pulses on the lower panel while the chord from (x, A(x)) to (x + h, A(x + h)) draws on the upper, h stepping 0.5 → 0.1 → 0.01 with `ReadoutPanel` rows); **tangent check** (`TangentTriangle` on A at x = 1, run 1, rise 2); **curved case** (`AccumulationTracer` with numerically summed upper curve from the graphing application, scene 6, and a dashed exact overlay); **moving start** (`LowerLimitDial`, new: a = 0 → 1; the shaded region's left edge moves, the removed trapezium flashes, the upper curve slides down by 5/2 with a dashed ghost at a = 0, and the tangent at x = 2 keeps its slope 1, reusing `PrimitiveFamily`'s slide marker, brief 143); **theorem rows** (`AlignedAlgebra` with `IntegralNotation`); **payoff thumbnails** (three small coded graphs redrawn from i06 and i07 with their settled readouts, each gaining a tick); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; paired graph on the left (upper A panel about 1,000 × 380 px, lower f panel about 1,000 × 320 px, shared x); algebra and readouts in the right column. Unequal unit lengths (no angle claims).
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) For f continuous on an interval containing a and x, A(x + h) − A(x) = ∫_x^{x+h} f(t) dt lies between h × min f and h × max f on [x, x + h]; dividing by h and letting h → 0 gives A′(x) = f(x) (continuity makes min and max tend to f(x)). The narration's "the strip's top gets flatter, because the curve is continuous" is the informal version. For h < 0 the same holds (not narrated).
  (b) A(x) = ∫₀ˣ (3 − t) dt = 3x − x²/2 for all real x (SymPy); for 3 < x ≤ 6 the geometric version is 9/2 − (x − 3)²/2, which equals 3x − x²/2. Values: A(1) = 5/2, A(2) = 4, A(3) = 9/2, A(4) = 4, A(6) = 0. A′(x) = 3 − x.
  (c) Chord gradients at x = 1: h = 0.5: (A(1.5) − A(1))/0.5 = (3.375 − 2.5)/0.5 = 1.75; h = 0.1: 1.95; h = 0.01: 1.995. Exactly 2 − h/2.
  (d) Start a = 1: A₁(x) = A₀(x) − A₀(1) = 3x − x²/2 − 5/2; A₁′(2) = 1 = f(2). The removed piece is the trapezium from 0 to 1 with heights 3 and 2, area 5/2.
  (e) √(1 + t³) has no elementary primitive (its antiderivative is a hypergeometric function); not stated to learners. d/dt √(1 + t³) = 3t²/(2√(1 + t³)), which is 2 at t = 2 (crossed value).
  (f) FTC proof sketch as narrated: F = A + C on [a, b] (both primitives of f on an interval; i01's constant-difference result); A(a) = 0; F(b) − F(a) = A(b). Requires f continuous on [a, b].
  (g) Windows: hook to scene 6, t (and x) from −0.3 to 6.3 (ticks 1 to 6); lower f panel y from −3.5 to 3.5 (ticks −3, 3); upper A panel y from −3 to 5.5 (ticks 2, 4; the a = 1 curve reaches −5/2 at x = 0 and −2.5 at x = 6: A₁(6) = −5/2). Payoff thumbnails reuse i06 and i07 windows.
  (g2) Curved case (scene 6): t from −0.1 to 2.2 (ticks 1, 2); lower y = t² from −0.2 to 4.4 (ticks 2, 4); upper A from −0.2 to 3 (ticks 1, 2; A(2) = 8/3 ≈ 2.67). The plotted A comes from midpoint sums with n = 400 (author input); its maximum gap from x³/3 is below 2 × 10⁻⁵ (not visible).
  (h) Pronunciations: "A of x"; "A prime of x" (and "A prime of two"); "the integral from zero to x of three minus t, d t"; "x plus h"; "one point seven five", "one point nine five"; "three x minus a half x squared"; "F of b minus F of a"; "eight thirds"; "the square root of one plus t cubed".

Main question: *As the end of a shaded region moves, its area changes. Why does the area's gradient equal the height of the graph, and how does that turn every definite integral into F(b) − F(a)?*
Entry knowledge (i07 definite integral and geometry; i06 strips; i01 + C; Year 11 first principles; i01, i02, i05 primitives): areas by shapes, primitives up to a constant, chord gradients.
Stops after: A(x) by shapes; A′(x) = f(x) from the edge strip; A as a primitive; moving the start as + C; the Fundamental Theorem with continuity and brackets; three earlier results confirmed. No evaluation drill, negative limits, areas or chain-rule upper limits.
Handoff: math-a12-i09: ∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ? (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as i04 and i05 for the paired view): A(x) blue in the upper panel; f teal in the lower panel ("the height"); signed area fills pale teal and pale red-orange (`AREA_POS`, `AREA_NEG`); tangent stubs and traced gradient dots amber (`MATH_ACCENT`); the edge strip amber; readouts grey; the current line bright, earlier lines dim.

### 1. hook (how fast does the area grow?)
> Here's the graph of three minus t, shaded from zero up to x equals two. The shaded signed area is A of x, the integral from zero to x of three minus t, d t. We use t inside the integral, so that x is free to be the moving end. As x moves, A of x changes. If three minus t were a rate, A would be the amount built up so far. Think for a moment. Where does A grow **fastest**?

Visual: opens on i07's last frame exactly (y = 3 − t on 0 ≤ t ≤ 6, shaded teal from 0 to the marker at x = 2, "A(x) = ∫₀ˣ (3 − t) dt" with "?", chip "Next: let the end move"). The chip fades; heading writes on: "Why does differentiating accumulation recover the rate?". On "A of x" the shading pulses and a tag "A(x): signed area from 0 up to x". On the third sentence grey tags: "t: the variable along the axis" on the axis label and "x: where we stop" on the marker. On "changes" the marker slides to 3 and back to 2, the shading following (`AccumulationTracer`). On "fastest" a small "think" chip with a 3 s ring (prediction hold; no answer shown).

### 2. track A with shapes
> Let's track A with shapes, like last video. Up to one, the region is a trapezium with heights three and two, so A of one is two and a **half**. Up to two, it's a trapezium with heights three and one, so A of two is four. Up to three, it's a triangle, so A of three is four and a **half**. Past three, the graph is below the axis, so new strips subtract. A of four is four, and A of six is back to **zero**. Plot these points, and A of x makes a smooth curve, like a **hill**.

Visual: the graph moves into the lower panel (camera continue); an empty upper panel labelled "A(x)" appears above it with the same x-axis. The marker moves to 1: the region outlines as a trapezium with heights "3" and "2"; on "half" the readout "A(1) = 5/2" and a dot at (1, 5/2) in the upper panel. Marker to 2: "A(2) = 4", dot. Marker to 3: triangle outline, "A(3) = 9/2", dot. On "subtract" the marker passes 3 and the new fill is red-orange; marker to 4: "A(4) = 9/2 − 1/2 = 4", dot; on "zero" marker to 6: "A(6) = 9/2 − 9/2 = 0", dot. On "hill" the smooth curve A(x) = 3x − x²/2 draws through the five dots (formula not yet shown).

### 3. the gradient of A matches the height
> Now compare the hill with the height of the graph below it. At the start, the height is three, the biggest it gets, and A climbs fastest. At three, the height is zero, and A is flat, at the top of the hill. After that, the height is negative, and A falls. At x equals one, A has gradient **two**, and the height there is **two**. It looks like the gradient of A equals the height of the graph, at every **x**.

Visual: on the second sentence a tangent stub on A at x = 0 (steep) and the lower point (0, 3) glows; on the third, a flat stub at (3, 9/2) and the lower point (3, 0) glows (tag "peak where the height is 0"); on the fourth, a falling stub at x = 4.5 and the lower red-orange region pulses. On "two" (first) a `TangentTriangle` on A at (1, 5/2), run 1, rise 2, `ReadoutPanel` "gradient 2"; on "two" (second) a dashed connector drops to the lower point (1, 2), which glows. On "x" the `DerivativeTracer` (paired) sweeps x from 0 to 6 and amber dots for A's gradient land on the teal line y = 3 − t, chip "gradient of A = height of f?".

### 4. why: one more strip at the edge
> Here's why. Call the graph f, so f of t is three minus t. Move the end from x to a little further, x plus h. A gains one thin strip, with width h. Its height is about f of x, so A grows by about f of x times h. Divide by h, and the gradient of the chord on A is about f of **x**. That's the gradient from first principles. At x equals one, with h equal to a half, the chord's gradient is one point seven five. With h equal to a tenth, it's one point nine **five**. As h shrinks, the strip's top gets flatter, because the curve is continuous. So the gradient becomes exactly f of **x**.

Visual: the tracer dots fade. On the first sentence the lower graph's label becomes "f(t) = 3 − t". Lower panel: marker at x = 1; an amber strip [1, 1 + h] with h = 0.5 draws at the moving edge, tags "width h" and "height ≈ f(x)". Upper panel: points (1, A(1)) and (1.5, A(1.5)) with the chord between them. Right column rows: "A(x + h) − A(x) ≈ f(x) × h"; on "x" (first bold) "(A(x + h) − A(x))/h ≈ f(x)", grey tag "first principles (Year 11)". Readout "x = 1, h = 0.5: chord gradient 1.75". On "five" h steps to 0.1: the strip thins, the chord steepens towards the tangent, readout "h = 0.1: 1.95". On the flatter sentence h steps to 0.01 (readout "h = 0.01: 1.995", grey) and a zoom inset shows the strip's top almost flat. On the last "x" the row "A′(x) = f(x)" boxed, grey tag "f continuous".

### 5. A is a primitive
> So differentiating the accumulated area gives back the height. In words, the area grows at a rate equal to the height at its moving edge. If f is a rate, the amount built up so far grows at that **rate**. Check it here. The trapezium from zero to x has heights three and three minus x, and width x. So A of x is three x, minus a half x **squared**. Its derivative is three minus x, the graph we started **with**. So A is a primitive of f.

Visual: right column: "A′(x) = f(x)" stays bright; on "rate" a grey chip "rate f ⇒ A = amount so far". On "Check it here" the marker sits at a general x below 3; the region outlines as a trapezium with brackets "3", "3 − x" and "x". Row "A(x) = x × (3 + (3 − x))/2"; on "squared" "= 3x − ½x²" (the upper curve gains the label "A(x) = 3x − ½x²"). On "with" the check row "d/dx (3x − ½x²) = 3 − x" with a tick, and the lower graph's label "f(t) = 3 − t" pulses. Boxed: "A(x) = ∫_a^x f(t) dt is a primitive of f".

### 6. not just straight lines
> Is this only a trick for straight lines? Try a curve. Shade under t squared, from zero up to **x**. This time we can't use simple shapes, so a graphing application adds up very thin strips for us, and plots A of x as x moves. Watch the gradient of A as a point moves along. It traces x squared **exactly**. And a primitive of x squared is x cubed over three, which matches the plotted curve. The edge-strip reason didn't need a straight line. It only needed a continuous curve.

Visual: clear change to a new paired view (author note g2): lower panel y = t² on 0 ≤ t ≤ 2 in teal; upper panel "A(x)". On "x" the `AccumulationTracer` marker moves from 0 to 2 with the fill following, and a fine strip pattern flickers inside the fill, tag "graphing application: very thin strips"; the upper curve draws point by point from the application's numerical sums (grey readout "A(x) ≈ ..."). On the tracer sentence the `DerivativeTracer` sweeps 0 to 2 and amber gradient dots land on the lower curve; on "exactly" chip "gradient of A = x²". On the primitive sentence the label "x³/3" writes on the upper curve and a dashed exact curve y = x³/3 overlays the plotted one with no visible gap. On the last two sentences a grey chip "needs: f continuous".

### 7. moving the start
> What if we start from one, instead of zero? Every value of A loses the same piece, the trapezium from zero to one, which is two and a half. So the whole curve slides down by two and a **half**, and none of its gradients change. At x equals two, the gradient is still **one**, the height there. A different start gives a different primitive, one that differs by a constant. That's the plus C from primitives.

Visual: `LowerLimitDial` "a" turns from 0 to 1: the shaded region's left edge moves to t = 1 and the removed trapezium [0, 1] flashes, tag "5/2". On "half" the upper curve slides down by 5/2 with a dashed ghost at a = 0, and a vertical slide marker "− 5/2". On "one" tangents at x = 2 on both curves (ghost and new) are parallel, `ReadoutPanel` "gradient 1", and the lower point (2, 1) glows. On the last sentence a grey chip "different start: + C".

### 8. the Fundamental Theorem of Calculus
> Now the big result. Take any primitive F of f. Any two primitives differ by a constant, so F of x equals A of x, plus C. At the start, A of a is zero, because no strips have been added yet. So F of b, minus F of a, is A of b plus C, minus C. The constants cancel, and that leaves A of b, the integral from a to **b**. That's the Fundamental Theorem of Calculus. For a continuous f, the integral from a to b of f of x, d x, equals F of b minus F of a, for any primitive **F**. We write it with square brackets: F of x, from a to b.

Visual: board clears to the right-column algebra with a small paired-graph thumbnail at the left (A and f). `AlignedAlgebra` rows, one per sentence: "F(x) = A(x) + C" (grey tag "any two primitives differ by a constant"); "A(a) = 0" (the thumbnail's marker sits at a with no shading); "F(b) − F(a) = (A(b) + C) − (A(a) + C)"; on "b" the two C's strike through in grey and the row ends "= A(b) = ∫_a^b f(x) dx". On the theorem sentence the boxed statement: "∫_a^b f(x) dx = [F(x)]_a^b = F(b) − F(a)" with tags "f continuous on a ≤ x ≤ b" and "F: any primitive of f" (on "F"). On the last sentence "[F(x)]_a^b" is ringed, tag "F(b) − F(a)".

### 9. the earlier results agree
> Now check the earlier results. The trolley's strips settled near two point six six seven. A primitive of x squared is x cubed over three, so the integral from zero to two is eight thirds, minus zero. That's about two point six six **seven**. The tap's strips settled on one. A primitive of cos x is sine x, and sine of pi over two, minus sine of zero, is exactly **one**. And the car's thirty-two comes from twelve t minus t squared. Ninety-six minus sixty-four is thirty-**two**. Strips and primitives agree. Instead of adding thousands of strips, we need just two values of one primitive.

Visual: three small coded thumbnails in a row (redrawn: y = x² on [0, 2] with fine strips and readout "≈ 2.667"; y = cos x on [0, π/2] with readout "≈ 1"; y = 12 − 2t on [0, 8] with signed fills and "32"). Under each, a row writes in turn: "[x³/3]₀² = 8/3 − 0 = 8/3" (grey "≈ 2.667"; tick on "seven"); "[sin x]₀^{π/2} = 1 − 0 = 1" (tick on "one"); "[12t − t²]₀⁸ = (96 − 64) − 0 = 32" (tick on "two"). On "agree" the three ticks pulse together; on the last sentence the fine strips in each thumbnail fade and two dots remain at each end of the interval, tag "F(b) − F(a)".

### 10. memory aid
> Here's the pair to remember. Differentiate the area, and you get the height. Integrate the rate, and you get the change. The first is why the second **works**.

Visual: two rows drawn as arrows: "A(x) = ∫_a^x f(t) dt", an arrow labelled "d/dx", then "f(x)" and "∫_a^b (rate) dx = F(b) − F(a) = total change". The handwritten line writes large: "Differentiate the area, get the height. Integrate the rate, get the change." Under it, smaller: "f continuous. Any primitive F works." On "works" an arrow from the first row to the second. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A of x is the integral from two to x, of the square root of one plus t cubed, d t. Find A of two, and A prime of two. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Let A(x) = ∫₂ˣ √(1 + t³) dt. Find A(2) and A′(2)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph).

### 12. feedback 1 (brief)
> A of two is **zero**, because from two to two there's no strip at all. For the gradient, the area grows at the height of its edge, so A prime of x is the square root of one plus x cubed. At two, that's the square root of nine, which is **three**. A prime of two equals two is wrong. It differentiates the square root, instead of reading the **height**.

Visual: card shrinks to the top. Row "A(2) = ∫₂² √(1 + t³) dt = 0" (on "zero"; the lower limit "2" underlined in the card). Row "A′(x) = √(1 + x³)"; on "three" boxed "A′(2) = √(1 + 8) = 3". On "height" a chip "A′(2) = 2" fades in and is crossed (caption "that differentiates √(1 + t³): 3t²/(2√(1 + t³)) = 2"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Use the Fundamental Theorem of Calculus to evaluate the integral from one to three, of three x squared, d x. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Use the Fundamental Theorem of Calculus to evaluate ∫₁³ 3x² dx." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> A primitive of three x squared is x **cubed**. So the integral is three cubed, minus one cubed, which is twenty-seven minus one, or twenty-**six**. Any primitive works. Add five to it, and the fives cancel. Twenty-seven is wrong. It forgets to subtract F of **one**.

Visual: card shrinks to the top. Row "F(x) = x³" (on "cubed"; check "d/dx x³ = 3x²" grey). Row "[x³]₁³ = 3³ − 1³ = 27 − 1"; on "six" boxed "= 26" ("1" and "3" underlined in the card). Grey row "[x³ + 5]₁³ = 32 − 6 = 26". On "one" a chip "27" fades in and is crossed (caption "F(1) not subtracted"). Hold about 1 second.

### 15. handoff
> So the area grows at the height of its edge, and that turns a definite integral into a primitive, evaluated at two ends. Next, we'll use it on all kinds of integrals, and some of them have negative ends. Here's one. One third, minus negative two cubed over three. Where do the minus signs **go**?

Visual: the memory-aid line shows small at the top, then fades on "Next". Board clears to one row, large: "∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ?". On "Here's one" the row writes left to right; on "go" the "(−2)³" is ringed and the "−" in front of it pulses. Chip "Next: evaluating without losing signs" and a "?" chip. No value. Hold about 2 seconds. This is i09's assumed opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Accumulation function: A(x) = ∫_a^x f(t) dt, the signed area from a up to x. A(a) = 0.
2. A′(x) = f(x) for continuous f: the area grows at a rate equal to the height at its moving edge. So A is a primitive of f. Changing the start a changes A by a constant only.
3. Fundamental Theorem of Calculus: for f continuous on a ≤ x ≤ b and F any primitive of f, ∫_a^b f(x) dx = [F(x)]_a^b = F(b) − F(a). The + C cancels.
4. Example: ∫₀² x² dx = [x³/3]₀² = 8/3. Always subtract F(a), even when it is 0.

Memory aid (large, on the notes screen): *Differentiate the area, get the height. Integrate the rate, get the change.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back to scene 15's frame exactly ("∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ?" with "(−2)³" ringed, the chips "Next: evaluating without losing signs" and "?"). This is the final frame and i09's assumed opening frame.

## Teaching checks

- **Does it explain causes?** Why A climbs fastest at the start: the strips there are tallest (3). Why A is flat at 3: the height is zero, so new strips add nothing (3). Why A falls after 3: new strips are below the axis and subtract (2, 3). Why A′ = f: moving the end adds one thin strip of area about height × width, so the chord gradient is the height, exactly so as the strip thins on a continuous curve (4). Why it is not a straight-line trick: the edge-strip reason only used continuity, and the curve case agrees (6). Why a different start is + C: it removes the same fixed area from every value (7). Why F(b) − F(a): every primitive is A + C, A(a) = 0 and the C cancels (8). Why any primitive works: the constant cancels (8; feedback 2). Why the theorem saves work: two values of a primitive replace thousands of strips (9).
- **Misconceptions addressed:** "differentiate the integrand" (feedback 1, crossed); "forget F(a)" (feedback 2, crossed; key note 4); "the + C changes a definite integral" (8, feedback 2); "the start doesn't matter" (7); "only for straight lines" (6); "the theorem works without conditions" (8, key notes 2 and 3).
- **One idea at a time:** one point per sentence in 2; one comparison per sentence in 3; one h per cue in 4; one algebra row per sentence in 5 and 8; one sweep in 6; one earlier result per sentence pair in 9.
- **Video makes it easier:** the student watches the hill draw from shaded areas (2), the tracer's gradient dots land on the line (3), the edge strip thin while the chord turns into the tangent (4), the tracer land on x² under a curve (6), the curve slide down with parallel tangents (7), the C's strike out (8), and three earlier estimates gain ticks (9).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing. A1 cannot be done with a primitive, so it tests the idea. One crossed mistake each; feedback about 27 s and 20 s (scenes 12 and 14), inside the 15 to 30 s band.
- **Avoided double teaching:** shapes (i07), strips (i06), + C and constant difference (i01), first principles (Year 11) and the primitives of x² and cos x (i01, i05) are each recalled in a phrase or grey tag.
- **Syllabus coverage:** `ci9652c528` (1 to 7: A(x) defined, explored on a graphing-application view for a line and a curve, recognised as a primitive; A1; key notes 1 and 2); `cid76b6b1d` (8, 9; A2; key notes 3 and 4).
- **Out of scope by design:** evaluation practice and negative limits (i09); reversed limits and splitting (i09); areas (i10); chain-rule upper limits (not in the 2024 points).

## Practice questions and model answers

**Attempt 1 (scene 11; original, HSC style, 2 marks suggested, not an official marking scheme).** "Let A(x) = ∫₂ˣ √(1 + t³) dt. Find A(2) and A′(2)."
Model answer: A(2) = ∫₂² √(1 + t³) dt = 0 (an interval of zero width). Since √(1 + t³) is continuous for t ≥ −1, A′(x) = √(1 + x³), so A′(2) = √9 = 3. Classic mistake (crossed): "A′(2) = 2" (differentiates the integrand: 3t²/(2√(1 + t³)) at t = 2).

**Attempt 2 (scene 13; original, HSC style, 2 marks suggested).** "Use the Fundamental Theorem of Calculus to evaluate ∫₁³ 3x² dx."
Model answer: a primitive of 3x² is x³, so ∫₁³ 3x² dx = [x³]₁³ = 27 − 1 = 26. Classic mistake (crossed): "27" (F(1) not subtracted).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| f | f(t) = 3 − t, 0 ≤ t ≤ 6; f(0) = 3, f(1) = 2, f(2) = 1, f(3) = 0 | 1 to 5, 7 |
| A by shapes | A(1) = 5/2, A(2) = 4, A(3) = 9/2, A(4) = 4, A(6) = 0 | 2 |
| Gradient match | A′(1) = 2 = f(1); flat at x = 3 | 3 |
| Chords at x = 1 | h = 0.5: 1.75; h = 0.1: 1.95; h = 0.01: 1.995 (grey) | 4 |
| Formula | A(x) = 3x − ½x²; A′(x) = 3 − x | 5 |
| Curve | A(x) = ∫₀ˣ t² dt = x³/3 on 0 ≤ x ≤ 2; gradient x² (site hook) | 6 |
| Start a = 1 | removed area 5/2; curve down 5/2; gradient at x = 2 stays 1 | 7 |
| FTC | ∫_a^b f(x) dx = [F(x)]_a^b = F(b) − F(a) | 8 |
| Payoff | [x³/3]₀² = 8/3 ≈ 2.667; [sin x]₀^{π/2} = 1; [12t − t²]₀⁸ = 32 | 9 |
| A1 | A(2) = 0, A′(2) = 3; crossed 2 | 11, 12 |
| A2 | [x³]₁³ = 26; [x³ + 5]₁³ = 26; crossed 27 | 13, 14 |
| Handoff | ∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ? (value 3, not shown) | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy and Python (2 Nov, isolated run, `nums_i06i08.py` in the designer's scratchpad); Codex to re-check numerically and with a CAS.

- ∫₀ˣ (3 − t) dt = 3x − x²/2; values at 1, 2, 3, 4, 6: 5/2, 4, 9/2, 4, 0; derivative 3 − x.
- Geometric forms: x(6 − x)/2 for 0 ≤ x ≤ 3; 9/2 − (x − 3)²/2 for 3 ≤ x ≤ 6; both equal 3x − x²/2.
- Chord gradients at x = 1: 1.75 (h = 0.5), 1.95 (h = 0.1), 1.995 (h = 0.01); formula 2 − h/2.
- ∫₀¹ (3 − t) dt = 5/2; A₁(x) = 3x − x²/2 − 5/2; A₁′(2) = 1.
- ∫₀² x² dx = 8/3 ≈ 2.6667; ∫₀^{π/2} cos x dx = 1; ∫₀⁸ (12 − 2t) dt = 32 with 12(8) − 8² = 96 − 64.
- d/dx ∫₀ˣ t² dt = x²; ∫₀ˣ t² dt = x³/3; midpoint sums with n = 400 on [0, x] differ from x³/3 by less than 2 × 10⁻⁵ for 0 ≤ x ≤ 2.
- A1: √(1 + 2³) = 3; d/dt √(1 + t³) at t = 2 = 12/6 = 2.
- A2: ∫₁³ 3x² dx = 26; 3³ = 27; (27 + 5) − (1 + 5) = 26.
- Handoff (not shown): ∫₋₂¹ x² dx = 1/3 + 8/3 = 3.

## Memory aid check

- **"Differentiate the area, get the height. Integrate the rate, get the change."** Meaning, as said in scene 10: the first line is A′(x) = f(x), the cause shown in scene 4 (and on a curve in scene 6); the second is the Fundamental Theorem read for a rate, ∫_a^b f = F(b) − F(a) = total change (i06's meaning, i07's limit); "the first is why the second works" (scene 8's derivation). Assumptions checked: f continuous on the interval (stated in scenes 4, 6 and 8 and on the notes screen); "the area" means the signed accumulated area A(x) = ∫_a^x f(t) dt with a fixed start (scene 7 shows that the start only adds a constant); "the change" is F(b) − F(a) for any primitive (scene 8, feedback 2); the lines describe definite integrals, not total area (i10). It helps a new case: A1, where no primitive is available, is answered by the first line alone. Introduced after the cause (2 to 8) and the uses (9).
- **Considered, not used:** "integration and differentiation are inverses" as a bare slogan (true only up to a constant, the site's own overstatement, logged above).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,599 characters** (5,614 with joining spaces), 16 scenes. Characters per scene (1 to 16): 370, 459, 397, 573, 426, 469, 399, 522, 578, 155, 150, 340, 140, 254, 292, 75. The first draft (15 scenes) counted 5,003 characters. Two pieces of in-scope teaching were then added rather than padding: the curved graphing-application case (scene 6, the site's hook, answering "only straight lines?"), the sentence on why the theorem saves work (scene 9), and naming the graph f before the edge-strip argument uses f(x) (scene 4). At 13.3 characters per second the speech is about 421 s; add a 3 s prediction hold (1), about 16 s of settling time for the marker moves (1, 2), the tracer sweeps (3, 6), the h steps and zoom (4), the slide (7) and the C strike (8), 20 s for two countdowns, 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 104 s of holds): **about 525 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. No trims are reserved: any cut would drop below 5,500. If the voiced take runs long, shorten holds first.

## Scene list and build ids

Lesson key `m-a12i08` (route math-a12-i08, draft). Suggested explainer folder `src/explainer/lessons/math-a12-i08` and build folder `docs/production/claude-pm/lessons/m-a12i08` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, track-with-shapes, gradient-matches-height, edge-strip, primitive-check, curved-case, moving-start, fundamental-theorem, earlier-results, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): i07's last frame continues into scene 1 (camera continue, same window; the chip fades); 1 to 2 camera continue (the graph moves into the lower panel and the A panel appears above); 2 to 3 to 4 to 5 camera continue (same paired axes); 5 to 6 clear change (new paired view for t²); 6 to 7 clear change (back to the 3 − t paired view); 7 to 8 board change (algebra with a thumbnail); 8 to 9 clear change (thumbnails); 9 to 10 camera pull back; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board. Scene 1 carries a 3 s prediction hold on "fastest".

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12i08-learning-review.md`, `science_check` = `checks/m-a12i08-maths-check.md`.

## Assets

Have: no plates. Existing coded kit (briefs 129, 131, 133, 135, 143): `FunctionGraph` / `GraphLayer` (3 − t, A(x) = 3x − x²/2 and its a = 1 shift via `parameter`, t² with A(x) = x³/3, thumbnails of x², cos x and 12 − 2t); `DerivativeTracer` (paired: A upper with derivative 3 − x landing on the lower f); `TangentTriangle` with `ReadoutPanel`; `PrimitiveFamily` slide marker and ghost (brief 143) for scene 7; `IntegralNotation` with timed labels; `AlignedAlgebra`; `DerivativeCheck` for the A(x) check row; shared `Countdown`, `QuestionCard`, `Chip` with `cross`, `Callout`, `PenArrow`, `KeyNotes`, `Heading`. From the i06 brief: `AreaFill` (signed), `RiemannStrips` (thumbnails).

New coded parts: `AccumulationTracer` and `LowerLimitDial` (below).

## Codex asset brief

No painted plate is needed (programme decision 5). Two new coded parts, to be built in the same kit brief as i06's `AreaFill`, `RiemannStrips` and `RefinementTable`:

1. **`AccumulationTracer`.** Props: `graph` (the lower f panel, a `GraphSpec`), `accumulated` (the upper panel's `GraphSpec` with author-supplied A(x) and its exact derivative f), `a` (start), `x` (marker position, animatable, or `path` of {x, at} keyframes), `fill` (signed `AreaFill` from a to x, splitting at author-supplied `zeros`), `drawUpper` (draw A only up to the marker, or the whole curve), `dots` (author-supplied x values that drop a dot at (x, A(x)) when the marker passes), `readout` (grey "A(x) = ..." from the supplied function), `edgeStrip` ({h, at}[]: an amber strip [x, x + h] on the lower panel and the chord from (x, A(x)) to (x + h, A(x + h)) on the upper, with a readout of (A(x + h) − A(x))/h), `outline` (optional trapezium or triangle outline of the region with dimension labels). The part does not integrate; A and f are author inputs. Checks: for A(x) = 3x − x²/2 and f = 3 − x, the supplied derivative matches a central difference of A at 101 points; chord readouts at x = 1 equal 2 − h/2; the fill from 0 to x splits at 3; dots land at the listed values.
2. **`LowerLimitDial`.** Props: `from`, `to` (values of a), `at`, `duration`, `accumulated` (A for the original start), `shift` (author-supplied constant, here −5/2 = −A(1)), `ghost` (dashed original curve), `tangentAt` (an x where tangents on both curves draw and stay parallel, with `ReadoutPanel`), `removedRegion` (flash the region between the old and new start). Reuses `PrimitiveFamily`'s slide marker and ghost (brief 143) if convenient. Checks: the shifted curve equals the original plus the supplied constant at sampled points; both tangents at x = 2 have slope 1.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically and with a CAS, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the geometric values of A (scene 2) and the formula A(x) = 3x − ½x² on 0 ≤ x ≤ 6, including the signed part beyond x = 3 (author note b).
3. Confirm the moving-edge argument (scene 4) states nothing false: "A grows by about f(x) × h", the chord gradient readouts, and "exactly f(x)" scoped to a continuous f (author note a).
4. Confirm the a = 1 shift is −5/2 and that gradients are unchanged (scene 7); confirm the design does not use ∫₀¹ t² dt before the theorem, and that scene 6's x³/3 is matched to numerical sums, not derived by the theorem.
5. Confirm the FTC derivation rows (scene 8) are valid with the stated conditions (f continuous; F any primitive; A(a) = 0), and the boxed statement matches the syllabus form.
6. Confirm the three payoff evaluations (scene 9) and that they match i06's and i07's settled values (2.667, 1, 32).
7. Confirm A1: A(2) = 0, A′(2) = 3, and the crossed value 2 equals the integrand's derivative at 2; confirm A2 = 26 and the crossed 27.
8. Confirm the handoff (scene 15) shows no value (the answer 3 is not on screen), and no evaluation drill or negative-limit technique is taught before it.
9. Confirm the syllabus quotes match the crosswalk JSON text exactly (linear form), no site module label appears in learner copy or metadata, and no "Part 1" or "Part 2" label or chain-rule upper limit appears.
10. Confirm the opening frame matches i07 scene 15 (marker at x = 2) and the final frame matches scene 15 here.
11. Confirm no em dash (U+2014) anywhere in this file (scene 10's arrow row is drawn as an arrow with a label), Australian spelling in narration and screen text, and the narration character count by script with the build parser rules.

## YouTube metadata (draft)

Title: The Fundamental Theorem of Calculus: Why the Area's Gradient Is the Height | Year 12 Maths Advanced

(Title length: 100 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson08.sa.html

Shade a graph from a fixed start up to a moving end x, and call the signed area A(x). Track it with shapes and it makes a hill that climbs fastest where the graph is tallest and is flat where the graph is zero. Why? Moving the end adds one thin strip whose area is about the height times the width, so the gradient of A equals the height of the graph. That makes A a primitive, and it turns every definite integral into F(b) − F(a) for any primitive F: the Fundamental Theorem of Calculus. See it work on a curve too, and why changing the start only adds a constant. Then check three earlier strip estimates with primitives. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, integral calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Consider the function defined by A(x) = ∫_{a}^{x} f(t) dt and use a graphing application to recognise that A(x) is a primitive of f(x)"
"Recognise the Fundamental Theorem of Calculus as ∫_{a}^{b} f(x) dx = [F(x)]_{a}^{b} = F(b) − F(a) for a continuous function f on the interval a ≤ x ≤ b where F(x) is any primitive of f(x)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

Builds on: The definite integral as a signed sum (previous video); primitives and + C. Next: Evaluating definite integrals without losing signs.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. Route entry (root).** The draft entry in "Decisions" is ready to adopt.
- **2. i09's opening frame (root, i09's designer).** Scene 15 is the assumed opening of i09 (∫₋₂¹ x² dx with the bracket and "(−2)³" ringed). If i09 opens differently, change scene 15's row and its narration's last three sentences.
- **3. Scene 4's rigour (learning review and maths check).** The moving-edge argument is informal (a strip of height "about f(x)"), with continuity named as the reason the top flattens. Confirm this is enough for a student starting Year 12, and that the h readouts are not read as a proof. The formal squeeze is in author note a only.
- **4. Title length (root).** The draft title is 100 characters; a shorter option: "The Fundamental Theorem of Calculus, Explained with Area | Year 12 Maths Advanced" (81).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from i07, i06, i01 and Year 11 first principles; check that the dummy variable sentence is enough; that the hill is built from shapes before any formula; that the gradient match is seen at three places before it is claimed; that the edge strip makes A′ = f a consequence; that the curved case in scene 6 reads as the same idea, not a new rule; that the a = 1 slide is read as + C; that each FTC row follows from the last; that A1 cannot be done by a primitive and tests the idea; that the attempt cards give nothing away), then the Codex maths check and error check.
- The marker moves, the tracer, the thinning edge strip with its chord and the slide carry the explanation; judge them at playback speed in the voiced preview, not from stills. Readouts must come from the same functions as the curves.
- The opening frame is i07's scene 15 exactly. If i07's handoff changes in review, change scene 1's first visual to match.
