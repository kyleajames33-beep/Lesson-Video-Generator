# Maths A12 D02: Why does differentiating a^x introduce ln a? Measuring 2^x, finding e, and proving (ln a) a^x (design)

Status: Revision 2 (1 Nov): brief 131 reviews resolved (0 blockers; exact e^(x ln 2) identities with 0.693 only as an approximate readout; memory summary excludes base one; attempt 2 card now "Explain the sign of g′(2)"; root picks the run 0.5 worked-example triangle, rise 4 ln 2). Narration 6,344 characters, about 570 s. Needs a Codex error check.

Earlier status, Revision 1 (1 Nov): needs learning review (`../../student-learning-review.md`) and maths check (Codex), then a Codex error check. Voicing is gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum (see "Assets" for three small kit gaps). Nothing recorded; human listening pending.

Root decisions (1 Nov): (1) 3^(2x) moves to the opening of d06. (2) Keep the derivative rule for every a > 0, including a = 1 (derivative 0); a ≠ 1 belongs to log bases (the brief to the designer was wrong on this). (3) "natural log" stays said in full until the brief 124 voice pilot shows how "ln" is read. (4) Whether attempt 2 part (b) gives away the sign is for the learning reviewer.

Narration 6,348 characters, 16 scenes, about 9.5 minutes (570 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 12 Mathematics Advanced differential calculus strand. Template: `math-a12-d01.md` (Revision 2): same structure, voice, paper style, kit parts (FunctionGraph, SecantToTangent, TangentTriangle, DerivativeTracer, AlignedAlgebra with highlighted inner factor), the "gradient compared with height" readout and the order cause, then proof, then worked examples. All maths visuals are coded; no painted plates (programme decision 5). Pre-design pack: `../pre-design/maths-a12/math-a12-d02.md` (every number recalculated below). Site lesson read (1 Nov, read-only) for its orient, derive, worked-example, traps, drill, consolidate and practice sections: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/differential-calculus/lesson02.sa.html`, SHA256 `d82bf5eca440e61298bc65c1b702bd1365a5c4e3de70d510c9b67d77ca28edfa` (matches the pack and route). Route entry: `math-a12-d02` in `../../maths-a12-video-route.json` (route-approved by root, 1 Nov). Route start: "Rewrite a^x=e^(x ln a), using fixed a>0." Route stop: "Prove and apply (a^x)′=a^x ln a. Include the constant a=1 case; stop before products and extended composites." Next: "math-a12-d03: derive the natural-log slope."

Owner rules applied: new 2024 syllabus only, content point cited by codename and exact wording, no site "Year 11 / Module 4" labels anywhere; maths visuals coded, never painted; no people; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, equation and grouped givens; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; Year 11 knowledge and d01 recalled in a sentence, not re-taught; precise transformation language from the d01 reviews (horizontal scale by a stated factor, compared at corresponding points; never "changes nothing").

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codename, official `code` field empty), quoted from the route JSON `syllabusActions`, with the MathML written in linear form:

- `ci31a76d4a`: "Prove and use the formula d/dx(a^x) = (ln a)a^x, where a is a constant and a > 0"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

**Boundary:** starts by recalling d01's result in one sentence (the gradient of e^(□x) is □ times the height) and measuring 2^x with it; stops at proving and applying d/dx(a^x) = (ln a)a^x for a > 0, including a = 1 (gradient 0) and 0 < a < 1 (negative ln a, decreasing curve), with Not taught: other powers such as 3^(2x) (site `we-2`, cut for length; Open decisions), the derivative of ln x (d03), log_a x (d04), a^(f(x)) with a non-linear power (d06, site practice Q2), products and quotients with a^x (d07, d08, site `we-3`, drill 3 and 4, practice Q3), stationary points (d09), first-principles limits beyond one secant readout.

## Decisions

- **Learner question kept (route).** "Why does differentiating a^x introduce ln a?" The video answers it in two halves: first it shows that ln a is there (the measured ratio gradient ÷ height is a fixed number for each base, and those numbers are ln 2, ln 3, ln 4), then it shows why (a^x is e^x scaled sideways, and d01 says the scale factor multiplies every slope).
- **Cause before rule (owner quality bar, d01 template).** The rule appears in scene 7 only after scenes 3 to 6 have measured it on the graph and explained it with the tangent triangle. The site's order (rule, then derivation, then examples) is reversed.
- **The hook surprise.** 2^x and e^x both cross the y-axis at height 1, on the same axes. e^x leaves with slope 1 (Year 11). 2^x is visibly flatter there, so its derivative cannot be 2^x (site Trap 01 refuted by the picture before it is ever written). The surprise is that the answer contains a logarithm. The hook asks the question and does not give the number until scene 3.
- **The measuring stick (d01 reused, not re-taught).** d01 showed that for y = k e^(ax+b), gradient = a × height. Scene 2 recalls this as one idea: "divide the gradient by the height and the ratio tells you the number in the power". On screen the d01 constant is written as an amber slot, e^(□x), because this video's syllabus letter a is the base. Using the letter a for both would put "e^(ax)" and "a^x" side by side with different meanings (Decisions: notation).
- **Measuring 2^x honestly.** The first gradient of 2^x is measured, not asserted: `SecantToTangent` at (0, 1) with the second point at x = 0.5, 0.1 and 0.01 shows secant slopes 0.828, 0.718, 0.696, settling to the tangent 0.693 (site numeric check: the limit of (2^h − 1)/h). Later points use the kit's exact tangent (the narration says "move along" and reports the readouts). The ratio chip stays 0.693 at heights 1, 2 and 4.
- **Base sweep (site interactive idea "Find the special base", coded).** `FunctionGraph` with `parameterFn(x, a) = a^x` animates the base from 2 to 3. The ratio ticker climbs from 0.693, reads 1.000 when the base passes 2.718, where the curve lies exactly on the dashed e^x ghost, and settles at 1.099 for 3. This shows why e is special without asserting it: e is the base whose ratio is 1.
- **Ratio against base traces y = ln a (site interactive "switch on y = ln a", coded).** A small second panel plots each base's ratio against the base: (2, 0.693), (e, 1), (3, 1.099), (4, 1.386); later (1, 0) and (½, −0.693). The curve y = ln a (Year 11 knowledge) draws through them. The panel's horizontal axis is labelled "base a", not x, so it is not mistaken for the graph of a^x.
- **Why: the sideways stretch (d01's picture, precise language).** a = e^(ln a) (Year 11, `cic84a1659`, with base e), so 2^x = (e^(ln 2))^x = e^(x ln 2) by the index law. So y = 2^x is y = e^x scaled horizontally by the factor 1/ln 2 ≈ 1.44 (a stretch, because ln 2 < 1). The tangent triangle on e^x at height 2 (x = ln 2, run 1, rise 2) is carried by the same transform to the point (1, 2) on 2^x: run 1.44, rise 2, slope 1.39. At each height the slope is multiplied by ln 2 ≈ 0.693, compared at corresponding points (same height). The narration says "at the same height" so it never implies a fixed-x comparison (d01 maths check, recalculation note). For 3^x the factor is 1/ln 3 ≈ 0.91, a slight squash; said in one clause in scene 4's visual only (author note a).
- **Proof (`ci31a76d4a` "prove").** `AlignedAlgebra` with the power x ln a in the amber inner slot from first row to last: a = e^(ln a); a^x = e^(x ln a); u = x ln a; du/dx = ln a (a constant, because a is fixed: the "ln a, not ln x" trap is said positively here); dy/du = e^u; dy/dx = e^u × ln a = (ln a)e^(x ln a) = (ln a)a^x. The chain rule is the Year 11 rule (`ci00fa8fac`), one grey chip, one sentence. Check a = e: ln e = 1 gives back d/dx(e^x) = e^x.
- **Base restrictions and signs (route recommendation, pack section 4).** Scene 8 sweeps the base down from 2 through 1 to ½ on the same graph. At a = 1 the curve is the flat line y = 1: gradient 0, and the rule agrees because ln 1 = 0 (the route's "constant a = 1 case"). For 0 < a < 1, ln a < 0: the curve falls, the ratio is negative, the height stays positive. (½)^x = 2^(−x), the mirror image of 2^x in the y-axis, which links to d01's mirror. Why a > 0: ln a is undefined for a ≤ 0, and a negative base cannot be raised to every real power ((−2)^(1/2) is not real). The video does **not** say a ≠ 1 is needed for this formula: the syllabus states only a > 0, and the formula holds at a = 1. a ≠ 1 is the restriction for a logarithm base (d04); key note 5 says so (site correction 1).
- **Notation follows the syllabus.** The syllabus writes (ln a)a^x; the site writes a^x ln a. Both are correct. Screen text uses (ln a)aˣ in the rule and key notes (syllabus form); the narration says "the natural log of a, times a to the x". In examples the number goes in front: 8 ln 2, 2 ln 3 · 3^(2x).
- **"Natural log" said in full.** The narration says "the natural log of a" rather than "ln a" or "log a", so the voice never reads "ln" as letters or as a base 10 log. Screen text uses "ln". (Open decisions: the voice pilot may allow the shorter spoken form.)
- **One worked example (route primary `we-1`).** The site's `we-1` (y = 2^x, dy/dx = 2^x ln 2) is extended with a point: find the gradient at x = 3 (exact 8 ln 2 ≈ 5.55), with a graph check (height 8, gradient 0.693 × 8) and the crossed "dy/dx = 2^x, gradient 8" (site Trap 01). The site's `we-2` (y = 3^(2x), dy/dx = 2 ln 3 · 3^(2x)) was drafted as a second example and cut: it took the narration over the 570 s cap, and the route stops "before ... extended composites" (Open decisions: its home). Site `we-3` (x · 5^x, product) is deferred to d07.
- **Attempts (pack questions 1 and 2, recalculated, card wording original).** (A1) f(x) = 5^x: f′(x) = (ln 5)5^x, f′(0) = ln 5 ≈ 1.61; crossed mistake: the power rule x · 5^(x−1), which gives 0, a flat tangent on a rising curve (the brief's classic mistake; site Trap 02). (A2) g(x) = (½)^x: g′(2) = ¼ ln ½ = −(ln 2)/4 ≈ −0.173, negative because ln ½ < 0 while (½)^x > 0; crossed mistake: writing ln 2 for ln ½, which gives the wrong sign.
- **Mistake scene:** none separate. "2^x is its own derivative" (hook, refuted by the picture; worked 1, crossed); "the power rule x a^(x−1)" (feedback 1, crossed); "ln ½ is positive" (feedback 2, crossed); "ln a means ln x" (scene 7, said positively); "a ≠ 1 is needed for the formula" (scene 8 and key note 5, said positively); "a = e is a separate rule" (scene 7 check).
- **Memory aid:** "ln a is the slope where a^x crosses the y-axis", with the short rule "copy the exponential, then multiply by the natural log of the base" (see "Memory aid check").
- **Handoff teaser.** Scene 15 points at the ratio-against-base panel: those points traced y = ln a. Next video asks for the gradient of the natural log curve itself (route: d03 derives the natural-log slope). No answer given.
- **Site sources used:** orient section (the rewrite a^x = e^(x ln a), the ln e = 1 special case, the fallback "rewrite as e^(x ln a)"); derive section (the derivation; the numeric check ln 2 ≈ 0.693 via the limit; the "gradients on y = a^x" interactive: m ÷ y refuses to move, record each base, show y = ln a, find the special base); `we-1` (extended with a point); traps 01 and 02 (01 in worked 1, 02 in feedback 1; 03, a^(kx), deferred with `we-2`); drill item 5 (10^x at 0, ln 10 ≈ 2.303) used in the memory aid check only. Product and quotient items and non-linear powers are later videos.
- **Site corrections (new; quoted from site lesson 2, read 1 Nov; for `../site-corrections-maths-a12.md`):**
  1. Key terms: "General exponential derivative $\dfrac{d}{dx}(a^x) = a^x \ln a$ for any base $a > 0$, $a \neq 1$." The formula holds for every a > 0, including a = 1 (1^x = 1, derivative 0, ln 1 = 0); the 2024 point `ci31a76d4a` states only a > 0. Correct: "for any base a > 0. (When a = 1 the function is the constant 1 and the formula gives 0. The restriction a ≠ 1 applies to logarithm bases.)"
  2. Consolidate section, "Revisit your thinking": "This is not a coincidence, $e$ was chosen precisely because $\ln e = 1$." This is circular: ln is defined as the logarithm to base e, so ln e = 1 for any choice of base called e. Correct: "e is the base whose exponential has gradient exactly 1 where it crosses the y-axis, so e^x is its own derivative. That is why ln e = 1 makes the correction factor disappear."
  3. Orient and Trap 01: "Forgetting $\ln a$ is the single most common error for this topic." and "Writing $2^x$ as the derivative is the most common error for this topic, it costs full marks." Unsupported frequency and marking claims (the pack makes no frequency claim; no published guideline says one error costs full marks in every question). Correct: "Forgetting ln a is a common error. Without it the derivative is wrong, so a 'differentiate' mark is lost."
  4. Teaching note, not a mathematical error: "The chain rule drops $\ln a$ out front" echoes the power rule's "bring the power down", which Trap 02 warns against. Suggest "the chain rule multiplies by ln a, the derivative of the power x ln a".
  - The stale "Year 11 Module 4" metadata (title, header "Maths Adv · Y11", "Module 4 · L10 of 15") is already logged (log item 2).
  - Checked and correct: drill answers 1 to 5; practice Q1 (ln 7(7^x − 7^(−x))), Q2 (2x ln 2 · 2^(x²)), Q3 (x = (−1 − 2/ln 3)/2 ≈ −1.41).
- **Pack questions answered:** primary example `we-1` used (extended with x = 3); the two candidate questions used as A1 and A2 with worked answers checked (author note d); the pack's visual needs met (bases 2, e and ½ on one coordinate transform; moving tangent with gradient ÷ height = ln a; the rewrite with ln a kept as a constant; the sign of ln a shown by the sweep and the ratio panel instead of a separate sign chart); lesson length set by this design.
- **Cause chain taught, in order:** (1) d01's stick: for e^(□x), gradient ÷ height = □ (recall); (2) for 2^x the ratio is a fixed 0.693 at every point (measured); (3) every base has its own fixed ratio; e is the base with ratio 1 (sweep); (4) the ratios are ln a (ratio panel); (5) why: a = e^(ln a), so a^x = e^(x ln a), e^x scaled sideways by 1/ln a; the triangle's run scales and its rise stays, so the slope at each height is multiplied by ln a; (6) the chain rule proves d/dx(a^x) = (ln a)a^x for a > 0; a = e gives back e^x; (7) a = 1 gives 0; 0 < a < 1 gives ln a < 0 and a falling curve that stays positive; a must be positive; (8) apply, with a graph check; (9) memory aid.
- **Entry knowledge (route `entryKnowledge`):** `ciac4383bd` (e^x is its own derivative); `ci00fa8fac` (the chain rule); `cic84a1659` (log_a a^x = x and a^(log_a x) = x, used with base e: e^(ln a) = a); `ciae7673fb` (change of base, not needed in narration; author note e). Also assumed: d01 (gradient of k e^(ax+b) is a × height, tangent triangle, horizontal scale language); Year 11 index laws ((e^p)^x = e^(px)); ln as the natural log on a calculator; the gradient at a point is the tangent's slope, approached by secants.
- **Learner-visible vocabulary (plain meaning at first use):** base (the number being raised to the power, 2 in 2^x); ratio, gradient ÷ height (scene 2); natural log of a, ln a (the power you raise e to, to get a; scene 6 says this in words before the proof uses it); secant (recall, the line through two points on the curve).
- **Legacy logic ported:** none.
- **New explainer motion (coded; brief 129 kit with the d01 addendum):** **base sweep** (`FunctionGraph` `parameterFn(x, a) = a^x`, parameter animated 2 to 3 to 4, and 2 to 1 to ½; tangent slope supplied as a^x ln a by the caller, per the kit contract); **secant settling** (`SecantToTangent` at (0, 1) with held stops at x = 0.5, 0.1, 0.01: kit gap 1); **moving point with tangent triangle and readout panel** (`TangentTriangle` with `readouts={false}`, plus a lesson readout panel beside the graph joined to the point by a leader, root review 129 item 1); **ratio chip** ("gradient ÷ height = 0.693", ticker); **ratio panel** (a second, small `FunctionGraph`, x = base from 0 to 4.5, y = ratio from −1 to 1.6, markers revealed at cues, y = ln a drawn last; ticks 1, 2, 3, 4 and an "e" tick only, no decimal ticks, root review 129 item 2); **horizontal scale** (`FunctionGraph` `transform.xScale` animated from 1 to 1/ln 2 on e^x, carrying the triangle by the same transform, with a dashed ghost of e^x); **aligned algebra** (`AlignedAlgebra` with the inner slot x ln a and `DerivativeFactor` on ln a); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced", now supported), `KeyNotes` (shared kit).
- **Board layout (constant):** heading top-left; main graph left 60%; readout panel, ratio chip, ratio panel and algebra in the right 40%. One main window (x from −2 to 3, y from 0 to 8) for scenes 1 to 8, 10 and 15, so all bases are compared on the same axes. Worked example 1 uses its own window (see "Numbers used").
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) a^x = e^(x ln a) is y = e^x scaled horizontally by the factor 1/ln a about the y-axis (a ≠ 1). The point (x₀, e^(x₀)) maps to (x₀/ln a, e^(x₀)); a tangent's run is multiplied by 1/ln a and its rise is unchanged, so the slope at corresponding points (same height) is multiplied by ln a. For a > e, ln a > 1 (a squash; 3^x: factor 0.910); for 1 < a < e, 0 < ln a < 1 (a stretch; 2^x: factor 1.443); for 0 < a < 1, ln a < 0 (a scale with a mirror in the y-axis; (½)^x: factor −1.443, the mirror of the 2^x stretch). a = 1 has no scale (ln 1 = 0): 1^x is the constant 1, consistent with the formula giving 0. The kit rejects xScale = 0, so the scene 8 sweep uses `parameterFn`, not `transform`.
  (b) Gradient ÷ height = ln a holds for every point of y = a^x (and for y = k a^x, k ≠ 0). It fails if a constant is added (2^x + 3), so key note 2 states it for y = a^x only.
  (c) The secant readouts in scene 3 are (2^h − 1)/h for h = 0.5, 0.1, 0.01: 0.82843, 0.71773, 0.69556 (shown 0.828, 0.718, 0.696; said "point eight three, point seven two, point six nine six"). The limit is ln 2 = 0.693147.
  (d) A1: f′(x) = (ln 5)5^x; f′(0) = ln 5 = 1.609 (exact answer ln 5). Crossed: x · 5^(x−1) gives 0 at x = 0. A2: g′(x) = (ln ½)(½)^x = −(ln 2)(½)^x; g′(2) = ¼ ln ½ = −(ln 2)/4 = −0.1733. (½)^x > 0 for all real x and ln ½ < 0, so g′(x) < 0 for all x. Crossed: g′(2) = (ln 2)/4 (positive).
  (e) Change of base (`ciae7673fb`) gives the same fact: ln a is the natural log, and a^x = e^(x ln a) follows from e^(ln a) = a without it. Not used in narration.
  (f) Pronunciations: "two to the x"; e^(x ln a) is said "e raised to a new power, x times the natural log of a" (scene 7) or "e with x times the natural log of a in the power" (scene 15), never "e to the x times the natural log of a", which a listener can hear as (eˣ)(ln a); "f prime"; "g prime"; "d y by d u"; "a half" for ½. The base a is said as the letter name ("ay"), never as the article "uh" (d01 note f; brief 124 pilot). "ln" is never spoken; the narration says "natural log".
  (g) e = 2.71828; the sweep must hit ratio 1.000 when the parameter equals e exactly (the kit samples the callback; set a keyframe at a = e).

Main question: *2^x and e^x cross the y-axis at the same height, but 2^x leaves more gently. Why does its derivative contain a logarithm, and how do you differentiate a^x for any positive base?*
Entry knowledge (Year 11 `ciac4383bd`, `ci00fa8fac`, `cic84a1659`; d01): e^x is its own derivative; the chain rule; e^(ln a) = a; index laws; d01's gradient = a × height for k e^(ax+b).
Stops after: measuring that gradient ÷ height is a fixed ln a for each base; explaining it as a horizontal scale of e^x by 1/ln a; proving d/dx(a^x) = (ln a)a^x for a > 0; the cases a = e, a = 1 and 0 < a < 1; finding a gradient at a point. No ln x derivative, log bases, powers other than x, products or quotients.
Handoff: the gradient of y = ln x (route math-a12-d03).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as d01): e^x ink (later a dashed grey ghost); the current base curve blue; tangent line and tangent triangle amber (`MATH_ACCENT`); the inner slot and its derivative factor amber highlight; readouts navy; givens navy; the current answer bright; earlier lines dim. Screen maths uses superscripts (2ˣ, e^(x ln a) set as a raised power) and writes the natural log as "ln".

### 1. hook (same start, different slope)
> Here are two curves on the same axes, y equals e to the x, and y equals two to the x. Both cross the y axis at a height of **one**. E to the x leaves that point with a slope of exactly one, because it's its own derivative. But two to the x is **flatter** there. So the derivative of two to the x can't just be two to the x. Then what is it? Here's the strange part. The answer contains a logarithm. Why would a log turn up when you differentiate an **exponential**?

Visual: heading writes on: "Differentiating aˣ: where does ln a come from?". `FunctionGraph` draws axes (x from −2 to 3, y from 0 to 8) and y = eˣ draws left to right in ink (label "y = eˣ"), then y = 2ˣ in blue (label "y = 2ˣ"). On "one" a ring marks (0, 1) where both curves meet, tag "height 1". The amber tangent to eˣ at (0, 1) draws with a small chip "slope 1 (Year 11: d/dx(eˣ) = eˣ)". On "flatter" the tangent to 2ˣ at (0, 1) draws in blue, visibly lower than the amber one on the same axes, with a "slope ?" chip. A dim chip writes "d/dx(2ˣ) = 2ˣ ?" and on "can't" it is struck through lightly (not the crossed-mistake chip; the picture refutes it). On "logarithm" a question chip writes at the right: "why a logarithm?". On "exponential" both curves stay; the eˣ tangent fades.

### 2. recall: the measuring stick
> Last video gave us a measuring stick. Divide the gradient by the height. For e to the x, that ratio is always one. Squash the curve to e to the two x, and the ratio is always two. Whenever the power is some number times x, the gradient is that number times the height. So the ratio tells you the number in the **power**. Let's measure two to the x that way.

Visual: 2ˣ dims to a thin line. On eˣ a point moves from x = 0 to x = 1 with its tangent; the readout panel at the right (joined to the point by a leader) reads "height 1.00, gradient 1.00", then "2.72, 2.72"; the ratio chip writes "gradient ÷ height = 1". A ghost replay of d01's squash (eˣ to e²ˣ, about 1 s, dashed eˣ kept): readouts "height 1.00, gradient 2.00", ratio chip "= 2". A grey chip writes "Last video: gradient of e^(□x) = □ × height", with □ an amber slot; on "power" the slot glows. e²ˣ fades; eˣ stays as a dashed ghost; 2ˣ returns to full blue.

### 3. measure two to the x
> Start at x equals zero, where the height is one. Slide a second point in towards it, and the secant's slope settles: point eight three, point seven two, point six nine six. The tangent's slope is about point six nine **three**. Now move along. At x equals one, the height is two, and the gradient is about one point three **nine**. At x equals two, the height is four, and the gradient is about two point seven **seven**. The gradient is always the same fraction of the height. The ratio stays at point six nine **three**. That's the pattern we saw for e to a number times x.

Visual: `SecantToTangent` on 2ˣ at P = (0, 1), Q starting at x = 0.5. The two-point readout "secant slope" holds briefly at each stop as it is spoken: Q at x = 0.5 (0.828), x = 0.1 (0.718), x = 0.01 (0.696), with the local zoom inset showing two distinct points. On "three" the secant becomes the tangent (never dividing by zero) and the readout panel opens: "height 1.00, gradient 0.693"; ratio chip "gradient ÷ height = 0.693". Secant and inset fade. The point moves along 2ˣ with its amber tangent and a small tangent triangle (run 1): on "nine" it is at (1, 2): "height 2.00, gradient 1.39"; on "seven" at (2, 4): "height 4.00, gradient 2.77". Tickers count together; the ratio chip never moves from 0.693 and glows on the final "three". On the last sentence the grey chip from scene 2 pulses, and a small "e^(? x)" chip writes under 2ˣ's label with "?" in an amber slot. At most three bright items: point and tangent, readout panel, ratio chip.

### 4. every base has its own ratio
> Try three to the x. Now the ratio settles at about one point zero nine **nine**, the same at every point. So each base has its own fixed ratio. Two gives about point six nine, three gives about one point one. Somewhere between two and three, there must be a base with a ratio of exactly one. Slide the base from two up to three, and watch the ratio climb. At two point seven one eight, it reads **one**, and the curve lands right on top of e to the x. That base is **e**.

Visual: the blue curve becomes y = 3ˣ (instant redraw with label) and the point visits (0, 1) and (1, 3): readouts "1.00, 1.10" and "3.00, 3.30"; on "nine" the ratio chip reads "1.099". The two ratios write as a small list under the chip: "2: 0.693", "3: 1.099". The curve returns to 2ˣ with its point at x = 1. On "Slide" a base dial appears under the graph label ("base a = 2.000") and the base animates from 2 to 3 (`parameterFn`, about 3 s, with a held keyframe at a = e, author note g); the point stays at x = 1 so its height and tangent change with the base; the ratio ticker climbs 0.693, 0.8, 0.9. On "one" the dial reads 2.718, the ratio chip reads exactly 1.000 and glows, and the blue curve coincides with the dashed eˣ ghost (the ghost flashes amber). On "e" the dial label rewrites as "a = e" and the list gains "e: 1" between 2 and 3. The sweep then finishes at 3. Author fact (screen only, small tag under 3ˣ): "3 > e, so 3ˣ is a slight squash of eˣ".

### 5. the ratios are logarithms
> So what are these numbers? Plot each ratio against its base. Two gives point six nine three. E gives one. Three gives one point zero nine nine, and four gives one point three eight **six**. These points sit on a curve you met in Year 11, the natural log **curve**. Check it on a calculator. The natural log of two is point six nine three. So the gradient of a to the x is always the natural log of a, times the **height**. But why would a logarithm be the answer?

Visual: the ratio panel opens in the right column (axes "base a" from 0 to 4.5 and "gradient ÷ height" from −1 to 1.6; ticks 1, 2, 3, 4 and an "e" tick; y ticks −1, 0, 1). Markers drop one by one from the list as each is said: (2, 0.693), (e, 1), (3, 1.099). For "four" the main curve sweeps on from 3 to 4 (point at x = 1, readout "4.00, 5.55", ratio "1.386") and the marker (4, 1.386) drops. On "curve" y = ln a draws through all four markers (domain a > 0, curve label "y = ln a", a dim "Year 11" chip). On "calculator" a small coded calculator readout chip "ln 2 = 0.6931..." writes beside the (2, 0.693) marker. On "height" the result writes under the panel: "gradient of aˣ = (ln a) × height" (bright). The main curve returns to 2ˣ. The "why a logarithm?" chip from the hook returns.

### 6. why: two to the x is e to the x, stretched sideways
> The key is to write two as a power of e. The natural log of two is the power you raise e to, to get two. So two is approximately e to the point six nine **three**. Exactly, two to the x is e raised to the power x times the natural log of **two**. So two to the x is just e to the x, stretched sideways. Watch this tangent triangle on e to the x, at height two. Stretch it sideways by a factor of one point four four, and the run grows from one to one point four **four**, while the rise stays two. So at every height, the slope is multiplied by point six nine three, and the gradient becomes point six nine three times the **height**.

Visual: the ratio panel shrinks to a thumbnail at the top right. Algebra strip at the right, one row per cue (`AlignedAlgebra`): on the first sentence a grey chip "Year 11: e^(ln a) = a"; on "three" row 1 "2 = e^(ln 2)" with a grey chip beside it "ln 2 ≈ 0.693". Row 2 "2ˣ = (e^(ln 2))ˣ"; on "natural log of two" row 3 "= e^(x ln 2)" (bright; x ln 2 in the amber slot, "≈ 0.693x" in grey beside it) with a grey chip "index law: (eᵖ)ˣ = e^(px)". The scene 3 "e^(? x)" chip fills its slot with 0.693. On "stretched" the main graph shows eˣ in ink and 2ˣ as a dashed blue target. The amber tangent triangle draws on eˣ at (0.693, 2): run leg to (1.693, 2) labelled "run 1", rise leg to (1.693, 4) labelled "rise 2"; readout panel "height 2.00, gradient 2.00". On "Stretch" the ink curve scales horizontally (`transform.xScale` from 1 to 1.443 over about 1.5 s) onto the dashed 2ˣ; the point slides from x = 0.693 to x = 1 at the same height, carried with the triangle. On "four" the run label changes "run 1" to "run 1.44" with a scribble circle; the rise label stays "rise 2" with a "same" tag; a tag on the graph: "stretch × 1.44 = 1 ÷ 0.693". The gradient ticker falls from 2.00 to 1.39 while the height ticker stays at 2.00. On "height" the ratio chip writes "gradient ÷ height = 0.693" and the result row from scene 5 glows.

### 7. the proof for any base
> Now let's prove it for any positive base a. The natural log of a is the power that turns e into a, so a equals e to the natural log of a. So a to the x is e raised to a new power, x times the natural log of **a**. Call that power u. The base is fixed, so the natural log of a is just a number, and d u by d x is the natural log of **a**. And d y by d u is e to the u. The chain rule multiplies them. Put the power back, and that e to the u is a to the x again. So the derivative of a to the x is the natural log of a, times a to the **x**. Try a equals e. The natural log of e is one, so you get e to the x back, the rule you already **know**.

Visual: the graph shrinks to a thumbnail at the top left (eˣ stretched onto 2ˣ, triangle kept). `AlignedAlgebra` board on the right, task strip "Prove: d/dx(aˣ) = (ln a)aˣ, for a > 0", grey chip "Year 11: dy/dx = dy/du × du/dx". Rows, one per cue, equals signs aligned:
1. "a = e^(ln a)" (writes on the second sentence).
2. On "a" (end of the third sentence): "y = aˣ = e^(x ln a)"; the power "x ln a" sits in the amber inner slot.
3. "let u = x ln a" (the slot's contents copy down; slot stays highlighted).
4. On "a" (after "d u by d x is the natural log of"): "du/dx = ln a" (`DerivativeFactor` on "ln a"); a small tag "a is fixed, so ln a is a number (not ln x)".
5. "dy/du = eᵘ".
6. "dy/dx = eᵘ × ln a = (ln a) e^(x ln a)".
7. On "x": "= (ln a)aˣ" (bright; the ln a factor keeps its highlight from row 4). A tick draws. Boxed: "d/dx(aˣ) = (ln a)aˣ, a > 0".
On "know" a check line writes under the box: "a = e: ln e = 1, so d/dx(eˣ) = eˣ ✓". Rows 1 to 6 dim.

### 8. bases of one and below
> What if the base is less than two? Slide it down. At a equals one, the curve flattens into the line y equals one, with gradient zero. The rule agrees, because the natural log of one is **zero**. Keep going to a half. Now the curve falls. The natural log of a half is minus point six nine three, so the gradient is negative, while the height stays **positive**. A half to the x is two to the minus x, the mirror image of two to the x. And the base must be positive. The natural log of a negative number doesn't exist, and a negative base can't be raised to every power.

Visual: the main graph returns full size (eˣ dashed ghost, blue 2ˣ, point at x = 1 with tangent; readout panel; ratio chip 0.693). The ratio panel returns at the right with its four markers and y = ln a. On "Slide" the base dial animates from 2 down to 1 (`parameterFn`, about 2 s): the curve flattens, the tangent levels, the ratio ticker falls to 0.000; on "zero" the dial holds at 1.000, the curve is the horizontal line y = 1 (label "y = 1ˣ = 1"), readouts "1.00, 0.00", and a marker drops at (1, 0) on the ln curve, tag "ln 1 = 0". On "half" the dial continues to 0.500; the curve tips over and falls; the tangent turns downhill. On "positive" readouts "height 0.50, gradient −0.347" at x = 1 (the height ticker glows; tag under the curve "always above the x-axis"), ratio chip "−0.693" with its minus sign circled, and the marker (½, −0.693) drops on the ln curve. On "mirror" the dashed 2ˣ reappears and a mirror animation about the y-axis maps it onto (½)ˣ (label "(½)ˣ = 2⁻ˣ"). On the last sentence a chip writes "base a > 0" beside the ratio panel's left end, where the ln curve runs down beside the vertical axis (no points for a ≤ 0), and a small chip "(−2)^(1/2) is not real" writes under it. At most three bright items.

### 9. worked example 1: gradient of two to the x
> Find the gradient of y equals two to the x at x equals **three**. Here the base is two. Copy two to the x, then multiply by the natural log of two. So d y by d x is the natural log of two, times two to the **x**. At x equals three, two cubed is eight, so the gradient is eight times the natural log of two, about five point five **five**. On the graph, the height is eight, and the gradient is point six nine three times **that**. If you wrote just two to the x, you'd get eight. That's the slope e to the x has at that **height**.

Visual: board clears to a calculation layout: task strip "Find the gradient at x = 3"; equation strip "y = 2ˣ" (site `we-1`); givens group (navy): "base a = 2" written on "base is two", "x = 3" written on the first bold "three". `AlignedAlgebra` rows: on "x" "dy/dx = (ln 2)2ˣ" (the "2ˣ" drawn as the glyph copied from the equation strip, unchanged; ln 2 in the factor highlight). Row 2 "at x = 3: (ln 2) × 2³ = 8 ln 2" (bright; "x = 3" given glows). On "five" row 3 "≈ 5.55" (bright). Row 1 stays; row 2 dims slightly. On "graph" a small `FunctionGraph` (x from 1.5 to 3.5, y from 0 to 12; ticks 2, 3 and 4, 8, 12 only) draws y = 2ˣ with the point (3, 8), its tangent and triangle (run 1, rise 5.55); the readout panel beside it "height 8.00, gradient 5.55"; on "that" the ratio chip "÷ height = 0.693". On "eight" (second) a chip "dy/dx = 2ˣ, so gradient = 8" fades in and is crossed (`Chip` with `cross`), caption "missing ln 2: that is eˣ's slope at height 8".

### 10. memory aid
> Here's a way to remember it. Except when the base is one, a to the x is e to the x scaled sideways. The natural log of the base sets the scale. You can see that number on the graph. Where a to the x crosses the y axis, its height is one. So its slope there is exactly the natural log of a. Two to the x leaves with slope point six nine three, and e to the x with slope one. So copy the exponential, then multiply by the natural log of the **base**.

Visual: board clears to the main window: dashed eˣ, blue 2ˣ, and on "crosses" both tangents at (0, 1) draw again (scene 1 replay), now labelled "slope ln 2 = 0.693" and "slope ln e = 1"; a ring marks (0, 1) with "height 1". A third, faint curve (½)ˣ with "slope ln ½ = −0.693" draws briefly at the same point. On "base" the handwritten line writes large: "Copy the exponential, then multiply by ln of the base." Under it, smaller: "aˣ leaves the y-axis with slope ln a". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. For f of x equals five to the x, find f prime of x, then the exact value of f prime of zero. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Consider the function f(x) = 5ˣ. (a) Find f′(x). (b) Find the exact value of f′(0)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no ln shown).

### 12. feedback 1 (brief)
> The base is five, so f prime of x is the natural log of five, times five to the **x**. At zero, five to the zero is one, so f prime of zero is exactly the natural log of five, about one point six **one**. If you wrote x times five to the x minus one, that's the power rule, and it needs x in the base. It gives zero here, a flat tangent on a rising **curve**.

Visual: card shrinks to the top. On "x" "5ˣ" in the card is underlined; row "f′(x) = (ln 5)5ˣ" (bright; ln 5 in the factor highlight). On "one" "f′(0)" and "exact" are underlined; row "f′(0) = (ln 5) × 5⁰ = ln 5 ≈ 1.61" (bright; "ln 5" boxed as the exact answer). On "curve" a chip "f′(x) = x · 5^(x−1), so f′(0) = 0" fades in and is crossed (caption "power rule needs x in the base"), and a tiny thumbnail of 5ˣ rising through (0, 1) draws beside it. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. For g of x equals a half to the x, find the exact value of g prime of two, and explain its sign. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Consider the function g(x) = (½)ˣ. (a) Find the exact value of g′(2). (b) Explain the sign of g′(2)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

Note: part (b)'s wording gives the sign away by design; the task is the explanation, as the pack's "explain its sign" intends. Narration says "explain its sign" (shorter); the card's (b) is the precise demand. Learning review to judge (Open decisions).

### 14. feedback 2 (brief)
> G prime of x is the natural log of a half, times a half to the x. At two, a half squared is a quarter, so g prime of two is a quarter of the natural log of a half, which is minus the natural log of two, over **four**. It's negative because the base is less than one, so its natural log is negative, while a half to the x is always **positive**. Writing the natural log of two there gives the wrong **sign**.

Visual: card shrinks to the top. Row "g′(x) = (ln ½)(½)ˣ" ("(½)ˣ" underlined in the card). On "four" "g′(2)" and "exact" underlined; rows "g′(2) = (ln ½)(½)² = ¼ ln ½" and "= −(ln 2)/4 ≈ −0.173" (bright, exact form boxed). On "positive" chips "½ < 1, so ln ½ < 0" and "(½)ˣ > 0 for every x" write side by side with "(−) × (+) < 0"; "sign" in the card is underlined; a small `FunctionGraph` thumbnail of (½)ˣ falling, above the x-axis. On "sign" a chip "g′(2) = (ln 2)/4" fades in and is crossed (caption "ln ½ = −ln 2"). Hold about 1 second.

### 15. handoff
> So a to the x is e with x times the natural log of a in the power, and its derivative is the natural log of a, times a to the x. **Next**: our ratio points traced the natural log curve. What's the gradient of that curve itself?

Visual: board clears. The memory line from scene 10 returns small at the top. The ratio panel returns large with its six markers on y = ln a. On "Next" the markers fade, the axis label "base a" rewrites as "x", the curve label becomes "y = ln x", and an amber tangent draws at (1, 0) with a "gradient ?" chip; chip "Next: differentiating ln x". Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. For a > 0: d/dx(aˣ) = (ln a)aˣ. Copy the exponential, then multiply by ln a.
2. Why: a = e^(ln a), so aˣ = e^(x ln a). For a ≠ 1 this is eˣ scaled sideways by 1/ln a, so at each height the slope is multiplied by ln a. Chain rule: u = x ln a, du/dx = ln a. On y = aˣ, gradient = (ln a) × height.
3. Cases: a = e gives ln e = 1, so d/dx(eˣ) = eˣ. a = 1 gives y = 1, gradient 0 (ln 1 = 0). For 0 < a < 1, ln a < 0: the curve falls, and aˣ stays positive.
4. Example: y = 2ˣ at x = 3: dy/dx = (ln 2)2ˣ, so the gradient is 8 ln 2 ≈ 5.55.
5. Traps: ln a is a constant, not ln x. Not x·a^(x−1): the power rule needs x in the base. The base must be positive; a = 1 is allowed here (a ≠ 1 is for log bases).

Memory aid (large, on the notes screen): *Copy the exponential, then multiply by ln of the base.* Second line: *aˣ leaves the y-axis with slope ln a.*

## Teaching checks

- **Does it explain causes?** Why 2^x is not its own derivative: it leaves (0, 1) flatter than e^x on the same axes (1). Why the ratio is constant: 2^x is e^(0.693x), and d01 showed the ratio equals the number in the power (3, 6). Why e is special: it is the base whose ratio is 1 (4). Why a logarithm: ln a is the power that turns e into a, so it becomes the number in the power (6, 7). Why the slope is multiplied by ln a: the sideways scale by 1/ln a multiplies every run and keeps every rise (6). Why a = 1 gives 0: the curve is a flat line, and ln 1 = 0 (8). Why 0 < a < 1 falls: ln a < 0, the mirror of a base above one, while heights stay positive (8). Why a > 0: ln a and a^x for every real x need it (8).
- **Misconceptions addressed:** "d/dx(2^x) = 2^x" (1, by the picture; 9, crossed); "power rule x a^(x−1)" (13, crossed); "ln ½ is positive" (15, crossed); "ln a is ln x" (7, said positively); "a ≠ 1 is required for this formula" (8, notes); "e has a separate rule" (7).
- **One idea at a time:** one base per beat; one readout panel and one ratio chip live; the ratio panel only grows with markers already measured; the triangle is the only construction on the graph; one algebra row per spoken step with earlier rows dimmed.
- **Video makes it easier:** the student sees two slopes leave one point (1), watches a secant settle to 0.693 and the ratio refuse to move (3), watches the ratio cross exactly 1 as the curve lands on e^x (4), sees the measured points land on the log curve (5), and watches e^x stretch onto 2^x with the triangle's run growing and its rise fixed (6). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (the function, the point, "exact", the explanation demand), 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 27 s and 30 s (scenes 12 and 14).
- **Avoided double teaching:** d01's rule is one sentence plus a 1 s replay; e^x as its own derivative, e^(ln a) = a, the index law and the chain rule are each one sentence with a grey chip; the secant is one readout, not a first-principles proof.
- **Syllabus coverage:** `ci31a76d4a` "prove" (scene 7, with the cause in 3 to 6) and "use" (9, attempts), with the condition a > 0 (8). Owned by this video (route `coverage: owned-action`).
- **Out of scope by design:** ln x, log_a x, a^(f(x)) with non-linear f, products, quotients, stationary points.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Consider the function f(x) = 5ˣ. (a) Find f′(x). (b) Find the exact value of f′(0)."
Model answer: (a) f′(x) = (ln 5)5ˣ. (b) f′(0) = (ln 5)5⁰ = ln 5 (≈ 1.61). Classic mistake (crossed): f′(x) = x · 5^(x−1), giving f′(0) = 0 (power rule; needs x in the base).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** "Consider the function g(x) = (½)ˣ. (a) Find the exact value of g′(2). (b) Explain the sign of g′(2)."
Model answer: (a) g′(x) = (ln ½)(½)ˣ, so g′(2) = ¼ ln ½ = −(ln 2)/4 (≈ −0.173). (b) ½ < 1, so ln ½ < 0, and (½)² = ¼ > 0, so g′(2) is negative (the curve is decreasing there; in fact everywhere). Classic mistake (crossed): g′(2) = (ln 2)/4 (ln ½ written as ln 2).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Main window | x from −2 to 3, y from 0 to 8 | 1 to 8, 10, 15 |
| e | 2.71828 (dial 2.718) | 4, 7 |
| e^x at x = 0, 1 | height 1, gradient 1; 2.72, 2.72 | 1, 2 |
| e^(2x) at 0 (d01 replay) | height 1, gradient 2 | 2 |
| Secant of 2^x at 0 | h = 0.5: 0.828; 0.1: 0.718; 0.01: 0.696; limit ln 2 = 0.693 | 3 |
| 2^x | x = 0: 1, 0.693; x = 1: 2, 1.39; x = 2: 4, 2.77 | 3, 6 |
| 3^x | x = 0: 1, 1.10; x = 1: 3, 3.30; ratio 1.099 | 4 |
| 4^x at x = 1 | height 4, gradient 5.55; ratio 1.386 | 5 |
| ln values | ln ½ = −0.693, ln 1 = 0, ln 2 = 0.693, ln e = 1, ln 3 = 1.099, ln 4 = 1.386, ln 5 = 1.609 | 5, 8, 10, 12 |
| Ratio panel | base 0 to 4.5, ratio −1 to 1.6; markers (½, −0.693), (1, 0), (2, 0.693), (e, 1), (3, 1.099), (4, 1.386) | 5, 8, 15 |
| Stretch | e^x scaled by 1/ln 2 = 1.443; triangle from (0.693, 2), run 1, rise 2 → at (1, 2), run 1.44, rise 2, slope 1.39 | 6 |
| 3^x scale | factor 1/ln 3 = 0.910 (screen tag only) | 4 |
| (½)^x at x = 1 | height 0.5, gradient −0.347 | 8 |
| Worked 1 (site we-1, extended) | dy/dx = (ln 2)2ˣ; at 3: 8 ln 2 = 5.545 (5.55); window x 1.5 to 3.5, y 0 to 12; triangle run 1, rise 5.55, to (4, 13.5) clipped: use run 0.5 if the rise leg clips (Open decisions) | 9 |
| Crossed (9) | 2ˣ, gradient 8 | 9 |
| A1 | f′(x) = (ln 5)5ˣ, f′(0) = ln 5 ≈ 1.61; crossed 0 | 11, 12 |
| A2 | g′(2) = ¼ ln ½ = −(ln 2)/4 ≈ −0.173; crossed (ln 2)/4 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked by hand and in Python (1 Nov); Codex to re-check numerically and with a CAS.

- ln 2 = 0.693147; ln 3 = 1.098612; ln 4 = 1.386294; ln 5 = 1.609438; ln 10 = 2.302585; ln ½ = −0.693147; e = 2.718282.
- (2^h − 1)/h: h = 0.5: 0.828427; h = 0.1: 0.717735; h = 0.01: 0.695555; h = 0.001: 0.693387.
- 2^x gradient (ln 2)2^x: x = 0: 0.6931; 1: 1.3863; 2: 2.7726; 3: 5.5452. 3^x: x = 0: 1.0986; 1: 3.2958. 4^x at 1: 5.5452. (½)^x at 1: −0.3466; at 2: −0.1733.
- Horizontal scale: e^(x/s) with s = 1/ln 2 = 1.442695 is 2^x; e^x at (ln 2, 2) has slope 2; carried point (1, 2) has slope 2 ln 2 = 1.3863; run 1 → 1.4427, rise 2. 2^(1/ln 2) = e. 1/ln 3 = 0.910239.
- (½)^x = 2^(−x); slope of (½)^x at corresponding mirrored points is the negative of 2^x's.
- Worked 1: tangent y = 8 ln 2 (x − 3) + 8 passes (4, 13.545) and (3.5, 10.77); window y to 12.
- Cut example (site we-2, for a later video): d/dx 3^(2x) = 2 ln 3 · 3^(2x); at 0: 2.1972.
- A1: f′(0) = ln 5. A2: g′(2) = −(ln 2)/4 = −0.173287.
- Site checks: practice Q3 x = (−1 − 2/ln 3)/2 = −1.4102.

## Memory aid check

- **"aˣ leaves the y-axis with slope ln a."** Written for this lesson; it is the formula at x = 0, where the height a⁰ = 1, so gradient = (ln a) × 1. Assumptions checked: a > 0 (a⁰ = 1 needs a ≠ 0; the base is positive anyway); true for a = 1 (slope 0), 0 < a < 1 (negative slope), a = e (slope 1, the Year 11 fact). It helps a new case: 10ˣ leaves with slope ln 10 ≈ 2.30 (site drill 5), so 10ˣ rises 2.30 times as fast as its height everywhere. It gives a picture to rebuild the rule: the y-intercept slope sets the fixed ratio, so gradient = (ln a) × height. Limit: it is about y = aˣ itself (power x); the narration does not extend it to other powers.
- **"Copy the exponential, then multiply by ln of the base."** Restates d/dx(aˣ) = (ln a)aˣ in d01's "copy, then multiply" form, so the two videos share one habit. Assumption: the power is x itself; for a power such as 2x the d01 factor is also needed (not taught here). Introduced after the cause (3 to 6) and the proof (7).
- **"Every exponential is e^x in disguise, scaled sideways."** True for a > 0, a ≠ 1 (author note a); for a = 1 there is no scale and the curve is flat, which the narration covers separately in scene 8 before the aid. Scene 10's wording says "scaled sideways", not "squashed", so it covers stretches and mirrors.
- **Considered, not used:** the site's "tuning an instrument to a different key" (does not explain the factor); "the chain rule drops ln a out front" (echoes the power rule; site correction 4).

## Narration length estimate

Revision 1 count (1 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,348 characters**, 16 scenes. Characters per scene (1 to 16): 453, 353, 559, 459, 451, 643, 627, 560, 511, 439, 125, 347, 128, 395, 223, 75. At 13.3 characters per second the speech is about 477 s; add about 18 s of holds and settling time for the sweeps and the stretch, 20 s for two countdowns and about 55 s more of the quiet notes hold: **about 9.5 minutes (570 s)**, inside the 5,500 to 6,800 character band and under the 570 s cap. A drafted second worked example (site `we-2`, 470 characters) was cut to meet the cap (Open decisions). Scenes 3, 6 and 7 are the longest; watch the secant stops, the base sweep's held keyframe at e, and the stretch against speech in the voiced preview (the stretch must finish before "four" in scene 6). Feedback: scene 12 about 27 s, scene 14 about 30 s (including the 1 s holds), at the top of the 15 to 30 s guide. Reserve trims if the voiced take runs long: scene 5's calculator sentence (keep the chip); scene 9's last two sentences (keep the crossed chip and caption); scene 2's d01 squash sentence (keep the 1 s replay).

## Scene list and build ids

Lesson key `m-a12d02` (route math-a12-d02). Suggested explainer folder `src/explainer/lessons/math-a12-d02` and build folder `docs/production/claude-pm/lessons/m-a12d02` (root to confirm when adding the LESSONS entry). Reuse d01's readout panel and ratio chip if built as kit parts; if they were built lesson-local in d01, move them into the kit now (they recur in d03 to d05).

In order (kebab-case; 16 scene headings, all `### N.`): hook, recall-measuring-stick, measure-2x, base-sweep, ratios-are-logs, why-stretch, proof, bases-below-two, worked-1, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five notes). Transitions (`pickTransition`): 1 to 2 to 3 to 4 to 5 camera continue (same axes); 5 to 6 the ratio panel shrinks and the algebra strip enters (same board); 6 to 7 camera push from the graph into the thumbnail, then the algebra board; 7 to 8 camera pull back to the full graph; 8 to 9 clear change (new task); 9 to 10 camera pull back to the main window; attempts and feedback card shrink to the top; 14 to 15 board clear to the ratio panel; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12d02-learning-review.md`, `science_check` = `checks/m-a12d02-maths-check.md`.

## Assets

Have: no plates. All visuals are coded with the explainer kit and the brief 129 maths kit with its d01 addendum:
- `FunctionGraph` / `GraphLayer` (scenes 1 to 10, 12, 14, 15): eˣ, 2ˣ, 3ˣ, 4ˣ, (½)ˣ, 1ˣ, e²ˣ (replay); `parameterFn(x, a) = aˣ` with the parameter animated (sweeps in 4, 5, 8) and `tangent.slope = aˣ ln a` supplied by the caller; `ghostParameter` or a separate dashed layer for eˣ; `transform.xScale` from 1 to 1/ln 2 (scene 6) and a mirror (scene 8, negative xScale on the 2ˣ layer); moving point; markers on the ratio panel; clipping at the window top.
- `SecantToTangent` (scene 3): on 2ˣ at x = 0 from x = 0.5, with zoom inset.
- `TangentTriangle` (scenes 3, 6, 9) with `readouts={false}` and the same transform as its curve; leg labels changed at cues.
- `AlignedAlgebra`, `ExpressionSlot` (inner), `DerivativeFactor` (scenes 6, 7, 9, 12, 14).
- Shared: `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `KeyNotes`, `Heading`, number tickers.

Kit gaps (small; for the first maths build brief, not a new kit brief):
1. **Secant stops.** `SecantToTangent` animates Q continuously over `duration`. Scene 3 needs Q to hold at x = 0.5, 0.1 and 0.01 on cue (an optional `stops: {x, at}[]` prop, or the build drives Q's position frame by frame with the exported `secantState`).
2. **Readout panel and ratio chip as kit parts.** `TangentTriangle`'s built-in readouts sit at a fixed corner (root review 129 item 1). The lesson needs a readout panel beside the graph joined to the point by a leader, plus a "gradient ÷ height" ratio chip computed from the same carried point and slope, so the numbers can never disagree with the picture. d01 asked for the same parts; build them once.
3. **Base dial (minor).** A small numeric dial label "base a = 2.000" bound to the sweep parameter. A number ticker in a chip is enough.

## Codex asset brief

None. No painted plate is needed (programme decision 5).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically (and with a CAS for the derivatives), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the geometric claims: aˣ = e^(x ln a) is eˣ scaled horizontally by 1/ln a (a > 0, a ≠ 1); the run scales and the rise stays, so the slope at corresponding points (same height) is multiplied by ln a; 2ˣ is a stretch (1.443), 3ˣ a slight squash (0.910), (½)ˣ the mirror of 2ˣ (author note a). Confirm "at every height, the slope is multiplied by point six nine three" (scene 6) is stated at corresponding points.
3. Confirm the proof rows in scene 7 are complete and correctly ordered, the inner expression x ln a is retained, and du/dx = ln a is justified (a fixed).
4. Confirm the base statements: the formula holds for every a > 0 including a = 1; ln a < 0 for 0 < a < 1; a ≤ 0 is excluded for the stated reasons; the video never says a ≠ 1 is needed for the formula.
5. Confirm both attempt questions are original in wording (from the pack, not a NESA paper) and every condition the answer needs is on the card.
6. Confirm the syllabus quote matches the route JSON `syllabusActions` exactly (linear form of the MathML), and no site "Year 11" or "Module 4" label appears anywhere in learner copy or metadata.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Add site corrections 1 to 4 under Decisions to `../site-corrections-maths-a12.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Differentiating a^x: Why ln a Appears | Year 12 Maths Advanced

(Title length: 62 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson02.sa.html

Why is the derivative of 2^x not 2^x, and why does a logarithm appear in it? Measure the gradient of 2^x and compare it with the height: the ratio is ln 2, about 0.693. Every base has its own fixed ratio, e is the base whose ratio is exactly 1, and the ratios are ln a. Then see why: a^x = e^(x ln a) is e^x scaled sideways, so every slope is multiplied by ln a. Prove d/dx(a^x) = (ln a)a^x with the chain rule, including bases equal to 1 and below 1. One worked example and two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, differential calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Prove and use the formula d/dx(a^x) = (ln a)a^x, where a is a constant and a > 0"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

Builds on: Differentiating k e^(ax+b) (previous video); Year 11 logarithms and the chain rule. Next: Differentiating ln x.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **Home for a^(kx) (root).** Site `we-2` (3^(2x)) and Trap 03 (both factors) were drafted here as a second worked example (470 characters, about 35 s) and cut for the 570 s cap and the route's stop "before ... extended composites". Recommended: d06 opens with 3^(2x) = e^(2x ln 3), linking d01 and d02. Returning it here would need an equal cut elsewhere; the only candidates (scene 3's three secant stops reduced to one, scene 5's calculator line) weaken the measurement, so this design does not recommend it.
- **Spoken "natural log" (root, at the voice pilot).** The narration says "the natural log of a" in full about 30 times. If the brief 124 pilot shows the voice reads "L N a" or "log a" naturally and listeners accept it, root may shorten later scenes to "log a" (saves about 300 characters). Keep "natural log" at first use in each scene.
- **Letter "a" in speech (carried from d01).** The base a is said as the letter name; test in the pilot with scenes 7 and 8.
- **Attempt 2 part (b) wording (learning review).** "Explain why g′(2) is negative" states the sign; the task is the reason. Alternative: "(b) State the sign of g′(2) and explain it." Reviewer to choose; the narration line already says "explain its sign".
- **Worked 1 triangle.** With run 1 the rise leg reaches y = 13.5 and clips at the window top (12). Use run 0.5 (rise 2.77, to y = 10.77) if the build shows clipping; the narration does not mention the run.
- **Ratio panel axis relabel in the handoff.** Relabelling "base a" as "x" turns the panel into y = ln x. This is a true statement (the same curve), but the reviewer should confirm that students will not take it as a claim about d03's answer. No gradient value is shown.
- **The brief's "a ≠ 1" (root).** The task brief asked to handle "a > 0, a ≠ 1". The syllabus states only a > 0 and the route requires the a = 1 case, so the design keeps a = 1 inside the rule (gradient 0) and places a ≠ 1 with logarithm bases (key note 5, site correction 1). Confirm.
- **Site link form.** The description link uses the `.sa.html` form, like d01. Confirm the live maths page path.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from the d01 and Year 11 entry knowledge; check that the secant readout in scene 3 is followable at playback speed, that the sweep in scene 4 makes "e is the base with ratio 1" visible, that the ratio panel in scene 5 is not confused with the main graph, and that the stretch in scene 6 is understood as d01's picture), then the Codex maths check and error check.
- The sweeps, the stretch and the mirror carry the explanation; judge them at playback speed in the voiced preview, not from stills. The tangent triangle must stay attached to the curve during the stretch (one coordinate transform), and the readouts and ratio chip must never contradict the screen (computed from the same carried point and slope).
- d03 to d05 should reuse the ratio panel idea where useful (for ln x, the gradient compared with 1/x) and keep the cause, proof, examples order.
